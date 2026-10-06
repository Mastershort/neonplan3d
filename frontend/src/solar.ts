// Solar fields on the roof: the roof faces a field can lie on, and the modules of a field in 3D and in the
// plan. Plain geometry without three.js, so the editor (plan) and the viewer (3D) share it.
//
// A face has a local frame: u runs along the eave (0 … lu), s up the slope from the eave (0 … ls, true
// length); on a flat roof s runs across, level. A field's u and v place its lower left corner on the face.

import type { Building, Floor, RoofSection, RoofWindow, SolarField, Vec2 } from "./model.ts";
import { outdoorGround } from "./model.ts";
import { generateWalls } from "./geometry/walls.ts";
import { sectionFrame, sectionOverhang, sectionProfile } from "./roof-sections.ts";

const DEG = Math.PI / 180;
type V3 = [number, number, number];

/** Module size (a common 400 W module): width × height in portrait (m), and the gap between modules. */
export const MODULE_W = 1.13;
export const MODULE_H = 1.72;
export const MODULE_GAP = 0.025;
/** Height of the modules above the roof surface (mounting rails). */
const LIFT = 0.07;
/** Thickness of a flat roof slab (as drawn by the roof). */
const FLAT_SLAB = 0.25;

export interface RoofFace {
  /** "main:a" / "main:b" / "main:top" for the single roof, "<section id>:a" / ":b" / ":top" for sections; the hip ends of a hip or pyramid roof are ":c" (start) and ":d" (end). */
  key: string;
  /** Section the face belongs to (null: the single roof). */
  section: string | null;
  side: "a" | "b" | "c" | "d" | "top";
  flat: boolean;
  /** Eave corner (heights above the ground), unit vectors along the eave and up the slope, the normal. */
  o: V3;
  eu: V3;
  es: V3;
  n: V3;
  lu: number;
  ls: number;
  /** Slope in degrees (0 on a flat roof). */
  pitch: number;
  /** Usable range along the eave at a slope distance (hip roofs get narrower towards the ridge). */
  span(s: number): [number, number];
  /** Plan direction the face looks to (down the slope); for a flat roof the direction of +s. */
  facing: Vec2;
  /** The ground in the garden: no edges, the field goes where it is put. */
  unbounded?: boolean;
  /** A house wall: upright, on this floor (its modules hang flat on the facade). */
  wall?: { floorId: string };
}

/** Outer faces of the house walls, per floor: modules can hang on a facade or a balcony. */
export function wallFaces(b: Building, floorId?: string): RoofFace[] {
  const out: RoofFace[] = [];
  for (const floor of b.floors) {
    if (floorId && floor.id !== floorId) continue;
    const { walls } = generateWalls(floor.rooms, { exterior: b.settings.wall_exterior, interior: b.settings.wall_interior }, floor.walls ?? []);
    for (const w of walls) {
      // exterior walls: the outer face; free-standing walls (a garden wall, a fence wall): both faces
      if (!w.exterior && !w.free) continue;
      const dx = w.b[0] - w.a[0];
      const dz = w.b[1] - w.a[1];
      const l = Math.hypot(dx, dz);
      if (l < 1.2) continue;
      // exterior walls have their room on the left: the outer face lies on the right
      const nx = dz / l;
      const nz = -dx / l;
      const height = Math.min(floor.height, w.height ?? floor.height);
      const face = (key: string, o: V3, eu: V3, n: V3) =>
        out.push({ key, section: null, side: "top", flat: false, o, eu, es: [0, 1, 0], n, lu: l, ls: height, pitch: 90, span: () => [0, l], facing: [n[0], n[2]], wall: { floorId: floor.id } });
      face(`wall:${floor.id}:${w.id}`, [w.a[0] + nx * w.right, floor.elevation, w.a[1] + nz * w.right], [dx / l, 0, dz / l], [nx, 0, nz]);
      // the back of a free wall runs the other way, so its modules face outwards too
      if (w.free) face(`wall:${floor.id}:${w.id}:back`, [w.b[0] - nx * w.left, floor.elevation, w.b[1] - nz * w.left], [-dx / l, 0, -dz / l], [-nx, 0, -nz]);
    }
  }
  return out;
}

/** Face key of fields standing in the garden. */
export const GROUND = "ground";

/**
 * The floor whose garden ground-mounted fields stand in: the lowest with rooms at ground level – a cellar
 * below the ground is passed over (#192) – else the lowest with rooms at all.
 */
