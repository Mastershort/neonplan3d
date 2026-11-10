// Room lighting without real-time lights: floors and the inner faces of walls are covered by a fine
// grid of quads (the "light surface"). Every vertex knows its room and the direction it faces; its
// colour is the sum of the lamps of the same room (soft falloff, facing, lamp characteristic). Light
// reaches a neighbouring room only through doors, and walls cast a shadow within a room (a free-standing
// drywall, the inner corner of an L-shaped room, #300). The surface is built once per floor plan, colours are
// recomputed when a light changes – a few thousand vertices times a few lamps, well below a millisecond.

import type { Floor, Vec2 } from "../model.ts";
import { outdoorSurface } from "./outdoor.ts";
import { groundDrop, outdoorStanding, pointInPolygon } from "../model.ts";
import { slopeTop, type Wall } from "../geometry/walls.ts";
import type { OpeningInfo } from "./build.ts";
import { LOWER_OFFSET, triangulate } from "./geo.ts";
import { clipConvex } from "../geometry/area.ts";

/** How a lamp spreads its light. */
export type LightKind = "omni" | "ceiling" | "spot" | "pendant" | "up" | "wall";

export interface LightSource {
  x: number;
  y: number;
  z: number;
  /** Linear colour 0..1 per channel. */
  color: [number, number, number];
  /** Brightness 0..1. */
  level: number;
  kind: LightKind;
  /** Index of the room (floor.rooms) the lamp is in. */
  room: number;
}

export interface LightSurface {
  /** Vertex positions (x, y, z), six vertices per quad. */
  pos: Float32Array;
  /** Direction each vertex faces (x, y, z). */
  normal: Float32Array;
  /** Room index per vertex. */
  room: Int16Array;
  /** Fold value per vertex (see build.ts), so light on walls follows cut and glass walls. */
  fold: Float32Array;
  /** Doors between two rooms: light leaks through them. */
  doors: { id: string; a: number; b: number; x: number; y: number; z: number }[];
  /** Walls as light blockers: centre line, height, the rooms on both sides and their openings. */
  blockers: Blocker[];
  /** Index of the outside zone (rooms.length). */
  outside?: number;
}

/** A wall that stops light within the rooms it borders (openings let it through). */
export interface Blocker {
  a: Vec2;
  b: Vec2;
  /** Height of the wall (at its end a). */
  h: number;
  /** A sloping wall's height at its end b: the top runs straight from `h` to it (#821). */
  h1?: number;
  /** Room (light zone) index on each side; the outside zone for the outer side of an exterior wall. */
  ra: number;
  rb: number;
  /** Openings along the wall: s from a in metres, y from the floor. */
  gaps: { s0: number; s1: number; y0: number; y1: number }[];
}

const LIFT = 0.012;
const FACE_GAP = 0.012;

/**
 * Builds the light surface of a floor: a grid of `cell` metres on every room floor and strips on the
 * room side of every wall face, split at the cut height and left out where doors and windows are.
 */
