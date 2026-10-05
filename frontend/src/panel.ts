// Sidebar page: 3D view and editor.

import { css, html, LitElement, nothing, type PropertyValues } from "lit";
import { BuildingController } from "./building-controller.ts";
import { loadEditor } from "./load-editor.ts";
import "./components/room-panel.ts";
import "./components/view3d.ts";
import { languageReady, loadLanguage, translate, type I18nKey } from "./i18n.ts";
import type { Building } from "./model.ts";
import { controls, tokens } from "./styles.ts";
import type { HomeAssistant } from "./types.ts";
import type { MarkerMode } from "./components/view3d.ts";
import type { HeatMode } from "./heatmap.ts";
import { THEMES, type Theme } from "./themes.ts";
import { keepInRoom, snapToWall } from "./geometry/snap.ts";
import { furnitureName } from "./furniture-names.ts";
import { confirmEntities, defaultHeight, entityName, kindOf } from "./devices.ts";
import { canLift, type LampMount } from "./model.ts";
import { mountBase } from "./packs.ts";
import { hasFeature } from "./features.ts";
import { getLicense, unseenOffers, unseenUpdates } from "./api.ts";
import type { FloorStack, Quality, WallMode } from "./viewer/viewer3d.ts";

type Mode = "view" | "editor" | "extensions";

/** View preferences belong to the device (a wall tablet wants other settings than a desktop). */
const prefs = {
  get(key: string): string | null {
    try {
      return localStorage.getItem(`neonplan3d.${key}`);
    } catch {
      return null;
    }
  },
  set(key: string, value: string): void {
    try {
      localStorage.setItem(`neonplan3d.${key}`, value);
    } catch {
      // storage unavailable (private mode): the choice just is not remembered
    }
  },
};

export class Floorplan3dPanel extends LitElement {
  static properties = {
    hass: { attribute: false },
    narrow: { type: Boolean },
    route: { attribute: false },
    panel: { attribute: false },
    _mode: { state: true },
    _newOffers: { state: true },
    _editorReady: { state: true },
    _floorId: { state: true },
    _roomId: { state: true },
    _wallMode: { state: true },
    _explode: { state: true },
    _keepRoof: { state: true },
    _quality: { state: true },
    _stats: { state: true },
    _markers: { state: true },
    _heat: { state: true },
    _theme: { state: true },
    _furnish: { state: true },
    _selFurniture: { state: true },
    _selDevice: { state: true },
    _floorStack: { state: true },
    _roomNames: { state: true },
    _trail: { state: true },
    _cameraWall: { state: true },
    _weather: { state: true },
  };

  declare hass: HomeAssistant;
  declare narrow: boolean;
  declare route: unknown;
  declare panel: unknown;
  private declare _mode: Mode;
  /** Shop offers not seen yet (a dot on the extensions tab). */
  private declare _newOffers: number;
  private offersChecked = false;
  /** The editor bundle is loaded (it is fetched the first time the editor opens). */
  private declare _editorReady: boolean;
  private declare _floorId: string | null;
  private declare _roomId: string | null;
  private declare _wallMode: WallMode;
  private declare _explode: boolean;
  private declare _keepRoof: boolean;
  private declare _quality: Quality;
  /** Performance display (per device; also switched on by ?fp3d_stats in the URL). */
  private declare _stats: boolean;
  private declare _markers: MarkerMode;
  private declare _heat: HeatMode;
  private declare _theme: Theme;
  private declare _furnish: boolean;
  private declare _selFurniture: string | null;
  private declare _selDevice: string | null;
  /** Floors below an opened floor, and whether room names show (both kept per device). */
  private declare _floorStack: FloorStack;
  private declare _roomNames: boolean;
  /** Motion trail of the last half hour in 3D. */
  private declare _trail: boolean;
  private declare _cameraWall: boolean;
  /** Weather outside the house in 3D. */
  private declare _weather: boolean;

  private readonly data = new BuildingController(this);


  constructor() {
    super();
    this.narrow = false;
    this._mode = "view";
    this._newOffers = 0;
    this._editorReady = !!customElements.get("fp3d-editor");
    this._floorId = null;
    this._roomId = null;
    this._wallMode = "auto";
    this._explode = prefs.get("explode") !== "0";
    this._keepRoof = prefs.get("roof") === "1";
    const quality = prefs.get("quality");
    this._quality = quality === "low" || quality === "high" ? quality : "auto";
    this._stats = prefs.get("stats") === "1" || new URLSearchParams(location.search).has("fp3d_stats");
    const markers = prefs.get("markers");
    this._markers = markers === "none" || markers === "all" ? markers : "important";
    const heat = prefs.get("heat");
    this._heat = heat === "temperature" || heat === "humidity" || heat === "co2" ? heat : "none";
    const theme = prefs.get("theme") as Theme | null;
    this._theme = theme && THEMES.includes(theme) ? theme : "neon";
    this._furnish = false;
    this._selFurniture = null;
    this._selDevice = null;
    const stack = prefs.get("floor_stack");
    this._floorStack = stack === "stacked" || stack === "single" ? stack : "dim";
    this._roomNames = prefs.get("room_names") !== "0";
    this._trail = prefs.get("trail") === "1";
    this._cameraWall = false;
    this._weather = prefs.get("weather") !== "0";
  }

