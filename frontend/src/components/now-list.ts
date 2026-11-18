// The phone's "What is going on?" (see ../now.ts), in three shapes the host switches between:
//   bar    one line under the house ("2 Fenster offen · 4 Lichter an") – the house stays free; a tap opens the page
//   page   the whole list on a page of its own: one line per thing worth knowing, the urgent first, with the obvious
//          thing to do beside it; a tap on a place closes the page and flies there
//   check  the house check before leaving or going to bed: a small card under the house that steps through every
//          open window, unlocked door and lit room
// The element only shows and asks: flying and switching are the host's (events now-go, now-act).
import { LitElement, css, html, nothing } from "lit";
import type { NowAction, NowItem, NowKind, NowStop, NowTarget } from "../now.ts";

const ICON: Record<NowKind, string> = { alert: "⚠️", open: "🪟", unlocked: "🔓", people: "👤", household: "🧺", lights: "💡", energy: "⚡", car: "🚗", calm: "✅" };
const STOP_ICON: Record<NowStop["kind"], string> = { open: "🪟", unlocked: "🔓", lights: "💡" };

/** The element's own texts, in the user's language. */
export interface NowLabels {
  title: string;
  close: string;
  lightsOff: string;
  lock: string;
  check: string;
  checkHint: string;
  next: string;
  done: string;
  checkDone: string;
  checkNothing: string;
  windowHint: string;
  /** "Alle {n} Lichter aus" */
  allLightsOff: string;
}

export type NowMode = "bar" | "page" | "check";

export class Fp3dNowList extends LitElement {
  static properties = {
    items: { attribute: false },
    stops: { attribute: false },
    labels: { attribute: false },
    favorites: { attribute: false },
    summary: { attribute: false },
    mode: { reflect: true },
    _open: { state: true },
    _step: { state: true },
    _did: { state: true },
  };

  declare items: NowItem[];
  /** The stops of a running house check (taken when it started: switching things off must not reshuffle them). */
  declare stops: NowStop[];
  declare labels: NowLabels;
  /** The house's favourites: big buttons on top of the page. */
  declare favorites: { entity: string; name: string }[];
  declare summary: { text: string; level: 0 | 1 | 2 };
  declare mode: NowMode;
  /** The line whose places are listed. */
  private declare _open: number | null;
  private declare _step: number;
  /** What the check switched off or locked. */
  private declare _did: number;

  constructor() {
    super();
    this.items = [];
    this.stops = [];
    this.favorites = [];
    this.summary = { text: "", level: 0 };
    this.mode = "bar";
    this._open = null;
    this._step = 0;
    this._did = 0;
  }

  private fire<T>(type: string, detail?: T): void {
    this.dispatchEvent(new CustomEvent(type, { detail, bubbles: true, composed: true }));
  }

  protected willUpdate(changed: Map<string, unknown>): void {
    if (changed.has("mode")) {
      this._open = null;
      if (this.mode === "check") {
        this._step = 0;
        this._did = 0;
      }
    }
  }

  protected updated(changed: Map<string, unknown>): void {
    // each stop of the check is shown in the house as it comes up
    if (this.mode === "check" && (changed.has("mode") || changed.has("_step"))) {
      const stop = this.stops[this._step];
      if (stop) this.fire<NowTarget>("now-go", stop.target);
    }
  }

  private tapRow(item: NowItem, index: number): void {
    if (!item.targets.length) return;
    if (item.targets.length === 1) return this.fire<NowTarget>("now-go", item.targets[0]);
    this._open = this._open === index ? null : index;
  }

  private actLabel(a: NowAction): string {
    return a.kind === "lock" ? this.labels.lock : this.labels.lightsOff;
  }

  private renderBar() {
    return html`<button class="bar level${this.summary.level}" @click=${() => this.fire("now-mode", "page")}>
      <span class="dot" aria-hidden="true"></span>
      <span class="sum">${this.summary.text}</span>
      <span class="go" aria-hidden="true">›</span>
    </button>`;
  }

