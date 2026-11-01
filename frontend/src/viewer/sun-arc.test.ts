import assert from "node:assert/strict";
import { test } from "node:test";
import { sunArcFrame } from "./sun-arc.ts";
import type { Building, Room } from "../model.ts";
import { emptyBuilding, newFloor } from "../model.ts";

function rect(id: string, x0: number, z0: number, x1: number, z1: number): Room {
  return { id, name: id, area_id: null, points: [[x0, z0], [x1, z0], [x1, z1], [x0, z1]], floor_material: "wood" };
}

/** A 15 × 10 m house on an 80 × 52 m plot: a lawn, a fence of free walls along its far side (#833). */
function plot(): Building {
  const b = emptyBuilding();
  const eg = { ...newFloor("eg", "EG", 0), rooms: [rect("a", 0, 0, 15, 10)] };
  eg.outdoor = [{ id: "lawn", type: "lawn", points: [[-20, -15], [40, -15], [40, 30], [-20, 30]] }] as Building["floors"][0]["outdoor"];
  eg.walls = [{ id: "fence", a: [-20, 37], b: [60, 37] }];
  b.floors = [eg];
  return b;
}

test("the sun arc stands around the house by default", () => {
  const b = plot();
  const f = sunArcFrame(b)!;
  assert.deepEqual([f.x, f.z, f.y], [7.5, 5, 0]);
  assert.ok(Math.abs(f.r - Math.hypot(15, 10) * 0.62) < 1e-9);
  // "house" said out loud is the same
  b.settings.sun_arc = "house";
  assert.deepEqual(sunArcFrame(b), f);
});

test("the sun arc can stand around the whole plot: outdoor areas and free walls count (#833)", () => {
  const b = plot();
  b.settings.sun_arc = "plot";
  const f = sunArcFrame(b)!;
  // from the lawn's left edge to the fence's end, from the lawn's top to the fence
  assert.deepEqual([f.x, f.z], [20, 11]);
  assert.ok(Math.abs(f.r - Math.hypot(80, 52) * 0.62) < 1e-9);
  // the ring takes in every corner of the plot
  for (const [x, z] of [[-20, -15], [60, 37]]) assert.ok(Math.hypot(x - f.x, z - f.z) < f.r);
});

test("no house, no arc; a small house keeps the arc's least size", () => {
  const b = emptyBuilding();
  b.floors = [newFloor("eg", "EG", 0)];
  b.settings.sun_arc = "plot";
  assert.equal(sunArcFrame(b), null);
  b.floors[0].rooms = [rect("a", 0, 0, 2, 2)];
  assert.equal(sunArcFrame(b)!.r, 7);
});
