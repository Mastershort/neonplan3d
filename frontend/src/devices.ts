// Devices of a room: which entities belong to an area, what kind they are, how they are placed and
// what their state looks like. Pure functions (no Lit, no three.js) so they can be tested directly.

import type { Furniture, EntityRef, Floor, LampMount, Opening, Placement, RoofWindow, Room, Vec2 } from "./model.ts";
import { centroid, outdoorZones, pointInPolygon } from "./model.ts";
import { isRobotVacuum, packMotion, packScreen } from "./packs.ts";
import type { HassEntity, HomeAssistant } from "./types.ts";

export type DeviceKind =
  | "light"
  | "switch"
  | "fan"
  | "cover"
  | "climate"
  | "media"
  | "lock"
  | "sensor"
  | "binary"
  | "camera"
  | "scene"
  | "script";

const DOMAIN_KIND: Record<string, DeviceKind> = {
  light: "light",
  switch: "switch",
  input_boolean: "switch",
  fan: "fan",
  cover: "cover",
  climate: "climate",
  media_player: "media",
  lock: "lock",
  sensor: "sensor",
  binary_sensor: "binary",
  camera: "camera",
  scene: "scene",
  script: "script",
};

/** Sensors worth showing: room climate, and power (consumers of the energy flow). */
/** Sensor classes worth a marker: room climate, air quality, power and energy, meters (gas, water), light. */
const SENSOR_CLASSES = new Set([
  "temperature",
  "humidity",
  "power",
  "carbon_dioxide",
  "energy",
  "gas",
  "water",
  "volume",
  "volume_storage",
  "volume_flow_rate",
  "illuminance",
  "pressure",
  "atmospheric_pressure",
  "pm1",
  "pm25",
  "pm10",
  "volatile_organic_compounds",
  "volatile_organic_compounds_parts",
  "carbon_monoxide",
  "nitrogen_dioxide",
  "moisture",
  "sound_pressure",
  // water values of a pool or a pond (D600): pH, and conductivity for salt
  "ph",
  "conductivity",
]);
/**
 * Sensors without a class still count when their unit is a meter's (e.g. older meter readers) or a water value's:
 * redox / ORP in mV, salt or chlorine in mg/L or ppm, conductivity in µS/cm (D600).
 */
const METER_UNITS = new Set(["m³", "m3", "L", "l", "kWh", "Wh", "MWh", "lx", "mV", "mg/L", "mg/l", "ppm", "µS/cm", "μS/cm", "mS/cm"]);
const BINARY_CLASSES = new Set(["door", "window", "opening", "garage_door", "motion", "occupancy", "presence", "smoke", "moisture", "gas", "carbon_monoxide"]);

/** Order in lists and panels. */
export const KIND_ORDER: DeviceKind[] = ["light", "cover", "climate", "media", "switch", "fan", "lock", "binary", "sensor", "camera", "scene", "script"];

/** Kinds that can be toggled with a tap in 3D. */
export const TOGGLE_KINDS = new Set<DeviceKind>(["light", "switch", "fan"]);

export function domainOf(entityId: string): string {
  return entityId.slice(0, entityId.indexOf("."));
}

export function kindOf(entityId: string): DeviceKind | null {
  return DOMAIN_KIND[domainOf(entityId)] ?? null;
}

/** Scenes and scripts belong to the room panel, not to a spot in the room. */
export function isPlaceable(kind: DeviceKind | null): boolean {
  return kind !== null && kind !== "scene" && kind !== "script";
}

/** Covers that have no slats, whatever their features say (KNX reports tilt buttons for roller shutters, #704). */
const NO_SLATS = new Set(["shutter", "garage", "gate", "door", "curtain", "awning", "window", "shade"]);

/**
 * Open/close-tilt buttons for a cover: only when it has slats – it reports a tilt position, or it is no roller
 * shutter, garage door, curtain … (those never have slats, even when an integration announces the features).
 */
export function coverTiltButtons(st: HassEntity | undefined): boolean {
  if (!st) return false;
  const features = ((st.attributes.supported_features as number) ?? 0) | 0;
  if (!(features & 48)) return false;
  return typeof st.attributes.current_tilt_position === "number" || !NO_SLATS.has(String(st.attributes.device_class ?? ""));
}

export function entityAreaId(hass: HomeAssistant, entityId: string): string | null {
  const entry = hass.entities?.[entityId];
  if (!entry) return null;
  if (entry.area_id) return entry.area_id;
  return (entry.device_id && hass.devices?.[entry.device_id]?.area_id) || null;
}

/**
 * Hidden or disabled in Home Assistant's entity registry: never picked or listed automatically – only where the plan
 * names it by hand (a placed device, a linked entity) it stays (#645).
 */
export function hiddenInHa(hass: HomeAssistant, entityId: string): boolean {
  const entry = hass.entities?.[entityId];
  return !!entry && (!!entry.hidden || !!entry.hidden_by || !!entry.disabled_by);
}

/** Whether an entity is shown at all: visible, no config/diagnostic entity, and a kind we handle. */
export function isRelevant(hass: HomeAssistant, entityId: string): boolean {
  const kind = kindOf(entityId);
  if (!kind) return false;
  const entry = hass.entities?.[entityId];
  if (hiddenInHa(hass, entityId) || entry?.entity_category) return false;
  const st = hass.states[entityId];
  if (!st) return false;
  const dc = st.attributes.device_class as string | undefined;
  const unit = String(st.attributes.unit_of_measurement ?? "");
  // a redox / ORP probe often reports as a voltage in mV (#814); a mains voltage in V stays out
  if (kind === "sensor") return dc ? SENSOR_CLASSES.has(dc) || (dc === "voltage" && unit === "mV") : METER_UNITS.has(unit);
  // a binary sensor without a class is mostly noise of an integration – unless its own entity was given an
  // area by hand (a "storm" flag of a home automation bus, #243): then it is meant to be seen
  if (kind === "binary") return dc ? BINARY_CLASSES.has(dc) : !!entry?.area_id;
  return true;
}

/**
 * Lookups over the whole entity registry (entities per area, power sensors per device). They are
 * built once per registry and reused: every state change would otherwise scan thousands of
 * entities per room. Home Assistant replaces `entities`, `devices` and `states` with new objects when
 * they change, so their identity is the cache key; a changed number of states (entities that appear
 * after the registry) rebuilds as well.
 */
interface Registry {
  entities: HomeAssistant["entities"];
  devices: HomeAssistant["devices"];
  states: HomeAssistant["states"];
  stateCount: number;
  areas: Map<string, string[]>;
  power: Map<string, string[]>;
  /** Entities without an area that can be placed (any numeric sensor with a unit counts here). */
  unassigned: string[];
  /** Domains of each device's visible, non-config entities (to tell a 3D printer from a thermometer). */
  domains: Map<string, Set<string>>;
  /** Devices whose entities lie in several areas (hubs). */
  hubs: Set<string>;
}

/** Sensor classes that never make a marker, even without an area (diagnostics of the device itself). */
const NOISE_CLASSES = new Set(["battery", "signal_strength", "timestamp", "date", "duration", "data_rate", "data_size", "frequency", "enum"]);

/** A numeric sensor with a unit: offered for devices without an area even without a known class. */
function isLooseSensor(hass: HomeAssistant, entityId: string): boolean {
  if (kindOf(entityId) !== "sensor") return false;
  const entry = hass.entities?.[entityId];
  if (hiddenInHa(hass, entityId) || entry?.entity_category) return false;
  const st = hass.states[entityId];
  if (!st || !st.attributes.unit_of_measurement) return false;
  if (NOISE_CLASSES.has(String(st.attributes.device_class ?? ""))) return false;
  return Number.isFinite(Number(st.state)) || isUnavailable(st);
}

let registry: Registry | null = null;

