import assert from "node:assert/strict";
import { test } from "node:test";
import { emptyBuilding, newFloor, type Building, type Opening, type Room } from "./model.ts";
import { roomsOnly, shownRoomIds } from "./rooms-filter.ts";

const room = (id: string, x0: number, x1: number): Room => ({
  id,
  name: id,
  area_id: null,
  points: [
    [x0, 0],
    [x1, 0],
    [x1, 3],
    [x0, 3],
  ],
  floor_material: "wood",
});

const door = (id: string, room_id: string, edge: number, offset: number): Opening =>
  ({ id, room_id, edge, offset, width: 0.9, type: "door", sill: 0, height: 2, hinge: "left", leaves: 1, swing: "in", cover: null, contact: null, contact2: null }) as unknown as Opening;

/** Two rooms side by side (kids at 0–4, hall at 4–7), a door between them filed under the hall, a second floor. */
function house(): Building {
  const ground = newFloor("eg", "EG", 0);
  ground.rooms = [room("kids", 0, 4), room("hall", 4, 7)];
  // the hall's edge 3 runs from (4,3) to (4,0): the shared wall; the door 1 m along it
  ground.openings = [door("d1", "hall", 3, 1), door("w1", "kids", 0, 2)];
  ground.furniture = [{ id: "bed", type: "bed", x: 1, z: 1 } as never, { id: "shoe", type: "cabinet", x: 5, z: 1 } as never];
  ground.placements = [{ entity_id: "light.kids", x: 2, z: 1.5 } as never, { entity_id: "light.hall", x: 6, z: 1.5 } as never];
  const top = newFloor("og", "OG", 2.75);
  top.rooms = [room("attic", 0, 7)];
  return { ...emptyBuilding(), floors: [ground, top] };
}

test("only the rooms asked for, with what stands in them; floors without one go", () => {
  const b = roomsOnly(house(), ["kids"]);
  assert.deepEqual(
    b.floors.map((f) => f.id),
    ["eg"],
  );
  const f = b.floors[0];
  assert.deepEqual(
    f.rooms.map((r) => r.id),
    ["kids"],
  );
  assert.deepEqual(
    f.furniture.map((m) => m.id),
    ["bed"],
  );
  assert.deepEqual(
    f.placements.map((p) => p.entity_id),
    ["light.kids"],
  );
});

test("the door to the hidden hall stays, filed under the room shown and seen from its side", () => {
  const f = roomsOnly(house(), ["kids"]).floors[0];
  const d = f.openings.find((o) => o.id === "d1")!;
  assert.equal(d.room_id, "kids");
  // the kids' edge 1 runs from (4,0) to (4,3); the door sat 1 m from (4,3), so 2 m from (4,0)
  assert.equal(d.edge, 1);
  assert.ok(Math.abs(d.offset - 2) < 1e-9);
  assert.equal(d.hinge, "right");
  assert.equal(d.swing, "out");
  assert.ok(f.openings.some((o) => o.id === "w1"));
});

test("the wall shared with a hidden room keeps the inner wall's thickness", () => {
  const kids = roomsOnly(house(), ["kids"]).floors[0].rooms[0];
  assert.deepEqual(kids.wall_thickness, [null, 0.12, null, null]);
  // both rooms shown: nothing is cut
  const both = roomsOnly(house(), ["kids", "hall"]).floors[0].rooms;
  assert.equal(both[0].wall_thickness, undefined);
});

test("a card without the top floor shows no roof: it would come down onto the next floor, roof windows in the air (#967)", () => {
  const b = house();
  b.settings = { ...b.settings, roof: { ...b.settings.roof, type: "gable" } };
  assert.equal(roomsOnly(b, ["kids"]).settings.roof.type, "none");
  assert.equal(roomsOnly(b, ["attic"]).settings.roof.type, "gable");
  assert.equal(roomsOnly(b, ["kids", "attic"]).settings.roof.type, "gable");
  // a house without a roof stays as it is
  b.settings = { ...b.settings, roof: { ...b.settings.roof, type: "none" } };
  assert.equal(roomsOnly(b, ["kids"]).settings, b.settings);
});

test("a card with some rooms of the top floor keeps the whole house's roof footprint (#997)", () => {
  const b = house();
  b.floors[1].rooms = [room("attic", 0, 4), room("store", 4, 7)];
  b.settings = { ...b.settings, roof: { ...b.settings.roof, type: "gable" } };
  const cut = roomsOnly(b, ["attic"]);
  assert.equal(cut.settings.roof.type, "gable");
  assert.deepEqual(cut.settings.roof.frame, [0, 0, 7, 3]);
  // a roof of sections has its own coordinates and needs no frame
  b.settings = { ...b.settings, roof: { ...b.settings.roof, type: "custom", sections: [] } };
  assert.equal(roomsOnly(b, ["attic"]).settings.roof.frame, undefined);
});

test("a roof of sections keeps the sections over the floors a card shows: the attic slopes of a middle floor (#997)", () => {
  const b = house();
  // a third floor over part of the house; the upper floor's other part has an attic roof of its own
  const dg = newFloor("dg", "DG", 5.5);
  dg.rooms = [room("loft", 0, 4)];
  b.floors[1].rooms = [room("attic", 0, 4), room("studio", 4, 7)];
  const sec = (id: string, x0: number, x1: number, base: number, extra: object = {}) =>
    ({ id, x0, z0: 0, x1, z1: 3, shape: "gable", axis: "z", eave_a: base, eave_b: base, pitch_a: 40, pitch_b: 40, base, ...extra }) as never;
  const studio = sec("studio_roof", 4, 7, 4.5);
  const loft = sec("loft_roof", 0, 4, 7.5);
  const dormer = sec("loft_dormer", 1.5, 2.5, 8, { dormer: true });
  b.floors.push(dg);
  b.settings = { ...b.settings, roof: { ...b.settings.roof, type: "custom", sections: [studio, loft, dormer] } };
  // the upper floor alone: its attic roof stays, the loft's roof with its dormer goes
  const og = roomsOnly(b, ["attic", "studio"]).settings.roof;
  assert.equal(og.type, "custom");
  assert.deepEqual(og.sections?.map((s) => s.id), ["studio_roof"]);
  // the top floor: its roof and dormer, not the one on the floor below
  assert.deepEqual(roomsOnly(b, ["loft"]).settings.roof.sections?.map((s) => s.id), ["loft_roof", "loft_dormer"]);
  // every floor: all of it, as it was
  assert.equal(roomsOnly(b, ["kids", "studio", "loft"]).settings, b.settings);
  // the ground floor alone: no roof
  assert.equal(roomsOnly(b, ["kids"]).settings.roof.type, "none");
});

test("rooms the plan no longer has are left out of a card's list", () => {
  assert.deepEqual(shownRoomIds(house(), ["kids", "gone"]), ["kids"]);
  assert.deepEqual(shownRoomIds(house(), []), []);
  assert.deepEqual(shownRoomIds(null, ["kids"]), []);
});
