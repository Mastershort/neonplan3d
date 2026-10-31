"""Assist asks the house: service, intent, sentences and the views' answers."""

from __future__ import annotations

from pathlib import Path
import sys
from types import SimpleNamespace
from unittest.mock import AsyncMock, MagicMock, patch

from homeassistant.core import HomeAssistant
from homeassistant.helpers import area_registry as ar
from homeassistant.helpers import device_registry as dr
from homeassistant.helpers import intent
from pytest_homeassistant_custom_component.common import MockConfigEntry

from custom_components.neonplan3d.const import DOMAIN
from custom_components.neonplan3d.voice import area_device, remove_sentences, sentences_yaml, write_sentences

from .test_init import _setup


async def _view(hass_ws_client, hass: HomeAssistant):
    """An open NeonPlan view: subscribed to the sentences."""
    client = await hass_ws_client(hass)
    await client.send_json({"id": 1, "type": "neonplan3d/voice/subscribe"})
    assert (await client.receive_json())["success"]
    return client


async def test_service_hands_the_sentence_to_the_views_and_returns_the_first_answer(
    hass: HomeAssistant, hass_ws_client
) -> None:
    await _setup(hass)
    view = await _view(hass_ws_client, hass)
    other = await _view(hass_ws_client, hass)

    task = hass.async_create_task(
        hass.services.async_call(
            DOMAIN, "ask", {"text": "Zeig das Wohnzimmer", "speak": True}, blocking=True, return_response=True
        )
    )
    ask = (await view.receive_json())["event"]
    assert ask["text"] == "Zeig das Wohnzimmer"
    assert ask["speak"] is True
    assert ask["screen"] is None
    assert (await other.receive_json())["event"]["ask_id"] == ask["ask_id"]

    await view.send_json(
        {"id": 2, "type": "neonplan3d/voice/answer", "ask_id": ask["ask_id"], "text": "Ich zeige das Wohnzimmer."}
    )
    assert (await view.receive_json())["result"] == {"taken": True}
    # the second view is late
    await other.send_json({"id": 2, "type": "neonplan3d/voice/answer", "ask_id": ask["ask_id"], "text": "Wohnzimmer"})
    assert (await other.receive_json())["result"] == {"taken": False}

    assert await task == {"answered": True, "answer": "Ich zeige das Wohnzimmer.", "screen_open": True}


async def test_service_without_an_open_view_says_so(hass: HomeAssistant) -> None:
    await _setup(hass)
    with patch("custom_components.neonplan3d.voice.ANSWER_TIMEOUT", 0.05):
        result = await hass.services.async_call(
            DOMAIN, "ask", {"text": "Zeig die Küche", "screen": "Flur"}, blocking=True, return_response=True
        )
    assert result == {"answered": False, "answer": "", "screen_open": False}


async def test_intent_speaks_the_answer_or_that_nothing_was_understood(hass: HomeAssistant, hass_ws_client) -> None:
    await _setup(hass)
    view = await _view(hass_ws_client, hass)

    ids = iter(range(10, 100))

    async def answer(text: str, answered: bool) -> intent.IntentResponse:
        task = hass.async_create_task(
            intent.async_handle(hass, "test", "NeonPlanAsk", {"text": {"value": text}}, text_input=text, language="de")
        )
        ask = (await view.receive_json())["event"]
        assert ask["text"] == text
        await view.send_json(
            {
                "id": next(ids),
                "type": "neonplan3d/voice/answer",
                "ask_id": ask["ask_id"],
                "text": "Drei Fenster sind offen.",
                "answered": answered,
            }
        )
        await view.receive_json()
        return await task

    assert (await answer("Was ist offen", True)).speech["plain"]["speech"] == "Drei Fenster sind offen."
    assert (await answer("Blubb", False)).speech["plain"]["speech"] == "Das hat NeonPlan nicht verstanden."


async def test_intent_without_a_view(hass: HomeAssistant) -> None:
    await _setup(hass)
    with patch("custom_components.neonplan3d.voice.ANSWER_TIMEOUT", 0.05):
        response = await intent.async_handle(
            hass, "test", "NeonPlanAsk", {"text": {"value": "living room"}}, language="en"
        )
    assert response.speech["plain"]["speech"] == "No NeonPlan screen is open right now."


