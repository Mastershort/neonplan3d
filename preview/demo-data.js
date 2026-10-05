// Invented demo home for the preview page (not anyone's real floor plan).

const rect = (id, name, area_id, x0, z0, x1, z1, floor_material = "wood") => ({
  id,
  name,
  area_id,
  points: [
    [x0, z0],
    [x1, z0],
    [x1, z1],
    [x0, z1],
  ],
  floor_material,
});

const floor = (id, name, elevation, rooms) => ({
  id,
  name,
  elevation,
  height: 2.5,
  cut_height: 1.15,
  rooms,
  openings: [],
  furniture: [],
  placements: [],
  background: null,
});

export const DEMO_FLOORS = {
  keller: { floor_id: "keller", name: "Keller", level: -1 },
  erdgeschoss: { floor_id: "erdgeschoss", name: "Erdgeschoss", level: 0 },
  obergeschoss: { floor_id: "obergeschoss", name: "Obergeschoss", level: 1 },
  dachgeschoss: { floor_id: "dachgeschoss", name: "Dachgeschoss", level: 2 },
};

export const DEMO_AREAS = {
  wohnzimmer: { area_id: "wohnzimmer", name: "Wohnzimmer", floor_id: "erdgeschoss" },
  kueche: { area_id: "kueche", name: "Küche", floor_id: "erdgeschoss" },
  schlafzimmer: { area_id: "schlafzimmer", name: "Schlafzimmer", floor_id: "erdgeschoss" },
  bad: { area_id: "bad", name: "Bad", floor_id: "erdgeschoss" },
  flur: { area_id: "flur", name: "Flur", floor_id: "erdgeschoss" },
  kinderzimmer: { area_id: "kinderzimmer", name: "Kinderzimmer", floor_id: "obergeschoss" },
  arbeitszimmer: { area_id: "arbeitszimmer", name: "Arbeitszimmer", floor_id: "obergeschoss" },
  garage: { area_id: "garage", name: "Garage", floor_id: "erdgeschoss" },
  waschkueche: { area_id: "waschkueche", name: "Waschküche", floor_id: "keller" },
  heizung: { area_id: "heizung", name: "Heizungsraum", floor_id: "keller" },
  vorrat: { area_id: "vorrat", name: "Vorratsraum", floor_id: "keller" },
  hobby: { area_id: "hobby", name: "Hobbyraum", floor_id: "keller" },
};

export const DEMO_BUILDING = {
  version: 1,
  settings: { wall_exterior: 0.24, wall_interior: 0.12, grid: 0.05 },
  floors: [
    floor("eg", "Erdgeschoss", 0, [
      rect("wohnen", "Wohnzimmer", "wohnzimmer", 0, 0, 6, 4.6),
      rect("kueche", "Küche", "kueche", 6, 0, 10, 4.6, "tiles"),
      rect("schlafen", "Schlafzimmer", "schlafzimmer", 0, 4.6, 4.4, 8, "carpet"),
      rect("bad", "Bad", "bad", 4.4, 4.6, 6.8, 8, "tiles"),
      {
        id: "flur",
        name: "Flur",
        area_id: "flur",
        points: [
          [6.8, 4.6],
          [10, 4.6],
          [10, 8],
          [8.4, 8],
          [8.4, 9.2],
          [6.8, 9.2],
        ],
        floor_material: "oak",
      },
      rect("garage", "Garage", "garage", 10, 0, 13.6, 5.2, "concrete"),
    ]),
    floor("og", "Obergeschoss", 2.75, [
      rect("kind", "Kinderzimmer", "kinderzimmer", 0, 0, 4.4, 4.2, "carpet"),
      rect("arbeit", "Arbeitszimmer", "arbeitszimmer", 4.4, 0, 10, 4.2, "oak"),
      rect("badog", "Bad oben", null, 0, 4.2, 3.4, 8, "tiles"),
      rect("gast", "Gästezimmer", null, 3.4, 4.2, 10, 8),
    ]),
  ],
};

