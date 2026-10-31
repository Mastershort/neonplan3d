import assert from "node:assert/strict";
import { test } from "node:test";
import { emptyBuilding, newFloor } from "./model.ts";
import { exportFile, parseExport } from "./transfer.ts";

function building() {
  const b = emptyBuilding();
  const f = newFloor("eg", "EG", 0);
  f.rooms = [{ id: "r", name: "Wohnen", area_id: "living_room", points: [[0, 0], [4, 0], [4, 3], [0, 3]], floor_material: "wood" }];
  f.furniture = [{ id: "m", type: "lamp_ceiling", x: 2, z: 1.5, rotation: 0, w: 0.4, d: 0.4, h: 0.08, variant: null, entity: "light.decke", power: null }];
  f.placements = [{ entity_id: "sensor.temp", x: 1, z: 1, y: null }];
  f.background = { image_id: "img", x: 0, z: 0, width: 10, opacity: 0.5 };
  b.floors = [f];
  b.energy.grid = "sensor.grid";
  b.presence = [{ person: "person.mia", sensor: "sensor.mia" }];
  return b;
}

test("a shareable export has no entities, areas or images", () => {
  const file = exportFile(building(), true);
  const f = file.building.floors[0];
  assert.equal(f.rooms[0].area_id, null);
  assert.equal(f.furniture[0].entity, null);
  assert.deepEqual(f.placements, []);
  assert.equal(f.background, null);
  assert.equal(file.building.energy.grid, null);
  assert.deepEqual(file.building.presence, []);
  // the room shape and the lamp stay
  assert.equal(f.rooms[0].points.length, 4);
  assert.equal(f.furniture[0].type, "lamp_ceiling");
});

test("import reads export files and plain buildings, and rejects anything else", () => {
  const full = exportFile(building(), false);
  const back = parseExport(JSON.stringify(full));
  assert.equal(back.floors[0].furniture[0].entity, "light.decke");
  assert.equal(back.floors[0].background, null, "images are not imported");
  assert.equal(parseExport(JSON.stringify(building())).floors.length, 1);
  assert.throws(() => parseExport("{}"));
  assert.throws(() => parseExport("kein json"));
});

test("a shareable export leaves no entity anywhere, however new the field", () => {
  const b = building();
  const f = b.floors[0];
  const extra = {
    lock: "lock.haustuer",
    fan_entity: "fan.decke",
    sensors: ["sensor.gas", "sensor.wasser"],
    by_entity: { "light.decke": { x: 1 } },
    nested: { deep: [{ rain: "binary_sensor.regen", label: "Regen" }] },
    device_id: "abc123",
    file: "plan.json",
    version: "2.0.11",
    color: "#ff00aa",
  };
  Object.assign(f.furniture[0], extra);
  Object.assign(b.settings, { rain_entity: "binary_sensor.regen", outage_entity: "binary_sensor.netz" });
  const out = exportFile(b, true).building;
  const text = JSON.stringify(out);
  for (const id of ["lock.haustuer", "fan.decke", "sensor.gas", "light.decke", "binary_sensor.regen", "binary_sensor.netz", "abc123", "living_room"]) assert.ok(!text.includes(id), id);
  const m = out.floors[0].furniture[0] as unknown as Record<string, unknown>;
  assert.deepEqual(m.sensors, []);
  assert.deepEqual(m.by_entity, {});
  assert.equal(m.lock, null);
  // what is no link stays
  assert.equal(m.file, "plan.json");
  assert.equal(m.version, "2.0.11");
  assert.equal(m.color, "#ff00aa");
  assert.deepEqual(m.nested, { deep: [{ rain: null, label: "Regen" }] });
  // the original plan is untouched
  assert.equal((f.furniture[0] as unknown as Record<string, unknown>).lock, "lock.haustuer");
});
