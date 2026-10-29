// The plan as the locating service needs it: the rooms (with floor and Home Assistant area) and which rooms a door joins.

import { generateWalls, locateOpening, openingHost } from "../geometry/walls.ts";
import { pointInPolygon, zonesOf, type Building } from "../model.ts";

export interface LocateRoom {
  id: string;
  name: string;
  floor: string;
  area_id: string | null;
}

/** The rooms and the outdoor areas that act as rooms (a terrace with an area, #828). */
export function locateRooms(b: Building): LocateRoom[] {
  return b.floors.flatMap((f) => zonesOf(f).map((r) => ({ id: r.id, name: r.name, floor: f.name, area_id: r.area_id ?? null })));
}

/**
 * Room pairs joined by a door or a passage (a window down to the floor counts, a normal window does not); a door
 * in an outer wall joins its room with the outdoor area in front of it (#828).
 */
export function doorPairs(b: Building): [string, string][] {
  const out: [string, string][] = [];
  const seen = new Set<string>();
  for (const floor of b.floors) {
    const walls = generateWalls(floor.rooms, { exterior: b.settings.wall_exterior, interior: b.settings.wall_interior }, floor.walls ?? []).walls;
    for (const o of floor.openings) {
      if (o.type === "window" && !(o.sill < 0.1)) continue;
      const host = openingHost(o, floor.rooms, floor.walls ?? []);
      const at = host && locateOpening(walls, o, host);
      let a = at?.wall.roomLeft;
      let c = at?.wall.roomRight;
      if (at && (!a || !c)) {
        // the outdoor area half a metre out from the middle of the door, on the wall's open side
        const w = at.wall;
        const len = Math.hypot(w.b[0] - w.a[0], w.b[1] - w.a[1]) || 1;
        const u = [(w.b[0] - w.a[0]) / len, (w.b[1] - w.a[1]) / len];
        const side = a ? -1 : 1;
        const out = (side > 0 ? w.left : w.right) + 0.5;
        const s = at.s;
        const p: [number, number] = [w.a[0] + u[0] * s - u[1] * side * out, w.a[1] + u[1] * s + u[0] * side * out];
        const zone = zonesOf(floor).find((r) => r.outdoor && pointInPolygon(p, r.points))?.id;
        if (a) c = zone;
        else a = zone;
      }
      if (!a || !c || a === c) continue;
      const key = [a, c].sort().join("|");
      if (seen.has(key)) continue;
      seen.add(key);
      out.push([a, c]);
    }
  }
  return out;
}

/** The room a point of a floor lies in, or null. */
export function roomAt(b: Building, floorId: string, x: number, z: number): string | null {
  const floor = b.floors.find((f) => f.id === floorId);
  return floor ? (zonesOf(floor).find((r) => pointInPolygon([x, z], r.points))?.id ?? null) : null;
}
