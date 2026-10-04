// Roof sections: the plain geometry of a section (frame and profile across its ridge) and the
// proposal of sections from the rooms. No three.js here: the editor uses it as well.

import type { Building, FreeWall, Room, RoofSection, Vec2 } from "./model.ts";
import { pointInPolygon, polygonArea } from "./model.ts";
import { generateWalls } from "./geometry/walls.ts";

const DEG = Math.PI / 180;

/**
 * Local frame of a section: u runs along the ridge (u0 … u1 at the wall faces), v across it from
 * side a (v = 0) to side b (v = w).
 */
export interface SectionFrame {
  u0: number;
  u1: number;
  w: number;
  /** Plan point of a local (u, v). */
  at(u: number, v: number): Vec2;
}

export function sectionFrame(s: Pick<RoofSection, "x0" | "z0" | "x1" | "z1" | "axis" | "flip">): SectionFrame {
  const x0 = Math.min(s.x0, s.x1);
  const x1 = Math.max(s.x0, s.x1);
  const z0 = Math.min(s.z0, s.z1);
  const z1 = Math.max(s.z0, s.z1);
  // flipped: v runs from the high coordinate, so side a is the bottom (or right) side
  return s.axis === "x"
    ? { u0: x0, u1: x1, w: z1 - z0, at: (u, v) => [u, s.flip ? z1 - v : z0 + v] }
    : { u0: z0, u1: z1, w: x1 - x0, at: (u, v) => [s.flip ? x1 - v : x0 + v, u] };
}

/** Height profile across a section: the ridge position and height, and the roof height at any v. */
export interface SectionProfile {
  /** Ridge across (0 … w); a pent roof has its high edge at w. */
  vr: number;
  /** Height of the ridge (or the high edge) above the ground. */
  rh: number;
  /** Roof height above the ground at v (also beyond the walls, on the overhang). */
  y(v: number): number;
}

export function sectionProfile(s: Pick<RoofSection, "x0" | "z0" | "x1" | "z1" | "axis" | "flip" | "shape" | "eave_a" | "eave_b" | "pitch_a" | "pitch_b">): SectionProfile {
  const w = sectionFrame(s).w;
  const ea = s.eave_a;
  const eb = s.eave_b;
  const ta = Math.tan(Math.min(80, Math.max(0, s.pitch_a)) * DEG);
  const tb = Math.tan(Math.min(80, Math.max(0, s.pitch_b)) * DEG);
  if (s.shape === "flat" || s.shape === "parapet") return { vr: w / 2, rh: ea, y: () => ea };
  if (s.shape === "pent") return { vr: w, rh: ea + w * ta, y: (v) => ea + v * ta };
  if (s.shape === "mansard") {
    // two slopes a side: the steep lower one (the pitch set) up to the break, a 30° upper one to the ridge
    const m = mansardParts(w, ea, eb, ta, tb);
    return { vr: m.vr, rh: m.rh, y: m.y };
  }
  // the slopes meet where they are equally high: a lower eave or a flatter slope moves the ridge
  const vr = ta + tb > 1e-6 ? Math.min(w, Math.max(0, (eb - ea + w * tb) / (ta + tb))) : w / 2;
  const rh = ea + vr * ta;
  return { vr, rh, y: (v) => (v <= vr ? ea + v * ta : eb + (w - v) * tb) };
}

/** Anything that carries roof sections: a building, or just its settings in a test. */
export type RoofHolder = { settings: { roof: { sections?: readonly RoofSection[] | null; overhang?: number } } };

/** Thickness of the roof slab (the walls under it end this far below the profile). */
export const ROOF_THICK = 0.14;

/**
 * The underside of the roof above a plan point (absolute height): the lowest covered section, or
 * null outside every section (canopies do not count, and neither does a single roof: it sits on
 * the top floor's walls anyway).
 */
