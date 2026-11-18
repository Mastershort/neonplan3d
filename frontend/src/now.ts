// "What is going on?" – the phone's answer to "is everything all right at home?": what the house knows right now as a
// short list, the urgent first, with the obvious thing to do beside it (lights off, lock the door). Built only from
// what the 3D view already works out (warnings, openings, locks, people, the household, lights, energy, cars);
// nothing is asked from Home Assistant for it.

/** Where a tap on a line leads: an entity in the plan, or a room. */
export interface NowTarget {
  entity?: string | null;
  floorId?: string | null;
  roomId?: string | null;
  /** A window or door of the plan (its id): the house shows it from inside its room. */
  opening?: string;
  /** What the place is called in the list of a line with several places ("Bad", "Haustür"). */
  label?: string;
}

/** What a button beside a line does: switch these lights off, lock these locks. */
export interface NowAction {
  kind: "lights_off" | "lock";
  entities: string[];
}

export interface NowInput {
  /** The house's warnings, in their own words ("Küche · Rauch"). */
  alerts: (NowTarget & { text: string })[];
  /** Windows and doors with a contact: where they are and whether they stand open or are tilted. */
  openings: (NowTarget & { id: string; kind: "door" | "window" | "garage" | "roof_window"; name?: string; room: string; open: boolean; tilted: boolean })[];
  /** Locks that are not locked. */
  unlocked: (NowTarget & { name: string })[];
  /** Home Assistant's persons: at home or not, and the room when the plan knows it. */
  people: (NowTarget & { name: string; home: boolean; room: string | null })[];
  /** The household card's lines (appliances, bins, post, plants, dates). */
  household: { text: string; entity: string | null; hot: boolean }[];
  /** Lights on, per room (`on`: their entities). */
  lights: (NowTarget & { room: string; count: number; on?: string[] })[];
  /** Watts; null where the house has no such sensor. */
  energy: { consumption: number | null; solar: number | null; grid: number | null; soc: number | null } | null;
  cars: (NowTarget & { name: string; present: boolean; charging: boolean; soc: number | null })[];
  /** The person looking is not at home: safety comes first. */
  away: boolean;
}

export type NowKind = "alert" | "open" | "unlocked" | "people" | "household" | "lights" | "energy" | "car" | "calm";

export interface NowItem {
  kind: NowKind;
  /** 2 = a warning, 1 = worth a look, 0 = good to know. */
  level: 0 | 1 | 2;
  title: string;
  detail: string;
  /** The places a tap shows; empty: nothing to show. */
  targets: NowTarget[];
  /** The obvious thing to do about the whole line. */
  action?: NowAction;
}

/** The texts the list needs; `n` stands for the number in the plural forms. */
export interface NowWords {
  open(n: number): string;
  tilted: string;
  unlocked(n: number): string;
  home: string;
  away: string;
  nobodyHome: string;
  lights(n: number): string;
  energyUse: string;
  energySolar: string;
  energyGrid: string;
  energyFeed: string;
  battery: string;
  charging: string;
  carAway: string;
  calm: string;
  calmDetail: string;
  watts(w: number): string;
}

const join = (parts: string[], max = 4) => (parts.length > max ? [...parts.slice(0, max), "…"] : parts).join(", ");

/** One opening has several entities (two contacts, a cover): each opening that stands open or tilted, once. */
function openNow(i: NowInput): NowInput["openings"] {
  const seen = new Set<string>();
  return i.openings.filter((o) => (o.open || o.tilted) && !seen.has(o.id) && !!seen.add(o.id));
}