export function buildLightSurface(
  floor: Floor,
  walls: Wall[],
  wallBuckets: number[],
  openings: OpeningInfo[],
  cell: number,
  holes: Vec2[][] = [],
  roofUnder?: (x: number, z: number) => number | null,
): LightSurface {
  const pos: number[] = [];
  const normal: number[] = [];
  const room: number[] = [];
  const fold: number[] = [];
  const quad = (a: number[], b: number[], c: number[], d: number[], n: number[], r: number, f: number) => {
    for (const v of [a, b, c, a, c, d]) {
      pos.push(v[0], v[1], v[2]);
      normal.push(n[0], n[1], n[2]);
      room.push(r);
      fold.push(f);
    }
  };

  // floors: the grid's cells, cut to the room – a cell the room's edge runs through keeps only its part inside, so the
  // light reaches every wall (no dark strip where a wall is off the grid) and never spills past it (#300)
  floor.rooms.forEach((r, ri) => {
    if (r.points.length < 3) return;
    const xs = r.points.map((p) => p[0]);
    const zs = r.points.map((p) => p[1]);
    const x0 = Math.min(...xs);
    const z0 = Math.min(...zs);
    const x1 = Math.max(...xs);
    const z1 = Math.max(...zs);
    const nx = Math.max(1, Math.ceil((x1 - x0) / cell));
    const nz = Math.max(1, Math.ceil((z1 - z0) / cell));
    for (let i = 0; i < nx; i++) {
      for (let j = 0; j < nz; j++) {
        const a = x0 + i * cell;
        const b = z0 + j * cell;
        // the last row and column end at the room's bounds (a cell never lies twice in a passage, #290)
        const a1 = Math.min(a + cell, x1);
        const b1 = Math.min(b + cell, z1);
        const part = clipConvex(r.points, [
          [a, b],
          [a1, b],
          [a1, b1],
          [a, b1],
        ]);
        const area = part.length >= 3 ? Math.abs(shoelace(part)) : 0;
        if (area < 1e-4) continue;
        // no light over a floor opening: one looks through it
        const mid = centroid(part);
        if (holes.some((h) => pointInPolygon(mid, h))) continue;
        if (area > (a1 - a) * (b1 - b) - 1e-6) {
          quad([a, LIFT, b], [a, LIFT, b1], [a1, LIFT, b1], [a1, LIFT, b], [0, 1, 0], ri, -1);
          continue;
        }
        // a cut cell: its triangles, each drawn as a quad with a repeated corner (the surface is read in quads)
        for (const [i0, i1, i2] of triangulate(part)) {
          let p0 = part[i0];
          let p2 = part[i2];
          const p1 = part[i1];
          // facing up like the whole cells
          if ((p1[1] - p0[1]) * (p2[0] - p0[0]) - (p1[0] - p0[0]) * (p2[1] - p0[1]) < 0) [p0, p2] = [p2, p0];
          quad([p0[0], LIFT, p0[1]], [p1[0], LIFT, p1[1]], [p2[0], LIFT, p2[1]], [p2[0], LIFT, p2[1]], [0, 1, 0], ri, -1);
        }
      }
    }
  });

  // outside: one zone (index rooms.length) for all outdoor areas and the outer faces of the walls. All areas share
  // one grid, and every spot of a cell belongs to the area on top there: a pool, an area cut into another, else the
  // one with the higher surface (the slab over its beams), else the one listed last. Each cell is cut to the areas
  // it lies on, so the light ends at a surface's edge – no lit overhang past it, no dark strip along it (#957) – and
  // neighbouring or overlapping areas never light a spot twice (#341). A sloped area's cells follow its slope.
  const outside = floor.rooms.length;
  const flat = (floor.outdoor ?? []).filter((a) => a.points.length >= 3 && !outdoorStanding(a.type));
  if (flat.length) {
    const xs = flat.flatMap((a) => a.points.map((p) => p[0]));
    const zs = flat.flatMap((a) => a.points.map((p) => p[1]));
    const x0 = Math.floor(Math.min(...xs) / cell) * cell;
    const z0 = Math.floor(Math.min(...zs) / cell) * cell;
    const nx = Math.max(1, Math.ceil((Math.max(...xs) - x0) / cell));
    const nz = Math.max(1, Math.ceil((Math.max(...zs) - z0) / cell));
    const yAt = (a: (typeof flat)[number], x: number, z: number) => outdoorSurface(floor, a) - groundDrop(floor, a, x, z) + LIFT;
    const order = flat
      .map((a, i) => ({ a, i, top: outdoorSurface(floor, a), box: boxOf(a.points), convex: isConvexRing(a.points) }))
      .sort((p, q) => +(q.a.type === "pool") - +(p.a.type === "pool") || +!!q.a.cut - +!!p.a.cut || q.top - p.top || q.i - p.i)
      .map((o) => ({ ...o, parts: o.convex ? [o.a.points] : triangulate([...o.a.points]).map((t) => t.map((k) => o.a.points[k])) }));
    const tri = (a: (typeof flat)[number], part: Vec2[]) => {
      for (const [i0, i1, i2] of triangulate(part)) {
        let p0 = part[i0];
        let p2 = part[i2];
        const p1 = part[i1];
        if ((p1[1] - p0[1]) * (p2[0] - p0[0]) - (p1[0] - p0[0]) * (p2[1] - p0[1]) < 0) [p0, p2] = [p2, p0];
        const v2: [number, number, number] = [p2[0], yAt(a, p2[0], p2[1]), p2[1]];
        quad([p0[0], yAt(a, p0[0], p0[1]), p0[1]], [p1[0], yAt(a, p1[0], p1[1]), p1[1]], v2, v2, [0, 1, 0], outside, -1);
      }
    };
    for (let i = 0; i < nx; i++) {
      for (let j = 0; j < nz; j++) {
        const px = x0 + i * cell;
        const pz = z0 + j * cell;
        const full: Vec2[] = [
          [px, pz],
          [px + cell, pz],
          [px + cell, pz + cell],
          [px, pz + cell],
        ];
        // what of the cell is still free (convex pieces), handed down from the area on top to the ones below
        let free: Vec2[][] = [full];
        for (const o of order) {
          if (!free.length) break;
          if (o.box[0] >= px + cell || o.box[2] <= px || o.box[1] >= pz + cell || o.box[3] <= pz) continue;
          const next: Vec2[][] = [];
          for (const piece of free) {
            const part = clipConvex(o.a.points, piece);
            const area = part.length >= 3 ? Math.abs(shoelace(part)) : 0;
            if (area < 1e-4) {
              next.push(piece);
              continue;
            }
            if (piece === full && area > cell * cell - 1e-6) {
              const v = (x: number, z: number): [number, number, number] => [x, yAt(o.a, x, z), z];
              quad(v(px, pz), v(px, pz + cell), v(px + cell, pz + cell), v(px + cell, pz), [0, 1, 0], outside, -1);
              continue;
            }
            tri(o.a, part);
            // the rest of the piece goes on to the areas below
            let rest: Vec2[][] = [piece];
            for (const conv of o.parts) rest = rest.flatMap((r) => minusConvex(r, conv));
            next.push(...rest.filter((r) => r.length >= 3 && Math.abs(shoelace(r)) > 1e-4));
          }
          free = next;
        }
      }
    }
  }

  // walls: the face towards each room
  const cut = Math.min(floor.cut_height, floor.height);
  const blockers: Blocker[] = [];
  walls.forEach((w, wi) => {
    // rows of light cells up to the wall's own height
    const H = Math.min(floor.height, w.height ?? floor.height);
    const c = Math.min(cut, H - 0.02);
    const dx = w.b[0] - w.a[0];
    const dz = w.b[1] - w.a[1];
    const len = Math.hypot(dx, dz);
    if (len < 0.05) return;
    const u: Vec2 = [dx / len, dz / len];
    const nLeft: Vec2 = [-u[1], u[0]];
    const bucket = wallBuckets[wi];
    const gaps = openingSpans(w, u, len, openings);
    const sideRoom = (id: string | null, outer: boolean) => (id ? floor.rooms.findIndex((r) => r.id === id) : outer ? outside : -1);
    // a sloping wall blocks the light only below its slope (#821)
    const ends = w.slope ? { h: Math.min(H, slopeTop(w.slope, w.a[0], w.a[1])), h1: Math.min(H, slopeTop(w.slope, w.b[0], w.b[1])) } : { h: H };
    blockers.push({ a: w.a, b: w.b, ...ends, ra: sideRoom(w.roomLeft, false), rb: sideRoom(w.roomRight, w.exterior), gaps });
    // the cells break at the cut and at every sill, top and side of an opening, so the hole a window
    // leaves in the lit face matches the window (a cell is lit or dark as a whole)
    const marks = (vals: number[], lo: number, hi: number) =>
      [lo, hi, ...vals.filter((v) => v > lo + 0.005 && v < hi - 0.005)].sort((a, b) => a - b).filter((v, i, a) => i === 0 || v > a[i - 1] + 0.005);
    const rows = marks([c, (c + H) / 2, ...gaps.flatMap((g) => [g.y0 + 0.01, g.y1 - 0.01])], 0.02, H - 0.02);
    const cols = marks(gaps.flatMap((g) => [g.s0, g.s1]), 0, len);
    for (const side of [1, -1] as const) {
      const roomId = side > 0 ? w.roomLeft : w.roomRight;
      // the outer face of an exterior wall belongs to the outside zone (facade lighting)
      const ri = roomId ? floor.rooms.findIndex((r) => r.id === roomId) : w.exterior ? outside : -1;
      if (ri < 0) continue;
      const face = (side > 0 ? w.left : w.right) + FACE_GAP;
      const n: Vec2 = [nLeft[0] * side, nLeft[1] * side];
      const at = (s: number, y: number) => [w.a[0] + u[0] * s + n[0] * face, y, w.a[1] + u[1] * s + n[1] * face];
      // the lit face ends below the roof slope and below the wall's own slope (#821)
      const under = (s: number) => {
        const p = at(s, 0);
        const y = roofUnder?.(p[0], p[2]);
        const own = w.slope ? slopeTop(w.slope, w.a[0] + u[0] * s, w.a[1] + u[1] * s) - 0.02 : Infinity;
        return Math.min(y == null ? Infinity : y - 0.02, own);
      };
      for (let p = 0; p < cols.length - 1; p++) {
        const span = cols[p + 1] - cols[p];
        const steps = Math.max(1, Math.ceil(span / cell));
        for (let k = 0; k < steps; k++) {
          const s0 = cols[p] + (span / steps) * k;
          const s1 = cols[p] + (span / steps) * (k + 1);
          const sm = (s0 + s1) / 2;
          for (let h = 0; h < rows.length - 1; h++) {
            const y0 = rows[h];
            const y1 = rows[h + 1];
            if (y1 - y0 < 0.01) continue;
            const ym = (y0 + y1) / 2;
            if (gaps.some((g) => sm > g.s0 && sm < g.s1 && ym > g.y0 && ym < g.y1)) continue;
            const f = y0 >= cut - 1e-6 ? bucket : LOWER_OFFSET + bucket;
            // under a roof slope the lit face ends where the wall does (#201)
            const topA = Math.min(y1, under(s0));
            const topB = Math.min(y1, under(s1));
            if (topA <= y0 + 0.005 && topB <= y0 + 0.005) continue;
            // the top crosses the cell's lower edge: only the triangle below the top is lit, the rest of the
            // cell would stand out over the slope (#821)
            if (topA < y0 || topB < y0) {
              const sx = s0 + ((s1 - s0) * (y0 - topA)) / (topB - topA);
              if (topA < y0) quad(at(sx, y0), at(s1, y0), at(s1, topB), at(sx, y0), [n[0], 0, n[1]], ri, f);
              else quad(at(s0, y0), at(sx, y0), at(sx, y0), at(s0, topA), [n[0], 0, n[1]], ri, f);
              continue;
            }
            quad(at(s0, y0), at(s1, y0), at(s1, topB), at(s0, topA), [n[0], 0, n[1]], ri, f);
          }
        }
      }
    }
  });

  // doors between two rooms
  const doors: LightSurface["doors"] = [];
  for (const o of openings) {
    if (o.opening.type !== "door") continue;
    // on the wall piece the door's middle lies in: several rooms' walls can share one straight line (#444)
    const w = walls.find((wall) => onWall(wall, o) && withinWall(wall, o));
    if (!w || !w.roomLeft || !w.roomRight) continue;
    const a = floor.rooms.findIndex((r) => r.id === w.roomLeft);
    const b = floor.rooms.findIndex((r) => r.id === w.roomRight);
    if (a < 0 || b < 0) continue;
    doors.push({ id: o.opening.id, a, b, x: o.start[0] + o.axis[0] * (o.width / 2), y: Math.min(1.1, o.top * 0.55), z: o.start[1] + o.axis[1] * (o.width / 2) });
  }
  return { pos: new Float32Array(pos), normal: new Float32Array(normal), room: Int16Array.from(room), fold: new Float32Array(fold), doors, blockers, outside };
}

