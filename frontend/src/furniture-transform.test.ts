import assert from "node:assert/strict";
import { test } from "node:test";
import { Euler, Vector3 } from "three";
import { furnitureTransform, rotateFurniturePositions } from "./furniture-transform.ts";

function close(actual: readonly number[], expected: readonly number[]) {
  actual.forEach((value, i) => assert.ok(Math.abs(value - expected[i]) < 1e-9, `${actual} != ${expected}`));
}

test("missing angles preserve old plans exactly, and the centre stays fixed", () => {
  const f = { x: 3, z: 7, rotation: 123 };
  assert.deepEqual(furnitureTransform(f, 2)(1, 4, 8), [1, 4, 8]);
  close(furnitureTransform({ ...f, rotation_x: 55, rotation_z: -135 }, 2)(3, 2, 7), [3, 2, 7]);
});

test("X and Z can turn in either direction including upside down", () => {
  const f = { x: 0, z: 0 };
  close(furnitureTransform({ ...f, rotation_x: 90 }, 0)(0, 1, 0), [0, 0, 1]);
  close(furnitureTransform({ ...f, rotation_x: -90 }, 0)(0, 1, 0), [0, 0, -1]);
  close(furnitureTransform({ ...f, rotation_z: 90 }, 0)(1, 0, 0), [0, 1, 0]);
  close(furnitureTransform({ ...f, rotation_z: 180 }, 0)(0, 1, 0), [0, -1, 0]);
});

test("combined rotations match the picture plane's Three.js YZX orientation", () => {
  for (const yaw of [0, 90, 217]) for (const rx of [-90, 35, 180]) for (const rz of [-60, 0, 90]) {
    const f = { x: 4, z: -2, rotation: yaw, rotation_x: rx, rotation_z: rz };
    const a = yaw * Math.PI / 180;
    const local = new Vector3(0.7, 0.3, -0.9);
    const original = local.clone().applyEuler(new Euler(0, -a, 0)).add(new Vector3(f.x, 1.4, f.z));
    const expected = local.clone().applyEuler(new Euler(rx * Math.PI / 180, -a, rz * Math.PI / 180, "YZX")).add(new Vector3(f.x, 1.4, f.z));
    close(furnitureTransform(f, 1.4)(...original.toArray()), expected.toArray());
  }
});

test("only the appended position range changes", () => {
  const vertices = [10, 20, 30, 0, 1, 0];
  rotateFurniturePositions(vertices, 3, { x: 0, z: 0, rotation_x: 90 }, 0);
  close(vertices, [10, 20, 30, 0, 0, 1]);
});
