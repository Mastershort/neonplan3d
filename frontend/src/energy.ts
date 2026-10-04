// Energy flow: power values from Home Assistant, the consumers placed in the plan, and the cable
// routes from the meter along the wall bases to every consumer. Pure functions, no three.js.
//
// Routing: every room gets a "cable ring" just inside its walls; rings of neighbouring rooms are
// linked through the middle of their shared walls. The meter, the consumers and the risers to other
// floors are attached to the nearest ring. Dijkstra from the meter gives a tree; the power of all
// consumers behind a cable is added up, so trunk lines carry more than branches.

import { generateWalls } from "./geometry/walls.ts";
import type { Building, CableRoute, EnergySettings, Floor, Furniture, Room, SolarField, Vec2 } from "./model.ts";
import { fieldCenter, fieldFace, fieldSize, roofFaces, topFloor, wallFaces } from "./solar.ts";
import { powerSensorsOf } from "./devices.ts";
import { pointInPolygon, signedArea } from "./model.ts";
import type { HassEntity, HomeAssistant } from "./types.ts";

export type FlowKind = "consumer" | "grid" | "export" | "solar" | "battery" | "inverter" | "wallbox";

/** One straight piece of glowing cable (floor-local coordinates, y up from the floor). */
export interface FlowSegment {
  floorId: string;
  a: [number, number, number];
  b: [number, number, number];
  /** Cable length from the source to `a`, so the stripes run on continuously. */
  dist: number;
  /** Power carried (W, >= 0); the flow runs from a to b. */
  power: number;
  kind: FlowKind;
  /** Pro: which cable this piece belongs to ("solar:<field>", "inv:<inverter>", "bat:<battery>", "grid"); none: the house tree. */
  key?: string;
}

export interface EnergySummary {
  /** Grid power (W): positive = import, negative = export. */
  grid: number | null;
  solar: number | null;
  /** Battery power (W): positive = discharging, negative = charging. */
  battery: number | null;
  soc: number | null;
  tariff: { value: number; unit: string } | null;
  /** House consumption (W) from the balance, or the sum of the consumers. */
  consumption: number | null;
}

export interface Consumer {
  /** Placed entity (device) id. */
  id: string;
  powerEntity: string;
  floorId: string;
  x: number;
  z: number;
  power: number;
  /** A wallbox: its cable is drawn in its own colour. */
  wallbox?: boolean;
}

const CABLE_Y = 0.03;
type V3 = [number, number, number];

/** Power sensors the placed energy devices bring along (meter = grid, inverters = solar, battery). */
export interface DeviceSensors {
  grid: string | null;
  solar: string[];
  battery: string[];
  /** Separate charging power sensors (batteries whose power sensor only reports discharging). */
  charge: string[];
  /** Every battery with its own sensors: a signed power sensor, or discharging plus a separate charging sensor. */
  batteries: { power: string | null; charge: string | null }[];
  soc: string[];
}

const ref = (v: string | null | undefined) => (v && v !== "none" ? v : null);

/**
 * The sensors of the energy devices in the plan: `power` tells the power sensor of an item (its own field, or
 * the one found on its device). Several inverters add up.
 */
export function deviceSensors(building: Building, power: (f: Furniture) => string | null = (f) => ref(f.power)): DeviceSensors {
  const out: DeviceSensors = { grid: null, solar: [], battery: [], charge: [], batteries: [], soc: [] };
  for (const floor of building.floors) {
    for (const f of floor.furniture) {
      const p = power(f);
      if (f.type === "meter") out.grid ??= p;
      else if (f.type === "inverter" && p && !out.solar.includes(p)) out.solar.push(p);
      else if (f.type === "home_battery") {
        if (p && !out.battery.includes(p)) out.battery.push(p);
        const charge = ref(f.charge);
        if (charge && !out.charge.includes(charge)) out.charge.push(charge);
        if (p || charge) out.batteries.push({ power: p, charge });
        const soc = ref(f.soc);
        if (soc && !out.soc.includes(soc)) out.soc.push(soc);
      }
    }
  }
  return out;
}

/** Where the cables meet: the meter cabinet in the plan, else the meter spot set in older plans. */
export function meterPosition(building: Building): { floor_id: string; x: number; z: number } | null {
  for (const floor of building.floors) {
    const m = floor.furniture.find((f) => f.type === "meter");
    if (m) return { floor_id: floor.id, x: m.x, z: m.z };
  }
  return building.energy.meter;
}

/** Home Assistant's energy dashboard settings (`energy/get_prefs`), as far as the proposals need them. */
export interface EnergyPrefs {
  energy_sources?: {
    type: string;
    stat_energy_from?: string;
    stat_energy_to?: string;
    flow_from?: { stat_energy_from: string }[];
    flow_to?: { stat_energy_to: string }[];
  }[];
}

/** The power sensor (W) that belongs to an energy statistic: one of the same device, named like it if there are several. */
function powerOfDevice(hass: HomeAssistant, statId: string | undefined, deviceClass = "power"): string | null {
  if (!statId) return null;
  const device = hass.entities?.[statId]?.device_id;
  if (!device) return null;
  const candidates = Object.keys(hass.states).filter((id) => id.startsWith("sensor.") && hass.entities?.[id]?.device_id === device && hass.states[id]?.attributes.device_class === deviceClass);
  if (candidates.length <= 1) return candidates[0] ?? null;
  // a total over several phases rather than a single phase or a daily value
  const total = candidates.filter((id) => !/(phase|_l[123]\b|_[abc]$|today|daily|heute)/.test(id));
  const stem = statId.replace(/^sensor\./, "").replace(/_?(energy|energie|total|today|daily|kwh|import|export|consumption|production)/g, "");
  return total.find((id) => stem && id.includes(stem)) ?? total[0] ?? candidates[0];
}

/** Sensors for the energy balance proposed from the energy dashboard: grid, solar, battery and its charge. */
export function proposeEnergySensors(hass: HomeAssistant, prefs: EnergyPrefs): Partial<EnergySettings> {
  const out: Partial<EnergySettings> = {};
  for (const src of prefs.energy_sources ?? []) {
    if (src.type === "grid") {
      const stat = src.flow_from?.[0]?.stat_energy_from ?? src.flow_to?.[0]?.stat_energy_to;
      const p = powerOfDevice(hass, stat);
      if (p && !out.grid) out.grid = p;
    } else if (src.type === "solar") {
      const p = powerOfDevice(hass, src.stat_energy_from);
      if (p && !out.solar) out.solar = p;
    } else if (src.type === "battery") {
      const p = powerOfDevice(hass, src.stat_energy_from ?? src.stat_energy_to);
      if (p && !out.battery) out.battery = p;
      const soc = powerOfDevice(hass, src.stat_energy_from ?? src.stat_energy_to, "battery");
      if (soc && !out.battery_soc) out.battery_soc = soc;
    }
  }
  return out;
}
/** Distance of the cable ring from the wall face. */
const RING_GAP = 0.07;