export function roofUnderAt(b: RoofHolder, x: number, z: number): number | null {
  let best: number | null = null;
  for (const s of b.settings.roof.sections ?? []) {
    if (s.open) continue;
    const x0 = Math.min(s.x0, s.x1);
    const x1 = Math.max(s.x0, s.x1);
    const z0 = Math.min(s.z0, s.z1);
    const z1 = Math.max(s.z0, s.z1);
    if (x < x0 - 1e-6 || x > x1 + 1e-6 || z < z0 - 1e-6 || z > z1 + 1e-6) continue;
    // a free-shaped flat roof covers its polygon only
    if (s.points && s.points.length >= 3 && !pointInPolygon([x, z], s.points)) continue;
    const v = s.axis === "x" ? (s.flip ? z1 - z : z - z0) : s.flip ? x1 - x : x - x0;
    const u = s.axis === "x" ? x : z;
    // hipped ends and broken slopes: the planes decide, the profile across is the fallback
    const flat = s.shape === "flat" || s.shape === "parapet";
    const o = Math.max(0, s.overhang ?? b.settings.roof.overhang ?? 0);
    const planes = flat ? null : sectionHeightAt(sectionGeometry(s, { u0: o, u1: o, a: o, b: o }), u, v);
    const y = (planes ?? sectionProfile(s).y(v)) - ROOF_THICK;
    best = best === null ? y : Math.min(best, y);
  }
  return best;
}

/**
 * Where a sloped section leaves `headroom` metres above a floor at `level`: lines across the section
 * (in plan coordinates), one per slope that crosses that height – the editor draws them in attic rooms.
 */
export function headroomLines(b: RoofHolder, level: number, headroom: number): [Vec2, Vec2][] {
  const out: [Vec2, Vec2][] = [];
  for (const s of b.settings.roof.sections ?? []) {
    if (s.open || s.shape === "flat" || s.shape === "parapet" || s.shape === "mansard") continue;
    const fr = sectionFrame(s);
    const pr = sectionProfile(s);
    const target = level + headroom + ROOF_THICK;
    const vs: number[] = [];
    const ta = Math.tan(Math.min(80, Math.max(0, s.pitch_a)) * DEG);
    const tb = Math.tan(Math.min(80, Math.max(0, s.pitch_b)) * DEG);
    if (ta > 1e-6) vs.push((target - s.eave_a) / ta);
    if (s.shape === "gable" && tb > 1e-6) vs.push(fr.w - (target - s.eave_b) / tb);
    for (const v of vs) {
      // only where the line really runs under the slope (between the eave and the ridge)
      if (v <= 0.01 || v >= fr.w - 0.01) continue;
      if (s.shape === "gable" && Math.abs(pr.y(v) - target) > 1e-6) continue;
      out.push([fr.at(fr.u0, v), fr.at(fr.u1, v)]);
    }
  }
  return out;
}

/** A polygon grown outwards by `d` (mitred corners); works for simple polygons either way round. */
export function offsetPolygon(points: readonly Vec2[], d: number): Vec2[] {
  const n = points.length;
  if (n < 3 || Math.abs(d) < 1e-9) return points.map((p) => [p[0], p[1]]);
  // outward is to the right of a counter-clockwise edge (z down the plan), the left of a clockwise one
  const sign = polygonArea(points) >= 0 ? 1 : -1;
  const out: Vec2[] = [];
  for (let i = 0; i < n; i++) {
    const p = points[(i + n - 1) % n];
    const q = points[i];
    const r = points[(i + 1) % n];
    const d1 = unitOf([q[0] - p[0], q[1] - p[1]]);
    const d2 = unitOf([r[0] - q[0], r[1] - q[1]]);
    const n1: Vec2 = [d1[1] * sign, -d1[0] * sign];
    const n2: Vec2 = [d2[1] * sign, -d2[0] * sign];
    // the mitre: the bisector of the two edge normals, scaled so both edges move by d
    const bx = n1[0] + n2[0];
    const bz = n1[1] + n2[1];
    const bl = Math.hypot(bx, bz);
    if (bl < 1e-6) {
      out.push([q[0] + n1[0] * d, q[1] + n1[1] * d]);
      continue;
    }
    const cos = (bx * n1[0] + bz * n1[1]) / bl;
    const k = Math.min(4, 1 / Math.max(0.25, cos));
    out.push([q[0] + (bx / bl) * d * k, q[1] + (bz / bl) * d * k]);
  }
  return out;
}

function unitOf(p: Vec2): Vec2 {
  const l = Math.hypot(p[0], p[1]) || 1;
  return [p[0] / l, p[1] / l];
}

