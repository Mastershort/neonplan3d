// Areas outside the house: lawn, terrace, path, driveway, pool, bed, hedge and fence, in the neon look.
// Flat areas lie at ground level (the underside of the ground floor slab), the terrace a little higher,
// the pool water below; hedges are dark green blocks, fences posts with rails along the outline.

import { Color } from "three";
import type { Floor, OutdoorArea, OutdoorType, Vec2 } from "../model.ts";
import { groundLevel, OUTDOOR_TOP, signedArea } from "../model.ts";
import { ALWAYS, type GeoBuffer, type LineBuffer, pushPrism, shade, triangulate } from "./geo.ts";

interface Look {
  color: number;
  side: number;
  edge: number;
  edgeAlpha: number;
}

const LOOKS: Record<OutdoorType, Look> = {
  lawn: { color: 0x0d2620, side: 0x0b1e1a, edge: 0x3de0a0, edgeAlpha: 0.16 },
  terrace: { color: 0x1d1c30, side: 0x151527, edge: 0x5b7cff, edgeAlpha: 0.32 },
  path: { color: 0x1a2133, side: 0x141a28, edge: 0x5b7cff, edgeAlpha: 0.22 },
  driveway: { color: 0x161c2b, side: 0x111624, edge: 0x5b7cff, edgeAlpha: 0.18 },
  pool: { color: 0x0b3a5a, side: 0x0d2438, edge: 0x37e0ff, edgeAlpha: 0.6 },
  bed: { color: 0x1a1512, side: 0x14100e, edge: 0x3de0a0, edgeAlpha: 0.2 },
  hedge: { color: 0x16402f, side: 0x103024, edge: 0x3de0a0, edgeAlpha: 0.35 },
  fence: { color: 0x1d2946, side: 0x1d2946, edge: 0x5b7cff, edgeAlpha: 0.45 },
};

/** Height of the visible surface of an area (for the lighting layer). */
export function outdoorSurface(floor: Floor, a: OutdoorArea): number {
  return groundLevel(floor) + (a.offset ?? 0) + (a.type === "hedge" || a.type === "fence" ? 0.01 : OUTDOOR_TOP[a.type]);
}

function ccw(points: Vec2[]): Vec2[] {
  return signedArea(points) >= 0 ? points : [...points].reverse();
}

export function pushOutdoor(buf: GeoBuffer, lines: LineBuffer, floor: Floor): void {
  const ground = groundLevel(floor);
  for (const a of floor.outdoor ?? []) {
    if (a.points.length < 3) continue;
    // an area may sit above or below the ground (a driveway down to a lower garage)
    const g = ground + (a.offset ?? 0);
    // hedges and fences take their own height; the outline can be switched off per area
    const own = (a.type === "hedge" || a.type === "fence") && a.height ? a.height : OUTDOOR_TOP[a.type];
    const look = { ...LOOKS[a.type], top: own };
    const poly = ccw(a.points);
    const edge = shade(look.edge, look.edgeAlpha);
    const outline = (y: number) => {
      if (a.outline === false) return;
      for (let i = 0; i < poly.length; i++) {
        const p = poly[i];
        const q = poly[(i + 1) % poly.length];
        lines.seg([p[0], y, p[1]], [q[0], y, q[1]], edge, ALWAYS);
      }
    };
    switch (a.type) {
      case "pool": {
        // rim around the water, water surface below ground
        const water = new Color(look.color);
        for (const [i, j, k] of triangulate(poly)) {
          const p = poly[i];
          const q = poly[j];
          const r = poly[k];
          buf.tri([p[0], g + look.top, p[1]], [r[0], g + look.top, r[1]], [q[0], g + look.top, q[1]], water, water, water, undefined, ALWAYS);
        }
        // inner sides from the water up to the rim, seen from inside the pool
        const sideC = new Color(look.side);
        for (let i = 0; i < poly.length; i++) {
          const p = poly[i];
          const q = poly[(i + 1) % poly.length];
          buf.tri([q[0], g + look.top, q[1]], [q[0], g + 0.06, q[1]], [p[0], g + 0.06, p[1]], sideC, sideC, sideC, undefined, ALWAYS);
          buf.tri([q[0], g + look.top, q[1]], [p[0], g + 0.06, p[1]], [p[0], g + look.top, p[1]], sideC, sideC, sideC, undefined, ALWAYS);
        }
        outline(g + 0.06);
        outline(g + look.top + 0.005);
        break;
      }
      case "fence": {
        // posts every ~2 m and two rails along the outline
        for (let i = 0; i < poly.length; i++) {
          const p = poly[i];
          const q = poly[(i + 1) % poly.length];
          const len = Math.hypot(q[0] - p[0], q[1] - p[1]);
          const n = Math.max(1, Math.round(len / 2));
          for (let k = 0; k < n; k++) {
            const t = k / n;
            const x = p[0] + (q[0] - p[0]) * t;
            const z = p[1] + (q[1] - p[1]) * t;
            pushPrism(buf, ccw([[x - 0.04, z - 0.04], [x + 0.04, z - 0.04], [x + 0.04, z + 0.04], [x - 0.04, z + 0.04]]), g, g + look.top, look.side, look.color);
          }
          for (const y of [0.35, 0.85]) lines.seg([p[0], g + y * look.top, p[1]], [q[0], g + y * look.top, q[1]], edge, ALWAYS);
        }
        break;
      }
      default: {
        // a flat area is a thin prism; terrace, bed and hedge are raised blocks
        const top = g + look.top;
        pushPrism(buf, poly, g, top, look.side, look.color, { aoFrom: g });
        outline(top + 0.004);
        if (a.type === "hedge") outline(g + 0.004);
      }
    }
  }
}
