// A searchable entity picker: a text field that filters the options by name, area or id as you type,
// with a short result list below it. Replaces plain <select> elements, which are unusable with
// thousands of entities. Fixed choices (automatic, none) come first.

import { css, html, LitElement, nothing } from "lit";
import { tokens } from "../styles.ts";

export interface PickerOption {
  id: string;
  label: string;
}

const MAX_SHOWN = 40;

export class EntityPicker extends LitElement {
  static properties = {
    options: { attribute: false },
    fixed: { attribute: false },
    value: { attribute: false },
    disabled: { type: Boolean },
    placeholder: { attribute: false },
    _query: { state: true },
    _open: { state: true },
    _cursor: { state: true },
  };

  /** Entities to choose from. */
  declare options: PickerOption[];
  /** Choices shown before the entities (e.g. automatic, none); ids must not look like entity ids. */
  declare fixed: PickerOption[];
  /** The chosen id (an option's or a fixed choice's). */
  declare value: string | null;
  declare disabled: boolean;
  declare placeholder: string;
  private declare _query: string;
  private declare _open: boolean;
  private declare _cursor: number;
  private blurTimer: ReturnType<typeof setTimeout> | undefined;

  constructor() {
    super();
    this.options = [];
    this.fixed = [];
    this.value = null;
    this.disabled = false;
    this.placeholder = "";
    this._query = "";
    this._open = false;
    this._cursor = 0;
  }

  private get current(): PickerOption | undefined {
    return [...this.fixed, ...this.options].find((o) => o.id === this.value);
  }

  private get hits(): PickerOption[] {
    const q = this._query.trim().toLowerCase();
    const words = q.split(/\s+/).filter(Boolean);
    const match = (o: PickerOption) => {
      const text = `${o.label} ${o.id}`.toLowerCase();
      return words.every((w) => text.includes(w));
    };
    const fixed = this.fixed.filter((o) => !q || match(o));
    const rest = q ? this.options.filter(match) : this.options;
    return [...fixed, ...rest.slice(0, MAX_SHOWN)];
  }

  /** How many matching entities the list leaves out (it shows the first MAX_SHOWN). */
  private get leftOut(): number {
    const q = this._query.trim().toLowerCase();
    const words = q.split(/\s+/).filter(Boolean);
    const all = q ? this.options.filter((o) => words.every((w) => `${o.label} ${o.id}`.toLowerCase().includes(w))).length : this.options.length;
    return Math.max(0, all - MAX_SHOWN);
  }

  private choose(id: string): void {
    this.value = id;
    this._query = "";
    this._open = false;
    this.dispatchEvent(new CustomEvent("change", { detail: { value: id }, bubbles: true, composed: true }));
  }

  private onKey(e: KeyboardEvent): void {
    const hits = this.hits;
    if (e.key === "ArrowDown") {
      this._open = true;
      this._cursor = Math.min(hits.length - 1, this._cursor + 1);
      e.preventDefault();
    } else if (e.key === "ArrowUp") {
      this._cursor = Math.max(0, this._cursor - 1);
      e.preventDefault();
    } else if (e.key === "Enter") {
      if (this._open && hits[this._cursor]) this.choose(hits[this._cursor].id);
      e.preventDefault();
    } else if (e.key === "Escape") {
      this._open = false;
      this._query = "";
    }
  }

  protected render() {
    const current = this.current;
    const hits = this._open ? this.hits : [];
    return html`<div class="wrap">
      <input
        type="text"
        role="combobox"
        aria-expanded=${this._open}
        ?disabled=${this.disabled}
        placeholder=${current ? current.label : this.placeholder}
        .value=${this._open ? this._query : (current?.label ?? "")}
        @focus=${() => {
          clearTimeout(this.blurTimer);
          this._open = true;
          this._query = "";
          this._cursor = 0;
        }}
        @blur=${() => {
          this.blurTimer = setTimeout(() => (this._open = false), 150);
        }}
        @input=${(e: Event) => {
          this._query = (e.target as HTMLInputElement).value;
          this._cursor = 0;
          this._open = true;
        }}
        @keydown=${this.onKey}
      />
      ${this._open
        ? html`<ul class="list" role="listbox">
            ${hits.length ? nothing : html`<li class="empty">–</li>`}
            ${hits.map(
              (o, i) => html`<li
                role="option"
                aria-selected=${o.id === this.value}
                class="${i === this._cursor ? "cursor" : ""} ${o.id === this.value ? "chosen" : ""}"
                @mousedown=${(e: Event) => e.preventDefault()}
                @click=${() => this.choose(o.id)}
              >
                <span>${o.label}</span>${o.id.includes(".") ? html`<small>${o.id}</small>` : nothing}
              </li>`,
            )}
            ${this.leftOut > 0 ? html`<li class="empty">… +${this.leftOut} · ${this.placeholder}</li>` : nothing}
          </ul>`
        : nothing}
    </div>`;
  }

  static styles = [
    tokens,
    css`
      :host {
        display: block;
        position: relative;
      }
      input {
        width: 100%;
        box-sizing: border-box;
        font: inherit;
        color: var(--fp3d-text);
        background: var(--fp3d-chrome-solid);
        border: 1px solid var(--fp3d-line);
        border-radius: 10px;
        padding: 8px 10px;
      }
      input::placeholder {
        color: var(--fp3d-text);
        opacity: 0.9;
      }
      input:focus::placeholder {
        color: var(--fp3d-muted);
      }
      input:focus {
        outline: 2px solid var(--fp3d-accent);
        outline-offset: -1px;
      }
      .list {
        position: absolute;
        left: 0;
        right: 0;
        top: calc(100% + 4px);
        z-index: 20;
        margin: 0;
        padding: 4px;
        list-style: none;
        max-height: 280px;
        overflow-y: auto;
        background: var(--fp3d-chrome-solid);
        border: 1px solid var(--fp3d-line);
        border-radius: 10px;
        box-shadow: var(--fp3d-shadow);
      }
      li {
        display: flex;
        flex-direction: column;
        gap: 1px;
        padding: 6px 8px;
        border-radius: 6px;
        cursor: pointer;
        font-size: 13.5px;
      }
      li small {
        color: var(--fp3d-muted);
        font-size: 11px;
      }
      li.cursor,
      li:hover {
        background: color-mix(in srgb, var(--fp3d-accent) 18%, transparent);
      }
      li.chosen {
        color: var(--fp3d-accent);
      }
      li.empty {
        color: var(--fp3d-muted);
        cursor: default;
      }
    `,
  ];
}

if (!customElements.get("fp3d-entity-picker")) customElements.define("fp3d-entity-picker", EntityPicker);
