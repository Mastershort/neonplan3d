import assert from "node:assert/strict";
import { test } from "node:test";
import { emptyBuilding, newFloor, type Room } from "../model.ts";
import { findPlace, normalize, showCommand, withoutHere } from "./commands.ts";

const room = (id: string, name: string): Room => ({ id, name, area_id: null, points: [], floor_material: "wood" });
const building = {
  ...emptyBuilding(),
  floors: [
    { ...newFloor("eg", "Erdgeschoss", 0), rooms: [room("wz", "Wohnzimmer"), room("wc", "WC"), room("gwc", "Gäste-WC")] },
    { ...newFloor("og", "Obergeschoss", 2.8), rooms: [room("kz", "Kinderzimmer")] },
  ],
};

test("normalize: lower case, no accents or punctuation", () => {
  assert.equal(normalize("Gäste-WC!"), "gaste wc");
  assert.equal(normalize("  Straße "), "strasse");
});

test("a sentence names a room, a floor or the house", () => {
  assert.deepEqual(findPlace("Zeig mir das Wohnzimmer", building), { kind: "room", floorId: "eg", roomId: "wz", name: "Wohnzimmer" });
  assert.equal(findPlace("geh ins Gäste-WC", building)?.name, "Gäste-WC");
  assert.equal(findPlace("WC bitte", building)?.name, "WC");
  assert.deepEqual(findPlace("Obergeschoss", building), { kind: "floor", floorId: "og", name: "Obergeschoss" });
  assert.equal(findPlace("zeig das ganze Haus", building)?.kind, "house");
  assert.equal(findPlace("mach das Licht an", building), null);
  assert.equal(findPlace("", building), null);
});

test("a command to show: a show word or a bare place name – not a sentence that only names the room", () => {
  assert.equal(showCommand("Zeig das Wohnzimmer", building)?.name, "Wohnzimmer");
  assert.equal(showCommand("Wohnzimmer", building)?.name, "Wohnzimmer");
  assert.equal(showCommand("das Obergeschoss bitte", building)?.name, "Obergeschoss");
  assert.equal(showCommand("show the whole house", building)?.kind, "house");
  assert.equal(showCommand("Licht im Wohnzimmer an", building), null);
  assert.equal(showCommand("Wie warm ist es im Kinderzimmer", building), null);
  // the Home Assistant area's own name counts too
  assert.equal(showCommand("geh in die Stube", building, (r) => (r.id === "wz" ? "Stube" : null))?.name, "Wohnzimmer");
});

test("a sentence said in the tablet's room loses its 'here'", () => {
  assert.equal(withoutHere("Mach hier das Licht an", "de"), "Mach das Licht an");
  assert.equal(withoutHere("Licht hier an.", "de-DE"), "Licht an.");
  assert.equal(withoutHere("Hier Licht aus", "de"), "Licht aus");
  assert.equal(withoutHere("turn on the lights here", "en"), "turn on the lights");
  // only whole words, only in the language spoken
  assert.equal(withoutHere("Licht im Hierzimmer an", "de"), "Licht im Hierzimmer an");
  assert.equal(withoutHere("give her the light", "en"), "give her the light");
  assert.equal(withoutHere("tænd lyset her", "da"), "tænd lyset");
  assert.equal(withoutHere("allume la lumière ici", "fr"), "allume la lumière");
  // nothing left: the sentence as said
  assert.equal(withoutHere("hier", "de"), "hier");
});
