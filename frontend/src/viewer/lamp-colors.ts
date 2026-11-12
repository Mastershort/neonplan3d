// Lamp shades are built with a sentinel colour, so the colour of the light can be written into the
// merged lamp mesh later without rebuilding it (colour effects change several times per second).

/** Pure green: no body colour has r = b = 0, so sentinel vertices are told apart by that. */
export const SHADE_SENTINEL = 0x00ff00;

/** Shade factor per vertex: the green channel of sentinel-coloured vertices (r = b = 0), else 0. */
export function shadeFactors(colors: ArrayLike<number>): Float32Array {
  const n = colors.length / 3;
  const out = new Float32Array(n);
  for (let v = 0; v < n; v++) {
    const g = colors[v * 3 + 1];
    if (colors[v * 3] === 0 && colors[v * 3 + 2] === 0 && g > 0) out[v] = g;
  }
  return out;
}

/** Write a shade colour into a lamp's triangle range, scaled by each vertex's factor; bodies stay. */
export function recolorLamps(colors: Float32Array, factors: Float32Array, range: { start: number; end: number }, color: [number, number, number]): void {
  for (let v = range.start * 3; v < range.end * 3; v++) {
    const f = factors[v];
    if (f <= 0) continue;
    colors[v * 3] = Math.min(1, color[0] * f);
    colors[v * 3 + 1] = Math.min(1, color[1] * f);
    colors[v * 3 + 2] = Math.min(1, color[2] * f);
  }
}

/** Marks a lamp's shade vertices as lit (1) or not (0) in its triangle range; bodies stay 0. */
export function markLit(lit: Float32Array, factors: Float32Array, range: { start: number; end: number }, on: boolean): void {
  for (let v = range.start * 3; v < range.end * 3; v++) if (factors[v] > 0) lit[v] = on ? 1 : 0;
}
