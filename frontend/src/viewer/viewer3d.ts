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
  DoubleSide,
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
import type { Building, Floor, Furniture, Room } from "../model.ts";
import { recolorLamps, SHADE_SENTINEL, shadeFactors } from "./lamp-colors.ts";
import { centroid, pointInPolygon, openingStyle, WALL_LAMP_Y } from "../model.ts";
import { roofUnderAt } from "../roof-sections.ts";
import { buildFloorGeometry, SLAB, stairHoles, type FloorGeometry } from "./build.ts";
import { OrbitControls, type OrbitView } from "./controls.ts";
import { makeFoldable, type FoldMasks } from "./fold.ts";
import { pushCameraModel, pushPackGlow, pushPackLamp, screenRect, pushFridgeDoors } from "./furniture.ts";
import { mountBase, packItem, setPacks, type FurniturePack } from "../packs.ts";
import { withVehicles } from "../parking.ts";
import { buildRoof, type RoofWindowState } from "./roof.ts";
import { GROUND, groundFace, groundFloor, roofFaces, wallFaces } from "../solar.ts";
import { buildSolarLive, solarLiveMaterial, writeSolarLevels, type SolarLive } from "./solar-live.ts";
import { accentOnUniform, accentUniform, parseAccent, lineBlending, themed, themeIndex, type Theme, type ThemeUniform } from "./theme.ts";

export type { Theme } from "./theme.ts";
import { ALWAYS, DEG, GeoBuffer, LineBuffer, pushPrism } from "./geo.ts";
import { buildLightSurface, lightColors, roomIndexAt, type LightKind, type LightSource, type LightSurface, zoneOf } from "./lighting.ts";
import { buildOpeningParts, CLOSED, type OpeningState } from "./openings.ts";
import { circlePath, cleaningPath, stepRobot, type RobotInfo, type RobotMotion } from "./robot.ts";

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
  /** LED strip: roll about its length (degrees) and standing upright (its length runs up from the base). */
  roll?: number;
  upright?: boolean;
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

export type LampModel = "ceiling" | "downlight" | "spot" | "panel" | "pendant" | "floor" | "uplight" | "table" | "wall" | "strip" | "bollard" | "garden";

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
  faces?: { part: "all" | "left" | "right" | "top" | "bottom" | "band" | "cabin" | "lights"; color: [number, number, number]; level: number }[];
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
}

