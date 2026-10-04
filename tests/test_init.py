"""Setup, websocket and removal tests."""

from __future__ import annotations

import copy

from homeassistant import config_entries
from homeassistant.core import HomeAssistant
from homeassistant.data_entry_flow import FlowResultType
from homeassistant.setup import async_setup_component
from pytest_homeassistant_custom_component.common import MockConfigEntry

from custom_components.neonplan3d.const import DOMAIN, STORAGE_KEY_BUILDING, STORAGE_KEY_HISTORY, STORAGE_KEY_IMAGES

BUILDING = {
    "version": 1,
    "settings": {"wall_exterior": 0.24, "wall_interior": 0.12, "grid": 0.05},
    "floors": [
        {
            "id": "f1",
            "name": "Ground floor",
            "elevation": 0,
            "height": 2.5,
            "cut_height": 1.15,
            "rooms": [
                {
                    "id": "r1",
                    "name": "Living",
                    "area_id": None,
                    "points": [[0, 0], [4, 0], [4, 3], [0, 3]],
                    "floor_material": "wood",
                }
            ],
            "openings": [],
            "furniture": [],
            "placements": [],
            "background": {"image_id": "img1", "x": 0, "z": 0, "width": 10, "opacity": 0.5},
        }
    ],
}
IMAGE = "data:image/png;base64,iVBORw0KGgo="


async def _setup(hass: HomeAssistant) -> MockConfigEntry:
    await async_setup_component(hass, "http", {})
    entry = MockConfigEntry(domain=DOMAIN, data={})
    entry.add_to_hass(hass)
    assert await hass.config_entries.async_setup(entry.entry_id)
    await hass.async_block_till_done()
    return entry


async def test_data_of_the_earlier_name_is_taken_over(hass: HomeAssistant, hass_ws_client, hass_storage) -> None:
    """A plan saved under the old integration name (floorplan_3d) shows up after the rename."""
    data = {"building": copy.deepcopy(BUILDING), "revision": 7}
    hass_storage["floorplan_3d.building"] = {
        "version": 1,
        "minor_version": 2,
        "key": "floorplan_3d.building",
        "data": data,
    }
    await _setup(hass)
    client = await hass_ws_client(hass)
    await client.send_json_auto_id({"type": f"{DOMAIN}/building/get"})
    result = (await client.receive_json())["result"]
    assert result["revision"] == 7
    assert [f["name"] for f in result["building"]["floors"]] == [f["name"] for f in BUILDING["floors"]]
    assert hass_storage[STORAGE_KEY_BUILDING]["data"]["revision"] == 7


async def test_config_flow_creates_single_entry(hass: HomeAssistant) -> None:
    result = await hass.config_entries.flow.async_init(DOMAIN, context={"source": config_entries.SOURCE_USER})
    assert result["type"] is FlowResultType.FORM
    result = await hass.config_entries.flow.async_configure(result["flow_id"], {})
    assert result["type"] is FlowResultType.CREATE_ENTRY
    await hass.async_block_till_done()
    again = await hass.config_entries.flow.async_init(DOMAIN, context={"source": config_entries.SOURCE_USER})
    assert again["type"] is FlowResultType.ABORT


async def test_save_and_get_building(hass: HomeAssistant, hass_ws_client) -> None:
    await _setup(hass)
    client = await hass_ws_client(hass)

    await client.send_json_auto_id({"type": "neonplan3d/building/subscribe"})
    sub = await client.receive_json()
    assert sub["success"]

    await client.send_json_auto_id({"type": "neonplan3d/building/save", "building": BUILDING})
    event = await client.receive_json()
    result = await client.receive_json()
    if "event" in result:
        event, result = result, event
    assert result["success"]
    assert result["result"]["revision"] == 1
    assert event["event"] == {"revision": 1}

    await client.send_json_auto_id({"type": "neonplan3d/building/get"})
    got = await client.receive_json()
    assert got["result"]["revision"] == 1
    assert got["result"]["building"]["floors"][0]["rooms"][0]["name"] == "Living"
    assert got["result"]["version"]


