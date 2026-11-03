// The fun packs (free extras: Pets, Halloween, Winter & Christmas) and their settings – shown in the editor's
// ⚙ Settings → Fun packs. A pack not installed yet tells how to get it (it waits in the customer account, or a free
// account brings it); installing stays on the extensions page with the shop.
import { css, html, LitElement, nothing } from "lit";
import { getLicense } from "../api.ts";
import { entityName } from "../devices.ts";
import { FUN, registerUrl, released, unlockedFeatures } from "../features.ts";
import { translate, type I18nKey } from "../i18n.ts";
import { DOG_BREEDS, PET_FURS_OF, type Building, type Pet } from "../model.ts";
import type { FurniturePack } from "../packs.ts";
import { controls, tokens } from "../styles.ts";
import type { HomeAssistant } from "../types.ts";
import "./entity-picker.ts";

export class Fp3dFunPacks extends LitElement {
  static properties = {
    hass: { attribute: false },
    building: { attribute: false },
    packs: { attribute: false },
    admin: { type: Boolean },
    edit: { attribute: false },
    _connected: { state: true },
  };

  declare hass: HomeAssistant | undefined;
  declare building: Building | null;
  declare packs: FurniturePack[] | undefined;
  declare admin: boolean;
  /** Changes the plan (the editor's own change, so it can be undone and is saved). */
  declare edit: ((fn: (b: Building) => void) => void) | null;
  private declare _connected: boolean | null;
  private asked = false;

  constructor() {
    super();
    this.building = null;
    this.admin = false;
    this.edit = null;
    this._connected = null;
  }

  private get isAdmin(): boolean {
    return this.admin;
  }

  private t(key: I18nKey, vars?: Record<string, string | number>): string {
    return translate(this.hass, key, vars);
  }

  private editPlan(fn: (b: Building) => void): void {
    this.edit?.(fn);
  }

  protected render() {
    // whether the installation is connected to a customer account (a pack not installed yet waits there)
    if (!this.asked && this.hass) {
      this.asked = true;
      getLicense(this.hass).then(
        (l) => (this._connected = !!l.active),
        () => (this._connected = false),
      );
    }
    return this.renderFun(unlockedFeatures(this.packs ?? []));
  }

