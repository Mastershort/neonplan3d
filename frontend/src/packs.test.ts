import assert from "node:assert/strict";
import { test } from "node:test";
import { isLamp, newFloor } from "./model.ts";
import { furnitureSize, isElectric, mountBase, packDisplay, packItem, packItemName, packName, packType, setPacks, type FurniturePack } from "./packs.ts";

const pack: FurniturePack = {
  id: "demo.pack",
  name: "Demo",
  publisher: "Demo",
  licensee: null,
  items: [{ id: "tv", name: { de: "Fernseher groß", en: "Big TV" }, size: [2, 0.3, 1.2], electric: true, parts: [{ shape: "box", x: 0, z: 0, w: 1, d: 1, y: 0, h: 1, color: "dark" }] }],
};

test("pack furniture resolves by type, with size, name and power link", () => {
  setPacks([pack]);
  const type = packType("demo.pack", "tv");
  assert.equal(type, "pack:demo.pack:tv");
  assert.deepEqual(furnitureSize(type), [2, 0.3, 1.2]);
  assert.equal(isElectric(type), true);
  assert.equal(packItemName(packItem(type)!, "de-DE"), "Fernseher groß");
  assert.equal(packItemName(packItem(type)!, "fr"), "Big TV");
  // built-in types keep their sizes; a removed pack leaves a plain default box
  assert.equal(furnitureSize("sofa").length, 3);
  setPacks([]);
  assert.equal(packItem(type), undefined);
  assert.deepEqual(furnitureSize(type), [0.6, 0.6, 0.8]);
  assert.equal(isElectric(type), false);
});

test("pack items stand on the floor, on furniture, on a wall or hang from the ceiling", () => {
  const part = { shape: "box" as const, x: 0, z: 0, w: 1, d: 1, y: 0, h: 1, color: "wood" };
  setPacks([
    {
      id: "p",
      name: "P",
      publisher: "P",
      licensee: null,
      items: [
        { id: "island", name: { en: "Island" }, size: [2, 1, 0.9], surface: true, parts: [part] },
        { id: "coffee", name: { en: "Coffee" }, size: [0.3, 0.4, 0.4], mount: "surface", electric: true, parts: [part] },
        { id: "box", name: { en: "Wallbox" }, size: [0.3, 0.15, 0.4], mount: "wall", wall_y: 1.1, parts: [part] },
        { id: "chandelier", name: { en: "Chandelier" }, size: [0.8, 0.8, 0.6], mount: "ceiling", light: "pendant", parts: [{ ...part, glow: true }] },
      ],
    },
  ]);
  const floor = newFloor("f", "F", 0);
  floor.furniture = [{ id: "i", type: "pack:p:island", x: 0, z: 0, rotation: 0, w: 2, d: 1, h: 0.9, variant: null }];
  assert.equal(mountBase(floor, { type: "pack:p:coffee", x: 0.2, z: 0, h: 0.4 }), 0.9);
  assert.equal(mountBase(floor, { type: "pack:p:coffee", x: 3, z: 0, h: 0.4 }), 0);
  assert.equal(mountBase(floor, { type: "pack:p:box", x: 0, z: 0, h: 0.4 }), 1.1);
  // a wall item hung at another height
  assert.equal(mountBase(floor, { type: "pack:p:box", x: 0, z: 0, h: 0.4, mount_y: 1.6 }), 1.6);
  assert.equal(mountBase(floor, { type: "pack:p:chandelier", x: 0, z: 0, h: 0.6 }), 1.9);
  assert.equal(isLamp("pack:p:chandelier"), true);
  assert.equal(isLamp("pack:p:island"), false);
  setPacks([]);
});

test("our packs show an English name outside German, others keep theirs (#224)", () => {
  assert.equal(packName({ id: "mastershort.office", name: "Büro & Gaming" }, "en"), "Office & Gaming");
  assert.equal(packName({ id: "mastershort.office", name: "Büro & Gaming" }, "de-DE"), "Büro & Gaming");
  assert.equal(packName({ id: "mastershort.living_sample", name: "Wohnzimmer – Schnupper-Pack" }, "fr"), "Living Room – Sampler");
  assert.equal(packName({ id: "pro_weather", name: "Wetter draußen" }, "en"), "Pro: Weather Outside");
  assert.equal(packName({ id: "someone.else", name: "Möbel" }, "en"), "Möbel");
});

test("a status light is no display: printers ask for a device, TVs for a media player", () => {
  setPacks([
    {
      id: "t",
      name: "T",
      publisher: "x",
      items: [
        { id: "tv", name: { en: "TV" }, size: [1.2, 0.08, 0.7], parts: [{ shape: "box", x: 0, z: 0.4, w: 0.95, d: 0.1, y: 0.05, h: 0.9, color: "accent", screen: true }] },
        { id: "printer", name: { en: "Printer" }, size: [0.39, 0.4, 0.46], parts: [{ shape: "box", x: -0.3, z: 0.5, w: 0.2, d: 0.0125, y: 0.03, h: 0.07, color: "accent", screen: true }] },
      ],
    } as unknown as FurniturePack,
  ]);
  assert.equal(packDisplay("pack:t:tv"), true);
  assert.equal(packDisplay("pack:t:printer"), false);
  setPacks([]);
});
