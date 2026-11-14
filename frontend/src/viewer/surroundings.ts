// The neighbourhood from OpenStreetMap in 3D (see ../surroundings.ts): the neighbours' buildings as blocks of their
// height with neon edges, streets, paths, railways and water as flat ribbons on the ground, parks, woods and water as
// flat areas, single trees as small stacked crowns. All of it goes into the ground floor's geometry once – nothing
// moves, nothing is drawn per frame.

import { Color } from "three";
import type { Vec2 } from "../model.ts";
import { signedArea } from "../model.ts";
import type { PlacedSurroundings } from "../surroundings.ts";
import { ALWAYS, type GeoBuffer, type LineBuffer, pushPrism, shade, triangulate } from "./geo.ts";
import { palette } from "./palette.ts";

const LOOK = palette(
  {
    side: 0x111730,
    top: 0x18213d,
    edge: 0x5b7cff,
    edgeAlpha: 0.38,
    road: 0x121827,
    path: 0x19213a,
    rail: 0x22182e,
    water: 0x0b3a5a,
    green: 0x0d2620,
    wood: 0x0a1f18,
    trunk: 0x2a2238,
    crown: 0x16402f,
    crownEdge: 0x3de0a0,
    crownAlpha: 0.22,
  },
  {
    side: 0xe4dfd7,
    top: 0xd3cdc4,
    edge: 0x5b7cff,
    edgeAlpha: 0.08,
    road: 0x8f8d89,
    path: 0xc9c1b3,
    rail: 0x8a7f74,
    water: 0x7fb6d6,
    green: 0x9cc083,
    wood: 0x7aa265,
    trunk: 0x7a5a3e,
    crown: 0x5f8f4e,
    crownEdge: 0x3de0a0,
    crownAlpha: 0.05,
  },
);

const ccw = (p: Vec2[]): Vec2[] => (signedArea(p) >= 0 ? p : [...p].reverse());

/** A flat polygon at height y (no sides). */
function flat(buf: GeoBuffer, poly: Vec2[], y: number, color: Color): void {
  if (poly.length < 3) return;
  const ring = ccw(poly);
  // wound like a prism's top (a, c, b): facing up
  for (const [i, j, k] of triangulate(ring)) buf.tri([ring[i][0], y, ring[i][1]], [ring[k][0], y, ring[k][1]], [ring[j][0], y, ring[j][1]], color, color, color, undefined, ALWAYS);
}

/** A regular polygon around a point (n corners, radius r). */
function disc(c: Vec2, r: number, n = 8): Vec2[] {
  return Array.from({ length: n }, (_, i) => {
    const a = (i / n) * Math.PI * 2;
    return [c[0] + Math.cos(a) * r, c[1] + Math.sin(a) * r] as Vec2;
  });
}

/** A line of width w as a flat ribbon: a quad per segment and a disc at each joint, so bends have no gaps. */
function ribbon(buf: GeoBuffer, pts: Vec2[], w: number, y: number, color: Color): void {
  const h = w / 2;
  for (let i = 0; i + 1 < pts.length; i++) {
    const [ax, az] = pts[i];
    const [bx, bz] = pts[i + 1];
    const len = Math.hypot(bx - ax, bz - az);
    if (len < 1e-3) continue;
    const nx = (-(bz - az) / len) * h;
    const nz = ((bx - ax) / len) * h;
    flat(buf, [[ax + nx, az + nz], [bx + nx, bz + nz], [bx - nx, bz - nz], [ax - nx, az - nz]], y, color);
  }
  for (let i = 1; i + 1 < pts.length; i++) flat(buf, disc(pts[i], h, 8), y, color);
}

/**
 * Pushes the neighbourhood (in plan coordinates) into a floor's buffers, standing on `ground` (floor coordinates).
 * Areas lie lowest, then water, paths and streets just above them – all below the lawn of the plot, so the garden
 * drawn in the plan covers whatever the map has there.
 */
export function pushSurroundings(buf: GeoBuffer, lines: LineBuffer, s: PlacedSurroundings, ground: number): void {
  const L = LOOK;
  for (const a of s.areas) flat(buf, a.p, ground + (a.k === "water" ? 0.004 : 0.002), new Color(L[a.k]));
  for (const w of s.ways) {
    const y = ground + (w.k === "road" ? 0.008 : w.k === "water" ? 0.005 : 0.006);
    ribbon(buf, w.p, Math.max(0.6, w.w), y, new Color(L[w.k]));
  }
  const edge = shade(L.edge, L.edgeAlpha);
  if (s.flat) {
    // only the outline on the ground: a faint floor and a brighter edge (no blocks, no shadows)
    const outline = shade(L.edge, Math.min(1, L.edgeAlpha * 1.8));
    for (const b of s.buildings) {
      if (b.p.length < 3) continue;
      const poly = ccw(b.p);
      flat(buf, poly, ground + 0.01, new Color(L.top));
      for (let i = 0; i < poly.length; i++) {
        const p = poly[i];
        const q = poly[(i + 1) % poly.length];
        lines.seg([p[0], ground + 0.02, p[1]], [q[0], ground + 0.02, q[1]], outline, ALWAYS);
      }
    }
  }
  for (const b of s.flat ? [] : s.buildings) {
    if (b.p.length < 3) continue;
    const poly = ccw(b.p);
    const top = ground + Math.max(1, b.h);
    pushPrism(buf, poly, ground, top, L.side, L.top, { aoFrom: ground });
    // neon edges: the outline at the top and the corners down to the ground
    for (let i = 0; i < poly.length; i++) {
      const p = poly[i];
      const q = poly[(i + 1) % poly.length];
      lines.seg([p[0], top, p[1]], [q[0], top, q[1]], edge, ALWAYS);
      lines.seg([p[0], ground, p[1]], [p[0], top, p[1]], edge, ALWAYS);
    }
  }
  const crownEdge = shade(L.crownEdge, L.crownAlpha);
  for (const t of s.trees) {
    pushPrism(buf, disc(t, 0.18, 6), ground, ground + 1.8, L.trunk, L.trunk, { aoFrom: ground });
    // three stacked crowns, the widest at the bottom
    for (const [r, y0, y1] of [
      [1.8, 1.6, 3.0],
      [1.3, 3.0, 4.1],
      [0.7, 4.1, 4.9],
    ] as const) {
      const ring = disc(t, r, 8);
      pushPrism(buf, ring, ground + y0, ground + y1, L.crown, L.crown, { aoFrom: ground });
      for (let i = 0; i < ring.length; i++) {
        const p = ring[i];
        const q = ring[(i + 1) % ring.length];
        lines.seg([p[0], ground + y1, p[1]], [q[0], ground + y1, q[1]], crownEdge, ALWAYS);
      }
    }
  }
}
