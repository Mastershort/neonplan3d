import assert from "node:assert/strict";
import { test } from "node:test";
import { emptyBuilding, newFloor, rotatePoint, type Building, type Furniture, type RoofSection, type Room, type Vec2 } from "./model.ts";
import { roofUnderAt } from "./roof-sections.ts";
import { connectedRooms, inRooms, rotateSection, rotateSelection, selectionPivot, setSectionRotation } from "./rotate-selection.ts";

const near = (a: number, b: number, eps = 2e-3) => assert.ok(Math.abs(a - b) < eps, `${a} != ${b}`);
const nearPt = (a: readonly number[], b: readonly number[], eps = 2e-3) => a.forEach((v, i) => near(v, b[i], eps));
const rect = (id: string, x0: number, z0: number, x1: number, z1: number): Room => ({ id, name: id, area_id: null, points: [[x0, z0], [x1, z0], [x1, z1], [x0, z1]], floor_material: "wood" });
const item = (id: string, x: number, z: number, rotation = 0): Furniture => ({ id, type: "sofa", x, z, rotation, w: 1, d: 1, h: 1, variant: null });
const roof = (id: string, x0: number, z0: number, x1: number, z1: number, patch: Partial<RoofSection> = {}): RoofSection => ({ id, x0, z0, x1, z1, shape: "gable", axis: "x", eave_a: 2.8, eave_b: 2.8, pitch_a: 30, pitch_b: 30, base: 2.8, ...patch });

/** A house (0–10 × 0–8) and, apart from it, a garage (14–20 × 0–6) with a workshop behind (14–20 × 6–9), a loft over the garage. */
function site(): Building {
  const b = emptyBuilding();
  const eg = { ...newFloor("eg", "EG", 0), height: 2.8 };
  eg.rooms = [rect("house", 0, 0, 10, 8), rect("garage", 14, 0, 20, 6), rect("shop", 14, 6, 20, 9)];
  eg.openings = [{ id: "door", room_id: "garage", edge: 2, offset: 1, width: 2.5, type: "garage", sill: 0, height: 2.2, hinge: "left", leaves: 1, swing: "in", style: null, contact2: null, cover: null, contact: null, tilt: null }];
  eg.furniture = [item("car", 17, 3, 90), item("bench", 19.8, 7.5), item("sofa", 5, 4)];
  eg.placements = [{ entity_id: "light.garage", x: 15, z: 1, y: null, rotation: 10 }, { entity_id: "light.house", x: 2, z: 2, y: null }];
  eg.walls = [{ id: "rack", a: [15, 4], b: [18, 4] }, { id: "fence", a: [20, 2], b: [24, 2] }];
  eg.outdoor = [
    { id: "pit", type: "bed", points: [[15, 1], [16, 1], [16, 2]] },
    { id: "drive", type: "driveway", points: [[14, -5], [20, -5], [20, 0], [14, 0]] },
  ];
  const og = { ...newFloor("og", "OG", 2.8), height: 2.4 };
  og.rooms = [rect("loft", 14, 0, 20, 6), rect("attic", 0, 0, 10, 8)];
  og.furniture = [item("bed", 16, 2)];
  b.floors = [eg, og];
  b.settings.roof = { ...b.settings.roof, type: "custom", sections: [roof("main", -0.2, -0.2, 10.2, 8.2), roof("gar", 13.8, -0.2, 20.2, 9.2, { axis: "z", base: 5.2, eave_a: 5.2, eave_b: 5.2 })] };
  return b;
}

test("connected rooms: the garage with its workshop, not the house apart from them", () => {
  const b = site();
  assert.deepEqual(connectedRooms(b.floors[0], "garage").sort(), ["garage", "shop"]);
  assert.deepEqual(connectedRooms(b.floors[0], "house"), ["house"]);
  assert.deepEqual(connectedRooms(b.floors[0], "nope"), []);
  nearPt(selectionPivot(b.floors[0].rooms.filter((r) => r.id !== "house")), [17, 4.5]);
  // on an edge counts as inside, a little further out not
  assert.ok(inRooms([20.01, 3], b.floors[0].rooms));
  assert.ok(!inRooms([20.1, 3], b.floors[0].rooms));
});

