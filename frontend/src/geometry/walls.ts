// Wall generation from room polygons.
//
// Rooms are drawn at the centre line of interior walls. Edges shared by two rooms become one
// interior wall centred on the edge; edges with a room on one side only become exterior walls that
// grow outwards. Edges are split wherever a vertex of another room lies on them, so partially shared
// edges and T-junctions work. Wall ends are mitred at every node by intersecting the face lines of
// neighbouring walls.

import type { FreeWall, Opening, Room, Vec2 } from "../model.ts";
import { pointInPolygon, signedArea } from "../model.ts";

export interface WallSource {
  room_id: string;
  /** Index of the edge in the room's stored point order (points[edge] -> points[edge + 1]). */
  edge: number;
  /** Covered range along that edge, in metres from points[edge]. */
  t0: number;
  t1: number;
}

export interface Wall {
  id: string;
  a: Vec2;
  b: Vec2;
  /** Distance of the left face (normal (-dz, dx)) from the line a-b. */
  left: number;
  /** Distance of the right face (normal (dz, -dx)) from the line a-b. */
  right: number;
  exterior: boolean;
  /** Room on the left / right side of a -> b. Exterior walls have their room on the left. */
  roomLeft: string | null;
  roomRight: string | null;
  sources: WallSource[];
  /** Footprint polygon, counter-clockwise, mitred at both ends. */
  footprint: Vec2[];
  /** A free-standing wall drawn on its own (its id). */
  free?: string;
  /** Own height in metres; undefined = full floor height. */
  height?: number;
}

export interface WallOptions {
  exterior: number;
  interior: number;
  /** Vertices closer than this are merged (metres). */
  eps?: number;
}

export interface WallResult {
  walls: Wall[];
  /** Room pairs that overlap along an edge in the same direction (rooms drawn on top of each other). */
  warnings: string[];
  /** Room pairs whose shared wall is left out ("no wall"): they form one space, also for the light. */
  open: [string, string][];
}

interface Segment {
  u: number;
  v: number;
  room: string;
  edge: number;
  t0: number;
  t1: number;
}

interface Draft {
  free?: string;
  height?: number;
  a: number;
  b: number;
  left: number;
  right: number;
  exterior: boolean;
  roomLeft: string | null;
  roomRight: string | null;
  sources: WallSource[];
}

const sub = (p: Vec2, q: Vec2): Vec2 => [p[0] - q[0], p[1] - q[1]];
const add = (p: Vec2, q: Vec2): Vec2 => [p[0] + q[0], p[1] + q[1]];
const mul = (p: Vec2, k: number): Vec2 => [p[0] * k, p[1] * k];
const dot = (p: Vec2, q: Vec2): number => p[0] * q[0] + p[1] * q[1];
const cross = (p: Vec2, q: Vec2): number => p[0] * q[1] - p[1] * q[0];
const len = (p: Vec2): number => Math.hypot(p[0], p[1]);
const unit = (p: Vec2): Vec2 => {
  const l = len(p) || 1;
  return [p[0] / l, p[1] / l];
};
const leftNormal = (d: Vec2): Vec2 => [-d[1], d[0]];
const rightNormal = (d: Vec2): Vec2 => [d[1], -d[0]];