def test_sentences_are_written_only_on_request_and_never_over_a_changed_file(tmp_path: Path) -> None:
    de = tmp_path / "custom_sentences" / "de" / "neonplan3d.yaml"
    en = tmp_path / "custom_sentences" / "en" / "neonplan3d.yaml"
    hashes, kept, changed = write_sentences(tmp_path, "distinct", {})
    assert changed and kept == []
    text = de.read_text(encoding="utf-8")
    assert text == sentences_yaml("de", "distinct")
    assert "zeig[e] [mir] [mal] [bitte] {text}" in text
    # only the distinct sentences: a question Home Assistant answers itself is not taken (#641)
    assert "welche (fenster|türen) sind [noch] offen" not in text
    assert en.is_file()
    # unchanged: nothing written
    hashes, kept, changed = write_sentences(tmp_path, "distinct", hashes)
    assert not changed
    # "all" adds the questions
    hashes, kept, changed = write_sentences(tmp_path, "all", hashes)
    assert changed and "welche (fenster|türen) sind [noch] offen" in de.read_text(encoding="utf-8")
    # a file the user changed is never overwritten, nor removed
    de.write_text("my own sentences", encoding="utf-8")
    hashes, kept, changed = write_sentences(tmp_path, "distinct", hashes)
    assert kept == ["de"]
    assert de.read_text(encoding="utf-8") == "my own sentences"
    hashes, kept, _ = write_sentences(tmp_path, "off", hashes)
    assert kept == ["de"] and de.exists() and not en.exists()
    # removing the integration takes only NeonPlan's own files
    hashes, _, _ = write_sentences(tmp_path, "distinct", hashes)
    remove_sentences(tmp_path, hashes)
    assert not en.exists()
    assert de.read_text(encoding="utf-8") == "my own sentences"


def test_a_file_an_older_version_wrote_is_still_ours(tmp_path: Path) -> None:
    """Files from 1.22.0 - 1.24.0 (older header lines) are replaced, not kept as the user's own."""
    de = tmp_path / "custom_sentences" / "de" / "neonplan3d.yaml"
    de.parent.mkdir(parents=True)
    de.write_text(
        sentences_yaml("de", "distinct").replace(
            "# understands answers). Put your own sentences for NeonPlanAsk into another file.\n",
            "# understands answers). Rewritten on every start: "
            "put your own sentences for NeonPlanAsk into another file.\n",
        ),
        encoding="utf-8",
    )
    _, kept, changed = write_sentences(tmp_path, "distinct", {})
    assert kept == [] and changed
    assert de.read_text(encoding="utf-8") == sentences_yaml("de", "distinct")


async def test_setup_writes_no_sentence_file(hass: HomeAssistant) -> None:
    """Nothing lands in the configuration folder unless an admin picks the sentences (HACS review)."""
    await _setup(hass)
    assert not (Path(hass.config.config_dir) / "custom_sentences").exists()


async def test_unload_removes_service_and_intent(hass: HomeAssistant) -> None:
    entry = await _setup(hass)
    assert hass.services.has_service(DOMAIN, "ask")
    assert await hass.config_entries.async_unload(entry.entry_id)
    await hass.async_block_till_done()
    assert not hass.services.has_service(DOMAIN, "ask")


# a file an early version wrote with its own, shorter set of sentences (seen on a real installation)
_EARLY_FILE = """# Written by NeonPlan 3D: the sentences Assist hands to the open NeonPlan views (the first one that
# understands answers). Rewritten on every start: put your own sentences for NeonPlanAsk into another file.
language: "de"
intents:
  NeonPlanAsk:
    data:
      - sentences:
          - "zeig[e] [mir] [mal] [bitte] {text}"
          - "wo (ist|sind|steht|stehen) {text}"
          - "gute nacht"
lists:
  text:
    wildcard: true
"""


def test_an_early_file_with_other_sentences_is_still_ours(tmp_path: Path) -> None:
    """Only NeonPlan's sentences under NeonPlan's header: replaced (it lacked "wer ist zu hause"); one sentence of
    the user's own in it, and it stays."""
    de = tmp_path / "custom_sentences" / "de" / "neonplan3d.yaml"
    de.parent.mkdir(parents=True)
    de.write_text(_EARLY_FILE, encoding="utf-8")
    _, kept, changed = write_sentences(tmp_path, "distinct", {})
    assert kept == [] and changed
    assert "wer ist [gerade] (zu hause|zuhause|daheim)" in de.read_text(encoding="utf-8")
    de.write_text(
        _EARLY_FILE.replace('          - "gute nacht"\n', '          - "mach das licht aus"\n'), encoding="utf-8"
    )
    _, kept, _ = write_sentences(tmp_path, "distinct", {})
    assert kept == ["de"]


