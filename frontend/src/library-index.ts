// The furniture library's index: every item the editor can place (the built-in kinds and the installed packs'
// items), sorted by what it is (a sofa, a table, a lamp …) and which rooms it belongs to, with families of
// variants (a dining table in 120, 160 and 200) folded into one card. Packs may say all this themselves
// (group, room, family, variant – pack format fields since 1.23); older packs and the built-in kinds are
// classified here by their ids and names. Pure logic, no DOM: see library-index.test.ts.

import { FURNITURE_GROUPS, LAMP_TYPES } from "./model.ts";
import { isElectric, packItemName, packName, packType, type FurniturePack, type PackItem } from "./packs.ts";

/** What an item is; the library's sections, in this order. */
export const KINDS = [
  "sofa",
  "seating",
  "table",
  "storage",
  "bed",
  "kitchen",
  "appliance",
  "bath",
  "lamp",
  "media",
  "office",
  "tech",
  "heating",
  "energy",
  "household",
  "deco",
  "plant",
  "outdoor",
  "kids",
  "sport",
  "pets",
  "vehicle",
  "stairs",
  "architecture",
] as const;
export type Kind = (typeof KINDS)[number];

/** Rooms an item is made for; "any" fits everywhere. */
export const ROOMS = ["living", "dining", "kitchen", "bedroom", "kids", "bath", "office", "hall", "utility", "garage", "garden", "hobby"] as const;
export type Room = (typeof ROOMS)[number];

export interface LibraryEntry {
  /** The furniture type to place (a built-in kind or "pack:<pack>:<item>"). */
  type: string;
  /** Identifies the entry in the library (the type, or the type + "#m" for a mirrored twin). */
  key: string;
  /** Placed mirrored (the twin of an item that comes left-handed only: the corner sofa for the other side). */
  mirror?: boolean;
  label: string;
  /** Every word that finds it (names in all languages, the id, the pack's name, the kind). */
  search: string;
  kind: Kind;
  rooms: Room[];
  /** Links an entity (a power sensor, a switch, a light). */
  electric: boolean;
  light: boolean;
  outdoor: boolean;
  /** Metres: width, depth, height. */
  size: [number, number, number];
  /** The pack it comes from (null for a built-in kind) and its name for the card. */
  pack: string | null;
  packLabel: string | null;
  packRelease: number;
  /** Variants of one thing share a family within their pack; the variant names the chip. */
  family: string | null;
  variant: string | null;
}

/** One card of the library: an item, or a family with its variants (the first is the card's picture). */
export interface LibraryCard {
  key: string;
  label: string;
  kind: Kind;
  rooms: Room[];
  entries: LibraryEntry[];
}

// ---------------------------------------------------------------------------------------------- built-in kinds