async def test_opening_fields_get_defaults(hass: HomeAssistant, hass_ws_client) -> None:
    await _setup(hass)
    client = await hass_ws_client(hass)
    building = copy.deepcopy(BUILDING)
    opening = {
        "id": "o1",
        "room_id": "r1",
        "edge": 0,
        "offset": 2,
        "width": 1.2,
        "type": "window",
        "sill": 0.9,
        "height": 1.3,
    }
    building["floors"][0]["openings"] = [
        opening,
        {**opening, "id": "o2", "hinge": "right", "cover": "cover.x", "contact": "none"},
    ]
    await client.send_json_auto_id({"type": "neonplan3d/building/save", "building": building})
    assert (await client.receive_json())["success"]
    await client.send_json_auto_id({"type": "neonplan3d/building/get"})
    got = (await client.receive_json())["result"]["building"]["floors"][0]["openings"]
    assert got[0] == {
        **opening,
        "hinge": "left",
        "leaves": 1,
        "swing": "in",
        "cover": None,
        "contact": None,
        "contact2": None,
        "tilt": None,
        "sensor": None,
        "sensor2": None,
        "tilt2": None,
        "style": None,
        "position": None,
        "position_inverted": False,
        "tilt_angle": None,
        "tilt_max": None,
        "tilt_offset": None,
        "tilt_invert": False,
        "wall": None,
        "mark": None,
        "confirm": False,
    }
    assert got[1]["hinge"] == "right" and got[1]["cover"] == "cover.x" and got[1]["contact"] == "none"

    double = {**opening, "id": "o3", "sill": 0, "leaves": 2, "contact2": "binary_sensor.b"}
    building["floors"][0]["openings"] = [double, {**opening, "id": "o4", "type": "door", "swing": "out"}]
    await client.send_json_auto_id({"type": "neonplan3d/building/save", "building": building})
    assert (await client.receive_json())["success"]
    await client.send_json_auto_id({"type": "neonplan3d/building/get"})
    got = (await client.receive_json())["result"]["building"]["floors"][0]["openings"]
    assert got[0]["leaves"] == 2 and got[0]["contact2"] == "binary_sensor.b"
    assert got[1]["swing"] == "out"

    # an opening in a free wall keeps the wall's id
    building["floors"][0]["walls"] = [{"id": "fw1", "a": [1, 0], "b": [1, 2]}]
    building["floors"][0]["openings"] = [{**opening, "id": "o5", "type": "door", "wall": "fw1", "offset": 1}]
    await client.send_json_auto_id({"type": "neonplan3d/building/save", "building": building})
    assert (await client.receive_json())["success"]
    await client.send_json_auto_id({"type": "neonplan3d/building/get"})
    got = (await client.receive_json())["result"]["building"]["floors"][0]["openings"]
    assert got[0]["wall"] == "fw1"

    building["floors"][0]["openings"] = [{**opening, "leaves": 3}]
    await client.send_json_auto_id({"type": "neonplan3d/building/save", "building": building})
    assert not (await client.receive_json())["success"]


async def test_furniture_links_default_to_automatic(hass: HomeAssistant, hass_ws_client) -> None:
    await _setup(hass)
    client = await hass_ws_client(hass)
    building = copy.deepcopy(BUILDING)
    item = {
        "id": "m1",
        "type": "tv_board",
        "x": 1,
        "z": 1,
        "rotation": 0,
        "w": 1.8,
        "d": 0.4,
        "h": 0.5,
        "variant": None,
    }
    building["floors"][0]["furniture"] = [item, {**item, "id": "m2", "entity": "media_player.tv", "power": "none"}]
    await client.send_json_auto_id({"type": "neonplan3d/building/save", "building": building})
    assert (await client.receive_json())["success"]
    await client.send_json_auto_id({"type": "neonplan3d/building/get"})
    got = (await client.receive_json())["result"]["building"]["floors"][0]["furniture"]
    assert (got[0]["entity"], got[0]["power"]) == (None, None)
    assert (got[1]["entity"], got[1]["power"]) == ("media_player.tv", "none")


