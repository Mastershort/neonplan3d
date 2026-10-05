// Data model shared by editor, 3D view and backend (see custom_components/neonplan3d/schema.py).
// Units are metres; x grows to the right, z grows downwards (as in the 2D editor).

import { packItem } from "./packs.ts";
import type { LampModel } from "./viewer/viewer3d.ts";

export type Vec2 = [number, number];

/** Sensors a room's climate is read from (null = automatic, "none" = no value). */
export interface RoomClimate {
  temperature?: string | null;
  humidity?: string | null;
  co2?: string | null;
}

/** A wall height on a room edge, or one per part of a split edge. */
export type WallHeight = number | null | (number | null)[];

export interface Room {
  /** Room temperature, humidity and CO2: chosen sensors instead of the automatic pick. */
  climate?: RoomClimate | null;
  id: string;
  name: string;
  area_id: string | null;
  points: Vec2[];
  floor_material: string;
  /** Entities shown in the room's panel although they are not in the plan. */
  panel?: string[];
  /**
   * Height of the wall on each edge (index = edge points[i] -> points[i + 1]); null = full floor height, 0 = no
   * wall. An edge that other rooms split into parts may carry a list instead: one height per part, in order.
   */
  wall_heights?: WallHeight[];
  /**
   * Split points on each edge (index = edge): distances in metres from points[i] where the wall is cut
   * into parts of their own (each with its own height), e.g. a 2.5 m wall next to a 1.7 m one in line.
   */
  wall_splits?: (number[] | null)[];
}

export type OpeningType = "door" | "window" | "garage";

/** Entity link of an opening: null = assigned automatically by area, "none" = no entity. */
export type EntityRef = string | null;

export interface Opening {
  id: string;
  room_id: string;
  /** Room edge the opening sits on (points[edge] -> points[edge + 1]); 0 in a free wall. */
  edge: number;
  /** Distance of the opening's centre from points[edge], or from the free wall's start (metres). */
  offset: number;
  /** Free wall the opening sits in (its id); room_id is then the room the wall stands in. */
  wall?: string | null;
  width: number;
  type: OpeningType;
  /** Height of the bottom above the floor; 0 for doors, garage doors and terrace doors. */
  sill: number;
  height: number;
  /** Hinge as seen from the room; with two leaves, the side of the main leaf. */
  hinge: "left" | "right";
  /** One leaf, or two (double door, French window) opening from the middle. */
  leaves: 1 | 2;
  /** Doors swing into their room ("in") or to the other side ("out"). */
  swing: "in" | "out";
  /** Look of the door or window (null = automatic: a front door in an exterior wall, else a room door). */
  style?: OpeningStyle | null;
  /** Contact of the second leaf (null = none). */
  contact2: string | null;
  /** Windows: which sensors report the sash (null: a contact, plus a tilt sensor when one is set). */
  sensor?: "contact" | "handle" | "contact_tilt" | null;
  /** The same for the second leaf of a double window, with its own tilt sensor. */
  sensor2?: "contact" | "handle" | "contact_tilt" | null;
  tilt2?: string | null;
  /** A sensor reporting the blind's position while it moves (covers that only report at the end). */
  position?: string | null;
  /** The position sensor counts the other way round (0 = open). */
  position_inverted?: boolean;
  /** Windows: a sensor with the sash's tilt angle (degrees); the sash tilts in 3D as far as it reports. */
  tilt_angle?: EntityRef;
  /** Angle that counts as fully tilted (default 15°), an offset the sensor reports when closed, and the other sign. */
  tilt_max?: number | null;
  tilt_offset?: number | null;
  tilt_invert?: boolean;
  /** Door: drawn closed when no sensor says otherwise (default: half open, so the door is seen). */
  shut?: boolean;
  /** Highlight in 3D while open (null, default) or while closed (a WC or a child's room door). */
  mark?: "closed" | null;
  /** Ask before moving the blind or garage door; it then does not follow a swipe either. */
  confirm?: boolean;
  cover: EntityRef;
  contact: EntityRef;
  tilt: EntityRef;
}

/** A picture rule of a screen: while `entity` is in `state`, the stored image (or a URL) is shown. */
export interface ScreenPicture {
  entity: string;
  /** Compare this attribute (e.g. app_name) instead of the state. */
  attribute?: string | null;
  /** The value to match: exact, or contained in the value's text ("youtube" in "com.google.android.youtube.tv"); "*" = any. */
  state: string;
  /** An image id of the image store, or an http(s) URL. */
  image: string;
}

