/**
 * Household (free models, Haushalt Pro life): waste bins and mailboxes.
 *
 * The models are for everyone: bins in the shapes used around the world (wheelie bins, sacks, caddies, underground
 * containers, multi-compartment bins) with a body and a lid colour of their own – starting from what is usual in the
 * Home Assistant's country – and mailboxes in their local shapes. Haushalt Pro brings them to life: a bin glows the
 * evening before its pickup (from a waste calendar, e.g. Waste Collection Schedule, or a sensor with the days left),
 * a mailbox glows while post lies in it.
 */
import type { EntityRef, Furniture } from "./model.ts";
import type { HassEntity, HomeAssistant } from "./types.ts";
import { packItem } from "./packs.ts";

/** A line of the glass card "Today in the household": an icon (mdi name), its text, the entity a tap opens. */
export interface HouseholdItem {
  icon: string;
  text: string;
  entity: string | null;
  /** Something to do now (glows): drawn in amber. */
  hot?: boolean;
}

/** A pack item that is a plant: most of its parts are leaves or a pot. */
export function isPackPlant(type: string): boolean {
  const item = packItem(type);
  if (!item) return false;
  // named or tagged as a plant (the Deco pack's plants have leaf colours of their own, #712)
  if (PLANT_WORDS.test([item.id, ...(item.tags ?? []), ...Object.values(item.name ?? {})].join(" "))) return !item.light || /plant|pflanz/i.test(item.id);
  if (item.light) return false;
  const green = item.parts.filter((p) => p.color === "plant").length;
  return green > 0 && green + item.parts.filter((p) => p.color === "pot").length >= item.parts.length / 2;
}

const PLANT_WORDS = /plant|pflanz|palm|monstera|ficus|feige|\bfig\b|fig_|bonsai|kaktus|cactus|yucca|orchid|bambus|bamboo|bogenhanf|snake_|einblatt|lily|gummibaum|rubber|olive|kräuter|\bherb|\bfarn|\bfern\b|\befeu\b|\bivy\b|blumen|flower|tulp|tulip/i;

export const BIN_SHAPES = ["bin120", "bin240", "bin1100", "multi", "bag", "caddy", "underground"] as const;
export type BinShape = (typeof BIN_SHAPES)[number];
export const WASTE_KINDS = ["rest", "bio", "paper", "plastic", "glass", "garden", "recycling", "other"] as const;
export type WasteKind = (typeof WASTE_KINDS)[number];
export const MAILBOX_SHAPES = ["wall", "pole", "pillar", "parcel", "bank"] as const;
export type MailboxShape = (typeof MAILBOX_SHAPES)[number];

/** Size (w, d, h) of each bin shape: a 240 l wheelie bin is 58 × 73 × 107 cm. */
export const BIN_SIZE: Record<BinShape, [number, number, number]> = {
  bin120: [0.48, 0.55, 0.93],
  bin240: [0.58, 0.73, 1.07],
  bin1100: [1.37, 1.07, 1.45],
  multi: [0.6, 0.75, 1.07],
  bag: [0.42, 0.32, 0.62],
  caddy: [0.3, 0.26, 0.32],
  underground: [1.0, 1.0, 1.15],
};

/** Size of each mailbox shape. A wall mailbox hangs with its bottom at 1 m (see `mailboxBase`). */
export const MAILBOX_SIZE: Record<MailboxShape, [number, number, number]> = {
  wall: [0.38, 0.14, 0.34],
  pole: [0.24, 0.5, 1.15],
  pillar: [0.42, 0.36, 1.3],
  parcel: [0.6, 0.55, 1.1],
  bank: [0.95, 0.3, 0.7],
};

export function binShape(f: Pick<Furniture, "variant">): BinShape {
  return (BIN_SHAPES as readonly string[]).includes(f.variant ?? "") ? (f.variant as BinShape) : "bin240";
}

export function mailboxShape(f: Pick<Furniture, "variant">): MailboxShape {
  return (MAILBOX_SHAPES as readonly string[]).includes(f.variant ?? "") ? (f.variant as MailboxShape) : "wall";
}

/** Height of a mailbox's bottom above the floor: a wall mailbox and a mailbox bank hang on the wall. */
export function mailboxBase(f: Pick<Furniture, "variant">): number {
  const s = mailboxShape(f);
  return s === "wall" ? 1.0 : s === "bank" ? 0.75 : 0;
}

// ---------------------------------------------------------------- colours by country

type Pair = [body: string, lid: string];
const GREY: Pair = ["#3a3f47", "#3a3f47"];
const BLACK: Pair = ["#23262b", "#23262b"];
const BROWN: Pair = ["#5a3b25", "#5a3b25"];
const BLUE: Pair = ["#1f4fa8", "#1f4fa8"];
const YELLOW: Pair = ["#e3b616", "#e3b616"];
const GREEN: Pair = ["#2f7d3b", "#2f7d3b"];

