// The locating setup assistant: scanners into rooms, devices to track, the calibration walk, and a live check.
// Lab only for now (texts German/English inline; the 18 languages come with the release).

import { css, html, LitElement, nothing } from "lit";
import type { Building } from "../model.ts";
import { deviceAreaId } from "../devices.ts";
import type { HomeAssistant } from "../types.ts";
import { doorPairs, locateRooms, roomAt, type LocateRoom } from "./graph.ts";

interface Scanner {
  offline?: boolean;
  source: string;
  name: string;
  kind: string;
  device_id: string | null;
  area_id: string | null;
  scanning: boolean;
}
interface Device {
  id: string;
  name: string;
  kind: "irk" | "ibeacon" | "mac";
  key: string;
  person: string | null;
  icon: string | null;
  notify?: string | null;
  wearable?: boolean;
}
interface Config {
  enabled: boolean;
  admins_only: boolean;
  /** spoken questions fly the open views into the room (default on) */
  fly?: boolean;
  devices: Device[];
  scanner_rooms: Record<string, string>;
  scanners: Scanner[];
  bluetooth: boolean;
  private_ble: { title: string; key: string; named?: boolean }[];
  samples: Record<string, Record<string, number>>;
  scanner_hints: Record<string, string>;
}
interface Nearby {
  address: string;
  rssi: number;
  name: string | null;
  ibeacon: string | null;
  apple: boolean;
  random: boolean;
}
interface Live {
  running: boolean;
  devices: { id: string; name: string; room?: string | null; name_room?: string; probability?: number; last_seen?: number | null }[];
  calibration: { room: string; left: number; count: Record<string, number> } | null;
}
type Step = "scanners" | "devices" | "walk" | "live";

const DE = {
  title: "Ortung einrichten",
  lab: "Labor",
  close: "Schließen",
  s_scanners: "1 · Empfänger",
  s_devices: "2 · Geräte",
  s_walk: "3 · Einlernen",
  s_live: "4 · Live",
  no_bt: "Home Assistant hat kein Bluetooth eingerichtet. Shelly (Gen2/3: Bluetooth-Scan passiv), ESPHome-Bluetooth-Proxys oder ein USB-Stick genügen.",
  scanners_intro: "Das sind alle Bluetooth-Empfänger, die Home Assistant kennt. Sag bei jedem, in welchem Raum er steht.",
  not_placed: "– Raum wählen –",
  hint_room: "Signal sagt: {room} – übernehmen",
  coverage: "Räume ohne eigenen Empfänger – das Einlernen macht sie trotzdem erkennbar:",
  devices_intro: "Welche Geräte sollen geortet werden? Am besten das, was du immer dabei hast – die Uhr am Handgelenk ist ideal.",
  known_keys: "iPhone und Apple Watch mit Schlüssel (aus „Private BLE Device“ in Home Assistant):",
  add: "Hinzufügen",
  added: "✓ dabei",
  remove: "Entfernen",
  person: "Person",
  none: "keine",
  irk_help: "iPhone oder Apple Watch fehlt? Sie brauchen ihren Schlüssel (IRK) als „Private BLE Device“ in Home Assistant – die Anleitung zeigt die einfachsten Wege.",
  manual: "Anleitung",
  voice_hint: "Frag auch per Sprache: „Wo ist mein iPhone?“, „Wo ist Torsten?“, „Wer ist zu Hause?“, „Lass mein iPhone klingeln“.",
  look_hint: "In 3D erscheinen Personen als Figur; im ⚙-Menü der Ansicht: Personen → Figur, Pin oder aus.",
  ring: "Klingeln",
  ring_hint: "Die Home-Assistant-App auf diesem Handy – dann klappt „Lass mein iPhone klingeln“.",
  near_title: "Gerät in der Nähe suchen",
  key_title: "Schlüssel einfügen",
  key_name: "Name (z. B. Torstens iPhone)",
  key_value: "Schlüssel (IRK, 32 Zeichen)",
  key_bad: "Das ist kein gültiger Schlüssel (32 Hex-Zeichen oder Base64).",
  helper_title: "🔑 Schlüssel-Helfer",
  helper_build: "Schlüssel-Helfer einrichten",
  helper_found: "Schlüssel-Helfer gefunden: {name}",
  helper_watch: "Für Apple Watch",
  helper_phone: "Für iPhone",
  helper_watch_steps: "Auf der Uhr: Einstellungen → Bluetooth → unter „Gesundheitsgeräte“ auf „NeonPlan Key“ tippen und koppeln.",
  helper_phone_steps: "Am Handy: Einstellungen → Bluetooth → „NeonPlan Key“ (erscheint als Tastatur) koppeln.",
  helper_key: "Gelesener Schlüssel:",
  helper_wait: "Warte auf das Koppeln …",
  helper_after: "Danach das Gerät „NeonPlan Key“ in den Bluetooth-Einstellungen wieder entfernen.",
  helper_next: "🔄 Nächstes Gerät",
  helper_next_hint: "Vor jedem weiteren Gerät antippen: Der Helfer bekommt eine neue Bluetooth-Kennung, ein schon gekoppeltes Gerät verbindet sich dann nicht mehr dazwischen.",
  helper_name: "Name für dieses Gerät",
  helper_irk: "Gelesener Schlüssel (IRK) des Geräts, das sich gerade gekoppelt hat:",
  helper_belongs: "Gehört zu: {name}",
  helper_add_as: "Als „{name}“ hinzufügen",
  helper_added: "✓ „{name}“ ist jetzt in der Liste oben.",
  pbd_rename: "Tipp: in Home Assistant umbenennen (Geräte & Dienste → Private BLE Device), dann steht hier der Name.",
  carry: "Ich habe gerade dabei:",
  offline: "gerade nicht erreichbar",
  pbd_summary: "Von Bermuda umsteigen? Schlüssel aus Home Assistant übernehmen",
  worn: "am Körper",
  worn_hint: "Am Körper getragen (Uhr, Band): zeigt, wo die Person ist – ein Handy kann irgendwo liegen.",
  look_title: "Personen in 3D",
  look_figure: "Figur",
  look_pin: "Pin",
  look_off: "aus",
  near_summary: "Android-Handy oder Schlüsselanhänger hinzufügen",
  android_label: "Android-Handy (HA-App)",
  paste_summary: "Eigenen Schlüssel einfügen",
  helper_install: "Auf ESP32 installieren",
  helper_pitch: "Für iPhone und Apple Watch: Ein ESP32 für ca. 5 € wird in drei Minuten zum Schlüssel-Helfer – direkt im Browser installiert, ganz ohne Mac. Danach hier koppeln.",
  near_intro: "Halte das Gerät direkt an einen Empfänger. Android: in der Home-Assistant-App „BLE-Sender“ einschalten. Schlüsselanhänger: kurz drücken.",
  near_empty: "Noch nichts Starkes in der Nähe …",
  walk_intro: "Geh in jeden Raum, tippe ihn an und lauf 90 Sekunden langsam herum – auch in die Ecken. Nimm alle Geräte mit.",
  learning: "Lerne {room} … noch {left} s",
  stop: "Abbrechen",
  samples: "{n} Proben",
  quality: "Trefferquote prüfen",
  quality_result: "Trefferquote: {p}",
  relearn_all: "Alles neu einlernen",
  live_intro: "So sieht NeonPlan dich gerade. Lauf herum und schau, ob es stimmt.",
  enabled: "Ortung eingeschaltet",
  admins_only: "Personen nur für Admins zeigen",
  not_heard: "nicht gehört",
  next: "Weiter",
  need_device: "Erst ein Gerät hinzufügen.",
  app_title: "Android mit der Home-Assistant-App",
  app_none: "Android-Handy? In der Home-Assistant-App: Einstellungen → Companion-App → Sensoren verwalten → „BLE-Sender“ einschalten. Dann erscheint es hier von selbst.",
  app_off: "Sender ist aus – in der App einschalten",
  app_power: "Sendeleistung zu niedrig – in der App auf „Hoch“ (High) stellen",
  app_mode: "Sendemodus in der App auf „Niedrige Latenz“ (Low latency) stellen",
  helper_android: "Android-Handys und -Tablets hier nicht koppeln: Sie senden diesen Schlüssel im Hintergrund nicht. Für Android den BLE-Sender der Home-Assistant-App nehmen (unten).",
  unheard: "⚠ nicht gehört",
  unheard_hint: "Gerade hört kein Empfänger dieses Gerät. Ist es an und sendet es? Android: BLE-Sender der Home-Assistant-App.",
  fly: "Bei „Wo ist …?“ und „Wer ist zu Hause?“ in die Räume fliegen",
  fly_hint: "Die offenen NeonPlan-Ansichten fliegen in den Raum der Antwort, bei „Wer ist zu Hause?“ nacheinander in alle Räume. Antippen stoppt. Personen nicht, wenn sie nur Admins gezeigt werden.",
};
const EN: typeof DE = {
  title: "Set up locating",
  lab: "Lab",
  close: "Close",
  s_scanners: "1 · Scanners",
  s_devices: "2 · Devices",
  s_walk: "3 · Learn",
  s_live: "4 · Live",
  no_bt: "Home Assistant has no Bluetooth set up. Shelly (Gen2/3: Bluetooth scanning passive), ESPHome Bluetooth proxies or a USB adapter will do.",
  scanners_intro: "These are all Bluetooth scanners Home Assistant knows. Tell NeonPlan which room each one is in.",
  not_placed: "– pick a room –",
  hint_room: "Signals say: {room} – use it",
  coverage: "Rooms without a scanner of their own – learning makes them recognisable anyway:",
  devices_intro: "Which devices should be located? Best what you always carry – a watch on the wrist is ideal.",
  known_keys: "iPhone and Apple Watch with a key (from \"Private BLE Device\" in Home Assistant):",
  add: "Add",
  added: "✓ added",
  remove: "Remove",
  person: "Person",
  none: "none",
  irk_help: "iPhone or Apple Watch missing? They need their key (IRK) as a \"Private BLE Device\" in Home Assistant – the manual shows the easiest ways.",
  manual: "Manual",
  voice_hint: "Ask by voice too: \"Where is my iPhone?\", \"Where is Torsten?\", \"Who is home?\", \"Ring my iPhone\".",
  look_hint: "In 3D people stand as a figure; in the view's ⚙ menu: People → figure, pin or off.",
  ring: "Ring",
  ring_hint: "The Home Assistant app on this phone – then \"ring my iPhone\" works.",
  near_title: "Find a device nearby",
  key_title: "Paste a key",
  key_name: "Name (e.g. Torsten's iPhone)",
  key_value: "Key (IRK, 32 characters)",
  key_bad: "That is not a valid key (32 hex characters or Base64).",
  helper_title: "🔑 Key helper",
  helper_build: "Set up the key helper",
  helper_found: "Key helper found: {name}",
  helper_watch: "For an Apple Watch",
  helper_phone: "For an iPhone",
  helper_watch_steps: "On the watch: Settings → Bluetooth → under \"Health devices\" tap \"NeonPlan Key\" and pair.",
  helper_phone_steps: "On the phone: Settings → Bluetooth → pair \"NeonPlan Key\" (it shows as a keyboard).",
  helper_key: "Key read:",
  helper_wait: "Waiting for the pairing …",
  helper_after: "Afterwards remove the device \"NeonPlan Key\" from the Bluetooth settings again.",
  helper_next: "🔄 Next device",
  helper_next_hint: "Tap before every further device: the helper gets a new Bluetooth identity, so a device paired before no longer connects in between.",
  helper_name: "Name for this device",
  helper_irk: "Key (IRK) read from the device that just paired:",
  helper_belongs: "Belongs to: {name}",
  helper_add_as: "Add as “{name}”",
  helper_added: "✓ “{name}” is now in the list above.",
  pbd_rename: "Tip: rename it in Home Assistant (Devices & services → Private BLE Device) to see its name here.",
  carry: "I am carrying:",
  offline: "not reachable right now",
  pbd_summary: "Moving from Bermuda? Take over keys from Home Assistant",
  worn: "worn",
  worn_hint: "Worn on the body (watch, band): tells where the person is – a phone may lie somewhere.",
  look_title: "People in 3D",
  look_figure: "Figure",
  look_pin: "Pin",
  look_off: "Off",
  near_summary: "Add an Android phone or a key tag",
  android_label: "Android phone (HA app)",
  paste_summary: "Paste a key you already have",
  helper_install: "Install on an ESP32",
  helper_pitch: "For iPhone and Apple Watch: an ESP32 for about 5 € becomes the key helper in three minutes – installed right from the browser, no Mac needed. Then pair it here.",
  near_intro: "Hold the device right next to a scanner. Android: switch on \"BLE Transmitter\" in the Home Assistant app. Key tags: press once.",
  near_empty: "Nothing strong nearby yet …",
  walk_intro: "Go into every room, tap it and walk around slowly for 90 seconds – into the corners too. Carry all devices.",
  learning: "Learning {room} … {left} s left",
  stop: "Cancel",
  samples: "{n} samples",
  quality: "Check accuracy",
  quality_result: "Accuracy: {p}",
  relearn_all: "Learn everything anew",
  live_intro: "This is where NeonPlan sees you now. Walk around and check.",
  enabled: "Locating on",
  admins_only: "Show people to admins only",
  not_heard: "not heard",
  next: "Next",
  need_device: "Add a device first.",
  app_title: "Android with the Home Assistant app",
  app_none: "Android phone? In the Home Assistant app: Settings → Companion app → Manage sensors → turn on “BLE Transmitter”. It then shows up here by itself.",
  app_off: "Transmitter is off – turn it on in the app",
  app_power: "Transmit power too low – set it to “High” in the app",
  app_mode: "Set the advertise mode to “Low latency” in the app",
  helper_android: "Don't pair Android phones or tablets here: they don't send this key in the background. For Android use the Home Assistant app's BLE Transmitter (below).",
  unheard: "⚠ not heard",
  unheard_hint: "No receiver hears this device right now. Is it on and sending? Android: the Home Assistant app's BLE Transmitter.",
  fly: "Fly into the rooms on “Where is …?” and “Who is home?”",
  fly_hint: "The open NeonPlan views fly into the room of the answer, on “Who is home?” into every room in turn. A tap stops it. Not for people while they are shown to admins only.",
};

