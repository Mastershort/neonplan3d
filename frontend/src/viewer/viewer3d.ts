// 3D view (separate bundle, loaded on demand). Renders only when something changes.
//
// Floors are shown in three levels: the whole house (floors pulled apart or stacked), one floor
// (floors above fly up and fade out, floors below stay as a dim reference) and one room (camera
// flight into it). Each floor is a group with its own materials so its height and opacity can be
// animated independently.

import {
  AdditiveBlending,
  RingGeometry,
  FogExp2,
  CircleGeometry,
  Box3,
  CanvasTexture,
  ClampToEdgeWrapping,
  Color,
  BackSide,
  DoubleSide,
  FrontSide,
  Group,
  LineBasicMaterial,
  LineSegments,
  Mesh,
  MeshBasicMaterial,
  MultiplyBlending,
  OrthographicCamera,
  PerspectiveCamera,
  Points,
  PointsMaterial,
  PlaneGeometry,
  Raycaster,
  RepeatWrapping,
  Scene,
  SRGBColorSpace,
  TextureLoader,
  type Texture,
  Float32BufferAttribute,
  Uint32BufferAttribute,
  DynamicDrawUsage,
  BufferGeometry as Geometry,
  Vector2,
  Vector3,
  WebGLRenderer,
  WebGLRenderTarget,
  type BufferGeometry,
  type Material,
} from "three";
import type { Building, Floor, Furniture, Room, StartView } from "../model.ts";
import { recolorLamps, SHADE_SENTINEL, shadeFactors } from "./lamp-colors.ts";
import { centroid, GANG_TYPES, outdoorZones, pointInPolygon, openingStyle, setTerrain, WALL_LAMP_Y, zonesOf } from "../model.ts";
import { placeWallPlate } from "../geometry/walls.ts";
import { buildEarth } from "./earth.ts";
import { clampIntoRoom } from "../geometry/snap.ts";
import { activeSections, roofRider, roofUnderAt, sectionAbove, sectionCutsBelow } from "../roof-sections.ts";
import { buildFloorGeometry, SLAB, stairHoleParts, type FloorGeometry } from "./build.ts";
import { OrbitControls, type OrbitView } from "./controls.ts";
import { makeFoldable, type FoldMasks } from "./fold.ts";
import { CameraProjections, PROJECTION_LAYER, type ProjectionSurface, type ProjectorPose } from "./projection.ts";
import { packGlowCentre, pushAwning, pushCameraModel, pushPackGlow, pushPackRobot, pushPackLamp, pushPackMotion, screenRect, screenPictureSize, pushFridgeDoors, setLightLook, hasFixedColors } from "./furniture.ts";
import { pushPipeTube, type PipeTube } from "./pipes.ts";
// the walk through the house at eye height (lives with the viewer it drives)
export { FloorMap, WalkCamera, type WalkState } from "./walk.ts";

/** three.js classes lent to the fun packs' bundle (so it carries no copy of three.js). */
export const funLib = { Group, Mesh, MeshBasicMaterial, CanvasTexture, Color, PlaneGeometry, BufferGeometry: Geometry, Float32BufferAttribute, DoubleSide };

export type { PipeTube };
import { groundUnder, isCooktopZone, mountBase, packItem, packMotion, setPacks, type FurniturePack } from "../packs.ts";
import { withVehicles } from "../parking.ts";
import { buildRoof, type RoofGeometry, type RoofWindowState } from "./roof.ts";
import { SunFx } from "./sun-fx.ts";
import { houseShadow, shadowBox } from "./sun-shadow.ts";
import type { SunPath } from "../sun-path.ts";
import { GROUND, groundFace, groundFloor, roofFaces, roofWindowRoom, wallFaces } from "../solar.ts";
import { buildSolarLive, solarLiveMaterial, writeSolarLevels, type SolarLive } from "./solar-live.ts";
import { buildPools, disposePools, type PoolPiece } from "./pool-water.ts";
import { accentOnUniform, accentUniform, parseAccent, lineBlending, themed, themeIndex, type Theme, type ThemeUniform } from "./theme.ts";

export type { Theme } from "./theme.ts";
import { ALWAYS, DEG, GeoBuffer, LineBuffer, pushPrism, triangulate } from "./geo.ts";
import { buildLightSurface, lightColors, roomIndexAt, type LightKind, type LightSource, type LightSurface, zoneOf } from "./lighting.ts";
import { buildOpeningParts, CLOSED, type OpeningState } from "./openings.ts";
import { circlePath, cleaningPath, stepRobot, type RobotInfo, type RobotMotion } from "./robot.ts";
import { decorDelay, lowEndDevice, petDelay } from "./pace.ts";

export type { RobotInfo } from "./robot.ts";

/** Colour of a robot's light by what it does. */
const ROBOT_LED: Record<RobotInfo["mode"], number> = { cleaning: 0x37e0ff, returning: 0xffb547, docked: 0x41c46b, idle: 0x5b7cff, error: 0xff3b4f };

export type { OpeningState } from "./openings.ts";

export type Quality = "auto" | "low" | "high";
export type WallMode = "auto" | "cut";

export interface ViewerOptions {
  quality?: Quality;
  /** Pull floors apart in the house view (default true). */
  explode?: boolean;
  onRoomTap?: (floorId: string, roomId: string | null) => void;
  onFloorTap?: (floorId: string) => void;
  onBack?: () => void;
  /** Short tap on a device marker. */
  onDeviceTap?: (entityId: string, x: number, y: number) => void;
  /** Double tap on a room of the opened floor (without it, a double tap goes one level back). */
  onRoomDoubleTap?: (floorId: string, roomId: string) => void;
  /** Long press on a device marker. */
  onDeviceHold?: (entityId: string, x: number, y: number) => void;
  /**
   * Vertical swipe on a device (dim a lamp, move a blind): "start" returns whether the device takes
   * it; "move" reports the distance from the start (pixels, down positive).
   */
  onDeviceSwipe?: (entityId: string, phase: "start" | "move" | "end", dy: number, x: number, y: number) => boolean | void;
  /** Furnishing in 3D: a device was selected (null: none) or dragged to a new place. */
  onDeviceSelect?: (entityId: string | null) => void;
  onDeviceMove?: (entityId: string, x: number, z: number) => void;
  /** Furnishing in 3D: an item was selected (null: none) or dragged to a new place. */
  onFurnitureSelect?: (furnitureId: string | null) => void;
  onFurnitureMove?: (furnitureId: string, x: number, z: number) => void;
  onStats?: (stats: ViewerStats) => void;
  /** Text for the floor labels in the house view, e.g. "5 rooms". */
  floorInfo?: (floor: Floor) => string;
}

/** A device shown in the 3D view (prepared by the main bundle from placements and states). */
export interface DeviceMarker {
  /** entity_id */
  id: string;
  /** A small label under the pin (the device's own name, #156); empty = none. */
  caption?: string;
  /** The device's own name from the plan (the card option marker_names shows it as caption). */
  ownName?: string;
  /** The own name is shown under the pin (per device). */
  showName?: boolean;
  floorId: string;
  roomId: string | null;
  x: number;
  z: number;
  /** Height above the floor. */
  y: number;
  /** Inline SVG markup of the icon. */
  icon: string;
  name: string;
  /** Short state text, e.g. "60 %" or "21,5 °C". */
  text: string;
  active: boolean;
  /** The text shows on the floor as well (a marker set to "always"); otherwise only in its room or while active. */
  full?: boolean;
  unavailable: boolean;
  /** Cameras: no field-of-view wedge on the floor (false); default on. */
  cone?: boolean;
  /** Light cone on the floor for lights that are on. */
  glow: { color: [number, number, number]; level: number } | null;
  /** Power drawn (W) when the device reports it. */
  power?: number | null;
  /** Lights: lamp model drawn at the device position. */
  lamp?: LampModel | null;
  /** Lamp: turn around y (degrees), size (w, d, h) and height of what it stands on. */
  /** A mirrored lamp furniture (its pack model is drawn mirrored). */
  mirror?: boolean;
  rotation?: number;
  size?: [number, number, number];
  base?: number;
  /** A spot or downlight lowered by hand: the height it hangs from instead of the ceiling (#311). */
  top?: number;
  /** LED strip: roll about its length (degrees) and standing upright (its length runs up from the base). */
  roll?: number;
  upright?: boolean;
  /** LED strip: rising along its length (degrees; D539). */
  rise?: number;
  /** Ceiling fan: how fast its blades turn (0–1; D606). */
  fanSpeed?: number;
  /** Show the HTML marker (false: the 3D object alone stands for the device). */
  pin?: boolean;
  /** A placed device fixed against moving. */
  fixed?: boolean;
  /** The marker setting of its placement or furniture item (undefined = automatic). */
  show?: "always" | "no_power" | "never";
  /** The 3D lamp can be tapped (it has an entity). */
  pickable?: boolean;
  /** Furniture item this lamp is (for moving it in 3D). */
  furnitureId?: string;
  /** Lamp from a furniture pack (its type): drawn from the pack's parts. */
  pack?: string | null;
  /** Height its light comes from (pack lamps). */
  lightY?: number;
  /** A colour effect runs (colour loop …): the colour is animated in 3D. */
  effect?: boolean;
  /** Pendant shape: shade (default), globe, cone or drum. */
  variant?: string | null;
  /** Formatted power, e.g. "85 W". */
  powerText?: string;
  /** A camera drawn in 3D (wall or ceiling); its field of view lies on the floor, red while motion is seen. */
  model?: "camera_wall" | "camera_ceiling";
  /** A camera shown by a furniture item of its own (#779): its built-in model is not drawn (wedge and look-through stay). */
  ownLook?: boolean;
  motion?: boolean;
  /** Camera: opening angle (degrees) and reach (m) of its field of view; default 90° / 4.5 m (dome: 360° / 3 m). */
  fov?: number;
  reach?: number;
  /** Camera: degrees below the horizon it looks (for the look through it). */
  tilt?: number;
}

export type FloorStack = "dim" | "stacked" | "single";

/** A spot of the motion trail: where motion was reported, with an age from 0 (new) to 1 (old). */
export interface TrailSpot {
  floorId: string;
  x: number;
  z: number;
  age: number;
}

export type LampModel = "ceiling" | "downlight" | "spot" | "panel" | "pendant" | "fan" | "floor" | "uplight" | "table" | "wall" | "strip" | "bollard" | "garden";

/** Piece of energy cable (floor-local coordinates); the flow runs from a to b. */
/** A ray from the camera through the pointer, in building coordinates (heights above the ground). */
export interface SurfaceRay {
  o: [number, number, number];
  d: [number, number, number];
}

/** Grab and move things on surfaces with rays: start says whether something was grabbed. */
export interface SurfaceGrab {
  start(ray: SurfaceRay): boolean;
  move(ray: SurfaceRay): void;
  end(): void;
}

export interface FlowPiece {
  floorId: string;
  a: [number, number, number];
  b: [number, number, number];
  /** Cable length from the source to a (m), so stripes continue along the path. */
  dist: number;
  power: number;
  color: [number, number, number];
  /** Width against a cable's (1; a module's pipe may be wider). */
  width?: number;
  /** A module's pipe: solid in its colour with a dark edge (readable on bright floors), a soft light running along it. */
  pipe?: boolean;
  /** Shown only in the house view (hidden while a floor is opened). */
  house?: boolean;
  /** Shown only while a floor is opened (hidden in the house view). */
  floor?: boolean;
}

/** A see-through surface over an area of a floor (floor coordinates): a module's tint on a room, soil under a lawn. */
export interface PatchPiece {
  floorId: string;
  points: [number, number][];
  y: number;
  color: [number, number, number];
  opacity: number;
  /** Adds light instead of tinting (a heated floor glowing warm). */
  glow?: boolean;
}

/** A lit TV or monitor screen: colour of the running app and brightness (0..1). */
/** Klang & Kino: a speaker or media player in the house – rings pulse around it while it plays, group members are joined by a line. */
export interface SoundSource {
  id: string;
  floorId: string;
  x: number;
  z: number;
  /** 0 = silent; the ring strength (volume) while playing. */
  level: number;
  playing: boolean;
  /** Entity ids of the players grouped with this one (Sonos, HA media groups). */
  members: string[];
}

export interface ScreenState {
  /** Light the item's glowing pack parts too (a smart speaker's ring while it plays). */
  ring?: boolean;
  color: [number, number, number];
  level: number;
  /** Picture of what is running (app icon or cover art from the media player), if any. */
  picture?: string | null;
  /** No glow frame around the screen (a logo from a picture rule stands on its own). */
  plain?: boolean;
  /** Furniture with a state: glowing faces on top of the item instead of a screen – the whole top, or a half of it. */
  // (see also SoundSource below)
  // "gang": one rocker or socket of a wall switch or socket (`index` of `of`)
  faces?: { part: "all" | "left" | "right" | "top" | "bottom" | "band" | "cabin" | "lights" | "burners" | "lid" | "beacon" | "gang" | "drum" | "apring" | "strata"; color: [number, number, number]; level: number; index?: number; of?: number; accent?: boolean; top?: [number, number, number] }[];
}

/** Position of the sun (from sun.sun): degrees above the horizon and clockwise from north. */
export interface SunState {
  elevation: number;
  azimuth: number;
}

/** Weather outside (each 0…1) and the sky colour behind the house (for fog). */
export interface WeatherView {
  rain: number;
  snow: number;
  fog: number;
  cloud: number;
  wind: number;
  sky: [number, number, number];
  /** Whether the sun or moon disc shows. */
  disc?: boolean;
}

export interface PersonPin {
  id: string;
  name: string;
  initials: string;
  picture: string | null;
  floorId: string;
  roomId: string;
  x: number;
  z: number;
  /** Ring colour of the person (default pink). */
  color?: string;
  /** Entity whose details a tap opens (the locating sensor: room, certainty, since when). */
  entity?: string;
  /** A thing (keys, a phone without a person): a small pin even when people stand as figures. */
  thing?: boolean;
  /** Short name under the pin (located people), none without. */
  tag?: string;
}

export interface ViewerStats {
  /** Frames per second while something moves; 0 at rest (nothing is drawn then). */
  fps: number;
  /** What keeps the picture moving: camera, floors, openings, flash, roof, flow, effect, robot, orbit, tint. */
  busy: string[];
  /** Slowest frame of the last measuring window (ms). */
  worstMs: number;
  calls: number;
  triangles: number;
  /** The low quality level is active (tablet). */
  low: boolean;
  pixelRatio: number;
  /** The WebGL renderer's name (read once; only its rough class leaves the browser, with opt-in reports). */
  gpu: string | null;
}

/** The stock neon cyan (a light switch glows in it without an accent colour of the user). */
const ACCENT_STOCK: [number, number, number] = [0.22, 0.88, 1];
/** Extra gap between floors in the pulled-apart house view (metres). */
const EXPLODE_GAP = 2.4;
/** How far the roof lifts off the top floor while the floors are pulled apart. */
const ROOF_GAP = 1.4;
/** Opacity of the floors below the selected one. */
const BELOW_OPACITY = 0.22;
/** Time constant of the floor animation (ms); about 700 ms until settled. */
/** The roof's opacity when fully shown (a touch of see-through); it then sits right on its walls. */
const ROOF_OPACITY = 0.94;
const FLOOR_TAU = 140;
/** How far beside a floor opening a lamp above still shines down through it (m). */
const REACH_DOWN = 1.5;

/** Distance from a point to the edges of a ring (plan coordinates). */
function distanceToRing(x: number, z: number, ring: readonly [number, number][]): number {
  let best = Infinity;
  for (let i = 0; i < ring.length; i++) {
    const [ax, az] = ring[i];
    const [bx, bz] = ring[(i + 1) % ring.length];
    const ex = bx - ax;
    const ez = bz - az;
    const l2 = ex * ex + ez * ez || 1;
    const t = Math.max(0, Math.min(1, ((x - ax) * ex + (z - az) * ez) / l2));
    best = Math.min(best, Math.hypot(x - (ax + ex * t), z - (az + ez * t)));
  }
  return best;
}
/** Grid cells across the ground texture. */
const GROUND_CELLS = 32;
/** Press duration that counts as a long press (ms). */
const HOLD_MS = 500;
/** Time constant of window and blind movements (ms). */
const OPENING_TAU = 160;
/** Frame interval while only the energy flow moves (ms): about 30 frames per second. */
const FLOW_FRAME_MS = 33;
/** Cable core and the soft glow around it (m). */
// thin cables with a faint halo: the moving light dots show the flow, not the cable
const CABLE_WIDTH = 0.028;
/** A module's pipe: the core's width (times the line's width) and its dark edge on either side (m). */
const PIPE_CORE = 0.026;
const PIPE_EDGE = 0.012;
const CABLE_HALO = 0.09;
const LAMP_BODY = 0x2a3a60;
const FAN_BLADE = 0x22314f;
const FAN_BLADE_TOP = 0x2f4170;
const LAMP_SHADE = 0x1d2946;
/** Lamps that hang from the ceiling (hidden in the cut view). */
/** LED strips mounted below this height (metres) light upwards instead of down. */
const LOW_STRIP = 1.0;
const HANGING = new Set<LampModel>(["ceiling", "downlight", "spot", "panel", "pendant", "fan", "strip"]);
const FLASH_MS = 450;
const EFFECT_MS = 125;
/** Tablet level: light and sun follow a moving door or blind about 5 times a second (ms). */
const LOW_LIGHT_MS = 200;
/** Turns of the colour wheel per second while a colour effect runs. */
const EFFECT_SPEED = 0.08;
const LAMP_SIZE: Record<LampModel, [number, number, number]> = {
  ceiling: [0.4, 0.4, 0.08],
  downlight: [0.1, 0.1, 0.02],
  spot: [0.1, 0.1, 0.14],
  panel: [0.6, 0.6, 0.03],
  uplight: [0.35, 0.35, 1.8],
  bollard: [0.16, 0.16, 0.8],
  garden: [0.12, 0.12, 0.3],
  pendant: [0.4, 0.4, 0.8],
  fan: [1.3, 1.3, 0.45],
  floor: [0.42, 0.42, 1.7],
  table: [0.26, 0.26, 0.45],
  wall: [0.22, 0.12, 0.2],
  strip: [2, 0.04, 0.03],
};

interface FloorMaterials {
  floor: MeshBasicMaterial;
  pattern: MeshBasicMaterial;
  wall: MeshBasicMaterial;
  glassWall: MeshBasicMaterial;
  shadow: MeshBasicMaterial;
  lines: LineBasicMaterial;
  glow: MeshBasicMaterial;
  frames: MeshBasicMaterial;
  glass: MeshBasicMaterial;
  blinds: MeshBasicMaterial;
  /** Pool water: see-through, so the basin shows below it. */
  water: MeshBasicMaterial;
  flow: MeshBasicMaterial;
  /** A module's solid pipes (not added light: they keep their colour on a bright floor). */
  pipeLine: MeshBasicMaterial;
  patch: MeshBasicMaterial;
  /** A module's surfaces that add light (a heated floor glowing warm). */
  patchGlow: MeshBasicMaterial;
  /** Energie Pro: the living overlay of the solar fields on this floor (garden, walls). */
  solarLive: MeshBasicMaterial;
  lamps: MeshBasicMaterial;
  halos: PointsMaterial;
  cones: MeshBasicMaterial;
  screens: MeshBasicMaterial;
  /** The earth around a floor below the ground (outer faces; from inside when the floor is open) and light wells. */
  earth: MeshBasicMaterial;
  earthWell: MeshBasicMaterial;
  earthLines: LineBasicMaterial;
}

interface FloorView {
  floor: Floor;
  /** Position in the stack, ordered by elevation. */
  rank: number;
  group: Group;
  geo: FloorGeometry;
  floorMesh: Mesh;
  shadowMesh: Mesh;
  patternMesh: Mesh;
  /** Room lighting on floors and wall faces (see lighting.ts). */
  glowMesh: Mesh;
  lightSurface: LightSurface | null;
  /** Light zone per room index (rooms joined by "no wall" share one); null when every room is its own. */
  lightZones: number[] | null;
  framesMesh: Mesh;
  glassMesh: Mesh;
  blindsMesh: Mesh;
  flowMesh: Mesh;
  /** A module's solid pipes: always, those shown only in the house view, and those only on an opened floor. */
  pipeLineMesh: Mesh;
  pipeHouseMesh: Mesh;
  pipeFloorMesh: Mesh;
  pipeLineSig: string;
  /** The living solar overlay of this floor's fields, if it has any. */
  solarMesh: Mesh | null;
  solarLive: SolarLive | null;
  lampMesh: Mesh;
  /** Sunlight falling through the windows onto the floor. */
  sunMesh: Mesh;
  sunSig: string;
  /** At night: the light of lit rooms falling out of their windows onto the ground in front. */
  spillMesh: Mesh;
  spillSig: string;
  /** Soft glow around lit lamps, and light cones under spots (quality "High"). */
  haloMesh: Points;
  coneMesh: Mesh;
  /** Motion trail on the floor (discs and ribbons). */
  trailMesh: Mesh;
  /** Doors of smart fridges (they swing open with their sensors). */
  fridgeMesh: Mesh;
  /** Pool Pro: the pipes as tubes. */
  pipeMesh: Mesh;
  pipeSig: string;
  /** A module's see-through surfaces (see PatchPiece). */
  patchMesh: Mesh;
  patchGlowMesh: Mesh;
  patchSig: string;
  /** Triangle ranges of lamps (entity ids), furniture walls mesh and openings, for tapping. */
  lampTris: { id: string; start: number; end: number }[];
  /** Triangle range of every camera's field-of-view wedge, by device id (a tap on it hits the camera). */
  coneTris: { id: string; start: number; end: number }[];
  /** The same lamp ranges, keyed by furniture id (for moving lamps). */
  lampFurnTris: { id: string; start: number; end: number }[];
  frameTris: { id: string; start: number; end: number }[];
  glassTris: { id: string; start: number; end: number }[];
  blindTris: { id: string; start: number; end: number }[];
  wallMesh: Mesh;
  screenMesh: Mesh;
  screenSig: string;
  /** Klang & Kino: rings around playing speakers and lines between grouped ones (made when first needed). */
  soundGroup?: Group;
  /** Pool Pro: the living water and covers of the pools on this floor. */
  poolGroup?: Group;
  /** Pictures shown on lit screens, by furniture id. */
  screenPics: Map<string, { url: string; mesh: Mesh; texture: Texture | null }>;
  /** Content signatures: meshes are only rebuilt when these change. */
  flowLayout: string;
  glowSig: string;
  /** Lamp shapes (rebuilt when they change) and lamp colours (written into the mesh in place). */
  lampShapeSig: string;
  lampColorSig: string;
  /** Shade factor per lamp vertex (0 = body) and the triangle range of every lamp, by device id. */
  lampShade: Float32Array;
  lampRanges: Map<string, { start: number; end: number }>;
  /** Room box and room labels with their centres, so labels are placed without recomputing them. */
  bbox: { x0: number; x1: number; z0: number; z1: number } | null;
  roomPins: { pin: HTMLButtonElement; room: Room; cx: number; cz: number }[];
  /** Size of the floor label, measured once per text (reading it every frame forces a layout). */
  labelSize: { w: number; h: number } | null;
  materials: FloorMaterials;
  /** Bit masks of the wall buckets that stand and that are drawn as glass (read by the fold shader). */
  mask: FoldMasks;
  /** Shown opening states (animated towards the targets set from Home Assistant). */
  openings: Map<string, OpeningState>;
  /** When the light of this floor followed its doors and blinds last (performance.now). */
  lightAt: number;
  /** Current and target height offset and opacity. */
  y: number;
  o: number;
  ty: number;
  to: number;
  appliedO: number;
  label: HTMLButtonElement;
}

const ACTIVE_FLOOR = new Color(0x1a2a4d);

export function isLowEnd(): boolean {
  const nav = navigator as Navigator & { deviceMemory?: number };
  return lowEndDevice(navigator.userAgent, nav.deviceMemory, navigator.hardwareConcurrency);
}

export class FloorplanViewer {
  private readonly host: HTMLElement;
  private readonly options: ViewerOptions;
  private renderer: WebGLRenderer;
  private readonly scene = new Scene();
  private readonly camera = new PerspectiveCamera(38, 1, 0.1, 400);
  private controls: OrbitControls;
  private readonly labels: HTMLDivElement;
  private readonly root = new Group();
  private readonly patternTexture: CanvasTexture;
  private readonly blindTexture: CanvasTexture;
  private openingTargets = new Map<string, OpeningState>();
  /** Smart fridge doors: how far each stands open (0…1) and where it is going. */
  private fridges = new Map<string, { l: number; r: number; tl: number; tr: number }>();
  private screens = new Map<string, ScreenState>();
  /** Entities behind furniture (TV, …) and openings (blind, contact), for tapping them in 3D. */
  private pickFurniture = new Map<string, string>();
  private pickOpenings = new Map<string, string>();
  /** Lamps flashing after a tap (entity id -> end time). */
  private flashes = new Map<string, number>();
  private flows: FlowPiece[] = [];
  private pipes: PipeTube[] = [];
  private patches: PatchPiece[] = [];
  /** Editor: things on surfaces (solar fields, roof windows) are grabbed and moved with a ray from the camera. */
  private surfaceGrab: SurfaceGrab | null = null;
  private surfaceDragging = false;
  /** Furnishing limited to these furniture types (the editor's energy tool); null = all. */
  private furnishTypes: ReadonlySet<string> | null = null;
  /** Live state of the roof windows (the roof is rebuilt when it changes). */
  private roofWindows = new Map<string, RoofWindowState>();
  private roofWindowsKey = "";
  /** The roof's parts as built last (the house's shadow lays them on the ground). */
  private roofGeos: RoofGeometry[] = [];
  /** The sun's arc in the sky and the house's shadow on the ground (built only when the sun has moved a little). */
  private sunFx = new SunFx();
  private sunPath: SunPath | null = null;
  private shadowSig = "";
  private arcSig = "";
  private spillNight = "";
  /** N, E, S, W on the compass ring, in the user's language. */
  private compassLetters: [string, string, string, string] = ["N", "E", "S", "W"];
  /** Stripe phase per cable piece, kept when its speed changes so the stripes do not jump. */
  private flowPhase = new Map<string, { speed: number; offset: number }>();
  private readonly flowTime = { value: 0 };
  private readonly flowStart = performance.now();
  private flowActive = false;
  /** Klang & Kino: the sound sources and whether any plays (then the rings animate). */
  private sound: SoundSource[] = [];
  private pools: PoolPiece[] = [];
  /** A filter pump runs: the water moves (frames keep coming like for the energy flow). */
  private poolActive = false;
  private soundActive = false;
  private flowTimer: ReturnType<typeof setTimeout> | undefined;
  private persons: PersonPin[] = [];
  private readonly personPins = new Map<string, HTMLDivElement>();
  /** Where each person pin is drawn now: it glides to its room instead of jumping (floor id, x, z). */
  private readonly personAt = new Map<string, { floorId: string; x: number; z: number }>();
  /** Located people as a simple neon figure (default) or as a round pin. */
  private personLook: "figure" | "pin" = "figure";
  private readonly figures = new Map<string, Group>();
  private floorInfo = new Map<string, string>();
  /** Text behind the room names (the "values" heat mode: temperature, humidity, CO₂ per room). */
  private roomInfo = new Map<string, string>();
  /** Ground grid texture, made when the ground first shows (the tablet level never shows it). */
  private groundTexture: CanvasTexture | null = null;
  private devices: DeviceMarker[] = [];
  /** Device markers with the last written fields, so unchanged fields are not written again. */
  private readonly devicePins = new Map<string, { el: HTMLButtonElement; icon: string; text: string; watt: string; label: string; active: boolean; unavailable: boolean; glow: string; caption: string }>();
  private readonly ground: Mesh;
  private floors: FloorView[] = [];
  private building: Building | null = null;
  private floorId: string | null = null;
  private roomId: string | null = null;
  private wallMode: WallMode = "auto";
  private explode: boolean;
  private frame = 0;
  private lastFrame = 0;
  private disposed = false;
  private readonly resizeObserver: ResizeObserver;
  private fpsFrames = 0;
  private worstFrame = 0;
  private lastStatsFrame = 0;
  private lowQuality = false;
  private highQuality = false;
  /** Tablet level: when the view was last touched or something began to move (decorative animations rest 30 s later). */
  private lastWake = performance.now();
  /** The tints and selection last written into each floor's colours (applyHighlight skips floors that stay). */
  private highlighted = new WeakMap<object, string>();
  private decorWas = false;
  /** A frame asked for by a module's decoration (pets, ghost, fish), at the decorative pace. */
  private decorTimer: ReturnType<typeof setTimeout> | undefined;
  /** Seconds used for animated colour effects (advanced in steps while an effect runs). */
  private effectTime = 0;
  /** The frame was asked for by the effect timer or a room tint (shown in the statistics). */
  private effectTick = false;
  private tintTick = false;
  private effectTimer: ReturnType<typeof setTimeout> | undefined;
  private readonly haloTexture: CanvasTexture;
  /** Roof over the top floor (house view only), its opacity and the camera distance of the house view. */
  /** The roof: one group with a part per floor it sits on (each part follows its floor). */
  private roof: {
    group: Group;
    parts: { group: Group; floorId: string; rideId: string; base: number; lift: boolean; win: Group | null }[];
    /** Roof windows over rooms of a lower floor: they follow that floor (#482). */
    below: { floorId: string; win: Group }[];
    solid: MeshBasicMaterial;
    lines: LineBasicMaterial;
    glass: MeshBasicMaterial;
    live: MeshBasicMaterial;
    lives: SolarLive[];
    /** The roof windows, apart from the roof: they stay while the roof fades over a room. */
    wins: Group;
    winSolid: MeshBasicMaterial;
    winLines: LineBasicMaterial;
    winGlass: MeshBasicMaterial;
    roofWinGlass: MeshBasicMaterial;
  } | null = null;
  /** The hologram's anchor: a point on the solar field (building coordinates) and the field's normal. */
  private anchors: { p: [number, number, number]; n: [number, number, number]; floorId: string; size: number; roof: boolean; views: "house" | "all" | "floor"; room?: string | null; near?: number }[] = [];
  /** Told where the anchor lies on screen after every frame, how large the hologram should be and whether its front faces the camera. */
  private anchorCb: ((index: number, x: number, y: number, visible: boolean, scale: number, facing: boolean) => void) | null = null;
  /** Energie Pro: production level (0..1) per solar field; the overlays animate while any is above zero. */
  private solarLevels = new Map<string, number>();
  private solarActive = false;
  private roofO = 0;
  /** The roof stays put while the camera comes close (no lift, no fade): the editor's roof tool, or a choice of the viewer. */
  private keepRoof = false;
  private hideRoof = false;
  /** Robot vacuums: their info from Home Assistant, how they move, and their meshes. */
  private robots = new Map<string, { info: RobotInfo; motion: RobotMotion; group: Group; led: MeshBasicMaterial; own: BufferGeometry[]; modelKey: string }>();
  private robotGeo: BufferGeometry | null = null;
  private robotMat: MeshBasicMaterial | null = null;
  private robotLedGeo: BufferGeometry | null = null;
  private robotLast = 0;
  private robotTimer: ReturnType<typeof setTimeout> | undefined;
  /** Ceiling fans (D606): their blades in a group of their own, turning with the fan's speed. */
  private fans = new Map<string, { group: Group; mesh: Mesh; r: number; speed: number; floorId: string; y: number }>();
  private fanMat: MeshBasicMaterial | null = null;
  private fanLast = 0;
  private fanTimer: ReturnType<typeof setTimeout> | undefined;
  private floorStack: FloorStack = "dim";
  /** Floors by id, and per-frame bookkeeping so labels are only placed when something moved. */
  private floorMap = new Map<string, FloorView>();
  private labelsDirty = true;
  private readonly viewKey = new Float64Array(6);
  private readonly placed = new WeakMap<HTMLElement, string>();
  private readonly pinMode = new WeakMap<HTMLElement, string>();
  private size = { w: 1, h: 1 };
  /** Width taken on the left by the host (the floor pictures); floor labels keep clear of it. */
  private labelInset = 0;
  /** Floors with lamps that run a colour effect, and the floor of every device (for flashes). */
  private effectFloors = new Set<string>();
  private deviceFloor = new Map<string, string>();
  private statsOn = false;
  /** Vehicles standing in parking spots (spot id -> pack item type); they join the floor geometry. */
  private parked = new Map<string, string>();
  private parkedSig = "";
  /** Slow automatic turn of the view (kiosk screensaver), in radians per second. */
  private orbitSpeed = 0;
  private orbitLast = 0;
  private orbitTimer: ReturnType<typeof setTimeout> | undefined;
  /** The host is inside the viewport (a card scrolled away renders nothing). */
  private onScreen = true;
  private intersection: IntersectionObserver | null = null;
  /** The device a running swipe acts on. */
  private swipe: { entity: string; x: number; y: number } | null = null;
  /** Furnishing in 3D: items can be dragged; the selected one shows a wireframe box. */
  private furnish = false;
  private selectedFurniture: string | null = null;
  /** Furnishing: the selected device, the pin a pointer just went down on, and a device being dragged. */
  private selectedDevice: string | null = null;
  private pendingDevice: string | null = null;
  private deviceGrab: { id: string; floorId: string; offset: [number, number]; x: number; z: number; moved: boolean } | null = null;
  private grab: {
    floorId: string;
    id: string;
    offset: [number, number];
    x: number;
    z: number;
    moved: boolean;
    plane?: number;
    /** Seen almost level: the pointer's way on screen moves the item (a plane gives huge jumps there). */
    screen?: { x0: number; y0: number; fx: number; fz: number; right: [number, number]; fwd: [number, number]; perPx: number; gain: number };
  } | null = null;
  private ghost: LineSegments | null = null;
  private selectedSet: string[] = [];
  private theme: Theme = "neon";
  private readonly themeUniform: ThemeUniform = { value: 0 };
  private sun: SunState | null = null;
  private weather: WeatherView | null = null;
  /** Rain streaks and snow flakes over the plot, the sun or moon disc in the sky. */
  private rain = new LineSegments(new Geometry(), new LineBasicMaterial({ color: 0x9fc8ff, transparent: true, opacity: 0.4, blending: AdditiveBlending, depthWrite: false }));
  private snow = new Points(new Geometry(), new PointsMaterial({ color: 0xf4f8ff, size: 0.14, transparent: true, opacity: 0.85, depthWrite: false }));
  private skyDisc = new Mesh(new CircleGeometry(1, 28), new MeshBasicMaterial({ color: 0xffd98a, transparent: true, opacity: 0, blending: AdditiveBlending, depthWrite: false }));
  private weatherBox = { x0: -10, x1: 10, z0: -10, z1: 10, y0: 0, y1: 8 };
  private weatherTimer: ReturnType<typeof setTimeout> | undefined;
  private weatherLast = 0;
  /** Heatmap colour per room id (null: normal floors). */
  private roomTint: Map<string, [number, number, number]> | null = null;
  private houseRadius = 20;
  private startView: StartView | null = null;
  private keepView = false;
  /** The next fit keeps the camera (a floor-to-floor switch with keepView). */
  private keepNext = false;
  private fpsStart = 0;
  private gpuName: string | null | undefined;

