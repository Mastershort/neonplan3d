import assert from "node:assert/strict";
import { test } from "node:test";
import type { BufferGeometry } from "three";
import type { Floor, Room, RoofSection } from "./model.ts";
import { newFloor } from "./model.ts";
import { activeSections, headroomLines, ROOF_THICK, roofUnderAt, sectionAbove, sectionCutsBelow } from "./roof-sections.ts";
import { buildFloorGeometry } from "./viewer/build.ts";

function rect(id: string, x0: number, z0: number, x1: number, z1: number): Room {
  return { id, name: id, area_id: null, points: [[x0, z0], [x1, z0], [x1, z1], [x0, z1]], floor_material: "wood" };
}

/** A gable section over x 0–8, z 0–6 with its ridge along x: eaves at 3.7 m, 40° slopes, walls from 3.7 m. */
const section: RoofSection = { id: "s", x0: -0.24, z0: -0.24, x1: 8.24, z1: 6.24, shape: "gable", axis: "x", eave_a: 3.7, eave_b: 3.7, pitch_a: 40, pitch_b: 40, base: 3.7 };
const building = { settings: { roof: { type: "custom" as const, pitch: 35, overhang: 0.4, sections: [section] } } };

function maxY(g: BufferGeometry, where: (x: number, z: number) => boolean): number {
  const p = g.getAttribute("position");
  let m = -Infinity;
  for (let i = 0; i < p.count; i++) if (where(p.getX(i), p.getZ(i))) m = Math.max(m, p.getY(i));
  return m;
}

test("the roof's underside follows the section's profile, minus the slab", () => {
  const tan40 = Math.tan((40 * Math.PI) / 180);
  // at the eave side the roof sits on the knee wall
  assert.ok(Math.abs(roofUnderAt(building, 4, -0.24)! - (3.7 - ROOF_THICK)) < 1e-9);
  // one metre in, it has risen by tan(40°)
  assert.ok(Math.abs(roofUnderAt(building, 4, 0.76)! - (3.7 + tan40 - ROOF_THICK)) < 1e-9);
  // outside the section there is no roof
  assert.equal(roofUnderAt(building, 20, 20), null);
  // a canopy does not count
  assert.equal(roofUnderAt({ settings: { roof: { ...building.settings.roof, sections: [{ ...section, open: true }] } } }, 4, 3), null);
});

test("an attic floor's walls end under the slope: knee walls at the eaves, gables up to the ridge", () => {
  const floor: Floor = { ...newFloor("og", "OG", 2.75), height: 2.5, rooms: [rect("a", 0, 0, 8, 6)] };
  const under = (x: number, z: number) => {
    const y = roofUnderAt(building, x, z);
    return y === null ? null : y - floor.elevation;
  };
  const geo = buildFloorGeometry(floor, 0.24, 0.12, [], [], under);
  const tan40 = Math.tan((40 * Math.PI) / 180);
  const knee = 3.7 - ROOF_THICK - 2.75;
  // the long wall along z = 0 is a knee wall: its inner face (0.24 m in from the eave) ends where the slope is
  const eaveWall = maxY(geo.walls, (x, z) => z < 0.1 && x > 1 && x < 7);
  assert.ok(Math.abs(eaveWall - (knee + 0.24 * tan40)) < 0.02, `knee wall top ${eaveWall}`);
  // the gable wall along x = 0 reaches almost the full height under the ridge (ridge at 3.7 + 3·tan40 ≈ 6.2 m)
  const gable = maxY(geo.walls, (x, z) => x < 0.1 && z > 2.5 && z < 3.5);
  assert.ok(gable > 2.4, `gable top ${gable}`);
  // without a roof the same wall is a plain box
  const plain = buildFloorGeometry(floor, 0.24, 0.12);
  assert.ok(Math.abs(maxY(plain.walls, () => true) - 2.5) < 1e-6);
});

test("a window stays below the slope", () => {
  const floor: Floor = {
    ...newFloor("og", "OG", 2.75),
    height: 2.5,
    rooms: [rect("a", 0, 0, 8, 6)],
    openings: [{ id: "w", room_id: "a", edge: 0, offset: 4, width: 1, type: "window", sill: 0.3, height: 1.4, hinge: "left", leaves: 1, swing: "in", cover: null, contact: null, contact2: null, tilt: null }],
  };
  const under = (x: number, z: number) => {
    const y = roofUnderAt(building, x, z);
    return y === null ? null : y - floor.elevation;
  };
  const geo = buildFloorGeometry(floor, 0.24, 0.12, [], [], under);
  // the opening sits on the room edge (z = 0), 0.24 m in from the eave
  const top = geo.openings[0].top;
  const roofThere = 3.7 - ROOF_THICK - 2.75 + 0.24 * Math.tan((40 * Math.PI) / 180);
  assert.ok(top <= roofThere - 0.02 + 1e-9 && top > roofThere - 0.1, `window top ${top}`);
});

test("headroom lines run along the ridge where the slope leaves 1.5 m", () => {
  const lines = headroomLines(building, 2.75, 1.5);
  // one line per slope, both along x
  assert.equal(lines.length, 2);
  for (const [p, q] of lines) {
    assert.ok(Math.abs(p[1] - q[1]) < 1e-9, "along the ridge");
    assert.ok(Math.abs(p[0] - q[0]) > 8, "across the whole section");
    // 1.5 m above the floor plus the slab: (2.75 + 1.5 + 0.14 - 3.7) / tan40 ≈ 0.82 m in from the eave
    const v = Math.min(p[1] + 0.24, 6.24 - p[1]);
    assert.ok(Math.abs(v - (2.75 + 1.5 + ROOF_THICK - 3.7) / Math.tan((40 * Math.PI) / 180)) < 1e-6, `at ${v}`);
  }
  // a flat section has no slope and no line
  assert.equal(headroomLines({ settings: { roof: { ...building.settings.roof, sections: [{ ...section, shape: "flat" }] } } }, 2.75, 1.5).length, 0);
});

