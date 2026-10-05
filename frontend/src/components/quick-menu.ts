// Quick menu at a device (long press in 3D): a ring of colours around a power button for lights,
// up/stop/down for blinds, on/off for switches, with a slider and a way to the full details.

import { css, html, LitElement, nothing } from "lit";
import { type CarState, entityName, isUnavailable, kindOf } from "../devices.ts";
import { hasFeature } from "../features.ts";
import { translate, type I18nKey } from "../i18n.ts";
import { openMoreInfo, stateText } from "../markers.ts";
import { tokens } from "../styles.ts";
import type { HassEntity, HomeAssistant } from "../types.ts";

const COLORS: [number, number, number][] = [
  [255, 181, 71],
  [255, 236, 210],
  [55, 224, 255],
  [91, 124, 255],
  [190, 90, 255],
  [255, 95, 210],
  [255, 70, 70],
  [120, 255, 150],
];
const KELVINS = [2200, 2700, 3200, 4000, 5000, 6500];
const COLOR_MODES = ["hs", "rgb", "rgbw", "rgbww", "xy"];
const COVER_SET_POSITION = 4;
const COVER_OPEN_TILT = 16;
const COVER_CLOSE_TILT = 32;
const COVER_SET_TILT = 128;

/** What a light can do, from its supported colour modes. */
export function lightAbilities(st: HassEntity): { dim: boolean; color: boolean; temp: boolean } {
  const modes = (st.attributes.supported_color_modes as string[] | undefined) ?? [];
  const color = modes.some((m) => COLOR_MODES.includes(m));
  return { dim: modes.some((m) => m !== "onoff"), color, temp: modes.includes("color_temp") };
}

/** Whether a cover can be moved to a position. */
export function coverPositionable(st: HassEntity): boolean {
  return (((st.attributes.supported_features as number) ?? 0) & COVER_SET_POSITION) !== 0 && typeof st.attributes.current_position === "number";
}

export class Fp3dQuickMenu extends LitElement {
  static properties = {
    hass: { attribute: false },
    entity: { attribute: false },
    car: { attribute: false },
    confirmSwitch: { type: Boolean },
    pro: { type: Boolean },
    low: { type: Boolean, reflect: true },
    _tick: { state: true },
  };

  declare hass: HomeAssistant;
  declare entity: string;
  /** Auto Pro: the car behind a parking spot's pin – its menu replaces the entity's. */
  declare car: CarState | null;
  /** Ask before the power button switches. */
  declare confirmSwitch: boolean;
  /** The camera cockpit is unlocked (otherwise the look-through button shows a lock). */
  declare pro: boolean;
  /** Tablet level: no blur behind the menu. */
  declare low: boolean;
  /** Bumped every few seconds while a camera menu is open, so its snapshot refreshes. */
  private declare _tick: number;
  private tickTimer: ReturnType<typeof setInterval> | undefined;

  connectedCallback(): void {
    super.connectedCallback();
    this._tick = 0;
    this.tickTimer = setInterval(() => {
      if (kindOf(this.entity) === "camera" && !document.hidden) this._tick++;
    }, 3000);
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    clearInterval(this.tickTimer);
  }

  /** Snapshot of a camera, refreshed while the menu is open; a tap opens the live view. */
  private renderCamera(st: HassEntity) {
    const picture = st.attributes.entity_picture as string | undefined;
    const src = picture ? (picture.startsWith("data:") ? picture : `${picture}${picture.includes("?") ? "&" : "?"}fp3d=${this._tick}`) : null;
    return html`<button class="qm-camera" title=${this.t("camera_live")} @click=${() => this.details()}>
        ${src ? html`<img src=${src} alt=${entityName(this.hass, this.entity)} />` : html`<span class="qm-note">${stateText(this.hass, st)}</span>`}
      </button>
      <button class="qm-details qm-look" @click=${() => this.dispatchEvent(new CustomEvent("camera-look", { detail: { entity: this.entity }, bubbles: true, composed: true }))}>
        ${this.pro ? "" : "🔒 "}${this.t("through_camera")}
      </button>`;
  }