  constructor(host: HTMLElement, options: ViewerOptions = {}) {
    this.host = host;
    this.options = options;
    this.explode = options.explode ?? true;
    this.renderer = this.makeRenderer(options.quality ?? "auto");
    this.labels = document.createElement("div");
    this.labels.className = "fp3d-labels";
    host.append(this.labels);
    this.patternTexture = makePatternTexture();
    this.blindTexture = makeBlindTexture();
    this.haloTexture = makeHaloTexture();
    // drawn first among the solid things (not with the transparent ones after them): lawn, paths and floors
    // cover the grid also when the view is far away (#427)
    this.ground = new Mesh(new PlaneGeometry(1, 1), new MeshBasicMaterial({ transparent: false, blending: AdditiveBlending, depthWrite: false }));
    this.ground.rotation.x = -Math.PI / 2;
    this.ground.renderOrder = -1;
    this.scene.add(this.ground, this.root);
    this.rain.frustumCulled = false;
    this.snow.frustumCulled = false;
    this.rain.visible = false;
    this.snow.visible = false;
    this.skyDisc.visible = false;
    this.skyDisc.renderOrder = -1;
    this.scene.add(this.rain, this.snow, this.skyDisc, this.sunFx.group);
    this.controls = this.makeControls();
    this.resizeObserver = new ResizeObserver(() => this.resize());
    this.resizeObserver.observe(host);
    document.addEventListener("visibilitychange", this.onVisibility);
    // any touch on the view (canvas, pins, cards over it) wakes resting animations on the tablet level
    for (const type of ["pointerdown", "pointerup", "wheel", "keydown"]) host.addEventListener(type, this.onInput, { capture: true, passive: true });
    if (typeof IntersectionObserver === "function") {
      this.intersection = new IntersectionObserver((entries) => {
        const on = entries.some((e) => e.isIntersecting);
        if (on === this.onScreen) return;
        this.onScreen = on;
        if (on) this.invalidate();
      });
      this.intersection.observe(host);
    }
    this.resize();
  }

  /** Whether the tablet level is active (hosts lighten their own work with it). */
  get low(): boolean {
    return this.lowQuality;
  }

  /** Tablet level: the decorative animations rest (nobody touched the view for a while). */
  get resting(): boolean {
    return this.decor(0) === null;
  }

  /** Someone used the view (or something new began to move): the decorative animations run again on the tablet level. */
  wake(): void {
    const resting = this.resting;
    this.lastWake = performance.now();
    if (resting) this.invalidate();
  }

  /** A module's decoration moved (pets, ghost, fish): a frame now – on the tablet level at the pets' own pace. */
  animate(): void {
    if (!this.lowQuality) return this.invalidate();
    if (this.decorTimer || this.frame) return;
    // pets walk on: about 15 frames a second on the tablet level, 4 while the view rests (#752)
    const ms = petDelay(true, performance.now() - this.lastWake);
    this.decorTimer = setTimeout(() => {
      this.decorTimer = undefined;
      this.invalidate();
    }, ms);
  }

  /** Delay until the next frame of a decorative animation (its own on normal devices), null while it rests. */
  private decor(ms: number, lowMs?: number): number | null {
    return decorDelay(ms, this.lowQuality, performance.now() - this.lastWake, lowMs);
  }

  private readonly onInput = () => this.wake();

  /** Vehicles in the parking spots (spot id -> pack item type); a change rebuilds the floors. */
  setParked(parked: Map<string, string>): void {
    const sig = [...parked]
      .map(([id, v]) => `${id}=${v}`)
      .sort()
      .join("|");
    if (sig === this.parkedSig) return;
    this.parkedSig = sig;
    this.parked = parked;
    if (this.building) {
      this.rebuild();
      this.invalidate();
    }
  }

  /** Frame statistics are only gathered while something shows them. */
  setStats(on: boolean): void {
    this.statsOn = on;
  }

  /** Space on the left the floor labels leave free (the floor pictures of the host). */
  setLabelInset(px: number): void {
    if (this.labelInset === px) return;
    this.labelInset = px;
    this.labelsDirty = true;
    this.invalidate();
  }

  /** Turn the view slowly by itself (0 stops); a touch pauses it. */
  setAutoOrbit(speed: number): void {
    this.orbitSpeed = speed;
    this.orbitLast = 0;
    this.invalidate();
  }

  setQuality(quality: Quality): void {
    const canvas = this.renderer.domElement;
    const next = this.makeRenderer(quality);
    this.rebuildTier();
    this.applyTierFlags();
    canvas.replaceWith(next.domElement);
    this.renderer.dispose();
    this.renderer.forceContextLoss();
    this.renderer = next;
    const view = this.controls.view;
    this.controls.dispose();
    this.controls = this.makeControls();
    this.controls.view = view;
    this.resize();
  }

  /** Furniture packs (models of pack furniture); set before the building that uses them. */
  setPacks(packs: FurniturePack[]): void {
    setPacks(packs);
    if (this.building) {
      this.rebuild();
      this.invalidate();
    }
  }

  setBuilding(building: Building): void {
    const first = this.building === null;
    this.lastWake = performance.now();
    this.building = building;
    // this bundle's own copy of the ground (outdoor areas, earth around cellars)
    setTerrain(building);
    this.rebuild();
    if (first) this.fit(0);
    this.invalidate();
  }

  /** Show one floor (null = the whole house). */
  /** Switching from one floor to another keeps the camera where it is (only its height follows), #191. */
  setKeepView(on: boolean): void {
    this.keepView = on;
  }

  /** 3D lock: the angle stays where it is; dragging moves the view, zooming still works. */
  setAngleLock(on: boolean): void {
    this.controls.angleLock = on;
  }

  setFloor(floorId: string | null, animate = true): void {
    this.lastWake = performance.now();
    this.keepNext = this.keepView && floorId !== null && this.floorId !== null && floorId !== this.floorId;
    this.floorId = floorId;
    this.roomId = null;
    this.labelsDirty = true;
    this.applyHouseLines();
    this.applyTargets(!animate);
    this.applyHighlight();
    this.fit(animate ? 700 : 0);
  }

  /** Pull the floors apart in the house view, or stack them. */
  /** What shows below an opened floor: the floors dimmed, the whole house up to it, or nothing. */
  setFloorStack(mode: FloorStack): void {
    if (mode === this.floorStack) return;
    this.floorStack = mode;
    this.applyTargets(false);
  }

  /** Leave the roof out altogether (a card option, D601): the house looks as if it had none. */
  setHideRoof(on: boolean): void {
    if (on === this.hideRoof) return;
    this.hideRoof = on;
    this.invalidate();
  }

  setKeepRoof(on: boolean): void {
    if (on === this.keepRoof) return;
    this.keepRoof = on;
    this.invalidate();
  }

  setExplode(explode: boolean): void {
    if (explode === this.explode) return;
    this.explode = explode;
    this.applyTargets(false);
    if (this.floorId === null) this.fit(700);
  }

  /** Highlight a room and fly into it (null = back to the floor overview). */
  selectRoom(roomId: string | null): void {
    this.lastWake = performance.now();
    this.roomId = roomId;
    this.labelsDirty = true;
    this.applyHighlight();
    if (!roomId) {
      this.fit(700);
      return;
    }
    // a room, or an outdoor area acting as one (#100)
    const fv = this.floors.find((f) => zonesOf(f.floor).some((r) => r.id === roomId));
    const room = fv ? zonesOf(fv.floor).find((r) => r.id === roomId) : undefined;
    if (!fv || !room) return;
    // a room may open with a camera of its own (#282)
    const own = room.start_view;
    if (own) {
      const base = fv.floor.elevation + fv.ty;
      const [mx, mz] = centroid(room.points);
      const t = own.target ?? { x: mx, y: 0.3, z: mz };
      this.controls.flyTo({ target: new Vector3(t.x, t.y + base, t.z), radius: own.radius, phi: own.phi, theta: own.theta }, 700, true);
      return;
    }
    const [cx, cz] = centroid(room.points);
    const xs = room.points.map((p) => p[0]);
    const zs = room.points.map((p) => p[1]);
    const size = new Vector3(Math.max(...xs) - Math.min(...xs), fv.floor.cut_height, Math.max(...zs) - Math.min(...zs));
    this.controls.flyTo({ target: new Vector3(cx, fv.floor.elevation + fv.ty + 0.3, cz), radius: Math.max(4, this.distanceFor(size) * 1.05), phi: 0.72 });
  }

  setWallMode(mode: WallMode): void {
    this.wallMode = mode;
    // ceiling lamps would float above cut walls
    for (const fv of this.floors) this.buildLamps(fv);
    this.invalidate();
  }

  /** Replace the device markers; pins are reused per entity, light cones rebuilt per floor. */
  setDevices(devices: DeviceMarker[]): void {
    this.devices = devices;
    this.syncFans(devices);
    this.labelsDirty = true;
    this.effectFloors = new Set(devices.filter((d) => d.effect && d.glow).map((d) => d.floorId));
    this.deviceFloor = new Map(devices.map((d) => [d.id, d.floorId]));
    const seen = new Set<string>();
    for (const d of devices) {
      seen.add(d.id);
      let pin = this.devicePins.get(d.id);
      if (!pin) {
        pin = { el: this.makeDevicePin(d.id), icon: "", text: "", watt: "", label: "", active: false, unavailable: false, glow: "", caption: "" };
        this.devicePins.set(d.id, pin);
        this.labels.append(pin.el);
      }
      // every write below invalidates style or layout: only fields that changed are written
      const el = pin.el;
      if (pin.icon !== d.icon) {
        pin.icon = d.icon;
        el.querySelector(".fp3d-dev-icon")!.innerHTML = d.icon;
      }
      if (pin.text !== d.text) {
        pin.text = d.text;
        el.querySelector(".fp3d-dev-text")!.textContent = d.text;
      }
      const caption = d.caption ?? "";
      if (pin.caption !== caption) {
        pin.caption = caption;
        el.querySelector(".fp3d-dev-name")!.textContent = caption;
      }
      const watt = d.power !== null && d.power !== undefined && d.power >= 1 ? (d.powerText ?? `${Math.round(d.power)} W`) : "";
      if (pin.watt !== watt) {
        pin.watt = watt;
        el.querySelector(".fp3d-dev-watt")!.textContent = watt;
      }
      const label = `${d.name}: ${d.text}`;
      if (pin.label !== label) {
        pin.label = label;
        el.title = d.name;
        el.setAttribute("aria-label", label);
      }
      if (pin.active !== d.active) {
        pin.active = d.active;
        el.classList.toggle("fp3d-dev-on", d.active);
      }
      if (pin.unavailable !== d.unavailable) {
        pin.unavailable = d.unavailable;
        el.classList.toggle("fp3d-dev-na", d.unavailable);
      }
      const glow = d.glow ? `rgb(${d.glow.color.map((c) => Math.round(c * 255)).join(", ")})` : "";
      if (pin.glow !== glow) {
        pin.glow = glow;
        if (glow) el.style.setProperty("--fp3d-glow", glow);
        else el.style.removeProperty("--fp3d-glow");
      }
    }
    for (const [id, pin] of this.devicePins) {
      if (seen.has(id)) continue;
      pin.el.remove();
      this.devicePins.delete(id);
    }
    for (const fv of this.floors) {
      this.buildGlow(fv);
      this.buildLamps(fv);
    }
    this.invalidate();
  }

  /** Roof windows open, tilted or with the blind down: the roof is rebuilt when that changes. */
  setRoofWindows(states: Map<string, RoofWindowState>): void {
    const key = JSON.stringify([...states]);
    if (key === this.roofWindowsKey) return;
    this.roofWindowsKey = key;
    this.roofWindows = states;
    this.buildRoofMesh();
    for (const fv of this.floors) this.buildSun(fv);
    this.invalidate();
  }

  /** Energy cables; the stripes run while any cable carries power. */
  /** The hologram hangs on a solar field: the callback gets the anchor's screen position after every frame. */
  setAnchorCallback(cb: ((index: number, x: number, y: number, visible: boolean, scale: number, facing: boolean) => void) | null): void {
    this.anchorCb = cb;
    this.labelsDirty = true;
    this.invalidate();
  }

  /**
   * The holograms' anchors: points on the solar fields with their normals (they ride up with the roof and
   * show in the house view only), and points over devices (shown on their floor as well).
   */
  setAnchors(anchors: { p: [number, number, number]; n: [number, number, number]; floorId: string; size: number; roof: boolean; views: "house" | "all" | "floor"; room?: string | null; near?: number }[]): void {
    this.anchors = anchors;
    this.labelsDirty = true;
    this.invalidate();
  }

  /** Energie Pro: how much every solar field produces (0..1 of its peak); the modules glow and sweep with it. */
  setSolarLevels(levels: Map<string, number>): void {
    this.solarLevels = levels;
    let alive = false;
    for (const l of this.roof?.lives ?? []) if (writeSolarLevels(l, levels)) alive = true;
    for (const fv of this.floors) if (fv.solarLive && writeSolarLevels(fv.solarLive, levels)) alive = true;
    this.solarActive = alive;
    this.invalidate();
  }

  /** Pool Pro: the pools' water colour, movement, heating shimmer and cover; an empty list clears them. */
  setPools(list: PoolPiece[]): void {
    const sig = (l: PoolPiece[]) =>
      l.map((p) => `${p.id}:${p.floorId}:${p.points.length}:${p.points[0]?.join(",")}:${p.y.toFixed(3)}:${p.color.map((c) => c.toFixed(2)).join("/")}:${p.level.toFixed(2)}:${p.flow ? 1 : 0}:${p.heat ? 1 : 0}:${p.cover.toFixed(2)}`).join(";");
    if (sig(list) === sig(this.pools)) return;
    this.pools = list;
    this.poolActive = list.some((p) => p.flow);
    for (const fv of this.floors) this.buildPoolWater(fv);
    this.invalidate();
  }

  private buildPoolWater(fv: FloorView): void {
    if (fv.poolGroup) {
      disposePools(fv.poolGroup);
      fv.group.remove(fv.poolGroup);
      fv.poolGroup = undefined;
    }
    const mine = this.pools.filter((p) => p.floorId === fv.floor.id);
    if (!mine.length) return;
    fv.poolGroup = buildPools(mine, this.flowTime);
    fv.group.add(fv.poolGroup);
  }

  /** Klang & Kino: rings around playing speakers, lines between grouped players; an empty list clears them. */
  setSound(list: SoundSource[]): void {
    const sig = (l: SoundSource[]) => l.map((s) => `${s.id}:${s.floorId}:${s.x},${s.z}:${s.level.toFixed(2)}:${s.playing ? 1 : 0}:${s.members.join("+")}`).join(";");
    if (sig(list) === sig(this.sound)) return;
    this.sound = list;
    this.soundActive = list.some((s) => s.playing);
    for (const fv of this.floors) {
      const g = (fv.soundGroup ??= (() => {
        const grp = new Group();
        grp.renderOrder = 6;
        fv.group.add(grp);
        return grp;
      })());
      for (const c of [...g.children]) {
        g.remove(c);
        (c as Mesh).geometry?.dispose();
        ((c as Mesh).material as Material | undefined)?.dispose?.();
      }
      const mine = list.filter((s) => s.floorId === fv.floor.id);
      // in the floor's own coordinates: its group already stands at the floor's elevation (#521)
      const y = 0.03;
      for (const src of mine) {
        if (!src.playing) continue;
        // three rings per speaker, staggered; the frame loop scales and fades them
        for (let i = 0; i < 3; i++) {
          const ring = new Mesh(
            new RingGeometry(0.92, 1, 48),
            new MeshBasicMaterial({ color: 0x37e0ff, transparent: true, opacity: 0, blending: AdditiveBlending, depthWrite: false, side: DoubleSide }),
          );
          ring.rotation.x = -Math.PI / 2;
          ring.position.set(src.x, y + i * 0.002, src.z);
          ring.userData = { sound: true, phase: i / 3, level: src.level };
          ring.frustumCulled = false;
          g.add(ring);
        }
      }
      // grouped players on this floor: a faint line between each pair, drawn once per pair
      const pos: number[] = [];
      const seen = new Set<string>();
      for (const src of mine)
        for (const other of src.members) {
          const o = mine.find((x) => x.id === other);
          if (!o || o === src) continue;
          const key = [src.id, o.id].sort().join("|");
          if (seen.has(key)) continue;
          seen.add(key);
          pos.push(src.x, y + 0.02, src.z, o.x, y + 0.02, o.z);
        }
      if (pos.length) {
        const geo = new Geometry();
        geo.setAttribute("position", new Float32BufferAttribute(pos, 3));
        const line = new LineSegments(geo, new LineBasicMaterial({ color: 0x37e0ff, transparent: true, opacity: 0.45, blending: AdditiveBlending, depthWrite: false }));
        line.userData = { soundLine: true };
        g.add(line);
      }
    }
    this.invalidate();
  }

  /** The rings grow out of a playing speaker and fade; called every frame while anything plays. */
  private animateSound(now: number): void {
    const t = now / 1000;
    for (const fv of this.floors) {
      if (!fv.soundGroup) continue;
      for (const c of fv.soundGroup.children) {
        if (!c.userData.sound) continue;
        const phase = (t * 0.45 + (c.userData.phase as number)) % 1;
        const level = c.userData.level as number;
        const r = 0.25 + phase * (0.9 + 1.6 * level);
        c.scale.set(r, r, 1);
        ((c as Mesh).material as MeshBasicMaterial).opacity = (1 - phase) * (0.25 + 0.45 * level);
      }
    }
  }

  setFlows(flows: FlowPiece[]): void {
    this.flows = flows;
    const now = this.flowSeconds();
    const next = new Map<string, { speed: number; offset: number }>();
    for (const f of flows) {
      const key = flowKey(f);
      const speed = flowSpeed(f.power);
      const prev = this.flowPhase.get(key);
      // keep time * speed + offset continuous across the change
      next.set(key, { speed, offset: prev ? now * (prev.speed - speed) + prev.offset : 0 });
    }
    this.flowPhase = next;
    this.flowActive = flows.some((f) => f.power > 0.5);
    for (const fv of this.floors) this.buildFlows(fv);
    this.invalidate();
  }

  /** Pool Pro: the pipes drawn as tubes (their water flows in the flow layer). */
  setPipes(pipes: PipeTube[]): void {
    this.pipes = pipes;
    for (const fv of this.floors) this.buildPipes(fv);
    this.invalidate();
  }

  /** A module's see-through surfaces (a warm tint on a room's floor, soil under a lawn). */
  setPatches(patches: PatchPiece[]): void {
    this.patches = patches;
    for (const fv of this.floors) this.buildPatches(fv);
    this.invalidate();
  }

  private buildPatches(fv: FloorView): void {
    const mine = this.patches.filter((t) => t.floorId === fv.floor.id && t.points.length >= 3 && t.opacity > 0);
    const sig = JSON.stringify(mine);
    if (sig === fv.patchSig) return;
    fv.patchSig = sig;
    for (const glow of [false, true]) {
      const p: number[] = [];
      const c: number[] = [];
      for (const t of mine) {
        if (!!t.glow !== glow) continue;
        const a = Math.min(1, t.opacity);
        for (const tri of triangulate(t.points)) {
          for (const i of tri) {
            p.push(t.points[i][0], t.y, t.points[i][1]);
            c.push(t.color[0], t.color[1], t.color[2], a);
          }
        }
      }
      const mesh = glow ? fv.patchGlowMesh : fv.patchMesh;
      const g = new Geometry();
      g.setAttribute("position", new Float32BufferAttribute(p, 3));
      g.setAttribute("color", new Float32BufferAttribute(c, 4));
      mesh.geometry.dispose();
      mesh.geometry = g;
      mesh.visible = p.length > 0;
    }
  }


  private buildPipes(fv: FloorView): void {
    const mine = this.pipes.filter((t) => t.floorId === fv.floor.id);
    const sig = JSON.stringify(mine);
    if (sig === fv.pipeSig) return;
    fv.pipeSig = sig;
    const buf = new GeoBuffer();
    for (const t of mine) pushPipeTube(buf, t);
    fv.pipeMesh.geometry.dispose();
    fv.pipeMesh.geometry = buf.geometry();
    fv.pipeMesh.visible = buf.count > 0;
  }

  /** People in their rooms (pink markers in the floor and room views). */
  /** How people stand in the house: a simple neon figure or a round pin (the ⚙ menu). */
  setPersonLook(look: "figure" | "pin"): void {
    if (look === this.personLook) return;
    this.personLook = look;
    this.setPersons(this.persons);
  }

  /**
   * A person as a flat neon silhouette, 1.6 m tall, facing +z (turned to the camera each frame): limbs as strips,
   * a round head, a ring on the floor; a wider, faint copy around it glows. Two meshes, a few hundred triangles.
   */
  private makeFigure(color: string): Group {
    const build = (grow: number): Geometry => {
      const p: number[] = [];
      const strip = (ax: number, ay: number, bx: number, by: number, w: number) => {
        const len = Math.hypot(bx - ax, by - ay) || 1;
        const nx = (-(by - ay) / len) * (w / 2 + grow);
        const ny = ((bx - ax) / len) * (w / 2 + grow);
        p.push(ax + nx, ay + ny, 0, bx + nx, by + ny, 0, bx - nx, by - ny, 0, ax + nx, ay + ny, 0, bx - nx, by - ny, 0, ax - nx, ay - ny, 0);
      };
      const n = 18;
      const r = 0.14 + grow;
      for (let i = 0; i < n; i++) {
        const a = (i / n) * Math.PI * 2;
        const b = ((i + 1) / n) * Math.PI * 2;
        p.push(0, 1.47, 0, Math.cos(a) * r, 1.47 + Math.sin(a) * r, 0, Math.cos(b) * r, 1.47 + Math.sin(b) * r, 0);
      }
      strip(0, 1.32, 0, 0.8, 0.13); // body
      strip(0, 1.24, -0.28, 0.9, 0.07); // arms
      strip(0, 1.24, 0.28, 0.9, 0.07);
      strip(-0.02, 0.82, -0.15, 0.02, 0.08); // legs
      strip(0.02, 0.82, 0.15, 0.02, 0.08);
      const geo = new Geometry();
      geo.setAttribute("position", new Float32BufferAttribute(p, 3));
      return geo;
    };
    const core = new Mesh(build(0), new MeshBasicMaterial({ color, transparent: true, opacity: 0.9, depthWrite: false, side: DoubleSide }));
    const glow = new Mesh(
      build(0.05),
      new MeshBasicMaterial({ color, transparent: true, opacity: 0.22, blending: AdditiveBlending, depthWrite: false, side: DoubleSide }),
    );
    core.renderOrder = 6;
    glow.renderOrder = 5;
    const fig = new Group();
    fig.add(glow, core);
    fig.visible = false;
    return fig;
  }

  private dropFigure(id: string): void {
    const fig = this.figures.get(id);
    if (!fig) return;
    this.scene.remove(fig);
    for (const m of fig.children as Mesh[]) {
      m.geometry.dispose();
      (m.material as MeshBasicMaterial).dispose();
    }
    this.figures.delete(id);
  }

  setPersons(persons: PersonPin[]): void {
    this.labelsDirty = true;
    this.persons = persons;
    const seen = new Set<string>();
    for (const p of persons) {
      seen.add(p.id);
      let pin = this.personPins.get(p.id);
      if (!pin) {
        pin = document.createElement("div");
        pin.className = "fp3d-person";
        pin.dataset.entity = p.id;
        const id = p.id;
        pin.addEventListener("pointerdown", (e) => e.stopPropagation());
        pin.addEventListener("click", (e) => {
          e.stopPropagation();
          const target = this.persons.find((x) => x.id === id);
          if (!target?.entity) return;
          const r = (e.currentTarget as HTMLElement).getBoundingClientRect();
          const h = this.host.getBoundingClientRect();
          this.options.onDeviceHold?.(target.entity, r.left + r.width / 2 - h.left, r.top + r.height / 2 - h.top);
        });
        this.personPins.set(p.id, pin);
        this.labels.append(pin);
      }
      pin.title = p.name;
      pin.setAttribute("aria-label", p.name);
      pin.style.setProperty("--fp3d-pc", p.color ?? "#ff5fd2");
      // located people stand as a figure (the pin then only carries the name above its head)
      const figure = this.personLook === "figure" && !!p.entity && !p.thing;
      pin.classList.toggle("fp3d-person-figure", figure);
      const fig = this.figures.get(p.id);
      if (figure && (!fig || fig.userData.color !== (p.color ?? "#ff5fd2"))) {
        this.dropFigure(p.id);
        const made = this.makeFigure(p.color ?? "#ff5fd2");
        made.userData.color = p.color ?? "#ff5fd2";
        this.figures.set(p.id, made);
        this.scene.add(made);
      } else if (!figure && fig) this.dropFigure(p.id);
      pin.classList.toggle("fp3d-person-tap", !!p.entity);
      if (pin.dataset.picture !== (p.picture ?? "") || pin.dataset.initials !== p.initials || pin.dataset.tag !== (p.tag ?? "")) {
        pin.dataset.picture = p.picture ?? "";
        pin.dataset.initials = p.initials;
        pin.dataset.tag = p.tag ?? "";
        pin.replaceChildren();
        const face = document.createElement("span");
        face.className = "fp3d-person-face";
        if (p.picture) {
          const img = document.createElement("img");
          img.src = p.picture;
          img.alt = "";
          img.addEventListener("error", () => img.replaceWith(document.createTextNode(p.initials)));
          face.append(img);
        } else face.textContent = p.initials;
        pin.append(face);
        if (p.tag) {
          const tag = document.createElement("span");
          tag.className = "fp3d-person-tag";
          tag.textContent = p.tag;
          pin.append(tag);
        }
      }
    }
    for (const [id, pin] of this.personPins) {
      if (seen.has(id)) continue;
      pin.remove();
      this.personPins.delete(id);
      this.personAt.delete(id);
      this.dropFigure(id);
    }
    this.invalidate();
  }

  /** Entities opened by tapping furniture or openings in 3D (by furniture / opening id). */
  setPickTargets(furniture: Map<string, string>, openings: Map<string, string>): void {
    this.pickFurniture = furniture;
    this.pickOpenings = openings;
  }

  /** Look of the 3D view: neon, blueprint or day. Instant: colours are mapped in the shaders. */
  /** An accent colour of the user's choice for the neon look ("#rrggbb"), null for the stock cyan. */
  setAccent(hex: string | null): void {
    const rgb = parseAccent(hex);
    const on = rgb ? 1 : 0;
    if (on === accentOnUniform.value && (!rgb || accentUniform.value.equals(new Vector3(...rgb)))) return;
    accentOnUniform.value = on;
    if (rgb) accentUniform.value.set(...rgb);
    this.invalidate();
  }

  setTheme(theme: Theme): void {
    if (theme === this.theme) return;
    this.theme = theme;
    this.themeUniform.value = themeIndex(theme);
    // waste bins and pack items in colours of their own keep them in the light looks: drawn anew in full colour (#609)
    const light = theme !== "neon";
    setLightLook(light);
    if (this.building?.floors.some((f) => f.furniture.some((m) => m.type === "waste_bin" || hasFixedColors(m.type)))) this.rebuild();
    const blending = lineBlending(theme);
    const lineMats = [...this.floors.map((f) => f.materials.lines), ...(this.roof ? [this.roof.lines] : [])];
    for (const m of lineMats) {
      m.blending = blending;
      m.needsUpdate = true;
    }
    // the neon ground grid would vanish on the light background anyway
    this.placeGround();
    this.buildSunFx();
    this.invalidate();
  }

  /** Furnishing mode: dragging furniture and lamps moves them instead of turning the view. */
  setFurnishMode(on: boolean): void {
    this.furnish = on;
    if (!on) this.selectFurniture(null);
    this.invalidate();
  }

  /** Select a furniture item (wireframe box), or none. */
  selectFurniture(id: string | null): void {
    if (id && this.selectedDevice) this.selectDevice(null);
    this.selectedFurniture = id;
    this.updateGhost();
    this.invalidate();
  }

  /** Further pieces chosen with it (a block, a multi choice): each gets a wireframe box too. */
  selectFurnitureSet(ids: readonly string[]): void {
    this.selectedSet = [...ids];
    this.updateGhost();
    this.invalidate();
  }

  /** Position of the sun; sunlight falls through windows facing it. */
  setSun(sun: SunState | null): void {
    this.sun = sun;
    for (const fv of this.floors) this.buildSun(fv);
    const night = this.nightFactor().toFixed(2);
    if (night !== this.spillNight) {
      this.spillNight = night;
      for (const fv of this.floors) this.buildSpill(fv, this.lightSources(fv));
    }
    this.placeSky();
    this.buildSunFx();
    this.invalidate();
  }

  /** The sun's way across the sky today (null: no place known): drawn as an arc over the house. */
  setSunPath(path: SunPath | null, letters?: [string, string, string, string]): void {
    this.sunPath = path;
    if (letters) this.compassLetters = letters;
    this.buildSunFx();
    this.invalidate();
  }

  /** Weather outside: particles over the plot, fog, a dimmer sun; nothing on the tablet level but the dimming. */
  setWeather(weather: WeatherView | null): void {
    this.weather = weather;
    for (const fv of this.floors) this.buildSun(fv);
    this.applyWeather();
    this.placeSky();
    this.buildSunFx();
    this.invalidate();
  }

  private applyWeather(): void {
    const w = this.weather;
    const on = !!w && !this.lowQuality;
    const skyColor = w ? new Color(w.sky[0] / 255, w.sky[1] / 255, w.sky[2] / 255) : null;
    this.scene.fog = on && w.fog > 0 && skyColor ? new FogExp2(skyColor, 0.01 + 0.035 * w.fog) : null;
    const rainCount = on ? Math.round(700 * w.rain) : 0;
    const snowCount = on ? Math.round(450 * w.snow) : 0;
    this.seedParticles(this.rain, rainCount * 2, true);
    this.seedParticles(this.snow, snowCount, false);
    this.rain.visible = rainCount > 0;
    this.snow.visible = snowCount > 0;
  }

  /** Random positions over the plot (rain as pairs: a streak's top and bottom). */
  private seedParticles(obj: LineSegments | Points, vertices: number, streaks: boolean): void {
    const current = obj.geometry.getAttribute("position") as Float32BufferAttribute | undefined;
    if ((current?.count ?? 0) === vertices) return;
    const b = this.weatherBox;
    const p = new Float32Array(vertices * 3);
    const step = streaks ? 2 : 1;
    for (let i = 0; i < vertices; i += step) {
      const x = b.x0 + Math.random() * (b.x1 - b.x0);
      const y = b.y0 + Math.random() * (b.y1 - b.y0);
      const z = b.z0 + Math.random() * (b.z1 - b.z0);
      p.set([x, y, z], i * 3);
      if (streaks) p.set([x, y - 0.45, z], i * 3 + 3);
    }
    obj.geometry.dispose();
    const g = new Geometry();
    g.setAttribute("position", new Float32BufferAttribute(p, 3));
    obj.geometry = g;
  }

  /** Lets rain fall and snow drift; true while something moved. */
  private stepWeather(now: number): boolean {
    const w = this.weather;
    if (!w || (!this.rain.visible && !this.snow.visible)) {
      this.weatherLast = 0;
      return false;
    }
    const dt = this.weatherLast ? Math.min(0.1, (now - this.weatherLast) / 1000) : 0;
    this.weatherLast = now;
    if (!dt) return true;
    const b = this.weatherBox;
    const span = b.y1 - b.y0;
    const drift = w.wind * 2.5;
    if (this.rain.visible) {
      const a = this.rain.geometry.getAttribute("position") as Float32BufferAttribute;
      const p = a.array as Float32Array;
      const fall = (8 + 4 * w.rain) * dt;
      for (let i = 0; i < p.length; i += 6) {
        let y = p[i + 1] - fall;
        let x = p[i] + drift * dt;
        if (y < b.y0) {
          y += span;
          x = b.x0 + Math.random() * (b.x1 - b.x0);
        }
        if (x > b.x1) x -= b.x1 - b.x0;
        p[i] = x;
        p[i + 1] = y;
        p[i + 3] = x - drift * 0.05;
        p[i + 4] = y - 0.45;
        p[i + 5] = p[i + 2];
      }
      a.needsUpdate = true;
    }
    if (this.snow.visible) {
      const a = this.snow.geometry.getAttribute("position") as Float32BufferAttribute;
      const p = a.array as Float32Array;
      const t = now / 1000;
      for (let i = 0; i < p.length; i += 3) {
        let y = p[i + 1] - (0.9 + 0.6 * w.snow) * dt;
        let x = p[i] + (drift + Math.sin(t + i) * 0.4) * dt;
        if (y < b.y0) {
          y += span;
          x = b.x0 + Math.random() * (b.x1 - b.x0);
        }
        if (x > b.x1) x -= b.x1 - b.x0;
        p[i] = x;
        p[i + 1] = y;
      }
      a.needsUpdate = true;
    }
    return true;
  }

  /** The sun by day, the moon by night: a disc far out along its direction, paler under clouds. */
  private placeSky(): void {
    const sun = this.sun;
    const w = this.weather;
    const cloud = w?.cloud ?? 0;
    const night = !sun || sun.elevation < -3;
    if (!sun || !w || w.disc === false || cloud > 0.85 || (!night && sun.elevation < 1)) {
      this.skyDisc.visible = false;
      return;
    }
    const north = (this.building?.settings.north ?? 0) * DEG;
    const az = (night ? sun.azimuth + 180 : sun.azimuth) * DEG;
    const el = Math.max(10, Math.abs(sun.elevation)) * DEG;
    const { center, r } = this.skyFrame();
    const dir = new Vector3(Math.sin(north + az) * Math.cos(el), Math.sin(el), -Math.cos(north + az) * Math.cos(el));
    this.skyDisc.position.copy(center).addScaledVector(dir, r);
    this.skyDisc.scale.setScalar(r * (night ? 0.03 : 0.04));
    this.skyDisc.lookAt(center);
    const mat = this.skyDisc.material as MeshBasicMaterial;
    mat.color.set(night ? 0xcfd8ee : 0xffd98a);
    mat.opacity = (night ? 0.55 : 0.85) * (1 - cloud);
    this.skyDisc.visible = true;
  }

  /** The middle of the sky dome over the plot and its radius (the sun, the moon and the sun's arc lie on it). */
  private skyFrame(): { center: Vector3; r: number } {
    const b = this.weatherBox;
    return { center: new Vector3((b.x0 + b.x1) / 2, b.y0, (b.z0 + b.z1) / 2), r: Math.min(300, Math.max(80, this.houseRadius * 5)) };
  }

