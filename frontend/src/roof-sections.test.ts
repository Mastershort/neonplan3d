import assert from "node:assert/strict";
import { test } from "node:test";
import { emptyBuilding, newFloor, ROOF_SHAPES, type Room, type RoofSection } from "./model.ts";
import { onSection, sectionTurn, turnPoint, turnSectionAbout, coversIn, cutHole, cutUnder, dormerHole, dormerHoles, dormerParent, sectionsCut, turnedDormer, floorOutline, lineOutside, sectionCovers, sectionEnds, sectionUV, wingJunction, wingSection, offsetPolygon, polygonBox, proposeDormer, ridgeHeight, roofRider, roofSectionsFromRooms, roofUnderAt, sectionFrame, sectionGeometry, sectionHeightAt, sectionOverhang, sectionPolygon, sectionProfile, wallTopUnder } from "./roof-sections.ts";
import { buildRoof } from "./viewer/roof.ts";

const near = (a: number, b: number, eps = 1e-6) => assert.ok(Math.abs(a - b) < eps, `${a} != ${b}`);
const rect = (id: string, x0: number, z0: number, x1: number, z1: number): Room => ({ id, name: id, area_id: null, points: [[x0, z0], [x1, z0], [x1, z1], [x0, z1]], floor_material: "wood" });
const section = (patch: Partial<RoofSection> = {}): RoofSection => ({
  id: "s",
  x0: 0,
  z0: 0,
  x1: 12,
  z1: 8,
  shape: "gable",
  axis: "x",
  eave_a: 3,
  eave_b: 3,
  pitch_a: 45,
  pitch_b: 45,
  base: 3,
  ...patch,
});

test("a symmetric gable has its ridge in the middle, half the width up", () => {
  const p = sectionProfile(section());
  near(p.vr, 4);
  near(p.rh, 7);
  near(p.y(0), 3);
  near(p.y(8), 3);
  // beyond the wall (the overhang) the slope goes on down
  near(p.y(-0.5), 2.5);
});

test("a lower eave on one side (a catslide) moves the ridge and keeps both slopes", () => {
  // side b reaches 2 m lower at the same pitch: the ridge moves 1 m towards side a
  const p = sectionProfile(section({ eave_b: 1 }));
  near(p.vr, 3);
  near(p.rh, 6);
  near(p.y(8), 1);
  near(ridgeHeight(section({ eave_b: 1 })), 6);
});

test("a pent roof rises from side a to its high edge at side b, a flat roof stays at its eave", () => {
  const pent = sectionProfile(section({ shape: "pent", pitch_a: 20 }));
  near(pent.vr, 8);
  near(pent.rh, 3 + 8 * Math.tan((20 * Math.PI) / 180));
  near(sectionProfile(section({ shape: "flat" })).rh, 3);
});

test("the frame runs u along the ridge and v across from side a", () => {
  const fx = sectionFrame(section());
  assert.deepEqual([fx.u0, fx.u1, fx.w], [0, 12, 8]);
  assert.deepEqual(fx.at(2, 1), [2, 1]);
  const fz = sectionFrame(section({ axis: "z" }));
  assert.deepEqual([fz.u0, fz.u1, fz.w], [0, 8, 12]);
  assert.deepEqual(fz.at(2, 1), [1, 2]);
});

test("sections proposed from an L-shaped house and a single-storey part", () => {
  const b = emptyBuilding();
  b.settings.wall_exterior = 0.25;
  // ground floor: an L (barn 16 × 10, living wing 8 × 10 at a right angle); upper floor over the wing only
  b.floors = [
    { ...newFloor("eg", "EG", 0), rooms: [rect("barn", 0, 0, 16, 10), rect("wing", 0, 10, 8, 20)] },
    { ...newFloor("og", "OG", 2.75), rooms: [rect("up", 0, 10, 8, 20)] },
  ];
  const s = roofSectionsFromRooms(b);
  assert.equal(s.length, 2);
  // the upper floor first: the wing, ridge along its long side (z), eaves on its walls
  assert.deepEqual([s[0].x0, s[0].z0, s[0].x1, s[0].z1, s[0].axis], [-0.25, 9.75, 8.25, 20.25, "z"]);
  near(s[0].eave_a, 2.75 + 2.5);
  // the ground floor: only the barn is left uncovered
  assert.deepEqual([s[1].x0, s[1].z0, s[1].x1, s[1].z1, s[1].axis], [-0.25, -0.25, 16.25, 10.25, "x"]);
  near(s[1].base, 2.5);
  // a custom roof is drawn in parts per floor
  b.settings.roof = { type: "custom", pitch: 40, overhang: 0.4, sections: s };
  const parts = buildRoof(b);
  assert.deepEqual(parts.map((p) => p.floor.id).sort(), ["eg", "og"]);
  assert.ok(parts.every((p) => p.solid.count > 0));
});