async def test_screen_pictures_keep_their_images(hass: HomeAssistant, hass_ws_client) -> None:
    """Images used by screen picture rules are not dropped as unused when the building is saved."""
    await _setup(hass)
    client = await hass_ws_client(hass)
    await client.send_json_auto_id({"type": "neonplan3d/image/set", "image_id": "pic1", "data": IMAGE})
    assert (await client.receive_json())["success"]
    building = copy.deepcopy(BUILDING)
    item = {
        "id": "m1",
        "type": "tv_wall",
        "x": 1,
        "z": 1,
        "rotation": 0,
        "w": 1.4,
        "d": 0.1,
        "h": 0.8,
        "variant": None,
        "pictures": [
            {"entity": "binary_sensor.cat", "state": "on", "image": "pic1"},
            {"entity": "sun.sun", "state": "*", "image": "https://x/y.png"},
        ],
    }
    building["floors"][0]["furniture"] = [item]
    await client.send_json_auto_id({"type": "neonplan3d/building/save", "building": building})
    assert (await client.receive_json())["success"]
    await client.send_json_auto_id({"type": "neonplan3d/image/get", "image_id": "pic1"})
    assert (await client.receive_json())["result"]["data"] == IMAGE
    await client.send_json_auto_id({"type": "neonplan3d/building/get"})
    got = (await client.receive_json())["result"]["building"]["floors"][0]["furniture"][0]
    assert [r["image"] for r in got["pictures"]] == ["pic1", "https://x/y.png"]


async def test_placement_mount_defaults_to_none(hass: HomeAssistant, hass_ws_client) -> None:
    await _setup(hass)
    client = await hass_ws_client(hass)
    building = copy.deepcopy(BUILDING)
    building["floors"][0]["placements"] = [
        {"entity_id": "light.a", "x": 1, "z": 1, "y": None},
        {"entity_id": "light.b", "x": 2, "z": 1, "y": None, "mount": "floor"},
    ]
    await client.send_json_auto_id({"type": "neonplan3d/building/save", "building": building})
    assert (await client.receive_json())["success"]
    await client.send_json_auto_id({"type": "neonplan3d/building/get"})
    got = (await client.receive_json())["result"]["building"]["floors"][0]["placements"]
    assert [p["mount"] for p in got] == [None, "floor"]


async def test_energy_and_presence_get_defaults(hass: HomeAssistant, hass_ws_client) -> None:
    await _setup(hass)
    client = await hass_ws_client(hass)
    await client.send_json_auto_id({"type": "neonplan3d/building/save", "building": BUILDING})
    assert (await client.receive_json())["success"]
    await client.send_json_auto_id({"type": "neonplan3d/building/get"})
    got = (await client.receive_json())["result"]["building"]
    assert got["energy"]["meter"] is None and got["energy"]["grid_invert"] is False
    assert got["presence"] == []

    building = copy.deepcopy(BUILDING)
    building["energy"] = {"meter": {"floor_id": "f1", "x": 1, "z": 2}, "grid": "sensor.grid"}
    building["presence"] = [{"person": "person.mia", "sensor": "sensor.mia_area"}]
    await client.send_json_auto_id({"type": "neonplan3d/building/save", "building": building})
    assert (await client.receive_json())["success"]
    await client.send_json_auto_id({"type": "neonplan3d/building/get"})
    got = (await client.receive_json())["result"]["building"]
    assert got["energy"]["meter"] == {"floor_id": "f1", "x": 1, "z": 2}
    assert got["energy"]["grid"] == "sensor.grid" and got["energy"]["solar"] is None
    assert got["presence"] == [{"person": "person.mia", "sensor": "sensor.mia_area"}]