  /**
   * The sun's arc over the house and the house's shadow on the ground (⚙ House, on by default). The shadow belongs
   * to the whole-house view and rests on the tablet level; the arc shows by day on every level.
   */
  private buildSunFx(): void {
    const b = this.building;
    const sun = this.sun;
    const on = !!b && !!sun && b.settings.sun_shadow !== false;
    const north = (b?.settings.north ?? 0) * DEG;
    const cloud = this.weather?.cloud ?? 0;
    const shade = on && !this.lowQuality && sun.elevation > 1 && cloud < 0.9 && !this.roomTint;
    const sig = shade ? `${sun.elevation.toFixed(1)},${sun.azimuth.toFixed(1)},${north},${cloud.toFixed(1)},${this.theme},${this.roofGeos.length}` : "";
    if (sig !== this.shadowSig) {
      this.shadowSig = sig;
      if (shade) this.drawShadow(b, sun, north, cloud);
      else this.sunFx.hideShadow();
    }
    const path = this.sunPath;
    const arc = on && !!path && path.points.length > 1 && sun.elevation > -3;
    const frame = arc ? this.arcFrame() : null;
    const arcSig = arc && frame ? `${this.theme},${sun.elevation.toFixed(1)},${sun.azimuth.toFixed(1)},${this.compassLetters.join("")},${path.points[0].t},${north},${frame.x.toFixed(2)},${frame.z.toFixed(2)},${frame.y.toFixed(2)},${frame.r.toFixed(2)},${cloud.toFixed(1)}` : "";
    if (arcSig === this.arcSig) return;
    this.arcSig = arcSig;
    if (!arcSig || !frame || !path || !sun) return this.sunFx.hideArc();
    // a dome around the house: the sun's way at its real height, sunrise and sunset on the ground
    const at = (azimuth: number, elevation: number, lift = 0): [number, number, number] => {
      const e = Math.max(0, elevation) * DEG;
      const a = north + azimuth * DEG;
      return [frame.x + Math.sin(a) * Math.cos(e) * frame.r, frame.y + Math.sin(e) * frame.r + lift, frame.z - Math.cos(a) * Math.cos(e) * frame.r];
    };
    const fade = 1 - 0.7 * cloud;
    const now = Date.now();
    const time = (t: number) => new Date(t).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    const size = frame.r * 0.03;
    this.sunFx.setArc({
      points: path.points.map((p) => ({ at: at(p.azimuth, p.elevation), t: p.t, elevation: p.elevation })),
      now,
      hours: path.points.filter((p) => p !== path.rise && p !== path.set && new Date(p.t).getMinutes() === 0).map((p) => at(p.azimuth, p.elevation)),
      labels: [path.rise, path.set].flatMap((p) => (p ? [{ text: time(p.t), at: at(p.azimuth, p.elevation, size * 2.2), rising: p === path.rise }] : [])),
      sun: sun.elevation > 0 ? at(sun.azimuth, sun.elevation) : null,
      ring: { center: [frame.x, frame.y, frame.z], r: frame.r, north, letters: this.compassLetters },
      size,
      fade,
      light: this.theme !== "neon",
    });
  }

  /** Where the sun's arc stands: around the middle of the house, a little wider than the house, on its ground. */
  private arcFrame(): { x: number; y: number; z: number; r: number } | null {
    const b = this.building;
    const gf = b ? groundFloor(b) : null;
    const pts = b?.floors.flatMap((f) => f.rooms.filter((r) => !r.outdoor).flatMap((r) => r.points)) ?? [];
    if (!gf || !pts.length) return null;
    const xs = pts.map((p) => p[0]);
    const zs = pts.map((p) => p[1]);
    const [x0, x1, z0, z1] = [Math.min(...xs), Math.max(...xs), Math.min(...zs), Math.max(...zs)];
    return { x: (x0 + x1) / 2, z: (z0 + z1) / 2, y: gf.elevation, r: Math.max(7, Math.hypot(x1 - x0, z1 - z0) * 0.62) };
  }

  /** How dark it is outside (0 by day, 1 from 6° below the horizon on); 0 without a sun. */
  private nightFactor(): number {
    const sun = this.sun;
    return sun ? Math.min(1, Math.max(0, -sun.elevation / 6)) : 0;
  }

  /**
   * At night the light of a lit room falls out of its windows onto the ground in front: a soft patch in the
   * room's light colour, fading outwards, less behind a lowered blind (⚙ House, on by default). Only the floors
   * at ground level, a handful of triangles per window.
   */
  private buildSpill(fv: FloorView, sources: LightSource[]): void {
    const b = this.building;
    const night = b?.settings.window_glow === false ? 0 : this.nightFactor();
    const gf = b && night > 0 ? groundFloor(b) : null;
    const ground = !!gf && Math.abs(fv.floor.elevation - gf.elevation) < 0.5;
    // the light per light zone: colour weighted by brightness
    const zoneLight = new Map<number, [number, number, number, number]>();
    if (ground) {
      for (const l of sources) {
        const z = zoneLight.get(l.room) ?? [0, 0, 0, 0];
        z[0] += l.color[0] * l.level;
        z[1] += l.color[1] * l.level;
        z[2] += l.color[2] * l.level;
        z[3] += l.level;
        zoneLight.set(l.room, z);
      }
    }
    const covers = [...fv.openings.values()].map((o) => (o.cover ?? 0).toFixed(1)).join(",");
    const sig = ground && zoneLight.size ? `${night.toFixed(2)}|${[...zoneLight].map(([k, v]) => `${k}:${v.map((x) => x.toFixed(2)).join("/")}`).join(";")}|${covers}` : "";
    if (sig === fv.spillSig) return;
    fv.spillSig = sig;
    const buf = new GeoBuffer();
    if (sig) {
      for (const info of fv.geo.openings) {
        if (info.opening.type !== "window" || !info.exterior) continue;
        const ri = fv.floor.rooms.findIndex((r) => r.id === info.opening.room_id);
        const light = ri < 0 ? undefined : zoneLight.get(zoneOf(fv.lightZones, ri));
        if (!light || light[3] < 0.02) continue;
        const st = fv.openings.get(info.opening.id);
        const open = 1 - (st?.cover ?? 0);
        const height = info.top - info.sill;
        if (open < 0.05 || height < 0.1) continue;
        const peak = Math.max(light[0], light[1], light[2], 1e-6);
        const k = 0.3 * night * Math.min(1, light[3]) * open * Math.min(1, height / 1.2);
        const near = new Color((light[0] / peak) * k, (light[1] / peak) * k, (light[2] / peak) * k);
        // from the wall's outer face outwards, wider and fainter the further out (a tall window throws it further)
        const out: [number, number] = [-info.toRoom[0], -info.toRoom[1]];
        const len = Math.min(3.5, 0.8 + 1.1 * info.top);
        const spread = 0.35 * len;
        const mid = [info.start[0] + info.axis[0] * (info.width / 2) + out[0] * (info.faceOut + len / 2), info.start[1] + info.axis[1] * (info.width / 2) + out[1] * (info.faceOut + len / 2)];
        const y = groundUnder(fv.floor, { x: mid[0], z: mid[1] }) + 0.014;
        const at = (s: number, d: number) => {
          const t = d / len;
          const sx = -spread * t + s * (info.width + 2 * spread * t);
          return [info.start[0] + info.axis[0] * sx + out[0] * (info.faceOut + d), y, info.start[1] + info.axis[1] * sx + out[1] * (info.faceOut + d)];
        };
        // fading outwards and soft at both sides
        const rows = 4;
        const cols: [number, number][] = [[0, 0], [0.18, 1], [0.82, 1], [1, 0]];
        for (let i = 0; i < rows; i++) {
          const d0 = (len * i) / rows;
          const d1 = (len * (i + 1)) / rows;
          const f0 = (1 - i / rows) ** 2;
          const f1 = (1 - (i + 1) / rows) ** 2;
          for (let j = 0; j + 1 < cols.length; j++) {
            const [s0, w0] = cols[j];
            const [s1, w1] = cols[j + 1];
            const a = at(s0, d0);
            const bb = at(s1, d0);
            const c = at(s1, d1);
            const d = at(s0, d1);
            const ca = near.clone().multiplyScalar(f0 * w0);
            const cb = near.clone().multiplyScalar(f0 * w1);
            const cc = near.clone().multiplyScalar(f1 * w1);
            const cd = near.clone().multiplyScalar(f1 * w0);
            buf.tri(a, bb, c, ca, cb, cc);
            buf.tri(a, c, d, ca, cc, cd);
          }
        }
      }
    }
    fv.spillMesh.geometry.dispose();
    fv.spillMesh.geometry = buf.geometry();
    fv.spillMesh.visible = buf.count > 0;
  }

  /** Lays the house's shadow on the ground for this sun. */
  private drawShadow(b: Building, sun: SunState, north: number, cloud: number): void {
    const gf = groundFloor(b);
    const rooms = gf?.rooms.filter((r) => !r.outdoor && r.points.length >= 3) ?? [];
    if (!gf || !rooms.length) return this.sunFx.hideShadow();
    const xs = rooms.flatMap((r) => r.points.map((p) => p[0]));
    const zs = rooms.flatMap((r) => r.points.map((p) => p[1]));
    // the lawn beside the house (by default 20 cm below the floor)
    const lawn = gf.elevation + groundUnder(gf, { x: Math.min(...xs) - 1, z: (Math.min(...zs) + Math.max(...zs)) / 2 });
    const az = sun.azimuth * DEG;
    const tris = houseShadow(b, this.roofGeos, [Math.sin(north + az), -Math.cos(north + az)], sun.elevation, lawn);
    const box = shadowBox(tris);
    if (!box) return this.sunFx.hideShadow();
    // on a lawn just below the floor the shadow lies at the floor's height, so it falls over the terrace too; the
    // house's own floor stays clear of it
    const y = gf.elevation - lawn <= 0.35 ? gf.elevation + 0.012 : lawn + 0.012;
    const holes = b.floors.filter((f) => Math.abs(f.elevation - gf.elevation) < 0.5).flatMap((f) => f.rooms.filter((r) => !r.outdoor && r.points.length >= 3).map((r) => r.points));
    const strength = (this.theme === "neon" ? 0.6 : 0.34) * Math.min(1, sun.elevation / 8) * (1 - 0.8 * cloud);
    // a deep night blue on the neon look, a cool grey on the light ones: a shadow, not a hole
    this.sunFx.setShadow(this.renderer, tris, box, holes, y, strength, this.theme === "neon" ? 0x060418 : 0x1a2433);
  }

  /** Heatmap: floor colour per room id, or null for the normal look. */
  setRoomTint(tint: Map<string, [number, number, number]> | null): void {
    const changed = !!tint !== !!this.roomTint;
    this.roomTint = tint;
    this.tintTick = true;
    this.applyHighlight();
    if (changed) {
      for (const fv of this.floors) {
        fv.glowSig = "";
        this.buildGlow(fv);
        fv.sunSig = "";
        this.buildSun(fv);
      }
      this.buildSunFx();
    }
  }

  /** Screens of TVs and monitors that are on (by furniture id). */
  setScreens(screens: Map<string, ScreenState>): void {
    this.screens = screens;
    for (const fv of this.floors) this.buildScreens(fv);
    this.invalidate();
  }

  /** The room name, with a line of values below it when there is one. */
  private fillRoomPin(pin: HTMLElement, name: string, info: string | undefined): void {
    pin.textContent = name || "–";
    if (info) {
      const small = document.createElement("small");
      small.textContent = info;
      pin.append(small);
      pin.classList.add("fp3d-pin-info");
    } else pin.classList.remove("fp3d-pin-info");
  }

  /** Values behind the room names (the "values" heat mode); an empty map clears them. */
  setRoomInfo(info: Map<string, string>): void {
    const same = info.size === this.roomInfo.size && [...info].every(([k, v]) => this.roomInfo.get(k) === v);
    if (same) return;
    this.roomInfo = info;
    for (const fv of this.floors) for (const rp of fv.roomPins) this.fillRoomPin(rp.pin, rp.room.name, info.get(rp.room.id));
  }

  /** Text under the floor names in the house view, e.g. "5 rooms · 3 lights on · 1 open". */
  setFloorInfo(info: Map<string, string>): void {
    this.floorInfo = info;
    for (const fv of this.floors) {
      const span = fv.label.querySelector("span");
      const text = info.get(fv.floor.id) ?? this.options.floorInfo?.(fv.floor) ?? "";
      if (span && span.textContent !== text) {
        span.textContent = text;
        fv.labelSize = null;
        this.labelsDirty = true;
      }
    }
    this.invalidate();
  }

  /** Target states of doors and windows (sashes and blinds move there smoothly). */
  setOpeningStates(states: Map<string, OpeningState>, instant = false): void {
    this.openingTargets = states;
    // a jump in time (time travel): sashes and blinds stand at their targets at once
    if (instant)
      for (const fv of this.floors) {
        let changed = false;
        for (const [id, cur] of fv.openings) {
          const to = states.get(id) ?? CLOSED;
          const next = { ...to, open2: to.open2 ?? 0, tilt2: to.tilt2 ?? 0 };
          if (next.open === cur.open && next.open2 === (cur.open2 ?? 0) && next.tilt === cur.tilt && next.tilt2 === (cur.tilt2 ?? 0) && next.cover === cur.cover && !!next.sensed === !!cur.sensed && !!next.unlocked === !!cur.unlocked) continue;
          fv.openings.set(id, next);
          changed = true;
        }
        if (changed) {
          this.buildOpenings(fv);
          this.buildGlow(fv);
          this.buildSun(fv);
        }
      }
    this.invalidate();
  }

  /** Which doors of the smart fridges stand open; the doors swing there over a few frames. */
  setFridgeDoors(doors: Map<string, { left: boolean; right: boolean }>): void {
    const fresh = new Set<string>();
    for (const [id, d] of doors) {
      if (!this.fridges.has(id)) fresh.add(id);
      const st = this.fridges.get(id) ?? { l: d.left ? 1 : 0, r: d.right ? 1 : 0, tl: 0, tr: 0 };
      st.tl = d.left ? 1 : 0;
      st.tr = d.right ? 1 : 0;
      this.fridges.set(id, st);
    }
    for (const id of [...this.fridges.keys()]) if (!doors.has(id)) this.fridges.delete(id);
    this.showFresh(fresh);
    this.invalidate();
  }

  /**
   * Awnings: how far each is out now and where it is going. A reported position is followed smoothly (a cover that
   * reports while it runs shows the awning run out slowly); without one it runs at its run time while it says
   * opening or closing.
   */
  private awnings = new Map<string, { cur: number; to: number; speed: number }>();

  setAwnings(states: Map<string, { out: number | null; moving: -1 | 0 | 1; time: number }>): void {
    const fresh = new Set<string>();
    for (const [id, a] of states) {
      if (!this.awnings.has(id)) fresh.add(id);
      const st = this.awnings.get(id) ?? { cur: a.out ?? 0, to: a.out ?? 0, speed: 0 };
      if (a.out === null) {
        st.to = a.moving > 0 ? 1 : 0;
        st.speed = 1 / Math.max(2, a.time);
      } else {
        st.to = a.out;
        st.speed = 0;
      }
      this.awnings.set(id, st);
    }
    for (const id of [...this.awnings.keys()]) if (!states.has(id)) this.awnings.delete(id);
    this.showFresh(fresh);
    this.invalidate();
  }

  /**
   * Fridge doors and awnings seen for the first time start where their entity says (an awning already out, a door
   * already open) – nothing moves then, so their floor's mesh is rebuilt right away (#546).
   */
  private showFresh(fresh: Set<string>): void {
    if (!fresh.size) return;
    for (const fv of this.floors) if (fv.floor.furniture.some((f) => fresh.has(f.id))) this.buildFridges(fv);
  }

  private stepAwnings(dt: number): Set<string> {
    const touched = new Set<string>();
    // a reported position: eased over about a second, so steps of a moving cover read as a smooth run (dt in ms)
    const k = 1 - Math.exp(-dt / 450);
    for (const [id, st] of this.awnings) {
      const d = st.to - st.cur;
      if (Math.abs(d) < 0.002) {
        if (d !== 0) {
          st.cur = st.to;
          touched.add(id);
        }
        continue;
      }
      st.cur = st.speed > 0 ? st.cur + Math.sign(d) * Math.min(Math.abs(d), (st.speed * dt) / 1000) : st.cur + d * k;
      touched.add(id);
    }
    return touched;
  }

  private stepFridges(dt: number): boolean {
    const k = 1 - Math.exp(-dt / OPENING_TAU);
    const touched = new Set<string>();
    for (const [id, st] of this.fridges) {
      for (const [cur, to] of [["l", "tl"], ["r", "tr"]] as const) {
        const d = st[to] - st[cur];
        if (Math.abs(d) < 0.004) {
          if (d !== 0) {
            st[cur] = st[to];
            touched.add(id);
          }
          continue;
        }
        st[cur] += d * k;
        touched.add(id);
      }
    }
    for (const id of this.stepAwnings(dt)) touched.add(id);
    if (!touched.size) return false;
    for (const fv of this.floors) if (fv.floor.furniture.some((f) => touched.has(f.id))) this.buildFridges(fv);
    return true;
  }

  private buildFridges(fv: FloorView): void {
    const buf = new GeoBuffer();
    for (const f of fv.floor.furniture) {
      if (f.type !== "fridge_smart") continue;
      const st = this.fridges.get(f.id);
      pushFridgeDoors(buf, f, mountBase(fv.floor, f), st?.l ?? 0, st?.r ?? 0);
    }
    // awnings ride in the same mesh: they run out and in with their cover
    for (const f of fv.floor.furniture) if (f.type === "awning") pushAwning(buf, f, mountBase(fv.floor, f), this.awnings.get(f.id)?.cur ?? 0);
    // so do a motorised curtain and a roll-down screen from a pack (#511)
    for (const f of fv.floor.furniture) {
      const kind = packMotion(f.type);
      const item = kind ? packItem(f.type) : undefined;
      if (kind && item) pushPackMotion(buf, item, kind, f, mountBase(fv.floor, f), this.awnings.get(f.id)?.cur ?? 0);
    }
    fv.fridgeMesh.geometry.dispose();
    fv.fridgeMesh.geometry = buf.geometry();
    fv.fridgeMesh.visible = buf.count > 0;
  }

  resetView(): void {
    this.fit(700);
  }

  /** The camera the house view opens with (null: fitted from the front left). */
  setStartView(view: StartView | null): void {
    this.startView = view;
  }

  /**
   * The camera as it stands: angles, distance and the point it looks at – with a floor opened, that
   * point's height counts from the floor (it opens there however the floors are stacked).
   */
  currentView(): StartView {
    const v = this.controls.view;
    const base = this.floorBase(this.floorId);
    // the camera may have turned round several times: the angle counts once round (−π … π, #416)
    const theta = Math.atan2(Math.sin(v.theta), Math.cos(v.theta));
    return { theta, phi: v.phi, radius: v.radius, target: { x: v.target.x, y: v.target.y - base, z: v.target.z } };
  }

  /** Height of a floor as it is shown now (0 for the house view). */
  private floorBase(floorId: string | null): number {
    const fv = floorId === null ? undefined : this.floorMap.get(floorId);
    return fv ? fv.floor.elevation + fv.ty : 0;
  }

  /** Lab prototype: cameras whose current picture is cast onto the plan (an empty list ends it). */
  private projections = new CameraProjections(() => this.invalidate());

  setProjections(list: readonly { id: string; url: string }[]): void {
    this.projections.set(list);
    this.invalidate();
  }

  /** Where a placed camera hangs and looks (as when looking through it), for its picture to be cast from there. */
  private projectorPose(id: string): ProjectorPose | null {
    const d = this.devices.find((m) => m.id === id && m.model);
    const fv = d && this.floorMap.get(d.floorId);
    if (!d || !fv || !fv.group.visible) return null;
    const a = (d.rotation ?? 0) * DEG;
    const ceiling = d.model === "camera_ceiling";
    const tilt = Math.min(1.45, Math.max(0.05, (d.tilt ?? (ceiling ? 65 : 20)) * DEG));
    const y = fv.floor.elevation + fv.ty + (ceiling ? fv.floor.height - 0.1 : d.y);
    return {
      position: new Vector3(d.x, y, d.z),
      direction: new Vector3(-Math.sin(a) * Math.cos(tilt), -Math.sin(tilt), Math.cos(a) * Math.cos(tilt)),
      fov: Math.min(d.fov ?? (ceiling ? 120 : 90), 140),
      // as far as the camera's wedge reaches, a good deal further (the wedge is drawn short), at most 30 m
      reach: Math.min(30, Math.max(8, (d.reach ?? (ceiling ? 3 : 4.5)) * 2.5)),
    };
  }

  /** Before a frame: the projected camera pictures follow the floors (pulled apart, rebuilt, faded). */
  private updateProjections(): void {
    const surfaces: ProjectionSurface[] = [];
    for (const fv of this.floors) {
      const visible = fv.group.visible && fv.o > 0.5;
      for (const m of [fv.floorMesh, fv.wallMesh]) m.layers.enable(PROJECTION_LAYER);
      surfaces.push({ key: `${fv.floor.id}:floor`, geometry: fv.floorMesh.geometry, parent: fv.group, masks: fv.mask, visible });
      surfaces.push({ key: `${fv.floor.id}:walls`, geometry: fv.wallMesh.geometry, parent: fv.group, masks: fv.mask, visible });
    }
    this.ground.layers.enable(PROJECTION_LAYER);
    surfaces.push({ key: "ground", geometry: this.ground.geometry, parent: this.ground, masks: null, visible: this.ground.visible });
    const layout = this.floors.map((f) => `${f.floor.id}:${f.ty.toFixed(2)}:${f.floorMesh.geometry.uuid}:${f.wallMesh.geometry.uuid}`).join(";") + `|${this.ground.position.toArray().join(",")}`;
    this.projections.update(this.renderer, this.scene, surfaces, (id) => this.projectorPose(id), layout);
  }

  dispose(): void {
    this.projections.dispose();
    this.disposed = true;
    cancelAnimationFrame(this.frame);
    clearTimeout(this.flowTimer);
    clearTimeout(this.effectTimer);
    clearTimeout(this.robotTimer);
    clearTimeout(this.fanTimer);
    clearTimeout(this.orbitTimer);
    clearTimeout(this.weatherTimer);
    for (const o of [this.rain, this.snow, this.skyDisc]) {
      o.geometry.dispose();
      (o.material as Material).dispose();
    }
    this.sunFx.dispose();
    this.resizeObserver.disconnect();
    this.intersection?.disconnect();
    document.removeEventListener("visibilitychange", this.onVisibility);
    for (const type of ["pointerdown", "pointerup", "wheel", "keydown"]) this.host.removeEventListener(type, this.onInput, { capture: true });
    clearTimeout(this.decorTimer);
    this.controls.dispose();
    this.clear();
    this.disposeRetired();
    this.building = null;
    this.buildRoofMesh();
    this.ground.geometry.dispose();
    (this.ground.material as Material).dispose();
    this.patternTexture.dispose();
    this.blindTexture.dispose();
    this.groundTexture?.dispose();
    this.haloTexture.dispose();
    for (const r of this.robots.values()) {
      r.led.dispose();
      for (const g of r.own) g.dispose();
    }
    this.robots.clear();
    this.robotGeo?.dispose();
    this.robotLedGeo?.dispose();
    this.robotMat?.dispose();
    for (const f of this.fans.values()) f.mesh.geometry.dispose();
    this.fans.clear();
    this.fanMat?.dispose();
    this.renderer.dispose();
    // frees the GPU context now instead of when the garbage collector gets to it
    this.renderer.forceContextLoss();
    this.renderer.domElement.remove();
    this.labels.remove();
  }

  invalidate(): void {
    if (this.frame || this.disposed || document.hidden || !this.onScreen) return;
    this.frame = requestAnimationFrame((t) => this.render(t));
  }

  // ------------------------------------------------------------------ internals