export function groundFloor(b: Building): Floor | null {
  const withRooms = [...b.floors.filter((f) => f.rooms.some((r) => r.points.length >= 3))].sort((p, q) => p.elevation - q.elevation);
  return withRooms.find((f) => f.elevation > -0.5) ?? withRooms[0] ?? b.floors[0] ?? null;
}

/**
 * The ground under a garden field: level, turned by the field's rotation; u and v are plan coordinates
 * along the turned axes, so the field's corner sits at u · (cos r, sin r) + v · (−sin r, cos r).
 */
export function groundFace(b: Building, f: Pick<SolarField, "u" | "v" | "rotation" | "base">): RoofFace {
  const r = ((f.rotation ?? 0) * Math.PI) / 180;
  const eu: V3 = [Math.cos(r), 0, Math.sin(r)];
  const es: V3 = [-Math.sin(r), 0, Math.cos(r)];
  const floor = groundFloor(b);
  const x = eu[0] * f.u + es[0] * f.v;
  const z = eu[2] * f.u + es[2] * f.v;
  // on a surface of its own height (a flat garage roof), else on the ground (a terrace raises it)
  const y = floor ? floor.elevation + (f.base != null ? f.base : outdoorGround(floor, x, z)) : (f.base ?? 0);
  return { key: GROUND, section: null, side: "top", flat: true, o: [0, y, 0], eu, es, n: [0, 1, 0], lu: 1e4, ls: 1e4, pitch: 0, span: () => [-1e4, 1e4], facing: [es[0], es[2]], unbounded: true };
}

/** The face a field lies on (a roof face, or the ground in the garden); null when its roof face is gone. */
export function fieldFace(b: Building, f: SolarField, faces: readonly RoofFace[] = roofFaces(b)): RoofFace | null {
  if (f.face === GROUND) return groundFace(b, f);
  if (f.face.startsWith("wall:")) return wallFaces(b, f.face.split(":")[1]).find((x) => x.key === f.face) ?? null;
  return faces.find((x) => x.key === f.face) ?? null;
}

/** A new wall field: on the longest wall towards the sun, one row of landscape modules at head height. */
export function proposeWallField(b: Building, id: string, floorId: string): SolarField | null {
  const faces = wallFaces(b, floorId);
  const north = b.settings.north ?? 0;
  const score = (f: RoofFace) => {
    const bearing = (Math.atan2(f.facing[0], -f.facing[1]) * 180) / Math.PI - north;
    return f.lu * (1.3 + Math.cos(((bearing - 180) * Math.PI) / 180));
  };
  const face = [...faces].sort((p, q) => score(q) - score(p))[0];
  if (!face) return null;
  const f = { ...proposeField(face, id), portrait: false, rows: 1 };
  f.cols = Math.max(1, Math.floor((face.lu - 0.8 + MODULE_GAP) / (MODULE_H + MODULE_GAP)));
  f.u = Math.round(((face.lu - (f.cols * MODULE_H + (f.cols - 1) * MODULE_GAP)) / 2) * 100) / 100;
  f.v = Math.round(Math.max(0, face.ls - MODULE_W - 0.3) * 100) / 100;
  return f;
}

/** A new garden field beside the house: two rows of four, tilted 25°, towards the south. */
export function proposeGroundField(b: Building, id: string): SolarField {
  const pts = b.floors.flatMap((fl) => fl.rooms.flatMap((r) => r.points));
  const x = pts.length ? Math.max(...pts.map((p) => p[0])) + 3 : 0;
  const z = pts.length ? Math.min(...pts.map((p) => p[1])) : 0;
  // rows run along x, the modules lean up towards -z: with north up in the plan they look south
  return { id, face: GROUND, u: Math.round(x * 100) / 100, v: Math.round(z * 100) / 100, rows: 2, cols: 4, portrait: true, tilt: 25, flip: true, rotation: (b.settings.north ?? 0) || 0, look: "black", entity: null };
}

/** The floor the single roof sits on: the highest with rooms (as the roof itself). */
export function topFloor(b: Building): Floor | null {
  const withRooms = b.floors.filter((f) => f.rooms.some((r) => r.points.length >= 3));
  return withRooms.sort((p, q) => q.elevation - p.elevation)[0] ?? null;
}

