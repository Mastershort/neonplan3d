// Snapping furniture against the walls of its room: the back (or a side, when it stands sideways)
// turns to the nearest wall and the item sits flush with the wall face. Shared by the 2D editor and
// furnishing in 3D.

import type { Floor, Furniture, Vec2 } from "../model.ts";
import { furnitureFootprint, pointInPolygon, signedArea } from "../model.ts";

/** Furniture closer than this to a wall snaps against it (metres). */
export const WALL_SNAP = 0.25;

const round = (v: number) => Math.round(v * 1000) / 1000;

/**
 * A point dragged from (x0, z0) to (x, z) stays in the room it started in: outside the room's polygon the
 * move slides along the wall (only x or only z), or stops. Items that start outside every room move freely.
 */
export function keepInRoom(floor: Floor, x0: number, z0: number, x: number, z: number): [number, number] {
  const room = floor.rooms.find((r) => r.points.length >= 3 && pointInPolygon([x0, z0], r.points));
  if (!room || pointInPolygon([x, z], room.points)) return [x, z];
  if (pointInPolygon([x, z0], room.points)) return [x, z0];
  if (pointInPolygon([x0, z], room.points)) return [x0, z];
  return [x0, z0];
}

/**
 * An item moved to (x, z) keeps its whole footprint inside the room it stands in, up to the wall faces
 * (interior walls stand half their thickness into the room): pushed against a wall it stops there instead of
 * sliding into it. Rooms are taken as their straight edges; the room is the one under the item's old centre.
 * `slack`: a wall holds a corner that stood at most this far behind it before (a piece just turned: more).
 */
export function clampIntoRoom(floor: Floor, f: Pick<Furniture, "x" | "z" | "w" | "d" | "rotation">, x: number, z: number, wallInterior: number, slack = 0.05): [number, number] {
  const room = floor.rooms.find((r) => r.points.length >= 3 && pointInPolygon([f.x, f.z], r.points));
  if (!room) return [x, z];
  const pts = room.points;
  const sgn = signedArea(pts) >= 0 ? 1 : -1;
  const before = furnitureFootprint({ ...f } as Furniture);
  let nx = x;
  let nz = z;
  // twice: a push off one wall can push into the next one in a corner
  for (let pass = 0; pass < 2; pass++) {
    const corners = furnitureFootprint({ ...f, x: nx, z: nz } as Furniture);
    for (let i = 0; i < pts.length; i++) {
      const a = pts[i];
      const b = pts[(i + 1) % pts.length];
      const len = Math.hypot(b[0] - a[0], b[1] - a[1]);
      if (len < 0.05) continue;
      const u: Vec2 = [(b[0] - a[0]) / len, (b[1] - a[1]) / len];
      const n: Vec2 = [-u[1] * sgn, u[0] * sgn];
      // an interior wall: another room has an edge along this one (overlapping by more than a few cm)
      const off = (q: Vec2) => Math.abs((q[0] - a[0]) * n[0] + (q[1] - a[1]) * n[1]);
      const at = (q: Vec2) => (q[0] - a[0]) * u[0] + (q[1] - a[1]) * u[1];
      const shared = floor.rooms.some((r) =>
        r.id !== room.id &&
        r.points.some((p, k) => {
          const q = r.points[(k + 1) % r.points.length];
          if (off(p) > 0.02 || off(q) > 0.02) return false;
          return Math.min(len, Math.max(at(p), at(q))) - Math.max(0, Math.min(at(p), at(q))) > 0.05;
        }),
      );
      const face = shared ? wallInterior / 2 : 0;
      // only corners in front of this edge (along its length) are held by it
      let worst = 0;
      corners.forEach((c, k) => {
        const along = (c[0] - a[0]) * u[0] + (c[1] - a[1]) * u[1];
        if (along < -0.01 || along > len + 0.01) return;
        const d = (c[0] - a[0]) * n[0] + (c[1] - a[1]) * n[1] - face;
        // only a wall the corner was in front of before the move holds it (not one of another wing of an L-shape)
        const b0 = before[k];
        if ((b0[0] - a[0]) * n[0] + (b0[1] - a[1]) * n[1] - face < -slack) return;
        if (d < worst) worst = d;
      });
      if (worst < -1e-4) {
        nx -= n[0] * worst;
        nz -= n[1] * worst;
      }
    }
  }
  return [round(nx), round(nz)];
}

export function snapToWall(floor: Floor, f: Furniture, wallInterior: number, reach = WALL_SNAP): { x: number; z: number; rotation: number } | null {
  const room = floor.rooms.find((r) => r.points.length >= 3 && pointInPolygon([f.x, f.z], r.points));
  if (!room) return null;
  const pts = room.points;
  const sgn = signedArea(pts) >= 0 ? 1 : -1;
  const half = wallInterior / 2;
  let best: { x: number; z: number; rotation: number; gap: number } | null = null;
  for (let i = 0; i < pts.length; i++) {
    const a = pts[i];
    const b = pts[(i + 1) % pts.length];
    const len = Math.hypot(b[0] - a[0], b[1] - a[1]);
    if (len < 0.3) continue;
    const u: Vec2 = [(b[0] - a[0]) / len, (b[1] - a[1]) / len];
    // normal into the room
    const n: Vec2 = [-u[1] * sgn, u[0] * sgn];
    const along = (f.x - a[0]) * u[0] + (f.z - a[1]) * u[1];
    if (along < 0 || along > len) continue;
    // interior walls stand on the room edge, so their face is half the wall thickness inside
    const shared = floor.rooms.some(
      (r) =>
        r.id !== room.id &&
        r.points.some((p, k) => {
          const q = r.points[(k + 1) % r.points.length];
          const d0 = Math.abs((p[0] - a[0]) * n[0] + (p[1] - a[1]) * n[1]);
          const d1 = Math.abs((q[0] - a[0]) * n[0] + (q[1] - a[1]) * n[1]);
          return d0 < 0.02 && d1 < 0.02;
        }),
    );
    const face = shared ? half : 0;
    const dist = (f.x - a[0]) * n[0] + (f.z - a[1]) * n[1] - face;
    // rotation that turns the back to the wall (front along n)
    const back = (Math.atan2(-n[0], n[1]) * 180) / Math.PI;
    const diff = (r: number) => Math.abs(((f.rotation - r + 540) % 360) - 180);
    const options = [
      { rotation: back, extent: f.d / 2 },
      { rotation: back + 90, extent: f.w / 2 },
      { rotation: back - 90, extent: f.w / 2 },
    ];
    const pick = options.reduce((p, q) => (diff(q.rotation) < diff(p.rotation) ? q : p));
    if (diff(pick.rotation) > 50) continue;
    const gap = dist - pick.extent;
    if (Math.abs(gap) > reach || (best && Math.abs(gap) >= Math.abs(best.gap))) continue;
    best = {
      x: round(f.x - n[0] * gap),
      z: round(f.z - n[1] * gap),
      rotation: ((Math.round(pick.rotation) % 360) + 360) % 360,
      gap,
    };
  }
  return best ? { x: best.x, z: best.z, rotation: best.rotation } : null;
}