  private makeRenderer(quality: Quality): WebGLRenderer {
    const low = quality === "low" || (quality === "auto" && isLowEnd());
    this.lowQuality = low;
    this.applyWeather();
    this.highQuality = quality === "high";
    const renderer = new WebGLRenderer({ antialias: !low, alpha: true, powerPreference: low ? "low-power" : "default" });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, low ? 1 : quality === "high" ? 2.5 : 2));
    renderer.setClearColor(0x000000, 0);
    renderer.outputColorSpace = SRGBColorSpace;
    renderer.domElement.className = "fp3d-canvas";
    this.host.prepend(renderer.domElement);
    return renderer;
  }

  private makeControls(): OrbitControls {
    return new OrbitControls(this.renderer.domElement, this.camera, {
      change: () => this.invalidate(),
      tap: (x, y) => this.onTap(x, y),
      hold: (x, y) => this.onHold(x, y),
      swipeStart: (x, y, dx, dy) => this.swipeStart(x, y, dx, dy),
      swipeMove: (dy) => this.swipe && this.options.onDeviceSwipe?.(this.swipe.entity, "move", dy, this.swipe.x, this.swipe.y),
      swipeEnd: () => {
        if (this.swipe) this.options.onDeviceSwipe?.(this.swipe.entity, "end", 0, this.swipe.x, this.swipe.y);
        this.swipe = null;
      },
      grab: (x, y) => this.grabFurniture(x, y),
      drag: (x, y) => this.dragFurniture(x, y),
      drop: () => this.dropFurniture(),
      doubleTap: (x, y) => {
        const hit = this.floorId && this.options.onRoomDoubleTap ? this.pick(x, y) : null;
        if (hit && !("entity" in hit) && hit.roomId) this.options.onRoomDoubleTap!(hit.floorId, hit.roomId);
        else this.options.onBack?.();
      },
    });
  }

  private readonly onVisibility = () => {
    if (!document.hidden) this.invalidate();
  };

  private resize(): void {
    const w = this.host.clientWidth || 1;
    const h = this.host.clientHeight || 1;
    this.size = { w, h };
    this.labelsDirty = true;
    this.renderer.setSize(w, h, false);
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
    this.invalidate();
  }

  /** Materials of a previous build, disposed after the next frame (see clear()). */
  private retired: Material[] = [];

  private disposeRetired(): void {
    if (!this.retired.length) return;
    for (const m of this.retired) m.dispose();
    this.retired = [];
  }

  private clear(): void {
    // robots share one geometry: keep them out of the floor groups while those are disposed
    for (const r of this.robots.values()) r.group.removeFromParent();
    for (const f of this.fans.values()) f.group.removeFromParent();
    for (const fv of this.floors) {
      for (const pic of fv.screenPics.values()) {
        (pic.mesh.material as Material).dispose();
        pic.texture?.dispose();
      }
      fv.group.traverse((o) => {
        const g = (o as Mesh).geometry as BufferGeometry | undefined;
        g?.dispose();
      });
      // the floor materials are disposed after the next frame, once the new ones use the same shader programs:
      // disposing them now let three.js delete the programs and compile them again on every rebuild – a
      // dragged corner with the 3D view beside the plan rebuilt (and recompiled) the house many times (#645)
      for (const m of Object.values(fv.materials)) this.retired.push(m);
      this.root.remove(fv.group);
    }
    this.floors = [];
    this.floorMap = new Map();
    // device pins survive a rebuild; only floor and room labels are recreated
    for (const el of [...this.labels.children]) if (!(el as HTMLElement).dataset.entity) el.remove();
  }

  private makeDevicePin(entityId: string): HTMLButtonElement {
    const pin = document.createElement("button");
    pin.className = "fp3d-dev";
    pin.dataset.entity = entityId;
    const icon = document.createElement("span");
    icon.className = "fp3d-dev-icon";
    const text = document.createElement("span");
    text.className = "fp3d-dev-text";
    const watt = document.createElement("span");
    watt.className = "fp3d-dev-watt";
    const name = document.createElement("span");
    name.className = "fp3d-dev-name";
    pin.append(icon, text, watt, name);
    let timer: ReturnType<typeof setTimeout> | undefined;
    let held = false;
    pin.addEventListener("pointerdown", (e) => {
      if (this.furnish) {
        // the controls see this pointer too (no stopPropagation) and call grab(): the device is dragged
        this.pendingDevice = entityId;
        return;
      }
      e.stopPropagation();
      held = false;
      clearTimeout(timer);
      timer = setTimeout(() => {
        held = true;
        const r = pin.getBoundingClientRect();
        const h = this.host.getBoundingClientRect();
        this.options.onDeviceHold?.(entityId, r.left + r.width / 2 - h.left, r.top + r.height / 2 - h.top);
      }, HOLD_MS);
    });
    const cancel = () => clearTimeout(timer);
    pin.addEventListener("pointerleave", cancel);
    pin.addEventListener("pointercancel", cancel);
    pin.addEventListener("pointerup", cancel);
    pin.addEventListener("contextmenu", (e) => e.preventDefault());
    pin.addEventListener("click", (e) => {
      e.stopPropagation();
      if (this.furnish) {
        this.selectDevice(entityId);
        this.options.onDeviceSelect?.(entityId);
        return;
      }
      if (held) return;
      const r = pin.getBoundingClientRect();
      const h = this.host.getBoundingClientRect();
      this.options.onDeviceTap?.(entityId, r.left + r.width / 2 - h.left, r.top + r.height / 2 - h.top);
    });
    pin.addEventListener("keydown", (e) => {
      // keyboard: Enter acts like a tap; Shift+Enter or the context-menu key opens the details
      if ((e.key === "Enter" && e.shiftKey) || e.key === "ContextMenu") {
        e.preventDefault();
        const r = pin.getBoundingClientRect();
        const h = this.host.getBoundingClientRect();
        this.options.onDeviceHold?.(entityId, r.left + r.width / 2 - h.left, r.top + r.height / 2 - h.top);
      }
    });
    return pin;
  }

  /** Light cones of the lights that are on, merged into one mesh per floor. */
  /** Light surface of a floor (rebuilt with the floor plan and when the detail level changes). */
  private buildLightSurface(fv: FloorView): void {
    const cell = this.lowQuality ? 0.5 : 0.25;
    const surface = buildLightSurface(fv.floor, fv.geo.walls2d, fv.geo.wallBuckets, fv.geo.openings, cell, fv.geo.holes, fv.geo.roofUnder);
    // rooms joined by "no wall" form one zone: a lamp lights the open neighbour as if it stood in the same room
    const zones = lightZonesOf(fv.floor, fv.geo.openRooms);
    fv.lightZones = zones.some((z, i) => z !== i) ? zones : null;
    if (fv.lightZones) {
      for (let i = 0; i < surface.room.length; i++) {
        const r = surface.room[i];
        if (r >= 0 && r < zones.length) surface.room[i] = zones[r];
      }
      for (const door of surface.doors) {
        if (door.a >= 0 && door.a < zones.length) door.a = zones[door.a];
        if (door.b >= 0 && door.b < zones.length) door.b = zones[door.b];
      }
      for (const w of surface.blockers) {
        w.ra = zoneOf(zones, w.ra);
        w.rb = zoneOf(zones, w.rb);
      }
    }
    fv.lightSurface = surface;
    const g = new Geometry();
    g.setAttribute("position", new Float32BufferAttribute(surface.pos, 3));
    g.setAttribute("color", new Float32BufferAttribute(new Float32Array(surface.pos.length), 3));
    g.setAttribute("fold", new Float32BufferAttribute(surface.fold, 1));
    // the index lists the lit quads; it is filled in place (a new index every change would leak)
    const index = new Uint32BufferAttribute(new Uint32Array(surface.pos.length / 3), 1);
    index.setUsage(DynamicDrawUsage);
    g.setIndex(index);
    g.setDrawRange(0, 0);
    g.computeBoundingSphere();
    fv.glowMesh.geometry.dispose();
    fv.glowMesh.geometry = g;
    fv.glowSig = "";
    this.buildGlow(fv);
  }

  /**
   * A wall lamp from a furniture pack: the centre of its glowing parts (plan x, height, plan z), where its halo and its
   * light sit (#680); null for any other lamp and for a pack lamp without glowing parts (they keep their old places).
   */
  private packLightAt(d: DeviceMarker): [number, number, number] | null {
    if (d.lamp !== "wall" || !d.pack) return null;
    const item = packItem(d.pack);
    if (!item) return null;
    const [w, dd, h] = d.size ?? LAMP_SIZE.wall;
    return packGlowCentre(item, { x: d.x, z: d.z, rotation: d.rotation ?? 0, w, d: dd, h, mirror: d.mirror }, d.base ?? 0);
  }

  /** Light sources of the lights that are on, with the height and characteristic of their lamp. */
  private lightSources(fv: FloorView): LightSource[] {
    const out: LightSource[] = [];
    for (const d of this.devices) {
      const glow = this.glowOf(d);
      if (d.floorId !== fv.floor.id || !glow) continue;
      const H = d.top ?? fv.floor.height;
      const ri = roomIndexAt(fv.floor, d.x, d.z);
      const room = zoneOf(fv.lightZones, ri);
      const [w, , h] = d.size ?? (d.lamp ? LAMP_SIZE[d.lamp] : [0.3, 0.3, 0.3]);
      const base = d.base ?? 0;
      const kinds: Record<LampModel, [number, LightKind]> = {
        ceiling: [H - 0.12, "ceiling"],
        downlight: [H - 0.03, "spot"],
        spot: [H - h, "spot"],
        panel: [H - 0.05, "ceiling"],
        pendant: [Math.max(0.5, H - h), "pendant"],
        fan: [Math.max(0.5, H - h), "pendant"],
        floor: [base + h - 0.15, "omni"],
        uplight: [base + h, "up"],
        table: [base + h - 0.1, "omni"],
        wall: [base + 0.1, "wall"],
        // a strip under the ceiling or the wall cabinets shines down; one low down (skirting,
        // behind a cabinet) washes the wall and the floor around it from below
        strip: [base + Math.max(0.02, h) - 0.01, base < LOW_STRIP ? "up" : "ceiling"],
        bollard: [base + h - 0.08, "ceiling"],
        garden: [base + h, "up"],
      };
      const [y0, kind] = d.lamp ? kinds[d.lamp] : [d.y, "omni" as LightKind];
      const y = d.lightY ?? y0;
      const color = glow.color;
      if (d.lamp === "strip") {
        // a strip lights along its length: three sources spread over it; standing upright they climb,
        // and a strip turned on its side (or standing) lights all around rather than up or down
        const a = (d.rotation ?? 0) * DEG;
        const sideways = !!d.upright || Math.abs(d.roll ?? 0) > 45;
        for (const t of [-1 / 3, 0, 1 / 3]) {
          if (d.upright) out.push({ x: d.x, y: base + w * (0.5 + t), z: d.z, color, level: glow.level * 0.55, kind: "omni", room });
          else {
            // a rising strip: its sources climb with it
            const r = (d.rise ?? 0) * DEG;
            out.push({ x: d.x + Math.cos(a) * w * t * Math.cos(r), y: y + Math.sin(r) * w * t, z: d.z + Math.sin(a) * w * t * Math.cos(r), color, level: glow.level * 0.55, kind: sideways || r ? "omni" : kind, room });
          }
        }
      } else {
        // a wall lamp from a pack shines from its glowing parts (the lantern's glass), not from in front of it (#680)
        const at = this.packLightAt(d);
        out.push({ x: at ? at[0] : d.x, y: at ? at[1] : y, z: at ? at[2] : d.z, color, level: glow.level, kind, room });
      }
    }
    out.push(...this.lightFromAbove(fv));
    return out;
  }

  /**
   * Light falling down a stairwell or floor opening (#570): the lamps of the floor above that hang over the opening or
   * close to it shine into this floor from the opening, a little weaker and in their colour.
   */
  private lightFromAbove(fv: FloorView): LightSource[] {
    const top = fv.floor.elevation + fv.floor.height;
    const above = this.floors.find((f) => f !== fv && Math.abs(f.floor.elevation - top) < 0.8 && f.geo.holes.length);
    if (!above) return [];
    const out: LightSource[] = [];
    for (const hole of above.geo.holes) {
      if (hole.length < 3) continue;
      let weight = 0;
      const color: [number, number, number] = [0, 0, 0];
      for (const d of this.devices) {
        if (d.floorId !== above.floor.id) continue;
        const glow = this.glowOf(d);
        if (!glow) continue;
        // full strength over the opening, none from 1.5 m beside it
        const dist = pointInPolygon([d.x, d.z], hole) ? 0 : distanceToRing(d.x, d.z, hole);
        if (dist > REACH_DOWN) continue;
        const k = glow.level * (1 - dist / REACH_DOWN);
        for (let i = 0; i < 3; i++) color[i] += glow.color[i] * k;
        weight += k;
      }
      if (weight < 0.02) continue;
      const [x, z] = centroid(hole);
      out.push({
        x,
        y: fv.floor.height - 0.05,
        z,
        color: [color[0] / weight, color[1] / weight, color[2] / weight],
        level: Math.min(1, weight) * 0.6,
        kind: "ceiling",
        room: zoneOf(fv.lightZones, roomIndexAt(fv.floor, x, z)),
      });
    }
    return out;
  }

  /** Colours of the light surface for the current lights and doors. */
  private buildGlow(fv: FloorView): void {
    const surface = fv.lightSurface;
    if (!surface) return;
    const sources = this.lightSources(fv);
    this.buildSpill(fv, sources);
    const doorOpen = surface.doors.map((d) => {
      const info = fv.geo.openings.find((i) => i.opening.id === d.id);
      if (info && openingStyle(info.opening, info.exterior) === "passage") return 1;
      const o = fv.openings.get(d.id);
      return o ? Math.max(o.open, o.open2 ?? 0) : 0.5;
    });
    const sig =
      sources.map((l) => `${l.x.toFixed(2)},${l.y.toFixed(2)},${l.z.toFixed(2)},${l.kind},${l.level.toFixed(3)},${l.color.map((c) => c.toFixed(3)).join("/")}`).join(";") +
      "|" +
      doorOpen.map((o) => o.toFixed(1)).join(",");
    if (sig === fv.glowSig) return;
    fv.glowSig = sig;
    const g = fv.glowMesh.geometry;
    const attr = g.getAttribute("color") as Float32BufferAttribute;
    if (!sources.length) {
      fv.glowMesh.visible = false;
      g.setDrawRange(0, 0);
      return;
    }
    const colors = lightColors(surface, sources, 0.42, doorOpen);
    if (this.roomTint) {
      // the heatmap is an analysis view: inside the rooms the light is only a hint, so their colours read;
      // outside (garden, outer walls) it stays as it is (D205)
      const outside = fv.floor.rooms.length;
      for (let v = 0; v < surface.room.length; v++) {
        if (surface.room[v] === outside) continue;
        for (let k = 0; k < 3; k++) colors[v * 3 + k] *= 0.12;
      }
    }
    (attr.array as Float32Array).set(colors);
    attr.needsUpdate = true;
    // only quads that receive light are drawn (dark ones would cost fill rate for nothing)
    const index = g.index!.array as Uint32Array;
    let n = 0;
    for (let q = 0; q < colors.length / 18; q++) {
      let lit = false;
      for (let k = q * 18; k < q * 18 + 18 && !lit; k++) lit = colors[k] > 0.004;
      if (lit) for (let v = 0; v < 6; v++) index[n++] = q * 6 + v;
    }
    g.index!.needsUpdate = true;
    g.setDrawRange(0, n);
    fv.glowMesh.visible = n > 0;
  }

  private makeMaterials(mask: FoldMasks): FloorMaterials {
    return {
      floor: themed(new MeshBasicMaterial({ vertexColors: true }), this.themeUniform),
      pattern: patternMaterial(this.patternTexture),
      // the walls sit a hair behind their glowing edges in depth: lines lying on a wall's top or face no longer
      // flicker in and out at corners and joints as the view turns (#417)
      wall: themed(makeFoldable(new MeshBasicMaterial({ vertexColors: true, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 1 }), mask, "solid"), this.themeUniform),
      glassWall: makeFoldable(new MeshBasicMaterial({ vertexColors: true, transparent: true, depthWrite: false }), mask, "glass"),
      // result = floor colour * vertex colour (white leaves the floor untouched)
      shadow: new MeshBasicMaterial({
        vertexColors: true,
        blending: MultiplyBlending,
        premultipliedAlpha: true,
        transparent: true,
        depthWrite: false,
        side: DoubleSide,
        polygonOffset: true,
        polygonOffsetFactor: -1,
      }),
      lines: themed(
        makeFoldable(new LineBasicMaterial({ vertexColors: true, transparent: true, blending: lineBlending(this.theme), depthWrite: false }), mask),
        this.themeUniform,
        true,
      ),
      // light on floors and walls follows cut and glass walls like the walls themselves
      glow: makeFoldable(
        new MeshBasicMaterial({
          vertexColors: true,
          transparent: true,
          blending: AdditiveBlending,
          depthWrite: false,
          side: DoubleSide,
          polygonOffset: true,
          polygonOffsetFactor: -3,
        }),
        mask,
        "solid",
      ),
      frames: themed(makeFoldable(new MeshBasicMaterial({ vertexColors: true, side: DoubleSide }), mask), this.themeUniform),
      glass: makeFoldable(
        new MeshBasicMaterial({ vertexColors: true, transparent: true, blending: AdditiveBlending, depthWrite: false, side: DoubleSide }),
        mask,
      ),
      blinds: themed(makeFoldable(new MeshBasicMaterial({ map: this.blindTexture, vertexColors: true, side: DoubleSide }), mask), this.themeUniform),
      water: themed(new MeshBasicMaterial({ vertexColors: true, transparent: true, opacity: 0.5, depthWrite: false, side: DoubleSide }), this.themeUniform),
      flow: flowMaterial(this.flowTime),
      pipeLine: pipeLineMaterial(this.flowTime),
      // a module's surfaces: colour and opacity per vertex, over the floor without hiding what stands on it
      patch: new MeshBasicMaterial({ vertexColors: true, transparent: true, depthWrite: false, side: DoubleSide, polygonOffset: true, polygonOffsetFactor: -2, polygonOffsetUnits: -2 }),
      patchGlow: new MeshBasicMaterial({ vertexColors: true, transparent: true, blending: AdditiveBlending, depthWrite: false, side: DoubleSide, polygonOffset: true, polygonOffsetFactor: -2, polygonOffsetUnits: -2 }),
      solarLive: solarLiveMaterial(this.flowTime),
      lamps: themed(new MeshBasicMaterial({ vertexColors: true }), this.themeUniform),
      halos: new PointsMaterial({
        map: this.haloTexture,
        size: 0.9,
        sizeAttenuation: true,
        vertexColors: true,
        transparent: true,
        blending: AdditiveBlending,
        depthWrite: false,
      }),
      cones: new MeshBasicMaterial({ vertexColors: true, transparent: true, blending: AdditiveBlending, depthWrite: false, side: DoubleSide }),
      screens: new MeshBasicMaterial({ vertexColors: true, transparent: true, blending: AdditiveBlending, depthWrite: false, side: DoubleSide }),
      earth: themed(new MeshBasicMaterial({ vertexColors: true }), this.themeUniform),
      earthWell: themed(new MeshBasicMaterial({ vertexColors: true, side: DoubleSide }), this.themeUniform),
      earthLines: themed(new LineBasicMaterial({ vertexColors: true, transparent: true, depthWrite: false }), this.themeUniform, true),
    };
  }

  private rebuild(): void {
    const previous = new Map(this.floors.map((f) => [f.floor.id, { y: f.y, o: f.o }]));
    const previousOpenings = new Map(this.floors.map((f) => [f.floor.id, f.openings]));
    this.clear();
    const b = this.building;
    if (!b) return;
    const ordered = [...b.floors].sort((p, q) => p.elevation - q.elevation);
    for (const floor of b.floors) {
      // solar fields in the garden stand on the ground floor, wall fields hang on their floor's walls
      const fields = b.settings.roof?.solar ?? [];
      const garden = groundFloor(b)?.id === floor.id ? fields.filter((f) => f.face === GROUND).map((field) => ({ field, face: groundFace(b, field) })) : [];
      const onWalls = fields.filter((f) => f.face.startsWith(`wall:${floor.id}:`));
      if (onWalls.length) {
        const walls = new Map(wallFaces(b, floor.id).map((w) => [w.key, w]));
        for (const field of onWalls) {
          const face = walls.get(field.face);
          if (face) garden.push({ field, face });
        }
      }
      // an attic floor: its walls end under the roof sections above it
      // every floor whose ceiling lies above a section's base is cut by the slopes – the attic, and the
      // floor below it when the slope already starts there (a roof that reaches down past the ceiling)
      const sloped = activeSections(b).some((s) => sectionCutsBelow(s, floor.elevation + floor.height) && sectionAbove(s, floor.elevation));
      const roofUnder = sloped
        ? (x: number, z: number) => {
            const y = roofUnderAt(b, x, z, floor.elevation);
            return y === null ? null : y - floor.elevation;
          }
        : undefined;
      const geo = buildFloorGeometry(withVehicles(floor, this.parked), b.settings.wall_exterior, b.settings.wall_interior, stairHoleParts(b.floors, floor), garden, roofUnder);
      const mask: FoldMasks = { standing: { value: 0xffff }, glass: { value: 0 } };
      const materials = this.makeMaterials(mask);
      const group = new Group();
      const floorMesh = new Mesh(geo.floor, materials.floor);
      const shadowMesh = new Mesh(geo.shadow, materials.shadow);
      shadowMesh.renderOrder = 1;
      const pattern = new Mesh(geo.floor, materials.pattern);
      pattern.renderOrder = 2;
      const glowMesh = new Mesh(new Geometry(), materials.glow);
      glowMesh.renderOrder = 3;
      glowMesh.visible = false;
      const framesMesh = new Mesh(new Geometry(), materials.frames);
      const blindsMesh = new Mesh(new Geometry(), materials.blinds);
      const glassMesh = new Mesh(new Geometry(), materials.glass);
      glassMesh.renderOrder = 4;
      const lampMesh = new Mesh(new Geometry(), materials.lamps);
      lampMesh.visible = false;
      const sunMesh = new Mesh(new Geometry(), materials.cones);
      sunMesh.visible = false;
      sunMesh.renderOrder = 3;
      const spillMesh = new Mesh(new Geometry(), materials.cones);
      spillMesh.visible = false;
      spillMesh.renderOrder = 3;
      const haloMesh = new Points(new Geometry(), materials.halos);
      haloMesh.visible = false;
      haloMesh.renderOrder = 7;
      const coneMesh = new Mesh(new Geometry(), materials.cones);
      coneMesh.visible = false;
      coneMesh.renderOrder = 7;
      const trailMesh = new Mesh(new Geometry(), materials.cones);
      trailMesh.visible = false;
      trailMesh.renderOrder = 7;
      const fridgeMesh = new Mesh(new Geometry(), materials.lamps);
      fridgeMesh.visible = false;
      const pipeMesh = new Mesh(new Geometry(), materials.lamps);
      pipeMesh.visible = false;
      const patchMesh = new Mesh(new Geometry(), materials.patch);
      patchMesh.visible = false;
      patchMesh.renderOrder = 3;
      const patchGlowMesh = new Mesh(new Geometry(), materials.patchGlow);
      patchGlowMesh.visible = false;
      patchGlowMesh.renderOrder = 3;
      const screenMesh = new Mesh(new Geometry(), materials.screens);
      screenMesh.visible = false;
      screenMesh.renderOrder = 5;
      const flowMesh = new Mesh(new Geometry(), materials.flow);
      flowMesh.renderOrder = 5;
      flowMesh.frustumCulled = false;
      const pipeLineMesh = new Mesh(new Geometry(), materials.pipeLine);
      const pipeHouseMesh = new Mesh(new Geometry(), materials.pipeLine);
      const pipeFloorMesh = new Mesh(new Geometry(), materials.pipeLine);
      for (const m of [pipeLineMesh, pipeHouseMesh, pipeFloorMesh]) {
        m.renderOrder = 4;
        m.frustumCulled = false;
        m.visible = false;
      }
      // the living overlay of the garden and wall fields
      const solarLive = buildSolarLive(garden, floor.elevation);
      const solarMesh = solarLive ? new Mesh(solarLive.geometry, materials.solarLive) : null;
      if (solarMesh) {
        solarMesh.renderOrder = 6;
        writeSolarLevels(solarLive!, this.solarLevels);
      }
      // the fold shader moves hidden parts, so the bounding spheres must not cull them early
      for (const m of [framesMesh, blindsMesh, glassMesh]) m.frustumCulled = false;
      // glass walls are drawn after everything opaque in the room, so doors and furniture show through
      const glassWalls = new Mesh(geo.walls, materials.glassWall);
      const wallMesh = new Mesh(geo.walls, materials.wall);
      glassWalls.renderOrder = 6;
      // pool water after the basin, see-through
      const waterMesh = new Mesh(geo.water, materials.water);
      waterMesh.renderOrder = 4;
      // a cellar, a semi-basement: the earth around it (never tapped)
      const lowestWithRooms = Math.min(...b.floors.filter((f) => f.rooms.length).map((f) => f.elevation));
      const earthGeo = buildEarth(b, floor, geo.openings, floor.elevation === lowestWithRooms);
      const earthParts = earthGeo
        ? [new Mesh(earthGeo.earth.geometry(), materials.earth), new Mesh(earthGeo.wells.geometry(), materials.earthWell), new LineSegments(earthGeo.lines.geometry(), materials.earthLines)]
        : [];
      for (const m of earthParts) m.userData.earth = true;
      group.add(
        floorMesh,
        shadowMesh,
        pattern,
        glowMesh,
        wallMesh,
        waterMesh,
        new LineSegments(geo.lines, materials.lines),
        framesMesh,
        blindsMesh,
        glassMesh,
        flowMesh,
        pipeLineMesh,
        pipeHouseMesh,
        pipeFloorMesh,
        lampMesh,
        sunMesh,
        spillMesh,
        haloMesh,
        coneMesh,
        trailMesh,
        fridgeMesh,
        pipeMesh,
        patchMesh,
        patchGlowMesh,
        screenMesh,
        glassWalls,
        ...(solarMesh ? [solarMesh] : []),
        ...earthParts,
      );
      this.root.add(group);

      const label = document.createElement("button");
      label.className = "fp3d-pin fp3d-pin-floor";
      label.dataset.floor = floor.id;
      const name = document.createElement("b");
      name.textContent = floor.name || "–";
      const info = document.createElement("span");
      info.textContent = this.floorInfo.get(floor.id) ?? this.options.floorInfo?.(floor) ?? "";
      label.append(name, info);
      label.addEventListener("click", () => this.options.onFloorTap?.(floor.id));
      this.labels.append(label);

      const prev = previous.get(floor.id);
      const roomPins: FloorView["roomPins"] = [];
      let bbox: FloorView["bbox"] = null;
      // the rooms, and the outdoor areas acting as rooms (#100) with their names
      for (const room of zonesOf(floor)) {
        const pin = document.createElement("button");
        pin.className = "fp3d-pin";
        pin.dataset.room = room.id;
        pin.dataset.floor = floor.id;
        this.fillRoomPin(pin, room.name, this.roomInfo.get(room.id));
        pin.addEventListener("click", () => this.options.onRoomTap?.(floor.id, room.id));
        this.labels.append(pin);
        const [cx, cz] = centroid(room.points);
        roomPins.push({ pin, room, cx, cz });
        if (room.outdoor) continue;
        for (const [x, z] of room.points) {
          bbox ??= { x0: x, x1: x, z0: z, z1: z };
          bbox.x0 = Math.min(bbox.x0, x);
          bbox.x1 = Math.max(bbox.x1, x);
          bbox.z0 = Math.min(bbox.z0, z);
          bbox.z1 = Math.max(bbox.z1, z);
        }
      }
      this.floors.push({
        floor,
        rank: ordered.indexOf(floor),
        group,
        geo,
        floorMesh,
        shadowMesh,
        patternMesh: pattern,
        glowMesh,
        lightSurface: null,
        lightZones: null,
        framesMesh,
        glassMesh,
        blindsMesh,
        flowMesh,
        pipeLineMesh,
        pipeHouseMesh,
        pipeFloorMesh,
        pipeLineSig: "",
        solarMesh,
        solarLive,
        lampMesh,
        sunMesh,
        sunSig: "",
        spillMesh,
        spillSig: "",
        haloMesh,
        coneMesh,
        trailMesh,
        fridgeMesh,
        pipeMesh,
        pipeSig: "",
        patchMesh,
        patchGlowMesh,
        patchSig: "",
        lampTris: [],
        coneTris: [],
        lampFurnTris: [],
        frameTris: [],
        glassTris: [],
        blindTris: [],
        wallMesh,
        screenMesh,
        screenSig: "",
        screenPics: new Map(),
        flowLayout: "",
        glowSig: "",
        lampShapeSig: "",
        lampColorSig: "",
        lampShade: new Float32Array(0),
        lampRanges: new Map(),
        bbox,
        roomPins,
        labelSize: null,
        materials,
        mask,
        openings: new Map(),
        y: prev?.y ?? 0,
        o: prev?.o ?? 1,
        ty: 0,
        to: 1,
        appliedO: -1,
        lightAt: 0,
        label,
      });
    }
    this.floorMap = new Map(this.floors.map((f) => [f.floor.id, f]));
    for (const fv of this.floors) {
      this.buildFridges(fv);
      this.buildPipes(fv);
      this.buildPatches(fv);
    }
    this.labelsDirty = true;
    if (this.floorId && !b.floors.some((f) => f.id === this.floorId)) this.floorId = null;
    for (const fv of this.floors) {
      this.buildLamps(fv);
      this.buildScreens(fv);
      const prev = previousOpenings.get(fv.floor.id);
      for (const info of fv.geo.openings) fv.openings.set(info.opening.id, prev?.get(info.opening.id) ?? this.openingTargets.get(info.opening.id) ?? CLOSED);
      this.buildOpenings(fv);
      this.buildFlows(fv);
      fv.poolGroup = undefined;
      this.buildPoolWater(fv);
      this.buildLightSurface(fv);
      this.buildSun(fv);
    }
    this.applyTargets(previous.size === 0);
    this.applyHighlight();
    this.applyTierFlags();
    this.buildRoofMesh();
    this.buildSunFx();
    this.updateGhost();
  }

  private buildRoofMesh(): void {
    if (this.roof) {
      this.roof.group.traverse((o) => ((o as Mesh).geometry as BufferGeometry | undefined)?.dispose());
      this.roof.solid.dispose();
      this.roof.lines.dispose();
      this.roof.glass.dispose();
      this.roof.live.dispose();
      this.roof.wins.traverse((o) => ((o as Mesh).geometry as BufferGeometry | undefined)?.dispose());
      this.roof.winSolid.dispose();
      this.roof.winLines.dispose();
      this.roof.winGlass.dispose();
      this.roof.roofWinGlass.dispose();
      this.scene.remove(this.roof.wins);
      this.scene.remove(this.roof.group);
      this.roof = null;
    }
    const geos = this.building ? buildRoof(this.building, this.roofWindows) : [];
    this.roofGeos = geos;
    this.shadowSig = "";
    if (!geos.length) return;
    // the living overlays of the roof fields, each on the part its face belongs to
    const faces = new Map(roofFaces(this.building!).map((f) => [f.key, f]));
    const fields = this.building!.settings.roof?.solar ?? [];
    const live = solarLiveMaterial(this.flowTime);
    const lives: SolarLive[] = [];
    const group = new Group();
    const solid = themed(new MeshBasicMaterial({ vertexColors: true, transparent: true, side: DoubleSide }), this.themeUniform);
    const lines = themed(new LineBasicMaterial({ vertexColors: true, transparent: true, blending: lineBlending(this.theme), depthWrite: false }), this.themeUniform, true);
    // canopies: faint see-through panels that do not hide what is below
    const glass = themed(new MeshBasicMaterial({ vertexColors: true, transparent: true, side: DoubleSide, depthWrite: false }), this.themeUniform);
    const wins = new Group();
    const winSolid = themed(new MeshBasicMaterial({ vertexColors: true, side: DoubleSide }), this.themeUniform);
    // the glass of the windows over a room: see-through like the windows in the walls (#598)
    const winGlass = themed(new MeshBasicMaterial({ vertexColors: true, transparent: true, opacity: 0.35, side: DoubleSide, depthWrite: false }), this.themeUniform);
    const roofWinGlass = themed(new MeshBasicMaterial({ vertexColors: true, transparent: true, opacity: 0.35, side: DoubleSide, depthWrite: false }), this.themeUniform);
    const winLines = themed(new LineBasicMaterial({ vertexColors: true, transparent: true, blending: lineBlending(this.theme), depthWrite: false }), this.themeUniform, true);
    const below: { floorId: string; win: Group }[] = [];
    const parts = geos.map((geo) => {
      const part = new Group();
      part.add(new Mesh(geo.solid.geometry(), solid), new LineSegments(geo.lines.geometry(), lines));
      if (geo.glass.count) part.add(new Mesh(geo.glass.geometry(), glass));
      const entries = fields.flatMap((field) => {
        const face = faces.get(field.face);
        const mine = face && (face.section ? geo.sections?.includes(face.section) : geo === geos[0]);
        return mine ? [{ face: face!, field }] : [];
      });
      const overlay = buildSolarLive(entries, geo.floor.elevation + geo.base);
      if (overlay) {
        const mesh = new Mesh(overlay.geometry, live);
        mesh.renderOrder = 9;
        part.add(mesh);
        lives.push(overlay);
        writeSolarLevels(overlay, this.solarLevels);
      }
      // roof windows that only show in the roof ride and fade with it
      if (geo.winRoof?.solid.count) part.add(new Mesh(geo.winRoof.solid.geometry(), winSolid), new LineSegments(geo.winRoof.lines.geometry(), winLines));
      // their glass: as see-through as the windows in the walls, and it fades with the roof (#645)
      if (geo.winRoof?.glass.count) part.add(new Mesh(geo.winRoof.glass.geometry(), roofWinGlass));
      part.renderOrder = 8;
      group.add(part);
      let win: Group | null = null;
      if (geo.win?.solid.count || geo.win?.glass.count) {
        win = new Group();
        win.add(new Mesh(geo.win.solid.geometry(), winSolid), new LineSegments(geo.win.lines.geometry(), winLines));
        if (geo.win.glass.count) win.add(new Mesh(geo.win.glass.geometry(), winGlass));
        wins.add(win);
      }
      for (const [floorId, w] of geo.winBelow ?? []) {
        if (!w.solid.count && !w.glass.count) continue;
        const g = new Group();
        g.add(new Mesh(w.solid.geometry(), winSolid), new LineSegments(w.lines.geometry(), winLines));
        if (w.glass.count) g.add(new Mesh(w.glass.geometry(), winGlass));
        wins.add(g);
        below.push({ floorId, win: g });
      }
      return { group: part, floorId: geo.floor.id, rideId: roofRider(this.building!, geo.floor, geo.sections ?? []), base: geo.base, lift: geo.lift !== false, win };
    });
    group.renderOrder = 8;
    this.scene.add(group);
    this.scene.add(wins);
    this.roof = { group, parts, below, solid, lines, glass, live, lives, wins, winSolid, winLines, winGlass, roofWinGlass };
    this.placeRoof();
  }

  /** How far the roof floats above its walls while it fades: none at all once it is fully shown (#556). */
  private roofLift(): number {
    return Math.max(0, 1 - this.roofO / ROOF_OPACITY) * 2.2;
  }

  /**
   * The roof shows in the house view and sits on its floor; zooming in lifts and fades it, so the top
   * floor opens up. Returns true while it still moves.
   */
  private placeRoof(dt = 1000): boolean {
    const roof = this.roof;
    if (!roof) return false;
    const zoom = this.keepRoof ? 1 : Math.min(1, Math.max(0, (this.controls.view.radius / this.houseRadius - 0.62) / 0.3));
    // a house with a single floor shows that floor as its house view, roof included (D208)
    const house = this.floorId === null || this.floors.length === 1;
    const target = house && this.wallMode !== "cut" && !this.hideRoof ? ROOF_OPACITY * zoom : 0;
    const k = 1 - Math.exp(-dt / FLOOR_TAU);
    const before = this.roofO;
    this.roofO += (target - this.roofO) * k;
    if (Math.abs(target - this.roofO) < 0.004) this.roofO = target;
    roof.group.visible = this.roofO > 0.02;
    // each part rides on its floor (pulled apart or stacked), lifted while it fades in or out
    for (const part of roof.parts) {
      const fv = this.floorMap.get(part.floorId);
      if (!fv) continue;
      // floors pulled apart: the roof rides with the highest floor beneath it (an attic or a loft under
      // the same slopes, #202) and lifts off it the same way (it follows that floor's own glide)
      const ride = this.floorMap.get(part.rideId) ?? fv;
      const apart = ride.ty > 0 ? Math.min(1, ride.y / ride.ty) : this.explode && this.floorId === null ? 1 : 0;
      part.group.position.y = fv.floor.elevation + ride.y + part.base + this.roofLift() + (part.lift ? apart * ROOF_GAP : 0);
      // the windows stay in the slope over their floor's rooms while the roof lifts away (not in the cut view)
      if (part.win) {
        part.win.position.y = fv.floor.elevation + ride.y + part.base + (part.lift ? apart * ROOF_GAP : 0);
        part.win.visible = fv.group.visible && fv.o > 0.5 && this.wallMode !== "cut";
      }
    }
    // windows in a slope over a lower floor: with that floor, wherever it glides
    for (const w of roof.below) {
      const fv = this.floorMap.get(w.floorId);
      if (!fv) continue;
      w.win.position.y = fv.floor.elevation + fv.y;
      w.win.visible = fv.group.visible && fv.o > 0.5 && this.wallMode !== "cut";
    }
    roof.solid.opacity = this.roofO;
    roof.solid.depthWrite = this.roofO > 0.9;
    roof.lines.opacity = this.roofO;
    roof.glass.opacity = this.roofO * 0.28;
    roof.roofWinGlass.opacity = this.roofO * 0.35;
    roof.live.opacity = this.roofO;
    return this.roofO !== before && this.roofO !== target;
  }

  /**
   * Tablet level: leave out the passes that cover the whole picture but add little (floor patterns,
   * baked floor shadows, the ground grid, the wide glow around cables).
   */
  private applyTierFlags(): void {
    const low = this.lowQuality;
    this.ground.visible = !low && this.theme !== "day" && this.floors.some((f) => f.floor.rooms.length > 0);
    for (const fv of this.floors) {
      fv.patternMesh.visible = !low;
      fv.shadowMesh.visible = !low && fv.o > 0.98;
    }
    this.invalidate();
  }

  /** The meshes that depend on the level (cable glow, light surface cell, lamp halos). */
  private rebuildTier(): void {
    for (const fv of this.floors) {
      fv.flowLayout = "";
      this.buildFlows(fv);
      this.buildLightSurface(fv);
      fv.lampShapeSig = "";
      this.buildLamps(fv);
    }
  }

  /** True when the house view shows several floors (floor labels instead of room labels). */
  private get houseView(): boolean {
    return this.floorId === null && this.floors.length > 1;
  }

  /** Target height offset and opacity of every floor for the current view. */
  private applyTargets(immediate: boolean): void {
    const sel = this.floorId ? this.floorMap.get(this.floorId) : undefined;
    for (const fv of this.floors) {
      let ty = 0;
      let to = 1;
      if (!sel) ty = this.explode ? fv.rank * EXPLODE_GAP : 0;
      else if (fv.rank > sel.rank) {
        ty = 5 + fv.rank; // floors above fly away
        to = 0;
      } else if (fv.rank < sel.rank) {
        // floors below: a dim reference, the house stacked up to this floor, or hidden
        if (this.floorStack === "stacked") ty = 0;
        else {
          ty = -0.4;
          to = this.floorStack === "single" ? 0 : BELOW_OPACITY;
        }
      }
      fv.ty = ty;
      fv.to = to;
      // an open floor in the ground: the earth is seen from inside, like a pit around it (the near side goes)
      const pit = sel === fv;
      const side = pit ? BackSide : FrontSide;
      if (fv.materials.earth.side !== side) {
        fv.materials.earth.side = side;
        fv.materials.earth.needsUpdate = true;
      }
      if (immediate) {
        fv.y = ty;
        fv.o = to;
      }
      this.applyFloor(fv);
    }
    this.invalidate();
  }

  /** Move a floor group to its current offset and fade its materials. */
  private applyFloor(fv: FloorView): void {
    fv.group.position.y = fv.floor.elevation + fv.y;
    fv.group.visible = fv.o > 0.02;
    // a multiply layer cannot fade, so it goes with the first step; the tablet level leaves it out
    fv.shadowMesh.visible = fv.o > 0.98 && !this.lowQuality;
    if (Math.abs(fv.appliedO - fv.o) < 1e-3) return;
    fv.appliedO = fv.o;
    const m = fv.materials;
    const solid = fv.o > 0.999;
    for (const mat of [m.floor, m.wall, m.frames, m.blinds, m.lamps]) {
      if (mat.transparent === solid) {
        mat.transparent = !solid;
        mat.depthWrite = solid;
        mat.needsUpdate = true;
      }
      mat.opacity = fv.o;
    }
    m.pattern.opacity = fv.o;
    m.glow.opacity = fv.o;
    m.lines.opacity = fv.o;
    m.glass.opacity = fv.o;
    m.glassWall.opacity = fv.o;
    m.flow.opacity = fv.o;
    m.solarLive.opacity = fv.o;
    m.lamps.opacity = fv.o;
    m.halos.opacity = fv.o;
    m.cones.opacity = fv.o;
    m.screens.opacity = fv.o;
    for (const mat of [m.earth, m.earthWell]) {
      if (mat.transparent === solid) {
        mat.transparent = !solid;
        mat.depthWrite = solid;
        mat.needsUpdate = true;
      }
      mat.opacity = fv.o;
    }
    m.earthLines.opacity = fv.o;
    for (const pic of fv.screenPics.values()) {
      const mat = pic.mesh.material as MeshBasicMaterial;
      mat.transparent = fv.o < 0.999;
      mat.opacity = fv.o;
    }
  }

  /** Advance the floor animation; returns true while something still moves. */
  private stepFloors(dt: number): boolean {
    let moving = false;
    const k = 1 - Math.exp(-dt / FLOOR_TAU);
    for (const fv of this.floors) {
      const dy = fv.ty - fv.y;
      const dO = fv.to - fv.o;
      if (Math.abs(dy) < 0.004 && Math.abs(dO) < 0.004) {
        if (dy !== 0 || dO !== 0) {
          fv.y = fv.ty;
          fv.o = fv.to;
          this.labelsDirty = true;
          this.applyFloor(fv);
        }
        continue;
      }
      fv.y += dy * k;
      fv.o += dO * k;
      moving = true;
      this.applyFloor(fv);
    }
    return moving;
  }

  /** Move sashes and blinds towards their targets; returns true while something still moves. */
  private stepOpenings(dt: number): boolean {
    let moving = false;
    const k = 1 - Math.exp(-dt / OPENING_TAU);
    for (const fv of this.floors) {
      let changed = false;
      let floorBusy = false;
      for (const [id, cur] of fv.openings) {
        const target = this.openingTargets.get(id) ?? CLOSED;
        // nothing to do for an opening that rests at its target (the usual case)
        const near = (a: number | null | undefined, b: number | null | undefined) => (a ?? null) === (b ?? null) || (typeof a === "number" && typeof b === "number" && Math.abs(a - b) < 0.003);
        if (near(target.open, cur.open) && near(target.open2 ?? 0, cur.open2 ?? 0) && near(target.tilt, cur.tilt) && near(target.tilt2 ?? 0, cur.tilt2 ?? 0) && near(target.cover, cur.cover) && !!target.sensed === !!cur.sensed && !!target.unlocked === !!cur.unlocked) continue;
        const next = { ...cur, open2: cur.open2 ?? 0, tilt2: cur.tilt2 ?? 0, sensed: target.sensed, unlocked: target.unlocked };
        let busy = false;
        for (const key of ["open", "open2", "tilt", "tilt2"] as const) {
          const to = target[key] ?? 0;
          const from = cur[key] ?? 0;
          const d = to - from;
          if (Math.abs(d) < 0.003) next[key] = to;
          else {
            next[key] = from + d * k;
            busy = true;
          }
        }
        if (target.cover === null || cur.cover === null) next.cover = target.cover;
        else {
          const d = target.cover - cur.cover;
          if (Math.abs(d) < 0.003) next.cover = target.cover;
          else {
            next.cover = cur.cover + d * k;
            busy = true;
          }
        }
        if (next.open !== cur.open || next.open2 !== (cur.open2 ?? 0) || next.tilt !== cur.tilt || next.tilt2 !== (cur.tilt2 ?? 0) || next.cover !== cur.cover || !!next.sensed !== !!cur.sensed || !!next.unlocked !== !!cur.unlocked) {
          fv.openings.set(id, next);
          changed = true;
        }
        moving ||= busy;
        floorBusy ||= busy;
      }
      if (changed) {
        this.buildOpenings(fv);
        // the light through doors and the sun through blinds follow every frame; on the tablet level about
        // 5 times a second while something moves, and once more where it stops
        const now = performance.now();
        if (!this.lowQuality || !floorBusy || now - fv.lightAt >= LOW_LIGHT_MS) {
          fv.lightAt = now;
          this.buildGlow(fv);
          this.buildSun(fv);
        }
      }
    }
    return moving;
  }

  /** Glow of a device, with the hue turning while a colour effect runs. */
  private glowOf(d: DeviceMarker): DeviceMarker["glow"] {
    if (!d.glow || !d.effect) return d.glow;
    const c = new Color(...d.glow.color);
    const hsl = { h: 0, s: 0, l: 0 };
    c.getHSL(hsl);
    // lamps start at different points of the colour wheel, so a room does not blink in sync
    const offset = (d.x * 0.37 + d.z * 0.61) % 1;
    // at lightness 1 every hue is white: a light that reports no colour while its effect runs (Nanoleaf, #373)
    // glows white, so the lightness stays where hues show
    c.setHSL((hsl.h + this.effectTime * EFFECT_SPEED + offset) % 1, Math.max(0.6, hsl.s), Math.min(0.6, Math.max(0.45, hsl.l)));
    return { color: [c.r, c.g, c.b], level: d.glow.level };
  }

  /**
   * Lamp models of the lights on a floor, merged into one mesh. The shapes are rebuilt only when a
   * lamp moves or changes; the shade colours (light colour, brightness, tap flash) are written into
   * the mesh in place, so colour effects cost no geometry.
   */
  private buildLamps(fv: FloorView): void {
    const now = performance.now();
    const flash = (id: string) => {
      const until = this.flashes.get(id);
      if (!until || until <= now) return 0;
      // a tap flashes once; a found device (search) pulses until the time is up
      const left = until - now;
      const k = left > FLASH_MS ? 0.5 + 0.5 * Math.sin(left / 140) : left / FLASH_MS;
      return Math.round(k * 10) / 10;
    };
    const lamps = this.devices.filter((d) => d.floorId === fv.floor.id && (d.lamp || d.model));
    const shapeSig =
      this.wallMode +
      (this.lowQuality ? "L" : this.highQuality ? "H" : "M") +
      lamps.map((d) => `${d.id},${d.lamp ?? d.model},${d.variant},${d.x},${d.z},${d.y},${d.rotation ?? 0},${d.roll ?? 0},${d.upright ? 1 : 0},${d.rise ?? 0},${d.size?.join("/")},${d.base ?? 0},${d.pack ?? ""},${d.mirror ? 1 : 0}`).join(";");
    const glows = lamps.map((d) => this.glowOf(d));
    const colorSig = lamps.map((d, i) => `${flash(d.id)},${glows[i] ? `${glows[i]!.level.toFixed(3)},${glows[i]!.color.map((c) => c.toFixed(3)).join("/")}` : "off"}`).join(";");
    if (shapeSig !== fv.lampShapeSig || !fv.lampMesh.geometry.getAttribute("position")) {
      fv.lampShapeSig = shapeSig;
      fv.lampColorSig = "";
      const buf = new GeoBuffer();
      const tris: FloorView["lampTris"] = [];
      const furnTris: FloorView["lampFurnTris"] = [];
      const ranges = new Map<string, { start: number; end: number }>();
      const H = fv.floor.height;
      for (const d of lamps) {
        // hanging lamps (and ceiling cameras) would float above cut walls
        const hanging = d.lamp === "strip" ? (d.base ?? H) > Math.min(fv.floor.cut_height, H) : d.lamp ? HANGING.has(d.lamp) && (d.top ?? H) > Math.min(fv.floor.cut_height, H) : d.model === "camera_ceiling";
        if ((!d.lamp && !d.model) || (hanging && this.wallMode === "cut")) continue;
        const start = buf.count;
        const packed = d.pack ? packItem(d.pack) : undefined;
        const [pw, pd, ph] = d.size ?? [0.3, 0.3, 0.3];
        // shades get the sentinel colour and are recoloured below
        if (d.model) {
          if (!d.ownLook) pushCameraModel(buf, d.model, d.x, d.model === "camera_ceiling" ? H : d.y, d.z, d.rotation ?? 0);
        }
        else if (packed) pushPackLamp(buf, packed, { x: d.x, z: d.z, rotation: d.rotation ?? 0, w: pw, d: pd, h: ph, mirror: d.mirror }, d.base ?? 0, SHADE_SENTINEL);
        // a ceiling fan's blades turn in a group of their own (syncFans)
        else pushLampModel(buf, { ...d, lamp: d.lamp! }, d.top ?? H, SHADE_SENTINEL, d.lamp !== "fan");
        // keyed by the furniture: two lamps may share one light (one switch for two strips)
        ranges.set(d.furnitureId ?? d.id, { start, end: buf.count });
        if (d.pickable !== false) tris.push({ id: d.id, start, end: buf.count });
        if (d.furnitureId) furnTris.push({ id: d.furnitureId, start, end: buf.count });
      }
      fv.lampTris = tris;
      fv.lampFurnTris = furnTris;
      fv.lampRanges = ranges;
      fv.lampShade = shadeFactors(buf.c);
      fv.lampMesh.geometry.dispose();
      fv.lampMesh.geometry = buf.geometry();
      fv.lampMesh.visible = buf.count > 0;
    }
    if (colorSig === fv.lampColorSig) return;
    fv.lampColorSig = colorSig;
    const attr = fv.lampMesh.geometry.getAttribute("color") as Float32BufferAttribute;
    const colors = attr.array as Float32Array;
    lamps.forEach((d, i) => {
      const range = fv.lampRanges.get(d.furnitureId ?? d.id);
      if (!range) return;
      const glow = glows[i];
      // a lit shade glows in the light's colour, brighter with more brightness; a tap flashes it white
      const k = glow ? 0.55 + 0.45 * glow.level : 0;
      const shadeC = glow ? new Color(...(glow.color.map((c) => Math.min(1, c * k)) as [number, number, number])) : new Color(LAMP_SHADE);
      const f = flash(d.id);
      if (f > 0) shadeC.lerp(new Color(1, 1, 1), 0.7 * f);
      // the model's colours come from hex values: convert the same way (colour management)
      const c = new Color(shadeC.getHex());
      recolorLamps(colors, fv.lampShade, range, [c.r, c.g, c.b]);
    });
    attr.needsUpdate = true;
    this.buildHalos(fv);
  }

  /**
   * Sunlight through windows that face the sun: each window's opening (reduced by its blind) is
   * projected along the sun's rays onto the floor as a warm, soft patch.
   */
  private buildSun(fv: FloorView): void {
    // the patches of sunlight can be switched off in the settings (#266)
    const sun = this.building?.settings.sun_patches === false ? null : this.sun;
    const north = (this.building?.settings.north ?? 0) * DEG;
    // clouds take most of the sunlight
    const cloud = this.weather?.cloud ?? 0;
    // rooms joined without a wall share the sunlight too: the zones belong to the patch's signature
    const zones = lightZonesOf(fv.floor, fv.geo.openRooms);
    const sig = sun ? `${sun.elevation.toFixed(1)},${sun.azimuth.toFixed(1)},${north},${cloud.toFixed(2)},${[...fv.openings.values()].map((o) => (o.cover ?? 0).toFixed(2)).join(",")},${zones.join(".")},${this.roofWindowsKey},${JSON.stringify(this.building?.settings.roof?.windows ?? [])}` : "";
    if (sig === fv.sunSig) return;
    fv.sunSig = sig;
    const buf = new GeoBuffer();
    if (sun && sun.elevation > 2 && cloud < 0.97) {
      const day = Math.min(1, sun.elevation / 12) * (1 - 0.8 * cloud);
      const el = sun.elevation * DEG;
      const az = sun.azimuth * DEG;
      // horizontal direction towards the sun in plan coordinates (x right, z down, "up" = -z)
      const toSun: [number, number] = [Math.sin(north + az), -Math.cos(north + az)];
      const reach = 1 / Math.tan(el);
      for (const info of fv.geo.openings) {
        if (info.opening.type !== "window" || !info.exterior) continue;
        const out: [number, number] = [-info.toRoom[0], -info.toRoom[1]];
        const facing = out[0] * toSun[0] + out[1] * toSun[1];
        if (facing < 0.05) continue;
        const st = fv.openings.get(info.opening.id);
        const top = info.top - (st?.cover ?? 0) * (info.top - info.sill);
        if (top - info.sill < 0.05) continue;
        const at = (s: number, y: number) => {
          const d = Math.min(7, y * reach);
          return [
            info.start[0] + info.axis[0] * s + info.toRoom[0] * info.faceRoom - toSun[0] * d,
            0.02,
            info.start[1] + info.axis[1] * s + info.toRoom[1] * info.faceRoom - toSun[1] * d,
          ];
        };
        const k = 0.14 * day * Math.min(1, facing * 1.5);
        const near = new Color(1 * k, 0.82 * k, 0.55 * k);
        const far = near.clone().multiplyScalar(0.45);
        // the patch stays inside the window's room – and the rooms joined to it without a wall, like the
        // lamps' light (#455 reported): it is laid in small cells, and only cells whose centre lies in one
        // of them are drawn (so it never crosses walls or leaves the house)
        const ri = fv.floor.rooms.findIndex((r) => r.id === info.opening.room_id);
        if (ri < 0 || fv.floor.rooms[ri].points.length < 3) continue;
        const zone = zones[ri];
        const lit = fv.floor.rooms.filter((r, i) => zones[i] === zone && r.points.length >= 3).map((r) => r.points);
        const rows = Math.max(1, Math.ceil(Math.min(7, top * reach) / 0.25));
        const cols = Math.max(1, Math.ceil(info.width / 0.3));
        for (let i = 0; i < rows; i++) {
          const y0 = info.sill + ((top - info.sill) * i) / rows;
          const y1 = info.sill + ((top - info.sill) * (i + 1)) / rows;
          const t0 = i / rows;
          const t1 = (i + 1) / rows;
          const c0 = near.clone().lerp(far, t0);
          const c1 = near.clone().lerp(far, t1);
          for (let j = 0; j < cols; j++) {
            const s0 = (info.width * j) / cols;
            const s1 = (info.width * (j + 1)) / cols;
            const m = at((s0 + s1) / 2, (y0 + y1) / 2);
            if (!lit.some((pts) => pointInPolygon([m[0], m[2]], pts))) continue;
            const a = at(s0, y0);
            const b = at(s1, y0);
            const c = at(s1, y1);
            const d = at(s0, y1);
            buf.tri(a, b, c, c0, c0, c1);
            buf.tri(a, c, d, c0, c1, c1);
          }
        }
      }
      this.pushRoofSun(fv, buf, zones, toSun, el, day);
    }
    fv.sunMesh.geometry.dispose();
    fv.sunMesh.geometry = buf.geometry();
    // the heatmap reads the floors' colours: no warm patch of sunlight on top of them (#558)
    fv.sunMesh.visible = buf.count > 0 && !this.roomTint;
  }

  /**
   * Sunlight through the roof windows over this floor's rooms (#482): the window's glass, less its blind, cast
   * along the sun's rays onto the floor, kept inside the room under it (and rooms joined to it without a wall).
   */
  private pushRoofSun(fv: FloorView, buf: GeoBuffer, zones: number[], toSun: [number, number], el: number, day: number): void {
    const b = this.building;
    const windows = b?.settings.roof?.windows ?? [];
    if (!b || !windows.length) return;
    const faces = new Map(roofFaces(b).map((f) => [f.key, f]));
    const sunDir = [toSun[0] * Math.cos(el), Math.sin(el), toSun[1] * Math.cos(el)];
    for (const w of windows) {
      const face = faces.get(w.face);
      const under = roofWindowRoom(b, face, w);
      if (!face || !under || under.floor.id !== fv.floor.id) continue;
      const facing = face.n[0] * sunDir[0] + face.n[1] * sunDir[1] + face.n[2] * sunDir[2];
      // lower left, lower right, upper right, upper left; the blind comes down from the top edge
      const [a, c, d, e] = under.corners;
      const cover = Math.min(1, this.roofWindows.get(w.id)?.cover ?? 0);
      if (cover > 0.95) continue;
      const mix = (p: number[], q: number[], t: number) => [p[0] + (q[0] - p[0]) * t, p[1] + (q[1] - p[1]) * t, p[2] + (q[2] - p[2]) * t];
      const top0 = mix(e, a, cover);
      const top1 = mix(d, c, cover);
      const ri = fv.floor.rooms.findIndex((r) => r.id === under.roomId);
      if (ri < 0) continue;
      const lit = fv.floor.rooms.filter((r, i) => zones[i] === zones[ri] && r.points.length >= 3).map((r) => r.points);
      // a patch on the floor from the glass's four corners, kept inside the room (and rooms open to it)
      const patch = (g: number[][], col: Color) => {
        const at = (s: number, t: number) => mix(mix(g[0], g[1], s), mix(g[3], g[2], s), t);
        const n = 6;
        for (let i = 0; i < n; i++) {
          for (let j = 0; j < n; j++) {
            const m = at((i + 0.5) / n, (j + 0.5) / n);
            if (!lit.some((pts) => pointInPolygon([m[0], m[2]], pts))) continue;
            const p0 = at(i / n, j / n);
            const p1 = at((i + 1) / n, j / n);
            const p2 = at((i + 1) / n, (j + 1) / n);
            const p3 = at(i / n, (j + 1) / n);
            buf.tri(p0, p1, p2, col, col, col);
            buf.tri(p0, p2, p3, col, col, col);
          }
        }
      };
      // daylight from the sky: a soft patch straight under the window, also when the sun is on the other side
      // of the roof or so low that its patch would fall onto the walls of a small room (D340)
      const below = (p: number[]): number[] => [p[0], 0.019, p[2]];
      const sky = 0.06 * day;
      patch([below(a), below(c), below(top1), below(top0)], new Color(0.75 * sky, 0.85 * sky, 1 * sky));
      if (facing < 0.05) continue;
      // a point of the glass, followed down the sun's rays to the floor (at most 7 m away)
      const ground = (p: number[]): number[] => {
        const t = Math.min(7, (p[1] - fv.floor.elevation) / Math.tan(el));
        return [p[0] - toSun[0] * t, 0.02, p[2] - toSun[1] * t];
      };
      const k = 0.16 * day * Math.min(1, facing * 1.5);
      patch([ground(a), ground(c), ground(top1), ground(top0)], new Color(1 * k, 0.84 * k, 0.6 * k));
    }
  }

  /** Glow points at lit shades (not at the tablet level) and light cones under spots (level "High"). */
  private buildHalos(fv: FloorView): void {
    if (this.lowQuality) {
      fv.haloMesh.visible = false;
      fv.coneMesh.visible = false;
      return;
    }
    const H = fv.floor.height;
    const hp: number[] = [];
    const hc: number[] = [];
    const cones = new GeoBuffer();
    const coneTris: FloorView["coneTris"] = [];
    for (const d of this.devices) {
      if (d.model && d.floorId === fv.floor.id) {
        if (d.model === "camera_ceiling" && this.wallMode === "cut") continue;
        if (d.cone === false) continue;
        // the camera's field of view on the floor: a faint wedge, red while it sees motion
        const a = (d.rotation ?? 0) * DEG;
        const dir: [number, number] = [-Math.sin(a), Math.cos(a)];
        const dome = d.model === "camera_ceiling";
        const reach = d.reach ?? (dome ? 3 : 4.5);
        const half = ((d.fov ?? (dome ? 360 : 90)) * DEG) / 2;
        const near = d.motion ? new Color(0.9, 0.12, 0.16) : new Color(0.04, 0.22, 0.28);
        const far = new Color(0, 0, 0);
        const n = Math.max(4, Math.round(half / 0.15));
        const y = 0.015;
        // the wedge ends at the first wall in each direction: a camera does not see through walls
        const walls = fv.geo.walls2d;
        // only the wall the camera hangs on (the nearest) is looked through – a camera just inside an outer wall
        // looks out through it; any other wall near it, say a garden wall joining at the corner, stops it (#438)
        const lineDist = (w: (typeof walls)[number]) => {
          const ex = w.b[0] - w.a[0];
          const ez = w.b[1] - w.a[1];
          const l2 = ex * ex + ez * ez || 1;
          const t = Math.max(0, Math.min(1, ((d.x - w.a[0]) * ex + (d.z - w.a[1]) * ez) / l2));
          return Math.hypot(d.x - (w.a[0] + ex * t), d.z - (w.a[1] + ez * t));
        };
        let mount: (typeof walls)[number] | null = null;
        for (const w of walls) if (lineDist(w) < 0.45 && (!mount || lineDist(w) < lineDist(mount))) mount = w;
        const reachAt = (t: number): number => {
          const rx = dir[0] * Math.cos(t) - dir[1] * Math.sin(t);
          const rz = dir[1] * Math.cos(t) + dir[0] * Math.sin(t);
          let best = reach;
          for (const w of walls) {
            const ex = w.b[0] - w.a[0];
            const ez = w.b[1] - w.a[1];
            const den = rx * ez - rz * ex;
            if (Math.abs(den) < 1e-9) continue;
            const s = ((w.a[0] - d.x) * ez - (w.a[1] - d.z) * ex) / den;
            const u = ((w.a[0] - d.x) * rz - (w.a[1] - d.z) * rx) / den;
            if (w === mount && s <= 0.45) continue;
            if (s > 0.02 && s < best && u >= 0 && u <= 1) best = s;
          }
          return best;
        };
        // every point of the wedge lies on the ground it falls on: the floor in a room, the lawn or the terrain
        // outside – a camera of a sunken floor (a basement half in the ground) no longer reaches down to that floor's
        // level outdoors (#802); a camera just inside an outer wall starts on the ground in front of it
        const groundAt = (x: number, z: number) => y + groundUnder(fv.floor, { x, z });
        const rim = (t: number) => {
          const r = reachAt(t);
          const x = d.x + (dir[0] * Math.cos(t) - dir[1] * Math.sin(t)) * r;
          const z = d.z + (dir[1] * Math.cos(t) + dir[0] * Math.sin(t)) * r;
          return [x, groundAt(x, z), z];
        };
        const apex = [d.x, Math.max(groundAt(d.x, d.z), dome ? -Infinity : groundAt(d.x + dir[0] * 0.3, d.z + dir[1] * 0.3)), d.z];
        const start = cones.count;
        for (let i = 0; i < n; i++) cones.tri(apex, rim(-half + (2 * half * (i + 1)) / n), rim(-half + (2 * half * i) / n), near, far, far);
        coneTris.push({ id: d.id, start, end: cones.count });
        continue;
      }
      const glow = this.glowOf(d);
      if (d.floorId !== fv.floor.id || !d.lamp || !glow) continue;
      if (HANGING.has(d.lamp) && this.wallMode === "cut" && (d.top ?? H) > Math.min(fv.floor.cut_height, H)) continue;
      const Ht = d.top ?? H;
      const [w, dd, h] = d.size ?? LAMP_SIZE[d.lamp];
      const base = d.base ?? 0;
      const ang = (d.rotation ?? 0) * DEG;
      const y = {
        ceiling: Ht - 0.07,
        downlight: Ht - 0.03,
        spot: Ht - h,
        panel: Ht - 0.03,
        pendant: Math.max(0.4, Ht - h) + 0.08,
        fan: Math.max(0.5, Ht - Math.max(0.25, h)) + 0.02,
        floor: base + h - 0.15,
        uplight: base + h,
        table: base + h - 0.09,
        wall: base + h / 2,
        strip: base + Math.max(0.02, h) - 0.01,
        bollard: base + h - 0.08,
        garden: base + h - 0.03,
      }[d.lamp];
      // a wall light glows in front of the wall
      const push = (x: number, z: number, k = 1) => {
        hp.push(x, y, z);
        hc.push(...glow.color.map((c) => c * glow.level * 0.7 * k));
      };
      if (d.lamp === "strip")
        for (const t of [-0.4, -0.13, 0.13, 0.4]) {
          if (d.upright) {
            // an upright strip glows up its length
            hp.push(d.x, base + w * (0.5 + t), d.z);
            hc.push(...glow.color.map((c) => c * glow.level * 0.7 * 0.6));
          } else if (d.rise) {
            // a rising strip glows along its slope
            const r = d.rise * DEG;
            hp.push(d.x + Math.cos(ang) * w * t * Math.cos(r), y + Math.sin(r) * w * t, d.z + Math.sin(ang) * w * t * Math.cos(r));
            hc.push(...glow.color.map((c) => c * glow.level * 0.7 * 0.6));
          } else push(d.x + Math.cos(ang) * w * t, d.z + Math.sin(ang) * w * t, 0.6);
        }
      else if (d.lamp === "wall") {
        const at = this.packLightAt(d);
        if (at) {
          hp.push(...at);
          hc.push(...glow.color.map((c) => c * glow.level * 0.7));
        } else push(d.x - Math.sin(ang) * (dd / 2 + 0.05), d.z + Math.cos(ang) * (dd / 2 + 0.05));
      }
      else push(d.x, d.z);
      if (this.highQuality && (d.lamp === "downlight" || d.lamp === "spot")) {
        // soft cone from the lamp to the floor, fading towards the floor
        const top = new Color(...glow.color.map((c) => c * 0.09 * glow.level) as [number, number, number]);
        const bottom = new Color(0, 0, 0);
        const r0 = Math.max(0.03, w / 2);
        const r1 = 0.45 + 0.35 * glow.level;
        const n = 16;
        for (let i = 0; i < n; i++) {
          const a0 = (i / n) * Math.PI * 2;
          const a1 = ((i + 1) / n) * Math.PI * 2;
          const t0 = [d.x + Math.cos(a0) * r0, y, d.z + Math.sin(a0) * r0];
          const t1 = [d.x + Math.cos(a1) * r0, y, d.z + Math.sin(a1) * r0];
          const b0 = [d.x + Math.cos(a0) * r1, 0.02, d.z + Math.sin(a0) * r1];
          const b1 = [d.x + Math.cos(a1) * r1, 0.02, d.z + Math.sin(a1) * r1];
          cones.tri(t0, b0, b1, top, bottom, bottom);
          cones.tri(t0, b1, t1, top, bottom, top);
        }
      }
    }
    const g = new Geometry();
    g.setAttribute("position", new Float32BufferAttribute(hp, 3));
    g.setAttribute("color", new Float32BufferAttribute(hc, 3));
    fv.haloMesh.geometry.dispose();
    fv.haloMesh.geometry = g;
    fv.haloMesh.visible = hp.length > 0;
    fv.coneMesh.geometry.dispose();
    fv.coneMesh.geometry = cones.geometry();
    fv.coneMesh.visible = cones.count > 0;
    fv.coneTris = coneTris;
  }

  /** Lit screens of a floor: a bright panel in the app colour and a faint glow around it. */
  private buildScreens(fv: FloorView): void {
    // the vehicles in the parking spots count as furniture here too (Auto Pro lights a band on them)
    const items = withVehicles(fv.floor, this.parked).furniture.filter((f) => this.screens.has(f.id));
    // (with the accent colour: a light switch's rocker glows in it)
    const accent = accentOnUniform.value ? accentUniform.value.toArray().map((v) => Math.round(v * 255)).join(",") : "";
    const sig = accent + "|" + items.map((f) => `${f.id}:${f.x},${f.z},${f.rotation},${f.w},${f.d},${f.h},${f.mount_y ?? ""},${f.mirror ? 1 : 0}:${JSON.stringify(this.screens.get(f.id))}`).join(";");
    // pictures follow the screens even when only they changed
    if (sig === fv.screenSig && fv.screenMesh.geometry.getAttribute("position")) return this.updateScreenPictures(fv, items);
    fv.screenSig = sig;
    const buf = new GeoBuffer();
    for (const item of items) {
      const st = this.screens.get(item.id)!;
      // a switch or socket is drawn where the walls put it (#593), its glow with it
      const plate = GANG_TYPES.has(item.type) ? placeWallPlate(fv.geo.walls2d, item, fv.floor.height, mountBase(fv.floor, item)) : null;
      const f = plate ? { ...item, x: plate.x, z: plate.z, mount_y: plate.y } : item;
      const a = f.rotation * DEG;
      const c = Math.cos(a);
      const s = Math.sin(a);
      const P = (x: number, y: number, z: number) => [f.x + x * c - z * s, y, f.z + x * s + z * c];
      if (st.faces) {
        // a state on the item itself: a glowing plate on its top (a half of it for a bed's side or a bunk)
        const w = Math.max(0.05, f.w) * (f.mirror ? -1 : 1);
        const d = Math.max(0.05, f.d);
        const h = Math.max(0.005, f.h);
        const base = mountBase(fv.floor, f);
        for (const face of st.faces) {
          if (face.part === "lights") {
            // a car's head- and taillights (an unlocked car: they glow amber like its indicators)
            const model = packItem(f.type);
            const lamp = (p: { color: string }) => ["#e8f4ff", "#ff3b4f"].includes(p.color.toLowerCase());
            if (model && model.parts.some(lamp)) {
              const col = new Color(...face.color.map((v) => Math.min(1, v * (0.4 + 0.6 * face.level))) as [number, number, number]);
              pushPackGlow(buf, model, f, base, col.getHex(), lamp);
            }
            continue;
          }
          if (face.part === "cabin") {
            // a car's climate: its windows (the glass parts of its model) glow from inside
            const model = packItem(f.type);
            // the vehicles pack paints its windows in this glass colour (or the palette role "glass")
            const glassy = (p: { color: string }) => p.color.toLowerCase() === "#13283a" || p.color === "glass";
            if (model && model.parts.some(glassy)) {
              const col = new Color(...face.color.map((v) => Math.min(1, v * (0.3 + 0.5 * face.level))) as [number, number, number]);
              pushPackGlow(buf, model, f, base, col.getHex(), glassy);
              continue;
            }
          }
          if (face.part === "burners" && packItem(f.type)) {
            // a pack cooktop: its own zones (thin discs on its top) glow
            const model = packItem(f.type)!;
            const col = new Color(...face.color.map((v) => Math.min(1, v * (0.25 + 0.6 * face.level))) as [number, number, number]);
            pushPackGlow(buf, model, f, base, col.getHex(), isCooktopZone);
            continue;
          }
          if (face.part === "burners") {
            // a cooktop's four zones glow on its top (where the built-in stove draws them)
            const col = new Color(...face.color.map((v) => Math.min(1, v * (0.25 + 0.6 * face.level))) as [number, number, number]);
            const y = base + h + 0.008;
            for (const [bx, bz, br] of [[-0.14, -0.13, 0.09], [0.14, -0.13, 0.07], [-0.14, 0.13, 0.07], [0.14, 0.13, 0.09]]) {
              const cx = (bx * Math.abs(w)) / 0.6;
              const cz = (bz * d) / 0.62;
              const n = 14;
              for (let i = 0; i < n; i++) {
                const a0 = (i / n) * Math.PI * 2;
                const a1 = ((i + 1) / n) * Math.PI * 2;
                buf.tri(P(cx, y, cz), P(cx + Math.cos(a0) * br, y, cz + Math.sin(a0) * br), P(cx + Math.cos(a1) * br, y, cz + Math.sin(a1) * br), col);
              }
            }
            continue;
          }
          if (face.part === "band" || face.part === "cabin") {
            // a light band around the item at mid height (a car's charge): four thin vertical strips;
            // "cabin": the windows glow from inside (a car's climate) – a taller, softer band at window height
            const cabin = face.part === "cabin";
            const y0 = base + h * (cabin ? 0.6 : 0.42);
            const y1 = cabin ? base + h * 0.86 : y0 + 0.07;
            // additive on top of the body: kept well below 1 so green stays green instead of burning to white
            const col = new Color(...face.color.map((v) => Math.min(1, v * (0.3 + 0.45 * face.level))) as [number, number, number]);
            const hw = Math.abs(w) / 2 + (cabin ? 0.012 : 0.02);
            const hd = d / 2 + (cabin ? 0.012 : 0.02);
            const corners: [number, number][] = [[-hw, -hd], [hw, -hd], [hw, hd], [-hw, hd]];
            for (let i = 0; i < 4; i++) {
              const a0 = corners[i];
              const a1 = corners[(i + 1) % 4];
              const p00 = P(a0[0] * Math.sign(w), y0, a0[1]);
              const p10 = P(a1[0] * Math.sign(w), y0, a1[1]);
              const p11 = P(a1[0] * Math.sign(w), y1, a1[1]);
              const p01 = P(a0[0] * Math.sign(w), y1, a0[1]);
              // the screen material is double-sided: one winding is enough (both would add up twice)
              buf.tri(p00, p10, p11, col);
              buf.tri(p00, p11, p01, col);
            }
            continue;
          }
          if (face.part === "strata") {
            // layers: light round the item from its foot (colour) up to its top (top) – a tank warm above, cool below
            const top = face.top ?? face.color;
            const k = 0.22 + 0.4 * face.level;
            const lo = new Color(...face.color.map((v) => Math.min(1, v * k)) as [number, number, number]);
            const hi = new Color(...top.map((v) => Math.min(1, v * k)) as [number, number, number]);
            const y0 = base + h * 0.06;
            const y1 = base + h * 0.94;
            const rx = Math.abs(w) / 2 + 0.012;
            const rz = d / 2 + 0.012;
            const n = 20;
            for (let i = 0; i < n; i++) {
              const a0 = (i / n) * Math.PI * 2;
              const a1 = ((i + 1) / n) * Math.PI * 2;
              const q0 = [Math.cos(a0) * rx, Math.sin(a0) * rz];
              const q1 = [Math.cos(a1) * rx, Math.sin(a1) * rz];
              buf.tri(P(q0[0], y0, q0[1]), P(q1[0], y0, q1[1]), P(q1[0], y1, q1[1]), lo, lo, hi);
              buf.tri(P(q0[0], y0, q0[1]), P(q1[0], y1, q1[1]), P(q0[0], y1, q0[1]), lo, hi, hi);
            }
            continue;
          }
          if (face.part === "apring") {
            // an access point's LED ring: under the disc (ceiling) or on the plate's front (wall), with a soft halo
            const wall = f.variant === "wall";
            const aw = Math.abs(w);
            const r = wall ? Math.min(aw, h) * 0.3 : Math.min(aw, d) * 0.3;
            const col = new Color(...face.color.map((v) => Math.min(1, v * (0.4 + 0.6 * face.level))) as [number, number, number]);
            const dark = new Color(0, 0, 0);
            const n = 24;
            const at = (a: number, rr: number) => (wall ? P(Math.cos(a) * rr, base + h / 2 + Math.sin(a) * rr, d / 2 + 0.004) : P(Math.cos(a) * rr, base - 0.003, Math.sin(a) * rr));
            for (let i = 0; i < n; i++) {
              const a0 = (i / n) * Math.PI * 2;
              const a1 = ((i + 1) / n) * Math.PI * 2;
              buf.tri(at(a0, r * 0.8), at(a0, r), at(a1, r), col);
              buf.tri(at(a0, r * 0.8), at(a1, r), at(a1, r * 0.8), col);
              buf.tri(at(a0, r), at(a0, r * 1.5), at(a1, r * 1.5), col, dark, dark);
              buf.tri(at(a0, r), at(a1, r * 1.5), at(a1, r), col, dark, col);
            }
            continue;
          }
          if (face.part === "drum") {
            // a washer's or dryer's round door: a ring of light round the glass and a faint glow inside (#516)
            const aw = Math.abs(w);
            const r = Math.min(aw * 0.36, (h - 0.2) * 0.42);
            const cy = base + (h - 0.14) / 2 + 0.04;
            const zf = d / 2 - 0.006;
            const col = new Color(...face.color.map((v) => Math.min(1, v * (0.35 + 0.65 * face.level))) as [number, number, number]);
            const glass = col.clone().multiplyScalar(0.12);
            const dark = new Color(0, 0, 0);
            const n = 28;
            const at = (a: number, rr: number) => P(Math.cos(a) * rr, cy + Math.sin(a) * rr, zf);
            for (let i = 0; i < n; i++) {
              const a0 = (i / n) * Math.PI * 2;
              const a1 = ((i + 1) / n) * Math.PI * 2;
              // the glass, the bright ring and its soft halo on the front
              buf.tri(P(0, cy, zf), at(a0, r * 0.78), at(a1, r * 0.78), glass);
              buf.tri(at(a0, r * 0.78), at(a0, r), at(a1, r), col);
              buf.tri(at(a0, r * 0.78), at(a1, r), at(a1, r * 0.78), col);
              buf.tri(at(a0, r), at(a0, r * 1.18), at(a1, r * 1.18), col, dark, dark);
              buf.tri(at(a0, r), at(a1, r * 1.18), at(a1, r), col, dark, col);
            }
            continue;
          }
          if (face.part === "gang") {
            // a wall switch's or socket's gang: its rocker (socket) glows in front, with a soft halo on the wall
            const n = Math.max(1, face.of ?? 1);
            const aw = Math.abs(w);
            const gw = aw / n;
            const cx = (-aw / 2 + gw * ((face.index ?? 0) + 0.5)) * Math.sign(w);
            const zf = d / 2 + (f.variant === "outdoor" ? 0.02 : 0.008);
            // a light switch glows softly in the accent colour of the look (the stock cyan without one)
            const rgb = face.accent ? (accentOnUniform.value ? (accentUniform.value.toArray() as [number, number, number]) : ACCENT_STOCK) : face.color;
            const col = new Color(...rgb.map((v) => Math.min(1, v * (0.35 + 0.65 * face.level))) as [number, number, number]);
            const halo = col.clone().multiplyScalar(0.5);
            const dark = new Color(0, 0, 0);
            const hx = gw * 0.34;
            const y0 = base + h * 0.16;
            const y1 = base + h * 0.84;
            const q = [P(cx - hx, y0, zf), P(cx + hx, y0, zf), P(cx + hx, y1, zf), P(cx - hx, y1, zf)];
            buf.tri(q[0], q[1], q[2], col);
            buf.tri(q[0], q[2], q[3], col);
            const g = 0.012 + 0.015 * face.level;
            const o = [P(cx - hx - g, y0 - g, zf - 0.001), P(cx + hx + g, y0 - g, zf - 0.001), P(cx + hx + g, y1 + g, zf - 0.001), P(cx - hx - g, y1 + g, zf - 0.001)];
            for (let i = 0; i < 4; i++) {
              const j = (i + 1) % 4;
              buf.tri(q[i], o[j], o[i], halo, dark, dark);
              buf.tri(q[i], q[j], o[j], halo, halo, dark);
            }
            continue;
          }
          if (face.part === "beacon") {
            // a beacon for something to do (a waste bin that goes out): a column of light rising from its top and
            // a ring of light on the floor around it, fading out (the screen layer adds light: black is none)
            const col = new Color(...face.color.map((v) => Math.min(1, v * (0.25 + 0.45 * face.level))) as [number, number, number]);
            const dark = new Color(0, 0, 0);
            const top = base + h + 0.01;
            const rise = 0.6 + 0.6 * face.level;
            const r = Math.min(Math.abs(w), d) * 0.38;
            // two crossed planes: seen from any side
            for (const [ax, az] of [[r, 0], [0, r]] as const) {
              const a = P(-ax, top, -az);
              const b = P(ax, top, az);
              const c = P(ax * 0.4, top + rise, az * 0.4);
              const e = P(-ax * 0.4, top + rise, -az * 0.4);
              buf.tri(a, b, c, col, col, dark);
              buf.tri(a, c, e, col, dark, dark);
            }
            // the ring on the floor (the item's own floor, not its mount height)
            const fy = mountBase(fv.floor, { ...f, mount_y: 0 }) + 0.012;
            const hw = Math.abs(w) / 2 + 0.03;
            const hd = d / 2 + 0.03;
            const out = 0.22 + 0.18 * face.level;
            const ring = (sx: number, sz: number, o: number) => P(sx * (hw + o), fy, sz * (hd + o));
            const corners: [number, number][] = [[-1, -1], [1, -1], [1, 1], [-1, 1]];
            for (let i = 0; i < 4; i++) {
              const [ax, az] = corners[i];
              const [bx, bz] = corners[(i + 1) % 4];
              buf.tri(ring(ax, az, 0), ring(bx, bz, 0), ring(bx, bz, out), col, col, dark);
              buf.tri(ring(ax, az, 0), ring(bx, bz, out), ring(ax, az, out), col, dark, dark);
            }
            continue;
          }
          const x0 = face.part === "right" ? 0.03 : -Math.abs(w) / 2 + 0.03;
          const x1 = face.part === "left" ? -0.03 : Math.abs(w) / 2 - 0.03;
          const y = base + (face.part === "bottom" ? h * 0.45 : h) + 0.006;
          const col = new Color(...face.color.map((v) => Math.min(1, v * (0.35 + 0.65 * face.level))) as [number, number, number]);
          const edge = new Color(0, 0, 0);
          const Q = (x: number, z: number, yy = y) => P(x * Math.sign(w), yy, z);
          const inner = [Q(x0, -d / 2 + 0.03), Q(x1, -d / 2 + 0.03), Q(x1, d / 2 - 0.03), Q(x0, d / 2 - 0.03)];
          buf.tri(inner[0], inner[2], inner[1], col);
          buf.tri(inner[0], inner[3], inner[2], col);
          // "lid": a lid lit from inside (a waste bin) with a narrow seam, not the wide halo of a lit top
          const g = face.part === "lid" ? 0.025 + 0.02 * face.level : 0.12 + 0.1 * face.level;
          const halo = col.clone().multiplyScalar(face.part === "lid" ? 0.7 : 0.5);
          const outer = [Q(x0 - g, -d / 2 - g, y + 0.004), Q(x1 + g, -d / 2 - g, y + 0.004), Q(x1 + g, d / 2 + g, y + 0.004), Q(x0 - g, d / 2 + g, y + 0.004)];
          for (let i = 0; i < 4; i++) {
            const j = (i + 1) % 4;
            buf.tri(inner[i], outer[j], outer[i], halo, edge, edge);
            buf.tri(inner[i], inner[j], outer[j], halo, halo, edge);
          }
        }
        continue;
      }
      // a pack item that is no lamp lights its glowing parts (a smart speaker's ring) in the screen's colour
      const packed = packItem(f.type);
      if (packed && !packed.light && st.ring && packed.parts.some((p) => p.glow)) {
        const ring = new Color(...st.color.map((v) => Math.min(1, v * (0.45 + 0.55 * st.level))) as [number, number, number]);
        pushPackGlow(buf, packed, f, mountBase(fv.floor, f), ring.getHex());
      }
      const r = screenRect(f, fv.floor);
      if (!r) continue;
      const core = new Color(...st.color.map((v) => Math.min(1, v * (0.35 + 0.65 * st.level))) as [number, number, number]);
      const edge = new Color(0, 0, 0);
      const z = r.z + 0.004;
      buf.tri(P(r.x0, r.y0, z), P(r.x1, r.y0, z), P(r.x1, r.y1, z), core);
      buf.tri(P(r.x0, r.y0, z), P(r.x1, r.y1, z), P(r.x0, r.y1, z), core);
      if (st.plain) continue;
      // glow frame fading out around the screen
      const g = 0.18 + 0.12 * st.level;
      const halo = core.clone().multiplyScalar(0.5);
      const inner = [P(r.x0, r.y0, z), P(r.x1, r.y0, z), P(r.x1, r.y1, z), P(r.x0, r.y1, z)];
      const outer = [P(r.x0 - g, r.y0 - g, z + 0.01), P(r.x1 + g, r.y0 - g, z + 0.01), P(r.x1 + g, r.y1 + g, z + 0.01), P(r.x0 - g, r.y1 + g, z + 0.01)];
      for (let i = 0; i < 4; i++) {
        const j = (i + 1) % 4;
        buf.tri(inner[i], outer[i], outer[j], halo, edge, edge);
        buf.tri(inner[i], outer[j], inner[j], halo, edge, halo);
      }
    }
    fv.screenMesh.geometry.dispose();
    fv.screenMesh.geometry = buf.geometry();
    fv.screenMesh.visible = buf.count > 0;
    this.updateScreenPictures(fv, items);
  }

  /** App icons or cover art on the screens, fitted into the screen with their own aspect ratio. */
  private updateScreenPictures(fv: FloorView, items: Furniture[]): void {
    const wanted = new Map(items.map((f) => [f.id, f]).filter(([id]) => !!this.screens.get(id as string)?.picture) as [string, Furniture][]);
    for (const [id, pic] of fv.screenPics) {
      if (wanted.has(id) && this.screens.get(id)!.picture === pic.url) continue;
      fv.group.remove(pic.mesh);
      pic.mesh.geometry.dispose();
      (pic.mesh.material as Material).dispose();
      pic.texture?.dispose();
      fv.screenPics.delete(id);
    }
    for (const [id, f] of wanted) {
      const st = this.screens.get(id)!;
      const r = screenRect(f, fv.floor);
      if (!r) continue;
      let pic = fv.screenPics.get(id);
      if (!pic) {
        const mesh = new Mesh(new PlaneGeometry(1, 1), new MeshBasicMaterial({ color: 0xffffff, transparent: true }));
        mesh.visible = false;
        mesh.renderOrder = 5;
        pic = { url: st.picture!, mesh, texture: null };
        fv.screenPics.set(id, pic);
        fv.group.add(mesh);
        const entry = pic;
        new TextureLoader().load(
          st.picture!,
          (tex) => {
            if (fv.screenPics.get(id) !== entry) {
              tex.dispose();
              return;
            }
            tex.colorSpace = SRGBColorSpace;
            entry.texture = tex;
            const mat = entry.mesh.material as MeshBasicMaterial;
            mat.map = tex;
            mat.needsUpdate = true;
            this.placeScreenPicture(entry.mesh, f, r, tex);
            entry.mesh.visible = true;
            this.invalidate();
          },
          undefined,
          // no picture (e.g. an expired token): the screen keeps its coloured glow
          () => undefined,
        );
      }
      (pic.mesh.material as MeshBasicMaterial).color.setScalar(0.45 + 0.55 * st.level);
      if (pic.texture) this.placeScreenPicture(pic.mesh, f, r, pic.texture);
    }
  }

  private placeScreenPicture(mesh: Mesh, f: Furniture, r: { x0: number; x1: number; y0: number; y1: number; z: number }, tex: Texture): void {
    const img = tex.image as { width?: number; height?: number } | undefined;
    const aspect = img?.width && img?.height ? img.width / img.height : 16 / 9;
    // contain: the whole picture is visible, letterboxed by the dark screen around it
    const { w, h } = screenPictureSize(r.x1 - r.x0, r.y1 - r.y0, aspect);
    const a = f.rotation * DEG;
    const cx = (r.x0 + r.x1) / 2;
    const z = r.z + 0.008;
    mesh.scale.set(w, h, 1);
    mesh.rotation.set(0, -a, 0);
    mesh.position.set(f.x + cx * Math.cos(a) - z * Math.sin(a), (r.y0 + r.y1) / 2, f.z + cx * Math.sin(a) + z * Math.cos(a));
  }

  private flowSeconds(): number {
    return (performance.now() - this.flowStart) / 1000;
  }

  /** Energy cables of a floor as flat glowing ribbons (vertical pieces as two crossed ribbons). */
  private buildFlows(fv: FloorView): void {
    this.buildPipeLines(fv);
    const layout = this.flows
      .filter((f) => f.floorId === fv.floor.id && !f.pipe)
      .map(flowKey)
      .join(";");
    const p: number[] = [];
    const c: number[] = [];
    const uv: number[] = [];
    const sp: number[] = [];
    const off: number[] = [];
    for (const f of this.flows) {
      if (f.floorId !== fv.floor.id || f.pipe) continue;
      const phase = this.flowPhase.get(flowKey(f)) ?? { speed: flowSpeed(f.power), offset: 0 };
      const level = f.power > 0.5 ? Math.min(1, 0.5 + f.power / 2500) : 0.22;
      const col = f.color.map((v) => v * level);
      const len = Math.hypot(f.b[0] - f.a[0], f.b[1] - f.a[1], f.b[2] - f.a[2]);
      if (len < 1e-4) continue;
      const dir = [(f.b[0] - f.a[0]) / len, (f.b[1] - f.a[1]) / len, (f.b[2] - f.a[2]) / len];
      // ribbon sides: flat on the floor for horizontal cables, two crossed planes for risers
      const sides: number[][] = [];
      if (Math.abs(dir[1]) < 0.5) {
        const l = Math.hypot(dir[0], dir[2]) || 1;
        sides.push([-dir[2] / l, 0, dir[0] / l]);
      } else sides.push([1, 0, 0], [0, 0, 1]);
      // a wide, faint halo under a bright core
      const layers: [number, number][] = this.lowQuality
        ? [[CABLE_WIDTH * 1.4, 1]]
        : [
            [CABLE_HALO, 0.25],
            [CABLE_WIDTH, 1],
          ];
      for (const [width, strength] of layers) {
        for (const n of sides) {
          const h = (width * (f.width ?? 1)) / 2;
          const v = (q: number[], k: number) => [q[0] + n[0] * h * k, q[1] + n[1] * h * k, q[2] + n[2] * h * k];
          const quad = [
            [v(f.a, -1), f.dist, 0],
            [v(f.b, -1), f.dist + len, 0],
            [v(f.b, 1), f.dist + len, 1],
            [v(f.a, 1), f.dist, 1],
          ] as const;
          for (const i of [0, 1, 2, 0, 2, 3]) {
            const [pos, u, w] = quad[i];
            p.push(pos[0], pos[1], pos[2]);
            c.push(col[0] * strength, col[1] * strength, col[2] * strength);
            uv.push(u, w);
            sp.push(phase.speed);
            off.push(phase.offset);
          }
        }
      }
    }
    const old = fv.flowMesh.geometry;
    if (layout === fv.flowLayout && old.getAttribute("position")?.count === p.length / 3) {
      // same cables, new power: only colours and stripe speeds change (no new geometry, no garbage)
      for (const [name, data] of [
        ["color", c],
        ["flowSpeed", sp],
        ["flowOffset", off],
      ] as const) {
        const attr = old.getAttribute(name) as Float32BufferAttribute;
        (attr.array as Float32Array).set(data);
        attr.needsUpdate = true;
      }
      fv.flowMesh.visible = p.length > 0;
      return;
    }
    fv.flowLayout = layout;
    const g = new Geometry();
    g.setAttribute("position", new Float32BufferAttribute(p, 3));
    g.setAttribute("color", new Float32BufferAttribute(c, 3));
    g.setAttribute("uv", new Float32BufferAttribute(uv, 2));
    g.setAttribute("flowSpeed", new Float32BufferAttribute(sp, 1));
    g.setAttribute("flowOffset", new Float32BufferAttribute(off, 1));
    fv.flowMesh.geometry.dispose();
    fv.flowMesh.geometry = g;
    fv.flowMesh.visible = p.length > 0;
  }

  /**
   * A module's pipes: a dark edge under a solid core in the pipe's colour (normal blending, so a bright floor does not
   * wash them out); the light running along them is a soft brightening of the core. Pipes shown only in the house
   * view go into a mesh of their own, hidden while a floor is opened; those shown only on an opened floor into another.
   */
  private buildPipeLines(fv: FloorView): void {
    const mine = this.flows.filter((f) => f.floorId === fv.floor.id && f.pipe);
    const sig = JSON.stringify(mine.map((f) => [f.a, f.b, f.dist, f.color, f.width, f.house, f.floor, Math.round(f.power / 50), this.flowPhase.get(flowKey(f))?.speed ?? 0]));
    if (sig === fv.pipeLineSig) return;
    fv.pipeLineSig = sig;
    for (const view of ["all", "house", "floor"] as const) {
      const p: number[] = [];
      const c: number[] = [];
      const uv: number[] = [];
      const sp: number[] = [];
      const off: number[] = [];
      for (const f of mine) {
        if ((f.house ? "house" : f.floor ? "floor" : "all") !== view) continue;
        const len = Math.hypot(f.b[0] - f.a[0], f.b[1] - f.a[1], f.b[2] - f.a[2]);
        if (len < 1e-4) continue;
        const phase = this.flowPhase.get(flowKey(f)) ?? { speed: flowSpeed(f.power), offset: 0 };
        const dir = [(f.b[0] - f.a[0]) / len, (f.b[1] - f.a[1]) / len, (f.b[2] - f.a[2]) / len];
        const sides: number[][] = [];
        if (Math.abs(dir[1]) < 0.5) {
          const l = Math.hypot(dir[0], dir[2]) || 1;
          sides.push([-dir[2] / l, 0, dir[0] / l]);
        } else sides.push([1, 0, 0], [0, 0, 1]);
        const core = PIPE_CORE * (f.width ?? 1);
        // resting: the pipe stays in its colour, a little darker
        const level = f.power > 0.5 ? 1 : 0.62;
        const layers: [number, number[], number, number][] = [
          // the dark edge (uv.y 2..3 marks it: no light runs on it)
          [core + PIPE_EDGE * 2, [0.02, 0.025, 0.05], 0.78, 2],
          [core, f.color.map((v) => v * level), 1, 0],
        ];
        for (const [width, col, alpha, v0] of layers) {
          for (const n of sides) {
            const h = width / 2;
            const lift = v0 === 0 ? 0.002 : 0;
            const v = (q: number[], k: number) => [q[0] + n[0] * h * k, q[1] + n[1] * h * k + lift, q[2] + n[2] * h * k];
            const quad = [
              [v(f.a, -1), f.dist, v0],
              [v(f.b, -1), f.dist + len, v0],
              [v(f.b, 1), f.dist + len, v0 + 1],
              [v(f.a, 1), f.dist, v0 + 1],
            ] as const;
            for (const i of [0, 1, 2, 0, 2, 3]) {
              const [pos, u, w] = quad[i];
              p.push(pos[0], pos[1], pos[2]);
              c.push(col[0], col[1], col[2], alpha);
              uv.push(u, w);
              sp.push(phase.speed);
              off.push(phase.offset);
            }
          }
        }
      }
      const mesh = view === "house" ? fv.pipeHouseMesh : view === "floor" ? fv.pipeFloorMesh : fv.pipeLineMesh;
      const g = new Geometry();
      g.setAttribute("position", new Float32BufferAttribute(p, 3));
      g.setAttribute("color", new Float32BufferAttribute(c, 4));
      g.setAttribute("uv", new Float32BufferAttribute(uv, 2));
      g.setAttribute("flowSpeed", new Float32BufferAttribute(sp, 1));
      g.setAttribute("flowOffset", new Float32BufferAttribute(off, 1));
      mesh.geometry.dispose();
      mesh.geometry = g;
      mesh.userData.filled = p.length > 0;
    }
    this.applyHouseLines(fv);
  }

  /** Pipes shown only in the house view: hidden while a floor is opened; those only on an opened floor the other way round. */
  private applyHouseLines(only?: FloorView): void {
    for (const fv of only ? [only] : this.floors) {
      fv.pipeLineMesh.visible = !!fv.pipeLineMesh.userData.filled;
      fv.pipeHouseMesh.visible = !!fv.pipeHouseMesh.userData.filled && this.floorId === null;
      fv.pipeFloorMesh.visible = !!fv.pipeFloorMesh.userData.filled && this.floorId !== null;
    }
  }

  private buildOpenings(fv: FloorView): void {
    const parts = buildOpeningParts(fv.geo.openings, fv.openings, Math.min(fv.floor.cut_height, fv.floor.height));
    fv.frameTris = parts.frameTris;
    fv.glassTris = parts.glassTris;
    fv.blindTris = parts.blindTris;
    for (const [mesh, geo] of [
      [fv.framesMesh, parts.frames],
      [fv.glassMesh, parts.glass],
      [fv.blindsMesh, parts.blinds],
    ] as const) {
      mesh.geometry.dispose();
      mesh.geometry = geo;
      mesh.visible = geo.getAttribute("position").count > 0;
    }
  }

  /** Floors that can be tapped and are framed by the camera: the whole house or the selected floor. */
  private activeFloors(): FloorView[] {
    return this.floors.filter((f) => f.to > 0.99);
  }

  private applyHighlight(): void {
    for (const fv of this.floors) {
      const colors = fv.geo.floor.getAttribute("color");
      // a pulsing warning recolours its rooms only: floors whose tints and selection stay are left alone
      const sig = fv.geo.roomTris.map((r) => `${this.roomTint?.get(r.roomId)?.join(",") ?? ""}${r.roomId === this.roomId ? "*" : ""}`).join(";");
      if (this.highlighted.get(colors) === sig) continue;
      this.highlighted.set(colors, sig);
      for (const r of fv.geo.roomTris) {
        const c = new Color(r.color);
        const tint = this.roomTint?.get(r.roomId);
        // heatmap: a clear, saturated floor colour (the room light is dimmed meanwhile)
        if (tint) c.lerp(new Color(...tint).multiplyScalar(0.6), 0.9);
        if (r.roomId === this.roomId) c.lerp(ACTIVE_FLOOR, tint ? 0.3 : 0.75);
        for (let v = r.start * 3; v < r.end * 3; v++) colors.setXYZ(v, c.r, c.g, c.b);
      }
      colors.needsUpdate = true;
    }
    for (const pin of this.labels.querySelectorAll<HTMLElement>(".fp3d-pin")) {
      pin.classList.toggle("fp3d-pin-active", !!pin.dataset.room && pin.dataset.room === this.roomId);
    }
    this.invalidate();
  }

  private fit(duration: number): void {
    const box = new Box3();
    for (const fv of this.activeFloors()) {
      const y0 = fv.floor.elevation + fv.ty;
      for (const room of fv.floor.rooms) {
        for (const [x, z] of room.points) {
          box.expandByPoint(new Vector3(x, y0, z));
          box.expandByPoint(new Vector3(x, y0 + fv.floor.height, z));
        }
      }
    }
    if (box.isEmpty()) box.set(new Vector3(-4, 0, -4), new Vector3(4, 2.5, 4));
    this.placeGround();
    // the weather falls over the plot and a margin around it
    this.weatherBox = { x0: box.min.x - 6, x1: box.max.x + 6, z0: box.min.z - 6, z1: box.max.z + 6, y0: box.min.y, y1: box.max.y + 6 };
    this.applyWeather();
    this.placeSky();
    const center = box.getCenter(new Vector3());
    const size = box.getSize(new Vector3());
    // perspective widens the near corners; portrait screens need a little more room for that
    const radius = Math.max(8, this.distanceFor(size) * (this.camera.aspect < 1 ? 1.16 : 1.02));
    this.controls.maxRadius = Math.max(40, radius * 3);
    center.y = box.min.y + size.y * (this.houseView ? 0.45 : 0.3);
    if (this.floorId === null || this.floors.length === 1) this.houseRadius = radius;
    // the house view opens as set up (from the garden side, closer …); an opened floor keeps the fitted
    // distance but looks from the same side, so the house never turns round when a floor is opened
    const house = this.floorId === null;
    // a floor may have a start view of its own (#182): it opens from that side and distance
    const own = !house ? (this.floorMap.get(this.floorId!)?.floor.start_view ?? null) : null;
    const start = own ?? this.startView;
    const useRadius = !!start && (house || !!own);
    if (start && useRadius) this.controls.maxRadius = Math.max(this.controls.maxRadius, start.radius * 1.5);
    // the start view's framing (#206): the point it looks at, counted from the opened floor
    const at = useRadius ? start!.target : null;
    if (at) center.set(at.x, at.y + (own ? this.floorBase(this.floorId) : 0), at.z);
    if (this.keepNext) {
      // the same angle, distance and spot – only lifted to the opened floor
      this.keepNext = false;
      const cur = this.controls.view;
      this.controls.flyTo({ target: new Vector3(cur.target.x, center.y, cur.target.z), radius: cur.radius, phi: cur.phi, theta: cur.theta }, duration);
      return;
    }
    this.controls.flyTo({ target: center, radius: useRadius ? start!.radius : radius, phi: start ? start.phi : 0.85, theta: start ? start.theta : -0.6 }, duration, !!start);
  }

  /** The ground grid lies under the lowest floor and reaches well beyond the building. */
  private placeGround(): void {
    const box = new Box3();
    let y = Infinity;
    for (const fv of this.floors) {
      y = Math.min(y, fv.floor.elevation + Math.min(0, fv.ty));
      for (const room of fv.floor.rooms) for (const [x, z] of room.points) box.expandByPoint(new Vector3(x, 0, z));
      for (const a of fv.floor.outdoor ?? []) for (const [x, z] of a.points) box.expandByPoint(new Vector3(x, 0, z));
    }
    this.ground.visible = !box.isEmpty() && !this.lowQuality && this.theme !== "day";
    if (box.isEmpty()) return;
    if (this.ground.visible && !this.groundTexture) {
      this.groundTexture = makeGroundTexture();
      const m = this.ground.material as MeshBasicMaterial;
      m.map = this.groundTexture;
      m.needsUpdate = true;
    }
    const c = box.getCenter(new Vector3());
    const s = box.getSize(new Vector3());
    // the texture has 32 cells: 1 m each for a normal house, 2 m for a very large one
    const span = GROUND_CELLS * Math.ceil((Math.max(s.x, s.z) + 16) / GROUND_CELLS);
    this.ground.scale.set(span, span, 1);
    this.ground.position.set(c.x, y - SLAB - 0.02, c.z);
  }

  /** Camera distance at which a box of this size fits the view (bounding sphere against the narrower field of view). */
  private distanceFor(size: Vector3): number {
    const vfov = this.camera.fov * DEG;
    const hfov = 2 * Math.atan(Math.tan(vfov / 2) * this.camera.aspect);
    return size.length() / 2 / Math.sin(Math.min(vfov, hfov) / 2);
  }

  /**
   * What lies under a screen point: a lamp, a linked piece of furniture or opening (their entity), or
   * a room. Walls are looked through (the ones in front are glass), furniture without an entity too.
   */
  /** A ray from the camera through a screen point of the stage. */
  private rayAt(x: number, y: number): Raycaster {
    const rect = this.renderer.domElement.getBoundingClientRect();
    const ray = new Raycaster();
    ray.setFromCamera(new Vector2((x / rect.width) * 2 - 1, -(y / rect.height) * 2 + 1), this.camera);
    return ray;
  }

  private pick(x: number, y: number): { entity: string } | { floorId: string; roomId: string | null } | null {
    const ray = this.rayAt(x, y);
    const floors = this.activeFloors();
    const meshes = floors.flatMap((f) => [f.lampMesh, f.coneMesh, f.framesMesh, f.glassMesh, f.blindsMesh, f.wallMesh, f.floorMesh].filter((m) => m.visible));
    const inRange = (list: { id: string; start: number; end: number }[], tri: number) => list.find((r) => tri >= r.start && tri < r.end)?.id;
    for (const hit of ray.intersectObjects(meshes, false)) {
      if (hit.faceIndex == null) continue;
      const tri = hit.faceIndex;
      const fv = floors.find((f) => f.group === hit.object.parent)!;
      if (hit.object === fv.lampMesh || hit.object === fv.coneMesh) {
        // a camera's wedge on the floor is a far bigger target than the camera itself
        const id = inRange(hit.object === fv.lampMesh ? fv.lampTris : fv.coneTris, tri);
        if (id) return { entity: id };
      } else if (hit.object === fv.framesMesh || hit.object === fv.blindsMesh || hit.object === fv.glassMesh) {
        // the part above the cut is folded away with its wall: a tap there is meant for what lies behind
        if (this.wallMode === "cut" && hit.face) {
          const fold = ((hit.object as Mesh).geometry.getAttribute("fold") as Float32BufferAttribute | undefined)?.getX(hit.face.a) ?? ALWAYS;
          if (fold !== ALWAYS && Math.floor(fold / 16) === 0) continue;
        }
        // the whole window counts, glass included: a small blind is a poor target
        const id = inRange(hit.object === fv.framesMesh ? fv.frameTris : hit.object === fv.glassMesh ? fv.glassTris : fv.blindTris, tri);
        const entity = id ? this.pickOpenings.get(id) : undefined;
        if (entity) return { entity };
      } else if (hit.object === fv.wallMesh) {
        const id = inRange(fv.geo.furnitureTris, tri);
        const entity = id ? this.pickFurniture.get(id) : undefined;
        if (entity) return { entity };
        // an outdoor area acting as a room (#100): its surface lies in the wall mesh; a tap on it opens it
        if (!id && hit.face && hit.face.normal.y > 0.7) {
          const zone = outdoorZones(fv.floor).find((z) => pointInPolygon([hit.point.x, hit.point.z], z.points));
          if (zone) return { floorId: fv.floor.id, roomId: zone.id };
        }
        // a wall: the tap stops at it unless it is see-through (cut away, or glass in the floor view)
        if (hit.face && !id) {
          const fold = (fv.wallMesh.geometry.getAttribute("fold") as Float32BufferAttribute | undefined)?.getX(hit.face.a) ?? 32;
          const part = Math.floor(fold / 16);
          const bucket = fold % 16;
          const cutAway = this.wallMode === "cut" && part === 0;
          const glass = (fv.mask.glass.value & (1 << bucket)) !== 0;
          if (!cutAway) {
            // the room on the camera's side of the wall is what the tap means
            const dir = ray.ray.direction;
            const l = Math.hypot(dir.x, dir.z) || 1;
            const p: [number, number] = [hit.point.x - (dir.x / l) * 0.3, hit.point.z - (dir.z / l) * 0.3];
            const beside = fv.floor.rooms.find((r) => r.points.length >= 3 && pointInPolygon(p, r.points))?.id ?? null;
            if (this.roomId !== null) {
              // in a room: its own walls catch the tap (nothing behind them is meant), other walls let it through
              if (beside === this.roomId) return { floorId: fv.floor.id, roomId: beside };
            } else if (!glass && beside) return { floorId: fv.floor.id, roomId: beside };
          }
        }
      } else if (hit.object === fv.floorMesh) {
        return { floorId: fv.floor.id, roomId: inRange(fv.geo.roomTris.map((r) => ({ id: r.roomId, start: r.start, end: r.end })), tri) ?? null };
      }
    }
    return null;
  }

  private onTap(x: number, y: number): void {
    const hit = this.pick(x, y);
    if (hit && "entity" in hit && this.furnish) {
      this.selectDevice(hit.entity);
      this.options.onDeviceSelect?.(hit.entity);
      return;
    }
    if (hit && "entity" in hit) {
      this.flashes.set(hit.entity, performance.now() + FLASH_MS);
      this.invalidate();
      this.options.onDeviceTap?.(hit.entity, x, y);
      return;
    }
    this.options.onRoomTap?.(hit?.floorId ?? this.floorId ?? "", hit?.roomId ?? null);
  }

  /** Furniture item (or lamp) under a screen point, with the floor it is on. */
  private furnitureAt(x: number, y: number): { fv: FloorView; id: string; y: number } | null {
    const ray = this.rayAt(x, y);
    const floors = this.activeFloors();
    // a TV's screen and its picture, a smart fridge's doors are meshes of their own: they belong to the item too
    const extra = (f: FloorView) => [f.screenMesh, f.fridgeMesh, ...[...f.screenPics.values()].map((p) => p.mesh)];
    const meshes = floors.flatMap((f) => [f.lampMesh, f.wallMesh, ...extra(f)].filter((m) => m.visible));
    for (const hit of ray.intersectObjects(meshes, false)) {
      if (hit.faceIndex == null) continue;
      const fv = floors.find((f) => f.group === hit.object.parent || extra(f).includes(hit.object as Mesh))!;
      if (!fv) continue;
      if (hit.object !== fv.lampMesh && hit.object !== fv.wallMesh) {
        const id = this.furnitureNear(fv, hit.point.x, hit.point.z);
        if (id) return { fv, id, y: hit.point.y };
        continue;
      }
      const list = hit.object === fv.lampMesh ? fv.lampFurnTris : fv.geo.furnitureTris;
      const id = list.find((r) => hit.faceIndex! >= r.start && hit.faceIndex! < r.end)?.id;
      if (id) return { fv, id, y: hit.point.y };
    }
    return null;
  }

  /** The item whose footprint (a little grown: a screen stands in front of its front) holds a point, the nearest one. */
  private furnitureNear(fv: FloorView, x: number, z: number): string | null {
    let best: { id: string; d: number } | null = null;
    for (const f of fv.floor.furniture) {
      const a = f.rotation * DEG;
      const dx = x - f.x;
      const dz = z - f.z;
      const u = Math.abs(dx * Math.cos(a) + dz * Math.sin(a)) - f.w / 2;
      const v = Math.abs(-dx * Math.sin(a) + dz * Math.cos(a)) - f.d / 2;
      const d = Math.max(u, v);
      if (d < 0.25 && (!best || d < best.d)) best = { id: f.id, d };
    }
    return best?.id ?? null;
  }

  /** Point on a floor's plane under a screen point (or on a level plane at height `at`, world coordinates). */
  private floorPoint(fv: FloorView, x: number, y: number, at?: number): [number, number] | null {
    const ray = this.rayAt(x, y);
    const h = at ?? fv.floor.elevation + fv.y;
    const dir = ray.ray.direction;
    if (Math.abs(dir.y) < 1e-4) return null;
    const t = (h - ray.ray.origin.y) / dir.y;
    if (t <= 0) return null;
    return [ray.ray.origin.x + dir.x * t, ray.ray.origin.z + dir.z * t];
  }

  /** Only these furniture types can be grabbed while furnishing (null: all); placed devices then cannot. */
  setFurnishTypes(types: readonly string[] | null): void {
    this.furnishTypes = types ? new Set(types) : null;
  }

  /** The editor's handler for things on roof faces and walls (null: none). */
  setSurfaceGrab(grab: SurfaceGrab | null): void {
    this.surfaceGrab = grab;
  }

  /** The ray under a point of the view (world coordinates) and the furniture item there: the editor's tools on walls. */
  pointerRay(x: number, y: number): { o: [number, number, number]; d: [number, number, number] } {
    return this.surfaceRay(x, y);
  }

  furnitureIdAt(x: number, y: number): string | null {
    return this.furnitureAt(x, y)?.id ?? null;
  }

  private surfaceRay(x: number, y: number): { o: [number, number, number]; d: [number, number, number] } {
    const r = this.rayAt(x, y).ray;
    return { o: [r.origin.x, r.origin.y, r.origin.z], d: [r.direction.x, r.direction.y, r.direction.z] };
  }

  private grabFurniture(x: number, y: number): boolean {
    // the editor's surface handler first: a solar field or roof window under the pointer is moved by it
    if (this.surfaceGrab?.start(this.surfaceRay(x, y))) {
      this.surfaceDragging = true;
      return true;
    }
    if (!this.furnish) return false;
    // a device whose pin was pressed; the pin of a furniture item (the washer's watts) moves the item
    const pending = this.pendingDevice;
    this.pendingDevice = null;
    // a tool that only moves some furniture (energy devices): everything else stays where it is
    const only = this.furnishTypes;
    if (only) {
      const owner = pending ? this.devices.find((m) => m.id === pending)?.furnitureId : undefined;
      const hit = owner ? null : this.furnitureAt(x, y);
      const id = owner ?? hit?.id;
      const fv = id ? this.floors.find((v) => v.floor.furniture.some((m) => m.id === id)) : undefined;
      const type = fv?.floor.furniture.find((m) => m.id === id)?.type;
      return !!(fv && id && type && only.has(type)) && this.grabItem(fv, id, x, y);
    }
    if (pending) {
      const owner = this.devices.find((m) => m.id === pending)?.furnitureId;
      const fv = owner ? this.floors.find((v) => v.floor.furniture.some((m) => m.id === owner)) : undefined;
      if (!owner || !fv) return this.grabDevice(pending, x, y);
      return this.grabItem(fv, owner, x, y);
    }
    // furniture first: a washing machine or a lamp with a linked entity is still furniture to move
    // (its entity would otherwise be grabbed like a placed device, and nothing would move)
    const hit = this.furnitureAt(x, y);
    if (!hit) {
      // a placed device's model (a camera) under the pointer
      const picked = this.pick(x, y);
      if (picked && "entity" in picked) return this.grabDevice(picked.entity, x, y);
      // a tap on empty space clears the selection, a drag still turns the view
      if (this.selectedFurniture) {
        this.selectFurniture(null);
        this.options.onFurnitureSelect?.(null);
      }
      if (this.selectedDevice) {
        this.selectDevice(null);
        this.options.onDeviceSelect?.(null);
      }
      return false;
    }
    return this.grabItem(hit.fv, hit.id, x, y, hit.y);
  }

  /**
   * Takes an item to drag. It moves on a level plane at the height where it was grabbed (not the floor): seen
   * almost level (the wall view at eye height), the floor under the back of an armchair lies far behind it or
   * above the horizon, and the grab failed – the view turned instead.
   */
  private grabItem(fv: FloorView, id: string, x: number, y: number, at?: number): boolean {
    const f = fv.floor.furniture.find((m) => m.id === id);
    // the plane stays a little below the eye: a plane at eye height gives no point at all
    const plane = at === undefined ? undefined : Math.min(at, this.camera.position.y - 0.3);
    const p = this.floorPoint(fv, x, y, plane);
    if (!f || !p) return false;
    // seen almost level (the wall view at eye height, a tall piece grabbed high up), a level plane turns a few
    // pixels into metres or none at all: then the pointer's way on screen moves the item, forward and back a
    // little faster as the depth looks shortened
    let screen: NonNullable<typeof this.grab>["screen"];
    const dir = this.rayAt(x, y).ray.direction;
    if (at !== undefined && -dir.y < 0.34) {
      const cam = this.camera.position;
      // forward and back: straight along the view (towards the wall it looks at), not along the pointer's ray
      const look = this.camera.getWorldDirection(new Vector3());
      const len = Math.hypot(look.x, look.z) || 1;
      const fwd: [number, number] = [look.x / len, look.z / len];
      const dist = Math.hypot(p[0] - cam.x, p[1] - cam.z, (plane ?? 0) - cam.y);
      const h = this.renderer.domElement.getBoundingClientRect().height || 1;
      const perPx = (2 * dist * Math.tan((this.camera.fov * Math.PI) / 360)) / h;
      screen = { x0: x, y0: y, fx: f.x, fz: f.z, right: [-fwd[1], fwd[0]], fwd, perPx, gain: Math.min(2, 1 / Math.max(0.5, -dir.y)) };
    }
    if (f.locked) {
      // fixed: selected, but a drag turns the view instead of moving it
      this.selectFurniture(f.id);
      this.options.onFurnitureSelect?.(f.id);
      return false;
    }
    this.grab = { floorId: fv.floor.id, id: f.id, offset: [f.x - p[0], f.z - p[1]], x: f.x, z: f.z, moved: false, plane, screen };
    this.selectFurniture(f.id);
    this.options.onFurnitureSelect?.(f.id);
    return true;
  }

  private grabDevice(id: string, x: number, y: number): boolean {
    const d = this.devices.find((m) => m.id === id);
    const fv = d && this.floorMap.get(d.floorId);
    const p = fv && this.floorPoint(fv, x, y);
    if (!d || !fv || !p) return false;
    if (d.fixed) {
      this.selectDevice(id);
      this.options.onDeviceSelect?.(id);
      return false;
    }
    this.deviceGrab = { id, floorId: fv.floor.id, offset: [d.x - p[0], d.z - p[1]], x: d.x, z: d.z, moved: false };
    this.selectDevice(id);
    this.options.onDeviceSelect?.(id);
    return true;
  }

  /** Select a device (its pin is marked), or none. */
  setSelectedDevice(id: string | null): void {
    if (id === this.selectedDevice) return;
    this.selectDevice(id);
  }

  /** Mark the selected device's pin; selecting a device drops the furniture selection and vice versa. */
  private selectDevice(id: string | null): void {
    if (id && this.selectedFurniture) {
      this.selectFurniture(null);
      this.options.onFurnitureSelect?.(null);
    }
    this.selectedDevice = id;
    for (const [entity, pin] of this.devicePins) pin.el.classList.toggle("fp3d-dev-sel", entity === id);
  }

  private dragFurniture(x: number, y: number): void {
    if (this.surfaceDragging) {
      this.surfaceGrab?.move(this.surfaceRay(x, y));
      return;
    }
    const dg = this.deviceGrab;
    if (dg) {
      const fv = this.floorMap.get(dg.floorId);
      const d = this.devices.find((m) => m.id === dg.id);
      const p = fv && this.floorPoint(fv, x, y);
      if (!fv || !d || !p) return;
      const grid = this.building?.settings.grid ?? 0.05;
      dg.x = d.x = Math.round((p[0] + dg.offset[0]) / grid) * grid;
      dg.z = d.z = Math.round((p[1] + dg.offset[1]) / grid) * grid;
      dg.moved = true;
      this.labelsDirty = true;
      this.invalidate();
      return;
    }
    const g = this.grab;
    const fv = g && this.floorMap.get(g.floorId);
    if (!g || !fv) return;
    const sc = g.screen;
    let p: [number, number] | null;
    if (sc) {
      const dx = (x - sc.x0) * sc.perPx;
      const dy = (y - sc.y0) * sc.perPx * sc.gain;
      p = [sc.fx + sc.right[0] * dx - sc.fwd[0] * dy - g.offset[0], sc.fz + sc.right[1] * dx - sc.fwd[1] * dy - g.offset[1]];
    } else p = this.floorPoint(fv, x, y, g.plane);
    if (!p) return;
    const grid = this.building?.settings.grid ?? 0.05;
    const f = fv.floor.furniture.find((m) => m.id === g.id);
    const gx = Math.round((p[0] + g.offset[0]) / grid) * grid;
    const gz = Math.round((p[1] + g.offset[1]) / grid) * grid;
    // the whole piece stays in its room: pushed against a wall it stops there
    [g.x, g.z] = f ? clampIntoRoom(fv.floor, f, gx, gz, this.building?.settings.wall_interior ?? 0) : [gx, gz];
    g.moved = true;
    this.updateGhost();
    this.invalidate();
  }

  private dropFurniture(): void {
    if (this.surfaceDragging) {
      this.surfaceDragging = false;
      this.surfaceGrab?.end();
      return;
    }
    const dg = this.deviceGrab;
    this.deviceGrab = null;
    if (dg?.moved) this.options.onDeviceMove?.(dg.id, Math.round(dg.x * 1000) / 1000, Math.round(dg.z * 1000) / 1000);
    const g = this.grab;
    this.grab = null;
    if (g?.moved) this.options.onFurnitureMove?.(g.id, Math.round(g.x * 1000) / 1000, Math.round(g.z * 1000) / 1000);
    this.updateGhost();
  }

  /** Wireframe box around the selected item, at its drag position while it is dragged. */
  private updateGhost(): void {
    if (this.ghost) {
      this.ghost.geometry.dispose();
      (this.ghost.material as Material).dispose();
      this.scene.remove(this.ghost);
      this.ghost = null;
    }
    const ids = [...new Set([...(this.selectedFurniture ? [this.selectedFurniture] : []), ...this.selectedSet])];
    const lines = new LineBuffer();
    let at: FloorView | undefined;
    for (const id of ids) {
      const fv = this.floors.find((q) => q.floor.furniture.some((m) => m.id === id));
      const f = fv?.floor.furniture.find((m) => m.id === id);
      if (!fv || !f) continue;
      at ??= fv;
      this.ghostBox(lines, fv, f, id === this.selectedFurniture ? new Color(0.25, 0.9, 1) : new Color(1, 0.71, 0.28));
    }
    if (!at) return;
    this.ghost = new LineSegments(lines.geometry(), new LineBasicMaterial({ vertexColors: true, depthTest: false, transparent: true }));
    this.ghost.position.y = at.floor.elevation + at.y;
    this.ghost.renderOrder = 20;
    this.scene.add(this.ghost);
  }

  /** The wireframe box of one piece (its front edge brighter at floor level). */
  private ghostBox(lines: LineBuffer, fv: FloorView, f: Furniture, color: Color): void {
    const x = this.grab?.id === f.id ? this.grab.x : f.x;
    const z = this.grab?.id === f.id ? this.grab.z : f.z;
    const H = fv.floor.height;
    // a spot lowered by hand stands at its height above the floor like a wall item
    const hanging = ["lamp_ceiling", "lamp_downlight", "lamp_spot", "lamp_panel", "lamp_pendant", "lamp_fan"].includes(f.type) && f.mount_y == null;
    const h = Math.max(0.1, f.type === "lamp_pendant" ? 0.3 : f.h);
    const y0 = packItem(f.type) || f.type === "lamp_wall" || f.type === "led_strip"
      ? mountBase(fv.floor, f)
      : hanging
        ? f.type === "lamp_pendant"
          ? H - f.h - 0.1
          : H - h
        : mountBase(fv.floor, f);
    const a = f.rotation * DEG;
    const c = Math.cos(a);
    const sn = Math.sin(a);
    const corner = (lx: number, lz: number, y: number) => [x + lx * c - lz * sn, y, z + lx * sn + lz * c];
    const pts = [
      [-f.w / 2, -f.d / 2],
      [f.w / 2, -f.d / 2],
      [f.w / 2, f.d / 2],
      [-f.w / 2, f.d / 2],
    ];
    for (let i = 0; i < 4; i++) {
      const [ax, az] = pts[i];
      const [bx, bz] = pts[(i + 1) % 4];
      lines.seg(corner(ax, az, y0 + 0.01), corner(bx, bz, y0 + 0.01), color);
      lines.seg(corner(ax, az, y0 + h), corner(bx, bz, y0 + h), color);
      lines.seg(corner(ax, az, y0 + 0.01), corner(ax, az, y0 + h), color);
    }
    // the front edge a little brighter at floor level, so the direction is clear
    lines.seg(corner(-f.w / 2, f.d / 2 + 0.03, y0 + 0.02), corner(f.w / 2, f.d / 2 + 0.03, y0 + 0.02), new Color(1, 1, 1));
  }

  private onHold(x: number, y: number): void {
    const hit = this.pick(x, y);
    if (hit && "entity" in hit) this.options.onDeviceHold?.(hit.entity, x, y);
  }

  /** A mostly vertical drag on a lamp or blind becomes a swipe (unless furnishing). */
  private swipeStart(x: number, y: number, dx: number, dy: number): boolean {
    if (this.furnish || Math.abs(dy) < Math.abs(dx) * 1.2) return false;
    const hit = this.pick(x, y);
    if (!hit || !("entity" in hit)) return false;
    if (this.options.onDeviceSwipe?.(hit.entity, "start", 0, x, y) !== true) return false;
    this.swipe = { entity: hit.entity, x, y };
    return true;
  }

  /**
   * Small pictures of every floor with rooms (for the floor switcher): each floor alone, walls cut,
   * seen from above at the usual angle, as PNG data URLs. Rendered once into an offscreen target of
   * the same renderer, so nothing is uploaded twice; the view is restored afterwards.
   */
  floorThumbnails(width = 200, height = 150): { floorId: string; url: string }[] {
    const floors = this.floors.filter((fv) => fv.floor.rooms.some((r) => r.points.length >= 3));
    if (!floors.length) return [];
    const scale = this.lowQuality ? 1 : Math.min(2, window.devicePixelRatio || 1);
    const w = Math.round(width * scale);
    const h = Math.round(height * scale);
    const target = new WebGLRenderTarget(w, h);
    target.texture.colorSpace = SRGBColorSpace;
    const camera = new OrthographicCamera(-1, 1, 1, -1, 0.1, 400);
    const saved = this.floors.map((fv) => ({ fv, visible: fv.group.visible, y: fv.y, o: fv.o, standing: fv.mask.standing.value, glass: fv.mask.glass.value }));
    const roofVisible = this.roof?.group.visible ?? false;
    const ghostVisible = this.ghost?.visible ?? false;
    const clear = this.renderer.getClearAlpha();
    const pixels = new Uint8Array(w * h * 4);
    const canvas = document.createElement("canvas");
    canvas.width = w;
    canvas.height = h;
    const ctx = canvas.getContext("2d")!;
    const out: { floorId: string; url: string }[] = [];
    try {
      if (this.roof) this.roof.group.visible = this.roof.wins.visible = false;
      if (this.ghost) this.ghost.visible = false;
      this.renderer.setClearAlpha(0);
      for (const fv of floors) {
        for (const other of this.floors) other.group.visible = other === fv;
        fv.y = 0;
        fv.o = 1;
        this.applyFloor(fv);
        fv.group.visible = true;
        fv.mask.standing.value = 0;
        fv.mask.glass.value = 0;
        // fit the floor's rooms (with the cut walls) into the picture
        const pts = fv.floor.rooms.flatMap((r) => r.points);
        const y0 = fv.floor.elevation;
        const box = new Box3(
          new Vector3(Math.min(...pts.map((p) => p[0])) - 0.3, y0, Math.min(...pts.map((p) => p[1])) - 0.3),
          new Vector3(Math.max(...pts.map((p) => p[0])) + 0.3, y0 + Math.min(fv.floor.cut_height, fv.floor.height), Math.max(...pts.map((p) => p[1])) + 0.3),
        );
        const center = box.getCenter(new Vector3());
        const theta = -0.6;
        const phi = 0.8;
        const dir = new Vector3(Math.sin(phi) * Math.sin(theta), Math.cos(phi), Math.sin(phi) * Math.cos(theta));
        camera.position.copy(center).addScaledVector(dir, 100);
        camera.lookAt(center);
        camera.updateMatrixWorld();
        let rx = 0.5;
        let ry = 0.5;
        for (const x of [box.min.x, box.max.x])
          for (const y of [box.min.y, box.max.y])
            for (const z of [box.min.z, box.max.z]) {
              const p = new Vector3(x, y, z).applyMatrix4(camera.matrixWorldInverse);
              rx = Math.max(rx, Math.abs(p.x));
              ry = Math.max(ry, Math.abs(p.y));
            }
        // keep the picture's aspect ratio
        const aspect = w / h;
        if (rx / ry > aspect) ry = rx / aspect;
        else rx = ry * aspect;
        camera.left = -rx * 1.05;
        camera.right = rx * 1.05;
        camera.top = ry * 1.05;
        camera.bottom = -ry * 1.05;
        camera.updateProjectionMatrix();
        this.renderer.setRenderTarget(target);
        this.renderer.clear();
        this.renderer.render(this.scene, camera);
        this.renderer.readRenderTargetPixels(target, 0, 0, w, h, pixels);
        // the target's rows start at the bottom
        const img = ctx.createImageData(w, h);
        for (let row = 0; row < h; row++) img.data.set(pixels.subarray((h - 1 - row) * w * 4, (h - row) * w * 4), row * w * 4);
        ctx.putImageData(img, 0, 0);
        out.push({ floorId: fv.floor.id, url: canvas.toDataURL("image/png") });
      }
    } finally {
      this.renderer.setRenderTarget(null);
      this.renderer.setClearAlpha(clear);
      for (const s of saved) {
        s.fv.y = s.y;
        s.fv.o = s.o;
        s.fv.mask.standing.value = s.standing;
        s.fv.mask.glass.value = s.glass;
        this.applyFloor(s.fv);
        s.fv.group.visible = s.visible;
      }
      if (this.roof) {
        this.roof.group.visible = roofVisible;
        this.roof.wins.visible = true;
      }
      if (this.ghost) this.ghost.visible = ghostVisible;
      target.dispose();
      this.invalidate();
    }
    return out;
  }

  /** Robot vacuums and their states; robots that clean drive lanes through their room. */
  setRobots(list: RobotInfo[]): void {
    const seen = new Set<string>();
    for (const info of list) {
      seen.add(info.id);
      let r = this.robots.get(info.id);
      // a pack's robot is rebuilt when its pack arrives (or goes) or the dock's size changes
      if (r && r.modelKey !== this.robotModelKey(info)) {
        const old = r;
        old.group.removeFromParent();
        old.led.dispose();
        for (const g of old.own) g.dispose();
        r = { ...this.makeRobot(info), motion: old.motion, info: old.info };
        this.robots.set(info.id, r);
      }
      if (!r) {
        r = this.makeRobot(info);
        this.robots.set(info.id, r);
      }
      const was = r.info.mode;
      const moved =
        info.mode === "cleaning" &&
        was === "cleaning" &&
        ((r.info.roomId ?? null) !== (info.roomId ?? null) || JSON.stringify(r.info.obstacles ?? []) !== JSON.stringify(info.obstacles ?? []));
      r.info = info;
      if (info.mode === "cleaning" && (was !== "cleaning" || moved || !r.motion.path.length)) {
        // start the lanes at the point nearest to where the robot is
        const path = info.room ? cleaningPath(info.room, undefined, undefined, info.obstacles) : circlePath(info.rest);
        const path2 = path.length ? path : circlePath(info.rest);
        let best = 0;
        path2.forEach((p, i) => {
          if (Math.hypot(p[0] - r!.motion.pos[0], p[1] - r!.motion.pos[1]) < Math.hypot(path2[best][0] - r!.motion.pos[0], path2[best][1] - r!.motion.pos[1])) best = i;
        });
        r.motion.path = path2;
        r.motion.next = best;
        // a robot reported in another room appears there instead of driving through the walls
        if (info.room && !pointInPolygon(r.motion.pos, info.room)) r.motion.pos = [path2[best][0], path2[best][1]];
      }
      r.led.color.setHex(ROBOT_LED[info.mode]);
    }
    for (const [id, r] of this.robots) {
      if (seen.has(id)) continue;
      r.group.removeFromParent();
      r.led.dispose();
      for (const g of r.own) g.dispose();
      this.robots.delete(id);
    }
    this.robotLast = 0;
    this.invalidate();
  }

  /** What a robot's meshes are built from: the built-in robot, or a pack's robot at the dock's size. */
  private robotModelKey(info: RobotInfo): string {
    const m = info.model;
    return m && packItem(m.type) ? `${m.type}|${m.w}|${m.d}|${m.h}` : "";
  }

  private makeRobot(info: RobotInfo): { info: RobotInfo; motion: RobotMotion; group: Group; led: MeshBasicMaterial; own: BufferGeometry[]; modelKey: string } {
    const motion: RobotMotion = { pos: [...info.rest] as [number, number], heading: info.restHeading, path: [], next: 0 };
    const ledMat = new MeshBasicMaterial({ color: ROBOT_LED[info.mode] });
    const modelKey = this.robotModelKey(info);
    const item = info.model ? packItem(info.model.type) : undefined;
    if (info.model && item && modelKey) {
      // a pack's dock: its own robot (left out of the dock's model) drives around, with a status light on top (#645)
      const { w, d, h } = info.model;
      const buf = new GeoBuffer();
      const { radius, top } = pushPackRobot(buf, item, w, d, h);
      const led = new GeoBuffer();
      const lw = Math.min(0.05, radius * 0.3);
      const z0 = Math.min(0.1, radius * 0.55);
      pushPrism(led, [[-lw, z0], [lw, z0], [lw, z0 + lw * 0.8], [-lw, z0 + lw * 0.8]], top, top + 0.005, 0xffffff, 0xffffff, { aoFrom: 0, bottom: false });
      this.robotMat ??= new MeshBasicMaterial({ vertexColors: true });
      const own = [buf.geometry(), led.geometry()];
      const group = new Group();
      group.add(new Mesh(own[0], this.robotMat), new Mesh(own[1], ledMat));
      return { info, motion, group, led: ledMat, own, modelKey };
    }
    if (!this.robotGeo) {
      const buf = new GeoBuffer();
      const disc = (r: number, y0: number, y1: number, side: number, top: number) => {
        const poly: [number, number][] = [];
        for (let i = 0; i < 20; i++) poly.push([Math.cos((i / 20) * Math.PI * 2) * r, Math.sin((i / 20) * Math.PI * 2) * r]);
        pushPrism(buf, poly, y0, y1, side, top, { aoFrom: 0, bottom: false });
      };
      disc(0.17, 0.012, 0.08, 0x243049, 0x34425f);
      disc(0.055, 0.08, 0.1, 0x3a4a6a, 0x4d5f86);
      this.robotGeo = buf.geometry();
      this.robotMat ??= new MeshBasicMaterial({ vertexColors: true });
      const led = new GeoBuffer();
      pushPrism(led, [[-0.05, 0.1], [0.05, 0.1], [0.05, 0.14], [-0.05, 0.14]], 0.08, 0.085, 0xffffff, 0xffffff, { aoFrom: 0, bottom: false });
      this.robotLedGeo = led.geometry();
    }
    const group = new Group();
    group.add(new Mesh(this.robotGeo, this.robotMat!), new Mesh(this.robotLedGeo!, ledMat));
    return { info, motion, group, led: ledMat, own: [], modelKey };
  }

  /** Ceiling fans: a group with the blades for each, at its place and with its speed. */
  private syncFans(devices: DeviceMarker[]): void {
    const seen = new Set<string>();
    for (const d of devices) {
      if (d.lamp !== "fan") continue;
      const key = d.furnitureId ?? d.id;
      seen.add(key);
      const [w, , h] = d.size ?? LAMP_SIZE.fan;
      const H = d.top ?? this.floorMap.get(d.floorId)?.floor.height ?? 2.5;
      const r = w / 2;
      let fan = this.fans.get(key);
      if (fan && Math.abs(fan.r - r) > 1e-3) {
        fan.group.removeFromParent();
        fan.mesh.geometry.dispose();
        this.fans.delete(key);
        fan = undefined;
      }
      if (!fan) {
        const buf = new GeoBuffer();
        pushFanBlades(buf, 0, 0, 0, r, 0);
        this.fanMat ??= new MeshBasicMaterial({ vertexColors: true });
        const mesh = new Mesh(buf.geometry(), this.fanMat);
        const group = new Group();
        group.add(mesh);
        group.rotation.y = -((d.rotation ?? 0) * DEG);
        fan = { group, mesh, r, speed: 0, floorId: d.floorId, y: 0 };
        this.fans.set(key, fan);
      }
      fan.floorId = d.floorId;
      fan.speed = d.fanSpeed ?? 0;
      fan.y = fanBladeY(H, h);
      fan.group.position.set(d.x, fan.y, d.z);
    }
    for (const [key, f] of this.fans) {
      if (seen.has(key)) continue;
      f.group.removeFromParent();
      f.mesh.geometry.dispose();
      this.fans.delete(key);
    }
    this.fanLast = 0;
  }

  /** Turn the fans' blades; true while one of them runs. */
  private stepFans(now: number): boolean {
    if (!this.fans.size) return false;
    const dt = this.fanLast ? Math.min(0.2, (now - this.fanLast) / 1000) : 0;
    this.fanLast = now;
    let turning = false;
    for (const f of this.fans.values()) {
      const fv = this.floorMap.get(f.floorId);
      if (!fv) continue;
      if (f.group.parent !== fv.group) fv.group.add(f.group);
      // hanging above cut walls they are left out like the lamps
      f.group.visible = !(this.wallMode === "cut" && f.y > Math.min(fv.floor.cut_height, fv.floor.height));
      if (f.speed <= 0) continue;
      turning = true;
      // up to about one turn a second at full speed
      f.group.rotation.y -= f.speed * Math.PI * 2 * dt;
    }
    if (!turning) this.fanLast = 0;
    return turning;
  }

  /** Move the robots; true while one of them drives. */
  private stepRobots(now: number): boolean {
    if (!this.robots.size) return false;
    const dt = this.robotLast ? Math.min(0.2, (now - this.robotLast) / 1000) : 0;
    this.robotLast = now;
    let active = false;
    for (const r of this.robots.values()) {
      const fv = this.floorMap.get(r.info.floorId);
      if (!fv) continue;
      if (r.group.parent !== fv.group) fv.group.add(r.group);
      if (dt > 0) active = stepRobot(r.motion, r.info, dt) || active;
      else active ||= r.info.mode === "cleaning" || r.info.mode === "returning";
      r.group.position.set(r.motion.pos[0], 0, r.motion.pos[1]);
      r.group.rotation.y = r.motion.heading;
    }
    if (!active) this.robotLast = 0;
    return active;
  }

  /** Motion trail: a disc where motion was reported and ribbons between the spots in time order, fading with age. */
  /**
   * The motion trail (spots with their age) and, while travelling in time, the robots' ways through the rooms
   * they cleaned (green lines through the rooms' centres).
   */
  setTrail(spots: TrailSpot[], paths: { floorId: string; points: [number, number][] }[] = []): void {
    const col = (age: number) => new Color(0.25 - 0.2 * age, 0.95 - 0.83 * age, 1 - 0.7 * age);
    const dark = new Color(0, 0, 0);
    const green = new Color(0.3, 1, 0.6);
    const y = 0.02;
    for (const fv of this.floors) {
      const buf = new GeoBuffer();
      for (const path of paths) {
        if (path.floorId !== fv.floor.id) continue;
        path.points.forEach(([x, z], i) => {
          const prev = path.points[i - 1];
          if (prev) {
            const len = Math.hypot(x - prev[0], z - prev[1]) || 1;
            const nx = (-(z - prev[1]) / len) * 0.1;
            const nz = ((x - prev[0]) / len) * 0.1;
            buf.tri([prev[0] + nx, y, prev[1] + nz], [x + nx, y, z + nz], [x - nx, y, z - nz], green, green, green);
            buf.tri([prev[0] + nx, y, prev[1] + nz], [x - nx, y, z - nz], [prev[0] - nx, y, prev[1] - nz], green, green, green);
          }
          for (let k = 0; k < 10; k++) {
            const a0 = (k / 10) * Math.PI * 2;
            const a1 = ((k + 1) / 10) * Math.PI * 2;
            buf.tri([x, y, z], [x + Math.cos(a1) * 0.35, y, z + Math.sin(a1) * 0.35], [x + Math.cos(a0) * 0.35, y, z + Math.sin(a0) * 0.35], green, dark, dark);
          }
        });
      }
      let prev: TrailSpot | null = null;
      for (const p of spots) {
        if (p.floorId !== fv.floor.id) continue;
        const c = col(p.age);
        if (prev) {
          const len = Math.hypot(p.x - prev.x, p.z - prev.z) || 1;
          const nx = (-(p.z - prev.z) / len) * 0.06;
          const nz = ((p.x - prev.x) / len) * 0.06;
          const c0 = col(prev.age);
          buf.tri([prev.x + nx, y, prev.z + nz], [p.x + nx, y, p.z + nz], [p.x - nx, y, p.z - nz], c0, c, c);
          buf.tri([prev.x + nx, y, prev.z + nz], [p.x - nx, y, p.z - nz], [prev.x - nx, y, prev.z - nz], c0, c, c0);
        }
        for (let i = 0; i < 12; i++) {
          const a0 = (i / 12) * Math.PI * 2;
          const a1 = ((i + 1) / 12) * Math.PI * 2;
          buf.tri([p.x, y, p.z], [p.x + Math.cos(a1) * 0.22, y, p.z + Math.sin(a1) * 0.22], [p.x + Math.cos(a0) * 0.22, y, p.z + Math.sin(a0) * 0.22], c, dark, dark);
        }
        prev = p;
      }
      fv.trailMesh.geometry.dispose();
      fv.trailMesh.geometry = buf.geometry();
      fv.trailMesh.visible = buf.count > 0;
    }
    this.invalidate();
  }

  /** The current view (a copy), to come back to it later with flyTo. */
  getView(): OrbitView {
    return { ...this.controls.view, target: this.controls.view.target.clone() };
  }

  flyTo(view: OrbitView, duration = 900): void {
    this.controls.flyTo(view, duration);
  }

  /**
   * Look through a placed camera: the view moves to the camera's spot and along its direction (a wall
   * camera looks a little down, a dome straight down). False when the camera is not drawn in 3D.
   */
  lookThrough(entityId: string): boolean {
    const d = this.devices.find((m) => m.id === entityId && m.model);
    const fv = d && this.floorMap.get(d.floorId);
    if (!d || !fv) return false;
    const a = (d.rotation ?? 0) * DEG;
    const ceiling = d.model === "camera_ceiling";
    // tilt below the horizon; the orbit's polar angle then is 90 degrees minus the tilt (kept inside the orbit's limits)
    const tilt = Math.min(1.45, Math.max(0.22, (d.tilt ?? (ceiling ? 65 : 20)) * DEG));
    const y = fv.floor.elevation + fv.ty + (ceiling ? fv.floor.height - 0.1 : d.y);
    const dir = new Vector3(-Math.sin(a) * Math.cos(tilt), -Math.sin(tilt), Math.cos(a) * Math.cos(tilt));
    this.controls.flyTo({ target: new Vector3(d.x, y, d.z).addScaledVector(dir, 3.15), radius: 3, phi: Math.PI / 2 - tilt, theta: Math.atan2(Math.sin(a), -Math.cos(a)) }, 900);
    return true;
  }

  /** Devices that went on and back off too quickly to see (a fast replay): they flash once. */
  flashDevices(ids: readonly string[]): void {
    const until = performance.now() + FLASH_MS;
    for (const id of ids) this.flashes.set(id, until);
    if (ids.length) this.invalidate();
  }

  /** Fly to a point of a floor (search) and let the device there flash. */
  focus(floorId: string, x: number, z: number, y: number, entityId: string | null, view?: { radius?: number; phi?: number; theta?: number }): void {
    const fv = this.floorMap.get(floorId);
    if (!fv) return;
    this.controls.flyTo({ target: new Vector3(x, fv.floor.elevation + fv.ty + y, z), radius: view?.radius ?? 5.5, phi: view?.phi ?? 0.78, ...(view?.theta !== undefined ? { theta: view.theta } : {}) }, 900);
    if (entityId) {
      this.flashes.set(entityId, performance.now() + 2400);
      const pin = this.host.querySelector<HTMLElement>(`.fp3d-dev[data-entity="${CSS.escape(entityId)}"]`);
      pin?.classList.add("fp3d-dev-found");
      setTimeout(() => pin?.classList.remove("fp3d-dev-found"), 2600);
    }
    this.invalidate();
  }

  private render(now: number): void {
    this.frame = 0;
    if (this.disposed) return;
    const dt = this.lastFrame ? Math.min(100, now - this.lastFrame) : 16;
    let orbiting = false;
    if (this.orbitSpeed && !this.controls.active) {
      if (this.orbitLast) this.controls.view.theta += (this.orbitSpeed * Math.min(100, now - this.orbitLast)) / 1000;
      this.orbitLast = now;
      orbiting = true;
    } else this.orbitLast = 0;
    const cameraMoving = this.controls.update(now);
    const floorsMoving = this.stepFloors(dt);
    const openingsMoving = this.stepOpenings(dt) || this.stepFridges(dt);
    let flashing = false;
    if (this.flashes.size) {
      // only the floors with a flashing lamp are recoloured (an expired flash needs one last pass)
      const touched = new Set<string>();
      for (const [id, until] of this.flashes) {
        const floorId = this.deviceFloor.get(id);
        if (floorId) touched.add(floorId);
        if (until <= now) this.flashes.delete(id);
      }
      flashing = this.flashes.size > 0;
      for (const fv of this.floors) if (touched.has(fv.floor.id)) this.buildLamps(fv);
    }
    const roofMoving = this.placeRoof(dt);
    const robotsMoving = this.stepRobots(now);
    const fansTurning = this.stepFans(now);
    const weatherMoving = this.stepWeather(now);
    const moving = cameraMoving || floorsMoving || openingsMoving || flashing || roofMoving;
    const busy: string[] = [];
    // a finger or the mouse turning the view draws frames too, though no inertia runs yet
    if (cameraMoving || this.controls.busy) busy.push("camera");
    if (floorsMoving) busy.push("floors");
    if (openingsMoving) busy.push("openings");
    if (flashing) busy.push("flash");
    if (roofMoving) busy.push("roof");
    if (this.flowActive) busy.push("flow");
    if (this.soundActive) busy.push("sound");
    if (this.poolActive) busy.push("pool");
    if (this.solarActive) busy.push("solar");
    if (this.effectTick) busy.push("effect");
    if (robotsMoving) busy.push("robot");
    if (fansTurning) busy.push("fan");
    if (orbiting) busy.push("orbit");
    if (this.tintTick) busy.push("tint");
    this.effectTick = this.tintTick = false;
    this.lastFrame = moving ? now : 0;
    this.flowTime.value = this.flowSeconds();
    if (this.soundActive) this.animateSound(now);
    this.updateWalls();
    if (this.projections.active) this.updateProjections();
    // the house's shadow belongs to the whole house
    this.sunFx.showShadow(this.floorId === null && this.shadowSig !== "");
    this.renderer.render(this.scene, this.camera);
    this.disposeRetired();
    // labels are placed only when the view or something on it moved (style writes cost layout)
    if (this.viewChanged() || floorsMoving || this.labelsDirty) {
      this.labelsDirty = false;
      this.updateLabels();
    }
    // everything that keeps drawing (also the energy flow, effects, robots) shows in the frame rate
    this.reportStats(now, busy);
    if (moving) this.invalidate();
    // tablet level: something new began to move (music, a robot, the energy flow …) – it shows for a while
    const decorNow = this.flowActive || this.solarActive || this.soundActive || this.poolActive || robotsMoving || fansTurning || this.effectFloors.size > 0;
    if (decorNow && !this.decorWas) this.lastWake = now;
    this.decorWas = decorNow;
    // colour effects: a few steps per second are enough and keep the tablet idle in between
    const effectMs = this.effectFloors.size ? this.decor(this.lowQuality ? 2 * EFFECT_MS : EFFECT_MS) : null;
    if (effectMs !== null && !this.effectTimer && !document.hidden) {
      const ms = effectMs;
      this.effectTimer = setTimeout(() => {
        this.effectTimer = undefined;
        this.effectTime += ms / 1000;
        this.effectTick = true;
        for (const fv of this.floors) {
          if (fv.o < 0.02 || !this.effectFloors.has(fv.floor.id)) continue;
          this.buildLamps(fv);
          this.buildGlow(fv);
        }
        // tablet level: a decorative frame that comes anyway shows the step as well
        if (!this.decorTimer) this.invalidate();
      }, ms);
    }
    if (!moving && orbiting && !this.orbitTimer) {
      // the screensaver turn: about 30 frames per second, 15 on the tablet level
      this.orbitTimer = setTimeout(() => {
        this.orbitTimer = undefined;
        this.invalidate();
      }, this.lowQuality ? 66 : 33);
    }
    if (!moving && weatherMoving && !this.weatherTimer) {
      // falling rain or snow: about 30 frames per second
      this.weatherTimer = setTimeout(() => {
        this.weatherTimer = undefined;
        this.invalidate();
      }, 33);
    }
    const flowing = this.flowActive || this.solarActive || this.soundActive || this.poolActive;
    if (this.lowQuality) {
      // tablet level: every decorative animation shares one frame about 5 times a second (12 while fan blades turn,
      // fewer would make them seem to stand or turn back) and rests 30 s after the last touch
      const ms = robotsMoving || flowing || fansTurning ? this.decor(fansTurning ? 83 : 0, fansTurning ? 83 : undefined) : null;
      if (!moving && ms !== null && !this.decorTimer) {
        this.decorTimer = setTimeout(() => {
          this.decorTimer = undefined;
          this.invalidate();
        }, ms);
      }
      return;
    }
    if (!moving && robotsMoving && !this.robotTimer) {
      // a driving robot: about 30 frames per second
      this.robotTimer = setTimeout(() => {
        this.robotTimer = undefined;
        this.invalidate();
      }, 33);
    }
    if (!moving && fansTurning && !this.fanTimer) {
      // turning blades: about 20 frames per second are enough (they blur anyway)
      this.fanTimer = setTimeout(() => {
        this.fanTimer = undefined;
        this.invalidate();
      }, 50);
    }
    if (!moving && flowing && !this.flowTimer) {
      // only the energy flow (or the living modules) moves: about 30 frames per second are enough
      this.flowTimer = setTimeout(() => {
        this.flowTimer = undefined;
        this.invalidate();
      }, FLOW_FRAME_MS);
    }
  }

  /**
   * Walls facing the camera: in the tall view they turn into glass (rooms stay whole, doors and windows
   * stay visible); in the cut view every wall is cut at the cut height.
   */
  private updateWalls(): void {
    const cam = this.camera.position;
    const t = this.controls.view.target;
    const dx = cam.x - t.x;
    const dz = cam.z - t.z;
    const l = Math.hypot(dx, dz) || 1;
    for (const fv of this.floors) {
      // in a room, its floor's interior walls turn into glass as well
      const inRoom = this.roomId !== null && fv.floor.rooms.some((r) => r.id === this.roomId);
      const cut = this.wallMode === "cut";
      let glass = 0;
      fv.geo.buckets.forEach((normal, b) => {
        const facing = normal ? (normal[0] * dx) / l + (normal[1] * dz) / l >= 0.25 : inRoom;
        if (!cut && facing) glass |= 1 << b;
      });
      fv.mask.standing.value = cut ? 0 : 0xffff;
      fv.mask.glass.value = glass;
    }
  }

  /** True when the camera view differs from the last frame's. */
  private viewChanged(): boolean {
    const v = this.controls.view;
    const k = this.viewKey;
    if (k[0] === v.target.x && k[1] === v.target.y && k[2] === v.target.z && k[3] === v.radius && k[4] === v.theta && k[5] === v.phi) return false;
    k[0] = v.target.x;
    k[1] = v.target.y;
    k[2] = v.target.z;
    k[3] = v.radius;
    k[4] = v.theta;
    k[5] = v.phi;
    return true;
  }

  /** Move a label (null hides it); transform and hidden are only written when they changed. */
  private place(el: HTMLElement, transform: string | null): void {
    const hidden = transform === null;
    if (el.hidden !== hidden) el.hidden = hidden;
    if (transform !== null && this.placed.get(el) !== transform) {
      this.placed.set(el, transform);
      el.style.transform = transform;
    }
  }

  private updateLabels(): void {
    const { w, h } = this.size;
    const v = new Vector3();
    const house = this.houseView;
    const placed: { fv: FloorView; left: number; y: number; h: number }[] = [];
    for (const fv of this.floors) {
      const box = fv.bbox;
      if (!(house && fv.o > 0.5 && box)) {
        this.place(fv.label, null);
        continue;
      }
      // left of the leftmost corner of the floor's bounding box, at half the cut height;
      // right of the rightmost one when the floor pictures take that space
      let best: { x: number; y: number } | null = null;
      let right: { x: number; y: number } | null = null;
      const y = fv.floor.elevation + fv.y + fv.floor.cut_height * 0.5;
      for (const x of [box.x0, box.x1]) {
        for (const z of [box.z0, box.z1]) {
          v.set(x, y, z).project(this.camera);
          const sx = ((v.x + 1) / 2) * w;
          const sy = ((1 - v.y) / 2) * h;
          if (!best || sx < best.x) best = { x: sx, y: sy };
          if (!right || sx > right.x) right = { x: sx, y: sy };
        }
      }
      if (fv.label.hidden) fv.label.hidden = false;
      fv.labelSize ??= { w: fv.label.offsetWidth, h: fv.label.offsetHeight };
      const lw = fv.labelSize.w;
      const minLeft = 8 + this.labelInset;
      let left = best!.x - lw - 14;
      let py = best!.y;
      if (left < minLeft && this.labelInset) {
        left = right!.x + 14;
        py = right!.y;
      }
      placed.push({ fv, left: Math.max(minLeft, Math.min(w - lw - 8, left)), y: py, h: fv.labelSize.h });
    }
    // top floor first; each lower label keeps below the one above so labels never cover each other
    placed.sort((a, b) => b.fv.rank - a.fv.rank);
    for (let i = 1; i < placed.length; i++) {
      const above = placed[i - 1];
      placed[i].y = Math.max(placed[i].y, above.y + (above.h + placed[i].h) / 2 + 8);
    }
    for (const p of placed) this.place(p.fv.label, `translate(${p.left}px, ${p.y}px) translate(0, -50%)`);
    if (this.anchorCb) {
      // every anchor rides with its floor (pulled apart or stacked); the plants' holograms show in the house
      // view only, a device's also on its own floor
      this.anchors.forEach((a, i) => {
        const fv = this.floorMap.get(a.floorId);
        // an opened room shows the device cards of that room only; "floor" cards stay out of the house view (#226, #235)
        if ((this.roomId !== null && a.room !== this.roomId) || (a.views === "floor" && this.floorId === null)) {
          this.anchorCb!(i, 0, 0, false, 1, true);
          return;
        }
        // a single floor is the house view as well (#255)
        if (this.floorId !== null && this.floors.length > 1 && (a.views === "house" || a.floorId !== this.floorId)) {
          this.anchorCb!(i, 0, 0, false, 1, true);
          return;
        }
        // the roof lifts and fades when the camera comes close: an anchor on it rides up with it
        // (in a floor view the roof is gone: its cards stay where the roof would be, #193)
        const p = new Vector3(a.p[0], a.p[1] + (fv?.y ?? 0) + (a.roof && (this.floorId === null || this.floors.length <= 1) ? this.roofLift() : 0), a.p[2]);
        const toCamera = this.camera.position.clone().sub(p);
        const dist = toCamera.length();
        // a small card that only shows close up (a waste bin's): hidden while the camera is farther away
        if (a.near !== undefined && dist > a.near) {
          this.anchorCb!(i, 0, 0, false, 1, true);
          return;
        }
        const facing = toCamera.normalize().dot(new Vector3(a.n[0], a.n[1], a.n[2])) >= 0;
        v.copy(p).project(this.camera);
        const off = v.z > 1 || Math.abs(v.x) > 1.3 || Math.abs(v.y) > 1.3;
        // a fixed size in the world: it grows when the camera comes close and shrinks when it moves away
        const scale = Math.min(1.6, Math.max(0.25, 15 / Math.max(1, dist))) * a.size;
        this.anchorCb!(i, ((v.x + 1) / 2) * w, ((1 - v.y) / 2) * h, !off, scale, facing);
      });
    }
    this.updateDevicePins(w, h);
    for (const fv of this.floors) {
      // in the house view, room labels would pile up between the floors; in a room its panel names it;
      // floors stacked below an opened floor carry no labels
      const hide = fv.to < 0.99 || fv.o < 0.9 || house || this.roomId !== null || this.otherFloor(fv);
      const y = fv.floor.elevation + fv.y + 0.05;
      for (const rp of fv.roomPins) {
        if (hide) {
          this.place(rp.pin, null);
          continue;
        }
        v.set(rp.cx, y, rp.cz).project(this.camera);
        const off = v.z > 1 || Math.abs(v.x) > 1.1 || Math.abs(v.y) > 1.1;
        this.place(rp.pin, off ? null : `translate(${((v.x + 1) / 2) * w}px, ${((1 - v.y) / 2) * h}px) translate(-50%, -50%)`);
      }
    }
  }

  /** A floor other than the opened one (shown below it when floors are stacked). */
  private otherFloor(fv: FloorView): boolean {
    return this.floorId !== null && fv.floor.id !== this.floorId;
  }

  private updateDevicePins(w: number, h: number): void {
    const v = new Vector3();
    const house = this.houseView;
    for (const p of this.persons) {
      const pin = this.personPins.get(p.id);
      const fv = this.floorMap.get(p.floorId);
      const fig = this.figures.get(p.id);
      if (!pin) continue;
      if (!fv || house || fv.to < 0.99 || fv.o < 0.9 || this.otherFloor(fv)) {
        this.place(pin, null);
        if (fig?.visible) {
          fig.visible = false;
          this.invalidate();
        }
        continue;
      }
      // glide to the room (about a second), jump when the floor changes
      let at = this.personAt.get(p.id);
      if (!at || at.floorId !== p.floorId) at = { floorId: p.floorId, x: p.x, z: p.z };
      else {
        const dx = p.x - at.x;
        const dz = p.z - at.z;
        if (Math.hypot(dx, dz) > 0.02) {
          at = { floorId: p.floorId, x: at.x + dx * 0.12, z: at.z + dz * 0.12 };
          this.labelsDirty = true;
          this.invalidate();
        } else at = { floorId: p.floorId, x: p.x, z: p.z };
      }
      this.personAt.set(p.id, at);
      const base = fv.floor.elevation + fv.y;
      if (fig) {
        // the figure faces the camera (turns around its own vertical axis only); labels are placed after a frame,
        // so a figure that appears or moves asks for one more
        const turn = Math.atan2(this.camera.position.x - at.x, this.camera.position.z - at.z);
        if (!fig.visible || fig.position.x !== at.x || fig.position.y !== base || fig.position.z !== at.z || fig.rotation.y !== turn) {
          fig.visible = true;
          fig.position.set(at.x, base, at.z);
          fig.rotation.y = turn;
          this.invalidate();
        }
      }
      v.set(at.x, base + (fig ? 1.85 : 0.9), at.z).project(this.camera);
      const off = v.z > 1 || Math.abs(v.x) > 1.05 || Math.abs(v.y) > 1.05;
      this.place(pin, off ? null : `translate(${((v.x + 1) / 2) * w}px, ${((1 - v.y) / 2) * h}px) translate(-50%, -50%)`);
    }
    for (const d of this.devices) {
      const pin = this.devicePins.get(d.id)?.el;
      if (!pin) continue;
      const fv = this.floorMap.get(d.floorId);
      // device markers belong to the floor and room views; the house view only shows floor labels –
      // except what a camera detects right now and (Haushalt Pro) a bin that goes out or post in the box: those
      // are worth a pin on the whole house too
      const alert = d.id.startsWith("detect:") || (d.id.startsWith("hh:") && d.active);
      if (!fv || (house && !alert) || fv.to < 0.99 || fv.o < 0.9 || d.pin === false || this.otherFloor(fv)) {
        this.place(pin, null);
        continue;
      }
      v.set(d.x, fv.floor.elevation + fv.y + d.y, d.z).project(this.camera);
      const off = v.z > 1 || Math.abs(v.x) > 1.05 || Math.abs(v.y) > 1.05;
      if (off) {
        this.place(pin, null);
        continue;
      }
      const mode = this.roomId === null ? (d.full ? "full" : "") : d.roomId === this.roomId ? "full" : "dim";
      if (this.pinMode.get(pin) !== mode) {
        this.pinMode.set(pin, mode);
        pin.classList.toggle("fp3d-dev-full", mode === "full");
        pin.classList.toggle("fp3d-dev-dim", mode === "dim");
      }
      this.place(pin, `translate(${((v.x + 1) / 2) * w}px, ${((1 - v.y) / 2) * h}px) translate(-50%, -50%)`);
    }
  }

  private reportStats(now: number, busy: string[]): void {
    if (!this.statsOn || !this.options.onStats) return;
    const moving = busy.length > 0;
    if (!this.fpsStart) this.fpsStart = now;
    if (this.lastStatsFrame && moving) this.worstFrame = Math.max(this.worstFrame, now - this.lastStatsFrame);
    this.lastStatsFrame = moving ? now : 0;
    this.fpsFrames++;
    const elapsed = now - this.fpsStart;
    if (elapsed > 500 || !moving) {
      const info = this.renderer.info.render;
      this.options.onStats({
        fps: moving ? Math.round((this.fpsFrames * 1000) / elapsed) : 0,
        busy,
        worstMs: Math.round(this.worstFrame),
        calls: info.calls,
        triangles: info.triangles,
        low: this.lowQuality,
        pixelRatio: this.renderer.getPixelRatio(),
        gpu: (this.gpuName ??= gpuNameOf(this.renderer)),
      });
      this.fpsFrames = 0;
      this.fpsStart = now;
      this.worstFrame = 0;
    }
  }
}