const CS: typeof DE = {
  title: "Nastavit lokalizaci",
  lab: "Laboratoř",
  close: "Zavřít",
  s_scanners: "1 · Přijímače",
  s_devices: "2 · Zařízení",
  s_walk: "3 · Učení",
  s_live: "4 · Živě",
  no_bt: "Home Assistant nemá nastavený Bluetooth. Stačí Shelly (Gen2/3: pasivní Bluetooth skenování), ESPHome Bluetooth proxy nebo USB adaptér.",
  scanners_intro: "Toto jsou všechny Bluetooth přijímače, které Home Assistant zná. U každého řekni, ve které místnosti stojí.",
  not_placed: "– vyber místnost –",
  hint_room: "Signál říká: {room} – převzít",
  coverage: "Místnosti bez vlastního přijímače – učení je přesto umožní rozpoznat:",
  devices_intro: "Která zařízení se mají lokalizovat? Nejlépe to, co máš vždy u sebe – hodinky na zápěstí jsou ideální.",
  known_keys: "iPhone a Apple Watch s klíčem (z „Private BLE Device“ v Home Assistant):",
  add: "Přidat",
  added: "✓ přidáno",
  remove: "Odebrat",
  person: "Osoba",
  none: "žádná",
  irk_help: "Chybí iPhone nebo Apple Watch? Potřebují svůj klíč (IRK) jako „Private BLE Device“ v Home Assistant – návod ukazuje nejjednodušší cesty.",
  manual: "Návod",
  voice_hint: "Ptej se i hlasem: „Kde je můj iPhone?“, „Kde je Torsten?“, „Kdo je doma?“, „Prozvoň můj iPhone“.",
  look_hint: "Ve 3D se osoby zobrazují jako postava; v menu ⚙ zobrazení: Osoby → postava, špendlík nebo vypnuto.",
  ring: "Prozvonit",
  ring_hint: "Aplikace Home Assistant na tomto telefonu – pak funguje „Prozvoň můj iPhone“.",
  near_title: "Hledat zařízení poblíž",
  key_title: "Vložit klíč",
  key_name: "Název (např. Torstenův iPhone)",
  key_value: "Klíč (IRK, 32 znaků)",
  key_bad: "Toto není platný klíč (32 hex znaků nebo Base64).",
  helper_title: "🔑 Pomocník pro klíč",
  helper_build: "Nastavit pomocníka pro klíč",
  helper_found: "Pomocník pro klíč nalezen: {name}",
  helper_watch: "Pro Apple Watch",
  helper_phone: "Pro iPhone",
  helper_watch_steps: "Na hodinkách: Nastavení → Bluetooth → v části „Zdravotní zařízení“ klepněte na „NeonPlan Key“ a spárujte.",
  helper_phone_steps: "V telefonu: Nastavení → Bluetooth → spárujte „NeonPlan Key“ (zobrazí se jako klávesnice).",
  helper_key: "Přečtený klíč:",
  helper_wait: "Čekám na spárování …",
  helper_after: "Poté zařízení „NeonPlan Key“ v nastavení Bluetooth opět odeberte.",
  helper_next: "🔄 Další zařízení",
  helper_next_hint: "Klepněte před každým dalším zařízením: pomocník dostane novou Bluetooth identitu, takže se dříve spárované zařízení už nepřipojí.",
  helper_name: "Název tohoto zařízení",
  helper_irk: "Klíč (IRK) načtený ze zařízení, které se právě spárovalo:",
  helper_belongs: "Patří k: {name}",
  helper_add_as: "Přidat jako „{name}“",
  helper_added: "✓ „{name}“ je teď v seznamu nahoře.",
  pbd_rename: "Tip: přejmenujte ho v Home Assistantu (Zařízení a služby → Private BLE Device), pak se zde zobrazí název.",
  carry: "Právě mám u sebe:",
  offline: "momentálně nedostupný",
  pbd_summary: "Přecházíte z Bermudy? Převzít klíče z Home Assistantu",
  worn: "nošené",
  worn_hint: "Nošené na těle (hodinky, náramek): ukazuje, kde osoba je – telefon může někde ležet.",
  look_title: "Osoby ve 3D",
  look_figure: "Postava",
  look_pin: "Špendlík",
  look_off: "Vyp.",
  near_summary: "Přidat telefon s Androidem nebo přívěsek",
  android_label: "Telefon s Androidem (aplikace HA)",
  paste_summary: "Vložit klíč, který už máte",
  helper_install: "Nainstalovat na ESP32",
  helper_pitch: "Pro iPhone a Apple Watch: ESP32 za cca 5 € se za tři minuty stane pomocníkem pro klíče – instalace přímo z prohlížeče, bez Macu. Pak spárujte zde.",
  near_intro: "Podrž zařízení přímo u přijímače. Android: v aplikaci Home Assistant zapni „BLE Transmitter“. Přívěsky na klíče: krátce stiskni.",
  near_empty: "Zatím nic silného poblíž …",
  walk_intro: "Projdi každou místnost, klepni na ni a 90 sekund pomalu choď kolem – i do rohů. Vezmi s sebou všechna zařízení.",
  learning: "Učím se {room} … ještě {left} s",
  stop: "Zrušit",
  samples: "{n} vzorků",
  quality: "Ověřit přesnost",
  quality_result: "Přesnost: {p}",
  relearn_all: "Vše naučit znovu",
  live_intro: "Takhle tě NeonPlan právě vidí. Projdi se a zkontroluj, jestli to sedí.",
  enabled: "Lokalizace zapnuta",
  admins_only: "Osoby zobrazit jen správcům",
  not_heard: "neslyšeno",
  next: "Další",
  need_device: "Nejdřív přidej zařízení.",
  app_title: "Android s aplikací Home Assistant",
  app_none: "Telefon s Androidem? V aplikaci Home Assistant: Nastavení → Companion app → Spravovat senzory → zapnout „BLE Transmitter“. Pak se tu objeví sám.",
  app_off: "Vysílač je vypnutý – zapněte ho v aplikaci",
  app_power: "Vysílací výkon je příliš nízký – v aplikaci nastavte „High“",
  app_mode: "V aplikaci nastavte režim vysílání „Low latency“",
  helper_android: "Telefony a tablety s Androidem zde nepárujte: tento klíč na pozadí nevysílají. Pro Android použijte BLE Transmitter aplikace Home Assistant (níže).",
  unheard: "⚠ neslyšeno",
  unheard_hint: "Žádný přijímač toto zařízení právě neslyší. Je zapnuté a vysílá? Android: BLE Transmitter aplikace Home Assistant.",
  fly: "Při „Kde je …?“ a „Kdo je doma?“ přeletět do místností",
  fly_hint: "Otevřená zobrazení NeonPlan přeletí do místnosti z odpovědi, u „Kdo je doma?“ postupně do všech. Klepnutí to zastaví. U osob ne, pokud se zobrazují jen správcům.",
};
const DA: typeof DE = {
  title: "Opsæt lokalisering",
  lab: "Lab",
  close: "Luk",
  s_scanners: "1 · Modtagere",
  s_devices: "2 · Enheder",
  s_walk: "3 · Indlæring",
  s_live: "4 · Live",
  no_bt: "Home Assistant har ingen Bluetooth sat op. Shelly (Gen2/3: passiv Bluetooth-scanning), ESPHome Bluetooth-proxyer eller en USB-adapter er nok.",
  scanners_intro: "Det er alle Bluetooth-modtagere, Home Assistant kender. Angiv for hver, hvilket rum den står i.",
  not_placed: "– vælg rum –",
  hint_room: "Signalet siger: {room} – brug det",
  coverage: "Rum uden egen modtager – indlæringen gør dem genkendelige alligevel:",
  devices_intro: "Hvilke enheder skal lokaliseres? Helst det, du altid har på dig – uret på håndleddet er ideelt.",
  known_keys: "iPhone og Apple Watch med nøgle (fra »Private BLE Device« i Home Assistant):",
  add: "Tilføj",
  added: "✓ med",
  remove: "Fjern",
  person: "Person",
  none: "ingen",
  irk_help: "Mangler iPhone eller Apple Watch? De skal have deres nøgle (IRK) som »Private BLE Device« i Home Assistant – vejledningen viser de nemmeste veje.",
  manual: "Vejledning",
  voice_hint: "Spørg også med stemmen: »Hvor er min iPhone?«, »Hvor er Torsten?«, »Hvem er hjemme?«, »Ring til min iPhone«.",
  look_hint: "I 3D vises personer som figur; i visningens ⚙-menu: Personer → figur, nål eller fra.",
  ring: "Ring",
  ring_hint: "Home Assistant-appen på denne telefon – så virker »Ring til min iPhone«.",
  near_title: "Find enhed i nærheden",
  key_title: "Indsæt nøgle",
  key_name: "Navn (f.eks. Torstens iPhone)",
  key_value: "Nøgle (IRK, 32 tegn)",
  key_bad: "Det er ikke en gyldig nøgle (32 hex-tegn eller Base64).",
  helper_title: "🔑 Nøglehjælper",
  helper_build: "Konfigurer nøglehjælperen",
  helper_found: "Nøglehjælper fundet: {name}",
  helper_watch: "Til Apple Watch",
  helper_phone: "Til iPhone",
  helper_watch_steps: "På uret: Indstillinger → Bluetooth → under »Sundhedsenheder« tryk på »NeonPlan Key«, og par.",
  helper_phone_steps: "På telefonen: Indstillinger → Bluetooth → par »NeonPlan Key« (vises som tastatur).",
  helper_key: "Aflæst nøgle:",
  helper_wait: "Venter på parring …",
  helper_after: "Fjern derefter enheden »NeonPlan Key« fra Bluetooth-indstillingerne igen.",
  helper_next: "🔄 Næste enhed",
  helper_next_hint: "Tryk før hver ny enhed: hjælperen får en ny Bluetooth-identitet, så en tidligere parret enhed ikke længere forbinder imellem.",
  helper_name: "Navn på denne enhed",
  helper_irk: "Nøgle (IRK) læst fra enheden, der lige blev parret:",
  helper_belongs: "Tilhører: {name}",
  helper_add_as: "Tilføj som »{name}«",
  helper_added: "✓ »{name}« står nu i listen ovenfor.",
  pbd_rename: "Tip: omdøb den i Home Assistant (Enheder og tjenester → Private BLE Device), så står navnet her.",
  carry: "Jeg har med lige nu:",
  offline: "ikke tilgængelig lige nu",
  pbd_summary: "Skifter du fra Bermuda? Overtag nøgler fra Home Assistant",
  worn: "båret",
  worn_hint: "Båret på kroppen (ur, armbånd): viser, hvor personen er – en telefon kan ligge et sted.",
  look_title: "Personer i 3D",
  look_figure: "Figur",
  look_pin: "Nål",
  look_off: "Fra",
  near_summary: "Tilføj Android-telefon eller nøglevedhæng",
  android_label: "Android-telefon (HA-app)",
  paste_summary: "Indsæt en nøgle, du allerede har",
  helper_install: "Installer på en ESP32",
  helper_pitch: "Til iPhone og Apple Watch: En ESP32 til ca. 5 € bliver nøglehjælper på tre minutter – installeret direkte fra browseren, uden Mac. Par den derefter her.",
  near_intro: "Hold enheden helt tæt på en modtager. Android: slå »BLE Transmitter« til i Home Assistant-appen. Nøglevedhæng: tryk kort.",
  near_empty: "Endnu intet stærkt i nærheden …",
  walk_intro: "Gå ind i hvert rum, tryk på det og gå langsomt rundt i 90 sekunder – også ud i hjørnerne. Tag alle enheder med.",
  learning: "Lærer {room} … {left} s tilbage",
  stop: "Annuller",
  samples: "{n} prøver",
  quality: "Tjek træfsikkerhed",
  quality_result: "Træfsikkerhed: {p}",
  relearn_all: "Indlær alt igen",
  live_intro: "Sådan ser NeonPlan dig lige nu. Gå rundt og se, om det passer.",
  enabled: "Lokalisering slået til",
  admins_only: "Vis kun personer for administratorer",
  not_heard: "ikke hørt",
  next: "Næste",
  need_device: "Tilføj først en enhed.",
  app_title: "Android med Home Assistant-appen",
  app_none: "Android-telefon? I Home Assistant-appen: Indstillinger → Companion app → Administrer sensorer → slå „BLE Transmitter“ til. Så dukker den op her af sig selv.",
  app_off: "Senderen er slået fra – slå den til i appen",
  app_power: "Sendestyrken er for lav – sæt den til „High“ i appen",
  app_mode: "Sæt sendetilstanden til „Low latency“ i appen",
  helper_android: "Par ikke Android-telefoner eller -tablets her: de sender ikke denne nøgle i baggrunden. Brug Home Assistant-appens BLE Transmitter til Android (nedenfor).",
  unheard: "⚠ ikke hørt",
  unheard_hint: "Ingen modtager hører enheden lige nu. Er den tændt og sender? Android: Home Assistant-appens BLE Transmitter.",
  fly: "Flyv ind i rummene ved „Hvor er …?“ og „Hvem er hjemme?“",
  fly_hint: "De åbne NeonPlan-visninger flyver ind i svarets rum, ved „Hvem er hjemme?“ ind i alle rum efter tur. Et tryk stopper det. Ikke for personer, når de kun vises for administratorer.",
};
const ES: typeof DE = {
  title: "Configurar localización",
  lab: "Lab",
  close: "Cerrar",
  s_scanners: "1 · Receptores",
  s_devices: "2 · Dispositivos",
  s_walk: "3 · Aprendizaje",
  s_live: "4 · En vivo",
  no_bt: "Home Assistant no tiene Bluetooth configurado. Basta con Shelly (Gen2/3: escaneo Bluetooth pasivo), proxies Bluetooth de ESPHome o un adaptador USB.",
  scanners_intro: "Estos son todos los receptores Bluetooth que conoce Home Assistant. Indica en qué habitación está cada uno.",
  not_placed: "– elige habitación –",
  hint_room: "La señal dice: {room} – usar",
  coverage: "Habitaciones sin receptor propio – el aprendizaje las hace reconocibles igualmente:",
  devices_intro: "¿Qué dispositivos quieres localizar? Mejor lo que siempre llevas encima – el reloj en la muñeca es ideal.",
  known_keys: "iPhone y Apple Watch con clave (de “Private BLE Device” en Home Assistant):",
  add: "Añadir",
  added: "✓ añadido",
  remove: "Quitar",
  person: "Persona",
  none: "ninguna",
  irk_help: "¿Falta el iPhone o el Apple Watch? Necesitan su clave (IRK) como “Private BLE Device” en Home Assistant – el manual muestra las formas más sencillas.",
  manual: "Manual",
  voice_hint: "Pregunta también por voz: “¿Dónde está mi iPhone?”, “¿Dónde está Torsten?”, “¿Quién está en casa?”, “Haz sonar mi iPhone”.",
  look_hint: "En 3D las personas aparecen como figura; en el menú ⚙ de la vista: Personas → figura, chincheta o desactivado.",
  ring: "Hacer sonar",
  ring_hint: "La app de Home Assistant en este móvil – así funciona “Haz sonar mi iPhone”.",
  near_title: "Buscar dispositivo cercano",
  key_title: "Pegar clave",
  key_name: "Nombre (p. ej. iPhone de Torsten)",
  key_value: "Clave (IRK, 32 caracteres)",
  key_bad: "No es una clave válida (32 caracteres hex o Base64).",
  helper_title: "🔑 Asistente de clave",
  helper_build: "Configurar el asistente de clave",
  helper_found: "Asistente de clave encontrado: {name}",
  helper_watch: "Para un Apple Watch",
  helper_phone: "Para un iPhone",
  helper_watch_steps: "En el reloj: Ajustes → Bluetooth → en «Dispositivos de salud» toca «NeonPlan Key» y enlázalo.",
  helper_phone_steps: "En el móvil: Ajustes → Bluetooth → enlaza «NeonPlan Key» (aparece como teclado).",
  helper_key: "Clave leída:",
  helper_wait: "Esperando el enlace …",
  helper_after: "Después, elimina el dispositivo «NeonPlan Key» de los ajustes de Bluetooth.",
  helper_next: "🔄 Siguiente dispositivo",
  helper_next_hint: "Toca antes de cada dispositivo nuevo: el asistente recibe una nueva identidad Bluetooth y un dispositivo ya emparejado deja de conectarse.",
  helper_name: "Nombre de este dispositivo",
  helper_irk: "Clave (IRK) leída del dispositivo que acaba de emparejarse:",
  helper_belongs: "Pertenece a: {name}",
  helper_add_as: "Añadir como «{name}»",
  helper_added: "✓ «{name}» ya está en la lista de arriba.",
  pbd_rename: "Consejo: cámbiale el nombre en Home Assistant (Dispositivos y servicios → Private BLE Device) y aparecerá aquí.",
  carry: "Llevo conmigo:",
  offline: "no disponible ahora",
  pbd_summary: "¿Vienes de Bermuda? Usar claves de Home Assistant",
  worn: "llevado",
  worn_hint: "Llevado encima (reloj, pulsera): indica dónde está la persona; un móvil puede estar en cualquier sitio.",
  look_title: "Personas en 3D",
  look_figure: "Figura",
  look_pin: "Pin",
  look_off: "No",
  near_summary: "Añadir un móvil Android o un llavero",
  android_label: "Móvil Android (app de HA)",
  paste_summary: "Pegar una clave que ya tienes",
  helper_install: "Instalar en un ESP32",
  helper_pitch: "Para iPhone y Apple Watch: un ESP32 de unos 5 € se convierte en el asistente de claves en tres minutos, instalado desde el navegador, sin Mac. Luego empareja aquí.",
  near_intro: "Acerca el dispositivo a un receptor. Android: activa “BLE Transmitter” en la app de Home Assistant. Llaveros: pulsa una vez.",
  near_empty: "Aún nada fuerte cerca …",
  walk_intro: "Entra en cada habitación, tócala y camina despacio durante 90 segundos – también por las esquinas. Lleva todos los dispositivos.",
  learning: "Aprendiendo {room} … quedan {left} s",
  stop: "Cancelar",
  samples: "{n} muestras",
  quality: "Comprobar precisión",
  quality_result: "Precisión: {p}",
  relearn_all: "Volver a aprender todo",
  live_intro: "Así te ve NeonPlan ahora mismo. Camina un poco y comprueba si acierta.",
  enabled: "Localización activada",
  admins_only: "Mostrar personas solo a administradores",
  not_heard: "sin señal",
  next: "Siguiente",
  need_device: "Primero añade un dispositivo.",
  app_title: "Android con la app de Home Assistant",
  app_none: "¿Móvil Android? En la app de Home Assistant: Ajustes → Companion app → Gestionar sensores → activa «BLE Transmitter». Luego aparece aquí solo.",
  app_off: "El transmisor está apagado: actívalo en la app",
  app_power: "Potencia de emisión demasiado baja: ponla en «High» en la app",
  app_mode: "Pon el modo de emisión en «Low latency» en la app",
  helper_android: "No emparejes aquí móviles ni tabletas Android: no envían esta clave en segundo plano. Para Android usa el BLE Transmitter de la app de Home Assistant (abajo).",
  unheard: "⚠ sin señal",
  unheard_hint: "Ahora mismo ningún receptor oye este dispositivo. ¿Está encendido y emitiendo? Android: el BLE Transmitter de la app de Home Assistant.",
  fly: "Volar a las habitaciones con «¿Dónde está …?» y «¿Quién está en casa?»",
  fly_hint: "Las vistas abiertas de NeonPlan vuelan a la habitación de la respuesta y, con «¿Quién está en casa?», a todas por turno. Un toque lo detiene. No para personas mientras solo se muestren a administradores.",
};
const FI: typeof DE = {
  title: "Paikannuksen määritys",
  lab: "Labra",
  close: "Sulje",
  s_scanners: "1 · Vastaanottimet",
  s_devices: "2 · Laitteet",
  s_walk: "3 · Opetus",
  s_live: "4 · Live",
  no_bt: "Home Assistantissa ei ole Bluetoothia määritetty. Shelly (Gen2/3: passiivinen Bluetooth-skannaus), ESPHome Bluetooth -välityspalvelimet tai USB-sovitin riittää.",
  scanners_intro: "Tässä ovat kaikki Bluetooth-vastaanottimet, jotka Home Assistant tuntee. Kerro kustakin, missä huoneessa se on.",
  not_placed: "– valitse huone –",
  hint_room: "Signaalin mukaan: {room} – käytä",
  coverage: "Huoneet ilman omaa vastaanotinta – opetus tekee niistä silti tunnistettavia:",
  devices_intro: "Mitkä laitteet paikannetaan? Parasta on se, mikä on aina mukanasi – kello ranteessa on ihanteellinen.",
  known_keys: "iPhone ja Apple Watch avaimella (Home Assistantin ”Private BLE Device”):",
  add: "Lisää",
  added: "✓ mukana",
  remove: "Poista",
  person: "Henkilö",
  none: "ei mitään",
  irk_help: "Puuttuuko iPhone tai Apple Watch? Ne tarvitsevat avaimensa (IRK) ”Private BLE Device” -laitteena Home Assistantissa – ohje näyttää helpoimmat tavat.",
  manual: "Ohje",
  voice_hint: "Kysy myös äänellä: ”Missä iPhoneni on?”, ”Missä Torsten on?”, ”Kuka on kotona?”, ”Soita iPhoneani”.",
  look_hint: "3D:ssä henkilöt näkyvät hahmona; näkymän ⚙-valikossa: Henkilöt → hahmo, nasta tai pois.",
  ring: "Soita",
  ring_hint: "Home Assistant -sovellus tässä puhelimessa – silloin ”Soita iPhoneani” toimii.",
  near_title: "Etsi laite läheltä",
  key_title: "Liitä avain",
  key_name: "Nimi (esim. Torstenin iPhone)",
  key_value: "Avain (IRK, 32 merkkiä)",
  key_bad: "Tämä ei ole kelvollinen avain (32 heksamerkkiä tai Base64).",
  helper_title: "🔑 Avainapuri",
  helper_build: "Ota avainapuri käyttöön",
  helper_found: "Avainapuri löytyi: {name}",
  helper_watch: "Apple Watch -kellolle",
  helper_phone: "iPhonelle",
  helper_watch_steps: "Kellossa: Asetukset → Bluetooth → valitse kohdassa ”Terveyslaitteet” ”NeonPlan Key” ja muodosta pari.",
  helper_phone_steps: "Puhelimessa: Asetukset → Bluetooth → muodosta pari laitteen ”NeonPlan Key” kanssa (näkyy näppäimistönä).",
  helper_key: "Luettu avain:",
  helper_wait: "Odotetaan pariliitosta …",
  helper_after: "Poista sen jälkeen laite ”NeonPlan Key” Bluetooth-asetuksista.",
  helper_next: "🔄 Seuraava laite",
  helper_next_hint: "Napauta ennen jokaista uutta laitetta: apuri saa uuden Bluetooth-tunnisteen, eikä aiemmin yhdistetty laite enää yhdisty väliin.",
  helper_name: "Tämän laitteen nimi",
  helper_irk: "Juuri paritetusta laitteesta luettu avain (IRK):",
  helper_belongs: "Kuuluu: {name}",
  helper_add_as: "Lisää nimellä ”{name}”",
  helper_added: "✓ ”{name}” on nyt yllä olevassa luettelossa.",
  pbd_rename: "Vinkki: nimeä se uudelleen Home Assistantissa (Laitteet ja palvelut → Private BLE Device), niin nimi näkyy tässä.",
  carry: "Minulla on mukana:",
  offline: "ei juuri nyt tavoitettavissa",
  pbd_summary: "Siirrytkö Bermudasta? Ota avaimet Home Assistantista",
  worn: "päällä",
  worn_hint: "Kehossa (kello, ranneke): kertoo, missä henkilö on – puhelin voi olla missä vain.",
  look_title: "Henkilöt 3D:ssä",
  look_figure: "Hahmo",
  look_pin: "Merkki",
  look_off: "Pois",
  near_summary: "Lisää Android-puhelin tai avaimenperä",
  android_label: "Android-puhelin (HA-sovellus)",
  paste_summary: "Liitä avain, joka sinulla jo on",
  helper_install: "Asenna ESP32:lle",
  helper_pitch: "iPhonelle ja Apple Watchille: noin 5 €:n ESP32:sta tulee avainapuri kolmessa minuutissa – asennus suoraan selaimesta, ilman Macia. Paritus sitten täällä.",
  near_intro: "Pidä laitetta aivan vastaanottimen vieressä. Android: kytke Home Assistant -sovelluksessa ”BLE Transmitter” päälle. Avaimenperät: paina kerran.",
  near_empty: "Ei vielä mitään vahvaa lähellä …",
  walk_intro: "Mene jokaiseen huoneeseen, napauta sitä ja kävele hitaasti ympäriinsä 90 sekuntia – myös nurkkiin. Ota kaikki laitteet mukaan.",
  learning: "Opetellaan {room} … {left} s jäljellä",
  stop: "Peruuta",
  samples: "{n} näytettä",
  quality: "Tarkista osumatarkkuus",
  quality_result: "Osumatarkkuus: {p}",
  relearn_all: "Opeta kaikki uudelleen",
  live_intro: "Näin NeonPlan näkee sinut juuri nyt. Kävele ympäriinsä ja katso, pitääkö se paikkansa.",
  enabled: "Paikannus päällä",
  admins_only: "Näytä henkilöt vain ylläpitäjille",
  not_heard: "ei kuultu",
  next: "Seuraava",
  need_device: "Lisää ensin laite.",
  app_title: "Android ja Home Assistant -sovellus",
  app_none: "Android-puhelin? Home Assistant -sovelluksessa: Asetukset → Companion app → Hallitse antureita → kytke ”BLE Transmitter” päälle. Sitten se näkyy täällä itsestään.",
  app_off: "Lähetin on pois päältä – kytke se päälle sovelluksessa",
  app_power: "Lähetysteho liian pieni – aseta sovelluksessa ”High”",
  app_mode: "Aseta sovelluksessa lähetystilaksi ”Low latency”",
  helper_android: "Älä yhdistä Android-puhelimia tai -tabletteja tässä: ne eivät lähetä tätä avainta taustalla. Käytä Androidille Home Assistant -sovelluksen BLE Transmitteria (alla).",
  unheard: "⚠ ei kuultu",
  unheard_hint: "Mikään vastaanotin ei kuule laitetta juuri nyt. Onko se päällä ja lähettääkö se? Android: Home Assistant -sovelluksen BLE Transmitter.",
  fly: "Lennä huoneisiin kysymyksillä ”Missä on …?” ja ”Kuka on kotona?”",
  fly_hint: "Avoimet NeonPlan-näkymät lentävät vastauksen huoneeseen, kysymyksellä ”Kuka on kotona?” vuorotellen kaikkiin. Napautus pysäyttää. Ei henkilöille, jos ne näytetään vain ylläpitäjille.",
};
const FR: typeof DE = {
  title: "Configurer la localisation",
  lab: "Labo",
  close: "Fermer",
  s_scanners: "1 · Récepteurs",
  s_devices: "2 · Appareils",
  s_walk: "3 · Apprentissage",
  s_live: "4 · En direct",
  no_bt: "Home Assistant n’a pas de Bluetooth configuré. Un Shelly (Gen2/3 : scan Bluetooth passif), des proxys Bluetooth ESPHome ou un adaptateur USB suffisent.",
  scanners_intro: "Voici tous les récepteurs Bluetooth connus de Home Assistant. Indiquez pour chacun la pièce où il se trouve.",
  not_placed: "– choisir une pièce –",
  hint_room: "Le signal indique : {room} – appliquer",
  coverage: "Pièces sans récepteur propre – l’apprentissage les rend quand même reconnaissables :",
  devices_intro: "Quels appareils localiser ? Idéalement ce que vous avez toujours sur vous – la montre au poignet est parfaite.",
  known_keys: "iPhone et Apple Watch avec clé (depuis « Private BLE Device » dans Home Assistant) :",
  add: "Ajouter",
  added: "✓ ajouté",
  remove: "Retirer",
  person: "Personne",
  none: "aucune",
  irk_help: "iPhone ou Apple Watch absent ? Ils ont besoin de leur clé (IRK) comme « Private BLE Device » dans Home Assistant – le guide montre les méthodes les plus simples.",
  manual: "Guide",
  voice_hint: "Demandez aussi à la voix : « Où est mon iPhone ? », « Où est Torsten ? », « Qui est à la maison ? », « Fais sonner mon iPhone ».",
  look_hint: "En 3D, les personnes apparaissent sous forme de figurine ; dans le menu ⚙ de la vue : Personnes → figurine, épingle ou masqué.",
  ring: "Faire sonner",
  ring_hint: "L’app Home Assistant sur ce téléphone – alors « Fais sonner mon iPhone » fonctionne.",
  near_title: "Trouver un appareil à proximité",
  key_title: "Coller une clé",
  key_name: "Nom (p. ex. iPhone de Torsten)",
  key_value: "Clé (IRK, 32 caractères)",
  key_bad: "Ce n'est pas une clé valide (32 caractères hex ou Base64).",
  helper_title: "🔑 Assistant de clé",
  helper_build: "Configurer l’assistant de clé",
  helper_found: "Assistant de clé trouvé : {name}",
  helper_watch: "Pour une Apple Watch",
  helper_phone: "Pour un iPhone",
  helper_watch_steps: "Sur la montre : Réglages → Bluetooth → sous « Appareils de santé », touchez « NeonPlan Key » et jumelez.",
  helper_phone_steps: "Sur le téléphone : Réglages → Bluetooth → jumelez « NeonPlan Key » (il apparaît comme clavier).",
  helper_key: "Clé lue :",
  helper_wait: "En attente du jumelage …",
  helper_after: "Ensuite, supprimez l’appareil « NeonPlan Key » des réglages Bluetooth.",
  helper_next: "🔄 Appareil suivant",
  helper_next_hint: "Touchez avant chaque nouvel appareil : l'assistant reçoit une nouvelle identité Bluetooth, un appareil déjà jumelé ne se reconnecte plus.",
  helper_name: "Nom de cet appareil",
  helper_irk: "Clé (IRK) lue sur l’appareil qui vient de se jumeler :",
  helper_belongs: "Appartient à : {name}",
  helper_add_as: "Ajouter comme « {name} »",
  helper_added: "✓ « {name} » est maintenant dans la liste ci-dessus.",
  pbd_rename: "Astuce : renommez-le dans Home Assistant (Appareils et services → Private BLE Device) pour voir son nom ici.",
  carry: "J’ai sur moi :",
  offline: "injoignable pour le moment",
  pbd_summary: "Vous venez de Bermuda ? Reprendre les clés de Home Assistant",
  worn: "porté",
  worn_hint: "Porté sur soi (montre, bracelet) : indique où se trouve la personne – un téléphone peut traîner ailleurs.",
  look_title: "Personnes en 3D",
  look_figure: "Silhouette",
  look_pin: "Repère",
  look_off: "Non",
  near_summary: "Ajouter un téléphone Android ou un porte-clés",
  android_label: "Téléphone Android (app HA)",
  paste_summary: "Coller une clé que vous avez déjà",
  helper_install: "Installer sur un ESP32",
  helper_pitch: "Pour iPhone et Apple Watch : un ESP32 à environ 5 € devient l’assistant de clé en trois minutes – installé depuis le navigateur, sans Mac. Jumelez-le ensuite ici.",
  near_intro: "Tenez l’appareil tout près d’un récepteur. Android : activez « BLE Transmitter » dans l’app Home Assistant. Porte-clés : appuyez une fois.",
  near_empty: "Rien de fort à proximité pour l’instant …",
  walk_intro: "Allez dans chaque pièce, touchez-la et marchez lentement pendant 90 secondes – jusque dans les coins. Emportez tous les appareils.",
  learning: "Apprentissage de {room} … encore {left} s",
  stop: "Annuler",
  samples: "{n} échantillons",
  quality: "Vérifier la précision",
  quality_result: "Précision : {p}",
  relearn_all: "Tout réapprendre",
  live_intro: "Voici comment NeonPlan vous voit en ce moment. Déplacez-vous et vérifiez.",
  enabled: "Localisation activée",
  admins_only: "Afficher les personnes aux admins uniquement",
  not_heard: "non capté",
  next: "Suivant",
  need_device: "Ajoutez d’abord un appareil.",
  app_title: "Android avec l'app Home Assistant",
  app_none: "Téléphone Android ? Dans l'app Home Assistant : Paramètres → Companion app → Gérer les capteurs → activer « BLE Transmitter ». Il apparaît alors ici tout seul.",
  app_off: "L'émetteur est éteint – activez-le dans l'app",
  app_power: "Puissance d'émission trop faible – réglez-la sur « High » dans l'app",
  app_mode: "Réglez le mode d'émission sur « Low latency » dans l'app",
  helper_android: "N'associez pas ici de téléphones ou tablettes Android : ils n'envoient pas cette clé en arrière-plan. Pour Android, utilisez le BLE Transmitter de l'app Home Assistant (ci-dessous).",
  unheard: "⚠ non capté",
  unheard_hint: "Aucun récepteur n'entend cet appareil en ce moment. Est-il allumé et émet-il ? Android : le BLE Transmitter de l'app Home Assistant.",
  fly: "Voler dans les pièces avec « Où est … ? » et « Qui est à la maison ? »",
  fly_hint: "Les vues NeonPlan ouvertes volent dans la pièce de la réponse et, avec « Qui est à la maison ? », dans chaque pièce tour à tour. Un toucher arrête. Pas pour les personnes tant qu'elles ne sont montrées qu'aux admins.",
};
const HU: typeof DE = {
  title: "Helymeghatározás beállítása",
  lab: "Labor",
  close: "Bezárás",
  s_scanners: "1 · Vevők",
  s_devices: "2 · Eszközök",
  s_walk: "3 · Betanítás",
  s_live: "4 · Élő",
  no_bt: "A Home Assistantban nincs Bluetooth beállítva. Elég egy Shelly (Gen2/3: passzív Bluetooth-keresés), ESPHome Bluetooth-proxy vagy egy USB-adapter.",
  scanners_intro: "Ezek a Home Assistant által ismert Bluetooth-vevők. Add meg mindegyiknél, melyik helyiségben van.",
  not_placed: "– válassz helyiséget –",
  hint_room: "A jel szerint: {room} – átvétel",
  coverage: "Helyiségek saját vevő nélkül – a betanítás így is felismerhetővé teszi őket:",
  devices_intro: "Mely eszközöket keressük? Legjobb az, ami mindig nálad van – a csuklón lévő óra ideális.",
  known_keys: "iPhone és Apple Watch kulccsal (a Home Assistant „Private BLE Device” eszközeiből):",
  add: "Hozzáadás",
  added: "✓ hozzáadva",
  remove: "Eltávolítás",
  person: "Személy",
  none: "nincs",
  irk_help: "Hiányzik az iPhone vagy az Apple Watch? Szükségük van a kulcsukra (IRK) „Private BLE Device”-ként a Home Assistantban – az útmutató megmutatja a legegyszerűbb módokat.",
  manual: "Útmutató",
  voice_hint: "Kérdezz hanggal is: „Hol van az iPhone-om?”, „Hol van Torsten?”, „Ki van otthon?”, „Csörgesd meg az iPhone-omat”.",
  look_hint: "3D-ben a személyek figuraként jelennek meg; a nézet ⚙ menüjében: Személyek → figura, tű vagy ki.",
  ring: "Csörgetés",
  ring_hint: "A Home Assistant alkalmazás ezen a telefonon – így működik a „Csörgesd meg az iPhone-omat”.",
  near_title: "Közeli eszköz keresése",
  key_title: "Kulcs beillesztése",
  key_name: "Név (pl. Torsten iPhone-ja)",
  key_value: "Kulcs (IRK, 32 karakter)",
  key_bad: "Ez nem érvényes kulcs (32 hex karakter vagy Base64).",
  helper_title: "🔑 Kulcssegéd",
  helper_build: "Kulcssegéd beállítása",
  helper_found: "Kulcssegéd megtalálva: {name}",
  helper_watch: "Apple Watch esetén",
  helper_phone: "iPhone esetén",
  helper_watch_steps: "Az órán: Beállítások → Bluetooth → az „Egészségügyi eszközök” alatt koppintson a „NeonPlan Key” elemre, és párosítsa.",
  helper_phone_steps: "A telefonon: Beállítások → Bluetooth → párosítsa a „NeonPlan Key” eszközt (billentyűzetként jelenik meg).",
  helper_key: "Kiolvasott kulcs:",
  helper_wait: "Várakozás a párosításra …",
  helper_after: "Ezután távolítsa el a „NeonPlan Key” eszközt a Bluetooth-beállításokból.",
  helper_next: "🔄 Következő eszköz",
  helper_next_hint: "Minden további eszköz előtt koppintson: a segéd új Bluetooth-azonosítót kap, így a korábban párosított eszköz nem kapcsolódik közbe.",
  helper_name: "Az eszköz neve",
  helper_irk: "Az imént párosított eszközről olvasott kulcs (IRK):",
  helper_belongs: "Ehhez tartozik: {name}",
  helper_add_as: "Hozzáadás így: „{name}”",
  helper_added: "✓ „{name}” most már a fenti listában van.",
  pbd_rename: "Tipp: nevezze át a Home Assistantban (Eszközök és szolgáltatások → Private BLE Device), és itt a név jelenik meg.",
  carry: "Most nálam van:",
  offline: "jelenleg nem érhető el",
  pbd_summary: "Bermudáról vált? Kulcsok átvétele a Home Assistantból",
  worn: "viselt",
  worn_hint: "Testen viselt (óra, karpánt): megmutatja, hol van a személy – a telefon bárhol heverhet.",
  look_title: "Személyek 3D-ben",
  look_figure: "Alak",
  look_pin: "Jelölő",
  look_off: "Ki",
  near_summary: "Androidos telefon vagy kulcstartó hozzáadása",
  android_label: "Androidos telefon (HA-alkalmazás)",
  paste_summary: "Meglévő kulcs beillesztése",
  helper_install: "Telepítés ESP32-re",
  helper_pitch: "iPhone-hoz és Apple Watch-hoz: egy kb. 5 eurós ESP32 három perc alatt kulcssegéddé válik – közvetlenül a böngészőből telepítve, Mac nélkül. Utána itt párosítsa.",
  near_intro: "Tartsd az eszközt közvetlenül egy vevő mellé. Android: kapcsold be a „BLE Transmitter” opciót a Home Assistant alkalmazásban. Kulcstartók: nyomd meg egyszer.",
  near_empty: "Még semmi erős a közelben …",
  walk_intro: "Menj be minden helyiségbe, koppints rá, és sétálj lassan 90 másodpercig – a sarkokba is. Vidd magaddal az összes eszközt.",
  learning: "{room} betanítása … még {left} s",
  stop: "Mégse",
  samples: "{n} minta",
  quality: "Pontosság ellenőrzése",
  quality_result: "Pontosság: {p}",
  relearn_all: "Minden újratanítása",
  live_intro: "Így lát most téged a NeonPlan. Sétálj egy kicsit, és nézd meg, stimmel-e.",
  enabled: "Helymeghatározás bekapcsolva",
  admins_only: "Személyek csak adminoknak",
  not_heard: "nem hallható",
  next: "Tovább",
  need_device: "Előbb adj hozzá egy eszközt.",
  app_title: "Android a Home Assistant alkalmazással",
  app_none: "Androidos telefon? A Home Assistant alkalmazásban: Beállítások → Companion app → Érzékelők kezelése → kapcsold be a „BLE Transmitter”-t. Utána magától megjelenik itt.",
  app_off: "Az adó ki van kapcsolva – kapcsold be az alkalmazásban",
  app_power: "Túl kicsi az adóteljesítmény – állítsd „High”-ra az alkalmazásban",
  app_mode: "Állítsd az adási módot „Low latency”-re az alkalmazásban",
  helper_android: "Androidos telefont vagy táblagépet ne itt párosíts: a háttérben nem küldik ezt a kulcsot. Androidhoz a Home Assistant alkalmazás BLE Transmitterét használd (lent).",
  unheard: "⚠ nem hallható",
  unheard_hint: "Most egyik vevő sem hallja ezt az eszközt. Be van kapcsolva és sugároz? Android: a Home Assistant alkalmazás BLE Transmittere.",
  fly: "Repülés a szobákba a „Hol van …?” és „Ki van otthon?” kérdésekre",
  fly_hint: "A nyitott NeonPlan-nézetek a válasz szobájába repülnek, „Ki van otthon?” esetén sorban minden szobába. Koppintás leállítja. Személyeknél nem, ha csak adminoknak látszanak.",
};
const IT: typeof DE = {
  title: "Configura localizzazione",
  lab: "Lab",
  close: "Chiudi",
  s_scanners: "1 · Ricevitori",
  s_devices: "2 · Dispositivi",
  s_walk: "3 · Apprendimento",
  s_live: "4 · Live",
  no_bt: "Home Assistant non ha il Bluetooth configurato. Bastano Shelly (Gen2/3: scansione Bluetooth passiva), proxy Bluetooth ESPHome o un adattatore USB.",
  scanners_intro: "Questi sono tutti i ricevitori Bluetooth noti a Home Assistant. Indica per ognuno in quale stanza si trova.",
  not_placed: "– scegli stanza –",
  hint_room: "Il segnale dice: {room} – usa",
  coverage: "Stanze senza ricevitore proprio – l’apprendimento le rende comunque riconoscibili:",
  devices_intro: "Quali dispositivi localizzare? Meglio ciò che porti sempre con te – l’orologio al polso è ideale.",
  known_keys: "iPhone e Apple Watch con chiave (da “Private BLE Device” in Home Assistant):",
  add: "Aggiungi",
  added: "✓ aggiunto",
  remove: "Rimuovi",
  person: "Persona",
  none: "nessuna",
  irk_help: "Manca l’iPhone o l’Apple Watch? Serve la loro chiave (IRK) come “Private BLE Device” in Home Assistant – la guida mostra i modi più semplici.",
  manual: "Guida",
  voice_hint: "Chiedi anche a voce: “Dov’è il mio iPhone?”, “Dov’è Torsten?”, “Chi è a casa?”, “Fai squillare il mio iPhone”.",
  look_hint: "In 3D le persone appaiono come figura; nel menu ⚙ della vista: Persone → figura, puntina o spento.",
  ring: "Fai squillare",
  ring_hint: "L’app Home Assistant su questo telefono – così funziona “Fai squillare il mio iPhone”.",
  near_title: "Cerca dispositivo vicino",
  key_title: "Incolla chiave",
  key_name: "Nome (es. iPhone di Torsten)",
  key_value: "Chiave (IRK, 32 caratteri)",
  key_bad: "Non è una chiave valida (32 caratteri hex o Base64).",
  helper_title: "🔑 Assistente chiave",
  helper_build: "Configura l’assistente chiave",
  helper_found: "Assistente chiave trovato: {name}",
  helper_watch: "Per Apple Watch",
  helper_phone: "Per iPhone",
  helper_watch_steps: "Sull’orologio: Impostazioni → Bluetooth → in «Dispositivi per la salute» tocca «NeonPlan Key» e abbina.",
  helper_phone_steps: "Sul telefono: Impostazioni → Bluetooth → abbina «NeonPlan Key» (appare come tastiera).",
  helper_key: "Chiave letta:",
  helper_wait: "In attesa dell’abbinamento …",
  helper_after: "Poi rimuovi il dispositivo «NeonPlan Key» dalle impostazioni Bluetooth.",
  helper_next: "🔄 Dispositivo successivo",
  helper_next_hint: "Tocca prima di ogni nuovo dispositivo: l'aiutante riceve una nuova identità Bluetooth, così un dispositivo già associato non si ricollega.",
  helper_name: "Nome di questo dispositivo",
  helper_irk: "Chiave (IRK) letta dal dispositivo appena associato:",
  helper_belongs: "Appartiene a: {name}",
  helper_add_as: "Aggiungi come «{name}»",
  helper_added: "✓ «{name}» ora è nell’elenco qui sopra.",
  pbd_rename: "Suggerimento: rinominalo in Home Assistant (Dispositivi e servizi → Private BLE Device) per vedere qui il nome.",
  carry: "Ho con me:",
  offline: "non raggiungibile ora",
  pbd_summary: "Arrivi da Bermuda? Prendi le chiavi da Home Assistant",
  worn: "indossato",
  worn_hint: "Indossato (orologio, braccialetto): indica dove si trova la persona – un telefono può restare ovunque.",
  look_title: "Persone in 3D",
  look_figure: "Figura",
  look_pin: "Segnaposto",
  look_off: "No",
  near_summary: "Aggiungi un telefono Android o un portachiavi",
  android_label: "Telefono Android (app HA)",
  paste_summary: "Incolla una chiave che hai già",
  helper_install: "Installa su un ESP32",
  helper_pitch: "Per iPhone e Apple Watch: un ESP32 da circa 5 € diventa l’aiutante delle chiavi in tre minuti, installato dal browser, senza Mac. Poi associalo qui.",
  near_intro: "Tieni il dispositivo vicinissimo a un ricevitore. Android: attiva “BLE Transmitter” nell’app Home Assistant. Portachiavi: premi una volta.",
  near_empty: "Ancora niente di forte nelle vicinanze …",
  walk_intro: "Entra in ogni stanza, toccala e cammina lentamente per 90 secondi – anche negli angoli. Porta con te tutti i dispositivi.",
  learning: "Apprendo {room} … ancora {left} s",
  stop: "Annulla",
  samples: "{n} campioni",
  quality: "Verifica precisione",
  quality_result: "Precisione: {p}",
  relearn_all: "Riapprendi tutto",
  live_intro: "Ecco come ti vede NeonPlan adesso. Cammina un po’ e controlla se è giusto.",
  enabled: "Localizzazione attiva",
  admins_only: "Mostra persone solo agli admin",
  not_heard: "non rilevato",
  next: "Avanti",
  need_device: "Prima aggiungi un dispositivo.",
  app_title: "Android con l'app Home Assistant",
  app_none: "Telefono Android? Nell'app Home Assistant: Impostazioni → Companion app → Gestisci sensori → attiva «BLE Transmitter». Poi compare qui da solo.",
  app_off: "Il trasmettitore è spento – attivalo nell'app",
  app_power: "Potenza di trasmissione troppo bassa – impostala su «High» nell'app",
  app_mode: "Imposta la modalità di trasmissione su «Low latency» nell'app",
  helper_android: "Non associare qui telefoni o tablet Android: non inviano questa chiave in background. Per Android usa il BLE Transmitter dell'app Home Assistant (sotto).",
  unheard: "⚠ non rilevato",
  unheard_hint: "Nessun ricevitore sente questo dispositivo in questo momento. È acceso e trasmette? Android: il BLE Transmitter dell'app Home Assistant.",
  fly: "Volare nelle stanze con «Dov'è …?» e «Chi è a casa?»",
  fly_hint: "Le viste NeonPlan aperte volano nella stanza della risposta e, con «Chi è a casa?», in tutte a turno. Un tocco ferma. Non per le persone finché sono mostrate solo agli admin.",
};
const NB: typeof DE = {
  title: "Sett opp lokalisering",
  lab: "Lab",
  close: "Lukk",
  s_scanners: "1 · Mottakere",
  s_devices: "2 · Enheter",
  s_walk: "3 · Innlæring",
  s_live: "4 · Live",
  no_bt: "Home Assistant har ikke Bluetooth satt opp. Shelly (Gen2/3: passiv Bluetooth-skanning), ESPHome Bluetooth-proxyer eller en USB-adapter holder.",
  scanners_intro: "Dette er alle Bluetooth-mottakere Home Assistant kjenner. Si for hver av dem hvilket rom den står i.",
  not_placed: "– velg rom –",
  hint_room: "Signalet sier: {room} – bruk",
  coverage: "Rom uten egen mottaker – innlæringen gjør dem gjenkjennelige likevel:",
  devices_intro: "Hvilke enheter skal lokaliseres? Helst det du alltid har med deg – klokka på håndleddet er ideell.",
  known_keys: "iPhone og Apple Watch med nøkkel (fra «Private BLE Device» i Home Assistant):",
  add: "Legg til",
  added: "✓ med",
  remove: "Fjern",
  person: "Person",
  none: "ingen",
  irk_help: "Mangler iPhone eller Apple Watch? De trenger nøkkelen sin (IRK) som «Private BLE Device» i Home Assistant – veiledningen viser de enkleste måtene.",
  manual: "Veiledning",
  voice_hint: "Spør også med stemmen: «Hvor er iPhonen min?», «Hvor er Torsten?», «Hvem er hjemme?», «Ring iPhonen min».",
  look_hint: "I 3D vises personer som figur; i visningens ⚙-meny: Personer → figur, nål eller av.",
  ring: "Ring",
  ring_hint: "Home Assistant-appen på denne telefonen – da virker «Ring iPhonen min».",
  near_title: "Finn enhet i nærheten",
  key_title: "Lim inn nøkkel",
  key_name: "Navn (f.eks. Torstens iPhone)",
  key_value: "Nøkkel (IRK, 32 tegn)",
  key_bad: "Dette er ikke en gyldig nøkkel (32 hex-tegn eller Base64).",
  helper_title: "🔑 Nøkkelhjelper",
  helper_build: "Konfigurer nøkkelhjelperen",
  helper_found: "Nøkkelhjelper funnet: {name}",
  helper_watch: "For Apple Watch",
  helper_phone: "For iPhone",
  helper_watch_steps: "På klokken: Innstillinger → Bluetooth → under «Helseenheter» trykker du på «NeonPlan Key» og parer.",
  helper_phone_steps: "På telefonen: Innstillinger → Bluetooth → par «NeonPlan Key» (vises som tastatur).",
  helper_key: "Lest nøkkel:",
  helper_wait: "Venter på paring …",
  helper_after: "Fjern deretter enheten «NeonPlan Key» fra Bluetooth-innstillingene igjen.",
  helper_next: "🔄 Neste enhet",
  helper_next_hint: "Trykk før hver ny enhet: hjelperen får en ny Bluetooth-identitet, så en enhet som var paret før, ikke kobler seg til imellom.",
  helper_name: "Navn på denne enheten",
  helper_irk: "Nøkkel (IRK) lest fra enheten som nettopp ble paret:",
  helper_belongs: "Hører til: {name}",
  helper_add_as: "Legg til som «{name}»",
  helper_added: "✓ «{name}» står nå i listen over.",
  pbd_rename: "Tips: gi den nytt navn i Home Assistant (Enheter og tjenester → Private BLE Device), så står navnet her.",
  carry: "Jeg har med meg:",
  offline: "ikke tilgjengelig nå",
  pbd_summary: "Bytter du fra Bermuda? Hent nøkler fra Home Assistant",
  worn: "båret",
  worn_hint: "Båret på kroppen (klokke, bånd): viser hvor personen er – en telefon kan ligge hvor som helst.",
  look_title: "Personer i 3D",
  look_figure: "Figur",
  look_pin: "Nål",
  look_off: "Av",
  near_summary: "Legg til Android-telefon eller nøkkelbrikke",
  android_label: "Android-telefon (HA-appen)",
  paste_summary: "Lim inn en nøkkel du allerede har",
  helper_install: "Installer på en ESP32",
  helper_pitch: "For iPhone og Apple Watch: En ESP32 til ca. 5 € blir nøkkelhjelper på tre minutter – installert rett fra nettleseren, uten Mac. Par den deretter her.",
  near_intro: "Hold enheten helt inntil en mottaker. Android: slå på «BLE Transmitter» i Home Assistant-appen. Nøkkelbrikker: trykk én gang.",
  near_empty: "Ingenting sterkt i nærheten ennå …",
  walk_intro: "Gå inn i hvert rom, trykk på det og gå sakte rundt i 90 sekunder – også inn i hjørnene. Ta med alle enhetene.",
  learning: "Lærer {room} … {left} s igjen",
  stop: "Avbryt",
  samples: "{n} prøver",
  quality: "Sjekk treffsikkerhet",
  quality_result: "Treffsikkerhet: {p}",
  relearn_all: "Lær inn alt på nytt",
  live_intro: "Slik ser NeonPlan deg akkurat nå. Gå rundt og se om det stemmer.",
  enabled: "Lokalisering på",
  admins_only: "Vis personer bare for administratorer",
  not_heard: "ikke hørt",
  next: "Neste",
  need_device: "Legg til en enhet først.",
  app_title: "Android med Home Assistant-appen",
  app_none: "Android-telefon? I Home Assistant-appen: Innstillinger → Companion app → Administrer sensorer → slå på «BLE Transmitter». Da dukker den opp her av seg selv.",
  app_off: "Senderen er av – slå den på i appen",
  app_power: "Sendestyrken er for lav – sett den til «High» i appen",
  app_mode: "Sett sendemodus til «Low latency» i appen",
  helper_android: "Ikke par Android-telefoner eller -nettbrett her: de sender ikke denne nøkkelen i bakgrunnen. Bruk Home Assistant-appens BLE Transmitter for Android (nedenfor).",
  unheard: "⚠ ikke hørt",
  unheard_hint: "Ingen mottaker hører enheten akkurat nå. Er den på og sender? Android: Home Assistant-appens BLE Transmitter.",
  fly: "Fly inn i rommene ved «Hvor er …?» og «Hvem er hjemme?»",
  fly_hint: "De åpne NeonPlan-visningene flyr inn i rommet i svaret, ved «Hvem er hjemme?» inn i alle rom etter tur. Et trykk stopper. Ikke for personer når de bare vises for administratorer.",
};
const NL: typeof DE = {
  title: "Locatiebepaling instellen",
  lab: "Lab",
  close: "Sluiten",
  s_scanners: "1 · Ontvangers",
  s_devices: "2 · Apparaten",
  s_walk: "3 · Inleren",
  s_live: "4 · Live",
  no_bt: "Home Assistant heeft geen Bluetooth ingesteld. Shelly (Gen2/3: Bluetooth-scan passief), ESPHome Bluetooth-proxy’s of een USB-adapter volstaan.",
  scanners_intro: "Dit zijn alle Bluetooth-ontvangers die Home Assistant kent. Geef bij elk aan in welke ruimte hij staat.",
  not_placed: "– kies ruimte –",
  hint_room: "Signaal zegt: {room} – overnemen",
  coverage: "Ruimtes zonder eigen ontvanger – door het inleren worden ze toch herkenbaar:",
  devices_intro: "Welke apparaten moeten gelokaliseerd worden? Het liefst wat je altijd bij je hebt – het horloge om je pols is ideaal.",
  known_keys: "iPhone en Apple Watch met sleutel (uit “Private BLE Device” in Home Assistant):",
  add: "Toevoegen",
  added: "✓ toegevoegd",
  remove: "Verwijderen",
  person: "Persoon",
  none: "geen",
  irk_help: "Mist er een iPhone of Apple Watch? Die hebben hun sleutel (IRK) nodig als “Private BLE Device” in Home Assistant – de handleiding toont de eenvoudigste manieren.",
  manual: "Handleiding",
  voice_hint: "Vraag het ook met je stem: “Waar is mijn iPhone?”, “Waar is Torsten?”, “Wie is er thuis?”, “Laat mijn iPhone overgaan”.",
  look_hint: "In 3D verschijnen personen als figuur; in het ⚙-menu van de weergave: Personen → figuur, speld of uit.",
  ring: "Laten overgaan",
  ring_hint: "De Home Assistant-app op deze telefoon – dan werkt “Laat mijn iPhone overgaan”.",
  near_title: "Apparaat in de buurt zoeken",
  key_title: "Sleutel plakken",
  key_name: "Naam (bijv. iPhone van Torsten)",
  key_value: "Sleutel (IRK, 32 tekens)",
  key_bad: "Dat is geen geldige sleutel (32 hex-tekens of Base64).",
  helper_title: "🔑 Sleutelhulp",
  helper_build: "Sleutelhulp instellen",
  helper_found: "Sleutelhulp gevonden: {name}",
  helper_watch: "Voor een Apple Watch",
  helper_phone: "Voor een iPhone",
  helper_watch_steps: "Op de watch: Instellingen → Bluetooth → onder ‘Gezondheidsapparaten’ op ‘NeonPlan Key’ tikken en koppelen.",
  helper_phone_steps: "Op de telefoon: Instellingen → Bluetooth → ‘NeonPlan Key’ koppelen (verschijnt als toetsenbord).",
  helper_key: "Uitgelezen sleutel:",
  helper_wait: "Wachten op koppelen …",
  helper_after: "Verwijder daarna het apparaat ‘NeonPlan Key’ weer uit de Bluetooth-instellingen.",
  helper_next: "🔄 Volgend apparaat",
  helper_next_hint: "Tik vóór elk volgend apparaat: de helper krijgt een nieuwe Bluetooth-identiteit, zodat een eerder gekoppeld apparaat niet meer tussendoor verbindt.",
  helper_name: "Naam voor dit apparaat",
  helper_irk: "Sleutel (IRK) van het apparaat dat net is gekoppeld:",
  helper_belongs: "Hoort bij: {name}",
  helper_add_as: "Toevoegen als ‘{name}’",
  helper_added: "✓ ‘{name}’ staat nu in de lijst hierboven.",
  pbd_rename: "Tip: geef het een naam in Home Assistant (Apparaten en diensten → Private BLE Device), dan staat die hier.",
  carry: "Ik heb nu bij me:",
  offline: "nu niet bereikbaar",
  pbd_summary: "Kom je van Bermuda? Sleutels uit Home Assistant overnemen",
  worn: "gedragen",
  worn_hint: "Op het lichaam gedragen (horloge, band): bepaalt waar de persoon is – een telefoon kan ergens liggen.",
  look_title: "Personen in 3D",
  look_figure: "Figuur",
  look_pin: "Speld",
  look_off: "Uit",
  near_summary: "Android-telefoon of sleutelhanger toevoegen",
  android_label: "Android-telefoon (HA-app)",
  paste_summary: "Een sleutel plakken die je al hebt",
  helper_install: "Op een ESP32 installeren",
  helper_pitch: "Voor iPhone en Apple Watch: een ESP32 van ca. 5 € wordt in drie minuten de sleutelhelper – direct vanuit de browser geïnstalleerd, zonder Mac. Daarna hier koppelen.",
  near_intro: "Houd het apparaat vlak bij een ontvanger. Android: zet “BLE Transmitter” aan in de Home Assistant-app. Sleutelhangers: kort indrukken.",
  near_empty: "Nog niets sterks in de buurt …",
  walk_intro: "Ga elke ruimte in, tik erop en loop 90 seconden langzaam rond – ook in de hoeken. Neem alle apparaten mee.",
  learning: "{room} inleren … nog {left} s",
  stop: "Annuleren",
  samples: "{n} metingen",
  quality: "Trefzekerheid controleren",
  quality_result: "Trefzekerheid: {p}",
  relearn_all: "Alles opnieuw inleren",
  live_intro: "Zo ziet NeonPlan je nu. Loop rond en kijk of het klopt.",
  enabled: "Locatiebepaling aan",
  admins_only: "Personen alleen aan admins tonen",
  not_heard: "niet gehoord",
  next: "Volgende",
  need_device: "Voeg eerst een apparaat toe.",
  app_title: "Android met de Home Assistant-app",
  app_none: "Android-telefoon? In de Home Assistant-app: Instellingen → Companion app → Sensoren beheren → zet „BLE Transmitter” aan. Dan verschijnt hij hier vanzelf.",
  app_off: "Zender staat uit – zet hem aan in de app",
  app_power: "Zendvermogen te laag – zet het in de app op „High”",
  app_mode: "Zet de zendmodus in de app op „Low latency”",
  helper_android: "Koppel hier geen Android-telefoons of -tablets: ze sturen deze sleutel niet op de achtergrond. Gebruik voor Android de BLE Transmitter van de Home Assistant-app (hieronder).",
  unheard: "⚠ niet gehoord",
  unheard_hint: "Geen ontvanger hoort dit apparaat nu. Staat het aan en zendt het? Android: de BLE Transmitter van de Home Assistant-app.",
  fly: "Bij „Waar is …?” en „Wie is er thuis?” de kamers in vliegen",
  fly_hint: "De open NeonPlan-weergaven vliegen naar de kamer uit het antwoord, bij „Wie is er thuis?” om de beurt naar alle kamers. Tikken stopt het. Niet voor personen zolang ze alleen aan admins worden getoond.",
};
const NN: typeof DE = {
  title: "Set opp lokalisering",
  lab: "Lab",
  close: "Lukk",
  s_scanners: "1 · Mottakarar",
  s_devices: "2 · Einingar",
  s_walk: "3 · Innlæring",
  s_live: "4 · Live",
  no_bt: "Home Assistant har ikkje sett opp Bluetooth. Shelly (Gen2/3: passiv Bluetooth-skanning), ESPHome Bluetooth-proxyar eller ein USB-adapter held.",
  scanners_intro: "Dette er alle Bluetooth-mottakarar Home Assistant kjenner. Sei for kvar av dei kva rom han står i.",
  not_placed: "– vel rom –",
  hint_room: "Signalet seier: {room} – bruk",
  coverage: "Rom utan eigen mottakar – innlæringa gjer dei kjennelege likevel:",
  devices_intro: "Kva einingar skal lokaliserast? Helst det du alltid har med deg – klokka på handleddet er ideell.",
  known_keys: "iPhone og Apple Watch med nøkkel (frå «Private BLE Device» i Home Assistant):",
  add: "Legg til",
  added: "✓ med",
  remove: "Fjern",
  person: "Person",
  none: "ingen",
  irk_help: "Manglar iPhone eller Apple Watch? Dei treng nøkkelen sin (IRK) som «Private BLE Device» i Home Assistant – rettleiinga viser dei enklaste måtane.",
  manual: "Rettleiing",
  voice_hint: "Spør òg med stemma: «Kvar er iPhonen min?», «Kvar er Torsten?», «Kven er heime?», «Ring iPhonen min».",
  look_hint: "I 3D blir personar viste som figur; i ⚙-menyen til visinga: Personar → figur, nål eller av.",
  ring: "Ring",
  ring_hint: "Home Assistant-appen på denne telefonen – då verkar «Ring iPhonen min».",
  near_title: "Finn eining i nærleiken",
  key_title: "Lim inn nøkkel",
  key_name: "Namn (t.d. iPhonen til Torsten)",
  key_value: "Nøkkel (IRK, 32 teikn)",
  key_bad: "Dette er ikkje ein gyldig nøkkel (32 hex-teikn eller Base64).",
  helper_title: "🔑 Nøkkelhjelpar",
  helper_build: "Set opp nøkkelhjelparen",
  helper_found: "Nøkkelhjelpar funnen: {name}",
  helper_watch: "For Apple Watch",
  helper_phone: "For iPhone",
  helper_watch_steps: "På klokka: Innstillingar → Bluetooth → under «Helseeiningar» trykkjer du på «NeonPlan Key» og parar.",
  helper_phone_steps: "På telefonen: Innstillingar → Bluetooth → par «NeonPlan Key» (blir vist som tastatur).",
  helper_key: "Lesen nøkkel:",
  helper_wait: "Ventar på paring …",
  helper_after: "Fjern deretter eininga «NeonPlan Key» frå Bluetooth-innstillingane igjen.",
  helper_next: "🔄 Neste eining",
  helper_next_hint: "Trykk før kvar ny eining: hjelparen får ein ny Bluetooth-identitet, så ei eining som var para før, ikkje koplar seg til i mellomtida.",
  helper_name: "Namn på denne eininga",
  helper_irk: "Nøkkel (IRK) lesen frå eininga som nett vart para:",
  helper_belongs: "Høyrer til: {name}",
  helper_add_as: "Legg til som «{name}»",
  helper_added: "✓ «{name}» står no i lista over.",
  pbd_rename: "Tips: gje henne nytt namn i Home Assistant (Einingar og tenester → Private BLE Device), så står namnet her.",
  carry: "Eg har med meg:",
  offline: "ikkje tilgjengeleg no",
  pbd_summary: "Byter du frå Bermuda? Hent nøklar frå Home Assistant",
  worn: "bore",
  worn_hint: "Bore på kroppen (klokke, band): viser kvar personen er – ein telefon kan liggje kvar som helst.",
  look_title: "Personar i 3D",
  look_figure: "Figur",
  look_pin: "Nål",
  look_off: "Av",
  near_summary: "Legg til Android-telefon eller nøkkelbrikke",
  android_label: "Android-telefon (HA-appen)",
  paste_summary: "Lim inn ein nøkkel du alt har",
  helper_install: "Installer på ein ESP32",
  helper_pitch: "For iPhone og Apple Watch: Ein ESP32 til ca. 5 € blir nøkkelhjelpar på tre minutt – installert rett frå nettlesaren, utan Mac. Par han så her.",
  near_intro: "Hald eininga heilt inntil ein mottakar. Android: slå på «BLE Transmitter» i Home Assistant-appen. Nøkkelbrikker: trykk éin gong.",
  near_empty: "Ikkje noko sterkt i nærleiken enno …",
  walk_intro: "Gå inn i kvart rom, trykk på det og gå sakte rundt i 90 sekund – òg inn i hjørna. Ta med alle einingane.",
  learning: "Lærer {room} … {left} s att",
  stop: "Avbryt",
  samples: "{n} prøver",
  quality: "Sjekk treffsikkerheit",
  quality_result: "Treffsikkerheit: {p}",
  relearn_all: "Lær inn alt på nytt",
  live_intro: "Slik ser NeonPlan deg akkurat no. Gå rundt og sjå om det stemmer.",
  enabled: "Lokalisering på",
  admins_only: "Vis personar berre for administratorar",
  not_heard: "ikkje høyrt",
  next: "Neste",
  need_device: "Legg til ei eining først.",
  app_title: "Android med Home Assistant-appen",
  app_none: "Android-telefon? I Home Assistant-appen: Innstillingar → Companion app → Administrer sensorar → slå på «BLE Transmitter». Då dukkar han opp her av seg sjølv.",
  app_off: "Sendaren er av – slå han på i appen",
  app_power: "Sendestyrken er for låg – set han til «High» i appen",
  app_mode: "Set sendemodus til «Low latency» i appen",
  helper_android: "Ikkje par Android-telefonar eller -nettbrett her: dei sender ikkje denne nøkkelen i bakgrunnen. Bruk BLE Transmitter i Home Assistant-appen for Android (nedanfor).",
  unheard: "⚠ ikkje høyrt",
  unheard_hint: "Ingen mottakar høyrer eininga akkurat no. Er ho på og sender? Android: BLE Transmitter i Home Assistant-appen.",
  fly: "Fly inn i romma ved «Kvar er …?» og «Kven er heime?»",
  fly_hint: "Dei opne NeonPlan-visingane flyg inn i rommet i svaret, ved «Kven er heime?» inn i alle rom etter tur. Eit trykk stoppar. Ikkje for personar når dei berre blir viste for administratorar.",
};
const PL: typeof DE = {
  title: "Konfiguracja lokalizacji",
  lab: "Lab",
  close: "Zamknij",
  s_scanners: "1 · Odbiorniki",
  s_devices: "2 · Urządzenia",
  s_walk: "3 · Nauka",
  s_live: "4 · Na żywo",
  no_bt: "Home Assistant nie ma skonfigurowanego Bluetooth. Wystarczy Shelly (Gen2/3: pasywne skanowanie Bluetooth), proxy Bluetooth ESPHome lub adapter USB.",
  scanners_intro: "To wszystkie odbiorniki Bluetooth znane Home Assistant. Przy każdym wskaż, w którym pomieszczeniu stoi.",
  not_placed: "– wybierz pomieszczenie –",
  hint_room: "Sygnał wskazuje: {room} – przyjmij",
  coverage: "Pomieszczenia bez własnego odbiornika – nauka i tak pozwoli je rozpoznać:",
  devices_intro: "Które urządzenia lokalizować? Najlepiej to, co zawsze masz przy sobie – zegarek na nadgarstku jest idealny.",
  known_keys: "iPhone i Apple Watch z kluczem (z „Private BLE Device” w Home Assistant):",
  add: "Dodaj",
  added: "✓ dodano",
  remove: "Usuń",
  person: "Osoba",
  none: "brak",
  irk_help: "Brakuje iPhone’a lub Apple Watch? Potrzebują swojego klucza (IRK) jako „Private BLE Device” w Home Assistant – instrukcja pokazuje najprostsze sposoby.",
  manual: "Instrukcja",
  voice_hint: "Pytaj też głosem: „Gdzie jest mój iPhone?”, „Gdzie jest Torsten?”, „Kto jest w domu?”, „Zadzwoń na mój iPhone”.",
  look_hint: "W 3D osoby widać jako postać; w menu ⚙ widoku: Osoby → postać, pinezka lub wyłączone.",
  ring: "Zadzwoń",
  ring_hint: "Aplikacja Home Assistant na tym telefonie – wtedy działa „Zadzwoń na mój iPhone”.",
  near_title: "Szukaj urządzenia w pobliżu",
  key_title: "Wklej klucz",
  key_name: "Nazwa (np. iPhone Torstena)",
  key_value: "Klucz (IRK, 32 znaki)",
  key_bad: "To nie jest prawidłowy klucz (32 znaki hex lub Base64).",
  helper_title: "🔑 Pomocnik klucza",
  helper_build: "Skonfiguruj pomocnika klucza",
  helper_found: "Znaleziono pomocnika klucza: {name}",
  helper_watch: "Dla Apple Watch",
  helper_phone: "Dla telefonu iPhone",
  helper_watch_steps: "Na zegarku: Ustawienia → Bluetooth → w sekcji „Urządzenia zdrowotne” stuknij „NeonPlan Key” i sparuj.",
  helper_phone_steps: "Na telefonie: Ustawienia → Bluetooth → sparuj „NeonPlan Key” (pojawia się jako klawiatura).",
  helper_key: "Odczytany klucz:",
  helper_wait: "Czekam na parowanie …",
  helper_after: "Następnie usuń urządzenie „NeonPlan Key” z ustawień Bluetooth.",
  helper_next: "🔄 Następne urządzenie",
  helper_next_hint: "Dotknij przed każdym kolejnym urządzeniem: pomocnik dostaje nową tożsamość Bluetooth, więc wcześniej sparowane urządzenie już się nie wtrąca.",
  helper_name: "Nazwa tego urządzenia",
  helper_irk: "Klucz (IRK) odczytany z urządzenia, które właśnie się sparowało:",
  helper_belongs: "Należy do: {name}",
  helper_add_as: "Dodaj jako „{name}”",
  helper_added: "✓ „{name}” jest teraz na liście powyżej.",
  pbd_rename: "Wskazówka: zmień nazwę w Home Assistant (Urządzenia i usługi → Private BLE Device), a tu pojawi się nazwa.",
  carry: "Mam teraz przy sobie:",
  offline: "chwilowo niedostępny",
  pbd_summary: "Przechodzisz z Bermudy? Przejmij klucze z Home Assistant",
  worn: "noszone",
  worn_hint: "Noszone na ciele (zegarek, opaska): pokazuje, gdzie jest osoba – telefon może gdzieś leżeć.",
  look_title: "Osoby w 3D",
  look_figure: "Postać",
  look_pin: "Pinezka",
  look_off: "Wył.",
  near_summary: "Dodaj telefon z Androidem lub brelok",
  android_label: "Telefon z Androidem (aplikacja HA)",
  paste_summary: "Wklej klucz, który już masz",
  helper_install: "Zainstaluj na ESP32",
  helper_pitch: "Dla iPhone’a i Apple Watch: ESP32 za ok. 5 € w trzy minuty staje się pomocnikiem kluczy – instalacja prosto z przeglądarki, bez Maca. Potem sparuj tutaj.",
  near_intro: "Przyłóż urządzenie tuż do odbiornika. Android: włącz „BLE Transmitter” w aplikacji Home Assistant. Breloki: naciśnij raz.",
  near_empty: "Jeszcze nic silnego w pobliżu …",
  walk_intro: "Wejdź do każdego pomieszczenia, dotknij go i chodź powoli przez 90 sekund – także po kątach. Weź ze sobą wszystkie urządzenia.",
  learning: "Uczę się: {room} … jeszcze {left} s",
  stop: "Anuluj",
  samples: "Próbki: {n}",
  quality: "Sprawdź trafność",
  quality_result: "Trafność: {p}",
  relearn_all: "Naucz wszystko od nowa",
  live_intro: "Tak NeonPlan widzi cię teraz. Przejdź się i sprawdź, czy się zgadza.",
  enabled: "Lokalizacja włączona",
  admins_only: "Pokazuj osoby tylko adminom",
  not_heard: "brak sygnału",
  next: "Dalej",
  need_device: "Najpierw dodaj urządzenie.",
  app_title: "Android z aplikacją Home Assistant",
  app_none: "Telefon z Androidem? W aplikacji Home Assistant: Ustawienia → Companion app → Zarządzaj czujnikami → włącz „BLE Transmitter”. Wtedy pojawi się tu sam.",
  app_off: "Nadajnik jest wyłączony – włącz go w aplikacji",
  app_power: "Za mała moc nadawania – ustaw w aplikacji „High”",
  app_mode: "Ustaw w aplikacji tryb nadawania „Low latency”",
  helper_android: "Nie paruj tu telefonów ani tabletów z Androidem: nie wysyłają tego klucza w tle. Dla Androida użyj BLE Transmitter aplikacji Home Assistant (poniżej).",
  unheard: "⚠ brak sygnału",
  unheard_hint: "Żaden odbiornik nie słyszy teraz tego urządzenia. Czy jest włączone i nadaje? Android: BLE Transmitter aplikacji Home Assistant.",
  fly: "Wlatuj do pomieszczeń przy „Gdzie jest …?” i „Kto jest w domu?”",
  fly_hint: "Otwarte widoki NeonPlan wlatują do pomieszczenia z odpowiedzi, a przy „Kto jest w domu?” po kolei do wszystkich. Dotknięcie zatrzymuje. Nie dla osób, gdy są pokazywane tylko adminom.",
};
const PT: typeof DE = {
  title: "Configurar localização",
  lab: "Lab",
  close: "Fechar",
  s_scanners: "1 · Recetores",
  s_devices: "2 · Dispositivos",
  s_walk: "3 · Aprendizagem",
  s_live: "4 · Ao vivo",
  no_bt: "O Home Assistant não tem Bluetooth configurado. Basta um Shelly (Gen2/3: pesquisa Bluetooth passiva), proxies Bluetooth ESPHome ou um adaptador USB.",
  scanners_intro: "Estes são todos os recetores Bluetooth que o Home Assistant conhece. Indique em que divisão está cada um.",
  not_placed: "– escolher divisão –",
  hint_room: "O sinal diz: {room} – usar",
  coverage: "Divisões sem recetor próprio – a aprendizagem torna-as reconhecíveis na mesma:",
  devices_intro: "Que dispositivos devem ser localizados? De preferência o que traz sempre consigo – o relógio no pulso é ideal.",
  known_keys: "iPhone e Apple Watch com chave (de “Private BLE Device” no Home Assistant):",
  add: "Adicionar",
  added: "✓ adicionado",
  remove: "Remover",
  person: "Pessoa",
  none: "nenhuma",
  irk_help: "Falta o iPhone ou o Apple Watch? Precisam da sua chave (IRK) como “Private BLE Device” no Home Assistant – o manual mostra as formas mais simples.",
  manual: "Manual",
  voice_hint: "Pergunte também por voz: “Onde está o meu iPhone?”, “Onde está o Torsten?”, “Quem está em casa?”, “Faz tocar o meu iPhone”.",
  look_hint: "Em 3D as pessoas aparecem como figura; no menu ⚙ da vista: Pessoas → figura, pino ou desligado.",
  ring: "Fazer tocar",
  ring_hint: "A app Home Assistant neste telemóvel – assim funciona “Faz tocar o meu iPhone”.",
  near_title: "Procurar dispositivo próximo",
  key_title: "Colar chave",
  key_name: "Nome (ex.: iPhone do Torsten)",
  key_value: "Chave (IRK, 32 caracteres)",
  key_bad: "Esta não é uma chave válida (32 caracteres hex ou Base64).",
  helper_title: "🔑 Assistente de chave",
  helper_build: "Configurar o assistente de chave",
  helper_found: "Assistente de chave encontrado: {name}",
  helper_watch: "Para um Apple Watch",
  helper_phone: "Para um iPhone",
  helper_watch_steps: "No relógio: Definições → Bluetooth → em «Dispositivos de saúde», toque em «NeonPlan Key» e emparelhe.",
  helper_phone_steps: "No telemóvel: Definições → Bluetooth → emparelhe «NeonPlan Key» (aparece como teclado).",
  helper_key: "Chave lida:",
  helper_wait: "A aguardar o emparelhamento …",
  helper_after: "Depois, remova o dispositivo «NeonPlan Key» das definições de Bluetooth.",
  helper_next: "🔄 Dispositivo seguinte",
  helper_next_hint: "Toque antes de cada novo dispositivo: o assistente recebe uma nova identidade Bluetooth e um dispositivo já emparelhado deixa de se ligar.",
  helper_name: "Nome deste dispositivo",
  helper_irk: "Chave (IRK) lida do dispositivo que acabou de emparelhar:",
  helper_belongs: "Pertence a: {name}",
  helper_add_as: "Adicionar como «{name}»",
  helper_added: "✓ «{name}» está agora na lista acima.",
  pbd_rename: "Dica: mude-lhe o nome no Home Assistant (Dispositivos e serviços → Private BLE Device) para o ver aqui.",
  carry: "Tenho comigo:",
  offline: "indisponível de momento",
  pbd_summary: "Vem do Bermuda? Usar as chaves do Home Assistant",
  worn: "usado",
  worn_hint: "Usado no corpo (relógio, pulseira): indica onde está a pessoa – um telemóvel pode estar pousado noutro sítio.",
  look_title: "Pessoas em 3D",
  look_figure: "Figura",
  look_pin: "Marcador",
  look_off: "Não",
  near_summary: "Adicionar um telemóvel Android ou um porta-chaves",
  android_label: "Telemóvel Android (app HA)",
  paste_summary: "Colar uma chave que já tem",
  helper_install: "Instalar num ESP32",
  helper_pitch: "Para iPhone e Apple Watch: um ESP32 de cerca de 5 € torna-se o assistente de chaves em três minutos – instalado a partir do navegador, sem Mac. Depois emparelhe aqui.",
  near_intro: "Segure o dispositivo mesmo junto a um recetor. Android: ative “BLE Transmitter” na app Home Assistant. Porta-chaves: prima uma vez.",
  near_empty: "Ainda nada forte por perto …",
  walk_intro: "Entre em cada divisão, toque nela e ande devagar durante 90 segundos – também pelos cantos. Leve todos os dispositivos.",
  learning: "A aprender {room} … faltam {left} s",
  stop: "Cancelar",
  samples: "{n} amostras",
  quality: "Verificar precisão",
  quality_result: "Precisão: {p}",
  relearn_all: "Aprender tudo de novo",
  live_intro: "É assim que o NeonPlan o vê agora. Ande um pouco e confirme se está certo.",
  enabled: "Localização ligada",
  admins_only: "Mostrar pessoas só a administradores",
  not_heard: "não detetado",
  next: "Seguinte",
  need_device: "Adicione primeiro um dispositivo.",
  app_title: "Android com a app Home Assistant",
  app_none: "Telemóvel Android? Na app Home Assistant: Definições → Companion app → Gerir sensores → ativa «BLE Transmitter». Depois aparece aqui sozinho.",
  app_off: "O transmissor está desligado – liga-o na app",
  app_power: "Potência de emissão demasiado baixa – define «High» na app",
  app_mode: "Define o modo de emissão como «Low latency» na app",
  helper_android: "Não emparelhes aqui telemóveis ou tablets Android: não enviam esta chave em segundo plano. Para Android usa o BLE Transmitter da app Home Assistant (abaixo).",
  unheard: "⚠ não detetado",
  unheard_hint: "Nenhum recetor ouve este dispositivo agora. Está ligado e a emitir? Android: o BLE Transmitter da app Home Assistant.",
  fly: "Voar para as divisões com «Onde está …?» e «Quem está em casa?»",
  fly_hint: "As vistas NeonPlan abertas voam para a divisão da resposta e, com «Quem está em casa?», para todas à vez. Um toque para. Não para pessoas enquanto só são mostradas a administradores.",
};
const RO: typeof DE = {
  title: "Configurează localizarea",
  lab: "Lab",
  close: "Închide",
  s_scanners: "1 · Receptoare",
  s_devices: "2 · Dispozitive",
  s_walk: "3 · Învățare",
  s_live: "4 · Live",
  no_bt: "Home Assistant nu are Bluetooth configurat. Ajung Shelly (Gen2/3: scanare Bluetooth pasivă), proxy-uri Bluetooth ESPHome sau un adaptor USB.",
  scanners_intro: "Acestea sunt toate receptoarele Bluetooth cunoscute de Home Assistant. Spune pentru fiecare în ce cameră se află.",
  not_placed: "– alege camera –",
  hint_room: "Semnalul spune: {room} – preia",
  coverage: "Camere fără receptor propriu – învățarea le face totuși recunoscibile:",
  devices_intro: "Ce dispozitive să fie localizate? Ideal ce ai mereu la tine – ceasul de la încheietură e perfect.",
  known_keys: "iPhone și Apple Watch cu cheie (din „Private BLE Device” în Home Assistant):",
  add: "Adaugă",
  added: "✓ adăugat",
  remove: "Elimină",
  person: "Persoană",
  none: "niciuna",
  irk_help: "Lipsește iPhone-ul sau Apple Watch-ul? Au nevoie de cheia lor (IRK) ca „Private BLE Device” în Home Assistant – ghidul arată cele mai simple căi.",
  manual: "Ghid",
  voice_hint: "Întreabă și vocal: „Unde e iPhone-ul meu?”, „Unde e Torsten?”, „Cine e acasă?”, „Sună-mi iPhone-ul”.",
  look_hint: "În 3D persoanele apar ca figurină; în meniul ⚙ al vizualizării: Persoane → figurină, pin sau oprit.",
  ring: "Sună",
  ring_hint: "Aplicația Home Assistant pe acest telefon – atunci merge „Sună-mi iPhone-ul”.",
  near_title: "Caută dispozitiv în apropiere",
  key_title: "Lipește cheia",
  key_name: "Nume (de ex. iPhone-ul lui Torsten)",
  key_value: "Cheie (IRK, 32 de caractere)",
  key_bad: "Aceasta nu este o cheie validă (32 de caractere hex sau Base64).",
  helper_title: "🔑 Asistent pentru cheie",
  helper_build: "Configurează asistentul pentru cheie",
  helper_found: "Asistent pentru cheie găsit: {name}",
  helper_watch: "Pentru Apple Watch",
  helper_phone: "Pentru iPhone",
  helper_watch_steps: "Pe ceas: Configurări → Bluetooth → la „Dispozitive de sănătate” atinge „NeonPlan Key” și asociază.",
  helper_phone_steps: "Pe telefon: Configurări → Bluetooth → asociază „NeonPlan Key” (apare ca tastatură).",
  helper_key: "Cheie citită:",
  helper_wait: "Se așteaptă asocierea …",
  helper_after: "Apoi elimină dispozitivul „NeonPlan Key” din configurările Bluetooth.",
  helper_next: "🔄 Dispozitivul următor",
  helper_next_hint: "Atinge înainte de fiecare dispozitiv nou: ajutorul primește o nouă identitate Bluetooth, iar un dispozitiv asociat înainte nu se mai conectează.",
  helper_name: "Numele acestui dispozitiv",
  helper_irk: "Cheia (IRK) citită de la dispozitivul care tocmai s-a asociat:",
  helper_belongs: "Aparține de: {name}",
  helper_add_as: "Adaugă ca „{name}”",
  helper_added: "✓ „{name}” este acum în lista de mai sus.",
  pbd_rename: "Sfat: redenumește-l în Home Assistant (Dispozitive și servicii → Private BLE Device) ca să-i vezi numele aici.",
  carry: "Am la mine acum:",
  offline: "indisponibil momentan",
  pbd_summary: "Treci de la Bermuda? Preia cheile din Home Assistant",
  worn: "purtat",
  worn_hint: "Purtat pe corp (ceas, brățară): arată unde este persoana – un telefon poate sta oriunde.",
  look_title: "Persoane în 3D",
  look_figure: "Siluetă",
  look_pin: "Reper",
  look_off: "Oprit",
  near_summary: "Adaugă un telefon Android sau un breloc",
  android_label: "Telefon Android (aplicația HA)",
  paste_summary: "Lipește o cheie pe care o ai deja",
  helper_install: "Instalează pe un ESP32",
  helper_pitch: "Pentru iPhone și Apple Watch: un ESP32 de circa 5 € devine în trei minute ajutorul pentru chei – instalat direct din browser, fără Mac. Apoi asociază-l aici.",
  near_intro: "Ține dispozitivul chiar lângă un receptor. Android: activează „BLE Transmitter” în aplicația Home Assistant. Brelocuri: apasă o dată.",
  near_empty: "Încă nimic puternic în apropiere …",
  walk_intro: "Intră în fiecare cameră, atinge-o și plimbă-te încet 90 de secunde – și prin colțuri. Ia toate dispozitivele cu tine.",
  learning: "Învăț {room} … încă {left} s",
  stop: "Anulează",
  samples: "{n} probe",
  quality: "Verifică precizia",
  quality_result: "Precizie: {p}",
  relearn_all: "Reînvață tot",
  live_intro: "Așa te vede NeonPlan acum. Plimbă-te și verifică dacă e corect.",
  enabled: "Localizare pornită",
  admins_only: "Arată persoanele doar adminilor",
  not_heard: "neauzit",
  next: "Înainte",
  need_device: "Adaugă mai întâi un dispozitiv.",
  app_title: "Android cu aplicația Home Assistant",
  app_none: "Telefon Android? În aplicația Home Assistant: Setări → Companion app → Gestionează senzorii → pornește „BLE Transmitter”. Apoi apare aici singur.",
  app_off: "Emițătorul este oprit – pornește-l în aplicație",
  app_power: "Puterea de emisie e prea mică – setează „High” în aplicație",
  app_mode: "Setează modul de emisie la „Low latency” în aplicație",
  helper_android: "Nu împerechea aici telefoane sau tablete Android: nu trimit această cheie în fundal. Pentru Android folosește BLE Transmitter din aplicația Home Assistant (mai jos).",
  unheard: "⚠ neauzit",
  unheard_hint: "Niciun receptor nu aude acum acest dispozitiv. Este pornit și emite? Android: BLE Transmitter din aplicația Home Assistant.",
  fly: "Zbor în camere la „Unde este …?” și „Cine e acasă?”",
  fly_hint: "Vederile NeonPlan deschise zboară în camera din răspuns, iar la „Cine e acasă?” pe rând în toate. O atingere oprește. Nu pentru persoane cât timp sunt arătate doar administratorilor.",
};
const SL: typeof DE = {
  title: "Nastavi lociranje",
  lab: "Lab",
  close: "Zapri",
  s_scanners: "1 · Sprejemniki",
  s_devices: "2 · Naprave",
  s_walk: "3 · Učenje",
  s_live: "4 · V živo",
  no_bt: "Home Assistant nima nastavljenega Bluetootha. Zadostujejo Shelly (Gen2/3: pasivno Bluetooth skeniranje), ESPHome Bluetooth proxyji ali USB-adapter.",
  scanners_intro: "To so vsi Bluetooth sprejemniki, ki jih Home Assistant pozna. Za vsakega povej, v kateri sobi stoji.",
  not_placed: "– izberi sobo –",
  hint_room: "Signal pravi: {room} – prevzemi",
  coverage: "Sobe brez lastnega sprejemnika – učenje jih vseeno naredi prepoznavne:",
  devices_intro: "Katere naprave naj se locirajo? Najbolje to, kar imaš vedno pri sebi – ura na zapestju je idealna.",
  known_keys: "iPhone in Apple Watch s ključem (iz „Private BLE Device“ v Home Assistant):",
  add: "Dodaj",
  added: "✓ dodano",
  remove: "Odstrani",
  person: "Oseba",
  none: "nobena",
  irk_help: "Manjka iPhone ali Apple Watch? Potrebujeta svoj ključ (IRK) kot „Private BLE Device“ v Home Assistant – navodila pokažejo najpreprostejše poti.",
  manual: "Navodila",
  voice_hint: "Vprašaj tudi z glasom: „Kje je moj iPhone?“, „Kje je Torsten?“, „Kdo je doma?“, „Pozvoni moj iPhone“.",
  look_hint: "V 3D so osebe prikazane kot figura; v meniju ⚙ pogleda: Osebe → figura, žebljiček ali izklopljeno.",
  ring: "Pozvoni",
  ring_hint: "Aplikacija Home Assistant na tem telefonu – potem deluje „Pozvoni moj iPhone“.",
  near_title: "Poišči napravo v bližini",
  key_title: "Prilepi ključ",
  key_name: "Ime (npr. Torstenov iPhone)",
  key_value: "Ključ (IRK, 32 znakov)",
  key_bad: "To ni veljaven ključ (32 šestnajstiških znakov ali Base64).",
  helper_title: "🔑 Pomočnik za ključ",
  helper_build: "Nastavi pomočnika za ključ",
  helper_found: "Najden pomočnik za ključ: {name}",
  helper_watch: "Za Apple Watch",
  helper_phone: "Za iPhone",
  helper_watch_steps: "Na uri: Nastavitve → Bluetooth → pod »Zdravstvene naprave« tapnite »NeonPlan Key« in seznanite.",
  helper_phone_steps: "Na telefonu: Nastavitve → Bluetooth → seznanite »NeonPlan Key« (prikaže se kot tipkovnica).",
  helper_key: "Prebrani ključ:",
  helper_wait: "Čakam na seznanitev …",
  helper_after: "Nato napravo »NeonPlan Key« znova odstranite iz nastavitev Bluetooth.",
  helper_next: "🔄 Naslednja naprava",
  helper_next_hint: "Tapnite pred vsako novo napravo: pomočnik dobi novo Bluetooth identiteto, zato se prej seznanjena naprava ne poveže več vmes.",
  helper_name: "Ime te naprave",
  helper_irk: "Ključ (IRK), prebran z naprave, ki se je pravkar seznanila:",
  helper_belongs: "Pripada: {name}",
  helper_add_as: "Dodaj kot »{name}«",
  helper_added: "✓ »{name}« je zdaj na seznamu zgoraj.",
  pbd_rename: "Nasvet: preimenujte ga v Home Assistantu (Naprave in storitve → Private BLE Device), nato bo tukaj ime.",
  carry: "Trenutno imam pri sebi:",
  offline: "trenutno nedosegljiv",
  pbd_summary: "Prehajate z Bermude? Prevzemite ključe iz Home Assistanta",
  worn: "nošeno",
  worn_hint: "Nošeno na telesu (ura, zapestnica): pove, kje je oseba – telefon lahko leži kjerkoli.",
  look_title: "Osebe v 3D",
  look_figure: "Figura",
  look_pin: "Žebljiček",
  look_off: "Izklop",
  near_summary: "Dodaj telefon Android ali obesek za ključe",
  android_label: "Telefon Android (aplikacija HA)",
  paste_summary: "Prilepi ključ, ki ga že imaš",
  helper_install: "Namesti na ESP32",
  helper_pitch: "Za iPhone in Apple Watch: ESP32 za približno 5 € v treh minutah postane pomočnik za ključe – nameščen kar iz brskalnika, brez Maca. Nato ga seznanite tukaj.",
  near_intro: "Drži napravo tik ob sprejemniku. Android: v aplikaciji Home Assistant vklopi „BLE Transmitter“. Obeski za ključe: pritisni enkrat.",
  near_empty: "V bližini še nič močnega …",
  walk_intro: "Pojdi v vsako sobo, tapni jo in 90 sekund počasi hodi naokrog – tudi v kote. Vzemi s sabo vse naprave.",
  learning: "Učim se {room} … še {left} s",
  stop: "Prekliči",
  samples: "Vzorcev: {n}",
  quality: "Preveri natančnost",
  quality_result: "Natančnost: {p}",
  relearn_all: "Znova nauči vse",
  live_intro: "Tako te NeonPlan vidi zdaj. Sprehodi se in preveri, ali drži.",
  enabled: "Lociranje vklopljeno",
  admins_only: "Osebe prikaži samo skrbnikom",
  not_heard: "ni slišano",
  next: "Naprej",
  need_device: "Najprej dodaj napravo.",
  app_title: "Android z aplikacijo Home Assistant",
  app_none: "Telefon Android? V aplikaciji Home Assistant: Nastavitve → Companion app → Upravljanje senzorjev → vklopi »BLE Transmitter«. Potem se tu pojavi sam.",
  app_off: "Oddajnik je izklopljen – vklopi ga v aplikaciji",
  app_power: "Oddajna moč je prenizka – v aplikaciji nastavi »High«",
  app_mode: "V aplikaciji nastavi način oddajanja na »Low latency«",
  helper_android: "Telefonov in tablic z Androidom tu ne seznanjaj: tega ključa v ozadju ne pošiljajo. Za Android uporabi BLE Transmitter aplikacije Home Assistant (spodaj).",
  unheard: "⚠ ni slišano",
  unheard_hint: "Trenutno te naprave ne sliši noben sprejemnik. Je vklopljena in oddaja? Android: BLE Transmitter aplikacije Home Assistant.",
  fly: "Pri »Kje je …?« in »Kdo je doma?« poleti v prostore",
  fly_hint: "Odprti pogledi NeonPlan poletijo v prostor iz odgovora, pri »Kdo je doma?« po vrsti v vse. Dotik ustavi. Ne za osebe, dokler so prikazane samo skrbnikom.",
};
const SV: typeof DE = {
  title: "Ställ in positionering",
  lab: "Labb",
  close: "Stäng",
  s_scanners: "1 · Mottagare",
  s_devices: "2 · Enheter",
  s_walk: "3 · Inlärning",
  s_live: "4 · Live",
  no_bt: "Home Assistant har ingen Bluetooth konfigurerad. Shelly (Gen2/3: passiv Bluetooth-skanning), ESPHome Bluetooth-proxyer eller en USB-adapter räcker.",
  scanners_intro: "Det här är alla Bluetooth-mottagare som Home Assistant känner till. Ange för varje vilket rum den står i.",
  not_placed: "– välj rum –",
  hint_room: "Signalen säger: {room} – använd",
  coverage: "Rum utan egen mottagare – inlärningen gör dem igenkännbara ändå:",
  devices_intro: "Vilka enheter ska positioneras? Helst det du alltid har med dig – klockan på handleden är perfekt.",
  known_keys: "iPhone och Apple Watch med nyckel (från ”Private BLE Device” i Home Assistant):",
  add: "Lägg till",
  added: "✓ tillagd",
  remove: "Ta bort",
  person: "Person",
  none: "ingen",
  irk_help: "Saknas iPhone eller Apple Watch? De behöver sin nyckel (IRK) som ”Private BLE Device” i Home Assistant – guiden visar de enklaste sätten.",
  manual: "Guide",
  voice_hint: "Fråga också med rösten: ”Var är min iPhone?”, ”Var är Torsten?”, ”Vem är hemma?”, ”Ring min iPhone”.",
  look_hint: "I 3D visas personer som figur; i vyns ⚙-meny: Personer → figur, nål eller av.",
  ring: "Ring",
  ring_hint: "Home Assistant-appen på den här telefonen – då fungerar ”Ring min iPhone”.",
  near_title: "Hitta enhet i närheten",
  key_title: "Klistra in nyckel",
  key_name: "Namn (t.ex. Torstens iPhone)",
  key_value: "Nyckel (IRK, 32 tecken)",
  key_bad: "Det är ingen giltig nyckel (32 hex-tecken eller Base64).",
  helper_title: "🔑 Nyckelhjälpare",
  helper_build: "Konfigurera nyckelhjälparen",
  helper_found: "Nyckelhjälpare hittad: {name}",
  helper_watch: "För Apple Watch",
  helper_phone: "För iPhone",
  helper_watch_steps: "På klockan: Inställningar → Bluetooth → under ”Hälsoenheter” trycker du på ”NeonPlan Key” och parkopplar.",
  helper_phone_steps: "På telefonen: Inställningar → Bluetooth → parkoppla ”NeonPlan Key” (visas som tangentbord).",
  helper_key: "Avläst nyckel:",
  helper_wait: "Väntar på parkoppling …",
  helper_after: "Ta sedan bort enheten ”NeonPlan Key” från Bluetooth-inställningarna igen.",
  helper_next: "🔄 Nästa enhet",
  helper_next_hint: "Tryck före varje ny enhet: hjälparen får en ny Bluetooth-identitet, så att en tidigare parkopplad enhet inte ansluter emellan.",
  helper_name: "Namn på den här enheten",
  helper_irk: "Nyckel (IRK) läst från enheten som just parkopplades:",
  helper_belongs: "Hör till: {name}",
  helper_add_as: "Lägg till som ”{name}”",
  helper_added: "✓ ”{name}” finns nu i listan ovan.",
  pbd_rename: "Tips: byt namn i Home Assistant (Enheter och tjänster → Private BLE Device) så syns namnet här.",
  carry: "Jag har med mig:",
  offline: "inte nåbar just nu",
  pbd_summary: "Byter du från Bermuda? Hämta nycklar från Home Assistant",
  worn: "buret",
  worn_hint: "Bärs på kroppen (klocka, band): visar var personen är – en telefon kan ligga var som helst.",
  look_title: "Personer i 3D",
  look_figure: "Figur",
  look_pin: "Nål",
  look_off: "Av",
  near_summary: "Lägg till Android-telefon eller nyckelbricka",
  android_label: "Android-telefon (HA-appen)",
  paste_summary: "Klistra in en nyckel du redan har",
  helper_install: "Installera på en ESP32",
  helper_pitch: "För iPhone och Apple Watch: En ESP32 för cirka 5 € blir nyckelhjälpare på tre minuter – installerad direkt från webbläsaren, utan Mac. Parkoppla den sedan här.",
  near_intro: "Håll enheten alldeles intill en mottagare. Android: slå på ”BLE Transmitter” i Home Assistant-appen. Nyckelbrickor: tryck en gång.",
  near_empty: "Inget starkt i närheten än …",
  walk_intro: "Gå in i varje rum, tryck på det och gå långsamt runt i 90 sekunder – även ut i hörnen. Ta med alla enheter.",
  learning: "Lär in {room} … {left} s kvar",
  stop: "Avbryt",
  samples: "{n} prover",
  quality: "Kontrollera träffsäkerhet",
  quality_result: "Träffsäkerhet: {p}",
  relearn_all: "Lär in allt på nytt",
  live_intro: "Så här ser NeonPlan dig just nu. Gå runt och kolla om det stämmer.",
  enabled: "Positionering på",
  admins_only: "Visa personer bara för administratörer",
  not_heard: "inte hörd",
  next: "Nästa",
  need_device: "Lägg till en enhet först.",
  app_title: "Android med Home Assistant-appen",
  app_none: "Android-telefon? I Home Assistant-appen: Inställningar → Companion app → Hantera sensorer → slå på ”BLE Transmitter”. Då dyker den upp här av sig själv.",
  app_off: "Sändaren är av – slå på den i appen",
  app_power: "Sändeffekten är för låg – ställ in ”High” i appen",
  app_mode: "Ställ in sändläget ”Low latency” i appen",
  helper_android: "Para inte Android-telefoner eller -surfplattor här: de skickar inte den här nyckeln i bakgrunden. Använd Home Assistant-appens BLE Transmitter för Android (nedan).",
  unheard: "⚠ inte hörd",
  unheard_hint: "Ingen mottagare hör enheten just nu. Är den på och sänder? Android: Home Assistant-appens BLE Transmitter.",
  fly: "Flyg in i rummen vid ”Var är …?” och ”Vem är hemma?”",
  fly_hint: "De öppna NeonPlan-vyerna flyger in i rummet i svaret, vid ”Vem är hemma?” in i alla rum i tur och ordning. Ett tryck stoppar. Inte för personer medan de bara visas för administratörer.",
};
const ZH: typeof DE = {
  title: "设置定位",
  lab: "实验",
  close: "关闭",
  s_scanners: "1 · 接收器",
  s_devices: "2 · 设备",
  s_walk: "3 · 学习",
  s_live: "4 · 实时",
  no_bt: "Home Assistant 尚未设置蓝牙。Shelly（Gen2/3：被动蓝牙扫描）、ESPHome 蓝牙代理或 USB 适配器即可。",
  scanners_intro: "这些是 Home Assistant 已知的所有蓝牙接收器。请为每个接收器选择它所在的房间。",
  not_placed: "– 选择房间 –",
  hint_room: "信号显示：{room} – 采用",
  coverage: "没有自己接收器的房间 – 通过学习同样可以识别：",
  devices_intro: "要定位哪些设备？最好是你随身携带的 – 戴在手腕上的手表最理想。",
  known_keys: "带密钥的 iPhone 和 Apple Watch（来自 Home Assistant 中的“Private BLE Device”）：",
  add: "添加",
  added: "✓ 已添加",
  remove: "移除",
  person: "人员",
  none: "无",
  irk_help: "缺少 iPhone 或 Apple Watch？它们需要在 Home Assistant 中以“Private BLE Device”形式提供密钥（IRK）– 说明中介绍了最简单的方法。",
  manual: "说明",
  voice_hint: "也可以语音提问：“我的 iPhone 在哪？”、“Torsten 在哪？”、“谁在家？”、“让我的 iPhone 响铃”。",
  look_hint: "在 3D 中人员显示为人物模型；在视图的 ⚙ 菜单中：人员 → 人物、图钉或关闭。",
  ring: "响铃",
  ring_hint: "此手机上的 Home Assistant 应用 – 这样“让我的 iPhone 响铃”就能用了。",
  near_title: "查找附近的设备",
  key_title: "粘贴密钥",
  key_name: "名称（例如 Torsten 的 iPhone）",
  key_value: "密钥（IRK，32 个字符）",
  key_bad: "这不是有效的密钥（32 个十六进制字符或 Base64）。",
  helper_title: "🔑 密钥助手",
  helper_build: "设置密钥助手",
  helper_found: "已找到密钥助手：{name}",
  helper_watch: "用于 Apple Watch",
  helper_phone: "用于 iPhone",
  helper_watch_steps: "在手表上：设置 → Bluetooth → 在“健康设备”下轻点“NeonPlan Key”并配对。",
  helper_phone_steps: "在手机上：设置 → Bluetooth → 配对“NeonPlan Key”（显示为键盘）。",
  helper_key: "读取到的密钥：",
  helper_wait: "正在等待配对 …",
  helper_after: "之后请在 Bluetooth 设置中移除设备“NeonPlan Key”。",
  helper_next: "🔄 下一个设备",
  helper_next_hint: "每添加一台新设备前点一下：助手会换一个新的蓝牙身份，之前配对过的设备就不会再抢先连接。",
  helper_name: "此设备的名称",
  helper_irk: "刚刚配对的设备的密钥（IRK）：",
  helper_belongs: "属于：{name}",
  helper_add_as: "添加为“{name}”",
  helper_added: "✓ “{name}”已在上方列表中。",
  pbd_rename: "提示：在 Home Assistant 中重命名（设备与服务 → Private BLE Device），这里就会显示名称。",
  carry: "我现在随身带着：",
  offline: "暂时无法连接",
  pbd_summary: "从 Bermuda 迁移？从 Home Assistant 导入密钥",
  worn: "随身佩戴",
  worn_hint: "随身佩戴（手表、手环）：决定人在哪里——手机可能放在别处。",
  look_title: "3D 中的人员",
  look_figure: "人形",
  look_pin: "图钉",
  look_off: "关",
  near_summary: "添加安卓手机或钥匙扣",
  android_label: "安卓手机（HA 应用）",
  paste_summary: "粘贴已有的密钥",
  helper_install: "安装到 ESP32",
  helper_pitch: "适用于 iPhone 和 Apple Watch：一块约 5 欧元的 ESP32 三分钟即可变成密钥助手——直接在浏览器中安装，无需 Mac。然后在这里配对。",
  near_intro: "把设备紧贴接收器。Android：在 Home Assistant 应用中打开“BLE Transmitter”。钥匙扣：按一下。",
  near_empty: "附近暂无强信号 …",
  walk_intro: "进入每个房间，点击它，然后慢慢走动 90 秒 – 包括角落。带上所有设备。",
  learning: "正在学习 {room} … 还剩 {left} 秒",
  stop: "取消",
  samples: "{n} 个样本",
  quality: "检查准确率",
  quality_result: "准确率：{p}",
  relearn_all: "全部重新学习",
  live_intro: "这是 NeonPlan 此刻看到的你。走动一下，看看是否准确。",
  enabled: "定位已开启",
  admins_only: "仅向管理员显示人员",
  not_heard: "未检测到",
  next: "下一步",
  need_device: "请先添加设备。",
  app_title: "使用 Home Assistant 应用的安卓设备",
  app_none: "安卓手机？在 Home Assistant 应用中：设置 → Companion app → 管理传感器 → 打开“BLE Transmitter”。之后它会自动出现在这里。",
  app_off: "发射器已关闭——请在应用中打开",
  app_power: "发射功率太低——请在应用中设为“High”",
  app_mode: "请在应用中把广播模式设为“Low latency”",
  helper_android: "不要在这里配对安卓手机或平板：它们不会在后台发送这个密钥。安卓请使用 Home Assistant 应用的 BLE Transmitter（见下方）。",
  unheard: "⚠ 未检测到",
  unheard_hint: "目前没有接收器能听到这个设备。它是否开着并在发送？安卓：Home Assistant 应用的 BLE Transmitter。",
  fly: "问“…在哪里？”和“谁在家？”时飞进房间",
  fly_hint: "打开的 NeonPlan 视图会飞进答案所在的房间；问“谁在家？”时依次飞过所有房间。轻点即可停止。若人员仅对管理员显示，则不会飞向人员。",
};

