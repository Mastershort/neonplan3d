import assert from "node:assert/strict";
import { test } from "node:test";
import { FURNITURE_TYPES, LAMP_MODEL, type Furniture } from "../model.ts";
import { setPacks, type PackItem } from "../packs.ts";
import { furnitureTransform } from "../furniture-transform.ts";
import { GeoBuffer, LineBuffer } from "./geo.ts";
import { pushFridgeDoors, pushFurniture, pushPackGlow, pushPackLamp } from "./furniture.ts";
import { pushLampModel } from "./viewer3d.ts";

const base = 1.2;
const plain: Furniture = { id: "f", type: "shelf", x: 3, z: 4, rotation: 37, w: 1.2, d: 0.5, h: 0.8, variant: null };
const tilted = { rotation_x: 65, rotation_z: -40 };
const item: PackItem = { id: "model", name: { en: "Model" }, size: [1.2, 0.5, 0.8], parts: [
  { shape: "box", x: 0.1, z: 0, w: 0.8, d: 1, y: 0, h: 0.8, color: "body", glow: true, edges: true },
  { shape: "cyl", axis: "x", x: -0.3, z: 0, w: 0.15, d: 0.2, y: 0, h: 0.2, color: "dark" },
] };

function checkPositions(original: number[], result: number[], f: Furniture, pivotY = base + f.h / 2) {
  assert.equal(result.length, original.length);
  const P = furnitureTransform(f, pivotY);
  for (let i = 0; i < original.length; i += 3) {
    const expected = P(original[i], original[i + 1], original[i + 2]);
    expected.forEach((v, k) => assert.ok(Math.abs(v - result[i + k]) < 1e-9));
  }
}

test("all built-in furniture rotates together with outlines; old contact shadows are not tilted", () => {
  for (const type of FURNITURE_TYPES.filter((t) => !LAMP_MODEL[t])) {
    const f = { ...plain, type };
    const a = new GeoBuffer(), b = new GeoBuffer(), la = new LineBuffer(), lb = new LineBuffer(), shadow = new GeoBuffer();
    pushFurniture(a, la, new GeoBuffer(), f, base);
    pushFurniture(b, lb, shadow, { ...f, ...tilted }, base);
    checkPositions(a.p, b.p, { ...f, ...tilted });
    checkPositions(la.p, lb.p, { ...f, ...tilted });
    assert.equal(shadow.p.length, 0, type);
    assert.deepEqual(b.c, a.c);
  }
});

test("mirrored pack models, glowing parts and lamps share the same transform", () => {
  setPacks([{ id: "test.rotation", name: "Test", publisher: "Test", licensee: null, items: [item] }]);
  const f = { ...plain, type: "pack:test.rotation:model", mirror: true };
  for (const build of [
    (b: GeoBuffer, f: Furniture) => pushFurniture(b, new LineBuffer(), new GeoBuffer(), f, base),
    (b: GeoBuffer, f: Furniture) => pushPackGlow(b, item, f, base, 0x00ff00),
    (b: GeoBuffer, f: Furniture) => pushPackLamp(b, item, f, base, 0x00ff00),
  ]) {
    const a = new GeoBuffer(), b = new GeoBuffer();
    build(a, f);
    build(b, { ...f, ...tilted });
    assert.ok(b.count > 0);
    checkPositions(a.p, b.p, { ...f, ...tilted });
  }
});

test("animated fridge doors follow the body even when open and mirrored", () => {
  for (const mirror of [false, true]) {
    const f = { ...plain, mirror };
    const a = new GeoBuffer(), b = new GeoBuffer();
    pushFridgeDoors(a, f, base, 0.7, 1);
    pushFridgeDoors(b, { ...f, ...tilted }, base, 0.7, 1);
    checkPositions(a.p, b.p, { ...f, ...tilted });
  }
});

test("all lamp models rotate; legacy strip tilt and upright poses remain intact", () => {
  for (const lamp of Object.values(LAMP_MODEL)) for (const upright of lamp === "strip" ? [false, true] : [false]) {
    const d = { ...plain, size: [plain.w, plain.d, plain.h] as [number, number, number], base, lamp, upright, roll: 25, pivot_y: base + (upright ? plain.w : plain.h) / 2 };
    const a = new GeoBuffer(), b = new GeoBuffer();
    pushLampModel(a, d, 2.8, 0x00ff00);
    pushLampModel(b, { ...d, ...tilted }, 2.8, 0x00ff00);
    assert.ok(b.count > 0);
    checkPositions(a.p, b.p, { ...plain, ...tilted }, d.pivot_y);
  }
});