function registryOf(hass: HomeAssistant): Registry {
  const reg = registry;
  if (reg && reg.entities === hass.entities && reg.devices === hass.devices) {
    if (reg.states === hass.states) return reg;
    reg.states = hass.states;
    if (Object.keys(hass.states).length === reg.stateCount) return reg;
  }
  const areas = new Map<string, string[]>();
  const power = new Map<string, string[]>();
  const unassigned: string[] = [];
  const domains = new Map<string, Set<string>>();
  // the areas a device's entities lie in: a hub (one MQTT or KNX device for a whole house) spans several
  const deviceAreas = new Map<string, Set<string>>();
  for (const id of Object.keys(hass.entities ?? {})) {
    const entry = hass.entities![id];
    const device = entry.device_id;
    if (device && entry.area_id) (deviceAreas.get(device) ?? deviceAreas.set(device, new Set()).get(device)!).add(entry.area_id);
    if (device && isPower(hass, id)) (power.get(device) ?? power.set(device, []).get(device)!).push(id);
    if (device && !hiddenInHa(hass, id) && !entry.entity_category) (domains.get(device) ?? domains.set(device, new Set()).get(device)!).add(domainOf(id));
    const relevant = isRelevant(hass, id);
    const area = entityAreaId(hass, id);
    if (!area) {
      if ((relevant || isLooseSensor(hass, id)) && isPlaceable(kindOf(id))) unassigned.push(id);
      continue;
    }
    if (relevant) (areas.get(area) ?? areas.set(area, []).get(area)!).push(id);
  }
  // entities without a registry entry (set up in YAML without a unique_id, e.g. a USB camera) have no area
  // and would never show up: they count as unassigned
  if (hass.entities) {
    for (const id of Object.keys(hass.states)) {
      if (hass.entities[id]) continue;
      if ((isRelevant(hass, id) || isLooseSensor(hass, id)) && isPlaceable(kindOf(id))) unassigned.push(id);
    }
  }
  unassigned.sort((a, b) => KIND_ORDER.indexOf(kindOf(a)!) - KIND_ORDER.indexOf(kindOf(b)!) || entityName(hass, a).localeCompare(entityName(hass, b)));
  for (const [areaId, ids] of areas) {
    const areaName = hass.areas?.[areaId]?.name;
    ids.sort((a, b) => {
      const ka = KIND_ORDER.indexOf(kindOf(a)!);
      const kb = KIND_ORDER.indexOf(kindOf(b)!);
      return ka - kb || entityName(hass, a, areaName).localeCompare(entityName(hass, b, areaName));
    });
  }
  const hubs = new Set([...deviceAreas].filter(([, set]) => set.size > 1).map(([device]) => device));
  registry = { entities: hass.entities, devices: hass.devices, states: hass.states, stateCount: Object.keys(hass.states).length, areas, power, unassigned, domains, hubs };
  return registry;
}

/** Entities of an area, sorted by kind and name (a shared array: do not change it). */
export function areaEntities(hass: HomeAssistant, areaId: string | null): string[] {
  if (!areaId || !hass.entities) return [];
  return registryOf(hass).areas.get(areaId) ?? [];
}

/** Placeable entities of every other area, by area name (for placing a device from elsewhere). */
export function otherAreaEntities(hass: HomeAssistant, exceptArea: string | null): { areaId: string; name: string; ids: string[] }[] {
  if (!hass.entities) return [];
  return [...registryOf(hass).areas]
    .filter(([areaId]) => areaId !== exceptArea)
    .map(([areaId, ids]) => ({ areaId, name: hass.areas?.[areaId]?.name ?? areaId, ids: ids.filter((id) => isPlaceable(kindOf(id))) }))
    .filter((a) => a.ids.length)
    .sort((a, b) => a.name.localeCompare(b.name));
}

/** Placeable entities without an area (templates, groups, helpers; any numeric sensor with a unit). */
export function unassignedEntities(hass: HomeAssistant): string[] {
  if (!hass.entities) return [];
  return registryOf(hass).unassigned;
}

/** Device classes of the room climate values. */
export const CLIMATE_CLASSES = { temperature: "temperature", humidity: "humidity", co2: "carbon_dioxide" } as const;
export type ClimateKey = keyof typeof CLIMATE_CLASSES;

/** Device domains that show a device is no room sensor (a heat pump, a 3D printer, a TV …). */
const NOT_A_ROOM_SENSOR = new Set(["climate", "water_heater", "switch", "button", "camera", "media_player", "vacuum", "light", "fan", "lawn_mower"]);
/** Names of temperatures that are not the room's (flow, nozzle, CPU, outside …). */
const NOT_ROOM_NAME =
  /(vorlauf|r(ü|ue)cklauf|flow|return|d(ü|ue)se|nozzle|hotend|extruder|druckbett|heatbed|(^|[^a-z])bed($|[^a-z])|chamber|cpu|gpu|chip|soc|akku|batter|wasser|water|kessel|boiler|au(ß|ss)en|outdoor|outside|abgas|exhaust|sole|brine|verdampfer|kondensat|verdichter|compressor|motor|k(ü|ue)hl|freezer|fridge|gefrier)/i;

/** Whether a sensor measures the room itself (not a device's inner temperature). */
export function isRoomClimateSensor(hass: HomeAssistant, entityId: string): boolean {
  const device = hass.entities?.[entityId]?.device_id;
  // a hub's entities are spread over the house: its lights and switches say nothing about this sensor (#243)
  const domains = device && !registryOf(hass).hubs.has(device) ? registryOf(hass).domains.get(device) : undefined;
  if (domains && [...domains].some((d) => NOT_A_ROOM_SENSOR.has(d))) return false;
  return !NOT_ROOM_NAME.test(`${entityId} ${hass.states[entityId]?.attributes.friendly_name ?? ""}`);
}

/**
 * Sensors a room's temperature, humidity or CO2 is read from: the chosen one, or automatically the
 * room sensors of its area plus the ones placed in the room (an area sensor placed in another room
 * counts there instead).
 */
export function roomClimateSensors(hass: HomeAssistant, floor: Floor | null, room: Room, key: ClimateKey): string[] {
  const chosen = room.climate?.[key];
  if (chosen === "none") return [];
  if (chosen) return hass.states[chosen] ? [chosen] : [];
  const dc = CLIMATE_CLASSES[key];
  const inRoom = (x: number, z: number) => pointInPolygon([x, z], room.points);
  const placed = floor?.placements.filter((p) => p.entity_id.startsWith("sensor.")) ?? [];
  const here = placed.filter((p) => inRoom(p.x, p.z)).map((p) => p.entity_id);
  const elsewhere = new Set(placed.filter((p) => !inRoom(p.x, p.z)).map((p) => p.entity_id));
  const ids = [...new Set([...areaEntities(hass, room.area_id).filter((id) => !elsewhere.has(id)), ...here])];
  // outside (an outdoor area acting as a room, #100) the "outdoor" sensors are just the right ones
  const sensors = ids.filter((id) => id.startsWith("sensor.") && hass.states[id]?.attributes.device_class === dc && (room.outdoor || isRoomClimateSensor(hass, id)));
  if (sensors.length) return sensors;
  // no sensor of its own: a thermostat of the room tells its temperature (and humidity) too (#478)
  const attr = CLIMATE_ATTRS[key];
  return attr ? ids.filter((id) => id.startsWith("climate.") && typeof hass.states[id]?.attributes[attr] === "number") : [];
}

/** What a thermostat (climate entity) reports of a room's climate. */
export const CLIMATE_ATTRS: Partial<Record<ClimateKey, string>> = { temperature: "current_temperature", humidity: "current_humidity" };

/** A room climate value of a sensor (its state) or of a thermostat (its current_temperature / current_humidity). */
export function climateReading(hass: HomeAssistant, id: string, key: ClimateKey): number {
  const st = hass.states[id];
  if (id.startsWith("climate.")) {
    const attr = CLIMATE_ATTRS[key];
    const v = attr ? Number(st?.attributes[attr]) : Number.NaN;
    // a thermostat reports in Home Assistant's unit
    return key === "temperature" ? toCelsius(v, tempUnit(hass)) : v;
  }
  const v = Number(st?.state);
  return key === "temperature" ? toCelsius(v, st?.attributes.unit_of_measurement) : v;
}

/** Average of a room climate value (null when no sensor reports one). */
/** The temperature unit Home Assistant shows ("°F" with US customary units, else "°C"). */
export function tempUnit(hass: HomeAssistant): "°C" | "°F" {
  return hass.config?.unit_system?.temperature === "°F" ? "°F" : "°C";
}

/** A temperature in °C, from a value in the given unit (°F, K, else taken as °C). */
export function toCelsius(value: number, unit: unknown): number {
  if (unit === "°F") return ((value - 32) * 5) / 9;
  if (unit === "K") return value - 273.15;
  return value;
}

/** A temperature in °C shown in Home Assistant's unit. */
export function fromCelsius(hass: HomeAssistant, celsius: number): number {
  return tempUnit(hass) === "°F" ? (celsius * 9) / 5 + 32 : celsius;
}

/** Average of the room's climate sensors; temperatures always in °C, whatever unit a sensor reports. */
export function roomClimateValue(hass: HomeAssistant, floor: Floor | null, room: Room, key: ClimateKey): number | null {
  const values = roomClimateSensors(hass, floor, room, key)
    .map((id) => climateReading(hass, id, key))
    .filter((v) => Number.isFinite(v));
  return values.length ? values.reduce((a, b) => a + b, 0) / values.length : null;
}

/** Power sensors of a device, in registry order (a shared array: do not change it). */
/** Whether a device is a hub whose entities lie in several areas (one MQTT/KNX device for a whole house). */
export function isHubDevice(hass: HomeAssistant, deviceId: string): boolean {
  return !!hass.entities && registryOf(hass).hubs.has(deviceId);
}

export function powerSensorsOf(hass: HomeAssistant, deviceId: string): string[] {
  if (!hass.entities) return [];
  return registryOf(hass).power.get(deviceId) ?? [];
}

/** Friendly name without a leading area name ("Wohnzimmer Deckenlicht" in the Wohnzimmer -> "Deckenlicht"). */
export function entityName(hass: HomeAssistant, entityId: string, areaName?: string): string {
  const st = hass.states[entityId];
  const name = (st?.attributes.friendly_name as string | undefined) ?? hass.entities?.[entityId]?.name ?? entityId;
  if (areaName && name.length > areaName.length + 1 && name.toLowerCase().startsWith(areaName.toLowerCase() + " ")) {
    const rest = name.slice(areaName.length + 1);
    return rest.charAt(0).toUpperCase() + rest.slice(1);
  }
  return name;
}

