// Runs: pipes (and later cables) as 3D polylines – a height per point, so a run can come up out of the floor,
// go along a wall, round a corner and back down into the ground. Pure functions shared by the editor's wall
// view, the plan and the 3D view.

import type { PoolPipe, Vec2 } from "../model.ts";
import { fromWall, type WallFrame } from "./wall-frame.ts";

/** A point in floor coordinates: x, height above the floor, z. */
export type P3 = [number, number, number];

/** Height of a pipe without its own (m above the floor). */
export const PIPE_HEIGHT = 0.3;

/** Where a node's pipe ends: its plan position and height above the floor (null: unknown or a loose end). */
export type NodeAt = (node: string) => { x: number; z: number; y: number } | null;

/**
 * The 3D path of a pipe. A pipe with heights runs straight from its start node through its points to its end
 * node (a loose end has none). An older pipe without them rises from each node to its height and runs level.
 */
export function pipePath(p: Pick<PoolPipe, "from" | "to" | "points" | "height" | "heights">, nodeAt: NodeAt): P3[] {
  const a = p.from ? nodeAt(p.from) : null;
  const b = p.to ? nodeAt(p.to) : null;
  const h = p.height ?? PIPE_HEIGHT;
  const out: P3[] = [];
  if (!p.heights) {
    if (!a || !b) return [];
    out.push([a.x, a.y, a.z], [a.x, h, a.z]);
    for (const [x, z] of p.points) out.push([x, h, z]);
    out.push([b.x, h, b.z], [b.x, b.y, b.z]);
  } else {
    if (a) out.push([a.x, a.y, a.z]);
    p.points.forEach(([x, z], i) => out.push([x, p.heights?.[i] ?? h, z]));
    if (b) out.push([b.x, b.y, b.z]);
  }
  // points on top of each other add nothing
  return out.filter((q, i) => i === 0 || dist3(q, out[i - 1]) > 0.001);
}

export function dist3(a: P3, b: P3): number {
  return Math.hypot(b[0] - a[0], b[1] - a[1], b[2] - a[2]);
}

export function pathLength(path: readonly P3[]): number {
  let l = 0;
  for (let i = 1; i < path.length; i++) l += dist3(path[i - 1], path[i]);
  return l;
}

/** The point `at` metres along a path, with the direction there and the segment it lies on. */
export function pointAlong(path: readonly P3[], at: number): { p: P3; dir: P3; seg: number } | null {
  if (path.length < 2) return null;
  let rest = Math.max(0, at);
  for (let i = 1; i < path.length; i++) {
    const [a, b] = [path[i - 1], path[i]];
    const l = dist3(a, b);
    if (l < 1e-6) continue;
    if (rest <= l || i === path.length - 1) {
      const t = Math.min(1, rest / l);
      const dir: P3 = [(b[0] - a[0]) / l, (b[1] - a[1]) / l, (b[2] - a[2]) / l];
      return { p: [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t, a[2] + (b[2] - a[2]) * t], dir, seg: i - 1 };
    }
    rest -= l;
  }
  return null;
}

/** The point of a path nearest to q: its distance along the path, its distance from q and its segment. */
export function nearestOnPath(path: readonly P3[], q: P3): { at: number; d: number; seg: number; p: P3 } | null {
  let best: { at: number; d: number; seg: number; p: P3 } | null = null;
  let walked = 0;
  for (let i = 1; i < path.length; i++) {
    const [a, b] = [path[i - 1], path[i]];
    const v: P3 = [b[0] - a[0], b[1] - a[1], b[2] - a[2]];
    const l2 = v[0] * v[0] + v[1] * v[1] + v[2] * v[2];
    const t = l2 > 0 ? Math.max(0, Math.min(1, ((q[0] - a[0]) * v[0] + (q[1] - a[1]) * v[1] + (q[2] - a[2]) * v[2]) / l2)) : 0;
    const p: P3 = [a[0] + v[0] * t, a[1] + v[1] * t, a[2] + v[2] * t];
    const d = dist3(p, q);
    if (!best || d < best.d) best = { at: walked + Math.sqrt(l2) * t, d, seg: i - 1, p };
    walked += Math.sqrt(l2);
  }
  return best;
}

/**
 * The corners of a path rounded off (a bent pipe): each corner becomes a short arc of `radius` (smaller where
 * the pieces beside it are short), drawn with `steps` pieces.
 */
export function roundCorners(path: readonly P3[], radius: number, steps = 4): P3[] {
  if (path.length < 3) return [...path];
  const out: P3[] = [path[0]];
  for (let i = 1; i < path.length - 1; i++) {
    const [a, c, b] = [path[i - 1], path[i], path[i + 1]];
    const la = dist3(a, c);
    const lb = dist3(c, b);
    const r = Math.min(radius, la * 0.45, lb * 0.45);
    const ua: P3 = [(a[0] - c[0]) / la, (a[1] - c[1]) / la, (a[2] - c[2]) / la];
    const ub: P3 = [(b[0] - c[0]) / lb, (b[1] - c[1]) / lb, (b[2] - c[2]) / lb];
    // almost straight on: no arc needed
    if (r < 0.005 || ua[0] * ub[0] + ua[1] * ub[1] + ua[2] * ub[2] < -0.999) {
      out.push(c);
      continue;
    }
    const p0: P3 = [c[0] + ua[0] * r, c[1] + ua[1] * r, c[2] + ua[2] * r];
    const p1: P3 = [c[0] + ub[0] * r, c[1] + ub[1] * r, c[2] + ub[2] * r];
    // a quadratic curve with the corner as its control point
    for (let k = 0; k <= steps; k++) {
      const t = k / steps;
      const m = (1 - t) * (1 - t);
      const n = 2 * (1 - t) * t;
      const o = t * t;
      out.push([m * p0[0] + n * c[0] + o * p1[0], m * p0[1] + n * c[1] + o * p1[1], m * p0[2] + n * c[2] + o * p1[2]]);
    }
  }
  out.push(path[path.length - 1]);
  return out;
}

/** A point on a wall's face, `d` metres in front of it (into the room), `s` along it, at height y. */
export function onWall(frame: WallFrame, s: number, y: number, d: number): P3 {
  const [x, z] = fromWall(frame, s, d);
  return [x, y, z];
}

/**
 * The corner where a run turns from one wall onto the next: the crossing of the two lines that run `dA` and `dB`
 * in front of the walls (null when the walls run parallel).
 */
export function cornerPoint(a: WallFrame, dA: number, b: WallFrame, dB: number): Vec2 | null {
  const pa = fromWall(a, 0, dA);
  const pb = fromWall(b, 0, dB);
  const det = a.u[0] * -b.u[1] - a.u[1] * -b.u[0];
  if (Math.abs(det) < 1e-6) return null;
  const rx = pb[0] - pa[0];
  const rz = pb[1] - pa[1];
  const t = (rx * -b.u[1] - rz * -b.u[0]) / det;
  return [pa[0] + a.u[0] * t, pa[1] + a.u[1] * t];
}
