// Areas outside the house: lawn, terrace, path, driveway, pool, bed, wild patch, hedge, fence and
// pergola, in the neon look. Flat areas lie at ground level (the underside of the ground floor slab),
// the terrace a little higher, the pool water below; hedges are dark green blocks, fences posts with
// rails along the outline, a pergola corner posts with beams, rafters and optional X-bracing. An area
// can sit higher or lower (offset), fall along one direction (slope) and have patches cut out of it.

import { Color } from "three";
import type { Floor, GateSpan, OutdoorArea, OutdoorType, Vec2 } from "../model.ts";
import { areaGround, bounds, centroid, gateSpans, groundDrop, isAxisRect, OUTDOOR_TOP, outdoorStanding, pointInPolygon, poolFloorY, poolRimY, poolSunken, poolWaterY, signedArea } from "../model.ts";
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
  balcony: { color: 0x1d2238, side: 0x161a2c, edge: 0x5b7cff, edgeAlpha: 0.5 },
};

/** Whether an edge runs along a room's outline on this floor (a balcony needs no railing at the house wall). */
function againstWall(floor: Floor, p: Vec2, q: Vec2): boolean {
  const mid: Vec2 = [(p[0] + q[0]) / 2, (p[1] + q[1]) / 2];
  const dx = q[0] - p[0];
  const dz = q[1] - p[1];
  const len = Math.hypot(dx, dz) || 1;
  return floor.rooms.some((r) =>
    r.points.some((a, i) => {
      const b = r.points[(i + 1) % r.points.length];
      const ex = b[0] - a[0];
      const ez = b[1] - a[1];
      const el = Math.hypot(ex, ez) || 1;
      // parallel, and the edge's middle within 40 cm of the room's edge
      if (Math.abs((dx * ez - dz * ex) / (len * el)) > 0.05) return false;
      const t = Math.max(0, Math.min(1, ((mid[0] - a[0]) * ex + (mid[1] - a[1]) * ez) / (el * el)));
      return Math.hypot(a[0] + ex * t - mid[0], a[1] + ez * t - mid[1]) < 0.4;
    }),
  );
}

const GATE_SIDE = 0x31467d;
const GATE_TOP = 0x5b7cff;

/** The side of a gate's edge the fenced area lies on (a gate swings into it), as a unit normal. */
function gateInward(a: OutdoorArea, span: GateSpan): Vec2 {
  const { p, q } = span;
  const len = Math.hypot(q[0] - p[0], q[1] - p[1]) || 1;
  const n: Vec2 = [-(q[1] - p[1]) / len, (q[0] - p[0]) / len];
  const s = (span.s0 + span.s1) / 2 / len;
  const mid: Vec2 = [p[0] + (q[0] - p[0]) * s, p[1] + (q[1] - p[1]) * s];
  // a closed fence: the side where a step off the edge lands inside; an open one leans on the house, its middle decides
  const probe: Vec2 = [mid[0] + n[0] * 0.05, mid[1] + n[1] * 0.05];
  const c = centroid(a.points);
  const inside = a.open ? (c[0] - mid[0]) * n[0] + (c[1] - mid[1]) * n[1] > 0 : pointInPolygon(probe, a.points);
  const sign = (inside ? 1 : -1) * (span.gate.outward ? -1 : 1);
  return [n[0] * sign, n[1] * sign];
}

/**
 * A fence gate's leaf (#818) at `open` 0 (shut) … 1 (fully open): a frame with upright slats, swinging into the fenced
 * area (or out of it), as two leaves from both posts, or sliding along the fence on its inner side.
 */