test("every shape builds geometry", () => {
  const b = emptyBuilding();
  b.floors = [{ ...newFloor("eg", "EG", 0), rooms: [rect("a", 0, 0, 12, 8)] }];
  for (const shape of ROOF_SHAPES) {
    b.settings.roof = { type: "custom", pitch: 40, overhang: 0.4, sections: [section({ shape, base: 2.5, eave_a: 2.5, eave_b: 2.5 })] };
    const [part] = buildRoof(b);
    assert.ok(part.solid.count > 0, shape);
    // nothing reaches higher than the ridge, or the high edge of a pent roof over its overhang (plus a flat roof's thickness)
    const sec = section({ shape, eave_a: 2.5, eave_b: 2.5 });
    const top = Math.max(ridgeHeight(sec), sectionProfile(sec).y(8 + 0.4));
    const ys = part.solid.p.filter((_, i) => i % 3 === 1);
    // a parapet roof carries its 0.4 m wall ring on the slab
    assert.ok(Math.max(...ys) <= top + (shape === "parapet" ? 0.66 : 0.26), shape);
  }
});

test("a lean-to has no overhang where it meets the taller house, and sits on the walls below", () => {
  const b = emptyBuilding();
  // a two-storey house (0..10) and a single-storey garage beside it (10..14)
  b.floors = [
    { ...newFloor("eg", "EG", 0), rooms: [rect("house", 0, 0, 10, 8), rect("garage", 10, 0, 14, 6)] },
    { ...newFloor("og", "OG", 2.75), rooms: [rect("up", 0, 0, 10, 8)] },
  ];
  near(wallTopUnder(b, 10, 0, 14, 6)!, 2.5);
  near(wallTopUnder(b, 0, 0, 10, 8)!, 2.75 + 2.5);
  // pent roof on the garage, ridge along z, side a at x = 10 (the house)
  const lean = section({ x0: 10, z0: 0, x1: 14, z1: 6, shape: "pent", axis: "z", flip: true, eave_a: 2.5, eave_b: 2.5, base: 2.5 });
  const o = sectionOverhang(b, lean, 0.4);
  // flipped: side a is at x = 14 (open), side b at x = 10 against the house
  assert.deepEqual([o.a, o.b, o.u0, o.u1], [0.4, 0, 0.4, 0.4]);
});

test("a canopy over a terrace draws see-through panels and posts instead of walls", () => {
  const b = emptyBuilding();
  b.floors = [{ ...newFloor("eg", "EG", 0), rooms: [rect("house", 0, 0, 10, 8)] }];
  // a terrace roof in front of the house, rising to the house wall (side b at z = 8 … flipped: a = z 11)
  const canopy = section({ x0: 2, z0: 8, x1: 8, z1: 11, shape: "pent", axis: "x", flip: true, eave_a: 2.4, eave_b: 2.4, pitch_a: 6, pitch_b: 6, base: 2.4, open: true });
  b.settings.roof = { type: "custom", pitch: 35, overhang: 0.4, sections: [canopy] };
  const [part] = buildRoof(b);
  assert.ok(part.glass.count > 0, "see-through panels");
  // the posts reach down to the ground
  const ys = part.solid.p.filter((_, i) => i % 3 === 1);
  near(Math.min(...ys), 0);
  // the side at the house wall has no overhang
  assert.equal(sectionOverhang(b, canopy, 0.15).b, 0);
});

/** A two-storey house 10 × 8 with thick outer walls, and a terrace roof against its wall at z = 8 (side b). */
function terraceCase(ext: number) {
  const b = emptyBuilding();
  b.settings.wall_exterior = ext;
  b.floors = [
    { ...newFloor("eg", "EG", 0), height: 2.6, rooms: [rect("house", 0, 0, 10, 8)] },
    { ...newFloor("dg", "DG", 2.8), height: 2.5, rooms: [rect("up", 0, 0, 10, 8)] },
  ];
  const canopy = (z0: number, patch: Partial<RoofSection> = {}) =>
    section({ x0: 2, z0, x1: 8, z1: z0 + 3, shape: "pent", axis: "x", flip: true, eave_a: 2.4, eave_b: 2.4, pitch_a: 6, pitch_b: 6, base: 2.4, open: true, ...patch });
  return { b, canopy };
}