/** All roof faces modules can lie on. */
export function roofFaces(b: Building): RoofFace[] {
  const roof = b.settings.roof;
  if (!roof || roof.type === "none") return [];
  if (roof.type === "custom") return (roof.sections ?? []).flatMap((s) => sectionFaces(s, sectionOverhang(b, s, s.overhang ?? roof.overhang)));
  const floor = topFloor(b);
  if (!floor) return [];
  const xs = floor.rooms.flatMap((r) => r.points.map((p) => p[0]));
  const zs = floor.rooms.flatMap((r) => r.points.map((p) => p[1]));
  const m = b.settings.wall_exterior + roof.overhang;
  const x0 = Math.min(...xs) - m;
  const x1 = Math.max(...xs) + m;
  const z0 = Math.min(...zs) - m;
  const z1 = Math.max(...zs) + m;
  const top = floor.elevation + floor.height;
  if (roof.type === "flat") return [flatFace("main", null, x0, z0, x1, z1, top + FLAT_SLAB)];
  // gable, as built by the roof: the ridge along the longer side (or the shorter one)
  const longX = x1 - x0 >= z1 - z0;
  const alongX = roof.ridge === "short" ? !longX : longX;
  const half = (alongX ? z1 - z0 : x1 - x0) / 2;
  const rise = half * Math.tan(roof.pitch * DEG);
  const P = (u: number, v: number, y: number): V3 => (alongX ? [u, top + y, (z0 + z1) / 2 + v] : [(x0 + x1) / 2 + v, top + y, u]);
  const [u0, u1] = alongX ? [x0, x1] : [z0, z1];
  return ([-1, 1] as const).map((side) => slopeFace(`main:${side < 0 ? "a" : "b"}`, null, side < 0 ? "a" : "b", P(u0, side * half, 0), P(u1, side * half, 0), P(u0, 0, rise), roof.pitch, () => [0, u1 - u0]));
}

/**
 * The faces of a section as the roof draws them: with the overhang at the eaves and the gable ends (none
 * where the section meets a taller part of the house), so modules can reach down to the eave.
 */
function sectionFaces(s: RoofSection, ov: { u0: number; u1: number; a: number; b: number }): RoofFace[] {
  const fr = sectionFrame(s);
  const pr = sectionProfile(s);
  const P = (u: number, v: number, y: number): V3 => {
    const [x, z] = fr.at(u, v);
    return [x, y, z];
  };
  const oa = Math.max(0, ov.a);
  const ob = Math.max(0, ov.b);
  const U0 = fr.u0 - Math.max(0, ov.u0);
  const U1 = fr.u1 + Math.max(0, ov.u1);
  const lu = U1 - U0;
  if (s.shape === "flat" || s.shape === "parapet") {
    const a = fr.at(U0, -oa);
    const c = fr.at(U1, fr.w + ob);
    return [flatFace(s.id, s.id, Math.min(a[0], c[0]), Math.min(a[1], c[1]), Math.max(a[0], c[0]), Math.max(a[1], c[1]), s.eave_a + FLAT_SLAB)];
  }
  if (s.shape === "pent") return [slopeFace(`${s.id}:a`, s.id, "a", P(U0, -oa, pr.y(-oa)), P(U1, -oa, pr.y(-oa)), P(U0, fr.w + ob, pr.y(fr.w + ob)), s.pitch_a, () => [0, lu])];
  // a pyramid is a hip whose ridge has no length; half-hip and mansard place their modules like a gable
  const hip = s.shape === "hip" || s.shape === "pyramid";
  const d = s.shape === "pyramid" ? (fr.u1 - fr.u0) / 2 : hip ? Math.min((fr.u1 - fr.u0) / 2, Math.min(pr.vr, fr.w - pr.vr) || fr.w / 2) : 0;
  // a hip slope narrows from the full eave (with the overhang) to the ridge, which starts d in from the walls
  const in0 = hip ? fr.u0 + d - U0 : 0;
  const in1 = hip ? U1 - (fr.u1 - d) : 0;
  const out: RoofFace[] = [];
  if (pr.vr > 0.3) {
    const len = Math.hypot(pr.vr + oa, pr.rh - pr.y(-oa));
    out.push(slopeFace(`${s.id}:a`, s.id, "a", P(U0, -oa, pr.y(-oa)), P(U1, -oa, pr.y(-oa)), P(U0, pr.vr, pr.rh), s.pitch_a, (t) => [in0 * (t / len), lu - in1 * (t / len)]));
  }
  if (fr.w - pr.vr > 0.3) {
    const len = Math.hypot(fr.w + ob - pr.vr, pr.rh - pr.y(fr.w + ob));
    // side b: the eave at v = w + overhang, running the other way so the face looks outwards
    out.push(slopeFace(`${s.id}:b`, s.id, "b", P(U1, fr.w + ob, pr.y(fr.w + ob)), P(U0, fr.w + ob, pr.y(fr.w + ob)), P(U1, pr.vr, pr.rh), s.pitch_b, (t) => [in1 * (t / len), lu - in0 * (t / len)]));
  }
  // the hip ends: triangles from the end eave up to where the ridge starts (D134, D158)
  if (hip) {
    const ya = pr.y(-oa);
    const yb = pr.y(fr.w + ob);
    const ends: [string, "c" | "d", V3, V3, V3][] = [
      [`${s.id}:c`, "c", P(U0, fr.w + ob, yb), P(U0, -oa, ya), P(fr.u0 + d, pr.vr, pr.rh)],
      [`${s.id}:d`, "d", P(U1, -oa, ya), P(U1, fr.w + ob, yb), P(fr.u1 - d, pr.vr, pr.rh)],
    ];
    for (const [key, side, o, e, apex] of ends) {
      const face = triangleFace(key, s.id, side, o, e, apex);
      if (face) out.push(face);
    }
  }
  return out;
}

