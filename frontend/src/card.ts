// Lovelace card (loaded automatically by the integration, no resource needed).

import { confirmEntities } from "./devices.ts";
import { css, html, LitElement, nothing, type PropertyValues } from "lit";
import { BuildingController } from "./building-controller.ts";
import "./components/room-panel.ts";
import "./components/view3d.ts";
import { languageReady, loadLanguage, translate, type I18nKey } from "./i18n.ts";
import { controls, tokens } from "./styles.ts";
import type { HomeAssistant } from "./types.ts";
import type { CardConfig, CardControl } from "./card-config.ts";
import { nightActive } from "./kiosk.ts";
import { loadCardEditor } from "./load-card-editor.ts";
import type { WallMode } from "./viewer/viewer3d.ts";
import { hasFeature, type Feature } from "./features.ts";
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

export class Floorplan3dCard extends LitElement {
  static properties = {
    hass: { attribute: false },
    _config: { state: true },
    _roomId: { state: true },
    _floorId: { state: true },
    _walls: { state: true },
    _heat: { state: true },
    _explode: { state: true },
    _fullscreen: { state: true },
    _cameraWall: { state: true },
    _clean: { state: true },
    _night: { state: true },
    _orbit: { state: true },
  };

  declare hass: HomeAssistant;
  private declare _config: CardConfig;
  private declare _roomId: string | null;
  /** The configured start room was applied once the building arrived. */
  private roomApplied = false;
  /** Floor chosen in the card (null: the house; undefined: none chosen, the configured floor applies). */
  private declare _floorId: string | null | undefined;
  /** Choices made with the card's own switches (null: as configured). */
  private declare _walls: WallMode | null;
  private declare _heat: HeatMode | null;
  private declare _explode: boolean | null;
  private declare _fullscreen: boolean;
  private declare _cameraWall: boolean;
  /** Clean view: only the stage (card option controls_hidden, the eye, or the hide-after timer). */
  private declare _clean: boolean;
  private cleanTimer: ReturnType<typeof setTimeout> | undefined;
  /** Kiosk: the night dimming is active; the screensaver turn runs (after an idle return). */
  private declare _night: boolean;
  private declare _orbit: boolean;
  private idleTimer: ReturnType<typeof setTimeout> | undefined;
  private nightTimer: ReturnType<typeof setInterval> | undefined;

  private readonly data = new BuildingController(this);
  /** Time travel (Pro, card option time_travel): the last 24 hours replayed, read-only. */
  private readonly tt = new TimeTravel(this);

  constructor() {
    super();
    this._roomId = null;
    this._floorId = undefined;
    this._walls = savedWalls();
    this._heat = null;
    this._explode = null;
    this._fullscreen = false;
    this._cameraWall = false;
    this._clean = false;
    this._night = false;
    this._orbit = false;
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
    return this.shadowRoot?.querySelector("fp3d-view3d") as (HTMLElement & { resetView(): void; lookThrough(entityId: string): void; historyEntities(): HistorySpec; proHint(f: Feature): void }) | null;
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
    this.tt.start({ live: this.hass, building: b, spec: view.historyEntities(), quality: c?.quality ?? "auto", speed: c?.time_travel_speed ?? null, t: (k, vars) => translate(this.hass, k as I18nKey, vars) });
  }

  /** Esc leaves the time travel; any key counts as a touch. */
  private readonly onKey = (e: KeyboardEvent) => {
    if (e.key === "Escape") this.tt.stop();
    this.touch();
  };

  /** Back to the start view (room closed, start floor, camera reset); the screensaver may start. */
  private returnHome(): void {
    this.tt.stop();
    this._roomId = this._config?.room ?? null;
    this._floorId = undefined;
    this.view3d()?.resetView();
    if (this._config?.idle_orbit) this._orbit = true;
  }

  /** Opens another dashboard or view the way Home Assistant's own links do (no page reload). */
  private openDashboard(path: string): void {
    history.pushState(null, "", path);
    window.dispatchEvent(new CustomEvent("location-changed", { bubbles: true, composed: true, detail: { replace: false } }));
  }

  private readonly onFullscreen = () => (this._fullscreen = !!document.fullscreenElement && this.shadowRoot?.contains(document.fullscreenElement) === true);

