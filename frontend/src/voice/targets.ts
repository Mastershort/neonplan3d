// What a spoken sentence asks NeonPlan to show: a device ("Zeig die Waschmaschine", "wo ist die Stehlampe"), a
// camera to look through ("Zeig die Kamera Haustür", "die Kamera im Garten"), all cameras ("Zeig die Kameras"), or a
// place (a room, a floor, the house). Matched on the names in the plan and in Home Assistant – a piece of furniture
// answers to its own name, its kind ("Waschmaschine") and a few everyday words for it ("TV", "Glotze"), with or
// without an entity.

import type { Building } from "../model.ts";
import { findPlace, normalize, showCommand, type Place, type RoomAlias } from "./commands.ts";

/** A device or piece of furniture that can be shown. */
export interface Shown {
  /** The entity, or "furniture:<id>" for an item without one. */
  id: string;
  entity: string | null;
  /** The name shown back ("Waschmaschine", "Kamera Haustür"). */
  name: string;
  /** Every name it answers to (its own name, its kind, the entity's name, synonyms); `name` when left out. */
  names?: string[];
  /** The room (or outdoor area) it stands in, as named in the plan ("" when none). */
  room: string;
  camera: boolean;
}

export type Target = Place | { kind: "device"; id: string; entity: string | null; name: string; camera: boolean } | { kind: "cameras"; name: string };