/**
 * A triangular roof face (a hip end): the eave from `o` to `eaveEnd`, rising to `apex`. The slope frame
 * is the plane's own (s at right angles to the eave), the usable span narrows linearly towards the apex.
 */
function triangleFace(key: string, section: string, side: "c" | "d", o: V3, eaveEnd: V3, apex: V3): RoofFace | null {
  const lu = len(sub(eaveEnd, o));
  if (lu < 0.3) return null;
  const eu = unit(sub(eaveEnd, o));
  const ra = sub(apex, o);
  const uf = ra[0] * eu[0] + ra[1] * eu[1] + ra[2] * eu[2];
  const up: V3 = [ra[0] - eu[0] * uf, ra[1] - eu[1] * uf, ra[2] - eu[2] * uf];
  const ls = len(up);
  if (ls < 0.3) return null;
  const es = unit(up);
  let n = unit(cross(eu, es));
  if (n[1] < 0) n = [-n[0], -n[1], -n[2]];
  const down = unit([-es[0], 0, -es[2]]);
  const pitch = Math.atan2(es[1], Math.hypot(es[0], es[2])) / DEG;
  const span = (t: number): [number, number] => {
    const k = Math.min(1, Math.max(0, t / ls));
    return [uf * k, lu - (lu - uf) * k];
  };
  return { key, section, side, flat: false, o, eu, es, n, lu, ls, pitch, span, facing: [down[0], down[2]] };
}

function slopeFace(key: string, section: string | null, side: "a" | "b", o: V3, eaveEnd: V3, ridge: V3, pitch: number, span: (s: number) => [number, number]): RoofFace {
  const eu = unit(sub(eaveEnd, o));
  const es = unit(sub(ridge, o));
  let n = unit(cross(eu, es));
  if (n[1] < 0) n = [-n[0], -n[1], -n[2]];
  const down = unit([-es[0], 0, -es[2]]);
  return { key, section, side, flat: false, o, eu, es, n, lu: len(sub(eaveEnd, o)), ls: len(sub(ridge, o)), pitch, span, facing: [down[0], down[2]] };
}

function flatFace(id: string, section: string | null, x0: number, z0: number, x1: number, z1: number, y: number): RoofFace {
  // u along the longer side; s across, towards +z (or +x)
  const alongX = x1 - x0 >= z1 - z0;
  const lu = alongX ? x1 - x0 : z1 - z0;
  const ls = alongX ? z1 - z0 : x1 - x0;
  return {
    key: `${id}:top`,
    section,
    side: "top",
    flat: true,
    o: [x0, y, z0],
    eu: alongX ? [1, 0, 0] : [0, 0, 1],
    es: alongX ? [0, 0, 1] : [1, 0, 0],
    n: [0, 1, 0],
    lu,
    ls,
    pitch: 0,
    span: () => [0, lu],
    facing: alongX ? [0, 1] : [1, 0],
  };
}

