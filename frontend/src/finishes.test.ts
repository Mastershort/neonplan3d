import assert from "node:assert/strict";
import { test } from "node:test";
import { FINISH_ROLES, FINISH_SWATCHES, finishRolesOf, finishTargetOf, finishTargets } from "./finishes.ts";
import type { PackItem, PackPart } from "./packs.ts";

const item = (parts: Partial<PackPart>[], extra: Partial<PackItem> = {}) => ({ id: "x", name: { en: "x" }, size: [1, 1, 1], parts, ...extra }) as unknown as PackItem;

test("finishes: a front finish of an older plan still colours fronts and carcass alike", () => {
  // only fronts chosen (every plan before 3.5): the "white" carcass follows them
  assert.deepEqual(finishTargets({ finish: { front: "#5d7590" } }), { front: "#5d7590", white: "#5d7590" });
  assert.deepEqual(finishTargets({ finish: { wood: "#6b4a32", fabric: "#4a6a9a" } }), { wood: "#6b4a32", fabric: "#4a6a9a" });
  assert.deepEqual(finishTargets({}), {});
  assert.deepEqual(finishTargets({ finish: null }), {});
});

test("finishes: a carcass finish takes the white parts over, the fronts keep theirs (#1177)", () => {
  assert.deepEqual(finishTargets({ finish: { front: "#5d7590", body: "#edebe7" } }), { front: "#5d7590", white: "#edebe7" });
  // a carcass alone leaves the fronts to the look
  assert.deepEqual(finishTargets({ finish: { body: "#6b4a32" } }), { white: "#6b4a32" });
  // anything but "#rrggbb" counts as not set
  assert.deepEqual(finishTargets({ finish: { front: "#5d7590", body: "brown" } }), { front: "#5d7590", white: "#5d7590" });
});

test("finishes: the rows an item offers – fronts and carcass apart only where a pack tells them apart", () => {
  // a cabinet of an older pack release: everything "white", one row for fronts (as before)
  assert.deepEqual(finishRolesOf("pack:p:x", item([{ color: "white" }, { color: "white", top: "white" }])), ["front"]);
  // the same cabinet with its doors marked as fronts: fronts and carcass
  assert.deepEqual(finishRolesOf("pack:p:x", item([{ color: "white" }, { color: "front", top: "front" }, { color: "wood" }])), ["wood", "front", "body"]);
  // fronts without a white carcass: only fronts
  assert.deepEqual(finishRolesOf("pack:p:x", item([{ color: "dark" }, { color: "front" }])), ["front"]);
  // a part in a colour of its own that follows a finish brings that row (a gaming chair's red cover, #1175)
  assert.deepEqual(finishRolesOf("pack:p:x", item([{ color: "dark" }, { color: "#8a1f2e", finish: "fabric" }])), ["fabric"]);
  assert.deepEqual(finishRolesOf("pack:p:x", item([{ color: "#5a4030", finish: "wood" }, { color: "dark" }])), ["wood"]);
  assert.deepEqual(finishRolesOf("pack:p:x", item([{ color: "dark", finish: "body" }, { color: "white", glow: true }], { light: "spot" })), ["body"]);
  // a fixed colour without a finish stays out
  assert.deepEqual(finishRolesOf("pack:p:x", item([{ color: "#8a1f2e" }, { color: "dark" }])), []);
});

test("finishes: a lamp's glowing parts bring no row, its body does", () => {
  // a track spot: dark body, white glowing lenses – nothing a finish reaches (no row that does nothing)
  assert.deepEqual(finishRolesOf("pack:p:x", item([{ color: "dark" }, { color: "white", glow: true }], { light: "spot" })), []);
  // a round panel: a white rim around the glowing disc
  assert.deepEqual(finishRolesOf("pack:p:x", item([{ color: "white" }, { color: "white", glow: true }], { light: "panel" })), ["front"]);
  // no lamp: a glowing part (a speaker's light ring) keeps counting, as before
  assert.deepEqual(finishRolesOf("pack:p:x", item([{ color: "dark" }, { color: "white", glow: true }])), ["front"]);
});

test("finishes: built-in worktops take the wood finish, and every role has swatches", () => {
  assert.deepEqual(finishRolesOf("worktop", null), ["wood"]);
  assert.deepEqual(finishRolesOf("kitchen", null), ["wood"]);
  assert.deepEqual(finishRolesOf("island", null), ["wood"]);
  for (const role of FINISH_ROLES) assert.ok(FINISH_SWATCHES[role].length > 0 && FINISH_SWATCHES[role].every((s) => /^#[0-9a-f]{6}$/.test(s.hex)));
  assert.equal(finishTargetOf("body"), "white");
  assert.equal(finishTargetOf("front"), "front");
  assert.equal(finishTargetOf("fabric"), "fabric");
});
