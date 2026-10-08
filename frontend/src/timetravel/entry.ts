// Time travel (Pro): the lazily loaded part. A session fetches the last 24 hours from Home Assistant's
// recorder, replays them as a read-only Home Assistant object and drives the time bar. While paused it
// runs no timer at all (a wall tablet stays at 0 B/s).

import type { HomeAssistant } from "../types.ts";
import "../components/time-bar.ts";
import { appliancePower, eventRoles, historyRequest } from "./classify.ts";
import { findEvents, type TTEvent } from "./events.ts";
import { eventNear, parseMoment, Playback, tickMs } from "./playback.ts";
import { Replay } from "./replay-hass.ts";
import { nightBands } from "./sun.ts";
import { buildTimeline, findGaps, type Timeline, type WireDay } from "./timeline.ts";
import type { ReplayInfo, StartOptions, TimeTravelSession } from "./types.ts";

export type { TimeTravelSession } from "./types.ts";

const RANGE_MS = 24 * 3600000;
/** Entities and statistics per request (several smaller answers instead of one huge one). */
const BATCH = 150;
const STAT_BATCH = 250;

export type SessionState = "loading" | "ready" | "error";

export class Session implements TimeTravelSession {
  hass: HomeAssistant | null = null;
  readonly replay: ReplayInfo;
  state: SessionState = "loading";
  /** Error code of the failed load ("not_unlocked", "no_recorder", "unknown_command" …). */
  error: string | null = null;
  progress = 0;
  playback: Playback | null = null;
  timeline: Timeline | null = null;
  events: TTEvent[] = [];
  /** Names for events whose entity says little (a power sensor stands for its washing machine). */
  names = new Map<string, string>();
  gaps: [number, number][] = [];
  nights: [number, number][] = [];
  readonly opts: StartOptions;
  readonly start: number;
  readonly end: number;
  private live: HomeAssistant;
  private replayer: Replay | null = null;
  private timer: ReturnType<typeof setTimeout> | undefined;
  private last = 0;
  private disposed = false;
  private readonly listeners = new Set<() => void>();
  private readonly onVisible = () => {
    if (!document.hidden && this.playback?.playing) this.schedule();
  };

  constructor(opts: StartOptions) {
    this.opts = opts;
    this.live = opts.live;
    this.end = Date.now();
    this.start = this.end - RANGE_MS;
    const session = this;
    this.replay = {
      t: this.end,
      seek: 0,
      rows: (ids, from, to) => session.replayer?.rows(ids, from, to) ?? {},
    };
    document.addEventListener("visibilitychange", this.onVisible);
    void this.load();
  }

  /** The time bar listens for redraws (clock, playhead, state). */
  listen(fn: () => void): () => void {
    this.listeners.add(fn);
    return () => this.listeners.delete(fn);
  }

  private notify(): void {
    for (const fn of this.listeners) fn();
  }

  get t(): (key: string, vars?: Record<string, string | number>) => string {
    return this.opts.t;
  }

  get location(): { lat: number; lon: number } | null {
    const c = this.live.config;
    return typeof c?.latitude === "number" && typeof c?.longitude === "number" ? { lat: c.latitude, lon: c.longitude } : null;
  }

  /** Fetches the history in a few requests, then replays from the start moment (paused). */
  async load(): Promise<void> {
    this.state = "loading";
    this.error = null;
    this.progress = 0;
    this.notify();
    const { building, spec } = this.opts;
    const live = this.live;
    const req = historyRequest(live, building, spec);
    const parts = Math.max(1, Math.ceil(req.entities.length / BATCH), Math.ceil(req.stats.length / STAT_BATCH));
    const days: WireDay[] = [];
    try {
      for (let i = 0; i < parts; i++) {
        const entityIds = req.entities.slice(i * BATCH, (i + 1) * BATCH);
        const statIds = req.stats.slice(i * STAT_BATCH, (i + 1) * STAT_BATCH);
        days.push(
          await live.callWS<WireDay>({
            type: "neonplan3d/timetravel/history",
            start_time: this.start / 1000,
            end_time: this.end / 1000,
            entity_ids: entityIds,
            statistic_ids: statIds,
          }),
        );
        if (this.disposed) return;
        this.progress = (i + 1) / parts;
        this.notify();
      }
    } catch (err) {
      if (this.disposed) return;
      const e = err as { code?: string; message?: string };
      this.state = "error";
      this.error = e?.code ?? e?.message ?? String(err);
      this.notify();
      return;
    }
    const timeline = buildTimeline(days);
    this.timeline = timeline;
    const privateIds = building.presence.flatMap((p) => [p.sensor]).filter((x): x is string => !!x);
    this.replayer = new Replay(timeline, { requested: [...req.entities, ...req.stats, ...privateIds], location: this.location });
    const fetched = new Set([...timeline.tracks.keys(), ...timeline.series.keys()]);
    const weather = [building.settings.weather_entity, ...req.entities.filter((id) => id.startsWith("weather."))].find((id) => !!id && fetched.has(id)) ?? null;
    this.events = findEvents({ timeline, roles: eventRoles(live, building, spec, fetched), weather });
    for (const [id, f] of appliancePower(live, building, spec)) this.names.set(id, f.name || this.t(`furn_${f.type}`));
    this.gaps = findGaps(timeline);
    const loc = this.location;
    this.nights = loc ? nightBands(loc.lat, loc.lon, this.start, this.end) : this.sunNights(timeline);
    const at = typeof this.opts.at === "number" ? this.opts.at : parseMoment(this.opts.at ?? null, this.end);
    this.playback = new Playback(this.start, this.end, at ?? this.end - 3600000, this.opts.speed ?? undefined);
    this.state = "ready";
    this.apply(true);
  }

