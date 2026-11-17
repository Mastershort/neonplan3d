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

export type HintKey = "fit" | "bundles" | "account_title" | "account_text" | "account_button" | "account_have" | "start_gift" | "lib_locked" | "lib_locked_in" | "lib_locked_free" | "lib_locked_shop" | "lib_locked_bundle" | "lib_locked_note" | "lib_locked_close" | "lib_locked_hint" | "finish_title" | "finish_hint" | "finish_wood" | "finish_fabric" | "finish_front" | "finish_body" | "finish_own" | "finish_all" | "live_title" | "live_hint" | "live_own" | "lib_live" | "lib_live_hint";

const TEXTS: Record<"de" | "en", Record<HintKey, string>> = {
  de: { fit: "Passt zu deinem Zuhause", bundles: "Am günstigsten ist alles auf einmal: ein Bundle oder der Supporter-Pass.", account_title: "Kostenloses Kundenkonto", account_text: "Mit einem kostenlosen Konto auf mastershort.de bekommst du gratis die Fun-Packs {winter} und {pets}, die Module Fenster-Wächter und „Das Haus antwortet“ und mit dem Newsletter vier Schnupper-Packs mit Möbeln. Alles aktualisiert sich von selbst – kaufen musst du nichts.", account_button: "Kostenloses Konto anlegen", account_have: "Schon ein Konto? Trag unten deinen Lizenzschlüssel ein, dann erscheinen deine Gratis-Packs hier.", start_gift: "Gratis dazu: Mit einem kostenlosen Kundenkonto bekommst du Fun-Packs und Schnupper-Packs (unter ✦ Erweiterungen).", lib_locked: "Aus Packs", lib_locked_in: "Im Pack „{pack}“", lib_locked_free: "Gratis mit Kundenkonto", lib_locked_shop: "Im Shop ansehen", lib_locked_bundle: "Oder alles auf einmal: {name} für {price}", lib_locked_note: "Hier siehst du nur das Bild – das Möbel kommt mit dem Pack und lässt sich dann wie jedes andere platzieren.", lib_locked_close: "Schließen", lib_locked_hint: "🔒 = aus einem Pack, das du noch nicht hast. Antippen zeigt es groß.", finish_title: "Ausführung", finish_hint: "Eigene Farben für Holz, Stoff und Fronten – zu sehen in den wohnlichen Stilen.", finish_wood: "Holz", finish_fabric: "Stoff", finish_front: "Fronten", finish_body: "Korpus", finish_own: "Standard", finish_all: "Für alle gleichen im Plan", live_title: "Lebende Teile", live_hint: "Diese Teile bewegen sich mit Home Assistant: Türen und Klappen öffnen, Schubladen fahren aus, Füllstände steigen, Status-Lämpchen zeigen grün, aus oder rot. Wähle für jedes die passende Entität.", live_own: "Ohne Wahl nimmt es die Entität des Möbels.", lib_live: "Lebt", lib_live_hint: "✨ = bewegt sich mit Home Assistant: Türen, Schubladen, Füllstände, Status-Lämpchen, Lüfter" },
  en: { fit: "Fits your home", bundles: "The best value is everything at once: a bundle or the Supporter Pass.", account_title: "Free customer account", account_text: "A free account at mastershort.de brings the fun packs {winter} and {pets}, the modules Window watch and “The house answers” and, with the newsletter, four taster packs of furniture – all free. Everything updates by itself; you don't have to buy anything.", account_button: "Create a free account", account_have: "Already have an account? Enter your licence key below and your free packs appear here.", start_gift: "Free on top: a free customer account brings fun packs and taster packs (under ✦ Extensions).", lib_locked: "From packs", lib_locked_in: "In the pack “{pack}”", lib_locked_free: "Free with a customer account", lib_locked_shop: "See in the shop", lib_locked_bundle: "Or everything at once: {name} for {price}", lib_locked_note: "This is just the picture – the item comes with the pack and is then placed like any other.", lib_locked_close: "Close", lib_locked_hint: "🔒 = from a pack you don't have yet. Tap to see it large.", finish_title: "Finish", finish_hint: "Own colours for wood, fabric and fronts – shown in the homely styles.", finish_wood: "Wood", finish_fabric: "Fabric", finish_front: "Fronts", finish_body: "Carcass", finish_own: "Standard", finish_all: "For all the same in the plan", live_title: "Live parts", live_hint: "These parts move with Home Assistant: doors and flaps open, drawers slide out, levels rise, status lights show green, off or red. Pick the fitting entity for each.", live_own: "Without a choice it takes the item's entity.", lib_live: "Live", lib_live_hint: "✨ = moves with Home Assistant: doors, drawers, levels, status lights, fans" },
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
