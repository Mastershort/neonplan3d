// The phone's "What is going on?" list (see ../now.ts): a sheet at the bottom of the 3D view, one line per thing
// worth knowing, the urgent first. A tap on a line asks the host to show its place in the house; a line with several
// places steps through them tap by tap. The handle folds the sheet down to its first line.
import { LitElement, css, html, nothing } from "lit";
import type { NowItem, NowKind, NowTarget } from "../now.ts";

const ICON: Record<NowKind, string> = { alert: "⚠️", open: "🪟", unlocked: "🔓", people: "👤", household: "🧺", lights: "💡", energy: "⚡", car: "🚗", calm: "✅" };

export class Fp3dNowList extends LitElement {
  static properties = {
    items: { attribute: false },
    heading: {},
    folded: { type: Boolean, reflect: true },
    _at: { state: true },
  };

  declare items: NowItem[];
  declare heading: string;
  declare folded: boolean;
  /** The line last tapped and which of its places is shown (so the next tap goes on to the next one). */
  private declare _at: { key: string; n: number } | null;

  constructor() {
    super();
    this.items = [];
    this.heading = "";
    this.folded = false;
    this._at = null;
  }

  private tap(item: NowItem, index: number): void {
    if (!item.targets.length) return;
    const key = `${item.kind}:${index}`;
    const n = this._at?.key === key ? (this._at.n + 1) % item.targets.length : 0;
    this._at = { key, n };
    this.dispatchEvent(new CustomEvent<NowTarget>("now-go", { detail: item.targets[n], bubbles: true, composed: true }));
  }

  private fold(): void {
    this.folded = !this.folded;
    this.dispatchEvent(new CustomEvent("now-fold", { detail: { folded: this.folded }, bubbles: true, composed: true }));
  }

  render() {
    const items = this.folded ? this.items.slice(0, 1) : this.items;
    return html`<button class="handle" aria-expanded=${!this.folded} @click=${() => this.fold()}>
        <span class="grip" aria-hidden="true"></span>
        <b>${this.heading}</b>
        ${this.folded && this.items.length > 1 ? html`<span class="more">+${this.items.length - 1}</span>` : nothing}
      </button>
      <ul>
        ${items.map((it, i) => {
          const many = it.targets.length > 1;
          const here = this._at?.key === `${it.kind}:${i}` ? this._at.n + 1 : 0;
          return html`<li>
            <button class="row level${it.level}" ?disabled=${!it.targets.length} @click=${() => this.tap(it, i)}>
              <span class="icon" aria-hidden="true">${ICON[it.kind]}</span>
              <span class="text"><b>${it.title}</b>${it.detail ? html`<small>${it.detail}</small>` : nothing}</span>
              ${it.targets.length ? html`<span class="go" aria-hidden="true">${many ? (here ? `${here}/${it.targets.length}` : `1/${it.targets.length}`) : "›"}</span>` : nothing}
            </button>
          </li>`;
        })}
      </ul>`;
  }

  static styles = css`
    :host {
      display: flex;
      flex-direction: column;
      min-height: 0;
      color: var(--fp3d-text, #e8f0ff);
      /* solid: the house and its labels must not shine through the text */
      background: #0e1626;
      border: 1px solid rgba(120, 160, 255, 0.22);
      border-radius: 16px;
      font: 14px/1.3 var(--fp3d-font, system-ui, sans-serif);
      overflow: hidden;
    }
    .handle {
      display: flex;
      align-items: center;
      gap: 8px;
      width: 100%;
      padding: 10px 14px 8px;
      background: none;
      border: 0;
      color: inherit;
      font: inherit;
      text-align: left;
      cursor: pointer;
      position: relative;
    }
    .grip {
      position: absolute;
      top: 4px;
      left: 50%;
      width: 36px;
      height: 4px;
      margin-left: -18px;
      border-radius: 2px;
      background: currentColor;
      opacity: 0.3;
    }
    .handle b {
      flex: 1;
      font-size: 15px;
    }
    .more {
      opacity: 0.7;
      font-size: 13px;
    }
    ul {
      list-style: none;
      margin: 0;
      padding: 0 6px 6px;
      overflow-y: auto;
      overscroll-behavior: contain;
      min-height: 0;
    }
    .row {
      display: flex;
      align-items: center;
      gap: 10px;
      width: 100%;
      min-height: 48px;
      padding: 8px;
      background: none;
      border: 0;
      border-radius: 10px;
      color: inherit;
      font: inherit;
      text-align: left;
      cursor: pointer;
    }
    .row:disabled {
      cursor: default;
    }
    .row:not(:disabled):active {
      background: rgba(120, 160, 255, 0.14);
    }
    .icon {
      flex: none;
      width: 28px;
      text-align: center;
      font-size: 18px;
    }
    .text {
      flex: 1;
      min-width: 0;
      display: grid;
      gap: 1px;
    }
    .text b {
      font-weight: 600;
    }
    .text small {
      opacity: 0.75;
      font-size: 12.5px;
    }
    .go {
      flex: none;
      opacity: 0.6;
      font-size: 13px;
      min-width: 22px;
      text-align: right;
    }
    .level2 {
      background: rgba(255, 70, 70, 0.16);
    }
    .level2 .text b {
      color: #ff8a8a;
    }
    .level1 .text b {
      color: #ffc46b;
    }
  `;
}

if (!customElements.get("fp3d-now-list")) customElements.define("fp3d-now-list", Fp3dNowList);
