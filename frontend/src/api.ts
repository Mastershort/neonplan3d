// Websocket calls to the backend (custom_components/neonplan3d/websocket.py).

import type { Building } from "./model.ts";
import type { FurniturePack } from "./packs.ts";
import type { HomeAssistant } from "./types.ts";

/** The first floor plan, the one every installation had before there were several. */
export const MAIN_PLAN = "main";

// the main plan is asked for without naming it: right after an update the new frontend talks to the old backend
// until Home Assistant restarts, and that one does not know the field
const planOf = (plan: string | undefined) => (plan && plan !== MAIN_PLAN ? { plan } : {});

export async function fetchBuilding(
  hass: HomeAssistant,
  plan?: string,
): Promise<{ building: Building; revision: number; version?: string; plan?: string }> {
  return hass.callWS({ type: "neonplan3d/building/get", ...planOf(plan) });
}

export async function saveBuilding(hass: HomeAssistant, building: Building, plan?: string): Promise<number> {
  const res = await hass.callWS<{ revision: number }>({ type: "neonplan3d/building/save", building, ...planOf(plan) });
  return res.revision;
}

export function subscribeBuilding(hass: HomeAssistant, callback: (revision: number) => void, plan?: string): Promise<() => Promise<void>> {
  return hass.connection.subscribeMessage<{ revision: number }>((msg) => callback(msg.revision), {
    type: "neonplan3d/building/subscribe",
    ...planOf(plan),
  });
}

/** Every plan's saves (their id and revision), for the views that keep the other plans at hand. */
export function subscribeAnyPlan(hass: HomeAssistant, callback: (plan: string, revision: number) => void): Promise<() => Promise<void>> {
  return hass.connection.subscribeMessage<{ revision: number; plan?: string }>((msg) => callback(msg.plan ?? MAIN_PLAN, msg.revision), {
    type: "neonplan3d/building/subscribe",
    plan: "*",
  });
}

/** Where a plan stands on the property: beside the main plan, x/y metres away, turned by rot degrees. */
export interface PlanSite {
  on: boolean;
  x: number;
  y: number;
  rot: number;
}

/** A floor plan in the list (no building): its name (null: the main plan's own word), icon and size. */
export interface PlanEntry {
  id: string;
  name: string | null;
  icon: string | null;
  site: PlanSite | null;
  created: number | null;
  revision: number;
  floors: number;
  rooms: number;
  furniture: number;
  /** Unix seconds, in the bin only. */
  deleted_at?: number;
}

export interface PlanList {
  plans: PlanEntry[];
  trash: PlanEntry[];
  locate_plan: string;
}

/** The floor plans; an older backend (before a restart after the update) knows only its one plan. */
export async function listPlans(hass: HomeAssistant): Promise<PlanList> {
  try {
    return await hass.callWS<PlanList>({ type: "neonplan3d/plans/list" });
  } catch {
    return { plans: [], trash: [], locate_plan: MAIN_PLAN };
  }
}

export function subscribePlans(hass: HomeAssistant, callback: (list: PlanList) => void): Promise<() => Promise<void>> {
  return hass.connection.subscribeMessage<PlanList>(callback, { type: "neonplan3d/plans/subscribe" });
}

/** A new plan: empty, a copy of another one, or one from a file. Returns its id. */
export async function createPlan(
  hass: HomeAssistant,
  name: string,
  from: { copyOf?: string; building?: Building; icon?: string | null } = {},
): Promise<string> {
  const res = await hass.callWS<{ plan: string }>({
    type: "neonplan3d/plans/create",
    name,
    ...(from.icon ? { icon: from.icon } : {}),
    ...(from.copyOf ? { copy_of: from.copyOf } : {}),
    ...(from.building ? { building: from.building } : {}),
  });
  return res.plan;
}

export async function updatePlan(hass: HomeAssistant, plan: string, changes: { name?: string | null; icon?: string | null; site?: PlanSite | null }): Promise<void> {
  await hass.callWS({ type: "neonplan3d/plans/update", plan, ...changes });
}

export async function orderPlans(hass: HomeAssistant, plans: string[]): Promise<void> {
  await hass.callWS({ type: "neonplan3d/plans/order", plans });
}

/** Into the bin (30 days); restorePlan takes it back out. */
export async function deletePlan(hass: HomeAssistant, plan: string): Promise<void> {
  await hass.callWS({ type: "neonplan3d/plans/delete", plan });
}

export async function restorePlan(hass: HomeAssistant, plan: string): Promise<void> {
  await hass.callWS({ type: "neonplan3d/plans/restore", plan });
}

