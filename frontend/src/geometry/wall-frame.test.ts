import assert from "node:assert/strict";
import { test } from "node:test";
import { newFloor, type Furniture, type Room } from "../model.ts";
import { furnitureOnWall, fromWall, openingsOnWall, roomEdgeFrame, slideAlong, toWall } from "./wall-frame.ts";

const room = (id: string, x0: number, z0: number, x1: number, z1: number): Room => ({ id, name: id, area_id: null, points: [[x0, z0], [x1, z0], [x1, z1], [x0, z1]], floor_material: "wood" });
const item = (id: string, type: string, x: number, z: number, rotation: number, w: number, d: number, h: number, mount_y: number | null = null): Furniture =>
  ({ id, type, x, z, rotation, w, d, h, variant: null, entity: null, power: null, mount_y }) as Furniture;

test("wall frame: the normal points into the room, s runs to the right seen from inside", () => {
  const r = room("r", 0, 0, 4, 3);
  const top = roomEdgeFrame(r, 0);
  assert.deepEqual(top.n.map((v) => v + 0), [0, 1]);
  assert.equal(top.length, 4);
  assert.equal(top.rightward, true);
  const bottom = roomEdgeFrame(r, 2);
  assert.deepEqual([Math.round(bottom.n[0]) + 0, Math.round(bottom.n[1]) + 0], [0, -1]);
  assert.equal(bottom.rightward, true);
  // the same room drawn the other way round: the normals still point inside
  const rev: Room = { ...r, points: [...r.points].reverse() };
  const e = roomEdgeFrame(rev, 0);
  const mid = [(e.a[0] + e.b[0]) / 2 + e.n[0] * 0.5, (e.a[1] + e.b[1]) / 2 + e.n[1] * 0.5];
  assert.ok(mid[0] > 0 && mid[0] < 4 && mid[1] > 0 && mid[1] < 3);
  // its first edge is the bottom wall drawn left to right: seen from inside, s grows to the left (the view mirrors it)
  assert.equal(e.rightward, false);
  const p = fromWall(top, 1.5, 0.3);
  assert.deepEqual(toWall(top, p), { s: 1.5, d: 0.3 });
});

test("wall items: furniture at the wall with its height, doors and windows of both rooms, the neighbour's sofa not", () => {
  const f = newFloor("eg", "EG", 0);
  const a = room("a", 0, 0, 4, 3);
  const b = room("b", 0, -3, 4, 0);
  f.rooms = [a, b];
  f.furniture = [
    item("tv", "tv_wall", 2, 0.06, 0, 1.3, 0.08, 0.75),
    item("shelf", "shelf", 0.6, 0.2, 0, 0.9, 0.35, 1.9),
    item("cab", "kitchen_wall", 3, 0.2, 0, 0.8, 0.35, 0.7, 1.5),
    item("table", "table", 2, 1.5, 0, 1.6, 0.9, 0.75),
    item("sofa_b", "sofa", 2, -0.5, 180, 2.2, 0.9, 0.82),
  ];
  f.openings = [{ id: "door", room_id: "b", edge: 2, offset: 3, width: 0.9, type: "door", sill: 0, height: 2.05, hinge: "left", leaves: 1, swing: "in", cover: null, contact: null, contact2: null, tilt: null }] as never;
  const w = roomEdgeFrame(a, 0);
  const items = furnitureOnWall(w, f, a);
  assert.deepEqual(items.map((i) => i.id).sort(), ["cab", "shelf", "tv"]);
  const cab = items.find((i) => i.id === "cab")!;
  assert.equal(cab.y0, 1.5);
  assert.equal(Math.round(cab.y1 * 100) / 100, 2.2);
  const tv = items.find((i) => i.id === "tv")!;
  // a wall TV hangs centred at 1.3 m
  assert.equal(Math.round(tv.y0 * 1000) / 1000, 0.925);
  const doors = openingsOnWall(w, f);
  assert.equal(doors.length, 1);
  // the neighbour's edge runs the other way: its offset 3 from (4, 0) is s = 1 from (0, 0)
  assert.equal(Math.round(doors[0].s0 * 100) / 100, 0.55);
  assert.deepEqual(slideAlong(w, { x: 0.6, z: 0.2 }, 0.25), { x: 0.85, z: 0.2 });
});