/**
 * Usual colours of each kind of waste, per country (body, lid) – a start that every bin can change. Countries
 * without an entry use the default (the German one).
 */
const PRESETS: Record<string, Partial<Record<WasteKind, Pair>>> = {
  default: { rest: GREY, bio: BROWN, paper: BLUE, plastic: YELLOW, glass: GREEN, garden: GREEN, recycling: YELLOW, other: GREY },
  DE: { rest: BLACK, bio: BROWN, paper: BLUE, plastic: YELLOW, glass: GREEN, garden: GREEN, recycling: YELLOW },
  // Austria: paper often under a red lid
  AT: { rest: GREY, bio: BROWN, paper: [GREY[0], "#c0262d"], plastic: YELLOW, glass: GREEN, garden: GREEN },
  CH: { rest: ["#d8d8d8", "#d8d8d8"], bio: GREEN, paper: BLUE, plastic: GREY, glass: GREEN, garden: GREEN },
  NL: { rest: GREY, bio: GREEN, paper: BLUE, plastic: ["#3a3f47", "#e57a1f"], glass: GREEN, garden: GREEN },
  BE: { rest: GREY, bio: GREEN, paper: BLUE, plastic: BLUE, glass: GREEN, garden: GREEN },
  GB: { rest: BLACK, bio: ["#3a3f47", "#5a3b25"], paper: BLUE, plastic: BLUE, glass: BLACK, garden: BROWN, recycling: BLUE },
  US: { rest: BLACK, bio: GREEN, paper: BLUE, plastic: BLUE, glass: BLUE, garden: GREEN, recycling: BLUE },
  CA: { rest: BLACK, bio: GREEN, paper: BLUE, plastic: BLUE, glass: BLUE, garden: GREEN, recycling: BLUE },
  // Australia: the lid tells the kind
  AU: { rest: ["#2f7d3b", "#c0262d"], bio: ["#2f7d3b", "#55b043"], paper: ["#2f7d3b", "#e3b616"], plastic: ["#2f7d3b", "#e3b616"], recycling: ["#2f7d3b", "#e3b616"], glass: ["#2f7d3b", "#7a3e9d"], garden: ["#2f7d3b", "#55b043"] },
  FR: { rest: GREY, bio: BROWN, paper: [GREY[0], "#e3b616"], plastic: [GREY[0], "#e3b616"], recycling: [GREY[0], "#e3b616"], glass: GREEN, garden: GREEN },
  IT: { rest: GREY, bio: BROWN, paper: BLUE, plastic: YELLOW, glass: GREEN, garden: GREEN },
  ES: { rest: GREY, bio: BROWN, paper: BLUE, plastic: YELLOW, glass: GREEN, garden: GREEN },
  PT: { rest: GREY, bio: BROWN, paper: BLUE, plastic: YELLOW, glass: GREEN, garden: GREEN },
  DK: { rest: BLACK, bio: GREEN, paper: BLUE, plastic: GREY, glass: GREEN, garden: GREEN },
  SE: { rest: BLACK, bio: BROWN, paper: BLUE, plastic: GREY, glass: GREEN, garden: GREEN },
  NO: { rest: GREY, bio: BROWN, paper: BLUE, plastic: GREY, glass: GREEN, garden: GREEN },
  FI: { rest: GREY, bio: BROWN, paper: BLUE, plastic: GREY, glass: GREEN, garden: GREEN },
};

let country = "DE";
/** The country the bins take their usual colours from (set from Home Assistant by the views). */
export function householdCountry(): string {
  return country;
}
export function setHouseholdCountry(c: string): void {
  country = c;
}

/** The country of the Home Assistant ("DE", "US" …; set during onboarding), else the language's region. */
export function hassCountry(hass: HomeAssistant | undefined): string {
  const c = (hass?.config as { country?: string | null } | undefined)?.country;
  if (c) return c.toUpperCase();
  const region = (hass?.language ?? "").split("-")[1];
  return region ? region.toUpperCase() : "DE";
}

/** The usual colours (body, lid) of a kind of waste in a country. */
export function wasteColors(kind: WasteKind, country: string): Pair {
  return PRESETS[country]?.[kind] ?? PRESETS.default[kind] ?? GREY;
}

/** The colours a bin is drawn in: its own, else what is usual for its kind (lid = body when it has none). */
export function binColors(f: Pick<Furniture, "bin_kind" | "bin_color" | "bin_lid">, land = country): Pair {
  const preset = wasteColors(f.bin_kind ?? "rest", land);
  const body = f.bin_color || preset[0];
  return [body, f.bin_lid || (f.bin_color ? body : preset[1])];
}

// ---------------------------------------------------------------- waste calendar

