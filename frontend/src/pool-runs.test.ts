import assert from "node:assert/strict";
import { test } from "node:test";
import { newFloor, type Building, type OutdoorArea, type PoolPipe, type Room } from "./model.ts";
import { connectionsAt, laidPipe, planConnection, poolNodeAt, runsOnWall, splitPipe } from "./pool-runs.ts";
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
  assert.equal(cut.first.to, "joint:t2:in");
  assert.equal(cut.second.from, "joint:t2:out1");
  assert.equal(cut.second.to, "");
  assert.deepEqual(cut.first.points, [[2, 0.05], [2, 0.05]]);
  assert.deepEqual(cut.second.points, [[4, 0.05]]);
  assert.deepEqual(cut.first.fittings!.map((f) => f.id), ["v1"]);
  // pump connection 0.35 m to the wall, 0.7 m up, 1 m along: the second valve 2.5 m along lies 0.45 m into the second part
  assert.deepEqual(cut.second.fittings, [{ id: "v2", kind: "valve", at: 0.45 }]);
  const joined = (q: PoolPipe) => r3(pipePath(q, (n) => (n.startsWith("joint:t2") ? { x: 3, z: 0.05, y: 0.9 } : nodeAt(n)))[0]);
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

test("a new connection: through a wall hole out under the ground, split at a T-piece to two inlets", () => {
  const hole = { id: "h1", kind: "wall" as const, x: 2, z: 0.02, y: 0.4, nx: 0, nz: 1, depth: 0.3 };
  const area2: OutdoorArea = { ...pool, pool: { ports: [{ id: "in1", kind: "inlet", x: 0.5, z: -4 }, { id: "in2", kind: "inlet", x: 3.5, z: -4 }, { id: "sk", kind: "skimmer", x: 1, z: -4 }], joints: [hole] } } as OutdoorArea;
  const fl = { ...floor, outdoor: [area2] };
  const bb = { floors: [fl], settings: {} } as unknown as Building;
  const at = poolNodeAt(bb, fl, area2);
  let n = 0;
  const ids = (k: string) => `${k}${++n}`;
  const suction = (node: string) => node === "port:sk";
  const out = planConnection({ from: "dev:pump", vias: [{ kind: "valve" }, { kind: "hole", joint: "h1" }], to: ["port:in1", "port:in2"], floorId: "eg" }, at, [hole], suction, ids);
  // pump -> hole inside, hole outside -> T, T -> each inlet
  assert.deepEqual(out.pipes.map((p) => [p.from, p.to]), [
    ["dev:pump", "joint:h1:inside"],
    ["joint:h1:outside", `joint:${out.joints[0].id}:in`],
    [`joint:${out.joints[0].id}:out1`, "port:in1"],
    [`joint:${out.joints[0].id}:out2`, "port:in2"],
  ]);
  // the T-piece 1 m before the inlets' middle (2, -4), towards the hole, under the ground
  assert.deepEqual([out.joints[0].x, out.joints[0].z, out.joints[0].y], [2, -3, -0.3]);
  // the ball valve sits in the first pipe
  assert.equal(out.pipes[0].fittings?.[0].kind, "valve");
  // outside the hole the pipe first leaves the wall 50 cm straight out, then goes down
  const outside = out.pipes[1];
  assert.deepEqual([outside.points[0], outside.heights![0]], [[2, -0.83], 0.4]);
  assert.ok(outside.heights!.slice(1).every((h) => h === -0.3));
  // drawn from the skimmer's side the other way round: the water still runs to the pump
  const back = planConnection({ from: "dev:pump:suction", vias: [], to: ["port:sk"], floorId: "eg" }, at, [hole], suction, ids);
  assert.deepEqual([back.pipes[0].from, back.pipes[0].to], ["port:sk", "dev:pump:suction"]);
});

test("a hole passed the way it was chosen: in from outside (the drain's line comes up into the room)", () => {
  const hole = { id: "h1", kind: "floor" as const, x: 2, z: 0.3, y: 0 };
  const area2: OutdoorArea = { ...pool, pool: { ports: [{ id: "bd", kind: "drain", x: 2, z: -6 }], joints: [hole] } } as OutdoorArea;
  const fl = { ...floor, outdoor: [area2] };
  const at = poolNodeAt({ floors: [fl], settings: {} } as unknown as Building, fl, area2);
  let n = 0;
  const out = planConnection({ from: "port:bd", vias: [{ kind: "hole", joint: "h1", dir: "in" }], to: ["dev:pump:suction"], floorId: "eg" }, at, [hole], (x) => x === "port:bd", (k) => `${k}${++n}`);
  assert.deepEqual(out.pipes.map((p) => [p.from, p.to]), [
    ["port:bd", "joint:h1:outside"],
    ["joint:h1:inside", "dev:pump:suction"],
  ]);
});

test("connections: followed through holes to the next part, seen from both ends", () => {
  const holes = [{ id: "h", kind: "wall" as const, x: 0, z: 0, y: 0.4, nx: 0, nz: 1, depth: 0.3 }];
  const p = (id: string, from: string, to: string, fittings: PoolPipe["fittings"] = null): PoolPipe => ({ id, from, to, floor_id: "eg", points: [], fittings });
  const pipes = [p("a", "dev:f:return", "joint:h:inside", [{ id: "v", kind: "valve", at: 0.3 }]), p("b", "joint:h:outside", "joint:t:in"), p("c", "joint:t:out1", "port:in1")];
  const fromFilter = connectionsAt(pipes, holes, "dev:f:return");
  assert.deepEqual(fromFilter, [{ start: "dev:f:return", other: "joint:t:in", pipes: ["a", "b"], holes: [{ joint: "h", dir: "out" }], fittings: ["valve"] }]);
  const fromTee = connectionsAt(pipes, holes, "joint:t:in");
  assert.equal(fromTee[0].other, "dev:f:return");
  assert.deepEqual(fromTee[0].holes, [{ joint: "h", dir: "in" }]);
  assert.deepEqual(connectionsAt(pipes, holes, "joint:t:out2"), []);
});