  connectedCallback(): void {
    super.connectedCallback();
    document.addEventListener("fullscreenchange", this.onFullscreen);
    this.armIdle();
    // a time range for the night needs a look at the clock now and then
    this.nightTimer = setInterval(() => (this._night = nightActive(this._config?.night, this.hass)), 60000);
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    document.removeEventListener("fullscreenchange", this.onFullscreen);
    this.tt.stop();
clearTimeout(this.cleanTimer);
        clearTimeout(this.idleTimer);
    clearInterval(this.nightTimer);
  }

  private toggleFullscreen(): void {
    if (document.fullscreenElement) void document.exitFullscreen();
    else void this.shadowRoot?.querySelector("ha-card")?.requestFullscreen?.();
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
    this._config = config;
    this._floorId = undefined;
    this._walls = savedWalls();
    this._heat = null;
    this._explode = null;
    this._orbit = false;
    this._night = nightActive(config.night, this.hass);
    this._clean = config.controls_hidden === true;
    this.armClean();
    this.armIdle();
  }

  getCardSize(): number {
    return Math.ceil((this._config?.height ?? 420) / 50);
  }

  getGridOptions() {
    return { columns: "full", rows: this._config?.fill ? 12 : Math.ceil((this._config?.height ?? 420) / 56), min_rows: 4 };
  }

  protected willUpdate(changed: PropertyValues): void {
    if (changed.has("hass") && this.hass) {
      this.data.setHass(this.hass);
      this.tt.session?.setLive(this.hass);
      // a language beyond German and English: its texts are fetched first, then everything renders
      if (!languageReady(this.hass.language)) void loadLanguage(this.hass.language).then(() => this.requestUpdate());
      const night = nightActive(this._config?.night, this.hass);
      if (night !== this._night) this._night = night;
    }
  }

  /** One level up: room -> floor -> house. */
  /** Floors can be switched (no fixed floor, or floor pictures to switch with). */
  private get canSwitch(): boolean {
    return !this._config?.floor || this.thumbs;
  }

  private get thumbs(): boolean {
    return this._config?.floor_thumbs ?? !this._config?.floor;
  }

  /** One level up: room -> floor -> house. */
  private back(): void {
    if (this._roomId) this._roomId = null;
    else if (this.canSwitch) this._floorId = null;
  }

