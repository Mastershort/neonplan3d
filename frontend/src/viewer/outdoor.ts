// Areas outside the house: lawn, terrace, path, driveway, pool, bed, wild patch, hedge, fence and
// pergola, in the neon look. Flat areas lie at ground level (the underside of the ground floor slab),
// the terrace a little higher, the pool water below; hedges are dark green blocks, fences posts with
// rails along the outline, a pergola corner posts with beams, rafters and optional X-bracing. An area
// can sit higher or lower (offset), fall along one direction (slope) and have patches cut out of it.

import { Color } from "three";
import type { Floor, OutdoorArea, OutdoorType, Vec2 } from "../model.ts";
import { bounds, groundLevel, isAxisRect, OUTDOOR_TOP, outdoorDrop, outdoorStanding, pointInPolygon, poolHeight, poolWaterY, signedArea } from "../model.ts";
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
  wild: { color: 0x14211a, side: 0x0f1a14, edge: 0x9ad24f, edgeAlpha: 0.14 },
  hedge: { color: 0x16402f, side: 0x103024, edge: 0x3de0a0, edgeAlpha: 0.35 },
  fence: { color: 0x1d2946, side: 0x1d2946, edge: 0x5b7cff, edgeAlpha: 0.45 },
  pergola: { color: 0x2a2238, side: 0x1f1a2c, edge: 0x5b7cff, edgeAlpha: 0.5 },
};

/** Height of the visible surface of an area (for the lighting layer), at its high edge. */
export function outdoorSurface(floor: Floor, a: OutdoorArea): number {
  if (a.type === "pool") return poolWaterY(floor, a);
  return groundLevel(floor) + (a.offset ?? 0) + (outdoorStanding(a.type) ? 0.01 : OUTDOOR_TOP[a.type]);
}

function ccw(points: Vec2[]): Vec2[] {
  return signedArea(points) >= 0 ? points : [...points].reverse();
}

/**
 * The holes of area `a`: the areas listed after it that are marked "cut", and every pool, lying entirely inside it
 * (a pool drawn into the lawn would otherwise lie under the lawn's surface).
 */
export function outdoorHoles(areas: OutdoorArea[], index: number): Vec2[][] {
  const a = areas[index];
  if (outdoorStanding(a.type) || a.type === "pool") return [];
  const holes: Vec2[][] = [];
  for (let i = 0; i < areas.length; i++) {
    const b = areas[i];
    if (i === index || !((b.cut && i > index) || b.type === "pool") || b.points.length < 3) continue;
    if (b.points.every((p) => pointInPolygon(p, a.points))) holes.push(ccw(b.points));
  }
  return holes;
}

/**
 * A thin box along the segment p -> q (a beam, a rafter), `w` wide, from y0 up to y1 at p. `rise` lifts the q end
 * by that much, so a beam on a sloped pergola follows the slope (#242).
 */
function pushBeam(buf: GeoBuffer, p: Vec2, q: Vec2, w: number, y0: number, y1: number, side: number, top: number, rise = 0): void {
  const dx = q[0] - p[0];
  const dz = q[1] - p[1];
  const l = Math.hypot(dx, dz);
  if (l < 1e-6) return;
  const nx = (-dz / l) * w * 0.5;
  const nz = (dx / l) * w * 0.5;
  if (Math.abs(rise) < 1e-4) {
    pushPrism(buf, ccw([[p[0] + nx, p[1] + nz], [q[0] + nx, q[1] + nz], [q[0] - nx, q[1] - nz], [p[0] - nx, p[1] - nz]]), y0, y1, side, top, { aoFrom: y0 - 1 });
    return;
  }
  // a sloped box: both faces of every quad, so it shows from any side without caring about the winding
  const a = (y: number, s: number): number[] => [p[0] + nx * s, y, p[1] + nz * s];
  const b = (y: number, s: number): number[] => [q[0] + nx * s, y + rise, q[1] + nz * s];
  const quad = (v: number[][], c: Color) => {
    buf.tri(v[0], v[1], v[2], c, c, c, undefined, ALWAYS);
    buf.tri(v[0], v[2], v[3], c, c, c, undefined, ALWAYS);
    buf.tri(v[0], v[2], v[1], c, c, c, undefined, ALWAYS);
    buf.tri(v[0], v[3], v[2], c, c, c, undefined, ALWAYS);
  };
  const topC = new Color(top);
  const sideC = new Color(shade(side, 0.9));
  const lowC = new Color(shade(side, 0.6));
  quad([a(y1, 1), b(y1, 1), b(y1, -1), a(y1, -1)], topC);
  quad([a(y0, 1), b(y0, 1), b(y0, -1), a(y0, -1)], lowC);
  quad([a(y0, 1), b(y0, 1), b(y1, 1), a(y1, 1)], sideC);
  quad([a(y0, -1), b(y0, -1), b(y1, -1), a(y1, -1)], sideC);
  quad([a(y0, 1), a(y0, -1), a(y1, -1), a(y1, 1)], sideC);
  quad([b(y0, 1), b(y0, -1), b(y1, -1), b(y1, 1)], sideC);
}

