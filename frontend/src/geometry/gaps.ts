// "Close gaps": rooms drawn with a gap between them (e.g. measured inside dimensions) get their facing
// edges moved onto a common centre line, so one interior wall replaces two exterior walls. The gaps
// that were closed suggest the interior wall thickness.

import type { Room, Vec2 } from "../model.ts";
import { signedArea } from "../model.ts";

export interface GapResult {
  rooms: Room[];
  /** Width of every closed gap (negative for small overlaps). */
  gaps: number[];
}

interface Edge {
  room: number;
  index: number;
  /** Direction with a canonical sign (angle in [0, π)). */
  dir: Vec2;
  /** Normal belonging to the canonical direction. */
  normal: Vec2;
  /** Position of the edge's line along the normal. */
  offset: number;
  /** +1 when the room's outside lies on the normal's side, -1 otherwise. */
  outside: number;
  t0: number;
  t1: number;
}

const ANGLE_TOLERANCE = 0.05;
const MIN_OVERLAP = 0.2;
/** Rooms overlapping by up to this much are pulled apart onto one line as well. */
const MAX_OVERLAP = 0.12;

function edgesOf(rooms: readonly Room[]): Edge[] {
  const out: Edge[] = [];
  rooms.forEach((room, r) => {
    const pts = room.points;
    if (pts.length < 3) return;
    const ccw = signedArea(pts) >= 0;
    for (let i = 0; i < pts.length; i++) {
      const a = pts[i];
      const b = pts[(i + 1) % pts.length];
      const dx = b[0] - a[0];
      const dz = b[1] - a[1];
      const l = Math.hypot(dx, dz);
      if (l < 0.05) continue;
      let dir: Vec2 = [dx / l, dz / l];
      // counter-clockwise in x/z: the outside is on the right of a -> b
      const outward: Vec2 = ccw ? [dir[1], -dir[0]] : [-dir[1], dir[0]];
      if (dir[1] < -1e-9 || (Math.abs(dir[1]) <= 1e-9 && dir[0] < 0)) dir = [-dir[0], -dir[1]];
      const normal: Vec2 = [-dir[1], dir[0]];
      const ta = a[0] * dir[0] + a[1] * dir[1];
      const tb = b[0] * dir[0] + b[1] * dir[1];
      out.push({
        room: r,
        index: i,
        dir,
        normal,
        offset: a[0] * normal[0] + a[1] * normal[1],
        outside: outward[0] * normal[0] + outward[1] * normal[1] > 0 ? 1 : -1,
        t0: Math.min(ta, tb),
        t1: Math.max(ta, tb),
      });
    }
  });
  return out;
}

export function closeGaps(rooms: readonly Room[], maxGap = 0.6): GapResult {
  const edges = edgesOf(rooms);
  const parent = edges.map((_, i) => i);
  const find = (i: number): number => (parent[i] === i ? i : (parent[i] = find(parent[i])));
  const gaps: number[] = [];
  for (let i = 0; i < edges.length; i++) {
    for (let j = i + 1; j < edges.length; j++) {
      const e = edges[i];
      const f = edges[j];
      if (e.room === f.room) continue;
      if (Math.abs(e.dir[0] * f.dir[1] - e.dir[1] * f.dir[0]) > ANGLE_TOLERANCE) continue;
      // facing each other: their outsides point at each other
      if (e.outside === f.outside) continue;
      const gap = (f.offset - e.offset) * e.outside;
      if (gap > maxGap || gap < -MAX_OVERLAP || Math.abs(gap) < 1e-4) continue;
      const overlap = Math.min(e.t1, f.t1) - Math.max(e.t0, f.t0);
      if (overlap < MIN_OVERLAP) continue;
      gaps.push(Math.round(gap * 1000) / 1000);
      parent[find(i)] = find(j);
    }
  }
  if (!gaps.length) return { rooms: rooms.map((r) => ({ ...r, points: r.points.map((p) => [p[0], p[1]] as Vec2) })), gaps };

  // every group of edges meets on the mean of its lines
  const groups = new Map<number, number[]>();
  edges.forEach((_, i) => {
    const root = find(i);
    if (root === i && !edges.some((_, j) => j !== i && find(j) === i)) return;
    const list = groups.get(root) ?? [];
    list.push(i);
    groups.set(root, list);
  });
  // shifts per vertex, at most one per group so collinear neighbours do not move a corner twice
  const shifts = rooms.map((r) => r.points.map(() => new Map<number, Vec2>()));
  for (const [root, members] of groups) {
    const target = members.reduce((s, i) => s + edges[i].offset, 0) / members.length;
    for (const i of members) {
      const e = edges[i];
      const d = target - e.offset;
      const v: Vec2 = [e.normal[0] * d, e.normal[1] * d];
      const n = rooms[e.room].points.length;
      shifts[e.room][e.index].set(root, v);
      shifts[e.room][(e.index + 1) % n].set(root, v);
    }
  }
  const round = (v: number) => Math.round(v * 1000) / 1000;
  const out = rooms.map((room, r) => ({
    ...room,
    points: room.points.map((p, k) => {
      let x = p[0];
      let z = p[1];
      for (const [dx, dz] of shifts[r][k].values()) {
        x += dx;
        z += dz;
      }
      return [round(x), round(z)] as Vec2;
    }),
  }));
  return { rooms: out, gaps };
}

/** Interior wall thickness suggested by the closed gaps (median), or null for overlaps only. */
export function suggestedThickness(gaps: readonly number[]): number | null {
  const positive = gaps.filter((g) => g > 0.04).sort((a, b) => a - b);
  if (!positive.length) return null;
  const median = positive[Math.floor(positive.length / 2)];
  return Math.min(0.5, Math.max(0.08, Math.round(median * 100) / 100));
}

/**
 * Edges that are almost along x or z (a corner a centimetre off, #333): both ends get the same coordinate. The
 * value that more corners of the floor already use wins, so shared corners of neighbouring rooms move together.
 * Returns the straightened rooms and how many edges were fixed.
 */
export function straightenEdges(rooms: readonly Room[], maxOff = 0.05, minLength = 0.5): { rooms: Room[]; fixed: number } {
  const out = rooms.map((r) => ({ ...r, points: r.points.map((p) => [p[0], p[1]] as Vec2) }));
  let fixed = 0;
  for (let round = 0; round < 4; round++) {
    const count = (axis: 0 | 1, v: number) => out.reduce((n, r) => n + r.points.filter((p) => Math.abs(p[axis] - v) < 1e-6).length, 0);
    let changed = false;
    for (const r of out) {
      for (let i = 0; i < r.points.length; i++) {
        const a = r.points[i];
        const b = r.points[(i + 1) % r.points.length];
        const dx = Math.abs(b[0] - a[0]);
        const dz = Math.abs(b[1] - a[1]);
        // almost horizontal: z differs a little; almost vertical: x differs a little
        const axis: 0 | 1 | null = dz > 1e-6 && dz <= maxOff && dx >= minLength ? 1 : dx > 1e-6 && dx <= maxOff && dz >= minLength ? 0 : null;
        if (axis === null) continue;
        const [keep, drop] = count(axis, a[axis]) >= count(axis, b[axis]) ? [a[axis], b[axis]] : [b[axis], a[axis]];
        for (const room of out) for (const p of room.points) if (Math.abs(p[axis] - drop) < 1e-6) p[axis] = keep;
        fixed++;
        changed = true;
      }
    }
    if (!changed) break;
  }
  return { rooms: out, fixed };
}
