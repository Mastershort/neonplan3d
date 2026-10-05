import assert from "node:assert/strict";
import { test } from "node:test";

test("a lamp switched by a relay takes colour and brightness from its colour entity", async () => {
  const { lightGlow } = await import("./devices.ts");
  const relay = { entity_id: "switch.relay", state: "on", attributes: {}, last_changed: "", last_updated: "", context: { id: "", user_id: null, parent_id: null } };
  const bulb = { ...relay, entity_id: "light.bulb", attributes: { brightness: 255, rgb_color: [0, 0, 255], color_mode: "rgb" } };
  const g = lightGlow(relay as never, bulb as never)!;
  assert.deepEqual(g.color, [0, 0, 1]);
  assert.equal(g.level, 1);
  // the relay off: no glow, whatever the bulb says
  assert.equal(lightGlow({ ...relay, state: "off" } as never, bulb as never), null);
  // the bulb unavailable: the relay's own (plain) glow
  assert.deepEqual(lightGlow(relay as never, { ...bulb, state: "unavailable" } as never)!.color, [1, 0.71, 0.28]);
});
import { appColor, areaEntities, otherAreaEntities, roomClimateSensors, roomClimateValue, unassignedEntities, autoPlace, entityName, fridgeDoors, furnitureEntities, groupByDevice, isActive, kindOf, lightGlow, openingEntities, openingState, powerSensorsOf, primaryEntities, roomPanelEntities, windowPosition, confirmEntities, robotRoom, robotRoomSensor, roomKey } from "./devices.ts";
import type { Floor, Opening, Room } from "./model.ts";
import { centroid, newFloor, pointInPolygon } from "./model.ts";
import type { HomeAssistant } from "./types.ts";

/** Opening state without the "sensed" flag (tested on its own below). */
function stateOf(...args: Parameters<typeof openingState>) {
  const { sensed: _sensed, ...rest } = openingState(...args);
  return rest;
}

function hassWith(): HomeAssistant {
  const st = (entity_id: string, state: string, attributes: Record<string, unknown> = {}) => ({ entity_id, state, attributes });
  return {
    language: "de",
    connection: {} as HomeAssistant["connection"],
    callWS: async () => undefined as never,
    callService: async () => undefined,
    areas: { wohnen: { area_id: "wohnen", name: "Wohnzimmer" } },
    devices: { d1: { id: "d1", area_id: "wohnen" } },
    entities: {
      "light.decke": { entity_id: "light.decke", area_id: "wohnen" },
      "light.stehlampe": { entity_id: "light.stehlampe", device_id: "d1" },
      "switch.versteckt": { entity_id: "switch.versteckt", area_id: "wohnen", hidden: true },
      "switch.firmware": { entity_id: "switch.firmware", area_id: "wohnen", entity_category: "config" },
      "sensor.temp": { entity_id: "sensor.temp", area_id: "wohnen" },
      "sensor.signal": { entity_id: "sensor.signal", area_id: "wohnen" },
      "cover.rollo": { entity_id: "cover.rollo", area_id: "wohnen" },
      "light.kueche": { entity_id: "light.kueche", area_id: "kueche" },
      "update.x": { entity_id: "update.x", area_id: "wohnen" },
    },
    states: {
      "light.decke": st("light.decke", "on", { friendly_name: "Wohnzimmer Decke", brightness: 128, color_mode: "color_temp", color_temp_kelvin: 2700 }),
      "light.stehlampe": st("light.stehlampe", "off", { friendly_name: "Stehlampe" }),
      "switch.versteckt": st("switch.versteckt", "on"),
      "switch.firmware": st("switch.firmware", "on"),
      "sensor.temp": st("sensor.temp", "21.5", { device_class: "temperature", friendly_name: "Temperatur" }),
      "sensor.signal": st("sensor.signal", "-60", { device_class: "signal_strength" }),
      "cover.rollo": st("cover.rollo", "open", { friendly_name: "Rollladen" }),
      "light.kueche": st("light.kueche", "on"),
      "update.x": st("update.x", "off"),
    },
  };
}

test("area entities include device areas and skip hidden, config and unsupported entities", () => {
  const ids = areaEntities(hassWith(), "wohnen");
  assert.deepEqual(ids, ["light.decke", "light.stehlampe", "cover.rollo", "sensor.temp"]);
  assert.deepEqual(areaEntities(hassWith(), null), []);
});

test("entity names drop the area prefix", () => {
  const hass = hassWith();
  assert.equal(entityName(hass, "light.decke", "Wohnzimmer"), "Decke");
  assert.equal(entityName(hass, "light.stehlampe", "Wohnzimmer"), "Stehlampe");
});

