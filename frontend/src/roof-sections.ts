// Roof sections: the plain geometry of a section (frame and profile across its ridge) and the
// proposal of sections from the rooms. No three.js here: the editor uses it as well.

import type { Building, FreeWall, Room, RoofEnd, RoofSection, Vec2 } from "./model.ts";
import { pointInPolygon, polygonArea, signedArea } from "./model.ts";
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

/** A section's turn: the point it turns about and the angle's cosine and sine; null when it is not turned. */
export interface SectionTurn {
  p: Vec2;
  c: number;
  s: number;
}

type Turnable = Pick<RoofSection, "x0" | "z0" | "x1" | "z1"> & { rotation?: number | null; pivot?: Vec2 | null; points?: Vec2[] | null };

export function sectionTurn(s: Turnable): SectionTurn | null {
  const a = s.rotation ?? 0;
  // a free-shaped flat roof is drawn as it is: its corners already lie where they should
  if (!a || (s.points && s.points.length >= 3)) return null;
  const r = a * DEG;
  return { p: s.pivot ?? [(s.x0 + s.x1) / 2, (s.z0 + s.z1) / 2], c: Math.cos(r), s: Math.sin(r) };
}

/** A point of the section before its turn, where it lies after it (and back). */
export function turnPoint(t: SectionTurn | null, q: Vec2, back = false): Vec2 {
  if (!t) return q;
  const dx = q[0] - t.p[0];
  const dz = q[1] - t.p[1];
  const sn = back ? -t.s : t.s;
  return [t.p[0] + dx * t.c - dz * sn, t.p[1] + dx * sn + dz * t.c];
}

export function sectionFrame(s: Pick<RoofSection, "x0" | "z0" | "x1" | "z1" | "axis" | "flip"> & Partial<Pick<RoofSection, "rotation" | "pivot" | "points">>): SectionFrame {
  const x0 = Math.min(s.x0, s.x1);
  const x1 = Math.max(s.x0, s.x1);
  const z0 = Math.min(s.z0, s.z1);
  const z1 = Math.max(s.z0, s.z1);
  // flipped: v runs from the high coordinate, so side a is the bottom (or right) side
  const t = sectionTurn(s);
  const plain: (u: number, v: number) => Vec2 = s.axis === "x" ? (u, v) => [u, s.flip ? z1 - v : z0 + v] : (u, v) => [s.flip ? x1 - v : x0 + v, u];
  const at = t ? (u: number, v: number) => turnPoint(t, plain(u, v)) : plain;
  return s.axis === "x" ? { u0: x0, u1: x1, w: z1 - z0, at } : { u0: z0, u1: z1, w: x1 - x0, at };
}