export function pushOutdoor(buf: GeoBuffer, lines: LineBuffer, floor: Floor): void {
  const ground = groundLevel(floor);
  const areas = floor.outdoor ?? [];
  areas.forEach((a, index) => {
    if (a.points.length < 3) return;
    // an area may sit above or below the ground (a driveway down to a lower garage) and fall along one direction
    const g = ground + (a.offset ?? 0);
    const groundAt = (x: number, z: number) => g - outdoorDrop(a, x, z);
    const lowest = g - (a.type === "pool" ? 0 : (a.slope ?? 0));
    // hedges, fences and pergolas take their own height; the outline can be switched off per area
    const own = outdoorStanding(a.type) && a.height ? a.height : OUTDOOR_TOP[a.type];
    const look = { ...LOOKS[a.type], top: own };
    const poly = ccw(a.points);
    const edge = shade(look.edge, look.edgeAlpha);
    // fences and pergolas may leave their closing edge out (leaning against the house)
    const openEnd = a.open && (a.type === "fence" || a.type === "pergola") ? poly.length - 1 : -1;
    const outline = (yAt: (x: number, z: number) => number) => {
      if (a.outline === false) return;
      for (let i = 0; i < poly.length; i++) {
        if (i === openEnd) continue;
        const p = poly[i];
        const q = poly[(i + 1) % poly.length];
        lines.seg([p[0], yAt(p[0], p[1]), p[1]], [q[0], yAt(q[0], q[1]), q[1]], edge, ALWAYS);
      }
    };
    switch (a.type) {
      case "pool": {
        // in the ground: water below the rim; above ground: a tub standing on the ground with the water near its rim
        const water = new Color(look.color);
        const sideC = new Color(look.side);
        const wy = poolWaterY(floor, a);
        const rim = a.above ? g + poolHeight(a) : g + 0.06;
        for (const [i, j, k] of triangulate(poly)) {
          const p = poly[i];
          const q = poly[j];
          const r = poly[k];
          buf.tri([p[0], wy, p[1]], [r[0], wy, r[1]], [q[0], wy, q[1]], water, water, water, undefined, ALWAYS);
        }
        // inner sides from the water up to the rim, seen from inside the pool
        for (let i = 0; i < poly.length; i++) {
          const p = poly[i];
          const q = poly[(i + 1) % poly.length];
          buf.tri([q[0], wy, q[1]], [q[0], rim, q[1]], [p[0], rim, p[1]], sideC, sideC, sideC, undefined, ALWAYS);
          buf.tri([q[0], wy, q[1]], [p[0], rim, p[1]], [p[0], wy, p[1]], sideC, sideC, sideC, undefined, ALWAYS);
        }
        if (a.above) {
          // the tub's outer wall from the ground up to the rim, a little lighter than the water's sides
          const wall = new Color(0x1f3150);
          const foot = new Color(0x121d33);
          for (let i = 0; i < poly.length; i++) {
            const p = poly[i];
            const q = poly[(i + 1) % poly.length];
            buf.tri([p[0], g, p[1]], [p[0], rim, p[1]], [q[0], rim, q[1]], foot, wall, wall, undefined, ALWAYS);
            buf.tri([p[0], g, p[1]], [q[0], rim, q[1]], [q[0], g, q[1]], foot, wall, foot, undefined, ALWAYS);
          }
          outline(() => g + 0.005);
        }
        outline(() => rim);
        outline(() => wy + 0.005);
        break;
      }
      case "fence": {
        // posts every ~2 m and two rails along the outline, following the ground
        for (let i = 0; i < poly.length; i++) {
          if (i === openEnd) continue;
          const p = poly[i];
          const q = poly[(i + 1) % poly.length];
          const len = Math.hypot(q[0] - p[0], q[1] - p[1]);
          const n = Math.max(1, Math.round(len / 2));
          // an open fence also gets the post at its far end
          const last = openEnd >= 0 && i === openEnd - 1 ? n : n - 1;
          for (let k = 0; k <= last; k++) {
            const t = k / n;
            const x = p[0] + (q[0] - p[0]) * t;
            const z = p[1] + (q[1] - p[1]) * t;
            const gy = groundAt(x, z);
            pushPrism(buf, ccw([[x - 0.04, z - 0.04], [x + 0.04, z - 0.04], [x + 0.04, z + 0.04], [x - 0.04, z + 0.04]]), gy, gy + look.top, look.side, look.color);
          }
          for (const y of [0.35, 0.85]) {
            lines.seg([p[0], groundAt(p[0], p[1]) + y * look.top, p[1]], [q[0], groundAt(q[0], q[1]) + y * look.top, q[1]], edge, ALWAYS);
          }
        }
        break;
      }
      case "pergola": {
        // corner posts, beams along the edges, rafters across a rectangle, optional X-bracing on the sides
        const h = look.top;
        for (const [x, z] of poly) {
          const gy = groundAt(x, z);
          pushPrism(buf, ccw([[x - 0.06, z - 0.06], [x + 0.06, z - 0.06], [x + 0.06, z + 0.06], [x - 0.06, z + 0.06]]), gy, gy + h, look.side, look.color);
        }
        for (let i = 0; i < poly.length; i++) {
          if (i === openEnd) continue;
          const p = poly[i];
          const q = poly[(i + 1) % poly.length];
          const topP = groundAt(p[0], p[1]) + h;
          pushBeam(buf, p, q, 0.12, topP - 0.16, topP, look.side, look.color, groundAt(q[0], q[1]) - groundAt(p[0], p[1]));
          if (a.bracing) {
            const gp = groundAt(p[0], p[1]);
            const gq = groundAt(q[0], q[1]);
            lines.seg([p[0], gp + 0.25, p[1]], [q[0], gq + h - 0.25, q[1]], edge, ALWAYS);
            lines.seg([q[0], gq + 0.25, q[1]], [p[0], gp + h - 0.25, p[1]], edge, ALWAYS);
          }
        }
        if (isAxisRect(poly)) {
          const b = bounds(poly);
          const w = b.x1 - b.x0;
          const d = b.z1 - b.z0;
          const alongX = w >= d;
          const span = alongX ? w : d;
          const n = Math.max(1, Math.round(span / 0.6));
          for (let k = 1; k < n; k++) {
            const t = (alongX ? b.x0 : b.z0) + (span * k) / n;
            const p: Vec2 = alongX ? [t, b.z0 + 0.06] : [b.x0 + 0.06, t];
            const q: Vec2 = alongX ? [t, b.z1 - 0.06] : [b.x1 - 0.06, t];
            const topP = groundAt(p[0], p[1]) + h;
            pushBeam(buf, p, q, 0.06, topP - 0.04, topP + 0.08, look.side, look.color, groundAt(q[0], q[1]) - groundAt(p[0], p[1]));
          }
        }
        outline((x, z) => groundAt(x, z) + h + 0.004);
        break;
      }
      default: {
        // a flat area is a thin prism; terrace, bed and hedge are raised blocks. A slope tilts the top,
        // the block reaches down to the lowest point; patches marked "cut" inside it become holes
        const topAt = (x: number, z: number) => groundAt(x, z) + look.top;
        const holes = outdoorHoles(areas, index);
        pushPrism(buf, poly, lowest, a.slope ? topAt : g + look.top, look.side, look.color, { aoFrom: lowest, holes });
        outline((x, z) => topAt(x, z) + 0.004);
        if (a.type === "hedge") outline((x, z) => groundAt(x, z) + 0.004);
        if (a.outline !== false) {
          for (const hole of holes) {
            for (let i = 0; i < hole.length; i++) {
              const p = hole[i];
              const q = hole[(i + 1) % hole.length];
              lines.seg([p[0], topAt(p[0], p[1]) + 0.004, p[1]], [q[0], topAt(q[0], q[1]) + 0.004, q[1]], edge, ALWAYS);
            }
          }
        }
      }
    }
  });
}