/** Extra gap between floors in the pulled-apart house view (metres). */
const EXPLODE_GAP = 2.4;
/** How far the roof lifts off the top floor while the floors are pulled apart. */
const ROOF_GAP = 1.4;
/** Opacity of the floors below the selected one. */
const BELOW_OPACITY = 0.22;
/** Time constant of the floor animation (ms); about 700 ms until settled. */
const FLOOR_TAU = 140;
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
const CABLE_HALO = 0.09;
const LAMP_BODY = 0x2a3a60;
const LAMP_SHADE = 0x1d2946;
/** Lamps that hang from the ceiling (hidden in the cut view). */
/** LED strips mounted below this height (metres) light upwards instead of down. */
const LOW_STRIP = 1.0;
const HANGING = new Set<LampModel>(["ceiling", "downlight", "spot", "panel", "pendant", "strip"]);
const FLASH_MS = 450;
const EFFECT_MS = 125;
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
  flow: MeshBasicMaterial;
  /** Energie Pro: the living overlay of the solar fields on this floor (garden, walls). */
  solarLive: MeshBasicMaterial;
  lamps: MeshBasicMaterial;
  halos: PointsMaterial;
  cones: MeshBasicMaterial;
  screens: MeshBasicMaterial;
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
  /** The living solar overlay of this floor's fields, if it has any. */
  solarMesh: Mesh | null;
  solarLive: SolarLive | null;
  lampMesh: Mesh;
  /** Sunlight falling through the windows onto the floor. */
  sunMesh: Mesh;
  sunSig: string;
  /** Soft glow around lit lamps, and light cones under spots (quality "High"). */
  haloMesh: Points;
  coneMesh: Mesh;
  /** Motion trail on the floor (discs and ribbons). */
  trailMesh: Mesh;
  /** Doors of smart fridges (they swing open with their sensors). */
  fridgeMesh: Mesh;
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
  const mem = nav.deviceMemory ?? 8;
  const cores = navigator.hardwareConcurrency || 8;
  return mem <= 3 || cores <= 4 || /Silk|KF[A-Z]{2,4}\b/.test(navigator.userAgent);
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
  /** Editor: things on surfaces (solar fields, roof windows) are grabbed and moved with a ray from the camera. */
  private surfaceGrab: SurfaceGrab | null = null;
  private surfaceDragging = false;
  /** Furnishing limited to these furniture types (the editor's energy tool); null = all. */
  private furnishTypes: ReadonlySet<string> | null = null;
  /** Live state of the roof windows (the roof is rebuilt when it changes). */
  private roofWindows = new Map<string, RoofWindowState>();
  private roofWindowsKey = "";
  /** Stripe phase per cable piece, kept when its speed changes so the stripes do not jump. */
  private flowPhase = new Map<string, { speed: number; offset: number }>();
  private readonly flowTime = { value: 0 };
  private readonly flowStart = performance.now();
  private flowActive = false;
  /** Klang & Kino: the sound sources and whether any plays (then the rings animate). */
  private sound: SoundSource[] = [];
  private soundActive = false;
  private flowTimer: ReturnType<typeof setTimeout> | undefined;
  private persons: PersonPin[] = [];
  private readonly personPins = new Map<string, HTMLDivElement>();
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
  /** Seconds used for animated colour effects (advanced in steps while an effect runs). */
  private effectTime = 0;
  /** The frame was asked for by the effect timer or a room tint (shown in the statistics). */
  private effectTick = false;
  private tintTick = false;
  private effectTimer: ReturnType<typeof setTimeout> | undefined;
  private readonly haloTexture: CanvasTexture;
  /** Roof over the top floor (house view only), its opacity and the camera distance of the house view. */
  /** The roof: one group with a part per floor it sits on (each part follows its floor). */
  private roof: { group: Group; parts: { group: Group; floorId: string; base: number; lift: boolean }[]; solid: MeshBasicMaterial; lines: LineBasicMaterial; glass: MeshBasicMaterial; live: MeshBasicMaterial; lives: SolarLive[] } | null = null;
  /** The hologram's anchor: a point on the solar field (building coordinates) and the field's normal. */
  private anchors: { p: [number, number, number]; n: [number, number, number]; floorId: string; size: number; roof: boolean; views: "house" | "all" }[] = [];
  /** Told where the anchor lies on screen after every frame, how large the hologram should be and whether its front faces the camera. */
  private anchorCb: ((index: number, x: number, y: number, visible: boolean, scale: number, facing: boolean) => void) | null = null;
  /** Energie Pro: production level (0..1) per solar field; the overlays animate while any is above zero. */
  private solarLevels = new Map<string, number>();
  private solarActive = false;
  private roofO = 0;
  /** The roof stays put while the camera comes close (no lift, no fade): the editor's roof tool, or a choice of the viewer. */
  private keepRoof = false;
  /** Robot vacuums: their info from Home Assistant, how they move, and their meshes. */
  private robots = new Map<string, { info: RobotInfo; motion: RobotMotion; group: Group; led: MeshBasicMaterial }>();
  private robotGeo: BufferGeometry | null = null;
  private robotMat: MeshBasicMaterial | null = null;
  private robotLedGeo: BufferGeometry | null = null;
  private robotLast = 0;
  private robotTimer: ReturnType<typeof setTimeout> | undefined;
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
  private grab: { floorId: string; id: string; offset: [number, number]; x: number; z: number; moved: boolean } | null = null;
  private ghost: LineSegments | null = null;
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
  private startView: { theta: number; phi: number; radius: number } | null = null;
  private fpsStart = 0;

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
    this.ground = new Mesh(new PlaneGeometry(1, 1), new MeshBasicMaterial({ transparent: true, blending: AdditiveBlending, depthWrite: false }));
    this.ground.rotation.x = -Math.PI / 2;
    this.ground.renderOrder = -1;
    this.scene.add(this.ground, this.root);
    this.rain.frustumCulled = false;
    this.snow.frustumCulled = false;
    this.rain.visible = false;
    this.snow.visible = false;
    this.skyDisc.visible = false;
    this.skyDisc.renderOrder = -1;
    this.scene.add(this.rain, this.snow, this.skyDisc);
    this.controls = this.makeControls();
    this.resizeObserver = new ResizeObserver(() => this.resize());
    this.resizeObserver.observe(host);
    document.addEventListener("visibilitychange", this.onVisibility);
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
    this.building = building;
    this.rebuild();
    if (first) this.fit(0);
    this.invalidate();
  }

  /** Show one floor (null = the whole house). */
  setFloor(floorId: string | null, animate = true): void {
    this.floorId = floorId;
    this.roomId = null;
    this.labelsDirty = true;
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
    this.roomId = roomId;
    this.labelsDirty = true;
    this.applyHighlight();
    if (!roomId) {
      this.fit(700);
      return;
    }
    const fv = this.floors.find((f) => f.floor.rooms.some((r) => r.id === roomId));
    const room = fv?.floor.rooms.find((r) => r.id === roomId);
    if (!fv || !room) return;
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
  setAnchors(anchors: { p: [number, number, number]; n: [number, number, number]; floorId: string; size: number; roof: boolean; views: "house" | "all" }[]): void {
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
      const y = fv.floor.elevation + 0.03;
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

  /** People in their rooms (pink markers in the floor and room views). */
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
        this.personPins.set(p.id, pin);
        this.labels.append(pin);
      }
      pin.title = p.name;
      pin.setAttribute("aria-label", p.name);
      if (pin.dataset.picture !== (p.picture ?? "") || pin.dataset.initials !== p.initials) {
        pin.dataset.picture = p.picture ?? "";
        pin.dataset.initials = p.initials;
        pin.replaceChildren();
        if (p.picture) {
          const img = document.createElement("img");
          img.src = p.picture;
          img.alt = "";
          img.addEventListener("error", () => img.replaceWith(document.createTextNode(p.initials)));
          pin.append(img);
        } else pin.textContent = p.initials;
      }
    }
    for (const [id, pin] of this.personPins) {
      if (seen.has(id)) continue;
      pin.remove();
      this.personPins.delete(id);
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
    const blending = lineBlending(theme);
    const lineMats = [...this.floors.map((f) => f.materials.lines), ...(this.roof ? [this.roof.lines] : [])];
    for (const m of lineMats) {
      m.blending = blending;
      m.needsUpdate = true;
    }
    // the neon ground grid would vanish on the light background anyway
    this.placeGround();
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

  /** Position of the sun; sunlight falls through windows facing it. */
  setSun(sun: SunState | null): void {
    this.sun = sun;
    for (const fv of this.floors) this.buildSun(fv);
    this.placeSky();
    this.invalidate();
  }

  /** Weather outside: particles over the plot, fog, a dimmer sun; nothing on the tablet level but the dimming. */
  setWeather(weather: WeatherView | null): void {
    this.weather = weather;
    for (const fv of this.floors) this.buildSun(fv);
    this.applyWeather();
    this.placeSky();
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
    const b = this.weatherBox;
    const center = new Vector3((b.x0 + b.x1) / 2, b.y0, (b.z0 + b.z1) / 2);
    const r = Math.min(300, Math.max(80, this.houseRadius * 5));
    const dir = new Vector3(Math.sin(north + az) * Math.cos(el), Math.sin(el), -Math.cos(north + az) * Math.cos(el));
    this.skyDisc.position.copy(center).addScaledVector(dir, r);
    this.skyDisc.scale.setScalar(r * (night ? 0.03 : 0.04));
    this.skyDisc.lookAt(center);
    const mat = this.skyDisc.material as MeshBasicMaterial;
    mat.color.set(night ? 0xcfd8ee : 0xffd98a);
    mat.opacity = (night ? 0.55 : 0.85) * (1 - cloud);
    this.skyDisc.visible = true;
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
      }
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
  setOpeningStates(states: Map<string, OpeningState>): void {
    this.openingTargets = states;
    this.invalidate();
  }

  /** Which doors of the smart fridges stand open; the doors swing there over a few frames. */
  setFridgeDoors(doors: Map<string, { left: boolean; right: boolean }>): void {
    for (const [id, d] of doors) {
      const st = this.fridges.get(id) ?? { l: d.left ? 1 : 0, r: d.right ? 1 : 0, tl: 0, tr: 0 };
      st.tl = d.left ? 1 : 0;
      st.tr = d.right ? 1 : 0;
      this.fridges.set(id, st);
    }
    for (const id of [...this.fridges.keys()]) if (!doors.has(id)) this.fridges.delete(id);
    this.invalidate();
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
    fv.fridgeMesh.geometry.dispose();
    fv.fridgeMesh.geometry = buf.geometry();
    fv.fridgeMesh.visible = buf.count > 0;
  }

  resetView(): void {
    this.fit(700);
  }

  /** The camera the house view opens with (null: fitted from the front left). */
  setStartView(view: { theta: number; phi: number; radius: number } | null): void {
    this.startView = view;
  }

  /** The camera as it stands: angles and distance (the target is the house). */
  currentView(): { theta: number; phi: number; radius: number } {
    const v = this.controls.view;
    return { theta: v.theta, phi: v.phi, radius: v.radius };
  }

  dispose(): void {
    this.disposed = true;
    cancelAnimationFrame(this.frame);
    clearTimeout(this.flowTimer);
    clearTimeout(this.effectTimer);
    clearTimeout(this.robotTimer);
    clearTimeout(this.orbitTimer);
    clearTimeout(this.weatherTimer);
    for (const o of [this.rain, this.snow, this.skyDisc]) {
      o.geometry.dispose();
      (o.material as Material).dispose();
    }
    this.resizeObserver.disconnect();
    this.intersection?.disconnect();
    document.removeEventListener("visibilitychange", this.onVisibility);
    this.controls.dispose();
    this.clear();
    this.building = null;
    this.buildRoofMesh();
    this.ground.geometry.dispose();
    (this.ground.material as Material).dispose();
    this.patternTexture.dispose();
    this.blindTexture.dispose();
    this.groundTexture?.dispose();
    this.haloTexture.dispose();
    for (const r of this.robots.values()) r.led.dispose();
    this.robots.clear();
    this.robotGeo?.dispose();
    this.robotLedGeo?.dispose();
    this.robotMat?.dispose();
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

  private clear(): void {
    // robots share one geometry: keep them out of the floor groups while those are disposed
    for (const r of this.robots.values()) r.group.removeFromParent();
    for (const fv of this.floors) {
      for (const pic of fv.screenPics.values()) {
        (pic.mesh.material as Material).dispose();
        pic.texture?.dispose();
      }
      fv.group.traverse((o) => {
        const g = (o as Mesh).geometry as BufferGeometry | undefined;
        g?.dispose();
      });
      for (const m of Object.values(fv.materials)) m.dispose();
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
    const surface = buildLightSurface(fv.floor, fv.geo.walls2d, fv.geo.wallBuckets, fv.geo.openings, cell, fv.geo.holes);
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

  /** Light sources of the lights that are on, with the height and characteristic of their lamp. */
  private lightSources(fv: FloorView): LightSource[] {
    const H = fv.floor.height;
    const out: LightSource[] = [];
    for (const d of this.devices) {
      const glow = this.glowOf(d);
      if (d.floorId !== fv.floor.id || !glow) continue;
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
          else out.push({ x: d.x + Math.cos(a) * w * t, y, z: d.z + Math.sin(a) * w * t, color, level: glow.level * 0.55, kind: sideways ? "omni" : kind, room });
        }
      } else out.push({ x: d.x, y, z: d.z, color, level: glow.level, kind, room });
    }
    return out;
  }

  /** Colours of the light surface for the current lights and doors. */
  private buildGlow(fv: FloorView): void {
    const surface = fv.lightSurface;
    if (!surface) return;
    const sources = this.lightSources(fv);
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
    // the heatmap is an analysis view: room light would wash out its colours
    if (!sources.length || this.roomTint) {
      fv.glowMesh.visible = false;
      g.setDrawRange(0, 0);
      return;
    }
    const colors = lightColors(surface, sources, 0.42, doorOpen);
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
      wall: themed(makeFoldable(new MeshBasicMaterial({ vertexColors: true }), mask, "solid"), this.themeUniform),
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
      flow: flowMaterial(this.flowTime),
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
      const sloped = (b.settings.roof.sections ?? []).some((s) => !s.open && s.base < floor.elevation + floor.height - 0.05);
      const roofUnder = sloped
        ? (x: number, z: number) => {
            const y = roofUnderAt(b, x, z);
            return y === null ? null : y - floor.elevation;
          }
        : undefined;
      const geo = buildFloorGeometry(withVehicles(floor, this.parked), b.settings.wall_exterior, b.settings.wall_interior, stairHoles(b.floors, floor), garden, roofUnder);
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
      const screenMesh = new Mesh(new Geometry(), materials.screens);
      screenMesh.visible = false;
      screenMesh.renderOrder = 5;
      const flowMesh = new Mesh(new Geometry(), materials.flow);
      flowMesh.renderOrder = 5;
      flowMesh.frustumCulled = false;
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
      group.add(
        floorMesh,
        shadowMesh,
        pattern,
        glowMesh,
        wallMesh,
        new LineSegments(geo.lines, materials.lines),
        framesMesh,
        blindsMesh,
        glassMesh,
        flowMesh,
        lampMesh,
        sunMesh,
        haloMesh,
        coneMesh,
        trailMesh,
        fridgeMesh,
        screenMesh,
        glassWalls,
        ...(solarMesh ? [solarMesh] : []),
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
      for (const room of floor.rooms) {
        const pin = document.createElement("button");
        pin.className = "fp3d-pin";
        pin.dataset.room = room.id;
        pin.dataset.floor = floor.id;
        this.fillRoomPin(pin, room.name, this.roomInfo.get(room.id));
        pin.addEventListener("click", () => this.options.onRoomTap?.(floor.id, room.id));
        this.labels.append(pin);
        const [cx, cz] = centroid(room.points);
        roomPins.push({ pin, room, cx, cz });
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
        solarMesh,
        solarLive,
        lampMesh,
        sunMesh,
        sunSig: "",
        haloMesh,
        coneMesh,
        trailMesh,
        fridgeMesh,
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
        label,
      });
    }
    this.floorMap = new Map(this.floors.map((f) => [f.floor.id, f]));
    for (const fv of this.floors) this.buildFridges(fv);
    this.labelsDirty = true;
    if (this.floorId && !b.floors.some((f) => f.id === this.floorId)) this.floorId = null;
    for (const fv of this.floors) {
      this.buildLamps(fv);
      this.buildScreens(fv);
      const prev = previousOpenings.get(fv.floor.id);
      for (const info of fv.geo.openings) fv.openings.set(info.opening.id, prev?.get(info.opening.id) ?? this.openingTargets.get(info.opening.id) ?? CLOSED);
      this.buildOpenings(fv);
      this.buildFlows(fv);
      this.buildLightSurface(fv);
      this.buildSun(fv);
    }
    this.applyTargets(previous.size === 0);
    this.applyHighlight();
    this.applyTierFlags();
    this.buildRoofMesh();
    this.updateGhost();
  }

  private buildRoofMesh(): void {
    if (this.roof) {
      this.roof.group.traverse((o) => ((o as Mesh).geometry as BufferGeometry | undefined)?.dispose());
      this.roof.solid.dispose();
      this.roof.lines.dispose();
      this.roof.glass.dispose();
      this.roof.live.dispose();
      this.scene.remove(this.roof.group);
      this.roof = null;
    }
    const geos = this.building ? buildRoof(this.building, this.roofWindows) : [];
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
      part.renderOrder = 8;
      group.add(part);
      return { group: part, floorId: geo.floor.id, base: geo.base, lift: geo.lift !== false };
    });
    group.renderOrder = 8;
    this.scene.add(group);
    this.roof = { group, parts, solid, lines, glass, live, lives };
    this.placeRoof();
  }

  /**
   * The roof shows in the house view and sits on its floor; zooming in lifts and fades it, so the top
   * floor opens up. Returns true while it still moves.
   */
  private placeRoof(dt = 1000): boolean {
    const roof = this.roof;
    if (!roof) return false;
    const zoom = this.keepRoof ? 1 : Math.min(1, Math.max(0, (this.controls.view.radius / this.houseRadius - 0.62) / 0.3));
    const target = this.floorId === null && this.wallMode !== "cut" ? 0.94 * zoom : 0;
    const k = 1 - Math.exp(-dt / FLOOR_TAU);
    const before = this.roofO;
    this.roofO += (target - this.roofO) * k;
    if (Math.abs(target - this.roofO) < 0.004) this.roofO = target;
    roof.group.visible = this.roofO > 0.02;
    // each part rides on its floor (pulled apart or stacked), lifted while it fades in or out
    for (const part of roof.parts) {
      const fv = this.floorMap.get(part.floorId);
      if (!fv) continue;
      // floors pulled apart: the roof lifts off its floor the same way (it follows the floor's own glide)
      const apart = fv.ty > 0 ? Math.min(1, fv.y / fv.ty) : this.explode && this.floorId === null ? 1 : 0;
      part.group.position.y = fv.floor.elevation + fv.y + part.base + (1 - this.roofO) * 2.2 + (part.lift ? apart * ROOF_GAP : 0);
    }
    roof.solid.opacity = this.roofO;
    roof.solid.depthWrite = this.roofO > 0.9;
    roof.lines.opacity = this.roofO;
    roof.glass.opacity = this.roofO * 0.28;
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
      for (const [id, cur] of fv.openings) {
        const target = this.openingTargets.get(id) ?? CLOSED;
        // nothing to do for an opening that rests at its target (the usual case)
        const near = (a: number | null | undefined, b: number | null | undefined) => (a ?? null) === (b ?? null) || (typeof a === "number" && typeof b === "number" && Math.abs(a - b) < 0.003);
        if (near(target.open, cur.open) && near(target.open2 ?? 0, cur.open2 ?? 0) && near(target.tilt, cur.tilt) && near(target.tilt2 ?? 0, cur.tilt2 ?? 0) && near(target.cover, cur.cover) && !!target.sensed === !!cur.sensed) continue;
        const next = { ...cur, open2: cur.open2 ?? 0, tilt2: cur.tilt2 ?? 0, sensed: target.sensed };
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
        if (next.open !== cur.open || next.open2 !== (cur.open2 ?? 0) || next.tilt !== cur.tilt || next.tilt2 !== (cur.tilt2 ?? 0) || next.cover !== cur.cover || !!next.sensed !== !!cur.sensed) {
          fv.openings.set(id, next);
          changed = true;
        }
        moving ||= busy;
      }
      if (changed) {
        this.buildOpenings(fv);
        this.buildGlow(fv);
        this.buildSun(fv);
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
    c.setHSL((hsl.h + this.effectTime * EFFECT_SPEED + offset) % 1, Math.max(0.6, hsl.s), Math.max(0.45, hsl.l));
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
      lamps.map((d) => `${d.id},${d.lamp ?? d.model},${d.variant},${d.x},${d.z},${d.y},${d.rotation ?? 0},${d.roll ?? 0},${d.upright ? 1 : 0},${d.size?.join("/")},${d.base ?? 0},${d.pack ?? ""},${d.mirror ? 1 : 0}`).join(";");
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
        const hanging = d.lamp === "strip" ? (d.base ?? H) > Math.min(fv.floor.cut_height, H) : d.lamp ? HANGING.has(d.lamp) : d.model === "camera_ceiling";
        if ((!d.lamp && !d.model) || (hanging && this.wallMode === "cut")) continue;
        const start = buf.count;
        const packed = d.pack ? packItem(d.pack) : undefined;
        const [pw, pd, ph] = d.size ?? [0.3, 0.3, 0.3];
        // shades get the sentinel colour and are recoloured below
        if (d.model) pushCameraModel(buf, d.model, d.x, d.model === "camera_ceiling" ? H : d.y, d.z, d.rotation ?? 0);
        else if (packed) pushPackLamp(buf, packed, { x: d.x, z: d.z, rotation: d.rotation ?? 0, w: pw, d: pd, h: ph, mirror: d.mirror }, d.base ?? 0, SHADE_SENTINEL);
        else pushLampModel(buf, { ...d, lamp: d.lamp! }, H, SHADE_SENTINEL);
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
    const sun = this.sun;
    const north = (this.building?.settings.north ?? 0) * DEG;
    // clouds take most of the sunlight
    const cloud = this.weather?.cloud ?? 0;
    const sig = sun ? `${sun.elevation.toFixed(1)},${sun.azimuth.toFixed(1)},${north},${cloud.toFixed(2)},${[...fv.openings.values()].map((o) => (o.cover ?? 0).toFixed(2)).join(",")}` : "";
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
        // the patch stays inside the window's room: it is laid in small cells, and only cells whose
        // centre lies in the room are drawn (so it never crosses walls or leaves the house)
        const room = fv.floor.rooms.find((r) => r.id === info.opening.room_id);
        if (!room || room.points.length < 3) continue;
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
            if (!pointInPolygon([m[0], m[2]], room.points)) continue;
            const a = at(s0, y0);
            const b = at(s1, y0);
            const c = at(s1, y1);
            const d = at(s0, y1);
            buf.tri(a, b, c, c0, c0, c1);
            buf.tri(a, c, d, c0, c1, c1);
          }
        }
      }
    }
    fv.sunMesh.geometry.dispose();
    fv.sunMesh.geometry = buf.geometry();
    fv.sunMesh.visible = buf.count > 0;
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
            // the wall the camera hangs on (a camera just inside an outer wall looks out through it) does not count
            if (s > 0.45 && s < best && u >= 0 && u <= 1) best = s;
          }
          return best;
        };
        const rim = (t: number) => {
          const r = reachAt(t);
          return [d.x + (dir[0] * Math.cos(t) - dir[1] * Math.sin(t)) * r, y, d.z + (dir[1] * Math.cos(t) + dir[0] * Math.sin(t)) * r];
        };
        const start = cones.count;
        for (let i = 0; i < n; i++) cones.tri([d.x, y, d.z], rim(-half + (2 * half * (i + 1)) / n), rim(-half + (2 * half * i) / n), near, far, far);
        coneTris.push({ id: d.id, start, end: cones.count });
        continue;
      }
      const glow = this.glowOf(d);
      if (d.floorId !== fv.floor.id || !d.lamp || !glow) continue;
      if (HANGING.has(d.lamp) && this.wallMode === "cut") continue;
      const [w, dd, h] = d.size ?? LAMP_SIZE[d.lamp];
      const base = d.base ?? 0;
      const ang = (d.rotation ?? 0) * DEG;
      const y = {
        ceiling: H - 0.07,
        downlight: H - 0.03,
        spot: H - h,
        panel: H - 0.03,
        pendant: Math.max(0.4, H - h) + 0.08,
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
          } else push(d.x + Math.cos(ang) * w * t, d.z + Math.sin(ang) * w * t, 0.6);
        }
      else if (d.lamp === "wall") push(d.x - Math.sin(ang) * (dd / 2 + 0.05), d.z + Math.cos(ang) * (dd / 2 + 0.05));
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
    const sig = items.map((f) => `${f.id}:${f.x},${f.z},${f.rotation},${f.w},${f.d},${f.h},${f.mount_y ?? ""},${f.mirror ? 1 : 0}:${JSON.stringify(this.screens.get(f.id))}`).join(";");
    // pictures follow the screens even when only they changed
    if (sig === fv.screenSig && fv.screenMesh.geometry.getAttribute("position")) return this.updateScreenPictures(fv, items);
    fv.screenSig = sig;
    const buf = new GeoBuffer();
    for (const f of items) {
      const st = this.screens.get(f.id)!;
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
          const x0 = face.part === "right" ? 0.03 : -Math.abs(w) / 2 + 0.03;
          const x1 = face.part === "left" ? -0.03 : Math.abs(w) / 2 - 0.03;
          const y = base + (face.part === "bottom" ? h * 0.45 : h) + 0.006;
          const col = new Color(...face.color.map((v) => Math.min(1, v * (0.35 + 0.65 * face.level))) as [number, number, number]);
          const edge = new Color(0, 0, 0);
          const Q = (x: number, z: number, yy = y) => P(x * Math.sign(w), yy, z);
          const inner = [Q(x0, -d / 2 + 0.03), Q(x1, -d / 2 + 0.03), Q(x1, d / 2 - 0.03), Q(x0, d / 2 - 0.03)];
          buf.tri(inner[0], inner[2], inner[1], col);
          buf.tri(inner[0], inner[3], inner[2], col);
          const g = 0.12 + 0.1 * face.level;
          const halo = col.clone().multiplyScalar(0.5);
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
    const sw = r.x1 - r.x0 - 0.04;
    const sh = r.y1 - r.y0 - 0.04;
    // contain: the whole picture is visible, letterboxed by the dark screen around it
    const w = Math.min(sw, sh * aspect);
    const h = w / aspect;
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
    const layout = this.flows
      .filter((f) => f.floorId === fv.floor.id)
      .map(flowKey)
      .join(";");
    const p: number[] = [];
    const c: number[] = [];
    const uv: number[] = [];
    const sp: number[] = [];
    const off: number[] = [];
    for (const f of this.flows) {
      if (f.floorId !== fv.floor.id) continue;
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
          const h = width / 2;
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
    if (this.floorId === null) this.houseRadius = radius;
    // the house view opens as set up (from the garden side, closer …); an opened floor keeps the fitted
    // distance but looks from the same side, so the house never turns round when a floor is opened
    const house = this.floorId === null;
    // a floor may have a start view of its own (#182): it opens from that side and distance
    const own = !house ? (this.floorMap.get(this.floorId!)?.floor.start_view ?? null) : null;
    const start = own ?? this.startView;
    const useRadius = !!start && (house || !!own);
    if (start && useRadius) this.controls.maxRadius = Math.max(this.controls.maxRadius, start.radius * 1.5);
    this.controls.flyTo({ target: center, radius: useRadius ? start!.radius : radius, phi: start ? start.phi : 0.85, theta: start ? start.theta : -0.6 }, duration);
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
  private furnitureAt(x: number, y: number): { fv: FloorView; id: string } | null {
    const ray = this.rayAt(x, y);
    const floors = this.activeFloors();
    const meshes = floors.flatMap((f) => [f.lampMesh, f.wallMesh].filter((m) => m.visible));
    for (const hit of ray.intersectObjects(meshes, false)) {
      if (hit.faceIndex == null) continue;
      const fv = floors.find((f) => f.group === hit.object.parent)!;
      const list = hit.object === fv.lampMesh ? fv.lampFurnTris : fv.geo.furnitureTris;
      const id = list.find((r) => hit.faceIndex! >= r.start && hit.faceIndex! < r.end)?.id;
      if (id) return { fv, id };
    }
    return null;
  }

  /** Point on a floor's plane under a screen point. */
  private floorPoint(fv: FloorView, x: number, y: number): [number, number] | null {
    const ray = this.rayAt(x, y);
    const h = fv.floor.elevation + fv.y;
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
    return this.grabItem(hit.fv, hit.id, x, y);
  }

  private grabItem(fv: FloorView, id: string, x: number, y: number): boolean {
    const f = fv.floor.furniture.find((m) => m.id === id);
    const p = this.floorPoint(fv, x, y);
    if (!f || !p) return false;
    if (f.locked) {
      // fixed: selected, but a drag turns the view instead of moving it
      this.selectFurniture(f.id);
      this.options.onFurnitureSelect?.(f.id);
      return false;
    }
    this.grab = { floorId: fv.floor.id, id: f.id, offset: [f.x - p[0], f.z - p[1]], x: f.x, z: f.z, moved: false };
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
    const p = this.floorPoint(fv, x, y);
    if (!p) return;
    const grid = this.building?.settings.grid ?? 0.05;
    g.x = Math.round((p[0] + g.offset[0]) / grid) * grid;
    g.z = Math.round((p[1] + g.offset[1]) / grid) * grid;
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
    const id = this.selectedFurniture;
    const fv = id ? this.floors.find((f) => f.floor.furniture.some((m) => m.id === id)) : undefined;
    const f = fv?.floor.furniture.find((m) => m.id === id);
    if (!fv || !f) return;
    const x = this.grab?.id === f.id ? this.grab.x : f.x;
    const z = this.grab?.id === f.id ? this.grab.z : f.z;
    const H = fv.floor.height;
    const hanging = ["lamp_ceiling", "lamp_downlight", "lamp_spot", "lamp_panel", "lamp_pendant"].includes(f.type);
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
    const lines = new LineBuffer();
    const pts = [
      [-f.w / 2, -f.d / 2],
      [f.w / 2, -f.d / 2],
      [f.w / 2, f.d / 2],
      [-f.w / 2, f.d / 2],
    ];
    const color = new Color(0.25, 0.9, 1);
    for (let i = 0; i < 4; i++) {
      const [ax, az] = pts[i];
      const [bx, bz] = pts[(i + 1) % 4];
      lines.seg(corner(ax, az, y0 + 0.01), corner(bx, bz, y0 + 0.01), color);
      lines.seg(corner(ax, az, y0 + h), corner(bx, bz, y0 + h), color);
      lines.seg(corner(ax, az, y0 + 0.01), corner(ax, az, y0 + h), color);
    }
    // the front edge a little brighter at floor level, so the direction is clear
    lines.seg(corner(-f.w / 2, f.d / 2 + 0.03, y0 + 0.02), corner(f.w / 2, f.d / 2 + 0.03, y0 + 0.02), new Color(1, 1, 1));
    this.ghost = new LineSegments(lines.geometry(), new LineBasicMaterial({ vertexColors: true, depthTest: false, transparent: true }));
    this.ghost.position.y = fv.floor.elevation + fv.y;
    this.ghost.renderOrder = 20;
    this.scene.add(this.ghost);
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
      if (this.roof) this.roof.group.visible = false;
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
      if (this.roof) this.roof.group.visible = roofVisible;
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
      this.robots.delete(id);
    }
    this.robotLast = 0;
    this.invalidate();
  }

  private makeRobot(info: RobotInfo): { info: RobotInfo; motion: RobotMotion; group: Group; led: MeshBasicMaterial } {
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
      this.robotMat = new MeshBasicMaterial({ vertexColors: true });
      const led = new GeoBuffer();
      pushPrism(led, [[-0.05, 0.1], [0.05, 0.1], [0.05, 0.14], [-0.05, 0.14]], 0.08, 0.085, 0xffffff, 0xffffff, { aoFrom: 0, bottom: false });
      this.robotLedGeo = led.geometry();
    }
    const group = new Group();
    const ledMat = new MeshBasicMaterial({ color: ROBOT_LED[info.mode] });
    group.add(new Mesh(this.robotGeo, this.robotMat!), new Mesh(this.robotLedGeo!, ledMat));
    return { info, motion: { pos: [...info.rest] as [number, number], heading: info.restHeading, path: [], next: 0 }, group, led: ledMat };
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
  setTrail(spots: TrailSpot[]): void {
    const col = (age: number) => new Color(0.25 - 0.2 * age, 0.95 - 0.83 * age, 1 - 0.7 * age);
    const dark = new Color(0, 0, 0);
    const y = 0.02;
    for (const fv of this.floors) {
      const buf = new GeoBuffer();
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

  /** Fly to a point of a floor (search) and let the device there flash. */
  focus(floorId: string, x: number, z: number, y: number, entityId: string | null): void {
    const fv = this.floorMap.get(floorId);
    if (!fv) return;
    this.controls.flyTo({ target: new Vector3(x, fv.floor.elevation + fv.ty + y, z), radius: 5.5, phi: 0.78 }, 900);
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
    const weatherMoving = this.stepWeather(now);
    const moving = cameraMoving || floorsMoving || openingsMoving || flashing || roofMoving;
    const busy: string[] = [];
    if (cameraMoving) busy.push("camera");
    if (floorsMoving) busy.push("floors");
    if (openingsMoving) busy.push("openings");
    if (flashing) busy.push("flash");
    if (roofMoving) busy.push("roof");
    if (this.flowActive) busy.push("flow");
    if (this.soundActive) busy.push("sound");
    if (this.solarActive) busy.push("solar");
    if (this.effectTick) busy.push("effect");
    if (robotsMoving) busy.push("robot");
    if (orbiting) busy.push("orbit");
    if (this.tintTick) busy.push("tint");
    this.effectTick = this.tintTick = false;
    this.lastFrame = moving ? now : 0;
    this.flowTime.value = this.flowSeconds();
    if (this.soundActive) this.animateSound(now);
    this.updateWalls();
    this.renderer.render(this.scene, this.camera);
    // labels are placed only when the view or something on it moved (style writes cost layout)
    if (this.viewChanged() || floorsMoving || this.labelsDirty) {
      this.labelsDirty = false;
      this.updateLabels();
    }
    // everything that keeps drawing (also the energy flow, effects, robots) shows in the frame rate
    this.reportStats(now, busy);
    if (moving) this.invalidate();
    if (this.effectFloors.size && !this.effectTimer && !document.hidden) {
      // colour effects: a few steps per second are enough and keep the tablet idle in between
      const ms = this.lowQuality ? 2 * EFFECT_MS : EFFECT_MS;
      this.effectTimer = setTimeout(() => {
        this.effectTimer = undefined;
        this.effectTime += ms / 1000;
        this.effectTick = true;
        for (const fv of this.floors) {
          if (fv.o < 0.02 || !this.effectFloors.has(fv.floor.id)) continue;
          this.buildLamps(fv);
          this.buildGlow(fv);
        }
        this.invalidate();
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
    if (!moving && robotsMoving && !this.robotTimer) {
      // a driving robot: about 30 frames per second, 15 on the tablet level
      this.robotTimer = setTimeout(() => {
        this.robotTimer = undefined;
        this.invalidate();
      }, this.lowQuality ? 66 : 33);
    }
    if (!moving && (this.flowActive || this.solarActive || this.soundActive) && !this.flowTimer) {
      // only the energy flow (or the living modules) moves: about 30 frames per second are enough
      this.flowTimer = setTimeout(() => {
        this.flowTimer = undefined;
        this.invalidate();
      }, this.lowQuality ? 2 * FLOW_FRAME_MS : FLOW_FRAME_MS);
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
        if (this.floorId !== null && (a.views !== "all" || a.floorId !== this.floorId)) {
          this.anchorCb!(i, 0, 0, false, 1, true);
          return;
        }
        // the roof lifts and fades when the camera comes close: an anchor on it rides up with it
        const p = new Vector3(a.p[0], a.p[1] + (fv?.y ?? 0) + (a.roof ? (1 - this.roofO) * 2.2 : 0), a.p[2]);
        const toCamera = this.camera.position.clone().sub(p);
        const dist = toCamera.length();
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
      if (!pin) continue;
      if (!fv || house || fv.to < 0.99 || fv.o < 0.9 || this.otherFloor(fv)) {
        this.place(pin, null);
        continue;
      }
      v.set(p.x, fv.floor.elevation + fv.y + 0.9, p.z).project(this.camera);
      const off = v.z > 1 || Math.abs(v.x) > 1.05 || Math.abs(v.y) > 1.05;
      this.place(pin, off ? null : `translate(${((v.x + 1) / 2) * w}px, ${((1 - v.y) / 2) * h}px) translate(-50%, -50%)`);
    }
    for (const d of this.devices) {
      const pin = this.devicePins.get(d.id)?.el;
      if (!pin) continue;
      const fv = this.floorMap.get(d.floorId);
      // device markers belong to the floor and room views; the house view only shows floor labels –
      // except what a camera detects right now: that is worth a pin on the whole house too
      const alert = d.id.startsWith("detect:");
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
      });
      this.fpsFrames = 0;
      this.fpsStart = now;
      this.worstFrame = 0;
    }
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
  return `${f.floorId}:${f.a.map(r).join(",")}>${f.b.map(r).join(",")}`;
}

/** Stripe speed (m/s): still at 0 W, faster with more power (square root, so 2 kW is not 20 × 100 W). */
function flowSpeed(power: number): number {
  return power > 0.5 ? Math.min(2.4, 0.3 + Math.sqrt(power) / 28) : 0;
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

export { furniturePreview, type PreviewItem } from "./preview.ts";

export function createViewer(host: HTMLElement, options?: ViewerOptions): FloorplanViewer {
  return new FloorplanViewer(host, options);
}

/** Model of a lamp into a buffer (3D view and furniture previews); `H` is the ceiling height. */
export function pushLampModel(
  buf: GeoBuffer,
  d: Pick<DeviceMarker, "x" | "z" | "size" | "base" | "rotation" | "variant" | "roll" | "upright"> & { lamp: LampModel },
  H: number,
  shadeCol: number,
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
      if (!d.roll && !d.upright) {
        box(-w / 2, w / 2, -dd / 2, dd / 2, y1 - t, y1, shadeCol);
        break;
      }
      const roll = (d.roll ?? 0) * DEG;
      const cr = Math.cos(roll);
      const sr = Math.sin(roll);
      const cy = d.upright ? base + w / 2 : y1 - t / 2;
      // local: x along the length, y through the thickness, z across the depth
      const P = (lx: number, ly: number, lz: number): number[] => {
        let x = lx;
        let y = ly * cr - lz * sr;
        const z = ly * sr + lz * cr;
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
