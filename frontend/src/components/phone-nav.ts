// The phone view's bar at the bottom and what opens from it: the rooms of a floor as tiles, the blinds of the house,
// and "More". The list "What is going on?" and the house check are the now-list element's; the bar only opens them.
// The element shows and asks – jumping into a room and switching are the host's (events nav-*).
import { LitElement, css, html, nothing } from "lit";
import type { NavCover, NavDevice, NavFloor, NavSlot } from "../phone.ts";

export interface NavLabels {
  now: string;
  rooms: string;
  covers: string;
  more: string;
  wholeFloor: string;
  allUp: string;
  allDown: string;
  allOn: string;
  allOff: string;
  on: string;
  off: string;
  close: string;
}

export interface NavMoreItem {
  id: string;
  icon: string;
  label: string;
  hint?: string;
  /** A switch: shown pressed or not. */
  pressed?: boolean;
}

export type NavSheet = "rooms" | "covers" | "more" | "group" | null;

/** An own place's page: its devices by floor. */
export interface NavGroup {
  title: string;
  /** Lights can all be switched on as well; thermostats only off. */
  allOn: boolean;
  floors: { id: string; name: string; items: NavDevice[] }[];
}

const SLOT_ICON: Record<string, string> = { now: "●", rooms: "▦", covers: "▤", more: "⋯" };

export class Fp3dPhoneNav extends LitElement {
  static properties = {
    slots: { attribute: false },
    floors: { attribute: false },
    covers: { attribute: false },
    more: { attribute: false },
    group: { attribute: false },
    labels: { attribute: false },
    sheet: {},
    floorId: {},
    active: {},
    level: { type: Number },
    attention: {},
    roomId: {},
  };

  declare slots: NavSlot[];
  declare floors: NavFloor[];
  /** The blinds by floor. */
  declare covers: { id: string; name: string; items: NavCover[] }[];
  declare more: NavMoreItem[];
  declare group: NavGroup | null;
  declare labels: NavLabels;
  declare sheet: NavSheet;
  /** The floor whose rooms the menu shows. */
  declare floorId: string | null;
  /** The place that is lit: "now" while the list is open, else the open sheet's. */
  declare active: string | null;
  /** 0 green, 1 yellow, 2 red: the dot of "Now". */
  declare level: number;
  /** One line above the bar while something needs a look ("2 Fenster offen"); empty: none. */
  declare attention: string;
  declare roomId: string | null;

  constructor() {
    super();
    this.slots = [];
    this.floors = [];
    this.covers = [];
    this.more = [];
    this.group = null;
    this.sheet = null;
    this.floorId = null;
    this.active = null;
    this.level = 0;
    this.attention = "";
    this.roomId = null;
  }

  private fire<T>(type: string, detail?: T): void {
    this.dispatchEvent(new CustomEvent(type, { detail, bubbles: true, composed: true }));
  }

  private slotLabel(s: NavSlot): string {
    return s.label || (s.id === "now" ? this.labels.now : s.id === "rooms" ? this.labels.rooms : s.id === "covers" ? this.labels.covers : this.labels.more);
  }

  private renderRooms() {
    const floor = this.floors.find((f) => f.id === this.floorId) ?? this.floors[0];
    if (!floor) return nothing;
    return html`${this.floors.length > 1 && this.slots.some((s) => s.id === "rooms")
        ? html`<div class="tabs">${this.floors.map((f) => html`<button aria-pressed=${f.id === floor.id} @click=${() => this.fire("nav-floor", f.id)}>${f.name}</button>`)}</div>`
        : nothing}
      <div class="tiles">
        <button class="tile whole" @click=${() => this.fire("nav-room", { floorId: floor.id, roomId: null })}><b>${this.labels.wholeFloor}</b><small>${floor.name}</small></button>
        ${floor.rooms.map(
          (r) => html`<button class="tile ${r.active ? "on" : ""}" aria-pressed=${r.roomId === this.roomId} @click=${() => this.fire("nav-room", { floorId: r.floorId, roomId: r.roomId })}>
            <b>${r.name}</b>
            <small>${r.temp !== null ? `${r.temp.toLocaleString(undefined, { maximumFractionDigits: 1 })}°` : ""}</small>
            <span class="marks">
              ${r.lightsOn.length ? html`<span class="mark light">💡 ${r.lightsOn.length}</span>` : nothing} ${r.open ? html`<span class="mark open">🪟 ${r.open}</span>` : nothing}
              ${r.playing ? html`<span class="mark">♪</span>` : nothing}
            </span>
          </button>`,
        )}
      </div>`;
  }

  private renderCovers() {
    const act = (entities: string[], service: string) => this.fire("nav-cover", { entities, service });
    return html`${this.covers.map(
      (f) => html`<section>
        <header>
          <b>${f.name}</b>
          <button @click=${() => act(f.items.map((c) => c.entity), "open_cover")}>▲ ${this.labels.allUp}</button>
          <button @click=${() => act(f.items.map((c) => c.entity), "close_cover")}>▼ ${this.labels.allDown}</button>
        </header>
        ${f.items.map(
          (c) => html`<div class="cover">
            <span class="name">${c.name}</span>
            <span class="pos">${c.position !== null ? `${c.position} %` : ""}</span>
            <button aria-label="▲" @click=${() => act([c.entity], "open_cover")}>▲</button>
            <button aria-label="■" @click=${() => act([c.entity], "stop_cover")}>■</button>
            <button aria-label="▼" @click=${() => act([c.entity], "close_cover")}>▼</button>
          </div>`,
        )}
      </section>`,
    )}`;
  }

