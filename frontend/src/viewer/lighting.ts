// Room lighting without real-time lights: floors and the inner faces of walls are covered by a fine
// grid of quads (the "light surface"). Every vertex knows its room and the direction it faces; its
// colour is the sum of the lamps of the same room (soft falloff, facing, lamp characteristic). Light
// reaches a neighbouring room only through doors, and walls cast a shadow within a room (a free-standing
// drywall, the inner corner of an L-shaped room, #300). The surface is built once per floor plan, colours are
// recomputed when a light changes – a few thousand vertices times a few lamps, well below a millisecond.

import type { Floor, Vec2 } from "../model.ts";
import { outdoorSurface } from "./outdoor.ts";
import { outdoorStanding, pointInPolygon } from "../model.ts";
import type { Wall } from "../geometry/walls.ts";
import type { OpeningInfo } from "./build.ts";
import { LOWER_OFFSET } from "./geo.ts";

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
}

/** A wall that stops light within the rooms it borders (openings let it through). */
export interface Blocker {
  a: Vec2;
  b: Vec2;
  /** Height of the wall. */
  h: number;
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

  // floors: cells whose centre lies in the room
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
        const cx = x0 + (i + 0.5) * cell;
        const cz = z0 + (j + 0.5) * cell;
        if (!pointInPolygon([cx, cz], r.points)) continue;
        // no light over a floor opening: one looks through it
        if (holes.some((h) => pointInPolygon([cx, cz], h))) continue;
        const a = x0 + i * cell;
        const b = z0 + j * cell;
        // the last row and column end at the room's edge: past it they would light a strip of the
        // neighbouring room behind the wall (#300) and lie twice in a passage (#290)
        const a1 = Math.min(a + cell, x1);
        const b1 = Math.min(b + cell, z1);
        quad([a, LIFT, b], [a, LIFT, b1], [a1, LIFT, b1], [a1, LIFT, b], [0, 1, 0], ri, -1);
      }
    }
  });

  // outside: one zone (index rooms.length) for all outdoor areas and the outer faces of the walls
  const outside = floor.rooms.length;
  for (const a of floor.outdoor ?? []) {
    if (a.points.length < 3 || outdoorStanding(a.type)) continue;
    const y = outdoorSurface(floor, a) + LIFT;
    const xs = a.points.map((p) => p[0]);
    const zs = a.points.map((p) => p[1]);
    const x0 = Math.min(...xs);
    const z0 = Math.min(...zs);
    const nx = Math.max(1, Math.ceil((Math.max(...xs) - x0) / cell));
    const nz = Math.max(1, Math.ceil((Math.max(...zs) - z0) / cell));
    for (let i = 0; i < nx; i++) {
      for (let j = 0; j < nz; j++) {
        if (!pointInPolygon([x0 + (i + 0.5) * cell, z0 + (j + 0.5) * cell], a.points)) continue;
        const px = x0 + i * cell;
        const pz = z0 + j * cell;
        quad([px, y, pz], [px, y, pz + cell], [px + cell, y, pz + cell], [px + cell, y, pz], [0, 1, 0], outside, -1);
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
    blockers.push({ a: w.a, b: w.b, h: H, ra: sideRoom(w.roomLeft, false), rb: sideRoom(w.roomRight, w.exterior), gaps });
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
      const under = (s: number) => {
        const p = at(s, 0);
        const y = roofUnder?.(p[0], p[2]);
        return y == null ? Infinity : y - 0.02;
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
            quad(at(s0, y0), at(s1, y0), at(s1, Math.max(y0, topB)), at(s0, Math.max(y0, topA)), [n[0], 0, n[1]], ri, f);
          }
        }
      }
    }
  });

  // doors between two rooms
  const doors: LightSurface["doors"] = [];
  for (const o of openings) {
    if (o.opening.type !== "door") continue;
    const w = walls.find((wall) => onWall(wall, o));
    if (!w || !w.roomLeft || !w.roomRight) continue;
    const a = floor.rooms.findIndex((r) => r.id === w.roomLeft);
    const b = floor.rooms.findIndex((r) => r.id === w.roomRight);
    if (a < 0 || b < 0) continue;
    doors.push({ id: o.opening.id, a, b, x: o.start[0] + o.axis[0] * (o.width / 2), y: Math.min(1.1, o.top * 0.55), z: o.start[1] + o.axis[1] * (o.width / 2) });
  }
  return { pos: new Float32Array(pos), normal: new Float32Array(normal), room: Int16Array.from(room), fold: new Float32Array(fold), doors, blockers };
}

function onWall(w: Wall, o: OpeningInfo): boolean {
  const dx = w.b[0] - w.a[0];
  const dz = w.b[1] - w.a[1];
  const len = Math.hypot(dx, dz) || 1;
  const off = Math.abs((o.start[0] - w.a[0]) * dz - (o.start[1] - w.a[1]) * dx) / len;
  return off < 0.02 && Math.abs((o.axis[0] * dx + o.axis[1] * dz) / len) > 0.99;
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
      for (const s of sources) {
        if (s.room !== from) continue;
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
      all.push({ x: door.x, y: door.y, z: door.z, color: [c[0] / level, c[1] / level, c[2] / level], level: Math.min(1, level * 0.9 * (0.35 + 0.65 * open)), kind: "wall", room: to });
    }
  });
  const byRoom = new Map<number, (LightSource & { walls: Blocker[] })[]>();
  for (const s of all) {
    // warm light stays warm on the blue floor (the same curve as before); only the walls of its own
    // room can stand between a lamp and what it lights
    const walls = surface.blockers.filter((w) => w.ra === s.room || w.rb === s.room);
    const t = { ...s, color: s.color.map((v) => Math.pow(v, 1.5)) as [number, number, number], walls };
    byRoom.set(s.room, [...(byRoom.get(s.room) ?? []), t]);
  }
  const { pos, normal, room } = surface;
  const out = new Float32Array(pos.length);
  for (let v = 0; v < room.length; v++) {
    const list = byRoom.get(room[v]);
    if (!list) continue;
    const i = v * 3;
    let r = 0;
    let g = 0;
    let b = 0;
    for (const s of list) {
      if (s.walls.length && shadowed(s, s.walls, pos[i], pos[i + 1], pos[i + 2])) continue;
      const k = contribution(s, pos[i], pos[i + 1], pos[i + 2], normal[i], normal[i + 1], normal[i + 2]);
      r += s.color[0] * k;
      g += s.color[1] * k;
      b += s.color[2] * k;
    }
    // soft saturation: several lamps add up without clipping to flat white
    out[i] = 1 - Math.exp(-r * strength * 1.6);
    out[i + 1] = 1 - Math.exp(-g * strength * 1.6);
    out[i + 2] = 1 - Math.exp(-b * strength * 1.6);
  }
  return out;
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
    if (y >= w.h) continue;
    const along = k * Math.hypot(ex, ez);
    if (w.gaps.some((g) => along > g.s0 && along < g.s1 && y > g.y0 && y < g.y1)) continue;
    return true;
  }
  return false;
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