/** One module: its four corners (lower left, lower right, upper right, upper left) and, on a flat roof, its stand. */
export interface SolarModule {
  corners: [V3, V3, V3, V3];
  /** Flat roofs: the feet of the raised upper edge (posts from the roof up to the module). */
  posts: [V3, V3][];
  /** Its cell in the field ("row:column"), and whether it is left out (only listed when asked for). */
  cell: string;
  skipped: boolean;
}

/** Size of a module along the eave and up the slope. */
export function moduleSize(f: Pick<SolarField, "portrait" | "module_w" | "module_h">): [number, number] {
  const w = f.module_w || MODULE_W;
  const h = f.module_h || MODULE_H;
  return f.portrait === false ? [h, w] : [w, h];
}

/** Modules in each row: the layout (rows of their own length) or `cols` in every row. */
export function rowCounts(f: Pick<SolarField, "rows" | "cols" | "layout">): number[] {
  if (f.layout?.length) return f.layout.map((n) => Math.max(0, Math.min(60, Math.round(n))));
  return Array.from({ length: Math.max(1, f.rows) }, () => Math.max(1, f.cols));
}

/** Tilt of a field's modules in radians: frames on flat ground (15° by default), away from a wall (0 by default). */
function tiltOf(face: RoofFace, f: Pick<SolarField, "tilt">): number {
  if (face.flat) return Math.min(45, Math.max(0, f.tilt ?? 15)) * DEG;
  if (face.wall) return Math.min(90, Math.max(0, f.tilt ?? 0)) * DEG;
  return 0;
}

/** Width and depth of a field on its face (the longest row, all rows). */
export function fieldSize(face: RoofFace, f: SolarField): [number, number] {
  const [mw, mh] = moduleSize(f);
  const counts = rowCounts(f);
  const most = Math.max(1, ...counts);
  const rows = counts.length;
  const depth = (rows - 1) * rowPitch(face, f) + mh * Math.cos(tiltOf(face, f));
  return [most * mw + (most - 1) * MODULE_GAP, depth];
}

/** Rows a flat-roof field needs per row of modules (module depth plus the distance against shading). */
export function rowPitch(face: RoofFace, f: Pick<SolarField, "portrait" | "tilt" | "module_w" | "module_h">): number {
  const [, mh] = moduleSize(f);
  const t = tiltOf(face, f);
  // a wall: rows one above the other, as high as the tilted module reaches
  if (face.wall) return mh * Math.cos(t) + MODULE_GAP;
  if (!face.flat) return mh + MODULE_GAP;
  return mh * Math.cos(t) + Math.max(0.3, 2 * mh * Math.sin(t));
}

/**
 * The modules of a field on its face. Modules that would leave the face (a hip, the ridge) are left out,
 * as are the ones switched off; `withSkipped` lists the switched-off ones too (the editor shows them).
 */
export function fieldModules(face: RoofFace, f: SolarField, withSkipped = false): SolarModule[] {
  const [mw, mh] = moduleSize(f);
  const out: SolarModule[] = [];
  const t = tiltOf(face, f);
  const depth = mh * Math.cos(t);
  const pitch = rowPitch(face, f);
  const counts = rowCounts(f);
  const most = Math.max(1, ...counts);
  const skip = new Set(f.skip ?? []);
  const at = (u: number, s: number, up: number): V3 => [
    face.o[0] + face.eu[0] * u + face.es[0] * s + face.n[0] * up,
    face.o[1] + face.eu[1] * u + face.es[1] * s + face.n[1] * up,
    face.o[2] + face.eu[2] * u + face.es[2] * s + face.n[2] * up,
  ];
  const inside = (u: number, s: number) => {
    if (face.unbounded) return true;
    if (s < -1e-6 || s > face.ls + 1e-6) return false;
    const [a, b] = face.span(s);
    return u >= a - 1e-6 && u <= b + 1e-6;
  };
  counts.forEach((count, r) => {
    // a shorter row sits left, centred or right under the longest one
    const shift = f.align === "right" ? most - count : f.align === "center" ? (most - count) / 2 : 0;
    for (let c = 0; c < count; c++) {
      const cell = `${r}:${c}`;
      const skipped = skip.has(cell);
      if (skipped && !withSkipped) continue;
      const u0 = f.u + (c + shift) * (mw + MODULE_GAP);
      const s0 = f.v + r * pitch;
      const u1 = u0 + mw;
      const s1 = s0 + (face.flat || face.wall ? depth : mh);
      if (![[u0, s0], [u1, s0], [u1, s1], [u0, s1]].every(([u, s]) => inside(u, s))) continue;
      if (face.wall && t > 0.001) {
        // on a wall, tilted: the upper edge stands off the wall (flipped: the lower edge), on brackets
        const away = LIFT + mh * Math.sin(t);
        const [lo, hi] = f.flip ? [away, LIFT] : [LIFT, away];
        const corners: [V3, V3, V3, V3] = [at(u0, s0, lo), at(u1, s0, lo), at(u1, s1, hi), at(u0, s1, hi)];
        const edge = f.flip ? s0 : s1;
        const posts = [u0 + 0.05, u1 - 0.05].map((u) => [at(u, edge, 0), at(u, edge, away)] as [V3, V3]);
        out.push({ corners, posts, cell, skipped });
        continue;
      }
      if (!face.flat) {
        out.push({ corners: [at(u0, s0, LIFT), at(u1, s0, LIFT), at(u1, s1, LIFT), at(u0, s1, LIFT)], posts: [], cell, skipped });
        continue;
      }
      // flat roof: the module leans up towards +s (or towards -s when flipped), on a low frame
      const lo = 0.15;
      const hi = lo + mh * Math.sin(t);
      const [sl, sh] = f.flip ? [s1, s0] : [s0, s1];
      const corners: [V3, V3, V3, V3] = [at(u0, sl, lo), at(u1, sl, lo), at(u1, sh, hi), at(u0, sh, hi)];
      out.push({ corners, posts: [u0 + 0.05, u1 - 0.05].flatMap((u) => [[at(u, sl, 0), at(u, sl, lo)], [at(u, sh, 0), at(u, sh, hi)]] as [V3, V3][]), cell, skipped });
    }
  });
  return out;
}

