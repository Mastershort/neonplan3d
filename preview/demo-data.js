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
  schlafzimmer: { area_id: "schlafzimmer", name: "Schlafzimmer", floor_id: "obergeschoss" },
  bad: { area_id: "bad", name: "Bad", floor_id: "obergeschoss" },
  flur: { area_id: "flur", name: "Flur", floor_id: "erdgeschoss" },
  kinderzimmer: { area_id: "kinderzimmer", name: "Kinderzimmer", floor_id: "obergeschoss" },
  arbeitszimmer: { area_id: "arbeitszimmer", name: "Arbeitszimmer", floor_id: "obergeschoss" },
  garage: { area_id: "garage", name: "Garage", floor_id: "erdgeschoss" },
  waschkueche: { area_id: "waschkueche", name: "Waschküche", floor_id: "erdgeschoss" },
  heizung: { area_id: "heizung", name: "Heizungsraum", floor_id: "keller" },
  vorrat: { area_id: "vorrat", name: "Vorratsraum", floor_id: "keller" },
  hobby: { area_id: "hobby", name: "Hobbyraum", floor_id: "erdgeschoss" },
  garten: { area_id: "garten", name: "Garten", floor_id: "erdgeschoss" },
};

// The demo house, an L: a main house of 14 × 9 m with two full storeys and two rooms under the roof, a lower
// living wing with its own gable and a bay window towards the garden, a garage with a roof terrace, a carport,
// a terrace, a pool and a garden – what a real plan can hold.
export const DEMO_BUILDING = {
  version: 1,
  settings: {
    pets: { on: true, list: [{ id: "pet_mia", kind: "cat", name: "Mia", fur: "orange" }, { id: "pet_bello", kind: "dog", breed: "labrador", name: "Bello", fur: "golden" }, { id: "pet_kruemel", kind: "dog", breed: "dachshund", name: "Krümel", fur: "brown" }] }, wall_exterior: 0.24, wall_interior: 0.12, grid: 0.05 },
  floors: [
    floor("eg", "Erdgeschoss", 0, [
      {
        // the living wing reaches into the garden; its bay window looks west
        id: "wohnen",
        name: "Wohnzimmer",
        area_id: "wohnzimmer",
        points: [
          [0, -6],
          [6, -6],
          [6, 0],
          [0, 0],
          [0, -1.6],
          [-0.9, -2.1],
          [-0.9, -3.9],
          [0, -4.4],
        ],
        floor_material: "wood",
      },
      rect("essen", "Essen", null, 0, 0, 6, 4.6, "wood"),
      rect("kueche", "Küche", "kueche", 6, 0, 11, 4.6, "tiles"),
      rect("hwr", "Hauswirtschaft", "waschkueche", 11, 0, 14, 4.6, "tiles"),
      rect("gast", "Gästezimmer", null, 0, 4.6, 3.6, 9, "carpet"),
      rect("gwc", "Gäste-WC", null, 3.6, 4.6, 5.2, 6.4, "tiles"),
      rect("garderobe", "Garderobe", null, 3.6, 6.4, 5.2, 9, "oak"),
      {
        id: "flur",
        name: "Flur",
        area_id: "flur",
        points: [
          [5.2, 4.6],
          [9.6, 4.6],
          [9.6, 9],
          [8.2, 9],
          [8.2, 10.2],
          [6.6, 10.2],
          [6.6, 9],
          [5.2, 9],
        ],
        floor_material: "oak",
      },
      rect("hobby", "Hobbyraum", "hobby", 9.6, 4.6, 14, 9, "concrete"),
      rect("garage", "Garage", "garage", 14, 0, 17.6, 6, "concrete"),
    ]),
    floor("og", "Obergeschoss", 2.75, [
      rect("kind", "Kinderzimmer", "kinderzimmer", 0, 0, 4.4, 4.6, "carpet"),
      rect("ankleide", "Ankleide", null, 4.4, 0, 6.2, 4.6, "carpet"),
      rect("schlafen", "Schlafzimmer", "schlafzimmer", 6.2, 0, 10, 4.6, "carpet"),
      rect("jugend", "Jugendzimmer", null, 10, 0, 14, 4.6, "oak"),
      rect("bad", "Bad", "bad", 0, 4.6, 3.6, 9, "tiles"),
      rect("galerie", "Galerie", null, 3.6, 4.6, 11, 9, "oak"),
      rect("arbeit", "Arbeitszimmer", "arbeitszimmer", 11, 4.6, 14, 9, "oak"),
    ]),
    // under the roof: the walls end under the slopes, the dormers give headroom and light
    floor("dg", "Dachgeschoss", 5.5, [rect("studio", "Studio", null, 0, 0, 8, 9, "oak"), rect("loft", "Gästeloft", null, 8, 0, 14, 9, "oak")]),
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
const DOOR_STILL = svgPicture(
  '<svg xmlns="http://www.w3.org/2000/svg" width="320" height="180"><defs><linearGradient id="s" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#1a2440"/><stop offset="1" stop-color="#3b3350"/></linearGradient></defs><rect width="320" height="180" fill="url(#s)"/><rect x="0" y="118" width="320" height="62" fill="#2b2f38"/><polygon points="120,180 200,180 178,118 142,118" fill="#4a4f5c"/><rect x="40" y="70" width="36" height="48" fill="#1d3b2a"/><rect x="250" y="62" width="44" height="56" fill="#1d3b2a"/><rect x="146" y="96" width="28" height="22" fill="#20242c"/><circle cx="160" cy="62" r="12" fill="#c9a27a"/><rect x="146" y="74" width="28" height="46" rx="8" fill="#3c6ea8"/><rect x="0" y="0" width="320" height="16" fill="#00000066"/><text x="8" y="12" font-family="monospace" font-size="10" fill="#e6eefc">HAUSTUER  18:42:07</text></svg>',
);

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
  entity("fan.kinderzimmer", "kinderzimmer", "on", { friendly_name: "Kinderzimmer Ventilator", percentage: 66, percentage_step: 33 }),
  light("schreibtisch", "Schreibtischlampe", "arbeitszimmer", true, { color_temp_kelvin: 4500 }),
  light("esstisch", "Esstisch Pendel", "kueche", true, { brightness: 140 }),
  light("kueche_links", "Küche links", "kueche", true, { brightness: 230, color_mode: "hs", rgb_color: [255, 70, 40] }),
  light("kueche_rechts", "Küche rechts", "kueche", true, { brightness: 230, color_mode: "hs", rgb_color: [60, 110, 255] }),
  light("garten", "Garten Wegleuchten", "garten", true, { brightness: 170 }),
  light("pool", "Pool Spot", null, true, { brightness: 200, color_mode: "hs", rgb_color: [40, 200, 255] }),
  light("haustuer", "Haustür Außenlicht", "flur", true, { brightness: 200 }),
  light("neon_schild", "Neon-Schild", "hobby", true, { brightness: 200, color_mode: "hs", rgb_color: [255, 60, 180] }),
  light("studio", "Studio Stehlampe", null, true, { brightness: 120 }),
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
  entity("media_player.kueche_lautsprecher", "kueche", "playing", { friendly_name: "Küche Lautsprecher", device_class: "speaker", media_title: "Blue Train", media_artist: "John Coltrane", volume_level: 0.45, entity_picture: COVER, group_members: ["media_player.kueche_lautsprecher", "media_player.bad_lautsprecher"] }),
  entity("media_player.bad_lautsprecher", "bad", "playing", { friendly_name: "Bad Lautsprecher", device_class: "speaker", media_title: "Blue Train", media_artist: "John Coltrane", volume_level: 0.3, entity_picture: COVER, group_members: ["media_player.kueche_lautsprecher", "media_player.bad_lautsprecher"] }),
  entity("switch.kaffeemaschine", "kueche", "on", { friendly_name: "Kaffeemaschine" }),
  entity("camera.wohnzimmer", "wohnzimmer", "idle", { friendly_name: "Wohnzimmer Kamera", entity_picture: CAMERA_STILL }),
  // the front door: a camera and its doorbell (one device), for the live director
  entity("camera.haustuer", "flur", "idle", { friendly_name: "Haustür Kamera", entity_picture: DOOR_STILL }),
  entity("event.haustuer_klingel", "flur", "2026-10-19T08:00:00.000Z", { friendly_name: "Haustür Klingel", device_class: "doorbell", event_type: "ring" }),
  entity("sensor.wohnzimmer_temperatur", "wohnzimmer", "21.4", { friendly_name: "Wohnzimmer Temperatur", device_class: "temperature", unit_of_measurement: "°C" }),
  entity("sensor.kueche_temperatur", "kueche", "23.4", { friendly_name: "Küche Temperatur", device_class: "temperature", unit_of_measurement: "°C" }),
  entity("sensor.schlafzimmer_temperatur", "schlafzimmer", "18.1", { friendly_name: "Schlafzimmer Temperatur", device_class: "temperature", unit_of_measurement: "°C" }),
  entity("sensor.bad_temperatur", "bad", "24.6", { friendly_name: "Bad Temperatur", device_class: "temperature", unit_of_measurement: "°C" }),
  entity("sensor.flur_temperatur", "flur", "19.6", { friendly_name: "Flur Temperatur", device_class: "temperature", unit_of_measurement: "°C" }),
  entity("sensor.garten_temperatur", "garten", "14.2", { friendly_name: "Garten Temperatur", device_class: "temperature", unit_of_measurement: "°C" }),
  entity("sun.sun", null, "above_horizon", { friendly_name: "Sonne", elevation: 32, azimuth: 205 }),
  entity("sensor.wohnzimmer_feuchte", "wohnzimmer", "48", { friendly_name: "Wohnzimmer Luftfeuchtigkeit", device_class: "humidity", unit_of_measurement: "%" }),
  entity("binary_sensor.kueche_fenster", "kueche", "on", { friendly_name: "Küche Fenster", device_class: "window" }),
  entity("binary_sensor.kueche_rauch", "kueche", "off", { friendly_name: "Küche Rauchmelder", device_class: "smoke" }),
  entity("binary_sensor.garage_auto", "garage", "on", { friendly_name: "Auto in der Garage", device_class: "occupancy" }),
  entity("sensor.van_ladestand", "garage", "78", { friendly_name: "Van Ladestand", device_class: "battery", unit_of_measurement: "%" }),
  // helpers standing in for a car without an integration (Auto Pro with input_number / input_boolean)
  entity("input_number.test_ladestand", null, "78.0", { friendly_name: "Test Auto Ladestand", unit_of_measurement: "%", min: 0, max: 100, step: 1 }),
  entity("input_number.test_reichweite", null, "312.0", { friendly_name: "Test Auto Reichweite", unit_of_measurement: "km", min: 0, max: 600, step: 1 }),
  entity("input_number.test_ladeleistung", null, "0.0", { friendly_name: "Test Auto Ladeleistung", unit_of_measurement: "W", min: 0, max: 11000, step: 100 }),
  entity("input_boolean.test_verriegelt", null, "on", { friendly_name: "Test Auto verriegelt" }),
  entity("input_boolean.test_klima", null, "on", { friendly_name: "Test Auto Klima" }),
  entity("input_boolean.test_auto_da", null, "on", { friendly_name: "Test Auto da" }),
  entity("sensor.van_reichweite", "garage", "312", { friendly_name: "Van Reichweite", unit_of_measurement: "km" }),
  entity("sensor.van_ladeleistung", "garage", "7400", { friendly_name: "Van Ladeleistung", device_class: "power", unit_of_measurement: "W" }),
  entity("lock.van", "garage", "locked", { friendly_name: "Van Verriegelung" }),
  entity("switch.van_klima", "garage", "on", { friendly_name: "Van Klima" }),
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
  entity("binary_sensor.bad_fenster", "bad", "off", { friendly_name: "Bad Fenster", device_class: "window" }),
  entity("binary_sensor.bad_wasser", "bad", "off", { friendly_name: "Bad Wassermelder", device_class: "moisture" }),
  entity("binary_sensor.bett_links", "schlafzimmer", "on", { friendly_name: "Bett links belegt", device_class: "occupancy" }),
  entity("binary_sensor.bett_rechts", "schlafzimmer", "off", { friendly_name: "Bett rechts belegt", device_class: "occupancy" }),
  entity("cover.garagentor", "garage", "open", { friendly_name: "Garagentor", device_class: "garage", current_position: 60, supported_features: 15 }),
  entity("cover.einfahrtstor", "garten", "open", { friendly_name: "Einfahrtstor", device_class: "gate", supported_features: 3 }),
  entity("binary_sensor.gartenpforte", "garten", "off", { friendly_name: "Gartenpforte", device_class: "door" }),
  // Energie Pro: gas and water meters (counters)
  entity("sensor.wasserzaehler", null, "412.318", { friendly_name: "Wasserzähler", device_class: "water", unit_of_measurement: "m³", state_class: "total_increasing" }),
  // Pool Pro: an 8 x 4 m pool with heat pump, filter pump, light, pH and redox measurement and a cover
  entity("sensor.pool_wassertemperatur", null, "27.4", { friendly_name: "Pool Wassertemperatur", device_class: "temperature", unit_of_measurement: "°C" }),
  entity("climate.pool_waermepumpe", null, "heat", { friendly_name: "Pool Wärmepumpe", temperature: 28, current_temperature: 27.4, hvac_action: "heating", hvac_modes: ["off", "heat"], min_temp: 15, max_temp: 35, target_temp_step: 0.5 }),
  entity("switch.pool_filterpumpe", null, "on", { friendly_name: "Pool Filterpumpe" }),
  entity("sensor.pool_ph", null, "7.32", { friendly_name: "Pool pH" }),
  entity("sensor.pool_redox", null, "712", { friendly_name: "Pool Redox", unit_of_measurement: "mV" }),
  // Haushalt Pro: an invented waste calendar and a "post" flag set by an automation
  entity("calendar.abfallkalender", null, "off", { friendly_name: "Abfallkalender", message: "Papier", all_day: true }),
  entity("input_boolean.post_da", null, "on", { friendly_name: "Post da" }),
  entity("input_boolean.restmuell_rausgestellt", null, "on", { friendly_name: "Restmüll rausgestellt" }),
  entity("sensor.monstera_feuchte", null, "14", { friendly_name: "Monstera Feuchte", device_class: "moisture", unit_of_measurement: "%" }),
  entity("sensor.waschmaschine_restzeit", null, "23", { friendly_name: "Waschmaschine Restzeit", unit_of_measurement: "min" }),
  entity("binary_sensor.kuehlschrank_filter", null, "on", { friendly_name: "Kühlschrank Wasserfilter", device_class: "problem" }),
  entity("cover.pool_abdeckung", null, "open", { friendly_name: "Pool Abdeckung", current_position: 70, supported_features: 15 }),
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
  ["camera.haustuer", "d_door"],
  ["event.haustuer_klingel", "d_door"],
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

const [EG, OG, DG] = DEMO_BUILDING.floors;
const place = (entity_id, x, z) => ({ entity_id, x, z, y: null });
EG.placements = [
  place("light.wohnzimmer_decke", 3.0, -3.0),
  { ...place("camera.wohnzimmer", 0.2, -5.8), mount: "wall", rotation: 315 },
  { ...place("camera.haustuer", 8.35, 10.3), mount: "wall", rotation: 90 },
  { ...place("light.stehlampe", -0.55, -2.4), mount: "floor" },
  place("cover.wohnzimmer", 3.0, -5.6),
  place("media_player.fernseher", 5.6, -4.0),
  place("media_player.kueche_lautsprecher", 7.6, 0.45),
  place("switch.kaffeemaschine", 10.6, 0.45),
  place("binary_sensor.kueche_fenster", 8.6, 0.3),
  place("light.flur", 7.4, 6.4),
  { ...place("sensor.gaszaehler", 17.3, 5.6), name: "Gas Garage", show_name: true },
  place("sensor.kuehlschrank_leistung", 6.96, 0.8),
  place("sensor.waschmaschine_leistung", 13.3, 1.0),
  place("sensor.akku_leistung", 15.1, 0.6),
];
OG.placements = [
  place("light.schlafzimmer", 8.1, 2.0),
  { ...place("light.nachttisch", 9.55, 4.37), mount: "table" },
  place("media_player.bad_lautsprecher", 1.8, 6.8),
  place("light.schreibtisch", 13.1, 8.6),
  place("sensor.pc_leistung", 12.0, 8.6),
];
DG.placements = [place("light.studio", 4.0, 4.5)];
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
  gas: "sensor.gaszaehler",
  water: "sensor.wasserzaehler",
};
DEMO_BUILDING.presence = [
  { person: "person.mia", sensor: "sensor.mia_raum" },
  { person: "person.tom", sensor: "sensor.tom_raum" },
  { person: "person.lea", sensor: "sensor.lea_raum" },
];

// Invented doors and windows, each given by a point on the room's wall: the edge and the offset are found from it.
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
function at(floor, type, room_id, [x, z], width, extra = {}) {
  const pts = floor.rooms.find((r) => r.id === room_id).points;
  for (let e = 0; e < pts.length; e++) {
    const [ax, az] = pts[e];
    const [bx, bz] = pts[(e + 1) % pts.length];
    const len = Math.hypot(bx - ax, bz - az);
    const t = ((x - ax) * (bx - ax) + (z - az) * (bz - az)) / (len * len);
    const dist = Math.hypot(ax + (bx - ax) * t - x, az + (bz - az) * t - z);
    if (t > 0 && t < 1 && dist < 0.02) return hole(type, room_id, e, Math.round(t * len * 1000) / 1000, width, extra);
  }
  throw new Error(`no wall of ${room_id} at ${x}, ${z}`);
}
const terrace = { sill: 0, height: 2.15 };
const passage = { style: "passage" };
EG.openings = [
  // the living wing: a glass gable, a double terrace door to the courtyard, the bay's three windows
  at(EG, "window", "wohnen", [3, -6], 3.6, { ...terrace, height: 2.3, style: "glass_wall", contact: "none" }),
  at(EG, "window", "wohnen", [6, -1.5], 2.4, { ...terrace, style: "slide", contact: "binary_sensor.wohnzimmer_terrasse", contact2: "binary_sensor.wohnzimmer_terrasse_2", hinge: "right" }),
  at(EG, "window", "wohnen", [-0.9, -3], 1.3, { contact: "none" }),
  at(EG, "window", "wohnen", [-0.45, -1.85], 0.6, { contact: "none" }),
  at(EG, "window", "wohnen", [-0.45, -4.15], 0.6, { contact: "none" }),
  at(EG, "door", "wohnen", [3, 0], 3.0, passage),
  at(EG, "window", "essen", [0, 2.3], 1.6, { contact: "none" }),
  at(EG, "door", "essen", [6, 2.3], 2.0, passage),
  at(EG, "door", "essen", [2.6, 4.6], 0.9),
  at(EG, "window", "kueche", [8.6, 0], 1.4),
  at(EG, "door", "kueche", [7.0, 4.6], 1.0, { hinge: "right" }),
  at(EG, "door", "kueche", [11, 2.8], 0.9),
  at(EG, "window", "hwr", [12.5, 0], 1.0, { contact: "none" }),
  at(EG, "door", "hwr", [14, 3.8], 0.9),
  at(EG, "window", "gast", [0, 6.8], 1.2, { contact: "none" }),
  at(EG, "door", "gwc", [5.2, 5.4], 0.8),
  at(EG, "door", "garderobe", [5.2, 7.6], 1.2, passage),
  at(EG, "window", "garderobe", [4.4, 9], 0.6, { sill: 1.3, height: 0.8, contact: "none" }),
  at(EG, "door", "flur", [7.4, 10.2], 1.2, { swing: "out", style: "sidelight" }),
  at(EG, "window", "flur", [5.9, 9], 0.9, { contact: "none" }),
  at(EG, "door", "hobby", [9.6, 8.55], 0.8),
  at(EG, "window", "hobby", [11.8, 9], 1.6, { contact: "none" }),
  at(EG, "window", "hobby", [14, 7.6], 1.0, { contact: "none" }),
  at(EG, "garage", "garage", [15.8, 6], 2.6, { sill: 0, height: 2.1 }),
  at(EG, "door", "garage", [16.9, 0], 0.9),
  at(EG, "window", "garage", [17.6, 3.0], 1.0, { contact: "none" }),
];
OG.openings = [
  at(OG, "window", "kind", [0, 2.3], 1.2),
  at(OG, "door", "kind", [4.0, 4.6], 0.7),
  at(OG, "door", "ankleide", [6.2, 2.3], 0.8),
  at(OG, "door", "ankleide", [5.3, 4.6], 0.8),
  at(OG, "window", "schlafen", [6.95, 0], 0.9, { contact: "binary_sensor.schlafzimmer_fenster", tilt: "binary_sensor.schlafzimmer_kipp" }),
  at(OG, "window", "schlafen", [8.4, 0], 1.0, { ...terrace, contact: "none" }),
  at(OG, "door", "schlafen", [6.65, 4.6], 0.8),
  at(OG, "window", "jugend", [12.1, 0], 1.2, { contact: "none" }),
  at(OG, "window", "jugend", [14, 1.4], 0.9, { ...terrace, contact: "none" }),
  at(OG, "door", "jugend", [10.5, 4.6], 0.8),
  at(OG, "window", "bad", [0, 6.0], 0.8, { sill: 1.2, height: 1.0, contact: "binary_sensor.bad_fenster" }),
  at(OG, "window", "bad", [1.8, 9], 0.8, { sill: 1.3, height: 0.8, contact: "none" }),
  at(OG, "door", "bad", [3.6, 5.6], 0.8),
  at(OG, "window", "galerie", [6.9, 9], 1.6, { contact: "none" }),
  at(OG, "door", "arbeit", [11, 6.0], 0.9),
  at(OG, "window", "arbeit", [12.5, 9], 1.4, { contact: "none" }),
  at(OG, "window", "arbeit", [14, 7.6], 1.0, { contact: "none" }),
];
DG.openings = [
  at(DG, "window", "studio", [0, 4.5], 1.0, { contact: "none" }),
  at(DG, "door", "studio", [8, 4.5], 0.9),
  at(DG, "window", "loft", [14, 4.5], 1.0, { contact: "none" }),
];

let furnitureId = 0;
const item = (type, x, z, w, d, h, rotation = 0) => ({ id: `m${++furnitureId}`, type, x, z, w, d, h, rotation, variant: null });
const tvPicture = [{ entity: "media_player.fernseher", attribute: "app_name", state: "netflix", image: "pic_demo" }];
EG.furniture = [
  // living wing: a corner sofa facing the TV on the east wall, a reading chair in the bay
  item("rug", 3.6, -4.0, 2.4, 3.0, 0.01),
  item("sofa_l", 2.4, -4.0, 2.6, 1.8, 0.82, 270),
  item("coffee_table", 3.9, -4.0, 0.6, 1.1, 0.42),
  { ...item("tv_board", 5.77, -4.0, 1.8, 0.42, 0.5, 90), pictures: tvPicture },
  { ...item("led_strip", 5.96, -4.0, 1.6, 0.04, 0.03, 90), entity: "light.led_band" },
  item("armchair", -0.3, -3.0, 0.85, 0.85, 0.8, 270),
  { ...item("radiator", -0.82, -3.0, 1.0, 0.1, 0.6, 270), entity: "climate.wohnzimmer" },
  item("shelf", 0.18, -5.2, 1.2, 0.35, 1.9, 270),
  item("plant", 5.5, -5.5, 0.5, 0.5, 1.2),
  item("plant", 0.6, -0.5, 0.45, 0.45, 1.0),
  { ...item("wall_switch", 5.994, -0.3, 0.156, 0.012, 0.085, 90), gangs: [{ entity: "light.wohnzimmer_decke" }, { entity: "light.stehlampe" }] },
  { ...item("wall_socket", 0.006, -0.8, 0.156, 0.014, 0.085, 270), gangs: [{ entity: "switch.kaffeemaschine" }, { entity: "switch.kaffeemaschine" }] },
  { ...item("robot_vacuum", 2.2, -1.4, 0.36, 0.5, 0.1, 270), entity: "vacuum.saugi" },
  // dining: a table for six under the pendant lamp
  item("table", 3.0, 2.3, 2.2, 1.0, 0.75),
  ...[
    [2.3, 1.55, 0],
    [3.7, 1.55, 0],
    [2.3, 3.05, 180],
    [3.7, 3.05, 180],
    [1.6, 2.3, 270],
    [4.4, 2.3, 90],
  ].map(([x, z, r]) => item("chair", x, z, 0.45, 0.5, 0.9, r)),
  { ...item("lamp_pendant", 3.0, 2.3, 0.3, 0.3, 0.95), entity: "light.esstisch", variant: "globe" },
  item("sideboard", 0.25, 2.3, 1.8, 0.45, 0.8, 270),
  // kitchen: a row along the window wall and an island with bar stools
  item("kitchen_tall", 6.33, 0.31, 0.6, 0.62, 2.1),
  item("fridge", 6.96, 0.36, 0.6, 0.66, 1.85),
  item("kitchen", 7.65, 0.31, 0.7, 0.62, 0.92),
  item("sink", 8.6, 0.31, 0.9, 0.62, 0.92),
  item("dishwasher", 9.35, 0.31, 0.6, 0.62, 0.92),
  item("stove", 9.95, 0.31, 0.6, 0.62, 0.92),
  item("kitchen", 10.6, 0.31, 0.7, 0.62, 0.92),
  item("kitchen_wall", 7.65, 0.18, 0.7, 0.35, 0.7),
  item("kitchen_wall", 10.3, 0.18, 1.3, 0.35, 0.7),
  item("island", 8.5, 2.3, 2.2, 1.0, 0.92),
  ...[7.8, 8.5, 9.2].map((x) => item("bar_stool", x, 3.15, 0.42, 0.42, 0.75)),
  { ...item("lamp_ceiling", 7.6, 2.3, 0.45, 0.45, 0.08), entity: "light.kueche_links" },
  { ...item("lamp_ceiling", 9.4, 2.3, 0.45, 0.45, 0.08), entity: "light.kueche_rechts" },
  // utility room: washer and dryer by the garage door
  { ...item("washer", 13.67, 1.0, 0.6, 0.6, 0.85, 90), holo: true },
  item("dryer", 13.67, 1.7, 0.6, 0.6, 0.85, 90),
  item("shelf", 11.18, 1.0, 1.2, 0.35, 1.9, 270),
  item("tall_cabinet", 12.4, 0.31, 0.6, 0.6, 2.1),
  item("water_heater", 13.7, 3.2, 0.56, 0.56, 1.5),
  // guest room, guest WC, cloakroom
  item("bed", 1.8, 7.97, 1.6, 2.0, 0.9, 180),
  item("nightstand", 0.7, 8.78, 0.45, 0.4, 0.5, 180),
  item("nightstand", 2.9, 8.78, 0.45, 0.4, 0.5, 180),
  item("wardrobe", 3.29, 5.7, 1.4, 0.6, 2.1, 90),
  item("wc", 4.4, 6.08, 0.38, 0.6, 0.8, 180),
  item("washbasin", 3.83, 5.3, 0.6, 0.46, 0.85, 270),
  item("wardrobe", 3.91, 7.6, 1.6, 0.6, 2.1, 270),
  item("bench", 4.6, 8.75, 1.0, 0.4, 0.45, 180),
  // hall: the stairs up, a sideboard by the front door
  item("stairs", 8.7, 6.9, 1.0, 3.2, 2.75),
  item("sideboard", 5.9, 8.78, 1.2, 0.4, 0.8, 180),
  item("rug", 7.0, 6.8, 1.2, 2.6, 0.01),
  // hobby room: a games corner with a neon sign
  { ...item("tv_wall", 11.8, 4.66, 1.6, 0.08, 0.9), pictures: tvPicture },
  item("sofa_u", 11.8, 7.0, 3.0, 2.2, 0.82, 180),
  item("coffee_table", 11.8, 6.6, 1.0, 0.6, 0.4),
  { ...item("neon_sign", 9.62, 6.6, 2.0, 0.03, 0.6, 270), entity: "light.neon_schild", sign_text: "Game Room", sign_color: "#ff3fb4" },
  // garage and carport
  {
    ...item("parking", 15.8, 3.4, 2.6, 5.0, 0.02, 0),
    entity: "binary_sensor.garage_auto",
    car: { soc: "sensor.van_ladestand", range: "sensor.van_reichweite", charging: "sensor.van_ladeleistung", lock: "lock.van", climate: "switch.van_klima" },
    vehicle: "pack:mastershort.vehicles:van",
    scale: 0.95,
    type_entity: "sensor.garage_fahrzeugtyp",
    types: [
      { state: "van", vehicle: "pack:mastershort.vehicles:van" },
      { state: "suv", vehicle: "pack:mastershort.vehicles:suv" },
    ],
  },
  { ...item("parking", 15.8, 9.0, 2.6, 5.0, 0.02, 0), entity: "device_tracker.zweitwagen", vehicle: "pack:mastershort.vehicles:compact" },
  // the terrace in the courtyard: a table for six, a lounge corner, pots
  item("table", 8.6, -2.3, 2.0, 0.9, 0.75),
  ...[
    [8.0, -3.0, 0],
    [9.2, -3.0, 0],
    [8.0, -1.6, 180],
    [9.2, -1.6, 180],
    [7.3, -2.3, 270],
    [9.9, -2.3, 90],
  ].map(([x, z, r]) => item("chair", x, z, 0.45, 0.5, 0.9, r)),
  item("sofa_l", 11.5, -2.9, 2.0, 1.6, 0.7, 180),
  item("coffee_table", 11.4, -1.6, 0.9, 0.5, 0.35),
  item("plant", 6.8, -3.8, 0.5, 0.5, 1.1),
  item("plant", 12.2, -0.7, 0.5, 0.5, 1.0),
  item("bench", 18.2, -3.9, 1.4, 0.45, 0.85, 90),
  // outside: path lights, the pool light, the light at the front door, bins and the mailbox
  ...[
    [6.3, 11.6],
    [6.3, 13.8],
    [8.9, 11.6],
    [8.9, 13.8],
  ].map(([x, z]) => ({ ...item("lamp_bollard", x, z, 0.16, 0.16, 0.8), entity: "light.garten" })),
  { ...item("lamp_garden", 14.6, -7.6, 0.12, 0.12, 0.3), entity: "light.pool" },
  { ...item("lamp_wall", 8.7, 9.32, 0.22, 0.12, 0.2), entity: "light.haustuer" },
  item("waste_bin", 13.5, 9.6, 0.58, 0.73, 1.07),
  item("waste_bin", 12.8, 9.6, 0.58, 0.73, 1.07),
  item("mailbox", 9.0, 10.32, 0.38, 0.14, 0.34),
  // vegetation from the garden pack: an oak and a birch in the back garden, a fruit tree in the front
  item("pack:mastershort.garden:tree_oak", -1.5, -11.0, 5.0, 5.0, 7.0),
  item("pack:mastershort.garden:tree_birch", 21.0, -1.5, 3.2, 3.2, 7.5),
  item("pack:mastershort.garden:shrub", 7.0, -5.2, 1.3, 1.3, 1.2),
  item("pack:mastershort.garden:shrub", -2.6, 1.5, 1.3, 1.3, 1.4),
  item("pack:mastershort.garden:tree_fruit", 2.4, 13.8, 3.2, 3.2, 3.6),
  item("pack:mastershort.garden:shrub", 5.0, 14.4, 1.6, 1.6, 1.1),
  item("pack:mastershort.garden:shrub", 12.9, -12.6, 1.4, 1.4, 1.2),
  item("pack:mastershort.garden:tree_birch", -2.4, 6.0, 2.8, 2.8, 6.5),
];
OG.furniture = [
  // children's room: a ceiling fan with light, a bunk bed
  { ...item("lamp_fan", 2.2, 2.3, 1.3, 1.3, 0.45), entity: "light.kinderzimmer", fan: "fan.kinderzimmer" },
  item("bunk_bed", 1.1, 0.55, 1.0, 2.05, 1.65, 270),
  item("desk", 3.6, 4.27, 1.2, 0.6, 0.75, 180),
  item("rug", 2.2, 2.6, 1.6, 1.2, 0.01),
  item("shelf", 4.22, 1.6, 1.0, 0.35, 1.6, 90),
  // walk-in wardrobe
  item("wardrobe", 4.71, 2.0, 2.4, 0.6, 2.2, 270),
  item("wardrobe", 5.89, 1.0, 1.4, 0.6, 2.2, 90),
  item("dresser", 5.3, 4.32, 1.0, 0.5, 0.9, 180),
  // bedroom with a balcony
  { ...item("bed", 8.4, 3.54, 1.8, 2.05, 0.9, 180), state_entity: "binary_sensor.bett_links", state_entity2: "binary_sensor.bett_rechts", state_split: "left_right" },
  item("nightstand", 7.25, 4.37, 0.45, 0.4, 0.5, 180),
  item("nightstand", 9.55, 4.37, 0.45, 0.4, 0.5, 180),
  { ...item("radiator", 6.95, 0.08, 0.9, 0.1, 0.6), entity: "climate.schlafzimmer" },
  item("armchair", 9.5, 0.7, 0.8, 0.8, 0.8, 315),
  // the teenager's room opens onto the roof terrace
  item("bed", 12.6, 3.57, 1.4, 2.0, 0.85, 180),
  item("desk", 10.31, 2.0, 1.4, 0.6, 0.75, 270),
  item("office_chair", 10.95, 2.0, 0.65, 0.65, 1.1, 90),
  { ...item("led_strip", 12.6, 4.56, 1.6, 0.04, 0.03, 180), entity: "light.led_band" },
  // bathroom: tub, walk-in shower, two basins
  item("bathtub", 0.42, 7.6, 1.7, 0.75, 0.58, 270),
  item("shower", 3.1, 8.5, 0.9, 0.9, 2.0),
  item("washbasin", 1.2, 4.83, 0.6, 0.46, 0.85),
  item("washbasin", 2.0, 4.83, 0.6, 0.46, 0.85),
  item("wc", 3.29, 6.6, 0.38, 0.6, 0.8, 90),
  ...[
    [0.9, 5.6],
    [2.6, 5.6],
    [0.9, 7.6],
    [2.6, 7.6],
  ].map(([x, z]) => ({ ...item("lamp_downlight", x, z, 0.1, 0.1, 0.02), entity: "light.bad" })),
  // the gallery: the stairs up to the studio, a reading corner
  item("stairs", 5.0, 6.9, 1.0, 3.2, 2.75),
  item("armchair", 10.2, 7.5, 0.8, 0.8, 0.8, 180),
  item("lamp_floor", 10.7, 8.6, 0.4, 0.4, 1.7),
  item("shelf", 10.2, 8.78, 1.2, 0.35, 1.9, 180),
  item("plant", 6.0, 5.0, 0.5, 0.5, 1.1),
  // office: a desk under the window, the living-room camera on its screen
  { ...item("desk", 12.5, 8.6, 1.6, 0.7, 0.75, 180), pictures: [{ entity: "camera.wohnzimmer", state: "*", image: "camera:camera.wohnzimmer" }] },
  item("office_chair", 12.5, 7.9, 0.65, 0.65, 1.1),
  item("shelf", 13.82, 6.0, 1.2, 0.35, 1.9, 90),
];
DG.furniture = [
  // studio: a sofa corner under the ridge, a desk in the dormer
  item("sofa_l", 3.6, 4.5, 2.6, 1.8, 0.82, 0),
  item("rug", 3.6, 5.0, 2.6, 2.0, 0.01),
  item("desk", 2.6, 0.7, 1.4, 0.6, 0.75, 180),
  item("office_chair", 2.6, 1.35, 0.65, 0.65, 1.1, 180),
  { ...item("lamp_floor", 1.4, 4.5, 0.4, 0.4, 1.7), entity: "light.studio" },
  item("shelf", 0.18, 3.0, 1.2, 0.35, 1.4, 270),
  // guest loft
  item("bed", 12.8, 4.5, 1.6, 2.0, 0.85, 90),
  item("nightstand", 13.7, 3.2, 0.45, 0.4, 0.5, 90),
  item("desk", 11.2, 0.7, 1.2, 0.6, 0.75, 180),
  item("armchair", 9.4, 5.6, 0.8, 0.8, 0.8, 90),
];

// The garden: lawns around the L, a terrace in the courtyard, a pool, a pergola, a front garden with a path and a
// driveway falling to the street, a fence with a sliding gate and a garden gate; a balcony and a roof terrace upstairs.
const area = (id, type, x0, z0, x1, z1) => ({ id, type, points: [[x0, z0], [x1, z0], [x1, z1], [x0, z1]] });
EG.outdoor = [
  // the garden acts as a room: tapped, it opens with its lights and the outdoor temperature (#100)
  {
    id: "a1",
    type: "lawn",
    area_id: "garten",
    name: "Garten",
    points: [
      [-4, -14],
      [22, -14],
      [22, -0.3],
      [6.4, -0.3],
      [6.4, -6.4],
      [-1.3, -6.4],
      [-1.3, -0.3],
      [-4, -0.3],
    ],
  },
  area("a2", "lawn", -4, -0.3, -0.4, 9.6),
  area("a3", "lawn", -4, 9.6, 6.2, 16),
  area("a4", "terrace", 6.4, -4.2, 12.6, -0.3),
  {
    ...area("a5", "pool", 9, -11.5, 15, -8),
    // Pool Pro: skimmer and bottom drain suck, two inlets return, the backwash goes to a drain by the pergola
    pool: {
      ports: [
        { id: "sk", kind: "skimmer", x: 10.2, z: -8 },
        { id: "bd", kind: "drain", x: 12, z: -9.75 },
        { id: "in1", kind: "inlet", x: 13.8, z: -8 },
        { id: "in2", kind: "inlet", x: 15, z: -10.6 },
        { id: "kanal", kind: "waste", x: 17.8, z: -7.6 },
      ],
      pipes: [
        { id: "p_sk", from: "port:sk", to: "dev:pt_pump", floor_id: "eg", points: [[10.2, -7.4], [16.4, -7.4]] },
        { id: "p_bd", from: "port:bd", to: "dev:pt_pump", floor_id: "eg", points: [[12, -7.2], [16.4, -7.2]] },
        { id: "p_pf", from: "dev:pt_pump", to: "dev:pt_filter", floor_id: "eg", points: [] },
        { id: "p_wp1", from: "dev:pt_filter", to: "dev:pt_wp", floor_id: "eg", points: [] },
        { id: "p_in1", from: "dev:pt_wp", to: "port:in1", floor_id: "eg", points: [[17.8, -7.0], [13.8, -7.0]] },
        { id: "p_in2", from: "dev:pt_wp", to: "port:in2", floor_id: "eg", points: [[16.2, -10.6]] },
        { id: "p_ws", from: "dev:pt_filter", to: "port:kanal", floor_id: "eg", points: [], height: 0.1 },
      ],
    },
  },
  area("a6", "path", 6.8, 10.44, 8.0, 16),
  { ...area("a7", "driveway", 14.2, 6.3, 17.4, 16), slope: 0.35, slope_dir: "-z" },
  area("a8", "hedge", -4.5, -14.5, -3.9, 15.5),
  area("a9", "bed", 0.8, 11.0, 5.4, 12.0),
  area("a10", "bed", 6.6, -6.2, 9.0, -4.6),
  // the fence has a sliding gate at the driveway and a garden gate at the path (#818)
  {
    ...area("a11", "fence", -5, -15, 23, 16),
    gates: [
      { id: "gate_drive", edge: 2, at: 7.2, width: 3.4, kind: "slide", entity: "cover.einfahrtstor" },
      { id: "gate_path", edge: 2, at: 15.6, width: 1.1, contact: "binary_sensor.gartenpforte" },
    ],
  },
  // a wild patch cut out of the back lawn, a pergola with bracing beside the pool
  { ...area("a12", "wild", 1.0, -12.5, 5.0, -9.5), cut: true },
  { ...area("a13", "pergola", 16.4, -5.4, 20.0, -2.4), height: 2.3, bracing: true },
];
// free walls: a partition in the garage closes off a niche for the technique (with a door), a parapet on the
// gallery runs along the stair opening
EG.walls = [{ id: "wall_garage", a: [14, 0.85], b: [16.6, 0.85], thickness: null, height: null }];
EG.openings.push(hole("door", "garage", 0, 1.2, 0.9, { wall: "wall_garage" }));
OG.walls = [{ id: "wall_gallery", a: [8.1, 5.3], b: [8.1, 8.5], thickness: 0.1, height: 1.0 }];
OG.outdoor = [
  // the bedroom balcony over the terrace and the roof terrace on the garage (railings only where no wall is)
  { ...area("b1", "balcony", 7.0, -1.6, 9.8, -0.24), name: "Balkon" },
  { ...area("b2", "balcony", 14.24, -0.24, 17.84, 6.24), name: "Dachterrasse" },
];
// Pool Pro: the pool's technique beside the pergola, the heat pump behind it
EG.furniture.push(
  { ...item("pool_pump", 16.6, -7.3, 0.7, 0.32, 0.4), id: "pt_pump" },
  { ...item("pool_filter", 17.5, -7.3, 0.6, 0.6, 1.0), id: "pt_filter" },
  { ...item("pool_heat_pump", 17.8, -9.4, 1.0, 0.45, 0.75, 90), id: "pt_wp" },
);
// meter, solar inverters, home battery and wallbox in the garage
EG.furniture.push(
  { ...item("meter", 17.2, 0.11, 0.55, 0.21, 1.1), power: "sensor.netz_leistung" },
  { ...item("inverter", 16.4, 0.11, 0.5, 0.2, 0.65), id: "inv_main", power: "sensor.pv_leistung" },
  // a balcony plant of its own: a small inverter with its field on the north face
  { ...item("inverter", 15.75, 0.11, 0.3, 0.15, 0.4), id: "inv_balkon", name: "Balkonkraftwerk", power: "sensor.balkon_leistung" },
  { ...item("home_battery", 15.0, 0.14, 0.6, 0.25, 1.1), power: "sensor.akku_leistung", soc: "sensor.akku_ladestand" },
  item("wallbox", 17.45, 3.6, 0.3, 0.15, 0.42, 90),
);
DEMO_BUILDING.settings = {
  ...DEMO_BUILDING.settings,
  north: 0,
  // the house opens from the garden side: the living wing, the terrace, the pool
  start_view: { theta: 2.75, phi: 0.9, radius: 44, target: { x: 8, y: 1, z: -2 } },
  // the Halloween pack stays unlocked (so the demo offers no gift pop-up), its ghost is switched off – Halloween is over
  halloween: { ghost: false },
  favorites: ["scene.wohnzimmer_film", "scene.wohnzimmer_lesen", "script.gute_nacht"],
  buttons: [
    { id: "b1", label: "Rollos", icon: "window-shutter", action: "fire_dom_event", data: { browser_mod: { service: "browser_mod.popup", data: { title: "Rollos" } } } },
    { id: "b2", label: "Energie", icon: "lightning-bolt", action: "navigate", target: "/energy" },
  ],
  roof: {
    type: "custom",
    pitch: 35,
    overhang: 0.45,
    sections: [
      // the main house: a gable over two storeys with knee walls, two dormers on the garden side
      { id: "main", x0: -0.24, z0: -0.24, x1: 14.24, z1: 9.24, shape: "gable", axis: "x", eave_a: 5.9, eave_b: 5.9, pitch_a: 35, pitch_b: 35, base: 5.25 },
      { id: "gaube_1", x0: 1.6, z0: -0.24, x1: 3.6, z1: 2.76, shape: "gable", axis: "z", eave_a: 7.3, eave_b: 7.3, pitch_a: 35, pitch_b: 35, base: 5.9, overhang: 0.15, dormer: true },
      { id: "gaube_2", x0: 10.2, z0: -0.24, x1: 12.2, z1: 2.76, shape: "gable", axis: "z", eave_a: 7.3, eave_b: 7.3, pitch_a: 35, pitch_b: 35, base: 5.9, overhang: 0.15, dormer: true },
      // the living wing: a lower gable at right angles, its glass gable towards the garden
      { id: "fluegel", x0: -0.24, z0: -6.24, x1: 6.24, z1: -0.24, shape: "gable", axis: "z", eave_a: 2.5, eave_b: 2.5, pitch_a: 40, pitch_b: 40, base: 2.5, overhang_sides: [0.15, null, null, null] },
      // the bay window: a flat roof of its own
      { id: "erker", x0: -1.14, z0: -4.64, x1: -0.24, z1: -1.36, shape: "flat", axis: "z", eave_a: 2.5, eave_b: 2.5, pitch_a: 0, pitch_b: 0, base: 2.5, overhang: 0.1 },
      // the carport: posts and a see-through roof over the second car
      { id: "carport", x0: 14.24, z0: 6.4, x1: 17.6, z1: 11.6, shape: "pent", axis: "x", flip: true, eave_a: 2.4, eave_b: 2.4, pitch_a: 4, pitch_b: 4, base: 2.4, open: true, overhang: 0.1 },
    ],
    // a solar field of 2 × 8 modules on the street side, a balcony plant on the garden side
    solar: [
      { id: "pv_sued", face: "main:b", u: 0.8, v: 0.75, rows: 2, cols: 8, portrait: true, string: "str_main" },
      { id: "pv_balkon", face: "main:a", u: 6.2, v: 0.75, rows: 1, cols: 2, portrait: true, string: "str_balkon" },
    ],
    strings: [
      { id: "str_main", name: "Strang Süd", entity: null, inverter: "inv_main" },
      { id: "str_balkon", name: "Balkon", entity: null, inverter: "inv_balkon" },
    ],
    // two roof windows over the guest loft: one open, with the blind half down
    windows: [
      { id: "dachfenster", face: "main:b", u: 11.2, v: 1.2, contact: "binary_sensor.schlafzimmer_fenster", cover: "cover.kueche" },
      { id: "dachfenster_2", face: "main:b", u: 12.8, v: 1.2 },
    ],
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

// Further floor plans for ?plans – invented as well: a garden house beside the house, a holiday flat far away.
const smallPlan = (floors) => ({ version: 1, settings: { wall_exterior: 0.2, wall_interior: 0.1, grid: 0.05 }, floors });
const withRoof = (floors) => ({ ...smallPlan(floors), settings: { ...smallPlan(floors).settings, roof: { type: "gable", pitch: 30, overhang: 0.3 } } });
export const DEMO_PLANS = [
  {
    id: "pgarten",
    name: "Gartenhaus",
    icon: "🏡",
    site: { on: true, x: 15.8, y: -14.4, rot: 0 },
    building: withRoof([
      {
        ...floor("gh", "Gartenhaus", 0, [rect("werk", "Werkstatt", "garten", 0, 0, 4, 3, "concrete"), rect("lounge", "Lounge", null, 4, 0, 7, 3)]),
        placements: [place("light.garten", 2, 1.5), place("sensor.garten_temperatur", 5.5, 1.5)],
      },
    ]),
  },
  {
    id: "pferien",
    name: "Ferienwohnung",
    icon: "🏖️",
    site: null,
    building: smallPlan([
      floor("fw", "Wohnung", 0, [rect("fw_wohnen", "Wohnen", null, 0, 0, 5, 4), rect("fw_schlafen", "Schlafen", null, 5, 0, 8, 4, "carpet"), rect("fw_bad", "Bad", null, 5, 4, 8, 6, "tiles")]),
    ]),
  },
];
