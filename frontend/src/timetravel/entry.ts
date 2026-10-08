// Time travel (Pro): the lazily loaded part. A session fetches the last 24 hours from Home Assistant's
// recorder (older days one after another in the background when the week is asked for), replays them as a
// read-only Home Assistant object and drives the time bar. While paused it runs no timer at all (a wall
// tablet stays at 0 B/s).

import { deviceSensors, type DeviceSensors } from "../energy.ts";
import type { HomeAssistant } from "../types.ts";
import "../components/time-bar.ts";
import { appliancePower, eventRoles, historyRequest, type Role } from "./classify.ts";
import { findEvents, IMPORTANT, MINOR, type TTEvent } from "./events.ts";
import { LiveLog } from "./live.ts";
import { crossedEvent, eventNear, eventsIn, parseMoment, Playback, SPEEDS, tickMs, WEEK_SPEEDS } from "./playback.ts";
import { Replay } from "./replay-hass.ts";
import { robotRun } from "./robot.ts";
import { roomEntities, roomOf, type RoomEntities } from "./rooms.ts";
import { isNight, nightBands } from "./sun.ts";
import { awaySuggestion, awaySummary, dayEnergy, daySummary, energyAt, energyIds, quietStretches, type AwayRow, type DaySummary } from "./summary.ts";
import { withTexts } from "./texts.ts";
import { buildTimeline, findGaps, indexAt, mergeTimelines, rowCount, statRows, thinPulses, THIN_ROWS, timelineBytes, trimTimeline, type Timeline, type WireDay } from "./timeline.ts";
import { nextDay, setZone, zoneOf } from "./tz.ts";
import type { Range, ReplayInfo, StartOptions, TimeTravelSession } from "./types.ts";

export type { TimeTravelSession } from "./types.ts";

const DAY = 24 * 3600000;
/** Entities and statistics per request (several smaller answers instead of one huge one). */
const BATCH = 150;
const STAT_BATCH = 250;
/** The memory the days may take; above it no older day is loaded. */
export const MAX_BYTES = 10 * 1024 * 1024;
/** Within this much replayed time of the end, the live changes are added (the live edge). */
const EDGE_MS = 60000;
/** The live changes join the timeline about this often anyway (with a live update, never by a timer). */
const FLUSH_MS = 60000;
/** Events, gaps and summaries are worked out again at most this often while the live edge plays. */
const DERIVE_MS = 10000;

export type SessionState = "loading" | "ready" | "error";

/** Viewer settings of the time travel, kept in this browser only. */
function pref(key: string, value?: string): string | null {
  try {
    if (value !== undefined) localStorage.setItem(`fp3d-tt-${key}`, value);
    return localStorage.getItem(`fp3d-tt-${key}`);
  } catch {
    return null;
  }
}

