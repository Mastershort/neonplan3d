// Lovelace card (loaded automatically by the integration, no resource needed).

import { zonesOf, type Building } from "./model.ts";
import { roomsOnly, shownRoomIds } from "./rooms-filter.ts";
import { confirmEntities } from "./devices.ts";
import { countView } from "./diagnostics.ts";
import { css, html, LitElement, nothing, type PropertyValues } from "lit";
import { BuildingController } from "./building-controller.ts";
import { MAIN_PLAN } from "./api.ts";
import { OtherPlans } from "./plan-watch.ts";
import "./components/room-bar.ts";
import "./components/room-panel.ts";
import "./components/view3d.ts";
import { languageReady, loadLanguage, translate, type I18nKey } from "./i18n.ts";
import { controls, tokens } from "./styles.ts";
import type { HomeAssistant } from "./types.ts";
import { cardTemplate, effectiveConfig, type CardConfig, type CardControl } from "./card-config.ts";
import { nightActive } from "./kiosk.ts";
import { loadCardEditor } from "./load-card-editor.ts";
import type { WallMode } from "./viewer/viewer3d.ts";
import { hasFeature, released, type Feature } from "./features.ts";
import { TimeTravel } from "./load-timetravel.ts";
import type { HistorySpec } from "./timetravel/types.ts";

type HeatMode = NonNullable<CardConfig["heatmap"]>;

function savedWalls(): WallMode | null {
  try {
    const v = localStorage.getItem("neonplan3d.card_walls");
    return v === "auto" || v === "cut" ? v : null;
  } catch {
    return null;
  }
}

/**
 * Whether the card sits in a sections dashboard's grid (hui-grid-section), across the shadow roots: only there is its
 * cell sized by rows. Anywhere else (a masonry column, a stack) a taller box is someone else's layout.
 */
function inSectionsGrid(el: Element): boolean {
  let n: Element | null = el;
  for (let i = 0; n && i < 40; i++) {
    if (n.localName === "hui-grid-section") return true;
    n = n.parentElement ?? ((n.getRootNode() as ShadowRoot).host ?? null);
  }
  return false;
}

export class Floorplan3dCard extends LitElement {
  static properties = {
    hass: { attribute: false },
    _config: { state: true },
    _roomId: { state: true },
    _walking: { state: true },
    _floorId: { state: true },
    _walls: { state: true },
    _heat: { state: true },
    _explode: { state: true },
    _fullscreen: { state: true },
    _pseudoFull: { state: true },
    _vh: { state: true },
    _top: { state: true },
    _cameraWall: { state: true },
    _clean: { state: true },
    _night: { state: true },
    _orbit: { state: true },
    _stretch: { state: true },
  };

  declare hass: HomeAssistant;
  /** The options the card works with: its template's from the plan with its own YAML on top (see effectiveConfig). */
  private declare _config: CardConfig;
  /** The card's own YAML, and the template it last applied (as text: a plan pushed again with it unchanged is no change). */
  private yaml: CardConfig | null = null;
  private appliedTemplate = "";
  private declare _roomId: string | null;
  /** One walks through the house: the room panel steps aside. */
  private declare _walking: boolean;
  /** The configured start room was applied once the building arrived. */
  private roomApplied = false;
  /** Floor chosen in the card (null: the house; undefined: none chosen, the configured floor applies). */
  private declare _floorId: string | null | undefined;
  /** Choices made with the card's own switches (null: as configured). */
  private declare _walls: WallMode | null;
  private declare _heat: HeatMode | null;
  private declare _explode: boolean | null;
  private declare _fullscreen: boolean;
  /** Full screen made by the card itself (no Fullscreen API): spread over the page. */
  private declare _pseudoFull: boolean;
  /** The visible screen height and the card's distance from the page top (measured, #344). */
  private declare _vh: number;
  private declare _top: number | null;
  private declare _cameraWall: boolean;
  /** Clean view: only the stage (card option controls_hidden, the eye, or the hide-after timer). */
  private declare _clean: boolean;
  private cleanTimer: ReturnType<typeof setTimeout> | undefined;
  /** Kiosk: the night dimming is active; the screensaver turn runs (after an idle return). */
  private declare _night: boolean;
  private declare _orbit: boolean;
  /** The dashboard gives the card more room than its height (a sections grid cell: rows of 56 px plus their gaps). */
  private declare _stretch: boolean;
  private cellObserver: ResizeObserver | null = null;
  private idleTimer: ReturnType<typeof setTimeout> | undefined;
  private nightTimer: ReturnType<typeof setInterval> | undefined;

