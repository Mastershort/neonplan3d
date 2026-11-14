// The neighbourhood around the house from OpenStreetMap: buildings (as blocks of their height), streets, paths,
// railways, water, parks, woods and single trees. Fetched once from the Overpass API at the home's location (the one
// set in Home Assistant) and kept in the plan; nothing is fetched again until the user asks. Map data
// © OpenStreetMap contributors, under the Open Database Licence.
//
// Map coordinates are metres from the origin: east and north. The plan turns them by its north setting (degrees
// clockwise from "up") and puts the origin at a plan point, so the sun and the map always agree.

import type { Building, Floor, SurroundArea, Surroundings, SurroundWay, Vec2 } from "./model.ts";
import { centroid, pointInPolygon } from "./model.ts";

/** The radii offered (metres). */
export const SURROUND_RADII = [100, 150, 250] as const;
export const OSM_COPYRIGHT = "https://www.openstreetmap.org/copyright";

// ------------------------------------------------------------------ placing the map under the plan

/** Plan point of a map point for the plan's north (degrees clockwise from up) and the origin's plan point. */
export function mapToPlan(s: Pick<Surroundings, "x" | "z">, north: number, p: Vec2): Vec2 {
  const t = (north * Math.PI) / 180;
  const [e, n] = p;
  return [s.x + e * Math.cos(t) + n * Math.sin(t), s.z + e * Math.sin(t) - n * Math.cos(t)];
}

/** The ground floor's rooms (the house's footprint on the map). */
function footprint(b: Building): Vec2[][] {
  const floors = [...b.floors].sort((p, q) => Math.abs(p.elevation) - Math.abs(q.elevation));
  const gf: Floor | undefined = floors[0];
  return (gf?.rooms ?? []).filter((r) => !r.outdoor && r.points.length >= 3).map((r) => r.points);
}

/** The house's middle in the plan (the middle of the ground floor's box), null without rooms. */
export function planMiddle(b: Building): Vec2 | null {
  const pts = footprint(b).flat();
  if (!pts.length) return null;
  const xs = pts.map((p) => p[0]);
  const zs = pts.map((p) => p[1]);
  return [(Math.min(...xs) + Math.max(...xs)) / 2, (Math.min(...zs) + Math.max(...zs)) / 2];
}

/** The map building at the home's location: the one around the origin, else the nearest within 30 m. */
export function homeBuilding(s: Pick<Surroundings, "buildings">): number | null {
  let best: number | null = null;
  let dist = 30;
  s.buildings.forEach((b, i) => {
    if (pointInPolygon([0, 0], b.p)) {
      best = i;
      dist = -1;
      return;
    }
    if (dist < 0) return;
    const [cx, cz] = centroid(b.p);
    const d = Math.hypot(cx, cz);
    if (d < dist) {
      dist = d;
      best = i;
    }
  });
  return best;
}

/** The edges of a closed polygon. */
export function ringEdges(poly: readonly Vec2[]): [Vec2, Vec2][] {
  return poly.map((p, i) => [p, poly[(i + 1) % poly.length]] as [Vec2, Vec2]);
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
 * Lays the map under the plan: the house's own building on the map onto the plan's ground floor. The north is turned
 * so that the building's walls run along the plan's walls; of the four ways that fit, the one closest to the north
 * set so far wins (a plan drawn with north up keeps it). Returns the north and the origin's plan point.
 */
export function placeUnderPlan(s: Pick<Surroundings, "buildings">, own: number | null, b: Building): { north: number; x: number; z: number } {
  const north = b.settings.north ?? 0;
  const mid = planMiddle(b);
  const home = own !== null ? s.buildings[own] : undefined;
  if (!mid || !home) return { north, x: mid?.[0] ?? 0, z: mid?.[1] ?? 0 };
  // the map's longest wall, in the plan's own way of measuring (x east, z down = south): (e, -n)
  const mapDir = mainDirection(ringEdges(home.p.map(([e, n]) => [e, -n] as Vec2)));
  const planDir = mainDirection(outerEdges(footprint(b)));
  // turning the map by t turns its directions by t (clockwise in the plan)
  const base = planDir - mapDir;
  let bestNorth = north;
  let diff = Infinity;
  for (let k = 0; k < 4; k++) {
    const t = wrap(base + k * 90);
    const d = Math.abs(wrap(t - north));
    if (d < diff) {
      diff = d;
      bestNorth = Math.round((((t % 360) + 360) % 360) * 10) / 10;
    }
  }
  const [cx, cz] = centroid(home.p);
  const at = mapToPlan({ x: 0, z: 0 }, bestNorth, [cx, cz]);
  return { north: bestNorth, x: Math.round((mid[0] - at[0]) * 100) / 100, z: Math.round((mid[1] - at[1]) * 100) / 100 };
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

/**
 * Which map buildings stand where the plan already has the house (the own one, and any other whose middle lies in
 * a room of the ground floor – an annex drawn in the plan): they are not drawn.
 */
export function hiddenBuildings(s: Surroundings, b: Building): Set<number> {
  const out = new Set<number>();
  if (typeof s.own === "number") out.add(s.own);
  const rooms = footprint(b);
  const north = b.settings.north ?? 0;
  s.buildings.forEach((bd, i) => {
    const mid = mapToPlan(s, north, centroid(bd.p));
    if (rooms.some((r) => pointInPolygon(mid, r))) out.add(i);
  });
  return out;
}

/** The neighbourhood in plan coordinates, ready to draw (nothing when it is switched off or empty). */
export interface PlacedSurroundings {
  buildings: { p: Vec2[]; h: number }[];
  ways: { p: Vec2[]; w: number; k: SurroundWay["k"] }[];
  areas: { p: Vec2[]; k: SurroundArea["k"] }[];
  trees: Vec2[];
}

export function placedSurroundings(b: Building | null | undefined): PlacedSurroundings | null {
  const s = b?.settings.surroundings;
  if (!b || !s?.on) return null;
  const north = b.settings.north ?? 0;
  const at = (p: Vec2) => mapToPlan(s, north, p);
  const hidden = hiddenBuildings(s, b);
  return {
    buildings: s.buildings.filter((_, i) => !hidden.has(i)).map((bd) => ({ p: bd.p.map(at), h: bd.h })),
    ways: s.ways.map((w) => ({ p: w.p.map(at), w: w.w, k: w.k })),
    areas: s.areas.map((a) => ({ p: a.p.map(at), k: a.k })),
    trees: s.trees.map(at),
  };
}

/** A short key that changes whenever what is drawn of the neighbourhood changes (for redrawing shadows). */
export function surroundKey(b: Building | null | undefined): string {
  const s = b?.settings.surroundings;
  return s?.on ? `${s.at},${s.x},${s.z},${s.own ?? ""},${s.buildings.length}` : "";
}

/**
 * The map turned by `delta` degrees about the house's middle (the house stays where it is, the north turns with it,
 * so the sun follows): the new north and origin.
 */
export function turnMap(s: Pick<Surroundings, "x" | "z">, north: number, delta: number, mid: Vec2): { north: number; x: number; z: number } {
  const t = (delta * Math.PI) / 180;
  const dx = s.x - mid[0];
  const dz = s.z - mid[1];
  const n = (((north + delta) % 360) + 360) % 360;
  return { north: Math.round(n * 10) / 10, x: Math.round((mid[0] + dx * Math.cos(t) - dz * Math.sin(t)) * 100) / 100, z: Math.round((mid[1] + dx * Math.sin(t) + dz * Math.cos(t)) * 100) / 100 };
}