export function generateWalls(rooms: readonly Room[], options: WallOptions, free: readonly FreeWall[] = []): WallResult {
  const eps = options.eps ?? 0.005;
  const warnings: string[] = [];
  const freeWalls = free.filter((w) => Math.hypot(w.b[0] - w.a[0], w.b[1] - w.a[1]) > 0.05);

  // 1. canonical vertices (merge points closer than eps)
  const verts: Vec2[] = [];
  const vertexId = (p: Vec2): number => {
    for (let i = 0; i < verts.length; i++) {
      if (Math.abs(verts[i][0] - p[0]) <= eps && Math.abs(verts[i][1] - p[1]) <= eps) return i;
    }
    verts.push([p[0], p[1]]);
    return verts.length - 1;
  };

  // 2. room edges in counter-clockwise order, remembering the stored edge they came from
  interface Edge {
    u: number;
    v: number;
    room: string;
    edge: number;
    /** true when u is points[edge] (stored order), false when the room was stored clockwise */
    forward: boolean;
  }
  const edges: Edge[] = [];
  for (const room of rooms) {
    const pts = room.points;
    if (pts.length < 3 || Math.abs(signedArea(pts)) < 1e-6) continue;
    const ccw = signedArea(pts) > 0;
    const ids = pts.map(vertexId);
    for (let i = 0; i < pts.length; i++) {
      const s = ids[i];
      const e = ids[(i + 1) % pts.length];
      if (s === e) continue;
      edges.push(ccw ? { u: s, v: e, room: room.id, edge: i, forward: true } : { u: e, v: s, room: room.id, edge: i, forward: false });
    }
  }

  // free walls: their ends are vertices too, so a room edge they touch is split there (T-junction)
  const freeIds = freeWalls.map((w) => [vertexId(w.a), vertexId(w.b)] as const);

  // 3. split edges at vertices lying on them
  const segments: Segment[] = [];
  for (const e of edges) {
    const p = verts[e.u];
    const q = verts[e.v];
    const d = sub(q, p);
    const l = len(d);
    const dir = mul(d, 1 / l);
    const cuts: { t: number; id: number }[] = [];
    for (let i = 0; i < verts.length; i++) {
      if (i === e.u || i === e.v) continue;
      const w = sub(verts[i], p);
      const t = dot(w, dir);
      if (t <= eps || t >= l - eps) continue;
      if (Math.abs(cross(dir, w)) <= eps) cuts.push({ t, id: i });
    }
    cuts.sort((x, y) => x.t - y.t);
    const stops = [{ t: 0, id: e.u }, ...cuts, { t: l, id: e.v }];
    for (let k = 0; k + 1 < stops.length; k++) {
      const s = stops[k];
      const n = stops[k + 1];
      // distances along the stored edge: measured from the stored start point
      const t0 = e.forward ? s.t : l - n.t;
      const t1 = e.forward ? n.t : l - s.t;
      segments.push({ u: s.id, v: n.id, room: e.room, edge: e.edge, t0, t1 });
    }
  }

  // 4. pair segments: two rooms in opposite directions -> interior wall, one room -> exterior wall
  const groups = new Map<string, Segment[]>();
  for (const s of segments) {
    const key = s.u < s.v ? `${s.u}-${s.v}` : `${s.v}-${s.u}`;
    let g = groups.get(key);
    if (!g) groups.set(key, (g = []));
    g.push(s);
  }
  const src = (s: Segment): WallSource => ({ room_id: s.room, edge: s.edge, t0: s.t0, t1: s.t1 });
  // the height set on a segment's edge; a split edge may carry one height per part (in order along the edge)
  const partsOf = new Map<string, number[]>();
  for (const s of segments) {
    const key = `${s.room}:${s.edge}`;
    partsOf.set(key, [...(partsOf.get(key) ?? []), s.t0].sort((a, b) => a - b));
  }
  const heightSet = (s: Segment): number | null | undefined => {
    const h = rooms.find((r) => r.id === s.room)?.wall_heights?.[s.edge];
    if (!Array.isArray(h)) return h;
    const parts = partsOf.get(`${s.room}:${s.edge}`) ?? [];
    return h[parts.indexOf(s.t0)] ?? null;
  };
  // a wall's own height: the lowest one set on its room edges (shared walls take the lower setting)
  const heightOf = (list: Segment[]): number | undefined => {
    const hs = list.map(heightSet).filter((h): h is number => typeof h === "number" && h > 0);
    return hs.length ? Math.min(...hs) : undefined;
  };
  // a height of 0 on an edge: no wall there at all (an open floor plan whose rooms share one space)
  const noWall = (list: Segment[]): boolean => list.some((s) => heightSet(s) === 0);
  const open: [string, string][] = [];
  let drafts: Draft[] = [];
  for (const g of groups.values()) {
    const first = g[0];
    const partner = g.find((s) => s !== first && s.u === first.v && s.v === first.u && s.room !== first.room);
    for (const s of g) {
      if (s !== first && s !== partner && s.room !== first.room) warnings.push(`overlap:${first.room}:${s.room}`);
    }
    if (noWall(partner ? [first, partner] : [first])) {
      if (partner) open.push([first.room, partner.room]);
      continue;
    }
    if (partner) {
      drafts.push({
        a: first.u,
        b: first.v,
        left: options.interior / 2,
        right: options.interior / 2,
        exterior: false,
        roomLeft: first.room,
        roomRight: partner.room,
        sources: [src(first), src(partner)],
        height: heightOf([first, partner]),
      });
    } else {
      drafts.push({
        a: first.u,
        b: first.v,
        left: 0,
        right: options.exterior,
        exterior: true,
        roomLeft: first.room,
        roomRight: null,
        sources: [src(first)],
        height: heightOf([first]),
      });
    }
  }

  // free walls: interior walls of the room they stand in (the same room on both sides)
  freeWalls.forEach((w, i) => {
    const [ia, ib] = freeIds[i];
    if (ia === ib) return;
    const mid: Vec2 = [(w.a[0] + w.b[0]) / 2, (w.a[1] + w.b[1]) / 2];
    const room = rooms.find((r) => r.points.length >= 3 && pointInPolygon(mid, r.points))?.id ?? null;
    const half = (w.thickness ?? options.interior) / 2;
    const height = typeof w.height === "number" && w.height > 0 ? w.height : undefined;
    drafts.push({ free: w.id, a: ia, b: ib, left: half, right: half, exterior: false, roomLeft: room, roomRight: room, sources: [], height });
  });

  // 5. merge collinear runs through nodes where nothing else meets
  drafts = mergeCollinear(drafts, verts);

  // 6. mitred footprints
  const corners = computeCorners(drafts, verts);
  const walls: Wall[] = drafts.map((w, i) => {
    const a = verts[w.a];
    const b = verts[w.b];
    const ca = corners.get(`${i}:a`)!;
    const cb = corners.get(`${i}:b`)!;
    // at b the outgoing direction is reversed, so its left corner lies on the wall's right face
    const footprint = cleanPolygon([ca.right, cb.left, b, cb.right, ca.left, a], 1e-6);
    return {
      id: wallId(a, b),
      a: [a[0], a[1]],
      b: [b[0], b[1]],
      left: w.left,
      right: w.right,
      exterior: w.exterior,
      roomLeft: w.roomLeft,
      roomRight: w.roomRight,
      sources: w.sources,
      footprint,
      ...(w.free ? { free: w.free } : {}),
      ...(w.height !== undefined ? { height: w.height } : {}),
    };
  });
  return { walls, warnings: [...new Set(warnings)], open };
}

