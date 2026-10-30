// The earth around the parts of a floor below the ground: a cellar sits in the ground, a semi-basement half in
// it. Cellar windows below the ground get a light well in front.

import { Color } from "three";
import type { Building, Floor, Vec2 } from "../model.ts";
import { areaGround, OUTDOOR_TOP, outdoorStanding, pointInPolygon, terrainAt } from "../model.ts";
import { earthOutline, inGround, wellBelowGround } from "../geometry/wells.ts";
import { SLAB, type OpeningInfo } from "./build.ts";
import { GeoBuffer, LineBuffer } from "./geo.ts";

export { inGround };

const EARTH = new Color(0x172334);
const EARTH_LOW = new Color(0x080e19);
const WELL = new Color(0x1b2638);
const WELL_LOW = new Color(0x111a28);
const GROUND_LINE = new Color(0x3f86b8);
const GRATE = new Color(0x5b7a99);
// the plinth a house stands on where the ground lies below its lowest floor (a raised house without a cellar)
const PLINTH = new Color(0x22314a);
const PLINTH_LOW = new Color(0x141f30);
/** How far the earth reaches under the floor slab. */
const BELOW = 0.35;
/** A light well in front of a cellar window: depth from the wall and how far it reaches below the sill. */
const WELL_DEPTH = 0.8;
const WELL_BELOW = 0.2;
const WELL_SIDE = 0.1;

export interface EarthGeometry {
  /** The earth's faces along the outer walls (normals outward). */
  earth: GeoBuffer;
  /** Light wells: concrete faces seen from both sides. */
  wells: GeoBuffer;
  lines: LineBuffer;
}

interface Well {
  /** Along the outline edge. */
  s0: number;
  s1: number;
  bottom: number;
  /** Rim and grate above the ground (m). */
  rim: number;
  /** How far the window's outer face stands out of the outline (a room edge with a thicker wall of its own, #843). */
  off: number;
}

/**
 * How far an outdoor area lying over point `p` (lawn, path, terrace, gravel …) stands above `ground` there, in the
 * heights of `floor`; 0 without one. A light well under such an area would vanish below its surface (#524).
 */
function coverAbove(b: Building, floor: Floor, p: Vec2, ground: number): number {
  let top = -Infinity;
  for (const f of b.floors) {
    // only areas on the ground cover a well: a balcony on an upper floor floats over it (#602)
    if (f.elevation > 0.3) continue;
    for (const a of f.outdoor ?? []) {
      if (a.points.length < 3 || a.type === "pool" || a.type === "balcony" || outdoorStanding(a.type) || !pointInPolygon(p, a.points)) continue;
      top = Math.max(top, f.elevation + areaGround(f, a) + OUTDOOR_TOP[a.type] - floor.elevation);
    }
  }
  return top > ground ? top - ground : 0;
}

/**
 * The earth around a floor, in its own coordinates (its floor at 0): from under the slab up to the ground along
 * every outer wall (never above the wall), with light wells cut out in front of the windows below the ground.
 * The lowest floor also gets a plinth down to the ground where the ground lies below it (a raised house
 * stands on its plinth instead of floating). Null when there is nothing of either.
 */
