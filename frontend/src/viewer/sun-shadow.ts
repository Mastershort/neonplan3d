// The house's shadow on the ground: every wall and roof face is laid down along the sun's rays onto the lawn. The
// union of those flat shapes is the shadow; it is drawn once into a small texture (overlaps do not darken twice)
// and only again when the sun has moved a little – no shadow maps, nothing per frame, light enough for tablets.

import type { Building } from "../model.ts";
import type { RoofGeometry } from "./roof.ts";
import { triangulate } from "./geo.ts";

/** A shadow longer than this is left at this length (a low sun would stretch it over the whole plot). */
export const SHADOW_REACH = 40;

/**
 * The house's shadow as flat triangles (x, z per corner, six numbers a triangle) on the ground at height `ground`,
 * for a sun `elevation` degrees high whose light comes from the plan direction `toSun` (unit, x right, z down).
 */
export function houseShadow(b: Building, roofs: readonly RoofGeometry[], toSun: [number, number], elevation: number, ground: number): number[] {
  const out: number[] = [];
  if (elevation <= 0) return out;
  const reach = 1 / Math.tan((elevation * Math.PI) / 180);
  // a point at height y lands this far away from the sun
  const land = (x: number, y: number, z: number): [number, number] => {
    const d = Math.min(SHADOW_REACH, Math.max(0, y - ground) * reach);
    return [x - toSun[0] * d, z - toSun[1] * d];
  };
  const tri = (a: [number, number], b2: [number, number], c: [number, number]) => out.push(a[0], a[1], b2[0], b2[1], c[0], c[1]);
  for (const floor of b.floors) {
    for (const room of floor.rooms) {
      if (room.outdoor || room.points.length < 3) continue;
      const top = floor.elevation + (room.ceiling_height ?? floor.height);
      if (top <= ground) continue;
      const base = Math.max(ground, floor.elevation);
      const lo = room.points.map(([x, z]) => land(x, base, z));
      const hi = room.points.map(([x, z]) => land(x, top, z));
      for (const [i, j, k] of triangulate(room.points)) {
        tri(lo[i], lo[j], lo[k]);
        tri(hi[i], hi[j], hi[k]);
      }
      // each wall sweeps a band between where its foot and its top land
      for (let i = 0; i < room.points.length; i++) {
        const j = (i + 1) % room.points.length;
        tri(lo[i], lo[j], hi[j]);
        tri(lo[i], hi[j], hi[i]);
      }
    }
  }
  for (const roof of roofs) {
    const y0 = roof.floor.elevation + roof.base;
    const p = roof.solid.p;
    for (let i = 0; i + 8 < p.length; i += 9) {
      tri(land(p[i], y0 + p[i + 1], p[i + 2]), land(p[i + 3], y0 + p[i + 4], p[i + 5]), land(p[i + 6], y0 + p[i + 7], p[i + 8]));
    }
  }
  return out;
}

/** The box around the triangles (x0, z0, x1, z1), or null without any. */
export function shadowBox(tris: readonly number[]): [number, number, number, number] | null {
  if (!tris.length) return null;
  let x0 = Infinity;
  let z0 = Infinity;
  let x1 = -Infinity;
  let z1 = -Infinity;
  for (let i = 0; i < tris.length; i += 2) {
    x0 = Math.min(x0, tris[i]);
    x1 = Math.max(x1, tris[i]);
    z0 = Math.min(z0, tris[i + 1]);
    z1 = Math.max(z1, tris[i + 1]);
  }
  return [x0, z0, x1, z1];
}
