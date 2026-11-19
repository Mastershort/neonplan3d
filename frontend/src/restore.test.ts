import assert from "node:assert/strict";
import { test } from "node:test";
import { restoreBackup, RESTORE_WHOLE_MAX } from "./api.ts";
import { emptyBuilding } from "./model.ts";
import type { HomeAssistant } from "./types.ts";

function fakeHass(fail: string[] = []) {
  const sent: Record<string, unknown>[] = [];
  const hass = {
    callWS: async (msg: Record<string, unknown>) => {
      sent.push(msg);
      if (msg.type === "neonplan3d/backup/import") return { revision: 2, building: msg.building, packs: (msg.packs as unknown[]).length, skipped: [] };
      const id = (JSON.parse(msg.pack as string) as { payload: { id: string } }).payload.id;
      if (fail.includes(id)) throw { code: "wrong_instance" };
      return { id };
    },
  } as unknown as HomeAssistant;
  return { hass, sent };
}

const pack = (id: string, size: number) => ({ id, name: id, source: { id, blob: "x".repeat(size) }, signature: { key: "k", value: "v" } }) as never;

test("a small backup is restored in one message, as before", async () => {
  const { hass, sent } = fakeHass();
  const res = await restoreBackup(hass, { building: emptyBuilding(), packs: [pack("a", 100), pack("b", 100)] });
  assert.equal(sent.length, 1);
  assert.equal(res.packs, 2);
});

test("a backup too large for one message sends the plan first and every pack on its own (#1213)", async () => {
  const { hass, sent } = fakeHass(["b"]);
  const big = Math.ceil(RESTORE_WHOLE_MAX / 2);
  const res = await restoreBackup(hass, { building: emptyBuilding(), packs: [pack("a", big), pack("b", big), pack("c", big), { id: "bare", name: "bare" } as never] });
  assert.deepEqual(sent.map((m) => m.type), ["neonplan3d/backup/import", "neonplan3d/packs/import", "neonplan3d/packs/import", "neonplan3d/packs/import"]);
  assert.deepEqual(sent[0].packs, []);
  assert.ok(sent.every((m) => JSON.stringify(m).length <= RESTORE_WHOLE_MAX));
  assert.equal(res.packs, 2);
  assert.deepEqual(res.skipped, [{ id: "b", reason: "wrong_instance" }, { id: "bare", reason: "unsigned" }]);
});
