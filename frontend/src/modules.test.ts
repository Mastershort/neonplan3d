import assert from "node:assert/strict";
import { test } from "node:test";
import { clearModules, loadedModules, MODULE_API, moduleFurnitureFields, moduleMenuSheets, moduleRoomFields, moduleRoomSheets, moduleSettings, modulesWithSettings, moduleVoice, moduleWaits, registerModule, syncModules, type ModuleHost } from "./modules.ts";

const host = {
  api: MODULE_API,
  hass: () => ({}) as never,
  building: () => null,
  language: () => "de",
  devices: () => [],
  findDevice: () => null,
  openings: () => [],
  energy: () => null,
  consumers: () => [{ id: "switch.a", entity: "sensor.a_w", name: "Waschmaschine", watts: 430 }],
} as ModuleHost;

test("voice modules are asked in turn; the first answer wins, a failing one is skipped", async () => {
  clearModules();
  registerModule({ api: MODULE_API, id: "broken", voice: () => { throw new Error("boom"); } });
  registerModule({ api: MODULE_API, id: "quiet", voice: () => null });
  registerModule({ api: MODULE_API, id: "answers", voice: (s, h) => (s.includes("strom") ? { text: `${h.consumers()[0].name}: ${h.consumers()[0].watts} W`, highlight: ["switch.a"] } : null) });
  assert.deepEqual(loadedModules().map((m) => m.id), ["broken", "quiet", "answers"]);
  const a = await moduleVoice("was zieht strom", host);
  assert.equal(a?.text, "Waschmaschine: 430 W");
  assert.deepEqual(a?.highlight, ["switch.a"]);
  assert.equal(await moduleVoice("wie spät ist es", host), null);
  clearModules();
  assert.equal(loadedModules().length, 0);
});

test("only module code an admin approved is fetched and run", async () => {
  clearModules();
  const asked: string[] = [];
  const hass = { callWS: async (msg: { pack_id: string }) => (asked.push(msg.pack_id), Promise.reject(new Error("not_approved"))) } as never;
  await syncModules(hass, [
    { id: "a", module: { api: MODULE_API, kind: "voice" } },
    { id: "b", module: { api: MODULE_API, kind: "voice", approved: false } },
  ]);
  assert.deepEqual(asked, []);
  assert.equal(moduleWaits({ module: { approved: false } }), true);
  assert.equal(moduleWaits({ module: { approved: true }, pending: { release: 2 } }), true);
  assert.equal(moduleWaits({ module: { approved: true } }), false);
  assert.equal(moduleWaits({}), false);
});

test("a module's fields on a piece of furniture and its own settings; a failing module adds none", () => {
  clearModules();
  registerModule({ api: MODULE_API, id: "broken", furnitureFields: () => { throw new Error("boom"); }, settings: () => { throw new Error("boom"); } });
  registerModule({ api: MODULE_API, id: "setup", furnitureFields: (_h, f) => (f.type === "radiator" ? [{ kind: "heading", text: "Heizkörper" }] : []), settings: () => [{ kind: "text", text: "Demo" }] });
  const radiator = { id: "r1", type: "radiator", x: 0, z: 0, rotation: 0, w: 1, d: 0.1, h: 0.6, variant: null };
  assert.deepEqual(moduleFurnitureFields(host, radiator), [{ kind: "heading", text: "Heizkörper" }]);
  assert.deepEqual(moduleFurnitureFields(host, { ...radiator, type: "sofa" }), []);
  assert.deepEqual(moduleSettings("setup", host), [{ kind: "text", text: "Demo" }]);
  assert.deepEqual(moduleSettings("broken", host), []);
  assert.deepEqual(moduleSettings("missing", host), []);
  clearModules();
});

test("modules offer sheets in a room and in the ⭐ menu, fields in a room's form, settings for the ⚙ menu", () => {
  clearModules();
  registerModule({
    api: MODULE_API,
    id: "test.sheets",
    roomSheets: (_h, place) => [{ id: "a", icon: "📢", title: place.roomId }],
    menuSheets: () => [{ id: "a", icon: "📢", title: "menu" }],
    roomFields: (_h, room) => [{ kind: "text", text: room.name }],
    settings: () => [{ kind: "lines", label: "Sätze", value: ["x"], set: () => {} }],
  });
  registerModule({ api: MODULE_API, id: "test.broken", roomSheets: () => { throw new Error("no"); } });
  const host = {} as ModuleHost;
  assert.deepEqual(moduleRoomSheets(host, { floorId: "eg", roomId: "kids" }).map((s) => s.title), ["kids"]);
  assert.deepEqual(moduleMenuSheets(host).map((s) => s.title), ["menu"]);
  assert.deepEqual(moduleRoomFields(host, { id: "r", name: "Bad", points: [] } as never, {} as never), [{ kind: "text", text: "Bad" }]);
  assert.deepEqual(modulesWithSettings(), ["test.sheets"]);
  clearModules();
});
