// The roof: either one roof over the top floor (flat or gable, over the bounding box of its rooms plus
// the outer walls and the overhang), or roof sections (wings of an L- or T-shaped house, a barn with a
// catslide, a lean-to …) at their own heights. Drawn in the house view only; the viewer lifts and fades
// it out when the camera zooms in.

import { Color } from "three";
import type { Building, Floor, RoofSection, SolarField, Vec2 } from "../model.ts";
import { polygonArea } from "../model.ts";
import { coversIn, cutHole, cutUnder, lineOutside, meetLine, sectionCovers, sectionFloor, sectionsCut, dormerHoles, dormerParent, effectiveDormer, turnedDormer, offsetPolygon, sectionGeometry, sectionHeightAt, sectionPolygon, sectionFrame, sectionOverhang, sectionProfile, sectionUV, wingJunction, wingSection, type LocalCover, type Q, type SectionOverhang } from "../roof-sections.ts";
import { DEG, GeoBuffer, LineBuffer, pushPrism, shade } from "./geo.ts";
import { fieldModules, roofFaces, roofFootprint, roofWindowRoom, windowCorners, type RoofFace } from "../solar.ts";
import { palette } from "./palette.ts";

/** Colours of the parts: neon, or natural materials while a homely style is on. */
const RF = palette({ ROOF: 0x1a2338, ROOF_TOP: 0x222d48, GABLE: 0x141d31 }, { ROOF: 0x55595f, ROOF_TOP: 0x63686f, GABLE: 0xebe7e0 });

const RIDGE = shade(0x37e0ff, 0.9);
const EAVE = shade(0x5b7cff, 0.45);
const THICK = 0.14;
/** Canopy: see-through panels and a light frame of posts and beams. */
const GLASS = 0x8fd8ff;
const FRAME = 0xc9d3e6;
const FRAME_TOP = 0xe3e9f5;
/** Solar modules: full black (glass, frame, barely visible cells) or the classic blue look. */
const PANEL_LOOKS = {
  black: { glass: new Color(0x05070b), edge: shade(0x8a96b0, 0.32), cells: shade(0x2a3550, 0.22) },
  blue: { glass: new Color(0x15295a), edge: shade(0x9fb8ff, 0.55), cells: shade(0x3d6cff, 0.35) },
};
const PANEL_POST = shade(0xc9d3e6, 0.5);
/** Roof windows: a light frame, glass, the blind. */
const WINDOW_FRAME = shade(0xc9d3e6, 0.85);
/** The frame of an open or tilted roof window glows warm, like a wall window does. */
const WINDOW_WARM = shade(0xffb347, 0.95);
const WINDOW_GLASS = new Color(0x2b6b8f);
const WINDOW_BLIND = new Color(0x1a2742);
/** The faint cyan edge of each slat (like the blind texture of the windows in the walls). */
const WINDOW_SLAT = new Color(0x37e0ff).multiplyScalar(0.35);
/** The frame's sides between the roof and the sash: they close the gap a low view looked through (#490). */
const WINDOW_CURB = new Color(0x4a566f);

/** Live state of a roof window: how far its sash is open (1 = open, tilt counts less) and how far its blind is down. */
export interface RoofWindowState {
  open: number;
  tilt: number;
  cover: number;
}

/** Roof geometry that sits on a floor: y = 0 is `base` above the floor's own level. */
export interface RoofGeometry {
  floor: Floor;
  base: number;
  solid: GeoBuffer;
  lines: LineBuffer;
  /** See-through roof panels of canopies (drawn with their own, fainter material). */
  glass: GeoBuffer;
  /** Roof sections in this part (sections roof only). */
  sections?: string[];
  /** False for canopies: they stand on posts on their floor and do not lift off with the roof when the floors are pulled apart. */
  lift?: boolean;
  /**
   * The roof windows of this part, apart from the roof: they stay when the roof fades out over a room, so the
   * room shows its windows in the slope, open or shut, the blind down or up (#482).
   */
  win?: { solid: GeoBuffer; lines: LineBuffer; glass: GeoBuffer };
  /** The roof windows that only show in the roof: they fade out with it (the default). */
  winRoof?: { solid: GeoBuffer; lines: LineBuffer; glass: GeoBuffer };
  /**
   * Floating roof windows over a room of a LOWER floor (a slope reaching down over it, #482): they belong to that
   * floor and show with it, in its own heights (its floor at 0).
   */
  winBelow?: Map<string, { floor: Floor; solid: GeoBuffer; lines: LineBuffer; glass: GeoBuffer }>;
}

