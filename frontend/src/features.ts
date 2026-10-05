/**
 * Pro features: unlocked by an installed, signed feature pack (a pack whose payload lists `features`).
 * The code of every feature is in the integration; the pack is the licence and carries its content.
 */
import { getPacks } from "./packs.ts";

export type Feature = "camera_cockpit" | "weather" | "screens" | "energy_pro" | "sound" | "auto_pro" | "fridge_smart";

/** The add-ons shown on the extensions page (sold in the shop). */
export const FEATURES: readonly Feature[] = ["camera_cockpit", "weather", "screens", "energy_pro", "sound", "auto_pro"];
/** Features unlocked by a pack but not listed anywhere (exclusive items). */
const HIDDEN: readonly Feature[] = ["fridge_smart"];

/** Whether this frontend knows a feature key at all (an older bundle does not know newer Pro add-ons). */
export function knownFeature(key: string): boolean {
  return (FEATURES as readonly string[]).includes(key) || (HIDDEN as readonly string[]).includes(key);
}

/** The shop page where the Pro pack is sold (German; see shopUrl for the user's language). */
export const PRO_URL = "https://mastershort.de/neonplan3d/";

const isGerman = (lang: string | undefined) => (lang ?? navigator.language).toLowerCase().startsWith("de");

/** The NeonPlan 3D page of the shop in the user's language (?lang= makes the site keep that language). */
export function shopUrl(lang: string | undefined): string {
  return isGerman(lang) ? "https://mastershort.de/neonplan3d/?lang=de" : "https://mastershort.de/en/neonplan3d/?lang=en";
}

/** Where each Pro add-on is described in chapter 6 of the manual: German and English slug and anchor. */
const MANUAL_FEATURE: Record<string, { de: string; en: string }> = {
  camera_cockpit: { de: "pro-erweiterungen/#61-kamera-cockpit", en: "pro-add-ons/#61-camera-cockpit" },
  weather: { de: "pro-erweiterungen/#62-wetter-drau%C3%9Fen", en: "pro-add-ons/#62-weather-outside" },
  screens: { de: "pro-erweiterungen/#63-bildschirme-live", en: "pro-add-ons/#63-live-screens" },
  energy_pro: { de: "pro-erweiterungen/#64-energie-pro", en: "pro-add-ons/#64-energy-pro" },
  sound: { de: "pro-erweiterungen/#65-klang-kino", en: "pro-add-ons/#65-sound-cinema" },
  auto_pro: { de: "pro-erweiterungen/#66-auto-pro", en: "pro-add-ons/#66-auto-pro" },
  extensions: { de: "erweiterungen-shop-moebel-packs/", en: "extensions-shop-furniture-packs/" },
};

/** The online manual in the user's language, optionally at a Pro add-on's section or the extensions chapter. */
export function manualUrl(lang: string | undefined, topic?: Feature | "extensions"): string {
  const de = isGerman(lang);
  const base = de ? "https://mastershort.de/neonplan3d/anleitung/" : "https://mastershort.de/en/neonplan3d/manual/";
  const target = topic ? MANUAL_FEATURE[topic] : undefined;
  const path = target ? (de ? target.de : target.en) : "";
  const [page, anchor] = path.split("#");
  return `${base}${page}?lang=${de ? "de" : "en"}${anchor ? `#${anchor}` : ""}`;
}

export function unlockedFeatures(packs: readonly { features?: string[] }[] = getPacks()): Set<Feature> {
  const out = new Set<Feature>();
  for (const p of packs) for (const f of p.features ?? []) if ((FEATURES as readonly string[]).includes(f) || (HIDDEN as readonly string[]).includes(f)) out.add(f as Feature);
  return out;
}

export function hasFeature(feature: Feature, packs?: readonly { features?: string[] }[]): boolean {
  return unlockedFeatures(packs).has(feature);
}
