// Time travel: Home Assistant as it was at a moment. The registries, areas, floors, config and language
// stay the live ones (same objects); the states are rebuilt from the history. A state that did not change
// stays the very same object, so the 3D view – which compares the objects – only works on real changes.
// Nothing can be switched from the past: service calls throw, and only reading commands reach Home Assistant.

import type { HistoryRow } from "../trail.ts";
import type { HassEntity, HomeAssistant } from "../types.ts";
import { coverPosition } from "./cover.ts";
import { quantise, quantStep, seriesValue } from "./numeric.ts";
import { sunAt } from "./sun.ts";
import { Cursor, indexAt, type Series, type Timeline, type Track } from "./timeline.ts";

/** A service call or command that would change something, made while the past is shown. */
export class ReplayReadOnly extends Error {
  constructor(what: string) {
    super(`Time travel is read-only: ${what}`);
    this.name = "ReplayReadOnly";
  }
}

/** Websocket commands that only read (the rest is refused while replaying). */
export const WS_ALLOWED: ReadonlySet<string> = new Set([
  "neonplan3d/building/get",
  "neonplan3d/image/get",
  "neonplan3d/packs/list",
  "neonplan3d/timetravel/history",
  "history/history_during_period",
  "recorder/statistics_during_period",
]);
const SUBSCRIBE_ALLOWED: ReadonlySet<string> = new Set(["neonplan3d/building/subscribe"]);

/** Attributes that change over time: the live values must not show in the past (the history has its own). */
const DYNAMIC: Record<string, readonly string[]> = {
  light: ["brightness", "color_mode", "rgb_color", "color_temp_kelvin", "color_temp", "hs_color", "xy_color", "rgbw_color", "rgbww_color", "effect"],
  cover: ["current_position", "current_tilt_position"],
  climate: ["hvac_action", "current_temperature", "temperature", "target_temp_high", "target_temp_low", "current_humidity", "preset_mode", "fan_mode"],
  media_player: ["media_title", "media_artist", "media_album_name", "app_name", "app_id", "source", "volume_level", "is_volume_muted", "entity_picture", "media_content_id", "media_duration", "media_position", "media_position_updated_at", "media_series_title", "media_season", "media_episode", "media_channel"],
  weather: ["cloud_coverage", "wind_speed", "wind_speed_unit", "temperature", "humidity", "pressure", "wind_bearing", "visibility", "dew_point", "uv_index", "apparent_temperature", "precipitation"],
  fan: ["percentage", "preset_mode", "oscillating", "direction"],
  vacuum: ["battery_level", "status", "fan_speed"],
  water_heater: ["current_temperature", "temperature", "operation_mode"],
  humidifier: ["humidity", "current_humidity", "mode"],
  alarm_control_panel: ["changed_by"],
  lock: ["changed_by"],
  sun: ["elevation", "azimuth", "rising", "next_rising", "next_setting", "next_dawn", "next_dusk", "next_noon", "next_midnight"],
};
/** Never part of the past: people and their trackers. */
const HIDDEN = ["person.", "device_tracker."];

const domainOf = (id: string) => id.slice(0, id.indexOf("."));

function withoutKeys(attrs: Record<string, unknown>, keys: readonly string[] | undefined): Record<string, unknown> {
  if (!keys?.some((k) => k in attrs)) return attrs;
  const out = { ...attrs };
  for (const k of keys) delete out[k];
  return out;
}

function refuse(what: string): never {
  if (typeof window !== "undefined") window.dispatchEvent(new CustomEvent("fp3d-replay-blocked", { detail: { what } }));
  throw new ReplayReadOnly(what);
}

/**
 * A Home Assistant object that reads like the live one but cannot change anything: service calls throw,
 * websocket commands and subscriptions are limited to reading ones, the REST API to GET.
 */