  private t(key: I18nKey, vars?: Record<string, string | number>): string {
    return translate(this.hass, key, vars);
  }

  protected willUpdate(changed: PropertyValues): void {
    if (changed.has("hass") && this.hass) this.data.setHass(this.hass);
    // a language beyond German and English: its texts are fetched first, then everything renders
    if (changed.has("hass") && this.hass && !languageReady(this.hass.language)) void loadLanguage(this.hass.language).then(() => this.requestUpdate());
    const b = this.data.building;
    if (b && this._floorId && !b.floors.some((f) => f.id === this._floorId)) {
      this._floorId = null;
      this._roomId = null;
    }
  }

  private get isAdmin(): boolean {
    return this.hass?.user?.is_admin ?? false;
  }

  private setMode(mode: Mode): void {
    if (mode === this._mode) return;
    if (mode === "view") void this.data.flush();
    this._mode = mode;
  }

  private onRoomTap(e: CustomEvent<{ floorId: string; roomId: string | null }>): void {
    const { floorId, roomId } = e.detail;
    // in the house view (or on another floor) a tap first opens the whole floor; rooms come next
    if ((this.data.building?.floors.length ?? 0) > 1 && floorId && this._floorId !== floorId) {
      this._floorId = floorId;
      this._roomId = null;
      return;
    }
    if (!roomId) return;
    this._roomId = roomId === this._roomId ? null : roomId;
  }

  private setKeepRoof(on: boolean): void {
    this._keepRoof = on;
    prefs.set("roof", on ? "1" : "0");
  }

  private setExplode(explode: boolean): void {
    this._explode = explode;
    prefs.set("explode", explode ? "1" : "0");
  }

  private setQuality(quality: Quality): void {
    this._quality = quality;
    prefs.set("quality", quality);
  }

  /** Change one furniture item of the building (furnishing in 3D) and save. */
  private editFurniture(id: string, change: (f: Building["floors"][number]["furniture"][number], floor: Building["floors"][number]) => void): void {
    const b = this.data.building;
    if (!b) return;
    const next = structuredClone(b);
    for (const floor of next.floors) {
      const f = floor.furniture.find((m) => m.id === id);
      if (f) change(f, floor);
    }
    this.data.edit(next);
  }

  /** Change one placed device (furnishing in 3D) and save. */
  private editDevice(entityId: string, change: (p: Building["floors"][number]["placements"][number], floor: Building["floors"][number]) => void): void {
    const b = this.data.building;
    if (!b) return;
    const next = structuredClone(b);
    for (const floor of next.floors) {
      const p = floor.placements.find((x) => x.entity_id === entityId);
      if (p) change(p, floor);
    }
    this.data.edit(next);
  }

  private moveDevice(e: CustomEvent<{ id: string; x: number; z: number }>): void {
    const { id, x, z } = e.detail;
    // a device stays in its room (no dragging through walls)
    this.editDevice(id, (p, floor) => {
      const [nx, nz] = keepInRoom(floor, p.x, p.z, x, z);
      Object.assign(p, { x: nx, z: nz });
    });
  }

  /** Cameras turn in finer steps than lamps (their wedge shows where they look). */
  private turnStep(): number {
    return kindOf(this._selDevice ?? "") === "camera" ? 15 : 45;
  }

  private turnDevice(delta: number): void {
    if (!this._selDevice) return;
    this.editDevice(this._selDevice, (p) => (p.rotation = ((((p.rotation ?? 0) + delta) % 360) + 360) % 360));
  }

  private deleteDevice(): void {
    const id = this._selDevice;
    const b = this.data.building;
    if (!id || !b) return;
    const next = structuredClone(b);
    for (const floor of next.floors) floor.placements = floor.placements.filter((p) => p.entity_id !== id);
    this.data.edit(next);
    this._selDevice = null;
  }