/** The GPU's name as WebGL tells it (unmasked where the browser allows), or null. */
function gpuNameOf(renderer: WebGLRenderer): string | null {
  try {
    const gl = renderer.getContext();
    const ext = gl.getExtension("WEBGL_debug_renderer_info");
    const name = ext ? gl.getParameter(ext.UNMASKED_RENDERER_WEBGL) : gl.getParameter(gl.RENDERER);
    return typeof name === "string" ? name : null;
  } catch {
    return null;
  }
}

/** Pattern atlas: 3 × 2 tiles of 1 m each (wood, oak, tiles / carpet, stone, concrete), faint cyan lines. */
function makePatternTexture(): CanvasTexture {
  const T = 256;
  const canvas = document.createElement("canvas");
  canvas.width = T * 3;
  canvas.height = T * 2;
  const ctx = canvas.getContext("2d")!;
  const line = (x0: number, y0: number, x1: number, y1: number, alpha: number) => {
    ctx.strokeStyle = `rgba(55,224,255,${alpha})`;
    ctx.beginPath();
    ctx.moveTo(x0, y0);
    ctx.lineTo(x1, y1);
    ctx.stroke();
  };
  ctx.lineWidth = 1.5;
  const tile = (col: number, row: number, draw: (ox: number, oy: number) => void) => {
    ctx.save();
    ctx.beginPath();
    ctx.rect(col * T, row * T, T, T);
    ctx.clip();
    draw(col * T, row * T);
    ctx.restore();
  };
  // wood: planks 0.2 m wide along x with staggered joints
  tile(0, 0, (ox, oy) => {
    for (let i = 0; i < 5; i++) {
      const y = oy + (i * T) / 5 + 0.75;
      line(ox, y, ox + T, y, 0.09);
      const j = ox + ((i * 0.37) % 1) * T;
      line(j, y, j, y + T / 5, 0.07);
    }
  });
  // oak: narrower planks along z
  tile(1, 0, (ox, oy) => {
    for (let i = 0; i < 7; i++) {
      const x = ox + (i * T) / 7 + 0.75;
      line(x, oy, x, oy + T, 0.08);
      const j = oy + ((i * 0.53) % 1) * T;
      line(x, j, x + T / 7, j, 0.06);
    }
  });
  // tiles: 0.25 m grid
  tile(2, 0, (ox, oy) => {
    for (let i = 0; i < 4; i++) {
      const p = (i * T) / 4 + 0.75;
      line(ox + p, oy, ox + p, oy + T, 0.1);
      line(ox, oy + p, ox + T, oy + p, 0.1);
    }
  });
  // carpet: plain (also used for slab sides)
  // stone: 0.5 m slabs in a running bond
  tile(1, 1, (ox, oy) => {
    for (let r = 0; r < 2; r++) {
      const y = oy + (r * T) / 2 + 0.75;
      line(ox, y, ox + T, y, 0.09);
      const shift = r ? T / 4 : 0;
      for (const x of [shift, shift + T / 2]) line(ox + x + 0.75, y, ox + x + 0.75, y + T / 2, 0.09);
    }
  });
  // concrete: 1 m grid and a faint speckle
  tile(2, 1, (ox, oy) => {
    line(ox + 0.75, oy, ox + 0.75, oy + T, 0.08);
    line(ox, oy + 0.75, ox + T, oy + 0.75, 0.08);
    ctx.fillStyle = "rgba(55,224,255,0.05)";
    for (let i = 0; i < 90; i++) ctx.fillRect(ox + ((i * 97) % T), oy + ((i * 61 + (i * i) % 37) % T), 2, 2);
  });
  const tex = new CanvasTexture(canvas);
  tex.flipY = false;
  tex.wrapS = ClampToEdgeWrapping;
  tex.wrapT = ClampToEdgeWrapping;
  tex.anisotropy = 4;
  tex.colorSpace = SRGBColorSpace;
  return tex;
}