// Invented pictures (no real logos or photos): a cover for the TV and a camera still.
const svgPicture = (body) => `data:image/svg+xml;base64,${btoa(body)}`;
const COVER = svgPicture(
  '<svg xmlns="http://www.w3.org/2000/svg" width="320" height="180"><defs><linearGradient id="g" x1="0" x2="1" y1="0" y2="1"><stop offset="0" stop-color="#2b0a3d"/><stop offset="1" stop-color="#b3122e"/></linearGradient></defs><rect width="320" height="180" fill="url(#g)"/><circle cx="240" cy="70" r="38" fill="#ffb547" opacity="0.85"/><path d="M0 150 L90 95 L150 130 L230 80 L320 140 L320 180 L0 180 Z" fill="#12061c"/><text x="24" y="52" font-family="sans-serif" font-size="30" font-weight="700" fill="#fff">Serie</text></svg>',
);
// a stored picture for a screen rule (shown on the TV while Netflix runs)
export const DEMO_PICTURES = {
  pic_demo: svgPicture(
    '<svg xmlns="http://www.w3.org/2000/svg" width="320" height="180"><rect width="320" height="180" fill="#101010"/><text x="160" y="105" text-anchor="middle" font-family="sans-serif" font-size="56" font-weight="900" fill="#e50914">LOGO</text></svg>',
  ),
};
const CAMERA_STILL = svgPicture(
  '<svg xmlns="http://www.w3.org/2000/svg" width="320" height="180"><rect width="320" height="180" fill="#1b2230"/><rect x="0" y="120" width="320" height="60" fill="#2a3444"/><rect x="40" y="60" width="90" height="70" fill="#3b4a60"/><rect x="190" y="40" width="80" height="90" fill="#324055"/><text x="12" y="20" font-family="monospace" font-size="12" fill="#cfd8e6">KAMERA 1  12:04:31</text></svg>',
);

// Invented devices: registry entries, states and placements for the preview.
const light = (id, name, area, on, extra = {}) => ({
  entry: { entity_id: `light.${id}`, area_id: area },
  state: {
    entity_id: `light.${id}`,
    state: on ? "on" : "off",
    attributes: {
      friendly_name: name,
      supported_color_modes: ["color_temp", "hs"],
      color_mode: "color_temp",
      min_color_temp_kelvin: 2200,
      max_color_temp_kelvin: 6500,
      ...(on ? { brightness: 180, color_temp_kelvin: 2700 } : {}),
      ...extra,
    },
  },
});
const entity = (entity_id, area, state, attributes) => ({ entry: { entity_id, area_id: area }, state: { entity_id, state, attributes } });

