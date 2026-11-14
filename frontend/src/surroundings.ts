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
export function footprint(b: Building): Vec2[][] {
  const floors = [...b.floors].sort((p, q) => Math.abs(p.elevation) - Math.abs(q.elevation));
  const gf: Floor | undefined = floors[0];
  return (gf?.rooms ?? []).filter((r) => !r.outdoor && r.points.length >= 3).map((r) => r.points);
}

/** Distance of a point to a segment. */
export function segDist(p: Vec2, a: Vec2, b: Vec2): number {
  const dx = b[0] - a[0];
  const dz = b[1] - a[1];
  const l = dx * dx + dz * dz;
  const t = l ? Math.max(0, Math.min(1, ((p[0] - a[0]) * dx + (p[1] - a[1]) * dz) / l)) : 0;
  return Math.hypot(p[0] - a[0] - t * dx, p[1] - a[1] - t * dz);
}

/** The middle of a set of points' box. */
export function boxMiddle(pts: readonly Vec2[]): Vec2 {
  const xs = pts.map((p) => p[0]);
  const zs = pts.map((p) => p[1]);
  return [(Math.min(...xs) + Math.max(...xs)) / 2, (Math.min(...zs) + Math.max(...zs)) / 2];
}

/** The house's middle in the plan (the middle of the ground floor's box), null without rooms. */
export function planMiddle(b: Building): Vec2 | null {
  const pts = footprint(b).flat();
  return pts.length ? boxMiddle(pts) : null;
}

/** Grid points inside polygons, each point once (step in metres). */
export function gridPoints(polys: readonly (readonly Vec2[])[], step: number): Vec2[] {
  const out: Vec2[] = [];
  polys.forEach((poly, k) => {
    const x0 = Math.min(...poly.map((p) => p[0]));
    const z0 = Math.min(...poly.map((p) => p[1]));
    const x1 = Math.max(...poly.map((p) => p[0]));
    const z1 = Math.max(...poly.map((p) => p[1]));
    for (let x = Math.floor(x0 / step) * step + step / 2; x < x1; x += step)
      for (let z = Math.floor(z0 / step) * step + step / 2; z < z1; z += step) {
        const p: Vec2 = [x, z];
        if (pointInPolygon(p, poly) && !polys.slice(0, k).some((q) => pointInPolygon(p, q))) out.push(p);
      }
  });
  return out;
}

/**
 * The house's rooms as a grid of cells: a cell counts when it lies in a room or within a wall's thickness of one
 * (the map draws a house with its walls, the plan its rooms).
 */
export class PlanGrid {
  readonly x0: number;
  readonly z0: number;
  readonly w: number;
  readonly h: number;
  readonly step: number;
  readonly cells: Uint8Array;
  count = 0;
  constructor(rooms: readonly Vec2[][], step: number, wall = 0.3) {
    const pts = rooms.flat();
    this.step = step;
    this.x0 = Math.min(...pts.map((p) => p[0])) - wall - step;
    this.z0 = Math.min(...pts.map((p) => p[1])) - wall - step;
    this.w = Math.ceil((Math.max(...pts.map((p) => p[0])) + wall + step - this.x0) / step);
    this.h = Math.ceil((Math.max(...pts.map((p) => p[1])) + wall + step - this.z0) / step);
    this.cells = new Uint8Array(this.w * this.h);
    const edges = rooms.flatMap((r) => ringEdges(r));
    for (let i = 0; i < this.w; i++)
      for (let j = 0; j < this.h; j++) {
        const p: Vec2 = [this.x0 + (i + 0.5) * step, this.z0 + (j + 0.5) * step];
        if (rooms.some((r) => pointInPolygon(p, r)) || edges.some(([a, b]) => segDist(p, a, b) < wall)) {
          this.cells[i + j * this.w] = 1;
          this.count++;
        }
      }
  }
  has(x: number, z: number): boolean {
    const i = Math.floor((x - this.x0) / this.step);
    const j = Math.floor((z - this.z0) / this.step);
    return i >= 0 && j >= 0 && i < this.w && j < this.h && this.cells[i + j * this.w] === 1;
  }
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

/**
 * Which map buildings stand where the plan already has the house, so they are not drawn: the own one, and any other
 * that lies for the most part (or with its middle) on the rooms of the ground floor – an annex or garage mapped as a
 * building of its own. Then the user's own choice: buildings hidden by hand, and ones shown although they stand there.
 */
export function hiddenBuildings(s: Surroundings, b: Building): Set<number> {
  const rooms = footprint(b);
  const north = b.settings.north ?? 0;
  const key = `${s.at},${s.x},${s.z},${north},${s.own},${s.hide?.join(".")},${s.show?.join(".")},${s.buildings.length},${JSON.stringify(rooms)}`;
  if (hiddenCache?.key === key) return new Set(hiddenCache.out);
  const out = new Set<number>();
  if (typeof s.own === "number") out.add(s.own);
  if (rooms.length) {
    const step = 0.5;
    const grid = new PlanGrid(rooms, step);
    const pts = rooms.flat();
    const [x0, x1] = [Math.min(...pts.map((p) => p[0])) - 1, Math.max(...pts.map((p) => p[0])) + 1];
    const [z0, z1] = [Math.min(...pts.map((p) => p[1])) - 1, Math.max(...pts.map((p) => p[1])) + 1];
    s.buildings.forEach((bd, i) => {
      if (out.has(i)) return;
      const poly = bd.p.map((p) => mapToPlan(s, north, p));
      if (poly.every(([x]) => x < x0) || poly.every(([x]) => x > x1) || poly.every(([, z]) => z < z0) || poly.every(([, z]) => z > z1)) return;
      if (rooms.some((r) => pointInPolygon(centroid(poly), r))) return out.add(i);
      const samples = gridPoints([poly], step);
      if (samples.length && samples.filter(([x, z]) => grid.has(x, z)).length >= samples.length * 0.4) out.add(i);
    });
  }
  for (const i of s.hide ?? []) out.add(i);
  for (const i of s.show ?? []) out.delete(i);
  hiddenCache = { key, out };
  return new Set(out);
}

let hiddenCache: { key: string; out: Set<number> } | null = null;

/** The neighbourhood in plan coordinates, ready to draw (nothing when it is switched off or empty). */
export interface PlacedSurroundings {
  buildings: { p: Vec2[]; h: number }[];
  ways: { p: Vec2[]; w: number; k: SurroundWay["k"] }[];
  areas: { p: Vec2[]; k: SurroundArea["k"] }[];
  trees: Vec2[];
  /** The neighbours' houses only as outlines on the ground. */
  flat: boolean;
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
    flat: s.flat === true,
  };
}

/** A short key that changes whenever what is drawn of the neighbourhood changes (for redrawing shadows). */
export function surroundKey(b: Building | null | undefined): string {
  const s = b?.settings.surroundings;
  return s?.on ? `${s.at},${s.x},${s.z},${s.own ?? ""},${s.buildings.length},${s.hide?.join(".") ?? ""},${s.show?.join(".") ?? ""},${s.flat ? 1 : 0}` : "";
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
