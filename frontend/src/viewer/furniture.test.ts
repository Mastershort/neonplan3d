import assert from "node:assert/strict";
import { test } from "node:test";
import type { Furniture } from "../model.ts";
import { mountBase, setPacks, type FurniturePack } from "../packs.ts";
import { newFloor } from "../model.ts";
import { pushFurniture } from "./furniture.ts";
import { GeoBuffer, LineBuffer } from "./geo.ts";

const PACK: FurniturePack = {
  id: "t.cars",
  name: "Cars",
  publisher: "t",
  licensee: null,
  items: [
    {
      id: "wedge",
      name: { de: "Keil", en: "Wedge" },
      size: [2, 4, 1],
      parts: [
        // a hood: the top rectangle is shorter and sits further back
        { shape: "loft", x: 0, z: 0.25, w: 1, d: 0.5, y: 0, h: 0.5, color: "body", tx: 0, tz: 0.05, tw: 0.9, td: 0.1, edges: "glow" },
        // a wheel lying along x
        { shape: "cyl", axis: "x", x: -0.4, z: -0.3, w: 0.1, d: 0.2, y: 0, h: 0.4, color: "dark", edges: true },
      ],
    },
  ],
};

function build(type: string) {
  const buf = new GeoBuffer();
  const lines = new LineBuffer();
  const f: Furniture = { id: "f", type, x: 1, z: 2, rotation: 90, w: 2, d: 4, h: 1, variant: null, entity: null, power: null };
  pushFurniture(buf, lines, new GeoBuffer(), f);
  return { buf, lines };
}

test("loft and lying cylinder parts build finite geometry with their outlines", () => {
  setPacks([PACK]);
  const { buf, lines } = build("pack:t.cars:wedge");
  assert.ok(buf.count > 20, "triangles");
  assert.ok(buf.p.every(Number.isFinite) && lines.p.every(Number.isFinite), "finite");
  // the loft: 4 sides x 2 + top 2 = 10 triangles; the 12-sided wheel: 24 sides + 24 caps... plus 14 here
  const ys = buf.p.filter((_, i) => i % 3 === 1);
  assert.ok(Math.max(...ys) <= 0.5 + 1e-6 && Math.min(...ys) >= 0, "heights within the parts");
  // top outline of the loft (4) + 4 sloped corners + two wheel rims (14 each)
  assert.equal(lines.p.length / 6, 8 + 28);
  // the wheel's rim lies along x (after the 90° turn: along z in the world)
  const wheelSegs = lines.p.length / 6 - 8;
  assert.ok(wheelSegs === 28);
});

test("a built-in item lifted by its mount height (a dryer on the washer) leaves the floor", () => {
  const dryer = { id: "d", type: "dryer", x: 0, z: 0, w: 0.6, d: 0.6, h: 0.85, rotation: 0, variant: null } as Furniture;
  const ys = (base: number) => {
    const buf = new GeoBuffer();
    const shadow = new GeoBuffer();
    pushFurniture(buf, new LineBuffer(), shadow, dryer, base);
    const y = buf.p.filter((_, i) => i % 3 === 1);
    return { min: Math.min(...y), max: Math.max(...y), shadow: shadow.p.length };
  };
  const floor = ys(0);
  const lifted = ys(0.85);
  assert.ok(Math.abs(floor.min) < 1e-6 && floor.shadow > 0);
  assert.ok(Math.abs(lifted.min - 0.85) < 1e-6, `min ${lifted.min}`);
  assert.ok(Math.abs(lifted.max - floor.max - 0.85) < 1e-6);
  // no contact shadow on the floor under a lifted item
  assert.equal(lifted.shadow, 0);
});

test("the mount height is absolute: a wall cabinet hangs at 1.45 m and can go lower", () => {
  const cab = { id: "c", type: "kitchen_wall", x: 0, z: 0, w: 0.8, d: 0.35, h: 0.7, rotation: 0, variant: null } as Furniture;
  const floor = newFloor("eg", "EG", 0);
  const minY = (f: Furniture) => {
    const buf = new GeoBuffer();
    pushFurniture(buf, new LineBuffer(), new GeoBuffer(), f, mountBase(floor, f));
    return Math.min(...buf.p.filter((_, i) => i % 3 === 1));
  };
  assert.equal(mountBase(floor, cab), 1.45);
  assert.ok(Math.abs(minY(cab) - 1.45) < 1e-6);
  assert.ok(Math.abs(minY({ ...cab, mount_y: 1.0 }) - 1.0) < 1e-6);
});

/** Signed volume of a closed-ish mesh: positive when its triangles face outwards. */
function orientation(buf: GeoBuffer): number {
  let v = 0;
  for (let i = 0; i < buf.p.length; i += 9) {
    const [ax, ay, az, bx, by, bz, cx, cy, cz] = buf.p.slice(i, i + 9);
    v += ax * (by * cz - bz * cy) - ay * (bx * cz - bz * cx) + az * (bx * cy - by * cx);
  }
  return v;
}

test("a mirrored item keeps its faces pointing outwards (#159)", () => {
  setPacks([PACK]);
  for (const type of ["sofa", "bed", "fridge", "pack:t.cars:wedge"]) {
    const vol = (mirror: boolean) => {
      const buf = new GeoBuffer();
      const f: Furniture = { id: "f", type, x: 0, z: 0, rotation: 30, w: 2, d: 1, h: 1, variant: null, entity: null, power: null, mirror };
      pushFurniture(buf, new LineBuffer(), new GeoBuffer(), f);
      return orientation(buf);
    };
    const plain = vol(false);
    const mirrored = vol(true);
    assert.ok(Math.sign(plain) === Math.sign(mirrored) && Math.abs(plain - mirrored) < Math.abs(plain) * 0.01 + 1e-6, `${type}: ${plain} vs ${mirrored}`);
  }
});

test("a mirrored pack lamp is drawn mirrored and still faces outwards", async () => {
  const { pushPackLamp } = await import("./furniture.ts");
  setPacks([PACK]);
  const item = PACK.items[0];
  const vol = (mirror: boolean) => {
    const buf = new GeoBuffer();
    pushPackLamp(buf, item, { x: 0, z: 0, rotation: 0, w: 2, d: 4, h: 1, mirror }, 0, 0xffffff);
    return { v: orientation(buf), xs: buf.p.filter((_, i) => i % 3 === 0) };
  };
  const a = vol(false);
  const b = vol(true);
  assert.ok(Math.sign(a.v) === Math.sign(b.v));
  // the wheel sits at x = -0.4 of the item: mirrored, it moves to the other side
  near2(Math.min(...a.xs), -Math.max(...b.xs));
});

function near2(a: number, b: number) {
  assert.ok(Math.abs(a - b) < 1e-6, `${a} != ${b}`);
}