function onWall(w: Wall, o: OpeningInfo): boolean {
  const dx = w.b[0] - w.a[0];
  const dz = w.b[1] - w.a[1];
  const len = Math.hypot(dx, dz) || 1;
  const off = Math.abs((o.start[0] - w.a[0]) * dz - (o.start[1] - w.a[1]) * dx) / len;
  return off < 0.02 && Math.abs((o.axis[0] * dx + o.axis[1] * dz) / len) > 0.99;
}

/** The middle of an opening lies within a wall's length (5 cm to spare at its ends). */
function withinWall(w: Wall, o: OpeningInfo): boolean {
  const dx = w.b[0] - w.a[0];
  const dz = w.b[1] - w.a[1];
  const len = Math.hypot(dx, dz) || 1;
  const mx = o.start[0] + o.axis[0] * (o.width / 2);
  const mz = o.start[1] + o.axis[1] * (o.width / 2);
  const s = ((mx - w.a[0]) * dx + (mz - w.a[1]) * dz) / len;
  return s > -0.05 && s < len + 0.05;
}

/** Door and window areas on a wall, along its axis (s from wall.a) and in height. */
function openingSpans(w: Wall, u: Vec2, len: number, openings: OpeningInfo[]): { s0: number; s1: number; y0: number; y1: number }[] {
  const out: { s0: number; s1: number; y0: number; y1: number }[] = [];
  for (const o of openings) {
    if (!onWall(w, o)) continue;
    const s = (o.start[0] - w.a[0]) * u[0] + (o.start[1] - w.a[1]) * u[1];
    const forward = o.axis[0] * u[0] + o.axis[1] * u[1] > 0;
    const s0 = forward ? s : s - o.width;
    if (s0 > len || s0 + o.width < 0) continue;
    out.push({ s0, s1: s0 + o.width, y0: o.sill - 0.01, y1: o.top + 0.01 });
  }
  return out;
}