const DEVICES = [
  light("wohnzimmer_decke", "Wohnzimmer Deckenlicht", "wohnzimmer", true),
  light("stehlampe", "Stehlampe", "wohnzimmer", true, { brightness: 90, color_mode: "hs", rgb_color: [255, 150, 60] }),
  light("kueche", "Küchenlicht", "kueche", false),
  light("schlafzimmer", "Schlafzimmer Decke", "schlafzimmer", false),
  light("nachttisch", "Nachttisch", "schlafzimmer", true, { brightness: 60 }),
  light("bad", "Bad Spots", "bad", true, { brightness: 220, color_temp_kelvin: 4000 }),
  light("flur", "Flurlicht", "flur", true, { brightness: 120 }),
  light("kinderzimmer", "Kinderzimmer Decke", "kinderzimmer", true, { brightness: 150 }),
  light("schreibtisch", "Schreibtischlampe", "arbeitszimmer", true, { color_temp_kelvin: 4500 }),
  light("esstisch", "Esstisch Pendel", "kueche", true, { brightness: 140 }),
  light("kueche_links", "Küche links", "kueche", true, { brightness: 230, color_mode: "hs", rgb_color: [255, 70, 40] }),
  light("kueche_rechts", "Küche rechts", "kueche", true, { brightness: 230, color_mode: "hs", rgb_color: [60, 110, 255] }),
  light("garten", "Garten Wegleuchten", null, true, { brightness: 170 }),
  light("pool", "Pool Spot", null, true, { brightness: 200, color_mode: "hs", rgb_color: [40, 200, 255] }),
  light("haustuer", "Haustür Außenlicht", "flur", true, { brightness: 200 }),
  light("led_band", "LED Band", "wohnzimmer", true, { brightness: 160, color_mode: "hs", rgb_color: [120, 90, 255], effect: "colorloop", effect_list: ["colorloop", "none"] }),
  entity("cover.wohnzimmer", "wohnzimmer", "open", { friendly_name: "Wohnzimmer Rollladen", current_position: 70, supported_features: 15 }),
  entity("cover.kueche", "kueche", "open", { friendly_name: "Rollladen Küche", current_position: 40, supported_features: 15 }),
  entity("climate.wohnzimmer", "wohnzimmer", "heat", {
    friendly_name: "Wohnzimmer Heizung",
    current_temperature: 21.4,
    temperature: 21.5,
    hvac_modes: ["off", "heat", "auto"],
    hvac_action: "heating",
    min_temp: 5,
    max_temp: 30,
    target_temp_step: 0.5,
  }),
  entity("climate.schlafzimmer", "schlafzimmer", "heat", {
    friendly_name: "Schlafzimmer Heizung",
    current_temperature: 18.2,
    temperature: 18,
    hvac_modes: ["off", "heat"],
    hvac_action: "idle",
    min_temp: 5,
    max_temp: 30,
  }),
  entity("media_player.fernseher", "wohnzimmer", "playing", { friendly_name: "Fernseher", device_class: "tv", app_name: "Netflix", media_title: "Serie", volume_level: 0.35, entity_picture: COVER }),
  entity("switch.kaffeemaschine", "kueche", "on", { friendly_name: "Kaffeemaschine" }),
  entity("camera.wohnzimmer", "wohnzimmer", "idle", { friendly_name: "Wohnzimmer Kamera", entity_picture: CAMERA_STILL }),
  entity("sensor.wohnzimmer_temperatur", "wohnzimmer", "21.4", { friendly_name: "Wohnzimmer Temperatur", device_class: "temperature", unit_of_measurement: "°C" }),
  entity("sensor.kueche_temperatur", "kueche", "23.4", { friendly_name: "Küche Temperatur", device_class: "temperature", unit_of_measurement: "°C" }),
  entity("sensor.schlafzimmer_temperatur", "schlafzimmer", "18.1", { friendly_name: "Schlafzimmer Temperatur", device_class: "temperature", unit_of_measurement: "°C" }),
  entity("sensor.bad_temperatur", "bad", "24.6", { friendly_name: "Bad Temperatur", device_class: "temperature", unit_of_measurement: "°C" }),
  entity("sensor.flur_temperatur", "flur", "19.6", { friendly_name: "Flur Temperatur", device_class: "temperature", unit_of_measurement: "°C" }),
  entity("sun.sun", null, "above_horizon", { friendly_name: "Sonne", elevation: 32, azimuth: 205 }),
  entity("sensor.wohnzimmer_feuchte", "wohnzimmer", "48", { friendly_name: "Wohnzimmer Luftfeuchtigkeit", device_class: "humidity", unit_of_measurement: "%" }),
  entity("binary_sensor.kueche_fenster", "kueche", "on", { friendly_name: "Küche Fenster", device_class: "window" }),
  entity("binary_sensor.kueche_rauch", "kueche", "off", { friendly_name: "Küche Rauchmelder", device_class: "smoke" }),
  entity("binary_sensor.garage_auto", "garage", "on", { friendly_name: "Auto in der Garage", device_class: "occupancy" }),
  entity("sensor.garage_fahrzeugtyp", "garage", "van", { friendly_name: "Fahrzeugtyp Garage" }),
  entity("device_tracker.zweitwagen", null, "not_home", { friendly_name: "Zweitwagen" }),
  entity("weather.zuhause", null, "sunny", { friendly_name: "Wetter" }),
  entity("alarm_control_panel.haus", null, "disarmed", { friendly_name: "Alarmanlage" }),
  entity("scene.wohnzimmer_kino", "wohnzimmer", "unknown", { friendly_name: "Wohnzimmer Kino" }),
  entity("scene.wohnzimmer_lesen", "wohnzimmer", "unknown", { friendly_name: "Wohnzimmer Lesen" }),
  entity("script.wohnzimmer_alles_aus", "wohnzimmer", "off", { friendly_name: "Wohnzimmer Alles aus" }),
  entity("binary_sensor.flur_bewegung", "flur", "off", { friendly_name: "Flur Bewegung", device_class: "motion" }),
  entity("binary_sensor.kueche_praesenz", "kueche", "off", { friendly_name: "Küche Präsenz", device_class: "presence" }),
  entity("binary_sensor.kuehlschrank_tuer", "kueche", "off", { friendly_name: "Kühlschrank Tür", device_class: "door" }),
  entity("binary_sensor.gefrierfach_tuer", "kueche", "on", { friendly_name: "Gefrierfach Tür", device_class: "door" }),
  entity("binary_sensor.wohnzimmer_kamera_bewegung", "wohnzimmer", "on", { friendly_name: "Wohnzimmer Kamera Bewegung", device_class: "motion" }),
  entity("binary_sensor.wohnzimmer_kamera_person", "wohnzimmer", "on", { friendly_name: "Wohnzimmer Kamera Person", device_class: "occupancy" }),
  entity("binary_sensor.haustuer", "flur", "off", { friendly_name: "Haustür", device_class: "door" }),
  entity("binary_sensor.bett_links", "schlafzimmer", "on", { friendly_name: "Bett links belegt", device_class: "occupancy" }),
  entity("binary_sensor.bett_rechts", "schlafzimmer", "off", { friendly_name: "Bett rechts belegt", device_class: "occupancy" }),
  entity("cover.garagentor", "garage", "open", { friendly_name: "Garagentor", device_class: "garage", current_position: 60, supported_features: 15 }),
  entity("binary_sensor.wohnzimmer_terrasse", "wohnzimmer", "on", { friendly_name: "Terrassentür", device_class: "opening" }),
  entity("vacuum.saugi", "wohnzimmer", "cleaning", { friendly_name: "Saugi", battery_level: 64 }),
  entity("binary_sensor.wohnzimmer_terrasse_2", "wohnzimmer", "off", { friendly_name: "Terrassentür Standflügel", device_class: "opening" }),
  entity("binary_sensor.schlafzimmer_fenster", "schlafzimmer", "on", { friendly_name: "Schlafzimmer Fenster", device_class: "window" }),
  entity("binary_sensor.schlafzimmer_kipp", "schlafzimmer", "on", { friendly_name: "Schlafzimmer Fenster gekippt", device_class: "window" }),
  entity("scene.wohnzimmer_film", "wohnzimmer", "2024-01-01T00:00:00", { friendly_name: "Wohnzimmer Film" }),
  entity("scene.wohnzimmer_lesen", "wohnzimmer", "2024-01-01T00:00:00", { friendly_name: "Wohnzimmer Lesen" }),
  entity("script.gute_nacht", "schlafzimmer", "off", { friendly_name: "Gute Nacht" }),
  // energy (invented values)
  entity("sensor.netz_leistung", "flur", "420", { friendly_name: "Netz Leistung", device_class: "power", unit_of_measurement: "W" }),
  entity("sensor.pv_leistung", "flur", "1150", { friendly_name: "PV Leistung", device_class: "power", unit_of_measurement: "W" }),
  entity("sensor.balkon_leistung", "flur", "380", { friendly_name: "Balkonkraftwerk Leistung", device_class: "power", unit_of_measurement: "W" }),
  entity("sensor.akku_leistung", "flur", "-300", { friendly_name: "Akku Leistung", device_class: "power", unit_of_measurement: "W" }),
  entity("sensor.akku_ladestand", "flur", "64", { friendly_name: "Akku Ladestand", device_class: "battery", unit_of_measurement: "%" }),
  entity("sensor.strompreis", null, "0.29", { friendly_name: "Strompreis", device_class: "monetary", unit_of_measurement: "€/kWh" }),
  entity("sensor.fernseher_leistung", "wohnzimmer", "95", { friendly_name: "Fernseher Leistung", device_class: "power", unit_of_measurement: "W" }),
  entity("sensor.kaffeemaschine_leistung", "kueche", "0.9", { friendly_name: "Kaffeemaschine Leistung", device_class: "power", unit_of_measurement: "kW" }),
  entity("sensor.kuehlschrank_leistung", "kueche", "85", { friendly_name: "Kühlschrank Leistung", device_class: "power", unit_of_measurement: "W" }),
  entity("sensor.waschmaschine_leistung", "bad", "430", { friendly_name: "Waschmaschine Leistung", device_class: "power", unit_of_measurement: "W" }),
  entity("sensor.pc_leistung", "arbeitszimmer", "70", { friendly_name: "Computer Leistung", device_class: "power", unit_of_measurement: "W" }),
  entity("sensor.gaszaehler", "garage", "4821.374", { friendly_name: "Gaszähler", device_class: "gas", unit_of_measurement: "m³" }),
  // people and their room sensors (as ESPresense or Bermuda would report them)
  entity("person.mia", null, "home", { friendly_name: "Mia" }),
  entity("person.tom", null, "home", { friendly_name: "Tom Beispiel" }),
  entity("person.lea", null, "not_home", { friendly_name: "Lea" }),
  entity("sensor.mia_raum", null, "Wohnzimmer", { friendly_name: "Mia Raum" }),
  entity("sensor.tom_raum", null, "Küche", { friendly_name: "Tom Raum" }),
  entity("sensor.lea_raum", null, "not_home", { friendly_name: "Lea Raum" }),
];
// a LED matrix with many light entities: only the main one (without a name of its own) is shown first
for (const [suffix, name] of [
  ["", null],
  ["_indicator_1", "Indicator 1"],
  ["_indicator_2", "Indicator 2"],
  ["_indicator_3", "Indicator 3"],
  ["_matrix", "Matrix"],
]) {
  const id = `light.pixeluhr${suffix}`;
  DEVICES.push({
    entry: { entity_id: id, area_id: "wohnzimmer", device_id: "d_pixeluhr", ...(name ? { name } : {}) },
    state: { entity_id: id, state: "off", attributes: { friendly_name: name ? `Pixeluhr ${name}` : "Pixeluhr", supported_color_modes: ["hs"] } },
  });
}
// devices with a power sensor of their own
for (const [id, device] of [
  ["camera.wohnzimmer", "d_cam"],
  ["binary_sensor.wohnzimmer_kamera_bewegung", "d_cam"],
  ["binary_sensor.wohnzimmer_kamera_person", "d_cam"],
  ["media_player.fernseher", "d_tv"],
  ["sensor.fernseher_leistung", "d_tv"],
  ["switch.kaffeemaschine", "d_kaffee"],
  ["sensor.kaffeemaschine_leistung", "d_kaffee"],
]) {
  DEVICES.find((d) => d.entry.entity_id === id).entry.device_id = device;
}

