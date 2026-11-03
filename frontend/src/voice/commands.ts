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

/** "there" – the room that is open in the view ("Mach da das Licht aus" after tapping into the living room). */
const THERE: Record<string, string[]> = {
  de: ["da", "dort"],
  en: ["there"],
  nl: ["daar"],
  it: ["lì", "là"],
  es: ["allí", "ahí", "alli", "ahi"],
  pt: ["ali", "lá"],
  da: ["der"],
  nb: ["der"],
  nn: ["der"],
  sv: ["där"],
  fi: ["siellä"],
  cs: ["tam"],
  pl: ["tam"],
  ro: ["acolo"],
  sl: ["tam"],
  sk: ["tam"],
  hu: ["ott"],
  zh: ["那里"],
};

function langOf(language: string): string {
  return language.toLowerCase().startsWith("no") ? "nb" : language.slice(0, 2).toLowerCase();
}

function hasWord(sentence: string, words: readonly string[], lang: string): boolean {
  if (lang === "zh") return words.some((w) => sentence.includes(w));
  const text = ` ${normalize(sentence)} `;
  return words.some((w) => text.includes(` ${normalize(w)} `));
}

/** Whether a sentence says "there" (the room open in the view). */
export function saysThere(sentence: string, language: string): boolean {
  const lang = langOf(language);
  return hasWord(sentence, THERE[lang] ?? [], lang);
}

/** The sentence without its "there", for Assist (which then gets the open room's area). */
export function withoutThere(sentence: string, language: string): string {
  const lang = langOf(language);
  let out = sentence;
  for (const word of THERE[lang] ?? []) {
    out = lang === "zh" ? out.split(word).join("") : out.replace(new RegExp(`(^|[\\s,])${word}(?=[\\s,.!?]|$)`, "giu"), "$1");
  }
  out = out.replace(/\s{2,}/g, " ").replace(/\s+([,.!?])/g, "$1").trim();
  return out || sentence;
}

/** Words for sending the robot vacuum ("saug", "staubsaugen", "vacuum", "clean" …), on the normalised sentence. */
const CLEAN =
  /\b(saug\w*|staubsaug\w*|absaug\w*|putz\w*|reinig\w*|wisch\w*|vacuum\w*|hoover\w*|clean\w*|mop|stofzuig\w*|aspir\w*|nettoi\w*|pulisci|limpia\w*|dammsug\w*|stovsug\w*|imuroi\w*|vysav\w*|odkurz\w*|posesa\w*|porszivo\w*|吸尘|扫地)\b/;
/** "everything off" ("alles aus", "schalte alles aus", "everything off", "turn everything off" …). */
const ALL_OFF =
  /\b(alles (aus|ausschalten|ab)|schalte?\w* alles (aus|ab)|mach\w* alles aus|everything off|turn (off )?everything( off)?|switch (off )?everything( off)?|all off|alles uit|zet alles uit|tout eteindre|eteins tout|spegni tutto|apaga todo|apagar todo|desliga tudo|sluk alt|slukk alt|slokk alt|slack allt|stang av allt|sammuta kaikki|vypni vse|wylacz wszystko|opreste tot|izklopi vse|kapcsolj ki mindent|全部关闭|关掉所有)\b/;

/** A room action a sentence asks for, and which room it means. */
export interface RoomIntent {
  action: "clean" | "off";
  /** A room named in the sentence; else "here" (the tablet's room), "there" (the room open in the view) or none. */
  room: { floorId: string; roomId: string } | "here" | "there" | null;
}

/**
 * "Saug die Küche", "Saug hier", "Mach da alles aus", "Everything off in the kitchen": the robot vacuum or everything
 * off for a room. Null for any other sentence (it goes on to Assist).
 */
export function roomIntent(sentence: string, building: Building, language: string, alias?: RoomAlias): RoomIntent | null {
  const text = normalize(sentence);
  const action = ALL_OFF.test(text) ? "off" : CLEAN.test(text) ? "clean" : null;
  if (!action) return null;
  const place = findPlace(sentence, building, alias);
  const lang = langOf(language);
  const room =
    place?.kind === "room"
      ? { floorId: place.floorId, roomId: place.roomId }
      : hasWord(sentence, THERE[lang] ?? [], lang)
        ? "there"
        : hasWord(sentence, HERE[lang] ?? [], lang)
          ? "here"
          : null;
  return { action, room };
}