  private renderGroup() {
    const g = this.group;
    if (!g) return nothing;
    const act = (entities: string[], on: boolean) => this.fire("nav-group", { entities, on });
    return html`${g.floors.map(
      (f) => html`<section>
        <header>
          <b>${f.name}</b>
          ${g.allOn ? html`<button @click=${() => act(f.items.map((c) => c.entity), true)}>${this.labels.allOn}</button>` : nothing}
          <button @click=${() => act(f.items.filter((c) => c.on).map((c) => c.entity), false)}>${this.labels.allOff}</button>
        </header>
        ${f.items.map(
          (c) => html`<div class="cover">
            <span class="name">${c.name}</span>
            <span class="pos">${c.detail}</span>
            <button class="power" aria-pressed=${c.on} @click=${() => act([c.entity], !c.on)}>${c.on ? this.labels.on : this.labels.off}</button>
          </div>`,
        )}
      </section>`,
    )}`;
  }

  private renderMore() {
    return html`<div class="more">
      ${this.more.map(
        (m) => html`<button aria-pressed=${m.pressed === undefined ? nothing : m.pressed} @click=${() => this.fire("nav-more", m.id)}>
          <span class="icon" aria-hidden="true">${m.icon}</span>
          <span class="text"><b>${m.label}</b>${m.hint ? html`<small>${m.hint}</small>` : nothing}</span>
          ${m.pressed === undefined ? nothing : html`<span class="switch" aria-hidden="true"></span>`}
        </button>`,
      )}
    </div>`;
  }

  render() {
    const title = this.sheet === "rooms" ? "" : this.sheet === "covers" ? this.labels.covers : this.sheet === "more" ? this.labels.more : this.sheet === "group" ? (this.group?.title ?? "") : "";
    return html`${this.sheet
        ? html`<div class="veil" @click=${() => this.fire("nav-close")}></div>
            <div class="sheet" role="dialog">
              ${title ? html`<h3>${title}</h3>` : nothing} ${this.sheet === "rooms" ? this.renderRooms() : this.sheet === "covers" ? this.renderCovers() : this.sheet === "group" ? this.renderGroup() : this.renderMore()}
            </div>`
        : nothing}
      ${this.attention && !this.sheet && this.active !== "now"
        ? html`<button class="attention level${this.level}" @click=${() => this.fire("nav-slot", "now")}><span class="dot"></span><span class="sum">${this.attention}</span><span aria-hidden="true">›</span></button>`
        : nothing}
      <nav>
        ${this.slots.map(
          (s) => html`<button class="slot" aria-pressed=${this.active === s.id} @click=${() => this.fire("nav-slot", s.id)}>
            <span class="glyph ${s.id === "now" ? `dot level${this.level}` : ""}" aria-hidden="true">${s.id === "now" ? "" : s.icon ? s.icon : s.id.startsWith("floor:") ? "▦" : SLOT_ICON[s.id]}</span>
            <span class="label">${this.slotLabel(s)}</span>
            ${s.badge ? html`<span class="badge">${s.badge}</span>` : nothing}
          </button>`,
        )}
      </nav>`;
  }

