// Time travel: the rooms a robot vacuum cleaned in its run, in order – for a trail line through the rooms.

import { indexAt, type Track } from "./timeline.ts";

/** States of a run (it is not over while paused or on its way back). */
const RUN = new Set(["cleaning", "paused", "returning"]);
const NONE = new Set(["", "unknown", "unavailable", "none", "null"]);

/**
 * The rooms of the run going on at t, in the order they were cleaned (each stay once): from the robot's room
 * sensor, else its current_room attribute. Empty while the robot does not run.
 */
export function robotRun(vacuum: Track | undefined, rooms: Track | undefined, t: number): string[] {
  if (!vacuum) return [];
  const state = (k: number) => vacuum.values[vacuum.vals[k]].s;
  const at = indexAt(vacuum.times, t);
  if (at < 0 || !RUN.has(state(at))) return [];
  let k = at;
  while (k > 0 && RUN.has(state(k - 1))) k--;
  const start = vacuum.times[k];
  const out: string[] = [];
  const add = (name: unknown) => {
    const s = typeof name === "string" ? name.trim() : "";
    if (!NONE.has(s.toLowerCase()) && out[out.length - 1] !== s) out.push(s);
  };
  if (rooms) {
    for (let i = Math.max(0, indexAt(rooms.times, start)); i < rooms.times.length && rooms.times[i] <= t; i++) add(rooms.values[rooms.vals[i]].s);
  } else for (let i = k; i <= at; i++) add(vacuum.values[vacuum.vals[i]].a?.current_room);
  return out;
}