/** Where a plan point lies on a face (u along the eave, s up the slope), or null when it is not on it. */
export function pointOnFace(face: RoofFace, p: Vec2): { u: number; s: number } | null {
  // solve p = o + eu * u + es * s in the plan (eu and es are not parallel in the plan)
  const a = [face.eu[0], face.eu[2]];
  const b = [face.es[0], face.es[2]];
  const d = [p[0] - face.o[0], p[1] - face.o[2]];
  const det = a[0] * b[1] - a[1] * b[0];
  if (Math.abs(det) < 1e-9) return null;
  const u = (d[0] * b[1] - d[1] * b[0]) / det;
  const s = (a[0] * d[1] - a[1] * d[0]) / det;
  if (s < 0 || s > face.ls) return null;
  const [lo, hi] = face.span(s);
  return u >= lo && u <= hi ? { u, s } : null;
}

/** The face under a plan point: the highest one there (an upper roof hides a lower one). */
export function faceAt(faces: readonly RoofFace[], p: Vec2): { face: RoofFace; u: number; s: number } | null {
  let best: { face: RoofFace; u: number; s: number; y: number } | null = null;
  for (const face of faces) {
    if (face.wall) {
      // a wall: the pointer just outside its face (up to 80 cm); the height stays as it is (s = NaN)
      const d = [p[0] - face.o[0], p[1] - face.o[2]];
      const u = d[0] * face.eu[0] + d[1] * face.eu[2];
      const out = d[0] * face.n[0] + d[1] * face.n[2];
      // right in front of the wall it wins over a roof overhang above; further out only where no roof is
      if (u >= 0 && u <= face.lu && out >= -0.05 && out <= 0.35) return { face, u, s: Number.NaN };
      if (u >= 0 && u <= face.lu && out > 0.35 && out <= 0.8 && !best) best = { face, u, s: Number.NaN, y: -Infinity };
      continue;
    }
    const hit = pointOnFace(face, p);
    if (!hit) continue;
    const y = face.o[1] + face.es[1] * hit.s;
    if (!best || y > best.y) best = { face, ...hit, y };
  }
  return best ? { face: best.face, u: best.u, s: best.s } : null;
}

/** A field kept on its face: its corner moved so the whole field stays on the face where it can. */
export function clampField(face: RoofFace, f: SolarField): { u: number; v: number } {
  if (face.unbounded) return { u: f.u, v: f.v };
  const [w, d] = fieldSize(face, f);
  // rounded down to centimetres, so a field pushed to the far edge still fits completely
  const r = (x: number) => Math.floor(x * 100 + 1e-6) / 100;
  return { u: r(Math.min(Math.max(0, f.u), Math.max(0, face.lu - w))), v: r(Math.min(Math.max(0, f.v), Math.max(0, face.ls - d))) };
}