/** An IRK as 32 hex characters: pasted as hex (with or without separators) or as Base64 (as the Mac keychain shows it). */
export function irkHex(raw: string): string | null {
  const text = raw.trim().replace(/^irk:/i, "");
  const hex = text.replace(/[\s:-]/g, "");
  if (/^[0-9a-f]{32}$/i.test(hex)) return hex.toLowerCase();
  try {
    const bytes = atob(text.replace(/\s/g, ""));
    if (bytes.length === 16) return [...bytes].map((c) => c.charCodeAt(0).toString(16).padStart(2, "0")).join("");
  } catch {
    // not Base64
  }
  return null;
}

/** An Android phone's BLE Transmitter as the Home Assistant app reports it (a sensor of the phone's device). */
export interface AppTransmitter {
  entity: string;
  name: string;
  /** uuid + major + minor as hex, the way the backend keys iBeacons */
  key: string;
  state: string;
  power: string;
  mode: string;
  person: string | null;
}

// the app's sensor attribute "id": "<uuid>_<major>_<minor>"
const BEACON_ID = /^([0-9a-f]{8})-?([0-9a-f]{4})-?([0-9a-f]{4})-?([0-9a-f]{4})-?([0-9a-f]{12})_(\d{1,5})_(\d{1,5})$/i;

