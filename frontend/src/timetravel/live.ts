// Time travel: the live edge. While the replay plays towards the present, the live state changes since the
// time travel began are added to the timeline, so the playback can run into "now" (and back to live).
// The rows are reduced the way the integration reduces the recorder's (see timetravel_rows.py).

import type { HassEntity } from "../types.ts";
import { appendRow, appendSeriesValue, type Timeline, type Value } from "./timeline.ts";

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
  id: string;
  t: number;
  st: HassEntity;
}

/**
 * The live changes of the replayed entities since the time travel began. Recording only compares the state
 * objects (Home Assistant keeps an unchanged one), so a live update costs a look per entity.
 */
export class LiveLog {
  private readonly ids: readonly string[];
  private readonly seen = new Map<string, HassEntity | undefined>();
  private rows: LiveRow[] = [];

  constructor(ids: readonly string[], states: Record<string, HassEntity>) {
    this.ids = ids;
    for (const id of ids) this.seen.set(id, states[id]);
  }

  get pending(): number {
    return this.rows.length;
  }

  /** Notes what changed since the last call (`now`: when the state carries no time of its own). */
  record(states: Record<string, HassEntity>, now: number): void {
    for (const id of this.ids) {
      const st = states[id];
      if (st === this.seen.get(id)) continue;
      this.seen.set(id, st);
      if (!st) continue;
      const at = Date.parse(st.last_updated ?? st.last_changed ?? "");
      this.rows.push({ id, t: Number.isFinite(at) ? Math.min(now, at) : now, st });
      // a stuck page never grows without end: the oldest changes go first
      if (this.rows.length > 20000) this.rows.splice(0, this.rows.length - 20000);
    }
  }

  /** Adds the noted changes to the timeline and moves its end to `now`; returns the rows added. */
  flush(timeline: Timeline, now: number): number {
    let added = 0;
    for (const r of this.rows) {
      const track = timeline.tracks.get(r.id);
      if (track) {
        if (appendRow(track, r.t, liveValue(r.st))) added++;
        continue;
      }
      const series = timeline.series.get(r.id);
      if (series && appendSeriesValue(series, r.t, Number(r.st.state))) added++;
    }
    this.rows = [];
    timeline.end = Math.max(timeline.end, now);
    return added;
  }
}
