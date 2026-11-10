// Digital picture frames (pack "Digitale Bilderrahmen"): what a frame's face shows and how the calendar on it is
// laid out. The drawing itself (a canvas turned into a picture for the screen part) is in frame-canvas.ts; the
// pop-up a tap opens lives in view3d.

import type { Furniture } from "./model.ts";
import { packItem } from "./packs.ts";
import type { HomeAssistant } from "./types.ts";

export const FRAME_KINDS = ["calendar", "todo", "board", "persons", "camera", "media", "person", "photo", "weather"] as const;
export type FrameKind = (typeof FRAME_KINDS)[number];

const FRAMES_PACK = "pack:mastershort.frames:";
/** The deco pack's digital frame joins in once the frames pack is installed. */
const DECO_DIGITAL = "pack:mastershort.deco:photo_frame_digital";

/** A piece of furniture whose face can show living content. */
export function isFrame(type: string): boolean {
  return (type.startsWith(FRAMES_PACK) || type === DECO_DIGITAL) && !!packItem(type)?.parts.some((p) => p.screen);
}

/** The entity domain a kind of content comes from (a photo has none: a URL or a stored picture). */
export function frameDomain(kind: FrameKind): string | null {
  switch (kind) {
    case "calendar":
    case "board":
      return "calendar";
    case "todo":
      return "todo";
    case "persons":
      return "person";
    case "camera":
      return "camera";
    case "media":
      return "media_player";
    case "person":
      return "person";
    case "weather":
      return "weather";
    default:
      return null;
  }
}

/** The calendars of a frame (several separated by commas). */
export function frameCalendars(f: Pick<Furniture, "frame_kind" | "frame_source">): string[] {
  if ((f.frame_kind !== "calendar" && f.frame_kind !== "board") || !f.frame_source) return [];
  return [...new Set(f.frame_source.split(",").map((s) => s.trim()).filter((s) => s.startsWith("calendar.")))];
}

/** The calendars every frame of the house reads (each fetched once). */
export function allFrameCalendars(floors: readonly { furniture: readonly Furniture[] }[]): string[] {
  return [...new Set(floors.flatMap((fl) => fl.furniture.filter((f) => isFrame(f.type)).flatMap((f) => frameCalendars(f))))];
}

/** A calendar event as Home Assistant's REST API returns it (`GET /api/calendars/<id>?start&end`). */
export interface CalEvent {
  summary?: string;
  description?: string;
  location?: string;
  start?: { date?: string; dateTime?: string } | string;
  end?: { date?: string; dateTime?: string } | string;
}

export interface FrameEvent {
  /** The calendar it comes from (its colour follows the calendar's place in the frame's list). */
  calendar: string;
  summary: string;
  location: string;
  description: string;
  start: Date;
  end: Date | null;
  allDay: boolean;
}

function parseWhen(raw: CalEvent["start"]): { at: Date; allDay: boolean } | null {
  const s = typeof raw === "string" ? raw : (raw?.date ?? raw?.dateTime);
  if (!s) return null;
  // an all-day event's "2026-10-16" is a local day, not UTC midnight
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(s);
  const at = m ? new Date(Number(m[1]), Number(m[2]) - 1, Number(m[3])) : new Date(s);
  return Number.isNaN(at.getTime()) ? null : { at, allDay: !!m };
}

/** The events of several calendars as one list, sorted by start; all-day events first within a day. */
export function frameEvents(byCalendar: ReadonlyMap<string, readonly CalEvent[]>, calendars: readonly string[]): FrameEvent[] {
  const out: FrameEvent[] = [];
  for (const id of calendars) {
    for (const e of byCalendar.get(id) ?? []) {
      const start = parseWhen(e.start);
      if (!start) continue;
      const end = parseWhen(e.end);
      out.push({ calendar: id, summary: String(e.summary ?? "").trim() || "…", location: String(e.location ?? "").trim(), description: String(e.description ?? "").trim(), start: start.at, end: end?.at ?? null, allDay: start.allDay });
    }
  }
  return out.sort((a, b) => a.start.getTime() - b.start.getTime() || Number(b.allDay) - Number(a.allDay));
}

export interface FrameDay {
  day: Date;
  /** 0 = today, 1 = tomorrow … */
  offset: number;
  events: FrameEvent[];
}

