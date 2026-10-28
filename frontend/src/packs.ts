// Furniture from imported packs (see custom_components/neonplan3d/packs.py for the format). Pack
// furniture has the type "pack:<pack id>:<item id>". Every bundle (main, editor, 3D) keeps its own
// registry, filled with setPacks() from the packs the backend returns.

import { builtinBase, techBase, ELECTRIC_FURNITURE, FURNITURE_SIZE, LIFT_SPOTS, outdoorGround, pointInPolygon, spotDepth, surfaceHeight, WALL_LAMP_Y, type Floor, type Furniture } from "./model.ts";
import type { LampModel } from "./viewer/viewer3d.ts";

/** A cooking zone of a pack cooktop: a thin disc lying on the item's top. */
export function isCooktopZone(p: Pick<PackPart, "shape" | "y" | "h" | "axis">): boolean {
  return p.shape === "cyl" && (p.axis ?? "y") === "y" && p.y > 0.9 && p.h < 0.02;
}

/** A pack item with a cooktop (a hob unit, a cooker, an island with a hob): its zones glow while it cooks. */
export function isPackCooktop(type: string): boolean {
  const item = packItem(type);
  return !!item && /(hob|cooker|stove|herd)/.test(type) && item.parts.filter(isCooktopZone).length >= 2;
}

export interface PackPart {
  /** A box, a cylinder, or a loft: a box whose top face is another rectangle (sloped sides). */
  shape: "box" | "cyl" | "loft";
  /** Centre across and in depth (fractions -0.5..0.5 of the item's width and depth, front at +z). */
  x: number;
  z: number;
  /** Extent in fractions of the item's width and depth; a cylinder's diameter is the smaller one. */
  w: number;
  d: number;
  /** Bottom and height in fractions of the item's height. */
  y: number;
  h: number;
  /** "#rrggbb" or a palette role ("body", "fabric", "wood", …). */
  color: string;
  top?: string;
  /** Outline: true (soft blue), "glow" (cyan like the walls) or "faint". */
  edges?: boolean | "glow" | "faint";
  /** Lamps: shines in the colour and brightness of the linked light. */
  glow?: boolean;
  /** A screen: shows the linked media player's app colour and picture on its front (+z). */
  screen?: boolean;
  /** The measures that stay when the item is resized: "w", "d", "h" or several ("wdh"). */
  fix?: string;
  /** Loft: centre and extent of the top rectangle (defaults: the same as the bottom). */
  tx?: number;
  tz?: number;
  tw?: number;
  td?: number;
  /** Cylinder axis: upright (y, default) or lying along x or z (wheels, pipes, rollers). */
  axis?: "x" | "y" | "z";
  /** Turn of the part around its own centre (degrees around the vertical axis). */
  rot?: number;
}

export type PackSymbol =
  | { shape: "rect"; x: number; z: number; w: number; d: number; fill?: boolean }
  | { shape: "circle"; x: number; z: number; r: number }
  | { shape: "line"; x1: number; z1: number; x2: number; z2: number };

export interface PackItem {
  id: string;
  /** Names by language code. */
  name: Record<string, string>;
  /** Default width, depth, height (metres). */
  size: [number, number, number];
  electric?: boolean;
  /** On the floor, on the furniture below, on a wall (bottom at wall_y) or hanging from the ceiling. */
  mount?: "floor" | "surface" | "wall" | "ceiling";
  wall_y?: number;
  /** Its top carries other items. */
  surface?: boolean;
  /** A vehicle: offered for parking spots. */
  vehicle?: boolean;
  /** Stairs: cuts a stairwell opening into the floor above when it reaches it. */
  hole?: boolean;
  /** A lamp: how its light spreads. */
  light?: LampModel;
  /** Parts (fractions of the size); a part's `fix` ("w", "d", "h" or several) keeps that measure when the item is resized. */
  parts: PackPart[];
  symbol?: PackSymbol[];
  /** Library (pack format since 1.23): what it is, the rooms it is made for, words that find it. */
  group?: string;
  room?: string[];
  tags?: string[];
  /** Variants of one thing (a table in three lengths) share a family; the variant names the chip, by language. */
  family?: string;
  variant?: Record<string, string>;
}

export interface FurniturePack {
  id: string;
  name: string;
  publisher: string;
  licensee: string | null;
  description?: string;
  /** Release number; a newer release of the same id replaces the installed one. */
  release?: number;
  /** Fingerprint of the installation the pack is bound to (null = any). */
  instance?: string | null;
  /** Pro features the pack unlocks (see features.ts). */
  features?: string[];
  items: PackItem[];
  /** A module (code the shop delivers; see modules.ts) – the code itself is fetched apart. It runs only once an
   * admin approved exactly this code (`approved`); `sha` is the code's fingerprint, `size` its length. */
  module?: { api: number; kind: string; approved?: boolean; size?: number; sha?: string };
  /** A new release of the module code that waits for an admin's approval (the approved one keeps running). */
  pending?: { release: number; size: number; sha: string };
  imported_at?: number;
}

