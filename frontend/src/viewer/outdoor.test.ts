import assert from "node:assert/strict";
import { test } from "node:test";
import type { Floor, OutdoorArea } from "../model.ts";
import { gateSpans, newFloor, outdoorGround } from "../model.ts";
import { GeoBuffer, LineBuffer } from "./geo.ts";
import { pushGate, pushOutdoor } from "./outdoor.ts";

function fenced(gates: OutdoorArea["gates"]): { floor: Floor; fence: OutdoorArea } {
  const fence: OutdoorArea = { id: "f", type: "fence", points: [[0, 0], [10, 0], [10, 6], [0, 6]], gates };
  return { floor: { ...newFloor("eg", "Garden", 0), outdoor: [fence] }, fence };
}

/** x and z of every vertex in a buffer. */
function xz(buf: GeoBuffer): [number, number][] {
  const out: [number, number][] = [];
  for (let i = 0; i < buf.p.length; i += 3) out.push([buf.p[i], buf.p[i + 2]]);
  return out;
}

test("a gate sits on its edge, clamped into it (#818)", () => {
  const { fence } = fenced([
    { id: "g1", edge: 0, at: 5, width: 1 },
    // too wide and too close to the corner: kept inside the 6 m edge
    { id: "g2", edge: 1, at: 0, width: 9 },
  ]);
  const [a, b] = gateSpans(fence);
  assert.deepEqual([a.s0, a.s1], [4.5, 5.5]);
  assert.ok(b.s0 >= 0.05 - 1e-9 && b.s1 <= 5.95 + 1e-9 && b.s1 - b.s0 > 5.8);
  // an open fence has no closing edge to put a gate in
  assert.equal(gateSpans({ ...fence, open: true, gates: [{ id: "g", edge: 3, at: 3, width: 1 }] }).length, 0);
});

test("the fence leaves the gate's gap free, with a post on either side (#818)", () => {
  const { floor } = fenced([{ id: "g1", edge: 0, at: 5, width: 1 }]);
  const buf = new GeoBuffer();
  const lines = new LineBuffer();
  pushOutdoor(buf, lines, floor);
  const onEdge = xz(buf).filter(([, z]) => Math.abs(z) < 0.1);
  // nothing stands in the gap but the two gate posts at its ends
  assert.ok(onEdge.every(([x]) => x <= 4.56 || x >= 5.44));
  assert.ok(onEdge.some(([x]) => Math.abs(x - 4.5) < 0.06) && onEdge.some(([x]) => Math.abs(x - 5.5) < 0.06));
  // the rails stop at the gap as well
  for (let i = 0; i < lines.p.length; i += 6) {
    const [x0, , z0, x1, , z1] = lines.p.slice(i, i + 6);
    if (Math.abs(z0) < 0.01 && Math.abs(z1) < 0.01) assert.ok(Math.max(x0, x1) <= 4.5 + 1e-6 || Math.min(x0, x1) >= 5.5 - 1e-6);
  }
});

test("a gate swings into the fenced area, or out of it (#818)", () => {
  const { floor, fence } = fenced([{ id: "g1", edge: 0, at: 5, width: 1 }]);
  const span = gateSpans(fence)[0];
  const shut = new GeoBuffer();
  pushGate(shut, floor, fence, span, 0);
  assert.ok(xz(shut).every(([, z]) => Math.abs(z) < 0.05));
  const open = new GeoBuffer();
  pushGate(open, floor, fence, span, 1);
  // the area lies at z > 0: the open leaf reaches about a metre into it, from its hinge at x 4.5
  const zs = xz(open).map(([, z]) => z);
  assert.ok(Math.max(...zs) > 0.9 && Math.min(...zs) > -0.05);
  assert.ok(xz(open).every(([x]) => x < 4.6));
  const out = new GeoBuffer();
  pushGate(out, floor, { ...fence, gates: [{ ...span.gate, outward: true }] }, { ...span, gate: { ...span.gate, outward: true } }, 1);
  assert.ok(Math.min(...xz(out).map(([, z]) => z)) < -0.9);
});

test("a sliding gate runs along the fence, beside the gap (#818)", () => {
  const { floor, fence } = fenced([{ id: "g1", edge: 0, at: 5, width: 2, kind: "slide" }]);
  const span = gateSpans(fence)[0];
  const open = new GeoBuffer();
  pushGate(open, floor, fence, span, 1);
  const xs = xz(open).map(([x]) => x);
  // shut it fills 4 … 6; open it stands at 2 … 4, a few centimetres inside the fence
  assert.ok(Math.max(...xs) <= 4.05 && Math.min(...xs) >= 1.95);
  assert.ok(xz(open).every(([, z]) => z > 0.02 && z < 0.15));
});

test("a hedge on falling ground reaches down to the lawn under it, so no underside shows (#1262)", () => {
  // a lawn 10 x 6 that falls 0.8 m towards its z = 6 edge, with a hedge standing on its low half
  const lawn: OutdoorArea = { id: "l", type: "lawn", points: [[0, 0], [10, 0], [10, 6], [0, 6]], slope: 0.8, slope_dir: "z" };
  const hedge: OutdoorArea = { id: "h", type: "hedge", points: [[1, 4], [9, 4], [9, 4.5], [1, 4.5]], height: 1.2 };
  const floor: Floor = { ...newFloor("eg", "Garden", 0), outdoor: [lawn, hedge] };
  const ground = Math.min(...hedge.points.map(([x, z]) => outdoorGround(floor, x, z)));
  assert.ok(ground < -0.55, `the lawn under the hedge falls to ${ground}`);

  const buf = new GeoBuffer();
  pushOutdoor(buf, new LineBuffer(), floor);
  const ys: number[] = [];
  for (let i = 0; i < buf.p.length; i += 3) {
    const x = buf.p[i];
    const z = buf.p[i + 2];
    if (x >= 0.9 && x <= 9.1 && z >= 3.9 && z <= 4.6) ys.push(buf.p[i + 1]);
  }
  assert.ok(ys.length > 0);
  // the hedge's foot sits in the lawn, not above it: no underside can show from the low side
  assert.ok(Math.min(...ys) <= ground, `hedge foot ${Math.min(...ys)} should reach ${ground}`);
  // and the hedge still stands its full height over its own ground (nothing was pulled down with the foot)
  assert.ok(Math.max(...ys) - Math.min(...ys) > 1.2);

  // lifted by hand it keeps its own height and floats where it was put, instead of filling down to the lawn (#1303)
  const lifted = new GeoBuffer();
  pushOutdoor(lifted, new LineBuffer(), { ...floor, outdoor: [lawn, { ...hedge, offset: 1 }] });
  const up: number[] = [];
  for (let i = 0; i < lifted.p.length; i += 3) if (lifted.p[i] >= 0.9 && lifted.p[i] <= 9.1 && lifted.p[i + 2] >= 3.9 && lifted.p[i + 2] <= 4.6) up.push(lifted.p[i + 1]);
  assert.ok(Math.max(...up) - Math.min(...up) < 1.35, `a lifted hedge is ${Math.max(...up) - Math.min(...up)} m high`);
});
