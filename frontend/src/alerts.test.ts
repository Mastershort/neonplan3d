import assert from "node:assert/strict";
import { test } from "node:test";
import { alertEntities, alertSources, alertText, findAlerts, isOutage } from "./alerts.ts";
import type { OpeningEntities } from "./devices.ts";
import { emptyBuilding, newFloor, type Opening } from "./model.ts";
import type { HomeAssistant } from "./types.ts";

function setup() {
  const st = (entity_id: string, state: string, attributes: Record<string, unknown> = {}) => ({ entity_id, state, attributes });
  const hass = {
    language: "de",
    areas: { kueche: { area_id: "kueche", name: "Küche" }, bad: { area_id: "bad", name: "Bad" } },
    entities: {
      "binary_sensor.rauch": { entity_id: "binary_sensor.rauch", area_id: "kueche" },
      "binary_sensor.wasser": { entity_id: "binary_sensor.wasser", area_id: "bad" },
      "binary_sensor.fenster": { entity_id: "binary_sensor.fenster", area_id: "kueche" },
    },
    states: {
      "binary_sensor.rauch": st("binary_sensor.rauch", "off", { device_class: "smoke", friendly_name: "Rauchmelder" }),
      "binary_sensor.wasser": st("binary_sensor.wasser", "off", { device_class: "moisture", friendly_name: "Wassermelder" }),
      "binary_sensor.fenster": st("binary_sensor.fenster", "on", { device_class: "window", friendly_name: "Küche Fenster" }),
      "weather.zuhause": st("weather.zuhause", "sunny"),
      "alarm_control_panel.haus": st("alarm_control_panel.haus", "disarmed"),
    },
  } as unknown as HomeAssistant;
  const b = emptyBuilding();
  const floor = newFloor("eg", "EG", 0);
  floor.rooms = [
    { id: "k", name: "Küche", area_id: "kueche", points: [[0, 0], [4, 0], [4, 3], [0, 3]], floor_material: "tiles" },
    { id: "b", name: "Bad", area_id: "bad", points: [[4, 0], [7, 0], [7, 3], [4, 3]], floor_material: "tiles" },
  ];
  const win: Opening = { id: "w", room_id: "k", edge: 0, offset: 2, width: 1.2, type: "window", sill: 0.9, height: 1.3, hinge: "left", leaves: 1, swing: "in", cover: null, contact: "binary_sensor.fenster", contact2: null, tilt: null };
  floor.openings = [win];
  b.floors = [floor];
  const links = new Map<string, OpeningEntities>([["w", { cover: null, contact: "binary_sensor.fenster", tilt: null }]]);
  return { hass, b, links };
}

test("warning sensors, the alarm and the weather are found once and watched", () => {
  const { hass, b } = setup();
  const src = alertSources(hass, b);
  assert.deepEqual(src.rooms.map((r) => [r.roomId, r.sensors]), [["k", ["binary_sensor.rauch"]], ["b", ["binary_sensor.wasser"]]]);
  assert.deepEqual(src.alarms, ["alarm_control_panel.haus"]);
  assert.equal(src.weather, "weather.zuhause");
  assert.deepEqual(alertEntities(src).sort(), ["alarm_control_panel.haus", "binary_sensor.rauch", "binary_sensor.wasser", "weather.zuhause"]);
});

test("smoke and water raise room warnings, a triggered alarm a house-wide one", () => {
  const { hass, b, links } = setup();
  const src = alertSources(hass, b);
  assert.deepEqual(findAlerts(hass, b, src, links), []);
  hass.states["binary_sensor.rauch"].state = "on";
  hass.states["binary_sensor.wasser"].state = "on";
  hass.states["alarm_control_panel.haus"].state = "triggered";
  const alerts = findAlerts(hass, b, src, links);
  assert.deepEqual(
    alerts.map((a) => [a.kind, a.roomId]),
    [["smoke", "k"], ["water", "b"], ["alarm", null]],
  );
  assert.equal(alertText(hass, b, alerts[0]), "Küche · Rauch: Rauchmelder");
  assert.equal(alertText(hass, b, alerts[2]), "Alarm ausgelöst");
  hass.states["alarm_control_panel.haus"].state = "pending";
  assert.equal(findAlerts(hass, b, src, links).at(-1)?.kind, "alarm_pending");
});

test("an open window only warns while it rains", () => {
  const { hass, b, links } = setup();
  const src = alertSources(hass, b);
  assert.equal(findAlerts(hass, b, src, links).length, 0);
  hass.states["weather.zuhause"].state = "rainy";
  const alerts = findAlerts(hass, b, src, links);
  assert.deepEqual(alerts.map((a) => [a.kind, a.roomId, a.entity]), [["window_rain", "k", "binary_sensor.fenster"]]);
  // a closed window is fine in the rain
  hass.states["binary_sensor.fenster"].state = "off";
  assert.equal(findAlerts(hass, b, src, links).length, 0);
});

test("the rain warning can be switched off on its own", () => {
  const { hass, b, links } = setup();
  hass.states["weather.zuhause"].state = "rainy";
  b.settings.rain_warning = false;
  const alerts = findAlerts(hass, b, alertSources(hass, b), links);
  assert.equal(alerts.filter((a) => a.kind === "window_rain").length, 0);
});

test("a power outage: grid sensors off, helpers on, a UPS on battery, a low mains voltage (#214)", () => {
  const st = (entity_id: string, state: string, attributes: Record<string, unknown> = {}) => ({ entity_id, state, attributes });
  assert.equal(isOutage(st("binary_sensor.netz", "off", { device_class: "power" })), true);
  assert.equal(isOutage(st("binary_sensor.netz", "on", { device_class: "power" })), false);
  assert.equal(isOutage(st("binary_sensor.stromausfall", "on")), true);
  assert.equal(isOutage(st("input_boolean.stromausfall", "on")), true);
  assert.equal(isOutage(st("sensor.ups_status", "OB DISCHRG")), true);
  assert.equal(isOutage(st("sensor.ups_status", "OL")), false);
  assert.equal(isOutage(st("sensor.netzspannung", "0", { unit_of_measurement: "V" })), true);
  assert.equal(isOutage(st("sensor.netzspannung", "231", { unit_of_measurement: "V" })), false);
  assert.equal(isOutage(st("sensor.netzbezug", "0", { unit_of_measurement: "W" })), false);
  assert.equal(isOutage(st("binary_sensor.netz", "unavailable", { device_class: "power" })), false);

  const b = emptyBuilding();
  b.settings.outage_entity = "binary_sensor.netz";
  const hass = { language: "de", areas: {}, entities: {}, devices: {}, states: { "binary_sensor.netz": st("binary_sensor.netz", "off", { device_class: "power", friendly_name: "Netz" }) } } as unknown as HomeAssistant;
  const sources = alertSources(hass, b);
  assert.deepEqual(alertEntities(sources), ["binary_sensor.netz"]);
  const alerts = findAlerts(hass, b, sources, new Map());
  assert.deepEqual(alerts.map((a) => a.kind), ["power_outage"]);
  assert.equal(alertText(hass, b, alerts[0]), "Stromausfall: Netz");
});
