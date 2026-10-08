import assert from "node:assert/strict";
import { test } from "node:test";
import { newFloor, type Room } from "../model.ts";
import { netRoomArea } from "./area.ts";

const rect = (id: string, x0: number, z0: number, x1: number, z1: number): Room => ({ id, name: id, area_id: null, points: [[x0, z0], [x1, z0], [x1, z1], [x0, z1]], floor_material: "wood" });
const opts = { exterior: 0.3, interior: 0.2 };

test("net area: outer walls grow outwards, a shared wall takes half its thickness from each room (#216)", () => {
  const floor = { ...newFloor("eg", "EG", 0), rooms: [rect("a", 0, 0, 4, 3), rect("b", 4, 0, 7, 3)] };
  assert.ok(Math.abs(netRoomArea(floor.rooms[0], floor, opts) - (12 - 0.1 * 3)) < 1e-6);
  assert.ok(Math.abs(netRoomArea(floor.rooms[1], floor, opts) - (9 - 0.1 * 3)) < 1e-6);
  // a room on its own keeps its drawn area
  const alone = { ...newFloor("og", "OG", 3), rooms: [rect("c", 0, 0, 4, 3)] };
  assert.ok(Math.abs(netRoomArea(alone.rooms[0], alone, opts) - 12) < 1e-6);
});

test("net area: a free wall in front of the outer wall takes its footprint and the gap behind it", () => {
  const floor = { ...newFloor("eg", "EG", 0), rooms: [rect("flur", 0, 0, 4, 3)], walls: [{ id: "vw", a: [0.3, 0.5] as [number, number], b: [0.3, 2.5] as [number, number], thickness: 0.1 }] };
  // wall 0.1 × 2 m, gap 0.3 − 0.05 = 0.25 m over 2 m
  assert.ok(Math.abs(netRoomArea(floor.rooms[0], floor, opts) - (12 - 0.2 - 0.5)) < 1e-6);
});

test("clipping works for both orientations of the clip polygon", async () => {
  const { clipConvex, isConvex } = await import("./area.ts");
  const room: [number, number][] = [[0, 0], [4, 0], [4, 3], [0, 3]];
  const hole: [number, number][] = [[3, 1], [5, 1], [5, 2], [3, 2]];
  const area = (p: [number, number][]) => Math.abs(p.reduce((s, q, i) => s + q[0] * p[(i + 1) % p.length][1] - p[(i + 1) % p.length][0] * q[1], 0)) / 2;
  assert.ok(Math.abs(area(clipConvex(room, hole)) - 1) < 1e-9);
  assert.ok(Math.abs(area(clipConvex(room, [...hole].reverse())) - 1) < 1e-9);
  assert.equal(isConvex(hole), true);
  assert.equal(isConvex([[0, 0], [2, 0], [2, 1], [1, 1], [1, 2], [0, 2]]), false);
});
