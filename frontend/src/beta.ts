/**
 * Supporter beta: a new Pro add-on is first handed to Supporter-Pass holders only, who test it and give
 * feedback on Discord; once it is stable it is sold to everyone. Everybody sees the add-on, marked as
 * "beta, first for supporters". The list changes with the release that ends the beta.
 */
import type { Feature } from "./features.ts";

export const BETA_FEATURES: readonly Feature[] = ["time_travel"];

export function isBeta(feature: Feature): boolean {
  return BETA_FEATURES.includes(feature);
}

/** The Discord server; supporters see the channel #beta-feedback there. */
export const DISCORD_URL = "https://discord.gg/SSdVVFsev7";

/** The supporter page of the shop (with the Supporter-Pass) in the user's language. */
export function supporterUrl(lang: string | undefined): string {
  return (lang ?? navigator.language).toLowerCase().startsWith("de")
    ? "https://mastershort.de/neonplan3d/unterstuetzer/?lang=de"
    : "https://mastershort.de/en/neonplan3d/supporters/?lang=en";
}
