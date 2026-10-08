/**
 * Lengths in feet and inches for users of the imperial system (discussion #117). The plan always stores
 * metres; only what the editor shows and reads is converted. "auto" follows Home Assistant's unit system.
 */
import type { HomeAssistant } from "./types.ts";

export type LengthUnit = "metric" | "imperial";

const FT = 0.3048;
const IN = 0.0254;

/** The unit to show: the plan's setting, or Home Assistant's unit system (miles = imperial). */
export function lengthUnit(hass: HomeAssistant | undefined, setting?: LengthUnit | null): LengthUnit {
  if (setting === "metric" || setting === "imperial") return setting;
  return hass?.config?.unit_system?.length === "mi" ? "imperial" : "metric";
}

function trim(n: number, digits: number): string {
  return String(Number(n.toFixed(digits)));
}

/**
 * A length for a field or a label: metres as a plain number (the caller adds "m" where it shows one), or
 * feet and inches – 8' 2.4", 11" – with inches to a tenth (digits ≥ 2) or whole inches.
 */
export function formatImperial(m: number, digits = 2): string {
  const sign = m < 0 ? "-" : "";
  const inches = Math.round((Math.abs(m) / IN) * (digits >= 2 ? 10 : 1)) / (digits >= 2 ? 10 : 1);
  const feet = Math.floor(inches / 12 + 1e-9);
  const rest = inches - feet * 12;
  const inch = trim(rest, digits >= 2 ? 1 : 0);
  if (!feet) return `${sign}${inch}"`;
  return rest < 0.05 ? `${sign}${feet}'` : `${sign}${feet}' ${inch}"`;
}

/**
 * Read a typed length in metres: 8'2", 8' 2.5", 8ft 2in, 98in, 98", 8.2ft, 2.5m, 250cm. A bare number counts in
 * the unit shown (feet when imperial; inches when it follows feet: 8' 2). Comma decimals work. Null = not a length.
 */
export function parseLength(text: string, unit: LengthUnit): number | null {
  const s = text.trim().toLowerCase().replace(/,/g, ".").replace(/[′’]/g, "'").replace(/[″”“]/g, '"').replace(/''/g, '"');
  if (!s) return null;
  const re = /(-?\d+(?:\.\d+)?|-?\.\d+)\s*(feet|foot|ft|'|inches|inch|in|"|mm|cm|m)?/g;
  let total = 0;
  let found = false;
  let afterFeet = false;
  let rest = s;
  for (const m of s.matchAll(re)) {
    const v = Number(m[1]);
    if (!Number.isFinite(v)) return null;
    const u = m[2];
    found = true;
    rest = rest.replace(m[0], "");
    if (u === "feet" || u === "foot" || u === "ft" || u === "'") {
      total += v * FT;
      afterFeet = true;
    } else if (u === "inches" || u === "inch" || u === "in" || u === '"') total += v * IN;
    else if (u === "mm") total += v / 1000;
    else if (u === "cm") total += v / 100;
    else if (u === "m") total += v;
    else total += unit === "imperial" ? v * (afterFeet ? IN : FT) : v;
  }
  // anything left but spaces and separators is not a length
  if (!found || /[^\s+]/.test(rest)) return null;
  return total;
}

/** A length with its unit for labels: "2,45 m" or 8' 0.5". */
export function lengthText(m: number, unit: LengthUnit, metric: (v: number) => string): string {
  return unit === "imperial" ? formatImperial(m) : `${metric(m)} m`;
}

/** An area with its unit: "12,4 m²" or "133.5 ft²". */
export function areaText(m2: number, unit: LengthUnit, metric: (v: number) => string): string {
  return unit === "imperial" ? `${trim(m2 / (FT * FT), 1)} ft²` : `${metric(m2)} m²`;
}

/** A field label in the unit shown: "Height (m)" becomes "Height (ft)". */
export function unitLabel(label: string, unit: LengthUnit): string {
  return unit === "imperial" ? label.replace(/\((?:m|cm)([,)])/g, "(ft$1").replace(/\s(?:m|cm)$/, " ft") : label;
}
