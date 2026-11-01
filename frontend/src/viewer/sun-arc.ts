// Where the sun's arc and its compass ring stand: around the house (default) or around the whole plot (#833).
// Pure functions, no three.js.

import type { Building, Vec2 } from "../model.ts";
import { groundFloor } from "../solar.ts";

/** The arc's middle (x, z), the ground it stands on (y) and its radius. */
export interface SunArcFrame {
  x: number;
  y: number;
  z: number;
  r: number;
}

/** A plot is never drawn wider than this (the sky dome and the camera's far plane stay beyond it). */
const MAX_PLOT_RADIUS = 150;

/**
 * Around the middle of the house, a little wider than the house, on its ground. With `sun_arc: "plot"` around
 * everything drawn: rooms, outdoor areas (lawns, terraces, fences) and free walls of every floor.
 */
export function sunArcFrame(b: Building | null | undefined): SunArcFrame | null {
  const gf = b ? groundFloor(b) : null;
  if (!b || !gf) return null;
  const house = b.floors.flatMap((f) => f.rooms.filter((r) => !r.outdoor).flatMap((r) => r.points));
  if (!house.length) return null;
  const plot = b.settings.sun_arc === "plot";
  const pts: Vec2[] = plot
    ? [...house, ...b.floors.flatMap((f) => [...f.rooms.flatMap((r) => r.points), ...(f.outdoor ?? []).flatMap((a) => a.points), ...(f.walls ?? []).flatMap((w) => [w.a, w.b])])]
    : house;
  let [x0, x1, z0, z1] = [Infinity, -Infinity, Infinity, -Infinity];
  for (const [x, z] of pts) {
    x0 = Math.min(x0, x);
    x1 = Math.max(x1, x);
    z0 = Math.min(z0, z);
    z1 = Math.max(z1, z);
  }
  const r = Math.max(7, Math.hypot(x1 - x0, z1 - z0) * 0.62);
  return { x: (x0 + x1) / 2, z: (z0 + z1) / 2, y: gf.elevation, r: plot ? Math.min(MAX_PLOT_RADIUS, r) : r };
}