/** Words that name a kind of waste in calendar entries, in many languages (lower case; matched as parts of words). */
const KEYWORDS: Record<Exclude<WasteKind, "other">, string[]> = {
  rest: ["rest", "hausmüll", "hausmuell", "general", "garbage", "trash", "refuse", "landfill", "residual", "black bin", "grijs", "ordures", "ménag", "indifferenzia", "secco", "residu", "restavfall", "sekajäte", "sekajate", "dagrenovation", "hushold", "kommunal", "zmieszane", "směsn", "smesn", "vegyes", "rifiut", "basura", "resto", "lixo", "indiferenciad", "其他垃圾"],
  bio: ["bio", "organic", "food", "gft", "vgf", "compost", "kompost", "organico", "organique", "umido", "matavfall", "biojäte", "biojate", "madaffald", "bioaffald", "bioodpad", "organik", "orgánic", "organic", "厨余"],
  paper: ["papier", "paper", "papp", "karton", "cardboard", "carta", "cartón", "carton", "papír", "paperi", "papper", "pap ", "papír", "papel", "makulatur", "纸"],
  plastic: ["gelb", "gelbe", "verpackung", "lvp", "plastic", "plastik", "plastica", "pmd", "emballage", "packaging", "envases", "embalag", "muovi", "förpackning", "forpackning", "emballasje", "obaly", "műanyag", "tworzyw", "塑料"],
  glass: ["glas", "glass", "verre", "vetro", "vidrio", "vidro", "lasi", "sklo", "üveg", "szkło", "玻璃"],
  garden: ["garten", "grün", "gruen", "baum", "laub", "garden", "yard", "green waste", "tuin", "snoei", "sfalci", "potature", "déchets verts", "dechets verts", "jardín", "jardin", "trädgård", "tradgard", "have", "puutarha", "zahrad", "zöld", "zielone"],
  recycling: ["recycl", "wertstoff", "recyclage", "riciclo", "reciclaje", "kierrätys", "återvinning", "genbrug", "gjenvinning", "可回收"],
};

/** Whether a calendar entry's title is about this bin: its own keyword, else the words of its kind. */
export function wasteMatches(summary: string, kind: WasteKind, own?: string | null): boolean {
  const text = ` ${summary.toLowerCase()} `;
  if (own && own.trim()) return own.toLowerCase().split(/[,;|]/).some((w) => w.trim() && text.includes(w.trim()));
  if (kind === "other") return false;
  // "Biotonne" is bio, "Restmüll" rest – but "Papier/Pappe" is not plastic: each kind's words only
  return KEYWORDS[kind].some((w) => text.includes(w));
}

/** One pickup: the day (local midnight) and the entry's title. */
export interface Pickup {
  day: Date;
  summary: string;
}

/** A calendar event from Home Assistant's REST API (`GET /api/calendars/<id>?start&end`). */
interface CalEvent {
  summary?: string;
  start?: { date?: string; dateTime?: string } | string;
}

/** The day of an event's start, local midnight. */
function dayOf(start: CalEvent["start"]): Date | null {
  const raw = typeof start === "string" ? start : (start?.date ?? start?.dateTime);
  if (!raw) return null;
  // an all-day event's "2026-10-16" is a local day, not UTC midnight
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(raw);
  const d = m ? new Date(Number(m[1]), Number(m[2]) - 1, Number(m[3])) : new Date(raw);
  if (Number.isNaN(d.getTime())) return null;
  return new Date(d.getFullYear(), d.getMonth(), d.getDate());
}

export function pickupsOf(events: readonly CalEvent[]): Pickup[] {
  return events
    .map((e) => ({ day: dayOf(e.start), summary: String(e.summary ?? "") }))
    .filter((p): p is Pickup => !!p.day)
    .sort((a, b) => a.day.getTime() - b.day.getTime());
}

/** The calendars the bins read (each fetched once for all bins on it). */
export function wasteCalendars(floors: readonly { furniture: readonly Furniture[] }[]): string[] {
  const out = new Set<string>();
  for (const f of floors.flatMap((x) => x.furniture)) if (f.type === "waste_bin" && typeof f.bin_source === "string" && f.bin_source.startsWith("calendar.")) out.add(f.bin_source);
  return [...out];
}

/** Events of the next `days` days of the waste calendars, by calendar; a calendar that fails is left out. */
// six weeks ahead: bins emptied every two or four weeks show their next pickup too (#585)
export async function fetchPickups(hass: HomeAssistant, calendars: readonly string[], now = new Date(), days = 42): Promise<Map<string, Pickup[]>> {
  const out = new Map<string, Pickup[]>();
  const api = (hass as unknown as { callApi?: <T>(method: string, path: string) => Promise<T> }).callApi;
  if (!api) return out;
  const start = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const end = addDays(start, days);
  await Promise.all(
    calendars.map(async (id) => {
      try {
        const events = await api.call(hass, "GET", `calendars/${id}?start=${encodeURIComponent(start.toISOString())}&end=${encodeURIComponent(end.toISOString())}`);
        out.set(id, pickupsOf(Array.isArray(events) ? (events as CalEvent[]) : []));
      } catch {
        /* a calendar that cannot be read shows nothing */
      }
    }),
  );
  return out;
}

