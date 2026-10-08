// Time travel: the fetched history as compact typed arrays, and a cursor that finds the row of every entity
// at a moment. Moving forward (playback) costs a step or two per entity; a jump searches.

/** A value of the wire format: a state, or a state with the attributes kept for it. */
export type WireValue = string | [string, Record<string, unknown>];

/** One entity of a day: row times (seconds after day_start), value indices and the value table. */
export interface WireEntity {
  t: number[];
  v: number[];
  tab: WireValue[];
}

/** A numeric sensor's five-minute means (null: no value in that slot). */
export interface WireStat {
  start: number;
  step: number;
  mean: (number | null)[];
}

/** The answer of neonplan3d/timetravel/history (times in seconds since the epoch). */
export interface WireDay {
  day_start: number;
  end: number;
  /** Where the recorder's data begins inside this window (null: before it). */
  oldest: number | null;
  keep_days: number | null;
  entities: Record<string, WireEntity>;
  stats: Record<string, WireStat>;
  /** Entities the recorder has nothing of (excluded, or newer than the window). */
  missing: string[];
}

export interface Value {
  s: string;
  a: Record<string, unknown> | null;
}

export interface Track {
  id: string;
  /** Row times in ms, ascending. */
  times: Float64Array;
  /** Index into `values` per row. */
  vals: Uint32Array;
  values: Value[];
  /** When the state (not just an attribute) last changed, per row (ms). */
  since: Float64Array;
}

export interface Series {
  id: string;
  /** Start of the first slot and the slot length (ms). */
  start: number;
  step: number;
  /** Mean per slot; NaN where there is none. */
  mean: Float32Array;
}

export interface Timeline {
  start: number;
  end: number;
  /** Before this moment the recorder has no data at all (null: data reaches back past the start). */
  oldest: number | null;
  keepDays: number | null;
  tracks: Map<string, Track>;
  series: Map<string, Series>;
  missing: Set<string>;
}

const valueOf = (w: WireValue): Value => (typeof w === "string" ? { s: w, a: null } : { s: String(w[0]), a: w[1] && typeof w[1] === "object" ? w[1] : null });

const keyOf = (v: Value) => `${v.s}\u0000${v.a ? JSON.stringify(v.a) : ""}`;

/**
 * Builds the timeline from one or more answers (days, or batches of entities over the same window).
 * Rows of one entity from several days are joined in time order; a repeated value is dropped.
 */
export function buildTimeline(days: readonly WireDay[]): Timeline {
  const sorted = [...days].sort((a, b) => a.day_start - b.day_start);
  const rows = new Map<string, { t: number; v: Value; k: string }[]>();
  const stats = new Map<string, { start: number; step: number; mean: (number | null)[] }[]>();
  const missing = new Set<string>();
  let start = Infinity;
  let end = -Infinity;
  let oldest: number | null = null;
  let anyBefore = false;
  let keepDays: number | null = null;
  for (const d of sorted) {
    start = Math.min(start, d.day_start * 1000);
    end = Math.max(end, d.end * 1000);
    if (d.oldest === null) anyBefore = true;
    else oldest = oldest === null ? d.oldest * 1000 : Math.min(oldest, d.oldest * 1000);
    keepDays ??= d.keep_days;
    for (const [id, e] of Object.entries(d.entities ?? {})) {
      const list = rows.get(id) ?? [];
      const base = d.day_start * 1000;
      const n = Math.min(e.t.length, e.v.length);
      for (let i = 0; i < n; i++) {
        const w = e.tab[e.v[i]];
        if (w === undefined) continue;
        const v = valueOf(w);
        const k = keyOf(v);
        const prev = list[list.length - 1];
        const t = base + e.t[i] * 1000;
        if (prev && (t < prev.t || prev.k === k)) continue;
        list.push({ t, v, k });
      }
      rows.set(id, list);
    }
    for (const [id, s] of Object.entries(d.stats ?? {})) {
      const list = stats.get(id) ?? [];
      list.push({ start: s.start * 1000, step: s.step * 1000, mean: s.mean });
      stats.set(id, list);
    }
    for (const id of d.missing ?? []) missing.add(id);
  }
  const tracks = new Map<string, Track>();
  for (const [id, list] of rows) {
    if (!list.length) continue;
    const values: Value[] = [];
    const index = new Map<string, number>();
    const times = new Float64Array(list.length);
    const vals = new Uint32Array(list.length);
    const since = new Float64Array(list.length);
    for (let i = 0; i < list.length; i++) {
      let k = index.get(list[i].k);
      if (k === undefined) {
        k = values.length;
        values.push(list[i].v);
        index.set(list[i].k, k);
      }
      times[i] = list[i].t;
      vals[i] = k;
      since[i] = i > 0 && list[i - 1].v.s === list[i].v.s ? since[i - 1] : list[i].t;
    }
    tracks.set(id, { id, times, vals, values, since });
    missing.delete(id);
  }
  const series = new Map<string, Series>();
  for (const [id, parts] of stats) {
    // slots of all parts on one grid (the first part's step); a slot without a value stays NaN
    const step = parts[0].step;
    if (!(step > 0)) continue;
    const first = Math.min(...parts.map((p) => p.start));
    const last = Math.max(...parts.map((p) => p.start + p.mean.length * p.step));
    const n = Math.max(0, Math.round((last - first) / step));
    if (!n) continue;
    const mean = new Float32Array(n).fill(NaN);
    for (const p of parts)
      p.mean.forEach((m, i) => {
        const slot = Math.round((p.start + i * p.step - first) / step);
        if (typeof m === "number" && Number.isFinite(m) && slot >= 0 && slot < n) mean[slot] = m;
      });
    if (mean.every((m) => Number.isNaN(m))) continue;
    series.set(id, { id, start: first, step, mean });
    missing.delete(id);
  }
  return {
    start: Number.isFinite(start) ? start : 0,
    end: Number.isFinite(end) ? end : 0,
    oldest: anyBefore ? null : oldest,
    keepDays,
    tracks,
    series,
    missing,
  };
}

