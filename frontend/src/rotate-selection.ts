// Turning a part of the house as a whole: a set of rooms on one floor (a detached garage drawn
// straight that really stands at an angle to the house), with everything that belongs to them – the
// furniture and devices in them, free walls and outdoor areas inside them, the roof sections over them
// and, if asked, the rooms of the other floors over the same footprint (a loft above the garage).
// Plain geometry without Lit or three.js, so it can be tested on its own.

import type { Building, Floor, Room, RoofSection, Vec2 } from "./model.ts";
import { centroid, pointInPolygon, rotatePoint, wrapAngle } from "./model.ts";
import { dormerParent, sectionCenter, sectionRotation } from "./roof-sections.ts";

/** How far (m) a point may lie outside a room and still count as in it: furniture against a wall, a wall end on an edge. */
const ON_EDGE = 0.02;

/** Coordinates are kept to the millimetre, like everything the editor writes. */
const mm = (v: number) => Math.round(v * 1000) / 1000;

/** What to turn: rooms of one floor by an angle (degrees, clockwise in the plan) about a pivot. */
export interface RotateSelection {
  floorId: string;
  roomIds: readonly string[];
  /** Degrees, clockwise in the plan (east turns to south). */
  angle: number;
  /** The point to turn about; default: the middle of the rooms' bounding box. */
  pivot?: Vec2;
  /** Also turn the rooms of the other floors that lie over (or under) the same footprint. */
  otherFloors?: boolean;
}

/** What was turned, for a notice in the editor. */
export interface RotateResult {
  pivot: Vec2;
  rooms: number;
  furniture: number;
  placements: number;
  walls: number;
  outdoor: number;
  sections: number;
}

/** Distance from a point to a segment. */
function segDist(p: Vec2, a: Vec2, b: Vec2): number {
  const dx = b[0] - a[0];
  const dz = b[1] - a[1];
  const l2 = dx * dx + dz * dz;
  const t = l2 > 0 ? Math.max(0, Math.min(1, ((p[0] - a[0]) * dx + (p[1] - a[1]) * dz) / l2)) : 0;
  return Math.hypot(p[0] - (a[0] + dx * t), p[1] - (a[1] + dz * t));
}

/** Whether a point lies in one of the rooms, or on (within a hair of) one of their edges. */
export function inRooms(p: Vec2, rooms: readonly Room[], tolerance = ON_EDGE): boolean {
  for (const r of rooms) {
    if (r.points.length < 3) continue;
    if (pointInPolygon(p, r.points)) return true;
    for (let i = 0; i < r.points.length; i++) if (segDist(p, r.points[i], r.points[(i + 1) % r.points.length]) <= tolerance) return true;
  }
  return false;
}

/** Whether two rooms touch: a corner of one lies on an edge (or a corner) of the other. */
function touches(a: Room, b: Room, tolerance: number): boolean {
  const near = (p: Vec2, r: Room) => r.points.some((q, i) => segDist(p, q, r.points[(i + 1) % r.points.length]) <= tolerance);
  return a.points.some((p) => near(p, b)) || b.points.some((p) => near(p, a));
}

/**
 * The rooms connected to a room on its floor (touching it, and those touching them, …): the building
 * part it belongs to – the whole garage, not the house beside it as long as the two do not touch.
 */
export function connectedRooms(floor: Pick<Floor, "rooms">, roomId: string, tolerance = 0.05): string[] {
  const rooms = floor.rooms.filter((r) => r.points.length >= 3);
  const start = rooms.find((r) => r.id === roomId);
  if (!start) return [];
  const out = [start];
  for (let i = 0; i < out.length; i++) {
    for (const r of rooms) if (!out.includes(r) && touches(out[i], r, tolerance)) out.push(r);
  }
  return out.map((r) => r.id);
}

/** The middle of the rooms' bounding box: the default pivot. */
export function selectionPivot(rooms: readonly Pick<Room, "points">[]): Vec2 {
  const pts = rooms.flatMap((r) => r.points);
  if (!pts.length) return [0, 0];
  const xs = pts.map((p) => p[0]);
  const zs = pts.map((p) => p[1]);
  return [(Math.min(...xs) + Math.max(...xs)) / 2, (Math.min(...zs) + Math.max(...zs)) / 2];
}

/** A turn of the house's furniture and devices: their angle in [0, 360). */
function turnAngle(a: number, by: number): number {
  return mm((((a + by) % 360) + 360) % 360);
}

/**
 * A roof section turned about a pivot: its middle turns, its rectangle keeps its size around the new
 * middle, and the angle adds to its own turn. A free-shaped flat roof turns its polygon instead.
 */
export function rotateSection(s: RoofSection, pivot: Vec2, angle: number): void {
  if (s.points && s.points.length >= 3) {
    s.points = s.points.map((p) => {
      const q = rotatePoint(p, pivot, angle);
      return [mm(q[0]), mm(q[1])] as Vec2;
    });
    const xs = s.points.map((p) => p[0]);
    const zs = s.points.map((p) => p[1]);
    Object.assign(s, { x0: Math.min(...xs), z0: Math.min(...zs), x1: Math.max(...xs), z1: Math.max(...zs) });
    return;
  }
  const c = sectionCenter(s);
  const t = rotatePoint(c, pivot, angle);
  const dx = t[0] - c[0];
  const dz = t[1] - c[1];
  Object.assign(s, { x0: mm(s.x0 + dx), z0: mm(s.z0 + dz), x1: mm(s.x1 + dx), z1: mm(s.z1 + dz) });
  const r = wrapAngle((s.rotation ?? 0) + angle);
  s.rotation = Math.abs(r) < 1e-9 ? 0 : mm(r);
}