  private t(key: I18nKey, vars?: Record<string, string | number>): string {
    return translate(this.hass, key, vars);
  }

  /** Ask before switching when the device is marked so (power and lock buttons; sliders and colours never ask). */
  private ask(): boolean {
    return !this.confirmSwitch || confirm(this.t("confirm_switch", { name: entityName(this.hass, this.entity) }));
  }

  private call(domain: string, service: string, data: Record<string, unknown> = {}): void {
    void this.hass.callService(domain, service, { entity_id: this.entity, ...data });
  }

  private close(): void {
    this.dispatchEvent(new CustomEvent("close", { bubbles: true, composed: true }));
  }

  private details(): void {
    openMoreInfo(this, this.entity);
    this.close();
  }

  /** Buttons spread on a ring around the centre. */
  private ring(items: ReturnType<typeof html>[]) {
    const n = items.length;
    return items.map((item, i) => {
      const a = (i / n) * Math.PI * 2 - Math.PI / 2;
      return html`<div class="qm-at" style="left:${50 + Math.cos(a) * 39}%;top:${50 + Math.sin(a) * 39}%">${item}</div>`;
    });
  }

  private renderLight(st: HassEntity) {
    const can = lightAbilities(st);
    const on = st.state === "on";
    const pct = on && typeof st.attributes.brightness === "number" ? Math.round((st.attributes.brightness as number) / 2.55) : on ? 100 : 0;
    const swatches = can.color
      ? COLORS.map(
          (c) => html`<button class="qm-swatch" style="background:rgb(${c.join(",")})" aria-label=${`RGB ${c.join(", ")}`} @click=${() => this.call("light", "turn_on", { rgb_color: c })}></button>`,
        )
      : can.temp
        ? KELVINS.map(
            (k) => html`<button class="qm-swatch" style="background:${kelvinCss(k)}" aria-label=${`${k} K`} @click=${() => this.call("light", "turn_on", { color_temp_kelvin: k })}></button>`,
          )
        : [];
    return html`<div class="qm-ring ${swatches.length ? "" : "qm-ring-small"}">
        ${this.ring(swatches)}
        <button class="qm-power ${on ? "qm-on" : ""}" aria-pressed=${on} @click=${() => this.ask() && this.call("light", "toggle")}>
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 3v8M6.3 6.8a8 8 0 1 0 11.4 0" /></svg>
          <b>${on ? `${pct} %` : this.t("qm_off")}</b>
        </button>
      </div>
      ${can.dim
        ? html`<input
            class="qm-slider"
            type="range"
            min="1"
            max="100"
            .value=${String(Math.max(1, pct))}
            aria-label=${this.t("brightness")}
            @change=${(e: Event) => this.call("light", "turn_on", { brightness_pct: Number((e.target as HTMLInputElement).value) })}
          />`
        : nothing}`;
  }

