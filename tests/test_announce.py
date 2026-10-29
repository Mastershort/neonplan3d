"""Announcements from automations: the service `neonplan3d.announce`."""

from __future__ import annotations

import copy
from datetime import datetime
import hashlib

from homeassistant.core import HomeAssistant
from homeassistant.exceptions import ServiceValidationError
import pytest
from pytest_homeassistant_custom_component.common import async_mock_service

from custom_components.neonplan3d.announce import MODULE_ID, is_quiet, module_ready, placed_players, target_rooms
from custom_components.neonplan3d.const import DOMAIN

from .test_init import BUILDING, _setup

CODE = "export default {}"
MODULE = {"id": MODULE_ID, "module": {"api": 1, "kind": "view", "code": CODE}}
APPROVED = {**MODULE, "approved": hashlib.sha256(CODE.encode()).hexdigest()}


def _house() -> dict:
    """Two floors: a living room with a speaker placed in it, a kitchen with its own speaker, a nursery upstairs."""
    b = copy.deepcopy(BUILDING)
    ground = b["floors"][0]
    ground["rooms"].append(
        {"id": "r2", "name": "Küche", "area_id": "kitchen", "points": [[4, 0], [8, 0], [8, 3], [4, 3]]}
    )
    ground["placements"] = [{"entity_id": "media_player.living_echo", "x": 1, "z": 1}]
    ground["rooms"][1]["mods"] = {MODULE_ID: {"speaker": "media_player.kitchen_sonos"}}
    upper = copy.deepcopy(ground)
    upper.update(id="f2", name="Obergeschoss", placements=[], furniture=[])
    upper["rooms"] = [
        {
            "id": "r3",
            "name": "Kinderzimmer",
            "area_id": None,
            "points": [[0, 0], [4, 0], [4, 3], [0, 3]],
            "mods": {MODULE_ID: {"quiet_from": 19, "quiet_to": 7}},
        }
    ]
    b["floors"].append(upper)
    b["settings"]["mods"] = {MODULE_ID: {"speaker": "media_player.hall", "tts": "tts.cloud"}}
    return b


def test_module_ready_needs_the_approved_code() -> None:
    assert not module_ready([])
    assert not module_ready([MODULE])
    assert module_ready([APPROVED])
    assert not module_ready([{**APPROVED, "approved": "0" * 64}])


def test_rooms_by_name_area_or_floor() -> None:
    b = _house()
    areas = {"kitchen": "Kitchen area"}
    rooms, missing = target_rooms(b, ["küche"], None, areas)
    assert [r["id"] for _, r in rooms] == ["r2"] and missing == []
    rooms, _ = target_rooms(b, ["Kitchen area"], None, areas)
    assert [r["id"] for _, r in rooms] == ["r2"]
    rooms, _ = target_rooms(b, [], "obergeschoss", areas)
    assert [r["id"] for _, r in rooms] == ["r3"]
    rooms, _ = target_rooms(b, [], None, areas)
    assert len(rooms) == 3
    assert target_rooms(b, ["Garage"], None, areas)[1] == ["Garage"]
    assert target_rooms(b, [], "Keller", areas) == ([], ["Keller"])


def test_quiet_time_runs_over_midnight() -> None:
    room = {"mods": {MODULE_ID: {"quiet_from": 19, "quiet_to": 7}}}
    assert is_quiet(room, datetime(2026, 10, 29, 21, 0))
    assert is_quiet(room, datetime(2026, 10, 29, 6, 30))
    assert not is_quiet(room, datetime(2026, 10, 29, 12, 0))
    assert not is_quiet({}, datetime(2026, 10, 29, 23, 0))


def test_players_placed_in_the_room() -> None:
    b = _house()
    ground = b["floors"][0]
    assert placed_players(ground, ground["rooms"][0]) == ["media_player.living_echo"]
    assert placed_players(ground, ground["rooms"][1]) == []


async def _ready(hass: HomeAssistant, packs: list) -> None:
    await _setup(hass)
    data = hass.data[DOMAIN]
    data.building = _house()
    data.packs = packs
    for player in ("media_player.living_echo", "media_player.kitchen_sonos", "media_player.hall"):
        hass.states.async_set(player, "idle", {"supported_features": 0})
    hass.states.async_set("tts.cloud", "unknown")


async def test_service_needs_the_module(hass: HomeAssistant) -> None:
    await _ready(hass, [MODULE])
    with pytest.raises(ServiceValidationError):
        await hass.services.async_call(DOMAIN, "announce", {"message": "Hallo"}, blocking=True)


async def test_service_speaks_on_each_rooms_speaker(hass: HomeAssistant) -> None:
    await _ready(hass, [APPROVED])
    speak = async_mock_service(hass, "tts", "speak")
    result = await hass.services.async_call(
        DOMAIN,
        "announce",
        {"message": "Es hat geklingelt!", "rooms": ["Living", "Küche"]},
        blocking=True,
        return_response=True,
    )
    assert sorted(c.data["media_player_entity_id"] for c in speak) == [
        "media_player.kitchen_sonos",
        "media_player.living_echo",
    ]
    assert all(c.data["entity_id"] == "tts.cloud" and c.data["message"] == "Es hat geklingelt!" for c in speak)
    assert result["failed"] == [] and result["no_speaker"] == []


async def test_a_room_without_a_speaker_takes_the_default(hass: HomeAssistant) -> None:
    await _ready(hass, [APPROVED])
    speak = async_mock_service(hass, "tts", "speak")
    await hass.services.async_call(
        DOMAIN, "announce", {"message": "Zähne putzen!", "rooms": ["Kinderzimmer"]}, blocking=True
    )
    # one room asked for by name speaks even in its quiet time
    assert [c.data["media_player_entity_id"] for c in speak] == ["media_player.hall"]


async def test_unknown_room_is_an_error(hass: HomeAssistant) -> None:
    await _ready(hass, [APPROVED])
    with pytest.raises(ServiceValidationError):
        await hass.services.async_call(DOMAIN, "announce", {"message": "Hallo", "rooms": ["Garage"]}, blocking=True)


async def test_player_that_can_announce_lowers_its_music(hass: HomeAssistant) -> None:
    await _ready(hass, [APPROVED])
    hass.states.async_set("media_player.kitchen_sonos", "playing", {"supported_features": 1048576})
    play = async_mock_service(hass, "media_player", "play_media")
    await hass.services.async_call(
        DOMAIN, "announce", {"message": "Essen ist fertig!", "rooms": ["Küche"]}, blocking=True
    )
    assert play[0].data["announce"] is True
    assert play[0].data["media_content_id"] == "media-source://tts/tts.cloud?message=Essen%20ist%20fertig%21&cache=true"