  static styles = css`
    :host {
      display: block;
      color: #e8f0ff;
      font: 14px/1.3 var(--fp3d-font, system-ui, sans-serif);
    }
    button {
      font: inherit;
      color: inherit;
      cursor: pointer;
    }
    nav {
      position: relative;
      z-index: 3;
      display: flex;
      gap: 2px;
      padding: 6px 6px calc(6px + env(safe-area-inset-bottom, 0px));
      background: #0b1220;
      border-top: 1px solid rgba(120, 160, 255, 0.22);
    }
    .slot {
      position: relative;
      flex: 1 1 0;
      min-width: 0;
      min-height: 52px;
      display: grid;
      justify-items: center;
      align-content: center;
      gap: 3px;
      background: none;
      border: 0;
      border-radius: 14px;
      padding: 4px 2px;
    }
    .slot[aria-pressed="true"] {
      background: rgba(0, 229, 255, 0.16);
      color: #7df3ff;
    }
    .glyph {
      font-size: 18px;
      line-height: 20px;
      height: 20px;
    }
    .dot {
      width: 14px;
      height: 14px;
      border-radius: 50%;
      background: #3ddc84;
      display: inline-block;
    }
    .glyph.dot {
      margin-top: 3px;
      height: 14px;
    }
    .level1.dot,
    .level1 .dot {
      background: #ffb547;
    }
    .level2.dot,
    .level2 .dot {
      background: #ff5a5a;
    }
    .label {
      font-size: 11.5px;
      max-width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .badge {
      position: absolute;
      top: 2px;
      left: calc(50% + 8px);
      min-width: 18px;
      height: 18px;
      padding: 0 5px;
      box-sizing: border-box;
      border-radius: 9px;
      background: #ffb547;
      color: #1a1200;
      font-size: 11px;
      font-weight: 700;
      line-height: 18px;
      text-align: center;
    }
    .attention {
      position: relative;
      z-index: 3;
      display: flex;
      align-items: center;
      gap: 10px;
      width: calc(100% - 16px);
      margin: 0 8px 6px;
      min-height: 40px;
      padding: 6px 14px;
      border-radius: 999px;
      background: #0e1626;
      border: 1px solid rgba(255, 181, 71, 0.6);
      text-align: left;
    }
    .attention.level2 {
      border-color: #ff5a5a;
    }
    .sum {
      flex: 1;
      min-width: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-weight: 600;
    }
    .veil {
      position: fixed;
      inset: 0;
      z-index: 1;
      background: rgba(0, 0, 0, 0.45);
    }
    .sheet {
      position: relative;
      z-index: 2;
      max-height: 62vh;
      overflow-y: auto;
      overscroll-behavior: contain;
      margin: 0 8px 6px;
      padding: 12px;
      border-radius: 18px;
      background: #0e1626;
      border: 1px solid rgba(120, 160, 255, 0.25);
    }
    h3 {
      margin: 0 0 10px 4px;
      font-size: 17px;
    }
    .tabs {
      display: flex;
      gap: 6px;
      margin-bottom: 10px;
      overflow-x: auto;
    }
    .tabs button {
      flex: none;
      min-height: 38px;
      padding: 6px 14px;
      border-radius: 999px;
      border: 1px solid rgba(120, 160, 255, 0.3);
      background: none;
    }
    .tabs button[aria-pressed="true"] {
      background: #00e5ff;
      border-color: #00e5ff;
      color: #06101c;
      font-weight: 600;
    }
    .tiles {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(104px, 1fr));
      gap: 8px;
    }
    .tile {
      position: relative;
      min-height: 76px;
      display: grid;
      align-content: start;
      gap: 2px;
      padding: 10px;
      border-radius: 14px;
      border: 1px solid rgba(120, 160, 255, 0.2);
      background: #121c30;
      text-align: left;
    }
    .tile.on {
      border-color: rgba(255, 196, 107, 0.7);
      background: #1d2334;
    }
    .tile[aria-pressed="true"] {
      border-color: #00e5ff;
    }
    .tile.whole {
      background: #16233c;
    }
    .tile b {
      font-size: 14px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .tile small {
      opacity: 0.75;
      min-height: 16px;
    }
    .marks {
      display: flex;
      gap: 6px;
      flex-wrap: wrap;
      font-size: 12px;
    }
    .mark.light {
      color: #ffc46b;
    }
    section + section {
      margin-top: 14px;
    }
    section header {
      display: flex;
      align-items: center;
      gap: 6px;
      margin-bottom: 6px;
    }
    section header b {
      flex: 1;
      font-size: 15px;
    }
    section header button,
    .cover button {
      min-height: 40px;
      min-width: 44px;
      padding: 6px 12px;
      border-radius: 999px;
      border: 1px solid rgba(120, 160, 255, 0.3);
      background: #16233c;
    }
    .cover .power {
      min-width: 60px;
    }
    .cover .power[aria-pressed="true"] {
      background: #ffb02e;
      border-color: #ffb02e;
      color: #1a1205;
      font-weight: 600;
    }
    .cover {
      display: flex;
      align-items: center;
      gap: 6px;
      padding: 4px 0;
    }
    .cover .name {
      flex: 1;
      min-width: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .cover .pos {
      opacity: 0.7;
      font-size: 12.5px;
      min-width: 44px;
      text-align: right;
    }
    .more {
      display: grid;
      gap: 6px;
    }
    .more button {
      display: flex;
      align-items: center;
      gap: 12px;
      min-height: 54px;
      padding: 8px 12px;
      border-radius: 14px;
      border: 1px solid rgba(120, 160, 255, 0.2);
      background: #121c30;
      text-align: left;
    }
    .more .icon {
      flex: none;
      width: 28px;
      text-align: center;
      font-size: 19px;
    }
    .more .text {
      flex: 1;
      display: grid;
      gap: 2px;
    }
    .more small {
      opacity: 0.75;
      font-size: 12.5px;
    }
    .switch {
      flex: none;
      width: 38px;
      height: 22px;
      border-radius: 11px;
      background: #33425c;
      position: relative;
    }
    .switch::after {
      content: "";
      position: absolute;
      top: 3px;
      left: 3px;
      width: 16px;
      height: 16px;
      border-radius: 50%;
      background: #e8f0ff;
      transition: left 0.15s;
    }
    button[aria-pressed="true"] .switch {
      background: #00e5ff;
    }
    button[aria-pressed="true"] .switch::after {
      left: 19px;
    }
  `;
}

if (!customElements.get("fp3d-phone-nav")) customElements.define("fp3d-phone-nav", Fp3dPhoneNav);