/** The last row at or before t (-1: none yet). */
export function indexAt(times: Float64Array, t: number): number {
  let lo = 0;
  let hi = times.length - 1;
  if (hi < 0 || times[0] > t) return -1;
  while (lo < hi) {
    const mid = (lo + hi + 1) >> 1;
    if (times[mid] <= t) lo = mid;
    else hi = mid - 1;
  }
  return lo;
}

/**
 * The row of every track at the current moment. Playback moves forward a little at a time, so the cursor
 * steps on from where it was; going back or far ahead searches instead.
 */
export class Cursor {
  readonly tracks: Track[];
  readonly idx: Int32Array;
  t = -Infinity;

  constructor(timeline: Timeline) {
    this.tracks = [...timeline.tracks.values()];
    this.idx = new Int32Array(this.tracks.length).fill(-1);
  }

  /** Moves to t; returns the positions (index per track, -1 before the first row). */
  at(t: number): Int32Array {
    const forward = t >= this.t;
    for (let i = 0; i < this.tracks.length; i++) {
      const times = this.tracks[i].times;
      let k = this.idx[i];
      if (!forward) k = indexAt(times, t);
      else {
        // a few steps forward; a long way ahead (a jump) searches
        let steps = 0;
        while (k + 1 < times.length && times[k + 1] <= t && steps < 8) {
          k++;
          steps++;
        }
        if (k + 1 < times.length && times[k + 1] <= t) k = indexAt(times, t);
      }
      this.idx[i] = k;
    }
    this.t = t;
    return this.idx;
  }

  /** The value of a track at the cursor (null before its first row). */
  value(i: number): Value | null {
    const k = this.idx[i];
    return k < 0 ? null : this.tracks[i].values[this.tracks[i].vals[k]];
  }
}

const NO_DATA = new Set(["unavailable", "unknown"]);

/**
 * Stretches where the recorder has (nearly) nothing: most entities unavailable or without a row, e.g. while
 * Home Assistant was restarting or switched off. Sampled every `stepMs`; gaps shorter than `minMs` are dropped.
 */
export function findGaps(timeline: Timeline, stepMs = 5 * 60000, share = 0.6, minMs = 10 * 60000): [number, number][] {
  const cursor = new Cursor(timeline);
  if (!cursor.tracks.length) return [];
  const from = timeline.oldest ?? timeline.start;
  const out: [number, number][] = [];
  let open: number | null = null;
  for (let t = from; t <= timeline.end; t += stepMs) {
    cursor.at(t);
    let bad = 0;
    for (let i = 0; i < cursor.tracks.length; i++) {
      const v = cursor.value(i);
      if (!v || NO_DATA.has(v.s)) bad++;
    }
    const gap = bad / cursor.tracks.length >= share;
    if (gap && open === null) open = t;
    if (!gap && open !== null) {
      if (t - open >= minMs) out.push([open, t]);
      open = null;
    }
  }
  if (open !== null && timeline.end - open >= minMs) out.push([open, timeline.end]);
  return out;
}

