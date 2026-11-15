import assert from "node:assert/strict";
import { test } from "node:test";
import { bindValue, hasLiveParts, liveGroups, liveKey, slotEntity } from "./live-parts.ts";
import { finishHex, finishRolesOf } from "./finishes.ts";
import { buildIndex, filterEntries, type Previews } from "./library-index.ts";
import type { HassEntity } from "./types.ts";
import type { PackItem } from "./packs.ts";

const st = (entity_id: string, state: string, attributes: Record<string, unknown> = {}) => ({ entity_id, state, attributes }) as unknown as HassEntity;

test("live parts: a door opens with its contact, a cover with its position, a tank fills with its percent", () => {
  assert.equal(bindValue("open", st("binary_sensor.door", "on")), 1);
  assert.equal(bindValue("open", st("binary_sensor.door", "off")), 0);
  assert.equal(bindValue("open", st("cover.flap", "open", { current_position: 40 })), 0.4);
  assert.equal(bindValue("level", st("sensor.print_progress", "37", { unit_of_measurement: "%" })), 0.37);
  assert.equal(bindValue("level", st("sensor.fill", "0.8")), 0.8);
  assert.equal(bindValue("spin", st("sensor.fan_power", "120", { unit_of_measurement: "W" })), 1);
  assert.equal(bindValue("open", undefined), 0);
});

test("live parts: a status light shows fine, off or a fault", () => {
  assert.equal(bindValue("blink", st("binary_sensor.server", "on")), 1);
  assert.equal(bindValue("blink", st("sensor.printer", "printing")), 1);
  assert.equal(bindValue("blink", st("binary_sensor.server", "off")), 0);
  assert.equal(bindValue("blink", st("sensor.printer", "error")), -1);
  assert.equal(bindValue("blink", st("binary_sensor.nas", "unavailable")), -1);
  assert.equal(bindValue("blink", st("binary_sensor.problem", "on", { device_class: "problem" })), -1);
});

test("live parts are grouped by slot and kind; one slot takes the item's own entity", () => {
  const parts = [
    { bind: { slot: "door", kind: "open" as const, hinge: "left" as const } },
    { bind: { slot: "door", kind: "open" as const, hinge: "left" as const } },
    { bind: { slot: "status", kind: "blink" as const } },
    {},
  ];
  const groups = liveGroups(parts);
  assert.equal(groups.size, 2);
  assert.equal(groups.get(liveKey(parts[0].bind!))?.parts.length, 2);
  assert.equal(hasLiveParts({ parts }), true);
  assert.equal(hasLiveParts({ parts: [{}] }), false);
  assert.equal(slotEntity(null, "door", 1, "binary_sensor.own"), "binary_sensor.own");
  assert.equal(slotEntity(null, "door", 2, "binary_sensor.own"), null);
  assert.equal(slotEntity({ door: "binary_sensor.x" }, "door", 2, null), "binary_sensor.x");
  // an oven's power switch does not open its door: the slot takes contacts only
  assert.equal(slotEntity(null, "door", 1, "switch.oven", ["binary_sensor"]), null);
  assert.equal(slotEntity(null, "door", 1, "binary_sensor.oven_door", ["binary_sensor"]), "binary_sensor.oven_door");
});

test("finishes: the roles a built-in or a pack item is drawn with, and a placed item's colour", () => {
  assert.deepEqual(finishRolesOf("sofa", null), ["fabric", "wood"]);
  assert.deepEqual(finishRolesOf("fridge", null), []);
  const item = { id: "x", name: { en: "x" }, size: [1, 1, 1], parts: [{ color: "wood" }, { color: "cushion", top: "white" }] } as unknown as PackItem;
  assert.deepEqual(finishRolesOf("pack:p:x", item), ["wood", "fabric", "front"]);
  assert.equal(finishHex({ finish: { wood: "#6b4a32" } }, "wood"), "#6b4a32");
  assert.equal(finishHex({ finish: { wood: "red" } }, "wood"), null);
  assert.equal(finishHex({}, "fabric"), null);
});

test("the shop's furniture joins the library locked, after the own items, and the chip hides it", () => {
  const previews: Previews = {
    base: "https://mastershort.de/np-previews/",
    packs: [
      { id: "mastershort.living", name: { de: "Wohnzimmer" }, price: { de: "5,90 €" }, url: { de: "https://mastershort.de/?p=1273" }, free: false },
      { id: "mastershort.stairs", name: { de: "Treppen & Geländer", en: "Stairs & Railings" }, price: { de: "3,90 €", en: "€3.90" }, url: { de: "https://mastershort.de/?p=1334" }, free: false },
    ],
    items: [
      { p: "mastershort.living", id: "sofa_3", name: { de: "Sofa 3-Sitzer" }, size: [2.1, 0.9, 0.8], group: "sofa", room: ["living"], tags: [], family: null, variant: null, electric: false, light: false },
      { p: "mastershort.stairs", id: "spiral", name: { de: "Wendeltreppe", en: "Spiral staircase" }, size: [1.6, 1.6, 2.8], group: "stairs", room: [], tags: [], family: null, variant: null, electric: false, light: false },
    ],
    bundle: null,
  };
  const living = { id: "mastershort.living", name: "Wohnzimmer", publisher: "Mastershort", licensee: "x", items: [{ id: "sofa_3", name: { de: "Sofa 3-Sitzer" }, size: [2.1, 0.9, 0.8], parts: [] }] };
  const entries = buildIndex({ packs: [living as never], basics: [], language: "de", basicName: (t) => t, basicNameEn: (t) => t, kindName: (k) => k, size: () => [1, 1, 1], previews });
  const locked = entries.filter((e) => e.locked);
  assert.deepEqual(locked.map((e) => e.type), ["pack:mastershort.stairs:spiral"], "the living room is owned: only the stairs are locked");
  assert.equal(locked[0].locked?.price, "3,90 €");
  assert.equal(locked[0].locked?.pic, "https://mastershort.de/np-previews/mastershort.stairs/spiral.webp");
  assert.equal(entries.indexOf(locked[0]) > entries.findIndex((e) => !e.locked), true);
  const f = { query: "wendel", room: null, electric: false, light: false, outdoor: false };
  assert.equal(filterEntries(entries, f).length, 1);
  assert.equal(filterEntries(entries, { ...f, locked: false }).length, 0);
});
