import assert from "node:assert/strict";
import { test } from "node:test";
import type { Vec2 } from "../model.ts";
import { turnedBackground } from "./background.ts";

test("a picture turned with the house turns about its middle and stays under the rooms (#1124)", () => {
  // a 10 m × 5 m picture with its corner at (0, 0); the house turns 90° clockwise about (5, 2.5)
  const [cx, cz] = [5, 2.5];
  const mv = (p: Vec2): Vec2 => [cx - (p[1] - cz), cz + (p[0] - cx)];
  const bg = { image_id: "img", x: 0, z: 0, width: 10, opacity: 0.5 };
  const t = turnedBackground(bg, 0.5, mv);
  // its middle stays at the turning point, the picture now stands upright around it
  assert.deepEqual([t.x + t.width / 2, t.z + (t.width * 0.5) / 2], [5, 2.5]);
  assert.equal(t.rotation, 90);
  // four turns: back where it was
  let r = bg as typeof t;
  for (let i = 0; i < 4; i++) r = turnedBackground(r, 0.5, mv);
  assert.deepEqual([r.x, r.z, r.rotation], [0, 0, 0]);
  // a point of the picture (its corner, 1 m in) lands where the turned room corner lands
  const off = turnedBackground({ ...bg, x: 2, z: 1 }, 0.5, mv);
  const middle: Vec2 = [off.x + 5, off.z + 2.5];
  assert.deepEqual(middle, mv([7, 3.5]));
});
