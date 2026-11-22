import assert from "node:assert/strict";
import { test } from "node:test";
import { languageCode, languageReady, loadLanguage, translate } from "./i18n.ts";
import type { HomeAssistant } from "./types.ts";

test("selects Traditional Chinese for its Home Assistant and browser language tags", () => {
  assert.equal(languageCode("zh-Hant"), "zh-hant");
  assert.equal(languageCode("zh-Hant-TW"), "zh-hant");
  assert.equal(languageCode("zh-TW"), "zh-hant");
  assert.equal(languageCode("zh-Hans"), "zh");
  assert.equal(languageCode("zh-CN"), "zh");
  assert.equal(languageCode("zh"), "zh");
  assert.equal(languageCode("en-US"), null);
  assert.equal(languageCode("de-DE"), null);
});

test("loads Traditional Chinese separately and falls back to English for a missing key", async (t) => {
  const fetchTable = t.mock.method(globalThis, "fetch", async () => Response.json({ editor: "編輯器" }));
  const hass = { language: "zh-Hant" } as HomeAssistant;

  assert.equal(languageReady(hass.language), false);
  await Promise.all([loadLanguage(hass.language), loadLanguage("zh-TW")]);
  assert.equal(fetchTable.mock.callCount(), 1);
  const [url] = fetchTable.mock.calls[0].arguments;
  assert.match(String(url), /\/lang\/zh-hant\.json\?v=/);
  assert.equal(languageReady(hass.language), true);
  assert.equal(languageReady("zh-Hans"), false);
  assert.equal(translate(hass, "editor"), "編輯器");
  assert.equal(translate(hass, "all_floors"), "All floors");
});