/** What a bin shows: its next pickup in days (0 = today) and whether it glows now. */
export interface BinDue {
  days: number;
  day: Date;
  summary: string;
  /** Put the bin out: from 14:00 the day before until noon on the day. */
  glow: boolean;
}

const startOfDay = (d: Date) => new Date(d.getFullYear(), d.getMonth(), d.getDate());
/** A day `n` days later, counted in calendar days (a day with a clock change has 23 or 25 hours, D576). */
const addDays = (d: Date, n: number) => new Date(d.getFullYear(), d.getMonth(), d.getDate() + n);
const daysBetween = (a: Date, b: Date) => Math.round((startOfDay(b).getTime() - startOfDay(a).getTime()) / 86400_000);

/** From which hour the day before a bin glows, until which hour on the day (the house's settings; 14 and 12). */
export interface BinHours {
  from?: number | null;
  until?: number | null;
}

/** When a pickup lies `days` away: whether the bin glows at this time of day. */
export function binGlows(days: number, now: Date, hours: BinHours = {}): boolean {
  const from = hours.from ?? 14;
  const until = hours.until ?? 12;
  const h = now.getHours() + now.getMinutes() / 60;
  return (days === 1 && h >= from) || (days === 0 && h < until);
}

/** The next pickups of a bin (up to `n`; a sensor knows only its next one), for the tap on the bin. */
export function binNext(f: Pick<Furniture, "bin_kind" | "bin_source" | "bin_match">, hass: HomeAssistant, pickups: ReadonlyMap<string, Pickup[]>, now = new Date(), n = 3): Pickup[] {
  const src = typeof f.bin_source === "string" && f.bin_source !== "none" ? f.bin_source : null;
  if (!src) return [];
  if (src.startsWith("calendar.")) {
    const today = startOfDay(now);
    return (pickups.get(src) ?? []).filter((p) => p.day >= today && wasteMatches(p.summary, f.bin_kind ?? "rest", f.bin_match)).slice(0, n);
  }
  const due = binDue(f, hass, pickups, now);
  return due ? [{ day: due.day, summary: due.summary }] : [];
}

/**
 * The next pickup of a bin: from its calendar's entries (matched by its kind or own keyword), or from a sensor whose
 * state is the days left ("2"), a date ("2026-10-16") or a timestamp; Waste Collection Schedule's `daysTo` attribute
 * counts too. Null without a source or a pickup in sight.
 */
export function binDue(f: Pick<Furniture, "bin_kind" | "bin_source" | "bin_match">, hass: HomeAssistant, pickups: ReadonlyMap<string, Pickup[]>, now = new Date(), hours: BinHours = {}): BinDue | null {
  const src = typeof f.bin_source === "string" && f.bin_source !== "none" ? f.bin_source : null;
  if (!src) return null;
  const today = startOfDay(now);
  if (src.startsWith("calendar.")) {
    const next = (pickups.get(src) ?? []).find((p) => p.day >= today && wasteMatches(p.summary, f.bin_kind ?? "rest", f.bin_match));
    if (!next) return null;
    const days = daysBetween(today, next.day);
    // past the glow's end on the day the bin is emptied: look at the one after
    if (days === 0 && now.getHours() + now.getMinutes() / 60 >= (hours.until ?? 12)) {
      const later = (pickups.get(src) ?? []).find((p) => p.day > today && wasteMatches(p.summary, f.bin_kind ?? "rest", f.bin_match));
      if (later) return { days: daysBetween(today, later.day), day: later.day, summary: later.summary, glow: binGlows(daysBetween(today, later.day), now, hours) };
    }
    return { days, day: next.day, summary: next.summary, glow: binGlows(days, now, hours) };
  }
  const st = hass.states[src];
  if (!st) return null;
  const days = sensorDays(st, now);
  if (days === null || days < 0) return null;
  const day = addDays(today, days);
  return { days, day, summary: String(st.attributes.friendly_name ?? ""), glow: binGlows(days, now, hours) };
}

/** An entity that says "on" (input_boolean, switch, binary_sensor …), null when unset or unknown. */
function onEntity(id: EntityRef | undefined, hass: HomeAssistant): boolean {
  const ref = typeof id === "string" && id !== "none" ? id : null;
  const st = ref ? hass.states[ref] : undefined;
  return !!st && ON.has(String(st.state).toLowerCase());
}

