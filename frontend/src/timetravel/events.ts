// Time travel: the moments worth jumping to – the front door, the garage, a lock, the alarm, smoke, gas,
// water, a window open in the rain, motion at night, the robot and a finished washing machine. People are
// never an event (who was where stays private).

import type { Role } from "./classify.ts";
import { seriesValue } from "./numeric.ts";
import { indexAt, type Timeline, type Track } from "./timeline.ts";
import { dayStart, hourOf, hourStart, nextDay } from "./tz.ts";

export type EventKind =
  | "alarm"
  | "smoke"
  | "gas"
  | "co"
  | "water"
  | "rain"
  | "door"
  | "lock"
  | "garage"
  | "motion"
  | "washer"
  | "robot_start"
  | "robot_done"
  | "window"
  | "battery_full"
  | "pv_peak";

export interface TTEvent {
  t: number;
  kind: EventKind;
  entity: string;
}

/** How much an event matters: the highest one of a cluster gives it its look. */
export const RANK: Record<EventKind, number> = {
  alarm: 100,
  smoke: 95,
  gas: 95,
  co: 95,
  water: 90,
  rain: 70,
  door: 50,
  lock: 45,
  garage: 40,
  motion: 35,
  washer: 25,
  robot_done: 20,
  robot_start: 15,
  window: 12,
  battery_full: 10,
  pv_peak: 8,
};

/** Events listed in the events sheet only (they would crowd the bar): a window opened, energy moments. */
export const MINOR: ReadonlySet<EventKind> = new Set(["window", "battery_full", "pv_peak"]);

/** Safety events: the replay can stop at them (a fast replay would rush past). */
export const IMPORTANT: ReadonlySet<EventKind> = new Set(["alarm", "smoke", "gas", "co", "water"]);

export type Category = "safety" | "openings" | "devices" | "energy";

export const CATEGORY: Record<EventKind, Category> = {
  alarm: "safety",
  smoke: "safety",
  gas: "safety",
  co: "safety",
  water: "safety",
  motion: "safety",
  door: "openings",
  lock: "openings",
  garage: "openings",
  rain: "openings",
  window: "openings",
  washer: "devices",
  robot_start: "devices",
  robot_done: "devices",
  battery_full: "energy",
  pv_peak: "energy",
};

const RAIN = new Set(["rainy", "pouring", "lightning-rainy", "hail", "snowy-rainy"]);
export const OPEN: ReadonlySet<string> = new Set(["on", "open", "opening", "tilted"]);

/** Late evening to early morning (local time): motion then is worth a marker. */
export function sleepTime(t: number): boolean {
  const h = hourOf(t);
  return h >= 23 || h < 5;
}

/** Each change of a track: the time, the state before and after. */
export function* changes(track: Track): Generator<{ t: number; from: string | null; to: string }> {
  let prev: string | null = null;
  for (let k = 0; k < track.times.length; k++) {
    const s = track.values[track.vals[k]].s;
    if (s !== prev) yield { t: track.times[k], from: prev, to: s };
    prev = s;
  }
}

/** Where a track reads one of the states, as [start, end] pairs. */
export function spans(track: Track, states: ReadonlySet<string>, end: number): [number, number][] {
  const out: [number, number][] = [];
  let open: number | null = null;
  for (const c of changes(track)) {
    const on = states.has(c.to);
    if (on && open === null) open = c.t;
    if (!on && open !== null) {
      out.push([open, c.t]);
      open = null;
    }
  }
  if (open !== null) out.push([open, end]);
  return out;
}

/** A power sensor's values over time (rows of its states, or its five-minute means). */
export function powerPoints(timeline: Timeline, id: string): { t: number; w: number }[] {
  const track = timeline.tracks.get(id);
  if (track) {
    const out: { t: number; w: number }[] = [];
    for (let k = 0; k < track.times.length; k++) {
      const w = Number(track.values[track.vals[k]].s);
      if (Number.isFinite(w)) out.push({ t: track.times[k], w });
    }
    return out;
  }
  const s = timeline.series.get(id);
  if (!s) return [];
  const out: { t: number; w: number }[] = [];
  for (let i = 0; i < s.mean.length; i++) {
    const t = s.start + (i + 0.5) * s.step;
    const w = seriesValue(s, t);
    if (Number.isFinite(w)) out.push({ t, w });
  }
  return out;
}