/** The footprint of a section with its overhang: the free polygon, or the rectangle. */
export function sectionPolygon(s: Pick<RoofSection, "x0" | "z0" | "x1" | "z1" | "points">, overhang: number): Vec2[] {
  if (s.points && s.points.length >= 3) return offsetPolygon(s.points, overhang);
  const x0 = Math.min(s.x0, s.x1) - overhang;
  const x1 = Math.max(s.x0, s.x1) + overhang;
  const z0 = Math.min(s.z0, s.z1) - overhang;
  const z1 = Math.max(s.z0, s.z1) + overhang;
  return [[x0, z0], [x1, z0], [x1, z1], [x0, z1]];
}

/** The bounding box of a polygon as the section's x0 … z1. */
export function polygonBox(points: readonly Vec2[]): Pick<RoofSection, "x0" | "z0" | "x1" | "z1"> {
  const xs = points.map((p) => p[0]);
  const zs = points.map((p) => p[1]);
  return { x0: Math.min(...xs), z0: Math.min(...zs), x1: Math.max(...xs), z1: Math.max(...zs) };
}

/**
 * The outline of a floor's rooms at the outer wall faces: the exterior walls chained into a loop (the
 * largest one, for a house with a courtyard), grown by the wall thickness. Null without rooms.
 */
export function floorOutline(rooms: readonly Room[], free: readonly FreeWall[], exterior: number, interior: number): Vec2[] | null {
  const walls = generateWalls(rooms, { exterior, interior }, free).walls.filter((w) => w.exterior && !w.free);
  if (!walls.length) return null;
  // walls are not all drawn the same way round, so the loop is walked by shared end points
  const key = (p: Vec2) => `${Math.round(p[0] * 1000)}:${Math.round(p[1] * 1000)}`;
  type Seg = { a: Vec2; b: Vec2 };
  const at = new Map<string, Seg[]>();
  const segs: Seg[] = walls.map((w) => ({ a: w.a, b: w.b }));
  for (const w of segs) for (const p of [w.a, w.b]) at.set(key(p), [...(at.get(key(p)) ?? []), w]);
  const used = new Set<Seg>();
  let best: Vec2[] | null = null;
  for (const start of segs) {
    if (used.has(start)) continue;
    used.add(start);
    const loop: Vec2[] = [start.a, start.b];
    let cur: Vec2 = start.b;
    for (;;) {
      const next = (at.get(key(cur)) ?? []).find((w) => !used.has(w));
      if (!next) break;
      used.add(next);
      cur = key(next.a) === key(cur) ? next.b : next.a;
      if (key(cur) === key(loop[0])) break;
      loop.push(cur);
    }
    // closed when the walk came back to the first point
    if (loop.length >= 3 && key(cur) === key(loop[0])) {
      if (!best || Math.abs(polygonArea(loop)) > Math.abs(polygonArea(best))) best = loop;
    }
  }
  if (!best) return null;
  // collinear corners (a room edge split by its neighbour) go, so the roof keeps its clean corners
  const clean: Vec2[] = [];
  for (let i = 0; i < best.length; i++) {
    const p = best[(i + best.length - 1) % best.length];
    const q = best[i];
    const r = best[(i + 1) % best.length];
    const cross = (q[0] - p[0]) * (r[1] - q[1]) - (q[1] - p[1]) * (r[0] - q[0]);
    if (Math.abs(cross) > 1e-6) clean.push(q);
  }
  return clean.length >= 3 ? offsetPolygon(clean, exterior) : null;
}

const MANSARD_UPPER = Math.tan(30 * DEG);

/** A mansard profile: the lower slopes reach their break at 2.4 m of rise or 30 % of the width, the upper ones meet at the ridge. */
function mansardParts(w: number, ea: number, eb: number, ta: number, tb: number) {
  const vla = Math.min(w * 0.3, ta > 1e-6 ? 2.4 / ta : w * 0.3);
  const vlb = Math.min(w * 0.3, tb > 1e-6 ? 2.4 / tb : w * 0.3);
  const yla = ea + vla * ta;
  const ylb = eb + vlb * tb;
  // the upper slopes meet where they are equally high
  const vr = Math.min(w - vlb, Math.max(vla, (ylb - yla + MANSARD_UPPER * (w - vlb + vla)) / (2 * MANSARD_UPPER)));
  const rh = yla + (vr - vla) * MANSARD_UPPER;
  const y = (v: number) => (v <= vla ? ea + v * ta : v <= vr ? yla + (v - vla) * MANSARD_UPPER : v <= w - vlb ? ylb + (w - vlb - v) * MANSARD_UPPER : eb + (w - v) * tb);
  return { vla, vlb, yla, ylb, vr, rh, y };
}