/** Whether a bin has been put out: its "put out" entity (an input_boolean a nightly automation resets) is on. */
export function binOut(f: Pick<Furniture, "bin_out">, hass: HomeAssistant): boolean {
  return onEntity(f.bin_out, hass);
}

/** A "put out" entity a tap can switch: an input_boolean or a switch (a binary sensor is only read). */
export function binOutToggleable(f: Pick<Furniture, "bin_out">): boolean {
  return typeof f.bin_out === "string" && /^(input_boolean|switch)\./.test(f.bin_out);
}

/** A tag that stands on a household item: a bin's pickup, a mailbox's post, a thirsty plant. */
export interface HouseholdTag {
  id: string;
  floorId: string;
  x: number;
  z: number;
  /** Height of the item's top above its floor. */
  y: number;
  /** The item's footprint radius (half its longer side), to find bins standing together. */
  r: number;
  name: string;
  color: string;
  when: string;
  /** Today or tomorrow (a bin), or something to do now: bright. */
  soon?: boolean;
  /** Days to a bin's pickup (sorts the lines of a merged tag); -1 for a mailbox or a plant. */
  days: number;
  /** The bin is out already ("put out ✓"). */
  out?: boolean;
  /** A mailbox or a plant: from afar a round symbol instead of the tiny text. */
  icon?: "mail" | "plant";
}

/** One tag in the view: one item, or bins standing together with one line each in pickup order. */
export interface TagGroup {
  floorId: string;
  x: number;
  z: number;
  y: number;
  lines: HouseholdTag[];
}

/**
 * Bins standing together share one tag (their tags covered each other): bins on one floor whose footprints come
 * closer than `gap` metres form a group, its lines sorted by pickup (then by name). A mailbox or a plant keeps its own.
 */
export function groupTags(tags: readonly HouseholdTag[], gap = 0.3): TagGroup[] {
  const bins = tags.filter((t) => !t.icon);
  const parent = bins.map((_, i) => i);
  const root = (i: number): number => (parent[i] === i ? i : (parent[i] = root(parent[i])));
  for (let i = 0; i < bins.length; i++)
    for (let j = i + 1; j < bins.length; j++) {
      const a = bins[i];
      const b = bins[j];
      if (a.floorId === b.floorId && Math.hypot(a.x - b.x, a.z - b.z) <= a.r + b.r + gap) parent[root(j)] = root(i);
    }
  const groups = new Map<number, HouseholdTag[]>();
  bins.forEach((t, i) => groups.set(root(i), [...(groups.get(root(i)) ?? []), t]));
  const out: TagGroup[] = [];
  for (const lines of groups.values()) {
    lines.sort((a, b) => a.days - b.days || a.name.localeCompare(b.name));
    out.push({ floorId: lines[0].floorId, x: lines.reduce((s, t) => s + t.x, 0) / lines.length, z: lines.reduce((s, t) => s + t.z, 0) / lines.length, y: Math.max(...lines.map((t) => t.y)), lines });
  }
  for (const t of tags) if (t.icon) out.push({ floorId: t.floorId, x: t.x, z: t.z, y: t.y, lines: [t] });
  return out;
}

/** The plan's choices for the bins' tags: only the next pickup, only from some days before (null = always). */
export interface BinTagOptions {
  nextOnly?: boolean | null;
  ahead?: number | null;
}

/**
 * Which bins wear a tag: every bin with a pickup (as before), or – by the plan's settings – only the bins of the
 * earliest pickup and/or only from `ahead` days before it. Bins without a tag still glow and can be tapped.
 */
export function binTagsShown(bins: readonly { id: string; days: number }[], o: BinTagOptions = {}): Set<string> {
  const ahead = typeof o.ahead === "number" && o.ahead >= 0 ? o.ahead : null;
  const first = bins.length ? Math.min(...bins.map((b) => b.days)) : 0;
  return new Set(bins.filter((b) => (ahead === null || b.days <= ahead) && (!o.nextOnly || b.days === first)).map((b) => b.id));
}

/**
 * A date written inside a sensor's text, as Waste Collection Schedule's own formats show it: "on Mon, 26.10.2026",
 * "Biotonne 26.10.", "2026-10-26 (Mo)", "26/10/2026" (day first unless that cannot be). A date without a year that
 * has passed this year is next year's. Null when the text holds none – its numbers are no date then.
 */
