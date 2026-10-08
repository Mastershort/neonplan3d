// Time travel: the live edge. While the replay plays towards the present, the live state changes since the
// time travel began are added to the timeline, so the playback can run into "now" (and back to live).
// The rows are reduced the way the integration reduces the recorder's (see timetravel_rows.py).

import type { HassEntity } from "../types.ts";
import { appendRows, appendSeriesValues, keyOf, newTrack, type Timeline, type Value } from "./timeline.ts";

/** The attributes kept per domain (the same as the integration's ATTR_KEEP). */
export const ATTR_KEEP: Record<string, readonly string[]> = {
  light: ["brightness", "color_mode", "rgb_color", "color_temp_kelvin"],
  cover: ["current_position", "current_tilt_position"],
  climate: ["hvac_action", "current_temperature", "temperature"],
  media_player: ["media_title", "media_artist", "app_name", "source", "volume_level"],
  weather: ["cloud_coverage", "wind_speed", "wind_speed_unit"],
  vacuum: ["current_room"],
  fan: [],
  alarm_control_panel: [],
  lock: [],
  water_heater: [],
};

/** Rounds an attribute as the integration does (brightness 2 %, 50 K, whole percent, volume 5 %). */
export function quantiseAttr(key: string, value: unknown): unknown {
  if (key === "rgb_color") return Array.isArray(value) && value.every((c) => typeof c === "number") ? value.map((c) => Math.round(c)) : null;
  if (typeof value !== "number" || !Number.isFinite(value)) return value;
  switch (key) {
    case "brightness":
      return Math.max(0, Math.min(255, Math.round((Math.round((value / 255) * 50) * 2 * 255) / 100)));
    case "color_temp_kelvin":
      return Math.round(value / 50) * 50;
    case "current_position":
    case "current_tilt_position":
    case "cloud_coverage":
      return Math.round(value);
    case "volume_level":
      return Math.round(Math.round(value * 20) * 5) / 100;
    case "current_temperature":
    case "temperature":
    case "wind_speed":
      return Math.round(value * 10) / 10;
    default:
      return value;
  }
}

/** A car tracker says home or away, never where (the zone or place stays private). */
export function carState(state: string): string {
  return state === "home" || state === "unavailable" || state === "unknown" ? state : "not_home";
}

/** A live state as a timeline value: the state with the kept attributes (a car tracker reduced to home/away). */
export function liveValue(st: HassEntity): Value {
  const domain = st.entity_id.slice(0, st.entity_id.indexOf("."));
  if (domain === "device_tracker") return { s: carState(st.state), a: null };
  const keys = ATTR_KEEP[domain];
  if (!keys?.length) return { s: st.state, a: null };
  const a: Record<string, unknown> = {};
  for (const k of keys) {
    const v = st.attributes[k];
    if (v === null || v === undefined) continue;
    const q = quantiseAttr(k, v);
    if (q !== null && q !== undefined) a[k] = q;
  }
  return { s: st.state, a: Object.keys(a).length ? a : null };
}

interface LiveRow {
  t: number;
  v: Value;
  k: string;
}

/** A numeric sensor (an energy counter ticks every few seconds): one row per five-minute slot is enough. */
const SLOT = 300000;
/** Rows noted at most; beyond it the rows are merged into coarser steps (the last state of each stays). */
export const MAX_PENDING = 20000;
const COARSER = [60000, SLOT, 15 * 60000, 3600000];

const numeric = (id: string, st: HassEntity) => id.startsWith("sensor.") && st.state !== "" && Number.isFinite(Number(st.state));

/** The rows of one entity with only the last of each `ms` window left (a repeat of the row before goes too). */
function coarsen(list: LiveRow[], ms: number): LiveRow[] {
  const out: LiveRow[] = [];
  for (const r of list) {
    const last = out[out.length - 1];
    if (last && Math.floor(last.t / ms) === Math.floor(r.t / ms)) out[out.length - 1] = r;
    else out.push(r);
    const before = out[out.length - 2];
    if (before && before.k === out[out.length - 1].k) out.pop();
  }
  return out;
}