// ------------------------------------------------------------------ values

/** Power in watts (kW and MW converted); null when unknown. */
export function readPower(st: HassEntity | undefined, invert = false): number | null {
  if (!st) return null;
  const v = Number(st.state);
  if (!Number.isFinite(v)) return null;
  const unit = String(st.attributes.unit_of_measurement ?? "W");
  const w = unit === "kW" ? v * 1000 : unit === "MW" ? v * 1e6 : v;
  return invert ? -w : w;
}

function isPowerSensor(hass: HomeAssistant, id: string): boolean {
  return id.startsWith("sensor.") && hass.states[id]?.attributes.device_class === "power";
}

/** Power sensor of a placed entity: the entity itself, or a power sensor of the same device. */
export function powerSensorFor(hass: HomeAssistant, entityId: string): string | null {
  if (isPowerSensor(hass, entityId)) return entityId;
  const device = hass.entities?.[entityId]?.device_id;
  if (!device) return null;
  return powerSensorsOf(hass, device).find((e) => e !== entityId) ?? null;
}

/** Placed entities that report power, with their position and current power. */
export function findConsumers(hass: HomeAssistant, building: Building): Consumer[] {
  const e = building.energy;
  const sources = new Set([e.grid, e.solar, e.battery].filter(Boolean));
  const out: Consumer[] = [];
  const seen = new Set<string>();
  for (const floor of building.floors) {
    for (const pl of floor.placements) {
      const sensor = powerSensorFor(hass, pl.entity_id);
      if (!sensor || sources.has(sensor) || seen.has(sensor)) continue;
      seen.add(sensor);
      out.push({ id: pl.entity_id, powerEntity: sensor, floorId: floor.id, x: pl.x, z: pl.z, power: Math.max(0, readPower(hass.states[sensor]) ?? 0) });
    }
  }
  return out;
}

export function energySummary(hass: HomeAssistant, building: Building, consumers: Consumer[], devices: DeviceSensors = deviceSensors(building)): EnergySummary {
  const e = building.energy;
  // the balance sensors win; without them the placed devices bring theirs (the meter, the inverters, the battery)
  const gridId = e.grid ?? devices.grid;
  const grid = gridId ? readPower(hass.states[gridId], e.grid_invert) : null;
  let solar: number | null = e.solar ? readPower(hass.states[e.solar]) : null;
  if (!e.solar && devices.solar.length) {
    const values = devices.solar.map((id) => readPower(hass.states[id])).filter((v): v is number => v !== null);
    solar = values.length ? values.reduce((a, b) => a + b, 0) : null;
  }
  let battery: number | null = e.battery ? readPower(hass.states[e.battery], e.battery_invert) : null;
  if (!e.battery && devices.batteries.length) {
    // every battery on its own: a signed sensor (+ = discharging, inverted on request), or discharging and a
    // separate charging sensor (then the signs do not matter)
    const values = devices.batteries
      .map((bat) => {
        if (bat.charge) {
          const out = bat.power ? Math.max(0, readPower(hass.states[bat.power]) ?? 0) : 0;
          const inp = Math.max(0, readPower(hass.states[bat.charge]) ?? 0);
          return out - inp;
        }
        return bat.power ? readPower(hass.states[bat.power], e.battery_invert) : null;
      })
      .filter((v): v is number => v !== null);
    battery = values.length ? values.reduce((a, b) => a + b, 0) : null;
  }
  // several batteries: their charge is averaged
  const socIds = e.battery_soc ? [e.battery_soc] : devices.soc;
  const socs = socIds.map((id) => Number(hass.states[id]?.state)).filter((v) => Number.isFinite(v));
  const socState = socs.length ? socs.reduce((a, b) => a + b, 0) / socs.length : NaN;
  const tariffState = e.tariff ? hass.states[e.tariff] : undefined;
  const tariffValue = Number(tariffState?.state);
  let consumption: number | null = e.consumption ? readPower(hass.states[e.consumption]) : null;
  if (consumption !== null) consumption = Math.max(0, consumption);
  else if (grid !== null || solar !== null || battery !== null) consumption = Math.max(0, (grid ?? 0) + Math.max(0, solar ?? 0) + (battery ?? 0));
  else if (consumers.length) consumption = consumers.reduce((s, c) => s + c.power, 0);
  return {
    grid,
    solar: solar === null ? null : Math.max(0, solar),
    battery,
    soc: Number.isFinite(socState) ? socState : null,
    tariff: tariffState && Number.isFinite(tariffValue) ? { value: tariffValue, unit: String(tariffState.attributes.unit_of_measurement ?? "") } : null,
    consumption,
  };
}

// ------------------------------------------------------------------ routing graph

interface Graph {
  pos: Vec2[];
  adj: { to: number; w: number }[][];
  /** Ring segments per room: [node a, node b]. */
  rings: Map<string, [number, number][]>;
}

function addNode(g: Graph, p: Vec2): number {
  g.pos.push(p);
  g.adj.push([]);
  return g.pos.length - 1;
}

function link(g: Graph, a: number, b: number): void {
  const w = Math.hypot(g.pos[a][0] - g.pos[b][0], g.pos[a][1] - g.pos[b][1]);
  g.adj[a].push({ to: b, w });
  g.adj[b].push({ to: a, w });
}

/** Polygon moved inwards by a distance per edge (counter-clockwise input). */
function insetPolygon(poly: Vec2[], dist: number[]): Vec2[] {
  const n = poly.length;
  const lines = poly.map((a, i) => {
    const b = poly[(i + 1) % n];
    const dx = b[0] - a[0];
    const dz = b[1] - a[1];
    const l = Math.hypot(dx, dz) || 1;
    const nx = -dz / l;
    const nz = dx / l; // left normal = inside for a counter-clockwise polygon
    return { p: [a[0] + nx * dist[i], a[1] + nz * dist[i]] as Vec2, d: [dx / l, dz / l] as Vec2, n: [nx, nz] as Vec2 };
  });
  return poly.map((v, i) => {
    const l1 = lines[(i - 1 + n) % n];
    const l2 = lines[i];
    const den = l1.d[0] * l2.d[1] - l1.d[1] * l2.d[0];
    if (Math.abs(den) < 1e-6) return [v[0] + l2.n[0] * dist[i], v[1] + l2.n[1] * dist[i]];
    const t = ((l2.p[0] - l1.p[0]) * l2.d[1] - (l2.p[1] - l1.p[1]) * l2.d[0]) / den;
    return [l1.p[0] + l1.d[0] * t, l1.p[1] + l1.d[1] * t];
  });
}