  private renderFun(unlocked: Set<string>) {
    // unlocked by an installed pack (this page's own list), or shown to test with the lab switch
    const shown = FUN.filter((f) => unlocked.has(f) || released(f));
    if (!shown.length) return nothing;
    const pets = this.building?.settings.pets ?? null;
    const list = pets?.list ?? [];
    const on = pets?.on !== false;
    // the floors to live on, lowest first (a pet without a floor lives on the lowest)
    const floors = (this.building?.floors ?? []).filter((f) => f.rooms.length).sort((a, b) => a.elevation - b.elevation);
    const set = (fn: (p: { on: boolean; list: Pet[] }) => void) =>
      this.editPlan((b) => {
        const p = { on: b.settings.pets?.on !== false, list: [...(b.settings.pets?.list ?? [])] };
        fn(p);
        b.settings.pets = p;
      });
    const change = (id: string, patch: Partial<Pet>) => set((p) => (p.list = p.list.map((x) => (x.id === id ? { ...x, ...patch } : x))));
    return html`<section class="fp3d-fun">
      <p class="fp3d-sub">${this.t("fun_intro_settings")}</p>
      ${shown.map((f) =>
        f === "fun_halloween"
          ? this.renderHalloween(unlocked.has(f))
          : f === "fun_winter"
          ? this.renderWinter(unlocked.has(f))
          : unlocked.has(f)
          ? html`<div class="fp3d-ext-feature fp3d-ext-on">
              <b>✓ ${this.t("fun_name_pets")}</b>
              <span class="fp3d-sub">${this.t("fun_feature_pets")}</span>
              ${this.isAdmin && this.building
                ? html`<label class="fp3d-check"><input type="checkbox" .checked=${on} @change=${(e: Event) => set((p) => (p.on = (e.target as HTMLInputElement).checked))} /> ${this.t("pets_show")}</label>
                    ${list.map(
                      (pet) => html`<div class="fp3d-pet-row">
                        <select
                          aria-label=${this.t("pet_kind")}
                          @change=${(e: Event) => {
                            // another kind: a fur it comes in, a dog a breed
                            const kind = (e.target as HTMLSelectElement).value as Pet["kind"];
                            const furs = PET_FURS_OF[kind];
                            change(pet.id, { kind, fur: furs.includes(pet.fur) ? pet.fur : furs[0], breed: kind === "dog" ? (pet.breed ?? "labrador") : null });
                          }}
                        >
                          ${(["cat", "dog", "rabbit"] as const).map((k) => html`<option value=${k} ?selected=${pet.kind === k}>${this.t(`pet_kind_${k}`)}</option>`)}
                        </select>
                        ${pet.kind === "dog"
                          ? html`<select aria-label=${this.t("pet_breed")} @change=${(e: Event) => change(pet.id, { breed: (e.target as HTMLSelectElement).value })}>
                              ${DOG_BREEDS.map((r) => html`<option value=${r} ?selected=${(pet.breed ?? "labrador") === r}>${this.t(`pet_breed_${r}`)}</option>`)}
                            </select>`
                          : nothing}
                        <input type="text" maxlength="30" .value=${pet.name} placeholder=${this.t("pet_name")} aria-label=${this.t("pet_name")} @change=${(e: Event) => change(pet.id, { name: (e.target as HTMLInputElement).value.trim() })} />
                        <select aria-label=${this.t("pet_fur")} @change=${(e: Event) => change(pet.id, { fur: (e.target as HTMLSelectElement).value })}>
                          ${PET_FURS_OF[pet.kind].map((c) => html`<option value=${c} ?selected=${pet.fur === c}>${this.t(`pet_fur_${c}` as I18nKey)}</option>`)}
                        </select>
                        ${floors.length > 1
                          ? html`<select title=${this.t("pet_floor")} aria-label=${this.t("pet_floor")} @change=${(e: Event) => change(pet.id, { floor_id: (e.target as HTMLSelectElement).value || null })}>
                              ${floors.map((fl, i) => html`<option value=${i === 0 ? "" : fl.id} ?selected=${(pet.floor_id ?? floors[0].id) === fl.id}>🏠 ${fl.name}</option>`)}
                            </select>`
                          : nothing}
                        <button class="fp3d-btn" title=${this.t("delete")} @click=${() => set((p) => (p.list = p.list.filter((x) => x.id !== pet.id)))}>✕</button>
                      </div>`,
                    )}
                    ${list.length < 8
                      ? html`<button class="fp3d-btn" @click=${() =>
                          set((p) => p.list.push({ id: `pet_${Date.now().toString(36)}`, kind: "cat", name: "", fur: PET_FURS_OF.cat[p.list.length % PET_FURS_OF.cat.length] }))}>+ ${this.t("pet_add")}</button>`
                      : nothing}`
                : nothing}
            </div>`
          : this.renderFunLocked("🐾", this.t("fun_name_pets"), this.t("fun_feature_pets")),
      )}
    </section>`;
  }

  /**
   * A fun pack not installed yet: connected, it is already in the customer account and waits among the packs above;
   * not connected, a free customer account brings it (key by e-mail after the address is confirmed).
   */
  private renderFunLocked(icon: string, name: string, feature: string) {
    const connected = !!this._connected;
    return html`<div class="fp3d-ext-feature">
      <b>${icon} ${name}</b>
      <span class="fp3d-sub">${feature}</span>
      ${connected
        ? html`<span class="fp3d-sub"><b>${this.t("fun_in_account")}</b></span>`
        : html`<span class="fp3d-sub">${this.t("fun_register_steps")}</span>
            <span class="fp3d-ext-links"><a class="fp3d-ext-link" href=${registerUrl(this.hass?.language)} target="_blank" rel="noopener">${this.t("fun_register")}</a></span>`}
    </div>`;
  }

