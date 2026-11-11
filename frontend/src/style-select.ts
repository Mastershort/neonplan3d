// The options of a style choice, grouped: automatic (house plan, by the sun), neon & classic, homely, designed.
import { html, nothing, type TemplateResult } from "lit";
import type { I18nKey } from "./i18n.ts";
import { STYLES } from "./looks.ts";

export function styleOptions(
  t: (key: I18nKey) => string,
  value: string | null | undefined,
  opts: { auto?: boolean; house?: boolean; none?: boolean } = {},
): TemplateResult {
  const groups = ["neon", "homely", "designed"] as const;
  return html`${opts.none ? html`<option value="" ?selected=${!value}>${t("style_none")}</option>` : nothing}
    ${opts.auto || opts.house
      ? html`<optgroup label=${t("style_group_auto")}>
          ${opts.house ? html`<option value="house" ?selected=${value === "house"}>${t("style_house")}</option>` : nothing}
          ${opts.auto ? html`<option value="auto" ?selected=${value === "auto"}>${t("theme_auto")}</option>` : nothing}
        </optgroup>`
      : nothing}
    ${groups.map(
      (g) =>
        html`<optgroup label=${t(`style_group_${g}` as I18nKey)}>
          ${STYLES.filter((s) => s.group === g).map((s) => html`<option value=${s.id} ?selected=${value === s.id}>${t(`style_${s.id}` as I18nKey)}</option>`)}
        </optgroup>`,
    )}`;
}

/** Whether a value is a style choice a screen may keep: a style, "auto" or "house". */
export function isStyleChoice(v: unknown): v is string {
  return typeof v === "string" && (v === "auto" || v === "house" || STYLES.some((s) => s.id === v));
}