  private renderCover(st: HassEntity) {
    const pos = typeof st.attributes.current_position === "number" ? (st.attributes.current_position as number) : null;
    const moving = st.state === "opening" || st.state === "closing";
    const setPos = coverPositionable(st);
    // like the colour ring of lights: open and close, positions in between and stop around the blind
    const slot = (label: string, aria: string, action: () => void, active = false) =>
      html`<button class="qm-swatch qm-slot ${active ? "qm-slot-on" : ""}" aria-label=${aria} @click=${action}>${label}</button>`;
    const at = (p: number) => pos !== null && Math.abs(pos - p) < 3;
    const ring = [
      // moving asks first when the blind is marked so; stopping never asks
      slot("▲", this.t("cover_open"), () => this.ask() && this.call("cover", "open_cover"), at(100)),
      ...(setPos ? [75, 50].map((p) => slot(`${p}`, `${p} %`, () => this.ask() && this.call("cover", "set_cover_position", { position: p }), at(p))) : []),
      slot("▼", this.t("cover_close"), () => this.ask() && this.call("cover", "close_cover"), at(0)),
      ...(setPos ? [25].map((p) => slot(`${p}`, `${p} %`, () => this.ask() && this.call("cover", "set_cover_position", { position: p }), at(p))) : []),
      slot("■", this.t("cover_stop"), () => this.call("cover", "stop_cover"), moving),
    ];
    // the centre shows the blind: its closed part fills from the top
    const closed = pos === null ? (st.state === "closed" ? 100 : 0) : 100 - pos;
    return html`<div class="qm-ring">
        ${this.ring(ring)}
        <button
          class="qm-power qm-blind ${closed < 100 ? "qm-on" : ""}"
          style="--closed:${closed}%"
          aria-label=${moving ? this.t("cover_stop") : closed > 50 ? this.t("cover_open") : this.t("cover_close")}
          @click=${() => (moving ? this.call("cover", "stop_cover") : this.ask() && this.call("cover", closed > 50 ? "open_cover" : "close_cover"))}
        >
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 4h16M5 4v15M19 4v15M7 8h10M7 12h10M7 16h10" /></svg>
          <b>${pos !== null ? `${pos} %` : stateText(this.hass, st)}</b>
        </button>
      </div>
      ${setPos
        ? html`<input
            class="qm-slider"
            type="range"
            min="0"
            max="100"
            .value=${String(pos ?? 0)}
            aria-label=${this.t("position")}
            @change=${(e: Event) => this.call("cover", "set_cover_position", { position: Number((e.target as HTMLInputElement).value) })}
          />`
        : nothing}
      ${this.renderTilt(st)}`;
  }

  /** Slats of a venetian blind or a Raffstore: a tilt slider when the cover sets a tilt position, else open/close tilt buttons. */
  private renderTilt(st: HassEntity) {
    const features = ((st.attributes.supported_features as number) ?? 0) | 0;
    const tilt = typeof st.attributes.current_tilt_position === "number" ? (st.attributes.current_tilt_position as number) : null;
    if (features & COVER_SET_TILT && tilt !== null)
      return html`<label class="qm-tilt"
        ><span>${this.t("cover_tilt")} · ${tilt} %</span>
        <input
          class="qm-slider"
          type="range"
          min="0"
          max="100"
          .value=${String(tilt)}
          aria-label=${this.t("cover_tilt")}
          @change=${(e: Event) => this.call("cover", "set_cover_tilt_position", { tilt_position: Number((e.target as HTMLInputElement).value) })}
      /></label>`;
    if (features & (COVER_OPEN_TILT | COVER_CLOSE_TILT))
      return html`<div class="qm-tilt-buttons">
        ${features & COVER_OPEN_TILT ? html`<button class="qm-swatch qm-slot" @click=${() => this.call("cover", "open_cover_tilt")}>${this.t("cover_tilt_open")}</button>` : nothing}
        ${features & COVER_CLOSE_TILT ? html`<button class="qm-swatch qm-slot" @click=${() => this.call("cover", "close_cover_tilt")}>${this.t("cover_tilt_close")}</button>` : nothing}
      </div>`;
    return nothing;
  }

