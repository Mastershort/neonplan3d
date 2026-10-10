// Pool Pro: the connections of the pool's parts. A pipe can end at a part as a whole ("dev:<id>", as before) or
// at one of its connections ("dev:<id>:<port>"): the pump's suction and pressure side, the sand filter's
// multiport valve (from the pump, the return to the pool, the waste), the heat pump's in and out, the three
// ends of a T- or Y-piece, both sides of a hole in a wall or the floor. Pure functions.

import type { PoolJoint } from "./model.ts";

export type PortName = "suction" | "pressure" | "pump" | "return" | "waste" | "in" | "out" | "out1" | "out2" | "inside" | "outside";

/** The multiport valve on a sand filter (the filter's variant): six-way on top (default), six-way at the side, four-way. */
export type FilterValve = "top6" | "side6" | "four";
export const FILTER_VALVES: FilterValve[] = ["top6", "side6", "four"];

/** The connections of a pool device (none: pipes join the device as a whole). */
export function devicePorts(type: string): PortName[] {
  if (type === "pool_pump") return ["suction", "pressure"];
  if (type === "pool_filter") return ["pump", "return", "waste"];
  if (type === "pool_heat_pump") return ["in", "out"];
  return [];
}

export function jointPorts(kind: PoolJoint["kind"]): PortName[] {
  return kind === "wall" || kind === "floor" ? ["inside", "outside"] : ["in", "out1", "out2"];
}

/** A node split into its kind ("port", "dev", "joint"), id and connection. */
export function splitNode(node: string): { kind: string; id: string; port: PortName | null } {
  const [kind = "", id = "", port] = node.split(":");
  return { kind, id, port: (port as PortName) || null };
}

/** The part a node belongs to, without the connection ("dev:<id>"). */
export function nodePart(node: string): string {
  const { kind, id } = splitNode(node);
  return kind && id ? `${kind}:${id}` : node;
}

/**
 * Where a device's connection sits, in the device's own coordinates (x right, z to its front, y up from its base):
 * the pump sucks in at its pre-filter pot and pushes out on top, the filter's valve has its three connections
 * round its head (on top, or at the side), the heat pump takes the water in and gives it back at its right side.
 */
export function portOffset(f: { type: string; w: number; d: number; h: number; variant?: string | null }, port: PortName): [number, number, number] | null {
  const { w, d, h } = f;
  if (f.type === "pool_pump") {
    if (port === "suction") return [w * 0.5, h * 0.55, 0];
    if (port === "pressure") return [w * 0.05, h * 0.9, 0];
    return null;
  }
  if (f.type === "pool_filter") {
    const r = Math.min(w, d) / 2;
    if (f.variant === "side6") {
      // the valve sits at the tank's right side at half height, its connections one above the other
      const x = r + 0.08;
      if (port === "pump") return [x, h * 0.6, 0];
      if (port === "return") return [x + 0.06, h * 0.48, 0];
      if (port === "waste") return [x, h * 0.36, 0];
      return null;
    }
    const y = h * 0.89;
    const k = r * 0.45 + 0.04;
    if (port === "pump") return [-k, y, 0];
    if (port === "return") return [k, y, 0];
    if (port === "waste") return [0, y, -k];
    return null;
  }
  if (f.type === "pool_heat_pump") {
    if (port === "in") return [w / 2 + 0.04, h * 0.25, -d * 0.2];
    if (port === "out") return [w / 2 + 0.04, h * 0.45, -d * 0.2];
    return null;
  }
  return null;
}

/** A connection of a device in plan coordinates: its offset turned with the device (y: above the device's base). */
export function portAt(f: { type: string; x: number; z: number; w: number; d: number; h: number; rotation: number; variant?: string | null }, port: PortName): { x: number; y: number; z: number } | null {
  const o = portOffset(f, port);
  if (!o) return null;
  const a = (f.rotation * Math.PI) / 180;
  const [c, s] = [Math.cos(a), Math.sin(a)];
  return { x: f.x + o[0] * c - o[2] * s, y: o[1], z: f.z + o[0] * s + o[2] * c };
}

/** Where a joint's connection sits: a hole's outside lies behind the wall (or below the floor). */
export function jointPortAt(j: PoolJoint, port: PortName | null): { x: number; y: number; z: number } {
  if (port === "outside") {
    if (j.kind === "floor") return { x: j.x, y: j.y - 0.3, z: j.z };
    if (j.kind === "wall") {
      const depth = (j.depth ?? 0.3) + 0.05;
      return { x: j.x - (j.nx ?? 0) * depth, y: j.y, z: j.z - (j.nz ?? 0) * depth };
    }
  }
  return { x: j.x, y: j.y, z: j.z };
}