const BASIC: Record<string, [Kind, Room[]]> = {
  lamp_ceiling: ["lamp", []],
  lamp_downlight: ["lamp", []],
  lamp_spot: ["lamp", []],
  lamp_panel: ["lamp", []],
  lamp_pendant: ["lamp", []],
  lamp_fan: ["lamp", []],
  lamp_floor: ["lamp", ["living", "bedroom", "office"]],
  lamp_uplight: ["lamp", ["living", "bedroom", "office"]],
  lamp_table: ["lamp", ["living", "bedroom", "office"]],
  lamp_wall: ["lamp", []],
  led_strip: ["lamp", []],
  lamp_bollard: ["lamp", ["garden"]],
  lamp_garden: ["lamp", ["garden"]],
  radiator: ["heating", []],
  ac_unit: ["heating", []],
  sofa: ["sofa", ["living"]],
  sofa_l: ["sofa", ["living"]],
  sofa_u: ["sofa", ["living"]],
  armchair: ["seating", ["living", "bedroom", "office"]],
  stool: ["seating", ["living", "bath", "kids"]],
  coffee_table: ["table", ["living"]],
  tv_board: ["media", ["living", "bedroom"]],
  tv_wall: ["media", ["living", "bedroom"]],
  sideboard: ["storage", ["living", "dining", "hall"]],
  shelf: ["storage", ["living", "office", "kids", "utility", "garage"]],
  plant: ["plant", []],
  rug: ["deco", ["living", "bedroom", "kids", "hall"]],
  table: ["table", ["dining", "kitchen", "living"]],
  table_round: ["table", ["dining", "kitchen", "living"]],
  chair: ["seating", ["dining", "kitchen", "living"]],
  bench: ["seating", ["dining", "kitchen", "hall", "garden"]],
  corner_bench: ["seating", ["dining", "kitchen"]],
  bar_stool: ["seating", ["kitchen", "dining"]],
  kitchen: ["kitchen", ["kitchen"]],
  kitchen_wall: ["kitchen", ["kitchen"]],
  kitchen_tall: ["kitchen", ["kitchen"]],
  island: ["kitchen", ["kitchen"]],
  worktop: ["kitchen", ["kitchen", "utility", "garage"]],
  sink: ["kitchen", ["kitchen", "utility"]],
  stove: ["appliance", ["kitchen"]],
  dishwasher: ["appliance", ["kitchen"]],
  fridge: ["appliance", ["kitchen", "utility"]],
  fridge_smart: ["appliance", ["kitchen"]],
  bed: ["bed", ["bedroom", "kids"]],
  bunk_bed: ["bed", ["kids", "bedroom"]],
  nightstand: ["storage", ["bedroom", "kids"]],
  wardrobe: ["storage", ["bedroom", "kids", "hall"]],
  dresser: ["storage", ["bedroom", "kids", "hall"]],
  bathtub: ["bath", ["bath"]],
  shower: ["bath", ["bath"]],
  wc: ["bath", ["bath"]],
  washbasin: ["bath", ["bath"]],
  washer: ["appliance", ["bath", "utility"]],
  dryer: ["appliance", ["bath", "utility"]],
  desk: ["office", ["office", "kids", "bedroom"]],
  office_chair: ["office", ["office", "kids"]],
  tall_cabinet: ["storage", ["office", "hall", "utility", "bath"]],
  coat_rack: ["household", ["hall"]],
  stairs: ["stairs", ["hall", "living"]],
  stairs_u: ["stairs", ["hall", "living"]],
  stairwell: ["stairs", ["hall", "living"]],
  robot_vacuum: ["appliance", []],
  inverter: ["energy", ["utility", "garage"]],
  home_battery: ["energy", ["utility", "garage"]],
  wallbox: ["energy", ["garage"]],
  meter: ["energy", ["utility", "garage"]],
  grid_point: ["energy", ["utility"]],
  pool_pump: ["outdoor", ["utility", "garage", "garden"]],
  pool_filter: ["outdoor", ["utility", "garage", "garden"]],
  pool_heat_pump: ["outdoor", ["garden", "utility"]],
  pool_dosing: ["outdoor", ["utility", "garage"]],
  pool_valve: ["outdoor", ["utility", "garage"]],
  parking: ["vehicle", ["garage"]],
  awning: ["outdoor", ["garden"]],
  waste_bin: ["household", ["garden", "garage", "utility"]],
  mailbox: ["household", ["garden", "hall"]],
  wall_switch: ["tech", []],
  wall_socket: ["tech", []],
  wifi_ap: ["tech", []],
  water_heater: ["heating", ["utility", "bath", "garage"]],
};

/** The built-in kinds the library offers (the pool devices stand in Pool Pro's tools, energy devices in the energy tool). */
export function basicTypes(extra: string[] = []): string[] {
  const shown = new Set<string>(Object.values(FURNITURE_GROUPS).flat());
  for (const t of extra) shown.add(t);
  return [...shown].filter((t) => t in BASIC);
}

// ---------------------------------------------------------------------------------------------- classification