export async function setLocatePlan(hass: HomeAssistant, plan: string): Promise<void> {
  await hass.callWS({ type: "neonplan3d/plans/locate", plan });
}

/** A sentence Assist or the service `neonplan3d.ask` hands to the open views. */
export interface Ask {
  ask_id: string;
  text: string;
  /** Only the view with this screen name reacts (null: every open view). */
  screen: string | null;
  /** The view speaks its answer (a satellite that asked speaks itself). */
  speak: boolean;
  /** Plan rooms to fly into instead of a sentence ("Where is Torsten?": his room; "Who is home?": a tour). */
  show_rooms?: string[];
  /** The rooms are people's while people are shown to admins only: only an admin's view flies there. */
  admins_only?: boolean;
}

/** An announcement for the open screens (the service `neonplan3d.announce` with "On NeonPlan screens"). */
export interface ScreenAnnouncement {
  id: string;
  message: string;
  /** Only the views with these screen names (empty: every open view). */
  screens: string[];
}

/** The call to load the page again (the service `neonplan3d.reload_screens`, the editor's card templates). */
export interface ScreenReload {
  id: string;
  /** Only the views of these card templates (empty: every open view). */
  templates: string[];
  /** Only the views of this floor plan (templates belong to their plan). */
  plan?: string | null;
}

/** What a view shows, for the card templates' overview of the open screens. */
export interface ViewInfo {
  kind: "panel" | "card" | "preview";
  screen?: string | null;
  template?: string | null;
  device?: string | null;
  version?: string | null;
  /** The floor plan it shows (left out for the main plan). */
  plan?: string | null;
}

/** An open NeonPlan view as the overview lists it. */
export interface OpenScreen extends ViewInfo {
  id: string;
  user: string | null;
  /** Unix seconds. */
  since: number;
  reloadable: boolean;
}

export function subscribeAsk(
  hass: HomeAssistant,
  callback: (ask: Ask) => void,
  onAnnounce?: (a: ScreenAnnouncement) => void,
  onReload?: (r: ScreenReload) => void,
  view?: ViewInfo,
): Promise<() => Promise<void>> {
  return hass.connection.subscribeMessage<Ask | { announce: ScreenAnnouncement } | { reload: ScreenReload }>(
    (ev) => {
      if ("announce" in ev) onAnnounce?.(ev.announce);
      else if ("reload" in ev) onReload?.(ev.reload);
      // a sentence (anything else, e.g. a message this view does not know yet, is left alone)
      else if (typeof (ev as Ask).text === "string") callback(ev as Ask);
    },
    { type: "neonplan3d/voice/subscribe", ...(onAnnounce ? { announce: true } : {}), ...(onReload ? { reload: true } : {}), ...(view ? { view } : {}) },
  );
}

/** The NeonPlan views open now (admins). */
export async function listScreens(hass: HomeAssistant): Promise<OpenScreen[]> {
  return (await hass.callWS<{ screens: OpenScreen[] }>({ type: "neonplan3d/screens/list" })).screens;
}

/** One open view loads its page again. */
export async function reloadScreen(hass: HomeAssistant, id: string): Promise<boolean> {
  return (await hass.callWS<{ sent: boolean }>({ type: "neonplan3d/screens/reload", screen_id: id })).sent;
}

/** Lets the open views of these card templates (none: every view) load their page again. */
export async function reloadScreens(hass: HomeAssistant, templates: string[] = []): Promise<void> {
  await hass.callService("neonplan3d", "reload_screens", templates.length ? { templates } : {});
}

