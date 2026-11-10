// The face of a digital picture frame as a picture: the calendar (and the weather) are drawn on a canvas and handed to
// the viewer as a data URL, like a cover picture on a TV screen. Drawn only when the content changed.

import { calendarColor, dayLabel, timeLabel, type FrameDay } from "./frames.ts";

export interface CalendarFaceWords {
  today: string;
  tomorrow: string;
  allDay: string;
  nothing: string;
}

/** Width of the drawn face in pixels; the height follows the frame's own proportions. */
const FACE_W = 512;

function canvasOf(w: number, h: number): HTMLCanvasElement | null {
  if (typeof document === "undefined") return null;
  const c = document.createElement("canvas");
  c.width = w;
  c.height = h;
  return c;
}

function ellipsis(ctx: CanvasRenderingContext2D, text: string, max: number): string {
  if (ctx.measureText(text).width <= max) return text;
  let t = text;
  while (t.length > 1 && ctx.measureText(`${t}…`).width > max) t = t.slice(0, -1);
  return `${t}…`;
}

/**
 * The calendar face: the next days with their events, today first and bright, a coloured bar per calendar. `aspect`
 * is the face's width / height; `light` draws dark text on a pale sheet (the Day look), else bright text on night blue.
 */
export function drawCalendarFace(days: readonly FrameDay[], calendars: readonly string[], lang: string, words: CalendarFaceWords, aspect: number, light: boolean, title = ""): string | null {
  const W = FACE_W;
  const H = Math.round(W / Math.max(0.4, Math.min(3, aspect)));
  const c = canvasOf(W, H);
  const ctx = c?.getContext("2d");
  if (!c || !ctx) return null;
  const fg = light ? "#1c2333" : "#eef3ff";
  const dim = light ? "#5a6478" : "#8fa0c0";
  // the sheet: a soft vertical gradient, a thin margin
  const g = ctx.createLinearGradient(0, 0, 0, H);
  if (light) {
    g.addColorStop(0, "#fbfaf6");
    g.addColorStop(1, "#ece9e0");
  } else {
    g.addColorStop(0, "#111a30");
    g.addColorStop(1, "#0a1020");
  }
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, W, H);
  const pad = Math.round(W * 0.06);
  // type sizes scale with the face: a small frame reads with fewer, larger lines
  const base = Math.max(18, Math.round(Math.min(W, H) * 0.075));
  const line = Math.round(base * 1.45);
  let y = pad;
  if (title) {
    ctx.fillStyle = dim;
    ctx.font = `600 ${Math.round(base * 0.8)}px system-ui, sans-serif`;
    ctx.textBaseline = "top";
    ctx.fillText(ellipsis(ctx, title.toUpperCase(), W - 2 * pad), pad, y);
    y += Math.round(base * 1.3);
  }
  const bottom = H - pad;
  const total = days.reduce((n, d) => n + d.events.length, 0);
  if (!total) {
    ctx.fillStyle = dim;
    ctx.font = `500 ${base}px system-ui, sans-serif`;
    ctx.textBaseline = "top";
    ctx.fillText(ellipsis(ctx, words.nothing, W - 2 * pad), pad, y);
    return c.toDataURL("image/png");
  }
  for (const day of days) {
    if (!day.events.length) continue;
    if (y + line > bottom) break;
    // the day's head
    ctx.fillStyle = day.offset === 0 ? fg : dim;
    ctx.font = `700 ${Math.round(base * 0.85)}px system-ui, sans-serif`;
    ctx.textBaseline = "top";
    ctx.fillText(ellipsis(ctx, dayLabel(day, lang, words).toUpperCase(), W - 2 * pad), pad, y + Math.round(base * 0.2));
    y += Math.round(line * 0.85);
    for (const e of day.events) {
      if (y + line > bottom) {
        // more than fits: a hint of how many
        ctx.fillStyle = dim;
        ctx.font = `500 ${Math.round(base * 0.75)}px system-ui, sans-serif`;
        ctx.fillText("…", pad, y);
        return c.toDataURL("image/png");
      }
      // the calendar's colour bar, the time, the summary
      ctx.fillStyle = calendarColor(calendars, e.calendar);
      ctx.fillRect(pad, y + Math.round(base * 0.15), Math.round(base * 0.22), Math.round(base * 1.05));
      const x0 = pad + Math.round(base * 0.6);
      ctx.fillStyle = day.offset === 0 ? fg : dim;
      ctx.font = `${day.offset === 0 ? 600 : 500} ${Math.round(base * 0.78)}px system-ui, sans-serif`;
      const time = timeLabel(e, lang, words.allDay);
      const tw = ctx.measureText(time).width;
      ctx.fillText(time, x0, y + Math.round(base * 0.22));
      ctx.font = `${day.offset === 0 ? 600 : 500} ${base}px system-ui, sans-serif`;
      const sx = x0 + tw + Math.round(base * 0.5);
      ctx.fillText(ellipsis(ctx, e.summary, W - pad - sx), sx, y + Math.round(base * 0.12));
      y += line;
    }
    y += Math.round(line * 0.3);
  }
  return c.toDataURL("image/png");
}

export interface WeatherFace {
  /** The condition's symbol (an emoji) and its name. */
  symbol: string;
  condition: string;
  temperature: string;
  /** Lines below: humidity, wind, tomorrow … */
  lines: string[];
}

/** The weather face: a big temperature with the condition, a few lines below. */
export function drawWeatherFace(w: WeatherFace, aspect: number, light: boolean): string | null {
  const W = FACE_W;
  const H = Math.round(W / Math.max(0.4, Math.min(3, aspect)));
  const c = canvasOf(W, H);
  const ctx = c?.getContext("2d");
  if (!c || !ctx) return null;
  const g = ctx.createLinearGradient(0, 0, W, H);
  if (light) {
    g.addColorStop(0, "#eaf3ff");
    g.addColorStop(1, "#fbfaf6");
  } else {
    g.addColorStop(0, "#0d1a3a");
    g.addColorStop(1, "#0a1020");
  }
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, W, H);
  const fg = light ? "#1c2333" : "#eef3ff";
  const dim = light ? "#5a6478" : "#8fa0c0";
  const pad = Math.round(W * 0.07);
  const big = Math.round(Math.min(W, H) * 0.3);
  ctx.textBaseline = "top";
  ctx.font = `${Math.round(big * 1.1)}px system-ui, sans-serif`;
  ctx.fillStyle = fg;
  ctx.fillText(w.symbol, pad, pad);
  ctx.font = `700 ${big}px system-ui, sans-serif`;
  const tx = pad + Math.round(big * 1.4);
  ctx.fillText(w.temperature, tx, pad + Math.round(big * 0.1));
  ctx.fillStyle = dim;
  ctx.font = `500 ${Math.round(big * 0.4)}px system-ui, sans-serif`;
  ctx.fillText(ellipsis(ctx, w.condition, W - tx - pad), tx, pad + Math.round(big * 1.15));
  let y = pad + Math.round(big * 1.8);
  const lh = Math.round(big * 0.5);
  for (const l of w.lines) {
    if (y + lh > H - pad) break;
    ctx.fillStyle = fg;
    ctx.font = `500 ${Math.round(big * 0.38)}px system-ui, sans-serif`;
    ctx.fillText(ellipsis(ctx, l, W - 2 * pad), pad, y);
    y += lh;
  }
  return c.toDataURL("image/png");
}