/** Which room a pack is made for, by its id; the items' words may say otherwise. */
const PACK_ROOMS: Record<string, Room[]> = {
  living: ["living"],
  kitchen: ["kitchen"],
  bedroom: ["bedroom"],
  bath: ["bath"],
  kids: ["kids"],
  office: ["office"],
  garage: ["garage"],
  garden: ["garden"],
  utility: ["utility"],
  cinema: ["living", "hobby"],
  fitness: ["hobby"],
  stairs: ["hall"],
  vehicles: ["garage"],
  pets: [],
  smarthome: [],
  architecture: [],
  fun_halloween: [],
  fun_winter: [],
  fun_pets: [],
};

type Rule = [RegExp, Kind, Room[] | null];
/** Words that say what an item is; the first rule that matches wins, so the specific ones stand first. */
const RULES: Rule[] = [
  // vehicles and pets before anything else: "cat tree" is no plant, "campervan" no kitchen
  [/\b(van|estate|suv|compact car|sedan|coup|cabrio|convertible|city ev|minibus|transporter|panel van|pickup|campervan|motorhome|caravan|trailer|motorcycle|electric car|e-bike|bike stand|bike holder|bike rack)\b/, "vehicle", ["garage"]],
  [/\b(cat|dog|pet|pets|litter|hamster|rabbit|bird cage|aquarium|terrarium|bowls|scratch|animal|cage)\b/, "pets", []],
  [/\b(stairs?|stair|winder|landing|railing|spiral|space-saver|outdoor steps)\b/, "stairs", ["hall"]],
  [/\b(treadmill|power rack|rower|rowing|spin bike|dumbbell|punching|yoga|elliptical|cross trainer|gym|wall bars|fitness|smart trainer|kettlebell|massage chair|water cooler|exercise)\b/, "sport", ["hobby"]],
  [/\b(kids|loft bed|teepee|tipi|play kitchen|play mat|play tower|toy|toys|rocking horse|cuddle|cosy corner|ball pit|house bed|baby|crib|cot|changing table|children)\b/, "kids", ["kids"]],
  // lamps: what lights the room (a mirror with light, a wardrobe with inside light and a monitor's light bar are not)
  [/\b(lamp|lamps|lantern|torch|lights|spotlight|downlight|pendant|light cove|led niche|light pillar|ceiling panel|wall light|workshop light|under-cabinet light|night light|star projector|star ceiling|garden spots|up and down|candelabra)\b/, "lamp", null],
  [/\b(herb garden|tree|shrub|brush|plant|plants|monstera|flower|pots|pampas)\b/, "plant", null],
  // media: screens, speakers, players
  [/\b(tv|television|projector|projection screen|screen|speaker|subwoofer|soundbar|receiver|turntable|record shelf|game console|hi-fi|cinema seat|cinema|acoustic|bass trap|smart display|media wall|arcade|monitor|sim racing|piano)\b/, "media", null],
  // appliances (kitchen, laundry, cleaning)
  [/\b(fridge|freezer|oven|hob|cooker|dishwasher|microwave|coffee|kettle|toaster|mixer|hood|washer|washing machine|dryer|vacuum|ironing|wine|range|popcorn)\b/, "appliance", null],
  // energy, heating and tech before the room words: a meter cabinet is energy, a heat pump outdoors is heating
  [/\b(wallbox|home battery|inverter|solar|balcony|fuse box|meter cabinet|grid)\b/, "energy", null],
  [/\b(heat pump|boiler|buffer tank|manifold|ventilation|radiator|fan|air purifier|humidifier|dehumidifier|thermostat|water softener|water pump|hot water|patio heater|fireplace|wood stove|chimney|stove)\b/, "heating", null],
  [/\b(server|network|nas|router|access point|wi-fi|printer|filament|siren|smoke detector|camera|baby monitor|phone booth|smart home|sensor|leak|switch|socket|compressor|door opener|alarm clock|clock)\b/, "tech", null],
  [/\b(hot tub|outdoor|garden|patio|pergola|parasol|grill|greenhouse|raised bed|shed|trampoline|sprinkler|irrigation|rain barrel|rotary|awning|mower|fire bowl|hammock|lounger)\b/, "outdoor", ["garden"]],
  [/\b(base unit|drawer unit|sink unit|wall unit|corner base|corner wall|pantry|kitchen|island|breakfast bar|spice rack|trolley|worktop|sink)\b/, "kitchen", ["kitchen"]],
  [/\b(bathtub|tub|shower|toilet|wc|bidet|bathroom|washbasin|basin|sauna|whirlpool)\b/, "bath", ["bath"]],
  [/\b(bed|beds|boxspring|box-spring|futon|canopy)\b/, "bed", ["bedroom"]],
  [/\b(wardrobe|closet|clothes|dresser|chest of|nightstand|bedside)\b/, "storage", ["bedroom"]],
  [/\b(desk|office|whiteboard|filing|file cabinet)\b/, "office", ["office"]],
  [/\b(sofa|chesterfield|chaise|r[ée]camière|recamiere|lounge set)\b/, "sofa", ["living"]],
  [/\b(table|tables|workbench|vanity)\b/, "table", null],
  [/\b(armchair|chair|chairs|stool|stools|bench|recliner|bean bag|pouf|seat|rocking)\b/, "seating", null],
  [/\b(waste|bin|mailbox|drying rack|basket|coat|laundry|hooks)\b/, "household", null],
  [/\b(shelf|shelves|cabinet|sideboard|lowboard|highboard|vitrine|display cabinet|cube|rack|bookcase|tool wall|shoe|console table)\b/, "storage", null],
  [/\b(column|beam|beams|partition|sliding wall|divider|podium|platform|gallery|curtain|niche|built-in)\b/, "architecture", []],
  [/\b(rug|vase|picture|painting|mirror|pumpkin|cobweb|garland|gravestone|grave|skeleton|cauldron|ghost|broom|candle|deco)\b/, "deco", null],
];