function ccwRoom(room: Room): { pts: Vec2[]; flipped: boolean } {
  return signedArea(room.points) >= 0 ? { pts: room.points, flipped: false } : { pts: [...room.points].reverse(), flipped: true };
}

function buildGraph(floor: Floor, exterior: number, interior: number): Graph {
  const g: Graph = { pos: [], adj: [], rings: new Map() };
  const { walls } = generateWalls(floor.rooms, { exterior, interior }, floor.walls ?? []);
  for (const room of floor.rooms) {
    if (room.points.length < 3) continue;
    const { pts, flipped } = ccwRoom(room);
    const n = pts.length;
    // interior walls sit on the room edge, so the ring keeps half their thickness away
    const dist = pts.map((_, i) => {
      const stored = flipped ? (n - 2 - i + n) % n : i;
      const shared = walls.some((w) => !w.exterior && w.sources.some((s) => s.room_id === room.id && s.edge === stored));
      return RING_GAP + (shared ? interior / 2 : 0);
    });
    const ring = insetPolygon(pts, dist).map((p) => addNode(g, p));
    const segs: [number, number][] = ring.map((a, i) => [a, ring[(i + 1) % n]]);
    for (const [a, b] of segs) link(g, a, b);
    g.rings.set(room.id, segs);
  }
  // doorless links through the middle of every interior wall
  for (const w of walls) {
    if (w.exterior || !w.roomLeft || !w.roomRight) continue;
    const m: Vec2 = [(w.a[0] + w.b[0]) / 2, (w.a[1] + w.b[1]) / 2];
    const a = attach(g, w.roomLeft, m);
    const b = attach(g, w.roomRight, m);
    if (a !== null && b !== null) link(g, a, b);
  }
  return g;
}

/** New node at the point of a room's ring closest to p, linked to that segment's ends. */
function attach(g: Graph, roomId: string, p: Vec2): number | null {
  const segs = g.rings.get(roomId);
  if (!segs) return null;
  let best: { seg: [number, number]; q: Vec2; d: number } | null = null;
  for (const seg of segs) {
    const a = g.pos[seg[0]];
    const b = g.pos[seg[1]];
    const dx = b[0] - a[0];
    const dz = b[1] - a[1];
    const l2 = dx * dx + dz * dz || 1;
    const t = Math.min(1, Math.max(0, ((p[0] - a[0]) * dx + (p[1] - a[1]) * dz) / l2));
    const q: Vec2 = [a[0] + dx * t, a[1] + dz * t];
    const d = Math.hypot(p[0] - q[0], p[1] - q[1]);
    if (!best || d < best.d) best = { seg, q, d };
  }
  if (!best) return null;
  const node = addNode(g, best.q);
  link(g, node, best.seg[0]);
  link(g, node, best.seg[1]);
  return node;
}

/** Room containing p, or the one whose outline is nearest. */
function roomAt(floor: Floor, p: Vec2): Room | null {
  const rooms = floor.rooms.filter((r) => r.points.length >= 3);
  const inside = rooms.find((r) => pointInPolygon(p, r.points));
  if (inside) return inside;
  let best: { room: Room; d: number } | null = null;
  for (const r of rooms) {
    for (const q of r.points) {
      const d = Math.hypot(p[0] - q[0], p[1] - q[1]);
      if (!best || d < best.d) best = { room: r, d };
    }
  }
  return best?.room ?? null;
}

function dijkstra(g: Graph, source: number): { dist: number[]; prev: number[] } {
  const dist = g.pos.map(() => Infinity);
  const prev = g.pos.map(() => -1);
  const done = g.pos.map(() => false);
  dist[source] = 0;
  // graphs are small (a few hundred nodes): a linear scan is fast enough
  for (;;) {
    let u = -1;
    for (let i = 0; i < dist.length; i++) if (!done[i] && dist[i] < Infinity && (u < 0 || dist[i] < dist[u])) u = i;
    if (u < 0) break;
    done[u] = true;
    for (const { to, w } of g.adj[u]) {
      if (dist[u] + w < dist[to] - 1e-9) {
        dist[to] = dist[u] + w;
        prev[to] = u;
      }
    }
  }
  return { dist, prev };
}

// ------------------------------------------------------------------ flows

export interface FlowInput {
  building: Building;
  consumers: Consumer[];
  summary: EnergySummary;
  /** Position of a placed battery (for the battery cable), if any. */
  battery?: { floorId: string; x: number; z: number } | null;
  /** Pro: power of every solar field (W) for the cables from the roof to the inverter (none: no roof cables). */
  fieldPower?: Map<string, number> | null;
  /** Pro: the energy devices' own sensors by furniture id (W; a battery positive = discharging). */
  devicePower?: ReadonlyMap<string, number> | null;
}

/** Cable route independent of the current power: which targets each piece feeds. */
interface PlannedSegment {
  floorId: string;
  a: [number, number, number];
  b: [number, number, number];
  dist: number;
  /** Indices of the targets (consumers, then the battery) fed through this piece. */
  members: number[];
  kind: FlowKind;
}

interface Target {
  floorId: string;
  x: number;
  z: number;
  kind: FlowKind;
}

/** The kind of a shared cable: all battery = battery, all wallbox = wallbox, else a consumer cable. */
function sharedKind(members: number[], targets: Target[]): FlowKind {
  if (members.every((m) => targets[m].kind === "battery")) return "battery";
  if (members.every((m) => targets[m].kind === "wallbox")) return "wallbox";
  return "consumer";
}

/** Routes per building object and target layout; power changes only re-weigh the planned pieces. */
const planCache = new WeakMap<Building, Map<string, PlannedSegment[]>>();

