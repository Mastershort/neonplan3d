// Geometry primitives shared by walls, furniture and opening parts: merged vertex-coloured buffers
// with a per-vertex fold value (see build.ts), line buffers and vertical prisms.

import { BufferGeometry, Color, Float32BufferAttribute, ShapeUtils, Vector2 } from "three";
import type { Vec2 } from "../model.ts";

/** Line colours are added on top of the scene, so they are pre-scaled to their intended strength. */
export const EDGE_TOP = shade(0x37e0ff, 0.95);
export const EDGE_CUT = shade(0x37e0ff, 1);
export const EDGE_SOFT = shade(0x5b7cff, 0.34);
export const EDGE_BASE = shade(0x5b7cff, 0.22);

/** Direction the fake light comes from (x, z); faces turned towards it are slightly brighter. */
const LIGHT: Vec2 = [-0.55, 0.83];

export const ALWAYS = -1;
/** Fold kinds (value = kind * 16 + bucket), see build.ts. */
export const CUT_OFFSET = 16;
export const LOWER_OFFSET = 32;
export const CAP_OFFSET = 48;

export class GeoBuffer {
  p: number[] = [];
  c: number[] = [];
  f: number[] = [];
  /** Texture coordinates; only kept when the buffer is created with uvs = true. */
  uv: number[] | null;
  /** Pattern atlas tile per vertex (floors only). */
  tile: number[] | null;

  constructor(uvs = false, tiles = false) {
    this.uv = uvs ? [] : null;
    this.tile = tiles ? [] : null;
  }

  tri(a: number[], b: number[], c: number[], ca: Color, cb: Color = ca, cc: Color = ca, uv?: number[], fold = ALWAYS, tile: [number, number] = [0, 1]): void {
    this.p.push(...a, ...b, ...c);
    this.c.push(ca.r, ca.g, ca.b, cb.r, cb.g, cb.b, cc.r, cc.g, cc.b);
    this.f.push(fold, fold, fold);
    // without explicit uvs, point into an empty spot of the texture
    this.uv?.push(...(uv ?? [0.5, 0.5, 0.5, 0.5, 0.5, 0.5]));
    this.tile?.push(...tile, ...tile, ...tile);
  }

  get count(): number {
    return this.p.length / 9;
  }

  geometry(): BufferGeometry {
    const g = new BufferGeometry();
    g.setAttribute("position", new Float32BufferAttribute(this.p, 3));
    g.setAttribute("color", new Float32BufferAttribute(this.c, 3));
    g.setAttribute("fold", new Float32BufferAttribute(this.f, 1));
    if (this.uv) g.setAttribute("uv", new Float32BufferAttribute(this.uv, 2));
    if (this.tile) g.setAttribute("tile", new Float32BufferAttribute(this.tile, 2));
    g.computeBoundingSphere();
    return g;
  }
}

export class LineBuffer {
  p: number[] = [];
  c: number[] = [];
  f: number[] = [];

  seg(a: number[], b: number[], color: Color = EDGE_TOP, fold = ALWAYS): void {
    this.p.push(...a, ...b);
    this.c.push(color.r, color.g, color.b, color.r, color.g, color.b);
    this.f.push(fold, fold);
  }

  /** A vertical or sloped segment split at the cut height: below always visible, above with the bucket. */
  segSplit(a: number[], b: number[], color: Color, cut: number, bucket: number): void {
    const [lo, hi] = a[1] <= b[1] ? [a, b] : [b, a];
    if (hi[1] <= cut + 1e-6 || bucket < 0) return this.seg(lo, hi, color, ALWAYS);
    if (lo[1] >= cut - 1e-6) return this.seg(lo, hi, color, bucket);
    const t = (cut - lo[1]) / (hi[1] - lo[1]);
    const mid = [lo[0] + (hi[0] - lo[0]) * t, cut, lo[2] + (hi[2] - lo[2]) * t];
    this.seg(lo, mid, color, ALWAYS);
    this.seg(mid, hi, color, bucket);
  }