/** The floor the roof sits on: the highest one with rooms. */
export function roofFloor(b: Building): Floor | null {
  const withRooms = b.floors.filter((f) => f.rooms.some((r) => r.points.length >= 3));
  return withRooms.sort((p, q) => q.elevation - p.elevation)[0] ?? null;
}

/** The roof, in parts per floor (each part moves with its floor when the floors are pulled apart). */
export function buildRoof(b: Building, windows: ReadonlyMap<string, RoofWindowState> = new Map()): RoofGeometry[] {
  const roof = b.settings.roof;
  const one = roof?.type === "custom" ? null : buildSingleRoof(b);
  const parts = roof?.type === "custom" ? buildSections(b, roof.sections ?? [], roof.overhang) : one ? [one] : [];
  pushSolar(b, parts);
  pushRoofWindows(b, parts, windows);
  return parts;
}

/** Roof windows: frame and glass in the slope; the sash swings out at the top when open, the blind comes down. */
function pushRoofWindows(b: Building, parts: RoofGeometry[], states: ReadonlyMap<string, RoofWindowState>): void {
  const windows = b.settings.roof?.windows ?? [];
  if (!windows.length || !parts.length) return;
  const faces = new Map(roofFaces(b).map((f) => [f.key, f]));
  for (const w of windows) {
    const face = faces.get(w.face);
    const corners = face ? windowCorners(face, w) : null;
    if (!face || !corners) continue;
    const part = face.section ? parts.find((p) => p.sections?.includes(face.section!)) : parts[0];
    if (!part) continue;
    // a floating window stays over its room when the roof fades: over a room of the roof's own floor it rides with
    // the roof's part; over a room of a lower floor (the slope reaches down over it) it belongs to that floor and
    // shows with it – riding with the roof's floor it would hang in the air when only the lower floor shows (#482)
    const room = w.float ? roofWindowRoom(b, face, w) : null;
    const below = room && room.floor.id !== part.floor.id && room.floor.elevation < part.floor.elevation ? room.floor : null;
    const dy = below ? below.elevation : part.floor.elevation + part.base;
    const L = (p: number[]): number[] => [p[0], p[1] - dy, p[2]];
    const [a, c, d, e] = corners.map(L);
    const st = states.get(w.id) ?? { open: 0, tilt: 0, cover: 0 };
    const float = !!room && (below !== null || room.floor.id === part.floor.id);
    const win = below
      ? ((part.winBelow ??= new Map()).get(below.id) ?? part.winBelow.set(below.id, { floor: below, solid: new GeoBuffer(), lines: new LineBuffer(), glass: new GeoBuffer() }).get(below.id)!)
      : float
        ? (part.win ??= { solid: new GeoBuffer(), lines: new LineBuffer(), glass: new GeoBuffer() })
        : (part.winRoof ??= { solid: new GeoBuffer(), lines: new LineBuffer(), glass: new GeoBuffer() });
    const up = (p: number[], k: number) => [p[0] + face.n[0] * k, p[1] + face.n[1] * k, p[2] + face.n[2] * k];
    const mix = (p: number[], q: number[], t: number) => [p[0] + (q[0] - p[0]) * t, p[1] + (q[1] - p[1]) * t, p[2] + (q[2] - p[2]) * t];
    // the fixed frame in the roof; it glows warm while the window is open or tilted
    const frame = st.open > 0.02 || st.tilt > 0.02 ? WINDOW_WARM : WINDOW_FRAME;
    const ring = [a, c, d, e].map((p) => up(p, 0.06));
    const foot = [a, c, d, e].map((p) => up(p, -0.02));
    for (let i = 0; i < 4; i++) {
      win.lines.seg(ring[i], ring[(i + 1) % 4], frame);
      // the curb: from just below the roof's surface up to the frame, all round
      const j = (i + 1) % 4;
      win.solid.tri(foot[i], foot[j], ring[j], WINDOW_CURB);
      win.solid.tri(foot[i], ring[j], ring[i], WINDOW_CURB);
    }
    // the sash, hinged at the top: its lower edge swings out along the normal (open up to 30°, as far
    // as a motor reports; tilted 12°)
    const angle = (st.open > 0.02 ? 30 * Math.min(1, st.open) : st.tilt > 0.5 ? 12 : 0) * DEG;
    const h = Math.hypot(d[0] - c[0], d[1] - c[1], d[2] - c[2]);
    const swing = (top: number[]) => {
      const es = face.es;
      return [top[0] - es[0] * h * Math.cos(angle) + face.n[0] * h * Math.sin(angle), top[1] - es[1] * h * Math.cos(angle) + face.n[1] * h * Math.sin(angle), top[2] - es[2] * h * Math.cos(angle) + face.n[2] * h * Math.sin(angle)];
    };
    const top0 = up(e, 0.065);
    const top1 = up(d, 0.065);
    const bot0 = swing(top0);
    const bot1 = swing(top1);
    // see-through glass like a window in a wall (#598): only a shut blind closes it
    win.glass.tri(bot0, bot1, top1, WINDOW_GLASS);
    win.glass.tri(bot0, top1, top0, WINDOW_GLASS);
    for (const [p, q] of [[bot0, bot1], [bot1, top1], [top1, top0], [top0, bot0]]) win.lines.seg(p, q, frame);
    // the blind comes down from the top over the sash
    if (st.cover > 0.02) {
      const k = Math.min(1, st.cover);
      const b0 = up(mix(top0, bot0, k), 0.01);
      const b1 = up(mix(top1, bot1, k), 0.01);
      const t0 = up(top0, 0.01);
      const t1 = up(top1, 0.01);
      win.solid.tri(b0, b1, t1, WINDOW_BLIND);
      win.solid.tri(b0, t1, t0, WINDOW_BLIND);
      // its slats across, like the blinds of the windows in the walls (#598)
      const slats = Math.max(1, Math.round((h * k) / 0.05));
      for (let i = 1; i <= slats; i++) {
        const t = i / slats;
        win.lines.seg(up(mix(t0, b0, t), 0.004), up(mix(t1, b1, t), 0.004), WINDOW_SLAT);
      }
    }
  }
}