export interface Furniture {
  /** Fixed against moving by accident. */
  locked?: boolean | null;
  id: string;
  type: string;
  x: number;
  z: number;
  rotation: number;
  w: number;
  d: number;
  h: number;
  variant: string | null;
  /** Own name (e.g. "Wechselrichter Nord"); null = the type's name. */
  name?: string | null;
  /** An own symbol for the marker: a Material Design icon name without "mdi:" (null = by kind). */
  icon?: string | null;
  /** Linked entity, e.g. the TV's media player (null = automatic, "none" = none). */
  entity?: EntityRef;
  /** Power sensor (null = automatic: the linked entity's device or a matching name). */
  power?: EntityRef;
  /** Smart fridge: door sensors of the left (freezer) and right (fridge) door; the doors open in 3D while they report open. */
  door_left?: EntityRef;
  door_right?: EntityRef;
  /** Home battery: its state of charge (%). Wallbox: a status sensor (charging, car plugged in). */
  soc?: EntityRef;
  /** Home battery: a separate sensor with the charging power (W) when the power sensor only reports discharging. */
  charge?: EntityRef;
  /** Meter: a separate sensor with the export power (W) when the power sensor only reports import. */
  export?: EntityRef;
  /** Energie Pro: a glass card over the device with its power now, today's kWh and the day curve. */
  holo?: boolean;
  status?: EntityRef;
  /** Robot vacuum: sensor naming the room it cleans right now (null = automatic, "none" = the dock's room). */
  room_sensor?: EntityRef;
  /** Ask before switching the linked entity. */
  confirm?: boolean;
  /** Its marker in 3D: automatic (null), always shown, shown without watts, or hidden. */
  marker?: MarkerShow | null;
  /** Height of the bottom edge above the floor (null = default: the floor, a pack item's mount, a surface below). */
  mount_y?: number | null;
  /** Screens: pictures shown while an entity is in a state (first match wins; "*" = any state). */
  pictures?: ScreenPicture[];
  /** Screens: what shows around a rule picture – a dark screen (default) or a white one (for dark logos). */
  screen_bg?: "black" | "white";
  /** Parking spots: the vehicle shown (a pack item type) while `entity` reports a car. */
  vehicle?: string | null;
  /** Parking spots: size factor of the vehicle (1 = the pack item's size). */
  scale?: number;
  /** Parking spots: a sensor naming the kind of vehicle, and which vehicle each state means. */
  type_entity?: string | null;
  types?: { state: string; vehicle: string }[];
}

export type LampMount = "ceiling" | "floor" | "table" | "wall";

/** How a device's marker shows in 3D (null = automatic by the marker mode). */
export const MARKER_SHOWS = ["always", "no_power", "never"] as const;
export type MarkerShow = (typeof MARKER_SHOWS)[number];

export interface Placement {
  /** Fixed against moving by accident. */
  locked?: boolean | null;
  entity_id: string;
  x: number;
  z: number;
  /** Height above the floor; null = default for the device kind (and lamp mount). */
  y: number | null;
  /** Lights: how the lamp is mounted; null = ceiling. */
  mount?: LampMount | null;
  /** Turn around the vertical axis (degrees): wall lamps, spots, displays face that way. */
  rotation?: number;
  /** Cameras: opening angle of the field of view (degrees) and how far it reaches (m); null = default. */
  fov?: number | null;
  reach?: number | null;
  /** Cameras: how far it looks down (degrees below the horizon; null = 20° on a wall, 65° as a dome). */
  tilt?: number | null;
  /** Ask before switching this device (3D tap, quick menu, room panel). */
  confirm?: boolean;
  /** Its marker in 3D: automatic (null), always shown, shown without watts, or hidden. */
  marker?: MarkerShow | null;
  /** An own symbol for the marker: a Material Design icon name without "mdi:" (null = by kind). */
  icon?: string | null;
  /** An own name in the plan (null = the entity's name), without renaming the entity in Home Assistant. */
  name?: string | null;
  /** Cameras: show the field-of-view wedge on the floor (null = yes). */
  cone?: boolean | null;
}

export interface Background {
  image_id: string;
  x: number;
  z: number;
  width: number;
  opacity: number;
}

export interface Floor {
  id: string;
  name: string;
  elevation: number;
  height: number;
  cut_height: number;
  rooms: Room[];
  openings: Opening[];
  furniture: Furniture[];
  placements: Placement[];
  background: Background | null;
  outdoor: OutdoorArea[];
  /** Free-standing walls (a partition through half a room); room walls come from the room edges. */
  walls?: FreeWall[];
  /** Linked floor of Home Assistant's floor registry. */
  ha_floor: string | null;
}

/** A wall drawn on its own, from a to b along its centre line. */
export interface FreeWall {
  id: string;
  a: Vec2;
  b: Vec2;
  /** Thickness in metres (null = the interior wall thickness of the settings). */
  thickness?: number | null;
  /** Height in metres (null = full floor height), e.g. a half-height wall or a counter. */
  height?: number | null;
}

/** "custom": the roof is made of sections (wings of an L- or T-shaped house, a barn, a lean-to …). */
export type RoofType = "none" | "flat" | "gable" | "custom";

/** Shapes of a roof section. */
export const ROOF_SHAPES = ["gable", "hip", "halfhip", "pyramid", "mansard", "pent", "flat", "parapet"] as const;
export type RoofShape = (typeof ROOF_SHAPES)[number];

/**
 * One roof section over a rectangle of the plan (at the outer wall faces; the overhang comes on top).
 * Heights are above the ground. Across the ridge, side "a" is the low coordinate (z for a ridge along
 * x, x for a ridge along z), side "b" the high one; each side has its own eave height and pitch, so one
 * slope can reach further down (a catslide over a lower part). A pent roof rises from side a.
 */
export interface RoofSection {
  id: string;
  x0: number;
  z0: number;
  x1: number;
  z1: number;
  shape: RoofShape;
  /** The ridge runs along x or along z. */
  axis: "x" | "z";
  eave_a: number;
  eave_b: number;
  /** Slopes in degrees. */
  pitch_a: number;
  pitch_b: number;
  /** Top of the walls below: gable and knee walls are built from here up to the roof. */
  base: number;
  /** Overhang beyond the walls (null = the roof setting). */
  overhang?: number | null;
  /** Sides a and b swapped: side a is the high coordinate (a pent roof then rises the other way). */
  flip?: boolean;
  /**
   * A flat roof as a free shape: its footprint polygon (plan coordinates at the outer wall faces, the
   * overhang comes on top); x0 … z1 then hold the polygon's bounding box.
   */
  points?: Vec2[] | null;
  /** A dormer: a small section on the slope of another one, open towards that slope at its rear. */
  dormer?: boolean;
  /** Fixed: cannot be moved or resized by accident (the plan lock fixes every section too). */
  locked?: boolean;
  /** A canopy (terrace roof, carport): posts and beams instead of walls, a see-through roof. */
  open?: boolean;
}