/**
 * Whether a radiator heats by its own sensor (D637): a valve's work state ("opened", "heating", "on"), a binary
 * sensor, or an opening in percent (above 0); null when the sensor says nothing usable.
 */
export function heatSensorOn(hass: HomeAssistant, ref: EntityRef | undefined): boolean | null {
  if (!ref || ref === "none") return null;
  const st = hass.states[ref];
  if (!st || isUnavailable(st)) return null;
  const s = st.state.toLowerCase();
  if (["on", "open", "opened", "heating", "heat", "true", "active", "running"].includes(s)) return true;
  if (["off", "closed", "idle", "false", "inactive", "standby"].includes(s)) return false;
  const v = Number(s);
  return Number.isFinite(v) ? v > 0 : null;
}

export function isUnavailable(st: HassEntity | undefined): boolean {
  return !st || st.state === "unavailable" || st.state === "unknown";
}

/** States of a status sensor (a 3D printer, a washing machine's programme) that mean "it is working". */
const WORKING_STATES = new Set(["run", "cooking", "running", "printing", "prepare", "preparing", "slicing", "heating", "busy", "working", "active", "washing", "rinsing", "spinning", "drying", "cleaning", "in_progress", "in progress", "on"]);

/** Whether an entity is a status sensor (enum states such as running / idle / finish) that furniture can follow. */
export function isStatusSensor(st: HassEntity | undefined): boolean {
  return !!st && st.entity_id.startsWith("sensor.") && st.attributes.device_class === "enum";
}

/**
 * A robot vacuum at work: "cleaning", and the states some integrations report instead ("room_cleaning",
 * "segment_cleaning", "zone_cleaning", "sweeping", "mopping" …) (#470).
 */
export function vacuumCleaning(state: string | undefined): boolean {
  if (!state) return false;
  return state === "cleaning" || /clean|sweep|mop/.test(state.toLowerCase());
}

/** "Active" drives the glow of a device marker: light on, cover open, heating, playing, window open … */
export function isActive(st: HassEntity | undefined): boolean {
  if (!st) return false;
  // a robot vacuum (the pack's robot with its dock): busy while cleaning or on its way back
  if (st.entity_id.startsWith("vacuum.")) return vacuumCleaning(st.state) || st.state === "returning";
  switch (kindOf(st.entity_id)) {
    case "light":
    case "switch":
    case "fan":
    case "binary":
      return st.state === "on";
    case "cover":
      return st.state === "open" || st.state === "opening";
    case "climate":
      return st.attributes.hvac_action === "heating" || st.attributes.hvac_action === "cooling";
    case "media":
      return st.state === "playing";
    case "lock":
      return st.state === "unlocked" || st.state === "open";
    case "sensor":
      // a status sensor: a 3D printer printing, a machine running
      return isStatusSensor(st) && WORKING_STATES.has(String(st.state).toLowerCase());
    default:
      return false;
  }
}

/**
 * A cooktop's operating state (Home Connect and others: "run" cooking, "ready" switched on, "inactive" off):
 * the burners glow while it cooks, faintly while it is ready, not at all when it is off.
 */
export function cooktopLevel(st: HassEntity | undefined, running: boolean): number {
  if (!st || isUnavailable(st)) return running ? 1 : 0;
  const s = String(st.state).toLowerCase();
  if (running || s === "run" || s === "cooking" || s === "on") return 1;
  if (s === "ready" || s === "standby" || s === "pause" || s === "paused") return 0.3;
  return 0;
}

/**
 * An air conditioner by its mode: red heating, blue cooling, green automatic, yellow drying, white fan only –
 * bright while it works (hvac_action), dimmer while it only stands by in that mode; null when off.
 */
export function climateModeGlow(st: HassEntity | undefined): { color: [number, number, number]; level: number } | null {
  if (!st || isUnavailable(st)) return null;
  const mode = String(st.state).toLowerCase();
  if (mode === "off") return null;
  const action = String(st.attributes.hvac_action ?? "").toLowerCase();
  const color: [number, number, number] =
    mode === "heat" ? [1, 0.32, 0.12] : mode === "cool" ? [0.3, 0.65, 1] : mode === "dry" ? [1, 0.85, 0.3] : mode === "fan_only" ? [0.85, 0.92, 1] : [0.3, 1, 0.5];
  const working = ["heating", "cooling", "drying", "fan"].includes(action);
  return { color, level: working || !action ? 1 : 0.45 };
}

/**
 * A lamp that only shows one colour of its light (#mail 10.10.): the glow stays when the light's colour is close to
 * the chosen one (hue within 30°, both clearly coloured), else the lamp stays dark.
 */
export function onlyColor<T extends { color: [number, number, number] }>(glow: T | null, hex: string | null | undefined): T | null {
  if (!glow || !hex || !/^#[0-9a-f]{6}$/i.test(hex)) return glow;
  const want = [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16) / 255) as [number, number, number];
  const hs = (c: readonly number[]): [number, number] => {
    const max = Math.max(...c);
    const min = Math.min(...c);
    const d = max - min;
    if (max <= 0 || d / max < 0.25) return [-1, 0];
    const h = max === c[0] ? ((c[1] - c[2]) / d + 6) % 6 : max === c[1] ? (c[2] - c[0]) / d + 2 : (c[0] - c[1]) / d + 4;
    return [h * 60, d / max];
  };
  const [hw] = hs(want);
  const [hl] = hs(glow.color);
  // a white (unsaturated) choice matches a white light, a colour only a colour
  if (hw < 0 || hl < 0) return hw < 0 && hl < 0 ? glow : null;
  const diff = Math.abs(hw - hl);
  return Math.min(diff, 360 - diff) <= 30 ? glow : null;
}

/** Colour (0..1 channels) and level (0..1) of a light that is on; null when off. */
export function lightGlow(st: HassEntity | undefined, colorFrom?: HassEntity | undefined): { color: [number, number, number]; level: number } | null {
  if (!st || st.state !== "on") return null;
  // a relay switches the light while the bulb itself knows its colour and brightness: read those there
  const a = colorFrom && !["unavailable", "unknown"].includes(colorFrom.state) ? colorFrom.attributes : st.attributes;
  // a perceptual curve: a lamp at 10 % still reads as "on" (0.45), full brightness stays 1
  const level = typeof a.brightness === "number" ? 0.2 + 0.8 * Math.sqrt(Math.min(1, Math.max(0, a.brightness / 255))) : 1;
  const rgb = a.rgb_color as [number, number, number] | undefined;
  let color: [number, number, number];
  if (rgb && a.color_mode !== "color_temp" && a.color_mode !== "brightness" && a.color_mode !== "onoff") {
    color = [rgb[0] / 255, rgb[1] / 255, rgb[2] / 255];
  } else if (typeof a.color_temp_kelvin === "number") {
    color = kelvinToRgb(a.color_temp_kelvin);
  } else {
    color = [1, 0.71, 0.28]; // warm neon amber (#ffb547)
  }
  return { color, level };
}

/** Rough black-body colour for 2000–6500 K, tuned to stay warm and readable on the dark floor. */
export function kelvinToRgb(k: number): [number, number, number] {
  const t = Math.min(1, Math.max(0, (k - 2200) / (6500 - 2200)));
  const warm: [number, number, number] = [1, 0.66, 0.26];
  const cool: [number, number, number] = [0.78, 0.9, 1];
  return [warm[0] + (cool[0] - warm[0]) * t, warm[1] + (cool[1] - warm[1]) * t, warm[2] + (cool[2] - warm[2]) * t];
}

/** Default mounting height of a device marker (metres above the floor). */
export function defaultHeight(kind: DeviceKind, floorHeight: number, mount: LampMount | null = null): number {
  // a wall camera hangs high on the wall, a ceiling camera under the ceiling
  if (kind === "camera") return mount === "ceiling" ? Math.max(0.5, floorHeight - 0.05) : 2.2;
  if (kind === "light" && mount) {
    // markers sit just above floor and table lamps and next to wall lamps
    if (mount === "floor") return 1.95;
    if (mount === "table") return 1.25;
    if (mount === "wall") return 1.95;
  }
  switch (kind) {
    case "light":
      return Math.max(0.5, floorHeight - 0.25);
    case "cover":
      return Math.min(2, floorHeight - 0.3);
    case "climate":
      return 0.6;
    case "media":
      return 0.9;
    case "binary":
    case "sensor":
      return 1.4;
    default:
      return 1.05;
  }
}

// ------------------------------------------------------------------ automatic placement

function distanceToEdges(p: Vec2, poly: readonly Vec2[]): number {
  let best = Infinity;
  for (let i = 0; i < poly.length; i++) {
    const a = poly[i];
    const b = poly[(i + 1) % poly.length];
    const dx = b[0] - a[0];
    const dz = b[1] - a[1];
    const l2 = dx * dx + dz * dz || 1;
    const t = Math.min(1, Math.max(0, ((p[0] - a[0]) * dx + (p[1] - a[1]) * dz) / l2));
    best = Math.min(best, Math.hypot(p[0] - a[0] - dx * t, p[1] - a[1] - dz * t));
  }
  return best;
}