/** A point of a roof plane: along the ridge (u), across (v) and its height. */
export type Q = [number, number, number];

/** The planes of a sloped section, its outer edge and its ridge lines; the profile of its gable ends (null when hipped). */
export interface SectionGeometry {
  faces: Q[][];
  rim: Q[];
  ridges: [Q, Q][];
  gable: [number, number][] | null;
}

/**
 * The roof planes of a section as polygons in (u, v, height), with the overhang per edge: what the
 * viewer builds, the editor draws the ridges of, and the attic walls end under.
 */
export function sectionGeometry(s: RoofSection, ov: SectionOverhang): SectionGeometry {
  const fr = sectionFrame(s);
  const pr = sectionProfile(s);
  const w = fr.w;
  const oa = Math.max(0, ov.a);
  const ob = Math.max(0, ov.b);
  const U0 = fr.u0 - Math.max(0, ov.u0);
  const U1 = fr.u1 + Math.max(0, ov.u1);
  const at = (u: number, v: number): Q => [u, v, pr.y(v)];
  const a0 = at(U0, -oa);
  const a1 = at(U1, -oa);
  const b1 = at(U1, w + ob);
  const b0 = at(U0, w + ob);
  const ta = Math.tan(Math.min(80, Math.max(0, s.pitch_a)) * DEG);
  const tb = Math.tan(Math.min(80, Math.max(0, s.pitch_b)) * DEG);
  if (s.shape === "pent") {
    const c = [a0, a1, b1, b0];
    return { faces: [c], rim: c, ridges: [[b1, b0]], gable: [[0, pr.y(0)], [w, pr.y(w)]] };
  }
  if (s.shape === "hip" || s.shape === "pyramid") {
    // hips rise from the corners: the ridge is shorter by the run of the slopes at both ends (a pyramid has none left)
    const d = s.shape === "pyramid" ? (fr.u1 - fr.u0) / 2 : Math.min((fr.u1 - fr.u0) / 2, Math.min(pr.vr, w - pr.vr) || w / 2);
    const rs: Q = [fr.u0 + d, pr.vr, pr.rh];
    const re: Q = [fr.u1 - d, pr.vr, pr.rh];
    const faces = s.shape === "pyramid" ? [[a0, a1, rs], [a1, b1, rs], [b1, b0, rs], [b0, a0, rs]] : [[a0, a1, re, rs], [rs, re, b1, b0], [b0, a0, rs], [a1, b1, re]];
    const ridges: [Q, Q][] = s.shape === "pyramid" ? [[a0, rs], [b0, rs], [a1, rs], [b1, rs]] : [[rs, re], [a0, rs], [b0, rs], [a1, re], [b1, re]];
    return { faces, rim: [a0, a1, b1, b0], ridges, gable: null };
  }
  if (s.shape === "halfhip") {
    // a gable whose top is hipped: the hip starts at 55 % of the gable's height and slopes like side a
    const low = Math.min(pr.y(0), pr.y(w));
    const yh = low + (pr.rh - low) * 0.55;
    const vah = ta > 1e-6 ? Math.min(pr.vr, (yh - s.eave_a) / ta) : pr.vr;
    const vbh = tb > 1e-6 ? Math.max(pr.vr, w - (yh - s.eave_b) / tb) : pr.vr;
    const dh = Math.min((fr.u1 - fr.u0) / 2 - 0.1, (pr.rh - yh) / Math.max(0.2, ta));
    const r0: Q = [fr.u0 + dh, pr.vr, pr.rh];
    const r1: Q = [fr.u1 - dh, pr.vr, pr.rh];
    const ha0: Q = [U0, vah, yh];
    const hb0: Q = [U0, vbh, yh];
    const ha1: Q = [U1, vah, yh];
    const hb1: Q = [U1, vbh, yh];
    return {
      faces: [
        [a0, a1, ha1, r1, r0, ha0],
        [r0, r1, hb1, b1, b0, hb0],
        [hb0, ha0, r0],
        [ha1, hb1, r1],
      ],
      rim: [a0, a1, ha1, hb1, b1, b0, hb0, ha0],
      ridges: [[r0, r1], [ha0, r0], [hb0, r0], [ha1, r1], [hb1, r1]],
      gable: [[0, pr.y(0)], [vah, yh], [vbh, yh], [w, pr.y(w)]],
    };
  }
  if (s.shape === "mansard") {
    const m = mansardParts(w, s.eave_a, s.eave_b, ta, tb);
    const la0: Q = [U0, m.vla, m.yla];
    const la1: Q = [U1, m.vla, m.yla];
    const lb0: Q = [U0, w - m.vlb, m.ylb];
    const lb1: Q = [U1, w - m.vlb, m.ylb];
    const r0: Q = [U0, m.vr, m.rh];
    const r1: Q = [U1, m.vr, m.rh];
    return {
      faces: [
        [a0, a1, la1, la0],
        [la0, la1, r1, r0],
        [r0, r1, lb1, lb0],
        [lb0, lb1, b1, b0],
      ],
      rim: [a0, a1, la1, r1, lb1, b1, b0, lb0, r0, la0],
      ridges: [[r0, r1], [la0, la1], [lb0, lb1]],
      gable: [[0, pr.y(0)], [m.vla, m.yla], [m.vr, m.rh], [w - m.vlb, m.ylb], [w, pr.y(w)]],
    };
  }
  // gable
  const r0: Q = [U0, pr.vr, pr.rh];
  const r1: Q = [U1, pr.vr, pr.rh];
  return {
    faces: [
      [a0, a1, r1, r0],
      [r0, r1, b1, b0],
    ],
    rim: [a0, a1, r1, b1, b0, r0],
    ridges: [[r0, r1]],
    gable: [[0, pr.y(0)], [pr.vr, pr.rh], [w, pr.y(w)]],
  };
}

