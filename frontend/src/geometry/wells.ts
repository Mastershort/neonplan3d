// When a cellar window gets a light well (#524): one decision for the 3D view (earth.ts draws the well) and the
// editor (it offers the "Light well" switch exactly where 3D draws one). No three.js here, the editor bundle uses it.

import type { Building, Floor, Opening, Vec2 } from "../model.ts";
import { outdoorStanding, outdoorTopAt, pointInPolygon, terrainAt } from "../model.ts";
import { floorOutline } from "../roof-sections.ts";
import { generateWalls, locateOpening, openingHost } from "./walls.ts";

/** A light well's depth from the wall's outer face when the window sets none (m). */
export const WELL_DEPTH = 0.8;
/** How far out from the window's outer face the ground in front of it is looked at (m). */
const PROBE = 0.3;

/** The outline of a floor's outer walls, null without rooms. */
export function earthOutline(b: Building, floor: Floor): Vec2[] | null {
  if (!floor.rooms.some((r) => r.points.length >= 3)) return null;
  return floorOutline(floor.rooms, floor.walls ?? [], b.settings.wall_exterior, b.settings.wall_interior);
}

/** Whether a floor reaches below the ground somewhere along its outer walls (and so gets earth). */
export function inGround(b: Building, floor: Floor): boolean {
  if (b.settings.terrain?.earth === false || floor.elevation > 0.3) return false;
  const outline = earthOutline(b, floor);
  return !!outline && outline.some(([x, z]) => terrainAt(x, z) - floor.elevation > -0.15);
}

/**
 * The highest surface of an outdoor area lying on the ground over point `p` (lawn, path, terrace, gravel …), its
 * slope at that point included, in the heights of `floor`; null where none lies.
 */
export function coverAt(b: Building, floor: Floor, p: Vec2): number | null {
  let top: number | null = null;
  for (const f of b.floors) {
    // only areas on the ground: a balcony on an upper floor floats above (#602)
    if (f.elevation > 0.3) continue;
    for (const a of f.outdoor ?? []) {
      if (a.points.length < 3 || a.type === "pool" || a.type === "balcony" || outdoorStanding(a.type) || !pointInPolygon(p, a.points)) continue;
      const y = f.elevation + outdoorTopAt(f, a, p[0], p[1]) - floor.elevation;
      top = top === null ? y : Math.max(top, y);
    }
  }
  return top;
}

/**
 * Whether a window in an outer wall with its sill at `sill` (the floor's heights) gets a light well in 3D, its own
 * "no light well" switch aside: the floor lies in the ground and the sill lies more than 5 cm under the ground at
 * `at` (the window's outer face). With `out` (the wall's outward direction) a lawn or path laid higher than the
 * ground just in front of the window counts as the ground there: a plan with a low ground and its garden raised up
 * to the house lost the wells of its cellar windows as soon as they sat above that low ground (#890).
 */
export function wellBelowGround(b: Building, floor: Floor, exterior: boolean, sill: number, at: Vec2, out?: Vec2): boolean {
  if (!exterior || !inGround(b, floor)) return false;
  let ground = terrainAt(at[0], at[1]) - floor.elevation;
  if (out) ground = Math.max(ground, coverAt(b, floor, [at[0] + out[0] * PROBE, at[1] + out[1] * PROBE]) ?? -Infinity);
  return sill < Math.min(floor.height, ground) - 0.05;
}

/**
 * The editor's side of the same decision: where the window sits in the walls (an outer wall, its sill as 3D clamps
 * it under a lower wall top) and whether 3D gives it a light well there.
 */
export function windowGetsWell(b: Building, floor: Floor, o: Opening): boolean {
  if (o.type !== "window") return false;
  const host = openingHost(o, floor.rooms, floor.walls ?? []);
  if (!host) return false;
  const walls = generateWalls(floor.rooms, { exterior: b.settings.wall_exterior, interior: b.settings.wall_interior }, floor.walls ?? []).walls;
  const hit = locateOpening(walls, o, host);
  if (!hit) return false;
  const { wall, s } = hit;
  const len = Math.hypot(wall.b[0] - wall.a[0], wall.b[1] - wall.a[1]);
  const u: Vec2 = len > 1e-9 ? [(wall.b[0] - wall.a[0]) / len, (wall.b[1] - wall.a[1]) / len] : [1, 0];
  const top = Math.min(Math.min(floor.height, wall.height ?? floor.height) - 0.02, o.sill + o.height);
  const sill = Math.max(0, Math.min(o.sill, top - 0.1));
  // an outer wall has its room on the left: outward is to the right, its outer face `right` away from the line
  const out: Vec2 = [u[1], -u[0]];
  const face: Vec2 = [wall.a[0] + u[0] * s + out[0] * wall.right, wall.a[1] + u[1] * s + out[1] * wall.right];
  return wellBelowGround(b, floor, wall.exterior, sill, face, out);
}
