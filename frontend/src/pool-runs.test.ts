import assert from "node:assert/strict";
import { test } from "node:test";
import { newFloor, type Building, type OutdoorArea, type PoolPipe, type Room } from "./model.ts";
import { laidPipe, poolNodeAt, runsOnWall, splitPipe } from "./pool-runs.ts";
import { pipePath } from "./geometry/runs.ts";
import { roomEdgeFrame } from "./geometry/wall-frame.ts";

const garage: Room = { id: "g", name: "Garage", area_id: null, points: [[0, 0], [4, 0], [4, 3], [0, 3]], floor_material: "concrete" };
const pool: OutdoorArea = {
  id: "pool",
  type: "pool",
  points: [[0, -8], [4, -8], [4, -4], [0, -4]],
  pool: { ports: [{ id: "sk", kind: "skimmer", x: 1, z: -4 }], joints: [{ id: "t", x: 3, z: 0.05, y: 0.9 }] },
} as OutdoorArea;
const floor = { ...newFloor("eg", "EG", 0), rooms: [garage], outdoor: [pool] };
floor.furniture = [{ id: "pump", type: "pool_pump", x: 2, z: 0.4, rotation: 0, w: 0.7, d: 0.32, h: 0.4, variant: null, mount_y: null } as never];
const b = { floors: [floor], settings: {} } as unknown as Building;
const nodeAt = poolNodeAt(b, floor, pool);
const r3 = (p: readonly number[]) => p.map((v) => Math.round(v * 1000) / 1000 + 0);

test("pool nodes: the pump's connection, a T-piece, unknown nodes", () => {
  assert.deepEqual(nodeAt("dev:pump"), { x: 2, z: 0.4, y: 0.2 });
  assert.deepEqual(nodeAt("joint:t"), { x: 3, z: 0.05, y: 0.9 });
  assert.equal(nodeAt("dev:nope"), null);
  assert.equal(nodeAt(""), null);
});

test("an older level pipe becomes one with a height per point, along the same path", () => {
  const old: PoolPipe = { id: "p", from: "port:sk", to: "dev:pump", floor_id: "eg", points: [[1, 0.05]], height: -0.3 };
  const laid = laidPipe(old, nodeAt);
  assert.equal(laid.points.length, 3);
  assert.deepEqual(laid.heights, [-0.3, -0.3, -0.3]);
  assert.deepEqual(pipePath(laid, nodeAt).map(r3), pipePath(old, nodeAt).map(r3));
});

test("a T-piece splits a pipe: both parts meet at the joint, the valve stays on its part", () => {
  const p: PoolPipe = {
    id: "p",
    from: "dev:pump",
    to: "",
    floor_id: "eg",
    points: [[2, 0.05], [2, 0.05], [4, 0.05]],
    heights: [0.2, 0.9, 0.9],
    fittings: [
      { id: "v1", kind: "valve", at: 0.6, open: false },
      { id: "v2", kind: "valve", at: 2.5 },
    ],
  };
  const cut = splitPipe(p, nodeAt, [3, 0.95, 0.05], "t2", "p2")!;
  assert.deepEqual(cut.joint, { id: "t2", x: 3, z: 0.05, y: 0.9 });
  assert.equal(cut.first.to, "joint:t2");
  assert.equal(cut.second.from, "joint:t2");
  assert.equal(cut.second.to, "");
  assert.deepEqual(cut.first.points, [[2, 0.05], [2, 0.05]]);
  assert.deepEqual(cut.second.points, [[4, 0.05]]);
  assert.deepEqual(cut.first.fittings!.map((f) => f.id), ["v1"]);
  // pump connection 0.35 m to the wall, 0.7 m up, 1 m along: the second valve 2.5 m along lies 0.45 m into the second part
  assert.deepEqual(cut.second.fittings, [{ id: "v2", kind: "valve", at: 0.45 }]);
  const joined = (q: PoolPipe) => r3(pipePath(q, (n) => (n === "joint:t2" ? { x: 3, z: 0.05, y: 0.9 } : nodeAt(n)))[0]);
  assert.deepEqual(joined(cut.second), [3, 0.9, 0.05]);
});

test("runs on a wall: the pieces near the wall in wall coordinates, own points, fittings and loose ends", () => {
  const p: PoolPipe = {
    id: "p",
    from: "",
    to: "dev:pump",
    floor_id: "eg",
    points: [[1, 0.05], [1, 0.05], [2, 0.05]],
    heights: [-0.3, 0.9, 0.9],
    fittings: [{ id: "v", kind: "valve", at: 0.6 }],
  };
  // a pipe far out in the garden does not show
  const far: PoolPipe = { id: "far", from: "", to: "", floor_id: "eg", points: [[1, -5], [3, -5]], heights: [0, 0] };
  const runs = runsOnWall(roomEdgeFrame(garage, 0), [p, far], nodeAt);
  assert.equal(runs.length, 1);
  const r = runs[0];
  assert.deepEqual(
    r.points.map((q) => [q.i, q.s, q.y]),
    [
      [0, 1, -0.3],
      [1, 1, 0.9],
      [2, 2, 0.9],
    ],
  );
  // up 1.2 m, then 0.6 m: the valve sits on the riser at 0.3 m
  assert.deepEqual(
    r.fittings.map((f) => r3([f.s, f.y])),
    [[1, 0.3]],
  );
  assert.deepEqual(r.ends, [{ end: "from", s: 1, y: -0.3 }]);
  assert.equal(r.pieces.length, 3);
});