export const DEMO_ENTITIES = Object.fromEntries(DEVICES.map((d) => [d.entry.entity_id, d.entry]));
export const DEMO_STATES = Object.fromEntries(DEVICES.map((d) => [d.state.entity_id, d.state]));

const place = (entity_id, x, z) => ({ entity_id, x, z, y: null });
DEMO_BUILDING.floors[0].placements = [
  place("light.wohnzimmer_decke", 3.6, 2.6),
  { ...place("camera.wohnzimmer", 0.2, 0.2), mount: "wall", rotation: 315 },
  { entity_id: "light.stehlampe", x: 5.3, z: 0.7, y: null, mount: "floor" },
  place("cover.wohnzimmer", 1.6, 0.4),
  place("climate.wohnzimmer", 0.5, 2.2),
  place("media_player.fernseher", 3.0, 0.4),

  place("switch.kaffeemaschine", 9.4, 0.6),
  place("binary_sensor.kueche_fenster", 7.2, 0.4),
  place("light.schlafzimmer", 2.9, 6.8),
  { entity_id: "light.nachttisch", x: 3.3, z: 7.78, y: null, mount: "table" },

  place("light.flur", 8.8, 6.9),
];
DEMO_BUILDING.floors[0].placements.push(place("sensor.gaszaehler", 12.9, 4.6));
DEMO_BUILDING.floors[0].placements.push(
  place("sensor.kuehlschrank_leistung", 6.35, 0.8),
  place("sensor.waschmaschine_leistung", 6.4, 6.9),
  place("sensor.akku_leistung", 7.3, 8.8),
);
DEMO_BUILDING.floors[1].placements = [place("light.kinderzimmer", 2.9, 2.8), place("light.schreibtisch", 6.2, 1.2), place("sensor.pc_leistung", 9.0, 0.9)];
// grid, solar and battery come from the devices in the garage (meter, inverter, home battery)
DEMO_BUILDING.energy = {
  meter: null,
  grid: null,
  grid_invert: false,
  solar: null,
  battery: null,
  battery_invert: false,
  battery_soc: null,
  consumption: null,
  tariff: "sensor.strompreis",
};
DEMO_BUILDING.presence = [
  { person: "person.mia", sensor: "sensor.mia_raum" },
  { person: "person.tom", sensor: "sensor.tom_raum" },
  { person: "person.lea", sensor: "sensor.lea_raum" },
];