let registry: FurniturePack[] = [];
let items = new Map<string, PackItem>();
let version = 0;

export function setPacks(packs: FurniturePack[]): void {
  registry = packs;
  items = new Map(packs.flatMap((p) => p.items.map((it) => [packType(p.id, it.id), it] as const)));
  version++;
}

export function getPacks(): readonly FurniturePack[] {
  return registry;
}

/** Changes with every setPacks(), to notice new packs. */
export function packsVersion(): number {
  return version;
}

export function packType(packId: string, itemId: string): string {
  return `pack:${packId}:${itemId}`;
}

export function isPackType(type: string): boolean {
  return type.startsWith("pack:");
}

/**
 * Pack items with parts that move with a cover (#511): a motorised curtain opens to both sides, a roll-down projection
 * screen comes down from its roller. The packs stay as they are; NeonPlan knows these items by their id.
 */
export type PackMotion = "curtain" | "screen";

export function packMotion(type: string): PackMotion | null {
  if (!isPackType(type)) return null;
  if (type.endsWith(":curtain_motor")) return "curtain";
  if (type.endsWith(":screen_roll")) return "screen";
  return null;
}

/** The parts that move: the curtain's fabric; the screen's cloth and bottom bar (everything but its roller). */
export function packMovingPart(kind: PackMotion, p: PackPart): boolean {
  return kind === "curtain" ? p.color === "fabric" : p.shape !== "cyl";
}

/**
 * A pack's sensor model (motion, mmWave presence, contact, leak, CO₂, temperature …): it follows a sensor of its own,
 * whatever class the integration gave it (Local Tuya's motion sensors have none, #810).
 */
export function isPackSensor(type: string): boolean {
  if (!isPackType(type)) return false;
  return packItem(type)?.family === "sensor" || /:(\w+_sensor|door_contact|presence_mmwave)$/.test(type);
}

/** A robot vacuum: the built-in dock, or one from a pack (the smart home pack's robot with its dock, #470). */
export function isRobotVacuum(type: string): boolean {
  return type === "robot_vacuum" || (isPackType(type) && type.endsWith(":robot_vacuum"));
}

/**
 * A pack's robot vacuum model shows the dock at the back and the robot in front of it (+z). The robot's own parts
 * are left out of the static model and drive around as the viewer's robot instead (#645).
 */
export function packRobotPart(p: Pick<PackPart, "z">): boolean {
  return p.z > 0.05;
}

/** Where the pack's robot sits in its model: the centre of its largest disc (fraction of the depth; 0.227 when unknown). */
export function packRobotCentre(item: PackItem | undefined): number {
  const discs = (item?.parts ?? []).filter((p) => p.shape === "cyl" && packRobotPart(p));
  if (!discs.length) return 0.227;
  return discs.reduce((a, b) => (b.w * b.d > a.w * a.d ? b : a)).z;
}

/**
 * A pack's heater with hot water (a heat pump's indoor unit, a gas boiler, a buffer tank, a hot water tank): besides a
 * climate entity it takes a water_heater entity like the built-in water heater (#645).
 */
export function isPackHeater(type: string): boolean {
  return isPackType(type) && /:(heat_pump_indoor|gas_boiler|buffer_tank|water_heater)$/.test(type);
}

/** The pack item of a furniture type (undefined for built-in types and removed packs). */
/** Packs that were merged into another one: furniture placed from them keeps working. */
const PACK_ALIASES: Record<string, string> = {
  "mastershort.living_basics": "mastershort.living",
  "mastershort.kitchen_basics": "mastershort.kitchen",
  "mastershort.bedroom_basics": "mastershort.bedroom",
  "mastershort.bath_basics": "mastershort.bath",
};

/** The screen part of a pack item (a TV or monitor), if it has one. */
export function packScreen(type: string): PackPart | undefined {
  return packItem(type)?.parts.find((p) => p.screen);
}

/**
 * A pack item with a real display (a TV, a monitor, a smart display) rather than a small status light (a
 * printer's panel, a wallbox's LED): one of its screen parts is at least 6 cm on both sides of its face.
 */
export function packDisplay(type: string): boolean {
  const item = packItem(type);
  if (!item) return false;
  const [W, D, H] = item.size;
  return item.parts.some((p) => {
    if (!p.screen) return false;
    const [a, b] = [p.w * W, p.d * D, p.h * H].sort((x, y) => y - x);
    return a >= 0.06 && b >= 0.06;
  });
}