export class Session implements TimeTravelSession {
  hass: HomeAssistant | null = null;
  readonly replay: ReplayInfo;
  state: SessionState = "loading";
  /** Error code of the failed load ("not_unlocked", "no_recorder", "unknown_command" …). */
  error: string | null = null;
  progress = 0;
  playback: Playback | null = null;
  timeline: Timeline | null = null;
  /** The bar's events (and the previous / next buttons'). */
  events: TTEvent[] = [];
  /** Every event, also the ones only the events sheet lists. */
  allEvents: TTEvent[] = [];
  /** Names for events whose entity says little (a power sensor stands for its washing machine). */
  names = new Map<string, string>();
  gaps: [number, number][] = [];
  nights: [number, number][] = [];
  rooms: RoomEntities[] = [];
  roomOf = new Map<string, RoomEntities>();
  readonly opts: StartOptions;
  /** The end of the replay: when the time travel began, moved on by the live edge. */
  end: number;
  range: Range;
  /** The day being fetched in the background (its start), null when none is. */
  loadingDay: number | null = null;
  /** No more older days: the memory limit was reached. */
  full = false;
  /** Bumped whenever the timeline grows (the summaries are worked out again). */
  version = 0;
  /** The camera follows the events; a fast replay stops at important ones. */
  follow = pref("follow") === "1";
  stopImportant = pref("stop") !== "0";
  /** When the time travel was last closed in this browser (for "while you were away"). */
  readonly lastClosed: number | null;
  readonly t: (key: string, vars?: Record<string, string | number>) => string;
  private live: HomeAssistant;
  /** The states when the time travel began: nothing live after that shows in the past. */
  private readonly startStates: HomeAssistant["states"];
  private replayer: Replay | null = null;
  private roles = new Map<string, Role>();
  private weather: string | null = null;
  private devices: DeviceSensors | null = null;
  private energyIds: string[] = [];
  private requested: string[] = [];
  private cars: string[] = [];
  private liveLog: LiveLog | null = null;
  private quality: "auto" | "low" | "high";
  private low: boolean;
  private timer: ReturnType<typeof setTimeout> | undefined;
  private last = 0;
  private followAt = 0;
  private eventsAt = 0;
  /** When the live changes last joined the timeline. */
  private flushedAt = 0;
  /** New live rows whose events, gaps and summaries are still to be worked out. */
  private derivePending = false;
  /** Up to where the gaps were looked for. */
  private gapsTo = 0;
  /** A jump that waits for an older day ("yesterday at this time" from the first day). */
  private wanted: number | null = null;
  /** A day the comparison needs although the shown range does not reach it (its start). */
  private needFrom: number | null = null;
  private olderRunning = false;
  private disposed = false;
  private daySummaries = new Map<string, DaySummary>();
  private readonly listeners = new Set<() => void>();
  private readonly onVisible = () => {
    if (document.hidden || !this.playback?.playing) return;
    // the hidden time does not count: playback goes on where it stopped
    this.last = performance.now();
    this.schedule();
  };