test("a terrace roof against the outer face of a thick wall has no overhang into the house (#863)", () => {
  for (const ext of [0.24, 0.365, 0.42, 0.5]) {
    const { b, canopy } = terraceCase(ext);
    // drawn at the room's corners (into the wall), flush with the outer wall face, or a little short of it
    for (const z0 of [8, 8 + ext, 8 + ext + 0.1, 8 + ext + 0.25]) {
      const o = sectionOverhang(b, canopy(z0), 0.15);
      assert.deepEqual([o.a, o.b, o.u0, o.u1], [0.15, 0, 0.15, 0.15], `wall ${ext}, edge at z ${z0}`);
    }
    // on the walls of the ground floor too (a terrace drawn as a room: the roof sits at its wall tops)
    assert.equal(sectionOverhang(b, canopy(8 + ext, { base: 2.6, eave_a: 2.6, eave_b: 2.6 }), 0.15).b, 0, `wall ${ext} on the walls`);
    // a carport a metre away from the house keeps its overhang all round
    assert.equal(sectionOverhang(b, canopy(8 + ext + 1), 0.15).b, 0.15, `wall ${ext} free`);
  }
});

test("a roof over its own floor keeps its overhang beside thick walls (#863)", () => {
  for (const ext of [0.24, 0.5]) {
    const { b } = terraceCase(ext);
    // the attic roof starts below the top floor's ceiling (knee walls): that floor is "taller", but the roof stands over it
    const attic = (x0: number, z0: number, x1: number, z1: number) => section({ x0, z0, x1, z1, eave_a: 3.8, eave_b: 3.8, base: 3.8 });
    for (const s of [attic(-ext, -ext, 10 + ext, 8 + ext), attic(0, 0, 10, 8), attic(-ext + 0.03, -ext + 0.03, 10 + ext - 0.03, 8 + ext - 0.03)]) {
      const o = sectionOverhang(b, s, 0.4);
      assert.deepEqual([o.a, o.b, o.u0, o.u1], [0.4, 0.4, 0.4, 0.4], `wall ${ext}, ${s.x0}`);
    }
  }
});

test("a turned terrace roof finds the turned house's wall as well (#863)", () => {
  const { b, canopy } = terraceCase(0.42);
  // the house and its terrace roof, both turned 30° about the house's corner
  const flat = canopy(8.42);
  const turned = { ...flat, rotation: 30, pivot: [0, 0] as [number, number] };
  const t = sectionTurn(turned);
  for (const f of b.floors) for (const r of f.rooms) r.points = r.points.map((p) => turnPoint(t, p));
  const o = sectionOverhang(b, turned, 0.15);
  assert.deepEqual([o.a, o.b, o.u0, o.u1], [0.15, 0, 0.15, 0.15]);
});

test("an overhang set per side wins over the automatic one; unset sides stay automatic (#863)", () => {
  const { b, canopy } = terraceCase(0.24);
  const auto = sectionOverhang(b, canopy(8.24), 0.15);
  assert.deepEqual([auto.a, auto.b, auto.u0, auto.u1], [0.15, 0, 0.15, 0.15]);
  // a deeper overhang at the front, none at one end, the rest automatic (the house side stays at 0)
  const o = sectionOverhang(b, canopy(8.24, { overhang_sides: [0.6, null, 0, null] }), 0.15);
  assert.deepEqual([o.a, o.b, o.u0, o.u1], [0.6, 0, 0, 0.15]);
  // set by hand, even the house side gets one
  assert.equal(sectionOverhang(b, canopy(8.24, { overhang_sides: [null, 0.3, null, null] }), 0.15).b, 0.3);
  // the viewer and the solar faces take it from there: the roof reaches 0.6 m beyond its front edge
  b.settings.roof = { type: "custom", pitch: 35, overhang: 0.4, sections: [canopy(8.24, { overhang_sides: [0.6, null, null, null] })] };
  const zs = buildRoof(b)[0].glass.p.filter((_, i) => i % 3 === 2);
  near(Math.max(...zs), 8.24 + 3 + 0.6, 0.02);
});

