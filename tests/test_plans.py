"""Several floor plans in one installation: the main plan stays as it was, further plans have stores of their own."""

from __future__ import annotations

import copy
import time

from homeassistant.core import HomeAssistant

from custom_components.neonplan3d.const import (
    DOMAIN,
    STORAGE_KEY_BUILDING,
    STORAGE_KEY_IMAGES,
    STORAGE_KEY_PLANS,
)

from .test_init import BUILDING, IMAGE, _setup


def _main_stored(hass_storage, building=BUILDING, revision=3) -> None:
    hass_storage[STORAGE_KEY_BUILDING] = {
        "version": 1,
        "minor_version": 2,
        "key": STORAGE_KEY_BUILDING,
        "data": {"revision": revision, "building": building},
    }


async def _ws(client, **msg):
    await client.send_json_auto_id(msg)
    return await client.receive_json()


async def test_existing_plan_is_the_main_plan_untouched(hass: HomeAssistant, hass_ws_client, hass_storage) -> None:
    _main_stored(hass_storage)
    before = copy.deepcopy(hass_storage[STORAGE_KEY_BUILDING])
    await _setup(hass)
    client = await hass_ws_client(hass)
    listed = (await _ws(client, type="neonplan3d/plans/list"))["result"]
    assert [p["id"] for p in listed["plans"]] == ["main"]
    assert listed["plans"][0]["rooms"] == 1 and listed["trash"] == [] and listed["locate_plan"] == "main"
    # no plan given: the main plan, as older frontends ask
    got = (await _ws(client, type="neonplan3d/building/get"))["result"]
    assert got["revision"] == 3 and got["plan"] == "main"
    assert got["building"]["floors"][0]["name"] == "Ground floor"
    # nothing was written: no index, the building store as it was
    assert STORAGE_KEY_PLANS not in hass_storage
    # (the test storage hands out the stored dict itself, so the loaded and filled-in building shows there too)
    assert hass_storage[STORAGE_KEY_BUILDING]["data"]["revision"] == before["data"]["revision"]


async def test_create_copy_rename_order_and_save(hass: HomeAssistant, hass_ws_client, hass_storage) -> None:
    _main_stored(hass_storage)
    await _setup(hass)
    client = await hass_ws_client(hass)
    empty = (await _ws(client, type="neonplan3d/plans/create", name="Gartenhaus", icon="🌳"))["result"]["plan"]
    copied = (await _ws(client, type="neonplan3d/plans/create", name="Kopie", copy_of="main"))["result"]["plan"]
    assert empty != copied and empty.startswith("p")

    got = (await _ws(client, type="neonplan3d/building/get", plan=empty))["result"]
    assert got["building"]["floors"] == [] and got["plan"] == empty
    got = (await _ws(client, type="neonplan3d/building/get", plan=copied))["result"]
    assert got["building"]["floors"][0]["name"] == "Ground floor"

    # a save goes to its plan only; the subscription of that plan hears it, the main plan's does not
    sub_main = await _ws(client, type="neonplan3d/building/subscribe")
    sub_copy = await _ws(client, type="neonplan3d/building/subscribe", plan=copied)
    assert sub_main["success"] and sub_copy["success"]
    changed = copy.deepcopy(got["building"])
    changed["floors"][0]["name"] = "Changed in the copy"
    # the event can come before the save's result
    await client.send_json_auto_id({"type": "neonplan3d/building/save", "building": changed, "plan": copied})
    first, second = await client.receive_json(), await client.receive_json()
    saved, event = (first, second) if first["type"] == "result" else (second, first)
    assert saved["success"]
    assert event["id"] == sub_copy["id"] and event["event"]["plan"] == copied
    main = (await _ws(client, type="neonplan3d/building/get"))["result"]
    assert main["building"]["floors"][0]["name"] == "Ground floor"
    assert f"{STORAGE_KEY_BUILDING}.{copied}" in hass_storage

    assert (await _ws(client, type="neonplan3d/plans/update", plan="main", name="Haus"))["success"]
    assert (await _ws(client, type="neonplan3d/plans/order", plans=[empty, "main", copied]))["success"]
    listed = (await _ws(client, type="neonplan3d/plans/list"))["result"]
    assert [p["id"] for p in listed["plans"]] == [empty, "main", copied]
    assert listed["plans"][1]["name"] == "Haus" and listed["plans"][0]["icon"] == "🌳"

    # an unknown plan is refused
    missing = await _ws(client, type="neonplan3d/building/get", plan="nope")
    assert not missing["success"] and missing["error"]["code"] == "not_found"


async def test_delete_goes_to_the_bin_and_comes_back(hass: HomeAssistant, hass_ws_client, hass_storage) -> None:
    await _setup(hass)
    client = await hass_ws_client(hass)
    plan = (await _ws(client, type="neonplan3d/plans/create", name="Ferienwohnung"))["result"]["plan"]
    assert not (await _ws(client, type="neonplan3d/plans/delete", plan="main"))["success"]
    assert (await _ws(client, type="neonplan3d/plans/delete", plan=plan))["success"]
    listed = (await _ws(client, type="neonplan3d/plans/list"))["result"]
    assert [p["id"] for p in listed["plans"]] == ["main"]
    assert [p["id"] for p in listed["trash"]] == [plan] and listed["trash"][0]["deleted_at"]
    # its stores are still there
    assert f"{STORAGE_KEY_BUILDING}.{plan}" in hass_storage
    assert (await _ws(client, type="neonplan3d/plans/restore", plan=plan))["success"]
    listed = (await _ws(client, type="neonplan3d/plans/list"))["result"]
    assert [p["id"] for p in listed["plans"]] == ["main", plan] and listed["trash"] == []


