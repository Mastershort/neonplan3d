import assert from "node:assert/strict";
import { test } from "node:test";
import { emptyBuilding, newFloor, ROOF_SHAPES, type Room, type RoofSection } from "./model.ts";
import { cutHole, dormerHole, dormerHoles, dormerParent, floorOutline, offsetPolygon, polygonBox, proposeDormer, ridgeHeight, roofSectionsFromRooms, roofUnderAt, sectionFrame, sectionGeometry, sectionHeightAt, sectionOverhang, sectionPolygon, sectionProfile, wallTopUnder } from "./roof-sections.ts";
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
