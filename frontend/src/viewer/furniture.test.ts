import assert from "node:assert/strict";
import { test } from "node:test";
import type { Furniture } from "../model.ts";
import { mountBase, packItem, setPacks, type FurniturePack } from "../packs.ts";
import { liveKey } from "../live-parts.ts";
import { newFloor } from "../model.ts";
import { Color } from "three";
import { finishSafe, hasFixedColors, packGlowCentre, packMotionParts, pushFurniture, pushPackLamp, pushPackLive, pushPackSpin, screenPictureSize, setLightLook } from "./furniture.ts";
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

test("fan blades of a pack turn as a model of their own about their middle (#1084)", () => {
  const blade = (x: number, z: number, rot: number) => ({ shape: "box" as const, x, z, w: 0.38, d: 0.09, y: 0.375, h: 0.04, color: "wood", rot, spin: "y" as const });
  const item: PackItem = {
    id: "fan",
    name: { en: "Fan" },
    size: [1.3, 1.3, 0.4],
    mount: "ceiling",
    parts: [{ shape: "cyl", x: 0, z: 0, w: 0.17, d: 0.17, y: 0.3, h: 0.2, color: "dark" }, blade(0.28, 0, 0), blade(-0.14, 0.24, 120), blade(-0.14, -0.24, 240)],
  } as PackItem;
  setPacks([{ id: "t", name: "T", items: [item] } as unknown as FurniturePack]);
  const buf = new GeoBuffer();
  const spin = pushPackSpin(buf, item, 1.3, 1.3, 0.4);
  assert.ok(spin);
  assert.equal(spin.axis, "y");
  // the pivot is the hub: the blades' middle, at their height
  assert.ok(Math.abs(spin.pivot[0]) < 1e-9 && Math.abs(spin.pivot[2]) < 1e-9);
  assert.ok(Math.abs(spin.pivot[1] - (0.375 + 0.02) * 0.4) < 1e-9);
  assert.ok(buf.count > 0);
  // the item itself leaves the blades out; its picture keeps them
  const f: Furniture = { id: "f", type: "pack:t:fan", x: 0, z: 0, rotation: 0, w: 1.3, d: 1.3, h: 0.4, variant: null, entity: null, power: null };
  const count = (still: boolean) => {
    const b = new GeoBuffer();
    pushFurniture(b, new LineBuffer(), new GeoBuffer(), f, 0, still);
    return b.count;
  };
  assert.ok(count(true) > count(false));
  setPacks([]);
});

test("a finish colours a sofa's fabric in the homely styles only, and live parts are left to the viewer", async () => {
  const { setNaturalPalette } = await import("./palette.ts");
  const sofa = (finish: Furniture["finish"]) => {
    const buf = new GeoBuffer();
    pushFurniture(buf, new LineBuffer(), new GeoBuffer(), { id: "s", type: "sofa", x: 0, z: 0, rotation: 0, w: 2, d: 0.9, h: 0.8, variant: null, finish } as Furniture);
    return buf.c;
  };
  // blue fabric (#4a6a9a, linear colours): blue far over red somewhere; the natural grey fabric (#8e97a5) is almost even
  const hasBlue = (c: number[]) => {
    for (let i = 0; i < c.length; i += 3) if (c[i + 2] > 0.08 && c[i + 2] > c[i] * 2.5) return true;
    return false;
  };
  setNaturalPalette(true);
  try {
    assert.equal(hasBlue(sofa({ fabric: "#4a6a9a" })), true);
    assert.equal(hasBlue(sofa(null)), false);
  } finally {
    setNaturalPalette(false);
  }
  assert.deepEqual(sofa({ fabric: "#4a6a9a" }), sofa(null), "the neon looks keep their own colours");
  // a pack item with a live door: the door is not in the item's model while the viewer draws it
  setPacks([{ id: "t.live", name: "Live", publisher: "t", licensee: null, items: [{ id: "cab", name: { en: "Cab" }, size: [1, 0.5, 1], parts: [{ shape: "box", x: 0, z: 0, w: 1, d: 0.5, y: 0, h: 1, color: "body" }, { shape: "box", x: 0, z: 0.24, w: 0.9, d: 0.02, y: 0.05, h: 0.9, color: "white", edges: "faint", bind: { slot: "door", kind: "open" } }] }] }]);
  const count = (still: boolean) => {
    const buf = new GeoBuffer();
    pushFurniture(buf, new LineBuffer(), new GeoBuffer(), { id: "c", type: "pack:t.live:cab", x: 0, z: 0, rotation: 0, w: 1, d: 0.5, h: 1, variant: null } as Furniture, 0, still);
    return buf.p.length;
  };
  assert.ok(count(true) > count(false), "a picture keeps the door, the house model leaves it to the viewer");
  // the live door takes the item's finish too (a sage front stays sage when the door is its own model)
  const door = (finish: Furniture["finish"]) => {
    const buf = new GeoBuffer();
    pushPackLive(buf, packItem("pack:t.live:cab")!, 1, 0.5, 1, liveKey({ slot: "door", kind: "open" }), { finish });
    return buf.c;
  };
  setNaturalPalette(true);
  try {
    assert.notDeepEqual(door({ front: "#5d7590" }), door(null));
  } finally {
    setNaturalPalette(false);
  }
  // its edges come along (a neon door keeps its outline when it opens)
  const lines = new LineBuffer();
  pushPackLive(new GeoBuffer(), packItem("pack:t.live:cab")!, 1, 0.5, 1, liveKey({ slot: "door", kind: "open" }), {}, lines);
  assert.ok(lines.p.length > 0);
});

