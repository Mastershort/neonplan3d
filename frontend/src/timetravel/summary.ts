// Time travel: summaries of a stretch of the replayed history – "while you were away" (what happened
// between two moments) and the day summary (per room: lights, windows, heating, temperatures; energy).
// Pure: they read the timeline only. People are never part of them.

import { energySummary, type DeviceSensors, type EnergySummary } from "../energy.ts";
import type { Building } from "../model.ts";
import type { HassEntity, HomeAssistant } from "../types.ts";
import type { Role } from "./classify.ts";
import { changes, IMPORTANT, OPEN, spans, type TTEvent } from "./events.ts";
import { seriesValue } from "./numeric.ts";
import type { RoomEntities } from "./rooms.ts";
import { indexAt, type Timeline, type Track, type Value } from "./timeline.ts";

const HOUR = 3600000;

/** Spans within [from, to], joined where they overlap. */
export function union(list: readonly [number, number][], from: number, to: number): [number, number][] {
  const clipped = list.map(([a, b]) => [Math.max(a, from), Math.min(b, to)] as [number, number]).filter(([a, b]) => b > a);
  clipped.sort((p, q) => p[0] - q[0]);
  const out: [number, number][] = [];
  for (const s of clipped) {
    const last = out[out.length - 1];
    if (last && s[0] <= last[1]) last[1] = Math.max(last[1], s[1]);
    else out.push([s[0], s[1]]);
  }
  return out;
}

const total = (list: readonly [number, number][]) => list.reduce((s, [a, b]) => s + (b - a), 0);

/** Where a track's value meets a test, as [start, end] pairs (end: the timeline's end while it still does). */
export function spansWhere(track: Track, test: (v: Value) => boolean, end: number): [number, number][] {
  const out: [number, number][] = [];
  let open: number | null = null;
  for (let k = 0; k < track.times.length; k++) {
    const on = test(track.values[track.vals[k]]);
    if (on && open === null) open = track.times[k];
    if (!on && open !== null) {
      out.push([open, track.times[k]]);
      open = null;
    }
  }
  if (open !== null && end > open) out.push([open, end]);
  return out;
}

// ---- "while you were away" ----

/** Stretches without any motion in the house (all motion sensors off), at least `minMs` long. */
export function quietStretches(timeline: Timeline, motion: readonly string[], from: number, to: number, minMs = 2 * HOUR): [number, number][] {
  const busy = union(
    motion.flatMap((id) => {
      const track = timeline.tracks.get(id);
      return track ? spans(track, OPEN, timeline.end) : [];
    }),
    from,
    to,
  );
  if (!motion.some((id) => timeline.tracks.has(id))) return [];
  const out: [number, number][] = [];
  let at = from;
  for (const [a, b] of busy) {
    if (a - at >= minMs) out.push([at, a]);
    at = Math.max(at, b);
  }
  if (to - at >= minMs) out.push([at, to]);
  return out;
}

/** A quiet stretch worth offering as "while you were away": the latest one mostly in the daytime (not a night's sleep). */
export function awaySuggestion(stretches: readonly [number, number][]): [number, number] | null {
  for (let i = stretches.length - 1; i >= 0; i--) {
    const [a, b] = stretches[i];
    let day = 0;
    for (let t = a; t < b; t += 600000) {
      const h = new Date(t).getHours();
      if (h >= 7 && h < 22) day += Math.min(600000, b - t);
    }
    if (day >= HOUR) return [a, b];
  }
  return null;
}

export type AwayKind = "alarm" | "door" | "window" | "motion" | "light_on" | "window_open" | "appliance";

export interface AwayRow {
  kind: AwayKind;
  entity: string;
  /** When it happened first (a tap jumps there). */
  t: number;
  /** How often (doors, windows, motion). */
  count: number;
  /** How long (lights on, windows open). */
  ms: number;
  /** An alarm's or appliance's event kind. */
  event?: TTEvent["kind"];
}

export interface AwayInput {
  timeline: Timeline;
  roles: ReadonlyMap<string, Role>;
  /** Every event (the bar's and the sheet's). */
  events: readonly TTEvent[];
  lights: readonly string[];
  /** All motion sensors (not only at night). */
  motion: readonly string[];
  from: number;
  to: number;
}

const ORDER: AwayKind[] = ["alarm", "door", "window", "window_open", "light_on", "motion", "appliance"];