// ------------------------------------------------------------------ light

/** Share of the light a lamp sends in a direction (dy = vertical part of the unit vector lamp -> point). */
function characteristic(kind: LightKind, dy: number): number {
  const down = Math.max(0, -dy);
  const up = Math.max(0, dy);
  switch (kind) {
    case "ceiling":
      return 0.3 + 0.7 * down;
    case "spot":
      return 0.06 + 0.94 * down ** 5;
    case "pendant":
      return 0.25 + 0.85 * down ** 2 + 0.2 * up;
    case "up":
      return 0.25 + 0.75 * up;
    case "wall":
      return 0.45 + 0.35 * Math.abs(dy);
    default:
      return 1;
  }
}

/** Reach of a lamp (distance at which its light has fallen to half). */
function reach(s: { level: number; kind: LightKind }): number {
  const base = s.kind === "spot" ? 2.0 : s.kind === "wall" ? 1.4 : 2.4;
  return base * (0.55 + 0.45 * s.level);
}

function contribution(s: LightSource, px: number, py: number, pz: number, nx: number, ny: number, nz: number): number {
  const dx = px - s.x;
  const dy = py - s.y;
  const dz = pz - s.z;
  const d2 = dx * dx + dy * dy + dz * dz;
  const d = Math.sqrt(d2) || 1e-6;
  const r = reach(s);
  // squared falloff keeps a bright pool under the lamp and dark corners (the neon look lives on contrast)
  const q = 1 / (1 + d2 / (r * r));
  const atten = q * Math.sqrt(q);
  // surfaces facing the lamp get more light; a floor directly below a lamp faces it fully
  const facing = Math.max(0, -(dx * nx + dy * ny + dz * nz) / d);
  return s.level * atten * (0.2 + 0.8 * facing) * characteristic(s.kind, dy / d);
}

