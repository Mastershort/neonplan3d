// Lit wrapper around the lazily loaded 3D viewer.

import { css, html, LitElement, nothing, svg, type PropertyValues } from "lit";
import {
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
} from "../devices.ts";
import { alertColor, alertEntities, alertSources, alertText, findAlerts, type Alert, type AlertSources } from "../alerts.ts";
import { iconPath, iconSvg, mdiIcon } from "../icons.ts";
import { deviceSensors, energySummary, fetchSolarRows, fieldLevels, fieldPowers, findConsumers, flowColor, flowSegments, gridPoint, powerSensorFor, readPower, solarCurvePath, solarDayFromStats, type Consumer, type EnergySummary, type StatRow } from "../energy.ts";
import { fieldFace, fieldSize } from "../solar.ts";
import { DEFAULT_HOLOGRAM, type SolarField } from "../model.ts";

/** A hologram card: the house's balance on the main plant, or one plant (a balcony plant) on its own. */
interface HoloCard {
  kind: "main" | "plant";
  name: string;
  /** The plant's power now (W); null on the main card (it shows the house). */
  w: number | null;
  /** Sensors whose statistics give today's curve. */
  dayIds: string[];
  /** A battery of this plant (the nearest one on its floor). */
  battery: { soc: number | null; w: number | null } | null;
}

