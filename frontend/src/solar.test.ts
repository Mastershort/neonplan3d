import assert from "node:assert/strict";
import { test } from "node:test";
import { emptyBuilding, newFloor, type Building, type RoofSection, type SolarField } from "./model.ts";
import { bestFace, clampField, faceAt, faceCompass, fieldFace, fieldModules, fieldPlan, fieldCenter, groundFace, proposeField, proposeGroundField, proposeWallField, roofFaces, turnGroundField, wallFaces } from "./solar.ts";

/** A 10 × 8 m house of one floor (walls 2.5 m high) with the given roof. */
function house(roof: Building["settings"]["roof"]): Building {
  const b = emptyBuilding();
  b.floors = [{ ...newFloor("eg", "EG", 0), height: 2.5, rooms: [{ id: "r", name: "R", area_id: null, points: [[0, 0], [10, 0], [10, 8], [0, 8]], floor_material: "wood" }] }];
  b.settings = { ...b.settings, wall_exterior: 0.24, roof };
  return b;
}

const near = (a: number, b: number, eps = 1e-6) => assert.ok(Math.abs(a - b) < eps, `${a} ≠ ${b}`);

test("a gable roof has two faces with the roof's pitch, modules lie in the slope", () => {
  const b = house({ type: "gable", pitch: 35, overhang: 0.4 });
  const faces = roofFaces(b);
  assert.deepEqual(faces.map((f) => f.key), ["main:a", "main:b"]);
  const f = faces[1];
  near(f.pitch, 35);
  // half the depth (8 m + 2 × 0.64 m) up the slope
  near(f.ls, (8 + 2 * 0.64) / 2 / Math.cos((35 * Math.PI) / 180));
  const field: SolarField = { id: "s", face: f.key, u: 1, v: 0.5, rows: 2, cols: 3, portrait: true };
  const mods = fieldModules(f, field);
  assert.equal(mods.length, 6);
  // every corner sits 7 cm above the slope: the slope's height grows by tan(35°) per metre towards the ridge
  for (const m of mods) {
    for (const p of m.corners) {
      const dz = Math.abs(p[2] - 4); // distance from the ridge line in the plan (z = 4)
      const roofY = 2.5 + (4.64 - dz) * Math.tan((35 * Math.PI) / 180);
      assert.ok(p[1] > roofY && p[1] - roofY < 0.1, `${p[1]} vs roof ${roofY}`);
    }
  }
});

test("modules that would leave the face are left out", () => {
  const b = house({ type: "gable", pitch: 35, overhang: 0.4 });
  const f = roofFaces(b)[0];
  const mods = fieldModules(f, { id: "s", face: f.key, u: 0, v: 0, rows: 10, cols: 20, portrait: true });
  assert.ok(mods.length > 0 && mods.length < 200);
  for (const m of mods) for (const p of m.corners) assert.ok(p[0] >= -0.65 && p[0] <= 10.65);
});

test("a proposed field fits its face completely", () => {
  const b = house({ type: "gable", pitch: 35, overhang: 0.4 });
  for (const f of roofFaces(b)) {
    const field = proposeField(f, "s");
    assert.equal(fieldModules(f, field).length, field.rows * field.cols);
    assert.ok(field.cols >= 6);
  }
});

test("hip roof faces narrow towards the ridge", () => {
  const sec: RoofSection = { id: "h", x0: 0, z0: 0, x1: 10, z1: 8, shape: "hip", axis: "x", eave_a: 2.5, eave_b: 2.5, pitch_a: 30, pitch_b: 30, base: 2.5 };
  const b = house({ type: "custom", pitch: 30, overhang: 0.4, sections: [sec] });
  const [a] = roofFaces(b);
  assert.equal(a.key, "h:a");
  // with the 0.4 m overhang: 10.8 m along the eave, the ridge 4 m in from the walls (4.4 m from the eave's end)
  const [l0, r0] = a.span(0);
  const [l1, r1] = a.span(a.ls);
  near(l0, 0);
  near(r0, 10.8);
  near(l1, 4.4);
  near(r1, 6.4);
  // the face starts at the eave, 0.4 m beyond the wall and lower by the overhang's rise
  near(a.o[2], -0.4);
  near(a.o[1], 2.5 - 0.4 * Math.tan((30 * Math.PI) / 180));
  const field = proposeField(a, "s");
  assert.equal(fieldModules(a, field).length, field.rows * field.cols);
});

