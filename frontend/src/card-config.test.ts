import assert from "node:assert/strict";
import { test } from "node:test";

test("a card's start view follows the screen: start_view_portrait while it is held upright, else start_view", async () => {
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

test("the screen counts as upright by its own orientation, and by the window's shape only where the browser does not tell it", async () => {
  const { isUpright } = await import("./card-config.ts");
  assert.equal(isUpright("portrait-primary", 800, 1280), true);
  assert.equal(isUpright("portrait-secondary", 800, 1280), true);
  assert.equal(isUpright("landscape-primary", 1280, 800), false);
  // a keyboard that pushes the page up makes the window wider than tall: the screen is still upright
  assert.equal(isUpright("portrait-primary", 800, 500), true);
  // a split screen on a lying tablet gives a tall window: the screen still lies
  assert.equal(isUpright("landscape-primary", 640, 800), false);
  // no orientation from the browser: the window's shape
  assert.equal(isUpright(undefined, 800, 1280), true);
  assert.equal(isUpright(null, 1280, 800), false);
  assert.equal(isUpright("", 800, 800), false);
});