  protected render() {
    if (this.hass && !languageReady(this.hass.language)) return nothing;
    const b = this.data.building;
    const height = this._config?.height ?? 420;
    const c = this._config;
    // the configured room opens once, when the building is there; the kiosk return brings it back
    if (!this.roomApplied && b && c?.room) {
      this.roomApplied = true;
      if (b.floors.some((f) => f.rooms.some((r) => r.id === c.room))) this._roomId = c.room;
    }
    // the configured floor is where the card starts; with floor pictures the user can switch
    const chosen = this._floorId === undefined ? (c?.floor ?? null) : this._floorId;
    const floorId = b && b.floors.length === 1 ? b.floors[0].id : b?.floors.some((f) => f.id === chosen) ? chosen : null;
    // the floor pictures have a house button of their own; a room with its panel has a close button
    const canGoBack =
      (!!this._roomId && c?.room_panel === false) || (!this.thumbs && this.canSwitch && !this._roomId && !!floorId && (b?.floors.length ?? 0) > 1);
    const shows = (x: CardControl) => c?.controls === true || (Array.isArray(c?.controls) && c.controls.includes(x));
    const heats = (["temperature", "humidity", "co2"] as const).filter((m) => shows(m));
    const walls = this._walls ?? c?.walls ?? "auto";
    const heat = this._heat ?? c?.heatmap ?? "none";
    const explode = this._explode ?? c?.explode ?? true;
    // full screen, the screen below the dashboard header, or a fixed height
    const size = this._fullscreen ? "100vh" : c?.fill ? "calc(100vh - var(--header-height, 56px) - 16px)" : `${height}px`;
    // the bar of switches at the bottom (the back button belongs to it)
    const bar = !!b && !this._clean && (canGoBack || ((!!c?.controls || !!c?.time_travel) && !(this._roomId && c.room_panel !== false)));
    const tt = this.tt.active;
    const eye = c?.controls_hidden !== undefined || (c?.controls_hide_after ?? 0) > 0;
    const t = (k: Parameters<typeof translate>[1]) => translate(this.hass, k);
    const accent = /^#[0-9a-f]{6}$/i.test(c?.accent ?? "") ? c!.accent : null;
    return html`<ha-card class=${this._night ? "fp3d-night" : ""} style=${accent ? `--fp3d-accent:${accent}` : ""} @pointerdown=${this.touch} @keydown=${this.onKey} @wheel=${this.touch}>
      <div class="fp3d-card-body ${tt ? "fp3d-tt" : ""}" style="height:${size}">
        ${b && b.floors.some((f) => f.rooms.length)
          ? html`<fp3d-view3d
              .hass=${this.tt.hass(this.hass)}
              .replay=${this.tt.session?.replay ?? null}
              .building=${b}
              .packs=${this.data.packs}
              .floorId=${floorId}
              .roomId=${this._roomId}
              .wallMode=${walls}
              .explode=${explode}
              .keepRoof=${c?.roof_fade === false}
              .quality=${this._config?.quality ?? "auto"}
              ?showStats=${this._config?.stats ?? false}
              .markerMode=${this._config?.markers ?? "important"}
              .markerNames=${this._config?.marker_names === true}
              .central=${this._config?.central !== false}
              .buttons=${this._config?.buttons?.map((b, i) => ({ id: `card_${i}`, ...b })) ?? null}
              .heatMode=${heat}
              .theme=${this._config?.theme ?? "neon"}
              .accent=${this._config?.accent ?? null}
              .showEnergy=${this._config?.energy ?? true}
              .flows=${this._config?.flows ?? null}
              .holograms=${this._config?.holograms ?? null}
              .floorThumbs=${this.thumbs}
              .roomLabels=${c?.room_names !== false}
              .controlsRight=${c?.controls_side === "right"}
              .keepView=${c?.keep_view === true}
              .floorStack=${c?.floor_stack ?? "dim"}
              .panelOpen=${!!this._roomId && c?.room_panel !== false}
              .alerts=${c?.alerts !== false}
              .alertJump=${!!c?.alert_jump}
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
              ?weather=${c?.weather !== false}
              .weatherEntityId=${c?.weather_entity ?? null}
              .dimmed=${this._night}
              .autoOrbit=${this._orbit}
              .startView=${c?.start_view ?? null}
              style=${tt ? `--fp3d-bottom-inset: ${bar ? "calc(52px + var(--fp3d-tt-h))" : "var(--fp3d-tt-h)"}` : bar ? "--fp3d-bottom-inset: 52px" : ""}
              @room-tap=${(e: CustomEvent<{ floorId: string; roomId: string | null }>) => {
                // in the house view (or on another floor) a tap first opens the whole floor
                if (this.canSwitch && (b?.floors.length ?? 0) > 1 && e.detail.floorId && floorId !== e.detail.floorId) {
                  this._floorId = e.detail.floorId;
                  this._roomId = null;
                  return;
                }
                if (!e.detail.roomId) return;
                this._roomId = e.detail.roomId === this._roomId ? null : e.detail.roomId;
              }}
              @floor-tap=${(e: CustomEvent<{ floorId: string | null }>) => {
                this._floorId = e.detail.floorId;
                this._roomId = null;
              }}
              @back=${() => this.back()}
            ></fp3d-view3d>`
          : html`<p class="fp3d-card-msg">${this.data.error ?? (b ? translate(this.hass, "no_building") : translate(this.hass, "loading"))}</p>`}
        ${this._roomId && b && this._config?.room_panel !== false
          ? html`<fp3d-room-panel
              @camera-look=${(e: CustomEvent<{ entity: string }>) => this.view3d()?.lookThrough(e.detail.entity)}
              class="fp3d-card-panel"
              .hass=${this.tt.hass(this.hass)}
              ?readOnly=${tt}
              .room=${b.floors.flatMap((f) => f.rooms).find((r) => r.id === this._roomId) ?? null}
              .floor=${b.floors.find((f) => f.rooms.some((r) => r.id === this._roomId)) ?? null}
              .confirmEntities=${confirmEntities(this.hass, b.floors)}
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
      .fp3d-card-dash {
        width: auto;
        min-width: 38px;
        padding: 0 12px;
        font-size: 14px;
        font-weight: 600;
      }
      .fp3d-card-dash-2 {
        right: 56px;
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
      ha-card {
        overflow: hidden;
        background: var(--fp3d-bg);
        height: 100%;
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
      .fp3d-card-msg {
        margin: auto;
        color: var(--fp3d-muted);
        padding: 16px;
        text-align: center;
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