  /** Auto Pro: lock and unlock (unlocking asks first), climate, charging; the charge and range on top. */
  private renderCar(car: CarState) {
    const e = car.entities;
    const svc = (domain: string, service: string, id: string, data: Record<string, unknown> = {}) => void this.hass.callService(domain, service, { entity_id: id, ...data });
    const lockId = e.lock;
    const lockIsLock = !!lockId && lockId.startsWith("lock.");
    const climId = e.climate;
    const climIsClimate = !!climId && climId.startsWith("climate.");
    const chargeId = e.charging && e.charging.startsWith("switch.") ? e.charging : null;
    const line = [car.soc !== null ? `${Math.round(car.soc)} %` : null, car.range !== null ? `${Math.round(car.range)} ${car.rangeUnit}` : null, car.charging ? `⚡ ${this.t("car_charging_short")}` : car.plugged ? "🔌" : null].filter(Boolean).join(" · ");
    return html`<p class="qm-car-line">${line || stateText(this.hass, this.hass.states[this.entity])}</p>
      <div class="qm-car">
        ${lockIsLock
          ? html`<button class="qm-swatch qm-slot ${car.locked ? "qm-slot-on" : ""}" @click=${() => (car.locked ? confirm(this.t("car_unlock_confirm")) && svc("lock", "unlock", lockId!) : svc("lock", "lock", lockId!))}>
              ${car.locked ? `🔓 ${this.t("car_unlock_btn")}` : `🔒 ${this.t("car_lock_btn")}`}
            </button>`
          : nothing}
        ${climId
          ? html`<button class="qm-swatch qm-slot ${car.climateOn ? "qm-slot-on" : ""}" @click=${() => (climIsClimate ? svc("climate", car.climateOn ? "turn_off" : "turn_on", climId) : svc("switch", car.climateOn ? "turn_off" : "turn_on", climId))}>
              ${car.climateOn ? `❄ ${this.t("car_climate_off")}` : `🌡 ${this.t("car_climate_on")}`}
            </button>`
          : nothing}
        ${chargeId
          ? html`<button class="qm-swatch qm-slot ${car.charging ? "qm-slot-on" : ""}" @click=${() => svc("switch", car.charging ? "turn_off" : "turn_on", chargeId)}>
              ${car.charging ? `⏹ ${this.t("car_charge_stop")}` : `⚡ ${this.t("car_charge_start")}`}
            </button>`
          : nothing}
        ${!lockIsLock && !climId && !chargeId ? html`<p class="qm-note">${this.t("car_no_controls")}</p>` : nothing}
      </div>`;
  }

  /** Klang & Kino: a media player – cover in the middle, play/pause on it, previous and next around, the volume below. */
  private renderMedia(st: HassEntity) {
    const a = st.attributes;
    const playing = st.state === "playing";
    const off = st.state === "off" || st.state === "standby";
    const vol = typeof a.volume_level === "number" ? Math.round((a.volume_level as number) * 100) : null;
    const title = [a.media_title, a.media_artist].filter((x) => typeof x === "string" && x).join(" · ");
    const picture = typeof a.entity_picture === "string" ? (a.entity_picture as string) : null;
    return html`<div class="qm-media">
        <button class="qm-swatch qm-slot" aria-label=${this.t("previous")} ?disabled=${off} @click=${() => this.call("media_player", "media_previous_track")}>⏮</button>
        <button class="qm-power qm-media-main ${playing ? "qm-on" : ""}" aria-label=${this.t("play_pause")} style=${picture ? `background-image:url(${picture})` : ""} @click=${() => this.call("media_player", off ? "turn_on" : "media_play_pause")}>
          <span>${off ? "⏻" : playing ? "⏸" : "▶"}</span>
        </button>
        <button class="qm-swatch qm-slot" aria-label=${this.t("next")} ?disabled=${off} @click=${() => this.call("media_player", "media_next_track")}>⏭</button>
      </div>
      ${title ? html`<p class="qm-media-title">${title}</p>` : nothing}
      ${vol !== null
        ? html`<input
            class="qm-slider"
            type="range"
            min="0"
            max="100"
            .value=${String(vol)}
            aria-label=${this.t("volume")}
            @change=${(e: Event) => this.call("media_player", "volume_set", { volume_level: Number((e.target as HTMLInputElement).value) / 100 })}
          />`
        : nothing}`;
  }

