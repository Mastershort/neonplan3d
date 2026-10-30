"""Navigation groups survive saves without changing physical floors or their contents."""

from __future__ import annotations

import copy

from homeassistant.core import HomeAssistant
import pytest
import voluptuous as vol

from custom_components.neonplan3d.const import DOMAIN, STORAGE_KEY_BUILDING
from custom_components.neonplan3d.schema import FLOOR_SCHEMA

from .test_init import BUILDING, _setup

FLOOR = {
    **BUILDING["floors"][0],
    "id": "raised",
    "name": "Raised lower floor",
    "elevation": -1.5,
}


@pytest.mark.parametrize("group", [None, "", "  \t\n"])
def test_empty_navigation_group_is_optional(group) -> None:
    assert FLOOR_SCHEMA(FLOOR)["navigation_group"] is None
    assert FLOOR_SCHEMA({**FLOOR, "navigation_group": group})["navigation_group"] is None


@pytest.mark.parametrize("group", ["Lower level", "Étage inférieur", "x" * 100])
def test_navigation_group_preserves_floor(group) -> None:
    grouped = FLOOR_SCHEMA({**FLOOR, "navigation_group": group})
    assert grouped == {**FLOOR_SCHEMA(FLOOR), "navigation_group": group}
    assert FLOOR_SCHEMA({**FLOOR, "navigation_group": " Lower level "})["navigation_group"] == "Lower level"


@pytest.mark.parametrize("value", [False, 42, ["Lower level"], {"name": "Lower level"}, "x" * 101])
def test_invalid_navigation_groups_are_rejected(value) -> None:
    with pytest.raises(vol.Invalid):
        FLOOR_SCHEMA({**FLOOR, "navigation_group": value})


async def test_navigation_groups_save_reload_and_clear(hass: HomeAssistant, hass_ws_client, hass_storage) -> None:
    """Grouping split levels is persisted; renaming or clearing keeps every physical floor."""
    entry = await _setup(hass)
    client = await hass_ws_client(hass)
    building = copy.deepcopy(BUILDING)
    building["floors"] = [
        copy.deepcopy(FLOOR),
        {**copy.deepcopy(FLOOR), "id": "lower", "name": "Lower floor", "elevation": -2.5, "rooms": []},
        {**copy.deepcopy(FLOOR), "id": "upper", "name": "Upper floor", "elevation": 0, "rooms": []},
    ]
    physical_floors = [FLOOR_SCHEMA(floor) for floor in building["floors"]]
    for floor in building["floors"][:2]:
        floor["navigation_group"] = " Lower level "

    await client.send_json_auto_id({"type": f"{DOMAIN}/building/save", "building": building})
    saved = await client.receive_json()
    assert saved["success"], saved
    assert saved["result"]["revision"] == 1
    expected = [
        {**floor, "navigation_group": "Lower level" if index < 2 else None}
        for index, floor in enumerate(physical_floors)
    ]
    assert hass_storage[STORAGE_KEY_BUILDING]["data"]["building"]["floors"] == expected

    previous_data = hass.data[DOMAIN]
    assert await hass.config_entries.async_reload(entry.entry_id)
    await hass.async_block_till_done()
    assert hass.data[DOMAIN] is not previous_data
    await client.send_json_auto_id({"type": f"{DOMAIN}/building/get"})
    restored = (await client.receive_json())["result"]
    assert restored["revision"] == 1
    assert restored["building"]["floors"] == expected

    building = restored["building"]
    building["floors"][0]["navigation_group"] = "Basement"
    building["floors"][1]["navigation_group"] = "  "
    await client.send_json_auto_id({"type": f"{DOMAIN}/building/save", "building": building})
    assert (await client.receive_json())["success"]
    assert await hass.config_entries.async_reload(entry.entry_id)
    await hass.async_block_till_done()
    await client.send_json_auto_id({"type": f"{DOMAIN}/building/get"})
    restored = (await client.receive_json())["result"]
    assert restored["revision"] == 2
    assert restored["building"]["floors"] == [
        {**floor, "navigation_group": "Basement" if index == 0 else None} for index, floor in enumerate(physical_floors)
    ]


@pytest.mark.parametrize("value", [False, 42, ["Lower level"], {"name": "Lower level"}, "x" * 101])
async def test_invalid_group_cannot_replace_saved_building(
    hass: HomeAssistant, hass_ws_client, hass_storage, value
) -> None:
    """Validation runs through the websocket API before replacing the plan or bumping its revision."""
    await _setup(hass)
    client = await hass_ws_client(hass)
    building = copy.deepcopy(BUILDING)
    building["floors"][0]["navigation_group"] = "Lower level"
    await client.send_json_auto_id({"type": f"{DOMAIN}/building/save", "building": building})
    assert (await client.receive_json())["success"]
    stored = copy.deepcopy(hass_storage[STORAGE_KEY_BUILDING]["data"])

    building["floors"][0]["navigation_group"] = value
    building["floors"][0]["elevation"] = 99
    await client.send_json_auto_id({"type": f"{DOMAIN}/building/save", "building": building})
    rejected = await client.receive_json()
    assert not rejected["success"]
    assert rejected["error"]["code"] == "invalid_format"
    await client.send_json_auto_id({"type": f"{DOMAIN}/building/get"})
    result = (await client.receive_json())["result"]
    assert result["revision"] == stored["revision"]
    assert result["building"] == stored["building"]
    assert hass_storage[STORAGE_KEY_BUILDING]["data"] == stored
