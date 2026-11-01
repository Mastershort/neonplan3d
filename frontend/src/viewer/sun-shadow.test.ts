import assert from "node:assert/strict";
import { test } from "node:test";
import { emptyBuilding, newFloor, type Building } from "../model.ts";
import { houseShadow, shadowBox, SHADOW_REACH, sunEdge } from "./sun-shadow.ts";

function box(height: number): Building {
  const b = emptyBuilding();
  const f = newFloor("eg", "EG", 0);
  f.height = height;
  f.rooms = [{ id: "r", name: "r", area_id: null, points: [[0, 0], [4, 0], [4, 4], [0, 4]], floor_material: "wood" }];
  b.floors = [f];
  return b;
}

test("a sun in the south at 45° throws the house's height to the north", () => {
  // light from the south (+z in the plan), the shadow falls north (-z) as far as the walls are tall
  const tris = houseShadow(box(2.5), [], [0, 1], 45, 0);
  const [x0, z0, x1, z1] = shadowBox(tris)!;
  assert.ok(Math.abs(z0 - -2.5) < 1e-6, String(z0));
  assert.equal(z1, 4);
  assert.equal(x0, 0);
  assert.equal(x1, 4);
});

test("a low sun stretches the shadow no further than its reach, and no sun throws none", () => {
  const [, z0] = shadowBox(houseShadow(box(2.5), [], [0, 1], 1, 0))!;
  assert.ok(Math.abs(z0 + SHADOW_REACH) < 1e-6, String(z0));
  assert.equal(houseShadow(box(2.5), [], [0, 1], -2, 0).length, 0);
  // the lawn 20 cm below the floor: the shadow starts at the walls' foot, measured from the lawn
  const [, low] = shadowBox(houseShadow(box(2.5), [], [0, 1], 45, -0.2))!;
  assert.ok(Math.abs(low - -2.7) < 1e-6, String(low));
});

test("a sun patch fades out at its edges and is full inside (#819)", () => {
  assert.equal(sunEdge(0, 2), 0);
  assert.equal(sunEdge(2, 2), 0);
  assert.equal(sunEdge(1, 2), 1);
  assert.ok(Math.abs(sunEdge(0.15, 2) - 0.5) < 1e-9);
  // a patch shorter than both fades together still peaks in its middle
  assert.equal(sunEdge(0.2, 0.4), 1);
  assert.ok(sunEdge(0.1, 0.4) > 0 && sunEdge(0.1, 0.4) < 1);
  // nothing for an empty or broken side
  assert.equal(sunEdge(0, 0), 0);
  assert.equal(sunEdge(0.5, -1), 0);
  assert.equal(sunEdge(Number.NaN, 2), 0);
});