// Invented doors, windows and furniture for the preview.
let openingId = 0;
const hole = (type, room_id, edge, offset, width, extra = {}) => ({
  id: `o${++openingId}`,
  room_id,
  edge,
  offset,
  width,
  type,
  sill: type === "door" ? 0 : 0.9,
  height: type === "door" ? 2.05 : 1.3,
  hinge: "left",
  cover: null,
  contact: null,
  tilt: null,
  ...extra,
});
const terrace = { sill: 0, height: 2.15 };
DEMO_BUILDING.floors[0].openings = [
  hole("window", "wohnen", 0, 1.6, 1.4, { contact: "none" }),
  hole("window", "wohnen", 0, 4.3, 1.8, { ...terrace, leaves: 2, contact: "binary_sensor.wohnzimmer_terrasse", contact2: "binary_sensor.wohnzimmer_terrasse_2", hinge: "right" }),
  hole("window", "wohnen", 3, 2.3, 1.2, { contact: "none" }),
  hole("door", "wohnen", 1, 3.0, 1.4, { style: "passage" }),
  hole("door", "wohnen", 2, 4.2, 0.9),
  hole("window", "kueche", 0, 2.4, 1.2),
  hole("door", "kueche", 1, 3.6, 0.9, { hinge: "right" }),
  hole("garage", "garage", 1, 2.6, 2.5, { sill: 0, height: 2.1 }),
  hole("door", "kueche", 2, 1.6, 0.9),
  hole("window", "schlafen", 2, 2.2, 1.4, { contact: "binary_sensor.schlafzimmer_fenster", tilt: "binary_sensor.schlafzimmer_kipp" }),
  hole("window", "schlafen", 3, 1.7, 1.0, { contact: "none" }),
  hole("window", "bad", 2, 1.2, 0.8, { sill: 1.3, height: 0.8 }),
  hole("door", "bad", 1, 1.2, 0.8),
  hole("door", "flur", 4, 0.8, 1.4, { swing: "out", style: "sidelight" }),
];
DEMO_BUILDING.floors[1].openings = [
  hole("window", "kind", 0, 2.2, 1.2),
  hole("window", "arbeit", 0, 2.8, 1.6),
  hole("window", "gast", 2, 3.0, 1.2),
  hole("door", "kind", 1, 3.3, 0.9),
];

