// Lit wrapper around the lazily loaded 3D viewer.

import { css, html, LitElement, nothing, svg, type PropertyValues } from "lit";
import { carState, carWatched, type CarState, roomClimateValue,
  appColor,
  areaEntities,
  entityName,
  furnitureEntities,
  isActive,
  isUnavailable,
  kindOf,
  lightGlow,
  openingEntities,
  openingState,
  TOGGLE_KINDS,
  type FurnitureLinks,
  type OpeningEntities, confirmEntities, fridgeDoors, hasScreen, pictureRuleMatches,
  fromCelsius,
  tempUnit,
  robotRoom,
  robotRoomSensor,
  isStatusSensor,
  floorControls,
  favoriteCall,
  runButton,
} from "../devices.ts";
import { alertColor, alertEntities, alertSources, alertText, findAlerts, type Alert, type AlertSources } from "../alerts.ts";
import { iconPath, iconSvg, mdiIcon } from "../icons.ts";
import { deviceSensors, energySummary, fetchSolarRows, fieldLevels, fieldPowers, findConsumers, flowColor, flowSegments, gridPoint, powerSensorFor, readPower, solarCurvePath, solarDayFromStats, type Consumer, type EnergySummary, type StatRow } from "../energy.ts";
import { fieldFace, fieldSize } from "../solar.ts";
import { type CustomButton, type EntityRef, DEFAULT_HOLOGRAM, type SolarField } from "../model.ts";

/** A hologram card: the house's balance on the main plant, one plant (a balcony plant) on its own, or a device. */
interface HoloCard {
  kind: "main" | "plant" | "device" | "media" | "car";
  name: string;
  /** Auto Pro: the car in its parking spot (charge, range, charging, lock, climate). */
  car?: { spot: string; soc: number | null; range: number | null; rangeUnit: string; chargingW: number | null; charging: boolean; locked: boolean | null; climateOn: boolean | null; lock: string | null; climate: string | null; charge: string | null };
  /** Klang & Kino: what the player plays right now. */
  media?: { id: string; title: string; artist: string; picture: string | null; volume: number; playing: boolean };
  /** The plant's power now (W); null on the main card (it shows the house). */
  w: number | null;
  /** Sensors whose statistics give today's curve. */
  dayIds: string[];
  /** A battery of this plant (the nearest one on its floor). */
  battery: { soc: number | null; w: number | null } | null;
}

/** How long a detection pin stays after its sensor dropped back. */
const DETECT_LINGER_MS = 120000;

/** Pins of what a camera detects (Frigate and the like): a person, a vehicle, an animal, motion. */
const DETECT_ICONS: Record<string, string> = {
  person: '<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M12 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6m-3 7h6a2 2 0 0 1 2 2v6h-2v6H9v-6H7v-6a2 2 0 0 1 2-2"/></svg>',
  car: '<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M5 11l1.5-4.5A2 2 0 0 1 8.4 5h7.2a2 2 0 0 1 1.9 1.5L19 11a2 2 0 0 1 2 2v5h-2v2h-3v-2H8v2H5v-2H3v-5a2 2 0 0 1 2-2m1.1 0h11.8l-1-3H7.1zM6.5 13a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m11 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3"/></svg>',
  pet: '<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M8.3 3.5a2 1.6 0 1 1 0 3.2 2 1.6 0 0 1 0-3.2m7.4 0a2 1.6 0 1 1 0 3.2 2 1.6 0 0 1 0-3.2M4.5 8a1.8 1.5 0 1 1 0 3 1.8 1.5 0 0 1 0-3m15 0a1.8 1.5 0 1 1 0 3 1.8 1.5 0 0 1 0-3M12 10c2.5 0 4.6 1.9 5.3 4.3.6 2 .2 3.7-1.3 4.5-1.4.8-2.6-.2-4-.2s-2.6 1-4 .2c-1.5-.8-1.9-2.5-1.3-4.5C7.4 11.9 9.5 10 12 10"/></svg>',
  motion: '<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M13.5 5.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4M9.8 8.9 7 23h2.1l1.8-8 2.1 2v6h2v-7.5l-2.1-2 .6-3c1.3 1.5 3.3 2.5 5.5 2.5v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1L6 8.3V13h2V9.6z"/></svg>',
};

/** The pin at the street end of the grid cable. */
const GRID_ICON = '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M13 2 4 14h7l-1 8 9-12h-7z"/></svg>';
import { STAGE, type Theme } from "../themes.ts";
import { HEAT_SCALES, heatColor, heatGradient, roomValues, type HeatMode } from "../heatmap.ts";
import { furnitureName } from "../furniture-names.ts";
import { fetchImage } from "../api.ts";
import { formatNumber, translate, type I18nKey } from "../i18n.ts";
import { getPacks, mountBase, packItem, packsVersion } from "../packs.ts";
import { parkedVehicle, PRESENT_STATES, parkedVehicles, parkingEntities, vehicleFurniture } from "../parking.ts";
import { TRAIL_ICON, TRAIL_WINDOW_MS, trailEvents, trailPoints, trailSources, trailTime, type HistoryRow } from "../trail.ts";
import { limitEffects, weatherEntity, weatherState } from "../weather.ts";
import { SHOW_PRESENCE } from "../flags.ts";
import { hasFeature, manualUrl, shopUrl, type Feature } from "../features.ts";
import { searchIndex, searchItems, type SearchItem } from "../search.ts";
import { coverPositionable, lightAbilities } from "./quick-menu.ts";
import "./quick-menu.ts";
import { load3d } from "../load3d.ts";
import { detectionKind, scaleGlow, buildMarkers, cameraMotionSensors, openMoreInfo, placedEntities, stateText, toggleEntity } from "../markers.ts";
import { furnitureFootprint, isLamp, LAMP_MODEL, outdoorGround, pointInPolygon, surfaceHeight, type Building, type Furniture, type StartView } from "../model.ts";
import { floorCounts, floorInfoText, personsInRooms } from "../presence.ts";
import { controls, tokens } from "../styles.ts";
import type { HassEntity, HomeAssistant } from "../types.ts";
import type { DeviceMarker, FloorplanViewer, FloorStack, RobotInfo, Quality, ScreenState, SoundSource, SurfaceGrab, ViewerStats, WallMode } from "../viewer/viewer3d.ts";

/** Which HTML markers are shown: none, only what has no 3D object or shows a value, or all. */
export type MarkerMode = "none" | "important" | "all";


export class Fp3dView3d extends LitElement {
  static properties = {
    hass: { attribute: false },
    building: { attribute: false },
    floorId: { attribute: false },
    roomId: { attribute: false },
    wallMode: { attribute: false },
    explode: { type: Boolean },
    keepRoof: { attribute: false },
    markerMode: { attribute: false },
    markerNames: { attribute: false },
    heatMode: { attribute: false },
    theme: { attribute: false },
    accent: { attribute: false },
    packs: { attribute: false },
    showEnergy: { attribute: false },
    flows: { attribute: false },
    holograms: { attribute: false },
    furnish: { type: Boolean },
    surfaceGrab: { attribute: false },
    furnishTypes: { attribute: false },
    trail: { type: Boolean },
    cameraWall: { attribute: false },
    weather: { type: Boolean },
    weatherEntityId: { attribute: false },
    _flash: { state: true },
    _proHint: { state: true },
    selectedFurniture: { attribute: false },
    selectedDevice: { attribute: false },
    _sky: { state: true },
    quality: { attribute: false },
    showStats: { type: Boolean },
    _stats: { state: true },
    _error: { state: true },
    _energy: { state: true },
    _holos: { state: true },
    _rows: { state: true },
    _holoOpen: { state: true },
    _wallboxW: { state: true },
    _plants: { state: true },
    _holoOn: { state: true },
    _flows: { state: true },
    _holoShow: { state: true },
    _swipe: { state: true },
    _menu: { state: true },
    _through: { state: true },
    _blend: { state: true },
    _wallBig: { state: true },
    _find: { state: true },
    _central: { state: true },
    _thumbsCompact: { state: true },
    _armed: { state: true },
    central: { attribute: false },
    buttons: { attribute: false },
    _thumbs: { state: true },
    floorThumbs: { attribute: false },
    clean: { attribute: false },
    cleanButton: { attribute: false },
    roomLabels: { attribute: false },
    floorStack: { attribute: false },
    panelOpen: { attribute: false },
    alerts: { attribute: false },
    alertJump: { attribute: false },
    scenes: { attribute: false },
    dimmed: { attribute: false },
    autoOrbit: { attribute: false },
    startView: { attribute: false },
    _low: { state: true },
    _narrowStage: { state: true },
    _alerts: { state: true },
    _sceneFired: { state: true },
  };

  declare hass: HomeAssistant;
  declare building: Building | null;
  declare floorId: string | null;
  declare roomId: string | null;
  declare wallMode: WallMode;
  declare explode: boolean;
  /** The roof stays while zooming in (no lift, no fade). */
  declare keepRoof: boolean;
  declare markerMode: MarkerMode;
  /** Card option marker_names: every device with an own name shows it under its pin. */
  declare markerNames: boolean;
  declare heatMode: HeatMode;
  /** Imported furniture packs (a new list rebuilds pack furniture). */
  declare packs: unknown;
  declare theme: Theme;
  /** Accent colour for the neon look ("#rrggbb"), null for the stock cyan. */
  declare accent: string | null;
  /** Show the energy values at the top (cards can switch them off). */
  declare showEnergy: boolean;
  /** Power flow lines fixed on or off (cards); null: the viewer's own toggle decides. */
  declare flows: boolean | null;
  /** Energie Pro holograms always on or off (card option); null = the bar's own switch. */
  declare holograms: boolean | null;
  private declare _holoShow: boolean;
  /** Furnishing: furniture and lamps are dragged in 3D (admins, panel only). */
  declare furnish: boolean;
  /** Editor: moves solar fields and roof windows with rays from the camera (null: none). */
  declare surfaceGrab: SurfaceGrab | null;
  /** Editor: only these furniture types can be moved in 3D (null: all). */
  declare furnishTypes: readonly string[] | null;
  /** Motion trail: where motion was reported in the last half hour, with times. */
  declare trail: boolean;
  /** The camera wall: every placed camera's live picture at once (Pro). */
  declare cameraWall: boolean;
  /** Weather outside: rain, snow, fog and clouds from a weather entity, sun and moon from sun.sun. */
  declare weather: boolean;
  /** The weather entity to use (null: the first one). */
  declare weatherEntityId: string | null;
  /** A lightning flash lights the stage for a moment. */
  private declare _flash: boolean;
  /** A Pro feature was asked for without the Pro pack: a hint with the shop link. */
  private declare _proHint: Feature | null;
  private flashTimer: ReturnType<typeof setTimeout> | undefined;
  private cloud = 0;
  /** Entities that ask before a tap switches them. */
  private confirmSet = new Set<string>();
  /** History rows of the trail's sensors (fetched while the trail is shown, again every minute). */
  private trailRows: Record<string, HistoryRow[]> = {};
  private trailTimer: ReturnType<typeof setInterval> | undefined;
  declare selectedFurniture: string | null;
  declare selectedDevice: string | null;
  /** How much daylight there is (0 = night, 1 = day), from sun.sun. */
  private declare _sky: number;
  declare quality: Quality;
  declare showStats: boolean;
  private declare _stats: ViewerStats | null;
  private declare _error: string | null;
  private declare _energy: EnergySummary | null;
  /** Energie Pro: today's solar statistics for the hologram (kWh, peak and the day curve). */
  /** The hologram cards (main plant first) and today's statistics rows of their sensors. */
  private declare _holos: HoloCard[];
  private declare _rows: Record<string, StatRow[]> | null;
  private declare _holoOpen: boolean;
  /** Power of the wallboxes in the plan (W), for the hologram. */
  private declare _wallboxW: number | null;
  /** The inverters with their own sensors (name and W), for the hologram when there are several plants. */
  private declare _plants: { name: string; w: number }[];
  /** The hologram is on screen (then the energy bar keeps only its switch). */
  private declare _holoOn: boolean;
  private holoTimer: ReturnType<typeof setInterval> | undefined;
  /** Which hologram cards are folded to their big number. */
  private holoFolded = new Set<number>();
  /** Media cards folded by the user, by player (positions shift as players start and stop). */
  private mediaFolded = new Set<string>();
  /** Klang & Kino: the last card of each player and until when it may stand in for a short dropout. */
  private mediaGrace = new Map<string, { until: number; card: HoloCard; source: SoundSource; anchor: Parameters<FloorplanViewer["setAnchors"]>[0][number] }>();
  private mediaGraceTimer: ReturnType<typeof setTimeout> | undefined;
  /** The volume being dragged (shown at once; the player answers later, a cloud speaker slowly). */
  private mediaVolume = new Map<string, { v: number; at: number }>();
  private volumeSent = 0;
  private holoIds = "";
  /** The start view last handed to the viewer (JSON), to notice a new one. */
  private shownStartView: string | undefined;
  /** A running swipe on a lamp or blind: the value shown next to the finger. */
  private declare _swipe: { entity: string; kind: "light" | "cover"; start: number; value: number; x: number; y: number } | null;
  /** Quick menu at a device (long press). */
  private declare _menu: { entity: string; x: number; y: number; car?: CarState } | null;
  /** Looking through a camera: its live picture lies over the 3D view; `back` is the view to return to. */
  private declare _through: { entity: string; back: ReturnType<FloorplanViewer["getView"]> } | null;
  /** Camera wall: the camera shown big (null: all tiles). */
  private declare _wallBig: string | null;
  /** The look-through was started from the camera wall: going back reopens the wall. */
  private throughWall = false;
  /** Camera wall, big picture: Home Assistant's own stream player (a picture-entity card in live view), one at a time. */
  private live: { id: string; el: (HTMLElement & { hass?: unknown }) | null; failed: boolean } | null = null;
  /** How strongly the camera picture covers the 3D view (0 = only 3D, 1 = only the picture). */
  private declare _blend: number;
  /** Floor switcher with small pictures of the floors (panel and card; off with a fixed floor). */
  declare floorThumbs: boolean;
  /** Clean view: only the stage – no energy values, thumbnails, legend, scene chips or search (the host hides its own bars). */
  declare clean: boolean;
  /** Show the eye button that toggles the clean view (the host listens for "clean-toggle"). */
  declare cleanButton: boolean;
  /** Room names in 3D (cards can switch them off). */
  declare roomLabels: boolean;
  /** Floors below an opened floor: dimmed, stacked (the house up to it) or hidden. */
  declare floorStack: FloorStack;
  private declare _thumbs: { floorId: string; url: string }[];
  /** The viewer runs at the tablet level: heavy CSS effects are left out as well. */
  private declare _low: boolean;
  /** A room panel (or sheet) is open next to the view: on small screens the view's own controls hide. */
  declare panelOpen: boolean;
  /** The stage is narrower than 700 px (smaller floor pictures, phone layout). */
  private declare _narrowStage: boolean;
  private resizeObs: ResizeObserver | null = null;
  /** Warnings (smoke, water, alarm, window in the rain): pulsing rooms and a banner; jump to new ones. */
  declare alerts: boolean;
  declare alertJump: boolean;
  private declare _alerts: Alert[];
  private alertSrc: AlertSources | null = null;
  private alertTimer: ReturnType<typeof setInterval> | undefined;
  private seenAlerts = new Set<string>();
  /** A room briefly lit up after a double tap switched its lights. */
  private roomFlash: { roomId: string; until: number } | null = null;
  /** Scene and script chips of the selected room. */
  declare scenes: boolean;
  private declare _sceneFired: string | null;
  /** Night (kiosk): no effects, cables or floor pictures. */
  declare dimmed: boolean;
  /** Screensaver: the view turns slowly by itself. */
  declare autoOrbit: boolean;
  /** A start view of the card's own (YAML `start_view`); else the one remembered in the editor. */
  declare startView: StartView | null;
  /** Search index (rooms and devices), built when the search opens and reused while it is open. */
  private findIndex: SearchItem[] | null = null;
  /** Room colours (heatmap) as last sent to the viewer. */
  private tintSig = "";
  private thumbTimer: ReturnType<typeof setTimeout> | undefined;
  /** What the floor pictures show of the devices (lamps, blinds): they are drawn again when it changes. */
  private thumbSig = "";
  private thumbsAt = 0;
  /** Search ("where is …?"): null = closed. */
  private declare _find: string | null;
  /** Floor pictures folded to plain floor buttons (D177), remembered per device. */
  private declare _thumbsCompact: boolean;
  /** The central menu (all lights / blinds of the floor or house, favourites) is open (#145). */
  private declare _central: boolean;
  /** A house-wide action waiting for its second tap ("sure?"), with the time it was armed. */
  private declare _armed: string | null;
  private armTimer: ReturnType<typeof setTimeout> | undefined;
  /** Show the star with the central menu (card option central; default on). */
  declare central: boolean;
  /** Own buttons from the card's YAML (replace the house's buttons when set). */
  declare buttons: CustomButton[] | null;
  private swipeSent = 0;
  private swipeTimer: ReturnType<typeof setTimeout> | undefined;
  /** Energy cables from the meter to the consumers (off unless switched on; kept per browser). */
  private declare _flows: boolean;

  private viewer: FloorplanViewer | null = null;
  private starting = false;
  /** States of the placed entities as last sent to the viewer. */
  private shownStates = new Map<string, HassEntity | undefined>();
  private shownPacks = -1;
  /** Entities of each door and window, and the registry they were matched with. */
  private openingLinks: Map<string, OpeningEntities> | null = null;
  private linkedRegistry: HomeAssistant["entities"] | undefined;
  /** Entities of electric furniture (TV, fridge, …). */
  private furnitureLinks = new Map<string, FurnitureLinks>();
  /** Room values of the current heatmap (for the legend). */
  private heatValues = new Map<string, number>();
  /** Entities whose state changes redraw markers, cables, people and floor labels. */
  private watched: string[] = [];
  /** Stored images used as screen pictures, as data URLs (fetched once); null while loading or missing. */
  private pictureUrls = new Map<string, string | null>();
  /** Screens showing a camera: their snapshots are refreshed every few seconds (a changing query parameter). */
  private cameraTick = 0;
  private cameraTimer: ReturnType<typeof setInterval> | undefined;
  private cameraScreens = 0;
  /** The look through a camera itself opens this floor: that floor change must not end it. */
  private throughFloor: string | null = null;

  constructor() {
    super();
    this.building = null;
    this.floorId = null;
    this.roomId = null;
    this.wallMode = "auto";
    this.explode = true;
    this.keepRoof = false;
    this.markerMode = "important";
    this.heatMode = "none";
    this.theme = "neon";
    this.accent = null;
    this.furnish = false;
    this.trail = false;
    this.weather = true;
    this.weatherEntityId = null;
    this._flash = false;
    this._proHint = null;
    this.showEnergy = true;
    this.flows = null;
    this.selectedFurniture = null;
    this.selectedDevice = null;
    this._sky = 0;
    this.quality = "auto";
    this.showStats = false;
    this._stats = null;
    this._error = null;
    this._energy = null;
    this._holos = [];
    this._rows = null;
    this._holoOpen = true;
    this._wallboxW = null;
    this._plants = [];
    this._holoOn = false;
    this._swipe = null;
    this._menu = null;
    this._through = null;
    this._wallBig = null;
    this._blend = 0.6;
    this._find = null;
    this._central = false;
    try {
      this._thumbsCompact = localStorage.getItem("neonplan3d.thumbs_compact") === "1";
    } catch {
      this._thumbsCompact = false;
    }
    this._armed = null;
    this.central = true;
    this.buttons = null;
    this._thumbs = [];
    this.floorThumbs = true;
    this.clean = false;
    this.cleanButton = false;
    this.roomLabels = true;
    this.floorStack = "dim";
    this._low = false;
    this.panelOpen = false;
    this._narrowStage = false;
    this.alerts = true;
    this.alertJump = false;
    this._alerts = [];
    this.scenes = true;
    this._sceneFired = null;
    this.dimmed = false;
    this.autoOrbit = false;
    this.startView = null;
    this.cameraWall = false;
    this.holograms = null;
    try {
      this._flows = localStorage.getItem("neonplan3d.flows") === "1";
      this._holoShow = localStorage.getItem("neonplan3d.holos") !== "0";
    } catch {
      this._flows = false;
      this._holoShow = true;
    }
  }

  connectedCallback(): void {
    super.connectedCallback();
    if (this.hasUpdated) {
      this.observeStage();
      if (!this.viewer) void this.start();
    }
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    this.resizeObs?.disconnect();
    this.resizeObs = null;
    clearInterval(this.alertTimer);
    this.alertTimer = undefined;
    clearInterval(this.cameraTimer);
    this.cameraTimer = undefined;
    this.live = null;
    clearInterval(this.trailTimer);
    this.trailTimer = undefined;
    clearInterval(this.holoTimer);
    this.holoTimer = undefined;
    clearTimeout(this.flashTimer);
    this.flashTimer = undefined;
    this.viewer?.dispose();
    this.viewer = null;
  }

  protected firstUpdated(): void {
    this.observeStage();
    void this.start();
  }

  /** Follows the stage's width: the floor pictures shrink on narrow screens. */
  private observeStage(): void {
    const stage = this.renderRoot.querySelector(".fp3d-stage");
    if (!stage || this.resizeObs || typeof ResizeObserver !== "function") return;
    this.resizeObs = new ResizeObserver((entries) => {
      const narrow = (entries[0]?.contentRect.width ?? 1000) < 700;
      if (narrow === this._narrowStage) return;
      this._narrowStage = narrow;
      this.scheduleThumbs();
    });
    this.resizeObs.observe(stage);
  }