test("a wood finish colours a pack worktop's top too, not only its front edge (#1143)", async () => {
  const { setNaturalPalette } = await import("./palette.ts");
  setPacks([{ id: "t.kit", name: "Kit", publisher: "t", licensee: null, items: [{ id: "dw", name: { en: "Dishwasher" }, size: [0.6, 0.6, 0.9], parts: [{ shape: "box", x: 0, z: 0, w: 1, d: 1, y: 0, h: 0.95, color: "white" }, { shape: "box", x: 0, z: 0, w: 1, d: 1, y: 0.95, h: 0.05, color: "wood", top: "#1d2640" }] }] }]);
  // the colours of the worktop's top face (y = 0.9)
  const top = (finish: Furniture["finish"]) => {
    const buf = new GeoBuffer();
    pushFurniture(buf, new LineBuffer(), new GeoBuffer(), { id: "d", type: "pack:t.kit:dw", x: 0, z: 0, rotation: 0, w: 0.6, d: 0.6, h: 0.9, variant: null, finish } as Furniture);
    const out: number[][] = [];
    // whole triangles at that height: the side faces end there too
    for (let i = 0; i < buf.p.length; i += 9) if ([1, 4, 7].every((k) => Math.abs(buf.p[i + k] - 0.9) < 1e-6)) out.push(buf.c.slice(i, i + 3));
    return out;
  };
  setNaturalPalette(true);
  try {
    // without a finish the top keeps the pack's own dark blue; walnut makes it warm (red over blue)
    assert.ok(top(null).every(([r, , b]) => b > r));
    assert.ok(top({ wood: "#6b4a32" }).every(([r, , b]) => r > b));
    // a front finish alone leaves the worktop as it is
    assert.deepEqual(top({ front: "#5d7590" }), top(null));
  } finally {
    setNaturalPalette(false);
    setPacks([]);
  }
});

test("fronts and carcass: a pack's front parts look like white ones until a carcass finish tells them apart (#1177)", async () => {
  const { setNaturalPalette } = await import("./palette.ts");
  const parts = (front: string) =>
    [
      { shape: "box", x: 0, z: -0.02, w: 1, d: 0.96, y: 0, h: 1, color: "white", edges: true },
      { shape: "box", x: 0, z: 0.49, w: 0.98, d: 0.02, y: 0.05, h: 0.9, color: front, top: front, edges: "faint" },
    ] as PackItem["parts"];
  setPacks([{ id: "t.fr", name: "Fronts", publisher: "t", licensee: null, items: [{ id: "old", name: { en: "Old" }, size: [0.6, 0.6, 0.8], parts: parts("white") }, { id: "new", name: { en: "New" }, size: [0.6, 0.6, 0.8], parts: parts("front") }] }]);
  const draw = (id: string, finish: Furniture["finish"]) => {
    const buf = new GeoBuffer();
    pushFurniture(buf, new LineBuffer(), new GeoBuffer(), { id: "c", type: `pack:t.fr:${id}`, x: 0, z: 0, rotation: 0, w: 0.6, d: 0.6, h: 0.8, variant: null, finish } as Furniture);
    return buf.c;
  };
  // the carcass' colours come first (its sides and its top), the front's after them
  const split = (c: number[]) => c.length / 2;
  const carcass = (c: number[]) => c.slice(0, split(c));
  const front = (c: number[]) => c.slice(split(c));
  try {
    for (const natural of [false, true]) {
      setNaturalPalette(natural);
      // without a finish, and with a front finish alone (every plan before 3.5), the new role looks like the old one
      assert.deepEqual(draw("new", null), draw("old", null));
      assert.deepEqual(draw("new", { front: "#9fae96" }), draw("old", { front: "#9fae96" }));
    }
    setNaturalPalette(true);
    // the front finish colours the carcass too while no carcass finish is set
    assert.notDeepEqual(carcass(draw("new", { front: "#9fae96" })), carcass(draw("new", null)));
    // a carcass finish takes the carcass over; the fronts keep the front finish
    const both = draw("new", { front: "#9fae96", body: "#34363a" });
    assert.deepEqual(front(both), front(draw("new", { front: "#9fae96" })));
    assert.deepEqual(carcass(both), carcass(draw("new", { front: "#34363a" })));
    // a carcass alone leaves the fronts as the look draws them
    assert.deepEqual(front(draw("new", { body: "#34363a" })), front(draw("new", null)));
    // an older pack (white fronts) colours fronts and carcass with the carcass finish then: one colour, as before
    assert.deepEqual(draw("old", { body: "#34363a" }), draw("old", { front: "#34363a" }));
  } finally {
    setNaturalPalette(false);
    setPacks([]);
  }
});