/**
 * What happened between two moments: alarms, doors and windows opened, motion, lights left on (how long),
 * windows left open (how long) and appliances that ran. Each row knows when, so a tap can jump there.
 */
export function awaySummary(input: AwayInput): AwayRow[] {
  const { timeline, roles, events, from, to } = input;
  const rows: AwayRow[] = [];
  const grouped = new Map<string, AwayRow>();
  const count = (kind: AwayKind, entity: string, t: number) => {
    const key = `${kind}:${entity}`;
    const r = grouped.get(key);
    if (r) r.count++;
    else {
      const row: AwayRow = { kind, entity, t, count: 1, ms: 0 };
      grouped.set(key, row);
      rows.push(row);
    }
  };
  for (const e of events) {
    if (e.t < from || e.t > to) continue;
    if (IMPORTANT.has(e.kind) || e.kind === "rain") rows.push({ kind: "alarm", entity: e.entity, t: e.t, count: 1, ms: 0, event: e.kind });
    else if (e.kind === "door" || e.kind === "garage" || e.kind === "lock") count("door", e.entity, e.t);
    else if (e.kind === "window") count("window", e.entity, e.t);
    else if (e.kind === "washer" || e.kind === "robot_done") rows.push({ kind: "appliance", entity: e.entity, t: e.t, count: 1, ms: 0, event: e.kind });
  }
  for (const id of input.motion) {
    const track = timeline.tracks.get(id);
    if (!track) continue;
    for (const c of changes(track)) if (c.from !== null && c.t >= from && c.t <= to && c.to === "on" && c.from !== "on") count("motion", id, c.t);
  }
  const lasting = (kind: AwayKind, id: string, list: [number, number][], minMs: number) => {
    const inside = union(list, from, to);
    const ms = total(inside);
    if (ms >= minMs || (inside.length && inside[inside.length - 1][1] >= to && ms >= 60000)) rows.push({ kind, entity: id, t: inside[0][0], count: inside.length, ms });
  };
  for (const id of input.lights) {
    const track = timeline.tracks.get(id);
    if (track) lasting("light_on", id, spans(track, ON, timeline.end), 15 * 60000);
  }
  for (const [id, role] of roles) {
    if (role !== "window" && role !== "window_more") continue;
    const track = timeline.tracks.get(id);
    if (track) lasting("window_open", id, spans(track, OPEN, timeline.end), 30 * 60000);
  }
  return rows.sort((a, b) => ORDER.indexOf(a.kind) - ORDER.indexOf(b.kind) || (a.kind === "light_on" || a.kind === "window_open" ? b.ms - a.ms : a.t - b.t));
}

const ON: ReadonlySet<string> = new Set(["on"]);

// ---- the day summary ----

export interface RoomDay {
  roomId: string;
  name: string;
  /** How long a light was on (any of the room's), a window open, the heating heating (ms). */
  lightMs: number;
  windowMs: number;
  heatMs: number;
  tMin: number | null;
  tMax: number | null;
}

export interface DayEnergy {
  /** kWh produced, bought, sold, used; the share of the use not bought (0–1). */
  pv: number;
  imp: number;
  exp: number;
  use: number;
  self: number | null;
}

export interface DaySummary {
  from: number;
  to: number;
  rooms: RoomDay[];
  energy: DayEnergy | null;
}

/** A sensor's lowest and highest value between two moments (statistics or rows). */
export function minMax(timeline: Timeline, id: string, from: number, to: number): [number, number] | null {
  let lo = Infinity;
  let hi = -Infinity;
  const s = timeline.series.get(id);
  if (s) {
    for (let i = 0; i < s.mean.length; i++) {
      const t = s.start + (i + 0.5) * s.step;
      const v = s.mean[i];
      if (t < from || t > to || Number.isNaN(v)) continue;
      lo = Math.min(lo, v);
      hi = Math.max(hi, v);
    }
  } else {
    const track = timeline.tracks.get(id);
    if (track)
      for (let k = Math.max(0, indexAt(track.times, from)); k < track.times.length && track.times[k] <= to; k++) {
        const v = Number(track.values[track.vals[k]].s);
        if (!Number.isFinite(v)) continue;
        lo = Math.min(lo, v);
        hi = Math.max(hi, v);
      }
  }
  return Number.isFinite(lo) ? [lo, hi] : null;
}

