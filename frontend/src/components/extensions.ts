// The "Extensions" page of the panel: the shop connection, the Pro add-ons and the installed packs.
// It lives in the editor bundle (loaded with it) and is shown to admins only.

import { css, html, LitElement, nothing } from "lit";
import {
  activateLicense,
  getLicense,
  importPack,
  installPack,
  refreshLicense,
  removeLicense,
  removePack,
  markOffersSeen,
  markUpdatesSeen,
  offerLink,
  unseenUpdates,
  type CatalogPack,
  type LicenseStatus,
} from "../api.ts";
import { FEATURES, knownFeature, manualUrl, shopUrl, unlockedFeatures } from "../features.ts";
import { translate, type I18nKey } from "../i18n.ts";
import type { FurniturePack } from "../packs.ts";
import { controls, tokens } from "../styles.ts";
import type { HomeAssistant } from "../types.ts";

export class Extensions extends LitElement {
  static properties = {
    hass: { attribute: false },
    packs: { attribute: false },
    _packMsg: { state: true },
    _license: { state: true },
    _licenseKey: { state: true },
    _licenseBusy: { state: true },
    _licenseMsg: { state: true },
  };

  declare hass: HomeAssistant | undefined;
  declare packs: FurniturePack[] | undefined;
  private declare _packMsg: { ok: boolean; text: string } | null;
  /** The shop connection (loaded when the page opens); null until then. */
  private declare _license: LicenseStatus | null;
  private declare _licenseKey: string;
  /** What runs right now: "activate", "refresh", "remove" or a pack id being installed. */
  private declare _licenseBusy: string | null;
  private declare _licenseMsg: { ok: boolean; text: string } | null;
  private licenseLoading = false;
  /** Updates not seen before this visit (kept while the page is open). */
  private freshUpdates: import("../api.ts").PackUpdate[] | null = null;

  constructor() {
    super();
    this._packMsg = null;
    this._license = null;
    this._licenseKey = "";
    this._licenseBusy = null;
    this._licenseMsg = null;
  }

  private get isAdmin(): boolean {
    return this.hass?.user?.is_admin ?? false;
  }

  private t(key: I18nKey, vars?: Record<string, string | number>): string {
    return translate(this.hass, key, vars);
  }

  protected render() {
    const unlocked = unlockedFeatures(this.packs ?? []);
    return html`<div class="fp3d-ext">
      <header class="fp3d-ext-head">
        <h2>${this.t("ext_title")}</h2>
        <p class="fp3d-sub">${this.t("ext_intro")}</p>
        <div class="fp3d-ext-actions">
          <a class="fp3d-btn fp3d-primary" href=${shopUrl(this.hass?.language)} target="_blank" rel="noopener">${this.t("ext_shop")}</a>
          <a class="fp3d-btn" href="https://github.com/Mastershort/neonplan3d/issues/new/choose" target="_blank" rel="noopener">🐞 ${this.t("help_issue")}</a>
          <a class="fp3d-btn" href="https://github.com/Mastershort/neonplan3d/discussions/categories/ideas" target="_blank" rel="noopener">💡 ${this.t("help_idea")}</a>
          <a class="fp3d-btn" href=${manualUrl(this.hass?.language, "extensions")} target="_blank" rel="noopener">📖 ${this.t("manual")}</a>
        </div>
      </header>
      ${this.renderUpdates()} ${this.renderOffers()} ${this.renderShop()}
      <section class="fp3d-ext-card">
        <h3>${this.t("ext_pro")}</h3>
        <div class="fp3d-ext-pro">
          ${FEATURES.map(
            (f) => html`<div class="fp3d-ext-feature ${unlocked.has(f) ? "fp3d-ext-on" : ""}">
              <b>${unlocked.has(f) ? "✓" : "🔒"} ${this.t(`pro_name_${f}` as I18nKey)}</b>
              <span class="fp3d-sub">${this.t(`pro_feature_${f}` as I18nKey)}</span>
              <span class="fp3d-ext-links">
                ${unlocked.has(f)
                  ? html`<span class="fp3d-ext-state">${this.t("ext_active")}</span>`
                  : html`<a class="fp3d-ext-link" href=${shopUrl(this.hass?.language)} target="_blank" rel="noopener">${this.t("ext_get")}</a>`}
                <a class="fp3d-ext-link" href=${manualUrl(this.hass?.language, f)} target="_blank" rel="noopener">${this.t("manual_more")}</a>
              </span>
            </div>`,
          )}
        </div>
      </section>
      ${this.renderPacks()}
    </div>`;
  }