/** The bath pack knows its own: a lit mirror, a towel rail or a laundry basket there is bathroom furniture. */
const BATH_OWN = /\b(mirror|towel|laundry|washer|cabinet|shelf|plant|fan|rain shower)\b/;

/** The id's words and the English name: what the rules read. */
function wordsOf(item: PackItem): string {
  return `${item.id.replace(/_/g, " ")} ${item.name.en ?? ""}`.toLowerCase();
}

/** Where an item belongs: the pack's own fields, else its words, else its pack. */
export function classify(packId: string, item: PackItem): { kind: Kind; rooms: Room[] } {
  const own = (item.group && (KINDS as readonly string[]).includes(item.group) ? item.group : null) as Kind | null;
  const ownRooms = item.room?.filter((r) => (ROOMS as readonly string[]).includes(r)) as Room[] | undefined;
  const key = packId.replace(/^mastershort\./, "");
  const packRooms = PACK_ROOMS[key] ?? [];
  if (own) return { kind: own, rooms: ownRooms ?? packRooms };
  const text = wordsOf(item);
  if (key === "bath" && BATH_OWN.test(text) && !/\b(washing machine cabinet|fan)\b/.test(text)) return { kind: "bath", rooms: ownRooms ?? ["bath"] };
  for (const [re, kind, rooms] of RULES) {
    if (re.test(text)) return { kind, rooms: ownRooms ?? (rooms && rooms.length ? [...new Set([...rooms, ...packRooms])] : packRooms) };
  }
  return { kind: "deco", rooms: ownRooms ?? packRooms };
}