export function readOnlyHass(live: HomeAssistant, states: Record<string, HassEntity>): HomeAssistant {
  const raw = live as unknown as Record<string, unknown>;
  const out = { ...live, states } as HomeAssistant & Record<string, unknown>;
  out.callService = (domain: string, service: string) => refuse(`${domain}.${service}`);
  out.callWS = <T>(msg: Record<string, unknown>): Promise<T> => (WS_ALLOWED.has(String(msg.type)) ? live.callWS<T>(msg) : refuse(String(msg.type)));
  out.connection = {
    subscribeMessage: <T>(cb: (msg: T) => void, msg: Record<string, unknown>) =>
      SUBSCRIBE_ALLOWED.has(String(msg.type)) ? live.connection.subscribeMessage<T>(cb, msg) : refuse(String(msg.type)),
  };
  // Home Assistant's own cards may use the REST API: reading only
  for (const name of ["callApi", "callApiRaw"]) {
    const fn = raw[name];
    if (typeof fn === "function") out[name] = (method: string, ...rest: unknown[]) => (String(method).toUpperCase() === "GET" ? fn.call(live, method, ...rest) : refuse(`${method} ${String(rest[0])}`));
  }
  for (const name of ["sendWS", "fetchWithAuth"]) if (name in raw) out[name] = () => refuse(name);
  return out;
}

interface Slot {
  key: string;
  /** The live attributes it was made with (static ones such as the name and unit come from them). */
  attrs: Record<string, unknown> | undefined;
  obj: HassEntity;
}

export interface ReplayOptions {
  /** Every entity whose past is replayed (fetched; without data it reads "unknown"). */
  requested: Iterable<string>;
  /** Home Assistant's location, for the sun at the replayed moment. */
  location?: { lat: number; lon: number } | null;
}

/** The replay of one fetched history: Home Assistant at any moment of it. */
export class Replay {
  readonly timeline: Timeline;
  readonly cursor: Cursor;
  private readonly requested: string[];
  private readonly trackAt = new Map<string, number>();
  private readonly location: { lat: number; lon: number } | null;
  private readonly slots = new Map<string, Slot>();
  private readonly steps = new Map<string, number>();
  private live: HomeAssistant | null = null;
  private liveStates: HomeAssistant["states"] | null = null;
  private base: Record<string, HassEntity> = {};
  private states: Record<string, HassEntity> = {};
  private hass: HomeAssistant | null = null;

  constructor(timeline: Timeline, opts: ReplayOptions) {
    this.timeline = timeline;
    this.cursor = new Cursor(timeline);
    this.cursor.tracks.forEach((tr, i) => this.trackAt.set(tr.id, i));
    this.location = opts.location ?? null;
    this.requested = [...new Set([...opts.requested, ...timeline.tracks.keys(), ...timeline.series.keys()])].filter((id) => !HIDDEN.some((p) => id.startsWith(p)));
  }

  /** Home Assistant at t; the same object as last time when nothing changed. */
  hassAt(live: HomeAssistant, t: number): HomeAssistant {
    let dirty = live !== this.live;
    if (live.states !== this.liveStates) {
      this.liveStates = live.states;
      this.base = {};
      for (const [id, st] of Object.entries(live.states)) {
        if (HIDDEN.some((p) => id.startsWith(p))) continue;
        // a camera's picture is the live one: it does not belong into the past
        this.base[id] = id.startsWith("camera.") && st.attributes.entity_picture ? { ...st, attributes: withoutKeys(st.attributes, ["entity_picture", "access_token"]) } : st;
      }
      dirty = true;
    }
    this.live = live;
    this.cursor.at(t);
    const changed: string[] = [];
    for (const id of this.requested) {
      const before = this.slots.get(id);
      const slot = this.slot(id, t, live.states[id], before);
      if (slot !== before) {
        this.slots.set(id, slot);
        changed.push(id);
      }
    }
    if (!dirty && !changed.length && this.hass) return this.hass;
    if (dirty) {
      this.states = { ...this.base };
      for (const id of this.requested) {
        const s = this.slots.get(id);
        if (s) this.states[id] = s.obj;
      }
    } else {
      this.states = { ...this.states };
      for (const id of changed) this.states[id] = this.slots.get(id)!.obj;
    }
    this.hass = readOnlyHass(live, this.states);
    return this.hass;
  }

