import assert from "node:assert/strict";
import { test } from "node:test";
import { newFloor, type Furniture } from "../model.ts";
import { clampIntoRoom, keepInRoom, snapToWall } from "./snap.ts";

const floor = { ...newFloor("f", "F", 0), rooms: [{ id: "r", name: "R", area_id: null, points: [[0, 0], [4, 0], [4, 3], [0, 3]] as [number, number][], floor_material: "wood" }] };
const sofa = (x: number, z: number, rotation: number): Furniture => ({ id: "s", type: "sofa", x, z, rotation, w: 2, d: 0.9, h: 0.8, variant: null });

test("an item near a wall turns its back to it and sits flush", () => {
  // near the top wall (z = 0), slightly turned: back to the wall, 0.45 m (half depth) from it
  assert.deepEqual(snapToWall(floor, sofa(2, 0.6, 10), 0.12), { x: 2, z: 0.45, rotation: 0 });
  // near the left wall standing sideways: its side goes to the wall
  // (rotation 0 near the left wall: the sofa's left side, half its width away, goes to the wall)
  const side = snapToWall(floor, sofa(1.1, 1.5, 0), 0.12)!;
  assert.equal(side.rotation, 0);
  assert.ok(Math.abs(side.x - 1) < 1e-9);
});

test("items in the middle of the room stay where they are", () => {
  assert.equal(snapToWall(floor, sofa(2, 1.5, 0), 0.12), null);
});

test("a drag stays in the room it started in: it slides along the wall or stops", () => {
  // inside: as dragged
  assert.deepEqual(keepInRoom(floor, 2, 1.5, 3, 2), [3, 2]);
  // through the right wall (x = 4): slides along it, keeping the new z
  assert.deepEqual(keepInRoom(floor, 3.5, 1.5, 4.5, 2), [3.5, 2]);
  // through the top wall: keeps the new x
  assert.deepEqual(keepInRoom(floor, 2, 0.5, 2.5, -0.5), [2.5, 0.5]);
  // through a corner: stops
  assert.deepEqual(keepInRoom(floor, 3.8, 2.8, 4.5, 3.5), [3.8, 2.8]);
  // started outside every room: free
  assert.deepEqual(keepInRoom(floor, 8, 8, 9, 9), [9, 9]);
});

test("clampIntoRoom: a cabinet pushed into the wall stops at the wall face, in a corner at both walls", () => {
  const floor = newFloor("eg", "EG", 0);
  floor.rooms = [
    { id: "k", name: "Küche", area_id: null, points: [[0, 0], [4, 0], [4, 3], [0, 3]], floor_material: "tiles" },
    { id: "f", name: "Flur", area_id: null, points: [[0, 3], [4, 3], [4, 5], [0, 5]], floor_material: "tiles" },
  ];
  const cab = { x: 2, z: 0.2, w: 0.8, d: 0.35, rotation: 0 };
  // pushed 30 cm towards the outer wall (z = 0): its back stops at z = 0
  assert.deepEqual(clampIntoRoom(floor, cab, 2, -0.1, 0.12), [2, 0.175]);
  // pushed into the corner: also stops at x = 0
  assert.deepEqual(clampIntoRoom(floor, cab, -0.3, -0.1, 0.12), [0.4, 0.175]);
  // towards the shared wall with the hall (z = 3): its face stands half the interior wall into the kitchen
  assert.deepEqual(clampIntoRoom(floor, { ...cab, z: 2.7, rotation: 180 }, 2, 3.1, 0.12), [2, 2.765]);
  // free in the room: unchanged
  assert.deepEqual(clampIntoRoom(floor, cab, 2, 1.5, 0.12), [2, 1.5]);
});