/** The height of a section's roof planes at (u, v): the lowest plane over the point, null outside every plane. */
export function sectionHeightAt(geom: SectionGeometry, u: number, v: number): number | null {
  let best: number | null = null;
  for (const f of geom.faces) {
    if (!pointInPolygon([u, v], f.map((q) => [q[0], q[1]] as Vec2))) continue;
    // the plane through three corners that are not in a line
    const [p0, p1] = f;
    const p2 = f.slice(2).find((q) => Math.abs((p1[0] - p0[0]) * (q[1] - p0[1]) - (p1[1] - p0[1]) * (q[0] - p0[0])) > 1e-9);
    if (!p2) continue;
    const ax = p1[0] - p0[0];
    const ay = p1[2] - p0[2];
    const az = p1[1] - p0[1];
    const bx = p2[0] - p0[0];
    const by = p2[2] - p0[2];
    const bz = p2[1] - p0[1];
    const nx = ay * bz - az * by;
    const ny = az * bx - ax * bz;
    const nz = ax * by - ay * bx;
    if (Math.abs(ny) < 1e-9) continue;
    const y = p0[2] - (nx * (u - p0[0]) + nz * (v - p0[1])) / ny;
    best = best === null ? y : Math.min(best, y);
  }
  return best;
}

/** Overhang per edge of a section: along the ridge at both ends (u0, u1) and across at both sides (a, b). */
export interface SectionOverhang {
  u0: number;
  u1: number;
  a: number;
  b: number;
}

/**
 * Overhang per edge: none where the section meets a taller part of the house (a room right outside
 * that edge whose walls rise above the section's wall tops), so a lean-to roof ends at the wall
 * instead of running into the house.
 */
export function sectionOverhang(b: Building, s: RoofSection, overhang: number): SectionOverhang {
  const fr = sectionFrame(s);
  const taller = b.floors.flatMap((f) => f.rooms.filter((r) => r.points.length >= 3 && f.elevation + f.height > s.base + 0.05));
  const blocked = (pts: Vec2[]) => pts.some((p) => taller.some((r) => pointInPolygon(p, r.points)));
  const d = 0.35;
  const along = [0.15, 0.5, 0.85].map((t) => fr.u0 + (fr.u1 - fr.u0) * t);
  const across = [0.15, 0.5, 0.85].map((t) => fr.w * t);
  return {
    a: blocked(along.map((u) => fr.at(u, -d))) ? 0 : overhang,
    b: blocked(along.map((u) => fr.at(u, fr.w + d))) ? 0 : overhang,
    u0: blocked(across.map((v) => fr.at(fr.u0 - d, v))) ? 0 : overhang,
    u1: blocked(across.map((v) => fr.at(fr.u1 + d, v))) ? 0 : overhang,
  };
}

