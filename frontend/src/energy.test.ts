import assert from "node:assert/strict";
import { test } from "node:test";
import { deviceSensors, energySummary, fieldPowers, findConsumers, flowColor, FLOW_COLORS, flowSegments, gridPoint, meterPosition, powerSensorFor, proposeEnergySensors, readPower, solarCurvePath, solarDayFromStats } from "./energy.ts";
import { proposeField, roofFaces } from "./solar.ts";
import type { Building, Room } from "./model.ts";
import { emptyBuilding, newFloor } from "./model.ts";
import type { HassEntity, HomeAssistant } from "./types.ts";

const st = (entity_id: string, state: string, attributes: Record<string, unknown> = {}): HassEntity => ({ entity_id, state, attributes });
const power = (id: string, w: string, unit = "W") => st(id, w, { device_class: "power", unit_of_measurement: unit });

function rect(id: string, x0: number, z0: number, x1: number, z1: number): Room {
  return { id, name: id, area_id: null, points: [[x0, z0], [x1, z0], [x1, z1], [x0, z1]], floor_material: "wood" };
}

function hassWith(states: HassEntity[], entities: Record<string, { entity_id: string; device_id?: string }> = {}): HomeAssistant {
  return {
    language: "de",
    connection: {} as HomeAssistant["connection"],
    callWS: async () => undefined as never,
    callService: async () => undefined,
    entities,
    states: Object.fromEntries(states.map((s) => [s.entity_id, s])),
  };
}

function house(): Building {
  const b = emptyBuilding();
  const eg = { ...newFloor("eg", "EG", 0), rooms: [rect("a", 0, 0, 4, 3), rect("b", 4, 0, 8, 3)] };
  eg.placements = [
    { entity_id: "switch.tv", x: 7, z: 2, y: null },
    { entity_id: "sensor.fridge_power", x: 6, z: 0.5, y: null },
  ];
  const og = { ...newFloor("og", "OG", 2.75), rooms: [rect("c", 0, 0, 8, 3)] };
  og.placements = [{ entity_id: "sensor.pc_power", x: 1, z: 1, y: null }];
  b.floors = [eg, og];
  b.energy = { ...b.energy, meter: { floor_id: "eg", x: 0.5, z: 1.5 }, grid: "sensor.grid", solar: "sensor.solar" };
  return b;
}

function hassForHouse(): HomeAssistant {
  return hassWith(
    [st("switch.tv", "on"), power("sensor.tv_power", "95"), power("sensor.fridge_power", "0.085", "kW"), power("sensor.pc_power", "70"), power("sensor.grid", "-300"), power("sensor.solar", "1200")],
    { "switch.tv": { entity_id: "switch.tv", device_id: "d1" }, "sensor.tv_power": { entity_id: "sensor.tv_power", device_id: "d1" } },
  );
}

test("power values in W and kW, inverted on request", () => {
  assert.equal(readPower(power("sensor.x", "1.5", "kW")), 1500);
  assert.equal(readPower(power("sensor.x", "-20")), -20);
  assert.equal(readPower(power("sensor.x", "20"), true), -20);
  assert.equal(readPower(st("sensor.x", "unavailable")), null);
});

test("a placed device reports power through a sensor of the same device", () => {
  const hass = hassForHouse();
  assert.equal(powerSensorFor(hass, "switch.tv"), "sensor.tv_power");
  assert.equal(powerSensorFor(hass, "sensor.fridge_power"), "sensor.fridge_power");
  const consumers = findConsumers(hass, house());
  assert.deepEqual(
    consumers.map((c) => [c.id, c.power]),
    [
      ["switch.tv", 95],
      ["sensor.fridge_power", 85],
      ["sensor.pc_power", 70],
    ],
  );
});

test("summary: exporting 300 W while the sun gives 1200 W means 900 W consumption", () => {
  const hass = hassForHouse();
  const b = house();
  const s = energySummary(hass, b, findConsumers(hass, b));
  assert.equal(s.grid, -300);
  assert.equal(s.solar, 1200);
  assert.equal(s.consumption, 900);
  // all consumption comes from the sun
  assert.deepEqual(flowColor("consumer", s), flowColor("solar", s));
});