let furnitureId = 0;
const item = (type, x, z, w, d, h, rotation = 0) => ({ id: `m${++furnitureId}`, type, x, z, w, d, h, rotation, variant: null });
DEMO_BUILDING.floors[0].furniture = [
  item("rug", 2.4, 2.3, 2.6, 1.7, 0.01),
  item("sofa", 2.4, 3.7, 2.3, 0.92, 0.82, 180),
  item("armchair", 0.75, 2.2, 0.85, 0.85, 0.8, 270),
  { ...item("tv_board", 2.4, 0.25, 1.8, 0.42, 0.5), pictures: [{ entity: "media_player.fernseher", attribute: "app_name", state: "netflix", image: "pic_demo" }] },
  item("plant", 5.55, 0.45, 0.5, 0.5, 1.2),
  item("shelf", 5.8, 2.6, 0.9, 0.35, 1.9, 90),
  item("fridge", 6.35, 0.36, 0.6, 0.66, 1.85),
  item("kitchen", 7.25, 0.31, 1.2, 0.62, 0.92),
  item("stove", 8.15, 0.31, 0.6, 0.62, 0.92),
  item("sink", 8.9, 0.31, 0.9, 0.62, 0.92),
  item("kitchen", 9.65, 0.31, 0.6, 0.62, 0.92),
  item("kitchen_wall", 7.25, 0.18, 1.2, 0.35, 0.7),
  item("kitchen_wall", 8.9, 0.18, 0.9, 0.35, 0.7),
  item("corner_bench", 7.1, 3.55, 2.0, 1.6, 0.9, 270),
  item("table", 8.0, 2.9, 1.3, 0.85, 0.75),
  { ...item("lamp_pendant", 8.0, 2.9, 0.3, 0.3, 0.95), entity: "light.esstisch", variant: "globe" },
  { ...item("radiator", 0.08, 2.3, 1.0, 0.1, 0.6, 270), entity: "climate.wohnzimmer" },
  ...[
    [7.6, 10.4],
    [7.6, 12.4],
  ].map(([x, z]) => ({ ...item("lamp_bollard", x, z, 0.16, 0.16, 0.8), entity: "light.garten" })),
  { ...item("lamp_garden", 12.4, -3.4, 0.12, 0.12, 0.3), entity: "light.pool" },
  { ...item("lamp_wall", 8.9, 9.5, 0.22, 0.12, 0.2), entity: "light.haustuer" },
  { ...item("lamp_ceiling", 7.0, 2.1, 0.45, 0.45, 0.08), entity: "light.kueche_links" },
  { ...item("lamp_ceiling", 9.0, 2.1, 0.45, 0.45, 0.08), entity: "light.kueche_rechts" },
  ...[
    [5.0, 5.4],
    [6.2, 5.4],
    [5.0, 6.9],
    [6.2, 6.9],
  ].map(([x, z]) => ({ ...item("lamp_downlight", x, z, 0.1, 0.1, 0.02), entity: "light.bad" })),
  { ...item("led_strip", 2.4, 0.08, 3.2, 0.04, 0.03), entity: "light.led_band" },
  // an upright strip at the wall, a light column from the floor up
  { ...item("led_strip", 0.1, 1.2, 1.8, 0.04, 0.03, 90), entity: "light.led_band", upright: true, mount_y: 0.1 },
  item("chair", 8.4, 2.2, 0.45, 0.5, 0.9),
  item("chair", 8.95, 2.9, 0.45, 0.5, 0.9, 270),
  { ...item("bed", 2.2, 6.97, 1.6, 2.05, 0.9, 180), state_entity: "binary_sensor.bett_links", state_entity2: "binary_sensor.bett_rechts", state_split: "left_right" },
  item("nightstand", 1.1, 7.78, 0.45, 0.4, 0.5, 180),
  item("nightstand", 3.3, 7.78, 0.45, 0.4, 0.5, 180),
  item("wardrobe", 0.31, 5.55, 1.6, 0.6, 2.1, 270),
  item("bathtub", 5.6, 7.6, 1.7, 0.75, 0.58, 180),
  item("wc", 4.72, 5.35, 0.38, 0.6, 0.8, 270),
  item("washbasin", 6.55, 5.3, 0.6, 0.46, 0.85, 90),
  { ...item("washer", 6.47, 6.45, 0.6, 0.6, 0.85, 90), holo: true },
  item("coffee_table", 2.4, 2.4, 1.1, 0.6, 0.42),
  item("stairs", 9.42, 6.3, 1.0, 3.2, 2.75),
  item("wardrobe", 7.1, 6.4, 1.2, 0.4, 2.0, 270),
  { ...item("robot_vacuum", 5.7, 3.2, 0.36, 0.5, 0.1, 270), entity: "vacuum.saugi" },
  {
    ...item("parking", 11.7, 2.6, 2.6, 5.2, 0.02, 270),
    entity: "binary_sensor.garage_auto",
    vehicle: "pack:mastershort.vehicles:van",
    scale: 0.95,
    type_entity: "sensor.garage_fahrzeugtyp",
    types: [
      { state: "van", vehicle: "pack:mastershort.vehicles:van" },
      { state: "suv", vehicle: "pack:mastershort.vehicles:suv" },
    ],
  },
  { ...item("parking", 16.2, 2.7, 2.6, 5.2, 0.02, 90), entity: "device_tracker.zweitwagen", vehicle: "pack:mastershort.vehicles:compact" },
];
// a partition through half of the guest room (a free-standing wall)
// a half-height wall between the kids' room and the office (edge 1 of the kids' room)
DEMO_BUILDING.floors[1].rooms.find((r) => r.id === "kind").wall_heights = [null, 1.0, null, null];
DEMO_BUILDING.floors[1].walls = [{ id: "wall_demo", a: [8, 8], b: [8, 6], thickness: null, height: 1.1 }];
DEMO_BUILDING.floors[0].walls = [{ id: "wall_garage", a: [10, 1.1], b: [12.6, 1.1], thickness: null, height: null }];
DEMO_BUILDING.floors[0].openings.push(hole("door", "garage", 0, 1.2, 0.9, { wall: "wall_garage" }));
DEMO_BUILDING.floors[1].furniture = [
  item("bed", 1.0, 1.4, 1.0, 2.05, 0.8, 90),
  item("desk", 2.8, 3.8, 1.2, 0.6, 0.75, 180),
  item("rug", 2.2, 2.6, 1.6, 1.2, 0.01),
  { ...item("desk", 8.4, 0.36, 1.6, 0.7, 0.75), pictures: [{ entity: "camera.wohnzimmer", state: "*", image: "camera:camera.wohnzimmer" }] },
  item("chair", 8.4, 1.1, 0.46, 0.5, 0.9, 180),
  item("shelf", 9.8, 2.1, 1.2, 0.35, 1.9, 90),
  { ...item("pack:mastershort.living:media_wall", 5.9, 0.3, 3.0, 0.45, 2.2), pictures: [{ entity: "media_player.fernseher", attribute: "app_name", state: "netflix", image: "pic_demo" }] },
  item("sofa", 5.4, 3.6, 1.9, 0.85, 0.8, 180),
  item("bed", 5.0, 6.9, 1.4, 2.0, 0.85, 180),
  item("wardrobe", 3.72, 5.4, 1.4, 0.6, 2.1, 270),
  item("bathtub", 0.45, 6.1, 1.7, 0.75, 0.58, 90),
  item("washbasin", 2.1, 4.5, 0.6, 0.46, 0.85),
];

