// Layout of the camera wall (Kamera-Cockpit).

/**
 * The camera wall's grid (#217): the column count that gives the largest 16:9 tiles inside the wall, so
 * every camera fits without overlapping; below a usable size the tiles keep that size and the wall scrolls.
 */
export function wallLayout(n: number, width: number, height: number, gap = 12, min = 180): { cols: number; tile: number } {
  const w = Math.max(min, width);
  const h = Math.max(min * 0.5625, height);
  let best = { cols: 1, tile: Math.min(w, (h * 16) / 9) };
  for (let cols = 1; cols <= Math.max(1, n); cols++) {
    const rows = Math.ceil(n / cols);
    const byWidth = (w - gap * (cols - 1)) / cols;
    const byHeight = (((h - gap * (rows - 1)) / rows) * 16) / 9;
    const tile = Math.min(byWidth, byHeight);
    if (tile > best.tile || cols === 1) best = { cols, tile };
  }
  if (best.tile < min) {
    // too many to fit: as many columns of the smallest tile as the width takes, the wall scrolls
    const cols = Math.max(1, Math.floor((w + gap) / (min + gap)));
    return { cols: Math.min(cols, Math.max(1, n)), tile: min };
  }
  return { cols: best.cols, tile: Math.floor(best.tile) };
}