  private async start(): Promise<void> {
    if (this.starting || this.viewer) return;
    this.starting = true;
    try {
      const mod = await load3d();
      if (!this.isConnected) return;
      const host = this.renderRoot.querySelector(".fp3d-stage") as HTMLElement;
      this.viewer = mod.createViewer(host, {
        quality: this.quality,
        explode: this.explode,
        onRoomTap: (floorId, roomId) => this.fire("room-tap", { floorId, roomId }),
        onFloorTap: (floorId) => this.fire("floor-tap", { floorId }),
        floorInfo: (floor) =>
          floor.rooms.length === 1 ? translate(this.hass, "floor_rooms_one") : translate(this.hass, "floor_rooms", { n: floor.rooms.length }),
        onBack: () => this.fire("back", {}),
        onDeviceTap: (id, x, y) => this.onDeviceTap(id, x, y),
        onDeviceHold: (id, x, y) => this.onDeviceHold(id, x, y),
        onRoomDoubleTap: (floorId, roomId) => this.onRoomDoubleTap(floorId, roomId),
        onDeviceSwipe: (id, phase, dy, x, y) => this.onDeviceSwipe(id, phase, dy, x, y),
        onFurnitureSelect: (id) => this.fire("furniture-select", { id }),
        onFurnitureMove: (id, x, z) => this.fire("furniture-move", { id, x, z }),
        onDeviceSelect: (id) => this.fire("device-select", { id }),
        onDeviceMove: (id, x, z) => this.fire("device-move", { id, x, z }),
        // stats can be switched on at any time; they only cause updates while shown
        onStats: (s) => {
          if (this.showStats) this._stats = s;
        },
      });
      this.viewer.setWallMode(this.wallMode);
      this.viewer.setTheme(this.theme);
      this.viewer.setAccent(this.accent ?? null);
      this.viewer.setFurnishMode(this.furnish);
      this.viewer.setSurfaceGrab(this.surfaceGrab ?? null);
      this.viewer.setFurnishTypes(this.furnishTypes ?? null);
      this.viewer.setAnchorCallback((i, x, y, on, scale, facing) => this.placeHolo(i, x, y, on, scale, facing));
      this.viewer.setFloorStack(this.floorStack);
      this.viewer.setStats(this.showStats);
      this.viewer.setAutoOrbit(this.autoOrbit ? 0.06 : 0);
      this.viewer.setKeepRoof(this.keepRoof);
      this._low = this.viewer.low;
      this.viewer.setPacks([...getPacks()]);
      this.shownPacks = packsVersion();
      if (this.building) {
        this.shownStartView = JSON.stringify(this.startViewOf());
        this.viewer.setStartView(this.startViewOf());
        this.viewer.setBuilding(this.building);
      }
      this.scheduleThumbs();
      this.syncDevices(true);
      this.viewer.setFloor(this.floorId, false);
      if (this.roomId) this.viewer.selectRoom(this.roomId);
    } catch (err) {
      this._error = String(err);
    } finally {
      this.starting = false;
    }
  }

  protected updated(changed: PropertyValues): void {
    if (changed.has("hass") && this.live?.el) this.live.el.hass = this.hass;
    const v = this.viewer;
    if (!v) return;
    // a room or floor chosen elsewhere ends the look through a camera (the view is theirs now)
    if (this._through && (changed.has("roomId") || changed.has("floorId"))) {
      if (this.floorId === this.throughFloor) this.throughFloor = null;
      else this._through = null;
    }
    // packs arrive with the building (or after an import): the viewer rebuilds pack furniture
    if (this.shownPacks !== packsVersion()) {
      this.shownPacks = packsVersion();
      v.setPacks([...getPacks()]);
      // vehicles in parking spots come from packs too: look them up again now that the packs are here
      if (this.hass && this.building) v.setParked(parkedVehicles(this.hass, this.building));
      // a feature pack may have arrived with them (Energie Pro): the cables and modules follow
      this.syncDevices(true);
    }
    if (changed.has("building") && this.building) {
      // a new start view (just remembered in the editor) shows right away in the house view
      const start = JSON.stringify(this.startViewOf());
      const startChanged = this.shownStartView !== undefined && this.shownStartView !== start;
      this.shownStartView = start;
      v.setStartView(this.startViewOf());
      v.setBuilding(this.building);
      if (startChanged && this.floorId === null) v.resetView();
    }
    if (changed.has("startView") && changed.get("startView") !== undefined) {
      v.setStartView(this.startViewOf());
      if (this.floorId === null) v.resetView();
    }
    if (changed.has("building") || changed.has("theme") || changed.has("floorThumbs") || changed.has("packs")) this.scheduleThumbs();
    const forced = ["building", "markerMode", "heatMode", "flows", "alerts", "dimmed"].some((k) => changed.has(k));
    if (forced || changed.has("hass")) this.syncDevices(forced);
    if (changed.has("autoOrbit")) v.setAutoOrbit(this.autoOrbit ? 0.06 : 0);
    if (changed.has("_thumbs") || changed.has("_narrowStage")) v.setLabelInset(this._thumbs.length ? (this.narrowThumbs ? 136 : 184) : 0);
    if (changed.has("floorId")) v.setFloor(this.floorId);
    if (changed.has("roomId") && (this.roomId || changed.get("roomId"))) v.selectRoom(this.roomId);
    if (changed.has("wallMode")) v.setWallMode(this.wallMode);
    if (changed.has("explode")) v.setExplode(this.explode);
    if (changed.has("keepRoof")) v.setKeepRoof(this.keepRoof);
    if (changed.has("floorStack")) v.setFloorStack(this.floorStack);
    if (changed.has("theme")) v.setTheme(this.theme);
    if (changed.has("accent")) v.setAccent(this.accent ?? null);
    if (changed.has("surfaceGrab")) v.setSurfaceGrab(this.surfaceGrab ?? null);
    if (changed.has("furnishTypes")) v.setFurnishTypes(this.furnishTypes ?? null);
    if (changed.has("furnish")) {
      v.setFurnishMode(this.furnish);
      this.syncDevices(true);
    }
    if (changed.has("selectedFurniture")) v.selectFurniture(this.selectedFurniture);
    if (changed.has("selectedDevice")) v.setSelectedDevice(this.selectedDevice);
    if (changed.has("trail")) this.watchTrail();
    if (changed.has("weather") || changed.has("weatherEntityId")) this.syncDevices(true);
    if (changed.has("quality") && changed.get("quality") !== undefined) {
      v.setQuality(this.quality);
      this._low = v.low;
    }
    if (changed.has("showStats")) v.setStats(this.showStats);
    if (changed.has("building")) this.findIndex = null;
  }

  /**
   * Send device markers, door/window states, energy cables, people and floor label texts to the viewer
   * when a watched entity changed (or the building). Openings are matched with entities again when
   * the building or the entity registry changes.
   */
  private syncDevices(force: boolean): void {
    const v = this.viewer;
    const b = this.building;
    if (!v || !b || !this.hass) return;
    const hass = this.hass;
    if (force || !this.openingLinks || this.linkedRegistry !== hass.entities) {
      this.openingLinks = openingEntities(hass, b.floors);
      this.furnitureLinks = furnitureEntities(hass, b.floors);
      this.linkedRegistry = hass.entities;
      this.findIndex = null;
      const links = [...this.openingLinks.values()].flatMap((e) => [e.cover, e.contact, e.tilt, e.contact2 ?? null, e.tilt2 ?? null, e.position ?? null, e.tiltAngle ?? null]);
      const placed = placedEntities(b);
      const cameraSensors = placed.filter((id) => kindOf(id) === "camera").flatMap((id) => cameraMotionSensors(hass, id));
      const power = placed.map((id) => powerSensorFor(hass, id));
      const e = b.energy;
      const presence = b.presence.flatMap((p) => [p.person, p.sensor]);
      const lights = b.floors.flatMap((f) => f.rooms.flatMap((r) => areaEntities(hass, r.area_id).filter((id) => kindOf(id) === "light")));
      const furniture = [...this.furnitureLinks.values()].flatMap((l) => [l.entity, l.power]);
      const states = b.floors.flatMap((f) => f.furniture.flatMap((m) => [m.state_entity ?? null, m.state_entity2 ?? null, m.color_entity ?? null]));
      const doors = b.floors.flatMap((f) => f.furniture.flatMap((m) => [m.door_left ?? null, m.door_right ?? null, m.soc ?? null, m.status ?? null, m.charge ?? null, m.export ?? null]));
      const roofWindowIds = (b.settings.roof?.windows ?? []).flatMap((w) => [w.cover, w.contact, w.tilt]).filter((x): x is string => !!x && x !== "none");
      // the solar fields' and strings' sensors feed the roof cables
      const solarIds = [...(b.settings.roof?.solar ?? []).map((f) => f.entity), ...(b.settings.roof?.strings ?? []).map((s) => s.entity)].filter((x): x is string => !!x && x !== "none");
      const robotRooms = b.floors.flatMap((f) => f.furniture.filter((m) => m.type === "robot_vacuum").map((m) => robotRoomSensor(hass, this.furnitureLinks.get(m.id)?.entity ?? null, m.room_sensor)));
      const pictureRules = b.floors.flatMap((f) => f.furniture.flatMap((m) => (m.pictures ?? []).flatMap((r) => [r.entity, ...(r.image.startsWith("camera:") ? [r.image.slice(7)] : [])])));
      const heat =
        this.heatMode === "none" && !this.roomLabels
          ? []
          : b.floors.flatMap((f) => f.rooms.flatMap((r) => areaEntities(hass, r.area_id).filter((id) => id.startsWith("sensor."))));
      this.alertSrc = this.alerts ? alertSources(hass, b, this.weatherEntityId) : null;
      const warn = this.alertSrc ? alertEntities(this.alertSrc) : [];
      const parking = [...parkingEntities(b.floors), ...(hasFeature("auto_pro") ? carWatched(hass, b.floors) : [])];
      const motion = trailSources(hass, b).map((s) => s.entity);
      const weather = weatherEntity(hass, this.weatherEntityId ?? b.settings.weather_entity);
      const all = [...placed, ...cameraSensors, ...links, ...power, ...furniture, ...states, ...doors, ...robotRooms, ...roofWindowIds, ...solarIds, ...pictureRules, e.grid, e.solar, e.battery, e.battery_soc, e.consumption, e.tariff, ...presence, ...lights, ...heat, ...warn, ...parking, ...motion, weather, "sun.sun"];
      this.watched = [...new Set(all.filter((id): id is string => !!id))];
      force = true;
    }
    const changed = force || this.watched.some((id) => this.shownStates.get(id) !== hass.states[id]);
    if (!changed) return;
    this.shownStates = new Map(this.watched.map((id) => [id, hass.states[id]]));

    const consumers = findConsumers(hass, b);
    const deviceMarkers = buildMarkers(hass, b);
    const furniture = this.furnitureMarkers(hass, b, new Set(deviceMarkers.map((m) => m.id)), new Set(consumers.map((c) => c.powerEntity)));
    consumers.push(...furniture.consumers);
    const summary = energySummary(hass, b, consumers, deviceSensors(b, (f) => this.furnitureLinks?.get(f.id)?.power ?? null));
    // a placed power sensor shows its value as state text already, so only devices get a watt badge
    const byDevice = new Map(consumers.filter((c) => c.id !== c.powerEntity).map((c) => [c.id, c.power]));
    this.confirmSet = confirmEntities(hass, b.floors);
    const trail = this.trail ? this.trailNow(hass, b) : [];
    const pro = hasFeature("energy_pro");
    // Auto Pro: spots whose car stands there get a card, so their pin steps aside
    const carSpots = new Set(
      hasFeature("auto_pro") ? b.floors.flatMap((fl) => fl.furniture.filter((f) => f.type === "parking" && f.car && parkedVehicle(hass, f)).map((f) => f.id)) : [],
    );
    v.setDevices([
      ...[...deviceMarkers, ...furniture.markers].map((m) => {
        // "without watts" drops the power badge (a plug shows only on / off)
        const power = m.show === "no_power" || ("energyDevice" in m && m.energyDevice) ? null : (byDevice.get(m.id) ?? null);
        // at night (kiosk) colour effects rest
        const marker = { ...m, power, powerText: power === null ? undefined : formatPower(hass, power), effect: this.dimmed ? false : m.effect };
        // the own name under the pin: per device, or for every named device (card option marker_names)
        const caption = m.ownName && (m.showName || this.markerNames) ? m.ownName : "";
        // Klang & Kino: while a card floats over the speaker, its pin steps aside (it comes back when the music stops)
        const carded = (hasFeature("sound") && this.mediaCardUp(hass, m.id)) || (hasFeature("auto_pro") && !!m.furnitureId && carSpots.has(m.furnitureId));
        return { ...marker, pin: this.showPin(marker) && !carded, full: m.show === "always", caption };
      }),
      // Energie Pro: the street end of the grid cable carries a pin with what comes in or goes out
      ...(pro && (this.flows ?? this._flows) && !this.dimmed && summary.grid !== null ? [this.gridPin(hass, b, summary.grid)] : []).filter((m): m is NonNullable<typeof m> => !!m),
      // Kamera-Cockpit: what a camera detects right now stands in front of it as a pin
      ...(hasFeature("camera_cockpit") && !this.dimmed ? this.detectionPins(hass, deviceMarkers) : []),
      // trail spots carry a pin with the time of the motion; the same sensor again stacks its pins
      ...trail.map((p, i) => ({
        id: `trail:${i}`,
        floorId: p.floorId,
        roomId: null,
        x: p.x,
        z: p.z,
        y: 0.3 + 0.4 * trail.slice(0, i).filter((q) => q.entity === p.entity).length,
        icon: TRAIL_ICON,
        name: entityName(hass, p.entity),
        text: trailTime(hass, p.time),
        active: false,
        unavailable: false,
        glow: null,
        pin: true,
      })),
    ]);
    v.setTrail(trail);
    v.setPickTargets(furniture.targets, this.openingTargets());
    v.setScreens(furniture.screens);
    v.setFridgeDoors(fridgeDoors(hass, b.floors));
    v.setRobots(this.robotInfos(hass, b));
    // roof windows: sash and blind follow their contact and cover like windows do
    const roofWindows = new Map<string, { open: number; tilt: number; cover: number }>();
    for (const w of b.settings.roof?.windows ?? []) {
      const ref = (e: string | null | undefined) => (e && e !== "none" ? e : null);
      const s = openingState(hass, { cover: ref(w.cover), contact: ref(w.contact), tilt: ref(w.tilt) }, "window");
      // a window motor: its position (0–100) opens the sash that far; a plain open/closed state fully
      const motor = ref(w.window) ? hass.states[ref(w.window)!] : undefined;
      let open = s.open;
      if (motor && !isUnavailable(motor)) {
        const pos = motor.attributes.current_position;
        open = typeof pos === "number" ? Math.min(1, Math.max(0, pos / 100)) : motor.state === "open" || motor.state === "opening" ? 1 : 0;
      }
      roofWindows.set(w.id, { open, tilt: s.tilt, cover: s.cover ?? 0 });
    }
    v.setRoofWindows(roofWindows);
    v.setParked(parkedVehicles(hass, b));
    const types = new Map(b.floors.flatMap((f) => f.openings.map((o) => [o.id, o.type] as const)));
    const openingStates = new Map([...this.openingLinks!].map(([id, e]) => [id, openingState(hass, e, types.get(id))]));
    v.setOpeningStates(openingStates);
    this.setAlerts(this.alertSrc ? findAlerts(hass, b, this.alertSrc, this.openingLinks!) : []);
    // the floor pictures follow lamps and blinds (not sensors), at most every few seconds
    const lampSig = [...deviceMarkers, ...furniture.markers].map((m) => `${m.id}:${m.glow ? `${m.glow.level.toFixed(1)}/${m.glow.color.map((c) => c.toFixed(1)).join("/")}` : 0}`).join(";") + "|" + [...openingStates].map(([id, o]) => `${id}:${o.open}:${o.cover === null ? "-" : o.cover.toFixed(1)}`).join(";");
    if (lampSig !== this.thumbSig) {
      const first = this.thumbSig === "";
      this.thumbSig = lampSig;
      if (!first) this.scheduleThumbs(1500);
    }
    // the battery cable ends at the home battery in the plan (older plans: at the placed battery sensor)
    const batteryPlaced =
      b.floors.flatMap((f) => f.furniture.filter((m) => m.type === "home_battery").map((m) => ({ floorId: f.id, x: m.x, z: m.z })))[0] ??
      (b.energy.battery ? b.floors.flatMap((f) => f.placements.filter((p) => p.entity_id === b.energy.battery).map((p) => ({ floorId: f.id, x: p.x, z: p.z })))[0] : null);
    const powers = pro ? fieldPowers(hass, b, summary.solar) : null;
    // the holograms: the main one hangs over the chosen (else the biggest) solar field, moved as set up, and
    // every further plant (an inverter with fields of its own, say a balcony plant) gets a card over its field
    const holo = b.settings.roof.hologram ?? DEFAULT_HOLOGRAM;
    const fields = [...(b.settings.roof.solar ?? [])].sort((p, q) => q.rows * q.cols - p.rows * p.cols);
    const strings = b.settings.roof.strings ?? [];
    const inverterOf = (f: SolarField) => (f.string ? strings.find((x) => x.id === f.string)?.inverter : null) ?? null;
    const anchorOn = (f: SolarField, right: number, up: number, size: number) => {
      const face = fieldFace(b, f);
      if (!face) return null;
      const [fw, fd] = fieldSize(face, f);
      const u = f.u + fw / 2 + right;
      const sv = f.v + fd / 2 + up;
      const c: [number, number, number] = [face.o[0] + face.eu[0] * u + face.es[0] * sv, face.o[1] + face.eu[1] * u + face.es[1] * sv, face.o[2] + face.eu[2] * u + face.es[2] * sv];
      const floorId = face.wall?.floorId ?? (face.unbounded ? (b.floors.find((f) => f.elevation === Math.min(...b.floors.map((x) => x.elevation)))?.id ?? b.floors[0].id) : [...b.floors].sort((p, q) => q.elevation - p.elevation)[0].id);
      return { p: [c[0] + face.n[0] * 0.05, c[1] + face.n[1] * 0.05, c[2] + face.n[2] * 0.05] as [number, number, number], n: [face.n[0], face.n[1], face.n[2]] as [number, number, number], floorId, size, roof: true, views: "house" as const };
    };
    const anchors: { p: [number, number, number]; n: [number, number, number]; floorId: string; size: number; roof: boolean; views: "house" | "all" }[] = [];
    const cards: HoloCard[] = [];
    const anyEnergy = summary.grid !== null || summary.battery !== null || summary.solar !== null;
    const free = holo.place === "free" && Number.isFinite(holo.x) && Number.isFinite(holo.z);
    const first = pro && summary.solar !== null && !free ? (fields.find((f) => f.id === holo.field) ?? fields[0]) : undefined;
    const mainInverter = first ? inverterOf(first) : null;
    // the plant whose field carries the main card keeps its own card on that field: the main card steps aside
    // (just right of the field) unless the editor moved it by hand
    const shared = !!first && !!mainInverter && !fields.some((f) => f.id !== first.id && inverterOf(f) === mainInverter) && holo.right === 0 && holo.up === 0;
    const sharedRight = (() => {
      if (!shared || !first) return 0;
      const face = fieldFace(b, first);
      return face ? fieldSize(face, first)[0] / 2 + 1.2 : 0;
    })();
    const mainAnchor = first ? anchorOn(first, holo.right + sharedRight, holo.up, holo.size) : null;
    const devicePower = this.devicePowers(hass, b);
    const solarIds = pro && summary.solar !== null ? (b.energy.solar ? [b.energy.solar] : deviceSensors(b, (f) => this.furnitureLinks?.get(f.id)?.power ?? null).solar) : [];
    if (mainAnchor) {
      anchors.push(mainAnchor);
      cards.push({ kind: "main", name: translate(hass, "holo_title"), w: null, dayIds: solarIds, battery: null });
    } else if (pro && anyEnergy && free) {
      // placed free in the plan: a point and a height, the card faces away from the house
      let cx = 0;
      let cz = 0;
      let n = 0;
      let ground = Infinity;
      let topFloor = b.floors[0];
      for (const f of b.floors) {
        if (f.rooms.length) ground = Math.min(ground, f.elevation);
        if (f.rooms.length && (!topFloor.rooms.length || f.elevation + f.height > topFloor.elevation + topFloor.height)) topFloor = f;
        for (const r of f.rooms) for (const [x, z] of r.points) {
          cx += x;
          cz += z;
          n++;
        }
      }
      if (n) {
        cx /= n;
        cz /= n;
      }
      const dx = holo.x! - cx;
      const dz = holo.z! - cz;
      const len = Math.hypot(dx, dz);
      anchors.push({ p: [holo.x!, (Number.isFinite(ground) ? ground : 0) + (holo.height ?? 3), holo.z!], n: len > 0.01 ? [dx / len, 0, dz / len] : [1, 0, 0], floorId: topFloor.id, size: holo.size, roof: true, views: "house" });
      cards.push({ kind: "main", name: translate(hass, "holo_title"), w: null, dayIds: solarIds, battery: null });
    } else if (pro && anyEnergy && b.floors.some((f) => f.rooms.length)) {
      // no solar field in the plan (a meter and a battery only): the hologram hangs beside the house
      let x1 = -Infinity;
      let z0 = Infinity;
      let z1 = -Infinity;
      let top = 0;
      let topFloor = b.floors[0];
      for (const f of b.floors) {
        for (const r of f.rooms) for (const [x, z] of r.points) {
          x1 = Math.max(x1, x);
          z0 = Math.min(z0, z);
          z1 = Math.max(z1, z);
        }
        if (f.rooms.length && f.elevation + f.height > top) {
          top = f.elevation + f.height;
          topFloor = f;
        }
      }
      anchors.push({ p: [x1 + 0.6, top + 0.4, (z0 + z1) / 2], n: [1, 0, 0], floorId: topFloor.id, size: holo.size, roof: true, views: "house" });
      cards.push({ kind: "main", name: translate(hass, "holo_title"), w: null, dayIds: solarIds, battery: null });
    }
    if (pro && summary.solar !== null) {
      const seen = new Set<string>();
      for (const floor of b.floors) {
        for (const inv of floor.furniture.filter((m) => m.type === "inverter")) {
          // plant_card: false hides a plant's card (the editor's switch)
          if (inv.plant_card === false || seen.has(inv.id)) continue;
          seen.add(inv.id);
          // its card hangs on one of its own fields, preferably not the one the main card hangs on
          const own = fields.filter((f) => inverterOf(f) === inv.id);
          const field = (first && inv.id === mainInverter ? own.find((f) => f.id !== first.id) : null) ?? own[0];
          const sensor = this.furnitureLinks?.get(inv.id)?.power ?? null;
          const anchor = field ? anchorOn(field, 0, 0, holo.size * 0.85) : null;
          if (!anchor || !sensor) continue;
          // its battery: the nearest one on the same floor
          const bat = floor.furniture.filter((m) => m.type === "home_battery").sort((p, q) => Math.hypot(p.x - inv.x, p.z - inv.z) - Math.hypot(q.x - inv.x, q.z - inv.z))[0];
          const socRaw = bat?.soc && bat.soc !== "none" ? Number(hass.states[bat.soc]?.state) : NaN;
          anchors.push(anchor);
          cards.push({
            kind: "plant",
            name: inv.name || furnitureName(hass, inv.type),
            w: Math.max(0, readPower(hass.states[sensor]) ?? 0),
            dayIds: [sensor],
            battery: bat ? { soc: Number.isFinite(socRaw) ? socRaw : null, w: devicePower.get(bat.id) ?? null } : null,
          });
        }
      }
    }
    // device holograms: a small card over every device the editor marked, on its floor and in the house view
    if (pro) {
      for (const floor of b.floors) {
        for (const f of floor.furniture) {
          if (!f.holo) continue;
          const sensor = this.furnitureLinks?.get(f.id)?.power ?? null;
          const c = consumers.find((k) => k.id === f.id);
          if (!sensor && !c) continue;
          // anchors are building coordinates: the floor's elevation plus the device's top on its floor (#151)
          const top = floor.elevation + mountBase(floor, f) + f.h;
          anchors.push({ p: [f.x, top + 0.1, f.z], n: [0, 1, 0], floorId: floor.id, size: holo.size * 0.7, roof: false, views: "all" });
          cards.push({
            kind: "device",
            name: f.name || furnitureName(hass, f.type),
            w: c?.power ?? (sensor ? readPower(hass.states[sensor]) : null),
            dayIds: sensor ? [sensor] : [],
            battery: null,
          });
        }
      }
    }
    // Klang & Kino: a now-playing card over every speaker or media furniture that plays, rings around it,
    // and lines between the members of a multiroom group
    const sound: SoundSource[] = [];
    if (hasFeature("sound")) {
      const seenMedia = new Set<string>();
      const holoSize = (b.settings.roof.hologram ?? DEFAULT_HOLOGRAM).size;
      const add = (floor: Building["floors"][number], id: string, x: number, z: number, top: number, name: string) => {
        const st = hass.states[id];
        if (!st || kindOf(id) !== "media" || seenMedia.has(id)) return;
        seenMedia.add(id);
        // a cloud speaker (Alexa, Google) drops out or reports "idle" for a moment between songs:
        // its last card stands in for a short while instead of blinking away
        const graced = this.mediaGrace.get(id);
        // what it plays: the title, else the app or the source (a receiver on "TV", a speaker on Bluetooth)
        const label = [st.attributes.media_title, st.attributes.app_name, st.attributes.source].find((v): v is string => typeof v === "string" && !!v.trim()) ?? "";
        const showing = !isUnavailable(st) && (st.state === "playing" || (st.state === "paused" && !!label) || (st.state === "on" && !!st.attributes.source));
        if (!showing) {
          if (graced && graced.until > Date.now()) {
            sound.push({ ...graced.source, playing: false, level: 0 });
            anchors.push(graced.anchor);
            cards.push({ ...graced.card, media: { ...graced.card.media!, playing: false } });
            clearTimeout(this.mediaGraceTimer);
            this.mediaGraceTimer = setTimeout(() => this.syncDevices(true), Math.max(500, graced.until - Date.now() + 100));
          } else if (!isUnavailable(st)) {
            this.mediaGrace.delete(id);
            sound.push({ id, floorId: floor.id, x, z, level: 0, playing: false, members: [] });
          }
          return;
        }
        const playing = st.state === "playing";
        const a = st.attributes;
        const vol = typeof a.volume_level === "number" ? Math.min(1, Math.max(0, a.volume_level)) : 0.5;
        const members = Array.isArray(a.group_members) ? (a.group_members as string[]).filter((m) => m !== id) : [];
        sound.push({ id, floorId: floor.id, x, z, level: playing ? 0.3 + 0.7 * vol : 0, playing, members });
        const title = label || translate(hass, "holo_media_playing");
        const anchor = { p: [x, floor.elevation + top + 0.12, z] as [number, number, number], n: [0, 1, 0] as [number, number, number], floorId: floor.id, size: holoSize * 0.7, roof: false, views: "all" as const };
        const card: HoloCard = {
          kind: "media",
          name,
          w: null,
          dayIds: [],
          battery: null,
          media: { id, title, artist: typeof a.media_artist === "string" ? a.media_artist : typeof a.media_album_name === "string" ? a.media_album_name : "", picture: typeof a.entity_picture === "string" ? a.entity_picture : null, volume: Math.round(vol * 100), playing },
        };
        anchors.push(anchor);
        cards.push(card);
        this.mediaGrace.set(id, { until: Date.now() + 45000, card, source: sound[sound.length - 1], anchor });
      };
      // one card per player: furniture linked to it by hand first (a wall speaker given the Echo Show),
      // then a device placed in the plan, then furniture that found the player by itself
      const furn = (floor: Building["floors"][number], byHand: boolean) => {
        for (const f of floor.furniture) {
          if ((f.entity != null && f.entity !== "none") !== byHand) continue;
          const e = this.furnitureLinks?.get(f.id)?.entity;
          if (e) add(floor, e, f.x, f.z, mountBase(floor, f) + f.h, f.name || furnitureName(hass, f.type));
        }
      };
      for (const floor of b.floors) furn(floor, true);
      for (const floor of b.floors) for (const pl of floor.placements) add(floor, pl.entity_id, pl.x, pl.z, pl.y ?? 1.1, pl.name || entityName(hass, pl.entity_id));
      for (const floor of b.floors) furn(floor, false);
    }
    // Auto Pro: a glass card over the car in its spot, in the same look as the energy and music cards
    if (hasFeature("auto_pro")) {
      const holoSize = (b.settings.roof.hologram ?? DEFAULT_HOLOGRAM).size;
      for (const floor of b.floors) {
        for (const f of floor.furniture) {
          if (f.type !== "parking" || !f.car) continue;
          const vehicle = parkedVehicle(hass, f);
          if (!vehicle) continue;
          const car = carState(hass, f);
          if (car.soc === null && car.range === null && car.locked === null && car.climateOn === null) continue;
          const veh = vehicleFurniture(f, vehicle);
          const top = mountBase(floor, f) + (veh?.h ?? 1.6);
          anchors.push({ p: [f.x, floor.elevation + top + 0.25, f.z], n: [0, 1, 0], floorId: floor.id, size: holoSize * 0.7, roof: false, views: "all" });
          const e = car.entities;
          cards.push({
            kind: "car",
            name: f.name || furnitureName(hass, vehicle),
            w: null,
            dayIds: [],
            battery: null,
            car: {
              spot: f.id,
              soc: car.soc,
              range: car.range,
              rangeUnit: car.rangeUnit,
              chargingW: car.chargingW,
              charging: car.charging,
              locked: car.locked,
              climateOn: car.climateOn,
              lock: e.lock,
              climate: e.climate,
              charge: e.charging && /^(switch|input_boolean)\./.test(e.charging) ? e.charging : null,
            },
          });
        }
      }
    }
    v.setSound(sound);
    v.setAnchors(anchors);
    if (JSON.stringify(cards) !== JSON.stringify(this._holos)) this._holos = cards;
    // the modules live with their production (at night, and without Pro, they rest)
    v.setSolarLevels(powers && !this.dimmed ? fieldLevels(b, powers) : new Map());
    v.setFlows(
      !pro || !(this.flows ?? this._flows) || this.dimmed
        ? []
        : flowSegments({ building: b, consumers, summary, battery: batteryPlaced ?? null, fieldPower: powers, devicePower: this.devicePowers(hass, b) }).map((f) => ({
        floorId: f.floorId,
        a: f.a,
        b: f.b,
        dist: f.dist,
        power: f.power,
        color: flowColor(f.kind, summary),
      })),
    );
    const persons = SHOW_PRESENCE ? personsInRooms(hass, b) : [];
    v.setPersons(persons);
    const counts = floorCounts(hass, b, this.openingLinks!, persons);
    v.setFloorInfo(new Map([...counts].map(([id, c]) => [id, floorInfoText(hass, c)])));
    // daylight: sun through the windows and a lighter sky
    const sun = hass.states["sun.sun"]?.attributes;
    const elevation = typeof sun?.elevation === "number" ? sun.elevation : null;
    v.setSun(elevation !== null && typeof sun?.azimuth === "number" ? { elevation, azimuth: sun.azimuth } : null);
    // the weather outside: clouds darken the sky, rain, snow and fog fall over the plot
    const raw = this.weather && !this.dimmed && hasFeature("weather") ? weatherState(hass, weatherEntity(hass, this.weatherEntityId ?? b.settings.weather_entity)) : null;
    const weather = raw ? limitEffects(raw, b.settings.weather_effects) : null;
    this.cloud = weather?.cloud ?? 0;
    this._sky = (elevation === null ? 0 : Math.min(1, Math.max(0, (elevation + 4) / 16))) * (1 - 0.45 * this.cloud);
    // with the feature on, the viewer always gets the weather (the sun and moon disc shows on clear days too)
    const disc = weather ? weather.sky : (b.settings.weather_effects ?? ["sky"]).includes("sky");
    v.setWeather(this.weather && !this.dimmed && hasFeature("weather") ? { ...(weather ?? { rain: 0, snow: 0, fog: 0, cloud: 0, wind: 0 }), sky: this.skyColor(), disc } : null);
    this.watchLightning(!!weather?.lightning);
    this.applyTint();
    const hasEnergy = summary.grid !== null || summary.solar !== null || summary.battery !== null || summary.tariff !== null;
    const energy = hasEnergy ? summary : null;
    // a new object would make Lit render again; only changed values do
    if (JSON.stringify(energy) !== JSON.stringify(this._energy)) this._energy = energy;
    const wallboxW = consumers.some((c) => c.wallbox) ? consumers.filter((c) => c.wallbox).reduce((s, c) => s + c.power, 0) : null;
    // several plants (a big roof plant and a balcony plant): each inverter's own power
    const plants = b.floors
      .flatMap((f) => f.furniture.filter((m) => m.type === "inverter"))
      .map((m) => {
        const sensor = this.furnitureLinks?.get(m.id)?.power;
        const w = sensor ? readPower(hass.states[sensor]) : null;
        return w === null ? null : { name: m.name || furnitureName(hass, m.type), w: Math.max(0, w) };
      })
      .filter((p): p is { name: string; w: number } => !!p);
    if (JSON.stringify(plants) !== JSON.stringify(this._plants)) this._plants = plants;
    if (wallboxW !== this._wallboxW) this._wallboxW = wallboxW;
    // the holograms' day curves: the sensors' statistics, fetched now and then while the sun is watched
    this.watchSolarDay([...new Set(cards.flatMap((c) => c.dayIds))]);
  }