  private async loadLicense(): Promise<void> {
    if (!this.hass || this.licenseLoading) return;
    this.licenseLoading = true;
    try {
      this._license = await getLicense(this.hass);
    } catch {
      this._license = null;
    } finally {
      this.licenseLoading = false;
    }
  }

  /** Runs a shop call, shows its result or the shop's error. */
  private async shopCall(busy: string, call: () => Promise<LicenseStatus>, ok?: string): Promise<void> {
    this._licenseBusy = busy;
    this._licenseMsg = null;
    try {
      this._license = await call();
      if (ok) this._licenseMsg = { ok: true, text: ok };
    } catch (err) {
      const { code, message } = (err ?? {}) as { code?: string; message?: string };
      const key = `license_error_${code}` as I18nKey;
      const text = this.t(key);
      this._licenseMsg = { ok: false, text: text === key ? this.t("license_error_other", { detail: message ?? String(err) }) : text };
    } finally {
      this._licenseBusy = null;
    }
  }

  private async installFromShop(pack: CatalogPack): Promise<void> {
    if (!this.hass) return;
    const hass = this.hass;
    await this.shopCall(pack.id, async () => {
      const res = await installPack(hass, pack.id);
      this._packMsg = { ok: true, text: this.t("pack_imported", { name: res.name, publisher: res.publisher, n: res.items }) };
      this.dispatchEvent(new CustomEvent("packs-changed", { bubbles: true, composed: true }));
      return getLicense(hass);
    });
  }

  /** Packs that were updated since the last visit: what they brought (shown until the page is left). */
  private renderUpdates() {
    const lic = this._license;
    if (!lic?.active) return nothing;
    if (!this.freshUpdates) {
      this.freshUpdates = unseenUpdates(lic.updates ?? []);
      markUpdatesSeen(lic.updates ?? []);
    }
    if (!this.freshUpdates.length) return nothing;
    return html`<section class="fp3d-ext-card fp3d-updates">
      ${this.freshUpdates.map(
        (u) => html`<p>✨ ${u.added > 0 ? this.t("pack_updated_added", { name: u.name, release: u.release, n: u.added }) : this.t("pack_updated", { name: u.name, release: u.release })}</p>`,
      )}
    </section>`;
  }

  /** New in the shop: packs and Pro add-ons not owned yet, and the customer's loyalty code. */
  private renderOffers() {
    const lic = this._license;
    if (!lic?.active) return nothing;
    const offers = [...(lic.offers ?? [])].sort((a, b) => Number(b.new) - Number(a.new));
    const loyalty = lic.loyalty ?? null;
    if (!offers.length && !loyalty) return nothing;
    // opening the page counts as seen: the dot on the tab goes away
    markOffersSeen(offers);
    this.dispatchEvent(new CustomEvent("offers-seen", { bubbles: true, composed: true }));
    return html`<section class="fp3d-ext-card fp3d-offers">
      <h3>${this.t("offers_title")}</h3>
      ${loyalty
        ? html`<div class="fp3d-loyalty">
            <span>🎁 ${this.t("offers_loyalty", { percent: loyalty.percent })}</span>
            <code>${loyalty.code}</code>
            <button
              class="fp3d-btn"
              @click=${async () => {
                try {
                  await navigator.clipboard.writeText(loyalty.code);
                  this._licenseMsg = { ok: true, text: this.t("license_copied") };
                } catch {
                  /* no clipboard: the code stays readable */
                }
              }}
            >
              ${this.t("license_copy")}
            </button>
          </div>`
        : nothing}
      <div class="fp3d-offer-grid">
        ${offers.map(
          (o) => html`<a class="fp3d-offer" href=${offerLink(o.url, loyalty)} target="_blank" rel="noopener">
            ${o.image ? html`<img src=${o.image} alt="" loading="lazy" />` : html`<div class="fp3d-offer-ph">✦</div>`}
            <div class="fp3d-offer-body">
              <b>${o.name}</b>
              ${o.new ? html`<span class="fp3d-offer-new">${this.t("offers_new")}</span>` : nothing}
              <span class="fp3d-offer-kind">${this.t(`offers_kind_${o.kind}` as I18nKey)}${o.price ? ` · ${o.price}` : ""}</span>
              ${o.teaser ? html`<span class="fp3d-sub">${o.teaser}</span>` : nothing}
            </div>
          </a>`,
        )}
      </div>
    </section>`;
  }

