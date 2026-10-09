// Pool Pro: what a pool's entities say – water temperature, heat pump, filter pump, light, pH, chlorine and
// cover. A role left empty is found by name (an entity with "pool" in its id or name and the right kind),
// "none" switches it off. Pure functions on the hass state, shared by the 3D view, the alerts and the editor.

import type { Floor, OutdoorArea, PoolLinks } from "./model.ts";
import type { HassEntity, HomeAssistant } from "./types.ts";
import { isUnavailable, lightGlow } from "./devices.ts";

export type PoolRole = keyof PoolLinks;
export const POOL_ROLES: PoolRole[] = ["temperature", "heater", "pump", "light", "ph", "chlorine", "cover"];

export interface PoolEntities {
  temperature: string | null;
  heater: string | null;
  pump: string | null;
  light: string | null;
  ph: string | null;
  chlorine: string | null;
  cover: string | null;
}

/** How a measured value stands: in the ideal range, a little off, or far off. */
export type PoolRange = "ok" | "warn" | "bad";

export interface PoolState {
  entities: PoolEntities;
  /** Water temperature and its unit (°C / °F); null when nothing reports it. */
  temp: number | null;
  unit: string;
  heater: {
    id: string;
    /** climate / water_heater have a target temperature; a switch only turns on and off. */
    kind: "climate" | "water_heater" | "switch";
    on: boolean;
    heating: boolean;
    target: number | null;
    step: number;
    min: number;
    max: number;
  } | null;
  pump: { id: string; on: boolean; watts: number | null; switchable: boolean } | null;
  light: { id: string; on: boolean; color: [number, number, number]; level: number } | null;
  ph: { value: number; range: PoolRange } | null;
  /** Redox (mV) or free chlorine (mg/l). */
  chlorine: { value: number; unit: string; orp: boolean; range: PoolRange } | null;
  /** How far the cover is closed (0 open … 1 closed) and whether it moves. */
  cover: { id: string; closed: number; moving: boolean } | null;
}

const POOL_WORD = /(pool|schwimm|piscine|piscina|zwembad|basen|bazen)/;

/** Ideal and acceptable ranges: pH 7.0–7.4 (6.8–7.8), redox 650–800 mV (600–850), free chlorine 0.3–1.5 mg/l (0.1–3). */
export function poolRange(kind: "ph" | "orp" | "chlorine", v: number): PoolRange {
  const [ok0, ok1, w0, w1] = kind === "ph" ? [7.0, 7.4, 6.8, 7.8] : kind === "orp" ? [650, 800, 600, 850] : [0.3, 1.5, 0.1, 3];
  return v >= ok0 && v <= ok1 ? "ok" : v >= w0 && v <= w1 ? "warn" : "bad";
}

/** The entities of a pool: chosen ones, else found by name. */
export function poolEntities(hass: HomeAssistant, links: PoolLinks | null | undefined): PoolEntities {
  const l = links ?? {};
  const ids = Object.keys(hass.states);
  const key = (id: string) => `${id} ${(hass.states[id]?.attributes.friendly_name as string | undefined) ?? ""}`.toLowerCase().replace(/[\s-]+/g, "_");
  const dc = (id: string) => String(hass.states[id]?.attributes.device_class ?? "");
  const unit = (id: string) => String(hass.states[id]?.attributes.unit_of_measurement ?? "");
  const pooly = ids.filter((id) => POOL_WORD.test(key(id)));
  const first = (list: string[], test: (id: string) => boolean) => list.find(test) ?? null;
  const pick = (role: PoolRole, auto: () => string | null): string | null => {
    const v = l[role];
    if (v === "none") return null;
    return v ?? auto();
  };
  const domain = (id: string) => id.split(".")[0];
  return {
    temperature: pick("temperature", () =>
      first(pooly, (id) => domain(id) === "sensor" && (dc(id) === "temperature" || /°[CF]/.test(unit(id))) && /(wasser|water|eau|agua|acqua)/.test(key(id))) ??
      first(pooly, (id) => domain(id) === "sensor" && (dc(id) === "temperature" || /°[CF]/.test(unit(id))))),
    heater: pick("heater", () =>
      first(pooly, (id) => domain(id) === "climate" || domain(id) === "water_heater") ??
      first(pooly, (id) => /^(switch|input_boolean)$/.test(domain(id)) && /(w(ae|ä)rmepumpe|heat|heiz|chauff)/.test(key(id)))),
    pump: pick("pump", () =>
      first(pooly, (id) => /^(switch|fan|input_boolean)$/.test(domain(id)) && /(pump|pumpe|filter|pompe|bomba)/.test(key(id))) ??
      first(pooly, (id) => domain(id) === "binary_sensor" && /(pump|pumpe|filter)/.test(key(id)))),
    light: pick("light", () => first(pooly, (id) => domain(id) === "light")),
    ph: pick("ph", () => {
      const isPh = (id: string) => domain(id) === "sensor" && (dc(id) === "ph" || unit(id).toLowerCase() === "ph" || /(^|[._])ph($|_)/.test(key(id)));
      return first(pooly, isPh) ?? first(ids, isPh);
    }),
    chlorine: pick("chlorine", () => {
      const isCl = (id: string) => domain(id) === "sensor" && (/(orp|redox|chlor|chlore|cloro)/.test(key(id)) || unit(id) === "mV");
      return first(pooly, isCl) ?? first(ids, (id) => domain(id) === "sensor" && /(orp|redox|chlor)/.test(key(id)));
    }),
    cover: pick("cover", () => first(pooly, (id) => domain(id) === "cover")),
  };
}