  /** The inverters' and batteries' own power (W, a battery positive = discharging) by furniture id. */
  private devicePowers(hass: HomeAssistant, b: Building): Map<string, number> {
    const out = new Map<string, number>();
    for (const floor of b.floors) {
      for (const f of floor.furniture) {
        if (f.type !== "inverter" && f.type !== "home_battery") continue;
        const sensor = this.furnitureLinks?.get(f.id)?.power;
        // a battery with a separate charging sensor: the power sensor is its discharging, the charging is taken
        // off and the signs do not matter; a single signed sensor is inverted on request
        const charge = f.type === "home_battery" && f.charge && f.charge !== "none" ? readPower(hass.states[f.charge]) : null;
        let p = sensor ? readPower(hass.states[sensor], f.type === "home_battery" && b.energy.battery_invert && charge === null) : null;
        if (p !== null && charge !== null) p = Math.max(0, p) - Math.max(0, charge);
        else if (p === null && charge !== null) p = -Math.max(0, charge);
        if (p !== null) out.set(f.id, p);
      }
    }
    return out;
  }

  /**
   * Kamera-Cockpit: a pin in front of every camera for each detection its sensors report right now
   * (a person, a vehicle, an animal, motion – Frigate, UniFi Protect, Reolink and the like), with the time.
   */
  private detectionPins(hass: HomeAssistant, markers: DeviceMarker[]) {
    const out: (DeviceMarker & { pin: boolean })[] = [];
    for (const cam of markers) {
      if (!cam.model?.startsWith("camera")) continue;
      // a detection stays as a pin for two minutes after the sensor dropped back (Reolink and the like hold it
      // only for seconds), with the time it was seen
      const now = Date.now();
      const active = cameraMotionSensors(hass, cam.id).filter((id) => {
        const st = hass.states[id];
        if (!st) return false;
        if (st.state === "on") return true;
        return st.state === "off" && !!st.last_changed && now - Date.parse(st.last_changed) < DETECT_LINGER_MS;
      });
      // one pin per kind (a person and a car at the same time), the plain motion only when nothing else is seen
      const kinds = new Map<string, string>();
      for (const id of active) {
        const kind = detectionKind(hass, id);
        if (!kinds.has(kind)) kinds.set(kind, id);
      }
      if (kinds.size > 1) kinds.delete("motion");
      const a = ((cam.rotation ?? 0) * Math.PI) / 180;
      const dir: [number, number] = [-Math.sin(a), Math.cos(a)];
      const dome = cam.model === "camera_ceiling";
      let n = 0;
      for (const [kind, id] of kinds) {
        const st = hass.states[id];
        const since = st?.last_changed ? trailTime(hass, Date.parse(st.last_changed)) : "";
        out.push({
          id: `detect:${id}`,
          floorId: cam.floorId,
          roomId: cam.roomId,
          x: cam.x + (dome ? 0 : dir[0] * 1.1),
          z: cam.z + (dome ? 0 : dir[1] * 1.1),
          y: 1.4 + 0.4 * n++,
          icon: DETECT_ICONS[kind] ?? DETECT_ICONS.motion,
          name: entityName(hass, id),
          text: `${translate(hass, `detect_${kind}` as I18nKey)}${since ? ` · ${since}` : ""}`,
          active: true,
          unavailable: false,
          glow: null,
          pin: true,
        });
      }
    }
    return out;
  }

  /** The pin at the street: grid import or export right now. */
  private gridPin(hass: HomeAssistant, b: Building, grid: number) {
    const g = gridPoint(b);
    if (!g) return null;
    const idle = Math.abs(grid) < 5;
    return {
      id: "grid",
      floorId: g.floorId,
      roomId: null,
      x: g.end[0],
      z: g.end[1],
      y: 0.9,
      icon: GRID_ICON,
      name: translate(hass, "holo_grid"),
      text: idle ? formatPower(hass, 0) : `${translate(hass, grid < 0 ? "energy_grid_export" : "energy_grid_import")} ${formatPower(hass, Math.abs(grid))}`,
      active: !idle,
      unavailable: false,
      glow: null,
      pin: true,
    };
  }

  /** Fetch today's solar statistics every five minutes while there are sensors to watch (none: the curve goes). */
  private watchSolarDay(ids: string[]): void {
    const key = ids.join(",");
    if (key === this.holoIds) return;
    this.holoIds = key;
    clearInterval(this.holoTimer);
    this.holoTimer = undefined;
    if (!ids.length) {
      this._rows = null;
      return;
    }
    const fetch = async () => {
      if (!this.hass || document.hidden) return;
      const rows = await fetchSolarRows(this.hass, ids);
      if (this.holoIds === key) this._rows = rows;
    };
    void fetch();
    this.holoTimer = setInterval(() => void fetch(), 300000);
  }

  /**
   * Hangs a hologram card on its anchor (called by the viewer after every frame): a thin line rises from
   * the solar field to the card's lower left corner; the card keeps its size in the world and, seen from
   * behind the field, shows its back (mirrored).
   */
  private placeHolo(index: number, x: number, y: number, on: boolean, scale: number, facing: boolean): void {
    const el = this.renderRoot.querySelector<HTMLElement>(`.fp3d-holo[data-holo="${index}"]`);
    const link = this.renderRoot.querySelector<SVGSVGElement>(`.fp3d-holo-link[data-holo="${index}"]`);
    const main = this._holos[index]?.kind === "main";
    if (!el) {
      if (main && this._holoOn) this._holoOn = false;
      return;
    }
    if (main && on !== this._holoOn) this._holoOn = on;
    const hidden = !on;
    if (el.hidden !== hidden) el.hidden = hidden;
    if (link && link.hasAttribute("hidden") !== hidden) link.toggleAttribute("hidden", hidden);
    if (!on) return;
    const s = scale * 0.8;
    const dx = 34 * s;
    const dy = 46 * s;
    // the card's lower left corner (lower right when it is mirrored) sits up and to the side of the anchor
    const cx = x + (facing ? dx : -dx);
    const cy = y - dy;
    el.style.transform = `translate(${cx.toFixed(1)}px, ${cy.toFixed(1)}px) scale(${(facing ? s : -s).toFixed(3)}, ${s.toFixed(3)}) translate(0, -100%)`;
    if (link) {
      const line = link.firstElementChild as SVGLineElement | null;
      const dot = link.lastElementChild as SVGCircleElement | null;
      line?.setAttribute("x1", x.toFixed(1));
      line?.setAttribute("y1", y.toFixed(1));
      line?.setAttribute("x2", cx.toFixed(1));
      line?.setAttribute("y2", cy.toFixed(1));
      dot?.setAttribute("cx", x.toFixed(1));
      dot?.setAttribute("cy", y.toFixed(1));
    }
  }

  /**
   * Energie Pro: the glass holograms – the house's balance on the main field and one card per further
   * plant (house view), and the device cards (house and floor view). The viewer hides every card whose
   * anchor is not in view, so every card renders, in the anchors' order.
   */
  private renderHologram() {
    const e = this._energy;
    // the editor keeps the energy bar off but asks for the holograms in its energy tool
    if (!(hasFeature("energy_pro") || hasFeature("sound") || hasFeature("auto_pro")) || this.roomId || !(this.showEnergy || this.holograms) || !this.holoVisible()) return nothing;
    const plants = !!e && (e.solar !== null || e.grid !== null || e.battery !== null) && this.floorId === null;
    return this._holos.map((card, i) => (card.kind === "car" ? this.renderCarCard(card, i) : card.kind === "media" ? this.renderMediaCard(card, i) : card.kind === "device" ? this.renderDeviceCard(card, i) : plants ? this.renderHoloCard(card, i, e!) : nothing));
  }

  /** Auto Pro: the car's card – charge as a bar in its colour, range, charging power, lock and climate buttons. */
  private renderCarCard(card: HoloCard, index: number) {
    const hass = this.hass;
    const t = (k: Parameters<typeof translate>[1]) => translate(hass, k);
    const c = card.car!;
    const open = !this.mediaFolded.has(c.spot);
    const toggle = () => {
      if (this.mediaFolded.has(c.spot)) this.mediaFolded.delete(c.spot);
      else this.mediaFolded.add(c.spot);
      this.requestUpdate();
    };
    const svc = (domain: string, service: string, id: string) => void hass.callService(domain, service, { entity_id: id });
    const onOff = (id: string, on: boolean) => (id.startsWith("climate.") ? svc("climate", on ? "turn_on" : "turn_off", id) : svc("homeassistant", on ? "turn_on" : "turn_off", id));
    const lockTap = () => {
      if (!c.lock) return;
      const isLock = c.lock.startsWith("lock.");
      if (c.locked) {
        if (!confirm(t("car_unlock_confirm"))) return;
        if (isLock) svc("lock", "unlock", c.lock);
        else svc("homeassistant", "turn_off", c.lock);
      } else if (isLock) svc("lock", "lock", c.lock);
      else svc("homeassistant", "turn_on", c.lock);
    };
    const col = c.soc === null ? "#37e0ff" : c.soc >= 50 ? "#4dff80" : c.soc >= 20 ? "#ffcc40" : "#ff4d40";
    const lockable = !!c.lock && /^(lock|input_boolean|switch)\./.test(c.lock);
    const climable = !!c.climate && /^(climate|switch|input_boolean)\./.test(c.climate);
    return html`<svg class="fp3d-holo-link" data-holo=${index} hidden aria-hidden="true"><line x1="0" y1="0" x2="0" y2="0" /><circle cx="0" cy="0" r="3" /></svg>
      <div class="fp3d-holo fp3d-holo-dev fp3d-holo-car ${open ? "" : "fp3d-holo-min"} ${this._low ? "fp3d-holo-plain" : ""}" data-holo=${index} hidden role="group" aria-label=${card.name}>
        <div class="fp3d-holo-sheen"></div>
        <div class="fp3d-holo-scan"></div>
        <div class="fp3d-holo-body">
          <div class="fp3d-holo-head" role="button" tabindex="0" @click=${toggle}>
            <span>🚗 ${card.name}</span><span class="fp3d-holo-live">${c.charging ? `⚡ ${t("car_charging_short")}` : c.locked === null ? "" : c.locked ? "🔒" : "🔓"}</span>
          </div>
          <div class="fp3d-holo-car-main">
            <b style="color:${col}">${c.soc !== null ? `${Math.round(c.soc)} %` : "–"}</b>
            <span>${c.range !== null ? `${formatNumber(hass, c.range, 0)} ${c.rangeUnit}` : ""}${c.charging && c.chargingW ? ` · ${formatPower(hass, c.chargingW)}` : ""}</span>
          </div>
          ${c.soc !== null ? html`<div class="fp3d-holo-car-bar"><i style="width:${Math.max(2, Math.min(100, c.soc))}%;background:${col}"></i></div>` : nothing}
          ${open && (lockable || climable || c.charge)
            ? html`<div class="fp3d-holo-media-controls fp3d-holo-car-controls">
                ${lockable ? html`<button title=${c.locked ? t("car_unlock_btn") : t("car_lock_btn")} @click=${lockTap}>${c.locked ? "🔒" : "🔓"}</button>` : nothing}
                ${climable ? html`<button class=${c.climateOn ? "fp3d-holo-on" : ""} title=${t("car_climate")} @click=${() => onOff(c.climate!, !c.climateOn)}>❄</button>` : nothing}
                ${c.charge ? html`<button class=${c.charging ? "fp3d-holo-on" : ""} title=${t("car_charging")} @click=${() => onOff(c.charge!, !c.charging)}>⚡</button>` : nothing}
              </div>`
            : nothing}
        </div>
      </div>`;
  }

