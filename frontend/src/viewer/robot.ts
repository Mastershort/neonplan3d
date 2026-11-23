// Robot vacuums in 3D. Home Assistant tells the state (cleaning, returning, docked …) but usually
// not where the robot is, so while it cleans it drives lanes through the room its dock stands in,
// returns to the dock when it goes home and waits in front of the dock otherwise.

import { pointInPolygon, type Vec2 } from "../model.ts";

export type RobotMode = "cleaning" | "returning" | "docked" | "idle" | "error";

export interface RobotInfo {
  /** Furniture item (the dock). */
  id: string;
  floorId: string;
  /** Where the robot rests: in front of its dock, facing away from it (radians). */
  rest: Vec2;
  restHeading: number;
  mode: RobotMode;
  /** Outline of the room it cleans (null: circles near the dock). */
  room: Vec2[] | null;
  /** Id of that room (a new room starts new lanes). */
  roomId?: string | null;
  /** Footprints of the furniture standing in its way (cabinets, sofas, beds; not tables or chairs). */
  obstacles?: Vec2[][];
  /** A pack's dock: the robot is built from the pack's own robot parts (its type and the item's size), #645. */
  model?: { type: string; w: number; d: number; h: number };
}

/** Driving speed (m/s) and turning speed (rad/s). */
export const ROBOT_SPEED = 0.3;
export const ROBOT_TURN = 2.6;

/**
 * Lanes through a room, back and forth along its longer side, keeping `inset` from the walls and
 * from furniture in the way. Each lane takes the longest free stretch; a lane that cannot be reached
 * from the previous one without crossing furniture is left out.
 */
export function cleaningPath(room: Vec2[], lane = 0.32, inset = 0.22, obstacles: readonly Vec2[][] = []): Vec2[] {
  const xs = room.map((p) => p[0]);
  const zs = room.map((p) => p[1]);
  const x0 = Math.min(...xs);
  const x1 = Math.max(...xs);
  const z0 = Math.min(...zs);
  const z1 = Math.max(...zs);
  // lanes run along the longer side (fewer turns)
  const alongZ = z1 - z0 >= x1 - x0;
  const d = inset * 0.7071;
  const free = (p: Vec2) => {
    const around: Vec2[] = [p, [p[0] + inset, p[1]], [p[0] - inset, p[1]], [p[0], p[1] + inset], [p[0], p[1] - inset]];
    // the diagonals too, so the robot keeps clear of furniture corners
    const near: Vec2[] = [...around, [p[0] + d, p[1] + d], [p[0] - d, p[1] + d], [p[0] + d, p[1] - d], [p[0] - d, p[1] - d]];
    return around.every((q) => pointInPolygon(q, room)) && !obstacles.some((o) => near.some((q) => pointInPolygon(q, o)));
  };
  const inside = (a: number, b: number) => free(alongZ ? [a, b] : [b, a]);
  // a straight drive from p to q stays free
  const clear = (p: Vec2, q: Vec2) => {
    const n = Math.ceil(Math.hypot(q[0] - p[0], q[1] - p[1]) / 0.05);
    for (let i = 1; i < n; i++) if (!free([p[0] + ((q[0] - p[0]) * i) / n, p[1] + ((q[1] - p[1]) * i) / n])) return false;
    return true;
  };
  const [a0, a1, b0, b1] = alongZ ? [x0, x1, z0, z1] : [z0, z1, x0, x1];
  const out: Vec2[] = [];
  let forward = true;
  for (let a = a0 + inset; a <= a1 - inset + 1e-6; a += lane) {
    // the longest run of inside samples along this lane
    let best: [number, number] | null = null;
    let start: number | null = null;
    const step = 0.05;
    for (let b = b0; b <= b1 + 1e-6; b += step) {
      if (inside(a, b)) start ??= b;
      if ((!inside(a, b) || b + step > b1 + 1e-6) && start !== null) {
        const end = inside(a, b) ? b : b - step;
        if (!best || end - start > best[1] - best[0]) best = [start, end];
        start = null;
      }
    }
    if (!best || best[1] - best[0] < 0.2) continue;
    const ends = (dir: boolean): [Vec2, Vec2] => {
      const [s, e] = dir ? best! : [best![1], best![0]];
      return [alongZ ? [a, s] : [s, a], alongZ ? [a, e] : [e, a]];
    };
    let run = ends(forward);
    const last = out[out.length - 1];
    if (last && obstacles.length && !clear(last, run[0])) {
      // the other way round, or leave the lane out when furniture is in the way either way
      const back = ends(!forward);
      if (!clear(last, back[0])) continue;
      run = back;
      forward = !forward;
    }
    out.push(run[0], run[1]);
    forward = !forward;
  }
  return out;
}

