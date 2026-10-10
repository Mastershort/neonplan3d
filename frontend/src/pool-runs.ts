// Pool Pro: the pipes of a pool as runs – where their nodes sit (ports, devices, T-pieces), turning an older
// level pipe into one with a height per point, splitting a pipe for a T-piece, and drawing them on a wall.
// Pure functions shared by the 3D view and the editor's wall view.

import { POOL_DEVICES, POOL_VALVE_Y, poolWaterY, type Building, type Floor, type OutdoorArea, type PoolJoint, type PoolPipe, type Vec2 } from "./model.ts";
import { mountBase } from "./packs.ts";
import { nearestOnPath, pathLength, pipePath, pointAlong, PIPE_HEIGHT, type NodeAt, type P3 } from "./geometry/runs.ts";
import { toWall, type WallFrame } from "./geometry/wall-frame.ts";

/** Where the pipes of a pool end: its ports, the pool devices (on any floor, hung ones higher) and its T-pieces. */
export function poolNodeAt(b: Building, floor: Floor, area: OutdoorArea): NodeAt {
  const links = area.pool ?? {};
  const water = poolWaterY(floor, area);
  return (node) => {
    const i = node.indexOf(":");
    const [kind, id] = [node.slice(0, i), node.slice(i + 1)];
    if (kind === "port") {
      const q = links.ports?.find((x) => x.id === id);
      if (!q) return null;
      // skimmer at the water line, the drain at the bottom, inlets a little below the water, the waste drain in the floor
      const y = q.kind === "skimmer" ? water : q.kind === "drain" ? water - 1.2 : q.kind === "inlet" ? water - 0.3 : 0.02;
      return { x: q.x, z: q.z, y };
    }
    if (kind === "joint") {
      const j = links.joints?.find((x) => x.id === id);
      return j ? { x: j.x, z: j.z, y: j.y } : null;
    }
    if (kind !== "dev") return null;
    for (const fl of b.floors) {
      const f = fl.furniture.find((m) => m.id === id);
      if (!f || !(POOL_DEVICES as readonly string[]).includes(f.type)) continue;
      const y = f.type === "pool_filter" ? f.h * 0.88 : f.type === "pool_dosing" ? 0.95 : f.type === "pool_valve" ? POOL_VALVE_Y : f.type === "pool_pump" ? 0.2 : 0.3;
      return { x: f.x, z: f.z, y: y + mountBase(fl, f) };
    }
    return null;
  };
}

/** A pipe with a height per point: an older level one gets its risers as points (the path stays the same). */
export function laidPipe(p: PoolPipe, nodeAt: NodeAt): PoolPipe {
  if (p.heights) return p;
  const h = p.height ?? PIPE_HEIGHT;
  const a = nodeAt(p.from);
  const b = nodeAt(p.to);
  const points: Vec2[] = [...(a ? [[a.x, a.z] as Vec2] : []), ...p.points, ...(b ? [[b.x, b.z] as Vec2] : [])];
  return { ...p, points, heights: points.map(() => h) };
}

const r3 = (v: number) => Math.round(v * 1000) / 1000;

/**
 * Splits a pipe at a point near it for a T-piece: the first part ends at the new joint, the second starts there
 * (it keeps the id's water direction); ball valves and sight glasses stay where they are.
 */
export function splitPipe(p: PoolPipe, nodeAt: NodeAt, at: P3, jointId: string, newId: string): { joint: PoolJoint; first: PoolPipe; second: PoolPipe } | null {
  const laid = laidPipe(p, nodeAt);
  const path = pipePath(laid, nodeAt);
  const hit = nearestOnPath(path, at);
  if (!hit) return null;
  const joint: PoolJoint = { id: jointId, x: r3(hit.p[0]), z: r3(hit.p[2]), y: r3(hit.p[1]) };
  // the path is [start node?, ...points, end node?]: segment k runs from path[k] to path[k + 1]
  const lead = runLead(laid, nodeAt);
  const cut = Math.max(0, Math.min(laid.points.length, hit.seg + 1 - lead));
  const heights = laid.heights ?? [];
  const fits = laid.fittings ?? [];
  const first: PoolPipe = {
    ...laid,
    to: `joint:${jointId}`,
    points: laid.points.slice(0, cut),
    heights: heights.slice(0, cut),
    fittings: fits.filter((f) => f.at <= hit.at),
  };
  const second: PoolPipe = {
    ...laid,
    id: newId,
    from: `joint:${jointId}`,
    points: laid.points.slice(cut),
    heights: heights.slice(cut),
    fittings: fits.filter((f) => f.at > hit.at).map((f) => ({ ...f, at: r3(f.at - hit.at) })),
  };
  return { joint, first, second };
}

/** 1 when a pipe's path starts at its start node (path[k] is then points[k - 1]), 0 for a loose start. */
export function runLead(p: Pick<PoolPipe, "from">, nodeAt: NodeAt): number {
  return p.from && nodeAt(p.from) ? 1 : 0;
}

/** A pipe seen on a wall: its pieces near the wall in wall coordinates (s along, y up), its own points, its fittings. */
export interface WallRun {
  id: string;
  /** k: the piece's index along the path (from path[k] to path[k + 1]); d: the distance in front of the wall. */
  pieces: { k: number; s0: number; y0: number; d0: number; s1: number; y1: number; d1: number }[];
  /** The pipe's own points near the wall (index into its points; an older level pipe: those of laidPipe). */
  points: { i: number; s: number; y: number }[];
  fittings: { id: string; kind: "valve" | "sight"; open: boolean; s: number; y: number }[];
  /** A loose end near the wall (to draw on from). */
  ends: { end: "from" | "to"; s: number; y: number }[];
}

/** How far in front of (and behind) a wall a pipe still counts as running on it. */
const NEAR = 1.0;

export function runsOnWall(frame: WallFrame, pipes: readonly PoolPipe[], nodeAt: NodeAt): WallRun[] {
  const out: WallRun[] = [];
  const near = (q: P3) => {
    const w = toWall(frame, [q[0], q[2]]);
    return w.d > -0.35 && w.d < NEAR && w.s > -0.3 && w.s < frame.length + 0.3 ? w : null;
  };
  for (const p of pipes) {
    const lp = laidPipe(p, nodeAt);
    const path = pipePath(lp, nodeAt);
    if (path.length < 2) continue;
    const run: WallRun = { id: p.id, pieces: [], points: [], fittings: [], ends: [] };
    for (let i = 1; i < path.length; i++) {
      const a = near(path[i - 1]);
      const b = near(path[i]);
      if (a && b) run.pieces.push({ k: i - 1, s0: a.s, y0: path[i - 1][1], d0: a.d, s1: b.s, y1: path[i][1], d1: b.d });
    }
    if (!run.pieces.length) continue;
    const lead = runLead(lp, nodeAt);
    lp.points.forEach((_, i) => {
      const q = path[i + lead];
      const w = q && near(q);
      if (w) run.points.push({ i, s: w.s, y: q[1] });
    });
    const len = pathLength(path);
    for (const f of p.fittings ?? []) {
      const at = Math.min(len, f.at);
      const hit = pointAlong(path, at)?.p;
      const w = hit && near(hit);
      if (hit && w) run.fittings.push({ id: f.id, kind: f.kind, open: f.open !== false, s: w.s, y: hit[1] });
    }
    for (const [end, q] of [
      ["from", path[0]],
      ["to", path[path.length - 1]],
    ] as const) {
      const w = (end === "from" ? !p.from : !p.to) ? near(q) : null;
      if (w) run.ends.push({ end, s: w.s, y: q[1] });
    }
    out.push(run);
  }
  return out;
}