export function dateInText(text: string, now = new Date()): Date | null {
  const iso = /(\d{4})-(\d{1,2})-(\d{1,2})/.exec(text);
  // a dash only with a four-digit year ("17-11-2026", Afvalbeheer, #962), so "in 2-4 days" stays no date
  const dmy =
    /(?:^|[^\d])(\d{1,2})([./])(\d{1,2})\2(\d{4}|\d{2})?(?![\d])/.exec(text) ??
    /(?:^|[^\d])(\d{1,2})(-)(\d{1,2})-(\d{4})(?![\d])/.exec(text);
  let y: number;
  let m: number;
  let d: number;
  if (iso) [y, m, d] = [Number(iso[1]), Number(iso[2]), Number(iso[3])];
  else if (dmy) {
    let a = Number(dmy[1]);
    let b = Number(dmy[3]);
    // a slash with the month first ("10/26/2026") only when the day cannot come first
    if (dmy[2] === "/" && b > 12 && a <= 12) [a, b] = [b, a];
    d = a;
    m = b;
    const yy = dmy[4];
    y = yy ? (yy.length === 2 ? 2000 + Number(yy) : Number(yy)) : now.getFullYear();
    if (!yy && new Date(y, m - 1, d) < startOfDay(now)) y += 1;
  } else return null;
  if (m < 1 || m > 12 || d < 1 || d > 31) return null;
  const day = new Date(y, m - 1, d);
  return day.getMonth() === m - 1 ? day : null;
}

/**
 * Days until the pickup a sensor tells: a number, a date or a timestamp, Waste Collection Schedule's `daysTo` or
 * Afvalbeheer's `Days_until`.
 */
export function sensorDays(st: HassEntity, now = new Date()): number | null {
  const a = st.attributes as Record<string, unknown>;
  if (typeof a.daysTo === "number") return a.daysTo;
  // Afvalbeheer's own count (#962)
  for (const k of ["Days_until", "days_until"]) {
    const v = a[k];
    if (typeof v === "number" && Number.isFinite(v)) return Math.round(v);
    if (typeof v === "string" && /^-?\d+$/.test(v.trim())) return Number(v.trim());
  }
  const s = String(st.state).trim();
  if (/^-?\d+(\.\d+)?$/.test(s)) return Math.round(Number(s));
  // a timestamp is read as a moment (its local day); any other text for a date written in it – the browser's own
  // reading of free text would make "Weihnachtsbaum 05.01." the year 2001
  const date = /^\d{4}-\d{2}-\d{2}T/.test(s) ? dayOf(s) : dateInText(s, now);
  if (date) return daysBetween(now, date);
  // "in 2 Tagen", "in 3 days", "morgen"/"tomorrow", "heute"/"today"
  const low = s.toLowerCase();
  if (/(^|\s)(heute|today|vandaag|aujourd|oggi|hoy|hoje|idag|i dag|tänään|dnes|ma$|dziś|dzis|今天)/.test(low)) return 0;
  if (/(^|\s)(morgen|tomorrow|demain|domani|mañana|amanhã|imorgon|i morgen|huomenna|zítra|holnap|jutro|明天)/.test(low)) return 1;
  // the days are the number before a word for days or after "in" ("Restabfall 2-wöchentlich in 4 Tagen" is 4, D576),
  // else the last number of the text
  const unit = /(\d+)\s*(tag|day|dag|jour|giorn|día|dia|päiv|paiv|den|dn|nap|天)/.exec(low) ?? /\bin\s+(\d+)/.exec(low);
  if (unit) return Number(unit[1]);
  const all = low.match(/\d+/g);
  return all ? Number(all[all.length - 1]) : null;
}

// ---------------------------------------------------------------- mailbox

const ON = new Set(["on", "open", "true", "detected", "home"]);

/** The moment an entity last changed (its own time; null when unknown). */
function changed(st: HassEntity | undefined): number | null {
  const t = st?.last_changed ? Date.parse(st.last_changed) : NaN;
  return Number.isFinite(t) ? t : null;
}

/**
 * Whether post lies in a mailbox. With only a flag (an input_boolean "post da", a binary sensor that stays on, a
 * counter): its state. With a flap and an emptying door: post came in after the box was last emptied – within a week
 * (a restart of Home Assistant sets both times alike, then nothing glows).
 */
export function mailboxPost(f: Pick<Furniture, "entity" | "mailbox_door">, hass: HomeAssistant, now = Date.now()): boolean {
  const flapId = typeof f.entity === "string" && f.entity !== "none" ? f.entity : null;
  if (!flapId) return false;
  const flap = hass.states[flapId];
  if (!flap || flap.state === "unavailable" || flap.state === "unknown") return false;
  const doorId = typeof f.mailbox_door === "string" && f.mailbox_door !== "none" ? f.mailbox_door : null;
  if (!doorId) {
    const n = Number(flap.state);
    return ON.has(flap.state.toLowerCase()) || (Number.isFinite(n) && n > 0);
  }
  const t = changed(flap);
  const emptied = changed(hass.states[doorId]);
  if (t === null || now - t > 7 * 86400_000) return false;
  return emptied === null || t > emptied + 1000;
}

/** The entity fields of the household items, for the watched list. */
export function householdEntities(f: Furniture): EntityRef[] {
  if (f.type === "waste_bin") return [f.bin_source ?? null, f.bin_out ?? null];
  if (f.type === "mailbox") return [f.entity ?? null, f.mailbox_door ?? null];
  return householdExtras(f);
}