/**
 * Colours of the light surface (r, g, b per vertex) for the given lamps. Lamps light their own room;
 * through a door, a room passes on part of the light that reaches the doorway (`doorOpen` 0..1 per
 * door index, default half open).
 */
export function lightColors(surface: LightSurface, sources: LightSource[], strength = 0.7, doorOpen: number[] = []): Float32Array {
  const all = [...sources];
  surface.doors.forEach((door, i) => {
    const open = doorOpen[i] ?? 0.5;
    if (open <= 0.01) return;
    for (const [from, to] of [
      [door.a, door.b],
      [door.b, door.a],
    ]) {
      const c: [number, number, number] = [0, 0, 0];
      // only walls of the room the light comes from can stand between a lamp and its doorway
      const walls = surface.blockers.filter((w) => w.ra === from || w.rb === from);
      for (const s of sources) {
        if (s.room !== from) continue;
        // a lamp behind a wall of its own room (round the corner of an L, behind a pillar) sends nothing through the
        // door: its light would pass through the walls into the next room or out onto the terrace (#954)
        if (walls.length && shadowed(s, walls, door.x, door.y, door.z)) continue;
        // the doorway takes the light as if it faced the lamp
        const tx = s.x - door.x;
        const ty = s.y - door.y;
        const tz = s.z - door.z;
        const tl = Math.hypot(tx, ty, tz) || 1;
        const k = contribution(s, door.x, door.y, door.z, tx / tl, ty / tl, tz / tl);
        c[0] += s.color[0] * k;
        c[1] += s.color[1] * k;
        c[2] += s.color[2] * k;
      }
      const level = Math.max(c[0], c[1], c[2]);
      if (level < 0.01) continue;
      // in steps of 2 %: a colour effect changes it a little all the time, and every step would be new to the cache
      all.push({ x: door.x, y: door.y, z: door.z, color: [c[0] / level, c[1] / level, c[2] / level], level: Math.round(Math.min(1, level * 0.9 * (0.35 + 0.65 * open)) * 50) / 50, kind: "wall", room: to });
    }
  });
  const cache = cacheOf(surface);
  const { pos, room } = surface;
  const sum = new Float32Array(pos.length);
  const used = new Set<string>();
  for (const s of all) {
    const weights = weightsOf(surface, cache, s);
    used.add(weights.key);
    // warm light stays warm on the blue floor (the same curve as before)
    const c = s.color.map((v) => Math.pow(v, 1.5));
    const { verts, k } = weights;
    for (let n = 0; n < verts.length; n++) {
      const i = verts[n] * 3;
      sum[i] += c[0] * k[n];
      sum[i + 1] += c[1] * k[n];
      sum[i + 2] += c[2] * k[n];
    }
  }
  // only the lamps of now are kept (a colour effect keeps the same ones, a switched lamp drops out)
  for (const key of cache.weights.keys()) if (!used.has(key)) cache.weights.delete(key);
  const out = new Float32Array(pos.length);
  for (let v = 0; v < room.length; v++) {
    const i = v * 3;
    // soft saturation: several lamps add up without clipping to flat white
    if (sum[i] || sum[i + 1] || sum[i + 2]) {
      out[i] = 1 - Math.exp(-sum[i] * strength * 1.6);
      out[i + 1] = 1 - Math.exp(-sum[i + 1] * strength * 1.6);
      out[i + 2] = 1 - Math.exp(-sum[i + 2] * strength * 1.6);
    }
  }
  return out;
}