function planRoutes(building: Building, targets: Target[]): PlannedSegment[] {
  const meter = meterPosition(building)!;
  const meterFloor = building.floors.find((f) => f.id === meter.floor_id)!;
  const out: PlannedSegment[] = [];
  const { wall_exterior: ext, wall_interior: int } = building.settings;
  const riserDist = new Map<string, number>();
  const byFloor = new Map<string, number[]>();
  targets.forEach((t, i) => byFloor.set(t.floorId, [...(byFloor.get(t.floorId) ?? []), i]));
  const floorsWithLoad = building.floors.filter((f) => byFloor.has(f.id));

  // vertical risers at the meter position: power for every other floor goes through them
  for (const f of floorsWithLoad) {
    if (f.id === meterFloor.id) continue;
    const up = f.elevation > meterFloor.elevation;
    const members = byFloor.get(f.id)!;
    const kind = sharedKind(members, targets);
    // on the meter floor: straight up to the ceiling (or down into the slab)
    out.push({ floorId: meterFloor.id, a: [meter.x, CABLE_Y, meter.z], b: [meter.x, up ? meterFloor.height : -0.2, meter.z], dist: 0, members, kind });
    // on the other floor: up out of the slab (or down from the ceiling) to the floor
    const h = Math.abs(f.elevation - meterFloor.elevation);
    out.push({ floorId: f.id, a: [meter.x, up ? -0.2 : f.height, meter.z], b: [meter.x, CABLE_Y, meter.z], dist: h, members, kind });
    riserDist.set(f.id, h + 0.25);
  }

  for (const f of floorsWithLoad) {
    const g = buildGraph(f, ext, int);
    const rootRoom = roomAt(f, [meter.x, meter.z]);
    if (!rootRoom) continue;
    const root = addNode(g, [meter.x, meter.z]);
    const rootAttach = attach(g, rootRoom.id, [meter.x, meter.z]);
    if (rootAttach === null) continue;
    link(g, root, rootAttach);
    const ends: { node: number; member: number }[] = [];
    for (const i of byFloor.get(f.id)!) {
      const t = targets[i];
      const room = roomAt(f, [t.x, t.z]);
      if (!room) continue;
      const node = addNode(g, [t.x, t.z]);
      const at = attach(g, room.id, [t.x, t.z]);
      if (at === null) continue;
      link(g, node, at);
      ends.push({ node, member: i });
    }
    const { dist, prev } = dijkstra(g, root);
    // collect the targets behind every edge of the tree
    const edges = new Map<string, { a: number; b: number; members: number[] }>();
    for (const e of ends) {
      if (!Number.isFinite(dist[e.node])) continue;
      for (let v = e.node; prev[v] >= 0; v = prev[v]) {
        const u = prev[v];
        const key = `${u}>${v}`;
        const cur = edges.get(key) ?? { a: u, b: v, members: [] };
        cur.members.push(e.member);
        edges.set(key, cur);
      }
    }
    const base = riserDist.get(f.id) ?? 0;
    for (const { a, b, members } of edges.values()) {
      const pa = g.pos[a];
      const pb = g.pos[b];
      // a cable shared by the battery and consumers is drawn as consumer cable
      const kind = sharedKind(members, targets);
      out.push({ floorId: f.id, a: [pa[0], CABLE_Y, pa[1]], b: [pb[0], CABLE_Y, pb[1]], dist: base + dist[a], members, kind });
    }
  }
  return out;
}