test("kinds, active states and light glow", () => {
  const hass = hassWith();
  assert.equal(kindOf("media_player.tv"), "media");
  assert.equal(kindOf("input_boolean.gast"), "switch");
  assert.equal(kindOf("automation.x"), null);
  assert.ok(isActive(hass.states["light.decke"]));
  assert.ok(isActive(hass.states["cover.rollo"]));
  assert.ok(!isActive(hass.states["light.stehlampe"]));
  const glow = lightGlow(hass.states["light.decke"])!;
  // a perceptual curve: half brightness glows at 0.2 + 0.8 * sqrt(0.5), a lamp at 10 % still clearly "on"
  assert.ok(Math.abs(glow.level - (0.2 + 0.8 * Math.sqrt(128 / 255))) < 1e-9);
  assert.ok(lightGlow({ ...hass.states["light.decke"], attributes: { ...hass.states["light.decke"].attributes, brightness: 26 } })!.level > 0.4);
  assert.ok(glow.color[0] > glow.color[2], "2700 K is warm");
  assert.equal(lightGlow(hass.states["light.stehlampe"]), null);
});

const room: Room = { id: "r", name: "R", area_id: null, points: [[0, 0], [5, 0], [5, 4], [0, 4]], floor_material: "wood" };

test("automatic placement keeps devices inside the room, apart, and off the room label", () => {
  const ids = ["light.a", "light.b", "switch.c", "sensor.d", "cover.e"];
  const out = autoPlace(room, ids);
  assert.equal(out.length, ids.length);
  const label = centroid(room.points);
  for (const p of out) {
    assert.ok(pointInPolygon([p.x, p.z], room.points));
    // lamps hang from the ceiling and may sit above the room label; other markers keep it free
    if (!p.entity_id.startsWith("light.")) assert.ok(Math.hypot(p.x - label[0], p.z - label[1]) >= 0.69, "room label stays free");
  }
  const first = autoPlace(room, ["light.a"])[0];
  assert.ok(Math.hypot(first.x - label[0], first.z - label[1]) < 0.3, "a single ceiling light goes to the middle");
  for (let i = 0; i < out.length; i++) {
    for (let j = i + 1; j < out.length; j++) assert.ok(Math.hypot(out[i].x - out[j].x, out[i].z - out[j].z) > 0.8);
  }
  assert.deepEqual(autoPlace(room, ids), out, "deterministic");
});

test("automatic placement avoids markers that are already there", () => {
  const [first] = autoPlace(room, ["switch.a"]);
  const [second] = autoPlace(room, ["switch.b"], [[first.x, first.z]]);
  assert.ok(Math.hypot(first.x - second.x, first.z - second.z) > 1);
});

test("automatic placement works in a tiny room", () => {
  const tiny: Room = { ...room, points: [[0, 0], [0.8, 0], [0.8, 0.8], [0, 0.8]] };
  const out = autoPlace(tiny, ["light.a", "switch.b"]);
  assert.equal(out.length, 2);
  for (const p of out) assert.ok(pointInPolygon([p.x, p.z], tiny.points));
});

test("doors and windows get blinds and contacts of their room's area, or the ones set by hand", () => {
  const hass = hassWith();
  hass.entities!["binary_sensor.f1"] = { entity_id: "binary_sensor.f1", area_id: "wohnen" };
  hass.entities!["binary_sensor.f2"] = { entity_id: "binary_sensor.f2", area_id: "wohnen" };
  hass.entities!["binary_sensor.tuer"] = { entity_id: "binary_sensor.tuer", area_id: "wohnen" };
  hass.states["binary_sensor.f1"] = { entity_id: "binary_sensor.f1", state: "on", attributes: { device_class: "window" } };
  hass.states["binary_sensor.f2"] = { entity_id: "binary_sensor.f2", state: "off", attributes: { device_class: "window" } };
  hass.states["binary_sensor.tuer"] = { entity_id: "binary_sensor.tuer", state: "off", attributes: { device_class: "door" } };
  const o = (id: string, type: "door" | "window", edge: number, extra: Partial<Opening> = {}): Opening => ({
    id, room_id: "r", edge, offset: 1, width: 1, type, sill: 0.9, height: 1.3, hinge: "left", leaves: 1, swing: "in", cover: null, contact: null, contact2: null, tilt: null, ...extra,
  });
  const floor: Floor = {
    ...newFloor("f", "F", 0),
    rooms: [{ ...room, area_id: "wohnen" }],
    openings: [o("w2", "window", 2), o("w1", "window", 0), o("d", "door", 1), o("w3", "window", 3, { cover: "none", contact: "binary_sensor.tuer" })],
  };
  const links = openingEntities(hass, [floor]);
  // the only blind of the area serves every window without its own choice; sensors go one per window
  assert.deepEqual(links.get("w1"), { cover: "cover.rollo", contact: "binary_sensor.f1", tilt: null, contact2: null, tilt2: null, position: null, positionInverted: false, tiltAngle: null, tiltMax: null, tiltOffset: null, tiltInvert: false, shut: false });
  assert.deepEqual(links.get("w2"), { cover: "cover.rollo", contact: "binary_sensor.f2", tilt: null, contact2: null, tilt2: null, position: null, positionInverted: false, tiltAngle: null, tiltMax: null, tiltOffset: null, tiltInvert: false, shut: false });
  assert.deepEqual(links.get("w3"), { cover: null, contact: "binary_sensor.tuer", tilt: null, contact2: null, tilt2: null, position: null, positionInverted: false, tiltAngle: null, tiltMax: null, tiltOffset: null, tiltInvert: false, shut: false });
  assert.deepEqual(links.get("d"), { cover: null, contact: "binary_sensor.tuer", tilt: null, contact2: null, tilt2: null, position: null, positionInverted: false, tiltAngle: null, tiltMax: null, tiltOffset: null, tiltInvert: false, shut: false });
});

