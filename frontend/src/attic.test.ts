import assert from "node:assert/strict";
import { test } from "node:test";
import type { BufferGeometry } from "three";
import type { Floor, Room, RoofSection } from "./model.ts";
import { newFloor } from "./model.ts";
import { headroomLines, ROOF_THICK, roofUnderAt } from "./roof-sections.ts";
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