export interface RoofSettings {
  type: RoofType;
  /** Slope of a gable roof in degrees. */
  pitch: number;
  /** How far the roof reaches beyond the outer walls (metres). */
  overhang: number;
  /** Gable roof: ridge along the long side (default) or across, along the short side (terraced houses). */
  ridge?: "long" | "short" | null;
  /** Roof sections of a "custom" roof. */
  sections?: RoofSection[];
  /** Solar fields on the roof faces. */
  solar?: SolarField[];
  /** Strings that fields belong to. */
  strings?: SolarString[];
  /** Roof windows on the roof faces. */
  windows?: RoofWindow[];
  /** Energie Pro: the hologram's place and size. */
  hologram?: HologramSettings | null;
  /** Energie Pro: cables laid by hand (the others find their own way). */
  cables?: CableRoute[];
}

/**
 * A field of solar modules on a roof face (see solar.ts): rows × columns from its lower left corner (u along
 * the eave, v up the slope, in metres). On a flat roof the modules stand on frames, tilted by `tilt`.
 */
export interface SolarField {
  id: string;
  /** Roof face: "main:a" / "main:b" / "main:top" (single roof) or "<section id>:a" / ":b" / ":top". */
  face: string;
  u: number;
  v: number;
  rows: number;
  cols: number;
  /** Portrait (default) or landscape modules. */
  portrait: boolean;
  /** Flat roofs: tilt of the frames in degrees (null = 15°). */
  tilt?: number | null;
  /** Flat roofs: the modules lean the other way. */
  flip?: boolean;
  /** PV power sensor of this field, e.g. its string (null = the plant's sensor from the energy settings). */
  entity?: string | null;
  /** Name, e.g. "String 1 south". */
  name?: string | null;
  /** Modules per row when the rows differ (e.g. [4, 4, 3]); null = `cols` in every row. */
  layout?: number[] | null;
  /** Shorter rows sit left, centred or right. */
  align?: "left" | "center" | "right" | null;
  /** Modules left out, as "row:column" (row 0 at the eave). */
  skip?: string[] | null;
  /** Look: full black (default) or classic blue. */
  look?: "black" | "blue" | null;
  /** Module size in portrait, width × height in metres (null = 1.13 × 1.72). */
  module_w?: number | null;
  module_h?: number | null;
  /** Peak power of one module (Wp); null = 400. */
  wp?: number | null;
  /** The string the field belongs to (see RoofSettings.strings); fields on several roofs can share one. */
  string?: string | null;
  /** Free-standing fields (face "ground"): rotation of the rows in the plan, degrees. */
  rotation?: number | null;
  /** Free-standing fields: height of the surface they stand on above the ground floor (a garage roof); null = the ground. */
  base?: number | null;
  /** Fixed: cannot be moved by accident. */
  locked?: boolean;
}

/**
 * A roof window on a roof face (u along the eave, v up the slope, in metres, at its lower left corner). Like a
 * window it follows a contact (open or tilted: the sash swings out at the top) and a blind (cover).
 */
/** Energie Pro: where the hologram hangs – on a solar field, moved along the field and up the slope, scaled. */
export interface HologramSettings {
  /** The field it hangs on (null: the biggest one). */
  field: string | null;
  /** Size factor (1 = normal). */
  size: number;
  /** Offset from the field's middle along the eave (m, + = right) and up the slope (m). */
  right: number;
  up: number;
}

export const DEFAULT_HOLOGRAM: HologramSettings = { field: null, size: 1, right: 0, up: 0 };

/**
 * Energie Pro: a cable laid by hand. Its id names the cable ("solar:<field>", "inv:<inverter>", "bat:<battery>",
 * "grid"); the points are its way in the plan, run at `height` above the given floor.
 */
export interface CableRoute {
  id: string;
  floor_id: string;
  points: Vec2[];
  height: number;
  /** Fixed: its points cannot be moved by accident. */
  locked?: boolean;
}

export interface RoofWindow {
  id: string;
  face: string;
  u: number;
  v: number;
  /** Size in metres (null = 0.78 × 1.18, a common size). */
  w?: number | null;
  h?: number | null;
  cover?: EntityRef;
  contact?: EntityRef;
  tilt?: EntityRef;
  /** A window motor (a cover whose position opens the sash that far). */
  window?: EntityRef;
  name?: string | null;
  /** Fixed: cannot be moved by accident. */
  locked?: boolean;
}

/** A string of solar modules: one or more fields wired together to one inverter. */
export interface SolarString {
  id: string;
  name: string;
  /** PV power sensor of the string. */
  entity?: string | null;
  /** The inverter it feeds (an "inverter" furniture item). */
  inverter?: string | null;
}

export interface BuildingSettings {
  wall_exterior: number;
  wall_interior: number;
  grid: number;
  /** Direction of north in the plan, degrees clockwise from "up" (for the sun). */
  north: number;
  roof: RoofSettings;
  /** The weather entity shown outside the house (null = the first one). */
  weather_entity?: string | null;
  /** Which weather effects the 3D view shows (null = all but fog). */
  weather_effects?: WeatherEffect[] | null;
  /** Warning for a window open while it rains (default on). */
  rain_warning?: boolean;
  /** Plan lock: rooms, walls, doors, windows and outdoor areas cannot be moved by accident. */
  lock_plan?: boolean;
  /** The camera the house view opens with (3D view, card, kiosk); null = fitted from the front left. */
  start_view?: StartView | null;
}