test("a flat roof as a free shape: the floor's outline, grown by the wall thickness, covers the rooms only", () => {
  // an L-shaped floor: a 8×6 house with a 4×4 wing
  const outline = floorOutline([rect("a", 0, 0, 8, 6), rect("b", 8, 0, 12, 4)], [], 0.24, 0.12)!;
  assert.ok(outline, "an outline");
  assert.equal(outline.length, 6, "six corners, none in the middle of a straight run");
  const box = polygonBox(outline);
  near(box.x0, -0.24);
  near(box.z0, -0.24);
  near(box.x1, 12.24);
  near(box.z1, 6.24);
  // the inner corner of the L lies at (8, 4): grown outwards it moves to (8.24, 4.24)
  assert.ok(outline.some(([x, z]) => Math.abs(x - 8.24) < 1e-6 && Math.abs(z - 4.24) < 1e-6), "inner corner");
  // a section with that shape covers the house but not the empty corner of its bounding box
  const sec = section({ shape: "flat", eave_a: 5.3, eave_b: 5.3, base: 5.3, points: outline, ...box });
  const b = { settings: { roof: { type: "custom" as const, pitch: 35, overhang: 0.4, sections: [sec] } } };
  assert.ok(roofUnderAt(b, 4, 3) !== null, "over the house");
  assert.equal(roofUnderAt(b, 11, 5.5), null, "not over the empty corner");
  // the overhang grows the polygon all round
  const grown = sectionPolygon(sec, 0.4);
  near(polygonBox(grown).x1, 12.64);
  // offsetPolygon keeps the orientation and grows a square by d on every side
  const sq = offsetPolygon([[0, 0], [2, 0], [2, 2], [0, 2]], 0.5);
  near(polygonBox(sq).x0, -0.5);
  near(polygonBox(sq).z1, 2.5);
});

test("pyramid, half-hip and mansard: apex, shortened ridge and broken slopes; the planes know the hipped ends", () => {
  const ov = { u0: 0, u1: 0, a: 0, b: 0 };
  // a 12 × 8 section, 40° both sides: the ridge is 4 m in from each eave
  const pyramid = sectionGeometry(section({ shape: "pyramid", pitch_a: 40, pitch_b: 40 }), ov);
  assert.equal(pyramid.faces.length, 4);
  assert.ok(pyramid.ridges.every(([, q]) => Math.abs(q[0] - 6) < 1e-9 && Math.abs(q[1] - 4) < 1e-9), "all hips meet at the centre");
  const gable = sectionGeometry(section({ shape: "gable", pitch_a: 40, pitch_b: 40 }), ov);
  const half = sectionGeometry(section({ shape: "halfhip", pitch_a: 40, pitch_b: 40 }), ov);
  const ridgeLen = (g: ReturnType<typeof sectionGeometry>) => Math.abs(g.ridges[0][1][0] - g.ridges[0][0][0]);
  assert.ok(ridgeLen(half) < ridgeLen(gable) && ridgeLen(half) > 6, "the half-hip ridge is shorter but keeps most of its length");
  assert.ok(half.gable && half.gable.length === 4, "the gable wall ends under the hip");
  // under the hipped end the roof is lower than the profile across says
  const prof = sectionProfile(section({ shape: "halfhip", pitch_a: 40, pitch_b: 40 }));
  const atEnd = sectionHeightAt(half, 0.2, 4)!;
  assert.ok(atEnd < prof.rh - 0.5, `hipped end ${atEnd} below the ridge ${prof.rh}`);
  near(sectionHeightAt(half, 6, 4)!, prof.rh);
  const mansard = sectionGeometry(section({ shape: "mansard", pitch_a: 70, pitch_b: 70 }), ov);
  assert.equal(mansard.faces.length, 4, "two slopes a side");
  const mp = sectionProfile(section({ shape: "mansard", pitch_a: 70, pitch_b: 70 }));
  // steep at the eave, flatter above the break
  assert.ok(mp.y(0.5) - mp.y(0) > mp.y(3.5) - mp.y(3), "the lower slope is the steep one");
  near(mp.y(mp.vr), mp.rh);
  // the parapet roof is flat
  near(sectionProfile(section({ shape: "parapet", eave_a: 3, eave_b: 3 })).y(5), 3);
});