function num(st: HassEntity | undefined): number | null {
  if (!st || isUnavailable(st)) return null;
  const v = Number(st.state);
  return st.state !== "" && Number.isFinite(v) ? v : null;
}

/** What the pool reports right now (null for anything it does not tell). */
export function poolState(hass: HomeAssistant, links: PoolLinks | null | undefined): PoolState {
  const e = poolEntities(hass, links);
  const st = (id: string | null) => (id ? hass.states[id] : undefined);
  const heatSt = st(e.heater);
  const tempSt = st(e.temperature);
  // the water temperature: its own sensor, else what the heat pump measures
  let temp = num(tempSt);
  let unit = String(tempSt?.attributes.unit_of_measurement ?? "");
  if (temp === null && heatSt && typeof heatSt.attributes.current_temperature === "number") temp = heatSt.attributes.current_temperature as number;
  if (!unit) unit = String(hass.config?.unit_system?.temperature ?? "°C");

  let heater: PoolState["heater"] = null;
  if (heatSt && e.heater && !isUnavailable(heatSt)) {
    const a = heatSt.attributes;
    const kind = e.heater.startsWith("climate.") ? "climate" : e.heater.startsWith("water_heater.") ? "water_heater" : "switch";
    const on = kind === "switch" ? heatSt.state === "on" : heatSt.state !== "off";
    const action = String(a.hvac_action ?? "");
    const target = typeof a.temperature === "number" ? (a.temperature as number) : null;
    // a heat pump that does not report its action heats while it is on and the water is below the target
    const heating = kind === "switch" ? on : action ? action === "heating" : on && target !== null && temp !== null && temp < target - 0.2;
    heater = {
      id: e.heater,
      kind,
      on,
      heating,
      target,
      step: typeof a.target_temp_step === "number" ? (a.target_temp_step as number) : 0.5,
      min: typeof a.min_temp === "number" ? (a.min_temp as number) : 10,
      max: typeof a.max_temp === "number" ? (a.max_temp as number) : 40,
    };
  }

  let pump: PoolState["pump"] = null;
  const pumpSt = st(e.pump);
  if (pumpSt && e.pump && !isUnavailable(pumpSt)) {
    const w = e.pump.startsWith("sensor.") ? num(pumpSt) : null;
    const kw = String(pumpSt.attributes.unit_of_measurement ?? "") === "kW";
    const watts = w === null ? null : kw ? w * 1000 : w;
    pump = { id: e.pump, on: watts !== null ? watts > 20 : pumpSt.state === "on", watts, switchable: /^(switch|fan|input_boolean)\./.test(e.pump) };
  }

  let light: PoolState["light"] = null;
  const lightSt = st(e.light);
  if (lightSt && e.light && !isUnavailable(lightSt)) {
    const glow = e.light.startsWith("light.") ? lightGlow(lightSt) : lightSt.state === "on" ? { color: [0.3, 0.75, 1] as [number, number, number], level: 1 } : null;
    light = { id: e.light, on: !!glow, color: glow?.color ?? [0.3, 0.75, 1], level: glow?.level ?? 0 };
  }

  const phV = num(st(e.ph));
  const clSt = st(e.chlorine);
  const clV = num(clSt);
  const clUnit = String(clSt?.attributes.unit_of_measurement ?? "");
  // redox in mV (values in the hundreds) or free chlorine in mg/l
  const orp = clUnit === "mV" || (clV !== null && clV > 50);

  let cover: PoolState["cover"] = null;
  const covSt = st(e.cover);
  if (covSt && e.cover && !isUnavailable(covSt)) {
    const pos = covSt.attributes.current_position;
    const closed = typeof pos === "number" ? 1 - Math.max(0, Math.min(100, pos)) / 100 : covSt.state === "closed" ? 1 : covSt.state === "open" ? 0 : 0.5;
    cover = { id: e.cover, closed, moving: covSt.state === "opening" || covSt.state === "closing" };
  }

  return {
    entities: e,
    temp,
    unit: unit || "°C",
    heater,
    pump,
    light,
    ph: phV === null ? null : { value: phV, range: poolRange("ph", phV) },
    chlorine: clV === null ? null : { value: clV, unit: orp ? "mV" : clUnit || "mg/l", orp, range: poolRange(orp ? "orp" : "chlorine", clV) },
    cover,
  };
}

/** Every pool with Pool Pro links on these floors. */
export function poolAreas(floors: readonly Floor[]): { floor: Floor; area: OutdoorArea }[] {
  return floors.flatMap((floor) => (floor.outdoor ?? []).filter((a) => a.type === "pool" && a.pool && a.points.length >= 3).map((area) => ({ floor, area })));
}

/** The entities the pools listen to (the view redraws when one of them changes). */
export function poolWatched(hass: HomeAssistant, floors: readonly Floor[]): string[] {
  return poolAreas(floors).flatMap(({ area }) => Object.values(poolEntities(hass, area.pool)).filter((id): id is string => !!id));
}

/**
 * Colour of the water: the pool light's colour while it is on, else a tint by the water temperature (cold deep blue,
 * warm turquoise); the level says how strongly the water glows.
 */
export function poolWaterGlow(s: PoolState): { color: [number, number, number]; level: number } {
  if (s.light?.on) return { color: s.light.color, level: 0.35 + 0.65 * s.light.level };
  if (s.temp === null) return { color: [0.1, 0.45, 0.8], level: 0.18 };
  const c = s.unit.includes("F") ? ((s.temp - 32) * 5) / 9 : s.temp;
  const t = Math.max(0, Math.min(1, (c - 14) / 16));
  return { color: [0.08 + 0.1 * t, 0.35 + 0.45 * t, 0.85 - 0.1 * t], level: 0.16 + 0.12 * t };
}
