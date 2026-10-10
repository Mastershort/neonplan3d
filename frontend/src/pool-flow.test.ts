import assert from "node:assert/strict";
import { test } from "node:test";
import { poolFlow, type PoolFlowDevice } from "./pool-flow.ts";
import type { PoolPipe, PoolPort } from "./model.ts";

// Torsten's garage: skimmer and bottom drain (each with a ball valve) join at the pump, then the sand filter,
// then a split – through the heat pump or the bypass – joining again at a tee and back to two inlets;
// the filter's waste line goes to the drain in the floor.
const ports: PoolPort[] = [
  { id: "sk", kind: "skimmer", x: 0, z: 0 },
  { id: "bd", kind: "drain", x: 2, z: 2 },
  { id: "in1", kind: "inlet", x: 4, z: 0 },
  { id: "in2", kind: "inlet", x: 4, z: 4 },
  { id: "kanal", kind: "waste", x: 9, z: 9 },
];
const devices: PoolFlowDevice[] = [
  { id: "v_sk", type: "pool_valve" },
  { id: "v_bd", type: "pool_valve" },
  { id: "pump", type: "pool_pump" },
  { id: "filter", type: "pool_filter" },
  { id: "split", type: "pool_valve" },
  { id: "wp", type: "pool_heat_pump" },
  { id: "tee", type: "pool_valve" },
];
const pipe = (id: string, from: string, to: string): PoolPipe => ({ id, from, to, floor_id: "eg", points: [] });
const pipes: PoolPipe[] = [
  pipe("s1", "port:sk", "dev:v_sk"),
  pipe("s2", "dev:v_sk", "dev:pump"),
  pipe("d1", "port:bd", "dev:v_bd"),
  pipe("d2", "dev:v_bd", "dev:pump"),
  pipe("p1", "dev:pump", "dev:filter"),
  pipe("f1", "dev:filter", "dev:split"),
  pipe("w1", "dev:split", "dev:wp"),
  pipe("w2", "dev:wp", "dev:tee"),
  pipe("by", "dev:split", "dev:tee"),
  pipe("r1", "dev:tee", "port:in1"),
  pipe("r2", "dev:tee", "port:in2"),
  pipe("waste", "dev:filter", "port:kanal"),
];
const run = (o: Partial<{ pumpOn: boolean; heaterOn: boolean; heating: boolean; devices: PoolFlowDevice[] }> = {}) =>
  poolFlow({ pipes, ports, devices: o.devices ?? devices, pumpOn: o.pumpOn ?? true, heaterOn: o.heaterOn ?? false, heating: o.heating ?? false });
const active = (m: ReturnType<typeof run>) => [...m].filter(([, f]) => f.active).map(([id]) => id).sort();

test("pump off: nothing flows", () => {
  assert.deepEqual(active(run({ pumpOn: false })), []);
});

test("filtering with the heat pump off: suction, filter, bypass, both inlets; cold", () => {
  const m = run();
  assert.deepEqual(active(m), ["by", "d1", "d2", "f1", "p1", "r1", "r2", "s1", "s2"]);
  assert.ok([...m.values()].every((f) => !f.warm));
});

test("the heat pump heats: the water goes through it and comes back warm", () => {
  const m = run({ heaterOn: true, heating: true });
  assert.deepEqual(active(m), ["d1", "d2", "f1", "p1", "r1", "r2", "s1", "s2", "w1", "w2"]);
  assert.equal(m.get("w1")!.warm, false);
  assert.equal(m.get("w2")!.warm, true);
  assert.equal(m.get("r1")!.warm, true);
  // on but not heating (target reached): through the heat pump, still cold
  const idle = run({ heaterOn: true, heating: false });
  assert.equal(idle.get("w2")!.active, true);
  assert.equal(idle.get("r1")!.warm, false);
});

