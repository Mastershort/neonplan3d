import assert from "node:assert/strict";
import { test } from "node:test";

test("a card's start view follows its shape: start_view_portrait while it stands upright, else start_view", async () => {
  const { startViewFor } = await import("./card-config.ts");
  const lying = { theta: 3.14, phi: 0.32, radius: 21 };
  const upright = { theta: 1.57, phi: 0.32, radius: 26 };
  assert.equal(startViewFor({ start_view: lying, start_view_portrait: upright }, false), lying);
  assert.equal(startViewFor({ start_view: lying, start_view_portrait: upright }, true), upright);
  // without a portrait view, start_view in both shapes
  assert.equal(startViewFor({ start_view: lying }, true), lying);
  assert.equal(startViewFor({ start_view: lying }, false), lying);
  // only a portrait view: upright it applies, lying the plan's own start view (null)
  assert.equal(startViewFor({ start_view_portrait: upright }, true), upright);
  assert.equal(startViewFor({ start_view_portrait: upright }, false), null);
  // no config yet
  assert.equal(startViewFor(undefined, true), null);
  assert.equal(startViewFor(null, false), null);
});