  /** Height and, for lights, the mount of the selected device, editable in the furnish bar. */
  private renderDeviceFields(id: string) {
    const b = this.data.building;
    const floor = b?.floors.find((fl) => fl.placements.some((p) => p.entity_id === id));
    const p = floor?.placements.find((x) => x.entity_id === id);
    if (!floor || !p) return nothing;
    const kind = kindOf(id);
    const light = kind === "light";
    const camera = kind === "camera";
    const dome = p.mount === "ceiling";
    const auto = kind ? defaultHeight(kind, floor.height, light || camera ? (p.mount ?? (camera ? "wall" : "ceiling")) : null) : 1;
    const numField = (label: string, value: number, step: number, min: number, max: number, set: (v: number) => void) =>
      html`<label class="fp3d-size" title=${label}
        >${label}
        <input
          type="number"
          inputmode="decimal"
          step=${step}
          min=${min}
          max=${max}
          .value=${String(Math.round(value * 100) / 100)}
          @change=${(e: Event) => {
            const v = parseFloat((e.target as HTMLInputElement).value.replace(",", "."));
            if (Number.isFinite(v)) set(Math.min(max, Math.max(min, v)));
          }}
        />
      </label>`;
    return html`${light
        ? html`<select class="fp3d-size-select" title=${this.t("lamp_mount")} @change=${(e: Event) => this.editDevice(id, (d) => Object.assign(d, { mount: (e.target as HTMLSelectElement).value as LampMount, y: null }))}>
            ${(["ceiling", "floor", "table", "wall"] as const).map((m) => html`<option value=${m} ?selected=${m === (p.mount ?? "ceiling")}>${this.t(`lamp_${m}`)}</option>`)}
          </select>`
        : nothing}
      ${camera
        ? html`<select class="fp3d-size-select" title=${this.t("camera_mount")} @change=${(e: Event) => this.editDevice(id, (d) => Object.assign(d, { mount: (e.target as HTMLSelectElement).value as LampMount, y: null }))}>
              <option value="wall" ?selected=${!dome}>${this.t("camera_mount_wall")}</option>
              <option value="ceiling" ?selected=${dome}>${this.t("camera_mount_ceiling")}</option>
            </select>
            ${numField(this.t("camera_fov_short"), p.fov ?? (dome ? 360 : 90), 5, 10, 360, (v) => this.editDevice(id, (d) => (d.fov = v)))}
            ${numField(this.t("camera_reach_short"), p.reach ?? (dome ? 3 : 4.5), 0.5, 0.5, 50, (v) => this.editDevice(id, (d) => (d.reach = v)))}
            ${numField(this.t("camera_tilt_short"), p.tilt ?? (dome ? 65 : 20), 5, 0, 90, (v) => this.editDevice(id, (d) => (d.tilt = v)))}`
        : nothing}
      <label class="fp3d-size" title=${this.t("marker_height")}
        >${this.t("size_short_h")}
        <input
          type="number"
          inputmode="decimal"
          step="0.05"
          min="0"
          .value=${String(Math.round((p.y ?? auto) * 100) / 100)}
          @change=${(e: Event) => {
            const v = parseFloat((e.target as HTMLInputElement).value.replace(",", "."));
            if (Number.isFinite(v) && v >= 0) this.editDevice(id, (d) => (d.y = Math.round(v * 1000) / 1000));
          }}
        />
      </label>
      ${p.y !== null ? html`<button class="fp3d-chip" @click=${() => this.editDevice(id, (d) => (d.y = null))}>${this.t("height_auto")}</button>` : nothing}`;
  }

  private furnitureName(id: string): string {
    const f = this.data.building?.floors.flatMap((fl) => fl.furniture).find((m) => m.id === id);
    return f ? furnitureName(this.hass, f.type) : "";
  }

  private moveFurniture(e: CustomEvent<{ id: string; x: number; z: number }>): void {
    const { id, x, z } = e.detail;
    const wall = this.data.building?.settings.wall_interior ?? 0.12;
    this.editFurniture(id, (f, floor) => {
      // the item stays in its room (no dragging through walls) …
      const [nx, nz] = keepInRoom(floor, f.x, f.z, x, z);
      Object.assign(f, { x: nx, z: nz });
      // … and near a wall it turns its back to it and sits flush, as in the editor
      const snap = snapToWall(floor, f, wall);
      if (snap) Object.assign(f, snap);
    });
  }

  /** Width, depth and height of the selected item, editable in the furnish bar. */
  private renderSizeFields(id: string) {
    const f = this.data.building?.floors.flatMap((fl) => fl.furniture).find((m) => m.id === id);
    if (!f) return nothing;
    const field = (key: "w" | "d" | "h", label: string) => html`<label class="fp3d-size" title=${this.t(`size_${key}` as I18nKey)}
      >${label}
      <input
        type="number"
        inputmode="decimal"
        step="0.05"
        min="0.05"
        .value=${String(Math.round(f[key] * 100) / 100)}
        @change=${(e: Event) => {
          const v = parseFloat((e.target as HTMLInputElement).value.replace(",", "."));
          if (Number.isFinite(v) && v > 0) this.editFurniture(id, (m) => (m[key] = Math.round(v * 1000) / 1000));
        }}
    /></label>`;
    const floor = this.data.building?.floors.find((fl) => fl.furniture.some((m) => m.id === id));
    return html`${field("w", this.t("size_short_w"))}${field("d", this.t("size_short_d"))}${field("h", this.t("size_short_h"))}
    ${floor && canLift(f)
      ? html`<label class="fp3d-size" title=${this.t("mount_height")}
            >↕
            <input
              type="number"
              inputmode="decimal"
              step="0.05"
              min="0"
              .value=${String(Math.round((f.mount_y ?? mountBase(floor, f)) * 100) / 100)}
              @change=${(e: Event) => {
                const v = parseFloat((e.target as HTMLInputElement).value.replace(",", "."));
                if (Number.isFinite(v) && v >= 0) this.editFurniture(id, (m) => (m.mount_y = Math.round(v * 1000) / 1000));
              }}
          /></label>
          ${f.mount_y != null ? html`<button class="fp3d-chip" @click=${() => this.editFurniture(id, (m) => (m.mount_y = null))}>${this.t("height_auto")}</button>` : nothing}`
      : nothing}`;
  }

