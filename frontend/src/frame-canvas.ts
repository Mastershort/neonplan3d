// The face of a digital picture frame as a picture: calendar, to-do list, people, the family board and the weather
// are drawn on a canvas and handed to the viewer as a data URL, like a cover picture on a TV screen. Drawn only when
// the content changed.

import { calendarColor, dayLabel, eventPhase, isBirthday, minutesUntil, timeLabel, weatherSymbol, type FrameDay, type PersonStatus, type TodoItem } from "./frames.ts";

export interface FaceWords {
  today: string;
  tomorrow: string;
  allDay: string;
  nothing: string;
  now: string;
  /** "in {n} min" */
  inMin: string;
  done: string;
  home: string;
  away: string;
  /** Board heads. */
  whoHome: string;
  waste: string;
  rainSoon: string;
}

/** Width of the drawn face in pixels; the height follows the frame's own proportions. */
const FACE_W = 512;

interface Sheet {
  c: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  W: number;
  H: number;
  pad: number;
  base: number;
  line: number;
  fg: string;
  dim: string;
  accent: string;
  light: boolean;
}

function sheet(aspect: number, light: boolean, tint: "night" | "sky" = "night"): Sheet | null {
  if (typeof document === "undefined") return null;
  const W = FACE_W;
  const H = Math.round(W / Math.max(0.4, Math.min(3, aspect)));
  const c = document.createElement("canvas");
  c.width = W;
  c.height = H;
  const ctx = c.getContext("2d");
  if (!ctx) return null;
  const g = ctx.createLinearGradient(0, 0, tint === "sky" ? W : 0, H);
  if (light) {
    g.addColorStop(0, tint === "sky" ? "#eaf3ff" : "#fbfaf6");
    g.addColorStop(1, tint === "sky" ? "#fbfaf6" : "#ece9e0");
  } else {
    g.addColorStop(0, tint === "sky" ? "#0d1a3a" : "#111a30");
    g.addColorStop(1, "#0a1020");
  }
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, W, H);
  ctx.textBaseline = "top";
  const pad = Math.round(W * 0.06);
  // type sizes scale with the face: a small frame reads with fewer, larger lines
  const base = Math.max(18, Math.round(Math.min(W, H) * 0.075));
  return { c, ctx, W, H, pad, base, line: Math.round(base * 1.45), fg: light ? "#1c2333" : "#eef3ff", dim: light ? "#5a6478" : "#8fa0c0", accent: light ? "#0a84c8" : "#37e0ff", light };
}

function ellipsis(ctx: CanvasRenderingContext2D, text: string, max: number): string {
  if (ctx.measureText(text).width <= max) return text;
  let t = text;
  while (t.length > 1 && ctx.measureText(`${t}…`).width > max) t = t.slice(0, -1);
  return `${t}…`;
}

function font(ctx: CanvasRenderingContext2D, px: number, weight = 500): void {
  ctx.font = `${weight} ${Math.round(px)}px system-ui, sans-serif`;
}

/** A small head line ("FAMILIE", "HEUTE"): returns the next y. */
function head(s: Sheet, text: string, y: number, color = s.dim): number {
  s.ctx.fillStyle = color;
  font(s.ctx, s.base * 0.8, 700);
  s.ctx.fillText(ellipsis(s.ctx, text.toUpperCase(), s.W - 2 * s.pad), s.pad, y);
  return y + Math.round(s.base * 1.2);
}

/** An empty-state line in the dim colour. */
function nothing(s: Sheet, text: string, y: number): void {
  s.ctx.fillStyle = s.dim;
  font(s.ctx, s.base);
  s.ctx.fillText(ellipsis(s.ctx, text, s.W - 2 * s.pad), s.pad, y);
}