/** A camera position around the house: azimuth and polar angle (radians) and the distance (m). */
export interface StartView {
  theta: number;
  phi: number;
  radius: number;
}

/**
 * Whether an item is fixed: rooms, walls, doors, windows and outdoor areas follow the plan lock alone,
 * furniture and devices their own lock.
 */
export function isFixed(item: object | null | undefined, structural: boolean, settings: Pick<BuildingSettings, "lock_plan">): boolean {
  if (!item) return false;
  return structural ? !!settings.lock_plan : !!(item as { locked?: boolean | null }).locked;
}

export const WEATHER_EFFECTS = ["rain", "snow", "fog", "clouds", "lightning", "sky"] as const;
export type WeatherEffect = (typeof WEATHER_EFFECTS)[number];
/** The effects shown when the plan does not say: everything but fog (fog greys the whole scene). */
export const DEFAULT_WEATHER_EFFECTS: WeatherEffect[] = ["rain", "snow", "clouds", "lightning", "sky"];

export const OUTDOOR_TYPES = ["lawn", "terrace", "path", "driveway", "pool", "bed", "hedge", "fence"] as const;
export type OutdoorType = (typeof OUTDOOR_TYPES)[number];

/** Top of each kind of outdoor area above ground level (pool: its water, below). */
export const OUTDOOR_TOP: Record<OutdoorType, number> = {
  lawn: 0.012,
  terrace: 0.12,
  path: 0.02,
  driveway: 0.02,
  pool: -0.25,
  bed: 0.15,
  hedge: 1.2,
  fence: 1.0,
};

/** Ground level in floor coordinates: below the ground floor slab (0.2 m), the floor itself further up. */
export function groundLevel(floor: Floor): number {
  return floor.elevation > 0.3 ? 0 : -0.2;
}

/** Height outdoor lamps stand on at a point: ground level, or the top of a terrace or bed there. */
export function outdoorGround(floor: Floor, x: number, z: number): number {
  const a = (floor.outdoor ?? []).find((o) => o.type !== "hedge" && o.type !== "fence" && o.type !== "pool" && pointInPolygon([x, z], o.points));
  return groundLevel(floor) + (a ? OUTDOOR_TOP[a.type] : 0);
}

/** Area outside the house (lawn, terrace, pool, hedge …), drawn like a room. */
export interface OutdoorArea {
  id: string;
  type: OutdoorType;
  points: Vec2[];
}

/** Energy flow: meter position and power sensors (W). Grid positive = import, battery positive = discharging. */
export interface EnergySettings {
  meter: { floor_id: string; x: number; z: number } | null;
  grid: string | null;
  grid_invert: boolean;
  solar: string | null;
  battery: string | null;
  battery_invert: boolean;
  battery_soc: string | null;
  /** House consumption (W); null = from the balance of grid, solar and battery. */
  consumption: string | null;
  tariff: string | null;
}

/** A person and the sensor whose state names the room they are in (ESPresense, Bermuda, …). */
export interface PresenceLink {
  person: string;
  sensor: string | null;
}

export interface Building {
  version: 1;
  floors: Floor[];
  settings: BuildingSettings;
  energy: EnergySettings;
  presence: PresenceLink[];
}

export const DEFAULT_ENERGY: EnergySettings = {
  meter: null,
  grid: null,
  grid_invert: false,
  solar: null,
  battery: null,
  battery_invert: false,
  battery_soc: null,
  consumption: null,
  tariff: null,
};

export const FLOOR_MATERIALS = ["wood", "oak", "tiles", "carpet", "stone", "concrete"] as const;

export const DEFAULT_ROOF: RoofSettings = { type: "none", pitch: 35, overhang: 0.4 };

export const DEFAULT_SETTINGS: BuildingSettings = { wall_exterior: 0.24, wall_interior: 0.12, grid: 0.05, north: 0, roof: { ...DEFAULT_ROOF } };

export function emptyBuilding(): Building {
  return { version: 1, floors: [], settings: { ...DEFAULT_SETTINGS }, energy: { ...DEFAULT_ENERGY }, presence: [] };
}

export function newFloor(id: string, name: string, elevation: number): Floor {
  return {
    id,
    name,
    elevation,
    height: 2.5,
    cut_height: 1.15,
    rooms: [],
    openings: [],
    furniture: [],
    placements: [],
    background: null,
    outdoor: [],
    walls: [],
    ha_floor: null,
  };
}

/** Storey height used to place floors created from Home Assistant levels. */
export const LEVEL_HEIGHT = 2.75;

/** Where a new floor goes: at its Home Assistant level if known, otherwise on top. */
export function floorElevation(floors: Floor[], level: number | null | undefined): number {
  if (level != null && Number.isFinite(level)) return Math.round(level * LEVEL_HEIGHT * 100) / 100;
  const top = floors.reduce<Floor | null>((t, f) => (!t || f.elevation > t.elevation ? f : t), null);
  return top ? Math.round((top.elevation + top.height + 0.25) * 100) / 100 : 0;
}

/**
 * Rooms for areas as 4 × 3 m tiles in rows beside a floor's existing rooms, to be dragged into place
 * and resized.
 */