  /** The shop connection: fingerprint, key and the bought packs with install and update buttons. */
  private renderShop() {
    const lic = this._license;
    if (!this.isAdmin || !this.hass) return nothing;
    if (!lic) {
      void this.loadLicense();
      return nothing;
    }
    const hass = this.hass;
    const busy = this._licenseBusy;
    const checked = lic.checked_at ? new Date(lic.checked_at * 1000).toLocaleString(hass.language) : null;
    return html`<div class="fp3d-shop fp3d-ext-card">
      <h3>${this.t("license_title")}</h3>
      <div class="fp3d-shop-row">
        <span>${this.t("license_instance")}</span>
        <code>${lic.instance}</code>
        <button
          class="fp3d-btn"
          @click=${async () => {
            try {
              await navigator.clipboard.writeText(lic.instance);
              this._licenseMsg = { ok: true, text: this.t("license_copied") };
            } catch {
              /* no clipboard: the code stays readable */
            }
          }}
        >
          ${this.t("license_copy")}
        </button>
      </div>
      ${lic.active
        ? html`<div class="fp3d-shop-row">
              <span>${this.t("license_active", { name: lic.licensee ?? "", key: lic.key_hint ?? "" })}</span>
              ${checked ? html`<span class="fp3d-sub">${this.t("license_checked", { time: checked })}</span>` : nothing}
              <button class="fp3d-btn" ?disabled=${!!busy} @click=${() => this.shopCall("refresh", () => refreshLicense(hass), this.t("license_refreshed"))}>
                ${busy === "refresh" ? "…" : this.t("license_refresh")}
              </button>
              <button class="fp3d-btn fp3d-danger" ?disabled=${!!busy} @click=${() => confirm(this.t("license_remove_confirm")) && this.shopCall("remove", () => removeLicense(hass))}>
                ${this.t("license_remove")}
              </button>
            </div>
            ${lic.error ? html`<p class="fp3d-sub fp3d-pack-error">${this.t(`license_error_${lic.error}` as I18nKey)}</p>` : nothing}
            ${lic.packs.length
              ? lic.packs.map((p) => {
                  const state = p.installed === null ? "install" : p.installed < p.release ? "update" : "installed";
                  return html`<div class="fp3d-pack">
                    <div>
                      <b>${p.name}</b>
                      <span class="fp3d-sub">${state === "installed" ? this.t("license_installed", { release: p.release }) : state === "update" ? this.t("license_update_available", { release: p.release }) : this.t("license_not_installed")}</span>
                    </div>
                    ${state === "installed"
                      ? nothing
                      : html`<button class="fp3d-btn fp3d-primary" ?disabled=${!!busy} @click=${() => this.installFromShop(p)}>
                          ${busy === p.id ? "…" : this.t(state === "update" ? "license_update" : "license_install")}
                        </button>`}
                  </div>`;
                })
              : html`<p class="fp3d-sub">${this.t("license_none")}</p>`}`
        : html`<div class="fp3d-shop-row">
            <input
              type="text"
              class="fp3d-shop-key"
              placeholder="NP-XXXX-XXXX-XXXX-XXXX"
              autocomplete="off"
              spellcheck="false"
              .value=${this._licenseKey}
              @input=${(e: Event) => (this._licenseKey = (e.target as HTMLInputElement).value)}
              @keydown=${(e: KeyboardEvent) => {
                if (e.key === "Enter" && this._licenseKey.trim()) void this.shopCall("activate", () => activateLicense(hass, this._licenseKey), this.t("license_activated"));
              }}
            />
            <button class="fp3d-btn fp3d-primary" ?disabled=${!!busy || !this._licenseKey.trim()} @click=${() => this.shopCall("activate", () => activateLicense(hass, this._licenseKey), this.t("license_activated"))}>
              ${busy === "activate" ? "…" : this.t("license_activate")}
            </button>
          </div>`}
      ${this._licenseMsg ? html`<p class="fp3d-sub ${this._licenseMsg.ok ? "fp3d-notice" : "fp3d-pack-error"}">${this._licenseMsg.text}</p>` : nothing}
      <p class="fp3d-sub">${this.t("license_hint")} <a href=${lic.shop_url} target="_blank" rel="noopener">${this.t("license_shop")}</a></p>
    </div>`;
  }