test("a position sensor drives the blind live, as a percentage or a fraction", () => {
  const hass = hassWith();
  hass.states["cover.rollo"] = { entity_id: "cover.rollo", state: "closing", attributes: { current_position: 100 } };
  hass.states["sensor.level"] = { entity_id: "sensor.level", state: "0.25", attributes: {} };
  const e = { cover: "cover.rollo", contact: null, tilt: null, position: "sensor.level" };
  assert.equal(stateOf(hass, e).cover, 0.75);
  hass.states["sensor.level"].state = "60";
  assert.equal(stateOf(hass, e).cover, 0.4);
  assert.equal(stateOf(hass, { ...e, positionInverted: true }).cover, 0.6);
  hass.states["sensor.level"] = { entity_id: "sensor.level", state: "1", attributes: { unit_of_measurement: "%" } };
  assert.equal(stateOf(hass, e).cover, 0.99);
  // an unavailable sensor leaves the cover entity in charge (its position: fully open)
  hass.states["sensor.level"].state = "unavailable";
  assert.equal(stateOf(hass, e).cover, 0);
});

test("opening states: open, tilted and blind position", () => {
  const hass = hassWith();
  hass.states["binary_sensor.k"] = { entity_id: "binary_sensor.k", state: "on", attributes: {} };
  hass.states["binary_sensor.t"] = { entity_id: "binary_sensor.t", state: "on", attributes: {} };
  hass.states["cover.p"] = { entity_id: "cover.p", state: "open", attributes: { current_position: 25 } };
  assert.deepEqual(stateOf(hass, { cover: null, contact: "binary_sensor.k", tilt: null }), { open: 1, open2: 0, tilt: 0, tilt2: 0, cover: null });
  assert.deepEqual(stateOf(hass, { cover: "cover.p", contact: "binary_sensor.k", tilt: "binary_sensor.t" }), { open: 0, open2: 0, tilt: 1, tilt2: 0, cover: 0.75 });
  assert.deepEqual(stateOf(hass, { cover: "cover.rollo", contact: null, tilt: null }), { open: 0, open2: 0, tilt: 0, tilt2: 0, cover: 0 });
});

test("garage doors use garage covers and contacts; door leaves follow their contact or stand half open", () => {
  const hass = hassWith();
  const add = (id: string, state: string, attributes: Record<string, unknown>) => {
    hass.entities![id] = { entity_id: id, area_id: "wohnen" };
    hass.states[id] = { entity_id: id, state, attributes };
  };
  add("cover.tor", "open", { device_class: "garage" });
  add("binary_sensor.tuer", "on", { device_class: "door" });
  const o = (id: string, type: Opening["type"], edge: number): Opening => ({
    id, room_id: "r", edge, offset: 1, width: 1, type, sill: 0, height: 2, hinge: "left", leaves: 1, swing: "in", cover: null, contact: null, contact2: null, tilt: null,
  });
  const floor: Floor = { ...newFloor("f", "F", 0), rooms: [{ ...room, area_id: "wohnen" }], openings: [o("g", "garage", 0), o("w", "window", 1), o("d", "door", 2)] };
  const links = openingEntities(hass, [floor]);
  // the garage cover goes to the garage door only; the window keeps the ordinary blind
  assert.equal(links.get("g")!.cover, "cover.tor");
  assert.equal(links.get("w")!.cover, "cover.rollo");
  assert.equal(links.get("d")!.contact, "binary_sensor.tuer");
  assert.deepEqual(stateOf(hass, links.get("g")!, "garage"), { open: 0, open2: 0, tilt: 0, tilt2: 0, cover: 0 });
  hass.states["cover.tor"] = { entity_id: "cover.tor", state: "closing", attributes: { device_class: "garage" } };
  assert.equal(stateOf(hass, links.get("g")!, "garage").cover, 0.5);
  assert.equal(stateOf(hass, links.get("d")!, "door").open, 1);
  assert.equal(stateOf(hass, { cover: null, contact: null, tilt: null }, "door").open, 0.5);
});