/** The BLE Transmitters of the Home Assistant Android app, found by their sensor: no need to hold the phone near a receiver. */
export function appTransmitters(hass: HomeAssistant): AppTransmitter[] {
  const out: AppTransmitter[] = [];
  const hex4 = (n: number) => n.toString(16).padStart(4, "0");
  for (const [entity, st] of Object.entries(hass.states)) {
    if (!entity.startsWith("sensor.")) continue;
    const a = st.attributes ?? {};
    if (!("Transmitting power" in a)) continue;
    const m = BEACON_ID.exec(String(a.id ?? ""));
    if (!m) continue;
    const major = Number(m[6]);
    const minor = Number(m[7]);
    if (major > 0xffff || minor > 0xffff) continue;
    const deviceId = hass.entities?.[entity]?.device_id ?? null;
    const device = deviceId ? hass.devices?.[deviceId] : undefined;
    const fallback = String(a.friendly_name ?? entity).replace(/\s*BLE[\s_-]*Transmitter\s*$/i, "");
    // the person whose device tracker sits on the same phone
    const person =
      (deviceId &&
        Object.entries(hass.states).find(
          ([id, p]) =>
            id.startsWith("person.") &&
            ((p.attributes?.device_trackers as string[] | undefined) ?? []).some((tr) => hass.entities?.[tr]?.device_id === deviceId),
        )?.[0]) ||
      null;
    out.push({
      entity,
      name: device?.name_by_user || device?.name || fallback,
      key: (m.slice(1, 6).join("") + hex4(major) + hex4(minor)).toLowerCase(),
      state: String(st.state),
      power: String(a["Transmitting power"] ?? ""),
      mode: String(a["Advertise mode"] ?? ""),
      person,
    });
  }
  return out.sort((x, y) => x.name.localeCompare(y.name));
}