/** The lines of a day's events; returns the next y, or -1 when the sheet is full. */
function eventLines(s: Sheet, day: FrameDay, calendars: readonly string[], lang: string, words: FaceWords, now: Date, y: number, bottom: number): number {
  const { ctx, pad, base, line } = s;
  for (const e of day.events) {
    if (y + line > bottom) {
      ctx.fillStyle = s.dim;
      font(ctx, base * 0.75);
      ctx.fillText("…", pad, y);
      return -1;
    }
    const phase = day.offset === 0 ? eventPhase(e, now) : null;
    // the calendar's colour bar, the time (or "now" / "in 20 min"), the summary
    ctx.fillStyle = calendarColor(calendars, e.calendar);
    ctx.fillRect(pad, y + Math.round(base * 0.15), Math.round(base * 0.22), Math.round(base * 1.05));
    const x0 = pad + Math.round(base * 0.6);
    const strong = day.offset === 0;
    ctx.fillStyle = phase ? s.accent : strong ? s.fg : s.dim;
    font(ctx, base * 0.78, phase ? 700 : strong ? 600 : 500);
    const time = phase === "now" ? words.now : phase === "soon" ? words.inMin.replace("{n}", String(minutesUntil(e, now))) : timeLabel(e, lang, words.allDay);
    const tw = ctx.measureText(time).width;
    ctx.fillText(time, x0, y + Math.round(base * 0.22));
    ctx.fillStyle = strong ? s.fg : s.dim;
    font(ctx, base, strong ? 600 : 500);
    const sx = x0 + tw + Math.round(base * 0.5);
    ctx.fillText(ellipsis(ctx, (isBirthday(e) ? "🎂 " : "") + e.summary, s.W - pad - sx), sx, y + Math.round(base * 0.12));
    y += line;
  }
  return y;
}

/**
 * The calendar face: the next days with their events, today first and bright, a coloured bar per calendar, what runs
 * now or starts soon in the accent colour. `aspect` is the face's width / height; `light` draws dark text on a pale
 * sheet (the Day look), else bright text on night blue.
 */
export function drawCalendarFace(days: readonly FrameDay[], calendars: readonly string[], lang: string, words: FaceWords, aspect: number, light: boolean, title = "", now = new Date()): string | null {
  const s = sheet(aspect, light);
  if (!s) return null;
  let y = s.pad;
  if (title) y = head(s, title, y);
  const bottom = s.H - s.pad;
  const total = days.reduce((n, d) => n + d.events.length, 0);
  if (!total) {
    nothing(s, words.nothing, y);
    return s.c.toDataURL("image/png");
  }
  for (const day of days) {
    if (!day.events.length) continue;
    if (y + s.line > bottom) break;
    y = head(s, dayLabel(day, lang, words), y + Math.round(s.base * 0.2), day.offset === 0 ? s.fg : s.dim) - Math.round(s.base * 0.3);
    y = eventLines(s, day, calendars, lang, words, now, y, bottom);
    if (y < 0) break;
    y += Math.round(s.line * 0.3);
  }
  return s.c.toDataURL("image/png");
}

/** The to-do face: open items with an empty box, done ones struck through at the end. */
export function drawTodoFace(items: readonly TodoItem[], words: FaceWords, aspect: number, light: boolean, title = ""): string | null {
  const s = sheet(aspect, light);
  if (!s) return null;
  const { ctx, pad, base, line } = s;
  let y = pad;
  if (title) y = head(s, title, y);
  const bottom = s.H - pad;
  const open = items.filter((i) => i.status !== "completed");
  if (!open.length) {
    nothing(s, items.length ? words.done : words.nothing, y);
    return s.c.toDataURL("image/png");
  }
  const box = Math.round(base * 0.9);
  for (const it of items) {
    if (y + line > bottom) {
      ctx.fillStyle = s.dim;
      font(ctx, base * 0.75);
      ctx.fillText(`+${items.length - items.indexOf(it)}`, pad, y);
      break;
    }
    const done = it.status === "completed";
    ctx.strokeStyle = done ? s.dim : s.accent;
    ctx.lineWidth = Math.max(2, base * 0.1);
    ctx.strokeRect(pad + 1, y + Math.round(base * 0.25), box, box);
    if (done) {
      ctx.beginPath();
      ctx.moveTo(pad + box * 0.25, y + base * 0.25 + box * 0.5);
      ctx.lineTo(pad + box * 0.45, y + base * 0.25 + box * 0.75);
      ctx.lineTo(pad + box * 0.8, y + base * 0.25 + box * 0.25);
      ctx.stroke();
    }
    ctx.fillStyle = done ? s.dim : s.fg;
    font(ctx, base, done ? 500 : 600);
    const x0 = pad + box + Math.round(base * 0.6);
    const text = ellipsis(ctx, it.summary, s.W - pad - x0);
    ctx.fillText(text, x0, y + Math.round(base * 0.12));
    if (done) {
      const w = ctx.measureText(text).width;
      ctx.fillRect(x0, y + Math.round(base * 0.65), w, Math.max(1, base * 0.06));
    }
    y += line;
  }
  return s.c.toDataURL("image/png");
}