  private turnFurniture(delta: number): void {
    if (!this._selFurniture) return;
    this.editFurniture(this._selFurniture, (f) => (f.rotation = (((f.rotation + delta) % 360) + 360) % 360));
  }

  private deleteFurniture(): void {
    const id = this._selFurniture;
    const b = this.data.building;
    if (!id || !b) return;
    const next = structuredClone(b);
    for (const floor of next.floors) floor.furniture = floor.furniture.filter((m) => m.id !== id);
    this.data.edit(next);
    this._selFurniture = null;
  }

  private view3d() {
    return this.renderRoot.querySelector("fp3d-view3d") as (HTMLElement & { resetView(): void; lookThrough(entityId: string): void }) | null;
  }

  private back(): void {
    if (this._roomId) this._roomId = null;
    else if (this._floorId && (this.data.building?.floors.length ?? 0) > 1) this._floorId = null;
    else this.view3d()?.resetView();
  }

  private readonly onKey = (e: KeyboardEvent) => {
    if (e.key === "Escape" && this._mode === "view") this.back();
  };

  connectedCallback(): void {
    super.connectedCallback();
    window.addEventListener("keydown", this.onKey);
  }

  /** Once per page: are there shop offers the admin has not seen yet? (Only with a shop key.) */
  private checkOffers(): void {
    if (this.offersChecked || !this.hass?.user?.is_admin) return;
    this.offersChecked = true;
    getLicense(this.hass)
      .then((lic) => (this._newOffers = lic.active ? unseenOffers(lic.offers ?? []).length + unseenUpdates(lic.updates ?? []).length : 0))
      .catch(() => undefined);
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    window.removeEventListener("keydown", this.onKey);
  }

  protected render() {
    if (this.hass && !languageReady(this.hass.language)) return nothing;
    this.checkOffers();
    const b = this.data.building;
    const saveState = this.data.saveState;
    return html`
      <div class="fp3d-app">
        <header class="fp3d-header">
          <ha-menu-button .hass=${this.hass} .narrow=${this.narrow}></ha-menu-button>
          <h1>NeonPlan 3D</h1>
          ${this.isAdmin
            ? html`<div class="fp3d-seg" role="tablist">
                <button role="tab" aria-pressed=${this._mode === "view"} @click=${() => this.setMode("view")}>${this.t("view")}</button>
                <button role="tab" aria-pressed=${this._mode === "editor"} @click=${() => this.setMode("editor")}>${this.t("editor")}</button>
                <button role="tab" class="fp3d-tab-ext" aria-pressed=${this._mode === "extensions"} @click=${() => this.setMode("extensions")} title=${this._newOffers ? this.t("offers_dot") : ""}>
                  ✦ ${this.t("ext_tab")}${this._newOffers ? html`<span class="fp3d-dot" aria-label=${this.t("offers_dot")}></span>` : nothing}
                </button>
              </div>`
            : nothing}
          <span class="fp3d-grow"></span>
          ${this._mode === "view" && b?.floors.some((f) => f.rooms.length)
            ? html`<div class="fp3d-seg fp3d-quality" role="group" aria-label=${this.t("quality")}>
                ${(["auto", "low", "high"] as Quality[]).map(
                  (q) => html`<button aria-pressed=${this._quality === q} @click=${() => this.setQuality(q)}>${this.t(`quality_${q}`)}</button>`,
                )}
              </div>
              <div class="fp3d-seg fp3d-quality" role="group" aria-label=${this.t("theme")}>
                ${THEMES.map(
                  (t) =>
                    html`<button
                      aria-pressed=${this._theme === t}
                      @click=${() => {
                        this._theme = t;
                        prefs.set("theme", t);
                      }}
                    >
                      ${this.t(`theme_${t}`)}
                    </button>`,
                )}
              </div>
              <div class="fp3d-seg fp3d-quality" role="group" aria-label=${this.t("markers")}>
                ${(["none", "important", "all"] as MarkerMode[]).map(
                  (m) =>
                    html`<button
                      aria-pressed=${this._markers === m}
                      title=${this.t("markers")}
                      @click=${() => {
                        this._markers = m;
                        prefs.set("markers", m);
                      }}
                    >
                      ${this.t(`markers_${m}`)}
                    </button>`,
                )}
              </div>
              <div class="fp3d-seg fp3d-quality">
                <button
                  aria-pressed=${this._stats}
                  title=${this.t("fps_title")}
                  @click=${() => {
                    this._stats = !this._stats;
                    prefs.set("stats", this._stats ? "1" : "0");
                  }}
                >
                  ${this.t("fps")}
                </button>
              </div>`
            : nothing}
          ${this._mode === "editor" && saveState !== "idle"
            ? html`<span class="fp3d-save fp3d-save-${saveState}">${this.t(saveState === "saving" ? "saving" : saveState === "saved" ? "saved" : "save_error")}</span>`
            : nothing}
        </header>
        ${this.renderNotices()}
        ${this.data.error && !b ? html`<p class="fp3d-message">${this.t("load_error")}: ${this.data.error}</p>` : nothing}
        ${!b && !this.data.error ? html`<p class="fp3d-message">${this.t("loading")}</p>` : nothing}
        ${b
          ? this._mode === "editor" && this.isAdmin
            ? this.renderEditor(b)
            : this._mode === "extensions" && this.isAdmin
              ? this.renderExtensions()
              : this.renderView(b)
          : nothing}
      </div>
    `;
  }

