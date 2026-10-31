// Spoken commands: which room, floor or the whole house a sentence names ("Zeig das Wohnzimmer", "geh ins
// Obergeschoss", "show the kitchen"). Matched on the plan's own names, so no sentences have to be taught to anyone.

import { zonesOf, type Building, type Room } from "../model.ts";

export type Place = { kind: "room"; floorId: string; roomId: string; name: string } | { kind: "floor"; floorId: string; name: string } | { kind: "house"; name: string };

/** Lower case, without accents and punctuation: "Kinderzimmer (Lea)!" → "kinderzimmer lea". */
export function normalize(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/ß/g, "ss")
    .replace(/[^a-z0-9一-鿿]+/g, " ")
    .trim();
}

const HOUSE = /\b(ganze[sn]? haus|haus|uebersicht|ubersicht|alles|house|whole house|home|overview|everything)\b/;

/** Whether `name` stands in `text` as whole words. */
function says(text: string, name: string): boolean {
  if (!name) return false;
  return ` ${text} `.includes(` ${name} `);
}

/**
 * The place a sentence names: a room (the longest name that stands in it wins, "Gäste-WC" before "WC"), else a
 * floor, else the whole house; null when it names none.
 */
/** Further names of a room: its Home Assistant area's name and its own aliases. */
export type RoomAlias = (room: Room) => string | null | undefined | (string | null | undefined)[];

export function findPlace(sentence: string, building: Building, alias?: RoomAlias): Place | null {
  const text = normalize(sentence);
  if (!text) return null;
  let best: Place | null = null;
  let len = 0;
  // between names of the same length: a room's own name before an outdoor area's, and both before a further name
  // (the Home Assistant area's, an alias) – "Garage" is the room in the cellar, not the driveway linked to the
  // garage's area (#668)
  let rank = -1;
  for (const floor of building.floors) {
    // outdoor areas acting as rooms ("Garten", "Terrasse") too; a room answers to its Home Assistant area's name as well
    for (const room of zonesOf(floor)) {
      const indoor = room.outdoor ? 0 : 1;
      const further = ([] as (string | null | undefined)[]).concat(alias?.(room) ?? [], room.aliases ?? []);
      for (const [name, own] of [[room.name, true], ...further.map((n) => [n, false] as const)] as const) {
        const n = name ? normalize(name) : "";
        const r = (own ? 2 : 0) + indoor;
        if ((n.length > len || (n.length === len && r > rank)) && says(text, n)) {
          best = { kind: "room", floorId: floor.id, roomId: room.id, name: room.name };
          len = n.length;
          rank = r;
        }
      }
    }
  }
  if (best) return best;
  for (const floor of building.floors) {
    const n = normalize(floor.name);
    if (n.length > len && says(text, n)) {
      best = { kind: "floor", floorId: floor.id, name: floor.name };
      len = n.length;
    }
  }
  if (best) return best;
  return HOUSE.test(text) ? { kind: "house", name: "" } : null;
}

/** Words that ask to see a place ("zeig", "geh ins", "show", "toon", "montre" …). */
const SHOW = /\b(zeig|zeige|zeigt|geh|gehe|wechsel|wechsle|oeffne|offne|spring|springe|navigier|show|go|open|switch|jump|view|toon|ga|open|montre|affiche|va|aller|mostra|vai|apri|muestra|ve|vaya|abre|visa|vis|ga till|naytta|nayta|pokaz|ukaz|prejdi|arata|mergi|pokazi|mutasd|menj|显示|去)\b/;
/** Little words around a bare place name ("das Wohnzimmer bitte"). */
const FILLER = new Set("das den dem die der ins in im zum zur ins nach bitte mal mir mich the to please me my het de naar le la les au a la il lo al el ett en till".split(" "));

/**
 * What a spoken sentence asks NeonPlan to show: a place, when the sentence says "show/go to …" or is no more than a
 * place's name ("Wohnzimmer", "das Obergeschoss bitte"). Null otherwise – the sentence is for Assist then ("Licht im
 * Wohnzimmer an" names the room but switches a light).
 */
export function showCommand(sentence: string, building: Building, alias?: RoomAlias): Place | null {
  const place = findPlace(sentence, building, alias);
  if (!place) return null;
  const text = normalize(sentence);
  if (SHOW.test(text)) return place;
  const theRoom = place.kind === "room" ? zonesOf(building.floors.find((f) => f.id === place.floorId)!).find((r) => r.id === place.roomId) : undefined;
  const names = place.kind === "house" ? [] : [place.name, ...(theRoom ? [...([] as (string | null | undefined)[]).concat(alias?.(theRoom) ?? []), ...(theRoom.aliases ?? [])] : [])];
  let rest = ` ${text} `;
  for (const n of names) if (n) rest = rest.replace(` ${normalize(n)} `, " ");
  if (place.kind === "house") rest = rest.replace(HOUSE, " ");
  return rest.split(" ").every((w) => !w || FILLER.has(w)) ? place : null;
}

/** "here" in the languages NeonPlan speaks (by Home Assistant's language: Danish "her" is no English word here). */
const HERE: Record<string, string[]> = {
  de: ["hier"],
  en: ["here"],
  nl: ["hier"],
  fr: ["ici"],
  it: ["qui", "qua"],
  es: ["aquí", "aqui"],
  pt: ["aqui"],
  da: ["her"],
  nb: ["her"],
  nn: ["her"],
  sv: ["här"],
  fi: ["täällä"],
  cs: ["tady", "zde"],
  pl: ["tutaj", "tu"],
  ro: ["aici"],
  sl: ["tukaj", "tu"],
  sk: ["tu", "tuná"],
  hu: ["itt"],
  zh: ["这里"],
};

/**
 * A sentence for Assist said in the tablet's room, without its "here" ("Mach hier das Licht an" → "Mach das Licht
 * an"): Assist knows the room from the device, and its sentences have no "here".
 */
export function withoutHere(sentence: string, language: string): string {
  const lang = language.toLowerCase().startsWith("no") ? "nb" : language.slice(0, 2).toLowerCase();
  let out = sentence;
  for (const word of HERE[lang] ?? []) {
    out = lang === "zh" ? out.split(word).join("") : out.replace(new RegExp(`(^|[\\s,])${word}(?=[\\s,.!?]|$)`, "giu"), "$1");
  }
  out = out.replace(/\s{2,}/g, " ").replace(/\s+([,.!?])/g, "$1").trim();
  return out || sentence;
}