  /** Fun pack "Halloween": decorations in the furniture library, and the ghost to switch on and off. */
  /** Winter & Christmas: the decorations in the library (the roof lights, snow and the firework come with 2.3). */
  private renderWinter(unlocked: boolean) {
    if (!unlocked) return this.renderFunLocked("❄️", this.t("fun_name_winter"), this.t("fun_feature_winter"));
    const w = this.building?.settings.winter ?? {};
    const set = (patch: NonNullable<Building["settings"]["winter"]>) => this.editPlan((b) => (b.settings.winter = { ...(b.settings.winter ?? {}), ...patch }));
    const check = (on: boolean, label: I18nKey, patch: (v: boolean) => NonNullable<Building["settings"]["winter"]>) =>
      html`<label class="fp3d-check"><input type="checkbox" .checked=${on} @change=${(e: Event) => set(patch((e.target as HTMLInputElement).checked))} /> ${this.t(label)}</label>`;
    // the switch the fairy lights shine with: any light, switch or helper
    const lights = this.hass
      ? Object.keys(this.hass.states)
          .filter((id) => /^(light|switch|input_boolean)\./.test(id))
          .sort()
          .map((id) => ({ id, label: entityName(this.hass!, id) }))
      : [];
    return html`<div class="fp3d-ext-feature fp3d-ext-on">
      <b>✓ ❄️ ${this.t("fun_name_winter")}</b>
      <span class="fp3d-sub">${this.t("fun_feature_winter")}</span>
      ${this.isAdmin && this.building
        ? html`${check(w.roof_lights !== false, "winter_roof_lights", (v) => ({ roof_lights: v }))}
            ${w.roof_lights !== false
              ? html`<label class="fp3d-field"
                    >${this.t("winter_roof_entity")}
                    <fp3d-entity-picker
                      .options=${lights}
                      .fixed=${[{ id: "none", label: this.t("winter_roof_auto") }]}
                      .value=${w.roof_entity ?? "none"}
                      .placeholder=${this.t("entity_search")}
                      @change=${(e: CustomEvent<{ value: string }>) => {
                        e.stopPropagation();
                        set({ roof_entity: e.detail.value === "none" ? null : e.detail.value });
                      }}
                    ></fp3d-entity-picker
                  ></label>
                  ${check(!!w.roof_color, "winter_roof_color", (v) => ({ roof_color: v }))}
                  ${check(w.roof_outline !== false, "winter_roof_outline", (v) => ({ roof_outline: v }))}`
              : nothing}
            ${check(w.snow !== false, "winter_snow", (v) => ({ snow: v }))} ${check(w.firework !== false, "winter_firework", (v) => ({ firework: v }))}`
        : nothing}
      <span class="fp3d-sub">${this.t("winter_deco_hint")}</span>
    </div>`;
  }

  private renderHalloween(unlocked: boolean) {
    const ghost = this.building?.settings.halloween?.ghost !== false;
    if (!unlocked) return this.renderFunLocked("🎃", this.t("fun_name_halloween"), this.t("fun_feature_halloween"));
    return html`<div class="fp3d-ext-feature fp3d-ext-on">
      <b>✓ 🎃 ${this.t("fun_name_halloween")}</b>
      <span class="fp3d-sub">${this.t("fun_feature_halloween")}</span>
      ${this.isAdmin && this.building
        ? html`<label class="fp3d-check"
            ><input
              type="checkbox"
              .checked=${ghost}
              @change=${(e: Event) => this.editPlan((b) => (b.settings.halloween = { ...(b.settings.halloween ?? {}), ghost: (e.target as HTMLInputElement).checked }))}
            />
            ${this.t("halloween_ghost")}</label
          >`
        : nothing}
      <span class="fp3d-sub">${this.t("halloween_deco_hint")}</span>
    </div>`;
  }


  static styles = [
    tokens,
    controls,
    css`
      :host {
        display: block;
      }
      .fp3d-fun {
        display: grid;
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
      .fp3d-pet-row {
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
        align-items: center;
        margin-top: 6px;
      }
      .fp3d-pet-row select,
      .fp3d-pet-row input[type="text"] {
        padding: 6px 10px;
        border-radius: 10px;
        border: 1px solid var(--fp3d-line, rgba(120, 190, 255, 0.25));
        background: rgba(4, 8, 18, 0.6);
        color: inherit;
        font: inherit;
      }
      .fp3d-pet-row input[type="text"] {
        flex: 1;
        min-width: 110px;
      }
      .fp3d-ext-links {
        display: flex;
        flex-wrap: wrap;
        gap: 12px;
        align-items: center;
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
    `,
  ];
}

if (!customElements.get("fp3d-fun-packs")) customElements.define("fp3d-fun-packs", Fp3dFunPacks);