export function roomTiles(floor: Floor, areas: { area_id: string; name: string }[], id: () => string): Room[] {
  const xs = floor.rooms.flatMap((r) => r.points.map((p) => p[0]));
  const zs = floor.rooms.flatMap((r) => r.points.map((p) => p[1]));
  const x0 = xs.length ? Math.ceil(Math.max(...xs)) + 1 : 0;
  const z0 = zs.length ? Math.floor(Math.min(...zs)) : 0;
  return areas.map((a, i) => {
    const x = x0 + (i % 3) * 4.5;
    const z = z0 + Math.floor(i / 3) * 3.5;
    return { id: id(), name: a.name, area_id: a.area_id, points: [[x, z], [x + 4, z], [x + 4, z + 3], [x, z + 3]] as Vec2[], floor_material: "wood" };
  });
}

/**
 * Resizes a furniture item by dragging one corner (`corner`: signs of the corner in the item's own
 * frame) to a plan point; the opposite corner stays in place. Sizes snap to `grid`.
 */
export function resizeFurniture(f: Furniture, corner: [1 | -1, 1 | -1], p: Vec2, grid: number): Pick<Furniture, "x" | "z" | "w" | "d"> {
  const a = (f.rotation * Math.PI) / 180;
  const c = Math.cos(a);
  const s = Math.sin(a);
  const [sx, sz] = corner;
  // item axes in the plan: local x → (c, s), local z → (-s, c)
  const ax = f.x - sx * (f.w / 2) * c + sz * (f.d / 2) * s;
  const az = f.z - sx * (f.w / 2) * s - sz * (f.d / 2) * c;
  const dx = p[0] - ax;
  const dz = p[1] - az;
  const snapSize = (v: number) => Math.max(0.1, Math.round(v / grid) * grid);
  const w = snapSize((dx * c + dz * s) * sx);
  const d = snapSize((-dx * s + dz * c) * sz);
  const r = (v: number) => Math.round(v * 1000) / 1000;
  return { x: r(ax + sx * (w / 2) * c - sz * (d / 2) * s), z: r(az + sx * (w / 2) * s + sz * (d / 2) * c), w: r(w), d: r(d) };
}

export const FURNITURE_TYPES = [
  "lamp_ceiling",
  "lamp_downlight",
  "lamp_spot",
  "lamp_panel",
  "lamp_pendant",
  "lamp_floor",
  "lamp_table",
  "lamp_wall",
  "led_strip",
  "lamp_uplight",
  "lamp_bollard",
  "lamp_garden",
  "radiator",
  "sofa",
  "armchair",
  "stool",
  "coffee_table",
  "tv_board",
  "tv_wall",
  "sideboard",
  "shelf",
  "plant",
  "rug",
  "table",
  "table_round",
  "chair",
  "bench",
  "corner_bench",
  "bar_stool",
  "kitchen",
  "kitchen_wall",
  "kitchen_tall",
  "island",
  "worktop",
  "sink",
  "stove",
  "dishwasher",
  "fridge",
  "bed",
  "bunk_bed",
  "nightstand",
  "wardrobe",
  "dresser",
  "bathtub",
  "shower",
  "wc",
  "washbasin",
  "washer",
  "dryer",
  "desk",
  "office_chair",
  "tall_cabinet",
  "coat_rack",
  "stairs",
  "robot_vacuum",
  "inverter",
  "home_battery",
  "wallbox",
  "meter",
  "grid_point",
  "parking",
  "fridge_smart",
  "stairwell",
] as const;

/** Furniture library sections (the editor lists them in this order). */
export const FURNITURE_GROUPS: Record<string, FurnitureType[]> = {
  lights: ["lamp_ceiling", "lamp_downlight", "lamp_spot", "lamp_panel", "lamp_pendant", "lamp_floor", "lamp_uplight", "lamp_table", "lamp_wall", "led_strip", "lamp_bollard", "lamp_garden"],
  living: ["sofa", "armchair", "stool", "coffee_table", "tv_board", "tv_wall", "sideboard", "shelf", "plant", "rug"],
  dining: ["table", "table_round", "chair", "bench", "corner_bench", "bar_stool"],
  kitchen: ["kitchen", "kitchen_wall", "kitchen_tall", "island", "worktop", "sink", "stove", "dishwasher", "fridge"],
  sleeping: ["bed", "bunk_bed", "nightstand", "wardrobe", "dresser"],
  bath: ["bathtub", "shower", "wc", "washbasin", "washer", "dryer"],
  work: ["desk", "worktop", "office_chair", "tall_cabinet", "coat_rack", "radiator", "stairs", "robot_vacuum"],
  vehicles: ["parking"],
};

/** Energy devices: placed and set up in the Energy tool (stored like furniture, not in the library). */
export const ENERGY_DEVICES = ["meter", "inverter", "home_battery", "wallbox", "grid_point"] as const;

/** Furniture that can show a linked entity (TV state, power, …). */
/** Lamps: drawn live (they glow with their light) and tapped directly in 3D. */
export const LAMP_TYPES = new Set<string>([
  "lamp_ceiling",
  "lamp_downlight",
  "lamp_spot",
  "lamp_panel",
  "lamp_pendant",
  "lamp_floor",
  "lamp_uplight",
  "lamp_table",
  "lamp_wall",
  "led_strip",
  "lamp_bollard",
  "lamp_garden",
]);

/** Default height of the bottom of a wall light above the floor (metres). */
export const WALL_LAMP_Y = 1.75;

/** Items that can be lifted off the floor (a wall cabinet, a shelf, a wall light, an LED strip): everything but lamps hung from the ceiling and the ceiling-mounted pack items. */
export function canLift(f: Pick<Furniture, "type">): boolean {
  if (["lamp_ceiling", "lamp_downlight", "lamp_spot", "lamp_panel", "lamp_pendant", "stairs", "stairwell", "parking"].includes(f.type)) return false;
  return packItem(f.type)?.mount !== "ceiling";
}

