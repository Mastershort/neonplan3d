// "What is going on?" – the phone's answer to "is everything all right at home?": what the house knows right now as a
// short list, the urgent first. Built only from what the 3D view already works out (warnings, openings, locks,
// people, the household, lights, energy, cars); nothing is asked from Home Assistant for it.

/** Where a tap on a line leads: an entity in the plan, or a room. */
export interface NowTarget {
  entity?: string | null;
  floorId?: string | null;
  roomId?: string | null;
}

export interface NowInput {
  /** The house's warnings, in their own words ("Küche · Rauch"). */
  alerts: (NowTarget & { text: string })[];
  /** Windows and doors with a contact: where they are and whether they stand open or are tilted. */
  openings: (NowTarget & { id: string; kind: "door" | "window" | "garage" | "roof_window"; room: string; open: boolean; tilted: boolean })[];
  /** Locks that are not locked. */
  unlocked: (NowTarget & { name: string })[];
  /** Home Assistant's persons: at home or not, and the room when the plan knows it. */
  people: (NowTarget & { name: string; home: boolean; room: string | null })[];
  /** The household card's lines (appliances, bins, post, plants, dates). */
  household: { text: string; entity: string | null; hot: boolean }[];
  /** Lights on, per room. */
  lights: (NowTarget & { room: string; count: number })[];
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
  /** The places a tap shows, one after another; empty: nothing to show. */
  targets: NowTarget[];
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
  household: string;
  watts(w: number): string;
}

const join = (parts: string[], max = 4) => (parts.length > max ? [...parts.slice(0, max), "…"] : parts).join(", ");

/** The list: warnings, then what stands open or unlocked, then people, the household, lights, cars and energy. */
export function nowItems(i: NowInput, w: NowWords): NowItem[] {
  const out: NowItem[] = [];
  for (const a of i.alerts) out.push({ kind: "alert", level: 2, title: a.text, detail: "", targets: [a] });

  // one opening has several entities (two contacts, a cover): each opening counts once
  const seen = new Set<string>();
  const openings = i.openings.filter((o) => (o.open || o.tilted) && !seen.has(o.id) && !!seen.add(o.id));
  if (openings.length) {
    const names = openings.map((o) => (o.tilted ? `${o.room} (${w.tilted})` : o.room)).filter(Boolean);
    out.push({ kind: "open", level: 1, title: w.open(openings.length), detail: join([...new Set(names)]), targets: openings });
  }
  if (i.unlocked.length) out.push({ kind: "unlocked", level: 1, title: w.unlocked(i.unlocked.length), detail: join(i.unlocked.map((l) => l.name)), targets: i.unlocked });

  if (i.people.length) {
    const home = i.people.filter((p) => p.home);
    const gone = i.people.filter((p) => !p.home);
    const title = home.length ? `${w.home}: ${join(home.map((p) => (p.room ? `${p.name} (${p.room})` : p.name)))}` : w.nobodyHome;
    out.push({ kind: "people", level: 0, title, detail: gone.length ? `${w.away}: ${join(gone.map((p) => p.name))}` : "", targets: home.filter((p) => p.roomId) });
  }

  const hot = i.household.filter((h) => h.hot);
  const rest = i.household.filter((h) => !h.hot);
  for (const h of hot) out.push({ kind: "household", level: 1, title: h.text, detail: "", targets: h.entity ? [{ entity: h.entity }] : [] });
  if (rest.length) out.push({ kind: "household", level: 0, title: rest[0].text, detail: join(rest.slice(1).map((h) => h.text), 3), targets: rest.flatMap((h) => (h.entity ? [{ entity: h.entity }] : [])) });

  const lit = i.lights.filter((l) => l.count > 0);
  const lightsOn = lit.reduce((n, l) => n + l.count, 0);
  if (lightsOn) out.push({ kind: "lights", level: 0, title: w.lights(lightsOn), detail: join(lit.map((l) => l.room)), targets: lit });

  for (const c of i.cars) {
    const soc = c.soc !== null ? `${Math.round(c.soc)} %` : "";
    const state = !c.present ? w.carAway : c.charging ? w.charging : "";
    if (state || soc) out.push({ kind: "car", level: 0, title: c.name, detail: [state, soc].filter(Boolean).join(" · "), targets: c.present ? [c] : [] });
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