/**
 * Places entities in a room without overlapping each other or the markers already there. Lights go
 * towards the middle, spread out; everything else goes along the walls. The room label at the
 * centroid is kept free. Deterministic, so the same room always gets the same layout.
 */
export function autoPlace(room: Room, entityIds: readonly string[], taken: readonly Vec2[] = []): Placement[] {
  if (room.points.length < 3 || !entityIds.length) return [];
  const poly = room.points;
  const xs = poly.map((p) => p[0]);
  const zs = poly.map((p) => p[1]);
  const x0 = Math.min(...xs);
  const z0 = Math.min(...zs);
  const x1 = Math.max(...xs);
  const z1 = Math.max(...zs);
  const size = Math.min(x1 - x0, z1 - z0);
  const step = Math.max(0.1, Math.min(0.25, size / 8));
  const margin = Math.min(0.35, size / 5);
  const label = centroid(poly);
  const candidates: { p: Vec2; wall: number }[] = [];
  for (let x = x0 + step / 2; x < x1; x += step) {
    for (let z = z0 + step / 2; z < z1; z += step) {
      const p: Vec2 = [x, z];
      if (!pointInPolygon(p, poly)) continue;
      const wall = distanceToEdges(p, poly);
      if (wall < margin) continue;
      candidates.push({ p, wall });
    }
  }
  if (!candidates.length) candidates.push({ p: label, wall: 0 });
  const used: Vec2[] = [...taken];
  const out: Placement[] = [];
  const labelFree = Math.min(0.7, size / 4);
  for (const entity_id of entityIds) {
    const light = kindOf(entity_id) === "light";
    let best = candidates[0].p;
    let bestScore = -Infinity;
    for (const { p, wall } of candidates) {
      const free = used.length ? Math.min(...used.map((q) => Math.hypot(p[0] - q[0], p[1] - q[1]))) : 3;
      const fromLabel = Math.hypot(p[0] - label[0], p[1] - label[1]);
      let score = Math.min(free, 3) * 2;
      if (fromLabel < labelFree && !light) score -= 10;
      // lights prefer the middle of the room, other devices a spot near a wall
      score -= light ? fromLabel * 0.35 : wall * 1.2;
      if (score > bestScore + 1e-9) {
        bestScore = score;
        best = p;
      }
    }
    const p: Vec2 = [Math.round(best[0] * 100) / 100, Math.round(best[1] * 100) / 100];
    used.push(p);
    out.push({ entity_id, x: p[0], z: p[1], y: null, mount: null });
  }
  return out;
}

// ------------------------------------------------------------------ doors and windows

const COVER_CLASSES = new Set([undefined, "shutter", "blind", "awning", "shade", "curtain", "window"]);
const GARAGE_COVERS = new Set(["garage", "gate"]);
const WINDOW_CONTACTS = new Set(["window", "opening"]);

export interface OpeningEntities {
  cover: string | null;
  contact: string | null;
  tilt: string | null;
  /** Contact and tilt sensor of the second leaf of a double door or window. */
  contact2?: string | null;
  tilt2?: string | null;
  /** A sensor with the blind's position while it moves (0–100 % or 0–1, open = high). */
  position?: string | null;
  positionInverted?: boolean;
  /** A sensor with the sash's tilt angle (degrees), with the angle that counts as fully tilted, an offset and the sign. */
  tiltAngle?: string | null;
  tiltMax?: number | null;
  tiltOffset?: number | null;
  tiltInvert?: boolean;
  /** A door without a sensor is drawn closed. */
  shut?: boolean;
  /** A door's smart lock. */
  lock?: string | null;
  /** The contacts report the other way round (on = closed). */
  contactInvert?: boolean;
}

/** Pairs openings with entities in order; with `shared`, a single entity serves all openings. */
function pair(openings: Opening[], ids: string[], shared = false): Map<string, string> {
  const out = new Map<string, string>();
  if (!ids.length) return out;
  openings.forEach((o, i) => {
    const id = shared && ids.length === 1 ? ids[0] : ids[i];
    if (id) out.set(o.id, id);
  });
  return out;
}

/**
 * Entities of every door and window: set by hand, or (when null) matched automatically with the
 * covers and contact sensors of the room's area, in the order the openings sit on the room outline.
 */
export function openingEntities(hass: HomeAssistant, floors: readonly Floor[]): Map<string, OpeningEntities> {
  const out = new Map<string, OpeningEntities>();
  const pick = (ref: string | null, auto: string | undefined) => (ref === "none" ? null : (ref ?? auto ?? null));
  const link = (o: Opening, autoC?: string, autoK?: string): OpeningEntities => {
    const cover = pick(o.cover, autoC);
    return {
      cover,
      // a window with a handle sensor gets no plain contact assigned automatically
      contact: o.sensor === "handle" && o.contact == null ? null : pick(o.contact, autoK),
      tilt: o.tilt === "none" ? null : o.tilt,
      contact2: o.leaves === 2 && o.contact2 && o.contact2 !== "none" ? o.contact2 : null,
      // a smart lock on a door, or on a terrace door (a window down to the floor, #645)
      lock: (o.type === "door" || (o.type === "window" && o.sill <= 0.01)) && o.lock && o.lock !== "none" ? o.lock : null,
      tilt2: o.leaves === 2 && o.tilt2 && o.tilt2 !== "none" ? o.tilt2 : null,
      // the blind's position sensor only counts with a blind: one left behind after the drive was set to "none" (or
      // from a window turned into a door) would otherwise lower a roller shutter over a plain door (#682)
      position: cover && kindOf(cover) === "cover" && o.position && o.position !== "none" ? o.position : null,
      positionInverted: !!o.position_inverted,
      tiltAngle: o.tilt_angle && o.tilt_angle !== "none" ? o.tilt_angle : null,
      tiltMax: o.tilt_max ?? null,
      tiltOffset: o.tilt_offset ?? null,
      tiltInvert: !!o.tilt_invert,
      shut: !!o.shut,
      ...(o.contact_invert ? { contactInvert: true } : {}),
    };
  };
  for (const floor of floors) {
    for (const room of floor.rooms) {
      const own = floor.openings.filter((o) => o.room_id === room.id).sort((a, b) => a.edge - b.edge || a.offset - b.offset);
      if (!own.length) continue;
      const ids = areaEntities(hass, room.area_id);
      const cls = (id: string) => hass.states[id]?.attributes.device_class as string | undefined;
      const covers = ids.filter((id) => kindOf(id) === "cover" && COVER_CLASSES.has(cls(id)));
      const windows = own.filter((o) => o.type === "window");
      const doors = own.filter((o) => o.type === "door");
      const garages = own.filter((o) => o.type === "garage");
      // one blind for the whole room (e.g. a group) serves every window; a sensor belongs to one window
      const autoCover = pair(windows, covers, true);
      const autoWindow = pair(windows, ids.filter((id) => kindOf(id) === "binary" && WINDOW_CONTACTS.has(cls(id)!)));
      const autoDoor = pair(doors, ids.filter((id) => kindOf(id) === "binary" && cls(id) === "door"));
      const autoGarageCover = pair(garages, ids.filter((id) => kindOf(id) === "cover" && GARAGE_COVERS.has(cls(id) ?? "")));
      const autoGarageContact = pair(garages, ids.filter((id) => kindOf(id) === "binary" && cls(id) === "garage_door"));
      for (const o of own) {
        const autoC = o.type === "window" ? autoCover : o.type === "garage" ? autoGarageCover : null;
        const autoK = o.type === "window" ? autoWindow : o.type === "garage" ? autoGarageContact : autoDoor;
        out.set(o.id, link(o, autoC?.get(o.id), autoK.get(o.id)));
      }
    }
    // an opening in a free wall that stands outside every room (outer walls drawn with the wall tool, rooms
    // without walls of their own) has no area to look in: only the entities chosen by hand drive it (#367)
    for (const o of floor.openings) if (!out.has(o.id)) out.set(o.id, link(o));
  }
  return out;
}

const POSITION_WORDS: [RegExp, "open" | "tilted" | "closed"][] = [
  [/^(tilted|tilt|gekippt|kipp)/i, "tilted"],
  [/^(open|opened|offen|geöffnet|on)$/i, "open"],
  [/^(closed|close|geschlossen|zu|off)$/i, "closed"],
];

/**
 * Position of a window or door from its contact: plain contacts (on = open), handle sensors with
 * three states ("open" / "tilted" / "closed", also in German) and contacts that tell it in a
 * window_state attribute (HomematicIP). Null when the sensor gives no answer.
 */
export function windowPosition(st: HassEntity | undefined): "open" | "tilted" | "closed" | null {
  if (!st || isUnavailable(st)) return null;
  const attr = st.attributes.window_state;
  for (const value of [typeof attr === "string" ? attr : null, st.state]) {
    if (!value) continue;
    const hit = POSITION_WORDS.find(([re]) => re.test(value.trim()));
    if (hit) return hit[1];
  }
  return null;
}