const TEXTS: Record<string, typeof DE> = { de: DE, en: EN, cs: CS, da: DA, es: ES, fi: FI, fr: FR, hu: HU, it: IT, nb: NB, no: NB, nl: NL, nn: NN, pl: PL, pt: PT, ro: RO, sl: SL, sv: SV, zh: ZH };

export class LocateSetup extends LitElement {
  static properties = {
    hass: { attribute: false },
    building: { attribute: false },
    _step: { state: true },
    _cfg: { state: true },
    _near: { state: true },
    _live: { state: true },
    _quality: { state: true },
    _error: { state: true },
  };

  declare hass: HomeAssistant;
  declare building: Building;
  declare _step: Step;
  declare _cfg: Config | null;
  declare _near: Nearby[];
  declare _live: Live | null;
  declare _quality: Record<string, { overall: number | null; rooms: Record<string, number> }> | null;
  declare _error: string;

  constructor() {
    super();
    // reactive fields are declared, not initialised as class fields (that would hide Lit's accessors)
    this._step = "scanners";
    this._cfg = null;
    this._near = [];
    this._live = null;
    this._quality = null;
    this._error = "";
  }
  private timer = 0;
  /** Where the current Home Assistant state comes from (the panel's live hass): new devices and states show at once. */
  hassSource: (() => HomeAssistant | undefined) | null = null;
  /** Writes how people show in 3D into the plan (the editor's setter; null when opened elsewhere). */
  setLook: ((look: "figure" | "pin" | "off") => void) | null = null;
  private unsub: (() => void) | null = null;

