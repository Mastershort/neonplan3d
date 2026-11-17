import assert from "node:assert/strict";
import { test } from "node:test";
import { globePoint } from "./flyin.ts";

test("the globe shows the point it is turned to in its middle, the far side not at all", () => {
  const p = globePoint(53.7, 7.5, 53.7, 7.5)!;
  assert.ok(Math.abs(p[0]) < 1e-9 && Math.abs(p[1]) < 1e-9);
  assert.equal(globePoint(-53.7, -172.5, 53.7, 7.5), null);
  // a place east of the middle lies to the right
  assert.ok(globePoint(53.7, 20, 53.7, 7.5)![0] > 0);
});
