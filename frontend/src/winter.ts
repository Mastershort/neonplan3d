// Fun pack "Winter & Christmas" (feature fun_winter): fairy lights along the roof's eaves, snow on the roof and the
// lawn while it snows (it melts in a thaw), and a neon firework over the house at New Year's midnight. When and how
// much is worked out here; the 3D view draws it (the bulbs and the snow on the roof itself, patches on the lawns).
import { hasFeature } from "./features.ts";
import { areaGround, OUTDOOR_TOP, type Building, type Vec2 } from "./model.ts";
import { adventCandles } from "./packs.ts";
import type { HomeAssistant } from "./types.ts";

export interface WinterSettings {
  /** The fairy lights along the eaves; off with false. */
  roof_lights?: boolean;
  /** The entity they shine with (an outdoor light, a plug); without one: at night from the first Sunday of Advent to 6 January. */
  roof_entity?: string | null;
  /** Colourful bulbs instead of warm white. */
  roof_color?: boolean;
  /** Up the gable edges and along the ridge too (default), not only along the eaves. */
  roof_outline?: boolean;
  /** Snow on the roof and the lawn while it snows; off with false. */
  snow?: boolean;
  /** The firework at New Year's midnight; off with false. */
  firework?: boolean;
}

export const winterOf = (b: Building | null | undefined): WinterSettings => ((b?.settings as { winter?: WinterSettings | null } | undefined)?.winter ?? {}) as WinterSettings;

/** The fairy lights' season: from the first Sunday of Advent until 6 January. */
export const lightSeason = (now: Date) => adventCandles(now) > 0;

/** Whether the fairy lights along the eaves shine now. */
export function roofLightsOn(hass: HomeAssistant, b: Building, now = new Date()): boolean {
  const w = winterOf(b);
  if (!hasFeature("fun_winter") || w.roof_lights === false) return false;
  if (w.roof_entity) return hass.states[w.roof_entity]?.state === "on";
  const sun = hass.states["sun.sun"];
  const dark = sun ? sun.state === "below_horizon" : now.getHours() >= 16 || now.getHours() < 7;
  return lightSeason(now) && dark;
}

// ------------------------------------------------------------------ snow

const SNOWING = new Set(["snowy", "snowy-rainy"]);
const LAST_SNOW = "neonplan3d.winter_last_snow";

/** The outside temperature in °C from a weather entity, null without one. */
function outsideC(hass: HomeAssistant, id: string | null): number | null {
  const st = id ? hass.states[id] : undefined;
  const v = st?.attributes.temperature;
  if (typeof v !== "number") return null;
  return String(st!.attributes.temperature_unit ?? "°C").includes("F") ? ((v - 32) * 5) / 9 : v;
}

/**
 * How much snow lies (0 … 1): all of it while it snows; afterwards it stays while it freezes (up to three days) and
 * melts away within six hours once it is warmer than 1 °C. When it last snowed is remembered on this device.
 */
export function snowLevel(hass: HomeAssistant, b: Building, weatherId: string | null, now = Date.now(), store: Pick<Storage, "getItem" | "setItem"> | null = safeStorage()): number {
  if (!hasFeature("fun_winter") || winterOf(b).snow === false || !weatherId) return 0;
  const state = hass.states[weatherId]?.state ?? "";
  if (SNOWING.has(state)) {
    try {
      store?.setItem(LAST_SNOW, String(now));
    } catch {
      // not remembered: the snow goes when it stops
    }
    return 1;
  }
  const last = Number(store?.getItem(LAST_SNOW) ?? 0);
  if (!last || now - last > 3 * 24 * 3600_000) return 0;
  const t = outsideC(hass, weatherId);
  if (t === null || t <= 1) return 1;
  // a thaw: it melts over six hours from the last snowfall on
  return Math.max(0, 1 - (now - last) / (6 * 3600_000));
}

function safeStorage(): Storage | null {
  try {
    return typeof localStorage === "undefined" ? null : localStorage;
  } catch {
    return null;
  }
}

/** The lawns under snow: a white patch on each, a little above its surface. */
export function lawnSnow(b: Building, level: number): { floorId: string; points: Vec2[]; y: number; color: [number, number, number]; opacity: number; follow?: { areaId: string; lift: number } }[] {
  if (level <= 0) return [];
  const out: { floorId: string; points: Vec2[]; y: number; color: [number, number, number]; opacity: number; follow?: { areaId: string; lift: number } }[] = [];
  for (const floor of b.floors)
    for (const a of floor.outdoor ?? [])
      if (a.type === "lawn" && a.points.length >= 3)
        // on a sloping lawn the snow follows the ground (#1036)
        out.push({ floorId: floor.id, points: a.points, y: areaGround(floor, a) + OUTDOOR_TOP[a.type] + 0.025, color: [0.93, 0.96, 1], opacity: 0.78 * level, ...(a.slope ? { follow: { areaId: a.id, lift: 0.025 } } : {}) });
  return out;
}

// ------------------------------------------------------------------ the firework

/** The firework flies from a minute before midnight on New Year's Eve until ten past (local time). */
export function fireworkNow(b: Building, now = new Date()): boolean {
  if (!hasFeature("fun_winter") || winterOf(b).firework === false) return false;
  // to try it before New Year's Eve: "?fp3d_firework" in the address
  if (typeof location !== "undefined" && new URLSearchParams(location.search).has("fp3d_firework")) return true;
  const m = now.getMonth();
  const d = now.getDate();
  const min = now.getHours() * 60 + now.getMinutes();
  return (m === 11 && d === 31 && min >= 23 * 60 + 59) || (m === 0 && d === 1 && min < 10);
}
