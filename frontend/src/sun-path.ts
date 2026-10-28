// The sun's way across the sky on one day, from the home's latitude and longitude (NOAA's formulas, good to a
// fraction of a degree): the 3D view draws it as an arc over the house, with sunrise and sunset at its ends.

export interface SunPoint {
  /** Degrees clockwise from north, like sun.sun. */
  azimuth: number;
  /** Degrees above the horizon. */
  elevation: number;
  /** Milliseconds since the epoch. */
  t: number;
}

export interface SunPath {
  /** The points above the horizon, every 10 minutes, with sunrise and sunset as the first and last. */
  points: SunPoint[];
  /** Sunrise and sunset (null in the polar night or the midnight sun). */
  rise: SunPoint | null;
  set: SunPoint | null;
}

const RAD = Math.PI / 180;
/** The sun's centre this far below the horizon is sunrise (refraction and the disc's radius). */
const HORIZON = -0.833;

/** Where the sun stands at a moment, seen from a place. */
export function sunPosition(t: number, lat: number, lon: number): { azimuth: number; elevation: number } {
  const T = (t / 86400000 + 2440587.5 - 2451545) / 36525;
  const L0 = (((280.46646 + T * (36000.76983 + T * 0.0003032)) % 360) + 360) % 360;
  const M = 357.52911 + T * (35999.05029 - 0.0001537 * T);
  const e = 0.016708634 - T * (0.000042037 + 0.0000001267 * T);
  const C = Math.sin(M * RAD) * (1.914602 - T * (0.004817 + 0.000014 * T)) + Math.sin(2 * M * RAD) * (0.019993 - 0.000101 * T) + Math.sin(3 * M * RAD) * 0.000289;
  const omega = 125.04 - 1934.136 * T;
  const lambda = L0 + C - 0.00569 - 0.00478 * Math.sin(omega * RAD);
  const eps0 = 23 + (26 + (21.448 - T * (46.815 + T * (0.00059 - T * 0.001813))) / 60) / 60;
  const eps = eps0 + 0.00256 * Math.cos(omega * RAD);
  const decl = Math.asin(Math.sin(eps * RAD) * Math.sin(lambda * RAD));
  const y = Math.tan((eps / 2) * RAD) ** 2;
  const eot =
    4 *
    (y * Math.sin(2 * L0 * RAD) -
      2 * e * Math.sin(M * RAD) +
      4 * e * y * Math.sin(M * RAD) * Math.cos(2 * L0 * RAD) -
      0.5 * y * y * Math.sin(4 * L0 * RAD) -
      1.25 * e * e * Math.sin(2 * M * RAD)) /
    RAD;
  const d = new Date(t);
  const utcMin = d.getUTCHours() * 60 + d.getUTCMinutes() + d.getUTCSeconds() / 60;
  const tst = (((utcMin + eot + 4 * lon) % 1440) + 1440) % 1440;
  const ha = (tst / 4 - 180) * RAD;
  const phi = lat * RAD;
  const cosZ = Math.sin(phi) * Math.sin(decl) + Math.cos(phi) * Math.cos(decl) * Math.cos(ha);
  const elevation = 90 - Math.acos(Math.min(1, Math.max(-1, cosZ))) / RAD;
  const azimuth = (Math.atan2(Math.sin(ha), Math.cos(ha) * Math.sin(phi) - Math.tan(decl) * Math.cos(phi)) / RAD + 180 + 360) % 360;
  return { azimuth, elevation };
}

/** The sun's way on the day of `t` (local midnight to midnight of this browser). */
export function sunPath(t: number, lat: number, lon: number): SunPath {
  const day = new Date(t);
  day.setHours(0, 0, 0, 0);
  const start = day.getTime();
  const step = 10 * 60_000;
  const at = (ms: number): SunPoint => ({ ...sunPosition(ms, lat, lon), t: ms });
  const points: SunPoint[] = [];
  let rise: SunPoint | null = null;
  let set: SunPoint | null = null;
  let prev = at(start);
  for (let ms = start + step; ms <= start + 24 * 3600_000; ms += step) {
    const p = at(ms);
    const up = p.elevation > HORIZON;
    const wasUp = prev.elevation > HORIZON;
    if (up !== wasUp) {
      // the crossing between two steps, found by halving the step
      let lo = prev.t;
      let hi = p.t;
      for (let i = 0; i < 12; i++) {
        const mid = (lo + hi) / 2;
        if (at(mid).elevation > HORIZON === wasUp) lo = mid;
        else hi = mid;
      }
      const x = at(Math.round((lo + hi) / 2));
      if (up) {
        rise ??= x;
        points.push(x);
      } else {
        set = x;
        points.push(x);
      }
    }
    if (up) points.push(p);
    prev = p;
  }
  if (!rise && points.length && at(start).elevation > HORIZON) points.unshift(at(start));
  return { points, rise, set };
}
