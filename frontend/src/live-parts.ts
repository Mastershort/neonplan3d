/**
 * Live parts of pack items (pack format 3.4): a part tied to a slot of its item moves or lights with the slot's
 * entity – a door opens with its contact, a drawer slides out, a drum turns, a tank fills with its level, a status
 * light shows ok / off / a fault, a part glows while on. The placed item links each slot to an entity
 * (`Furniture.binds`); an item with a single slot takes the item's own entity when none is set. Pure logic here
 * (which parts, which value); the viewer draws and moves them.
 */
import type { HassEntity } from "./types.ts";

export type BindKind = "open" | "slide" | "spin" | "level" | "blink" | "glow";
export const BIND_KINDS: readonly BindKind[] = ["open", "slide", "spin", "level", "blink", "glow"];

/** A part's tie to its item's slot: what it does and how far (degrees for "open", a share of the depth for "slide"). */
export interface PartBind {
  slot: string;
  kind: BindKind;
  /** "open": the edge it turns about (default left); "spin": the axis (default upright). */
  hinge?: "left" | "right" | "top" | "bottom";
  axis?: "x" | "y" | "z";
  amount?: number;
}

/** A slot of a pack item: what the editor asks an entity for (names by language, the domains that fit). */
export interface PackSlot {
  id: string;
  name: Record<string, string>;
  domains?: string[];
}

/** The parts of an item that live, by slot and kind (one moving model each). */
export function liveGroups<P extends { bind?: PartBind }>(parts: readonly P[]): Map<string, { bind: PartBind; parts: P[] }> {
  const out = new Map<string, { bind: PartBind; parts: P[] }>();
  for (const p of parts) {
    if (!p.bind) continue;
    const key = liveKey(p.bind);
    const g = out.get(key);
    if (g) g.parts.push(p);
    else out.set(key, { bind: p.bind, parts: [p] });
  }
  return out;
}

export function liveKey(b: PartBind): string {
  return `${b.slot}|${b.kind}|${b.hinge ?? ""}|${b.axis ?? ""}|${b.amount ?? ""}`;
}

export function hasLiveParts(item: { parts: readonly { bind?: PartBind }[] } | null | undefined): boolean {
  return !!item?.parts.some((p) => p.bind);
}

const ON = /^(on|open|opening|true|home|playing|heat|cool|heat_cool|auto|dry|fan_only|cleaning|printing|running|charging|active|ok|online|connected|detected)$/i;
const BAD = /^(unavailable|unknown|problem|error|fault|failed|offline|disconnected|alarm|triggered|jammed|low)$/i;

/** A number of a state: its percent (0–1) when it reads like one, else as it is. */
function percent(st: HassEntity): number | null {
  const pos = st.attributes?.current_position ?? st.attributes?.percentage ?? st.attributes?.progress;
  if (typeof pos === "number" && Number.isFinite(pos)) return Math.max(0, Math.min(1, pos / 100));
  const n = Number(st.state);
  if (!Number.isFinite(n) || st.state === "") return null;
  if (st.attributes?.unit_of_measurement === "%" || n > 1) return Math.max(0, Math.min(1, n / 100));
  return Math.max(0, Math.min(1, n));
}

/**
 * The value a part shows for its entity's state: 0–1 for moving, turning, filling and glowing parts; for a status
 * light 1 (fine, on), 0 (off) or -1 (a fault, unavailable). Without an entity: rest (0).
 */
export function bindValue(kind: BindKind, st: HassEntity | undefined): number {
  if (!st) return 0;
  const state = String(st.state ?? "");
  if (kind === "blink") {
    if (BAD.test(state)) return -1;
    // a problem sensor that reports a problem
    if (st.attributes?.device_class === "problem" && state === "on") return -1;
    if (ON.test(state)) return 1;
    const n = Number(state);
    return Number.isFinite(n) && state !== "" ? (n > 0 ? 1 : 0) : 0;
  }
  if (kind === "level") return percent(st) ?? (ON.test(state) ? 1 : 0);
  const p = st.entity_id.startsWith("cover.") || st.entity_id.startsWith("fan.") || st.entity_id.startsWith("valve.") ? percent(st) : null;
  if (p !== null && state !== "closed" && state !== "off") return Math.max(p, kind === "spin" ? 0.3 : 0);
  if (BAD.test(state)) return 0;
  if (ON.test(state)) return 1;
  const n = Number(state);
  // a power or speed reading: running while above a few watts
  if (Number.isFinite(n) && state !== "") return st.attributes?.unit_of_measurement === "%" ? Math.max(0, Math.min(1, n / 100)) : n > 5 ? 1 : 0;
  return 0;
}

/**
 * The entity a slot of a placed item shows: its own link, else the item's entity when the item has one slot only and
 * that entity is of a kind the slot takes (an oven's power switch does not open its door).
 */
export function slotEntity(binds: Record<string, string> | null | undefined, slot: string, slots: number, own: string | null, domains?: readonly string[]): string | null {
  const e = binds?.[slot];
  if (e) return e;
  if (slots > 1 || !own) return null;
  return !domains?.length || domains.includes(own.split(".")[0]) ? own : null;
}