test("on a flat roof the modules stand on tilted frames", () => {
  const b = house({ type: "flat", pitch: 0, overhang: 0.2 });
  const [f] = roofFaces(b);
  assert.ok(f.flat);
  const field = { ...proposeField(f, "s"), tilt: 20 };
  const [m] = fieldModules(f, field);
  // the upper edge is higher by the module height times sin(20°)
  near(m.corners[3][1] - m.corners[0][1], 1.72 * Math.sin((20 * Math.PI) / 180), 1e-9);
  assert.equal(m.posts.length, 4);
  // flipped: it leans the other way
  const [mf] = fieldModules(f, { ...field, flip: true });
  assert.ok(mf.corners[0][1] < mf.corners[3][1]);
  assert.notDeepEqual(mf.corners[0], m.corners[0]);
});

test("faces know their compass direction; the best face looks south", () => {
  const b = house({ type: "gable", pitch: 35, overhang: 0.4 });
  const faces = roofFaces(b);
  // north is up in the plan (-z): side a looks north, side b south
  assert.equal(faceCompass(faces[0], 0), "n");
  assert.equal(faceCompass(faces[1], 0), "s");
  assert.equal(bestFace(faces, 0)?.key, "main:b");
  // north pointing down the plan turns it round
  assert.equal(bestFace(faces, 180)?.key, "main:a");
  assert.equal(fieldPlan(faces[1], proposeField(faces[1], "s"))[0].length, 4);
});

test("rows of their own length (4, 4, 3), aligned, and single modules switched off", () => {
  const b = house({ type: "gable", pitch: 35, overhang: 0.4 });
  const f = roofFaces(b)[1];
  const field: SolarField = { id: "s", face: f.key, u: 1, v: 0.3, rows: 1, cols: 1, portrait: true, layout: [4, 4, 3] };
  assert.equal(fieldModules(f, field).length, 11);
  const xs = (fl: SolarField, row: number) => fieldModules(f, fl).filter((m) => m.cell.startsWith(`${row}:`)).map((m) => Math.min(...m.corners.map((p) => p[0])));
  // left aligned: the short row starts where the others start; right aligned: one module further
  assert.equal(Math.min(...xs(field, 2)), Math.min(...xs(field, 0)));
  near(Math.min(...xs({ ...field, align: "right" }, 2)) - Math.min(...xs(field, 0)), 1.13 + 0.025);
  const off = { ...field, skip: ["0:0", "2:2"] };
  assert.equal(fieldModules(f, off).length, 9);
  // the editor still sees the switched-off ones
  assert.equal(fieldModules(f, off, true).filter((m) => m.skipped).length, 2);
});

test("the face under a plan point, and a field kept on its face", () => {
  const b = house({ type: "gable", pitch: 35, overhang: 0.4 });
  const faces = roofFaces(b);
  // the south half of the plan (z > 4) is face b, the north half face a
  assert.equal(faceAt(faces, [5, 6])?.face.key, "main:b");
  assert.equal(faceAt(faces, [5, 2])?.face.key, "main:a");
  assert.equal(faceAt(faces, [30, 2]), null);
  const f = faces[1];
  const far: SolarField = { id: "s", face: f.key, u: 40, v: 9, rows: 2, cols: 3, portrait: true };
  const kept = clampField(f, far);
  assert.equal(fieldModules(f, { ...far, ...kept }).length, 6);
});

test("a garden field stands beside the house on frames, turned as wanted", () => {
  const b = house({ type: "gable", pitch: 35, overhang: 0.4 });
  const f = proposeGroundField(b, "g");
  const face = fieldFace(b, f)!;
  assert.ok(face.unbounded && face.flat);
  const mods = fieldModules(face, f);
  assert.equal(mods.length, 8);
  // beside the house (it reaches to x = 10), standing on the ground (-0.2 below the ground floor)
  for (const m of mods) for (const p of m.corners) assert.ok(p[0] > 12 && p[1] > -0.2);
  // turned by 90°, the rows run along z instead of x
  const turned = fieldModules(groundFace(b, { ...f, rotation: 90 }), { ...f, rotation: 90 });
  const spanX = (ms: typeof mods) => Math.max(...ms.flatMap((m) => m.corners.map((p) => p[0]))) - Math.min(...ms.flatMap((m) => m.corners.map((p) => p[0])));
  assert.ok(spanX(turned) < spanX(mods));
});