/** Additive floor pattern: picks the atlas tile per vertex and repeats it every metre. */
function patternMaterial(texture: CanvasTexture): MeshBasicMaterial {
  const m = new MeshBasicMaterial({
    map: texture,
    transparent: true,
    blending: AdditiveBlending,
    depthWrite: false,
    polygonOffset: true,
    polygonOffsetFactor: -2,
  });
  m.onBeforeCompile = (shader) => {
    shader.vertexShader = shader.vertexShader
      .replace("#include <common>", "#include <common>\nattribute vec2 tile;\nvarying vec2 vFp3dTile;")
      .replace("#include <begin_vertex>", "#include <begin_vertex>\nvFp3dTile = tile;");
    shader.fragmentShader = shader.fragmentShader.replace("#include <common>", "#include <common>\nvarying vec2 vFp3dTile;").replace(
      "#include <map_fragment>",
      `#ifdef USE_MAP
        vec2 fp3dCell = fract(vMapUv);
        vec2 fp3dUv = (vFp3dTile + 0.004 + fp3dCell * 0.992) / vec2(3.0, 2.0);
        // gradients of the unwrapped coordinates avoid mip seams at the tile borders
        vec4 sampledDiffuseColor = textureGrad(map, fp3dUv, dFdx(vMapUv) / vec2(3.0, 2.0), dFdy(vMapUv) / vec2(3.0, 2.0));
        diffuseColor *= sampledDiffuseColor;
      #endif`,
    );
  };
  m.customProgramCacheKey = () => "fp3d-pattern";
  return m;
}