test("cables run from the meter through the shared wall and add up where they share a path", () => {
  const hass = hassForHouse();
  const b = house();
  const consumers = findConsumers(hass, b);
  const segs = flowSegments({ building: b, consumers, summary: energySummary(hass, b, consumers) });
  const eg = segs.filter((s) => s.floorId === "eg" && s.kind === "consumer");
  // a segment crosses the interior wall at x = 4
  assert.ok(eg.some((s) => (s.a[0] - 4) * (s.b[0] - 4) < 0 && s.a[1] === s.b[1]), "crosses the wall");
  // the crossing carries both consumers in room b
  const crossing = eg.find((s) => (s.a[0] - 4) * (s.b[0] - 4) < 0 && s.a[1] === s.b[1])!;
  assert.equal(crossing.power, 95 + 85);
  // the riser to the upper floor starts at the meter and carries the PC
  const up = eg.find((s) => s.a[0] === 0.5 && s.a[2] === 1.5 && s.b[1] > 2)!;
  assert.equal(up.power, 70);
  assert.ok(segs.some((s) => s.floorId === "og" && s.kind === "consumer"));
  // exporting: the grid cable flows from the meter through the west wall and on to the street
  const grid = segs.filter((s) => s.kind === "export");
  assert.deepEqual([grid[0].a[0], grid[0].a[2]], [0.5, 1.5]);
  assert.ok(grid[0].b[0] < 0 && grid[0].b[0] > -0.3, "leaves through the west wall");
  assert.ok(grid[grid.length - 1].b[0] < -2, "ends out at the street");
  assert.ok(grid.every((s) => s.power === 300));
  // the cable distance grows along the path
  const far = eg.filter((s) => s.a[0] > 4).map((s) => s.dist);
  assert.ok(Math.min(...far) > 3);
});

test("without a meter there are no cables", () => {
  const hass = hassForHouse();
  const b = house();
  b.energy.meter = null;
  const consumers = findConsumers(hass, b);
  assert.deepEqual(flowSegments({ building: b, consumers, summary: energySummary(hass, b, consumers) }), []);
});

test("new power values re-weigh the cached cable routes", () => {
  const hass = hassForHouse();
  const b = house();
  const run = () => {
    const consumers = findConsumers(hass, b);
    return flowSegments({ building: b, consumers, summary: energySummary(hass, b, consumers) });
  };
  const crossing = (segs: ReturnType<typeof run>) => segs.find((s) => s.floorId === "eg" && s.kind === "consumer" && (s.a[0] - 4) * (s.b[0] - 4) < 0 && s.a[1] === s.b[1])!;
  const first = run();
  assert.equal(crossing(first).power, 95 + 85);
  hass.states["sensor.tv_power"] = power("sensor.tv_power", "300");
  const second = run();
  assert.equal(crossing(second).power, 300 + 85);
  // same routes: same pieces in the same order
  assert.deepEqual(
    second.map((s) => [s.a, s.b]),
    first.map((s) => [s.a, s.b]),
  );
});

test("the placed devices bring their sensors: meter = grid, inverters add up, battery with its charge", () => {
  const b = house();
  b.energy = { ...b.energy, meter: null, grid: null, solar: null };
  b.floors[0].furniture.push(
    { id: "m", type: "meter", x: 1, z: 0.2, rotation: 0, w: 0.55, d: 0.21, h: 1.1, variant: null, power: "sensor.grid" },
    { id: "i1", type: "inverter", x: 2, z: 0.2, rotation: 0, w: 0.5, d: 0.2, h: 0.65, variant: null, power: "sensor.pv1" },
    { id: "i2", type: "inverter", x: 3, z: 0.2, rotation: 0, w: 0.5, d: 0.2, h: 0.65, variant: null, power: "sensor.pv2" },
    { id: "bat", type: "home_battery", x: 3, z: 1, rotation: 0, w: 0.6, d: 0.25, h: 1.1, variant: null, power: "sensor.bat", soc: "sensor.soc" },
  );
  assert.deepEqual(deviceSensors(b), { grid: "sensor.grid", gridExport: null, solar: ["sensor.pv1", "sensor.pv2"], battery: ["sensor.bat"], charge: [], batteries: [{ power: "sensor.bat", charge: null }], soc: ["sensor.soc"] });
  assert.deepEqual(meterPosition(b), { floor_id: "eg", x: 1, z: 0.2 });
  const hass = hassWith([power("sensor.grid", "-300"), power("sensor.pv1", "800"), power("sensor.pv2", "400"), power("sensor.bat", "-250"), st("sensor.soc", "64", { device_class: "battery" }), power("sensor.house", "1000")]);
  const s = energySummary(hass, b, []);
  assert.equal(s.grid, -300);
  assert.equal(s.solar, 1200);
  assert.equal(s.battery, -250);
  assert.equal(s.soc, 64);
  // the balance: 1200 from the sun, 300 exported, 250 into the battery
  assert.equal(s.consumption, 650);
  // a house sensor beats the balance; the balance sensors beat the devices
  b.energy.consumption = "sensor.house";
  b.energy.solar = "sensor.pv1";
  const s2 = energySummary(hass, b, []);
  assert.equal(s2.consumption, 1000);
  assert.equal(s2.solar, 800);
});

