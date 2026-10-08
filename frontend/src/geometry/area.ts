// Net floor area of a room (#216): the drawn area minus what the walls take inside it – half of every shared
// wall (they sit on the room line), free walls standing in the room, and the gap behind a free wall built in
// front of a room wall (an installation wall a few centimetres off the outer wall).

import { pointInPolygon, polygonArea, signedArea, type Floor, type Room, type Vec2 } from "../model.ts";
import { generateWalls, type Wall, type WallOptions } from "./walls.ts";

/** Clip a polygon (any shape) by a convex polygon (Sutherland–Hodgman); both in the plan. */
export function clipConvex(subject: readonly Vec2[], clip: readonly Vec2[]): Vec2[] {
  // the clipper's orientation decides which side is inside
  const ccw = signedArea(clip) > 0 ? 1 : -1;
  let out: Vec2[] = [...subject];
  for (let i = 0; i < clip.length && out.length; i++) {
    const a = clip[i];
    const b = clip[(i + 1) % clip.length];
    const side = (p: Vec2) => ccw * ((b[0] - a[0]) * (p[1] - a[1]) - (b[1] - a[1]) * (p[0] - a[0]));
    const input = out;
    out = [];
    for (let j = 0; j < input.length; j++) {
      const p = input[j];
      const q = input[(j + 1) % input.length];
      const sp = side(p);
      const sq = side(q);
      if (sp >= 0) out.push(p);
      if ((sp >= 0) !== (sq >= 0)) {
        const t = sp / (sp - sq);
        out.push([p[0] + (q[0] - p[0]) * t, p[1] + (q[1] - p[1]) * t]);
      }
    }
  }
  return out;
}

/** Whether a polygon is convex (a stairwell rectangle, two stacked rectangles merged into one). */
export function isConvex(p: readonly Vec2[]): boolean {
  let sign = 0;
  for (let i = 0; i < p.length; i++) {
    const a = p[i];
    const b = p[(i + 1) % p.length];
    const c = p[(i + 2) % p.length];
    const cross = (b[0] - a[0]) * (c[1] - b[1]) - (b[1] - a[1]) * (c[0] - b[0]);
    if (Math.abs(cross) < 1e-9) continue;
    if (sign && Math.sign(cross) !== sign) return false;
    sign = Math.sign(cross);
  }
  return true;
}

const area = (p: readonly Vec2[]) => (p.length >= 3 ? Math.abs(polygonArea(p as Vec2[])) : 0);

/** How far a room wall reaches into the room on the room's side (0 for an exterior wall). */
function intrusion(w: Wall, roomId: string): number {
  if (w.exterior) return 0;
  return w.roomLeft === roomId ? w.left : w.roomRight === roomId ? w.right : 0;
}

/** The room's net floor area in m² (the drawn area when nothing takes space inside it). */
export function netRoomArea(room: Room, floor: Floor, options: WallOptions): number {
  const drawn = area(room.points);
  if (room.points.length < 3) return drawn;
  const { walls } = generateWalls(floor.rooms, options, floor.walls ?? []);
  let net = drawn;
  const own = walls.filter((w) => !w.free && (w.roomLeft === room.id || w.roomRight === room.id));
  for (const w of walls) {
    const mid: Vec2 = [(w.a[0] + w.b[0]) / 2, (w.a[1] + w.b[1]) / 2];
    if (w.free ? !pointInPolygon(mid, room.points) : !own.includes(w)) continue;
    net -= area(clipConvex(room.points, w.footprint));
    if (!w.free) continue;
    // a free wall in front of a room wall: the gap behind it is no floor either (Vorwand, #216)
    const len = Math.hypot(w.b[0] - w.a[0], w.b[1] - w.a[1]);
    if (len < 0.2) continue;
    const u: Vec2 = [(w.b[0] - w.a[0]) / len, (w.b[1] - w.a[1]) / len];
    let best: { gap: number; overlap: number } | null = null;
    for (const e of own) {
      const el = Math.hypot(e.b[0] - e.a[0], e.b[1] - e.a[1]);
      if (el < 0.2) continue;
      const v: Vec2 = [(e.b[0] - e.a[0]) / el, (e.b[1] - e.a[1]) / el];
      if (Math.abs(u[0] * v[1] - u[1] * v[0]) > 0.05) continue;
      // distance of the free wall's line from the room wall's line, and their overlap along it
      const d = Math.abs((mid[0] - e.a[0]) * v[1] - (mid[1] - e.a[1]) * v[0]);
      const s0 = (w.a[0] - e.a[0]) * v[0] + (w.a[1] - e.a[1]) * v[1];
      const s1 = (w.b[0] - e.a[0]) * v[0] + (w.b[1] - e.a[1]) * v[1];
      const overlap = Math.min(el, Math.max(s0, s1)) - Math.max(0, Math.min(s0, s1));
      const gap = d - (w.left + w.right) / 2 - intrusion(e, room.id);
      if (overlap > 0.1 && gap > 0 && d < 1.0 && (!best || gap < best.gap)) best = { gap, overlap };
    }
    if (best) net -= best.gap * best.overlap;
  }
  return Math.max(0, net);
}