/**
 * Give a section a new turn (degrees): the dormers and cross gables sitting on it turn along about its
 * middle, so they stay in their slope. Changes the sections in place.
 */
export function setSectionRotation(sections: readonly RoofSection[], id: string, angle: number): void {
  const sec = sections.find((x) => x.id === id);
  if (!sec || sec.points?.length) return;
  const delta = wrapAngle(angle - sectionRotation(sec));
  // found before the turn: which ones sit on it depends on where it lies
  const kids = sections.filter((d) => d !== sec && dormerParent(sections, d) === sec);
  sec.rotation = mm(wrapAngle(angle));
  if (Math.abs(delta) < 1e-9) return;
  const c = sectionCenter(sec);
  for (const d of kids) rotateSection(d, c, delta);
}

/** Turn what lies in `rooms` on one floor (the rooms themselves included); counts go into `out`. */
function rotateOnFloor(floor: Floor, rooms: readonly Room[], pivot: Vec2, angle: number, out: RotateResult): void {
  const turn = (p: Vec2): Vec2 => {
    const q = rotatePoint(p, pivot, angle);
    return [mm(q[0]), mm(q[1])];
  };
  // everything is tested against the rooms where they stood before the turn
  const inside = (p: Vec2) => inRooms(p, rooms);
  for (const f of floor.furniture) {
    if (!inside([f.x, f.z])) continue;
    [f.x, f.z] = turn([f.x, f.z]);
    f.rotation = turnAngle(f.rotation, angle);
    out.furniture++;
  }
  for (const p of floor.placements) {
    if (!inside([p.x, p.z])) continue;
    [p.x, p.z] = turn([p.x, p.z]);
    p.rotation = turnAngle(p.rotation ?? 0, angle);
    out.placements++;
  }
  // a free wall goes along when both ends and its middle lie in the rooms (not one that only touches them)
  for (const w of floor.walls ?? []) {
    const mid: Vec2 = [(w.a[0] + w.b[0]) / 2, (w.a[1] + w.b[1]) / 2];
    if (!inside(w.a) || !inside(w.b) || !inside(mid)) continue;
    w.a = turn(w.a);
    w.b = turn(w.b);
    out.walls++;
  }
  for (const a of floor.outdoor) {
    if (a.points.length < 3 || !a.points.every(inside)) continue;
    a.points = a.points.map(turn);
    out.outdoor++;
  }
  // openings hang on a room edge (or a free wall) by an offset along it: they follow by themselves
  for (const r of rooms) {
    r.points = r.points.map(turn);
    out.rooms++;
  }
}

/**
 * Turn rooms with everything that belongs to them. Changes the building in place (the editor hands in
 * its working copy) and tells what went along.
 */
export function rotateSelection(b: Building, sel: RotateSelection): RotateResult {
  const floor = b.floors.find((f) => f.id === sel.floorId);
  const rooms = floor ? floor.rooms.filter((r) => sel.roomIds.includes(r.id) && r.points.length >= 3) : [];
  const pivot = sel.pivot ?? selectionPivot(rooms);
  const out: RotateResult = { pivot, rooms: 0, furniture: 0, placements: 0, walls: 0, outdoor: 0, sections: 0 };
  const angle = sel.angle;
  if (!floor || !rooms.length || !Number.isFinite(angle) || Math.abs(angle) < 1e-9) return out;
  // the rooms as they lie before the turn: what stands in them, over them, goes along
  const copy = (rs: readonly Room[]) => rs.map((r) => ({ ...r, points: r.points.map((p) => [p[0], p[1]] as Vec2) }));
  const turned: { floor: Floor; rooms: Room[]; before: Room[] }[] = [{ floor, rooms, before: copy(rooms) }];
  if (sel.otherFloors) {
    for (const f of b.floors) {
      if (f === floor) continue;
      const over = f.rooms.filter((r) => r.points.length >= 3 && inRooms(centroid(r.points), turned[0].before, 0));
      if (over.length) turned.push({ floor: f, rooms: over, before: copy(over) });
    }
  }
  // roof sections whose middle stands over a turned room (dormers too: they sit in the middle of their roof)
  const all = turned.flatMap((t) => t.before);
  const sections = (b.settings.roof.sections ?? []).filter((s) => {
    const c = s.points && s.points.length >= 3 ? centroid(s.points) : sectionCenter(s);
    return inRooms(c, all, 0);
  });
  for (const t of turned) rotateOnFloor(t.floor, t.rooms, pivot, angle, out);
  for (const s of sections) {
    rotateSection(s, pivot, angle);
    out.sections++;
  }
  // hand-laid cables (Energie Pro): the points inside the turned rooms of their floor
  for (const c of b.settings.roof.cables ?? []) {
    const t = turned.find((x) => x.floor.id === c.floor_id);
    if (!t) continue;
    c.points = c.points.map((p) => {
      if (!inRooms(p, t.before)) return p;
      const q = rotatePoint(p, pivot, angle);
      return [mm(q[0]), mm(q[1])] as Vec2;
    });
  }
  return out;
}
