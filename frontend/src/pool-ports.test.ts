import assert from "node:assert/strict";
import { test } from "node:test";
import { devicePorts, jointPortAt, nodePart, portAt, splitNode } from "./pool-ports.ts";

const r3 = (p: { x: number; y: number; z: number } | null) => p && [p.x, p.y, p.z].map((v) => Math.round(v * 1000) / 1000 + 0);

test("nodes: a part with or without its connection", () => {
  assert.deepEqual(splitNode("dev:f1:return"), { kind: "dev", id: "f1", port: "return" });
  assert.deepEqual(splitNode("port:sk"), { kind: "port", id: "sk", port: null });
  assert.equal(nodePart("dev:f1:return"), "dev:f1");
  assert.equal(nodePart("joint:t"), "joint:t");
  assert.deepEqual(devicePorts("pool_filter"), ["pump", "return", "waste"]);
  assert.deepEqual(devicePorts("pool_dosing"), []);
});

test("connections turn with their device; the valve on top or at the side", () => {
  const filter = { type: "pool_filter", x: 2, z: 1, w: 0.6, d: 0.6, h: 1, rotation: 0, variant: null };
  // the waste leaves at the back of the valve head (towards the wall)
  assert.deepEqual(r3(portAt(filter, "waste")), [2, 0.89, 0.825]);
  // turned a quarter: the back points to +x
  assert.deepEqual(r3(portAt({ ...filter, rotation: 90 }, "waste")), [2.175, 0.89, 1]);
  // a side-mounted valve: its connections at the right, one above the other
  const side = portAt({ ...filter, variant: "side6" }, "return")!;
  assert.ok(side.x > 2.3 && side.y < 0.6);
  assert.equal(portAt(filter, "suction"), null);
});

test("holes: the outside of a wall hole lies behind the wall, of a floor hole below the floor", () => {
  const wall = { id: "h", kind: "wall" as const, x: 1, z: 0.1, y: 0.4, nx: 0, nz: 1, depth: 0.3 };
  assert.deepEqual(r3(jointPortAt(wall, "inside")), [1, 0.4, 0.1]);
  assert.deepEqual(r3(jointPortAt(wall, "outside")), [1, 0.4, -0.25]);
  assert.deepEqual(r3(jointPortAt({ id: "f", kind: "floor", x: 1, z: 1, y: 0 }, "outside")), [1, -0.3, 1]);
});