// ---------------------------------------------------------------- Haushalt Pro, part 2: plants, appliances, upkeep, fridge

/** An appliance that runs a programme: it tells its time left and "Done!" until its door opens. */
export type ApplianceKind = "washer" | "dryer" | "dishwasher" | "oven";

/**
 * What programme appliance an item is: the built-in washer, dryer and dishwasher, and the pack items that are one
 * (the kitchen pack's built-in dishwasher and oven, #973), by their id; null for anything else.
 */
export function applianceOf(type: string): ApplianceKind | null {
  if (type === "washer" || type === "dryer" || type === "dishwasher") return type;
  const id = packItem(type)?.id;
  if (!id) return null;
  if (/dishwasher|geschirr/.test(id)) return "dishwasher";
  if (/dryer|trockner/.test(id)) return "dryer";
  if (/washer|washing|waschmaschine/.test(id)) return "washer";
  if (/oven|cooker|backofen/.test(id)) return "oven";
  return null;
}

/** The number of an entity's state, when it is one. */
const num = (st: HassEntity | undefined): number | null => {
  const n = st ? Number(st.state) : NaN;
  return Number.isFinite(n) ? n : null;
};

/**
 * Whether a plant is thirsty: a plant.* entity reporting a moisture problem (the core plant integration's `problem`
 * attribute, the Plant Monitor's `moisture_status`), or a moisture sensor below its minimum (null: 20 %).
 */
export function plantThirsty(f: Pick<Furniture, "moisture" | "moisture_min">, hass: HomeAssistant): boolean {
  const id = typeof f.moisture === "string" && f.moisture !== "none" ? f.moisture : null;
  const st = id ? hass.states[id] : undefined;
  if (!id || !st) return false;
  if (id.startsWith("plant.")) {
    const a = st.attributes as Record<string, unknown>;
    const problem = String(a.problem ?? "").toLowerCase();
    const status = String(a.moisture_status ?? "").toLowerCase();
    return status === "low" || (st.state === "problem" && problem.includes("moisture") && !problem.includes("high"));
  }
  const v = num(st);
  return v !== null && v < (f.moisture_min ?? 20);
}

/** Minutes left of a program: a number (minutes, or with its unit s/h), an end time (timestamp) or "H:MM(:SS)". */
export function remainingMinutes(st: HassEntity | undefined, now = Date.now()): number | null {
  if (!st || st.state === "unavailable" || st.state === "unknown") return null;
  const s = String(st.state).trim();
  const unit = String(st.attributes.unit_of_measurement ?? "min").toLowerCase();
  if (/^-?\d+(\.\d+)?$/.test(s)) {
    const v = Number(s);
    const m = unit === "s" ? v / 60 : unit === "h" ? v * 60 : v;
    return Math.max(0, Math.round(m));
  }
  const hm = /^(\d+):(\d{2})(?::(\d{2}))?$/.exec(s);
  if (hm) return Number(hm[1]) * 60 + Number(hm[2]) + Math.round(Number(hm[3] ?? 0) / 60);
  const t = Date.parse(s);
  if (Number.isFinite(t) && /\d{4}-\d{2}-\d{2}T/.test(s)) return Math.max(0, Math.round((t - now) / 60000));
  return null;
}

/** States of an appliance or its program sensor that mean the program has ended. */
const FINISHED = new Set(["finished", "end", "ended", "done", "complete", "completed", "program_finished", "programfinished", "fertig", "beendet", "ende", "termine", "finito", "klaar", "klar", "valmis"]);

export function isFinishedState(st: HassEntity | undefined): boolean {
  if (!st) return false;
  const s = String(st.state).toLowerCase().normalize("NFKD").replace(/[̀-ͯ]/g, "").replace(/\s+/g, "_");
  return FINISHED.has(s);
}

/** States of an appliance (or of its status sensor) that say it runs no program. */
const IDLE = new Set(["off", "idle", "standby", "stand_by", "ready", "inactive", "sleep", "sleeping", "power_off", "aus", "bereit", "unavailable"]);

/**
 * Whether an appliance's own readings say it is idle, so a time left on its display sensor is a leftover (after a
 * power cut the sensor may keep its last minutes): its state entity is off or idle, or its power is at standby –
 * unless its state entity (a status sensor, the appliance's own entity) tells a program running. A smart plug's switch
 * that is on tells nothing. Without a power reading or a state nothing is known: not idle.
 */
