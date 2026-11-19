// A simple gable roof for a neighbour's house from the map (its outline and height are all the map gives): the ridge
// runs along the longer side of the box around the outline, the walls end at the eaves, and the house keeps its
// height (the map's height is the ridge). Large or winding buildings (a hall, a row of flats, a yard) stay blocks.

import type { Vec2 } from "./model.ts";
import { signedArea } from "./model.ts";

export interface GableHouse {
  /** The outline cut along the ridge: one half per slope (counter-clockwise). */
  halves: Vec2[][];
  /** Height of the roof above the ground at a point of the outline. */
  height: (x: number, z: number) => number;
  /** The eaves' height above the ground. */
  eave: number;
  /** Whether a point lies on the ridge line. */
  onRidge: (p: Vec2) => boolean;
}

/** The pitch of a neighbour's roof, degrees. */
const PITCH = 38;
/** A house: at most this wide across the ridge and this high (m) – more is a hall or a block of flats. */
const MAX_WIDTH = 15;
const MAX_HEIGHT = 14;
/** The outline fills at least this share of the box around it (an L or a U stays a block). */
const MIN_FILL = 0.72;

/** The narrowest box around a polygon, along one of its edges: centre, unit long axis, half length and half width. */
function narrowBox(poly: readonly Vec2[]): { c: Vec2; u: Vec2; hl: number; hw: number } | null {
  let best: { c: Vec2; u: Vec2; hl: number; hw: number; area: number } | null = null;
  for (let i = 0; i < poly.length; i++) {
    const [ax, az] = poly[i];
    const [bx, bz] = poly[(i + 1) % poly.length];
    const len = Math.hypot(bx - ax, bz - az);
    if (len < 0.2) continue;
    const ex = (bx - ax) / len;
    const ez = (bz - az) / len;
    let [s0, s1, t0, t1] = [Infinity, -Infinity, Infinity, -Infinity];
    for (const [x, z] of poly) {
      const s = x * ex + z * ez;
      const t = -x * ez + z * ex;
      s0 = Math.min(s0, s);
      s1 = Math.max(s1, s);
      t0 = Math.min(t0, t);
      t1 = Math.max(t1, t);
    }
    const area = (s1 - s0) * (t1 - t0);
    if (best && area >= best.area) continue;
    const [ms, mt] = [(s0 + s1) / 2, (t0 + t1) / 2];
    const c: Vec2 = [ms * ex - mt * ez, ms * ez + mt * ex];
    // the long axis carries the ridge
    best = s1 - s0 >= t1 - t0 ? { c, u: [ex, ez], hl: (s1 - s0) / 2, hw: (t1 - t0) / 2, area } : { c, u: [-ez, ex], hl: (t1 - t0) / 2, hw: (s1 - s0) / 2, area };
  }
  return best;
}

/** The part of a polygon on one side of a line through `c` along `u` (side 1: left of it, -1: right). */
function half(poly: readonly Vec2[], across: (p: Vec2) => number, side: 1 | -1): Vec2[] {
  const out: Vec2[] = [];
  for (let i = 0; i < poly.length; i++) {
    const p = poly[i];
    const q = poly[(i + 1) % poly.length];
    const dp = across(p) * side;
    const dq = across(q) * side;
    if (dp >= 0) out.push(p);
    if ((dp > 0 && dq < 0) || (dp < 0 && dq > 0)) {
      const t = dp / (dp - dq);
      out.push([p[0] + (q[0] - p[0]) * t, p[1] + (q[1] - p[1]) * t]);
    }
  }
  return out;
}

/** The gable roof of a map building with outline `poly` and height `h`, or null when it stays a block. */
export function gableHouse(poly: readonly Vec2[], h: number): GableHouse | null {
  if (poly.length < 4 || h > MAX_HEIGHT || h < 2.5) return null;
  const box = narrowBox(poly);
  if (!box || box.hw * 2 > MAX_WIDTH || box.hw < 1.5) return null;
  const area = Math.abs(signedArea(poly as Vec2[]));
  if (area < box.hl * box.hw * 4 * MIN_FILL) return null;
  const { c, u, hw } = box;
  const across = (p: Vec2) => -(p[0] - c[0]) * u[1] + (p[1] - c[1]) * u[0];
  // the roof takes at most the upper 45 % of the house
  const rise = Math.min(hw * Math.tan((PITCH * Math.PI) / 180), h * 0.45);
  const eave = h - rise;
  const ring = signedArea(poly as Vec2[]) >= 0 ? [...poly] : [...poly].reverse();
  const halves = ([1, -1] as const).map((side) => half(ring, across, side)).filter((p) => p.length >= 3);
  if (halves.length < 2) return null;
  return {
    halves,
    eave,
    height: (x, z) => eave + rise * Math.max(0, 1 - Math.abs(across([x, z])) / hw),
    onRidge: (p) => Math.abs(across(p)) < 1e-6,
  };
}