def test_the_names_locating_knows_are_a_list_not_a_wildcard(tmp_path: Path) -> None:
    """ "Wo ist Frauke?" matches a list of names exactly, so Assist handles it locally and an AI agent behind it
    never gets the question."""
    de = tmp_path / "custom_sentences" / "de" / "neonplan3d.yaml"
    hashes, _, _ = write_sentences(tmp_path, "distinct", {}, ["Torsten Apple Watch", "Torsten", 'Frau "K"'])
    text = de.read_text(encoding="utf-8")
    assert "wo (ist|steckt|sind) [der|die|das|mein|meine] {neonplan_who}" in text
    assert '      - "Torsten Apple Watch"' in text and '      - "Frau \\"K\\""' in text
    # the names change: the file follows; no names: the list goes
    _, _, changed = write_sentences(tmp_path, "distinct", hashes, ["Torsten"])
    assert changed and "Apple Watch" not in de.read_text(encoding="utf-8")
    write_sentences(tmp_path, "distinct", {}, [])
    assert "neonplan_who" not in de.read_text(encoding="utf-8")


def test_an_older_file_with_fewer_sentences_is_still_ours(tmp_path: Path) -> None:
    """A file of an older version had fewer sentences (no "wer ist zu hause"): replaced, not kept as the user's."""
    de = tmp_path / "custom_sentences" / "de" / "neonplan3d.yaml"
    de.parent.mkdir(parents=True)
    de.write_text(
        "# Written by NeonPlan 3D: the sentences Assist hands to the open NeonPlan views (the first one that\n"
        "# understands answers). Rewritten on every start: put your own sentences for NeonPlanAsk into another file.\n"
        'language: "de"\nintents:\n  NeonPlanAsk:\n    data:\n      - sentences:\n'
        '          - "zeig[e] [mir] [mal] [bitte] {text}"\n          - "wo (ist|sind|steht|stehen) {text}"\n'
        "lists:\n  text:\n    wildcard: true\n",
        encoding="utf-8",
    )
    _, kept, changed = write_sentences(tmp_path, "distinct", {})
    assert kept == [] and changed
    # one sentence of the user's own in it: kept
    de.write_text(
        de.read_text(encoding="utf-8")
        .replace("wildcard: true", "wildcard: true\n")
        .replace('          - "zeig', '          - "mach das licht an"\n          - "zeig'),
        encoding="utf-8",
    )
    _, kept, _ = write_sentences(tmp_path, "distinct", {})
    assert kept == ["de"]


def test_the_names_locating_knows_are_sentences(tmp_path: Path) -> None:
    """ "Wo ist Frauke?" as a list of names (no wildcard): Assist matches it locally even with an AI agent."""
    de = tmp_path / "custom_sentences" / "de" / "neonplan3d.yaml"
    hashes, _, _ = write_sentences(tmp_path, "distinct", {}, ["Frauke", "Torstens iPhone"])
    text = de.read_text(encoding="utf-8")
    assert "{neonplan_who}" in text and '      - "Torstens iPhone"' in text
    # names changed: the file is ours, so it is rewritten
    _, kept, changed = write_sentences(tmp_path, "distinct", hashes, ["Frauke"])
    assert kept == [] and changed and "Torstens iPhone" not in de.read_text(encoding="utf-8")


async def test_a_sentence_said_in_a_room_goes_to_assist_with_a_device_of_that_room(
    hass: HomeAssistant, hass_ws_client
) -> None:
    """On the kitchen's tablet "Licht an" reaches Assist from a device in the kitchen (the room is its area)."""
    await _setup(hass)
    kitchen = ar.async_get(hass).async_create("Küche")
    hall = ar.async_get(hass).async_create("Flur")
    entry = MockConfigEntry(domain="hue", data={})
    entry.add_to_hass(hass)
    devices = dr.async_get(hass)
    lamp = devices.async_get_or_create(config_entry_id=entry.entry_id, identifiers={("hue", "lamp")})
    devices.async_update_device(lamp.id, area_id=kitchen.id)
    off = devices.async_get_or_create(config_entry_id=entry.entry_id, identifiers={("hue", "off")})
    devices.async_update_device(off.id, area_id=kitchen.id, disabled_by=dr.DeviceEntryDisabler.USER)
    assert area_device(hass, kitchen.id) == lamp.id
    assert area_device(hass, hall.id) is None
    assert area_device(hass, "gone") is None

    result = MagicMock()
    result.as_dict.return_value = {"response": {"speech": {"plain": {"speech": "Licht ist an"}}}}
    converse = AsyncMock(return_value=result)
    client = await hass_ws_client(hass)
    # Assist itself stands in: its requirements (hassil) are not installed for the tests
    with patch.dict(sys.modules, {"homeassistant.components.conversation": SimpleNamespace(async_converse=converse)}):
        await client.send_json(
            {"id": 1, "type": "neonplan3d/voice/converse", "text": "Licht an", "area_id": kitchen.id, "language": "de"}
        )
        res = await client.receive_json()
    assert res["success"]
    assert res["result"]["response"]["speech"]["plain"]["speech"] == "Licht ist an"
    assert converse.await_args.args[1] == "Licht an"
    assert converse.await_args.kwargs == {"language": "de", "device_id": lamp.id}