  /** Restart hint, save errors and unsaved edits from an earlier session. */
  private renderNotices() {
    const d = this.data;
    const notices = [];
    if (d.needsRestart) {
      // an old bundle in the browser or the companion app: a reload helps, a restart does not
      if (d.versionGap === "frontend")
        notices.push(
          html`<div class="fp3d-notice fp3d-notice-warn">
            ${this.t("needs_reload", { frontend: d.frontendVersion, backend: d.backendVersion ?? "?" })}
            <button class="fp3d-btn" @click=${() => location.reload()}>${this.t("reload_page")}</button>
          </div>`,
        );
      else notices.push(html`<div class="fp3d-notice fp3d-notice-warn">${d.backendVersion ? this.t("needs_restart", { version: d.backendVersion, frontend: d.frontendVersion }) : this.t("needs_restart_old")}</div>`);
    }
    if (d.saveState === "error" && d.saveError) {
      notices.push(html`<div class="fp3d-notice fp3d-notice-error">${this.t("save_failed_detail", { error: d.saveError })}</div>`);
    }
    if (d.draft && this.isAdmin) {
      const at = new Date(d.draft.savedAt).toLocaleString(this.hass?.language);
      notices.push(
        html`<div class="fp3d-notice">
          <span>${this.t("draft_found", { time: at })}</span>
          <button class="fp3d-btn fp3d-primary" @click=${() => d.restoreDraft()}>${this.t("draft_restore")}</button>
          <button class="fp3d-btn" @click=${() => d.discardDraft()}>${this.t("draft_discard")}</button>
        </div>`,
      );
    }
    return notices.length ? html`<div class="fp3d-notices">${notices}</div>` : nothing;
  }

  /** The extensions page (shop connection, Pro add-ons, packs); it comes with the editor bundle. */
  private renderExtensions() {
    if (!this._editorReady) {
      loadEditor().then(
        () => (this._editorReady = true),
        (err: unknown) => (this.data.error = String(err)),
      );
      return html`<div class="fp3d-empty"><p>${this.t("loading")}</p></div>`;
    }
    return html`<fp3d-extensions
      class="fp3d-body"
      .hass=${this.hass}
      .packs=${this.data.packs}
      @packs-changed=${() => void this.data.reloadPacks()}
      @offers-seen=${() => (this._newOffers = 0)}
    ></fp3d-extensions>`;
  }

  private renderEditor(b: Building) {
    if (!this._editorReady) {
      loadEditor().then(
        () => (this._editorReady = true),
        (err: unknown) => (this.data.error = String(err)),
      );
      return html`<div class="fp3d-empty"><p>${this.t("loading")}</p></div>`;
    }
    return html`<fp3d-editor
      class="fp3d-body"
      .hass=${this.hass}
      .building=${b}
      .narrow=${this.narrow}
      .packs=${this.data.packs}
      @packs-changed=${() => void this.data.reloadPacks()}
      @open-extensions=${() => this.setMode("extensions")}
      @building-changed=${(e: CustomEvent<{ building: Building }>) => this.data.edit(e.detail.building)}
    ></fp3d-editor>`;
  }

