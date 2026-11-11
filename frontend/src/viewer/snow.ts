// Snow on the roof (fun pack "Winter & Christmas"): a white layer a little above each roof face, in strips up the slope
// so it follows a hip end as it narrows towards the ridge.
import { BufferAttribute, BufferGeometry, CanvasTexture } from "three";
import type { RoofFace } from "../solar.ts";

const WARM = [1, 0.78, 0.42];
const COLOURS = [
  [1, 0.25, 0.3],
  [1, 0.8, 0.25],
  [0.3, 1, 0.45],
  [0.3, 0.55, 1],
];

export const CHRISTMAS_PALETTE: readonly [number, number, number][] = [
  [1.0, 0.15, 0.2],   // Festive Ruby Red
  [1.0, 0.82, 0.25],  // Golden Amber Warmth
  [0.15, 0.95, 0.35], // Emerald Pine Green
  [0.2, 0.6, 1.0],    // Sapphire Ice Blue
  [1.0, 0.92, 0.65],  // Warm Candlelight
  [0.92, 0.22, 0.75], // Sparkling Magenta
  [0.2, 0.95, 0.9],   // Mint / Cyan Frost
];

/**
 * WLED Color Twinkles effect (inspired by WLED FX_MODE_COLOR_TWINKLE):
 * Each individual bulb fades in and out smoothly with its own golden-ratio phase offset.
 * As it cycles, it transitions to new vibrant festive colors from the palette.
 */
export function wledColorTwinkle(
  k: number,
  time: number,
  palette: readonly [number, number, number][] = CHRISTMAS_PALETTE,
  speed = 1.6,
): [number, number, number] {
  const phase = k * 1.61803398875;
  const cycleTime = time * speed + phase;
  const cycleAngle = cycleTime % (Math.PI * 2);
  const cycleIndex = Math.floor(cycleTime / (Math.PI * 2));

  // WLED twinkle curve: smooth sinusoidal peak with organic power-decay
  const raw = Math.sin(cycleAngle);
  if (raw <= 0) {
    return [0, 0, 0];
  }
  const brightness = Math.pow(raw, 2.2);
  const colorIdx = (k * 3 + cycleIndex * 5) % palette.length;
  const base = palette[colorIdx];
  return [base[0] * brightness, base[1] * brightness, base[2] * brightness];
}

/**
 * The fairy lights of these faces: a bulb every 25 cm along every eave and, with `outline`, up the gable edges (a hip
 * roof's hips) and along the ridge – the whole roof drawn in light. Just in front of the edges, under the eaves and
 * verges and on top of the ridge; where two faces share an edge it gets one chain. Warm white or the colours in turn
 * (positions and colours for points). Part of the roof, so they ride with it when the floors are pulled apart.
 */