/**
 * How much of a lamp reaches each vertex of its room (walls of its own room may stand between), kept per surface:
 * a colour effect only recolours the lamps, so the costly part – distances, facing, shadows – is done once (#885).
 */
interface LightCache {
  roomVerts: Map<number, Uint32Array>;
  weights: Map<string, { key: string; verts: Uint32Array; k: Float32Array }>;
}
const caches = new WeakMap<LightSurface, LightCache>();

function cacheOf(surface: LightSurface): LightCache {
  let cache = caches.get(surface);
  if (!cache) {
    const lists = new Map<number, number[]>();
    surface.room.forEach((r, v) => {
      const list = lists.get(r);
      if (list) list.push(v);
      else lists.set(r, [v]);
    });
    cache = { roomVerts: new Map([...lists].map(([r, l]) => [r, Uint32Array.from(l)])), weights: new Map() };
    caches.set(surface, cache);
  }
  return cache;
}

function weightsOf(surface: LightSurface, cache: LightCache, s: LightSource): { key: string; verts: Uint32Array; k: Float32Array } {
  const key = `${s.x},${s.y},${s.z},${s.kind},${s.level},${s.room}`;
  const known = cache.weights.get(key);
  if (known) return known;
  const verts = cache.roomVerts.get(s.room) ?? new Uint32Array(0);
  // the outside zone: every wall may stand between (an outdoor lamp never shines through the house, #954)
  const outside = surface.outside ?? -2;
  const walls = surface.blockers.filter((w) => s.room === outside || w.ra === s.room || w.rb === s.room);
  const { pos, normal } = surface;
  const k = new Float32Array(verts.length);
  for (let n = 0; n < verts.length; n++) {
    const i = verts[n] * 3;
    if (walls.length && shadowed(s, walls, pos[i], pos[i + 1], pos[i + 2])) continue;
    k[n] = contribution(s, pos[i], pos[i + 1], pos[i + 2], normal[i], normal[i + 1], normal[i + 2]);
  }
  const w = { key, verts, k };
  cache.weights.set(key, w);
  return w;
}