  constructor(opts: StartOptions) {
    this.opts = opts;
    this.live = opts.live;
    this.startStates = opts.live.states;
    this.quality = opts.quality;
    this.low = opts.spec.low;
    this.t = withTexts(opts.t, () => this.live.language);
    setZone(zoneOf(opts.live));
    this.end = Date.now();
    this.range = opts.range === "7d" ? "7d" : "24h";
    const closed = Number(pref("closed"));
    this.lastClosed = Number.isFinite(closed) && closed > 0 && closed < this.end ? closed : null;
    const session = this;
    this.replay = {
      t: this.end,
      seek: 0,
      pulses: [],
      focus: null,
      focusSeq: 0,
      rows: (ids, from, to) => session.replayer?.rows(ids, from, to) ?? {},
      listen: (fn) => session.listen(fn),
      stats: (ids, from, to) => (session.timeline ? statRows(session.timeline, ids, from, to) : {}),
      robotRooms: (vacuum, sensor) => (session.timeline ? robotRun(session.timeline.tracks.get(vacuum), sensor ? session.timeline.tracks.get(sensor) : undefined, session.replay.t) : []),
      setQuality: (quality, low) => session.setQuality(quality, low),
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

  get playing(): boolean {
    return !!this.playback?.playing;
  }

  /** Days the week view may hold: a wall tablet two, unless the card asks for the week (time_travel_range: 7d). */
  get maxDays(): number {
    return (this.quality === "low" || this.low) && this.opts.range !== "7d" ? 2 : 7;
  }

  /** The start of the shown range: a day, or the days of the week view (loaded or not yet). */
  get start(): number {
    return this.end - (this.range === "7d" ? this.maxDays : 1) * DAY;
  }

  /** Where the recorder's data ends at the back (its purge_keep_days), null when unknown. */
  get recorderStart(): number | null {
    const keep = this.timeline?.keepDays;
    return typeof keep === "number" && keep > 0 ? this.end - keep * DAY : null;
  }

  /** The playhead stands at the present (the replay has caught up with live). */
  get atNow(): boolean {
    const pb = this.playback;
    return !!pb && !pb.playing && pb.t >= pb.end - 1000 && Date.now() - pb.end < 120000;
  }

  get location(): { lat: number; lon: number } | null {
    const c = this.live.config;
    return typeof c?.latitude === "number" && typeof c?.longitude === "number" ? { lat: c.latitude, lon: c.longitude } : null;
  }

  /** Energie Pro's sensors are part of the summaries and events. */
  get energy(): boolean {
    return !!this.opts.spec.energy && this.energyIds.length > 0;
  }

  /** One window of the history in a few requests, one after another (null: the session ended meanwhile). */
  private async fetchWindow(from: number, to: number, onPart?: (share: number) => void): Promise<Timeline | null> {
    const req = historyRequest(this.live, this.opts.building, this.opts.spec);
    const parts = Math.max(1, Math.ceil(req.entities.length / BATCH), Math.ceil(req.stats.length / STAT_BATCH));
    const days: WireDay[] = [];
    for (let i = 0; i < parts; i++) {
      const entityIds = req.entities.slice(i * BATCH, (i + 1) * BATCH);
      const statIds = req.stats.slice(i * STAT_BATCH, (i + 1) * STAT_BATCH);
      const msg: Record<string, unknown> = { type: "neonplan3d/timetravel/history", start_time: from / 1000, end_time: to / 1000, entity_ids: entityIds, statistic_ids: statIds };
      // the cars' own trackers: the integration answers them as home or away only
      const cars = req.cars.filter((id) => entityIds.includes(id));
      if (cars.length) msg.car_trackers = cars;
      days.push(await this.live.callWS<WireDay>(msg));
      if (this.disposed) return null;
      onPart?.((i + 1) / parts);
    }
    return buildTimeline(days);
  }

  /** Fetches the last day in a few requests, then replays from the start moment (paused); older days follow. */
  async load(): Promise<void> {
    this.state = "loading";
    this.error = null;
    this.progress = 0;
    this.notify();
    const { building, spec } = this.opts;
    const live = this.live;
    const req = historyRequest(live, building, spec);
    let timeline: Timeline | null;
    try {
      timeline = await this.fetchWindow(this.end - DAY, this.end, (share) => {
        this.progress = share;
        this.notify();
      });
    } catch (err) {
      if (this.disposed) return;
      const e = err as { code?: string; message?: string };
      this.state = "error";
      this.error = e?.code ?? e?.message ?? String(err);
      this.notify();
      return;
    }
    if (!timeline) return;
    const privateIds = building.presence.flatMap((p) => [p.sensor]).filter((x): x is string => !!x);
    // entities beyond the limit are replayed too (as "unknown"): their live state does not belong into the past;
    // the private ones (places, the devices people carry) read "unknown" as well
    this.requested = [...req.entities, ...req.stats, ...req.overflow, ...req.hidden, ...privateIds];
    this.cars = req.cars;
    const links = new Map(spec.furniture);
    this.devices = spec.energy ? deviceSensors(building, (f) => links.get(f.id)?.power ?? null) : null;
    this.energyIds = this.devices ? energyIds(building, this.devices) : [];
    this.rooms = roomEntities(live, building, spec);
    this.roomOf = roomOf(this.rooms);
    for (const [id, f] of appliancePower(live, building, spec)) this.names.set(id, f.name || this.t(`furn_${f.type}`));
    this.setTimeline(timeline);
    const at = typeof this.opts.at === "number" ? this.opts.at : parseMoment(this.opts.at ?? null, this.end);
    this.playback = new Playback(timeline.start, this.end, at ?? this.end - 3600000, this.opts.speed ?? undefined, this.range === "7d" ? WEEK_SPEEDS : SPEEDS);
    // the live changes from now on: the playback can run into the present
    // (also those beyond the limit: from the start on their live states are known)
    this.liveLog = new LiveLog([...req.entities, ...req.stats, ...req.overflow], this.startStates, this.end);
    this.liveLog.record(this.live.states, Date.now());
    this.flushedAt = Date.now();
    this.state = "ready";
    this.apply(true);
    if (this.range === "7d") void this.loadOlder();
  }

  /** A new timeline (the first day, or an older day joined): replay, events, gaps and nights follow. */
  private setTimeline(timeline: Timeline): void {
    const { building, spec } = this.opts;
    const live = this.live;
    // the roles of the new timeline first: the thinning needs its motion sensors
    const fetched = new Set([...timeline.tracks.keys(), ...timeline.series.keys()]);
    this.roles = eventRoles(live, building, spec, fetched);
    // a busy week: the short motion pulses go first
    if (rowCount(timeline) > THIN_ROWS) thinPulses(timeline, this.motion());
    this.timeline = timeline;
    this.version++;
    this.daySummaries.clear();
    this.replayer = new Replay(timeline, { requested: this.requested, location: this.location, states: this.startStates, allowed: this.cars });
    this.weather ??= [building.settings.weather_entity, ...Object.keys(live.states).filter((id) => id.startsWith("weather."))].find((id) => !!id && fetched.has(id)) ?? null;
    this.findEvents();
    this.gaps = findGaps(timeline);
    this.gapsTo = timeline.end;
    this.updateNights();
  }

  private findEvents(): void {
    const timeline = this.timeline;
    if (!timeline) return;
    const { building, spec } = this.opts;
    const d = this.devices;
    const energy =
      d && spec.energy
        ? { solar: building.energy.solar ? [building.energy.solar] : d.solar, soc: building.energy.battery_soc ? [building.energy.battery_soc] : d.soc, sunDown: (t: number) => this.sunDown(t) }
        : null;
    this.allEvents = findEvents({ timeline, roles: this.roles, weather: this.weather, energy });
    this.events = this.allEvents.filter((e) => !MINOR.has(e.kind));
  }

  /** The sun below the horizon at t (Home Assistant's location, else the replayed sun.sun; unknown: no). */
  private sunDown(t: number): boolean {
    const loc = this.location;
    if (loc) return isNight(loc.lat, loc.lon, t);
    const sun = this.timeline?.tracks.get("sun.sun");
    const k = sun ? indexAt(sun.times, t) : -1;
    return !!sun && k >= 0 && sun.values[sun.vals[k]].s === "below_horizon";
  }

  /** The events within the range the playhead can reach (older days of a week stay loaded in the 24-hour view). */
  shownEvents(all = false): TTEvent[] {
    const pb = this.playback;
    const list = all ? this.allEvents : this.events;
    return pb ? eventsIn(list, Math.max(pb.start, this.start), this.end) : list;
  }

  private motion(): string[] {
    return [...this.roles].filter(([, r]) => r === "motion").map(([id]) => id);
  }

  private updateNights(): void {
    const loc = this.location;
    this.nights = loc ? nightBands(loc.lat, loc.lon, this.start, this.end) : this.sunNights();
  }

  /** Older days, newest first, one request at a time; stops on exit, at the recorder's limit and at the memory limit. */
  private async loadOlder(): Promise<void> {
    if (this.olderRunning) return;
    this.olderRunning = true;
    try {
      while (!this.disposed && this.timeline && !this.full) {
        const to = this.timeline.start;
        // the week's days, or the day the comparison asks for
        const target = Math.min(this.range === "7d" ? this.start : Infinity, this.needFrom ?? Infinity);
        if (to <= target + 60000) break;
        const limit = this.recorderStart;
        // nothing older is kept by the recorder (or its data began within the loaded days)
        if ((limit !== null && to <= limit) || (this.timeline.oldest !== null && this.timeline.oldest > this.timeline.start)) break;
        this.loadingDay = to - DAY;
        this.notify();
        let older: Timeline | null;
        try {
          older = await this.fetchWindow(to - DAY, to);
        } catch (err) {
          console.warn("NeonPlan 3D: time travel could not load an older day", err);
          break;
        }
        if (!older || this.disposed || !this.timeline) return;
        const merged = mergeTimelines(older, this.timeline);
        this.setTimeline(merged);
        if (timelineBytes(merged) > MAX_BYTES) this.full = true;
        const pb = this.playback;
        if (!pb) continue;
        pb.setRange(Math.max(merged.start, this.start), this.end);
        let jumped = false;
        if (this.wanted !== null && this.wanted >= pb.start) {
          pb.seek(this.wanted);
          this.wanted = null;
          jumped = true;
        }
        // the replay is new: every state is handed over once (doors stand where they are, after a jump at once)
        this.apply(true, jumped);
      }
    } finally {
      this.olderRunning = false;
      if (!this.disposed) {
        this.loadingDay = null;
        this.notify();
      }
    }
  }

  /** 24 hours or the week; the days already fetched stay. */
  setRange(range: Range): void {
    const pb = this.playback;
    if (range === this.range || !pb || !this.timeline) return;
    this.range = range;
    const t = pb.t;
    // the speed chosen stays (every day speed is a week speed too)
    pb.setRange(Math.max(this.timeline.start, this.start), this.end, range === "7d" ? WEEK_SPEEDS : SPEEDS);
    this.updateNights();
    if (pb.t !== t) this.apply(true);
    else this.notify();
    if (range === "7d") void this.loadOlder();
  }

  /** Without a location: the nights where sun.sun was below the horizon. */
  private sunNights(): [number, number][] {
    const sun = this.timeline?.tracks.get("sun.sun");
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

  /**
   * Builds Home Assistant at the playback's moment; the host renders again only when a state changed.
   * The listeners (time bar, 3D view) hear of every tick. `jump`: no pulses are looked for; `seek`: doors
   * and blinds stand at once.
   */
  private apply(jump: boolean, seek = jump): void {
    const pb = this.playback;
    if (!pb || !this.replayer || this.disposed) return;
    this.replay.t = pb.t;
    if (seek) this.replay.seek++;
    const next = this.replayer.hassAt(this.live, pb.t, jump);
    this.replay.pulses = this.replayer.pulses;
    if (next !== this.hass || jump) {
      this.hass = next;
      this.opts.onChange();
    }
    this.notify();
  }

  setLive(hass: HomeAssistant): void {
    this.live = hass;
    setZone(zoneOf(hass));
    const now = Date.now();
    // live changes are noted for the live edge (a look at each replayed entity, nothing more)
    this.liveLog?.record(hass.states, now);
    // about once a minute they join the timeline anyway (also while paused: a live update is the trigger,
    // no timer), so they never pile up; a playhead standing at the present stays there
    const pb = this.playback;
    let moved = false;
    if (this.state === "ready" && pb && this.liveLog && ((this.liveLog.pending && now - this.flushedAt >= FLUSH_MS) || (this.derivePending && now - this.eventsAt > DERIVE_MS))) {
      const atEnd = !pb.playing && pb.t >= pb.end - 1000;
      this.edge(now);
      if (atEnd) pb.seek(pb.end);
      this.replay.t = pb.t;
      moved = true;
    }
    // the host is rendering already: the new replayed object is read there, no extra round (a live state
    // change keeps the replayed object; only a registry, config or language change makes a new one)
    if (this.replayer && pb) this.hass = this.replayer.hassAt(hass, pb.t);
    if (moved) this.notify();
  }

  /** The view's quality changed: the replay ticks as often as it allows from the next tick on. */
  setQuality(quality: "auto" | "low" | "high", low: boolean): void {
    const days = this.maxDays;
    this.quality = quality;
    this.low = low;
    // the tablet level holds fewer days: the week view shrinks to them (or grows again)
    const pb = this.playback;
    if (days === this.maxDays || !pb || !this.timeline) return;
    // the days beyond them are let go (the memory is what the tablet level is for)
    const keep = this.end - this.maxDays * DAY;
    const trim = this.timeline.start < keep - 60000;
    if (trim) {
      this.setTimeline(trimTimeline(this.timeline, keep));
      this.full = false;
      if (this.needFrom !== null && this.needFrom < keep) this.needFrom = null;
      if (this.wanted !== null && this.wanted < keep) this.wanted = null;
    } else if (this.range !== "7d") return;
    const t = pb.t;
    pb.setRange(Math.max(this.timeline.start, this.start), this.end);
    this.updateNights();
    // a trimmed timeline has a new replay: every state is handed over once
    if (trim || pb.t !== t) this.apply(true, pb.t !== t);
    else this.notify();
    void this.loadOlder();
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
    // live rows that came while playing: worked out now (no timer runs while paused)
    if (this.derivePending) this.derive(Date.now());
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
    this.wanted = null;
    this.playback.seek(t);
    this.last = performance.now();
    this.apply(true);
  }

  /** The previous or next event (pauses there). */
  step(dir: 1 | -1): void {
    const pb = this.playback;
    if (!pb) return;
    const e = eventNear(this.shownEvents(), pb.t, dir);
    this.seek(e ? e.t : dir > 0 ? pb.end : pb.start, true);
  }

  /** An event or a summary row: jump there (paused) and show where it happened. */
  goTo(e: { t: number; entity: string }): void {
    this.seek(e.t, true);
    this.focusOn(e.entity);
  }

  /** The 3D view shows the entity (its floor, flying there). */
  focusOn(entity: string): void {
    this.replay.focus = entity;
    this.replay.focusSeq++;
    this.notify();
  }

  /** The same moment a day earlier ("yesterday at this time"); the week is fetched when needed. */
  yesterday(): void {
    const pb = this.playback;
    if (!pb) return;
    const t = pb.t - DAY;
    if (t < pb.start && this.range === "24h") this.setRange("7d");
    this.seek(Math.max(t, pb.start), true);
    if (t < pb.start && this.olderRunning) this.wanted = t;
  }

  setFollow(on: boolean): void {
    this.follow = on;
    pref("follow", on ? "1" : "0");
    this.notify();
  }

  setStopImportant(on: boolean): void {
    this.stopImportant = on;
    pref("stop", on ? "1" : "0");
    this.notify();
  }

  nextSpeed(): void {
    this.playback?.nextSpeed();
    this.notify();
  }

  /** A quiet stretch (no motion in the house for two hours or more, mostly by day) worth offering as "while you were away". */
  awayOffer(): [number, number] | null {
    const timeline = this.timeline;
    return timeline ? awaySuggestion(quietStretches(timeline, this.motion(), timeline.start, this.end)) : null;
  }

  /** What happened between two moments (doors, windows, motion, lights left on …). */
  away(from: number, to: number): AwayRow[] {
    const timeline = this.timeline;
    if (!timeline) return [];
    return awaySummary({ timeline, roles: this.roles, events: this.allEvents, lights: [...timeline.tracks.keys()].filter((id) => id.startsWith("light.")), motion: this.motion(), from, to });
  }

  /**
   * The comparison needs the day that begins at `day`: fetched in the background when the range does not
   * reach it (as far as the days the view may hold allow). Asked once per day.
   */
  ensureLoaded(day: number): void {
    const timeline = this.timeline;
    if (!timeline || timeline.start <= day + 60000 || (this.needFrom !== null && this.needFrom <= day)) return;
    if (day < this.end - this.maxDays * DAY - DAY) return;
    this.needFrom = day;
    void this.loadOlder();
  }

  /** The summary of the local day that begins at `day` (kept until the timeline grows). */
  daySummary(day: number): DaySummary | null {
    const timeline = this.timeline;
    if (!timeline || day + DAY <= timeline.start || day > timeline.end) return null;
    const key = `${day}|${this.version}`;
    let s = this.daySummaries.get(key);
    if (!s) {
      // the next midnight (a day with a clock change is 23 or 25 hours long)
      const next = nextDay(day);
      const from = Math.max(day, timeline.start);
      const to = Math.min(next, timeline.end);
      const d = this.devices;
      const energy = this.energy && d ? dayEnergy((t) => energyAt(timeline, this.live.states, this.opts.building, d, this.energyIds, t), from, to) : null;
      s = daySummary(timeline, this.rooms, from, to, energy);
      this.daySummaries.set(key, s);
    }
    return s;
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
      const from = pb.t;
      // the live edge: near the end the live changes join the timeline and the end moves to now
      if (pb.end - pb.t <= EDGE_MS + dt * pb.speed) this.edge();
      if (pb.advance(dt)) {
        // a fast replay stops at a safety event instead of rushing past it
        const stop = this.stopImportant && pb.speed >= 900 ? crossedEvent(this.allEvents, from, pb.t, (e) => IMPORTANT.has(e.kind)) : null;
        if (stop) {
          pb.seek(stop.t);
          pb.pause();
          this.apply(true);
          this.focusOn(stop.entity);
          return;
        }
        this.apply(false);
        if (this.follow && now - this.followAt > 2500) {
          const e = crossedEvent(this.events, from, pb.t, () => true);
          if (e) {
            this.followAt = now;
            this.focusOn(e.entity);
          }
        }
      }
      if (pb.playing) this.schedule();
      else {
        // stopped at the end: the live rows of the last seconds are worked out too
        if (this.derivePending) this.derive(Date.now());
        this.notify();
      }
    }, tickMs(this.quality, this.low));
  }

  /** Adds the live changes since the time travel began and moves the end (and the shown range) to now. */
  private edge(now = Date.now()): void {
    const pb = this.playback;
    const timeline = this.timeline;
    if (!pb || !timeline || !this.liveLog) return;
    if (now - this.end < 1000 && !this.liveLog.pending && !this.derivePending) return;
    const { added, created } = this.liveLog.flush(timeline, now);
    this.flushedAt = now;
    this.end = now;
    // the start moves with the end: the playhead never stands left of the track
    pb.setRange(Math.max(timeline.start, this.start), now);
    if (created) this.replayer?.refresh();
    if (added || created) this.derivePending = true;
    // the markers, gaps and summaries of the new rows: not more often than every ten seconds while playing,
    // and once more after the last rows (a trailing round)
    if (this.derivePending && (!pb.playing || now - this.eventsAt > DERIVE_MS)) this.derive(now);
  }

  /** Events, gaps, nights and the summaries of the grown timeline. */
  private derive(now: number): void {
    const timeline = this.timeline;
    if (!timeline) return;
    this.derivePending = false;
    this.eventsAt = now;
    this.findEvents();
    // only the new stretch is searched for gaps (a gap running on at the seam is joined)
    const after = Math.max(timeline.start, this.gapsTo - 30 * 60000);
    const kept = this.gaps.filter(([a]) => a < after).map(([a, b]) => [a, Math.min(b, after)] as [number, number]);
    const fresh = findGaps(timeline, undefined, undefined, undefined, after);
    const seam = kept[kept.length - 1];
    if (seam && fresh.length && seam[1] >= after && fresh[0][0] <= after) seam[1] = fresh.shift()![1];
    this.gaps = [...kept, ...fresh];
    this.gapsTo = timeline.end;
    this.updateNights();
    this.version++;
    this.daySummaries.clear();
  }

  exit(): void {
    this.opts.onExit();
  }

  dispose(): void {
    if (!this.disposed && this.state === "ready") pref("closed", String(Date.now()));
    this.disposed = true;
    clearTimeout(this.timer);
    this.timer = undefined;
    this.listeners.clear();
    this.liveLog = null;
    document.removeEventListener("visibilitychange", this.onVisible);
  }
}

export function startTimeTravel(opts: StartOptions): TimeTravelSession {
  return new Session(opts);
}
