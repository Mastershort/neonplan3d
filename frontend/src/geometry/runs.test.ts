import assert from "node:assert/strict";
import { test } from "node:test";
import type { Room } from "../model.ts";
import { cornerPoint, nearestOnPath, onWall, pathLength, pipePath, pointAlong, roundCorners, type NodeAt } from "./runs.ts";
import { roomEdgeFrame } from "./wall-frame.ts";

const nodes: Record<string, { x: number; z: number; y: number }> = {
  "port:sk": { x: 0, z: -5, y: -0.4 },
  "dev:pump": { x: 2, z: 0.3, y: 0.2 },
};
const nodeAt: NodeAt = (n) => nodes[n] ?? null;
const r3 = (p: number[]) => p.map((v) => Math.round(v * 1000) / 1000 + 0);

test("pipe path: an older pipe rises from its nodes to its height, a laid one follows its heights and may end loose", () => {
  const old = pipePath({ from: "port:sk", to: "dev:pump", points: [[0, 0]], height: -0.3 }, nodeAt);
  assert.deepEqual(old.map(r3), [
    [0, -0.4, -5],
    [0, -0.3, -5],
    [0, -0.3, 0],
    [2, -0.3, 0.3],
    [2, 0.2, 0.3],
  ]);
  // a suction line in the garage: out of the floor at the wall, up to 0.9 m, along the wall, down to the pump
  const laid = pipePath({ from: "port:sk", to: "dev:pump", points: [[0, 0.05], [0, 0.05], [1.2, 0.05], [2, 0.05]], heights: [-0.3, 0.9, 0.9, null], height: 0.2 }, nodeAt);
  assert.deepEqual(laid.map(r3), [
    [0, -0.4, -5],
    [0, -0.3, 0.05],
    [0, 0.9, 0.05],
    [1.2, 0.9, 0.05],
    [2, 0.2, 0.05],
    [2, 0.2, 0.3],
  ]);
  // a loose end: the path just stops at the last point; an older pipe without both nodes is not drawn
  assert.equal(pipePath({ from: "port:sk", to: "", points: [[0, 0]], heights: [0.5] }, nodeAt).length, 2);
  assert.equal(pipePath({ from: "port:sk", to: "", points: [[0, 0]] }, nodeAt).length, 0);
});

test("along a path: length, the point at a distance with its direction, the nearest point", () => {
  const path: [number, number, number][] = [
    [0, 0, 0],
    [0, 1, 0],
    [2, 1, 0],
  ];
  assert.equal(pathLength(path), 3);
  const v = pointAlong(path, 1.5)!;
  assert.deepEqual(r3(v.p), [0.5, 1, 0]);
  assert.deepEqual(r3(v.dir), [1, 0, 0]);
  assert.equal(v.seg, 1);
  // past the end: the end
  assert.deepEqual(r3(pointAlong(path, 9)!.p), [2, 1, 0]);
  const near = nearestOnPath(path, [1, 1.2, 0])!;
  assert.equal(Math.round(near.at * 1000) / 1000, 2);
  assert.equal(Math.round(near.d * 1000) / 1000, 0.2);
  assert.equal(near.seg, 1);
});

test("round corners: a right-angled bend becomes an arc of the radius, short pieces get a smaller one", () => {
  const bent = roundCorners(
    [
      [0, 0, 0],
      [0, 1, 0],
      [1, 1, 0],
    ],
    0.1,
    4,
  );
  // start, five arc points, end
  assert.equal(bent.length, 7);
  assert.deepEqual(r3(bent[1]), [0, 0.9, 0]);
  assert.deepEqual(r3(bent[5]), [0.1, 1, 0]);
  // the arc's middle lies inside the corner
  assert.ok(bent[3][0] > 0 && bent[3][1] < 1);
  const tight = roundCorners(
    [
      [0, 0, 0],
      [0, 0.1, 0],
      [1, 0.1, 0],
    ],
    0.1,
  );
  assert.deepEqual(r3(tight[1]), [0, 0.055, 0]);
  // straight on: unchanged
  assert.equal(
    roundCorners(
      [
        [0, 0, 0],
        [1, 0, 0],
        [2, 0, 0],
      ],
      0.1,
    ).length,
    3,
  );
});

test("on walls: a point in front of a wall, the corner where a run turns onto the next wall", () => {
  const room: Room = { id: "g", name: "Garage", area_id: null, points: [[0, 0], [4, 0], [4, 3], [0, 3]], floor_material: "concrete" };
  const back = roomEdgeFrame(room, 0);
  const right = roomEdgeFrame(room, 1);
  assert.deepEqual(r3(onWall(back, 1, 0.9, 0.05)), [1, 0.9, 0.05]);
  // 5 cm in front of the back wall and 5 cm in front of the right wall meet at (3.95, 0.05)
  assert.deepEqual(r3(cornerPoint(back, 0.05, right, 0.05)!), [3.95, 0.05]);
  // parallel walls never meet
  assert.equal(cornerPoint(back, 0.05, roomEdgeFrame(room, 2), 0.05), null);
});