/** Per room: light-on, window-open and heating time, the lowest and highest temperature; the day's energy. */
export function daySummary(timeline: Timeline, rooms: readonly RoomEntities[], from: number, to: number, energy: DayEnergy | null = null): DaySummary {
  const end = Math.min(to, timeline.end);
  const out: RoomDay[] = [];
  const spansOf = (ids: readonly string[], test: (v: Value) => boolean) =>
    ids.flatMap((id) => {
      const track = timeline.tracks.get(id);
      return track ? spansWhere(track, test, timeline.end) : [];
    });
  for (const r of rooms) {
    const lightMs = total(union(spansOf(r.lights, (v) => v.s === "on"), from, end));
    const windowMs = total(union(spansOf(r.windows.flat(), (v) => OPEN.has(v.s)), from, end));
    const heatMs = total(union(spansOf(r.climates, (v) => v.a?.hvac_action === "heating"), from, end));
    let tMin: number | null = null;
    let tMax: number | null = null;
    for (const id of r.temps) {
      const mm = minMax(timeline, id, from, end);
      if (!mm) continue;
      tMin = tMin === null ? mm[0] : Math.min(tMin, mm[0]);
      tMax = tMax === null ? mm[1] : Math.max(tMax, mm[1]);
    }
    if (lightMs || windowMs || heatMs || tMin !== null) out.push({ roomId: r.roomId, name: r.name, lightMs, windowMs, heatMs, tMin, tMax });
  }
  return { from, to, rooms: out, energy };
}

/** Two days side by side, room by room (a room only one of them knows stays with an empty side). */
export function compareDays(a: DaySummary, b: DaySummary): { roomId: string; name: string; a: RoomDay | null; b: RoomDay | null }[] {
  const ids = [...new Set([...a.rooms.map((r) => r.roomId), ...b.rooms.map((r) => r.roomId)])];
  return ids.map((id) => {
    const ra = a.rooms.find((r) => r.roomId === id) ?? null;
    const rb = b.rooms.find((r) => r.roomId === id) ?? null;
    return { roomId: id, name: (ra ?? rb)!.name, a: ra, b: rb };
  });
}

// ---- energy at a moment (Energie Pro) ----

/** A sensor's state at t: its five-minute mean, else its row. */
function stateAt(timeline: Timeline, id: string, t: number): string | null {
  const s = timeline.series.get(id);
  if (s) {
    const v = seriesValue(s, t);
    return Number.isFinite(v) ? String(v) : null;
  }
  const track = timeline.tracks.get(id);
  if (!track) return null;
  const k = indexAt(track.times, t);
  return k < 0 ? null : track.values[track.vals[k]].s;
}

/** The energy balance at t from the replayed sensors (the live attributes give the units). */
export function energyAt(timeline: Timeline, live: Record<string, HassEntity>, building: Building, devices: DeviceSensors, ids: readonly string[], t: number): EnergySummary {
  const states: Record<string, HassEntity> = {};
  for (const id of ids) {
    const s = stateAt(timeline, id, t);
    if (s !== null) states[id] = { entity_id: id, state: s, attributes: live[id]?.attributes ?? {} };
  }
  return energySummary({ states } as unknown as HomeAssistant, building, [], devices);
}

/** The sensors the energy balance reads. */
export function energyIds(building: Building, devices: DeviceSensors): string[] {
  const e = building.energy;
  return [...new Set([e.grid, e.solar, e.battery, e.battery_soc, e.consumption, devices.grid, devices.gridExport, ...devices.solar, ...devices.battery, ...devices.charge, ...devices.soc].filter((x): x is string => !!x))];
}

/** kWh of a day from the balance every five minutes; null when the replay knows no energy at all. */
export function dayEnergy(at: (t: number) => EnergySummary, from: number, to: number, step = 300000): DayEnergy | null {
  let pv = 0;
  let imp = 0;
  let exp = 0;
  let use = 0;
  let any = false;
  const h = step / HOUR / 1000;
  for (let t = from + step / 2; t < to; t += step) {
    const e = at(t);
    if (e.solar === null && e.grid === null && e.consumption === null) continue;
    any = true;
    pv += Math.max(0, e.solar ?? 0) * h;
    imp += Math.max(0, e.grid ?? 0) * h;
    exp += Math.max(0, -(e.grid ?? 0)) * h;
    use += Math.max(0, e.consumption ?? 0) * h;
  }
  if (!any) return null;
  return { pv, imp, exp, use, self: use > 0 ? Math.min(1, Math.max(0, 1 - imp / use)) : null };
}