  private renderToggle(st: HassEntity) {
    const on = st.state === "on" || st.state === "unlocked" || st.state === "playing";
    const domain = st.entity_id.split(".")[0];
    return html`<div class="qm-ring qm-ring-small">
      <button
        class="qm-power ${on ? "qm-on" : ""}"
        aria-pressed=${on}
        @click=${() => this.ask() && (domain === "lock" ? this.call("lock", on ? "lock" : "unlock") : this.call("homeassistant", "toggle"))}
      >
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 3v8M6.3 6.8a8 8 0 1 0 11.4 0" /></svg>
        <b>${stateText(this.hass, st)}</b>
      </button>
    </div>`;
  }

  protected render() {
    const st = this.hass?.states[this.entity];
    if (!st) return nothing;
    const kind = kindOf(this.entity);
    const body = this.car
      ? this.renderCar(this.car)
      : isUnavailable(st)
      ? html`<p class="qm-note">${stateText(this.hass, st)}</p>`
      : kind === "light"
        ? this.renderLight(st)
        : kind === "cover"
          ? this.renderCover(st)
          : kind === "camera"
            ? this.renderCamera(st)
            : kind === "media" && hasFeature("sound")
              ? this.renderMedia(st)
              : this.renderToggle(st);
    return html`<div class="qm" role="dialog" aria-label=${entityName(this.hass, this.entity)}>
      <div class="qm-title">${entityName(this.hass, this.entity)}</div>
      ${body}
      <button class="qm-details" @click=${() => this.details()}>${this.t("details")} …</button>
    </div>`;
  }