test("the energy dashboard leads to power sensors of the same devices", () => {
  const hass = hassWith(
    [
      st("sensor.grid_energy", "1234", { device_class: "energy" }),
      power("sensor.grid_power", "500"),
      power("sensor.grid_power_l1", "200"),
      st("sensor.pv_energy_today", "12", { device_class: "energy" }),
      power("sensor.pv_power", "3000"),
      st("sensor.bat_energy_in", "5", { device_class: "energy" }),
      power("sensor.bat_power", "-100"),
      st("sensor.bat_soc", "55", { device_class: "battery" }),
    ],
    Object.fromEntries(
      (
        [
          ["sensor.grid_energy", "grid"],
          ["sensor.grid_power", "grid"],
          ["sensor.grid_power_l1", "grid"],
          ["sensor.pv_energy_today", "pv"],
          ["sensor.pv_power", "pv"],
          ["sensor.bat_energy_in", "bat"],
          ["sensor.bat_power", "bat"],
          ["sensor.bat_soc", "bat"],
        ] as const
      ).map(([id, device_id]) => [id, { entity_id: id, device_id }]),
    ),
  );
  const prefs = {
    energy_sources: [
      { type: "grid", flow_from: [{ stat_energy_from: "sensor.grid_energy" }], flow_to: [] },
      { type: "solar", stat_energy_from: "sensor.pv_energy_today" },
      { type: "battery", stat_energy_from: "sensor.bat_energy_in", stat_energy_to: "sensor.bat_energy_in" },
    ],
  };
  assert.deepEqual(proposeEnergySensors(hass, prefs), { grid: "sensor.grid_power", solar: "sensor.pv_power", battery: "sensor.bat_power", battery_soc: "sensor.bat_soc" });
  // nothing set up: nothing proposed
  assert.deepEqual(proposeEnergySensors(hass, {}), {});
});