export function pushGate(buf: GeoBuffer, floor: Floor, a: OutdoorArea, span: GateSpan, open: number): void {
  const { gate, p, q, s0, s1 } = span;
  const len = Math.hypot(q[0] - p[0], q[1] - p[1]) || 1;
  const d: Vec2 = [(q[0] - p[0]) / len, (q[1] - p[1]) / len];
  const n = gateInward(a, span);
  const at = (s: number): Vec2 => [p[0] + d[0] * s, p[1] + d[1] * s];
  const mid = at((s0 + s1) / 2);
  const g = areaGround(floor, a) - groundDrop(floor, a, mid[0], mid[1]);
  const h = Math.max(0.4, (a.height ?? OUTDOOR_TOP.fence) - 0.05);
  const t = Math.min(1, Math.max(0, open));
  // a bar from `from` along u, `l` long and `w` thick
  const bar = (from: Vec2, u: Vec2, l: number, w: number, y0: number, y1: number) => {
    const v: Vec2 = [-u[1] * (w / 2), u[0] * (w / 2)];
    const e: Vec2 = [from[0] + u[0] * l, from[1] + u[1] * l];
    pushPrism(buf, ccw([[from[0] + v[0], from[1] + v[1]], [e[0] + v[0], e[1] + v[1]], [e[0] - v[0], e[1] - v[1]], [from[0] - v[0], from[1] - v[1]]]), g + y0, g + y1, GATE_SIDE, GATE_TOP);
  };
  // one leaf from its hinge along u: rails at the foot and the top, stiles at both ends, slats every ~12 cm
  const leaf = (hinge: Vec2, u: Vec2, w: number) => {
    if (w < 0.1) return;
    const from: Vec2 = [hinge[0] + u[0] * 0.03, hinge[1] + u[1] * 0.03];
    const l = w - 0.06;
    bar(from, u, l, 0.04, 0.08, 0.15);
    bar(from, u, l, 0.04, h - 0.07, h);
    const k = Math.max(1, Math.round(l / 0.12));
    for (let i = 0; i <= k; i++) {
      const s = Math.min(l - 0.03, (l * i) / k);
      bar([from[0] + u[0] * s, from[1] + u[1] * s], u, 0.03, i === 0 || i === k ? 0.05 : 0.025, 0.08, h);
    }
  };
  const turn = (base: Vec2, angle: number): Vec2 => [base[0] * Math.cos(angle) + n[0] * Math.sin(angle), base[1] * Math.cos(angle) + n[1] * Math.sin(angle)];
  const swing = t * Math.PI * 0.5;
  const w = s1 - s0;
  const kind = gate.kind ?? "swing";
  if (kind === "slide") {
    // a sliding gate runs beside the fence, off the gap towards the edge's start (flip: its end)
    const dir = gate.flip ? 1 : -1;
    const start = at(s0 + dir * t * w);
    leaf([start[0] + n[0] * 0.08, start[1] + n[1] * 0.08], d, w);
  } else if (kind === "double") {
    leaf(at(s0), turn(d, swing), w / 2);
    leaf(at(s1), turn([-d[0], -d[1]], swing), w / 2);
  } else if (gate.flip) leaf(at(s1), turn([-d[0], -d[1]], swing), w);
  else leaf(at(s0), turn(d, swing), w);
}