/** Blind slats: dark stripes with a faint cyan edge, repeated along v. */
function makeBlindTexture(): CanvasTexture {
  const canvas = document.createElement("canvas");
  canvas.width = 8;
  canvas.height = 32;
  const ctx = canvas.getContext("2d")!;
  ctx.fillStyle = "#1a2742";
  ctx.fillRect(0, 0, 8, 32);
  ctx.fillStyle = "#223556";
  ctx.fillRect(0, 4, 8, 14);
  ctx.fillStyle = "rgba(55,224,255,0.45)";
  ctx.fillRect(0, 29, 8, 2);
  const tex = new CanvasTexture(canvas);
  tex.wrapS = RepeatWrapping;
  tex.wrapT = RepeatWrapping;
  tex.colorSpace = SRGBColorSpace;
  return tex;
}

function flowKey(f: FlowPiece): string {
  const r = (n: number) => Math.round(n * 100);
  return `${f.floorId}:${f.a.map(r).join(",")}>${f.b.map(r).join(",")}${f.width ? `~${f.width}` : ""}`;
}

/** Stripe speed (m/s): still at 0 W, faster with more power (square root, so 2 kW is not 20 × 100 W). */
function flowSpeed(power: number): number {
  return power > 0.5 ? Math.min(2.4, 0.3 + Math.sqrt(power) / 28) : 0;
}