/** All cable segments: consumers (tree from the meter), grid feed, solar riser and battery cable. */
export function flowSegments({ building, consumers, summary, battery, fieldPower, devicePower }: FlowInput): FlowSegment[] {
  const meter = meterPosition(building);
  if (!meter) return [];
  const meterFloor = building.floors.find((f) => f.id === meter.floor_id);
  if (!meterFloor) return [];
  const own = (id: string) => devicePower?.get(id);
  const inverters = devicesOf(building, "inverter");
  const batteries = devicesOf(building, "home_battery");
  // older plans: the battery sensor placed on its own stands for a battery
  if (!batteries.length && battery) batteries.push({ id: "battery", type: "home_battery", floorId: battery.floorId, x: battery.x, z: battery.z, h: 1.1, variant: null });
  const nearest = (p: { floorId: string; x: number; z: number }) => {
    let best: DevicePos | null = null;
    for (const inv of inverters) {
      if (inv.floorId !== p.floorId) continue;
      if (!best || Math.hypot(inv.x - p.x, inv.z - p.z) < Math.hypot(best.x - p.x, best.z - p.z)) best = inv;
    }
    return best;
  };
  // every battery hangs on the nearest inverter of its floor (a hybrid inverter), else on the meter
  const batteryPower = (bat: DevicePos) => own(bat.id) ?? (batteries.length === 1 ? (summary.battery ?? 0) : 0);
  const onInverter = new Map<string, DevicePos>();
  for (const bat of batteries) {
    const inv = nearest(bat);
    if (inv) onInverter.set(bat.id, inv);
  }

  const targets: (Target & { power: number })[] = consumers.map((c) => ({ floorId: c.floorId, x: c.x, z: c.z, kind: (c.wallbox ? "wallbox" : "consumer") as FlowKind, power: c.power }));
  for (const bat of batteries) if (!onInverter.has(bat.id) && summary.battery !== null) targets.push({ floorId: bat.floorId, x: bat.x, z: bat.z, kind: "battery", power: Math.abs(batteryPower(bat)) });
  const key = `${meter.floor_id}:${meter.x},${meter.z}|${targets.map((t) => `${t.floorId}:${t.x},${t.z}:${t.kind}`).join(";")}`;
  let perBuilding = planCache.get(building);
  if (!perBuilding) planCache.set(building, (perBuilding = new Map()));
  let plan = perBuilding.get(key);
  if (!plan) {
    plan = planRoutes(building, targets);
    // one layout per building is enough (a new building object comes with every edit)
    perBuilding.clear();
    perBuilding.set(key, plan);
  }
  const out: FlowSegment[] = plan.map((s) => ({
    floorId: s.floorId,
    a: s.a,
    b: s.b,
    dist: s.dist,
    power: s.members.reduce((sum, m) => sum + targets[m].power, 0),
    kind: s.kind,
  }));

  // grid feed: from the street through the nearest exterior wall to the meter
  const street = summary.grid !== null ? gridPoint(building) : null;
  const cables = building.settings.roof.cables ?? [];
  const laid = (key: string) => cables.find((c) => c.id === key);
  const tag = (segs: FlowSegment[], key: string) => segs.map((seg) => ({ ...seg, key }));
  if (street) {
    const importing = summary.grid! >= 0;
    const hand = laid("grid");
    const route: V3[] = hand
      ? manualPoints(building, hand, [street.end[0], meterFloor.elevation + CABLE_Y, street.end[1]], [meter.x, meterFloor.elevation + 0.4 + 1.1, meter.z])
      : [[street.end[0], CABLE_Y, street.end[1]], [street.wall[0], CABLE_Y, street.wall[1]], [meter.x, CABLE_Y, meter.z]];
    const pieces = hand
      ? absolutePolyline(building, importing ? route : [...route].reverse(), Math.abs(summary.grid!), importing ? "grid" : "export", meterFloor)
      : polyline(meterFloor.id, importing ? route : [...route].reverse(), Math.abs(summary.grid!), importing ? "grid" : "export", 0);
    out.push(...tag(pieces, "grid"));
  }
  // the battery cable (on the meter) flows towards the meter when discharging
  if (summary.battery !== null && summary.battery > 0) {
    for (const s of out) if (s.kind === "battery") [s.a, s.b] = [s.b, s.a];
  }

  // the solar fields: each to its string's inverter, else the nearest one, else the meter
  const fields = building.settings.roof.solar ?? [];
  const strings = building.settings.roof.strings ?? [];
  const fieldsOf = new Map<string, number>();
  if (fieldPower && fields.length) {
    const faces = [...roofFaces(building), ...wallFaces(building)];
    for (const f of fields) {
      const power = fieldPower.get(f.id) ?? 0;
      const named = f.string ? strings.find((x) => x.id === f.string)?.inverter : null;
      let inv = named ? (inverters.find((x) => x.id === named) ?? null) : null;
      if (!inv && inverters.length) {
        const face = fieldFace(building, f, faces);
        const c = face ? fieldCenter(face, f) : [f.u, f.v];
        inv = inverters.reduce((best, x) => (!best || Math.hypot(x.x - c[0], x.z - c[1]) < Math.hypot(best.x - c[0], best.z - c[1]) ? x : best), null as DevicePos | null);
      }
      if (inv) fieldsOf.set(inv.id, (fieldsOf.get(inv.id) ?? 0) + power);
      const target = inv ?? { floorId: meter.floor_id, x: meter.x, z: meter.z };
      const targetY = inv ? 1.1 + inv.h : 1.5;
      const hand = laid(`solar:${f.id}`);
      const start = hand ? fieldStart(building, f) : null;
      const floor = building.floors.find((x) => x.id === target.floorId);
      if (hand && start && floor) {
        out.push(...tag(absolutePolyline(building, manualPoints(building, hand, start, [target.x, floor.elevation + targetY, target.z]), power, "solar", floor), `solar:${f.id}`));
      } else out.push(...tag(solarRoute(building, f, power, target, targetY), `solar:${f.id}`));
    }
  } else if (summary.solar !== null && !inverters.length) {
    // older plans without fields or an inverter: the sun comes down from above the ceiling to the meter
    out.push({ floorId: meterFloor.id, a: [meter.x + 0.08, meterFloor.height + 0.6, meter.z + 0.08], b: [meter.x + 0.08, CABLE_Y, meter.z + 0.08], dist: 0, power: summary.solar, kind: "solar" });
  }

  // every inverter feeds the meter: with its own sensor, else with its fields' sun and its batteries' discharge
  for (const inv of inverters) {
    const invTop = 1.1 + inv.h;
    const mine = batteries.filter((bat) => onInverter.get(bat.id) === inv);
    let feed = own(inv.id);
    if (feed === undefined) {
      feed = fieldsOf.get(inv.id) ?? (inverters.length === 1 ? (summary.solar ?? 0) : 0);
      for (const bat of mine) feed += batteryPower(bat);
    }
    const invFloor = building.floors.find((x) => x.id === inv.floorId);
    if (summary.solar !== null || summary.battery !== null) {
      const hand = laid(`inv:${inv.id}`);
      const pieces =
        hand && invFloor
          ? absolutePolyline(building, manualPoints(building, hand, [inv.x, invFloor.elevation + invTop, inv.z], [meter.x, meterFloor.elevation + 1.5, meter.z]), Math.max(0, feed), "inverter", invFloor)
          : deviceRoute(building, inv, invTop, { floorId: meter.floor_id, x: meter.x, z: meter.z }, 1.5, Math.max(0, feed), "inverter", 0);
      out.push(...tag(pieces, `inv:${inv.id}`));
    }
    for (const bat of mine) {
      const p = batteryPower(bat);
      if (summary.battery === null && own(bat.id) === undefined) continue;
      const batY = bat.variant === "wall" ? 0.5 + bat.h : 0.9;
      const hand = laid(`bat:${bat.id}`);
      const route =
        hand && invFloor
          ? absolutePolyline(building, manualPoints(building, hand, [inv.x, invFloor.elevation + invTop - 0.1, inv.z], [bat.x, invFloor.elevation + batY, bat.z]), Math.abs(p), "battery", invFloor)
          : deviceRoute(building, inv, invTop - 0.1, bat, batY, Math.abs(p), "battery", 0);
      // charging: from the inverter to the battery; discharging: the other way round
      out.push(...tag(p <= 0 ? route : route.map((s) => ({ ...s, a: s.b, b: s.a })).reverse(), `bat:${bat.id}`));
    }
  }
  return out;
}

// ------------------------------------------------------------------ Pro: the roof and the devices

interface DevicePos {
  id: string;
  type: string;
  floorId: string;
  x: number;
  z: number;
  h: number;
  variant: string | null;
}

/**
 * Where the grid cable leaves the house and where it ends: through the exterior wall nearest to the meter and on
 * to the edge of the plot in that direction (the outermost outdoor area, else a few metres out) – the street.
 */
