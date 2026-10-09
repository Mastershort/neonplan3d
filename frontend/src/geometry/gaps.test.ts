import assert from "node:assert/strict";
import { test } from "node:test";
import type { Room } from "../model.ts";
import { closeGaps, suggestedThickness } from "./gaps.ts";
import { generateWalls } from "./walls.ts";

function rect(id: string, x0: number, z0: number, x1: number, z1: number, cw = false): Room {
  const pts: [number, number][] = [
    [x0, z0],
    [x1, z0],
    [x1, z1],
    [x0, z1],
  ];
  return { id, name: id, area_id: null, points: cw ? pts.reverse() : pts, floor_material: "wood" };
}

const bounds = (r: Room) => {
  const xs = r.points.map((p) => p[0]);
  const zs = r.points.map((p) => p[1]);
  return [Math.min(...xs), Math.min(...zs), Math.max(...xs), Math.max(...zs)];
};

test("two rooms with a 30 cm gap meet on the centre line and share one interior wall", () => {
  const { rooms, gaps } = closeGaps([rect("a", 0, 0, 4, 3), rect("b", 4.3, 0, 8, 3, true)]);
  assert.deepEqual(gaps, [0.3]);
  assert.deepEqual(bounds(rooms[0]), [0, 0, 4.15, 3]);
  assert.deepEqual(bounds(rooms[1]), [4.15, 0, 8, 3]);
  const { walls } = generateWalls(rooms, { exterior: 0.24, interior: 0.3 });
  assert.equal(walls.filter((w) => !w.exterior).length, 1);
  assert.equal(suggestedThickness(gaps), 0.3);
});

test("three rooms along one wall meet on one line", () => {
  // kitchen above, office and hall below with slightly different gaps
  const { rooms } = closeGaps([rect("k", 0, 0, 7, 3.9), rect("o", 0, 4.25, 3.4, 8), rect("h", 3.4, 4.3, 7, 8.6)]);
  const kitchenBottom = bounds(rooms[0])[3];
  assert.equal(bounds(rooms[1])[1], kitchenBottom);
  assert.equal(bounds(rooms[2])[1], kitchenBottom);
  assert.ok(kitchenBottom > 3.9 && kitchenBottom < 4.3);
});

test("a small overlap is resolved; far apart and side-by-side rooms stay untouched", () => {
  const overlap = closeGaps([rect("a", 0, 0, 4, 3), rect("b", 3.95, 0, 8, 3)]);
  assert.equal(bounds(overlap.rooms[0])[2], bounds(overlap.rooms[1])[0]);
  assert.equal(suggestedThickness(overlap.gaps), null);
  const far = closeGaps([rect("a", 0, 0, 4, 3), rect("b", 5, 0, 8, 3)]);
  assert.deepEqual(far.gaps, []);
  // rooms only touching at a corner region (no overlap along the edge) are not pulled together
  const diagonal = closeGaps([rect("a", 0, 0, 4, 3), rect("b", 4.3, 3.3, 8, 6)]);
  assert.deepEqual(diagonal.gaps, []);
});

test("edges a centimetre off the axis are straightened, shared corners move together (#333)", async () => {
  const { straightenEdges } = await import("./gaps.ts");
  const room = (id: string, points: [number, number][]) => ({ id, name: id, area_id: null, points, floor_material: "wood" });
  const a = room("gabinet", [[4.275, 0], [7.8, 0], [7.8, 5.5], [4.275, 5.489]]);
  const b = room("korytarz", [[4.275, 5.489], [7.8, 5.5], [7.8, 8.7], [4.283, 8.7]]);
  const c = room("bad", [[0, 8.7], [4.283, 8.7], [4.275, 12], [0, 12]]);
  const { rooms, fixed } = straightenEdges([a, b, c]);
  assert.ok(fixed >= 2);
  // 5.5 is used by more corners than 5.489, 4.275 more than 4.283
  assert.deepEqual(rooms[0].points[3], [4.275, 5.5]);
  assert.deepEqual(rooms[1].points[0], [4.275, 5.5]);
  assert.deepEqual(rooms[1].points[3], [4.275, 8.7]);
  assert.deepEqual(rooms[2].points[1], [4.275, 8.7]);
  // a deliberately slanted wall (20 cm over 3 m) stays as it is
  const slant = room("schraeg", [[0, 0], [3, 0.2], [3, 3], [0, 3]]);
  assert.equal(straightenEdges([slant]).fixed, 0);
});
