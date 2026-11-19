import assert from "node:assert/strict";
import { test } from "node:test";
import { fitSlots, navCover, navFloors, navSlots, phonePlaces } from "./phone.ts";
import type { RoomTile } from "./room-bar.ts";

const tile = (floorId: string, roomId: string, on = 0): RoomTile => ({ floorId, roomId, name: roomId, temp: null, lights: [], lightsOn: Array.from({ length: on }, (_, i) => `light.${roomId}${i}`), humidity: null, open: 0, playing: false, active: on > 0 });

test("the floors with rooms, the lowest first, with their lights on", () => {
  const floors = navFloors(
    [{ id: "og", name: "OG", elevation: 2.75 }, { id: "eg", name: "EG", elevation: 0 }, { id: "roof", name: "Dach", elevation: 5.5 }],
    [tile("og", "bed", 1), tile("eg", "living", 2), tile("eg", "kitchen", 1)],
  );
  assert.deepEqual(floors.map((f) => [f.id, f.rooms.length, f.lightsOn]), [["eg", 2, 3], ["og", 1, 1]]);
});

test("two floors get a place each, one or three share the place Rooms; no blinds, no place for them", () => {
  const two = navFloors([{ id: "eg", name: "EG", elevation: 0 }, { id: "og", name: "OG", elevation: 3 }], [tile("eg", "a", 2), tile("og", "b")]);
  assert.deepEqual(navSlots(two, 1, 4, true).map((s) => [s.id, s.badge]), [["now", 1], ["floor:eg", 2], ["floor:og", 0], ["covers", 4], ["more", 0]]);
  const one = navFloors([{ id: "eg", name: "EG", elevation: 0 }], [tile("eg", "a", 2)]);
  assert.deepEqual(navSlots(one, 0, 0, false).map((s) => s.id), ["now", "rooms", "more"]);
  const three = navFloors([{ id: "a", name: "A", elevation: 0 }, { id: "b", name: "B", elevation: 3 }, { id: "c", name: "C", elevation: 6 }], [tile("a", "x", 1), tile("b", "y", 1), tile("c", "z", 1)]);
  assert.deepEqual(navSlots(three, 0, 0, true).map((s) => [s.id, s.badge]), [["now", 0], ["rooms", 3], ["covers", 0], ["more", 0]]);
});

test("a cover is shut when it says so or stands at 0", () => {
  assert.deepEqual(navCover("cover.a", "A", "closed", undefined), { entity: "cover.a", name: "A", position: null, shut: true });
  assert.equal(navCover("cover.a", "A", "open", 0).shut, true);
  assert.deepEqual(navCover("cover.a", "A", "open", 62.4), { entity: "cover.a", name: "A", position: 62, shut: false });
});

test("own places: at most two, known kinds, an action with its entity, a link inside Home Assistant", () => {
  const p = phonePlaces([
    { kind: "lights" },
    { kind: "action" },
    { kind: "link", path: "https://example.com" },
    { kind: "nonsense" },
    { kind: "action", entity: "scene.good_night", name: "Night" },
    { kind: "climate" },
  ]);
  assert.deepEqual(p.map((x) => x.kind), ["lights", "action"]);
  assert.equal(p[1].entity, "scene.good_night");
  assert.deepEqual(phonePlaces("x"), []);
  assert.equal(phonePlaces([{ kind: "link", path: "/lovelace/energy" }])[0].path, "/lovelace/energy");
  // they stand before "More"
  const slots = navSlots([], 0, 0, false, [{ id: "own:0", label: "Night", badge: 0 }]);
  assert.deepEqual(slots.map((x) => x.id), ["now", "own:0", "more"]);
});

test("a bar of at most five places: two floors share one place, own places and the blinds move under More", () => {
  const slot = (id: string, badge = 0) => ({ id, label: "", badge });
  const seven = [slot("now"), slot("floor:eg", 3), slot("floor:og", 2), slot("covers"), slot("own:0"), slot("own:1"), slot("more")];
  const { bar, over } = fitSlots(seven);
  assert.deepEqual(bar.map((s) => s.id), ["now", "rooms", "covers", "own:0", "more"]);
  assert.equal(bar[1].badge, 5);
  assert.deepEqual(over.map((s) => s.id), ["own:1"]);
  // five fit as they are
  const five = [slot("now"), slot("floor:eg"), slot("floor:og"), slot("covers"), slot("more")];
  assert.deepEqual(fitSlots(five).bar, five);
});