/** Lock states that leave the door unlocked (Nuki's "open" is unlatched). */
const LOCK_OPEN_STATES = new Set(["unlocked", "unlocking", "open", "opening"]);

/**
 * A garage door's drive that only gives a pulse (#677): a switch the opener turns off again by itself, or a button.
 * It is pressed on a tap; the door's state comes from its contact.
 */
export function isPulseDrive(id: string | null | undefined): boolean {
  return !!id && /^(switch|button|input_button)\./.test(id);
}

/** Door leaves without a contact sensor stand half open, so the doorway stays readable. */
export const DOOR_DEFAULT_OPEN = 0.5;

/**
 * Visual state of an opening from its entities. Windows: sash open or tilted, blind closed fraction.
 * Doors: leaf open (contact) or half open. Garage doors: closed fraction from the cover or contact.
 */
export function openingState(
  hass: HomeAssistant,
  e: OpeningEntities,
  type: Opening["type"] = "window",
): { open: number; open2: number; tilt: number; tilt2: number; cover: number | null; sensed: boolean; unlocked?: boolean } {
  // a drive that only gives a pulse (a switch, a button) reports nothing about the door: the contact does (#677)
  if (e.cover && isPulseDrive(e.cover)) e = { ...e, cover: null, position: null };
  // the door's smart lock: unlocked (or unlatched) gives the leaf a soft glow at its edge (#682)
  const lockSt = e.lock ? hass.states[e.lock] : undefined;
  const lockOpen = !!lockSt && LOCK_OPEN_STATES.has(lockSt.state) ? { unlocked: true } : {};
  const on = (id: string | null | undefined) => !!id && hass.states[id]?.state === "on";
  const known = (id: string | null | undefined) => !!id && !!hass.states[id] && !isUnavailable(hass.states[id]);
  const raw = (id: string | null | undefined) => (id ? windowPosition(hass.states[id]) : null);
  // "Kontakt umkehren": a contact that reports open as closed and the other way round (#329); tilted stays tilted
  const pos = (id: string | null | undefined) => {
    const p = raw(id);
    return e.contactInvert && id && id !== e.tilt && id !== e.tilt2 && p !== "tilted" && p ? (p === "open" ? "closed" : "open") : p;
  };
  // the second leaf of a double door or window stays closed without a sensor; it tilts like the first
  const tilted2 = on(e.tilt2) || pos(e.tilt2) === "tilted" || pos(e.contact2) === "tilted";
  const open2 = pos(e.contact2) === "open" && !tilted2 ? 1 : 0;
  // a separate tilt sensor, or a handle sensor that reports "tilted" itself
  let tilted = on(e.tilt) || pos(e.tilt) === "tilted" || pos(e.contact) === "tilted";
  // a tilt angle sensor tilts the sash as far as it reports (a share of the angle that counts as fully tilted)
  let tiltFrac = tilted ? 1 : 0;
  const angleRaw = e.tiltAngle ? Number(hass.states[e.tiltAngle]?.state) : NaN;
  if (Number.isFinite(angleRaw)) {
    const angle = (angleRaw - (e.tiltOffset ?? 0)) * (e.tiltInvert ? -1 : 1);
    tiltFrac = Math.min(1, Math.max(0, angle / (e.tiltMax || 15)));
    if (tiltFrac < 0.08) tiltFrac = 0;
    tilted = tiltFrac > 0;
  }
  const open = pos(e.contact) === "open" && !tilted ? 1 : 0;
  let cover: number | null = null;
  const c = e.cover ? hass.states[e.cover] : undefined;
  const live = livePosition(hass, e.position);
  if (live !== null) cover = e.positionInverted ? live : 1 - live;
  else if (c && !isUnavailable(c)) {
    const pos = c.attributes.current_position;
    if (typeof pos === "number") cover = 1 - Math.min(100, Math.max(0, pos)) / 100;
    else cover = c.state === "closed" ? 1 : c.state === "opening" || c.state === "closing" ? 0.5 : 0;
  } else if (e.cover) cover = 0;
  if (type === "door") {
    const p = pos(e.contact);
    // a cover that is a gate, garage door or door is the door itself (a sliding gate on a sliding door): it moves the
    // leaf – as far as its position says – and no blind is drawn (#544); the contact still wins when there is one
    if (cover !== null && c && DOOR_COVERS.has(String(c.attributes.device_class ?? ""))) {
      const leaf = p === null ? 1 - cover : p === "closed" ? 0 : 1;
      return { open: leaf, open2: pos(e.contact2) === "open" ? 1 : 0, tilt: 0, tilt2: 0, cover: null, sensed: true, ...lockOpen };
    }
    // a door with a roller shutter (front door, French window, sliding door): the blind comes down over it
    return { open: p === null ? (e.shut ? 0 : DOOR_DEFAULT_OPEN) : p === "closed" ? 0 : 1, open2: pos(e.contact2) === "open" ? 1 : 0, tilt: 0, tilt2: 0, cover, sensed: p !== null || cover !== null, ...lockOpen };
  }
  if (type === "garage") {
    // a garage door without a cover shows its contact: open or closed (read like a door's, so text states and
    // a window_state attribute count too)
    const p = pos(e.contact);
    const sensed = cover !== null || p !== null;
    if (cover === null) cover = p === null || p === "closed" ? 1 : 0;
    return { open: 0, open2: 0, tilt: 0, tilt2: 0, cover, sensed };
  }
  return { open, open2, tilt: tiltFrac, tilt2: tilted2 ? 1 : 0, cover, sensed: known(e.contact) || known(e.tilt) || Number.isFinite(angleRaw), ...lockOpen };
}

/**
 * Open fraction from a separate position sensor (Homematic "level" and the like): a percentage
 * (unit "%" or a value above 1) or a fraction 0–1; null when unknown.
 */
function livePosition(hass: HomeAssistant, id: string | null | undefined): number | null {
  const st = id ? hass.states[id] : undefined;
  if (!st || isUnavailable(st)) return null;
  const v = Number(st.state);
  if (!Number.isFinite(v)) return null;
  const percent = st.attributes.unit_of_measurement === "%" || v > 1;
  return Math.min(1, Math.max(0, percent ? v / 100 : v));
}

// ------------------------------------------------------------------ grouping by device

export interface DeviceGroup {
  /** The device's main entity (the one carrying the device name), or the entity itself. */
  primary: string;
  /** Further entities of the same device (indicators, effects, extra channels, …). */
  others: string[];
}

/**
 * Groups entities by device. The main entity is the one without a name of its own (Home Assistant's
 * convention for a device's main feature); otherwise the first in kind order. Groups keep the order
 * of their main entities in `ids`.
 */
export function groupByDevice(hass: HomeAssistant, ids: readonly string[]): DeviceGroup[] {
  const byDevice = new Map<string, string[]>();
  const order: string[] = [];
  for (const id of ids) {
    // a camera is never folded under another entity of its device: a UniFi camera names all its entities, so its
    // status light or motion sensor would become the main one and the camera land behind "+N more" (#517)
    const device = kindOf(id) === "camera" ? `camera:${id}` : (hass.entities?.[id]?.device_id ?? `entity:${id}`);
    let list = byDevice.get(device);
    if (!list) {
      byDevice.set(device, (list = []));
      order.push(device);
    }
    list.push(id);
  }
  const groups = order.map((device) => {
    const list = byDevice.get(device)!;
    const main = list.find((id) => !hass.entities?.[id]?.name) ?? list[0];
    return { primary: main, others: list.filter((id) => id !== main) };
  });
  const rank = new Map(ids.map((id, i) => [id, i]));
  return groups.sort((a, b) => rank.get(a.primary)! - rank.get(b.primary)!);
}

/** Main entities only (one per device). */
export function primaryEntities(hass: HomeAssistant, ids: readonly string[]): string[] {
  return groupByDevice(hass, ids).map((g) => g.primary);
}

// ------------------------------------------------------------------ furniture links

/** Name patterns of the entities that belong to electric furniture. */
const FURNITURE_NAMES: Record<string, RegExp> = {
  robot_vacuum: /(saug|vacuum|robo|roomba|roborock|dreame|ecovacs|deebot)/i,
  tv_board: /\b(tv|fernseh|television|fire ?tv|apple ?tv|chromecast|shield)/i,
  tv_wall: /\b(tv|fernseh|television|fire ?tv|apple ?tv|chromecast|shield)/i,
  desk: /\b(pc|computer|rechner|desktop|monitor|workstation)/i,
  fridge: /(kühl|fridge|gefrier|freezer)/i,
  fridge_smart: /(kühl|fridge|gefrier|freezer)/i,
  stove: /(herd|kochfeld|cooktop|stove|induktion)/i,
  kitchen_tall: /(backofen|oven|ofen)/i,
  dishwasher: /(spülmaschine|geschirrspül|dishwasher)/i,
  washer: /(waschmaschine|washer|washing)/i,
  dryer: /(trockner|dryer)/i,
  kitchen: /(kaffee|coffee|wasserkocher|kettle)/i,
  island: /(kochfeld|herd|induktion|cooktop)/i,
  sink: /(spülmaschine|geschirrspül|dishwasher)/i,
  radiator: /(heiz|radiator|thermostat|climate|hk|trv)/i,
  ac_unit: /(klima|air ?con|aircon|airco|split|\bac\b|clim)/i,
  awning: /(markise|awning|sonnensegel|beschattung|store|zonnescherm)/i,
};
const MEDIA_FURNITURE = new Set(["tv_board", "tv_wall"]);