  private readonly data = new BuildingController(this);
  /** The other plans, for the property (`plan: site`). */
  private readonly watch = new OtherPlans(this);
  /** The `plan` of the YAML the controller was told (a new YAML with the same plan does not reload it). */
  private yamlPlan: string | undefined | null = null;
  /** Time travel (Pro, card option time_travel): the last 24 hours replayed, read-only. */
  private readonly tt = new TimeTravel(this);

  constructor() {
    super();
    this._roomId = null;
    this._walking = false;
    this._floorId = undefined;
    this._walls = savedWalls();
    this._heat = null;
    this._explode = null;
    this._fullscreen = false;
    this._pseudoFull = false;
    this._vh = window.innerHeight;
    this._top = null;
    this._cameraWall = false;
    this._clean = false;
    this._night = false;
    this._orbit = false;
    this._stretch = false;
  }

  /** Any touch ends the screensaver and restarts the idle clock. */
  private readonly touch = () => {
    if (this._orbit) this._orbit = false;
    this.armIdle();
    this.armClean(true);
  };

  /** controls_hide_after: the bars come back on a touch and go again after the quiet spell. */
  private armClean(touched = false): void {
    clearTimeout(this.cleanTimer);
    const s = this._config?.controls_hide_after ?? 0;
    if (!(s > 0)) return;
    if (touched && this._clean) this._clean = false;
    this.cleanTimer = setTimeout(() => (this._clean = true), s * 1000);
  }

  private armIdle(): void {
    clearTimeout(this.idleTimer);
    const s = this._config?.idle_return ?? 0;
    if (s > 0) this.idleTimer = setTimeout(() => this.returnHome(), s * 1000);
  }

  private view3d() {
    return this.shadowRoot?.querySelector("fp3d-view3d") as (HTMLElement & { resetView(): void; lookThrough(entityId: string): void; historyEntities(): HistorySpec; proHint(f: Feature): void; roomSheets(roomId: string): { id: string; icon: string; title: string }[]; openRoomSheet(roomId: string, id: string): void; walkHere(): void }) | null;
  }

  /** Time travel on or off; without the Pro add-on its hint shows. */
  private toggleTimeTravel(): void {
    if (this.tt.active) {
      this.tt.stop();
      return;
    }
    const view = this.view3d();
    const b = this.data.building;
    if (!view || !b || !this.hass) return;
    if (!hasFeature("time_travel")) {
      view.proHint("time_travel");
      return;
    }
    this._cameraWall = false;
    const c = this._config;
    this.tt.start({ live: this.hass, building: b, spec: view.historyEntities(), quality: c?.quality ?? "auto", speed: c?.time_travel_speed ?? null, range: c?.time_travel_range ?? null, t: (k, vars) => translate(this.hass, k as I18nKey, vars) });
  }

  /** Esc leaves the time travel; any key counts as a touch. */
  private readonly onKey = (e: KeyboardEvent) => {
    if (e.key === "Escape") this.tt.stop();
    this.touch();
  };

  /** Back to the start view (room closed, start floor, camera reset); the screensaver may start. */
  private returnHome(): void {
    // a replay that plays on its own (a wall tablet showing the day) is not left alone; paused, it ends
    if (this.tt.session?.playing) {
      this.armIdle();
      return;
    }
    this.tt.stop();
    this._roomId = this.homeRoom();
    this._floorId = undefined;
    this.view3d()?.resetView();
    if (this._config?.idle_orbit) this._orbit = true;
  }

  /** Opens another dashboard or view the way Home Assistant's own links do (no page reload). */
  private openDashboard(path: string): void {
    history.pushState(null, "", path);
    window.dispatchEvent(new CustomEvent("location-changed", { bubbles: true, composed: true, detail: { replace: false } }));
  }

  private readonly onFullscreen = () => {
    this._fullscreen = !!document.fullscreenElement && this.shadowRoot?.contains(document.fullscreenElement) === true;
    requestAnimationFrame(this.onViewport);
  };

  /**
   * Full screen and "fill the screen" follow the screen that is really visible: 100vh misses on some Android
   * tablets (the HA app in landscape), and the dashboard header may be hidden (kiosk mode) – a black bar stayed (#344).
   */
  private readonly onViewport = () => {
    const vh = Math.round(window.visualViewport?.height ?? window.innerHeight);
    if (Math.abs(vh - this._vh) > 1) this._vh = vh;
    if (this._config?.fill && !this._fullscreen) {
      const top = Math.round(this.getBoundingClientRect().top + window.scrollY);
      if (this._top === null || Math.abs(top - this._top) > 1) this._top = top;
    }
  };

  /** A preview (the editor's card templates): not counted as a card in use. */
  preview = false;