/** The people face: a dot per person (bright at home), the name, where they are and since when. */
export function drawPersonsFace(people: readonly PersonStatus[], words: FaceWords, sinceOf: (p: PersonStatus) => string, aspect: number, light: boolean, title = ""): string | null {
  const s = sheet(aspect, light);
  if (!s) return null;
  const { ctx, pad, base } = s;
  const line = Math.round(base * 1.7);
  let y = pad;
  if (title) y = head(s, title, y);
  const bottom = s.H - pad;
  if (!people.length) {
    nothing(s, words.nothing, y);
    return s.c.toDataURL("image/png");
  }
  for (const p of people) {
    if (y + line > bottom) break;
    const r = Math.round(base * 0.42);
    ctx.beginPath();
    ctx.arc(pad + r, y + r + Math.round(base * 0.3), r, 0, Math.PI * 2);
    ctx.fillStyle = p.home ? (light ? "#1ca36a" : "#4dffc0") : light ? "#b8bfcc" : "#3a4660";
    ctx.fill();
    ctx.fillStyle = p.home ? s.fg : s.dim;
    font(ctx, base, 600);
    const x0 = pad + 2 * r + Math.round(base * 0.5);
    ctx.fillText(ellipsis(ctx, p.name, s.W - pad - x0), x0, y);
    ctx.fillStyle = s.dim;
    font(ctx, base * 0.75);
    const where = p.home ? [words.home, p.room].filter(Boolean).join(" · ") : p.state === "not_home" ? words.away : p.state;
    ctx.fillText(ellipsis(ctx, [where, sinceOf(p)].filter(Boolean).join(" · "), s.W - pad - x0), x0, y + Math.round(base * 1.05));
    y += line;
  }
  return s.c.toDataURL("image/png");
}

export interface WeatherFace {
  /** The condition's symbol (an emoji) and its name. */
  symbol: string;
  condition: string;
  temperature: string;
  /** Lines below: humidity, wind, a rain warning … */
  lines: string[];
  /** The next days: label, symbol, high / low. */
  days: { label: string; symbol: string; hi: string; lo: string }[];
  /** A rain warning (shown in the accent colour). */
  warning?: string | null;
}

/** The weather face: a big temperature with the condition, the next days as columns, a rain warning. */
export function drawWeatherFace(w: WeatherFace, aspect: number, light: boolean): string | null {
  const s = sheet(aspect, light, "sky");
  if (!s) return null;
  const { ctx, W, H, pad } = s;
  const big = Math.round(Math.min(W, H) * 0.28);
  font(ctx, big * 1.1);
  ctx.fillStyle = s.fg;
  ctx.fillText(w.symbol, pad, pad);
  font(ctx, big, 700);
  const tx = pad + Math.round(big * 1.4);
  ctx.fillText(w.temperature, tx, pad + Math.round(big * 0.1));
  ctx.fillStyle = s.dim;
  font(ctx, big * 0.38);
  ctx.fillText(ellipsis(ctx, [w.condition, ...w.lines].join(" · "), W - tx - pad), tx, pad + Math.round(big * 1.12));
  let y = pad + Math.round(big * 1.75);
  if (w.warning) {
    ctx.fillStyle = s.accent;
    font(ctx, big * 0.4, 700);
    ctx.fillText(ellipsis(ctx, `☔ ${w.warning}`, W - 2 * pad), pad, y);
    y += Math.round(big * 0.6);
  }
  if (w.days.length && y + big * 1.5 < H - pad * 0.5) {
    const colW = (W - 2 * pad) / w.days.length;
    w.days.forEach((d, i) => {
      const x = pad + colW * i;
      ctx.fillStyle = s.dim;
      font(ctx, big * 0.34, 700);
      ctx.fillText(ellipsis(ctx, d.label.toUpperCase(), colW - 6), x, y);
      font(ctx, big * 0.62);
      ctx.fillStyle = s.fg;
      ctx.fillText(d.symbol, x, y + Math.round(big * 0.42));
      font(ctx, big * 0.38, 600);
      ctx.fillText(ellipsis(ctx, `${d.hi}  ${d.lo}`, colW - 6), x, y + Math.round(big * 1.1));
    });
  }
  return s.c.toDataURL("image/png");
}

