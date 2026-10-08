// Time travel: numeric sensors from their five-minute means, smoothly between the slots and rounded to a
// step that fits the unit. The rounding keeps the replayed state the same object while the shown value
// does not change, so the 3D view has nothing to redraw.

import type { Series } from "./timeline.ts";

/** How long a value is held across slots without one (statistics end a few minutes before now). */
export const HOLD_MS = 15 * 60000;

/** The sensor's value at t, linear between slot centres; NaN where there is no data. */
export function seriesValue(s: Series, t: number, holdMs = HOLD_MS): number {
  const n = s.mean.length;
  if (!n || t < s.start) return NaN;
  // the slot centre at or before t
  const pos = (t - s.start) / s.step - 0.5;
  const i = Math.floor(pos);
  if (i < 0) return s.mean[0];
  if (i >= n - 1) {
    const last = lastFinite(s, n - 1);
    return last >= 0 && t - (s.start + (last + 0.5) * s.step) <= holdMs ? s.mean[last] : NaN;
  }
  const a = s.mean[i];
  const b = s.mean[i + 1];
  const f = pos - i;
  if (!Number.isNaN(a) && !Number.isNaN(b)) return a + (b - a) * f;
  // one side without a value: the other one holds for a while
  const k = lastFinite(s, i);
  if (k >= 0 && t - (s.start + (k + 0.5) * s.step) <= holdMs) return s.mean[k];
  return NaN;
}

function lastFinite(s: Series, from: number): number {
  for (let i = from; i >= 0; i--) if (!Number.isNaN(s.mean[i])) return i;
  return -1;
}

/**
 * The step a replayed value is rounded to: the precision set in Home Assistant, else one that suits the
 * unit (0.1 °C, 1 %, 10 W …).
 */
export function quantStep(unit: unknown, precision: number | null | undefined, sample = 0): number {
  if (typeof precision === "number" && precision >= 0 && precision <= 6) return 10 ** -precision;
  switch (typeof unit === "string" ? unit : "") {
    case "°C":
    case "°F":
    case "K":
    case "A":
    case "bar":
    case "km/h":
    case "m/s":
      return 0.1;
    case "%":
    case "V":
    case "hPa":
    case "mbar":
    case "dB":
    case "dBm":
      return 1;
    case "W":
    case "VA":
    case "var":
    case "ppm":
    case "lx":
    case "µg/m³":
      return Math.abs(sample) >= 1000 ? 10 : 1;
    case "kW":
    case "kWh":
    case "kVA":
      return 0.01;
    default:
      return Math.abs(sample) >= 100 ? 1 : Math.abs(sample) >= 10 ? 0.1 : 0.01;
  }
}

/** The value rounded to the step, written as Home Assistant writes states ("21.4", "-300", "0.25"). */
export function quantise(value: number, step: number): string {
  if (!Number.isFinite(value)) return "unknown";
  const decimals = step >= 1 ? 0 : Math.min(6, Math.max(0, Math.round(-Math.log10(step))));
  const v = Math.round(value / step) * step;
  const s = v.toFixed(decimals);
  // no "-0"
  return /^-0(\.0*)?$/.test(s) ? s.slice(1) : s;
}
