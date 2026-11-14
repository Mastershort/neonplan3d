/**
 * Which Pro add-ons fit this home: read from Home Assistant's entities and the plan, in the browser only (nothing is
 * sent anywhere). The extensions page lists the fitting ones first with a small sign of why (📷 3 = three cameras).
 * Lives in the editor bundle with the extensions page; its two lines carry their own texts in every language, so the
 * main bundle stays as it is.
 */
import type { Feature } from "./features.ts";
import { languageCode } from "./i18n.ts";
import type { Building } from "./model.ts";

type States = Record<string, { entity_id: string; attributes?: Record<string, unknown> }>;

// names as integrations give them; a word part between dots and underscores where a short one would match too much
const PV = /pv|solar|photovolt|inverter|wechselrichter|fronius|(^|[._])sma([._]|$)|growatt|hoymiles|opendtu|ahoy|enphase|solaredge/i;
const CHARGER = /wallbox|ev_?charg|car_?charg|ladestation|ladepunkt|(^|[._])go_?e([._]|$)|easee|openwb|evcc|wallbe|zappi|keba/i;
const WASTE = /waste|abfall|m(ü|ue|u)ll|tonne|trash|garbage|recycl/i;

const domain = (id: string) => id.slice(0, id.indexOf("."));

/** The add-ons that fit, each with a short sign of why (an icon, a count when there are several). */
export function fitHints(states: States | undefined, building: Building | null | undefined): Map<Feature, string> {
  const out = new Map<Feature, string>();
  const all = Object.values(states ?? {});
  const count = (test: (s: (typeof all)[number]) => boolean) => all.filter(test).length;
  const sign = (icon: string, n: number) => (n > 1 ? `${icon} ${n}` : icon);
  const cameras = count((s) => domain(s.entity_id) === "camera");
  if (cameras) out.set("camera_cockpit", sign("📷", cameras));
  const name = (s: (typeof all)[number]) => `${s.entity_id} ${String(s.attributes?.friendly_name ?? "")}`;
  const energy = building?.energy;
  const pv = !!energy?.solar || all.some((s) => domain(s.entity_id) === "sensor" && ["power", "energy"].includes(String(s.attributes?.device_class)) && PV.test(name(s)));
  if (pv) out.set("energy_pro", "☀️");
  else if (energy?.grid || energy?.battery) out.set("energy_pro", "⚡");
  const players = count((s) => domain(s.entity_id) === "media_player");
  if (players) out.set("sound", sign("🔊", players));
  const parked = !!building?.floors.some((f) => f.furniture.some((m) => m.type === "parking"));
  if (parked || all.some((s) => ["sensor", "binary_sensor", "switch", "select", "number"].includes(domain(s.entity_id)) && CHARGER.test(s.entity_id))) out.set("auto_pro", "🚗");
  if (all.some((s) => domain(s.entity_id) === "weather")) out.set("weather", "🌦");
  if (all.some((s) => ["sensor", "calendar"].includes(domain(s.entity_id)) && WASTE.test(s.entity_id))) out.set("household", "🗑");
  return out;
}

/** The shop's pack id of each Pro add-on (the catalog's offers carry it, sometimes with "mastershort." before it). */
const SHOP_ID: Partial<Record<Feature, string>> = {
  camera_cockpit: "pro_camera",
  weather: "pro_weather",
  screens: "pro_screens",
  energy_pro: "pro_energy",
  sound: "pro_sound",
  auto_pro: "pro_auto",
  time_travel: "pro_timetravel",
  household: "pro_household",
  pool: "pro_pool",
  frames: "frames",
};

/** The shop's offer of a Pro add-on, if the catalog has one (its price, its page). */
export function offerFor<T extends { id: string; kind: string }>(offers: readonly T[] | undefined, feature: Feature): T | undefined {
  const id = SHOP_ID[feature];
  return (offers ?? []).find((o) => (o.kind === "pro" || o.kind === "pack") && [id, feature].includes(o.id.replace(/^mastershort\./, "")));
}

/** Whether a key has bought anything (fun and taster packs are free and do not count). */
export function boughtAnything(packs: readonly { id: string }[] | undefined): boolean {
  return (packs ?? []).some((p) => !/^(mastershort\.)?fun_|_sample$/.test(p.id));
}

const TEXTS: Record<string, { fit: string; bundles: string }> = {
  de: { fit: "Passt zu deinem Zuhause", bundles: "Am günstigsten ist alles auf einmal: ein Bundle oder der Supporter-Pass." },
  en: { fit: "Fits your home", bundles: "The best value is everything at once: a bundle or the Supporter Pass." },
  cs: { fit: "Hodí se k tvé domácnosti", bundles: "Nejvýhodnější je všechno najednou: balíček nebo Supporter Pass." },
  da: { fit: "Passer til dit hjem", bundles: "Billigst er det hele på én gang: en pakke eller Supporter Pass." },
  es: { fit: "Encaja con tu casa", bundles: "Lo más económico es todo de una vez: un paquete o el Supporter Pass." },
  fi: { fit: "Sopii kotiisi", bundles: "Edullisinta on kaikki kerralla: paketti tai Supporter Pass." },
  fr: { fit: "Convient à ta maison", bundles: "Le plus avantageux : tout d'un coup, avec un pack groupé ou le Supporter Pass." },
  hu: { fit: "Illik az otthonodhoz", bundles: "A legolcsóbb mindent egyszerre: egy csomag vagy a Supporter Pass." },
  it: { fit: "Adatto alla tua casa", bundles: "La scelta più conveniente è tutto insieme: un bundle o il Supporter Pass." },
  nb: { fit: "Passer til hjemmet ditt", bundles: "Billigst er alt på én gang: en pakke eller Supporter Pass." },
  nl: { fit: "Past bij je huis", bundles: "Het voordeligst is alles in één keer: een bundel of de Supporter Pass." },
  nn: { fit: "Passar til heimen din", bundles: "Billegast er alt på ein gong: ei pakke eller Supporter Pass." },
  pl: { fit: "Pasuje do twojego domu", bundles: "Najtaniej jest wszystko naraz: pakiet albo Supporter Pass." },
  pt: { fit: "Combina com a sua casa", bundles: "O mais vantajoso é tudo de uma vez: um pacote ou o Supporter Pass." },
  ro: { fit: "Se potrivește casei tale", bundles: "Cel mai avantajos este totul deodată: un pachet sau Supporter Pass." },
  sk: { fit: "Hodí sa k tvojej domácnosti", bundles: "Najvýhodnejšie je všetko naraz: balík alebo Supporter Pass." },
  sl: { fit: "Se ujema s tvojim domom", bundles: "Najugodneje je vse naenkrat: paket ali Supporter Pass." },
  sv: { fit: "Passar ditt hem", bundles: "Billigast är allt på en gång: ett paket eller Supporter Pass." },
  tr: { fit: "Evine uygun", bundles: "En avantajlısı hepsi bir arada: bir paket ya da Supporter Pass." },
  zh: { fit: "适合你的家", bundles: "最划算的是一次全部拥有：套装或支持者通行证。" },
};

/** One of the two lines in the viewer's language (German, English or one of the further languages). */
export function fitText(lang: string | undefined, key: "fit" | "bundles"): string {
  const raw = (lang ?? navigator.language).toLowerCase();
  const code = raw.startsWith("de") ? "de" : (languageCode(raw) ?? "en");
  return (TEXTS[code] ?? TEXTS.en)[key];
}