/** Whether a screen picture rule matches now: the state or attribute equals the value, or contains it (3+ chars); "*" always. */
export function pictureRuleMatches(hass: HomeAssistant, rule: { entity: string; attribute?: string | null; state: string }): boolean {
  const st = hass.states[rule.entity];
  if (!st) return false;
  const raw = rule.attribute ? st.attributes[rule.attribute] : st.state;
  if (raw === undefined || raw === null) return false;
  const value = String(raw).toLowerCase();
  const want = rule.state.trim().toLowerCase();
  return rule.state.trim() === "*" || value === want || (want.length >= 3 && value.includes(want));
}

/** Furniture with a screen that shows a media player: the built-in TVs, or a pack item with a screen part. */
export function isMediaFurniture(type: string): boolean {
  return MEDIA_FURNITURE.has(type) || !!packScreen(type);
}
/** Furniture with a screen that can show a media player or a picture rule (media furniture and the desk's monitor). */
export function hasScreen(type: string): boolean {
  return isMediaFurniture(type) || type === "desk" || type === "fridge_smart";
}

/** Entities that ask before they are switched: placed devices and furniture links marked "confirm". */
export function confirmEntities(hass: HomeAssistant, floors: readonly Floor[]): Set<string> {
  const out = new Set<string>();
  const links = furnitureEntities(hass, floors);
  const openings = floors.some((f) => f.openings.some((o) => o.confirm)) ? openingEntities(hass, floors) : null;
  for (const floor of floors) {
    for (const p of floor.placements) if (p.confirm) out.add(p.entity_id);
    // blinds and garage doors of openings marked "ask first"
    for (const o of floor.openings) {
      const cover = o.confirm ? openings?.get(o.id)?.cover : null;
      if (cover && cover !== "none") out.add(cover);
    }
    for (const f of floor.furniture) {
      const e = f.confirm ? links.get(f.id)?.entity : null;
      if (e && e !== "none") out.add(e);
      // a wall switch or socket asks before switching any of its gangs
      if (f.confirm) for (const g of f.gangs ?? []) if (g.entity && g.entity !== "none") out.add(g.entity);
    }
  }
  return out;
}

/** An awning's cover right now: how far it is out (0 … 1, when known) and whether it is running out or in. */
export interface AwningState {
  /** Position 0 (in) … 1 (fully out); null while only "opening"/"closing" is known. */
  out: number | null;
  /** Running: +1 out, -1 in, 0 standing. */
  moving: -1 | 0 | 1;
  /** Seconds for a full run (to move along while no position is reported). */
  time: number;
}

/**
 * Awnings: their cover's position (or that of a separate position sensor), and whether they run. A cover that only
 * reports open/closed and opening/closing moves along in 3D at its set run time.
 */
export function awningStates(hass: HomeAssistant, floors: readonly Floor[]): Map<string, AwningState> {
  const out = new Map<string, AwningState>();
  for (const floor of floors)
    for (const f of floor.furniture) {
      // a motorised curtain or roll-down screen from a pack follows its cover the same way (#511)
      if (f.type !== "awning" && !packMotion(f.type)) continue;
      const id = f.entity && f.entity !== "none" ? f.entity : null;
      const st = id ? hass.states[id] : undefined;
      const time = f.awning_time ?? 20;
      if (!st || isUnavailable(st)) {
        out.set(f.id, { out: 0, moving: 0, time });
        continue;
      }
      const flip = (v: number) => (f.awning_invert ? 1 - v : v);
      // a live position sensor (0–100 % or 0–1, like a blind's) wins over the cover's own position
      const live = livePosition(hass, f.awning_position && f.awning_position !== "none" ? f.awning_position : null);
      const raw = st.attributes.current_position;
      const moving: -1 | 0 | 1 = st.state === "opening" ? (f.awning_invert ? -1 : 1) : st.state === "closing" ? (f.awning_invert ? 1 : -1) : 0;
      if (live !== null) out.set(f.id, { out: flip(live), moving: 0, time });
      else if (typeof raw === "number" && Number.isFinite(raw)) out.set(f.id, { out: flip(Math.min(1, Math.max(0, raw / 100))), moving: 0, time });
      else if (moving) out.set(f.id, { out: null, moving, time });
      // without a position: open (a cover) or on (a switch that drives it) is fully out
      else out.set(f.id, { out: flip(st.state === "open" || st.state === "on" ? 1 : 0), moving: 0, time });
    }
  return out;
}

/** Smart fridges: which of their doors stand open now (a door sensor reporting "on" or "open"). */
export function fridgeDoors(hass: HomeAssistant, floors: readonly Floor[]): Map<string, { left: boolean; right: boolean }> {
  const open = (id: EntityRef | undefined) => {
    if (!id || id === "none") return false;
    const s = hass.states[id]?.state;
    return s === "on" || s === "open";
  };
  const out = new Map<string, { left: boolean; right: boolean }>();
  for (const floor of floors) for (const f of floor.furniture) if (f.type === "fridge_smart") out.set(f.id, { left: open(f.door_left), right: open(f.door_right) });
  return out;
}
/** Name hints for picking a lamp's light (a light that fits the name wins, otherwise any free one). */
const LAMP_NAMES: Record<string, RegExp> = {
  lamp_ceiling: /(decke|ceiling|haupt|main)/i,
  lamp_downlight: /(spot|strahler|downlight|einbau)/i,
  lamp_spot: /(spot|strahler)/i,
  lamp_panel: /(panel|decke|ceiling)/i,
  lamp_uplight: /(fluter|uplight|steh)/i,
  lamp_bollard: /(weg|garten|garden|path|poller|außen|aussen|outdoor)/i,
  lamp_garden: /(garten|garden|spot|außen|aussen|outdoor|baum|tree)/i,
  lamp_pendant: /(pendel|pendant|hänge|esstisch|dining)/i,
  lamp_fan: /(ventilator|fan|lüfter|luefter|decke|ceiling)/i,
  lamp_floor: /(steh|floor)/i,
  lamp_table: /(tisch|nacht|table|bedside|lese|reading)/i,
  lamp_wall: /(wand|wall)/i,
  led_strip: /(led|strip|streifen|leiste|band)/i,
};

export interface FurnitureLinks {
  entity: string | null;
  power: string | null;
}

function isPower(hass: HomeAssistant, id: string): boolean {
  return id.startsWith("sensor.") && hass.states[id]?.attributes.device_class === "power";
}

/** Power sensor of an entity's device. */
function devicePower(hass: HomeAssistant, id: string): string | null {
  if (isPower(hass, id)) return id;
  const device = hass.entities?.[id]?.device_id;
  if (!device) return null;
  return powerSensorsOf(hass, device).find((e) => e !== id) ?? null;
}

/**
 * Entities of electric furniture: set by hand, or (when null) found in the area of the room the item
 * stands in: the TV's media player (a TV first), otherwise an entity whose name fits the item; the
 * power sensor comes from the same device or a sensor whose name fits. Each entity is used once.
 */