export function gridPoint(building: Building): { floorId: string; wall: Vec2; end: Vec2 } | null {
  const meter = meterPosition(building);
  const floor = meter ? building.floors.find((f) => f.id === meter.floor_id) : undefined;
  if (!meter || !floor) return null;
  const { wall_exterior: ext, wall_interior: int } = building.settings;
  const { walls } = generateWalls(floor.rooms, { exterior: ext, interior: int }, floor.walls ?? []);
  const set = devicesOf(building, "grid_point")[0];
  const exterior = walls.filter((w) => w.exterior);
  if (set) {
    // the way out: where the straight line from the meter to the set point crosses an exterior wall first
    let hit: { q: Vec2; out: Vec2; t: number } | null = null;
    for (const w of exterior) {
      const ex = w.b[0] - w.a[0];
      const ez = w.b[1] - w.a[1];
      const dx = set.x - meter.x;
      const dz = set.z - meter.z;
      const den = dx * ez - dz * ex;
      if (Math.abs(den) < 1e-9) continue;
      const t = ((w.a[0] - meter.x) * ez - (w.a[1] - meter.z) * ex) / den;
      const u = ((w.a[0] - meter.x) * dz - (w.a[1] - meter.z) * dx) / den;
      if (t <= 0 || t > 1 || u < 0 || u > 1 || (hit && t >= hit.t)) continue;
      const l = Math.hypot(ex, ez) || 1;
      hit = { q: [meter.x + dx * t, meter.z + dz * t], out: [ez / l, -ex / l], t };
    }
    const wall: Vec2 = hit ? [hit.q[0] + hit.out[0] * (ext / 2 + 0.05), hit.q[1] + hit.out[1] * (ext / 2 + 0.05)] : [meter.x, meter.z];
    return { floorId: floor.id, wall, end: [set.x, set.z] };
  }
  let best: { q: Vec2; out: Vec2; d: number } | null = null;
  for (const w of exterior) {
    const dx = w.b[0] - w.a[0];
    const dz = w.b[1] - w.a[1];
    const l2 = dx * dx + dz * dz || 1;
    const t = Math.min(1, Math.max(0, ((meter.x - w.a[0]) * dx + (meter.z - w.a[1]) * dz) / l2));
    const q: Vec2 = [w.a[0] + dx * t, w.a[1] + dz * t];
    const d = Math.hypot(meter.x - q[0], meter.z - q[1]);
    const l = Math.sqrt(l2);
    if (!best || d < best.d) best = { q, out: [dz / l, -dx / l], d };
  }
  if (!best) return null;
  const { q, out } = best;
  // along the way out: the farthest edge of any outdoor area (on any floor) it crosses – the plot's border, at most 15 m
  let far = 0;
  for (const fl of building.floors) {
    for (const area of fl.outdoor ?? []) {
      const n = area.points.length;
      for (let i = 0; i < n; i++) {
        const a = area.points[i];
        const c = area.points[(i + 1) % n];
        const ex = c[0] - a[0];
        const ez = c[1] - a[1];
        const den = out[0] * ez - out[1] * ex;
        if (Math.abs(den) < 1e-9) continue;
        const t = ((a[0] - q[0]) * ez - (a[1] - q[1]) * ex) / den;
        const u = ((a[0] - q[0]) * out[1] - (a[1] - q[1]) * out[0]) / den;
        if (t > 0 && u >= 0 && u <= 1) far = Math.max(far, Math.min(15, t));
      }
    }
  }
  const t = far > ext + 1 ? far : ext + 2.5;
  return { floorId: floor.id, wall: [q[0] + out[0] * (ext / 2 + 0.05), q[1] + out[1] * (ext / 2 + 0.05)], end: [q[0] + out[0] * t, q[1] + out[1] * t] };
}

/** All energy devices of a type in the plan (where cables start or end). */
export function devicesOf(building: Building, type: Furniture["type"]): DevicePos[] {
  const out: DevicePos[] = [];
  for (const floor of building.floors) for (const m of floor.furniture) if (m.type === type) out.push({ id: m.id, type: m.type, floorId: floor.id, x: m.x, z: m.z, h: m.h, variant: m.variant ?? null });
  return out;
}

/** Cables between two devices on one floor along the walls of the rooms (like the meter's tree), at floor level. */
const routeCache = new WeakMap<Building, Map<string, Vec2[]>>();

function roomPath(building: Building, floor: Floor, from: Vec2, to: Vec2): Vec2[] {
  const key = `${floor.id}:${from.join(",")}>${to.join(",")}`;
  let per = routeCache.get(building);
  if (!per) routeCache.set(building, (per = new Map()));
  const cached = per.get(key);
  if (cached) return cached;
  const { wall_exterior: ext, wall_interior: int } = building.settings;
  const g = buildGraph(floor, ext, int);
  const path: Vec2[] = [from, to];
  const a = roomAt(floor, from);
  const b = roomAt(floor, to);
  if (a && b) {
    const na = addNode(g, from);
    const aa = attach(g, a.id, from);
    const nb = addNode(g, to);
    const ab = attach(g, b.id, to);
    if (aa !== null && ab !== null) {
      link(g, na, aa);
      link(g, nb, ab);
      const { dist, prev } = dijkstra(g, na);
      if (Number.isFinite(dist[nb])) {
        path.length = 0;
        for (let v = nb; v >= 0; v = prev[v]) path.unshift(g.pos[v]);
      }
    }
  }
  per.set(key, path);
  return path;
}

/** A cable from a device down its wall, along the rooms' walls and up to the other device. */
function deviceRoute(building: Building, from: { floorId: string; x: number; z: number }, fromY: number, to: { floorId: string; x: number; z: number }, toY: number, power: number, kind: FlowKind, dist: number): FlowSegment[] {
  const floor = building.floors.find((f) => f.id === from.floorId);
  if (!floor || from.floorId !== to.floorId) return [];
  const path = roomPath(building, floor, [from.x, from.z], [to.x, to.z]);
  const pts: V3[] = [[from.x, fromY, from.z], ...path.map((p): V3 => [p[0], CABLE_Y, p[1]]), [to.x, toY, to.z]];
  return polyline(floor.id, pts, power, kind, dist);
}

/** Consecutive pieces of one cable (floor-local), the distance running on from piece to piece. */
function polyline(floorId: string, pts: V3[], power: number, kind: FlowKind, dist: number): FlowSegment[] {
  const out: FlowSegment[] = [];
  for (let i = 0; i + 1 < pts.length; i++) {
    const a = pts[i];
    const b = pts[i + 1];
    const len = Math.hypot(b[0] - a[0], b[1] - a[1], b[2] - a[2]);
    if (len < 1e-4) continue;
    out.push({ floorId, a, b, dist, power, kind });
    dist += len;
  }
  return out;
}

/** A cable laid by hand: from its start to its first point, along its points at its height, and on to its end. */
function manualPoints(building: Building, route: CableRoute, from: V3, to: V3): V3[] {
  const floor = building.floors.find((f) => f.id === route.floor_id);
  const y = (floor?.elevation ?? 0) + Math.max(CABLE_Y, route.height);
  return [from, ...route.points.map((p): V3 => [p[0], y, p[1]]), to];
}