test("backwash sends the water to the waste drain; closed stops it after the pump", () => {
  const back = run({ devices: devices.map((d) => (d.id === "filter" ? { ...d, valve: "backwash" } : d)) });
  assert.deepEqual(active(back), ["d1", "d2", "p1", "s1", "s2", "waste"]);
  assert.equal(back.get("waste")!.waste, true);
  const shut = run({ devices: devices.map((d) => (d.id === "filter" ? { ...d, valve: "closed" } : d)) });
  assert.deepEqual(active(shut), ["d1", "d2", "p1", "s1", "s2"]);
});

test("a closed ball valve stops its line", () => {
  const m = run({ devices: devices.map((d) => (d.id === "v_bd" ? { ...d, open: false } : d)) });
  assert.equal(m.get("d1")!.active, false);
  assert.equal(m.get("d2")!.active, false);
  assert.equal(m.get("s2")!.active, true);
});

test("laid on the wall: ball valves sit in the pipes, T-pieces split and join, a loose end joins nothing", () => {
  const valve = (open = true) => [{ id: "v", kind: "valve" as const, at: 0.5, open }];
  const laid: PoolPipe[] = [
    { ...pipe("s", "port:sk", "dev:pump"), fittings: valve() },
    { ...pipe("d", "port:bd", "dev:pump"), fittings: valve(false) },
    pipe("p1", "dev:pump", "dev:filter"),
    pipe("f1", "dev:filter", "joint:t1"),
    pipe("w1", "joint:t1", "dev:wp"),
    pipe("w2", "dev:wp", "joint:t2"),
    { ...pipe("by", "joint:t1", "joint:t2"), fittings: [{ id: "g", kind: "sight", at: 0.3 }] },
    pipe("r1", "joint:t2", "port:in1"),
    pipe("r2", "joint:t2", "port:in2"),
    pipe("waste", "dev:filter", "port:kanal"),
    // a line not finished yet: from the pump's tee to nowhere, and one from nowhere
    pipe("open1", "joint:t2", ""),
    pipe("open2", "", ""),
  ];
  const devs: PoolFlowDevice[] = [
    { id: "pump", type: "pool_pump" },
    { id: "filter", type: "pool_filter" },
    { id: "wp", type: "pool_heat_pump" },
  ];
  const go = (heaterOn: boolean) => poolFlow({ pipes: laid, ports, devices: devs, pumpOn: true, heaterOn, heating: heaterOn });
  // the drain's valve is closed: only the skimmer sucks; the bypass (with the sight glass) while the heat pump is off
  assert.deepEqual(active(go(false)), ["by", "f1", "open1", "p1", "r1", "r2", "s"]);
  const warm = go(true);
  assert.deepEqual(active(warm), ["f1", "open1", "p1", "r1", "r2", "s", "w1", "w2"]);
  assert.equal(warm.get("r2")!.warm, true);
  assert.equal(warm.get("open2")!.active, false);
});

test("the filter's connections: filtering leaves by the return, backwashing by the waste, whatever the pipes look like", () => {
  // the return and the waste line both lead on to more pipes (no way to tell them apart without the connections)
  const ported: PoolPipe[] = [
    pipe("s", "port:sk", "dev:pump:suction"),
    pipe("p", "dev:pump:pressure", "dev:filter:pump"),
    pipe("r", "dev:filter:return", "joint:t"),
    pipe("w", "dev:filter:waste", "joint:t2"),
    pipe("r2", "joint:t", "port:in1"),
    pipe("w2", "joint:t2", "port:in2"),
  ];
  const devs: PoolFlowDevice[] = [
    { id: "pump", type: "pool_pump" },
    { id: "filter", type: "pool_filter" },
  ];
  const go = (valve: PoolFlowDevice["valve"]) =>
    poolFlow({ pipes: ported, ports, devices: devs.map((d) => (d.id === "filter" ? { ...d, valve } : d)), pumpOn: true, heaterOn: false, heating: false });
  assert.deepEqual(active(go("filter")), ["p", "r", "r2", "s"]);
  const back = go("backwash");
  assert.deepEqual(active(back), ["p", "s", "w", "w2"]);
  assert.equal(back.get("w2")!.waste, true);
});