function wallId(a: Vec2, b: Vec2): string {
  const r = (x: number) => Math.round(x * 100);
  const [p, q] = a[0] < b[0] || (a[0] === b[0] && a[1] <= b[1]) ? [a, b] : [b, a];
  return `w_${r(p[0])}_${r(p[1])}_${r(q[0])}_${r(q[1])}`;
}

function flip(w: Draft): Draft {
  return { ...w, a: w.b, b: w.a, left: w.right, right: w.left, roomLeft: w.roomRight, roomRight: w.roomLeft };
}

function mergeCollinear(drafts: Draft[], verts: Vec2[]): Draft[] {
  const list = drafts.slice();
  let merged = true;
  while (merged) {
    merged = false;
    const incident = new Map<number, number[]>();
    list.forEach((w, i) => {
      for (const n of [w.a, w.b]) {
        let l = incident.get(n);
        if (!l) incident.set(n, (l = []));
        l.push(i);
      }
    });
    for (const [node, ids] of incident) {
      if (ids.length !== 2) continue;
      let w1 = list[ids[0]];
      let w2 = list[ids[1]];
      if (w1.b !== node) w1 = flip(w1);
      if (w2.a !== node) w2 = flip(w2);
      if (w1.a === w2.b) continue; // two walls forming a closed loop
      const d1 = unit(sub(verts[w1.b], verts[w1.a]));
      const d2 = unit(sub(verts[w2.b], verts[w2.a]));
      if (Math.abs(cross(d1, d2)) > 1e-6 || dot(d1, d2) <= 0) continue;
      if (
        w1.free ||
        w2.free ||
        w1.height !== w2.height ||
        w1.exterior !== w2.exterior ||
        w1.roomLeft !== w2.roomLeft ||
        w1.roomRight !== w2.roomRight ||
        Math.abs(w1.left - w2.left) > 1e-9 ||
        Math.abs(w1.right - w2.right) > 1e-9
      ) {
        continue;
      }
      const joined: Draft = { ...w1, b: w2.b, sources: joinSources(w1.sources, w2.sources) };
      const keep = list.filter((_, i) => i !== ids[0] && i !== ids[1]);
      keep.push(joined);
      list.length = 0;
      list.push(...keep);
      merged = true;
      break;
    }
  }
  return list;
}