  /** Klang & Kino: what a speaker plays – cover, title, artist, volume, with play/pause, previous and next. */
  private renderMediaCard(card: HoloCard, index: number) {
    const hass = this.hass;
    const t = (k: Parameters<typeof translate>[1]) => translate(hass, k);
    const m = card.media!;
    const open = !this.mediaFolded.has(m.id);
    const toggle = () => {
      if (this.mediaFolded.has(m.id)) this.mediaFolded.delete(m.id);
      else this.mediaFolded.add(m.id);
      this.requestUpdate();
    };
    const call = (service: string, data: Record<string, unknown> = {}) => void hass.callService("media_player", service, { entity_id: m.id, ...data });
    // the dragged volume shows at once and is sent while dragging (at most every 350 ms) and on release;
    // it stays until the player reports it (a cloud speaker like an Echo answers late), at most 30 s
    const local = this.mediaVolume.get(m.id);
    if (local && (Math.abs(local.v - m.volume) <= 2 || Date.now() - local.at > 30000)) this.mediaVolume.delete(m.id);
    const volume = this.mediaVolume.get(m.id)?.v ?? m.volume;
    const setVolume = (v: number, last: boolean) => {
      this.mediaVolume.set(m.id, { v, at: Date.now() });
      this.requestUpdate();
      if (last || Date.now() - this.volumeSent > 350) {
        this.volumeSent = Date.now();
        call("volume_set", { volume_level: v / 100 });
      }
    };
    return html`<svg class="fp3d-holo-link" data-holo=${index} hidden aria-hidden="true"><line x1="0" y1="0" x2="0" y2="0" /><circle cx="0" cy="0" r="3" /></svg>
      <div class="fp3d-holo fp3d-holo-dev fp3d-holo-media ${open ? "" : "fp3d-holo-min"} ${this._low ? "fp3d-holo-plain" : ""}" data-holo=${index} hidden role="group" aria-label=${card.name}>
      <div class="fp3d-holo-sheen"></div>
      <div class="fp3d-holo-scan"></div>
      <div class="fp3d-holo-body">
        <div class="fp3d-holo-head" role="button" tabindex="0" @click=${toggle}><span>♪ ${card.name}</span><span class="fp3d-holo-live">${m.playing ? `● ${t("holo_media_playing")}` : t("holo_media_paused")}</span></div>
        <div class="fp3d-holo-track">
          ${m.picture ? html`<img class="fp3d-holo-cover" src=${m.picture} alt="" />` : html`<span class="fp3d-holo-cover fp3d-holo-cover-none">♪</span>`}
          <div class="fp3d-holo-titles"><b>${m.title}</b>${m.artist ? html`<span>${m.artist}</span>` : nothing}</div>
        </div>
        ${open
          ? html`<div class="fp3d-holo-media-controls">
                <button aria-label=${t("previous")} @click=${() => call("media_previous_track")}>⏮</button>
                <button aria-label=${t("play_pause")} @click=${() => call("media_play_pause")}>${m.playing ? "⏸" : "▶"}</button>
                <button aria-label=${t("next")} @click=${() => call("media_next_track")}>⏭</button>
                <input
                  type="range"
                  min="0"
                  max="100"
                  .value=${String(volume)}
                  aria-label=${t("volume")}
                  @input=${(e: Event) => setVolume(Number((e.target as HTMLInputElement).value), false)}
                  @change=${(e: Event) => setVolume(Number((e.target as HTMLInputElement).value), true)}
                />
                <span class="fp3d-holo-vol">${volume} %</span>
              </div>`
          : nothing}
      </div>
    </div>`;
  }

  /** A device's card: its power now, today's consumption and the day curve from its sensor's statistics. */
  private renderDeviceCard(card: HoloCard, index: number) {
    const hass = this.hass;
    const t = (k: Parameters<typeof translate>[1]) => translate(hass, k);
    const open = !this.holoFolded.has(index);
    const day = this.dayOf(card);
    const curve = day && day.curve.length > 1 ? solarCurvePath(day.curve, day.peak) : null;
    const toggle = () => {
      if (this.holoFolded.has(index)) this.holoFolded.delete(index);
      else this.holoFolded.add(index);
      this.requestUpdate();
    };
    return html`<svg class="fp3d-holo-link" data-holo=${index} hidden aria-hidden="true"><line x1="0" y1="0" x2="0" y2="0" /><circle cx="0" cy="0" r="3" /></svg>
      <div class="fp3d-holo fp3d-holo-dev ${open ? "" : "fp3d-holo-min"} ${this._low ? "fp3d-holo-plain" : ""}" data-holo=${index} hidden role="button" tabindex="0" aria-label=${card.name} @click=${toggle}>
      <div class="fp3d-holo-sheen"></div>
      <div class="fp3d-holo-scan"></div>
      <div class="fp3d-holo-body">
        <div class="fp3d-holo-head"><span>⚡ ${card.name}</span><span class="fp3d-holo-live">● ${t("holo_live")}</span></div>
        <div class="fp3d-holo-big"><b>${formatPower(hass, card.w ?? 0)}</b><span>${t("holo_dev_now")}</span></div>
        ${open && day ? html`<div class="fp3d-holo-sub">${t("holo_today")} <b>${formatNumber(hass, day.kwh, 1)} kWh</b> · ${t("holo_peak")} <b>${formatPower(hass, day.peak)}</b></div>` : nothing}
        ${open && curve
          ? svg`<svg class="fp3d-holo-curve" viewBox="0 0 220 44" width="156" height="30">
              <defs><linearGradient id="fp3dHoloG${index}" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#7fe8ff" stop-opacity=".5"/><stop offset="1" stop-color="#7fe8ff" stop-opacity="0"/></linearGradient></defs>
              <path d="${curve.area}" fill="url(#fp3dHoloG${index})"/>
              <path d="${curve.line}" fill="none" stroke="#a8f0ff" stroke-width="2"/>
              <circle cx="${curve.endX}" cy="${curve.endY}" r="3.5" fill="#fff" stroke="#7fe8ff" stroke-width="2"/>
              <line x1="0" y1="43.5" x2="220" y2="43.5" stroke="rgba(160,240,255,.35)"/>
            </svg>`
          : nothing}
      </div>
    </div>`;
  }

  /** Today's curve of a card from the fetched statistics of its sensors. */
  private dayOf(card: HoloCard) {
    if (!this._rows || !card.dayIds.length) return null;
    const rows = Object.fromEntries(card.dayIds.filter((id) => this._rows![id]).map((id) => [id, this._rows![id]]));
    return Object.keys(rows).length ? solarDayFromStats(rows) : null;
  }

  private renderHoloCard(card: HoloCard, index: number, e: EnergySummary) {
    const hass = this.hass;
    const t = (k: Parameters<typeof translate>[1]) => translate(hass, k);
    const open = !this.holoFolded.has(index);
    const day = this.dayOf(card);
    const main = card.kind === "main";
    const autarky = main && e.consumption !== null && e.consumption > 0 ? Math.round(Math.min(100, Math.max(0, (1 - Math.max(0, e.grid ?? 0) / e.consumption) * 100))) : null;
    const curve = day && day.curve.length > 1 ? solarCurvePath(day.curve, day.peak) : null;
    const nowX = ((new Date().getHours() + new Date().getMinutes() / 60) / 24) * 220;
    const toggle = () => {
      if (this.holoFolded.has(index)) this.holoFolded.delete(index);
      else this.holoFolded.add(index);
      this.requestUpdate();
    };
    const big = main ? (e.solar ?? e.consumption ?? 0) : (card.w ?? 0);
    const bat = main ? (e.battery !== null || e.soc !== null ? { soc: e.soc, w: e.battery } : null) : card.battery;
    return html`<svg class="fp3d-holo-link" data-holo=${index} hidden aria-hidden="true"><line x1="0" y1="0" x2="0" y2="0" /><circle cx="0" cy="0" r="3" /></svg>
      <div class="fp3d-holo ${open ? "" : "fp3d-holo-min"} ${this._low ? "fp3d-holo-plain" : ""}" data-holo=${index} hidden role="button" tabindex="0" aria-label=${card.name} @click=${toggle}>
      <div class="fp3d-holo-sheen"></div>
      <div class="fp3d-holo-scan"></div>
      <div class="fp3d-holo-body">
        <div class="fp3d-holo-head"><span>☀ ${card.name}</span><span class="fp3d-holo-live">● ${t("holo_live")}</span></div>
        <div class="fp3d-holo-big"><b>${formatPower(hass, big)}</b><span>${t(main && e.solar === null ? "holo_house_now" : "holo_pv_now")}</span></div>
        ${open
          ? html`${main && this._plants.length > 1
                ? html`<div class="fp3d-holo-plants">${this._plants.map((p) => html`<span>${p.name}</span><b>${formatPower(hass, p.w)}</b>`)}</div>`
                : nothing}
              ${day
                ? html`<div class="fp3d-holo-sub">${t("holo_today")} <b>${formatNumber(hass, day.kwh, 1)} kWh</b> · ${t("holo_peak")} <b>${formatPower(hass, day.peak)}</b></div>`
                : nothing}
              ${curve
                ? svg`<svg class="fp3d-holo-curve" viewBox="0 0 220 44" width="208" height="38">
                    <defs><linearGradient id="fp3dHoloG${index}" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#ffd75a" stop-opacity=".5"/><stop offset="1" stop-color="#ffd75a" stop-opacity="0"/></linearGradient></defs>
                    <path d="${curve.area}" fill="url(#fp3dHoloG${index})"/>
                    <path d="${curve.line}" fill="none" stroke="#ffe27a" stroke-width="2"/>
                    <circle cx="${curve.endX}" cy="${curve.endY}" r="3.5" fill="#fff" stroke="#ffd75a" stroke-width="2"/>
                    <line x1="0" y1="43.5" x2="220" y2="43.5" stroke="rgba(160,240,255,.35)"/>
                    <line x1="${nowX}" y1="2" x2="${nowX}" y2="43" stroke="rgba(160,240,255,.18)" stroke-dasharray="2 3"/>
                  </svg>`
                : nothing}
              <div class="fp3d-holo-grid">
                ${bat
                  ? html`<div class="fp3d-holo-cell fp3d-holo-bat">
                      ${t("holo_battery")}<br /><b>${bat.soc !== null ? `${Math.round(bat.soc)} %` : formatPower(hass, Math.abs(bat.w ?? 0))}</b>
                      ${bat.w !== null && Math.abs(bat.w) >= 5 ? html`<span>${bat.w < 0 ? "▲" : "▼"} ${formatPower(hass, Math.abs(bat.w))}</span>` : nothing}
                    </div>`
                  : nothing}
                ${main && e.grid !== null
                  ? html`<div class="fp3d-holo-cell ${e.grid < -5 ? "fp3d-holo-exp" : "fp3d-holo-imp"}">
                      ${t("holo_grid")}<br /><b>${formatPower(hass, Math.abs(e.grid))}</b> <span>${Math.abs(e.grid) < 5 ? "" : t(e.grid < 0 ? "energy_grid_export" : "energy_grid_import")}</span>
                    </div>`
                  : nothing}
                ${main && e.consumption !== null ? html`<div class="fp3d-holo-cell fp3d-holo-house">${t("holo_house")}<br /><b>${formatPower(hass, e.consumption)}</b></div>` : nothing}
                ${main && this._wallboxW !== null ? html`<div class="fp3d-holo-cell fp3d-holo-wb">${t("holo_wallbox")}<br /><b>${formatPower(hass, this._wallboxW)}</b></div>` : nothing}
              </div>
              ${autarky !== null
                ? html`<div class="fp3d-holo-bar"><div style="width:${autarky}%"></div></div>
                    <div class="fp3d-holo-foot"><span>${t("holo_autarky")}</span><b>${autarky} %</b></div>`
                : nothing}`
          : nothing}
      </div>
    </div>`;
  }

  /** New warnings start the pulse (and a jump to the room when wanted); none stops it. */
  private setAlerts(alerts: Alert[]): void {
    const keys = alerts.map((a) => `${a.kind}:${a.entity}`);
    const fresh = alerts.filter((_, i) => !this.seenAlerts.has(keys[i]));
    this.seenAlerts = new Set(keys);
    if (keys.join() !== this._alerts.map((a) => `${a.kind}:${a.entity}`).join()) this._alerts = alerts;
    if (alerts.length && !this.alertTimer) this.alertTimer = setInterval(() => !document.hidden && this.applyTint(), this._low ? 200 : 100);
    if (!alerts.length && this.alertTimer) {
      clearInterval(this.alertTimer);
      this.alertTimer = undefined;
    }
    if (fresh.length && this.alertJump) this.jumpTo(fresh[0]);
  }

  /** Show where a warning is: its floor and room, or the house for an alarm. */
  private jumpTo(a: Alert): void {
    if (!a.floorId) {
      this.fire("floor-tap", { floorId: null });
      return;
    }
    if (this.floorId !== a.floorId) this.fire("floor-tap", { floorId: a.floorId });
    // the host switches the floor first; the room follows once it has rendered
    if (a.roomId) setTimeout(() => this.fire("room-tap", { floorId: a.floorId, roomId: a.roomId }), 60);
  }

  /** Double tap on a room: all its lights off when one is on, otherwise all on. */
  private onRoomDoubleTap(floorId: string, roomId: string): void {
    const b = this.building;
    const hass = this.hass;
    const floor = b?.floors.find((f) => f.id === floorId);
    const room = floor?.rooms.find((r) => r.id === roomId);
    if (!b || !hass || !floor || !room) return;
    const ids = new Set(areaEntities(hass, room.area_id).filter((id) => kindOf(id) === "light"));
    for (const p of floor.placements) if (kindOf(p.entity_id) === "light" && pointInPolygon([p.x, p.z], room.points)) ids.add(p.entity_id);
    for (const f of floor.furniture) {
      const e = this.furnitureLinks.get(f.id)?.entity;
      if (e && isLamp(f.type) && pointInPolygon([f.x, f.z], room.points)) ids.add(e);
    }
    // devices that ask before switching stay out of the all-at-once toggle
    const lights = [...ids].filter((id) => !this.confirmSet.has(id));
    if (!lights.length) return;
    const anyOn = lights.some((id) => hass.states[id]?.state === "on");
    void hass.callService("homeassistant", anyOn ? "turn_off" : "turn_on", { entity_id: lights });
    this.roomFlash = { roomId, until: performance.now() + 350 };
    this.applyTint();
    setTimeout(() => {
      this.roomFlash = null;
      this.applyTint();
    }, 380);
  }

  private runScene(id: string): void {
    void this.hass.callService(id.split(".")[0], "turn_on", { entity_id: id });
    this._sceneFired = id;
    setTimeout(() => (this._sceneFired = null), 600);
  }

  /**
   * Floor colours of the rooms: the heatmap, the pulsing rooms of warnings and the flash of a double
   * tap; sent to the viewer only when they changed.
   */
  private applyTint(): void {
    const v = this.viewer;
    const b = this.building;
    const hass = this.hass;
    if (!v || !b || !hass) return;
    let tint: Map<string, [number, number, number]> | null = null;
    if (this.heatMode !== "none" && this.heatMode !== "values") {
      const mode = this.heatMode;
      const values = roomValues(hass, b, mode);
      this.heatValues = values;
      tint = new Map([...values].map(([id, value]) => [id, heatColor(mode, value)]));
    }
    // "values": the numbers at the room names instead of coloured floors
    const info = new Map<string, string>();
    if (this.heatMode === "values") {
      for (const floor of b.floors)
        for (const room of floor.rooms) {
          const t = roomClimateValue(hass, floor, room, "temperature");
          const h = roomClimateValue(hass, floor, room, "humidity");
          const c = roomClimateValue(hass, floor, room, "co2");
          const parts = [
            t !== null ? `${formatNumber(hass, fromCelsius(hass, t), 1)} ${tempUnit(hass)}` : null,
            h !== null ? `${formatNumber(hass, h, 0)} %` : null,
            c !== null ? `${formatNumber(hass, c, 0)} ppm` : null,
          ].filter((x): x is string => !!x);
          if (parts.length) info.set(room.id, parts.join(" · "));
        }
    }
    v.setRoomInfo(info);
    if (this._alerts.length) {
      tint ??= new Map();
      const k = 0.55 + 0.45 * Math.sin(performance.now() / 160);
      for (const a of this._alerts) {
        const c = alertColor(a.kind).map((x) => x * k) as [number, number, number];
        if (a.roomId) tint.set(a.roomId, c);
        else for (const f of b.floors) for (const r of f.rooms) tint.set(r.id, c);
      }
    }
    if (this.roomFlash && performance.now() < this.roomFlash.until) {
      tint ??= new Map();
      tint.set(this.roomFlash.roomId, [0.9, 0.95, 1]);
    }
    const sig = tint ? [...tint].map(([id, c]) => `${id}:${c.map((x) => x.toFixed(2)).join(",")}`).join(";") : "";
    if (sig === this.tintSig) return;
    this.tintSig = sig;
    v.setRoomTint(tint);
  }

  /**
   * Markers, energy consumers and lit screens of furniture with linked entities. Entities that are
   * placed as devices as well keep their device marker.
   */
  private furnitureMarkers(
    hass: HomeAssistant,
    b: Building,
    taken: Set<string>,
    consumerSensors: Set<string>,
  ): { markers: (DeviceMarker & { fromFurniture: boolean; energyDevice?: boolean })[]; consumers: Consumer[]; screens: Map<string, ScreenState>; targets: Map<string, string> } {
    const markers: (DeviceMarker & { fromFurniture: boolean; energyDevice?: boolean })[] = [];
    const consumers: Consumer[] = [];
    const screens = new Map<string, ScreenState>();
    const targets = new Map<string, string>();
    for (const floor of b.floors) {
      for (const f of floor.furniture) {
        const linked = this.furnitureLinks.get(f.id);
        // furniture with a state: a glowing plate on the item while its entity is on, occupied or home;
        // two entities light the halves (left/right of a bed, bottom/top of a bunk bed)
        const faces = this.stateFaces(hass, f);
        if (faces.length) screens.set(f.id, { color: faces[0].color, level: faces[0].level, faces });
        if (isLamp(f.type)) {
          markers.push(this.lampMarker(hass, floor, f, linked?.entity ?? null));
          continue;
        }
        // a home battery with only its charge, a wallbox with only its status still gets its marker;
        // a parking spot with Auto Pro data gets one even without a presence sensor
        const autoPro = f.type === "parking" && hasFeature("auto_pro") && !!f.car;
        const car = autoPro ? carState(hass, f) : null;
        const extraRef = f.type === "home_battery" ? f.soc : f.type === "wallbox" ? f.status : f.type === "parking" && car ? (f.car?.device ?? car.entities.soc) : null;
        const extra = extraRef && extraRef !== "none" ? extraRef : null;
        const link = linked ?? (extra ? { entity: null, power: null } : undefined);
        if (!link) continue;
        // a battery goes by its charge first: its power sensor is often placed on its own as well
        const id = (f.type === "home_battery" ? (extra ?? link.entity ?? link.power) : (link.entity ?? link.power ?? extra))!;
        targets.set(f.id, id);
        const st = link.entity ? hass.states[link.entity] : undefined;
        // the meter's sensor is the grid (+ = import), the battery's can point the other way as well
        const invert = f.type === "meter" ? b.energy.grid_invert && !f.export : f.type === "home_battery" ? b.energy.battery_invert && !f.charge : false;
        let power = link.power ? readPower(hass.states[link.power], invert) : null;
        // separate second sensors: a battery's charging, a meter's export (then the first one is unsigned)
        const second = (f.type === "home_battery" && f.charge && f.charge !== "none" ? f.charge : f.type === "meter" && f.export && f.export !== "none" ? f.export : null) as string | null;
        const secondW = second ? readPower(hass.states[second]) : null;
        if (secondW !== null) power = Math.max(0, power ?? 0) - Math.max(0, secondW);
        if (link.power && power !== null && !consumerSensors.has(link.power)) {
          consumerSensors.add(link.power);
          consumers.push({ id, powerEntity: link.power, floorId: floor.id, x: f.x, z: f.z, power: Math.max(0, power), wallbox: f.type === "wallbox" || undefined });
        }
        const running = (power ?? 0) > 10 || st?.state === "on" || st?.state === "running" || (isStatusSensor(st) && isActive(st));
        // Auto Pro: the vehicle in the spot wears a light band in the colour of its charge (brighter while
        // charging) and a warm glow on top while the climate runs; the spot's pin tells charge and range
        if (car && parkedVehicle(hass, f)) {
          const faces: NonNullable<ScreenState["faces"]> = [];
          if (car.soc !== null) {
            const col: [number, number, number] = car.soc >= 50 ? [0.3, 1, 0.5] : car.soc >= 20 ? [1, 0.8, 0.25] : [1, 0.3, 0.25];
            faces.push({ part: "band", color: col, level: car.charging ? 1 : 0.6 });
          }
          // unlocked: head- and taillights glow amber, like the indicators when a car opens
          if (car.locked === false) faces.push({ part: "lights", color: [1, 0.42, 0.02], level: 1 });
          if (car.climateOn) {
            // the cabin glows through the windows: warm while heating (or unknown), cool blue while cooling
            const clim = car.entities.climate ? hass.states[car.entities.climate] : undefined;
            const cooling = !!clim && (clim.attributes.hvac_action === "cooling" || clim.state === "cool");
            faces.push({ part: "cabin", color: cooling ? [0.45, 0.8, 1] : [1, 0.55, 0.22], level: 0.35 });
          }
          if (faces.length) screens.set(`${f.id}:vehicle`, { color: faces[0].color, level: faces[0].level, faces });
        }
        if (f.type === "radiator" && st && kindOf(st.entity_id) === "climate") {
          // glows while it heats; brighter the further the room is below its target
          const a = st.attributes;
          if (a.hvac_action === "heating") {
            const gap = typeof a.temperature === "number" && typeof a.current_temperature === "number" ? a.temperature - a.current_temperature : 1;
            screens.set(f.id, { color: [1, 0.42, 0.1], level: Math.min(1, 0.45 + 0.25 * Math.max(0, gap)) });
          }
        } else if ((f.type === "washer" || f.type === "dryer" || f.type === "dishwasher") && running) {
          screens.set(f.id, { color: [0.3, 0.85, 1], level: 0.8 });
        }
        const packed = packItem(f.type);
        const ringed = !!packed && !packed.light && packed.parts.some((p) => p.glow);
        if (st && ringed && hasFeature("sound") && kindOf(st.entity_id) === "media" && st.state === "playing" && !hasScreen(f.type)) {
          // Klang & Kino: a speaker without a screen lights its ring in the app's colour while it plays
          const vol = typeof st.attributes.volume_level === "number" ? st.attributes.volume_level : 0.5;
          screens.set(f.id, { color: appColor(st) ?? [0.22, 0.88, 1], level: 0.5 + 0.5 * vol, ring: true, plain: true });
        }
        if (st && hasScreen(f.type)) {
          // without the "screens" feature a screen is only lit or dark: no app colour, no picture
          const live = hasFeature("screens");
          // a light (an aquarium, a lit panel) glows in its own colour, other entities in the neon cyan
          const lit = kindOf(st.entity_id) === "light" ? lightGlow(st) : null;
          // many TV integrations (Samsung, LG) only report "on", never "playing": on is lit, dimmed
          const tvOn = kindOf(st.entity_id) === "media" && ["playing", "on", "paused", "idle"].includes(st.state);
          const color = live && kindOf(st.entity_id) === "media" ? appColor(st) : lit ? lit.color : isActive(st) || tvOn ? ([0.22, 0.88, 1] as [number, number, number]) : null;
          const picture = live && kindOf(st.entity_id) === "media" ? ((st.attributes.entity_picture as string | undefined) ?? null) : null;
          if (color) screens.set(f.id, { color, level: st.state === "playing" ? 1 : 0.6, picture, ring: ringed && hasFeature("sound") && st.state === "playing" });
        }
        if (taken.has(id)) continue;
        taken.add(id);
        const kind = link.entity ? kindOf(link.entity) : null;
        const room = floor.rooms.find((r) => r.points.length >= 3 && pointInPolygon([f.x, f.z], r.points));
        markers.push({
          id,
          floorId: floor.id,
          roomId: room?.id ?? null,
          x: f.x,
          z: f.z,
          y: markerHeight(f) + mountBase(floor, f),
          icon: f.icon ? mdiIcon(f.icon) : iconSvg(kind ?? "switch"),
          name: f.name || (link.entity ? entityName(hass, link.entity) : furnitureName(hass, f.type)),
          ownName: f.name || undefined,
          showName: !!f.show_name,
          text:
            car
              ? this.carText(hass, car, !!st && !PRESENT_STATES.has(st.state.toLowerCase()))
              : f.type === "home_battery"
              ? this.batteryText(hass, extra, power)
              : f.type === "wallbox"
                ? this.wallboxText(hass, extra, power)
                : f.type === "meter"
                  ? this.meterText(hass, power)
                  : st
                    ? stateText(hass, st)
                    : power !== null
                      ? formatPower(hass, Math.max(0, power))
                      : "",
          active: car ? car.charging : st ? isActive(st) : (power ?? 0) > 5,
          unavailable: st ? isUnavailable(st) : false,
          glow: null,
          // its pin grabs the item when furnishing
          furnitureId: f.id,
          // inverter, battery, wallbox: their own text (watts, charge, status) is always worth a pin
          energyDevice: f.type === "inverter" || f.type === "home_battery" || f.type === "wallbox" || f.type === "meter" || !!car,
          // Auto Pro: the car's charge and range are the point of the pin – shown in full by default
          show: f.marker ?? (car ? "always" : undefined),
          fromFurniture: true,
        });
      }
    }
    // picture rules: the first rule whose entity is in its state puts its picture on the screen (a Pro feature)
    this.cameraScreens = 0;
    const fridges = fridgeDoors(hass, b.floors);
    const rulesOn = hasFeature("screens");
    for (const floor of b.floors) {
      for (const f of floor.furniture) {
        if (!rulesOn || !f.pictures?.length || !hasScreen(f.type)) continue;
        // a fridge's screen sits on its right door: no picture while that door stands open
        if (f.type === "fridge_smart" && fridges.get(f.id)?.right) continue;
        const rule = f.pictures.find((r) => pictureRuleMatches(hass, r));
        if (!rule) continue;
        const picture = this.pictureUrl(rule.image);
        const bg: [number, number, number] = f.screen_bg === "white" ? [0.92, 0.94, 1] : [0.08, 0.08, 0.1];
        if (picture) screens.set(f.id, { color: bg, level: 1, picture, plain: true });
      }
    }
    this.watchCameras(this.cameraScreens > 0 || !!this._through || this.cameraWall);
    return { markers, consumers, screens, targets };
  }