test("a dormer sits on a side of its section, opens the slope under it and lifts the ceiling there", () => {
  // the 12 × 8 gable, ridge along x, eaves 2.5 m, 45°: a dormer on side a (the low-z side)
  const parent = section({ eave_a: 2.5, eave_b: 2.5, base: 2.5 });
  const d = proposeDormer(parent, "a", "d");
  assert.ok(d.dormer && d.axis === "z" && d.shape === "gable");
  near(d.x1 - d.x0, 2);
  near(d.z0, 0, 1e-6);
  near(d.eave_a, 3.9);
  // its ridge (3.9 + tan35) meets the 45° slope that far in
  const ridge = 3.9 + Math.tan((35 * Math.PI) / 180);
  near(d.z1, Math.round((ridge - 2.5) * 100) / 100, 0.011);
  assert.equal(dormerParent([parent, d], d), parent);
  const hole = dormerHole(parent, d)!;
  near(hole.u0, 5);
  near(hole.u1, 7);
  near(hole.v0, 0);
  // the slope with the hole falls into pieces around it, none of them over the hole
  const geom = sectionGeometry(parent, { u0: 0, u1: 0, a: 0, b: 0 });
  const pieces = cutHole(geom.faces[0], hole);
  assert.ok(pieces.length >= 3, `${pieces.length} pieces`);
  assert.ok(pieces.every((p) => !p.some(([u, v]) => u > hole.u0 + 0.01 && u < hole.u1 - 0.01 && v > hole.v0 + 0.01 && v < hole.v1 - 0.01)), "no corner inside the hole");
  // the opening under the dormer is the dormer's full width at the front and narrows towards the rear (the valleys)
  const strips = dormerHoles(parent, d);
  assert.ok(strips.length >= 3, `${strips.length} strips`);
  const width = (h: { u0: number; u1: number }) => h.u1 - h.u0;
  assert.ok(width(strips[0]) > 1.9, `front strip ${width(strips[0])}`);
  assert.ok(width(strips[strips.length - 1]) < width(strips[0]) - 0.3, "narrower at the rear");
  // under the dormer the ceiling is the dormer's roof, beside it the slope
  const b = { settings: { roof: { type: "custom" as const, pitch: 35, overhang: 0, sections: [parent, d] } } };
  const underDormer = roofUnderAt(b, 6, 0.5)!;
  const beside = roofUnderAt(b, 3, 0.5)!;
  assert.ok(underDormer > beside + 0.5, `dormer ${underDormer} above slope ${beside}`);
});

test("a roof drawn over an upper floor with a hole in its middle sits on the upper floor (#166)", async () => {
  const { wallTopUnder, sectionFloor } = await import("./roof-sections.ts");
  const { emptyBuilding, newFloor } = await import("./model.ts");
  const b = emptyBuilding();
  const room = (id: string, x0: number, z0: number, x1: number, z1: number) => ({ id, name: id, area_id: null, points: [[x0, z0], [x1, z0], [x1, z1], [x0, z1]] as [number, number][], floor_material: "wood" as const });
  // ground floor 10 × 8; the upper floor has two rooms left and right, a stairwell gap in the middle
  b.floors = [
    { ...newFloor("eg", "EG", 0), height: 2.5, rooms: [room("a", 0, 0, 10, 8)] },
    { ...newFloor("og", "OG", 2.75), height: 2.5, rooms: [room("l", 0, 0, 4, 8), room("r", 6, 0, 10, 8)] },
  ];
  const top = wallTopUnder(b, 0, 0, 10, 8);
  assert.equal(top, 5.25);
  assert.equal(sectionFloor(b, { base: top! })?.id, "og");
});

test("pulled apart, a roof rides with the loft under its slopes, a garage roof with its own floor (#202, D207)", () => {
  const b = emptyBuilding();
  b.floors = [
    { ...newFloor("eg", "EG", 0), height: 2.5, rooms: [rect("a", 0, 0, 12, 8), rect("g", 13, 0, 17, 6)] },
    { ...newFloor("og", "OG", 2.5), height: 2.5, rooms: [rect("b", 0, 0, 12, 8)] },
    { ...newFloor("sb", "Spitzboden", 5.3), height: 2, rooms: [rect("c", 3, 2, 9, 6)] },
  ];
  // the main roof stands on the OG (ridge 9 m), the loft lies under it; a dormer sits in its slope
  const main = section({ id: "main", base: 5, eave_a: 5, eave_b: 5 });
  const dormer = section({ id: "d", x0: 4, z0: 0, x1: 6, z1: 2, axis: "z", base: 5.5, eave_a: 6.5, eave_b: 6.5, pitch_a: 30, pitch_b: 30, dormer: true });
  const garage = section({ id: "gar", x0: 13, z0: 0, x1: 17, z1: 6, base: 2.5, eave_a: 2.5, eave_b: 2.5, pitch_a: 20, pitch_b: 20 });
  b.settings.roof = { type: "custom", pitch: 45, overhang: 0, sections: [main, dormer, garage] };
  const og = b.floors[1];
  assert.equal(roofRider(b, og, ["main"]), "sb");
  assert.equal(roofRider(b, og, ["d"]), "sb");
  assert.equal(roofRider(b, b.floors[0], ["gar"]), "eg");
});