  geometry(): BufferGeometry {
    const g = new BufferGeometry();
    g.setAttribute("position", new Float32BufferAttribute(this.p, 3));
    g.setAttribute("color", new Float32BufferAttribute(this.c, 3));
    g.setAttribute("fold", new Float32BufferAttribute(this.f, 1));
    return g;
  }
}

/** Colour scaled by k with channels clamped to 1 (Color.multiplyScalar alone can overflow). */
/** Degrees to radians. */
export const DEG = Math.PI / 180;

export function shade(hex: number, k: number): Color {
  const c = new Color(hex).multiplyScalar(k);
  c.r = Math.min(1, c.r);
  c.g = Math.min(1, c.g);
  c.b = Math.min(1, c.b);
  return c;
}

export function triangulate(poly: Vec2[], holes: Vec2[][] = []): number[][] {
  const contour = poly.map(([x, z]) => new Vector2(x, z));
  return ShapeUtils.triangulateShape(
    contour,
    holes.map((h) => h.map(([x, z]) => new Vector2(x, z))),
  );
}

/**
 * Vertical prism over a counter-clockwise polygon. Side colours fade darker towards the floor (baked
 * occlusion) and vary slightly with the direction the face points to, so neighbouring faces separate.
 */
/**
 * A box whose top rectangle differs from the bottom one (sloped sides): `lo` and `hi` are the four
 * corners in the same order. Faces that tilt upwards blend towards the top colour.
 */
export function pushLoft(buf: GeoBuffer, lo: Vec2[], hi: Vec2[], y0: number, y1: number, side: number, top: number): void {
  const topC = new Color(top);
  const k = (y: number) => 0.5 + 0.5 * Math.min(1, Math.max(0, y / 1.6));
  for (let i = 0; i < 4; i++) {
    const a = lo[i];
    const b = lo[(i + 1) % 4];
    const A = hi[i];
    const B = hi[(i + 1) % 4];
    const dx = b[0] - a[0];
    const dz = b[1] - a[1];
    const l = Math.hypot(dx, dz);
    if (l < 1e-6) continue;
    const facing = ((dz / l) * LIGHT[0] - (dx / l) * LIGHT[1] + 1) / 2;
    const dir = 0.8 + 0.28 * facing;
    // how far the face leans back: the top edge moved inwards (the outward normal is (dz, -dx))
    const lean = ((A[0] + B[0] - a[0] - b[0]) / 2) * (-dz / l) + ((A[1] + B[1] - a[1] - b[1]) / 2) * (dx / l);
    const up = Math.max(0, Math.min(1, lean / Math.max(1e-6, Math.hypot(lean, y1 - y0))));
    const lo1 = shade(side, k(y0) * dir).lerp(topC, up);
    const hi1 = shade(side, k(y1) * dir).lerp(topC, up);
    buf.tri([a[0], y0, a[1]], [A[0], y1, A[1]], [B[0], y1, B[1]], lo1, hi1, hi1);
    buf.tri([a[0], y0, a[1]], [B[0], y1, B[1]], [b[0], y0, b[1]], lo1, hi1, lo1);
  }
  const [h0, h1, h2, h3] = hi;
  if (Math.hypot(h2[0] - h0[0], h2[1] - h0[1]) > 1e-4) {
    buf.tri([h0[0], y1, h0[1]], [h2[0], y1, h2[1]], [h1[0], y1, h1[1]], topC);
    buf.tri([h0[0], y1, h0[1]], [h3[0], y1, h3[1]], [h2[0], y1, h2[1]], topC);
  }
}

/**
 * A cylinder lying along the x or z axis (wheels, rollers, pipes): `at` maps the along-axis value
 * and the across value to world (x, z); `c` is the across-centre, `cy` the centre height.
 */