/** Corners of every module of a field in the plan (for the editor). */
export function fieldPlan(face: RoofFace, f: SolarField): Vec2[][] {
  return fieldModules(face, f).map((m) => m.corners.map((p) => [p[0], p[2]] as Vec2));
}

/** A field that fits: as many modules as fit the face, centred along the eave, starting a little above it. */
export function proposeField(face: RoofFace, id: string): SolarField {
  const f: SolarField = { id, face: face.key, u: 0, v: 0, rows: 1, cols: 1, portrait: true, tilt: face.flat ? 15 : null, flip: false, entity: null, look: "black" };
  const [mw] = moduleSize(f);
  const margin = 0.4;
  const pitch = rowPitch(face, f);
  const [a, b] = face.span(face.ls / 2);
  f.cols = Math.max(1, Math.floor((b - a - 2 * margin + MODULE_GAP) / (mw + MODULE_GAP)));
  f.rows = Math.max(1, Math.min(4, Math.floor((face.ls - 2 * margin) / pitch)));
  // hip faces narrow towards the ridge: fewer columns until every module fits
  while (f.cols > 1 && fieldModules(face, { ...f, u: center(face, f), v: margin }).length < f.rows * f.cols) f.cols--;
  f.u = center(face, f);
  f.v = margin;
  return f;
}

function center(face: RoofFace, f: SolarField): number {
  const [mw] = moduleSize(f);
  const width = f.cols * mw + (f.cols - 1) * MODULE_GAP;
  return Math.round(((face.lu - width) / 2) * 100) / 100;
}

/** Compass direction of a face (N, NE, E …) with the plan's north (degrees clockwise from up). */
export function faceCompass(face: RoofFace, north: number): "n" | "ne" | "e" | "se" | "s" | "sw" | "w" | "nw" {
  // bearing of the facing direction in the plan, clockwise from up (-z), then turned by north
  const bearing = (Math.atan2(face.facing[0], -face.facing[1]) / DEG - north + 720) % 360;
  return (["n", "ne", "e", "se", "s", "sw", "w", "nw"] as const)[Math.round(bearing / 45) % 8];
}

/** The face that suits a new field best: towards the south, the larger the better. */
export function bestFace(faces: readonly RoofFace[], north: number): RoofFace | null {
  const score = (f: RoofFace) => {
    if (f.flat) return f.lu * f.ls * 0.8;
    const bearing = (Math.atan2(f.facing[0], -f.facing[1]) / DEG - north + 720) % 360;
    const south = Math.cos((bearing - 180) * DEG);
    return f.lu * f.ls * (1.2 + south);
  };
  return [...faces].sort((p, q) => score(q) - score(p))[0] ?? null;
}

