"""Time travel: the compact history rows (pure) and the websocket command (feature gate, range, answer)."""

from __future__ import annotations

from datetime import UTC, datetime
from types import SimpleNamespace
from typing import Any
from unittest.mock import patch

from homeassistant.core import HomeAssistant
from homeassistant.setup import async_setup_component
from pytest_homeassistant_custom_component.common import MockConfigEntry

from custom_components.neonplan3d import packs, timetravel
from custom_components.neonplan3d.const import DOMAIN
from custom_components.neonplan3d.timetravel_rows import (
    MAX_ROWS,
    bucket,
    cap_rows,
    car_state,
    columnar,
    dedupe,
    entity_rows,
    has_time_travel,
    oldest_data,
    quantise,
    read_row,
    reduce_attributes,
    row_value,
)

START = 1_800_000_000.0


def test_attributes_are_kept_from_the_list_and_rounded() -> None:
    attrs = {
        "brightness": 129,
        "color_temp_kelvin": 2712,
        "rgb_color": (255.4, 120.6, 0),
        "color_mode": "color_temp",
        "friendly_name": "Lamp",
        "effect_list": ["a", "b"],
        "hs_color": None,
    }
    assert reduce_attributes("light", attrs) == {
        "brightness": 128,
        "color_temp_kelvin": 2700,
        "rgb_color": [255, 121, 0],
        "color_mode": "color_temp",
    }
    assert reduce_attributes("cover", {"current_position": 41.6, "device_class": "shutter"}) == {"current_position": 42}
    assert reduce_attributes(
        "media_player", {"volume_level": 0.33, "entity_picture": "/x.jpg", "media_title": "Song"}
    ) == {
        "volume_level": 0.35,
        "media_title": "Song",
    }
    assert reduce_attributes("weather", {"cloud_coverage": 84.6, "forecast": [1, 2]}) == {"cloud_coverage": 85}
    assert reduce_attributes("binary_sensor", {"device_class": "door"}) == {}
    assert reduce_attributes("light", None) == {}


def test_rounding_steps() -> None:
    # 2 % brightness steps: 50 % and 51 % read the same
    assert quantise("brightness", 128) == quantise("brightness", 130)
    assert quantise("brightness", 255) == 255
    assert quantise("brightness", 0) == 0
    assert quantise("color_temp_kelvin", 2724) == 2700
    assert quantise("current_position", 99.6) == 100
    assert quantise("volume_level", 0.52) == 0.5
    assert quantise("current_temperature", 21.04) == 21.0
    assert quantise("hvac_action", "heating") == "heating"
    assert quantise("rgb_color", "nonsense") is None


def test_rows_in_every_form_the_recorder_answers() -> None:
    assert read_row({"s": "on", "a": {"brightness": 3}, "lu": START + 5}) == (START + 5, "on", {"brightness": 3})
    assert read_row({"s": "off", "lu": START + 7}) == (START + 7, "off", None)
    assert read_row({"state": "open", "last_changed": "2027-01-15T08:00:00+00:00"}) == (
        datetime(2027, 1, 15, 8, tzinfo=UTC).timestamp(),
        "open",
        None,
    )
    state = SimpleNamespace(
        state="heat", attributes={"temperature": 21}, last_updated=datetime(2027, 1, 15, tzinfo=UTC)
    )
    assert read_row(state) == (datetime(2027, 1, 15, tzinfo=UTC).timestamp(), "heat", {"temperature": 21})
    assert read_row({"s": "on"}) is None
    assert read_row({"lu": START}) is None


def test_values_dedupe_and_columns() -> None:
    rows = [(START + 10, "on"), (START, "off"), (START + 20, "on"), (START + 30, ["on", {"brightness": 128}])]
    clean = dedupe(rows)
    assert clean == [(START, "off"), (START + 10, "on"), (START + 30, ["on", {"brightness": 128}])]
    assert columnar(clean, START) == {
        "t": [0, 10, 30],
        "v": [0, 1, 2],
        "tab": ["off", "on", ["on", {"brightness": 128}]],
    }
    assert row_value("light", "on", {"brightness": 128, "friendly_name": "x"}) == ["on", {"brightness": 128}]
    assert row_value("binary_sensor", "on", {"device_class": "door"}) == "on"