test("entities are grouped by device; the entity without a name of its own is the main one", () => {
  const hass = hassWith();
  const add = (id: string, device: string, name?: string) => {
    hass.entities![id] = { entity_id: id, area_id: "wohnen", device_id: device, ...(name ? { name } : {}) };
    hass.states[id] = { entity_id: id, state: "on", attributes: { friendly_name: name ?? "Awtrix" } };
  };
  add("light.awtrix_indicator_1", "awtrix", "Indicator 1");
  add("light.awtrix_matrix", "awtrix", "Matrix");
  add("light.awtrix", "awtrix");
  add("light.awtrix_indicator_2", "awtrix", "Indicator 2");
  const ids = areaEntities(hass, "wohnen").filter((id) => kindOf(id) === "light");
  const groups = groupByDevice(hass, ids);
  const awtrix = groups.find((g) => g.primary === "light.awtrix")!;
  assert.deepEqual([...awtrix.others].sort(), ["light.awtrix_indicator_1", "light.awtrix_indicator_2", "light.awtrix_matrix"]);
  // entities without a device are their own group
  assert.ok(groups.some((g) => g.primary === "light.decke" && g.others.length === 0));
  assert.deepEqual(primaryEntities(hass, ids).length, groups.length);
});

test("furniture finds its entities in the room's area: the TV, and power sensors by device or name", () => {
  const hass = hassWith();
  const add = (id: string, state: string, attributes: Record<string, unknown>, device?: string) => {
    hass.entities![id] = { entity_id: id, area_id: "wohnen", ...(device ? { device_id: device } : {}) };
    hass.states[id] = { entity_id: id, state, attributes };
  };
  add("media_player.soundbar", "on", { friendly_name: "Soundbar" });
  add("media_player.fernseher", "on", { friendly_name: "Fernseher", device_class: "tv", app_name: "Netflix" }, "d_tv");
  add("sensor.tv_leistung", "95", { friendly_name: "TV Leistung", device_class: "power" }, "d_tv");
  add("sensor.kuehlschrank_leistung", "80", { friendly_name: "Kühlschrank Leistung", device_class: "power" });
  const item = (id: string, type: string, extra: Record<string, unknown> = {}) => ({ id, type, x: 2, z: 1.5, rotation: 0, w: 1, d: 0.5, h: 0.5, variant: null, entity: null, power: null, ...extra });
  const floor: Floor = {
    ...newFloor("f", "F", 0),
    rooms: [{ ...room, area_id: "wohnen" }],
    furniture: [item("tv", "tv_board"), item("fridge", "fridge"), item("sofa", "sofa"), item("desk", "desk", { power: "none" })],
  };
  const links = furnitureEntities(hass, [floor]);
  assert.deepEqual(links.get("tv"), { entity: "media_player.fernseher", power: "sensor.tv_leistung" });
  assert.deepEqual(links.get("fridge"), { entity: null, power: "sensor.kuehlschrank_leistung" });
  assert.equal(links.get("sofa"), undefined);
  assert.equal(links.get("desk"), undefined);
  assert.deepEqual(appColor(hass.states["media_player.fernseher"]), [0.9, 0.04, 0.08]);
  assert.equal(appColor({ entity_id: "media_player.x", state: "off", attributes: {} }), null);
});

test("lamps take a light of their room, preferring one whose name fits", () => {
  const hass = hassWith();
  hass.entities!["light.stehlampe"].area_id = "wohnen";
  const lamp = (id: string, type: string, entity: string | null = null) => ({ id, type, x: 2, z: 1.5, rotation: 0, w: 0.4, d: 0.4, h: 1.7, variant: null, entity, power: null });
  const floor: Floor = {
    ...newFloor("f", "F", 0),
    rooms: [{ ...room, area_id: "wohnen" }],
    furniture: [lamp("a", "lamp_floor"), lamp("b", "lamp_ceiling"), lamp("c", "lamp_table")],
  };
  const links = furnitureEntities(hass, [floor]);
  assert.equal(links.get("a")!.entity, "light.stehlampe");
  assert.equal(links.get("b")!.entity, "light.decke");
  // no free light left for the third lamp
  assert.equal(links.get("c"), undefined);
});

test("double doors and French windows: the second leaf follows a contact of its own", () => {
  const hass = hassWith();
  hass.states["binary_sensor.a"] = { entity_id: "binary_sensor.a", state: "off", attributes: { device_class: "door" } };
  hass.states["binary_sensor.b"] = { entity_id: "binary_sensor.b", state: "on", attributes: { device_class: "door" } };
  const e = { cover: null, contact: "binary_sensor.a", tilt: null, contact2: "binary_sensor.b" };
  assert.deepEqual(stateOf(hass, e, "window"), { open: 0, open2: 1, tilt: 0, tilt2: 0, cover: null });
  assert.deepEqual(stateOf(hass, e, "door"), { open: 0, open2: 1, tilt: 0, tilt2: 0, cover: null });
  // without a sensor the second leaf of a double door stays shut
  assert.equal(stateOf(hass, { cover: null, contact: null, tilt: null }, "door").open2, 0);
});