/** The view's answer; `taken` is false when another view was first. */
export async function answerAsk(hass: HomeAssistant, askId: string, text: string, answered: boolean): Promise<boolean> {
  const res = await hass.callWS<{ taken: boolean }>({ type: "neonplan3d/voice/answer", ask_id: askId, text, answered });
  return res.taken;
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

export async function listHistory(hass: HomeAssistant, plan?: string): Promise<Snapshot[]> {
  const res = await hass.callWS<{ snapshots: Snapshot[] }>({ type: "neonplan3d/history/list", ...planOf(plan) });
  return res.snapshots;
}

export async function takeSnapshot(hass: HomeAssistant, plan?: string): Promise<void> {
  await hass.callWS({ type: "neonplan3d/history/snapshot", ...planOf(plan) });
}

export async function restoreSnapshot(hass: HomeAssistant, snapshotId: string, plan?: string): Promise<number> {
  const res = await hass.callWS<{ revision: number }>({ type: "neonplan3d/history/restore", snapshot_id: snapshotId, ...planOf(plan) });
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
  /** Module code that waits for an admin's approval on the extensions page before it runs. */
  approval?: boolean;
}

/** A module's code for an admin to read before approving it (the installed code or the waiting update). */
export interface ModuleReview {
  id: string;
  name: string;
  publisher: string;
  licensee: string | null;
  release: number;
  api: number;
  kind: string;
  sha: string;
  code: string;
}

export function reviewModule(hass: HomeAssistant, packId: string, pending: boolean): Promise<ModuleReview> {
  return hass.callWS<ModuleReview>({ type: "neonplan3d/modules/review", pack_id: packId, pending });
}

/** Approves exactly the reviewed code (by its fingerprint); from then on it runs. */
export async function approveModule(hass: HomeAssistant, packId: string, sha: string): Promise<void> {
  await hass.callWS({ type: "neonplan3d/modules/approve", pack_id: packId, sha });
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
  /** A module update was fetched and waits for the admin's approval (installed counts it already). */
  waits?: boolean;
}

/** A pack or Pro add-on in the shop the customer does not own yet. */
export interface ShopOffer {
  id: string;
  name: string;
  teaser: string;
  image: string | null;
  url: string;
  kind: "pack" | "pro" | "bundle" | "fun";
  price: string;
  new: boolean;
  /** The Supporter Pass (its tile mentions NeonPlan Print); missing from older shops. */
  supporter_pass?: boolean;
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
  /** The shop's newsletter invitation (taster packs as a thank-you): only while the customer has not signed up. */
  newsletter?: { url: string } | null;
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
  /** 2: with every floor plan (`building` stays the main plan, so a version-1 reader still restores that). */
  version: 1 | 2;
  exported_at?: string;
  building: Building;
  packs?: FurniturePack[];
  images?: Record<string, string>;
  main?: { name: string | null; icon: string | null; site: PlanSite | null };
  plans?: (Omit<PlanEntry, "revision" | "floors" | "rooms" | "furniture"> & { building: Building })[];
}

export function fetchBackup(hass: HomeAssistant): Promise<Pick<BackupFile, "format" | "version" | "building" | "packs" | "main" | "plans">> {
  return hass.callWS({ type: "neonplan3d/backup/export" });
}

/** Replace plans and packs from a backup (pictures follow one by one); packs that fail their check are skipped. */
export function restoreBackup(
  hass: HomeAssistant,
  backup: Pick<BackupFile, "building" | "packs" | "main" | "plans">,
): Promise<{ revision: number; building: Building; packs: number; skipped: { id: string; reason: string }[] }> {
  const { building, packs = [], main, plans } = backup;
  return hass.callWS({ type: "neonplan3d/backup/import", building, packs, ...(plans ? { plans, ...(main ? { main } : {}) } : {}) });
}

/** Fetch a bought pack from the shop, signed for this installation (also updates it). */
export function installPack(hass: HomeAssistant, packId: string): Promise<ImportedPack & { release: number }> {
  return hass.callWS<ImportedPack & { release: number }>({ type: "neonplan3d/packs/install", pack_id: packId });
}

/** The opt-in reports ("help improve NeonPlan"): the setting and the exact next daily report. */
export interface DiagnosticsStatus {
  enabled: boolean;
  /** Unix time in seconds of the last daily report (or of switching on). */
  last_daily: number | null;
  /** Reports went out under this or an earlier id and can be deleted on the server. */
  can_delete: boolean;
  preview: Record<string, unknown>;
  endpoint: string;
}

export async function getDiagnostics(hass: HomeAssistant): Promise<DiagnosticsStatus> {
  return hass.callWS<DiagnosticsStatus>({ type: "neonplan3d/diagnostics/get" });
}

export async function setDiagnostics(hass: HomeAssistant, enabled: boolean): Promise<DiagnosticsStatus> {
  return hass.callWS<DiagnosticsStatus>({ type: "neonplan3d/diagnostics/set", enabled });
}

/** Ask the server to delete what was sent, forget the id and switch off (fails when the server is unreachable). */
export async function deleteDiagnostics(hass: HomeAssistant): Promise<DiagnosticsStatus> {
  return hass.callWS<DiagnosticsStatus>({ type: "neonplan3d/diagnostics/delete" });
}

export type SentenceMode = "distinct" | "all" | "off";

/** Which sentences Assist hands to NeonPlan (the sentence files Home Assistant reads). */
export async function getVoiceSettings(hass: HomeAssistant): Promise<{ sentences: SentenceMode }> {
  return hass.callWS({ type: "neonplan3d/voice/settings" });
}

export async function setVoiceSentences(hass: HomeAssistant, sentences: SentenceMode): Promise<{ sentences: SentenceMode; kept?: string[] }> {
  return hass.callWS({ type: "neonplan3d/voice/settings/set", sentences });
}