/**
 * Whether a wall stands between a lamp and a point: the line between them crosses the wall's centre
 * line below its top and not through an opening. A point on the lamp's side of a wall (its lit face sits
 * in front of the centre line) is never shadowed by that wall.
 */
export function shadowed(s: { x: number; y: number; z: number }, walls: readonly Blocker[], px: number, py: number, pz: number): boolean {
  const dx = px - s.x;
  const dz = pz - s.z;
  for (const w of walls) {
    const ex = w.b[0] - w.a[0];
    const ez = w.b[1] - w.a[1];
    const den = dx * ez - dz * ex;
    if (Math.abs(den) < 1e-9) continue;
    const ax = w.a[0] - s.x;
    const az = w.a[1] - s.z;
    // t along lamp -> point, k along the wall a -> b
    const t = (ax * ez - az * ex) / den;
    if (t <= 1e-6 || t >= 1 - 1e-6) continue;
    const k = (ax * dz - az * dx) / den;
    if (k < 0 || k > 1) continue;
    const y = s.y + (py - s.y) * t;
    if (y >= (w.h1 === undefined ? w.h : w.h + (w.h1 - w.h) * k)) continue;
    const along = k * Math.hypot(ex, ez);
    if (w.gaps.some((g) => along > g.s0 && along < g.s1 && y > g.y0 && y < g.y1)) continue;
    return true;
  }
  return false;
}

/**
 * How far a window's light at night reaches out over the ground (at most `reach`): it ends where the ground
 * under it leaves the level at the window's foot – the edge of a balcony or a terrace (#822). `groundAt(s, d)`
 * is the ground at `s` across the patch (0–1) and `d` metres out.
 */
export function spillLength(groundAt: (s: number, d: number) => number, foot: number, reach: number): number {
  for (let d = 0.1; d < reach; d += 0.1) if ([0.1, 0.5, 0.9].some((s) => Math.abs(groundAt(s, d) - foot) > 0.1)) return d - 0.05;
  return reach;
}

/** A window as a lamp sees it: its wall axis, the direction out of the room and its extent. */
export interface WindowFrame {
  start: Vec2;
  axis: Vec2;
  /** Unit normal pointing out of the room. */
  out: Vec2;
  width: number;
  sill: number;
  top: number;
}

/**
 * The patch of ground a lamp lights through a window: the lamp's rays pass the opening and land outside,
 * shifted away from the lamp – a lamp standing to the left lights the ground to the right of the window, and
 * the wall beside the window shades the ground in front of it (#954). `D` is the lamp's distance from the wall
 * axis, `ls` its position along the axis; `d0`/`d1` are where the patch begins (below the sill's shadow) and
 * ends (the top edge's ray, or `maxOut` when the lamp sits below the top). `edge(d)` gives the patch's lateral
 * span along the axis `d` metres out. Null when the lamp stands outside, below the sill or too far away.
 */
export function windowCast(lamp: { x: number; y: number; z: number }, win: WindowFrame, ground: number, maxOut: number): { d0: number; d1: number; D: number; ls: number; edge(d: number): [number, number] } | null {
  const rx = lamp.x - win.start[0];
  const rz = lamp.z - win.start[1];
  const D = -(rx * win.out[0] + rz * win.out[1]);
  const ls = rx * win.axis[0] + rz * win.axis[1];
  if (D < 0.05 || lamp.y <= win.sill + 0.05) return null;
  const d0 = (D * (win.sill - ground)) / (lamp.y - win.sill);
  if (d0 >= maxOut) return null;
  const d1 = lamp.y > win.top + 0.05 ? Math.min(maxOut, (D * (win.top - ground)) / (lamp.y - win.top)) : maxOut;
  if (d1 - d0 < 0.1) return null;
  // a lamp right at the window would fan its light out sideways without end: for the width it counts as a metre away
  const Dw = Math.max(D, 1);
  return {
    d0,
    d1,
    D,
    ls,
    edge(d) {
      const t = 1 + d / Dw;
      return [ls - ls * t, ls + (win.width - ls) * t];
    },
  };
}

