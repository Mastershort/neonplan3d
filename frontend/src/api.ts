// Websocket calls to the backend (custom_components/neonplan3d/websocket.py).

import type { Building } from "./model.ts";
import type { FurniturePack } from "./packs.ts";
import type { HomeAssistant } from "./types.ts";

export async function fetchBuilding(hass: HomeAssistant): Promise<{ building: Building; revision: number; version?: string }> {
  return hass.callWS({ type: "neonplan3d/building/get" });
}

export async function saveBuilding(hass: HomeAssistant, building: Building): Promise<number> {
  const res = await hass.callWS<{ revision: number }>({ type: "neonplan3d/building/save", building });
  return res.revision;
}

export function subscribeBuilding(hass: HomeAssistant, callback: (revision: number) => void): Promise<() => Promise<void>> {
  return hass.connection.subscribeMessage<{ revision: number }>((msg) => callback(msg.revision), {
    type: "neonplan3d/building/subscribe",
  });
}

export async function fetchImage(hass: HomeAssistant, imageId: string): Promise<string> {
  const res = await hass.callWS<{ data: string }>({ type: "neonplan3d/image/get", image_id: imageId });
  return res.data;
}

export async function storeImage(hass: HomeAssistant, imageId: string, data: string): Promise<void> {
  await hass.callWS({ type: "neonplan3d/image/set", image_id: imageId, data });
}

export interface Snapshot {
  id: string;
  revision: number;
  /** Unix time in seconds. */
  saved_at: number;
  floors: number;
  rooms: number;
  furniture: number;
}

export async function listHistory(hass: HomeAssistant): Promise<Snapshot[]> {
  const res = await hass.callWS<{ snapshots: Snapshot[] }>({ type: "neonplan3d/history/list" });
  return res.snapshots;
}

export async function takeSnapshot(hass: HomeAssistant): Promise<void> {
  await hass.callWS({ type: "neonplan3d/history/snapshot" });
}

export async function restoreSnapshot(hass: HomeAssistant, snapshotId: string): Promise<number> {
  const res = await hass.callWS<{ revision: number }>({ type: "neonplan3d/history/restore", snapshot_id: snapshotId });
  return res.revision;
}

export async function listPacks(hass: HomeAssistant): Promise<FurniturePack[]> {
  const res = await hass.callWS<{ packs: FurniturePack[] }>({ type: "neonplan3d/packs/list" });
  return res.packs;
}

export interface ImportedPack {
  id: string;
  name: string;
  publisher: string;
  licensee: string | null;
  items: number;
}

/** Import a pack file; the backend checks its signature (errors carry a code, e.g. "bad_signature"). */
export async function importPack(hass: HomeAssistant, text: string): Promise<ImportedPack> {
  return hass.callWS<ImportedPack>({ type: "neonplan3d/packs/import", pack: text });
}

export async function removePack(hass: HomeAssistant, packId: string): Promise<void> {
  await hass.callWS({ type: "neonplan3d/packs/remove", pack_id: packId });
}

/** A bought pack as the shop lists it, with the release installed here (null = not installed). */
export interface CatalogPack {
  id: string;
  name: string;
  release: number;
  url: string;
  installed: number | null;
}

/** A pack or Pro add-on in the shop the customer does not own yet. */
export interface ShopOffer {
  id: string;
  name: string;
  teaser: string;
  image: string | null;
  url: string;
  kind: "pack" | "pro" | "bundle";
  price: string;
  new: boolean;
}

/** The customer's loyalty code: a discount on further purchases. */
export interface ShopLoyalty {
  code: string;
  percent: number;
}

/** Ids of the offers seen on the extensions page (the tab shows a dot for new ones). */
const SEEN_OFFERS = "neonplan3d.seenOffers";

export function unseenOffers(offers: readonly ShopOffer[]): ShopOffer[] {
  let seen: string[] = [];
  try {
    seen = JSON.parse(localStorage.getItem(SEEN_OFFERS) ?? "[]") as string[];
  } catch {
    // no storage: every offer counts as new for this page
  }
  return offers.filter((o) => !seen.includes(o.id));
}