/** A machine's run: above `on` W for a while, done when it falls below `off` W after at least `minRunMs`. */
export function machineDone(points: readonly { t: number; w: number }[], on = 10, off = 5, minRunMs = 20 * 60000): number[] {
  const out: number[] = [];
  let since: number | null = null;
  for (const p of points) {
    if (since === null && p.w > on) since = p.t;
    else if (since !== null && p.w < off) {
      if (p.t - since >= minRunMs) out.push(p.t);
      since = null;
    }
  }
  return out;
}

export interface EventInput {
  timeline: Timeline;
  roles: ReadonlyMap<string, Role>;
  /** The weather entity whose rain counts (null: no rain events). */
  weather: string | null;
  /** When motion is worth an event (default: late evening to early morning). */
  night?: (t: number) => boolean;
  /** Energie Pro: the solar power and battery charge sensors (a full battery, the day's solar peak). */
  energy?: EnergyInput | null;
}

/** A sensor's value at the centre of every five-minute slot between two moments (statistics or rows). */
export function sampled(timeline: Timeline, id: string, from: number, to: number, step = 300000): Float64Array {
  const n = Math.max(0, Math.ceil((to - from) / step));
  const out = new Float64Array(n).fill(NaN);
  const s = timeline.series.get(id);
  const track = timeline.tracks.get(id);
  for (let i = 0; i < n; i++) {
    const t = from + (i + 0.5) * step;
    if (s) out[i] = seriesValue(s, t);
    else if (track) {
      const k = indexAt(track.times, t);
      out[i] = k < 0 ? NaN : Number(track.values[track.vals[k]].s);
    }
  }
  return out;
}

export interface EnergyInput {
  solar: readonly string[];
  soc: readonly string[];
  /** The sun below the horizon at a moment (today's solar peak is final only then); unknown: never. */
  sunDown?: (t: number) => boolean;
}

/**
 * Energy moments: the battery full (99 % after below 95 %), the solar peak of every day (above 100 W).
 * The last day's peak only once the day is over or the sun has set (before, it would wander with the live edge).
 */
export function energyEvents(timeline: Timeline, energy: EnergyInput): TTEvent[] {
  const out: TTEvent[] = [];
  const step = 300000;
  const from = Math.floor(timeline.start / step) * step;
  for (const id of energy.soc) {
    const v = sampled(timeline, id, from, timeline.end);
    let low = false;
    v.forEach((x, i) => {
      if (Number.isNaN(x)) return;
      if (x < 95) low = true;
      else if (x >= 99 && low) {
        low = false;
        out.push({ t: from + (i + 0.5) * step, kind: "battery_full", entity: id });
      }
    });
  }
  if (energy.solar.length) {
    const sums = energy.solar.map((id) => sampled(timeline, id, from, timeline.end));
    const n = sums[0].length;
    let day = -1;
    let best = { t: 0, w: 0 };
    const flush = () => {
      if (best.w > 100) out.push({ t: best.t, kind: "pv_peak", entity: energy.solar[0] });
      best = { t: 0, w: 0 };
    };
    for (let i = 0; i < n; i++) {
      const t = from + (i + 0.5) * step;
      const d = dayStart(t);
      if (d !== day) {
        if (day >= 0) flush();
        day = d;
      }
      let w = 0;
      for (const s of sums) if (!Number.isNaN(s[i])) w += Math.max(0, s[i]);
      if (w > best.w) best = { t, w };
    }
    // the last day's peak is only one once the day is over or the sun is down
    if (day >= 0 && (timeline.end >= nextDay(day) || !!energy.sunDown?.(timeline.end))) flush();
  }
  return out;
}

