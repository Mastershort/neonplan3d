// Time travel: the clock the replay is told in. Like Home Assistant's own frontend, the user's profile decides:
// "server" uses Home Assistant's time zone, anything else the browser's. Day boundaries, night hours, hour
// groups and the clock on the bar all follow it.

import type { HomeAssistant } from "../types.ts";

const HOUR = 3600000;

/** The zone in use: an IANA name, or null for the browser's own. */
let current: string | null = null;

/** The time zone the user's profile asks for (null: the browser's). */
export function zoneOf(hass: HomeAssistant | null | undefined): string | null {
  const profile = (hass as { locale?: { time_zone?: string } } | null | undefined)?.locale?.time_zone;
  const server = hass?.config?.time_zone;
  if (profile !== "server" || !server) return null;
  try {
    new Intl.DateTimeFormat("en-US", { timeZone: server });
    return server;
  } catch {
    return null;
  }
}

export function setZone(zone: string | null): void {
  current = zone;
}

export function getZone(): string | null {
  return current;
}

const formats = new Map<string, Intl.DateTimeFormat>();

function partsFormat(zone: string): Intl.DateTimeFormat {
  let f = formats.get(zone);
  if (!f) {
    f = new Intl.DateTimeFormat("en-US", { timeZone: zone, hourCycle: "h23", year: "numeric", month: "numeric", day: "numeric", hour: "numeric", minute: "numeric", second: "numeric" });
    formats.set(zone, f);
  }
  return f;
}

/** The wall clock of t in a zone: year, month (0–11), day, hour, minute, second. */
function wall(t: number, zone: string): [number, number, number, number, number, number] {
  const out = [0, 0, 0, 0, 0, 0] as [number, number, number, number, number, number];
  for (const p of partsFormat(zone).formatToParts(t)) {
    const v = Number(p.value);
    if (p.type === "year") out[0] = v;
    else if (p.type === "month") out[1] = v - 1;
    else if (p.type === "day") out[2] = v;
    else if (p.type === "hour") out[3] = v % 24;
    else if (p.type === "minute") out[4] = v;
    else if (p.type === "second") out[5] = v;
  }
  return out;
}

/** How far the zone's clock is ahead of UTC at t (ms). */
function offset(t: number, zone: string): number {
  const [y, mo, d, h, mi, s] = wall(t, zone);
  const whole = t - (((t % 1000) + 1000) % 1000);
  return Date.UTC(y, mo, d, h, mi, s) - whole;
}

/** The hour of the day (0–23) at t. */
export function hourOf(t: number, zone: string | null = current): number {
  return zone ? wall(t, zone)[3] : new Date(t).getHours();
}

/** The local midnight that begins the day of t. */
export function dayStart(t: number, zone: string | null = current): number {
  if (!zone) return new Date(t).setHours(0, 0, 0, 0);
  const [y, mo, d] = wall(t, zone);
  // midnight's own offset (a clock change during the day must not move it)
  let m = Date.UTC(y, mo, d) - offset(t, zone);
  m = Date.UTC(y, mo, d) - offset(m, zone);
  return m;
}

/** The midnight after the day of t (a day with a clock change is 23 or 25 hours long). */
export function nextDay(t: number, zone: string | null = current): number {
  return dayStart(dayStart(t, zone) + 27 * HOUR, zone);
}

/** The start of the hour of t (in a zone half an hour off UTC, too). */
export function hourStart(t: number, zone: string | null = current): number {
  if (!zone) return new Date(t).setMinutes(0, 0, 0);
  const [, , , , mi, s] = wall(t, zone);
  return t - (((t % 1000) + 1000) % 1000) - (mi * 60 + s) * 1000;
}

/** A clock time ("07:42") today: hours and minutes put on the day of t. */
export function atClock(t: number, hours: number, minutes: number, zone: string | null = current): number {
  if (!zone) {
    const d = new Date(t);
    d.setHours(hours, minutes, 0, 0);
    return d.getTime();
  }
  const base = dayStart(t, zone);
  const guess = base + (hours * 60 + minutes) * 60000;
  // the clock may have changed since midnight
  return guess - (offset(guess, zone) - offset(base, zone));
}

/** The options for toLocale…String: the zone in use (none: the browser's). */
export function zoneOption(zone: string | null = current): { timeZone?: string } {
  return zone ? { timeZone: zone } : {};
}