export function furnitureEntities(hass: HomeAssistant, floors: readonly Floor[]): Map<string, FurnitureLinks> {
  const out = new Map<string, FurnitureLinks>();
  for (const floor of floors) {
    // entities set by hand and devices placed in the plan (an Echo Show in the corner) are taken
    const used = new Set<string>([...floor.furniture.flatMap((f) => [f.entity, f.power]), ...floor.placements.map((p) => p.entity_id)].filter((v): v is string => !!v && v !== "none"));
    for (const f of floor.furniture) {
      const lamp = f.type in LAMP_NAMES;
      const pattern = lamp ? LAMP_NAMES[f.type] : (FURNITURE_NAMES[f.type] ?? (isRobotVacuum(f.type) ? FURNITURE_NAMES.robot_vacuum : undefined));
      if (!pattern && f.entity == null && f.power == null) continue;
      // an awning hangs outside: the terrace or garden area it stands over counts as its room (#688)
      const room =
        floor.rooms.find((r) => r.points.length >= 3 && pointInPolygon([f.x, f.z], r.points)) ??
        (f.type === "awning" ? outdoorZones(floor).find((z) => pointInPolygon([f.x, f.z], z.points)) : undefined);
      const ids = room ? primaryEntities(hass, areaEntities(hass, room.area_id)) : [];
      const name = (id: string) => `${id} ${entityName(hass, id)}`;
      let entity: string | null = f.entity === "none" ? null : (f.entity ?? null);
      if (f.entity == null) {
        const free = ids.filter((id) => !used.has(id));
        if (lamp) {
          const lights = free.filter((id) => kindOf(id) === "light");
          entity = lights.find((id) => pattern.test(name(id))) ?? lights[0] ?? null;
        } else if (isRobotVacuum(f.type)) {
          // vacuums are no device kind of their own: look them up in the room's area directly
          const area = room?.area_id ?? null;
          entity = Object.keys(hass.entities ?? {}).find((id) => id.startsWith("vacuum.") && !used.has(id) && !hiddenInHa(hass, id) && entityAreaId(hass, id) === area) ?? null;
        } else if (f.type === "radiator" || f.type === "ac_unit") {
          const climates = free.filter((id) => kindOf(id) === "climate");
          entity = climates.find((id) => pattern.test(name(id))) ?? climates[0] ?? null;
        } else if (isMediaFurniture(f.type)) {
          const media = free.filter((id) => kindOf(id) === "media");
          // a TV takes the TV (or any player of the room); a monitor or a smart speaker model only one whose name fits
          entity =
            media.find((id) => hass.states[id]?.attributes.device_class === "tv") ??
            media.find((id) => pattern?.test(name(id))) ??
            (MEDIA_FURNITURE.has(f.type) ? (media[0] ?? null) : null);
        } else if (f.type === "awning") {
          // an awning runs on a cover (#688): one whose name says awning, else none (a roller blind is no awning)
          entity = free.find((id) => id.startsWith("cover.") && (pattern?.test(name(id)) || hass.states[id]?.attributes.device_class === "awning")) ?? null;
        } else if (pattern) {
          entity = free.find((id) => ["switch", "media", "fan"].includes(kindOf(id) ?? "") && pattern.test(name(id))) ?? null;
        }
        if (entity) used.add(entity);
      }
      let power: string | null = f.power === "none" ? null : (f.power ?? null);
      if (f.power == null) {
        power = entity ? devicePower(hass, entity) : null;
        if (!power && pattern && room && !lamp) {
          const all = areaEntities(hass, room.area_id);
          power = all.find((id) => isPower(hass, id) && !used.has(id) && pattern.test(name(id))) ?? null;
        }
        if (power) used.add(power);
      }
      if (entity || power) out.set(f.id, { entity, power });
    }
  }
  return out;
}

/** An access point's status (D582): online, offline, or null when nothing says (unknown). */
export function apOnline(st: HassEntity | undefined): boolean | null {
  if (!st) return null;
  const s = String(st.state).toLowerCase();
  if (s === "unavailable") return false;
  if (s === "unknown" || s === "") return null;
  return !["off", "disconnected", "offline", "not_home", "disabled", "down", "isolated"].includes(s);
}

/** How fast a ceiling fan's blades turn (0–1): its percentage while it is on, a middle speed when it reports none. */
export function fanSpeed(st: HassEntity | undefined): number {
  if (!st || st.state !== "on") return 0;
  const pct = st.attributes.percentage;
  return typeof pct === "number" && Number.isFinite(pct) ? Math.max(0, Math.min(1, pct / 100)) : 0.6;
}

/** Glow colour of a TV screen for the app that is running (brand colours of common apps). */
export function appColor(st: HassEntity | undefined): [number, number, number] | null {
  if (!st || st.state === "off" || st.state === "standby" || isUnavailable(st)) return null;
  const a = st.attributes;
  const text = `${a.app_name ?? ""} ${a.source ?? ""} ${a.app_id ?? ""}`.toLowerCase();
  if (text.includes("netflix")) return [0.9, 0.04, 0.08];
  if (text.includes("youtube")) return [1, 0.1, 0.15];
  if (text.includes("prime") || text.includes("amazon")) return [0.1, 0.6, 0.95];
  if (text.includes("disney")) return [0.2, 0.35, 1];
  if (text.includes("spotify")) return [0.12, 0.85, 0.4];
  if (text.includes("zdf") || text.includes("ard") || text.includes("mediathek")) return [1, 0.5, 0.1];
  return [0.22, 0.88, 1];
}

/**
 * Entities of a room's panel: what the plan shows in the room (placed devices, lamps and furniture
 * with their entities, blinds and contacts of its doors and windows) plus the ones picked for the
 * panel. `more` are the other entities of the room's area, offered on request.
 */
export function roomPanelEntities(hass: HomeAssistant, floor: Floor, room: Room, roofWindows: readonly RoofWindow[] = []): { shown: string[]; more: string[] } {
  const inRoom = (x: number, z: number) => pointInPolygon([x, z], room.points);
  const furniture = furnitureEntities(hass, [floor]);
  const openings = openingEntities(hass, [floor]);
  const shown = [
    ...floor.placements.filter((p) => inRoom(p.x, p.z)).map((p) => p.entity_id),
    ...floor.furniture.filter((f) => inRoom(f.x, f.z)).flatMap((f) => [furniture.get(f.id)?.entity, furniture.get(f.id)?.power]),
    ...floor.openings.filter((o) => o.room_id === room.id).flatMap((o) => {
      const e = openings.get(o.id);
      return e ? [e.cover, e.contact, e.tilt, e.contact2] : [];
    }),
    // the roof windows over the room (#482)
    ...roofWindows.flatMap((w) => [w.window, w.cover, w.contact, w.tilt]),
    ...(room.panel ?? []),
  ].filter((id): id is string => !!id && !!hass.states[id]);
  // entities the editor hid for this room stay out of the panel altogether
  const hidden = new Set(room.hidden ?? []);
  const unique = [...new Set(shown)].filter((id) => !hidden.has(id));
  const set = new Set(unique);
  return { shown: unique, more: areaEntities(hass, room.area_id).filter((id) => !set.has(id) && !hidden.has(id)) };
}

const ROOM_KEYS = /(^|_)(current_room|current_segment|aktueller_raum|current_area)($|_)/;

// ------------------------------------------------------------------ Auto Pro: the car on a parking spot

/** The car's entities, every role resolved: the chosen one, else one found on the car's device. */
export interface CarEntities {
  soc: string | null;
  range: string | null;
  charging: string | null;
  plugged: string | null;
  lock: string | null;
  climate: string | null;
  tracker: string | null;
}

const CAR_ROLE_PATTERNS: Record<keyof CarEntities, RegExp> = {
  soc: /(^|_)(soc|state_of_charge|battery_level|battery|ladestand|ladezustand|akku)($|_)/,
  range: /(^|_)(range|reichweite|remaining_range)($|_)/,
  charging: /(charging|charge_power|ladeleistung|laden|charger_power|lade)/,
  plugged: /(plug|cable|connected|stecker|kabel|angeschlossen)/,
  lock: /(lock|verriegel|schloss)/,
  climate: /(climat|preheat|precondition|hvac|heiz|klima|standheizung)/,
  tracker: /./,
};

/** The entities of the car's Home Assistant device: the chosen device entity's siblings, else the presence entity's. */
export function carEntities(hass: HomeAssistant, f: Pick<Furniture, "entity" | "car">): CarEntities {
  const c = f.car ?? {};
  const pick = (ref: string | null | undefined) => (ref && ref !== "none" ? ref : null);
  const seed = pick(c.device) ?? pick(f.entity);
  const device = seed ? hass.entities?.[seed]?.device_id : null;
  const siblings = device && hass.entities ? Object.values(hass.entities).filter((e) => e.device_id === device).map((e) => e.entity_id) : [];
  const key = (id: string) => `${id} ${(hass.states[id]?.attributes.friendly_name as string | undefined) ?? ""} ${hass.entities?.[id]?.translation_key ?? ""}`.toLowerCase().replace(/[\s-]+/g, "_");
  const find = (role: keyof CarEntities, domains: string[], extra?: (id: string) => boolean) =>
    siblings.find((id) => domains.includes(id.split(".")[0]) && CAR_ROLE_PATTERNS[role].test(key(id)) && (!extra || extra(id))) ?? null;
  const unit = (id: string) => String(hass.states[id]?.attributes.unit_of_measurement ?? "");
  const dc = (id: string) => String(hass.states[id]?.attributes.device_class ?? "");
  return {
    soc: pick(c.soc) ?? siblings.find((id) => id.startsWith("sensor.") && dc(id) === "battery") ?? find("soc", ["sensor"], (id) => unit(id) === "%"),
    range: pick(c.range) ?? find("range", ["sensor"], (id) => /km|mi/.test(unit(id))) ?? find("range", ["sensor"]),
    charging: pick(c.charging) ?? find("charging", ["sensor"], (id) => /^k?W$/.test(unit(id))) ?? find("charging", ["binary_sensor", "switch"]),
    plugged: pick(c.plugged) ?? siblings.find((id) => id.startsWith("binary_sensor.") && dc(id) === "plug") ?? find("plugged", ["binary_sensor"]),
    lock: pick(c.lock) ?? siblings.find((id) => id.startsWith("lock.")) ?? find("lock", ["binary_sensor"]),
    climate: pick(c.climate) ?? siblings.find((id) => id.startsWith("climate.")) ?? find("climate", ["switch", "binary_sensor"]),
    tracker: pick(c.tracker) ?? siblings.find((id) => id.startsWith("device_tracker.")) ?? null,
  };
}