// Invented garden and roof.
const area = (id, type, x0, z0, x1, z1) => ({ id, type, points: [[x0, z0], [x1, z0], [x1, z1], [x0, z1]] });
DEMO_BUILDING.floors[0].outdoor = [
  area("a1", "lawn", -3, -8, 17, -0.3),
  area("a2", "lawn", -3, 9.5, 6.5, 14),
  area("a3", "terrace", 1.5, -2.8, 6.2, -0.3),
  area("a4", "pool", 8.5, -6.5, 12, -3.5),
  area("a5", "path", 7.0, 9.5, 8.2, 14),
  area("a6", "driveway", 13.9, 0.8, 18.5, 4.6),
  area("a7", "hedge", -3.5, -8.5, -2.9, 14),
  area("a8", "bed", 1.5, 10.2, 5.5, 11.2),
  area("a9", "fence", -4, -9, 19, 14.5),
];
// meter, solar inverter, home battery and wallbox on the back wall of the garage
DEMO_BUILDING.floors[0].furniture.push(
  { ...item("meter", 13.75, 0.11, 0.55, 0.21, 1.1), power: "sensor.netz_leistung" },
  { ...item("inverter", 13.0, 0.11, 0.5, 0.2, 0.65), id: "inv_main", power: "sensor.pv_leistung" },
  // a balcony plant of its own: a small inverter with its field on the north face
  { ...item("inverter", 13.6, 0.11, 0.3, 0.15, 0.4), id: "inv_balkon", name: "Balkonkraftwerk", power: "sensor.balkon_leistung" },
  { ...item("home_battery", 12.3, 0.14, 0.6, 0.25, 1.1), power: "sensor.akku_leistung", soc: "sensor.akku_ladestand" },
  item("wallbox", 10.6, 0.09, 0.3, 0.15, 0.42),
);
DEMO_BUILDING.settings = {
  ...DEMO_BUILDING.settings,
  north: 0,
  // a solar field of 2 × 7 modules on the south side of the roof
  roof: { type: "gable", pitch: 35, overhang: 0.4,
    solar: [
      { id: "pv_sued", face: "main:b", u: 1.4, v: 0.75, rows: 2, cols: 7, portrait: true, string: "str_main" },
      { id: "pv_balkon", face: "main:a", u: 1.4, v: 0.75, rows: 1, cols: 2, portrait: true, string: "str_balkon" },
    ],
    strings: [
      { id: "str_main", name: "Strang Süd", entity: null, inverter: "inv_main" },
      { id: "str_balkon", name: "Balkon", entity: null, inverter: "inv_balkon" },
    ],
    // a roof window beside it: open, with the blind half down
    windows: [{ id: "dachfenster", face: "main:b", u: 10.0, v: 1.0, contact: "binary_sensor.schlafzimmer_fenster", cover: "cover.kueche" }],
  },
};

// an invented furniture pack (the preview does not check signatures)
export const DEMO_PACK = {
  format: "fp3dpack",
  version: 1,
  id: "demo.pack",
  name: "Demo-Pack",
  publisher: "Demo",
  licensee: null,
  items: [
    {
      id: "cube_seat",
      name: { de: "Sitzwürfel", en: "Seat cube" },
      size: [0.45, 0.45, 0.45],
      parts: [
        { shape: "box", x: 0, z: 0, w: 1, d: 1, y: 0, h: 0.9, color: "fabric", edges: true },
        { shape: "box", x: 0, z: 0, w: 0.9, d: 0.9, y: 0.9, h: 0.1, color: "cushion" },
      ],
    },
  ],
};