/** Which room kind a room is, by its name (German, English and the languages NeonPlan speaks); null when unclear. */
export function roomKindOf(name: string): Room | null {
  const n = name.toLowerCase();
  const table: [RegExp, Room][] = [
    [/kinder|kids|child|niñ|bambin|enfant|dziec|děts|barn|lapsi|gyerek|copi|otro|儿童|kinderkamer/, "kids"],
    [/schlaf|bedroom|dormit|camera da letto|chambre|slaapkamer|sypial|ložnic|sover|makuu|háló|dormitor|spaln|卧室|soveværelse/, "bedroom"],
    [/wohn|living|lounge|salon|soggiorno|sala de estar|woonkamer|obývací|stue|olohuone|nappali|sufrag|dnevn|客厅/, "living"],
    [/\bess|dining|comedor|pranzo|salle à manger|eetkamer|jadal|jídel|spise|ruokailu|étkez|jedil|餐厅/, "dining"],
    [/küche|kueche|kitchen|cocina|cucina|cuisine|keuken|kuchn|kuchyn|kjøkken|køkken|keittiö|konyha|bucăt|kuhinj|厨房/, "kitchen"],
    [/\bbad\b|bath|baño|bagno|salle de bain|badkamer|łazienk|koupeln|baderom|badevær|kylpy|fürdő|baie|kopaln|wc|toilet|gäste|guest|浴室|dusch|shower/, "bath"],
    [/büro|buero|office|arbeit|studio|bureau|kantoor|biuro|pracovn|kontor|työhuone|iroda|birou|pisarn|gaming|办公/, "office"],
    [/flur|diele|hall|corridor|entrance|eingang|ingresso|gang|hal\b|przedpok|chodba|entré|eteinen|előszoba|hol\b|hodnik|treppe|stair|walk/, "hall"],
    [/hauswirtschaft|hwr|utility|technik|keller|wasch|laundry|lavander|buanderie|berging|bijkeuken|pralni|prádeln|vaskerom|kodinhoito|mosó|tehnic|pralnic|cellar|basement|abstell|storage|vorrat|pantry|heizung|boiler/, "utility"],
    [/garage|carport|werkstatt|workshop|garaje|garaż|garáž|verkstad|autotalli|garázs|garaj|garaž|车库/, "garage"],
    [/garten|garden|terrasse|terrace|balkon|balcony|jardin|giardino|tuin|ogród|zahrad|hage|have|puutarha|kert|grădin|vrt|pool|yard|patio|einfahrt|driveway|花园/, "garden"],
    [/fitness|gym|sport|hobby|kino|cinema|heimkino|home theater|spiel|play|party|bar\b|sauna|wellness/, "hobby"],
  ];
  for (const [re, room] of table) if (re.test(n)) return room;
  return null;
}

// ---------------------------------------------------------------------------------------------- families

