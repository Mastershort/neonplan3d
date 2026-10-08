// Time travel: where the sun stood at a moment (NOAA's approximation, good to a fraction of a degree),
// for the replayed sun.sun and the night bands on the time bar.

const RAD = Math.PI / 180;

/** Elevation (degrees above the horizon, with refraction) and azimuth (degrees from north, clockwise). */
export function sunAt(lat: number, lon: number, t: number): { elevation: number; azimuth: number } {
  const jc = (t / 86400000 + 2440587.5 - 2451545) / 36525;
  const l0 = (280.46646 + jc * (36000.76983 + jc * 0.0003032)) % 360;
  const m = 357.52911 + jc * (35999.05029 - 0.0001537 * jc);
  const e = 0.016708634 - jc * (0.000042037 + 0.0000001267 * jc);
  const c = Math.sin(m * RAD) * (1.914602 - jc * (0.004817 + 0.000014 * jc)) + Math.sin(2 * m * RAD) * (0.019993 - 0.000101 * jc) + Math.sin(3 * m * RAD) * 0.000289;
  const omega = 125.04 - 1934.136 * jc;
  const lambda = l0 + c - 0.00569 - 0.00478 * Math.sin(omega * RAD);
  const eps0 = 23 + (26 + (21.448 - jc * (46.815 + jc * (0.00059 - jc * 0.001813))) / 60) / 60;
  const eps = eps0 + 0.00256 * Math.cos(omega * RAD);
  const decl = Math.asin(Math.sin(eps * RAD) * Math.sin(lambda * RAD));
  const y = Math.tan((eps / 2) * RAD) ** 2;
  // equation of time in minutes
  const eqt =
    (4 / RAD) *
    (y * Math.sin(2 * l0 * RAD) - 2 * e * Math.sin(m * RAD) + 4 * e * y * Math.sin(m * RAD) * Math.cos(2 * l0 * RAD) - 0.5 * y * y * Math.sin(4 * l0 * RAD) - 1.25 * e * e * Math.sin(2 * m * RAD));
  const minutes = (((t / 60000) % 1440) + 1440) % 1440;
  const solar = (((minutes + eqt + 4 * lon) % 1440) + 1440) % 1440;
  const ha = (solar / 4 < 0 ? solar / 4 + 180 : solar / 4 - 180) * RAD;
  const phi = lat * RAD;
  const cosZ = Math.min(1, Math.max(-1, Math.sin(phi) * Math.sin(decl) + Math.cos(phi) * Math.cos(decl) * Math.cos(ha)));
  const zenith = Math.acos(cosZ);
  let elevation = 90 - zenith / RAD;
  elevation += refraction(elevation);
  const den = Math.cos(phi) * Math.sin(zenith);
  let azimuth = 180;
  if (Math.abs(den) > 1e-9) {
    const a = Math.acos(Math.min(1, Math.max(-1, (Math.sin(phi) * Math.cos(zenith) - Math.sin(decl)) / den))) / RAD;
    azimuth = ha > 0 ? (a + 180) % 360 : (540 - a) % 360;
  }
  return { elevation, azimuth };
}

/** Atmospheric refraction near the horizon (degrees), as NOAA adds it. */
function refraction(h: number): number {
  if (h > 85) return 0;
  const te = Math.tan(h * RAD);
  const sec =
    h > 5 ? 58.1 / te - 0.07 / te ** 3 + 0.000086 / te ** 5 : h > -0.575 ? 1735 + h * (-518.2 + h * (103.4 + h * (-12.79 + h * 0.711))) : -20.772 / te;
  return sec / 3600;
}

/** Whether the sun is below the horizon (upper limb, as sun.sun counts it). */
export function isNight(lat: number, lon: number, t: number): boolean {
  return sunAt(lat, lon, t).elevation < -0.833;
}

/** The nights between from and to as [start, end] pairs, found every few minutes. */
export function nightBands(lat: number, lon: number, from: number, to: number, stepMs = 5 * 60000): [number, number][] {
  const out: [number, number][] = [];
  let open: number | null = null;
  for (let t = from; t <= to; t += stepMs) {
    const night = isNight(lat, lon, t);
    if (night && open === null) open = t;
    if (!night && open !== null) {
      out.push([open, t]);
      open = null;
    }
  }
  if (open !== null) out.push([open, to]);
  return out;
}
