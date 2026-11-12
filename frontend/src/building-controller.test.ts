import assert from "node:assert/strict";
import { test } from "node:test";
import { BuildingController, choosePlan, compareVersions, draftKey } from "./building-controller.ts";
import { emptyBuilding, newFloor, type Building } from "./model.ts";
import type { HomeAssistant } from "./types.ts";

test("versions compare numerically, so 1.10.1 is newer than 1.9.2", () => {
  assert.ok(compareVersions("1.10.1", "1.9.2") > 0);
  assert.ok(compareVersions("1.9.2", "1.10.0") < 0);
  assert.equal(compareVersions("1.10.0", "1.10.0"), 0);
  assert.ok(compareVersions("2.0.0", "1.99.99") > 0);
});

test("a plan that is gone (in the bin, a card of a deleted one) shows the main plan", () => {
  const plans = [{ id: "main" }, { id: "pgarage" }];
  assert.equal(choosePlan("pgarage", plans), "pgarage");
  assert.equal(choosePlan("pgone", plans), "main");
  assert.equal(choosePlan(null, plans), "main");
  // an older backend lists no plans: only the main one
  assert.equal(choosePlan("pgarage", []), "main");
  assert.equal(draftKey("main"), "neonplan3d.unsaved");
  assert.equal(draftKey("pgarage"), "neonplan3d.unsaved.pgarage");
});

/** A backend with two plans: what was asked and saved, and the subscriptions per plan. */
function fakeHass() {
  const named = (name: string): Building => ({ ...emptyBuilding(), floors: [newFloor("f1", name, 0)] });
  const plans: Record<string, { building: Building; revision: number }> = {
    main: { building: named("Haus"), revision: 1 },
    pgarage: { building: named("Garage"), revision: 1 },
  };
  const calls: Record<string, unknown>[] = [];
  const subs: { msg: Record<string, unknown>; cb: (ev: unknown) => void }[] = [];
  const hass = {
    async callWS(msg: Record<string, unknown>) {
      calls.push(msg);
      const plan = (msg.plan as string) ?? "main";
      switch (msg.type) {
        case "neonplan3d/plans/list":
          return { plans: Object.keys(plans).map((id) => ({ id, name: id, icon: null, site: null })), trash: [], locate_plan: "main" };
        case "neonplan3d/packs/list":
          return { packs: [] };
        case "neonplan3d/building/get":
          return { building: plans[plan].building, revision: plans[plan].revision, plan };
        case "neonplan3d/building/save":
          if (typeof msg.base_revision === "number" && msg.base_revision !== plans[plan].revision) throw { code: "stale_plan", message: "saved elsewhere" };
          plans[plan] = { building: msg.building as Building, revision: plans[plan].revision + 1 };
          return { revision: plans[plan].revision };
        default:
          return {};
      }
    },
    connection: {
      async subscribeMessage(cb: (ev: unknown) => void, msg: Record<string, unknown>) {
        const sub = { msg, cb };
        subs.push(sub);
        return async () => {
          subs.splice(subs.indexOf(sub), 1);
        };
      },
    },
  } as unknown as HomeAssistant;
  return { hass, plans, calls, subs };
}

function host() {
  return { addController() {}, removeController() {}, requestUpdate() {}, updateComplete: Promise.resolve(true) };
}

test("switching plans saves the open edits to their own plan first, then follows the new one", async () => {
  (globalThis as { window?: unknown }).window ??= new EventTarget();
  const { hass, plans, calls, subs } = fakeHass();
  const c = new BuildingController(host() as never);
  c.setHass(hass);
  await c.switchPlan("pgarage");
  c.hostConnected();
  await new Promise((r) => setTimeout(r, 10));
  assert.equal(c.planId, "pgarage");
  assert.equal(c.building?.floors[0].name, "Garage");

  // an edit in the garage, then off to the house before the save was due
  const edited = structuredClone(c.building!);
  edited.floors[0].name = "Werkstatt";
  c.edit(edited);
  await c.switchPlan("main");
  assert.equal(plans.pgarage.building.floors[0].name, "Werkstatt");
  assert.equal(plans.main.building.floors[0].name, "Haus");
  assert.equal(c.building?.floors[0].name, "Haus");
  // the main plan is asked for without naming it (an older backend does not know the field)
  const save = calls.find((m) => m.type === "neonplan3d/building/save")!;
  assert.equal(save.plan, "pgarage");
  assert.ok(calls.filter((m) => m.type === "neonplan3d/building/get").some((m) => !("plan" in m)));
  // one building subscription, the new plan's
  const followed = subs.filter((s) => s.msg.type === "neonplan3d/building/subscribe");
  assert.equal(followed.length, 1);
  assert.equal(followed[0].msg.plan, undefined);
  c.hostDisconnected();
});

test("an edit made on an older plan does not overwrite one saved elsewhere meanwhile; it waits as a draft (#1059)", async () => {
  (globalThis as { window?: unknown }).window ??= new EventTarget();
  const store = new Map<string, string>();
  (globalThis as { localStorage?: unknown }).localStorage ??= { getItem: (k: string) => store.get(k) ?? null, setItem: (k: string, v: string) => void store.set(k, v), removeItem: (k: string) => void store.delete(k) };
  const { hass, plans, calls } = fakeHass();
  const c = new BuildingController(host() as never);
  c.setHass(hass);
  c.hostConnected();
  await new Promise((r) => setTimeout(r, 10));
  assert.equal(c.building?.floors[0].name, "Haus");
  // the PC saves meanwhile; this device (asleep) did not hear of it
  plans.main = { building: { ...plans.main.building, floors: [newFloor("f1", "Neuer Stand", 0)] }, revision: 2 };
  const edited = structuredClone(c.building!);
  edited.floors[0].name = "Alter Stand geändert";
  c.edit(edited);
  await c.flush();
  // refused: the newer plan stays and is shown, the edit waits as a draft
  assert.equal(plans.main.building.floors[0].name, "Neuer Stand");
  assert.equal(c.building?.floors[0].name, "Neuer Stand");
  assert.equal(c.draft?.conflict, true);
  assert.equal(c.draft?.building.floors[0].name, "Alter Stand geändert");
  assert.equal(c.saveState, "idle");
  assert.equal(calls.filter((m) => m.type === "neonplan3d/building/save")[0].base_revision, 1);
  // taken over on purpose: saved over the newer plan
  c.restoreDraft();
  await c.flush();
  assert.equal(plans.main.building.floors[0].name, "Alter Stand geändert");
  assert.equal(plans.main.revision, 3);
  c.hostDisconnected();
});
