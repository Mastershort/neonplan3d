// Time travel: the replayed moment and how it moves – play, pause, jump, faster or slower. Pure: the
// session drives it with the real time that passed.

import type { TTEvent } from "./events.ts";
import type { Speed } from "./types.ts";

/** Replay speeds: one hour takes a minute, 10 seconds (the default), 4 seconds or one second. */
export const SPEEDS: readonly Speed[] = [60, 360, 900, 3600];
/** Over a week also a day in six seconds. */
export const WEEK_SPEEDS: readonly Speed[] = [60, 360, 900, 3600, 14400];
export const DEFAULT_SPEED: Speed = 360;

/** Updates per second while playing: few on a wall tablet, more on a strong device. */
export function tickMs(quality: "auto" | "low" | "high", low: boolean): number {
  if (quality === "low" || low) return 500;
  return quality === "high" ? 167 : 250;
}

export class Playback {
  /** The range it plays in (an older day loaded later moves the start, the live edge the end). */
  start: number;
  end: number;
  t: number;
  playing = false;
  speed: Speed;
  speeds: readonly Speed[];

  constructor(start: number, end: number, t: number, speed: number = DEFAULT_SPEED, speeds: readonly Speed[] = SPEEDS) {
    this.start = start;
    this.end = end;
    this.speeds = speeds;
    this.t = Math.min(end, Math.max(start, t));
    this.speed = (speeds as readonly number[]).includes(speed) ? (speed as Speed) : DEFAULT_SPEED;
  }

  /** A new range (and the speeds offered in it); the moment stays within it. */
  setRange(start: number, end: number, speeds: readonly Speed[] = this.speeds): void {
    this.start = start;
    this.end = end;
    this.speeds = speeds;
    if (!speeds.includes(this.speed)) this.speed = speeds.includes(3600) ? 3600 : speeds[speeds.length - 1];
    this.t = Math.min(end, Math.max(start, this.t));
  }

  /** Play from where it stands; at the end it starts over. */
  play(): void {
    if (this.t >= this.end) this.t = this.start;
    this.playing = true;
  }

  pause(): void {
    this.playing = false;
  }

  toggle(): void {
    if (this.playing) this.pause();
    else this.play();
  }

  /** Jump to t (kept within the range). */
  seek(t: number): void {
    this.t = Math.min(this.end, Math.max(this.start, t));
  }

  /** Real time passed (ms): the replayed moment moves on by speed × that; at the end it stops. */
  advance(realMs: number): boolean {
    if (!this.playing || !(realMs > 0)) return false;
    const next = Math.min(this.end, this.t + realMs * this.speed);
    const moved = next !== this.t;
    this.t = next;
    if (this.t >= this.end) this.playing = false;
    return moved;
  }

  /** The next speed (after the fastest the slowest again). */
  nextSpeed(): Speed {
    const i = this.speeds.indexOf(this.speed);
    this.speed = this.speeds[(i + 1) % this.speeds.length];
    return this.speed;
  }
}

/** The event before or after t (a little margin, so pressing again moves on). */
export function eventNear(events: readonly TTEvent[], t: number, dir: 1 | -1, marginMs = 30000): TTEvent | null {
  if (dir > 0) return events.find((e) => e.t > t + marginMs) ?? null;
  for (let i = events.length - 1; i >= 0; i--) if (events[i].t < t - marginMs) return events[i];
  return null;
}

/** The first event between two moments (after `from`, up to `to`) that `pick` wants. */
export function crossedEvent(events: readonly TTEvent[], from: number, to: number, pick: (e: TTEvent) => boolean): TTEvent | null {
  if (!(to > from)) return null;
  // the events are in time order: search the first one after `from`
  let lo = 0;
  let hi = events.length;
  while (lo < hi) {
    const mid = (lo + hi) >> 1;
    if (events[mid].t <= from) lo = mid + 1;
    else hi = mid;
  }
  for (let i = lo; i < events.length && events[i].t <= to; i++) if (pick(events[i])) return events[i];
  return null;
}

/**
 * A start moment from a link: "07:42" (today, or yesterday when that is still to come) or "-3h" / "-90m"
 * (that long ago); null when it does not read as one.
 */
export function parseMoment(text: string | null | undefined, now: number): number | null {
  const s = (text ?? "").trim();
  const rel = /^-(\d+(?:[.,]\d+)?)\s*(h|m|min)$/i.exec(s);
  if (rel) return now - Number(rel[1].replace(",", ".")) * (rel[2].toLowerCase() === "h" ? 3600000 : 60000);
  const clock = /^(\d{1,2}):(\d{2})$/.exec(s);
  if (!clock || Number(clock[1]) > 23 || Number(clock[2]) > 59) return null;
  const d = new Date(now);
  d.setHours(Number(clock[1]), Number(clock[2]), 0, 0);
  return d.getTime() > now ? d.getTime() - 86400000 : d.getTime();
}