async def test_the_bin_is_emptied_after_thirty_days(hass: HomeAssistant, hass_storage) -> None:
    old = time.time() - 31 * 86400
    hass_storage[STORAGE_KEY_PLANS] = {
        "version": 1,
        "key": STORAGE_KEY_PLANS,
        "data": {
            "plans": [{"id": "main", "name": None}],
            "trash": [
                {"id": "pold", "name": "Alt", "deleted_at": old},
                {"id": "pnew", "name": "Neu", "deleted_at": time.time()},
            ],
        },
    }
    for pid in ("pold", "pnew"):
        _key = f"{STORAGE_KEY_BUILDING}.{pid}"
        hass_storage[_key] = {
            "version": 1,
            "minor_version": 2,
            "key": _key,
            "data": {"revision": 1, "building": BUILDING},
        }
    await _setup(hass)
    await hass.async_block_till_done()
    data = hass.data[DOMAIN]
    assert [e["id"] for e in data.plan_list()["trash"]] == ["pnew"]
    assert f"{STORAGE_KEY_BUILDING}.pold" not in hass_storage
    assert f"{STORAGE_KEY_BUILDING}.pnew" in hass_storage


async def test_images_of_other_plans_are_kept(hass: HomeAssistant, hass_ws_client, hass_storage) -> None:
    # the main plan has no picture, a second plan shows img1
    empty_main = {**copy.deepcopy(BUILDING), "floors": []}
    _main_stored(hass_storage, empty_main)
    hass_storage[STORAGE_KEY_PLANS] = {
        "version": 1,
        "key": STORAGE_KEY_PLANS,
        "data": {"plans": [{"id": "main"}, {"id": "pgarage", "name": "Garage"}], "trash": []},
    }
    key = f"{STORAGE_KEY_BUILDING}.pgarage"
    hass_storage[key] = {"version": 1, "minor_version": 2, "key": key, "data": {"revision": 1, "building": BUILDING}}
    hass_storage[STORAGE_KEY_IMAGES] = {
        "version": 1,
        "key": STORAGE_KEY_IMAGES,
        "data": {"images": {"img1": IMAGE, "old": IMAGE}},
    }
    await _setup(hass)
    data = hass.data[DOMAIN]
    assert data.get_image("img1") == IMAGE and data.get_image("old") is None
    # the main plan lets go of img1: the garage still shows it, so it stays
    client = await hass_ws_client(hass)
    assert (await _ws(client, type="neonplan3d/image/delete", image_id="img1"))["success"]
    assert data.get_image("img1") == IMAGE
    # the garage lets go of it: now it goes
    assert (await _ws(client, type="neonplan3d/image/delete", image_id="img1", plan="pgarage"))["success"]
    assert data.get_image("img1") is None


async def test_restore_points_per_plan(hass: HomeAssistant, hass_ws_client) -> None:
    await _setup(hass)
    client = await hass_ws_client(hass)
    plan = (await _ws(client, type="neonplan3d/plans/create", name="Garage", building=BUILDING))["result"]["plan"]
    assert (await _ws(client, type="neonplan3d/history/snapshot", plan=plan))["success"]
    own = (await _ws(client, type="neonplan3d/history/list", plan=plan))["result"]["snapshots"]
    main = (await _ws(client, type="neonplan3d/history/list"))["result"]["snapshots"]
    assert len(own) == 1 and own[0]["rooms"] == 1 and main == []


async def test_backup_version_two_carries_every_plan(hass: HomeAssistant, hass_ws_client) -> None:
    await _setup(hass)
    client = await hass_ws_client(hass)
    plan = (await _ws(client, type="neonplan3d/plans/create", name="Garage", building=BUILDING))["result"]["plan"]
    site = {"on": True, "x": 12, "y": -3, "rot": 90}
    assert (await _ws(client, type="neonplan3d/plans/update", plan=plan, site=site))["success"]
    backup = (await _ws(client, type="neonplan3d/backup/export"))["result"]
    assert backup["version"] == 2 and [p["name"] for p in backup["plans"]] == ["Garage"]
    assert backup["plans"][0]["building"]["floors"][0]["name"] == "Ground floor"

    restored = await _ws(
        client,
        type="neonplan3d/backup/import",
        building=backup["building"],
        packs=[],
        main=backup["main"],
        plans=backup["plans"],
    )
    assert restored["success"], restored
    listed = (await _ws(client, type="neonplan3d/plans/list"))["result"]
    # the plan there was goes into the bin, the backup's comes back as a new plan
    assert [p["name"] for p in listed["plans"]] == [None, "Garage"]
    assert listed["plans"][1]["site"] == {"on": True, "x": 12.0, "y": -3.0, "rot": 90.0}
    assert [p["id"] for p in listed["trash"]] == [plan]

    # a version-1 backup touches the main plan only
    old = await _ws(client, type="neonplan3d/backup/import", building=BUILDING, packs=[])
    assert old["success"]
    assert len((await _ws(client, type="neonplan3d/plans/list"))["result"]["plans"]) == 2
