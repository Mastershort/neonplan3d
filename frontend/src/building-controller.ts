// Loads the building, follows changes made elsewhere and saves edits (debounced).

import type { ReactiveController, ReactiveControllerHost } from "lit";
import { fetchBuilding, listPacks, saveBuilding, subscribeBuilding } from "./api.ts";
import { normalizeBuilding, type Building } from "./model.ts";
import { setPacks, type FurniturePack } from "./packs.ts";
import type { HomeAssistant } from "./types.ts";

export type SaveState = "idle" | "saving" | "saved" | "error";

const SAVE_DELAY = 700;
/** Edits that could not be saved are kept here, so a reload does not lose them. */
const DRAFT_KEY = "neonplan3d.unsaved";

/** Version of this frontend, set by the build (see build.mjs). */
declare const __FP3D_VERSION__: string;
export const FRONTEND_VERSION = typeof __FP3D_VERSION__ === "string" ? __FP3D_VERSION__ : "dev";

export interface Draft {
  building: Building;
  savedAt: number;
}

/** Unsaved edits of the earlier name (the browser may still hold them). */
const LEGACY_DRAFT_KEY = "floorplan-3d.unsaved";

function readDraft(): Draft | null {
  try {
    const raw = localStorage.getItem(DRAFT_KEY) ?? localStorage.getItem(LEGACY_DRAFT_KEY);
    return raw ? (JSON.parse(raw) as Draft) : null;
  } catch {
    return null;
  }
}

function writeDraft(draft: Draft | null): void {
  try {
    if (draft) localStorage.setItem(DRAFT_KEY, JSON.stringify(draft));
    else {
      localStorage.removeItem(DRAFT_KEY);
      localStorage.removeItem(LEGACY_DRAFT_KEY);
    }
  } catch {
    // storage full or unavailable: the edit stays until the page is closed
  }
}

export class BuildingController implements ReactiveController {
  building: Building | null = null;
  error: string | null = null;
  saveState: SaveState = "idle";
  /** Why the last save failed (message from the backend). */
  saveError: string | null = null;
  /** Integration version the backend runs (differs from the frontend until Home Assistant restarts). */
  backendVersion: string | null = null;
  /** Unsaved edits from an earlier session, offered for restoring. */
  draft: Draft | null = null;
  /** Imported furniture packs. */
  packs: FurniturePack[] = [];

  private readonly host: ReactiveControllerHost;
  private hass: HomeAssistant | null = null;
  private revision = -1;
  private ownRevisions = new Set<number>();
  private unsubscribe: (() => Promise<void>) | null = null;
  private saveTimer: ReturnType<typeof setTimeout> | undefined;
  private pending: Building | null = null;
  private saving: Promise<void> | null = null;
  private connected = false;

  constructor(host: ReactiveControllerHost) {
    this.host = host;
    host.addController(this);
  }

  /** Call whenever the host receives a new hass object. */
  setHass(hass: HomeAssistant): void {
    const first = this.hass === null;
    this.hass = hass;
    if (first && this.connected) void this.start();
  }

  hostConnected(): void {
    this.connected = true;
    if (this.hass) void this.start();
  }

  hostDisconnected(): void {
    this.connected = false;
    void this.flush();
    void this.unsubscribe?.();
    this.unsubscribe = null;
  }

  /** Local edit: shown immediately, saved after a short pause. */
  edit(building: Building): void {
    this.building = building;
    this.pending = building;
    clearTimeout(this.saveTimer);
    this.saveTimer = setTimeout(() => void this.flush(), SAVE_DELAY);
    this.host.requestUpdate();
  }

  /** This frontend's version, for notices. */
  get frontendVersion(): string {
    return FRONTEND_VERSION;
  }

  /**
   * Which side is behind when the versions differ: "backend" when Home Assistant still runs the old
   * integration (restart helps), "frontend" when the browser or the companion app still holds an old
   * bundle (a reload helps, not a restart); null when they match or one is unknown.
   */
  get versionGap(): "backend" | "frontend" | null {
    if (!this.backendVersion || FRONTEND_VERSION === "dev" || this.backendVersion === FRONTEND_VERSION) return null;
    return compareVersions(this.backendVersion, FRONTEND_VERSION) > 0 ? "frontend" : "backend";
  }