  /** The trail's spots right now: history rows plus the sensors that are on. */
  private trailNow(hass: HomeAssistant, b: Building) {
    const now = Date.now();
    const sources = trailSources(hass, b);
    const live = sources.map((s) => {
      const st = hass.states[s.entity];
      return { entity: s.entity, state: st?.state, lastChanged: st?.last_changed ? Date.parse(st.last_changed) : undefined };
    });
    return trailPoints(sources, trailEvents(this.trailRows, live, now), now);
  }

  /** While the trail is shown, the sensors' history of the last half hour is fetched, again every minute. */
  private watchTrail(): void {
    clearInterval(this.trailTimer);
    this.trailTimer = undefined;
    if (this.trail && !hasFeature("camera_cockpit")) this._proHint = "camera_cockpit";
    if (!this.trail || !hasFeature("camera_cockpit")) {
      this.trailRows = {};
      this.syncDevices(true);
      return;
    }
    const fetch = async () => {
      const hass = this.hass;
      const b = this.building;
      if (!hass || !b || document.hidden) return;
      const ids = trailSources(hass, b).map((s) => s.entity);
      if (!ids.length) return;
      try {
        const rows = await hass.callWS<Record<string, HistoryRow[]> | null>({
          type: "history/history_during_period",
          start_time: new Date(Date.now() - TRAIL_WINDOW_MS).toISOString(),
          entity_ids: ids,
          minimal_response: true,
          no_attributes: true,
          significant_changes_only: false,
        });
        this.trailRows = rows ?? {};
      } catch {
        this.trailRows = {};
      }
      this.syncDevices(true);
    };
    void fetch();
    this.trailTimer = setInterval(() => void fetch(), 60000);
  }

  /** While a screen shows a camera, its snapshot is fetched again every few seconds (slower on the tablet level). */
  private watchCameras(on: boolean): void {
    if (on && !this.cameraTimer) {
      this.cameraTimer = setInterval(() => {
        if (document.hidden) return;
        this.cameraTick++;
        this.syncDevices(true);
        if (this._through || this.cameraWall) this.requestUpdate();
      }, this._low ? 10000 : 5000);
    } else if (!on && this.cameraTimer) {
      clearInterval(this.cameraTimer);
      this.cameraTimer = undefined;
    }
  }

