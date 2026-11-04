// The other floor plans kept at hand, read only, while one is shown: for the overview of all plans, their warnings,
// and the property view that puts them together. Loaded once, again when one of them is saved.
import type { ReactiveControllerHost } from "lit";
import { fetchBuilding, MAIN_PLAN, subscribeAnyPlan, type PlanEntry } from "./api.ts";
import { normalizeBuilding, type Building } from "./model.ts";
import { composeSite } from "./site.ts";
import type { HomeAssistant } from "./types.ts";

/** What the watch needs of the controller: the plans and the one shown. */
interface Shown {
  plans: PlanEntry[];
  planId: string;
  building: Building | null;
}

export class OtherPlans {
  /** The buildings of the plans not shown, by id. */
  others = new Map<string, Building>();
  private watched = "";
  private unsubscribe: (() => Promise<void>) | null = null;
  private siteOf: { key: unknown[]; to: Building } | null = null;
  private readonly host: ReactiveControllerHost;

  constructor(host: ReactiveControllerHost) {
    this.host = host;
  }

  /** Follow the other plans of the list (call on every update; it only works when the list or the plan changed). */
  watch(hass: HomeAssistant | undefined, shown: Shown): void {
    const ids = shown.plans.map((p) => p.id).filter((id) => id !== shown.planId);
    const key = `${shown.planId}|${ids.join(",")}`;
    if (!hass || key === this.watched) return;
    this.watched = key;
    const load = (id: string) =>
      fetchBuilding(hass, id).then(
        (res) => {
          if (!shown.plans.some((p) => p.id === id) || id === shown.planId) return;
          this.others = new Map(this.others).set(id, normalizeBuilding(res.building));
          this.host.requestUpdate();
        },
        () => undefined,
      );
    this.others = new Map([...this.others].filter(([id]) => ids.includes(id)));
    for (const id of ids) void load(id);
    if (ids.length && !this.unsubscribe)
      void subscribeAnyPlan(hass, (plan) => {
        if (plan !== shown.planId && shown.plans.some((p) => p.id === plan)) void load(plan);
      }).then(
        (un) => (this.unsubscribe = un),
        () => undefined,
      );
  }

  stop(): void {
    void this.unsubscribe?.();
    this.unsubscribe = null;
    this.watched = "";
  }

  /** Every plan's building: the one shown, and the others as loaded. */
  all(shown: Shown): Map<string, Building> {
    const all = new Map(this.others);
    if (shown.building) all.set(shown.planId, shown.building);
    return all;
  }

  /** The property as one building: the main plan with the plans placed beside it (null until all are loaded). */
  site(shown: Shown): Building | null {
    const all = this.all(shown);
    const main = all.get(MAIN_PLAN);
    if (!main) return null;
    const others = shown.plans.filter((p) => p.id !== MAIN_PLAN && p.site?.on).map((p) => ({ id: p.id, site: p.site, building: all.get(p.id) }));
    if (others.some((o) => !o.building)) return null;
    const key = [main, ...others.flatMap((o) => [o.building, o.site?.x, o.site?.y, o.site?.rot])];
    if (this.siteOf && this.siteOf.key.length === key.length && this.siteOf.key.every((k, i) => k === key[i])) return this.siteOf.to;
    const to = composeSite(main, others.map((o) => ({ id: o.id, site: o.site, building: o.building! })));
    this.siteOf = { key, to };
    return to;
  }
}