test("the room panel shows what the plan shows in the room, plus picked entities", () => {
  const hass = hassWith();
  const floor: Floor = {
    ...newFloor("f", "F", 0),
    rooms: [{ ...room, area_id: "wohnen", panel: ["sensor.signal"] }],
    placements: [{ entity_id: "cover.rollo", x: 1, z: 1, y: null, mount: null }],
    furniture: [{ id: "l", type: "lamp_ceiling", x: 2, z: 2, rotation: 0, w: 0.4, d: 0.4, h: 0.1, variant: null, entity: "light.decke", power: null }],
  };
  const { shown, more } = roomPanelEntities(hass, floor, floor.rooms[0]);
  assert.deepEqual(shown.sort(), ["cover.rollo", "light.decke", "sensor.signal"]);
  // the rest of the area is offered, not shown
  assert.ok(more.includes("sensor.temp"));
  assert.ok(!more.includes("light.decke"));
});

test("window handles with three states, HomematicIP window_state and plain contacts", () => {
  const st = (state: string, attributes: Record<string, unknown> = {}) => ({ entity_id: "x", state, attributes });
  assert.equal(windowPosition(st("on")), "open");
  assert.equal(windowPosition(st("off")), "closed");
  assert.equal(windowPosition(st("tilted")), "tilted");
  assert.equal(windowPosition(st("gekippt")), "tilted");
  assert.equal(windowPosition(st("Geschlossen")), "closed");
  assert.equal(windowPosition(st("on", { window_state: "TILTED" })), "tilted");
  assert.equal(windowPosition(st("unavailable")), null);
  assert.equal(windowPosition(st("42")), null);

  const hass = hassWith();
  hass.states["sensor.griff"] = { entity_id: "sensor.griff", state: "tilted", attributes: {} };
  const e = { cover: null, contact: "sensor.griff", tilt: null };
  assert.deepEqual(stateOf(hass, e, "window"), { open: 0, open2: 0, tilt: 1, tilt2: 0, cover: null });
  hass.states["sensor.griff"] = { entity_id: "sensor.griff", state: "open", attributes: {} };
  assert.equal(stateOf(hass, e, "window").open, 1);
  // a sensor that only knows "tilted or not" goes into the tilt field
  hass.states["binary_sensor.kipp"] = { entity_id: "binary_sensor.kipp", state: "on", attributes: {} };
  hass.states["binary_sensor.auf"] = { entity_id: "binary_sensor.auf", state: "on", attributes: {} };
  assert.deepEqual(stateOf(hass, { cover: null, contact: "binary_sensor.auf", tilt: "binary_sensor.kipp" }, "window"), { open: 0, open2: 0, tilt: 1, tilt2: 0, cover: null });
});

test("each leaf of a double window has its own kind of sensor", () => {
  const hass = hassWith();
  // left: a handle sensor that reports tilted; right: a plain contact that is open
  hass.states["sensor.griff_links"] = { entity_id: "sensor.griff_links", state: "tilted", attributes: {} };
  hass.states["binary_sensor.rechts"] = { entity_id: "binary_sensor.rechts", state: "on", attributes: {} };
  const e = { cover: null, contact: "sensor.griff_links", tilt: null, contact2: "binary_sensor.rechts", tilt2: null };
  assert.deepEqual(stateOf(hass, e, "window"), { open: 0, open2: 1, tilt: 1, tilt2: 0, cover: null });
  // the second leaf tilts with a handle sensor too
  hass.states["sensor.griff_rechts"] = { entity_id: "sensor.griff_rechts", state: "gekippt", attributes: {} };
  assert.equal(stateOf(hass, { ...e, contact2: "sensor.griff_rechts" }, "window").tilt2, 1);
});

test("area and power lookups are cached per registry and refreshed when the registry changes", () => {
  const hass = hassWith();
  hass.entities!["sensor.leistung"] = { entity_id: "sensor.leistung", device_id: "d1" };
  hass.states["sensor.leistung"] = { entity_id: "sensor.leistung", state: "12", attributes: { device_class: "power" } };
  const first = areaEntities(hass, "wohnen");
  // the same registry gives the same list (no scan, no new array)
  assert.equal(areaEntities(hass, "wohnen"), first);
  assert.deepEqual(powerSensorsOf(hass, "d1"), ["sensor.leistung"]);
  // Home Assistant replaces the registry object when an entity is added
  hass.entities = { ...hass.entities, "light.neu": { entity_id: "light.neu", area_id: "wohnen" } };
  hass.states = { ...hass.states, "light.neu": { entity_id: "light.neu", state: "off", attributes: {} } };
  assert.ok(areaEntities(hass, "wohnen").includes("light.neu"));
  // a state that appears for a known entity (the registry object stays) is picked up as well
  hass.entities = { ...hass.entities, "light.spaet": { entity_id: "light.spaet", area_id: "wohnen" } };
  hass.states = { ...hass.states };
  assert.ok(!areaEntities(hass, "wohnen").includes("light.spaet"));
  hass.states = { ...hass.states, "light.spaet": { entity_id: "light.spaet", state: "on", attributes: {} } };
  assert.ok(areaEntities(hass, "wohnen").includes("light.spaet"));
});