  /** A picture rule's image as a URL: http(s) as is, a camera's current snapshot, a stored image as a data URL (fetched once). */
  private pictureUrl(image: string): string | null {
    if (/^https?:\/\//.test(image)) return image;
    if (image.startsWith("camera:")) {
      const st = this.hass.states[image.slice(7)];
      const picture = st?.attributes.entity_picture as string | undefined;
      if (!picture || isUnavailable(st)) return null;
      this.cameraScreens++;
      return picture.startsWith("data:") ? picture : `${picture}${picture.includes("?") ? "&" : "?"}fp3d=${this.cameraTick}`;
    }
    if (this.pictureUrls.has(image)) return this.pictureUrls.get(image) ?? null;
    this.pictureUrls.set(image, null);
    fetchImage(this.hass, image).then(
      (url) => {
        this.pictureUrls.set(image, url);
        this.syncDevices(true);
      },
      () => undefined,
    );
    return null;
  }

  /**
   * Furniture a robot vacuum drives around: what stands on the floor of the room (cabinets, sofas,
   * beds, appliances). It drives under tables, desks, chairs and stools, over rugs and under anything
   * hung on the wall.
   */
  private robotObstacles(floor: Building["floors"][number], room: [number, number][]): [number, number][][] {
    const OPEN_BELOW = new Set(["rug", "worktop", "table", "table_round", "coffee_table", "chair", "office_chair", "stool", "bar_stool", "bench", "desk", "robot_vacuum", "parking", "stairwell", "radiator", "tv_wall", "kitchen_wall", "led_strip"]);
    return floor.furniture
      .filter((m) => {
        if (OPEN_BELOW.has(m.type) || (m.type.startsWith("lamp_") && m.type !== "lamp_floor" && m.type !== "lamp_uplight")) return false;
        if (m.h < 0.04 || mountBase(floor, m) > 0.12) return false;
        const item = packItem(m.type);
        if (item && (item.hole || /table|desk|chair|stool|bench|rug|carpet|mat$/.test(m.type))) return false;
        return pointInPolygon([m.x, m.z], room) || furnitureFootprint(m).some((p) => pointInPolygon(p, room));
      })
      .map((m) => furnitureFootprint(m));
  }

  /** Robot vacuums (docks with a vacuum entity): where they rest and what they do. */
  private robotInfos(hass: HomeAssistant, b: Building): RobotInfo[] {
    const out: RobotInfo[] = [];
    for (const floor of b.floors) {
      for (const f of floor.furniture) {
        if (f.type !== "robot_vacuum") continue;
        const entity = this.furnitureLinks.get(f.id)?.entity ?? null;
        const state = entity ? hass.states[entity]?.state : undefined;
        const mode: RobotInfo["mode"] =
          state === "cleaning" ? "cleaning" : state === "returning" ? "returning" : state === "error" ? "error" : state === "docked" || !state ? "docked" : "idle";
        // the robot rests in front of its dock, facing away from it
        const a = (f.rotation * Math.PI) / 180;
        const off = f.d * 0.14;
        const rest: [number, number] = [f.x - Math.sin(a) * off, f.z + Math.cos(a) * off];
        // the room the robot reports (a "current room" sensor), else the room of its dock
        const rooms = floor.rooms.filter((r) => r.points.length >= 3);
        const reported = mode === "cleaning" ? robotRoom(hass, rooms, entity, robotRoomSensor(hass, entity, f.room_sensor)) : null;
        const room = reported ?? rooms.find((r) => pointInPolygon(rest, r.points));
        const obstacles = mode === "cleaning" && room ? this.robotObstacles(floor, room.points) : [];
        out.push({ id: f.id, floorId: floor.id, rest, restHeading: -a, mode, room: room?.points ?? null, roomId: room?.id ?? null, obstacles });
      }
    }
    return out;
  }

  /** Home battery: "64 % · ▲ 1,5 kW" (▲ charging, ▼ discharging; its power sensor counts discharging positive). */
  private batteryText(hass: HomeAssistant, soc: string | null, power: number | null): string {
    const v = soc ? Number(hass.states[soc]?.state) : Number.NaN;
    const parts: string[] = [];
    if (Number.isFinite(v)) parts.push(`${formatNumber(hass, v, 0)} %`);
    if (power !== null && Math.abs(power) >= 10) parts.push(`${power < 0 ? "▲" : "▼"} ${formatPower(hass, Math.abs(power))}`);
    return parts.join(" · ");
  }

  /** Wallbox: "lädt · 11 kW", "angesteckt" or its power, from a status sensor (on/off or a state such as charging). */
  /** The meter: what the house draws from the grid, or feeds into it. */
  private meterText(hass: HomeAssistant, power: number | null): string {
    if (power === null) return "";
    if (Math.abs(power) < 5) return formatPower(hass, 0);
    return `${translate(hass, power < 0 ? "energy_grid_export" : "energy_grid_import")} ${formatPower(hass, Math.abs(power))}`;
  }

  private wallboxText(hass: HomeAssistant, status: string | null, power: number | null): string {
    const st = status ? hass.states[status] : undefined;
    const raw = String(st?.state ?? "").toLowerCase();
    const charging = (power ?? 0) > 50 || /charg|laden|lädt/.test(raw);
    const plugged = st?.entity_id.startsWith("binary_sensor.") ? raw === "on" : /connect|plug|ready|angesteckt|verbunden|wait|paused|suspend/.test(raw);
    const label = charging ? translate(hass, "wallbox_charging") : plugged ? translate(hass, "wallbox_plugged") : st && !isUnavailable(st) && !st.entity_id.startsWith("binary_sensor.") ? stateText(hass, st) : "";
    const watts = power !== null && power > 50 ? formatPower(hass, power) : "";
    return [label, watts].filter(Boolean).join(" · ");
  }

  /** The glowing faces of an item with a state entity (none while nothing is on). */
  private stateFaces(hass: HomeAssistant, f: Furniture): NonNullable<ScreenState["faces"]> {
    const out: NonNullable<ScreenState["faces"]> = [];
    const refs: [EntityRef | undefined, "all" | "left" | "right" | "top" | "bottom"][] = f.state_entity2 && f.state_entity2 !== "none"
      ? [
          [f.state_entity, f.state_split === "top_bottom" ? "bottom" : "left"],
          [f.state_entity2, f.state_split === "top_bottom" ? "top" : "right"],
        ]
      : [[f.state_entity, "all"]];
    for (const [ref, part] of refs) {
      if (!ref || ref === "none") continue;
      const st = hass.states[ref];
      if (!st || isUnavailable(st)) continue;
      const on = isActive(st) || st.state === "home" || st.state === "occupied" || st.state === "on";
      if (!on) continue;
      const lit = kindOf(ref) === "light" ? lightGlow(st) : null;
      out.push({ part, color: lit ? lit.color : [1, 0.71, 0.28], level: lit ? lit.level : 0.85 });
    }
    return out;
  }

  /** Auto Pro: the pin text of a parking spot – charge, range, charging power, lock; "away · zone" when the car is out. */
  private carText(hass: HomeAssistant, car: CarState, absent: boolean): string {
    const t = (k: Parameters<typeof translate>[1]) => translate(hass, k);
    if (absent || car.away !== null) {
      const where = car.away ? ` · ${car.away}` : "";
      return `${t("car_away")}${where}`;
    }
    const parts: string[] = [];
    if (car.soc !== null) parts.push(`${formatNumber(hass, car.soc, 0)} %`);
    if (car.range !== null) parts.push(`${formatNumber(hass, car.range, 0)} ${car.rangeUnit}`);
    if (car.charging) parts.push(car.chargingW !== null ? `⚡ ${formatPower(hass, car.chargingW)}` : `⚡ ${t("car_charging_short")}`);
    else if (car.plugged) parts.push(`🔌`);
    if (car.locked !== null) parts.push(car.locked ? "🔒" : "🔓");
    return parts.join(" · ");
  }

  /** A lamp: its 3D model glows with the linked light and is tapped directly. */
  private lampMarker(hass: HomeAssistant, floor: Building["floors"][number], f: Furniture, entity: string | null): DeviceMarker & { fromFurniture: boolean } {
    const st = entity ? hass.states[entity] : undefined;
    const item = packItem(f.type);
    const model = LAMP_MODEL[f.type] ?? item?.light ?? "floor";
    // a height above the floor set by hand wins (a table lamp on a shelf, a floor lamp on a platform);
    // an LED strip outside the house counts from the ground there (a path light flush with the lawn)
    const inRoom = floor.rooms.some((r) => r.points.length >= 3 && pointInPolygon([f.x, f.z], r.points));
    const base = model === "strip" && !inRoom
      ? outdoorGround(floor, f.x, f.z) + (f.mount_y ?? 0)
      : f.mount_y != null && !item
      ? f.mount_y
      : item || model === "wall" || model === "strip"
      ? mountBase(floor, f)
      : model === "table"
        ? surfaceHeight(floor, f.x, f.z)
        : model === "bollard" || model === "garden"
          ? outdoorGround(floor, f.x, f.z)
          : 0;
    const room = floor.rooms.find((r) => r.points.length >= 3 && pointInPolygon([f.x, f.z], r.points));
    const H = floor.height;
    // pack lamps: the marker sits above the lamp (below it when it hangs from the ceiling)
    const y = item
      ? item.mount === "ceiling"
        ? Math.max(0.5, base - 0.15)
        : base + f.h + 0.2
      : {
      ceiling: H - 0.3,
      downlight: H - 0.25,
      spot: H - 0.35,
      panel: H - 0.25,
      pendant: Math.max(0.6, H - f.h - 0.25),
      floor: base + f.h + 0.25,
      uplight: base + f.h + 0.25,
      table: base + f.h + 0.2,
      wall: base + f.h + 0.2,
      strip: f.upright ? base + f.w + 0.15 : Math.max(0.3, base - 0.2),
      bollard: base + f.h + 0.25,
      garden: base + f.h + 0.25,
    }[model];
    return {
      // a lamp without a light keeps a key of its own (it is drawn, but not tappable)
      id: entity ?? `lamp:${f.id}`,
      floorId: floor.id,
      roomId: room?.id ?? null,
      x: f.x,
      z: f.z,
      y,
      icon: iconSvg("light"),
      name: f.name || (entity ? entityName(hass, entity) : furnitureName(hass, f.type)),
      text: st ? stateText(hass, st) : "",
      active: st ? isActive(st) : false,
      unavailable: st ? isUnavailable(st) : false,
      glow: st ? scaleGlow(lightGlow(st, f.color_entity && f.color_entity !== "none" ? hass.states[f.color_entity] : undefined), f.glow_scale) : null,
      lamp: model,
      rotation: f.rotation,
      mirror: !!f.mirror,
      rotation_x: f.rotation_x ?? 0,
      rotation_z: f.rotation_z ?? 0,
      pivot_y: item ? base + f.h / 2
        : ["ceiling", "downlight", "spot", "panel", "pendant"].includes(model) ? H - f.h / 2
        : base + (model === "strip" && f.upright ? f.w : f.h) / 2,
      roll: f.tilt ?? 0,
      upright: !!f.upright,
      size: [f.w, f.d, f.h],
      base,
      pickable: !!entity,
      furnitureId: f.id,
      pack: item ? f.type : null,
      lightY: item ? (item.mount === "ceiling" ? base : base + f.h * 0.85) : undefined,
      effect: !!st && st.state === "on" && typeof st.attributes.effect === "string" && !/^(none|off|solid|static|normal)$/i.test(st.attributes.effect),
      variant: f.variant,
      show: f.marker ?? undefined,
      fromFurniture: true,
    };
  }

  /**
   * Marker rule: "important" leaves out devices that their 3D object stands for (lamps, a TV that is
   * off) and keeps devices without an object (sensors, heating, switches) and values (watts, the app).
   */
  private showPin(m: DeviceMarker & { fromFurniture?: boolean; energyDevice?: boolean }): boolean {
    // while furnishing every placed device has a pin to grab it by
    if (this.furnish && !m.fromFurniture) return true;
    // the device's own setting wins over the marker mode (except "none", which hides every marker)
    if (m.show === "never" || this.markerMode === "none") return false;
    if (m.show === "always" || this.markerMode === "all") return true;
    if (m.lamp || m.model) return false;
    const kind = kindOf(m.id);
    if (kind === "light") return false;
    if (m.fromFurniture) return (m.power ?? 0) >= 1 || (kind === "media" && m.active) || (!!m.energyDevice && !!m.text);
    return true;
  }

  /** Tapping a window opens its blind (or contact); a door or garage door its cover or contact. */
  private openingTargets(): Map<string, string> {
    const out = new Map<string, string>();
    for (const [id, e] of this.openingLinks ?? []) {
      const target = e.cover ?? e.contact ?? e.tilt;
      if (target) out.set(id, target);
    }
    return out;
  }

  /** Pictures of the floors, drawn a moment after the plan or the look changed (once, not per frame). */
  private scheduleThumbs(delay = 600): void {
    clearTimeout(this.thumbTimer);
    const floors = this.building?.floors.filter((f) => f.rooms.length).length ?? 0;
    if (!this.floorThumbs || floors < 2) {
      this._thumbs = [];
      return;
    }
    // at most every few seconds, however often lamps change (the tablet level waits longer)
    const wait = Math.max(delay, this.thumbsAt + (this._low ? 8000 : 4000) - Date.now());
    this.thumbTimer = setTimeout(() => {
      // at night (kiosk) the pictures are drawn once and then rest
      if (!this.viewer || (this.dimmed && this._thumbs.length)) return;
      // a hidden tab draws nothing; the pictures follow once it shows again
      if (document.hidden) {
        this.scheduleThumbs(3000);
        return;
      }
      this.thumbsAt = Date.now();
      this._thumbs = this.viewer.floorThumbnails(this.narrowThumbs ? 104 : 150, this.narrowThumbs ? 78 : 112);
    }, wait);
  }

  private get narrowThumbs(): boolean {
    return this._narrowStage;
  }

  private renderThumbs() {
    if (!this._thumbs.length || !this.building) return nothing;
    const names = new Map(this.building.floors.map((f) => [f.id, f.name]));
    // the highest floor on top
    const order = [...this._thumbs].sort(
      (a, b) => (this.building!.floors.find((f) => f.id === b.floorId)?.elevation ?? 0) - (this.building!.floors.find((f) => f.id === a.floorId)?.elevation ?? 0),
    );
    const compact = this._thumbsCompact;
    const fold = () => {
      this._thumbsCompact = !compact;
      try {
        localStorage.setItem("neonplan3d.thumbs_compact", this._thumbsCompact ? "1" : "0");
      } catch {
        // private mode: the choice lasts for this page only
      }
    };
    return html`<nav class="fp3d-thumbs ${this.narrowThumbs ? "fp3d-thumbs-small" : ""} ${compact ? "fp3d-thumbs-compact" : ""}" aria-label=${translate(this.hass, "floors")}>
      <button class="fp3d-thumbs-fold" title=${translate(this.hass, compact ? "thumbs_show" : "thumbs_fold")} aria-label=${translate(this.hass, compact ? "thumbs_show" : "thumbs_fold")} @click=${fold}>${compact ? "▸" : "◂"}</button>
      <button class="fp3d-thumb fp3d-thumb-house" aria-pressed=${this.floorId === null} @click=${() => this.fire("floor-tap", { floorId: null })}>
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"><path d="M3 11l9-7 9 7M5 10v10h14V10" /></svg>
        <span>${translate(this.hass, "all_floors")}</span>
      </button>
      ${order.map(
        (t) => html`<button class="fp3d-thumb" aria-pressed=${this.floorId === t.floorId} @click=${() => this.fire("floor-tap", { floorId: t.floorId })}>
          ${compact ? nothing : html`<img src=${t.url} alt="" />`}
          <span>${names.get(t.floorId) ?? ""}</span>
        </button>`,
      )}
    </nav>`;
  }

  /** Long press: the quick menu at the device, or the details for devices without one. */
  private onDeviceHold(entityId: string, x: number, y: number): void {
    // Auto Pro: a long press on the parking spot's pin opens the car's menu (lock, climate, charging)
    if (hasFeature("auto_pro") && this.hass && this.building) {
      for (const floor of this.building.floors)
        for (const f of floor.furniture) {
          if (f.type !== "parking" || !f.car) continue;
          const car = carState(this.hass, f);
          const ids = [f.entity, f.car.device, ...Object.values(car.entities)].filter((v): v is string => !!v && v !== "none");
          if (ids.includes(entityId)) {
            this._menu = { entity: entityId, x, y, car };
            return;
          }
        }
    }
    const kind = kindOf(entityId);
    if (kind === "light" || kind === "cover" || kind === "switch" || kind === "fan" || kind === "lock" || kind === "camera") this._menu = { entity: entityId, x, y };
    else openMoreInfo(this, entityId);
  }

  /** Swipe up or down on a lamp (brightness) or a blind (position). */
  private onDeviceSwipe(entityId: string, phase: "start" | "move" | "end", dy: number, x: number, y: number): boolean {
    const st = this.hass?.states[entityId];
    if (phase === "start") {
      // devices that ask before switching are not moved by a swipe (it turns the view instead)
      if (!st || isUnavailable(st) || this.confirmSet.has(entityId)) return false;
      const kind = kindOf(entityId);
      if (kind === "light" && lightAbilities(st).dim) {
        const pct = st.state === "on" ? (typeof st.attributes.brightness === "number" ? Math.round((st.attributes.brightness as number) / 2.55) : 100) : 0;
        this._swipe = { entity: entityId, kind: "light", start: pct, value: pct, x, y };
        return true;
      }
      if (kind === "cover" && coverPositionable(st)) {
        const pos = st.attributes.current_position as number;
        this._swipe = { entity: entityId, kind: "cover", start: pos, value: pos, x, y };
        return true;
      }
      return false;
    }
    const s = this._swipe;
    if (!s || s.entity !== entityId) return false;
    if (phase === "move") {
      // the whole range over about 220 pixels; up = brighter / blind up
      const value = Math.round(Math.min(100, Math.max(0, s.start - (dy / 220) * 100)));
      if (value !== s.value) this._swipe = { ...s, value };
      // at most a few calls per second while the finger moves
      const now = performance.now();
      if (now - this.swipeSent > 350) {
        this.swipeSent = now;
        this.applySwipe();
      }
    } else {
      this.applySwipe();
      clearTimeout(this.swipeTimer);
      this.swipeTimer = setTimeout(() => (this._swipe = null), 700);
    }
    return true;
  }

  private applySwipe(): void {
    const s = this._swipe;
    if (!s || !this.hass) return;
    if (s.kind === "light") {
      if (s.value <= 0) void this.hass.callService("light", "turn_off", { entity_id: s.entity });
      else void this.hass.callService("light", "turn_on", { entity_id: s.entity, brightness_pct: s.value });
    } else void this.hass.callService("cover", "set_cover_position", { entity_id: s.entity, position: s.value });
  }

  /** Fly to a search result: rooms are selected, devices shown on their floor and flashing. */
  private goTo(item: SearchItem): void {
    this._find = null;
    if (item.kind === "room") {
      this.fire("room-tap", { floorId: item.floorId, roomId: item.roomId });
      return;
    }
    if (this.floorId !== item.floorId) this.fire("floor-tap", { floorId: item.floorId });
    // after the host has switched the floor (its own camera flight starts first)
    setTimeout(() => this.viewer?.focus(item.floorId, item.x, item.z, item.y, item.entity), 120);
  }

  private renderAlerts() {
    const b = this.building;
    if (!this._alerts.length || !b) return nothing;
    const shown = this._alerts.slice(0, 3);
    return html`<div class="fp3d-alert-banner" role="alert">
      ${shown.map((a) => html`<button class="fp3d-alert fp3d-alert-${a.kind}" title=${alertText(this.hass, b, a)} @click=${() => this.jumpTo(a)}>${alertText(this.hass, b, a)}</button>`)}
      ${this._alerts.length > 3 ? html`<span class="fp3d-alert-more">+${this._alerts.length - 3}</span>` : nothing}
    </div>`;
  }

  /** Scenes and scripts of the selected room's area as chips (while no panel lists them). */
  private renderScenes() {
    const b = this.building;
    if (!this.scenes || !this.roomId || this.panelOpen || !b || !this.hass) return nothing;
    const room = b.floors.flatMap((f) => f.rooms).find((r) => r.id === this.roomId);
    const ids = room ? areaEntities(this.hass, room.area_id).filter((id) => kindOf(id) === "scene" || kindOf(id) === "script").slice(0, 6) : [];
    if (!ids.length) return nothing;
    const areaName = room?.area_id ? this.hass.areas?.[room.area_id]?.name : undefined;
    return html`<div class="fp3d-scenes">
      ${ids.map((id) => html`<button class="fp3d-chip" aria-pressed=${this._sceneFired === id} @click=${() => this.runScene(id)}>${entityName(this.hass, id, areaName)}</button>`)}
    </div>`;
  }

  private renderFind() {
    const b = this.building;
    if (!b || !this.hass) return nothing;
    if (this._find === null) {
      return html`<button class="fp3d-find-btn" title=${translate(this.hass, "find")} aria-label=${translate(this.hass, "find")} @click=${() => (this._find = "")}>
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="6.5" /><path d="M16 16l4.5 4.5" /></svg>
      </button>`;
    }
    const results = searchItems((this.findIndex ??= searchIndex(this.hass, b)), this._find);
    return html`<div class="fp3d-find">
      <input
        type="search"
        placeholder=${translate(this.hass, "find_placeholder")}
        .value=${this._find}
        @input=${(e: Event) => (this._find = (e.target as HTMLInputElement).value)}
        @keydown=${(e: KeyboardEvent) => {
          if (e.key === "Escape") this._find = null;
          if (e.key === "Enter" && results[0]) this.goTo(results[0]);
        }}
      />
      <button class="fp3d-find-close" aria-label=${translate(this.hass, "close")} @click=${() => (this._find = null)}>✕</button>
      ${this._find.trim()
        ? html`<div class="fp3d-find-list">
            ${results.length
              ? results.map(
                  (it) => html`<button @click=${() => this.goTo(it)}>
                    <span class="fp3d-find-icon"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d=${it.icon ? iconPath(it.icon) : "M4 10l8-6 8 6v10H4z"} /></svg></span>
                    <span><b>${it.name}</b>${it.where ? html`<small>${it.where}</small>` : nothing}</span>
                  </button>`,
                )
              : html`<p>${translate(this.hass, "find_none")}</p>`}
          </div>`
        : nothing}
    </div>`;
  }

  /**
   * The star: a small menu for the floor shown (or the whole house) with all lights on / off, all blinds
   * up / down and the house's favourites (#145). House-wide actions want a second tap.
   */
  private renderCentral() {
    const b = this.building;
    const hass = this.hass;
    if (!b || !hass || !this.central || this._find !== null) return nothing;
    const t = (k: I18nKey, vars?: Record<string, string | number>) => translate(hass, k, vars);
    const star = html`<button
      class="fp3d-central-btn ${this._central ? "fp3d-central-on" : ""}"
      title=${t("central")}
      aria-label=${t("central")}
      aria-expanded=${this._central}
      @click=${() => {
        this._central = !this._central;
        this._armed = null;
      }}
    >
      <svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linejoin="round"><path d="M12 3.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.9l-5.2 2.7 1-5.8-4.3-4.1 5.9-.9z" /></svg>
    </button>`;
    if (!this._central) return star;
    const floor = this.floorId ? b.floors.find((f) => f.id === this.floorId) : undefined;
    const floors = floor ? [floor] : b.floors;
    const lights = floors.flatMap((f) => floorControls(hass, f).lights);
    const covers = floors.flatMap((f) => floorControls(hass, f).covers);
    const lightsOn = lights.filter((id) => hass.states[id]?.state === "on").length;
    const house = !floor;
    // house-wide: the first tap arms the button ("sure?"), the second runs it
    const act = (key: string, domain: string, service: string, ids: string[]) => {
      if (!ids.length) return;
      if (house && this._armed !== key) {
        this._armed = key;
        clearTimeout(this.armTimer);
        this.armTimer = setTimeout(() => (this._armed = null), 3500);
        return;
      }
      this._armed = null;
      void hass.callService(domain, service, { entity_id: ids });
    };
    const button = (key: string, label: I18nKey, domain: string, service: string, ids: string[]) =>
      html`<button class="fp3d-btn ${this._armed === key ? "fp3d-central-armed" : ""}" ?disabled=${!ids.length} @click=${() => act(key, domain, service, ids)}>
        ${this._armed === key ? t("central_sure") : t(label)}
      </button>`;
    const favorites = (b.settings.favorites ?? []).filter((id) => hass.states[id]);
    const own = this.buttons ?? b.settings.buttons ?? [];
    return html`${star}
      <div class="fp3d-central" role="dialog" aria-label=${t("central")}>
        <b>${floor ? floor.name : t("central_house")}</b>
        <div class="fp3d-central-row">
          <span>${t("central_lights")}${lights.length ? html` <small>${lightsOn}/${lights.length}</small>` : nothing}</span>
          ${button("lights_on", "central_on", "light", "turn_on", lights.filter((id) => hass.states[id]?.state === "off"))}
          ${button("lights_off", "central_off", "light", "turn_off", lights.filter((id) => hass.states[id]?.state === "on"))}
        </div>
        ${covers.length
          ? html`<div class="fp3d-central-row">
              <span>${t("central_covers")} <small>${covers.length}</small></span>
              ${button("covers_open", "central_open", "cover", "open_cover", covers)}
              ${button("covers_close", "central_close", "cover", "close_cover", covers)}
            </div>`
          : nothing}
        <b>${t("central_favorites")}</b>
        ${favorites.length
          ? html`<div class="fp3d-central-favs">
              ${favorites.map((id) => {
                const [domain, service] = favoriteCall(id);
                const st = hass.states[id];
                const on = domain === "homeassistant" && st?.state === "on";
                return html`<button
                  class="fp3d-chip"
                  aria-pressed=${on || this._sceneFired === id}
                  ?disabled=${isUnavailable(st)}
                  @click=${() => {
                    void hass.callService(domain, service, { entity_id: id });
                    this._sceneFired = id;
                    setTimeout(() => (this._sceneFired = null), 600);
                  }}
                >
                  ${entityName(hass, id)}
                </button>`;
              })}
            </div>`
          : own.length
            ? nothing
            : html`<p class="fp3d-central-hint">${t("central_no_favorites")}</p>`}
        ${own.length
          ? html`<div class="fp3d-central-favs">
              ${own.map(
                (btn) => html`<button
                  class="fp3d-chip fp3d-own-btn"
                  @click=${(e: Event) => {
                    runButton(hass, e.currentTarget as HTMLElement, btn);
                    if (btn.action !== "service") this._central = false;
                  }}
                >
                  ${btn.icon ? html`<ha-icon .icon=${btn.icon.startsWith("mdi:") ? btn.icon : `mdi:${btn.icon}`}></ha-icon>` : nothing}${btn.label}
                </button>`,
              )}
            </div>`
          : nothing}
      </div>`;
  }

  /** Whether a media player shows a now-playing card (playing, or paused with something to show, or within its grace time). */
  private mediaCardUp(hass: HomeAssistant, id: string): boolean {
    const st = hass.states[id];
    if (!st || kindOf(id) !== "media") return false;
    if ((this.mediaGrace.get(id)?.until ?? 0) > Date.now() && isUnavailable(st)) return true;
    const label = [st.attributes.media_title, st.attributes.app_name, st.attributes.source].some((v) => typeof v === "string" && !!v.trim());
    return !isUnavailable(st) && (st.state === "playing" || (st.state === "paused" && label));
  }

  /** The eye: one tap hides every bar and overlay so only the stage remains, the next brings them back. */
  private renderEye() {
    if (!this.cleanButton || !this.hass) return nothing;
    const label = translate(this.hass, this.clean ? "controls_show" : "controls_hide");
    return html`<button
      class="fp3d-eye ${this.clean ? "fp3d-eye-clean" : ""}"
      title=${label}
      aria-label=${label}
      aria-pressed=${this.clean}
      @click=${() => this.dispatchEvent(new CustomEvent("clean-toggle", { bubbles: true, composed: true }))}
    >
      ${this.clean
        ? svg`<svg viewBox="0 0 24 24" width="20" height="20"><path fill="currentColor" d="M12 6a9.8 9.8 0 0 1 9 6 9.8 9.8 0 0 1-9 6 9.8 9.8 0 0 1-9-6 9.8 9.8 0 0 1 9-6m0 2a4 4 0 1 0 0 8 4 4 0 0 0 0-8m0 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4" /></svg>`
        : svg`<svg viewBox="0 0 24 24" width="20" height="20"><path fill="currentColor" d="M2.4 3.8 3.8 2.4l17.8 17.8-1.4 1.4-3.3-3.3A10.5 10.5 0 0 1 12 19a9.8 9.8 0 0 1-9-6 10.3 10.3 0 0 1 3.6-4.3L2.4 3.8M12 7a4 4 0 0 1 4 4c0 .5-.1 1-.3 1.5l-5.2-5.2c.5-.2 1-.3 1.5-.3m-4 4a4 4 0 0 0 5.5 3.7l-5.2-5.2c-.2.5-.3 1-.3 1.5m4-7a9.8 9.8 0 0 1 9 6 10 10 0 0 1-2.6 3.6l-1.4-1.4A8 8 0 0 0 18.8 12 8 8 0 0 0 9.6 7.2L8 5.6A10.3 10.3 0 0 1 12 4" /></svg>`}
    </button>`;
  }

  private renderSwipe() {
    const s = this._swipe;
    if (!s || !this.hass) return nothing;
    const off = s.kind === "light" && s.value <= 0;
    return html`<div class="fp3d-swipe" style="left:${s.x}px;top:${s.y}px">
      <span>${entityName(this.hass, s.entity)}</span>
      <b>${off ? translate(this.hass, "swipe_off") : `${s.value} %`}</b>
      <i><em style="height:${s.value}%"></em></i>
    </div>`;
  }

  /** Look through a placed camera: the view flies into it and its live picture lies over the 3D view. */
  lookThrough(entityId: string): void {
    const v = this.viewer;
    const b = this.building;
    if (!v || !b) return;
    if (!hasFeature("camera_cockpit")) {
      this._menu = null;
      this._proHint = "camera_cockpit";
      return;
    }
    const floorId = b.floors.find((f) => f.placements.some((p) => p.entity_id === entityId))?.id;
    if (!floorId) return;
    this._menu = null;
    if (!this._through) this._through = { entity: entityId, back: v.getView() };
    else this._through = { ...this._through, entity: entityId };
    this.watchCameras(true);
    // another floor first opens (its own flight must not win over ours)
    const wait = this.floorId === floorId ? 0 : 300;
    if (wait) {
      this.throughFloor = floorId;
      this.fire("floor-tap", { floorId });
    }
    setTimeout(() => {
      if (this._through?.entity === entityId && !this.viewer?.lookThrough(entityId)) this._through = null;
    }, wait);
  }

  private endThrough(): void {
    const t = this._through;
    if (!t) return;
    this._through = null;
    this.viewer?.flyTo(t.back);
    if (this.throughWall) {
      this.throughWall = false;
      this.dispatchEvent(new CustomEvent("camera-wall-open", { bubbles: true, composed: true }));
    }
  }

  /** The hint shown when a Pro feature is used without the Pro pack. */
  private renderProHint() {
    if (!this._proHint || !this.hass) return nothing;
    return html`<div class="fp3d-pro" role="dialog">
      <b>${translate(this.hass, "pro_title")}</b>
      <span>${translate(this.hass, `pro_feature_${this._proHint}` as I18nKey)}</span>
      <span class="fp3d-sub">${translate(this.hass, "pro_locked")}</span>
      <div>
        <a class="fp3d-chip fp3d-chip-on" href=${shopUrl(this.hass.language)} target="_blank" rel="noopener">${translate(this.hass, "pro_shop")}</a>
        <a class="fp3d-chip" href=${manualUrl(this.hass.language, this._proHint)} target="_blank" rel="noopener">${translate(this.hass, "manual_more")}</a>
        <button class="fp3d-chip" @click=${() => ((this._proHint = null), this.fire("open-extensions", null))}>${translate(this.hass, "ext_tab")}</button>
        <button class="fp3d-chip" @click=${() => (this._proHint = null)}>${translate(this.hass, "close")}</button>
      </div>
    </div>`;
  }

  /** Kamera-Cockpit: the camera wall – every placed camera's picture, refreshed every few seconds; a tap looks through it. */
  private renderCameraWall() {
    if (!this.cameraWall || !this.hass || !this.building) return nothing;
    const hass = this.hass;
    const close = () => {
      this._wallBig = null;
      this.live = null;
      this.dispatchEvent(new CustomEvent("camera-wall-close", { bubbles: true, composed: true }));
    };
    if (!hasFeature("camera_cockpit")) {
      return html`<div class="fp3d-wall">
        <div class="fp3d-wall-head"><span>${translate(hass, "camera_wall_title")}</span><button class="fp3d-chip" @click=${close}>✕</button></div>
        <p class="fp3d-wall-pro">🔒 ${translate(hass, "pro_feature_camera_cockpit")}</p>
      </div>`;
    }
    const cameras = [...new Set(this.building.floors.flatMap((f) => f.placements.map((p) => p.entity_id)).filter((id) => kindOf(id) === "camera"))];
    this.watchCameras(true);
    const srcOf = (id: string) => {
      const st = hass.states[id];
      const picture = st?.attributes.entity_picture as string | undefined;
      return picture && st && !isUnavailable(st) ? (picture.startsWith("data:") ? picture : `${picture}${picture.includes("?") ? "&" : "?"}fp3d=${this.cameraTick}`) : null;
    };
    const name = (id: string) => {
      const st = hass.states[id];
      return html`${entityName(hass, id)}${st?.state === "recording" ? html` <b>● ${translate(hass, "state_recording")}</b>` : nothing}`;
    };
    // one camera big: its live picture fills the wall; from here the view can look through the camera,
    // and "back to the view" brings the wall back
    const big = this._wallBig && cameras.includes(this._wallBig) ? this._wallBig : null;
    if (big) {
      const src = srcOf(big);
      const stream = this.liveFor(big);
      const look = () => {
        this.throughWall = true;
        close();
        this.lookThrough(big);
      };
      return html`<div class="fp3d-wall">
        <div class="fp3d-wall-head">
          <button
            class="fp3d-chip"
            @click=${() => {
              this._wallBig = null;
              this.live = null;
            }}
          >
            ‹ ${translate(hass, "camera_wall_all")}
          </button>
          <span class="fp3d-wall-title">${name(big)}</span>
          <span class="fp3d-wall-tools"><button class="fp3d-chip" @click=${look}>${translate(hass, "through_camera")}</button><button class="fp3d-chip" aria-label="✕" @click=${close}>✕</button></span>
        </div>
        <div class="fp3d-wall-big">${stream ?? (src ? html`<img src=${src} alt="" />` : html`<div class="fp3d-wall-none">${translate(hass, "state_unavailable")}</div>`)}</div>
      </div>`;
    }
    // the tiles share the wall: one camera fills it, two sit side by side, up to nine in three columns
    const cols = cameras.length <= 1 ? 1 : cameras.length <= 4 ? 2 : cameras.length <= 9 ? 3 : 4;
    return html`<div class="fp3d-wall">
      <div class="fp3d-wall-head">
        <span>${translate(hass, "camera_wall_title")} · ${cameras.length} <span class="fp3d-still">${translate(hass, "camera_still", { s: this._low ? 10 : 5 })}</span></span>
        <button class="fp3d-chip" aria-label="✕" @click=${close}>✕</button>
      </div>
      <div class="fp3d-wall-grid" style="grid-template-columns: repeat(${cols}, minmax(0, 1fr))">
        ${cameras.map((id) => {
          const src = srcOf(id);
          const seen = cameraMotionSensors(hass, id).some((s) => hass.states[s]?.state === "on");
          return html`<button class="fp3d-wall-cam ${seen ? "fp3d-wall-seen" : ""}" title=${translate(hass, "camera_wall_big")} @click=${() => (this._wallBig = id)}>
            ${src ? html`<img src=${src} alt="" />` : html`<div class="fp3d-wall-none">${translate(hass, "state_unavailable")}</div>`}
            <span class="fp3d-wall-name">${name(id)}</span>
          </button>`;
        })}
      </div>
    </div>`;
  }

  /**
   * The live stream of a camera through Home Assistant's own player (HLS or WebRTC, whatever the camera
   * offers): a picture-entity card in live view, created once per camera. Null while it loads or when the
   * helpers are missing (the preview, an old frontend) – then the snapshot stays.
   */
  private liveFor(id: string): HTMLElement | null {
    if (this.live?.id !== id) {
      const mine = { id, el: null as (HTMLElement & { hass?: unknown }) | null, failed: false };
      this.live = mine;
      const w = window as unknown as { loadCardHelpers?: () => Promise<{ createCardElement: (c: unknown) => HTMLElement & { hass?: unknown } }> };
      if (!w.loadCardHelpers) mine.failed = true;
      else
        w.loadCardHelpers()
          .then((h) => {
            if (this.live !== mine) return;
            const el = h.createCardElement({ type: "picture-entity", entity: id, camera_view: "live", show_name: false, show_state: false, tap_action: { action: "none" }, hold_action: { action: "none" } });
            el.hass = this.hass;
            mine.el = el;
            this.requestUpdate();
          })
          .catch(() => {
            mine.failed = true;
            this.requestUpdate();
          });
    }
    return this.live.el;
  }

  private renderThrough() {
    const t = this._through;
    if (!t || !this.hass) return nothing;
    const st = this.hass.states[t.entity];
    const picture = st?.attributes.entity_picture as string | undefined;
    const src = picture && !isUnavailable(st) ? (picture.startsWith("data:") ? picture : `${picture}${picture.includes("?") ? "&" : "?"}fp3d=${this.cameraTick}`) : null;
    return html`<div class="fp3d-through" style="--fp3d-blend:${this._blend}">
      ${src ? html`<img class="fp3d-through-img" src=${src} alt="" />` : nothing}
      <div class="fp3d-through-bar">
        <span class="fp3d-through-name">${entityName(this.hass, t.entity)}</span>
        <span class="fp3d-still">${translate(this.hass, "camera_still", { s: this._low ? 10 : 5 })}</span>
        <input
          type="range"
          min="0"
          max="100"
          .value=${String(Math.round(this._blend * 100))}
          aria-label=${translate(this.hass, "through_blend")}
          @input=${(e: Event) => (this._blend = Number((e.target as HTMLInputElement).value) / 100)}
        />
        <button class="fp3d-chip" @click=${() => this.endThrough()}>${translate(this.hass, "through_back")}</button>
      </div>
    </div>`;
  }

  private renderMenu() {
    const m = this._menu;
    if (!m || !this.hass) return nothing;
    const stage = this.renderRoot.querySelector(".fp3d-stage") as HTMLElement | null;
    const w = stage?.clientWidth ?? 800;
    const h = stage?.clientHeight ?? 600;
    const left = Math.max(8, Math.min(w - 240, m.x - 116));
    const top = Math.max(8, Math.min(h - 360, m.y - 170));
    return html`<div class="fp3d-menu-backdrop" @click=${() => (this._menu = null)}></div>
      <fp3d-quick-menu
        style="left:${left}px;top:${top}px"
        ?low=${this._low}
        .hass=${this.hass}
        .entity=${m.entity}
        .car=${m.car ?? null}
        .presets=${hasFeature("sound") ? (this.building?.settings.media_presets ?? []) : []}
        ?confirmSwitch=${this.confirmSet.has(m.entity)}
        ?pro=${hasFeature("camera_cockpit")}
        @close=${() => (this._menu = null)}
        @camera-look=${(e: CustomEvent<{ entity: string }>) => this.lookThrough(e.detail.entity)}
      ></fp3d-quick-menu>`;
  }

  private onDeviceTap(entityId: string, x = 0, y = 0): void {
    // trail pins and lamps without a light are drawn, but nothing of Home Assistant stands behind them
    if (entityId.startsWith("trail:") || entityId.startsWith("lamp:")) return;
    // a detection pin opens its sensor
    if (entityId.startsWith("detect:")) {
      openMoreInfo(this, entityId.slice(7));
      return;
    }
    const kind = kindOf(entityId);
    // blinds have no single on/off: a tap opens their quick menu (up, positions, stop, down); a camera shows its picture
    if (kind === "cover" || kind === "camera") {
      this._menu = { entity: entityId, x, y };
      return;
    }
    if (kind && TOGGLE_KINDS.has(kind)) {
      if (this.confirmSet.has(entityId) && !confirm(translate(this.hass, "confirm_switch", { name: entityName(this.hass, entityId) }))) return;
      void toggleEntity(this.hass, entityId);
    } else openMoreInfo(this, entityId);
  }

  /** The start view: the card's own, else the one remembered in the editor. */
  private startViewOf(): StartView | null {
    return this.startView ?? this.building?.settings.start_view ?? null;
  }

  /** The camera as it stands (for "remember this view as the start"). */
  currentView(): { theta: number; phi: number; radius: number } | null {
    return this.viewer?.currentView() ?? null;
  }

  resetView(): void {
    this._through = null;
    this.viewer?.resetView();
  }

  private fire(type: string, detail: unknown): void {
    this.dispatchEvent(new CustomEvent(type, { detail, bubbles: true, composed: true }));
  }

  /** Hide or show every hologram (the plants' and the devices'): with many devices the view gets crowded. */
  private toggleHolos(): void {
    this._holoShow = !this._holoShow;
    try {
      localStorage.setItem("neonplan3d.holos", this._holoShow ? "1" : "0");
    } catch {
      // private mode: the choice lasts for this page only
    }
  }

  private holoVisible(): boolean {
    return this.holograms ?? this._holoShow;
  }

  private toggleFlows(): void {
    this._flows = !this._flows;
    try {
      localStorage.setItem("neonplan3d.flows", this._flows ? "1" : "0");
    } catch {
      // private mode: the choice lasts for this page only
    }
    this.syncDevices(true);
  }

  private renderEnergy() {
    const e = this._energy;
    if (!hasFeature("energy_pro") || !e || this.roomId || !this.showEnergy) return nothing;
    const t = (k: Parameters<typeof translate>[1]) => translate(this.hass, k);
    const items: { cls: string; label: string; value: string }[] = [];
    if (e.consumption !== null) items.push({ cls: "total", label: t("energy_consumption"), value: formatPower(this.hass, e.consumption) });
    if (e.grid !== null) {
      const exporting = e.grid < 0;
      items.push({ cls: exporting ? "export" : "grid", label: t(exporting ? "energy_grid_export" : "energy_grid_import"), value: formatPower(this.hass, Math.abs(e.grid)) });
    }
    if (e.solar !== null) items.push({ cls: "solar", label: t("energy_solar"), value: formatPower(this.hass, e.solar) });
    if (e.battery !== null || e.soc !== null) {
      const parts = [e.battery !== null ? formatPower(this.hass, Math.abs(e.battery)) : null, e.soc !== null ? `${Math.round(e.soc)} %` : null].filter(Boolean);
      items.push({ cls: "battery", label: t("energy_battery"), value: parts.join(" · ") });
    }
    if (e.tariff) items.push({ cls: "tariff", label: t("energy_tariff"), value: `${formatNumber(this.hass, e.tariff.value, 3)} ${e.tariff.unit}`.trim() });
    return html`<div class="fp3d-energy" aria-live="off">
      ${this._holoOn ? nothing : items.map((i) => html`<div class="fp3d-energy-item fp3d-energy-${i.cls}"><span>${i.label}</span><b>${i.value}</b></div>`)}
      ${this.flows !== null
        ? nothing
        : html`<button class="fp3d-energy-item fp3d-flow-toggle" aria-pressed=${this._flows} title=${`${t("flows_hint")} (${t(this._flows ? "flow_on" : "flow_off")})`} aria-label=${t("flows")} @click=${() => this.toggleFlows()}>
        <span>${t("flows")}</span><b>⚡</b>
      </button>`}
      ${this.holograms !== null || !this._holos.length
        ? nothing
        : html`<button class="fp3d-energy-item fp3d-flow-toggle" aria-pressed=${this._holoShow} title=${t("holos_hint")} aria-label=${t("holos")} @click=${() => this.toggleHolos()}>
        <span>${t("holos")}</span><b>◫</b>
      </button>`}
    </div>`;
  }

  private renderLegend() {
    if (this.heatMode === "none" || this.heatMode === "values") return nothing;
    const scale = HEAT_SCALES[this.heatMode];
    // temperatures are coloured in °C and shown in Home Assistant's unit
    const temp = this.heatMode === "temperature";
    const lo = temp ? fromCelsius(this.hass, scale.stops[0][0]) : scale.stops[0][0];
    const hi = temp ? fromCelsius(this.hass, scale.stops[scale.stops.length - 1][0]) : scale.stops[scale.stops.length - 1][0];
    const unit = temp ? tempUnit(this.hass) : scale.unit;
    const t = (k: Parameters<typeof translate>[1]) => translate(this.hass, k);
    return html`<div class="fp3d-legend">
      <b>${t(`heat_${this.heatMode}`)}</b>
      <span class="fp3d-legend-bar" style="background:${heatGradient(this.heatMode)}"></span>
      <span class="fp3d-legend-range"><span>${formatNumber(this.hass, lo, 0)} ${unit}</span><span>${formatNumber(this.hass, hi, 0)} ${unit}</span></span>
      ${this.heatValues.size ? nothing : html`<span class="fp3d-legend-none">${t("heat_none_found")}</span>`}
    </div>`;
  }

  /** The sky colour behind the house right now (night: deep blue-black, day: lighter and bluer, clouds in between). */
  private skyColor(): [number, number, number] {
    const stage = STAGE[this.theme] ?? STAGE.neon;
    const sky = this._sky;
    return stage.night[0].map((v, i) => Math.round(v + (stage.day[0][i] - v) * sky)) as [number, number, number];
  }

  /** While a storm is reported the stage flashes now and then. */
  private watchLightning(on: boolean): void {
    if (!on) {
      clearTimeout(this.flashTimer);
      this.flashTimer = undefined;
      return;
    }
    if (this.flashTimer) return;
    const next = () => {
      this.flashTimer = setTimeout(() => {
        if (!document.hidden) {
          this._flash = true;
          setTimeout(() => (this._flash = false), 140);
        }
        next();
      }, 5000 + Math.random() * 9000);
    };
    next();
  }

  protected render() {
    const sky = this._sky;
    const mix = (a: number[], b: number[]) => `rgb(${a.map((v, i) => Math.round(v + (b[i] - v) * sky)).join(",")})`;
    const stage = STAGE[this.theme] ?? STAGE.neon;
    const style = `--fp3d-sky:${mix(stage.night[0], stage.day[0])};--fp3d-ground:${mix(stage.night[1], stage.day[1])}`;
    return html`<div
      class="fp3d-stage ${this.roomLabels ? "" : "fp3d-no-room-names"} ${this._low ? "fp3d-low" : ""} ${this.panelOpen ? "fp3d-panel-open" : ""} ${this._alerts.length ? "fp3d-has-alerts" : ""} ${this._through ? "fp3d-through-on" : ""} ${this._flash ? "fp3d-flash" : ""}"
      style=${style}
    >
      ${this._error ? html`<p class="fp3d-error">${this._error}</p>` : nothing} ${this.clean ? nothing : this.renderEnergy()} ${this.renderHologram()} ${this.clean ? nothing : this.renderLegend()}
      ${this.renderAlerts()} ${this.clean ? nothing : html`${this.renderThumbs()} ${this.renderScenes()} ${this.renderFind()} ${this.renderCentral()}`} ${this.renderSwipe()} ${this.renderThrough()} ${this.renderCameraWall()}
      ${this.clean ? nothing : this.renderProHint()} ${this.renderMenu()} ${this.renderEye()}
      ${this.showStats && this._stats
        ? html`<span class="fp3d-stats"
            ><b>${this._stats.fps ? translate(this.hass, "stats_fps", { fps: this._stats.fps, ms: this._stats.worstMs }) : translate(this.hass, "stats_idle")}</b>
            ${this._stats.busy.length ? html`(${this._stats.busy.map((b) => translate(this.hass, `stats_busy_${b}` as I18nKey)).join(", ")})` : nothing} ·
            ${translate(this.hass, "stats", { calls: this._stats.calls, tris: this._stats.triangles.toLocaleString() })} ·
            ${translate(this.hass, this._stats.low ? "stats_low" : "stats_full", { r: formatNumber(this.hass, this._stats.pixelRatio, 2) })}</span
          >`
        : nothing}
    </div>`;
  }

  static styles = [
    tokens,
    controls,
    css`
      :host {
        display: block;
        position: relative;
        min-height: 200px;
      }
      .fp3d-alert-banner {
        position: absolute;
        left: 50%;
        top: 10px;
        transform: translateX(-50%);
        display: flex;
        justify-content: center;
        gap: 6px;
        max-width: calc(100% - 24px);
        z-index: 4;
      }
      .fp3d-alert {
        flex: 0 1 auto;
        min-width: 0;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        padding: 7px 14px 7px 12px;
        border: 0;
        border-left: 4px solid #ff3b4f;
        border-radius: 12px;
        background: var(--fp3d-chrome-solid);
        color: var(--fp3d-text);
        font: 600 13.5px var(--fp3d-font);
        box-shadow: 0 0 18px rgba(255, 59, 79, 0.35);
        cursor: pointer;
        animation: fp3d-alert-pulse 1.2s ease-in-out infinite;
      }
      .fp3d-alert-water,
      .fp3d-alert-window_rain {
        border-left-color: #4fb3ff;
        box-shadow: 0 0 18px rgba(79, 179, 255, 0.35);
      }
      .fp3d-alert-alarm_pending {
        border-left-color: #ffb547;
        box-shadow: 0 0 18px rgba(255, 181, 71, 0.35);
      }
      .fp3d-alert-more {
        align-self: center;
        color: var(--fp3d-muted);
        font-size: 13px;
      }
      @keyframes fp3d-alert-pulse {
        50% {
          box-shadow: 0 0 4px transparent;
        }
      }
      .fp3d-has-alerts .fp3d-energy {
        top: 58px;
      }
      .fp3d-scenes {
        position: absolute;
        left: 60px;
        right: 60px;
        bottom: calc(10px + var(--fp3d-bottom-inset, 0px));
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 6px;
        z-index: 2;
        pointer-events: none;
      }
      .fp3d-scenes .fp3d-chip {
        pointer-events: auto;
      }
      @media (prefers-reduced-motion: reduce) {
        .fp3d-alert,
        .fp3d-dev-found {
          animation: none;
        }
      }
      .fp3d-stage {
        position: absolute;
        inset: 0;
        overflow: hidden;
        container-type: size;
        container-name: fp3d;
        background: radial-gradient(ellipse at 50% 35%, var(--fp3d-sky, var(--fp3d-bg2)), var(--fp3d-ground, var(--fp3d-bg)) 72%);
        transition: background 2s ease;
      }
      .fp3d-canvas {
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        display: block;
        touch-action: none;
        cursor: grab;
      }
      .fp3d-canvas:active {
        cursor: grabbing;
      }
      .fp3d-labels {
        position: absolute;
        inset: 0;
        pointer-events: none;
      }
      .fp3d-pin-info {
        display: grid;
        gap: 1px;
        text-align: center;
      }
      .fp3d-pin-info small {
        font-size: 11px;
        font-weight: 500;
        opacity: 0.9;
        font-variant-numeric: tabular-nums;
      }
      .fp3d-pin {
        position: absolute;
        left: 0;
        top: 0;
        pointer-events: auto;
        font: 600 12.5px var(--fp3d-title-font);
        color: var(--fp3d-text);
        background: var(--fp3d-chrome);
        border: 1px solid var(--fp3d-line);
        border-radius: 10px;
        padding: 5px 10px;
        cursor: pointer;
        white-space: nowrap;
        backdrop-filter: blur(6px);
        box-shadow: var(--fp3d-shadow);
      }
      .fp3d-pin-floor {
        display: grid;
        justify-items: start;
        gap: 1px;
        padding: 8px 14px;
        border-radius: 12px;
        background: var(--fp3d-accent);
        color: var(--fp3d-accent-text);
        border-color: transparent;
        box-shadow: 0 0 22px rgba(55, 224, 255, 0.28);
      }
      .fp3d-pin-floor b {
        font: 700 15px var(--fp3d-title-font);
        letter-spacing: -0.01em;
      }
      .fp3d-pin-floor span {
        font: 500 12px var(--fp3d-font);
        opacity: 0.78;
      }
      .fp3d-dev {
        position: absolute;
        left: 0;
        top: 0;
        pointer-events: auto;
        display: inline-flex;
        align-items: center;
        gap: 6px;
        padding: 4px;
        border-radius: 999px;
        border: 1px solid var(--fp3d-line);
        background: var(--fp3d-chrome);
        color: var(--fp3d-muted);
        font: 600 12px var(--fp3d-font);
        cursor: pointer;
        white-space: nowrap;
        backdrop-filter: blur(6px);
        touch-action: manipulation;
        -webkit-user-select: none;
        user-select: none;
        transition: opacity 0.2s ease;
      }
      .fp3d-dev-icon {
        display: grid;
        place-items: center;
        width: 24px;
        height: 24px;
        border-radius: 50%;
        background: rgba(91, 124, 255, 0.14);
      }
      .fp3d-dev[data-entity^="trail:"] {
        padding: 2px 4px 2px 2px;
        font-size: 11px;
        border-color: rgba(55, 224, 255, 0.5);
      }
      .fp3d-dev[data-entity^="trail:"] .fp3d-dev-icon {
        color: #37e0ff;
      }
      .fp3d-dev[data-entity^="trail:"] .fp3d-dev-text {
        display: inline;
      }
      .fp3d-dev-text {
        display: none;
        padding-right: 6px;
        color: var(--fp3d-text);
        font-variant-numeric: tabular-nums;
        max-width: 160px;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .fp3d-dev-watt:empty {
        display: none;
      }
      .fp3d-dev-watt {
        padding: 1px 6px 1px 0;
        color: #37e0ff;
        font-variant-numeric: tabular-nums;
        font-weight: 700;
      }
      .fp3d-dev-on .fp3d-dev-watt {
        color: #2a1a00;
      }
      .fp3d-person {
        position: absolute;
        left: 0;
        top: 0;
        display: grid;
        place-items: center;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        overflow: hidden;
        background: #ff5fd2;
        color: #fff;
        font: 700 12px var(--fp3d-font);
        box-shadow:
          0 0 0 2px rgba(255, 95, 210, 0.45),
          0 0 18px #ff5fd2;
        pointer-events: auto;
      }
      .fp3d-person img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      .fp3d-person[hidden] {
        display: none;
      }
      .fp3d-no-room-names .fp3d-pin {
        display: none !important;
      }
      /* tablet level: blur over the canvas and glowing shadows are expensive on weak GPUs */
      .fp3d-stage.fp3d-low {
        transition: none;
      }
      .fp3d-low .fp3d-pin,
      .fp3d-low .fp3d-dev,
      .fp3d-low .fp3d-dev-on,
      .fp3d-low .fp3d-energy-item,
      .fp3d-low .fp3d-find input,
      .fp3d-low .fp3d-find-list,
      .fp3d-low .fp3d-find-btn,
      .fp3d-low .fp3d-swipe,
      .fp3d-low .fp3d-thumb {
        backdrop-filter: none;
        box-shadow: none;
        transition: none;
      }
      .fp3d-thumbs {
        position: absolute;
        left: 12px;
        top: 50%;
        transform: translateY(-50%);
        display: flex;
        flex-direction: column;
        gap: 8px;
        max-height: calc(100% - 140px);
        overflow-y: auto;
        scrollbar-width: none;
        z-index: 2;
      }
      .fp3d-thumb {
        position: relative;
        display: grid;
        padding: 0;
        width: 150px;
        border: 1px solid var(--fp3d-line);
        border-radius: 14px;
        background: color-mix(in srgb, var(--fp3d-chrome) 70%, transparent);
        color: var(--fp3d-text);
        cursor: pointer;
        overflow: hidden;
        font: inherit;
        box-shadow: var(--fp3d-shadow);
        opacity: 0.72;
        transition: opacity 0.15s, border-color 0.15s;
      }
      .fp3d-thumb:hover,
      .fp3d-thumb[aria-pressed="true"] {
        opacity: 1;
      }
      .fp3d-thumb[aria-pressed="true"] {
        border-color: var(--fp3d-accent);
        box-shadow: var(--fp3d-shadow), 0 0 0 1px var(--fp3d-accent), 0 0 18px rgba(55, 224, 255, 0.25);
      }
      .fp3d-thumb img {
        display: block;
        width: 100%;
        aspect-ratio: 4 / 3;
      }
      .fp3d-thumb span {
        position: absolute;
        left: 8px;
        bottom: 6px;
        font-size: 12px;
        font-weight: 600;
        text-shadow: 0 1px 4px rgba(0, 0, 0, 0.8);
      }
      .fp3d-thumbs-fold {
        align-self: flex-start;
        width: 26px;
        height: 22px;
        padding: 0;
        border: 1px solid var(--fp3d-line);
        border-radius: 8px;
        background: var(--fp3d-chrome);
        color: var(--fp3d-text);
        font-size: 11px;
        cursor: pointer;
      }
      /* folded: plain floor buttons with their names, no pictures (D177) */
      .fp3d-thumbs-compact .fp3d-thumb {
        padding: 6px 10px;
        min-width: 0;
      }
      .fp3d-thumbs-compact .fp3d-thumb span {
        position: static;
        background: none;
        padding: 0;
      }
      .fp3d-thumb-house {
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 8px 10px;
      }
      .fp3d-thumb-house span {
        position: static;
        text-shadow: none;
      }
      .fp3d-thumbs-small .fp3d-thumb {
        width: 104px;
      }
      .fp3d-find-btn {
        position: absolute;
        left: 12px;
        bottom: calc(10px + var(--fp3d-bottom-inset, 0px));
        width: 40px;
        height: 40px;
        display: grid;
        place-items: center;
        border: 0;
        border-radius: 13px;
        background: var(--fp3d-chrome);
        color: var(--fp3d-text);
        box-shadow: var(--fp3d-shadow);
        cursor: pointer;
      }
      /* the star sits above the search button, its menu opens above it */
      .fp3d-central-btn {
        position: absolute;
        left: 12px;
        bottom: calc(56px + var(--fp3d-bottom-inset, 0px));
        width: 40px;
        height: 40px;
        display: grid;
        place-items: center;
        border: 0;
        border-radius: 13px;
        background: var(--fp3d-chrome);
        color: var(--fp3d-text);
        box-shadow: var(--fp3d-shadow);
        cursor: pointer;
        z-index: 3;
      }
      .fp3d-central-on {
        color: var(--fp3d-accent);
      }
      .fp3d-central {
        position: absolute;
        left: 12px;
        bottom: calc(104px + var(--fp3d-bottom-inset, 0px));
        width: min(320px, calc(100% - 24px));
        max-height: calc(100% - 140px);
        overflow-y: auto;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        gap: 8px;
        padding: 12px 14px;
        border: 1px solid var(--fp3d-line);
        border-radius: 16px;
        background: var(--fp3d-chrome);
        color: var(--fp3d-text);
        box-shadow: var(--fp3d-shadow);
        backdrop-filter: blur(10px);
        z-index: 4;
      }
      .fp3d-central > b {
        font-size: 12px;
        letter-spacing: 0.08em;
        text-transform: uppercase;
        opacity: 0.7;
      }
      .fp3d-central-row {
        display: grid;
        grid-template-columns: 1fr auto auto;
        gap: 6px;
        align-items: center;
      }
      .fp3d-central-row small {
        opacity: 0.6;
      }
      .fp3d-central .fp3d-btn {
        min-width: 64px;
      }
      .fp3d-central-armed {
        background: #ff8a3d !important;
        color: #1a0d00 !important;
      }
      .fp3d-central-favs {
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
      }
      .fp3d-own-btn {
        display: inline-flex;
        align-items: center;
        gap: 6px;
      }
      .fp3d-own-btn ha-icon {
        --mdc-icon-size: 18px;
      }
      .fp3d-central-hint {
        margin: 0;
        font-size: 13px;
        opacity: 0.7;
      }
      .fp3d-low .fp3d-central {
        backdrop-filter: none;
      }
      /* the eye sits beside the search button; alone in the corner once the view is clean */
      .fp3d-eye {
        position: absolute;
        left: 56px;
        bottom: calc(10px + var(--fp3d-bottom-inset, 0px));
        width: 36px;
        height: 36px;
        display: grid;
        place-items: center;
        padding: 0;
        border-radius: 50%;
        border: 1px solid rgba(160, 240, 255, 0.35);
        background: rgba(8, 16, 34, 0.7);
        color: var(--fp3d-text);
        cursor: pointer;
        z-index: 4;
      }
      .fp3d-eye-clean {
        left: 12px;
        opacity: 0.55;
      }
      .fp3d-eye:hover,
      .fp3d-eye-clean:hover {
        opacity: 1;
      }
      .fp3d-find {
        position: absolute;
        left: 12px;
        bottom: calc(10px + var(--fp3d-bottom-inset, 0px));
        width: min(340px, calc(100% - 24px));
        display: flex;
        flex-direction: column-reverse;
        gap: 6px;
        z-index: 3;
      }
      .fp3d-find input {
        box-sizing: border-box;
        width: 100%;
        height: 42px;
        padding: 0 42px 0 14px;
        border: 1px solid var(--fp3d-line);
        border-radius: 14px;
        background: var(--fp3d-chrome);
        color: var(--fp3d-text);
        font: inherit;
        font-size: 15px;
        box-shadow: var(--fp3d-shadow);
        backdrop-filter: blur(8px);
      }
      .fp3d-find-close {
        position: absolute;
        right: 6px;
        bottom: 6px;
        width: 30px;
        height: 30px;
        border: 0;
        border-radius: 10px;
        background: none;
        color: var(--fp3d-muted);
        cursor: pointer;
      }
      .fp3d-find-list {
        display: grid;
        padding: 6px;
        border-radius: 14px;
        background: var(--fp3d-chrome);
        box-shadow: var(--fp3d-shadow);
        backdrop-filter: blur(8px);
      }
      .fp3d-find-list button {
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 8px 10px;
        border: 0;
        border-radius: 10px;
        background: none;
        color: var(--fp3d-text);
        text-align: left;
        font: inherit;
        cursor: pointer;
      }
      .fp3d-find-list button:hover,
      .fp3d-find-list button:focus-visible {
        background: rgba(127, 127, 127, 0.14);
      }
      .fp3d-find-list b {
        display: block;
        font-weight: 600;
      }
      .fp3d-find-list small,
      .fp3d-find-list p {
        color: var(--fp3d-muted);
        font-size: 12px;
        margin: 0;
      }
      .fp3d-find-list p {
        padding: 8px 10px;
      }
      .fp3d-find-icon {
        display: grid;
        place-items: center;
        width: 30px;
        height: 30px;
        border-radius: 10px;
        background: rgba(127, 127, 127, 0.15);
        flex: none;
      }
      .fp3d-find-icon svg {
        width: 16px;
        height: 16px;
      }
      .fp3d-swipe {
        position: absolute;
        transform: translate(-50%, calc(-100% - 28px));
        display: grid;
        grid-template-columns: auto auto;
        align-items: center;
        gap: 2px 12px;
        padding: 8px 12px;
        border-radius: 14px;
        background: var(--fp3d-chrome);
        box-shadow: var(--fp3d-shadow);
        pointer-events: none;
        white-space: nowrap;
        z-index: 4;
      }
      .fp3d-swipe span {
        font-size: 12px;
        color: var(--fp3d-muted);
      }
      .fp3d-swipe b {
        grid-row: 2;
        font: 700 22px var(--fp3d-title-font);
      }
      .fp3d-swipe i {
        grid-row: 1 / 3;
        grid-column: 2;
        position: relative;
        width: 10px;
        height: 44px;
        border-radius: 5px;
        background: rgba(127, 127, 127, 0.25);
        overflow: hidden;
      }
      .fp3d-swipe em {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        background: var(--fp3d-warm);
      }
      .fp3d-menu-backdrop {
        position: absolute;
        inset: 0;
        z-index: 5;
      }
      .fp3d-through {
        position: absolute;
        inset: 0;
        z-index: 4;
        pointer-events: none;
      }
      /* the camera wall: a glass sheet over the scene with every camera's picture */
      .fp3d-wall {
        position: absolute;
        inset: 56px 12px calc(var(--fp3d-bottom-inset, 0px) + 12px);
        z-index: 5;
        display: flex;
        flex-direction: column;
        gap: 8px;
        padding: 10px 12px;
        border-radius: 16px;
        background: rgba(8, 16, 34, 0.86);
        border: 1px solid rgba(160, 240, 255, 0.4);
        box-shadow: 0 0 28px rgba(55, 224, 255, 0.25);
        overflow: auto;
      }
      .fp3d-wall-head {
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-weight: 600;
        color: #e6fbff;
      }
      .fp3d-wall-pro {
        margin: 0;
        color: #ffd75a;
      }
      .fp3d-wall-head .fp3d-wall-title {
        flex: 1;
        text-align: center;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        padding: 0 8px;
      }
      .fp3d-wall-title b {
        color: #ff6b6b;
        font-weight: 600;
      }
      .fp3d-wall-tools {
        display: flex;
        gap: 6px;
      }
      .fp3d-wall-big {
        flex: 1;
        min-height: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 12px;
        overflow: hidden;
        background: #0a1426;
      }
      .fp3d-wall-big img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
      /* the stream player: a bare card, as wide as the sheet allows for a 16:9 picture */
      .fp3d-wall-big > hui-picture-entity-card,
      .fp3d-wall-big > hui-error-card {
        width: min(100%, calc((100vh - 200px) * 16 / 9));
        --ha-card-background: transparent;
        --ha-card-border-width: 0;
        --ha-card-box-shadow: none;
      }
      .fp3d-wall-grid {
        flex: 1;
        display: grid;
        align-content: center;
        gap: 12px;
        min-height: 0;
      }
      .fp3d-wall-cam {
        position: relative;
        padding: 0;
        border: 1px solid rgba(160, 240, 255, 0.3);
        border-radius: 12px;
        overflow: hidden;
        background: #0a1426;
        cursor: pointer;
        aspect-ratio: 16 / 9;
        width: 100%;
        max-height: calc(100vh - 160px);
      }
      .fp3d-wall-cam img,
      .fp3d-wall-none {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #8aa;
      }
      .fp3d-wall-seen {
        border-color: rgba(255, 80, 90, 0.9);
        box-shadow: 0 0 14px rgba(255, 60, 70, 0.5);
      }
      .fp3d-wall-name {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        padding: 4px 8px;
        font-size: 12px;
        text-align: left;
        color: #e6fbff;
        background: linear-gradient(transparent, rgba(0, 0, 0, 0.7));
      }
      .fp3d-wall-name b {
        color: #ff6b6b;
        font-weight: 600;
      }
      .fp3d-pro {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        z-index: 6;
        display: flex;
        flex-direction: column;
        gap: 8px;
        max-width: 320px;
        padding: 16px 18px;
        border-radius: 14px;
        background: var(--fp3d-chrome-solid);
        border: 1px solid var(--fp3d-accent);
        box-shadow: 0 12px 40px rgba(0, 0, 0, 0.5);
      }
      .fp3d-pro div {
        display: flex;
        gap: 8px;
      }
      .fp3d-pro a {
        text-decoration: none;
      }
      .fp3d-flash::after {
        content: "";
        position: absolute;
        inset: 0;
        z-index: 3;
        background: rgba(225, 238, 255, 0.4);
        pointer-events: none;
      }
      .fp3d-through-img {
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        opacity: var(--fp3d-blend);
      }
      .fp3d-through-bar {
        position: absolute;
        left: 50%;
        bottom: calc(var(--fp3d-bottom-inset, 0px) + 14px);
        transform: translateX(-50%);
        display: flex;
        align-items: center;
        gap: 12px;
        max-width: calc(100% - 32px);
        padding: 8px 10px 8px 16px;
        border-radius: 999px;
        background: var(--fp3d-chrome);
        backdrop-filter: blur(12px);
        border: 1px solid var(--fp3d-line);
        pointer-events: auto;
      }
      .fp3d-through-name {
        font-weight: 600;
        white-space: nowrap;
      }
      /* a small note that the picture is a still, so nobody wonders why it does not move */
      .fp3d-still {
        font-size: 11px;
        font-weight: 400;
        opacity: 0.65;
        white-space: nowrap;
        margin-left: 6px;
      }
      .fp3d-through-bar input[type="range"] {
        width: 140px;
        accent-color: var(--fp3d-accent);
      }
      .fp3d-through-on :is(.fp3d-pin, .fp3d-dev, .fp3d-energy, .fp3d-legend, .fp3d-thumbs, .fp3d-scenes, .fp3d-find-btn, .fp3d-stats) {
        display: none;
      }
      fp3d-quick-menu {
        position: absolute;
        z-index: 6;
      }
      .fp3d-dev-found {
        animation: fp3d-found 0.6s ease-in-out 4;
      }
      @keyframes fp3d-found {
        50% {
          scale: 1.35;
          filter: drop-shadow(0 0 12px var(--fp3d-accent));
        }
      }
      .fp3d-legend {
        position: absolute;
        left: 12px;
        bottom: calc(60px + var(--fp3d-bottom-inset, 0px));
        display: grid;
        gap: 4px;
        min-width: 180px;
        padding: 8px 11px;
        border-radius: 12px;
        background: var(--fp3d-chrome);
        box-shadow: var(--fp3d-shadow);
        font-size: 12px;
        pointer-events: none;
      }
      .fp3d-legend-bar {
        height: 8px;
        border-radius: 4px;
      }
      .fp3d-legend-range {
        display: flex;
        justify-content: space-between;
        color: var(--fp3d-muted);
        font-variant-numeric: tabular-nums;
      }
      .fp3d-legend-none {
        color: var(--fp3d-warm);
      }
      /* Energie Pro: the glass hologram beside the house */
      .fp3d-holo {
        position: absolute;
        left: 0;
        top: 0;
        z-index: 4;
        width: 236px;
        padding: 12px 14px 11px;
        border-radius: 16px;
        overflow: hidden;
        cursor: pointer;
        background: linear-gradient(140deg, rgba(150, 235, 255, 0.2) 0%, rgba(70, 140, 230, 0.08) 45%, rgba(20, 60, 140, 0.05) 100%);
        backdrop-filter: blur(7px) saturate(150%);
        -webkit-backdrop-filter: blur(7px) saturate(150%);
        border: 1px solid rgba(160, 240, 255, 0.55);
        box-shadow:
          0 0 28px rgba(55, 224, 255, 0.35),
          0 0 2px rgba(200, 250, 255, 0.9),
          inset 0 1px 0 rgba(255, 255, 255, 0.45),
          inset 0 0 36px rgba(55, 224, 255, 0.14);
        color: #e6fbff;
        font-size: 12px;
        line-height: 1.35;
        text-shadow: 0 0 6px rgba(80, 220, 255, 0.55);
        will-change: transform;
        transform-origin: 0 0;
      }
      .fp3d-holo[hidden],
      .fp3d-holo-link[hidden] {
        display: none;
      }
      /* a device's card: smaller than the plant's */
      /* the now-playing card: cover, titles, transport and volume */
      .fp3d-holo-media .fp3d-holo-head {
        cursor: pointer;
      }
      .fp3d-holo-track {
        display: flex;
        align-items: center;
        gap: 10px;
        margin-top: 6px;
      }
      .fp3d-holo-cover {
        width: 46px;
        height: 46px;
        border-radius: 8px;
        object-fit: cover;
        flex: none;
        box-shadow: 0 0 12px rgba(55, 224, 255, 0.35);
      }
      .fp3d-holo-cover-none {
        display: grid;
        place-items: center;
        font-size: 22px;
        background: rgba(55, 224, 255, 0.15);
        color: #a8f0ff;
      }
      .fp3d-holo-titles {
        display: grid;
        gap: 2px;
        min-width: 0;
      }
      .fp3d-holo-titles b {
        font-size: 14px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: 170px;
      }
      .fp3d-holo-titles span {
        font-size: 12px;
        opacity: 0.8;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: 170px;
      }
      .fp3d-holo-media-controls {
        display: flex;
        align-items: center;
        gap: 6px;
        margin-top: 8px;
      }
      .fp3d-holo-media-controls button {
        width: 28px;
        height: 28px;
        border-radius: 50%;
        border: 1px solid rgba(160, 240, 255, 0.4);
        background: rgba(8, 16, 34, 0.6);
        color: var(--fp3d-text);
        cursor: pointer;
        font-size: 12px;
      }
      .fp3d-holo-media-controls input[type="range"] {
        width: 70px;
        accent-color: var(--fp3d-accent);
      }
      .fp3d-holo-car-main {
        display: flex;
        align-items: baseline;
        gap: 8px;
        margin-top: 4px;
      }
      .fp3d-holo-car-main b {
        font-size: 22px;
        font-variant-numeric: tabular-nums;
      }
      .fp3d-holo-car-main span {
        font-size: 12px;
        opacity: 0.85;
      }
      .fp3d-holo-car-bar {
        height: 5px;
        margin-top: 6px;
        border-radius: 3px;
        background: rgba(160, 240, 255, 0.15);
        overflow: hidden;
      }
      .fp3d-holo-car-bar i {
        display: block;
        height: 100%;
        border-radius: 3px;
        box-shadow: 0 0 8px currentColor;
      }
      .fp3d-holo-on {
        border-color: var(--fp3d-accent) !important;
        color: var(--fp3d-accent) !important;
      }
      .fp3d-holo-vol {
        font-size: 11px;
        opacity: 0.8;
        font-variant-numeric: tabular-nums;
      }
      .fp3d-holo-dev {
        width: 184px;
        padding: 10px 12px 9px;
      }
      /* tablet level: no blur and no sheen, the glass is painted */
      .fp3d-holo-plain {
        backdrop-filter: none;
        -webkit-backdrop-filter: none;
        background: rgba(12, 26, 50, 0.9);
      }
      .fp3d-holo-plain .fp3d-holo-sheen,
      .fp3d-holo-plain .fp3d-holo-scan {
        display: none;
      }
      /* the thin line from the solar field up to the card, with a dot on the field */
      .fp3d-holo-link {
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        z-index: 3;
        pointer-events: none;
        overflow: visible;
      }
      .fp3d-holo-link line {
        stroke: rgba(160, 240, 255, 0.75);
        stroke-width: 1.2;
        filter: drop-shadow(0 0 3px rgba(55, 224, 255, 0.8));
      }
      .fp3d-holo-link circle {
        fill: #cffaff;
        stroke: rgba(55, 224, 255, 0.8);
        stroke-width: 2;
        filter: drop-shadow(0 0 4px rgba(55, 224, 255, 0.9));
      }
      .fp3d-holo-min {
        width: 150px;
      }
      .fp3d-holo-sheen {
        position: absolute;
        inset: 0;
        background: linear-gradient(115deg, rgba(255, 255, 255, 0.22) 0%, rgba(255, 255, 255, 0) 32%, rgba(255, 255, 255, 0) 68%, rgba(255, 255, 255, 0.07) 100%);
        pointer-events: none;
      }
      .fp3d-holo-scan {
        position: absolute;
        inset: 0;
        background: repeating-linear-gradient(0deg, rgba(160, 240, 255, 0.06) 0 1px, transparent 1px 4px);
        pointer-events: none;
      }
      .fp3d-holo-body {
        position: relative;
      }
      .fp3d-holo-head {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 10px;
        letter-spacing: 0.14em;
        color: #8ff0ff;
        text-transform: uppercase;
      }
      .fp3d-holo-live {
        color: #5dffb0;
      }
      .fp3d-holo-big {
        display: flex;
        align-items: baseline;
        gap: 9px;
        margin: 6px 0 1px;
      }
      .fp3d-holo-big b {
        font-size: 26px;
        color: #ffe27a;
        text-shadow: 0 0 12px rgba(255, 210, 80, 0.85);
        font-variant-numeric: tabular-nums;
      }
      .fp3d-holo-big span,
      .fp3d-holo-sub {
        color: #aee9ff;
      }
      .fp3d-holo-sub {
        margin-bottom: 6px;
      }
      .fp3d-holo-plants {
        display: grid;
        grid-template-columns: auto auto;
        justify-content: space-between;
        column-gap: 10px;
        margin: 0 0 5px;
        font-size: 11px;
        color: #aee9ff;
      }
      .fp3d-holo-plants b {
        color: #ffe27a;
        text-align: right;
        font-variant-numeric: tabular-nums;
      }
      .fp3d-holo-sub b,
      .fp3d-holo-cell b,
      .fp3d-holo-foot b {
        color: #fff;
        font-variant-numeric: tabular-nums;
      }
      .fp3d-holo-curve {
        display: block;
        margin-bottom: 7px;
        filter: drop-shadow(0 0 4px rgba(255, 215, 90, 0.7));
      }
      .fp3d-holo-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 6px;
      }
      .fp3d-holo-cell {
        border-left: 2px solid #aee9ff;
        padding-left: 6px;
      }
      .fp3d-holo-cell span {
        font-size: 11px;
      }
      .fp3d-holo-bat {
        border-left-color: #5dffb0;
      }
      .fp3d-holo-bat span {
        color: #5dffb0;
      }
      .fp3d-holo-exp {
        border-left-color: #4ff6ff;
      }
      .fp3d-holo-exp span {
        color: #4ff6ff;
      }
      .fp3d-holo-imp {
        border-left-color: #ff6fb0;
      }
      .fp3d-holo-imp span {
        color: #ff8fc4;
      }
      .fp3d-holo-house {
        border-left-color: #a9c0ff;
      }
      .fp3d-holo-wb {
        border-left-color: #63c9ff;
      }
      .fp3d-holo-bar {
        margin-top: 8px;
        height: 5px;
        border-radius: 3px;
        background: rgba(160, 240, 255, 0.16);
        overflow: hidden;
      }
      .fp3d-holo-bar div {
        height: 100%;
        background: linear-gradient(90deg, #5dffb0, #4ff6ff);
        box-shadow: 0 0 8px rgba(80, 240, 255, 0.8);
      }
      .fp3d-holo-foot {
        display: flex;
        justify-content: space-between;
        margin-top: 3px;
        font-size: 10px;
        color: #aee9ff;
      }
      .fp3d-energy {
        position: absolute;
        left: 12px;
        top: 10px;
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
        max-width: calc(100% - 24px);
        pointer-events: none;
      }
      .fp3d-energy-item {
        display: grid;
        padding: 5px 11px 6px;
        border-radius: 12px;
        background: var(--fp3d-chrome);
        border-left: 3px solid var(--fp3d-line);
        box-shadow: var(--fp3d-shadow);
        backdrop-filter: blur(6px);
        font-variant-numeric: tabular-nums;
      }
      .fp3d-energy-item span {
        font-size: 11px;
        color: var(--fp3d-muted);
      }
      .fp3d-energy-item b {
        font: 700 15px var(--fp3d-title-font);
      }
      .fp3d-energy-total {
        border-left-color: #6fd8ff;
      }
      .fp3d-energy-grid {
        border-left-color: #37e0ff;
      }
      .fp3d-energy-export,
      .fp3d-energy-solar {
        border-left-color: #ffc633;
      }
      .fp3d-energy-battery {
        border-left-color: #59ff8c;
      }
      .fp3d-flow-toggle {
        pointer-events: auto;
        cursor: pointer;
        border: 0;
        border-left: 3px solid var(--fp3d-line);
        color: inherit;
        text-align: left;
        font: inherit;
      }
      .fp3d-flow-toggle[aria-pressed="true"] {
        border-left-color: var(--fp3d-accent);
      }
      .fp3d-flow-toggle span {
        display: none;
      }
      .fp3d-flow-toggle b {
        opacity: 0.4;
        filter: grayscale(1);
      }
      .fp3d-flow-toggle[aria-pressed="true"] b {
        opacity: 1;
        filter: none;
      }
      .fp3d-energy-tariff {
        border-left-color: #b98cff;
      }
      /* narrow stages (portrait tablets, phones): the energy values scroll in one row */
      @container fp3d (max-width: 900px) {
        .fp3d-energy {
          flex-wrap: nowrap;
          overflow-x: auto;
          scrollbar-width: none;
          pointer-events: auto;
        }
        .fp3d-legend {
          bottom: auto;
          top: 62px;
        }
        .fp3d-has-alerts .fp3d-legend {
          top: 110px;
        }
      }
      /* a room sheet covers the lower half: the view's own controls step aside */
      @container fp3d ((max-width: 700px) or ((orientation: portrait) and (max-width: 1000px))) {
        .fp3d-panel-open :is(.fp3d-find-btn, .fp3d-find, .fp3d-thumbs, .fp3d-legend, .fp3d-stats, .fp3d-scenes) {
          display: none;
        }
      }
      @media (pointer: coarse) {
        .fp3d-find-close {
          width: 40px;
          height: 40px;
          right: 1px;
          bottom: 1px;
        }
        .fp3d-dev {
          padding: 6px;
        }
        .fp3d-pin {
          padding: 8px 12px;
        }
      }
      .fp3d-dev-full .fp3d-dev-text {
        display: inline;
      }
      .fp3d-dev-name:empty {
        display: none;
      }
      .fp3d-dev-name {
        position: absolute;
        top: calc(100% + 3px);
        left: 50%;
        transform: translateX(-50%);
        max-width: 140px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        padding: 1px 6px;
        border-radius: 6px;
        font-size: 10.5px;
        font-weight: 600;
        line-height: 1.35;
        color: var(--fp3d-text);
        background: rgba(10, 16, 32, 0.72);
        pointer-events: none;
      }
      .fp3d-dev-sel {
        outline: 2px solid var(--fp3d-accent);
        outline-offset: 2px;
      }
      .fp3d-dev-on {
        color: #2a1a00;
        border-color: transparent;
        background: var(--fp3d-glow, var(--fp3d-warm));
        box-shadow: 0 0 16px var(--fp3d-glow, var(--fp3d-warm));
      }
      .fp3d-dev-on .fp3d-dev-icon {
        background: rgba(255, 255, 255, 0.28);
      }
      .fp3d-dev-on .fp3d-dev-text {
        color: #2a1a00;
      }
      .fp3d-dev-na {
        opacity: 0.45;
      }
      .fp3d-dev-dim {
        opacity: 0.35;
      }
      .fp3d-dev[hidden],
      .fp3d-pin[hidden] {
        display: none;
      }
      .fp3d-pin-active {
        background: var(--fp3d-accent);
        color: var(--fp3d-accent-text);
        border-color: transparent;
        box-shadow: 0 0 18px rgba(55, 224, 255, 0.45);
      }
      .fp3d-stats b {
        color: var(--fp3d-accent);
        font-weight: 700;
      }
      .fp3d-stats {
        padding: 4px 9px;
        border-radius: 8px;
        background: var(--fp3d-chrome);
        position: absolute;
        right: 10px;
        bottom: calc(8px + var(--fp3d-bottom-inset, 0px));
        font-size: 11.5px;
        color: var(--fp3d-muted);
        font-variant-numeric: tabular-nums;
        pointer-events: none;
      }
      .fp3d-error {
        position: absolute;
        inset: auto 16px 16px;
        color: var(--fp3d-danger);
      }
    `,
  ];
}

if (!customElements.get("fp3d-view3d")) customElements.define("fp3d-view3d", Fp3dView3d);

/** Power as "850 W" or "1,2 kW". */
function formatPower(hass: HomeAssistant | undefined, w: number): string {
  return Math.abs(w) >= 1000 ? `${formatNumber(hass, w / 1000, 1)} kW` : `${Math.round(w)} W`;
}

/** Marker height above furniture: in front of a screen, above wall units, else just above the top. */
function markerHeight(f: Furniture): number {
  if (f.type === "tv_board") return f.h + 0.9;
  // wall TV and wall cabinet: above the item (their height above the floor comes from mountBase)
  if (f.type === "tv_wall" || f.type === "kitchen_wall") return f.h + 0.25;
  return f.h + 0.35;
}