/** Solar fields on the roof: every module on its face, in the coordinates of the roof part the face belongs to. */
function pushSolar(b: Building, parts: RoofGeometry[]): void {
  const fields = b.settings.roof?.solar ?? [];
  if (!fields.length || !parts.length) return;
  const faces = new Map(roofFaces(b).map((f) => [f.key, f]));
  for (const field of fields) {
    const face = faces.get(field.face);
    if (!face) continue;
    const part = face.section ? parts.find((p) => p.sections?.includes(face.section!)) : parts[0];
    // faces have heights above the ground; parts count from their floor's level plus their base
    if (part) pushModules(part.solid, part.lines, face, field, part.floor.elevation + part.base);
  }
}

/** The modules of a field (glass, frame, cell grid, frames on flat ground), lowered by `dy` into local coordinates. */
export function pushModules(solid: GeoBuffer, lines: LineBuffer, face: RoofFace, field: SolarField, dy: number): void {
  const L = (p: number[]): number[] => [p[0], p[1] - dy, p[2]];
  const look = PANEL_LOOKS[field.look === "blue" ? "blue" : "black"];
  const cu = field.portrait === false ? 10 : 6;
  const cv = field.portrait === false ? 6 : 10;
  for (const m of fieldModules(face, field)) {
    const [a, c, d, e] = m.corners.map(L);
    // both sides: on a floor (garden, walls) only front faces are drawn, and a module leans either way
    solid.tri(a, c, d, look.glass);
    solid.tri(a, d, e, look.glass);
    solid.tri(a, d, c, look.glass);
    solid.tri(a, e, d, look.glass);
    // the frame a hair above the glass, and the cell grid
    const up = (p: number[], k = 0.004) => [p[0] + face.n[0] * k, p[1] + face.n[1] * k, p[2] + face.n[2] * k];
    const mix = (p: number[], q: number[], t: number) => [p[0] + (q[0] - p[0]) * t, p[1] + (q[1] - p[1]) * t, p[2] + (q[2] - p[2]) * t];
    const ring = [a, c, d, e].map((p) => up(p));
    for (let i = 0; i < 4; i++) lines.seg(ring[i], ring[(i + 1) % 4], look.edge);
    for (let i = 1; i < cu; i++) lines.seg(up(mix(a, c, i / cu)), up(mix(e, d, i / cu)), look.cells);
    for (let j = 1; j < cv; j++) lines.seg(up(mix(a, e, j / cv)), up(mix(c, d, j / cv)), look.cells);
    for (const [p, q] of m.posts) lines.seg(L(p), L(q), PANEL_POST);
  }
}

