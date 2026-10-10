// Pool Pro: where the water flows through a pool's pipes. The pipes form a directed graph between the pool's
// ports (skimmer, bottom drain, inlets, the waste drain) and the pool devices (pump, sand filter, heat pump,
// dosing unit, ball valves). From the running pump the water is followed downstream:
// - a closed ball valve stops it (a valve device, or one sitting in the pipe);
// - the sand filter's six-way valve sends it on (filter, recirculate), to the waste drain (backwash, rinse,
//   waste) or nowhere (closed);
// - at a split, the branches through the heat pump carry the water while the heat pump is on, the others
//   (the bypass) while it is off; splits without a heat pump feed every branch (several inlets);
// - water is warm after a heat pump that heats.
// T-pieces ("joint:<id>") are nodes like any other: a split there works like a split at a device. Loose ends
// ("") join nothing.
// Upstream of the pump the suction lines from skimmer and drain carry water when they reach the pump through
// open valves. Pure functions, no Home Assistant.

import type { PoolPipe, PoolPort, ValvePosition } from "./model.ts";
import { pipePath, type NodeAt } from "./geometry/runs.ts";

export type { NodeAt };

export type PoolDeviceType = "pool_pump" | "pool_filter" | "pool_heat_pump" | "pool_dosing" | "pool_valve";
export const POOL_DEVICES: PoolDeviceType[] = ["pool_pump", "pool_filter", "pool_heat_pump", "pool_dosing", "pool_valve"];

export interface PoolFlowDevice {
  id: string;
  type: PoolDeviceType;
  /** Ball valve: open (default) or closed. */
  open?: boolean;
  /** Sand filter: the six-way valve's position (default filter). */
  valve?: ValvePosition | null;
}

export interface PoolFlowInput {
  pipes: readonly PoolPipe[];
  ports: readonly PoolPort[];
  devices: readonly PoolFlowDevice[];
  pumpOn: boolean;
  /** The heat pump is on: the water goes through it rather than the bypass. */
  heaterOn: boolean;
  /** The heat pump heats: the water after it is warm. */
  heating: boolean;
}

export interface PipeFlow {
  active: boolean;
  warm: boolean;
  /** Water on its way to the waste drain (backwash, rinse). */
  waste: boolean;
}

const SUCTION = new Set(["skimmer", "drain"]);
const TO_WASTE: ReadonlySet<ValvePosition> = new Set(["backwash", "rinse", "waste"]);

/** Node key of a port or device ("port:<id>", "dev:<id>"). */
export const portNode = (id: string) => `port:${id}`;
export const deviceNode = (id: string) => `dev:${id}`;

/** A pipe with a closed ball valve in it carries no water. */
export const pipeShut = (p: Pick<PoolPipe, "fittings">) => !!p.fittings?.some((f) => f.kind === "valve" && f.open === false);