export function applianceIdle(st: HassEntity | undefined, power: number | null, runW: number): boolean {
  const s = st ? String(st.state).toLowerCase().replace(/\s+/g, "_") : null;
  if (s !== null && IDLE.has(s)) return true;
  const plug = !!st && /^(switch|input_boolean|light)\./.test(st.entity_id);
  const reportsRun = !!st && !plug && s !== null && (s === "on" || /run|wash|dry|rinse|spin|clean|läuft|laeuft|betrieb/.test(s));
  return power !== null && power <= runW && !reportsRun;
}

/** Text of the minutes left: "23 min", "1:05 h". */
export function remainingText(min: number): string {
  return min >= 60 ? `${Math.floor(min / 60)}:${String(min % 60).padStart(2, "0")} h` : `${min} min`;
}

/**
 * Whether a consumable or a service is due: a binary sensor that is on (a filter to change, salt empty), a number at
 * or below its threshold (percent or days left; null: 10), a date or timestamp that is reached.
 */
export function serviceDue(f: Pick<Furniture, "service" | "service_min">, hass: HomeAssistant, now = new Date()): boolean {
  return entityDue(f.service, f.service_min, hass, now);
}

function entityDue(ref: EntityRef | undefined, min: number | null | undefined, hass: HomeAssistant, now: Date): boolean {
  const id = typeof ref === "string" && ref !== "none" ? ref : null;
  const st = id ? hass.states[id] : undefined;
  if (!id || !st || st.state === "unavailable" || st.state === "unknown") return false;
  if (id.startsWith("binary_sensor.") || id.startsWith("input_boolean.")) return st.state === "on";
  const v = num(st);
  if (v !== null) return v <= (min ?? 10);
  const d = dayOf(st.state);
  return !!d && d.getTime() <= startOfDay(now).getTime();
}

/**
 * The services of an item that are due now: its first one and a second one (a robot vacuum's brushes and its dock's
 * dust bag, say), each with its own threshold; the due entities in that order.
 */
export function servicesDue(f: Pick<Furniture, "service" | "service_min" | "service2" | "service2_min">, hass: HomeAssistant, now = new Date()): string[] {
  const out: string[] = [];
  if (entityDue(f.service, f.service_min, hass, now)) out.push(f.service as string);
  if (f.service2 !== f.service && entityDue(f.service2, f.service2_min, hass, now)) out.push(f.service2 as string);
  return out;
}

/** The door sensors of an item (a fridge's two doors, an appliance's door). */
export const doorsOf = (f: Pick<Furniture, "door_left" | "door_right">): string[] => [f.door_left, f.door_right].filter((x): x is string => typeof x === "string" && x !== "none");
const isOpen = (st: HassEntity | undefined) => !!st && (st.state === "on" || st.state === "open");

/** A fridge door open longer than its limit (null: 2 minutes): the door's entity, else null. */
export function fridgeOpenTooLong(f: Pick<Furniture, "door_left" | "door_right" | "door_alarm">, hass: HomeAssistant, now = Date.now()): string | null {
  const limit = (f.door_alarm ?? 2) * 60_000;
  for (const id of doorsOf(f)) {
    const st = hass.states[id];
    if (isOpen(st) && st?.last_changed && now - Date.parse(st.last_changed) >= limit) return id;
  }
  return null;
}

/** When the next open fridge door would cross its limit (ms from now), to look again then; null when none will. */
export function nextFridgeCheck(items: readonly Furniture[], hass: HomeAssistant, now = Date.now()): number | null {
  let next: number | null = null;
  for (const f of items) {
    if (f.type !== "fridge" && f.type !== "fridge_smart") continue;
    for (const id of doorsOf(f)) {
      const st = hass.states[id];
      if (!isOpen(st) || !st?.last_changed) continue;
      const left = Date.parse(st.last_changed) + (f.door_alarm ?? 2) * 60_000 - now;
      if (left > 0 && (next === null || left < next)) next = left;
    }
  }
  return next;
}

/**
 * Remembers which appliances ended their program while the page was open ("finished" until their door opens, they
 * run again or 12 hours pass) – for appliances that say nothing but stop drawing power.
 */
export class FinishedMemory {
  private running = new Map<string, boolean>();
  private ended = new Map<string, number>();

  /** Tell the memory how the item is now; whether it shows as finished. */
  update(id: string, running: boolean, doorOpenedSince: (t: number) => boolean, now = Date.now()): boolean {
    const was = this.running.get(id);
    this.running.set(id, running);
    if (running) {
      this.ended.delete(id);
      return false;
    }
    if (was === true) this.ended.set(id, now);
    const t = this.ended.get(id);
    if (t === undefined) return false;
    if (now - t > 12 * 3600_000 || doorOpenedSince(t)) {
      this.ended.delete(id);
      return false;
    }
    return true;
  }
}

/** The household's entity fields of part 2, for the watched list. */
export function householdExtras(f: Furniture): EntityRef[] {
  return [f.moisture ?? null, f.remaining ?? null, f.service ?? null, f.service2 ?? null];
}
