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
/** Fold kind 4: the part of a tall piece of furniture above the cut height – folds away with the walls. */
export const FURN_OFFSET = 64;

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

/**
 * Cut the triangles from `fromTri` on at the height `cut`: pieces above it get `fold`, pieces below keep
 * theirs; a triangle across the plane is split (its colours and uvs interpolated). New triangles go to
 * the end of the buffer, so the range stays contiguous. For tall furniture in the cut view.
 */
export function cutAbove(buf: GeoBuffer, fromTri: number, cut: number, fold: number): void {
  const eps = 1e-6;
  const uvN = buf.uv ? 2 : 0;
  const read = (tri: number, k: number) => {
    const v = tri * 3 + k;
    return {
      p: buf.p.slice(v * 3, v * 3 + 3),
      c: buf.c.slice(v * 3, v * 3 + 3),
      uv: buf.uv ? buf.uv.slice(v * 2, v * 2 + 2) : null,
      tile: buf.tile ? buf.tile.slice(v * 2, v * 2 + 2) : null,
    };
  };
  type V = ReturnType<typeof read>;
  const mix = (a: V, b: V, t: number): V => ({
    p: a.p.map((x, i) => x + (b.p[i] - x) * t),
    c: a.c.map((x, i) => x + (b.c[i] - x) * t),
    uv: a.uv && b.uv ? a.uv.map((x, i) => x + (b.uv![i] - x) * t) : null,
    tile: a.tile,
  });
  const write = (tri: number, vs: V[], f: number) => {
    for (let k = 0; k < 3; k++) {
      const v = tri * 3 + k;
      for (let i = 0; i < 3; i++) {
        buf.p[v * 3 + i] = vs[k].p[i];
        buf.c[v * 3 + i] = vs[k].c[i];
      }
      if (buf.uv && vs[k].uv) for (let i = 0; i < uvN; i++) buf.uv[v * 2 + i] = vs[k].uv![i];
      if (buf.tile && vs[k].tile) for (let i = 0; i < 2; i++) buf.tile[v * 2 + i] = vs[k].tile![i];
      buf.f[v] = f;
    }
  };
  const append = (vs: V[], f: number) => {
    const tri = buf.p.length / 9;
    for (const v of vs) {
      buf.p.push(...v.p);
      buf.c.push(...v.c);
      buf.f.push(f);
      buf.uv?.push(...(v.uv ?? [0.5, 0.5]));
      buf.tile?.push(...(v.tile ?? [0, 1]));
    }
    return tri;
  };
  const n = buf.p.length / 9;
  for (let tri = fromTri; tri < n; tri++) {
    const vs = [read(tri, 0), read(tri, 1), read(tri, 2)];
    const above = vs.map((v) => v.p[1] > cut + eps);
    const below = vs.map((v) => v.p[1] < cut - eps);
    if (!above.some(Boolean)) continue;
    if (!below.some(Boolean)) {
      for (let k = 0; k < 3; k++) buf.f[tri * 3 + k] = fold;
      continue;
    }
    const keep = buf.f[tri * 3];
    const at = (a: V, b: V) => mix(a, b, (cut - a.p[1]) / (b.p[1] - a.p[1]));
    const up = above.filter(Boolean).length;
    // rotate so the odd vertex comes first, keeping the cyclic order (and so the winding)
    const odd = up === 1 ? above.indexOf(true) : above.indexOf(false);
    const a = vs[odd];
    const b = vs[(odd + 1) % 3];
    const c = vs[(odd + 2) % 3];
    const ab = at(a, b);
    const ca = at(c, a);
    if (up === 1) {
      // a above: a small cap above, the rest below
      write(tri, [a, ab, ca], fold);
      append([ab, b, c], keep);
      append([ab, c, ca], keep);
    } else {
      // a below: a small piece below, the rest above
      write(tri, [a, ab, ca], keep);
      append([ab, b, c], fold);
      append([ab, c, ca], fold);
    }
  }
}