/** Where a field's cable starts (building coordinates): under its lower edge, or under a garden field's middle. */
export function fieldStart(building: Building, f: SolarField): V3 | null {
  const face = fieldFace(building, f, [...roofFaces(building), ...wallFaces(building)]);
  if (!face) return null;
  const [w, d] = fieldSize(face, f);
  const u = f.u + w / 2;
  const sv = face.unbounded ? f.v + d / 2 : f.v;
  return [face.o[0] + face.eu[0] * u + face.es[0] * sv, face.o[1] + face.eu[1] * u + face.es[1] * sv, face.o[2] + face.eu[2] * u + face.es[2] * sv];
}

/** The point of a floor's cable rings (just inside the walls) nearest to a plan point. */
function nearestRingPoint(building: Building, floor: Floor, p: Vec2): Vec2 {
  const { wall_exterior: ext, wall_interior: int } = building.settings;
  const g = buildGraph(floor, ext, int);
  const room = roomAt(floor, p);
  const node = room ? attach(g, room.id, p) : null;
  return node === null ? p : g.pos[node];
}

/** Pieces of a cable in building coordinates, handed to the floors they run through (vertical runs are split). */
function absolutePolyline(building: Building, pts: V3[], power: number, kind: FlowKind, homeFloor: Floor): FlowSegment[] {
  const floors = [...building.floors].sort((a, b) => a.elevation - b.elevation);
  const floorAt = (y: number): Floor => {
    let best = homeFloor;
    for (const f of floors) if (y >= f.elevation - 0.01) best = f;
    // above the top floor the roof's cables belong to the top floor; below the lowest floor to that floor
    return best;
  };
  const out: FlowSegment[] = [];
  let dist = 0;
  for (let i = 0; i + 1 < pts.length; i++) {
    let a = pts[i];
    const b = pts[i + 1];
    const len = Math.hypot(b[0] - a[0], b[1] - a[1], b[2] - a[2]);
    if (len < 1e-4) continue;
    // a vertical run through several floors: one piece per floor
    const cuts: number[] = [];
    if (Math.abs(b[1] - a[1]) > 0.01) {
      const lo = Math.min(a[1], b[1]);
      const hi = Math.max(a[1], b[1]);
      for (const f of floors) if (f.elevation > lo + 0.01 && f.elevation < hi - 0.01) cuts.push(f.elevation);
      if (b[1] < a[1]) cuts.reverse();
    }
    for (const y of [...cuts, b[1]]) {
      const t = (y - a[1]) / (b[1] - a[1] || 1);
      const q: V3 = Math.abs(b[1] - a[1]) > 0.01 ? [a[0] + (b[0] - a[0]) * t, y, a[2] + (b[2] - a[2]) * t] : b;
      const f = floorAt((a[1] + q[1]) / 2);
      const l = Math.hypot(q[0] - a[0], q[1] - a[1], q[2] - a[2]);
      if (l > 1e-4) out.push({ floorId: f.id, a: [a[0], a[1] - f.elevation, a[2]], b: [q[0], q[1] - f.elevation, q[2]], dist, power, kind });
      dist += l;
      a = q;
    }
  }
  return out;
}

/**
 * The cable of a solar field: down the slope to the eave, down the facade, along the outer walls and in to the
 * inverter (building coordinates; a garden field runs along the ground, a wall field straight down its wall).
 */
function solarRoute(building: Building, f: SolarField, power: number, target: { floorId: string; x: number; z: number }, targetY: number): FlowSegment[] {
  const faces = [...roofFaces(building), ...wallFaces(building)];
  const face = fieldFace(building, f, faces);
  const floor = building.floors.find((x) => x.id === target.floorId);
  if (!face || !floor) return [];
  const [w, d] = fieldSize(face, f);
  const at = (u: number, s: number): V3 => [face.o[0] + face.eu[0] * u + face.es[0] * s, face.o[1] + face.eu[1] * u + face.es[1] * s, face.o[2] + face.eu[2] * u + face.es[2] * s];
  const u = f.u + w / 2;
  const ground = floor.elevation + CABLE_Y;
  const pts: V3[] = [];
  let into: V3;
  if (face.unbounded) {
    // a garden field: its cable starts under the middle of the field and runs over the ground to the house
    const c = at(u, f.v + d / 2);
    into = [c[0], ground, c[2]];
    pts.push(into);
  } else if (face.wall) {
    // a wall field: straight down the wall from the field's lower edge
    const bottom = at(u, f.v);
    into = [bottom[0], ground, bottom[2]];
    pts.push(bottom, into);
  } else {
    // a roof field: from its lower edge in through the roof to the wall below, and down the wall inside
    const bottom = at(u, f.v);
    const top = topFloor(building) ?? floor;
    const ceiling = Math.max(floor.elevation + 0.5, Math.min(bottom[1] - 0.25, top.elevation + top.height - 0.12));
    into = [bottom[0], ceiling, bottom[2]];
    pts.push(bottom);
  }
  // to the nearest wall of the device's floor (inside), down to the floor and along the walls to the device
  const ring = nearestRingPoint(building, floor, [into[0], into[2]]);
  pts.push([ring[0], into[1], ring[1]]);
  if (Math.abs(into[1] - ground) > 0.05) pts.push([ring[0], ground, ring[1]]);
  for (const q of roomPath(building, floor, ring, [target.x, target.z]).slice(1)) pts.push([q[0], ground, q[1]]);
  pts.push([target.x, floor.elevation + targetY, target.z]);
  return absolutePolyline(building, pts, power, "solar", floor);
}

/** Today's solar production for the hologram: energy so far, the peak and the curve since midnight. */
export interface SolarDay {
  kwh: number;
  peak: number;
  /** Mean power (W) per five minutes since midnight, in order. */
  curve: number[];
}

/** One row of `recorder/statistics_during_period` (start as ISO text in older cores, epoch ms in newer ones). */
export interface StatRow {
  start: string | number;
  mean?: number | null;
}

/** Today's statistics of the solar sensors added up: five-minute means since midnight. */
export function solarDayFromStats(rows: Record<string, StatRow[]>, now = new Date()): SolarDay {
  const midnight = new Date(now);
  midnight.setHours(0, 0, 0, 0);
  const slots = Math.max(1, Math.floor((now.getTime() - midnight.getTime()) / 300000) + 1);
  const curve = new Array<number>(slots).fill(0);
  for (const list of Object.values(rows)) {
    for (const r of list) {
      const start = typeof r.start === "number" ? r.start : Date.parse(r.start);
      const i = Math.floor((start - midnight.getTime()) / 300000);
      if (i < 0 || i >= slots || typeof r.mean !== "number") continue;
      curve[i] += Math.max(0, r.mean);
    }
  }
  const kwh = curve.reduce((s, w) => s + (w * 5) / 60 / 1000, 0);
  return { kwh, peak: Math.max(0, ...curve), curve };
}

