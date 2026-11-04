import assert from "node:assert/strict";
import { test } from "node:test";
import { emptyBuilding, newFloor, type Building } from "./model.ts";
import { composeSite, placePoint, siteOwner } from "./site.ts";

function house(): Building {
  const eg = newFloor("eg", "EG", 0);
  eg.rooms = [{ id: "wohnen", name: "Wohnen", area_id: null, points: [[0, 0], [6, 0], [6, 4], [0, 4]], floor_material: "wood" }];
  return { ...emptyBuilding(), floors: [eg, newFloor("og", "OG", 2.75)] };
}

function garden(): Building {
  const gh = newFloor("gh", "Gartenhaus", 0);
  gh.rooms = [{ id: "werk", name: "Werkstatt", area_id: "garten", points: [[0, 0], [4, 0], [4, 3], [0, 3]], floor_material: "wood" }];
  gh.openings = [{ id: "tuer", room_id: "werk", edge: 0, offset: 1, width: 0.9, type: "door" } as never];
  gh.furniture = [{ id: "bank", type: "workbench", x: 1, z: 1, rotation: 0 } as never];
  gh.placements = [{ entity_id: "light.werk", x: 2, z: 1.5, rotation: 0 } as never];
  return { ...emptyBuilding(), floors: [gh] };
}

test("a point turns clockwise in the plan like the editor's 90° turn, then moves to its place", () => {
  assert.deepEqual(placePoint([1, 0], { on: true, x: 10, y: 5, rot: 90 }), [10, 6]);
  assert.deepEqual(placePoint([0, 1], { on: true, x: 10, y: 5, rot: 90 }), [9, 5]);
  assert.deepEqual(placePoint([2, 3], { on: true, x: 0, y: 0, rot: 0 }), [2, 3]);
});

test("the garden house joins the house's ground floor at its place, its ids prefixed with its plan", () => {
  const b = composeSite(house(), [{ id: "pgarten", building: garden(), site: { on: true, x: 12, y: 8, rot: 90 } }]);
  assert.deepEqual(
    b.floors.map((f) => f.id),
    ["eg", "og"],
  );
  const eg = b.floors[0];
  assert.deepEqual(
    eg.rooms.map((r) => r.id),
    ["wohnen", "pgarten:werk"],
  );
  // (0,0) → (12,8), (4,0) → (12,12)
  assert.deepEqual(eg.rooms[1].points.slice(0, 2), [
    [12, 8],
    [12, 12],
  ]);
  const door = eg.openings.find((o) => o.id === "pgarten:tuer")!;
  assert.equal(door.room_id, "pgarten:werk");
  const bench = eg.furniture.find((m) => m.id === "pgarten:bank")!;
  assert.deepEqual([bench.x, bench.z, bench.rotation], [11, 9, 90]);
  // a device keeps its entity, it only stands elsewhere
  assert.deepEqual(eg.placements.at(-1), { entity_id: "light.werk", x: 10.5, z: 10, rotation: 90 });
  // the house is left as it was
  assert.equal(house().floors[0].rooms.length, 1);
});

test("a plan not on the property (a holiday flat) stays out; a floor at a height of its own is a floor of its own", () => {
  const flat = garden();
  flat.floors[0].elevation = 6;
  const b = composeSite(house(), [
    { id: "pferien", building: garden(), site: null },
    { id: "pturm", building: flat, site: { on: true, x: 0, y: 20, rot: 0 } },
  ]);
  assert.deepEqual(
    b.floors.map((f) => f.id),
    ["eg", "og", "pturm:gh"],
  );
});

test("a tapped room of the property view belongs to its plan", () => {
  assert.deepEqual(siteOwner("pgarten:werk", "main"), { plan: "pgarten", id: "werk" });
  assert.deepEqual(siteOwner("wohnen", "main"), { plan: "main", id: "wohnen" });
});

test("every building keeps its own roof: both become sections, the garden house's turned and moved with it", () => {
  const h = house();
  h.settings.roof = { ...h.settings.roof, type: "gable", pitch: 35, overhang: 0.4 };
  const g = garden();
  g.settings.roof = { ...g.settings.roof, type: "gable", pitch: 30, overhang: 0.3 };
  const b = composeSite(h, [{ id: "pgarten", building: g, site: { on: true, x: 12, y: 8, rot: 90 } }]);
  const secs = b.settings.roof.sections ?? [];
  assert.equal(b.settings.roof.type, "custom");
  assert.ok(secs.some((x) => !x.id.startsWith("pgarten:")), "the house's own roof");
  const own = secs.filter((x) => x.id.startsWith("pgarten:"));
  assert.ok(own.length >= 1, "the garden house's roof");
  // turned by 90° about its origin and moved: its pivot lies at the garden house's place
  assert.equal(own[0].rotation, 90);
  assert.ok(own[0].pivot![0] > 9 && own[0].pivot![0] < 12.5, String(own[0].pivot));
  // a plan without a roof brings none
  g.settings.roof = { ...g.settings.roof, type: "none" };
  const none = composeSite(h, [{ id: "pgarten", building: g, site: { on: true, x: 12, y: 8, rot: 90 } }]);
  assert.ok((none.settings.roof.sections ?? []).every((x) => !x.id.startsWith("pgarten:")));
});
