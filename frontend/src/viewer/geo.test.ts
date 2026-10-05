import assert from "node:assert/strict";
import { test } from "node:test";
import { Color } from "three";
import { ALWAYS, cutAbove, cutLinesAbove, FURN_OFFSET, GeoBuffer, LineBuffer } from "./geo.ts";

test("cutAbove marks triangles above the cut, splits those across it and leaves the rest alone", () => {
  const buf = new GeoBuffer();
  const c = new Color(0x404040);
  buf.tri([0, 0, 0], [1, 0, 0], [1, 0.5, 0], c); // below
  buf.tri([0, 2, 0], [1, 2, 0], [1, 2.5, 0], c); // above
  buf.tri([0, 0, 0], [1, 0, 0], [1, 2, 0], c); // one vertex above
  buf.tri([0, 2, 0], [1, 2, 0], [1, 0, 0], c); // two vertices above
  cutAbove(buf, 0, 1.2, FURN_OFFSET);
  const folds = (tri: number) => buf.f.slice(tri * 3, tri * 3 + 3);
  assert.deepEqual(folds(0), [ALWAYS, ALWAYS, ALWAYS]);
  assert.deepEqual(folds(1), [FURN_OFFSET, FURN_OFFSET, FURN_OFFSET]);
  // the two split triangles became three each: 4 + 2 + 2
  assert.equal(buf.count, 8);
  // every vertex of an upper piece lies at or above the cut, every vertex of a lower piece at or below
  for (let tri = 0; tri < buf.count; tri++) {
    const f = buf.f[tri * 3];
    for (let k = 0; k < 3; k++) {
      const y = buf.p[(tri * 3 + k) * 3 + 1];
      if (f === FURN_OFFSET) assert.ok(y >= 1.2 - 1e-9, `upper piece vertex at ${y}`);
      else assert.ok(y <= 1.2 + 1e-9, `lower piece vertex at ${y}`);
    }
  }
});

test("cutLinesAbove splits a vertical edge at the cut height", () => {
  const lines = new LineBuffer();
  lines.seg([0, 0, 0], [0, 2, 0]);
  lines.seg([0, 0, 0], [1, 0, 0]);
  cutLinesAbove(lines, 0, 1.2, FURN_OFFSET);
  assert.equal(lines.p.length / 6, 3);
  assert.deepEqual(lines.p.slice(0, 6), [0, 0, 0, 0, 1.2, 0]);
  assert.deepEqual(lines.f.slice(0, 4), [ALWAYS, ALWAYS, ALWAYS, ALWAYS]);
  assert.deepEqual(lines.p.slice(12, 18), [0, 1.2, 0, 0, 2, 0]);
  assert.deepEqual(lines.f.slice(4, 6), [FURN_OFFSET, FURN_OFFSET]);
});