/** The same for edge lines: segments from `fromSeg` on are split at the cut height, the upper part gets `fold`. */
export function cutLinesAbove(lines: LineBuffer, fromSeg: number, cut: number, fold: number): void {
  const n = lines.p.length / 6;
  for (let s = fromSeg; s < n; s++) {
    const a = lines.p.slice(s * 6, s * 6 + 3);
    const b = lines.p.slice(s * 6 + 3, s * 6 + 6);
    const [lo, hi] = a[1] <= b[1] ? [a, b] : [b, a];
    if (hi[1] <= cut + 1e-6) continue;
    if (lo[1] >= cut - 1e-6) {
      lines.f[s * 2] = fold;
      lines.f[s * 2 + 1] = fold;
      continue;
    }
    const t = (cut - lo[1]) / (hi[1] - lo[1]);
    const mid = [lo[0] + (hi[0] - lo[0]) * t, cut, lo[2] + (hi[2] - lo[2]) * t];
    // the lower part stays in place, the upper part is appended
    for (let i = 0; i < 3; i++) {
      lines.p[s * 6 + i] = lo[i];
      lines.p[s * 6 + 3 + i] = mid[i];
    }
    const col = lines.c.slice(s * 6, s * 6 + 3);
    lines.p.push(...mid, ...hi);
    lines.c.push(...col, ...col);
    lines.f.push(fold, fold);
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

/** Twice the signed area of a ring in (x, z): positive when counter-clockwise. */
function ringArea(ring: Vec2[]): number {
  let a = 0;
  for (let i = 0; i < ring.length; i++) {
    const p = ring[i];
    const q = ring[(i + 1) % ring.length];
    a += p[0] * q[1] - q[0] * p[1];
  }
  return a;
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
  opts: { aoFrom?: number; fold?: number; topFold?: number; bottom?: boolean; topFace?: boolean; holes?: Vec2[][]; skipSide?: (a: Vec2, b: Vec2) => boolean } = {},
): void {
  // a top that follows a height function (a wall ending under a roof slope): planar for a wall piece
  // within one roof plane, so the top quad and the vertical sides stay flat
  const topY = typeof y1 === "number" ? () => y1 : (p: Vec2) => Math.max(y0 + 0.002, y1(p[0], p[1]));
  const aoFrom = opts.aoFrom ?? y0;
  const fold = opts.fold ?? ALWAYS;
  const k = (y: number) => 0.5 + 0.5 * Math.min(1, Math.max(0, (y - aoFrom) / 1.6));
  // holes (an area with a patch cut out): their rings run clockwise so the inner sides face the hole
  const holes = (opts.holes ?? []).map((h) => (ringArea(h) > 0 ? [...h].reverse() : h));
  const all = holes.length ? [...poly, ...holes.flat()] : poly;
  const tris = opts.topFace === false && !opts.bottom ? [] : triangulate(poly, holes);
  if (opts.topFace !== false) {
    const topC = new Color(top);
    for (const [i, j, l] of tris) {
      // polygon is counter-clockwise in (x, z); seen from above (+y) that is clockwise, so swap
      const a = all[i];
      const b = all[j];
      const c = all[l];
      buf.tri([a[0], topY(a), a[1]], [c[0], topY(c), c[1]], [b[0], topY(b), b[1]], topC, topC, topC, undefined, opts.topFold ?? fold);
    }
  }
  if (opts.bottom) {
    const botC = shade(side, 0.55);
    for (const [i, j, l] of tris) {
      const a = all[i];
      const b = all[j];
      const c = all[l];
      buf.tri([a[0], y0, a[1]], [b[0], y0, b[1]], [c[0], y0, c[1]], botC, botC, botC, undefined, fold);
    }
  }
  for (const ring of [poly, ...holes]) for (let i = 0; i < ring.length; i++) {
    const a = ring[i];
    const b = ring[(i + 1) % ring.length];
    const dx = b[0] - a[0];
    const dz = b[1] - a[1];
    const l = Math.hypot(dx, dz);
    if (l < 1e-6 || opts.skipSide?.(a, b)) continue;
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