export function markOffersSeen(offers: readonly ShopOffer[]): void {
  try {
    localStorage.setItem(SEEN_OFFERS, JSON.stringify(offers.map((o) => o.id)));
  } catch {
    // no storage: nothing to remember
  }
}

/** A pack update installed from the shop (shown once on the extensions page). */
export interface PackUpdate {
  id: string;
  name: string;
  release: number;
  added: number;
  at: number;
}

const SEEN_UPDATES = "neonplan3d.seenUpdates";

export function unseenUpdates(updates: readonly PackUpdate[]): PackUpdate[] {
  let seen: string[] = [];
  try {
    seen = JSON.parse(localStorage.getItem(SEEN_UPDATES) ?? "[]") as string[];
  } catch {
    // no storage: every update counts as new for this page
  }
  return updates.filter((u) => !seen.includes(`${u.id}@${u.release}`));
}

export function markUpdatesSeen(updates: readonly PackUpdate[]): void {
  try {
    localStorage.setItem(SEEN_UPDATES, JSON.stringify(updates.map((u) => `${u.id}@${u.release}`)));
  } catch {
    // no storage: nothing to remember
  }
}

/** A shop link that brings the loyalty code into the cart. */
export function offerLink(url: string, loyalty: ShopLoyalty | null): string {
  if (!loyalty) return url;
  return `${url}${url.includes("?") ? "&" : "?"}np_coupon=${encodeURIComponent(loyalty.code)}`;
}

/** The shop connection: this installation's fingerprint, the key's state and the bought packs. */
export interface LicenseStatus {
  instance: string;
  active: boolean;
  key_hint: string | null;
  licensee: string | null;
  checked_at: number | null;
  error: string | null;
  shop_url: string;
  packs: CatalogPack[];
  /** Packs and Pro add-ons not owned yet (empty without a key or with an older shop). */
  offers?: ShopOffer[];
  loyalty?: ShopLoyalty | null;
  /** Supporter-Pass holders: the code that unlocks the supporter role on Discord (/supporter). */
  supporter?: { code: string; until: string | null } | null;
  /** Pack updates installed from the shop, newest last. */
  updates?: PackUpdate[];
}

export function getLicense(hass: HomeAssistant): Promise<LicenseStatus> {
  return hass.callWS<LicenseStatus>({ type: "neonplan3d/license/get" });
}

/** Bind this installation to a customer key (errors carry the shop's code, e.g. "invalid_key"). */
export function activateLicense(hass: HomeAssistant, key: string): Promise<LicenseStatus> {
  return hass.callWS<LicenseStatus>({ type: "neonplan3d/license/activate", key });
}

export function removeLicense(hass: HomeAssistant): Promise<LicenseStatus> {
  return hass.callWS<LicenseStatus>({ type: "neonplan3d/license/remove" });
}

export function refreshLicense(hass: HomeAssistant): Promise<LicenseStatus> {
  return hass.callWS<LicenseStatus>({ type: "neonplan3d/license/refresh" });
}

/** A full backup file: the plan, the packs with their signatures and every stored picture. */
export interface BackupFile {
  format: "neonplan3d-backup";
  version: 1;
  exported_at?: string;
  building: Building;
  packs?: FurniturePack[];
  images?: Record<string, string>;
}

export function fetchBackup(hass: HomeAssistant): Promise<Pick<BackupFile, "format" | "version" | "building" | "packs">> {
  return hass.callWS({ type: "neonplan3d/backup/export" });
}

/** Replace plan and packs from a backup (pictures follow one by one); packs that fail their check are skipped. */
export function restoreBackup(
  hass: HomeAssistant,
  building: Building,
  packs: FurniturePack[],
): Promise<{ revision: number; building: Building; packs: number; skipped: { id: string; reason: string }[] }> {
  return hass.callWS({ type: "neonplan3d/backup/import", building, packs });
}

/** Fetch a bought pack from the shop, signed for this installation (also updates it). */
export function installPack(hass: HomeAssistant, packId: string): Promise<ImportedPack & { release: number }> {
  return hass.callWS<ImportedPack & { release: number }>({ type: "neonplan3d/packs/install", pack_id: packId });
}
