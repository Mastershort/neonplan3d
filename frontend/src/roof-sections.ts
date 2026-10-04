// Roof sections: the plain geometry of a section (frame and profile across its ridge) and the
// proposal of sections from the rooms. No three.js here: the editor uses it as well.

import type { Building, Room, RoofSection, Vec2 } from "./model.ts";
import { pointInPolygon } from "./model.ts";

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
  if (s.shape === "flat") return { vr: w / 2, rh: ea, y: () => ea };
  if (s.shape === "pent") return { vr: w, rh: ea + w * ta, y: (v) => ea + v * ta };
  // the slopes meet where they are equally high: a lower eave or a flatter slope moves the ridge
  const vr = ta + tb > 1e-6 ? Math.min(w, Math.max(0, (eb - ea + w * tb) / (ta + tb))) : w / 2;
  const rh = ea + vr * ta;
  return { vr, rh, y: (v) => (v <= vr ? ea + v * ta : eb + (w - v) * tb) };
}

/** Anything that carries roof sections: a building, or just its settings in a test. */
export type RoofHolder = { settings: { roof: { sections?: readonly RoofSection[] | null } } };

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
    const v = s.axis === "x" ? (s.flip ? z1 - z : z - z0) : s.flip ? x1 - x : x - x0;
    const y = sectionProfile(s).y(v) - ROOF_THICK;
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
    if (s.open || s.shape === "flat") continue;
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
