import assert from "node:assert/strict";
import { test } from "node:test";
import { cardTemplate, effectiveConfig, renameTemplate, templateId, type CardConfig } from "./card-config.ts";
import { emptyBuilding, type Building } from "./model.ts";

const plan = (): Building => ({
  ...emptyBuilding(),
  card_templates: [{ id: "kueche_fire", name: "Küche Fire-Tablet", config: { floor: "eg", room_bar: true, height: 600 } }],
});
const card = (c: Partial<CardConfig> = {}): CardConfig => ({ type: "custom:neonplan3d-card", ...c });

test("card templates: a card naming a template takes its options; its own YAML wins", () => {
  const c = effectiveConfig(card({ template: "kueche_fire", height: 800 }), plan());
  assert.equal(c.floor, "eg");
  assert.equal(c.room_bar, true);
  assert.equal(c.height, 800, "the card's own height");
  assert.equal(c.type, "custom:neonplan3d-card");
  assert.equal(c.screen, "Küche Fire-Tablet", "the template's name is the screen name");
  assert.equal(effectiveConfig(card({ template: "kueche_fire", screen: "Flur" }), plan()).screen, "Flur");
});

test("card templates: without a template, or with one the plan lacks, the YAML stays as it is", () => {
  const own = card({ floor: "og" });
  assert.equal(effectiveConfig(own, plan()), own);
  const missing = card({ template: "weg", floor: "og" });
  assert.equal(effectiveConfig(missing, plan()), missing);
  assert.equal(effectiveConfig(card({ template: "kueche_fire" }), null).floor, undefined, "the plan still loading");
});

test("card templates: an id from the name, umlauts spelled out, unique in the plan", () => {
  assert.equal(templateId("Küche Fire-Tablet", []), "kueche_fire_tablet");
  assert.equal(templateId("Flur", ["flur"]), "flur_2");
  assert.equal(templateId("Flur", ["flur", "flur_2"]), "flur_3");
  assert.equal(templateId("  ", []), "vorlage");
  assert.equal(templateId("Café Straße", []), "cafe_strasse");
});

test("card templates: renamed, the id follows the name and the old one still finds the template", () => {
  const b = plan();
  const list = b.card_templates!;
  list.push({ id: "flur", name: "Flur", config: {} });
  assert.equal(renameTemplate(list, "kueche_fire", "Küchentablet")?.id, "kuechentablet");
  assert.deepEqual(list[0].aliases, ["kueche_fire"]);
  assert.equal(cardTemplate(b, "kueche_fire")?.name, "Küchentablet", "a tablet set up before");
  assert.equal(effectiveConfig(card({ template: "kueche_fire" }), b).floor, "eg");
  // named back: no alias for its own id; a name another template has gets a number
  renameTemplate(list, "kuechentablet", "Küche Fire");
  assert.deepEqual(list[0].aliases, ["kueche_fire", "kuechentablet"].filter((x) => x !== list[0].id));
  assert.equal(renameTemplate(list, "flur", "Küchentablet")?.id, "kuechentablet_2", "the first one still answers to it");
});
