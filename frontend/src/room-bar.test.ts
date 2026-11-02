import assert from "node:assert/strict";
import { test } from "node:test";
import { emptyBuilding, newFloor, type Building, type Room } from "./model.ts";
import { favoriteTiles, lightCall, roomTiles } from "./room-bar.ts";
import type { HomeAssistant } from "./types.ts";

const room = (id: string, name: string, x0: number, panel: string[]): Room => ({ id, name, area_id: null, points: [[x0, 0], [x0 + 4, 0], [x0 + 4, 4], [x0, 4]], panel }) as Room;

function setup(): { hass: HomeAssistant; b: Building } {
  const b = emptyBuilding();
  const eg = { ...newFloor("eg", "EG", 0), rooms: [room("wohnen", "Wohnzimmer", 0, ["light.decke", "light.stehlampe", "binary_sensor.fenster", "media_player.tv", "climate.wohnen"]), room("bad", "Bad", 4, ["light.bad", "media_player.echo"])] };
  const og = { ...newFloor("og", "OG", 2.75), rooms: [room("kind", "Kind", 0, [])] };
  b.floors = [og, eg];
  b.settings.favorites = ["scene.gemuetlich", "switch.stehlampe", "script.weg"];
  const st = (state: string, attributes: Record<string, unknown> = {}) => ({ state, attributes, last_changed: "" });
  const hass = {
    language: "de",
    entities: {},
    states: {
      "light.decke": st("on"),
      "light.stehlampe": st("on"),
      "light.bad": st("off"),
      "binary_sensor.fenster": st("on", { device_class: "window" }),
      "media_player.tv": st("playing"),
      "media_player.echo": st("paused"),
      "climate.wohnen": st("heat", { current_temperature: 21.4 }),
      "scene.gemuetlich": st("2026-11-02T18:00:00"),
      "switch.stehlampe": st("on"),
    },
  } as unknown as HomeAssistant;
  return { hass, b };
}

test("room bar: a tile per room with its temperature, the lights on, an open window and a player that plays", () => {
  const { hass, b } = setup();
  const [wohnen, bad] = roomTiles(hass, b, "eg");
  assert.equal(wohnen.name, "Wohnzimmer");
  assert.equal(wohnen.temp, 21.4, "a thermostat tells the temperature when no sensor does");
  assert.deepEqual(wohnen.lightsOn, ["light.decke", "light.stehlampe"]);
  assert.equal(wohnen.open, 1);
  assert.equal(wohnen.playing, true);
  assert.equal(wohnen.active, true);
  // a speaker sitting paused says nothing (#815), and the lights are off: the tile stays calm
  assert.deepEqual([bad.lights, bad.lightsOn.length, bad.playing, bad.active, bad.temp, bad.humidity], [["light.bad"], 0, false, false, null, null]);
});

test("room bar: the light switch turns every light of the room on, or the ones that are on off", () => {
  const { hass, b } = setup();
  const [wohnen, bad] = roomTiles(hass, b, "eg");
  assert.deepEqual(lightCall(wohnen), ["turn_off", ["light.decke", "light.stehlampe"]]);
  assert.deepEqual(lightCall(bad), ["turn_on", ["light.bad"]]);
});

test("room bar: the house view lists every floor's rooms from the bottom up; a floor only its own", () => {
  const { hass, b } = setup();
  assert.deepEqual(roomTiles(hass, b, null).map((r) => r.roomId), ["wohnen", "bad", "kind"]);
  assert.deepEqual(roomTiles(hass, b, "og").map((r) => r.roomId), ["kind"]);
});

test("room bar: favourites Home Assistant knows, scenes and scripts run, switches toggle and show their state", () => {
  const { hass, b } = setup();
  assert.deepEqual(favoriteTiles(hass, b), [
    { id: "scene.gemuetlich", domain: "scene", service: "turn_on", on: false },
    { id: "switch.stehlampe", domain: "homeassistant", service: "toggle", on: true },
  ]);
});