export interface BoardFace {
  today: FrameDay | null;
  tomorrow: FrameDay | null;
  calendars: string[];
  people: PersonStatus[];
  /** What goes out (Haushalt Pro): "Papiertonne morgen". */
  waste: string[];
  weather: { symbol: string; temperature: string; condition: string } | null;
}

/** The family board: today's events, tomorrow's, who is home, the bins, the weather – one glance in the kitchen. */
export function drawBoardFace(b: BoardFace, lang: string, words: FaceWords, aspect: number, light: boolean, title = "", now = new Date()): string | null {
  const s = sheet(aspect, light);
  if (!s) return null;
  const { ctx, W, pad, base, line } = s;
  const bottom = s.H - pad;
  let y = pad;
  // the head: the title on the left, the weather on the right
  if (b.weather) {
    ctx.fillStyle = s.fg;
    font(ctx, base * 1.1, 700);
    const text = `${b.weather.symbol} ${b.weather.temperature}`;
    ctx.fillText(text, W - pad - ctx.measureText(text).width, y);
  }
  y = head(s, title || dayLabel({ day: now, offset: 2, events: [] }, lang, words), y);
  // the people: dots with first names in one line
  if (b.people.length) {
    const r = Math.round(base * 0.3);
    let x = pad;
    font(ctx, base * 0.8, 600);
    for (const p of b.people) {
      const name = p.name.split(/\s+/)[0];
      const w = ctx.measureText(name).width;
      if (x + 2 * r + w + base > W - pad) break;
      ctx.beginPath();
      ctx.arc(x + r, y + r + Math.round(base * 0.2), r, 0, Math.PI * 2);
      ctx.fillStyle = p.home ? (light ? "#1ca36a" : "#4dffc0") : light ? "#b8bfcc" : "#3a4660";
      ctx.fill();
      ctx.fillStyle = p.home ? s.fg : s.dim;
      ctx.fillText(name, x + 2 * r + Math.round(base * 0.3), y + Math.round(base * 0.05));
      x += 2 * r + w + Math.round(base * 1.1);
    }
    y += Math.round(line * 0.95);
  }
  // today (and tomorrow when there is room)
  for (const day of [b.today, b.tomorrow]) {
    if (!day) continue;
    if (y + line * 1.5 > bottom) break;
    y = head(s, dayLabel(day, lang, words), y + Math.round(base * 0.15), day.offset === 0 ? s.fg : s.dim) - Math.round(base * 0.3);
    if (!day.events.length) {
      nothing(s, words.nothing, y + Math.round(base * 0.1));
      y += line;
      continue;
    }
    y = eventLines(s, day, b.calendars, lang, words, now, y, bottom);
    if (y < 0) return s.c.toDataURL("image/png");
    y += Math.round(line * 0.2);
  }
  // the bins at the end
  if (b.waste.length && y + line <= bottom) {
    ctx.fillStyle = s.accent;
    font(ctx, base * 0.85, 600);
    ctx.fillText(ellipsis(ctx, `🗑 ${b.waste.join(" · ")}`, W - 2 * pad), pad, y + Math.round(base * 0.2));
  }
  return s.c.toDataURL("image/png");
}

export { weatherSymbol };