test("Pro cables: roof field → inverter, inverter → meter and battery, meter → wallbox and grid", () => {
  const b = house();
  b.energy = { ...b.energy, meter: null, grid: null, solar: null };
  b.settings.roof = { type: "gable", pitch: 35, overhang: 0.4 };
  const face = roofFaces(b)[0];
  b.settings.roof.solar = [{ ...proposeField(face, "pv1"), entity: "sensor.pv1" }];
  const furn = (id: string, type: string, x: number, z: number, extra: Record<string, unknown> = {}) => ({ id, type, x, z, rotation: 0, w: 0.5, d: 0.2, h: 0.65, variant: null, ...extra }) as Building["floors"][0]["furniture"][0];
  b.floors[0].furniture.push(furn("m", "meter", 0.5, 0.3, { power: "sensor.grid" }), furn("inv", "inverter", 7, 0.3, { power: "sensor.pv1" }), furn("bat", "home_battery", 6, 0.3, { power: "sensor.bat" }), furn("wb", "wallbox", 5, 2.5, { power: "sensor.wb" }));
  const hass = hassWith([power("sensor.grid", "-300"), power("sensor.pv1", "1200"), power("sensor.bat", "-250"), power("sensor.wb", "400"), power("sensor.pc_power", "70"), power("sensor.fridge_power", "0.085", "kW")]);
  const consumers = findConsumers(hass, b);
  consumers.push({ id: "wb", powerEntity: "sensor.wb", floorId: "eg", x: 5, z: 2.5, power: 400, wallbox: true });
  const summary = energySummary(hass, b, consumers);
  const segs = flowSegments({ building: b, consumers, summary, battery: { floorId: "eg", x: 6, z: 0.3 }, fieldPower: fieldPowers(hass, b, summary.solar) });
  const kinds = new Set(segs.map((s) => s.kind));
  assert.deepEqual([...kinds].sort(), ["battery", "consumer", "export", "inverter", "solar", "wallbox"]);
  // the roof cable starts on the upper floor at the field and ends at the inverter's top on the ground floor
  const solar = segs.filter((s) => s.kind === "solar");
  assert.equal(solar[0].floorId, "og");
  assert.equal(solar[0].power, 1200);
  const last = solar[solar.length - 1];
  assert.equal(last.floorId, "eg");
  assert.deepEqual(last.b, [7, 1.75, 0.3]);
  // the inverter feeds the meter with what the sun gives beyond charging the battery
  const feed = segs.filter((s) => s.kind === "inverter");
  assert.equal(feed[0].power, 950);
  assert.deepEqual(feed[0].a.slice(0, 1).concat(feed[0].a.slice(2)), [7, 0.3]);
  // the battery charges: its cable runs from the inverter to the battery
  const bat = segs.filter((s) => s.kind === "battery");
  assert.equal(bat[0].power, 250);
  assert.deepEqual([bat[0].a[0], bat[0].a[2]], [7, 0.3]);
  assert.deepEqual([bat[bat.length - 1].b[0], bat[bat.length - 1].b[2]], [6, 0.3]);
  // the wallbox hangs on the meter with its own colour; 300 W go out to the grid
  assert.ok(segs.some((s) => s.kind === "wallbox" && s.power === 400));
  assert.equal(segs.find((s) => s.kind === "export")!.power, 300);
  assert.deepEqual(flowColor("wallbox", summary), FLOW_COLORS.wallbox);
  assert.deepEqual(flowColor("export", summary), FLOW_COLORS.export);
});

test("field powers: own sensor first, then the string's shared by modules, the rest from the plant", () => {
  const b = house();
  b.settings.roof = { type: "gable", pitch: 35, overhang: 0.4 };
  const face = roofFaces(b)[0];
  b.settings.roof.strings = [{ id: "s1", name: "S1", entity: "sensor.s1", inverter: null }];
  b.settings.roof.solar = [
    { ...proposeField(face, "a"), rows: 1, cols: 2, entity: "sensor.a" },
    { ...proposeField(face, "b"), rows: 1, cols: 2, string: "s1" },
    { ...proposeField(face, "c"), rows: 1, cols: 6, string: "s1" },
    { ...proposeField(face, "d"), rows: 2, cols: 5 },
  ];
  const hass = hassWith([power("sensor.a", "500"), power("sensor.s1", "800")]);
  const p = fieldPowers(hass, b, 2300);
  assert.equal(p.get("a"), 500);
  assert.equal(p.get("b"), 200);
  assert.equal(p.get("c"), 600);
  // 2300 - 500 - 800 = 1000 left for the field without a sensor
  assert.equal(p.get("d"), 1000);
});

test("today's solar statistics add up over the sensors: energy, peak and the curve since midnight", () => {
  const now = new Date(2026, 9, 3, 12, 17);
  const midnight = new Date(2026, 9, 3, 0, 0).getTime();
  const slot = (i: number, mean: number) => ({ start: midnight + i * 300000, mean });
  // two inverters: one row as ISO text (older cores), the rest as epoch ms
  const rows = {
    "sensor.pv1": [{ start: new Date(midnight + 100 * 300000).toISOString(), mean: 1000 }, slot(101, 2000), slot(500, 9999)],
    "sensor.pv2": [slot(100, 500), slot(101, 500), slot(102, -5)],
  };
  const day = solarDayFromStats(rows, now);
  assert.equal(day.curve.length, 12 * 12 + 3 + 1);
  assert.equal(day.curve[100], 1500);
  assert.equal(day.curve[101], 2500);
  assert.equal(day.curve[102], 0);
  assert.equal(day.peak, 2500);
  // 1500 W and 2500 W for five minutes each
  assert.ok(Math.abs(day.kwh - (4000 * 5) / 60 / 1000) < 1e-9);
  const path = solarCurvePath(day.curve, day.peak);
  assert.ok(path.line.startsWith("M0.0 42.0"));
  assert.ok(path.area.endsWith("L0 44 Z"));
  assert.ok(path.endX > 110 && path.endX < 115);
});