test("turning a garden field keeps it in place, turning about its middle", () => {
  const b = house({ type: "gable", pitch: 35, overhang: 0.4 });
  const f = proposeGroundField(b, "g");
  const before = fieldCenter(groundFace(b, f), f);
  const turned = { ...f, ...turnGroundField(b, f, 45) };
  const after = fieldCenter(groundFace(b, turned), turned);
  near(after[0], before[0], 0.01);
  near(after[1], before[1], 0.01);
  assert.equal(turned.rotation, 45);
});

test("house walls carry upright fields; close in front of a wall the wall wins over the roof", () => {
  const b = house({ type: "gable", pitch: 35, overhang: 0.4 });
  const walls = wallFaces(b);
  assert.equal(walls.length, 4);
  const south = walls.find((w) => faceCompass(w, 0) === "s")!;
  const f = proposeWallField(b, "w", "eg")!;
  assert.equal(f.face, south.key);
  const mods = fieldModules(south, f);
  assert.ok(mods.length >= 4);
  // upright: the module's lower and upper edge differ in height, not in the plan
  const m = mods[0];
  assert.ok(m.corners[3][1] - m.corners[0][1] > 1);
  near(m.corners[3][2], m.corners[0][2], 1e-9);
  // 10 cm in front of the south wall (outer face at z = 8.24) under the roof overhang: the wall
  const all = [...roofFaces(b), ...walls];
  assert.equal(faceAt(all, [5, 8.34])?.face.key, south.key);
  // 38 cm out, still under the overhang (the eave is at 8.64): the roof
  assert.equal(faceAt(all, [5, 8.62])?.face.key, "main:b");
});

test("a wall field in portrait fits after moving back, and tilts away from the wall", () => {
  const b = house({ type: "gable", pitch: 35, overhang: 0.4 });
  const f = proposeWallField(b, "w", "eg")!;
  const face = fieldFace(b, f)!;
  // portrait modules are 1.72 m high: at the old height they leave the wall, kept on it they fit
  const portrait = { ...f, portrait: true };
  assert.equal(fieldModules(face, portrait).length, 0);
  assert.ok(fieldModules(face, { ...portrait, ...clampField(face, portrait) }).length > 0);
  // tilted 30°: the upper edge stands off the wall by sin(30°) of the module height
  const tilted = { ...f, tilt: 30 };
  const [m] = fieldModules(face, tilted);
  const off = (p: number[]) => (p[0] - face.o[0]) * face.n[0] + (p[2] - face.o[2]) * face.n[2];
  near(off(m.corners[3]) - off(m.corners[0]), 1.13 * Math.sin(Math.PI / 6), 1e-9);
  assert.equal(m.posts.length, 2);
});

test("a hip roof offers its two hip ends for modules too (D158)", () => {
  const sec: RoofSection = { id: "h", x0: 0, z0: 0, x1: 10, z1: 8, shape: "hip", axis: "x", eave_a: 2.5, eave_b: 2.5, pitch_a: 30, pitch_b: 30, base: 2.5 };
  const b = house({ type: "custom", pitch: 30, overhang: 0.4, sections: [sec] });
  const faces = roofFaces(b);
  assert.deepEqual(faces.map((f) => f.key), ["h:a", "h:b", "h:c", "h:d"]);
  const [c, d] = faces.slice(2);
  // symmetric hip: the ends slope like the sides, look along -x and +x, and narrow to a point
  near(c.pitch, 30, 1e-4);
  near(d.pitch, 30, 1e-4);
  assert.ok(c.facing[0] < -0.99 && d.facing[0] > 0.99);
  near(c.lu, 8.8);
  const [l1, r1] = c.span(c.ls);
  near(l1, r1);
  const field = proposeField(c, "s");
  assert.ok(field.rows * field.cols > 0);
  assert.equal(fieldModules(c, field).length, field.rows * field.cols);
});
