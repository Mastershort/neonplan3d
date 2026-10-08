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
