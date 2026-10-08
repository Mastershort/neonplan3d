// Invented history for the preview's time travel: a week of an ordinary household, relative to now and the
// same on every load (seeded). It answers neonplan3d/timetravel/history in the compact format of the
// integration (see custom_components/neonplan3d/timetravel_rows.py). Nobody's real data.

const DAYS = 7;
const STEP = 300;

/** A small seeded random generator (mulberry32). */
function rng(seed) {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/** Local midnight `back` days ago (ms). */
function midnight(back) {
  const d = new Date();
  d.setHours(0, 0, 0, 0);
  d.setDate(d.getDate() - back);
  return d.getTime();
}

/** Hours of the local day as a fraction (7.5 = 07:30). */
function hourOf(t) {
  const d = new Date(t);
  return d.getHours() + d.getMinutes() / 60 + d.getSeconds() / 3600;
}

const at = (day, h, jitterMin = 0, r = Math.random) => day + h * 3600000 + Math.round((r() * 2 - 1) * jitterMin) * 60000;

/** Every state change of the simulated entities over the last week: id -> [{t, s, a}] in time order. */
function buildEvents() {
  const ev = {};
  const add = (id, t, s, a = null) => (ev[id] ??= []).push({ t, s, a });
  const span = (id, from, to, on = "on", off = "off", aOn = null) => {
    add(id, from, on, aOn);
    add(id, to, off);
  };
  const light = (id, from, to, attrs) => span(id, from, to, "on", "off", attrs);
  // everything starts in a quiet night state a week ago
  const start = midnight(DAYS) - 3600000;
  for (const id of ["light.wohnzimmer_decke", "light.stehlampe", "light.kueche", "light.schlafzimmer", "light.nachttisch", "light.bad", "light.flur", "light.kinderzimmer", "light.schreibtisch", "light.esstisch", "light.kueche_links", "light.kueche_rechts", "light.garten", "light.pool", "light.haustuer", "light.led_band"]) add(id, start, "off");
  for (const id of ["binary_sensor.haustuer", "binary_sensor.kueche_fenster", "binary_sensor.schlafzimmer_fenster", "binary_sensor.schlafzimmer_kipp", "binary_sensor.wohnzimmer_terrasse", "binary_sensor.wohnzimmer_terrasse_2", "binary_sensor.bad_fenster", "binary_sensor.bad_wasser", "binary_sensor.kueche_rauch", "binary_sensor.flur_bewegung", "binary_sensor.kueche_praesenz", "binary_sensor.kuehlschrank_tuer", "binary_sensor.gefrierfach_tuer", "binary_sensor.wohnzimmer_kamera_bewegung", "binary_sensor.wohnzimmer_kamera_person", "switch.kaffeemaschine"]) add(id, start, "off");
  add("binary_sensor.bett_links", start, "on");
  add("binary_sensor.bett_rechts", start, "on");
  add("binary_sensor.garage_auto", start, "on");
  add("cover.wohnzimmer", start, "closed", { current_position: 0 });
  add("cover.kueche", start, "closed", { current_position: 0 });
  add("cover.garagentor", start, "closed", { current_position: 0 });
  add("vacuum.saugi", start, "docked");
  add("device_tracker.zweitwagen", start, "home");
  add("lock.van", start, "locked");
  add("alarm_control_panel.haus", start, "disarmed");
  add("weather.zuhause", start, "clear-night", { cloud_coverage: 10, wind_speed: 6, wind_speed_unit: "km/h" });
  add("media_player.fernseher", start, "off");
  add("media_player.kueche_lautsprecher", start, "idle", { volume_level: 0.45 });
  add("media_player.bad_lautsprecher", start, "idle", { volume_level: 0.3 });
  add("climate.wohnzimmer", start, "heat", { hvac_action: "idle", current_temperature: 19.6, temperature: 18 });
  add("climate.schlafzimmer", start, "heat", { hvac_action: "idle", current_temperature: 17.8, temperature: 17 });

  const RADIO = ["Morgenmagazin", "Nachrichten", "Frühstücksradio", "Wetter und Verkehr"];
  const SHOWS = ["Serie", "Tatort", "Dokumentation", "Fußball", "Quiz am Abend"];
  for (let back = DAYS; back >= 0; back--) {
    const day = midnight(back);
    const r = rng(1000 + back);
    const weekday = new Date(day).getDay();
    // the last two days: someone left in a hurry – the hall light stays on and the kitchen window open until noon
    const hurry = back <= 1;
    // morning: bedside lamp, bathroom, warm kitchen light from 20 to 60 %, coffee, radio
    light("light.nachttisch", at(day, 6.3, 3, r), at(day, 6.6, 3, r), { brightness: 51, color_mode: "color_temp", color_temp_kelvin: 2700 });
    span("binary_sensor.bett_links", at(day, 6.35, 3, r), at(day, 23.25, 8, r), "off", "on");
    span("binary_sensor.bett_rechts", at(day, 6.5, 5, r), at(day, 23.2, 8, r), "off", "on");
    light("light.bad", at(day, 6.58, 2, r), at(day, 7.08, 2, r), { brightness: 220, color_mode: "color_temp", color_temp_kelvin: 4000 });
    const k0 = at(day, 6.5, 2, r);
    for (let i = 0; i <= 8; i++) add("light.kueche", k0 + i * 225000, "on", { brightness: Math.round((20 + i * 5) * 2.55), color_mode: "color_temp", color_temp_kelvin: 2700 });
    add("light.kueche", at(day, 8.17, 4, r), "off");
    light("light.flur", at(day, 6.67, 2, r), hurry ? at(day, 17.5, 2, r) : at(day, 7.75, 2, r), { brightness: 120, color_mode: "color_temp", color_temp_kelvin: 3000 });
    span("switch.kaffeemaschine", at(day, 6.85, 2, r), at(day, 7.15, 2, r));
    const radio = RADIO[back % RADIO.length];
    add("media_player.kueche_lautsprecher", at(day, 7.0, 3, r), "playing", { media_title: radio, app_name: "Radio", volume_level: 0.35 });
    add("media_player.kueche_lautsprecher", at(day, 7.35, 3, r), "playing", { media_title: "Blue Train", media_artist: "John Coltrane", app_name: "Radio", volume_level: 0.5 });
    const radioOff = at(day, 7.67, 3, r);
    add("media_player.kueche_lautsprecher", radioOff, "idle", { volume_level: 0.35 });
    add("media_player.bad_lautsprecher", at(day, 6.6, 2, r), "playing", { media_title: radio, app_name: "Radio", volume_level: 0.3 });
    add("media_player.bad_lautsprecher", at(day, 7.08, 2, r), "idle", { volume_level: 0.3 });
    span("binary_sensor.kueche_praesenz", at(day, 6.52, 2, r), at(day, 7.7, 2, r));
    for (const h of [6.55, 7.05, 12.4, 18.6, 19.2]) span("binary_sensor.kuehlschrank_tuer", at(day, h, 3, r), at(day, h, 3, r) + 25000);
    // the bedroom window tilted for airing
    const tilt = at(day, 6.75, 3, r);
    const shut = at(day, 7.33, 3, r);
    span("binary_sensor.schlafzimmer_fenster", tilt, shut);
    span("binary_sensor.schlafzimmer_kipp", tilt, shut);
    span("binary_sensor.kueche_fenster", at(day, 7.1, 4, r), hurry ? at(day, 12.1, 4, r) : at(day, 7.3, 4, r));
    // heating in the morning and the evening
    add("climate.wohnzimmer", at(day, 5.5, 0, r), "heat", { hvac_action: "heating", current_temperature: 19.5, temperature: 21.5 });
    add("climate.wohnzimmer", at(day, 7.0, 0, r), "heat", { hvac_action: "idle", current_temperature: 21.4, temperature: 18 });
    add("climate.wohnzimmer", at(day, 17.0, 0, r), "heat", { hvac_action: "heating", current_temperature: 19.9, temperature: 21.5 });
    add("climate.wohnzimmer", at(day, 21.0, 0, r), "heat", { hvac_action: "idle", current_temperature: 21.6, temperature: 18 });
    add("climate.schlafzimmer", at(day, 5.5, 0, r), "heat", { hvac_action: "heating", current_temperature: 17.6, temperature: 19 });
    add("climate.schlafzimmer", at(day, 7.0, 0, r), "heat", { hvac_action: "idle", current_temperature: 18.9, temperature: 17 });
    // blinds up around sunrise, down around sunset (with a moment of moving)
    for (const [id, up, down] of [["cover.wohnzimmer", 7.4, 18.75], ["cover.kueche", 7.45, 18.8]]) {
      const u = at(day, up, 3, r);
      add(id, u, "opening", { current_position: 0 });
      add(id, u + 25000, "open", { current_position: 100 });
      const d = at(day, down, 3, r);
      add(id, d, "closing", { current_position: 100 });
      add(id, d + 25000, "closed", { current_position: 0 });
    }
    // leaving for work: the front door at 07:42, the garage, the car away until the evening
    const out = at(day, 7.7, 0, r);
    span("binary_sensor.haustuer", out, out + 40000);
    span("binary_sensor.flur_bewegung", out - 60000, out + 30000);
    const g1 = at(day, 7.8, 2, r);
    add("cover.garagentor", g1, "opening", { current_position: 0 });
    add("cover.garagentor", g1 + 15000, "open", { current_position: 100 });
    add("cover.garagentor", g1 + 90000, "closing", { current_position: 100 });
    add("cover.garagentor", g1 + 105000, "closed", { current_position: 0 });
    add("binary_sensor.garage_auto", g1 + 60000, "off");
    const g2 = at(day, 17.45, 6, r);
    add("cover.garagentor", g2, "opening", { current_position: 0 });
    add("cover.garagentor", g2 + 15000, "open", { current_position: 100 });
    add("binary_sensor.garage_auto", g2 + 50000, "on");
    add("cover.garagentor", g2 + 80000, "closing", { current_position: 100 });
    add("cover.garagentor", g2 + 95000, "closed", { current_position: 0 });
    const home = g2 + 150000;
    // the second car (its own tracker, home or away only) runs errands on weekdays
    if (weekday >= 1 && weekday <= 5) {
      add("device_tracker.zweitwagen", at(day, 8.2, 5, r), "not_home");
      add("device_tracker.zweitwagen", at(day, 16.9, 5, r), "home");
    }
    span("binary_sensor.haustuer", home, home + 30000);
    span("binary_sensor.flur_bewegung", home, home + 45000);
    // the robot at ten, the washing machine from eleven to twenty to one, home office upstairs
    // the robot reports the room it cleans (the trail through the rooms follows it)
    const v0 = at(day, 10.0, 1, r);
    ["Wohnzimmer", "Küche", "Flur", "Bad"].forEach((room, i) => add("vacuum.saugi", v0 + i * 690000, "cleaning", { current_room: room }));
    add("vacuum.saugi", at(day, 10.8, 2, r), "returning");
    add("vacuum.saugi", at(day, 10.87, 2, r), "docked");
    span("binary_sensor.wohnzimmer_kamera_bewegung", at(day, 10.1, 1, r), at(day, 10.7, 1, r));
    light("light.schreibtisch", at(day, 8.6, 5, r), at(day, 12.2, 5, r), { brightness: 200, color_mode: "color_temp", color_temp_kelvin: 4500 });
    light("light.schreibtisch", at(day, 13.2, 5, r), at(day, 16.8, 5, r), { brightness: 200, color_mode: "color_temp", color_temp_kelvin: 4500 });
    // the bathroom window open in the afternoon; at three a shower comes down for forty minutes
    span("binary_sensor.bad_fenster", at(day, 14.5, 4, r), at(day, 16.0, 4, r));
    add("weather.zuhause", day + 7 * 3600000, "partlycloudy", { cloud_coverage: 40, wind_speed: 9, wind_speed_unit: "km/h" });
    add("weather.zuhause", day + 11 * 3600000, "sunny", { cloud_coverage: 15, wind_speed: 11, wind_speed_unit: "km/h" });
    add("weather.zuhause", day + 14.5 * 3600000, "cloudy", { cloud_coverage: 80, wind_speed: 18, wind_speed_unit: "km/h" });
    add("weather.zuhause", day + 15 * 3600000, "rainy", { cloud_coverage: 95, wind_speed: 22, wind_speed_unit: "km/h" });
    add("weather.zuhause", day + (15 + 40 / 60) * 3600000, "cloudy", { cloud_coverage: 70, wind_speed: 14, wind_speed_unit: "km/h" });
    add("weather.zuhause", day + 17 * 3600000, "partlycloudy", { cloud_coverage: 35, wind_speed: 8, wind_speed_unit: "km/h" });
    add("weather.zuhause", day + 19.5 * 3600000, "clear-night", { cloud_coverage: 10, wind_speed: 5, wind_speed_unit: "km/h" });
    // the water sensor in the bathroom on Saturday morning
    if (weekday === 6) span("binary_sensor.bad_wasser", at(day, 10 + 5 / 60, 0, r), at(day, 10.4, 0, r));
    // evening: kitchen and dining, children's room, living room, TV from quarter past eight
    light("light.kueche_links", at(day, 18.0, 5, r), at(day, 20.9, 5, r), { brightness: 230, color_mode: "hs", rgb_color: [255, 70, 40] });
    light("light.kueche_rechts", at(day, 18.0, 5, r), at(day, 20.9, 5, r), { brightness: 230, color_mode: "hs", rgb_color: [60, 110, 255] });
    light("light.esstisch", at(day, 18.5, 4, r), at(day, 19.6, 4, r), { brightness: 140, color_mode: "color_temp", color_temp_kelvin: 2700 });
    light("light.kinderzimmer", at(day, 18.9, 5, r), at(day, 20.25, 5, r), { brightness: 150, color_mode: "color_temp", color_temp_kelvin: 3000 });
    light("light.wohnzimmer_decke", at(day, 18.6, 5, r), at(day, 20.25, 3, r), { brightness: 180, color_mode: "color_temp", color_temp_kelvin: 2700 });
    light("light.stehlampe", at(day, 19.5, 5, r), at(day, 23.1, 4, r), { brightness: 90, color_mode: "hs", rgb_color: [255, 150, 60] });
    light("light.garten", at(day, 18.8, 2, r), at(day, 23.5, 2, r), { brightness: 170, color_mode: "color_temp", color_temp_kelvin: 2700 });
    light("light.pool", at(day, 18.8, 2, r), at(day, 22.5, 2, r), { brightness: 200, color_mode: "hs", rgb_color: [40, 200, 255] });
    light("light.haustuer", at(day, 18.8, 2, r), at(day, 23.17, 1, r), { brightness: 200, color_mode: "color_temp", color_temp_kelvin: 2700 });
    const tv = at(day, 20.25, 2, r);
    add("media_player.fernseher", tv, "playing", { app_name: "Netflix", media_title: SHOWS[back % SHOWS.length], volume_level: 0.35 });
    add("media_player.fernseher", tv + 3600000, "playing", { app_name: "Netflix", media_title: SHOWS[back % SHOWS.length], volume_level: 0.45 });
    add("media_player.fernseher", at(day, 22.5, 4, r), "off");
    light("light.led_band", tv, at(day, 22.5, 4, r), { brightness: 160, color_mode: "hs", rgb_color: [120, 90, 255] });
    light("light.bad", at(day, 22.6, 3, r), at(day, 22.9, 3, r), { brightness: 220, color_mode: "color_temp", color_temp_kelvin: 4000 });
    light("light.nachttisch", at(day, 22.9, 3, r), at(day, 23.17, 2, r), { brightness: 60, color_mode: "color_temp", color_temp_kelvin: 2700 });
    // motion in the hall at night – only in the most recent night
    if (back === 0) span("binary_sensor.flur_bewegung", day + (2 + 14 / 60) * 3600000, day + (2 + 15 / 60) * 3600000);
  }
  for (const list of Object.values(ev)) list.sort((p, q) => p.t - q.t);
  return ev;
}

/** Smooth daily curves for the numeric sensors (W, °C, %), with a little seeded wobble. */
function numeric(id, t) {
  const h = hourOf(t);
  const wob = Math.sin(t / 700000) * 0.5 + Math.sin(t / 2300000) * 0.5;
  const rainy = h >= 15 && h < 15 + 40 / 60;
  const sun = Math.max(0, Math.sin((Math.PI * (h - 7.4)) / 11.3)) ** 1.5 * (rainy ? 0.15 : h > 14.5 && h < 17 ? 0.5 : 1);
  const heating = (h >= 5.5 && h < 7) || (h >= 17 && h < 21);
  const warmth = (from, peak, low) => {
    // rises while heating, cools slowly afterwards
    const since = (x) => (h >= x ? h - x : h + 24 - x);
    if (heating) return low + (peak - low) * (1 - Math.exp(-since(h < 12 ? 5.5 : 17) / 0.8));
    const after = h < 17 ? since(7) : since(21);
    return low + (peak - low) * Math.exp(-after / 4);
  };
  const tv = h >= 20.25 && h < 22.5;
  const wash = h >= 11 && h < 12 + 40 / 60;
  const office = (h >= 8.6 && h < 12.2) || (h >= 13.2 && h < 16.8);
  switch (id) {
    case "sensor.wohnzimmer_temperatur":
      return warmth(0, 21.6, 19.3) + wob * 0.05;
    case "sensor.kueche_temperatur":
      return warmth(0, 22.4, 19.8) + (h >= 18 && h < 19.5 ? 1.2 : 0) + wob * 0.05;
    case "sensor.schlafzimmer_temperatur":
      return 17.6 + (h >= 5.5 && h < 8 ? 1.2 : 0) - (h >= 6.75 && h < 7.4 ? 0.8 : 0) + wob * 0.05;
    case "sensor.bad_temperatur":
      return 21.5 + (h >= 6.6 && h < 7.3 ? 2.5 : 0) + (rainy ? -1.5 : 0) + wob * 0.05;
    case "sensor.flur_temperatur":
      return 19 + wob * 0.1;
    case "sensor.wohnzimmer_feuchte":
      return 47 + (rainy ? 8 : 0) + wob * 2;
    case "sensor.pv_leistung":
      return Math.round(5200 * sun);
    case "sensor.balkon_leistung":
      return Math.round(600 * sun);
    case "sensor.fernseher_leistung":
      return tv ? 95 : 1;
    case "sensor.kaffeemaschine_leistung":
      return h >= 6.85 && h < 7.15 ? 0.9 : 0;
    case "sensor.kuehlschrank_leistung":
      return Math.floor(t / 1200000) % 3 === 0 ? 85 : 2;
    case "sensor.waschmaschine_leistung":
      return wash ? (h < 11.35 ? 2000 : h > 12.5 ? 650 : 400) : 1;
    case "sensor.pc_leistung":
      return office ? 70 + wob * 15 : 2;
    case "sensor.akku_ladestand":
      return Math.round(Math.min(100, Math.max(12, h < 9 ? 40 - h * 2 : h < 15 ? 22 + (h - 9) * 12 : 94 - Math.max(0, h - 18) * 9)));
    case "sensor.akku_leistung": {
      const pv = 5800 * sun;
      return Math.round(h >= 9 && h < 15 ? -Math.min(2500, Math.max(0, pv - 600)) : h >= 18 ? 650 : 0);
    }
    case "sensor.netz_leistung": {
      const use = 350 + (tv ? 95 : 0) + (wash ? 900 : 0) + (office ? 70 : 0) + (heating ? 120 : 0) + (h >= 18 && h < 19.5 ? 1800 : 0);
      const pv = 5800 * sun;
      const battery = h >= 9 && h < 15 ? -Math.min(2500, Math.max(0, pv - 600)) : h >= 18 ? 650 : 0;
      return Math.round(use - pv - battery);
    }
    case "sensor.van_ladeleistung":
      return h >= 18 && h < 21 ? 7400 : 0;
    case "sensor.van_ladestand":
      return Math.round(h < 7.8 ? 82 : h < 17.5 ? 82 - (h - 7.8) * 2 : h < 18 ? 63 : h < 21 ? 63 + (h - 18) * 6 : 81);
    default:
      return null;
  }
}

let events = null;

/** The answer for one window: the simulated entities as rows, the numeric sensors as five-minute means. */
export function demoHistory(msg, states) {
  events ??= buildEvents();
  const start = msg.start_time;
  const end = msg.end_time;
  const now = Date.now();
  const entities = {};
  const stats = {};
  const missing = [];
  for (const id of [...(msg.entity_ids ?? []), ...(msg.statistic_ids ?? [])]) {
    // people never; a car's own tracker only as home or away (as the integration answers it)
    if (id.startsWith("person.") || (id.startsWith("device_tracker.") && !(msg.car_trackers ?? []).includes(id))) continue;
    const sample = numeric(id, start * 1000);
    if (sample !== null) {
      const first = Math.ceil(start / STEP) * STEP;
      const mean = [];
      // statistics end a few minutes before now
      for (let s = first; s + STEP <= Math.min(end, now / 1000 - 120); s += STEP) mean.push(Math.round(numeric(id, (s + STEP / 2) * 1000) * 1000) / 1000);
      stats[id] = { start: first, step: STEP, mean };
      continue;
    }
    const list = events[id];
    const rows = [];
    if (list) {
      let before = null;
      for (const e of list) {
        if (e.t <= start * 1000) before = e;
        else if (e.t <= Math.min(end * 1000, now)) rows.push(e);
      }
      if (before) rows.unshift({ ...before, t: start * 1000 });
    } else if (states[id]) {
      // not simulated: it stood as it stands now all day
      rows.push({ t: start * 1000, s: states[id].state, a: null });
    }
    if (!rows.length) {
      missing.push(id);
      continue;
    }
    const tab = [];
    const keys = [];
    const t = [];
    const v = [];
    for (const r of rows) {
      const value = r.a ? [r.s, r.a] : r.s;
      const key = JSON.stringify(value);
      let k = keys.indexOf(key);
      if (k < 0) {
        k = keys.length;
        keys.push(key);
        tab.push(value);
      }
      t.push(Math.max(0, Math.round(r.t / 1000 - start)));
      v.push(k);
    }
    entities[id] = { t, v, tab };
  }
  return { day_start: start, end, oldest: null, keep_days: 10, entities, stats, missing };
}