/** The sizes and counts in a name that make it a variant: "160 × 200", "2-seater", "3-door", "4 × 2", "15″". */
const VARIANT_WORDS = /\s*\(?\b\d+(?:[.,]\d+)?\s*(?:[×x]\s*\d+(?:[.,]\d+)?)*\s*(?:cm|m|l|u|″|"|-seater|-sitzer|-door|-türig|-drawer|-teilig|-piece|seats|parts)?\)?/gi;

/** A name without its numbers: "Dining table 160 × 90" → "Dining table", "2-seater sofa" → "Sofa". */
export function familyLabel(name: string): string {
  const out = name
    .replace(VARIANT_WORDS, " ")
    .replace(/\s+(mit|with|avec|con)\s*$/i, "")
    .replace(/\s{2,}/g, " ")
    .replace(/^[\s,–-]+|[\s,–-]+$/g, "")
    .trim();
  return out ? out[0].toUpperCase() + out.slice(1) : name;
}

/** The numbers of a name as the variant's chip: "Bed 160 × 200" → "160 × 200", "2-seater sofa" → "2". */
export function variantLabel(name: string): string | null {
  const hits = [...name.matchAll(/\d+(?:[.,]\d+)?(?:\s*[×x]\s*\d+(?:[.,]\d+)?)*/g)].map((m) => m[0].replace(/\s*[×x]\s*/g, " × "));
  if (hits.length) return hits.join(" · ");
  const side = name.match(/\b(links|rechts|left|right)\b/i);
  return side ? side[1].toLowerCase() : null;
}

/** The side an item is made for, by its name: "left" / "right", null for the rest. */
export function sideOf(name: string): "left" | "right" | null {
  if (/\b(links|left)\b/i.test(name)) return "left";
  if (/\b(rechts|right)\b/i.test(name)) return "right";
  return null;
}

/** The name for the other side: "Ecksofa links" → "Ecksofa rechts", "Corner sofa (left)" → "Corner sofa (right)". */
export function otherSideName(name: string): string {
  return name.replace(/\b(links|rechts|left|right)\b/i, (w) => {
    const map: Record<string, string> = { links: "rechts", rechts: "links", left: "right", right: "left" };
    const out = map[w.toLowerCase()] ?? w;
    return w[0] === w[0].toUpperCase() ? out[0].toUpperCase() + out.slice(1) : out;
  });
}

/** An item's family key: its own field, else its id without the size suffix (sofa_3 → sofa, base_60 → base, cube_4x2 → cube). */
export function familyOf(item: PackItem): string | null {
  if (item.family) return item.family;
  const m = item.id.match(/^(.*?)_(\d+(?:x\d+)?|left|right|links|rechts)$/);
  return m ? m[1] : null;
}

// ---------------------------------------------------------------------------------------------- the index

export interface IndexSource {
  packs: readonly FurniturePack[];
  /** Built-in kinds to offer (the groups, plus exclusive ones such as the smart fridge). */
  basics: string[];
  language: string;
  /** The user's name of a built-in kind, and the English one for the search. */
  basicName: (type: string) => string;
  basicNameEn: (type: string) => string;
  kindName: (kind: Kind) => string;
  size: (type: string) => [number, number, number];
}

const OUTDOOR_ROOMS = new Set<Room>(["garden"]);

/** Everyday words (German and English) that find a kind: "Lampe" finds the lights, "Schrank" the cabinets. */
const KIND_WORDS: Record<Kind, string> = {
  sofa: "sofa couch",
  seating: "stuhl sessel hocker bank sitz chair stool bench seat",
  table: "tisch table",
  storage: "schrank regal kommode vitrine cabinet shelf dresser wardrobe",
  bed: "bett bed",
  kitchen: "küche kitchen",
  appliance: "gerät geräte appliance",
  bath: "bad bath",
  lamp: "lampe lampen leuchte licht lamp light",
  media: "tv fernseher lautsprecher audio speaker",
  office: "büro schreibtisch desk office",
  tech: "technik smart home sensor",
  heating: "heizung heizkörper klima heating climate",
  energy: "energie strom solar energy power",
  household: "haushalt household",
  deco: "deko dekoration decoration",
  plant: "pflanze pflanzen baum plant tree",
  outdoor: "garten außen draußen garden outdoor",
  kids: "kinder kids",
  sport: "fitness sport",
  pets: "haustier tier pet",
  vehicle: "auto fahrzeug car vehicle",
  stairs: "treppe geländer stairs railing",
  architecture: "architektur architecture",
};

export function buildIndex(src: IndexSource): LibraryEntry[] {
  const out: LibraryEntry[] = [];
  for (const type of src.basics) {
    const meta = BASIC[type];
    if (!meta) continue;
    const [kind, rooms] = meta;
    const label = src.basicName(type);
    out.push({
      type,
      key: type,
      label,
      search: `${label} ${src.basicNameEn(type)} ${type.replace(/_/g, " ")} ${src.kindName(kind)} ${KIND_WORDS[kind]}`,
      kind,
      rooms,
      electric: isElectric(type),
      light: LAMP_TYPES.has(type),
      outdoor: rooms.length > 0 && rooms.every((r) => OUTDOOR_ROOMS.has(r)),
      size: src.size(type),
      pack: null,
      packLabel: null,
      packRelease: 0,
      family: null,
      variant: null,
    });
  }
  for (const pack of src.packs) {
    if (!pack.items.length) continue;
    const packLabel = packName(pack, src.language);
    for (const it of pack.items) {
      const { kind, rooms } = classify(pack.id, it);
      const type = packType(pack.id, it.id);
      const label = packItemName(it, src.language);
      out.push({
        type,
        key: type,
        label,
        search: `${Object.values(it.name).join(" ")} ${it.id.replace(/_/g, " ")} ${packLabel} ${packName(pack, "en")} ${src.kindName(kind)} ${KIND_WORDS[kind]} ${(it.tags ?? []).join(" ")}`,
        kind,
        rooms,
        electric: !!it.electric || !!it.light,
        light: !!it.light,
        outdoor: rooms.length > 0 && rooms.every((r) => OUTDOOR_ROOMS.has(r)),
        size: it.size,
        pack: pack.id,
        packLabel,
        packRelease: pack.release ?? 1,
        family: familyOf(it),
        variant: it.variant ? (it.variant[src.language.split("-")[0]] ?? it.variant.en ?? Object.values(it.variant)[0] ?? null) : variantLabel(label),
      });
    }
  }
  // an item that comes for one side only gets a twin for the other side, placed mirrored (#645: a left corner
  // sofa or cabinet must also exist as a right one)
  const byType = new Map(out.map((e) => [e.type, e]));
  for (const e of [...out]) {
    const side = sideOf(e.label);
    if (!side || e.mirror) continue;
    const twinType = e.type.replace(/(_|\b)(left|right|links|rechts)(?=$|[_\s)])/i, (_m: string, sep: string, w: string) => sep + (({ left: "right", right: "left", links: "rechts", rechts: "links" } as Record<string, string>)[w.toLowerCase()] ?? w));
    if (twinType !== e.type && byType.has(twinType)) continue;
    const label = otherSideName(e.label);
    out.push({ ...e, key: `${e.type}#m`, mirror: true, label, search: `${e.search} ${label}`, family: e.family ?? e.type, variant: variantLabel(label) });
    if (!e.family) e.family = e.type;
  }
  return out;
}

/** Letters only, no accents, for the search. */
export function fold(s: string): string {
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/ß/g, "ss");
}