test("a part in a colour of its own keeps it until the item gets the finish it follows (#1175)", async () => {
  const { setNaturalPalette } = await import("./palette.ts");
  const chair = (finish?: "fabric") =>
    [
      { shape: "box", x: 0, z: 0, w: 1, d: 1, y: 0, h: 0.4, color: "dark" },
      { shape: "box", x: 0, z: 0, w: 0.8, d: 0.8, y: 0.4, h: 0.1, color: "#8a1f2e", top: "#a8283a", ...(finish ? { finish } : {}) },
    ] as PackItem["parts"];
  setPacks([{ id: "t.ch", name: "Chairs", publisher: "t", licensee: null, items: [{ id: "old", name: { en: "Old" }, size: [0.7, 0.7, 1], parts: chair() }, { id: "new", name: { en: "New" }, size: [0.7, 0.7, 1], parts: chair("fabric") }] }]);
  const draw = (id: string, finish: Furniture["finish"]) => {
    const buf = new GeoBuffer();
    pushFurniture(buf, new LineBuffer(), new GeoBuffer(), { id: "c", type: `pack:t.ch:${id}`, x: 0, z: 0, rotation: 0, w: 0.7, d: 0.7, h: 1, variant: null, finish } as Furniture);
    return buf.c;
  };
  // the cover's colours: red far over blue while it keeps its own
  const red = (c: number[]) => {
    // after the frame: a box on the floor has no bottom face, 10 triangles
    const cover = c.slice(10 * 9);
    for (let i = 0; i < cover.length; i += 3) if (!(cover[i] > cover[i + 2] * 3)) return false;
    return true;
  };
  try {
    for (const natural of [false, true]) {
      setNaturalPalette(natural);
      assert.deepEqual(draw("new", null), draw("old", null));
      // another finish leaves it alone
      assert.deepEqual(draw("new", { wood: "#6b4a32" }), draw("old", { wood: "#6b4a32" }));
    }
    setNaturalPalette(true);
    assert.equal(red(draw("new", null)), true);
    assert.equal(red(draw("new", { fabric: "#5d7d5a" })), false);
    // the old part without its finish stays red
    assert.equal(red(draw("old", { fabric: "#5d7d5a" })), true);
    // in the light looks the coloured cover is not lifted like a fixed colour
    setLightLook(true);
    assert.equal(red(draw("new", { fabric: "#5d7d5a" })), false);
  } finally {
    setLightLook(false);
    setNaturalPalette(false);
    setPacks([]);
  }
});

