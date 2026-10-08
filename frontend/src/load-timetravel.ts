// Time travel (Pro): loads its bundle only when it starts, and keeps the session for the panel and the card.

import type * as TimeTravelBundle from "./timetravel/entry.ts";
import type { StartOptions, TimeTravelSession } from "./timetravel/types.ts";
import type { HomeAssistant } from "./types.ts";

/** Content hash of the time travel bundle, set by the build (see build.mjs). */
declare const __FP3D_TIMETRAVEL_HASH__: string;

let loading: Promise<typeof TimeTravelBundle> | undefined;

export function loadTimeTravel(): Promise<typeof TimeTravelBundle> {
  const url = new URL(`./neonplan3d-timetravel.js?v=${__FP3D_TIMETRAVEL_HASH__}`, new URL(import.meta.url)).href;
  // a failed download (a short network hiccup) may be tried again
  loading ??= (import(/* @vite-ignore */ url) as Promise<typeof TimeTravelBundle>).catch((err) => {
    loading = undefined;
    throw err;
  });
  return loading;
}

/** The time travel of a panel or card: started, replaying, or off. */
export class TimeTravel {
  session: TimeTravelSession | null = null;
  /** The bundle is on its way. */
  starting = false;
  private readonly host: { requestUpdate(): void };

  constructor(host: { requestUpdate(): void }) {
    this.host = host;
  }

  get active(): boolean {
    return this.starting || !!this.session;
  }

  start(opts: Omit<StartOptions, "onChange" | "onExit">): void {
    if (this.active) return;
    this.starting = true;
    this.host.requestUpdate();
    loadTimeTravel().then(
      (m) => {
        if (!this.starting) return;
        this.starting = false;
        this.session = m.startTimeTravel({ ...opts, onChange: () => this.host.requestUpdate(), onExit: () => this.stop() });
        this.host.requestUpdate();
      },
      (err: unknown) => {
        this.starting = false;
        console.error("NeonPlan 3D: time travel failed to load", err);
        this.host.requestUpdate();
      },
    );
  }

  stop(): void {
    if (!this.active) return;
    this.starting = false;
    this.session?.dispose();
    this.session = null;
    this.host.requestUpdate();
  }

  /** Home Assistant to show: the replayed one while travelling, else the live one. */
  hass(live: HomeAssistant): HomeAssistant {
    return this.session?.hass ?? live;
  }
}