/** What the car reports right now (null for anything it does not tell). */
export interface CarState {
  entities: CarEntities;
  soc: number | null;
  range: number | null;
  rangeUnit: string;
  /** Charging power in W when a power sensor reports it. */
  chargingW: number | null;
  charging: boolean;
  plugged: boolean | null;
  locked: boolean | null;
  climateOn: boolean | null;
  /** Where the car is when not at home (the tracker's zone), null at home or unknown. */
  away: string | null;
}

/**
 * Whether the car's lock entity says locked (null when it cannot tell): a lock, a binary_sensor of class lock
 * ("on" means unlocked, as in Home Assistant), a text sensor like BMW's door lock state ("LOCKED", "SECURED",
 * "UNLOCKED", "SELECTIVE_LOCKED", #369) or a switch or helper that is "on" while locked.
 */
export function carLocked(st: HassEntity): boolean | null {
  const id = st.entity_id;
  const state = String(st.state).toLowerCase().trim();
  if (id.startsWith("lock.")) return state === "locked";
  if (id.startsWith("binary_sensor.")) return st.attributes.device_class === "lock" ? state === "off" : state === "on";
  if (id.startsWith("sensor.")) {
    if (/^(locked|secured|double_locked|verriegelt|gesichert|abgeschlossen)$/.test(state)) return true;
    if (/^(unlocked|unsecured|selective_locked|partially_locked|open|entriegelt|offen|unverriegelt)$/.test(state)) return false;
    return null;
  }
  return state === "on";
}

export function carState(hass: HomeAssistant, f: Pick<Furniture, "entity" | "car">): CarState {
  const e = carEntities(hass, f);
  const st = (id: string | null) => (id ? hass.states[id] : undefined);
  const num = (id: string | null) => {
    const v = Number(st(id)?.state);
    return id && Number.isFinite(v) ? v : null;
  };
  const soc = num(e.soc);
  const range = num(e.range);
  const chargeSt = st(e.charging);
  const chargeUnit = String(chargeSt?.attributes.unit_of_measurement ?? "");
  const chargingW = chargeSt && /^k?W$/.test(chargeUnit) ? (num(e.charging) ?? 0) * (chargeUnit === "kW" ? 1000 : 1) : null;
  const charging = chargingW !== null ? chargingW > 50 : !!chargeSt && ["on", "charging", "laden"].includes(chargeSt.state.toLowerCase());
  const plugSt = st(e.plugged);
  const lockSt = st(e.lock);
  const climSt = st(e.climate);
  const trackSt = st(e.tracker);
  const trackState = trackSt?.state.toLowerCase() ?? "";
  return {
    entities: e,
    soc: soc !== null ? Math.max(0, Math.min(100, soc)) : null,
    range,
    rangeUnit: String(st(e.range)?.attributes.unit_of_measurement ?? "km"),
    chargingW,
    charging,
    plugged: plugSt ? plugSt.state === "on" : null,
    locked: lockSt ? carLocked(lockSt) : null,
    climateOn: climSt ? (climSt.entity_id.startsWith("climate.") ? climSt.state !== "off" && climSt.state !== "unavailable" : climSt.state === "on") : null,
    away: trackSt && trackState !== "home" && !isUnavailable(trackSt) ? (trackState === "not_home" ? "" : trackSt.state) : null,
  };
}

/** Every entity a car's state hangs on (to watch for changes). */
export function carWatched(hass: HomeAssistant, floors: readonly Floor[]): string[] {
  return floors.flatMap((fl) => fl.furniture.filter((f) => f.type === "parking" && f.car).flatMap((f) => Object.values(carEntities(hass, f)))).filter((id): id is string => !!id);
}

/** The sensor naming the room a robot vacuum cleans: the chosen one, else one of the vacuum's device. */
export function robotRoomSensor(hass: HomeAssistant, vacuum: string | null, chosen: string | null | undefined): string | null {
  if (chosen === "none") return null;
  if (chosen) return chosen;
  const device = vacuum ? hass.entities?.[vacuum]?.device_id : null;
  if (!device || !hass.entities) return null;
  for (const e of Object.values(hass.entities)) {
    if (e.device_id !== device || !e.entity_id.startsWith("sensor.")) continue;
    if (ROOM_KEYS.test(e.translation_key ?? "") || ROOM_KEYS.test(e.entity_id.split(".")[1])) return e.entity_id;
  }
  return null;
}

/** A name compared without case, accents or umlaut spelling ("Küche" = "kueche" = "Kuche"). */
export function roomKey(name: string): string {
  return name
    .toLowerCase()
    .replace(/ä/g, "a").replace(/ö/g, "o").replace(/ü/g, "u").replace(/ß/g, "ss")
    .replace(/ae/g, "a").replace(/oe/g, "o").replace(/ue/g, "u")
    .normalize("NFD")
    .replace(/[^a-z0-9]/g, "");
}

/** The room a robot reports (sensor state, else the vacuum's current_room attribute), matched by room or area name. */
export function robotRoom<R extends { name: string; area_id?: string | null }>(hass: HomeAssistant, rooms: readonly R[], vacuum: string | null, sensor: string | null): R | null {
  const attrs = vacuum ? hass.states[vacuum]?.attributes : undefined;
  // the sensor first; when it names no room of the plan, what the vacuum itself says (#470)
  for (const raw of [sensor ? hass.states[sensor]?.state : undefined, attrs?.current_room, attrs?.room, attrs?.current_segment]) {
    const room = roomNamed(hass, rooms, raw);
    if (room) return room;
  }
  return null;
}

/** The room a robot's name for it means ("Küche", "kitchen", the area's id). */
export function roomNamed<R extends { name: string; area_id?: string | null }>(hass: HomeAssistant, rooms: readonly R[], raw: unknown): R | null {
  if (typeof raw !== "string" || !raw || raw === "unknown" || raw === "unavailable") return null;
  const want = roomKey(raw);
  if (!want) return null;
  const names = (r: R) => [r.name, r.area_id ?? "", (r.area_id && hass.areas?.[r.area_id]?.name) || ""].map(roomKey).filter(Boolean);
  return rooms.find((r) => names(r).includes(want)) ?? rooms.find((r) => names(r).some((n) => n.length >= 3 && (n.includes(want) || want.includes(n)))) ?? null;
}

/** Covers that are doors rather than blinds: a central "close all" leaves them alone. */
const DOOR_COVERS = new Set(["garage", "gate", "door"]);

/**
 * Lights and blinds of a floor for the central "all on / all off" (#145): the main entities of its
 * rooms' areas (without the ones a room hides), placed devices and linked furniture. Garage doors and
 * gates are no blinds and stay out.
 */
export function floorControls(hass: HomeAssistant, floor: Floor): { lights: string[]; covers: string[] } {
  const lights = new Set<string>();
  const covers = new Set<string>();
  const add = (id: string | null | undefined) => {
    if (!id || id === "none" || !hass.states[id]) return;
    const kind = kindOf(id);
    if (kind === "light") lights.add(id);
    else if (kind === "cover" && !DOOR_COVERS.has(String(hass.states[id].attributes.device_class ?? ""))) covers.add(id);
  };
  for (const room of floor.rooms) {
    const hidden = new Set(room.hidden ?? []);
    for (const id of primaryEntities(hass, areaEntities(hass, room.area_id))) if (!hidden.has(id)) add(id);
  }
  for (const pl of floor.placements) add(pl.entity_id);
  for (const f of floor.furniture) add(f.entity);
  return { lights: [...lights], covers: [...covers] };
}

/** The service a favourite runs when tapped: scenes and scripts start, buttons are pressed, the rest toggles. */
export function favoriteCall(entityId: string): [domain: string, service: string] {
  const domain = entityId.split(".")[0];
  if (domain === "scene" || domain === "script") return [domain, "turn_on"];
  if (domain === "automation") return [domain, "trigger"];
  if (domain === "button" || domain === "input_button") return [domain, "press"];
  return ["homeassistant", "toggle"];
}

/**
 * Run an own button (D143) from an element inside the dashboard: navigate, more-info, a service, or a
 * DOM event – "ll-custom" is what Home Assistant's fire-dom-event sends, and browser_mod listens for it.
 */
export function runButton(hass: HomeAssistant, from: HTMLElement, b: { action: string; target?: string | null; data?: Record<string, unknown> | null }): void {
  const target = b.target?.trim() ?? "";
  if (b.action === "navigate" && target) {
    history.pushState(null, "", target);
    window.dispatchEvent(new CustomEvent("location-changed", { detail: { replace: false } }));
  } else if (b.action === "more_info" && target) {
    from.dispatchEvent(new CustomEvent("hass-more-info", { detail: { entityId: target }, bubbles: true, composed: true }));
  } else if (b.action === "service" && target.includes(".")) {
    const [domain, service] = target.split(".", 2);
    void hass.callService(domain, service, b.data ?? {});
  } else if (b.action === "fire_dom_event") {
    from.dispatchEvent(new CustomEvent("ll-custom", { detail: b.data ?? {}, bubbles: true, composed: true }));
  }
}