async def test_unknown_fields_from_newer_frontends_are_kept(hass: HomeAssistant, hass_ws_client) -> None:
    await _setup(hass)
    client = await hass_ws_client(hass)
    building = copy.deepcopy(BUILDING)
    building["future_setting"] = {"a": 1}
    building["floors"][0]["rooms"][0]["ceiling_color"] = "#ffffff"
    await client.send_json_auto_id({"type": "neonplan3d/building/save", "building": building})
    assert (await client.receive_json())["success"]
    await client.send_json_auto_id({"type": "neonplan3d/building/get"})
    got = (await client.receive_json())["result"]["building"]
    assert got["future_setting"] == {"a": 1}
    assert got["floors"][0]["rooms"][0]["ceiling_color"] == "#ffffff"


async def test_restore_points(hass: HomeAssistant, hass_ws_client, hass_storage) -> None:
    await _setup(hass)
    client = await hass_ws_client(hass)
    await client.send_json_auto_id({"type": "neonplan3d/building/save", "building": BUILDING})
    assert (await client.receive_json())["success"]
    # an empty building is no restore point
    await client.send_json_auto_id({"type": "neonplan3d/history/list"})
    assert (await client.receive_json())["result"]["snapshots"] == []

    changed = copy.deepcopy(BUILDING)
    changed["floors"][0]["rooms"][0]["name"] = "Changed"
    await client.send_json_auto_id({"type": "neonplan3d/building/save", "building": changed})
    assert (await client.receive_json())["success"]
    await client.send_json_auto_id({"type": "neonplan3d/history/list"})
    snapshots = (await client.receive_json())["result"]["snapshots"]
    assert len(snapshots) == 1 and snapshots[0]["rooms"] == 1

    await client.send_json_auto_id({"type": "neonplan3d/history/restore", "snapshot_id": snapshots[0]["id"]})
    assert (await client.receive_json())["success"]
    await client.send_json_auto_id({"type": "neonplan3d/building/get"})
    got = (await client.receive_json())["result"]["building"]
    assert got["floors"][0]["rooms"][0]["name"] == "Living"
    # the state before restoring is a restore point as well
    await client.send_json_auto_id({"type": "neonplan3d/history/list"})
    assert len((await client.receive_json())["result"]["snapshots"]) == 2
    await hass.async_block_till_done()
    assert STORAGE_KEY_HISTORY in hass_storage


async def test_outdoor_roof_and_north_get_defaults(hass: HomeAssistant, hass_ws_client) -> None:
    await _setup(hass)
    client = await hass_ws_client(hass)
    building = copy.deepcopy(BUILDING)
    building["floors"][0]["outdoor"] = [{"id": "o1", "type": "lawn", "points": [[0, 0], [1, 0], [1, 1]]}]
    await client.send_json_auto_id({"type": "neonplan3d/building/save", "building": building})
    assert (await client.receive_json())["success"]
    await client.send_json_auto_id({"type": "neonplan3d/building/get"})
    got = (await client.receive_json())["result"]["building"]
    assert got["settings"]["north"] == 0
    assert got["settings"]["roof"] == {
        "type": "none",
        "pitch": 35,
        "overhang": 0.4,
        "ridge": None,
        "sections": [],
        "solar": [],
        "strings": [],
        "windows": [],
        "hologram": None,
        "cables": [],
    }
    assert got["floors"][0]["outdoor"][0]["type"] == "lawn"
    assert got["floors"][0]["ha_floor"] is None
    assert got["floors"][0]["rooms"][0]["panel"] == []

    bad = copy.deepcopy(building)
    bad["floors"][0]["outdoor"][0]["type"] = "volcano"
    await client.send_json_auto_id({"type": "neonplan3d/building/save", "building": bad})
    assert not (await client.receive_json())["success"]


async def test_invalid_building_is_rejected(hass: HomeAssistant, hass_ws_client) -> None:
    await _setup(hass)
    client = await hass_ws_client(hass)
    bad = copy.deepcopy(BUILDING)
    bad["floors"][0]["rooms"][0]["points"] = [[0, 0], [1, 1]]
    await client.send_json_auto_id({"type": "neonplan3d/building/save", "building": bad})
    result = await client.receive_json()
    assert not result["success"]
    assert result["error"]["code"] == "invalid_format"


