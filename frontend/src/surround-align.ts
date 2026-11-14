// Laying the map from OpenStreetMap under the plan (see surroundings.ts): which way round and where the house's own
// building on the map lies on the plan's rooms. Only needed when the map is fetched or aligned again, so it lives in
// the lazily loaded map bundle, not in the editor.

import type { Building, Surroundings, Vec2 } from "./model.ts";
import { pointInPolygon, polygonArea } from "./model.ts";
import { boxMiddle, footprint, gridPoints, mapToPlan, PlanGrid, ringEdges, segDist } from "./surroundings.ts";

/** How far apart two polygons are (0 when they overlap). */
export function polygonGap(a: readonly Vec2[], b: readonly Vec2[]): number {
  if (a.some((p) => pointInPolygon(p, b)) || b.some((p) => pointInPolygon(p, a))) return 0;
  let best = Infinity;
  for (const [x, y] of [
    [a, b],
    [b, a],
  ] as const)
    for (const p of x) for (const [q, r] of ringEdges(y)) best = Math.min(best, segDist(p, q, r));
  return best;
}

/**
 * The ground floor's rooms that hang together with the biggest group (a shed or summer house drawn apart in the
 * garden is left out: the map's house is the house). Rooms count as together when only a wall lies between them.
 */
export function mainRooms(b: Building): Vec2[][] {
  const rooms = footprint(b);
  if (rooms.length < 2) return rooms;
  const group = rooms.map((_, i) => i);
  const find = (i: number): number => (group[i] === i ? i : (group[i] = find(group[i])));
  for (let i = 0; i < rooms.length; i++) for (let j = i + 1; j < rooms.length; j++) if (polygonGap(rooms[i], rooms[j]) < 0.8) group[find(i)] = find(j);
  const area = new Map<number, number>();
  rooms.forEach((r, i) => area.set(find(i), (area.get(find(i)) ?? 0) + Math.abs(polygonArea(r))));
  const best = [...area.entries()].sort((p, q) => q[1] - p[1])[0][0];
  return rooms.filter((_, i) => find(i) === best);
}

/** Direction of the longest edge in degrees (0 … 180), measured as atan2(dz, dx) of its coordinates. */
export function mainDirection(edges: readonly [Vec2, Vec2][]): number {
  let best = 0;
  let angle = 0;
  for (const [[ax, az], [bx, bz]] of edges) {
    const len = Math.hypot(bx - ax, bz - az);
    if (len > best) {
      best = len;
      angle = (Math.atan2(bz - az, bx - ax) * 180) / Math.PI;
    }
  }
  return ((angle % 180) + 180) % 180;
}

/** An angle brought into (-180, 180]. */
const wrap = (a: number) => {
  const r = (((a + 180) % 360) + 360) % 360;
  return r === 0 ? 180 : r - 180;
};

/**
 * Lays the map under the plan: the house's own building on the map onto the plan's ground floor. The map's longest
 * wall is turned along the plan's longest wall; of the four ways that does, and of small shifts, the one where the
 * map's house covers the plan's rooms best wins. The map's house is tried alone and together with the buildings that
 * touch it (a garage or annex mapped as a building of its own). When two ways fit about as well (a plain box), the one
 * closest to the north set so far wins. Returns the north and the origin's plan point.
 */
export function placeUnderPlan(s: Pick<Surroundings, "buildings">, own: number | null, b: Building): { north: number; x: number; z: number } {
  const north = b.settings.north ?? 0;
  const rooms = mainRooms(b);
  const home = own !== null ? s.buildings[own] : undefined;
  const mid = rooms.length ? boxMiddle(rooms.flat()) : null;
  if (!mid || !home) return { north, x: mid?.[0] ?? 0, z: mid?.[1] ?? 0 };
  // the map's longest wall, in the plan's own way of measuring (x east, z down = south): (e, -n)
  const mapDir = mainDirection(ringEdges(home.p.map(([e, n]) => [e, -n] as Vec2)));
  const planDir = mainDirection(outerEdges(rooms));
  // turning the map by t turns its directions by t (clockwise in the plan)
  const base = planDir - mapDir;
  const step = 0.25;
  const grid = new PlanGrid(rooms, step);
  const touching = s.buildings.map((_, i) => i).filter((i) => i !== own && polygonGap(s.buildings[i].p, home.p) < 0.5);
  const shapes = touching.length ? [[home.p], [home.p, ...touching.map((i) => s.buildings[i].p)]] : [[home.p]];
  // the best shift for each of the four turns (and each shape)
  const ways: { score: number; north: number; x: number; z: number }[] = [];
  for (const shape of shapes) {
    const samples = gridPoints(shape, step);
    if (!samples.length) continue;
    for (let k = 0; k < 4; k++) {
      const t = (wrap(base + k * 90) + 360) % 360;
      const turned = samples.map((p) => mapToPlan({ x: 0, z: 0 }, t, p));
      const [cx, cz] = boxMiddle(shape.flat().map((p) => mapToPlan({ x: 0, z: 0 }, t, p)));
      let way = { score: -1, north: t, x: 0, z: 0, d: Infinity };
      for (let dx = -2; dx <= 2; dx += step)
        for (let dz = -2; dz <= 2; dz += step) {
          const ox = mid[0] - cx + dx;
          const oz = mid[1] - cz + dz;
          let hit = 0;
          for (const [x, z] of turned) if (grid.has(x + ox, z + oz)) hit++;
          // how well the two lie on each other: the shared part of both together
          const score = hit / (turned.length + grid.count - hit);
          const d = Math.hypot(dx, dz);
          if (score > way.score + 1e-9 || (score > way.score - 1e-9 && d < way.d)) way = { score, north: t, x: ox, z: oz, d };
        }
      ways.push(way);
    }
  }
  const top = Math.max(...ways.map((w) => w.score));
  const pick = ways.filter((w) => w.score >= top - 0.03).sort((p, q) => Math.abs(wrap(p.north - north)) - Math.abs(wrap(q.north - north)))[0];
  return { north: Math.round(pick.north * 10) / 10, x: Math.round(pick.x * 100) / 100, z: Math.round(pick.z * 100) / 100 };
}

/** The edges on the outside of a set of rooms: the ones no other room shares. */
export function outerEdges(rooms: Vec2[][]): [Vec2, Vec2][] {
  const key = (p: Vec2) => `${p[0].toFixed(2)},${p[1].toFixed(2)}`;
  const id = ([a, b]: [Vec2, Vec2]) => [key(a), key(b)].sort().join("|");
  const edges = rooms.flatMap((r) => ringEdges(r));
  const count = new Map<string, number>();
  for (const e of edges) count.set(id(e), (count.get(id(e)) ?? 0) + 1);
  return edges.filter((e) => count.get(id(e)) === 1);
}
