import assert from "node:assert/strict";
import { test } from "node:test";
import { lineFlows, majorOnly, markerEmoji, markerPath, sparkPoints } from "./module-scene.ts";

const red: [number, number, number] = [1, 0, 0];
const blue: [number, number, number] = [0, 0, 1];

test("a line becomes one flow piece per straight piece, the distance running on across the corners", () => {
  const got = lineFlows([{ kind: "line", floorId: "eg", points: [[0, 0.03, 0], [2, 0.03, 0], [2, 0.03, 3]], colors: [red], flow: 800 }]);
  assert.equal(got.length, 2);
  assert.deepEqual(got.map((f) => f.dist), [0, 2]);
  assert.deepEqual(got[1].a, [2, 0.03, 0]);
  assert.deepEqual(got.map((f) => f.power), [800, 800]);
  assert.deepEqual(got[0].color, red);
});

test("colours run along the line: per point, or spread over its length", () => {
  const perPoint = lineFlows([{ kind: "line", floorId: "eg", points: [[0, 0, 0], [1, 0, 0], [2, 0, 0]], colors: [red, red, blue], flow: 0 }]);
  assert.deepEqual(perPoint.map((f) => f.color), [red, [0.5, 0, 0.5]]);
  const spread = lineFlows([{ kind: "line", floorId: "eg", points: [[0, 0, 0], [3, 0, 0], [4, 0, 0]], colors: [red, blue], flow: 0 }]);
  // the first piece's middle lies at 1.5 of 4 m, the second's at 3.5
  assert.deepEqual(spread[0].color.map((v) => +v.toFixed(3)), [0.625, 0, 0.375]);
  assert.deepEqual(spread[1].color.map((v) => +v.toFixed(3)), [0.125, 0, 0.875]);
});

test("a line too short or without points is left out; a resting line has no power", () => {
  assert.deepEqual(lineFlows([{ kind: "line", floorId: "eg", points: [[0, 0, 0]], colors: [red], flow: 100 }]), []);
  assert.deepEqual(lineFlows([{ kind: "line", floorId: "eg", points: [[0, 0, 0], [0.001, 0, 0]], colors: [red], flow: 100 }]), []);
  assert.equal(lineFlows([{ kind: "line", floorId: "eg", points: [[0, 0, 0], [1, 0, 0]], colors: [red], flow: -5 }])[0].power, 0);
});

test("a small curve: the lowest value at the bottom, the highest at the top, spread over the width", () => {
  assert.equal(sparkPoints([1, 3, 2], 100, 22), "0,21 50,1 100,11");
  assert.equal(sparkPoints([5], 100, 22), "");
  // a flat line sits at the bottom instead of dividing by nothing
  assert.equal(sparkPoints([2, 2], 10, 10), "0,9 10,9");
});

test("a line may be wider than a cable (kept within 0.5 … 3)", () => {
  const [wide] = lineFlows([{ kind: "line", floorId: "eg", points: [[0, 0, 0], [1, 0, 0]], colors: [red], flow: 0, width: 2 }]);
  assert.equal(wide.width, 2);
  const [huge] = lineFlows([{ kind: "line", floorId: "eg", points: [[0, 0, 0], [1, 0, 0]], colors: [red], flow: 0, width: 9 }]);
  assert.equal(huge.width, 3);
  assert.equal("width" in lineFlows([{ kind: "line", floorId: "eg", points: [[0, 0, 0], [1, 0, 0]], colors: [red], flow: 0 }])[0], false);
});

test("a pipe keeps its look and its views; a cable has neither", () => {
  const [pipe] = lineFlows([{ kind: "line", floorId: "eg", points: [[0, 0, 0], [1, 0, 0]], colors: [red], flow: 300, look: "pipe", views: "house" }]);
  assert.equal(pipe.pipe, true);
  assert.equal(pipe.house, true);
  const [cable] = lineFlows([{ kind: "line", floorId: "eg", points: [[0, 0, 0], [1, 0, 0]], colors: [red], flow: 300 }]);
  assert.equal(cable.pipe, undefined);
  assert.equal(cable.house, undefined);
});

test("a marker's path is taken only when it is a plain SVG path", () => {
  assert.equal(markerPath("M4 4h16v16H4z"), "M4 4h16v16H4z");
  assert.equal(markerPath('M4 4"/><script>'), null);
  assert.equal(markerPath(undefined), null);
});

test("compact cards leave the minor parts out", () => {
  const rows = [{ label: "a" }, { label: "b", minor: true }];
  assert.deepEqual(majorOnly(rows, false).map((r) => r.label), ["a", "b"]);
  assert.deepEqual(majorOnly(rows, true).map((r) => r.label), ["a"]);
  assert.deepEqual(majorOnly(undefined, true), []);
});

test("a line shown only in one view carries its view: the house view, or an opened floor", () => {
  const at = (views?: "all" | "house" | "floor") => lineFlows([{ kind: "line", floorId: "eg", points: [[0, 0, 0], [1, 0, 0]], colors: [red], flow: 0, look: "pipe", views }])[0];
  assert.equal(at("house").house, true);
  assert.equal(at("house").floor, undefined);
  assert.equal(at("floor").floor, true);
  assert.equal(at("floor").house, undefined);
  assert.equal(at("all").house ?? at("all").floor, undefined);
  assert.equal(at().floor, undefined);
});

test("a marker's emoji: a few characters, never markup or words", () => {
  assert.equal(markerEmoji("📢"), "📢");
  assert.equal(markerEmoji("<b>"), null);
  assert.equal(markerEmoji("abc"), null);
  assert.equal(markerEmoji("📢 x"), null);
  assert.equal(markerEmoji(undefined), null);
});