export function packItem(type: string): PackItem | undefined {
  if (!isPackType(type)) return undefined;
  const hit = items.get(type);
  if (hit) return hit;
  const [, pack, ...rest] = type.split(":");
  const alias = PACK_ALIASES[pack];
  return alias ? items.get(`pack:${alias}:${rest.join(":")}`) : undefined;
}

/** Default size of any furniture type. */
export function furnitureSize(type: string): [number, number, number] {
  return (FURNITURE_SIZE as Record<string, [number, number, number]>)[type] ?? packItem(type)?.size ?? [0.6, 0.6, 0.8];
}

/** Whether a type can be linked with entities (power sensor, switch …). */
export function isElectric(type: string): boolean {
  // a pack item that only lights (a mirror with light, an aquarium) links a light like any lamp
  return ELECTRIC_FURNITURE.has(type) || !!packItem(type)?.electric || !!packItem(type)?.light;
}

/** Name of a pack item in a language (English, then the first name as fallback). */
export function packItemName(item: PackItem, language: string): string {
  const lang = language.split("-")[0];
  return item.name[lang] ?? item.name.en ?? Object.values(item.name)[0] ?? item.id;
}


// English names of our own packs: a pack file carries one (German) name, the furniture inside both (#224)
const PACK_NAMES_EN: Record<string, string> = {
  architecture: "Architecture & Fit-out",
  bath: "Bathroom",
  bedroom: "Bedroom",
  cinema: "Home Cinema & Hi-Fi",
  exclusive: "Exclusive: Smart Fridge",
  fitness: "Fitness",
  garage: "Garage & Workshop",
  garden: "Garden & Terrace",
  kids: "Kids' Room",
  kitchen: "Kitchen",
  living: "Living Room",
  office: "Office & Gaming",
  pets: "Pets",
  smarthome: "Smart Home & Tech",
  stairs: "Stairs & Railings",
  utility: "Utility & Building Services",
  vehicles: "Vehicles",
  starter: "Starter Pack",
  pro_auto: "Pro: Car Pro",
  pro_timetravel: "Pro: Time travel",
  pro_pool: "Pro: Pool Pro",
  pro_camera: "Pro: Camera Cockpit",
  pro_energy: "Pro: Energy Pro",
  pro_screens: "Pro: Live Screens",
  pro_sound: "Pro: Sound & Cinema",
  pro_weather: "Pro: Weather Outside",
};

/** A pack's name in the user's language: our own packs in English outside German, others as they come. */
export function packName(pack: { id: string; name: string }, language: string): string {
  if (language.split("-")[0] === "de") return pack.name;
  const key = pack.id.replace(/^mastershort\./, "");
  const sample = key.endsWith("_sample");
  const en = PACK_NAMES_EN[sample ? key.slice(0, -"_sample".length) : key];
  return en ? (sample ? `${en} – Sampler` : en) : pack.name;
}

/** Height of the bottom of a pack item, a wall light or an LED strip above the floor (0 for other built-in furniture). */
export function mountBase(floor: Floor, f: Pick<Furniture, "type" | "x" | "z" | "h"> & { mount_y?: number | null; variant?: string | null }): number {
  const item = packItem(f.type);
  if (f.mount_y != null) return f.mount_y;
  // an access point under the ceiling, a slim water heater on the wall (drawn from 0 and lifted by this)
  const tech = techBase(f, floor.height);
  if (tech !== null) return tech;
  // wall lights at the usual height, LED strips just under the ceiling
  if (f.type === "lamp_wall") return WALL_LAMP_Y;
  if (LIFT_SPOTS.has(f.type)) return Math.max(0, floor.height - spotDepth(f.type, f.h));
  if (f.type === "led_strip") return Math.max(0, floor.height - 0.04 - Math.max(0.02, f.h));
  switch (item?.mount) {
    case "surface":
      return groundUnder(floor, f) + surfaceHeight(floor, f.x, f.z, f.h);
    case "wall":
      return item.wall_y ?? 1;
    case "ceiling":
      return Math.max(0, floor.height - f.h);
    default:
      // built-in models: where they are drawn by default (a wall cabinet at 1.45 m)
      if (item) return groundUnder(floor, f);
      return builtinBase(f) || groundUnder(floor, f);
  }
}

/**
 * Where an item standing on the ground stands: 0 in a room, outside on the lawn, terrace or lowered ground beneath
 * it – a bin, a mower or outdoor steps no longer float above a garden lower than the floor (#708).
 */
export function groundUnder(floor: Floor, f: Pick<Furniture, "x" | "z">): number {
  // a floor without rooms has no outside (a plan of free walls only)
  const rooms = floor.rooms.filter((r) => r.points.length >= 3);
  if (!rooms.length || rooms.some((r) => pointInPolygon([f.x, f.z], r.points))) return 0;
  return outdoorGround(floor, f.x, f.z);
}