  connectedCallback(): void {
    super.connectedCallback();
    if (!this.preview) countView("card");
    document.addEventListener("fullscreenchange", this.onFullscreen);
    window.addEventListener("resize", this.onViewport);
    window.visualViewport?.addEventListener("resize", this.onViewport);
    requestAnimationFrame(this.onViewport);
    // the dashboard may still be laying out: measure once more a moment later
    setTimeout(this.onViewport, 600);
    // in a sections dashboard the card sits in a grid cell taller than its height: the house fills the cell (#926)
    this.cellObserver ??= new ResizeObserver(() => {
      const want = this._config?.height ?? 420;
      const stretch = !this._config?.fill && this.clientHeight > want + 4 && inSectionsGrid(this);
      if (stretch !== this._stretch) this._stretch = stretch;
    });
    this.cellObserver.observe(this);
    this.armIdle();
    // a time range for the night needs a look at the clock now and then
    this.nightTimer = setInterval(() => (this._night = nightActive(this._config?.night, this.hass)), 60000);
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    document.removeEventListener("fullscreenchange", this.onFullscreen);
    window.removeEventListener("resize", this.onViewport);
    window.visualViewport?.removeEventListener("resize", this.onViewport);
    this.cellObserver?.disconnect();
    this.cellObserver = null;
    this.tt.stop();
clearTimeout(this.cleanTimer);
        clearTimeout(this.idleTimer);
    clearInterval(this.nightTimer);
  }

  /**
   * Full screen: the browser's where it has one; where it has none or refuses (the iPad, the Home Assistant app on
   * iOS, #633) the card spreads over the whole page itself and the button brings it back.
   */
  private toggleFullscreen(): void {
    if (this._pseudoFull) {
      this._pseudoFull = false;
      this._fullscreen = false;
      requestAnimationFrame(this.onViewport);
      return;
    }
    if (document.fullscreenElement) {
      void document.exitFullscreen();
      return;
    }
    const card = this.shadowRoot?.querySelector("ha-card") as (HTMLElement & { requestFullscreen?: () => Promise<void> }) | null;
    const spread = () => {
      this._pseudoFull = true;
      this._fullscreen = true;
      requestAnimationFrame(this.onViewport);
    };
    if (card?.requestFullscreen) card.requestFullscreen().catch(spread);
    else spread();
  }

  /** Visual editor in the dashboard (no YAML needed). */
  static async getConfigElement(): Promise<HTMLElement> {
    await loadCardEditor();
    return document.createElement("neonplan3d-card-editor");
  }

  static getStubConfig(): CardConfig {
    return { type: "custom:neonplan3d-card" };
  }

  /** A wall view picked on the card stays for the next visit on this device (#309). */
  private setWalls(mode: WallMode): void {
    this._walls = mode;
    try {
      localStorage.setItem("neonplan3d.card_walls", mode);
    } catch {
      // no storage: not remembered
    }
  }

  setConfig(config: CardConfig): void {
    if (config.height !== undefined && !(config.height > 100)) throw new Error("height must be a number of pixels above 100");
    this.yaml = config;
    // the floor plan comes first: the template is looked up in it
    if (config.plan !== this.yamlPlan) {
      this.yamlPlan = config.plan;
      this.roomApplied = false;
      this._floorId = undefined;
      this._roomId = null;
      // the property (`plan: site`) is the main plan with the buildings beside it
      void this.data.switchPlan(config.plan === "site" ? MAIN_PLAN : (config.plan ?? null));
    }
    this.appliedTemplate = this.templateKey();
    this.applyConfig(effectiveConfig(config, this.data.building));
  }

  /** The named template as it is in the plan now ("" without one). */
  private templateKey(): string {
    const tpl = cardTemplate(this.data.building, this.yaml?.template);
    return tpl ? JSON.stringify([tpl.name, tpl.config]) : "";
  }

  /** New options: from the dashboard, or a template changed in the editor – the card starts over with them. */
  private applyConfig(config: CardConfig, previous?: CardConfig): void {
    // a template changed in the editor: the card keeps where it is and starts over only in what changed (a clock
    // switched on does not send the tablet back to its start view)
    const differs = (k: keyof CardConfig) => !previous || JSON.stringify(previous[k]) !== JSON.stringify(config[k]);
    this._config = config;
    if (differs("floor")) this._floorId = undefined;
    if (differs("room") || differs("rooms")) this.roomApplied = false;
    if (differs("rooms")) this._floorId = undefined;
    if (differs("walls")) this._walls = savedWalls();
    if (differs("heatmap")) this._heat = null;
    if (differs("explode")) this._explode = null;
    this._orbit = false;
    this._night = nightActive(config.night, this.hass);
    if (differs("controls_hidden")) this._clean = config.controls_hidden === true;
    if (differs("controls_hide_after") || differs("controls_hidden")) this.armClean();
    if (differs("idle_return") || differs("idle_orbit")) this.armIdle();
  }