/** Wall tops below a rectangle: the highest floor with a room under its middle (null = none). */
export function wallTopUnder(b: Building, x0: number, z0: number, x1: number, z1: number): number | null {
  const c: Vec2 = [(x0 + x1) / 2, (z0 + z1) / 2];
  const tops = b.floors.filter((f) => f.rooms.some((r) => r.points.length >= 3 && pointInPolygon(c, r.points))).map((f) => f.elevation + f.height);
  return tops.length ? Math.max(...tops) : null;
}

/** Height of the ridge (or of the high edge of a pent roof) above the ground. */
export function ridgeHeight(s: RoofSection): number {
  return sectionProfile(s).rh;
}

/**
 * Sections proposed from the rooms: per floor (highest first), the area of its rooms that no higher
 * floor covers, cut into as few rectangles as possible; each gets a gable roof on its walls, with the
 * ridge along its longer side. A house with an upper floor over part of it gets a roof up there and one
 * over the single-storey rest.
 */
export function roofSectionsFromRooms(b: Building, makeId: (i: number) => string = (i) => `roof_${i + 1}`): RoofSection[] {
  const pitch = b.settings.roof?.pitch ?? 35;
  const ext = b.settings.wall_exterior;
  const floors = b.floors.filter((f) => f.rooms.some((r) => r.points.length >= 3)).sort((p, q) => q.elevation - p.elevation);
  const out: RoofSection[] = [];
  const above: Room[] = [];
  const round = (v: number) => Math.round(v * 1000) / 1000;
  for (const floor of floors) {
    const rooms = floor.rooms.filter((r) => r.points.length >= 3);
    const xs = [...new Set(rooms.flatMap((r) => r.points.map((p) => round(p[0]))))].sort((p, q) => p - q);
    const zs = [...new Set(rooms.flatMap((r) => r.points.map((p) => round(p[1]))))].sort((p, q) => p - q);
    const nx = xs.length - 1;
    const nz = zs.length - 1;
    const inside = (rs: Room[], p: Vec2) => rs.some((r) => pointInPolygon(p, r.points));
    const covered: boolean[][] = [];
    for (let j = 0; j < nz; j++) {
      covered.push([]);
      for (let i = 0; i < nx; i++) {
        const c: Vec2 = [(xs[i] + xs[i + 1]) / 2, (zs[j] + zs[j + 1]) / 2];
        covered[j].push(inside(rooms, c) && !inside(above, c));
      }
    }
    // greedy rectangles: as wide as possible, then as deep as the whole row allows
    const used = covered.map((row) => row.map(() => false));
    const free = (i: number, j: number) => covered[j][i] && !used[j][i];
    const top = floor.elevation + floor.height;
    for (let j = 0; j < nz; j++) {
      for (let i = 0; i < nx; i++) {
        if (!free(i, j)) continue;
        let i2 = i;
        while (i2 + 1 < nx && free(i2 + 1, j)) i2++;
        let j2 = j;
        while (j2 + 1 < nz && Array.from({ length: i2 - i + 1 }, (_, k) => free(i + k, j2 + 1)).every(Boolean)) j2++;
        for (let jj = j; jj <= j2; jj++) for (let ii = i; ii <= i2; ii++) used[jj][ii] = true;
        const x0 = xs[i] - ext;
        const x1 = xs[i2 + 1] + ext;
        const z0 = zs[j] - ext;
        const z1 = zs[j2 + 1] + ext;
        if (Math.min(x1 - x0, z1 - z0) < 0.8) continue;
        out.push({
          id: makeId(out.length),
          x0: round(x0),
          z0: round(z0),
          x1: round(x1),
          z1: round(z1),
          shape: "gable",
          axis: x1 - x0 >= z1 - z0 ? "x" : "z",
          eave_a: round(top),
          eave_b: round(top),
          pitch_a: pitch,
          pitch_b: pitch,
          base: round(top),
          overhang: null,
        });
      }
    }
    above.push(...rooms);
  }
  return out;
}