/**
 * The live changes of the replayed entities since the time travel began. Recording only compares the state
 * objects (Home Assistant keeps an unchanged one), so a live update costs a look per entity. Only a change of
 * the kept value is noted (a numeric sensor once per five minutes); the rows are joined to the timeline per
 * track, the arrays built once.
 */
export class LiveLog {
  private readonly ids: readonly string[];
  private readonly seen = new Map<string, HassEntity | undefined>();
  /** The key of the last value noted per entity (the start state's at first). */
  private readonly lastKey = new Map<string, string>();
  private readonly startStates: Record<string, HassEntity>;
  private readonly startedAt: number;
  /** Entities given a track of their own already (the recorder had nothing of them). */
  private readonly seeded = new Set<string>();
  private rows = new Map<string, LiveRow[]>();
  private count = 0;

  constructor(ids: readonly string[], states: Record<string, HassEntity>, startedAt = Date.now()) {
    this.ids = ids;
    this.startStates = states;
    this.startedAt = startedAt;
    for (const id of ids) {
      this.seen.set(id, states[id]);
      if (states[id]) this.lastKey.set(id, keyOf(liveValue(states[id])));
    }
  }

  get pending(): number {
    return this.count;
  }

  /** Notes what changed since the last call (`now`: when the state carries no time of its own). */
  record(states: Record<string, HassEntity>, now: number): void {
    for (const id of this.ids) {
      const st = states[id];
      if (st === this.seen.get(id)) continue;
      this.seen.set(id, st);
      if (!st) continue;
      const v = liveValue(st);
      const k = keyOf(v);
      // an attribute nobody keeps changed: nothing to note
      if (this.lastKey.get(id) === k) continue;
      const list = this.rows.get(id);
      const last = list?.[list.length - 1];
      const at = Date.parse(st.last_updated ?? st.last_changed ?? "");
      const t = Math.max(Number.isFinite(at) ? Math.min(now, at) : now, last?.t ?? -Infinity);
      if (last && numeric(id, st) && Math.floor(last.t / SLOT) === Math.floor(t / SLOT)) {
        // the same five minutes: the newer value stands for them
        list![list!.length - 1] = { t, v, k };
        this.lastKey.set(id, k);
        continue;
      }
      this.lastKey.set(id, k);
      if (list) list.push({ t, v, k });
      else this.rows.set(id, [{ t, v, k }]);
      this.count++;
    }
    if (this.count > MAX_PENDING) this.compact();
  }

  /** Too many rows (a page left alone for long): merged into coarser steps, the last state of each entity stays. */
  private compact(): void {
    for (const ms of COARSER) {
      let count = 0;
      for (const [id, list] of this.rows) {
        const merged = coarsen(list, ms);
        this.rows.set(id, merged);
        count += merged.length;
      }
      this.count = count;
      if (count <= MAX_PENDING / 2) return;
    }
  }

  /**
   * Adds the noted changes to the timeline and moves its end to `now`. An entity the recorder had nothing of
   * gets a track of its own, from its state when the time travel began. Returns the rows added and the tracks made.
   */
  flush(timeline: Timeline, now: number): { added: number; created: number } {
    let added = 0;
    let created = 0;
    for (const id of this.ids) {
      if (this.seeded.has(id) || timeline.tracks.has(id) || timeline.series.has(id)) continue;
      this.seeded.add(id);
      const start = this.startStates[id];
      const rows = [...(start ? [{ t: this.startedAt, v: liveValue(start) }] : []), ...(this.rows.get(id) ?? [])];
      const track = newTrack(id, rows);
      this.rows.delete(id);
      if (!track) continue;
      timeline.tracks.set(id, track);
      timeline.missing.delete(id);
      created++;
      added += track.times.length;
    }
    for (const [id, list] of this.rows) {
      const track = timeline.tracks.get(id);
      if (track) {
        added += appendRows(track, list);
        continue;
      }
      const series = timeline.series.get(id);
      if (series) added += appendSeriesValues(series, list.map((r) => ({ t: r.t, value: Number(r.v.s) })));
    }
    this.rows = new Map();
    this.count = 0;
    timeline.end = Math.max(timeline.end, now);
    return { added, created };
  }
}