export function isLamp(type: string): boolean {
  return LAMP_TYPES.has(type) || !!packItem(type)?.light;
}

/** Furniture a table lamp can stand on. */
const SURFACES = new Set<string>([
  "table",
  "table_round",
  "coffee_table",
  "desk",
  "nightstand",
  "sideboard",
  "dresser",
  "kitchen",
  "island",
  "worktop",
  "tv_board",
  "dishwasher",
  "washer",
  "dryer",
]);

/**
 * Positions of a rows × cols grid of lamps in a room: cells of equal size over the room's bounding box,
 * one lamp per cell centre that lies inside the room (L-shaped rooms simply leave cells out).
 */
export function spotGrid(room: Room, rows: number, cols: number, inset = 0): Vec2[] {
  const b = bounds(room.points);
  const w = b.x1 - b.x0 - 2 * inset;
  const d = b.z1 - b.z0 - 2 * inset;
  const out: Vec2[] = [];
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const p: Vec2 = [Math.round((b.x0 + inset + (w / cols) * (c + 0.5)) * 1000) / 1000, Math.round((b.z0 + inset + (d / rows) * (r + 0.5)) * 1000) / 1000];
      if (pointInPolygon(p, room.points)) out.push(p);
    }
  }
  return out;
}

export type Direction = "right" | "down" | "left" | "up";

/** Point `length` metres from `p` in a plan direction (right = +x, down = +z, as in the editor). */
export function step(p: Vec2, length: number, dir: Direction): Vec2 {
  const r = (v: number) => Math.round(v * 1000) / 1000;
  const [dx, dz] = { right: [1, 0], down: [0, 1], left: [-1, 0], up: [0, -1] }[dir];
  return [r(p[0] + dx * length), r(p[1] + dz * length)];
}

/** Height of the highest furniture top under a point (0 = the floor). */
/**
 * Height of the bottom of a built-in model as drawn (a wall cabinet hangs at 1.45 m, a wall TV is
 * centred at 1.3 m, a radiator stands on short brackets); the mount height replaces it.
 */
export function builtinBase(f: Pick<Furniture, "type" | "h"> & { variant?: string | null }): number {
  switch (f.type) {
    case "home_battery":
      // a wall battery hangs at hip height
      return f.variant === "wall" ? 0.5 : 0;
    case "kitchen_wall":
      return 1.45;
    case "tv_wall":
      return Math.max(0, 1.3 - f.h / 2);
    case "radiator":
      return 0.12;
    case "inverter":
      return 1.1;
    case "wallbox":
      return 1.0;
    case "meter":
      return 0.4;
    default:
      return 0;
  }
}

export function surfaceHeight(floor: Floor, x: number, z: number): number {
  let top = 0;
  for (const f of floor.furniture) {
    if (!(SURFACES.has(f.type) || packItem(f.type)?.surface) || !pointInPolygon([x, z], furnitureFootprint(f))) continue;
    top = Math.max(top, f.h);
  }
  return top;
}

export const ELECTRIC_FURNITURE = new Set<string>([
  ...LAMP_TYPES,
  "radiator",
  "robot_vacuum",
  "inverter",
  "home_battery",
  "wallbox",
  "meter",
  "tv_board",
  "tv_wall",
  "desk",
  "fridge",
  "fridge_smart",
  "stove",
  "kitchen_tall",
  "dishwasher",
  "washer",
  "dryer",
  "kitchen",
  "island",
  "sink",
]);

export type FurnitureType = (typeof FURNITURE_TYPES)[number];