  getCardSize(): number {
    return Math.ceil((this._config?.height ?? 420) / 50);
  }

  getGridOptions() {
    return { columns: "full", rows: this._config?.fill ? 12 : Math.ceil((this._config?.height ?? 420) / 56), min_rows: 4 };
  }

  protected willUpdate(changed: PropertyValues): void {
    // the plan came (or came again): a template edited in the editor reaches the tablet without a reload
    if (this.yaml?.template) {
      const key = this.templateKey();
      if (key !== this.appliedTemplate) {
        this.appliedTemplate = key;
        this.applyConfig(effectiveConfig(this.yaml, this.data.building), this._config);
      }
    }
    if (changed.has("hass") && this.hass) {
      this.data.setHass(this.hass);
      this.tt.session?.setLive(this.hass);
      // a language beyond German and English: its texts are fetched first, then everything renders
      if (!languageReady(this.hass.language)) void loadLanguage(this.hass.language).then(() => this.requestUpdate());
      const night = nightActive(this._config?.night, this.hass);
      if (night !== this._night) this._night = night;
    }
  }

  /** The rooms a card for some rooms shows (`rooms`, those the plan still has); empty: the whole house. */
  private get shownRooms(): string[] {
    return shownRoomIds(this.data.building, this._config?.rooms);
  }

  /** The tablet stays in its rooms (the kids', a holiday flat): taps, jumps and floors outside them do nothing. */
  private get roomsLocked(): boolean {
    return this.shownRooms.length > 0 && this._config?.rooms_lock !== false;
  }

  /** The floors with a room the card shows. */
  private get roomFloors(): string[] {
    const ids = new Set(this.shownRooms);
    return (this.data.building?.floors ?? []).filter((f) => zonesOf(f).some((r) => ids.has(r.id))).map((f) => f.id);
  }

  /** A card for one room opens it (its panel beside, its devices at hand); else the configured start room. */
  private homeRoom(): string | null {
    if (this._config?.room) return this._config.room;
    const shown = this.shownRooms;
    return shown.length === 1 && this._config?.room_panel !== false ? shown[0] : null;
  }

  /** Whether a room may be opened here (a locked card only opens its own). */
  private allowed(roomId: string | null): boolean {
    return !roomId || !this.roomsLocked || this.shownRooms.includes(roomId);
  }

  /** The building cut down to the card's rooms, for the room bar (the 3D view cuts its own). */
  private roomsOf: { from: Building; key: string; to: Building } | null = null;
  private shownBuilding(b: Building): Building {
    const rooms = this.shownRooms;
    if (!rooms.length) return b;
    const key = rooms.join(",");
    if (this.roomsOf?.from !== b || this.roomsOf.key !== key) this.roomsOf = { from: b, key, to: roomsOnly(b, rooms) };
    return this.roomsOf.to;
  }

  /** One level up: room -> floor -> house. */
  /** Floors can be switched (no fixed floor, or floor pictures to switch with). */
  private get canSwitch(): boolean {
    if (this.shownRooms.length) return this.roomFloors.length > 1;
    return !this._config?.floor || this.thumbs;
  }

  private get thumbs(): boolean {
    // a card for some rooms has no pictures of the other floors
    if (this.shownRooms.length) return false;
    return this._config?.floor_thumbs ?? !this._config?.floor;
  }

  /** One level up: room -> floor -> house. */
  /** The floor shown now: the one chosen, else the configured one; a single floor is always shown. */
  private currentFloor(): string | null {
    const b = this.data.building;
    const chosen = this._floorId === undefined ? (this._config?.floor ?? null) : this._floorId;
    // a card for some rooms: their floor (with rooms on several floors the house of them, or the one chosen)
    const rooms = this.roomFloors;
    if (this.shownRooms.length) return rooms.length === 1 ? rooms[0] : chosen && rooms.includes(chosen) ? chosen : null;
    return b && b.floors.length === 1 ? b.floors[0].id : b?.floors.some((f) => f.id === chosen) ? chosen : null;
  }

  private back(): void {
    if (this._roomId) this._roomId = null;
    else if (this.canSwitch) this._floorId = null;
  }

  /** `plan: site`: the property, every building on it together (read only). */
  private get isSite(): boolean {
    return this._config?.plan === "site";
  }

  protected updated(): void {
    if (this.isSite && this.data.plans.length > 1) this.watch.watch(this.hass, this.data);
  }