const DAY_MS = 86_400_000;

function midnight(d: Date): Date {
  return new Date(d.getFullYear(), d.getMonth(), d.getDate());
}

/**
 * The next `days` days with their events (an all-day event spanning several days shows on each of them; a timed
 * event that ended more than an hour ago is left out of today). Days without events are kept so the frame can show
 * "nothing" – the pop-up leaves them out.
 */
export function frameDays(events: readonly FrameEvent[], now: Date, days = 7): FrameDay[] {
  const today = midnight(now);
  const out: FrameDay[] = [];
  for (let i = 0; i < days; i++) {
    const day = new Date(today.getTime() + i * DAY_MS);
    // (a local day may be 23 or 25 hours long around the clock change: compare by date parts)
    const next = new Date(day.getFullYear(), day.getMonth(), day.getDate() + 1);
    const list = events.filter((e) => {
      if (e.allDay) {
        const end = e.end ?? new Date(e.start.getTime() + DAY_MS);
        return e.start < next && end > day;
      }
      if (e.start < day || e.start >= next) return false;
      const over = e.end ?? new Date(e.start.getTime() + 3_600_000);
      return i > 0 || over.getTime() > now.getTime() - 3_600_000;
    });
    out.push({ day, offset: i, events: list });
  }
  return out;
}

/** Colour of a calendar in a frame: by its place in the frame's list, stable per frame. */
export const CALENDAR_COLORS = ["#37e0ff", "#ff5fd2", "#ffb84d", "#7dff8a", "#b18cff", "#ff7a6b"];

export function calendarColor(calendars: readonly string[], id: string): string {
  const i = Math.max(0, calendars.indexOf(id));
  return CALENDAR_COLORS[i % CALENDAR_COLORS.length];
}

/** How a frame's day is headed: today, tomorrow, else the weekday and date in the user's language. */
export function dayLabel(day: FrameDay, lang: string, words: { today: string; tomorrow: string }): string {
  if (day.offset === 0) return words.today;
  if (day.offset === 1) return words.tomorrow;
  return day.day.toLocaleDateString(lang, { weekday: "short", day: "numeric", month: "numeric" });
}

/** An event's time as the frame shows it ("14:30", "14:30–16:00", or the all-day word). */
export function timeLabel(e: FrameEvent, lang: string, allDayWord: string): string {
  if (e.allDay) return allDayWord;
  const fmt = (d: Date) => d.toLocaleTimeString(lang, { hour: "2-digit", minute: "2-digit" });
  return e.end && e.end.getTime() !== e.start.getTime() ? `${fmt(e.start)}–${fmt(e.end)}` : fmt(e.start);
}

/** How often the content of a kind is refreshed on the face (ms); the tablet level takes it slower. */
export function frameRefreshMs(kind: FrameKind, low: boolean): number {
  switch (kind) {
    case "camera":
      return low ? 10_000 : 5_000;
    case "calendar":
      return 15 * 60_000;
    case "weather":
      return 10 * 60_000;
    default:
      return 60_000;
  }
}

/** The events of the next `days` days of the given calendars, by calendar; a calendar that fails is left out. */
export async function fetchFrameEvents(hass: HomeAssistant, calendars: readonly string[], now = new Date(), days = 8): Promise<Map<string, CalEvent[]>> {
  const out = new Map<string, CalEvent[]>();
  const api = (hass as unknown as { callApi?: <T>(method: string, path: string) => Promise<T> }).callApi;
  if (!api) return out;
  const start = midnight(now);
  const end = new Date(start.getFullYear(), start.getMonth(), start.getDate() + days);
  await Promise.all(
    calendars.map(async (id) => {
      try {
        const events = await api.call(hass, "GET", `calendars/${id}?start=${encodeURIComponent(start.toISOString())}&end=${encodeURIComponent(end.toISOString())}`);
        out.set(id, Array.isArray(events) ? (events as CalEvent[]) : []);
      } catch {
        /* a calendar that cannot be read shows nothing */
      }
    }),
  );
  return out;
}