  private renderView(b: Building) {
    if (!b.floors.length || !b.floors.some((f) => f.rooms.length)) {
      return html`<div class="fp3d-empty">
        <p>${this.t(this.isAdmin ? "no_building_admin" : "no_building")}</p>
        ${this.isAdmin ? html`<button class="fp3d-btn fp3d-primary" @click=${() => this.setMode("editor")}>${this.t("open_editor")}</button>` : nothing}
      </div>`;
    }
    const floor = b.floors.find((f) => f.id === this._floorId);
    const roomFloors = floor ? [floor] : b.floors;
    return html`
      <nav class="fp3d-nav">
        ${b.floors.length > 1
          ? html`<button class="fp3d-chip" aria-pressed=${this._floorId === null} @click=${() => {
                this._floorId = null;
                this._roomId = null;
              }}>
                ${this.t("all_floors")}
              </button>
              ${[...b.floors].reverse().map(
                (f) => html`<button
                  class="fp3d-chip"
                  aria-pressed=${f.id === this._floorId}
                  @click=${() => {
                    this._floorId = f.id;
                    this._roomId = null;
                  }}
                >
                  ${f.name}
                </button>`,
              )}
              <span class="fp3d-sep"></span>`
          : nothing}
        ${roomFloors.flatMap((f) =>
          f.rooms.map(
            (r) => html`<button
              class="fp3d-chip fp3d-room-chip"
              aria-pressed=${r.id === this._roomId}
              @click=${() => {
                if (b.floors.length > 1) this._floorId = f.id;
                this._roomId = r.id === this._roomId ? null : r.id;
              }}
            >
              ${r.name}
            </button>`,
          ),
        )}
      </nav>
      <div class="fp3d-stage-wrap ${this._roomId ? "fp3d-room-open" : ""}">
        <fp3d-view3d
          class="fp3d-body"
          .hass=${this.hass}
          .building=${b}
          .packs=${this.data.packs}
          .floorStack=${this._floorStack}
          .roomLabels=${this._roomNames}
          ?trail=${this._trail}
          .cameraWall=${this._cameraWall}
          @camera-wall-close=${() => (this._cameraWall = false)}
          @camera-wall-open=${() => (this._cameraWall = true)}
          ?weather=${this._weather}
          .panelOpen=${!!this._roomId}
          .floorId=${b.floors.length > 1 ? this._floorId : (b.floors[0]?.id ?? null)}
          .roomId=${this._roomId}
          .wallMode=${this._wallMode}
          .explode=${this._explode}
          .keepRoof=${this._keepRoof}
          .markerMode=${this._markers}
          .heatMode=${this._heat}
          .theme=${this._theme}
          ?furnish=${this._furnish}
          .selectedFurniture=${this._selFurniture}
          @furniture-select=${(e: CustomEvent<{ id: string | null }>) => (this._selFurniture = e.detail.id)}
          @furniture-move=${this.moveFurniture}
          @device-select=${(e: CustomEvent<{ id: string | null }>) => (this._selDevice = e.detail.id)}
          @device-move=${this.moveDevice}
          .quality=${this._quality}
          ?showStats=${this._stats}
          @room-tap=${this.onRoomTap}
          @open-extensions=${() => this.setMode("extensions")}
          @floor-tap=${(e: CustomEvent<{ floorId: string | null }>) => {
            this._floorId = e.detail.floorId;
            this._roomId = null;
          }}
          @back=${() => this.back()}
        ></fp3d-view3d>
        ${this._roomId
          ? html`<fp3d-room-panel
              class="fp3d-room-panel"
              @camera-look=${(e: CustomEvent<{ entity: string }>) => this.view3d()?.lookThrough(e.detail.entity)}
              .hass=${this.hass}
              .room=${b.floors.flatMap((f) => f.rooms).find((r) => r.id === this._roomId) ?? null}
              .floor=${b.floors.find((f) => f.rooms.some((r) => r.id === this._roomId)) ?? null}
              .confirmEntities=${confirmEntities(this.hass, b.floors)}
              @close=${() => (this._roomId = null)}
            ></fp3d-room-panel>`
          : nothing}
        <div class="fp3d-overlay">
          <div class="fp3d-seg">
            <button aria-pressed=${this._wallMode === "auto"} @click=${() => (this._wallMode = "auto")}>${this.t("walls_auto")}</button>
            <button aria-pressed=${this._wallMode === "cut"} @click=${() => (this._wallMode = "cut")}>${this.t("walls_cut")}</button>
          </div>
          ${b.floors.length > 1 && !this._floorId
            ? html`<div class="fp3d-seg">
                <button aria-pressed=${this._explode} @click=${() => this.setExplode(true)}>${this.t("floors_apart")}</button>
                <button aria-pressed=${!this._explode} @click=${() => this.setExplode(false)}>${this.t("floors_stacked")}</button>
              </div>`
            : nothing}
          ${!this._floorId && b.settings.roof.type !== "none"
            ? html`<div class="fp3d-seg">
                <button aria-pressed=${this._keepRoof} title=${this.t("roof_keep_hint")} @click=${() => this.setKeepRoof(!this._keepRoof)}>${this.t("roof_keep")}</button>
              </div>`
            : nothing}
          ${b.floors.length > 1 && this._floorId
            ? html`<div class="fp3d-seg" role="group" aria-label=${this.t("card_floor_stack")}>
                ${(["dim", "stacked", "single"] as FloorStack[]).map(
                  (m) =>
                    html`<button
                      aria-pressed=${this._floorStack === m}
                      @click=${() => {
                        this._floorStack = m;
                        prefs.set("floor_stack", m);
                      }}
                    >
                      ${this.t(`floor_stack_short_${m}` as I18nKey)}
                    </button>`,
                )}
              </div>`
            : nothing}
          <div class="fp3d-seg" role="group" aria-label=${this.t("heatmap")}>
            ${(["none", "temperature", "humidity", "co2"] as HeatMode[]).map(
              (m) =>
                html`<button
                  aria-pressed=${this._heat === m}
                  @click=${() => {
                    this._heat = m;
                    prefs.set("heat", m);
                  }}
                >
                  ${this.t(m === "none" ? "heat_off" : (`heat_short_${m}` as I18nKey))}
                </button>`,
            )}
          </div>
          <button
            class="fp3d-chip"
            aria-pressed=${this._roomNames}
            @click=${() => {
              this._roomNames = !this._roomNames;
              prefs.set("room_names", this._roomNames ? "1" : "0");
            }}
          >
            ${this.t("room_names_short")}
          </button>
          <button
            class="fp3d-chip"
            aria-pressed=${this._trail}
            title=${this.t("trail_hint")}
            @click=${() => {
              this._trail = !this._trail;
              prefs.set("trail", this._trail ? "1" : "0");
            }}
          >
            ${hasFeature("camera_cockpit") ? "" : "🔒 "}${this.t("trail_short")}
          </button>
          <button
            class="fp3d-chip"
            aria-pressed=${this._cameraWall}
            title=${this.t("camera_wall_hint")}
            @click=${() => (this._cameraWall = !this._cameraWall)}
          >
            ${hasFeature("camera_cockpit") ? "" : "🔒 "}${this.t("cameras_short")}
          </button>
          <button
            class="fp3d-chip"
            aria-pressed=${this._weather}
            title=${this.t("weather_hint")}
            @click=${() => {
              this._weather = !this._weather;
              prefs.set("weather", this._weather ? "1" : "0");
            }}
          >
            ${hasFeature("weather") ? "" : "🔒 "}${this.t("weather_short")}
          </button>
          ${this._roomId || (this._floorId && b.floors.length > 1)
            ? html`<button class="fp3d-chip" @click=${() => this.back()}>${this.t("back")}</button>`
            : nothing}
        </div>
        ${this._furnish
          ? html`<div class="fp3d-furnish-bar">
              ${this._selFurniture
                ? html`<span>${this.furnitureName(this._selFurniture)}</span>
                    ${this.renderSizeFields(this._selFurniture)}
                    <button class="fp3d-chip" @click=${() => this.turnFurniture(-45)}>↺ 45°</button>
                    <button class="fp3d-chip" @click=${() => this.turnFurniture(45)}>↻ 45°</button>
                    <button class="fp3d-chip fp3d-danger-chip" @click=${() => this.deleteFurniture()}>${this.t("delete")}</button>`
                : this._selDevice
                  ? html`<span>${entityName(this.hass, this._selDevice)}</span>
                      ${this.renderDeviceFields(this._selDevice)}
                      <button class="fp3d-chip" @click=${() => this.turnDevice(-this.turnStep())}>↺ ${this.turnStep()}°</button>
                      <button class="fp3d-chip" @click=${() => this.turnDevice(this.turnStep())}>↻ ${this.turnStep()}°</button>
                      <button class="fp3d-chip fp3d-danger-chip" @click=${() => this.deleteDevice()}>${this.t("delete")}</button>`
                  : html`<span>${this.t("furnish_hint")}</span>`}
              <button class="fp3d-chip fp3d-chip-on" @click=${() => ((this._furnish = false), (this._selFurniture = null), (this._selDevice = null))}>${this.t("done")}</button>
            </div>`
          : nothing}
      </div>
    `;
  }