/** The pin at the street end of the grid cable. */
const GRID_ICON = '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M13 2 4 14h7l-1 8 9-12h-7z"/></svg>';
import { STAGE, type Theme } from "../themes.ts";
import { HEAT_SCALES, heatColor, heatGradient, roomValues, type HeatMode } from "../heatmap.ts";
import { furnitureName } from "../furniture-names.ts";
import { fetchImage } from "../api.ts";
import { formatNumber, translate, type I18nKey } from "../i18n.ts";
import { getPacks, mountBase, packItem, packsVersion } from "../packs.ts";
import { parkedVehicles, parkingEntities } from "../parking.ts";
import { TRAIL_ICON, TRAIL_WINDOW_MS, trailEvents, trailPoints, trailSources, trailTime, type HistoryRow } from "../trail.ts";
import { limitEffects, weatherEntity, weatherState } from "../weather.ts";
import { SHOW_PRESENCE } from "../flags.ts";
import { hasFeature, manualUrl, shopUrl, type Feature } from "../features.ts";
import { searchIndex, searchItems, type SearchItem } from "../search.ts";
import { coverPositionable, lightAbilities } from "./quick-menu.ts";
import "./quick-menu.ts";
import { load3d } from "../load3d.ts";
import { buildMarkers, cameraMotionSensors, openMoreInfo, placedEntities, stateText, toggleEntity } from "../markers.ts";
import { furnitureFootprint, isLamp, LAMP_MODEL, outdoorGround, pointInPolygon, surfaceHeight, type Building, type Furniture } from "../model.ts";
import { floorCounts, floorInfoText, personsInRooms } from "../presence.ts";
import { controls, tokens } from "../styles.ts";
import type { HassEntity, HomeAssistant } from "../types.ts";
import type { DeviceMarker, FloorplanViewer, FloorStack, RobotInfo, Quality, ScreenState, SurfaceGrab, ViewerStats, WallMode } from "../viewer/viewer3d.ts";

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
    markerMode: { attribute: false },
    heatMode: { attribute: false },
    theme: { attribute: false },
    packs: { attribute: false },
    showEnergy: { attribute: false },
    flows: { attribute: false },
    furnish: { type: Boolean },
    surfaceGrab: { attribute: false },
    furnishTypes: { attribute: false },
    trail: { type: Boolean },
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
    _swipe: { state: true },
    _menu: { state: true },
    _through: { state: true },
    _blend: { state: true },
    _find: { state: true },
    _thumbs: { state: true },
    floorThumbs: { attribute: false },
    roomLabels: { attribute: false },
    floorStack: { attribute: false },
    panelOpen: { attribute: false },
    alerts: { attribute: false },
    alertJump: { attribute: false },
    scenes: { attribute: false },
    dimmed: { attribute: false },
    autoOrbit: { attribute: false },
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
  declare markerMode: MarkerMode;
  declare heatMode: HeatMode;
  /** Imported furniture packs (a new list rebuilds pack furniture). */
  declare packs: unknown;
  declare theme: Theme;
  /** Show the energy values at the top (cards can switch them off). */
  declare showEnergy: boolean;
  /** Power flow lines fixed on or off (cards); null: the viewer's own toggle decides. */
  declare flows: boolean | null;
  /** Furnishing: furniture and lamps are dragged in 3D (admins, panel only). */
  declare furnish: boolean;
  /** Editor: moves solar fields and roof windows with rays from the camera (null: none). */
  declare surfaceGrab: SurfaceGrab | null;
  /** Editor: only these furniture types can be moved in 3D (null: all). */
  declare furnishTypes: readonly string[] | null;
  /** Motion trail: where motion was reported in the last half hour, with times. */
  declare trail: boolean;
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
  private holoIds = "";
  /** The start view last handed to the viewer (JSON), to notice a new one. */
  private shownStartView: string | undefined;
  /** A running swipe on a lamp or blind: the value shown next to the finger. */
  private declare _swipe: { entity: string; kind: "light" | "cover"; start: number; value: number; x: number; y: number } | null;
  /** Quick menu at a device (long press). */
  private declare _menu: { entity: string; x: number; y: number } | null;
  /** Looking through a camera: its live picture lies over the 3D view; `back` is the view to return to. */
  private declare _through: { entity: string; back: ReturnType<FloorplanViewer["getView"]> } | null;
  /** How strongly the camera picture covers the 3D view (0 = only 3D, 1 = only the picture). */
  private declare _blend: number;
  /** Floor switcher with small pictures of the floors (panel and card; off with a fixed floor). */
  declare floorThumbs: boolean;
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
    this.markerMode = "important";
    this.heatMode = "none";
    this.theme = "neon";
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
    this._blend = 0.6;
    this._find = null;
    this._thumbs = [];
    this.floorThumbs = true;
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
    try {
      this._flows = localStorage.getItem("neonplan3d.flows") === "1";
    } catch {
      this._flows = false;
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
      this.viewer.setFurnishMode(this.furnish);
      this.viewer.setSurfaceGrab(this.surfaceGrab ?? null);
      this.viewer.setFurnishTypes(this.furnishTypes ?? null);
      this.viewer.setAnchorCallback((i, x, y, on, scale, facing) => this.placeHolo(i, x, y, on, scale, facing));
      this.viewer.setFloorStack(this.floorStack);
      this.viewer.setStats(this.showStats);
      this.viewer.setAutoOrbit(this.autoOrbit ? 0.06 : 0);
      this._low = this.viewer.low;
      this.viewer.setPacks([...getPacks()]);
      this.shownPacks = packsVersion();
      if (this.building) {
        this.shownStartView = JSON.stringify(this.building.settings.start_view ?? null);
        this.viewer.setStartView(this.building.settings.start_view ?? null);
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
      const start = JSON.stringify(this.building.settings.start_view ?? null);
      const startChanged = this.shownStartView !== undefined && this.shownStartView !== start;
      this.shownStartView = start;
      v.setStartView(this.building.settings.start_view ?? null);
      v.setBuilding(this.building);
      if (startChanged && this.floorId === null) v.resetView();
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
    if (changed.has("floorStack")) v.setFloorStack(this.floorStack);
    if (changed.has("theme")) v.setTheme(this.theme);
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
      const doors = b.floors.flatMap((f) => f.furniture.flatMap((m) => [m.door_left ?? null, m.door_right ?? null, m.soc ?? null, m.status ?? null, m.charge ?? null]));
      const roofWindowIds = (b.settings.roof?.windows ?? []).flatMap((w) => [w.cover, w.contact, w.tilt]).filter((x): x is string => !!x && x !== "none");
      // the solar fields' and strings' sensors feed the roof cables
      const solarIds = [...(b.settings.roof?.solar ?? []).map((f) => f.entity), ...(b.settings.roof?.strings ?? []).map((s) => s.entity)].filter((x): x is string => !!x && x !== "none");
      const robotRooms = b.floors.flatMap((f) => f.furniture.filter((m) => m.type === "robot_vacuum").map((m) => robotRoomSensor(hass, this.furnitureLinks.get(m.id)?.entity ?? null, m.room_sensor)));
      const pictureRules = b.floors.flatMap((f) => f.furniture.flatMap((m) => (m.pictures ?? []).flatMap((r) => [r.entity, ...(r.image.startsWith("camera:") ? [r.image.slice(7)] : [])])));
      const heat =
        this.heatMode === "none"
          ? []
          : b.floors.flatMap((f) => f.rooms.flatMap((r) => areaEntities(hass, r.area_id).filter((id) => id.startsWith("sensor."))));
      this.alertSrc = this.alerts ? alertSources(hass, b, this.weatherEntityId) : null;
      const warn = this.alertSrc ? alertEntities(this.alertSrc) : [];
      const parking = parkingEntities(b.floors);
      const motion = trailSources(hass, b).map((s) => s.entity);
      const weather = weatherEntity(hass, this.weatherEntityId ?? b.settings.weather_entity);
      const all = [...placed, ...cameraSensors, ...links, ...power, ...furniture, ...doors, ...robotRooms, ...roofWindowIds, ...solarIds, ...pictureRules, e.grid, e.solar, e.battery, e.battery_soc, e.consumption, e.tariff, ...presence, ...lights, ...heat, ...warn, ...parking, ...motion, weather, "sun.sun"];
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
    v.setDevices([
      ...[...deviceMarkers, ...furniture.markers].map((m) => {
        // "without watts" drops the power badge (a plug shows only on / off)
        const power = m.show === "no_power" || ("energyDevice" in m && m.energyDevice) ? null : (byDevice.get(m.id) ?? null);
        // at night (kiosk) colour effects rest
        const marker = { ...m, power, powerText: power === null ? undefined : formatPower(hass, power), effect: this.dimmed ? false : m.effect };
        return { ...marker, pin: this.showPin(marker) };
      }),
      // Energie Pro: the street end of the grid cable carries a pin with what comes in or goes out
      ...(pro && (this.flows ?? this._flows) && !this.dimmed && summary.grid !== null ? [this.gridPin(hass, b, summary.grid)] : []).filter((m): m is NonNullable<typeof m> => !!m),
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
      roofWindows.set(w.id, { open: s.open, tilt: s.tilt, cover: s.cover ?? 0 });
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
      return { p: [c[0] + face.n[0] * 0.05, c[1] + face.n[1] * 0.05, c[2] + face.n[2] * 0.05] as [number, number, number], n: [face.n[0], face.n[1], face.n[2]] as [number, number, number], floorId, size };
    };
    const anchors: { p: [number, number, number]; n: [number, number, number]; floorId: string; size: number }[] = [];
    const cards: HoloCard[] = [];
    const anyEnergy = summary.grid !== null || summary.battery !== null || summary.solar !== null;
    const first = pro && summary.solar !== null ? (fields.find((f) => f.id === holo.field) ?? fields[0]) : undefined;
    const mainAnchor = first ? anchorOn(first, holo.right, holo.up, holo.size) : null;
    const devicePower = this.devicePowers(hass, b);
    const solarIds = pro && summary.solar !== null ? (b.energy.solar ? [b.energy.solar] : deviceSensors(b, (f) => this.furnitureLinks?.get(f.id)?.power ?? null).solar) : [];
    if (mainAnchor) {
      anchors.push(mainAnchor);
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
      anchors.push({ p: [x1 + 0.6, top + 0.4, (z0 + z1) / 2], n: [1, 0, 0], floorId: topFloor.id, size: holo.size });
      cards.push({ kind: "main", name: translate(hass, "holo_title"), w: null, dayIds: solarIds, battery: null });
    }
    if (pro && first) {
      const mainInverter = inverterOf(first);
      const seen = new Set<string>();
      for (const floor of b.floors) {
        for (const inv of floor.furniture.filter((m) => m.type === "inverter")) {
          if (inv.id === mainInverter || seen.has(inv.id)) continue;
          seen.add(inv.id);
          const own = fields.filter((f) => inverterOf(f) === inv.id);
          const sensor = this.furnitureLinks?.get(inv.id)?.power ?? null;
          const anchor = own.length ? anchorOn(own[0], 0, 0, holo.size * 0.85) : null;
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
    if (!el) {
      if (index === 0 && this._holoOn) this._holoOn = false;
      return;
    }
    if (index === 0 && on !== this._holoOn) this._holoOn = on;
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

  /** Energie Pro: the glass holograms – the house's balance on the main field, one card per further plant. */
  private renderHologram() {
    const e = this._energy;
    if (!hasFeature("energy_pro") || !e || (e.solar === null && e.grid === null && e.battery === null) || this.roomId || this.floorId !== null || !this.showEnergy) return nothing;
    return this._holos.map((card, i) => this.renderHoloCard(card, i, e));
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
    if (this.heatMode !== "none") {
      const mode = this.heatMode;
      const values = roomValues(hass, b, mode);
      this.heatValues = values;
      tint = new Map([...values].map(([id, value]) => [id, heatColor(mode, value)]));
    }
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
        if (isLamp(f.type)) {
          markers.push(this.lampMarker(hass, floor, f, linked?.entity ?? null));
          continue;
        }
        // a home battery with only its charge, a wallbox with only its status still gets its marker
        const extraRef = f.type === "home_battery" ? f.soc : f.type === "wallbox" ? f.status : null;
        const extra = extraRef && extraRef !== "none" ? extraRef : null;
        const link = linked ?? (extra ? { entity: null, power: null } : undefined);
        if (!link) continue;
        // a battery goes by its charge first: its power sensor is often placed on its own as well
        const id = (f.type === "home_battery" ? (extra ?? link.entity ?? link.power) : (link.entity ?? link.power ?? extra))!;
        targets.set(f.id, id);
        const st = link.entity ? hass.states[link.entity] : undefined;
        // the meter's sensor is the grid (+ = import), the battery's can point the other way as well
        const invert = f.type === "meter" ? b.energy.grid_invert : f.type === "home_battery" ? b.energy.battery_invert : false;
        const power = link.power ? readPower(hass.states[link.power], invert) : null;
        if (link.power && power !== null && !consumerSensors.has(link.power)) {
          consumerSensors.add(link.power);
          consumers.push({ id, powerEntity: link.power, floorId: floor.id, x: f.x, z: f.z, power: Math.max(0, power), wallbox: f.type === "wallbox" || undefined });
        }
        const running = (power ?? 0) > 10 || st?.state === "on" || st?.state === "running" || (isStatusSensor(st) && isActive(st));
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
        if (st && hasScreen(f.type)) {
          // without the "screens" feature a screen is only lit or dark: no app colour, no picture
          const live = hasFeature("screens");
          // a light (an aquarium, a lit panel) glows in its own colour, other entities in the neon cyan
          const lit = kindOf(st.entity_id) === "light" ? lightGlow(st) : null;
          const color = live && kindOf(st.entity_id) === "media" ? appColor(st) : lit ? lit.color : isActive(st) || st.state === "playing" ? ([0.22, 0.88, 1] as [number, number, number]) : null;
          const picture = live && kindOf(st.entity_id) === "media" ? ((st.attributes.entity_picture as string | undefined) ?? null) : null;
          if (color) screens.set(f.id, { color, level: st.state === "playing" ? 1 : 0.6, picture });
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
          text:
            f.type === "home_battery"
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
          active: st ? isActive(st) : (power ?? 0) > 5,
          unavailable: st ? isUnavailable(st) : false,
          glow: null,
          // its pin grabs the item when furnishing
          furnitureId: f.id,
          // inverter, battery, wallbox: their own text (watts, charge, status) is always worth a pin
          energyDevice: f.type === "inverter" || f.type === "home_battery" || f.type === "wallbox" || f.type === "meter",
          show: f.marker ?? undefined,
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
    this.watchCameras(this.cameraScreens > 0 || !!this._through);
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
        if (this._through) this.requestUpdate();
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

  /** A lamp: its 3D model glows with the linked light and is tapped directly. */
  private lampMarker(hass: HomeAssistant, floor: Building["floors"][number], f: Furniture, entity: string | null): DeviceMarker & { fromFurniture: boolean } {
    const st = entity ? hass.states[entity] : undefined;
    const item = packItem(f.type);
    const model = LAMP_MODEL[f.type] ?? item?.light ?? "floor";
    // a height above the floor set by hand wins (a table lamp on a shelf, a floor lamp on a platform)
    const base = f.mount_y != null && !item
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
      strip: Math.max(0.3, base - 0.2),
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
      glow: st ? lightGlow(st) : null,
      lamp: model,
      rotation: f.rotation,
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
    return html`<nav class="fp3d-thumbs ${this.narrowThumbs ? "fp3d-thumbs-small" : ""}" aria-label=${translate(this.hass, "floors")}>
      <button class="fp3d-thumb fp3d-thumb-house" aria-pressed=${this.floorId === null} @click=${() => this.fire("floor-tap", { floorId: null })}>
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"><path d="M3 11l9-7 9 7M5 10v10h14V10" /></svg>
        <span>${translate(this.hass, "all_floors")}</span>
      </button>
      ${order.map(
        (t) => html`<button class="fp3d-thumb" aria-pressed=${this.floorId === t.floorId} @click=${() => this.fire("floor-tap", { floorId: t.floorId })}>
          <img src=${t.url} alt="" />
          <span>${names.get(t.floorId) ?? ""}</span>
        </button>`,
      )}
    </nav>`;
  }

  /** Long press: the quick menu at the device, or the details for devices without one. */
  private onDeviceHold(entityId: string, x: number, y: number): void {
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
        ?confirmSwitch=${this.confirmSet.has(m.entity)}
        ?pro=${hasFeature("camera_cockpit")}
        @close=${() => (this._menu = null)}
        @camera-look=${(e: CustomEvent<{ entity: string }>) => this.lookThrough(e.detail.entity)}
      ></fp3d-quick-menu>`;
  }

  private onDeviceTap(entityId: string, x = 0, y = 0): void {
    if (entityId.startsWith("trail:")) return;
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
    </div>`;
  }

  private renderLegend() {
    if (this.heatMode === "none") return nothing;
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
      ${this._error ? html`<p class="fp3d-error">${this._error}</p>` : nothing} ${this.renderEnergy()} ${this.renderHologram()} ${this.renderLegend()}
      ${this.renderAlerts()} ${this.renderThumbs()} ${this.renderScenes()} ${this.renderFind()} ${this.renderSwipe()} ${this.renderThrough()} ${this.renderProHint()} ${this.renderMenu()}
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