/** Default size (width x, depth z, height) of new furniture in metres. */
export const FURNITURE_SIZE: Record<FurnitureType, [number, number, number]> = {
  sofa: [2.2, 0.9, 0.82],
  armchair: [0.85, 0.85, 0.8],
  table: [1.6, 0.9, 0.75],
  chair: [0.46, 0.5, 0.9],
  bed: [1.6, 2.05, 0.9],
  nightstand: [0.45, 0.4, 0.5],
  wardrobe: [1.8, 0.6, 2.1],
  shelf: [0.9, 0.35, 1.9],
  kitchen: [2.4, 0.62, 0.92],
  // a worktop on its own (over a gap, on self-built desk pedestals): the height is its top edge
  worktop: [1.2, 0.62, 0.91],
  // solar inverter and wallbox hang on the wall, the home battery stands on the floor
  inverter: [0.5, 0.2, 0.65],
  home_battery: [0.6, 0.25, 1.1],
  wallbox: [0.3, 0.15, 0.42],
  // the meter cabinet hangs on the wall as well
  meter: [0.55, 0.21, 1.1],
  // the grid connection: a small street cabinet at the edge of the plot
  grid_point: [0.4, 0.22, 0.6],
  fridge: [0.6, 0.65, 1.8],
  fridge_smart: [0.91, 0.73, 1.78],
  stairwell: [1.0, 2.6, 0.02],
  stove: [0.6, 0.62, 0.92],
  sink: [0.9, 0.62, 0.92],
  bathtub: [1.7, 0.75, 0.58],
  shower: [0.9, 0.9, 2.0],
  wc: [0.38, 0.6, 0.8],
  washbasin: [0.6, 0.46, 0.85],
  desk: [1.4, 0.7, 0.75],
  tv_board: [1.8, 0.42, 0.5],
  plant: [0.45, 0.45, 1.1],
  rug: [2.0, 1.4, 0.01],
  stairs: [1.0, 3.2, 2.75],
  stool: [0.55, 0.55, 0.42],
  lamp_ceiling: [0.4, 0.4, 0.08],
  lamp_downlight: [0.1, 0.1, 0.02],
  lamp_spot: [0.1, 0.1, 0.14],
  lamp_panel: [0.6, 0.6, 0.03],
  lamp_uplight: [0.35, 0.35, 1.8],
  lamp_bollard: [0.16, 0.16, 0.8],
  lamp_garden: [0.12, 0.12, 0.3],
  radiator: [1.0, 0.1, 0.6],
  robot_vacuum: [0.36, 0.5, 0.1],
  parking: [2.6, 5.2, 0.02],
  lamp_pendant: [0.4, 0.4, 0.8],
  lamp_floor: [0.4, 0.4, 1.7],
  lamp_table: [0.28, 0.28, 0.45],
  lamp_wall: [0.22, 0.12, 0.2],
  led_strip: [2.0, 0.04, 0.03],
  coffee_table: [1.1, 0.6, 0.42],
  tv_wall: [1.3, 0.08, 0.75],
  sideboard: [1.6, 0.45, 0.8],
  table_round: [1.1, 1.1, 0.75],
  bench: [1.4, 0.45, 0.85],
  corner_bench: [2.0, 1.6, 0.9],
  bar_stool: [0.42, 0.42, 0.75],
  kitchen_wall: [0.8, 0.35, 0.7],
  kitchen_tall: [0.6, 0.62, 2.1],
  island: [1.8, 0.9, 0.92],
  dishwasher: [0.6, 0.62, 0.92],
  bunk_bed: [1.0, 2.05, 1.65],
  dresser: [1.0, 0.5, 0.9],
  washer: [0.6, 0.6, 0.85],
  dryer: [0.6, 0.6, 0.85],
  office_chair: [0.65, 0.65, 1.1],
  tall_cabinet: [0.6, 0.6, 2.1],
  coat_rack: [1.0, 0.35, 1.9],
};

export const OPENING_DEFAULTS = {
  door: { width: 0.9, sill: 0, height: 2.05 },
  window: { width: 1.2, sill: 0.9, height: 1.3 },
  garage: { width: 2.5, sill: 0, height: 2.1 },
} as const;

/** Kinds of openings offered when placing one; a terrace door is a window down to the floor. */
/** Door looks: room doors, front doors (with glass, one or two sidelights), a glass door, a sliding door. */
export const DOOR_STYLES = ["interior", "front", "front_glass", "sidelight", "sidelights", "glass", "sliding", "passage"] as const;
export const WINDOW_STYLES = ["standard", "bars"] as const;
export type OpeningStyle = (typeof DOOR_STYLES)[number] | (typeof WINDOW_STYLES)[number];

/** The style an opening is drawn with: its own, or the automatic one for its wall. */
export function openingStyle(o: Pick<Opening, "type" | "style">, exterior: boolean): OpeningStyle {
  if (o.type === "door") return o.style && (DOOR_STYLES as readonly string[]).includes(o.style) ? o.style : exterior ? "front" : "interior";
  return o.style && (WINDOW_STYLES as readonly string[]).includes(o.style) ? o.style : "standard";
}

/** A front door look (thick leaf, threshold, light above it). */
export function isFrontDoor(style: OpeningStyle): boolean {
  return style === "front" || style === "front_glass" || style === "sidelight" || style === "sidelights";
}

export const OPENING_PRESETS = {
  door: { type: "door", leaves: 1, width: 0.9, sill: 0, height: 2.05, style: "interior" },
  front: { type: "door", leaves: 1, width: 1.0, sill: 0, height: 2.1, style: "front" },
  door_double: { type: "door", leaves: 2, width: 1.6, sill: 0, height: 2.05 },
  window: { type: "window", leaves: 1, width: 1.2, sill: 0.9, height: 1.3 },
  window_double: { type: "window", leaves: 2, width: 1.6, sill: 0.9, height: 1.3 },
  terrace: { type: "window", leaves: 1, width: 1.0, sill: 0, height: 2.1 },
  terrace_double: { type: "window", leaves: 2, width: 1.8, sill: 0, height: 2.1 },
  garage: { type: "garage", leaves: 1, width: 2.5, sill: 0, height: 2.1 },
} as const satisfies Record<string, { type: OpeningType; leaves: 1 | 2; width: number; sill: number; height: number; style?: OpeningStyle }>;

export type OpeningPreset = keyof typeof OPENING_PRESETS;

/** The preset an opening matches (by type, leaves, style and whether it reaches the floor). */
export function openingPreset(o: Pick<Opening, "type" | "leaves" | "sill" | "style">): OpeningPreset {
  if (o.type === "garage") return "garage";
  const two = o.leaves === 2;
  if (o.type === "door") {
    if (!two && o.style && isFrontDoor(o.style)) return "front";
    return two ? "door_double" : "door";
  }
  if (o.sill < 0.1) return two ? "terrace_double" : "terrace";
  return two ? "window_double" : "window";
}