test("a gable, hip or half-hip section may end differently at each end; without a choice it is as before (#466)", () => {
  const ov = { u0: 0.4, u1: 0.4, a: 0.4, b: 0.4 };
  // no end set: exactly the old geometry of each shape
  for (const shape of ["gable", "hip", "halfhip"] as const) {
    const plain = sectionGeometry(section({ shape }), ov);
    const same = sectionGeometry(section({ shape, end_u0: shape, end_u1: null }), ov);
    assert.deepEqual(same, plain, shape);
    assert.deepEqual(sectionEnds(section({ shape })), [shape, shape]);
  }
  assert.equal(sectionEnds(section({ shape: "pyramid", end_u0: "hip" })), null);
  // a hip at the left end only: three planes, the hip's ridge starts 4 m in (45°, 8 m deep), a gable wall on the right
  const one = sectionGeometry(section({ end_u0: "hip" }), ov);
  assert.equal(one.faces.length, 3);
  near(one.ridges[0][0][0], 4);
  near(one.ridges[0][1][0], 12 + 0.4);
  assert.equal(one.gables[0], null);
  assert.ok(one.gables[1] && one.gables[1].length === 3);
  // under the hipped end the roof comes down, at the gable end it keeps the full height
  near(sectionHeightAt(one, 0.5, 4)!, 3.5);
  near(sectionHeightAt(one, 11.5, 4)!, 7);
  // a hip shape with a half-hip on the right
  const mixed = sectionGeometry(section({ shape: "hip", end_u1: "halfhip" }), ov);
  assert.equal(mixed.faces.length, 4);
  assert.ok(mixed.gables[1] && mixed.gables[1].length === 4, "the half-hip's wall ends under its hip");
});

/** An L: a main roof along x (12 × 8, its ridge at z = 4) and a lower wing along z running into its slope (#605). */
const main = section({ id: "main", x0: -0.24, z0: -0.24, x1: 12.24, z1: 8.24, eave_a: 2.75, eave_b: 2.75, pitch_a: 40, pitch_b: 40, base: 2.75 });
const wing = section({ id: "wing", x0: 5.76, z0: 7.76, x1: 11.24, z1: 14.24, shape: "halfhip", axis: "z", eave_a: 2.75, eave_b: 2.75, pitch_a: 40, pitch_b: 40, base: 2.75 });

test("a wing running into the slope of a higher roof reaches on to its ridge line and is cut off where it goes under it (#605)", () => {
  const all = [main, wing];
  const j = wingJunction(all, wing);
  assert.ok(j && j.host === main && j.end === 0, "the wing's top end meets the main roof");
  assert.equal(wingJunction(all, main), null);
  // a section on its own, and a dormer, are no wings
  assert.equal(wingJunction([main], main), null);
  assert.equal(wingJunction([main, { ...wing, dormer: true }], { ...wing, dormer: true }), null);
  // drawn on to the ridge line (z = 4), a gable at that end, the half-hip at its free end
  const drawn = wingSection(wing, j!);
  near(drawn.z0, 4);
  near(drawn.z1, 14.24);
  assert.deepEqual(sectionEnds(drawn), ["gable", "halfhip"]);
  // what is left of the wing lies nowhere under the main roof's planes
  const ov = { u0: 0, u1: 0.4, a: 0.4, b: 0.4 };
  const mainGeo = sectionGeometry(main, { u0: 0.4, u1: 0.4, a: 0.4, b: 0.4 });
  const covers = coversIn(drawn, sectionCovers(main, mainGeo.faces));
  const pieces = sectionGeometry(drawn, ov).faces.flatMap((f) => cutUnder(f, covers));
  const fr = sectionFrame(drawn);
  for (const piece of pieces) {
    const cu = piece.reduce((a, q) => a + q[0], 0) / piece.length;
    const cv = piece.reduce((a, q) => a + q[1], 0) / piece.length;
    const cy = piece.reduce((a, q) => a + q[2], 0) / piece.length;
    const [x, z] = fr.at(cu, cv);
    // over the main roof's walls (under its overhang only its slab counts)
    if (z > 8.24) continue;
    const [mu, mv] = sectionUV(main, x, z);
    const roof = sectionHeightAt(mainGeo, mu, mv);
    assert.ok(roof === null || cy >= roof - 0.15, `a wing piece at ${x.toFixed(2)}, ${z.toFixed(2)} lies ${(roof! - cy).toFixed(2)} m under the main roof`);
  }
  // its ridge ends where it meets the main slope: 5.05 m high, the main slope reaches that 1.5 m in from the ridge
  const ridge = sectionGeometry(drawn, ov).ridges[0];
  const kept = lineOutside(ridge[0], ridge[1], covers);
  assert.equal(kept.length, 1);
  const start = Math.min(kept[0][0][0], kept[0][1][0]);
  near(start, 4 + (6.31 - 5.05) / Math.tan((40 * Math.PI) / 180), 0.05);
});