export function pushLyingCyl(buf: GeoBuffer, at: (along: number, across: number) => Vec2, a0: number, a1: number, c: number, cy: number, r: number, side: number, cap: number, n: number): void {
  const capC = new Color(cap);
  const ring: { y: number; s: number }[] = [];
  for (let i = 0; i < n; i++) {
    const t = (i / n) * Math.PI * 2;
    ring.push({ y: cy + Math.cos(t) * r, s: c + Math.sin(t) * r });
  }
  const P = (along: number, i: number) => {
    const p = at(along, ring[i % n].s);
    return [p[0], ring[i % n].y, p[1]];
  };
  for (let i = 0; i < n; i++) {
    const mid = ((i + 0.5) / n) * Math.PI * 2;
    const col = shade(side, 0.62 + 0.4 * Math.max(0, Math.cos(mid)));
    buf.tri(P(a0, i), P(a1, i + 1), P(a1, i), col);
    buf.tri(P(a0, i), P(a0, i + 1), P(a1, i + 1), col);
  }
  for (const along of [a0, a1]) {
    const m = at(along, c);
    const centre = [m[0], cy, m[1]];
    for (let i = 0; i < n; i++) buf.tri(centre, P(along, i), P(along, i + 1), capC);
  }
}

export function pushPrism(
  buf: GeoBuffer,
  poly: Vec2[],
  y0: number,
  y1: number | ((x: number, z: number) => number),
  side: number,
  top: number,
  opts: { aoFrom?: number; fold?: number; topFold?: number; bottom?: boolean; topFace?: boolean } = {},
): void {
  // a top that follows a height function (a wall ending under a roof slope): planar for a wall piece
  // within one roof plane, so the top quad and the vertical sides stay flat
  const topY = typeof y1 === "number" ? () => y1 : (p: Vec2) => Math.max(y0 + 0.002, y1(p[0], p[1]));
  const aoFrom = opts.aoFrom ?? y0;
  const fold = opts.fold ?? ALWAYS;
  const k = (y: number) => 0.5 + 0.5 * Math.min(1, Math.max(0, (y - aoFrom) / 1.6));
  const tris = opts.topFace === false && !opts.bottom ? [] : triangulate(poly);
  if (opts.topFace !== false) {
    const topC = new Color(top);
    for (const [i, j, l] of tris) {
      // polygon is counter-clockwise in (x, z); seen from above (+y) that is clockwise, so swap
      const a = poly[i];
      const b = poly[j];
      const c = poly[l];
      buf.tri([a[0], topY(a), a[1]], [c[0], topY(c), c[1]], [b[0], topY(b), b[1]], topC, topC, topC, undefined, opts.topFold ?? fold);
    }
  }
  if (opts.bottom) {
    const botC = shade(side, 0.55);
    for (const [i, j, l] of tris) {
      const a = poly[i];
      const b = poly[j];
      const c = poly[l];
      buf.tri([a[0], y0, a[1]], [b[0], y0, b[1]], [c[0], y0, c[1]], botC, botC, botC, undefined, fold);
    }
  }
  for (let i = 0; i < poly.length; i++) {
    const a = poly[i];
    const b = poly[(i + 1) % poly.length];
    const dx = b[0] - a[0];
    const dz = b[1] - a[1];
    const l = Math.hypot(dx, dz);
    if (l < 1e-6) continue;
    const facing = ((dz / l) * LIGHT[0] - (dx / l) * LIGHT[1] + 1) / 2;
    const dir = 0.8 + 0.28 * facing;
    const ya = topY(a);
    const yb = topY(b);
    const lo = shade(side, k(y0) * dir);
    const hiA = shade(side, k(ya) * dir);
    const hiB = shade(side, k(yb) * dir);
    buf.tri([a[0], y0, a[1]], [a[0], ya, a[1]], [b[0], yb, b[1]], lo, hiA, hiB, undefined, fold);
    buf.tri([a[0], y0, a[1]], [b[0], yb, b[1]], [b[0], y0, b[1]], lo, hiB, lo, undefined, fold);
  }
}