/** The weather's symbol for a frame's face (Home Assistant's condition names). */
export function weatherSymbol(condition: string): string {
  const table: Record<string, string> = {
    "clear-night": "🌙",
    cloudy: "☁️",
    exceptional: "⚠️",
    fog: "🌫️",
    hail: "🌨️",
    lightning: "⛈️",
    "lightning-rainy": "⛈️",
    partlycloudy: "⛅",
    pouring: "🌧️",
    rainy: "🌧️",
    snowy: "❄️",
    "snowy-rainy": "🌨️",
    sunny: "☀️",
    windy: "💨",
    "windy-variant": "💨",
  };
  return table[condition] ?? "🌡️";
}

// ------------------------------------------------------------------ what happens now, birthdays

/** Where an event stands right now: running, starting within half an hour, or neither. */
export function eventPhase(e: FrameEvent, now: Date): "now" | "soon" | null {
  if (e.allDay) return null;
  const end = e.end ?? new Date(e.start.getTime() + 3_600_000);
  if (e.start <= now && end > now) return "now";
  const inMin = (e.start.getTime() - now.getTime()) / 60_000;
  return inMin > 0 && inMin <= 30 ? "soon" : null;
}

/** Minutes until an event starts (rounded), for "in 20 min". */
export function minutesUntil(e: FrameEvent, now: Date): number {
  return Math.max(0, Math.round((e.start.getTime() - now.getTime()) / 60_000));
}

/** A birthday: a calendar or an event that says so in a few languages. */
export function isBirthday(e: FrameEvent): boolean {
  return /geburtstag|birthday|cumplea|anniversaire|compleanno|verjaardag|urodzin|narozenin|födelsedag|bursdag|fødselsdag|szület/i.test(`${e.calendar} ${e.summary}`);
}

/** The sources of a frame as a list (comma separated: calendars, persons, photos). */
export function frameSources(f: Pick<Furniture, "frame_source">): string[] {
  return [...new Set((f.frame_source ?? "").split(",").map((s) => s.trim()).filter(Boolean))];
}

// ------------------------------------------------------------------ to-do lists

/** An item of a Home Assistant to-do list (`todo/item/list`). */
export interface TodoItem {
  uid: string;
  summary: string;
  status: "needs_action" | "completed";
  due?: string | null;
}

/** The open items first (in the list's order), then the done ones; at most `max`. */
export function todoOrder(items: readonly TodoItem[], max = 50): TodoItem[] {
  const open = items.filter((i) => i.status !== "completed");
  const done = items.filter((i) => i.status === "completed");
  return [...open, ...done].slice(0, max);
}

export function openTodos(items: readonly TodoItem[]): TodoItem[] {
  return items.filter((i) => i.status !== "completed");
}

/** The to-do lists every frame of the house shows (each fetched once). */
export function allFrameTodos(floors: readonly { furniture: readonly Furniture[] }[]): string[] {
  return [...new Set(floors.flatMap((fl) => fl.furniture.filter((f) => isFrame(f.type) && f.frame_kind === "todo").flatMap((f) => frameSources(f).filter((s) => s.startsWith("todo.")))))];
}

// ------------------------------------------------------------------ weather forecast

/** One day (or hour) of a weather entity's forecast (`weather/subscribe_forecast`). */
export interface ForecastEntry {
  datetime: string;
  condition?: string;
  temperature?: number;
  templow?: number;
  precipitation_probability?: number;
  precipitation?: number;
}

/** The weather entities every frame of the house shows (weather and board frames). */
export function allFrameWeather(floors: readonly { furniture: readonly Furniture[] }[], houseWeather: string | null | undefined): string[] {
  const out = new Set<string>();
  for (const f of floors.flatMap((fl) => fl.furniture)) {
    if (!isFrame(f.type)) continue;
    if (f.frame_kind === "weather" && f.frame_source?.startsWith("weather.")) out.add(f.frame_source);
    if (f.frame_kind === "board" && houseWeather) out.add(houseWeather);
  }
  return [...out];
}

/** The next days of a daily forecast from today on (at most `days`), each with its symbol and high/low. */
export function forecastDays(list: readonly ForecastEntry[] | undefined, now: Date, days = 3): { day: Date; offset: number; condition: string; hi: number | null; lo: number | null; rain: number | null }[] {
  if (!list?.length) return [];
  const today = midnight(now).getTime();
  return list
    .map((e) => {
      const d = new Date(e.datetime);
      return { e, day: midnight(d), offset: Math.round((midnight(d).getTime() - today) / DAY_MS) };
    })
    .filter((x) => !Number.isNaN(x.day.getTime()) && x.offset >= 0)
    .slice(0, days)
    .map(({ e, day, offset }) => ({ day, offset, condition: e.condition ?? "", hi: typeof e.temperature === "number" ? e.temperature : null, lo: typeof e.templow === "number" ? e.templow : null, rain: typeof e.precipitation_probability === "number" ? e.precipitation_probability : null }));
}