test("overlapping sections keep only what shows above the other; a single section is drawn as before (#466)", () => {
  const b = emptyBuilding();
  b.floors = [{ ...newFloor("eg", "EG", 0), height: 2.75, rooms: [rect("a", 0, 0, 12, 8), rect("b", 6, 8, 11, 14)] }];
  // one section alone: the same triangles as drawn by itself
  b.settings.roof = { type: "custom", pitch: 40, overhang: 0.4, sections: [main] };
  const alone = buildRoof(b)[0].solid.count;
  b.settings.roof = { type: "custom", pitch: 40, overhang: 0.4, sections: [main, wing] };
  const [part] = buildRoof(b);
  assert.ok(part.solid.count > alone);
  // no roof triangle lies well below another section's roof over that section's walls
  const tops = [main, wing].map((s) => ({ s, g: sectionGeometry(s, { u0: 0, u1: 0, a: 0, b: 0 }) }));
  const top = (x: number, z: number) =>
    Math.max(
      ...tops.map(({ s, g }) => {
        if (x < s.x0 + 0.02 || x > s.x1 - 0.02 || z < s.z0 + 0.02 || z > s.z1 - 0.02) return -Infinity;
        const [u, v] = sectionUV(s, x, z);
        return sectionHeightAt(g, u, v) ?? -Infinity;
      }),
    );
  const p = part.solid.p;
  for (let i = 0; i < p.length; i += 9) {
    const x = (p[i] + p[i + 3] + p[i + 6]) / 3;
    const y = (p[i + 1] + p[i + 4] + p[i + 7]) / 3 + part.floor.elevation + part.base;
    const z = (p[i + 2] + p[i + 5] + p[i + 8]) / 3;
    assert.ok(!(y < top(x, z) - 0.3), `a triangle at ${x.toFixed(2)}, ${z.toFixed(2)} lies under the roof`);
  }
});

test("a turned section: its frame, its footprint and the plan point back in its frame all turn about the pivot (#634)", () => {
  const plain = section();
  const turned = section({ rotation: 90, pivot: [6, 4] });
  assert.equal(sectionTurn(plain), null);
  // 90° clockwise in the plan about the middle: the ridge (along x) now runs along z
  const fp = sectionFrame(plain);
  const ft = sectionFrame(turned);
  const ridge0 = ft.at(fp.u0, 4);
  const ridge1 = ft.at(fp.u1, 4);
  near(ridge0[0], 6);
  near(ridge1[0], 6);
  near(Math.abs(ridge1[1] - ridge0[1]), 12);
  // there and back again
  const [u, v] = sectionUV(turned, ...ft.at(3, 2));
  near(u, 3);
  near(v, 2);
  // the footprint: 8 wide and 12 long now
  const poly = sectionPolygon(turned, 0);
  const xs = poly.map((p) => p[0]);
  const zs = poly.map((p) => p[1]);
  near(Math.max(...xs) - Math.min(...xs), 8);
  near(Math.max(...zs) - Math.min(...zs), 12);
  // on the turned section, not on the old rectangle's far corner
  assert.ok(onSection(turned, 6, -1.5));
  assert.ok(!onSection(turned, 11.5, 1));
  near(turnPoint(sectionTurn(turned), [12, 4])[0], 6);
});

test("walls end under a turned roof where it really lies; nothing changes for a roof that is not turned", () => {
  const plain = section();
  const turned = section({ rotation: 30 });
  const holder = (s: RoofSection) => ({ settings: { roof: { type: "custom" as const, pitch: 35, overhang: 0.4, sections: [s] } } });
  // the ridge of the turned roof runs through its middle at 30°: on it the roof is as high as the ridge
  const t = sectionTurn(turned)!;
  const onRidge = turnPoint(t, [9, 4]);
  near(roofUnderAt(holder(turned), onRidge[0], onRidge[1])!, roofUnderAt(holder(plain), 9, 4)!);
  // the old rectangle's corner lies outside the turned roof
  assert.equal(roofUnderAt(holder(turned), 11.8, 0.2), null);
});