export function buildEarth(b: Building, floor: Floor, openings: readonly OpeningInfo[], lowest = false): EarthGeometry | null {
  if (b.settings.terrain?.earth === false || floor.elevation > 0.3) return null;
  const outline = earthOutline(b, floor);
  if (!outline) return null;
  const local = (x: number, z: number) => terrainAt(x, z) - floor.elevation;
  // the slab reaches 0.2 m down (the lawn of a flat plot lies there): the plinth starts below it
  const plinth = lowest && outline.some(([x, z]) => local(x, z) < -SLAB - 0.03);
  if (!plinth && !inGround(b, floor)) return null;
  const H = floor.height;
  const bottom = -BELOW;
  const ground = (x: number, z: number) => Math.min(H, terrainAt(x, z) - floor.elevation);
  const earth = new GeoBuffer();
  const wells = new GeoBuffer();
  const lines = new LineBuffer();
  // a quad turned to face `n` (x, z) – the earth faces look outward
  const quad = (p: number[], q: number[], r: number[], s: number[], n: Vec2, cLow: Color, cHigh: Color, buf: GeoBuffer) => {
    const e: Vec2 = [q[0] - p[0], q[2] - p[2]];
    const out = -e[1] * n[0] + e[0] * n[1] > 0;
    if (out) {
      buf.tri(p, q, r, cLow, cLow, cHigh);
      buf.tri(p, r, s, cLow, cHigh, cHigh);
    } else {
      buf.tri(p, r, q, cLow, cHigh, cLow);
      buf.tri(p, s, r, cLow, cHigh, cHigh);
    }
  };
  for (let i = 0; i < outline.length; i++) {
    const a = outline[i];
    const c = outline[(i + 1) % outline.length];
    const len = Math.hypot(c[0] - a[0], c[1] - a[1]);
    if (len < 1e-4) continue;
    const ax: Vec2 = [(c[0] - a[0]) / len, (c[1] - a[1]) / len];
    let n: Vec2 = [ax[1], -ax[0]];
    const mid: Vec2 = [(a[0] + c[0]) / 2 + n[0] * 0.05, (a[1] + c[1]) / 2 + n[1] * 0.05];
    if (pointInPolygon(mid, outline)) n = [-n[0], -n[1]];
    const at = (s: number, out = 0.012): Vec2 => [a[0] + ax[0] * s + n[0] * out, a[1] + ax[1] * s + n[1] * out];
    // the windows in this stretch of wall that lie below the ground get a light well
    const holes: Well[] = [];
    for (const o of openings) {
      if (o.opening.type !== "window" || !o.exterior || o.opening.well === false) continue;
      const cx = o.start[0] + o.axis[0] * (o.width / 2) - o.toRoom[0] * o.faceOut;
      const cz = o.start[1] + o.axis[1] * (o.width / 2) - o.toRoom[1] * o.faceOut;
      const s = (cx - a[0]) * ax[0] + (cz - a[1]) * ax[1];
      // the outline lies at the settings' outer wall thickness; a room edge with a thicker wall of its own puts the
      // window's face further out (#843: a cellar's 36 cm walls lost their wells) – along this edge, never across it
      const off = (cx - a[0]) * n[0] + (cz - a[1]) * n[1];
      if (Math.abs(o.axis[0] * ax[0] + o.axis[1] * ax[1]) < 0.99 || off < -0.08 || off > 0.6 || s < -0.05 || s > len + 0.05) continue;
      // the same decision the editor offers its "Light well" switch by (#524)
      if (!wellBelowGround(b, floor, o.exterior, o.sill, [cx, cz])) continue;
      holes.push({ s0: Math.max(0, s - o.width / 2 - WELL_SIDE), s1: Math.min(len, s + o.width / 2 + WELL_SIDE), bottom: Math.max(bottom + 0.05, o.sill - WELL_BELOW), rim: o.opening.well_rim ?? 0, off: Math.max(0, off) });
    }
    // the earth in pieces of at most half a metre, lower where a light well is
    const cuts = new Set<number>([0, len]);
    for (const h of holes) {
      cuts.add(h.s0);
      cuts.add(h.s1);
    }
    const sorted = [...cuts].sort((p, q) => p - q);
    const stops: number[] = [];
    for (let k = 0; k < sorted.length - 1; k++) {
      const n0 = Math.max(1, Math.ceil((sorted[k + 1] - sorted[k]) / 0.5));
      for (let j = 0; j < n0; j++) stops.push(sorted[k] + ((sorted[k + 1] - sorted[k]) * j) / n0);
    }
    stops.push(len);
    for (let k = 0; k < stops.length - 1; k++) {
      const s0 = stops[k];
      const s1 = stops[k + 1];
      const hole = holes.find((h) => s0 >= h.s0 - 1e-6 && s1 <= h.s1 + 1e-6);
      const p0 = at(s0);
      const p1 = at(s1);
      const g0 = ground(p0[0], p0[1]);
      const g1 = ground(p1[0], p1[1]);
      const t0 = hole ? Math.min(g0, hole.bottom) : g0;
      const t1 = hole ? Math.min(g1, hole.bottom) : g1;
      if (t0 > bottom + 0.01 || t1 > bottom + 0.01) {
        const y0 = Math.min(t0, bottom);
        const y1 = Math.min(t1, bottom);
        quad([p0[0], y0, p0[1]], [p1[0], y1, p1[1]], [p1[0], Math.max(t1, bottom), p1[1]], [p0[0], Math.max(t0, bottom), p0[1]], n, EARTH_LOW, EARTH, earth);
      }
      // where the ground lies below the lowest floor: the plinth from the ground up to the floor
      const r0 = local(p0[0], p0[1]);
      const r1 = local(p1[0], p1[1]);
      if (plinth && (r0 < -SLAB - 0.01 || r1 < -SLAB - 0.01)) {
        quad([p0[0], Math.min(r0, -SLAB), p0[1]], [p1[0], Math.min(r1, -SLAB), p1[1]], [p1[0], -SLAB, p1[1]], [p0[0], -SLAB, p0[1]], n, PLINTH_LOW, PLINTH, earth);
      }
      // the line where the ground meets the wall (or the plinth)
      if (g0 > bottom || g1 > bottom || (plinth && (r0 < -SLAB || r1 < -SLAB))) {
        const y0 = plinth ? Math.min(r0, Math.max(g0, bottom)) : Math.max(g0, bottom);
        const y1 = plinth ? Math.min(r1, Math.max(g1, bottom)) : Math.max(g1, bottom);
        lines.seg([p0[0], y0 + 0.004, p0[1]], [p1[0], y1 + 0.004, p1[1]], GROUND_LINE);
      }
    }
    // the light wells: floor, two sides and the front, from their bottom up to the ground, a grate on top
    for (const h of holes) {
      const w0 = at(h.s0, h.off);
      const w1 = at(h.s1, h.off);
      const f0: Vec2 = [w0[0] + n[0] * WELL_DEPTH, w0[1] + n[1] * WELL_DEPTH];
      const f1: Vec2 = [w1[0] + n[0] * WELL_DEPTH, w1[1] + n[1] * WELL_DEPTH];
      // the rim may stand above the ground (above gravel or a path laid around the house); under a lawn, a path or
      // a terrace drawn over the well it stands just above that surface by itself, or the area would cover it
      const mid: Vec2 = [(w0[0] + w1[0] + f0[0] + f1[0]) / 4, (w0[1] + w1[1] + f0[1] + f1[1]) / 4];
      const cover = coverAbove(b, floor, mid, ground(mid[0], mid[1]));
      const rim = Math.max(h.rim, cover > 0 ? cover + 0.02 : 0);
      const g = (p: Vec2) => ground(p[0], p[1]) + rim;
      const y = h.bottom;
      const P = (p: Vec2, yy: number) => [p[0], yy, p[1]];
      wells.tri(P(w0, y), P(w1, y), P(f1, y), WELL_LOW);
      wells.tri(P(w0, y), P(f1, y), P(f0, y), WELL_LOW);
      const side = (p: Vec2, q: Vec2) => {
        wells.tri(P(p, y), P(q, y), P(q, g(q)), WELL_LOW, WELL_LOW, WELL);
        wells.tri(P(p, y), P(q, g(q)), P(p, g(p)), WELL_LOW, WELL, WELL);
      };
      side(w0, f0);
      side(w1, f1);
      side(f0, f1);
      // the grate: a frame and bars across, at the ground
      const top = (p: Vec2) => [p[0], g(p) + 0.01, p[1]];
      for (const [p, q] of [[w0, w1], [w1, f1], [f1, f0], [f0, w0]] as [Vec2, Vec2][]) lines.seg(top(p), top(q), GRATE);
      const bars = Math.max(3, Math.round((h.s1 - h.s0) / 0.12));
      for (let j = 1; j < bars; j++) {
        const t = j / bars;
        const p: Vec2 = [w0[0] + (w1[0] - w0[0]) * t, w0[1] + (w1[1] - w0[1]) * t];
        lines.seg(top(p), top([p[0] + n[0] * WELL_DEPTH, p[1] + n[1] * WELL_DEPTH]), GRATE);
      }
    }
  }
  return earth.count || wells.count ? { earth, wells, lines } : null;
}
