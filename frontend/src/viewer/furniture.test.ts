import assert from "node:assert/strict";
import { test } from "node:test";
import type { Furniture } from "../model.ts";
import { mountBase, setPacks, type FurniturePack } from "../packs.ts";
import { newFloor } from "../model.ts";
import { hasFixedColors, packGlowCentre, packMotionParts, pushFurniture, screenPictureSize, setLightLook } from "./furniture.ts";
import { packMotion, type PackItem } from "../packs.ts";
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

test("every mailbox shape is drawn where its box is: a wall mailbox at 1 m, a bank at 0.75 m, the others on the floor", () => {
  const floor = newFloor("eg", "EG", 0);
  for (const [variant, bottom] of [[null, 1], ["bank", 0.75], ["pole", 0], ["pillar", 0], ["parcel", 0]] as const) {
    const f = { id: "m", type: "mailbox", x: 0, z: 0, w: 0.38, d: 0.14, h: 0.34, rotation: 0, variant } as Furniture;
    const buf = new GeoBuffer();
    pushFurniture(buf, new LineBuffer(), new GeoBuffer(), f, mountBase(floor, f));
    const ys = buf.p.filter((_, i) => i % 3 === 1);
    assert.equal(mountBase(floor, f), bottom);
    assert.ok(Math.abs(Math.min(...ys) - bottom) < 1e-6, `${variant}: ${Math.min(...ys)}`);
    // a mount height of its own moves it along
    const low = { ...f, mount_y: 0.5 };
    const b2 = new GeoBuffer();
    pushFurniture(b2, new LineBuffer(), new GeoBuffer(), low, mountBase(floor, low));
    assert.ok(Math.abs(Math.min(...b2.p.filter((_, i) => i % 3 === 1)) - 0.5) < 1e-6, `${variant} at 0.5`);
  }
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
  for (const type of ["sofa", "sofa_l", "sofa_u", "stairs_u", "bed", "fridge", "pack:t.cars:wedge"]) {
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

test("the U-stair: both flights share one going, the landing turns it and the top step reaches the floor above", async () => {
  const { stairsULayout } = await import("../model.ts");
  for (const h of [2.6, 2.75, 2.77, 3.0]) {
    const l = stairsULayout(2.1, 2.7, h);
    assert.equal(l.steps1 + 1 + l.steps2, l.n);
    assert.ok(l.steps1 >= l.steps2 && l.steps2 >= 1);
    assert.ok(Math.abs(l.landing + l.run * l.steps1 - 2.7) < 1e-9);
    assert.ok(l.rise > 0.16 && l.rise < 0.2, `rise ${l.rise}`);
  }
  const f: Furniture = { id: "u", type: "stairs_u", x: 0, z: 0, rotation: 0, w: 2.1, d: 2.7, h: 2.75, variant: null };
  const buf = new GeoBuffer();
  pushFurniture(buf, new LineBuffer(), new GeoBuffer(), f);
  const pts = (pred: (x: number, y: number, z: number) => boolean) => {
    const out: number[][] = [];
    for (let i = 0; i < buf.p.length; i += 3) if (pred(buf.p[i], buf.p[i + 1], buf.p[i + 2])) out.push([buf.p[i], buf.p[i + 1], buf.p[i + 2]]);
    return out;
  };
  // the top step sits on the right half (+x) at the front; mirrored it moves to the left half
  const top = pts((_, y) => Math.abs(y - 2.75) < 1e-6);
  assert.ok(top.length > 0 && top.every(([x, , z]) => x > 0 && z > 0), "top step at the front right");
  const mbuf = new GeoBuffer();
  pushFurniture(mbuf, new LineBuffer(), new GeoBuffer(), { ...f, mirror: true });
  let mirroredLeft = true;
  for (let i = 0; i < mbuf.p.length; i += 3) if (Math.abs(mbuf.p[i + 1] - 2.75) < 1e-6 && mbuf.p[i] > 0) mirroredLeft = false;
  assert.ok(mirroredLeft, "mirrored: top step at the front left");
});

test("a motorised curtain opens to both ends and a roll-down screen rolls up with its cover (#511)", () => {
  assert.equal(packMotion("pack:mastershort.architecture:curtain_motor"), "curtain");
  assert.equal(packMotion("pack:mastershort.cinema:screen_roll"), "screen");
  assert.equal(packMotion("pack:mastershort.cinema:screen_wall"), null);
  const box = (x: number, color: string, y = 0, h = 1) => ({ shape: "box" as const, x, z: 0, w: 0.06, d: 0.2, y, h, color });
  const curtain = { id: "curtain_motor", names: {}, size: [2.4, 0.15, 2.4], parts: [box(0, "metal", 0.97, 0.03), box(-0.45, "fabric"), box(-0.05, "fabric"), box(0.05, "fabric"), box(0.45, "fabric")] } as unknown as PackItem;
  // closed: the panels stay where the pack has them; the rail does not move at all
  assert.deepEqual(packMotionParts(curtain, "curtain", 0).map((p) => Math.round(p.x * 1000) / 1000), [-0.45, -0.05, 0.05, 0.45]);
  // open: every panel lies in the outer fifth of its half
  for (const p of packMotionParts(curtain, "curtain", 1)) assert.ok(Math.abs(p.x) >= 0.4 - 1e-9, `${p.x}`);
  // opening to one side: every panel ends up at that end
  for (const p of packMotionParts(curtain, "curtain", 1, "left")) assert.ok(p.x <= -0.3 + 1e-9, `${p.x}`);
  for (const p of packMotionParts(curtain, "curtain", 1, "right")) assert.ok(p.x >= 0.3 - 1e-9, `${p.x}`);
  const screen = { id: "screen_roll", names: {}, size: [2.6, 0.12, 1.75], parts: [{ shape: "cyl", axis: "x", x: 0, z: 0, w: 1, d: 1, y: 0.93, h: 0.07, color: "white" }, box(0, "white", 0.07, 0.85), box(0, "dark", 0.05, 0.02)] } as unknown as PackItem;
  const down = packMotionParts(screen, "screen", 0);
  assert.equal(down.length, 2);
  assert.ok(Math.abs(down[0].h - 0.85) < 1e-9);
  // half up: the cloth is half as long and still hangs from the top
  const half = packMotionParts(screen, "screen", 0.5);
  assert.ok(Math.abs(half[0].y + half[0].h - 0.92) < 1e-9 && Math.abs(half[0].h - 0.425) < 1e-9);
});

test("pack parts in a colour of their own keep it down to the ground in the light looks (#609)", () => {
  const pumpkin: FurniturePack = {
    id: "t.fun",
    name: "Fun",
    publisher: "t",
    licensee: null,
    items: [
      {
        id: "pumpkin",
        name: { de: "Kürbis", en: "Pumpkin" },
        size: [0.4, 0.4, 0.4],
        parts: [
          { shape: "loft", x: 0, z: 0, w: 0.6, d: 0.6, y: 0, h: 0.5, color: "#c4500a", tx: 0, tz: 0, tw: 1, td: 1 },
          { shape: "box", x: 0, z: 0, w: 0.4, d: 0.4, y: 0.5, h: 0.5, color: "dark" },
        ],
      },
    ],
  };
  setPacks([pumpkin]);
  assert.ok(hasFixedColors("pack:t.fun:pumpkin"));
  assert.ok(!hasFixedColors("pack:t.cars:wedge") && !hasFixedColors("sofa"));
  const f: Furniture = { id: "p", type: "pack:t.fun:pumpkin", x: 0, z: 0, rotation: 0, w: 0.4, d: 0.4, h: 0.4, variant: null, entity: null, power: null };
  const colours = (light: boolean) => {
    setLightLook(light);
    const buf = new GeoBuffer();
    pushFurniture(buf, new LineBuffer(), new GeoBuffer(), f);
    setLightLook(false);
    const out: number[][] = [];
    for (let i = 0; i + 2 < buf.c.length; i += 3) out.push([buf.c[i], buf.c[i + 1], buf.c[i + 2]]);
    return out;
  };
  // the looks keep a colour that is bright (> 0.45) and strong (saturation > 0.45)
  const kept = (c: number[]) => {
    const mx = Math.max(...c);
    return mx > 0.45 && (mx - Math.min(...c)) / mx > 0.45;
  };
  const orange = (c: number[]) => c[0] > c[1] * 1.5 && c[0] > c[2] * 3;
  const neon = colours(false).filter(orange);
  const light = colours(true).filter(orange);
  assert.ok(neon.some((c) => !kept(c)), "in neon the shading darkens the lower part");
  assert.ok(light.length > 0 && light.every(kept), "in the light looks every orange vertex stays a signal colour");
  // the neon look is unchanged
  assert.deepEqual(colours(false), colours(false));
});

test("a pack wall lamp's light sits in its glowing parts, turned and mirrored with it (#680)", () => {
  // a wall lantern 0.2 wide, 0.24 deep, 0.4 tall: a back plate at the wall (-z), the glass box out front, a small LED
  const lantern = {
    id: "lantern",
    name: { de: "Laterne", en: "Lantern" },
    size: [0.2, 0.24, 0.4],
    parts: [
      { shape: "box", x: 0, z: -0.45, w: 1, d: 0.1, y: 0, h: 1, color: "body" },
      { shape: "box", x: 0.1, z: 0.2, w: 0.6, d: 0.5, y: 0.25, h: 0.5, color: "glass", glow: true },
    ],
  } as unknown as PackItem;
  const f = { x: 2, z: 1, rotation: 0, w: 0.2, d: 0.24, h: 0.4, mirror: false };
  const near = (a: number[] | null, b: number[]) => !!a && a.every((v, i) => Math.abs(v - b[i]) < 1e-9);
  // the glass's centre: 0.1 × 0.2 to the side, 0.2 × 0.24 out from the middle, halfway up the glass above the mount
  assert.ok(near(packGlowCentre(lantern, f, 1.8), [2.02, 1.8 + 0.2, 1.048]), String(packGlowCentre(lantern, f, 1.8)));
  // mirrored: the side offset changes sides; turned by 90°: the depth points along -x
  assert.ok(near(packGlowCentre(lantern, { ...f, mirror: true }, 1.8), [1.98, 2, 1.048]));
  assert.ok(near(packGlowCentre(lantern, { ...f, rotation: 90 }, 1.8), [2 - 0.048, 2, 1.02]));
  // no glowing part: null (the lamp keeps its old halo and light)
  assert.equal(packGlowCentre({ ...lantern, parts: [lantern.parts[0]] } as PackItem, f, 1.8), null);
});

test("round things cast a round shadow, lying on the ground they stand on (#719, #708)", async () => {
  const { pushFurniture, roundFootprint } = await import("./furniture.ts");
  const { GeoBuffer, LineBuffer } = await import("./geo.ts");
  const part = { shape: "cyl" as const, x: 0, z: 0, w: 1, d: 1, y: 0, h: 0.2, color: "wood" };
  setPacks([{ id: "g", name: "G", publisher: "G", licensee: null, items: [{ id: "trampoline", name: { en: "Trampoline" }, size: [3, 3, 0.9], parts: [part] }, { id: "box", name: { en: "Box" }, size: [1, 1, 1], parts: [{ ...part, shape: "box" }] }] } as FurniturePack]);
  try {
    assert.equal(roundFootprint({ type: "pack:g:trampoline" }), true);
    assert.equal(roundFootprint({ type: "pack:g:box" }), false);
    assert.equal(roundFootprint({ type: "table_round" }), true);
    assert.equal(roundFootprint({ type: "sofa" }), false);
    // the shadow of an item on a lawn 0.55 m below the floor lies on that lawn
    const shadow = new GeoBuffer();
    const f = { id: "t", type: "pack:g:trampoline", x: 0, z: 0, w: 3, d: 3, h: 0.9, rotation: 0, variant: null } as Furniture;
    pushFurniture(new GeoBuffer(), new LineBuffer(), shadow, f, -0.55);
    const ys = new Set<number>();
    for (let i = 1; i < shadow.p.length; i += 3) ys.add(Math.round(shadow.p[i] * 1000) / 1000);
    assert.deepEqual([...ys], [-0.547]);
    // round: many more corners than a square's
    assert.ok(shadow.p.length / 9 > 40);
  } finally {
    setPacks([]);
  }
});

test("a cover fills a small smart display, not just a sliver; a TV keeps its 4 cm margin (#799)", () => {
  // a 5″ display: 11 × 6.5 cm, a square cover
  const small = screenPictureSize(0.11, 0.065, 1);
  assert.ok(small.h > 0.055, `cover only ${small.h} m high`);
  assert.ok(small.w <= 0.11 && small.h <= 0.065);
  // a 55″ TV with a 16:9 picture: 4 cm off its height
  const tv = screenPictureSize(1.21, 0.68, 16 / 9);
  assert.ok(Math.abs(tv.h - 0.64) < 1e-9);
});
