// Looks ("Stile") of the 3D view: the three classic looks and the new ones – colour palettes and homely styles with natural
// materials and cheap realism (light by direction, darker wall feet, contact shadows, floor structure). Shared by the
// main bundle (menus, card, schedule) and the 3D bundle (shader, palette). Nothing here costs frames: a palette is a
// colour mapping in the shader, natural materials are chosen when the house is built.

import type { Theme } from "./themes.ts";

export interface StylePalette {
  /** Edges and outlines. */
  line: string;
  /** Surfaces from dark … */
  dark: string;
  /** … to light, spread by the neon colours' brightness. */
  light: string;
  /** How much of the original hue stays (0 = none). */
  hue: number;
  /** Brightness every surface starts from. */
  lift: number;
  /** How far the neon brightness spreads between dark and light. */
  contrast: number;
}

export interface StyleDef {
  id: string;
  /** The classic look underneath: line blending, pins and menus, the ground. */
  base: Theme;
  /** A colour palette instead of the base look's own colours. */
  palette?: StylePalette | null;
  /** Natural materials (wood, tiles, fabric, the rooms' wall colours) instead of a palette. */
  natural?: boolean;
  /** Lit lamps, open windows and screens keep their colour (palettes). */
  signal?: boolean;
  /** Light by direction: faces turned away from the light are darker (0–0.7). */
  sun?: number;
  /** Darker feet of walls and cabinets (0–0.7). */
  ao?: number;
  /** Soft shadows under furniture. */
  shadows?: boolean;
  /** Floor structure: planks, tile joints, grain (0–1, natural materials). */
  floors?: number;
  /** Dark cut wall tops, like an architect's section model (natural materials). */
  cutDark?: boolean;
  /** Evening: the house dims warm, lit lamps keep their glow (0–0.9, natural materials). */
  dim?: number;
  /** The stage behind the house: top and bottom of a gradient. */
  bg?: [string, string] | null;
  /** The menu group. */
  group: "neon" | "homely" | "designed" | "custom";
  /** An own style's name (the built-in ones are named by their texts). */
  name?: string;
  /** Words that name it (a helper entity, voice); the id and the German and English names always count. */
  aliases: string[];
}

const NATURAL = { natural: true, signal: true, shadows: true, floors: 1, cutDark: true, sun: 0.45, ao: 0.45 } as const;

export const STYLES: StyleDef[] = [
  { id: "neon", base: "neon", group: "neon", aliases: ["neon", "standard"] },
  { id: "blueprint", base: "blueprint", group: "neon", aliases: ["blueprint", "bauplan", "blaupause"] },
  { id: "day", base: "day", group: "neon", aliases: ["tag", "day", "hell", "light"] },
  {
    id: "focus",
    base: "neon",
    group: "neon",
    palette: { line: "#394150", dark: "#07090d", light: "#2c313a", hue: 0, lift: 0.05, contrast: 2.5 },
    signal: true,
    sun: 0.2,
    bg: ["#030407", "#0b0e14"],
    aliases: ["fokus", "focus", "nacht", "night", "dunkel", "dark"],
  },
  {
    id: "synth",
    base: "neon",
    group: "neon",
    palette: { line: "#ff3fd2", dark: "#12051f", light: "#3a1460", hue: 0.2, lift: 0.05, contrast: 2.5 },
    signal: true,
    sun: 0.2,
    bg: ["#08010f", "#2a0838"],
    aliases: ["synthwave", "synth", "retro", "party"],
  },
  { id: "cozy", base: "day", group: "homely", ...NATURAL, palette: null, bg: ["#f1efeb", "#d9d5ce"], aliases: ["wohnlich", "gemütlich", "cozy", "homely", "echt", "real"] },
  { id: "evening", base: "neon", group: "homely", ...NATURAL, sun: 0.4, dim: 0.75, bg: ["#14161c", "#272630"], aliases: ["wohnlich abend", "abend", "abendstimmung", "evening", "cozy evening"] },
  { id: "winter", base: "neon", group: "homely", ...NATURAL, sun: 0.4, dim: 0.8, bg: ["#0b1322", "#1d2a40"], aliases: ["winterabend", "winter", "advent", "weihnachten", "christmas"] },
  {
    id: "model",
    base: "day",
    group: "designed",
    palette: { line: "#8a8f98", dark: "#cfcac2", light: "#fbfaf7", hue: 0.08, lift: 0.35, contrast: 3.2 },
    signal: true,
    sun: 0.3,
    ao: 0.3,
    shadows: true,
    bg: ["#eeece8", "#d6d2cb"],
    aliases: ["architekturmodell", "modell", "model", "architect", "weiß", "white"],
  },
  {
    id: "pastel",
    base: "day",
    group: "designed",
    palette: { line: "#3b3f5c", dark: "#b7c4e6", light: "#fff4ea", hue: 0.55, lift: 0.3, contrast: 3 },
    signal: true,
    sun: 0.25,
    ao: 0.2,
    shadows: true,
    bg: ["#f4efe8", "#e3e7f2"],
    aliases: ["pastell", "pastel", "bunt", "kids"],
  },
  {
    id: "warm",
    base: "day",
    group: "designed",
    palette: { line: "#5a4632", dark: "#b0906c", light: "#f4ead9", hue: 0.15, lift: 0.3, contrast: 3 },
    signal: true,
    sun: 0.3,
    ao: 0.3,
    shadows: true,
    bg: ["#f0e7d7", "#d9cbb3"],
    aliases: ["warm", "holz", "papier", "holz und papier", "wood", "paper"],
  },
];

export const STYLE_IDS = STYLES.map((s) => s.id);
const BY_ID = new Map(STYLES.map((s) => [s.id, s]));

