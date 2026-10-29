import assert from "node:assert/strict";
import { test } from "node:test";
import { EARLY_MS, gpuSafeMode, noteContextLost, type GuardStore } from "./gpu-guard.ts";

function memory(): GuardStore & { data: Map<string, string> } {
  const data = new Map<string, string>();
  return { data, getItem: (k) => data.get(k) ?? null, setItem: (k, v) => void data.set(k, v) };
}

test("a context lost right after the start turns the effects off for this version, a new version tries again (#827)", () => {
  const s = memory();
  assert.equal(gpuSafeMode("2.0.8", s), false);
  // lost 3 s after the start, the page shown: remembered
  assert.equal(noteContextLost("2.0.8", 1000, 4000, false, s), true);
  assert.equal(gpuSafeMode("2.0.8", s), true);
  // the next version starts with the effects again …
  assert.equal(gpuSafeMode("2.0.9", s), false);
  // … and turns them off once more only when it loses its context at the start too
  assert.equal(noteContextLost("2.0.9", 0, EARLY_MS - 1, false, s), true);
  assert.equal(gpuSafeMode("2.0.9", s), true);
});

test("a context lost later on, or while the page is in the background, never counts (#827)", () => {
  const s = memory();
  assert.equal(noteContextLost("2.0.8", 0, EARLY_MS + 1, false, s), false);
  assert.equal(noteContextLost("2.0.8", 0, 5000, true, s), false);
  assert.equal(gpuSafeMode("2.0.8", s), false);
});

test("blocked storage: nothing remembered, the effects stay on, nothing throws (#827)", () => {
  const broken: GuardStore = {
    getItem: () => {
      throw new Error("blocked");
    },
    setItem: () => {
      throw new Error("blocked");
    },
  };
  assert.equal(noteContextLost("2.0.8", 0, 100, false, broken), false);
  assert.equal(gpuSafeMode("2.0.8", broken), false);
  assert.equal(noteContextLost("2.0.8", 0, 100, false, null), false);
  assert.equal(gpuSafeMode("2.0.8", null), false);
});