/** One roof over the top floor, in floor coordinates with y = 0 at the top of the floor's walls. */
function buildSingleRoof(b: Building): RoofGeometry | null {
  const roof = b.settings.roof;
  const floor = roofFloor(b);
  if (!floor || !roof || roof.type === "none" || roof.type === "custom") return null;
  const [fx0, fz0, fx1, fz1] = roofFootprint(b, floor);
  const m = b.settings.wall_exterior + roof.overhang;
  const x0 = fx0 - m;
  const x1 = fx1 + m;
  const z0 = fz0 - m;
  const z1 = fz1 + m;
  const solid = new GeoBuffer();
  const lines = new LineBuffer();
  if (roof.type === "flat") {
    pushPrism(solid, [[x0, z0], [x1, z0], [x1, z1], [x0, z1]], 0, 0.25, RF.ROOF, RF.ROOF_TOP, { bottom: true });
    const e = 0.252;
    for (const [a, c] of [
      [[x0, z0], [x1, z0]],
      [[x1, z0], [x1, z1]],
      [[x1, z1], [x0, z1]],
      [[x0, z1], [x0, z0]],
    ]) {
      lines.seg([a[0], e, a[1]], [c[0], e, c[1]], RIDGE);
      lines.seg([a[0], 0, a[1]], [c[0], 0, c[1]], EAVE);
    }
    return { floor, base: floor.height, solid, lines, glass: new GeoBuffer() };
  }
  // gable: the ridge runs along the longer side, or along the shorter one (terraced houses)
  const longX = x1 - x0 >= z1 - z0;
  const alongX = roof.ridge === "short" ? !longX : longX;
  const half = (alongX ? z1 - z0 : x1 - x0) / 2;
  const rise = half * Math.tan(roof.pitch * DEG);
  // coordinates: u along the ridge, v across (from -half to +half)
  const P = (u: number, v: number, y: number): number[] => (alongX ? [u, y, (z0 + z1) / 2 + v] : [(x0 + x1) / 2 + v, y, u]);
  const [u0, u1] = alongX ? [x0, x1] : [z0, z1];
  const top = new Color(RF.ROOF_TOP);
  const under = new Color(RF.ROOF);
  const quad = (a: number[], b2: number[], c: number[], d: number[], col: Color) => {
    solid.tri(a, b2, c, col);
    solid.tri(a, c, d, col);
  };
  for (const side of [-1, 1]) {
    // upper and lower face of the slope, and the eave and rake faces of its thickness
    quad(P(u0, side * half, 0), P(u1, side * half, 0), P(u1, 0, rise), P(u0, 0, rise), top);
    quad(P(u0, side * half, -THICK), P(u0, 0, rise - THICK), P(u1, 0, rise - THICK), P(u1, side * half, -THICK), under);
    quad(P(u0, side * half, -THICK), P(u1, side * half, -THICK), P(u1, side * half, 0), P(u0, side * half, 0), under);
    for (const u of [u0, u1]) quad(P(u, side * half, -THICK), P(u, side * half, 0), P(u, 0, rise), P(u, 0, rise - THICK), under);
    lines.seg(P(u0, side * half, 0), P(u1, side * half, 0), EAVE);
    for (const u of [u0, u1]) lines.seg(P(u, side * half, 0), P(u, 0, rise), EAVE);
  }
  // gable walls above the outer walls (set back by the overhang)
  const inset = roof.overhang;
  const g = new Color(RF.GABLE);
  const hw = half - inset;
  const rw = hw * Math.tan(roof.pitch * DEG);
  for (const u of [u0 + inset, u1 - inset]) {
    solid.tri(P(u, -hw, -THICK), P(u, hw, -THICK), P(u, 0, rw - THICK), g);
    solid.tri(P(u, hw, -THICK), P(u, -hw, -THICK), P(u, 0, rw - THICK), g);
  }
  lines.seg(P(u0, 0, rise + 0.004), P(u1, 0, rise + 0.004), RIDGE);
  return { floor, base: floor.height, solid, lines, glass: new GeoBuffer() };
}

