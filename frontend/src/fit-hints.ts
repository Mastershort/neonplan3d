/**
 * Which Pro add-ons fit this home: read from Home Assistant's entities and the plan, in the browser only (nothing is
 * sent anywhere). The extensions page lists the fitting ones first with a small sign of why (📷 3 = three cameras).
 * Lives in the editor bundle with the extensions page; its texts are German and English here and in the lang files
 * for the further languages, so the main bundle stays as it is.
 */
import type { Feature } from "./features.ts";
import { languageCode, translate, type I18nKey } from "./i18n.ts";
import type { HomeAssistant } from "./types.ts";
import type { Building } from "./model.ts";

type States = Record<string, { entity_id: string; attributes?: Record<string, unknown> }>;

// names as integrations give them; a word part between dots and underscores where a short one would match too much
const PV = /pv|solar|photovolt|inverter|wechselrichter|fronius|(^|[._])sma([._]|$)|growatt|hoymiles|opendtu|ahoy|enphase|solaredge/i;
const CHARGER = /wallbox|ev_?charg|car_?charg|ladestation|ladepunkt|(^|[._])go_?e([._]|$)|easee|openwb|evcc|wallbe|zappi|keba/i;
const WASTE = /waste|abfall|m(ü|ue|u)ll|tonne|trash|garbage|recycl/i;

const domain = (id: string) => id.slice(0, id.indexOf("."));

/** The add-ons that fit, each with a short sign of why (an icon, a count when there are several). */
export function fitHints(states: States | undefined, building: Building | null | undefined): Map<Feature, string> {
  const out = new Map<Feature, string>();
  const all = Object.values(states ?? {});
  const count = (test: (s: (typeof all)[number]) => boolean) => all.filter(test).length;
  const sign = (icon: string, n: number) => (n > 1 ? `${icon} ${n}` : icon);
  const cameras = count((s) => domain(s.entity_id) === "camera");
  if (cameras) out.set("camera_cockpit", sign("📷", cameras));
  const name = (s: (typeof all)[number]) => `${s.entity_id} ${String(s.attributes?.friendly_name ?? "")}`;
  const energy = building?.energy;
  const pv = !!energy?.solar || all.some((s) => domain(s.entity_id) === "sensor" && ["power", "energy"].includes(String(s.attributes?.device_class)) && PV.test(name(s)));
  if (pv) out.set("energy_pro", "☀️");
  else if (energy?.grid || energy?.battery) out.set("energy_pro", "⚡");
  const players = count((s) => domain(s.entity_id) === "media_player");
  if (players) out.set("sound", sign("🔊", players));
  const parked = !!building?.floors.some((f) => f.furniture.some((m) => m.type === "parking"));
  if (parked || all.some((s) => ["sensor", "binary_sensor", "switch", "select", "number"].includes(domain(s.entity_id)) && CHARGER.test(s.entity_id))) out.set("auto_pro", "🚗");
  if (all.some((s) => domain(s.entity_id) === "weather")) out.set("weather", "🌦");
  if (all.some((s) => ["sensor", "calendar"].includes(domain(s.entity_id)) && WASTE.test(s.entity_id))) out.set("household", "🗑");
  return out;
}

/** The shop's pack id of each Pro add-on (the catalog's offers carry it, sometimes with "mastershort." before it). */
const SHOP_ID: Partial<Record<Feature, string>> = {
  camera_cockpit: "pro_camera",
  weather: "pro_weather",
  screens: "pro_screens",
  energy_pro: "pro_energy",
  sound: "pro_sound",
  auto_pro: "pro_auto",
  time_travel: "pro_timetravel",
  household: "pro_household",
  pool: "pro_pool",
  frames: "frames",
};

/** The shop's offer of a Pro add-on, if the catalog has one (its price, its page). */
export function offerFor<T extends { id: string; kind: string }>(offers: readonly T[] | undefined, feature: Feature): T | undefined {
  const id = SHOP_ID[feature];
  return (offers ?? []).find((o) => (o.kind === "pro" || o.kind === "pack") && [id, feature].includes(o.id.replace(/^mastershort\./, "")));
}

/** Whether a key has bought anything (fun and taster packs are free and do not count). */
export function boughtAnything(packs: readonly { id: string }[] | undefined): boolean {
  return (packs ?? []).some((p) => !/^(mastershort\.)?fun_|_sample$/.test(p.id));
}

type HintKey = "fit" | "bundles" | "account_title" | "account_text" | "account_button" | "account_have" | "start_gift";

const TEXTS: Record<"de" | "en", Record<HintKey, string>> = {
  de: { fit: "Passt zu deinem Zuhause", bundles: "Am günstigsten ist alles auf einmal: ein Bundle oder der Supporter-Pass.", account_title: "Kostenloses Kundenkonto", account_text: "Mit einem kostenlosen Konto auf mastershort.de bekommst du gratis die Fun-Packs {winter} und {pets}, die Module Fenster-Wächter und „Das Haus antwortet“ und mit dem Newsletter vier Schnupper-Packs mit Möbeln. Alles aktualisiert sich von selbst – kaufen musst du nichts.", account_button: "Kostenloses Konto anlegen", account_have: "Schon ein Konto? Trag unten deinen Lizenzschlüssel ein, dann erscheinen deine Gratis-Packs hier.", start_gift: "Gratis dazu: Mit einem kostenlosen Kundenkonto bekommst du Fun-Packs und Schnupper-Packs (unter ✦ Erweiterungen)." },
  en: { fit: "Fits your home", bundles: "The best value is everything at once: a bundle or the Supporter Pass.", account_title: "Free customer account", account_text: "A free account at mastershort.de brings the fun packs {winter} and {pets}, the modules Window watch and “The house answers” and, with the newsletter, four taster packs of furniture – all free. Everything updates by itself; you don't have to buy anything.", account_button: "Create a free account", account_have: "Already have an account? Enter your licence key below and your free packs appear here.", start_gift: "Free on top: a free customer account brings fun packs and taster packs (under ✦ Extensions)." },
};

/**
 * A line in the viewer's language: German and English here, the further languages from their lang file (keys
 * "hint_…", fetched with the other texts), English when one is missing.
 */
export function fitText(lang: string | undefined, key: HintKey): string {
  const raw = (lang ?? navigator.language).toLowerCase();
  if (raw.startsWith("de")) return TEXTS.de[key];
  if (languageCode(raw)) {
    const k = `hint_${key}`;
    const s = translate({ language: raw } as HomeAssistant, k as I18nKey);
    if (s !== k) return s;
  }
  return TEXTS.en[key];
}