test("a pack lamp's body takes the finish, its glowing parts keep the light (#1175)", async () => {
  const { setNaturalPalette } = await import("./palette.ts");
  const item = {
    id: "panel",
    name: { en: "Panel" },
    size: [0.5, 0.5, 0.06],
    mount: "ceiling",
    light: "panel",
    parts: [
      { shape: "cyl", x: 0, z: 0, w: 1, d: 1, y: 0.5, h: 0.5, color: "white", edges: true },
      { shape: "cyl", x: 0, z: 0, w: 0.88, d: 0.88, y: 0, h: 0.5, color: "white", glow: true },
    ],
  } as PackItem;
  const lamp = (finish: Furniture["finish"]) => {
    const buf = new GeoBuffer();
    pushPackLamp(buf, item, { x: 0, z: 0, rotation: 0, w: 0.5, d: 0.5, h: 0.06, finish }, 2.4, 0xff00ff);
    return buf.c;
  };
  // vertices in the glow colour (magenta)
  const glowing = (c: number[]) => {
    let n = 0;
    for (let i = 0; i < c.length; i += 3) if (c[i] > 0.9 && c[i + 1] < 0.05 && c[i + 2] > 0.9) n++;
    return n;
  };
  setNaturalPalette(true);
  try {
    const plain = lamp(null);
    const sage = lamp({ front: "#9fae96" });
    assert.notDeepEqual(sage, plain);
    // the glowing disc keeps the glow colour
    assert.ok(glowing(plain) > 0);
    assert.equal(glowing(sage), glowing(plain));
  } finally {
    setNaturalPalette(false);
  }
  assert.deepEqual(lamp({ front: "#9fae96" }), lamp(null), "the neon looks keep their own colours");
});

test("a finish colour stays out of the homely styles' grey for neon leftovers (#1175)", () => {
  // the shader turns dark colours with blue far over red and green grey (theme.ts)
  const greyed = (hex: number, k: number) => {
    const c = new Color(hex).multiplyScalar(k);
    return Math.max(c.r, c.g, c.b) < 0.2 && c.b > c.r * 2 && c.b > c.g * 1.5;
  };
  // the blue front swatch fell into it on faces shaded towards the floor; now it never does, and barely moves
  assert.equal(greyed(0x5d7590, 0.6), true);
  const safe = finishSafe(0x5d7590)!;
  for (let k = 0.3; k <= 1.3; k += 0.05) assert.equal(greyed(safe, k), false);
  const hsl = (hex: number) => new Color(hex).getHSL({ h: 0, s: 0, l: 0 });
  assert.ok(Math.abs(hsl(0x5d7590).h - hsl(safe).h) < 0.02 && Math.abs(hsl(0x5d7590).l - hsl(safe).l) < 0.02);
  // the blue fabric too
  for (let k = 0.3; k <= 1.3; k += 0.05) assert.equal(greyed(finishSafe(0x4a6a9a)!, k), false);
  // every other colour stays exactly as it is
  for (const hex of [0x6b4a32, 0x9fae96, 0x34363a, 0xedebe7, 0x8e97a5, 0x4a4f58, 0xa5583a, 0x5b8fe0]) assert.equal(finishSafe(hex), hex);
  assert.equal(finishSafe(null), null);
});

test("a built-in worktop takes the wood finish, without one it stays as it was (#1175)", async () => {
  const { setNaturalPalette } = await import("./palette.ts");
  const draw = (type: string, finish: Furniture["finish"]) => {
    const buf = new GeoBuffer();
    pushFurniture(buf, new LineBuffer(), new GeoBuffer(), { id: "w", type, x: 0, z: 0, rotation: 0, w: 1.2, d: 0.6, h: 0.9, variant: null, finish } as Furniture);
    return buf.c;
  };
  setNaturalPalette(true);
  try {
    for (const type of ["worktop", "kitchen", "island"]) assert.notDeepEqual(draw(type, { wood: "#6b4a32" }), draw(type, null), type);
  } finally {
    setNaturalPalette(false);
  }
  assert.deepEqual(draw("worktop", { wood: "#6b4a32" }), draw("worktop", null));
});

test("a socket is drawn as thin as the plan says, not 5 cm deep (#1236)", () => {
  const socket = (d: number): Furniture => ({ id: "s", type: "wall_socket", x: 2, z: 0, rotation: 0, w: 0.085, d, h: 0.085, mount: 1.1, variant: null }) as Furniture;
  const depthOf = (f: Furniture) => {
    const buf = new GeoBuffer();
    pushFurniture(buf, new LineBuffer(), new GeoBuffer(), f);
    const zs: number[] = [];
    for (let i = 2; i < buf.p.length; i += 3) zs.push(buf.p[i]);
    return Math.max(...zs) - Math.min(...zs);
  };
  // the plate is 1.4 cm deep; with the recess and its holes a few millimetres stand in front of it
  const thin = depthOf(socket(0.014));
  assert.ok(thin < 0.03, `a 1.4 cm socket may not be ${thin.toFixed(3)} m deep`);
  // a socket made deeper by hand still gets its depth
  assert.ok(depthOf(socket(0.2)) > 0.19);
});