  private renderPage() {
    return html`<header>
        <b>${this.labels.title}</b>
        <button class="x" aria-label=${this.labels.close} @click=${() => this.fire("now-mode", "bar")}>✕</button>
      </header>
      ${this.favorites.length
        ? html`<div class="favs">${this.favorites.map((f) => html`<button @click=${() => this.fire<string>("now-fav", f.entity)}>★ ${f.name}</button>`)}</div>`
        : nothing}
      <ul>
        ${this.items.map((it, i) => {
          const many = it.targets.length > 1;
          const open = this._open === i;
          return html`<li class="level${it.level}">
            <div class="line">
              <button class="row" ?disabled=${!it.targets.length} aria-expanded=${many ? open : nothing} @click=${() => this.tapRow(it, i)}>
                <span class="icon" aria-hidden="true">${ICON[it.kind]}</span>
                <span class="text"><b>${it.title}</b>${it.detail ? html`<small>${it.detail}</small>` : nothing}</span>
                ${it.targets.length ? html`<span class="go" aria-hidden="true">${many ? (open ? "▾" : "▸") : "›"}</span>` : nothing}
              </button>
              ${it.action ? html`<button class="act" @click=${() => this.fire<NowAction>("now-act", it.action)}>${this.actLabel(it.action)}</button>` : nothing}
            </div>
            ${many && open
              ? html`<div class="places">
                  ${it.targets.map((t) => html`<button class="place" @click=${() => this.fire<NowTarget>("now-go", t)}>${t.label ?? ""}<span aria-hidden="true">›</span></button>`)}
                </div>`
              : nothing}
          </li>`;
        })}
      </ul>
      <footer>
        <button class="check" @click=${() => this.fire("now-mode", "check")}>
          <b>🚪 ${this.labels.check}</b>
          <small>${this.labels.checkHint}</small>
        </button>
      </footer>`;
  }

  private renderCheck() {
    const stop = this.stops[this._step];
    const close = html`<button class="x" aria-label=${this.labels.close} @click=${() => this.fire("now-mode", "bar")}>✕</button>`;
    if (!stop) {
      // through, or nothing to check at all
      return html`<div class="card">
        <div class="card-top"><b>✅ ${this.stops.length ? this.labels.checkDone : this.labels.checkNothing}</b>${close}</div>
        <div class="card-btns"><button class="primary" @click=${() => this.fire("now-mode", "bar")}>${this.labels.done}</button></div>
      </div>`;
    }
    const next = () => (this._step += 1);
    // from the first lit room on: all the lights still to come can go off at once
    const lights = this.stops.slice(this._step).filter((st) => st.kind === "lights" && st.action);
    const allOff = stop.kind === "lights" && lights.length > 1 ? [...new Set(lights.flatMap((st) => st.action!.entities))] : null;
    return html`<div class="card">
      <div class="card-top">
        <span class="icon" aria-hidden="true">${STOP_ICON[stop.kind]}</span>
        <span class="text"><b>${stop.title}</b><small>${this._step + 1} / ${this.stops.length}${stop.kind === "open" ? html` · ${this.labels.windowHint}` : nothing}</small></span>
        ${close}
      </div>
      <div class="card-btns">
        ${stop.action
          ? html`<button
              class="primary"
              @click=${() => {
                this.fire<NowAction>("now-act", stop.action);
                this._did += 1;
                next();
              }}
            >
              ${this.actLabel(stop.action)}
            </button>`
          : nothing}
        <button @click=${next}>${this.labels.next}</button>
      </div>
      ${allOff
        ? html`<div class="card-btns">
            <button
              @click=${() => {
                this.fire<NowAction>("now-act", { kind: "lights_off", entities: allOff });
                this._step = this.stops.length;
              }}
            >
              ${this.labels.allLightsOff.replace("{n}", String(allOff.length))}
            </button>
          </div>`
        : nothing}
    </div>`;
  }

  render() {
    return this.mode === "page" ? this.renderPage() : this.mode === "check" ? this.renderCheck() : this.renderBar();
  }

