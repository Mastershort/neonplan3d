import assert from "node:assert/strict";
import { test } from "node:test";
import type { Vec2 } from "./model.ts";
import { gableHouse } from "./surround-roof.ts";

const box = (x0: number, z0: number, x1: number, z1: number): Vec2[] => [[x0, z0], [x1, z0], [x1, z1], [x0, z1]];

test("a neighbour's house gets a gable roof along its longer side and keeps its height (#1109)", () => {
  const g = gableHouse(box(0, 0, 12, 8), 8)!;
  assert.ok(g);
  // the ridge runs along x in the middle of the 8 m: the map's height is the ridge
  assert.ok(Math.abs(g.height(6, 4) - 8) < 1e-9);
  assert.ok(Math.abs(g.height(0, 4) - 8) < 1e-9);
  // the eaves at both long sides, lower than the ridge but above half the house
  assert.ok(Math.abs(g.height(6, 0) - g.eave) < 1e-9);
  assert.ok(Math.abs(g.height(6, 8) - g.eave) < 1e-9);
  assert.ok(g.eave < 8 && g.eave >= 8 * 0.55 - 1e-9);
  // two halves that meet at the ridge
  assert.equal(g.halves.length, 2);
  for (const h of g.halves) assert.equal(h.filter((p) => g.onRidge(p)).length, 2);
});

test("a turned house has its ridge along its own long side", () => {
  const a = Math.PI / 6;
  const turn = ([x, z]: Vec2): Vec2 => [x * Math.cos(a) - z * Math.sin(a), x * Math.sin(a) + z * Math.cos(a)];
  const g = gableHouse(box(0, 0, 10, 6).map(turn), 7)!;
  const [mx, mz] = turn([5, 3]);
  const [ex, ez] = turn([9, 3]);
  assert.ok(Math.abs(g.height(mx, mz) - 7) < 1e-6);
  assert.ok(Math.abs(g.height(ex, ez) - 7) < 1e-6);
});

test("halls, towers and winding buildings stay blocks", () => {
  assert.equal(gableHouse(box(0, 0, 40, 25), 8), null, "too wide");
  assert.equal(gableHouse(box(0, 0, 12, 8), 20), null, "too high");
  assert.equal(gableHouse([[0, 0], [10, 0], [10, 5]], 6), null, "a triangle");
  // an L: fills little of its box
  assert.equal(gableHouse([[0, 0], [12, 0], [12, 3], [3, 3], [3, 12], [0, 12]], 6), null);
});