/** Concatenate sources, joining consecutive pieces of the same room edge. */
function joinSources(a: WallSource[], b: WallSource[]): WallSource[] {
  const out = a.map((s) => ({ ...s }));
  for (const s of b) {
    const same = out.find((o) => o.room_id === s.room_id && o.edge === s.edge && (Math.abs(o.t1 - s.t0) < 1e-6 || Math.abs(s.t1 - o.t0) < 1e-6));
    if (same) {
      same.t0 = Math.min(same.t0, s.t0);
      same.t1 = Math.max(same.t1, s.t1);
    } else {
      out.push({ ...s });
    }
  }
  return out;
}

interface EndCorners {
  left: Vec2;
  right: Vec2;
}

/** Corner points for every wall end ("<index>:a" / "<index>:b"), expressed in outgoing direction. */
function computeCorners(drafts: Draft[], verts: Vec2[]): Map<string, EndCorners> {
  interface Out {
    key: string;
    d: Vec2;
    left: number;
    right: number;
    angle: number;
  }
  const byNode = new Map<number, Out[]>();
  drafts.forEach((w, i) => {
    const d = unit(sub(verts[w.b], verts[w.a]));
    const outs: [number, Out][] = [
      [w.a, { key: `${i}:a`, d, left: w.left, right: w.right, angle: Math.atan2(d[1], d[0]) }],
      [w.b, { key: `${i}:b`, d: mul(d, -1), left: w.right, right: w.left, angle: Math.atan2(-d[1], -d[0]) }],
    ];
    for (const [node, o] of outs) {
      let l = byNode.get(node);
      if (!l) byNode.set(node, (l = []));
      l.push(o);
    }
  });

  const result = new Map<string, EndCorners>();
  for (const [node, outs] of byNode) {
    const p = verts[node];
    outs.sort((x, y) => x.angle - y.angle);
    const square = (o: Out): EndCorners => ({
      left: add(p, mul(leftNormal(o.d), o.left)),
      right: add(p, mul(rightNormal(o.d), o.right)),
    });
    for (const o of outs) result.set(o.key, square(o));
    if (outs.length < 2) continue;
    const limit = 4 * Math.max(...outs.map((o) => Math.max(o.left, o.right))) + 1e-9;
    for (let k = 0; k < outs.length; k++) {
      // the sector between o (counter-clockwise) and n is bounded by o's left face and n's right face
      const o = outs[k];
      const n = outs[(k + 1) % outs.length];
      const po = add(p, mul(leftNormal(o.d), o.left));
      const pn = add(p, mul(rightNormal(n.d), n.right));
      const c = cross(o.d, n.d);
      if (Math.abs(c) < 1e-4) continue; // straight continuation or overlap: square ends already set
      const t = cross(sub(pn, po), n.d) / c;
      const corner = add(po, mul(o.d, t));
      if (len(sub(corner, p)) > limit) continue; // very sharp angle: keep square ends
      result.get(o.key)!.left = corner;
      result.get(n.key)!.right = corner;
    }
  }
  return result;
}