  static styles = css`
    :host {
      display: flex;
      flex-direction: column;
      min-height: 0;
      color: #e8f0ff;
      font: 14px/1.3 var(--fp3d-font, system-ui, sans-serif);
    }
    button {
      font: inherit;
      color: inherit;
      cursor: pointer;
    }
    /* ---- the line under the house */
    .bar {
      display: flex;
      align-items: center;
      gap: 10px;
      width: 100%;
      min-height: 44px;
      padding: 8px 14px;
      background: #0e1626;
      border: 1px solid rgba(120, 160, 255, 0.25);
      border-radius: 999px;
      text-align: left;
    }
    .dot {
      flex: none;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background: #3ddc84;
    }
    .level1 .dot {
      background: #ffb547;
    }
    .level2 .dot {
      background: #ff5a5a;
    }
    .bar.level2 {
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
    .go {
      flex: none;
      opacity: 0.6;
    }
    /* ---- the page */
    :host([mode="page"]) {
      background: #0b1220;
    }
    header {
      display: flex;
      align-items: center;
      padding: 14px 10px 8px 18px;
    }
    header b {
      flex: 1;
      font-size: 19px;
    }
    .x {
      flex: none;
      width: 44px;
      height: 44px;
      border-radius: 50%;
      background: none;
      border: 0;
      font-size: 18px;
    }
    ul {
      list-style: none;
      margin: 0;
      padding: 0 10px;
      overflow-y: auto;
      overscroll-behavior: contain;
      flex: 1;
      min-height: 0;
    }
    li {
      border-radius: 14px;
      margin-bottom: 6px;
      background: #121c30;
    }
    li.level2 {
      background: rgba(255, 70, 70, 0.18);
    }
    .line {
      display: flex;
      align-items: center;
      gap: 6px;
      padding-right: 8px;
    }
    .row {
      display: flex;
      align-items: center;
      gap: 10px;
      flex: 1;
      min-width: 0;
      min-height: 56px;
      padding: 10px 6px 10px 12px;
      background: none;
      border: 0;
      text-align: left;
    }
    .row:disabled {
      cursor: default;
    }
    .icon {
      flex: none;
      width: 28px;
      text-align: center;
      font-size: 19px;
    }
    .text {
      flex: 1;
      min-width: 0;
      display: grid;
      gap: 2px;
    }
    .text b {
      font-weight: 600;
      font-size: 15px;
    }
    .text small {
      opacity: 0.75;
      font-size: 13px;
    }
    .level2 .text b {
      color: #ff9a9a;
    }
    .level1 .text b {
      color: #ffc46b;
    }
    .act {
      flex: none;
      min-height: 40px;
      padding: 8px 14px;
      border-radius: 999px;
      border: 1px solid #00e5ff;
      background: rgba(0, 229, 255, 0.12);
      color: #7df3ff;
      font-weight: 600;
    }
    .places {
      display: grid;
      gap: 2px;
      padding: 0 8px 8px 50px;
    }
    .place {
      display: flex;
      justify-content: space-between;
      gap: 8px;
      min-height: 40px;
      align-items: center;
      padding: 6px 10px;
      border-radius: 10px;
      background: rgba(120, 160, 255, 0.1);
      border: 0;
      text-align: left;
    }
    footer {
      padding: 8px 10px calc(10px + env(safe-area-inset-bottom, 0px));
    }
    .check {
      display: grid;
      gap: 2px;
      width: 100%;
      padding: 12px 16px;
      border-radius: 14px;
      border: 1px solid rgba(120, 160, 255, 0.3);
      background: #16233c;
      text-align: left;
    }
    .check b {
      font-size: 15px;
    }
    .check small {
      opacity: 0.75;
    }
    .favs {
      display: flex;
      gap: 8px;
      padding: 0 10px 10px;
      overflow-x: auto;
    }
    .favs button {
      flex: none;
      min-height: 46px;
      padding: 8px 16px;
      border-radius: 14px;
      border: 1px solid rgba(120, 160, 255, 0.3);
      background: #16233c;
      font-weight: 600;
    }
    /* ---- the house check */
    .card {
      background: #0e1626;
      border: 1px solid rgba(120, 160, 255, 0.3);
      border-radius: 16px;
      padding: 8px 8px 10px 12px;
    }
    .card-top {
      display: flex;
      align-items: center;
      gap: 10px;
    }
    .card-top > b {
      flex: 1;
      font-size: 15px;
      padding: 6px 0;
    }
    .card-btns {
      display: flex;
      gap: 8px;
      padding: 6px 4px 0 0;
    }
    .card-btns button {
      flex: 1;
      min-height: 44px;
      border-radius: 999px;
      border: 1px solid rgba(120, 160, 255, 0.35);
      background: #16233c;
      font-weight: 600;
    }
    .card-btns .primary {
      border-color: #00e5ff;
      background: #00e5ff;
      color: #06101c;
    }
  `;
}

if (!customElements.get("fp3d-now-list")) customElements.define("fp3d-now-list", Fp3dNowList);