// ---- several days: joining, thinning, live rows ----

/** When the state (not just an attribute) last changed, for every row. */
function fillSince(track: Track): void {
  for (let i = 0; i < track.times.length; i++)
    track.since[i] = i > 0 && track.values[track.vals[i - 1]].s === track.values[track.vals[i]].s ? track.since[i - 1] : track.times[i];
}

/** Two tracks of the same entity from neighbouring windows in one; a repeated value at the seam is dropped. */
function joinTracks(older: Track, newer: Track): Track {
  const values = [...older.values];
  const index = new Map(values.map((v, i) => [keyOf(v), i]));
  const remap = newer.values.map((v) => {
    const k = keyOf(v);
    let i = index.get(k);
    if (i === undefined) {
      i = values.length;
      values.push(v);
      index.set(k, i);
    }
    return i;
  });
  const first = newer.times.length ? newer.times[0] : Infinity;
  const times: number[] = [];
  const vals: number[] = [];
  for (let i = 0; i < older.times.length && older.times[i] < first; i++) {
    times.push(older.times[i]);
    vals.push(older.vals[i]);
  }
  for (let i = 0; i < newer.times.length; i++) {
    const v = remap[newer.vals[i]];
    if (vals.length && vals[vals.length - 1] === v) continue;
    times.push(newer.times[i]);
    vals.push(v);
  }
  const track: Track = { id: older.id, times: Float64Array.from(times), vals: Uint32Array.from(vals), values, since: new Float64Array(times.length) };
  fillSince(track);
  return track;
}

function joinSeries(a: Series, b: Series): Series {
  const step = a.step;
  const first = Math.min(a.start, b.start);
  const last = Math.max(a.start + a.mean.length * a.step, b.start + b.mean.length * b.step);
  const n = Math.max(0, Math.round((last - first) / step));
  const mean = new Float32Array(n).fill(NaN);
  for (const s of [a, b])
    for (let i = 0; i < s.mean.length; i++) {
      const slot = Math.round((s.start + i * s.step - first) / step);
      if (!Number.isNaN(s.mean[i]) && slot >= 0 && slot < n) mean[slot] = s.mean[i];
    }
  return { id: a.id, start: first, step, mean };
}

/**
 * Two timelines of neighbouring windows (an older day fetched later) as one. The typed rows are joined
 * directly, so the fetched answers need not be kept.
 */
export function mergeTimelines(a: Timeline, b: Timeline): Timeline {
  const [older, newer] = a.start <= b.start ? [a, b] : [b, a];
  const tracks = new Map<string, Track>();
  for (const id of new Set([...older.tracks.keys(), ...newer.tracks.keys()])) {
    const x = older.tracks.get(id);
    const y = newer.tracks.get(id);
    tracks.set(id, x && y ? joinTracks(x, y) : (x ?? y)!);
  }
  const series = new Map<string, Series>();
  for (const id of new Set([...older.series.keys(), ...newer.series.keys()])) {
    const x = older.series.get(id);
    const y = newer.series.get(id);
    series.set(id, x && y ? joinSeries(x, y) : (x ?? y)!);
  }
  const missing = new Set([...older.missing, ...newer.missing].filter((id) => !tracks.has(id) && !series.has(id)));
  // an older window without any data: the newer one says where the data begins
  const oldest = older.oldest === null ? null : older.oldest < older.end ? older.oldest : (newer.oldest ?? newer.start);
  return { start: older.start, end: Math.max(older.end, newer.end), oldest, keepDays: newer.keepDays ?? older.keepDays, tracks, series, missing };
}

/** Rows of all tracks together (what the memory of a timeline grows with). */
export function rowCount(timeline: Timeline): number {
  let n = 0;
  for (const t of timeline.tracks.values()) n += t.times.length;
  return n;
}

