// The roof: either one roof over the top floor (flat or gable, over the bounding box of its rooms plus
// the outer walls and the overhang), or roof sections (wings of an L- or T-shaped house, a barn with a
// catslide, a lean-to …) at their own heights. Drawn in the house view only; the viewer lifts and fades
// it out when the camera zooms in.

import { Color } from "three";
import type { Building, Floor, RoofSection, SolarField, Vec2 } from "../model.ts";
import { pointInPolygon, polygonArea } from "../model.ts";
import { generateWalls, slopeTop } from "../geometry/walls.ts";
import { coversIn, crossAsWing, cutHole, cutUnder, lineOutside, meetLine, sectionCovers, sectionFloor, sectionsCut, dormerHoles, dormerParent, effectiveDormer, turnedDormer, offsetPolygon, sectionGeometry, sectionHeightAt, sectionPolygon, sectionFrame, sectionOverhang, sectionProfile, sectionUV, wingJunction, wingSection, type LocalCover, type Q, type SectionOverhang } from "../roof-sections.ts";
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
  /**
   * A dormer's cheeks and front gable: walls of the room below it. In the floor view (the roof gone over the opened
   * floor) they stay like the windows; in the house view they lift and fade with the roof (#1167).
   */
  cheeks?: GeoBuffer;
  /** The floor's rooms reach up under these slopes (an attic): only then are the dormer's cheeks its rooms' walls. */
  attic?: boolean;
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
    // opened under its roof windows (#1078)
    const face = roofFaces(b).find((f) => f.flat && f.section === null);
    const wins = face ? (roof.windows ?? []).filter((w) => w.face === face.key).map((w) => windowCorners(face, w)) : [];
    const holes = flatHoles([[x0, z0], [x1, z0], [x1, z1], [x0, z1]], wins.flatMap((c) => (c ? [c.map((p): Vec2 => [p[0], p[2]])] : [])));
    pushPrism(solid, [[x0, z0], [x1, z0], [x1, z1], [x0, z1]], 0, 0.25, RF.ROOF, RF.ROOF_TOP, { bottom: true, holes });
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
  const inWall = floorWallsAlong(b);
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
    // the floor the section sits on: the highest one that starts below its walls' top – a dormer's is the floor of the
    // roof it sits on, also when its front reaches down lower (#1167)
    const floor = sectionFloor(b, plan.parent ?? sec) ?? floors[0];
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
    if (attic) part.attic = true;
    // the slope opens under every dormer and cross gable sitting on this section, and under its roof windows
    // (a turned one, or one as high as this roof, cuts the slope by its planes instead, see sectionsCut)
    const holes = sections.filter((d) => d !== sec && dormerParent(sections, d) === sec && !crossAsWing(sections, d)).flatMap((d) => dormerHoles(sec, d));
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
    // the slope a dormer sits on, over its roof's own outline: its cheeks stand on it (#1315)
    let slope: ((x: number, z: number) => number | null) | null = null;
    if (parent) {
      const fr = sectionFrame(drawn);
      const pg = sectionGeometry(parent, { u0: 0, u1: 0, a: 0, b: 0 });
      slope = (x, z) => {
        const [pu, pv] = sectionUV(parent, x, z);
        return sectionHeightAt(pg, pu, pv);
      };
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
    // a dormer's cheeks and front gable are walls of the room below it: they stay when the roof fades over that
    // room (the floor view), like its floating roof windows – faded with the roof, the room had holes in its sides
    const keep = sec.dormer || parent ? (part.cheeks ??= new GeoBuffer()) : part.solid;
    // … and where a floor wall stands in their plane (the room's wall right under the dormer's front), they leave that
    // wall's height to it: its windows and doors show through (#1185)
    pushSection(part.solid, part.lines, drawn, plan.ov, floor.elevation, part.glass, attic, holes, frontEnd, cut, keep, sec.dormer || parent ? inWall : null, slope);
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
  /** Where its walls (gables, knee walls, a dormer's cheeks) go; the roof's own buffer when not given. */
  walls: GeoBuffer = solid,
  /** Floor walls in the plane of its walls: those end above them (a dormer's front and cheeks, #1185). */
  inWall: WallsAlong | null = null,
  /** A dormer: the height of the slope it sits on at a point (null beyond that roof's outline). */
  slope: ((x: number, z: number) => number | null) | null = null,
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
  const fan = (pts: number[][], col: Color, buf: GeoBuffer = solid) => {
    for (let i = 1; i + 1 < pts.length; i++) buf.tri(pts[0], pts[i], pts[i + 1], col);
  };
  // the roof planes as polygons in (u, v, height), the rim and the ridge lines; a flat roof is a slab
  let faces: Q[][] = [];
  let rim: Q[] = [];
  let ridges: [Q, Q][] = [];
  let gableProfiles: [[number, number][] | null, [number, number][] | null] = [null, null];
  const meets: [Q, Q][] = [];
  // where a neighbour goes on in the section's own plane (#1184): no edge, line or wall at that joint
  let joints: ReturnType<typeof flushJoints> = null;
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
    pushPrism(solid, poly, y - yOff, y - yOff + 0.25, RF.ROOF, RF.ROOF_TOP, { bottom: true, holes: flatHoles(poly, holes.map((h) => [fr.at(h.u0, h.v0), fr.at(h.u1, h.v0), fr.at(h.u1, h.v1), fr.at(h.u0, h.v1)])) });
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
      joints = flushJoints(geom.faces, cut.covers);
      // where this roof runs into another one: the line where they meet, then only what shows above the other
      // (a neighbour in the same plane meets it in no line: the planes do not cross, they are one)
      for (const f of faces)
        for (const c of cut.lines) {
          if (joints && flushPlanes(f, c.poly)) continue;
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
  // (only where it is not under another section, nor where a section in its plane goes on beyond it)
  const covered = (p: Q, q: Q): [Q, Q][] => (cut ? lineOutside(p, q, cut.covers) : [[p, q]]);
  const at = (p: Q, q: Q, t: number): Q => [p[0] + (q[0] - p[0]) * t, p[1] + (q[1] - p[1]) * t, p[2] + (q[2] - p[2]) * t];
  // the rim's outward side: it runs round the section in the plan (u, v) one way or the other
  const turn = polygonArea(rim.map((q) => [q[0], q[1]] as Vec2)) >= 0 ? 1 : -1;
  const outward = (p: Q, q: Q): Vec2 => {
    const len = Math.hypot(q[0] - p[0], q[1] - p[1]) || 1;
    return [((q[1] - p[1]) * turn) / len, (-(q[0] - p[0]) * turn) / len];
  };
  // the parts of a line that show: not under a cover, not at a joint (bits under 5 mm left over at a joint's end go too)
  const shown = (p: Q, q: Q, out: Vec2 | null): [Q, Q][] => {
    const parts = covered(p, q);
    if (!joints || !out) return parts;
    return parts.flatMap(([a, b]) => {
      const len = Math.hypot(b[0] - a[0], b[1] - a[1]);
      if (len < 1e-9) return [];
      return without(joints([a[0], a[1]], [b[0], b[1]], out), 0.005 / len).map(([t0, t1]): [Q, Q] => [at(a, b, t0), at(a, b, t1)]);
    });
  };
  // the rim's edges with their outward sides; a ridge on the rim (the high edge of a pent roof) goes with its edge
  const edges = rim.map((p, i): [Q, Q] => [p, rim[(i + 1) % rim.length]]);
  const same = (a: Q, b: Q) => Math.abs(a[0] - b[0]) < 1e-9 && Math.abs(a[1] - b[1]) < 1e-9;
  const rimSide = (p: Q, q: Q): Vec2 | null => {
    const e = edges.find(([a, b]) => (same(a, p) && same(b, q)) || (same(a, q) && same(b, p)));
    return e ? outward(e[0], e[1]) : null;
  };
  for (const [p0, q0] of edges) {
    for (const [[ua, va, ya], [ub, vb, yb]] of shown(p0, q0, outward(p0, q0))) {
      if (!open) fan([P(ua, va, ya), P(ub, vb, yb), P(ub, vb, yb - THICK), P(ua, va, ya - THICK)], under);
      lines.seg(P(ua, va, ya), P(ub, vb, yb), open ? RIDGE : EAVE);
    }
  }
  if (open) {
    pushCanopyFrame(solid, lines, fr, pr, ov, P, yOff);
    return;
  }
  for (const [p, q] of ridges) for (const [[ua, va, ya], [ub, vb, yb]] of shown(p, q, rimSide(p, q))) lines.seg(P(ua, va, ya + 0.004), P(ub, vb, yb + 0.004), RIDGE);
  // the valleys where it meets another section
  for (const [[ua, va, ya], [ub, vb, yb]] of meets) lines.seg(P(ua, va, ya + 0.004), P(ub, vb, yb + 0.004), RIDGE);
  // walls up under the roof, from the section's base: the gable ends (not under a hip) …
  const base = s.base;
  if (attic) return;
  // the pieces of such a wall along a line (u, v) from its foot, [t0, t1, foot]: none at a joint with a section in
  // the same plane (#1184) – a gable or knee wall there would stand in the middle of the room below – and only above
  // a floor wall standing in its plane, so that wall's windows and doors show (#1185)
  const pieces = (p: Vec2, q: Vec2, out: Vec2, foot: number): [number, number, number][] => {
    const gone = joints ? joints(p, q, out) : [];
    const keep: [number, number][] = gone.length ? without(gone, 0.005 / Math.max(1e-9, Math.hypot(q[0] - p[0], q[1] - p[1]))) : [[0, 1]];
    const under = inWall && keep.length ? inWall(fr.at(p[0], p[1]), fr.at(q[0], q[1]), foot) : [];
    return under.length ? keep.flatMap(([t0, t1]) => raised(t0, t1, under, foot)) : keep.map(([t0, t1]): [number, number, number] => [t0, t1, foot]);
  };
  for (const end of [0, 1] as const) {
    const profile = gableProfiles[end];
    if (!profile || (frontEnd !== null && frontEnd !== end)) continue;
    const u = end === 0 ? fr.u0 : fr.u1;
    for (const [t0, t1, foot] of pieces([u, 0], [u, w], [end === 0 ? -1 : 1, 0], base - THICK)) {
      const poly = above(profile, foot);
      const piece = t0 > 1e-9 || t1 < 1 - 1e-9 ? clipProfileV(poly, t0 * w, t1 * w) : poly;
      // (a floor wall up to the ridge leaves only the ridge point: nothing)
      if (piece.length >= 3 && Math.abs(polygonArea(piece)) > 1e-6) fan(piece.map(([v, y]) => P(u, v, y)), g, walls);
    }
  }
  // … and the knee walls along the eaves where the roof starts above the walls (a high back wall of a pent roof)
  if (s.shape !== "flat" && s.shape !== "parapet") {
    const [wu0, wu1] = cut?.wallU ?? [fr.u0, fr.u1];
    for (const v of [0, w]) {
      const y = pr.y(v) - THICK;
      if (y <= base + 0.02) continue;
      for (const [t0, t1, foot] of pieces([wu0, v], [wu1, v], [0, v === 0 ? -1 : 1], base)) {
        if (y <= foot + 0.02) continue;
        const ua = wu0 + (wu1 - wu0) * t0;
        const ub = wu0 + (wu1 - wu0) * t1;
        if (!slope) {
          fan([P(ua, v, foot), P(ub, v, foot), P(ub, v, y), P(ua, v, y)], g, walls);
          continue;
        }
        // a dormer's cheek stands on the slope: what lay under it stood as a slab in the room below (#1315)
        const STEPS = 16;
        const low = (i: number): [number, number] => {
          const u = ua + ((ub - ua) * i) / STEPS;
          const [x, z] = fr.at(u, v);
          return [u, Math.max(foot, (slope(x, z) ?? -Infinity) - THICK)];
        };
        for (let i = 0; i < STEPS; i++) {
          let [u0, f0] = low(i);
          let [u1, f1] = low(i + 1);
          if (f0 >= y && f1 >= y) continue;
          // where the slope passes the cheek's top inside the step, the cheek ends in a point there
          if (f0 > y) [u0, f0] = [u1 + ((u0 - u1) * (y - f1)) / (f0 - f1), y];
          else if (f1 > y) [u1, f1] = [u0 + ((u1 - u0) * (y - f0)) / (f1 - f0), y];
          fan([P(u0, v, f0), P(u1, v, f1), P(u1, v, y), P(u0, v, y)], g, walls);
        }
      }
    }
  } else if (s.eave_a > base + 0.02) {
    for (const [ua, va, ub, vb] of [[fr.u0, 0, fr.u1, 0], [fr.u1, 0, fr.u1, w], [fr.u1, w, fr.u0, w], [fr.u0, w, fr.u0, 0]])
      fan([P(ua, va, base), P(ub, vb, base), P(ub, vb, s.eave_a), P(ua, va, s.eave_a)], g, walls);
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

/**
 * The openings a flat roof's slab gets under its roof windows (#1078): each a centimetre inside its window, so the
 * window's curb hides the cut edge and the glass looks into the room below like a window in a slope. Only openings
 * wholly inside the slab and clear of each other are cut; any other window stays on the closed slab, as before.
 */
export function flatHoles(slab: readonly Vec2[], windows: readonly Vec2[][]): Vec2[][] {
  const out: Vec2[][] = [];
  const box = (q: readonly Vec2[]) => [Math.min(...q.map((p) => p[0])), Math.min(...q.map((p) => p[1])), Math.max(...q.map((p) => p[0])), Math.max(...q.map((p) => p[1]))];
  // inside the slab, a few centimetres in from its rim; no corner of the slab inside it
  const inner = offsetPolygon(slab, -0.03);
  for (const w of windows) {
    const hole = offsetPolygon(w, -0.01);
    if (Math.abs(polygonArea(hole)) < 0.01) continue;
    if (!hole.every((p) => pointInPolygon(p, inner)) || slab.some((p) => pointInPolygon(p, hole))) continue;
    const [x0, z0, x1, z1] = box(hole);
    if (out.some((o) => {
      const [a0, b0, a1, b1] = box(o);
      return x0 < a1 + 0.02 && x1 > a0 - 0.02 && z0 < b1 + 0.02 && z1 > b0 - 0.02;
    }))
      continue;
    out.push(hole);
  }
  return out;
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

// ---------------------------------------------------------------- joints between sections in one plane (#1184)

/** Two roof planes closer than this count as one: cutUnder and lineOutside cut nothing that close either. */
const FLUSH = 0.01;
/** How far past a joint the neighbour's plane has to go on (bridges a gap of a few millimetres). */
const REACH = 0.02;

/** The plane through a polygon in (u, v, height) as height = α·u + β·v + γ; null when it has no area. */
function planeUV(poly: readonly Q[]): [number, number, number] | null {
  // the corner farthest from the first and the one farthest off that line (clipping may repeat a corner)
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
  if (Math.abs(det) < 1e-6) return null;
  const vx = p2[0] - p0[0];
  const vz = p2[1] - p0[1];
  const dy1 = p1[2] - p0[2];
  const dy2 = p2[2] - p0[2];
  const al = (dy1 * vz - dy2 * uz) / det;
  const be = (ux * dy2 - vx * dy1) / det;
  return [al, be, p0[2] - al * p0[0] - be * p0[1]];
}

/** Whether two roof planes (in one frame) are one plane where they lie: within FLUSH at every corner of both. */
function flushPlanes(f: readonly Q[], g: readonly Q[]): boolean {
  const pf = planeUV(f);
  const pg = planeUV(g);
  if (!pf || !pg) return false;
  const gap = (q: Q) => Math.abs((pf[0] - pg[0]) * q[0] + (pf[1] - pg[1]) * q[1] + pf[2] - pg[2]);
  return f.every((q) => gap(q) < FLUSH) && g.every((q) => gap(q) < FLUSH);
}

/** The part (t0 … t1 of 0 … 1) of the line p → q (u, v) within a convex polygon, its edges grown by eps; null when none. */
function clipToPolygon(p: Vec2, q: Vec2, poly: readonly Q[], eps: number): [number, number] | null {
  const s = polygonArea(poly.map((c) => [c[0], c[1]] as Vec2)) >= 0 ? 1 : -1;
  let t0 = 0;
  let t1 = 1;
  for (let i = 0; i < poly.length; i++) {
    const a = poly[i];
    const b = poly[(i + 1) % poly.length];
    const len = Math.hypot(b[0] - a[0], b[1] - a[1]);
    if (len < 1e-7) continue;
    // the inward normal: inside is n·(x − a) + eps ≥ 0
    const nx = (-(b[1] - a[1]) * s) / len;
    const nz = ((b[0] - a[0]) * s) / len;
    const f0 = nx * (p[0] - a[0]) + nz * (p[1] - a[1]) + eps;
    const df = nx * (q[0] - p[0]) + nz * (q[1] - p[1]);
    if (Math.abs(df) < 1e-12) {
      if (f0 < 0) return null;
      continue;
    }
    const t = -f0 / df;
    if (df > 0) t0 = Math.max(t0, t);
    else t1 = Math.min(t1, t);
    if (t1 - t0 <= 1e-9) return null;
  }
  return [t0, t1];
}

/**
 * Where a section goes on into a neighbour in its own plane: one roof face drawn as several sections (an L, a
 * lean-to running under a higher roof at both ends). `joints` gives the parts (t of 0 … 1) of a line on the
 * section – an edge of its rim, the foot of a gable or knee wall – beyond which, `out` (a unit step in u, v), a
 * neighbour's plane goes on flush with the section's own plane there. Null when no neighbour lies in its plane.
 */
function flushJoints(faces: readonly Q[][], covers: readonly LocalCover[]): ((p: Vec2, q: Vec2, out: Vec2) => [number, number][]) | null {
  const pairs: [Q[], Q[]][] = [];
  for (const f of faces) for (const c of covers) if (flushPlanes(f, c.poly)) pairs.push([f, c.poly]);
  if (!pairs.length) return null;
  return (p, q, out) => {
    const found: [number, number][] = [];
    const op: Vec2 = [p[0] + out[0] * REACH, p[1] + out[1] * REACH];
    const oq: Vec2 = [q[0] + out[0] * REACH, q[1] + out[1] * REACH];
    for (const [f, c] of pairs) {
      const on = clipToPolygon(p, q, f, 1e-6);
      const beyond = on && clipToPolygon(op, oq, c, 1e-6);
      if (!on || !beyond) continue;
      const t0 = Math.max(on[0], beyond[0]);
      const t1 = Math.min(on[1], beyond[1]);
      if (t1 > t0) found.push([t0, t1]);
    }
    return found;
  };
}

/** What is left of 0 … 1 without the parts given, leaving out bits shorter than `min` (both as parts of the line). */
function without(parts: readonly [number, number][], min: number): [number, number][] {
  let keep: [number, number][] = [[0, 1]];
  for (const [a, b] of parts)
    keep = keep.flatMap(([s0, s1]): [number, number][] => [
      [s0, Math.min(s1, a)],
      [Math.max(s0, b), s1],
    ]).filter(([s0, s1]) => s1 - s0 > 1e-9);
  return keep.filter(([s0, s1]) => s1 - s0 >= min);
}

/** A wall profile (v, height) cut down to v0 … v1. */
function clipProfileV(poly: readonly [number, number][], v0: number, v1: number): [number, number][] {
  const clip = (pts: [number, number][], limit: number, keepBelow: boolean): [number, number][] => {
    const out: [number, number][] = [];
    const inside = (p: [number, number]) => (keepBelow ? p[0] <= limit : p[0] >= limit);
    for (let i = 0; i < pts.length; i++) {
      const p = pts[i];
      const q = pts[(i + 1) % pts.length];
      if (inside(p)) out.push(p);
      if (inside(p) !== inside(q)) {
        const t = (limit - p[0]) / (q[0] - p[0]);
        out.push([limit, p[1] + (q[1] - p[1]) * t]);
      }
    }
    return out;
  };
  return clip(clip([...poly], v0, false), v1, true);
}

// ---------------------------------------------------------------- floor walls in a dormer's front (#1185)

/**
 * Floor walls standing in the plane of a wall along a plan line a → c: the parts [t0, t1, top] (t of 0 … 1) where a
 * floor wall that starts at or below `foot` rises above it, with its top there (absolute).
 */
type WallsAlong = (a: Vec2, c: Vec2, foot: number) => [number, number, number][];

/** How far off a wall's plane a floor wall's face may lie and still count as standing in it (either side). */
const IN_WALL = 0.02;

/**
 * The floors' walls for a dormer's front and cheeks to end on: a room's wall right under the dormer's front (a bump-out
 * whose outer face is the dormer's front) builds the front up to its own top, with its windows and doors; the dormer
 * front only adds what lies above (#1185). The walls are worked out once, when a dormer asks first.
 */
function floorWallsAlong(b: Building): WallsAlong {
  let all: { poly: Vec2[]; dir: Vec2; bottom: number; top: (p: Vec2) => number }[] | null = null;
  const walls = () =>
    (all ??= b.floors.flatMap((f) =>
      generateWalls(f.rooms, { exterior: b.settings.wall_exterior, interior: b.settings.wall_interior }, f.walls ?? []).walls.map((w) => ({
        poly: w.footprint,
        dir: [w.b[0] - w.a[0], w.b[1] - w.a[1]] as Vec2,
        bottom: f.elevation,
        top: (p: Vec2) => f.elevation + (w.slope ? slopeTop(w.slope, p[0], p[1]) : Math.min(f.height, w.height ?? f.height)),
      })),
    ));
  return (a, c, foot) => {
    const len = Math.hypot(c[0] - a[0], c[1] - a[1]);
    if (len < 1e-6) return [];
    // the line moved a little to either side: a wall whose face lies in the plane holds one of them
    const n: Vec2 = [-(c[1] - a[1]) / len, (c[0] - a[0]) / len];
    const at = (t: number): Vec2 => [a[0] + (c[0] - a[0]) * t, a[1] + (c[1] - a[1]) * t];
    const out: [number, number, number][] = [];
    for (const w of walls()) {
      // a wall of a floor starting above the foot is no wall under it; one across the line only meets it with its end
      if (w.bottom > foot + 0.05) continue;
      const wl = Math.hypot(w.dir[0], w.dir[1]);
      if (wl < 1e-6 || Math.abs(w.dir[0] * n[0] + w.dir[1] * n[1]) > 0.1 * wl) continue;
      for (const k of [-IN_WALL, IN_WALL])
        for (const [t0, t1] of segmentInPolygon([a[0] + n[0] * k, a[1] + n[1] * k], [c[0] + n[0] * k, c[1] + n[1] * k], w.poly)) {
          const top = Math.min(w.top(at(t0)), w.top(at(t1)));
          if (top > foot + 0.01) out.push([t0, t1, top]);
        }
    }
    return out;
  };
}

/** The parts (t of 0 … 1) of the line a → c inside a polygon. */
function segmentInPolygon(a: Vec2, c: Vec2, poly: readonly Vec2[]): [number, number][] {
  const dx = c[0] - a[0];
  const dz = c[1] - a[1];
  const ts = [0, 1];
  for (let i = 0; i < poly.length; i++) {
    const p = poly[i];
    const q = poly[(i + 1) % poly.length];
    const ex = q[0] - p[0];
    const ez = q[1] - p[1];
    const den = dx * ez - dz * ex;
    if (Math.abs(den) < 1e-12) continue;
    const t = ((p[0] - a[0]) * ez - (p[1] - a[1]) * ex) / den;
    const s = ((p[0] - a[0]) * dz - (p[1] - a[1]) * dx) / den;
    if (s >= -1e-9 && s <= 1 + 1e-9 && t > 0 && t < 1) ts.push(t);
  }
  ts.sort((x, y) => x - y);
  const out: [number, number][] = [];
  for (let i = 0; i + 1 < ts.length; i++) {
    const t0 = ts[i];
    const t1 = ts[i + 1];
    if (t1 - t0 < 1e-9) continue;
    const m = (t0 + t1) / 2;
    if (!pointInPolygon([a[0] + dx * m, a[1] + dz * m], poly)) continue;
    const last = out[out.length - 1];
    if (last && Math.abs(last[1] - t0) < 1e-9) last[1] = t1;
    else out.push([t0, t1]);
  }
  return out;
}

/** t0 … t1 split where the floor walls under it begin and end, each piece with its foot: the highest wall top there, at least `foot`. */
function raised(t0: number, t1: number, under: readonly [number, number, number][], foot: number): [number, number, number][] {
  const cuts = [t0, t1, ...under.flatMap(([a, c]) => [a, c]).filter((t) => t > t0 && t < t1)].sort((x, y) => x - y);
  const out: [number, number, number][] = [];
  for (let i = 0; i + 1 < cuts.length; i++) {
    const a = cuts[i];
    const c = cuts[i + 1];
    if (c - a < 1e-9) continue;
    const m = (a + c) / 2;
    let level = foot;
    for (const [u0, u1, top] of under) if (m > u0 && m < u1) level = Math.max(level, top);
    const last = out[out.length - 1];
    if (last && Math.abs(last[2] - level) < 1e-9) last[1] = c;
    else out.push([a, c, level]);
  }
  return out;
}