  protected render() {
    if (this.hass && !languageReady(this.hass.language)) return nothing;
    const b = this.isSite ? (this.watch.site(this.data) ?? this.data.building) : this.data.building;
    const height = this._config?.height ?? 420;
    const c = this._config;
    // the configured room opens once, when the building is there; the kiosk return brings it back
    const home = b ? this.homeRoom() : null;
    if (!this.roomApplied && b && home) {
      this.roomApplied = true;
      if (b.floors.some((f) => zonesOf(f).some((r) => r.id === home))) this._roomId = home;
    }
    const rooms = this.shownRooms;
    // the room of a card for one room is where "here" means (unless the card names its own)
    const roomArea = rooms.length === 1 ? (b?.floors.flatMap((f) => zonesOf(f)).find((r) => r.id === rooms[0])?.area_id ?? null) : null;
    // the configured floor is where the card starts; with floor pictures the user can switch
    const floorId = this.currentFloor();
    // the floor pictures have a house button of their own; a room with its panel has a close button
    const canGoBack =
      (!!this._roomId && c?.room_panel === false) || (!this.thumbs && this.canSwitch && !this._roomId && !!floorId && (b?.floors.length ?? 0) > 1);
    const shows = (x: CardControl) => c?.controls === true || (Array.isArray(c?.controls) && c.controls.includes(x));
    const heats = (["temperature", "humidity", "co2"] as const).filter((m) => shows(m));
    const walls = this._walls ?? c?.walls ?? "auto";
    const heat = this._heat ?? c?.heatmap ?? "none";
    const explode = this._explode ?? c?.explode ?? true;
    // full screen, the screen below the dashboard header, or a fixed height
    // full screen takes the whole screen by CSS (a measured height went stale on some screens, #426); "fill"
    // reaches the bottom edge exactly: the card's 1 px border above and below is all that is left (#344)
    const size = this._fullscreen
      ? "100%"
      : c?.fill
        ? this._top !== null
          ? `${Math.max(240, this._vh - this._top - 2)}px`
          : "calc(100vh - var(--header-height, 56px) - 2px)"
        : this._stretch
          ? "100%"
          : `${height}px`;
    // the bar of switches at the bottom (the back button belongs to it)
    const bar = !!b && !this._clean && (canGoBack || ((!!c?.controls || !!c?.time_travel) && !(this._roomId && c.room_panel !== false)));
    const tt = this.tt.active;
    // the room bar (room_bar: true): above the switches, it stays when the switches are hidden; not while
    // travelling in time or with a room panel open
    const roomBar = !!b && !!c?.room_bar && released("room_bar") && !tt && !(this._roomId && c.room_panel !== false);
    const eye = c?.controls_hidden !== undefined || (c?.controls_hide_after ?? 0) > 0;
    const t = (k: Parameters<typeof translate>[1]) => translate(this.hass, k);
    const accent = /^#[0-9a-f]{6}$/i.test(c?.accent ?? "") ? c!.accent : null;
    return html`<ha-card class="${this._night ? "fp3d-night" : ""} ${this._pseudoFull ? "fp3d-pseudo-full" : ""}" style=${accent ? `--fp3d-accent:${accent}` : ""} @pointerdown=${this.touch} @keydown=${this.onKey} @wheel=${this.touch}>
      <div class="fp3d-card-body ${tt ? "fp3d-tt" : ""}" style="height:${size}">
        ${b && b.floors.some((f) => f.rooms.length)
          ? html`<fp3d-view3d
              .hass=${this.tt.hass(this.hass)}
              .replay=${this.tt.session?.replay ?? null}
              .building=${b}
              .planId=${this.isSite ? null : this.data.planId}
              .noSave=${this.isSite}
              .rooms=${rooms.length ? rooms : null}
              .packs=${this.data.packs}
              .floorId=${floorId}
              .roomId=${this._roomId}
              .wallMode=${walls}
              .explode=${explode}
              .keepRoof=${c?.roof_fade === false}
              .plain=${c?.plain === true}
              .hideRoof=${c?.roof === false || rooms.length > 0}
              .quality=${this._config?.quality ?? "auto"}
              ?showStats=${this._config?.stats ?? false}
              .markerMode=${this._config?.markers ?? "important"}
              .pinSize=${this._config?.marker_size ?? "normal"}
              .markerNames=${this._config?.marker_names === true}
              .central=${this._config?.central !== false}
              .walkable=${this._config?.walk !== false}
              @walk-change=${(e: CustomEvent<{ walking: boolean }>) => (this._walking = e.detail.walking)}
              .petsOn=${this._config?.pets !== false}
              .ghostOn=${this._config?.ghost !== false}
              .buttons=${this._config?.buttons?.map((b, i) => ({ id: `card_${i}`, ...b })) ?? null}
              .heatMode=${heat}
              .theme=${this._config?.theme ?? "neon"}
              .themeEvening=${this._config?.theme_evening ?? null}
              .themeNight=${this._config?.theme_night ?? null}
              .styleEntity=${this._config?.style_entity ?? null}
              .clock=${this._config?.clock ?? null}
              .accent=${this._config?.accent ?? null}
              .showEnergy=${this._config?.energy ?? true}
              .flows=${this._config?.flows ?? null}
              .holograms=${this._config?.holograms ?? null}
              .floorThumbs=${this.thumbs}
              .roomLabels=${c?.room_names !== false}
              .controlsRight=${c?.controls_side === "right"}
              .keepView=${c?.keep_view === true}
              .angleLock=${c?.angle_lock === true}
              .floorStack=${c?.floor_stack ?? "dim"}
              .panelOpen=${!!this._roomId && c?.room_panel !== false}
              .alerts=${c?.alerts !== false}
              .householdCard=${c?.household_card !== false}
              .alertJump=${!!c?.alert_jump}
              .director=${!!c?.director}
              .voice=${!!c?.voice}
              .screen=${c?.screen?.trim() || null}
              .template=${c?.template?.trim() || null}
              .viewKind=${this.preview ? "preview" : "card"}
              .voiceArea=${c?.voice_area?.trim() || roomArea}
              @open-extensions=${() => this.openDashboard("/neonplan3d?tab=extensions")}
              .scenes=${c?.scenes !== false}
              ?trail=${!!c?.motion_trail}
              .cameraWall=${this._cameraWall && !tt}
              @camera-wall-close=${() => (this._cameraWall = false)}
              @camera-wall-open=${() => (this._cameraWall = true)}
              .clean=${this._clean}
              .cleanButton=${eye}
              @clean-toggle=${() => {
                this._clean = !this._clean;
                if (!this._clean) this.armClean();
                else clearTimeout(this.cleanTimer);
              }}
              .weather=${c?.weather !== false}
              .weatherEntityId=${c?.weather_entity ?? null}
              .dimmed=${this._night}
              .autoOrbit=${this._orbit}
              .startView=${c?.start_view ?? null}
              style=${tt ? `--fp3d-bottom-inset: ${bar ? "calc(52px + var(--fp3d-tt-h))" : "var(--fp3d-tt-h)"}` : bar ? "--fp3d-bottom-inset: 52px" : ""}
              @room-tap=${(e: CustomEvent<{ floorId: string; roomId: string | null }>) => {
                // in the house view (or on another floor) a tap first opens the whole floor; the floor as it is now,
                // not as rendered: a jump switches the floor and opens the room 60 ms later, before a slow tablet
                // has drawn again (#784)
                if (!this.allowed(e.detail.roomId)) return;
                if (this.canSwitch && (b?.floors.length ?? 0) > 1 && e.detail.floorId && this.currentFloor() !== e.detail.floorId) {
                  if (this.roomsLocked && !this.roomFloors.includes(e.detail.floorId)) return;
                  this._floorId = e.detail.floorId;
                  this._roomId = null;
                  return;
                }
                if (!e.detail.roomId) return;
                this._roomId = e.detail.roomId === this._roomId ? null : e.detail.roomId;
              }}
              @floor-tap=${(e: CustomEvent<{ floorId: string | null }>) => {
                if (this.roomsLocked && e.detail.floorId && !this.roomFloors.includes(e.detail.floorId)) return;
                this._floorId = e.detail.floorId;
                this._roomId = null;
              }}
              @back=${() => this.back()}
            ></fp3d-view3d>`
          : html`<p class="fp3d-card-msg">${this.data.error ?? (b ? translate(this.hass, "no_building") : translate(this.hass, "loading"))}</p>`}
        ${b && c?.template && !cardTemplate(b, c.template) ? html`<div class="fp3d-card-tpl-missing">${translate(this.hass, "card_template_missing", { name: c.template })}</div>` : nothing}
        ${roomBar
          ? html`<fp3d-room-bar
              class="fp3d-card-room-bar"
              style="bottom:${bar ? 54 : 8}px"
              .hass=${this.hass}
              .building=${this.shownBuilding(b)}
              .floorId=${floorId}
              .roomId=${this._roomId}
              ?favorites=${c?.room_bar_favorites === true}
              @room-pick=${(e: CustomEvent<{ floorId: string; roomId: string }>) => {
                if (!this.allowed(e.detail.roomId)) return;
                // straight into the room; on another floor only where the card may switch floors
                if (e.detail.floorId !== this.currentFloor()) {
                  if (!this.canSwitch) return;
                  this._floorId = e.detail.floorId;
                }
                this._roomId = e.detail.roomId === this._roomId ? null : e.detail.roomId;
              }}
            ></fp3d-room-bar>`
          : nothing}
        ${this._roomId && b && this._config?.room_panel !== false && !this._walking
          ? html`<fp3d-room-panel
              ?walk=${this._config?.walk !== false}
              @walk-here=${() => this.view3d()?.walkHere()}
              @camera-look=${(e: CustomEvent<{ entity: string }>) => this.view3d()?.lookThrough(e.detail.entity)}
              class="fp3d-card-panel"
              .hass=${this.tt.hass(this.hass)}
              ?readOnly=${tt}
              .room=${b.floors.flatMap((f) => zonesOf(f)).find((r) => r.id === this._roomId) ?? null}
              .floor=${b.floors.find((f) => zonesOf(f).some((r) => r.id === this._roomId)) ?? null}
              .building=${b}
              .confirmEntities=${confirmEntities(this.hass, b.floors)}
              .sheets=${this._roomId ? (this.view3d()?.roomSheets(this._roomId) ?? null) : null}
              @sheet-open=${(e: CustomEvent<{ id: string }>) => this._roomId && this.view3d()?.openRoomSheet(this._roomId, e.detail.id)}
              @close=${() => (this._roomId = null)}
            ></fp3d-room-panel>`
          : nothing}
        ${bar && b
          ? html`<div class="fp3d-card-controls">
              ${canGoBack ? html`<button class="fp3d-chip" @click=${() => this.back()}>${t("back")}</button>` : nothing}
              ${c?.time_travel
                ? html`<button class="fp3d-chip fp3d-tt-chip" aria-pressed=${tt} title=${t("tt_hint")} @click=${() => this.toggleTimeTravel()}>
                    ${hasFeature("time_travel") ? "⏪" : "🔒"} ${t("tt_chip")}
                  </button>`
                : nothing}
              ${c?.camera_wall ? html`<button class="fp3d-chip" aria-pressed=${this._cameraWall} title=${t("camera_wall_hint")} @click=${() => (this._cameraWall = !this._cameraWall)}>${t("cameras_short")}</button>` : nothing}
              ${shows("walls")
                ? html`<div class="fp3d-seg">
                    <button aria-pressed=${walls === "auto"} @click=${() => this.setWalls("auto")}>${t("walls_auto")}</button>
                    <button aria-pressed=${walls === "cut"} @click=${() => this.setWalls("cut")}>${t("walls_cut")}</button>
                  </div>`
                : nothing}
              ${shows("floors") && b.floors.length > 1 && !floorId
                ? html`<div class="fp3d-seg">
                    <button aria-pressed=${explode} @click=${() => (this._explode = true)}>${t("floors_apart")}</button>
                    <button aria-pressed=${!explode} @click=${() => (this._explode = false)}>${t("floors_stacked")}</button>
                  </div>`
                : nothing}
              ${heats.length
                ? html`<div class="fp3d-seg" role="group" aria-label=${t("heatmap")}>
                    ${(["none", ...heats] as HeatMode[]).map(
                      (m) =>
                        html`<button aria-pressed=${heat === m} @click=${() => (this._heat = m)}>
                          ${t(m === "none" ? "heat_off" : (`heat_short_${m}` as Parameters<typeof translate>[1]))}
                        </button>`,
                    )}
                  </div>`
                : nothing}
            </div>`
          : nothing}
        ${this.tt.session ? html`<fp3d-time-bar .session=${this.tt.session}></fp3d-time-bar>` : nothing}
        ${c?.fullscreen_button && !this._clean && !(this._roomId && c.room_panel !== false)
          ? html`<button class="fp3d-card-full" title=${t(this._fullscreen ? "fullscreen_exit" : "fullscreen")} aria-label=${t(this._fullscreen ? "fullscreen_exit" : "fullscreen")} @click=${() => this.toggleFullscreen()}>
              ${this._fullscreen ? "✕" : "⛶"}
            </button>`
          : nothing}
        ${c?.dashboard && !this._clean && !(this._roomId && c.room_panel !== false)
          ? html`<button class="fp3d-card-full fp3d-card-dash ${c.fullscreen_button ? "fp3d-card-dash-2" : ""}" title=${c.dashboard_label || c.dashboard} aria-label=${c.dashboard_label || c.dashboard} @click=${() => this.openDashboard(c.dashboard!)}>
              ${c.dashboard_label ? html`<span>${c.dashboard_label}</span>` : "⌂"}
            </button>`
          : nothing}
      </div>
    </ha-card>`;
  }

