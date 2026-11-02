// The room bar along the bottom of the 3D view (panel and card): the favourites, then a tile per room with its
// temperature, the lights that are on, an open window or door and a player that plays. A tap on a room flies into it
// (the room panel opens); a tap on its lights switches them off. Plain tiles, no 3D work: fine on old wall tablets.
import { css, html, LitElement, nothing, svg } from "lit";
import { entityName, isUnavailable } from "../devices.ts";
import { formatNumber, translate, type I18nKey } from "../i18n.ts";
import { iconPath } from "../icons.ts";
import type { Building } from "../model.ts";
import { favoriteTiles, roomTiles } from "../room-bar.ts";
import { controls, tokens } from "../styles.ts";
import type { HomeAssistant } from "../types.ts";

const MIN_KEY = "neonplan3d.roombar_min";

/** A window (the line icons have none of their own) and a play triangle, drawn like the line icons. */
const WINDOW = "M5 4h14v16H5zM12 4v16M5 12h14";
const PLAY = "M8 5.5v13l10.5-6.5z";
const icon = (d: string) => html`<svg class="fp3d-rb-ico" viewBox="0 0 24 24" aria-hidden="true">${svg`<path d=${d} />`}</svg>`;

export class Fp3dRoomBar extends LitElement {
  static properties = {
    hass: { attribute: false },
    building: { attribute: false },
    floorId: { attribute: false },
    roomId: { attribute: false },
    favorites: { type: Boolean },
    readOnly: { type: Boolean },
    _min: { state: true },
    _fired: { state: true },
  };

  declare hass: HomeAssistant;
  declare building: Building | null;
  /** The floor shown; null = the house (every floor's rooms, from the bottom up). */
  declare floorId: string | null;
  /** The open room: its tile is marked. */
  declare roomId: string | null;
  /** The favourites (scenes, scripts, switches) before the rooms. */
  declare favorites: boolean;
  /** Time travel: the past is shown, nothing switches. */
  declare readOnly: boolean;
  private declare _min: boolean;
  private declare _fired: string | null;

  constructor() {
    super();
    this.building = null;
    this.floorId = null;
    this.roomId = null;
    this.favorites = false;
    this.readOnly = false;
    this._fired = null;
    try {
      this._min = localStorage.getItem(MIN_KEY) === "1";
    } catch {
      this._min = false;
    }
  }

  private t(key: I18nKey, vars?: Record<string, string | number>): string {
    return translate(this.hass, key, vars);
  }

  private setMin(on: boolean): void {
    this._min = on;
    try {
      localStorage.setItem(MIN_KEY, on ? "1" : "0");
    } catch {
      // storage unavailable: the bar just opens again next time
    }
  }

  private pick(floorId: string, roomId: string): void {
    this.dispatchEvent(new CustomEvent("room-pick", { detail: { floorId, roomId }, bubbles: true, composed: true }));
  }

  protected render() {
    const b = this.building;
    if (!b || !this.hass) return nothing;
    if (this._min)
      return html`<button class="fp3d-chip fp3d-rb-open" aria-expanded="false" title=${this.t("room_bar")} @click=${() => this.setMin(false)}>▴ ${this.t("room_bar_rooms")}</button>`;
    const hass = this.hass;
    const rooms = roomTiles(hass, b, this.floorId);
    const favs = this.favorites ? favoriteTiles(hass, b) : [];
    const house = !this.floorId && b.floors.length > 1;
    const floorName = (id: string) => b.floors.find((f) => f.id === id)?.name ?? "";
    return html`<div class="fp3d-rb" role="toolbar" aria-label=${this.t("room_bar")}>
      <button class="fp3d-rb-pill fp3d-rb-min" aria-expanded="true" title=${this.t("room_bar_hide")} aria-label=${this.t("room_bar_hide")} @click=${() => this.setMin(true)}>▾</button>
      ${favs.map((f) => {
        const st = hass.states[f.id];
        const run = f.domain !== "homeassistant";
        return html`<button
          class="fp3d-rb-pill fp3d-rb-fav ${f.on || this._fired === f.id ? "fp3d-rb-on" : ""}"
          title=${run ? `${entityName(hass, f.id)} – ${this.t("room_bar_run")}` : `${entityName(hass, f.id)} – ${f.on ? this.t("room_bar_on") : this.t("room_bar_off")}`}
          ?disabled=${this.readOnly || isUnavailable(st)}
          @click=${() => {
            void hass.callService(f.domain, f.service, { entity_id: f.id });
            this._fired = f.id;
            setTimeout(() => (this._fired = null), 700);
          }}
        >
          ${icon(run ? PLAY : iconPath("switch"))}<span class="fp3d-rb-name">${entityName(hass, f.id)}</span>
        </button>`;
      })}
      ${favs.length && rooms.length ? html`<span class="fp3d-rb-sep" aria-hidden="true"></span>` : nothing}
      ${rooms.map(
        (r) => html`<div
          class="fp3d-rb-pill ${r.active ? "fp3d-rb-active" : ""} ${r.roomId === this.roomId ? "fp3d-rb-sel" : ""}"
          role="button"
          tabindex="0"
          title=${house ? `${r.name} · ${floorName(r.floorId)}` : r.name}
          aria-pressed=${r.roomId === this.roomId}
          @click=${() => this.pick(r.floorId, r.roomId)}
          @keydown=${(e: KeyboardEvent) => (e.key === "Enter" || e.key === " ") && (e.preventDefault(), this.pick(r.floorId, r.roomId))}
        >
          <span class="fp3d-rb-name">${r.name}</span>
          ${r.temp === null ? nothing : html`<span class="fp3d-rb-temp">${formatNumber(hass, r.temp, 1)}°</span>`}
          ${r.lightsOn.length
            ? html`<button
                class="fp3d-rb-state fp3d-rb-light"
                title=${this.t("room_bar_lights_off")}
                aria-label=${`${this.t("room_bar_lights", { n: r.lightsOn.length })} – ${this.t("room_bar_lights_off")}`}
                ?disabled=${this.readOnly}
                @click=${(e: Event) => {
                  e.stopPropagation();
                  void hass.callService("light", "turn_off", { entity_id: r.lightsOn });
                }}
              >${icon(iconPath("light"))}${r.lightsOn.length}</button>`
            : nothing}
          ${r.open ? html`<span class="fp3d-rb-state fp3d-rb-win" title=${this.t("room_bar_open")}>${icon(WINDOW)}${r.open > 1 ? r.open : ""}</span>` : nothing}
          ${r.playing ? html`<span class="fp3d-rb-state fp3d-rb-play" title=${this.t("room_bar_playing")}>${icon(PLAY)}</span>` : nothing}
        </div>`,
      )}
    </div>`;
  }