test("a dormer on a turned section turns with it and still finds its parent and its hole (#634)", () => {
  const parent = section({ x1: 14, z1: 10, rotation: 25, pivot: [7, 5] });
  const d = proposeDormer(parent, "a", "d1");
  assert.equal(d.rotation, 25);
  assert.deepEqual(d.pivot, [7, 5]);
  assert.equal(dormerParent([parent, d], d), parent);
  const hole = dormerHole(parent, d)!;
  near(hole.u1 - hole.u0, 2, 1e-6);
  near(hole.v0, 0, 1e-6);
});

test("a cross gable at an angle on a bigger roof is cut by that roof like a wing, not given a dormer's hole", () => {
  const main = section({ x1: 14, z1: 10 });
  // a gable turned 35° standing on the main roof's slope (a bay's roof at an angle, the 45° gable from Discord)
  const bay = section({ id: "b", x0: 3.5, z0: 6, x1: 6, z1: 11, axis: "z", eave_a: 5.5, eave_b: 5.5, base: 5.4, rotation: 35, pivot: [4.75, 8.5] });
  assert.equal(dormerParent([main, bay], bay), main);
  assert.equal(turnedDormer([main, bay], bay), true);
  assert.equal(sectionsCut([main, bay], main, bay), true);
  // square to the ridge (0° or 90°) it stays a dormer with its hole
  const square = { ...bay, rotation: 90 };
  assert.equal(turnedDormer([main, square], square), false);
  assert.equal(sectionsCut([main, square], main, square), false);
  // a dormer turned along with its turned roof is still a dormer (#634)
  const tp = section({ x1: 14, z1: 10, rotation: 25, pivot: [7, 5] });
  const td = proposeDormer(tp, "a", "d1");
  assert.equal(turnedDormer([tp, td], td), false);
});

test("a turned wing is not joined at right angles: the other roof's planes cut it instead", () => {
  const main = section({ x1: 14, z1: 10 });
  const wing = section({ id: "w", x0: 4, z0: 8, x1: 10, z1: 16, axis: "z", eave_a: 3, eave_b: 3, rotation: 20 });
  assert.equal(wingJunction([main, wing], wing), null);
});

test("turning a roof takes its dormer along: both turn about the roof's point and the dormer stays on it", () => {
  const parent = section({ x1: 14, z1: 10 });
  const d = proposeDormer(parent, "a", "d1");
  const p: [number, number] = [7, 5];
  const tp = turnSectionAbout(parent, 40, p);
  const td = turnSectionAbout(d, 40, p);
  assert.equal(tp.rotation, 40);
  assert.deepEqual(tp.pivot, p);
  assert.equal(dormerParent([tp, td], td), tp);
  // the dormer's hole in its parent stays where it was
  const before = dormerHole(parent, d)!;
  const after = dormerHole(tp, td)!;
  for (const k of ["u0", "u1", "v0", "v1"] as const) near(after[k], before[k], 1e-6);
  // turning on and back again gives the roof as it was, its point kept
  const back = turnSectionAbout(turnSectionAbout(parent, 200, p), -200, p);
  assert.equal(back.rotation, 0);
  for (const k of ["x0", "z0", "x1", "z1"] as const) near(back[k], parent[k]);
});

test("a wall face a few millimetres outside its roof ends under that roof, not under a lower roof below (#1051)", () => {
  // the house roof starts at x = 1.113; the garage roof runs under it and beyond, its ridge 0.46 m above the top floor
  const main = section({ id: "main", axis: "z", x0: 1.113, z0: 0, x1: 9, z1: 10, eave_a: 5.18, eave_b: 5.18, pitch_a: 25, pitch_b: 25, base: 5.18 });
  const garage = section({ id: "garage", axis: "x", x0: -0.075, z0: 2, x1: 1.615, z1: 8, eave_a: 1.661, eave_b: 1.661, pitch_a: 26.57, pitch_b: 26.57, base: 1.661 });
  const b = { settings: { roof: { type: "custom" as const, pitch: 25, overhang: 0, sections: [main, garage] } } };
  const level = 2.74;
  const inside = roofUnderAt(b, 1.2, 5, level)!;
  // 6 mm outside the house roof: its edge counts (the eave, 5.18 m less the roof's thickness)
  near(roofUnderAt(b, 1.107, 5, level)!, 5.18 - 0.14);
  assert.ok(inside > 5, `under the house roof ${inside}`);
  // well outside: the garage roof alone, as before
  assert.ok(roofUnderAt(b, 0.9, 5, level)! < 3.1);
  // beside a roof with nothing else above: still no roof at all
  assert.equal(roofUnderAt({ settings: { roof: { ...b.settings.roof, sections: [main] } } }, 1.107, 5, level), null);
});