  /** The backend runs another version than this frontend: Home Assistant has to restart. */
  get needsRestart(): boolean {
    // an older backend that does not report its version yet rejects the new fields ("extra keys")
    if (this.saveError && /extra keys not allowed/i.test(this.saveError)) return true;
    return !!this.backendVersion && FRONTEND_VERSION !== "dev" && this.backendVersion !== FRONTEND_VERSION;
  }

  /** Take over the unsaved edits of an earlier session (they are saved right away). */
  restoreDraft(): void {
    const draft = this.draft;
    this.draft = null;
    if (draft) this.edit(normalizeBuilding(draft.building));
  }

  discardDraft(): void {
    this.draft = null;
    writeDraft(null);
    this.host.requestUpdate();
  }

  async flush(): Promise<void> {
    clearTimeout(this.saveTimer);
    if (this.saving) await this.saving;
    const building = this.pending;
    if (!building || !this.hass) return;
    this.pending = null;
    // a mount height above what the backend accepts (10 m – "40" typed as centimetres) would refuse every save,
    // also of an edit kept from earlier: it is brought into range here
    for (const f of building.floors) for (const m of f.furniture) if (m.mount_y != null && m.mount_y > 10) m.mount_y = 10;
    this.saveState = "saving";
    this.host.requestUpdate();
    this.saving = (async () => {
      try {
        const revision = await saveBuilding(this.hass!, building);
        this.ownRevisions.add(revision);
        this.revision = revision;
        this.saveState = this.pending ? "saving" : "saved";
        this.saveError = null;
        writeDraft(null);
      } catch (err) {
        this.saveState = "error";
        this.saveError = errorText(err);
        // keep the edit: after a restart it can be restored and saved
        writeDraft({ building, savedAt: Date.now() });
      }
      this.host.requestUpdate();
    })();
    await this.saving;
    this.saving = null;
  }

  private async start(): Promise<void> {
    if (!this.hass) return;
    await Promise.all([this.reloadPacks(), this.reload()]);
    if (!this.unsubscribe && this.connected) {
      try {
        this.unsubscribe = await subscribeBuilding(this.hass, (revision) => {
          if (this.ownRevisions.has(revision) || revision === this.revision) return;
          if (this.pending || this.saving) return; // our own edits win; they are saved next
          void this.reload();
        });
      } catch {
        // older backend or connection loss: changes from elsewhere show after a reload
      }
    }
  }

  /** Load the furniture packs again (after an import or removal). */
  async reloadPacks(): Promise<void> {
    if (!this.hass) return;
    try {
      this.packs = await listPacks(this.hass);
    } catch {
      // backend without packs (before a restart): no pack furniture
      this.packs = [];
    }
    setPacks(this.packs);
    this.host.requestUpdate();
  }

  private async reload(): Promise<void> {
    if (!this.hass) return;
    try {
      const res = await fetchBuilding(this.hass);
      this.building = normalizeBuilding(res.building);
      this.backendVersion = res.version ?? null;
      if (this.draft === null && !this.pending) this.draft = readDraft();
      this.revision = res.revision;
      this.error = null;
    } catch (err) {
      this.error = errorText(err);
    }
    this.host.requestUpdate();
  }
}

function errorText(err: unknown): string {
  if (err && typeof err === "object" && "message" in err) return String((err as { message: unknown }).message);
  return String(err);
}

/** Numeric comparison of "1.10.1"-style versions: negative when a < b, positive when a > b. */
export function compareVersions(a: string, b: string): number {
  const pa = a.split(/[.-]/).map((x) => Number.parseInt(x, 10) || 0);
  const pb = b.split(/[.-]/).map((x) => Number.parseInt(x, 10) || 0);
  for (let i = 0; i < Math.max(pa.length, pb.length); i++) {
    const d = (pa[i] ?? 0) - (pb[i] ?? 0);
    if (d) return d;
  }
  return 0;
}