  static styles = [
    tokens,
    css`
      .qm-camera {
        display: block;
        width: 100%;
        padding: 0;
        margin: 6px 0 8px;
        border: 0;
        border-radius: 12px;
        overflow: hidden;
        background: #000;
        cursor: pointer;
      }
      .qm-camera img {
        display: block;
        width: 100%;
        aspect-ratio: 16 / 9;
        object-fit: cover;
      }
      .qm:has(.qm-camera) {
        width: 300px;
      }
      .qm {
        width: 232px;
        padding: 12px 14px 10px;
        border-radius: 22px;
        background: var(--fp3d-chrome);
        box-shadow: var(--fp3d-shadow), 0 0 0 1px var(--fp3d-line);
        backdrop-filter: blur(10px);
      }
      :host([low]) .qm {
        backdrop-filter: none;
        box-shadow: 0 0 0 1px var(--fp3d-line);
        animation: none;
        color: var(--fp3d-text);
        text-align: center;
        animation: qm-in 140ms ease-out;
      }
      @keyframes qm-in {
        from {
          opacity: 0;
          transform: scale(0.85);
        }
      }
      .qm-title {
        font: 700 14.5px var(--fp3d-title-font);
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .qm-ring {
        position: relative;
        width: 196px;
        height: 196px;
        margin: 6px auto 4px;
        display: grid;
        place-items: center;
      }
      .qm-ring-small {
        height: 110px;
      }
      .qm-at {
        position: absolute;
        transform: translate(-50%, -50%);
      }
      .qm-swatch {
        width: 34px;
        height: 34px;
        border: 2px solid rgba(255, 255, 255, 0.25);
        border-radius: 50%;
        cursor: pointer;
        box-shadow: 0 0 12px rgba(0, 0, 0, 0.35);
      }
      .qm-swatch:active {
        transform: scale(0.9);
      }
      .qm-power {
        display: grid;
        place-items: center;
        gap: 2px;
        width: 88px;
        height: 88px;
        border: 0;
        border-radius: 50%;
        background: var(--fp3d-bg2, #16223a);
        color: var(--fp3d-muted);
        box-shadow: inset 0 0 0 2px var(--fp3d-line);
        cursor: pointer;
        font: inherit;
      }
      .qm-power b {
        font: 700 15px var(--fp3d-title-font);
        color: var(--fp3d-text);
      }
      .qm-power small {
        font-size: 11px;
      }
      .qm-on {
        color: #1a1204;
        background: var(--fp3d-warm);
        box-shadow: 0 0 24px rgba(255, 181, 71, 0.55);
      }
      .qm-on b {
        color: #1a1204;
      }
      .qm-slot {
        display: grid;
        place-items: center;
        border-color: var(--fp3d-line);
        background: var(--fp3d-bg2, #16223a);
        color: var(--fp3d-text);
        font: 700 12px var(--fp3d-title-font);
      }
      .qm-slot-on {
        background: var(--fp3d-accent);
        color: var(--fp3d-accent-text);
        border-color: transparent;
        box-shadow: 0 0 14px rgba(55, 224, 255, 0.45);
      }
      /* the blind: its closed part covers the circle from the top, the open part glows like daylight */
      .qm-blind.qm-on {
        background: linear-gradient(to bottom, #1e2c4c var(--closed), #9fd9ff var(--closed));
        box-shadow: 0 0 22px rgba(120, 200, 255, 0.4);
        color: #06101f;
      }
      .qm-blind b {
        text-shadow: 0 0 6px rgba(0, 0, 0, 0.6);
        color: #fff;
      }
      .qm-round {
        width: 46px;
        height: 46px;
        border: 0;
        border-radius: 50%;
        background: var(--fp3d-accent);
        color: var(--fp3d-accent-text);
        font-size: 17px;
        cursor: pointer;
      }
      .qm-car-line {
        margin: 2px 0 8px;
        text-align: center;
        font-weight: 600;
        font-variant-numeric: tabular-nums;
      }
      .qm-car {
        display: grid;
        gap: 6px;
        justify-items: stretch;
      }
      .qm-car .qm-slot {
        width: auto;
        padding: 6px 10px;
        font-size: 13px;
      }
      .qm-media {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 12px;
        margin: 6px 0;
      }
      .qm-media-main {
        width: 64px;
        height: 64px;
        border-radius: 50%;
        background-size: cover;
        background-position: center;
        position: relative;
      }
      .qm-media-main span {
        position: absolute;
        inset: 0;
        display: grid;
        place-items: center;
        font-size: 22px;
        text-shadow: 0 0 6px rgba(0, 0, 0, 0.8);
        color: #fff;
      }
      .qm-media .qm-slot {
        width: auto;
        padding: 0 10px;
      }
      .qm-media-title {
        margin: 2px 0 4px;
        text-align: center;
        font-size: 12px;
        opacity: 0.85;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .qm-tilt {
        display: grid;
        gap: 4px;
        margin-top: 8px;
        font-size: 12px;
        color: var(--fp3d-muted);
      }
      .qm-tilt-buttons {
        display: flex;
        gap: 6px;
        justify-content: center;
        margin-top: 8px;
      }
      .qm-tilt-buttons .qm-slot {
        width: auto;
        padding: 0 10px;
        font-size: 12px;
      }
      .qm-slider {
        width: 100%;
        margin: 4px 0 6px;
        accent-color: var(--fp3d-accent);
      }
      .qm-look {
        display: block;
        width: 100%;
        margin-top: -4px;
      }
      .qm-details {
        border: 0;
        background: none;
        color: var(--fp3d-accent);
        font: inherit;
        font-size: 13px;
        padding: 6px;
        cursor: pointer;
      }
      .qm-note {
        color: var(--fp3d-muted);
      }
    `,
  ];
}

function kelvinCss(k: number): string {
  const t = Math.min(1, Math.max(0, (k - 2200) / 4300));
  const mix = (a: number, b: number) => Math.round(a + (b - a) * t);
  return `rgb(${mix(255, 200)},${mix(170, 225)},${mix(80, 255)})`;
}

if (!customElements.get("fp3d-quick-menu")) customElements.define("fp3d-quick-menu", Fp3dQuickMenu);