/** Roof sections, grouped by the floor whose wall tops are nearest below each section's base. */
function buildSections(b: Building, sections: readonly RoofSection[], overhang: number): RoofGeometry[] {
  const floors = b.floors.filter((f) => f.rooms.length > 0).sort((p, q) => p.elevation - q.elevation);
  if (!floors.length) return [];
  const parts = new Map<string, RoofGeometry>();
  const faceMap = new Map(roofFaces(b).map((f) => [f.key, f]));
  const usable = sections.filter((sec) => Math.abs(sec.x1 - sec.x0) >= 0.1 && Math.abs(sec.z1 - sec.z0) >= 0.1);
  // what each section draws: a dormer only as deep as its ridge meets the slope, a wing running into another
  // roof on to that roof's ridge line without an overhang there (#605) – the other roof's planes cut it off
  const plans = new Map(
    usable.map((sec) => {
      const parent = dormerParent(sections, sec);
      const junction = parent ? null : wingJunction(sections, sec);
      // a turned cross gable keeps its whole length: its roof cuts it where it runs under the slope
      const drawn = parent ? (turnedDormer(sections, sec) ? sec : effectiveDormer(parent, sec)) : junction ? wingSection(sec, junction) : sec;
      const own = sectionOverhang(b, parent ? drawn : sec, drawn.overhang ?? overhang);
      const ov: SectionOverhang = junction ? { ...own, [junction.end === 0 ? "u0" : "u1"]: 0 } : own;
      const sloped = !drawn.open && drawn.shape !== "flat" && drawn.shape !== "parapet";
      return [sec, { parent, junction, drawn, ov, covers: sloped ? sectionCovers(drawn, sectionGeometry(drawn, ov).faces) : [] }] as const;
    }),
  );
  for (const sec of usable) {
    const plan = plans.get(sec)!;
    // the floor the section sits on: the highest one that starts below its walls' top
    const floor = sectionFloor(b, sec) ?? floors[0];
    // canopies get a part of their own: it rides with the floor but never lifts off like a roof
    const key = sec.open ? `${floor.id}:open` : floor.id;
    let part = parts.get(key);
    if (!part) parts.set(key, (part = { floor, base: 0, solid: new GeoBuffer(), lines: new LineBuffer(), glass: new GeoBuffer(), sections: [], lift: !sec.open }));
    part.sections!.push(sec.id);
    // an attic: the floor's walls rise above the section's base, so they end under the slopes
    // themselves (knee walls, gables) and the roof draws none of its own; a dormer keeps its cheeks
    // a dormer or a cross gable (a smaller section on a bigger one) keeps its cheeks and front gable
    const parent = plan.parent;
    const attic = floor.elevation + floor.height > sec.base + 0.05 && !sec.dormer && !parent;
    // the slope opens under every dormer and cross gable sitting on this section, and under its roof windows
    // (a turned one cuts the slope by its planes instead, see sectionsCut)
    const holes = sections.filter((d) => d !== sec && dormerParent(sections, d) === sec && !turnedDormer(sections, d)).flatMap((d) => dormerHoles(sec, d));
    for (const w of b.settings.roof.windows ?? []) {
      const face = faceMap.get(w.face);
      const corners = face && face.section === sec.id ? windowCorners(face, w) : null;
      if (!corners) continue;
      const uv = corners.map((p) => sectionUV(sec, p[0], p[2]));
      holes.push({ u0: Math.min(...uv.map((q) => q[0])), u1: Math.max(...uv.map((q) => q[0])), v0: Math.min(...uv.map((q) => q[1])), v1: Math.max(...uv.map((q) => q[1])) });
    }
    // a dormer's rear runs into the slope: no gable there, only at its front (the lower end of the slope)
    // a dormer only as deep as its ridge needs to meet the slope
    const drawn = plan.drawn;
    // a wing has no gable where it runs into the other roof
    let frontEnd: 0 | 1 | null = plan.junction ? ((1 - plan.junction.end) as 0 | 1) : null;
    if (parent) {
      const fr = sectionFrame(drawn);
      const pg = sectionGeometry(parent, { u0: 0, u1: 0, a: 0, b: 0 });
      const h = (u: number) => {
        const [x, z] = fr.at(u, fr.w / 2);
        const [pu, pv] = sectionUV(parent, x, z);
        return sectionHeightAt(pg, pu, pv) ?? sectionProfile(parent).y(pv);
      };
      frontEnd = h(fr.u0) <= h(fr.u1) ? 0 : 1;
    }
    // where sections overlap, each keeps only what shows above the others (#466, #605); the line where two
    // roofs meet is drawn once, by the first of the two
    const others = usable.filter((q) => sectionsCut(sections, sec, q));
    const cut: SectionCut | null = others.length
      ? {
          covers: coversIn(drawn, others.flatMap((q) => plans.get(q)!.covers)),
          lines: coversIn(drawn, others.filter((q) => usable.indexOf(q) > usable.indexOf(sec)).flatMap((q) => plans.get(q)!.covers)),
          wallU: plan.junction ? [sectionFrame(sec).u0, sectionFrame(sec).u1] : null,
        }
      : null;
    pushSection(part.solid, part.lines, drawn, plan.ov, floor.elevation, part.glass, attic, holes, frontEnd, cut);
  }
  // the closed roofs first: the first part is the one the main roof's solar fields belong to
  return [...parts.values()].sort((p, q) => Number(p.lift === false) - Number(q.lift === false));
}