/** Index of the room a point lies in; outside every room: the outside zone (rooms.length). */
export function roomIndexAt(floor: Floor, x: number, z: number): number {
  const i = floor.rooms.findIndex((r) => r.points.length >= 3 && pointInPolygon([x, z], r.points));
  return i < 0 ? floor.rooms.length : i;
}

/**
 * The light zone a room index belongs to. Indices past the zone list (the outside zone, rooms.length)
 * and -1 keep their own number, so outdoor lamps still light the lawn when rooms are joined (#160).
 */
export function zoneOf(zones: number[] | null, room: number): number {
  return zones && room >= 0 && room < zones.length ? zones[room] : room;
}

function shoelace(p: readonly Vec2[]): number {
  let a = 0;
  for (let i = 0; i < p.length; i++) {
    const q = p[(i + 1) % p.length];
    a += p[i][0] * q[1] - q[0] * p[i][1];
  }
  return a / 2;
}

function centroid(p: readonly Vec2[]): Vec2 {
  let x = 0;
  let z = 0;
  for (const [px, pz] of p) {
    x += px;
    z += pz;
  }
  return [x / p.length, z / p.length];
}

/** Bounds of a ring: [minX, minZ, maxX, maxZ]. */
function boxOf(p: readonly Vec2[]): [number, number, number, number] {
  const xs = p.map((q) => q[0]);
  const zs = p.map((q) => q[1]);
  return [Math.min(...xs), Math.min(...zs), Math.max(...xs), Math.max(...zs)];
}

function isConvexRing(p: readonly Vec2[]): boolean {
  let sign = 0;
  for (let i = 0; i < p.length; i++) {
    const a = p[i];
    const b = p[(i + 1) % p.length];
    const c = p[(i + 2) % p.length];
    const cross = (b[0] - a[0]) * (c[1] - b[1]) - (b[1] - a[1]) * (c[0] - b[0]);
    if (Math.abs(cross) < 1e-9) continue;
    if (sign && Math.sign(cross) !== sign) return false;
    sign = Math.sign(cross);
  }
  return true;
}

/** The part of a convex polygon on one side of the line a → b (keep 1: the left side, -1: the right). */
function halfPlane(poly: readonly Vec2[], a: Vec2, b: Vec2, keep: 1 | -1): Vec2[] {
  const side = (p: Vec2) => keep * ((b[0] - a[0]) * (p[1] - a[1]) - (b[1] - a[1]) * (p[0] - a[0]));
  const out: Vec2[] = [];
  for (let j = 0; j < poly.length; j++) {
    const p = poly[j];
    const q = poly[(j + 1) % poly.length];
    const sp = side(p);
    const sq = side(q);
    if (sp >= 0) out.push(p);
    if (sp >= 0 !== sq >= 0) {
      const t = sp / (sp - sq);
      out.push([p[0] + (q[0] - p[0]) * t, p[1] + (q[1] - p[1]) * t]);
    }
  }
  return out;
}

/** A convex polygon minus a convex one, as convex pieces (what lies beyond each edge in turn). */
export function minusConvex(poly: readonly Vec2[], conv: readonly Vec2[]): Vec2[][] {
  const inside: 1 | -1 = shoelace(conv) > 0 ? 1 : -1;
  const out: Vec2[][] = [];
  let rest: Vec2[] = [...poly];
  for (let i = 0; i < conv.length && rest.length >= 3; i++) {
    const a = conv[i];
    const b = conv[(i + 1) % conv.length];
    const beyond = halfPlane(rest, a, b, inside === 1 ? -1 : 1);
    if (beyond.length >= 3 && Math.abs(shoelace(beyond)) > 1e-7) out.push(beyond);
    rest = halfPlane(rest, a, b, inside);
  }
  return out;
}