async def test_changes_require_admin(hass: HomeAssistant, hass_ws_client, hass_read_only_access_token) -> None:
    await _setup(hass)
    client = await hass_ws_client(hass, hass_read_only_access_token)
    await client.send_json_auto_id({"type": "neonplan3d/building/save", "building": BUILDING})
    result = await client.receive_json()
    assert not result["success"]
    assert result["error"]["code"] == "unauthorized"
    await client.send_json_auto_id({"type": "neonplan3d/image/set", "image_id": "img1", "data": IMAGE})
    result = await client.receive_json()
    assert result["error"]["code"] == "unauthorized"
    # reading is allowed
    await client.send_json_auto_id({"type": "neonplan3d/building/get"})
    result = await client.receive_json()
    assert result["success"]


async def test_images(hass: HomeAssistant, hass_ws_client) -> None:
    await _setup(hass)
    client = await hass_ws_client(hass)
    await client.send_json_auto_id({"type": "neonplan3d/image/set", "image_id": "img1", "data": IMAGE})
    assert (await client.receive_json())["success"]
    await client.send_json_auto_id({"type": "neonplan3d/image/get", "image_id": "img1"})
    assert (await client.receive_json())["result"]["data"] == IMAGE
    await client.send_json_auto_id({"type": "neonplan3d/image/set", "image_id": "img2", "data": "not an image"})
    assert not (await client.receive_json())["success"]
    await client.send_json_auto_id({"type": "neonplan3d/image/delete", "image_id": "img1"})
    assert (await client.receive_json())["success"]
    await client.send_json_auto_id({"type": "neonplan3d/image/get", "image_id": "img1"})
    assert (await client.receive_json())["error"]["code"] == "not_found"


async def test_unused_images_are_dropped_on_load(hass: HomeAssistant, hass_storage) -> None:
    hass_storage[STORAGE_KEY_BUILDING] = {
        "version": 1,
        "key": STORAGE_KEY_BUILDING,
        "data": {"revision": 3, "building": BUILDING},
    }
    hass_storage[STORAGE_KEY_IMAGES] = {
        "version": 1,
        "key": STORAGE_KEY_IMAGES,
        "data": {"images": {"img1": IMAGE, "old": IMAGE}},
    }
    await _setup(hass)
    data = hass.data[DOMAIN]
    assert data.revision == 3
    assert data.get_image("img1") == IMAGE
    assert data.get_image("old") is None


async def test_remove_entry_keeps_the_stores(hass: HomeAssistant, hass_ws_client, hass_storage) -> None:
    """Removing the integration must never delete the plan (re-adding it finds everything again)."""
    entry = await _setup(hass)
    client = await hass_ws_client(hass)
    await client.send_json_auto_id({"type": "neonplan3d/building/save", "building": BUILDING})
    await client.receive_json()
    await client.send_json_auto_id({"type": "neonplan3d/image/set", "image_id": "img1", "data": IMAGE})
    await client.receive_json()
    await hass.async_block_till_done()
    assert STORAGE_KEY_BUILDING in hass_storage
    assert STORAGE_KEY_IMAGES in hass_storage

    assert await hass.config_entries.async_remove(entry.entry_id)
    await hass.async_block_till_done()
    assert STORAGE_KEY_BUILDING in hass_storage
    assert STORAGE_KEY_IMAGES in hass_storage
    assert DOMAIN not in hass.data


async def test_panel_and_card_are_registered_and_removed(hass: HomeAssistant, mock_frontend) -> None:
    entry = await _setup(hass)
    mock_frontend["register"].assert_awaited_once()
    assert mock_frontend["register"].await_args.kwargs["frontend_url_path"] == "neonplan3d"
    url = mock_frontend["add_js"].call_args.args[1]
    assert url.startswith("/neonplan3d_static/neonplan3d.js?v=")

    assert await hass.config_entries.async_unload(entry.entry_id)
    await hass.async_block_till_done()
    mock_frontend["remove_panel"].assert_called_once_with(hass, "neonplan3d")
    mock_frontend["remove_js"].assert_called_once_with(hass, url)
