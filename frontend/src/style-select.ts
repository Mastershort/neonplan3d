// The options of a style choice, grouped: automatic (house plan, by the sun), neon & classic, homely, designed.
import { html, nothing, type TemplateResult } from "lit";
import type { I18nKey } from "./i18n.ts";
import { allStyles } from "./looks.ts";

export function styleOptions(
  t: (key: I18nKey) => string,
  value: string | null | undefined,
  opts: { auto?: boolean; house?: boolean; none?: boolean } = {},
): TemplateResult {
  const groups = ["neon", "homely", "designed", "custom"] as const;
  const styles = allStyles();
  return html`${opts.none ? html`<option value="" ?selected=${!value}>${t("style_none")}</option>` : nothing}
    ${opts.auto || opts.house
      ? html`<optgroup label=${t("style_group_auto")}>
          ${opts.house ? html`<option value="house" ?selected=${value === "house"}>${t("style_house")}</option>` : nothing}
          ${opts.auto ? html`<option value="auto" ?selected=${value === "auto"}>${t("theme_auto")}</option>` : nothing}
        </optgroup>`
      : nothing}
    ${groups
      .filter((g) => styles.some((s) => s.group === g))
      .map(
        (g) =>
          html`<optgroup label=${t(`style_group_${g}` as I18nKey)}>
            ${styles.filter((s) => s.group === g).map((s) => html`<option value=${s.id} ?selected=${value === s.id}>${s.name ?? t(`style_${s.id}` as I18nKey)}</option>`)}
          </optgroup>`,
      )}`;
}

/** Whether a value is a style choice a screen may keep: a style, "auto" or "house". */
/** Own styles count once the plan is there; until then an id of one is kept (it may be one). */
export function isStyleChoice(v: unknown): v is string {
  return typeof v === "string" && (v === "auto" || v === "house" || v.startsWith("my_") || allStyles().some((s) => s.id === v));
}