function sub(a: V3, b: V3): V3 {
  return [a[0] - b[0], a[1] - b[1], a[2] - b[2]];
}
function len(a: V3): number {
  return Math.hypot(a[0], a[1], a[2]);
}
function unit(a: V3): V3 {
  const l = len(a) || 1;
  return [a[0] / l, a[1] / l, a[2] / l];
}
function cross(a: V3, b: V3): V3 {
  return [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
}

/** Default roof window size (a common 78 × 118 cm). */
export const ROOF_WINDOW_W = 0.78;
export const ROOF_WINDOW_H = 1.18;

/** A roof window seen as a field of one module of its size (so placing, moving and keeping it on the face work alike). */
export function windowAsField(w: RoofWindow): SolarField {
  return { id: w.id, face: w.face, u: w.u, v: w.v, rows: 1, cols: 1, portrait: true, module_w: w.w || ROOF_WINDOW_W, module_h: w.h || ROOF_WINDOW_H };
}

/** The four corners of a roof window, a little above the roof (lower left, lower right, upper right, upper left); null off the face. */
export function windowCorners(face: RoofFace, w: RoofWindow): [V3, V3, V3, V3] | null {
  const m = fieldModules(face, windowAsField(w))[0];
  if (!m) return null;
  // the modules ride 7 cm above the roof on rails; a roof window sits nearly flush
  const down = (p: V3): V3 => [p[0] - face.n[0] * 0.05, p[1] - face.n[1] * 0.05, p[2] - face.n[2] * 0.05];
  return [down(m.corners[0]), down(m.corners[1]), down(m.corners[2]), down(m.corners[3])];
}

/** A new roof window in the middle of a face, at about head height above the floor below. */
export function proposeWindow(face: RoofFace, id: string): RoofWindow {
  const w = ROOF_WINDOW_W;
  const h = ROOF_WINDOW_H;
  const [a, b] = face.span(face.ls / 2);
  return { id, face: face.key, u: Math.round(((a + b - w) / 2) * 100) / 100, v: Math.round(Math.max(0, Math.min(face.ls - h, face.ls * 0.45 - h / 2)) * 100) / 100, w: null, h: null, cover: null, contact: null, tilt: null };
}

/**
 * A garden field turned to a new rotation about its middle: u and v are measured along the turned axes, so
 * they are worked out again from the field's centre in the plan (otherwise the field would jump away).
 */
export function turnGroundField(b: Building, f: SolarField, rotation: number): { u: number; v: number; rotation: number } {
  const face = groundFace(b, f);
  const [w, d] = fieldSize(face, f);
  const cx = face.eu[0] * (f.u + w / 2) + face.es[0] * (f.v + d / 2);
  const cz = face.eu[2] * (f.u + w / 2) + face.es[2] * (f.v + d / 2);
  const r = (rotation * Math.PI) / 180;
  const eu = [Math.cos(r), Math.sin(r)];
  const es = [-Math.sin(r), Math.cos(r)];
  // the centre stays: the corner is half the size back along the new axes
  const u = cx * eu[0] + cz * eu[1] - w / 2;
  const v = cx * es[0] + cz * es[1] - d / 2;
  const round = (x: number) => Math.round(x * 100) / 100;
  return { u: round(u), v: round(v), rotation: ((Math.round(rotation) % 360) + 360) % 360 };
}

/** Middle of a field in the plan. */
export function fieldCenter(face: RoofFace, f: SolarField): Vec2 {
  const [w, d] = fieldSize(face, f);
  return [face.o[0] + face.eu[0] * (f.u + w / 2) + face.es[0] * (f.v + d / 2), face.o[2] + face.eu[2] * (f.u + w / 2) + face.es[2] * (f.v + d / 2)];
}

/** Where a ray (origin o, direction d, building coordinates) meets a face: distance t and the face coordinates. */
export function rayOnFace(face: RoofFace, o: V3, d: V3): { t: number; u: number; s: number } | null {
  const denom = d[0] * face.n[0] + d[1] * face.n[1] + d[2] * face.n[2];
  if (Math.abs(denom) < 1e-6) return null;
  const t = ((face.o[0] - o[0]) * face.n[0] + (face.o[1] - o[1]) * face.n[1] + (face.o[2] - o[2]) * face.n[2]) / denom;
  if (t <= 0) return null;
  const p: V3 = [o[0] + d[0] * t - face.o[0], o[1] + d[1] * t - face.o[1], o[2] + d[2] * t - face.o[2]];
  const u = p[0] * face.eu[0] + p[1] * face.eu[1] + p[2] * face.eu[2];
  const s = p[0] * face.es[0] + p[1] * face.es[1] + p[2] * face.es[2];
  return { t, u, s };
}

/** Whether a point on a face (u, s) lies on the face itself (inside its edges; the ground has none). */
export function onFace(face: RoofFace, u: number, s: number): boolean {
  if (face.unbounded) return true;
  if (s < 0 || s > face.ls) return false;
  const [a, b] = face.span(s);
  return u >= a && u <= b;
}

/** Whether a point on a face (u, s) lies on one of the field's modules (by their outline on the face). */
export function onField(face: RoofFace, f: SolarField, u: number, s: number): boolean {
  for (const m of fieldModules(face, f)) {
    const us = m.corners.map((p) => {
      const q = [p[0] - face.o[0], p[1] - face.o[1], p[2] - face.o[2]];
      return [q[0] * face.eu[0] + q[1] * face.eu[1] + q[2] * face.eu[2], q[0] * face.es[0] + q[1] * face.es[1] + q[2] * face.es[2]];
    });
    const [u0, u1] = [Math.min(...us.map((x) => x[0])), Math.max(...us.map((x) => x[0]))];
    const [s0, s1] = [Math.min(...us.map((x) => x[1])), Math.max(...us.map((x) => x[1]))];
    if (u >= u0 - 0.05 && u <= u1 + 0.05 && s >= s0 - 0.05 && s <= s1 + 0.05) return true;
  }
  return false;
}
