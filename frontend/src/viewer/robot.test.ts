import assert from "node:assert/strict";
import { test } from "node:test";
import { pointInPolygon, type Vec2 } from "../model.ts";
import { cleaningPath, crossesOutline, stepRobot, type RobotInfo, type RobotMotion } from "./robot.ts";

const room: Vec2[] = [[0, 0], [4, 0], [4, 3], [0, 3]];

test("a cleaning path runs in lanes along the longer side and stays inside the room", () => {
  const path = cleaningPath(room);
  assert.ok(path.length >= 16);
  for (const p of path) assert.ok(pointInPolygon(p, room));
  // lanes run along x (the longer side): consecutive points of a lane share their z
  assert.equal(path[0][1], path[1][1]);
  // back and forth
  assert.ok(path[1][0] > path[0][0]);
  assert.ok(path[3][0] < path[2][0]);
});

test("an L-shaped room keeps the robot out of the missing corner", () => {
  const l: Vec2[] = [[0, 0], [4, 0], [4, 2], [2, 2], [2, 4], [0, 4]];
  for (const p of cleaningPath(l)) assert.ok(pointInPolygon(p, l));
});

test("the robot turns before it drives and drives home when returning", () => {
  const info: RobotInfo = { id: "r", floorId: "f", rest: [0, 0], restHeading: 0, mode: "returning", room };
  const m: RobotMotion = { pos: [2, 0], heading: 0, path: [], next: 0 };
  // facing +z, the dock lies at -x: first it only turns
  stepRobot(m, info, 0.1);
  assert.deepEqual(m.pos, [2, 0]);
  for (let i = 0; i < 400 && stepRobot(m, info, 0.05); i++);
  assert.ok(Math.hypot(m.pos[0], m.pos[1]) < 0.03);
  assert.ok(Math.abs(m.heading) < 0.05);
  // resting robots do not move
  assert.equal(stepRobot(m, { ...info, mode: "idle" }, 0.1), false);
});

test("the lanes keep clear of furniture and never cross it between lanes", () => {
  const box: [number, number][] = [[0, 0], [5, 0], [5, 4], [0, 4]];
  // a wardrobe along the bottom wall, a sofa in the middle of the room
  const wardrobe: [number, number][] = [[0, 0], [2, 0], [2, 0.6], [0, 0.6]];
  const sofa: [number, number][] = [[2, 1.8], [4, 1.8], [4, 2.7], [2, 2.7]];
  const path = cleaningPath(box, 0.32, 0.22, [wardrobe, sofa]);
  assert.ok(path.length >= 4);
  const inAny = (p: [number, number]) => [wardrobe, sofa].some((o) => pointInPolygon(p, o));
  for (let i = 1; i < path.length; i++) {
    const [a, b] = [path[i - 1], path[i]];
    for (let t = 0; t <= 1; t += 0.02) assert.ok(!inAny([a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t]), `segment ${i} crosses furniture`);
  }
});

test("the way to the first lane across the notch of a U-shaped room crosses a wall; along an arm, or off the dock at a wall, it does not (#1210)", () => {
  const u: Vec2[] = [[0, 0], [2, 0], [2, 3], [4, 3], [4, 0], [6, 0], [6, 4], [0, 4]];
  assert.equal(crossesOutline(u, [1, 1], [5, 1]), true);
  assert.equal(crossesOutline(u, [1, 1], [1, 3.5]), false);
  assert.equal(crossesOutline(u, [1, 3.5], [5, 3.5]), false);
  // a dock standing right at the wall: the robot drives off it, it does not jump
  assert.equal(crossesOutline(u, [0, 2], [1, 3.5]), false);
  assert.equal(crossesOutline(u, [1, 0], [1, 2]), false);
});