export function roofLightPoints(faces: readonly RoofFace[], dy: number, colourful: boolean, outline = true, time = 0): { positions: Float32Array; colors: Float32Array } | null {
  const p: number[] = [];
  const c: number[] = [];
  const seen = new Set<string>();
  let k = 0;
  const bulb = (x: number, y: number, z: number) => {
    // one bulb where two faces' edges meet (a ridge, a hip): the second chain would sit on the first
    const key = `${Math.round(x / 0.08)},${Math.round(y / 0.08)},${Math.round(z / 0.08)}`;
    if (seen.has(key)) return;
    seen.add(key);
    p.push(x, y - dy, z);
    if (time > 0) {
      const col = wledColorTwinkle(k++, time, colourful ? CHRISTMAS_PALETTE : [[1.0, 0.82, 0.45], [1.0, 0.9, 0.6]]);
      c.push(col[0], col[1], col[2]);
    } else {
      c.push(...(colourful ? COLOURS[k++ % COLOURS.length] : WARM));
    }
  };
  const along = (a: number[], b: number[], away: number[], lift = -0.04) => {
    const l = Math.hypot(away[0], away[2]);
    const ox = l ? (away[0] / l) * 0.05 : 0;
    const oz = l ? (away[2] / l) * 0.05 : 0;
    const len = Math.hypot(b[0] - a[0], b[1] - a[1], b[2] - a[2]);
    const n = Math.max(2, Math.round(len / 0.25) + 1);
    for (let i = 0; i < n; i++) {
      const t = i / (n - 1);
      bulb(a[0] + (b[0] - a[0]) * t + ox, a[1] + (b[1] - a[1]) * t + lift, a[2] + (b[2] - a[2]) * t + oz);
    }
  };
  const at = (f: RoofFace, u: number, s: number) => [f.o[0] + f.eu[0] * u + f.es[0] * s, f.o[1] + f.eu[1] * u + f.es[1] * s, f.o[2] + f.eu[2] * u + f.es[2] * s];
  for (const f of faces) {
    if (f.unbounded || f.wall) continue;
    const [u0, u1] = f.span(0);
    if (!f.flat) {
      along(at(f, u0, 0), at(f, u1, 0), [-f.es[0], 0, -f.es[2]]);
      if (outline && f.ls > 0) {
        const [t0, t1] = f.span(f.ls);
        // the gable edges (or hips) up to the ridge, and the ridge on top
        along(at(f, u0, 0), at(f, t0, f.ls), [-f.eu[0], 0, -f.eu[2]]);
        along(at(f, u1, 0), at(f, t1, f.ls), [f.eu[0], 0, f.eu[2]]);
        if (t1 - t0 > 0.05) along(at(f, t0, f.ls), at(f, t1, f.ls), [0, 0, 0], 0.04);
      }
      continue;
    }
    // a flat roof: its whole rim, each side outwards from the middle
    const q = [at(f, u0, 0), at(f, u1, 0), at(f, u1, f.ls), at(f, u0, f.ls)];
    const mid = at(f, (u0 + u1) / 2, f.ls / 2);
    for (let i = 0; i < 4; i++) {
      const a = q[i];
      const b = q[(i + 1) % 4];
      along(a, b, [(a[0] + b[0]) / 2 - mid[0], 0, (a[2] + b[2]) / 2 - mid[2]]);
    }
  }
  return p.length ? { positions: new Float32Array(p), colors: new Float32Array(c) } : null;
}

/** The snow layer of these faces; heights are taken `dy` lower (the roof part's own origin). Null without faces. */
export function roofSnowGeometry(faces: readonly RoofFace[], dy: number): BufferGeometry | null {
  const p: number[] = [];
  const LIFT = 0.035;
  const STRIPS = 6;
  for (const f of faces) {
    if (f.unbounded || f.wall || f.ls <= 0) continue;
    const at = (u: number, s: number) => [
      f.o[0] + f.eu[0] * u + f.es[0] * s + f.n[0] * LIFT,
      f.o[1] + f.eu[1] * u + f.es[1] * s + f.n[1] * LIFT - dy,
      f.o[2] + f.eu[2] * u + f.es[2] * s + f.n[2] * LIFT,
    ];
    for (let k = 0; k < STRIPS; k++) {
      const s0 = (f.ls * k) / STRIPS;
      const s1 = (f.ls * (k + 1)) / STRIPS;
      const [a0, b0] = f.span(s0);
      const [a1, b1] = f.span(s1);
      if (b0 <= a0 && b1 <= a1) continue;
      const q = [at(a0, s0), at(b0, s0), at(b1, s1), at(a1, s1)];
      for (const i of [0, 1, 2, 0, 2, 3]) p.push(...q[i]);
    }
  }
  if (!p.length) return null;
  const g = new BufferGeometry();
  g.setAttribute("position", new BufferAttribute(new Float32Array(p), 3));
  return g;
}

let dot: CanvasTexture | null = null;

/** A round, soft spot for points (bulbs, sparks) instead of squares: drawn once, shared. */
export function dotTexture(): CanvasTexture | null {
  if (dot) return dot;
  if (typeof document === "undefined") return null;
  const c = document.createElement("canvas");
  c.width = c.height = 64;
  const g = c.getContext("2d");
  if (!g) return null;
  const r = g.createRadialGradient(32, 32, 0, 32, 32, 32);
  r.addColorStop(0, "rgba(255,255,255,1)");
  r.addColorStop(0.35, "rgba(255,255,255,0.9)");
  r.addColorStop(1, "rgba(255,255,255,0)");
  g.fillStyle = r;
  g.fillRect(0, 0, 64, 64);
  dot = new CanvasTexture(c);
  return dot;
}
