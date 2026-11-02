// The room bar along the bottom of the 3D view (panel and card): the favourites, then a tile per room with its
// temperature, the lights that are on, an open window or door and a player that plays. A tap on a room flies into it
// (the room panel opens); a tap on its lights switches them off. Plain tiles, no 3D work: fine on old wall tablets.
import { css, html, LitElement, nothing } from "lit";
import { entityName, isUnavailable } from "../devices.ts";
import { formatNumber, translate, type I18nKey } from "../i18n.ts";
import type { Building } from "../model.ts";
import { favoriteTiles, roomTiles } from "../room-bar.ts";
import { controls, tokens } from "../styles.ts";
import type { HomeAssistant } from "../types.ts";

const MIN_KEY = "neonplan3d.roombar_min";

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
      <button class="fp3d-rb-min" aria-expanded="true" title=${this.t("room_bar_hide")} aria-label=${this.t("room_bar_hide")} @click=${() => this.setMin(true)}>▾</button>
      ${favs.map((f) => {
        const st = hass.states[f.id];
        return html`<button
          class="fp3d-rb-tile fp3d-rb-fav ${f.on || this._fired === f.id ? "fp3d-rb-on" : ""}"
          ?disabled=${this.readOnly || isUnavailable(st)}
          @click=${() => {
            void hass.callService(f.domain, f.service, { entity_id: f.id });
            this._fired = f.id;
            setTimeout(() => (this._fired = null), 700);
          }}
        >
          <b>${entityName(hass, f.id)}</b>
          <small>${f.domain === "homeassistant" ? (f.on ? this.t("room_bar_on") : this.t("room_bar_off")) : `▶ ${this.t("room_bar_run")}`}</small>
        </button>`;
      })}
      ${favs.length && rooms.length ? html`<span class="fp3d-rb-sep" aria-hidden="true"></span>` : nothing}
      ${rooms.map(
        (r) => html`<div
          class="fp3d-rb-tile fp3d-rb-room ${r.active ? "fp3d-rb-active" : ""} ${r.roomId === this.roomId ? "fp3d-rb-sel" : ""}"
          role="button"
          tabindex="0"
          aria-pressed=${r.roomId === this.roomId}
          @click=${() => this.pick(r.floorId, r.roomId)}
          @keydown=${(e: KeyboardEvent) => (e.key === "Enter" || e.key === " ") && (e.preventDefault(), this.pick(r.floorId, r.roomId))}
        >
          <b>${r.name}</b>
          ${house ? html`<span class="fp3d-rb-floor">${floorName(r.floorId)}</span>` : nothing}
          <span class="fp3d-rb-temp">${r.temp === null ? "–" : `${formatNumber(hass, r.temp, 1)}°`}</span>
          <span class="fp3d-rb-badges">
            ${r.lightsOn.length
              ? html`<button
                  class="fp3d-rb-badge fp3d-rb-light"
                  title=${this.t("room_bar_lights_off")}
                  ?disabled=${this.readOnly}
                  @click=${(e: Event) => {
                    e.stopPropagation();
                    void hass.callService("light", "turn_off", { entity_id: r.lightsOn });
                  }}
                >💡 ${this.t("room_bar_lights", { n: r.lightsOn.length })}</button>`
              : r.lights
                ? html`<span class="fp3d-rb-badge fp3d-rb-dim">💡 ${this.t("room_bar_off")}</span>`
                : nothing}
            ${r.open ? html`<span class="fp3d-rb-badge fp3d-rb-open-win">🪟 ${this.t("room_bar_open")}</span>` : nothing}
            ${r.playing ? html`<span class="fp3d-rb-badge fp3d-rb-play">▶ ${this.t("room_bar_playing")}</span>` : nothing}
          </span>
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
      .fp3d-rb {
        display: flex;
        align-items: stretch;
        gap: 8px;
        padding: 6px;
        overflow-x: auto;
        scrollbar-width: none;
        overscroll-behavior-x: contain;
        border-radius: 16px;
        background: var(--fp3d-chrome);
        border: 1px solid var(--fp3d-line);
        box-shadow: var(--fp3d-shadow);
      }
      .fp3d-rb::-webkit-scrollbar {
        display: none;
      }
      .fp3d-rb-min {
        flex: none;
        width: 26px;
        border: 0;
        border-radius: 10px;
        background: transparent;
        color: var(--fp3d-muted);
        font: inherit;
        cursor: pointer;
      }
      .fp3d-rb-sep {
        flex: none;
        width: 1px;
        margin: 4px 0;
        background: var(--fp3d-line);
      }
      .fp3d-rb-tile {
        flex: none;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 2px;
        min-width: 112px;
        max-width: 170px;
        padding: 8px 10px;
        border-radius: 12px;
        border: 1px solid var(--fp3d-line);
        background: var(--fp3d-chrome-solid);
        color: var(--fp3d-text);
        font: inherit;
        text-align: left;
        cursor: pointer;
      }
      .fp3d-rb-tile b {
        max-width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-size: 13px;
      }
      .fp3d-rb-tile small,
      .fp3d-rb-floor {
        color: var(--fp3d-muted);
        font-size: 11px;
      }
      .fp3d-rb-fav {
        min-width: 96px;
        justify-content: space-between;
      }
      .fp3d-rb-fav:disabled {
        opacity: 0.5;
        cursor: default;
      }
      .fp3d-rb-on {
        border-color: var(--fp3d-warm);
        box-shadow: inset 0 0 0 1px var(--fp3d-warm);
      }
      .fp3d-rb-active {
        border-color: var(--fp3d-warm);
      }
      .fp3d-rb-sel {
        border-color: var(--fp3d-accent);
        box-shadow: inset 0 0 0 1px var(--fp3d-accent);
      }
      .fp3d-rb-temp {
        font-size: 20px;
        font-weight: 700;
        line-height: 1.1;
        font-family: var(--fp3d-title-font);
      }
      .fp3d-rb-badges {
        display: flex;
        flex-wrap: wrap;
        gap: 4px;
        min-height: 18px;
      }
      .fp3d-rb-badge {
        display: inline-flex;
        align-items: center;
        gap: 3px;
        padding: 1px 7px;
        border-radius: 999px;
        border: 0;
        font: inherit;
        font-size: 11px;
        background: rgba(255, 255, 255, 0.07);
        color: var(--fp3d-text);
      }
      .fp3d-rb-light {
        background: rgba(255, 181, 71, 0.2);
        cursor: pointer;
      }
      .fp3d-rb-dim {
        color: var(--fp3d-muted);
      }
      .fp3d-rb-open-win {
        background: rgba(255, 107, 139, 0.2);
      }
      .fp3d-rb-play {
        background: rgba(55, 224, 255, 0.16);
      }
      /* phones: smaller tiles, so two or three fit */
      @media (max-width: 600px) {
        .fp3d-rb-tile {
          min-width: 92px;
          padding: 6px 8px;
        }
        .fp3d-rb-temp {
          font-size: 17px;
        }
      }
    `,
  ];
}

if (!customElements.get("fp3d-room-bar")) customElements.define("fp3d-room-bar", Fp3dRoomBar);