/** Fetch today's solar statistics (five-minute means) from the recorder. */
export async function fetchSolarDay(hass: HomeAssistant, ids: string[]): Promise<SolarDay | null> {
  const rows = await fetchSolarRows(hass, ids);
  return rows ? solarDayFromStats(rows) : null;
}

/** Today's five-minute statistics of the given sensors from the recorder (null when the recorder has none). */
export async function fetchSolarRows(hass: HomeAssistant, ids: string[]): Promise<Record<string, StatRow[]> | null> {
  const midnight = new Date();
  midnight.setHours(0, 0, 0, 0);
  try {
    const rows = await hass.callWS<Record<string, StatRow[]>>({
      type: "recorder/statistics_during_period",
      start_time: midnight.toISOString(),
      statistic_ids: ids,
      period: "5minute",
      types: ["mean"],
    });
    return rows ?? {};
  } catch {
    return null;
  }
}

/** The day curve as SVG paths (220 × 44 box): the line, the area under it and where it ends. */
export function solarCurvePath(curve: readonly number[], peak: number): { line: string; area: string; endX: number; endY: number } {
  const slots = 288;
  const y = (w: number) => 42 - (peak > 0 ? (w / peak) * 36 : 0);
  const pts = curve.map((w, i) => [(i / slots) * 220, y(w)] as const);
  const line = pts.map(([x, py], i) => `${i ? "L" : "M"}${x.toFixed(1)} ${py.toFixed(1)}`).join(" ");
  const [ex, ey] = pts[pts.length - 1];
  return { line, area: `${line} L${ex.toFixed(1)} 44 L0 44 Z`, endX: ex, endY: ey };
}

/** Modules of a field (the ones left out do not count). */
export function modulesOf(f: Pick<SolarField, "rows" | "cols" | "skip">): number {
  return Math.max(1, f.rows * f.cols - (f.skip?.length ?? 0));
}

/** A common module makes about 400 W at its peak. */
export const MODULE_PEAK_W = 400;

/** Production of every field as a share of its peak (0..1), eased so a weak morning sun shows already. */
export function fieldLevels(building: Building, powers: ReadonlyMap<string, number>): Map<string, number> {
  const out = new Map<string, number>();
  for (const f of building.settings.roof.solar ?? []) {
    const share = Math.min(1, (powers.get(f.id) ?? 0) / (modulesOf(f) * MODULE_PEAK_W));
    out.set(f.id, share > 0.003 ? Math.pow(share, 0.6) : 0);
  }
  return out;
}

/** Power (W) of every solar field: its own sensor, else its string's sensor shared by modules, else the plant's. */
export function fieldPowers(hass: HomeAssistant, building: Building, solar: number | null): Map<string, number> {
  const out = new Map<string, number>();
  const fields = building.settings.roof.solar ?? [];
  const strings = building.settings.roof.strings ?? [];
  const modules = modulesOf;
  const rest: SolarField[] = [];
  let known = 0;
  const byString = new Map<string, SolarField[]>();
  for (const f of fields) {
    const own = f.entity && f.entity !== "none" ? readPower(hass.states[f.entity]) : null;
    if (own !== null) {
      out.set(f.id, Math.max(0, own));
      known += Math.max(0, own);
      continue;
    }
    const s = f.string ? strings.find((x) => x.id === f.string) : undefined;
    const sp = s?.entity && s.entity !== "none" ? readPower(hass.states[s.entity]) : null;
    if (s && sp !== null) {
      byString.set(s.id, [...(byString.get(s.id) ?? []), f]);
      continue;
    }
    rest.push(f);
  }
  for (const [id, group] of byString) {
    const s = strings.find((x) => x.id === id)!;
    const p = Math.max(0, readPower(hass.states[s.entity!]) ?? 0);
    const total = group.reduce((n, f) => n + modules(f), 0);
    for (const f of group) out.set(f.id, (p * modules(f)) / total);
    known += p;
  }
  // the rest shares what the plant makes beyond the fields already known
  const left = Math.max(0, (solar ?? 0) - known);
  const total = rest.reduce((n, f) => n + modules(f), 0);
  for (const f of rest) out.set(f.id, total ? (left * modules(f)) / total : 0);
  return out;
}

/**
 * Cable colours: the sun yellow, the battery green, the wallbox blue, export cyan, import red-violet; the house
 * cables take the colour of what feeds the house right now.
 */
export const FLOW_COLORS = {
  solar: [1, 0.78, 0.2] as [number, number, number],
  battery: [0.25, 1, 0.6] as [number, number, number],
  wallbox: [0.3, 0.75, 1] as [number, number, number],
  house: [0.6, 0.72, 1] as [number, number, number],
  export: [0.2, 0.95, 1] as [number, number, number],
  import: [1, 0.3, 0.65] as [number, number, number],
};

export function flowColor(kind: FlowKind, summary: EnergySummary): [number, number, number] {
  if (kind === "grid") return FLOW_COLORS.import;
  if (kind === "export") return FLOW_COLORS.export;
  if (kind === "solar") return FLOW_COLORS.solar;
  if (kind === "battery") return FLOW_COLORS.battery;
  if (kind === "wallbox") return FLOW_COLORS.wallbox;
  // the inverter's feed: the sun, or the battery's discharge at night
  if (kind === "inverter") return (summary.solar ?? 0) > 5 ? FLOW_COLORS.solar : FLOW_COLORS.battery;
  // what feeds the house: grid import, the part of the sun not exported, battery discharge
  const shares: [number, [number, number, number]][] = [
    [Math.max(0, summary.grid ?? 0), FLOW_COLORS.house],
    [Math.max(0, (summary.solar ?? 0) - Math.max(0, -(summary.grid ?? 0)) - Math.max(0, -(summary.battery ?? 0))), FLOW_COLORS.solar],
    [Math.max(0, summary.battery ?? 0), FLOW_COLORS.battery],
  ];
  // mixed colours wash out to white on the dark floor, so the largest source wins
  const [best] = shares.reduce((a, b) => (b[0] > a[0] ? b : a));
  return best > 0 ? shares.find((s) => s[0] === best)![1] : FLOW_COLORS.house;
}