def test_too_many_rows_keep_every_state_change() -> None:
    # a light dimmed every few seconds all day, switched on and off now and then
    rows = []
    for i in range(5000):
        state = "on" if (i // 700) % 2 == 0 else "off"
        rows.append((START + i * 10, ["on", {"brightness": i % 255}] if state == "on" else "off"))
    rows = dedupe(rows)
    kept = cap_rows(rows, 300)
    assert len(kept) <= 300
    states = [v if isinstance(v, str) else v[0] for _, v in rows]
    edges = [rows[i][0] for i in range(len(rows)) if i == 0 or states[i] != states[i - 1]]
    assert all(any(k[0] == t for k in kept) for t in edges)
    assert [k[0] for k in kept] == sorted(k[0] for k in kept)
    assert cap_rows(rows[:10]) == rows[:10]
    assert MAX_ROWS == 1500


def test_entity_rows_start_at_the_window() -> None:
    items = [{"s": "on", "lu": START - 500}, {"s": "off", "lu": START + 60}, {"s": "on", "lu": START + 999999}]
    assert entity_rows("light.a", items, START, START + 3600) == {"t": [0, 60], "v": [0, 1], "tab": ["on", "off"]}
    assert entity_rows("light.a", [], START, START + 3600) is None


def test_statistics_slots_and_where_the_data_begins() -> None:
    rows = [
        {"start": START, "mean": 20.123456},
        {"start": START + 600, "mean": 22.0},
        {"start": START + 300, "mean": None},
    ]
    assert bucket(rows) == {"start": START, "step": 300, "mean": [20.123, None, 22.0]}
    # milliseconds (older recorders) are understood
    assert bucket([{"start": START * 1000, "mean": 5}]) == {"start": START, "step": 300, "mean": [5.0]}
    assert bucket([{"start": START, "mean": None}]) is None
    entities = {"light.a": {"t": [3600, 4000], "v": [0, 1], "tab": ["on", "off"]}}
    assert oldest_data(entities, {}, START, START + 86400) == START + 3600
    assert oldest_data({"light.a": {"t": [0], "v": [0], "tab": ["on"]}}, {}, START, START + 86400) is None
    assert oldest_data({}, {"sensor.t": {"start": START + 120, "step": 300, "mean": [1]}}, START, START + 86400) is None
    assert oldest_data({}, {}, START, START + 86400) == START + 86400


def test_a_car_tracker_says_home_or_away_only() -> None:
    assert car_state("home") == "home"
    assert car_state("unavailable") == "unavailable"
    assert car_state("Work") == "not_home"
    assert car_state("not_home") == "not_home"
    # the robot's room is kept as an attribute
    assert reduce_attributes("vacuum", {"current_room": "Kitchen", "battery_level": 80}) == {"current_room": "Kitchen"}


def test_the_pack_feature_unlocks_time_travel() -> None:
    assert has_time_travel([{"features": ["energy_pro"]}, {"features": ["time_travel"]}])
    assert not has_time_travel([{"features": ["energy_pro"]}, {"features": None}, {}])
    assert "time_travel" in packs.KNOWN_FEATURES


async def _setup(hass: HomeAssistant) -> None:
    await async_setup_component(hass, "http", {})
    entry = MockConfigEntry(domain=DOMAIN, data={})
    entry.add_to_hass(hass)
    assert await hass.config_entries.async_setup(entry.entry_id)
    await hass.async_block_till_done()


def _msg(**over: Any) -> dict[str, Any]:
    return {
        "type": "neonplan3d/timetravel/history",
        "start_time": START,
        "end_time": START + 86400,
        "entity_ids": ["light.kitchen", "person.anna"],
        "statistic_ids": ["sensor.temp"],
        **over,
    }


async def test_history_needs_the_pro_add_on(hass: HomeAssistant, hass_ws_client) -> None:
    await _setup(hass)
    client = await hass_ws_client(hass)
    await client.send_json_auto_id(_msg())
    result = await client.receive_json()
    assert not result["success"]
    assert result["error"]["code"] == "not_unlocked"


async def test_history_checks_the_window_and_the_recorder(hass: HomeAssistant, hass_ws_client) -> None:
    await _setup(hass)
    hass.data[DOMAIN].packs = [{"id": "test.pro", "features": ["time_travel"], "items": []}]
    client = await hass_ws_client(hass)
    await client.send_json_auto_id(_msg(end_time=START + 30 * 3600))
    result = await client.receive_json()
    assert result["error"]["code"] == "invalid_range"
    await client.send_json_auto_id(_msg(end_time=START - 1))
    assert (await client.receive_json())["error"]["code"] == "invalid_range"
    # no recorder in this test setup
    await client.send_json_auto_id(_msg())
    assert (await client.receive_json())["error"]["code"] == "no_recorder"


async def test_history_answer(hass: HomeAssistant, hass_ws_client) -> None:
    """With the add-on and a recorder the compact answer comes back; people are never asked for."""
    await _setup(hass)
    hass.data[DOMAIN].packs = [{"id": "test.pro", "features": ["time_travel"], "items": []}]
    hass.config.components.add("recorder")
    asked: dict[str, Any] = {}

    def fake_states(_hass, start, end, entity_ids, with_attributes):
        asked[str(with_attributes)] = entity_ids
        if with_attributes:
            return {"light.kitchen": [{"s": "on", "a": {"brightness": 255, "friendly_name": "K"}, "lu": START}]}
        return {}

    def fake_stats(_hass, **kwargs):
        asked["stats"] = sorted(kwargs["statistic_ids"])
        return {"sensor.temp": [{"start": START + 300, "mean": 21.5}]}

    class Instance:
        keep_days = 10

        async def async_add_executor_job(self, func, *args):
            return func(*args)

    with (
        patch("homeassistant.components.recorder.get_instance", return_value=Instance()),
        patch.object(timetravel, "_states", fake_states),
        patch("homeassistant.components.recorder.statistics.statistics_during_period", fake_stats),
    ):
        client = await hass_ws_client(hass)
        await client.send_json_auto_id(_msg())
        result = await client.receive_json()
    assert result["success"], result
    answer = result["result"]
    assert answer["entities"] == {"light.kitchen": {"t": [0], "v": [0], "tab": [["on", {"brightness": 255}]]}}
    assert answer["stats"] == {"sensor.temp": {"start": START + 300, "step": 300, "mean": [21.5]}}
    assert answer["missing"] == []
    assert answer["oldest"] is None
    assert answer["keep_days"] == 10
    assert asked["True"] == ["light.kitchen"]
    assert asked["stats"] == ["sensor.temp"]
    assert "person.anna" not in str(asked)


async def test_history_car_trackers(hass: HomeAssistant, hass_ws_client) -> None:
    """A car's tracker comes back as home or away; a person's tracker is never asked for."""
    await _setup(hass)
    hass.data[DOMAIN].packs = [{"id": "test.pro", "features": ["time_travel"], "items": []}]
    hass.config.components.add("recorder")
    hass.states.async_set("person.anna", "home", {"device_trackers": ["device_tracker.anna_phone"]})
    asked: list[list[str]] = []

    def fake_states(_hass, start, end, entity_ids, with_attributes):
        asked.append(list(entity_ids))
        if "device_tracker.car" in entity_ids:
            return {"device_tracker.car": [{"s": "home", "lu": START}, {"s": "Work", "lu": START + 600}]}
        return {}

    class Instance:
        keep_days = 10

        async def async_add_executor_job(self, func, *args):
            return func(*args)

    with (
        patch("homeassistant.components.recorder.get_instance", return_value=Instance()),
        patch.object(timetravel, "_states", fake_states),
    ):
        client = await hass_ws_client(hass)
        await client.send_json_auto_id(
            _msg(
                entity_ids=["light.kitchen", "device_tracker.car"],
                statistic_ids=[],
                car_trackers=["device_tracker.car", "device_tracker.anna_phone"],
            )
        )
        result = await client.receive_json()
    assert result["success"], result
    answer = result["result"]
    assert answer["entities"]["device_tracker.car"] == {"t": [0, 600], "v": [0, 1], "tab": ["home", "not_home"]}
    assert "device_tracker.anna_phone" not in str(asked)
    assert "Work" not in str(answer)