  private get t(): typeof DE {
    return TEXTS[(this.hass?.language ?? "en").split("-")[0].toLowerCase()] ?? EN;
  }

  /** The voice sentences exist in German and English only. */
  private get voiceLanguage(): boolean {
    return /^(de|en)/.test(this.hass?.language ?? "en");
  }

  private tr(text: string, vars: Record<string, string | number>): string {
    return text.replace(/\{(\w+)\}/g, (_m, k: string) => String(vars[k] ?? ""));
  }

  private get rooms(): LocateRoom[] {
    // an outdoor area without a name of its own goes by its Home Assistant area's name
    return locateRooms(this.building).map((r) => (r.name || !r.area_id ? r : { ...r, name: this.hass.areas?.[r.area_id]?.name ?? r.area_id }));
  }

  connectedCallback(): void {
    super.connectedCallback();
    this.load().catch((e: unknown) => (this._error = `load: ${(e as Error)?.stack ?? String(e)}`));
    this.timer = window.setInterval(() => void this.tick(), 1000);
    void this.hass.connection
      .subscribeMessage<Live>((live) => (this._live = live), { type: "neonplan3d/locate/subscribe" })
      .then((u) => (this.unsub = u))
      .catch(() => undefined);
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    window.clearInterval(this.timer);
    this.unsub?.();
  }