/** Other sections over this one (in its frame): its planes end where they go under them (#466, #605). */
export interface SectionCut {
  covers: LocalCover[];
  /** The covers whose meeting line (a valley) this section draws. */
  lines: LocalCover[];
  /** A wing: its walls stay within its own length (u0, u1), not on into the roof it runs into. */
  wallU: [number, number] | null;
}

/**
 * One section: its slopes with their thickness and rim, the ridge (and hips), and the walls from the
 * section's base up under the roof (gable ends and knee walls). `yOff` is the level of its floor.
 */
export function pushSection(
  solid: GeoBuffer,
  lines: LineBuffer,
  s: RoofSection,
  overhang: SectionOverhang | number,
  yOff: number,
  glass: GeoBuffer = solid,
  attic = false,
  holes: { u0: number; u1: number; v0: number; v1: number }[] = [],
  /** A dormer: its gable only at this end (0 = u0, 1 = u1); null for an ordinary section. */
  frontEnd: 0 | 1 | null = null,
  cut: SectionCut | null = null,
): void {
  const fr = sectionFrame(s);
  const pr = sectionProfile(s);
  const ov = typeof overhang === "number" ? { u0: overhang, u1: overhang, a: overhang, b: overhang } : overhang;
  const oa = Math.max(0, ov.a);
  const ob = Math.max(0, ov.b);
  const w = fr.w;
  const U0 = fr.u0 - Math.max(0, ov.u0);
  const U1 = fr.u1 + Math.max(0, ov.u1);
  const P = (u: number, v: number, y: number): number[] => {
    const [x, z] = fr.at(u, v);
    return [x, y - yOff, z];
  };
  const top = new Color(RF.ROOF_TOP);
  const under = new Color(RF.ROOF);
  const g = new Color(RF.GABLE);
  const fan = (pts: number[][], col: Color) => {
    for (let i = 1; i + 1 < pts.length; i++) solid.tri(pts[0], pts[i], pts[i + 1], col);
  };
  // the roof planes as polygons in (u, v, height), the rim and the ridge lines; a flat roof is a slab
  let faces: Q[][] = [];
  let rim: Q[] = [];
  let ridges: [Q, Q][] = [];
  let gableProfiles: [[number, number][] | null, [number, number][] | null] = [null, null];
  const meets: [Q, Q][] = [];
  if (s.shape === "flat" || s.shape === "parapet") {
    const y = s.eave_a;
    const parapet = s.shape === "parapet";
    // a free shape takes its polygon (grown by the overhang), a plain section its rectangle; a parapet roof has no overhang
    const poly =
      s.points && s.points.length >= 3
        ? sectionPolygon(s, parapet ? 0 : Math.max(0, Math.min(ov.a, ov.b, ov.u0, ov.u1)))
        : parapet
          ? [fr.at(fr.u0, 0), fr.at(fr.u1, 0), fr.at(fr.u1, w), fr.at(fr.u0, w)]
          : [fr.at(U0, -oa), fr.at(U1, -oa), fr.at(U1, w + ob), fr.at(U0, w + ob)];
    pushPrism(solid, poly, y - yOff, y - yOff + 0.25, RF.ROOF, RF.ROOF_TOP, { bottom: true });
    for (let i = 0; i < poly.length; i++) {
      const a = poly[i];
      const c = poly[(i + 1) % poly.length];
      lines.seg([a[0], y - yOff + 0.252, a[1]], [c[0], y - yOff + 0.252, c[1]], RIDGE);
      lines.seg([a[0], y - yOff, a[1]], [c[0], y - yOff, c[1]], EAVE);
    }
    if (parapet) {
      // the parapet: a 0.4 m wall ring along the edge, 0.2 m thick, on the slab
      const ccw = (p: Vec2[]) => (polygonArea(p) >= 0 ? p : [...p].reverse());
      const outer = ccw(poly);
      const inner = offsetPolygon(outer, -0.2);
      const n = outer.length;
      for (let i = 0; i < n; i++) {
        const strip = ccw([outer[i], outer[(i + 1) % n], inner[(i + 1) % n], inner[i]]);
        pushPrism(solid, strip, y - yOff + 0.25, y - yOff + 0.65, RF.ROOF, RF.ROOF_TOP);
        lines.seg([outer[i][0], y - yOff + 0.652, outer[i][1]], [outer[(i + 1) % n][0], y - yOff + 0.652, outer[(i + 1) % n][1]], RIDGE);
        lines.seg([inner[i][0], y - yOff + 0.652, inner[i][1]], [inner[(i + 1) % n][0], y - yOff + 0.652, inner[(i + 1) % n][1]], RIDGE);
      }
    }
  } else {
    const geom = sectionGeometry(s, ov);
    faces = geom.faces;
    // dormers: the slope opens under them (a plane with a hole becomes pieces around it)
    for (const h of holes) faces = faces.flatMap((f) => cutHole(f, h));
    rim = geom.rim;
    ridges = geom.ridges;
    gableProfiles = geom.gables;
    if (cut) {
      // where this roof runs into another one: the line where they meet, then only what shows above the other
      for (const f of faces)
        for (const c of cut.lines) {
          const m = meetLine(f, c.poly);
          if (m) for (const [p, q] of lineOutside(m[0], m[1], cut.covers.filter((x) => x !== c))) meets.push([p, q]);
        }
      faces = faces.flatMap((f) => cutUnder(f, cut.covers));
    }
  }
  // a canopy has thin see-through panels; a closed roof its tiles with their thickness below
  const open = !!s.open;
  const pane = new Color(GLASS);
  for (const f of faces) {
    if (open) {
      for (let i = 1; i + 1 < f.length; i++) glass.tri(P(f[0][0], f[0][1], f[0][2]), P(f[i][0], f[i][1], f[i][2]), P(f[i + 1][0], f[i + 1][1], f[i + 1][2]), pane);
      continue;
    }
    fan(f.map(([u, v, y]) => P(u, v, y)), top);
    fan(f.map(([u, v, y]) => P(u, v, y - THICK)), under);
  }
  // the rim: eaves and rakes with the roof's thickness
  // (only where it is not under another section)
  const outside = (p: Q, q: Q): [Q, Q][] => (cut ? lineOutside(p, q, cut.covers) : [[p, q]]);
  for (let i = 0; i < rim.length; i++) {
    for (const [[ua, va, ya], [ub, vb, yb]] of outside(rim[i], rim[(i + 1) % rim.length])) {
      if (!open) fan([P(ua, va, ya), P(ub, vb, yb), P(ub, vb, yb - THICK), P(ua, va, ya - THICK)], under);
      lines.seg(P(ua, va, ya), P(ub, vb, yb), open ? RIDGE : EAVE);
    }
  }
  if (open) {
    pushCanopyFrame(solid, lines, fr, pr, ov, P, yOff);
    return;
  }
  for (const [p, q] of ridges) for (const [[ua, va, ya], [ub, vb, yb]] of outside(p, q)) lines.seg(P(ua, va, ya + 0.004), P(ub, vb, yb + 0.004), RIDGE);
  // the valleys where it meets another section
  for (const [[ua, va, ya], [ub, vb, yb]] of meets) lines.seg(P(ua, va, ya + 0.004), P(ub, vb, yb + 0.004), RIDGE);
  // walls up under the roof, from the section's base: the gable ends (not under a hip) …
  const base = s.base;
  if (attic) return;
  for (const end of [0, 1] as const) {
    const profile = gableProfiles[end];
    if (!profile || (frontEnd !== null && frontEnd !== end)) continue;
    const poly = above(profile, base - THICK);
    const u = end === 0 ? fr.u0 : fr.u1;
    if (poly.length >= 3) fan(poly.map(([v, y]) => P(u, v, y)), g);
  }
  // … and the knee walls along the eaves where the roof starts above the walls (a high back wall of a pent roof)
  if (s.shape !== "flat" && s.shape !== "parapet") {
    const [wu0, wu1] = cut?.wallU ?? [fr.u0, fr.u1];
    for (const v of [0, w]) {
      const y = pr.y(v) - THICK;
      if (y > base + 0.02) fan([P(wu0, v, base), P(wu1, v, base), P(wu1, v, y), P(wu0, v, y)], g);
    }
  } else if (s.eave_a > base + 0.02) {
    for (const [ua, va, ub, vb] of [[fr.u0, 0, fr.u1, 0], [fr.u1, 0, fr.u1, w], [fr.u1, w, fr.u0, w], [fr.u0, w, fr.u0, 0]])
      fan([P(ua, va, base), P(ub, vb, base), P(ub, vb, s.eave_a), P(ua, va, s.eave_a)], g);
  }
}