  private renderPacks() {
    const packs = this.packs ?? [];
    return html`<section class="fp3d-ext-card">
      <h3>${this.t("packs")}</h3>
      ${packs.map(
        (p) => html`<div class="fp3d-pack">
          <div>
            <b>${p.name}</b>
            <span class="fp3d-sub">${p.features?.length ? this.t("pack_features", { publisher: p.publisher, n: p.features.length }) : this.t("pack_by", { publisher: p.publisher, n: p.items.length })}</span>
            ${p.licensee ? html`<span class="fp3d-sub">${this.t("pack_licensed", { name: p.licensee })}${p.release && p.release > 1 ? ` · v${p.release}` : ""}</span>` : nothing}
            ${(p.features ?? []).some((f) => !knownFeature(f)) ? html`<span class="fp3d-sub fp3d-pack-error">${this.t("pack_needs_update")}</span>` : nothing}
          </div>
          <button class="fp3d-btn fp3d-danger" @click=${() => this.deletePack(p)}>${this.t("pack_remove")}</button>
        </div>`,
      )}

      <label class="fp3d-btn fp3d-primary fp3d-pack-import">
        ${this.t("pack_import")}
        <input type="file" accept=".fp3dpack,.json,application/json" multiple hidden @change=${(e: Event) => this.importPackFile(e)} />
      </label>
      ${this._packMsg ? html`<p class="fp3d-sub ${this._packMsg.ok ? "fp3d-notice" : "fp3d-pack-error"}">${this._packMsg.text}</p>` : nothing}
      <p class="fp3d-sub">${this.t("packs_hint")}</p>
    </section>`;
  }

  /** Imports one or several pack files at once (a buyer of a bundle picks them all in one go). */
  private async importPackFile(e: Event): Promise<void> {
    const input = e.target as HTMLInputElement;
    const files = [...(input.files ?? [])];
    input.value = "";
    if (!files.length || !this.hass) return;
    const done: string[] = [];
    const failed: string[] = [];
    for (const file of files) {
      try {
        const res = await importPack(this.hass, await file.text());
        done.push(this.t("pack_imported", { name: res.name, publisher: res.publisher, n: res.items }));
      } catch (err) {
        const { code, message } = (err ?? {}) as { code?: string; message?: string };
        const key = `pack_error_${code}` as I18nKey;
        const text = this.t(key, { detail: message ?? String(err) });
        failed.push(`${file.name}: ${text === key ? this.t("pack_error_other", { detail: message ?? String(err) }) : text}`);
      }
    }
    if (done.length) this.dispatchEvent(new CustomEvent("packs-changed", { bubbles: true, composed: true }));
    const summary = files.length > 1 ? [this.t("packs_imported_n", { n: done.length, total: files.length })] : [];
    this._packMsg = { ok: failed.length === 0, text: [...summary, ...done, ...failed].join(" · ") };
  }

  private async deletePack(pack: FurniturePack): Promise<void> {
    if (!this.hass || !confirm(this.t("pack_remove_confirm", { name: pack.name }))) return;
    await removePack(this.hass, pack.id);
    this._packMsg = null;
    this.dispatchEvent(new CustomEvent("packs-changed", { bubbles: true, composed: true }));
  }