/** Remove duplicate and collinear points. */
function cleanPolygon(points: Vec2[], eps: number): Vec2[] {
  let pts = points.filter((p, i) => len(sub(p, points[(i + 1) % points.length])) > eps);
  let changed = true;
  while (changed && pts.length > 3) {
    changed = false;
    for (let i = 0; i < pts.length; i++) {
      const prev = pts[(i + pts.length - 1) % pts.length];
      const cur = pts[i];
      const next = pts[(i + 1) % pts.length];
      const d1 = sub(cur, prev);
      const d2 = sub(next, cur);
      if (Math.abs(cross(unit(d1), unit(d2))) < 1e-7 && dot(d1, d2) > 0) {
        pts = pts.filter((_, j) => j !== i);
        changed = true;
        break;
      }
    }
  }
  return pts;
}

/** Point on a stored room edge, `offset` metres from points[edge]. */
export function pointOnRoomEdge(room: Room, edge: number, offset: number): Vec2 {
  const p = room.points[edge];
  const q = room.points[(edge + 1) % room.points.length];
  const d = unit(sub(q, p));
  return add(p, mul(d, offset));
}

/**
 * The line an opening sits on, as a room and an edge: the edge of its room, or for an opening in a
 * free wall a virtual triangle room whose edge 0 is the free wall (the room side is its left).
 */
export function openingHost(o: Pick<Opening, "room_id" | "edge" | "wall">, rooms: readonly Room[], free: readonly FreeWall[]): { room: Room; edge: number } | null {
  if (o.wall) {
    const w = free.find((x) => x.id === o.wall);
    if (!w || Math.hypot(w.b[0] - w.a[0], w.b[1] - w.a[1]) < 0.05) return null;
    const d = unit(sub(w.b, w.a));
    const room = { id: o.room_id, name: "", area_id: null, points: [w.a, w.b, add(w.a, [-d[1], d[0]])] } as unknown as Room;
    return { room, edge: 0 };
  }
  const room = rooms.find((r) => r.id === o.room_id);
  return room && o.edge < room.points.length ? { room, edge: o.edge } : null;
}

/** Locate an opening in the generated walls (see openingHost): the wall and the distance from wall.a. */
export function locateOpening(walls: readonly Wall[], o: Pick<Opening, "wall" | "offset">, host: { room: Room; edge: number }): { wall: Wall; s: number } | null {
  if (!o.wall) return locateOnWalls(walls, host.room, host.edge, o.offset);
  const wall = walls.find((w) => w.free === o.wall);
  if (!wall) return null;
  const p = pointOnRoomEdge(host.room, 0, o.offset);
  return { wall, s: dot(sub(p, wall.a), unit(sub(wall.b, wall.a))) };
}

/** Locate a position on a room edge in the generated walls: the wall and the distance from wall.a. */
export function locateOnWalls(walls: readonly Wall[], room: Room, edge: number, offset: number): { wall: Wall; s: number } | null {
  for (const wall of walls) {
    const hit = wall.sources.find((s) => s.room_id === room.id && s.edge === edge && offset >= s.t0 - 1e-6 && offset <= s.t1 + 1e-6);
    if (!hit) continue;
    const p = pointOnRoomEdge(room, edge, offset);
    return { wall, s: dot(sub(p, wall.a), unit(sub(wall.b, wall.a))) };
  }
  return null;
}