/** An own style, kept in the plan's settings (`styles_custom`): a built-in one adjusted and named. */
export interface CustomStyle extends Omit<StyleDef, "group" | "aliases"> {
  name: string;
}

let custom: StyleDef[] = [];

/** The plan's own styles: every place that lists or resolves styles sets them from the building it shows. */
export function setCustomStyles(list: readonly CustomStyle[] | null | undefined): void {
  custom = (list ?? []).filter((c) => c && typeof c.id === "string" && c.id.startsWith("my_") && typeof c.name === "string").map((c) => ({ ...c, group: "custom", aliases: [c.name] }));
}

/** The built-in styles and the plan's own ones. */
export function allStyles(): StyleDef[] {
  return custom.length ? [...STYLES, ...custom] : STYLES;
}

export function styleById(id: string | null | undefined): StyleDef | undefined {
  return id ? (BY_ID.get(id) ?? custom.find((c) => c.id === id)) : undefined;
}

/** An id for a new own style. */
export function newStyleId(): string {
  return `my_${Math.random().toString(36).slice(2, 8)}`;
}

/** A style chosen for a screen: a style, "auto" (Day by sunlight, Neon after dark) or "house" (the house's plan). */
export type StyleChoice = string;

/** The house's plan: a style per time of day, switched by the sun or by the clock, or named by a helper entity. */
export interface StylePlan {
  style_day?: string | null;
  style_evening?: string | null;
  style_night?: string | null;
  /** "sun": day while the sun is up, evening after sunset until `style_night_at`; "time": by the three times. */
  style_switch?: "sun" | "time" | null;
  style_morning_at?: string | null;
  style_evening_at?: string | null;
  style_night_at?: string | null;
  /** An input_select / input_text whose state names a style: it wins while it names one. */
  style_entity?: string | null;
}

export type Phase = "day" | "evening" | "night";

/** "HH:MM" to minutes after midnight (null for anything else). */
export function clockMinutes(s: string | null | undefined): number | null {
  const m = /^(\d{1,2}):(\d{2})$/.exec(s?.trim() ?? "");
  if (!m) return null;
  const h = Number(m[1]);
  const min = Number(m[2]);
  return h < 24 && min < 60 ? h * 60 + min : null;
}

/** The time of day the plan is in: by the sun (sunUp known) or by the clock. */
export function phaseOf(plan: StylePlan | null | undefined, now: Date, sunUp: boolean | null): Phase {
  const t = now.getHours() * 60 + now.getMinutes();
  const morning = clockMinutes(plan?.style_morning_at) ?? 7 * 60;
  const evening = clockMinutes(plan?.style_evening_at) ?? 18 * 60;
  const night = clockMinutes(plan?.style_night_at) ?? 23 * 60;
  const isNight = night > morning ? t >= night || t < morning : t >= night && t < morning;
  if ((plan?.style_switch ?? "sun") === "sun" && sunUp !== null) {
    if (sunUp) return "day";
    // after sunset: evening until the night time; before sunrise in the morning: night
    if (now.getHours() < 12) return "night";
    return isNight ? "night" : "evening";
  }
  if (isNight) return "night";
  return t >= evening ? "evening" : "day";
}

/** Normalises a name for matching: lower case, umlauts folded, only letters and digits. */
function norm(s: string): string {
  return s
    .toLowerCase()
    .replace(/ä/g, "ae")
    .replace(/ö/g, "oe")
    .replace(/ü/g, "ue")
    .replace(/ß/g, "ss")
    .replace(/[^a-z0-9]+/g, "");
}

/** The style a word or entity state names: its id, a name or an alias (null when none). */
export function styleFromText(text: string | null | undefined, names: Record<string, string[]> = {}): string | null {
  if (!text) return null;
  const n = norm(text);
  if (!n) return null;
  for (const s of allStyles()) if (norm(s.id) === n || s.aliases.some((a) => norm(a) === n) || (names[s.id] ?? []).some((a) => norm(a) === n)) return s.id;
  return null;
}

export interface StyleInputs {
  /** What the screen chose: a style id, "auto" or "house" (empty = "neon"). */
  choice?: StyleChoice | null;
  /** The card's own evening and night styles (with `choice` as its day style). */
  evening?: string | null;
  night?: string | null;
  /** The house's plan (settings). */
  plan?: StylePlan | null;
  /** State of the helper entity (the card's own, else the house's). */
  entityState?: string | null;
  /** A style set from outside for this screen (an action, a voice command) – wins. */
  override?: string | null;
  now: Date;
  sunUp: boolean | null;
  /** Localised names per style id, for matching an entity's state. */
  names?: Record<string, string[]>;
}

/** The style a screen shows now. */
export function resolveStyle(i: StyleInputs): string {
  const valid = (id: string | null | undefined): string | null => (styleById(id) ? id! : null);
  const over = valid(i.override);
  if (over) return over;
  const named = styleFromText(i.entityState, i.names);
  if (named) return named;
  const choice = i.choice || "neon";
  if (choice === "auto") return i.sunUp === false ? "neon" : i.sunUp === true ? "day" : "neon";
  const byPhase = (day: string | null, evening: string | null, night: string | null, plan: StylePlan | null | undefined): string => {
    const phase = phaseOf(plan, i.now, i.sunUp);
    if (phase === "night") return night ?? evening ?? day ?? "neon";
    if (phase === "evening") return evening ?? day ?? "neon";
    return day ?? "neon";
  };
  if (choice === "house") {
    const p = i.plan;
    return byPhase(valid(p?.style_day), valid(p?.style_evening), valid(p?.style_night), p);
  }
  const own = valid(choice) ?? "neon";
  const evening = valid(i.evening);
  const night = valid(i.night);
  return evening || night ? byPhase(own, evening, night, i.plan) : own;
}