  static styles = [
    tokens,
    controls,
    css`
      .fp3d-updates {
        border-color: color-mix(in srgb, var(--fp3d-accent) 60%, transparent);
        background: color-mix(in srgb, var(--fp3d-accent) 8%, transparent);
      }
      .fp3d-updates p {
        margin: 4px 0;
      }
      .fp3d-loyalty {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 8px;
        margin: 6px 0 12px;
        padding: 10px 12px;
        border: 1px solid color-mix(in srgb, #ffb547 55%, transparent);
        border-radius: 12px;
        background: color-mix(in srgb, #ffb547 10%, transparent);
      }
      .fp3d-loyalty code {
        font-size: 1.05em;
        font-weight: 700;
        letter-spacing: 0.04em;
      }
      .fp3d-offer-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
        gap: 10px;
      }
      .fp3d-offer {
        display: flex;
        flex-direction: column;
        overflow: hidden;
        border: 1px solid var(--fp3d-line);
        border-radius: 12px;
        color: inherit;
        text-decoration: none;
        background: color-mix(in srgb, var(--fp3d-accent) 4%, transparent);
      }
      .fp3d-offer:hover {
        border-color: var(--fp3d-accent);
      }
      .fp3d-offer img,
      .fp3d-offer-ph {
        width: 100%;
        aspect-ratio: 16 / 9;
        object-fit: cover;
      }
      .fp3d-offer-ph {
        display: grid;
        place-items: center;
        font-size: 28px;
        color: var(--fp3d-accent);
      }
      .fp3d-offer-body {
        display: flex;
        flex-direction: column;
        gap: 3px;
        padding: 10px 12px;
      }
      .fp3d-offer-new {
        align-self: flex-start;
        padding: 1px 8px;
        border-radius: 999px;
        background: #ffb547;
        color: #1a1200;
        font-size: 11px;
        font-weight: 700;
      }
      .fp3d-offer-kind {
        color: var(--fp3d-accent);
        font-size: 12px;
      }
      :host {
        display: block;
        overflow: auto;
      }
      .fp3d-ext {
        max-width: 920px;
        margin: 0 auto;
        padding: 20px 16px 40px;
        display: grid;
        gap: 16px;
      }
      .fp3d-ext-head {
        display: grid;
        gap: 8px;
        justify-items: start;
      }
      .fp3d-ext-head a {
        text-decoration: none;
      }
      .fp3d-ext-actions,
      .fp3d-ext-links {
        display: flex;
        flex-wrap: wrap;
        gap: 12px;
        align-items: center;
      }
      .fp3d-ext-head h2 {
        margin: 0;
        font-size: 22px;
      }
      .fp3d-ext-card {
        padding: 14px 16px;
        border: 1px solid var(--fp3d-line);
        border-radius: 14px;
        background: var(--fp3d-chrome);
      }
      .fp3d-ext-card h3 {
        margin: 0 0 8px;
        font-size: 13px;
        text-transform: uppercase;
        letter-spacing: 0.06em;
        color: var(--fp3d-soft);
      }
      .fp3d-ext-pro {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
        gap: 10px;
      }
      .fp3d-ext-feature {
        display: grid;
        gap: 6px;
        align-content: start;
        padding: 12px;
        border: 1px solid var(--fp3d-line);
        border-radius: 12px;
      }
      .fp3d-ext-on {
        border-color: var(--fp3d-accent);
      }
      .fp3d-ext-state {
        color: var(--fp3d-accent);
        font-weight: 600;
        font-size: 13px;
      }
      .fp3d-ext-link {
        color: var(--fp3d-accent);
        font-weight: 600;
        font-size: 13px;
      }
      .fp3d-sub {
        color: var(--fp3d-soft);
        font-size: 13px;
      }
      .fp3d-notice {
        color: var(--fp3d-accent);
      }
      .fp3d-shop {
        margin: 10px 0;
        padding: 10px 12px;
        border: 1px solid var(--fp3d-line);
        border-radius: 12px;
      }
      .fp3d-shop-row {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 8px;
        margin: 6px 0;
      }
      .fp3d-shop code {
        padding: 2px 8px;
        border-radius: 6px;
        background: var(--fp3d-chrome-solid);
        font-size: 13px;
        letter-spacing: 0.08em;
        user-select: all;
      }
      .fp3d-shop-key {
        flex: 1;
        min-width: 180px;
        font-family: ui-monospace, monospace;
        letter-spacing: 0.08em;
        text-transform: uppercase;
      }
      .fp3d-shop a {
        color: var(--fp3d-accent);
      }
      .fp3d-pack {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 10px;
        padding: 8px 0;
        border-bottom: 1px solid var(--fp3d-line);
      }
      .fp3d-pack div {
        display: grid;
        gap: 2px;
      }
      .fp3d-pack-import {
        display: block;
        margin-top: 10px;
        text-align: center;
        cursor: pointer;
      }
      .fp3d-pack-error {
        color: var(--fp3d-danger);
      }
    `,
  ];
}

if (!customElements.get("fp3d-extensions")) customElements.define("fp3d-extensions", Extensions);