/** The list: warnings, then what stands open or unlocked, then people, the household, lights, cars and energy. */
export function nowItems(i: NowInput, w: NowWords): NowItem[] {
  const out: NowItem[] = [];
  for (const a of i.alerts) out.push({ kind: "alert", level: 2, title: a.text, detail: "", targets: [a] });

  const openings = openNow(i);
  if (openings.length) {
    const names = openings.map((o) => (o.tilted ? `${o.room} (${w.tilted})` : o.room)).filter(Boolean);
    const targets = openings.map((o) => ({ entity: o.entity, opening: o.id, floorId: o.floorId, roomId: o.roomId, label: [o.room, o.name, o.tilted ? `(${w.tilted})` : ""].filter(Boolean).join(" ") }));
    out.push({ kind: "open", level: 1, title: w.open(openings.length), detail: join([...new Set(names)]), targets });
  }
  if (i.unlocked.length) {
    out.push({
      kind: "unlocked",
      level: 1,
      title: w.unlocked(i.unlocked.length),
      detail: join(i.unlocked.map((l) => l.name)),
      targets: i.unlocked.map((l) => ({ entity: l.entity, floorId: l.floorId, roomId: l.roomId, label: l.name })),
      action: { kind: "lock", entities: i.unlocked.flatMap((l) => (l.entity ? [l.entity] : [])) },
    });
  }

  if (i.people.length) {
    const home = i.people.filter((p) => p.home);
    const gone = i.people.filter((p) => !p.home);
    const title = home.length ? `${w.home}: ${join(home.map((p) => (p.room ? `${p.name} (${p.room})` : p.name)))}` : w.nobodyHome;
    const targets = home.filter((p) => p.roomId).map((p) => ({ floorId: p.floorId, roomId: p.roomId, label: `${p.name} · ${p.room}` }));
    out.push({ kind: "people", level: 0, title, detail: gone.length ? `${w.away}: ${join(gone.map((p) => p.name))}` : "", targets });
  }

  const hot = i.household.filter((h) => h.hot);
  const rest = i.household.filter((h) => !h.hot);
  for (const h of hot) out.push({ kind: "household", level: 1, title: h.text, detail: "", targets: h.entity ? [{ entity: h.entity }] : [] });
  if (rest.length) out.push({ kind: "household", level: 0, title: rest[0].text, detail: join(rest.slice(1).map((h) => h.text), 3), targets: [] });

  const lit = i.lights.filter((l) => l.count > 0);
  const lightsOn = lit.reduce((n, l) => n + l.count, 0);
  if (lightsOn) {
    const entities = lit.flatMap((l) => l.on ?? []);
    out.push({
      kind: "lights",
      level: 0,
      title: w.lights(lightsOn),
      detail: join(lit.map((l) => l.room)),
      targets: lit.map((l) => ({ floorId: l.floorId, roomId: l.roomId, label: l.count > 1 ? `${l.room} (${l.count})` : l.room })),
      ...(entities.length ? { action: { kind: "lights_off" as const, entities } } : {}),
    });
  }

  for (const c of i.cars) {
    const soc = c.soc !== null ? `${Math.round(c.soc)} %` : "";
    const state = !c.present ? w.carAway : c.charging ? w.charging : "";
    if (state || soc) out.push({ kind: "car", level: 0, title: c.name, detail: [state, soc].filter(Boolean).join(" · "), targets: [] });
  }

  const e = i.energy;
  if (e && (e.consumption !== null || e.solar !== null)) {
    const parts: string[] = [];
    if (e.solar !== null && e.solar > 5) parts.push(`${w.energySolar} ${w.watts(e.solar)}`);
    if (e.grid !== null && Math.abs(e.grid) > 5) parts.push(`${e.grid < 0 ? w.energyFeed : w.energyGrid} ${w.watts(Math.abs(e.grid))}`);
    if (e.soc !== null) parts.push(`${w.battery} ${Math.round(e.soc)} %`);
    out.push({ kind: "energy", level: 0, title: e.consumption !== null ? `${w.energyUse} ${w.watts(e.consumption)}` : parts.shift()!, detail: parts.join(" · "), targets: [] });
  }

  // away from home the safety lines lead: who is there comes right after the warnings
  const rank = (it: NowItem) => (it.level === 2 ? 0 : i.away && it.kind === "people" ? 1 : it.level === 1 ? 2 : 3);
  const sorted = out.map((it, n) => ({ it, n })).sort((a, b) => rank(a.it) - rank(b.it) || a.n - b.n).map((x) => x.it);

  // nothing that needs a look: the one line people open the app for
  if (!sorted.some((it) => it.level > 0)) sorted.unshift({ kind: "calm", level: 0, title: w.calm, detail: w.calmDetail, targets: [] });
  return sorted;
}

/**
 * The one line under the house: the first warning, else what needs a look and the lights ("2 Fenster offen · 4 Lichter
 * an"), else that all is well. `level` colours it.
 */
export function nowSummary(items: NowItem[]): { text: string; level: 0 | 1 | 2 } {
  const alerts = items.filter((it) => it.level === 2);
  if (alerts.length) return { text: alerts.length > 1 ? `${alerts[0].title} (+${alerts.length - 1})` : alerts[0].title, level: 2 };
  const look = items.filter((it) => it.level === 1);
  const lights = items.find((it) => it.kind === "lights");
  if (look.length) return { text: [...look.slice(0, 2).map((it) => it.title), ...(lights && look.length < 2 ? [lights.title] : [])].join(" · "), level: 1 };
  const calm = items.find((it) => it.kind === "calm");
  return { text: [calm?.title ?? "", lights?.title ?? ""].filter(Boolean).join(" · "), level: 0 };
}

/** A stop of the house check: one place to look at, and what can be done there. */
export interface NowStop {
  kind: "open" | "unlocked" | "lights";
  title: string;
  target: NowTarget;
  action?: NowAction;
}

/**
 * The house check before leaving or going to bed: every window and door that stands open, every door not locked and
 * every room with a light on, one after another – first what cannot be switched from here (a window has to be shut
 * by hand), then the locks, then the lights.
 */
export function nowStops(i: NowInput, w: NowWords): NowStop[] {
  const stops: NowStop[] = [];
  for (const o of openNow(i)) stops.push({ kind: "open", title: [o.room, o.name, o.tilted ? `(${w.tilted})` : ""].filter(Boolean).join(" · "), target: { entity: o.entity, opening: o.id, floorId: o.floorId, roomId: o.roomId } });
  for (const l of i.unlocked) stops.push({ kind: "unlocked", title: l.name, target: { entity: l.entity, floorId: l.floorId, roomId: l.roomId }, ...(l.entity ? { action: { kind: "lock" as const, entities: [l.entity] } } : {}) });
  for (const l of i.lights) {
    if (l.count <= 0) continue;
    stops.push({ kind: "lights", title: `${l.room} · ${w.lights(l.count)}`, target: { floorId: l.floorId, roomId: l.roomId }, ...(l.on?.length ? { action: { kind: "lights_off" as const, entities: l.on } } : {}) });
  }
  return stops;
}
