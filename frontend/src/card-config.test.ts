import assert from "node:assert/strict";
import { test } from "node:test";
import { cardStartView, screenUpright } from "./card-config.ts";

test("a card may have a start view of its own for a screen held upright (#1228)", () => {
  const wide = { theta: 0.8, phi: 1, radius: 20 };
  const tall = { theta: 2.4, phi: 1, radius: 24 };
  // without the upright one nothing changes: the same view either way, and the plan's without any
  assert.equal(cardStartView({ start_view: wide }, false), wide);
  assert.equal(cardStartView({ start_view: wide }, true), wide);
  assert.equal(cardStartView({}, true), null);
  assert.equal(cardStartView(null, true), null);
  // with it: the upright one while upright, else the usual one (or the plan's)
  assert.equal(cardStartView({ start_view: wide, start_view_portrait: tall }, true), tall);
  assert.equal(cardStartView({ start_view: wide, start_view_portrait: tall }, false), wide);
  assert.equal(cardStartView({ start_view_portrait: tall }, false), null);
});

test("upright is what the screen says, else the screen's own shape", () => {
  assert.equal(screenUpright({ orientation: { type: "portrait-primary" }, width: 1280, height: 800 }), true);
  assert.equal(screenUpright({ orientation: { type: "landscape-secondary" }, width: 800, height: 1280 }), false);
  assert.equal(screenUpright({ width: 800, height: 1280 }), true);
  assert.equal(screenUpright({ width: 1280, height: 800 }), false);
  assert.equal(screenUpright(null), false);
});