test("smart fridge doors follow their door sensors ('on' or 'open'; none/unset = closed)", () => {
  const hass = hassWith();
  hass.states["binary_sensor.gefrier"] = { entity_id: "binary_sensor.gefrier", state: "on", attributes: {} };
  hass.states["binary_sensor.kuehl"] = { entity_id: "binary_sensor.kuehl", state: "off", attributes: {} };
  const floor = {
    ...newFloor("f", "F", 0),
    furniture: [
      { id: "a", type: "fridge_smart", x: 1, z: 1, rotation: 0, w: 0.9, d: 0.7, h: 1.8, variant: null, door_left: "binary_sensor.gefrier", door_right: "binary_sensor.kuehl" },
      { id: "b", type: "fridge_smart", x: 3, z: 1, rotation: 0, w: 0.9, d: 0.7, h: 1.8, variant: null, door_right: "none" },
      { id: "c", type: "fridge", x: 5, z: 1, rotation: 0, w: 0.6, d: 0.6, h: 1.8, variant: null },
    ],
  };
  assert.deepEqual(
    [...fridgeDoors(hass, [floor])],
    [
      ["a", { left: true, right: false }],
      ["b", { left: false, right: false }],
    ],
  );
});

test("meters and air sensors are offered, battery and signal sensors are not", () => {
  const st = (entity_id: string, state: string, attributes: Record<string, unknown> = {}) => ({ entity_id, state, attributes });
  const ids = ["sensor.gasmeter_value", "sensor.wasseruhr_value", "sensor.alter_zaehler", "sensor.lux", "sensor.batterie", "sensor.text"];
  const hass = {
    ...hassWith(),
    entities: Object.fromEntries(ids.map((id) => [id, { entity_id: id, area_id: "keller" }])),
    states: {
      "sensor.gasmeter_value": st("sensor.gasmeter_value", "1234.567", { device_class: "gas", unit_of_measurement: "m³" }),
      "sensor.wasseruhr_value": st("sensor.wasseruhr_value", "456.7", { device_class: "water", unit_of_measurement: "m³" }),
      "sensor.alter_zaehler": st("sensor.alter_zaehler", "99.1", { unit_of_measurement: "m³" }),
      "sensor.lux": st("sensor.lux", "320", { device_class: "illuminance", unit_of_measurement: "lx" }),
      "sensor.batterie": st("sensor.batterie", "80", { device_class: "battery", unit_of_measurement: "%" }),
      "sensor.text": st("sensor.text", "ok"),
    },
  } as HomeAssistant;
  assert.deepEqual(areaEntities(hass, "keller").sort(), ["sensor.alter_zaehler", "sensor.gasmeter_value", "sensor.lux", "sensor.wasseruhr_value"]);
});

test("an opening state knows whether a sensor reports it", () => {
  const hass = {
    states: {
      "binary_sensor.wc": { entity_id: "binary_sensor.wc", state: "off", attributes: { device_class: "door" } },
      "cover.tor": { entity_id: "cover.tor", state: "closed", attributes: {} },
    },
  } as unknown as HomeAssistant;
  const none = { cover: null, contact: null, tilt: null, contact2: null, tilt2: null };
  assert.equal(openingState(hass, { ...none, contact: "binary_sensor.wc" }, "door").sensed, true);
  assert.equal(openingState(hass, none, "door").sensed, false);
  assert.equal(openingState(hass, none, "window").sensed, false);
  assert.equal(openingState(hass, { ...none, cover: "cover.tor" }, "garage").sensed, true);
});

