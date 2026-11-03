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

/**
 * The fairy lights along the eaves of these faces: a bulb every 25 cm, just in front of the eave and a little below
 * it, warm white or the colours in turn (positions and colours for points). Part of the roof, so they ride with it
 * when the floors are pulled apart. Null without an eave.
 */
export function roofLightPoints(faces: readonly RoofFace[], dy: number, colourful: boolean): { positions: Float32Array; colors: Float32Array } | null {
  const p: number[] = [];
  const c: number[] = [];
  let k = 0;
  const bulb = (x: number, y: number, z: number) => {
    p.push(x, y - dy, z);
    c.push(...(colourful ? COLOURS[k++ % COLOURS.length] : WARM));
  };
  const along = (a: number[], b: number[], away: number[]) => {
    const l = Math.hypot(away[0], away[2]) || 1;
    const ox = (away[0] / l) * 0.05;
    const oz = (away[2] / l) * 0.05;
    const len = Math.hypot(b[0] - a[0], b[1] - a[1], b[2] - a[2]);
    const n = Math.max(2, Math.round(len / 0.25) + 1);
    for (let i = 0; i < n; i++) {
      const t = i / (n - 1);
      bulb(a[0] + (b[0] - a[0]) * t + ox, a[1] + (b[1] - a[1]) * t - 0.04, a[2] + (b[2] - a[2]) * t + oz);
    }
  };
  const at = (f: RoofFace, u: number, s: number) => [f.o[0] + f.eu[0] * u + f.es[0] * s, f.o[1] + f.eu[1] * u + f.es[1] * s, f.o[2] + f.eu[2] * u + f.es[2] * s];
  for (const f of faces) {
    if (f.unbounded || f.wall) continue;
    const [u0, u1] = f.span(0);
    if (!f.flat) {
      along(at(f, u0, 0), at(f, u1, 0), [-f.es[0], 0, -f.es[2]]);
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