/**
 * Posts and beams of a canopy: a beam under each free edge of the roof, posts at its corners and at
 * most 3.5 m apart along the free sides; an edge against the house (no overhang) rests on the wall.
 */
function pushCanopyFrame(
  solid: GeoBuffer,
  lines: LineBuffer,
  fr: ReturnType<typeof sectionFrame>,
  pr: ReturnType<typeof sectionProfile>,
  ov: { u0: number; u1: number; a: number; b: number },
  P: (u: number, v: number, y: number) => number[],
  yOff: number,
): void {
  const w = fr.w;
  const POST = 0.12;
  const BEAM = 0.16;
  const freeA = ov.a > 0;
  const freeB = ov.b > 0;
  const freeU0 = ov.u0 > 0;
  const freeU1 = ov.u1 > 0;
  const box = (u0: number, u1: number, v0: number, v1: number, y0: number, y1: number) => {
    const poly = [fr.at(u0, v0), fr.at(u1, v0), fr.at(u1, v1), fr.at(u0, v1)];
    // the frame may be flipped: keep the outline counter-clockwise
    const area = (poly[1][0] - poly[0][0]) * (poly[2][1] - poly[0][1]) - (poly[2][0] - poly[0][0]) * (poly[1][1] - poly[0][1]);
    pushPrism(solid, area < 0 ? [...poly].reverse() : poly, y0 - yOff, y1 - yOff, FRAME, FRAME_TOP, { bottom: true });
  };
  const ground = yOff;
  // beams along the free long sides (a, b), under the roof at their height
  for (const [v, free] of [[0, freeA], [w, freeB]] as const) {
    if (!free) continue;
    const y = pr.y(v) - 0.03;
    const vv = v === 0 ? 0 : w - POST;
    box(fr.u0, fr.u1, vv, vv + POST, y - BEAM, y);
    lines.seg(P(fr.u0, v, y - BEAM), P(fr.u1, v, y - BEAM), EAVE);
  }
  // beams along the free ends (u0, u1), following the slope
  for (const [u, free] of [[fr.u0, freeU0], [fr.u1 - POST, freeU1]] as const) {
    if (!free) continue;
    for (let i = 0; i < 6; i++) {
      const v0 = (w * i) / 6;
      const v1 = (w * (i + 1)) / 6;
      const y = Math.min(pr.y(v0), pr.y(v1)) - 0.03;
      box(u, u + POST, v0, v1, y - BEAM, y);
    }
  }
  // posts: corners where both edges are free (a corner at the house wall rests on the wall), and
  // along a free long side at most 3.5 m apart
  const posts: [number, number][] = [];
  for (const [v, free] of [[0, freeA], [w - POST, freeB]] as const) {
    if (!free) continue;
    const span = fr.u1 - fr.u0 - POST;
    const n = Math.max(1, Math.ceil(span / 3.5));
    for (let i = 0; i <= n; i++) {
      const u = fr.u0 + (span * i) / n;
      if ((i === 0 && !freeU0) || (i === n && !freeU1)) continue;
      posts.push([u, v]);
    }
  }
  // a pent roof against the house with only its ends free still needs posts at its outer corners
  if (!freeA && !freeB) for (const u of [fr.u0, fr.u1 - POST]) if ((u === fr.u0 && freeU0) || (u !== fr.u0 && freeU1)) posts.push([u, w / 2 - POST / 2]);
  for (const [u, v] of posts) {
    const top = pr.y(v + POST / 2) - 0.03 - BEAM;
    box(u, u + POST, v, v + POST, ground, top);
  }
}

/** The part of a roof profile (points across, with heights) above a level, as a closed polygon. */
function above(profile: [number, number][], level: number): [number, number][] {
  const out: [number, number][] = [];
  for (let i = 0; i < profile.length; i++) {
    const [v, y] = profile[i];
    if (y >= level) out.push([v, y]);
    const next = profile[i + 1];
    if (next && (y - level) * (next[1] - level) < 0) {
      const t = (level - y) / (next[1] - y);
      out.push([v + (next[0] - v) * t, level]);
    }
  }
  if (out.length < 2) return [];
  // close along the level
  const first = out[0];
  const last = out[out.length - 1];
  if (last[1] > level) out.push([last[0], level]);
  if (first[1] > level) out.unshift([first[0], level]);
  return out;
}