/** Whether a plan point lies on a section (with a margin, m): in its turned rectangle, or its free shape. */
export function onSection(s: Pick<RoofSection, "x0" | "z0" | "x1" | "z1" | "axis" | "flip"> & Partial<Pick<RoofSection, "rotation" | "pivot" | "points">>, x: number, z: number, margin = 1e-6): boolean {
  const [u, v] = sectionUV(s, x, z);
  const fr = sectionFrame({ ...s, rotation: 0 });
  return u >= fr.u0 - margin && u <= fr.u1 + margin && v >= -margin && v <= fr.w + margin;
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
export type RoofHolder = { settings: { roof: { type?: string; sections?: readonly RoofSection[] | null; overhang?: number } } };

/**
 * The sections that make up the roof: only a "custom" roof is built from them. Switching the sections off
 * keeps them in the plan (to switch them on again), but they must neither show nor cut walls (#621).
 */
export function activeSections(b: RoofHolder): readonly RoofSection[] {
  const roof = b.settings.roof;
  return roof.type === undefined || roof.type === "custom" ? (roof.sections ?? []) : [];
}

/** Thickness of the roof slab (the walls under it end this far below the profile). */
export const ROOF_THICK = 0.14;

/**
 * Whether a section can reach below a floor's ceiling: its wall top or one of its eaves lies lower. A low
 * eave over a full-height floor cuts the walls too (D147), not only a wall top set below the ceiling.
 */
export function sectionCutsBelow(s: Pick<RoofSection, "open" | "base" | "eave_a" | "eave_b">, ceiling: number): boolean {
  return !s.open && Math.min(s.base, s.eave_a, s.eave_b) < ceiling - 0.05;
}

/**
 * Whether a section's underside rises above a floor level anywhere. A lower storey's roof that lies wholly
 * under a floor (its ridge only pokes through the floor slab) is no ceiling of that floor and must not
 * cut its walls (#621).
 */
export function sectionAbove(s: Parameters<typeof sectionProfile>[0], level: number): boolean {
  return sectionProfile(s).rh - ROOF_THICK > level + 0.01;
}

/**
 * The underside of the roof above a plan point (absolute height): the lowest covered section, or
 * null outside every section (canopies do not count, and neither does a single roof: it sits on
 * the top floor's walls anyway).
 */
export function roofUnderAt(b: RoofHolder, x: number, z: number, level?: number): number | null {
  let best: number | null = null;
  const o = Math.max(0, b.settings.roof.overhang ?? 0);
  // where sections overlap, the higher roof is the ceiling: a dormer or a cross gable over the main
  // slope, a lower annex roof running under a higher one
  for (const s of activeSections(b)) {
    if (s.open) continue;
    // with a floor level: roofs lying wholly below that floor are left out (#621)
    if (level !== undefined && !sectionAbove(s, level)) continue;
    // a side whose overhang is set by hand (#863) covers what stands under that overhang too: a balcony's walls under
    // a wide eave end under the roof instead of rising through it (#921); the automatic sides end at the walls, as
    // they always did
    const own = s.points && s.points.length >= 3 ? null : (s.overhang_sides ?? null);
    const set = (i: number) => (typeof own?.[i] === "number" ? Math.max(0, own[i] as number) : null);
    const [u, v] = sectionUV(s, x, z);
    const fr = sectionFrame({ ...s, rotation: 0 });
    const m = 1e-6;
    if (u < fr.u0 - (set(2) ?? 0) - m || u > fr.u1 + (set(3) ?? 0) + m || v < -(set(0) ?? 0) - m || v > fr.w + (set(1) ?? 0) + m) continue;
    // a free-shaped flat roof covers its polygon only
    if (s.points && s.points.length >= 3 && !pointInPolygon([x, z], s.points)) continue;
    // hipped ends and broken slopes: the planes decide, the profile across is the fallback
    const flat = s.shape === "flat" || s.shape === "parapet";
    const so = Math.max(0, s.overhang ?? o);
    const planes = flat ? null : sectionHeightAt(sectionGeometry(s, { a: set(0) ?? so, b: set(1) ?? so, u0: set(2) ?? so, u1: set(3) ?? so }), u, v);
    const y = (planes ?? sectionProfile(s).y(v)) - ROOF_THICK;
    best = best === null ? y : Math.max(best, y);
  }
  return best;
}

/**
 * Where a sloped section leaves `headroom` metres above a floor at `level`: lines across the section
 * (in plan coordinates), one per slope that crosses that height – the editor draws them in attic rooms.
 */
export function headroomLines(b: RoofHolder, level: number, headroom: number): [Vec2, Vec2][] {
  const out: [Vec2, Vec2][] = [];
  for (const s of activeSections(b)) {
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
export function sectionPolygon(s: Pick<RoofSection, "x0" | "z0" | "x1" | "z1" | "points"> & Partial<Pick<RoofSection, "rotation" | "pivot">>, overhang: number): Vec2[] {
  if (s.points && s.points.length >= 3) return offsetPolygon(s.points, overhang);
  const x0 = Math.min(s.x0, s.x1) - overhang;
  const x1 = Math.max(s.x0, s.x1) + overhang;
  const z0 = Math.min(s.z0, s.z1) - overhang;
  const z1 = Math.max(s.z0, s.z1) + overhang;
  const t = sectionTurn(s);
  return ([[x0, z0], [x1, z0], [x1, z1], [x0, z1]] as Vec2[]).map((p) => turnPoint(t, p));
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
  /** The wall profile under each end (u0, u1): null under a hip. */
  gables: [[number, number][] | null, [number, number][] | null];
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
    const pg: [number, number][] = [[0, pr.y(0)], [w, pr.y(w)]];
    return { faces: [c], rim: c, ridges: [[b1, b0]], gable: pg, gables: [pg, pg] };
  }
  if (s.shape === "pyramid") {
    // hips rise from the corners up to one point
    const rs: Q = [(fr.u0 + fr.u1) / 2, pr.vr, pr.rh];
    return { faces: [[a0, a1, rs], [a1, b1, rs], [b1, b0, rs], [b0, a0, rs]], rim: [a0, a1, b1, b0], ridges: [[a0, rs], [b0, rs], [a1, rs], [b1, rs]], gable: null, gables: [null, null] };
  }
  if (s.shape === "mansard") {
    const m = mansardParts(w, s.eave_a, s.eave_b, ta, tb);
    const mg: [number, number][] = [[0, pr.y(0)], [m.vla, m.yla], [m.vr, m.rh], [w - m.vlb, m.ylb], [w, pr.y(w)]];
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
      gable: mg,
      gables: [mg, mg],
    };
  }
  // gable, hip and half-hip: each end of the ridge on its own (#466) – a gable end runs the ridge out to the
  // rake, a hip end rises from the corners, a half-hip end is a gable whose top is hipped
  const [e0, e1] = sectionEnds(s) ?? ["gable", "gable"];
  const run = endRuns(s, [e0, e1]);
  const r0: Q = e0 === "gable" ? [U0, pr.vr, pr.rh] : [fr.u0 + run.d0, pr.vr, pr.rh];
  const r1: Q = e1 === "gable" ? [U1, pr.vr, pr.rh] : [fr.u1 - run.d1, pr.vr, pr.rh];
  // the half-hip's lower corners, at the rake (with the overhang)
  const ha0: Q = [U0, run.vah, run.yh];
  const hb0: Q = [U0, run.vbh, run.yh];
  const ha1: Q = [U1, run.vah, run.yh];
  const hb1: Q = [U1, run.vbh, run.yh];
  const half0 = e0 === "halfhip";
  const half1 = e1 === "halfhip";
  const faces: Q[][] = [
    [a0, a1, ...(half1 ? [ha1] : []), r1, r0, ...(half0 ? [ha0] : [])],
    [r0, r1, ...(half1 ? [hb1] : []), b1, b0, ...(half0 ? [hb0] : [])],
  ];
  if (e0 === "hip") faces.push([b0, a0, r0]);
  if (half0) faces.push([hb0, ha0, r0]);
  if (e1 === "hip") faces.push([a1, b1, r1]);
  if (half1) faces.push([ha1, hb1, r1]);
  const rim: Q[] = [a0, a1, ...(e1 === "gable" ? [r1] : half1 ? [ha1, hb1] : []), b1, b0, ...(e0 === "gable" ? [r0] : half0 ? [hb0, ha0] : [])];
  const ridges: [Q, Q][] = [[r0, r1]];
  if (e0 === "hip") ridges.push([a0, r0], [b0, r0]);
  if (half0) ridges.push([ha0, r0], [hb0, r0]);
  if (e1 === "hip") ridges.push([a1, r1], [b1, r1]);
  if (half1) ridges.push([ha1, r1], [hb1, r1]);
  // the wall under each end: the full triangle under a gable, cut off at the half-hip, none under a hip
  const full: [number, number][] = [[0, pr.y(0)], [pr.vr, pr.rh], [w, pr.y(w)]];
  const cut: [number, number][] = [[0, pr.y(0)], [run.vah, run.yh], [run.vbh, run.yh], [w, pr.y(w)]];
  const endWall = (e: RoofEnd) => (e === "gable" ? full : e === "halfhip" ? cut : null);
  const gables: [[number, number][] | null, [number, number][] | null] = [endWall(e0), endWall(e1)];
  return { faces, rim, ridges, gable: gables[0] ?? gables[1], gables };
}

/** The ends of a gable, hip or half-hip section (each as set, or as its shape); null for the other shapes. */
export function sectionEnds(s: Pick<RoofSection, "shape" | "end_u0" | "end_u1">): [RoofEnd, RoofEnd] | null {
  if (s.shape !== "gable" && s.shape !== "hip" && s.shape !== "halfhip") return null;
  const own: RoofEnd = s.shape;
  const ok = (e: RoofEnd | null | undefined): RoofEnd => (e === "gable" || e === "hip" || e === "halfhip" ? e : own);
  return [ok(s.end_u0), ok(s.end_u1)];
}

/**
 * How far in from the end walls the ridge starts at a hipped end (d0, d1; 0 at a gable end) and where a half-hip
 * starts (its height yh, across at vah and vbh). With both ends hipped each takes at most half the length.
 */
export function endRuns(s: RoofSection, ends: [RoofEnd, RoofEnd]): { d0: number; d1: number; yh: number; vah: number; vbh: number } {
  const fr = sectionFrame(s);
  const pr = sectionProfile(s);
  const w = fr.w;
  const ta = Math.tan(Math.min(80, Math.max(0, s.pitch_a)) * DEG);
  const tb = Math.tan(Math.min(80, Math.max(0, s.pitch_b)) * DEG);
  const len = fr.u1 - fr.u0;
  const cap = ends[0] !== "gable" && ends[1] !== "gable" ? len / 2 : len;
  // a half-hip starts at 55 % of the gable's height and slopes like side a
  const low = Math.min(pr.y(0), pr.y(w));
  const yh = low + (pr.rh - low) * 0.55;
  const vah = ta > 1e-6 ? Math.min(pr.vr, (yh - s.eave_a) / ta) : pr.vr;
  const vbh = tb > 1e-6 ? Math.max(pr.vr, w - (yh - s.eave_b) / tb) : pr.vr;
  const hip = Math.min(cap, Math.min(pr.vr, w - pr.vr) || w / 2);
  const half = Math.min(cap - 0.1, (pr.rh - yh) / Math.max(0.2, ta));
  const d = (e: RoofEnd) => (e === "hip" ? hip : e === "halfhip" ? half : 0);
  return { d0: d(ends[0]), d1: d(ends[1]), yh, vah, vbh };
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

/** A plan point in a section's frame: along the ridge (u) and across from side a (v). */
/**
 * A section turned on by `delta` degrees (clockwise in the plan) about the point `p`: it keeps its shape, its own
 * turn point goes along. Turning a roof, its dormers and cross gables come along this way.
 */
export function turnSectionAbout(s: RoofSection, delta: number, p: Vec2): RoofSection {
  const r = delta * DEG;
  const t: SectionTurn = { p, c: Math.cos(r), s: Math.sin(r) };
  if (s.points && s.points.length >= 3) return { ...s, points: s.points.map((q) => turnPoint(t, q)), ...polygonBox(s.points.map((q) => turnPoint(t, q))) };
  const q: Vec2 = s.pivot ?? [(s.x0 + s.x1) / 2, (s.z0 + s.z1) / 2];
  const q2 = turnPoint(t, q);
  const dx = q2[0] - q[0];
  const dz = q2[1] - q[1];
  let a = ((((s.rotation ?? 0) + delta) % 360) + 360) % 360;
  if (a > 180) a -= 360;
  return { ...s, x0: s.x0 + dx, x1: s.x1 + dx, z0: s.z0 + dz, z1: s.z1 + dz, pivot: q2, rotation: Math.abs(a) < 1e-9 ? 0 : a };
}

export function sectionUV(s: Pick<RoofSection, "x0" | "z0" | "x1" | "z1" | "axis" | "flip"> & Partial<Pick<RoofSection, "rotation" | "pivot" | "points">>, px: number, pz: number): [number, number] {
  // a turned section: the point turned back first
  const [x, z] = turnPoint(sectionTurn(s), [px, pz], true);
  const x0 = Math.min(s.x0, s.x1);
  const x1 = Math.max(s.x0, s.x1);
  const z0 = Math.min(s.z0, s.z1);
  const z1 = Math.max(s.z0, s.z1);
  return s.axis === "x" ? [x, s.flip ? z1 - z : z - z0] : [z, s.flip ? x1 - x : x - x0];
}

function polygonBoxOf(s: Pick<RoofSection, "x0" | "z0" | "x1" | "z1">) {
  return { x0: Math.min(s.x0, s.x1), x1: Math.max(s.x0, s.x1), z0: Math.min(s.z0, s.z1), z1: Math.max(s.z0, s.z1) };
}

/**
 * The section a dormer (or any smaller section: a cross gable) sits on: the clearly bigger sloped one
 * that holds its centre; the smallest such one when several do. Null when it stands on its own.
 */
export function dormerParent(sections: readonly RoofSection[], d: RoofSection): RoofSection | null {
  const [cx, cz] = turnPoint(sectionTurn(d), [(d.x0 + d.x1) / 2, (d.z0 + d.z1) / 2]);
  const area = (s: RoofSection) => Math.abs((s.x1 - s.x0) * (s.z1 - s.z0));
  let best: RoofSection | null = null;
  for (const s of sections) {
    if (s === d || s.dormer || s.open || s.shape === "flat" || s.shape === "parapet" || area(s) < area(d) * 1.5) continue;
    if (!onSection(s, cx, cz)) continue;
    if (!best || area(s) < area(best)) best = s;
  }
  return best;
}

/** A dormer's footprint in its parent's frame (u along the parent ridge, v across), or null when it lies outside. */
export function dormerHole(parent: RoofSection, d: RoofSection): { u0: number; u1: number; v0: number; v1: number } | null {
  const corners = sectionPolygon(d, 0).map((p) => sectionUV(parent, p[0], p[1]));
  const u0 = Math.min(...corners.map((c) => c[0]));
  const u1 = Math.max(...corners.map((c) => c[0]));
  const v0 = Math.min(...corners.map((c) => c[1]));
  const v1 = Math.max(...corners.map((c) => c[1]));
  return u1 - u0 < 0.1 || v1 - v0 < 0.1 ? null : { u0, u1, v0, v1 };
}

/**
 * A new dormer on a side of a section: 2 m wide, its front flush with the eave wall, its eaves 1.4 m
 * above the section's eave, 35° gable; as deep as its ridge needs to meet the slope.
 */
export function proposeDormer(parent: RoofSection, side: "a" | "b", id: string, along?: number): RoofSection {
  const turn = sectionTurn(parent);
  const fr = sectionFrame({ ...parent, rotation: 0 });
  const pr = sectionProfile(parent);
  const W = 2;
  const u = Math.max(fr.u0 + 0.3, Math.min(fr.u1 - W - 0.3, (along ?? (fr.u0 + fr.u1) / 2) - W / 2));
  const eave = side === "a" ? parent.eave_a : parent.eave_b;
  const pitch = side === "a" ? parent.pitch_a : parent.pitch_b;
  const dEave = eave + 1.4;
  const rise = (W / 2) * Math.tan(35 * DEG);
  const ridge = dEave + rise;
  // the dormer's ridge meets the slope this far in from the eave
  const run = Math.max(0.8, Math.min(fr.w / 2 - 0.2, (ridge - eave) / Math.max(0.15, Math.tan(Math.min(80, pitch) * DEG))));
  const v0 = side === "a" ? 0 : fr.w - run;
  const v1 = side === "a" ? run : fr.w;
  const p = fr.at(u, v0);
  const q = fr.at(u + W, v1);
  return {
    id,
    x0: Math.round(Math.min(p[0], q[0]) * 100) / 100,
    z0: Math.round(Math.min(p[1], q[1]) * 100) / 100,
    x1: Math.round(Math.max(p[0], q[0]) * 100) / 100,
    z1: Math.round(Math.max(p[1], q[1]) * 100) / 100,
    shape: "gable",
    // the dormer's ridge runs into the slope: across the parent's ridge
    axis: parent.axis === "x" ? "z" : "x",
    eave_a: Math.round(dEave * 100) / 100,
    eave_b: Math.round(dEave * 100) / 100,
    pitch_a: 35,
    pitch_b: 35,
    base: Math.round(pr.y(side === "a" ? 0 : fr.w) * 100) / 100,
    overhang: 0.15,
    dormer: true,
    ...(turn ? { rotation: parent.rotation, pivot: turn.p } : {}),
  };
}

/**
 * A dormer (or cross gable) as the viewer draws it: its depth ends where its ridge meets the parent's
 * slope – deeper, its roof would lie under the slope. Lower eaves or a flatter pitch shorten it by
 * themselves, so nothing has to be re-measured after a change.
 */
export function effectiveDormer(parent: RoofSection, d: RoofSection): RoofSection {
  if (d.shape === "flat" || d.shape === "parapet") return d;
  const fr = sectionFrame(d);
  const rh = sectionProfile(d).rh;
  const pg = sectionGeometry(parent, { u0: 0, u1: 0, a: 0, b: 0 });
  const ppr = sectionProfile(parent);
  const h = (u: number) => {
    const [x, z] = fr.at(u, fr.w / 2);
    const [pu, pv] = sectionUV(parent, x, z);
    return sectionHeightAt(pg, pu, pv) ?? ppr.y(pv);
  };
  const frontIsU0 = h(fr.u0) <= h(fr.u1);
  const front = frontIsU0 ? fr.u0 : fr.u1;
  const rear = frontIsU0 ? fr.u1 : fr.u0;
  const dir = frontIsU0 ? 1 : -1;
  const depth = Math.abs(rear - front);
  let meet = rear;
  for (let t = 0.5; t < depth; t += 0.05) {
    if (h(front + dir * t) >= rh - 0.02) {
      meet = front + dir * t;
      break;
    }
  }
  if (Math.abs(meet - rear) < 0.05) return d;
  const t = sectionTurn(d);
  const copy = { ...d, ...(t ? { pivot: t.p } : {}) };
  // u runs along the dormer's own axis: x for an "x" axis, z for a "z" axis
  if (d.axis === "x") {
    if (rear === fr.u1) copy.x1 = meet;
    else copy.x0 = meet;
  } else if (rear === fr.u1) copy.z1 = meet;
  else copy.z0 = meet;
  return copy;
}

/**
 * Where the slope opens under a dormer: only where the dormer's roof lies above the slope – a shape
 * that narrows towards the rear (the valleys), cut as strips across the dormer's depth, each in the
 * parent's frame. The slope stays where it rises above the dormer's roof.
 */
export function dormerHoles(parent: RoofSection, d: RoofSection): { u0: number; u1: number; v0: number; v1: number }[] {
  const eff = effectiveDormer(parent, d);
  const fr = sectionFrame(eff);
  const dpr = sectionProfile(eff);
  const pg = sectionGeometry(parent, { u0: 0, u1: 0, a: 0, b: 0 });
  const ppr = sectionProfile(parent);
  const hp = (u: number) => {
    const [x, z] = fr.at(u, fr.w / 2);
    const [pu, pv] = sectionUV(parent, x, z);
    return sectionHeightAt(pg, pu, pv) ?? ppr.y(pv);
  };
  const frontIsU0 = hp(fr.u0) <= hp(fr.u1);
  const depth = fr.u1 - fr.u0;
  const out: { u0: number; u1: number; v0: number; v1: number }[] = [];
  const n = Math.max(1, Math.ceil(depth / 0.15));
  for (let i = 0; i < n; i++) {
    const t0 = (depth * i) / n;
    const t1 = (depth * (i + 1)) / n;
    const uA = frontIsU0 ? fr.u0 + t0 : fr.u1 - t0;
    const uB = frontIsU0 ? fr.u0 + t1 : fr.u1 - t1;
    // the slope at the strip's rear end; the dormer's roof across it decides the strip's width
    const level = hp(uB);
    let vmin = Infinity;
    let vmax = -Infinity;
    for (let k = 0; k <= 40; k++) {
      const v = (fr.w * k) / 40;
      if (dpr.y(v) > level + 0.02) {
        vmin = Math.min(vmin, v);
        vmax = Math.max(vmax, v);
      }
    }
    if (!(vmax - vmin > 0.05)) continue;
    const p = fr.at(uA, vmin);
    const q = fr.at(uB, vmax);
    const a = sectionUV(parent, p[0], p[1]);
    const b = sectionUV(parent, q[0], q[1]);
    out.push({ u0: Math.min(a[0], b[0]), u1: Math.max(a[0], b[0]), v0: Math.min(a[1], b[1]), v1: Math.max(a[1], b[1]) });
  }
  return out;
}

/** A polygon in (u, v, y) cut by an axis-aligned half-plane; heights follow the edges (the polygon is planar). */
function clipUV(poly: Q[], axis: 0 | 1, limit: number, keepBelow: boolean): Q[] {
  const inside = (p: Q) => (keepBelow ? p[axis] <= limit + 1e-9 : p[axis] >= limit - 1e-9);
  const out: Q[] = [];
  for (let i = 0; i < poly.length; i++) {
    const p = poly[i];
    const q = poly[(i + 1) % poly.length];
    const pi = inside(p);
    const qi = inside(q);
    if (pi) out.push(p);
    if (pi !== qi) {
      const t = (limit - p[axis]) / (q[axis] - p[axis]);
      out.push([p[0] + (q[0] - p[0]) * t, p[1] + (q[1] - p[1]) * t, p[2] + (q[2] - p[2]) * t]);
    }
  }
  return out;
}

/** A roof plane with a rectangular hole (a dormer's footprint): up to four pieces around the hole. */
export function cutHole(face: Q[], h: { u0: number; u1: number; v0: number; v1: number }): Q[][] {
  const left = clipUV(face, 0, h.u0, true);
  const right = clipUV(face, 0, h.u1, false);
  const middle = clipUV(clipUV(face, 0, h.u0, false), 0, h.u1, true);
  const below = clipUV(middle, 1, h.v0, true);
  const above = clipUV(middle, 1, h.v1, false);
  return [left, right, below, above].filter((p) => p.length >= 3 && Math.abs(polygonArea(p.map((q) => [q[0], q[1]] as Vec2))) > 1e-6);
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
 * instead of running into the house. An overhang set by hand for a side (`overhang_sides`) wins.
 */
export function sectionOverhang(b: Building, s: RoofSection, overhang: number): SectionOverhang {
  const fr = sectionFrame(s);
  const taller = b.floors.flatMap((f) => f.rooms.filter((r) => r.points.length >= 3 && f.elevation + f.height > s.base + 0.05));
  // the taller rooms out to their outer wall faces: a section drawn against the outer face of a thick
  // wall, or a hand's breadth away from it, meets the house in its wall, not in the room (#863)
  const ext = b.settings.wall_exterior;
  const outer = taller.map((r) => offsetPolygon(r.points, Math.max(ext, ...(r.wall_thickness ?? []).map((t) => t ?? 0)) + 0.01));
  const d = 0.35;
  // a sample point of an edge, `k` metres outwards (negative: into the section); `depth` is the section's
  // size at right angles to the edge
  const hits = (at: (k: number) => Vec2, depth: number) => {
    // a room right outside the edge (as before) …
    if (taller.some((r) => pointInPolygon(at(d), r.points))) return true;
    // … or its wall: the section ends at or just short of a taller room's outer wall face – a room it does not
    // stand over itself (the attic under its own roof, a dormer over the attic)
    const inside = at(-Math.min(0.3, depth / 2));
    return outer.some((o) => !pointInPolygon(inside, o) && [0.05, 0.2, d].some((k) => pointInPolygon(at(k), o)));
  };
  const ts = [0.15, 0.5, 0.85];
  const along = ts.map((t) => fr.u0 + (fr.u1 - fr.u0) * t);
  const across = ts.map((t) => fr.w * t);
  const blocked = (side: "a" | "b" | "u0" | "u1"): boolean => {
    if (side === "a") return along.some((u) => hits((k) => fr.at(u, -k), fr.w));
    if (side === "b") return along.some((u) => hits((k) => fr.at(u, fr.w + k), fr.w));
    if (side === "u0") return across.some((v) => hits((k) => fr.at(fr.u0 - k, v), fr.u1 - fr.u0));
    return across.some((v) => hits((k) => fr.at(fr.u1 + k, v), fr.u1 - fr.u0));
  };
  // a side set by hand (#863): its own overhang, whatever the house beside it
  const own = s.overhang_sides ?? null;
  const pick = (i: number, side: "a" | "b" | "u0" | "u1") => {
    const set = own?.[i];
    return typeof set === "number" ? Math.max(0, set) : blocked(side) ? 0 : overhang;
  };
  return { a: pick(0, "a"), b: pick(1, "b"), u0: pick(2, "u0"), u1: pick(3, "u1") };
}

/** Wall tops below a rectangle: the highest floor with a room under its middle (null = none). */
export function wallTopUnder(b: Building, x0: number, z0: number, x1: number, z1: number): number | null {
  // not the centre alone: an upper floor with a stairwell or a hall cut out in the middle would leave
  // the roof on the ground floor (#166) – the highest floor any of nine points of the rectangle falls on
  const pts: Vec2[] = [];
  for (const u of [0.2, 0.5, 0.8]) for (const v of [0.2, 0.5, 0.8]) pts.push([x0 + (x1 - x0) * u, z0 + (z1 - z0) * v]);
  const tops = b.floors.filter((f) => f.rooms.some((r) => r.points.length >= 3 && pts.some((p) => pointInPolygon(p, r.points)))).map((f) => f.elevation + f.height);
  return tops.length ? Math.max(...tops) : null;
}

/** The floor a roof section sits on: the highest one with rooms that starts below the section's base. */
export function sectionFloor(b: Building, sec: Pick<RoofSection, "base">): Building["floors"][number] | undefined {
  const floors = b.floors.filter((f) => f.rooms.length > 0).sort((p, q) => p.elevation - q.elevation);
  return [...floors].reverse().find((f) => f.elevation < sec.base - 0.05) ?? floors[0];
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

/**
 * The floor a roof part rides with when the floors are pulled apart: the highest floor with rooms under its
 * sections (between the floor it sits on and its ridge) – a loft under the same slopes, not only the floor
 * the roof stands on (#202). Dormers ride with their main roof, as they sit in its slope (D207).
 */
export function roofRider(b: Building, floor: Building["floors"][number], sectionIds: readonly string[]): string {
  const all = b.settings.roof.sections ?? [];
  const mine = all.filter((s) => sectionIds.includes(s.id)).map((s) => dormerParent(all, s) ?? s);
  if (!mine.length) return floor.id;
  const top = Math.max(...mine.map((s) => ridgeHeight(s)));
  const under = (f: Building["floors"][number]) =>
    f.rooms.some((r) =>
      r.points.length >= 3 &&
      mine.some((s) => {
        const [cx, cz] = r.points.reduce((a, p) => [a[0] + p[0] / r.points.length, a[1] + p[1] / r.points.length], [0, 0]);
        return onSection(s, cx, cz);
      }),
    );
  const riders = b.floors.filter((f) => f.elevation >= floor.elevation && f.elevation < top - 0.3 && under(f)).sort((p, q) => q.elevation - p.elevation);
  return riders[0]?.id ?? floor.id;
}

// ---------------------------------------------------------------- sections that overlap (#466) and wings (#605)

/** A roof plane of another section in the plan (x, z, height), and how deep its body reaches below its top face. */
export interface RoofCover {
  poly: [number, number, number][];
  /** Over its walls a roof hides everything below it (Infinity); on its overhang only its slab. */
  depth: number;
}

/** A cover in a section's own frame (u, v, height). */
export interface LocalCover {
  poly: Q[];
  depth: number;
}

/** A half-plane a·u + b·v + c ≥ 0. */
type Half = [number, number, number];

function clipHalf(poly: readonly Q[], [a, b, c]: Half): Q[] {
  const f = (p: Q) => a * p[0] + b * p[1] + c;
  const out: Q[] = [];
  for (let i = 0; i < poly.length; i++) {
    const p = poly[i];
    const q = poly[(i + 1) % poly.length];
    const fp = f(p);
    const fq = f(q);
    if (fp >= -1e-9) out.push(p);
    if (fp >= -1e-9 !== fq >= -1e-9) {
      const t = fp / (fp - fq);
      out.push([p[0] + (q[0] - p[0]) * t, p[1] + (q[1] - p[1]) * t, p[2] + (q[2] - p[2]) * t]);
    }
  }
  return out;
}

/** The plane through a polygon as height = α·u + β·v + γ (null when it has no area in the plan). */
function planeOf(poly: readonly Q[]): Half | null {
  // the corner farthest from the first one and the one farthest off that line: a polygon clipped along its own
  // edges may repeat a corner, and three corners in a row span no plane
  const p0 = poly[0];
  if (!p0) return null;
  let p1 = p0;
  for (const p of poly) if (Math.hypot(p[0] - p0[0], p[1] - p0[1]) > Math.hypot(p1[0] - p0[0], p1[1] - p0[1])) p1 = p;
  const ux = p1[0] - p0[0];
  const uz = p1[1] - p0[1];
  let p2 = p0;
  let det = 0;
  for (const p of poly) {
    const d = ux * (p[1] - p0[1]) - uz * (p[0] - p0[0]);
    if (Math.abs(d) > Math.abs(det)) {
      det = d;
      p2 = p;
    }
  }
  if (Math.abs(det) < 1e-9) return null;
  const vx = p2[0] - p0[0];
  const vz = p2[1] - p0[1];
  const dy1 = p1[2] - p0[2];
  const dy2 = p2[2] - p0[2];
  const al = (dy1 * vz - dy2 * uz) / det;
  const be = (ux * dy2 - vx * dy1) / det;
  return [al, be, p0[2] - al * p0[0] - be * p0[1]];
}

const areaOf = (p: readonly Q[]) => Math.abs(polygonArea(p.map((q) => [q[0], q[1]] as Vec2)));

/** The inside of a convex polygon as half-planes (either way round). */
function insideOf(poly: readonly Q[]): Half[] {
  const s = signedArea(poly.map((q) => [q[0], q[1]] as Vec2)) >= 0 ? 1 : -1;
  const out: Half[] = [];
  for (let i = 0; i < poly.length; i++) {
    const p = poly[i];
    const q = poly[(i + 1) % poly.length];
    // a repeated corner (from clipping) has no edge: as a half-plane it would hold everything
    const len = Math.hypot(q[0] - p[0], q[1] - p[1]);
    if (len < 1e-7) continue;
    const a = (-(q[1] - p[1]) * s) / len;
    const b = ((q[0] - p[0]) * s) / len;
    out.push([a, b, -(a * p[0] + b * p[1])]);
  }
  return out;
}

/** The half-planes of the part of a face that lies under a cover (by more than a touch, and within its depth). */
function underHalves(face: readonly Q[], cover: LocalCover): Half[] | null {
  const pf = planeOf(face);
  const pc = planeOf(cover.poly);
  if (!pf || !pc || areaOf(cover.poly) < 1e-6) return null;
  const hs: Half[] = [...insideOf(cover.poly), [pc[0] - pf[0], pc[1] - pf[1], pc[2] - pf[2] - 0.01]];
  if (Number.isFinite(cover.depth)) hs.push([pf[0] - pc[0], pf[1] - pc[1], pf[2] - pc[2] + cover.depth]);
  return hs;
}

/**
 * A convex roof plane without the parts that lie under the covers (other sections' planes), in convex pieces.
 * Where two sections overlap, each keeps only what shows above the other (#466), so a wing running into a
 * main roof meets it in a clean valley (#605).
 */
export function cutUnder(face: Q[], covers: readonly LocalCover[]): Q[][] {
  let pieces: Q[][] = [face];
  for (const cover of covers) {
    const next: Q[][] = [];
    for (const piece of pieces) {
      const hs = underHalves(piece, cover);
      let gone: Q[] = hs ? piece : [];
      for (const h of hs ?? []) gone = clipHalf(gone, h);
      if (gone.length < 3 || areaOf(gone) < 1e-6) {
        next.push(piece);
        continue;
      }
      // the piece minus the convex part under the cover: what lies outside each of its edges in turn
      let rest: Q[] = piece;
      for (const [a, b, c] of insideOf(gone)) {
        const out = clipHalf(rest, [-a, -b, -c]);
        if (out.length >= 3 && areaOf(out) > 1e-6) next.push(out);
        rest = clipHalf(rest, [a, b, c]);
        if (rest.length < 3) break;
      }
    }
    pieces = next;
  }
  return pieces;
}

/** The parts of a line on a roof (a ridge, an eave) that are not under a cover. */
export function lineOutside(p: Q, q: Q, covers: readonly LocalCover[]): [Q, Q][] {
  let keep: [number, number][] = [[0, 1]];
  const at = (t: number): Q => [p[0] + (q[0] - p[0]) * t, p[1] + (q[1] - p[1]) * t, p[2] + (q[2] - p[2]) * t];
  for (const cover of covers) {
    const pc = planeOf(cover.poly);
    if (!pc || areaOf(cover.poly) < 1e-6) continue;
    // every condition is linear along the line: f0 + df·t ≥ 0
    const lin: [number, number][] = insideOf(cover.poly).map(([a, b, c]) => [a * p[0] + b * p[1] + c, a * (q[0] - p[0]) + b * (q[1] - p[1])]);
    const gap = (r: Q) => pc[0] * r[0] + pc[1] * r[1] + pc[2] - r[2];
    const g0 = gap(p);
    const dg = gap(q) - g0;
    lin.push([g0 - 0.01, dg]);
    if (Number.isFinite(cover.depth)) lin.push([cover.depth - g0, -dg]);
    let t0 = 0;
    let t1 = 1;
    for (const [f0, df] of lin) {
      if (Math.abs(df) < 1e-12) {
        if (f0 < -1e-9) t1 = -1;
        continue;
      }
      const t = -f0 / df;
      if (df > 0) t0 = Math.max(t0, t);
      else t1 = Math.min(t1, t);
    }
    if (t1 - t0 < 1e-6) continue;
    keep = keep.flatMap(([s0, s1]): [number, number][] => [
      [s0, Math.min(s1, t0)],
      [Math.max(s0, t1), s1],
    ]).filter(([s0, s1]) => s1 - s0 > 1e-6);
  }
  return keep.map(([s0, s1]) => [at(s0), at(s1)]);
}

/** Where a roof plane meets a cover's plane, within both: a valley, or where a lower roof runs into a higher one. */
export function meetLine(face: readonly Q[], cover: readonly Q[]): [Q, Q] | null {
  const pf = planeOf(face);
  const pc = planeOf(cover);
  if (!pf || !pc || areaOf(cover) < 1e-6) return null;
  let both: Q[] = [...face];
  for (const h of insideOf(cover)) both = clipHalf(both, h);
  if (both.length < 3) return null;
  const d = (p: Q) => (pc[0] - pf[0]) * p[0] + (pc[1] - pf[1]) * p[1] + (pc[2] - pf[2]);
  const pts: Q[] = [];
  for (let i = 0; i < both.length; i++) {
    const p = both[i];
    const q = both[(i + 1) % both.length];
    const dp = d(p);
    const dq = d(q);
    if (dp < 0 !== dq < 0) {
      const t = dp / (dp - dq);
      pts.push([p[0] + (q[0] - p[0]) * t, p[1] + (q[1] - p[1]) * t, p[2] + (q[2] - p[2]) * t]);
    }
  }
  if (pts.length < 2) return null;
  const a = pts[0];
  const b = pts[pts.length - 1];
  return Math.hypot(a[0] - b[0], a[1] - b[1]) > 0.05 ? [a, b] : null;
}

/** A section's planes in the plan (x, z, height) as covers for the others: deep over its walls, only its slab on its overhang. */
export function sectionCovers(s: RoofSection, faces: readonly Q[][]): RoofCover[] {
  const fr = sectionFrame(s);
  const toPlan = (f: Q[]) =>
    f.map(([u, v, y]) => {
      const [x, z] = fr.at(u, v);
      return [x, z, y] as [number, number, number];
    });
  const out: RoofCover[] = [];
  for (const f of faces) {
    const body = clipUV(clipUV(clipUV(clipUV(f, 0, fr.u0, false), 0, fr.u1, true), 1, 0, false), 1, fr.w, true);
    if (body.length >= 3 && areaOf(body) > 1e-6) out.push({ poly: toPlan(body), depth: Infinity });
    for (const rest of cutHole(f, { u0: fr.u0, u1: fr.u1, v0: 0, v1: fr.w })) out.push({ poly: toPlan(rest), depth: ROOF_THICK });
  }
  return out;
}

/** Covers in a section's own frame (u, v, height). */
export function coversIn(s: RoofSection, covers: readonly RoofCover[]): LocalCover[] {
  return covers.map((c) => ({ poly: c.poly.map(([x, z, y]) => [...sectionUV(s, x, z), y] as Q), depth: c.depth }));
}

/** Whether two sections cut each other where they overlap: closed sloped ones, neither a dormer on the other. */
export function sectionsCut(sections: readonly RoofSection[], p: RoofSection, q: RoofSection): boolean {
  const sloped = (s: RoofSection) => !s.open && s.shape !== "flat" && s.shape !== "parapet";
  if (p === q || !sloped(p) || !sloped(q)) return false;
  return dormerParent(sections, p) !== q && dormerParent(sections, q) !== p;
}

/**
 * A wing whose ridge runs at right angles into the slope of another section (an L- or T-shaped house, #605): that
 * section and the wing's end (0 = u0, 1 = u1) that meets it. The wing is not higher than that roof, its width lies
 * within that roof's length, and its end reaches the roof without passing its ridge. Null otherwise – a section on
 * its own, a dormer, a cross gable sitting on its parent's slope.
 */
export function wingJunction(sections: readonly RoofSection[], s: RoofSection): { host: RoofSection; end: 0 | 1 } | null {
  if (s.dormer || s.open || !sectionEnds(s) || sectionTurn(s) || dormerParent(sections, s)) return null;
  const fr = sectionFrame(s);
  const rh = sectionProfile(s).rh;
  const area = (x: RoofSection) => Math.abs((x.x1 - x.x0) * (x.z1 - x.z0));
  let best: { host: RoofSection; end: 0 | 1 } | null = null;
  for (const h of sections) {
    if (h === s || h.dormer || h.open || sectionTurn(h) || h.axis === s.axis || h.shape === "flat" || h.shape === "parapet" || h.shape === "pent") continue;
    const hrh = sectionProfile(h).rh;
    // the lower roof runs into the higher one; equally high, the smaller into the bigger
    const higher = hrh > rh + 0.02 || (Math.abs(hrh - rh) <= 0.02 && (area(h) > area(s) || (area(h) === area(s) && sections.indexOf(h) < sections.indexOf(s))));
    if (!higher) continue;
    const hb = polygonBoxOf(h);
    const [hu0, hu1] = s.axis === "x" ? [hb.x0, hb.x1] : [hb.z0, hb.z1];
    const [hv0, hv1] = s.axis === "x" ? [hb.z0, hb.z1] : [hb.x0, hb.x1];
    const sb = polygonBoxOf(s);
    const [sv0, sv1] = s.axis === "x" ? [sb.z0, sb.z1] : [sb.x0, sb.x1];
    if (sv0 < hv0 - 0.05 || sv1 > hv1 + 0.05) continue;
    const ridgeU = hostRidge(s, h);
    let end: 0 | 1 | null = null;
    if (fr.u0 < hu0 - 0.05 && fr.u1 >= hu0 - 0.05 && fr.u1 <= ridgeU + 0.05) end = 1;
    else if (fr.u1 > hu1 + 0.05 && fr.u0 <= hu1 + 0.05 && fr.u0 >= ridgeU - 0.05) end = 0;
    if (end === null) continue;
    if (!best || area(h) > area(best.host)) best = { host: h, end };
  }
  return best;
}

/** The host's ridge line as a coordinate along the wing's ridge. */
function hostRidge(s: RoofSection, h: RoofSection): number {
  const hfr = sectionFrame(h);
  const p = hfr.at(hfr.u0, sectionProfile(h).vr);
  return s.axis === "x" ? p[0] : p[1];
}

/**
 * A wing as drawn where it runs into its host (#605): that end a plain gable reaching on to the host's ridge line
 * (the host's planes cut it off where it goes under them); the caller leaves out its overhang there.
 */
export function wingSection(s: RoofSection, junction: { host: RoofSection; end: 0 | 1 }): RoofSection {
  const ridgeU = hostRidge(s, junction.host);
  const copy: RoofSection = { ...s, ...(junction.end === 0 ? { end_u0: "gable" as const } : { end_u1: "gable" as const }) };
  const box = polygonBoxOf(s);
  if (s.axis === "x") {
    copy.x0 = junction.end === 0 ? Math.min(box.x0, ridgeU) : box.x0;
    copy.x1 = junction.end === 1 ? Math.max(box.x1, ridgeU) : box.x1;
  } else {
    copy.z0 = junction.end === 0 ? Math.min(box.z0, ridgeU) : box.z0;
    copy.z1 = junction.end === 1 ? Math.max(box.z1, ridgeU) : box.z1;
  }
  return copy;
}