  private async call<T>(msg: Record<string, unknown>): Promise<T | null> {
    try {
      this._error = "";
      return await this.hass.callWS<T>(msg);
    } catch (e) {
      this._error = (e as { message?: string }).message ?? String(e);
      return null;
    }
  }

  private async load(): Promise<void> {
    const cfg = await this.call<Config>({ type: "neonplan3d/locate/config" });
    if (!cfg) return;
    // scanners not placed yet: the room of their device in the plan (a placed switch of a Shelly), else its area
    const rooms = { ...cfg.scanner_rooms };
    let guessed = false;
    for (const s of cfg.scanners) {
      if (rooms[s.source]) continue;
      const guess = this.guessRoom(s) ?? cfg.scanner_hints?.[s.source] ?? null;
      if (guess) {
        rooms[s.source] = guess;
        guessed = true;
      }
    }
    this._cfg = { ...cfg, scanner_rooms: rooms };
    if (guessed) await this.save({ scanner_rooms: rooms });
  }

  /**
   * The room a scanner most likely stands in: a pin or a piece of furniture of its device in the plan (a Shelly's
   * switch, the washing machine with the plug's power sensor), its Home Assistant area, or a room named in its name
   * ("PC Büro Steckdose", "bluetooth-proxy-kueche"). After the calibration walk the signals tell as well (backend).
   */
  private guessRoom(s: Scanner): string | null {
    const ofDevice = (entity: unknown) => typeof entity === "string" && !!s.device_id && this.hass.entities?.[entity]?.device_id === s.device_id;
    if (s.device_id) {
      for (const f of this.building.floors) {
        for (const p of f.placements) {
          const room = ofDevice(p.entity_id) ? roomAt(this.building, f.id, p.x, p.z) : null;
          if (room) return room;
        }
        for (const m of f.furniture) {
          if (!Object.values(m).some(ofDevice)) continue;
          const room = roomAt(this.building, f.id, m.x, m.z);
          if (room) return room;
        }
      }
    }
    // the Home Assistant area of the scanner's device (found by name when the backend did not find it by address)
    const deviceId =
      s.device_id ?? Object.values(this.hass.devices ?? {}).find((d) => [d.name_by_user, d.name].some((n) => n && n.toLowerCase() === s.name.toLowerCase()))?.id ?? null;
    const entityAreas = deviceId ? Object.values(this.hass.entities ?? {}).filter((e) => e.device_id === deviceId && e.area_id).map((e) => e.area_id!) : [];
    const area = s.area_id ?? deviceAreaId(this.hass, deviceId) ?? entityAreas[0] ?? null;
    if (area) {
      const room = this.rooms.find((r) => r.area_id === area);
      if (room) return room.id;
    }
    const plain = (text: string) =>
      text
        .toLowerCase()
        .replace(/ä/g, "ae")
        .replace(/ö/g, "oe")
        .replace(/ü/g, "ue")
        .replace(/ß/g, "ss")
        .replace(/[^a-z0-9]+/g, " ");
    const name = ` ${plain(s.name)} `;
    const hits = this.rooms.filter((r) => plain(r.name).trim().length >= 3 && name.includes(plain(r.name).trim()));
    // the longest name wins ("badezimmer" over "bad"); a name on two floors is no answer
    hits.sort((a, b) => plain(b.name).length - plain(a.name).length);
    if (hits.length && hits.filter((r) => plain(r.name) === plain(hits[0].name)).length === 1) return hits[0].id;
    return null;
  }

  /** Every save sends the plan's rooms and doors along, so the service always knows the current plan. */
  private async save(changes: Record<string, unknown>): Promise<void> {
    let doors: [string, string][] = [];
    try {
      doors = doorPairs(this.building);
    } catch (e) {
      console.warn("NeonPlan locate: no door graph", e);
    }
    const cfg = await this.call<Config>({
      type: "neonplan3d/locate/configure",
      rooms: this.rooms,
      doors,
      ...changes,
    });
    if (cfg) this._cfg = { ...cfg, scanner_rooms: { ...cfg.scanner_rooms } };
  }

  private async tick(): Promise<void> {
    const live = this.hassSource?.();
    if (live && live !== this.hass) this.hass = live;
    if (this._step === "devices" && this.nearOpen) {
      const res = await this.call<{ devices: Nearby[] }>({ type: "neonplan3d/locate/nearby" });
      if (res) this._near = res.devices;
    }
    if (this._step === "walk") {
      // the countdown and the sample counts come from here (the live state only changes when a room changes)
      const res = await this.call<{ calibration: Live["calibration"]; samples: Config["samples"] }>({ type: "neonplan3d/locate/calibrate", action: "status" });
      if (res && this._cfg) {
        this._cfg = { ...this._cfg, samples: res.samples };
        this._live = { ...(this._live ?? { running: true, devices: [] }), calibration: res.calibration };
      }
    }
  }

  protected render() {
    const t = this.t;
    const cfg = this._cfg;
    const steps: [Step, string][] = [
      ["scanners", t.s_scanners],
      ["devices", t.s_devices],
      ["walk", t.s_walk],
      ["live", t.s_live],
    ];
    return html`<div class="box" role="dialog" aria-label=${t.title}>
      <header>
        <b>📡 ${t.title}</b>
        <button class="x" @click=${() => this.remove()} aria-label=${t.close}>✕</button>
      </header>
      <nav>${steps.map(([s, label]) => html`<button class=${this._step === s ? "on" : ""} @click=${() => (this._step = s)}>${label}</button>`)}</nav>
      ${this._error ? html`<pre class="err">${this._error}</pre>` : nothing}
      ${!cfg ? html`<p>…</p>` : !cfg.bluetooth ? html`<p>${t.no_bt}</p>` : this.renderStep(cfg)}
    </div>`;
  }

  private manualLink(): string {
    const de = this.hass?.language?.startsWith("de");
    return de ? "https://mastershort.de/neonplan3d/anleitung/3d-ansicht/#511-ortung-neu" : "https://mastershort.de/en/neonplan3d/manual/3d-view/#511-locating-new";
  }

  private renderStep(cfg: Config) {
    switch (this._step) {
      case "scanners":
        return this.renderScanners(cfg);
      case "devices":
        return this.renderDevices(cfg);
      case "walk":
        return this.renderWalk(cfg);
      default:
        return this.renderLive(cfg);
    }
  }

  private roomSelect(value: string | null, onPick: (room: string | null) => void) {
    const floors = [...new Set(this.rooms.map((r) => r.floor))];
    return html`<select @change=${(e: Event) => onPick((e.target as HTMLSelectElement).value || null)}>
      <option value="" ?selected=${!value}>${this.t.not_placed}</option>
      ${floors.map((f) => html`<optgroup label=${f}>${this.rooms.filter((r) => r.floor === f).map((r) => html`<option value=${r.id} ?selected=${r.id === value}>${r.name}</option>`)}</optgroup>`)}
    </select>`;
  }

  private renderScanners(cfg: Config) {
    const t = this.t;
    const covered = new Set(Object.values(cfg.scanner_rooms));
    const bare = this.rooms.filter((r) => !covered.has(r.id));
    return html`<p>${t.scanners_intro}</p>
      <ul class="list">
        ${cfg.scanners.map(
          (s) => html`<li>
            <span><b>${s.name}</b><small>${s.offline ? `⚠ ${t.offline}` : s.kind === "shelly" ? "Shelly" : s.kind === "esphome" ? "ESPHome" : "Bluetooth"}</small></span>
            ${this.roomSelect(cfg.scanner_rooms[s.source] ?? null, (room) => {
              const next = { ...cfg.scanner_rooms };
              if (room) next[s.source] = room;
              else delete next[s.source];
              void this.save({ scanner_rooms: next });
            })}
            ${cfg.scanner_hints?.[s.source] && cfg.scanner_hints[s.source] !== cfg.scanner_rooms[s.source]
              ? html`<button class="ghost" @click=${() => void this.save({ scanner_rooms: { ...cfg.scanner_rooms, [s.source]: cfg.scanner_hints[s.source] } })}>
                  ${this.tr(t.hint_room, { room: this.rooms.find((r) => r.id === cfg.scanner_hints[s.source])?.name ?? "" })}
                </button>`
              : nothing}
          </li>`,
        )}
      </ul>
      ${bare.length ? html`<p class="hint">${t.coverage} ${bare.map((r) => r.name).join(", ")}</p>` : nothing}
      <p class="end"><button class="primary" @click=${() => (this._step = "devices")}>${t.next} →</button></p>`;
  }

  private personSelect(value: string | null, onPick: (p: string | null) => void) {
    const persons = Object.keys(this.hass.states).filter((id) => id.startsWith("person."));
    return html`<select @change=${(e: Event) => onPick((e.target as HTMLSelectElement).value || null)}>
      <option value="" ?selected=${!value}>${this.t.person}: ${this.t.none}</option>
      ${persons.map((p) => html`<option value=${p} ?selected=${p === value}>${(this.hass.states[p].attributes.friendly_name as string) ?? p}</option>`)}
    </select>`;
  }

  /**
   * The NeonPlan key helper (an ESP32 with irk-capture, see site/keys): found by its profile select ("Heart Sensor" /
   * "Keyboard"); its IRK sensor shows the key of the device that paired last.
   */
  private keyHelpers(): { name: string; select: string; option: string; irk: string | null; ours: boolean; refresh: string | null }[] {
    const out = [];
    for (const [id, st] of Object.entries(this.hass.states)) {
      const options = st.attributes.options;
      if (!id.startsWith("select.") || !Array.isArray(options) || !options.includes("Heart Sensor") || !options.includes("Keyboard")) continue;
      const device = this.hass.entities?.[id]?.device_id;
      const irkEntity = Object.values(this.hass.entities ?? {}).find((e) => e.device_id === device && /_irk$/.test(e.entity_id))?.entity_id;
      const raw = irkEntity ? this.hass.states[irkEntity]?.state : undefined;
      const entry = device ? (this.hass.devices?.[device] as { name?: string | null; name_by_user?: string | null; model?: string | null } | undefined) : undefined;
      const name = entry?.name_by_user || entry?.name || String(st.attributes.friendly_name ?? id);
      const refresh = Object.values(this.hass.entities ?? {}).find((e) => e.device_id === device && /_refresh_ble_identity$/.test(e.entity_id))?.entity_id ?? null;
      out.push({ name, select: id, option: st.state, irk: raw ? irkHex(raw) : null, ours: entry?.model === "neonplan_key" || /neonplan[ _]key/i.test(id), refresh });
    }
    // NeonPlan's own helper first
    return out.sort((x, y) => Number(y.ours) - Number(x.ours));
  }

  /** Devices left out of the next calibration (not carried right now). */
  private notCarried = new Set<string>();
  /** The "Android phone or key tag" part is open: only then are nearby devices polled. */
  private nearOpen = false;

  /** The chosen key helper (several ESP32s with irk-capture can be in Home Assistant). */
  private helperId: string | null = null;
  /** Name and person for the next key the helper reads (typed before pairing). */
  private helperName = "";
  private helperPerson: string | null = null;
  private helperAdded: string | null = null;