test("room climate skips device temperatures, honours a chosen sensor and placed sensors", () => {
  const st = (entity_id: string, state: string, attributes: Record<string, unknown> = {}) => ({ entity_id, state, attributes });
  const temp = (id: string, v: string, name: string) => st(id, v, { device_class: "temperature", unit_of_measurement: "°C", friendly_name: name });
  const hass = {
    language: "de",
    areas: { hwr: { area_id: "hwr", name: "HWR" } },
    devices: { printer: { id: "printer", area_id: "hwr" }, pump: { id: "pump", area_id: "hwr" }, thermo: { id: "thermo", area_id: "hwr" } },
    entities: {
      "sensor.drucker_duese": { entity_id: "sensor.drucker_duese", device_id: "printer" },
      "button.drucker_pause": { entity_id: "button.drucker_pause", device_id: "printer" },
      "sensor.wp_vorlauf": { entity_id: "sensor.wp_vorlauf", device_id: "pump" },
      "climate.wp": { entity_id: "climate.wp", device_id: "pump" },
      "sensor.hwr_temperatur": { entity_id: "sensor.hwr_temperatur", device_id: "thermo" },
      "sensor.flur_temp": { entity_id: "sensor.flur_temp" },
      "light.gruppe": { entity_id: "light.gruppe" },
    },
    states: {
      "sensor.drucker_duese": temp("sensor.drucker_duese", "215", "Drucker Düse"),
      "button.drucker_pause": st("button.drucker_pause", "unknown"),
      "sensor.wp_vorlauf": temp("sensor.wp_vorlauf", "45", "Wärmepumpe Vorlauf"),
      "climate.wp": st("climate.wp", "heat"),
      "sensor.hwr_temperatur": temp("sensor.hwr_temperatur", "19.5", "HWR Temperatur"),
      "sensor.flur_temp": temp("sensor.flur_temp", "21", "Flur"),
      "light.gruppe": st("light.gruppe", "on"),
    },
  } as unknown as HomeAssistant;
  const room: Room = { id: "r", name: "HWR", area_id: "hwr", points: [[0, 0], [3, 0], [3, 3], [0, 3]], floor_material: "tiles" };
  const floor = { ...newFloor("eg", "EG", 0), rooms: [room] };
  assert.deepEqual(roomClimateSensors(hass, floor, room, "temperature"), ["sensor.hwr_temperatur"]);
  assert.equal(roomClimateValue(hass, floor, room, "temperature"), 19.5);
  // a sensor without an area placed in the room counts too
  floor.placements = [{ entity_id: "sensor.flur_temp", x: 1, z: 1, y: null }];
  assert.equal(roomClimateValue(hass, floor, room, "temperature"), 20.25);
  // a chosen sensor wins, "none" shows no value
  assert.deepEqual(roomClimateSensors(hass, floor, { ...room, climate: { temperature: "sensor.flur_temp" } }, "temperature"), ["sensor.flur_temp"]);
  assert.equal(roomClimateValue(hass, floor, { ...room, climate: { temperature: "none" } }, "temperature"), null);
  // entities without an area can be placed from their own list; other areas are listed by name
  assert.deepEqual(unassignedEntities(hass), ["light.gruppe", "sensor.flur_temp"]);
  assert.deepEqual(otherAreaEntities(hass, "kueche").map((a) => a.name), ["HWR"]);
  assert.deepEqual(otherAreaEntities(hass, "hwr"), []);
});

test("a robot vacuum's current room is found on its device and matched by room or area name", () => {
  const hass = {
    language: "de",
    areas: { kitchen: { area_id: "kitchen", name: "Küche" } },
    entities: {
      "vacuum.robbi": { entity_id: "vacuum.robbi", device_id: "d1" },
      "sensor.robbi_battery": { entity_id: "sensor.robbi_battery", device_id: "d1" },
      "sensor.robbi_room": { entity_id: "sensor.robbi_room", device_id: "d1", translation_key: "current_room" },
    },
    states: {
      "vacuum.robbi": { entity_id: "vacuum.robbi", state: "cleaning", attributes: {} },
      "sensor.robbi_room": { entity_id: "sensor.robbi_room", state: "Kueche", attributes: {} },
    },
  } as unknown as HomeAssistant;
  assert.equal(robotRoomSensor(hass, "vacuum.robbi", null), "sensor.robbi_room");
  assert.equal(robotRoomSensor(hass, "vacuum.robbi", "none"), null);
  const rooms = [
    { id: "a", name: "Wohnzimmer", area_id: "living" },
    { id: "b", name: "Kochen", area_id: "kitchen" },
    { id: "c", name: "Gäste Bad", area_id: null },
  ];
  // "Kueche" matches the area name "Küche"
  assert.equal(robotRoom(hass, rooms, "vacuum.robbi", "sensor.robbi_room")?.id, "b");
  hass.states["sensor.robbi_room"].state = "Gaeste Bad";
  assert.equal(robotRoom(hass, rooms, "vacuum.robbi", "sensor.robbi_room")?.id, "c");
  hass.states["sensor.robbi_room"].state = "Keller";
  assert.equal(robotRoom(hass, rooms, "vacuum.robbi", "sensor.robbi_room"), null);
  assert.equal(roomKey("Büro"), roomKey("Buero"));
});

test("a window marked 'ask first' puts its blind on the confirm list", () => {
  const hass = hassWith();
  const o = (id: string, extra: Partial<Opening> = {}): Opening => ({
    id, room_id: "r", edge: 0, offset: 1, width: 1, type: "window", sill: 0.9, height: 1.3, hinge: "left", leaves: 1, swing: "in", cover: "cover.rollo", contact: null, contact2: null, tilt: null, ...extra,
  });
  const floor: Floor = { ...newFloor("f", "F", 0), rooms: [{ ...room, area_id: "wohnen" }], openings: [o("w1")] };
  assert.equal(confirmEntities(hass, [floor]).has("cover.rollo"), false);
  floor.openings = [o("w1", { confirm: true })];
  assert.equal(confirmEntities(hass, [floor]).has("cover.rollo"), true);
});