  static styles = [
    tokens,
    controls,
    css`
      :host {
        display: block;
        pointer-events: none;
      }
      .fp3d-rb,
      .fp3d-rb-open {
        pointer-events: auto;
      }
      /* one row of even pills, in the look of the room chips at the top */
      .fp3d-rb {
        display: flex;
        align-items: center;
        gap: 6px;
        padding: 2px;
        overflow-x: auto;
        scrollbar-width: none;
        overscroll-behavior-x: contain;
      }
      .fp3d-rb::-webkit-scrollbar {
        display: none;
      }
      .fp3d-rb-pill {
        flex: none;
        display: inline-flex;
        align-items: center;
        gap: 7px;
        height: 34px;
        box-sizing: border-box;
        padding: 0 14px;
        border-radius: 999px;
        border: 1px solid rgba(120, 200, 255, 0.28);
        background: rgba(9, 15, 30, 0.86);
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.35);
        color: var(--fp3d-text);
        font: inherit;
        font-size: 13px;
        font-weight: 600;
        white-space: nowrap;
        cursor: pointer;
      }
      .fp3d-rb-min {
        width: 34px;
        padding: 0;
        justify-content: center;
        color: var(--fp3d-muted);
      }
      .fp3d-rb-sep {
        flex: none;
        width: 1px;
        height: 22px;
        background: rgba(120, 200, 255, 0.28);
      }
      .fp3d-rb-name {
        max-width: 140px;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .fp3d-rb-temp {
        color: var(--fp3d-accent);
        font-variant-numeric: tabular-nums;
      }
      .fp3d-rb-ico {
        width: 15px;
        height: 15px;
        flex: none;
        fill: none;
        stroke: currentColor;
        stroke-width: 1.8;
        stroke-linecap: round;
        stroke-linejoin: round;
      }
      .fp3d-rb-state {
        display: inline-flex;
        align-items: center;
        gap: 2px;
        padding: 0;
        border: 0;
        background: none;
        font: inherit;
        font-size: 12px;
        font-variant-numeric: tabular-nums;
      }
      .fp3d-rb-light {
        color: var(--fp3d-warm);
        cursor: pointer;
      }
      .fp3d-rb-win {
        color: var(--fp3d-danger);
      }
      .fp3d-rb-play {
        color: var(--fp3d-accent);
      }
      .fp3d-rb-fav .fp3d-rb-ico {
        color: var(--fp3d-muted);
      }
      .fp3d-rb-fav:disabled {
        opacity: 0.5;
        cursor: default;
      }
      /* something on or open: a warm edge; the open room: the accent */
      .fp3d-rb-active,
      .fp3d-rb-on {
        border-color: rgba(255, 181, 71, 0.7);
        box-shadow: 0 0 12px rgba(255, 181, 71, 0.25), 0 2px 10px rgba(0, 0, 0, 0.35);
      }
      .fp3d-rb-sel {
        border-color: var(--fp3d-accent);
        background: color-mix(in srgb, var(--fp3d-accent) 18%, rgba(9, 15, 30, 0.9));
      }
    `,
  ];
}

if (!customElements.get("fp3d-room-bar")) customElements.define("fp3d-room-bar", Fp3dRoomBar);