/** Every event of the timeline, in time order; the same thing again within a few minutes counts once. */
export function findEvents({ timeline, roles, weather, night = sleepTime, energy = null }: EventInput): TTEvent[] {
  const raw: TTEvent[] = [];
  const add = (t: number, kind: EventKind, entity: string) => {
    if (t >= timeline.start && t <= timeline.end) raw.push({ t, kind, entity });
  };
  const rainTrack = weather ? timeline.tracks.get(weather) : undefined;
  const rain = rainTrack ? spans(rainTrack, RAIN, timeline.end) : [];
  for (const [id, role] of roles) {
    if (role === "washer") {
      for (const t of machineDone(powerPoints(timeline, id))) add(t, "washer", id);
      continue;
    }
    const track = timeline.tracks.get(id);
    if (!track) continue;
    if (role === "window" || role === "window_more") {
      // open while it rained: one event per window and shower, when both first met
      for (const [o0, o1] of spans(track, OPEN, timeline.end)) {
        if (role === "window" && o0 > timeline.start && o0 > track.times[0]) add(o0, "window", id);
        for (const [r0, r1] of rain) if (o0 < r1 && r0 < o1) add(Math.max(o0, r0), "rain", id);
      }
      continue;
    }
    for (const c of changes(track)) {
      if (c.from === null) continue;
      switch (role) {
        case "door":
          if (OPEN.has(c.to) && !OPEN.has(c.from)) add(c.t, "door", id);
          break;
        case "garage":
          if ((c.to === "on" || c.to === "open" || c.to === "opening") && (c.from === "off" || c.from === "closed" || c.from === "closing")) add(c.t, "garage", id);
          break;
        case "lock":
          if ((c.to === "unlocked" || c.to === "open") && (c.from === "locked" || c.from === "locking")) add(c.t, "lock", id);
          break;
        case "alarm":
          if (c.to === "triggered") add(c.t, "alarm", id);
          break;
        case "smoke":
        case "gas":
        case "co":
        case "water":
          if (c.to === "on" && c.from !== "on") add(c.t, role, id);
          break;
        case "motion":
          if (c.to === "on" && c.from === "off" && night(c.t)) add(c.t, "motion", id);
          break;
        case "robot":
          if (c.to === "cleaning" && c.from !== "cleaning" && c.from !== "paused") add(c.t, "robot_start", id);
          else if (c.to === "docked" && (c.from === "cleaning" || c.from === "returning" || c.from === "paused")) add(c.t, "robot_done", id);
          break;
      }
    }
  }
  if (energy) for (const e of energyEvents(timeline, energy)) add(e.t, e.kind, e.entity);
  raw.sort((a, b) => a.t - b.t || RANK[b.kind] - RANK[a.kind]);
  // the same thing again soon after counts once (a door opened twice, motion all night long)
  const last = new Map<string, number>();
  return raw.filter((e) => {
    const key = `${e.kind}:${e.entity}`;
    const prev = last.get(key);
    const quiet = e.kind === "motion" ? 30 * 60000 : 5 * 60000;
    if (prev !== undefined && e.t - prev < quiet) return false;
    last.set(key, e.t);
    return true;
  });
}

export interface Cluster {
  /** Where the cluster sits on the bar (px) and the moment a tap jumps to (its most important event). */
  x: number;
  t: number;
  top: TTEvent;
  events: TTEvent[];
}

export interface HourGroup {
  /** Start of the hour (ms). */
  hour: number;
  events: TTEvent[];
}

/** The events sheet: the events of the chosen categories, newest hour first, in time order within the hour. */
export function groupByHour(events: readonly TTEvent[], show: ReadonlySet<Category>): HourGroup[] {
  const out: HourGroup[] = [];
  for (let i = events.length - 1; i >= 0; i--) {
    const e = events[i];
    if (!show.has(CATEGORY[e.kind])) continue;
    const hour = hourStart(e.t);
    const g = out[out.length - 1];
    if (g && g.hour === hour) g.events.unshift(e);
    else out.push({ hour, events: [e] });
  }
  return out;
}

/** Events closer than `minPx` on the bar become one marker, shown as its most important event. */
export function clusterEvents(events: readonly TTEvent[], xOf: (t: number) => number, minPx = 14): Cluster[] {
  const out: Cluster[] = [];
  for (const e of events) {
    const x = xOf(e.t);
    const c = out[out.length - 1];
    if (c && x - c.x < minPx) {
      c.events.push(e);
      if (RANK[e.kind] > RANK[c.top.kind]) {
        c.top = e;
        c.t = e.t;
      }
    } else out.push({ x, t: e.t, top: e, events: [e] });
  }
  return out;
}