/**
 * Whether the straight way from a to b crosses the room's outline: in a U- or L-shaped room the nearest lane may lie
 * across the notch, behind a wall. Only real crossings count, so a robot standing at a wall (its dock) may drive off.
 */
export function crossesOutline(room: readonly Vec2[], a: Vec2, b: Vec2): boolean {
  const side = (p: Vec2, q: Vec2, r: Vec2) => (q[0] - p[0]) * (r[1] - p[1]) - (q[1] - p[1]) * (r[0] - p[0]);
  const eps = 1e-9;
  return room.some((p, i) => {
    const q = room[(i + 1) % room.length];
    const d1 = side(p, q, a);
    const d2 = side(p, q, b);
    const d3 = side(a, b, p);
    const d4 = side(a, b, q);
    return ((d1 > eps && d2 < -eps) || (d1 < -eps && d2 > eps)) && ((d3 > eps && d4 < -eps) || (d3 < -eps && d4 > eps));
  });
}

/** A small circle in front of the dock, for robots outside any room. */
export function circlePath(center: Vec2, radius = 0.7, n = 12): Vec2[] {
  return Array.from({ length: n }, (_, i) => {
    const a = (i / n) * Math.PI * 2;
    return [center[0] + Math.cos(a) * radius, center[1] + Math.sin(a) * radius] as Vec2;
  });
}

/** Moving state of one robot. */
export interface RobotMotion {
  pos: Vec2;
  heading: number;
  path: Vec2[];
  next: number;
}

const wrap = (a: number) => Math.atan2(Math.sin(a), Math.cos(a));

/**
 * Advance a robot by `dt` seconds: turn towards the next target, drive when facing it. Returns
 * whether it still moves.
 */
export function stepRobot(m: RobotMotion, info: RobotInfo, dt: number): boolean {
  let target: Vec2 | null = null;
  if (info.mode === "cleaning") {
    if (!m.path.length) return false;
    target = m.path[m.next % m.path.length];
  } else if (info.mode === "returning" || info.mode === "docked") {
    target = info.rest;
  } else return false;
  const dx = target[0] - m.pos[0];
  const dz = target[1] - m.pos[1];
  const dist = Math.hypot(dx, dz);
  if (dist < 0.02) {
    if (info.mode === "cleaning") {
      m.next = (m.next + 1) % m.path.length;
      return true;
    }
    // home: turn to face away from the dock
    const diff = wrap(info.restHeading - m.heading);
    if (Math.abs(diff) < 0.02) return false;
    m.heading += Math.sign(diff) * Math.min(Math.abs(diff), ROBOT_TURN * dt);
    return true;
  }
  // heading 0 faces +z; the robot turns on the spot before it drives
  const want = Math.atan2(dx, dz);
  const diff = wrap(want - m.heading);
  m.heading = wrap(m.heading + Math.sign(diff) * Math.min(Math.abs(diff), ROBOT_TURN * dt));
  if (Math.abs(diff) < 0.35) {
    const move = Math.min(dist, ROBOT_SPEED * dt);
    m.pos = [m.pos[0] + (dx / dist) * move, m.pos[1] + (dz / dist) * move];
  }
  return true;
}
