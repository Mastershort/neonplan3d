// 2D editor: floors, rooms (rectangles and free shapes), snapping, undo, background template.

import { css, html, LitElement, nothing, svg, type PropertyValues, type TemplateResult } from "lit";
import { linesField } from "./lines-field.ts";
import { unsafeHTML } from "lit/directives/unsafe-html.js";
import { ref } from "lit/directives/ref.js";
import { fetchImage, importPack, listHistory, restoreSnapshot, storeImage, takeSnapshot, type Snapshot, getVoiceSettings, setVoiceSentences, type SentenceMode } from "../api.ts";
import { download, exportFile, parseExport } from "../transfer.ts";
import { carEntities, type CarEntities, areaEntities, autoPlace, hiddenInHa, CLIMATE_CLASSES, defaultHeight, entityName, entityAreaId, furnitureEntities, groupByDevice, hasScreen, isMediaFurniture, isPlaceable, isRoomClimateSensor, kindOf, openingEntities, otherAreaEntities, pictureRuleMatches, roomClimateSensors, unassignedEntities, windowPosition, type ClimateKey } from "../devices.ts";
import { furnitureSymbol } from "./furniture2d.ts";
import { clipConvex, netRoomArea } from "../geometry/area.ts";
import { areaText, formatImperial, lengthText, lengthUnit, parseLength, unitLabel, type LengthUnit } from "../units.ts";
import { closeGaps, straightenEdges, suggestedThickness } from "../geometry/gaps.ts";
import { clampIntoRoom, keepInRoom, sharedEdge, snapToWall } from "../geometry/snap.ts";
import { cornerPoint, nearestOnPath, onWall, pipePath, type P3 } from "../geometry/runs.ts";
import { connectionsAt, laidPipe, nearestOnOutline, planConnection, poolNodeAt, runLead, runsOnWall, splitPipe, type Connection, type ConnectVia, type WallRun } from "../pool-runs.ts";
import { devicePorts, FILTER_VALVES, jointPortAt, jointPorts, nodePart, poolPortFlow, portFlow, splitNode, type PortName } from "../pool-ports.ts";
import { holeInRoom } from "../geometry/holes.ts";
import { weatherEntity, isRainSource } from "../weather.ts";
import { SHOW_PRESENCE } from "../flags.ts";
import { hasFeature, labOn, manualUrl, released, shopUrl, UNRELEASED } from "../features.ts";
import { loadLocate } from "../load-locate.ts";
import { isBeta, supporterUrl } from "../beta.ts";
import { BIN_SHAPES, BIN_SIZE, binColors, binShape, householdCountry, isPackPlant, MAILBOX_SHAPES, MAILBOX_SIZE, mailboxShape, WASTE_KINDS, wasteColors } from "../household.ts";
import { cameraMotionSensors, cameraOwnSensors, detectionKind, setCameraSensors } from "../markers.ts";
import { backdropImage } from "../backdrop.ts";
import { screenName, setScreenName, setVoiceHere, setVoicePipeline, voiceOnHere, voicePipeline } from "../load-voice.ts";
import { doorbellCamera, doorbellEntities, directorOnHere, HOLD_DEFAULT, HOLD_MAX, HOLD_MIN, setDirectorHere, type DirectorSettings } from "../director.ts";
import { deviceSensors, energySummary, flowSegments, gridPoint, powerSensorFor, proposeEnergySensors, type EnergyPrefs, type FlowSegment, proposeMeters } from "../energy.ts";
import { CLIMATE_ATTRS, isPulseDrive, isStatusSensor, robotRoomSensor, TOGGLE_KINDS } from "../devices.ts";
import { activeSections, sectionFloor, dormerParent, effectiveDormer, proposeDormer, sectionGeometry, floorOutline, polygonBox, headroomLines, ridgeHeight, sectionAbove, sectionCutsBelow, roofSectionsFromRooms, sectionFrame, sectionTurn, turnSectionAbout, wallTopUnder } from "../roof-sections.ts";
import { bestFace, clampField, faceAt, faceCompass, fieldFace, fieldModules, GROUND, moveField, pointOnFace, proposeField, proposeGroundField, proposeWindow, proposeWallField, roofFaces, rowCounts, turnGroundField, fieldCenter, wallFaces, windowAsField, windowCorners, onFace, onField, rayOnFace, type RoofFace } from "../solar.ts";
import type { SurfaceGrab, SurfaceRay } from "../viewer/viewer3d.ts";
import { storedImageIds } from "../transfer.ts";
import { fromWall, furnitureOnWall, openingsOnWall, roomEdgeFrame, slideAlong, toWall, type WallFrame } from "../geometry/wall-frame.ts";
import { type CarLinks, type Background, OUTDOOR_TOP, sidelightLayout, DEFAULT_WEATHER_EFFECTS, WEATHER_EFFECTS,
  normalizeBuilding,
  syncCameraLooks,
  furnitureFootprint,
  type FreeWall,
  poolDepth,
  poolSunken,
  poolHeight,
  poolShapePoints,
  POOL_DEVICES,
  VALVE_POSITIONS,
  type PoolLinks,
  type PoolPipe,
  type PoolPort,
  type PoolJoint,
  type ValvePosition,
} from "../model.ts";
import { furnishRoom, PACKAGES, type PackageId } from "../packages.ts";
import { edgeReach, generateWalls, locateOpening, openingHost, pointOnRoomEdge, type Wall } from "../geometry/walls.ts";
import { formatNumber, languageReady, loadLanguage, translate, type I18nKey } from "../i18n.ts";
import { iconPath } from "../icons.ts";
import { moduleAreaFields, moduleFurnitureFields, moduleHelp, moduleRoomFields, modulePipeRules, moduleSettings, moduleWaits, syncModules, type ModuleField, type ModuleHost, type PipeRules } from "../modules.ts";
import { pipePlanner } from "../pipe-planner.ts";
import {
  bounds,
  centroid,
  FLOOR_MATERIALS,
  FURNITURE_GROUPS,
  ENERGY_DEVICES,
  gangPlateWidth,
  gangsOf,
  splitAliases,
  GANG_TYPES,
  MAX_GANGS,
  TECH_SIZE,
  TECH_TYPES,
  type Gang,
  DEFAULT_HOLOGRAM,
  type HologramSettings,
  type StartView,
  FURNITURE_SIZE,
  FURNITURE_TYPES,
  canLift,
  isFixed,
  isLamp,
  LAMP_MODEL,
  isAxisRect,
  OUTDOOR_TYPES,
  BUTTON_ACTIONS,
  type ButtonAction,
  type CustomButton,
  type MediaPreset,
  outdoorStanding,
  outdoorZones,
  SLOPE_DIRS,
  type SlopeDir,
  spotGrid,
  step,
  type Direction,
  signedArea,
  newFloor,
  OPENING_PRESETS,
  openingPreset,
  type OpeningPreset,
  floorElevation,
  resizeFurniture,
  roomTiles,
  pointInPolygon,
  polygonArea,
  uid,
  type Building,
  type Floor,
  type Furniture,
  type FurnitureType,
  type LampMount,
  type RoofSection,
  type RoofShape,
  type RoofEnd,
  ROOF_ENDS,
  type SolarField,
  type SolarString,
  type RoofWindow,
  ROOF_SHAPES,
  type MarkerShow,
  MARKER_SHOWS,
  type OutdoorArea,
  type OutdoorType,
  type RoofType,
  type Placement,
  type Opening,
  type OpeningType,
  type Room,
  type Vec2,
  DOOR_STYLES,
  WINDOW_STYLES,
  SILL_BOARDS,
  openingStyle,
  isFrontDoor,
  type OpeningStyle,
  type SillBoard,
  type ScreenPicture,
  STAIR_TYPES,
  setTerrain,
  clearFirstState,
} from "../model.ts";
import { windowGetsWell } from "../geometry/wells.ts";
import { controls, tokens } from "../styles.ts";
import "./entity-picker.ts";
import type { HassArea, HassFloor, HomeAssistant } from "../types.ts";
import { fetchBackup, restoreBackup, type BackupFile } from "../api.ts";
import { deleteDiagnostics, getDiagnostics, setDiagnostics, type DiagnosticsStatus } from "../api.ts";
import { load3d } from "../load3d.ts";
import "./library.ts";
import { basicTypes, buildIndex, roomKindOf, type LibraryEntry } from "../library-index.ts";
import { packsVersion as libPacksVersion } from "../packs.ts";
import type { WallMode } from "../viewer/viewer3d.ts";
import { furnitureName } from "../furniture-names.ts";
import { furnitureSize, isElectric, isPackHeater, isPackSensor, isPackType, isRobotVacuum, mountBase, packDisplay, packItem, packItemName, packMotion, packName, packType, setPacks, type FurniturePack } from "../packs.ts";

/** Items that can be fixed against moving. */
type FixKind = "room" | "opening" | "furniture" | "device" | "wall" | "outdoor";

/** Highest mount height the backend accepts (schema: 0–10 m); "40" meant as centimetres would refuse every save. */
const MAX_MOUNT_Y = 10;

type Tool = "select" | "rect" | "polygon" | "measure" | "opening" | "furniture" | "outdoor" | "hole" | "wall" | "roof" | "energy" | "pool";

type Drag =
  | { kind: "pan"; last: [number, number] }
  | { kind: "vertex"; roomId: string; index: number; base: Building; moved: boolean }
  | { kind: "device"; entityId: string; start: Vec2; startScreen: [number, number]; base: Building; moved: boolean }
  | { kind: "opening"; id: string; startScreen: [number, number]; base: Building; moved: boolean }
  | { kind: "furniture"; id: string; start: Vec2; startScreen: [number, number]; base: Building; moved: boolean }
  | { kind: "furnset"; ids: string[]; start: Vec2; startScreen: [number, number]; base: Building; moved: boolean }
  | { kind: "marquee"; start: Vec2; end: Vec2; add: boolean }
  | { kind: "rotate"; id: string; base: Building; moved: boolean }
  | { kind: "aim"; entityId: string; base: Building; moved: boolean }
  | { kind: "resize"; id: string; corner: [1 | -1, 1 | -1]; base: Building; moved: boolean }
  | { kind: "room"; roomId: string; start: Vec2; startScreen: [number, number]; base: Building; moved: boolean }
  | { kind: "rect"; start: Vec2; end: Vec2; outdoor?: boolean; hole?: boolean; roof?: boolean }
  | { kind: "roofmove"; id: string; start: Vec2; startScreen: [number, number]; base: Building; moved: boolean }
  | { kind: "solarturn"; id: string; base: Building; moved: boolean }
  | { kind: "solarmove"; id: string; start: Vec2; startScreen: [number, number]; base: Building; moved: boolean; grab: { du: number; ds: number } | null; win?: boolean }
  | { kind: "outvertex"; id: string; index: number; base: Building; moved: boolean }
  | { kind: "outbox"; id: string; corner: number; base: Building; moved: boolean }
  | { kind: "pipept"; pool: string; pipe: string; index: number; base: Building; moved: boolean }
  | { kind: "poolport"; pool: string; id: string; base: Building; moved: boolean }
  | { kind: "pooldev"; id: string; start: Vec2; base: Building; moved: boolean }
  | { kind: "pooljoint"; pool: string; id: string; start: Vec2; base: Building; moved: boolean }
  | { kind: "roofcorner"; id: string; corner: [0 | 1, 0 | 1]; base: Building; moved: boolean }
  | { kind: "roofvertex"; id: string; index: number; base: Building; moved: boolean }
  | { kind: "cablept"; id: string; index: number; base: Building; moved: boolean }
  | { kind: "holopt"; base: Building; moved: boolean }
  | { kind: "bgmove"; start: Vec2; bx: number; bz: number; base: Building; moved: boolean }
  | { kind: "bgscale"; base: Building; moved: boolean }
  | { kind: "bgrotate"; base: Building; moved: boolean; start: number; rot: number }
  | { kind: "freewall"; start: Vec2; end: Vec2 }
  | { kind: "wallmove"; id: string; end: "a" | "b" | null; start: Vec2; startScreen: [number, number]; base: Building; moved: boolean }
  | { kind: "outdoor"; id: string; start: Vec2; startScreen: [number, number]; base: Building; moved: boolean }
  | { kind: "tap"; startScreen: [number, number]; last: [number, number]; panning: boolean };

interface Guides {
  point?: Vec2;
  x?: number;
  z?: number;
}

/** Drags that change the document live (restored when cancelled, recorded in the history when done). */
const EDIT_DRAGS = new Set(["vertex", "room", "device", "opening", "furniture", "furnset", "rotate", "resize", "outdoor", "roofmove", "roofcorner", "roofvertex", "outvertex", "outbox", "pipept", "poolport", "pooldev", "pooljoint", "solarmove", "solarturn", "cablept", "holopt", "bgmove", "bgscale", "bgrotate"]);

const HISTORY = 100;
/** An angle turned on by `d` degrees, kept between -180 and 180. */
const turnBy = (a: number, d: number): number => {
  const v = (((a + d) % 360) + 360) % 360;
  return v > 180 ? v - 360 : v;
};

/** Topics of the ⚙ settings menu (everything that belongs to the whole plan). */
type SettingsTopic = "house" | "weather" | "director" | "voice" | "locate" | "favorites" | "backdrop" | "terrain" | "backup" | "modules" | "diagnostics";

/** Wall view side bar: what stands or hangs at a wall, by kind. */
const WALL_CATS: Record<string, string[]> = {
  base: ["kitchen", "sink", "stove", "dishwasher", "sideboard", "dresser", "tv_board", "nightstand", "washbasin", "washer", "dryer", "worktop", "desk"],
  hang: ["kitchen_wall", "tv_wall", "shelf", "lamp_wall", "radiator", "ac_unit", "led_strip"],
  tall: ["kitchen_tall", "fridge", "wardrobe", "tall_cabinet", "shelf", "coat_rack"],
  living: ["sofa", "armchair", "bed", "bunk_bed", "bench", "corner_bench", "plant"],
  light: ["lamp_wall", "lamp_floor", "led_strip", "lamp_table"],
  switches: ["wall_switch", "wall_socket", "wifi_ap", "water_heater"],
};
/** Hanging pieces (they go into a gap high on the wall). */
const HANGING = new Set(["kitchen_wall", "tv_wall", "lamp_wall", "shelf", "led_strip", "ac_unit"]);
/** Cabinets built to measure: in a gap they take its width. */
const WALL_FIT = new Set(["kitchen", "kitchen_wall", "kitchen_tall", "sideboard", "dresser", "tv_board", "worktop", "wardrobe", "tall_cabinet", "shelf", "desk"]);
/** The narrowest a fitted piece may become (a 29 cm desk is no desk). */
const WALL_FIT_MIN: Record<string, number> = { kitchen: 0.15, kitchen_wall: 0.2, kitchen_tall: 0.3, sideboard: 0.4, dresser: 0.4, tv_board: 0.6, worktop: 0.1, wardrobe: 0.4, tall_cabinet: 0.3, shelf: 0.25, desk: 0.6 };
const SNAP_PX = 10;
const round = (v: number) => Math.round(v * 1000) / 1000;

/** How far in front of a wall's face a pipe laid on it runs (to its middle). */
const RUN_GAP = 0.06;

/** A pipe being laid in the wall view: where it starts (a node, a T-piece on a pipe, a loose end it extends) and its points. */
interface RunDraft {
  pool: string;
  from: string;
  fromT: P3 | null;
  extend: { pipe: string; end: "from" | "to" } | null;
  pts: P3[];
  /** Where it starts (a node, a T-piece, a loose end): drawn with the draft in 3D. */
  anchor: P3 | null;
  /** The wall the last point was set on ("room|edge") and its distance in front of it. */
  wall: string;
  d: number;
}

/** What the wall view's pipe tools need about the wall shown. */
interface RunCtx {
  frame: WallFrame;
  floor: Floor;
  room: Room;
  key: string;
  L: number;
  H: number;
  gap: number;
  runs: WallRun[];
  pool: OutdoorArea;
  pt: (e: PointerEvent) => { s: number; y: number };
}

/** Douglas–Peucker: the stroke's corners, wiggles below `tol` dropped. */
/**
 * Changes the item of a list that matches, or nothing when it is gone: the selection may point at a room, door or
 * piece of furniture that is no longer on this floor (another floor shown, undone, deleted elsewhere) – the editor
 * threw "Cannot convert undefined or null to object" there.
 */
function patchItem<T extends object>(item: T | undefined, patch: Partial<T>): void {
  if (item) Object.assign(item, patch);
}

function simplifyStroke(pts: { s: number; y: number }[], tol: number): { s: number; y: number }[] {
  if (pts.length < 3) return pts.slice(1);
  const a = pts[0];
  const b = pts[pts.length - 1];
  let far = 0;
  let at = -1;
  const len = Math.hypot(b.s - a.s, b.y - a.y) || 1;
  for (let i = 1; i < pts.length - 1; i++) {
    const p = pts[i];
    const dist = Math.abs((b.s - a.s) * (a.y - p.y) - (a.s - p.s) * (b.y - a.y)) / len;
    if (dist > far) [far, at] = [dist, i];
  }
  if (far <= tol || at < 0) return [];
  return [...simplifyStroke(pts.slice(0, at + 1), tol), pts[at], ...simplifyStroke(pts.slice(at), tol)];
}

/**
 * Right angles: each piece of the stroke runs level or upright (whichever it is nearer to), pieces in a line merge,
 * stubs shorter than 8 cm go; the points sit on a 5 cm grid. The first and the last point stay where they are.
 */
function snapStroke(pts: { s: number; y: number }[]): { s: number; y: number }[] {
  if (pts.length < 2) return pts;
  const g = (v: number) => Math.round(v * 20) / 20;
  const out: { s: number; y: number }[] = [{ s: pts[0].s, y: pts[0].y }];
  for (let i = 1; i < pts.length; i++) {
    const prev = out[out.length - 1];
    const p = pts[i];
    const level = Math.abs(p.s - prev.s) >= Math.abs(p.y - prev.y);
    const q = level ? { s: g(p.s), y: prev.y } : { s: prev.s, y: g(p.y) };
    const back = out.length > 1 ? out[out.length - 2] : null;
    // the same direction as the piece before: the corner between them goes
    if (back && ((back.y === prev.y && q.y === prev.y) || (back.s === prev.s && q.s === prev.s))) out.pop();
    if (Math.hypot(q.s - out[out.length - 1].s, q.y - out[out.length - 1].y) < 0.08 && i < pts.length - 1) continue;
    out.push(q);
  }
  // the true end: the last corner turns towards it, level then upright
  const end = pts[pts.length - 1];
  const prev = out[out.length - 1];
  out.pop();
  const last = out[out.length - 1];
  if (last) {
    if (Math.abs(end.s - last.s) >= 0.08 && Math.abs(end.y - last.y) >= 0.08) out.push(last.y === prev.y || out.length < 2 ? { s: g(end.s), y: last.y } : { s: last.s, y: g(end.y) });
  }
  out.push({ s: end.s, y: end.y });
  return out;
}

/** A plan point in front of a wall (rounded to the millimetre). */
function onWallXZ(frame: WallFrame, s: number, d: number): Vec2 {
  const [x, , z] = onWall(frame, s, 0, d);
  return [round(x), round(z)];
}

function pathLengthOf(p: PoolPipe, nodeAt: (n: string) => { x: number; z: number; y: number } | null): number {
  const path = pipePath(p, nodeAt);
  let l = 0;
  for (let i = 1; i < path.length; i++) l += Math.hypot(path[i][0] - path[i - 1][0], path[i][1] - path[i - 1][1], path[i][2] - path[i - 1][2]);
  return l;
}

/** Arrow keys as plan directions (x right, z down). */
const ARROWS: Record<string, [number, number]> = { ArrowLeft: [-1, 0], ArrowRight: [1, 0], ArrowUp: [0, -1], ArrowDown: [0, 1] };

// furniture without a top to light: no "State from" box
const NO_STATE_TYPES = new Set(["parking", "stairwell", "rug", "grid_point", "waste_bin", "mailbox", "wall_switch", "wall_socket", "wifi_ap", "water_heater"]);

/** A gas or water meter from a pack (its reading in m³ or litres, no power): family "meter" tagged gas or water. */
function volumeMeter(type: string): boolean {
  const item = packItem(type);
  return item?.family === "meter" && (item.tags ?? []).some((t) => /^(gas|water|wasser)$/i.test(t));
}

export class Fp3dEditor extends LitElement {
  static properties = {
    _shiftX: { state: true },
    _shiftAll: { state: true },
    _bgEdit: { state: true },
    _bgRuler: { state: true },
    _bgRulerLen: { state: true },
    _bgLevel: { state: true },
    _bgOpen: { state: true },
    _shiftZ: { state: true },
    hass: { attribute: false },
    building: { attribute: false },
    narrow: { type: Boolean },
    packs: { attribute: false },
    _preview: { state: true },
    _doc: { state: true },
    _doc3d: { state: true },
    _split: { state: true },
    _splitRatio: { state: true },
    _backupBusy: { state: true },
    _wall3d: { state: true },
    _sidePinned: { state: true },
    _sideMin: { state: true },
    _sideOpen: { state: true },
    _floorId: { state: true },
    _roomId: { state: true },
    _vertex: { state: true },
    _openingId: { state: true },
    _furnitureId: { state: true },
    _multi: { state: true },
    _single: { state: true },
    _multiMode: { state: true },
    _deviceId: { state: true },
    _deviceQuery: { state: true },
    _devSource: { state: true },
    _roofId: { state: true },
    _solarId: { state: true },
    _solarPick: { state: true },
    _roofWinId: { state: true },
    _energyNote: { state: true },
    _cableId: { state: true },
    _expanded: { state: true },
    _notice: { state: true },
    _history: { state: true },
    _diag: { state: true },
    _diagView: { state: true },
    _diagBusy: { state: true },
    _diagNote: { state: true },
    _spots: { state: true },
    _outdoorId: { state: true },
    _wallId: { state: true },
    _edgeHi: { state: true },
    _wallView: { state: true },
    _wallSel: { state: true },
    _wallMulti: { state: true },
    _wallSingle: { state: true },
    _wallGap: { state: true },
    _wallCat: { state: true },
    _wallQuery: { state: true },
    _wallFrame: { state: true },
    _wallPicTick: { state: true },
    _wallPick: { state: true },
    _runMode: { state: true },
    _techMode: { state: true },
    _feedKind: { state: true },
    _techAsk: { state: true },
    _runDraft: { state: true },
    _runSel: { state: true },
    _conn: { state: true },
    _jointPlace: { state: true },
    _card: { state: true },
    _cardJoin: { state: true },
    _wallView3d: { state: true },
    _ctx: { state: true },
    _fixedHint: { state: true },
    _phoneHint: { state: true },
    _diagInvite: { state: true },
    _floorMenu: { state: true },
    _openingPreset: { state: true },
    _measureLen: { state: true },
    _packages: { state: true },
    _rectSize: { state: true },
    _tool: { state: true },
    _toolMenu: { state: true },
    _settingsMenu: { state: true },
    _sideWidth: { state: true },
    _moduleMsg: { state: true },
    _settingsDialog: { state: true },
    _toolOpen: { state: true },
    _viewMenu: { state: true },
    _draft: { state: true },
    _outdoorFree: { state: true },
    _outdoorType: { state: true },
    _poolShape: { state: true },
    _pipeMode: { state: true },
    _pipeDraft: { state: true },
    _pipeId: { state: true },
    _cursor: { state: true },
    _guides: { state: true },
    _view: { state: true },
    _size: { state: true },
    _images: { state: true },
    _canUndo: { state: true },
    _canRedo: { state: true },
  };

  declare hass: HomeAssistant;
  declare building: Building;
  declare narrow: boolean;
  /** Imported furniture packs (from the panel's controller). */
  declare packs: FurniturePack[] | undefined;
  /** Result of the last pack import. */
  /** Picture of the furniture under the pointer in the library. */
  private declare _preview: { type: string; url: string | null; left: number; top: number } | null;
  private declare _doc: Building;
  /** The draft as the 3D pane shows it (follows _doc with a short delay, so drags stay smooth). */
  private declare _doc3d: Building;
  private doc3dTimer: ReturnType<typeof setTimeout> | undefined;
  /** The live 3D pane next to the plan (remembered per browser). */
  private declare _split: boolean;
  /** Share of the width the plan takes next to the 3D pane (0.2 … 0.8). */
  private declare _splitRatio: number;
  private declare _backupBusy: boolean;
  /** Walls in the 3D pane: full height ("auto") or cut at the cut height (shows wall units and shelves). */
  private declare _wall3d: WallMode;
  /** Sidebar beside the 3D pane: pinned open always, or folded to a strip while nothing is selected. */
  private declare _sidePinned: boolean;
  /** The sidebar folded to a narrow strip beside the plan (more room to move furniture); remembered per browser. */
  private declare _sideMin: boolean;
  private declare _sideOpen: boolean;
  private declare _floorId: string | null;
  private declare _roomId: string | null;
  private declare _vertex: number | null;
  private declare _openingId: string | null;
  private declare _furnitureId: string | null;
  /** Several furniture items selected together (shift-click, a frame); empty = the usual single selection. */
  private declare _multi: string[];
  /** One part of a furniture block is edited on its own (double-click), not the whole block. */
  private declare _single: boolean;
  /** Touch: taps add items to the selection, a drag on empty ground draws a frame. */
  private declare _multiMode: boolean;
  /** The last tap on a furniture item, for the double-tap into a block. */
  private lastFurnTap: { id: string; t: number } | null = null;
  /** Whether Shift is held (the 3D views report taps without their keys). */
  private shiftHeld = false;
  private readonly onShift = (e: KeyboardEvent) => (this.shiftHeld = e.shiftKey);
  /** Library pictures for the wall view's side bar (type -> image). */
  private kitPics = new Map<string, string>();
  private kitPicsAsked = new Set<string>();
  private declare _deviceId: string | null;
  private declare _deviceQuery: string;
  /** Which devices the room form lists: its own area, other areas, or entities without an area. */
  private declare _devSource: "area" | "other" | "none";
  /** Selected roof section (tool "roof"). */
  private declare _roofId: string | null;
  /** Selected solar field (roof tool). */
  private declare _solarId: string | null;
  /** Solar field form: taps in the plan switch single modules on and off. */
  private declare _solarPick: boolean;
  /** Selected roof window (roof tool). */
  private declare _roofWinId: string | null;
  /** What the import from the energy dashboard did (shown under its button). */
  private declare _energyNote: string | null;
  /** The cable picked in the energy tool (its key), shown with its points in the plan. */
  private declare _cableId: string | null;
  /** The cables' ways for the plan, computed once per document. */
  private cableCache: { doc: Building; segs: FlowSegment[] } | null = null;
  /** Furniture library: the search text, and which sections are open (built-in groups and packs). */
  /** Devices whose further entities are unfolded in the device list. */
  private declare _expanded: Set<string>;
  /** Short confirmation shown after an action (e.g. closed gaps). */
  private declare _notice: string | null;
  /** Restore points, loaded when the backup section is opened. */
  private declare _history: Snapshot[] | null;
  /** The opt-in reports: their status (null = not loaded, "error" = backend without them). */
  private declare _diag: DiagnosticsStatus | null | "error";
  private declare _diagView: boolean;
  private declare _diagBusy: boolean;
  private declare _diagNote: string;
  /** Open "place spots" form of the selected room. */
  private declare _outdoorId: string | null;
  /** Selected free-standing wall. */
  private declare _wallId: string | null;
  /** Selected room wall (id from generateWalls), to set its height. */
  /** Edge of the selected room highlighted from the wall height list. */
  private declare _edgeHi: number | null;
  /** The wall view: a room's wall seen from the front (what stands and hangs on it), and the piece chosen in it. */
  private declare _wallView: { roomId: string; edge: number } | null;
  private declare _wallSel: string | null;
  /** Wall view: several pieces chosen together (shift-click, a frame); empty = the usual single choice. */
  private declare _wallMulti: string[];
  /** Wall view: one part of a block moved on its own ("Nur dieses Teil"). */
  private declare _wallSingle: boolean;
  /** Wall view: the free stretch of wall tapped (from s0 to s1 along the wall; low = standing pieces, else hanging). */
  private declare _wallGap: { s0: number; s1: number; low: boolean } | null;
  /** Wall view side bar: the category shown and the search text. */
  private declare _wallCat: string | null;
  private declare _wallQuery: string;
  /** Wall view: the frame being drawn (view coordinates). */
  private declare _wallFrame: { x0: number; y0: number; x1: number; y1: number } | null;
  private declare _wallPicTick: number;
  /** The toolbar's wall view button is on: the next tap on a wall in the plan opens it. */
  private declare _wallPick: boolean;
  /** Pool Pro in the wall view: laying a pipe, or placing a ball valve or sight glass on one. */
  private declare _runMode: "draw" | "valve" | "sight" | "hole_wall" | "hole_floor" | "tee" | "y" | "feed" | "erase" | null;
  /** Pool Pro, "Technik zeichnen": the wall view draws the technical room (devices, lines from outside, pipes). */
  private declare _techMode: boolean;
  /** The pool line being brought in ("skimmer", "drain", "inlet", "waste"): the next tap on the wall places it. */
  private declare _feedKind: string | null;
  /** Where a press in the drawing went down (a drag from there draws a pipe to where it is let go). */
  private techPress: { s: number; y: number } | null = null;
  /** The pen: the stroke under the pointer (wall coordinates), made into a pipe with right angles when let go. */
  private techStroke: { s: number; y: number }[] | null = null;
  /** A stroke ended on nothing: the pipe is laid with a loose end, and the side bar offers where the line could go. */
  private declare _techAsk: { s: number; y: number; pipe: string } | null;
  /** The zoomed part of the 2D wall view (svg units), per wall; null: the whole wall. */
  private wvZoom: { key: string; k: number; x0: number; y0: number } | null = null;
  /** Touch points on the 2D wall view, and a two-finger zoom under way. */
  private wvTouch = new Map<number, { x: number; y: number }>();
  private wvPinch: { d: number; mx: number; my: number; k: number; x0: number; y0: number } | null = null;
  /** A touch while drawing waits for its release (a second finger makes it a zoom instead of a point). */
  private wvTap: { s: number; y: number } | null = null;
  private wvScale = 1;
  /** The wall about to be picked opens straight in "Technik zeichnen" (asked from the pool tool). */
  private techPick = false;
  /** Pool Pro: the part whose card is open ("dev:<id>", "joint:<id>", "port:<id>") and its pool. */
  private declare _card: { pool: string; part: string } | null;
  /** The card's open connection being joined: its target and stops. */
  private declare _cardJoin: { port: string; to: string; vias: ConnectVia[] } | null;
  /** Pool Pro: a T- or Y-piece waiting for a tap in the plan (on a pipe it is put into the pipe). */
  private declare _jointPlace: "tee" | "y" | null;
  /** Pool Pro: the connection being put together in the pool tool (from, its stops, one or two ends). */
  private declare _conn: { from: string; vias: ConnectVia[]; to: string; to2: string };
  private declare _runDraft: RunDraft | null;
  /** The chosen pipe in the wall view and its chosen point. */
  private declare _runSel: { pipe: string; pt: number | null } | null;
  /** A pipe point being dragged in the wall view, and where the pointer is while laying a pipe. */
  private runDrag: { pipe: string; i: number; d: number; base: Building; moved: boolean } | null = null;
  private runHover: [number, number] | null = null;
  /** A T-/Y-piece or hole being dragged in the wall view (along the wall and up or down; a hole in the floor along only). */
  private jointDrag: { id: string; d: number; base: Building; moved: boolean } | null = null;
  /** A ball valve or sight glass being dragged along its pipe (a tap without moving opens or closes a valve). */
  private fitDrag: { pipe: string; id: string; base: Building; moved: boolean; x: number; y: number } | null = null;
  /** The wall shown in the 3D wall view, for laying pipes there. */
  private runCtx3d: RunCtx | null = null;
  /** The wall view stands in the room in 3D (true) or shows the wall flat from the front. */
  private declare _wallView3d: boolean;
  /** The 3D view of the wall view and the wall its camera was last set up for. */
  private wall3dEl: HTMLElement | null = null;
  private wall3dKey = "";
  /** The height handle over the chosen piece in the 3D wall view (screen position, height text), and a lift in progress. */
  private liftRaf = 0;
  private lift: { id: string; y: number; startY: number; perPx: number; base: Building; top: number; moved: boolean } | null = null;
  /** Wall view: a size handle being dragged (side l/r = width along the wall, t/b = top or bottom edge). */
  private wallResize: { id: string; side: "l" | "r" | "t" | "b"; x0: number; x1: number; y0: number; y1: number; base: Building; moved: boolean } | null = null;
  private wallDrag: { id: string; ids?: string[]; w?: number; x: number; y: number; base: Building; s0: number; y0: number; lift: boolean; moved: boolean } | null = null;
  /** Front pictures of the pieces in the wall view, by type, size and turn (null: none to draw); asked for once. */
  private wallPics = new Map<string, { url: string; x0: number; x1: number; y0: number; y1: number } | null>();
  private wallPicsAsked = new Set<string>();
  private declare _shiftX: number;
  /** Shift and turn take every floor with them (roof, outdoor areas, cables, hologram included). */
  private declare _shiftAll: boolean;
  /** The background picture is being moved and scaled in the plan (drag it, pull its corner). */
  private declare _bgEdit: boolean;
  /** Scale the background with a ruler (#183): null = off, else the points tapped so far (two = waiting for the length). */
  private declare _bgRuler: Vec2[] | null;
  private declare _bgRulerLen: number;
  /** Straighten the background: two taps along a wall that should run straight (null = off). */
  private declare _bgLevel: Vec2[] | null;
  /** The background section is open: the picture has handles like a piece of furniture (move, scale, turn). */
  private declare _bgOpen: boolean;
  private declare _shiftZ: number;
  /** Open context menu (right-click, long press) at a plan point, for one item. */
  private declare _ctx: { x: number; y: number; kind: FixKind; id: string } | null;
  /** A drag on a fixed item was turned into panning: the hint line says why. */
  private declare _fixedHint: boolean;
  /** The one-time "draw on a PC or tablet" hint on phones (shown by CSS on narrow screens only). */
  private declare _phoneHint: boolean;
  /** A one-time invitation for admins to switch on the usage reports (while they are off and it was not closed). */
  private declare _diagInvite: boolean;
  private diagInviteChecked = false;
  private fixedPan = false;
  /** Frame the 3D half again after the next render (the roof tool shows the whole house). */
  private reframe3d = false;
  private pressTimer = 0;
  private pressStart: [number, number] | null = null;
  /** The "add floor" menu with the floors of Home Assistant is open. */
  private declare _floorMenu: boolean;
  /** Kind of opening the opening tool places (the last one chosen). */
  private declare _openingPreset: OpeningPreset;
  /** Length typed for the next wall when drawing by measure, and the size for "rectangle by size". */
  private declare _measureLen: number;
  /** The package list of the selected room is open. */
  private declare _packages: boolean;
  private declare _rectSize: [number, number];
  private declare _spots: { type: FurnitureType; rows: number; cols: number; entity: string | null } | null;
  private declare _tool: Tool;
  /** The toolbar menu open (its group), and which tool's choices are unfolded in it. */
  private declare _toolMenu: string | null;
  /** The ⚙ menu in the toolbar is open; the global settings dialog shown (its topic). */
  private declare _settingsMenu: boolean;
  /** Width of the side bar (px), dragged at its left edge and remembered per browser (#620). */
  private declare _sideWidth: number;
  /** What the last module import said (the ⚙ Module dialog). */
  private declare _moduleMsg: { ok: boolean; text: string } | null;
  private sideDrag: { x: number; width: number } | null = null;
  private declare _settingsDialog: SettingsTopic | null;
  private declare _toolOpen: Tool | null;
  /** The view menu of the toolbar (fit, 3D beside, wall view, lock) is open. */
  private declare _viewMenu: boolean;
  private declare _draft: Vec2[];
  /** Outdoor tool: corner by corner like a free-form room instead of a dragged rectangle (#97). */
  private declare _outdoorFree: boolean;
  /** What the outdoor tool draws next (lawn, terrace, pool …), chosen before drawing. */
  private declare _outdoorType: OutdoorType;
  /** Pools: the shape drawn next (rectangle, round, oval or free). */
  private declare _poolShape: "rect" | "round" | "oval" | "free";
  /** Pool tool: drawing a pipe (tap a node, corner points, the end node) and the pipe being drawn. */
  private declare _pipeMode: boolean;
  /** A pipe being drawn in the plan: from a node, or on from a pipe's loose end (laid on a wall, down into the floor). */
  private declare _pipeDraft: { from: string; points: Vec2[]; extend?: { pipe: string; end: "from" | "to"; at: Vec2 } } | null;
  /** Pool tool: the selected pipe (its corner points can be dragged). */
  private declare _pipeId: string | null;
  private declare _cursor: Vec2 | null;
  private declare _guides: Guides;
  private declare _view: { scale: number; ox: number; oy: number };
  private declare _size: { w: number; h: number };
  private declare _images: Record<string, { url: string; aspect: number }>;
  private declare _canUndo: boolean;
  private declare _canRedo: boolean;

  private past: string[] = [];
  private future: string[] = [];
  private drag: Drag | null = null;
  private pointers = new Map<number, [number, number]>();
  private pinch: { dist: number; mid: [number, number] } | null = null;
  private fitted = false;
  /** The view fit() set last (the plan follows size changes until it is moved). */
  private fittedView: unknown = null;
  private resizeObserver?: ResizeObserver;
  private loadingImages = new Set<string>();

  constructor() {
    super();
    this.narrow = false;
    this._floorId = null;
    this._roomId = null;
    this._vertex = null;
    this._openingId = null;
    this._furnitureId = null;
    this._multi = [];
    this._single = false;
    this._multiMode = false;
    this._deviceId = null;
    this._deviceQuery = "";
    this._devSource = "area";
    this._roofId = null;
    this._solarId = null;
    this._solarPick = false;
    this._roofWinId = null;
    this._energyNote = null;
    this._cableId = null;
    this._expanded = new Set();
    this._notice = null;
    this._history = null;
    this._diag = null;
    this._diagView = false;
    this._diagBusy = false;
    this._diagNote = "";
    this._spots = null;
    this._outdoorId = null;
    this._wallId = null;
    this._edgeHi = null;
    this._wallView = null;
    this._techMode = false;
    this._feedKind = null;
    this._techAsk = null;
    this._wallSel = null;
    this._wallMulti = [];
    this._wallSingle = false;
    this._wallGap = null;
    this._wallCat = null;
    this._wallQuery = "";
    this._wallFrame = null;
    this._wallPicTick = 0;
    this._wallPick = false;
    this._runMode = null;
    this._runDraft = null;
    this._runSel = null;
    this._conn = { from: "", vias: [], to: "", to2: "" };
    this._jointPlace = null;
    this._card = null;
    this._cardJoin = null;
    this._wallView3d = (() => {
      try {
        return localStorage.getItem("neonplan3d.wall3d") !== "0";
      } catch {
        return true;
      }
    })();
    this._shiftX = 0;
    this._shiftAll = false;
    this._bgEdit = false;
    this._bgRuler = null;
    this._bgRulerLen = 0;
    this._bgLevel = null;
    this._bgOpen = false;
    this._shiftZ = 0;
    this._floorMenu = false;
    this._openingPreset = "door";
    this._phoneHint = true;
    this._diagInvite = false;
    try {
      this._phoneHint = localStorage.getItem("neonplan3d.phoneHint") !== "0";
    } catch {
      // no storage: shown until closed
    }
    let split = false;
    try {
      split = localStorage.getItem("neonplan3d.editor3d") === "1";
    } catch {
      // no storage
    }
    this._split = split;
    this._splitRatio = 0.55;
    try {
      const saved = Number(localStorage.getItem("neonplan3d.editorSplit"));
      if (saved >= 20 && saved <= 80) this._splitRatio = saved / 100;
    } catch {
      /* no storage */
    }
    this._backupBusy = false;
    // the 3D pane's wall view stays as it was last set on this device (#309)
    this._wall3d = "cut";
    try {
      if (localStorage.getItem("neonplan3d.walls3d") === "auto") this._wall3d = "auto";
    } catch {
      // no storage: the default
    }
    this._doc3d = this._doc;
    this._sideOpen = false;
    let pinned = true;
    try {
      pinned = localStorage.getItem("neonplan3d.sidePinned") !== "0";
    } catch {
      // no storage
    }
    this._sidePinned = pinned;
    let min = false;
    try {
      min = localStorage.getItem("neonplan3d.sideMin") === "1";
    } catch {
      // no storage
    }
    this._sideMin = min;
    this._preview = null;
    this._measureLen = 3;
    this._packages = false;
    this._rectSize = [4, 3];
    this._tool = "select";
    this._toolMenu = null;
    this._settingsMenu = false;
    let width = 320;
    try {
      width = Number(localStorage.getItem("neonplan3d.sideWidth")) || 320;
    } catch {
      // no storage: the default width
    }
    this._sideWidth = Math.min(640, Math.max(280, width));
    this._moduleMsg = null;
    this._settingsDialog = null;
    this._toolOpen = null;
    this._viewMenu = false;
    this._draft = [];
    this._outdoorFree = false;
    this._outdoorType = "lawn";
    this._poolShape = "rect";
    this._pipeMode = false;
    this._pipeDraft = null;
    this._pipeId = null;
    this._cursor = null;
    this._guides = {};
    this._view = { scale: 50, ox: 40, oy: 40 };
    this._size = { w: 800, h: 600 };
    this._images = {};
    this._canUndo = false;
    this._canRedo = false;
  }

  private t(key: I18nKey, vars?: Record<string, string | number>): string {
    return translate(this.hass, key, vars);
  }

  // ------------------------------------------------------------------ lifecycle

  connectedCallback(): void {
    super.connectedCallback();
    window.addEventListener("keydown", this.onKey);
    window.addEventListener("keyup", this.onShift);
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    window.removeEventListener("keydown", this.onKey);
    window.removeEventListener("keyup", this.onShift);
    this.resizeObserver?.disconnect();
  }

  protected willUpdate(changed: PropertyValues): void {
    // this bundle keeps its own pack registry – and its own language table, so it fetches the language itself
    if (changed.has("packs")) setPacks(this.packs ?? []);
    // the modules of the packs (Pool Pro's fields and pipe rules, the voice sentences) are loaded here too: an
    // import in the editor must not wait for the 3D view
    if ((changed.has("packs") || changed.has("hass")) && this.hass && this.packs?.some((p) => p.module)) void syncModules(this.hass, this.packs).then(() => this.requestUpdate());
    if (changed.has("_doc")) setTerrain(this._doc);
    if (changed.has("hass") && this.hass && !languageReady(this.hass.language)) void loadLanguage(this.hass.language).then(() => this.requestUpdate());
    // the 3D pane and the wall view's 3D both show the draft (otherwise a piece moved in the wall view jumps back)
    if (changed.has("_doc") && (this._split || this._wallView)) this.queue3d();
    if ((changed.has("_split") && this._split) || (changed.has("_wallView") && this._wallView)) this._doc3d = this._doc;
    if (changed.has("_runDraft") && this._wallView) this._doc3d = this.docWithDraft();
    if (changed.has("_tool") && this.houseTool && !this._split && !this.narrow) this._split = true;
    // entering or leaving the roof tool: the 3D half frames the whole house (or the floor) again
    if (changed.has("_tool") && (this.houseTool || changed.get("_tool") === "roof" || changed.get("_tool") === "energy")) this.reframe3d = true;
    if (changed.has("building") && this.building !== this._doc) {
      this._doc = this.building;
      this._doc3d = this.building;
      // the first plan: the floor chosen in the house settings (D418), else the first of the list
      const start = this._doc.settings.editor_floor;
      if (this._floorId === null && start && this._doc.floors.some((f) => f.id === start)) this._floorId = start;
      if (!this._doc.floors.some((f) => f.id === this._floorId)) this._floorId = this._doc.floors[0]?.id ?? null;
      if (!this.floor?.rooms.some((r) => r.id === this._roomId)) this._roomId = null;
    }
  }

  protected firstUpdated(): void {
    const stage = this.renderRoot.querySelector(".fp3d-canvas-wrap") as HTMLElement;
    this.resizeObserver = new ResizeObserver(() => {
      this._size = { w: stage.clientWidth, h: stage.clientHeight };
      // a plan nobody has moved since it was fitted stays fitted (the 3D half opening beside the roof tool)
      if ((!this.fitted || this._view === this.fittedView) && this._size.w > 0) {
        this.fitted = true;
        this.fit();
      }
    });
    this.resizeObserver.observe(stage);
  }

  /** Hand the draft to the 3D pane a moment after the last change (a drag changes it many times a second). */
  private queue3d(): void {
    clearTimeout(this.doc3dTimer);
    this.doc3dTimer = setTimeout(() => (this._doc3d = this.docWithDraft()), 150);
  }

  /** Dragging the divider between the plan and the 3D pane changes their share of the width. */
  private onSplitDown(e: PointerEvent): void {
    const pair = (e.currentTarget as HTMLElement).parentElement!;
    const handle = e.currentTarget as HTMLElement;
    handle.setPointerCapture(e.pointerId);
    const rect = pair.getBoundingClientRect();
    const move = (ev: PointerEvent) => {
      this._splitRatio = Math.min(0.8, Math.max(0.2, (ev.clientX - rect.left) / rect.width));
    };
    const up = () => {
      handle.removeEventListener("pointermove", move);
      handle.removeEventListener("pointerup", up);
      handle.removeEventListener("pointercancel", up);
      try {
        localStorage.setItem("neonplan3d.editorSplit", String(Math.round(this._splitRatio * 100)));
      } catch {
        /* no storage */
      }
    };
    handle.addEventListener("pointermove", move);
    handle.addEventListener("pointerup", up);
    handle.addEventListener("pointercancel", up);
    e.preventDefault();
  }

  private toggleSplit(): void {
    this._split = !this._split;
    try {
      localStorage.setItem("neonplan3d.editor3d", this._split ? "1" : "0");
    } catch {
      // no storage: the choice lasts for this page
    }
  }

  /** Furnishing in the 3D pane: the item moved there is moved in the draft (undoable, saved with the plan). */
  private onFurnitureMoved3d(e: CustomEvent<{ id: string; x: number; z: number }>): void {
    const { id, x, z } = e.detail;
    const wall = this._doc.settings.wall_interior;
    // a part of a block (or of a multi selection) takes the others along by the same step
    const sel = this._wallView ? this.wallSelection() : this._furnitureId ? this.selection() : [];
    const together = sel.includes(id) && sel.length > 1 ? sel : [];
    if (together.length) {
      const f = this.floor?.furniture.find((m) => m.id === id);
      if (!f || together.some((x2) => this.isFixedItem("furniture", x2))) return;
      const dx = round(x - f.x);
      const dz = round(z - f.z);
      const ids = new Set(together);
      this.change((_, floor) => {
        for (const m of floor.furniture) if (ids.has(m.id)) Object.assign(m, { x: round(m.x + dx), z: round(m.z + dz) });
      });
      return;
    }
    this.change((doc) => {
      for (const floor of doc.floors) {
        const f = floor.furniture.find((m) => m.id === id);
        if (!f) continue;
        // the item stays in its room (no dragging through walls)
        const [kx, kz] = keepInRoom(floor, f.x, f.z, x, z);
        const [nx, nz] = clampIntoRoom(floor, f, kx, kz, wall);
        const was = snapToWall(floor, f, wall);
        const gapBefore = was ? Math.hypot(was.x - f.x, was.z - f.z) : Infinity;
        Object.assign(f, { x: nx, z: nz });
        const snap = snapToWall(floor, f, wall);
        // pulled away from the wall (a fridge 15 cm forward): it stays where it was put instead of snapping back
        if (snap && Math.hypot(snap.x - nx, snap.z - nz) <= gapBefore + 0.01) Object.assign(f, snap);
      }
    });
  }

  private onDeviceMoved3d(e: CustomEvent<{ id: string; x: number; z: number }>): void {
    const { id, x, z } = e.detail;
    this.change((doc) => {
      for (const floor of doc.floors) {
        const p = floor.placements.find((d) => d.entity_id === id);
        if (!p) continue;
        const [nx, nz] = keepInRoom(floor, p.x, p.z, x, z);
        Object.assign(p, { x: nx, z: nz });
      }
    });
  }

  /** Bar under the 3D pane: turn or delete the selected item or device (as when furnishing in the panel). */
  private render3dBar() {
    if (!this.isAdmin) return nothing;
    const f = this.furnitureItem;
    const d = this.device;
    if (f) {
      const wallItem = canLift(f);
      const num = (key: "w" | "d" | "h", label: string, min = 0.05) => html`<label class="fp3d-3d-size" title=${this.t(`size_${key}` as I18nKey)}
        >${label}
        <input
          type=${this.unit === "imperial" ? "text" : "number"}
          inputmode="decimal"
          step="0.05"
          min=${min}
          .value=${this.unit === "imperial" ? formatImperial(f[key]) : String(Math.round(f[key] * 100) / 100)}
          @change=${(e: Event) => {
            const v = this.readLen((e.target as HTMLInputElement).value);
            if (v !== null && v >= min) this.updateFurniture({ [key]: Math.round(v * 1000) / 1000 });
          }}
        />
      </label>`;
      return html`<div class="fp3d-3d-bar">
        <span>${furnitureName(this.hass, f.type)}</span>
        ${num("w", this.t("size_short_w"))} ${num("d", this.t("size_short_d"))} ${num("h", this.t("size_short_h"))}
        ${wallItem
          ? html`<label class="fp3d-3d-size" title=${this.t("mount_height")}
              >↕
              <input
                type=${this.unit === "imperial" ? "text" : "number"}
                inputmode="decimal"
                step="0.05"
                min="0"
                .value=${this.unit === "imperial" ? formatImperial(f.mount_y ?? mountBase(this.floor!, f)) : String(Math.round((f.mount_y ?? mountBase(this.floor!, f)) * 100) / 100)}
                @change=${(e: Event) => {
                  const v = this.readLen((e.target as HTMLInputElement).value);
                  if (v !== null && v >= 0) this.updateFurniture({ mount_y: Math.round(Math.min(MAX_MOUNT_Y, v) * 1000) / 1000 });
                }}
              />
            </label>`
          : nothing}
        <button class="fp3d-chip" @click=${() => this.rotateFurniture(-45)}>↺ 45°</button>
        <button class="fp3d-chip" @click=${() => this.rotateFurniture(45)}>↻ 45°</button>
        ${this.fixButton("furniture", f.id)}
        <button class="fp3d-chip fp3d-danger-chip" @click=${() => this.deleteFurniture()}>${this.t("delete")}</button>
      </div>`;
    }
    if (d) {
      const kind = kindOf(d.entity_id);
      const light = kind === "light";
      const auto = kind ? defaultHeight(kind, this.floor?.height ?? 2.5, light ? (d.mount ?? "ceiling") : null) : 1;
      return html`<div class="fp3d-3d-bar">
        <span>${entityName(this.hass, d.entity_id)}</span>
        ${light
          ? html`<select class="fp3d-3d-select" title=${this.t("lamp_mount")} @change=${(e: Event) => this.updateDevice({ mount: (e.target as HTMLSelectElement).value as LampMount, y: null })}>
              ${(["ceiling", "floor", "table", "wall"] as const).map((m) => html`<option value=${m} ?selected=${m === (d.mount ?? "ceiling")}>${this.t(`lamp_${m}`)}</option>`)}
            </select>`
          : nothing}
        <label class="fp3d-3d-size" title=${this.t("marker_height")}
          >${this.t("size_short_h")}
          <input
            type="number"
            inputmode="decimal"
            step="0.05"
            min="0"
            .value=${String(Math.round((d.y ?? auto) * 100) / 100)}
            @change=${(e: Event) => {
              const v = parseFloat((e.target as HTMLInputElement).value.replace(",", "."));
              if (Number.isFinite(v) && v >= 0) this.updateDevice({ y: Math.round(v * 1000) / 1000 });
            }}
          />
        </label>
        <button class="fp3d-chip" @click=${() => this.updateDevice({ rotation: ((((d.rotation ?? 0) - 45) % 360) + 360) % 360 })}>↺ 45°</button>
        <button class="fp3d-chip" @click=${() => this.updateDevice({ rotation: (((d.rotation ?? 0) + 45) % 360) % 360 })}>↻ 45°</button>
        ${this.fixButton("device", d.entity_id)}
        <button class="fp3d-chip fp3d-danger-chip" @click=${() => this.deleteItem("device", d.entity_id)}>${this.t("delete")}</button>
      </div>`;
    }
    return nothing;
  }

  /** A solar field or roof window grabbed in the 3D pane: its grab point on its face, and the plan before. */
  private grab3d: { id: string; win: boolean; du: number; ds: number; base: Building; moved: boolean } | null = null;

  /** Moves solar fields (energy tool) and roof windows (roof tool) in the 3D pane, along the faces under the pointer. */
  private surfaceGrabber: SurfaceGrab = {
    start: (ray) => this.grab3dStart(ray),
    move: (ray) => this.grab3dMove(ray),
    end: () => {
      const g = this.grab3d;
      this.grab3d = null;
      if (g?.moved) this.pushHistory(g.base);
    },
  };

  private grab3dStart(ray: SurfaceRay): boolean {
    const doc = this._doc;
    const roof = roofFaces(doc);
    let best: { id: string; win: boolean; t: number; du: number; ds: number } | null = null;
    const consider = (id: string, win: boolean, face: RoofFace | null, field: SolarField, locked = false) => {
      if (!face || locked) return;
      const hit = rayOnFace(face, ray.o, ray.d);
      if (!hit || !onField(face, field, hit.u, hit.s) || (best && best.t <= hit.t)) return;
      best = { id, win, t: hit.t, du: hit.u - field.u, ds: hit.s - field.v };
    };
    if (this._tool === "energy") for (const f of doc.settings.roof.solar ?? []) consider(f.id, false, fieldFace(doc, f, roof), f, !!f.locked);
    if (this._tool === "roof") for (const w of doc.settings.roof.windows ?? []) consider(w.id, true, roof.find((x) => x.key === w.face) ?? null, windowAsField(w), !!w.locked);
    if (!best) return false;
    const b = best as { id: string; win: boolean; du: number; ds: number };
    this.grab3d = { id: b.id, win: b.win, du: b.du, ds: b.ds, base: doc, moved: false };
    if (b.win) this._roofWinId = b.id;
    else this.selectSolar(b.id);
    return true;
  }

  private grab3dMove(ray: SurfaceRay): void {
    const g = this.grab3d;
    if (!g) return;
    const doc = g.base;
    const winSrc = g.win ? doc.settings.roof.windows?.find((x) => x.id === g.id) : undefined;
    const src = g.win ? (winSrc ? windowAsField(winSrc) : undefined) : doc.settings.roof.solar?.find((x) => x.id === g.id);
    if (!src) return;
    const own = fieldFace(doc, src);
    // free-standing fields stay on their own level; the others go to the face nearest under the pointer
    const faces = own?.unbounded ? [own] : g.win ? roofFaces(doc) : [...roofFaces(doc), ...wallFaces(doc)];
    let best: { face: RoofFace; t: number; u: number; s: number } | null = null;
    for (const face of faces) {
      const hit = rayOnFace(face, ray.o, ray.d);
      if (hit && onFace(face, hit.u, hit.s) && (!best || hit.t < best.t)) best = { face, ...hit };
    }
    if (!best) return;
    const face = best.face;
    const step = 0.05;
    const snapTo = (v: number) => round(Math.round(v / step) * step);
    const kept = clampField(face, { ...src, face: face.key, u: snapTo(best.u - g.du), v: snapTo(best.s - g.ds), tilt: face.flat ? (src.tilt ?? 15) : src.tilt });
    g.moved = true;
    this.change(
      (d) => {
        if (g.win) {
          const w = d.settings.roof.windows?.find((x) => x.id === g.id);
          if (w) Object.assign(w, { face: face.key, ...kept });
          return;
        }
        const f = d.settings.roof.solar?.find((x) => x.id === g.id);
        if (f) Object.assign(f, { face: face.key, ...kept }, face.flat && f.tilt == null ? { tilt: 15 } : {});
      },
      g.base,
      false,
    );
  }

  /** Tools that work on the whole house (roof, solar): the 3D pane shows all floors with the roof. */
  private get houseTool(): boolean {
    return this._tool === "roof" || this._tool === "energy";
  }

  private render3d() {
    return html`<div class="fp3d-editor-3d">
      ${this.houseTool
        ? nothing
        : html`<div class="fp3d-seg fp3d-3d-walls">
            <button aria-pressed=${this._wall3d === "auto"} @click=${() => this.setWall3d("auto")}>${this.t("walls_auto")}</button>
            <button aria-pressed=${this._wall3d === "cut"} @click=${() => this.setWall3d("cut")}>${this.t("walls_cut")}</button>
          </div>`}
      ${this.render3dBar()}
      <fp3d-view3d
              .walkable=${false}
        .pivotMark=${true}
        .hass=${this.hass}
        .building=${this._doc3d}
        .floorId=${this.houseTool ? null : this._floorId}
        .roomId=${null}
        .wallMode=${this.houseTool ? "auto" : this._wall3d}
        .explode=${false}
        .keepRoof=${this._tool === "roof" || this._tool === "energy"}
        .markerMode=${"important"}
        .heatMode=${"none"}
        .theme=${"neon"}
        .packs=${this.packs}
        .showEnergy=${false}
        .holograms=${this._tool === "energy" ? true : null}
        .flows=${false}
        ?furnish=${this.isAdmin}
        .surfaceGrab=${this.isAdmin && this.houseTool ? this.surfaceGrabber : null}
        .furnishTypes=${this._tool === "energy" ? ENERGY_DEVICES : this._tool === "roof" ? [] : null}
        .selectedFurniture=${this._furnitureId}
        .selectedDevice=${this._deviceId}
        .quality=${"auto"}
        .floorThumbs=${false}
        .roomLabels=${true}
        .floorStack=${this.houseTool ? "stacked" : "single"}
        .panelOpen=${false}
        .alerts=${false}
        .scenes=${false}
        @furniture-select=${(e: CustomEvent<{ id: string | null }>) => {
          if (e.detail.id) this.selectFrom3d("furniture", e.detail.id);
          else if (this._furnitureId) this.selectFrom3d("furniture", null);
        }}
        @furniture-move=${this.onFurnitureMoved3d}
        @device-select=${(e: CustomEvent<{ id: string | null }>) => {
          if (e.detail.id) this.selectFrom3d("device", e.detail.id);
          else if (this._deviceId) this.selectFrom3d("device", null);
        }}
        @device-move=${this.onDeviceMoved3d}
        @floor-tap=${(e: CustomEvent<{ floorId: string | null }>) => {
          if (e.detail.floorId) this._floorId = e.detail.floorId;
          this._sideOpen = false;
        }}
        @room-tap=${(e: CustomEvent<{ floorId: string; roomId: string | null }>) => {
          if (e.detail.floorId) this._floorId = e.detail.floorId;
          if (e.detail.roomId) this.selectFrom3d("room", e.detail.roomId);
          else this._sideOpen = false;
        }}
      ></fp3d-view3d>
    </div>`;
  }

  private setWall3d(mode: WallMode): void {
    this._wall3d = mode;
    try {
      localStorage.setItem("neonplan3d.walls3d", mode);
    } catch {
      // no storage: not remembered
    }
  }

  /** Once per page: an admin with the usage reports off (and the invitation never closed) is invited. */
  private checkDiagInvite(): void {
    if (this.diagInviteChecked || !this.hass || !this.isAdmin || !released("diagnostics")) return;
    this.diagInviteChecked = true;
    try {
      if (localStorage.getItem("neonplan3d.diagInvite") === "0") return;
    } catch {
      return;
    }
    void getDiagnostics(this.hass)
      .then((d) => (this._diagInvite = !d.enabled))
      .catch(() => undefined);
  }

  private closeDiagInvite(): void {
    this._diagInvite = false;
    try {
      localStorage.setItem("neonplan3d.diagInvite", "0");
    } catch {
      // no storage: gone for this visit
    }
  }

  protected updated(): void {
    this.checkDiagInvite();
    // the settings dialog shows its section unfolded (its summary is hidden there)
    if (this._settingsDialog) for (const d of this.renderRoot.querySelectorAll<HTMLDetailsElement>(".fp3d-dialog details")) d.open = true;
    // the item preview is placed in window coordinates; with the 3D view beside the plan an ancestor becomes its
    // containing block (a transform or filter), so "fixed" no longer means the window: measure and correct once
    const preview = this._preview ? this.renderRoot.querySelector<HTMLElement>(".fp3d-preview") : null;
    if (preview && this._preview) {
      const r = preview.getBoundingClientRect();
      const dx = r.left - this._preview.left;
      const dy = r.top - this._preview.top;
      if (Math.abs(dx) > 1 || Math.abs(dy) > 1) {
        preview.style.left = `${parseFloat(preview.style.left) - dx}px`;
        preview.style.top = `${parseFloat(preview.style.top) - dy}px`;
      }
    }
    // ?selected only sets an option's selectedness until the user picks one in that select; after that a
    // reused <select> (another room, another item) would keep showing the old pick: follow the attribute
    for (const option of this.renderRoot.querySelectorAll<HTMLOptionElement>("select option[selected]")) {
      if (!option.selected) option.selected = true;
    }
    if (this.reframe3d) {
      this.reframe3d = false;
      // after the 3D half got its new floor (and built the roof): frame it
      setTimeout(() => (this.renderRoot.querySelector("fp3d-view3d") as (HTMLElement & { resetView(): void }) | null)?.resetView(), 250);
    }
    const bg = this.floor?.background;
    if (bg && !this._images[bg.image_id] && !this.loadingImages.has(bg.image_id)) void this.loadImage(bg.image_id);
    // thumbnails of the selected screen's stored pictures
    if (this.furnitureItem?.pictures) {
      // thumbnails of every stored picture in the plan (they can be reused on other screens)
      for (const id of this.storedPictures()) {
        if (!this._images[id] && !this.loadingImages.has(id)) void this.loadImage(id);
      }
    }
  }

  // ------------------------------------------------------------------ document helpers

  private get floor(): Floor | undefined {
    return this._doc?.floors.find((f) => f.id === this._floorId);
  }

  private get room(): Room | undefined {
    return this.floor?.rooms.find((r) => r.id === this._roomId);
  }

  private get isAdmin(): boolean {
    return this.hass?.user?.is_admin ?? true;
  }

  /** Replace the document; `base` (the state before the change) goes into the undo history. */
  private setDoc(next: Building, base: Building | null = this._doc): void {
    if (base) {
      this.past.push(JSON.stringify(base));
      if (this.past.length > HISTORY) this.past.shift();
      this.future = [];
    }
    this._doc = next;
    setCameraSensors(next);
    this._canUndo = this.past.length > 0;
    this._canRedo = this.future.length > 0;
    this.dispatchEvent(new CustomEvent("building-changed", { detail: { building: next }, bubbles: true, composed: true }));
  }

  /** Apply a change to a copy of the document (or of `base`) and store it. */
  private change(mutate: (doc: Building, floor: Floor) => void, base: Building = this._doc, history = true): void {
    const next = structuredClone(base);
    const floor = next.floors.find((f) => f.id === this._floorId);
    if (!floor && this._floorId) return;
    mutate(next, floor as Floor);
    syncCameraLooks(next, base);
    this.setDoc(next, history ? base : null);
  }

  private undo(): void {
    const prev = this.past.pop();
    if (!prev) return;
    this.future.push(JSON.stringify(this._doc));
    this.restore(JSON.parse(prev));
  }

  private redo(): void {
    const next = this.future.pop();
    if (!next) return;
    this.past.push(JSON.stringify(this._doc));
    this.restore(JSON.parse(next));
  }

  private restore(doc: Building): void {
    this._doc = doc;
    if (!doc.floors.some((f) => f.id === this._floorId)) this._floorId = doc.floors[0]?.id ?? null;
    if (!this.floor?.rooms.some((r) => r.id === this._roomId)) this._roomId = null;
    this._vertex = null;
    this._canUndo = this.past.length > 0;
    this._canRedo = this.future.length > 0;
    this.dispatchEvent(new CustomEvent("building-changed", { detail: { building: doc }, bubbles: true, composed: true }));
  }

  // ------------------------------------------------------------------ view transform

  private toScreen(p: Vec2): [number, number] {
    const { scale, ox, oy } = this._view;
    return [p[0] * scale + ox, p[1] * scale + oy];
  }

  private toWorld(sx: number, sy: number): Vec2 {
    const { scale, ox, oy } = this._view;
    return [(sx - ox) / scale, (sy - oy) / scale];
  }

  private localPoint(e: PointerEvent | WheelEvent): [number, number] {
    const rect = (this.renderRoot.querySelector("svg") as SVGSVGElement).getBoundingClientRect();
    return [e.clientX - rect.left, e.clientY - rect.top];
  }

  private fit(): void {
    const pts = this.floor?.rooms.flatMap((r) => r.points) ?? [];
    if (this._tool === "outdoor" || this._tool === "pool") for (const a of this.floor?.outdoor ?? []) pts.push(...a.points);
    // the roof tool shows the roof sections too, which reach past the rooms
    if (this._tool === "roof") for (const s of this._doc.settings.roof.sections ?? []) pts.push([s.x0, s.z0], [s.x1, s.z1]);
    const b = pts.length ? bounds(pts) : { x0: 0, z0: 0, x1: 10, z1: 8 };
    const margin = 1.5;
    const w = b.x1 - b.x0 + 2 * margin;
    const h = b.z1 - b.z0 + 2 * margin;
    const scale = Math.max(8, Math.min(400, Math.min(this._size.w / w, this._size.h / h)));
    this._view = {
      scale,
      ox: this._size.w / 2 - ((b.x0 + b.x1) / 2) * scale,
      oy: this._size.h / 2 - ((b.z0 + b.z1) / 2) * scale,
    };
    this.fittedView = this._view;
  }

  /** Bring a plan point to the middle of the plan, zoomed in enough to see a small item there. */
  private showPoint(x: number, z: number): void {
    const scale = Math.max(this._view.scale, 70);
    this._view = { scale, ox: this._size.w / 2 - x * scale, oy: this._size.h / 2 - z * scale };
  }

  private zoomAt(factor: number, sx: number, sy: number): void {
    const { scale, ox, oy } = this._view;
    const next = Math.max(8, Math.min(600, scale * factor));
    const k = next / scale;
    this._view = { scale: next, ox: sx - (sx - ox) * k, oy: sy - (sy - oy) * k };
  }

  // ------------------------------------------------------------------ snapping

  private snap(p: Vec2, skip?: { roomId: string; index?: number }, free = false): Vec2 {
    this._guides = {};
    if (free) return p;
    const thr = SNAP_PX / this._view.scale;
    const rooms = this.floor?.rooms ?? [];
    const others: Vec2[] = [];
    for (const r of rooms) {
      r.points.forEach((q, i) => {
        if (skip && r.id === skip.roomId && (skip.index === undefined || skip.index === i)) return;
        others.push(q);
      });
    }
    // 1. corners of rooms
    let best: Vec2 | null = null;
    let bestD = thr;
    for (const q of others) {
      const d = Math.hypot(q[0] - p[0], q[1] - p[1]);
      if (d < bestD) {
        bestD = d;
        best = q;
      }
    }
    if (best) {
      this._guides = { point: best };
      return [best[0], best[1]];
    }
    // 2. edges of other rooms (so walls can meet in a T)
    for (const r of rooms) {
      if (skip && r.id === skip.roomId) continue;
      for (let i = 0; i < r.points.length; i++) {
        const a = r.points[i];
        const b = r.points[(i + 1) % r.points.length];
        const dx = b[0] - a[0];
        const dz = b[1] - a[1];
        const l2 = dx * dx + dz * dz;
        if (l2 < 1e-9) continue;
        const t = ((p[0] - a[0]) * dx + (p[1] - a[1]) * dz) / l2;
        if (t <= 0 || t >= 1) continue;
        const q: Vec2 = [a[0] + t * dx, a[1] + t * dz];
        const d = Math.hypot(q[0] - p[0], q[1] - p[1]);
        const g = this._doc.settings.grid;
        if (Math.abs(dz) < 1e-9) q[0] = Math.min(Math.max(Math.round(q[0] / g) * g, Math.min(a[0], b[0])), Math.max(a[0], b[0]));
        if (Math.abs(dx) < 1e-9) q[1] = Math.min(Math.max(Math.round(q[1] / g) * g, Math.min(a[1], b[1])), Math.max(a[1], b[1]));
        if (d < bestD) {
          bestD = d;
          best = q;
        }
      }
    }
    if (best) {
      this._guides = { point: best };
      return [round(best[0]), round(best[1])];
    }
    // 3. grid, with alignment to other corners per axis
    const g = this._doc.settings.grid;
    const out: Vec2 = [round(Math.round(p[0] / g) * g), round(Math.round(p[1] / g) * g)];
    let ax = thr;
    let az = thr;
    const guides: Guides = {};
    for (const q of others) {
      if (Math.abs(q[0] - p[0]) < ax) {
        ax = Math.abs(q[0] - p[0]);
        out[0] = q[0];
        guides.x = q[0];
      }
      if (Math.abs(q[1] - p[1]) < az) {
        az = Math.abs(q[1] - p[1]);
        out[1] = q[1];
        guides.z = q[1];
      }
    }
    this._guides = guides;
    return out;
  }

  // ------------------------------------------------------------------ pointer input

  private onPointerDown(e: PointerEvent): void {
    this._ctx = null;
    this._fixedHint = false;
    this.fixedPan = false;
    this.pointerDown(e);
    if (this.pointers.size !== 1) {
      clearTimeout(this.pressTimer);
      return;
    }
    this.guardFixed(this.localPoint(e));
    clearTimeout(this.pressTimer);
    this.pressStart = null;
    if (e.pointerType === "touch" && (this._tool === "select" || this._tool === "furniture")) {
      const at = this.localPoint(e);
      const target = e.target as Element;
      this.pressStart = at;
      this.pressTimer = window.setTimeout(() => {
        const d = this.drag;
        if (d && "moved" in d && d.moved) return;
        this.drag = null;
        this.openContext(target, at);
      }, 550);
    }
  }

  /** A drag that would move a fixed item pans the view instead (the item stays selected). */
  private guardFixed(local: [number, number]): void {
    const d = this.drag;
    if (!d) return;
    let target: [FixKind, string] | null = null;
    if (d.kind === "vertex" || d.kind === "room") target = ["room", d.roomId];
    else if (d.kind === "device" || d.kind === "aim") target = ["device", d.entityId];
    else if (d.kind === "opening") target = ["opening", d.id];
    else if (d.kind === "furniture" || d.kind === "rotate" || d.kind === "resize") target = ["furniture", d.id];
    else if (d.kind === "furnset") target = ["furniture", d.ids.find((id) => this.isFixedItem("furniture", id)) ?? d.ids[0]];
    else if (d.kind === "wallmove") target = ["wall", d.id];
    else if (d.kind === "outdoor") target = ["outdoor", d.id];
    if (!target || !this.isFixedItem(...target)) return;
    if ("moved" in d && d.moved && "base" in d) this.restoreLive(d.base);
    this.drag = { kind: "pan", last: local };
    this.fixedPan = true;
  }

  private pointerDown(e: PointerEvent): void {
    const svgEl = e.currentTarget as SVGSVGElement;
    svgEl.setPointerCapture(e.pointerId);
    const local = this.localPoint(e);
    this.pointers.set(e.pointerId, local);
    if (this.pointers.size === 2) {
      // second finger: cancel the current gesture and pinch instead
      if (this.drag && EDIT_DRAGS.has(this.drag.kind) && "moved" in this.drag && this.drag.moved && "base" in this.drag) this.restoreLive(this.drag.base);
      this.drag = null;
      this.pinch = this.pinchState();
      return;
    }
    if (this.pointers.size > 2) return;
    if (e.button === 1 || e.button === 2 || !this.floor) {
      // the right button: dragged it moves the plan, a click without moving opens the item's menu (D518)
      if (e.button === 2) this.rightPress = { at: local, target: e.target as Element, moved: false };
      this.drag = { kind: "pan", last: local };
      return;
    }
    const world = this.toWorld(...local);
    const target = e.target as Element;
    if (this._wallPick) {
      this.pickWall(world);
      return;
    }
    if (this._bgLevel && this.isAdmin && this.floor?.background) {
      // straighten: the second tap turns the picture so the tapped wall runs exactly along x or z
      const pts = [...this._bgLevel, world];
      if (pts.length < 2) this._bgLevel = pts;
      else this.applyBgLevel(pts[0], pts[1]);
      return;
    }
    if (this.bgHandles() && this.floor.background && target.closest("[data-bg-rotate]")) {
      const bg = this.floor.background;
      const img = this._images[bg.image_id];
      const h = bg.width * (img?.aspect ?? 1);
      const c: Vec2 = [bg.x + bg.width / 2, bg.z + h / 2];
      this.drag = { kind: "bgrotate", base: this._doc, moved: false, start: Math.atan2(world[1] - c[1], world[0] - c[0]), rot: bg.rotation ?? 0 };
      return;
    }
    if (this._bgRuler && this._bgRuler.length < 2 && this.isAdmin && this.floor?.background) {
      // the ruler: two taps on a stretch of known length in the picture
      this._bgRuler = [...this._bgRuler, world];
      return;
    }
    if (this.bgHandles() && this.floor.background && !this._bgEdit && (target.closest("[data-bg-handle]") || target.closest("[data-bg]"))) {
      // the background section is open: the picture moves and scales like furniture
      const bg = this.floor.background;
      this.drag = target.closest("[data-bg-handle]")
        ? { kind: "bgscale", base: this._doc, moved: false }
        : { kind: "bgmove", start: world, bx: bg.x, bz: bg.z, base: this._doc, moved: false };
      return;
    }
    if (this._bgEdit && this.isAdmin && this.floor?.background) {
      // the background picture: its corner scales it, its body moves it; anything else ends the editing
      const bg = this.floor.background;
      if (target.closest("[data-bg-handle]")) {
        this.drag = { kind: "bgscale", base: this._doc, moved: false };
        return;
      }
      if (target.closest("[data-bg]")) {
        this.drag = { kind: "bgmove", start: world, bx: bg.x, bz: bg.z, base: this._doc, moved: false };
        return;
      }
      this._bgEdit = false;
    }
    if (this._tool === "wall") {
      const start = this.snap(world, undefined, e.altKey);
      this.drag = { kind: "freewall", start, end: start };
      return;
    }
    if (this._tool === "pool" && this.poolDown(e, target, world, local)) return;
    if (this._tool === "roof" || this._tool === "energy") {
      const corner = target.closest("[data-roof-corner]")?.getAttribute("data-roof-corner");
      const vertex = target.closest("[data-roof-vertex]")?.getAttribute("data-roof-vertex");
      const body = target.closest("[data-roof]")?.getAttribute("data-roof");
      const marker = this._tool === "energy" ? target.closest("[data-energy-device]")?.getAttribute("data-energy-device") : null;
      if (marker) {
        // an energy device by its marker (above solar fields on the roof): selected and moved like furniture
        this._solarId = null;
        this.selectItem("furniture", marker);
        this.drag = this.isAdmin ? { kind: "furniture", id: marker, start: world, startScreen: local, base: this._doc, moved: false } : { kind: "pan", last: local };
        return;
      }
      if (this._tool === "energy" && target.closest("[data-holo-pt]")) {
        // the free hologram's handle
        this.drag = this.isAdmin ? { kind: "holopt", base: this._doc, moved: false } : { kind: "pan", last: local };
        return;
      }
      if (this._tool === "energy") {
        const pt = target.closest("[data-cable-pt]")?.getAttribute("data-cable-pt");
        const lockedCable = (id: string) => !!this._doc.settings.roof.cables?.find((c) => c.id === id)?.locked;
        if (pt && this.isAdmin && !lockedCable(pt.slice(0, pt.lastIndexOf(":")))) {
          const i = pt.lastIndexOf(":");
          const id = pt.slice(0, i);
          const index = Number(pt.slice(i + 1));
          // a double click takes the point out (one point stays at least)
          if (this.doubleTap(e, `cable:${pt}`)) {
            this.change((d) => {
              const c = d.settings.roof.cables?.find((x) => x.id === id);
              if (c && c.points.length > 1) c.points.splice(index, 1);
            });
            this.drag = { kind: "pan", last: local };
            return;
          }
          this.drag = { kind: "cablept", id, index, base: this._doc, moved: false };
          return;
        }
        const line = target.closest("[data-cable-line]")?.getAttribute("data-cable-line");
        if (line && this.isAdmin && !lockedCable(line)) {
          // a click on the laid cable puts a new point there and takes it along (piece i lies before point i)
          const index = Number(target.closest("[data-cable-line]")?.getAttribute("data-cable-seg") ?? 0);
          const base = this._doc;
          this.change((d) => {
            const c = d.settings.roof.cables?.find((x) => x.id === line);
            if (c) c.points.splice(index, 0, [round(world[0]), round(world[1])]);
          });
          this.drag = { kind: "cablept", id: line, index, base, moved: true };
          return;
        }
        const cable = target.closest("[data-cable]")?.getAttribute("data-cable");
        if (cable) {
          this._cableId = cable;
          // grabbing an automatic cable lays it by hand right away, with a new point under the pointer to drag
          if (this.isAdmin && this._floorId && !this._doc.settings.roof.cables?.some((c) => c.id === cable)) {
            const base = this._doc;
            this.layCable(cable);
            const laid = this._doc.settings.roof.cables?.find((c) => c.id === cable);
            const mine = this.cableSegments().filter((x) => x.key === cable);
            if (laid && mine.length) {
              const chain: Vec2[] = [[mine[0].a[0], mine[0].a[2]], ...laid.points, [mine[mine.length - 1].b[0], mine[mine.length - 1].b[2]]];
              let index = 0;
              let best = Infinity;
              for (let i = 0; i + 1 < chain.length; i++) {
                const d = distToSegment(world, chain[i], chain[i + 1]);
                if (d < best) {
                  best = d;
                  index = i;
                }
              }
              this.change((d) => {
                const c = d.settings.roof.cables?.find((x) => x.id === cable);
                if (c) c.points.splice(index, 0, [round(world[0]), round(world[1])]);
              });
              this.drag = { kind: "cablept", id: cable, index, base, moved: true };
              return;
            }
          }
          this.drag = { kind: "pan", last: local };
          return;
        }
      }
      const solar = this._tool === "energy" ? target.closest("[data-solar]")?.getAttribute("data-solar") : null;
      const turn = this._tool === "energy" ? target.closest("[data-solar-turn]")?.getAttribute("data-solar-turn") : null;
      if (turn && this.isAdmin) {
        this.drag = { kind: "solarturn", id: turn, base: this._doc, moved: false };
        return;
      }
      if (solar) {
        const cell = target.closest("[data-cell]")?.getAttribute("data-cell");
        // pick mode on the selected field: a tap switches the module on or off
        if (this._solarPick && solar === this._solarId && cell && this.isAdmin) {
          this.toggleSolarCell(cell);
          this.drag = { kind: "pan", last: local };
          return;
        }
        // otherwise: select the field and move it, also onto another roof face
        if (solar !== this._solarId) this._solarPick = false;
        this._solarId = solar;
        this._roofId = null;
        const field = this._doc.settings.roof.solar?.find((x) => x.id === solar);
        const face = field ? (fieldFace(this._doc, field) ?? undefined) : undefined;
        const hit = face ? this.faceHit(face, world) : null;
        const grab = field && hit ? { du: hit.u - field.u, ds: Number.isNaN(hit.s) ? 0 : hit.s - field.v } : null;
        // solar fields are fittings like furniture: the plan lock (rooms, walls, openings) does not hold them
        this.drag = this.isAdmin && !field?.locked ? { kind: "solarmove", id: solar, start: world, startScreen: local, base: this._doc, moved: false, grab } : { kind: "pan", last: local };
        return;
      }
      const win = this._tool === "roof" ? target.closest("[data-roofwin]")?.getAttribute("data-roofwin") : null;
      if (win) {
        this._roofWinId = win;
        this._roofId = null;
        const w = this._doc.settings.roof.windows?.find((x) => x.id === win);
        const face = w ? roofFaces(this._doc).find((f) => f.key === w.face) : undefined;
        const hit = face ? pointOnFace(face, world) : null;
        const grab = w && hit ? { du: hit.u - w.u, ds: hit.s - w.v } : null;
        this.drag = this.isAdmin && !w?.locked ? { kind: "solarmove", id: win, start: world, startScreen: local, base: this._doc, moved: false, grab, win: true } : { kind: "pan", last: local };
        return;
      }
      if (this._tool === "roof") this._roofWinId = null;
      const device = this._tool === "energy" ? target.closest(".fp3d-energy-item")?.getAttribute("data-furniture") : null;
      if (device) {
        // an energy device (inverter, battery, wallbox): selected and moved like furniture
        this._solarId = null;
        this.selectItem("furniture", device);
        this.drag = this.isAdmin ? { kind: "furniture", id: device, start: world, startScreen: local, base: this._doc, moved: false } : { kind: "pan", last: local };
        return;
      }
      if (this._tool === "energy") {
        // beside the fields the energy tool only pans the plan
        this.selectItem("furniture", null);
        this._solarId = null;
        this.drag = { kind: "pan", last: local };
        return;
      }
      if (vertex && this.isAdmin) {
        const [id, idx] = vertex.split(":");
        this.drag = { kind: "roofvertex", id, index: Number(idx), base: this._doc, moved: false };
      } else if (corner && this.isAdmin) {
        const [id, cx, cz] = corner.split(":");
        this.drag = { kind: "roofcorner", id, corner: [cx === "1" ? 1 : 0, cz === "1" ? 1 : 0], base: this._doc, moved: false };
      } else if (body) {
        const fixed = this.roofFixed(this._doc.settings.roof.sections?.find((x) => x.id === body));
        if (fixed && this._roofId === body) this._fixedHint = true;
        this._roofId = body;
        this.drag = this.isAdmin && !fixed ? { kind: "roofmove", id: body, start: world, startScreen: local, base: this._doc, moved: false } : { kind: "pan", last: local };
      } else if (this.isAdmin) {
        this._roofId = null;
        const start = this.snap(world, undefined, e.altKey);
        this.drag = { kind: "rect", start, end: start, roof: true };
      } else this.drag = { kind: "pan", last: local };
      return;
    }
    const drawsPool = this._tool === "pool" && !this._pipeMode;
    if (this._tool === "rect" || ((this._tool === "outdoor" || drawsPool) && !this._outdoorFree) || this._tool === "hole") {
      const start = this.snap(world, undefined, e.altKey);
      this.drag = { kind: "rect", start, end: start, outdoor: this._tool === "outdoor" || drawsPool, hole: this._tool === "hole" };
      return;
    }
    if (this._tool === "polygon" || this._tool === "measure" || ((this._tool === "outdoor" || drawsPool) && this._outdoorFree)) {
      this.drag = { kind: "tap", startScreen: local, last: local, panning: false };
      return;
    }
    if (this._tool === "opening") {
      if (!this.placeOpening(this._openingPreset, local)) this.drag = { kind: "pan", last: local };
      return;
    }
    if (this.isAdmin && (this._tool === "select" || this._tool === "furniture") && (e.shiftKey || this._multiMode)) {
      // several furniture items: shift-click (or the multi mode on touch) adds or removes one, a drag draws a frame
      const fEl = target.closest("[data-furniture]");
      if (fEl) {
        this.toggleMulti(fEl.getAttribute("data-furniture")!);
        this.drag = null;
      } else this.drag = { kind: "marquee", start: world, end: world, add: true };
      return;
    }
    const deviceEl = target.closest("[data-device]");
    if (deviceEl && this.isAdmin) {
      this.drag = { kind: "device", entityId: deviceEl.getAttribute("data-device")!, start: world, startScreen: local, base: this._doc, moved: false };
      return;
    }
    const openingEl = target.closest("[data-opening]");
    if (openingEl) {
      const id = openingEl.getAttribute("data-opening")!;
      this.selectItem("opening", id);
      this.drag = this.isAdmin ? { kind: "opening", id, startScreen: local, base: this._doc, moved: false } : { kind: "pan", last: local };
      return;
    }
    const resizeEl = target.closest("[data-resize]");
    if (resizeEl && this.isAdmin) {
      const [id, sx, sz] = resizeEl.getAttribute("data-resize")!.split(":");
      this.drag = { kind: "resize", id, corner: [sx === "1" ? 1 : -1, sz === "1" ? 1 : -1], base: this._doc, moved: false };
      return;
    }
    const rotateEl = target.closest("[data-rotate]");
    if (rotateEl && this.isAdmin) {
      this.drag = { kind: "rotate", id: rotateEl.getAttribute("data-rotate")!, base: this._doc, moved: false };
      return;
    }
    const aimEl = target.closest("[data-aim]");
    if (aimEl && this.isAdmin) {
      this.drag = { kind: "aim", entityId: aimEl.getAttribute("data-aim")!, base: this._doc, moved: false };
      return;
    }
    const furnitureEl = target.closest("[data-furniture]");
    if (furnitureEl && !target.closest("[data-vertex], [data-mid]")) {
      const id = furnitureEl.getAttribute("data-furniture")!;
      const now = Date.now();
      const twice = this.lastFurnTap?.id === id && now - this.lastFurnTap.t < 400;
      this.lastFurnTap = { id, t: now };
      const f = this.floor.furniture.find((m) => m.id === id);
      if (twice && f?.group) {
        // a double tap into a block: this one part alone
        this.selectItem("furniture", id);
        this._single = true;
      } else if (!this.selection().includes(id) || this._single) {
        this.selectItem("furniture", id);
      }
      const set = this.selection();
      this.drag = !this.isAdmin
        ? { kind: "pan", last: local }
        : set.length > 1
          ? { kind: "furnset", ids: set, start: world, startScreen: local, base: this._doc, moved: false }
          : { kind: "furniture", id, start: world, startScreen: local, base: this._doc, moved: false };
      return;
    }
    const vertexEl = target.closest("[data-vertex]");
    const midEl = target.closest("[data-mid]");
    if (vertexEl && this.room && this.isAdmin) {
      this._vertex = Number(vertexEl.getAttribute("data-vertex"));
      this.drag = { kind: "vertex", roomId: this.room.id, index: this._vertex, base: this._doc, moved: false };
      return;
    }
    if (midEl && this.room && this.isAdmin) {
      const i = Number(midEl.getAttribute("data-mid"));
      const pts = this.room.points;
      const a = pts[i];
      const b = pts[(i + 1) % pts.length];
      const mid: Vec2 = [round((a[0] + b[0]) / 2), round((a[1] + b[1]) / 2)];
      const base = this._doc;
      const roomId = this.room.id;
      // no history here: the pointer-up records the state before the insert
      this.change(
        (_, floor) => {
          const target = floor.rooms.find((r) => r.id === roomId)!;
          target.points.splice(i + 1, 0, mid);
          // both halves of the split edge keep its wall height
          if (target.wall_heights) target.wall_heights.splice(i + 1, 0, target.wall_heights[i] ?? null);
          if (target.wall_thickness) target.wall_thickness.splice(i + 1, 0, target.wall_thickness[i] ?? null);
          const first = Math.hypot(mid[0] - a[0], mid[1] - a[1]);
          if (target.wall_slopes) {
            const sl = target.wall_slopes[i] ?? null;
            const whole = Math.hypot(b[0] - a[0], b[1] - a[1]) || 1;
            const hm = sl ? Math.round((sl[0] + ((sl[1] - sl[0]) * first) / whole) * 1000) / 1000 : 0;
            if (sl) target.wall_slopes[i] = [sl[0], hm];
            target.wall_slopes.splice(i + 1, 0, sl ? [hm, sl[1]] : null);
          }
          for (const o of floor.openings) {
            if (o.room_id !== roomId || o.wall) continue;
            if (o.edge > i) o.edge += 1;
            else if (o.edge === i && o.offset > first) {
              o.edge = i + 1;
              o.offset = round(o.offset - first);
            }
          }
        },
        base,
        false,
      );
      this._vertex = i + 1;
      this.drag = { kind: "vertex", roomId, index: i + 1, base, moved: true };
      return;
    }
    const wallEndEl = target.closest("[data-wall-end]");
    if (wallEndEl && this.isAdmin) {
      const [id, end] = wallEndEl.getAttribute("data-wall-end")!.split(":");
      this.drag = { kind: "wallmove", id, end: end as "a" | "b", start: world, startScreen: local, base: this._doc, moved: false };
      return;
    }
    const freeWallEl = target.closest("[data-free-wall]");
    if (freeWallEl) {
      const id = freeWallEl.getAttribute("data-free-wall")!;
      this.selectItem("wall", id);
      this.drag = this.isAdmin ? { kind: "wallmove", id, end: null, start: world, startScreen: local, base: this._doc, moved: false } : { kind: "pan", last: local };
      return;
    }
    const outBoxEl = target.closest("[data-out-box]");
    if (outBoxEl && this.isAdmin) {
      const [id, i] = outBoxEl.getAttribute("data-out-box")!.split(":");
      this.drag = { kind: "outbox", id, corner: Number(i), base: this._doc, moved: false };
      return;
    }
    const outVertexEl = target.closest("[data-out-vertex]");
    if (outVertexEl && this.isAdmin) {
      const [id, i] = outVertexEl.getAttribute("data-out-vertex")!.split(":");
      this.drag = { kind: "outvertex", id, index: Number(i), base: this._doc, moved: false };
      return;
    }
    const outdoorEl = target.closest("[data-outdoor]");
    if (outdoorEl && !target.closest("[data-room]") && !this.roomAt(world)) {
      // the drawn element is the topmost area; a smaller one under the point (a pool in the lawn) wins
      const id = this.outdoorAt(world) ?? outdoorEl.getAttribute("data-outdoor")!;
      this.selectItem("outdoor", id);
      this.drag = this.isAdmin ? { kind: "outdoor", id, start: world, startScreen: local, base: this._doc, moved: false } : { kind: "pan", last: local };
      return;
    }
    const roomId = target.closest("[data-room]")?.getAttribute("data-room") ?? this.roomAt(world);
    if (roomId) {
      if (roomId !== this._roomId) this._vertex = null;
      this.selectItem("room", roomId);
      this.drag =
        this.isAdmin && this._tool !== "furniture"
        ? { kind: "room", roomId, start: world, startScreen: local, base: this._doc, moved: false }
        : { kind: "pan", last: local };
      return;
    }
    this.selectItem("room", null);
    this.drag = { kind: "pan", last: local };
  }

  private onPointerMove(e: PointerEvent): void {
    if (this.rightPress && !this.rightPress.moved) {
      const p = this.localPoint(e);
      if (Math.hypot(p[0] - this.rightPress.at[0], p[1] - this.rightPress.at[1]) > 5) this.rightPress.moved = true;
    }
    if (this.pressStart) {
      const p = this.localPoint(e);
      if (Math.hypot(p[0] - this.pressStart[0], p[1] - this.pressStart[1]) > 8) {
        clearTimeout(this.pressTimer);
        this.pressStart = null;
        if (this.fixedPan) this._fixedHint = true;
      }
    } else if (this.fixedPan && !this._fixedHint && this.drag?.kind === "pan") this._fixedHint = true;
    const local = this.localPoint(e);
    if (this.pointers.has(e.pointerId)) this.pointers.set(e.pointerId, local);
    if (this.pinch) {
      const now = this.pinchState();
      if (now) {
        this.zoomAt(now.dist / Math.max(1, this.pinch.dist), ...now.mid);
        this._view = { ...this._view, ox: this._view.ox + now.mid[0] - this.pinch.mid[0], oy: this._view.oy + now.mid[1] - this.pinch.mid[1] };
        this.pinch = now;
      }
      return;
    }
    const world = this.toWorld(...local);
    const drag = this.drag;
    if (!drag) {
      if (this._tool !== "select" && this._tool !== "furniture" && this.floor) this._cursor = this.snap(world, undefined, e.altKey);
      return;
    }
    switch (drag.kind) {
      case "pan":
        this._view = { ...this._view, ox: this._view.ox + local[0] - drag.last[0], oy: this._view.oy + local[1] - drag.last[1] };
        drag.last = local;
        break;
      case "tap":
        if (drag.panning || Math.hypot(local[0] - drag.startScreen[0], local[1] - drag.startScreen[1]) > 6) {
          drag.panning = true;
          this._view = { ...this._view, ox: this._view.ox + local[0] - drag.last[0], oy: this._view.oy + local[1] - drag.last[1] };
        }
        drag.last = local;
        break;
      case "rect":
        drag.end = this.snap(world, undefined, e.altKey);
        this.requestUpdate();
        break;
      case "freewall": {
        // Shift keeps the wall straight (horizontal or vertical)
        let end = this.snap(world, undefined, e.altKey);
        if (e.shiftKey) end = Math.abs(end[0] - drag.start[0]) > Math.abs(end[1] - drag.start[1]) ? [end[0], drag.start[1]] : [drag.start[0], end[1]];
        drag.end = end;
        this.requestUpdate();
        break;
      }
      case "wallmove": {
        if (!drag.moved && Math.hypot(local[0] - drag.startScreen[0], local[1] - drag.startScreen[1]) < 5) return;
        drag.moved = true;
        const w = (drag.base.floors.find((f) => f.id === this._floorId)?.walls ?? []).find((q) => q.id === drag.id);
        if (!w) return;
        let next: Pick<FreeWall, "a" | "b">;
        if (drag.end) {
          const p = this.snap(world, undefined, e.altKey);
          next = drag.end === "a" ? { a: p, b: w.b } : { a: w.a, b: p };
        } else {
          const g = e.altKey ? 0.01 : this._doc.settings.grid;
          const dx = Math.round((world[0] - drag.start[0]) / g) * g;
          const dz = Math.round((world[1] - drag.start[1]) / g) * g;
          next = { a: [round(w.a[0] + dx), round(w.a[1] + dz)], b: [round(w.b[0] + dx), round(w.b[1] + dz)] };
        }
        this.change((_, floor) => Object.assign((floor.walls ?? []).find((q) => q.id === drag.id)!, next), drag.base, false);
        break;
      }
      case "vertex": {
        const p = this.snap(world, { roomId: drag.roomId, index: drag.index }, e.altKey);
        drag.moved = true;
        this.change(
          (_, floor) => {
            floor.rooms.find((r) => r.id === drag.roomId)!.points[drag.index] = p;
          },
          drag.base,
          false,
        );
        break;
      }
      case "room": {
        if (!drag.moved && Math.hypot(local[0] - drag.startScreen[0], local[1] - drag.startScreen[1]) < 5) return;
        drag.moved = true;
        const room = drag.base.floors.find((f) => f.id === this._floorId)?.rooms.find((r) => r.id === drag.roomId);
        if (!room) return;
        const delta = this.roomDelta(room, [world[0] - drag.start[0], world[1] - drag.start[1]], e.altKey);
        const baseFloor = drag.base.floors.find((f) => f.id === this._floorId)!;
        // devices inside the room move with it
        const inside = new Set(baseFloor.placements.filter((pl) => pointInPolygon([pl.x, pl.z], room.points)).map((pl) => pl.entity_id));
        this.change(
          (_, floor) => {
            const r = floor.rooms.find((x) => x.id === drag.roomId)!;
            r.points = room.points.map(([x, z]) => [round(x + delta[0]), round(z + delta[1])]);
            floor.placements = baseFloor.placements.map((pl) =>
              inside.has(pl.entity_id) ? { ...pl, x: round(pl.x + delta[0]), z: round(pl.z + delta[1]) } : pl,
            );
          },
          drag.base,
          false,
        );
        break;
      }
      case "roofmove": {
        if (!drag.moved && Math.hypot(local[0] - drag.startScreen[0], local[1] - drag.startScreen[1]) < 5) return;
        drag.moved = true;
        const g = e.altKey ? 0.01 : this._doc.settings.grid;
        const dx = round(Math.round((world[0] - drag.start[0]) / g) * g);
        const dz = round(Math.round((world[1] - drag.start[1]) / g) * g);
        const src = drag.base.settings.roof.sections?.find((x) => x.id === drag.id);
        if (!src) return;
        this.change(
          (doc) => {
            const sec = doc.settings.roof.sections?.find((x) => x.id === drag.id);
            if (!sec) return;
            Object.assign(sec, { x0: round(src.x0 + dx), x1: round(src.x1 + dx), z0: round(src.z0 + dz), z1: round(src.z1 + dz) });
            if (src.pivot) sec.pivot = [round(src.pivot[0] + dx), round(src.pivot[1] + dz)];
            if (src.points) sec.points = src.points.map(([x, z]) => [round(x + dx), round(z + dz)] as Vec2);
          },
          drag.base,
          false,
        );
        break;
      }
      case "solarturn": {
        drag.moved = true;
        const src = drag.base.settings.roof.solar?.find((x) => x.id === drag.id);
        const face = src ? fieldFace(drag.base, src) : null;
        if (!src || !face) return;
        // the handle sits in front of the field: turn its front towards the pointer
        const [cx, cz] = fieldCenter(face, src);
        let a = (Math.atan2(world[0] - cx, -(world[1] - cz)) * 180) / Math.PI;
        const step = e.altKey ? 1 : 15;
        a = Math.round(a / step) * step;
        const turned = turnGroundField(drag.base, src, a);
        this.change(
          (doc) => {
            const f = doc.settings.roof.solar?.find((x) => x.id === drag.id);
            if (f) Object.assign(f, turned);
          },
          drag.base,
          false,
        );
        break;
      }
      case "solarmove": {
        if (!drag.moved && Math.hypot(local[0] - drag.startScreen[0], local[1] - drag.startScreen[1]) < 5) return;
        drag.moved = true;
        const winSrc = drag.win ? drag.base.settings.roof.windows?.find((x) => x.id === drag.id) : undefined;
        const src = drag.win ? (winSrc ? windowAsField(winSrc) : undefined) : drag.base.settings.roof.solar?.find((x) => x.id === drag.id);
        // roof faces, and the walls of the floor the plan shows
        const faces = drag.win ? roofFaces(drag.base) : [...roofFaces(drag.base), ...(this._floorId ? wallFaces(drag.base, this._floorId) : [])];
        const own = src ? fieldFace(drag.base, src, faces) : null;
        if (!src || !own) return;
        const step = e.altKey ? 0.01 : 0.05;
        const snapTo = (v: number) => round(Math.round(v / step) * step);
        // over a roof face the field follows the cursor there (it may change to that face) …
        const hit = own.unbounded ? null : faceAt(faces, world);
        let face = own;
        let u: number;
        let v: number;
        if (hit && drag.grab) {
          face = hit.face;
          u = snapTo(hit.u - drag.grab.du);
          // on a wall the height stays (or starts at head height when the field comes from elsewhere)
          v = Number.isNaN(hit.s) ? (hit.face.key === src.face ? src.v : Math.max(0, hit.face.ls - 1.5)) : snapTo(hit.s - drag.grab.ds);
        } else {
          // … elsewhere it moves along its own face (a slope looks shorter in the plan)
          const dx = world[0] - drag.start[0];
          const dz = world[1] - drag.start[1];
          const es = [own.es[0], own.es[2]];
          const esLen2 = es[0] * es[0] + es[1] * es[1] || 1;
          u = snapTo(src.u + dx * own.eu[0] + dz * own.eu[2]);
          v = snapTo(src.v + (dx * es[0] + dz * es[1]) / esLen2);
        }
        // it never slides off its face
        const kept = clampField(face, { ...src, face: face.key, u, v, tilt: face.flat ? (src.tilt ?? 15) : src.tilt });
        this.change(
          (doc) => {
            if (drag.win) {
              const w = doc.settings.roof.windows?.find((x) => x.id === drag.id);
              if (w) Object.assign(w, { face: face.key, ...kept });
              return;
            }
            const f = doc.settings.roof.solar?.find((x) => x.id === drag.id);
            if (f) Object.assign(f, { face: face.key, ...kept }, face.flat && f.tilt == null ? { tilt: 15 } : {});
          },
          drag.base,
          false,
        );
        break;
      }
      case "outbox": {
        drag.moved = true;
        const p = this.snap(world, undefined, e.altKey);
        const src = drag.base.floors.find((f) => f.id === this._floorId)?.outdoor.find((a) => a.id === drag.id);
        if (!src?.pool_shape) return;
        const b = bounds(src.points);
        const corners: Vec2[] = [[b.x0, b.z0], [b.x1, b.z0], [b.x1, b.z1], [b.x0, b.z1]];
        const fixed = corners[(drag.corner + 2) % 4];
        let dx = p[0] - fixed[0];
        let dz = p[1] - fixed[1];
        if (src.pool_shape === "round") {
          // a circle: the larger of the two pulls decides the diameter
          const d = Math.max(Math.abs(dx), Math.abs(dz), 0.5);
          dx = Math.sign(dx || 1) * d;
          dz = Math.sign(dz || 1) * d;
        } else {
          dx = Math.sign(dx || 1) * Math.max(Math.abs(dx), 0.5);
          dz = Math.sign(dz || 1) * Math.max(Math.abs(dz), 0.5);
        }
        const x0 = Math.min(fixed[0], fixed[0] + dx);
        const x1 = Math.max(fixed[0], fixed[0] + dx);
        const z0 = Math.min(fixed[1], fixed[1] + dz);
        const z1 = Math.max(fixed[1], fixed[1] + dz);
        const shape = src.pool_shape;
        this.change(
          (_, floor) => {
            const a = floor.outdoor.find((x) => x.id === drag.id);
            if (a) a.points = poolShapePoints(shape, round(x0), round(z0), round(x1), round(z1));
          },
          drag.base,
          false,
        );
        break;
      }
      case "pipept": {
        drag.moved = true;
        const q = this.snap(world, undefined, e.altKey);
        this.change(
          (_, floor) => {
            const pipe = floor.outdoor.find((a) => a.id === drag.pool)?.pool?.pipes?.find((x) => x.id === drag.pipe);
            if (pipe) pipe.points[drag.index] = [round(q[0]), round(q[1])];
          },
          drag.base,
          false,
        );
        break;
      }
      case "poolport": {
        drag.moved = true;
        const q = this.snap(world, undefined, e.altKey);
        this.change(
          (_, floor) => {
            const area = floor.outdoor.find((a) => a.id === drag.pool);
            const port = area?.pool?.ports?.find((x) => x.id === drag.id);
            if (!area || !port) return;
            // skimmer and inlets sit on the pool's rim, the drain and the waste drain anywhere
            const [x, z] = port.kind === "skimmer" || port.kind === "inlet" ? nearestOnOutline(area.points, q) : q;
            port.x = round(x);
            port.z = round(z);
          },
          drag.base,
          false,
        );
        break;
      }
      case "pooljoint": {
        if (!drag.moved && Math.hypot(world[0] - drag.start[0], world[1] - drag.start[1]) < 0.05) break;
        drag.moved = true;
        const src = drag.base.floors.flatMap((f) => f.outdoor).find((o) => o.id === drag.pool)?.pool?.joints?.find((j) => j.id === drag.id);
        if (!src) break;
        let q = this.snap([src.x + world[0] - drag.start[0], src.z + world[1] - drag.start[1]], undefined, e.altKey);
        // a hole in a wall stays in its wall: it slides along it
        if (src.kind === "wall") {
          const t: Vec2 = [-(src.nz ?? 0), src.nx ?? 0];
          const k = (q[0] - src.x) * t[0] + (q[1] - src.z) * t[1];
          q = [src.x + t[0] * k, src.z + t[1] * k];
        }
        this.change(
          (d) => {
            const j = d.floors.flatMap((f) => f.outdoor).find((o) => o.id === drag.pool)?.pool?.joints?.find((x) => x.id === drag.id);
            if (j) [j.x, j.z] = [round(q[0]), round(q[1])];
          },
          drag.base,
          false,
        );
        break;
      }
      case "pooldev": {
        if (!drag.moved && Math.hypot(world[0] - drag.start[0], world[1] - drag.start[1]) < 0.05) break;
        drag.moved = true;
        const src = drag.base.floors.flatMap((f) => f.furniture).find((m) => m.id === drag.id);
        if (!src) break;
        const q = this.snap([src.x + world[0] - drag.start[0], src.z + world[1] - drag.start[1]], undefined, e.altKey);
        this.change(
          (d) => {
            const f = d.floors.flatMap((x) => x.furniture).find((m) => m.id === drag.id);
            if (f) [f.x, f.z] = [round(q[0]), round(q[1])];
          },
          drag.base,
          false,
        );
        break;
      }
      case "outvertex": {
        drag.moved = true;
        const p = this.snap(world, undefined, e.altKey);
        const src = drag.base.floors.find((f) => f.id === this._floorId)?.outdoor.find((a) => a.id === drag.id);
        if (!src) return;
        const rect = isAxisRect(src.points);
        this.change(
          (_, floor) => {
            const a = floor.outdoor.find((x) => x.id === drag.id);
            if (!a) return;
            const pts = src.points.map((q) => [...q] as Vec2);
            const i = drag.index;
            const old = src.points[i];
            pts[i] = [round(p[0]), round(p[1])];
            // a rectangle stays a rectangle: the corners sharing an x or a z with the dragged one follow
            if (rect)
              src.points.forEach((q, j) => {
                if (j === i) return;
                if (Math.abs(q[0] - old[0]) < 1e-6) pts[j][0] = round(p[0]);
                if (Math.abs(q[1] - old[1]) < 1e-6) pts[j][1] = round(p[1]);
              });
            a.points = pts;
          },
          drag.base,
          false,
        );
        break;
      }
      case "cablept": {
        drag.moved = true;
        const p = this.snap(world, undefined, e.altKey);
        this.change(
          (doc) => {
            const c = doc.settings.roof.cables?.find((x) => x.id === drag.id);
            if (c && c.points[drag.index]) c.points[drag.index] = [round(p[0]), round(p[1])];
          },
          drag.base,
          false,
        );
        break;
      }
      case "holopt": {
        drag.moved = true;
        const p = this.snap(world, undefined, e.altKey);
        this.change((doc) => (doc.settings.roof.hologram = { ...(doc.settings.roof.hologram ?? DEFAULT_HOLOGRAM), place: "free", x: round(p[0]), z: round(p[1]) }), drag.base, false);
        break;
      }
      case "bgmove": {
        drag.moved = true;
        const dx = world[0] - drag.start[0];
        const dz = world[1] - drag.start[1];
        this.change(
          (_, floor) => {
            if (floor.background) {
              floor.background.x = round(drag.bx + dx);
              floor.background.z = round(drag.bz + dz);
            }
          },
          drag.base,
          false,
        );
        break;
      }
      case "bgrotate": {
        drag.moved = true;
        const bg = this.floor?.background;
        const img = bg ? this._images[bg.image_id] : undefined;
        if (!bg || !img) break;
        const h = bg.width * img.aspect;
        const c: Vec2 = [bg.x + bg.width / 2, bg.z + h / 2];
        const now = Math.atan2(world[1] - c[1], world[0] - c[0]);
        // turn about the middle; Shift snaps to whole 15° steps, otherwise tenths of a degree
        let rot = drag.rot + ((now - drag.start) * 180) / Math.PI;
        rot = e.shiftKey ? Math.round(rot / 15) * 15 : Math.round(rot * 10) / 10;
        rot = ((((rot + 180) % 360) + 360) % 360) - 180;
        this.change(
          (_, floor) => {
            if (floor.background) floor.background.rotation = rot;
          },
          drag.base,
          false,
        );
        break;
      }
      case "bgscale": {
        drag.moved = true;
        const bg = this.floor?.background;
        const img = bg ? this._images[bg.image_id] : undefined;
        if (!bg || !img) break;
        // the corner follows the pointer along the picture's own width, whatever its turn
        const [lx] = this.bgLocal(bg, world, img.aspect);
        const width = Math.max(0.5, round(lx));
        this.change(
          (_, floor) => {
            if (floor.background) floor.background.width = width;
          },
          drag.base,
          false,
        );
        break;
      }
      case "roofvertex": {
        drag.moved = true;
        const p = this.snap(world, undefined, e.altKey);
        this.change(
          (doc) => {
            const sec = doc.settings.roof.sections?.find((x) => x.id === drag.id);
            if (!sec?.points || drag.index >= sec.points.length) return;
            sec.points[drag.index] = [round(p[0]), round(p[1])];
            Object.assign(sec, polygonBox(sec.points));
          },
          drag.base,
          false,
        );
        break;
      }
      case "roofcorner": {
        drag.moved = true;
        const p = this.snap(world, undefined, e.altKey);
        this.change(
          (doc) => {
            const sec = doc.settings.roof.sections?.find((x) => x.id === drag.id);
            if (!sec) return;
            if (drag.corner[0]) sec.x1 = round(p[0]);
            else sec.x0 = round(p[0]);
            if (drag.corner[1]) sec.z1 = round(p[1]);
            else sec.z0 = round(p[1]);
          },
          drag.base,
          false,
        );
        break;
      }
      case "opening": {
        if (!drag.moved && Math.hypot(local[0] - drag.startScreen[0], local[1] - drag.startScreen[1]) < 5) return;
        drag.moved = true;
        const baseFloor = drag.base.floors.find((f) => f.id === this._floorId);
        const o = baseFloor?.openings.find((x) => x.id === drag.id);
        const host = o && baseFloor ? openingHost(o, baseFloor.rooms, baseFloor.walls ?? []) : null;
        if (!o || !host) return;
        const offset = this.offsetOnEdge(host.room, host.edge, world, o.width, e.altKey);
        this.change((_, floor) => patchItem(floor.openings.find((x) => x.id === drag.id), { offset }), drag.base, false);
        break;
      }
      case "furniture": {
        if (!drag.moved && Math.hypot(local[0] - drag.startScreen[0], local[1] - drag.startScreen[1]) < 5) return;
        drag.moved = true;
        const f = drag.base.floors.find((x) => x.id === this._floorId)?.furniture.find((x) => x.id === drag.id);
        if (!f) return;
        const g = e.altKey ? 0.01 : this._doc.settings.grid;
        let x = round(Math.round((f.x + world[0] - drag.start[0]) / g) * g);
        let z = round(Math.round((f.z + world[1] - drag.start[1]) / g) * g);
        let rotation = f.rotation;
        // near a wall: turn the back (or a side) to it and sit flush; Alt moves freely
        const snap = e.altKey ? null : this.snapToWall({ ...f, x, z });
        if (snap) ({ x, z, rotation } = snap);
        this.change((_, floor) => patchItem(floor.furniture.find((q) => q.id === drag.id), { x, z, rotation }), drag.base, false);
        break;
      }
      case "furnset": {
        // the whole selection by the same step (on the grid; Alt: by the centimetre), no wall snap – it keeps its shape
        if (!drag.moved && Math.hypot(local[0] - drag.startScreen[0], local[1] - drag.startScreen[1]) < 5) return;
        drag.moved = true;
        const g = e.altKey ? 0.01 : this._doc.settings.grid;
        const dx = round(Math.round((world[0] - drag.start[0]) / g) * g);
        const dz = round(Math.round((world[1] - drag.start[1]) / g) * g);
        const ids = new Set(drag.ids);
        this.change(
          (_, floor) => {
            for (const m of floor.furniture) if (ids.has(m.id)) Object.assign(m, { x: round(m.x + dx), z: round(m.z + dz) });
          },
          drag.base,
          false,
        );
        break;
      }
      case "marquee":
        drag.end = world;
        this.requestUpdate();
        break;
      case "outdoor": {
        if (!drag.moved && Math.hypot(local[0] - drag.startScreen[0], local[1] - drag.startScreen[1]) < 5) return;
        drag.moved = true;
        const area = drag.base.floors.find((f) => f.id === this._floorId)?.outdoor.find((o) => o.id === drag.id);
        if (!area) return;
        const g = e.altKey ? 0.01 : this._doc.settings.grid;
        const dx = Math.round((world[0] - drag.start[0]) / g) * g;
        const dz = Math.round((world[1] - drag.start[1]) / g) * g;
        this.change(
          (_, floor) => {
            const o = floor.outdoor.find((x) => x.id === drag.id)!;
            o.points = area.points.map(([x, z]) => [round(x + dx), round(z + dz)]);
            // a pool's ports move with it (pipes keep their own way)
            if (o.pool?.ports && area.pool?.ports) o.pool.ports = area.pool.ports.map((q) => ({ ...q, x: round(q.x + dx), z: round(q.z + dz) }));
          },
          drag.base,
          false,
        );
        break;
      }
      case "resize": {
        drag.moved = true;
        const f = drag.base.floors.find((x) => x.id === this._floorId)?.furniture.find((x) => x.id === drag.id);
        if (!f) return;
        const size = resizeFurniture(f, drag.corner, world, e.altKey ? 0.01 : this._doc.settings.grid);
        this.change((_, floor) => patchItem(floor.furniture.find((q) => q.id === drag.id), size), drag.base, false);
        break;
      }
      case "rotate": {
        drag.moved = true;
        const f = drag.base.floors.find((x) => x.id === this._floorId)?.furniture.find((x) => x.id === drag.id);
        if (!f) return;
        // the handle sits in front of the item: turn the front towards the pointer
        let a = (Math.atan2(-(world[0] - f.x), world[1] - f.z) * 180) / Math.PI;
        const step = e.altKey ? 1 : 15;
        a = ((Math.round(a / step) * step) % 360 + 360) % 360;
        this.change((_, floor) => patchItem(floor.furniture.find((q) => q.id === drag.id), { rotation: a }), drag.base, false);
        break;
      }
      case "aim": {
        drag.moved = true;
        const pl = drag.base.floors.find((x) => x.id === this._floorId)?.placements.find((x) => x.entity_id === drag.entityId);
        if (!pl) return;
        // the handle sits at the far edge of the wedge: it turns the camera and sets how far it reaches
        let a = (Math.atan2(-(world[0] - pl.x), world[1] - pl.z) * 180) / Math.PI;
        const step = e.altKey ? 1 : 5;
        a = ((Math.round(a / step) * step) % 360 + 360) % 360;
        const reach = Math.min(50, Math.max(0.5, Math.round(Math.hypot(world[0] - pl.x, world[1] - pl.z) * 10) / 10));
        this.change((_, floor) => patchItem(floor.placements.find((q) => q.entity_id === drag.entityId), { rotation: a, reach }), drag.base, false);
        break;
      }
      case "device": {
        if (!drag.moved && Math.hypot(local[0] - drag.startScreen[0], local[1] - drag.startScreen[1]) < 5) return;
        drag.moved = true;
        const pl = drag.base.floors.find((f) => f.id === this._floorId)?.placements.find((x) => x.entity_id === drag.entityId);
        if (!pl) return;
        const g = e.altKey ? 0.01 : this._doc.settings.grid;
        const x = round(Math.round((pl.x + world[0] - drag.start[0]) / g) * g);
        const z = round(Math.round((pl.z + world[1] - drag.start[1]) / g) * g);
        this.change((_, floor) => patchItem(floor.placements.find((q) => q.entity_id === drag.entityId), { x, z }), drag.base, false);
        break;
      }
    }
  }

  private onPointerUp(e: PointerEvent): void {
    const right = this.rightPress;
    this.rightPress = null;
    if (right && e.button === 2) {
      // the browser's contextmenu event (before or after this) stays quiet; a click without moving opens the menu
      this.rightUp = performance.now();
      if (!right.moved && e.type !== "pointercancel" && (this._tool === "select" || this._tool === "furniture")) this.openContext(right.target, right.at);
    }
    clearTimeout(this.pressTimer);
    this.pressStart = null;
    this.fixedPan = false;
    this.pointers.delete(e.pointerId);
    if (this.pinch) {
      if (this.pointers.size < 2) this.pinch = null;
      return;
    }
    const drag = this.drag;
    this.drag = null;
    if (!drag || e.type === "pointercancel") {
      if (drag && EDIT_DRAGS.has(drag.kind) && "moved" in drag && drag.moved && "base" in drag) this.restoreLive(drag.base);
      return;
    }
    const local = this.localPoint(e);
    switch (drag.kind) {
      case "freewall": {
        if (Math.hypot(drag.end[0] - drag.start[0], drag.end[1] - drag.start[1]) >= 0.2) this.addFreeWall(drag.start, drag.end);
        this._guides = {};
        break;
      }
      case "wallmove":
        if (drag.moved) this.pushHistory(drag.base);
        this._guides = {};
        break;
      case "rect": {
        const [x0, z0] = drag.start;
        const [x1, z1] = drag.end;
        if (Math.abs(x1 - x0) >= 0.2 && Math.abs(z1 - z0) >= 0.2) {
          const lo: Vec2 = [Math.min(x0, x1), Math.min(z0, z1)];
          const hi: Vec2 = [Math.max(x0, x1), Math.max(z0, z1)];
          const pts: Vec2[] = [lo, [hi[0], lo[1]], hi, [lo[0], hi[1]]];
          if (drag.outdoor) this.addOutdoor(pts);
          else if (drag.hole) this.addHole(lo, hi);
          else if (drag.roof) this.addRoofSection(lo, hi);
          else this.addRoom(pts);
        }
        this._guides = {};
        break;
      }
      case "tap":
        if (drag.panning) break;
        // by measure, a tap only sets (or moves) the starting point; the walls are typed in
        if (this._tool === "measure") this._draft = [this.snap(this.toWorld(...local), undefined, e.altKey)];
        else this.addDraftPoint(this.snap(this.toWorld(...local), undefined, e.altKey), local);
        break;
      case "marquee": {
        // everything whose centre lies in the frame joins the selection
        const [x0, x1] = [Math.min(drag.start[0], drag.end[0]), Math.max(drag.start[0], drag.end[0])];
        const [z0, z1] = [Math.min(drag.start[1], drag.end[1]), Math.max(drag.start[1], drag.end[1])];
        const hit = (this.floor?.furniture ?? []).filter((m) => m.x >= x0 && m.x <= x1 && m.z >= z0 && m.z <= z1).map((m) => m.id);
        if (hit.length) this.setMulti([...new Set([...this.selection(), ...this.withGroups(hit)])]);
        break;
      }
      case "opening":
      case "furniture":
      case "furnset":
      case "rotate":
      case "aim":
      case "resize":
      case "outdoor":
      case "solarmove":
      case "solarturn":
      case "roofmove":
      case "roofcorner":
      case "roofvertex":
      case "cablept":
      case "outvertex":
      case "outbox":
      case "pipept":
      case "poolport":
      case "pooljoint":
        if (drag.moved) this.pushHistory(drag.base);
        // a tap on a port or a joint opens its card
        else if (drag.kind === "poolport" || drag.kind === "pooljoint") this.openCard(drag.pool, `${drag.kind === "poolport" ? "port" : "joint"}:${drag.id}`);
        break;
      case "holopt":
      case "bgmove":
      case "bgscale":
      case "bgrotate":
        if (drag.moved) this.pushHistory(drag.base);
        break;
      case "pooldev": {
        if (drag.moved) this.pushHistory(drag.base);
        // a tap on a ball valve opens or closes it, on any other device its card
        else if (this._doc.floors.flatMap((f) => f.furniture).find((m) => m.id === drag.id)?.type === "pool_valve") this.togglePoolValve(drag.id);
        else if (this.poolArea) this.openCard(this.poolArea.id, `dev:${drag.id}`);
        break;
      }
      case "device":
        if (drag.moved) this.pushHistory(drag.base);
        // a tap on a device selects it (and the room it stands in)
        else this.selectItem("device", drag.entityId);
        break;
      case "vertex":
      case "room":
        // the drag already changed the document without history; record the state before the drag
        if (drag.moved) this.pushHistory(drag.base);
        this._guides = {};
        break;
      default:
        break;
    }
  }

  private onWheel(e: WheelEvent): void {
    e.preventDefault();
    const [sx, sy] = this.localPoint(e);
    this.zoomAt(Math.exp(-e.deltaY * (e.deltaMode === 1 ? 0.05 : 0.0015)), sx, sy);
  }

  private pinchState(): { dist: number; mid: [number, number] } | null {
    const pts = [...this.pointers.values()];
    if (pts.length < 2) return null;
    const [a, b] = pts;
    return { dist: Math.hypot(a[0] - b[0], a[1] - b[1]), mid: [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2] };
  }

  private pushHistory(base: Building): void {
    this.past.push(JSON.stringify(base));
    if (this.past.length > HISTORY) this.past.shift();
    this.future = [];
    this._canUndo = true;
    this._canRedo = false;
  }

  private restoreLive(base: Building): void {
    this._doc = base;
    this.dispatchEvent(new CustomEvent("building-changed", { detail: { building: base }, bubbles: true, composed: true }));
  }

  /** Movement of a whole room: grid steps, pulled onto nearby corners of other rooms. */
  private roomDelta(room: Room, raw: Vec2, free: boolean): Vec2 {
    if (free) return raw;
    const g = this._doc.settings.grid;
    let delta: Vec2 = [Math.round(raw[0] / g) * g, Math.round(raw[1] / g) * g];
    const thr = SNAP_PX / this._view.scale;
    let best = thr;
    this._guides = {};
    for (const other of this.floor?.rooms ?? []) {
      if (other.id === room.id) continue;
      for (const q of other.points) {
        for (const p of room.points) {
          const d = Math.hypot(p[0] + raw[0] - q[0], p[1] + raw[1] - q[1]);
          if (d < best) {
            best = d;
            delta = [q[0] - p[0], q[1] - p[1]];
            this._guides = { point: q };
          }
        }
      }
    }
    return delta;
  }

  private roomAt(p: Vec2): string | null {
    const rooms = this.floor?.rooms ?? [];
    // smallest room first so nested rooms stay reachable
    const hits = rooms.filter((r) => pointInPolygon(p, r.points)).sort((a, b) => polygonArea(a.points) - polygonArea(b.points));
    return hits[0]?.id ?? null;
  }

  /** The outdoor area under a point: the smallest one, so a pool in a lawn or a bed on a terrace stays reachable. */
  private outdoorAt(p: Vec2): string | null {
    const areas = this.floor?.outdoor ?? [];
    const hits = areas.filter((a) => a.points.length >= 3 && pointInPolygon(p, a.points)).sort((a, b) => polygonArea(a.points) - polygonArea(b.points));
    return hits[0]?.id ?? null;
  }

  /** Corners are set one by one: the free-form room, and an outdoor area drawn as a free shape. */
  private get drawingPoints(): boolean {
    return this._tool === "polygon" || ((this._tool === "outdoor" || (this._tool === "pool" && !this._pipeMode)) && this._outdoorFree);
  }

  private addDraftPoint(p: Vec2, screen: [number, number]): void {
    const draft = this._draft;
    if (draft.length >= 3) {
      const [fx, fy] = this.toScreen(draft[0]);
      if (Math.hypot(fx - screen[0], fy - screen[1]) < 14) {
        this.closeDraft();
        return;
      }
    }
    const last = draft[draft.length - 1];
    if (last && Math.hypot(last[0] - p[0], last[1] - p[1]) < 1e-6) return;
    this._draft = [...draft, p];
  }

  private closeDraft(): void {
    if (this._draft.length >= 3 && Math.abs(polygonArea(this._draft)) > 0.05) {
      if (this._tool === "outdoor" || this._tool === "pool") this.addOutdoor(this._draft);
      else this.addRoom(this._draft);
    }
    this._draft = [];
    this._cursor = null;
    this._guides = {};
  }

  /** Adds a wall of the typed length in a direction (drawing by measure). */
  private measureStep(dir: Direction): void {
    const last = this._draft[this._draft.length - 1];
    if (!last || !(this._measureLen > 0)) return;
    const next = step(last, this._measureLen, dir);
    // arriving at the start closes the room
    const first = this._draft[0];
    if (this._draft.length >= 3 && Math.hypot(next[0] - first[0], next[1] - first[1]) < 0.01) {
      this.closeDraft();
      return;
    }
    this._draft = [...this._draft, next];
  }

  private rectBySize(): void {
    const start = this._draft[0] ?? [0, 0];
    const [w, d] = this._rectSize;
    if (!(w > 0.1 && d > 0.1)) return;
    this.addRoom([start, step(start, w, "right"), step(step(start, w, "right"), d, "down"), step(start, d, "down")]);
    this._draft = [];
  }

  private renderMeasureForm() {
    const draft = this._draft;
    const first = draft[0];
    const last = draft[draft.length - 1];
    const gap = first && last && draft.length > 1 ? Math.hypot(last[0] - first[0], last[1] - first[1]) : 0;
    const arrows: [Direction, string][] = [
      ["up", "↑"],
      ["left", "←"],
      ["right", "→"],
      ["down", "↓"],
    ];
    const len = (v: number) => formatNumber(this.hass, v, 2);
    return html`<section>
      <h3>${this.t("measure")}</h3>
      ${!first
        ? html`<p class="fp3d-sub">${this.t("measure_start")}</p>`
        : html`<p class="fp3d-sub">${this.t("measure_from", { x: this.m(first[0]), z: this.m(first[1]) })}</p>
            <div class="fp3d-form">
              <label class="fp3d-field fp3d-wide"
                >${unitLabel(this.t("measure_length"), this.unit)}
                <input
                  class="fp3d-measure-input"
                  type=${this.unit === "imperial" ? "text" : "number"}
                  inputmode="decimal"
                  step="0.01"
                  min="0.05"
                  .value=${this.lenValue(this._measureLen)}
                  @change=${(e: Event) => (this._measureLen = this.readLen((e.target as HTMLInputElement).value) ?? 0)}
                  @keydown=${(e: KeyboardEvent) => {
                    const dir = { ArrowRight: "right", ArrowLeft: "left", ArrowUp: "up", ArrowDown: "down" }[e.key] as Direction | undefined;
                    if (dir) {
                      e.preventDefault();
                      this.measureStep(dir);
                    } else if (e.key === "Enter") this.closeDraft();
                  }}
              /></label>
              <div class="fp3d-arrows fp3d-wide">
                ${arrows.map(([dir, label]) => html`<button class="fp3d-btn fp3d-arrow-${dir}" title=${this.t(`dir_${dir}`)} @click=${() => this.measureStep(dir)}>${label}</button>`)}
              </div>
            </div>
            ${draft.length > 1
              ? html`<ol class="fp3d-measure-list">
                  ${draft.slice(1).map((p, i) => html`<li>${this.m(Math.hypot(p[0] - draft[i][0], p[1] - draft[i][1]))}</li>`)}
                </ol>`
              : nothing}
            <div class="fp3d-actions">
              <button class="fp3d-btn fp3d-primary" ?disabled=${draft.length < 3} @click=${() => this.closeDraft()}>${this.t("measure_close")}</button>
              <button class="fp3d-btn" ?disabled=${draft.length < 2} @click=${() => (this._draft = draft.slice(0, -1))}>${this.t("measure_undo")}</button>
            </div>
            ${draft.length >= 3 ? html`<p class="fp3d-sub">${this.t("measure_gap", { gap: len(gap) })}</p>` : nothing}`}
      <h4 class="fp3d-lib-head">${this.t("rect_by_size")}</h4>
      <div class="fp3d-form">
        ${this.len(this.t("width"), this._rectSize[0], (v) => (this._rectSize = [Math.max(0.1, v), this._rectSize[1]]), 0.01, 0.1)}
        ${this.len(this.t("depth"), this._rectSize[1], (v) => (this._rectSize = [this._rectSize[0], Math.max(0.1, v)]), 0.01, 0.1)}
        <button class="fp3d-btn fp3d-wide" @click=${() => this.rectBySize()}>${this.t("rect_add")}</button>
      </div>
      <p class="fp3d-sub">${this.t("measure_hint")}</p>
    </section>`;
  }

  /** A free-standing wall from a to b (a partition through part of a room). */
  private addFreeWall(a: Vec2, b: Vec2): void {
    if (!this.floor) return;
    const wall: FreeWall = { id: uid("wall"), a: [round(a[0]), round(a[1])], b: [round(b[0]), round(b[1])], thickness: null };
    this.change((_, floor) => (floor.walls = [...(floor.walls ?? []), wall]));
    this.selectItem("wall", wall.id);
  }

  private get freeWall(): FreeWall | undefined {
    return this._wallId ? (this.floor?.walls ?? []).find((w) => w.id === this._wallId) : undefined;
  }

  private updateFreeWall(patch: Partial<FreeWall>): void {
    const id = this._wallId;
    if (!id) return;
    this.change((_, floor) => Object.assign((floor.walls ?? []).find((w) => w.id === id)!, patch));
  }

  private deleteFreeWall(): void {
    const id = this._wallId;
    if (!id || !this.isAdmin || !this.confirmFixedDelete("wall", id)) return;
    this.change((_, floor) => {
      floor.walls = (floor.walls ?? []).filter((w) => w.id !== id);
      floor.openings = floor.openings.filter((o) => o.wall !== id);
    });
    this._wallId = null;
  }

  /** The plan symbol of free walls: a wide invisible hit line, and end handles when selected. */
  private renderFreeWalls(floor: Floor) {
    return svg`<g>${(floor.walls ?? []).map((w) => {
      const [x0, y0] = this.toScreen(w.a);
      const [x1, y1] = this.toScreen(w.b);
      const sel = w.id === this._wallId;
      return svg`<g data-free-wall=${w.id} class=${`fp3d-free-wall${sel ? " fp3d-free-wall-sel" : ""}`}>
        <line class="fp3d-hit" x1=${x0} y1=${y0} x2=${x1} y2=${y1} />
        <line class="fp3d-free-wall-line" x1=${x0} y1=${y0} x2=${x1} y2=${y1} />
      </g>
      ${sel && this.isAdmin && !isFixed(w, true, this._doc.settings)
        ? svg`<g class="fp3d-vertex" data-wall-end=${`${w.id}:a`}><circle cx=${x0} cy=${y0} r="16" class="fp3d-hit" /><circle cx=${x0} cy=${y0} r="6" /></g>
            <g class="fp3d-vertex" data-wall-end=${`${w.id}:b`}><circle cx=${x1} cy=${y1} r="16" class="fp3d-hit" /><circle cx=${x1} cy=${y1} r="6" /></g>`
        : nothing}`;
    })}</g>`;
  }

  private renderFreeWallForm(w: FreeWall) {
    const admin = this.isAdmin;
    const length = Math.hypot(w.b[0] - w.a[0], w.b[1] - w.a[1]);
    const setLength = (v: number) => {
      const l = Math.max(0.1, v);
      const k = l / (length || 1);
      this.updateFreeWall({ b: [round(w.a[0] + (w.b[0] - w.a[0]) * k), round(w.a[1] + (w.b[1] - w.a[1]) * k)] });
    };
    // X/Y name the wall's middle like a piece of furniture's; typing moves the whole wall, off the grid (#315)
    const mid: Vec2 = [(w.a[0] + w.b[0]) / 2, (w.a[1] + w.b[1]) / 2];
    const moveTo = (i: 0 | 1, v: number) => {
      const d = v - mid[i];
      const shift = (p: Vec2): Vec2 => (i === 0 ? [round(p[0] + d), p[1]] : [p[0], round(p[1] + d)]);
      this.updateFreeWall({ a: shift(w.a), b: shift(w.b) });
    };
    return html`<section>
      <div class="fp3d-h3row"><h3>${this.t("free_wall")}</h3>${this.fixButton("wall", w.id)}</div>
      <div class="fp3d-form">
        ${this.len(this.t("x"), mid[0], (v) => moveTo(0, v))} ${this.len(this.t("z"), mid[1], (v) => moveTo(1, v))}
        <p class="fp3d-sub fp3d-wide">${this.t("wall_pos_hint")}</p>
        ${this.len(this.t("wall_length"), length, setLength, 0.01, 0.1)}
        ${this.len(this.t("wall_thickness"), w.thickness ?? this._doc.settings.wall_interior, (v) => this.updateFreeWall({ thickness: Math.min(1, Math.max(0.02, v)) }), 0.01, 0.02)}
        ${this.len(this.t("wall_height"), w.height ?? this.floor?.height ?? 2.5, (v) => this.updateFreeWall({ height: v >= (this.floor?.height ?? 2.5) - 0.005 ? null : Math.max(0.05, v) }), 0.05, 0.05)}
      </div>
      ${admin
        ? html`<div class="fp3d-actions">
            <button class="fp3d-btn fp3d-danger" @click=${() => this.deleteFreeWall()}>${this.t("delete")}</button>
          </div>`
        : nothing}
      <p class="fp3d-sub">${this.t("free_wall_hint")}</p>
    </section>`;
  }

  /** A floor opening (stairwell, gallery): a hole in this floor's floor, drawn as a rectangle. */
  private addHole(lo: Vec2, hi: Vec2): void {
    if (!this.floor) return;
    const item: Furniture = {
      id: uid("hole"),
      type: "stairwell",
      x: round((lo[0] + hi[0]) / 2),
      z: round((lo[1] + hi[1]) / 2),
      w: round(hi[0] - lo[0]),
      d: round(hi[1] - lo[1]),
      h: 0.02,
      rotation: 0,
      variant: null,
    };
    this.change((_, floor) => floor.furniture.push(item));
    this.selectItem("furniture", item.id);
    // the tool stays: the next one is placed right away (Esc or "Select" ends it)
  }

  private addOutdoor(points: Vec2[]): void {
    if (!this.floor) return;
    const type = this._tool === "pool" ? "pool" : (this._outdoorType ?? "lawn");
    const area: OutdoorArea = { id: uid("outdoor"), type, points: points.map(([x, z]) => [round(x), round(z)]) };
    const shape = type === "pool" && !this._outdoorFree ? this._poolShape : "rect";
    if (shape === "round" || shape === "oval") {
      const b = bounds(area.points);
      area.points = poolShapePoints(shape, b.x0, b.z0, b.x1, b.z1);
      area.pool_shape = shape;
    }
    // a new pool comes with its links when a module draws pools (Pool Pro: its entities are found by name)
    if (type === "pool" && this.pipeRules) area.pool = {};
    this.change((_, floor) => floor.outdoor.push(area));
    this.selectItem("outdoor", area.id);
    // the tool stays: the next area (or the pool's ports and pipes) right away; Esc or "Select" ends it
  }

  private get outdoorArea(): OutdoorArea | undefined {
    return this._outdoorId ? this.floor?.outdoor.find((o) => o.id === this._outdoorId) : undefined;
  }

  private updateOutdoor(patch: Partial<OutdoorArea>): void {
    const id = this._outdoorId;
    this.change((_, floor) => patchItem(floor.outdoor.find((o) => o.id === id), patch));
  }

  private deleteOutdoor(): void {
    const id = this._outdoorId;
    if (!id || !this.isAdmin || !this.confirmFixedDelete("outdoor", id)) return;
    // a pool with its pipes is a lot of work: ask first
    const a = this.floor?.outdoor.find((o) => o.id === id);
    const pipes = a?.pool?.pipes?.length ?? 0;
    if (a?.type === "pool" && pipes && !confirm(this.t("pool_delete_confirm", { n: pipes }))) return;
    this.change((_, floor) => (floor.outdoor = floor.outdoor.filter((o) => o.id !== id)));
    this._outdoorId = null;
  }

  private duplicateOutdoor(): void {
    const a = this.outdoorArea;
    if (!a || !this.isAdmin) return;
    const copy: OutdoorArea = { ...a, id: uid("outdoor"), points: a.points.map(([x, z]) => [round(x + 0.5), round(z + 0.5)]) };
    this.change((_, floor) => floor.outdoor.push(copy));
    this.selectItem("outdoor", copy.id);
  }

  private addRoom(points: Vec2[]): void {
    if (!this.floor) return;
    const id = uid("room");
    const n = this.floor.rooms.length + 1;
    this.change((_, floor) =>
      floor.rooms.push({ id, name: this.t("new_room", { n }), area_id: null, points: points.map(([x, z]) => [round(x), round(z)]), floor_material: "wood" }),
    );
    this._roomId = id;
    this._vertex = null;
    // the tool stays: one room after the other (Esc or "Select" ends it)
  }

  // ------------------------------------------------------------------ keyboard

  private readonly onKey = (e: KeyboardEvent) => {
    this.shiftHeld = e.shiftKey;
    const path = e.composedPath();
    if (path.some((el) => el instanceof HTMLInputElement || el instanceof HTMLSelectElement || el instanceof HTMLTextAreaElement)) return;
    if (!this.isConnected || !this.offsetParent) return;
    const mod = e.ctrlKey || e.metaKey;
    // the wall view has its own keys: Delete there must never reach what is chosen in the plan behind it
    // (it took the whole pool with every pipe); only undo and redo still work from here
    if (this._wallView && !(mod && ["z", "y"].includes(e.key.toLowerCase()))) return;
    if (mod && e.key.toLowerCase() === "z") {
      e.preventDefault();
      if (e.shiftKey) this.redo();
      else this.undo();
    } else if (mod && e.key.toLowerCase() === "y") {
      e.preventDefault();
      this.redo();
    } else if (mod && e.key.toLowerCase() === "d") {
      e.preventDefault();
      if (this._furnitureId) this.duplicateFurniture();
      else this.duplicateRoom();
    } else if (e.key === "Delete" || (e.key === "Backspace" && (this._tool === "select" || this._tool === "furniture"))) {
      if (this._deviceId) this.deleteItem("device", this._deviceId);
      else if (this._outdoorId) this.deleteOutdoor();
      else if (this._wallId) this.deleteFreeWall();
      else if (this._openingId) this.deleteOpening();
      else if (this._furnitureId) this.deleteFurniture();
      else if (this._vertex !== null) this.deleteVertex(this._vertex);
      else this.deleteRoom();
    } else if (e.key.toLowerCase() === "l" && !mod && this._tool === "roof" && this.roofSection && !this._doc.settings.lock_plan) {
      this.updateRoofSection({ locked: !this.roofSection.locked });
    } else if (e.key.toLowerCase() === "l" && !mod && this._furnitureId && this.selection().length > 1) {
      this.lockSelection(!this.selection().every((id) => this.isFixedItem("furniture", id)));
    } else if (e.key.toLowerCase() === "l" && !mod && (this._furnitureId || this._deviceId)) {
      const s = this.selectedFix!;
      this.toggleFixed(s.kind, s.id);
    } else if (Object.prototype.hasOwnProperty.call(ARROWS, e.key) && !mod && (this._tool === "select" || this._tool === "furniture")) {
      // arrow keys nudge the selection: one grid step, Shift 10 cm, Alt 1 cm
      const step = e.altKey ? 0.01 : e.shiftKey ? 0.1 : this._doc.settings.grid;
      const [dx, dz] = ARROWS[e.key];
      if (this.nudge(dx * step, dz * step)) e.preventDefault();
    } else if (e.key.toLowerCase() === "r" && !mod && this._furnitureId) {
      this.rotateFurniture(e.shiftKey ? -90 : 90);
    } else if (e.key === "Backspace" && this.drawingPoints) {
      this._draft = this._draft.slice(0, -1);
    } else if (e.key === "Enter" && this.drawingPoints) {
      this.closeDraft();
    } else if (e.key === "Escape") {
      if (this._ctx) {
        this._ctx = null;
        return;
      }
      if (this._pipeDraft) {
        this._pipeDraft = null;
        return;
      }
      if (this._pipeMode) {
        this._pipeMode = false;
        return;
      }
      if (this._draft.length) this._draft = [];
      else if (this._tool !== "select") this._tool = "select";
      else this.selectItem("room", null);
      this._cursor = null;
    }
  };

  // ------------------------------------------------------------------ actions

  /** Moves the selected item by (dx, dz) metres; false when nothing movable is selected. */
  private nudge(dx: number, dz: number): boolean {
    const floor = this.floor;
    if (!floor || !this.isAdmin) return false;
    const fix = this.selectedFix;
    const set = this._furnitureId ? this.selection() : [];
    if ((fix && this.isFixedItem(fix.kind, fix.id)) || set.some((id) => this.isFixedItem("furniture", id))) {
      this._fixedHint = true;
      return true;
    }
    const mv = (p: Vec2): Vec2 => [round(p[0] + dx), round(p[1] + dz)];
    if (set.length > 1) {
      const ids = new Set(set);
      this.change((_, f) => {
        for (const m of f.furniture) if (ids.has(m.id)) [m.x, m.z] = mv([m.x, m.z]);
      });
      return true;
    }
    if (this._deviceId) {
      const id = this._deviceId;
      if (!floor.placements.some((p) => p.entity_id === id)) return false;
      this.change((_, f) => {
        const p = f.placements.find((x) => x.entity_id === id)!;
        [p.x, p.z] = mv([p.x, p.z]);
      });
    } else if (this._furnitureId) {
      const id = this._furnitureId;
      this.change((_, f) => {
        const m = f.furniture.find((x) => x.id === id);
        if (m) [m.x, m.z] = mv([m.x, m.z]);
      });
    } else if (this._openingId) {
      const o = this.opening;
      const host = o ? openingHost(o, floor.rooms, floor.walls ?? []) : null;
      if (!o || !host) return false;
      const a = host.room.points[host.edge];
      const b = host.room.points[(host.edge + 1) % host.room.points.length];
      const len = Math.hypot(b[0] - a[0], b[1] - a[1]) || 1;
      // along the wall: the arrow's share in the wall direction
      const along = (dx * (b[0] - a[0]) + dz * (b[1] - a[1])) / len;
      if (Math.abs(along) < 1e-9) return true;
      this.updateOpening({ offset: this.clampOffset(host.room, host.edge, o.width, o.offset + along) });
    } else if (this._wallId) {
      const id = this._wallId;
      this.change((_, f) => {
        const w = (f.walls ?? []).find((x) => x.id === id);
        if (w) [w.a, w.b] = [mv(w.a), mv(w.b)];
      });
    } else if (this._outdoorId) {
      const id = this._outdoorId;
      this.change((_, f) => {
        const area = f.outdoor.find((x) => x.id === id);
        if (area) area.points = area.points.map(mv);
      });
    } else if (this._roomId) {
      const id = this._roomId;
      const vertex = this._vertex;
      const room = floor.rooms.find((r) => r.id === id);
      if (!room) return false;
      // a selected corner moves alone; otherwise the room moves with the devices in it
      const inside = new Set(floor.placements.filter((pl) => pointInPolygon([pl.x, pl.z], room.points)).map((pl) => pl.entity_id));
      this.change((_, f) => {
        const r = f.rooms.find((x) => x.id === id)!;
        if (vertex !== null && vertex < r.points.length) {
          r.points[vertex] = mv(r.points[vertex]);
          return;
        }
        r.points = r.points.map(mv);
        for (const pl of f.placements) if (inside.has(pl.entity_id)) [pl.x, pl.z] = mv([pl.x, pl.z]);
      });
    } else return false;
    return true;
  }

  /** Floors of Home Assistant's floor registry that no floor of the plan stands for yet, lowest first. */
  private get freeHaFloors(): HassFloor[] {
    const used = new Set(this._doc.floors.map((f) => f.ha_floor));
    return Object.values(this.hass?.floors ?? {})
      .filter((f) => !used.has(f.floor_id))
      .sort((a, b) => (a.level ?? 99) - (b.level ?? 99) || a.name.localeCompare(b.name));
  }

  /** Areas of a floor's Home Assistant floor that have no room in the plan yet. */
  private unplacedAreas(floor: Floor): HassArea[] {
    if (!floor.ha_floor) return [];
    // an area that an outdoor area stands for (the garden) is placed too
    const used = new Set(this._doc.floors.flatMap((f) => [...f.rooms.map((r) => r.area_id), ...(f.outdoor ?? []).map((a) => a.area_id ?? null)]));
    return Object.values(this.hass?.areas ?? {})
      .filter((a) => a.floor_id === floor.ha_floor && !used.has(a.area_id))
      .sort((a, b) => a.name.localeCompare(b.name));
  }

  private addFloor(ha: HassFloor | null = null): void {
    const floors = this._doc.floors;
    const id = uid("floor");
    const name = ha?.name ?? (floors.length === 0 ? this.t("default_floor") : this.t("new_floor", { n: floors.length }));
    const floor = { ...newFloor(id, name, floorElevation(floors, ha?.level)), ha_floor: ha?.floor_id ?? null };
    const next = structuredClone(this._doc);
    // floors are kept from bottom to top
    const at = next.floors.findIndex((f) => f.elevation > floor.elevation);
    next.floors.splice(at < 0 ? next.floors.length : at, 0, floor);
    this.setDoc(next);
    this._floorId = id;
    this._roomId = null;
    this._floorMenu = false;
    this.fit();
  }

  /** One room tile per unplaced area of the floor's Home Assistant floor, to drag into place. */
  private addAreaRooms(floor: Floor): void {
    const areas = this.unplacedAreas(floor);
    if (!areas.length) return;
    const rooms = roomTiles(floor, areas, () => uid("room"));
    this.change((_, f) => f.rooms.push(...rooms));
    this.fit();
  }

  private moveFloor(dir: -1 | 1): void {
    const i = this._doc.floors.findIndex((f) => f.id === this._floorId);
    const j = i + dir;
    if (i < 0 || j < 0 || j >= this._doc.floors.length) return;
    const next = structuredClone(this._doc);
    [next.floors[i], next.floors[j]] = [next.floors[j], next.floors[i]];
    this.setDoc(next);
  }

  private deleteFloor(): void {
    const floor = this.floor;
    if (!floor || !confirm(this.t("delete_floor_confirm", { name: floor.name }))) return;
    const next = structuredClone(this._doc);
    next.floors = next.floors.filter((f) => f.id !== floor.id);
    this.setDoc(next);
    this._floorId = next.floors[0]?.id ?? null;
    this._roomId = null;
  }

  private deleteRoom(): void {
    const id = this._roomId;
    if (!id || !this.isAdmin || !this.confirmFixedDelete("room", id)) return;
    this.change((_, floor) => {
      const room = floor.rooms.find((r) => r.id === id);
      floor.rooms = floor.rooms.filter((r) => r.id !== id);
      floor.openings = floor.openings.filter((o) => o.room_id !== id || o.wall);
      if (room) floor.placements = floor.placements.filter((pl) => !pointInPolygon([pl.x, pl.z], room.points));
    });
    this._roomId = null;
    this._vertex = null;
  }

  private duplicateRoom(): void {
    const room = this.room;
    if (!room || !this.isAdmin) return;
    const id = uid("room");
    this.change((_, floor) => floor.rooms.push({ ...structuredClone(room), id, points: room.points.map(([x, z]) => [round(x + 0.5), round(z + 0.5)]) }));
    this._roomId = id;
  }

  // ------------------------------------------------------------------ roof sections

  /** A section is fixed by its own lock or by the plan lock. */
  private roofFixed(sec: RoofSection | undefined): boolean {
    return !!sec && (!!sec.locked || !!this._doc.settings.lock_plan);
  }

  /** Floor buttons in the roof tool: the plan below shows that floor's rooms to draw along. */
  private renderRoofFloors() {
    const floors = [...this._doc.floors].sort((a, b) => b.elevation - a.elevation);
    if (floors.length < 2) return nothing;
    return html`<div class="fp3d-seg fp3d-dev-source">
      ${floors.map((f) => html`<button aria-pressed=${f.id === this._floorId} @click=${() => (this._floorId = f.id)}>${f.name}</button>`)}
    </div>`;
  }

  private get roofSection(): RoofSection | undefined {
    return this._roofId ? this._doc.settings.roof.sections?.find((x) => x.id === this._roofId) : undefined;
  }



  /** Switch to a roof of sections; without sections yet, propose them from the rooms. */
  private useRoofSections(regenerate = false): void {
    if (!this.isAdmin) return;
    const has = (this._doc.settings.roof.sections ?? []).length > 0;
    if (regenerate && has && !confirm(this.t("roof_regen_confirm"))) return;
    this.change((doc) => {
      doc.settings.roof.type = "custom";
      if (regenerate || !has) doc.settings.roof.sections = roofSectionsFromRooms(doc, () => uid("roof"));
    });
    this._roofId = null;
  }

  private addRoofSection(lo: Vec2, hi: Vec2): void {
    if (!this.isAdmin) return;
    // eaves on the walls of the rooms below (a garage), whatever floor the plan shows; over no room
    // (a terrace, a carport) a canopy: a flat pent roof on posts, 2.4 m above the ground floor
    const walls = wallTopUnder(this._doc, lo[0], lo[1], hi[0], hi[1]);
    const ground = Math.min(...this._doc.floors.map((f) => f.elevation));
    const canopy = walls === null;
    const top = round(walls ?? ground + 2.4);
    const pitch = canopy ? 6 : this._doc.settings.roof.pitch || 35;
    const sec: RoofSection = {
      id: uid("roof"),
      x0: round(lo[0]),
      z0: round(lo[1]),
      x1: round(hi[0]),
      z1: round(hi[1]),
      shape: canopy ? "pent" : "gable",
      axis: hi[0] - lo[0] >= hi[1] - lo[1] ? "x" : "z",
      eave_a: top,
      eave_b: top,
      pitch_a: pitch,
      pitch_b: pitch,
      base: top,
      overhang: canopy ? 0.15 : null,
      ...(canopy ? { open: true } : {}),
    };
    this.change((doc) => {
      doc.settings.roof.type = "custom";
      doc.settings.roof.sections = [...(doc.settings.roof.sections ?? []), sec];
    });
    this._roofId = sec.id;
  }

  /** A flat section takes the outline of the floor shown (its rooms at the outer wall faces) as its shape. */
  private takeRoofOutline(): void {
    const floor = this.floor;
    const id = this._roofId;
    if (!floor || !id || !this.isAdmin) return;
    const outline = floorOutline(floor.rooms, floor.walls ?? [], this._doc.settings.wall_exterior, this._doc.settings.wall_interior);
    if (!outline) return;
    const points = outline.map(([x, z]) => [round(x), round(z)] as Vec2);
    this.updateRoofSection({ shape: "flat", points, ...polygonBox(points) });
  }

  /** A dormer on a side of the selected section, in its middle; then the dormer is selected. */
  private addDormer(side: "a" | "b"): void {
    const parent = this.roofSection;
    if (!parent || !this.isAdmin) return;
    const d = proposeDormer(parent, side, uid("roof"));
    this.change((doc) => {
      doc.settings.roof.sections = [...(doc.settings.roof.sections ?? []), d];
    });
    this._roofId = d.id;
  }

  private updateRoofSection(patch: Partial<RoofSection>): void {
    const id = this._roofId;
    if (!id || !this.isAdmin) return;
    if (patch.locked === false) this._fixedHint = false;
    this.change((doc) => {
      const sec = doc.settings.roof.sections?.find((x) => x.id === id);
      if (sec) Object.assign(sec, patch);
    });
  }

  /** Turn the selected section to `angle` degrees (clockwise in the plan); its dormers and cross gables come along (#634, #724). */
  private turnRoofSection(angle: number): void {
    const id = this._roofId;
    if (!id || !this.isAdmin) return;
    this.change((doc) => {
      const sections = doc.settings.roof.sections ?? [];
      const sec = sections.find((x) => x.id === id);
      if (!sec || (sec.points && sec.points.length >= 3)) return;
      const delta = angle - (sec.rotation ?? 0);
      if (!delta) return;
      const p: Vec2 = sec.pivot ?? [round((sec.x0 + sec.x1) / 2), round((sec.z0 + sec.z1) / 2)];
      const along = new Set(sections.filter((d) => d !== sec && dormerParent(sections, d) === sec).map((d) => d.id));
      doc.settings.roof.sections = sections.map((x) => {
        if (x !== sec && !along.has(x.id)) return x;
        const t = turnSectionAbout(x, delta, p);
        return { ...t, x0: round(t.x0), x1: round(t.x1), z0: round(t.z0), z1: round(t.z1), pivot: t.pivot && ([round(t.pivot[0]), round(t.pivot[1])] as Vec2), rotation: round(t.rotation ?? 0) };
      });
    });
  }

  private deleteRoofSection(): void {
    const id = this._roofId;
    if (!id || !this.isAdmin) return;
    this.change((doc) => (doc.settings.roof.sections = (doc.settings.roof.sections ?? []).filter((x) => x.id !== id)));
    this._roofId = null;
  }

  private duplicateRoofSection(): void {
    const sec = this.roofSection;
    if (!sec || !this.isAdmin) return;
    const copy = { ...structuredClone(sec), id: uid("roof"), x0: round(sec.x0 + 1), x1: round(sec.x1 + 1), z0: round(sec.z0 + 1), z1: round(sec.z1 + 1) };
    if (sec.pivot) copy.pivot = [round(sec.pivot[0] + 1), round(sec.pivot[1] + 1)];
    this.change((doc) => (doc.settings.roof.sections = [...(doc.settings.roof.sections ?? []), copy]));
    this._roofId = copy.id;
  }

  /** The sections over the plan: outline, ridge (and hips), a label; the selected one with corner handles. */
  private renderRoofSections() {
    const roof = this._doc.settings.roof;
    const sections = roof.type === "custom" ? (roof.sections ?? []) : [];
    return svg`<g class="fp3d-roof-layer">${sections.map((sec, i) => {
      const sel = sec.id === this._roofId;
      const fr = sectionFrame(sec);
      const shape = sec.shape === "flat" && sec.points && sec.points.length >= 3 ? sec.points : null;
      // a dormer or cross gable shows as deep as it is drawn (its ridge meets the slope there)
      const parent = dormerParent(sections, sec);
      const dfr = parent ? sectionFrame(effectiveDormer(parent, sec)) : fr;
      const pts = (shape ?? [dfr.at(dfr.u0, 0), dfr.at(dfr.u1, 0), dfr.at(dfr.u1, dfr.w), dfr.at(dfr.u0, dfr.w)]).map((p) => this.toScreen(p));
      const line = (a: Vec2, b: Vec2) => {
        const [ax, ay] = this.toScreen(a);
        const [bx, by] = this.toScreen(b);
        return svg`<line x1=${ax} y1=${ay} x2=${bx} y2=${by} />`;
      };
      const geom = sec.shape === "flat" || sec.shape === "parapet" ? null : sectionGeometry(sec, { u0: 0, u1: 0, a: 0, b: 0 });
      const ridge = geom ? svg`${geom.ridges.map(([p, q]) => line(fr.at(p[0], p[1]), fr.at(q[0], q[1])))}` : nothing;
      const [cx, cy] = this.toScreen(fr.at((fr.u0 + fr.u1) / 2, fr.w / 2));
      const label = `${this.roofFixed(sec) ? "🔒 " : ""}${i + 1} · ${sec.dormer ? this.t("roof_dormer") : sec.open ? this.t("roof_open_short") : this.t(`roof_shape_${sec.shape}` as I18nKey)} · ${this.m(ridgeHeight(sec), 1)}`;
      return svg`<g data-roof=${sec.id} class=${`fp3d-roof-sec${sel ? " fp3d-roof-sel" : ""}`}>
          <polygon points=${pts.map((p) => p.join(",")).join(" ")} />
          <g class="fp3d-roof-ridge">${ridge}</g>
          <text x=${cx} y=${cy - 14}>${label}</text>
        </g>
        ${sel && this.isAdmin && !this.roofFixed(sec) && shape
          ? shape.map((p, k) => {
              const [x, y] = this.toScreen(p);
              return svg`<g class="fp3d-vertex" data-roof-vertex=${`${sec.id}:${k}`}><circle cx=${x} cy=${y} r="16" class="fp3d-hit" /><circle cx=${x} cy=${y} r="6" /></g>`;
            })
          : nothing}
        ${sel && this.isAdmin && !this.roofFixed(sec) && !shape && !sectionTurn(sec)
          ? ([[0, 0], [1, 0], [1, 1], [0, 1]] as const).map(([kx, kz]) => {
              const [x, y] = this.toScreen([kx ? Math.max(sec.x0, sec.x1) : Math.min(sec.x0, sec.x1), kz ? Math.max(sec.z0, sec.z1) : Math.min(sec.z0, sec.z1)]);
              return svg`<g class="fp3d-vertex" data-roof-corner=${`${sec.id}:${kx}:${kz}`}><circle cx=${x} cy=${y} r="16" class="fp3d-hit" /><circle cx=${x} cy=${y} r="6" /></g>`;
            })
          : nothing}`;
    })}</g>`;
  }

  /** Where a plan point lies on a face; on a house wall only along it (s = NaN: the height stays). */
  private faceHit(face: RoofFace, p: Vec2): { u: number; s: number } | null {
    if (!face.wall) return pointOnFace(face, p);
    return { u: (p[0] - face.o[0]) * face.eu[0] + (p[1] - face.o[2]) * face.eu[2], s: Number.NaN };
  }

  /** Solar fields over the plan: every module as a small rectangle; the selected field highlighted. */
  private renderSolarFields() {
    const fields = this._doc.settings.roof.solar ?? [];
    if (!fields.length) return nothing;
    const faces = roofFaces(this._doc);
    return svg`<g class="fp3d-solar-layer">${fields.map((f) => {
      const face = fieldFace(this._doc, f, faces);
      if (!face || (face.wall && face.wall.floorId !== this._floorId)) return nothing;
      const sel = f.id === this._solarId;
      let handle: unknown = nothing;
      if (sel && face.unbounded && this.isAdmin && !f.locked) {
        const [cx, cz] = fieldCenter(face, f);
        const r = ((f.rotation ?? 0) * Math.PI) / 180;
        const reach = 0.9 + Math.max(...fieldModules(face, f, true).flatMap((m) => m.corners.map((p) => Math.hypot(p[0] - cx, p[2] - cz)))) * 0.5;
        const [fx, fy] = this.toScreen([cx, cz]);
        const [hx, hy] = this.toScreen([cx + Math.sin(r) * reach, cz - Math.cos(r) * reach]);
        handle = svg`<g class="fp3d-rotate" data-solar-turn=${f.id}>
          <line x1=${fx} y1=${fy} x2=${hx} y2=${hy} />
          <circle cx=${hx} cy=${hy} r="16" class="fp3d-hit" />
          <circle cx=${hx} cy=${hy} r="8" />
          <path d="M${hx - 4} ${hy - 1}a4 4 0 1 1 2 3.5" />
        </g>`;
      }
      // the selected field also shows its switched-off modules (dashed), so they can be switched on again
      return svg`<g data-solar=${f.id} class=${`fp3d-solar${sel ? " fp3d-solar-sel" : ""}${sel && this._solarPick ? " fp3d-solar-pick" : ""}`}>${fieldModules(face, f, sel).map(
        (m) => {
          // on a wall the modules stand upright: in the plan a strip just outside the wall
          // as deep as the modules stand off the wall (tilted ones further), at least 30 cm to grab
          const depth = face.wall ? Math.max(0.3, ...m.corners.map((p) => (p[0] - face.o[0]) * face.n[0] + (p[2] - face.o[2]) * face.n[2])) : 0;
          const pts: Vec2[] = face.wall
            ? [m.corners[0], m.corners[1]].flatMap((p, i) => {
                const q: Vec2 = [p[0], p[2]];
                const o: Vec2 = [p[0] + face.n[0] * depth, p[2] + face.n[2] * depth];
                return i === 0 ? [q, o] : [o, q];
              })
            : m.corners.map((p) => [p[0], p[2]] as Vec2);
          return svg`<polygon data-cell=${m.cell} class=${m.skipped ? "fp3d-solar-off" : ""} points=${pts.map((p) => this.toScreen(p).join(",")).join(" ")} />`;
        },
      )}</g>${handle}`;
    })}</g>`;
  }

  /** Roof windows over the plan (roof tool), the selected one highlighted. */
  private renderRoofWindows() {
    const windows = this._doc.settings.roof.windows ?? [];
    if (!windows.length) return nothing;
    const faces = new Map(roofFaces(this._doc).map((f) => [f.key, f]));
    return svg`<g class="fp3d-roofwin-layer">${windows.map((w) => {
      const face = faces.get(w.face);
      const c = face ? windowCorners(face, w) : null;
      if (!c) return nothing;
      return svg`<g data-roofwin=${w.id} class=${`fp3d-roofwin${w.id === this._roofWinId ? " fp3d-roofwin-sel" : ""}`}><polygon points=${c.map((p) => this.toScreen([p[0], p[2]]).join(",")).join(" ")} /></g>`;
    })}</g>`;
  }

  private addRoofWindow(): void {
    if (!this.isAdmin) return;
    const faces = roofFaces(this._doc).filter((f) => !f.flat);
    const face = bestFace(faces, this._doc.settings.north ?? 0) ?? roofFaces(this._doc)[0];
    if (!face) return;
    const w = proposeWindow(face, uid("rwin"));
    this.change((doc) => (doc.settings.roof.windows = [...(doc.settings.roof.windows ?? []), w]));
    this._roofWinId = w.id;
    this._roofId = null;
  }

  private updateRoofWindow(patch: Partial<RoofWindow>): void {
    const id = this._roofWinId;
    if (!id || !this.isAdmin) return;
    this.change((doc) => {
      const w = doc.settings.roof.windows?.find((x) => x.id === id);
      if (!w) return;
      Object.assign(w, patch);
      const face = roofFaces(doc).find((x) => x.key === w.face);
      if (face) Object.assign(w, clampField(face, windowAsField(w)));
    });
  }

  private deleteRoofWindow(): void {
    const id = this._roofWinId;
    if (!id || !this.isAdmin) return;
    this.change((doc) => (doc.settings.roof.windows = (doc.settings.roof.windows ?? []).filter((x) => x.id !== id)));
    this._roofWinId = null;
  }

  private renderRoofWindowList() {
    const windows = this._doc.settings.roof.windows ?? [];
    const faces = new Map(roofFaces(this._doc).map((f) => [f.key, f]));
    return html`<section>
      <h3>🪟 ${this.t("roof_windows")}</h3>
      <p class="fp3d-sub">${this.t(faces.size ? "roof_windows_hint" : "solar_no_roof")}</p>
      ${windows.length
        ? html`<div class="fp3d-room-list">
            ${windows.map((w, i) => {
              const face = faces.get(w.face);
              return html`<div class="fp3d-row">
                <button class="fp3d-dev-name" @click=${() => {
                  this._roofWinId = w.id;
                  this._roofId = null;
                }}>
                  <span>${this.t("roof_window")} ${i + 1} · ${face ? this.faceLabel(face) : this.t("solar_face_gone")}</span>
                </button>
              </div>`;
            })}
          </div>`
        : nothing}
      <div class="fp3d-actions"><button class="fp3d-btn" ?disabled=${!this.isAdmin || !faces.size} @click=${() => this.addRoofWindow()}>+ ${this.t("roof_window")}</button></div>
    </section>`;
  }

  private renderRoofWindowForm(w: RoofWindow) {
    const admin = this.isAdmin;
    const faces = roofFaces(this._doc);
    const set = (patch: Partial<RoofWindow>) => this.updateRoofWindow(patch);
    const index = (this._doc.settings.roof.windows ?? []).findIndex((x) => x.id === w.id) + 1;
    const covers = this.entityOptions((id) => id.startsWith("cover."));
    const contacts = this.entityOptions((id) => binaryish(id) || numberish(id));
    return html`<button class="fp3d-btn fp3d-back" @click=${() => (this._roofWinId = null)}>‹ ${this.t("roof_sections")}</button>
      <section>
        <div class="fp3d-h3row">
          <h3>🪟 ${this.t("roof_window")} ${index}</h3>
          ${admin
            ? html`<button class="fp3d-btn fp3d-fix" aria-pressed=${!!w.locked} title=${this.t("fix_hint")} @click=${() => set({ locked: !w.locked })}>
                ${w.locked ? `🔒 ${this.t("unfix")}` : `🔓 ${this.t("fix")}`}
              </button>`
            : nothing}
        </div>
        <div class="fp3d-form">
          <label class="fp3d-field fp3d-wide"
            >${this.t("solar_face")}
            <select ?disabled=${!admin} @change=${(e: Event) => {
              const next = faces.find((x) => x.key === (e.target as HTMLSelectElement).value);
              if (next) set({ ...proposeWindow(next, w.id), w: w.w, h: w.h, cover: w.cover, contact: w.contact, tilt: w.tilt, window: w.window, name: w.name, float: w.float });
            }}>
              ${faces.map((x) => html`<option value=${x.key} ?selected=${x.key === w.face}>${this.faceLabel(x)}</option>`)}
            </select></label
          >
          ${this.len(this.t("width"), w.w ?? 0.78, (v) => set({ w: Math.max(0.3, Math.min(4, round(v))) }), 0.01, 0.3)}
          ${this.len(this.t("height_m"), w.h ?? 1.18, (v) => set({ h: Math.max(0.3, Math.min(4, round(v))) }), 0.01, 0.3)}
          ${this.len(this.t("solar_u"), w.u, (v) => set({ u: round(v) }), 0.05)}
          ${this.len(this.t("solar_v"), w.v, (v) => set({ v: round(v) }), 0.05)}
          ${this.entitySelect(this.t("cover_entity"), w.cover ?? null, undefined, covers, (v) => set({ cover: v === "none" ? null : v }))}
          ${this.entitySelect(this.t("contact_entity"), w.contact ?? null, undefined, contacts, (v) => set({ contact: v === "none" ? null : v }))}
          ${this.entitySelect(this.t("roof_window_tilt"), w.tilt ?? null, undefined, contacts, (v) => set({ tilt: v === "none" ? null : v }))}
          ${this.entitySelect(this.t("roof_window_motor"), w.window ?? null, undefined, covers, (v) => set({ window: v === "none" ? null : v }))}
          <label class="fp3d-field fp3d-wide"
            >${this.t("roof_window_name")}
            <input .value=${w.name ?? ""} ?disabled=${!admin} maxlength="64" @change=${(e: Event) => set({ name: (e.target as HTMLInputElement).value.trim() || null })}
          /></label>
        </div>
        <label class="fp3d-check"
          ><input type="checkbox" ?disabled=${!admin} .checked=${!!w.float} @change=${(e: Event) => set({ float: (e.target as HTMLInputElement).checked || undefined })} />
          ${this.t("roof_window_float")}</label
        >
        <p class="fp3d-sub">${this.t("roof_window_float_hint")}</p>
        <p class="fp3d-sub">${this.t("roof_window_motor_hint")}</p>
        <p class="fp3d-sub">${this.t("roof_window_hint")}</p>
        ${admin ? html`<div class="fp3d-actions"><button class="fp3d-btn fp3d-danger" @click=${() => this.deleteRoofWindow()}>${this.t("delete")}</button></div>` : nothing}
      </section>`;
  }

  /** Energy tool: a round marker with a symbol and its name on every energy device of the floor, above all else. */
  /** The cables' ways (with a still picture of the flows: all sensors at zero), once per document. */
  private cableSegments(): FlowSegment[] {
    if (this.cableCache?.doc === this._doc) return this.cableCache.segs;
    const b = this._doc;
    const fieldPower = new Map((b.settings.roof.solar ?? []).map((f) => [f.id, 0]));
    const summary = { grid: 0, solar: 0, battery: 0, soc: null, tariff: null, consumption: 0 };
    let segs: FlowSegment[] = [];
    try {
      segs = flowSegments({ building: b, consumers: [], summary, fieldPower }).filter((x) => x.key);
    } catch {
      segs = [];
    }
    this.cableCache = { doc: b, segs };
    return segs;
  }

  /** The cables by key, in order: solar fields, inverters, batteries, the grid. */
  private cableKeys(): string[] {
    const keys = [...new Set(this.cableSegments().map((x) => x.key!))];
    const rank = (k: string) => (k.startsWith("solar:") ? 0 : k.startsWith("inv:") ? 1 : k.startsWith("bat:") ? 2 : 3);
    return keys.sort((p, q) => rank(p) - rank(q) || p.localeCompare(q));
  }

  /** What a cable key means to the user: "Solarfeld 1 → Wechselrichter Nord". */
  private cableLabel(key: string): string {
    const furn = (id: string) => {
      const m = this._doc.floors.flatMap((f) => f.furniture).find((x) => x.id === id);
      return m ? m.name || this.t(`furn_${m.type}` as I18nKey) : "?";
    };
    const meter = this._doc.floors.flatMap((f) => f.furniture).find((x) => x.type === "meter");
    const meterName = meter ? meter.name || this.t("furn_meter") : this.t("energy_meter");
    if (key === "grid") return `${meterName} → ${this.t("furn_grid_point")}`;
    const [kind, id] = [key.slice(0, key.indexOf(":")), key.slice(key.indexOf(":") + 1)];
    if (kind === "solar") {
      const fields = this._doc.settings.roof.solar ?? [];
      const i = fields.findIndex((f) => f.id === id);
      const f = fields[i];
      return `${f?.name || `${this.t("solar_field")} ${i + 1}`} → ${this.t("furn_inverter")}`;
    }
    if (kind === "inv") return `${furn(id)} → ${meterName}`;
    return `${this.t("furn_inverter")} ↔ ${furn(id)}`;
  }

  /** Lay a cable by hand: its automatic way (on the plan) becomes points to drag. */
  private layCable(key: string): void {
    if (!this.isAdmin || !this._floorId) return;
    const pts: Vec2[] = [];
    for (const seg of this.cableSegments().filter((x) => x.key === key)) {
      for (const q of [seg.a, seg.b]) {
        const p: Vec2 = [round(q[0]), round(q[2])];
        const last = pts[pts.length - 1];
        if (!last || Math.hypot(last[0] - p[0], last[1] - p[1]) > 0.05) pts.push(p);
      }
    }
    // the ends are the devices themselves: only the way between them is laid
    const inner = pts.length > 2 ? pts.slice(1, -1) : pts;
    const floorId = this._floorId;
    this.change((d) => {
      d.settings.roof.cables = [...(d.settings.roof.cables ?? []).filter((c) => c.id !== key), { id: key, floor_id: floorId, points: inner.length ? inner : [pts[0] ?? [0, 0]], height: 0.03 }];
    });
    this._cableId = key;
  }

  /** The cables in the plan: faint for the automatic ways, solid for laid ones, with points on the picked cable. */
  private renderCables() {
    if (!hasFeature("energy_pro")) return nothing;
    const all = this.cableSegments();
    if (!all.length) return nothing;
    const segs = all.filter((x) => x.floorId === this._floorId);
    const cables = this._doc.settings.roof.cables ?? [];
    const sel = this._cableId;
    const keys = [...new Set(all.map((x) => x.key!))];
    return svg`<g class="fp3d-cable-layer">${keys.map((key) => {
      const laid = cables.find((c) => c.id === key);
      const cls = `fp3d-cable fp3d-cable-${key.split(":")[0]}${laid ? " fp3d-cable-laid" : ""}${key === sel ? " fp3d-cable-sel" : ""}`;
      const mine = all.filter((x) => x.key === key);
      const lines = segs
        .filter((x) => x.key === key)
        .map((x) => {
          const a = this.toScreen([x.a[0], x.a[2]]);
          const b = this.toScreen([x.b[0], x.b[2]]);
          return svg`<line x1=${a[0]} y1=${a[1]} x2=${b[0]} y2=${b[1]} />`;
        });
      if (!(laid && key === sel && laid.floor_id === this._floorId && !laid.locked)) return lines.length ? svg`<g class=${cls} data-cable=${key}><g class="fp3d-cable-hit">${lines}</g>${lines}</g>` : nothing;
      // the picked laid cable: its points to drag; every piece from device to device takes new points
      const first = mine[0];
      const last = mine[mine.length - 1];
      const chain = [this.toScreen([first.a[0], first.a[2]]), ...laid.points.map((p) => this.toScreen(p)), this.toScreen([last.b[0], last.b[2]])];
      const pieces = chain.slice(0, -1).map((p, i) => svg`<line class="fp3d-cable-piece" data-cable-line=${key} data-cable-seg=${i} x1=${p[0]} y1=${p[1]} x2=${chain[i + 1][0]} y2=${chain[i + 1][1]} />`);
      const handles = laid.points.map((p, i) => {
        const q = this.toScreen(p);
        return svg`<g class="fp3d-vertex" data-cable-pt=${`${key}:${i}`}><circle cx=${q[0]} cy=${q[1]} r="16" class="fp3d-hit" /><circle cx=${q[0]} cy=${q[1]} r="6" /></g>`;
      });
      return svg`<g class=${cls} data-cable=${key}>${lines}${pieces}${handles}</g>`;
    })}</g>`;
  }

  /** Energie Pro: the cables, each to lay by hand with points and a height. */
  private renderCableSettings() {
    const keys = this.cableKeys();
    if (!keys.length) return nothing;
    const admin = this.isAdmin;
    const cables = this._doc.settings.roof.cables ?? [];
    const sel = this._cableId ? cables.find((c) => c.id === this._cableId) : undefined;
    return html`<section>
      <h3>〰 ${this.t("cables_title")}</h3>
      <p class="fp3d-sub">${this.t("cables_hint")}</p>
      <div class="fp3d-room-list">
        ${keys.map(
          (key) => html`<div class="fp3d-row">
            <button
              class="fp3d-dev-name ${key === this._cableId ? "fp3d-sel" : ""}"
              @click=${() => {
                this._cableId = key === this._cableId ? null : key;
                // a laid cable lives on its floor: the plan goes there so its points can be dragged
                const laid = cables.find((c) => c.id === key);
                if (this._cableId && laid && this._doc.floors.some((f) => f.id === laid.floor_id)) this._floorId = laid.floor_id;
              }}
            >
              <span>${this.cableLabel(key)}${cables.some((c) => c.id === key) ? html` <em class="fp3d-sub">· ${this.t("cable_laid")}</em>` : nothing}</span>
            </button>
          </div>`,
        )}
      </div>
      ${this._cableId
        ? html`<div class="fp3d-actions">
              ${sel
                ? html`<button class="fp3d-btn fp3d-fix" aria-pressed=${!!sel.locked} title=${this.t("fix_hint")} ?disabled=${!admin} @click=${() => this.change((d) => {
                      const c = d.settings.roof.cables?.find((x) => x.id === sel.id);
                      if (c) c.locked = !c.locked;
                    })}>
                      ${sel.locked ? `🔒 ${this.t("unfix")}` : `🔓 ${this.t("fix")}`}
                    </button>
                    <button class="fp3d-btn" ?disabled=${!admin} @click=${() => this.change((d) => (d.settings.roof.cables = (d.settings.roof.cables ?? []).filter((c) => c.id !== this._cableId)))}>${this.t("cable_auto")}</button>`
                : html`<button class="fp3d-btn fp3d-primary" ?disabled=${!admin || !this._floorId} @click=${() => this.layCable(this._cableId!)}>${this.t("cable_lay")}</button>`}
            </div>
            ${sel
              ? html`<div class="fp3d-form">
                    ${this.len(this.t("cable_height"), sel.height, (v) => this.change((d) => {
                      const c = d.settings.roof.cables?.find((x) => x.id === sel.id);
                      if (c) c.height = Math.min(30, Math.max(0, round(v)));
                    }), 0.05, 0)}
                  </div>
                  <p class="fp3d-sub">${sel.floor_id === this._floorId ? this.t("cable_points_hint") : this.t("cable_other_floor", { floor: this._doc.floors.find((f) => f.id === sel.floor_id)?.name ?? "" })}</p>`
              : nothing}`
        : nothing}
    </section>`;
  }

  private renderEnergyMarkers() {
    const floor = this.floor;
    if (!floor) return nothing;
    const icons: Record<string, string> = { inverter: "⚡", home_battery: "🔋", wallbox: "🔌", meter: "📟", grid_point: "🏁" };
    const h = this._doc.settings.roof.hologram;
    const holoPt = hasFeature("energy_pro") && h?.place === "free" && Number.isFinite(h.x) && Number.isFinite(h.z) ? this.toScreen([h.x!, h.z!]) : null;
    return svg`<g class="fp3d-energy-markers">${
      holoPt
        ? svg`<g data-holo-pt="1" class="fp3d-energy-marker fp3d-holo-pt">
          <circle cx=${holoPt[0]} cy=${holoPt[1]} r="17" />
          <text x=${holoPt[0]} y=${holoPt[1] + 6} class="fp3d-energy-icon">◈</text>
          <text x=${holoPt[0]} y=${holoPt[1] + 32} class="fp3d-energy-name">${this.t("holo_settings")}</text>
          <title>${this.t("holo_place_free")}</title>
        </g>`
        : nothing
    }${floor.furniture
      .filter((m) => (ENERGY_DEVICES as readonly string[]).includes(m.type))
      .map((m) => {
        const [x, y] = this.toScreen([m.x, m.z]);
        const sel = m.id === this._furnitureId;
        return svg`<g data-energy-device=${m.id} class=${`fp3d-energy-marker${sel ? " fp3d-energy-marker-sel" : ""}`}>
          <circle cx=${x} cy=${y} r="17" />
          <text x=${x} y=${y + 6} class="fp3d-energy-icon">${icons[m.type] ?? "⚡"}</text>
          ${sel ? svg`<text x=${x} y=${y + 32} class="fp3d-energy-name">${this.t(`furn_${m.type}` as I18nKey)}</text>` : nothing}
          <title>${this.t(`furn_${m.type}` as I18nKey)}</title>
        </g>`;
      })}</g>`;
  }

  /** "Main roof · south · 35°" or "Section 2 · flat roof". */
  private faceLabel(face: RoofFace): string {
    if (face.key === GROUND) return this.t("solar_ground");
    if (face.wall) {
      // named by its room and the room's corner numbers in the plan (short walls look alike otherwise, #295)
      const { floorId, room: roomId, edge, free } = face.wall;
      const floor = this._doc.floors.find((x) => x.id === floorId);
      const room = floor?.rooms.find((r) => r.id === roomId);
      const where = free ? this.t("solar_wall_free") : room ? `${room.name}${edge != null ? ` ${edge + 1}–${((edge + 1) % room.points.length) + 1}` : ""}` : "";
      return `${this.t("solar_wall")} ${floor?.name ?? ""} · ${where ? `${where} · ` : ""}${this.t(`compass_${faceCompass(face, this._doc.settings.north ?? 0)}` as I18nKey)} · ${this.m(face.lu, 2)}`;
    }
    const sections = this._doc.settings.roof.sections ?? [];
    const part = face.section ? this.t("solar_section", { n: sections.findIndex((x) => x.id === face.section) + 1 }) : this.t("solar_main");
    if (face.flat) return `${part} · ${this.t("solar_flat")}`;
    // the triangular ends of a hip or pyramid section say so, they are easy to overlook in the list (#302)
    const end = face.side === "c" || face.side === "d" ? ` · ${this.t("roof_shape_hip")}` : "";
    return `${part} · ${this.t(`compass_${faceCompass(face, this._doc.settings.north ?? 0)}` as I18nKey)} · ${Math.round(face.pitch)}°${end}`;
  }

  private addSolarField(): void {
    if (!this.isAdmin) return;
    const faces = roofFaces(this._doc);
    const used = new Set((this._doc.settings.roof.solar ?? []).map((f) => f.face));
    // the sunniest face that has no field yet, else the sunniest one
    const north = this._doc.settings.north ?? 0;
    const face = bestFace(faces.filter((f) => !used.has(f.key)), north) ?? bestFace(faces, north);
    if (!face) return;
    const field = proposeField(face, uid("pv"));
    this.change((doc) => (doc.settings.roof.solar = [...(doc.settings.roof.solar ?? []), field]));
    this._solarId = field.id;
    this._roofId = null;
  }

  /** Select a solar field; one on a house wall brings up its floor in the plan. */
  private selectSolar(id: string): void {
    this._solarId = id;
    this._roofId = null;
    const f = this._doc.settings.roof.solar?.find((x) => x.id === id);
    if (f?.face.startsWith("wall:")) this._floorId = f.face.split(":")[1];
  }

  private addWallField(): void {
    if (!this.isAdmin) return;
    const floorId = this._floorId ?? this._doc.floors[0]?.id;
    const field = floorId ? proposeWallField(this._doc, uid("pv"), floorId) : null;
    if (!field) return;
    this.change((doc) => (doc.settings.roof.solar = [...(doc.settings.roof.solar ?? []), field]));
    this._solarId = field.id;
  }

  private addGroundField(): void {
    if (!this.isAdmin) return;
    const field = proposeGroundField(this._doc, uid("pv"));
    this.change((doc) => (doc.settings.roof.solar = [...(doc.settings.roof.solar ?? []), field]));
    this._solarId = field.id;
  }

  private updateSolar(patch: Partial<SolarField>): void {
    const id = this._solarId;
    if (!id || !this.isAdmin) return;
    if (patch.locked === false) this._fixedHint = false;
    this.change((doc) => {
      const f = doc.settings.roof.solar?.find((x) => x.id === id);
      if (!f) return;
      Object.assign(f, patch);
      // a larger field (more rows, landscape …) moves back so that it stays on its face where it can
      const face = fieldFace(doc, f);
      if (face) Object.assign(f, clampField(face, f));
    });
  }

  /** Put the selected field into a string ("new" makes one), or take it out (null). */
  private setSolarString(value: string | null): void {
    const id = this._solarId;
    if (!id || !this.isAdmin) return;
    this.change((doc) => {
      const roof = doc.settings.roof;
      const f = roof.solar?.find((x) => x.id === id);
      if (!f) return;
      if (value === "new") {
        const strings = roof.strings ?? [];
        const s: SolarString = { id: uid("str"), name: this.t("solar_string_n", { n: strings.length + 1 }), entity: f.entity ?? null, inverter: null };
        roof.strings = [...strings, s];
        f.string = s.id;
      } else f.string = value;
      // strings without fields go away
      const used = new Set((roof.solar ?? []).map((x) => x.string).filter(Boolean));
      roof.strings = (roof.strings ?? []).filter((x) => used.has(x.id));
    });
  }

  private updateSolarString(patch: Partial<SolarString>): void {
    const field = this._doc.settings.roof.solar?.find((x) => x.id === this._solarId);
    const sid = field?.string;
    if (!sid || !this.isAdmin) return;
    this.change((doc) => {
      const s = doc.settings.roof.strings?.find((x) => x.id === sid);
      if (s) Object.assign(s, patch);
    });
  }

  private toggleSolarCell(cell: string): void {
    this.updateSolarField((f) => {
      const skip = new Set(f.skip ?? []);
      if (skip.has(cell)) skip.delete(cell);
      else skip.add(cell);
      f.skip = skip.size ? [...skip].sort() : null;
    });
  }

  private updateSolarField(edit: (f: SolarField) => void): void {
    const id = this._solarId;
    if (!id || !this.isAdmin) return;
    this.change((doc) => {
      const f = doc.settings.roof.solar?.find((x) => x.id === id);
      if (f) edit(f);
    });
  }

  private deleteSolar(): void {
    const id = this._solarId;
    if (!id || !this.isAdmin) return;
    this.change((doc) => {
      const roof = doc.settings.roof;
      roof.solar = (roof.solar ?? []).filter((x) => x.id !== id);
      const used = new Set(roof.solar.map((x) => x.string).filter(Boolean));
      roof.strings = (roof.strings ?? []).filter((x) => used.has(x.id));
    });
    this._solarId = null;
  }

  /** The overview of the solar fields, below the roof sections. */
  private renderSolarList() {
    const fields = this._doc.settings.roof.solar ?? [];
    const roofList = roofFaces(this._doc);
    const faces = new Map(fields.map((f) => [f.id, fieldFace(this._doc, f, roofList)] as const));
    const admin = this.isAdmin;
    return html`<section>
      ${this.renderRoofFloors()}
      <h3>☀ ${this.t("solar_fields")}</h3>
      <p class="fp3d-sub">${this.t(roofList.length ? "solar_hint" : "solar_no_roof")}</p>
      ${fields.length
        ? html`<div class="fp3d-room-list">
            ${fields.map((f, i) => {
              const face = faces.get(f.id);
              const n = face ? fieldModules(face, f).length : 0;
              return html`<div class="fp3d-row">
                <button
                  class="fp3d-dev-name"
                  @click=${() => this.selectSolar(f.id)}
                >
                  <span>${f.name || `${this.t("solar_field")} ${i + 1}`} · ${face ? this.faceLabel(face) : this.t("solar_face_gone")} · ${this.t("solar_summary", { n, kwp: formatNumber(this.hass, (n * (f.wp ?? 400)) / 1000, 1) })}</span>
                </button>
              </div>`;
            })}
          </div>`
        : nothing}
      <div class="fp3d-actions">
        <button class="fp3d-btn fp3d-primary" ?disabled=${!admin || !roofList.length} @click=${() => this.addSolarField()}>+ ${this.t("solar_add")}</button>
        <button class="fp3d-btn" ?disabled=${!admin} @click=${() => this.addGroundField()}>+ ${this.t("solar_add_ground")}</button>
        <button class="fp3d-btn" ?disabled=${!admin || !this._floorId} @click=${() => this.addWallField()}>+ ${this.t("solar_add_wall")}</button>
      </div>
      ${(this._doc.settings.roof.strings ?? []).length
        ? html`<h4 class="fp3d-lib-head">${this.t("solar_strings")}</h4>
            ${(this._doc.settings.roof.strings ?? []).map((st) => {
              const own = fields.filter((f) => f.string === st.id);
              const counts = own.map((f) => (faces.get(f.id) ? fieldModules(faces.get(f.id)!, f).length : 0));
              const n = counts.reduce((a, b) => a + b, 0);
              const kwp = own.reduce((a, f, k) => a + (counts[k] * (f.wp ?? 400)) / 1000, 0);
              return html`<p class="fp3d-sub">🔗 <b>${st.name}</b> · ${this.t("solar_string_sum", { fields: own.length, n, kwp: formatNumber(this.hass, kwp, 1) })}</p>`;
            })}`
        : nothing}
    </section>`;
  }

  private renderSolarForm(f: SolarField) {
    const admin = this.isAdmin;
    const faces = roofFaces(this._doc);
    const walls = wallFaces(this._doc);
    const face = fieldFace(this._doc, f, faces);
    const ground = f.face === GROUND;
    const n = face ? fieldModules(face, f).length : 0;
    const counts = rowCounts(f);
    const total = counts.reduce((a, b) => a + b, 0) - (f.skip?.length ?? 0);
    const power = this.entityOptions((id) => this.isPowerSensor(id));
    const set = (patch: Partial<SolarField>) => this.updateSolar(patch);
    const index = (this._doc.settings.roof.solar ?? []).findIndex((x) => x.id === f.id) + 1;
    return html`<button class="fp3d-btn fp3d-back" @click=${() => (this._solarId = null)}>‹ ${this.t("solar_fields")}</button>
      <section>
        ${this.renderRoofFloors()}
        <div class="fp3d-h3row">
          <h3>☀ ${f.name || `${this.t("solar_field")} ${index}`}</h3>
          ${admin
            ? html`<button class="fp3d-btn fp3d-fix" aria-pressed=${!!f.locked} title=${this.t("fix_hint")} @click=${() => this.updateSolar({ locked: !f.locked })}>
                ${f.locked ? `🔒 ${this.t("unfix")}` : `🔓 ${this.t("fix")}`}
              </button>`
            : nothing}
        </div>
        <div class="fp3d-form">
          <label class="fp3d-field fp3d-wide"
            >${this.t("solar_name")}
            <input
              type="text"
              ?disabled=${!admin}
              .value=${f.name ?? ""}
              placeholder=${this.t("solar_name_hint")}
              @change=${(e: Event) => set({ name: (e.target as HTMLInputElement).value.trim() || null })}
          /></label>
          <label class="fp3d-field fp3d-wide"
            >${this.t("solar_face")}
            <select
              ?disabled=${!admin}
              @change=${(e: Event) => {
                const key = (e.target as HTMLSelectElement).value;
                const keep = { portrait: f.portrait, look: f.look, name: f.name, string: f.string, entity: f.entity, module_w: f.module_w, module_h: f.module_h, wp: f.wp };
                // on another face the field keeps its modules and is laid out anew there (#258)
                if (key === GROUND) set({ ...proposeGroundField(this._doc, f.id), ...keep, rows: f.rows, cols: f.cols });
                const next = faces.find((x) => x.key === key);
                if (next) set(moveField(next, { ...f, ...keep }));
                const wall = walls.find((x) => x.key === key);
                if (wall) set(moveField(wall, { ...f, ...keep, rows: 1 }));
              }}
            >
              ${face ? nothing : html`<option selected>${this.t("solar_face_gone")}</option>`}
              ${faces.map((x) => html`<option value=${x.key} ?selected=${x.key === f.face}>${this.faceLabel(x)}</option>`)}
              <option value=${GROUND} ?selected=${ground}>${this.t("solar_ground")}</option>
              ${walls.map((x) => html`<option value=${x.key} ?selected=${x.key === f.face}>${this.faceLabel(x)}</option>`)}
            </select></label
          >
          ${this.num(this.t("solar_rows"), counts.length, (v) => {
            const rows = Math.max(1, Math.min(40, Math.round(v)));
            // rows of their own length keep their counts; new rows take the last row's
            set(f.layout?.length ? { layout: Array.from({ length: rows }, (_, i) => f.layout![i] ?? f.layout![f.layout!.length - 1]), rows } : { rows });
          }, 1, 1)}
          <label class="fp3d-field"
            >${this.t("solar_cols")}
            <input
              type="text"
              inputmode="numeric"
              ?disabled=${!admin}
              .value=${f.layout?.length ? f.layout.join(", ") : String(f.cols)}
              title=${this.t("solar_cols_hint")}
              @change=${(e: Event) => {
                const parts = (e.target as HTMLInputElement).value.split(/[,;\s]+/).map((x) => parseInt(x, 10)).filter((x) => Number.isFinite(x) && x >= 0);
                if (!parts.length) return;
                // one number: every row the same; a list: each row its own (4, 4, 3)
                if (parts.length === 1) set({ cols: Math.max(1, Math.min(60, parts[0])), layout: null, skip: null });
                else set({ layout: parts.slice(0, 40).map((x) => Math.min(60, x)), rows: Math.min(40, parts.length), cols: Math.max(1, ...parts), skip: null });
              }}
          /></label>
        </div>
        <p class="fp3d-sub">
          ${face && !face.unbounded ? html`${this.t("solar_face_size", { w: formatNumber(this.hass, face.lu, 1), h: formatNumber(this.hass, face.ls, 1) })} · ` : nothing}${this.t("solar_cols_hint")}
        </p>
        ${f.layout?.length && new Set(f.layout).size > 1
          ? html`<div class="fp3d-seg fp3d-dev-source">
              ${(["left", "center", "right"] as const).map((a) => html`<button aria-pressed=${(f.align ?? "left") === a} ?disabled=${!admin} @click=${() => set({ align: a })}>${this.t(`solar_align_${a}` as I18nKey)}</button>`)}
            </div>`
          : nothing}
        <div class="fp3d-seg fp3d-dev-source">
          <button aria-pressed=${f.portrait !== false} ?disabled=${!admin} @click=${() => set({ portrait: true })}>${this.t("solar_portrait")}</button>
          <button aria-pressed=${f.portrait === false} ?disabled=${!admin} @click=${() => set({ portrait: false })}>${this.t("solar_landscape")}</button>
        </div>
        <div class="fp3d-seg fp3d-dev-source">
          <button aria-pressed=${f.look !== "blue"} ?disabled=${!admin} @click=${() => set({ look: "black" })}>${this.t("solar_look_black")}</button>
          <button aria-pressed=${f.look === "blue"} ?disabled=${!admin} @click=${() => set({ look: "blue" })}>${this.t("solar_look_blue")}</button>
        </div>
        <div class="fp3d-form">
          ${this.len(this.t("solar_module_w"), f.module_w ?? 1.13, (v) => set({ module_w: Math.max(0.3, Math.min(3, round(v))) }), 0.01, 0.3)}
          ${this.len(this.t("solar_module_h"), f.module_h ?? 1.72, (v) => set({ module_h: Math.max(0.3, Math.min(3, round(v))) }), 0.01, 0.3)}
          ${this.num(this.t("solar_wp"), f.wp ?? 400, (v) => set({ wp: Math.max(50, Math.min(1500, Math.round(v))) }), 5, 50)}
        </div>
        <div class="fp3d-actions">
          <button class="fp3d-btn" aria-pressed=${this._solarPick} ?disabled=${!admin} @click=${() => (this._solarPick = !this._solarPick)}>${this._solarPick ? "✓ " : ""}${this.t("solar_pick")}</button>
          ${f.skip?.length ? html`<button class="fp3d-btn" ?disabled=${!admin} @click=${() => set({ skip: null })}>${this.t("solar_pick_all")}</button>` : nothing}
        </div>
        ${this._solarPick ? html`<p class="fp3d-sub">${this.t("solar_pick_hint")}</p>` : nothing}
        <div class="fp3d-form">
          ${ground
            ? html`${this.len(this.t("solar_base"), f.base ?? 0, (v) => set({ base: v > 0.001 ? Math.min(60, round(v)) : null }), 0.05, 0)}
                ${this.num(this.t("solar_rotation"), f.rotation ?? 0, (v) => set(turnGroundField(this._doc, f, v)), 5)}
                <div class="fp3d-actions">
                  <button class="fp3d-chip" ?disabled=${!admin} @click=${() => set(turnGroundField(this._doc, f, (f.rotation ?? 0) - 15))}>↺ 15°</button>
                  <button class="fp3d-chip" ?disabled=${!admin} @click=${() => set(turnGroundField(this._doc, f, (f.rotation ?? 0) + 15))}>↻ 15°</button>
                </div>`
            : html`${this.len(this.t("solar_u"), f.u, (v) => set({ u: round(v) }), 0.05)} ${this.num(this.t(face?.wall ? "solar_v_wall" : "solar_v"), f.v, (v) => set({ v: round(v) }), 0.05)}`}
          ${face?.wall
            ? html`${this.num(this.t("solar_tilt_wall"), f.tilt ?? 0, (v) => set({ tilt: Math.max(0, Math.min(90, Math.round(v))) }), 5, 0)}
                <label class="fp3d-check fp3d-wide"
                  ><input type="checkbox" ?disabled=${!admin} .checked=${!!f.flip} @change=${(e: Event) => set({ flip: (e.target as HTMLInputElement).checked })} />
                  ${this.t("solar_flip_wall")}</label
                >`
            : nothing}
          ${face?.flat
            ? html`${this.num(this.t("solar_tilt"), f.tilt ?? 15, (v) => set({ tilt: Math.max(0, Math.min(45, Math.round(v))) }), 1, 0)}
                <label class="fp3d-check fp3d-wide"
                  ><input type="checkbox" ?disabled=${!admin} .checked=${!!f.flip} @change=${(e: Event) => set({ flip: (e.target as HTMLInputElement).checked })} />
                  ${this.t("solar_flip")}</label
                >`
            : nothing}
        </div>
        <p class="fp3d-sub">
          ${this.t("solar_summary", { n, kwp: formatNumber(this.hass, (n * (f.wp ?? 400)) / 1000, 1) })}${n < total ? html` · <b>${this.t("solar_partial", { n, total })}</b>` : nothing}
        </p>
        <h4 class="fp3d-lib-head">🔗 ${this.t("solar_string")}</h4>
        <div class="fp3d-form">
          <label class="fp3d-field fp3d-wide"
            >${this.t("solar_string")}
            <select ?disabled=${!admin} @change=${(e: Event) => {
              const v = (e.target as HTMLSelectElement).value;
              this.setSolarString(v === "" ? null : v);
            }}>
              <option value="" ?selected=${!f.string}>${this.t("solar_string_none")}</option>
              ${(this._doc.settings.roof.strings ?? []).map((st) => html`<option value=${st.id} ?selected=${st.id === f.string}>${st.name}</option>`)}
              <option value="new">+ ${this.t("solar_string_new")}</option>
            </select></label
          >
          ${(() => {
            const st = this._doc.settings.roof.strings?.find((x) => x.id === f.string);
            if (!st) return this.entitySelect(this.t("solar_entity"), f.entity ?? null, undefined, power, (v) => set({ entity: v === "none" ? null : v }));
            // each inverter by its own name, else its entity's name, numbered across the house only as a last resort (#213)
            const linked = this.hass ? furnitureEntities(this.hass, this._doc.floors) : null;
            // the inverters, and the batteries with a solar input of their own (a power station, D410)
            const named = (type: "inverter" | "home_battery") =>
              this._doc.floors
                .flatMap((fl) => fl.furniture.filter((m) => m.type === type).map((m) => ({ m, fl })))
                .map(({ m, fl }, i) => {
                  const entity = linked?.get(m.id)?.entity;
                  const own = m.name?.trim() || (entity && this.hass ? entityName(this.hass, entity) : "");
                  return { id: m.id, label: `${own || `${this.t(`furn_${type}`)} ${i + 1}`} · ${fl.name}` };
                });
            const inverters = [...named("inverter"), ...named("home_battery")];
            return html`<label class="fp3d-field fp3d-wide"
                >${this.t("solar_string_name")}
                <input type="text" ?disabled=${!admin} .value=${st.name} @change=${(e: Event) => this.updateSolarString({ name: (e.target as HTMLInputElement).value.trim() || st.name })}
              /></label>
              ${this.entitySelect(this.t("solar_string_entity"), st.entity ?? null, undefined, power, (v) => this.updateSolarString({ entity: v === "none" ? null : v }))}
              <label class="fp3d-field fp3d-wide"
                >${this.t("solar_string_inverter")}
                <select ?disabled=${!admin} @change=${(e: Event) => this.updateSolarString({ inverter: (e.target as HTMLSelectElement).value || null })}>
                  <option value="" ?selected=${!st.inverter}>${this.t(inverters.length ? "solar_string_inverter_none" : "solar_string_inverter_missing")}</option>
                  ${inverters.map((x) => html`<option value=${x.id} ?selected=${x.id === st.inverter}>${x.label}</option>`)}
                </select></label
              >`;
          })()}
        </div>
        <p class="fp3d-sub">${this.t("solar_string_hint")}</p>
        <p class="fp3d-sub">${this.t("solar_form_hint")}</p>
        ${admin
          ? html`<div class="fp3d-actions">
              <button class="fp3d-btn" ?disabled=${!face} @click=${() => face && set({ ...proposeField(face, f.id), portrait: f.portrait })}>${this.t("solar_fit")}</button>
              <button class="fp3d-btn fp3d-danger" @click=${() => this.deleteSolar()}>${this.t("delete")}</button>
            </div>`
          : nothing}
      </section>`;
  }

  /** Sidebar of the roof tool: the selected section's form, or the overview of all sections. */
  private renderRoofPanel() {
    const roof = this._doc.settings.roof;
    const admin = this.isAdmin;
    const sec = roof.type === "custom" ? this.roofSection : undefined;
    const win = this._roofWinId ? roof.windows?.find((x) => x.id === this._roofWinId) : undefined;
    if (win) return this.renderRoofWindowForm(win);
    if (sec) return this.renderRoofSectionForm(sec);
    const sections = roof.type === "custom" ? (roof.sections ?? []) : [];
    return html`${this.renderRoofBasics()}
    <section>
      ${this.renderRoofFloors()}
      <h3>${this.t("roof_sections")}</h3>
      <p class="fp3d-sub">${this.t("roof_sections_hint")}</p>
      ${roof.type !== "custom"
        ? html`<div class="fp3d-actions"><button class="fp3d-btn fp3d-primary" ?disabled=${!admin} @click=${() => this.useRoofSections()}>${this.t("roof_sections_start")}</button></div>`
        : html`<div class="fp3d-room-list">
              ${sections.map(
                (x, i) => html`<div class="fp3d-row">
                  <button class="fp3d-dev-name" @click=${() => (this._roofId = x.id)}>
                    <span>${i + 1} · ${x.dormer ? this.t("roof_dormer") : this.t(`roof_shape_${x.shape}` as I18nKey)} · ${this.m(Math.abs(x.x1 - x.x0), 1)} × ${this.m(Math.abs(x.z1 - x.z0), 1)} · ${this.t("roof_ridge_height")} ${this.m(ridgeHeight(x), 1)}</span>
                  </button>
                </div>`,
              )}
            </div>
            <div class="fp3d-actions">
              <button class="fp3d-btn" ?disabled=${!admin} @click=${() => this.useRoofSections(true)}>${this.t("roof_sections_regen")}</button>
              <button class="fp3d-btn" ?disabled=${!admin} @click=${() => this.change((doc) => (doc.settings.roof.type = "gable"))}>${this.t("roof_sections_off")}</button>
            </div>`}
    </section>
    ${this.renderRoofWindowList()}`;
  }

  /** Sidebar of the energy tool: the selected solar field, or the overview (fields, strings). */
  private renderEnergyPanel() {
    const field = this._solarId ? this._doc.settings.roof.solar?.find((x) => x.id === this._solarId) : undefined;
    if (field) return this.renderSolarForm(field);
    const device = this._furnitureId ? this.floor?.furniture.find((x) => x.id === this._furnitureId && (ENERGY_DEVICES as readonly string[]).includes(x.type)) : undefined;
    if (device)
      return html`<button class="fp3d-btn fp3d-back" @click=${() => this.selectItem("furniture", null)}>‹ ${this.t("tool_energy")}</button>
        ${this.renderFurnitureForm(device)}`;
    const pro = hasFeature("energy_pro");
    return html`${this.renderEnergyChecklist()}${this.renderSolarList()}${this.renderEnergyDevices()}${this.renderEnergyBalance()}${pro ? this.renderCableSettings() : nothing}${pro ? this.renderHologramSettings() : nothing}${this.renderProCard()}`;
  }

  /**
   * Energie Pro: which solar field the hologram hangs on, how big it is and where exactly. Shown without solar
   * fields too (the house card then hangs beside the house), only the field's own settings wait for a field (#334).
   */
  private renderHologramSettings() {
    const fields = this._doc.settings.roof.solar ?? [];
    const admin = this.isAdmin;
    const h = this._doc.settings.roof.hologram ?? DEFAULT_HOLOGRAM;
    const free = h.place === "free";
    const set = (patch: Partial<HologramSettings>) => this.change((d) => (d.settings.roof.hologram = { ...(d.settings.roof.hologram ?? DEFAULT_HOLOGRAM), ...patch }));
    const name = (f: SolarField, i: number) => f.name || `${this.t("solar_field")} ${i + 1}`;
    // setting it free for the first time puts the handle beside the house, to the right of the rooms
    const setFree = () => {
      let x1 = -Infinity;
      let z0 = Infinity;
      let z1 = -Infinity;
      for (const f of this._doc.floors) for (const r of f.rooms) for (const [x, z] of r.points) {
        x1 = Math.max(x1, x);
        z0 = Math.min(z0, z);
        z1 = Math.max(z1, z);
      }
      const ok = Number.isFinite(x1);
      set({ place: "free", x: h.x ?? (ok ? round(x1 + 2) : 0), z: h.z ?? (ok ? round((z0 + z1) / 2) : 0), height: h.height ?? 3 });
    };
    return html`<section>
      <h3>◈ ${this.t("holo_settings")}</h3>
      <p class="fp3d-sub">${this.t("holo_settings_hint")}</p>
      <div class="fp3d-form">
        <label class="fp3d-field fp3d-wide"
          >${this.t("holo_place")}
          <select ?disabled=${!admin} @change=${(e: Event) => ((e.target as HTMLSelectElement).value === "free" ? setFree() : set({ place: "field" }))}>
            <option value="field" ?selected=${!free}>${this.t("holo_place_field")}</option>
            <option value="free" ?selected=${free}>${this.t("holo_place_free")}</option>
          </select>
        </label>
        ${free
          ? html`<p class="fp3d-sub fp3d-wide">${this.t("holo_free_hint")}</p>
              ${this.len("X (m)", h.x ?? 0, (v) => set({ x: round(v) }), 0.25)} ${this.len("Z (m)", h.z ?? 0, (v) => set({ z: round(v) }), 0.25)}
              ${this.len(this.t("holo_height"), h.height ?? 3, (v) => set({ height: Math.min(60, Math.max(0, round(v))) }), 0.25, 0)}`
          : !fields.length
            ? html`<p class="fp3d-sub fp3d-wide">${this.t("holo_no_field")}</p>`
          : html`<label class="fp3d-field fp3d-wide"
                >${this.t("holo_field")}
                <select ?disabled=${!admin} @change=${(e: Event) => set({ field: (e.target as HTMLSelectElement).value || null })}>
                  <option value="" ?selected=${!h.field}>${this.t("holo_field_auto")}</option>
                  ${fields.map((f, i) => html`<option value=${f.id} ?selected=${f.id === h.field}>${name(f, i)}</option>`)}
                </select>
              </label>
              ${this.len(this.t("holo_right"), h.right, (v) => set({ right: Math.min(30, Math.max(-30, round(v))) }), 0.25)}
              ${this.len(this.t("holo_up"), h.up, (v) => set({ up: Math.min(30, Math.max(-30, round(v))) }), 0.25)}`}
        ${this.num(this.t("holo_size"), h.size, (v) => set({ size: Math.min(3, Math.max(0.3, round(v))) }), 0.1, 0.3)}
        ${this.num(this.t("holo_device_min_w"), h.device_min_w ?? 0, (v) => set({ device_min_w: Math.max(0, Math.round(v)) }), 1, 0)}
        <label class="fp3d-check fp3d-wide" title=${this.t("holo_device_house_hint")}
          ><input type="checkbox" .checked=${h.device_house !== false} ?disabled=${!admin} @change=${(e: Event) => set({ device_house: (e.target as HTMLInputElement).checked ? undefined : false })} />
          ${this.t("holo_device_house")}</label
        >
        <label class="fp3d-check fp3d-wide" title=${this.t("holo_device_room_hint")}
          ><input type="checkbox" .checked=${!!h.device_room} ?disabled=${!admin} @change=${(e: Event) => set({ device_room: (e.target as HTMLInputElement).checked || undefined })} />
          ${this.t("holo_device_room")}</label
        >
        <label class="fp3d-check fp3d-wide" title=${this.t("holo_plant_floor_hint")}
          ><input type="checkbox" .checked=${!!h.plant_floor} ?disabled=${!admin} @change=${(e: Event) => set({ plant_floor: (e.target as HTMLInputElement).checked || undefined })} />
          ${this.t("holo_plant_floor")}</label
        >
        <label class="fp3d-check fp3d-wide" title=${this.t("holo_mirror_hint")}
          ><input type="checkbox" .checked=${h.mirror !== false} ?disabled=${!admin} @change=${(e: Event) => set({ mirror: (e.target as HTMLInputElement).checked ? undefined : false })} />
          ${this.t("holo_mirror")}</label
        >
      </div>
    </section>`;
  }

  /** A power sensor: device class power, or a plain sensor in W or kW (templates, MQTT, many meters have no class). */
  private isPowerSensor(id: string): boolean {
    if (!numberish(id)) return false;
    const a = this.hass?.states[id]?.attributes;
    return a?.device_class === "power" || a?.unit_of_measurement === "W" || a?.unit_of_measurement === "kW";
  }

  /** The power sensor of an energy device: set by hand, or the one found on its Home Assistant device. */
  private devicePower(m: Furniture, links: Map<string, { power: string | null }>): string | null {
    return m.power && m.power !== "none" ? m.power : (links.get(m.id)?.power ?? null);
  }

  /** What the energy tool still needs, ticked off live; every row jumps to the right place. */
  private renderEnergyChecklist() {
    const doc = this._doc;
    const links = this.hass ? furnitureEntities(this.hass, doc.floors) : new Map<string, { power: string | null }>();
    const all = doc.floors.flatMap((fl) => fl.furniture.map((m) => ({ m, fl })));
    const of = (type: string) => all.filter((x) => x.m.type === type);
    const goTo = (x: (typeof all)[number]) => {
      this._floorId = x.fl.id;
      this._solarId = null;
      this.selectItem("furniture", x.m.id);
      this.showPoint(x.m.x, x.m.z);
    };
    const fields = doc.settings.roof.solar ?? [];
    const meters = of("meter");
    const inverters = of("inverter");
    const batteries = of("home_battery");
    const grid = of("grid_point");
    const meterOk = !!doc.energy.grid || meters.some((x) => this.devicePower(x.m, links));
    const inverterOk = !!doc.energy.solar || (inverters.length > 0 && inverters.every((x) => this.devicePower(x.m, links)));
    const batteryOk = batteries.every((x) => this.devicePower(x.m, links) && x.m.soc && x.m.soc !== "none") || !!doc.energy.battery;
    const pro = hasFeature("energy_pro");
    type Row = { state: "ok" | "todo" | "opt"; label: string; action?: () => void; href?: string };
    const rows: Row[] = [
      { state: fields.length ? "ok" : "todo", label: this.t(fields.length ? "chk_solar" : "chk_solar_add"), action: fields.length ? () => (this._solarId = fields[0].id) : () => this.addSolarField() },
      meters.length
        ? { state: meterOk ? "ok" : "todo", label: this.t(meterOk ? "chk_meter" : "chk_meter_sensor"), action: () => goTo(meters[0]) }
        : { state: "todo", label: this.t("chk_meter_add"), action: () => this.addEnergyDevice("meter") },
      inverters.length
        ? { state: inverterOk ? "ok" : "todo", label: this.t(inverterOk ? "chk_inverter" : "chk_inverter_sensor"), action: () => goTo(inverters.find((x) => !this.devicePower(x.m, links)) ?? inverters[0]) }
        : { state: "todo", label: this.t("chk_inverter_add"), action: () => this.addEnergyDevice("inverter") },
      batteries.length
        ? { state: batteryOk ? "ok" : "todo", label: this.t(batteryOk ? "chk_battery" : "chk_battery_sensor"), action: () => goTo(batteries[0]) }
        : { state: "opt", label: this.t("chk_battery_opt"), action: () => this.addEnergyDevice("home_battery") },
      grid.length ? { state: "ok", label: this.t("chk_grid"), action: () => goTo(grid[0]) } : { state: "opt", label: this.t("chk_grid_opt"), action: () => this.addEnergyDevice("grid_point") },
      pro ? { state: "ok", label: this.t("chk_pro_active") } : { state: "opt", label: this.t("chk_pro_get"), href: shopUrl(this.hass?.language) },
    ];
    const done = rows.filter((r) => r.state === "ok").length;
    return html`<section class="fp3d-checklist">
      <h3>☑ ${this.t("chk_title")} <span class="fp3d-sub">${done}/${rows.length}</span></h3>
      <p class="fp3d-sub">${this.t("chk_hint")}</p>
      ${rows.map((r) =>
        r.href
          ? html`<a class="fp3d-chk fp3d-chk-${r.state}" href=${r.href} target="_blank" rel="noopener"><span>${r.state === "ok" ? "✓" : r.state === "todo" ? "○" : "·"}</span>${r.label}</a>`
          : html`<button class="fp3d-chk fp3d-chk-${r.state}" ?disabled=${!this.isAdmin && !!r.action && r.state !== "ok"} @click=${r.action}><span>${r.state === "ok" ? "✓" : r.state === "todo" ? "○" : "·"}</span>${r.label}</button>`,
      )}
    </section>`;
  }

  /** Where to report a problem and where to propose an idea. */
  private renderHelpLinks() {
    return html`<section class="fp3d-help">
      <h3>${this.t("help_title")}</h3>
      <p class="fp3d-sub">${this.t("help_hint")}</p>
      <div class="fp3d-actions">
        <a class="fp3d-btn" href="https://github.com/Mastershort/neonplan3d/issues/new/choose" target="_blank" rel="noopener">🐞 ${this.t("help_issue")}</a>
        <a class="fp3d-btn" href="https://github.com/Mastershort/neonplan3d/discussions/categories/ideas" target="_blank" rel="noopener">💡 ${this.t("help_idea")}</a>
        <a class="fp3d-btn" href="https://discord.gg/SSdVVFsev7" target="_blank" rel="noopener">💬 ${this.t("help_discord")}</a>
      </div>
    </section>`;
  }

  /** The Pro add-on: active (with the manual), or what it brings and where to get it. */
  private renderProCard() {
    const lang = this.hass?.language;
    if (hasFeature("energy_pro")) {
      return html`<section class="fp3d-teaser fp3d-teaser-on">
        <div class="fp3d-teaser-head"><b>✓ ${this.t("energy_pro_active")}</b></div>
        <p class="fp3d-sub">${this.t("energy_pro_active_hint")}</p>
        <div class="fp3d-actions"><a class="fp3d-btn" href=${manualUrl(lang, "energy_pro")} target="_blank" rel="noopener">📖 ${this.t("manual")}</a></div>
      </section>`;
    }
    const picture = new URL("./images/solar-pro.jpg", import.meta.url).href;
    return html`<section class="fp3d-teaser">
      <div class="fp3d-teaser-head"><b>⚡ ${this.t("pro_name_energy_pro")}</b><a class="fp3d-btn fp3d-primary" href=${shopUrl(lang)} target="_blank" rel="noopener">${this.t("pro_unlock")}</a></div>
      <img src=${picture} alt=${this.t("solar_pro_title")} loading="lazy" />
      <ul>
        <li>${this.t("solar_pro_1")}</li>
        <li>${this.t("solar_pro_2")}</li>
        <li>${this.t("solar_pro_3")}</li>
        <li>${this.t("solar_pro_4")}</li>
      </ul>
      <p class="fp3d-sub">${this.t("solar_pro_free")}</p>
      <div class="fp3d-actions"><a class="fp3d-btn" href=${manualUrl(lang, "energy_pro")} target="_blank" rel="noopener">📖 ${this.t("manual")}</a></div>
    </section>`;
  }

  /**
   * Add an energy device where it belongs: a wallbox in the garage (or carport), an inverter or a battery in a
   * utility room (or the garage), else in the selected room; against the nearest wall, and the plan goes there.
   */
  private addEnergyDevice(type: string): void {
    const floor = this.floor;
    if (!floor || !this.isAdmin) return;
    if (type === "grid_point") {
      // the grid connection goes where the cable would reach the street by itself; then it can be dragged
      const auto = gridPoint(this._doc);
      const [gw, gd, gh] = furnitureSize(type);
      const [gx, gz] = auto ? auto.end : this.toWorld(this._size.w / 2, this._size.h / 2);
      const point: Furniture = { id: uid("furniture"), type, x: round(gx), z: round(gz), rotation: 0, w: gw, d: gd, h: gh, variant: null };
      this.change((_, f) => f.furniture.push(point));
      this.selectItem("furniture", point.id);
      this.showPoint(point.x, point.z);
      return;
    }
    const areaName = (r: Room) => `${r.name} ${(r.area_id && this.hass?.areas?.[r.area_id]?.name) || ""} ${r.area_id ?? ""}`.toLowerCase();
    const rooms = floor.rooms.filter((r) => r.points.length >= 3);
    const find = (re: RegExp) => rooms.find((r) => re.test(areaName(r)));
    const parked = rooms.find((r) => floor.furniture.some((m) => m.type === "parking" && pointInPolygon([m.x, m.z], r.points)));
    const garage = find(/garage|carport/) ?? parked;
    const utility = find(/hwr|hauswirt|technik|keller|abstell|utility|basement|boiler|heiz/);
    const hall = find(/flur|diele|eingang|hall|entr|lobby/);
    const room = (type === "wallbox" ? garage : type === "meter" ? (utility ?? hall ?? garage) : (utility ?? garage)) ?? this.room ?? rooms.sort((a, b) => Math.abs(signedArea(b.points)) - Math.abs(signedArea(a.points)))[0];
    const [w, d, h] = furnitureSize(type);
    let [x, z] = room ? centroid(room.points) : this.toWorld(this._size.w / 2, this._size.h / 2);
    if (room) {
      // in front of the room's longest wall, so it snaps to that wall (from the middle no wall is near enough)
      const [cx, cz] = centroid(room.points);
      let best: { mx: number; mz: number; nx: number; nz: number; l: number } | null = null;
      // walls with a door, gate or window are no place for it (the garage door wall least of all)
      const open = new Set(floor.openings.filter((o) => o.room_id === room.id).map((o) => o.edge));
      const free = room.points.some((_, i) => !open.has(i));
      room.points.forEach((p, i) => {
        if (free && open.has(i)) return;
        const q = room.points[(i + 1) % room.points.length];
        const l = Math.hypot(q[0] - p[0], q[1] - p[1]);
        if (best && l <= best.l) return;
        const mx = (p[0] + q[0]) / 2;
        const mz = (p[1] + q[1]) / 2;
        let nx = -(q[1] - p[1]) / l;
        let nz = (q[0] - p[0]) / l;
        if ((cx - mx) * nx + (cz - mz) * nz < 0) [nx, nz] = [-nx, -nz];
        best = { mx, mz, nx, nz, l };
      });
      const b = best as { mx: number; mz: number; nx: number; nz: number; l: number } | null;
      if (b) [x, z] = [b.mx + b.nx * (d / 2 + 0.25), b.mz + b.nz * (d / 2 + 0.25)];
    }
    const item: Furniture = { id: uid("furniture"), type, x: round(x), z: round(z), rotation: 0, w, d, h, variant: null };
    // against the nearest wall of its room, like furniture snapping to a wall
    const snapped = room ? snapToWall({ ...floor, furniture: [...floor.furniture, item] }, item, this._doc.settings.wall_interior) : null;
    if (snapped) Object.assign(item, { x: round(snapped.x), z: round(snapped.z), rotation: snapped.rotation });
    this.change((_, f) => f.furniture.push(item));
    this.selectItem("furniture", item.id);
    this.showPoint(item.x, item.z);
  }

  /** Inverters, batteries and wallboxes of all floors, and buttons to add them on the floor shown. */
  private renderEnergyDevices() {
    const admin = this.isAdmin;
    const list = this._doc.floors.flatMap((fl) => fl.furniture.filter((m) => (ENERGY_DEVICES as readonly string[]).includes(m.type)).map((m) => ({ fl, m })));
    return html`<section>
      <h3>⚡ ${this.t("energy_devices")}</h3>
      <p class="fp3d-sub">${this.t("energy_devices_hint")}</p>
      ${list.length
        ? html`<div class="fp3d-room-list">
            ${list.map(
              ({ fl, m }) => html`<div class="fp3d-row">
                <button
                  class="fp3d-dev-name"
                  @click=${() => {
                    this._floorId = fl.id;
                    this._solarId = null;
                    this.selectItem("furniture", m.id);
                    this.showPoint(m.x, m.z);
                  }}
                >
                  <span>${m.name || this.t(`furn_${m.type}` as I18nKey)} · ${fl.name}</span>
                </button>
              </div>`,
            )}
          </div>`
        : nothing}
      <div class="fp3d-actions">
        ${ENERGY_DEVICES.map(
          (type) => html`<button
            class="fp3d-btn"
            ?disabled=${!admin || !this.floor}
            @click=${() => {
              this._solarId = null;
              this.addEnergyDevice(type);
            }}
          >
            + ${this.t(`furn_${type}` as I18nKey)}
          </button>`,
        )}
      </div>
    </section>`;
  }

  private renderRoofSectionForm(sec: RoofSection) {
    const admin = this.isAdmin;
    const set = (patch: Partial<RoofSection>) => this.updateRoofSection(patch);
    // side a is the top (ridge across the plan) or the left (ridge up and down the plan)
    const sides = sec.axis === "x" ? [this.t("roof_side_top"), this.t("roof_side_bottom")] : [this.t("roof_side_left"), this.t("roof_side_right")];
    const [sideA, sideB] = sec.flip ? [sides[1], sides[0]] : sides;
    const flat = sec.shape === "flat" || sec.shape === "parapet";
    const pent = sec.shape === "pent";
    const n = (sections: RoofSection[]) => sections.findIndex((x) => x.id === sec.id) + 1;
    const num = (label: string, value: number, apply: (v: number) => void, step = 0.05, min = 0) => this.len(label, value, (v) => apply(Math.max(min, round(v))), step, min);
    const deg = (label: string, value: number, apply: (v: number) => void) => this.num(label, value, (v) => apply(Math.max(0, round(v))), 1, 0);
    const planLocked = !!this._doc.settings.lock_plan;
    return html`<button class="fp3d-btn fp3d-back" @click=${() => (this._roofId = null)}>‹ ${this.t("roof_sections")}</button>
      <section>
        ${this.renderRoofFloors()}
        <div class="fp3d-h3row">
          <h3>${sec.dormer ? this.t("roof_dormer") : this.t("roof_section")} ${n(this._doc.settings.roof.sections ?? [])}</h3>
          ${admin
            ? planLocked
              ? html`<button class="fp3d-btn fp3d-fix" aria-pressed="true" title=${this.t("lock_plan_hint")} @click=${() => this.toggleLockPlan()}>🔒 ${this.t("plan_locked")}</button>`
              : html`<button class="fp3d-btn fp3d-fix" aria-pressed=${!!sec.locked} title=${this.t("fix_hint")} @click=${() => set({ locked: !sec.locked })}>
                  ${sec.locked ? `🔒 ${this.t("unfix")}` : `🔓 ${this.t("fix")}`}
                </button>`
            : nothing}
        </div>
        <label class="fp3d-field fp3d-wide"
          >${this.t("roof_shape")}
          <select ?disabled=${!admin} @change=${(e: Event) => set({ shape: (e.target as HTMLSelectElement).value as RoofShape })}>
            ${ROOF_SHAPES.map((shape) => html`<option value=${shape} ?selected=${sec.shape === shape}>${this.t(`roof_shape_${shape}` as I18nKey)}</option>`)}
          </select>
        </label>
        ${flat
          ? nothing
          : html`<div class="fp3d-seg fp3d-dev-source">
              <button aria-pressed=${sec.axis === "x"} ?disabled=${!admin} @click=${() => set({ axis: "x" })}>${this.t("roof_axis_x")}</button>
              <button aria-pressed=${sec.axis === "z"} ?disabled=${!admin} @click=${() => set({ axis: "z" })}>${this.t("roof_axis_z")}</button>
            </div>`}
        ${sec.points || sec.dormer
          ? nothing
          : html`<div class="fp3d-form" title=${this.t("roof_turn_hint")}>
              ${this.num(`${this.t("roof_turn")} (°)`, sec.rotation ?? 0, (v) => this.turnRoofSection(Math.max(-180, Math.min(180, round(v)))), 1)}
              ${admin && !this.roofFixed(sec)
                ? html`<div class="fp3d-actions">
                    <button class="fp3d-btn" @click=${() => this.turnRoofSection(turnBy(sec.rotation ?? 0, -15))}>↺ 15°</button>
                    <button class="fp3d-btn" @click=${() => this.turnRoofSection(turnBy(sec.rotation ?? 0, 15))}>↻ 15°</button>
                  </div>`
                : nothing}
            </div>`}
        ${sec.shape === "gable" || sec.shape === "hip" || sec.shape === "halfhip"
          ? html`<div class="fp3d-form" title=${this.t("roof_end_hint")}>
              ${([0, 1] as const).map((end) => {
                // the u0 end is the left one (ridge across the plan) or the top one (ridge up and down)
                const where = this.t(sec.axis === "x" ? (end === 0 ? "roof_side_left" : "roof_side_right") : end === 0 ? "roof_side_top" : "roof_side_bottom");
                const value = (end === 0 ? sec.end_u0 : sec.end_u1) ?? "";
                return html`<label class="fp3d-field"
                  >${this.t("roof_end")} ${where}
                  <select
                    ?disabled=${!admin}
                    @change=${(e: Event) => {
                      const v = ((e.target as HTMLSelectElement).value || null) as RoofEnd | null;
                      set(end === 0 ? { end_u0: v } : { end_u1: v });
                    }}
                  >
                    <option value="" ?selected=${value === ""}>${this.t("roof_end_auto")}</option>
                    ${ROOF_ENDS.map((e) => html`<option value=${e} ?selected=${value === e}>${this.t(e === "gable" ? "roof_end_gable" : `roof_shape_${e}`)}</option>`)}
                  </select></label
                >`;
              })}
            </div>`
          : nothing}
        <label class="fp3d-check fp3d-wide" title=${this.t("roof_open_hint")}
          ><input type="checkbox" .checked=${!!sec.open} ?disabled=${!admin} @change=${(e: Event) => set({ open: (e.target as HTMLInputElement).checked })} />
          ${this.t("roof_open")}</label
        >
        <div class="fp3d-form">
          ${flat
            ? num(this.t("roof_height"), sec.eave_a, (v) => set({ eave_a: v, eave_b: v }))
            : html`${num(`${this.t("roof_eave")} ${pent ? "" : sideA}`, sec.eave_a, (v) => set({ eave_a: v }))}
              ${pent ? nothing : num(`${this.t("roof_eave")} ${sideB}`, sec.eave_b, (v) => set({ eave_b: v }))}
              ${deg(`${this.t("roof_pitch_short")} ${pent ? "" : sideA}`, sec.pitch_a, (v) => set({ pitch_a: Math.min(75, v) }))}
              ${pent ? nothing : deg(`${this.t("roof_pitch_short")} ${sideB}`, sec.pitch_b, (v) => set({ pitch_b: Math.min(75, v) }))}`}
          ${num(this.t("roof_base"), sec.base, (v) => set({ base: v }))}
          <label class="fp3d-field" title=${this.t("roof_on_floor_hint")}
            >${this.t("roof_on_floor")}
            <select
              ?disabled=${!admin}
              @change=${(e: Event) => {
                const f = this._doc.floors.find((x) => x.id === (e.target as HTMLSelectElement).value);
                if (!f) return;
                // the section moves onto that floor's wall tops: base and eaves shift by the same amount
                const top = round(f.elevation + f.height);
                const shift = top - sec.base;
                set({ base: top, eave_a: round(sec.eave_a + shift), eave_b: round(sec.eave_b + shift) });
              }}
            >
              ${[...this._doc.floors]
                .filter((f) => f.rooms.length)
                .sort((p, q) => q.elevation - p.elevation)
                .map((f) => html`<option value=${f.id} ?selected=${sectionFloor(this._doc, sec)?.id === f.id}>${f.name}</option>`)}
            </select></label
          >
          <p class="fp3d-sub fp3d-wide">${this.t("roof_base_hint")}</p>
          ${num(this.t("roof_overhang"), sec.overhang ?? this._doc.settings.roof.overhang, (v) => set({ overhang: Math.min(2, v) }), 0.05, 0)}
        </div>
        ${flat && admin
          ? html`<div class="fp3d-actions">
              <button class="fp3d-btn" title=${this.t("roof_outline_hint")} @click=${() => this.takeRoofOutline()}>${this.t("roof_outline")}</button>
              ${sec.points ? html`<button class="fp3d-btn" @click=${() => set({ points: null })}>${this.t("roof_rect")}</button>` : nothing}
            </div>
            <p class="fp3d-sub">${this.t(sec.points ? "roof_points_hint" : "roof_outline_hint")}</p>`
          : nothing}
        <p class="fp3d-sub">${this.t("roof_ridge_height")}: ${this.m(ridgeHeight(sec), 2)} · ${this.t("roof_section_hint")}</p>
        ${admin
          ? html`<div class="fp3d-actions">
              ${flat
                ? nothing
                : html`<button class="fp3d-btn" title=${this.t("roof_swap_hint")} @click=${() => set({ flip: !sec.flip })}>⇅ ${this.t("roof_swap")}</button>`}
              ${!flat && !sec.dormer && !sec.open
                ? html`<button class="fp3d-btn" title=${this.t("roof_dormer_hint")} @click=${() => this.addDormer("a")}>+ ${this.t("roof_dormer")} ${sideA}</button>
                  ${pent ? nothing : html`<button class="fp3d-btn" title=${this.t("roof_dormer_hint")} @click=${() => this.addDormer("b")}>+ ${this.t("roof_dormer")} ${sideB}</button>`}`
                : nothing}
              <button class="fp3d-btn" @click=${() => this.duplicateRoofSection()}>${this.t("duplicate")}</button>
              <button class="fp3d-btn fp3d-danger" @click=${() => this.deleteRoofSection()}>${this.t("delete")}</button>
            </div>`
          : nothing}
      </section>`;
  }

  /** The item of a fixable kind on a floor. */
  private fixItem(floor: Floor | undefined, kind: FixKind, id: string): object | undefined {
    if (!floor) return undefined;
    switch (kind) {
      case "room":
        return floor.rooms.find((r) => r.id === id);
      case "opening":
        return floor.openings.find((o) => o.id === id);
      case "furniture":
        return floor.furniture.find((m) => m.id === id);
      case "device":
        return floor.placements.find((p) => p.entity_id === id);
      case "wall":
        return (floor.walls ?? []).find((w) => w.id === id);
      case "outdoor":
        return floor.outdoor.find((a) => a.id === id);
    }
  }

  /** Fixed by itself, or (rooms, walls, doors, windows, outdoor areas) by the plan lock. */
  private isFixedItem(kind: FixKind, id: string): boolean {
    return isFixed(this.fixItem(this.floor, kind, id), kind !== "furniture" && kind !== "device", this._doc.settings);
  }

  private toggleFixed(kind: FixKind, id: string): void {
    // rooms, walls, doors, windows and outdoor areas follow the plan lock alone
    if (!this.isAdmin || (kind !== "furniture" && kind !== "device")) return;
    const next = !this.isFixedItem(kind, id);
    // released: the "fixed, release first" hint has done its job
    if (!next) this._fixedHint = false;
    this.change((_, floor) => {
      const item = this.fixItem(floor, kind, id) as { locked?: boolean | null } | undefined;
      if (item) item.locked = next;
    });
  }

  private toggleLockPlan(): void {
    if (!this.isAdmin) return;
    if (this._doc.settings.lock_plan) this._fixedHint = false;
    this.change((doc) => (doc.settings.lock_plan = !doc.settings.lock_plan));
  }

  /** The selected item (for the L key and nudging), the most specific selection first. */
  private get selectedFix(): { kind: FixKind; id: string } | null {
    if (this._deviceId) return { kind: "device", id: this._deviceId };
    if (this._openingId) return { kind: "opening", id: this._openingId };
    if (this._furnitureId) return { kind: "furniture", id: this._furnitureId };
    if (this._wallId) return { kind: "wall", id: this._wallId };
    if (this._outdoorId) return { kind: "outdoor", id: this._outdoorId };
    if (this._roomId) return { kind: "room", id: this._roomId };
    return null;
  }

  /** A fixed item is only deleted after asking. */
  private confirmFixedDelete(kind: FixKind, id: string): boolean {
    return !this.isFixedItem(kind, id) || confirm(this.t("fixed_delete_confirm"));
  }

  private onContextMenu(e: MouseEvent): void {
    e.preventDefault();
    // a mouse's right button is handled on its release (drag = move the plan); this is a long press on a tablet
    if (this.rightPress || performance.now() - this.rightUp < 600) return;
    if (this._tool !== "select" && this._tool !== "furniture") return;
    this.drag = null;
    this.openContext(e.target as Element, this.localPoint(e as PointerEvent));
  }

  /** Select the item under a plan point and open its menu. */
  private openContext(target: Element, local: [number, number]): void {
    if (!this.isAdmin || !this.floor) return;
    const world = this.toWorld(...local);
    const attr = (sel: string) => target.closest(`[${sel}]`)?.getAttribute(sel) ?? null;
    let hit: [FixKind, string] | null = null;
    const device = attr("data-device");
    const opening = attr("data-opening");
    const furniture = target.closest("[data-vertex], [data-mid]") ? null : attr("data-furniture");
    const wall = attr("data-free-wall");
    const outdoor = attr("data-outdoor") ? (this.outdoorAt(world) ?? attr("data-outdoor")) : null;
    const room = attr("data-room") ?? this.roomAt(world);
    if (device) hit = ["device", device];
    else if (opening) hit = ["opening", opening];
    else if (furniture) hit = ["furniture", furniture];
    else if (wall) hit = ["wall", wall];
    else if (outdoor && !room) hit = ["outdoor", outdoor];
    else if (room) hit = ["room", room];
    if (!hit) {
      this._ctx = null;
      return;
    }
    const [kind, id] = hit;
    this.selectItem(kind, id);
    if (kind === "opening" || kind === "furniture") this._roomId = this._roomId ?? room;
    this._ctx = { x: local[0], y: local[1], kind, id };
  }

  private deleteItem(kind: FixKind, id: string): void {
    if (kind === "device") {
      if (!this.confirmFixedDelete(kind, id)) return;
      this.removeDevice(id);
      this._deviceId = null;
      return;
    }
    // the delete methods ask themselves for fixed items
    if (kind === "room") this.deleteRoom();
    else if (kind === "opening") this.deleteOpening();
    else if (kind === "furniture") this.deleteFurniture();
    else if (kind === "wall") this.deleteFreeWall();
    else this.deleteOutdoor();
  }

  private renderContext() {
    const c = this._ctx;
    if (!c) return nothing;
    const fixed = this.isFixedItem(c.kind, c.id);
    const wrap = this.renderRoot.querySelector(".fp3d-canvas-wrap") as HTMLElement | null;
    // keep the menu inside the plan
    const x = Math.max(4, Math.min(c.x, (wrap?.clientWidth ?? 800) - 190));
    const y = Math.max(4, Math.min(c.y, (wrap?.clientHeight ?? 600) - 190));
    const run = (fn: () => void) => () => {
      this._ctx = null;
      fn();
    };
    return html`<div class="fp3d-ctx" style=${`left:${x}px;top:${y}px`} @pointerdown=${(e: Event) => e.stopPropagation()} @contextmenu=${(e: Event) => e.preventDefault()}>
      ${c.kind === "furniture" || c.kind === "device"
        ? html`<button title=${this.t("fix_hint")} @click=${run(() => this.toggleFixed(c.kind, c.id))}>${fixed ? `🔓 ${this.t("unfix")}` : `🔒 ${this.t("fix")}`}</button>`
        : html`<button title=${this.t("lock_plan_hint")} @click=${run(() => this.toggleLockPlan())}>${this._doc.settings.lock_plan ? `🔓 ${this.t("plan_unlock")}` : `🔒 ${this.t("plan_lock")}`}</button>`}
      ${c.kind === "room" ? html`<button @click=${run(() => this.duplicateRoom())}>⧉ ${this.t("duplicate")}</button>` : nothing}
      ${c.kind === "furniture"
        ? html`<button @click=${run(() => this.duplicateFurniture())}>⧉ ${this.t("duplicate")}</button>
            <button ?disabled=${fixed} @click=${run(() => this.rotateFurniture(90))}>↻ ${this.t("ctx_rotate")}</button>
            <button ?disabled=${fixed} @click=${run(() => this.mirrorFurniture())}>⇋ ${this.t("furn_mirror")}</button>
            <button @click=${run(() => {
              const f = this.floor?.furniture.find((m) => m.id === c.id);
              if (f) this.openWallViewFor(f);
            })}>▦ ${this.t("wall_view")}</button>`
        : nothing}
      <button class="fp3d-ctx-danger" @click=${run(() => this.deleteItem(c.kind, c.id))}>✕ ${this.t("delete")}</button>
    </div>`;
  }

  /** Lock button in the form of an item. */
  private fixButton(kind: FixKind, id: string) {
    if (!this.isAdmin) return nothing;
    if (kind !== "furniture" && kind !== "device") {
      // part of the floor plan: shows the plan lock, a click releases it
      return this._doc.settings.lock_plan
        ? html`<button class="fp3d-btn fp3d-fix" aria-pressed="true" title=${this.t("lock_plan_hint")} @click=${() => this.toggleLockPlan()}>
            🔒 ${this.t("plan_locked")}
          </button>`
        : nothing;
    }
    const fixed = this.isFixedItem(kind, id);
    return html`<button class="fp3d-btn fp3d-fix" aria-pressed=${fixed} title=${this.t("fix_hint")} @click=${() => this.toggleFixed(kind, id)}>
      ${fixed ? `🔒 ${this.t("unfix")}` : `🔓 ${this.t("fix")}`}
    </button>`;
  }

  /** Select a room, an opening or a furniture item (only one at a time). */
  private selectItem(kind: "room" | "opening" | "furniture" | "device" | "outdoor" | "wall", id: string | null): void {
    this._notice = null;
    // a selection made in the plan (or by a tool) opens the folded sidebar
    if (id) this._sideOpen = true;
    this._outdoorId = kind === "outdoor" ? id : null;
    this._wallId = kind === "wall" ? id : null;
    this._edgeHi = null;
    if (kind === "outdoor" || kind === "wall") this._roomId = null;
    if (kind !== "room" || id !== this._roomId) this._vertex = null;
    this._roomId = kind === "room" ? id : this._roomId;
    this._openingId = kind === "opening" ? id : null;
    this._furnitureId = kind === "furniture" ? id : null;
    this._multi = [];
    this._single = false;
    this._deviceId = kind === "device" ? id : null;
    if (kind === "device" && id) {
      const pl = this.floor?.placements.find((x) => x.entity_id === id);
      this._roomId = (pl && this.roomAt([pl.x, pl.z])) ?? this._roomId;
    }
    if (kind === "opening" && id) this._roomId = this.floor?.openings.find((o) => o.id === id)?.room_id ?? this._roomId;
  }

  private get opening(): Opening | undefined {
    return this._openingId ? this.floor?.openings.find((o) => o.id === this._openingId) : undefined;
  }

  private get furnitureItem(): Furniture | undefined {
    return this._furnitureId ? this.floor?.furniture.find((f) => f.id === this._furnitureId) : undefined;
  }

  /** Centre offset on a room edge closest to `world`, keeping the opening inside the edge. */
  private offsetOnEdge(room: Room, edge: number, world: Vec2, width: number, free: boolean): number {
    const a = room.points[edge];
    const b = room.points[(edge + 1) % room.points.length];
    const len = Math.hypot(b[0] - a[0], b[1] - a[1]) || 1;
    const t = ((world[0] - a[0]) * (b[0] - a[0]) + (world[1] - a[1]) * (b[1] - a[1])) / len;
    const g = free ? 0.01 : this._doc.settings.grid;
    return this.clampOffset(room, edge, width, Math.round(t / g) * g);
  }

  /**
   * An opening's centre kept on its room edge with the whole opening inside the edge – or reaching on across
   * a transition without a wall, where the outer wall carries on in line (#624).
   */
  private clampOffset(room: Room, edge: number, width: number, offset: number): number {
    const a = room.points[edge];
    const b = room.points[(edge + 1) % room.points.length];
    const len = Math.hypot(b[0] - a[0], b[1] - a[1]) || 1;
    const floor = this.floor;
    const s = this._doc.settings;
    const [before, after] = floor ? edgeReach(generateWalls(floor.rooms, { exterior: s.wall_exterior, interior: s.wall_interior }, floor.walls ?? []).walls, room, edge) : [0, 0];
    const half = Math.min(width, len + before + after) / 2;
    return round(Math.min(len, len + after - half, Math.max(0, half - before, offset)));
  }

  /** Add a door or window on the room edge nearest to a screen point. */
  private placeOpening(preset: OpeningPreset, screen: [number, number]): boolean {
    const floor = this.floor;
    if (!floor || !this.isAdmin) return false;
    let best: { room: Room; edge: number; d: number; wall?: string; roomId?: string } | null = null;
    for (const w of floor.walls ?? []) {
      const host = openingHost({ room_id: "", edge: 0, wall: w.id }, floor.rooms, floor.walls ?? []);
      if (!host) continue;
      const [ax, ay] = this.toScreen(w.a);
      const [bx, by] = this.toScreen(w.b);
      const l2 = (bx - ax) ** 2 + (by - ay) ** 2 || 1;
      const t = Math.min(1, Math.max(0, ((screen[0] - ax) * (bx - ax) + (screen[1] - ay) * (by - ay)) / l2));
      const d = Math.hypot(screen[0] - ax - (bx - ax) * t, screen[1] - ay - (by - ay) * t);
      // a free wall wins over a room edge at the same distance
      const mid: Vec2 = [(w.a[0] + w.b[0]) / 2, (w.a[1] + w.b[1]) / 2];
      const inside = floor.rooms.find((r) => r.points.length >= 3 && pointInPolygon(mid, r.points));
      if (d < SNAP_PX * 2.2 && (!best || d - 1 < best.d)) best = { room: host.room, edge: 0, d: d - 1, wall: w.id, roomId: inside?.id ?? w.id };
    }
    for (const room of floor.rooms) {
      for (let i = 0; i < room.points.length; i++) {
        const [ax, ay] = this.toScreen(room.points[i]);
        const [bx, by] = this.toScreen(room.points[(i + 1) % room.points.length]);
        const l2 = (bx - ax) ** 2 + (by - ay) ** 2 || 1;
        const t = Math.min(1, Math.max(0, ((screen[0] - ax) * (bx - ax) + (screen[1] - ay) * (by - ay)) / l2));
        const d = Math.hypot(screen[0] - ax - (bx - ax) * t, screen[1] - ay - (by - ay) * t);
        // the selected room wins on shared edges
        const score = d - (room.id === this._roomId ? 0.5 : 0);
        if (d < SNAP_PX * 2.2 && (!best || score < best.d)) best = { room, edge: i, d: score };
      }
    }
    if (!best) return false;
    const { room, edge, wall } = best;
    const a = room.points[edge];
    const b = room.points[(edge + 1) % room.points.length];
    const len = Math.hypot(b[0] - a[0], b[1] - a[1]);
    const defaults = OPENING_PRESETS[preset];
    const type: OpeningType = defaults.type;
    const width = round(Math.min(defaults.width, Math.max(0.3, len - 0.1)));
    const opening: Opening = {
      id: uid("opening"),
      room_id: best.roomId ?? room.id,
      edge,
      ...(wall ? { wall } : {}),
      offset: this.offsetOnEdge(room, edge, this.toWorld(...screen), width, false),
      width,
      type,
      sill: defaults.sill,
      height: defaults.height,
      hinge: "left",
      leaves: defaults.leaves,
      swing: "in",
      cover: null,
      contact: null,
      contact2: null,
      tilt: null,
    };
    this.change((_, f) => f.openings.push(opening));
    // the tool stays: six doors and windows in a row without going back to the menu (Esc or "Select" ends it)
    this.selectItem("opening", opening.id);
    return true;
  }

  /** Turns an opening into another kind (door, double door, window, terrace door, garage door). */
  private setOpeningPreset(o: Opening, preset: OpeningPreset): void {
    const d = OPENING_PRESETS[preset];
    this._openingPreset = preset;
    const sameWidth = openingPreset(o) === preset;
    const style = "style" in d ? d.style : null;
    this.updateOpening({ type: d.type, leaves: d.leaves, sill: d.sill, height: d.height, style, ...(sameWidth ? {} : { width: d.width }) });
  }

  private updateOpening(patch: Partial<Opening>): void {
    const id = this._openingId;
    this.change((_, floor) => patchItem(floor.openings.find((o) => o.id === id), patch));
  }

  private deleteOpening(): void {
    const id = this._openingId;
    if (!id || !this.isAdmin || !this.confirmFixedDelete("opening", id)) return;
    this.change((_, floor) => (floor.openings = floor.openings.filter((o) => o.id !== id)));
    this._openingId = null;
  }

  /** How strongly a lamp glows in 3D, in percent (#181): many bright LED strips need not outshine the room. */
  private glowScaleField(value: number | null | undefined, set: (v: number | null) => void) {
    return html`<label class="fp3d-field" title=${this.t("glow_scale_hint")}
      >${this.t("glow_scale")}
      <input
        type="number"
        min="10"
        max="150"
        step="5"
        .value=${String(Math.round((value ?? 1) * 100))}
        ?disabled=${!this.isAdmin}
        @change=${(e: Event) => {
          const v = Math.min(150, Math.max(10, Number((e.target as HTMLInputElement).value) || 100)) / 100;
          set(Math.abs(v - 1) < 0.001 ? null : v);
        }}
    /></label>`;
  }

  /**
   * The built-in types offered in a furniture item's type list: what the library offers (#530 – devices of the energy
   * tool, Pool Pro parts not released yet and the stairwell are no furniture to switch to), plus the item's own type.
   */
  private typeChoices(current: string): string[] {
    const shown = new Set<string>(Object.values(FURNITURE_GROUPS).flat());
    // the smart fridge: its own pack, or Haushalt Pro
    if (hasFeature("fridge_smart") || hasFeature("household")) shown.add("fridge_smart");
    return FURNITURE_TYPES.filter((t) => shown.has(t) || t === current);
  }

  /** Furniture that can stand for a placed device of this kind (a speaker for a media player, a lamp for a light …). */
  private furnitureFor(entityId: string): { type: string; label: string }[] {
    const kind = kindOf(entityId);
    const lang = this.hass?.language ?? "en";
    const all = [
      ...FURNITURE_TYPES.map((t) => ({ type: t as string, label: this.t(`furn_${t}` as I18nKey) })),
      ...(this.packs ?? []).flatMap((p) => p.items.map((it) => ({ type: packType(p.id, it.id), label: `${packItemName(it, lang)} · ${packName(p, lang)}` }))),
    ];
    const speakerish = /speaker|sound|subwoofer|receiver|smart_|display|tv|media|turntable|projector|console/;
    const fits = (t: string): boolean => {
      if (kind === "light") return isLamp(t);
      if (kind === "climate") return t === "radiator" || t === "ac_unit";
      if (entityId.startsWith("vacuum.")) return isRobotVacuum(t);
      if (kind === "media") return hasScreen(t) || (isElectric(t) && speakerish.test(t));
      return isElectric(t) && !isLamp(t);
    };
    return all.filter((x) => fits(x.type)).sort((a, b) => a.label.localeCompare(b.label));
  }

  /** A vehicle placed as plain furniture becomes a parking spot with this vehicle (presence and Auto Pro live there). */
  private vehicleToSpot(f: Furniture): void {
    if (!this.isAdmin) return;
    const [w, d, h] = furnitureSize("parking");
    const spot: Furniture = { id: uid("furniture"), type: "parking", x: f.x, z: f.z, rotation: f.rotation, w: Math.max(w, round(f.w + 0.5)), d: Math.max(d, round(f.d + 0.4)), h, variant: null, vehicle: f.type, ...(f.name ? { name: f.name } : {}) };
    this.change((_, floor) => {
      floor.furniture = floor.furniture.filter((m) => m.id !== f.id);
      floor.furniture.push(spot);
    });
    this.selectItem("furniture", spot.id);
  }

  /** Replace a placed device by a furniture item linked to it, where the pin stood (one undo step). */
  private deviceToFurniture(pl: Placement, type: string): void {
    if (!this.isAdmin) return;
    const [w, d, h] = furnitureSize(type);
    // a camera keeps its pin with everything set there (field of view, wedge, Kamera-Cockpit): the model is only its
    // look – one item that replaces the last one and moves with the camera (#779)
    const camera = pl.entity_id.startsWith("camera.");
    const item: Furniture = {
      id: uid("furniture"),
      type,
      x: pl.x,
      z: pl.z,
      rotation: pl.rotation ?? 0,
      w,
      d,
      h,
      variant: null,
      ...(camera ? { entity: "none", look_of: pl.entity_id } : { entity: pl.entity_id }),
      name: pl.name ?? null,
      ...(pl.locked ? { locked: true } : {}),
    };
    this.change((_, f) => {
      if (camera) f.furniture = f.furniture.filter((m) => m.look_of !== pl.entity_id);
      else f.placements = f.placements.filter((p) => p.entity_id !== pl.entity_id);
      f.furniture.push(item);
    });
    if (camera) return;
    this._deviceId = null;
    this.selectItem("furniture", item.id);
  }

  /** Turn a furniture item linked by hand back into a plain device pin at its place. */
  private furnitureToDevice(f: Furniture): void {
    const id = f.entity;
    if (!this.isAdmin || !id || id === "none") return;
    const pl: Placement = { entity_id: id, x: f.x, z: f.z, y: null, rotation: f.rotation, ...(f.name ? { name: f.name } : {}), ...(id.startsWith("light.") ? { pin: true } : {}) };
    this.change((_, floor) => {
      floor.furniture = floor.furniture.filter((m) => m.id !== f.id);
      if (!floor.placements.some((p) => p.entity_id === id)) floor.placements.push(pl);
    });
    this._furnitureId = null;
    this.selectItem("device", id);
  }

  private renderAsFurniture(pl: Placement) {
    if (!this.isAdmin) return nothing;
    const options = this.furnitureFor(pl.entity_id);
    if (!options.length) return nothing;
    // a camera with a look of its own can go back to the built-in camera model
    const look = pl.entity_id.startsWith("camera.") ? this.floor?.furniture.find((m) => m.look_of === pl.entity_id) : undefined;
    return html`<label class="fp3d-field fp3d-wide" title=${this.t("as_furniture_hint")}
      >${this.t("as_furniture")}
      <select
        @change=${(e: Event) => {
          const v = (e.target as HTMLSelectElement).value;
          if (v === "__builtin") this.change((_, f) => (f.furniture = f.furniture.filter((m) => m.look_of !== pl.entity_id)));
          else if (v) this.deviceToFurniture(pl, v);
        }}
      >
        <option value="" selected>${look ? furnitureName(this.hass, look.type) : this.t("as_furniture_pick")}</option>
        ${look ? html`<option value="__builtin">${this.t("camera_look_builtin")}</option>` : nothing}
        ${options.map((o) => html`<option value=${o.type}>${o.label}</option>`)}
      </select></label
    >`;
  }

  private addFurniture(type: string, mirror = false): void {
    const floor = this.floor;
    if (!floor || !this.isAdmin) return;
    const [w, d, h0] = furnitureSize(type);
    // stairs reach up to the next floor
    const above = this._doc.floors.filter((f) => f.elevation > floor.elevation).sort((p, q) => p.elevation - q.elevation)[0];
    const h = STAIR_TYPES.has(type) ? round(above ? above.elevation - floor.elevation : floor.height + 0.25) : h0;
    const room = this.room;
    const [x, z] = room ? centroid(room.points) : this.toWorld(this._size.w / 2, this._size.h / 2);
    let rotation = 0;
    if (type === "parking" && room) {
      // a parking spot runs into the room from its garage door, else along the room's longer side
      const gate = floor.openings.find((o) => o.room_id === room.id && o.type === "garage");
      const a = gate ? room.points[gate.edge] : null;
      const c = gate ? room.points[(gate.edge + 1) % room.points.length] : null;
      const b = bounds(room.points);
      rotation = (a && c ? Math.abs(c[1] - a[1]) > Math.abs(c[0] - a[0]) : b.x1 - b.x0 > b.z1 - b.z0) ? 90 : 0;
    }
    const item: Furniture = { id: uid("furniture"), type, x: round(x), z: round(z), rotation, w, d, h, variant: null, ...(mirror ? { mirror: true } : {}) };
    this.change((_, f) => f.furniture.push(item));
    this.selectItem("furniture", item.id);
    // small items are easy to lose in a large plan: bring the new one into view
    this.showPoint(item.x, item.z);
  }

  /**
   * Snap a furniture item against the nearest wall of its room: back to the wall (or a side, when it
   * stands sideways), flush with the wall face. Null when no wall is close enough.
   */
  private snapToWall(f: Furniture): { x: number; z: number; rotation: number } | null {
    return this.floor ? snapToWall(this.floor, f, this._doc.settings.wall_interior) : null;
  }

  private updateFurniture(patch: Partial<Furniture>): void {
    const id = this._furnitureId;
    // a field may report its change after the item was deselected or the floor changed (on blur): then nothing to do
    if (!id || !this.floor?.furniture.some((f) => f.id === id)) return;
    this.change((_, floor) => {
      const item = floor.furniture.find((f) => f.id === id);
      if (item) Object.assign(item, patch);
    });
  }

  private mirrorFurniture(): void {
    const f = this.furnitureItem;
    if (!f || !this.isAdmin) return;
    this.updateFurniture({ mirror: !f.mirror });
  }

  private rotateFurniture(delta: number): void {
    const f = this.furnitureItem;
    if (!f || !this.isAdmin) return;
    const set = this.selection();
    if (set.length > 1) return this.rotateSelection(delta);
    this.updateFurniture({ rotation: (((f.rotation + delta) % 360) + 360) % 360 });
  }

  private deleteFurniture(): void {
    const id = this._furnitureId;
    if (!id || !this.isAdmin) return;
    const set = this.selection();
    if (set.length > 1) {
      const fixed = set.some((x) => this.isFixedItem("furniture", x));
      if (!confirm(this.t(fixed ? "block_delete_fixed" : "block_delete", { n: set.length }))) return;
      const ids = new Set(set);
      this.change((_, floor) => (floor.furniture = floor.furniture.filter((f) => !ids.has(f.id))));
      this.selectItem("room", this._roomId);
      return;
    }
    if (!this.confirmFixedDelete("furniture", id)) return;
    this.change((_, floor) => (floor.furniture = floor.furniture.filter((f) => f.id !== id)));
    this._furnitureId = null;
  }

  private duplicateFurniture(): void {
    const f = this.furnitureItem;
    if (!f || !this.isAdmin) return;
    const set = this.selection();
    if (set.length > 1) {
      // the copy of a block is a block of its own
      const items = this.floor!.furniture.filter((m) => set.includes(m.id));
      const blocks = new Map<string, string>();
      const copies = items.map((m) => ({ ...structuredClone(m), id: uid("furniture"), x: round(m.x + 0.3), z: round(m.z + 0.3), group: m.group ? (blocks.get(m.group) ?? blocks.set(m.group, uid("block")).get(m.group)!) : null, locked: null }));
      this.change((_, floor) => floor.furniture.push(...copies));
      this.setMulti(copies.map((c) => c.id));
      return;
    }
    const copy = { ...structuredClone(f), id: uid("furniture"), x: round(f.x + 0.3), z: round(f.z + 0.3), group: this._single ? f.group : null };
    this.change((_, floor) => floor.furniture.push(copy));
    this.selectItem("furniture", copy.id);
  }

  // ------------------------------------------------------------------ furniture blocks and multi selection

  /** The furniture moved together: the multi selection, else the selected item's block (unless one part is edited alone), else the item. */
  private selection(): string[] {
    if (this._multi.length) return this._multi;
    const f = this.furnitureItem;
    if (!f) return [];
    if (f.group && !this._single) return (this.floor?.furniture ?? []).filter((m) => m.group === f.group).map((m) => m.id);
    return [f.id];
  }

  /** Ids with every other part of their blocks. */
  private withGroups(ids: string[]): string[] {
    const groups = new Set((this.floor?.furniture ?? []).filter((m) => ids.includes(m.id) && m.group).map((m) => m.group));
    return [...new Set([...ids, ...(this.floor?.furniture ?? []).filter((m) => m.group && groups.has(m.group)).map((m) => m.id)])];
  }

  private setMulti(ids: string[]): void {
    if (!ids.length) return this.selectItem("room", this._roomId);
    this.selectItem("furniture", ids[0]);
    // one item (or exactly one block) needs no multi selection
    const block = this.selection();
    if (ids.length > 1 && !(ids.length === block.length && ids.every((id) => block.includes(id)))) this._multi = ids;
  }

  /** Shift-click: an item (with its block) joins the selection or leaves it. */
  private toggleMulti(id: string): void {
    const cur = this._furnitureId ? this.selection() : [];
    const part = this.withGroups([id]);
    const next = cur.includes(id) ? cur.filter((x) => !part.includes(x)) : [...new Set([...cur, ...part])];
    this.setMulti(next);
  }

  /** The selection's centre (middle of its items' extent). */
  private selectionCentre(ids: string[]): Vec2 {
    const items = (this.floor?.furniture ?? []).filter((m) => ids.includes(m.id));
    const xs = items.map((m) => m.x);
    const zs = items.map((m) => m.z);
    return [(Math.min(...xs) + Math.max(...xs)) / 2, (Math.min(...zs) + Math.max(...zs)) / 2];
  }

  /** Turns the whole selection about its centre (positions and each item's own turn). */
  private rotateSelection(delta: number): void {
    const set = this.selection();
    if (set.some((id) => this.isFixedItem("furniture", id))) {
      this._fixedHint = true;
      return;
    }
    const [cx, cz] = this.selectionCentre(set);
    const a = (delta * Math.PI) / 180;
    const c = Math.round(Math.cos(a) * 1e6) / 1e6;
    const s = Math.round(Math.sin(a) * 1e6) / 1e6;
    const ids = new Set(set);
    this.change((_, floor) => {
      for (const m of floor.furniture) {
        if (!ids.has(m.id)) continue;
        const dx = m.x - cx;
        const dz = m.z - cz;
        // the plan turns clockwise for a positive angle (x right, z down)
        Object.assign(m, { x: round(cx + dx * c - dz * s), z: round(cz + dx * s + dz * c), rotation: (((m.rotation + delta) % 360) + 360) % 360 });
      }
    });
  }

  /** "Als Block zusammenfassen": the selection becomes one block. */
  private groupSelection(): void {
    const ids = new Set(this.selection());
    if (ids.size < 2) return;
    const gid = uid("block");
    this.change((_, floor) => {
      for (const m of floor.furniture) if (ids.has(m.id)) m.group = gid;
    });
    this._multi = [];
    this._single = false;
  }

  /** "Block auflösen": every part on its own again (the parts stay selected). */
  private ungroupSelection(): void {
    const set = this.selection();
    const ids = new Set(set);
    this.change((_, floor) => {
      for (const m of floor.furniture) if (ids.has(m.id)) m.group = null;
    });
    if (set.length > 1) this._multi = set;
  }

  private lockSelection(on: boolean): void {
    const ids = new Set(this.selection());
    this.change((_, floor) => {
      for (const m of floor.furniture) if (ids.has(m.id)) m.locked = on || null;
    });
  }

  /** Place entities in the selected room; an entity already placed elsewhere moves here. */
  private placeDevices(entityIds: string[], zone?: Room): void {
    const room = zone ?? this.room;
    if (!room || !entityIds.length || !this.isAdmin) return;
    const ids = new Set(entityIds);
    this.change((doc, floor) => {
      for (const f of doc.floors) {
        f.placements = f.placements.filter((pl) => !ids.has(pl.entity_id));
        f.furniture = f.furniture.filter((m) => !(isLamp(m.type) && m.entity && ids.has(m.entity)));
      }
      const taken = [...floor.placements.map((pl) => [pl.x, pl.z] as Vec2), ...floor.furniture.filter((m) => isLamp(m.type)).map((m) => [m.x, m.z] as Vec2)];
      for (const pl of autoPlace(room, entityIds, taken)) {
        // outside (an outdoor area acting as a room) a light stays a pin: no ceiling lamp over the lawn
        if (!pl.entity_id.startsWith("light.") || room.outdoor) {
          floor.placements.push(pl);
          continue;
        }
        // a light becomes a ceiling lamp that is tapped directly in 3D
        const [w, d, h] = FURNITURE_SIZE.lamp_ceiling;
        floor.furniture.push({ id: uid("furniture"), type: "lamp_ceiling", x: pl.x, z: pl.z, rotation: 0, w, d, h, variant: null, entity: pl.entity_id, power: null });
      }
    });
  }

  private get device(): Placement | undefined {
    return this._deviceId ? this.floor?.placements.find((p) => p.entity_id === this._deviceId) : undefined;
  }

  private updateDevice(patch: Partial<Placement>): void {
    const id = this._deviceId;
    this.change((_, floor) => patchItem(floor.placements.find((p) => p.entity_id === id), patch));
  }

  /** Move the selected device to the middle of its room. */
  private centreDevice(): void {
    const pl = this.device;
    const roomId = pl ? this.roomAt([pl.x, pl.z]) : null;
    const room = this.floor?.rooms.find((r) => r.id === roomId);
    if (!pl || !room) return;
    const [x, z] = centroid(room.points);
    this.updateDevice({ x: round(x), z: round(z) });
  }

  /** Spread the room's ceiling lights evenly over it (grid of cells, one light per cell). */
  private spreadCeilingLights(room: Room): void {
    const floor = this.floor;
    if (!floor) return;
    const lights = floor.placements.filter(
      (p) => kindOf(p.entity_id) === "light" && (p.mount ?? "ceiling") === "ceiling" && pointInPolygon([p.x, p.z], room.points),
    );
    if (lights.length < 2) return;
    const b = bounds(room.points);
    const w = b.x1 - b.x0;
    const d = b.z1 - b.z0;
    const cols = Math.max(1, Math.round(Math.sqrt((lights.length * w) / Math.max(0.1, d))));
    const rows = Math.ceil(lights.length / cols);
    const spots = lights.map((_, i) => {
      const r = Math.floor(i / cols);
      // a last row that is not full is spread over the whole width as well
      const inRow = r === rows - 1 ? lights.length - cols * (rows - 1) : cols;
      const c = i - r * cols;
      return [round(b.x0 + (w / inRow) * (c + 0.5)), round(b.z0 + (d / rows) * (r + 0.5))] as Vec2;
    });
    const ids = lights.map((l) => l.entity_id);
    this.change((_, f) => {
      ids.forEach((id, i) => patchItem(f.placements.find((p) => p.entity_id === id), { x: spots[i][0], z: spots[i][1] }));
    });
  }

  /** Straighten edges that are almost along an axis (a corner a centimetre off makes slanted walls in 3D, #333). */
  private straightenFloor(): void {
    const floor = this.floor;
    if (!floor || !this.isAdmin) return;
    const { rooms, fixed } = straightenEdges(floor.rooms);
    if (!fixed) {
      this._notice = this.t("straighten_none");
      return;
    }
    this.change((_, f) => (f.rooms = rooms));
    this._notice = this.t("straighten_done", { n: fixed });
  }

  /** Close gaps between rooms of this floor and take the gap as interior wall thickness. */
  private closeFloorGaps(): void {
    const floor = this.floor;
    if (!floor || !this.isAdmin) return;
    const { rooms, gaps } = closeGaps(floor.rooms);
    if (!gaps.length) {
      this._notice = this.t("gaps_none");
      return;
    }
    const thickness = suggestedThickness(gaps);
    this.change((doc, f) => {
      f.rooms = rooms;
      if (thickness) doc.settings.wall_interior = thickness;
    });
    this._notice = thickness
      ? this.t("gaps_closed_wall", { n: gaps.length, t: formatNumber(this.hass, thickness, 2) })
      : this.t("gaps_closed", { n: gaps.length });
  }

  private removeDevice(entityId: string): void {
    this.change((doc) => {
      for (const f of doc.floors) {
        f.placements = f.placements.filter((pl) => pl.entity_id !== entityId);
        f.furniture = f.furniture.filter((m) => !(isLamp(m.type) && m.entity === entityId));
      }
    });
  }

  private deleteVertex(index: number): void {
    const room = this.room;
    if (!room || room.points.length <= 3) return;
    const n = room.points.length;
    const prev = (index - 1 + n) % n;
    this.change((_, floor) => {
      const target = floor.rooms.find((r) => r.id === room.id)!;
      target.points.splice(index, 1);
      // the edge starting at the removed corner goes away; the one before it keeps its height
      if (target.wall_heights) target.wall_heights.splice(index, 1);
      if (target.wall_thickness) target.wall_thickness.splice(index, 1);
      if (target.wall_slopes) {
        target.wall_slopes.splice(index, 1);
        target.wall_slopes[(index - 1 + target.points.length) % target.points.length] = null;
        if (target.wall_slopes.every((x) => !x)) target.wall_slopes = undefined;
      }
      // the two edges at the removed corner merge; openings on them cannot keep their place
      floor.openings = floor.openings
        .filter((o) => o.room_id !== room.id || o.wall || (o.edge !== index && o.edge !== prev))
        .map((o) => (o.room_id === room.id && !o.wall && o.edge > index ? { ...o, edge: o.edge - 1 } : o));
    });
    this._vertex = null;
  }

  /** Move everything on the floor by (dx, dz): rooms, furniture, devices, outdoor areas, free walls and the background. */
  private shiftFloor(dx: number, dz: number): void {
    if (!this.isAdmin || (!dx && !dz)) return;
    const mv = (p: Vec2): Vec2 => [round(p[0] + dx), round(p[1] + dz)];
    const one = (floor: Floor) => {
      for (const r of floor.rooms) r.points = r.points.map(mv);
      for (const f of floor.furniture) {
        f.x = round(f.x + dx);
        f.z = round(f.z + dz);
      }
      for (const p of floor.placements) {
        p.x = round(p.x + dx);
        p.z = round(p.z + dz);
      }
      for (const a of floor.outdoor) a.points = a.points.map(mv);
      for (const w of floor.walls ?? []) {
        w.a = mv(w.a);
        w.b = mv(w.b);
      }
      if (floor.background) {
        floor.background.x = round(floor.background.x + dx);
        floor.background.z = round(floor.background.z + dz);
      }
    };
    if (this._shiftAll) {
      // the whole house: every floor, the roof sections, the cables, the meter and the hologram
      this.change((doc) => {
        for (const f of doc.floors) one(f);
        this.moveHouseExtras(doc, mv);
      });
    } else this.change((_, floor) => one(floor));
    this._shiftX = 0;
    this._shiftZ = 0;
  }

  /** What belongs to the house as a whole and moves with "all floors": roof sections, cables, meter, hologram. */
  private moveHouseExtras(doc: Building, mv: (p: Vec2) => Vec2): void {
    for (const s of doc.settings.roof.sections ?? []) {
      const corners = [mv([s.x0, s.z0]), mv([s.x1, s.z0]), mv([s.x1, s.z1]), mv([s.x0, s.z1])];
      s.x0 = Math.min(...corners.map((c) => c[0]));
      s.x1 = Math.max(...corners.map((c) => c[0]));
      s.z0 = Math.min(...corners.map((c) => c[1]));
      s.z1 = Math.max(...corners.map((c) => c[1]));
      if (s.points) s.points = s.points.map(mv);
      if (s.pivot) s.pivot = mv(s.pivot);
    }
    for (const c of doc.settings.roof.cables ?? []) c.points = c.points.map(mv);
    if (doc.energy.meter) [doc.energy.meter.x, doc.energy.meter.z] = mv([doc.energy.meter.x, doc.energy.meter.z]);
    const h = doc.settings.roof.hologram;
    if (h && h.place === "free" && h.x != null && h.z != null) [h.x, h.z] = mv([h.x, h.z]);
  }

  /** Turn everything on the floor by 90° (clockwise in the plan) about the middle of its rooms: when a floor was drawn the wrong way round. */
  private turnFloor(): void {
    const floor = this.floor;
    if (!floor || !this.isAdmin) return;
    // with "all floors" the house turns about the middle of every room on every floor
    const pts = (this._shiftAll ? this._doc.floors : [floor]).flatMap((f) => f.rooms.flatMap((r) => r.points));
    if (!pts.length) return;
    const xs = pts.map((p) => p[0]);
    const zs = pts.map((p) => p[1]);
    const cx = (Math.min(...xs) + Math.max(...xs)) / 2;
    const cz = (Math.min(...zs) + Math.max(...zs)) / 2;
    const mv = (p: Vec2): Vec2 => [round(cx - (p[1] - cz)), round(cz + (p[0] - cx))];
    const one = (f: Floor) => {
      for (const r of f.rooms) r.points = r.points.map(mv);
      for (const m of f.furniture) {
        [m.x, m.z] = mv([m.x, m.z]);
        m.rotation = (m.rotation + 90) % 360;
      }
      for (const p of f.placements) {
        [p.x, p.z] = mv([p.x, p.z]);
        p.rotation = ((p.rotation ?? 0) + 90) % 360;
      }
      for (const a of f.outdoor) a.points = a.points.map(mv);
      for (const w of f.walls ?? []) {
        w.a = mv(w.a);
        w.b = mv(w.b);
      }
      if (f.background) {
        [f.background.x, f.background.z] = mv([f.background.x, f.background.z]);
        f.background.rotation = ((f.background.rotation ?? 0) + 90) % 360;
      }
    };
    if (this._shiftAll) {
      this.change((doc) => {
        for (const f of doc.floors) one(f);
        this.moveHouseExtras(doc, mv);
      });
    } else this.change((_, f) => one(f));
  }

  private updateFloor(patch: Partial<Floor>): void {
    this.change((_, floor) => Object.assign(floor, patch));
  }

  private updateRoom(patch: Partial<Room>): void {
    const id = this._roomId;
    this.change((_, floor) => patchItem(floor.rooms.find((r) => r.id === id), patch));
  }

  private setArea(areaId: string): void {
    const room = this.room;
    if (!room) return;
    const area = areaId ? this.hass?.areas?.[areaId] : undefined;
    const generic = !room.name || /^(Raum|Room) \d+$/.test(room.name) || Object.values(this.hass?.areas ?? {}).some((a) => a.name === room.name);
    this.updateRoom({ area_id: areaId || null, ...(area && generic ? { name: area.name } : {}) });
  }

  private setRect(field: "x" | "z" | "w" | "d", value: number): void {
    const room = this.room;
    if (!room || !Number.isFinite(value)) return;
    const b = bounds(room.points);
    let { x0, z0, x1, z1 } = b;
    if (field === "x") [x0, x1] = [value, value + (x1 - x0)];
    if (field === "z") [z0, z1] = [value, value + (z1 - z0)];
    if (field === "w" && value > 0.05) x1 = x0 + value;
    if (field === "d" && value > 0.05) z1 = z0 + value;
    this.updateRoom({ points: [[round(x0), round(z0)], [round(x1), round(z0)], [round(x1), round(z1)], [round(x0), round(z1)]] });
  }

  private setPoint(index: number, axis: 0 | 1, value: number): void {
    const room = this.room;
    if (!room || !Number.isFinite(value)) return;
    const points = room.points.map((p) => [...p] as Vec2);
    points[index][axis] = round(value);
    this.updateRoom({ points });
  }

  private async loadImage(imageId: string): Promise<void> {
    this.loadingImages.add(imageId);
    try {
      const url = await fetchImage(this.hass, imageId);
      const img = new Image();
      img.src = url;
      await img.decode();
      this._images = { ...this._images, [imageId]: { url, aspect: img.naturalHeight / img.naturalWidth } };
    } catch {
      // image missing (e.g. removed): the background stays empty
    }
  }

  private async uploadBackground(e: Event): Promise<void> {
    const input = e.target as HTMLInputElement;
    const file = input.files?.[0];
    input.value = "";
    if (!file) return;
    const bitmap = await createImageBitmap(file);
    const k = Math.min(1, 2048 / Math.max(bitmap.width, bitmap.height));
    const canvas = document.createElement("canvas");
    canvas.width = Math.round(bitmap.width * k);
    canvas.height = Math.round(bitmap.height * k);
    canvas.getContext("2d")!.drawImage(bitmap, 0, 0, canvas.width, canvas.height);
    const data = canvas.toDataURL("image/jpeg", 0.85);
    const imageId = uid("img");
    await storeImage(this.hass, imageId, data);
    this._images = { ...this._images, [imageId]: { url: data, aspect: canvas.height / canvas.width } };
    const b = this.floor?.rooms.length ? bounds(this.floor.rooms.flatMap((r) => r.points)) : null;
    this.updateFloor({ background: { image_id: imageId, x: b ? b.x0 : 0, z: b ? b.z0 : 0, width: b ? Math.max(4, round(b.x1 - b.x0)) : 12, opacity: 0.5 } });
  }

  // ------------------------------------------------------------------ rendering

  /** "Later" on the news: gone for this visit of the editor, back the next time. */
  private newsLater = false;

  /**
   * News from the shop after an update, once per announcement: a new fun pack to pick up (the pets, a present for the
   * customers). Shown to admins who bought something and do not have it yet, until "don't show again".
   */
  private renderNews() {
    // the pets' notice went with the gift notice of the panel (both fun packs free with a customer account)
    const news: { id: string; feature: "fun_pets" }[] = [];
    if (this.newsLater || !this.isAdmin) return nothing;
    const customer = (this.packs ?? []).some((p) => p.licensee);
    const item = news.find((n) => {
      if (UNRELEASED.includes(n.feature) || hasFeature(n.feature) || !customer) return false;
      try {
        return localStorage.getItem(`neonplan3d.news.${n.id}`) !== "never";
      } catch {
        return true;
      }
    });
    if (!item) return nothing;
    const never = () => {
      try {
        localStorage.setItem(`neonplan3d.news.${item.id}`, "never");
      } catch {
        // a private window: it only stays away for this visit
      }
      this.newsLater = true;
      this.requestUpdate();
    };
    return html`<div class="fp3d-news-veil" @click=${(e: Event) => e.target === e.currentTarget && ((this.newsLater = true), this.requestUpdate())}>
      <div class="fp3d-news" role="dialog" aria-label=${this.t("news_pets_title")}>
        <div class="fp3d-news-pic">🐱 🐶 🐰 🐟</div>
        <h3>${this.t("news_pets_title")}</h3>
        <p>${this.t("news_pets_text")}</p>
        <div class="fp3d-news-actions">
          <a class="fp3d-btn fp3d-primary" href=${shopUrl(this.hass?.language)} target="_blank" rel="noopener" @click=${() => ((this.newsLater = true), this.requestUpdate())}>🎁 ${this.t("news_to_shop")}</a>
          <button class="fp3d-btn" @click=${() => ((this.newsLater = true), this.requestUpdate())}>${this.t("news_later")}</button>
          <button class="fp3d-btn" @click=${never}>${this.t("news_never")}</button>
        </div>
      </div>
    </div>`;
  }

  /** Work on another floor (from the floor menu of the toolbar). */
  private selectFloor(id: string): void {
    this._floorId = id;
    this._roomId = null;
    this._vertex = null;
    this._draft = [];
    this.fit();
  }

  /**
   * The floor worked on, always at hand at the left of the toolbar whatever the tool: a menu with every floor (top
   * floor first), "New floor" (from a Home Assistant floor or empty) and the floor's settings in the sidebar.
   */
  private renderFloorMenu() {
    const floors = this._doc.floors;
    const floor = this.floor;
    const admin = this.isAdmin;
    const open = this._toolMenu === "floor";
    const close = () => ((this._toolMenu = null), (this._floorMenu = false));
    return html`<div class="fp3d-seg fp3d-seg-menu">
      <div class="fp3d-menu-wrap">
        <button aria-haspopup="menu" aria-expanded=${open} @click=${() => ((this._toolMenu = open ? null : "floor"), (this._floorMenu = false), (this._viewMenu = false))}>
          <span class="fp3d-menu-label">${this.t("floor_label")}</span> ${floor?.name ?? this.t("floors")} <span class="fp3d-caret">▾</span>
        </button>
        ${open
          ? html`<div class="fp3d-menu-veil" @click=${close}></div>
              <div class="fp3d-menu" role="menu">
                ${[...floors].reverse().map(
                  (f) => html`<button role="menuitem" class="fp3d-menu-item ${f.id === this._floorId ? "fp3d-menu-on" : ""}" @click=${() => (close(), this.selectFloor(f.id))}>
                    ${f.name}<span class="fp3d-menu-more">${f.id === this._floorId ? "✓" : ""}</span>
                  </button>`,
                )}
                ${admin
                  ? html`<div class="fp3d-menu-sep"></div>
                      <button
                        role="menuitem"
                        class="fp3d-menu-item"
                        aria-expanded=${this.freeHaFloors.length ? this._floorMenu : nothing}
                        @click=${() => (this.freeHaFloors.length ? (this._floorMenu = !this._floorMenu) : (close(), this.addFloor()))}
                      >
                        ${this.t("add_floor")}${this.freeHaFloors.length ? html`<span class="fp3d-menu-more">${this._floorMenu ? "▾" : "▸"}</span>` : nothing}
                      </button>
                      ${this._floorMenu
                        ? html`<div class="fp3d-menu-sub">
                            ${this.freeHaFloors.map((f) => html`<button class="fp3d-chip" @click=${() => (close(), this.addFloor(f))}>${f.name}</button>`)}
                            <button class="fp3d-chip" @click=${() => (close(), this.addFloor())}>${this.t("floor_empty")}</button>
                          </div>`
                        : nothing}
                      ${floor
                        ? html`<button
                            role="menuitem"
                            class="fp3d-menu-item"
                            @click=${() => {
                              close();
                              // the floor's settings are the sidebar's first page: "Select", nothing chosen
                              this.setTool("select");
                              this.selectItem("room", null);
                              this._sideOpen = true;
                            }}
                          >
                            ${this.t("floor_settings")}
                          </button>`
                        : nothing}`
                  : nothing}
              </div>`
          : nothing}
      </div>
    </div>`;
  }

  /** Switch to a tool (from the tool menu): a fresh drawing, the sidebar for it. */
  private setTool(tool: Tool): void {
    const floor = this.floor;
    this._tool = tool;
    this._draft = [];
    this._cursor = null;
    this._pipeMode = false;
    this._pipeDraft = null;
    // the pool tool works on a pool: the selected one, else the first of the floor
    if (tool === "pool" && this.outdoorArea?.type !== "pool") {
      const first = floor?.outdoor.find((x) => x.type === "pool");
      if (first) this.selectItem("outdoor", first.id);
    }
    // another tool: its sidebar (library, presets, details) unfolds again, even if it was collapsed for the last one
    this.setSideFolded(false);
  }

  /**
   * The toolbar, tidied up: "Select" stays a button; the drawing tools sit in menus by what they are for – "Build"
   * (room, wall, door & window, floor opening, roof), "Outside" (areas, pool) – with "Furniture" and "Energy" as
   * buttons of their own. Tools with choices (room, outdoor, pool) unfold them in the menu; a group's button names the
   * tool in use. Undo and redo stay, the view switches (fit, 3D beside, wall view, lock) are in a view menu.
   */
  private renderToolBar(floor: Floor | undefined) {
    const admin = this.isAdmin;
    const off = !floor || !admin;
    type Choice = { label: string; on: boolean; pick: () => void };
    type Entry = { tool: Tool; label: string; choices?: () => Choice[] };
    const outdoorTypes = OUTDOOR_TYPES.filter((t) => t !== "pool");
    const room: Entry = {
      tool: "rect",
      label: this.t("tool_room"),
      choices: () => [
        { label: this.t("tool_rect"), on: this._tool === "rect", pick: () => this.setTool("rect") },
        { label: this.t("tool_polygon"), on: this._tool === "polygon", pick: () => this.setTool("polygon") },
        { label: this.t("tool_measure"), on: this._tool === "measure", pick: () => this.setTool("measure") },
      ],
    };
    const outdoor: Entry = {
      tool: "outdoor",
      label: this.t("tool_outdoor"),
      choices: () => [
        ...outdoorTypes.map((t) => ({
          label: this.t(`out_${t}` as I18nKey),
          on: this._tool === "outdoor" && (this._outdoorType ?? "lawn") === t,
          pick: () => {
            this.setTool("outdoor");
            this._outdoorType = t;
          },
        })),
        { label: this.t("outdoor_shape_rect"), on: this._tool === "outdoor" && !this._outdoorFree, pick: () => (this.setTool("outdoor"), (this._outdoorFree = false)) },
        { label: this.t("outdoor_shape_free"), on: this._tool === "outdoor" && this._outdoorFree, pick: () => (this.setTool("outdoor"), (this._outdoorFree = true)) },
      ],
    };
    const pool: Entry = {
      tool: "pool",
      label: this.t("tool_pool"),
      choices: () => [
        ...(["rect", "round", "oval", "free"] as const).map((k) => ({
          label: this.t(`pool_shape_${k}` as I18nKey),
          on: this._tool === "pool" && !this._pipeMode && (this._poolShape ?? "rect") === k,
          pick: () => {
            this.setTool("pool");
            this._poolShape = k;
            this._outdoorFree = k === "free";
          },
        })),
        ...(this.pipeRules ? [{ label: this.t("pool_pipe_draw"), on: this._tool === "pool" && !!this._pipeMode, pick: () => (this.setTool("pool"), (this._pipeMode = true)) }] : []),
      ],
    };
    const groups: { id: string; label: string; entries: Entry[] }[] = [
      {
        id: "build",
        label: this.t("tool_group_build"),
        entries: [room, { tool: "wall", label: this.t("tool_wall") }, { tool: "opening", label: this.t("tool_opening") }, { tool: "hole", label: this.t("tool_hole") }, { tool: "roof", label: this.t("tool_roof") }],
      },
      { id: "outside", label: this.t("tool_group_outside"), entries: [outdoor, pool] },
    ];
    const inEntry = (e: Entry) => e.tool === this._tool || (e === room && (this._tool === "polygon" || this._tool === "measure"));
    // what a group's button says while one of its tools is in use: the tool, and its shape or kind
    const detail = (e: Entry) =>
      e === pool ? (this._pipeMode ? this.t("pool_pipe_draw") : this.t(`pool_shape_${this._poolShape ?? "rect"}` as I18nKey)) : e === outdoor ? this.t(`out_${this._outdoorType ?? "lawn"}` as I18nKey) : e === room ? this.t(`tool_${this._tool}` as I18nKey) : "";
    const close = () => ((this._toolMenu = null), (this._toolOpen = null));
    const plain = (tool: Tool, label: string) =>
      html`<button aria-pressed=${this._tool === tool} ?disabled=${off} @click=${() => (close(), this.setTool(tool))}>${label}</button>`;
    return html`<div class="fp3d-seg fp3d-seg-menu" role="group">
        <button aria-pressed=${this._tool === "select"} ?disabled=${!floor} @click=${() => (close(), this.setTool("select"))}>${this.t("tool_select")}</button>
        ${groups.map((g) => {
          const active = g.entries.find(inEntry);
          const open = this._toolMenu === g.id;
          const text = active ? `${active.label}${detail(active) ? `: ${detail(active)}` : ""}` : g.label;
          return html`<div class="fp3d-menu-wrap">
            <button aria-pressed=${!!active} aria-haspopup="menu" aria-expanded=${open} ?disabled=${off} @click=${() => ((this._toolMenu = open ? null : g.id), (this._toolOpen = null), (this._viewMenu = false))}>
              ${text} <span class="fp3d-caret">▾</span>
            </button>
            ${open
              ? html`<div class="fp3d-menu-veil" @click=${close}></div>
                  <div class="fp3d-menu" role="menu">
                    ${g.entries.map((x) => {
                      const choices = x.choices?.() ?? [];
                      const unfolded = this._toolOpen === x.tool;
                      return html`<button
                          role="menuitem"
                          class="fp3d-menu-item ${inEntry(x) ? "fp3d-menu-on" : ""}"
                          aria-expanded=${choices.length ? unfolded : nothing}
                          @click=${() => {
                            if (choices.length) this._toolOpen = unfolded ? null : x.tool;
                            else {
                              this.setTool(x.tool);
                              close();
                            }
                          }}
                        >
                          ${x.label}${choices.length ? html`<span class="fp3d-menu-more">${unfolded ? "▾" : "▸"}</span>` : nothing}
                        </button>
                        ${unfolded
                          ? html`<div class="fp3d-menu-sub">
                              ${choices.map(
                                (c) =>
                                  html`<button
                                    class="fp3d-chip ${c.on ? "fp3d-menu-on" : ""}"
                                    @click=${() => {
                                      c.pick();
                                      this._draft = [];
                                      close();
                                    }}
                                  >
                                    ${c.label}
                                  </button>`,
                              )}
                            </div>`
                          : nothing}`;
                    })}
                  </div>`
              : nothing}
          </div>`;
        })}
        ${plain("furniture", this.t("tool_furniture"))} ${plain("energy", this.t("tool_energy"))}
      </div>
      <div class="fp3d-seg fp3d-seg-menu">
        <button class="fp3d-undo" ?disabled=${!this._canUndo} @click=${() => this.undo()} title=${`${this.t("undo")} (Ctrl+Z)`} aria-label=${this.t("undo")}>↶</button>
        <button class="fp3d-undo" ?disabled=${!this._canRedo} @click=${() => this.redo()} title=${`${this.t("redo")} (Ctrl+Y)`} aria-label=${this.t("redo")}>↷</button>
      </div>
      <div class="fp3d-seg fp3d-seg-menu">
        <button aria-pressed=${this._split} title=${this.t("split_3d_hint")} @click=${() => (close(), this.toggleSplit())}>${this.t("split_3d")}</button>
        <button aria-pressed=${this._wallPick} title=${this.t("wall_view_open")} @click=${(e: Event) => (close(), this.toggleWallPick(e.currentTarget as HTMLElement))}>${this.t("wall_view")}</button>
        <button title=${this.t("fit_hint")} @click=${() => (close(), this.fit())}>${this.t("fit")}</button>
      </div>
      ${this.renderSettingsMenu(close)}`;
  }

  /**
   * ⚙ Settings: everything that belongs to the whole plan, not to a floor, a room or an item – the house, weather
   * and warnings, the live director, voice control, favourites, the background, the ground, the backup and the
   * modules. One button in the toolbar opens the list; a topic opens as a dialog over the plan.
   */
  private renderSettingsMenu(closeTools: () => void) {
    const admin = this.isAdmin;
    const open = this._settingsMenu;
    const all: { key: SettingsTopic; icon: string; label: string; admin: boolean }[] = [
      { key: "house", icon: "🏠", label: this.t("settings_house"), admin: true },
      { key: "weather", icon: "🌦", label: this.t("settings_weather"), admin: true },
      { key: "director", icon: "🎬", label: this.t("card_director"), admin: true },
      { key: "voice", icon: "🎙", label: this.t("voice"), admin: false },
      ...(released("locate") ? [{ key: "locate" as const, icon: "📡", label: this.t("locate"), admin: true }] : []),
      { key: "favorites", icon: "⭐", label: this.t("favorites"), admin: true },
      { key: "backdrop", icon: "🖼", label: this.t("backdrop"), admin: true },
      { key: "terrain", icon: "⛰", label: this.t("terrain"), admin: true },
      { key: "backup", icon: "💾", label: this.t("backup"), admin: true },
      { key: "modules", icon: "🧩", label: this.t("settings_modules"), admin: true },
      ...(released("diagnostics") ? [{ key: "diagnostics" as const, icon: "🛟", label: this.t("diag_menu"), admin: true }] : []),
    ];
    const topics = all.filter((t) => admin || !t.admin);
    const toggle = () => {
      closeTools();
      this._settingsMenu = !open;
    };
    return html`<div class="fp3d-seg fp3d-seg-menu fp3d-seg-settings">
      <div class="fp3d-menu-wrap">
        <button aria-haspopup="menu" aria-expanded=${open} title=${this.t("settings")} @click=${toggle}>
          ⚙ <span class="fp3d-settings-word">${this.t("settings")}</span> <span class="fp3d-caret">▾</span>
        </button>
        ${open
          ? html`<div class="fp3d-menu-veil" @click=${() => (this._settingsMenu = false)}></div>
              <div class="fp3d-menu fp3d-menu-right" role="menu">
                ${topics.map(
                  (t) => html`<button
                    role="menuitem"
                    class="fp3d-menu-item"
                    @click=${() => {
                      this._settingsMenu = false;
                      // locating has its own assistant (a bundle of its own), not a dialog
                      if (t.key === "locate") {
                        if (this.hass) void loadLocate().then((m) => m.openLocateSetup(this.hass!, this._doc, () => this.hass, (look) => this.setSettings({ person_look: look === "figure" ? null : look })));
                        return;
                      }
                      this._settingsDialog = t.key;
                      if (t.key === "diagnostics") void this.loadDiagnostics();
                      // the modules' sentences for the voice list: loaded here as well (the editor is its own bundle), once per opening
                      if (t.key === "voice" && this.hass) void syncModules(this.hass, this.packs ?? []).then(() => this.requestUpdate());
                    }}
                  >
                    ${t.icon} ${t.label}
                  </button>`,
                )}
              </div>`
          : nothing}
      </div>
    </div>`;
  }

  /** The dialog of a settings topic: its section, as it stood in the side bar before, over the plan. */
  private renderSettingsDialog() {
    const topic = this._settingsDialog;
    if (!topic) return nothing;
    const close = () => (this._settingsDialog = null);
    const titles: Record<SettingsTopic, string> = {
      house: this.t("settings_house"),
      weather: this.t("settings_weather"),
      director: this.t("card_director"),
      voice: this.t("voice"),
      locate: this.t("locate"),
      favorites: this.t("favorites"),
      backdrop: this.t("backdrop"),
      terrain: this.t("terrain"),
      backup: this.t("backup"),
      modules: this.t("settings_modules"),
      diagnostics: this.t("diag_title"),
    };
    const body =
      topic === "house"
        ? this.renderHouseSettings()
        : topic === "weather"
          ? this.renderWeatherSettings()
          : topic === "director"
            ? this.renderDirector()
            : topic === "voice"
              ? this.renderVoice()
              : topic === "favorites"
                ? this.renderFavorites()
                : topic === "backdrop"
                  ? this.renderBackdrop()
                  : topic === "terrain"
                    ? this.renderTerrain()
                    : topic === "backup"
                      ? this.renderBackup()
                      : topic === "diagnostics"
                        ? this.renderDiagnostics(true)
                        : this.renderModuleSettings();
    return html`<div class="fp3d-dialog-veil" @click=${(e: Event) => e.target === e.currentTarget && close()}>
      <div class="fp3d-dialog" role="dialog" aria-label=${titles[topic]} tabindex="-1" @keydown=${(e: KeyboardEvent) => e.key === "Escape" && close()}>
        <div class="fp3d-dialog-head">
          <h3>${titles[topic]}</h3>
          <button class="fp3d-btn" aria-label=${this.t("close")} @click=${close}>✕</button>
        </div>
        <div class="fp3d-dialog-body">${body}</div>
      </div>
    </div>`;
  }

  /** Modules installed from the shop; a module's own settings will show here once modules bring some. */
  /** The modules installed (code from the shop) and the button that imports one – a module file need not go through the extensions page. */
  private renderModuleSettings() {
    const modules = (this.packs ?? []).filter((p) => p.module || p.features?.length);
    return html`<div class="fp3d-form">
      ${modules.length
        ? modules.map(
            (p) => html`<div class="fp3d-wide">
              <b>${packName(p, this.hass?.language ?? "de")}</b>
              <p class="fp3d-sub">${p.module ? this.t("pack_module", { publisher: p.publisher }) : this.t((p.features ?? []).every((f) => f.startsWith("fun_")) ? "pack_fun_module" : "pack_pro_module", { publisher: p.publisher })}${p.release && p.release > 1 ? ` · v${p.release}` : ""}</p>
              ${p.module && moduleWaits(p)
                ? html`<p class="fp3d-sub">${this.t(p.module.approved === true ? "module_update_waits" : "module_waits", { from: p.release ?? 1, to: p.pending?.release ?? 1 })} ${this.t("module_waits_where")}</p>`
                : p.module
                  ? (() => {
                      const own = this.hass ? moduleSettings(p.id, this.editorHost()) : [];
                      return own.length ? html`<div class="fp3d-form">${this.renderFields(own, false)}</div>` : html`<p class="fp3d-sub">${this.t("module_no_settings")}</p>`;
                    })()
                  : nothing}
            </div>`,
          )
        : html`<p class="fp3d-sub fp3d-wide">${this.t("modules_none")}</p>`}
      <label class="fp3d-btn fp3d-primary fp3d-wide">
        ${this.t("module_import")}
        <input type="file" accept=".fp3dpack,.json,application/json" multiple hidden @change=${(e: Event) => void this.importModuleFile(e)} />
      </label>
      ${this._moduleMsg ? html`<p class="fp3d-sub fp3d-wide ${this._moduleMsg.ok ? "" : "fp3d-pack-error"}">${this._moduleMsg.text}</p>` : nothing}
      <p class="fp3d-sub fp3d-wide">${this.t("module_import_hint")}</p>
    </div>`;
  }

  /** Imports module files like the extensions page imports packs (the same signed format, the same check). */
  private async importModuleFile(e: Event): Promise<void> {
    const input = e.target as HTMLInputElement;
    const files = [...(input.files ?? [])];
    input.value = "";
    if (!files.length || !this.hass) return;
    const done: string[] = [];
    const failed: string[] = [];
    for (const file of files) {
      try {
        const res = await importPack(this.hass, await file.text());
        const text = this.t("module_imported", { name: res.name, publisher: res.publisher });
        done.push(res.approval ? `${text} ${this.t("module_imported_waits")}` : text);
      } catch (err) {
        const { code, message } = (err ?? {}) as { code?: string; message?: string };
        const key = `pack_error_${code}` as I18nKey;
        const text = this.t(key, { detail: message ?? String(err) });
        failed.push(`${file.name}: ${text === key ? this.t("pack_error_other", { detail: message ?? String(err) }) : text}`);
      }
    }
    if (done.length) this.dispatchEvent(new CustomEvent("packs-changed", { bubbles: true, composed: true }));
    this._moduleMsg = { ok: failed.length === 0, text: [...done, ...failed].join(" · ") };
  }

  protected render(): TemplateResult {
    const floor = this.floor;
    const walls = floor ? generateWalls(floor.rooms, { exterior: this._doc.settings.wall_exterior, interior: this._doc.settings.wall_interior }, floor.walls ?? []) : null;
    return html`
      ${this.renderPreview()} ${this.renderWallView()} ${this.renderPartCard()} ${this.renderDiagnosticsView()} ${this.renderNews()} ${this.renderSettingsDialog()}
      <div class="fp3d-editor ${this.narrow ? "fp3d-narrow" : ""}" style=${`--fp3d-side-w:${this._sideWidth}px`}>
        <div class="fp3d-main">
          <div class="fp3d-toolbar">
            ${this._wallPick ? html`<div class="fp3d-pick-tip" style=${`left:${this.wallPickTip[0]}px;top:${this.wallPickTip[1]}px`} @click=${() => (this._wallPick = false)}>${this.t("hint_wall_pick")}</div>` : nothing}
            ${this.renderFloorMenu()} ${this.renderToolBar(floor)}
            ${walls?.warnings.length ? html`<span class="fp3d-warn">${this.t("overlap_warning")}</span>` : nothing}
          </div>
          <div class="fp3d-stage-pair ${this._split ? "fp3d-split" : ""}" style=${this._split && !this.narrow ? `--fp3d-split:${Math.round(this._splitRatio * 100)}%` : ""}>
          <div class="fp3d-canvas-wrap">
            ${this._phoneHint
              ? html`<div class="fp3d-phone-hint">
                  <span>${this.t("phone_hint")}</span>
                  <button
                    class="fp3d-btn"
                    aria-label=${this.t("close")}
                    @click=${() => {
                      this._phoneHint = false;
                      try {
                        localStorage.setItem("neonplan3d.phoneHint", "0");
                      } catch {
                        // no storage: gone for this visit
                      }
                    }}
                  >
                    ✕
                  </button>
                </div>`
              : nothing}
            ${this._diagInvite
              ? html`<div class="fp3d-diag-invite" role="note">
                  <span><b>🛟 ${this.t("diag_title")}</b> ${this.t("diag_invite")}</span>
                  <span class="fp3d-diag-invite-buttons">
                    <button
                      class="fp3d-btn primary"
                      @click=${() => {
                        this.closeDiagInvite();
                        this._settingsDialog = "diagnostics";
                        void this.loadDiagnostics();
                      }}
                    >
                      ${this.t("diag_invite_look")}
                    </button>
                    <button class="fp3d-btn" @click=${() => this.closeDiagInvite()}>${this.t("diag_invite_later")}</button>
                  </span>
                </div>`
              : nothing}
            ${this.houseTool ? html`<div class="fp3d-tool-note">${this.t(this._tool === "energy" ? "energy_only_note" : "roof_only_note")}</div>` : nothing}
            <svg
              class="fp3d-plan fp3d-tool-${this._tool}"
              @pointerdown=${this.onPointerDown}
              @pointermove=${this.onPointerMove}
              @pointerup=${this.onPointerUp}
              @pointercancel=${this.onPointerUp}
              @pointerleave=${() => {
                if (!this.drag) this._cursor = null;
              }}
              @wheel=${this.onWheel}
              @contextmenu=${this.onContextMenu}
            >
              ${this.renderBackground(floor)} ${this.renderGrid()} ${this.renderGhost()} ${walls ? this.renderWalls(walls.walls) : nothing}
              ${floor ? this.renderOutdoor(floor) : nothing} ${floor ? this.renderRooms(floor) : nothing} ${floor ? this.renderFurniture(floor) : nothing}
              ${floor ? this.renderFreeWalls(floor) : nothing}
              ${floor && walls ? this.renderOpenings(floor, walls.walls) : nothing} ${floor ? this.renderMeter(floor) : nothing}
              ${floor && this._tool === "select" ? this.renderDevices(floor) : nothing}
              ${this.room && this.isAdmin && this._tool === "select" && !this._openingId && !this._furnitureId && !this.isFixedItem("room", this.room.id) ? this.renderHandles(this.room) : nothing}
              ${floor ? this.renderOutdoorHandles(floor) : nothing}
              ${this.room && this._tool === "select" ? this.renderSplitMarks(this.room) : nothing}
              ${floor ? this.renderHeadroom(floor) : nothing}
              ${this._tool === "roof" ? svg`${this.renderRoofSections()}${this.renderRoofWindows()}` : this._tool === "energy" ? svg`${this.renderRoofSections()}${this.renderSolarFields()}${this.renderCables()}${this.renderEnergyMarkers()}` : this._tool === "pool" && floor && this.pipeRules ? this.renderPoolPlan(floor) : nothing} ${this.renderDraft()} ${this.renderGuides()}
            </svg>
            ${this.renderContext()}
            <p class="fp3d-hint ${this._fixedHint ? "fp3d-hint-fixed" : ""}">${!floor ? this.t("hint_empty") : this._wallPick ? this.t("hint_wall_pick") : this._fixedHint ? this.t("fixed_drag_hint") : this._tool === "outdoor" && this._outdoorFree ? this.t("hint_outdoor_free") : this._tool === "pool" && this._jointPlace ? this.t("hint_joint_place") : this._tool === "pool" && this._pipeMode ? this.t(!this.poolArea ? "hint_pipe_pool" : this._pipeDraft ? "hint_pipe_next" : "hint_pipe_start") : this._tool === "pool" && released("pool") ? this.t("hint_pool_tech") : this.t(`hint_${this._tool}` as I18nKey)}</p>
          </div>
          ${this._split && !this.narrow
            ? html`<div class="fp3d-split-handle" title=${this.t("split_handle_hint")} @pointerdown=${this.onSplitDown}></div>`
            : nothing}
          ${this._split ? this.render3d() : nothing}
          </div>
        </div>
        ${this.renderAside(floor)}
      </div>
    `;
  }

  private renderBackground(floor: Floor | undefined) {
    const bg = floor?.background;
    const img = bg ? this._images[bg.image_id] : undefined;
    if (!bg || !img) return nothing;
    const [x, y] = this.toScreen([bg.x, bg.z]);
    const w = bg.width * this._view.scale;
    const h = w * img.aspect;
    const rot = bg.rotation ?? 0;
    const edit = this.bgHandles();
    // while editing, the picture takes the pointer (drag moves it) and its lower right corner scales it
    return svg`<g transform="rotate(${rot} ${x + w / 2} ${y + h / 2})">
      <image href=${img.url} x=${x} y=${y} width=${w} height=${h} opacity=${bg.opacity} preserveAspectRatio="none" pointer-events=${edit ? "auto" : "none"} data-bg="1" style=${edit ? "cursor:move" : ""} />
      ${edit
        ? svg`<rect class="fp3d-bg-frame" x=${x} y=${y} width=${w} height=${h} />
          <circle class="fp3d-bg-handle" data-bg-handle="1" cx=${x + w} cy=${y + h} r="9" />
          <g class="fp3d-rotate" data-bg-rotate="1">
            <line x1=${x + w / 2} y1=${y} x2=${x + w / 2} y2=${y - 30} />
            <circle cx=${x + w / 2} cy=${y - 30} r="16" class="fp3d-hit" />
            <circle cx=${x + w / 2} cy=${y - 30} r="8" />
            <path d="M${x + w / 2 - 4} ${y - 31}a4 4 0 1 1 2 3.5" />
          </g>`
        : nothing}
    </g>${this.renderBgRuler()}`;
  }

  /** The picture has handles (move, scale, turn) only while "Move and scale" is switched on, with the select tool. */
  private bgHandles(): boolean {
    return !!this.floor?.background && this.isAdmin && this._tool === "select" && this._bgEdit;
  }

  /** The ruler's points and line over the background (#183), or the straighten line. */
  private renderBgRuler() {
    const pts = this._bgLevel?.length ? this._bgLevel : this._bgRuler;
    if (!pts?.length) return nothing;
    const s = pts.map((p) => this.toScreen(p));
    return svg`<g class="fp3d-bg-ruler">
      ${s.length === 2 ? svg`<line x1=${s[0][0]} y1=${s[0][1]} x2=${s[1][0]} y2=${s[1][1]} />` : nothing}
      ${s.map(([x, y]) => svg`<circle cx=${x} cy=${y} r="6" />`)}
    </g>`;
  }

  /** Turn the background about the first tap so the tapped line runs exactly along x or z (whichever is nearer). */
  private applyBgLevel(p: Vec2, q: Vec2): void {
    const bg = this.floor?.background;
    const img = bg ? this._images[bg.image_id] : undefined;
    this._bgLevel = null;
    if (!bg || !img || Math.hypot(q[0] - p[0], q[1] - p[1]) < 0.05) return;
    const a = Math.atan2(q[1] - p[1], q[0] - p[0]);
    const delta = Math.round(a / (Math.PI / 2)) * (Math.PI / 2) - a;
    if (Math.abs(delta) < 1e-4) return;
    // turning about p moves the picture's middle along: c' = p + R(delta) (c − p)
    const h = bg.width * img.aspect;
    const c: Vec2 = [bg.x + bg.width / 2, bg.z + h / 2];
    const dx = c[0] - p[0];
    const dz = c[1] - p[1];
    const c2: Vec2 = [p[0] + dx * Math.cos(delta) - dz * Math.sin(delta), p[1] + dx * Math.sin(delta) + dz * Math.cos(delta)];
    let rot = (bg.rotation ?? 0) + (delta * 180) / Math.PI;
    rot = Math.round((((((rot + 180) % 360) + 360) % 360) - 180) * 100) / 100;
    this.updateFloor({ background: { ...bg, rotation: rot, x: round(c2[0] - bg.width / 2), z: round(c2[1] - h / 2) } });
  }

  /** Scale the background about the ruler's first point so the measured stretch gets its real length (#183). */
  private applyBgRuler(real: number): void {
    const floor = this.floor;
    const bg = floor?.background;
    const pts = this._bgRuler;
    const img = bg ? this._images[bg.image_id] : undefined;
    if (!bg || !img || !pts || pts.length < 2 || !(real > 0)) return;
    const measured = Math.hypot(pts[1][0] - pts[0][0], pts[1][1] - pts[0][1]);
    if (measured < 1e-4) return;
    const k = real / measured;
    // scaling about p keeps the turn: the centre moves to p + k (c − p), the size grows by k
    const h = bg.width * img.aspect;
    const c: Vec2 = [bg.x + bg.width / 2, bg.z + h / 2];
    const p = pts[0];
    const c2: Vec2 = [p[0] + k * (c[0] - p[0]), p[1] + k * (c[1] - p[1])];
    const w2 = bg.width * k;
    const h2 = h * k;
    this.updateFloor({ background: { ...bg, width: round(w2), x: round(c2[0] - w2 / 2), z: round(c2[1] - h2 / 2) } });
    this._bgRuler = null;
    this._bgRulerLen = 0;
  }

  /** The picture's own frame: a plan point measured from its top left corner, along its (turned) sides, in metres. */
  private bgLocal(bg: Background, world: Vec2, aspect: number): Vec2 {
    const h = bg.width * aspect;
    const cx = bg.x + bg.width / 2;
    const cz = bg.z + h / 2;
    const a = (-(bg.rotation ?? 0) * Math.PI) / 180;
    const dx = world[0] - cx;
    const dz = world[1] - cz;
    return [cx + dx * Math.cos(a) - dz * Math.sin(a) - bg.x, cz + dx * Math.sin(a) + dz * Math.cos(a) - bg.z];
  }

  private renderGrid() {
    const { scale } = this._view;
    const { w, h } = this._size;
    const minor = scale >= 90 ? 0.1 : scale >= 30 ? 0.5 : 1;
    const major = scale >= 20 ? 1 : 5;
    const [x0, z0] = this.toWorld(0, 0);
    const [x1, z1] = this.toWorld(w, h);
    const lines: ReturnType<typeof svg>[] = [];
    const push = (step: number, cls: string) => {
      for (let x = Math.ceil(x0 / step) * step; x <= x1; x += step) {
        const sx = this.toScreen([x, 0])[0];
        lines.push(svg`<line class=${cls} x1=${sx} y1="0" x2=${sx} y2=${h} />`);
      }
      for (let z = Math.ceil(z0 / step) * step; z <= z1; z += step) {
        const sy = this.toScreen([0, z])[1];
        lines.push(svg`<line class=${cls} x1="0" y1=${sy} x2=${w} y2=${sy} />`);
      }
    };
    if (minor < major) push(minor, "fp3d-grid-minor");
    push(major, "fp3d-grid-major");
    const [ox, oy] = this.toScreen([0, 0]);
    lines.push(svg`<circle class="fp3d-origin" cx=${ox} cy=${oy} r="3" />`);
    return svg`<g pointer-events="none">${lines}</g>`;
  }

  /** Rooms of the floor below, as orientation. */
  private renderGhost() {
    const i = this._doc?.floors.findIndex((f) => f.id === this._floorId) ?? -1;
    const below = i > 0 ? this._doc.floors[i - 1] : undefined;
    if (!below) return nothing;
    return svg`<g pointer-events="none">${below.rooms.map(
      (r) => svg`<polygon class="fp3d-ghost" points=${r.points.map((p) => this.toScreen(p).join(",")).join(" ")} />`,
    )}</g>`;
  }

  private renderWalls(walls: Wall[]) {
    const H = this.floor?.height ?? 2.5;
    return svg`<g pointer-events="none">${walls.map((w) => {
      const low = w.height !== undefined && w.height < H - 0.01;
      const cls = `fp3d-wall${w.exterior ? " fp3d-wall-ext" : ""}${low ? " fp3d-wall-low" : ""}`;
      return svg`<polygon class=${cls} points=${w.footprint.map((p) => this.toScreen(p).join(",")).join(" ")} />`;
    })}</g>`;
  }

  /** Sets the height of one edge of a room, and of every wall piece shared with it. */
  /** The parts another room splits an edge into (start distances along the edge), in order; one part when whole. */
  private edgeParts(room: Room, edge: number): number[] {
    const floor = this.floor;
    if (!floor) return [0];
    const walls = generateWalls(floor.rooms, { exterior: this._doc.settings.wall_exterior, interior: this._doc.settings.wall_interior }, floor.walls ?? []).walls;
    const starts = walls.flatMap((w) => w.sources.filter((s) => s.room_id === room.id && s.edge === edge).map((s) => s.t0));
    return starts.length ? [...new Set(starts)].sort((a, b) => a - b) : [0];
  }

  /** A sloping wall on a room edge: its heights at the edge's start and end corner, or null for a plain wall (D569). */
  private setEdgeSlope(room: Room, edge: number, slope: [number, number] | null): void {
    if (!this.isAdmin) return;
    this.change((_, f) => {
      const r = f.rooms.find((x) => x.id === room.id);
      if (!r) return;
      const list = (r.wall_slopes ?? []).slice(0, r.points.length);
      while (list.length < r.points.length) list.push(null);
      list[edge] = slope ? [Math.round(Math.max(0.05, slope[0]) * 1000) / 1000, Math.round(Math.max(0.05, slope[1]) * 1000) / 1000] : null;
      r.wall_slopes = list.every((x) => !x) ? undefined : list;
    });
  }

  /** Set a wall height on a room edge (and on the rooms sharing it), or on one part of a split edge only. */
  private setEdgeHeight(room: Room, edge: number, height: number | null, part?: number): void {
    const floor = this.floor;
    if (!floor || !this.isAdmin) return;
    if (part !== undefined) {
      const n = this.edgeParts(room, edge).length;
      this.change((_, f) => {
        const r = f.rooms.find((x) => x.id === room.id);
        if (!r) return;
        const list = (r.wall_heights ?? []).slice(0, r.points.length);
        while (list.length < r.points.length) list.push(null);
        const cur = list[edge];
        const parts: (number | null)[] = Array.isArray(cur) ? [...cur] : new Array<number | null>(n).fill(typeof cur === "number" ? cur : null);
        while (parts.length < n) parts.push(null);
        parts[part] = height;
        list[edge] = parts.every((h) => h === parts[0]) ? parts[0] : parts;
        r.wall_heights = list.every((h) => h === null) ? undefined : list;
      });
      return;
    }
    const walls = generateWalls(floor.rooms, { exterior: this._doc.settings.wall_exterior, interior: this._doc.settings.wall_interior }, floor.walls ?? []).walls;
    const sources = walls.filter((w) => w.sources.some((s) => s.room_id === room.id && s.edge === edge)).flatMap((w) => w.sources);
    if (!sources.some((s) => s.room_id === room.id && s.edge === edge)) sources.push({ room_id: room.id, edge, t0: 0, t1: 0 });
    this.change((_, f) => {
      for (const s of sources) {
        const r = f.rooms.find((x) => x.id === s.room_id);
        if (!r) continue;
        const list = (r.wall_heights ?? []).slice(0, r.points.length);
        while (list.length < r.points.length) list.push(null);
        list[s.edge] = height;
        r.wall_heights = list.every((h) => h === null) ? undefined : list;
      }
    });
  }

  /**
   * Kamera-Cockpit: which detection sensors count for the camera (person, vehicle, animal, motion). Found by
   * themselves on the camera's device; with "choose" a tick per sensor, and sensors of other devices can be added
   * (Frigate's person sensor for a Reolink camera, #815).
   */
  private renderCameraDetections(cameraId: string) {
    if (!this.hass) return nothing;
    const hass = this.hass;
    const pl = this.floor?.placements.find((p) => p.entity_id === cameraId);
    const chosen = Array.isArray(pl?.detect_sensors) ? pl!.detect_sensors : null;
    const own = cameraOwnSensors(hass, cameraId);
    const sensors = cameraMotionSensors(hass, cameraId);
    const kinds = [...new Set(sensors.map((id) => detectionKind(hass, id)))];
    const pro = hasFeature("camera_cockpit");
    const admin = this.isAdmin;
    const set = (list: string[] | null) => this.updateDevice({ detect_sensors: list });
    const detectClass = (id: string) => id.startsWith("binary_sensor.") && ["motion", "occupancy", "presence"].includes(String(hass.states[id]?.attributes.device_class));
    // the list to tick: the camera's own sensors and every one chosen before
    const listed = [...new Set([...own, ...(chosen ?? [])])];
    return html`<p class="fp3d-sub fp3d-wide">
        ${sensors.length
          ? html`${pro ? "" : "🔒 "}${this.t("camera_detect_found", { kinds: kinds.map((k) => this.t(`detect_${k}` as I18nKey)).join(", "), n: sensors.length })}`
          : this.t("camera_detect_none")}
      </p>
      <label class="fp3d-check fp3d-wide" title=${this.t("camera_detect_choose_hint")}
        ><input type="checkbox" .checked=${chosen !== null} ?disabled=${!admin} @change=${(ev: Event) => set((ev.target as HTMLInputElement).checked ? [...own] : null)} />
        ${this.t("camera_detect_choose")}</label
      >
      ${chosen !== null
        ? html`${listed.map(
              (id) =>
                html`<label class="fp3d-check fp3d-wide fp3d-indent"
                  ><input type="checkbox" .checked=${chosen.includes(id)} ?disabled=${!admin} @change=${(ev: Event) => set((ev.target as HTMLInputElement).checked ? [...chosen, id] : chosen.filter((x) => x !== id))} />
                  ${entityName(hass, id)} <span class="fp3d-sub">${id}</span></label
                >`,
            )}
            ${this.entitySelect(this.t("camera_detect_add"), null, undefined, this.entityOptions(this.detectFilter(detectClass, listed)), (v) => {
              if (v && v !== "none") set([...chosen, v]);
            })}`
        : nothing}`;
  }
  /** The filter of the "add a sensor" list, kept per camera so its options stay cached (see entityOptions). */
  private _detectFilter: { key: string; fn: (id: string) => boolean } | null = null;
  private detectFilter(cls: (id: string) => boolean, listed: string[]): (id: string) => boolean {
    const key = listed.join(",");
    if (this._detectFilter?.key !== key) this._detectFilter = { key, fn: (id) => cls(id) && !listed.includes(id) };
    return this._detectFilter.fn;
  }

  /** Cut a wall (or one part of it) in the middle: a split point of its own, the new part keeps the height. */
  private splitEdge(room: Room, edge: number, part: number | undefined): void {
    if (!this.isAdmin) return;
    const pts = room.points;
    const len = Math.hypot(pts[(edge + 1) % pts.length][0] - pts[edge][0], pts[(edge + 1) % pts.length][1] - pts[edge][1]);
    const starts = this.edgeParts(room, edge);
    const s0 = part === undefined ? 0 : starts[part];
    const s1 = part === undefined ? len : (starts[part + 1] ?? len);
    if (s1 - s0 < 0.4) return;
    const at = Math.round(((s0 + s1) / 2) * 100) / 100;
    this.change((_, f) => {
      const r = f.rooms.find((x) => x.id === room.id);
      if (!r) return;
      const splits = (r.wall_splits ?? []).slice(0, r.points.length);
      while (splits.length < r.points.length) splits.push(null);
      splits[edge] = [...(splits[edge] ?? []), at].sort((a, b) => a - b);
      r.wall_splits = splits;
      // a per-part height list grows by the new part, which starts with the height of the one it was cut from
      const cur = r.wall_heights?.[edge];
      if (Array.isArray(cur)) {
        const k = part ?? 0;
        cur.splice(k + 1, 0, cur[k] ?? null);
      }
    });
  }

  /** Move a split point along its edge (kept clear of the ends and of other stops). */
  private moveSplit(room: Room, edge: number, from: number, to: number): void {
    const pts = room.points;
    const len = Math.hypot(pts[(edge + 1) % pts.length][0] - pts[edge][0], pts[(edge + 1) % pts.length][1] - pts[edge][1]);
    const others = this.edgeParts(room, edge).filter((s) => Math.abs(s - from) > 1e-3 && s > 0);
    let at = Math.max(0.1, Math.min(len - 0.1, Math.round(to * 100) / 100));
    if (others.some((s) => Math.abs(s - at) < 0.1)) at = from;
    this.change((_, f) => {
      const r = f.rooms.find((x) => x.id === room.id);
      const list = r?.wall_splits?.[edge];
      if (!list) return;
      const k = list.findIndex((d) => Math.abs(d - from) < 1e-3);
      if (k >= 0) list[k] = at;
      list.sort((a, b) => a - b);
    });
  }

  /** Remove a split point: the part behind it joins the one before (whose height stays). */
  private joinSplit(room: Room, edge: number, at: number, part: number): void {
    this.change((_, f) => {
      const r = f.rooms.find((x) => x.id === room.id);
      if (!r?.wall_splits?.[edge]) return;
      const list = r.wall_splits[edge]!.filter((d) => Math.abs(d - at) > 1e-3);
      r.wall_splits[edge] = list.length ? list : null;
      if (r.wall_splits.every((l) => !l)) r.wall_splits = undefined;
      const cur = r.wall_heights?.[edge];
      if (Array.isArray(cur)) {
        cur.splice(part, 1);
        if (cur.every((h) => h === cur[0])) r.wall_heights![edge] = cur[0] ?? null;
      }
    });
  }

  /** Marks on the selected room's edges where a wall is split by hand. */
  private renderSplitMarks(room: Room) {
    const pts = room.points;
    return svg`${(room.wall_splits ?? []).flatMap((list, i) => {
      if (!list || i >= pts.length) return [];
      const a = pts[i];
      const b = pts[(i + 1) % pts.length];
      const l = Math.hypot(b[0] - a[0], b[1] - a[1]) || 1;
      const ux = (b[0] - a[0]) / l;
      const uz = (b[1] - a[1]) / l;
      return list.map((d) => {
        const [x, y] = this.toScreen([a[0] + ux * d, a[1] + uz * d]);
        // a short tick across the wall
        return svg`<line class="fp3d-split-mark" x1=${x - uz * 7} y1=${y + ux * 7} x2=${x + uz * 7} y2=${y - ux * 7} />`;
      });
    })}`;
  }

  /** Height list per wall of a room in the room form (always open); hovering a row lights the wall up. */
  private renderEdgeHeights(room: Room) {
    const H = this.floor!.height;
    const n = room.points.length;
    // which edges are outer walls (their default thickness is the exterior one)
    const s = this._doc.settings;
    const outer = new Set<number>();
    for (const w of generateWalls(this.floor!.rooms, { exterior: s.wall_exterior, interior: s.wall_interior }, this.floor!.walls ?? []).walls) {
      if (w.exterior) for (const src of w.sources) if (src.room_id === room.id) outer.add(src.edge);
    }
    const setThick = (edge: number, v: number | null) =>
      this.change((_, f) => {
        const r = f.rooms.find((x) => x.id === room.id);
        if (!r) return;
        const list = (r.wall_thickness ?? []).slice(0, r.points.length);
        while (list.length < r.points.length) list.push(null);
        list[edge] = v;
        r.wall_thickness = list.every((t) => t === null) ? undefined : list;
      });
    return html`<div class="fp3d-edge-box">
      <h4>${this.t("wall_heights")}</h4>
      ${room.points.flatMap((a, i) => {
        const b = room.points[(i + 1) % n];
        const len = Math.hypot(b[0] - a[0], b[1] - a[1]);
        const entry = room.wall_heights?.[i] ?? null;
        const slope = room.wall_slopes?.[i] ?? null;
        const on = () => (this._edgeHi = i);
        const off = () => (this._edgeHi = null);
        // an edge another room splits: one row per part, each with its own height (#77)
        const starts = this.edgeParts(room, i);
        const parts = starts.length > 1 ? starts.map((_, k) => k) : [undefined];
        return parts.map((part) => {
          const h = part === undefined ? (Array.isArray(entry) ? (entry[0] ?? null) : entry) : Array.isArray(entry) ? (entry[part] ?? null) : entry;
          const partLen = part === undefined ? len : (starts[part + 1] ?? len) - starts[part];
          const set = (v: number | null) => this.setEdgeHeight(room, i, v, part);
          return html`<div
            class="fp3d-edge-height${i === this._edgeHi ? " fp3d-edge-on" : ""}${h !== null ? " fp3d-edge-low" : ""}"
            @mouseenter=${on}
            @mouseleave=${off}
            @focusin=${on}
            @focusout=${off}
          >
            <span
              ><b>${this.t("wall_n", { a: i + 1, b: ((i + 1) % n) + 1 })}${part === undefined ? "" : ` · ${this.t("wall_part", { n: part + 1 })}`}</b><br /><span class="fp3d-muted"
                >${this.m(partLen, 2)}</span
              ></span
            >
            ${h === 0
              ? html`<span class="fp3d-muted">${this.t("wall_none")}</span>`
              : slope && part === undefined
                ? html`${this.len(this.t("wall_slope_start", { n: i + 1 }), slope[0], (v) => this.setEdgeSlope(room, i, [v, slope[1]]), 0.05, 0.05)}
                  ${this.len(this.t("wall_slope_end", { n: ((i + 1) % n) + 1 }), slope[1], (v) => this.setEdgeSlope(room, i, [slope[0], v]), 0.05, 0.05)}`
                : this.len(this.t("wall_height"), h ?? H, (v) => set(v >= H - 0.005 ? null : Math.max(0.05, v)), 0.05, 0.05)}
            ${this.isAdmin && part === undefined && h !== 0
              ? html`<button class="fp3d-btn" aria-pressed=${!!slope} title=${this.t("wall_slope_hint")} @click=${() => this.setEdgeSlope(room, i, slope ? null : [h ?? H, h ?? H])}>◢ ${this.t("wall_slope")}</button>`
              : nothing}
            ${this.isAdmin && h !== null ? html`<button class="fp3d-btn" title=${this.t("wall_height_full")} @click=${() => set(null)}>↥</button>` : nothing}
            ${this.isAdmin && h !== 0 ? html`<button class="fp3d-btn" title=${this.t("wall_none_hint")} @click=${() => set(0)}>${this.t("wall_none")}</button>` : nothing}
            ${this.isAdmin && partLen >= 0.4 ? html`<button class="fp3d-btn" title=${this.t("wall_split_hint")} @click=${() => this.splitEdge(room, i, part)}>✂</button>` : nothing}
            ${(part === undefined || part === 0) && h !== 0 ? html`<button class="fp3d-btn" title=${this.t("wall_view_open")} @click=${() => this.openWallView(room.id, i)}>▦</button>` : nothing}
            ${(part === undefined || part === 0) && h !== 0
              ? html`<span class="fp3d-wide fp3d-split-row" title=${this.t("wall_thickness_hint")}
                  >${this.len(this.t("edge_thickness"), room.wall_thickness?.[i] ?? (outer.has(i) ? s.wall_exterior : s.wall_interior), (v) => {
                    const def = outer.has(i) ? s.wall_exterior : s.wall_interior;
                    const t = Math.min(1.5, Math.max(0.02, Math.round(v * 1000) / 1000));
                    setThick(i, Math.abs(t - def) < 0.0005 ? null : t);
                  }, 0.01, 0.02)}
                  ${this.isAdmin && room.wall_thickness?.[i] != null ? html`<button class="fp3d-btn" title=${this.t("wall_thickness_reset")} @click=${() => setThick(i, null)}>↺</button>` : nothing}</span
                >`
              : nothing}
            ${part !== undefined && part > 0 && (room.wall_splits?.[i] ?? []).some((d) => Math.abs(d - starts[part]) < 1e-3)
              ? html`<span class="fp3d-wide fp3d-split-row"
                  >${this.len(this.t("wall_split_at"), starts[part], (v) => this.moveSplit(room, i, starts[part], v), 0.05, 0.1)}
                  ${this.isAdmin ? html`<button class="fp3d-btn" title=${this.t("wall_join_hint")} @click=${() => this.joinSplit(room, i, starts[part], part)}>⨉</button>` : nothing}</span
                >`
              : nothing}
          </div>`;
        });
      })}
      <p class="fp3d-sub">${this.t("room_wall_hint")}</p>
    </div>`;
  }


  /** Corner handles of the selected outdoor area (a rectangle stays a rectangle while dragging). */
  private renderOutdoorHandles(floor: Floor) {
    const a = this._outdoorId ? floor.outdoor.find((x) => x.id === this._outdoorId) : undefined;
    if (!a || !this.isAdmin || (this._tool !== "select" && !(this._tool === "pool" && !this._pipeMode)) || this._doc.settings.lock_plan) return nothing;
    if (a.pool_shape) {
      // a round or oval pool: the corners of its box (it keeps its shape while it grows)
      const b = bounds(a.points);
      const corners: Vec2[] = [[b.x0, b.z0], [b.x1, b.z0], [b.x1, b.z1], [b.x0, b.z1]];
      return svg`${corners.map((p, i) => {
        const [x, y] = this.toScreen(p);
        return svg`<g class="fp3d-vertex fp3d-box-corner" data-out-box=${`${a.id}:${i}`}><circle cx=${x} cy=${y} r="16" class="fp3d-hit" /><rect x=${x - 5} y=${y - 5} width="10" height="10" /></g>`;
      })}`;
    }
    return svg`${a.points.map((p, i) => {
      const [x, y] = this.toScreen(p);
      return svg`<g class="fp3d-vertex" data-out-vertex=${`${a.id}:${i}`}><circle cx=${x} cy=${y} r="16" class="fp3d-hit" /><circle cx=${x} cy=${y} r="6" /></g>`;
    })}`;
  }

  private renderOutdoor(floor: Floor) {
    return svg`<g>${floor.outdoor.map((a) => {
      const pts = a.points.map((p) => this.toScreen(p).join(",")).join(" ");
      const [cx, cy] = this.toScreen(centroid(a.points));
      const b = bounds(a.points);
      const big = Math.min(b.x1 - b.x0, b.z1 - b.z0) * this._view.scale > 40;
      return svg`<g data-outdoor=${a.id} class=${`fp3d-out fp3d-out-${a.type}${a.id === this._outdoorId ? " fp3d-out-sel" : ""}`}>
        <polygon points=${pts} />
        ${big ? svg`<text x=${cx} y=${cy + 4}>${this.t(`out_${a.type}` as I18nKey)}</text>` : nothing}
      </g>`;
    })}</g>`;
  }

  /** An outdoor area like a room (#100): a Home Assistant area (with its devices) and a name for chip and 3D. */
  private renderOutdoorZone(a: OutdoorArea) {
    const admin = this.isAdmin;
    const areas = Object.values(this.hass?.areas ?? {}).sort((x, y) => x.name.localeCompare(y.name));
    return html`<label class="fp3d-field fp3d-wide" title=${this.t("outdoor_area_hint")}
        >${this.t("area")}
        <select
          ?disabled=${!admin}
          @change=${(e: Event) => {
            const id = (e.target as HTMLSelectElement).value || null;
            // the area's name is a good first name for the garden or terrace
            const name = (a.name ?? "").trim() || (id ? (this.hass?.areas?.[id]?.name ?? null) : null);
            this.updateOutdoor({ area_id: id, name: id ? name : a.name ?? null });
          }}
        >
          <option value="" ?selected=${!a.area_id}>${this.t("no_area")}</option>
          ${areas.map((x) => html`<option value=${x.area_id} ?selected=${x.area_id === a.area_id}>${x.name}</option>`)}
        </select></label
      >
      ${a.area_id
        ? html`<label class="fp3d-field fp3d-wide"
            >${this.t("room_name")}
            <input .value=${a.name ?? ""} ?disabled=${!admin} @change=${(e: Event) => this.updateOutdoor({ name: (e.target as HTMLInputElement).value.trim() || null })}
          /></label>`
        : nothing}
      <p class="fp3d-sub fp3d-wide">${this.t("outdoor_area_hint")}</p>
      ${a.area_id ? this.renderOutdoorDevices(a) : nothing}`;
  }

  /** The devices of an outdoor area's Home Assistant area, to place on it like a room's (#100). */
  private renderOutdoorDevices(a: OutdoorArea) {
    const hass = this.hass;
    const floor = this.floor;
    const zone = floor ? outdoorZones(floor).find((z) => z.id === a.id) : undefined;
    if (!hass || !floor || !zone) return nothing;
    const areaName = zone.area_id ? hass.areas?.[zone.area_id]?.name : undefined;
    const groups = groupByDevice(hass, areaEntities(hass, zone.area_id).filter((id) => isPlaceable(kindOf(id))));
    // placed as a pin, or as a lamp (a path light, a garden spot) with this light
    const placed = new Set([
      ...floor.placements.filter((pl) => pointInPolygon([pl.x, pl.z], zone.points)).map((pl) => pl.entity_id),
      ...floor.furniture.filter((m) => isLamp(m.type) && m.entity && pointInPolygon([m.x, m.z], zone.points)).map((m) => m.entity!),
    ]);
    const open = groups.map((g) => g.primary).filter((id) => !placed.has(id));
    const pinned = new Set(a.panel ?? []);
    const hidden = new Set(a.hidden ?? []);
    const noState = new Set(a.no_state ?? []);
    const flip = (list: Set<string>, id: string) => (list.has(id) ? [...list].filter((x) => x !== id) : [...list, id]);
    if (!groups.length) return html`<p class="fp3d-sub fp3d-wide">${this.t("devices_none")}</p>`;
    return html`<div class="fp3d-wide">
      <h4 class="fp3d-lib-head">${this.t("devices")}</h4>
      ${groups.map(
        (g) => html`<div class="fp3d-row fp3d-dev-row ${hidden.has(g.primary) ? "fp3d-dev-hidden" : ""}">
          <button class="fp3d-dev-name ${placed.has(g.primary) ? "" : "fp3d-muted"}" ?disabled=${!placed.has(g.primary)} @click=${() => this.selectItem("device", g.primary)}>
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d=${iconPath(kindOf(g.primary)!)} />
            </svg>
            <span>${entityName(hass, g.primary, areaName)}</span>
          </button>
          ${this.isAdmin
            ? html`<button
                  class="fp3d-pin ${hidden.has(g.primary) ? "fp3d-pin-on" : ""}"
                  aria-pressed=${hidden.has(g.primary)}
                  title=${this.t(hidden.has(g.primary) ? "panel_unhide" : "panel_hide")}
                  @click=${() => this.updateOutdoor({ hidden: flip(hidden, g.primary) })}
                >
                  ${hidden.has(g.primary) ? "🙈" : "👁"}
                </button>
                ${hidden.has(g.primary)
                  ? nothing
                  : html`<button
                      class="fp3d-pin ${noState.has(g.primary) ? "fp3d-pin-on" : ""}"
                      aria-pressed=${noState.has(g.primary)}
                      title=${this.t(noState.has(g.primary) ? "panel_state_show" : "panel_state_hide")}
                      @click=${() => this.updateOutdoor({ no_state: flip(noState, g.primary) })}
                    >
                      ${noState.has(g.primary) ? "∅" : "Aa"}
                    </button>`}
                ${placed.has(g.primary)
                  ? nothing
                  : html`<button
                      class="fp3d-pin ${pinned.has(g.primary) ? "fp3d-pin-on" : ""}"
                      aria-pressed=${pinned.has(g.primary)}
                      title=${this.t(pinned.has(g.primary) ? "panel_unpin" : "panel_pin")}
                      @click=${() => this.updateOutdoor({ panel: flip(pinned, g.primary) })}
                    >
                      ${pinned.has(g.primary) ? "★" : "☆"}
                    </button>`}`
            : nothing}
          ${this.isAdmin
            ? placed.has(g.primary)
              ? html`<button class="fp3d-link" @click=${() => this.removeDevice(g.primary)}>${this.t("devices_remove")}</button>`
              : html`<button class="fp3d-link" @click=${() => this.placeDevices([g.primary], zone)}>${this.t("devices_place")}</button>`
            : nothing}
        </div>`,
      )}
      ${this.isAdmin && open.length > 1
        ? html`<button class="fp3d-link fp3d-place-all" @click=${() => this.placeDevices(open, zone)}>${this.t("devices_place_all_n", { n: open.length })}</button>`
        : nothing}
    </div>`;
  }

  private renderOutdoorForm(a: OutdoorArea) {
    const admin = this.isAdmin;
    const rect = isAxisRect(a.points);
    const b = bounds(a.points);
    const setRect = (field: "x" | "z" | "w" | "d", v: number) => {
      let { x0, z0, x1, z1 } = b;
      if (field === "x") [x0, x1] = [v, v + (x1 - x0)];
      if (field === "z") [z0, z1] = [v, v + (z1 - z0)];
      if (field === "w") x1 = x0 + Math.max(0.1, v);
      if (field === "d") z1 = z0 + Math.max(0.1, v);
      this.updateOutdoor({ points: [[x0, z0], [x1, z0], [x1, z1], [x0, z1]].map(([x, z]) => [round(x), round(z)] as Vec2) });
    };
    return html`<section>
      <div class="fp3d-h3row"><h3>${this.t("outdoor")}</h3>${this.fixButton("outdoor", a.id)}</div>
      <div class="fp3d-form">
        <label class="fp3d-field fp3d-wide"
          >${this.t("outdoor_type")}
          <select ?disabled=${!admin} @change=${(e: Event) => this.updateOutdoor({ type: (e.target as HTMLSelectElement).value as OutdoorType })}>
            ${OUTDOOR_TYPES.map((t) => html`<option value=${t} ?selected=${t === a.type}>${this.t(`out_${t}` as I18nKey)}</option>`)}
          </select></label
        >
        ${outdoorStanding(a.type) ? nothing : this.renderOutdoorZone(a)}
        ${rect
          ? html`${this.len(this.t("x"), b.x0, (v) => setRect("x", v))} ${this.len(this.t("z"), b.z0, (v) => setRect("z", v))}
            ${this.len(this.t("width"), b.x1 - b.x0, (v) => setRect("w", v), 0.01, 0.1)} ${this.len(this.t("depth"), b.z1 - b.z0, (v) => setRect("d", v), 0.01, 0.1)}`
          : nothing}
        ${outdoorStanding(a.type)
          ? this.len(this.t("outdoor_height"), a.height ?? OUTDOOR_TOP[a.type], (v) => this.updateOutdoor({ height: Math.min(6, Math.max(0.1, round(v))) }), 0.05, 0.1)
          : a.type === "balcony"
            ? this.len(this.t("balcony_rail"), a.height ?? 1, (v) => this.updateOutdoor({ height: Math.min(2, Math.max(0.4, round(v))) }), 0.05, 0.4)
            : nothing}
        ${this.len(this.t("outdoor_offset"), a.offset ?? 0, (v) => this.updateOutdoor({ offset: Math.min(10, Math.max(-10, round(v))) || null }), 0.05)}
        ${a.type !== "pool"
          ? html`${this.len(this.t("outdoor_slope"), a.slope ?? 0, (v) => this.updateOutdoor({ slope: Math.min(20, Math.max(0, round(v))) || null }), 0.05, 0)}
              <label class="fp3d-field"
                >${this.t("outdoor_slope_dir")}
                <select ?disabled=${!admin} @change=${(e: Event) => this.updateOutdoor({ slope_dir: (e.target as HTMLSelectElement).value as SlopeDir })}>
                  ${SLOPE_DIRS.map((d) => html`<option value=${d} ?selected=${d === (a.slope_dir ?? "x")}>${this.t(`slope_${d.replace("-", "n")}` as I18nKey)}</option>`)}
                </select></label
              >`
          : nothing}
        ${a.type === "pool" ? this.renderPoolShape(a) : nothing}
        <label class="fp3d-check fp3d-wide" title=${this.t("outdoor_outline_hint")}
          ><input type="checkbox" .checked=${a.outline !== false} ?disabled=${!admin} @change=${(ev: Event) => this.updateOutdoor({ outline: (ev.target as HTMLInputElement).checked ? undefined : false })} />
          ${this.t("outdoor_outline")}</label
        >
        ${a.type === "fence" || a.type === "pergola"
          ? html`<label class="fp3d-check fp3d-wide" title=${this.t("outdoor_open_hint")}
              ><input type="checkbox" .checked=${!!a.open} ?disabled=${!admin} @change=${(ev: Event) => this.updateOutdoor({ open: (ev.target as HTMLInputElement).checked || undefined })} />
              ${this.t("outdoor_open")}</label
            >`
          : nothing}
        ${a.type === "pergola"
          ? html`<label class="fp3d-check fp3d-wide"
              ><input type="checkbox" .checked=${!!a.bracing} ?disabled=${!admin} @change=${(ev: Event) => this.updateOutdoor({ bracing: (ev.target as HTMLInputElement).checked || undefined })} />
              ${this.t("outdoor_bracing")}</label
            >`
          : nothing}
        <label class="fp3d-check fp3d-wide" title=${this.t("outdoor_cut_hint")}
          ><input type="checkbox" .checked=${!!a.cut} ?disabled=${!admin} @change=${(ev: Event) => this.updateOutdoor({ cut: (ev.target as HTMLInputElement).checked || undefined })} />
          ${this.t("outdoor_cut")}</label
        >
      </div>
      ${a.slope ? html`<p class="fp3d-sub">${this.t("outdoor_slope_hint")}</p>` : nothing}
      <p class="fp3d-sub">${this.t("outdoor_hint")}</p>
      ${this.renderModuleFields(a)}
      ${admin
        ? html`<div class="fp3d-actions">
            <button class="fp3d-btn" @click=${() => this.duplicateOutdoor()}>${this.t("duplicate")}</button>
            <button class="fp3d-btn fp3d-danger" @click=${() => this.deleteOutdoor()}>${this.t("delete")}</button>
          </div>`
        : nothing}
    </section>`;
  }


  // ------------------------------------------------------------------ the wall view

  /** Opens a room's wall seen from the front; `select` chooses a piece on it. */
  private openWallView(roomId: string, edge: number, select: string | null = null): void {
    this._wallView = { roomId, edge };
    this._wallSel = select;
    this._wallMulti = [];
    this._wallSingle = false;
    this._wallGap = null;
    this._wallFrame = null;
    this.wallDrag = null;
  }

  /** The pieces the wall view moves together: the multi choice, else the chosen piece's block (unless one part alone), else the piece. */
  private wallSelection(): string[] {
    if (this._wallMulti.length) return this._wallMulti;
    const f = this._wallSel ? this.floor?.furniture.find((m) => m.id === this._wallSel) : undefined;
    if (!f) return [];
    if (f.group && !this._wallSingle) return (this.floor?.furniture ?? []).filter((m) => m.group === f.group).map((m) => m.id);
    return [f.id];
  }

  /** Wall view: a piece (with its block) joins the choice or leaves it. */
  private wallToggle(id: string): void {
    const cur = this.wallSelection();
    const part = this.withGroups([id]);
    const next = cur.includes(id) ? cur.filter((x) => !part.includes(x)) : [...new Set([...cur, ...part])];
    this.wallChoose(next, id);
  }

  /** Wall view: choose these pieces (one, one block, or several). */
  private wallChoose(ids: string[], lead: string | null = ids[0] ?? null): void {
    this._wallSingle = false;
    this._wallSel = ids.length ? (lead && ids.includes(lead) ? lead : ids[0]) : null;
    this._wallMulti = [];
    const block = this.wallSelection();
    if (ids.length > 1 && !(ids.length === block.length && ids.every((x) => block.includes(x)))) this._wallMulti = ids;
    this._wallGap = null;
  }

  /** Several pieces in the wall view moved together: along the wall by ds and up or down by dy. */
  private moveSetOnWall(frame: WallFrame, ids: string[], ds: number, dy: number | null, base: Building = this._doc, history = true): void {
    const set = new Set(ids);
    this.change(
      (_, floor) => {
        for (const m of floor.furniture) {
          if (!set.has(m.id)) continue;
          Object.assign(m, slideAlong(frame, m, ds));
          if (dy !== null && canLift(m)) m.mount_y = Math.round(Math.min(MAX_MOUNT_Y, Math.max(0, mountBase(floor, m) + dy)) * 1000) / 1000;
        }
      },
      base,
      history,
    );
  }

  /** The free stretch of wall around s (metres along the wall) at height y: between the nearest pieces and openings left and right. */
  private wallGapAt(frame: WallFrame, floor: Floor, room: Room, s: number, y: number): { s0: number; s1: number; low: boolean } | null {
    const low = y < 1.2;
    const L = frame.length;
    const busy = [
      ...furnitureOnWall(frame, floor, room)
        .filter((i) => (low ? i.y0 < 1.0 : i.y1 > 1.2))
        .map((i) => [i.s0, i.s1]),
      ...openingsOnWall(frame, floor)
        .filter((o) => (low ? o.y0 < 0.9 : o.y1 > 1.2))
        .map((o) => [o.s0, o.s1]),
    ];
    if (busy.some(([a, b]) => s > a && s < b)) return null;
    const s0 = Math.max(0, ...busy.filter(([, b]) => b <= s).map(([, b]) => b));
    const s1 = Math.min(L, ...busy.filter(([a]) => a >= s).map(([a]) => a));
    return s1 - s0 >= 0.1 ? { s0: Math.round(s0 * 1000) / 1000, s1: Math.round(s1 * 1000) / 1000, low } : null;
  }

  /** The wall a piece of furniture stands or hangs at: the nearest edge of the room it is in. */
  private openWallViewFor(f: Furniture): void {
    const floor = this.floor;
    if (!floor) return;
    const room = floor.rooms.find((r) => r.points.length >= 3 && pointInPolygon([f.x, f.z], r.points));
    if (!room) return;
    let best = -1;
    let dist = Infinity;
    room.points.forEach((a, i) => {
      const b = room.points[(i + 1) % room.points.length];
      const l = Math.hypot(b[0] - a[0], b[1] - a[1]) || 1;
      const t = Math.max(0, Math.min(1, ((f.x - a[0]) * (b[0] - a[0]) + (f.z - a[1]) * (b[1] - a[1])) / (l * l)));
      const d = Math.hypot(f.x - (a[0] + (b[0] - a[0]) * t), f.z - (a[1] + (b[1] - a[1]) * t));
      if (d < dist) {
        dist = d;
        best = i;
      }
    });
    if (best >= 0) this.openWallView(room.id, best, f.id);
  }

  /** The room's walls from the front, starting with the wall that has the most furniture at it. */
  private openRoomWalls(room: Room): void {
    const floor = this.floor;
    if (!floor) return;
    let best = 0;
    let most = -1;
    room.points.forEach((_, i) => {
      const count = furnitureOnWall(roomEdgeFrame(room, i), floor, room).length;
      if (count > most) {
        most = count;
        best = i;
      }
    });
    this.openWallView(room.id, best);
  }

  private setWallView3d(on: boolean): void {
    this._wallView3d = on;
    this.wall3dKey = "";
    try {
      localStorage.setItem("neonplan3d.wall3d", on ? "1" : "0");
    } catch {
      // not remembered
    }
  }

  /**
   * The wall view in 3D: the camera stands in the room at about eye height and looks at the wall (a flight
   * when the wall changes). Every wall stands whole and solid; the mouse wheel walks closer or back.
   */
  private setupWall3d(el: HTMLElement, room: Room, edge: number): void {
    const key = `${room.id}|${edge}`;
    if (this.wall3dKey === key && this.wall3dEl === el) return;
    const first = this.wall3dEl !== el;
    this.wall3dKey = key;
    this.wall3dEl = el;
    // laying a pipe: the left button belongs to the pipe (caught before the viewer sees it)
    if (first) el.addEventListener("pointerdown", (e) => this.runDown3d(e as PointerEvent), { capture: true });
    type V = {
      getView(): { target: { set(x: number, y: number, z: number): unknown } };
      flyTo(v: unknown, ms?: number): void;
      floorMap: Map<string, { y: number }>;
      floors: { mask: { standing: { value: number }; glass: { value: number } } }[];
      controls: { minRadius: number; maxRadius: number; leftDragTurns: boolean };
      camera: { fov: number; updateProjectionMatrix(): void };
      labels: HTMLElement;
      updateWalls(): void;
      invalidate(): void;
      __npWall?: boolean;
    };
    void (async () => {
      let v: V | undefined;
      for (let i = 0; i < 120 && !(v = (el as unknown as { viewer?: V }).viewer); i++) await new Promise((r) => setTimeout(r, 50));
      // the first build of the view fits the camera to the floor: our view comes after it
      if (first) await new Promise((r) => setTimeout(r, 250));
      const floor = this.floor;
      if (!v || !floor || this.wall3dKey !== key) return;
      if (!v.__npWall) {
        v.__npWall = true;
        // the walls stand whole and none turns to glass (the wall in front of the camera would)
        v.updateWalls = function (this: V) {
          for (const fv of this.floors) {
            fv.mask.standing.value = 0xffff;
            fv.mask.glass.value = 0;
          }
        };
        v.labels.style.display = "none";
        // no search in this small view
        const sheet = new CSSStyleSheet();
        sheet.replaceSync(".fp3d-find-btn, .fp3d-find { display: none !important; }");
        if (el.shadowRoot) el.shadowRoot.adoptedStyleSheets = [...el.shadowRoot.adoptedStyleSheets, sheet];
        v.camera.fov = 58;
        v.camera.updateProjectionMatrix();
        v.controls.minRadius = 0.6;
        // the left mouse button is for the furniture here; the middle or right button looks around
        v.controls.leftDragTurns = false;
      }
      const frame = roomEdgeFrame(room, edge);
      const depth = Math.max(1.5, ...room.points.map((q) => toWall(frame, q).d));
      const mid = fromWall(frame, frame.length / 2, 0);
      const y = floor.elevation + (v.floorMap.get(floor.id)?.y ?? 0) + 1.15;
      v.controls.maxRadius = Math.max(1.4, depth - 0.25);
      const view = v.getView();
      view.target.set(mid[0], y, mid[1]);
      v.flyTo({ ...view, radius: Math.max(1.2, Math.min(depth * 0.8, depth - 0.35)), theta: Math.atan2(frame.n[0], frame.n[1]), phi: 1.3 }, first ? 0 : 650);
      v.invalidate();
      this.runLiftHandle();
    })();
  }

  /** Keeps the height handle of the 3D wall view over the chosen piece while the view is open. */
  private runLiftHandle(): void {
    cancelAnimationFrame(this.liftRaf);
    const step = () => {
      this.liftRaf = 0;
      const el = this.wall3dEl;
      const handle = this.renderRoot.querySelector<HTMLElement>(".fp3d-wv-lift");
      if (!el?.isConnected || !this._wallView || !this._wallView3d) return;
      this.liftRaf = requestAnimationFrame(step);
      if (!handle) return;
      const floor = this.floor;
      const f = this._wallSel ? floor?.furniture.find((m) => m.id === this._wallSel) : undefined;
      const v = (el as unknown as { viewer?: { camera: { position: { clone(): { set(x: number, y: number, z: number): { project(c: unknown): { x: number; y: number; z: number } } } } }; floorMap: Map<string, { y: number }> } }).viewer;
      if (!f || !floor || !v || !canLift(f) || f.locked) {
        handle.hidden = true;
        return;
      }
      const base = mountBase(floor, f);
      const top = floor.elevation + (v.floorMap.get(floor.id)?.y ?? 0) + base + f.h;
      const q = v.camera.position.clone().set(f.x, top + 0.12, f.z).project(v.camera);
      if (q.z > 1) {
        handle.hidden = true;
        return;
      }
      handle.hidden = false;
      const r = el.getBoundingClientRect();
      const stage = handle.offsetParent?.getBoundingClientRect() ?? r;
      handle.style.transform = `translate(${r.left - stage.left + ((q.x + 1) / 2) * r.width}px, ${r.top - stage.top + ((1 - q.y) / 2) * r.height}px)`;
      const label = handle.querySelector("b");
      if (label) label.textContent = this.m(Math.round(base * 100) / 100, 2);
    };
    this.liftRaf = requestAnimationFrame(step);
  }

  /** Dragging the height handle: up and down lifts the chosen piece (its distance from the camera sets the scale). */
  private liftDown(e: PointerEvent): void {
    const floor = this.floor;
    const f = this._wallSel ? floor?.furniture.find((m) => m.id === this._wallSel) : undefined;
    const el = this.wall3dEl as unknown as { viewer?: { camera: { position: { x: number; y: number; z: number }; fov: number } } } | null;
    const v = el?.viewer;
    if (!floor || !f || !v || !this.isAdmin) return;
    e.preventDefault();
    e.stopPropagation();
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
    const dist = Math.hypot(v.camera.position.x - f.x, v.camera.position.z - f.z) || 1;
    const h = (this.wall3dEl as HTMLElement).clientHeight || 1;
    const room = floor.rooms.find((r) => r.points.length >= 3 && pointInPolygon([f.x, f.z], r.points));
    const ceiling = Math.max(floor.height, room?.ceiling_height ?? 0);
    this.lift = { id: f.id, y: mountBase(floor, f), startY: e.clientY, perPx: (2 * dist * Math.tan((v.camera.fov * Math.PI) / 360)) / h, base: this._doc, top: Math.max(0, ceiling - f.h), moved: false };
  }

  private liftMove(e: PointerEvent): void {
    const l = this.lift;
    const room = this._wallView ? this.floor?.rooms.find((r) => r.id === this._wallView!.roomId) : undefined;
    if (!l || !room) return;
    const dy = (l.startY - e.clientY) * l.perPx;
    if (!l.moved && Math.abs(e.clientY - l.startY) < 3) return;
    l.moved = true;
    const y = Math.min(l.top, Math.max(0, Math.round((l.y + dy) * 100) / 100));
    this.moveOnWall(roomEdgeFrame(room, this._wallView!.edge), l.id, 0, y, l.base, false);
  }

  private liftUp(): void {
    const l = this.lift;
    this.lift = null;
    if (l?.moved) this.pushHistory(l.base);
  }

  /** Where the bubble under the toolbar's wall view button points to (px from the toolbar's top left corner). */
  private wallPickTip: [number, number] = [0, 0];

  /** The toolbar's wall view button: on, with a bubble right under it saying what to tap. */
  private toggleWallPick(btn: HTMLElement): void {
    const bar = btn.closest(".fp3d-toolbar")?.getBoundingClientRect();
    const r = btn.getBoundingClientRect();
    this.wallPickTip = bar ? [r.left - bar.left + r.width / 2, r.bottom - bar.top + 8] : [0, 0];
    this._wallPick = !this._wallPick;
  }

  /** The wall view of the wall nearest a tapped point (within 60 cm), the room under the point first. */
  private pickWall(p: Vec2): void {
    const floor = this.floor;
    if (!floor) return;
    let best: { room: Room; edge: number; d: number } | null = null;
    for (const room of floor.rooms) {
      if (room.points.length < 3) continue;
      // a shared wall belongs to both rooms: the one tapped into wins
      const bonus = pointInPolygon(p, room.points) ? -0.25 : 0;
      room.points.forEach((a, i) => {
        const b = room.points[(i + 1) % room.points.length];
        const l2 = (b[0] - a[0]) ** 2 + (b[1] - a[1]) ** 2 || 1;
        const t = Math.max(0, Math.min(1, ((p[0] - a[0]) * (b[0] - a[0]) + (p[1] - a[1]) * (b[1] - a[1])) / l2));
        const d = Math.hypot(p[0] - (a[0] + (b[0] - a[0]) * t), p[1] - (a[1] + (b[1] - a[1]) * t));
        if (d < 0.6 && (!best || d + bonus < best.d)) best = { room, edge: i, d: d + bonus };
      });
    }
    if (!best) {
      // a tap inside a room, away from its walls: the room's wall with the most furniture
      const room = floor.rooms.find((r) => r.points.length >= 3 && pointInPolygon(p, r.points));
      if (!room) return;
      this._wallPick = false;
      this.openRoomWalls(room);
      if (this.techPick) this.enterTech();
      return;
    }
    this._wallPick = false;
    this.openWallView((best as { room: Room }).room.id, (best as { edge: number }).edge);
    if (this.techPick) this.enterTech();
  }

  /** The 3D wall view's building while drawing the technical room: only the pool devices of all furniture. */
  private techDoc3d(): Building {
    const b = this._doc3d;
    if (this.techDocCache?.src === b) return this.techDocCache.doc;
    const doc = { ...b, floors: b.floors.map((f) => ({ ...f, furniture: f.furniture.filter((m) => (POOL_DEVICES as readonly string[]).includes(m.type)) })) };
    this.techDocCache = { src: b, doc };
    return doc;
  }
  private techDocCache: { src: Building; doc: Building } | null = null;

  /** "Technik zeichnen" on: only the wall, the pool devices and the pipes; the pen in the hand. */
  private enterTech(): void {
    this.techPick = false;
    this._techMode = true;
    this._wallSel = null;
    this._wallMulti = [];
    this._runSel = null;
    this._runDraft = null;
    this._feedKind = null;
    this._runMode = "draw";
  }

  /** Turns a piece in the wall view; turned against a wall it is pushed back into the room. */
  private turnOnWall(id: string, rotation: number): void {
    const wall = this._doc.settings.wall_interior;
    this.change((_, floor) => {
      const m = floor.furniture.find((x) => x.id === id);
      if (!m) return;
      m.rotation = Math.round(((rotation % 360) + 360) % 360);
      const [x, z] = clampIntoRoom(floor, m, m.x, m.z, wall, 0.6);
      Object.assign(m, { x, z });
    });
  }

  /** A piece moved towards or away from the wall (its plan position along the wall's normal). */
  private moveFromWall(frame: WallFrame, id: string, dd: number): void {
    this.change((_, floor) => {
      const m = floor.furniture.find((x) => x.id === id);
      if (!m) return;
      m.x = Math.round((m.x + frame.n[0] * dd) * 1000) / 1000;
      m.z = Math.round((m.z + frame.n[1] * dd) * 1000) / 1000;
    });
  }

  /** A piece in the wall view moved: along the wall by ds (plan position) and, when it can be lifted, to bottom y0. */
  private moveOnWall(frame: WallFrame, id: string, ds: number, y0: number | null, base: Building = this._doc, history = true): void {
    this.change(
      (_, floor) => {
        const m = floor.furniture.find((x) => x.id === id);
        if (!m) return;
        Object.assign(m, slideAlong(frame, m, ds));
        if (y0 !== null) m.mount_y = Math.round(Math.min(MAX_MOUNT_Y, Math.max(0, y0)) * 1000) / 1000;
      },
      base,
      history,
    );
  }

  /** Which of a piece's own sizes runs along the wall (w facing it, d standing sideways), null when it stands at a slant. */
  private alongAxis(frame: WallFrame, f: Furniture): "w" | "d" | null {
    const a = (this.wallTurn(frame, f) * Math.PI) / 180;
    if (Math.abs(Math.sin(a)) < 0.05) return "w";
    if (Math.abs(Math.cos(a)) < 0.05) return "d";
    return null;
  }

  /**
   * A piece's size in the wall view: its stretch along the wall (s0..s1, metres along the wall) and its bottom and
   * top (metres above the floor); null keeps that side. The other sides stay where they are.
   */
  private resizeOnWall(frame: WallFrame, id: string, s0: number | null, s1: number | null, y0: number | null, y1: number | null, base: Building = this._doc, history = true): void {
    this.change(
      (_, floor) => {
        const m = floor.furniture.find((x) => x.id === id);
        if (!m) return;
        const axis = this.alongAxis(frame, m);
        if (s0 !== null && s1 !== null && axis && s1 - s0 >= 0.05) {
          const c = furnitureFootprint(m).map((q) => toWall(frame, q).s);
          const mid = (Math.min(...c) + Math.max(...c)) / 2;
          m[axis] = round(s1 - s0);
          Object.assign(m, slideAlong(frame, m, (s0 + s1) / 2 - mid));
        }
        if (y0 !== null || y1 !== null) {
          const bottom = mountBase(floor, m);
          const nb = y0 ?? bottom;
          const nt = y1 ?? bottom + m.h;
          if (nt - nb < 0.03) return;
          m.h = round(nt - nb);
          if (y0 !== null && canLift(m)) m.mount_y = round(Math.max(0, nb));
        }
      },
      base,
      history,
    );
  }

  /** The turn of a piece relative to the viewer of a wall (0: its front faces into the room, towards the viewer). */
  private wallTurn(frame: WallFrame, f: Furniture): number {
    const wallRot = (Math.atan2(-frame.n[0], frame.n[1]) * 180) / Math.PI;
    return (((f.rotation - wallRot) % 360) + 360) % 360;
  }

  private wallPicKey(frame: WallFrame, f: Furniture): string {
    return `${f.type}|${f.w}|${f.d}|${f.h}|${f.variant ?? ""}|${Math.round(this.wallTurn(frame, f))}`;
  }

  /** Draws the missing front pictures with the 3D bundle (once per type, size and turn). */
  private async askWallPics(frame: WallFrame, pieces: Furniture[]): Promise<void> {
    const missing = pieces.filter((f) => !this.wallPicsAsked.has(this.wallPicKey(frame, f)));
    if (!missing.length) return;
    for (const f of missing) this.wallPicsAsked.add(this.wallPicKey(frame, f));
    try {
      const mod = await load3d();
      for (const f of missing) {
        const pic = mod.furnitureFront({ type: f.type, w: f.w, d: f.d, h: f.h, variant: f.variant, lamp: LAMP_MODEL[f.type] ?? null }, this.wallTurn(frame, f), 180, this.packs ?? [], 3.2);
        this.wallPics.set(this.wallPicKey(frame, f), pic);
      }
    } catch {
      // no 3D (no WebGL): the pieces stay boxes
    }
    this._wallPicTick++;
  }

  private renderWallView() {
    const v = this._wallView;
    const floor = this.floor;
    const room = v ? floor?.rooms.find((r) => r.id === v.roomId) : undefined;
    if (!v || !floor || !room || v.edge >= room.points.length) return nothing;
    const n = room.points.length;
    const frame = roomEdgeFrame(room, v.edge);
    const L = frame.length;
    const H = Math.max(floor.height, room.ceiling_height ?? 0);
    // drawing the technical room: the other furniture stays out of the way (kitchen, cabinets …)
    const items = this._techMode
      ? furnitureOnWall(frame, floor, room, 1.6).filter((i) => (POOL_DEVICES as readonly string[]).includes(floor.furniture.find((f) => f.id === i.id)?.type ?? ""))
      : furnitureOnWall(frame, floor, room);
    const holes = openingsOnWall(frame, floor);
    // drawing in metres: x from the left as seen from inside the room, y down from the ceiling
    const X = (s: number) => (frame.rightward ? s : L - s);
    const span = (s0: number, s1: number) => [Math.min(X(s0), X(s1)), Math.abs(s1 - s0)] as const;
    const Y = (y: number) => H - y;
    const admin = this.isAdmin;
    // the chosen piece: one at the wall, or (3D) any piece of the room – its span along the wall and distance from it
    const selF = this._wallSel ? floor.furniture.find((m) => m.id === this._wallSel) : undefined;
    const sel = selF
      ? (items.find((i) => i.id === selF.id) ??
        (() => {
          const c = furnitureFootprint(selF).map((q) => toWall(frame, q));
          const y0 = mountBase(floor, selF);
          return { kind: "furniture" as const, id: selF.id, s0: Math.min(...c.map((q) => q.s)), s1: Math.max(...c.map((q) => q.s)), y0, y1: y0 + selF.h, d: Math.min(...c.map((q) => q.d)) };
        })())
      : null;
    const lift = !!selF && canLift(selF);
    // several pieces (a block, a multi choice): moved together, framed in orange
    const wset = this.wallSelection();
    const many = wset.length > 1;
    const setItems = items.filter((i) => wset.includes(i.id));
    const setSpan = setItems.length ? { s0: Math.min(...setItems.map((i) => i.s0)), s1: Math.max(...setItems.map((i) => i.s1)), y0: Math.min(...setItems.map((i) => i.y0)), y1: Math.max(...setItems.map((i) => i.y1)) } : null;
    const text = (t: number) => this.m(t, 2);
    const svgPoint = (e: PointerEvent) => {
      const el = (e.currentTarget as Element).closest("svg") as SVGSVGElement;
      const pt = el.createSVGPoint();
      pt.x = e.clientX;
      pt.y = e.clientY;
      return pt.matrixTransform(el.getScreenCTM()!.inverse());
    };
    // edges to snap to while dragging: the wall's ends and the sides of the other pieces and openings
    const snaps = (ids: string[]) => [0, L, ...items.filter((i) => !ids.includes(i.id)).flatMap((i) => [i.s0, i.s1]), ...holes.flatMap((o) => [o.s0, o.s1])];
    const down = (e: PointerEvent, id: string) => {
      if (!admin) return;
      if (rc && this._runMode) {
        this.techPress = rc.pt(e);
        this.runDown(e, rc);
        return;
      }
      e.stopPropagation();
      this._runSel = null;
      // shift (or "Mehrere auswählen" on a tablet): the piece joins the choice or leaves it
      if (e.shiftKey || this._multiMode) {
        this.wallToggle(id);
        return;
      }
      if (!this.wallSelection().includes(id) || this._wallSingle) this.wallChoose([id]);
      const ids = this.wallSelection();
      const p = svgPoint(e);
      (e.currentTarget as Element).closest("svg")!.setPointerCapture(e.pointerId);
      const own = items.filter((i) => ids.includes(i.id));
      if (ids.length > 1 && ids.some((x) => this.isFixedItem("furniture", x))) return;
      if (ids.length > 1 && own.length) {
        const s0 = Math.min(...own.map((i) => i.s0));
        this.wallDrag = { id, ids, w: Math.max(...own.map((i) => i.s1)) - s0, x: p.x, y: p.y, base: this._doc, s0, y0: 0, lift: own.every((i) => { const m = floor.furniture.find((x) => x.id === i.id); return !!m && canLift(m); }), moved: false };
        return;
      }
      const it = items.find((i) => i.id === id)!;
      const m = floor.furniture.find((x) => x.id === id);
      this.wallDrag = { id, x: p.x, y: p.y, base: this._doc, s0: it.s0, y0: it.y0, lift: !!m && canLift(m), moved: false };
    };
    // the bare wall: a tap finds the free stretch there (the side bar then offers what fits), shift + drag draws a frame
    const wallDown = (e: PointerEvent) => {
      if (!admin || this._runMode) return;
      const p = svgPoint(e);
      if (e.shiftKey || this._multiMode) {
        (e.currentTarget as Element).closest("svg")!.setPointerCapture(e.pointerId);
        this._wallFrame = { x0: p.x, y0: p.y, x1: p.x, y1: p.y };
        return;
      }
      this._wallSel = null;
      this._wallMulti = [];
      this._wallSingle = false;
      const sAt = frame.rightward ? p.x : L - p.x;
      this._wallGap = sAt >= 0 && sAt <= L && p.y >= 0 && p.y <= H ? this.wallGapAt(frame, floor, room, sAt, H - p.y) : null;
    };
    const move = (e: PointerEvent) => {
      const rz = this.wallResize;
      if (rz) {
        const p = svgPoint(e);
        rz.moved = true;
        // edges snap to the neighbours, the wall's ends, doors and windows (Alt: freely), by the centimetre
        const edgesX = snaps([rz.id]).map((q) => X(q));
        const snapX = (v: number) => {
          v = Math.round(v * 100) / 100;
          if (!e.altKey) for (const q of edgesX) if (Math.abs(v - q) < 0.04) return q;
          return v;
        };
        if (rz.side === "l" || rz.side === "r") {
          const x0 = rz.side === "l" ? Math.min(snapX(p.x), rz.x1 - 0.1) : rz.x0;
          const x1 = rz.side === "r" ? Math.max(snapX(p.x), rz.x0 + 0.1) : rz.x1;
          const [s0, s1] = frame.rightward ? [x0, x1] : [L - x1, L - x0];
          this.resizeOnWall(frame, rz.id, s0, s1, null, null, rz.base, false);
        } else {
          const y = Math.round((H - p.y) * 100) / 100;
          if (rz.side === "t") this.resizeOnWall(frame, rz.id, null, null, null, Math.max(rz.y0 + 0.05, Math.min(H, y)), rz.base, false);
          else this.resizeOnWall(frame, rz.id, null, null, Math.max(0, Math.min(rz.y1 - 0.05, y)), null, rz.base, false);
        }
        return;
      }
      const fr = this._wallFrame;
      if (fr) {
        const p = svgPoint(e);
        this._wallFrame = { ...fr, x1: p.x, y1: p.y };
        return;
      }
      const d = this.wallDrag;
      if (!d) return;
      const p = svgPoint(e);
      const dxView = p.x - d.x;
      const dy = d.y - p.y;
      if (!d.moved && Math.hypot(dxView, dy) < 0.02) return;
      d.moved = true;
      const it = items.find((i) => i.id === d.id);
      const w = d.ids ? (d.w ?? 0) : it ? it.s1 - it.s0 : 0;
      let s0 = d.s0 + (frame.rightward ? dxView : -dxView);
      s0 = Math.round(s0 * 100) / 100;
      // a side within 4 cm of an edge snaps to it (Alt moves freely); a block snaps with its outer sides
      if (!e.altKey) {
        for (const edge of snaps(d.ids ?? [d.id])) {
          if (Math.abs(s0 - edge) < 0.04) s0 = edge;
          else if (Math.abs(s0 + w - edge) < 0.04) s0 = edge - w;
        }
      }
      if (d.ids) {
        this.moveSetOnWall(frame, d.ids, s0 - d.s0, d.lift ? Math.round(dy * 100) / 100 : null, d.base, false);
        return;
      }
      const y0 = d.lift ? Math.round((d.y0 + dy) * 100) / 100 : null;
      this.moveOnWall(frame, d.id, s0 - d.s0, y0, d.base, false);
    };
    const up = () => {
      const rz = this.wallResize;
      if (rz) {
        this.wallResize = null;
        if (rz.moved) this.pushHistory(rz.base);
        return;
      }
      const fr = this._wallFrame;
      if (fr) {
        // every piece whose middle lies in the frame joins the choice
        this._wallFrame = null;
        const [x0, x1] = [Math.min(fr.x0, fr.x1), Math.max(fr.x0, fr.x1)];
        const [y0, y1] = [Math.min(fr.y0, fr.y1), Math.max(fr.y0, fr.y1)];
        const hit = items
          .filter((i) => {
            const [x, w] = span(i.s0, i.s1);
            const cx = x + w / 2;
            const cy = Y((i.y0 + i.y1) / 2);
            return cx >= x0 && cx <= x1 && cy >= y0 && cy <= y1;
          })
          .map((i) => i.id);
        if (hit.length) this.wallChoose([...new Set([...this.wallSelection(), ...this.withGroups(hit)])]);
        return;
      }
      const d = this.wallDrag;
      this.wallDrag = null;
      if (d?.moved) this.pushHistory(d.base);
    };
    const key = (e: KeyboardEvent) => {
      if (this._runMode && (e.key === "Escape" || e.key === "Enter")) {
        e.preventDefault();
        if (e.key === "Enter") this.finishRun("", null);
        else if (this._runDraft) this._runDraft = null;
        else this._runMode = null;
        return;
      }
      if (e.key === "Escape") {
        this._wallView = null;
        return;
      }
      if ((e.key === "Delete" || e.key === "Backspace") && admin && rc && this._runSel && !wset.length && !(e.target as HTMLElement).closest("input, select, textarea")) {
        e.preventDefault();
        const id = this._runSel.pipe;
        this.changePool(rc.pool.id, (l) => (l.pipes = (l.pipes ?? []).filter((y) => y.id !== id)));
        this._runSel = null;
        return;
      }
      if ((e.key === "Delete" || e.key === "Backspace") && admin && wset.length && !(e.target as HTMLElement).closest("input, select, textarea")) {
        e.preventDefault();
        this.deleteOnWall(wset);
        return;
      }
      if (!sel && (e.key === "ArrowLeft" || e.key === "ArrowRight")) {
        e.preventDefault();
        go(e.key === "ArrowLeft" ? leftEdge : rightEdge);
        return;
      }
      if (!sel || !admin || !["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"].includes(e.key)) return;
      if ((e.target as HTMLElement).closest("input, select, textarea")) return;
      e.preventDefault();
      const step = e.shiftKey ? 0.1 : 0.01;
      const right = e.key === "ArrowRight" ? step : e.key === "ArrowLeft" ? -step : 0;
      const ds = frame.rightward ? right : -right;
      const dy = e.key === "ArrowUp" ? step : e.key === "ArrowDown" ? -step : 0;
      if (many) return this.moveSetOnWall(frame, wset, ds, dy || null);
      this.moveOnWall(frame, sel.id, ds, lift && dy ? sel.y0 + dy : null);
    };
    // the chosen piece: its distances to the wall's ends and to the floor
    const dimOf = many && setSpan ? setSpan : sel;
    const dims = dimOf
      ? (() => {
          const sel = dimOf;
          const [x, w] = span(sel.s0, sel.s1);
          const yb = Y(sel.y0);
          const dimY = Math.min(H + 0.25, Y(0) + 0.25);
          return svg`<g class="fp3d-wv-dims">
            ${x > 0.03 ? svg`<line x1="0" y1=${dimY} x2=${x} y2=${dimY} /><text x=${x / 2} y=${dimY - 0.05}>${text(x)}</text>` : nothing}
            ${L - x - w > 0.03 ? svg`<line x1=${x + w} y1=${dimY} x2=${L} y2=${dimY} /><text x=${x + w + (L - x - w) / 2} y=${dimY - 0.05}>${text(L - x - w)}</text>` : nothing}
            ${sel.y0 > 0.03 ? svg`<line x1=${x + w / 2} y1=${yb} x2=${x + w / 2} y2=${H} /><text x=${x + w / 2 + 0.05} y=${(yb + H) / 2} class="fp3d-wv-up">${text(sel.y0)}</text>` : nothing}
          </g>`;
        })()
      : nothing;
    // the walls left and right of this one as seen from inside the room (the room's edges may run either way)
    const rightEdge = (v.edge + (frame.rightward ? 1 : -1) + n) % n;
    const leftEdge = (v.edge + (frame.rightward ? -1 : 1) + n) % n;
    const wallName = (e: number) => this.t("wall_n", { a: e + 1, b: ((e + 1) % n) + 1 });
    const go = (edge: number) => this.openWallView(room.id, edge);
    void this._wallPicTick;
    void this.askWallPics(frame, items.map((i) => floor.furniture.find((m) => m.id === i.id)).filter((m): m is Furniture => !!m));
    // zoom: the part of the wall shown (the whole wall plus a margin at k = 1)
    const zkey = `${room.id}:${v.edge}`;
    const z = this.wvZoom?.key === zkey ? this.wvZoom : null;
    const W0 = L + 1;
    const H0 = H + 0.9;
    const clampZ = (k: number, x0: number, y0: number) => {
      const kk = Math.min(8, Math.max(1, k));
      const w = W0 / kk;
      const h = H0 / kk;
      return { k: kk, w, h, x0: Math.min(-0.5 + W0 - w, Math.max(-0.5, x0)), y0: Math.min(-0.35 + H0 - h, Math.max(-0.35, y0)) };
    };
    const vb = clampZ(z?.k ?? 1, z?.x0 ?? -0.5, z?.y0 ?? -0.35);
    const setZoom = (k: number, x0: number, y0: number) => {
      const c = clampZ(k, x0, y0);
      this.wvZoom = c.k <= 1.001 ? null : { key: zkey, k: c.k, x0: c.x0, y0: c.y0 };
      this.requestUpdate();
    };
    // the point (svg units) under the pointer stays where it is
    const zoomAt = (px: number, py: number, k: number) => {
      const kk = Math.min(8, Math.max(1, k));
      setZoom(kk, px - ((px - vb.x0) * vb.k) / kk, py - ((py - vb.y0) * vb.k) / kk);
    };
    const pinchMove = (el: SVGSVGElement) => {
      const pz = this.wvPinch!;
      const [a, b] = [...this.wvTouch.values()];
      const d = Math.hypot(a.x - b.x, a.y - b.y);
      const mx = (a.x + b.x) / 2;
      const my = (a.y + b.y) / 2;
      const r = el.getBoundingClientRect();
      // screen pixels per svg unit at the start (the view keeps its aspect: the smaller scale fits)
      const W = W0 / pz.k;
      const Hh = H0 / pz.k;
      const scale = Math.min(r.width / W, r.height / Hh);
      const ox = r.left + (r.width - W * scale) / 2;
      const oy = r.top + (r.height - Hh * scale) / 2;
      const sx = pz.x0 + (pz.mx - ox) / scale;
      const sy = pz.y0 + (pz.my - oy) / scale;
      const k = Math.min(8, Math.max(1, (pz.k * d) / Math.max(1, pz.d)));
      const s2 = scale * (k / pz.k);
      const ox2 = r.left + (r.width - (W0 / k) * s2) / 2;
      const oy2 = r.top + (r.height - (H0 / k) * s2) / 2;
      setZoom(k, sx - (mx - ox2) / s2, sy - (my - oy2) / s2);
    };
    // labels, markers and fittings grow slower than the wall when zoomed
    this.wvScale = 1 / Math.sqrt(vb.k);
    const fs = Math.max(0.09, Math.min(0.16, L / 40)) * this.wvScale;
    // Pool Pro: the pipes on this wall
    const pool = this.canLayRuns ? this.runPool : undefined;
    const rc: RunCtx | null = (this.runCtx3d = pool
      ? {
          frame,
          floor,
          room,
          key: `${room.id}|${v.edge}`,
          L,
          H,
          gap: (sharedEdge(floor, room.id, frame.a, frame.b) ? this._doc.settings.wall_interior / 2 : 0) + RUN_GAP,
          runs: runsOnWall(frame, (pool.pool?.pipes ?? []).filter((q) => q.floor_id === floor.id), poolNodeAt(this._doc, floor, pool)),
          pool,
          pt: (e: PointerEvent) => {
            const q = svgPoint(e);
            return { s: frame.rightward ? q.x : L - q.x, y: H - q.y };
          },
        }
      : null);
    return html`<div class="fp3d-wv-veil" @click=${(e: Event) => e.target === e.currentTarget && (this._wallView = null)}>
      <div class="fp3d-wv" role="dialog" aria-label=${this.t("wall_view")} tabindex="0" @keydown=${key}>
        <div class="fp3d-wv-head">
          <button class="fp3d-btn" title=${`${this.t("wall_prev")}: ${wallName(leftEdge)}`} @click=${() => go(leftEdge)}>‹</button>
          <b>${this.t("wall_view")} · ${room.name} · ${this.t("wall_n", { a: v.edge + 1, b: ((v.edge + 1) % n) + 1 })} · ${this.m(L, 2)}</b>
          <button class="fp3d-btn" title=${`${this.t("wall_next")}: ${wallName(rightEdge)}`} @click=${() => go(rightEdge)}>›</button>
          <span class="fp3d-wv-grow"></span>
          ${admin && this.pipeRules && this.runPool
            ? html`<button class="fp3d-btn ${this._techMode ? "fp3d-primary" : ""}" title=${this.t("tech_mode_hint")} @click=${() => {
                if (this._techMode) {
                  this._techMode = false;
                  this._runDraft = null;
                  this._feedKind = null;
                  this._runMode = null;
                } else this.enterTech();
              }}>🛠 ${this.t("tech_mode")}</button>`
            : nothing}
          ${rc && admin && !this._techMode
            ? html`<button class="fp3d-btn ${this._runMode === "draw" ? "fp3d-primary" : ""}" @click=${() => {
                this._wallSel = null;
                this._runSel = null;
                this._runDraft = null;
                this._runMode = this._runMode === "draw" ? null : "draw";
              }}>${this.t("wall_run_add")}</button>`
            : nothing}
          <div class="fp3d-seg" role="group">
            <button aria-pressed=${this._wallView3d} @click=${() => this.setWallView3d(true)}>${this.t("wall_view_3d")}</button>
            <button aria-pressed=${!this._wallView3d} @click=${() => this.setWallView3d(false)}>${this.t("wall_view_front")}</button>
          </div>
          <button class="fp3d-btn" title=${this.t("close")} @click=${() => (this._wallView = null)}>✕</button>
        </div>
        <div class="fp3d-wv-body">
        ${this.renderWallKit(frame, room, rc)}
        <div class="fp3d-wv-stage">
          <button class="fp3d-wv-side fp3d-wv-left" title=${`${this.t("wall_prev")}: ${wallName(leftEdge)}`} @click=${() => go(leftEdge)}>‹<small>${wallName(leftEdge)}</small></button>
          <button class="fp3d-wv-side fp3d-wv-right" title=${`${this.t("wall_next")}: ${wallName(rightEdge)}`} @click=${() => go(rightEdge)}>›<small>${wallName(rightEdge)}</small></button>
          ${this._wallView3d
            ? nothing
            : html`<div class="fp3d-wv-zoom" title=${this.t("wall_zoom_hint")}>
                <button class="fp3d-btn" aria-label="+" @click=${() => zoomAt(vb.x0 + vb.w / 2, vb.y0 + vb.h / 2, vb.k * 1.6)}>＋</button>
                <button class="fp3d-btn" aria-label="−" ?disabled=${vb.k <= 1.001} @click=${() => zoomAt(vb.x0 + vb.w / 2, vb.y0 + vb.h / 2, vb.k / 1.6)}>−</button>
                <button class="fp3d-btn" title=${this.t("wall_zoom_all")} ?disabled=${vb.k <= 1.001} @click=${() => setZoom(1, -0.5, -0.35)}>⤢</button>
                ${vb.k > 1.001
                  ? html`<button class="fp3d-btn" aria-label="←" @click=${() => setZoom(vb.k, vb.x0 - vb.w * 0.3, vb.y0)}>←</button>
                      <button class="fp3d-btn" aria-label="→" @click=${() => setZoom(vb.k, vb.x0 + vb.w * 0.3, vb.y0)}>→</button>
                      <button class="fp3d-btn" aria-label="↑" @click=${() => setZoom(vb.k, vb.x0, vb.y0 - vb.h * 0.3)}>↑</button>
                      <button class="fp3d-btn" aria-label="↓" @click=${() => setZoom(vb.k, vb.x0, vb.y0 + vb.h * 0.3)}>↓</button>`
                  : nothing}
              </div>`}
        ${this._wallView3d
          ? html`<fp3d-view3d
              .walkable=${false}
              class="fp3d-wv-3d"
              ${ref((el) => el && this.setupWall3d(el as HTMLElement, room, v.edge))}
              .hass=${this.hass}
              .building=${this._techMode ? this.techDoc3d() : this._doc3d}
              .floorId=${this._floorId}
              .roomId=${null}
              .wallMode=${"auto"}
              .explode=${false}
              .markerMode=${"none"}
              .heatMode=${"none"}
              .theme=${"neon"}
              .packs=${this.packs}
              .showEnergy=${false}
              .holograms=${false}
              .flows=${false}
              ?furnish=${admin}
              .furnishTypes=${null}
              .selectedFurniture=${this._wallSel}
              .selectedSet=${wset}
              .quality=${"auto"}
              .floorThumbs=${false}
              .roomLabels=${false}
              .floorStack=${"single"}
              .panelOpen=${false}
              .alerts=${false}
              .scenes=${false}
              .central=${false}
              @furniture-select=${(e: CustomEvent<{ id: string | null }>) => {
                const id = e.detail.id;
                // shift (or "Mehrere auswählen"): the piece joins the choice; a piece of the chosen set keeps the set
                if (id && (this.shiftHeld || this._multiMode)) this.wallToggle(id);
                else if (!id) this.wallChoose([]);
                else if (!this.wallSelection().includes(id) || this._wallSingle) this.wallChoose([id]);
                else this._wallSel = id;
              }}
              @furniture-move=${this.onFurnitureMoved3d}
            ></fp3d-view3d>
            <div class="fp3d-wv-lift" hidden title=${this.t("wall_view_lift")} @pointerdown=${(e: PointerEvent) => this.liftDown(e)} @pointermove=${(e: PointerEvent) => this.liftMove(e)} @pointerup=${() => this.liftUp()} @pointercancel=${() => this.liftUp()}>
              <span>↕</span><b></b>
            </div>`
          : html`<svg
          class="fp3d-wv-svg ${this._runMode ? "fp3d-wv-drawing" : ""} ${this._runMode === "valve" || this._runMode === "sight" ? "fp3d-wv-fitmode" : ""} ${this._runMode === "erase" ? "fp3d-wv-fitmode fp3d-wv-erase" : ""}"
          viewBox="${vb.x0} ${vb.y0} ${vb.w} ${vb.h}"
          preserveAspectRatio="xMidYMid meet"
          @wheel=${(e: WheelEvent) => {
            e.preventDefault();
            const el = e.currentTarget as SVGSVGElement;
            const pt = el.createSVGPoint();
            pt.x = e.clientX;
            pt.y = e.clientY;
            const q = pt.matrixTransform(el.getScreenCTM()!.inverse());
            zoomAt(q.x, q.y, vb.k * Math.exp(-e.deltaY * 0.0015));
          }}
          @pointerdown=${(e: PointerEvent) => {
            if (e.pointerType === "touch") {
              this.wvTouch.set(e.pointerId, { x: e.clientX, y: e.clientY });
              if (this.wvTouch.size === 2) {
                // a second finger: zoom and pan instead of what the first one began
                const [a, b] = [...this.wvTouch.values()];
                this.wvPinch = { d: Math.hypot(a.x - b.x, a.y - b.y), mx: (a.x + b.x) / 2, my: (a.y + b.y) / 2, k: vb.k, x0: vb.x0, y0: vb.y0 };
                this.wvTap = null;
                this.techPress = null;
                up();
                this.runPointUp();
                this.fitDrag = null;
                this.jointDrag = null;
                return;
              }
              if (this.wvPinch) return;
              if (rc && this._runMode && this.isAdmin) {
                e.stopPropagation();
                const q = rc.pt(e);
                this.wvTap = q;
                this.techPress = q;
                return;
              }
            }
            if (rc && this._runMode) {
              this.techPress = rc.pt(e);
              this.runDown(e, rc);
            } else if (this._runSel) this._runSel = null;
            else wallDown(e);
          }}
          @pointermove=${(e: PointerEvent) => {
            if (this.wvTouch.has(e.pointerId)) this.wvTouch.set(e.pointerId, { x: e.clientX, y: e.clientY });
            if (this.wvPinch) {
              if (this.wvTouch.size === 2) pinchMove(e.currentTarget as SVGSVGElement);
              return;
            }
            move(e);
            if (rc && this.jointDrag) this.jointMove(e, rc);
            else if (rc && this.fitDrag) this.fittingMove(e, rc);
            else if (rc && this.runDrag) this.runPointMove(e, rc);
            else if (rc && this._runMode === "draw" && this.techPress && this.isAdmin && (e.buttons & 1 || e.pointerType === "touch")) {
              // the pen on the wall: the stroke grows under the pointer; its line begins with the first movement
              const q = rc.pt(e);
              const press = this.techPress;
              if (!this._runDraft && !this.techStroke && Math.hypot(q.s - press.s, q.y - press.y) > 0.02) {
                this.wvTap = null;
                this.runAt(rc, press.s, press.y, false, 1, null);
              }
              if (this._runDraft && !this.wvTap) {
                const st = (this.techStroke ??= [this.techPress]);
                const last = st[st.length - 1];
                if (Math.hypot(q.s - last.s, q.y - last.y) > 0.02) st.push(q);
                this.runHover = [q.s, q.y];
                this.requestUpdate();
              }
            } else if (rc && this._runMode === "draw" && this._runDraft) {
              const q = rc.pt(e);
              this.runHover = [q.s, q.y];
              this.requestUpdate();
            }
          }}
          @pointerup=${(e: PointerEvent) => {
            this.wvTouch.delete(e.pointerId);
            if (this.wvPinch) {
              if (!this.wvTouch.size) this.wvPinch = null;
              return;
            }
            const tap = this.wvTap;
            this.wvTap = null;
            const stroke = this.techStroke;
            this.techStroke = null;
            const travel = stroke ? stroke.reduce((sum, p, i) => (i ? sum + Math.hypot(p.s - stroke[i - 1].s, p.y - stroke[i - 1].y) : 0), 0) : 0;
            const pen = rc && this._techMode && this._runMode === "draw";
            if (stroke && travel > 0.12 && rc && this._runMode === "draw" && this._runDraft) {
              this.techPress = null;
              this.runHover = null;
              this.endStroke(rc, stroke, rc.pt(e));
            } else if (pen) {
              // a tap with the pen: a stroke too short to be a line is dropped; the pipe under the tap is chosen
              const press = this.techPress;
              this.techPress = null;
              this._runDraft = null;
              this.runHover = null;
              if (press) {
                const hit = this.runPick(rc!, press.s, press.y, true);
                this._runSel = hit.pipe ? { pipe: hit.pipe.id, pt: null } : null;
              }
            } else {
              if (tap && rc && this._runMode) this.runAt(rc, tap.s, tap.y, false, 1, null);
              this.techPress = null;
            }
            up();
            this.runPointUp();
            this.fittingUp(rc);
            const jd = this.jointDrag;
            this.jointDrag = null;
            if (jd?.moved) this.pushHistory(jd.base);
            else if (jd && rc) this.openCard(rc.pool.id, `joint:${jd.id}`);
          }}
          @pointercancel=${(e: PointerEvent) => {
            this.wvTouch.delete(e.pointerId);
            if (!this.wvTouch.size) this.wvPinch = null;
            this.wvTap = null;
            this.techPress = null;
            this.techStroke = null;
            up();
            this.runPointUp();
            this.fitDrag = null;
          }}
          style="--fs:${fs}px"
        >
          <rect class="fp3d-wv-wall" x="0" y="0" width=${L} height=${H} />
          ${Array.from({ length: Math.floor(H / 0.5) }, (_, k) => svg`<line class="fp3d-wv-grid" x1="0" x2=${L} y1=${Y((k + 1) * 0.5)} y2=${Y((k + 1) * 0.5)} /><text class="fp3d-wv-scale" x="-0.06" y=${Y((k + 1) * 0.5) + 0.03}>${((k + 1) * 0.5).toFixed(1)}</text>`)}
          ${holes.map((o) => {
            const [x, w] = span(o.s0, o.s1);
            const op = floor.openings.find((q) => q.id === o.id);
            const label = op?.type === "window" ? this.t("opening_window") : op?.type === "garage" ? this.t("opening_garage") : this.t("opening_door");
            return svg`<rect class="fp3d-wv-hole ${op?.type === "window" ? "fp3d-wv-window" : ""}" x=${x} y=${Y(o.y1)} width=${w} height=${o.y1 - o.y0} />
              ${w > fs * 3.5 ? svg`<text class="fp3d-wv-hole-label" x=${x + w / 2} y=${Y(o.y1) + fs * 1.3} style="font-size:${fs * 0.85}px">${label}</text>` : nothing}`;
          })}
          ${items.map((it) => {
            const [x, w] = span(it.s0, it.s1);
            const m = floor.furniture.find((q) => q.id === it.id)!;
            const name = m.name || furnitureName(this.hass, m.type);
            const h = it.y1 - it.y0;
            const pic = this.wallPics.get(this.wallPicKey(frame, m));
            const xc = X(toWall(frame, [m.x, m.z]).s);
            return svg`<g class="fp3d-wv-item ${pic ? "fp3d-wv-pic" : ""} ${it.id === this._wallSel || wset.includes(it.id) ? "fp3d-wv-sel" : ""}" @pointerdown=${(e: PointerEvent) => down(e, it.id)} @dblclick=${() => {
              // a part of a block: this part alone; a single piece: open it in the plan
              const m2 = floor.furniture.find((q) => q.id === it.id);
              if (m2?.group && !this._wallSingle) {
                this.wallChoose([it.id]);
                this._wallSingle = true;
                return;
              }
              this._wallView = null;
              this.selectItem("furniture", it.id);
            }}>
              ${pic ? svg`<image href=${pic.url} x=${xc + pic.x0} y=${Y(it.y0 + pic.y1)} width=${pic.x1 - pic.x0} height=${pic.y1 - pic.y0} preserveAspectRatio="none" />` : nothing}
              <rect x=${x} y=${Y(it.y1)} width=${w} height=${Math.max(0.02, h)}><title>${name}</title></rect>
              ${!pic && w > fs * 3 && h > fs * 1.4 ? svg`<text x=${x + w / 2} y=${Y(it.y1) + Math.min(h / 2, fs * 1.6) + fs * 0.35} style="font-size:${fs}px">${name}</text>` : nothing}
            </g>`;
          })}
          ${dims}
          ${sel && selF && !many && admin && !selF.locked && items.some((i) => i.id === sel.id)
            ? (() => {
                const [x, w] = span(sel.s0, sel.s1);
                const yt = Y(sel.y1);
                const yb = Y(sel.y0);
                const hs = fs * 0.75;
                const along = this.alongAxis(frame, selF);
                const grab = (side: "l" | "r" | "t" | "b") => (e: PointerEvent) => {
                  e.stopPropagation();
                  (e.currentTarget as Element).closest("svg")!.setPointerCapture(e.pointerId);
                  this.wallResize = { id: sel.id, side, x0: x, x1: x + w, y0: sel.y0, y1: sel.y1, base: this._doc, moved: false };
                };
                return svg`<g class="fp3d-wv-handles">
                  ${along
                    ? svg`<rect class="fp3d-wv-handle fp3d-wv-ew" x=${x - hs / 2} y=${(yt + yb) / 2 - hs} width=${hs} height=${hs * 2} rx=${hs / 3} @pointerdown=${grab("l")} />
                        <rect class="fp3d-wv-handle fp3d-wv-ew" x=${x + w - hs / 2} y=${(yt + yb) / 2 - hs} width=${hs} height=${hs * 2} rx=${hs / 3} @pointerdown=${grab("r")} />`
                    : nothing}
                  <rect class="fp3d-wv-handle fp3d-wv-ns" x=${x + w / 2 - hs} y=${yt - hs / 2} width=${hs * 2} height=${hs} rx=${hs / 3} @pointerdown=${grab("t")} />
                  ${sel.y0 > 0.05 && canLift(selF) ? svg`<rect class="fp3d-wv-handle fp3d-wv-ns" x=${x + w / 2 - hs} y=${yb - hs / 2} width=${hs * 2} height=${hs} rx=${hs / 3} @pointerdown=${grab("b")} />` : nothing}
                  <text class="fp3d-wv-size" x=${x + w / 2} y=${yt - hs * 0.9} style="font-size:${fs * 0.85}px">${text(sel.s1 - sel.s0)} × ${text(sel.y1 - sel.y0)}</text>
                </g>`;
              })()
            : nothing}
          ${many && setSpan
            ? (() => {
                const [x, w] = span(setSpan.s0, setSpan.s1);
                const block = !this._wallMulti.length;
                return svg`<g class=${`fp3d-wv-setframe${block ? " fp3d-wv-setblock" : ""}`}><rect x=${x - 0.03} y=${Y(setSpan.y1) - 0.03} width=${w + 0.06} height=${setSpan.y1 - setSpan.y0 + 0.06} /><text x=${x} y=${Y(setSpan.y1) - 0.07} style="font-size:${fs * 0.85}px">${block ? `▣ ${this.t("block_title")} · ${wset.length}` : this.t("multi_title", { n: wset.length })}</text></g>`;
              })()
            : nothing}
          ${this._wallGap
            ? (() => {
                const g = this._wallGap;
                const [x, w] = span(g.s0, g.s1);
                const top = g.low ? Math.min(H, 0.9) : Math.min(H, 2.2);
                const bottom = g.low ? 0 : 1.3;
                return svg`<g class="fp3d-wv-gap"><rect x=${x} y=${Y(top)} width=${w} height=${top - bottom} /><text x=${x + w / 2} y=${Y((top + bottom) / 2)} style="font-size:${fs}px">${text(w)}</text></g>`;
              })()
            : nothing}
          ${this._wallFrame ? svg`<rect class="fp3d-wv-marquee" x=${Math.min(this._wallFrame.x0, this._wallFrame.x1)} y=${Math.min(this._wallFrame.y0, this._wallFrame.y1)} width=${Math.abs(this._wallFrame.x1 - this._wallFrame.x0)} height=${Math.abs(this._wallFrame.y1 - this._wallFrame.y0)} />` : nothing}
          <line class="fp3d-wv-floor" x1="-0.3" x2=${L + 0.3} y1=${H} y2=${H} />
          ${rc ? this.renderRuns(rc, X, Y) : nothing}
        </svg>`}
        </div>
        </div>
        <div class="fp3d-wv-foot">
          ${rc && this._techMode && !this._runDraft && !this._runSel && !sel && (this._runMode === "draw" || this._runMode === "feed")
            ? html`<span class="fp3d-muted">${this.t(this._runMode === "feed" ? "tech_feed_place" : "tech_start")}</span> ${this.renderTechIssues(rc)}`
            : rc && (this._runMode || (this._runSel && !sel))
            ? this.renderRunFoot(rc)
            : many && admin
            ? this.renderWallSetFoot(frame, wset, setSpan, span)
            : sel && selF
            ? html`<b>${selF.name || furnitureName(this.hass, selF.type)}</b>
                ${this.fixButton("furniture", sel.id)}
                ${selF.group && admin
                  ? html`<button class="fp3d-btn" title=${this.t("block_select")} @click=${() => {
                      this._wallSingle = false;
                      this.requestUpdate();
                    }}>▣ ${this.t("wv_block_all")}</button>`
                  : nothing}
                ${rc && (POOL_DEVICES as readonly string[]).includes(selF.type)
                  ? html`<button class="fp3d-btn fp3d-primary" @click=${() => this.openCard(rc.pool.id, `dev:${selF.id}`)}>${this.t("card_open")}</button>`
                  : nothing}
                ${selF.locked && admin ? html`<span class="fp3d-muted">${this.t("wall_view_fixed")}</span>` : nothing}
                ${this.len(this.t("wall_view_left"), Math.round(span(sel.s0, sel.s1)[0] * 1000) / 1000, (val) => {
                  const ds = val - span(sel.s0, sel.s1)[0];
                  this.moveOnWall(frame, sel.id, frame.rightward ? ds : -ds, null);
                }, 0.01, 0)}
                ${this.len(this.t("wall_view_depth"), Math.round(Math.max(0, sel.d) * 1000) / 1000, (val) => this.moveFromWall(frame, sel.id, val - sel.d), 0.01, 0)}
                ${admin && !selF.locked && this.alongAxis(frame, selF)
                  ? this.len(this.t("width"), Math.round((sel.s1 - sel.s0) * 1000) / 1000, (val) => {
                      // typed: the left side (as seen) stays, the right one moves
                      const v = Math.max(0.05, val);
                      if (frame.rightward) this.resizeOnWall(frame, sel.id, sel.s0, sel.s0 + v, null, null);
                      else this.resizeOnWall(frame, sel.id, sel.s1 - v, sel.s1, null, null);
                    }, 0.01, 0.05)
                  : nothing}
                ${admin && !selF.locked ? this.len(this.t("height_m"), Math.round((sel.y1 - sel.y0) * 1000) / 1000, (val) => this.resizeOnWall(frame, sel.id, null, null, null, sel.y0 + Math.max(0.03, val)), 0.01, 0.03) : nothing}
                ${lift ? this.len(this.t("mount_height"), Math.round(sel.y0 * 1000) / 1000, (val) => this.moveOnWall(frame, sel.id, 0, val), 0.01, 0) : html`<span class="fp3d-muted">${this.t("wall_view_floor")}</span>`}
                ${admin && !selF.locked
                  ? html`<span class="fp3d-wv-turn">
                      <button class="fp3d-btn" title=${this.t("wall_view_turn")} @click=${() => this.turnOnWall(selF.id, selF.rotation - 45)}>↺ 45°</button>
                      ${this.num(this.t("rotation"), selF.rotation, (val) => this.turnOnWall(selF.id, val), 1)}
                      <button class="fp3d-btn" title=${this.t("wall_view_turn")} @click=${() => this.turnOnWall(selF.id, selF.rotation + 45)}>↻ 45°</button>
                    </span>`
                  : nothing}
                <button class="fp3d-btn" @click=${() => {
                  this._wallView = null;
                  this.selectItem("furniture", sel.id);
                }}>${this.t("wall_view_form")}</button>
                ${admin ? html`<button class="fp3d-btn fp3d-danger" @click=${() => this.deleteOnWall([sel.id])}>${this.t("delete")}</button>` : nothing}`
            : html`<span class="fp3d-muted">${this._wallView3d ? this.t("wall_view_hint_3d") : items.length ? this.t("wall_view_hint") : this.t("wall_view_empty")}</span>`}
          ${admin && !this._techMode ? this.renderMultiToggle() : nothing}
        </div>
      </div>
    </div>`;
  }

  /** The wall view's bottom bar for several pieces: join or break up, the whole block or this part, distance, fix, delete. */
  private renderWallSetFoot(frame: WallFrame, ids: string[], sp: { s0: number; s1: number; y0: number; y1: number } | null, span: (a: number, b: number) => readonly [number, number]) {
    const block = !this._wallMulti.length;
    const fixed = ids.every((id) => this.isFixedItem("furniture", id));
    const some = !fixed && ids.some((id) => this.isFixedItem("furniture", id));
    return html`<b>${block ? `▣ ${this.t("block_title")}` : this.t("multi_title", { n: ids.length })}</b>
      ${some ? html`<span class="fp3d-wv-fixnote">${this.t("block_some_fixed")}</span>` : nothing}
      ${block
        ? html`<div class="fp3d-seg" role="group">
              <button aria-pressed="true">${this.t("wv_block_all")}</button>
              <button aria-pressed="false" @click=${() => (this._wallSingle = true)}>${this.t("wv_block_one")}</button>
            </div>
            <button class="fp3d-btn" @click=${() => {
              const sel = this._wallSel;
              this._wallMulti = ids;
              this.ungroupSelectionOf(ids);
              this._wallSel = sel;
            }}>${this.t("block_break")}</button>`
        : html`<button class="fp3d-btn fp3d-primary" @click=${() => {
            this.groupIds(ids);
            this._wallMulti = [];
          }}>▣ ${this.t("block_make")}</button>`}
      ${sp
        ? this.len(this.t("wall_view_left"), Math.round(span(sp.s0, sp.s1)[0] * 1000) / 1000, (val) => {
            const ds = val - span(sp.s0, sp.s1)[0];
            this.moveSetOnWall(frame, ids, frame.rightward ? ds : -ds, null);
          }, 0.01, 0)
        : nothing}
      <button class="fp3d-btn ${some ? "fp3d-primary" : ""}" @click=${() => {
        const set = new Set(ids);
        // partly fixed: everything loose; else all fixed or all loose
        const lock = !fixed && !some;
        this.change((_, floor) => {
          for (const m of floor.furniture) if (set.has(m.id)) m.locked = lock || null;
        });
      }}>${fixed ? `🔓 ${this.t("unfix")}` : some ? `🔓 ${this.t("unfix_all")}` : `🔒 ${this.t("fix")}`}</button>
      <button class="fp3d-btn fp3d-danger" @click=${() => this.deleteOnWall(ids)}>${this.t("delete")}</button>`;
  }

  /** Deletes the chosen pieces of the wall view (several or a fixed one only after asking). */
  private deleteOnWall(ids: string[]): void {
    if (!ids.length || !this.isAdmin) return;
    if (ids.length > 1) {
      if (!confirm(this.t(ids.some((id) => this.isFixedItem("furniture", id)) ? "block_delete_fixed" : "block_delete", { n: ids.length }))) return;
    } else if (!this.confirmFixedDelete("furniture", ids[0])) return;
    const set = new Set(ids);
    this.change((_, floor) => (floor.furniture = floor.furniture.filter((m) => !set.has(m.id))));
    this._wallSel = null;
    this._wallMulti = [];
    this._wallSingle = false;
  }

  /** Joins these pieces into one block. */
  private groupIds(ids: string[]): void {
    const set = new Set(ids);
    const gid = uid("block");
    this.change((_, floor) => {
      for (const m of floor.furniture) if (set.has(m.id)) m.group = gid;
    });
  }

  private ungroupSelectionOf(ids: string[]): void {
    const set = new Set(ids);
    this.change((_, floor) => {
      for (const m of floor.furniture) if (set.has(m.id)) m.group = null;
    });
  }

  // ------------------------------------------------------------------ pipes on walls (Pool Pro)

  /**
   * A device from the wall view's side bar straight onto the wall shown: at the first free place from the left
   * (not in front of a door), its back to the wall, chosen so it can be dragged where it belongs.
   */
  private addOnWall(type: string, frame: WallFrame, room: Room): void {
    const floor = this.floor;
    if (!floor || !this.isAdmin) return;
    this.rememberWallType(type);
    const gap = this._wallGap;
    if (gap) return this.addIntoGap(type, frame, room, gap);
    const [w, d, h] = furnitureSize(type);
    const taken = [
      ...furnitureOnWall(frame, floor, room).map((i) => [i.s0, i.s1]),
      ...openingsOnWall(frame, floor)
        .filter((o) => o.y0 < 0.05)
        .map((o) => [o.s0, o.s1]),
    ];
    let s0 = Math.max(0, frame.length / 2 - w / 2);
    for (let t = 0.1; t + w <= frame.length - 0.05; t += 0.05)
      if (!taken.some(([a, b]) => t < b + 0.05 && t + w > a - 0.05)) {
        s0 = t;
        break;
      }
    const face = sharedEdge(floor, room.id, frame.a, frame.b) ? this._doc.settings.wall_interior / 2 : 0;
    const [x, z] = fromWall(frame, s0 + w / 2, face + d / 2 + 0.01);
    const rotation = Math.round((((Math.atan2(-frame.n[0], frame.n[1]) * 180) / Math.PI) % 360 + 360) % 360);
    const item: Furniture = { id: uid("furniture"), type, x: round(x), z: round(z), rotation, w, d, h, variant: null };
    this.change((_, f) => f.furniture.push(item));
    this._runSel = null;
    this._runMode = null;
    this._wallSel = item.id;
  }

  /** A piece into the tapped stretch of wall: at its left end, as wide as the gap when the piece is a cabinet that can be (and is too wide). */
  private addIntoGap(type: string, frame: WallFrame, room: Room, gap: { s0: number; s1: number; low: boolean }): void {
    const floor = this.floor!;
    const gw = gap.s1 - gap.s0;
    let [w, d, h] = furnitureSize(type);
    if (WALL_FIT.has(type) && (w > gw + 0.005 || gw - w < 0.1)) w = Math.round(gw * 1000) / 1000;
    const face = sharedEdge(floor, room.id, frame.a, frame.b) ? this._doc.settings.wall_interior / 2 : 0;
    const sMid = gap.s0 + Math.min(w, gw) / 2;
    const [x, z] = fromWall(frame, sMid, face + d / 2 + 0.01);
    const rotation = Math.round((((Math.atan2(-frame.n[0], frame.n[1]) * 180) / Math.PI) % 360 + 360) % 360);
    const item: Furniture = { id: uid("furniture"), type, x: round(x), z: round(z), rotation, w, d, h, variant: null };
    this.change((_, f) => f.furniture.push(item));
    this._wallGap = null;
    this._wallSel = item.id;
    this._wallMulti = [];
  }

  private rememberWallType(type: string): void {
    try {
      const list = JSON.parse(localStorage.getItem("neonplan3d.wallRecent") ?? "[]") as string[];
      localStorage.setItem("neonplan3d.wallRecent", JSON.stringify([type, ...list.filter((t) => t !== type)].slice(0, 6)));
    } catch {
      // no storage
    }
  }

  private wallRecent(): string[] {
    try {
      const list = JSON.parse(localStorage.getItem("neonplan3d.wallRecent") ?? "[]");
      return Array.isArray(list) ? list.filter((t): t is string => typeof t === "string" && (FURNITURE_TYPES.includes(t as never) || !!packItem(t))) : [];
    } catch {
      return [];
    }
  }

  /**
   * The wall view's side bar: a few category symbols, a search and the recently used – no long list. A tapped gap
   * in the wall narrows it to what fits there (best fit first); a cabinet too wide for the gap is fitted to it.
   */
  private renderWallFurniture(frame: WallFrame, room: Room) {
    const lang = this.hass?.language ?? "en";
    const gap = this._wallGap;
    const gw = gap ? gap.s1 - gap.s0 : 0;
    const q = fold(this._wallQuery.trim());
    const cat = this._wallCat;
    const packItems = (this.packs ?? []).flatMap((p) => p.items.filter((it) => !it.light && !it.vehicle && !it.hole && it.mount !== "ceiling").map((it) => ({ type: packType(p.id, it.id), label: packItemName(it, lang), search: `${Object.values(it.name).join(" ")} ${p.name}`, wall: it.mount === "wall" })));
    const label = (t: string) => this.t(`furn_${t}` as I18nKey);
    let pool: { type: string; label: string; search: string; wall?: boolean }[] = [];
    if (cat === "pack") pool = packItems;
    else if (cat === "energy") pool = (["meter", "inverter", "home_battery", "wallbox"] as const).map((t) => ({ type: t, label: label(t), search: "" }));
    else if (cat) pool = (WALL_CATS[cat] ?? []).map((t) => ({ type: t, label: label(t), search: translate(EN_HASS, `furn_${t}` as I18nKey) }));
    else if (q || gap) pool = [...Object.values(WALL_CATS).flat().filter((t, i, a) => a.indexOf(t) === i).map((t) => ({ type: t, label: label(t), search: translate(EN_HASS, `furn_${t}` as I18nKey) })), ...packItems];
    // nothing chosen yet and nothing used before: the base cabinets as a start, so the bar is never empty
    else if (!this.wallRecent().length) pool = WALL_CATS.base.map((t) => ({ type: t, label: label(t), search: "" }));
    const words = q.split(/\s+/).filter(Boolean);
    let hits = words.length ? pool.filter((it) => words.every((w) => fold(`${it.label} ${it.search} ${it.type.replace(/[_:.]/g, " ")}`).includes(w))) : pool;
    // a gap: standing or hanging pieces that fit (or can be fitted), the closest width first
    if (gap) {
      const hanging = (t: string, wall?: boolean) => wall || HANGING.has(t);
      hits = hits
        .filter((it) => hanging(it.type, it.wall) === !gap.low)
        .filter((it) => furnitureSize(it.type)[0] <= gw + 0.01 || (WALL_FIT.has(it.type) && gw >= (WALL_FIT_MIN[it.type] ?? 0.2)))
        // what fills the gap best first: cabinets built to measure fill it completely, then the closest widths;
        // the built-in pieces before pack items of the same fill
        .sort((a, b) => {
          const fill = (t: string) => (WALL_FIT.has(t) ? 1 : Math.min(1, furnitureSize(t)[0] / gw));
          return fill(b.type) - fill(a.type) || Number(a.type.startsWith("pack:")) - Number(b.type.startsWith("pack:"));
        });
    }
    const recent = !cat && !q && !gap ? this.wallRecent() : [];
    const cats: [string, string][] = [
      ["base", "▭"],
      ["hang", "▔"],
      ["tall", "▯"],
      ["living", "🛋"],
      ["light", "💡"],
      ["switches", "🔌"],
      ...((this.packs ?? []).some((p) => p.items.length) ? ([["pack", "🧩"]] as [string, string][]) : []),
      ...(hasFeature("energy_pro") ? ([["energy", "⚡"]] as [string, string][]) : []),
    ];
    const shown = [...recent, ...hits.slice(0, 40).map((h) => h.type)];
    void this.askKitPics(shown);
    void this._wallPicTick;
    const item = (t: string, name: string) => {
      const w = furnitureSize(t)[0];
      const fitted = gap && WALL_FIT.has(t) && (w > gw + 0.005 || gw - w < 0.1);
      const pic = this.kitPics.get(t);
      return html`<button class="fp3d-wv-tile" title=${name} @click=${() => this.addOnWall(t, frame, room)}>
        <span class="fp3d-wv-tile-pic">${pic ? html`<img src=${pic} alt="" />` : html`<i></i>`}</span>
        <span class="fp3d-wv-tile-name">${name}</span>
        <small class=${fitted ? "fp3d-wv-fit" : ""}>${fitted ? `↔ ${this.m(gw, 2)}` : this.m(w, 2)}</small>
      </button>`;
    };
    return html`<aside class="fp3d-wv-kit">
      <h4>${this.t("wv_kit_title")}</h4>
      <div class="fp3d-wv-cats">
        ${cats.map(([k, icon]) => html`<button class="fp3d-wv-cat ${cat === k ? "fp3d-on" : ""}" title=${this.t(`wv_cat_${k}` as I18nKey)} @click=${() => (this._wallCat = cat === k ? null : k)}><span>${icon}</span>${this.t(`wv_cat_${k}` as I18nKey)}</button>`)}
      </div>
      <input class="fp3d-search" type="search" placeholder=${this.t("furniture_search")} .value=${this._wallQuery} @input=${(e: Event) => (this._wallQuery = (e.target as HTMLInputElement).value)} />
      ${gap
        ? html`<p class="fp3d-sub fp3d-wv-gapnote">${this.t("wv_gap", { w: this.m(gw, 2) })} <button class="fp3d-link" @click=${() => (this._wallGap = null)}>✕</button></p>`
        : !cat && !q
          ? html`<p class="fp3d-sub">${this.t("wv_gap_hint")}</p>`
          : nothing}
      ${cat ? html`<h4>${this.t(`wv_cat_${cat}` as I18nKey)}</h4>` : nothing}
      ${recent.length ? html`<h4>${this.t("wv_recent")}</h4><div class="fp3d-wv-tiles">${recent.map((t) => item(t, packItem(t) ? packItemName(packItem(t)!, lang) : label(t)))}</div>` : nothing}
      ${(cat || q || gap) && !hits.length ? html`<p class="fp3d-sub">${this.t(gap ? "wv_none_fits" : "furniture_search_none")}</p>` : nothing}
      <div class="fp3d-wv-tiles">${hits.slice(0, 40).map((it) => item(it.type, it.label))}</div>
    </aside>`;
  }

  /** Draws the side bar's pictures with the 3D bundle (once per type). */
  private async askKitPics(types: string[]): Promise<void> {
    const missing = types.filter((t) => !this.kitPicsAsked.has(t));
    if (!missing.length) return;
    for (const t of missing) this.kitPicsAsked.add(t);
    try {
      const mod = await load3d();
      for (const t of missing) {
        const [w, d, h] = furnitureSize(t);
        this.kitPics.set(t, mod.furniturePreview({ type: t, w, d, h, variant: null, lamp: LAMP_MODEL[t] ?? null }, 120, this.packs ?? []));
      }
    } catch {
      // no 3D: names only
    }
    this._wallPicTick++;
  }

  /** The wall view's side bar: pool devices, ball valves and sight glasses (Pool Pro), energy devices (Energie Pro). */
  private renderWallKit(frame: WallFrame, room: Room, rc: RunCtx | null) {
    const pool = !!rc;
    const energy = hasFeature("energy_pro");
    if (!pool) return this.isAdmin ? this.renderWallFurniture(frame, room) : nothing;
    if (this._techMode && rc) return this.renderTechKit(frame, room, rc);
    if (!this.isAdmin || (!pool && !energy)) return nothing;
    const add = (t: string) => html`<button class="fp3d-btn" @click=${() => this.addOnWall(t, frame, room)}>+ ${this.t(`furn_${t}` as I18nKey)}</button>`;
    const fit = (mode: "valve" | "sight", label: I18nKey) =>
      html`<button class="fp3d-btn ${this._runMode === mode ? "fp3d-primary" : ""}" title=${this.t("wall_run_fit")} @click=${() => this.kitFitting(rc, mode)}>+ ${this.t(label)}</button>`;
    return html`<aside class="fp3d-wv-kit">
      ${pool
        ? html`<h4>${this.t("wall_kit_pool")}</h4>
            ${(["pool_pump", "pool_filter", "pool_heat_pump", "pool_dosing"] as const).map(add)} ${fit("valve", "wall_run_valve")} ${fit("sight", "wall_run_sight")}
            ${(["hole_wall", "hole_floor", "tee", "y"] as const).map(
              (m) => html`<button class="fp3d-btn ${this._runMode === m ? "fp3d-primary" : ""}" title=${this.t("wall_run_place")} @click=${() => {
                this._runDraft = null;
                this._runMode = this._runMode === m ? null : m;
              }}>+ ${this.t(`wall_kit_${m}` as I18nKey)}</button>`,
            )}`
        : nothing}
      ${energy ? html`<h4>${this.t("wall_kit_energy")}</h4>${(["meter", "inverter", "home_battery", "wallbox"] as const).map(add)}` : nothing}
    </aside>`;
  }

  /** The pool whose pipes the wall view shows: the chosen one, else the first on this floor. */
  private get runPool(): OutdoorArea | undefined {
    return this.poolArea ?? this.floor?.outdoor.find((o) => o.type === "pool" && o.points.length >= 3);
  }

  /** The pipe tools of the wall view: "Technik zeichnen" (Pool Pro) switched on, or the lab switch. */
  private get canLayRuns(): boolean {
    return (labOn() || this._techMode) && !!this.runPool;
  }

  private runFrame(key: string): WallFrame | null {
    const [roomId, edge] = key.split("|");
    const room = this.floor?.rooms.find((r) => r.id === roomId);
    return room && Number(edge) < room.points.length ? roomEdgeFrame(room, Number(edge)) : null;
  }

  /** The building with the pipe being laid in it (the wall view's 3D shows it while it grows). */
  private docWithDraft(): Building {
    const d = this._runDraft;
    if (!d || !this._wallView) return this._doc;
    const pts = [...(d.from || !d.anchor ? [] : [d.anchor]), ...d.pts];
    if (!pts.length) return this._doc;
    const doc = structuredClone(this._doc);
    const fl = doc.floors.find((f) => f.outdoor.some((o) => o.id === d.pool));
    const area = fl?.outdoor.find((o) => o.id === d.pool);
    if (!fl || !area) return this._doc;
    area.pool ??= {};
    const draft: PoolPipe = { id: "__draft", from: d.from, to: "", floor_id: fl.id, points: pts.map((q): Vec2 => [q[0], q[2]]), heights: pts.map((q) => q[1]) };
    area.pool.pipes = [...(area.pool.pipes ?? []), draft];
    return doc;
  }

  /** Where the pipe being laid ends so far: its last point, or the node, T-piece or loose end it starts from. */
  private runLast(d: RunDraft, c: RunCtx): P3 | null {
    if (d.pts.length) return d.pts[d.pts.length - 1];
    if (d.fromT) return d.fromT;
    const nodeAt = poolNodeAt(this._doc, c.floor, c.pool);
    if (d.extend) {
      const q = c.pool.pool?.pipes?.find((x) => x.id === d.extend!.pipe);
      const path = q ? pipePath(q, nodeAt) : [];
      return (d.extend.end === "to" ? path[path.length - 1] : path[0]) ?? null;
    }
    const n = nodeAt(d.from);
    return n ? [n.x, n.y, n.z] : null;
  }

  /** What lies under a point of the wall: a loose pipe end, a pool device or T-piece, a pipe (only pipes: placing a fitting). */
  private runPick(c: RunCtx, s: number, y: number, pipesOnly = false): { end?: { pipe: string; end: "from" | "to" }; node?: string; pipe?: { id: string; p: P3 } } {
    if (!pipesOnly)
      for (const r of c.runs) for (const e of r.ends) if (Math.hypot(e.s - s, e.y - y) < 0.12) return { end: { pipe: r.id, end: e.end } };
    const nodeAt = poolNodeAt(this._doc, c.floor, c.pool);
    let best: { node: string; d: number } | null = null;
    const nodes = [
      ...c.floor.furniture
        .filter((f) => (POOL_DEVICES as readonly string[]).includes(f.type))
        .flatMap((f) => (devicePorts(f.type).length ? devicePorts(f.type).map((q) => `dev:${f.id}:${q}`) : [`dev:${f.id}`])),
      ...(c.pool.pool?.joints ?? []).map((j) => (j.kind === "wall" || j.kind === "floor" ? `joint:${j.id}:inside` : `joint:${j.id}`)),
    ];
    for (const node of pipesOnly ? [] : nodes) {
      const q = nodeAt(node);
      if (!q) continue;
      const w = toWall(c.frame, [q.x, q.z]);
      if (w.d < -0.3 || w.d > 1.6) continue;
      const d = Math.hypot(w.s - s, q.y - y);
      if (d < 0.12 && (!best || d < best.d)) best = { node, d };
    }
    if (best) return { node: best.node };
    // drawing the technical room: a press on a device's body ends (or starts) at the device as a whole
    if (this._techMode && !pipesOnly) {
      // every pool device up to 1.6 m in front of the wall (a pump stands out into the room), seen from the front
      const dev = c.floor.furniture.find((f) => {
        if (!(POOL_DEVICES as readonly string[]).includes(f.type) || f.type === "pool_valve") return false;
        const w = furnitureFootprint(f).map((q) => toWall(c.frame, q));
        if (Math.min(...w.map((q) => q.d)) > 1.6 || Math.max(...w.map((q) => q.d)) < -0.3) return false;
        const y0 = mountBase(c.floor, f);
        return Math.min(...w.map((q) => q.s)) - 0.03 <= s && s <= Math.max(...w.map((q) => q.s)) + 0.03 && y0 - 0.03 <= y && y <= y0 + f.h + 0.03;
      });
      if (dev) return { node: `dev:${dev.id}` };
    }
    for (const r of c.runs)
      for (const pc of r.pieces) {
        const [vs, vy] = [pc.s1 - pc.s0, pc.y1 - pc.y0];
        const l2 = vs * vs + vy * vy;
        const t = l2 > 0 ? Math.max(0, Math.min(1, ((s - pc.s0) * vs + (y - pc.y0) * vy) / l2)) : 0;
        const [qs, qy] = [pc.s0 + vs * t, pc.y0 + vy * t];
        if (Math.hypot(qs - s, qy - y) < (pipesOnly ? 0.24 : 0.07)) return { pipe: { id: r.id, p: onWall(c.frame, qs, qy, pc.d0 + (pc.d1 - pc.d0) * t) } };
      }
    return {};
  }

  /**
   * The eraser: a ball valve or sight glass under the pointer goes; else the pipe; else a hole, T or Y with every
   * pipe at it (a hole's way outside too, so its pool line can be brought in anew).
   */
  private eraseAt(c: RunCtx, s: number, y: number): void {
    const near = (a: number, b: number, r: number) => Math.hypot(a - s, b - y) < r;
    for (const r of c.runs)
      for (const f of r.fittings)
        if (near(f.s, f.y, 0.1 * Math.max(1, this.wvScale))) {
          this.changePool(c.pool.id, (l) => {
            const q = l.pipes?.find((x) => x.id === r.id);
            if (q) q.fittings = (q.fittings ?? []).filter((x) => x.id !== f.id);
          });
          return;
        }
    const nodeAt = poolNodeAt(this._doc, c.floor, c.pool);
    const joint = (c.pool.pool?.joints ?? []).find((j) => {
      const node = j.kind === "wall" || j.kind === "floor" ? `joint:${j.id}:inside` : `joint:${j.id}`;
      const q = nodeAt(node);
      if (!q) return false;
      const w = toWall(c.frame, [q.x, q.z]);
      return w.d > -0.3 && w.d < 1.6 && near(w.s, q.y, 0.1);
    });
    if (joint) {
      const part = `joint:${joint.id}`;
      this.changePool(c.pool.id, (l) => {
        l.joints = (l.joints ?? []).filter((j) => j.id !== joint.id);
        l.pipes = (l.pipes ?? []).filter((x) => nodePart(x.from) !== part && nodePart(x.to) !== part);
      });
      this._runSel = null;
      return;
    }
    const hit = this.runPick(c, s, y, true);
    if (hit.pipe) {
      const id = hit.pipe.id;
      this.changePool(c.pool.id, (l) => (l.pipes = (l.pipes ?? []).filter((x) => x.id !== id)));
      this._runSel = null;
    }
  }

  /** A press on the wall while laying a pipe or placing a fitting. */
  private runDown(e: PointerEvent, c: RunCtx): void {
    if (!this._runMode || !this.isAdmin) return;
    e.stopPropagation();
    this._techAsk = null;
    // the pen of "Technik zeichnen": the press only marks where; the stroke begins with the first movement, and a
    // press without one is a tap (it chooses the pipe under it, or nothing)
    if (this._techMode && this._runMode === "draw") return;
    const { s, y } = c.pt(e);
    this.runAt(c, s, y, e.altKey, e.detail, null);
  }

  /**
   * A press in the 3D wall view while laying a pipe: the left button lays it (on a pool device: ends there; else
   * a point on the wall where the pointer's ray meets it), the other buttons and the wheel still look around.
   */
  private runDown3d(e: PointerEvent): void {
    const c = this.runCtx3d;
    if (!this._runMode || !c || e.button !== 0 || !this.isAdmin || !this._wallView3d) return;
    type V = {
      renderer: { domElement: HTMLElement };
      floorMap: Map<string, { y: number }>;
      pointerRay(x: number, y: number): { o: number[]; d: number[] };
      furnitureIdAt(x: number, y: number): string | null;
    };
    const v = (this.wall3dEl as unknown as { viewer?: V } | null)?.viewer;
    if (!v) return;
    e.stopPropagation();
    e.preventDefault();
    const r = v.renderer.domElement.getBoundingClientRect();
    const [x, y] = [e.clientX - r.left, e.clientY - r.top];
    const id = v.furnitureIdAt(x, y);
    const dev = id ? c.floor.furniture.find((f) => f.id === id && (POOL_DEVICES as readonly string[]).includes(f.type)) : undefined;
    const ray = v.pointerRay(x, y);
    // the plane the pipes run in, just in front of the wall
    const p0 = fromWall(c.frame, 0, c.gap);
    const n = c.frame.n;
    const den = ray.d[0] * n[0] + ray.d[2] * n[1];
    if (Math.abs(den) < 1e-6) return;
    const t = ((p0[0] - ray.o[0]) * n[0] + (p0[1] - ray.o[2]) * n[1]) / den;
    if (t <= 0 && !dev) return;
    const hit = [ray.o[0] + ray.d[0] * t, ray.o[1] + ray.d[1] * t, ray.o[2] + ray.d[2] * t];
    const base = c.floor.elevation + (v.floorMap.get(c.floor.id)?.y ?? 0);
    const nodeAt = poolNodeAt(this._doc, c.floor, c.pool);
    const devNode = () => {
      const ports = devicePorts(dev!.type);
      if (!ports.length) return `dev:${dev!.id}`;
      // the connection nearest where the ray passes the device
      const dist = (n: string) => {
        const q = nodeAt(n)!;
        const v = [q.x - ray.o[0], q.y + base - ray.o[1], q.z - ray.o[2]];
        const tt = v[0] * ray.d[0] + v[1] * ray.d[1] + v[2] * ray.d[2];
        return Math.hypot(v[0] - ray.d[0] * tt, v[1] - ray.d[1] * tt, v[2] - ray.d[2] * tt);
      };
      return ports.map((q) => `dev:${dev!.id}:${q}`).sort((m, n) => dist(m) - dist(n))[0];
    };
    this.runAt(c, toWall(c.frame, [hit[0], hit[2]]).s, hit[1] - base, e.altKey, e.detail, dev && this._runMode === "draw" ? devNode() : null);
  }

  /** A point of the wall pressed while laying a pipe or placing a fitting (`node`: a device pressed in 3D). */
  private runAt(c: RunCtx, s: number, y: number, alt: boolean, detail: number, node: string | null): void {
    const mode = this._runMode;
    if (!mode) return;
    if (mode === "tee" && this._techMode) {
      // drawing the technical room: a T-piece goes into the pipe tapped (the pipe is cut there)
      const hit = this.runPick(c, s, y, true);
      if (hit.pipe) this.teeOnPipe(c, hit.pipe.id, hit.pipe.p);
      return;
    }
    if (mode === "hole_wall" || mode === "hole_floor" || mode === "tee" || mode === "y") return this.placeJoint(c, mode, s, y);
    if (mode === "feed") return this.placeFeed(c, s, y);
    if (mode === "erase") return this.eraseAt(c, s, y);
    const hit = node ? { node } : this.runPick(c, s, y, mode !== "draw");
    if (mode !== "draw") {
      // a miss while placing a fitting keeps the tool (the hint says to tap the pipe)
      if (!hit.pipe && this._techMode) return;
      if (hit.pipe) this.addFitting(c, hit.pipe.id, hit.pipe.p, mode);
      // drawing the technical room: back to the pen
      this._runMode = this._techMode ? "draw" : null;
      if (this._techMode) this._runSel = null;
      return;
    }
    let d = this._runDraft;
    if (d && this._techMode && !this.techStroke) {
      // the pen: every press begins a stroke of its own – a draft still hanging is laid when it is a line, dropped when a bare point
      if (d.pts.length >= 2 || ((d.extend || d.fromT || d.from) && d.pts.length)) this.finishRun("", null);
      this._runDraft = null;
      d = null;
    }
    if (!d) {
      const start: RunDraft = { pool: c.pool.id, from: "", fromT: null, extend: null, pts: [], anchor: null, wall: c.key, d: c.gap };
      let draft: RunDraft;
      if (hit.end) draft = { ...start, extend: hit.end };
      else if (hit.node) draft = { ...start, from: hit.node };
      else if (hit.pipe) draft = { ...start, fromT: hit.pipe.p };
      else draft = { ...start, pts: [onWall(c.frame, Math.round(s * 20) / 20, Math.round(y * 20) / 20, c.gap)] };
      this._runDraft = { ...draft, anchor: this.runLast({ ...draft, pts: [] }, c) };
      return;
    }
    // a double click finishes (its first click set the point already)
    if (detail >= 2) return void this.finishRun("", null);
    if (hit.node && hit.node !== d.from) return void this.finishRun(hit.node, null);
    if (hit.pipe) return void this.finishRun("", hit.pipe.p);
    this._runDraft = { ...d, pts: [...d.pts, ...this.runStep(d, c, s, y, alt)], wall: c.key, d: c.gap };
  }

  /**
   * The next point of a pipe on a 5 cm grid, level with or straight above the last one (Alt: free); on another
   * wall than the last point the pipe first goes round the corner.
   */
  private runStep(d: RunDraft, c: RunCtx, s: number, y: number, free: boolean): P3[] {
    let ss = Math.round(s * 20) / 20;
    let yy = Math.round(y * 20) / 20;
    const out: P3[] = [];
    let last = this.runLast(d, c);
    if (last && d.wall !== c.key) {
      const prev = this.runFrame(d.wall);
      const corner = prev && cornerPoint(prev, d.d, c.frame, c.gap);
      if (corner) {
        last = [round(corner[0]), last[1], round(corner[1])];
        out.push(last);
      }
    }
    if (last && !free) {
      const w = toWall(c.frame, [last[0], last[2]]);
      if (w.d > -0.35 && w.d < 0.6) {
        if (Math.abs(ss - w.s) < Math.abs(yy - last[1])) ss = w.s;
        else yy = last[1];
      }
    }
    out.push(onWall(c.frame, ss, yy, c.gap));
    return out.map((q) => [round(q[0]), round(q[1]), round(q[2])] as P3);
  }

  /**
   * Ends the pipe being laid: at a node, at a T-piece on another pipe (`toT`), or loose; `extra` points come last
   * (down into the floor, through the wall), `height` is where points added later in the plan run.
   */
  private finishRun(to: string, toT: P3 | null, extra: P3[] = [], height?: number): string | null {
    const d = this._runDraft;
    const floor = this.floor;
    const rules = this.pipeRules;
    this._runDraft = null;
    if (!d || !floor || !rules) return null;
    const pts = [...d.pts, ...extra];
    // drawing the technical room: into its end the line turns once – level first, then straight up or down into it –
    // instead of a slanted last piece
    const frame = this._techMode ? this.runFrame(d.wall) : null;
    const area0 = this._techMode ? this.floor?.outdoor.find((o) => o.id === d.pool) : undefined;
    if (frame && area0 && !extra.length && (to || toT)) {
      const start = pts.length ? pts[pts.length - 1] : (() => {
        const n = d.from ? poolNodeAt(this._doc, floor, area0)(d.from) : null;
        return n ? ([n.x, n.y, n.z] as P3) : d.fromT;
      })();
      const n = toT ? { x: toT[0], y: toT[1], z: toT[2] } : poolNodeAt(this._doc, floor, area0)(to);
      if (start && n) {
        const a = toWall(frame, [start[0], start[2]]);
        const b = toWall(frame, [n.x, n.z]);
        if (Math.abs(a.s - b.s) > 0.03 && Math.abs(start[1] - n.y) > 0.03) pts.push(onWall(frame, b.s, start[1], d.d));
      }
    }
    if (!pts.length && !toT && (!to || to === d.from) && !d.fromT) return null;
    let chosen: string | null = null;
    this.changePool(d.pool, (l, area) => {
      const joints: PoolJoint[] = (l.joints ??= []);
      const pipes: PoolPipe[] = (l.pipes ??= []);
      const base = poolNodeAt(this._doc, floor, area);
      const nodeAt = (n: string) => {
        const j = n.startsWith("joint:") ? joints.find((x) => `joint:${x.id}` === n) : undefined;
        return j ? { x: j.x, z: j.z, y: j.y } : base(n);
      };
      // a T-piece: the pipe nearest the point is split there
      const tee = (q: P3): string => {
        let best: { pipe: PoolPipe; d: number } | null = null;
        for (const pipe of pipes) {
          const h = nearestOnPath(pipePath(pipe, nodeAt), q);
          if (h && h.d < 0.12 && (!best || h.d < best.d)) best = { pipe, d: h.d };
        }
        const cut = best && splitPipe(best.pipe, nodeAt, q, uid("joint"), uid("pipe"));
        if (!best || !cut) return "";
        joints.push(cut.joint);
        pipes.splice(pipes.indexOf(best.pipe), 1, cut.first, cut.second);
        return `joint:${cut.joint.id}:out2`;
      };
      // a pipe at a T- or Y-piece takes its next free connection, at a hole the inside
      const free = (n: string, extra: string[] = []) => {
        const { kind, id, port } = splitNode(n);
        const j = kind === "joint" && !port ? joints.find((x) => x.id === id) : undefined;
        if (!j || !j.kind) return n;
        if (j.kind === "wall" || j.kind === "floor") return `joint:${id}:inside`;
        const taken = new Set([...pipes.flatMap((p) => [p.from, p.to]), ...extra]);
        const q = jointPorts(j.kind).find((x) => !taken.has(`joint:${id}:${x}`));
        return q ? `joint:${id}:${q}` : n;
      };
      let from = d.fromT ? tee(d.fromT) : free(d.from);
      let end = toT ? tee(toT) : free(to, [from]);
      // a device as a whole: the connection the line's other end asks for (water in: the suction side …)
      const devs = floor.furniture.filter((f) => (POOL_DEVICES as readonly string[]).includes(f.type)).map((f) => ({ id: f.id, type: f.type }));
      const taken = (dev: string) => pipes.flatMap((p) => [p.from, p.to]).filter((n) => nodePart(n) === dev).map((n) => splitNode(n).port).filter((q): q is PortName => !!q);
      const toWasteNode = (n: string) => {
        const { kind, id } = splitNode(n);
        if (kind === "port") return area.pool?.ports?.find((q) => q.id === id)?.kind === "waste";
        return kind === "joint" && /kanal|waste|abwasser|backwash/i.test(joints.find((j) => j.id === id)?.name ?? "");
      };
      const resolve = (n: string, other: string) => {
        const { kind, id, port } = splitNode(n);
        if (kind !== "dev" || port) return n;
        const type = floor.furniture.find((f) => f.id === id)?.type ?? "";
        const q = rules.autoPort(type, other ? rules.nodeFlow(other, area, devs) : null, toWasteNode(other), taken(`dev:${id}`));
        return q ? `dev:${id}:${q}` : n;
      };
      from = resolve(from, end);
      end = resolve(end, from);
      const xz = pts.map((q): Vec2 => [round(q[0]), round(q[2])]);
      const hs = pts.map((q) => round(q[1]));
      const ext = d.extend;
      const q = ext && pipes.find((x) => x.id === ext.pipe);
      if (ext && q) {
        Object.assign(q, laidPipe(q, nodeAt));
        if (ext.end === "to") {
          q.points = [...q.points, ...xz];
          q.heights = [...(q.heights ?? []), ...hs];
          q.to = end;
        } else {
          // drawn outward from the loose start: the pipe now starts at the far end
          q.points = [...xz.reverse(), ...q.points];
          q.heights = [...hs.reverse(), ...(q.heights ?? [])];
          q.from = end;
        }
        if (height !== undefined) q.height = height;
        chosen = q.id;
        return;
      }
      let pipe: PoolPipe = { id: uid("pipe"), from, to: end, floor_id: floor.id, points: xz, heights: hs, height: height ?? hs[hs.length - 1] ?? null };
      // the water runs from where it comes out to where it goes in, whichever way the line was drawn
      pipe = rules.orientPipe(pipe, from ? rules.nodeFlow(from, area, devs) : null, end ? rules.nodeFlow(end, area, devs) : null);
      pipes.push(pipe);
      chosen = pipe.id;
    });
    if (chosen && !this._techMode) this._runSel = { pipe: chosen, pt: null };
    // drawing the technical room: the pen stays in the hand
    this._runMode = this._techMode ? "draw" : null;
    return chosen;
  }

  /** A T-piece into a pipe where it was tapped: the pipe is cut there, both halves end at the new piece. */
  private teeOnPipe(c: RunCtx, pipeId: string, p: P3): void {
    const nodeAt = poolNodeAt(this._doc, c.floor, c.pool);
    this.changePool(c.pool.id, (l) => {
      const pipes = [...(l.pipes ?? [])];
      const i = pipes.findIndex((x) => x.id === pipeId);
      if (i < 0) return;
      const cut = splitPipe(pipes[i], nodeAt, p, uid("joint"), uid("pipe"));
      if (!cut) return;
      l.joints = [...(l.joints ?? []), cut.joint];
      pipes.splice(i, 1, cut.first, cut.second);
      l.pipes = pipes;
    });
    this._runMode = "draw";
  }

  /**
   * A line from the pool brought into the room where the wall was tapped: low down it comes out of the floor, higher
   * up through the wall. The way outside – under the ground to the skimmer, the drain, the inlets (with a T-piece for
   * several) or the waste drain – is laid by itself; inside it waits for the pipes drawn to it.
   */
  private placeFeed(c: RunCtx, s: number, y: number): void {
    const kind = this._feedKind;
    this._feedKind = null;
    this._runMode = "draw";
    if (kind) this.feedAt(c, kind, s, y);
  }

  /** The hole of a pool line at a point of the wall and its way outside to the pool; returns the hole (null: no floor). */
  private feedAt(c: RunCtx, kind: string, s: number, y: number): PoolJoint | null {
    const floor = this.floor;
    if (!floor) return null;
    const ss = Math.round(s * 20) / 20;
    const low = y < 0.25;
    const face = c.gap - RUN_GAP;
    const thick = sharedEdge(c.floor, c.room.id, c.frame.a, c.frame.b) ? this._doc.settings.wall_interior : this._doc.settings.wall_exterior;
    const name = this.t(`feed_${kind}` as I18nKey);
    const [x, z] = onWallXZ(c.frame, ss, low ? c.gap : face);
    const hole: PoolJoint = low
      ? { id: uid("joint"), kind: "floor", x, z, y: 0, name }
      : { id: uid("joint"), kind: "wall", x, z, y: Math.round(y * 20) / 20, nx: round(c.frame.n[0]), nz: round(c.frame.n[1]), depth: round(thick), name };
    this.changePool(c.pool.id, (l, area) => {
      l.joints = [...(l.joints ?? []), hole];
      // no waste drain yet: one outside, a metre beyond the hole
      let ports = (l.ports ?? []).filter((q) => q.kind === kind);
      if (kind === "waste" && !ports.length) {
        const out = jointPortAt(hole, "outside");
        const port = { id: uid("port"), kind: "waste" as const, x: round(out.x - c.frame.n[0] * 1), z: round(out.z - c.frame.n[1] * 1) };
        l.ports = [...(l.ports ?? []), port];
        ports = [port];
      }
      if (!ports.length) return;
      const nodeAt = poolNodeAt(this._doc, floor, area);
      const lookup = (n: string) => {
        const { kind: k, id, port } = splitNode(n);
        const j = k === "joint" ? (l.joints ?? []).find((q) => q.id === id) : undefined;
        if (j) return jointPortAt(j, port);
        const pp = k === "port" ? (l.ports ?? []).find((q) => q.id === id) : undefined;
        return pp ? (nodeAt(n) ?? { x: pp.x, y: 0.02, z: pp.z }) : nodeAt(n);
      };
      const flow = (n: string) => {
        const { kind: k, id } = splitNode(n);
        if (k === "port") {
          const pp = (l.ports ?? []).find((q) => q.id === id);
          return pp ? poolPortFlow(pp.kind) : null;
        }
        return null;
      };
      const plan = planConnection({ from: `joint:${hole.id}:outside`, vias: [], to: ports.map((q) => `port:${q.id}`), floorId: floor.id }, lookup, l.joints ?? [], flow, (k) => uid(k));
      l.joints = [...(l.joints ?? []), ...plan.joints];
      l.pipes = [...(l.pipes ?? []), ...plan.pipes];
    });
    return hole;
  }

  /**
   * The pen: a stroke let go becomes a pipe with right angles – the wiggles go, each piece runs level or upright,
   * corners stay where the hand turned. Its end joins what lies there (a device's connection, a pipe as a T-piece);
   * on nothing it asks where the line goes (the floor: down and out to the pool; higher: through the wall).
   */
  private endStroke(c: RunCtx, stroke: { s: number; y: number }[], q: { s: number; y: number }): void {
    const d = this._runDraft;
    if (!d) return;
    const start = this.runLast(d, c);
    const w0 = start ? toWall(c.frame, [start[0], start[2]]) : null;
    const first = w0 && w0.d > -0.35 && w0.d < 0.6 ? { s: w0.s, y: start![1] } : stroke[0];
    const corners = snapStroke([first, ...simplifyStroke(stroke, 0.08), q]);
    // the corners between start and end (the end itself is set by what it joins)
    const inner = corners.slice(1, -1).map((p): P3 => {
      const r = onWall(c.frame, p.s, p.y, c.gap);
      return [round(r[0]), round(r[1]), round(r[2])];
    });
    const hit = this.runPick(c, q.s, q.y);
    this._techAsk = null;
    if (hit.node && hit.node !== d.from) {
      this.finishRun(hit.node, null, inner);
      return;
    }
    if (hit.pipe) {
      this.finishRun("", hit.pipe.p, inner);
      return;
    }
    // nothing there: the pipe ends loose where the hand stopped – and may be led on to the pool from the side bar
    const end = corners[corners.length - 1];
    const endPt = onWall(c.frame, Math.round(end.s * 20) / 20, Math.round(end.y * 20) / 20, c.gap);
    const id = this.finishRun("", null, [...inner, [round(endPt[0]), round(endPt[1]), round(endPt[2])]]);
    if (id) this._techAsk = { s: end.s, y: end.y, pipe: id };
  }

  /** The answer to "where does the line go": a hole there with the way outside, the loose end joined to it. */
  private answerAsk(c: RunCtx, kind: string | null): void {
    const ask = this._techAsk;
    this._techAsk = null;
    if (!ask) return;
    if (kind === "cancel") {
      this.changePool(c.pool.id, (l) => (l.pipes = (l.pipes ?? []).filter((p) => p.id !== ask.pipe)));
      return;
    }
    if (!kind) return;
    const hole = this.feedAt(c, kind, ask.s, ask.y);
    if (!hole) return;
    this.changePool(c.pool.id, (l) => {
      const p = l.pipes?.find((x) => x.id === ask.pipe);
      if (!p) return;
      if (!p.to) p.to = `joint:${hole.id}:inside`;
      else if (!p.from) p.from = `joint:${hole.id}:inside`;
    });
  }

  /** The side bar of "Technik zeichnen": devices, the pool's lines to bring in, ball valve and sight glass, what is missing. */
  private renderTechKit(frame: WallFrame, room: Room, c: RunCtx) {
    const area = c.pool;
    const rules = this.pipeRules;
    if (!rules) return nothing;
    const add = (t: string) => html`<button class="fp3d-wv-tile" @click=${() => this.addOnWall(t, frame, room)}>
      <span class="fp3d-wv-tile-pic">${this.kitPics.get(t) ? html`<img src=${this.kitPics.get(t)} alt="" />` : html`<i></i>`}</span>
      <span class="fp3d-wv-tile-name">${this.t(`furn_${t}` as I18nKey)}</span>
    </button>`;
    void this.askKitPics(["pool_pump", "pool_filter", "pool_heat_pump", "pool_dosing"]);
    const kinds = ["skimmer", "drain", "inlet", "waste"].filter((k) => k === "waste" || (area.pool?.ports ?? []).some((q) => q.kind === k));
    const fit = (mode: "valve" | "sight", label: I18nKey) =>
      html`<button class="fp3d-btn ${this._runMode === mode ? "fp3d-primary" : ""}" title=${this.t("wall_run_fit")} @click=${() => {
        this._runDraft = null;
        this._runMode = this._runMode === mode ? "draw" : mode;
      }}>+ ${this.t(label)}</button>`;
    const ask = this._techAsk;
    return html`<aside class="fp3d-wv-kit fp3d-tech-kit">
      ${ask
        ? html`<div class="fp3d-tech-ask">
            <b>${this.t("tech_ask")}</b>
            ${(["skimmer", "drain", "inlet", "waste"] as const).map((k) => html`<button class="fp3d-btn fp3d-tech-feed" @click=${() => this.answerAsk(c, k)}><i>${k === "waste" ? "🟤" : "〰"}</i>${this.t(`feed_${k}` as I18nKey)}</button>`)}
            <button class="fp3d-btn" @click=${() => this.answerAsk(c, null)}>${this.t("tech_ask_loose")}</button>
            <button class="fp3d-btn fp3d-danger" @click=${() => this.answerAsk(c, "cancel")}>${this.t("delete")}</button>
          </div>`
        : this.renderTechStep(c)}
      <div class="fp3d-seg fp3d-tech-pen" role="group">
        <button aria-pressed=${this._runMode === "draw"} @click=${() => {
          this._runMode = "draw";
          this._runSel = null;
        }}><span>✏</span>${this.t("tech_draw")}</button>
        <button aria-pressed=${this._runMode !== "draw" && this._runMode !== "feed" && this._runMode !== "erase"} @click=${() => {
          this._runDraft = null;
          this._runMode = null;
        }}><span>✋</span>${this.t("tech_pick")}</button>
        <button aria-pressed=${this._runMode === "erase"} title=${this.t("tech_erase_hint")} @click=${() => {
          this._runDraft = null;
          this._runSel = null;
          this._feedKind = null;
          this._runMode = this._runMode === "erase" ? "draw" : "erase";
        }}><span>🧽</span>${this.t("tech_erase")}</button>
      </div>
      <button class="fp3d-btn fp3d-tech-undo" ?disabled=${!this._canUndo} title="Ctrl+Z" @click=${() => {
        this._runDraft = null;
        this.undo();
      }}>↶ ${this.t("undo")}</button>
      <h4>${this.t("tech_feeds")}</h4>
      ${kinds.map((k) => {
        const done = rules.feedDone(area, k);
        return html`<button class="fp3d-btn fp3d-tech-feed ${this._feedKind === k ? "fp3d-primary" : ""} ${done ? "fp3d-on" : ""}" ?disabled=${done} @click=${() => {
          this._runDraft = null;
          this._feedKind = this._feedKind === k ? null : k;
          this._runMode = this._feedKind ? "feed" : "draw";
        }}><i>${k === "waste" ? "🟤" : "〰"}</i>${this.t(`feed_${k}` as I18nKey)}${done ? html`<small>✓</small>` : nothing}</button>`;
      })}
      ${!(area.pool?.ports ?? []).some((q) => q.kind !== "waste") ? html`<p class="fp3d-sub">${this.t("tech_no_ports")}</p>` : nothing}
      <h4>${this.t("tech_devices")}</h4>
      <div class="fp3d-wv-tiles">${(["pool_pump", "pool_filter", "pool_heat_pump", "pool_dosing"] as const).map(add)}</div>
      <h4>${this.t("tech_fittings")}</h4>
      ${fit("valve", "wall_run_valve")} ${fit("sight", "wall_run_sight")}
      <button class="fp3d-btn ${this._runMode === "tee" ? "fp3d-primary" : ""}" title=${this.t("tech_step_tee")} @click=${() => {
        this._runDraft = null;
        this._runMode = this._runMode === "tee" ? "draw" : "tee";
      }}>+ ${this.t("joint_add_tee")}</button>
      <p class="fp3d-sub">${this.t("tech_hint")}</p>
    </aside>`;
  }

  /**
   * The next step, in plain words: bring the pool's lines in, put the pump and filter up, then the line still missing
   * ("from the skimmer to the pump's suction side") – one at a time, until the water flows.
   */
  private renderTechStep(c: RunCtx) {
    const area = c.pool;
    const rules = this.pipeRules;
    if (!rules) return nothing;
    const ports = area.pool?.ports ?? [];
    const devs = c.floor.furniture.filter((f) => (POOL_DEVICES as readonly string[]).includes(f.type));
    const box = (n: number | null, text: string) => html`<div class="fp3d-tech-step ${n === null ? "fp3d-done" : ""}"><b>${n === null ? "✓" : this.t("tech_step", { n })}</b>${text}</div>`;
    if (this._runMode === "feed") return box(1, this.t("tech_feed_place"));
    if (this._runMode === "erase") return html`<div class="fp3d-tech-step fp3d-tech-erasing"><b>🧽 ${this.t("tech_erase")}</b>${this.t("tech_erase_hint")}</div>`;
    if (this._runMode === "valve" || this._runMode === "sight") return box(4, this.t("tech_step_fit"));
    if (this._runMode === "tee") return box(4, this.t("tech_step_tee"));
    if (this._runDraft) return box(3, this.t("tech_step_drawing"));
    if (!ports.some((q) => q.kind !== "waste")) return box(1, this.t("tech_no_ports"));
    const missing = ["skimmer", "drain", "inlet"].find((k) => ports.some((q) => q.kind === k) && !rules.feedDone(area, k));
    if (missing) return box(1, this.t("tech_step_feed", { name: this.t(`feed_${missing}` as I18nKey) }));
    const pump = devs.find((f) => f.type === "pool_pump");
    const filter = devs.find((f) => f.type === "pool_filter");
    if (!pump || !filter) return box(2, this.t("tech_step_devices"));
    const issues = rules.issues(area, devs.map((f) => ({ id: f.id, type: f.type })));
    const name = (n: string) => this.poolNodeLabel(area, n);
    const port = issues.find((i) => i.kind === "port");
    if (port) {
      const { port: q } = splitNode(port.node);
      // where the line to this connection comes from (or goes to)
      const fromTo: Record<string, string> = {
        suction: this.t("feed_skimmer"),
        pressure: name(`dev:${filter.id}:pump`),
        pump: name(`dev:${pump.id}:pressure`),
        return: devs.some((f) => f.type === "pool_heat_pump") ? this.t("furn_pool_heat_pump") : this.t("feed_inlet"),
        waste: this.t("feed_waste"),
        in: name(`dev:${filter.id}:return`),
        out: this.t("feed_inlet"),
      };
      return box(3, this.t("tech_step_line", { a: q ? (fromTo[q] ?? "…") : "…", b: name(port.node) }));
    }
    if (issues.some((i) => i.kind === "loose")) return box(3, this.t("tech_step_loose"));
    return box(null, this.t("tech_ok"));
  }

  /** "Technik zeichnen": what is still missing, or that the water flows. */
  private renderTechIssues(c: RunCtx) {
    const devs = c.floor.furniture.filter((f) => (POOL_DEVICES as readonly string[]).includes(f.type)).map((f) => ({ id: f.id, type: f.type }));
    const rules = this.pipeRules;
    if (!rules) return nothing;
    const issues = rules.issues(c.pool, devs);
    if (!issues.length) return html`<span class="fp3d-tech-ok">✓ ${this.t("tech_ok")}</span>`;
    const loose = issues.filter((i) => i.kind === "loose").length;
    const text = [
      ...(loose ? [this.t("tech_issue_loose", { n: loose })] : []),
      ...issues.filter((i) => i.kind === "port").map((i) => this.t("tech_issue_port", { name: this.poolNodeLabel(c.pool, i.node) })),
      ...issues.filter((i) => i.kind === "feed").map((i) => this.t("tech_issue_feed", { name: this.t(`feed_${i.node}` as I18nKey) })),
    ];
    return html`<span class="fp3d-tech-issues">⚠ ${text.slice(0, 4).join(" · ")}${text.length > 4 ? " …" : ""}</span>`;
  }

  /** A hole through the wall (or the floor in front of it), a T- or Y-piece where the wall was tapped. */
  private placeJoint(c: RunCtx, mode: "hole_wall" | "hole_floor" | "tee" | "y", s: number, y: number): void {
    const face = c.gap - RUN_GAP;
    const ss = Math.round(s * 100) / 100;
    const yy = Math.round(y * 100) / 100;
    const thick = sharedEdge(c.floor, c.room.id, c.frame.a, c.frame.b) ? this._doc.settings.wall_interior : this._doc.settings.wall_exterior;
    let j: PoolJoint;
    if (mode === "hole_wall") {
      const [x, z] = onWallXZ(c.frame, ss, face);
      j = { id: uid("joint"), kind: "wall", x, z, y: Math.max(0.05, yy), nx: round(c.frame.n[0]), nz: round(c.frame.n[1]), depth: round(thick) };
    } else if (mode === "hole_floor") {
      const [x, z] = onWallXZ(c.frame, ss, c.gap);
      j = { id: uid("joint"), kind: "floor", x, z, y: 0 };
    } else {
      const [x, z] = onWallXZ(c.frame, ss, c.gap);
      j = { id: uid("joint"), kind: mode, x, z, y: yy };
    }
    this.changePool(c.pool.id, (l) => (l.joints = [...(l.joints ?? []), j]));
    this._runMode = null;
  }

  /** Down into the floor (on to the garden in the plan) or through the wall from the pipe's last point. */
  private runOut(c: RunCtx, how: "down" | "through"): void {
    const d = this._runDraft;
    const last = d && this.runLast(d, c);
    if (!d || !last) return;
    if (how === "down") return void this.finishRun("", null, [[last[0], -0.3, last[2]]], -0.3);
    const w = toWall(c.frame, [last[0], last[2]]);
    const thick = sharedEdge(c.floor, c.room.id, c.frame.a, c.frame.b) ? this._doc.settings.wall_interior : this._doc.settings.wall_exterior;
    const out = onWall(c.frame, w.s, last[1], -(thick + 0.15));
    this.finishRun("", null, [[round(out[0]), last[1], round(out[2])]], last[1]);
  }

  private addFitting(c: RunCtx, pipeId: string, at: P3, kind: "valve" | "sight"): void {
    const nodeAt = poolNodeAt(this._doc, c.floor, c.pool);
    this.changePool(c.pool.id, (l) => {
      const q = l.pipes?.find((x) => x.id === pipeId);
      const h = q && nearestOnPath(pipePath(q, nodeAt), at);
      if (!q || !h) return;
      q.fittings = [...(q.fittings ?? []), { id: uid("fit"), kind, at: round(h.at), ...(kind === "valve" ? { open: true } : {}) }];
    });
    this._runSel = { pipe: pipeId, pt: null };
  }

  /** A press on a pipe: choose it; on the chosen one, a new point there that follows the pointer. */
  private runPieceDown(e: PointerEvent, c: RunCtx, run: WallRun, k: number): void {
    if (this._runMode) return;
    e.stopPropagation();
    this._wallSel = null;
    if (this._runSel?.pipe !== run.id || !this.isAdmin) {
      this._runSel = { pipe: run.id, pt: null };
      return;
    }
    const { s, y } = c.pt(e);
    const pc = run.pieces.find((x) => x.k === k)!;
    const t = Math.hypot(pc.s1 - pc.s0, pc.y1 - pc.y0) > 0 ? Math.hypot(s - pc.s0, y - pc.y0) / Math.hypot(pc.s1 - pc.s0, pc.y1 - pc.y0) : 0;
    const dd = pc.d0 + (pc.d1 - pc.d0) * Math.min(1, t);
    const base = this._doc;
    const nodeAt = poolNodeAt(base, c.floor, c.pool);
    let index = -1;
    this.changePool(c.pool.id, (l) => {
      const q = l.pipes?.find((x) => x.id === run.id);
      if (!q) return;
      Object.assign(q, laidPipe(q, nodeAt));
      index = Math.max(0, Math.min(q.points.length, k + 1 - runLead(q, nodeAt)));
      q.points.splice(index, 0, onWallXZ(c.frame, s, dd));
      q.heights!.splice(index, 0, round(y));
    });
    if (index < 0) return;
    this._runSel = { pipe: run.id, pt: index };
    this.runDrag = { pipe: run.id, i: index, d: dd, base, moved: true };
    (e.currentTarget as Element).closest("svg")?.setPointerCapture(e.pointerId);
  }

  /** A press on a pipe's point: drag it along the wall and up or down; a double click takes it out. */
  private runPointDown(e: PointerEvent, c: RunCtx, pipeId: string, i: number): void {
    if (this._runMode || !this.isAdmin) return;
    e.stopPropagation();
    const nodeAt = poolNodeAt(this._doc, c.floor, c.pool);
    if (this.doubleTap(e, `runpt:${pipeId}:${i}`)) {
      this.changePool(c.pool.id, (l) => {
        const q = l.pipes?.find((x) => x.id === pipeId);
        if (!q) return;
        Object.assign(q, laidPipe(q, nodeAt));
        q.points.splice(i, 1);
        q.heights!.splice(i, 1);
      });
      this._runSel = { pipe: pipeId, pt: null };
      return;
    }
    const q = c.pool.pool?.pipes?.find((x) => x.id === pipeId);
    const laid = q && laidPipe(q, nodeAt);
    const at = laid?.points[i];
    if (!at) return;
    this._runSel = { pipe: pipeId, pt: i };
    this.runDrag = { pipe: pipeId, i, d: toWall(c.frame, at).d, base: this._doc, moved: false };
    (e.currentTarget as Element).closest("svg")?.setPointerCapture(e.pointerId);
  }

  private runPointMove(e: PointerEvent, c: RunCtx): void {
    const g = this.runDrag;
    if (!g) return;
    let { s, y } = c.pt(e);
    s = Math.round(s * 100) / 100;
    y = Math.round(y * 100) / 100;
    const nodeAt = poolNodeAt(g.base, c.floor, c.pool);
    const area = g.base.floors.flatMap((f) => f.outdoor).find((o) => o.id === c.pool.id);
    const q0 = area?.pool?.pipes?.find((x) => x.id === g.pipe);
    if (!q0) return;
    const laid = laidPipe(q0, nodeAt);
    // level with or straight above a neighbouring point within 4 cm (Alt: free)
    if (!e.altKey) {
      const path = pipePath(laid, nodeAt);
      const lead = runLead(laid, nodeAt);
      for (const nb of [path[g.i + lead - 1], path[g.i + lead + 1]]) {
        if (!nb) continue;
        const w = toWall(c.frame, [nb[0], nb[2]]);
        if (Math.abs(w.s - s) < 0.04) s = round(w.s);
        if (Math.abs(nb[1] - y) < 0.04) y = round(nb[1]);
      }
    }
    g.moved = true;
    this.change(
      (_, floor) => {
        const q = floor.outdoor.find((o) => o.id === c.pool.id)?.pool?.pipes?.find((x) => x.id === g.pipe);
        if (!q) return;
        Object.assign(q, laidPipe(q, nodeAt));
        q.points[g.i] = onWallXZ(c.frame, s, g.d);
        q.heights![g.i] = y;
      },
      g.base,
      false,
    );
  }

  private runPointUp(): void {
    const g = this.runDrag;
    this.runDrag = null;
    if (g?.moved) this.pushHistory(g.base);
  }

  /**
   * A ball valve or sight glass: dragged it slides along its pipe, a tap opens or closes a valve, a double click
   * takes it out.
   */
  private fittingDown(e: PointerEvent, c: RunCtx, pipeId: string, id: string): void {
    if (this._runMode || !this.isAdmin) return;
    e.stopPropagation();
    this._runSel = { pipe: pipeId, pt: null };
    if (this.doubleTap(e, `fitting:${id}`)) {
      this.changePool(c.pool.id, (l) => {
        const q = l.pipes?.find((x) => x.id === pipeId);
        if (q?.fittings) q.fittings = q.fittings.filter((x) => x.id !== id);
      });
      return;
    }
    this.fitDrag = { pipe: pipeId, id, base: this._doc, moved: false, x: e.clientX, y: e.clientY };
    (e.currentTarget as Element).closest("svg")?.setPointerCapture(e.pointerId);
  }

  private jointDown(e: PointerEvent, id: string, d: number): void {
    if (this._runMode || !this.isAdmin) return;
    e.stopPropagation();
    this.jointDrag = { id, d, base: this._doc, moved: false };
    (e.currentTarget as Element).closest("svg")?.setPointerCapture(e.pointerId);
  }

  private jointMove(e: PointerEvent, c: RunCtx): void {
    const g = this.jointDrag;
    if (!g) return;
    g.moved = true;
    const { s, y } = c.pt(e);
    const ss = e.altKey ? s : Math.round(s * 100) / 100;
    const yy = e.altKey ? y : Math.round(y * 100) / 100;
    this.change(
      (_, floor) => {
        const j = floor.outdoor.find((o) => o.id === c.pool.id)?.pool?.joints?.find((x) => x.id === g.id);
        if (!j) return;
        [j.x, j.z] = onWallXZ(c.frame, ss, g.d);
        if (j.kind !== "floor") j.y = Math.max(j.kind === "wall" ? 0.05 : -1, round(yy));
      },
      g.base,
      false,
    );
  }

  private fittingMove(e: PointerEvent, c: RunCtx): void {
    const g = this.fitDrag;
    if (!g || (!g.moved && Math.hypot(e.clientX - g.x, e.clientY - g.y) < 4)) return;
    g.moved = true;
    const { s, y } = c.pt(e);
    const run = c.runs.find((r) => r.id === g.pipe);
    if (!run) return;
    // the nearest point of the pipe's pieces on this wall
    let best: { p: P3; d: number } | null = null;
    for (const pc of run.pieces) {
      const [vs, vy] = [pc.s1 - pc.s0, pc.y1 - pc.y0];
      const l2 = vs * vs + vy * vy;
      const t = l2 > 0 ? Math.max(0, Math.min(1, ((s - pc.s0) * vs + (y - pc.y0) * vy) / l2)) : 0;
      const [qs, qy] = [pc.s0 + vs * t, pc.y0 + vy * t];
      const d = Math.hypot(qs - s, qy - y);
      if (!best || d < best.d) best = { p: onWall(c.frame, qs, qy, pc.d0 + (pc.d1 - pc.d0) * t), d };
    }
    if (!best) return;
    const nodeAt = poolNodeAt(g.base, c.floor, c.pool);
    const at = best.p;
    this.change(
      (_, floor) => {
        const q = floor.outdoor.find((o) => o.id === c.pool.id)?.pool?.pipes?.find((x) => x.id === g.pipe);
        const f = q?.fittings?.find((x) => x.id === g.id);
        const h = q && nearestOnPath(pipePath(q, nodeAt), at);
        if (f && h) f.at = round(h.at);
      },
      g.base,
      false,
    );
  }

  private fittingUp(c: RunCtx | null): void {
    const g = this.fitDrag;
    this.fitDrag = null;
    if (!g) return;
    if (g.moved) return this.pushHistory(g.base);
    if (!c) return;
    // a tap: a ball valve opens or closes
    this.changePool(c.pool.id, (l) => {
      const f = l.pipes?.find((x) => x.id === g.pipe)?.fittings?.find((x) => x.id === g.id);
      if (f?.kind === "valve") f.open = f.open === false;
    });
  }

  /**
   * The side bar's ball valve or sight glass: on the chosen pipe it appears at once in the middle of the part on
   * this wall (then dragged along it); without a chosen pipe the next tap on a pipe places it.
   */
  private kitFitting(c: RunCtx | null, kind: "valve" | "sight"): void {
    this._runDraft = null;
    const run = c && this._runSel ? c.runs.find((r) => r.id === this._runSel!.pipe) : undefined;
    if (!c || !run || !run.pieces.length) {
      this._runMode = this._runMode === kind ? null : kind;
      return;
    }
    // the middle of the pipe's longest piece on this wall
    const pc = [...run.pieces].sort((a, b) => Math.hypot(b.s1 - b.s0, b.y1 - b.y0) - Math.hypot(a.s1 - a.s0, a.y1 - a.y0))[0];
    this.addFitting(c, run.id, onWall(c.frame, (pc.s0 + pc.s1) / 2, (pc.y0 + pc.y1) / 2, (pc.d0 + pc.d1) / 2), kind);
    this._runMode = null;
  }

  /** The pipes on the wall shown (front view): grey pipes, the chosen one with its points, valves, the pipe being laid. */
  private renderRuns(c: RunCtx, X: (s: number) => number, Y: (y: number) => number) {
    const sel = this._runSel?.pipe;
    const toView = (q: P3) => {
      const w = toWall(c.frame, [q[0], q[2]]);
      return `${X(w.s)},${Y(q[1])}`;
    };
    const d = this._runDraft;
    const last = d && this.runLast(d, c);
    const draft = d ? [...(d.fromT || d.extend || d.from ? [this.runLast({ ...d, pts: [] }, c)] : []), ...d.pts].filter((q): q is P3 => !!q) : [];
    const hover = this.runHover;
    // pool devices up to 1.5 m in front of the wall: where their pipes join (a pump in the middle of the room too)
    const nodeAt = poolNodeAt(this._doc, c.floor, c.pool);
    const letter: Record<string, string> = { pool_pump: "P", pool_filter: "F", pool_heat_pump: "W", pool_dosing: "D", pool_valve: "K" };
    // the labels of connections close together (the three on a filter's valve head) would run into each other: they
    // show one above the other, and only when zoomed in enough to read them
    const placed: { s: number; y: number }[] = [];
    const marker = (node: string, text: string, cls = "", joint?: string) => {
      const q = nodeAt(node);
      const w = q && toWall(c.frame, [q.x, q.z]);
      if (!(q && w && w.d > -0.6 && w.d < 1.6 && w.s > -0.2 && w.s < c.L + 0.2)) return [];
      const near = placed.filter((p) => Math.hypot(p.s - w.s, p.y - q.y) < 0.3 * this.wvScale).length;
      placed.push({ s: w.s, y: q.y });
      const label = near && this.wvScale > 0.5 ? "" : text;
      return [
        svg`<g class="fp3d-wv-node ${cls} ${joint ? "fp3d-wv-joint" : ""}" transform="translate(${X(w.s)} ${Y(q.y)}) scale(${this.wvScale})" @pointerdown=${(e: PointerEvent) => joint && this.jointDown(e, joint, w.d)}>
            <circle r="0.05" /><text y=${0.11 + near * 0.07}>${label}</text><title>${this.poolNodeLabel(c.pool, node)}</title>
          </g>`,
      ];
    };
    const nodes = [
      ...c.floor.furniture.flatMap((f) => {
        if (letter[f.type] === undefined) return [];
        const ports = devicePorts(f.type);
        return ports.length ? ports.flatMap((q) => marker(`dev:${f.id}:${q}`, this.t(`port_${q}` as I18nKey))) : marker(`dev:${f.id}`, letter[f.type]);
      }),
      ...(c.pool.pool?.joints ?? []).flatMap((j) =>
        j.kind === "wall" || j.kind === "floor" ? marker(`joint:${j.id}:inside`, this.jointLabel(c.pool, j.id), "fp3d-wv-hole-mark", j.id) : marker(`joint:${j.id}`, this.jointLabel(c.pool, j.id), "", j.id),
      ),
    ];
    // drawing the technical room: the water flows in the drawing as if the pump ran (blue, warm after a heating heat
    // pump, brown to the waste drain); a pipe it does not reach stays grey
    const rules = this.pipeRules;
    const wet =
      this._techMode && rules
        ? rules.flow({
            pipes: c.pool.pool?.pipes ?? [],
            ports: c.pool.pool?.ports ?? [],
            devices: this._doc.floors.flatMap((f) => f.furniture).filter((f) => (POOL_DEVICES as readonly string[]).includes(f.type)).map((f) => ({ id: f.id, type: f.type, open: f.valve_open !== false, valve: f.valve_position ?? null })),
            pumpOn: true,
            heaterOn: false,
            heating: false,
          })
        : null;
    const wetStyle = (id: string) => {
      const f = wet?.get(id);
      if (!f?.active || !rules) return "";
      const [r, g, b] = rules.waterColor(f).map((v) => Math.round(v * 255));
      return `stroke: rgb(${r}, ${g}, ${b}); stroke-opacity: 0.95`;
    };
    return svg`<g class="fp3d-wv-runs">
      ${nodes}
      ${c.runs.map(
        (r) => svg`<g class="fp3d-wv-run ${r.id === sel ? "fp3d-wv-run-sel" : ""} ${wet && !wet.get(r.id)?.active ? "fp3d-wv-dry" : ""}">
          ${r.pieces.map((pc) => svg`<line class=${pc.y0 < -0.01 && pc.y1 < -0.01 ? "fp3d-wv-under" : ""} style=${wetStyle(r.id)} x1=${X(pc.s0)} y1=${Y(pc.y0)} x2=${X(pc.s1)} y2=${Y(pc.y1)} @pointerdown=${(e: PointerEvent) => this.runPieceDown(e, c, r, pc.k)} />`)}
          ${r.ends.map((e) => svg`<circle class="fp3d-wv-end" cx=${X(e.s)} cy=${Y(e.y)} r="0.035" />`)}
          ${r.fittings.map((f) =>
            f.kind === "valve"
              ? svg`<g class="fp3d-wv-valve ${f.open ? "" : "fp3d-wv-shut"}" transform="translate(${X(f.s)} ${Y(f.y)}) scale(${this.wvScale})" @pointerdown=${(e: PointerEvent) => this.fittingDown(e, c, r.id, f.id)}>
                  <circle r="0.05" /><line x1="0" y1="0" x2=${f.open ? 0.11 : 0} y2=${f.open ? 0 : -0.11} />
                </g>`
              : svg`<rect class="fp3d-wv-sight" x=${X(f.s) - 0.06} y=${Y(f.y) - 0.035} width="0.12" height="0.07" rx="0.02" @pointerdown=${(e: PointerEvent) => this.fittingDown(e, c, r.id, f.id)} />`,
          )}
          ${r.id === sel ? r.points.map((q) => svg`<circle class="fp3d-wv-runpt ${this._runSel?.pt === q.i ? "fp3d-on" : ""}" cx=${X(q.s)} cy=${Y(q.y)} r="0.04" @pointerdown=${(e: PointerEvent) => this.runPointDown(e, c, r.id, q.i)} />`) : nothing}
        </g>`,
      )}
      ${draft.length ? svg`<polyline class="fp3d-wv-draft" points=${draft.map(toView).join(" ")} />` : nothing}
      ${this.techStroke && this.techStroke.length > 1 ? svg`<polyline class="fp3d-wv-draft fp3d-wv-stroke" points=${this.techStroke.map((p) => `${X(p.s)},${Y(p.y)}`).join(" ")} />` : nothing}
      ${last && hover ? svg`<line class="fp3d-wv-draft fp3d-wv-rubber" x1=${toView(last).split(",")[0]} y1=${toView(last).split(",")[1]} x2=${X(hover[0])} y2=${Y(hover[1])} />` : nothing}
    </g>`;
  }

  /** The bottom bar of the wall view while laying a pipe, placing a fitting or with a pipe chosen. */
  private renderRunFoot(c: RunCtx) {
    const mode = this._runMode;
    const d = this._runDraft;
    if (mode === "hole_wall" || mode === "hole_floor" || mode === "tee" || mode === "y")
      return html`<span class="fp3d-muted">${this.t("wall_run_place")}</span>
        <button class="fp3d-btn" @click=${() => (this._runMode = null)}>${this.t("cancel")}</button>`;
    if (mode === "valve" || mode === "sight")
      return html`<span class="fp3d-muted">${this.t("wall_run_fit")}</span>
        <button class="fp3d-btn" @click=${() => (this._runMode = null)}>${this.t("cancel")}</button>`;
    if (mode === "draw")
      return html`<span class="fp3d-muted">${this.t(d ? "wall_run_next" : "wall_run_start")}</span>
        ${d
          ? html`<button class="fp3d-btn" @click=${() => this.runOut(c, "down")}>${this.t("wall_run_down")}</button>
              <button class="fp3d-btn" @click=${() => this.runOut(c, "through")}>${this.t("wall_run_through")}</button>
              <button class="fp3d-btn fp3d-primary" @click=${() => this.finishRun("", null)}>${this.t("wall_run_done")}</button>`
          : nothing}
        <button class="fp3d-btn" @click=${() => {
          this._runDraft = null;
          this._runMode = null;
        }}>${this.t("cancel")}</button>`;
    const sel = this._runSel;
    const q = sel && c.pool.pool?.pipes?.find((x) => x.id === sel.pipe);
    if (!sel || !q) return nothing;
    const nodeAt = poolNodeAt(this._doc, c.floor, c.pool);
    const laid = laidPipe(q, nodeAt);
    const pt = sel.pt;
    const admin = this.isAdmin;
    const loose: "from" | "to" | null = !q.to ? "to" : !q.from ? "from" : null;
    return html`<b>${this.t("wall_run_pipe")}</b>
      ${pt !== null && laid.heights?.[pt] !== undefined
        ? this.len(this.t("wall_run_pt"), laid.heights[pt] ?? 0, (v) =>
            this.changePool(c.pool.id, (l) => {
              const x = l.pipes?.find((y) => y.id === q.id);
              if (!x) return;
              Object.assign(x, laidPipe(x, nodeAt));
              x.heights![pt] = Math.min(10, Math.max(-5, round(v)));
            }),
          0.01,
        )
        : nothing}
      ${admin
        ? html`<button class="fp3d-btn" @click=${() => this.kitFitting(c, "valve")}>${this.t("wall_run_valve")}</button>
            <button class="fp3d-btn" @click=${() => this.kitFitting(c, "sight")}>${this.t("wall_run_sight")}</button>
            ${loose
              ? html`<button class="fp3d-btn" @click=${() => {
                  this._runMode = "draw";
                  const draft: RunDraft = { pool: c.pool.id, from: "", fromT: null, extend: { pipe: q.id, end: loose }, pts: [], anchor: null, wall: c.key, d: c.gap };
                  this._runDraft = { ...draft, anchor: this.runLast(draft, c) };
                }}>${this.t("wall_run_more")}</button>`
              : nothing}
            <button class="fp3d-btn" title=${this.t("pool_pipe_reverse")} @click=${() =>
              this.changePool(c.pool.id, (l) => {
                const x = l.pipes?.find((y) => y.id === q.id);
                if (!x) return;
                Object.assign(x, laidPipe(x, nodeAt));
                [x.from, x.to, x.points, x.heights] = [x.to, x.from, [...x.points].reverse(), [...(x.heights ?? [])].reverse()];
                x.fittings = x.fittings?.map((f) => ({ ...f, at: round(Math.max(0, pathLengthOf(x, nodeAt) - f.at)) }));
              })}>⇄</button>
            <button class="fp3d-btn fp3d-danger" @click=${() => {
              this.changePool(c.pool.id, (l) => (l.pipes = (l.pipes ?? []).filter((y) => y.id !== q.id)));
              this._runSel = null;
            }}>${this.t("delete")}</button>`
        : nothing}
      <span class="fp3d-muted">${this.t("wall_run_tip")}</span>`;
  }

  // ------------------------------------------------------------------ the pool tool

  /** The pool the pool tool works on: the selected one on this floor, else the only pool on it. */
  private get poolArea(): OutdoorArea | undefined {
    const a = this.outdoorArea;
    if (a?.type === "pool") return a;
    // with one pool there is nothing to choose: drawing a pipe works without selecting it first
    const pools = this.floor?.outdoor.filter((o) => o.type === "pool") ?? [];
    return pools.length === 1 ? pools[0] : undefined;
  }

  /**
   * A press in the pool tool: drawing a pipe (nodes and corner points), dragging pipe points, ports and devices,
   * tapping a ball valve, resizing or moving the pool. False when nothing was hit: then a new pool is drawn.
   */
  private poolDown(e: PointerEvent, target: Element, world: Vec2, local: Vec2): boolean {
    const floor = this.floor;
    if (!floor) return false;
    const a = this.poolArea;
    const node = target.closest("[data-pool-node]")?.getAttribute("data-pool-node") ?? null;
    if (this._jointPlace && a) {
      if (this.isAdmin) this.placeJointPlan(a, this._jointPlace, world, target.closest("[data-pipe]")?.getAttribute("data-pipe") ?? null);
      this._jointPlace = null;
      return true;
    }
    if (this._pipeMode) {
      if (!this.isAdmin) return true;
      if (!a) {
        // several pools and none chosen: a tap on one chooses it for the pipes
        const hit = floor.outdoor.find((o) => o.type === "pool" && o.points.length >= 3 && pointInPolygon(world, o.points));
        if (hit) {
          this.selectItem("outdoor", hit.id);
          // choosing it keeps the pool tool and the pipe drawing on
          this._tool = "pool";
          this._pipeMode = true;
        }
        return true;
      }
      const end = target.closest("[data-pipe-end]")?.getAttribute("data-pipe-end");
      if (end && !this._pipeDraft) {
        // on from a loose end: the pipe goes on from there
        const [pipe, which] = end.split("|");
        const q = a.pool?.pipes?.find((x) => x.id === pipe);
        const at = q && (which === "to" ? q.points[q.points.length - 1] : q.points[0]);
        if (at) this._pipeDraft = { from: "", points: [], extend: { pipe, end: which as "from" | "to", at } };
      } else if (node) {
        const d = this._pipeDraft;
        if (!d) this._pipeDraft = { from: node, points: [] };
        else if (d.extend) {
          this.extendPipe(a, d.extend, node, d.points);
          this._pipeDraft = null;
        } else if (node !== d.from) {
          this.addPipe(a.id, d.from, node, d.points);
          this._pipeDraft = null;
        }
      } else if (this._pipeDraft) {
        const q = this.snap(world, undefined, e.altKey);
        this._pipeDraft = { ...this._pipeDraft, points: [...this._pipeDraft.points, [round(q[0]), round(q[1])]] };
      }
      return true;
    }
    const split = (v: string): [string, number] => [v.slice(0, v.lastIndexOf(":")), Number(v.slice(v.lastIndexOf(":") + 1))];
    if (a && this.isAdmin) {
      const pt = target.closest("[data-pipe-pt]")?.getAttribute("data-pipe-pt");
      if (pt) {
        const [pipe, i] = split(pt);
        // a double click takes the corner point out
        if (this.doubleTap(e, `pipept:${pt}`))
          this.change((_, f) => {
            const q = f.outdoor.find((x) => x.id === a.id)?.pool?.pipes?.find((x) => x.id === pipe);
            q?.points.splice(i, 1);
            q?.heights?.splice(i, 1);
          });
        else this.drag = { kind: "pipept", pool: a.id, pipe, index: i, base: this._doc, moved: false };
        return true;
      }
      const seg = target.closest("[data-pipe-seg]")?.getAttribute("data-pipe-seg");
      if (seg) {
        // grabbing a pipe between its points adds a corner point there
        const [pipe, i] = split(seg);
        const q = this.snap(world, undefined, e.altKey);
        this.change((_, f) => {
          const x = f.outdoor.find((o) => o.id === a.id)?.pool?.pipes?.find((o) => o.id === pipe);
          x?.points.splice(i, 0, [round(q[0]), round(q[1])]);
          // a laid pipe: the new point at the height of the one before it
          x?.heights?.splice(i, 0, x.heights[i - 1] ?? x.heights[i] ?? null);
        });
        this._pipeId = pipe;
        this.drag = { kind: "pipept", pool: a.id, pipe, index: i, base: this._doc, moved: false };
        return true;
      }
    }
    const pipeEl = target.closest("[data-pipe]")?.getAttribute("data-pipe");
    if (pipeEl) {
      this._pipeId = pipeEl;
      return true;
    }
    if (node && a && this.isAdmin) {
      if (node.startsWith("port:")) this.drag = { kind: "poolport", pool: a.id, id: node.slice(5), base: this._doc, moved: false };
      else if (node.startsWith("joint:")) this.drag = { kind: "pooljoint", pool: a.id, id: splitNode(node).id, start: world, base: this._doc, moved: false };
      else this.drag = { kind: "pooldev", id: node.slice(4), start: world, base: this._doc, moved: false };
      return true;
    }
    if (this.isAdmin) {
      const box = target.closest("[data-out-box]")?.getAttribute("data-out-box");
      if (box) {
        const [id, c] = split(box);
        this.drag = { kind: "outbox", id, corner: c, base: this._doc, moved: false };
        return true;
      }
      const vx = target.closest("[data-out-vertex]")?.getAttribute("data-out-vertex");
      if (vx) {
        const [id, i] = split(vx);
        this.drag = { kind: "outvertex", id, index: i, base: this._doc, moved: false };
        return true;
      }
    }
    // the smallest area under the point: a pool inside a lawn is still the pool
    const out = target.closest("[data-outdoor]") ? (this.outdoorAt(world) ?? target.closest("[data-outdoor]")!.getAttribute("data-outdoor")) : null;
    if (out && floor.outdoor.some((x) => x.id === out && x.type === "pool")) {
      this.selectItem("outdoor", out);
      this._pipeId = null;
      if (this.isAdmin) this.drag = { kind: "outdoor", id: out, start: world, startScreen: local, base: this._doc, moved: false };
      return true;
    }
    this._pipeId = null;
    return false;
  }

  /** Changes the links of a pool on this floor (with history). */
  private changePool(id: string, fn: (links: PoolLinks, area: OutdoorArea) => void): void {
    this.change((_, floor) => {
      const area = floor.outdoor.find((x) => x.id === id);
      if (!area) return;
      area.pool ??= {};
      fn(area.pool, area);
    });
  }

  /** A loose pipe end drawn on in the plan to a node (its new points run at the pipe's height). */
  private extendPipe(a: OutdoorArea, ext: { pipe: string; end: "from" | "to" }, node: string, points: Vec2[]): void {
    const floor = this.floor;
    if (!floor) return;
    const nodeAt = poolNodeAt(this._doc, floor, a);
    node = this.jointEnd(a, node, points[points.length - 1]);
    this.changePool(a.id, (l) => {
      const q = l.pipes?.find((x) => x.id === ext.pipe);
      if (!q) return;
      Object.assign(q, laidPipe(q, nodeAt));
      const hs = q.heights ?? [];
      if (ext.end === "to") {
        // the new points run at the height of the loose end (down in the floor: under the ground)
        const h = hs[hs.length - 1] ?? q.height ?? null;
        q.points = [...q.points, ...points];
        q.heights = [...hs, ...points.map(() => h)];
        q.to = node;
      } else {
        // drawn outward from the loose start: the water now comes from the node; valves keep their place
        const before = pathLengthOf(q, nodeAt);
        const h = hs[0] ?? q.height ?? null;
        q.points = [...[...points].reverse(), ...q.points];
        q.heights = [...points.map(() => h), ...hs];
        q.from = node;
        const shift = pathLengthOf(q, nodeAt) - before;
        q.fittings = q.fittings?.map((f) => ({ ...f, at: round(f.at + shift) }));
      }
    });
    this._pipeId = ext.pipe;
  }

  /** A joint without its connection: the next free one of a T- or Y-piece; at a hole the side nearer `near`. */
  private jointEnd(a: OutdoorArea, node: string, near: Vec2 | undefined, taken: string[] = []): string {
    const { kind, id, port } = splitNode(node);
    const j = kind === "joint" && !port ? a.pool?.joints?.find((x) => x.id === id) : undefined;
    if (!j) return node;
    if (j.kind === "wall" || j.kind === "floor") {
      const floor = this._doc.floors.find((f) => f.outdoor.some((o) => o.id === a.id));
      const at = floor && poolNodeAt(this._doc, floor, a);
      const [i, o] = [at?.(`joint:${id}:inside`), at?.(`joint:${id}:outside`)];
      if (!near || !i || !o) return `joint:${id}:inside`;
      return `joint:${id}:${Math.hypot(near[0] - i.x, near[1] - i.z) <= Math.hypot(near[0] - o.x, near[1] - o.z) ? "inside" : "outside"}`;
    }
    const used = new Set([...(a.pool?.pipes ?? []).flatMap((p) => [p.from, p.to]), ...taken]);
    const q = jointPorts(j.kind).find((x) => !used.has(`joint:${id}:${x}`));
    return q ? `joint:${id}:${q}` : node;
  }

  private addPipe(poolId: string, from: string, to: string, points: Vec2[]): void {
    const floor = this.floor;
    if (!floor) return;
    const a = floor.outdoor.find((o) => o.id === poolId);
    if (a) {
      from = this.jointEnd(a, from, points[0]);
      to = this.jointEnd(a, to, points[points.length - 1], [from]);
    }
    const pipe: PoolPipe = { id: uid("pipe"), from, to, floor_id: floor.id, points };
    this.changePool(poolId, (l) => (l.pipes = [...(l.pipes ?? []), pipe]));
    this._pipeId = pipe.id;
  }

  /** A port on the pool: skimmer and inlets on the rim (spread over its sides), the drain in the middle, the waste drain beside the technical room. */
  private addPoolPort(kind: PoolPort["kind"]): void {
    const a = this.poolArea;
    if (!a || !this.isAdmin) return;
    const ports = a.pool?.ports ?? [];
    const n = a.points.length;
    const mid = (i: number): Vec2 => {
      const p = a.points[i % n];
      const q = a.points[(i + 1) % n];
      return [(p[0] + q[0]) / 2, (p[1] + q[1]) / 2];
    };
    const [cx, cz] = centroid(a.points);
    const dev = this._doc.floors.flatMap((f) => f.furniture).find((m) => m.type === "pool_filter" || m.type === "pool_pump");
    const inlets = ports.filter((p) => p.kind === "inlet").length;
    const at: Vec2 =
      kind === "skimmer"
        ? nearestOnOutline(a.points, mid(0))
        : kind === "inlet"
          ? nearestOnOutline(a.points, mid(Math.floor(n / 2) + inlets * Math.max(1, Math.floor(n / 8))))
          : kind === "drain"
            ? [cx, cz]
            : dev
              ? [dev.x + 0.8, dev.z]
              : [cx, cz + 3];
    const port: PoolPort = { id: uid("port"), kind, x: round(at[0]), z: round(at[1]) };
    this.changePool(a.id, (l) => (l.ports = [...ports, port]));
  }

  /** A device of the technical room, placed like the energy devices (garage or technical room, against a wall). */
  private addPoolDevice(type: string): void {
    const a = this.poolArea;
    this.addEnergyDevice(type);
    // the pool stays selected in its tool
    if (a) this.selectItem("outdoor", a.id);
    this._tool = "pool";
  }

  /** Removes a device and the pipes ending at it. */
  private deletePoolDevice(id: string): void {
    this.change((d) => {
      for (const f of d.floors) {
        f.furniture = f.furniture.filter((m) => m.id !== id);
        for (const o of f.outdoor) if (o.pool?.pipes) o.pool.pipes = o.pool.pipes.filter((p) => p.from !== `dev:${id}` && p.to !== `dev:${id}`);
      }
    });
  }

  private deletePoolPort(poolId: string, id: string): void {
    this.changePool(poolId, (l) => {
      l.ports = (l.ports ?? []).filter((p) => p.id !== id);
      l.pipes = (l.pipes ?? []).filter((p) => p.from !== `port:${id}` && p.to !== `port:${id}`);
    });
  }

  private togglePoolValve(id: string): void {
    const f = this._doc.floors.flatMap((x) => x.furniture).find((m) => m.id === id);
    if (!f || f.type !== "pool_valve" || !this.isAdmin) return;
    this.change((d) => {
      const m = d.floors.flatMap((x) => x.furniture).find((q) => q.id === id);
      if (m) m.valve_open = m.valve_open === false ? null : false;
    });
  }

  private setPoolDevice(id: string, patch: Partial<Furniture>): void {
    this.change((d) => {
      const m = d.floors.flatMap((x) => x.furniture).find((q) => q.id === id);
      if (m) Object.assign(m, patch);
    });
  }

  /**
   * The name of a connection: a T- or Y-piece's are lettered (A, B, C – which way the water runs does not matter),
   * the others say what they are (suction side, return, inside …).
   */
  private portText(node: string): string {
    const { kind, port } = splitNode(node);
    const letter: Record<string, string> = { in: "A", out1: "B", out2: "C" };
    if (kind === "joint" && port && letter[port]) return `${this.t("card_port")} ${letter[port]}`;
    return port ? this.t(`port_${port}` as I18nKey) : "";
  }

  private openCard(pool: string, part: string): void {
    this._card = { pool, part };
    this._cardJoin = null;
  }

  /** The connections of a part: its own (pump, filter, heat pump, T/Y, hole) or one (a pool port, a device without any). */
  private partPorts(a: OutdoorArea, part: string): string[] {
    const { kind, id } = splitNode(part);
    if (kind === "joint") {
      const j = a.pool?.joints?.find((x) => x.id === id);
      return j ? jointPorts(j.kind).map((q) => `${part}:${q}`) : [];
    }
    if (kind === "dev") {
      const f = this._doc.floors.flatMap((x) => x.furniture).find((m) => m.id === id);
      const ports = f ? devicePorts(f.type) : [];
      return ports.length ? ports.map((q) => `${part}:${q}`) : [part];
    }
    return [part];
  }

  /** How many of a part's connections are joined (older pipes at the part as a whole count for one). */
  private partStatus(a: OutdoorArea, part: string): [number, number] {
    const pipes = a.pool?.pipes ?? [];
    const ports = this.partPorts(a, part);
    return [ports.filter((n) => pipes.some((p) => p.from === n || p.to === n)).length, ports.length];
  }

  /** Joins an open connection of the card's part: to the chosen end, through the chosen holes and fittings. */
  private cardConnect(a: OutdoorArea, port: string, to: string, vias: ConnectVia[]): void {
    const floor = this._doc.floors.find((f) => f.outdoor.some((o) => o.id === a.id));
    if (!floor || !to) return;
    const nodeAt = poolNodeAt(this._doc, floor, a);
    const ports = a.pool?.ports ?? [];
    // which way the water runs at each end (a T-piece's or hole's connections pass it on)
    const flow = (n: string) => {
      const { kind, id, port: q } = splitNode(n);
      if (kind === "port") return poolPortFlow(ports.find((x) => x.id === id)?.kind ?? "inlet");
      return kind === "dev" ? portFlow(q) : null;
    };
    // a T- or Y-piece chosen as a whole takes its next free connection
    const end = this.jointEnd(a, to, undefined, [port]);
    const made = planConnection({ from: port, vias, to: [end], floorId: floor.id }, nodeAt, a.pool?.joints ?? [], flow, (k) => uid(k));
    this.changePool(a.id, (l) => {
      l.joints = [...(l.joints ?? []), ...made.joints];
      l.pipes = [...(l.pipes ?? []), ...made.pipes];
    });
    this._cardJoin = null;
  }

  /** Takes a connection's pipes out (holes and parts stay). */
  private cardDisconnect(a: OutdoorArea, c: Connection): void {
    this.changePool(a.id, (l) => (l.pipes = (l.pipes ?? []).filter((p) => !c.pipes.includes(p.id))));
  }

  /** Lays a connection anew along the automatic way (its corner points and fittings' places are lost). */
  private cardReroute(a: OutdoorArea, c: Connection): void {
    const pipes = a.pool?.pipes ?? [];
    const first = pipes.find((p) => p.id === c.pipes[0]);
    if (!first || !c.other) return;
    // keep the water's direction: the connection is laid from where its water comes
    const forward = first.from === c.start;
    const vias: ConnectVia[] = [...c.holes.map((h) => ({ kind: "hole" as const, joint: h.joint, dir: h.dir })), ...c.fittings.map((k) => ({ kind: k }))];
    const floor = this._doc.floors.find((f) => f.outdoor.some((o) => o.id === a.id));
    if (!floor) return;
    const rest = { ...a, pool: { ...a.pool, pipes: pipes.filter((p) => !c.pipes.includes(p.id)) } };
    const nodeAt = poolNodeAt(this._doc, floor, rest);
    const from = forward ? c.start : c.other;
    const to = forward ? c.other : c.start;
    const viasInOrder = forward ? vias : [...c.holes].reverse().map((h) => ({ kind: "hole" as const, joint: h.joint, dir: h.dir === "in" ? ("out" as const) : ("in" as const) })).concat(c.fittings.map((k) => ({ kind: k })) as never[]);
    const made = planConnection({ from, vias: viasInOrder, to: [to], floorId: floor.id }, nodeAt, a.pool?.joints ?? [], () => null, (k) => uid(k));
    this.changePool(a.id, (l) => {
      l.pipes = [...(l.pipes ?? []).filter((p) => !c.pipes.includes(p.id)), ...made.pipes];
    });
  }

  /** A part's card: its name, a small drawing with its connections, and per connection where it goes or how to join it. */
  private renderPartCard() {
    const card = this._card;
    const a = card ? this._doc.floors.flatMap((f) => f.outdoor).find((o) => o.id === card.pool) : undefined;
    if (!card || !a) return nothing;
    const admin = this.isAdmin;
    const { kind, id } = splitNode(card.part);
    const joint = kind === "joint" ? a.pool?.joints?.find((x) => x.id === id) : undefined;
    const dev = kind === "dev" ? this._doc.floors.flatMap((f) => f.furniture).find((m) => m.id === id) : undefined;
    const port = kind === "port" ? a.pool?.ports?.find((x) => x.id === id) : undefined;
    if (!joint && !dev && !port) return nothing;
    const pipes = a.pool?.pipes ?? [];
    const joints = a.pool?.joints ?? [];
    const ports = this.partPorts(a, card.part);
    const ends = this.poolEnds(a).filter((e) => nodePart(e.node) !== card.part && !e.used);
    const holes = joints.filter((j) => j.kind === "wall" || j.kind === "floor");
    const label = (n: string) => this.poolNodeLabel(a, n);
    const portName = (n: string) => {
      const q = splitNode(n).port;
      return q ? this.portText(n) : this.t("card_port");
    };
    const viaText = (v: ConnectVia) => (v.kind === "hole" ? this.t(v.dir === "in" ? "conn_hole_in" : "conn_hole_out", { name: this.jointLabel(a, v.joint) }) : this.t(v.kind === "valve" ? "wall_run_valve" : "wall_run_sight"));
    const close = () => {
      this._card = null;
      this._cardJoin = null;
    };
    const where = (): Vec2 | null => {
      if (joint) return [joint.x, joint.z];
      if (dev) return [dev.x, dev.z];
      return port ? [port.x, port.z] : null;
    };
    const rows = ports.map((n) => {
      const conns = connectionsAt(pipes, joints, n);
      const join = this._cardJoin?.port === n ? this._cardJoin : null;
      return html`<div class="fp3d-pc-row ${conns.length ? "fp3d-on" : ""}">
        <b>${portName(n)}</b>
        <div class="fp3d-pc-conns">
          ${conns.map(
            (c) => html`<div class="fp3d-pc-conn">
              <div class="fp3d-pc-chain">
                ${[...c.holes.map((h) => viaText({ kind: "hole", joint: h.joint, dir: h.dir })), ...c.fittings.map((k) => viaText({ kind: k }))].map((t) => html`<span class="fp3d-pc-arrow">→</span><span class="fp3d-pc-tile">${t}</span>`)}
                <span class="fp3d-pc-arrow">→</span>
                ${c.other
                  ? html`<button class="fp3d-pc-tile fp3d-pc-end" title=${this.t("card_open_other")} @click=${() => this.openCard(a.id, nodePart(c.other))}>${label(c.other)}</button>`
                  : html`<span class="fp3d-pc-tile fp3d-muted">${this.t("pool_loose_end")}</span>`}
              </div>
              ${admin
                ? html`<span class="fp3d-pc-tools">
                    ${c.other ? html`<button class="fp3d-btn" @click=${() => this.cardReroute(a, c)}>${this.t("card_reroute")}</button>` : nothing}
                    <button class="fp3d-btn fp3d-danger" @click=${() => this.cardDisconnect(a, c)}>${this.t("card_disconnect")}</button>
                  </span>`
                : nothing}
            </div>`,
          )}
          ${admin && (!conns.length || ports.length === 1)
            ? join
              ? this.renderJoinPicker(a, n, join, ends, holes, viaText)
              : html`<button class="fp3d-btn ${conns.length ? "" : "fp3d-pc-open"}" @click=${() => (this._cardJoin = { port: n, to: "", vias: [] })}>+ ${this.t("card_connect_with")}</button>`
            : nothing}
        </div>
      </div>`;
    });
    const [done, all] = this.partStatus(a, card.part);
    const at = where();
    return html`<div class="fp3d-wv-veil fp3d-pc-veil" @click=${(e: Event) => e.target === e.currentTarget && close()}>
      <div class="fp3d-pc" role="dialog" tabindex="0" @keydown=${(e: KeyboardEvent) => e.key === "Escape" && close()}>
        <div class="fp3d-wv-head">
          ${joint && admin
            ? html`<input
                class="fp3d-pc-name"
                .value=${joint.name ?? ""}
                placeholder=${this.jointLabel(a, joint.id)}
                title=${this.t("joint_name")}
                @change=${(e: Event) => {
                  const v = (e.target as HTMLInputElement).value.trim().slice(0, 60);
                  this.changePool(a.id, (l) => {
                    const x = l.joints?.find((q) => q.id === joint.id);
                    if (x) x.name = v || null;
                  });
                }}
              />`
            : html`<b class="fp3d-pc-title">${label(card.part)}</b>`}
          <span class="fp3d-muted">${this.t("card_status", { a: done, b: all })}</span>
          <span class="fp3d-wv-grow"></span>
          <button class="fp3d-btn" title=${this.t("close")} @click=${close}>✕</button>
        </div>
        <div class="fp3d-pc-body">
          ${this.renderPartDrawing(a, card.part, ports)}
          <div class="fp3d-pc-rows">${rows}</div>
        </div>
        <div class="fp3d-wv-foot">
          ${at
            ? html`<button class="fp3d-btn" @click=${() => {
                close();
                this._wallView = null;
                this._tool = "pool";
                this.showPoint(at[0], at[1]);
              }}>${this.t("card_show_plan")}</button>`
            : nothing}
          ${at && !port
            ? html`<button class="fp3d-btn" @click=${() => {
                close();
                this.pickWall(at);
              }}>▦ ${this.t("card_show_wall")}</button>`
            : nothing}
          <span class="fp3d-wv-grow"></span>
          ${admin
            ? html`<button class="fp3d-btn fp3d-danger" @click=${() => {
                close();
                if (dev) this.deletePoolDevice(dev.id);
                else if (port) this.deletePoolPort(a.id, port.id);
                else if (joint)
                  this.changePool(a.id, (l) => {
                    l.joints = (l.joints ?? []).filter((x) => x.id !== joint.id);
                    l.pipes = (l.pipes ?? []).filter((p) => nodePart(p.from) !== card.part && nodePart(p.to) !== card.part);
                  });
              }}>${this.t("delete")}</button>`
            : nothing}
        </div>
      </div>
    </div>`;
  }

  /**
   * Building a new connection like a walk along the pipe: the chain from this connection through the stops chosen
   * so far (holes with their direction, ball valves, sight glasses), and below it the next step to choose – another
   * stop or the end it reaches. With an end chosen, the way is laid.
   */
  private renderJoinPicker(
    a: OutdoorArea,
    port: string,
    join: { port: string; to: string; vias: ConnectVia[] },
    ends: { node: string; label: string; used: boolean }[],
    holes: PoolJoint[],
    viaText: (v: ConnectVia) => string,
  ) {
    const group = (n: string) => {
      const { kind, id } = splitNode(n);
      if (kind === "port") return "pool";
      if (kind === "dev") return "tech";
      const j = a.pool?.joints?.find((x) => x.id === id);
      return j?.kind === "wall" || j?.kind === "floor" ? "holes" : "joints";
    };
    const groups = (["pool", "tech", "joints"] as const)
      .map((g) => ({ g, items: ends.filter((e) => group(e.node) === g) }))
      .filter((x) => x.items.length);
    const set = (patch: Partial<typeof join>) => (this._cardJoin = { ...join, ...patch });
    const addVia = (v: ConnectVia) => set({ vias: [...join.vias, v] });
    // a hole already passed is not offered again
    const passed = new Set(join.vias.flatMap((v) => (v.kind === "hole" ? [v.joint] : [])));
    return html`<div class="fp3d-pc-join">
      <div class="fp3d-pc-chain">
        <span class="fp3d-pc-tile fp3d-pc-start">${this.poolNodeLabel(a, port)}</span>
        ${join.vias.map(
          (v, i) => html`<span class="fp3d-pc-arrow">→</span
            ><button class="fp3d-pc-tile fp3d-pc-stop" title=${this.t("delete")} @click=${() => set({ vias: join.vias.filter((_, k) => k !== i) })}>${viaText(v)} <i>✕</i></button>`,
        )}
        <span class="fp3d-pc-arrow">→</span>
        ${join.to
          ? html`<button class="fp3d-pc-tile fp3d-pc-end" title=${this.t("delete")} @click=${() => set({ to: "" })}>${this.poolNodeLabel(a, join.to)} <i>✕</i></button>`
          : html`<span class="fp3d-pc-tile fp3d-pc-next">${this.t("card_next")}</span>`}
      </div>
      ${join.to
        ? nothing
        : html`<div class="fp3d-pc-steps">
            ${holes.some((j) => !passed.has(j.id))
              ? html`<div class="fp3d-pc-step">${this.t("card_step_hole")}</div>
                  ${holes
                    .filter((j) => !passed.has(j.id))
                    .map(
                      (j) => html`<div class="fp3d-pc-hole">
                        <span>${this.jointLabel(a, j.id)}</span>
                        <button class="fp3d-pc-pick" @click=${() => addVia({ kind: "hole", joint: j.id, dir: "in" })}>${this.t("card_hole_in")}</button>
                        <button class="fp3d-pc-pick" @click=${() => addVia({ kind: "hole", joint: j.id, dir: "out" })}>${this.t("card_hole_out")}</button>
                      </div>`,
                    )}`
              : nothing}
            <div class="fp3d-pc-step">${this.t("card_step_fit")}</div>
            <div class="fp3d-pc-picks">
              <button class="fp3d-pc-pick" @click=${() => addVia({ kind: "valve" })}>${this.t("wall_run_valve")}</button>
              <button class="fp3d-pc-pick" @click=${() => addVia({ kind: "sight" })}>${this.t("wall_run_sight")}</button>
            </div>
            <div class="fp3d-pc-step">${this.t("card_step_end")}</div>
            ${groups.map(
              ({ g, items }) => html`<div class="fp3d-pc-group">
                <span class="fp3d-pc-glabel">${this.t(`card_group_${g}` as I18nKey)}</span>
                <div class="fp3d-pc-picks">${items.map((e) => html`<button class="fp3d-pc-pick fp3d-pc-target" @click=${() => set({ to: e.node })}>${e.label}</button>`)}</div>
              </div>`,
            )}
          </div>`}
      <span class="fp3d-pc-tools">
        <button class="fp3d-btn fp3d-primary" ?disabled=${!join.to} @click=${() => this.cardConnect(a, port, join.to, join.vias)}>✓ ${this.t("card_lay")}</button>
        <button class="fp3d-btn" @click=${() => (this._cardJoin = null)}>${this.t("cancel")}</button>
      </span>
    </div>`;
  }

  /**
   * A small drawing of a part with its connections as labelled stubs (joined: lit, open: dashed): a T-piece with
   * its entry left and exits right and down, a Y-piece, a hole through a wall, the pump, the filter's valve, the
   * heat pump, a port at the pool.
   */
  private renderPartDrawing(a: OutdoorArea, part: string, ports: string[]) {
    const pipes = a.pool?.pipes ?? [];
    const on = (n: string) => pipes.some((p) => p.from === n || p.to === n);
    const { kind, id } = splitNode(part);
    const joint = kind === "joint" ? a.pool?.joints?.find((x) => x.id === id) : undefined;
    const dev = kind === "dev" ? this._doc.floors.flatMap((f) => f.furniture).find((m) => m.id === id) : undefined;
    // where each connection's stub ends (drawing 200 x 140)
    const at: Record<string, [number, number]> = {};
    let body: unknown = nothing;
    const t = joint?.kind ?? (dev ? dev.type : "port");
    if (t === "tee") {
      Object.assign(at, { in: [20, 60], out1: [180, 60], out2: [100, 130] });
      body = svg`<path class="fp3d-pc-body-shape" d="M 55 48 H 145 V 72 H 112 V 100 H 88 V 72 H 55 Z" />`;
    } else if (t === "y") {
      Object.assign(at, { in: [20, 70], out1: [180, 25], out2: [180, 115] });
      body = svg`<path class="fp3d-pc-body-shape" d="M 55 58 H 95 L 140 30 L 152 50 L 112 70 L 152 90 L 140 110 L 95 82 H 55 Z" />`;
    } else if (t === "wall" || t === "floor") {
      Object.assign(at, { outside: [20, 70], inside: [180, 70] });
      body = svg`<rect class="fp3d-pc-wall" x="85" y="10" width="30" height="120" /><rect class="fp3d-pc-body-shape" x="70" y="58" width="60" height="24" rx="4" />
        <text class="fp3d-pc-side" x="40" y="22">${this.t("port_outside")}</text><text class="fp3d-pc-side" x="160" y="22">${this.t("port_inside")}</text>`;
    } else if (t === "pool_pump") {
      Object.assign(at, { suction: [20, 95], pressure: [110, 10] });
      body = svg`<rect class="fp3d-pc-body-shape" x="50" y="70" width="70" height="50" rx="8" /><circle class="fp3d-pc-body-shape" cx="140" cy="85" r="30" /><rect class="fp3d-pc-body-shape" x="98" y="40" width="24" height="32" />`;
    } else if (t === "pool_filter") {
      Object.assign(at, { pump: [20, 40], return: [180, 40], waste: [100, 4] });
      body = svg`<ellipse class="fp3d-pc-body-shape" cx="100" cy="95" rx="45" ry="40" /><rect class="fp3d-pc-body-shape" x="70" y="28" width="60" height="26" rx="10" />`;
    } else if (t === "pool_heat_pump") {
      Object.assign(at, { in: [180, 95], out: [180, 45] });
      body = svg`<rect class="fp3d-pc-body-shape" x="30" y="20" width="120" height="100" rx="8" /><circle class="fp3d-pc-fan" cx="80" cy="70" r="32" />`;
    } else {
      at[""] = [180, 70];
      body = svg`<circle class="fp3d-pc-body-shape" cx="80" cy="70" r="40" />`;
    }
    const centre: [number, number] = t === "pool_filter" ? [100, 41] : t === "pool_pump" ? [100, 85] : [100, 70];
    return html`<svg class="fp3d-pc-draw" viewBox="0 0 200 140">
      ${ports.map((n) => {
        const q = splitNode(n).port ?? "";
        const end = at[q] ?? at[""] ?? [180, 70];
        const lit = on(n);
        return svg`<g class="fp3d-pc-stub ${lit ? "fp3d-on" : ""}" @click=${() => this.isAdmin && !lit && (this._cardJoin = { port: n, to: "", vias: [] })}>
          <line x1=${centre[0]} y1=${centre[1]} x2=${end[0]} y2=${end[1]} />
          <circle cx=${end[0]} cy=${end[1]} r="7" />
          <title>${q ? this.portText(n) : ""}</title>
        </g>`;
      })}
      ${body}
      ${ports.map((n) => {
        const q = splitNode(n).port;
        const end = at[q ?? ""] ?? [180, 70];
        // labels kept inside the drawing (a stub at the edge gets its name pulled in)
        return q ? svg`<text class="fp3d-pc-label" x=${Math.min(162, Math.max(38, end[0]))} y=${end[1] < 70 ? end[1] + 20 : end[1] - 12}>${this.portText(n)}</text>` : nothing;
      })}
    </svg>`;
  }

  /** "T-piece 1", "Y-piece 1", "Hole 2 (wall)": numbered by kind (holes together). */
  private jointLabel(a: OutdoorArea, id: string): string {
    const all = a.pool?.joints ?? [];
    const j = all.find((x) => x.id === id);
    // a pipe left at a piece taken out: it ends open
    if (!j) return this.t("pool_loose_end");
    const group = (k: PoolJoint["kind"]) => (k === "wall" || k === "floor" ? "hole" : (k ?? "tee"));
    if (j.name?.trim()) return j.name.trim();
    const same = all.filter((x) => group(x.kind) === group(j.kind));
    return `${this.t(`joint_${j.kind ?? "tee"}` as I18nKey, { n: same.indexOf(j) + 1 })}`;
  }

  /** Every place a pipe can start or end: the pool's ports, each connection of the devices and joints. */
  private poolEnds(a: OutdoorArea): { node: string; label: string; used: boolean }[] {
    const pipes = a.pool?.pipes ?? [];
    const used = (n: string) => pipes.some((p) => p.from === n || p.to === n);
    const out: { node: string; label: string; used: boolean }[] = [];
    for (const p of a.pool?.ports ?? []) out.push({ node: `port:${p.id}`, label: this.poolNodeLabel(a, `port:${p.id}`), used: false });
    for (const f of this._doc.floors.flatMap((x) => x.furniture).filter((m) => (POOL_DEVICES as readonly string[]).includes(m.type) && m.type !== "pool_valve")) {
      const ports = devicePorts(f.type);
      for (const n of ports.length ? ports.map((q) => `dev:${f.id}:${q}`) : [`dev:${f.id}`]) out.push({ node: n, label: this.poolNodeLabel(a, n), used: ports.length > 0 && used(n) });
    }
    for (const j of a.pool?.joints ?? [])
      for (const q of jointPorts(j.kind)) {
        const n = `joint:${j.id}:${q}`;
        out.push({ node: n, label: this.poolNodeLabel(a, n), used: used(n) });
      }
    return out;
  }

  /**
   * A T- or Y-piece tapped into the plan: on a pipe it is put into the pipe (the pipe is split there), else it
   * stands alone – under the ground outside, at 50 cm in a room – to be joined by pipes.
   */
  private placeJointPlan(a: OutdoorArea, kind: "tee" | "y", world: Vec2, pipeId: string | null): void {
    const floor = this.floor;
    if (!floor) return;
    const nodeAt = poolNodeAt(this._doc, floor, a);
    const pipe = pipeId ? a.pool?.pipes?.find((p) => p.id === pipeId) : undefined;
    if (pipe) {
      // the point of the pipe nearest the tap (in the plan), at the pipe's height there
      const path = pipePath(pipe, nodeAt);
      let best: { p: P3; d: number } | null = null;
      for (let i = 1; i < path.length; i++) {
        const [u, v] = [path[i - 1], path[i]];
        const [dx, dz] = [v[0] - u[0], v[2] - u[2]];
        const l2 = dx * dx + dz * dz;
        const t = l2 > 0 ? Math.max(0, Math.min(1, ((world[0] - u[0]) * dx + (world[1] - u[2]) * dz) / l2)) : 0;
        const q: P3 = [u[0] + dx * t, u[1] + (v[1] - u[1]) * t, u[2] + dz * t];
        const d = Math.hypot(q[0] - world[0], q[2] - world[1]);
        if (!best || d < best.d) best = { p: q, d };
      }
      const cut = best && splitPipe(pipe, nodeAt, best.p, uid("joint"), uid("pipe"));
      if (cut) {
        this.changePool(a.id, (l) => {
          l.joints = [...(l.joints ?? []), { ...cut.joint, kind }];
          // the water comes in at the piece's entry and goes on from its first exit
          l.pipes = (l.pipes ?? []).flatMap((p) => (p.id === pipe.id ? [{ ...cut.first, to: `joint:${cut.joint.id}:in` }, { ...cut.second, from: `joint:${cut.joint.id}:out1` }] : [p]));
        });
        return;
      }
    }
    const inside = floor.rooms.some((r) => r.points.length >= 3 && pointInPolygon(world, r.points));
    const q = this.snap(world);
    this.changePool(a.id, (l) => (l.joints = [...(l.joints ?? []), { id: uid("joint"), kind, x: round(q[0]), z: round(q[1]), y: inside ? 0.5 : -0.3 }]));
  }

  /** Where a node sits in the plan. */
  private poolNodePos(a: OutdoorArea, node: string): Vec2 | null {
    if (!node) return null;
    const floor = this._doc.floors.find((f) => f.outdoor.some((o) => o.id === a.id));
    if (node.startsWith("joint:") || node.split(":").length > 2) {
      const q = floor && poolNodeAt(this._doc, floor, a)(node);
      return q ? [q.x, q.z] : null;
    }
    if (node.startsWith("port:")) {
      const p = a.pool?.ports?.find((x) => x.id === node.slice(5));
      return p ? [p.x, p.z] : null;
    }
    const f = this._doc.floors.flatMap((x) => x.furniture).find((m) => m.id === node.slice(4));
    return f ? [f.x, f.z] : null;
  }

  /** "Skimmer", "Inlet 2", "Heat pump · suction side", "T-piece 1 · out 2", "Hole 2 · outside" … */
  private poolNodeLabel(a: OutdoorArea, node: string): string {
    const { kind, id, port } = splitNode(node);
    if (!node) return this.t("pool_loose_end");
    if (port || kind === "joint") {
      const base = kind === "joint" ? this.jointLabel(a, id) : this.poolNodeLabel(a, `${kind}:${id}`);
      return port ? `${base} · ${this.portText(node)}` : base;
    }
    if (node.startsWith("port:")) {
      const ports = a.pool?.ports ?? [];
      const p = ports.find((x) => x.id === node.slice(5));
      if (!p) return "?";
      const same = ports.filter((x) => x.kind === p.kind);
      return `${this.t(`pool_port_${p.kind}` as I18nKey)}${same.length > 1 ? ` ${same.indexOf(p) + 1}` : ""}`;
    }
    const devs = this._doc.floors.flatMap((x) => x.furniture).filter((m) => (POOL_DEVICES as readonly string[]).includes(m.type));
    const f = devs.find((m) => m.id === node.slice(4));
    if (!f) return "?";
    const same = devs.filter((m) => m.type === f.type);
    return `${f.name || this.t(`furn_${f.type}` as I18nKey)}${same.length > 1 && !f.name ? ` ${same.indexOf(f) + 1}` : ""}`;
  }

  /** The pool tool in the plan: pipes with their flow direction, ports, devices, and the pipe being drawn. */
  private renderPoolPlan(floor: Floor) {
    const a = this.poolArea;
    const devs = floor.furniture.filter((m) => (POOL_DEVICES as readonly string[]).includes(m.type));
    const letter: Record<string, string> = { pool_pump: "P", pool_filter: "F", pool_heat_pump: "W", pool_dosing: "D", pool_valve: "" };
    const pipes = a ? (a.pool?.pipes ?? []).filter((p) => p.floor_id === floor.id) : [];
    const lines = pipes.map((p) => {
      const from = this.poolNodePos(a!, p.from);
      const to = this.poolNodePos(a!, p.to);
      // an older pipe needs both ends; one laid on a wall may end loose
      if ((!from || !to) && !p.heights) return nothing;
      const lead = from ? 1 : 0;
      const pts = [...(from ? [from] : []), ...p.points, ...(to ? [to] : [])].map((q) => this.toScreen(q));
      if (pts.length < 2) return nothing;
      const sel = p.id === this._pipeId;
      // the flow direction: an arrow halfway along the longest piece
      let k = 0;
      for (let i = 1; i < pts.length - 1; i++) if (Math.hypot(pts[i + 1][0] - pts[i][0], pts[i + 1][1] - pts[i][1]) > Math.hypot(pts[k + 1][0] - pts[k][0], pts[k + 1][1] - pts[k][1])) k = i;
      const [x0, y0] = pts[k];
      const [x1, y1] = pts[k + 1];
      const ang = (Math.atan2(y1 - y0, x1 - x0) * 180) / Math.PI;
      const line = pts.map((q) => q.join(",")).join(" ");
      return svg`<g data-pipe=${p.id}>
        <polyline class="fp3d-pipe-hit" points=${line} />
        <polyline class="fp3d-pipe ${sel ? "fp3d-pipe-sel" : ""}" points=${line} />
        <path class="fp3d-pipe-arrow" d="M -6 -5 L 5 0 L -6 5 Z" transform=${`translate(${(x0 + x1) / 2} ${(y0 + y1) / 2}) rotate(${ang})`} />
        ${sel && this.isAdmin
          ? svg`${pts.slice(0, -1).map((q, i) => svg`<line class="fp3d-pipe-seg" data-pipe-seg=${`${p.id}:${i + 1 - lead}`} x1=${q[0]} y1=${q[1]} x2=${pts[i + 1][0]} y2=${pts[i + 1][1]} />`)}
              ${p.points.map((q, i) => {
                const [x, y] = this.toScreen(q);
                return svg`<g class="fp3d-vertex" data-pipe-pt=${`${p.id}:${i}`}><circle cx=${x} cy=${y} r="14" class="fp3d-hit" /><circle cx=${x} cy=${y} r="5" /></g>`;
              })}`
          : nothing}
      </g>`;
    });
    const node = (id: string, at: Vec2, label: string, cls: string, title: string) => {
      const [x, y] = this.toScreen(at);
      return svg`<g class="fp3d-pool-node ${cls}" data-pool-node=${id}><title>${title}</title><circle cx=${x} cy=${y} r="16" class="fp3d-hit" /><circle cx=${x} cy=${y} r="10" /><text x=${x} y=${y}>${label}</text></g>`;
    };
    const ports = a ? (a.pool?.ports ?? []).map((p) => node(`port:${p.id}`, [p.x, p.z], { skimmer: "S", drain: "B", inlet: "E", waste: "A" }[p.kind], `fp3d-pool-port-${p.kind}`, this.poolNodeLabel(a, `port:${p.id}`))) : [];
    const devices = devs.map((f) => node(`dev:${f.id}`, [f.x, f.z], f.type === "pool_valve" ? (f.valve_open === false ? "✕" : "") : letter[f.type], `fp3d-pool-dev ${f.type === "pool_valve" && f.valve_open === false ? "fp3d-pool-closed" : ""}`, a ? this.poolNodeLabel(a, `dev:${f.id}`) : f.type));
    let draft: unknown = nothing;
    if (a && this._pipeDraft) {
      const from = this._pipeDraft.extend?.at ?? this.poolNodePos(a, this._pipeDraft.from);
      if (from) {
        const pts = [from, ...this._pipeDraft.points, ...(this._cursor ? [this._cursor] : [])].map((q) => this.toScreen(q).join(",")).join(" ");
        draft = svg`<polyline class="fp3d-pipe fp3d-pipe-draft" points=${pts} />`;
      }
    }
    // T- and Y-pieces and holes: dragged in the plan, pipes drawn from and to them
    const joints = a ? (a.pool?.joints ?? []).map((j) => node(`joint:${j.id}`, [j.x, j.z], j.kind === "wall" || j.kind === "floor" ? "◎" : j.kind === "y" ? "Y" : "T", "fp3d-pool-jointnode", this.jointLabel(a, j.id))) : [];
    // loose ends of pipes laid on walls: in the pipe drawing a tap goes on from there
    const ends = pipes.flatMap((p) =>
      p.heights && p.points.length
        ? (["from", "to"] as const)
            .filter((k) => !p[k])
            .map((k) => {
              const [x, y] = this.toScreen(k === "to" ? p.points[p.points.length - 1] : p.points[0]);
              return svg`<g class="fp3d-pipe-end" data-pipe-end=${`${p.id}|${k}`}><circle cx=${x} cy=${y} r="14" class="fp3d-hit" /><circle cx=${x} cy=${y} r="6" /></g>`;
            })
        : [],
    );
    return svg`<g class="fp3d-pool-plan">${lines}${draft}${joints}${ends}${ports}${devices}</g>`;
  }

  /** The pool tool's sidebar: the pool's form, its ports, the technical room's devices and the pipes. */
  private renderPoolPanel(floor: Floor | undefined) {
    const pools = floor?.outdoor.filter((x) => x.type === "pool") ?? [];
    const a = this.poolArea;
    if (!a)
      return html`<section>
        <h3>🏊 ${this.t("tool_pool")}</h3>
        <p class="fp3d-sub">${this.t(pools.length ? "pool_choose" : "pool_tool_empty")}</p>
        ${pools.length
          ? html`<div class="fp3d-actions">${pools.map((p, i) => html`<button class="fp3d-btn" @click=${() => this.selectItem("outdoor", p.id)}>🏊 ${this.t("out_pool")} ${pools.length > 1 ? i + 1 : ""}</button>`)}</div>`
          : nothing}
      </section>`;
    return html`${pools.length > 1
        ? html`<section>
            <div class="fp3d-seg">${pools.map((p, i) => html`<button aria-pressed=${p.id === a.id} @click=${() => this.selectItem("outdoor", p.id)}>🏊 ${i + 1}</button>`)}</div>
          </section>`
        : nothing}
      ${this.renderPoolTech(a)} ${this.renderOutdoorForm(a)}`;
  }

  private renderPoolTech(a: OutdoorArea) {
    // pool equipment, ports and pipes: only with a module that knows pipes (Pool Pro)
    if (!this.pipeRules) return nothing;
    const admin = this.isAdmin;
    const ports = a.pool?.ports ?? [];
    const pipes = a.pool?.pipes ?? [];
    const devs = this._doc.floors.flatMap((f) => f.furniture).filter((m) => (POOL_DEVICES as readonly string[]).includes(m.type));
    const pipe = pipes.find((p) => p.id === this._pipeId);
    return html`<section>
        <button class="fp3d-btn fp3d-primary fp3d-wide" ?disabled=${!admin} title=${this.t("tech_open_hint")} @click=${() => {
          this.techPick = true;
          this._wallPick = true;
        }}>🛠 ${this.t("tech_open")}</button>
        <p class="fp3d-sub">${this.t("tech_open_hint")}</p>
      </section>
      <section>
        <h3>${this.t("pool_ports")}</h3>
        <div class="fp3d-actions">
          ${(["skimmer", "drain", "inlet", "waste"] as const).map((k) => html`<button class="fp3d-btn" ?disabled=${!admin} @click=${() => this.addPoolPort(k)}>+ ${this.t(`pool_port_${k}` as I18nKey)}</button>`)}
        </div>
        ${ports.map(
          (p) => html`<div class="fp3d-pool-row">
            <button class="fp3d-link" title=${this.t("card_open")} @click=${() => this.openCard(a.id, `port:${p.id}`)}>${this.poolNodeLabel(a, `port:${p.id}`)}</button>
            <span class="fp3d-muted">${this.partStatus(a, `port:${p.id}`)[0] ? "✓" : "○"}</span>
            ${p.kind === "inlet" || p.kind === "skimmer"
              ? html`<label class="fp3d-pool-depth" title=${this.t("pool_port_depth_hint")}
                  >${this.t("pool_port_depth")}
                  <input type="number" step="0.05" min="0" max="3" .value=${String(p.depth ?? (p.kind === "inlet" ? 0.3 : 0))} ?disabled=${!admin} @change=${(e: Event) => {
                    const v = Number((e.target as HTMLInputElement).value.replace(",", "."));
                    if (!Number.isFinite(v)) return;
                    this.change((_, floor) => {
                      const q = floor.outdoor.find((o) => o.id === a.id)?.pool?.ports?.find((x) => x.id === p.id);
                      if (q) q.depth = Math.min(3, Math.max(0, round(v)));
                    });
                  }} />m</label
                >`
              : nothing}
            <button class="fp3d-btn fp3d-danger" ?disabled=${!admin} title=${this.t("delete")} @click=${() => this.deletePoolPort(a.id, p.id)}>✕</button>
          </div>`,
        )}
        <p class="fp3d-sub">${this.t("pool_ports_hint")}</p>
      </section>
      <section>
        <h3>${this.t("pool_devices")}</h3>
        <div class="fp3d-actions">
          ${POOL_DEVICES.filter((t) => t !== "pool_valve").map((t) => html`<button class="fp3d-btn" ?disabled=${!admin} @click=${() => this.addPoolDevice(t)}>+ ${this.t(`furn_${t}` as I18nKey)}</button>`)}
          <button class="fp3d-btn ${this._jointPlace === "tee" ? "fp3d-primary" : ""}" ?disabled=${!admin} title=${this.t("hint_joint_place")} @click=${() => (this._jointPlace = this._jointPlace === "tee" ? null : "tee")}>+ ${this.t("joint_add_tee")}</button>
          <button class="fp3d-btn ${this._jointPlace === "y" ? "fp3d-primary" : ""}" ?disabled=${!admin} title=${this.t("hint_joint_place")} @click=${() => (this._jointPlace = this._jointPlace === "y" ? null : "y")}>+ ${this.t("joint_add_y")}</button>
        </div>
        ${devs.map(
          (f) => html`<div class="fp3d-pool-row">
            <button class="fp3d-link" title=${this.t("card_open")} @click=${() => this.openCard(a.id, `dev:${f.id}`)}>${this.poolNodeLabel(a, `dev:${f.id}`)}</button>
            <span class="fp3d-ports">${devicePorts(f.type).map((q) => html`<i class=${pipes.some((p) => p.from === `dev:${f.id}:${q}` || p.to === `dev:${f.id}:${q}`) ? "fp3d-on" : ""}>${this.t(`port_${q}` as I18nKey)}</i>`)}</span>
            ${f.type === "pool_filter"
              ? html`<select ?disabled=${!admin} title=${this.t("pool_valve_type")} @change=${(e: Event) => this.setPoolDevice(f.id, { variant: (e.target as HTMLSelectElement).value === "top6" ? null : (e.target as HTMLSelectElement).value })}>
                    ${FILTER_VALVES.map((v) => html`<option value=${v} ?selected=${(f.variant ?? "top6") === v}>${this.t(`valve_${v}` as I18nKey)}</option>`)}
                  </select>
                  <select ?disabled=${!admin} title=${this.t("pool_valve_position")} @change=${(e: Event) => this.setPoolDevice(f.id, { valve_position: (e.target as HTMLSelectElement).value as ValvePosition })}>
                  ${VALVE_POSITIONS.map((v) => html`<option value=${v} ?selected=${(f.valve_position ?? "filter") === v}>${this.t(`valve_${v}` as I18nKey)}</option>`)}
                </select>`
              : f.type === "pool_heat_pump"
                ? html`<select ?disabled=${!admin} title=${this.t("hp_ports")} @change=${(e: Event) => this.setPoolDevice(f.id, { variant: (e.target as HTMLSelectElement).value === "right" ? null : (e.target as HTMLSelectElement).value })}>
                    ${(["right", "left", "back"] as const).map((v) => html`<option value=${v} ?selected=${(f.variant ?? "right") === v}>${this.t("hp_ports")}: ${this.t(`hp_side_${v}` as I18nKey)}</option>`)}
                  </select>`
              : f.type === "pool_valve"
                ? html`<label class="fp3d-check"
                    ><input type="checkbox" .checked=${f.valve_open !== false} ?disabled=${!admin} @change=${(e: Event) => this.setPoolDevice(f.id, { valve_open: (e.target as HTMLInputElement).checked ? null : false })} />
                    ${this.t("pool_valve_open")}</label
                  >`
                : nothing}
            <button class="fp3d-btn fp3d-danger" ?disabled=${!admin} title=${this.t("delete")} @click=${() => this.deletePoolDevice(f.id)}>✕</button>
          </div>`,
        )}
        ${(a.pool?.joints ?? []).map(
          (j) => html`<div class="fp3d-pool-row">
            <button class="fp3d-link" title=${this.t("card_open")} @click=${() => this.openCard(a.id, `joint:${j.id}`)}>${this.jointLabel(a, j.id)}</button>
            <span class="fp3d-ports">${jointPorts(j.kind).map((q) => {
              const n = `joint:${j.id}:${q}`;
              const on = pipes.some((p) => p.from === n || p.to === n || ((j.kind ?? "tee") !== "wall" && (j.kind ?? "tee") !== "floor" && nodePart(p.from) === `joint:${j.id}` && !splitNode(p.from).port && q === "in"));
              return html`<i class=${on ? "fp3d-on" : ""} title=${this.portText(n)}>${this.portText(n)}</i>`;
            })}</span>
            <button class="fp3d-btn fp3d-danger" ?disabled=${!admin} title=${this.t("delete")} @click=${() =>
              this.changePool(a.id, (l) => {
                l.joints = (l.joints ?? []).filter((x) => x.id !== j.id);
                l.pipes = (l.pipes ?? []).filter((p) => nodePart(p.from) !== `joint:${j.id}` && nodePart(p.to) !== `joint:${j.id}`);
              })}>✕</button>
          </div>`,
        )}
        <p class="fp3d-sub">${this.t("pool_holes_hint")}</p>
      </section>

      <section>
        <h3>${this.t("pool_pipes")}</h3>
        <div class="fp3d-actions">
          <button class="fp3d-btn ${this._pipeMode ? "fp3d-primary" : ""}" ?disabled=${!admin} @click=${() => ((this._pipeMode = !this._pipeMode), (this._pipeDraft = null))}>〰 ${this.t("pool_pipe_draw")}</button>
        </div>
        <p class="fp3d-sub">${this.t("pool_pipe_draw_hint")}</p>
        ${pipes.map(
          (p) => html`<div class="fp3d-pool-row ${p.id === this._pipeId ? "fp3d-pool-row-sel" : ""}">
            <button class="fp3d-link" @click=${() => (this._pipeId = p.id)}>${this.poolNodeLabel(a, p.from)} → ${this.poolNodeLabel(a, p.to)}</button>
            <button class="fp3d-btn" ?disabled=${!admin} title=${this.t("pool_pipe_reverse")} @click=${() => this.changePool(a.id, (l) => { const q = l.pipes?.find((x) => x.id === p.id); if (q) [q.from, q.to, q.points] = [q.to, q.from, [...q.points].reverse()]; })}>⇄</button>
            <button class="fp3d-btn fp3d-danger" ?disabled=${!admin} title=${this.t("delete")} @click=${() => this.changePool(a.id, (l) => (l.pipes = (l.pipes ?? []).filter((x) => x.id !== p.id)))}>✕</button>
          </div>`,
        )}
        ${pipe
          ? html`<div class="fp3d-form">
              ${this.len(this.t("pool_pipe_height"), pipe.height ?? 0.3, (v) => this.changePool(a.id, (l) => { const q = l.pipes?.find((x) => x.id === pipe.id); if (q) q.height = Math.min(10, Math.max(-5, round(v))); }), 0.05)}
            </div>`
          : nothing}
      </section>`;
  }

  /** A pool's shape and size (a round one by its diameter, an oval one by its box) and whether it stands above ground. */
  private renderPoolShape(a: OutdoorArea) {
    const admin = this.isAdmin;
    const b = bounds(a.points);
    const shape = a.pool_shape;
    const resize = (x0: number, z0: number, x1: number, z1: number) => shape && this.updateOutdoor({ points: poolShapePoints(shape, x0, z0, x1, z1) });
    const cx = (b.x0 + b.x1) / 2;
    const cz = (b.z0 + b.z1) / 2;
    return html`${shape === "round"
        ? html`${this.len(this.t("pool_diameter"), b.x1 - b.x0, (v) => {
            const r = Math.max(0.5, v) / 2;
            resize(cx - r, cz - r, cx + r, cz + r);
          }, 0.01, 1)}`
        : shape === "oval"
          ? html`${this.len(this.t("width"), b.x1 - b.x0, (v) => resize(cx - Math.max(1, v) / 2, b.z0, cx + Math.max(1, v) / 2, b.z1), 0.01, 1)}
            ${this.len(this.t("depth"), b.z1 - b.z0, (v) => resize(b.x0, cz - Math.max(1, v) / 2, b.x1, cz + Math.max(1, v) / 2), 0.01, 1)}`
          : nothing}
      <label class="fp3d-check fp3d-wide" title=${this.t("pool_above_hint")}
        ><input type="checkbox" .checked=${!!a.above} ?disabled=${!admin} @change=${(ev: Event) => this.updateOutdoor({ above: (ev.target as HTMLInputElement).checked || undefined })} />
        ${this.t("pool_above")}</label
      >
      ${a.above ? this.len(this.t("pool_height"), poolHeight(a), (v) => this.updateOutdoor({ height: Math.min(2.5, Math.max(0.4, round(v))) }), 0.05, 0.4) : nothing}
      ${this.len(this.t("pool_depth"), poolDepth(a), (v) => this.updateOutdoor({ depth: Math.min(5, Math.max(0.3, round(v))) }), 0.05, 0.3)}
      ${a.above ? nothing : this.len(this.t("pool_rim"), a.rim ?? 0.06, (v) => this.updateOutdoor({ rim: Math.min(2, Math.max(-0.3, round(v))) }), 0.01, -0.3)}
      <p class="fp3d-sub fp3d-wide">${this.t("pool_depth_hint")}</p>
      ${!a.above && this.floor && !poolSunken(this.floor, a) ? html`<p class="fp3d-sub fp3d-wide fp3d-warn">${this.t("pool_depth_ground")}</p>` : nothing}`;
  }

  /** The pipe rules of a loaded module (Pool Pro); without them the pipe tools stay hidden. */
  private get pipeRules(): PipeRules | null {
    return modulePipeRules();
  }

  /** The host a module gets from the editor: the plan as edited here, and the means to change it. */
  private editorHost(): ModuleHost {
    const hass = this.hass!;
    return {
      api: 1,
      hass: () => hass,
      building: () => this._doc,
      language: () => hass.language || "en",
      devices: () => [],
      findDevice: () => null,
      openings: () => [],
      energy: () => null,
      consumers: () => [],
      canEdit: () => this.isAdmin,
      updateBuilding: (mutate) => this.change((doc) => mutate(doc)),
      callService: (domain, service, data) => hass.callService(domain, service, data),
      newId: (prefix) => uid(prefix),
      refresh: () => {
        // a module changed its own state (a demo started): its fields are made anew
        this._moduleFieldMemo = null;
        this.requestUpdate();
      },
      plan: pipePlanner,
    };
  }

  /**
   * A module's fields, made only when the item, the plan or Home Assistant's devices change – not on every state
   * change: Wärme Pro searches every entity for its form, and made anew several times a second it kept the CPU busy
   * and closed an open selection list at once (#815).
   */
  private _moduleFieldMemo: { item: object; doc: unknown; entities: unknown; lang: string; fields: ModuleField[] } | null = null;
  private memoFields(item: object, make: () => ModuleField[]): ModuleField[] {
    const m = this._moduleFieldMemo;
    const hass = this.hass!;
    if (m && m.item === item && m.doc === this._doc && m.entities === hass.entities && m.lang === hass.language) return m.fields;
    const fields = make();
    this._moduleFieldMemo = { item, doc: this._doc, entities: hass.entities, lang: hass.language, fields };
    return fields;
  }

  /** Fields a module adds to an outdoor area's form (Pool Pro: the pool's entities, the assistant), rendered here. */
  private renderModuleFields(a: OutdoorArea) {
    if (!this.hass) return nothing;
    return this.renderFields(this.memoFields(a, () => moduleAreaFields(this.editorHost(), a)));
  }

  /** Fields a module adds to a room's form (the room's own speaker for the announcements). */
  private renderModuleRoomFields(room: Room) {
    const floor = this.floor;
    if (!this.hass || !floor) return nothing;
    return this.renderFields(this.memoFields(room, () => moduleRoomFields(this.editorHost(), room, floor)), false);
  }

  /** Fields a module adds to a piece of furniture's form (a device's entities, a setup assistant). */
  private renderModuleFurnitureFields(f: Furniture) {
    if (!this.hass) return nothing;
    return this.renderFields(this.memoFields(f, () => moduleFurnitureFields(this.editorHost(), f)));
  }

  /** A module's fields, drawn like the editor's own. */
  private renderFields(fields: ModuleField[], wrap = true) {
    if (!fields.length) return nothing;
    const admin = this.isAdmin;
    const field = (f: ModuleField) => {
      switch (f.kind) {
        case "heading":
          return html`<h3>${f.text}</h3>`;
        case "text":
          return html`<p class="fp3d-sub fp3d-wide">${f.text}</p>`;
        case "entity":
          return this.entitySelect(f.label, f.value, f.auto, this.entityOptions(f.filter), (v) => f.set(v));
        case "select":
          return html`<label class="fp3d-field fp3d-wide"
            >${f.label}
            <select ?disabled=${!admin} @change=${(e: Event) => f.set((e.target as HTMLSelectElement).value)}>
              ${f.options.map((o) => html`<option value=${o.id} ?selected=${o.id === f.value}>${o.label}</option>`)}
            </select></label
          >`;
        case "check":
          return html`<label class="fp3d-check fp3d-wide"><input type="checkbox" .checked=${f.value} ?disabled=${!admin} @change=${(e: Event) => f.set((e.target as HTMLInputElement).checked)} /> ${f.label}</label>`;
        case "button":
          return html`<button class="fp3d-btn ${f.primary ? "fp3d-primary" : ""} fp3d-wide" ?disabled=${!admin} title=${f.title ?? ""} @click=${() => f.onTap()}>${f.label}</button>`;
        case "lines":
          return linesField(f.value, !admin, { label: f.label, placeholder: f.placeholder ?? this.t("lines_new"), add: this.t("lines_add"), remove: this.t("delete") }, (v) => f.set(v), true);
      }
    };
    if (!wrap) return fields.map(field);
    return html`<section>
      <div class="fp3d-form fp3d-links">${fields.map(field)}</div>
    </section>`;
  }

  private renderRooms(floor: Floor) {
    return svg`
      <g>${floor.rooms.map((r) => {
        const pts = r.points.map((p) => this.toScreen(p).join(",")).join(" ");
        return svg`<polygon data-room=${r.id} class=${r.id === this._roomId ? "fp3d-room fp3d-room-sel" : "fp3d-room"} points=${pts} />`;
      })}</g>
      ${this.renderEdgeHighlight()}
      <g pointer-events="none">${floor.rooms.map((r) => {
        const [cx, cy] = this.toScreen(centroid(r.points));
        return svg`<text class="fp3d-room-name" x=${cx} y=${cy - 2}>${r.name}</text>
          <text class="fp3d-room-area" x=${cx} y=${cy + 14}>${this.area(polygonArea(r.points))}</text>`;
      })}</g>
    `;
  }

  /** The wall of the selected room whose row in the wall height list is hovered. */
  private renderEdgeHighlight() {
    const r = this.room;
    const i = this._edgeHi;
    if (!r || i === null || i >= r.points.length) return nothing;
    const [x1, y1] = this.toScreen(r.points[i]);
    const [x2, y2] = this.toScreen(r.points[(i + 1) % r.points.length]);
    return svg`<line class="fp3d-edge-hi" pointer-events="none" x1=${x1} y1=${y1} x2=${x2} y2=${y2} />`;
  }

  private renderMeter(floor: Floor) {
    const m = this._doc.energy?.meter;
    if (!m || m.floor_id !== floor.id) return nothing;
    const [x, y] = this.toScreen([m.x, m.z]);
    return svg`<g class="fp3d-meter" transform="translate(${x} ${y})" pointer-events="none">
      <rect x="-11" y="-11" width="22" height="22" rx="5" />
      <path d="M1.5 -7 L-4 1 H0 L-1.5 7 L4 -1 H0 Z" />
    </g>`;
  }

  private renderFurniture(floor: Floor) {
    const k = this._view.scale;
    const set = this._furnitureId ? this.selection() : [];
    const many = set.length > 1;
    return svg`<g>${this.renderSelectionFrame(floor, set)}${floor.furniture.map((f) => {
      const member = set.includes(f.id);
      const sel = f.id === this._furnitureId && !many;
      const [cx, cy] = this.toScreen([f.x, f.z]);
      const big = Math.min(f.w, f.d) * k > 44;
      // the handle sits in front of the item; dragging it turns the item
      const a = (f.rotation * Math.PI) / 180;
      const reach = f.d / 2 + Math.max(0.3, 26 / k);
      const [hx, hy] = this.toScreen([f.x - Math.sin(a) * reach, f.z + Math.cos(a) * reach]);
      const [fx, fy] = this.toScreen([f.x - Math.sin(a) * (f.d / 2), f.z + Math.cos(a) * (f.d / 2)]);
      const lit = isLamp(f.type) && !!f.entity && f.entity !== "none" && this.hass?.states[f.entity]?.state === "on";
      return svg`<g data-furniture=${f.id} class=${`fp3d-furn${sel || member ? " fp3d-furn-sel" : ""}${lit ? " fp3d-furn-lit" : ""}${(ENERGY_DEVICES as readonly string[]).includes(f.type) ? " fp3d-energy-item" : ""}`}>
        <g transform="translate(${cx} ${cy}) rotate(${f.rotation}) scale(${f.mirror ? -k : k} ${k})">
          <rect class="fp3d-furn-body" x=${-f.w / 2} y=${-f.d / 2} width=${f.w} height=${f.d} />
          <g class="fp3d-furn-sym">${furnitureSymbol(f.type, f.w, f.d)}</g>
          <line class="fp3d-furn-front" x1=${-f.w / 2} y1=${f.d / 2} x2=${f.w / 2} y2=${f.d / 2} />
        </g>
        ${big ? svg`<text x=${cx} y=${cy + 4}>${furnitureName(this.hass, f.type)}</text>` : nothing}
      </g>
      ${sel && this.isAdmin && !f.locked
        ? ([[-1, -1], [1, -1], [1, 1], [-1, 1]] as const).map(([sx, sz]) => {
            const [x, y] = this.toScreen([f.x + (sx * f.w * Math.cos(a)) / 2 - (sz * f.d * Math.sin(a)) / 2, f.z + (sx * f.w * Math.sin(a)) / 2 + (sz * f.d * Math.cos(a)) / 2]);
            return svg`<g class="fp3d-resize" data-resize=${`${f.id}:${sx}:${sz}`}>
              <circle cx=${x} cy=${y} r="14" class="fp3d-hit" />
              <rect x=${x - 5} y=${y - 5} width="10" height="10" rx="2" />
            </g>`;
          })
        : nothing}
      ${sel
        ? (() => {
            // behind the item, away from the turn handle in front
            const [lx, ly] = this.toScreen([f.x + Math.sin(a) * (f.d / 2 + 18 / k), f.z - Math.cos(a) * (f.d / 2 + 18 / k)]);
            return svg`<text class="fp3d-dim" x=${lx} y=${ly + 4}>${this.m(f.w, 2)} × ${this.m(f.d, 2)}</text>`;
          })()
        : nothing}
      ${sel && f.locked ? svg`<text class="fp3d-lock" x=${hx} y=${hy + 5}>🔒</text>` : nothing}
      ${sel && this.isAdmin && !f.locked
        ? svg`<g class="fp3d-rotate" data-rotate=${f.id}>
            <line x1=${fx} y1=${fy} x2=${hx} y2=${hy} />
            <circle cx=${hx} cy=${hy} r="16" class="fp3d-hit" />
            <circle cx=${hx} cy=${hy} r="8" />
            <path d="M${hx - 4} ${hy - 1}a4 4 0 1 1 2 3.5" />
          </g>`
        : nothing}`;
    })}</g>`;
  }

  /** A dashed frame around several selected items (a block or a multi selection), and the frame being drawn. */
  private renderSelectionFrame(floor: Floor, set: string[]) {
    const d = this.drag;
    const drawing = d?.kind === "marquee" ? svg`<rect class="fp3d-marquee" x=${Math.min(...[d.start, d.end].map((p) => this.toScreen(p)[0]))} y=${Math.min(...[d.start, d.end].map((p) => this.toScreen(p)[1]))} width=${Math.abs(this.toScreen(d.end)[0] - this.toScreen(d.start)[0])} height=${Math.abs(this.toScreen(d.end)[1] - this.toScreen(d.start)[1])} />` : nothing;
    if (set.length < 2) return drawing;
    const pts = floor.furniture.filter((m) => set.includes(m.id)).flatMap((m) => furnitureFootprint(m));
    if (!pts.length) return drawing;
    const [x0, y0] = this.toScreen([Math.min(...pts.map((p) => p[0])), Math.min(...pts.map((p) => p[1]))]);
    const [x1, y1] = this.toScreen([Math.max(...pts.map((p) => p[0])), Math.max(...pts.map((p) => p[1]))]);
    const block = !this._multi.length;
    return svg`${drawing}<g class=${`fp3d-selframe${block ? " fp3d-selframe-block" : ""}`}>
      <rect x=${x0 - 6} y=${y0 - 6} width=${x1 - x0 + 12} height=${y1 - y0 + 12} rx="6" />
      <text x=${x0 - 4} y=${y0 - 12}>${block ? `▣ ${this.t("block_title")} · ${set.length}` : this.t("multi_title", { n: set.length })}</text>
    </g>`;
  }

  /** Side panel for several items: a block (or a multi selection that can become one). */
  private renderBlockForm() {
    const set = this.selection();
    const items = (this.floor?.furniture ?? []).filter((m) => set.includes(m.id));
    const block = !this._multi.length && !!items[0]?.group;
    const fixed = items.every((m) => this.isFixedItem("furniture", m.id));
    const some = !fixed && items.some((m) => this.isFixedItem("furniture", m.id));
    return html`<section>
      <div class="fp3d-h3row"><h3>${block ? `▣ ${this.t("block_title")}` : this.t("multi_title", { n: items.length })}</h3></div>
      <p class="fp3d-sub">${this.t(block ? "block_hint" : "multi_hint")}</p>
      ${some ? html`<p class="fp3d-sub fp3d-wv-fixnote">${this.t("block_some_fixed")}</p>` : nothing}
      <div class="fp3d-block-parts">
        ${items.map(
          (m) => html`<button class="fp3d-chip" title=${this.t("block_part_edit")} @click=${() => {
            this.selectItem("furniture", m.id);
            this._single = !!m.group;
          }}>${m.name || furnitureName(this.hass, m.type)}</button>`,
        )}
      </div>
      <div class="fp3d-actions">
        ${block
          ? html`<button class="fp3d-btn" @click=${() => this.ungroupSelection()}>${this.t("block_break")}</button>`
          : html`<button class="fp3d-btn fp3d-primary" @click=${() => this.groupSelection()}>▣ ${this.t("block_make")}</button>`}
        <button class="fp3d-btn" @click=${() => this.rotateSelection(-90)}>${this.t("rotate_left")}</button>
        <button class="fp3d-btn" @click=${() => this.rotateSelection(90)}>${this.t("rotate_right")}</button>
        <button class="fp3d-btn" @click=${() => this.duplicateFurniture()}>${this.t("duplicate")}</button>
        <button class="fp3d-btn ${some ? "fp3d-primary" : ""}" @click=${() => this.lockSelection(!fixed && !some)}>${fixed ? `🔓 ${this.t("unfix")}` : some ? `🔓 ${this.t("unfix_all")}` : `🔒 ${this.t("fix")}`}</button>
        <button class="fp3d-btn fp3d-danger" @click=${() => this.deleteFurniture()}>${this.t("delete")}</button>
      </div>
      ${this.renderMultiToggle()}
    </section>`;
  }

  /** Touch has no shift key: this switch makes taps add items and a drag on empty ground draw a frame. */
  private renderMultiToggle() {
    return html`<label class="fp3d-check fp3d-multi-toggle"><input type="checkbox" .checked=${this._multiMode} @change=${(e: Event) => (this._multiMode = (e.target as HTMLInputElement).checked)} /> ${this.t("multi_mode")}</label>`;
  }

  private renderOpenings(floor: Floor, walls: Wall[]) {
    return svg`<g>${floor.openings.map((o) => {
      const host = openingHost(o, floor.rooms, floor.walls ?? []);
      if (!host) return nothing;
      const { room, edge } = host;
      const hit = locateOpening(walls, o, host);
      const p0 = pointOnRoomEdge(room, edge, o.offset - o.width / 2);
      const p1 = pointOnRoomEdge(room, edge, o.offset + o.width / 2);
      const ux = (p1[0] - p0[0]) / (o.width || 1);
      const uz = (p1[1] - p0[1]) / (o.width || 1);
      // normal into the room (room outlines may run either way round)
      const sgn = signedArea(room.points) >= 0 ? 1 : -1;
      const n: Vec2 = [-uz * sgn, ux * sgn];
      // gap across the whole wall thickness
      let across: [number, number] = [0.06, 0.06];
      if (hit) across = hit.wall.free || hit.wall.roomLeft === room.id ? [hit.wall.left, hit.wall.right] : [hit.wall.right, hit.wall.left];
      const q = (p: Vec2, k: number) => this.toScreen([p[0] + n[0] * k, p[1] + n[1] * k]);
      const gap = [q(p0, across[0] + 0.01), q(p1, across[0] + 0.01), q(p1, -across[1] - 0.01), q(p0, -across[1] - 0.01)];
      const sel = o.id === this._openingId;
      const style = openingStyle(o, hit?.wall.exterior ?? false);
      const front = o.type === "door" && isFrontDoor(style);
      const cls = `fp3d-open fp3d-open-${o.type}${front ? " fp3d-open-front" : ""}${sel ? " fp3d-open-sel" : ""}`;
      let symbol;
      if (o.type === "garage") {
        // door panel just inside the room, with its track under the ceiling drawn dashed
        const a0 = q(p0, across[0] - 0.04);
        const a1 = q(p1, across[0] - 0.04);
        const b0 = q(p0, across[0] + Math.min(2, o.height));
        const b1 = q(p1, across[0] + Math.min(2, o.height));
        symbol = svg`<line x1=${a0[0]} y1=${a0[1]} x2=${a1[0]} y2=${a1[1]} />
          <path class="fp3d-open-track" d="M${a0[0]} ${a0[1]}L${b0[0]} ${b0[1]}M${a1[0]} ${a1[1]}L${b1[0]} ${b1[1]}" />`;
      } else if (o.type === "door") {
        // leaves swinging into the room (or out of it) from the hinge side; "left" is seen from the
        // room, so it depends on which way round the outline runs
        const out = o.swing === "out";
        const face = out ? -across[1] : across[0];
        const hingeAtP0 = (o.hinge === "left") === sgn > 0;
        const two = o.leaves === 2;
        // sidelights: fixed glass beside the leaf, drawn like window panes
        let l0 = p0;
        let l1 = p1;
        let panes: [Vec2, Vec2][] = [];
        const lights = sidelightLayout(o.width, style, hingeAtP0, o);
        if (lights) {
          const at = (k: number): Vec2 => (k <= 0.02 ? p0 : k >= o.width - 0.02 ? p1 : pointOnRoomEdge(room, edge, o.offset - o.width / 2 + k));
          l0 = at(lights.x0);
          l1 = at(lights.x1);
          panes = lights.panels.map(([a, b]) => [at(a), at(b)]);
        }
        const midP: Vec2 = [(l0[0] + l1[0]) / 2, (l0[1] + l1[1]) / 2];
        const leafW = (two ? 0.5 : 1) * Math.hypot(l1[0] - l0[0], l1[1] - l0[1]);
        const mid = (across[0] - across[1]) / 2;
        const paneLines = panes.map(([a, b]) => {
          const a0 = q(a, mid + 0.035);
          const b0 = q(b, mid + 0.035);
          const a1 = q(a, mid - 0.035);
          const b1 = q(b, mid - 0.035);
          return svg`<line class="fp3d-open-pane" x1=${a0[0]} y1=${a0[1]} x2=${b0[0]} y2=${b0[1]} /><line class="fp3d-open-pane" x1=${a1[0]} y1=${a1[1]} x2=${b1[0]} y2=${b1[1]} />`;
        });
        const arc = (hinge: Vec2, free: Vec2) => {
          const [hx, hy] = q(hinge, face);
          const [fx, fy] = q(free, face);
          const leaf = q(hinge, face + (out ? -leafW : leafW));
          const r = leafW * this._view.scale;
          const cross = (leaf[0] - hx) * (fy - hy) - (leaf[1] - hy) * (fx - hx);
          return svg`<path d="M${hx} ${hy}L${leaf[0]} ${leaf[1]}A${r} ${r} 0 0 ${cross > 0 ? 1 : 0} ${fx} ${fy}" />`;
        };
        symbol = svg`${paneLines}${
          style === "passage"
            ? svg`<line class="fp3d-open-passage" x1=${q(p0, mid)[0]} y1=${q(p0, mid)[1]} x2=${q(p1, mid)[0]} y2=${q(p1, mid)[1]} />`
            : style === "sliding"
            ? svg`<line x1=${q(l0, face)[0]} y1=${q(l0, face)[1]} x2=${q(l1, face)[0]} y2=${q(l1, face)[1]} />`
            : two
              ? svg`${arc(l0, midP)}${arc(l1, midP)}`
              : arc(hingeAtP0 ? l0 : l1, hingeAtP0 ? l1 : l0)
        }`;
      } else {
        // two panes in the middle of the wall; a double window has a post in the middle
        const mid = (across[0] - across[1]) / 2;
        const a0 = q(p0, mid + 0.035);
        const a1 = q(p1, mid + 0.035);
        const b0 = q(p0, mid - 0.035);
        const b1 = q(p1, mid - 0.035);
        const midP: Vec2 = [(p0[0] + p1[0]) / 2, (p0[1] + p1[1]) / 2];
        const m0 = q(midP, across[0]);
        const m1 = q(midP, -across[1]);
        symbol = svg`<line x1=${a0[0]} y1=${a0[1]} x2=${a1[0]} y2=${a1[1]} /><line x1=${b0[0]} y1=${b0[1]} x2=${b1[0]} y2=${b1[1]} />${
          o.leaves === 2 ? svg`<line x1=${m0[0]} y1=${m0[1]} x2=${m1[0]} y2=${m1[1]} />` : nothing
        }`;
      }
      // a wide invisible band along the opening, so a door is easy to tap again (#312)
      const h0 = q(p0, (across[0] - across[1]) / 2);
      const h1 = q(p1, (across[0] - across[1]) / 2);
      return svg`<g data-opening=${o.id} class=${cls}>
        <line class="fp3d-open-hit" x1=${h0[0]} y1=${h0[1]} x2=${h1[0]} y2=${h1[1]} />
        <polygon class="fp3d-open-gap" points=${gap.map((p) => p.join(",")).join(" ")} />
        ${symbol}
      </g>`;
    })}</g>`;
  }

  private renderDevices(floor: Floor) {
    return svg`<g>${floor.placements.map((pl) => {
      const kind = kindOf(pl.entity_id);
      if (!kind) return nothing;
      const [x, y] = this.toScreen([pl.x, pl.z]);
      const on = this.hass?.states[pl.entity_id]?.state === "on";
      const sel = pl.entity_id === this._deviceId;
      const cls = `fp3d-device${on ? " fp3d-device-on" : ""}${sel ? " fp3d-device-sel" : ""}`;
      return svg`${kind === "camera" ? this.renderCameraWedge(pl, sel) : nothing}<g data-device=${pl.entity_id} class=${cls} transform="translate(${x} ${y})">
        <title>${entityName(this.hass, pl.entity_id)}</title>
        <circle r="18" class="fp3d-hit" /><circle r="12" />
        <path d=${iconPath(kind)} transform="translate(-7.2 -7.2) scale(0.6)" />
      </g>
      ${sel && pl.locked ? svg`<text class="fp3d-lock" x=${x + 16} y=${y - 12}>🔒</text>` : nothing}`;
    })}</g>`;
  }

  /** A camera's field of view in the plan; when selected, a handle at its far edge turns it and sets its reach. */
  private renderCameraWedge(pl: Placement, sel: boolean) {
    const dome = pl.mount === "ceiling";
    const fov = pl.fov ?? (dome ? 360 : 90);
    const reach = pl.reach ?? (dome ? 3 : 4.5);
    const a = ((pl.rotation ?? 0) * Math.PI) / 180;
    const at = (t: number, r: number): [number, number] => this.toScreen([pl.x - Math.sin(a + t) * r, pl.z + Math.cos(a + t) * r]);
    const [cx, cy] = this.toScreen([pl.x, pl.z]);
    const half = ((Math.min(fov, 359.9) * Math.PI) / 180) / 2;
    const [x0, y0] = at(-half, reach);
    const [x1, y1] = at(half, reach);
    const rp = reach * this._view.scale;
    const path = fov >= 360 ? "" : `M${cx} ${cy}L${x0} ${y0}A${rp} ${rp} 0 ${half > Math.PI / 2 ? 1 : 0} 1 ${x1} ${y1}Z`;
    const [hx, hy] = at(0, reach);
    return svg`<g class="fp3d-wedge ${sel ? "fp3d-wedge-sel" : ""}">
      ${fov >= 360 ? svg`<circle cx=${cx} cy=${cy} r=${rp} />` : svg`<path d=${path} />`}
      ${sel && this.isAdmin && !pl.locked
        ? svg`<g class="fp3d-rotate" data-aim=${pl.entity_id}>
            <line x1=${cx} y1=${cy} x2=${hx} y2=${hy} />
            <circle cx=${hx} cy=${hy} r="16" class="fp3d-hit" />
            <circle cx=${hx} cy=${hy} r="8" />
            <path d="M${hx - 4} ${hy - 1}a4 4 0 1 1 2 3.5" />
          </g>`
        : nothing}
    </g>`;
  }

  private renderHandles(room: Room) {
    const pts = room.points;
    const n = pts.length;
    const edges = pts.map((a, i) => {
      const b = pts[(i + 1) % n];
      const [ax, ay] = this.toScreen(a);
      const [bx, by] = this.toScreen(b);
      const len = Math.hypot(b[0] - a[0], b[1] - a[1]);
      const mx = (ax + bx) / 2;
      const my = (ay + by) / 2;
      // label outside the room: offset along the edge normal away from the centroid
      const [cx, cy] = this.toScreen(centroid(pts));
      let nx = -(by - ay);
      let ny = bx - ax;
      const nl = Math.hypot(nx, ny) || 1;
      nx /= nl;
      ny /= nl;
      if (nx * (mx - cx) + ny * (my - cy) < 0) {
        nx = -nx;
        ny = -ny;
      }
      const screenLen = Math.hypot(bx - ax, by - ay);
      return svg`
        ${screenLen > 50
          ? // on an upright edge the text starts beside the "+" instead of centred over it (#431)
            Math.abs(nx) > Math.abs(ny)
            ? svg`<text class="fp3d-dim" style="text-anchor:${nx > 0 ? "start" : "end"}" x=${mx + nx * 13} y=${my + ny * 13 + 4}>${this.m(len, 2)}</text>`
            : svg`<text class="fp3d-dim" x=${mx + nx * 16} y=${my + ny * 16 + 4}>${this.m(len, 2)}</text>`
          : nothing}
        ${screenLen > 36 ? svg`<g data-mid=${i} class="fp3d-mid"><circle cx=${mx} cy=${my} r="14" class="fp3d-hit" /><circle cx=${mx} cy=${my} r="6" /><path d="M${mx - 3} ${my}h6M${mx} ${my - 3}v6" /></g>` : nothing}
      `;
    });
    const vertices = pts.map((p, i) => {
      const [x, y] = this.toScreen(p);
      return svg`<g data-vertex=${i} class=${i === this._vertex ? "fp3d-vertex fp3d-vertex-sel" : "fp3d-vertex"}><circle cx=${x} cy=${y} r="16" class="fp3d-hit" /><circle cx=${x} cy=${y} r="6" /></g>
        <text class="fp3d-vertex-no" x=${x + 9} y=${y - 9}>${i + 1}</text>`;
    });
    return svg`<g>${edges}${vertices}</g>`;
  }

  private renderDraft() {
    const drag = this.drag;
    if (drag?.kind === "freewall") {
      const [x0, y0] = this.toScreen(drag.start);
      const [x1, y1] = this.toScreen(drag.end);
      const l = Math.hypot(drag.end[0] - drag.start[0], drag.end[1] - drag.start[1]);
      return svg`<g pointer-events="none">
        <line class="fp3d-draft fp3d-draft-wall" x1=${x0} y1=${y0} x2=${x1} y2=${y1} />
        <text class="fp3d-dim" x=${(x0 + x1) / 2} y=${(y0 + y1) / 2 - 10}>${this.m(l, 2)}</text>
      </g>`;
    }
    if (drag?.kind === "rect") {
      const [x0, y0] = this.toScreen(drag.start);
      const [x1, y1] = this.toScreen(drag.end);
      const w = Math.abs(drag.end[0] - drag.start[0]);
      const d = Math.abs(drag.end[1] - drag.start[1]);
      return svg`<g pointer-events="none">
        <rect class="fp3d-draft" x=${Math.min(x0, x1)} y=${Math.min(y0, y1)} width=${Math.abs(x1 - x0)} height=${Math.abs(y1 - y0)} />
        <text class="fp3d-dim" x=${(x0 + x1) / 2} y=${Math.min(y0, y1) - 8}>${this.m(w, 2)} × ${this.m(d, 2)}</text>
      </g>`;
    }
    if (this._tool !== "polygon" && this._tool !== "measure" && !this.drawingPoints) return nothing;
    const world = [...this._draft, ...(this._cursor && this._draft.length ? [this._cursor] : [])];
    const pts = world.map((p) => this.toScreen(p));
    return svg`<g pointer-events="none">
      ${pts.length > 1 ? svg`<polyline class="fp3d-draft" points=${pts.map((p) => p.join(",")).join(" ")} />` : nothing}
      ${pts.slice(1).map((b, i) => {
        // every segment's length, the one to the pointer too (free form as with the other tools, #351)
        const a = pts[i];
        if (Math.hypot(b[0] - a[0], b[1] - a[1]) < 30) return nothing;
        return svg`<text class="fp3d-dim" x=${(a[0] + b[0]) / 2} y=${(a[1] + b[1]) / 2 - 6}>${this.m(Math.hypot(world[i + 1][0] - world[i][0], world[i + 1][1] - world[i][1]), 2)}</text>`;
      })}
      ${this._draft.map((p, i) => {
        const [x, y] = this.toScreen(p);
        return svg`<circle class=${i === 0 && this._draft.length >= 3 ? "fp3d-draft-pt fp3d-draft-first" : "fp3d-draft-pt"} cx=${x} cy=${y} r=${i === 0 && this._draft.length >= 3 ? 9 : 5} />`;
      })}
      ${this._cursor ? svg`<circle class="fp3d-cursor" cx=${this.toScreen(this._cursor)[0]} cy=${this.toScreen(this._cursor)[1]} r="4" />` : nothing}
    </g>`;
  }

  private renderGuides() {
    const g = this._guides;
    const { w, h } = this._size;
    return svg`<g pointer-events="none">
      ${g.x !== undefined ? svg`<line class="fp3d-guide" x1=${this.toScreen([g.x, 0])[0]} y1="0" x2=${this.toScreen([g.x, 0])[0]} y2=${h} />` : nothing}
      ${g.z !== undefined ? svg`<line class="fp3d-guide" x1="0" y1=${this.toScreen([0, g.z])[1]} x2=${w} y2=${this.toScreen([0, g.z])[1]} />` : nothing}
      ${g.point ? svg`<circle class="fp3d-snap" cx=${this.toScreen(g.point)[0]} cy=${this.toScreen(g.point)[1]} r="9" />` : nothing}
    </g>`;
  }

  /** Metres or feet and inches, as the plan's setting (or Home Assistant) says (#117). */
  private get unit(): LengthUnit {
    return lengthUnit(this.hass, this._doc.settings.units);
  }

  /** A length with its unit for labels: "2,45 m" or 8' 0.5". */
  private m(v: number, digits = 2): string {
    return lengthText(v, this.unit, (x) => formatNumber(this.hass, x, digits));
  }

  private area(v: number): string {
    return areaText(Math.abs(v), this.unit, (x) => formatNumber(this.hass, x, 1));
  }

  /** The value of a length input: metres, or feet and inches as text. */
  private lenValue(v: number): string {
    return this.unit === "imperial" ? formatImperial(v) : String(round(v));
  }

  /** A length typed into an input, in metres (null: not a length). */
  private readLen(text: string): number | null {
    if (this.unit === "imperial") return parseLength(text, "imperial");
    const v = parseFloat(text.replace(",", "."));
    return Number.isFinite(v) ? v : null;
  }

  /** A length field: a number field in metres, a text field in feet and inches (8' 2", 98in, 2.5m all work). */
  private len(label: string, value: number, onChange: (v: number) => void, step = 0.01, min?: number) {
    if (this.unit !== "imperial") return this.num(label, value, onChange, step, min);
    return html`<label class="fp3d-field"
      >${unitLabel(label, "imperial")}
      <input
        type="text"
        inputmode="text"
        spellcheck="false"
        .value=${formatImperial(value)}
        ?disabled=${!this.isAdmin}
        @change=${(e: Event) => {
          const input = e.target as HTMLInputElement;
          const v = parseLength(input.value, "imperial");
          if (v !== null) onChange(min !== undefined ? Math.max(min, v) : v);
          else input.value = formatImperial(value);
        }}
    /></label>`;
  }

  private num(label: string, value: number, onChange: (v: number) => void, step = 0.01, min?: number) {
    return html`<label class="fp3d-field"
      >${label}
      <input
        type="number"
        inputmode="decimal"
        step=${step}
        min=${min ?? nothing}
        .value=${String(round(value))}
        ?disabled=${!this.isAdmin}
        @change=${(e: Event) => {
          const v = parseFloat((e.target as HTMLInputElement).value.replace(",", "."));
          if (Number.isFinite(v)) onChange(v);
        }}
    /></label>`;
  }

  /** The right mouse button held down: where, on what, and whether it was dragged (then it moved the plan). */
  private rightPress: { at: [number, number]; target: Element; moved: boolean } | null = null;
  /** When the right button was last released (its contextmenu event then stays quiet). */
  private rightUp = -1e9;

  /** The last press on a point, to tell a double click (a pointerdown's `detail` stays 0 in Chrome, D410). */
  private lastTap: { key: string; at: number } | null = null;

  /** Whether this press is the second of a double click on the same point (within 450 ms). */
  private doubleTap(e: PointerEvent, key: string): boolean {
    const now = performance.now();
    const twice = e.detail >= 2 || (this.lastTap?.key === key && now - this.lastTap.at < 450);
    this.lastTap = twice ? null : { key, at: now };
    return twice;
  }

  /** A tap in the 3D pane: select there, and fold the sidebar away (the bar under the pane has the essentials). */
  private selectFrom3d(kind: "room" | "furniture" | "device", id: string | null): void {
    this.selectItem(kind, id);
    this._sideOpen = false;
  }

  private setSidePinned(pinned: boolean): void {
    this._sidePinned = pinned;
    this._sideOpen = false;
    try {
      localStorage.setItem("neonplan3d.sidePinned", pinned ? "1" : "0");
    } catch {
      // no storage
    }
  }

  /** Fold the sidebar to its strip, or unfold it (beside the 3D pane: over the pane, while needed). */
  private setSideFolded(folded: boolean): void {
    if (this._split && !this._sidePinned) {
      this._sideOpen = !folded;
      return;
    }
    this._sideMin = folded;
    try {
      localStorage.setItem("neonplan3d.sideMin", folded ? "1" : "0");
    } catch {
      // no storage
    }
  }

  /**
   * The sidebar: beside the plan, folded to a narrow strip on request (more room for the plan); next to the 3D pane
   * and not pinned, folded while idle and opened over the pane.
   */
  /** The grip at the side bar's left edge: drag it to make the bar wider or narrower (#620). */
  private renderSideGrip() {
    if (this.narrow) return nothing;
    const move = (e: PointerEvent) => {
      if (!this.sideDrag) return;
      this._sideWidth = Math.min(640, Math.max(280, Math.round(this.sideDrag.width + (this.sideDrag.x - e.clientX))));
    };
    const up = (e: PointerEvent) => {
      if (!this.sideDrag) return;
      this.sideDrag = null;
      (e.currentTarget as HTMLElement).releasePointerCapture(e.pointerId);
      try {
        localStorage.setItem("neonplan3d.sideWidth", String(this._sideWidth));
      } catch {
        // no storage: the width lasts for this visit
      }
    };
    return html`<div
      class="fp3d-side-grip"
      title=${this.t("side_resize")}
      @pointerdown=${(e: PointerEvent) => {
        this.sideDrag = { x: e.clientX, width: this._sideWidth };
        (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
        e.preventDefault();
      }}
      @pointermove=${move}
      @pointerup=${up}
      @pointercancel=${up}
    ></div>`;
  }

  private renderAside(floor: Floor | undefined) {
    const folding = this._split && !this._sidePinned && !this.narrow;
    const folded = !this.narrow && (folding ? !this._sideOpen : this._sideMin);
    if (folded) {
      return html`<aside class="fp3d-side fp3d-side-strip">
        <button class="fp3d-strip-btn" title=${this.t("side_open")} @click=${() => this.setSideFolded(false)}>‹</button>
        ${this._furnitureId || this._deviceId || this._openingId || this._roomId
          ? html`<button class="fp3d-strip-btn fp3d-strip-hot" title=${this.t("side_details")} @click=${() => this.setSideFolded(false)}>⚙</button>`
          : nothing}
      </aside>`;
    }
    if (!folding) return html`<aside class="fp3d-side">${this.renderSideGrip()}${this.renderPinRow()}${this.renderSide(floor)}</aside>`;
    // open over the 3D pane, so the pane keeps its size
    return html`<aside class="fp3d-side fp3d-side-strip"></aside>
      <aside class="fp3d-side fp3d-side-overlay">
        ${this.renderSideGrip()}
        ${this.renderPinRow(true)}
        ${this.renderSide(floor)}
      </aside>`;
  }

  private renderPinRow(_overlay = false) {
    if (this.narrow) return nothing;
    const fold = html`<button class="fp3d-btn" title=${this.t("side_fold_hint")} @click=${() => this.setSideFolded(true)}>${this.t("side_close")} ›</button>`;
    if (!this._split) return html`<div class="fp3d-pin-row">${fold}</div>`;
    return html`<div class="fp3d-pin-row">
      ${fold}
      <button class="fp3d-btn" aria-pressed=${this._sidePinned} title=${this.t("side_pin_hint")} @click=${() => this.setSidePinned(!this._sidePinned)}>
        📌 ${this.t(this._sidePinned ? "side_pinned" : "side_pin")}
      </button>
    </div>`;
  }

  private renderSide(floor: Floor | undefined) {
    const floors = this._doc?.floors ?? [];
    const room = this.room;
    const admin = this.isAdmin;
    const areas = Object.values(this.hass?.areas ?? {}).sort((a, b) => a.name.localeCompare(b.name));
    if (this._tool === "roof") return this.renderRoofPanel();
    if (this._tool === "energy") return this.renderEnergyPanel();
    if (this._tool === "pool") return this.renderPoolPanel(floor);
    // furnishing: the library and the selected item come first
    if (this._tool === "furniture" && floor && admin) {
      return html`${this.furnitureItem ? this.renderFurnitureForm(this.furnitureItem) : nothing} ${this.renderFurnitureLibrary()}`;
    }
    // a selected item shows only its own form, with a way back to the floor and room
    const item =
      this._tool === "measure"
        ? null
        : this.furnitureItem
          ? this.renderFurnitureForm(this.furnitureItem)
          : this.opening
            ? this.renderOpeningForm(this.opening)
            : this.device
              ? this.renderDeviceForm(this.device)
              : this.outdoorArea
                ? this.renderOutdoorForm(this.outdoorArea)
                : this.freeWall
                  ? this.renderFreeWallForm(this.freeWall)
                  : null;
    if (item) {
      return html`<button class="fp3d-btn fp3d-back" @click=${() => this.selectItem("room", this._roomId)}>‹ ${this.t(room ? "back_to_room" : "back_to_floor", { room: room?.name ?? "" })}</button>
        ${item}`;
    }
    if (room && this._tool !== "measure") {
      return html`<button class="fp3d-btn fp3d-back" @click=${() => this.selectItem("room", null)}>‹ ${this.t("back_to_floor")}</button>
        ${this.renderRoomForm(room, areas)} ${this.renderDeviceList(room)}`;
    }
    return html`
      ${admin ? nothing : html`<p class="fp3d-note">${this.t("read_only")}</p>`}
      <section>
        <h3>${floor ? this.t("floor_settings_of", { floor: floor.name }) : this.t("floors")}</h3>
        ${floors.length ? nothing : html`<p class="fp3d-sub">${this.t("floor_none_hint")}</p>`}
        ${admin && floor
          ? html`<button class="fp3d-btn" aria-pressed=${!!this._doc.settings.lock_plan} title=${this.t("lock_plan_hint")} @click=${() => this.toggleLockPlan()}>
              ${this.t(this._doc.settings.lock_plan ? "plan_unlock" : "plan_lock")}
            </button>`
          : nothing}
        ${floor
          ? html`<div class="fp3d-form">
              <label class="fp3d-field fp3d-wide"
                >${this.t("floor_name")}
                <input .value=${floor.name} ?disabled=${!admin} @change=${(e: Event) => this.updateFloor({ name: (e.target as HTMLInputElement).value })}
              /></label>
              ${this.len(this.t("elevation"), floor.elevation, (v) => this.updateFloor({ elevation: v }))}
              ${admin
                ? html`<div class="fp3d-field fp3d-wide fp3d-shift" title=${this.t("floor_shift_hint")}>
                    <span>${this.t("floor_shift")}</span>
                    <input type="number" step="0.05" .value=${String(this._shiftX)} aria-label="X" @change=${(e: Event) => (this._shiftX = Number((e.target as HTMLInputElement).value) || 0)} />
                    <input type="number" step="0.05" .value=${String(this._shiftZ)} aria-label="Z" @change=${(e: Event) => (this._shiftZ = Number((e.target as HTMLInputElement).value) || 0)} />
                    <button class="fp3d-btn" ?disabled=${!this._shiftX && !this._shiftZ} @click=${() => this.shiftFloor(this._shiftX, this._shiftZ)}>${this.t("floor_shift_apply")}</button>
                    <button class="fp3d-btn" title=${this.t("floor_turn_hint")} @click=${() => this.turnFloor()}>${this.t("floor_turn")}</button>
                    <button class="fp3d-btn" title=${this.t("floor_start_view_hint")} @click=${() => this.rememberFloorView()}>${this.t("floor_start_view")}</button>
                    ${floor.start_view ? html`<button class="fp3d-btn" title=${this.t("floor_start_view_reset")} @click=${() => this.updateFloor({ start_view: null })}>↺</button>` : nothing}
                    <label class="fp3d-check fp3d-wide" title=${this.t("floor_shift_all_hint")}
                      ><input type="checkbox" .checked=${this._shiftAll} @change=${(ev: Event) => (this._shiftAll = (ev.target as HTMLInputElement).checked)} />
                      ${this.t("floor_shift_all")}</label
                    >
                  </div>`
                : nothing}
              ${this.len(this.t("height"), floor.height, (v) => this.updateFloor({ height: Math.max(1, v) }), 0.05, 1)}
              ${Object.keys(this.hass?.floors ?? {}).length
                ? html`<label class="fp3d-field fp3d-wide"
                    >${this.t("ha_floor")}
                    <select ?disabled=${!admin} @change=${(e: Event) => this.updateFloor({ ha_floor: (e.target as HTMLSelectElement).value || null })}>
                      <option value="" ?selected=${!floor.ha_floor}>${this.t("no_ha_floor")}</option>
                      ${Object.values(this.hass?.floors ?? {})
                        .filter((f) => f.floor_id === floor.ha_floor || !floors.some((x) => x.ha_floor === f.floor_id))
                        .map((f) => html`<option value=${f.floor_id} ?selected=${f.floor_id === floor.ha_floor}>${f.name}</option>`)}
                    </select></label
                  >`
                : nothing}
              ${admin && this.unplacedAreas(floor).length
                ? html`<div class="fp3d-actions fp3d-wide">
                    <button class="fp3d-btn fp3d-primary" title=${this.t("area_rooms_hint")} @click=${() => this.addAreaRooms(floor)}>
                      ${this.t("area_rooms", { n: this.unplacedAreas(floor).length })}
                    </button>
                  </div>`
                : nothing}
              ${admin
                ? html`<div class="fp3d-actions fp3d-wide">
                    <button class="fp3d-btn" title=${this.t("floor_order_hint")} @click=${() => this.moveFloor(1)}>${this.t("move_up")}</button>
                    <button class="fp3d-btn" title=${this.t("floor_order_hint")} @click=${() => this.moveFloor(-1)}>${this.t("move_down")}</button>
                    <button class="fp3d-btn fp3d-danger" @click=${() => this.deleteFloor()}>${this.t("delete_floor")}</button>
                  </div>
                  <div class="fp3d-actions fp3d-wide">
                    <button class="fp3d-btn" title=${this.t("gaps_hint")} ?disabled=${floor.rooms.length < 2} @click=${() => this.closeFloorGaps()}>
                      ${this.t("gaps_close")}
                    </button>
                    <button class="fp3d-btn" title=${this.t("straighten_hint")} ?disabled=${!floor.rooms.length} @click=${() => this.straightenFloor()}>
                      ${this.t("straighten")}
                    </button>
                  </div>
                  ${this._notice ? html`<p class="fp3d-sub fp3d-wide fp3d-notice">${this._notice}</p>` : nothing}`
                : nothing}
            </div>`
          : nothing}
      </section>
      ${this._tool === "measure" && floor
        ? this.renderMeasureForm()
        : this.freeWall
        ? this.renderFreeWallForm(this.freeWall)
        : this.outdoorArea
        ? this.renderOutdoorForm(this.outdoorArea)
        : this.opening
        ? this.renderOpeningForm(this.opening)
        : this.furnitureItem
          ? this.renderFurnitureForm(this.furnitureItem)
          : this.device
            ? this.renderDeviceForm(this.device)
          : room
            ? html`${this.renderRoomForm(room, areas)} ${this.renderDeviceList(room)}`
            : floor
              ? this.renderRoomList(floor)
              : nothing}
      ${this.renderHelpLinks()}
      ${admin && SHOW_PRESENCE ? this.renderPresenceSettings() : nothing}
      ${floor && admin ? this.renderBackgroundForm(floor) : nothing}
    `;
  }

  /** A room one place up or down in its floor's list – the room bar of the 3D view shows them in this order (D599). */
  private moveRoom(id: string, by: number): void {
    this.change((_d, floor) => {
      const i = floor.rooms.findIndex((r) => r.id === id);
      const j = i + by;
      if (i < 0 || j < 0 || j >= floor.rooms.length) return;
      const [room] = floor.rooms.splice(i, 1);
      floor.rooms.splice(j, 0, room);
    });
  }

  private renderRoomList(floor: Floor) {
    if (!floor.rooms.length) return nothing;
    return html`<section>
      <h3>${this.t("rooms")}</h3>
      <div class="fp3d-room-list">
        ${floor.rooms.map(
          (r, i) => html`<div class="fp3d-row fp3d-dev-row">
            <button class="fp3d-row fp3d-room-btn" @click=${() => this.selectItem("room", r.id)}>
              <span>${r.name}</span><span class="fp3d-muted">${this.area(polygonArea(r.points))}</span>
            </button>
            ${this.isAdmin && floor.rooms.length > 1
              ? html`<button class="fp3d-pin" title=${this.t("room_order_up")} ?disabled=${i === 0} @click=${() => this.moveRoom(r.id, -1)}>↑</button>
                  <button class="fp3d-pin" title=${this.t("room_order_down")} ?disabled=${i === floor.rooms.length - 1} @click=${() => this.moveRoom(r.id, 1)}>↓</button>`
              : nothing}
          </div>`,
        )}
      </div>
    </section>`;
  }

  /** The room's doors and windows as a list: a tap selects one that is hard to hit in the plan (#312). */
  private renderRoomOpenings(room: Room) {
    const own = (this.floor?.openings ?? []).filter((o) => o.room_id === room.id);
    if (!own.length) return nothing;
    return html`<details class="fp3d-points">
      <summary>${this.t("room_openings")} (${own.length})</summary>
      <div class="fp3d-room-list">
        ${own.map(
          (o) => html`<button class="fp3d-row" @click=${() => (this.selectItem("opening", o.id), this.renderRoot.querySelector(".fp3d-side")?.scrollTo(0, 0))}>
            <span>${this.t(`preset_${openingPreset(o)}` as I18nKey)}</span><span class="fp3d-muted">${this.m(o.width, 2)}</span>
          </button>`,
        )}
      </div>
    </details>`;
  }

  private renderRoomForm(room: Room, areas: { area_id: string; name: string }[]) {
    const admin = this.isAdmin;
    const rect = isAxisRect(room.points);
    const b = bounds(room.points);
    return html`<section>
      <div class="fp3d-h3row"><h3>${this.t("room")}</h3>${this.fixButton("room", room.id)}</div>
      <button class="fp3d-btn fp3d-wv-open" title=${this.t("wall_view_open")} @click=${() => this.openRoomWalls(room)}>▦ ${this.t("wall_view_room")}</button>
      <div class="fp3d-form">
        <label class="fp3d-field fp3d-wide"
          >${this.t("room_name")}
          <input .value=${room.name} ?disabled=${!admin} @change=${(e: Event) => this.updateRoom({ name: (e.target as HTMLInputElement).value })}
        /></label>
        <label class="fp3d-field fp3d-wide" title=${this.t("aliases_hint")}
          >${this.t("aliases")}
          <input type="text" maxlength="240" .value=${(room.aliases ?? []).join(", ")} ?disabled=${!admin} placeholder=${this.t("aliases_placeholder")} @change=${(e: Event) => this.updateRoom({ aliases: splitAliases((e.target as HTMLInputElement).value) })}
        /></label>
        <label class="fp3d-field fp3d-wide"
          >${this.t("area")}
          <select ?disabled=${!admin} @change=${(e: Event) => this.setArea((e.target as HTMLSelectElement).value)}>
            <option value="" ?selected=${!room.area_id}>${this.t("no_area")}</option>
            ${areas.map((a) => html`<option value=${a.area_id} ?selected=${a.area_id === room.area_id}>${a.name}</option>`)}
          </select></label
        >
        <label class="fp3d-field fp3d-wide"
          >${this.t("material")}
          <select ?disabled=${!admin} @change=${(e: Event) => this.updateRoom({ floor_material: (e.target as HTMLSelectElement).value })}>
            ${FLOOR_MATERIALS.map((m) => html`<option value=${m} ?selected=${m === room.floor_material}>${this.t(`mat_${m}` as I18nKey)}</option>`)}
          </select></label
        >
        ${rect
          ? html`${this.len(this.t("x"), b.x0, (v) => this.setRect("x", v))} ${this.len(this.t("z"), b.z0, (v) => this.setRect("z", v))}
            ${this.len(this.t("width"), b.x1 - b.x0, (v) => this.setRect("w", v), 0.01, 0.05)}
            ${this.len(this.t("depth"), b.z1 - b.z0, (v) => this.setRect("d", v), 0.01, 0.05)}`
          : nothing}
      </div>
      <div class="fp3d-form">
        <label class="fp3d-field" title=${this.t("room_ceiling_hint")}
          >${unitLabel(this.t("room_ceiling"), this.unit)}
          <input
            type=${this.unit === "imperial" ? "text" : "number"}
            step="0.05"
            min="1"
            placeholder=${this.floor ? this.lenValue(this.floor.height) : ""}
            .value=${room.ceiling_height != null ? this.lenValue(room.ceiling_height) : ""}
            ?disabled=${!admin}
            @change=${(e: Event) => {
              const raw = (e.target as HTMLInputElement).value.trim();
              const v = raw === "" ? null : this.readLen(raw);
              this.updateRoom({ ceiling_height: v === null || v <= 0 ? null : Math.min(30, Math.max(1, v)) });
            }}
        /></label>
        <p class="fp3d-sub fp3d-wide">${this.t("room_ceiling_hint")}</p>
      </div>
      <div class="fp3d-actions">
        <button class="fp3d-btn" title=${this.t("room_start_view_hint")} ?disabled=${!admin} @click=${() => this.rememberRoomView()}>${this.t("room_start_view")}</button>
        ${room.start_view ? html`<button class="fp3d-btn" title=${this.t("room_start_view_reset")} ?disabled=${!admin} @click=${() => this.updateRoom({ start_view: null })}>↺</button>` : nothing}
      </div>
      <p class="fp3d-sub" title=${this.t("room_area_net_hint")}>${this.t("room_area_net", { a: this.area(polygonArea(room.points)), n: this.area(netRoomArea(room, this.floor!, { exterior: this._doc.settings.wall_exterior, interior: this._doc.settings.wall_interior })) })}</p>
      <p class="fp3d-sub fp3d-room-id">${this.t("room_id")} <code title=${this.t("license_copy")} @click=${() => void navigator.clipboard?.writeText(room.id).catch(() => undefined)}>${room.id}</code></p>
      ${this.renderEdgeHeights(room)} ${this.renderRoomClimate(room)} ${this.renderRoomOpenings(room)}
      <details class="fp3d-points" ?open=${!rect}>
        <summary>${this.t("points")} (${room.points.length})</summary>
        ${room.points.map(
          (p, i) => html`<div class="fp3d-point ${i === this._vertex ? "fp3d-point-sel" : ""}">
            <span class="fp3d-muted">${i + 1}</span>
            ${this.len(this.t("x"), p[0], (v) => this.setPoint(i, 0, v))} ${this.len(this.t("z"), p[1], (v) => this.setPoint(i, 1, v))}
            ${admin
              ? html`<button class="fp3d-btn" title=${this.t("delete_point")} ?disabled=${room.points.length <= 3} @click=${() => this.deleteVertex(i)}>
                  ×
                </button>`
              : nothing}
          </div>`,
        )}
      </details>
      ${admin
        ? html`<div class="fp3d-actions">
            <button class="fp3d-btn fp3d-primary" @click=${() => (this._packages = !this._packages)}>${this.t("pkg_open")}</button>
            <button class="fp3d-btn" @click=${() => this.openSpotForm(room)}>${this.t("spots_place")}</button>
            <button class="fp3d-btn" @click=${() => this.duplicateRoom()}>${this.t("duplicate")}</button>
            <button class="fp3d-btn fp3d-danger" @click=${() => this.deleteRoom()}>${this.t("delete")}</button>
          </div>`
        : nothing}
      ${this.renderModuleRoomFields(room)}
      ${this._spots ? this.renderSpotForm(room) : nothing}
      ${this._packages
        ? html`<div class="fp3d-packages">
            ${PACKAGES.map(
              (p) => html`<button class="fp3d-btn" @click=${() => this.applyPackage(room, p)}>
                <b>${this.t(`pkg_${p}` as I18nKey)}</b><span>${this.t(`pkg_${p}_desc` as I18nKey)}</span>
              </button>`,
            )}
            <p class="fp3d-sub">${this.t("pkg_hint")}</p>
          </div>`
        : nothing}
    </section>`;
  }

  /** Adds the furniture of a room package (lamps link to the room's lights automatically). */
  private applyPackage(room: Room, pkg: PackageId): void {
    if (!this.isAdmin) return;
    const items = furnishRoom(room, pkg, () => uid("furniture"));
    this.change((_, floor) => floor.furniture.push(...items));
    this._packages = false;
    this._notice = this.t("pkg_done", { n: items.length });
  }

  /** Suggests about one spot per 1.2 m in each direction, and the room's first light. */
  private openSpotForm(room: Room): void {
    const b = bounds(room.points);
    const lights = this.hass ? areaEntities(this.hass, room.area_id).filter((id) => id.startsWith("light.")) : [];
    this._spots = {
      type: "lamp_downlight",
      rows: Math.max(1, Math.round((b.z1 - b.z0) / 1.2)),
      cols: Math.max(1, Math.round((b.x1 - b.x0) / 1.2)),
      entity: lights[0] ?? null,
    };
  }

  private placeSpots(room: Room): void {
    const f = this._spots;
    if (!f || !this.isAdmin) return;
    const [w, d, h] = FURNITURE_SIZE[f.type];
    const items = spotGrid(room, f.rows, f.cols).map(([x, z]) => ({
      id: uid("furniture"),
      type: f.type,
      x,
      z,
      rotation: 0,
      w,
      d,
      h,
      variant: null,
      // every spot of the grid follows the same light (spots on one dimmer); "none" = not linked
      entity: f.entity ?? "none",
      power: null,
    }));
    this.change((_, floor) => floor.furniture.push(...items));
    this._spots = null;
    this._notice = this.t("spots_placed", { n: items.length });
  }

  private renderSpotForm(room: Room) {
    const f = this._spots!;
    const count = spotGrid(room, f.rows, f.cols).length;
    const lights = this.entityOptions((id) => /^(light|switch|input_boolean)\./.test(id));
    const set = (patch: Partial<NonNullable<Fp3dEditor["_spots"]>>) => (this._spots = { ...f, ...patch });
    return html`<div class="fp3d-form fp3d-spot-form">
      <label class="fp3d-field fp3d-wide"
        >${this.t("spots_type")}
        <select @change=${(e: Event) => set({ type: (e.target as HTMLSelectElement).value as FurnitureType })}>
          ${(["lamp_downlight", "lamp_spot", "lamp_panel", "lamp_ceiling"] as FurnitureType[]).map(
            (t) => html`<option value=${t} ?selected=${t === f.type}>${this.t(`furn_${t}` as I18nKey)}</option>`,
          )}
        </select></label
      >
      ${this.num(this.t("spots_cols"), f.cols, (v) => set({ cols: Math.max(1, Math.min(12, Math.round(v))) }), 1, 1)}
      ${this.num(this.t("spots_rows"), f.rows, (v) => set({ rows: Math.max(1, Math.min(12, Math.round(v))) }), 1, 1)}
      ${this.entitySelect(this.t("furn_entity_light"), f.entity, undefined, lights, (v) => set({ entity: v === "none" ? null : v }))}
      <div class="fp3d-actions fp3d-wide">
        <button class="fp3d-btn fp3d-primary" ?disabled=${!count} @click=${() => this.placeSpots(room)}>${this.t("spots_add", { n: count })}</button>
        <button class="fp3d-btn" @click=${() => (this._spots = null)}>${this.t("cancel")}</button>
      </div>
      <p class="fp3d-sub fp3d-wide">${this.t("spots_hint")}</p>
    </div>`;
  }

  /** An own symbol for the marker (a Material Design icon name), with a preview. */
  private iconInput(value: string | null | undefined, onChange: (v: string | null) => void) {
    const name = value ? (value.startsWith("mdi:") ? value : `mdi:${value}`) : "";
    return html`<label class="fp3d-field fp3d-wide" title=${this.t("marker_icon_hint")}
      >${this.t("marker_icon")}
      <span class="fp3d-icon-row">
        <input type="text" placeholder="mdi:thermometer" .value=${value ?? ""} ?disabled=${!this.isAdmin} @change=${(e: Event) => onChange((e.target as HTMLInputElement).value.trim().replace(/^mdi:/, "") || null)} />
        ${name ? unsafeHTML(`<ha-icon icon="${name.replace(/[^a-z0-9:-]/gi, "")}"></ha-icon>`) : nothing}
      </span></label
    >`;
  }

  /** How the marker of a device or furniture item shows in 3D. */
  private markerSelect(value: MarkerShow | null, onChange: (v: MarkerShow | null) => void) {
    return html`<label class="fp3d-field fp3d-wide" title=${this.t("marker_show_hint")}
      >${this.t("marker_show")}
      <select ?disabled=${!this.isAdmin} @change=${(e: Event) => onChange(((e.target as HTMLSelectElement).value || null) as MarkerShow | null)}>
        <option value="" ?selected=${!value}>${this.t("marker_show_auto")}</option>
        ${MARKER_SHOWS.map((m) => html`<option value=${m} ?selected=${m === value}>${this.t(`marker_show_${m}` as I18nKey)}</option>`)}
      </select></label
    >`;
  }

  /** The options of a filter, kept while the same filter asks again and no entity came or went (see memoFields). */
  private _optionsMemo = new WeakMap<(id: string) => boolean, { entities: unknown; count: number; options: { id: string; label: string }[] }>();

  private entityOptions(filter: (id: string) => boolean) {
    const hit = this._optionsMemo.get(filter);
    const count = Object.keys(this.hass?.states ?? {}).length;
    if (hit && hit.entities === this.hass?.entities && hit.count === count) return hit.options;
    const options = this.entityOptionsOf(filter);
    this._optionsMemo.set(filter, { entities: this.hass?.entities, count, options });
    return options;
  }

  private entityOptionsOf(filter: (id: string) => boolean) {
    const areaName = (id: string) => {
      const entry = this.hass?.entities?.[id];
      const area = entry?.area_id ?? (entry?.device_id ? this.hass?.devices?.[entry.device_id]?.area_id : null);
      return area ? this.hass?.areas?.[area]?.name : undefined;
    };
    return Object.keys(this.hass?.states ?? {})
      .filter(filter)
      .map((id) => ({ id, label: `${entityName(this.hass, id)}${areaName(id) ? ` · ${areaName(id)}` : ""}` }))
      .sort((a, b) => a.label.localeCompare(b.label));
  }

  private entitySelect(label: string, value: string | null, auto: string | null | undefined, options: { id: string; label: string }[], onChange: (v: string | null) => void) {
    const autoLabel =
      auto === undefined ? null : auto ? this.t("entity_auto", { name: entityName(this.hass, auto) }) : this.t("entity_auto_none");
    // searchable picker: the fixed choices (automatic, none) first, then the entities filtered as you type
    const fixed = [...(autoLabel !== null ? [{ id: "__auto", label: autoLabel }] : []), { id: "none", label: this.t("entity_none") }];
    const current = value === null ? (autoLabel !== null ? "__auto" : "none") : value;
    return html`<label class="fp3d-field fp3d-wide"
      >${label}
      <fp3d-entity-picker
        .options=${options}
        .fixed=${fixed}
        .value=${current}
        .placeholder=${this.t("entity_search")}
        ?disabled=${!this.isAdmin}
        @change=${(e: CustomEvent<{ value: string }>) => {
          e.stopPropagation();
          onChange(e.detail.value === "__auto" ? null : e.detail.value);
        }}
      ></fp3d-entity-picker></label
    >`;
  }

  /** Whether an opening sits in an exterior wall (decides the automatic door style). */
  private openingIsExterior(o: Opening): boolean {
    const floor = this.floor;
    const host = floor ? openingHost(o, floor.rooms, floor.walls ?? []) : null;
    if (!floor || !host) return false;
    const walls = generateWalls(floor.rooms, { exterior: this._doc.settings.wall_exterior, interior: this._doc.settings.wall_interior }, floor.walls ?? []);
    return locateOpening(walls.walls, o, host)?.wall.exterior ?? false;
  }

  /** The look of a door or window: automatic (by wall), or one of the built-in styles. */
  /** Front doors with sidelights: which side the single one sits on, and the widths (empty = automatic). */
  private renderSidelightFields(o: Opening) {
    if (o.type !== "door") return nothing;
    const style = openingStyle(o, this.openingIsExterior(o));
    if (style !== "sidelight" && style !== "sidelights") return nothing;
    const admin = this.isAdmin;
    const width = (key: "sidelight_width" | "sidelight_width2", label: I18nKey) => html`<label class="fp3d-field"
      >${this.t(label)}
      <input
        type="number"
        step="0.05"
        min="0.1"
        max="3"
        placeholder=${this.t("sidelight_auto")}
        .value=${o[key] == null ? "" : String(o[key])}
        ?disabled=${!admin}
        @change=${(e: Event) => {
          const v = Number((e.target as HTMLInputElement).value);
          this.updateOpening({ [key]: Number.isFinite(v) && v > 0 ? Math.min(3, Math.max(0.1, Math.round(v * 100) / 100)) : null });
        }}
      />
    </label>`;
    return style === "sidelight"
      ? html`<label class="fp3d-check" title=${this.t("sidelight_hinge_hint")}
            ><input type="checkbox" .checked=${!!o.sidelight_hinge} ?disabled=${!admin} @change=${(ev: Event) => this.updateOpening({ sidelight_hinge: (ev.target as HTMLInputElement).checked })} />
            ${this.t("sidelight_hinge")}</label
          >
          ${width("sidelight_width", "sidelight_width")}`
      : html`${width("sidelight_width", "sidelight_width_left")} ${width("sidelight_width2", "sidelight_width_right")}`;
  }

  private renderStyleSelect(o: Opening) {
    const styles: readonly OpeningStyle[] = o.type === "door" ? DOOR_STYLES : WINDOW_STYLES;
    const auto = openingStyle({ type: o.type, style: null }, this.openingIsExterior(o));
    const current = o.style && (styles as readonly string[]).includes(o.style) ? o.style : "";
    return html`<label class="fp3d-field fp3d-wide"
      >${this.t("opening_style")}
      <select ?disabled=${!this.isAdmin} @change=${(e: Event) => this.updateOpening({ style: ((e.target as HTMLSelectElement).value || null) as OpeningStyle | null })}>
        <option value="" ?selected=${!current}>${this.t("style_auto", { style: this.t(`style_${auto}` as I18nKey) })}</option>
        ${styles.map((s) => html`<option value=${s} ?selected=${s === current}>${this.t(`style_${s}` as I18nKey)}</option>`)}
      </select></label
    >`;
  }

  private renderOpeningForm(o: Opening) {
    const admin = this.isAdmin;
    const window = o.type === "window";
    const garage = o.type === "garage";
    // what "automatic" would pick: resolve with the opening's own links cleared
    const autoPick = (key: "cover" | "contact") => {
      if (!this.hass) return null;
      const probe = structuredClone(this._doc.floors);
      for (const f of probe) for (const x of f.openings) if (x.id === o.id) x[key] = null;
      return openingEntities(this.hass, probe).get(o.id)?.[key] ?? null;
    };
    const dc = (id: string) => this.hass?.states[id]?.attributes.device_class as string | undefined;
    const covers = this.entityOptions((id) => id.startsWith("cover."));
    // a garage door's drive may also be a pulse switch or a button that the opener answers (#677)
    const garageDrives = garage ? this.entityOptions((id) => id.startsWith("cover.") || isPulseDrive(id)) : covers;
    // sensors with a number for the live position of a blind
    const positions = this.entityOptions((id) => /^(sensor|number|input_number)\./.test(id) && Number.isFinite(Number(this.hass?.states[id]?.state)));
    // plain contacts, and handle sensors with three states (open / tilted / closed)
    // a garage door may also be a switch or toggle helper (a relay that drives the door): on = open, a tap switches it
    // a contact: a binary sensor of the door/window kind, or one without any class (KNX, enOcean, templates often
    // have none – they were missing from the list)
    const isContact = (id: string) => id.startsWith("binary_sensor.") && ["door", "window", "opening", "garage_door", ""].includes(dc(id) ?? "");
    const contacts = this.entityOptions(
      (id) =>
        isContact(id) ||
        (numberish(id) && windowPosition(this.hass?.states[id]) !== null) ||
        (garage && /^(switch|input_boolean)\./.test(id)),
    );
    // handle sensors: text states (open / tilted / closed), a window_state attribute, or a telling name
    const handles = this.entityOptions((id) => {
      const st = this.hass?.states[id];
      if (id.startsWith("binary_sensor.")) return typeof st?.attributes.window_state === "string";
      return numberish(id) && (windowPosition(st) !== null || /griff|handle|fenster|window|drehgriff/i.test(`${id} ${entityName(this.hass, id)}`));
    });
    const plainContacts = this.entityOptions(isContact);
    type Kind = NonNullable<Opening["sensor"]>;
    const leafSensors = (leaf: 1 | 2) => {
      const main = leaf === 1;
      const tilt = main ? o.tilt : (o.tilt2 ?? null);
      const contact = main ? o.contact : o.contact2;
      const kind: Kind = (main ? o.sensor : o.sensor2) ?? (tilt && tilt !== "none" ? "contact_tilt" : "contact");
      const setContact = (v: string | null) => this.updateOpening(main ? { contact: v } : { contact2: v === "none" ? null : v });
      return html`<label class="fp3d-field fp3d-wide"
          >${this.t("sensor_kind")}
          <select
            ?disabled=${!admin}
            @change=${(e: Event) => {
              const next = (e.target as HTMLSelectElement).value as Kind;
              const clearTilt = next === "contact_tilt" ? {} : main ? { tilt: null } : { tilt2: null };
              this.updateOpening({ ...(main ? { sensor: next } : { sensor2: next }), ...clearTilt });
            }}
          >
            ${(["contact", "handle", "contact_tilt"] as const).map((k) => html`<option value=${k} ?selected=${k === kind}>${this.t(`sensor_kind_${k}`)}</option>`)}
          </select></label
        >
        ${kind === "handle"
          ? this.entitySelect(this.t("handle_entity"), contact, undefined, handles, (v) => setContact(v === "none" ? (main ? "none" : null) : v))
          : this.entitySelect(this.t("contact_entity"), contact, main ? autoPick("contact") : undefined, plainContacts, setContact)}
        ${kind === "contact_tilt"
          ? this.entitySelect(this.t("tilt_entity"), tilt, undefined, contacts, (v) => this.updateOpening(main ? { tilt: v === "none" ? null : v } : { tilt2: v === "none" ? null : v }))
          : nothing}
        ${main
          ? html`${this.entitySelect(this.t("tilt_angle_entity"), o.tilt_angle ?? null, undefined, this.entityOptions((id) => numberish(id)), (v) => this.updateOpening({ tilt_angle: v === "none" ? null : v }))}
            ${o.tilt_angle && o.tilt_angle !== "none"
              ? html`${this.num(this.t("tilt_angle_max"), o.tilt_max ?? 15, (v) => this.updateOpening({ tilt_max: Math.min(90, Math.max(1, v)) }), 1, 1)}
                ${this.num(this.t("tilt_angle_offset"), o.tilt_offset ?? 0, (v) => this.updateOpening({ tilt_offset: v }), 0.5)}
                <label class="fp3d-check fp3d-wide"
                  ><input type="checkbox" .checked=${!!o.tilt_invert} ?disabled=${!admin} @change=${(ev: Event) => this.updateOpening({ tilt_invert: (ev.target as HTMLInputElement).checked })} />
                  ${this.t("tilt_angle_invert")}</label
                >`
              : nothing}`
          : nothing}`;
    };
    const preset = openingPreset(o);
    const door = o.type === "door";
    return html`<section>
      <div class="fp3d-h3row"><h3>${this.t(`preset_${preset}` as I18nKey)}</h3>${this.fixButton("opening", o.id)}</div>
      ${admin
        ? html`<div class="fp3d-presets" role="group" aria-label=${this.t("opening_type")}>
            ${(Object.keys(OPENING_PRESETS) as OpeningPreset[]).map(
              (p) => html`<button class="fp3d-chip" aria-pressed=${p === preset} @click=${() => this.setOpeningPreset(o, p)}>${this.t(`preset_${p}` as I18nKey)}</button>`,
            )}
          </div>`
        : nothing}
      ${admin && !garage
        ? html`<div class="fp3d-actions">
            <button class="fp3d-btn" title=${this.t("flip_hinge_hint")} @click=${() => this.updateOpening({ hinge: o.hinge === "left" ? "right" : "left" })}>
              ⇆ ${this.t(o.leaves === 2 ? "flip_main_leaf" : "flip_hinge")}
            </button>
            ${door || (window && o.sill < 0.1)
              ? html`<button class="fp3d-btn" title=${this.t("flip_swing_hint")} @click=${() => this.updateOpening({ swing: o.swing === "out" ? "in" : "out" })}>
                  ⇅ ${this.t("flip_swing")}
                </button>`
              : nothing}
          </div>`
        : nothing}
      <div class="fp3d-form">
        ${this.len(this.t("width"), o.width, (v) => this.updateOpening({ width: Math.max(0.3, v) }), 0.01, 0.3)}
        ${this.len(this.t("opening_position"), o.offset, (v) => this.updateOpening({ offset: Math.max(0, v) }), 0.01, 0)}
        ${window ? this.len(this.t("sill"), o.sill, (v) => this.updateOpening({ sill: Math.max(0, v) }), 0.01, 0) : nothing}
        ${this.len(this.t("opening_height"), o.height, (v) => this.updateOpening({ height: Math.max(0.3, v) }), 0.01, 0.3)}
        ${window && this.isAdmin
          ? html`<div class="fp3d-actions fp3d-wide">
              <button
                class="fp3d-btn"
                title=${this.t("cellar_window_hint")}
                @click=${() => {
                  // small and high up in the wall: 1.0 × 0.5 m, its top 25 cm under the ceiling
                  const h = this.floor?.height ?? 2.5;
                  this.updateOpening({ width: 1, height: 0.5, sill: Math.max(0, Math.round((h - 0.75) * 100) / 100) });
                }}
              >
                ▭ ${this.t("cellar_window")}
              </button>
            </div>`
          : nothing}
        ${garage ? nothing : this.renderStyleSelect(o)}
        ${window
          ? html`<label class="fp3d-field fp3d-wide" title=${this.t("sill_board_hint")}
              >${this.t("sill_board")}
              <select ?disabled=${!admin} @change=${(e: Event) => this.updateOpening({ sill_board: ((e.target as HTMLSelectElement).value || "auto") as SillBoard })}>
                ${SILL_BOARDS.map((m) => html`<option value=${m} ?selected=${(o.sill_board ?? "auto") === m}>${this.t(`sill_board_${m}`)}</option>`)}
              </select></label
            >`
          : nothing}
        ${this.renderSidelightFields(o)}
        <label class="fp3d-field fp3d-wide" title=${this.t("opening_mark_hint")}
          >${this.t("opening_mark")}
          <select ?disabled=${!this.isAdmin} @change=${(e: Event) => this.updateOpening({ mark: (e.target as HTMLSelectElement).value === "closed" ? "closed" : null })}>
            <option value="" ?selected=${o.mark !== "closed"}>${this.t("opening_mark_open")}</option>
            <option value="closed" ?selected=${o.mark === "closed"}>${this.t("opening_mark_closed")}</option>
          </select></label
        >
        ${garage
          ? nothing
          : html`<label class="fp3d-field fp3d-wide"
          >${this.t(o.leaves === 2 ? "main_leaf" : "hinge")}
          <select ?disabled=${!admin} @change=${(e: Event) => this.updateOpening({ hinge: (e.target as HTMLSelectElement).value as "left" | "right" })}>
            <option value="left" ?selected=${o.hinge === "left"}>${this.t("hinge_left")}</option>
            <option value="right" ?selected=${o.hinge === "right"}>${this.t("hinge_right")}</option>
          </select></label
        >`}
        ${window || garage || door ? this.entitySelect(this.t(window ? "cover_entity" : "door_cover"), o.cover, autoPick("cover"), garage ? garageDrives : covers, (v) => this.updateOpening({ cover: v })) : nothing}
        ${garage && isPulseDrive(o.cover) ? html`<p class="fp3d-sub fp3d-wide">${this.t("garage_pulse_hint")}</p>` : nothing}
        ${(window || garage || door) && o.cover !== "none" && (o.cover || autoPick("cover"))
          ? html`${isPulseDrive(o.cover) ? nothing : this.entitySelect(this.t("cover_position_entity"), o.position ?? null, undefined, positions, (v) => this.updateOpening({ position: v === "none" ? null : v }))}
              ${o.position && !isPulseDrive(o.cover)
                ? html`<label class="fp3d-check fp3d-wide"
                    ><input
                      type="checkbox"
                      ?disabled=${!admin}
                      .checked=${!!o.position_inverted}
                      @change=${(ev: Event) => this.updateOpening({ position_inverted: (ev.target as HTMLInputElement).checked })}
                    />
                    ${this.t("cover_position_invert")}</label
                  >`
                : nothing}
              <label class="fp3d-check fp3d-wide" title=${this.t("cover_confirm_hint")}
                ><input type="checkbox" ?disabled=${!admin} .checked=${!!o.confirm} @change=${(ev: Event) => this.updateOpening({ confirm: (ev.target as HTMLInputElement).checked })} />
                ${this.t("device_confirm")}</label
              >`
          : nothing}
        ${window
          ? html`${o.leaves === 2 ? html`<h4 class="fp3d-lib-head fp3d-wide">${this.t("leaf_main")}</h4>` : nothing}
              ${leafSensors(1)} ${o.leaves === 2 ? html`<h4 class="fp3d-lib-head fp3d-wide">${this.t("leaf_second")}</h4>${leafSensors(2)}` : nothing}
              ${o.sill <= 0.01
                ? html`${this.entitySelect(this.t("door_lock"), o.lock ?? null, undefined, this.entityOptions((id) => id.startsWith("lock.")), (v) => this.updateOpening({ lock: v === "none" ? null : v }))}
                  <p class="fp3d-sub fp3d-wide">${this.t("door_lock_hint")}</p>`
                : nothing}`
          : html`${this.entitySelect(this.t(o.leaves === 2 ? "contact_main" : "contact_entity"), o.contact, autoPick("contact"), contacts, (v) => this.updateOpening({ contact: v }))}
              ${o.leaves === 2 && !garage
                ? this.entitySelect(this.t("contact_second"), o.contact2, undefined, contacts, (v) => this.updateOpening({ contact2: v === "none" ? null : v }))
                : nothing}
              ${door
                ? html`<label class="fp3d-check fp3d-wide" title=${this.t("door_shut_hint")}
                    ><input type="checkbox" .checked=${!!o.shut} ?disabled=${!admin} @change=${(ev: Event) => this.updateOpening({ shut: (ev.target as HTMLInputElement).checked })} />
                    ${this.t("door_shut")}</label
                  >
                  <label class="fp3d-field" title=${this.t("door_angle_hint")}
                    >${this.t("door_angle")}
                    <select
                      ?disabled=${!admin}
                      @change=${(ev: Event) => {
                        const v = Number((ev.target as HTMLSelectElement).value);
                        this.updateOpening({ open_angle: v > 0 ? v : null });
                      }}
                    >
                      <option value="0" ?selected=${!o.open_angle}>${this.t("door_angle_default")}</option>
                      ${[15, 30, 45, 60, 90].map((a) => html`<option value=${a} ?selected=${o.open_angle === a}>${a}°</option>`)}
                      ${o.open_angle && ![15, 30, 45, 60, 90].includes(o.open_angle) ? html`<option value=${o.open_angle} selected>${o.open_angle}°</option>` : nothing}
                    </select></label
                  >
                  ${this.entitySelect(this.t("door_lock"), o.lock ?? null, undefined, this.entityOptions((id) => id.startsWith("lock.")), (v) => this.updateOpening({ lock: v === "none" ? null : v }))}
                  <p class="fp3d-sub fp3d-wide">${this.t("door_lock_hint")}</p>`
                : nothing}`}
        ${o.contact !== "none" && (o.contact || o.contact2 || autoPick("contact"))
          ? html`<label class="fp3d-check fp3d-wide" title=${this.t("contact_invert_hint")}
              ><input type="checkbox" .checked=${!!o.contact_invert} ?disabled=${!admin} @change=${(ev: Event) => this.updateOpening({ contact_invert: (ev.target as HTMLInputElement).checked })} />
              ${this.t("contact_invert")}</label
            >`
          : nothing}
        ${this.floor && windowGetsWell(this._doc, this.floor, o)
          ? html`<label class="fp3d-check fp3d-wide" title=${this.t("well_hint")}
                ><input type="checkbox" .checked=${o.well !== false} ?disabled=${!admin} @change=${(ev: Event) => this.updateOpening({ well: (ev.target as HTMLInputElement).checked ? undefined : false })} />
                ${this.t("well")}</label
              >
              ${o.well !== false ? this.len(this.t("well_rim"), o.well_rim ?? 0, (v) => this.updateOpening({ well_rim: Math.max(-0.3, Math.min(1, v)) || null }), 0.01, -0.3) : nothing}`
          : nothing}
        ${o.type === "window"
          ? html`<label class="fp3d-check fp3d-wide" title=${this.t("rain_ignore_hint")}
              ><input type="checkbox" .checked=${!!o.rain_ignore} ?disabled=${!admin} @change=${(ev: Event) => this.updateOpening({ rain_ignore: (ev.target as HTMLInputElement).checked || undefined })} />
              ${this.t("rain_ignore")}</label
            >`
          : nothing}
      </div>
      <p class="fp3d-sub">${this.t(window ? "opening_hint" : garage ? "garage_hint" : "door_hint")}</p>
      ${admin
        ? html`<div class="fp3d-actions"><button class="fp3d-btn fp3d-danger" @click=${() => this.deleteOpening()}>${this.t("delete")}</button></div>`
        : nothing}
    </section>`;
  }

  private renderFurnitureForm(f: Furniture) {
    if (this.selection().length > 1) return this.renderBlockForm();
    const admin = this.isAdmin;
    return html`<section>
      <div class="fp3d-h3row"><h3>${f.name || this.t("furniture")}</h3>${this.fixButton("furniture", f.id)}</div>
      ${f.group
        ? html`<p class="fp3d-sub fp3d-block-note">▣ ${this.t("block_part")} <button class="fp3d-link" @click=${() => {
            this._single = false;
            this.requestUpdate();
          }}>${this.t("block_select")}</button></p>`
        : nothing}
      <div class="fp3d-form">
        <label class="fp3d-field fp3d-wide"
          >${this.t("furn_name")}
          <input type="text" maxlength="60" .value=${f.name ?? ""} ?disabled=${!admin} placeholder=${this.t(`furn_${f.type}` as I18nKey) === `furn_${f.type}` ? "" : this.t(`furn_${f.type}` as I18nKey)} @change=${(e: Event) => this.updateFurniture({ name: (e.target as HTMLInputElement).value.trim() || null })} />
        </label>
        <label class="fp3d-field fp3d-wide" title=${this.t("aliases_hint")}
          >${this.t("aliases")}
          <input type="text" maxlength="240" .value=${(f.aliases ?? []).join(", ")} ?disabled=${!admin} placeholder=${this.t("aliases_placeholder")} @change=${(e: Event) => this.updateFurniture({ aliases: splitAliases((e.target as HTMLInputElement).value) })}
        /></label>
        ${f.name
          ? html`<label class="fp3d-check fp3d-wide"
              ><input type="checkbox" .checked=${!!f.show_name} ?disabled=${!admin} @change=${(ev: Event) => this.updateFurniture({ show_name: (ev.target as HTMLInputElement).checked || undefined })} />
              ${this.t("show_name")}</label
            >`
          : nothing}
        <label class="fp3d-field fp3d-wide"
          >${this.t("furniture_type")}
          <select ?disabled=${!admin} @change=${(e: Event) => this.updateFurniture({ type: (e.target as HTMLSelectElement).value })}>
            ${this.typeChoices(f.type).map((t) => html`<option value=${t} ?selected=${t === f.type}>${this.t(`furn_${t}` as I18nKey)}</option>`)}
            ${(this.packs ?? [])
              .filter((pack) => pack.items.length)
              .map(
              (pack) => html`<optgroup label=${packName(pack, (this.hass?.language ?? "de"))}>
                ${pack.items.map((it) => {
                  const t = packType(pack.id, it.id);
                  return html`<option value=${t} ?selected=${t === f.type}>${packItemName(it, this.hass?.language ?? "en")}</option>`;
                })}
              </optgroup>`,
            )}
            ${f.type.startsWith("pack:") && !(this.packs ?? []).some((p) => f.type.startsWith(`pack:${p.id}:`))
              ? html`<option value=${f.type} selected>${furnitureName(this.hass, f.type)}</option>`
              : nothing}
          </select></label
        >
        ${this.len(this.t("x"), f.x, (v) => this.updateFurniture({ x: v }))} ${this.len(this.t("z"), f.z, (v) => this.updateFurniture({ z: v }))}
        ${this.len(this.t("width"), f.w, (v) => this.updateFurniture({ w: Math.max(0.01, v) }), 0.01, 0.01)}
        ${this.len(this.t("depth"), f.d, (v) => this.updateFurniture({ d: Math.max(0.01, v) }), 0.01, 0.01)}
        ${this.len(this.t("height_m"), f.h, (v) => this.updateFurniture({ h: Math.max(0.005, v) }), 0.01, 0)}
        ${this.num(this.t("rotation"), f.rotation, (v) => this.updateFurniture({ rotation: ((v % 360) + 360) % 360 }), 1)}
        ${isLamp(f.type)
          ? nothing
          : html`<label class="fp3d-check" title=${this.t("furn_mirror_hint")}
              ><input type="checkbox" .checked=${!!f.mirror} ?disabled=${!admin} @change=${(ev: Event) => this.updateFurniture({ mirror: (ev.target as HTMLInputElement).checked })} />
              ${this.t("furn_mirror")}</label
            >`}
        ${f.type === "led_strip"
          ? html`${this.num(this.t("strip_tilt"), f.tilt ?? 0, (v) => this.updateFurniture({ tilt: Math.max(-90, Math.min(90, Math.round(v))) }), 5)}
              ${f.upright ? nothing : html`<span title=${this.t("strip_rise_hint")}>${this.num(this.t("strip_rise"), f.rise ?? 0, (v) => this.updateFurniture({ rise: Math.max(-80, Math.min(80, Math.round(v))) || undefined }), 5)}</span>`}
              <label class="fp3d-check" title=${this.t("strip_upright_hint")}
                ><input type="checkbox" .checked=${!!f.upright} ?disabled=${!admin} @change=${(ev: Event) => this.updateFurniture({ upright: (ev.target as HTMLInputElement).checked })} />
                ${this.t("strip_upright")}</label
              >`
          : nothing}
        ${canLift(f) && this.floor
          ? html`${this.len(this.t("mount_height"), f.mount_y ?? mountBase(this.floor, f), (v) => this.updateFurniture({ mount_y: Math.min(MAX_MOUNT_Y, Math.max(0, v)) }), 0.01, 0)}
              ${f.mount_y != null ? html`<button class="fp3d-btn fp3d-field-btn" ?disabled=${!admin} @click=${() => this.updateFurniture({ mount_y: null })}>${this.t("height_auto")}</button>` : nothing}`
          : nothing}
      </div>
      ${f.type === "stairs" ? html`<p class="fp3d-sub">${this.t("stairs_hint")}</p>` : nothing}
      ${f.type === "stairs_u" ? html`<p class="fp3d-sub">${this.t("stairs_u_hint")}</p>` : nothing}
      ${f.type === "stairwell"
        ? html`<p class="fp3d-sub">${this.t("stairwell_hint")}</p>
            ${this.floor && !this.floor.rooms.some((r) => r.points.length >= 3 && (holeInRoom(furnitureFootprint(f), r.points) || polygonArea(clipConvex(r.points, furnitureFootprint(f))) > 0.01))
              ? html`<p class="fp3d-sub fp3d-pack-error">${this.t("stairwell_outside")}</p>`
              : nothing}`
        : nothing}
      ${f.type === "inverter" || f.type === "home_battery"
        ? html`<div class="fp3d-form">
            <label class="fp3d-field fp3d-wide"
              >${this.t("furn_model")}
              <select ?disabled=${!admin} @change=${(e: Event) => this.updateFurniture({ variant: (e.target as HTMLSelectElement).value || null })}>
                ${(f.type === "inverter" ? (["", "slim", "hybrid"] as const) : (["", "wall", "cube"] as const)).map(
                  (v) => html`<option value=${v} ?selected=${(f.variant ?? "") === v}>${this.t(`${f.type === "inverter" ? "inverter" : "battery"}_${v || "std"}` as I18nKey)}</option>`,
                )}
              </select></label
            >
          </div>`
        : nothing}
      ${f.type === "lamp_pendant"
        ? html`<div class="fp3d-form">
            <label class="fp3d-field fp3d-wide"
              >${this.t("pendant_shape")}
              <select ?disabled=${!admin} @change=${(e: Event) => this.updateFurniture({ variant: (e.target as HTMLSelectElement).value || null })}>
                ${(["", "globe", "cone", "drum"] as const).map(
                  (v) => html`<option value=${v} ?selected=${(f.variant ?? "") === v}>${this.t(`pendant_${v || "shade"}` as I18nKey)}</option>`,
                )}
              </select></label
            >
          </div>`
        : nothing}
      ${isElectric(f.type) ? this.renderFurnitureLinks(f) : !NO_STATE_TYPES.has(f.type) ? html`<div class="fp3d-form fp3d-links">${this.renderStateLinks(f)}</div>` : nothing} ${GANG_TYPES.has(f.type) ? this.renderGangsForm(f) : nothing} ${TECH_TYPES.has(f.type) ? this.renderTechForm(f) : nothing} ${f.type === "parking" ? this.renderParkingForm(f) : nothing} ${f.type === "waste_bin" || f.type === "mailbox" ? this.renderHouseholdForm(f) : this.renderHouseholdExtras(f)}
      ${this.renderModuleFurnitureFields(f)}
      ${f.type.startsWith("pack:mastershort.vehicles:") && this.isAdmin
        ? html`<section>
            <p class="fp3d-sub">${this.t("vehicle_to_spot_hint")}</p>
            <div class="fp3d-actions"><button class="fp3d-btn fp3d-primary" @click=${() => this.vehicleToSpot(f)}>🅿 ${this.t("vehicle_to_spot")}</button></div>
          </section>`
        : nothing}
      ${admin
        ? html`<div class="fp3d-actions">
            <button class="fp3d-btn" @click=${() => this.rotateFurniture(-90)}>${this.t("rotate_left")}</button>
            <button class="fp3d-btn" @click=${() => this.rotateFurniture(90)}>${this.t("rotate_right")}</button>
            <button class="fp3d-btn" title=${this.t("wall_view_open")} @click=${() => this.openWallViewFor(f)}>▦ ${this.t("wall_view")}</button>
            ${f.entity && f.entity !== "none" && f.type !== "parking" ? html`<button class="fp3d-btn" title=${this.t("as_device_hint")} @click=${() => this.furnitureToDevice(f)}>${this.t("as_device")}</button>` : nothing}
            <button class="fp3d-btn" @click=${() => this.duplicateFurniture()}>${this.t("duplicate")}</button>
            <button class="fp3d-btn fp3d-danger" @click=${() => this.deleteFurniture()}>${this.t("delete")}</button>
          </div>
          ${this.renderMultiToggle()}`
        : nothing}
    </section>`;
  }

  private setEnergy(patch: Partial<Building["energy"]>): void {
    const next = structuredClone(this._doc);
    next.energy = { ...next.energy, ...patch };
    this.setDoc(next);
  }

  /** Fill the balance from Home Assistant's energy dashboard: its statistics lead to power sensors of the same devices. */
  private async importEnergyPrefs(): Promise<void> {
    if (!this.hass) return;
    let prefs: EnergyPrefs;
    try {
      prefs = await this.hass.callWS<EnergyPrefs>({ type: "energy/get_prefs" });
    } catch {
      this._energyNote = this.t("energy_import_failed");
      return;
    }
    const found = proposeEnergySensors(this.hass, prefs);
    // the sensors go to the devices in the plan (meter, inverter, battery), which are created when missing;
    // only empty fields are filled: what the user chose stays
    let n = 0;
    const find = (type: string) => this._doc.floors.flatMap((f) => f.furniture).find((m) => m.type === type);
    const put = (type: string, key: "power" | "soc", value: string | null | undefined) => {
      if (!value) return;
      let m = find(type);
      if (!m && this.floor) {
        this.addEnergyDevice(type);
        m = find(type);
      }
      if (!m || (m[key] && m[key] !== "none")) return;
      const id = m.id;
      this.change((d) => {
        const x = d.floors.flatMap((f) => f.furniture).find((y) => y.id === id);
        if (x) x[key] = value;
      });
      n++;
    };
    put("meter", "power", found.grid);
    put("inverter", "power", found.solar);
    put("home_battery", "power", found.battery);
    put("home_battery", "soc", found.battery_soc);
    // gas and water meters go to the balance itself (they have no device in the plan)
    const meters = proposeMeters(prefs);
    for (const key of ["gas", "water"] as const) {
      if (meters[key] && !this._doc.energy[key]) {
        this.setEnergy({ [key]: meters[key] });
        n++;
      }
    }
    this.selectItem("furniture", null);
    this._energyNote = n ? this.t("energy_import_done", { n }) : this.t("energy_import_none");
  }

  /** Grid, solar, battery and house sensors: from the devices in the plan unless chosen here. */
  private renderEnergyBalance() {
    const e = this._doc.energy;
    const admin = this.isAdmin;
    const attr = (id: string, key: string) => this.hass?.states[id]?.attributes[key] as string | undefined;
    const power = this.entityOptions((id) => this.isPowerSensor(id));
    const soc = this.entityOptions((id) => numberish(id) && attr(id, "device_class") === "battery");
    const tariff = this.entityOptions(
      (id) => numberish(id) && (attr(id, "device_class") === "monetary" || /\/(kWh|MWh)$/.test(attr(id, "unit_of_measurement") ?? "")),
    );
    const pick = (key: "grid" | "solar" | "battery" | "battery_soc" | "consumption" | "tariff") => (v: string | null) => this.setEnergy({ [key]: v === "none" ? null : v });
    // gas and water meters: counters of that device class, or in m³, litres, ft³ or gallons
    const meter = (kind: "gas" | "water") =>
      this.entityOptions((id) => numberish(id) && (attr(id, "device_class") === kind || /^(m³|m3|L|l|ft³|gal|CCF)$/.test(attr(id, "unit_of_measurement") ?? "")));
    const links = this.hass ? furnitureEntities(this.hass, this._doc.floors) : new Map<string, { power: string | null }>();
    const devices = deviceSensors(this._doc, (f) => this.devicePower(f, links));
    // the usual trap: a sign the wrong way round – exporting without any sun, or a battery charging at night
    const sum = this.hass ? energySummary(this.hass, this._doc, [], devices) : null;
    const night = !!sum && (sum.solar ?? 0) < 20;
    const gridWrong = night && sum!.grid !== null && sum!.grid < -50;
    const batteryWrong = night && sum!.battery !== null && sum!.battery < -50 && (sum!.grid ?? 0) <= 0;
    return html`<section>
      <h3>⚖ ${this.t("energy_balance")}</h3>
      <p class="fp3d-sub">${this.t("energy_balance_hint")}</p>
      ${gridWrong
        ? html`<p class="fp3d-sub fp3d-pack-error">${this.t("energy_sign_grid")} <button class="fp3d-btn" ?disabled=${!admin} @click=${() => this.setEnergy({ grid_invert: !e.grid_invert })}>${this.t("energy_sign_flip")}</button></p>`
        : nothing}
      ${batteryWrong
        ? html`<p class="fp3d-sub fp3d-pack-error">${this.t("energy_sign_battery")} <button class="fp3d-btn" ?disabled=${!admin} @click=${() => this.setEnergy({ battery_invert: !e.battery_invert })}>${this.t("energy_sign_flip")}</button></p>`
        : nothing}
      <div class="fp3d-form">
        ${this.entitySelect(this.t("energy_grid"), e.grid, devices.grid, power, pick("grid"))}
        <label class="fp3d-check fp3d-wide"
          ><input type="checkbox" .checked=${e.grid_invert} ?disabled=${!admin} @change=${(ev: Event) => this.setEnergy({ grid_invert: (ev.target as HTMLInputElement).checked })} />
          ${this.t("energy_invert")}</label
        >
        ${this.entitySelect(this.t("energy_solar_sensor"), e.solar, devices.solar[0] ?? null, power, pick("solar"))}
        ${this.entitySelect(this.t("energy_battery_sensor"), e.battery, devices.battery[0] ?? null, power, pick("battery"))}
        <label class="fp3d-check fp3d-wide"
          ><input type="checkbox" .checked=${e.battery_invert} ?disabled=${!admin} @change=${(ev: Event) => this.setEnergy({ battery_invert: (ev.target as HTMLInputElement).checked })} />
          ${this.t("energy_invert")}</label
        >
        ${this.entitySelect(this.t("energy_battery_soc"), e.battery_soc, devices.soc[0] ?? null, soc, pick("battery_soc"))}
        ${this.entitySelect(this.t("energy_consumption_sensor"), e.consumption, null, power, pick("consumption"))}
        ${this.entitySelect(this.t("energy_tariff_sensor"), e.tariff, undefined, tariff, pick("tariff"))}
        ${this.entitySelect(this.t("energy_gas_meter"), e.gas ?? null, undefined, meter("gas"), (v) => this.setEnergy({ gas: v === "none" ? null : v }))}
        ${this.entitySelect(this.t("energy_water_meter"), e.water ?? null, undefined, meter("water"), (v) => this.setEnergy({ water: v === "none" ? null : v }))}
      </div>
      <p class="fp3d-sub">${this.t("energy_meters_hint")}</p>
      <div class="fp3d-actions">
        <button class="fp3d-btn" ?disabled=${!admin || !this.hass} @click=${() => this.importEnergyPrefs()}>${this.t("energy_import_prefs")}</button>
      </div>
      ${this._energyNote ? html`<p class="fp3d-sub">${this._energyNote}</p>` : nothing}
      <p class="fp3d-sub">${this.t("energy_hint")}</p>
    </section>`;
  }

  /** Attic floors: dashed lines where the roof slope leaves 1.5 m and 2 m of headroom, with labels. */
  private renderHeadroom(floor: Floor) {
    const ceiling = floor.elevation + floor.height;
    const sections = activeSections(this._doc);
    if (!sections.some((s) => sectionCutsBelow(s, ceiling) && sectionAbove(s, floor.elevation))) return nothing;
    const b = { settings: this._doc.settings };
    return svg`${[1.5, 2].map((h) =>
      headroomLines(b, floor.elevation, h).map(([p, q]) => {
        const [x1, y1] = this.toScreen(p);
        const [x2, y2] = this.toScreen(q);
        return svg`<line class="fp3d-headroom" x1=${x1} y1=${y1} x2=${x2} y2=${y2} />
          <text class="fp3d-headroom-label" x=${(x1 + x2) / 2} y=${(y1 + y2) / 2 - 4}>${this.m(h, 1)}</text>`;
      }),
    )}`;
  }

  /** Favourites of the house: scenes, scripts and switches in the central menu (star) of the 3D view (#145). */
  private renderFavorites() {
    const list = this._doc.settings.favorites ?? [];
    const domains = ["scene", "script", "automation", "button", "input_button", "switch", "input_boolean", "light", "fan", "cover", "lock"];
    const options = this.entityOptions((id) => domains.includes(id.split(".")[0]) && !list.includes(id));
    const set = (next: string[]) => this.change((d) => (d.settings.favorites = next.length ? next : undefined));
    const move = (i: number, by: number) => {
      const next = [...list];
      const [x] = next.splice(i, 1);
      next.splice(Math.max(0, Math.min(next.length, i + by)), 0, x);
      set(next);
    };
    return html`<details class="fp3d-section">
      <summary>${this.t("favorites")}${list.length ? html` <span class="fp3d-lib-count">${list.length}</span>` : nothing}</summary>
      <p class="fp3d-sub">${this.t("favorites_hint")}</p>
      ${list.map(
        (id, i) => html`<div class="fp3d-row fp3d-dev-row">
          <span class="fp3d-dev-name"><span>${entityName(this.hass, id)}</span></span>
          <button class="fp3d-pin" title=${this.t("move_up")} ?disabled=${i === 0} @click=${() => move(i, -1)}>↑</button>
          <button class="fp3d-pin" title=${this.t("move_down")} ?disabled=${i === list.length - 1} @click=${() => move(i, 1)}>↓</button>
          <button class="fp3d-pin" title=${this.t("delete")} @click=${() => set(list.filter((x) => x !== id))}>✕</button>
        </div>`,
      )}
      ${list.length < 40
        ? html`<div class="fp3d-form">
            ${this.entitySelect(this.t("favorites_add"), null, undefined, options, (v) => {
              if (v && v !== "none" && !list.includes(v)) set([...list, v]);
            })}
          </div>`
        : nothing}
      ${this.renderOwnButtons()} ${this.renderMediaPresets()}
    </details>`;
  }

  /** Klang & Kino: stations and playlists to start on a speaker from its quick menu. */
  private renderMediaPresets() {
    const list = this._doc.settings.media_presets ?? [];
    const set = (next: MediaPreset[]) => this.change((d) => (d.settings.media_presets = next.length ? next : undefined));
    const upd = (i: number, patch: Partial<MediaPreset>) => set(list.map((p, j) => (j === i ? { ...p, ...patch } : p)));
    return html`<h4>${this.t("presets")}</h4>
      <p class="fp3d-sub">${this.t("presets_hint")}</p>
      <datalist id="fp3d-preset-types">
        ${["music", "url", "playlist", "SPOTIFY", "AMAZON_MUSIC", "TUNEIN", "APPLE_MUSIC"].map((t) => html`<option value=${t}></option>`)}
      </datalist>
      ${list.map(
        (p, i) => html`<div class="fp3d-form fp3d-own-button">
          <label class="fp3d-field"
            >${this.t("own_button_label")}
            <input type="text" maxlength="60" .value=${p.label} @change=${(e: Event) => upd(i, { label: (e.target as HTMLInputElement).value.trim() || "Radio" })}
          /></label>
          <label class="fp3d-field" title=${this.t("preset_type_hint")}
            >${this.t("preset_type")}
            <input type="text" list="fp3d-preset-types" .value=${p.type} @change=${(e: Event) => upd(i, { type: (e.target as HTMLInputElement).value.trim() || "music" })}
          /></label>
          <label class="fp3d-field fp3d-wide" title=${this.t("preset_content_hint")}
            >${this.t("preset_content")}
            <input type="text" .value=${p.content} placeholder="https://… · spotify:playlist:… · Rock Antenne" @change=${(e: Event) => upd(i, { content: (e.target as HTMLInputElement).value.trim() })}
          /></label>
          <div class="fp3d-actions fp3d-wide">
            <button class="fp3d-btn fp3d-danger" @click=${() => set(list.filter((_, j) => j !== i))}>${this.t("delete")}</button>
          </div>
        </div>`,
      )}
      ${list.length < 30
        ? html`<div class="fp3d-actions">
            <button class="fp3d-btn" @click=${() => set([...list, { id: uid("preset"), label: "Radio", type: "music", content: "" }])}>+ ${this.t("preset_add")}</button>
          </div>`
        : nothing}`;
  }

  /** Own buttons of the central menu (D143): label, icon, action, target and data. */
  private renderOwnButtons() {
    const list = this._doc.settings.buttons ?? [];
    const set = (next: CustomButton[]) => this.change((d) => (d.settings.buttons = next.length ? next : undefined));
    const upd = (i: number, patch: Partial<CustomButton>) => set(list.map((b, j) => (j === i ? { ...b, ...patch } : b)));
    const placeholder: Record<ButtonAction, string> = { navigate: "/lovelace/rollos", more_info: "cover.wohnzimmer", service: "script.turn_on", fire_dom_event: "" };
    return html`<h4>${this.t("own_buttons")}</h4>
      <p class="fp3d-sub">${this.t("own_buttons_hint")}</p>
      ${list.map(
        (b, i) => html`<div class="fp3d-form fp3d-own-button">
          <label class="fp3d-field"
            >${this.t("own_button_label")}
            <input type="text" maxlength="60" .value=${b.label} @change=${(e: Event) => upd(i, { label: (e.target as HTMLInputElement).value.trim() || this.t("own_button_new") })}
          /></label>
          <label class="fp3d-field"
            >${this.t("own_button_action")}
            <select @change=${(e: Event) => upd(i, { action: (e.target as HTMLSelectElement).value as ButtonAction })}>
              ${BUTTON_ACTIONS.map((a) => html`<option value=${a} ?selected=${a === b.action}>${this.t(`own_action_${a}` as I18nKey)}</option>`)}
            </select></label
          >
          ${this.iconInput(b.icon ?? null, (v) => upd(i, { icon: v }))}
          ${b.action !== "fire_dom_event"
            ? html`<label class="fp3d-field fp3d-wide"
                >${this.t(`own_target_${b.action}` as I18nKey)}
                <input type="text" .value=${b.target ?? ""} placeholder=${placeholder[b.action]} @change=${(e: Event) => upd(i, { target: (e.target as HTMLInputElement).value.trim() || null })}
              /></label>`
            : nothing}
          ${b.action === "service" || b.action === "fire_dom_event"
            ? html`<label class="fp3d-field fp3d-wide" title=${this.t("own_data_hint")}
                >${this.t("own_data")}
                <textarea
                  rows="4"
                  spellcheck="false"
                  placeholder=${b.action === "fire_dom_event" ? '{"browser_mod": {"service": "browser_mod.popup", "data": {"title": "Rollos", "content": {"type": "custom:my-cover-card"}}}}' : '{"entity_id": "script.party"}'}
                  .value=${b.data ? JSON.stringify(b.data, null, 1) : ""}
                  @change=${(e: Event) => {
                    (e.target as HTMLTextAreaElement).setCustomValidity("");
                    const raw = (e.target as HTMLTextAreaElement).value.trim();
                    if (!raw) return upd(i, { data: null });
                    try {
                      const v = JSON.parse(raw);
                      if (v && typeof v === "object" && !Array.isArray(v)) upd(i, { data: v });
                    } catch {
                      (e.target as HTMLTextAreaElement).setCustomValidity(this.t("own_data_bad"));
                      (e.target as HTMLTextAreaElement).reportValidity();
                    }
                  }}
                ></textarea></label
              >`
            : nothing}
          <div class="fp3d-actions fp3d-wide">
            <button class="fp3d-btn" ?disabled=${i === 0} @click=${() => set([...list.slice(0, i - 1), b, list[i - 1], ...list.slice(i + 1)])}>↑</button>
            <button class="fp3d-btn fp3d-danger" @click=${() => set(list.filter((_, j) => j !== i))}>${this.t("delete")}</button>
          </div>
        </div>`,
      )}
      ${list.length < 20
        ? html`<div class="fp3d-actions">
            <button class="fp3d-btn" @click=${() => set([...list, { id: uid("btn"), label: this.t("own_button_new"), action: "navigate", target: null }])}>+ ${this.t("own_button_add")}</button>
          </div>`
        : nothing}`;
  }

  /** The camera of the editor's 3D pane as it stands right now, rounded for the plan (null: no pane). */
  private paneView(): StartView | null {
    const pane = this.renderRoot.querySelector("fp3d-view3d") as (HTMLElement & { currentView(): StartView | null }) | null;
    const v = pane?.currentView();
    if (!v) return null;
    const t = v.target;
    return { theta: round(v.theta), phi: round(v.phi), radius: round(v.radius), ...(t ? { target: { x: round(t.x), y: round(t.y), z: round(t.z) } } : {}) };
  }

  /** This floor opens with the camera of the editor's 3D pane as it stands right now (#182). */
  private rememberFloorView(): void {
    const v = this.paneView();
    if (!v) {
      alert(this.t("floor_start_view_need_pane"));
      return;
    }
    this.updateFloor({ start_view: v });
  }

  /** Tapping this room in 3D flies to the camera of the editor's 3D pane as it stands right now (#282). */
  private rememberRoomView(): void {
    const v = this.paneView();
    if (!v) {
      alert(this.t("room_start_view_need_pane"));
      return;
    }
    this.updateRoom({ start_view: v });
  }

  /** The camera the house opens with: the editor's 3D pane as it stands right now, or the default. */
  /** Live director: own triggers – an entity that goes on or open and the camera to show for it (D615). */
  private renderDirectorTriggers(d: DirectorSettings, placed: string[]) {
    const hass = this.hass;
    if (!hass) return nothing;
    const list = d.triggers ?? [];
    const save = (next: { entity: string; camera: string | null }[]) => this.change((doc) => (doc.settings.director = { ...(doc.settings.director ?? {}), triggers: next.length ? next : null }));
    const pro = hasFeature("camera_cockpit");
    return html`<div class="fp3d-wide">
      <h4 class="fp3d-lib-head">${this.t("director_triggers")}</h4>
      <p class="fp3d-sub">${this.t("director_triggers_hint")}</p>
      ${list.map(
        (t, i) => html`<div class="fp3d-form">
          ${this.entitySelect(this.t("director_trigger_entity"), t.entity || null, undefined, this.entityOptions((id) => /^(event|binary_sensor|cover|lock|switch|input_boolean)\./.test(id)), (v) =>
            save(list.map((x, k) => (k === i ? { ...x, entity: v && v !== "none" ? v : "" } : x)).filter((x) => x.entity)),
          )}
          ${this.entitySelect(this.t("director_doorbell_camera"), t.camera, undefined, this.entityOptions((id) => id.startsWith("camera.") && placed.includes(id)), (v) =>
            save(list.map((x, k) => (k === i ? { ...x, camera: v && v !== "none" ? v : null } : x))),
          )}
          <button class="fp3d-btn" ?disabled=${!pro} @click=${() => save(list.filter((_, k) => k !== i))}>✕ ${this.t("delete")}</button>
        </div>`,
      )}
      ${list.length < 20 && pro
        ? html`<div class="fp3d-form">
            ${this.entitySelect(this.t("director_trigger_add"), null, undefined, this.entityOptions((id) => /^(event|binary_sensor|cover|lock|switch|input_boolean)\./.test(id)), (v) => {
              if (v && v !== "none") save([...list, { entity: v, camera: null }]);
            })}
          </div>`
        : nothing}
    </div>`;
  }

  /**
   * Kamera-Cockpit: the live director – which events a screen shows by itself (each off until switched on), and the
   * switch for this device (a card has its own option).
   */
  private renderDirector() {
    const hass = this.hass;
    const d: DirectorSettings = this._doc.settings.director ?? {};
    const set = (patch: Partial<DirectorSettings>) => this.change((doc) => (doc.settings.director = { ...(doc.settings.director ?? {}), ...patch }));
    const pro = hasFeature("camera_cockpit");
    const here = directorOnHere();
    const placed = [...new Set(this._doc.floors.flatMap((f) => f.placements.map((p) => p.entity_id)))];
    const bells = hass ? doorbellEntities(hass) : [];
    const bell = hass ? (d.doorbell_entity ?? bells[0] ?? null) : null;
    const autoCam = hass && bell ? doorbellCamera(hass, bell, placed) : null;
    const check = (label: I18nKey, on: boolean, change: (on: boolean) => void, disabled = !pro) =>
      html`<label class="fp3d-check fp3d-wide"
        ><input type="checkbox" .checked=${on} ?disabled=${disabled} @change=${(e: Event) => change((e.target as HTMLInputElement).checked)} /> ${this.t(label)}</label
      >`;
    return html`<details class="fp3d-section">
      <summary>🎬 ${this.t("director")}</summary>
      <p class="fp3d-sub">${this.t("director_hint")}</p>
      ${pro ? nothing : html`<p class="fp3d-sub">🔒 ${this.t("pro_feature_camera_cockpit")}</p>`}
      <div class="fp3d-form">
        ${check("director_here", here, (on) => {
          setDirectorHere(on);
          this.dispatchEvent(new CustomEvent("director-here", { bubbles: true, composed: true }));
          this.requestUpdate();
        })}
        <p class="fp3d-sub fp3d-wide">${this.t("director_here_hint")}</p>
        ${check("director_doorbell", !!d.doorbell, (on) => set({ doorbell: on }))}
        ${d.doorbell && hass
          ? html`${this.entitySelect(this.t("director_doorbell_entity"), d.doorbell_entity ?? null, bells[0] ?? null, this.entityOptions((id) => id.startsWith("event.") || id.startsWith("binary_sensor.")), (v) =>
              set({ doorbell_entity: v === "none" ? null : v }),
            )}
            ${this.entitySelect(this.t("director_doorbell_camera"), d.doorbell_camera ?? null, autoCam, this.entityOptions((id) => id.startsWith("camera.") && placed.includes(id)), (v) =>
              set({ doorbell_camera: v === "none" ? null : v }),
            )}
            ${!bells.length && !d.doorbell_entity ? html`<p class="fp3d-sub fp3d-wide">${this.t("director_no_doorbell")}</p>` : nothing}`
          : nothing}
        <label class="fp3d-field fp3d-wide"
          >${this.t("director_motion")}
          <select ?disabled=${!pro} @change=${(e: Event) => set({ motion: (e.target as HTMLSelectElement).value as DirectorSettings["motion"] })}>
            ${(["off", "person", "all"] as const).map((m) => html`<option value=${m} ?selected=${(d.motion ?? "off") === m}>${this.t(`director_motion_${m}`)}</option>`)}
          </select></label
        >
        ${check("director_appliances", !!d.appliances, (on) => set({ appliances: on }))}
        ${check("director_alerts", !!d.alerts, (on) => set({ alerts: on }))}
        ${this.renderDirectorTriggers(d, placed)}
        ${check("director_live", !!d.live, (on) => set({ live: on }))}
        <p class="fp3d-sub fp3d-wide">${this.t("director_live_hint")}</p>
        ${this.num(this.t("director_hold"), d.hold ?? HOLD_DEFAULT, (v) => set({ hold: Math.min(HOLD_MAX, Math.max(HOLD_MIN, Math.round(v))) }), 5, HOLD_MIN)}
      </div>
      <p class="fp3d-sub">${this.t("director_back_hint")}</p>
    </details>`;
  }

  private voicePipes: { id: string; name: string; stt: boolean }[] | null = null;
  private voicePipesAsked = false;
  private voiceSentences: SentenceMode | null = null;
  /** What became of the last sentence choice (a file the user changed is kept, writing failed). */
  private voiceSentencesMsg: string | null = null;

  /** The Assist pipeline for this device's voice control: Home Assistant's preferred one, or one chosen here. */
  private renderVoicePipeline() {
    const hass = this.hass;
    if (!hass) return nothing;
    if (!this.voicePipesAsked) {
      this.voicePipesAsked = true;
      getVoiceSettings(hass)
        .then((res) => {
          this.voiceSentences = res.sentences;
          this.requestUpdate();
        })
        .catch(() => (this.voiceSentences = "off"));
      hass
        .callWS<{ pipelines: { id: string; name: string; stt_engine: string | null }[] }>({ type: "assist_pipeline/pipeline/list" })
        .then((res) => {
          this.voicePipes = res.pipelines.map((p) => ({ id: p.id, name: p.name, stt: !!p.stt_engine }));
          this.requestUpdate();
        })
        .catch(() => undefined);
    }
    const own = voicePipeline();
    const modes = ["distinct", "all", "off"] as const;
    return html`<div class="fp3d-form">
      <label class="fp3d-field fp3d-wide"
        >${this.t("voice_sentences")}
        <select
          ?disabled=${!this.isAdmin || this.voiceSentences === null}
          @change=${(e: Event) => {
            const mode = (e.target as HTMLSelectElement).value as SentenceMode;
            this.voiceSentences = mode;
            this.voiceSentencesMsg = null;
            void setVoiceSentences(hass, mode)
              .then((res) => {
                if (res.kept?.length) this.voiceSentencesMsg = this.t("voice_sentences_kept", { langs: res.kept.join(", ") });
                this.requestUpdate();
              })
              .catch(() => {
                this.voiceSentencesMsg = this.t("voice_sentences_failed");
                this.requestUpdate();
              });
          }}
        >
          ${modes.map((m) => html`<option value=${m} ?selected=${(this.voiceSentences ?? "off") === m}>${this.t(`voice_sentences_${m}`)}</option>`)}
        </select></label
      >
      ${this.voiceSentencesMsg ? html`<p class="fp3d-sub fp3d-wide fp3d-pack-error">${this.voiceSentencesMsg}</p>` : nothing}
      <p class="fp3d-sub fp3d-wide">${this.t("voice_sentences_hint")} ${this.t("voice_sentences_file")}</p>
      <label class="fp3d-field fp3d-wide"
        >${this.t("voice_pipeline")}
        <select
          @change=${(e: Event) => {
            setVoicePipeline((e.target as HTMLSelectElement).value || null);
            this.requestUpdate();
          }}
        >
          <option value="" ?selected=${!own}>${this.t("voice_pipeline_preferred")}</option>
          ${(this.voicePipes ?? []).map((p) => html`<option value=${p.id} ?selected=${own === p.id} ?disabled=${!p.stt}>${p.name}${p.stt ? "" : ` (${this.t("voice_pipeline_no_stt")})`}</option>`)}
        </select></label
      >
    </div>`;
  }

  /** Voice control: the microphone button on this device (a card has its own option), and the microphone test. */
  private renderVoice() {
    const here = voiceOnHere();
    const examples = [...this.t("voice_examples").split("|"), ...moduleHelp(this.hass?.language ?? "en")];
    return html`<details class="fp3d-section">
      <summary>🎙️ ${this.t("voice")}</summary>
      <p class="fp3d-sub">${this.t("voice_hint")}</p>
      <p class="fp3d-sub"><b>${this.t("voice_understands")}</b></p>
      <ul class="fp3d-voice-list">
        ${examples.map((e) => html`<li>${e}</li>`)}
      </ul>
      <div class="fp3d-form">
        <label class="fp3d-check fp3d-wide"
          ><input
            type="checkbox"
            .checked=${here}
            @change=${(e: Event) => {
              setVoiceHere((e.target as HTMLInputElement).checked);
              this.dispatchEvent(new CustomEvent("voice-here", { bubbles: true, composed: true }));
              this.requestUpdate();
            }}
          />
          ${this.t("voice_here")}</label
        >
        <label class="fp3d-wide"
          >${this.t("screen_name")}
          <input
            type="text"
            .value=${screenName()}
            placeholder=${this.t("screen_name_placeholder")}
            @change=${(e: Event) => {
              setScreenName((e.target as HTMLInputElement).value);
              this.dispatchEvent(new CustomEvent("voice-here", { bubbles: true, composed: true }));
            }}
          />
        </label>
      </div>
      <p class="fp3d-sub">${this.t("screen_name_hint")}</p>
      ${this.renderVoicePipeline()}
      <p class="fp3d-sub">${this.t("voice_needs")}</p>
      <div class="fp3d-actions">
        <button class="fp3d-btn" @click=${() => this.dispatchEvent(new CustomEvent("mic-probe", { bubbles: true, composed: true }))}>${this.t("director_mic_test")}</button>
      </div>
      <p class="fp3d-sub">${this.t("director_mic_hint")}</p>
    </details>`;
  }

  private renderPresenceSettings() {
    const persons = Object.keys(this.hass?.states ?? {})
      .filter((id) => id.startsWith("person."))
      .sort();
    const sensors = (person: string) => {
      // likely room sensors of this person first (ESPresense / Bermuda name them after the device)
      const slug = person.slice("person.".length);
      const all = this.entityOptions((id) => numberish(id));
      const likely = (id: string) => id.includes(slug) && /(area|room|raum|bermuda|espresense)/.test(id);
      return [...all.filter((o) => likely(o.id)), ...all.filter((o) => !likely(o.id))];
    };
    const set = (person: string, sensor: string | null) => {
      const next = structuredClone(this._doc);
      next.presence = next.presence.filter((p) => p.person !== person);
      if (sensor && sensor !== "none") next.presence.push({ person, sensor });
      this.setDoc(next);
    };
    return html`<details class="fp3d-section">
      <summary>${this.t("presence")}</summary>
      <div class="fp3d-form">
        ${persons.length
          ? persons.map((id) =>
              this.entitySelect(
                `${entityName(this.hass, id)} · ${this.t("presence_sensor")}`,
                this._doc.presence.find((p) => p.person === id)?.sensor ?? null,
                undefined,
                sensors(id),
                (v) => set(id, v),
              ),
            )
          : html`<p class="fp3d-sub fp3d-wide">${this.t("no_persons")}</p>`}
      </div>
      <p class="fp3d-sub">${this.t("presence_hint")}</p>
    </details>`;
  }

  /** "State from": an entity lights the item's top (two light its halves) – any furniture, a bed with occupancy mats too (#116). */
  private renderStateLinks(f: Furniture) {
    return html`${this.entitySelect(this.t("furn_state_entity"), f.state_entity ?? null, undefined, this.entityOptions((id) => /^(binary_sensor|switch|input_boolean|light|fan|person|device_tracker|sensor)\./.test(id)), (v) => this.updateFurniture(clearFirstState(f, v)))}
              ${f.state_entity && f.state_entity !== "none"
                ? html`${this.entitySelect(this.t("furn_state_entity2"), f.state_entity2 ?? null, undefined, this.entityOptions((id) => /^(binary_sensor|switch|input_boolean|light|fan|person|device_tracker|sensor)\./.test(id)), (v) => this.updateFurniture({ state_entity2: v === "none" ? null : v }))}
                    ${f.state_entity2 && f.state_entity2 !== "none"
                      ? html`<label class="fp3d-field"
                          >${this.t("furn_state_split")}
                          <select ?disabled=${!this.isAdmin} @change=${(e: Event) => this.updateFurniture({ state_split: (e.target as HTMLSelectElement).value === "top_bottom" ? "top_bottom" : "left_right" })}>
                            <option value="left_right" ?selected=${f.state_split !== "top_bottom"}>${this.t("furn_state_left_right")}</option>
                            <option value="top_bottom" ?selected=${f.state_split === "top_bottom"}>${this.t("furn_state_top_bottom")}</option>
                          </select></label
                        >`
                      : nothing}`
                : nothing}
              <p class="fp3d-sub fp3d-wide">${this.t("furn_state_hint")}</p>`;
  }

  /** Awning: its fall, the valance, a position sensor, its run time and the other direction (with the cover above). */
  /** Haushalt Pro: the house's household settings (the hours the bins glow – for all bins). */
  private setHousehold(patch: NonNullable<Building["settings"]["household"]>): void {
    const next = structuredClone(this._doc);
    next.settings.household = { ...(next.settings.household ?? {}), ...patch };
    this.setDoc(next);
  }

  /**
   * Waste bin and mailbox: shape and colours for everyone; the waste calendar and the post sensors with Haushalt Pro
   * (a teaser while it is locked).
   */
  private renderHouseholdForm(f: Furniture) {
    const admin = this.isAdmin;
    const lang = this.hass?.language;
    const pro = hasFeature("household");
    const teaser = !pro && released("household")
      ? html`<section class="fp3d-teaser fp3d-wide">
          <div class="fp3d-teaser-head">
            <b>🏠 ${this.t("pro_name_household")}</b>
            <a class="fp3d-btn fp3d-primary" href=${isBeta("household") ? supporterUrl(lang) : shopUrl(lang)} target="_blank" rel="noopener">${this.t(isBeta("household") ? "beta_become" : "pro_unlock")}</a>
          </div>
          <p class="fp3d-sub">${this.t(f.type === "waste_bin" ? "household_teaser_bin" : "household_teaser_mail")}</p>
        </section>`
      : nothing;
    const select = <T extends string>(label: string, value: T, options: readonly T[], key: (o: T) => I18nKey, onChange: (v: T) => void) =>
      html`<label class="fp3d-field fp3d-wide"
        >${label}
        <select ?disabled=${!admin} @change=${(e: Event) => onChange((e.target as HTMLSelectElement).value as T)}>
          ${options.map((o) => html`<option value=${o} ?selected=${o === value}>${this.t(key(o))}</option>`)}
        </select></label
      >`;
    if (f.type === "waste_bin") {
      const shape = binShape(f);
      const kind = f.bin_kind ?? "rest";
      const [body, lid] = binColors(f);
      const sources = this.entityOptions((id) => id.startsWith("calendar.") || id.startsWith("sensor."));
      return html`<div class="fp3d-form fp3d-links">
        ${select(this.t("bin_shape"), shape, BIN_SHAPES, (o) => `bin_shape_${o}` as I18nKey, (v) => {
          const [w, d, h] = BIN_SIZE[v];
          this.updateFurniture({ variant: v === "bin240" ? null : v, w, d, h });
        })}
        ${select(this.t("bin_kind"), kind, WASTE_KINDS, (o) => `bin_kind_${o}` as I18nKey, (v) => {
          // a new kind starts from its usual colours in this country
          const [b, l] = wasteColors(v, householdCountry());
          this.updateFurniture({ bin_kind: v, bin_color: b, bin_lid: l === b ? null : l });
        })}
        <label class="fp3d-field"
          >${this.t("bin_color")}
          <input type="color" .value=${body} ?disabled=${!admin} @change=${(e: Event) => this.updateFurniture({ bin_color: (e.target as HTMLInputElement).value })}
        /></label>
        <label class="fp3d-field"
          >${this.t("bin_lid")}
          <input type="color" .value=${lid} ?disabled=${!admin} @change=${(e: Event) => this.updateFurniture({ bin_lid: (e.target as HTMLInputElement).value })}
        /></label>
        ${pro
          ? html`${this.entitySelect(this.t("bin_source"), f.bin_source ?? null, undefined, sources, (v) => this.updateFurniture({ bin_source: v === "none" ? null : v }))}
              <label class="fp3d-field fp3d-wide"
                >${this.t("bin_match")}
                <input type="text" .value=${f.bin_match ?? ""} placeholder=${this.t(`bin_kind_${kind}` as I18nKey)} ?disabled=${!admin}
                  @change=${(e: Event) => this.updateFurniture({ bin_match: (e.target as HTMLInputElement).value.trim() || null })} /></label>
              ${this.num(this.t("bin_from"), this._doc.settings.household?.bin_from ?? 14, (v) => this.setHousehold({ bin_from: Math.max(0, Math.min(24, v)) }), 0.5)}
              ${this.num(this.t("bin_until"), this._doc.settings.household?.bin_until ?? 12, (v) => this.setHousehold({ bin_until: Math.max(0, Math.min(24, v)) }), 0.5)}
              <p class="fp3d-sub fp3d-wide">${this.t("bin_hint")}</p>
              ${this.entitySelect(this.t("bin_out"), f.bin_out ?? null, undefined, this.entityOptions((id) => /^(input_boolean|switch|binary_sensor)\./.test(id)), (v) => this.updateFurniture({ bin_out: v === "none" ? null : v }))}
              <p class="fp3d-sub fp3d-wide">${this.t("bin_out_hint")}</p>
              <label class="fp3d-check fp3d-wide"
                ><input type="checkbox" .checked=${!!this._doc.settings.household?.bin_next_only} ?disabled=${!admin} @change=${(e: Event) => this.setHousehold({ bin_next_only: (e.target as HTMLInputElement).checked || null })} />
                ${this.t("bin_next_only")}</label
              >
              <label class="fp3d-field"
                >${this.t("bin_days")}
                <input type="number" inputmode="numeric" min="0" max="60" step="1" placeholder=${this.t("bin_days_always")} .value=${this._doc.settings.household?.bin_days == null ? "" : String(this._doc.settings.household.bin_days)} ?disabled=${!admin}
                  @change=${(e: Event) => {
                    const v = parseInt((e.target as HTMLInputElement).value, 10);
                    this.setHousehold({ bin_days: Number.isFinite(v) ? Math.max(0, Math.min(60, v)) : null });
                  }}
              /></label>
              <p class="fp3d-sub fp3d-wide">${this.t("bin_tags_hint")}</p>`
          : teaser}
      </div>`;
    }
    const shape = mailboxShape(f);
    const flags = this.entityOptions((id) => ["binary_sensor.", "input_boolean.", "sensor.", "counter.", "input_number."].some((d) => id.startsWith(d)));
    const doors = this.entityOptions((id) => id.startsWith("binary_sensor."));
    return html`<div class="fp3d-form fp3d-links">
      ${select(this.t("mailbox_shape"), shape, MAILBOX_SHAPES, (o) => `mailbox_shape_${o}` as I18nKey, (v) => {
        const [w, d, h] = MAILBOX_SIZE[v];
        this.updateFurniture({ variant: v === "wall" ? null : v, w, d, h });
      })}
      ${pro
        ? html`${this.entitySelect(this.t("mailbox_entity"), typeof f.entity === "string" && f.entity !== "none" ? f.entity : null, undefined, flags, (v) => this.updateFurniture({ entity: v ?? "none" }))}
            ${this.entitySelect(this.t("mailbox_door"), f.mailbox_door ?? null, undefined, doors, (v) => this.updateFurniture({ mailbox_door: v === "none" ? null : v }))}
            <p class="fp3d-sub fp3d-wide">${this.t("mailbox_hint")}</p>`
        : teaser}
    </div>`;
  }

  /**
   * Haushalt Pro on other items: a plant's moisture, a washer's time left and door, a fridge's door warning, and a
   * consumable or service for every electric item. A teaser on plants, appliances and fridges while it is locked.
   */
  private renderHouseholdExtras(f: Furniture) {
    const plant = f.type === "plant" || isPackPlant(f.type);
    const appliance = f.type === "washer" || f.type === "dryer" || f.type === "dishwasher";
    const fridge = f.type === "fridge" || f.type === "fridge_smart";
    const electric = isElectric(f.type);
    if (!plant && !electric) return nothing;
    if (!hasFeature("household")) {
      if (!released("household") || !(plant || appliance || fridge)) return nothing;
      const lang = this.hass?.language;
      return html`<section class="fp3d-teaser">
        <div class="fp3d-teaser-head">
          <b>🏠 ${this.t("pro_name_household")}</b>
          <a class="fp3d-btn fp3d-primary" href=${isBeta("household") ? supporterUrl(lang) : shopUrl(lang)} target="_blank" rel="noopener">${this.t(isBeta("household") ? "beta_become" : "pro_unlock")}</a>
        </div>
        <p class="fp3d-sub">${this.t(plant ? "hh_teaser_plant" : fridge ? "hh_teaser_fridge" : "hh_teaser_appliance")}</p>
      </section>`;
    }
    const sensors = this.entityOptions((id) => id.startsWith("sensor."));
    const doors = this.entityOptions((id) => id.startsWith("binary_sensor."));
    const services = this.entityOptions((id) => ["sensor.", "binary_sensor.", "input_boolean.", "input_datetime.", "input_number."].some((d) => id.startsWith(d)));
    const ref = (v: string | null) => (v === "none" ? null : v);
    return html`<div class="fp3d-form fp3d-links">
      <p class="fp3d-sub fp3d-wide"><b>🏠 ${this.t("pro_name_household")}</b></p>
      ${plant
        ? html`${this.entitySelect(this.t("hh_moisture"), f.moisture ?? null, undefined, this.entityOptions((id) => id.startsWith("plant.") || id.startsWith("sensor.")), (v) => this.updateFurniture({ moisture: ref(v) }))}
            ${this.num(this.t("hh_moisture_min"), f.moisture_min ?? 20, (v) => this.updateFurniture({ moisture_min: Math.max(0, Math.min(100, Math.round(v))) }), 1)}`
        : nothing}
      ${appliance
        ? html`${this.entitySelect(this.t("hh_remaining"), f.remaining ?? null, undefined, sensors, (v) => this.updateFurniture({ remaining: ref(v) }))}
            ${this.entitySelect(this.t("hh_door"), f.door_left ?? null, undefined, doors, (v) => this.updateFurniture({ door_left: ref(v) }))}
            <p class="fp3d-sub fp3d-wide">${this.t("hh_appliance_hint")}</p>`
        : nothing}
      ${fridge
        ? html`${f.type === "fridge" ? this.entitySelect(this.t("hh_fridge_door"), f.door_left ?? null, undefined, doors, (v) => this.updateFurniture({ door_left: ref(v) })) : nothing}
            ${this.num(this.t("hh_door_alarm"), f.door_alarm ?? 2, (v) => this.updateFurniture({ door_alarm: Math.max(0.5, Math.min(120, v)) }), 0.5)}`
        : nothing}
      ${electric
        ? html`${this.entitySelect(this.t("hh_service_entity"), f.service ?? null, undefined, services, (v) => this.updateFurniture({ service: ref(v) }))}
            ${f.service && f.service !== "none" ? this.num(this.t("hh_service_min"), f.service_min ?? 10, (v) => this.updateFurniture({ service_min: Math.max(0, v) }), 1) : nothing}
            ${(f.service && f.service !== "none") || (f.service2 && f.service2 !== "none")
              ? this.entitySelect(this.t("hh_service2_entity"), f.service2 ?? null, undefined, services, (v) => this.updateFurniture({ service2: ref(v) }))
              : nothing}
            ${f.service2 && f.service2 !== "none" ? this.num(this.t("hh_service2_min"), f.service2_min ?? 10, (v) => this.updateFurniture({ service2_min: Math.max(0, v) }), 1) : nothing}
            <p class="fp3d-sub fp3d-wide">${this.t("hh_service_hint")}</p>`
        : nothing}
    </div>`;
  }

  private renderAwningFields(f: Furniture) {
    const admin = this.isAdmin;
    const sensors = this.entityOptions((id) => id.startsWith("sensor.") || id.startsWith("input_number.") || id.startsWith("number."));
    // each kind with the sizes it usually has: width, projection (depth), height above the floor, fall
    const KINDS: Record<string, { w: number; d: number; y: number; pitch: number | null }> = {
      arm: { w: 3, d: 2.5, y: 2.3, pitch: null },
      drop: { w: 2.4, d: 1.2, y: 2.3, pitch: 20 },
      vertical: { w: 2, d: 0.2, y: 2.3, pitch: null },
      pergola: { w: 4, d: 3.5, y: 2.6, pitch: 6 },
      side: { w: 3, d: 0.2, y: 1.8, pitch: null },
    };
    const kind = f.variant ?? "arm";
    return html`<label class="fp3d-field fp3d-wide"
        >${this.t("awning_kind")}
        <select
          ?disabled=${!admin}
          @change=${(e: Event) => {
            const k = (e.target as HTMLSelectElement).value;
            const d = KINDS[k];
            this.updateFurniture({ variant: k === "arm" ? null : k, w: d.w, d: d.d, mount_y: d.y, awning_pitch: d.pitch });
          }}
        >
          ${Object.keys(KINDS).map((k) => html`<option value=${k} ?selected=${kind === k}>${this.t(`awning_kind_${k}` as I18nKey)}</option>`)}
        </select></label
      >
      <p class="fp3d-sub fp3d-wide">${this.t(`awning_kind_${kind}_hint` as I18nKey)}</p>
      ${kind === "vertical" || kind === "side" ? nothing : this.num(this.t("awning_pitch"), f.awning_pitch ?? 12, (v) => this.updateFurniture({ awning_pitch: Math.max(0, Math.min(80, Math.round(v))) }), 1)}
      ${this.num(this.t("awning_time"), f.awning_time ?? 20, (v) => this.updateFurniture({ awning_time: Math.max(2, Math.min(300, Math.round(v))) }), 1)}
      ${this.entitySelect(this.t("awning_position"), f.awning_position ?? null, undefined, sensors, (v) => this.updateFurniture({ awning_position: v === "none" ? null : v }))}
      <label class="fp3d-check fp3d-wide"
        ><input type="checkbox" .checked=${f.awning_valance !== false} ?disabled=${!admin} @change=${(ev: Event) => this.updateFurniture({ awning_valance: (ev.target as HTMLInputElement).checked })} />
        ${this.t("awning_valance")}</label
      >
      <label class="fp3d-check fp3d-wide" title=${this.t("awning_invert_hint")}
        ><input type="checkbox" .checked=${!!f.awning_invert} ?disabled=${!admin} @change=${(ev: Event) => this.updateFurniture({ awning_invert: (ev.target as HTMLInputElement).checked })} />
        ${this.t("awning_invert")}</label
      >
      <p class="fp3d-sub fp3d-wide">${this.t("awning_hint")}</p>`;
  }

  /** A motorised curtain or roll-down screen from a pack (#511): run time, a live position sensor, the other direction. */
  private renderMotionFields(f: Furniture) {
    const admin = this.isAdmin;
    const sensors = this.entityOptions((id) => id.startsWith("sensor.") || id.startsWith("input_number.") || id.startsWith("number."));
    const side = f.variant === "left" || f.variant === "right" ? f.variant : "both";
    return html`${packMotion(f.type) === "curtain"
        ? html`<label class="fp3d-field fp3d-wide"
            >${this.t("curtain_side")}
            <select ?disabled=${!admin} @change=${(e: Event) => {
              const v = (e.target as HTMLSelectElement).value;
              this.updateFurniture({ variant: v === "both" ? null : v });
            }}>
              ${(["both", "left", "right"] as const).map((k) => html`<option value=${k} ?selected=${side === k}>${this.t(`curtain_side_${k}`)}</option>`)}
            </select></label
          >`
        : nothing}
      ${this.num(this.t("motor_time"), f.awning_time ?? 20, (v) => this.updateFurniture({ awning_time: Math.max(2, Math.min(300, Math.round(v))) }), 1)}
      ${this.entitySelect(this.t("awning_position"), f.awning_position ?? null, undefined, sensors, (v) => this.updateFurniture({ awning_position: v === "none" ? null : v }))}
      <label class="fp3d-check fp3d-wide" title=${this.t("motor_invert_hint")}
        ><input type="checkbox" .checked=${!!f.awning_invert} ?disabled=${!admin} @change=${(ev: Event) => this.updateFurniture({ awning_invert: (ev.target as HTMLInputElement).checked })} />
        ${this.t("awning_invert")}</label
      >`;
  }

  /** Wi-Fi access point (D582) and water heater: how it is mounted and its entities. */
  private renderTechForm(f: Furniture) {
    if (!this.hass) return nothing;
    const admin = this.isAdmin;
    const ap = f.type === "wifi_ap";
    const mounts = ["", "wall"] as const;
    const setMount = (v: string) => {
      const [w, d, h] = TECH_SIZE[`${f.type}:${v}`];
      this.updateFurniture({ variant: v || null, w, d, h, mount_y: null });
    };
    const sensors = this.entityOptions((id) => id.startsWith("sensor."));
    // an access point's entities are often diagnostic (UniFi): every entity of the kinds that tell a state is offered
    const main = this.entityOptions((id) => (ap ? /^(binary_sensor|sensor|device_tracker|switch|button|update)\./ : /^(water_heater|climate|switch|input_boolean|sensor)\./).test(id));
    return html`<div class="fp3d-form fp3d-links">
      <label class="fp3d-field"
        >${this.t("tech_mount")}
        <select ?disabled=${!admin} @change=${(e: Event) => setMount((e.target as HTMLSelectElement).value)}>
          ${mounts.map((v) => html`<option value=${v} ?selected=${(f.variant ?? "") === v}>${this.t(`${f.type}_${v || "std"}` as I18nKey)}</option>`)}
        </select></label
      >
      ${this.entitySelect(this.t(ap ? "ap_status" : "heater_entity"), typeof f.entity === "string" && f.entity !== "none" ? f.entity : null, undefined, main, (v) => this.updateFurniture({ entity: v && v !== "none" ? v : "none" }))}
      ${ap
        ? this.entitySelect(this.t("ap_clients_sensor"), f.clients ?? null, undefined, sensors, (v) => this.updateFurniture({ clients: v && v !== "none" ? v : null }))
        : html`${this.entitySelect(this.t("heater_temp"), f.water_temp ?? null, undefined, sensors, (v) => this.updateFurniture({ water_temp: v && v !== "none" ? v : null }))}
            ${this.entitySelect(this.t("furn_power"), typeof f.power === "string" && f.power !== "none" ? f.power : null, undefined, this.entityOptions((id) => this.isPowerSensor(id)), (v) => this.updateFurniture({ power: v && v !== "none" ? v : "none" }))}`}
      <p class="fp3d-sub fp3d-wide">${this.t(ap ? "ap_hint" : "heater_hint")}</p>
      <div class="fp3d-form">${this.markerSelect(f.marker ?? null, (v) => this.updateFurniture({ marker: v }))}${this.iconInput(f.icon, (v) => this.updateFurniture({ icon: v }))}</div>
    </div>`;
  }

  /** Wall switch or socket (D523, #593): its gangs, and per gang what it switches (a socket also its power sensor). */
  private renderGangsForm(f: Furniture) {
    if (!this.hass) return nothing;
    const admin = this.isAdmin;
    const gangs = gangsOf(f);
    const socket = f.type === "wall_socket";
    const switches = this.entityOptions((id) => /^(light|switch|input_boolean|fan)\./.test(id));
    const power = this.entityOptions((id) => this.isPowerSensor(id));
    const save = (next: Gang[]) => this.updateFurniture({ gangs: next.length > 1 || next[0]?.entity || next[0]?.power ? next : null });
    const setGang = (i: number, patch: Partial<Gang>) => save(gangs.map((g, k) => (k === i ? { ...g, ...patch } : g)));
    // more gangs make the frame wider (a frame turned by hand keeps its own size otherwise)
    const count = (n: number) => {
      const next = Array.from({ length: n }, (_, i) => gangs[i] ?? { entity: null });
      this.updateFurniture({ gangs: n > 1 || next[0].entity || next[0].power ? next : null, w: gangPlateWidth(n) });
    };
    return html`<div class="fp3d-form fp3d-links">
      <label class="fp3d-field"
        >${this.t(socket ? "gang_count_socket" : "gang_count_switch")}
        <select ?disabled=${!admin} @change=${(e: Event) => count(Number((e.target as HTMLSelectElement).value))}>
          ${Array.from({ length: MAX_GANGS }, (_, i) => i + 1).map((n) => html`<option value=${n} ?selected=${gangs.length === n}>${n}</option>`)}
        </select></label
      >
      ${socket
        ? html`<label class="fp3d-field"
            >${this.t("socket_kind")}
            <select ?disabled=${!admin} @change=${(e: Event) => this.updateFurniture({ variant: (e.target as HTMLSelectElement).value || null })}>
              ${(["", "outdoor"] as const).map((v) => html`<option value=${v} ?selected=${(f.variant ?? "") === v}>${this.t(v ? "socket_outdoor" : "socket_indoor")}</option>`)}
            </select></label
          >`
        : nothing}
      ${gangs.map(
        (g, i) => html`${this.entitySelect(`${this.t(socket ? "gang_socket" : "gang_switch")}${gangs.length > 1 ? ` ${i + 1}` : ""}`, g.entity, undefined, switches, (v) => setGang(i, { entity: v && v !== "none" ? v : null }))}
        ${socket ? this.entitySelect(`${this.t("furn_power")}${gangs.length > 1 ? ` ${i + 1}` : ""}`, g.power ?? null, undefined, power, (v) => setGang(i, { power: v && v !== "none" ? v : null })) : nothing}`,
      )}
      <p class="fp3d-sub fp3d-wide">${this.t(socket ? "gang_socket_hint" : "gang_switch_hint")}</p>
      <label class="fp3d-check fp3d-wide" title=${this.t("device_confirm_hint")}
        ><input type="checkbox" .checked=${!!f.confirm} ?disabled=${!admin} @change=${(ev: Event) => this.updateFurniture({ confirm: (ev.target as HTMLInputElement).checked })} />
        ${this.t("device_confirm")}</label
      >
      <div class="fp3d-form">${this.markerSelect(f.marker ?? null, (v) => this.updateFurniture({ marker: v }))}${this.iconInput(f.icon, (v) => this.updateFurniture({ icon: v }))}</div>
    </div>`;
  }

  private renderFurnitureLinks(f: Furniture) {
    const ALARM_CLASSES = new Set(["smoke", "gas", "carbon_monoxide", "heat", "moisture", "safety", "sound", "problem"]);
    if (!this.hass) return nothing;
    const hass = this.hass;
    // what "automatic" would choose: resolve with this item's own links cleared
    const autoPick = (key: "entity" | "power") => {
      const probe = structuredClone(this._doc.floors);
      for (const fl of probe) for (const x of fl.furniture) if (x.id === f.id) x[key] = null;
      return furnitureEntities(hass, probe).get(f.id)?.[key] ?? null;
    };
    const media = isMediaFurniture(f.type);
    // a pack item with only a status light (a 3D printer's panel, a wallbox's LED) links like any device:
    // "Device", with media players, switches and status sensors to choose from
    const tvLike = media && (!isPackType(f.type) || packDisplay(f.type));
    const lamp = isLamp(f.type);
    const entities = this.entityOptions((id) =>
      lamp
        ? // a lamp can follow a light or a plain switch (e.g. a relay that switches the ceiling light)
          /^(light|switch|input_boolean)\./.test(id)
        : tvLike
          ? // a media player, or the smart plug an older TV is switched with; a roll-down screen also its motor's cover (#511)
            /^(media_player|switch|input_boolean|light)\./.test(id) || (packMotion(f.type) === "screen" && id.startsWith("cover."))
          : f.type === "awning"
            ? id.startsWith("cover.")
            : packMotion(f.type) === "curtain"
            ? // a motorised curtain: its motor's cover (or a switch that drives it, #511)
              /^(cover|switch|input_boolean)\./.test(id)
            : f.type === "radiator" || f.type === "ac_unit"
            ? id.startsWith("climate.")
            : isRobotVacuum(f.type)
              ? id.startsWith("vacuum.")
              : // or a status sensor (a 3D printer's print status: running, idle, finish …)
                // (a robot vacuum from a pack, e.g. the one with its dock, follows its vacuum entity; a motorised
                // curtain its cover, #286)
                /^(switch|media_player|fan|input_boolean|climate|vacuum|cover)\./.test(id) ||
                // a pack's heat pump indoor unit, boiler or buffer tank: its water_heater entity (#645)
                (isPackHeater(f.type) && id.startsWith("water_heater.")) ||
                // a pack's sensor model (motion, presence, contact, leak …): any sensor, with or without a class (#810)
                (isPackSensor(f.type) && /^(binary_sensor|sensor)\./.test(id)) ||
                isStatusSensor(hass.states[id]) ||
                // alarms that report as binary sensors (binary_sensor.…_smoke, #490); a smoke detector takes any
                (id.startsWith("binary_sensor.") && (f.type.endsWith("smoke_detector") || ALARM_CLASSES.has(String(hass.states[id]?.attributes.device_class ?? "")))),
    );
    const power = this.entityOptions((id) => this.isPowerSensor(id));
    const doorSensors = f.type === "fridge_smart" ? this.entityOptions((id) => id.startsWith("binary_sensor.")) : [];
    return html`<div class="fp3d-form fp3d-links">
        ${f.type === "grid_point"
          ? html`<p class="fp3d-sub fp3d-wide">${this.t("grid_point_hint")}</p>`
          : this.entitySelect(this.t(lamp ? "furn_entity_light" : packMotion(f.type) ? "motor_cover" : tvLike ? "furn_entity_tv" : f.type === "awning" ? "awning_cover" : f.type === "radiator" || f.type === "ac_unit" ? "furn_entity_climate" : isRobotVacuum(f.type) ? "furn_entity_vacuum" : "furn_entity"), f.entity ?? null, autoPick("entity"), entities, (v) =>
              this.updateFurniture({ entity: v }),
            )}
        ${f.type === "lamp_fan"
          ? html`${this.entitySelect(this.t("fan_entity"), f.fan ?? null, undefined, this.entityOptions((id) => id.startsWith("fan.")), (v) => this.updateFurniture({ fan: v && v !== "none" ? v : null }))}
              <p class="fp3d-sub fp3d-wide">${this.t("fan_hint")}</p>`
          : nothing}
        ${f.type === "radiator"
          ? html`${this.entitySelect(this.t("heat_sensor"), f.heat_sensor ?? null, undefined, this.entityOptions((id) => /^(binary_sensor|sensor|switch|input_boolean|number)\./.test(id)), (v) => this.updateFurniture({ heat_sensor: v && v !== "none" ? v : null }))}
              <p class="fp3d-sub fp3d-wide">${this.t("heat_sensor_hint")}</p>`
          : nothing}
        ${f.type === "awning" ? this.renderAwningFields(f) : packMotion(f.type) ? this.renderMotionFields(f) : nothing}
        ${!lamp && !(ENERGY_DEVICES as readonly string[]).includes(f.type) && !hasScreen(f.type) ? this.renderStateLinks(f) : nothing}
        ${lamp && f.entity && f.entity !== "none"
          ? html`${this.entitySelect(this.t("furn_color_entity"), f.color_entity ?? null, undefined, this.entityOptions((id) => id.startsWith("light.") && id !== f.entity), (v) => this.updateFurniture({ color_entity: v === "none" ? null : v }))}
              <p class="fp3d-sub fp3d-wide">${this.t("furn_color_entity_hint")}</p>`
          : nothing}
        ${lamp ? this.glowScaleField(f.glow_scale, (v) => this.updateFurniture({ glow_scale: v })) : nothing}
        ${lamp && f.entity && f.entity !== "none"
          ? html`<label class="fp3d-check fp3d-wide" title=${this.t("furn_only_color_hint")}
                ><input type="checkbox" .checked=${!!f.only_color} ?disabled=${!this.isAdmin} @change=${(ev: Event) => this.updateFurniture({ only_color: (ev.target as HTMLInputElement).checked ? "#ffd400" : null })} />
                ${this.t("furn_only_color")}</label
              >
              ${f.only_color
                ? html`<label class="fp3d-field"
                      >${this.t("furn_only_color_pick")}
                      <input type="color" .value=${f.only_color} ?disabled=${!this.isAdmin} @change=${(ev: Event) => this.updateFurniture({ only_color: (ev.target as HTMLInputElement).value })} /></label>
                    <p class="fp3d-sub fp3d-wide">${this.t("furn_only_color_hint")}</p>`
                : nothing}`
          : nothing}
        ${volumeMeter(f.type)
          ? // a gas or water meter (#730): its reading in m³ or litres stands at the symbol, it draws no power
            html`${this.entitySelect(
                this.t("furn_meter_reading"),
                f.extra ?? null,
                undefined,
                this.entityOptions(
                  (id) =>
                    id.startsWith("sensor.") &&
                    (["gas", "water", "volume"].includes(String(hass.states[id]?.attributes.device_class ?? "")) || /^(m³|m3|L|l|ft³|gal|CCF)$/.test(String(hass.states[id]?.attributes.unit_of_measurement ?? ""))),
                ),
                (v) => this.updateFurniture({ extra: v === "none" ? null : v }),
              )}`
          : nothing}
        ${lamp || f.type === "grid_point" || volumeMeter(f.type)
          ? nothing
          : this.entitySelect(
              this.t(f.type === "meter" ? "energy_grid" : f.type === "inverter" ? "energy_solar_sensor" : f.type === "home_battery" ? "energy_battery_sensor" : "furn_power"),
              f.power ?? null,
              autoPick("power"),
              power,
              (v) => this.updateFurniture({ power: v }),
            )}
        ${!lamp && f.power && f.power !== "none" && !(ENERGY_DEVICES as readonly string[]).includes(f.type)
          ? html`<label class="fp3d-field" title=${this.t("furn_run_w_hint")}
              >${this.t("furn_run_w")}
              <input
                type="number"
                min="1"
                max="5000"
                step="5"
                placeholder="10"
                .value=${f.run_w ? String(f.run_w) : ""}
                ?disabled=${!this.isAdmin}
                @change=${(ev: Event) => {
                  const v = Number((ev.target as HTMLInputElement).value);
                  this.updateFurniture({ run_w: v > 0 ? Math.min(5000, Math.round(v)) : null });
                }}
            /></label>`
          : nothing}
        ${hasFeature("energy_pro") && !lamp && !["grid_point", "meter", "inverter", "home_battery"].includes(f.type)
          ? html`<label class="fp3d-check fp3d-wide" title=${this.t("furn_holo_hint")}
              ><input type="checkbox" .checked=${!!f.holo} ?disabled=${!this.isAdmin} @change=${(ev: Event) => this.updateFurniture({ holo: (ev.target as HTMLInputElement).checked })} />
              ${this.t("furn_holo")}</label
            >`
          : hasFeature("energy_pro") && f.type === "inverter"
            ? html`<label class="fp3d-check fp3d-wide" title=${this.t("furn_plant_card_hint")}
                ><input type="checkbox" .checked=${f.plant_card !== false} ?disabled=${!this.isAdmin} @change=${(ev: Event) => this.updateFurniture({ plant_card: (ev.target as HTMLInputElement).checked ? undefined : false })} />
                ${this.t("furn_plant_card")}</label
              >
              ${f.plant_card !== false
                ? html`${this.len(this.t("holo_right"), f.plant_right ?? 0, (v) => this.updateFurniture({ plant_right: Math.min(30, Math.max(-30, round(v))) || undefined }), 0.25)}
                  ${this.len(this.t("holo_up"), f.plant_up ?? 0, (v) => this.updateFurniture({ plant_up: Math.min(30, Math.max(-30, round(v))) || undefined }), 0.25)}`
                : nothing}`
            : nothing}
      </div>
      ${f.type === "meter"
        ? html`<div class="fp3d-form fp3d-links">
            ${this.entitySelect(this.t("furn_export"), f.export ?? null, undefined, power, (v) => this.updateFurniture({ export: v === "none" ? null : v }))}
            <p class="fp3d-sub fp3d-wide">${this.t("furn_export_hint")}</p>
          </div>`
        : nothing}
      ${f.type === "inverter" && (this._doc.settings.roof.solar ?? []).length
        ? (() => {
            // which strings feed this inverter, so it can be told apart from the others (#213)
            const strings = (this._doc.settings.roof.strings ?? []).filter((st) => st.inverter === f.id).map((st) => st.name);
            return html`<p class="fp3d-sub fp3d-wide">${strings.length ? this.t("inverter_strings", { names: strings.join(", ") }) : this.t("inverter_strings_none")}</p>`;
          })()
        : nothing}
      ${f.type === "home_battery"
        ? html`<div class="fp3d-form fp3d-links">
            ${this.entitySelect(
              this.t("furn_soc"),
              f.soc ?? null,
              undefined,
              this.entityOptions((id) => numberish(id) && (hass.states[id]?.attributes.device_class === "battery" || hass.states[id]?.attributes.unit_of_measurement === "%")),
              (v) => this.updateFurniture({ soc: v === "none" ? null : v }),
            )}
            ${this.entitySelect(this.t("furn_charge"), f.charge ?? null, undefined, power, (v) => this.updateFurniture({ charge: v === "none" ? null : v }))}
            <p class="fp3d-sub fp3d-wide">${this.t("furn_charge_hint")}</p>
          </div>`
        : nothing}
      ${f.type === "wallbox"
        ? html`<div class="fp3d-form fp3d-links">
            ${this.entitySelect(
              this.t("furn_wallbox_status"),
              f.status ?? null,
              undefined,
              this.entityOptions((id) => binaryish(id) || numberish(id)),
              (v) => this.updateFurniture({ status: v === "none" ? null : v }),
            )}
          </div>`
        : nothing}
      ${!lamp && !volumeMeter(f.type)
        ? this.entitySelect(this.t("furn_extra"), f.extra ?? null, undefined, this.entityOptions((id) => id.startsWith("sensor.")), (v) => this.updateFurniture({ extra: v === "none" ? null : v }))
        : nothing}
      ${!lamp || f.entity
        ? html`<label class="fp3d-check fp3d-wide" title=${this.t("device_confirm_hint")}
            ><input type="checkbox" .checked=${!!f.confirm} ?disabled=${!this.isAdmin} @change=${(ev: Event) => this.updateFurniture({ confirm: (ev.target as HTMLInputElement).checked })} />
            ${this.t("device_confirm")}</label
          >
          <div class="fp3d-form">${this.markerSelect(f.marker ?? null, (v) => this.updateFurniture({ marker: v }))}${this.iconInput(f.icon, (v) => this.updateFurniture({ icon: v }))}</div>`
        : nothing}
      ${isRobotVacuum(f.type)
        ? html`<div class="fp3d-form fp3d-links">
            ${this.entitySelect(
              this.t("furn_robot_room"),
              f.room_sensor ?? null,
              robotRoomSensor(hass, furnitureEntities(hass, this._doc.floors).get(f.id)?.entity ?? null, null),
              this.entityOptions((id) => numberish(id)),
              (v) => this.updateFurniture({ room_sensor: v }),
            )}
          </div>`
        : nothing}
      ${f.type === "fridge_smart"
        ? html`<div class="fp3d-form fp3d-links">
              ${this.entitySelect(this.t("furn_door_left"), f.door_left ?? null, undefined, doorSensors, (v) => this.updateFurniture({ door_left: v }))}
              ${this.entitySelect(this.t("furn_door_right"), f.door_right ?? null, undefined, doorSensors, (v) => this.updateFurniture({ door_right: v }))}
            </div>
            <p class="fp3d-sub">${this.t("fridge_hint")}</p>`
        : nothing}
      ${hasScreen(f.type) ? this.renderPictureRules(f) : nothing}
      <p class="fp3d-sub">${this.t(lamp ? (f.type === "lamp_pendant" ? "lamp_hint_pendant" : "lamp_hint") : media ? "furn_links_hint_tv" : isRobotVacuum(f.type) ? "robot_hint" : "furn_links_hint")}</p>`;
  }

  /** Parking spot: presence sensor, the vehicle shown, its size, and an optional vehicle type sensor. */
  private renderParkingForm(f: Furniture) {
    const admin = this.isAdmin;
    const lang = this.hass?.language ?? "en";
    const vehicles = (this.packs ?? []).flatMap((p) => p.items.filter((it) => it.vehicle).map((it) => ({ id: packType(p.id, it.id), label: `${packItemName(it, lang)} · ${packName(p, lang)}` })));
    // presence: GPS trackers (a car's own integration, a phone) before the many network trackers of a router (#227)
    const rank = (id: string) => {
      if (!id.startsWith("device_tracker.")) return 1;
      return this.hass?.states[id]?.attributes.source_type === "router" ? 2 : 0;
    };
    const presence = this.entityOptions((id) => /^(binary_sensor|device_tracker|input_boolean|switch|sensor)\./.test(id)).sort((a, b) => rank(a.id) - rank(b.id));
    const typeSensors = this.entityOptions((id) => /^(sensor|input_select|select|input_text)\./.test(id));
    const typeState = f.type_entity ? this.hass?.states[f.type_entity] : undefined;
    const options = Array.isArray(typeState?.attributes.options) ? (typeState.attributes.options as string[]) : [];
    const types = f.types ?? [];
    const setTypes = (next: { state: string; vehicle: string }[]) => this.updateFurniture({ types: next });
    const vehicleSelect = (value: string | null, onChange: (v: string | null) => void) =>
      html`<select ?disabled=${!admin} @change=${(e: Event) => onChange((e.target as HTMLSelectElement).value || null)}>
        <option value="" ?selected=${!value}>${this.t("parking_vehicle_none")}</option>
        ${vehicles.map((v) => html`<option value=${v.id} ?selected=${v.id === value}>${v.label}</option>`)}
      </select>`;
    // the room's height against the vehicle's: a hint when it would not fit
    const floor = this.floor;
    const room = floor?.rooms.find((r) => r.points.length >= 3 && pointInPolygon([f.x, f.z], r.points));
    const item = f.vehicle ? packItem(f.vehicle) : undefined;
    const carH = item ? item.size[2] * (f.scale ?? 1) : 0;
    const tooTall = !!room && !!floor && carH > floor.height + 1e-6;
    return html`<div class="fp3d-form fp3d-links">
        ${this.entitySelect(this.t("parking_entity"), f.entity ?? null, undefined, presence, (v) => this.updateFurniture({ entity: v === "none" ? null : v }))}
        <label class="fp3d-field fp3d-wide">${this.t("parking_vehicle")} ${vehicleSelect(f.vehicle ?? null, (v) => this.updateFurniture({ vehicle: v }))}</label>
        ${vehicles.length ? nothing : html`<p class="fp3d-sub fp3d-wide">${this.t("parking_no_pack")}</p>`}
        ${this.num(this.t("parking_scale"), Math.round((f.scale ?? 1) * 100), (v) => this.updateFurniture({ scale: Math.min(150, Math.max(30, v)) / 100 }), 5, 30)}
        ${this.entitySelect(this.t("parking_type_entity"), f.type_entity ?? null, undefined, typeSensors, (v) => this.updateFurniture({ type_entity: v === "none" ? null : v }))}
        ${f.type_entity
          ? html`<div class="fp3d-wide">
              <div class="fp3d-sub">${this.t("parking_types")}</div>
              ${types.map(
                (t, i) => html`<div class="fp3d-parking-row">
                  <input
                    type="text"
                    list="fp3d-parking-states"
                    placeholder=${this.t("parking_type_state")}
                    .value=${t.state}
                    ?disabled=${!admin}
                    @change=${(e: Event) => setTypes(types.map((x, j) => (j === i ? { ...x, state: (e.target as HTMLInputElement).value } : x)))}
                  />
                  ${vehicleSelect(t.vehicle, (v) => setTypes(types.map((x, j) => (j === i ? { ...x, vehicle: v ?? "" } : x))))}
                  <button class="fp3d-btn" ?disabled=${!admin} title=${this.t("delete")} @click=${() => setTypes(types.filter((_, j) => j !== i))}>✕</button>
                </div>`,
              )}
              <datalist id="fp3d-parking-states">${options.map((o) => html`<option value=${o}></option>`)}</datalist>
              ${admin
                ? html`<button class="fp3d-btn" @click=${() => setTypes([...types, { state: options[types.length] ?? "", vehicle: vehicles[0]?.id ?? "" }])}>${this.t("parking_add_type")}</button>`
                : nothing}
            </div>`
          : nothing}
      </div>
      ${tooTall ? html`<p class="fp3d-sub fp3d-warn">${this.t("parking_too_tall", { car: formatNumber(this.hass, carH, 2), room: formatNumber(this.hass, floor!.height, 2) })}</p>` : nothing}
      <p class="fp3d-sub">${this.t("parking_hint")}</p>
      ${this.renderCarForm(f)}`;
  }

  /** Auto Pro: the car's entities – one entity of the car's device is enough, the roles are found beside it. */
  private renderCarForm(f: Furniture) {
    const lang = this.hass?.language;
    if (!hasFeature("auto_pro"))
      return html`<section class="fp3d-teaser">
        <div class="fp3d-teaser-head"><b>🚗 ${this.t("pro_name_auto_pro")}</b><a class="fp3d-btn fp3d-primary" href=${shopUrl(lang)} target="_blank" rel="noopener">${this.t("pro_unlock")}</a></div>
        <p class="fp3d-sub">${this.t("auto_pro_teaser")}</p>
      </section>`;
    if (!this.hass) return nothing;
    const hass = this.hass;
    const car = f.car ?? {};
    const auto = carEntities(hass, { entity: f.entity, car: { device: car.device } });
    const set = (patch: Partial<CarLinks>) => this.updateFurniture({ car: { ...car, ...patch } });
    const any = this.entityOptions((id) => /^(sensor|binary_sensor|lock|climate|switch|device_tracker|number|select|input_number|input_boolean)\./.test(id));
    const role = (key: keyof CarLinks & keyof CarEntities, label: I18nKey, options: { id: string; label: string }[]) =>
      this.entitySelect(this.t(label), car[key] ?? null, auto[key], options, (v) => set({ [key]: v === "none" ? "none" : v }));
    return html`<section>
      <h3>🚗 ${this.t("pro_name_auto_pro")}</h3>
      <p class="fp3d-sub">${this.t("car_hint")}</p>
      <div class="fp3d-form fp3d-links">
        ${this.entitySelect(this.t("car_device"), car.device ?? null, undefined, any, (v) => set({ device: v === "none" ? null : v }))}
        ${role("soc", "car_soc", this.entityOptions((id) => numberish(id)))}
        ${role("range", "car_range", this.entityOptions((id) => numberish(id)))}
        ${role("charging", "car_charging", this.entityOptions((id) => /^(sensor|binary_sensor|switch|input_boolean|input_number|number)\./.test(id)))}
        ${role("plugged", "car_plugged", this.entityOptions((id) => binaryish(id)))}
        ${role("lock", "car_lock", this.entityOptions((id) => /^(lock|binary_sensor|sensor|input_boolean|switch)\./.test(id)))}
        ${role("climate", "car_climate", this.entityOptions((id) => /^(climate|switch|binary_sensor|input_boolean)\./.test(id)))}
        ${role("tracker", "car_tracker", this.entityOptions((id) => id.startsWith("device_tracker.")))}
      </div>
    </section>`;
  }

  /** Ids of the stored pictures any screen of the plan uses (in order of first use). */
  private storedPictures(): string[] {
    const ids: string[] = [];
    for (const floor of this._doc.floors) {
      for (const m of floor.furniture) {
        for (const r of m.pictures ?? []) if (r.image && !/^https?:\/\//.test(r.image) && !r.image.startsWith("camera:") && !ids.includes(r.image)) ids.push(r.image);
      }
    }
    return ids;
  }

  /**
   * Pictures a screen shows by an entity's state: the rules are grouped by entity (and attribute), each
   * group lists its values with a picture; in order, the first matching rule wins.
   */
  private renderPictureRules(f: Furniture) {
    const admin = this.isAdmin;
    const rules = f.pictures ?? [];
    if (!hasFeature("screens")) {
      return html`<div class="fp3d-wide">
        <div class="fp3d-sub">${this.t("screen_pictures")}</div>
        <p class="fp3d-sub">🔒 ${this.t("pro_feature_screens")} – ${this.t("pro_locked")} <a href=${shopUrl(this.hass?.language)} target="_blank" rel="noopener">${this.t("pro_shop")}</a> · <a href=${manualUrl(this.hass?.language, "screens")} target="_blank" rel="noopener">${this.t("manual_more")}</a></p>
      </div>`;
    }
    const set = (next: ScreenPicture[]) => this.updateFurniture({ pictures: next });
    const entities = this.entityOptions(() => true);
    const scalar = (v: unknown) => ["string", "number", "boolean"].includes(typeof v);
    const attributes = (id: string) =>
      Object.entries(this.hass?.states[id]?.attributes ?? {})
        .filter(([k, v]) => scalar(v) && k !== "friendly_name" && k !== "icon")
        .map(([k]) => k);
    const current = (entity: string, attribute: string | null) => {
      const st = this.hass?.states[entity];
      if (!st) return "";
      return String((attribute ? st.attributes[attribute] : st.state) ?? "");
    };
    const suggestions = (entity: string, attribute: string | null) => {
      const st = this.hass?.states[entity];
      const options = !attribute && Array.isArray(st?.attributes.options) ? (st.attributes.options as string[]) : [];
      return options.length ? options : [current(entity, attribute)];
    };
    // groups in order of first appearance: one per entity + attribute
    const keyOf = (r: { entity: string; attribute?: string | null }) => `${r.entity}\u0000${r.attribute ?? ""}`;
    const groups: { entity: string; attribute: string | null; rows: number[] }[] = [];
    rules.forEach((r, i) => {
      const g = groups.find((x) => keyOf(x) === keyOf(r));
      if (g) g.rows.push(i);
      else groups.push({ entity: r.entity, attribute: r.attribute ?? null, rows: [i] });
    });
    const patchGroup = (g: (typeof groups)[number], change: Partial<ScreenPicture>) => set(rules.map((x, i) => (g.rows.includes(i) ? { ...x, ...change } : x)));
    const patchRow = (i: number, change: Partial<ScreenPicture>) => set(rules.map((x, j) => (j === i ? { ...x, ...change } : x)));
    const stored = this.storedPictures();
    const cameras = this.entityOptions((id) => id.startsWith("camera."));
    const cameraOf = (r: ScreenPicture) => (r.image.startsWith("camera:") ? r.image.slice(7) : null);
    return html`<div class="fp3d-wide">
      <div class="fp3d-sub">${this.t("screen_pictures")}</div>
      ${rules.length
        ? html`<label class="fp3d-field fp3d-wide"
            >${this.t("screen_bg")}
            <select ?disabled=${!admin} @change=${(e: Event) => this.updateFurniture({ screen_bg: (e.target as HTMLSelectElement).value as "black" | "white" })}>
              <option value="black" ?selected=${(f.screen_bg ?? "black") === "black"}>${this.t("screen_bg_black")}</option>
              <option value="white" ?selected=${f.screen_bg === "white"}>${this.t("screen_bg_white")}</option>
            </select></label
          >`
        : nothing}
      ${groups.map(
        (g) => html`<div class="fp3d-picture-group">
          <fp3d-entity-picker
            .options=${entities}
            .value=${g.entity}
            .placeholder=${this.t("entity_search")}
            ?disabled=${!admin}
            @change=${(e: CustomEvent<{ value: string }>) => {
              e.stopPropagation();
              patchGroup(g, { entity: e.detail.value });
            }}
          ></fp3d-entity-picker>
          <select
            ?disabled=${!admin}
            title=${this.t("picture_attribute")}
            @change=${(e: Event) => {
              const attribute = (e.target as HTMLSelectElement).value || null;
              // the values of the group start over with what the entity reports now
              const now = current(g.entity, attribute);
              set(rules.map((x, i) => (g.rows.includes(i) ? { ...x, attribute, state: g.rows[0] === i ? now : x.state } : x)));
            }}
          >
            <option value="" ?selected=${!g.attribute}>${this.t("picture_state_of")}</option>
            ${attributes(g.entity).map((a) => html`<option value=${a} ?selected=${a === g.attribute}>${a}</option>`)}
          </select>
          <span class="fp3d-sub fp3d-rule-now">${this.t("picture_current", { value: current(g.entity, g.attribute) || "–" })}</span>
          ${g.rows.map((i) => {
            const r = rules[i];
            const hit = !!this.hass && pictureRuleMatches(this.hass, r);
            return html`<div class="fp3d-picture-row ${hit ? "fp3d-rule-hit" : ""}">
              <input
                type="text"
                list="fp3d-picture-states-${i}"
                placeholder=${this.t("picture_state")}
                .value=${r.state}
                ?disabled=${!admin}
                @change=${(e: Event) => patchRow(i, { state: (e.target as HTMLInputElement).value })}
              />
              <datalist id="fp3d-picture-states-${i}"><option value="*"></option>${suggestions(g.entity, g.attribute).map((v) => html`<option value=${v}></option>`)}</datalist>
              ${this._images[r.image] ? html`<img class="fp3d-picture-thumb" src=${this._images[r.image].url} alt="" /> ` : nothing}
              ${cameraOf(r) && this.hass?.states[cameraOf(r)!]?.attributes.entity_picture
                ? html`<img class="fp3d-picture-thumb" src=${String(this.hass.states[cameraOf(r)!].attributes.entity_picture)} alt="" />`
                : nothing}
              <label class="fp3d-btn fp3d-picture-pick">
                ${r.image ? this.t("picture_change") : this.t("picture_pick")}
                <input type="file" accept="image/*" hidden ?disabled=${!admin} @change=${(e: Event) => void this.uploadPicture(e, f, i)} />
              </label>
              ${stored.filter((id) => id !== r.image).length
                ? html`<div class="fp3d-picture-reuse" title=${this.t("picture_reuse")}>
                    ${stored
                      .filter((id) => id !== r.image && this._images[id])
                      .map((id) => html`<button class="fp3d-picture-reuse-btn" ?disabled=${!admin} @click=${() => patchRow(i, { image: id })}><img src=${this._images[id].url} alt="" /></button>`)}
                  </div>`
                : nothing}
              <input
                type="url"
                placeholder=${this.t("picture_url")}
                .value=${/^https?:\/\//.test(r.image) ? r.image : ""}
                ?disabled=${!admin}
                @change=${(e: Event) => {
                  const v = (e.target as HTMLInputElement).value.trim();
                  if (v) patchRow(i, { image: v });
                }}
              />
              ${cameras.length
                ? html`<fp3d-entity-picker
                    class="fp3d-picture-camera"
                    .options=${cameras}
                    .fixed=${[{ id: "none", label: this.t("picture_camera_none") }]}
                    .value=${cameraOf(r) ?? "none"}
                    .placeholder=${this.t("picture_camera")}
                    ?disabled=${!admin}
                    @change=${(e: CustomEvent<{ value: string }>) => {
                      e.stopPropagation();
                      if (e.detail.value !== "none") patchRow(i, { image: `camera:${e.detail.value}` });
                      else if (cameraOf(r)) patchRow(i, { image: "" });
                    }}
                  ></fp3d-entity-picker>`
                : nothing}
              <span class="fp3d-sub">${hit ? this.t("picture_matches") : ""}</span>
              <button class="fp3d-btn" ?disabled=${!admin} title=${this.t("delete")} @click=${() => set(rules.filter((_, j) => j !== i))}>✕</button>
            </div>`;
          })}
          ${admin
            ? html`<button class="fp3d-btn" @click=${() => set([...rules, { entity: g.entity, attribute: g.attribute, state: current(g.entity, g.attribute), image: "" }])}>
                ${this.t("picture_add_value")}
              </button>`
            : nothing}
        </div>`,
      )}
      ${admin
        ? html`<button class="fp3d-btn" @click=${() => set([...rules, { entity: entities[0]?.id ?? "", attribute: null, state: "on", image: "" }])}>${this.t("picture_add_entity")}</button>`
        : nothing}
      <p class="fp3d-sub">${this.t("screen_pictures_hint")}</p>
    </div>`;
  }

  /** Stores a picture for a rule, scaled down to what a screen in 3D needs. */
  private async uploadPicture(e: Event, f: Furniture, index: number): Promise<void> {
    const input = e.target as HTMLInputElement;
    const file = input.files?.[0];
    input.value = "";
    if (!file) return;
    const bitmap = await createImageBitmap(file);
    const k = Math.min(1, 512 / Math.max(bitmap.width, bitmap.height));
    const canvas = document.createElement("canvas");
    canvas.width = Math.round(bitmap.width * k);
    canvas.height = Math.round(bitmap.height * k);
    canvas.getContext("2d")!.drawImage(bitmap, 0, 0, canvas.width, canvas.height);
    const data = canvas.toDataURL(file.type === "image/png" ? "image/png" : "image/jpeg", 0.85);
    const imageId = uid("pic");
    await storeImage(this.hass, imageId, data);
    this._images = { ...this._images, [imageId]: { url: data, aspect: canvas.height / canvas.width } };
    const rules = this.furnitureItem?.id === f.id ? (this.furnitureItem.pictures ?? []) : (f.pictures ?? []);
    this.updateFurniture({ pictures: rules.map((x, j) => (j === index ? { ...x, image: imageId } : x)) });
  }

  private libIndex: { key: string; entries: LibraryEntry[] } | null = null;

  /** The library's index, built once per language and pack state. */
  private libraryEntries(lang: string): LibraryEntry[] {
    // the smart fridge is exclusive: an installed pack with the feature "fridge_smart", or Haushalt Pro, offers it
    const extra = hasFeature("fridge_smart") || hasFeature("household") ? ["fridge_smart"] : [];
    const key = `${lang}|${libPacksVersion()}|${this.packs?.length ?? 0}|${extra.length}`;
    if (this.libIndex?.key === key) return this.libIndex.entries;
    const entries = buildIndex({
      packs: this.packs ?? [],
      basics: basicTypes(extra),
      language: lang,
      basicName: (t) => this.t(`furn_${t}` as I18nKey),
      basicNameEn: (t) => translate(EN_HASS, `furn_${t}` as I18nKey),
      kindName: (k) => this.t(`lib_kind_${k}` as I18nKey),
      size: furnitureSize,
    });
    this.libIndex = { key, entries };
    return entries;
  }

  /** A card's picture: drawn by the 3D bundle like the hover preview, smaller. */
  private libraryThumb = async (entry: LibraryEntry): Promise<string | null> => {
    const mod = await load3d();
    const [w, d, h] = entry.size;
    return mod.furniturePreview({ type: entry.type, w, d, h, variant: null, lamp: LAMP_MODEL[entry.type] ?? null }, 96, this.packs ?? []);
  };

  private renderFurnitureLibrary() {
    const room = this.room;
    const lang = this.hass?.language ?? "en";
    return html`<section>
      <h3>${this.t("furniture_add")}</h3>
      <p class="fp3d-sub">${room ? this.t("furniture_into", { room: room.name }) : this.t("furniture_pick_room")}</p>
      <fp3d-library
        .entries=${this.libraryEntries(lang)}
        .language=${lang}
        .roomHint=${room ? roomKindOf(room.name) : null}
        .admin=${this.isAdmin}
        .t=${(k: string, v?: Record<string, string | number>) => this.t(k as I18nKey, v)}
        .thumb=${this.libraryThumb}
        @library-add=${(e: CustomEvent<{ type: string; mirror?: boolean }>) => this.addFurniture(e.detail.type, !!e.detail.mirror)}
        @library-preview=${(e: CustomEvent<{ type: string | null; element: HTMLElement | null }>) => {
          if (e.detail.type && e.detail.element) void this.showPreview(e.detail.type, e.detail.element);
          else this._preview = null;
        }}
      ></fp3d-library>
    </section>
    <div class="fp3d-ext-teaser">
      <b>${this.t("ext_teaser_title")}</b>
      <span class="fp3d-sub">${this.t("ext_teaser_text")}</span>
      <button class="fp3d-btn fp3d-primary" @click=${() => this.dispatchEvent(new CustomEvent("open-extensions", { bubbles: true, composed: true }))}>${this.t("ext_open")}</button>
    </div>`;
  }

  /** Picture of an item, drawn by the 3D bundle and shown left of its button. */
  private async showPreview(type: string, button: HTMLElement): Promise<void> {
    const r = button.getBoundingClientRect();
    const place = { left: Math.max(8, r.left - 196), top: Math.max(8, Math.min(window.innerHeight - 200, r.top + r.height / 2 - 95)) };
    this._preview = { type, url: null, ...place };
    try {
      const mod = await load3d();
      const [w, d, h] = furnitureSize(type);
      const url = mod.furniturePreview({ type, w, d, h, variant: null, lamp: LAMP_MODEL[type] ?? null }, 180, this.packs ?? []);
      if (this._preview?.type === type) this._preview = { type, url, ...place };
    } catch {
      this._preview = null;
    }
  }

  private renderPreview() {
    const p = this._preview;
    if (!p) return nothing;
    return html`<div class="fp3d-preview" style="left:${p.left}px;top:${p.top}px" aria-hidden="true">
      ${p.url ? html`<img src=${p.url} alt="" />` : html`<span class="fp3d-preview-wait"></span>`}
      <b>${furnitureName(this.hass, p.type)}</b>
    </div>`;
  }

  private renderDeviceForm(pl: Placement) {
    const admin = this.isAdmin;
    const kind = kindOf(pl.entity_id);
    const light = kind === "light";
    const mount = pl.mount ?? "ceiling";
    const auto = kind ? defaultHeight(kind, this.floor?.height ?? 2.5, light ? mount : null) : 1;
    return html`<section>
      <div class="fp3d-h3row"><h3>${this.t("device")}</h3>${this.fixButton("device", pl.entity_id)}</div>
      <p class="fp3d-dev-title">
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d=${kind ? iconPath(kind) : ""} />
        </svg>
        ${entityName(this.hass, pl.entity_id)}
      </p>
      <div class="fp3d-form">
        ${light
          ? html`<label class="fp3d-field fp3d-wide"
              >${this.t("lamp_mount")}
              <select ?disabled=${!admin} @change=${(e: Event) => this.updateDevice({ mount: (e.target as HTMLSelectElement).value as LampMount, y: null })}>
                ${(["ceiling", "floor", "table", "wall"] as const).map((m) => html`<option value=${m} ?selected=${m === mount}>${this.t(`lamp_${m}`)}</option>`)}
              </select></label
            >
            ${this.glowScaleField(pl.glow_scale, (v) => this.updateDevice({ glow_scale: v }))}`
          : kind === "camera"
            ? html`<label class="fp3d-field fp3d-wide"
                >${this.t("camera_mount")}
                <select ?disabled=${!admin} @change=${(e: Event) => this.updateDevice({ mount: (e.target as HTMLSelectElement).value as LampMount, y: null })}>
                  <option value="wall" ?selected=${(pl.mount ?? "wall") === "wall"}>${this.t("camera_mount_wall")}</option>
                  <option value="ceiling" ?selected=${pl.mount === "ceiling"}>${this.t("camera_mount_ceiling")}</option>
                </select></label
              >`
            : nothing}
        ${this.len(this.t("x"), pl.x, (v) => this.updateDevice({ x: v }))} ${this.len(this.t("z"), pl.z, (v) => this.updateDevice({ z: v }))}
        ${this.len(this.t("marker_height"), pl.y ?? auto, (v) => this.updateDevice({ y: Math.max(0, v) }), 0.05, 0)}
        ${this.num(this.t("rotation"), pl.rotation ?? 0, (v) => this.updateDevice({ rotation: ((v % 360) + 360) % 360 }), 1)}
        ${kind === "camera"
          ? html`${this.num(this.t("camera_fov"), pl.fov ?? (pl.mount === "ceiling" ? 360 : 90), (v) => this.updateDevice({ fov: Math.min(360, Math.max(10, v)) }), 5, 10)}
            ${this.len(this.t("camera_reach"), pl.reach ?? (pl.mount === "ceiling" ? 3 : 4.5), (v) => this.updateDevice({ reach: Math.min(50, Math.max(0.5, v)) }), 0.5, 0.5)}
            ${this.num(this.t("camera_tilt"), pl.tilt ?? (pl.mount === "ceiling" ? 65 : 20), (v) => this.updateDevice({ tilt: Math.min(90, Math.max(0, v)) }), 5, 0)}
            <label class="fp3d-check fp3d-wide"
              ><input type="checkbox" .checked=${pl.cone !== false} ?disabled=${!admin} @change=${(ev: Event) => this.updateDevice({ cone: (ev.target as HTMLInputElement).checked ? null : false })} />
              ${this.t("camera_cone")}</label
            >
            <label class="fp3d-check fp3d-wide" title=${this.t("camera_detect_pins_hint")}
              ><input type="checkbox" .checked=${pl.detect_pins !== false} ?disabled=${!admin} @change=${(ev: Event) => this.updateDevice({ detect_pins: (ev.target as HTMLInputElement).checked ? null : false })} />
              ${this.t("camera_detect_pins")}</label
            >
            <p class="fp3d-sub fp3d-wide">${this.t("camera_aim_hint")}</p>
            ${this.renderCameraDetections(pl.entity_id)}`
          : nothing}
        ${kind && TOGGLE_KINDS.has(kind)
          ? html`<label class="fp3d-check fp3d-wide" title=${this.t("device_confirm_hint")}
              ><input type="checkbox" .checked=${!!pl.confirm} ?disabled=${!admin} @change=${(ev: Event) => this.updateDevice({ confirm: (ev.target as HTMLInputElement).checked })} />
              ${this.t("device_confirm")}</label
            >`
          : nothing}
        ${hasFeature("energy_pro") && powerSensorFor(this.hass!, pl.entity_id)
          ? html`<label class="fp3d-check fp3d-wide" title=${this.t("furn_holo_hint")}
              ><input type="checkbox" .checked=${!!pl.holo} ?disabled=${!admin} @change=${(ev: Event) => this.updateDevice({ holo: (ev.target as HTMLInputElement).checked || undefined })} />
              ${this.t("furn_holo")}</label
            >`
          : nothing}
        ${this.markerSelect(pl.marker ?? null, (v) => this.updateDevice({ marker: v }))}
        <label class="fp3d-field fp3d-wide" title=${this.t("device_name_hint")}
          >${this.t("device_name")}
          <input type="text" .value=${pl.name ?? ""} ?disabled=${!admin} maxlength="60" placeholder=${entityName(this.hass!, pl.entity_id)} @change=${(e: Event) => this.updateDevice({ name: (e.target as HTMLInputElement).value.trim() || null })}
        /></label>
        <label class="fp3d-field fp3d-wide" title=${this.t("aliases_hint")}
          >${this.t("aliases")}
          <input type="text" maxlength="240" .value=${(pl.aliases ?? []).join(", ")} ?disabled=${!admin} placeholder=${this.t("aliases_placeholder")} @change=${(e: Event) => this.updateDevice({ aliases: splitAliases((e.target as HTMLInputElement).value) })}
        /></label>
        ${pl.name
          ? html`<label class="fp3d-check fp3d-wide"
              ><input type="checkbox" .checked=${!!pl.show_name} ?disabled=${!admin} @change=${(ev: Event) => this.updateDevice({ show_name: (ev.target as HTMLInputElement).checked || undefined })} />
              ${this.t("show_name")}</label
            >`
          : nothing}
        ${this.iconInput(pl.icon, (v) => this.updateDevice({ icon: v }))}
      </div>
      ${admin
        ? html`<div class="fp3d-actions">
            <button class="fp3d-btn" @click=${() => this.centreDevice()}>${this.t("device_centre")}</button>
            ${pl.y !== null ? html`<button class="fp3d-btn" @click=${() => this.updateDevice({ y: null })}>${this.t("height_auto")}</button>` : nothing}
            ${this.renderAsFurniture(pl)}
            <button
              class="fp3d-btn fp3d-danger"
              @click=${() => {
                this.removeDevice(pl.entity_id);
                this._deviceId = null;
              }}
            >
              ${this.t("devices_remove")}
            </button>
          </div>`
        : nothing}
    </section>`;
  }

  private renderDeviceList(room: Room) {
    const admin = this.isAdmin;
    const hass = this.hass;
    const areaName = room.area_id ? hass?.areas?.[room.area_id]?.name : undefined;
    const area = hass ? areaEntities(hass, room.area_id).filter((id) => isPlaceable(kindOf(id))) : [];
    // placed as a device, or as a lamp with this light
    const placedHere = new Set([
      ...(this.floor?.placements.filter((pl) => pointInPolygon([pl.x, pl.z], room.points)).map((pl) => pl.entity_id) ?? []),
      ...(this.floor?.furniture.filter((m) => isLamp(m.type) && m.entity && pointInPolygon([m.x, m.z], room.points)).map((m) => m.entity!) ?? []),
    ]);
    // placed before it was hidden in Home Assistant: it stays in 3D, so it stays in the list too – to remove or hide it (#645)
    const ids = hass ? [...area, ...[...placedHere].filter((id) => !area.includes(id) && hiddenInHa(hass, id) && isPlaceable(kindOf(id)))] : area;
    const groups = hass ? groupByDevice(hass, ids) : [];
    // the automatic placement only takes each device's main entity
    const unplacedMain = groups.map((g) => g.primary).filter((id) => !placedHere.has(id));
    const q = this._deviceQuery.trim().toLowerCase();
    const matches = (id: string) => !q || entityName(hass, id, areaName).toLowerCase().includes(q) || id.includes(q);
    const ceilingLights = this.floor?.placements.filter(
      (p) => kindOf(p.entity_id) === "light" && (p.mount ?? "ceiling") === "ceiling" && pointInPolygon([p.x, p.z], room.points),
    ).length;
    const pinned = new Set(room.panel ?? []);
    const hidden = new Set(room.hidden ?? []);
    const noState = new Set(room.no_state ?? []);
    // where an entity from elsewhere is placed already (placing it here moves it)
    const placedIn = new Map<string, string>();
    for (const f of this._doc.floors)
      for (const id of [...f.placements.map((p) => [p.entity_id, p.x, p.z] as const), ...f.furniture.filter((m) => isLamp(m.type) && m.entity).map((m) => [m.entity!, m.x, m.z] as const)]) {
        const r = f.rooms.find((x) => pointInPolygon([id[1], id[2]], x.points));
        if (r && r.id !== room.id) placedIn.set(id[0], r.name);
      }
    // extra: an entity from another area (shown only to place it); sub: a further entity of a device, with the same
    // buttons as its main one – hidden or without state on its own (D484)
    const row = (id: string, extra = false, nameArea = areaName, sub = false) => {
      const placed = placedHere.has(id);
      const elsewhere = placed ? undefined : placedIn.get(id);
      return html`<div class="fp3d-row fp3d-dev-row ${extra || sub ? "fp3d-dev-extra" : ""} ${hidden.has(id) ? "fp3d-dev-hidden" : ""}">
        <button class="fp3d-dev-name ${placed ? "" : "fp3d-muted"}" ?disabled=${!placed} @click=${() => this.selectItem("device", id)}>
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d=${iconPath(kindOf(id)!)} />
          </svg>
          <span>${entityName(hass, id, nameArea)}${elsewhere ? html`<small class="fp3d-muted"> · ${this.t("devices_placed_in", { room: elsewhere })}</small>` : nothing}</span>
        </button>
        ${admin && !extra
          ? html`<button
              class="fp3d-pin ${hidden.has(id) ? "fp3d-pin-on" : ""}"
              aria-pressed=${hidden.has(id)}
              title=${this.t(hidden.has(id) ? "panel_unhide" : "panel_hide")}
              @click=${() => this.updateRoom({ hidden: hidden.has(id) ? [...hidden].filter((x) => x !== id) : [...hidden, id] })}
            >
              ${hidden.has(id) ? "🙈" : "👁"}
            </button>`
          : nothing}
        ${admin && !extra && !hidden.has(id)
          ? html`<button
              class="fp3d-pin ${noState.has(id) ? "fp3d-pin-on" : ""}"
              aria-pressed=${noState.has(id)}
              title=${this.t(noState.has(id) ? "panel_state_show" : "panel_state_hide")}
              @click=${() => this.updateRoom({ no_state: noState.has(id) ? [...noState].filter((x) => x !== id) : [...noState, id] })}
            >
              ${noState.has(id) ? "∅" : "Aa"}
            </button>`
          : nothing}
        ${admin && !placed
          ? html`<button
              class="fp3d-pin ${pinned.has(id) ? "fp3d-pin-on" : ""}"
              aria-pressed=${pinned.has(id)}
              title=${this.t(pinned.has(id) ? "panel_unpin" : "panel_pin")}
              @click=${() => this.updateRoom({ panel: pinned.has(id) ? [...pinned].filter((x) => x !== id) : [...pinned, id] })}
            >
              ${pinned.has(id) ? "★" : "☆"}
            </button>`
          : nothing}
        ${admin
          ? placed
            ? html`<button class="fp3d-link" @click=${() => this.removeDevice(id)}>${this.t("devices_remove")}</button>`
            : html`<button class="fp3d-link" @click=${() => this.placeDevices([id])}>${this.t("devices_place")}</button>`
          : nothing}
      </div>`;
    };
    const source = admin ? this._devSource : "area";
    const setSource = (v: "area" | "other" | "none") => {
      this._devSource = v;
      this._deviceQuery = "";
    };
    const searchField = html`<input
      class="fp3d-search"
      type="search"
      placeholder=${this.t("devices_search")}
      .value=${this._deviceQuery}
      @input=${(e: Event) => (this._deviceQuery = (e.target as HTMLInputElement).value)}
    />`;
    const placeAll = () => {
      if (confirm(this.t("devices_place_all_confirm", { n: unplacedMain.length }))) this.placeDevices(unplacedMain);
    };
    return html`<section>
      <h3>${this.t("devices")}</h3>
      <p class="fp3d-sub">${this.t("devices_panel_hint")}</p>
      ${admin
        ? html`<div class="fp3d-seg fp3d-dev-source">
            <button aria-pressed=${source === "area"} @click=${() => setSource("area")}>${this.t("devices_src_area")}${ids.length ? ` (${groups.length})` : ""}</button>
            <button aria-pressed=${source === "other"} @click=${() => setSource("other")}>${this.t("devices_src_other")}</button>
            <button aria-pressed=${source === "none"} @click=${() => setSource("none")}>${this.t("devices_src_none")}</button>
          </div>`
        : nothing}
      ${source !== "area"
        ? html`${searchField}${this.renderDeviceExtras(room, row, source)}`
        : !room.area_id
        ? html`<p class="fp3d-sub">${this.t("devices_none_area")}</p>`
        : !ids.length
          ? html`<p class="fp3d-sub">${this.t("devices_none")}</p>`
          : html`${admin && (ceilingLights ?? 0) >= 2
                ? html`<button class="fp3d-btn fp3d-wide-btn" @click=${() => this.spreadCeilingLights(room)}>${this.t("lights_spread")}</button>`
                : nothing}
              ${ids.length > 8 ? searchField : nothing}
              <div class="fp3d-room-list">
                ${groups.map((g) => {
                  const others = g.others.filter(matches);
                  const open = this._expanded.has(g.primary) || (!!q && others.length > 0);
                  if (!matches(g.primary) && !others.length) return nothing;
                  return html`${row(g.primary)}
                  ${g.others.length
                    ? html`<button
                        class="fp3d-more"
                        @click=${() => {
                          const next = new Set(this._expanded);
                          if (next.has(g.primary)) next.delete(g.primary);
                          else next.add(g.primary);
                          this._expanded = next;
                        }}
                      >
                        ${open ? this.t("devices_less") : this.t("devices_more", { n: g.others.length })}
                      </button>`
                    : nothing}
                  ${open ? this.renderDeviceOthers(q ? others : g.others, (id) => row(id, false, areaName, true), hidden, admin) : nothing}`;
                })}
              </div>
              ${admin && unplacedMain.length > 1
                ? html`<button class="fp3d-link fp3d-place-all" @click=${placeAll}>${this.t("devices_place_all_n", { n: unplacedMain.length })}</button>`
                : nothing}
              <p class="fp3d-sub">${this.t("devices_hint")}</p>`}
    </section>`;
  }

  /**
   * The further entities of an unfolded device: an LED strip from Govee2MQTT brings hundreds of segment lights
   * (#645), so the list stops after a few dozen (the search narrows it) and one button hides or shows them all.
   */
  private renderDeviceOthers(ids: string[], row: (id: string) => unknown, hidden: Set<string>, admin: boolean) {
    const LIMIT = 40;
    const allHidden = ids.every((id) => hidden.has(id));
    const toggleAll = () => {
      const set = new Set(hidden);
      for (const id of ids) {
        if (allHidden) set.delete(id);
        else set.add(id);
      }
      this.updateRoom({ hidden: [...set] });
    };
    return html`${admin && ids.length >= 5
        ? html`<button class="fp3d-link fp3d-dev-all" @click=${toggleAll}>
            ${this.t(allHidden ? "devices_show_all" : "devices_hide_all", { n: ids.length })}
          </button>`
        : nothing}
      ${ids.slice(0, LIMIT).map(row)}
      ${ids.length > LIMIT ? html`<p class="fp3d-sub">${this.t("devices_narrow", { n: ids.length - LIMIT })}</p>` : nothing}`;
  }

  /** Devices from other areas or without an area, for the chosen source (computed only when shown). */
  private renderDeviceExtras(room: Room, row: (id: string, extra?: boolean, nameArea?: string) => unknown, source: "other" | "none") {
    const hass = this.hass;
    if (!hass) return nothing;
    const LIMIT = 50;
    const q = this._deviceQuery.trim().toLowerCase();
    const match = (id: string, area?: string) => !q || `${entityName(hass, id, area)} ${id} ${area ?? ""}`.toLowerCase().includes(q);
    const more = (n: number) => (n > 0 ? html`<p class="fp3d-sub">${this.t("devices_narrow", { n })}</p>` : nothing);
    if (source === "other") {
      let shown = 0;
      let hidden = 0;
      const blocks = otherAreaEntities(hass, room.area_id).map((a) => {
        const ids = a.ids.filter((id) => match(id, a.name));
        const take = ids.slice(0, Math.max(0, LIMIT - shown));
        shown += take.length;
        hidden += ids.length - take.length;
        return take.length ? html`<div class="fp3d-dev-area">${a.name}</div>${take.map((id) => row(id, false, a.name))}` : nothing;
      });
      return shown ? html`<div class="fp3d-room-list">${blocks}</div>${more(hidden)}` : html`<p class="fp3d-sub">${this.t("devices_none")}</p>`;
    }
    const ids = unassignedEntities(hass).filter((id) => match(id));
    return ids.length
      ? html`<div class="fp3d-room-list">${ids.slice(0, LIMIT).map((id) => row(id))}</div>${more(ids.length - Math.min(ids.length, LIMIT))}`
      : html`<p class="fp3d-sub">${this.t("devices_none")}</p>`;
  }

  /** Room climate: temperature, humidity and CO2 from chosen sensors, or picked automatically. */
  private renderRoomClimate(room: Room) {
    const hass = this.hass;
    if (!hass) return nothing;
    const set = (key: ClimateKey, v: string | null) => {
      const next = { ...(room.climate ?? {}), [key]: v };
      const empty = Object.values(next).every((x) => x == null);
      this.updateRoom({ climate: empty ? null : next });
    };
    const chosen = !!room.climate && Object.values(room.climate).some((x) => x != null);
    const field = (key: ClimateKey, label: string) => {
      const dc = CLIMATE_CLASSES[key];
      const auto = roomClimateSensors(hass, this.floor ?? null, { ...room, climate: null }, key);
      // the room's own sensors first, then all others; device temperatures (printer, heat pump) last
      // sensors of the kind, and thermostats that report it (#478)
      const attr = CLIMATE_ATTRS[key];
      const options = this.entityOptions((id) => (numberish(id) && hass.states[id]?.attributes.device_class === dc) || (!!attr && id.startsWith("climate.") && typeof hass.states[id]?.attributes[attr] === "number"))
        .map((o) => ({ ...o, rank: (entityAreaId(hass, o.id) === room.area_id ? 0 : 1) + (isRoomClimateSensor(hass, o.id) ? 0 : 2) }))
        .sort((a, b) => a.rank - b.rank)
        .map(({ id, label }) => ({ id, label }));
      return this.entitySelect(label, room.climate?.[key] ?? null, auto[0] ?? null, options, (v) => set(key, v));
    };
    return html`<details class="fp3d-points" ?open=${chosen}>
      <summary>${this.t("climate")}</summary>
      <div class="fp3d-form">
        ${field("temperature", this.t("climate_temperature"))} ${field("humidity", this.t("climate_humidity"))} ${field("co2", this.t("climate_co2"))}
      </div>
      <p class="fp3d-sub">${this.t("climate_hint")}</p>
    </details>`;
  }

  private renderBackgroundForm(floor: Floor) {
    const bg = floor.background;
    return html`<details class="fp3d-section" ?open=${this._bgOpen} @toggle=${(e: Event) => (this._bgOpen = (e.target as HTMLDetailsElement).open)}>
      <summary>${this.t("background")}</summary>
      <div class="fp3d-form">
        <label class="fp3d-btn fp3d-wide fp3d-upload"
          >${this.t("background_upload")}<input type="file" accept="image/png,image/jpeg,image/webp" @change=${this.uploadBackground}
        /></label>
        ${bg
          ? html`${this.len(this.t("x"), bg.x, (v) => this.updateFloor({ background: { ...bg, x: v } }))}
              ${this.len(this.t("z"), bg.z, (v) => this.updateFloor({ background: { ...bg, z: v } }))}
              ${this.len(this.t("background_width"), bg.width, (v) => this.updateFloor({ background: { ...bg, width: Math.max(0.1, v) } }), 0.01, 0.1)}
              ${this.num(this.t("background_rotation"), bg.rotation ?? 0, (v) => this.updateFloor({ background: { ...bg, rotation: Math.round(v * 10) / 10 } }), 0.5)}
              ${this.isAdmin
                ? html`<button
                      class="fp3d-btn fp3d-wide ${this._bgEdit ? "fp3d-primary" : ""}"
                      aria-pressed=${this._bgEdit}
                      @click=${() => {
                        this._bgEdit = !this._bgEdit;
                        // the handles need the select tool
                        if (this._bgEdit) this._tool = "select";
                      }}
                    >
                      ${this.t(this._bgEdit ? "background_edit_done" : "background_edit")}
                    </button>
                    <p class="fp3d-sub fp3d-wide">${this.t(this._bgEdit ? "background_handles_hint" : "background_fixed_hint")}</p>
                  <button class="fp3d-btn fp3d-wide ${this._bgLevel ? "fp3d-primary" : ""}" aria-pressed=${!!this._bgLevel} @click=${() => {
                    this._bgLevel = this._bgLevel ? null : [];
                    this._bgRuler = null;
                    this._bgEdit = false;
                  }}>📐 ${this.t(this._bgLevel ? "bg_level_cancel" : "bg_level")}</button>
                  ${this._bgLevel ? html`<p class="fp3d-sub fp3d-wide">${this.t(this._bgLevel.length ? "bg_level_second" : "bg_level_first")}</p>` : nothing}
                  <button class="fp3d-btn fp3d-wide ${this._bgRuler ? "fp3d-primary" : ""}" aria-pressed=${!!this._bgRuler} @click=${() => {
                    this._bgRuler = this._bgRuler ? null : [];
                    this._bgLevel = null;
                    this._bgEdit = false;
                  }}>📏 ${this.t(this._bgRuler ? "bg_ruler_cancel" : "bg_ruler")}</button>
                  ${this._bgRuler
                    ? this._bgRuler.length < 2
                      ? html`<p class="fp3d-sub fp3d-wide">${this.t(this._bgRuler.length ? "bg_ruler_second" : "bg_ruler_first")}</p>`
                      : html`<p class="fp3d-sub fp3d-wide">${this.t("bg_ruler_length_hint", { m: this.m(Math.hypot(this._bgRuler[1][0] - this._bgRuler[0][0], this._bgRuler[1][1] - this._bgRuler[0][1])) })}</p>
                          <label class="fp3d-field"
                            >${unitLabel(this.t("bg_ruler_length"), this.unit)}
                            <input type=${this.unit === "imperial" ? "text" : "number"} min="0.01" step="0.01" .value=${this._bgRulerLen ? this.lenValue(this._bgRulerLen) : ""} @input=${(e: Event) => (this._bgRulerLen = this.readLen((e.target as HTMLInputElement).value) ?? 0)} @keydown=${(e: KeyboardEvent) => e.key === "Enter" && this.applyBgRuler(this._bgRulerLen)}
                          /></label>
                          <button class="fp3d-btn fp3d-primary" ?disabled=${!(this._bgRulerLen > 0)} @click=${() => this.applyBgRuler(this._bgRulerLen)}>${this.t("bg_ruler_apply")}</button>`
                    : nothing}`
                : nothing}
              <label class="fp3d-field"
                >${this.t("background_opacity")}
                <input
                  type="range"
                  min="0.05"
                  max="1"
                  step="0.05"
                  .value=${String(bg.opacity)}
                  @change=${(e: Event) => this.updateFloor({ background: { ...bg, opacity: parseFloat((e.target as HTMLInputElement).value) } })}
              /></label>
              <button class="fp3d-btn fp3d-danger fp3d-wide" @click=${() => this.updateFloor({ background: null })}>${this.t("background_remove")}</button>`
          : nothing}
      </div>
    </details>`;
  }

  private async loadDiagnostics(): Promise<void> {
    if (!this.hass) return;
    try {
      this._diag = await getDiagnostics(this.hass);
    } catch {
      this._diag = "error";
    }
  }

  /** Switch the reports, delete them; the main bundle's collector hears about it through a window event. */
  private async changeDiagnostics(action: "on" | "off" | "delete"): Promise<void> {
    if (!this.hass || this._diagBusy) return;
    if (action === "delete" && !confirm(this.t("diag_delete_confirm"))) return;
    this._diagBusy = true;
    this._diagNote = "";
    try {
      this._diag = action === "delete" ? await deleteDiagnostics(this.hass) : await setDiagnostics(this.hass, action === "on");
      if (action === "delete") this._diagNote = this.t("diag_deleted");
      window.dispatchEvent(new CustomEvent("neonplan3d-diagnostics", { detail: { enabled: this._diag.enabled } }));
    } catch {
      this._diagNote = this.t(action === "delete" ? "diag_delete_failed" : "save_error");
    }
    this._diagBusy = false;
  }

  /** `open`: shown in its own settings dialog (open from the start). */
  private renderDiagnostics(open = false) {
    const d = this._diag;
    const on = d !== null && d !== "error" && d.enabled;
    return html`<details
      class="fp3d-section"
      ?open=${open}
      @toggle=${(e: Event) => {
        if ((e.target as HTMLDetailsElement).open) void this.loadDiagnostics();
      }}
    >
      <summary>${this.t("diag_title")}</summary>
      <p class="fp3d-sub">${this.t("diag_intro")}</p>
      <p class="fp3d-sub"><b>${this.t("diag_sent_head")}</b> ${this.t("diag_sent")}</p>
      <p class="fp3d-sub"><b>${this.t("diag_never_head")}</b> ${this.t("diag_never")}</p>
      <p class="fp3d-sub">
        ${this.t("diag_voluntary")}
        <a href="https://mastershort.de/datenschutz/" target="_blank" rel="noopener noreferrer">${this.t("diag_privacy")}</a>
      </p>
      ${d === null
        ? html`<p class="fp3d-sub">${this.t("loading")}</p>`
        : d === "error"
          ? html`<p class="fp3d-sub">${this.t("diag_unavailable")}</p>`
          : html`<label class="fp3d-check fp3d-wide"
                ><input type="checkbox" .checked=${on} ?disabled=${this._diagBusy} @change=${(e: Event) => void this.changeDiagnostics((e.target as HTMLInputElement).checked ? "on" : "off")} />
                ${this.t("diag_switch")}</label
              >
              <div class="fp3d-actions">
                <button class="fp3d-btn" @click=${() => (this._diagView = true)}>${this.t("diag_view")}</button>
                <button class="fp3d-btn" ?disabled=${this._diagBusy || (!on && !d.can_delete)} @click=${() => void this.changeDiagnostics("delete")}>${this.t("diag_delete")}</button>
              </div>`}
      ${this._diagNote ? html`<p class="fp3d-sub">${this._diagNote}</p>` : nothing}
    </details>`;
  }

  /** The exact next report as JSON, over the whole editor. */
  private renderDiagnosticsView() {
    const d = this._diag;
    if (!this._diagView || !d || d === "error") return nothing;
    const on = d.enabled;
    return html`<div class="fp3d-wv-veil" @click=${(e: Event) => e.target === e.currentTarget && (this._diagView = false)}>
      <div class="fp3d-wv fp3d-diag" role="dialog" aria-label=${this.t("diag_view")}>
        <h4 class="fp3d-lib-head">${this.t("diag_view_head")}</h4>
        <pre class="fp3d-diag-json">${JSON.stringify(d.preview, null, 2)}</pre>
        <p class="fp3d-sub">${this.t(on ? "diag_view_hint_on" : "diag_view_hint_off")}</p>
        <div class="fp3d-actions"><button class="fp3d-btn fp3d-primary" @click=${() => (this._diagView = false)}>${this.t("close")}</button></div>
      </div>
    </div>`;
  }

  private async loadHistory(): Promise<void> {
    if (!this.hass) return;
    try {
      this._history = await listHistory(this.hass);
    } catch {
      this._history = [];
    }
  }

  private async restoreFromHistory(snap: Snapshot): Promise<void> {
    if (!this.hass || !confirm(this.t("backup_restore_confirm", { time: this.snapshotTime(snap) }))) return;
    await restoreSnapshot(this.hass, snap.id);
    this._notice = this.t("backup_restored");
    await this.loadHistory();
  }

  /** Everything in one file: the plan, every stored picture and the packs (with their signatures). */
  private async exportBackup(): Promise<void> {
    if (!this.hass) return;
    this._backupBusy = true;
    try {
      const base = await fetchBackup(this.hass);
      const images: Record<string, string> = {};
      for (const id of storedImageIds(base.building)) {
        try {
          images[id] = await fetchImage(this.hass, id);
        } catch {
          /* a missing picture is left out */
        }
      }
      const day = new Date().toISOString().slice(0, 10);
      download(`neonplan3d-${this.t("export_name_full")}-${day}.json`, JSON.stringify({ ...base, exported_at: new Date().toISOString(), images }));
    } catch (err) {
      alert(this.t("backup_import_error", { error: String((err as { message?: string })?.message ?? err) }));
    } finally {
      this._backupBusy = false;
    }
  }

  private async importBackup(e: Event): Promise<void> {
    const input = e.target as HTMLInputElement;
    const file = input.files?.[0];
    input.value = "";
    if (!file || !this.hass) return;
    let data: BackupFile;
    try {
      data = JSON.parse(await file.text()) as BackupFile;
    } catch {
      alert(this.t("import_error_not_json"));
      return;
    }
    if (data?.format !== "neonplan3d-backup" || !data.building) {
      alert(this.t("backup_full_not_backup"));
      return;
    }
    if (!confirm(this.t("backup_full_confirm"))) return;
    this._backupBusy = true;
    try {
      const res = await restoreBackup(this.hass, data.building, data.packs ?? []);
      let pictures = 0;
      for (const [id, picture] of Object.entries(data.images ?? {})) {
        try {
          await storeImage(this.hass, id, picture);
          pictures++;
        } catch {
          /* an unreadable picture is skipped */
        }
      }
      this.setDoc(normalizeBuilding(res.building));
      this._floorId = res.building.floors[0]?.id ?? null;
      this.selectItem("room", null);
      this.fit();
      this.dispatchEvent(new CustomEvent("packs-changed", { bubbles: true, composed: true }));
      const skipped = res.skipped.length ? ` ${this.t("backup_full_skipped", { packs: res.skipped.map((s) => s.id).join(", ") })}` : "";
      this._notice = this.t("backup_full_restored", { packs: res.packs, pictures }) + skipped;
    } catch (err) {
      // a lost connection comes as the whole result message ({ error: { code, message } }), e.g. when the backup is
      // larger than Home Assistant takes in one message
      const e = (err ?? {}) as { code?: string | number; message?: string; error?: { code?: string | number; message?: string } };
      alert(this.t("backup_import_error", { error: String(e.message ?? e.error?.message ?? e.code ?? e.error?.code ?? err) }));
    } finally {
      this._backupBusy = false;
    }
  }

  private exportPlan(shareable: boolean): void {
    const day = new Date().toISOString().slice(0, 10);
    download(`neonplan3d-${this.t(shareable ? "export_name_template" : "export_name_backup")}-${day}.json`, JSON.stringify(exportFile(this._doc, shareable), null, 2));
  }

  private async importPlan(e: Event): Promise<void> {
    const input = e.target as HTMLInputElement;
    const file = input.files?.[0];
    input.value = "";
    if (!file || !this.hass) return;
    let building: Building;
    try {
      building = parseExport(await file.text());
    } catch (err) {
      const code = (err as Error).message;
      alert(code === "not_json" ? this.t("import_error_not_json") : code === "not_plan" ? this.t("import_error_not_plan") : this.t("backup_import_error", { error: code }));
      return;
    }
    if (!confirm(this.t("backup_import_confirm"))) return;
    // the current plan stays available as a restore point
    await takeSnapshot(this.hass).catch(() => undefined);
    this.setDoc(building);
    this._floorId = building.floors[0]?.id ?? null;
    this.selectItem("room", null);
    this.fit();
    this._notice = this.t("backup_imported");
  }

  private snapshotTime(snap: Snapshot): string {
    return new Date(snap.saved_at * 1000).toLocaleString(this.hass?.language, { dateStyle: "short", timeStyle: "short" });
  }

  private renderBackup() {
    return html`<details
      class="fp3d-section"
      @toggle=${(e: Event) => {
        if ((e.target as HTMLDetailsElement).open) void this.loadHistory();
      }}
    >
      <summary>${this.t("backup")}</summary>
      <h4 class="fp3d-lib-head">${this.t("backup_history")}</h4>
      ${this._history === null
        ? html`<p class="fp3d-sub">${this.t("loading")}</p>`
        : this._history.length
          ? html`<div class="fp3d-room-list">
              ${this._history.map(
                (h) => html`<div class="fp3d-row fp3d-dev-row">
                  <span>${this.snapshotTime(h)} <span class="fp3d-muted">· ${this.t("backup_summary", { rooms: h.rooms, furniture: h.furniture })}</span></span>
                  <button class="fp3d-link" @click=${() => this.restoreFromHistory(h)}>${this.t("backup_restore")}</button>
                </div>`,
              )}
            </div>`
          : html`<p class="fp3d-sub">${this.t("backup_none")}</p>`}
      <h4 class="fp3d-lib-head">${this.t("backup_file")}</h4>
      <div class="fp3d-actions">
        <button class="fp3d-btn" @click=${() => this.exportPlan(false)}>${this.t("backup_export")}</button>
        <button class="fp3d-btn" title=${this.t("backup_export_share_hint")} @click=${() => this.exportPlan(true)}>${this.t("backup_export_share")}</button>
        <label class="fp3d-btn fp3d-upload"
          >${this.t("backup_import")}<input type="file" accept="application/json,.json" @change=${this.importPlan}
        /></label>
      </div>
      <p class="fp3d-sub">${this.t("backup_hint")}</p>
      <p class="fp3d-sub">
        ${this.t("backup_other_hint")}
        <a href=${`https://neonplan3d.mastershort.de/import/?lang=${(this.hass?.language ?? "en").startsWith("de") ? "de" : "en"}`} target="_blank" rel="noopener">${this.t("backup_other")}</a>
      </p>
      <h4 class="fp3d-lib-head">${this.t("backup_full")}</h4>
      <div class="fp3d-actions">
        <button class="fp3d-btn" ?disabled=${this._backupBusy} @click=${() => this.exportBackup()}>${this._backupBusy ? "…" : this.t("backup_full_export")}</button>
        <label class="fp3d-btn fp3d-upload"
          >${this.t("backup_full_import")}<input type="file" accept="application/json,.json" @change=${this.importBackup}
        /></label>
      </div>
      <p class="fp3d-sub">${this.t("backup_full_hint")}</p>
    </details>`;
  }

  /** The ground around the house: its height, a hillside, the earth around cellars. */
  /** The background behind the 3D house: the look's own sky, one colour, a gradient or a picture. */
  private renderBackdrop() {
    const bd = this._doc.settings.backdrop ?? {};
    const set = (patch: Partial<NonNullable<Building["settings"]["backdrop"]>>) => this.change((d) => (d.settings.backdrop = { ...(d.settings.backdrop ?? {}), ...patch }));
    const kind = bd.kind ?? "";
    const colour = (label: I18nKey, value: string | null | undefined, fallback: string, key: "color" | "color2") =>
      html`<label class="fp3d-field"
        >${this.t(label)}
        <input type="color" .value=${value ?? fallback} @change=${(e: Event) => set({ [key]: (e.target as HTMLInputElement).value })} />
      </label>`;
    return html`<details class="fp3d-section">
      <summary>🖼 ${this.t("backdrop")}</summary>
      <div class="fp3d-form">
        <label class="fp3d-field fp3d-wide"
          >${this.t("backdrop_kind")}
          <select @change=${(e: Event) => set({ kind: (((e.target as HTMLSelectElement).value || null) as "color" | "gradient" | "image" | null) })}>
            ${(["", "color", "gradient", "image"] as const).map((k) => html`<option value=${k} ?selected=${kind === k}>${this.t(`backdrop_${k || "look"}` as I18nKey)}</option>`)}
          </select></label
        >
        ${kind === "color" || kind === "gradient" ? colour(kind === "gradient" ? "backdrop_top" : "backdrop_color", bd.color, "#0b1426", "color") : nothing}
        ${kind === "gradient" ? colour("backdrop_bottom", bd.color2, "#03060c", "color2") : nothing}
        ${kind === "image"
          ? html`<label class="fp3d-field fp3d-wide"
                >${this.t("backdrop_image_url")}
                <input type="text" placeholder="/local/hintergrund.jpg" .value=${bd.image ?? ""} @change=${(e: Event) => set({ image: (e.target as HTMLInputElement).value.trim() || null })}
              /></label>
              <label class="fp3d-field fp3d-wide"
                >${this.t("backdrop_dim")} (${Math.round((bd.dim ?? 0.45) * 100)} %)
                <input type="range" min="0" max="90" .value=${String(Math.round((bd.dim ?? 0.45) * 100))} @change=${(e: Event) => set({ dim: Number((e.target as HTMLInputElement).value) / 100 })}
              /></label>
              ${bd.image && !backdropImage(bd.image) ? html`<p class="fp3d-sub fp3d-wide fp3d-pack-error">${this.t("backdrop_image_bad")}</p>` : nothing}`
          : nothing}
      </div>
      <p class="fp3d-sub">${this.t("backdrop_hint")}</p>
    </details>`;
  }

  private renderTerrain() {
    const t = this._doc.settings.terrain ?? {};
    const set = (patch: Partial<NonNullable<Building["settings"]["terrain"]>>) => {
      const next = structuredClone(this._doc);
      next.settings.terrain = { ...(next.settings.terrain ?? {}), ...patch };
      this.setDoc(next);
    };
    const low = this._doc.floors.some((f) => f.elevation < -0.3);
    return html`<details class="fp3d-section">
      <summary>⛰ ${this.t("terrain")}</summary>
      <p class="fp3d-sub">${this.t("terrain_hint")}</p>
      <div class="fp3d-form">
        ${this.len(this.t("terrain_level"), t.level ?? -0.2, (v) => set({ level: Math.max(-20, Math.min(20, v)) }), 0.05)}
        <label class="fp3d-check fp3d-wide" title=${this.t("terrain_earth_hint")}
          ><input type="checkbox" .checked=${t.earth !== false} @change=${(ev: Event) => set({ earth: (ev.target as HTMLInputElement).checked })} />
          ${this.t("terrain_earth")}</label
        >
      </div>
      <p class="fp3d-sub">${this.t(low ? "terrain_cellar_hint" : "terrain_no_cellar_hint")}</p>
      ${t.level != null
        ? html`<div class="fp3d-actions"><button class="fp3d-btn" @click=${() => set({ level: null })}>${this.t("terrain_reset")}</button></div>`
        : nothing}
    </details>`;
  }

  private setSettings(patch: Partial<Building["settings"]>): void {
    const next = structuredClone(this._doc);
    Object.assign(next.settings, patch);
    this.setDoc(next);
  }

  /** ⚙ House: wall thicknesses, grid, units, north. */
  private renderHouseSettings() {
    const s = this._doc.settings;
    const set = (patch: Partial<Building["settings"]>) => this.setSettings(patch);
    return html`<details class="fp3d-section">
      <summary>${this.t("settings_house")}</summary>
      <div class="fp3d-form">
        ${this.len(this.t("wall_exterior"), s.wall_exterior, (v) => set({ wall_exterior: Math.min(1, Math.max(0.02, v)) }), 0.01, 0.02)}
        ${this.len(this.t("wall_interior"), s.wall_interior, (v) => set({ wall_interior: Math.min(1, Math.max(0.02, v)) }), 0.01, 0.02)}
        ${this.len(this.t("grid"), s.grid, (v) => set({ grid: Math.min(1, Math.max(0.01, v)) }), 0.01, 0.01)}
        <label class="fp3d-field" title=${this.t("units_hint")}
          >${this.t("units")}
          <select @change=${(e: Event) => {
            const v = (e.target as HTMLSelectElement).value;
            set({ units: v === "metric" || v === "imperial" ? v : null });
          }}>
            <option value="auto" ?selected=${!s.units}>${this.t("units_auto", { unit: this.t(lengthUnit(this.hass, null) === "imperial" ? "units_imperial" : "units_metric") })}</option>
            <option value="metric" ?selected=${s.units === "metric"}>${this.t("units_metric")}</option>
            <option value="imperial" ?selected=${s.units === "imperial"}>${this.t("units_imperial")}</option>
          </select></label
        >
        ${this.num(this.t("north"), s.north, (v) => set({ north: ((Math.round(v) % 360) + 360) % 360 }), 1)}
        <label class="fp3d-field fp3d-wide" title=${this.t("editor_floor_hint")}
          >${this.t("editor_floor")}
          <select @change=${(e: Event) => set({ editor_floor: (e.target as HTMLSelectElement).value || null })}>
            <option value="" ?selected=${!s.editor_floor}>${this.t("editor_floor_auto")}</option>
            ${this._doc.floors.map((f) => html`<option value=${f.id} ?selected=${s.editor_floor === f.id}>${f.name}</option>`)}
          </select></label
        >
        ${this.entitySelect(this.t("hh_notes"), s.household?.notes ?? null, undefined, this.entityOptions((id) => /^(input_text|text|sensor)\./.test(id)), (v) => this.setHousehold({ notes: v === "none" ? null : v }))}
        <p class="fp3d-sub fp3d-wide">${this.t("hh_notes_hint")}</p>
      </div>
      <p class="fp3d-sub">${this.t("north_hint")}</p>
    </details>`;
  }

  /** The roof's basics – its kind, ridge, pitch and overhang – in the roof tool (sections and windows live there too). */
  private renderRoofBasics() {
    const s = this._doc.settings;
    const set = (patch: Partial<Building["settings"]>) => this.setSettings(patch);
    return html`<section>
      <h3>${this.t("roof_basics")}</h3>
      <div class="fp3d-form">
        <label class="fp3d-field fp3d-wide"
          >${this.t("roof")}
          <select
            @change=${(e: Event) => {
              const type = (e.target as HTMLSelectElement).value as RoofType;
              // roof sections: propose them from the rooms and open the roof tool
              if (type === "custom") {
                this.useRoofSections();
                this._tool = "roof";
              } else set({ roof: { ...s.roof, type } });
            }}
          >
            ${(["none", "flat", "gable", "custom"] as const).map((t) => html`<option value=${t} ?selected=${t === s.roof.type}>${this.t(`roof_${t}`)}</option>`)}
          </select></label
        >
        ${s.roof.type === "gable"
          ? html`<label class="fp3d-field fp3d-wide"
              >${this.t("roof_ridge")}
              <select @change=${(e: Event) => set({ roof: { ...s.roof, ridge: (e.target as HTMLSelectElement).value === "short" ? "short" : null } })}>
                <option value="long" ?selected=${s.roof.ridge !== "short"}>${this.t("roof_ridge_long")}</option>
                <option value="short" ?selected=${s.roof.ridge === "short"}>${this.t("roof_ridge_short")}</option>
              </select></label
            >`
          : nothing}
        ${s.roof.type === "gable" ? this.num(this.t("roof_pitch"), s.roof.pitch, (v) => set({ roof: { ...s.roof, pitch: Math.min(60, Math.max(5, v)) } }), 1, 5) : nothing}
        ${s.roof.type !== "none" ? this.len(this.t("roof_overhang"), s.roof.overhang, (v) => set({ roof: { ...s.roof, overhang: Math.min(2, Math.max(0, v)) } }), 0.05, 0) : nothing}
      </div>
    </section>`;
  }

  /** ⚙ Weather & warnings: the weather entity and its effects, the rain warning, warning names, outage, sun patches. */
  private renderWeatherSettings() {
    const s = this._doc.settings;
    const set = (patch: Partial<Building["settings"]>) => this.setSettings(patch);
    return html`<details class="fp3d-section">
      <summary>${this.t("settings_weather")}</summary>
      <div class="fp3d-form">
        ${this.hass
          ? this.entitySelect(this.t("weather_entity"), s.weather_entity ?? null, weatherEntity(this.hass, null), this.entityOptions((id) => id.startsWith("weather.")), (v) => set({ weather_entity: v }))
          : nothing}
        <div class="fp3d-sub fp3d-wide">${this.t("weather_effects")}</div>
        ${WEATHER_EFFECTS.map((effect) => {
          const current = s.weather_effects ?? DEFAULT_WEATHER_EFFECTS;
          return html`<label class="fp3d-check"
            ><input
              type="checkbox"
              .checked=${current.includes(effect)}
              @change=${(ev: Event) => {
                const checked = (ev.target as HTMLInputElement).checked;
                set({ weather_effects: checked ? [...new Set([...current, effect])] : current.filter((x) => x !== effect) });
              }}
            />
            ${this.t(`weather_effect_${effect}` as I18nKey)}</label
          >`;
        })}
        <label class="fp3d-check fp3d-wide"
          ><input type="checkbox" .checked=${s.rain_warning !== false} @change=${(ev: Event) => set({ rain_warning: (ev.target as HTMLInputElement).checked })} />
          ${this.t("rain_warning")}</label
        >
        ${this.hass
          ? html`${this.entitySelect(this.t("rain_entity"), s.rain_entity ?? null, undefined, this.entityOptions((id) => isRainSource(this.hass!, id)), (v) => set({ rain_entity: v === "none" ? null : v }))}
              <p class="fp3d-sub fp3d-wide">${this.t("rain_entity_hint")}</p>`
          : nothing}
        <label class="fp3d-check fp3d-wide" title=${this.t("alert_names_hint")}
          ><input type="checkbox" .checked=${s.alert_names !== false} @change=${(ev: Event) => set({ alert_names: (ev.target as HTMLInputElement).checked })} />
          ${this.t("alert_names")}</label
        >
        <label class="fp3d-check fp3d-wide" title=${this.t("alert_unavailable_hint")}
          ><input type="checkbox" .checked=${!!s.alert_unavailable} @change=${(ev: Event) => set({ alert_unavailable: (ev.target as HTMLInputElement).checked })} />
          ${this.t("alert_unavailable")}</label
        >
        ${this.hass
          ? html`${this.entitySelect(
                this.t("outage_entity"),
                s.outage_entity ?? null,
                undefined,
                this.entityOptions((id) => /^(binary_sensor|sensor|input_boolean|switch)\./.test(id)),
                (v) => set({ outage_entity: v === "none" ? null : v }),
              )}
              <p class="fp3d-sub fp3d-wide">${this.t("outage_entity_hint")}</p>`
          : nothing}
        <label class="fp3d-check fp3d-wide" title=${this.t("sun_patches_hint")}
          ><input type="checkbox" .checked=${s.sun_patches !== false} @change=${(ev: Event) => set({ sun_patches: (ev.target as HTMLInputElement).checked })} />
          ${this.t("sun_patches")}</label
        >
        <label class="fp3d-check fp3d-wide" title=${this.t("sun_shadow_hint")}
          ><input type="checkbox" .checked=${s.sun_shadow !== false} @change=${(ev: Event) => set({ sun_shadow: (ev.target as HTMLInputElement).checked })} />
          ${this.t("sun_shadow")}</label
        >
        <label class="fp3d-check fp3d-wide" title=${this.t("window_glow_hint")}
          ><input type="checkbox" .checked=${s.window_glow !== false} @change=${(ev: Event) => set({ window_glow: (ev.target as HTMLInputElement).checked })} />
          ${this.t("window_glow")}</label
        >
      </div>
      <p class="fp3d-sub">${this.t("weather_entity_hint")}</p>
    </details>`;
  }

  static styles = [
    tokens,
    controls,
    css`
      :host {
        display: block;
        height: 100%;
      }
      .fp3d-editor {
        position: relative;
        display: grid;
        grid-template-columns: 1fr var(--fp3d-side-w, 320px);
        height: 100%;
        min-height: 0;
      }
      .fp3d-editor:has(> .fp3d-side-strip) {
        grid-template-columns: 1fr 52px;
      }
      .fp3d-side-strip {
        padding: 10px 6px;
        gap: 8px;
        align-items: center;
      }
      .fp3d-strip-btn {
        width: 40px;
        height: 40px;
        border: 1px solid var(--fp3d-line);
        border-radius: 12px;
        background: var(--fp3d-chrome);
        color: var(--fp3d-text);
        font-size: 18px;
        cursor: pointer;
      }
      .fp3d-strip-hot {
        border-color: var(--fp3d-accent);
        color: var(--fp3d-accent);
      }
      .fp3d-side-overlay {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        width: min(var(--fp3d-side-w, 340px), 60%);
        /* open over the 3D pane: above the toolbar too, so its buttons never sit on the sidebar's */
        z-index: 30;
        box-shadow: -12px 0 32px rgba(0, 0, 0, 0.45);
      }
      .fp3d-pin-row {
        display: flex;
        gap: 8px;
        justify-content: flex-end;
      }
      .fp3d-3d-size {
        display: inline-flex;
        align-items: center;
        gap: 4px;
        color: var(--fp3d-muted);
        font-size: 12px;
      }
      .fp3d-3d-size input {
        width: 58px;
        padding: 4px 6px;
        font: inherit;
        color: var(--fp3d-text);
        background: var(--fp3d-chrome-solid);
        border: 1px solid var(--fp3d-line);
        border-radius: 8px;
      }
      .fp3d-3d-select {
        font: inherit;
        color: var(--fp3d-text);
        background: var(--fp3d-chrome-solid);
        border: 1px solid var(--fp3d-line);
        border-radius: 999px;
        padding: 4px 10px;
      }
      .fp3d-editor.fp3d-narrow {
        grid-template-columns: 1fr;
        grid-template-rows: minmax(360px, 62vh) auto;
        height: auto;
      }
      .fp3d-main {
        /* nothing of the plan column reaches over the sidebar (its menus still hang down) */
        overflow-x: clip;
        display: grid;
        grid-template-rows: auto 1fr;
        /* the column never grows with a wide toolbar (that would push the plan under the sidebar) */
        grid-template-columns: minmax(0, 1fr);
        min-height: 0;
        min-width: 0;
      }
      .fp3d-toolbar {
        position: relative;
        /* its menus open over the plan below */
        z-index: 20;
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
        align-items: center;
        padding: 10px 12px;
      }
      .fp3d-pick-tip {
        position: absolute;
        z-index: 5;
        transform: translateX(-50%);
        white-space: nowrap;
        padding: 8px 12px;
        border-radius: 10px;
        background: var(--fp3d-accent);
        color: var(--fp3d-accent-text);
        font-weight: 700;
        font-size: 13px;
        box-shadow: 0 6px 22px rgba(0, 0, 0, 0.45), 0 0 16px rgba(55, 224, 255, 0.45);
        cursor: pointer;
        animation: fp3d-tip-in 0.18s ease-out;
      }
      .fp3d-pick-tip::before {
        content: "";
        position: absolute;
        left: 50%;
        top: -6px;
        margin-left: -6px;
        border: 6px solid transparent;
        border-top: 0;
        border-bottom-color: var(--fp3d-accent);
      }
      @keyframes fp3d-tip-in {
        from {
          opacity: 0;
          transform: translate(-50%, -4px);
        }
      }
      /* the tool row scrolls sideways when it is wider than the plan (it must never push into the sidebar) */
      .fp3d-toolbar > .fp3d-seg {
        max-width: 100%;
        overflow-x: auto;
        scrollbar-width: none;
      }
      .fp3d-toolbar > .fp3d-seg::-webkit-scrollbar {
        display: none;
      }
      .fp3d-toolbar > .fp3d-seg > button {
        flex: none;
      }
      .fp3d-warn {
        color: var(--fp3d-warm);
        font-size: 12.5px;
      }
      .fp3d-picture-group {
        display: grid;
        gap: 6px;
        margin: 6px 0 10px;
        padding: 8px;
        border: 1px solid var(--fp3d-line);
        border-radius: 10px;
      }
      .fp3d-picture-group > select {
        min-width: 0;
      }
      .fp3d-picture-row {
        display: grid;
        grid-template-columns: 1fr auto auto;
        gap: 6px;
        align-items: center;
        padding: 6px;
        border-radius: 8px;
        background: color-mix(in srgb, var(--fp3d-line) 40%, transparent);
      }
      .fp3d-picture-row input[type="url"] {
        grid-column: 1 / -1;
        min-width: 0;
      }
      .fp3d-picture-row > .fp3d-sub,
      .fp3d-picture-row > .fp3d-picture-camera {
        grid-column: 1 / -1;
      }
      .fp3d-picture-row.fp3d-rule-hit {
        outline: 1px solid var(--fp3d-accent);
      }
      .fp3d-rule-now {
        grid-column: 1 / -1;
      }
      .fp3d-rule-hit {
        color: var(--fp3d-accent);
      }
      .fp3d-picture-reuse {
        grid-column: 1 / -1;
        display: flex;
        flex-wrap: wrap;
        gap: 4px;
      }
      .fp3d-picture-reuse-btn {
        padding: 2px;
        border: 1px solid var(--fp3d-line);
        border-radius: 6px;
        background: var(--fp3d-chrome-solid);
        cursor: pointer;
      }
      .fp3d-picture-reuse-btn img {
        display: block;
        height: 28px;
        max-width: 60px;
        object-fit: contain;
      }
      .fp3d-picture-reuse-btn:hover {
        border-color: var(--fp3d-accent);
      }
      .fp3d-picture-thumb {
        max-height: 60px;
        max-width: 100%;
        border-radius: 6px;
        justify-self: start;
      }
      .fp3d-picture-pick {
        justify-self: start;
      }
      .fp3d-parking-row {
        display: flex;
        gap: 6px;
        align-items: center;
        margin: 4px 0;
      }
      .fp3d-parking-row input,
      .fp3d-parking-row select {
        flex: 1;
        min-width: 0;
      }
      .fp3d-stage-pair {
        display: flex;
        min-height: 0;
        min-width: 0;
      }
      .fp3d-stage-pair > .fp3d-canvas-wrap {
        flex: 1 1 var(--fp3d-split, 55%);
        min-width: 0;
      }
      .fp3d-split > .fp3d-canvas-wrap {
        flex: 0 0 var(--fp3d-split, 55%);
      }
      .fp3d-split-handle {
        flex: 0 0 8px;
        cursor: col-resize;
        background: var(--fp3d-line);
        touch-action: none;
      }
      .fp3d-split-handle:hover {
        background: var(--fp3d-accent);
      }
      .fp3d-editor-3d {
        position: relative;
        overflow: hidden;
        flex: 1 1 0;
        min-width: 240px;
        min-height: 0;
        border-left: 1px solid var(--fp3d-line);
        container-type: size;
        container-name: fp3d;
      }
      .fp3d-editor-3d fp3d-view3d {
        display: block;
        height: 100%;
      }
      .fp3d-3d-walls {
        position: absolute;
        top: 10px;
        left: 10px;
        z-index: 3;
      }
      .fp3d-3d-bar {
        position: absolute;
        left: 50%;
        bottom: 12px;
        transform: translateX(-50%);
        z-index: 3;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        gap: 8px;
        max-width: calc(100% - 24px);
        padding: 6px 8px 6px 14px;
        border-radius: 999px;
        background: var(--fp3d-chrome);
        box-shadow: var(--fp3d-shadow);
        font-size: 13px;
      }
      .fp3d-danger-chip {
        color: var(--fp3d-danger, #ff6b7a);
      }
      .fp3d-narrow .fp3d-stage-pair.fp3d-split {
        flex-direction: column;
      }
      .fp3d-narrow .fp3d-split > .fp3d-canvas-wrap {
        flex: 1 1 auto;
      }
      .fp3d-narrow .fp3d-editor-3d {
        flex: 0 0 42%;
        min-width: 0;
        border-left: none;
        border-top: 1px solid var(--fp3d-line);
      }
      .fp3d-canvas-wrap {
        position: relative;
        min-height: 0;
        overflow: hidden;
        background: radial-gradient(ellipse at 50% 35%, var(--fp3d-bg2), var(--fp3d-bg) 75%);
      }
      svg.fp3d-plan {
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        touch-action: none;
        user-select: none;
        -webkit-user-select: none;
        cursor: default;
      }
      svg.fp3d-tool-rect,
      svg.fp3d-tool-polygon {
        cursor: crosshair;
      }
      .fp3d-grid-minor {
        stroke: rgba(55, 224, 255, 0.05);
        stroke-width: 1;
      }
      .fp3d-grid-major {
        stroke: rgba(91, 124, 255, 0.16);
        stroke-width: 1;
      }
      .fp3d-origin {
        fill: rgba(91, 124, 255, 0.5);
      }
      .fp3d-ghost {
        fill: none;
        stroke: rgba(138, 155, 184, 0.35);
        stroke-dasharray: 4 4;
      }
      .fp3d-wall {
        fill: #1b2a47;
      }
      .fp3d-wall-ext {
        fill: #22345a;
      }
      .fp3d-room {
        fill: rgba(55, 224, 255, 0.05);
        stroke: rgba(55, 224, 255, 0.75);
        stroke-width: 1.5;
        stroke-linejoin: round;
        cursor: pointer;
      }
      .fp3d-room:hover {
        fill: rgba(55, 224, 255, 0.09);
      }
      .fp3d-room-sel {
        fill: rgba(55, 224, 255, 0.14);
        stroke: var(--fp3d-accent);
        stroke-width: 2.5;
      }
      .fp3d-room-name {
        fill: var(--fp3d-text);
        font: 600 13px var(--fp3d-title-font);
        text-anchor: middle;
      }
      .fp3d-room-area {
        fill: var(--fp3d-muted);
        font: 500 11.5px var(--fp3d-font);
        text-anchor: middle;
        font-variant-numeric: tabular-nums;
      }
      .fp3d-dim {
        fill: var(--fp3d-accent);
        font: 600 11.5px var(--fp3d-font);
        text-anchor: middle;
        font-variant-numeric: tabular-nums;
        paint-order: stroke;
        stroke: var(--fp3d-bg);
        stroke-width: 3px;
      }
      .fp3d-vertex circle:not(.fp3d-hit) {
        fill: var(--fp3d-bg);
        stroke: var(--fp3d-accent);
        stroke-width: 2;
      }
      .fp3d-vertex-sel circle:not(.fp3d-hit) {
        fill: var(--fp3d-accent);
      }
      .fp3d-vertex,
      .fp3d-mid {
        cursor: grab;
      }
      .fp3d-hit {
        fill: transparent;
      }
      .fp3d-mid circle:not(.fp3d-hit) {
        fill: rgba(91, 124, 255, 0.35);
        stroke: var(--fp3d-soft);
      }
      .fp3d-mid path {
        stroke: var(--fp3d-text);
        stroke-width: 1.5;
      }
      .fp3d-draft {
        fill: rgba(255, 181, 71, 0.08);
        stroke: var(--fp3d-warm);
        stroke-width: 2;
        stroke-dasharray: 6 4;
      }
      polyline.fp3d-draft {
        fill: none;
      }
      .fp3d-draft-pt {
        fill: var(--fp3d-warm);
      }
      .fp3d-draft-first {
        fill: transparent;
        stroke: var(--fp3d-warm);
        stroke-width: 2;
      }
      .fp3d-cursor {
        fill: var(--fp3d-warm);
      }
      .fp3d-guide {
        stroke: rgba(255, 95, 210, 0.55);
        stroke-dasharray: 3 5;
      }
      .fp3d-snap {
        fill: none;
        stroke: #ff5fd2;
        stroke-width: 2;
      }
      .fp3d-hint {
        position: absolute;
        left: 12px;
        right: 12px;
        bottom: 8px;
        margin: 0;
        font-size: 12px;
        color: var(--fp3d-muted);
        pointer-events: none;
      }
      .fp3d-side-grip {
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        width: 8px;
        cursor: col-resize;
        touch-action: none;
        z-index: 2;
      }
      .fp3d-side-grip:hover {
        background: linear-gradient(90deg, rgba(55, 224, 255, 0.35), transparent);
      }
      .fp3d-side {
        border-left: 1px solid var(--fp3d-line);
        background: var(--fp3d-chrome-solid);
        overflow-y: auto;
        padding: 12px 14px 24px;
        display: flex;
        flex-direction: column;
        gap: 18px;
        min-height: 0;
      }
      /* the grip's containing block; the overlay keeps its absolute position (#658: "position: relative" on
         every side bar made the unpinned bar a third grid cell, which pushed the plan and the 3D pane aside) */
      .fp3d-side:not(.fp3d-side-overlay) {
        position: relative;
        z-index: 7;
      }
      .fp3d-narrow .fp3d-side {
        border-left: none;
        border-top: 1px solid var(--fp3d-line);
      }
      h3,
      summary {
        margin: 0 0 8px;
        font-size: 11.5px;
        text-transform: uppercase;
        letter-spacing: 0.06em;
        color: var(--fp3d-muted);
        font-weight: 600;
      }
      summary {
        cursor: pointer;
        margin: 0;
      }
      details[open] > summary {
        margin-bottom: 8px;
      }
      .fp3d-floor-list,
      .fp3d-actions {
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
      }
      .fp3d-floor-list .fp3d-chip {
        box-shadow: none;
        border: 1px solid var(--fp3d-line);
      }
      .fp3d-form {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 10px;
        margin-top: 10px;
      }
      .fp3d-wide {
        grid-column: 1 / -1;
      }
      .fp3d-room-list {
        display: grid;
        gap: 2px;
      }
      .fp3d-row {
        display: flex;
        justify-content: space-between;
        gap: 8px;
        font: inherit;
        color: var(--fp3d-text);
        background: none;
        border: none;
        border-bottom: 1px solid var(--fp3d-line);
        padding: 9px 2px;
        cursor: pointer;
        text-align: left;
      }
      .fp3d-row:hover {
        color: var(--fp3d-accent);
      }
      .fp3d-check {
        display: flex;
        align-items: center;
        gap: 8px;
        font-size: 13px;
        color: var(--fp3d-muted);
      }
      .fp3d-check.fp3d-indent {
        padding-left: 22px;
      }
      .fp3d-check input {
        accent-color: var(--fp3d-accent);
      }
      .fp3d-meter rect {
        fill: #2a2a10;
        stroke: #ffc633;
        stroke-width: 1.5;
      }
      .fp3d-meter path {
        fill: #ffc633;
      }
      .fp3d-packages {
        display: grid;
        gap: 6px;
        margin-top: 10px;
      }
      .fp3d-packages .fp3d-btn {
        display: grid;
        text-align: left;
        gap: 2px;
      }
      .fp3d-packages .fp3d-btn span {
        font-weight: 400;
        font-size: 12px;
        color: var(--fp3d-muted);
      }
      .fp3d-arrows {
        display: grid;
        grid-template-columns: repeat(3, 52px);
        grid-template-areas: ". up ." "left . right" ". down .";
        gap: 6px;
        justify-content: center;
      }
      .fp3d-arrows .fp3d-btn {
        font-size: 20px;
        padding: 6px 0;
      }
      .fp3d-arrow-up {
        grid-area: up;
      }
      .fp3d-arrow-left {
        grid-area: left;
      }
      .fp3d-arrow-right {
        grid-area: right;
      }
      .fp3d-arrow-down {
        grid-area: down;
      }
      .fp3d-measure-list {
        margin: 8px 0;
        padding-left: 22px;
        color: var(--fp3d-muted);
        font-size: 13px;
        font-variant-numeric: tabular-nums;
      }
      .fp3d-library {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(118px, 1fr));
        gap: 6px;
        margin-top: 8px;
      }
      .fp3d-library .fp3d-btn {
        font-weight: 500;
        font-size: 13px;
      }
      /* the background picture while it is edited: a dashed frame and a corner handle */
      .fp3d-bg-frame {
        fill: none;
        stroke: var(--fp3d-accent);
        stroke-width: 1.5;
        stroke-dasharray: 6 4;
        pointer-events: none;
      }
      .fp3d-bg-handle {
        fill: var(--fp3d-accent);
        stroke: #041018;
        stroke-width: 2;
        cursor: nwse-resize;
      }
      .fp3d-furn-body {
        fill: rgba(91, 124, 255, 0.1);
        stroke: rgba(91, 124, 255, 0.55);
        stroke-width: 1.2;
        vector-effect: non-scaling-stroke;
        cursor: grab;
      }
      .fp3d-furn-sym * {
        fill: none;
        stroke: rgba(150, 175, 255, 0.55);
        stroke-width: 1;
        vector-effect: non-scaling-stroke;
        pointer-events: none;
      }
      .fp3d-furn-sym .fp3d-sym-fill {
        fill: rgba(91, 124, 255, 0.28);
      }
      .fp3d-furn-sym .fp3d-sym-strong {
        stroke: var(--fp3d-accent);
        stroke-width: 2;
      }
      .fp3d-out polygon {
        fill: rgba(91, 124, 255, 0.06);
        stroke: rgba(91, 124, 255, 0.4);
        stroke-width: 1;
        stroke-dasharray: 4 3;
        cursor: grab;
      }
      .fp3d-out-lawn polygon,
      .fp3d-out-bed polygon,
      .fp3d-out-wild polygon,
      .fp3d-out-hedge polygon {
        fill: rgba(61, 224, 160, 0.1);
        stroke: rgba(61, 224, 160, 0.5);
      }
      .fp3d-out-pool polygon {
        fill: rgba(55, 224, 255, 0.18);
        stroke: var(--fp3d-accent);
      }
      .fp3d-out-terrace polygon {
        fill: rgba(150, 130, 255, 0.12);
      }
      .fp3d-free-wall {
        cursor: grab;
      }
      .fp3d-vertex-no {
        fill: var(--fp3d-accent);
        font-size: 11px;
        font-weight: 700;
        pointer-events: none;
      }
      /* the opt-in reports: the exact JSON they send */
      .fp3d-wv.fp3d-diag {
        width: min(640px, 100%);
        grid-template-rows: auto minmax(0, 1fr) auto auto;
      }
      .fp3d-diag-json {
        margin: 0;
        overflow: auto;
        padding: 10px;
        border-radius: 10px;
        background: rgba(0, 0, 0, 0.3);
        font-size: 12px;
        line-height: 1.4;
        white-space: pre;
      }
      /* the wall view: a room's wall from the front, furniture on it to slide along and up */
      .fp3d-wv-veil {
        position: fixed;
        inset: 0;
        z-index: 60;
        display: grid;
        place-items: center;
        padding: 16px;
        background: rgba(3, 6, 12, 0.6);
      }
      .fp3d-wv {
        width: min(1100px, 100%);
        max-height: calc(100vh - 32px);
        display: grid;
        grid-template-rows: auto minmax(0, 1fr) auto;
        gap: 10px;
        padding: 14px 16px;
        border-radius: 16px;
        background: var(--fp3d-chrome-solid);
        border: 1px solid var(--fp3d-line);
        box-shadow: var(--fp3d-shadow);
        outline: none;
      }
      .fp3d-wv-head,
      .fp3d-wv-foot {
        display: flex;
        align-items: center;
        gap: 10px;
        flex-wrap: wrap;
      }
      .fp3d-wv-foot .fp3d-field {
        width: 170px;
      }
      .fp3d-wv-grow {
        flex: 1;
      }
      .fp3d-pipe-end circle:not(.fp3d-hit) {
        fill: none;
        stroke: var(--fp3d-warm);
        stroke-width: 2;
        stroke-dasharray: 3 2;
      }
      .fp3d-pipe-end {
        cursor: pointer;
      }
      .fp3d-pool-joint {
        fill: #8a929c;
        stroke: var(--fp3d-bg, #0b1220);
        stroke-width: 1.5;
        pointer-events: none;
      }
      .fp3d-wv-node circle {
        fill: rgba(55, 224, 255, 0.12);
        stroke: var(--fp3d-accent);
        stroke-width: 0.012;
        stroke-dasharray: 0.03 0.02;
      }
      .fp3d-wv-node text {
        fill: var(--fp3d-accent);
        font-size: 0.055px;
        font-weight: 700;
        text-anchor: middle;
      }
      .fp3d-wv-hole-mark circle {
        fill: #0b1220;
        stroke: var(--fp3d-warm);
        stroke-dasharray: none;
        stroke-width: 0.02;
      }
      .fp3d-wv-hole-mark text {
        fill: var(--fp3d-warm);
      }
      .fp3d-pc-veil {
        z-index: 70;
      }
      .fp3d-pc {
        width: min(760px, 100%);
        max-height: calc(100vh - 32px);
        overflow: auto;
        display: grid;
        gap: 12px;
        padding: 14px 16px;
        border-radius: 16px;
        background: var(--fp3d-chrome-solid);
        border: 1px solid var(--fp3d-line);
        box-shadow: var(--fp3d-shadow);
        outline: none;
      }
      .fp3d-pc-title {
        font-size: 17px;
      }
      .fp3d-pc-name {
        font: inherit;
        font-size: 17px;
        font-weight: 700;
        padding: 4px 8px;
        border-radius: 8px;
        border: 1px solid var(--fp3d-line);
        background: transparent;
        color: inherit;
        min-width: 0;
        flex: 1;
        max-width: 320px;
      }
      .fp3d-pc-body {
        display: grid;
        grid-template-columns: 220px minmax(0, 1fr);
        gap: 14px;
        align-items: start;
      }
      @media (max-width: 640px) {
        .fp3d-pc-body {
          grid-template-columns: 1fr;
        }
      }
      .fp3d-pc-draw {
        width: 100%;
        border-radius: 12px;
        background: rgba(120, 170, 255, 0.05);
        border: 1px solid var(--fp3d-line);
      }
      .fp3d-pc-body-shape {
        fill: #2a313a;
        stroke: #8a929c;
        stroke-width: 2;
      }
      .fp3d-pc-fan {
        fill: none;
        stroke: #8a929c;
        stroke-width: 2;
        stroke-dasharray: 6 4;
      }
      .fp3d-pc-wall {
        fill: rgba(120, 170, 255, 0.18);
        stroke: var(--fp3d-line);
      }
      .fp3d-pc-side {
        fill: var(--fp3d-muted);
        font-size: 11px;
        text-anchor: middle;
      }
      .fp3d-pc-stub line {
        stroke: #8a929c;
        stroke-width: 10;
        stroke-dasharray: 6 4;
      }
      .fp3d-pc-stub circle {
        fill: #0b1220;
        stroke: var(--fp3d-warm);
        stroke-width: 2;
        stroke-dasharray: 3 2;
      }
      .fp3d-pc-stub {
        cursor: pointer;
      }
      .fp3d-pc-stub.fp3d-on line {
        stroke: #8a929c;
        stroke-dasharray: none;
      }
      .fp3d-pc-stub.fp3d-on circle {
        fill: var(--fp3d-accent);
        stroke: var(--fp3d-accent);
        stroke-dasharray: none;
      }
      .fp3d-pc-label {
        fill: var(--fp3d-text, #dfe7f5);
        font-size: 11px;
        font-weight: 700;
        text-anchor: middle;
      }
      .fp3d-pc-rows {
        display: grid;
        gap: 8px;
      }
      .fp3d-pc-row {
        display: grid;
        grid-template-columns: 110px minmax(0, 1fr);
        gap: 8px;
        padding: 8px 10px;
        border-radius: 10px;
        border: 1px dashed var(--fp3d-line);
      }
      .fp3d-pc-row.fp3d-on {
        border-style: solid;
        border-color: rgba(55, 224, 255, 0.45);
      }
      .fp3d-pc-conns,
      .fp3d-pc-join {
        display: grid;
        gap: 6px;
      }
      .fp3d-pc-conn {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 6px;
      }
      .fp3d-pc-tools {
        display: inline-flex;
        gap: 6px;
        margin-left: auto;
      }
      .fp3d-pc-chain {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 6px;
      }
      .fp3d-pc-arrow {
        color: var(--fp3d-accent);
        font-weight: 800;
      }
      .fp3d-pc-tile {
        font: inherit;
        font-size: 13px;
        padding: 6px 10px;
        border-radius: 10px;
        border: 1px solid var(--fp3d-line);
        background: rgba(255, 255, 255, 0.05);
        color: var(--fp3d-text);
      }
      button.fp3d-pc-tile {
        cursor: pointer;
      }
      .fp3d-pc-tile i {
        font-style: normal;
        opacity: 0.6;
        margin-left: 4px;
      }
      .fp3d-pc-start {
        border-color: var(--fp3d-accent);
        color: var(--fp3d-accent);
        font-weight: 700;
      }
      .fp3d-pc-stop {
        border-color: #2f8cff;
      }
      .fp3d-pc-end {
        background: var(--fp3d-accent);
        border-color: var(--fp3d-accent);
        color: var(--fp3d-accent-text);
        font-weight: 700;
      }
      .fp3d-pc-next {
        border-style: dashed;
        color: var(--fp3d-muted);
      }
      .fp3d-pc-steps {
        display: grid;
        gap: 6px;
        padding-top: 4px;
        border-top: 1px solid var(--fp3d-line);
      }
      .fp3d-pc-target {
        border-color: rgba(55, 224, 255, 0.45);
      }
      .fp3d-pc-join {
        padding: 10px;
        border-radius: 10px;
        background: rgba(120, 170, 255, 0.05);
      }
      .fp3d-pc-step {
        font-size: 11px;
        font-weight: 700;
        letter-spacing: 0.06em;
        text-transform: uppercase;
        color: var(--fp3d-muted);
        margin-top: 4px;
      }
      .fp3d-pc-group {
        display: grid;
        gap: 4px;
      }
      .fp3d-pc-glabel {
        font-size: 12px;
        color: var(--fp3d-muted);
      }
      .fp3d-pc-picks {
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
      }
      .fp3d-pc-pick {
        font: inherit;
        font-size: 13px;
        padding: 6px 10px;
        border-radius: 10px;
        border: 1px solid var(--fp3d-line);
        background: rgba(255, 255, 255, 0.04);
        color: var(--fp3d-text);
        cursor: pointer;
      }
      .fp3d-pc-pick:hover {
        border-color: var(--fp3d-accent);
      }
      .fp3d-pc-pick.fp3d-on {
        background: var(--fp3d-accent);
        border-color: var(--fp3d-accent);
        color: var(--fp3d-accent-text);
        font-weight: 700;
      }
      .fp3d-pc-hole {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 6px;
        font-size: 13px;
      }
      .fp3d-pc-hole > span {
        min-width: 120px;
      }
      .fp3d-pc-via {
        border-style: dashed;
        color: var(--fp3d-muted);
      }
      .fp3d-pc-open {
        border-style: dashed;
      }
      .fp3d-joint-name {
        flex: 1;
        min-width: 90px;
        font: inherit;
        font-size: 13px;
        padding: 3px 6px;
        border-radius: 6px;
        border: 1px solid var(--fp3d-line);
        background: transparent;
        color: inherit;
      }
      .fp3d-ports {
        display: inline-flex;
        flex-wrap: wrap;
        gap: 3px;
      }
      .fp3d-ports i {
        font-style: normal;
        font-size: 10px;
        padding: 1px 5px;
        border-radius: 6px;
        border: 1px dashed var(--fp3d-line);
        color: var(--fp3d-muted);
      }
      .fp3d-ports i.fp3d-on {
        border-style: solid;
        border-color: var(--fp3d-accent);
        color: var(--fp3d-accent);
      }
      .fp3d-chips {
        display: flex;
        flex-wrap: wrap;
        gap: 4px;
        margin-top: 4px;
      }
      .fp3d-chip {
        font: inherit;
        font-size: 12px;
        padding: 3px 8px;
        border-radius: 10px;
        border: 1px solid var(--fp3d-accent);
        background: transparent;
        color: var(--fp3d-accent);
        cursor: pointer;
      }
      .fp3d-wv-node {
        pointer-events: none;
      }
      .fp3d-wv-joint {
        pointer-events: auto;
        cursor: move;
      }
      .fp3d-wv-run line {
        stroke: #8a929c;
        stroke-width: 0.05;
        stroke-linecap: round;
        cursor: pointer;
      }
      .fp3d-wv-run line.fp3d-wv-under {
        stroke: #5a616b;
        stroke-dasharray: 0.06 0.05;
      }
      .fp3d-wv-run-sel line {
        stroke: var(--fp3d-accent);
      }
      .fp3d-wv-runpt {
        fill: var(--fp3d-bg, #0b1220);
        stroke: var(--fp3d-accent);
        stroke-width: 0.012;
        cursor: move;
      }
      .fp3d-wv-runpt.fp3d-on {
        fill: var(--fp3d-accent);
      }
      .fp3d-wv-fitmode .fp3d-wv-run line {
        cursor: copy;
        stroke-width: 0.05 !important;
      }
      .fp3d-wv-fitmode .fp3d-wv-run line:hover {
        stroke: #ffb547 !important;
      }
      .fp3d-tech-step {
        border: 1px solid #ffb547;
        background: rgba(255, 181, 71, 0.1);
        border-radius: 10px;
        padding: 8px 10px;
        font-size: 12.5px;
        line-height: 1.35;
      }
      .fp3d-tech-step b {
        display: block;
        color: #ffb547;
        font-size: 11px;
        letter-spacing: 0.06em;
        text-transform: uppercase;
        margin-bottom: 2px;
      }
      .fp3d-tech-step.fp3d-done {
        border-color: #4dff9a;
        background: rgba(77, 255, 154, 0.08);
      }
      .fp3d-tech-step.fp3d-done b {
        color: #4dff9a;
      }
      .fp3d-wv-dry line {
        stroke-dasharray: 0.04 0.03;
      }
      .fp3d-wv-erase {
        cursor: not-allowed;
      }
      .fp3d-wv-erase .fp3d-wv-run:hover line,
      .fp3d-wv-erase .fp3d-wv-valve:hover circle,
      .fp3d-wv-erase .fp3d-wv-sight:hover,
      .fp3d-wv-erase .fp3d-wv-joint:hover circle {
        stroke: #ff4d6d;
      }
      .fp3d-tech-step.fp3d-tech-erasing {
        border-color: #ff4d6d;
        background: rgba(255, 77, 109, 0.12);
      }
      .fp3d-tech-undo {
        justify-self: start;
      }
      .fp3d-tech-kit .fp3d-tech-pen {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
      }
      .fp3d-tech-kit .fp3d-tech-pen button {
        display: grid;
        justify-items: center;
        gap: 2px;
        padding: 6px 2px;
        font-size: 0.82em;
        white-space: nowrap;
      }
      .fp3d-tech-feed {
        display: flex;
        gap: 8px;
        align-items: center;
      }
      .fp3d-tech-feed i {
        font-style: normal;
      }
      .fp3d-tech-feed small {
        margin-left: auto;
        color: #4dff9a;
      }
      .fp3d-tech-feed.fp3d-on {
        opacity: 0.75;
      }
      .fp3d-tech-ok {
        color: #4dff9a;
        font-weight: 600;
      }
      .fp3d-tech-issues {
        color: #ffb547;
        font-size: 12.5px;
      }
      .fp3d-wv-end {
        fill: none;
        stroke: var(--fp3d-warm);
        stroke-width: 0.012;
        stroke-dasharray: 0.02 0.015;
      }
      .fp3d-wv-valve circle {
        fill: #3c4148;
        stroke: #2f8cff;
        stroke-width: 0.012;
        cursor: grab;
      }
      .fp3d-wv-valve line {
        stroke: #2f8cff;
        stroke-width: 0.025;
        stroke-linecap: round;
        pointer-events: none;
      }
      .fp3d-wv-shut circle {
        stroke: #ff5a6e;
      }
      .fp3d-wv-sight {
        fill: rgba(140, 220, 255, 0.55);
        stroke: #4a4f56;
        stroke-width: 0.012;
        cursor: pointer;
      }
      .fp3d-wv-stroke {
        stroke-dasharray: 0.08 0.05;
        opacity: 0.55;
      }
      .fp3d-tech-ask {
        display: grid;
        gap: 4px;
        padding: 8px;
        margin-bottom: 6px;
        border: 1px solid var(--fp3d-accent);
        border-radius: 8px;
        background: rgba(91, 124, 255, 0.08);
      }
      .fp3d-tech-ask b {
        font-size: 12.5px;
      }
      .fp3d-wv-draft {
        fill: none;
        stroke: var(--fp3d-accent);
        stroke-width: 0.05;
        stroke-linecap: round;
        stroke-linejoin: round;
        opacity: 0.8;
        pointer-events: none;
      }
      .fp3d-wv-rubber {
        stroke-dasharray: 0.05 0.04;
        opacity: 0.5;
      }
      .fp3d-wv-drawing {
        cursor: crosshair;
      }
      .fp3d-wv-drawing .fp3d-wv-item {
        pointer-events: none;
      }
      .fp3d-wv-svg {
        width: 100%;
        height: min(62vh, 560px);
        touch-action: none;
        user-select: none;
        font-family: var(--fp3d-font);
      }
      .fp3d-wv-wall {
        fill: rgba(120, 170, 255, 0.06);
        stroke: var(--fp3d-soft);
        stroke-width: 0.015;
      }
      .fp3d-wv-grid {
        stroke: var(--fp3d-line);
        stroke-width: 0.006;
      }
      .fp3d-wv-scale {
        fill: var(--fp3d-muted);
        font-size: 0.09px;
        text-anchor: end;
      }
      .fp3d-wv-floor {
        stroke: var(--fp3d-accent);
        stroke-width: 0.02;
      }
      .fp3d-wv-hole {
        fill: var(--fp3d-bg);
        stroke: var(--fp3d-muted);
        stroke-width: 0.01;
        stroke-dasharray: 0.04 0.03;
      }
      .fp3d-wv-window {
        fill: rgba(55, 224, 255, 0.12);
      }
      .fp3d-wv-item {
        cursor: grab;
      }
      .fp3d-wv-item rect {
        fill: rgba(91, 124, 255, 0.28);
        stroke: var(--fp3d-soft);
        stroke-width: 0.012;
      }
      .fp3d-wv-item text {
        fill: var(--fp3d-text);
        text-anchor: middle;
        pointer-events: none;
      }
      .fp3d-wv-open {
        width: 100%;
        justify-content: center;
        margin: 2px 0 10px;
      }
      .fp3d-wv-turn {
        display: inline-flex;
        align-items: end;
        gap: 6px;
      }
      .fp3d-wv-turn .fp3d-field {
        width: 76px;
      }
      .fp3d-wv-lift {
        position: absolute;
        left: 0;
        top: 0;
        z-index: 2;
        margin: -46px 0 0 -22px;
        display: grid;
        justify-items: center;
        gap: 2px;
        cursor: ns-resize;
        touch-action: none;
        user-select: none;
      }
      .fp3d-wv-lift[hidden] {
        display: none;
      }
      .fp3d-wv-lift span {
        width: 44px;
        height: 44px;
        border-radius: 50%;
        display: grid;
        place-items: center;
        background: var(--fp3d-accent);
        color: var(--fp3d-accent-text);
        font-size: 24px;
        font-weight: 800;
        box-shadow: 0 0 18px rgba(55, 224, 255, 0.55);
      }
      .fp3d-wv-lift b {
        font-size: 12px;
        color: var(--fp3d-warm);
        background: rgba(7, 11, 20, 0.85);
        padding: 1px 6px;
        border-radius: 8px;
      }
      .fp3d-wv-3d {
        display: block;
        width: 100%;
        height: min(62vh, 560px);
        border-radius: 12px;
        overflow: hidden;
      }
      .fp3d-wv-pic rect {
        fill: transparent;
        stroke: transparent;
      }
      .fp3d-wv-pic:hover rect {
        stroke: var(--fp3d-soft);
      }
      .fp3d-wv-body {
        display: flex;
        gap: 8px;
        min-height: 0;
      }
      .fp3d-wv-kit {
        flex: none;
        width: 236px;
        display: flex;
        flex-direction: column;
        gap: 6px;
        overflow-y: auto;
        max-height: min(62vh, 560px);
      }
      .fp3d-wv-kit h4 {
        margin: 4px 0 0;
        font-size: 11px;
        letter-spacing: 0.08em;
        text-transform: uppercase;
        color: var(--fp3d-muted);
      }
      .fp3d-wv-kit .fp3d-btn {
        justify-content: flex-start;
        text-align: left;
      }
      .fp3d-wv-cats {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 4px;
      }
      .fp3d-wv-cat {
        display: flex;
        align-items: center;
        gap: 6px;
        padding: 6px 8px;
        border-radius: 10px;
        border: 1px solid var(--fp3d-line, rgba(91, 124, 255, 0.25));
        background: rgba(255, 255, 255, 0.03);
        color: var(--fp3d-text, #d6ecff);
        font: inherit;
        font-size: 12px;
        text-align: left;
        cursor: pointer;
        line-height: 1.15;
      }
      .fp3d-wv-cat span {
        font-size: 15px;
        width: 18px;
        text-align: center;
        flex: none;
      }
      .fp3d-wv-cat.fp3d-on {
        border-color: var(--fp3d-accent);
        background: rgba(55, 224, 255, 0.14);
        color: #fff;
      }
      .fp3d-wv-tiles {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 6px;
      }
      .fp3d-wv-tile {
        display: grid;
        grid-template-rows: auto auto auto;
        justify-items: center;
        gap: 2px;
        padding: 6px 4px;
        border-radius: 12px;
        border: 1px solid var(--fp3d-line, rgba(91, 124, 255, 0.25));
        background: rgba(255, 255, 255, 0.03);
        color: var(--fp3d-text, #d6ecff);
        font: inherit;
        cursor: pointer;
        text-align: center;
      }
      .fp3d-wv-tile:hover {
        border-color: var(--fp3d-accent);
        background: rgba(55, 224, 255, 0.08);
      }
      .fp3d-wv-tile-pic {
        width: 72px;
        height: 60px;
        display: grid;
        place-items: center;
      }
      .fp3d-wv-tile-pic img {
        max-width: 72px;
        max-height: 60px;
      }
      .fp3d-wv-tile-pic i {
        width: 36px;
        height: 28px;
        border-radius: 6px;
        border: 1px dashed var(--fp3d-muted);
        opacity: 0.4;
      }
      .fp3d-wv-tile-name {
        font-size: 11.5px;
        font-weight: 600;
        line-height: 1.15;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }
      .fp3d-wv-tile small {
        font-size: 10.5px;
        color: var(--fp3d-muted);
      }
      .fp3d-wv-tile small.fp3d-wv-fit {
        color: var(--fp3d-accent);
      }
      .fp3d-wv-kit .fp3d-search {
        width: 100%;
        box-sizing: border-box;
      }
      .fp3d-wv-kit .fp3d-wv-pick {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 6px;
        height: auto;
        min-height: 32px;
        line-height: 1.2;
        font-size: 12.5px;
      }
      .fp3d-wv-pick small {
        color: var(--fp3d-muted);
        white-space: nowrap;
      }
      .fp3d-wv-gapnote {
        color: var(--fp3d-accent);
      }
      .fp3d-wv-setframe rect {
        fill: none;
        stroke: var(--fp3d-accent);
        stroke-width: 0.012;
        stroke-dasharray: 0.05 0.03;
        pointer-events: none;
      }
      .fp3d-wv-setblock rect {
        stroke: #ffb547;
      }
      .fp3d-wv-setframe text {
        fill: var(--fp3d-accent);
        pointer-events: none;
      }
      .fp3d-wv-setblock text {
        fill: #ffb547;
      }
      .fp3d-wv-gap rect {
        fill: rgba(55, 224, 255, 0.1);
        stroke: var(--fp3d-accent);
        stroke-width: 0.01;
        stroke-dasharray: 0.04 0.03;
        pointer-events: none;
      }
      .fp3d-wv-gap text {
        fill: var(--fp3d-accent);
        text-anchor: middle;
        pointer-events: none;
      }
      .fp3d-wv-handle {
        fill: var(--fp3d-accent);
        stroke: #06101c;
        stroke-width: 0.006;
        cursor: ew-resize;
      }
      .fp3d-wv-handle.fp3d-wv-ns {
        cursor: ns-resize;
      }
      .fp3d-wv-size {
        fill: var(--fp3d-accent);
        text-anchor: middle;
        font-weight: 600;
        pointer-events: none;
      }
      .fp3d-wv-fixnote {
        color: #ffb547;
        font-size: 12.5px;
      }
      .fp3d-pool-depth {
        display: inline-flex;
        align-items: center;
        gap: 4px;
        font-size: 12px;
        color: var(--fp3d-muted);
      }
      .fp3d-pool-depth input {
        width: 58px;
        padding: 3px 5px;
      }
      .fp3d-wv-marquee {
        fill: rgba(55, 224, 255, 0.08);
        stroke: var(--fp3d-accent);
        stroke-width: 0.008;
        stroke-dasharray: 0.03 0.02;
        pointer-events: none;
      }
      @media (max-width: 700px) {
        .fp3d-wv-body {
          flex-direction: column;
        }
        .fp3d-wv-kit {
          width: auto;
          flex-direction: row;
          flex-wrap: wrap;
          max-height: none;
        }
      }
      .fp3d-wv-stage {
        flex: 1;
        min-width: 0;
        position: relative;
        min-height: 0;
        padding: 0 60px;
      }
      /* a group with a menu lets it hang out below (the others scroll sideways on a narrow screen) */
      .fp3d-seg.fp3d-seg-menu {
        overflow: visible;
        /* too narrow for a group: its buttons wrap (they never reach over the sidebar) */
        flex-wrap: wrap;
        max-width: 100%;
      }
      .fp3d-seg > button.fp3d-undo {
        font-size: 20px;
        line-height: 1;
        padding-inline: 12px;
      }
      .fp3d-menu-wrap {
        position: relative;
        display: inline-flex;
      }
      .fp3d-voice-list {
        margin: 0 0 8px;
        padding-left: 18px;
        font-size: 13px;
        color: var(--fp3d-muted);
        columns: 2;
        column-gap: 18px;
      }
      .fp3d-voice-list li {
        break-inside: avoid;
        margin: 2px 0;
      }
      .fp3d-seg-settings {
        margin-left: auto;
      }
      .fp3d-menu-right {
        right: 0;
        left: auto;
      }
      .fp3d-narrow .fp3d-settings-word {
        display: none;
      }
      .fp3d-dialog-veil {
        position: fixed;
        inset: 0;
        z-index: 30;
        display: grid;
        place-items: center;
        padding: 16px;
        background: rgba(2, 6, 14, 0.55);
      }
      .fp3d-dialog {
        width: min(640px, 100%);
        max-height: calc(100% - 16px);
        overflow: auto;
        padding: 14px 18px 18px;
        border-radius: 18px;
        border: 1px solid var(--fp3d-accent, #22d3ee);
        background: var(--fp3d-panel, #0d1628);
        box-shadow: 0 0 40px rgba(34, 211, 238, 0.2);
        outline: none;
      }
      .fp3d-dialog-head {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
        margin-bottom: 6px;
      }
      .fp3d-dialog-head h3 {
        margin: 0;
      }
      .fp3d-dialog details.fp3d-section > summary {
        display: none;
      }
      .fp3d-dialog details.fp3d-section {
        border: 0;
        padding: 0;
        margin: 0;
      }
      .fp3d-narrow .fp3d-dialog-veil {
        padding: 0;
      }
      .fp3d-narrow .fp3d-dialog {
        width: 100%;
        max-height: 100%;
        border-radius: 0;
      }
      .fp3d-menu-veil {
        position: fixed;
        inset: 0;
        z-index: 29;
      }
      .fp3d-menu {
        position: absolute;
        top: calc(100% + 6px);
        left: 0;
        z-index: 30;
        min-width: 230px;
        max-height: 70vh;
        overflow-y: auto;
        display: flex;
        flex-direction: column;
        gap: 2px;
        padding: 6px;
        border-radius: 14px;
        background: var(--fp3d-chrome-solid, #0d1628);
        box-shadow: var(--fp3d-shadow);
        border: 1px solid var(--fp3d-line, rgba(120, 190, 255, 0.22));
      }
      .fp3d-menu-right {
        left: auto;
        right: 0;
      }
      .fp3d-seg .fp3d-menu .fp3d-menu-item {
        display: flex;
        align-items: center;
        gap: 8px;
        width: 100%;
        text-align: left;
        font-size: 14px;
        font-weight: 600;
        padding: 9px 12px;
        border-radius: 10px;
        color: var(--fp3d-text);
        background: none;
      }
      .fp3d-seg .fp3d-menu .fp3d-menu-item:hover {
        background: rgba(120, 190, 255, 0.12);
      }
      .fp3d-seg .fp3d-menu .fp3d-menu-on {
        color: var(--fp3d-accent);
        font-weight: 700;
      }
      .fp3d-menu-icon {
        width: 22px;
        text-align: center;
      }
      .fp3d-menu-more {
        margin-left: auto;
        color: var(--fp3d-muted);
      }
      .fp3d-caret {
        font-size: 0.8em;
        opacity: 0.7;
      }
      .fp3d-menu-label {
        color: var(--fp3d-muted);
        font-weight: 500;
      }
      .fp3d-menu-sep {
        height: 1px;
        margin: 4px 6px;
        background: var(--fp3d-line, rgba(120, 190, 255, 0.22));
      }
      .fp3d-menu-sub {
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
        padding: 2px 8px 8px 16px;
      }
      .fp3d-seg .fp3d-menu-sub .fp3d-chip {
        min-height: 30px;
        padding: 5px 11px;
        font-size: 0.92em;
      }
      .fp3d-seg .fp3d-menu-sub .fp3d-menu-on {
        background: var(--fp3d-accent);
        color: var(--fp3d-accent-text);
      }
      .fp3d-news-veil {
        position: fixed;
        inset: 0;
        z-index: 40;
        display: grid;
        place-items: center;
        padding: 16px;
        background: rgba(2, 6, 14, 0.55);
      }
      .fp3d-news {
        max-width: 420px;
        padding: 22px 22px 18px;
        border-radius: 18px;
        border: 1px solid var(--fp3d-accent, #22d3ee);
        background: var(--fp3d-panel, #0d1628);
        box-shadow: 0 0 40px rgba(34, 211, 238, 0.25);
        text-align: center;
      }
      .fp3d-news-pic {
        font-size: 34px;
        letter-spacing: 6px;
      }
      .fp3d-news h3 {
        margin: 10px 0 6px;
      }
      .fp3d-news p {
        margin: 0 0 14px;
        color: var(--fp3d-muted, #a9b8d4);
      }
      .fp3d-news-actions {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
        justify-content: center;
      }
      .fp3d-wv-zoom {
        position: absolute;
        right: 64px;
        bottom: 6px;
        z-index: 1;
        display: flex;
        gap: 4px;
      }
      .fp3d-wv-zoom .fp3d-btn {
        min-width: 34px;
        padding: 4px 8px;
      }
      .fp3d-wv-side {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        z-index: 1;
        display: grid;
        justify-items: center;
        gap: 2px;
        width: 54px;
        padding: 10px 0;
        border-radius: 14px;
        border: 1px solid var(--fp3d-line);
        background: rgba(14, 21, 38, 0.82);
        color: var(--fp3d-accent);
        font-size: 30px;
        line-height: 1;
        cursor: pointer;
      }
      .fp3d-wv-side small {
        font-size: 10px;
        color: var(--fp3d-muted);
      }
      .fp3d-wv-side:hover {
        border-color: var(--fp3d-accent);
      }
      .fp3d-wv-left {
        left: 0;
      }
      .fp3d-wv-right {
        right: 0;
      }
      .fp3d-wv-sel rect {
        fill: rgba(55, 224, 255, 0.3);
        stroke: var(--fp3d-accent);
        stroke-width: 0.02;
      }
      .fp3d-wv-pic.fp3d-wv-sel rect {
        fill: rgba(55, 224, 255, 0.08);
        stroke: var(--fp3d-accent);
      }
      .fp3d-wv-dims line {
        stroke: var(--fp3d-warm);
        stroke-width: 0.012;
        stroke-dasharray: 0.03 0.02;
      }
      .fp3d-wv-dims text {
        fill: var(--fp3d-warm);
        font-size: 0.11px;
        font-weight: 700;
        text-anchor: middle;
        paint-order: stroke;
        stroke: var(--fp3d-chrome-solid);
        stroke-width: 0.035px;
      }
      .fp3d-wv-item text,
      .fp3d-wv-hole-label {
        paint-order: stroke;
        stroke: var(--fp3d-chrome-solid);
        stroke-width: 0.025px;
      }
      .fp3d-wv-hole-label {
        fill: var(--fp3d-muted);
        text-anchor: middle;
        pointer-events: none;
      }
      .fp3d-wv-dims text.fp3d-wv-up {
        text-anchor: start;
      }
      .fp3d-edge-box {
        margin: 12px 0;
        padding: 10px 12px;
        border: 1px solid color-mix(in srgb, var(--fp3d-accent) 45%, transparent);
        border-radius: 12px;
        background: color-mix(in srgb, var(--fp3d-accent) 6%, transparent);
      }
      .fp3d-edge-box h4 {
        margin: 0 0 4px;
        color: var(--fp3d-accent);
        font-size: 13px;
        letter-spacing: 0.06em;
        text-transform: uppercase;
      }
      /* a wall row: name and length, the height, then the buttons (full height, no wall, cut) in one line;
         a split point gets a line of its own below */
      .fp3d-edge-height {
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
        align-items: end;
        padding: 4px 6px;
        margin: 0 -6px;
        border-radius: 8px;
      }
      .fp3d-edge-height > span:first-child {
        flex: 1 1 84px;
        min-width: 84px;
      }
      .fp3d-edge-height > .fp3d-field {
        flex: 1 1 90px;
        min-width: 0;
      }
      .fp3d-edge-height > .fp3d-muted {
        flex: 1 1 90px;
        align-self: center;
      }
      .fp3d-edge-height > .fp3d-btn {
        flex: 0 0 auto;
        white-space: nowrap;
        padding-left: 10px;
        padding-right: 10px;
      }
      .fp3d-edge-height > .fp3d-split-row {
        flex: 1 1 100%;
        display: flex;
        gap: 6px;
        align-items: end;
      }
      .fp3d-edge-height > .fp3d-split-row > .fp3d-field {
        flex: 1;
      }
      .fp3d-edge-on {
        background: color-mix(in srgb, var(--fp3d-accent) 14%, transparent);
      }
      .fp3d-edge-low b {
        color: var(--fp3d-accent);
      }
      .fp3d-wall-low {
        opacity: 0.55;
      }
      .fp3d-dev-source {
        display: flex;
        margin: 8px 0;
      }
      .fp3d-dev-source button {
        flex: 1 1 0;
        min-width: 0;
        padding: 6px 4px;
        font-size: 12px;
        line-height: 1.2;
        white-space: normal;
        text-align: center;
        border-radius: 10px;
      }
      .fp3d-place-all {
        margin: 10px 0 0;
      }
      .fp3d-roof-sec polygon {
        fill: color-mix(in srgb, #ffb547 10%, transparent);
        stroke: #ffb547;
        stroke-width: 2;
        stroke-dasharray: 8 6;
        cursor: move;
      }
      .fp3d-roof-sel polygon {
        fill: color-mix(in srgb, var(--fp3d-accent) 14%, transparent);
        stroke: var(--fp3d-accent);
        stroke-dasharray: none;
      }
      /* solar modules: dark blue panes with a light frame, so they do not look like a selected room */
      .fp3d-roofwin polygon {
        fill: color-mix(in srgb, #2b6b8f 70%, transparent);
        stroke: #e3e9f5;
        stroke-width: 2;
        cursor: move;
      }
      .fp3d-roofwin-sel polygon {
        stroke: #ffd75a;
      }
      .fp3d-tool-energy .fp3d-roof-layer {
        opacity: 0.45;
      }
      .fp3d-tool-energy .fp3d-energy-item {
        pointer-events: auto;
      }
      /* the cables in the energy tool: faint automatic ways, solid laid ones */
      .fp3d-cable line {
        stroke: #ffd75a;
        stroke-width: 2;
        stroke-dasharray: 5 4;
        opacity: 0.8;
        pointer-events: none;
      }
      .fp3d-cable-bat line {
        stroke: #5dffb0;
      }
      .fp3d-cable-grid line {
        stroke: #4ff6ff;
      }
      .fp3d-cable-hit line {
        stroke-width: 12;
        opacity: 0;
        pointer-events: stroke;
        cursor: pointer;
      }
      .fp3d-cable-laid line {
        stroke-dasharray: none;
        opacity: 0.9;
      }
      .fp3d-cable-sel line {
        stroke-width: 2.5;
        opacity: 1;
        filter: drop-shadow(0 0 4px currentColor);
      }
      .fp3d-cable-sel .fp3d-cable-piece {
        stroke-width: 14;
        opacity: 0;
        pointer-events: stroke;
        cursor: copy;
      }
      .fp3d-cable .fp3d-vertex circle {
        pointer-events: auto;
      }
      .fp3d-energy-marker {
        cursor: move;
      }
      .fp3d-checklist .fp3d-chk {
        display: flex;
        align-items: center;
        gap: 8px;
        width: 100%;
        margin: 2px 0;
        padding: 6px 8px;
        border: 0;
        border-radius: 8px;
        background: transparent;
        color: inherit;
        font: inherit;
        text-align: left;
        text-decoration: none;
        cursor: pointer;
      }
      .fp3d-checklist .fp3d-chk:hover {
        background: rgba(127, 127, 127, 0.12);
      }
      .fp3d-checklist .fp3d-chk span {
        width: 18px;
        text-align: center;
        font-weight: 700;
      }
      .fp3d-chk-ok span {
        color: #59ff8c;
      }
      .fp3d-chk-todo span {
        color: #ffc633;
      }
      .fp3d-chk-opt {
        opacity: 0.75;
      }
      .fp3d-teaser-on {
        border-color: rgba(89, 255, 140, 0.5);
      }
      .fp3d-teaser {
        margin-top: 12px;
        padding: 12px;
        border-radius: 14px;
        border: 1px solid color-mix(in srgb, #ffd75a 45%, transparent);
        background: linear-gradient(160deg, color-mix(in srgb, #ffd75a 10%, transparent), transparent 60%);
      }
      .fp3d-teaser-head {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 8px;
        margin-bottom: 8px;
      }
      .fp3d-teaser-soon {
        font-size: 11px;
        font-weight: 700;
        letter-spacing: 0.06em;
        text-transform: uppercase;
        color: #0b1426;
        background: #ffd75a;
        border-radius: 999px;
        padding: 2px 8px;
        white-space: nowrap;
      }
      .fp3d-teaser img {
        display: block;
        width: 100%;
        border-radius: 10px;
        border: 1px solid color-mix(in srgb, var(--fp3d-accent) 40%, transparent);
      }
      .fp3d-teaser ul {
        margin: 8px 0 4px;
        padding-left: 18px;
        font-size: 13px;
      }
      /* the roof and energy tools say what can be moved there (everything else is locked) */
      .fp3d-phone-hint {
        display: none;
      }
      @media (max-width: 600px) {
        .fp3d-phone-hint {
          position: absolute;
          top: 8px;
          left: 8px;
          /* the plan may be wider than the phone: stay on the screen */
          width: calc(min(100%, 100vw) - 16px);
          box-sizing: border-box;
          z-index: 3;
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 6px 6px 6px 12px;
          border-radius: 12px;
          background: var(--fp3d-chrome-solid);
          border: 1px solid var(--fp3d-accent);
          font-size: 13px;
        }
      }
      .fp3d-diag-invite {
        position: absolute;
        bottom: 12px;
        left: 50%;
        transform: translateX(-50%);
        z-index: 3;
        width: min(560px, calc(100% - 24px));
        box-sizing: border-box;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 8px 12px;
        padding: 10px 12px;
        border-radius: 14px;
        background: var(--fp3d-chrome-solid);
        border: 1px solid var(--fp3d-accent);
        font-size: 13px;
        line-height: 1.4;
      }
      .fp3d-diag-invite > span:first-child {
        flex: 1 1 260px;
      }
      .fp3d-diag-invite-buttons {
        display: flex;
        gap: 6px;
      }
      .fp3d-tool-note {
        position: absolute;
        top: 8px;
        left: 50%;
        transform: translateX(-50%);
        z-index: 2;
        max-width: calc(100% - 24px);
        padding: 5px 12px;
        border-radius: 999px;
        background: color-mix(in srgb, #0b1426 85%, transparent);
        border: 1px solid color-mix(in srgb, #ffd75a 60%, transparent);
        color: #ffe7a3;
        font-size: 12px;
        text-align: center;
        pointer-events: none;
      }
      .fp3d-energy-marker circle {
        fill: color-mix(in srgb, #0b1426 80%, transparent);
        stroke: #ffd75a;
        stroke-width: 2;
      }
      .fp3d-holo-pt circle {
        stroke: #c9a4ff;
        cursor: grab;
      }
      .fp3d-holo-pt .fp3d-energy-name {
        fill: #c9a4ff;
      }
      .fp3d-energy-marker-sel circle {
        stroke: var(--fp3d-accent);
        stroke-width: 3;
        fill: color-mix(in srgb, var(--fp3d-accent) 25%, #0b1426);
      }
      .fp3d-energy-marker text {
        text-anchor: middle;
        pointer-events: none;
      }
      .fp3d-energy-icon {
        font-size: 17px;
      }
      .fp3d-energy-name {
        font-size: 11px;
        font-weight: 700;
        fill: #ffd75a;
        paint-order: stroke;
        stroke: rgba(0, 0, 0, 0.65);
        stroke-width: 3px;
      }
      .fp3d-solar polygon {
        fill: color-mix(in srgb, #1b3a8f 75%, transparent);
        stroke: #9fb8ff;
        stroke-width: 1.5;
        cursor: move;
      }
      .fp3d-solar-sel polygon {
        fill: color-mix(in srgb, #1b3a8f 80%, transparent);
        stroke: #ffd75a;
        stroke-width: 2;
      }
      .fp3d-solar polygon.fp3d-solar-off {
        fill: transparent;
        stroke-dasharray: 4 4;
        stroke-width: 1.5;
      }
      .fp3d-solar-pick polygon {
        cursor: pointer;
      }
      .fp3d-roof-ridge line {
        stroke: #ffb547;
        stroke-width: 2.5;
        pointer-events: none;
      }
      .fp3d-roof-sel .fp3d-roof-ridge line {
        stroke: var(--fp3d-accent);
      }
      .fp3d-roof-sec text {
        fill: #ffd28a;
        font-size: 12px;
        font-weight: 700;
        text-anchor: middle;
        paint-order: stroke;
        stroke: rgba(0, 0, 0, 0.6);
        stroke-width: 3px;
        pointer-events: none;
      }
      .fp3d-tool-energy .fp3d-room,
      .fp3d-tool-energy [data-furniture],
      .fp3d-tool-energy [data-device],
      .fp3d-tool-energy [data-opening],
      .fp3d-tool-energy [data-free-wall],
      .fp3d-tool-energy [data-outdoor],
      .fp3d-tool-energy .fp3d-roof-layer,
      .fp3d-tool-roof .fp3d-room,
      .fp3d-tool-roof [data-furniture],
      .fp3d-tool-roof [data-device],
      .fp3d-tool-roof [data-opening],
      .fp3d-tool-roof [data-free-wall],
      .fp3d-tool-roof [data-outdoor] {
        pointer-events: none;
      }
      .fp3d-dev-area {
        margin: 10px 0 2px;
        color: var(--fp3d-muted);
        font-size: 12px;
        letter-spacing: 0.06em;
        text-transform: uppercase;
      }
      .fp3d-h3row {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 8px;
      }
      .fp3d-h3row h3 {
        margin-bottom: 0;
      }
      .fp3d-fix {
        min-height: 30px;
        padding: 4px 10px;
        font-size: 13px;
      }
      .fp3d-pipe,
      .fp3d-pipe-hit {
        fill: none;
        stroke-linecap: round;
        stroke-linejoin: round;
      }
      .fp3d-pipe {
        stroke: #37a8ff;
        stroke-width: 3;
        opacity: 0.85;
        pointer-events: none;
      }
      .fp3d-pipe-sel {
        stroke-width: 5;
        opacity: 1;
        filter: drop-shadow(0 0 4px #37a8ff);
      }
      .fp3d-pipe-draft {
        stroke-dasharray: 6 5;
      }
      .fp3d-pipe-hit {
        stroke: transparent;
        stroke-width: 16;
        cursor: pointer;
      }
      .fp3d-pipe-seg {
        stroke: transparent;
        stroke-width: 14;
        cursor: copy;
      }
      .fp3d-pipe-arrow {
        fill: #37a8ff;
        pointer-events: none;
      }
      .fp3d-pool-node {
        cursor: grab;
      }
      .fp3d-pool-node circle:not(.fp3d-hit) {
        fill: #0b1a2e;
        stroke: #37e0ff;
        stroke-width: 2;
      }
      .fp3d-pool-node.fp3d-pool-dev circle:not(.fp3d-hit) {
        stroke: #5b7cff;
      }
      .fp3d-pool-node.fp3d-pool-closed circle:not(.fp3d-hit) {
        stroke: #ff4d40;
      }
      .fp3d-pool-node text {
        fill: #e6f6ff;
        font-size: 10px;
        font-weight: 700;
        text-anchor: middle;
        dominant-baseline: central;
        pointer-events: none;
      }
      .fp3d-conn {
        grid-template-columns: 1fr;
      }
      .fp3d-conn select {
        width: 100%;
      }
      .fp3d-pool-row {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 6px;
        margin: 4px 0;
        font-size: 13px;
      }
      .fp3d-pool-row > span,
      .fp3d-pool-row > .fp3d-link {
        flex: 1;
        text-align: left;
      }
      .fp3d-pool-row-sel {
        background: rgba(55, 224, 255, 0.1);
        border-radius: 8px;
        box-shadow: inset 3px 0 0 var(--fp3d-accent);
        padding-left: 6px;
      }
      .fp3d-outdoor-type {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        font-size: 13px;
        color: var(--fp3d-muted);
      }
      .fp3d-outdoor-type select {
        min-height: 34px;
        padding: 0 12px;
        border-radius: 999px;
        border: 1px solid var(--fp3d-line, rgba(160, 200, 255, 0.25));
        background: var(--fp3d-chrome);
        color: var(--fp3d-text);
        font: inherit;
        font-weight: 600;
      }
      .fp3d-fix[aria-pressed="true"] {
        border-color: var(--fp3d-accent);
        color: var(--fp3d-accent);
      }
      .fp3d-lock {
        font-size: 13px;
        text-anchor: middle;
        pointer-events: none;
      }
      .fp3d-hint-fixed {
        color: var(--fp3d-accent);
      }
      .fp3d-ctx {
        position: absolute;
        z-index: 5;
        display: flex;
        flex-direction: column;
        min-width: 170px;
        padding: 4px;
        border: 1px solid var(--fp3d-line);
        border-radius: 10px;
        background: var(--fp3d-panel, #111a2e);
        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.45);
      }
      .fp3d-ctx button {
        padding: 8px 12px;
        border: none;
        border-radius: 7px;
        background: none;
        color: inherit;
        font: inherit;
        text-align: left;
        cursor: pointer;
      }
      .fp3d-ctx button:hover:not(:disabled) {
        background: color-mix(in srgb, var(--fp3d-accent) 16%, transparent);
      }
      .fp3d-ctx button:disabled {
        opacity: 0.45;
        cursor: default;
      }
      .fp3d-ctx-danger {
        color: var(--fp3d-danger, #ff6b7a) !important;
      }
      .fp3d-edge-hi {
        stroke: var(--fp3d-accent);
        stroke-width: 6;
        stroke-linecap: round;
        filter: drop-shadow(0 0 6px var(--fp3d-accent));
      }
      .fp3d-room-id code {
        user-select: all;
        cursor: copy;
      }
      .fp3d-open .fp3d-open-hit {
        stroke: transparent;
        stroke-width: 26;
      }
      .fp3d-free-wall .fp3d-hit {
        stroke: transparent;
        stroke-width: 18;
      }
      .fp3d-free-wall-line {
        stroke: transparent;
        stroke-width: 1;
      }
      .fp3d-free-wall-sel .fp3d-free-wall-line {
        stroke: var(--fp3d-accent);
        stroke-width: 2;
        stroke-dasharray: 6 4;
      }
      .fp3d-draft-wall {
        stroke-width: 4;
      }
      .fp3d-open-passage {
        stroke-dasharray: 4 4;
      }
      .fp3d-out-sel polygon {
        stroke: var(--fp3d-accent);
        stroke-width: 2;
        stroke-dasharray: none;
      }
      .fp3d-out text {
        fill: var(--fp3d-muted);
        font-size: 11px;
        text-anchor: middle;
        pointer-events: none;
      }
      .fp3d-furn-lit .fp3d-furn-body {
        fill: rgba(255, 181, 71, 0.35);
        stroke: var(--fp3d-warm);
      }
      .fp3d-rotate {
        cursor: grab;
      }
      .fp3d-preview {
        position: fixed;
        z-index: 20;
        width: 180px;
        padding: 8px 8px 10px;
        border-radius: 16px;
        background: radial-gradient(circle at 50% 40%, #1d2c4d, #0b1222 75%);
        box-shadow: var(--fp3d-shadow), 0 0 0 1px var(--fp3d-line);
        text-align: center;
        pointer-events: none;
        animation: fp3d-pop 120ms ease-out;
      }
      @keyframes fp3d-pop {
        from {
          opacity: 0;
          transform: translateX(8px);
        }
      }
      .fp3d-preview img,
      .fp3d-preview-wait {
        display: block;
        width: 164px;
        height: 164px;
      }
      .fp3d-preview-wait {
        margin: 0 auto;
        border-radius: 12px;
        background: rgba(127, 127, 127, 0.1);
      }
      .fp3d-preview b {
        display: block;
        margin-top: 2px;
        font-size: 13px;
        color: #e8eeff;
      }
      .fp3d-lib-badge {
        margin-left: 4px;
        color: #37e0ff;
        vertical-align: -2px;
      }
      .fp3d-ext-teaser {
        display: grid;
        gap: 6px;
        margin: 12px 0;
        padding: 12px;
        border: 1px solid var(--fp3d-accent);
        border-radius: 12px;
        background: linear-gradient(135deg, rgba(55, 224, 255, 0.08), rgba(91, 124, 255, 0.08));
      }
      .fp3d-pin {
        border: 0;
        background: none;
        padding: 2px 6px;
        font-size: 17px;
        line-height: 1;
        color: var(--fp3d-muted);
        cursor: pointer;
      }
      .fp3d-pin-on {
        color: var(--fp3d-warm);
      }
      .fp3d-back {
        margin-bottom: 12px;
      }
      .fp3d-presets {
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
        margin-bottom: 10px;
      }
      .fp3d-resize {
        cursor: nwse-resize;
      }
      .fp3d-resize rect {
        fill: var(--fp3d-accent);
        stroke: #0b1222;
        stroke-width: 1.5;
      }
      .fp3d-code {
        display: block;
        font: 12px/1.4 ui-monospace, Menlo, Consolas, monospace;
        padding: 6px 8px;
        border-radius: 8px;
        background: rgba(127, 127, 127, 0.12);
        user-select: all;
        word-break: break-all;
      }
      .fp3d-shift {
        display: flex;
        align-items: center;
        gap: 6px;
        flex-wrap: wrap;
      }
      .fp3d-shift input {
        width: 5.5em;
      }
      .fp3d-headroom {
        stroke: rgba(255, 214, 90, 0.55);
        stroke-width: 1;
        stroke-dasharray: 6 4;
        pointer-events: none;
      }
      .fp3d-headroom-label {
        font-size: 10px;
        fill: rgba(255, 214, 90, 0.75);
        text-anchor: middle;
        pointer-events: none;
      }
      .fp3d-split-mark {
        stroke: rgba(55, 224, 255, 0.9);
        stroke-width: 2;
        pointer-events: none;
      }
      .fp3d-floor-menu {
        display: flex;
        flex-direction: column;
        gap: 6px;
        margin: 8px 0;
        padding: 10px;
        border-radius: 12px;
        background: rgba(127, 127, 127, 0.1);
        max-width: 100%;
        box-sizing: border-box;
      }
      .fp3d-icon-row {
        display: flex;
        align-items: center;
        gap: 8px;
      }
      .fp3d-icon-row input {
        flex: 1;
        min-width: 0;
      }
      .fp3d-icon-row ha-icon {
        --mdc-icon-size: 22px;
        color: var(--fp3d-accent);
      }
      .fp3d-floor-menu .fp3d-btn {
        text-align: left;
        width: 100%;
        min-width: 0;
        white-space: normal;
        overflow-wrap: anywhere;
      }
      .fp3d-rotate line {
        stroke: var(--fp3d-accent);
        stroke-dasharray: 3 3;
      }
      .fp3d-rotate circle:not(.fp3d-hit) {
        fill: #0b1222;
        stroke: var(--fp3d-accent);
        stroke-width: 2;
      }
      .fp3d-rotate path {
        fill: none;
        stroke: var(--fp3d-accent);
        stroke-width: 1.5;
        stroke-linecap: round;
      }
      .fp3d-lib-toggle {
        display: flex;
        align-items: center;
        gap: 6px;
        width: 100%;
        padding: 6px 0;
        border: 0;
        background: none;
        font: inherit;
        cursor: pointer;
        text-align: left;
      }
      .fp3d-lib-toggle:hover {
        color: var(--fp3d-text);
      }
      .fp3d-lib-caret {
        width: 12px;
        color: var(--fp3d-accent);
      }
      .fp3d-lib-count {
        margin-left: auto;
        font-weight: 500;
        letter-spacing: 0;
        text-transform: none;
        opacity: 0.7;
      }
      .fp3d-lib-head {
        margin: 10px 0 0;
        font-size: 11px;
        font-weight: 600;
        letter-spacing: 0.05em;
        text-transform: uppercase;
        color: var(--fp3d-muted);
      }
      .fp3d-furn-front {
        stroke: var(--fp3d-accent);
        stroke-width: 2.5;
        vector-effect: non-scaling-stroke;
        opacity: 0.8;
        pointer-events: none;
      }
      .fp3d-furn text {
        fill: var(--fp3d-muted);
        font-size: 11px;
        text-anchor: middle;
        pointer-events: none;
      }
      .fp3d-furn-sel .fp3d-furn-body {
        fill: rgba(55, 224, 255, 0.16);
        stroke: var(--fp3d-accent);
        stroke-width: 2;
      }
      /* furniture blocks and multi selections: a dashed frame with its name, the frame being drawn */
      .fp3d-selframe rect {
        fill: none;
        stroke: var(--fp3d-accent);
        stroke-width: 1.5;
        stroke-dasharray: 6 4;
        pointer-events: none;
      }
      .fp3d-selframe-block rect {
        stroke: #ffb547;
      }
      .fp3d-selframe text {
        fill: var(--fp3d-accent);
        font-size: 11px;
        font-weight: 600;
        pointer-events: none;
      }
      .fp3d-selframe-block text {
        fill: #ffb547;
      }
      .fp3d-marquee {
        fill: rgba(55, 224, 255, 0.08);
        stroke: var(--fp3d-accent);
        stroke-width: 1;
        stroke-dasharray: 4 3;
        pointer-events: none;
      }
      .fp3d-block-parts {
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
        margin: 6px 0 10px;
      }
      .fp3d-block-note {
        display: flex;
        gap: 6px;
        align-items: center;
        flex-wrap: wrap;
      }
      .fp3d-multi-toggle {
        margin-top: 8px;
      }
      .fp3d-open {
        cursor: grab;
      }
      .fp3d-open-gap {
        fill: #0b1222;
        stroke: none;
      }
      .fp3d-open path,
      .fp3d-open line {
        fill: none;
        stroke-width: 1.6;
        stroke-linecap: round;
      }
      .fp3d-open-door path {
        stroke: var(--fp3d-warm);
        stroke-dasharray: 3 3;
      }
      .fp3d-open-front path,
      .fp3d-open-door line {
        stroke: var(--fp3d-warm);
        stroke-width: 3;
        stroke-dasharray: none;
      }
      .fp3d-open-door line.fp3d-open-pane {
        stroke: var(--fp3d-accent);
        stroke-width: 2;
      }
      .fp3d-open-garage line {
        stroke: var(--fp3d-warm);
        stroke-width: 3;
      }
      .fp3d-open-track {
        stroke: var(--fp3d-warm);
        stroke-dasharray: 4 4;
        opacity: 0.6;
      }
      .fp3d-open-window line {
        stroke: var(--fp3d-accent);
        stroke-width: 2;
      }
      .fp3d-open-sel .fp3d-open-gap {
        fill: rgba(55, 224, 255, 0.25);
      }
      .fp3d-open-sel path,
      .fp3d-open-sel line {
        stroke-width: 2.4;
      }
      .fp3d-bg-rotate {
        cursor: grab;
      }
      .fp3d-bg-ruler line {
        stroke: #ffb020;
        stroke-width: 2.5;
        stroke-dasharray: 6 4;
      }
      .fp3d-bg-ruler circle {
        fill: #ffb020;
        stroke: #1a1000;
        stroke-width: 1.5;
      }
      .fp3d-own-button {
        padding: 10px 0;
        border-top: 1px solid var(--fp3d-line);
      }
      .fp3d-own-button textarea {
        font: 12px/1.4 ui-monospace, monospace;
        width: 100%;
        box-sizing: border-box;
        padding: 6px 8px;
        color: var(--fp3d-text);
        background: rgba(255, 255, 255, 0.04);
        border: 1px solid var(--fp3d-line);
        border-radius: 8px;
      }
      .fp3d-search {
        position: sticky;
        top: 0;
        z-index: 2;
        background-color: var(--fp3d-panel, #0d1424);
        width: 100%;
        box-sizing: border-box;
        font: inherit;
        font-size: 14px;
        color: var(--fp3d-text);
        background: rgba(255, 255, 255, 0.04);
        border: 1px solid var(--fp3d-line);
        border-radius: 8px;
        padding: 7px 9px;
        margin: 2px 0 6px;
      }
      .fp3d-dev-all {
        display: block;
        padding: 2px 26px 6px;
        font-size: 12px;
      }
      .fp3d-more {
        font: inherit;
        font-size: 12px;
        color: var(--fp3d-muted);
        background: none;
        border: none;
        text-align: left;
        padding: 2px 26px 8px;
        cursor: pointer;
      }
      .fp3d-more:hover {
        color: var(--fp3d-accent);
      }
      .fp3d-dev-hidden .fp3d-dev-name {
        opacity: 0.45;
        text-decoration: line-through;
      }
      .fp3d-dev-extra {
        padding-left: 18px;
        font-size: 13px;
      }
      .fp3d-dev-title {
        display: flex;
        align-items: center;
        gap: 8px;
        margin: 0 0 8px;
        font-weight: 600;
      }
      .fp3d-notice {
        color: var(--fp3d-accent);
      }
      .fp3d-device-sel circle:not(.fp3d-hit) {
        stroke: var(--fp3d-accent);
        stroke-width: 3;
      }
      .fp3d-dev-row {
        align-items: center;
        cursor: default;
      }
      .fp3d-room-btn {
        flex: 1;
        min-width: 0;
        border-bottom: none;
        padding: 0;
      }
      .fp3d-dev-row:hover {
        color: var(--fp3d-text);
      }
      .fp3d-dev-name {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        min-width: 0;
        font: inherit;
        color: inherit;
        background: none;
        border: none;
        padding: 0;
        text-align: left;
        cursor: pointer;
      }
      .fp3d-dev-name:disabled {
        cursor: default;
      }
      .fp3d-dev-name span {
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .fp3d-dev-name svg {
        flex: none;
      }
      .fp3d-link {
        font: inherit;
        font-size: 13px;
        font-weight: 600;
        color: var(--fp3d-accent);
        background: none;
        border: none;
        padding: 4px 2px;
        cursor: pointer;
        white-space: nowrap;
      }
      .fp3d-wide-btn {
        width: 100%;
        margin-bottom: 6px;
      }
      .fp3d-device {
        cursor: grab;
      }
      .fp3d-wedge path,
      .fp3d-wedge circle:not(.fp3d-hit) {
        fill: rgba(55, 224, 255, 0.12);
        stroke: rgba(55, 224, 255, 0.45);
        stroke-width: 1;
        pointer-events: none;
      }
      .fp3d-wedge-sel path,
      .fp3d-wedge-sel > circle {
        fill: rgba(55, 224, 255, 0.2);
        stroke: var(--fp3d-accent);
      }
      .fp3d-wedge .fp3d-rotate circle {
        pointer-events: auto;
      }
      .fp3d-device circle:not(.fp3d-hit) {
        fill: #111a2e;
        stroke: var(--fp3d-soft);
        stroke-width: 1.5;
        vector-effect: non-scaling-stroke;
      }
      .fp3d-device path {
        fill: none;
        stroke: var(--fp3d-text);
        stroke-width: 2.6;
        stroke-linecap: round;
        stroke-linejoin: round;
      }
      .fp3d-device-on circle:not(.fp3d-hit) {
        fill: var(--fp3d-warm);
        stroke: var(--fp3d-warm);
      }
      .fp3d-device-on path {
        stroke: #2a1a00;
      }
      .fp3d-muted {
        color: var(--fp3d-muted);
        font-variant-numeric: tabular-nums;
      }
      .fp3d-points {
        margin: 12px 0;
      }
      .fp3d-point {
        display: grid;
        grid-template-columns: 18px 1fr 1fr auto;
        gap: 6px;
        align-items: end;
        padding: 4px 0;
      }
      .fp3d-point-sel .fp3d-muted {
        color: var(--fp3d-accent);
      }
      .fp3d-point .fp3d-btn {
        min-height: 34px;
        padding: 4px 10px;
      }
      .fp3d-upload {
        position: relative;
        text-align: center;
        overflow: hidden;
      }
      .fp3d-upload input {
        position: absolute;
        inset: 0;
        opacity: 0;
        cursor: pointer;
      }
      .fp3d-sub {
        margin: 8px 0 0;
        font-size: 12.5px;
        color: var(--fp3d-muted);
      }
      .fp3d-note {
        margin: 0;
        font-size: 12.5px;
        color: var(--fp3d-warm);
      }
    `,
  ];
}

if (!customElements.get("fp3d-editor")) customElements.define("fp3d-editor", Fp3dEditor);

// the extensions page is part of this bundle: the panel loads it the same way as the editor
import "./extensions.ts";

/** Distance of a plan point from a segment. */
function distToSegment(p: Vec2, a: Vec2, b: Vec2): number {
  const dx = b[0] - a[0];
  const dz = b[1] - a[1];
  const l2 = dx * dx + dz * dz || 1;
  const t = Math.min(1, Math.max(0, ((p[0] - a[0]) * dx + (p[1] - a[1]) * dz) / l2));
  return Math.hypot(p[0] - a[0] - dx * t, p[1] - a[1] - dz * t);
}

/** Lower case without accents, so "kuche" finds "Küche" and "chaise" finds "Chaise longue". */
function fold(s: string): string {
  return s.toLowerCase().normalize("NFD").replace(/\p{M}/gu, "");
}

/** A stand-in hass for English names (the furniture search also matches the English name). */
const EN_HASS = { language: "en" } as HomeAssistant;

/** Entities that carry a number: sensors and the number helpers (input_number, number) – #161. */
function numberish(id: string): boolean {
  return /^(sensor|input_number|number)\./.test(id);
}

/** Entities that are on or off: binary sensors and the toggle helper (input_boolean) – #161. */
function binaryish(id: string): boolean {
  return /^(binary_sensor|input_boolean)\./.test(id);
}