/** Fill fields added in later versions so older saved buildings keep working. */
export function normalizeBuilding(b: Building): Building {
  b.energy = { ...DEFAULT_ENERGY, ...(b.energy ?? {}) };
  b.presence = b.presence ?? [];
  b.settings = { ...DEFAULT_SETTINGS, ...b.settings, roof: { ...DEFAULT_ROOF, ...(b.settings?.roof ?? {}) } };
  for (const f of b.floors) {
    f.outdoor = f.outdoor ?? [];
    f.walls = f.walls ?? [];
    f.rooms = f.rooms.map((r) => ({ ...r, panel: r.panel ?? [] }));
    f.ha_floor = f.ha_floor ?? null;
    f.placements = f.placements.map((p) => ({ ...p, mount: p.mount ?? null, rotation: p.rotation ?? 0 }));
    f.furniture = f.furniture.map((m) => ({ ...m, entity: m.entity ?? null, power: m.power ?? null }));
    // lights placed as devices (before lamps existed) become lamps of their mount type
    const lights = f.placements.filter((p) => p.entity_id.startsWith("light."));
    if (lights.length) {
      const type: Record<LampMount, FurnitureType> = { ceiling: "lamp_ceiling", floor: "lamp_floor", table: "lamp_table", wall: "lamp_wall" };
      for (const p of lights) {
        const t = type[p.mount ?? "ceiling"];
        const [w, d, h] = FURNITURE_SIZE[t];
        f.furniture.push({ id: `lamp_${p.entity_id.slice(6).replace(/[^A-Za-z0-9_\-.]/g, "_")}`.slice(0, 64), type: t, x: p.x, z: p.z, rotation: 0, w, d, h, variant: null, entity: p.entity_id, power: null });
      }
      f.placements = f.placements.filter((p) => !p.entity_id.startsWith("light."));
    }
    f.openings = f.openings.map((o) => ({
      ...o,
      hinge: o.hinge ?? "left",
      leaves: o.leaves ?? 1,
      swing: o.swing ?? "in",
      style: o.style ?? null,
      cover: o.cover ?? null,
      contact: o.contact ?? null,
      contact2: o.contact2 ?? null,
      tilt: o.tilt ?? null,
    }));
  }
  return b;
}

export function uid(prefix: string): string {
  return `${prefix}_${Math.random().toString(36).slice(2, 10)}`;
}

/** Signed area (positive = counter-clockwise in x/z maths orientation). */
export function signedArea(points: readonly Vec2[]): number {
  let a = 0;
  for (let i = 0; i < points.length; i++) {
    const [x0, z0] = points[i];
    const [x1, z1] = points[(i + 1) % points.length];
    a += x0 * z1 - x1 * z0;
  }
  return a / 2;
}

export function polygonArea(points: readonly Vec2[]): number {
  return Math.abs(signedArea(points));
}

/** Area-weighted centroid; falls back to the vertex average for degenerate polygons. */
export function centroid(points: readonly Vec2[]): Vec2 {
  const a = signedArea(points);
  if (Math.abs(a) < 1e-9) {
    const n = points.length || 1;
    return [points.reduce((s, p) => s + p[0], 0) / n, points.reduce((s, p) => s + p[1], 0) / n];
  }
  let cx = 0;
  let cz = 0;
  for (let i = 0; i < points.length; i++) {
    const [x0, z0] = points[i];
    const [x1, z1] = points[(i + 1) % points.length];
    const f = x0 * z1 - x1 * z0;
    cx += (x0 + x1) * f;
    cz += (z0 + z1) * f;
  }
  return [cx / (6 * a), cz / (6 * a)];
}

/** True when the polygon is an axis-aligned rectangle (so the editor can offer x/z/width/depth fields). */
export function isAxisRect(points: readonly Vec2[]): boolean {
  if (points.length !== 4) return false;
  for (let i = 0; i < 4; i++) {
    const [x0, z0] = points[i];
    const [x1, z1] = points[(i + 1) % 4];
    if (Math.abs(x0 - x1) > 1e-6 && Math.abs(z0 - z1) > 1e-6) return false;
  }
  return true;
}

export function bounds(points: readonly Vec2[]): { x0: number; z0: number; x1: number; z1: number } {
  let x0 = Infinity;
  let z0 = Infinity;
  let x1 = -Infinity;
  let z1 = -Infinity;
  for (const [x, z] of points) {
    x0 = Math.min(x0, x);
    z0 = Math.min(z0, z);
    x1 = Math.max(x1, x);
    z1 = Math.max(z1, z);
  }
  return { x0, z0, x1, z1 };
}

/** Corners of a furniture item in world x/z (rotated rectangle). */
export function furnitureFootprint(f: Furniture): Vec2[] {
  const a = (f.rotation * Math.PI) / 180;
  const c = Math.cos(a);
  const s = Math.sin(a);
  const hw = f.w / 2;
  const hd = f.d / 2;
  return [
    [-hw, -hd],
    [hw, -hd],
    [hw, hd],
    [-hw, hd],
  ].map(([x, z]) => [f.x + x * c - z * s, f.z + x * s + z * c] as Vec2);
}

export function pointInPolygon(p: Vec2, points: readonly Vec2[]): boolean {
  let inside = false;
  for (let i = 0, j = points.length - 1; i < points.length; j = i++) {
    const [xi, zi] = points[i];
    const [xj, zj] = points[j];
    if (zi > p[1] !== zj > p[1] && p[0] < ((xj - xi) * (p[1] - zi)) / (zj - zi) + xi) inside = !inside;
  }
  return inside;
}

/** 3D model of each lamp type. */
export const LAMP_MODEL: Record<string, LampModel> = {
  lamp_ceiling: "ceiling",
  lamp_downlight: "downlight",
  lamp_spot: "spot",
  lamp_panel: "panel",
  lamp_uplight: "uplight",
  lamp_bollard: "bollard",
  lamp_garden: "garden",
  lamp_pendant: "pendant",
  lamp_floor: "floor",
  lamp_table: "table",
  lamp_wall: "wall",
  led_strip: "strip",
};