export function poolFlow(input: PoolFlowInput): Map<string, PipeFlow> {
  const out = new Map<string, PipeFlow>(input.pipes.map((p) => [p.id, { active: false, warm: false, waste: false }]));
  if (!input.pumpOn) return out;
  // a loose end is a node of its own (two loose ends are not joined)
  const pipes = input.pipes.map((p) => (p.from && p.to ? p : { ...p, from: p.from || `loose:${p.id}:a`, to: p.to || `loose:${p.id}:b` }));
  const dev = new Map(input.devices.map((d) => [deviceNode(d.id), d]));
  const port = new Map(input.ports.map((p) => [portNode(p.id), p]));
  const closed = (node: string) => {
    const d = dev.get(node);
    return !!d && d.type === "pool_valve" && d.open === false;
  };
  const outgoing = new Map<string, PoolPipe[]>();
  const incoming = new Map<string, PoolPipe[]>();
  for (const p of pipes) {
    outgoing.set(p.from, [...(outgoing.get(p.from) ?? []), p]);
    incoming.set(p.to, [...(incoming.get(p.to) ?? []), p]);
  }
  const isWaste = (node: string) => port.get(node)?.kind === "waste";
  const isHeatPump = (node: string) => dev.get(node)?.type === "pool_heat_pump";

  // what lies downstream of a pipe (memoised): a heat pump, the waste drain
  const reach = new Map<string, { heat: boolean; waste: boolean }>();
  const downstream = (pipe: PoolPipe, seen = new Set<string>()): { heat: boolean; waste: boolean } => {
    const hit = reach.get(pipe.id);
    if (hit) return hit;
    if (seen.has(pipe.id)) return { heat: false, waste: false };
    seen.add(pipe.id);
    let heat = isHeatPump(pipe.to);
    let waste = isWaste(pipe.to);
    if (!heat || !waste)
      for (const next of outgoing.get(pipe.to) ?? []) {
        const r = downstream(next, seen);
        heat ||= r.heat;
        waste ||= r.waste;
      }
    const r = { heat, waste };
    reach.set(pipe.id, r);
    return r;
  };

  const pumps = input.devices.filter((d) => d.type === "pool_pump").map((d) => deviceNode(d.id));
  // without a pump in the plan the water starts at the suction ports
  const starts = pumps.length ? pumps : input.ports.filter((p) => SUCTION.has(p.kind)).map((p) => portNode(p.id));

  // downstream of the pump
  const visited = new Set<string>();
  const walk = (node: string, warm: boolean, waste: boolean) => {
    const key = `${node}|${warm}|${waste}`;
    if (visited.has(key)) return;
    visited.add(key);
    if (closed(node)) return;
    let next = outgoing.get(node) ?? [];
    const d = dev.get(node);
    if (d?.type === "pool_filter") {
      const v = d.valve ?? "filter";
      if (v === "closed") return;
      // backwash and rinse send the water to the waste drain, filter and recirculate on to the pool
      next = next.filter((p) => downstream(p).waste === TO_WASTE.has(v));
      if (TO_WASTE.has(v)) waste = true;
    } else if (next.length > 1) {
      // a split: through the heat pump while it is on, else the bypass
      const viaHeat = next.filter((p) => downstream(p).heat);
      const bypass = next.filter((p) => !downstream(p).heat);
      if (viaHeat.length && bypass.length) next = input.heaterOn ? viaHeat : bypass;
    }
    if (d?.type === "pool_heat_pump" && input.heating) warm = true;
    for (const p of next) {
      if (closed(p.to) || pipeShut(p)) continue;
      const f = out.get(p.id)!;
      f.active = true;
      f.warm ||= warm;
      f.waste ||= waste;
      walk(p.to, warm, waste);
    }
  };

  // upstream of the pump: suction lines that reach it through open valves
  const feeds = new Set<string>();
  const back = (node: string) => {
    for (const p of incoming.get(node) ?? []) {
      if (feeds.has(p.id) || closed(p.from) || pipeShut(p)) continue;
      feeds.add(p.id);
      back(p.from);
    }
  };
  if (pumps.length) {
    for (const pump of pumps) back(pump);
    // only lines that start at a suction port count (not a loop back from the returns)
    const fromSuction = (p: PoolPipe, seen = new Set<string>()): boolean => {
      if (seen.has(p.id)) return false;
      seen.add(p.id);
      if (SUCTION.has(port.get(p.from)?.kind ?? "")) return true;
      return (incoming.get(p.from) ?? []).some((q) => feeds.has(q.id) && fromSuction(q, seen));
    };
    for (const id of feeds) {
      const p = pipes.find((x) => x.id === id)!;
      if (fromSuction(p)) out.get(id)!.active = true;
    }
  }
  for (const s of starts) walk(s, false, false);
  return out;
}

/** A piece of pipe for the 3D view (floor coordinates, y up from the floor), in the shape of the energy cables. */
export interface PipePiece {
  floorId: string;
  a: [number, number, number];
  b: [number, number, number];
  dist: number;
  power: number;
  color: [number, number, number];
}

const COLD: [number, number, number] = [0.25, 0.7, 1];
const WARM: [number, number, number] = [1, 0.45, 0.18];
const WASTE: [number, number, number] = [0.75, 0.6, 0.35];
/** Speed of the dots in a pipe that carries water (as if it were watts on a cable). */
const PIPE_POWER = 900;

/** The colour of the water in a pipe: blue, warm after a heating heat pump, brown on its way to the waste drain. */
export function waterColor(f: PipeFlow | undefined): [number, number, number] {
  return f?.waste ? WASTE : f?.warm ? WARM : COLD;
}

/** The pipes as 3D pieces along their paths (see pipePath), coloured by the water. */
export function pipePieces(pipes: readonly PoolPipe[], flows: ReadonlyMap<string, PipeFlow>, nodeAt: NodeAt): PipePiece[] {
  const out: PipePiece[] = [];
  for (const p of pipes) {
    const pts = pipePath(p, nodeAt);
    if (pts.length < 2) continue;
    const f = flows.get(p.id);
    const color = waterColor(f);
    let dist = 0;
    for (let i = 1; i < pts.length; i++) {
      const [p0, p1] = [pts[i - 1], pts[i]];
      const len = Math.hypot(p1[0] - p0[0], p1[1] - p0[1], p1[2] - p0[2]);
      if (len < 0.01) continue;
      out.push({ floorId: p.floor_id, a: p0, b: p1, dist, power: f?.active ? PIPE_POWER : 0, color });
      dist += len;
    }
  }
  return out;
}

/** The point on a closed outline nearest to p (a skimmer or an inlet sits on the pool's rim). */
export function nearestOnOutline(points: readonly [number, number][], p: [number, number]): [number, number] {
  let best: [number, number] = points[0] ?? p;
  let bestD = Infinity;
  for (let i = 0; i < points.length; i++) {
    const a = points[i];
    const b = points[(i + 1) % points.length];
    const dx = b[0] - a[0];
    const dz = b[1] - a[1];
    const len2 = dx * dx + dz * dz;
    const t = len2 > 0 ? Math.max(0, Math.min(1, ((p[0] - a[0]) * dx + (p[1] - a[1]) * dz) / len2)) : 0;
    const q: [number, number] = [a[0] + dx * t, a[1] + dz * t];
    const d = Math.hypot(q[0] - p[0], q[1] - p[1]);
    if (d < bestD) [best, bestD] = [q, d];
  }
  return best;
}