/** Height of the visible surface of an area (for the lighting layer), at its high edge. */
export function outdoorSurface(floor: Floor, a: OutdoorArea): number {
  if (a.type === "pool") return poolWaterY(floor, a);
  return areaGround(floor, a) + (outdoorStanding(a.type) ? 0.01 : OUTDOOR_TOP[a.type]);
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

/** `water`: a pool's water surface goes there (drawn see-through, so the basin shows below it); without it into `buf`. */
export function pushOutdoor(buf: GeoBuffer, lines: LineBuffer, floor: Floor, water?: GeoBuffer): void {
  const areas = floor.outdoor ?? [];
  areas.forEach((a, index) => {
    if (a.points.length < 3) return;
    // an area may sit above or below the ground (a driveway down to a lower garage) and fall along one direction
    const g = areaGround(floor, a);
    const groundAt = (x: number, z: number) => g - groundDrop(floor, a, x, z);
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
    const waterBuf = water ?? buf;
    const waterC = new Color(water ? 0x1a78b0 : look.color);
    switch (a.type) {
      case "pool": {
        // a basin with depth: inner walls from the rim down to the floor, the floor, and the water surface (see-through
        // in its own layer, so the basin shows below it); in the ground the rim may stand above the lawn, an
        // above-ground pool stands on it as a tub
        const sideC = new Color(look.side);
        const deepC = new Color(shade(look.side, 0.55));
        const floorC = new Color(0x0e3a58);
        const wy = poolWaterY(floor, a);
        const rim = poolRimY(floor, a);
        const fy = poolFloorY(floor, a);
        for (const [i, j, k] of triangulate(poly)) {
          const p = poly[i];
          const q = poly[j];
          const r = poly[k];
          (water ? waterBuf : buf).tri([p[0], wy, p[1]], [r[0], wy, r[1]], [q[0], wy, q[1]], waterC, waterC, waterC, undefined, ALWAYS);
          buf.tri([p[0], fy, p[1]], [r[0], fy, r[1]], [q[0], fy, q[1]], floorC, floorC, floorC, undefined, ALWAYS);
        }
        // inner walls from the floor up to the rim, darker towards the depth, seen from inside the pool
        for (let i = 0; i < poly.length; i++) {
          const p = poly[i];
          const q = poly[(i + 1) % poly.length];
          buf.tri([q[0], fy, q[1]], [q[0], rim, q[1]], [p[0], rim, p[1]], deepC, sideC, sideC, undefined, ALWAYS);
          buf.tri([q[0], fy, q[1]], [p[0], rim, p[1]], [p[0], fy, p[1]], deepC, sideC, deepC, undefined, ALWAYS);
        }
        // the outside of the basin: a dark block in the earth (seen from the side it reads as a cut through the
        // ground, and the glowing floor no longer seems to float), with its lower edge
        if (!a.above && poolSunken(floor, a)) {
          const earth = new Color(0x0a1322);
          const earthLow = new Color(0x060b16);
          const bottom = fy - 0.2;
          const top = Math.min(g, rim);
          for (let i = 0; i < poly.length; i++) {
            const p = poly[i];
            const q = poly[(i + 1) % poly.length];
            buf.tri([p[0], bottom, p[1]], [p[0], top, p[1]], [q[0], top, q[1]], earthLow, earth, earth, undefined, ALWAYS);
            buf.tri([p[0], bottom, p[1]], [q[0], top, q[1]], [q[0], bottom, q[1]], earthLow, earth, earthLow, undefined, ALWAYS);
          }
          for (const [i, j, k] of triangulate(poly)) {
            const p = poly[i];
            const q = poly[j];
            const r = poly[k];
            buf.tri([p[0], bottom, p[1]], [q[0], bottom, q[1]], [r[0], bottom, r[1]], earthLow, earthLow, earthLow, undefined, ALWAYS);
          }
          if (a.outline !== false)
            for (let i = 0; i < poly.length; i++) {
              const p = poly[i];
              const q = poly[(i + 1) % poly.length];
              lines.seg([p[0], bottom, p[1]], [q[0], bottom, q[1]], shade(look.edge, look.edgeAlpha * 0.35), ALWAYS);
              lines.seg([p[0], bottom, p[1]], [p[0], top, p[1]], shade(look.edge, look.edgeAlpha * 0.25), ALWAYS);
            }
        }
        // the part of the wall above the lawn (an above-ground pool, or a rim that stands out)
        if (rim > g + 0.02) {
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
        // the floor's edge, faint
        if (a.outline !== false) for (let i = 0; i < poly.length; i++) {
          const p = poly[i];
          const q = poly[(i + 1) % poly.length];
          lines.seg([p[0], fy + 0.005, p[1]], [q[0], fy + 0.005, q[1]], shade(look.edge, look.edgeAlpha * 0.4), ALWAYS);
        }
        break;
      }
      case "fence": {
        // posts every ~2 m and two rails along the outline, following the ground; the edges run as drawn (a
        // gate names its edge that way), a gate leaves a gap with a post on either side (#818)
        const pts = a.points;
        const last = pts.length - 1;
        const gates = gateSpans(a);
        const post = (x: number, z: number, r: number) => {
          const gy = groundAt(x, z);
          pushPrism(buf, ccw([[x - r, z - r], [x + r, z - r], [x + r, z + r], [x - r, z + r]]), gy, gy + look.top, look.side, look.color);
        };
        for (let i = 0; i < pts.length; i++) {
          if (a.open && i === last) continue;
          const p = pts[i];
          const q = pts[(i + 1) % pts.length];
          const len = Math.hypot(q[0] - p[0], q[1] - p[1]);
          if (len < 1e-6) continue;
          const at = (s: number): Vec2 => [p[0] + ((q[0] - p[0]) * s) / len, p[1] + ((q[1] - p[1]) * s) / len];
          // the runs of fence between the gates
          const gaps = gates.filter((g) => g.gate.edge === i).sort((x, y) => x.s0 - y.s0);
          const runs: [number, number][] = [];
          let from = 0;
          for (const g of gaps) {
            if (g.s0 > from + 0.01) runs.push([from, g.s0]);
            from = Math.max(from, g.s1);
          }
          if (len > from + 0.01) runs.push([from, len]);
          // an open fence also gets the post at its far end
          const farEnd = a.open && i === last - 1;
          for (const [u0, u1] of runs) {
            const n = Math.max(1, Math.round((u1 - u0) / 2));
            // a run's end at a gate has the gate's post; at the edge's end the next edge draws it
            const first = u0 > 1e-6 ? 1 : 0;
            const upTo = u1 >= len - 1e-6 && farEnd ? n : n - 1;
            for (let k = first; k <= upTo; k++) {
              const [x, z] = at(u0 + ((u1 - u0) * k) / n);
              post(x, z, 0.04);
            }
            const a0 = at(u0);
            const a1 = at(u1);
            for (const y of [0.35, 0.85]) lines.seg([a0[0], groundAt(a0[0], a0[1]) + y * look.top, a0[1]], [a1[0], groundAt(a1[0], a1[1]) + y * look.top, a1[1]], edge, ALWAYS);
          }
          // the gate posts are a little stronger
          for (const g of gaps) for (const s of [g.s0, g.s1]) post(...at(s), 0.055);
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
      case "balcony": {
        // a thin slab at the floor's level and a see-through railing of bars; no railing along the
        // house wall, so the balcony doors behind it stay open to view (#253)
        const slab = 0.18;
        pushPrism(buf, poly, g - slab, g + look.top, look.side, look.color, { aoFrom: g - slab });
        outline(() => g + look.top + 0.004);
        const rail = a.height && a.height > 0.3 ? a.height : 1.0;
        const bar = shade(0x8fb4ff, 0.42);
        const top = shade(0x37e0ff, 0.55);
        for (let i = 0; i < poly.length; i++) {
          const p = poly[i];
          const q = poly[(i + 1) % poly.length];
          if (againstWall(floor, p, q)) continue;
          const len = Math.hypot(q[0] - p[0], q[1] - p[1]);
          const y0 = g + look.top;
          lines.seg([p[0], y0 + rail, p[1]], [q[0], y0 + rail, q[1]], top, ALWAYS);
          lines.seg([p[0], y0 + 0.1, p[1]], [q[0], y0 + 0.1, q[1]], bar, ALWAYS);
          // bars every 12 cm, posts at the ends
          const n = Math.max(1, Math.round(len / 0.12));
          for (let k = 0; k <= n; k++) {
            const t = k / n;
            const x = p[0] + (q[0] - p[0]) * t;
            const z = p[1] + (q[1] - p[1]) * t;
            lines.seg([x, y0, z], [x, y0 + rail, z], k === 0 || k === n ? top : bar, ALWAYS);
          }
        }
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