test("a status sensor (a 3D printer) counts as active while it prints", () => {
  const st = (state: string, dc = "enum") => ({ entity_id: "sensor.drucker_status", state, attributes: { device_class: dc } });
  assert.equal(isActive(st("running")), true);
  assert.equal(isActive(st("prepare")), true);
  assert.equal(isActive(st("idle")), false);
  assert.equal(isActive(st("finish")), false);
  // an ordinary sensor is never "active"
  assert.equal(isActive(st("running", "temperature")), false);
});

test("an entity without a registry entry (a USB camera from YAML) is offered as unassigned", () => {
  const hass = {
    language: "de",
    entities: { "light.a": { entity_id: "light.a", area_id: null } },
    states: {
      "light.a": { entity_id: "light.a", state: "on", attributes: {} },
      "camera.usb_kamera_1": { entity_id: "camera.usb_kamera_1", state: "idle", attributes: { friendly_name: "USB Kamera 1" } },
      "sun.sun": { entity_id: "sun.sun", state: "above_horizon", attributes: {} },
    },
  } as unknown as HomeAssistant;
  const ids = unassignedEntities(hass);
  assert.ok(ids.includes("camera.usb_kamera_1"));
  assert.ok(ids.includes("light.a"));
  assert.ok(!ids.includes("sun.sun"));
});

test("a tilt angle sensor tilts the sash as far as it reports, with max, offset and sign", () => {
  const hass = { states: { "sensor.angle": { entity_id: "sensor.angle", state: "7.5", attributes: {} } } } as unknown as HomeAssistant;
  const base = { cover: null, contact: null, tilt: null, tiltAngle: "sensor.angle" };
  assert.equal(openingState(hass, { ...base, tiltMax: 15 }, "window").tilt, 0.5);
  // an offset the sensor reports while closed, and the other sign
  assert.equal(openingState(hass, { ...base, tiltMax: 10, tiltOffset: 2.5 }, "window").tilt, 0.5);
  assert.equal(openingState(hass, { ...base, tiltMax: 15, tiltInvert: true }, "window").tilt, 0);
  // below a small threshold the window counts as closed; the angle makes the state "sensed"
  hass.states["sensor.angle"] = { entity_id: "sensor.angle", state: "0.5", attributes: {} };
  const s = openingState(hass, { ...base, tiltMax: 15 }, "window");
  assert.equal(s.tilt, 0);
  assert.equal(s.sensed, true);
});

test("a door with a roller shutter shows the blind at the cover's position", () => {
  const hass = hassWith();
  hass.states["cover.haustuer"] = { entity_id: "cover.haustuer", state: "open", attributes: { current_position: 30, device_class: "shutter" } } as HomeAssistant["states"][string];
  const st = openingState(hass, { cover: "cover.haustuer", contact: null, tilt: null }, "door");
  assert.ok(Math.abs((st.cover ?? -1) - 0.7) < 1e-9, `closed fraction ${st.cover}`);
  assert.ok(st.sensed);
  // without a cover a door has no blind
  assert.equal(openingState(hass, { cover: null, contact: null, tilt: null }, "door").cover, null);
});

test("the central menu switches a floor's lights and blinds, not its garage door (#145)", async () => {
  const { floorControls, favoriteCall } = await import("./devices.ts");
  const st = (entity_id: string, state: string, attributes: Record<string, unknown> = {}) => ({ entity_id, state, attributes });
  const hass = {
    language: "de",
    states: {
      "light.decke": st("light.decke", "on"),
      "light.stehlampe": st("light.stehlampe", "off"),
      "cover.rollo": st("cover.rollo", "open", { device_class: "shutter" }),
      "cover.garage": st("cover.garage", "closed", { device_class: "garage" }),
    },
    entities: {
      "light.decke": { entity_id: "light.decke", area_id: "wz" },
      "cover.rollo": { entity_id: "cover.rollo", area_id: "wz" },
      "cover.garage": { entity_id: "cover.garage", area_id: "wz" },
    },
    devices: {},
    areas: { wz: { area_id: "wz", name: "Wohnzimmer" } },
  } as unknown as HomeAssistant;
  const floor = { ...newFloor("eg", "EG", 0), rooms: [{ id: "r", name: "WZ", area_id: "wz", points: [[0, 0], [4, 0], [4, 4], [0, 4]] as [number, number][], floor_material: "wood" as const }] };
  floor.placements = [{ entity_id: "light.stehlampe", x: 1, z: 1, y: null }];
  const c = floorControls(hass, floor);
  assert.deepEqual(c.lights.sort(), ["light.decke", "light.stehlampe"]);
  assert.deepEqual(c.covers, ["cover.rollo"]);
  assert.deepEqual(favoriteCall("scene.party"), ["scene", "turn_on"]);
  assert.deepEqual(favoriteCall("button.klingel"), ["button", "press"]);
  assert.deepEqual(favoriteCall("switch.bewaesserung"), ["homeassistant", "toggle"]);
});