  /** The state of one entity at t: the previous slot when it reads the same. */
  private slot(id: string, t: number, live: HassEntity | undefined, before: Slot | undefined): Slot {
    const i = this.trackAt.get(id);
    const series = this.timeline.series.get(id);
    let key: string;
    let make: () => HassEntity;
    if (id === "sun.sun" && this.location) {
      const at = sunAt(this.location.lat, this.location.lon, t);
      const el = Math.round(at.elevation * 2) / 2;
      const az = Math.round(at.azimuth * 2) / 2;
      const rising = sunAt(this.location.lat, this.location.lon, t + 600000).elevation > at.elevation;
      key = `${el}|${az}|${rising}`;
      make = () => ({
        entity_id: id,
        state: at.elevation > -0.833 ? "above_horizon" : "below_horizon",
        attributes: { ...withoutKeys(live?.attributes ?? {}, DYNAMIC.sun), elevation: el, azimuth: az, rising },
      });
    } else if (i !== undefined && this.cursor.idx[i] >= 0) {
      const track = this.cursor.tracks[i];
      const k = this.cursor.idx[i];
      const v = track.values[track.vals[k]];
      const pos = id.startsWith("cover.") ? this.coverPos(track, k, t) : null;
      key = pos === null ? `${k}` : `${k}:${pos}`;
      make = () => {
        const attrs = { ...withoutKeys(live?.attributes ?? {}, DYNAMIC[domainOf(id)]), ...(v.a ?? {}) };
        if (pos !== null) attrs.current_position = pos;
        if (id === "sun.sun" && attrs.elevation === undefined) Object.assign(attrs, { elevation: v.s === "above_horizon" ? 25 : -12, azimuth: 180 });
        return { entity_id: id, state: v.s, attributes: attrs, last_changed: new Date(track.since[k]).toISOString() };
      };
    } else if (series) {
      const value = seriesValue(series, t);
      const step = this.stepOf(id, series, live);
      const q = quantise(value, step);
      key = `n${q}`;
      make = () => ({ entity_id: id, state: q, attributes: live?.attributes ?? {}, last_changed: new Date(t).toISOString() });
    } else {
      // nothing recorded at t (before the first row, excluded from the recorder, or too new)
      key = "none";
      make = () => ({ entity_id: id, state: "unknown", attributes: withoutKeys(live?.attributes ?? {}, DYNAMIC[domainOf(id)]) });
    }
    // a live update that changed only the state (a power sensor every second) keeps the attributes object
    if (before && before.key === key && before.attrs === live?.attributes) return before;
    return { key, attrs: live?.attributes, obj: make() };
  }

  private coverPos(track: Track, k: number, t: number): number | null {
    const v = track.values[track.vals[k]];
    if (v.s !== "opening" && v.s !== "closing") return null;
    const pos = (x: { a: Record<string, unknown> | null }) => (typeof x.a?.current_position === "number" ? (x.a.current_position as number) : null);
    const next = k + 1 < track.times.length ? { t: track.times[k + 1], pos: pos(track.values[track.vals[k + 1]]) } : null;
    return coverPosition(t, { t: track.times[k], state: v.s, pos: pos(v) }, next);
  }

  private stepOf(id: string, series: Series, live: HassEntity | undefined): number {
    let step = this.steps.get(id);
    if (step === undefined) {
      const sample = series.mean.find((m) => !Number.isNaN(m)) ?? 0;
      step = quantStep(live?.attributes.unit_of_measurement, this.live?.entities?.[id]?.display_precision, sample);
      this.steps.set(id, step);
    }
    return step;
  }

  /** History rows of some entities between two moments (the state at `from` first), as Home Assistant answers them. */
  rows(ids: readonly string[], from: number, to: number): Record<string, HistoryRow[]> {
    const out: Record<string, HistoryRow[]> = {};
    for (const id of ids) {
      const track = this.timeline.tracks.get(id);
      if (!track) continue;
      const list: HistoryRow[] = [];
      for (let k = Math.max(0, indexAt(track.times, from)); k < track.times.length && track.times[k] <= to; k++) list.push({ s: track.values[track.vals[k]].s, lu: track.times[k] / 1000 });
      if (list.length) out[id] = list;
    }
    return out;
  }
}

/** Home Assistant at t from a fetched history (one-off; a session keeps a Replay to share unchanged states). */
export function createReplayHass(live: HomeAssistant, timeline: Timeline, t: number, opts: ReplayOptions = { requested: [] }): HomeAssistant {
  return new Replay(timeline, opts).hassAt(live, t);
}
