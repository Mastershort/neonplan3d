// A wall seen from the front: coordinates along the wall (s, from its start), the height above the floor (y)
// and the distance into the room (d). The wall view of the editor places furniture with it; lines on walls
// (pipes, cables) can use the same frame later.

import { furnitureFootprint, pointInPolygon, type Floor, type Furniture, type Opening, type Room, type Vec2 } from "../model.ts";
import { mountBase } from "../packs.ts";
import { pointOnRoomEdge } from "./walls.ts";

export interface WallFrame {
  /** Start and end of the room edge (plan coordinates). */
  a: Vec2;
  b: Vec2;
  /** Unit direction a -> b and the unit normal pointing into the room. */
  u: Vec2;
  n: Vec2;
  length: number;
  /** Seen from inside the room, s grows to the right (false: to the left – the view mirrors it). */
  rightward: boolean;
}

/** The frame of edge `edge` of a room (points[edge] -> points[edge + 1]), its normal turned into the room. */
export function roomEdgeFrame(room: Room, edge: number): WallFrame {
  const pts = room.points;
  const a = pts[edge];
  const b = pts[(edge + 1) % pts.length];
  const length = Math.hypot(b[0] - a[0], b[1] - a[1]) || 1;
  const u: Vec2 = [(b[0] - a[0]) / length, (b[1] - a[1]) / length];
  let n: Vec2 = [-u[1], u[0]];
  // the normal points to the room's side: just inside the edge's middle lies in the room
  const mid: Vec2 = [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2];
  if (!pointInPolygon([mid[0] + n[0] * 0.02, mid[1] + n[1] * 0.02], pts)) n = [-n[0], -n[1]];
  // looking at the wall (along -n), "right" is (n.z, -n.x) in plan coordinates (x right, z down in the editor; three.js: z toward the viewer)
  const right: Vec2 = [n[1], -n[0]];
  return { a, b, u, n, length, rightward: u[0] * right[0] + u[1] * right[1] > 0 };
}

/** Plan point -> wall coordinates: s along the wall from a, d into the room. */
export function toWall(f: WallFrame, p: Vec2): { s: number; d: number } {
  const x = p[0] - f.a[0];
  const z = p[1] - f.a[1];
  return { s: x * f.u[0] + z * f.u[1], d: x * f.n[0] + z * f.n[1] };
}

/** Wall coordinates -> plan point. */
export function fromWall(f: WallFrame, s: number, d: number): Vec2 {
  return [f.a[0] + f.u[0] * s + f.n[0] * d, f.a[1] + f.u[1] * s + f.n[1] * d];
}

export interface WallItem {
  kind: "furniture" | "opening";
  id: string;
  /** Span along the wall and its height above the floor (bottom, top). */
  s0: number;
  s1: number;
  y0: number;
  y1: number;
  /** Distance of its face nearest the wall from the wall line (furniture). */
  d: number;
}

/** How far from the wall line a piece of furniture still counts as standing at (or hanging on) the wall. */
export const WALL_REACH = 0.45;

/** Doors and windows in this wall: their own on this edge, and a neighbour's on the shared wall. */
export function openingsOnWall(f: WallFrame, floor: Floor): WallItem[] {
  const out: WallItem[] = [];
  for (const o of floor.openings) {
    if (o.wall) continue;
    const host = floor.rooms.find((r) => r.id === o.room_id);
    if (!host || o.edge >= host.points.length) continue;
    const { s, d } = toWall(f, pointOnRoomEdge(host, o.edge, o.offset));
    if (Math.abs(d) > 0.4 || s < -0.05 || s > f.length + 0.05) continue;
    out.push(openingItem(o, s));
  }
  return out;
}

function openingItem(o: Opening, s: number): WallItem {
  return { kind: "opening", id: o.id, s0: s - o.width / 2, s1: s + o.width / 2, y0: o.sill, y1: o.sill + o.height, d: 0 };
}

/** Furniture at this wall (inside the room, its back within WALL_REACH of the wall, overlapping its length). */
export function furnitureOnWall(f: WallFrame, floor: Floor, room: Room): WallItem[] {
  const out: WallItem[] = [];
  for (const m of floor.furniture) {
    if (m.type === "stairwell" || m.type === "parking") continue;
    const inRoom = pointInPolygon([m.x, m.z], room.points);
    const corners = furnitureFootprint(m).map((p) => toWall(f, p));
    const d = Math.min(...corners.map((c) => c.d));
    const s0 = Math.min(...corners.map((c) => c.s));
    const s1 = Math.max(...corners.map((c) => c.s));
    // the piece's centre lies on the room's side of the wall (a sofa of the neighbouring room does not count)
    const centre = toWall(f, [m.x, m.z]);
    if (!inRoom && centre.d <= 0) continue;
    if (centre.d <= 0 || d > WALL_REACH || d < -0.3 || s1 < 0.02 || s0 > f.length - 0.02) continue;
    const y0 = mountBase(floor, m);
    out.push({ kind: "furniture", id: m.id, s0, s1, y0, y1: y0 + m.h, d });
  }
  return out;
}

/** The piece moved by ds along the wall (its plan position; turn and distance from the wall stay). */
export function slideAlong(f: WallFrame, m: Pick<Furniture, "x" | "z">, ds: number): { x: number; z: number } {
  const r = (v: number) => Math.round(v * 1000) / 1000;
  return { x: r(m.x + f.u[0] * ds), z: r(m.z + f.u[1] * ds) };
}
