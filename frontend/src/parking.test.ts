import assert from "node:assert/strict";
import { test } from "node:test";
import { newFloor, type Furniture } from "./model.ts";
import { setPacks } from "./packs.ts";
import { parkedVehicle, parkingEntities, vehicleFurniture, withVehicles } from "./parking.ts";
import type { HomeAssistant } from "./types.ts";

const VAN = "pack:t.cars:van";
const SUV = "pack:t.cars:suv";

function setup() {
  setPacks([
    {
      id: "t.cars",
      name: "Cars",
      publisher: "t",
      licensee: null,
      items: [
        { id: "van", name: { en: "Van" }, size: [2, 4.8, 1.8], vehicle: true, parts: [{ shape: "box", x: 0, z: 0, w: 1, d: 1, y: 0, h: 1, color: "body" }] },
        { id: "suv", name: { en: "SUV" }, size: [1.9, 4.6, 1.7], vehicle: true, parts: [{ shape: "box", x: 0, z: 0, w: 1, d: 1, y: 0, h: 1, color: "body" }] },
      ],
    },
  ]);
  const st = (entity_id: string, state: string) => ({ entity_id, state, attributes: {} });
  const hass = { states: { "binary_sensor.car": st("binary_sensor.car", "on"), "sensor.kind": st("sensor.kind", "black VW Tiguan SUV") } } as unknown as HomeAssistant;
  const spot: Furniture = { id: "p1", type: "parking", x: 3, z: 4, rotation: 90, w: 2.6, d: 5, h: 0.02, variant: null, entity: "binary_sensor.car", vehicle: VAN, scale: 0.9 };
  return { hass, spot };
}

test("vehicles inherit the spot's extra rotations and mounting height", () => {
  const { spot } = setup();
  const vehicle = vehicleFurniture({ ...spot, rotation_x: 45, rotation_z: -30, mount_y: 0.4 }, VAN)!;
  assert.equal(vehicle.rotation_x, 45);
  assert.equal(vehicle.rotation_z, -30);
  assert.equal(vehicle.mount_y, 0.4);
});

test("a spot shows its vehicle while the presence entity reports a car", () => {
  const { hass, spot } = setup();
  assert.equal(parkedVehicle(hass, spot), VAN);
  hass.states["binary_sensor.car"].state = "off";
  assert.equal(parkedVehicle(hass, spot), null);
  // a tracker at home counts too; an unknown entity never shows a car
  hass.states["binary_sensor.car"].state = "home";
  assert.equal(parkedVehicle(hass, spot), VAN);
  assert.equal(parkedVehicle(hass, { ...spot, entity: "binary_sensor.missing" }), null);
  // without a presence entity the vehicle always stands there; without a vehicle nothing does
  assert.equal(parkedVehicle(hass, { ...spot, entity: null }), VAN);
  assert.equal(parkedVehicle(hass, { ...spot, entity: null, vehicle: null }), null);
  assert.equal(parkedVehicle(hass, { ...spot, vehicle: "pack:t.cars:gone" }), null);
});

test("a type sensor picks the vehicle by exact state or a word in its text", () => {
  const { hass, spot } = setup();
  const typed = { ...spot, type_entity: "sensor.kind", types: [{ state: "van", vehicle: VAN }, { state: "SUV", vehicle: SUV }] };
  assert.equal(parkedVehicle(hass, typed), SUV);
  hass.states["sensor.kind"].state = "van";
  assert.equal(parkedVehicle(hass, typed), VAN);
  // no match: the default vehicle
  hass.states["sensor.kind"].state = "bicycle";
  assert.equal(parkedVehicle(hass, typed), VAN);
  assert.deepEqual(parkingEntities([{ ...newFloor("f", "F", 0), furniture: [typed] }]), ["binary_sensor.car", "sensor.kind"]);
});

test("the parked vehicle becomes furniture of the pack item's size times the spot's scale", () => {
  const { hass, spot } = setup();
  const car = vehicleFurniture(spot, VAN)!;
  assert.equal(car.type, VAN);
  assert.deepEqual([car.x, car.z, car.rotation], [3, 4, 90]);
  assert.deepEqual([car.w, car.d, car.h].map((v) => Math.round(v * 100) / 100), [1.8, 4.32, 1.62]);
  const floor = { ...newFloor("f", "F", 0), furniture: [spot] };
  assert.equal(withVehicles(floor, new Map()).furniture.length, 1);
  assert.equal(withVehicles(floor, new Map([["p1", parkedVehicle(hass, spot)!]])).furniture.length, 2);
});