test("turning the garage carries what is in it, leaves the rest, and keeps the doors on their edges", () => {
  const b = site();
  const before = structuredClone(b);
  const res = rotateSelection(b, { floorId: "eg", roomIds: ["garage", "shop"], angle: 18, otherFloors: true });
  const pivot: Vec2 = [17, 4.5];
  nearPt(res.pivot, pivot);
  const turn = (p: Vec2) => rotatePoint(p, pivot, 18);
  const [eg, og] = b.floors;
  // the rooms
  eg.rooms.find((r) => r.id === "garage")!.points.forEach((p, i) => nearPt(p, turn(before.floors[0].rooms[1].points[i])));
  assert.deepEqual(eg.rooms.find((r) => r.id === "house"), before.floors[0].rooms[0]);
  // furniture inside (also against the wall) turns and turns its angle; the sofa in the house stays
  const car = eg.furniture.find((f) => f.id === "car")!;
  nearPt([car.x, car.z], turn([17, 3]));
  assert.equal(car.rotation, 108);
  const bench = eg.furniture.find((f) => f.id === "bench")!;
  nearPt([bench.x, bench.z], turn([19.8, 7.5]));
  assert.deepEqual(eg.furniture.find((f) => f.id === "sofa"), before.floors[0].furniture[2]);
  // devices
  const lamp = eg.placements.find((p) => p.entity_id === "light.garage")!;
  nearPt([lamp.x, lamp.z], turn([15, 1]));
  assert.equal(lamp.rotation, 28);
  assert.deepEqual(eg.placements[1], before.floors[0].placements[1]);
  // a free wall inside goes along, one reaching out of the garage does not
  const rack = eg.walls!.find((w) => w.id === "rack")!;
  nearPt(rack.a, turn([15, 4]));
  nearPt(rack.b, turn([18, 4]));
  assert.deepEqual(eg.walls!.find((w) => w.id === "fence"), before.floors[0].walls![1]);
  // an outdoor area inside goes along, the driveway outside stays
  eg.outdoor.find((a) => a.id === "pit")!.points.forEach((p, i) => nearPt(p, turn(before.floors[0].outdoor[0].points[i])));
  assert.deepEqual(eg.outdoor.find((a) => a.id === "drive"), before.floors[0].outdoor[1]);
  // the opening hangs on the edge by its offset: unchanged
  assert.deepEqual(eg.openings, before.floors[0].openings);
  // the loft above turns with its furniture; the attic over the house stays
  og.rooms.find((r) => r.id === "loft")!.points.forEach((p, i) => nearPt(p, turn(before.floors[1].rooms[0].points[i])));
  assert.deepEqual(og.rooms.find((r) => r.id === "attic"), before.floors[1].rooms[1]);
  const bed = og.furniture[0];
  nearPt([bed.x, bed.z], turn([16, 2]));
  // the garage roof turns about the pivot and takes the angle; the house roof stays
  const gar = b.settings.roof.sections!.find((s) => s.id === "gar")!;
  nearPt([(gar.x0 + gar.x1) / 2, (gar.z0 + gar.z1) / 2], turn([17, 4.5]));
  near(gar.x1 - gar.x0, 6.4);
  near(gar.z1 - gar.z0, 9.4);
  assert.equal(gar.rotation, 18);
  assert.deepEqual(b.settings.roof.sections!.find((s) => s.id === "main"), before.settings.roof.sections![0]);
  assert.deepEqual(res, { pivot: res.pivot, rooms: 3, furniture: 3, placements: 1, walls: 1, outdoor: 1, sections: 1 });
});

test("the turned garage's roof stands over the turned garage", () => {
  const b = site();
  const before = structuredClone(b);
  rotateSelection(b, { floorId: "eg", roomIds: ["garage", "shop"], angle: -25, otherFloors: true });
  for (let x = 14.2; x < 20; x += 0.6) {
    for (let z = 0.2; z < 9; z += 0.6) {
      const was = roofUnderAt(before, x, z);
      const [tx, tz] = rotatePoint([x, z], [17, 4.5], -25);
      const now = roofUnderAt(b, tx, tz);
      assert.ok(was !== null && now !== null);
      near(now, was, 0.01);
    }
  }
  // where the garage's corner stood before, the turned roof is gone
  assert.equal(roofUnderAt(b, 20.1, -0.1), null);
});

test("without the other floors, only the chosen floor turns; no angle, nothing changes", () => {
  const b = site();
  const before = structuredClone(b);
  rotateSelection(b, { floorId: "eg", roomIds: ["garage"], angle: 0 });
  assert.deepEqual(b, before);
  rotateSelection(b, { floorId: "eg", roomIds: ["garage"], angle: 90, otherFloors: false });
  assert.deepEqual(b.floors[1], before.floors[1]);
  // a quarter turn of the 6 × 6 garage about its middle (17, 3): the same square, corners moved on
  nearPt(b.floors[0].rooms[1].points[0], [20, 0]);
  // the workshop was not chosen: it stays where it was, and so does its bench
  assert.deepEqual(b.floors[0].rooms[2], before.floors[0].rooms[2]);
  assert.deepEqual(b.floors[0].furniture[1], before.floors[0].furniture[1]);
  // the garage roof's middle (17, 4.5) lies in the garage: it turned too (a 90° turn of a z-ridge is an x-ridge)
  assert.equal(b.settings.roof.sections![1].rotation, 90);
});

test("a free-shaped flat roof turns its polygon instead of taking an angle", () => {
  const s = roof("f", 0, 0, 4, 2, { shape: "flat", points: [[0, 0], [4, 0], [4, 2], [0, 2]] });
  rotateSection(s, [2, 1], 90);
  assert.deepEqual(s.points, [[3, -1], [3, 3], [1, 3], [1, -1]]);
  assert.deepEqual([s.x0, s.z0, s.x1, s.z1], [1, -1, 3, 3]);
  assert.equal(s.rotation, undefined);
  // angles add up and wrap
  const r = roof("r", 0, 0, 4, 2, { rotation: 170 });
  rotateSection(r, [2, 1], 30);
  assert.equal(r.rotation, -160);
});

test("turning a roof section turns the dormers on it along", () => {
  const main = roof("main", 0, 0, 12, 8, { pitch_a: 45, pitch_b: 45, eave_a: 3, eave_b: 3, base: 3 });
  const dormer = roof("d", 5, 0, 7, 2.5, { axis: "z", dormer: true, eave_a: 4.4, eave_b: 4.4, base: 3, pitch_a: 35, pitch_b: 35 });
  const other = roof("o", 20, 0, 24, 4);
  const sections = [main, dormer, other];
  setSectionRotation(sections, "main", 30);
  assert.equal(main.rotation, 30);
  assert.equal(dormer.rotation, 30);
  nearPt([(dormer.x0 + dormer.x1) / 2, (dormer.z0 + dormer.z1) / 2], rotatePoint([6, 1.25], [6, 4], 30));
  assert.equal(other.rotation, undefined);
  // back to straight: the dormer comes back too
  setSectionRotation(sections, "main", 0);
  assert.equal(dormer.rotation, 0);
  nearPt([dormer.x0, dormer.z0, dormer.x1, dormer.z1], [5, 0, 7, 2.5]);
});
