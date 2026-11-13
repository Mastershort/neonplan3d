/**
 * Neon sign (idea: ProvUK): an own text in glowing tubes on a dark acrylic plate on the wall. It lights while its
 * light or switch is on (always, when nothing is linked), in the light's colour when the light shows colours, else
 * in the sign's own colour. The text is drawn into a picture that lies on the plate like a screen's picture.
 */
import type { Furniture } from "./model.ts";
import type { HassEntity } from "./types.ts";
import { lightGlow } from "./devices.ts";

/** The sign's own colour when none is chosen: hot pink. */
export const SIGN_DEFAULT = "#ff3fb4";

/** The lines of a sign's text: split with | or a line break, at most two lines of 40 characters. */
export function signLines(text: string | null | undefined): string[] {
  const lines = String(text ?? "")
    .split(/\s*(?:\||\n)\s*/)
    .map((l) => l.trim().slice(0, 40))
    .filter(Boolean)
    .slice(0, 2);
  return lines.length ? lines : ["Neon"];
}

function hexColor(hex: string | null | undefined): [number, number, number] | null {
  if (!hex || !/^#[0-9a-f]{6}$/i.test(hex)) return null;
  return [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16) / 255) as [number, number, number];
}

/**
 * Whether the sign is lit, its colour (0 … 1 channels) and brightness. A coloured light gives its colour; a white
 * light, a switch or nothing linked keep the sign's own colour.
 */
export function signLight(f: Pick<Furniture, "sign_color">, st: HassEntity | undefined, linked: boolean): { on: boolean; color: [number, number, number]; level: number } {
  const own = hexColor(f.sign_color) ?? (hexColor(SIGN_DEFAULT) as [number, number, number]);
  if (!linked) return { on: true, color: own, level: 1 };
  if (!st) return { on: false, color: own, level: 0 };
  const domain = st.entity_id.split(".")[0];
  if (domain === "light") {
    const glow = lightGlow(st);
    if (!glow) return { on: false, color: own, level: 0 };
    const mode = st.attributes.color_mode;
    const coloured = Array.isArray(st.attributes.rgb_color) && mode !== "color_temp" && mode !== "brightness" && mode !== "onoff" && mode !== "white";
    return { on: true, color: coloured ? glow.color : own, level: glow.level };
  }
  const on = ["on", "open", "home", "playing", "heat", "cool", "auto"].includes(st.state);
  return { on, color: own, level: on ? 1 : 0 };
}

const cache = new Map<string, string>();

/**
 * The sign's picture as a data URL: the text in tubes on a transparent ground, at the plate's aspect ratio. Lit: a
 * soft glow in the colour around a pale core; off: dull tubes in a dark shade of the colour. Cached by its look.
 */
export function neonSignPicture(lines: readonly string[], color: readonly [number, number, number], on: boolean, level: number, aspect: number): string | null {
  const a = Math.min(8, Math.max(0.25, Number.isFinite(aspect) && aspect > 0 ? aspect : 3));
  const lv = on ? Math.round(Math.min(1, Math.max(0.2, level)) * 10) / 10 : 0;
  const key = `${lines.join("\n")}|${color.map((c) => Math.round(c * 32)).join(",")}|${lv}|${a.toFixed(2)}`;
  const hit = cache.get(key);
  if (hit) return hit;
  if (typeof document === "undefined") return null;
  const W = a >= 1 ? 1024 : Math.round(1024 * a);
  const H = a >= 1 ? Math.round(1024 / a) : 1024;
  const canvas = document.createElement("canvas");
  canvas.width = W;
  canvas.height = H;
  const ctx = canvas.getContext("2d");
  if (!ctx) return null;
  const family = "'Dancing Script', 'Segoe Script', 'Brush Script MT', 'Comic Sans MS', cursive";
  // the largest size at which the longest line fits 86 % of the width and all lines 78 % of the height
  ctx.font = `600 100px ${family}`;
  const widest = Math.max(...lines.map((l) => ctx.measureText(l).width), 1);
  const size = Math.max(12, Math.min((W * 0.86 * 100) / widest, (H * 0.78) / (lines.length * 1.15)));
  ctx.font = `600 ${size}px ${family}`;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.lineJoin = "round";
  const css = (c: readonly number[], k: number, alpha = 1) => `rgba(${c.map((v) => Math.round(Math.min(1, Math.max(0, v * k)) * 255)).join(",")},${alpha})`;
  const core = color.map((v) => v + (1 - v) * 0.65);
  const y0 = H / 2 - ((lines.length - 1) * size * 1.15) / 2;
  lines.forEach((line, i) => {
    const y = y0 + i * size * 1.15;
    if (on) {
      // glow: wide soft strokes in the colour, then the bright tube
      ctx.shadowColor = css(color, 1);
      ctx.shadowBlur = size * 0.45 * lv;
      ctx.strokeStyle = css(color, 1, 0.55 * lv);
      ctx.lineWidth = size * 0.12;
      ctx.strokeText(line, W / 2, y);
      ctx.shadowBlur = size * 0.2 * lv;
      ctx.fillStyle = css(core, 0.55 + 0.45 * lv);
      ctx.fillText(line, W / 2, y);
    } else {
      ctx.shadowBlur = 0;
      ctx.fillStyle = css(color.map((v) => 0.12 + v * 0.22), 1);
      ctx.fillText(line, W / 2, y);
    }
  });
  const url = canvas.toDataURL("image/png");
  if (cache.size > 40) cache.delete(cache.keys().next().value as string);
  cache.set(key, url);
  return url;
}