test("a battery with separate charging and discharging sensors: the charging is taken off", () => {
  const b = house();
  b.energy = { ...b.energy, meter: null, grid: null, solar: null };
  b.floors[0].furniture.push({ id: "bat", type: "home_battery", x: 3, z: 1, rotation: 0, w: 0.6, d: 0.25, h: 1.1, variant: null, power: "sensor.discharge", charge: "sensor.charge", soc: "sensor.soc" });
  const hass = hassWith([power("sensor.discharge", "0"), power("sensor.charge", "800"), st("sensor.soc", "40", { device_class: "battery" })]);
  assert.deepEqual(deviceSensors(b).charge, ["sensor.charge"]);
  // charging with 800 W: negative battery power
  assert.equal(energySummary(hass, b, []).battery, -800);
  hass.states["sensor.charge"] = power("sensor.charge", "0");
  hass.states["sensor.discharge"] = power("sensor.discharge", "500");
  assert.equal(energySummary(hass, b, []).battery, 500);
});

test("a meter with separate import and export sensors: the export is taken off", () => {
  const b = house();
  b.energy = { ...b.energy, meter: null, grid: null, solar: null };
  b.floors[0].furniture.push({ id: "m", type: "meter", x: 1, z: 0.2, rotation: 0, w: 0.55, d: 0.21, h: 1.1, variant: null, power: "sensor.import", export: "sensor.export" });
  const hass = hassWith([power("sensor.import", "0"), power("sensor.export", "900")]);
  assert.equal(energySummary(hass, b, []).grid, -900);
  hass.states["sensor.export"] = power("sensor.export", "0");
  hass.states["sensor.import"] = power("sensor.import", "420");
  assert.equal(energySummary(hass, b, []).grid, 420);
});

test("a grid connection mounted on a wall: the grid cable starts at its height (#256)", () => {
  const b = house();
  const furn = (id: string, type: string, x: number, z: number, extra: Record<string, unknown> = {}) => ({ id, type, x, z, rotation: 0, w: 0.4, d: 0.2, h: 0.5, variant: null, ...extra }) as Building["floors"][0]["furniture"][0];
  b.floors[0].furniture.push(furn("m", "meter", 0.5, 0.3, { power: "sensor.grid" }), furn("gp", "grid_point", -2, 0.3, { mount_y: 2 }));
  assert.equal(gridPoint(b)?.height, 2);
  const hass = hassWith([power("sensor.grid", "500")]);
  const consumers = findConsumers(hass, b);
  const summary = energySummary(hass, b, consumers);
  const grid = flowSegments({ building: b, consumers, summary }).filter((s) => s.kind === "grid");
  const top = Math.max(...grid.flatMap((s) => [s.a[1], s.b[1]]));
  assert.ok(top >= 2 - 1e-6, `grid cable reaches ${top}`);
});

test("a consumer in a room's corner gets its cable square to the wall, not slant (#256)", () => {
  const hass = hassForHouse();
  const b = house();
  // the fridge right in the corner of room b, between the wall and the cable's ring
  b.floors[0].placements[1] = { entity_id: "sensor.fridge_power", x: 7.97, z: 0.02, y: null };
  const consumers = findConsumers(hass, b);
  const segs = flowSegments({ building: b, consumers, summary: energySummary(hass, b, consumers) }).filter((s) => s.floorId === "eg" && s.kind === "consumer");
  assert.ok(segs.length > 0);
  for (const s of segs) assert.ok(Math.abs(s.a[0] - s.b[0]) < 1e-6 || Math.abs(s.a[2] - s.b[2]) < 1e-6, `slant piece ${s.a} → ${s.b}`);
});