/** About how much memory a timeline takes (bytes): 20 per row, 4 per statistics slot, a little per value. */
export function timelineBytes(timeline: Timeline): number {
  let bytes = 0;
  for (const t of timeline.tracks.values()) bytes += t.times.length * 20 + t.values.length * 120;
  for (const s of timeline.series.values()) bytes += s.mean.length * 4;
  return bytes;
}

/** Above this many rows the short motion pulses go first (a week of a busy house stays below 10 MB). */
export const THIN_ROWS = 300_000;

/**
 * Drops the short pulses (off – on – off within `minMs`) of the given tracks, motion sensors that fire all
 * day. The tracks are rebuilt in place; returns the number of rows dropped.
 */
export function thinPulses(timeline: Timeline, ids: Iterable<string>, minMs = 60000): number {
  let dropped = 0;
  for (const id of ids) {
    const track = timeline.tracks.get(id);
    if (!track || track.times.length < 3) continue;
    const n = track.times.length;
    const s = (k: number) => track.values[track.vals[k]].s;
    const keep: number[] = [];
    for (let k = 0; k < n; k++) {
      const prev = keep.length ? keep[keep.length - 1] : -1;
      if (prev >= 0 && s(prev) === "off" && s(k) === "on" && k + 1 < n && s(k + 1) === "off" && track.times[k + 1] - track.times[k] < minMs) {
        k++;
        dropped += 2;
        continue;
      }
      // the row after a dropped pulse may repeat the one before it
      if (prev >= 0 && track.vals[prev] === track.vals[k]) {
        dropped++;
        continue;
      }
      keep.push(k);
    }
    if (keep.length === n) continue;
    const times = Float64Array.from(keep, (k) => track.times[k]);
    const vals = Uint32Array.from(keep, (k) => track.vals[k]);
    track.times = times;
    track.vals = vals;
    track.since = new Float64Array(keep.length);
    fillSince(track);
  }
  return dropped;
}

/** Adds a row at the end of a track (a live change); a row before the last one or a repeated value is left out. */
export function appendRow(track: Track, t: number, value: Value): boolean {
  const n = track.times.length;
  if (n && t < track.times[n - 1]) return false;
  const key = keyOf(value);
  let v = track.values.findIndex((x) => keyOf(x) === key);
  if (n && v === track.vals[n - 1]) return false;
  if (v < 0) {
    v = track.values.length;
    track.values.push(value);
  }
  const times = new Float64Array(n + 1);
  times.set(track.times);
  times[n] = t;
  const vals = new Uint32Array(n + 1);
  vals.set(track.vals);
  vals[n] = v;
  const since = new Float64Array(n + 1);
  since.set(track.since);
  since[n] = n && track.values[track.vals[n - 1]].s === value.s ? track.since[n - 1] : t;
  track.times = times;
  track.vals = vals;
  track.since = since;
  return true;
}

/** Puts a live value of a numeric sensor into its five-minute slot (a slot the statistics filled stays). */
export function appendSeriesValue(series: Series, t: number, value: number): boolean {
  if (!Number.isFinite(value) || t < series.start) return false;
  const slot = Math.floor((t - series.start) / series.step);
  if (slot >= series.mean.length) {
    const mean = new Float32Array(slot + 1).fill(NaN);
    mean.set(series.mean);
    series.mean = mean;
  }
  if (!Number.isNaN(series.mean[slot])) return false;
  series.mean[slot] = value;
  return true;
}

/** Five-minute rows (as the recorder's statistics answer them) of some entities between two moments. */
export function statRows(timeline: Timeline, ids: readonly string[], from: number, to: number): Record<string, { start: number; mean: number }[]> {
  const out: Record<string, { start: number; mean: number }[]> = {};
  const step = 300000;
  for (const id of ids) {
    const s = timeline.series.get(id);
    const track = timeline.tracks.get(id);
    if (!s && !track) continue;
    const list: { start: number; mean: number }[] = [];
    for (let t = Math.floor(from / step) * step; t < to; t += step) {
      let m = NaN;
      if (s) {
        const slot = Math.floor((t + step / 2 - s.start) / s.step);
        m = slot >= 0 && slot < s.mean.length ? s.mean[slot] : NaN;
      } else if (track) {
        const k = indexAt(track.times, t + step / 2);
        m = k < 0 ? NaN : Number(track.values[track.vals[k]].s);
      }
      if (Number.isFinite(m)) list.push({ start: t, mean: m });
    }
    if (list.length) out[id] = list;
  }
  return out;
}