  /** Without a location: the nights where sun.sun was below the horizon. */
  private sunNights(timeline: Timeline): [number, number][] {
    const sun = timeline.tracks.get("sun.sun");
    if (!sun) return [];
    const out: [number, number][] = [];
    let open: number | null = null;
    for (let k = 0; k < sun.times.length; k++) {
      const below = sun.values[sun.vals[k]].s === "below_horizon";
      if (below && open === null) open = sun.times[k];
      if (!below && open !== null) {
        out.push([open, sun.times[k]]);
        open = null;
      }
    }
    if (open !== null) out.push([open, this.end]);
    return out;
  }

  /** Builds Home Assistant at the playback's moment; the host renders again only when a state changed. */
  private apply(jump: boolean): void {
    const pb = this.playback;
    if (!pb || !this.replayer || this.disposed) return;
    this.replay.t = pb.t;
    if (jump) this.replay.seek++;
    const next = this.replayer.hassAt(this.live, pb.t);
    if (next !== this.hass || jump) {
      this.hass = next;
      this.opts.onChange();
    }
    this.notify();
  }

  setLive(hass: HomeAssistant): void {
    this.live = hass;
    // the host is rendering already: the new replayed object is read there, no extra round
    if (this.replayer && this.playback) this.hass = this.replayer.hassAt(hass, this.playback.t);
  }

  play(): void {
    const pb = this.playback;
    if (!pb) return;
    const restart = pb.t >= pb.end;
    pb.play();
    if (restart) this.apply(true);
    this.last = performance.now();
    this.schedule();
    this.notify();
  }

  pause(): void {
    this.playback?.pause();
    clearTimeout(this.timer);
    this.timer = undefined;
    this.notify();
  }

  toggle(): void {
    if (this.playback?.playing) this.pause();
    else this.play();
  }

  /** Jump to a moment (scrubbing, an event); doors and blinds stand there at once. */
  seek(t: number, pause = false): void {
    if (!this.playback) return;
    if (pause) this.pause();
    this.playback.seek(t);
    this.last = performance.now();
    this.apply(true);
  }

  /** The previous or next event (pauses there). */
  step(dir: 1 | -1): void {
    const pb = this.playback;
    if (!pb) return;
    const e = eventNear(this.events, pb.t, dir);
    this.seek(e ? e.t : dir > 0 ? pb.end : pb.start, true);
  }

  nextSpeed(): void {
    this.playback?.nextSpeed();
    this.notify();
  }

  private schedule(): void {
    clearTimeout(this.timer);
    this.timer = undefined;
    const pb = this.playback;
    if (!pb?.playing || this.disposed || document.hidden) return;
    this.timer = setTimeout(() => {
      this.timer = undefined;
      const now = performance.now();
      // a long pause of the page (a frozen tablet) does not turn into one huge jump
      const dt = Math.min(2000, now - this.last);
      this.last = now;
      if (pb.advance(dt)) this.apply(false);
      if (pb.playing) this.schedule();
      else this.notify();
    }, tickMs(this.opts.quality, this.opts.spec.low));
  }

  exit(): void {
    this.opts.onExit();
  }

  dispose(): void {
    this.disposed = true;
    clearTimeout(this.timer);
    this.timer = undefined;
    this.listeners.clear();
    document.removeEventListener("visibilitychange", this.onVisible);
  }
}

export function startTimeTravel(opts: StartOptions): TimeTravelSession {
  return new Session(opts);
}