  private renderKeyHelper(cfg: Config) {
    const t = this.t;
    const helpers = this.keyHelpers();
    const helper = helpers.find((h) => h.select === this.helperId) ?? helpers[0];
    const head = html`<div class="helper-head">
        <h4>${t.helper_title}</h4>
        <a class="install" href="https://neonplan3d.mastershort.de/keys/" target="_blank" rel="noopener">⚡ ${t.helper_install} ↗</a>
      </div>
      <p class="hint">${t.helper_pitch}</p>
      <p class="hint">${t.helper_android}</p>`;
    if (!helper) return head;
    const watch = helper.option === "Heart Sensor";
    const pick = (option: string) => void this.hass.callService("select", "select_option", { entity_id: helper.select, option });
    // the key in either byte order: whose is it? (a device of the list, or a Private BLE Device of Home Assistant)
    const flip = (hex: string) => hex.match(/../g)!.reverse().join("");
    const same = (k: string | null | undefined) => !!helper.irk && !!k && (k.toLowerCase() === helper.irk || k.toLowerCase() === flip(helper.irk));
    const owner = cfg.devices.find((d) => same(d.key))?.name ?? null;
    const privateOwner = cfg.private_ble.find((pb) => same(pb.key))?.title ?? null;
    const name = this.helperName || (watch ? "Apple Watch" : "iPhone");
    const short = (hex: string) => `${hex.slice(0, 4)}…${hex.slice(-4)}`;
    return html`${head}
      ${helpers.length > 1
        ? html`<p class="hint">
            <select
              @change=${(e: Event) => {
                this.helperId = (e.target as HTMLSelectElement).value;
                this.requestUpdate();
              }}
            >
              ${helpers.map((h) => html`<option value=${h.select} ?selected=${h.select === helper.select}>${h.name}</option>`)}
            </select>
          </p>`
        : html`<p class="hint">${this.tr(t.helper_found, { name: helper.name })}</p>`}
      <div class="row">
        <button class=${watch ? "on" : ""} @click=${() => pick("Heart Sensor")}>⌚ ${t.helper_watch}</button>
        <button class=${!watch ? "on" : ""} @click=${() => pick("Keyboard")}>📱 ${t.helper_phone}</button>
      </div>
      <div class="row">
        <input
          placeholder=${t.helper_name}
          title=${t.helper_name}
          .value=${this.helperName}
          @input=${(e: Event) => (this.helperName = (e.target as HTMLInputElement).value)}
        />
        ${this.personSelect(this.helperPerson, (pp) => {
          this.helperPerson = pp;
          this.requestUpdate();
        })}
      </div>
      <p class="hint">${watch ? t.helper_watch_steps : t.helper_phone_steps}</p>
      <ul class="list">
        <li>
          <span>
            <b>${t.helper_irk}</b>
            <small>${helper.irk ? short(helper.irk) : t.helper_wait}</small>
            ${owner || privateOwner ? html`<small>${this.tr(t.helper_belongs, { name: owner ?? privateOwner ?? "" })}</small>` : nothing}
          </span>
          ${helper.irk && !owner
            ? html`<button
                class="primary"
                @click=${() => {
                  this.addDevice(cfg, { name, kind: "irk", key: helper.irk! }, this.helperPerson);
                  this.helperAdded = name;
                  this.helperName = "";
                }}
              >
                ${this.tr(t.helper_add_as, { name })}
              </button>`
            : nothing}
        </li>
      </ul>
      ${this.helperAdded ? html`<p class="hint">${this.tr(t.helper_added, { name: this.helperAdded })}</p>` : nothing}
      <p class="hint">${t.helper_after}</p>
      ${helper.refresh
        ? html`<p class="end">
            <small>${t.helper_next_hint}</small>
            <button @click=${() => void this.hass.callService("button", "press", { entity_id: helper.refresh })}>${t.helper_next}</button>
          </p>`
        : nothing}`;
  }

  /** The Home Assistant app on a phone, to ring it ("Lass mein iPhone klingeln"). */
  private notifySelect(value: string | null, onPick: (n: string | null) => void) {
    const all = (this.hass as unknown as { services?: Record<string, Record<string, unknown>> }).services;
    const services = Object.keys(all?.notify ?? {}).filter((s) => s.startsWith("mobile_app_"));
    if (!services.length) return nothing;
    return html`<select title=${this.t.ring_hint} @change=${(e: Event) => onPick((e.target as HTMLSelectElement).value || null)}>
      <option value="" ?selected=${!value}>🔔 ${this.t.ring}: ${this.t.none}</option>
      ${services.map((s) => html`<option value=${`notify.${s}`} ?selected=${value === `notify.${s}`}>🔔 ${s.replace(/^mobile_app_/, "").replace(/_/g, " ")}</option>`)}
    </select>`;
  }

  /** "not heard" next to a device while locating runs and no receiver hears it (an Android phone added by key, a
   * switched-off transmitter): learning with it would collect nothing. */
  private unheardBadge(id: string) {
    const live = this._live;
    if (!live?.running) return nothing;
    const d = live.devices.find((x) => x.id === id);
    if (!d || d.room || (d.last_seen && Date.now() / 1000 - d.last_seen < 120)) return nothing;
    return html`<small class="warn" title=${this.t.unheard_hint}>${this.t.unheard}</small>`;
  }

  private addDevice(cfg: Config, device: Omit<Device, "id" | "person" | "icon">, person: string | null = null): void {
    const id = `${device.kind}_${device.key.replace(/[^a-z0-9]/gi, "").slice(-10).toLowerCase()}`;
    if (cfg.devices.some((d) => d.id === id)) return;
    void this.save({ devices: [...cfg.devices, { ...device, id, person, icon: null }] });
  }

  private renderDevices(cfg: Config) {
    const t = this.t;
    const has = (key: string) => cfg.devices.some((d) => d.key.toLowerCase() === key.toLowerCase());
    const setDevice = (id: string, patch: Partial<Device>) => void this.save({ devices: cfg.devices.map((d) => (d.id === id ? { ...d, ...patch } : d)) });
    const apps = appTransmitters(this.hass);
    return html`<p>${t.devices_intro}</p>
      ${cfg.devices.length
        ? html`<ul class="list">
            ${cfg.devices.map(
              (d) => html`<li>
                <input .value=${d.name} @change=${(e: Event) => setDevice(d.id, { name: (e.target as HTMLInputElement).value })} />
                ${this.personSelect(d.person, (p) => setDevice(d.id, { person: p }))}
                ${this.notifySelect(d.notify ?? null, (n) => setDevice(d.id, { notify: n }))}
                <label class="row" title=${t.worn_hint}
                  ><input type="checkbox" .checked=${!!d.wearable} @change=${(e: Event) => setDevice(d.id, { wearable: (e.target as HTMLInputElement).checked })} />⌚
                  ${t.worn}</label
                >
                ${this.unheardBadge(d.id)}
                <button @click=${() => void this.save({ devices: cfg.devices.filter((x) => x.id !== d.id) })}>${t.remove}</button>
              </li>`,
            )}
          </ul>`
        : nothing}
      ${apps.length
        ? html`<h4>📱 ${t.app_title}</h4>
            <ul class="list">
              ${apps.map((a) => {
                const warnings = [
                  a.state !== "Transmitting" ? t.app_off : null,
                  a.power === "ultraLow" || a.power === "low" ? t.app_power : null,
                  a.mode === "lowPower" ? t.app_mode : null,
                ].filter((w): w is string => !!w);
                return html`<li>
                  <span
                    ><b>${a.name}</b>${warnings.map((w) => html`<small class="warn">⚠ ${w}</small>`)}</span
                  >
                  ${has(a.key)
                    ? html`<small>${t.added}</small>`
                    : html`<button @click=${() => this.addDevice(cfg, { name: a.name, kind: "ibeacon", key: a.key }, a.person)}>${t.add}</button>`}
                </li>`;
              })}
            </ul>`
        : nothing}
      ${this.renderKeyHelper(cfg)}
      <details
        class="pbd"
        @toggle=${(e: Event) => {
          this.nearOpen = (e.target as HTMLDetailsElement).open;
        }}
      >
        <summary>📱 ${t.near_summary}</summary>
        <p class="hint">${t.near_intro}</p>
        ${apps.length ? nothing : html`<p class="hint">${t.app_none}</p>`}
        <ul class="list">
          ${(() => {
            // beacons first (the Android app sends weakly by default, so they count from -90 dBm), then what is held
            // close to a scanner; one row per beacon although its address rotates
            const seen = new Set<string>();
            const close = this._near
              .filter((n) => (n.ibeacon ? n.rssi >= -90 : !n.random && n.rssi >= -68))
              .sort((x, y) => Number(!!y.ibeacon) - Number(!!x.ibeacon) || y.rssi - x.rssi)
              .filter((n) => !n.ibeacon || (!seen.has(n.ibeacon) && !!seen.add(n.ibeacon)))
              .slice(0, 5);
            return close.length
              ? close.map(
                  (n) => html`<li>
                    <span><b>${n.ibeacon ? `📱 ${t.android_label}` : (n.name ?? n.address)}</b><small>${n.rssi} dBm</small></span>
                    ${has(n.ibeacon ?? n.address)
                      ? html`<small>${t.added}</small>`
                      : html`<button @click=${() => this.addDevice(cfg, n.ibeacon ? { name: t.android_label, kind: "ibeacon", key: n.ibeacon } : { name: n.name ?? n.address, kind: "mac", key: n.address })}>${t.add}</button>`}
                  </li>`,
                )
              : html`<li><small>${t.near_empty}</small></li>`;
          })()}
        </ul>
      </details>
      <details class="pbd">
        <summary>🔑 ${t.paste_summary}</summary>
      <div class="row">
        <input id="keyname" placeholder=${t.key_name} />
        <input id="keyvalue" placeholder=${t.key_value} spellcheck="false" autocomplete="off" />
        <button
          @click=${() => {
            const name = (this.renderRoot.querySelector("#keyname") as HTMLInputElement).value.trim();
            const key = irkHex((this.renderRoot.querySelector("#keyvalue") as HTMLInputElement).value);
            if (!key) {
              this._error = t.key_bad;
              return;
            }
            this._error = "";
            this.addDevice(cfg, { name: name || "iPhone", kind: "irk", key });
          }}
        >
          ${t.add}
        </button>
      </div>
      </details>
      <p class="hint">${t.irk_help} <a href=${this.manualLink()} target="_blank" rel="noopener">${t.manual} ↗</a></p>
      <p class="end"><button class="primary" ?disabled=${!cfg.devices.length} @click=${() => (this._step = "walk")}>${t.next} →</button></p>`;
  }

  private renderWalk(cfg: Config) {
    const t = this.t;
    const cal = this._live?.calibration ?? null;
    if (!cfg.devices.length) return html`<p>${t.need_device}</p>`;
    // a room counts as learned when any device walked it (the others use those samples too)
    const count = (room: string) => Math.max(0, ...cfg.devices.map((d) => cfg.samples[d.id]?.[room] ?? 0));
    const floors = [...new Set(this.rooms.map((r) => r.floor))];
    const q = this._quality;
    return html`<p>${t.walk_intro}</p>
      ${cfg.devices.length > 1
        ? html`<div class="row">
            <b>${t.carry}</b>
            ${cfg.devices.map(
              (d) => html`<label class="row"
                ><input
                  type="checkbox"
                  .checked=${!this.notCarried.has(d.id)}
                  @change=${(e: Event) => {
                    if ((e.target as HTMLInputElement).checked) this.notCarried.delete(d.id);
                    else this.notCarried.add(d.id);
                    this.requestUpdate();
                  }}
                />
                ${d.name} ${this.unheardBadge(d.id)}</label
              >`,
            )}
          </div>`
        : nothing}
      ${cal
        ? html`<div class="learning">
            ${this.tr(t.learning, { room: this.rooms.find((r) => r.id === cal.room)?.name ?? "", left: cal.left })}
            <div class="bar"><i style="width:${Math.round(((90 - cal.left) / 90) * 100)}%"></i></div>
            <button @click=${() => void this.call({ type: "neonplan3d/locate/calibrate", action: "stop" })}>${t.stop}</button>
          </div>`
        : nothing}
      ${floors.map(
        (f) => html`<h4>${f}</h4>
          <div class="rooms">
            ${this.rooms
              .filter((r) => r.floor === f)
              .map((r) => {
                const n = count(r.id);
                const values = q && n > 0 ? cfg.devices.map((d) => q[d.id]?.rooms[r.id]).filter((v): v is number => typeof v === "number") : [];
                const acc = values.length ? Math.min(...values) : null;
                return html`<button
                  class=${cal?.room === r.id ? "on" : n >= 30 ? "done" : ""}
                  ?disabled=${!!cal}
                  @click=${async () => {
                    const devices = cfg.devices.filter((d) => !this.notCarried.has(d.id)).map((d) => d.id);
                    const res = await this.call<{ calibration: Live["calibration"] }>({ type: "neonplan3d/locate/calibrate", action: "start", room: r.id, seconds: 90, devices });
                    if (res) this._live = { ...(this._live ?? { running: true, devices: [] }), calibration: res.calibration };
                    // learning the first room switches locating on (one switch less to find)
                    if (res && !cfg.enabled) await this.save({ enabled: true });
                  }}
                >
                  ${n >= 30 ? "✓ " : ""}${r.name}<small>${this.tr(t.samples, { n })}${acc !== null ? ` · ${Math.round(acc * 100)} %` : ""}</small>
                </button>`;
              })}
          </div>`,
      )}
      <p class="end">
        <button @click=${async () => (this._quality = await this.call({ type: "neonplan3d/locate/quality" }))}>${t.quality}</button>
        ${q
          ? html`<b>${this.tr(t.quality_result, {
              p: cfg.devices.map((d) => `${d.name} ${q[d.id]?.overall != null ? Math.round(q[d.id].overall! * 100) : "–"} %`).join(" · "),
            })}</b>`
          : nothing}
        <button class="primary" @click=${() => (this._step = "live")}>${t.next} →</button>
      </p>
      <p class="end"><button class="ghost" @click=${() => void this.call({ type: "neonplan3d/locate/calibrate", action: "clear" }).then(() => this.load())}>${t.relearn_all}</button></p>`;
  }

  private renderLive(cfg: Config) {
    const t = this.t;
    const live = this._live;
    const name = (id: string | null | undefined) => this.rooms.find((r) => r.id === id)?.name;
    return html`<p>${t.live_intro}</p>
      ${this.voiceLanguage ? html`<p class="hint">${t.voice_hint}</p>` : nothing}
      <label class="row"><input type="checkbox" .checked=${cfg.enabled} @change=${(e: Event) => void this.save({ enabled: (e.target as HTMLInputElement).checked })} /> ${t.enabled}</label>
      <label class="row"><input type="checkbox" .checked=${cfg.admins_only} @change=${(e: Event) => void this.save({ admins_only: (e.target as HTMLInputElement).checked })} /> ${t.admins_only}</label>
      <label class="row" title=${t.fly_hint}
        ><input type="checkbox" .checked=${cfg.fly !== false} @change=${(e: Event) => void this.save({ fly: (e.target as HTMLInputElement).checked })} /> ${t.fly}</label
      >
      ${this.setLook
        ? html`<div class="row">
            <b>${t.look_title}</b>
            ${(["figure", "pin", "off"] as const).map(
              (look) => html`<button
                class=${(this.building.settings.person_look ?? "figure") === look ? "on" : ""}
                @click=${() => {
                  this.setLook?.(look);
                  this.building = { ...this.building, settings: { ...this.building.settings, person_look: look === "figure" ? null : look } };
                }}
              >
                ${look === "figure" ? t.look_figure : look === "pin" ? t.look_pin : t.look_off}
              </button>`,
            )}
          </div>`
        : nothing}
      <ul class="list big">
        ${(live?.devices ?? []).map(
          (d) => html`<li>
            <span><b>${d.name}</b></span>
            <span>${d.room ? html`<b class="room">${name(d.room)}</b> <small>${Math.round((d.probability ?? 0) * 100)} %</small>` : html`<small>${t.not_heard}</small>`}</span>
          </li>`,
        )}
      </ul>`;
  }

  static styles = css`
    :host {
      position: fixed;
      inset: 0;
      z-index: 10000;
      display: grid;
      place-items: center;
      background: #02060fcc;
      font: 14px/1.4 system-ui, sans-serif;
      color: #e6f7ff;
    }
    .box {
      width: min(640px, calc(100vw - 16px));
      max-height: calc(100vh - 16px);
      overflow: auto;
      background: #0b1120;
      border: 1px solid #37e0ff66;
      border-radius: 14px;
      padding: 14px;
      box-shadow: 0 10px 40px #000a;
    }
    header {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    header small {
      font-weight: 400;
      color: #ffb86b;
      margin-left: 6px;
    }
    nav {
      display: flex;
      flex-wrap: wrap;
      gap: 4px;
      margin: 10px 0;
    }
    button,
    select,
    input {
      font: inherit;
      color: #e6f7ff;
      background: #16233d;
      border: 1px solid #37e0ff44;
      border-radius: 8px;
      padding: 7px 10px;
    }
    button {
      cursor: pointer;
    }
    button:disabled {
      opacity: 0.5;
      cursor: default;
    }
    button.on,
    button.primary {
      background: #37e0ff;
      color: #04121c;
      font-weight: 700;
    }
    button.done {
      border-color: #5dd39e;
    }
    button.ghost {
      background: transparent;
    }
    .x {
      background: transparent;
      border: none;
      font-size: 18px;
    }
    .list {
      list-style: none;
      padding: 0;
      margin: 8px 0;
      display: grid;
      gap: 6px;
    }
    .list li {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 8px;
      flex-wrap: wrap;
      background: #101a2e;
      border-radius: 10px;
      padding: 8px 10px;
    }
    .list li span {
      display: flex;
      flex-direction: column;
    }
    .list.big li {
      font-size: 16px;
    }
    small {
      opacity: 0.75;
      font-size: 12px;
    }
    .rooms {
      display: flex;
      flex-wrap: wrap;
      gap: 6px;
    }
    .rooms button {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      min-width: 120px;
    }
    .learning {
      background: #13233f;
      border: 1px solid #37e0ff;
      border-radius: 10px;
      padding: 10px;
      margin: 8px 0;
      font-weight: 700;
    }
    .bar {
      height: 8px;
      background: #0b1120;
      border-radius: 4px;
      margin: 8px 0;
      overflow: hidden;
    }
    .bar i {
      display: block;
      height: 100%;
      background: #37e0ff;
    }
    .hint {
      opacity: 0.8;
      font-size: 13px;
    }
    .warn {
      display: block;
      color: #ffb74d;
      font-size: 12px;
    }
    .end {
      display: flex;
      gap: 8px;
      align-items: center;
      justify-content: flex-end;
      flex-wrap: wrap;
    }
    .row {
      display: flex;
      gap: 8px;
      align-items: center;
      margin: 6px 0;
    }
    .room {
      color: #37e0ff;
    }
    a {
      color: #37e0ff;
    }
    .helper-head {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 10px;
      flex-wrap: wrap;
      margin-top: 12px;
    }
    .helper-head h4 {
      margin: 0;
    }
    a.install {
      background: #37e0ff;
      color: #04121c;
      font-weight: 700;
      text-decoration: none;
      border-radius: 10px;
      padding: 8px 14px;
    }
    details.pbd summary {
      cursor: pointer;
      opacity: 0.85;
      margin: 8px 0;
    }
    .err {
      color: #ff8fa3;
      white-space: pre-wrap;
      font-size: 12px;
    }
    h4 {
      margin: 12px 0 4px;
    }
  `;
}

if (!customElements.get("fp3d-locate-setup")) customElements.define("fp3d-locate-setup", LocateSetup);