test("a lower storey's roof under an upper floor does not cut that floor's walls (#621)", () => {
  // the reporter's plan: a narrow gable strip at the ground floor's eave height (2.66 m), its ridge only
  // poking a few centimetres through the upper floor's slab at 2.81 m
  const low: RoofSection = { id: "low", x0: 2.13, z0: 4.883, x1: 11.4, z1: 6.155, shape: "gable", axis: "x", eave_a: 2.66, eave_b: 2.66, pitch_a: 22, pitch_b: 22, base: 2.66 };
  const b = { settings: { roof: { type: "custom" as const, pitch: 22, overhang: 0.05, sections: [low] } } };
  const level = 2.81;
  // it would cut below the upper floor's ceiling …
  assert.ok(sectionCutsBelow(low, level + 2.51));
  // … but its underside never rises above that floor, so it is no ceiling there
  assert.equal(sectionAbove(low, level), false);
  assert.equal(roofUnderAt(b, 11.39, 5.58, level), null);
  // without a floor level (and for the ground floor) it still counts
  assert.ok(roofUnderAt(b, 11.39, 5.58) !== null);
  assert.equal(sectionAbove(low, 0), true);
  // an attic roof whose eave lies below the attic floor still is its ceiling
  assert.equal(sectionAbove(section, 3.8), true);
  assert.ok(roofUnderAt(building, 4, 3, 3.8) !== null);
});

test("sections switched off (a single gable roof again) no longer cut the walls (#621)", () => {
  // the reporter's plan: roof type "gable" with the sections of an earlier custom roof still stored
  const off = { settings: { roof: { ...building.settings.roof, type: "gable" as const } } };
  assert.equal(activeSections(off).length, 0);
  assert.equal(roofUnderAt(off, 4, 3), null);
  assert.equal(headroomLines(off, 2.75, 1.5).length, 0);
  assert.equal(activeSections(building).length, 1);
  assert.ok(roofUnderAt(building, 4, 3) !== null);
});

test("a loft wider than the half-hip above it leaves no wall stub standing out of the roof (#638)", () => {
  // half-hip over 7.5 × 10 m, eaves at 3.31 m, 45°, 0.7 m overhang; the loft floor at 5.32 m reaches the gables
  const halfhip: RoofSection = { id: "h", x0: -0.24, z0: -0.24, x1: 7.74, z1: 10.24, shape: "halfhip", axis: "z", eave_a: 3.31, eave_b: 3.31, pitch_a: 45, pitch_b: 45, base: 3.31, overhang: 0.7 };
  const b = { settings: { roof: { type: "custom" as const, pitch: 45, overhang: 0.7, sections: [halfhip] } } };
  const floor: Floor = { ...newFloor("sb", "Loft", 5.32), height: 1.88, rooms: [rect("l", 1.6, 0, 5.9, 10)] };
  const under = (x: number, z: number) => {
    const y = roofUnderAt(b, x, z);
    return y === null ? null : y - floor.elevation;
  };
  const geo = buildFloorGeometry(floor, 0.24, 0.12, [], [], under);
  const p = geo.walls.getAttribute("position");
  let worst = -Infinity;
  for (let i = 0; i < p.count; i++) {
    const r = roofUnderAt(b, p.getX(i), p.getZ(i));
    // above the roof's top face (its underside plus the slab) a wall would show outside
    if (r !== null) worst = Math.max(worst, p.getY(i) + floor.elevation - (r + ROOF_THICK));
  }
  assert.ok(worst < 0.005, `a wall stands ${worst.toFixed(3)} m out of the roof`);
  // the walls under the ridge are still there
  assert.ok(maxY(geo.walls, (x, z) => x > 3.5 && x < 4 && z < 0.1) > 0.5, "gable wall under the ridge");
});

test("a high attic floor's wall along the eaves is cut where the slope passes through its thickness (#855)", () => {
  // the attic room starts 2.23 m in from the eave of a 45° roof, on a floor at 5.3 m: at its outer face the
  // roof's underside lies 15 cm below the floor, at its inner face 9 cm above it
  const steep: RoofSection = { ...section, pitch_a: 45, pitch_b: 45, eave_a: 3.3, eave_b: 3.3, base: 3.3, z0: -0.1, z1: 8.1, x0: -0.24, x1: 8.24, axis: "x" };
  const b = { settings: { roof: { type: "custom" as const, pitch: 45, overhang: 0.4, sections: [steep] } } };
  const floor: Floor = { ...newFloor("db", "DB", 5.3), height: 1.9, rooms: [rect("a", 0.5, 2.13, 7.5, 5.87)] };
  const under = (x: number, z: number) => {
    const y = roofUnderAt(b, x, z);
    return y === null ? null : y - floor.elevation;
  };
  const geo = buildFloorGeometry(floor, 0.24, 0.12, [], [], under);
  const p = geo.walls.getAttribute("position");
  let worst = Infinity;
  for (let i = 0; i < p.count; i++) {
    const r = under(p.getX(i), p.getZ(i));
    if (r !== null) worst = Math.min(worst, r);
  }
  // no corner of a wall stands where the roof's underside lies deeper than the buried depth (6 cm below the floor)
  assert.ok(worst >= -0.06 - 1e-6, `a wall corner where the roof lies ${worst.toFixed(3)} m below the floor`);
  // the walls along the eaves are still there, cut to the slope
  assert.ok(maxY(geo.walls, (x, z) => z < 2.2 && x > 2 && x < 6) > 0.04, "the eave wall is kept");
});