export interface LibraryFilter {
  query: string;
  room: Room | null;
  electric: boolean;
  light: boolean;
  outdoor: boolean;
}

/** The entries a filter leaves: every word of the query somewhere, the room fitting (items for any room always fit). */
export function filterEntries(entries: readonly LibraryEntry[], f: LibraryFilter): LibraryEntry[] {
  const words = fold(f.query).split(/\s+/).filter(Boolean);
  return entries.filter((e) => {
    if (f.room && e.rooms.length && !e.rooms.includes(f.room)) return false;
    if (f.electric && !e.electric) return false;
    if (f.light && !e.light) return false;
    if (f.outdoor && !e.outdoor) return false;
    if (!words.length) return true;
    const hay = fold(e.search);
    return words.every((w) => hay.includes(w));
  });
}

/** Cards of a kind: families folded (two or more variants of one family in one pack), the rest one card each. */
export function cardsOf(entries: readonly LibraryEntry[], kind: Kind): LibraryCard[] {
  const mine = entries.filter((e) => e.kind === kind);
  const families = new Map<string, LibraryEntry[]>();
  for (const e of mine) {
    if (!e.family) continue;
    const key = `${e.pack ?? "basic"}:${e.family}`;
    families.set(key, [...(families.get(key) ?? []), e]);
  }
  const cards: LibraryCard[] = [];
  const done = new Set<string>();
  for (const e of mine) {
    if (done.has(e.key)) continue;
    const key = e.family ? `${e.pack ?? "basic"}:${e.family}` : null;
    const group = key ? families.get(key) : undefined;
    if (key && group && group.length > 1) {
      for (const g of group) done.add(g.key);
      const rooms = [...new Set(group.flatMap((g) => g.rooms))];
      cards.push({ key, label: familyLabel(e.label), kind, rooms, entries: group });
    } else {
      done.add(e.key);
      cards.push({ key: e.key, label: e.label, kind, rooms: e.rooms, entries: [e] });
    }
  }
  return cards;
}

/** "210 × 92 cm" (or "2,10 × 0,92 m" for big things) for a card. */
export function sizeText(size: [number, number, number], language: string): string {
  const [w, d] = size;
  const cm = (v: number) => Math.round(v * 100);
  const sep = language.startsWith("de") || language.startsWith("fr") || language.startsWith("it") || language.startsWith("es") || language.startsWith("nl") ? "," : ".";
  if (w >= 10 || d >= 10) return `${(Math.round(w * 10) / 10).toString().replace(".", sep)} × ${(Math.round(d * 10) / 10).toString().replace(".", sep)} m`;
  return `${cm(w)} × ${cm(d)} cm`;
}