/** A rain warning for the next hours: the first hour with a high chance of rain, as an offset in hours (null = none). */
export function rainSoon(hourly: readonly ForecastEntry[] | undefined, now: Date, hours = 6, minProbability = 60): { inHours: number; probability: number } | null {
  if (!hourly?.length) return null;
  for (const e of hourly) {
    const t = new Date(e.datetime).getTime();
    if (Number.isNaN(t) || t < now.getTime() - 3_600_000) continue;
    const inHours = Math.max(0, Math.round((t - now.getTime()) / 3_600_000));
    if (inHours > hours) break;
    const p = e.precipitation_probability ?? ((e.precipitation ?? 0) > 0.2 ? 100 : 0);
    if (p >= minProbability) return { inHours, probability: p };
  }
  return null;
}

// ------------------------------------------------------------------ people

export interface PersonStatus {
  id: string;
  name: string;
  picture: string | null;
  home: boolean;
  /** The zone or "not_home" when away; null at home. */
  state: string;
  /** The room they stand in (Live Presence), when known. */
  room: string | null;
  /** Since when they are home or away (ms), when known. */
  since: number | null;
}

/** The people a frame shows: the chosen persons, or every person entity when none is chosen. */
export function personStatuses(states: Record<string, { entity_id: string; state: string; attributes: Record<string, unknown>; last_changed?: string }>, ids: readonly string[], rooms: ReadonlyMap<string, string>): PersonStatus[] {
  const list = ids.length ? ids : Object.keys(states).filter((id) => id.startsWith("person.")).sort();
  const out: PersonStatus[] = [];
  for (const id of list) {
    const st = states[id];
    if (!st) continue;
    const a = st.attributes;
    const since = st.last_changed ? Date.parse(st.last_changed) : NaN;
    out.push({
      id,
      name: typeof a.friendly_name === "string" ? a.friendly_name : id.split(".")[1],
      picture: typeof a.entity_picture === "string" ? a.entity_picture : null,
      home: st.state === "home",
      state: st.state,
      room: rooms.get(id) ?? null,
      since: Number.isFinite(since) ? since : null,
    });
  }
  // at home first
  return out.sort((p, q) => Number(q.home) - Number(p.home));
}

/** "seit 2 h", "seit 35 min" – how long someone has been where they are. */
export function sinceLabel(since: number | null, now: number, words: { since: string; min: string; h: string }): string {
  if (since === null) return "";
  const min = Math.max(0, Math.round((now - since) / 60_000));
  if (min < 1) return "";
  if (min < 60) return `${words.since} ${min} ${words.min}`;
  if (min < 24 * 60) return `${words.since} ${Math.round(min / 60)} ${words.h}`;
  return "";
}

// ------------------------------------------------------------------ slideshow

/** Which of a frame's photos shows now: they take turns every `interval` seconds, in step across frames. */
export function slideIndex(count: number, interval: number, now: number): number {
  if (count <= 1) return 0;
  return Math.floor(now / (Math.max(3, interval) * 1000)) % count;
}

// ------------------------------------------------------------------ reminders

/** The key of an event for "already reminded": calendar, start and summary. */
export function reminderKey(e: FrameEvent): string {
  return `${e.calendar}|${e.start.getTime()}|${e.summary}`;
}

/**
 * The events a frame should remind of now: timed events starting in `minutes` minutes or less (and not more than a
 * minute past that mark – a sync comes every few seconds), not reminded of yet.
 */
export function dueReminders(events: readonly FrameEvent[], minutes: number, now: Date, done: ReadonlySet<string>): FrameEvent[] {
  const out: FrameEvent[] = [];
  for (const e of events) {
    if (e.allDay) continue;
    const inMin = (e.start.getTime() - now.getTime()) / 60_000;
    if (inMin > minutes || inMin < minutes - 1.5) continue;
    if (done.has(reminderKey(e))) continue;
    out.push(e);
  }
  return out;
}