  static styles = [
    tokens,
    controls,
    css`
      .fp3d-dot {
        display: inline-block;
        width: 8px;
        height: 8px;
        margin-left: 6px;
        border-radius: 50%;
        background: #ffb547;
        box-shadow: 0 0 8px #ffb547;
        vertical-align: middle;
      }
      :host {
        display: block;
        /* HA gives the custom panel's parent no explicit height, so 100% collapses. */
        height: 100vh;
        height: 100dvh;
        background: var(--fp3d-bg);
      }
      .fp3d-app {
        display: flex;
        flex-direction: column;
        height: 100%;
        min-height: 0;
      }
      .fp3d-header {
        display: flex;
        align-items: center;
        gap: 12px;
        padding: 6px 14px 6px 4px;
        min-height: 52px;
        border-bottom: 1px solid var(--fp3d-line);
        background: var(--fp3d-chrome-solid);
        flex-wrap: wrap;
      }
      ha-menu-button {
        color: var(--fp3d-text);
      }
      h1 {
        font-family: var(--fp3d-title-font);
        font-weight: 700;
        font-size: 19px;
        letter-spacing: -0.01em;
        margin: 0 4px 0 8px;
        white-space: nowrap;
      }
      .fp3d-notices {
        display: grid;
        gap: 6px;
        padding: 8px 14px 0;
      }
      .fp3d-notice {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 8px 12px;
        padding: 9px 12px;
        border-radius: 10px;
        border: 1px solid var(--fp3d-line);
        background: var(--fp3d-chrome-solid);
        font-size: 13.5px;
      }
      .fp3d-notice span {
        flex: 1;
        min-width: 200px;
      }
      .fp3d-notice-warn {
        border-color: rgba(255, 181, 71, 0.6);
        color: var(--fp3d-warm);
      }
      .fp3d-notice-error {
        border-color: rgba(255, 107, 139, 0.6);
        color: var(--fp3d-danger);
        word-break: break-word;
      }
      .fp3d-chip-on {
        background: var(--fp3d-accent);
        color: var(--fp3d-accent-text);
      }
      .fp3d-furnish-bar {
        position: absolute;
        left: 50%;
        bottom: 16px;
        transform: translateX(-50%);
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        gap: 8px;
        max-width: calc(100% - 24px);
        padding: 8px 10px 8px 16px;
        border-radius: 999px;
        background: var(--fp3d-chrome);
        box-shadow: var(--fp3d-shadow);
        font-size: 13.5px;
      }
      .fp3d-size-select {
        font: inherit;
        color: var(--fp3d-text);
        background: var(--fp3d-chrome-solid);
        border: 1px solid var(--fp3d-line);
        border-radius: 999px;
        padding: 4px 10px;
      }
      .fp3d-size {
        display: inline-flex;
        align-items: center;
        gap: 4px;
        font-size: 12px;
        color: var(--fp3d-muted);
      }
      .fp3d-size input {
        width: 58px;
        padding: 5px 6px;
        border: 1px solid rgba(127, 127, 127, 0.35);
        border-radius: 8px;
        background: transparent;
        color: inherit;
        font: inherit;
        font-size: 13px;
      }
      .fp3d-danger-chip {
        color: var(--fp3d-danger);
      }
      .fp3d-grow {
        flex: 1;
      }
      .fp3d-save {
        font-size: 12.5px;
        color: var(--fp3d-muted);
      }
      .fp3d-save-error {
        color: var(--fp3d-danger);
      }
      .fp3d-body {
        flex: 1;
        min-height: 0;
      }
      .fp3d-nav {
        display: flex;
        gap: 6px;
        padding: 10px 14px;
        overflow-x: auto;
        scrollbar-width: none;
        flex: none;
      }
      .fp3d-nav .fp3d-chip {
        box-shadow: none;
        border: 1px solid var(--fp3d-line);
      }
      .fp3d-sep {
        flex: none;
        width: 1px;
        margin: 4px 4px;
        background: var(--fp3d-line);
      }
      .fp3d-stage-wrap {
        position: relative;
        flex: 1;
        min-height: 0;
        display: flex;
        container-type: size;
        container-name: fp3d;
      }
      .fp3d-stage-wrap fp3d-view3d {
        flex: 1;
      }
      .fp3d-room-panel {
        position: absolute;
        top: 58px;
        right: 14px;
        bottom: 14px;
        width: min(360px, calc(100% - 28px));
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        pointer-events: none;
      }
      /* the switches sit at the bottom (as in the card), where they never meet the energy values or warnings */
      fp3d-view3d {
        --fp3d-bottom-inset: 52px;
      }
      .fp3d-furnish-bar {
        bottom: 68px;
      }
      /* phones and portrait tablets: panel as a sheet at the bottom, the switches step aside */
      @container fp3d ((max-width: 700px) or ((orientation: portrait) and (max-width: 1000px))) {
        .fp3d-room-panel {
          top: auto;
          left: 8px;
          right: 8px;
          bottom: 8px;
          width: auto;
          height: 55%;
          justify-content: flex-end;
        }
        .fp3d-room-open .fp3d-overlay {
          display: none;
        }
      }
      .fp3d-overlay {
        position: absolute;
        right: 12px;
        bottom: 12px;
        left: 60px;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 8px;
        align-items: center;
        pointer-events: none;
      }
      .fp3d-overlay > * {
        pointer-events: auto;
      }
      .fp3d-quality button {
        padding: 5px 11px;
        min-height: 30px;
        font-size: 13px;
      }
      .fp3d-message,
      .fp3d-empty {
        padding: 32px 20px;
        color: var(--fp3d-muted);
        text-align: center;
      }
      .fp3d-empty {
        display: grid;
        justify-items: center;
        gap: 12px;
        margin: auto;
      }
    `,
  ];
}

if (!customElements.get("neonplan3d-panel")) customElements.define("neonplan3d-panel", Floorplan3dPanel);
