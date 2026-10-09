/**
 * Weather outside the house, read from a `weather.*` entity: how much it rains or snows, fog, cloud
 * cover, wind and lightning, each 0…1, so the 3D view can draw particles, dim the sky and the sun.
 */
import { DEFAULT_WEATHER_EFFECTS, type WeatherEffect } from "./model.ts";
import type { HomeAssistant } from "./types.ts";

export interface WeatherState {
  entity: string;
  condition: string;
  rain: number;
  snow: number;
  fog: number;
  cloud: number;
  wind: number;
  lightning: boolean;
}

/** Home Assistant's weather conditions and what they look like (cloud cover is replaced by the attribute when present). */
const CONDITIONS: Record<string, Partial<Omit<WeatherState, "entity" | "condition">>> = {
  "clear-night": {},
  sunny: {},
  partlycloudy: { cloud: 0.45 },
  cloudy: { cloud: 0.9 },
  fog: { fog: 1, cloud: 0.6 },
  hail: { rain: 0.8, cloud: 1 },
  lightning: { lightning: true, cloud: 0.9 },
  "lightning-rainy": { rain: 0.8, lightning: true, cloud: 1 },
  pouring: { rain: 1, cloud: 1 },
  rainy: { rain: 0.55, cloud: 0.85 },
  snowy: { snow: 0.8, cloud: 0.9 },
  "snowy-rainy": { rain: 0.35, snow: 0.5, cloud: 1 },
  windy: { wind: 0.8, cloud: 0.2 },
  "windy-variant": { wind: 0.8, cloud: 0.7 },
  exceptional: { cloud: 0.5 },
};

/** The weather entity to show: the preferred one when it exists, otherwise the first `weather.*`. */
export function weatherEntity(hass: HomeAssistant, preferred?: string | null): string | null {
  if (preferred && hass.states[preferred]) return preferred;
  return (
    Object.keys(hass.states)
      .filter((id) => id.startsWith("weather."))
      .sort()[0] ?? null
  );
}

/**
 * How hard it rains by a weather station of one's own (0 dry … 1 pouring), null when the entity tells nothing:
 * a rain sensor (binary_sensor, on = rain) or a rain rate (mm/h, in/h; above 0.1 mm/h counts as rain).
 */
export function stationRain(hass: HomeAssistant, entity: string | null | undefined): number | null {
  const st = entity ? hass.states[entity] : undefined;
  if (!st || st.state === "unavailable" || st.state === "unknown") return null;
  if (st.entity_id.startsWith("binary_sensor.")) return st.state === "on" ? 0.6 : 0;
  const v = Number(st.state);
  if (!Number.isFinite(v)) return null;
  const unit = String(st.attributes.unit_of_measurement ?? "");
  const mmh = unit.startsWith("in") ? v * 25.4 : v;
  if (mmh <= 0.1) return 0;
  return Math.min(1, 0.3 + mmh / 10);
}

/** Entities that can tell rain: rain sensors (moisture, rain) and rain rates (…/h, precipitation intensity). */
export function isRainSource(hass: HomeAssistant, id: string): boolean {
  const st = hass.states[id];
  if (!st) return false;
  const dc = String(st.attributes.device_class ?? "");
  if (id.startsWith("binary_sensor.")) return dc === "moisture" || /(rain|regen|pluie|lluvia|pioggia)/.test(id);
  if (!id.startsWith("sensor.")) return false;
  return dc === "precipitation_intensity" || /\/h$/.test(String(st.attributes.unit_of_measurement ?? ""));
}

export function weatherState(hass: HomeAssistant, entity: string | null, rainEntity?: string | null): WeatherState | null {
  const st = entity ? hass.states[entity] : undefined;
  if (!st || st.state === "unavailable" || st.state === "unknown") return null;
  const base = CONDITIONS[st.state];
  if (!base) return null;
  const attrs = st.attributes as Record<string, unknown>;
  let cloud = base.cloud ?? 0;
  if (typeof attrs.cloud_coverage === "number") cloud = Math.min(1, Math.max(0, attrs.cloud_coverage / 100));
  let wind = base.wind ?? 0;
  if (typeof attrs.wind_speed === "number") {
    const kmh = attrs.wind_speed_unit === "m/s" ? attrs.wind_speed * 3.6 : attrs.wind_speed_unit === "mph" ? attrs.wind_speed * 1.609 : attrs.wind_speed;
    wind = Math.max(wind, Math.min(1, kmh / 60));
  }
  // a weather station of one's own says whether it really rains at the house (D407)
  const station = stationRain(hass, rainEntity);
  if (station !== null && station > 0) cloud = Math.max(cloud, 0.85);
  return {
    entity: st.entity_id,
    condition: st.state,
    rain: station ?? base.rain ?? 0,
    snow: base.snow ?? 0,
    fog: base.fog ?? 0,
    cloud,
    wind,
    lightning: !!base.lightning,
  };
}

/** Only the chosen effects stay (the others are zeroed); `sky` says whether the sun or moon disc shows. */
export function limitEffects(w: WeatherState, effects: readonly WeatherEffect[] | null | undefined): WeatherState & { sky: boolean } {
  const on = new Set(effects ?? DEFAULT_WEATHER_EFFECTS);
  return {
    ...w,
    rain: on.has("rain") ? w.rain : 0,
    snow: on.has("snow") ? w.snow : 0,
    fog: on.has("fog") ? w.fog : 0,
    cloud: on.has("clouds") ? w.cloud : 0,
    lightning: on.has("lightning") && w.lightning,
    sky: on.has("sky"),
  };
}

/** Whether anything moves or dims: the view can skip the weather layer otherwise. */
export function weatherActive(w: WeatherState | null): boolean {
  return !!w && (w.rain > 0 || w.snow > 0 || w.fog > 0 || w.cloud > 0 || w.lightning);
}