  static styles = [
    tokens,
    controls,
    css`
      .fp3d-card-controls {
        position: absolute;
        left: 60px;
        right: 10px;
        bottom: 10px;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 8px;
        pointer-events: none;
      }
      .fp3d-card-controls > * {
        pointer-events: auto;
      }
      /* time travel: its bar at the bottom, the switches and the room panel above it */
      .fp3d-tt > * {
        --fp3d-tt-h: 64px;
      }
      .fp3d-tt .fp3d-card-controls {
        bottom: calc(var(--fp3d-tt-h) + 2px);
      }
      .fp3d-tt .fp3d-card-panel {
        bottom: calc(var(--fp3d-tt-h) + 4px);
      }
      .fp3d-tt-chip[aria-pressed="true"] {
        background: #ffb020;
        color: #1a1200;
      }
      /* the view's walk button steps aside for the card's own buttons at the top right */
      fp3d-view3d {
        --fp3d-walk-right: 104px;
      }
      .fp3d-card-full {
        position: absolute;
        right: 10px;
        top: 10px;
        width: 38px;
        height: 38px;
        border: 0;
        border-radius: 12px;
        background: var(--fp3d-chrome);
        color: var(--fp3d-text);
        box-shadow: var(--fp3d-shadow);
        font-size: 18px;
        cursor: pointer;
      }
      /* the dashboard button: after the rule above, so its own width wins and, beside the full screen button, it
         steps to the left instead of covering it (D1002) */
      .fp3d-card-full.fp3d-card-dash {
        width: auto;
        min-width: 38px;
        padding: 0 12px;
        font-size: 14px;
        font-weight: 600;
      }
      .fp3d-card-full.fp3d-card-dash-2 {
        right: 56px;
      }
      /* full screen made by the card itself (iPad, the app on iOS): over the whole page */
      ha-card.fp3d-pseudo-full {
        position: fixed;
        inset: 0;
        z-index: 9999;
        height: 100vh !important;
        max-height: none !important;
        border-radius: 0;
      }
      @supports (height: 100dvh) {
        ha-card.fp3d-pseudo-full {
          height: 100dvh !important;
        }
      }
      /* a block, so the dashboard's grid cell gives it its height (and the card can measure it, #926) */
      :host {
        display: block;
      }
      ha-card {
        overflow: hidden;
        background: var(--fp3d-bg);
        height: 100%;
      }
      ha-card:fullscreen {
        display: flex;
        flex-direction: column;
        width: 100vw;
        height: 100vh;
        border-radius: 0;
        border: 0;
      }
      ha-card:fullscreen .fp3d-card-body {
        flex: 1 1 auto;
        min-height: 0;
      }
      /* night (kiosk): the whole card dimmed */
      ha-card.fp3d-night .fp3d-card-body {
        filter: brightness(0.55);
      }
      .fp3d-card-body {
        position: relative;
        display: flex;
        height: 100%;
        container-type: size;
        container-name: fp3d;
      }
      fp3d-view3d {
        flex: 1;
      }
      .fp3d-card-tpl-missing {
        position: absolute;
        top: 10px;
        left: 50%;
        transform: translateX(-50%);
        max-width: calc(100% - 40px);
        padding: 6px 12px;
        border-radius: 10px;
        background: var(--fp3d-chrome-solid, rgba(10, 16, 30, 0.92));
        border: 1px solid rgba(255, 170, 60, 0.6);
        color: var(--fp3d-text, #fff);
        font-size: 13px;
        z-index: 5;
      }
      .fp3d-card-msg {
        margin: auto;
        color: var(--fp3d-muted);
        padding: 16px;
        text-align: center;
      }
      /* beside the view's own buttons (search, eye) at the bottom left: nothing moves for the room bar */
      .fp3d-card-room-bar {
        position: absolute;
        left: 148px;
        right: 10px;
      }
      .fp3d-card-panel {
        position: absolute;
        top: 10px;
        right: 10px;
        bottom: 10px;
        width: min(340px, calc(100% - 20px));
        display: flex;
        flex-direction: column;
        pointer-events: none;
      }
      /* phones and portrait tablets: the room panel becomes a sheet at the bottom */
      @container fp3d ((max-width: 700px) or ((orientation: portrait) and (max-width: 1000px))) {
        .fp3d-card-panel {
          top: auto;
          left: 8px;
          right: 8px;
          bottom: 8px;
          width: auto;
          height: 55%;
          justify-content: flex-end;
        }
        /* the time bar takes two rows here */
        .fp3d-tt > * {
          --fp3d-tt-h: 100px;
        }
      }
    `,
  ];
}

if (!customElements.get("neonplan3d-card")) {
  customElements.define("neonplan3d-card", Floorplan3dCard);
  const w = window as Window & { customCards?: unknown[] };
  w.customCards = w.customCards ?? [];
  w.customCards.push({
    type: "neonplan3d-card",
    name: translate(undefined, "card_name"),
    description: translate(undefined, "card_description"),
    preview: false,
  });
}