/**
 * A module's solid pipe (uv.x = metres along it, uv.y = across: 0..1 the core, 2..3 its dark edge): shaded like a
 * tube, a soft brightening running along the core while it flows (the direction from a to b).
 */
function pipeLineMaterial(time: { value: number }): MeshBasicMaterial {
  const m = new MeshBasicMaterial({ vertexColors: true, transparent: true, depthWrite: false, side: DoubleSide, polygonOffset: true, polygonOffsetFactor: -2, polygonOffsetUnits: -2 });
  m.onBeforeCompile = (shader) => {
    shader.uniforms.uFlowTime = time;
    shader.vertexShader = shader.vertexShader
      .replace("#include <common>", "#include <common>\nattribute float flowSpeed;\nattribute float flowOffset;\nvarying float vFlowSpeed;\nvarying float vFlowOffset;\nvarying vec2 vFlowUv;")
      .replace("#include <begin_vertex>", "#include <begin_vertex>\nvFlowSpeed = flowSpeed;\nvFlowOffset = flowOffset;\nvFlowUv = uv;");
    shader.fragmentShader = shader.fragmentShader
      .replace("#include <common>", "#include <common>\nuniform float uFlowTime;\nvarying float vFlowSpeed;\nvarying float vFlowOffset;\nvarying vec2 vFlowUv;")
      .replace(
        "#include <color_fragment>",
        `#include <color_fragment>
        float fp3dCore = step(vFlowUv.y, 1.5);
        float fp3dAcross = 1.0 - abs(fract(vFlowUv.y) * 2.0 - 1.0);
        float fp3dMoving = step(0.001, abs(vFlowSpeed));
        // one soft swell of light every 0.8 m, rising slowly and falling fast: the way the water goes
        float fp3dPhase = fract((vFlowUv.x - uFlowTime * abs(vFlowSpeed) - vFlowOffset) * 1.25);
        float fp3dSwell = pow(fp3dPhase, 3.0) * fp3dMoving * fp3dCore;
        diffuseColor.rgb *= mix(1.0, 0.72 + 0.4 * fp3dAcross, fp3dCore);
        diffuseColor.rgb = mix(diffuseColor.rgb, vec3(1.0, 0.97, 0.9), 0.38 * fp3dSwell * fp3dAcross);`,
      );
  };
  m.customProgramCacheKey = () => "fp3d-pipe-line";
  return m;
}

/** Glowing cable with stripes running along it (uv.x = metres along the cable, uv.y = across). */
function flowMaterial(time: { value: number }): MeshBasicMaterial {
  const m = new MeshBasicMaterial({ vertexColors: true, transparent: true, blending: AdditiveBlending, depthWrite: false, side: DoubleSide });
  m.onBeforeCompile = (shader) => {
    shader.uniforms.uFlowTime = time;
    shader.vertexShader = shader.vertexShader
      .replace("#include <common>", "#include <common>\nattribute float flowSpeed;\nattribute float flowOffset;\nvarying float vFlowSpeed;\nvarying float vFlowOffset;\nvarying vec2 vFlowUv;")
      .replace("#include <begin_vertex>", "#include <begin_vertex>\nvFlowSpeed = flowSpeed;\nvFlowOffset = flowOffset;\nvFlowUv = uv;");
    shader.fragmentShader = shader.fragmentShader
      .replace("#include <common>", "#include <common>\nuniform float uFlowTime;\nvarying float vFlowSpeed;\nvarying float vFlowOffset;\nvarying vec2 vFlowUv;")
      .replace(
        "#include <color_fragment>",
        `#include <color_fragment>
        float fp3dAcross = 1.0 - abs(vFlowUv.y * 2.0 - 1.0);
        float fp3dMoving = step(0.001, abs(vFlowSpeed));
        // light dots every third of a metre, each a comet: a bright head and a tail fading out behind it,
        // so the direction (from a to b) is plain even on a still picture
        float fp3dPhase = fract((vFlowUv.x - uFlowTime * abs(vFlowSpeed) - vFlowOffset) * 3.0);
        float fp3dDot = exp(-(1.0 - fp3dPhase) * 7.0) * fp3dMoving;
        float fp3dCore = fp3dAcross * fp3dAcross;
        diffuseColor.rgb *= (0.3 + 1.7 * fp3dDot) * (0.2 + 0.8 * fp3dCore);`,
      );
  };
  m.customProgramCacheKey = () => "fp3d-flow";
  return m;
}

/** Zone per room index: rooms joined by "no wall" (pairs of room ids) share the lowest index among them. */
function lightZonesOf(floor: Floor, open: [string, string][]): number[] {
  const zone = floor.rooms.map((_, i) => i);
  const find = (i: number): number => (zone[i] === i ? i : (zone[i] = find(zone[i])));
  for (const [a, b] of open) {
    const ia = floor.rooms.findIndex((r) => r.id === a);
    const ib = floor.rooms.findIndex((r) => r.id === b);
    if (ia < 0 || ib < 0) continue;
    const ra = find(ia);
    const rb = find(ib);
    if (ra !== rb) zone[Math.max(ra, rb)] = Math.min(ra, rb);
  }
  return zone.map((_, i) => find(i));
}

/** Soft round glow for the halos around lamps. */
function makeHaloTexture(): CanvasTexture {
  const size = 64;
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext("2d")!;
  const g = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
  g.addColorStop(0, "rgba(255,255,255,0.9)");
  g.addColorStop(0.2, "rgba(255,255,255,0.45)");
  g.addColorStop(0.55, "rgba(255,255,255,0.1)");
  g.addColorStop(1, "rgba(255,255,255,0)");
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, size, size);
  const tex = new CanvasTexture(canvas);
  tex.colorSpace = SRGBColorSpace;
  return tex;
}

/** Ground below the house: a wide 1 m grid that fades out towards the edges. */
function makeGroundTexture(): CanvasTexture {
  const size = 1024;
  const cells = GROUND_CELLS;
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext("2d")!;
  ctx.strokeStyle = "rgba(91,124,255,0.16)";
  ctx.lineWidth = 1;
  for (let i = 0; i <= cells; i++) {
    const p = Math.round((i / cells) * size) + 0.5;
    ctx.beginPath();
    ctx.moveTo(p, 0);
    ctx.lineTo(p, size);
    ctx.moveTo(0, p);
    ctx.lineTo(size, p);
    ctx.stroke();
  }
  // fade out radially so the grid has no hard border
  ctx.globalCompositeOperation = "destination-in";
  const g = ctx.createRadialGradient(size / 2, size / 2, size * 0.12, size / 2, size / 2, size / 2);
  g.addColorStop(0, "rgba(0,0,0,1)");
  g.addColorStop(1, "rgba(0,0,0,0)");
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, size, size);
  const tex = new CanvasTexture(canvas);
  tex.anisotropy = 4;
  tex.colorSpace = SRGBColorSpace;
  return tex;
}

export { furnitureFront, furniturePreview, type FrontPicture, type PreviewItem } from "./preview.ts";

export function createViewer(host: HTMLElement, options?: ViewerOptions): FloorplanViewer {
  return new FloorplanViewer(host, options);
}

/** Height of a ceiling fan's blades: in its motor housing, `h` below the ceiling `H` its light's bottom. */
function fanBladeY(H: number, h: number): number {
  return Math.max(0.5, H - Math.max(0.25, h)) + 0.11;
}

/** Four blades of a ceiling fan around (cx, cz), reaching out to `r`, turned by `ang` (radians). */
export function pushFanBlades(buf: GeoBuffer, cx: number, y: number, cz: number, r: number, ang: number): void {
  const r0 = 0.12;
  const reach = Math.max(r0 + 0.1, r);
  for (let i = 0; i < 4; i++) {
    const a = ang + (i * Math.PI) / 2;
    const c = Math.cos(a);
    const s = Math.sin(a);
    // a blade widening a little towards its tip
    const pts: [number, number][] = [[r0, -0.045], [reach, -0.065], [reach, 0.065], [r0, 0.045]];
    const poly = pts.map(([u, v]) => [cx + u * c - v * s, cz + u * s + v * c] as [number, number]);
    pushPrism(buf, poly, y - 0.006, y + 0.006, FAN_BLADE, FAN_BLADE_TOP, { aoFrom: 0, bottom: true });
  }
}

/** Model of a lamp into a buffer (3D view and furniture previews); `H` is the ceiling height. */
export function pushLampModel(
  buf: GeoBuffer,
  d: Pick<DeviceMarker, "x" | "z" | "size" | "base" | "rotation" | "variant" | "roll" | "upright" | "rise"> & { lamp: LampModel },
  H: number,
  shadeCol: number,
  blades = true,
): void {
  const [w, dd, h] = d.size ?? LAMP_SIZE[d.lamp];
  const base = d.base ?? 0;
  const ang = (d.rotation ?? 0) * DEG;
  const ca = Math.cos(ang);
  const sa = Math.sin(ang);
  const L = (x: number, z: number): [number, number] => [d.x + x * ca - z * sa, d.z + x * sa + z * ca];
  const cyl = (r: number, y0: number, y1: number, side: number, top: number, n = 14) => {
    const poly: [number, number][] = [];
    for (let i = 0; i < n; i++) {
      const a = (i / n) * Math.PI * 2;
      poly.push([d.x + Math.cos(a) * r, d.z + Math.sin(a) * r]);
    }
    pushPrism(buf, poly, y0, y1, side, top, { aoFrom: 0, bottom: true });
  };
  const box = (x0: number, x1: number, z0: number, z1: number, y0: number, y1: number, side: number, top = side) =>
    pushPrism(buf, [L(x0, z0), L(x1, z0), L(x1, z1), L(x0, z1)], y0, y1, side, top, { aoFrom: 0, bottom: true });
  const r = Math.max(0.05, Math.min(w, dd) / 2);
  switch (d.lamp) {
    case "ceiling":
      cyl(r * 0.25, H - 0.04, H, LAMP_BODY, LAMP_BODY, 8);
      cyl(r, H - Math.max(0.04, h) - 0.035, H - 0.04, shadeCol, shadeCol);
      break;
    case "pendant": {
      const bottom = Math.max(0.4, H - h);
      cyl(0.06, H - 0.02, H, LAMP_BODY, LAMP_BODY, 8);
      const shapeTop = d.variant === "globe" ? bottom + 2 * r : d.variant === "drum" ? bottom + 0.24 : bottom + 0.2;
      cyl(0.008, shapeTop, H - 0.02, LAMP_BODY, LAMP_BODY, 5);
      if (d.variant === "globe") {
        // stacked rings approximate a ball
        const n = 7;
        for (let i = 0; i < n; i++) {
          const a0 = Math.PI * (i / n);
          const a1 = Math.PI * ((i + 1) / n);
          cyl(r * Math.max(0.2, Math.sin((a0 + a1) / 2)), bottom + r - r * Math.cos(a0), bottom + r - r * Math.cos(a1), shadeCol, shadeCol, 14);
        }
      } else if (d.variant === "cone") {
        const n = 4;
        for (let i = 0; i < n; i++) cyl(r * (0.25 + (0.75 * (n - i)) / n), bottom + 0.06 * i, bottom + 0.06 * (i + 1), shadeCol, shadeCol, 16);
      } else if (d.variant === "drum") {
        cyl(r, bottom, bottom + 0.24, shadeCol, shadeCol, 18);
      } else {
        cyl(r * 0.35, bottom + 0.14, bottom + 0.2, shadeCol, shadeCol, 12);
        cyl(r, bottom, bottom + 0.14, shadeCol, shadeCol, 16);
      }
      break;
    }
    case "fan": {
      // a ceiling fan: canopy, downrod, motor housing, the blades and its light bowl underneath
      const bottom = Math.max(0.5, H - Math.max(0.25, h));
      cyl(0.06, H - 0.03, H, LAMP_BODY, LAMP_BODY, 10);
      cyl(0.012, bottom + 0.16, H - 0.03, LAMP_BODY, LAMP_BODY, 6);
      cyl(0.13, bottom + 0.07, bottom + 0.16, LAMP_BODY, LAMP_BODY, 16);
      cyl(0.11, bottom, bottom + 0.07, shadeCol, shadeCol, 16);
      if (blades) pushFanBlades(buf, d.x, fanBladeY(H, h), d.z, w / 2, ang);
      break;
    }
    case "downlight":
      // flush ring in the ceiling with a glowing lens
      cyl(r, H - 0.012, H, LAMP_BODY, LAMP_BODY, 12);
      cyl(r * 0.7, H - 0.02, H - 0.012, shadeCol, shadeCol, 12);
      break;
    case "spot":
      cyl(r * 0.6, H - 0.02, H, LAMP_BODY, LAMP_BODY, 10);
      cyl(r, H - Math.max(0.06, h), H - 0.02, LAMP_BODY, LAMP_BODY, 12);
      cyl(r * 0.8, H - Math.max(0.06, h) - 0.008, H - Math.max(0.06, h), shadeCol, shadeCol, 12);
      break;
    case "panel":
      box(-w / 2, w / 2, -dd / 2, dd / 2, H - Math.max(0.015, h), H, LAMP_BODY, LAMP_BODY);
      box(-w / 2 + 0.02, w / 2 - 0.02, -dd / 2 + 0.02, dd / 2 - 0.02, H - Math.max(0.015, h) - 0.004, H - Math.max(0.015, h), shadeCol);
      break;
    case "uplight":
      cyl(Math.max(0.1, r * 0.6), base, base + 0.03, LAMP_BODY, LAMP_BODY);
      cyl(0.014, base + 0.03, base + h - 0.12, LAMP_BODY, LAMP_BODY, 6);
      // bowl open to the top: dark outside, glowing rim
      cyl(r, base + h - 0.14, base + h - 0.02, LAMP_BODY, LAMP_BODY);
      cyl(r * 0.92, base + h - 0.02, base + h, shadeCol, shadeCol);
      break;
    case "bollard":
      // path light: post with a glowing band under its cap
      cyl(r, base, base + h - 0.14, LAMP_BODY, LAMP_BODY, 10);
      cyl(r * 0.9, base + h - 0.14, base + h - 0.03, shadeCol, shadeCol, 10);
      cyl(r * 1.1, base + h - 0.03, base + h, LAMP_BODY, LAMP_BODY, 10);
      break;
    case "garden":
      // spike in the ground, head pointing up
      cyl(0.012, base, base + h - 0.08, LAMP_BODY, LAMP_BODY, 5);
      cyl(r, base + h - 0.08, base + h - 0.01, LAMP_BODY, LAMP_BODY, 10);
      cyl(r * 0.8, base + h - 0.01, base + h, shadeCol, shadeCol, 10);
      break;
    case "floor":
      cyl(Math.max(0.1, r * 0.7), base, base + 0.03, LAMP_BODY, LAMP_BODY);
      cyl(0.014, base + 0.03, base + h - 0.28, LAMP_BODY, LAMP_BODY, 6);
      cyl(r, base + h - 0.3, base + h, shadeCol, shadeCol);
      break;
    case "table":
      cyl(Math.max(0.05, r * 0.55), base, base + 0.03, LAMP_BODY, LAMP_BODY);
      cyl(0.012, base + 0.03, base + h - 0.16, LAMP_BODY, LAMP_BODY, 6);
      cyl(r, base + h - 0.18, base + h, shadeCol, shadeCol);
      break;
    case "wall": {
      // plate on the wall (back at -z) and a glowing shade in front of it
      const y0 = d.base ?? WALL_LAMP_Y;
      box(-w / 2 + 0.03, w / 2 - 0.03, -dd / 2, -dd / 2 + 0.02, y0, y0 + h, LAMP_BODY);
      box(-w / 2, w / 2, -dd / 2 + 0.02, dd / 2, y0 + h * 0.15, y0 + h * 0.85, shadeCol);
      break;
    }
    case "strip": {
      // a thin bar along the wall: under the ceiling (cove light) or at its mount height; tilted about its
      // length it lies against a slope, standing upright it climbs from its mount height
      const t = Math.max(0.02, h);
      const y1 = d.base != null ? d.base + t : H - 0.04;
      if (!d.roll && !d.upright && !d.rise) {
        box(-w / 2, w / 2, -dd / 2, dd / 2, y1 - t, y1, shadeCol);
        break;
      }
      const roll = (d.roll ?? 0) * DEG;
      const cr = Math.cos(roll);
      const sr = Math.sin(roll);
      const cy = d.upright ? base + w / 2 : y1 - t / 2;
      // local: x along the length, y through the thickness, z across the depth
      // rising along its length (D539): turned about its depth, its middle stays at its height
      const rise = (d.upright ? 0 : (d.rise ?? 0)) * DEG;
      const P = (lx: number, ly: number, lz: number): number[] => {
        let x = lx;
        let y = ly * cr - lz * sr;
        const z = ly * sr + lz * cr;
        if (rise) [x, y] = [x * Math.cos(rise) - y * Math.sin(rise), x * Math.sin(rise) + y * Math.cos(rise)];
        if (d.upright) [x, y] = [-y, x];
        return [d.x + x * ca - z * sa, cy + y, d.z + x * sa + z * ca];
      };
      const c = [P(-w / 2, -t / 2, -dd / 2), P(w / 2, -t / 2, -dd / 2), P(w / 2, -t / 2, dd / 2), P(-w / 2, -t / 2, dd / 2), P(-w / 2, t / 2, -dd / 2), P(w / 2, t / 2, -dd / 2), P(w / 2, t / 2, dd / 2), P(-w / 2, t / 2, dd / 2)];
      const col = new Color(shadeCol);
      const centre = [d.x, cy, d.z];
      const quad = (i: number, j: number, k: number, l: number) => {
        // wound so the face looks outward
        const [a, b, e] = [c[i], c[j], c[k]];
        const n = [(b[1] - a[1]) * (e[2] - a[2]) - (b[2] - a[2]) * (e[1] - a[1]), (b[2] - a[2]) * (e[0] - a[0]) - (b[0] - a[0]) * (e[2] - a[2]), (b[0] - a[0]) * (e[1] - a[1]) - (b[1] - a[1]) * (e[0] - a[0])];
        const out = [a[0] - centre[0], a[1] - centre[1], a[2] - centre[2]];
        const flip = n[0] * out[0] + n[1] * out[1] + n[2] * out[2] < 0;
        const [p, q, r, s] = flip ? [c[l], c[k], c[j], c[i]] : [c[i], c[j], c[k], c[l]];
        buf.tri(p, q, r, col, col, col);
        buf.tri(p, r, s, col, col, col);
      };
      quad(0, 1, 2, 3);
      quad(4, 5, 6, 7);
      quad(0, 1, 5, 4);
      quad(1, 2, 6, 5);
      quad(2, 3, 7, 6);
      quad(3, 0, 4, 7);
      break;
    }
  }
}