/** Words that ask to see something, and "where is …" (the place words of commands.ts and a few more). */
const SHOW = /\b(zeig|zeige|zeigt|geh|gehe|wechsel|wechsle|oeffne|offne|spring|springe|navigier|wo|where|show|go|open|switch|jump|find|toon|waar|ga|montre|affiche|ou|va|mostra|dove|vai|apri|muestra|donde|ve|abre|mostre|visa|vis|hvor|nayta|missa|pokaz|gdzie|ukaz|kde|pokazi|arata|unde|mutasd|hol)\b/;
/** "camera" in the languages NeonPlan speaks (plural forms end the same way or are listed). */
const CAMERA = /\b(kamera|kameras|camera|cameras|cam|cams|camera's|telecamera|telecamere|camara|camaras|kamerat|kameraer|kamery|kamere|camerele|kamerak)\b/;
const CAMERAS = /\b(kameras|cameras|cams|camera's|telecamere|camaras|kamerat|kameraer|kamery|kamere|camerele|kamerak|alle kamera|all camera)\b/;

/**
 * Words in an entity's name that say what it measures, not what it is: "Waschmaschine Leistung" is asked for as
 * "Waschmaschine". They only drop out while other words remain.
 */
const GENERIC = new Set(
  "leistung verbrauch strom energie sensor status zustand schalter steckdose stecker stromzähler zähler temperatur power consumption energy state switch plug socket outlet meter sensor temperature current puissance consommation prise potenza consumo presa potencia enchufe".split(" "),
);

/**
 * Everyday words for a kind of furniture (German and English; other languages answer to the kind's translated
 * name). Spoken forms only – what people actually say at a wall tablet.
 */
export const SYNONYMS: Record<string, string[]> = {
  washer: ["waschmaschine", "waschi", "Wäsche", "washer", "washing machine", "laundry"],
  dryer: ["trockner", "Wäschetrockner", "dryer", "tumble dryer"],
  dishwasher: ["Spülmaschine", "Spüler", "Geschirrspüler", "dishwasher"],
  fridge: ["Kühlschrank", "fridge", "refrigerator"],
  fridge_smart: ["Kühlschrank", "fridge", "refrigerator"],
  stove: ["herd", "kochfeld", "ofen", "stove", "cooktop", "oven", "hob"],
  tv_board: ["fernseher", "tv", "glotze", "fernsehen", "television", "telly"],
  tv_wall: ["fernseher", "tv", "glotze", "fernsehen", "television", "telly"],
  desk: ["schreibtisch", "computer", "pc", "rechner", "desk"],
  robot_vacuum: ["staubsauger", "saugroboter", "sauger", "roboter", "robot", "vacuum", "hoover"],
  pool_pump: ["poolpumpe", "pumpe", "pool pump", "pump"],
  pool_filter: ["filter", "sandfilter", "pool filter"],
  pool_heat_pump: ["Pool Wärmepumpe", "Wärmepumpe", "heat pump"],
  inverter: ["wechselrichter", "solar", "pv", "photovoltaik", "inverter", "solar inverter"],
  home_battery: ["speicher", "akku", "batterie", "stromspeicher", "battery", "home battery"],
  wallbox: ["wallbox", "ladestation", "auto laden", "charger", "car charger"],
  meter: ["Stromzähler", "Zähler", "Zählerschrank", "meter", "electricity meter"],
  water_heater: ["warmwasser", "boiler", "warmwasserspeicher", "water heater", "hot water"],
  wifi_ap: ["wlan", "access point", "router", "wifi", "wi fi"],
  lamp_fan: ["ventilator", "deckenventilator", "fan", "ceiling fan"],
  radiator: ["heizung", "Heizkörper", "radiator", "heating"],
  ac_unit: ["klimaanlage", "klima", "Klimagerät", "air conditioner", "ac", "aircon"],
  sofa: ["couch", "sofa"],
  sofa_l: ["couch", "sofa", "ecksofa"],
  sofa_u: ["couch", "sofa"],
  bed: ["bett", "bed"],
  waste_bin: ["Mülltonne", "tonne", "Müll", "bin", "waste bin", "trash"],
  mailbox: ["briefkasten", "post", "mailbox", "letterbox"],
  neon_sign: ["neon", "leuchtschrift", "schild", "sign"],
  awning: ["markise", "awning"],
  parking: ["auto", "wagen", "stellplatz", "car", "parking"],
  led_strip: ["led", "led streifen", "lichtleiste", "led strip"],
  wall_socket: ["steckdose", "socket", "outlet"],
  wall_switch: ["lichtschalter", "schalter", "light switch", "switch"],
};

/** German compounds end in the thing itself: "auffahrtkamera" is said as "auffahrt" and "kamera", "flurlicht" as "flur" and "licht". */
const COMPOUND_TAILS = ["kamera", "cam", "licht", "lampe", "leuchte", "tuer", "tur", "tor", "fenster", "steckdose", "schalter", "sensor", "heizung", "pumpe", "melder", "light", "lamp", "camera", "door", "window", "sensor"];
const split = (w: string): string[] => {
  for (const tail of COMPOUND_TAILS) {
    if (w.length > tail.length + 2 && w.endsWith(tail)) return [w.slice(0, -tail.length), tail];
  }
  return [w];
};
/** The words of a name or a sentence, compounds split. */
const words = (s: string) => normalize(s).split(" ").filter((w) => w.length > 1).flatMap(split);

/** The words of a name that say what it is: generic measuring words drop out while others remain. */
function telling(name: string): string[] {
  const all = words(name);
  const own = all.filter((w) => !GENERIC.has(w));
  return own.length ? own : all;
}

/**
 * The thing a sentence asks to see, or null (then it is for Assist). A device needs a word that asks to see it
 * ("zeig", "wo ist") – "Licht im Flur an" names the hall light but switches it.
 */
export function showTarget(sentence: string, building: Building, devices: readonly Shown[], alias?: RoomAlias): Target | null {
  const text = normalize(sentence);
  if (!text) return null;
  const asks = SHOW.test(text);
  const said = new Set(words(text));
  const camWord = CAMERA.test(text) || [...said].some((w) => CAMERA.test(w));
  if (asks && CAMERAS.test(text) && devices.some((d) => d.camera)) return { kind: "cameras", name: "" };
  const place = findPlace(sentence, building, alias);
  let best: Shown | null = null;
  let bestScore = 0;
  let bestFull = false;
  let bestWords: string[] = [];
  for (const d of devices) {
    const inRoom = !!d.room && ` ${text} `.includes(` ${normalize(d.room)} `);
    for (const n of d.names?.length ? d.names : [d.name]) {
      const own = telling(n);
      if (!own.length) continue;
      const hit = own.filter((w) => said.has(w)).length;
      const full = hit === own.length;
      // a camera asked for by "camera" and its room or part of its name ("die Kamera im Garten")
      const camera = camWord && d.camera && (hit > 0 || inRoom || devices.filter((x) => x.camera).length === 1);
      if (!full && !camera) continue;
      // longer names first ("Kamera Haustür" over "Kamera"), the one in the room named, cameras asked for as such
      const score = hit + (inRoom ? 0.5 : 0) + (camera ? 1 : 0) + (full ? own.length : 0);
      if (score > bestScore) {
        best = d;
        bestScore = score;
        bestFull = full;
        bestWords = own;
      }
    }
  }
  if (best && asks) {
    // the room wins when the device is only half named ("Zeig das Wohnzimmer" – device "Wohnzimmer Lampe") or
    // its name is no more than the room's ("Wohnzimmer" in the living room); "die Heizung im Wohnzimmer" and
    // "die Wohnzimmer Decke" name the device
    const roomWords = place && place.kind !== "house" ? new Set(words(place.name)) : null;
    const roomBetter = !!roomWords && !best.camera && (!bestFull || bestWords.every((w) => roomWords.has(w)));
    if (!roomBetter) return { kind: "device", id: best.id, entity: best.entity, name: best.name, camera: best.camera };
  }
  return showCommand(sentence, building, alias);
}
