"""Furniture packs: signature check, content check and import through the websocket."""

from __future__ import annotations

import base64
import copy
import json
from types import SimpleNamespace

from cryptography.hazmat.primitives import serialization
from cryptography.hazmat.primitives.asymmetric.ed25519 import Ed25519PrivateKey
from homeassistant.core import HomeAssistant
from homeassistant.setup import async_setup_component
import pytest
from pytest_homeassistant_custom_component.common import MockConfigEntry
import voluptuous as vol

from custom_components.neonplan3d import packs
from custom_components.neonplan3d.const import DOMAIN

PAYLOAD = {
    "format": "fp3dpack",
    "version": 1,
    "id": "test.starter",
    "name": "Starter",
    "publisher": "Test",
    "items": [
        {
            "id": "cube_chair",
            "name": {"de": "Würfelsessel", "en": "Cube chair"},
            "size": [0.8, 0.8, 0.75],
            "parts": [
                {"shape": "box", "x": 0, "z": 0, "w": 1, "d": 1, "y": 0, "h": 0.55, "color": "fabric"},
                {"shape": "box", "x": 0, "z": -0.4, "w": 1, "d": 0.2, "y": 0.55, "h": 0.45, "color": "#223355"},
            ],
        }
    ],
}


def _key() -> tuple[Ed25519PrivateKey, dict[str, str]]:
    private = Ed25519PrivateKey.generate()
    raw = private.public_key().public_bytes(serialization.Encoding.Raw, serialization.PublicFormat.Raw)
    return private, {packs.key_id(raw): base64.b64encode(raw).decode()}


def _sign(private: Ed25519PrivateKey, keys: dict[str, str], payload: dict) -> str:
    sig = base64.b64encode(private.sign(packs.canonical(payload))).decode()
    return json.dumps({"payload": payload, "signature": {"key": next(iter(keys)), "sig": sig}})


def test_signed_pack_is_accepted() -> None:
    private, keys = _key()
    payload = packs.verify_pack(_sign(private, keys, PAYLOAD), keys)
    assert payload["items"][0]["parts"][0]["edges"] is False
    assert payload["licensee"] is None


def test_changed_or_foreign_packs_are_rejected() -> None:
    private, keys = _key()
    text = _sign(private, keys, PAYLOAD)
    # a changed file breaks the signature
    changed = json.loads(text)
    changed["payload"]["name"] = "Mine now"
    with pytest.raises(packs.PackError) as err:
        packs.verify_pack(json.dumps(changed), keys)
    assert err.value.code == "bad_signature"
    # signed with another key: the publisher is unknown
    other, other_keys = _key()
    with pytest.raises(packs.PackError) as err:
        packs.verify_pack(_sign(other, other_keys, PAYLOAD), keys)
    assert err.value.code == "unknown_publisher"
    # another key claiming the known key id
    forged = json.loads(_sign(other, other_keys, PAYLOAD))
    forged["signature"]["key"] = next(iter(keys))
    with pytest.raises(packs.PackError) as err:
        packs.verify_pack(json.dumps(forged), keys)
    assert err.value.code == "bad_signature"
    # without a signature, or not a pack at all
    with pytest.raises(packs.PackError) as err:
        packs.verify_pack(json.dumps({"payload": PAYLOAD}), keys)
    assert err.value.code == "unsigned"
    with pytest.raises(packs.PackError) as err:
        packs.verify_pack("{}", keys)
    assert err.value.code == "not_a_pack"


def test_sloped_and_lying_parts_are_accepted() -> None:
    private, keys = _key()
    shaped = copy.deepcopy(PAYLOAD)
    box = {"x": 0, "z": 0.2, "w": 1, "d": 0.6, "y": 0, "h": 0.5, "color": "body"}
    shaped["items"][0]["parts"] = [
        {"shape": "loft", **box, "tx": 0, "tz": 0.1, "tw": 0.9, "td": 0.2, "edges": "glow"},
        {"shape": "cyl", "axis": "x", **box, "edges": "faint"},
    ]
    payload = packs.verify_pack(_sign(private, keys, shaped), keys)
    assert payload["items"][0]["parts"][0]["edges"] == "glow"
    assert payload["items"][0]["parts"][1]["axis"] == "x"
    bad = copy.deepcopy(shaped)
    bad["items"][0]["parts"][1]["axis"] = "w"
    with pytest.raises(packs.PackError):
        packs.verify_pack(_sign(private, keys, bad), keys)


def test_shop_signing_from_the_canonical_template() -> None:
    """The shop replaces the last "licensee":null of the canonical template with the buyer's name and
    signs those bytes (tools/shop/ms-np-sign.php); the result must verify and carry the name."""
    private, keys = _key()
    template = packs.canonical({**copy.deepcopy(PAYLOAD), "licensee": None})
    name = 'Jürgen Müller-Lüdenscheidt "Jü"'
    marker = b'"licensee":null'
    at = template.rfind(marker)
    assert at > 0
    encoded = json.dumps(name, ensure_ascii=False).encode()
    signed = template[:at] + b'"licensee":' + encoded + template[at + len(marker) :]
    sig = base64.b64encode(private.sign(signed)).decode()
    text = '{"payload":' + signed.decode() + ',"signature":{"key":"' + next(iter(keys)) + '","sig":"' + sig + '"}}'
    payload = packs.verify_pack(text, keys)
    assert payload["licensee"] == name
    # the same bytes, canonicalised again by the integration, are what was signed
    assert packs.canonical(json.loads(text)["payload"]) == signed


def test_pack_content_is_checked() -> None:
    private, keys = _key()
    heavy = copy.deepcopy(PAYLOAD)
    heavy["items"][0]["parts"] *= 31  # more than 60 parts
    with pytest.raises(packs.PackError) as err:
        packs.verify_pack(_sign(private, keys, heavy), keys)
    assert err.value.code == "invalid_content"
    twice = copy.deepcopy(PAYLOAD)
    twice["items"].append(copy.deepcopy(twice["items"][0]))
    with pytest.raises(packs.PackError):
        packs.verify_pack(_sign(private, keys, twice), keys)


async def test_import_list_and_remove(hass: HomeAssistant, hass_ws_client, monkeypatch: pytest.MonkeyPatch) -> None:
    private, keys = _key()
    monkeypatch.setattr(packs, "PACK_PUBLIC_KEYS", keys)
    await async_setup_component(hass, "http", {})
    entry = MockConfigEntry(domain=DOMAIN, data={})
    entry.add_to_hass(hass)
    assert await hass.config_entries.async_setup(entry.entry_id)
    await hass.async_block_till_done()
    client = await hass_ws_client(hass)

    await client.send_json_auto_id(
        {"type": "neonplan3d/packs/import", "pack": _sign(private, keys, {**PAYLOAD, "licensee": "Anna"})}
    )
    result = await client.receive_json()
    assert result["success"]
    assert result["result"] == {
        "id": "test.starter",
        "name": "Starter",
        "publisher": "Test",
        "licensee": "Anna",
        "items": 1,
    }

    await client.send_json_auto_id({"type": "neonplan3d/packs/import", "pack": "{}"})
    result = await client.receive_json()
    assert not result["success"] and result["error"]["code"] == "not_a_pack"

    await client.send_json_auto_id({"type": "neonplan3d/packs/list"})
    listed = (await client.receive_json())["result"]["packs"]
    assert [p["id"] for p in listed] == ["test.starter"]
    assert listed[0]["items"][0]["name"]["de"] == "Würfelsessel"

    await client.send_json_auto_id({"type": "neonplan3d/packs/remove", "pack_id": "test.starter"})
    assert (await client.receive_json())["success"]
    await client.send_json_auto_id({"type": "neonplan3d/packs/list"})
    assert (await client.receive_json())["result"]["packs"] == []


async def test_module_code_runs_only_after_an_admin_approved_it(
    hass: HomeAssistant, hass_ws_client, monkeypatch: pytest.MonkeyPatch
) -> None:
    """HACS review: module code is shown and approved by an admin before it runs, and an update never replaces
    the running code by itself."""
    private, keys = _key()
    monkeypatch.setattr(packs, "PACK_PUBLIC_KEYS", keys)
    await async_setup_component(hass, "http", {})
    entry = MockConfigEntry(domain=DOMAIN, data={})
    entry.add_to_hass(hass)
    assert await hass.config_entries.async_setup(entry.entry_id)
    await hass.async_block_till_done()
    client = await hass_ws_client(hass)

    async def call(**msg):
        await client.send_json_auto_id(msg)
        return await client.receive_json()

    module = {**PAYLOAD, "id": "mastershort.window_watch", "items": [], "release": 1}
    v1 = {**module, "module": {"api": 1, "kind": "stage", "code": "export default { api: 1, id: 'v1' };"}}
    res = await call(type="neonplan3d/packs/import", pack=_sign(private, keys, v1))
    assert res["success"] and res["result"]["approval"] is True
    listed = (await call(type="neonplan3d/packs/list"))["result"]["packs"][0]
    assert listed["module"]["approved"] is False and "code" not in listed["module"]
    # not approved: its code is not served
    res = await call(type="neonplan3d/modules/code", pack_id="mastershort.window_watch")
    assert res["error"]["code"] == "not_approved"
    # the admin reads it, then approves exactly that code
    review = (await call(type="neonplan3d/modules/review", pack_id="mastershort.window_watch"))["result"]
    assert "id: 'v1'" in review["code"]
    assert not (await call(type="neonplan3d/modules/approve", pack_id="mastershort.window_watch", sha="0" * 64))[
        "success"
    ]
    assert (await call(type="neonplan3d/modules/approve", pack_id="mastershort.window_watch", sha=review["sha"]))[
        "success"
    ]
    assert (
        "id: 'v1'" in (await call(type="neonplan3d/modules/code", pack_id="mastershort.window_watch"))["result"]["code"]
    )

    # a new release waits beside the running code
    v2 = {**module, "release": 2, "module": {"api": 1, "kind": "stage", "code": "export default { api: 1, id: 'v2' };"}}
    assert (await call(type="neonplan3d/packs/import", pack=_sign(private, keys, v2)))["result"]["approval"] is True
    listed = (await call(type="neonplan3d/packs/list"))["result"]["packs"][0]
    assert listed["module"]["approved"] is True and listed["release"] == 1
    assert listed["pending"]["release"] == 2
    assert (
        "id: 'v1'" in (await call(type="neonplan3d/modules/code", pack_id="mastershort.window_watch"))["result"]["code"]
    )
    pending = (await call(type="neonplan3d/modules/review", pack_id="mastershort.window_watch", pending=True))["result"]
    assert "id: 'v2'" in pending["code"]
    assert (await call(type="neonplan3d/modules/approve", pack_id="mastershort.window_watch", sha=pending["sha"]))[
        "success"
    ]
    listed = (await call(type="neonplan3d/packs/list"))["result"]["packs"][0]
    assert listed["release"] == 2 and listed["module"]["approved"] is True and "pending" not in listed
    assert (
        "id: 'v2'" in (await call(type="neonplan3d/modules/code", pack_id="mastershort.window_watch"))["result"]["code"]
    )


def test_publisher_key_is_configured() -> None:
    # the published integration accepts packs of the publisher's key only
    assert len(packs.PACK_PUBLIC_KEYS) >= 1
    for kid, public in packs.PACK_PUBLIC_KEYS.items():
        assert packs.key_id(base64.b64decode(public)) == kid


def test_turned_parts_and_stairs_holes_are_accepted() -> None:
    """A part may turn around its centre (rot) and a stairs item may cut the floor above (hole)."""
    item = copy.deepcopy(PAYLOAD["items"][0])
    item["hole"] = True
    item["parts"][0]["rot"] = 27.5
    clean = packs.validate_payload({**PAYLOAD, "items": [item]})
    assert clean["items"][0]["hole"] is True
    assert clean["items"][0]["parts"][0]["rot"] == 27.5
    with pytest.raises(packs.PackError):
        item["parts"][0]["rot"] = 400
        packs.validate_payload({**PAYLOAD, "items": [item]})


def test_library_fields_are_accepted_and_checked() -> None:
    """A pack may say what an item is, which rooms it is for and which variants belong together (1.23)."""
    library = {"group": "seating", "room": ["living", "kids"], "tags": ["cube", "kids"], "family": "cube_chair"}
    item = {**PAYLOAD["items"][0], **library, "variant": {"de": "80", "en": "80"}}
    clean = packs.validate_payload({**PAYLOAD, "items": [item]})
    assert clean["items"][0]["group"] == "seating"
    assert clean["items"][0]["room"] == ["living", "kids"]
    assert clean["items"][0]["variant"] == {"de": "80", "en": "80"}
    with pytest.raises(packs.PackError):
        packs.validate_payload({**PAYLOAD, "items": [{**item, "room": "living"}]})
    with pytest.raises(packs.PackError):
        packs.validate_payload({**PAYLOAD, "items": [{**item, "group": "Not An Id"}]})


def test_feature_packs_need_no_items_but_a_pack_needs_something() -> None:
    """A feature pack unlocks Pro features without furniture; an empty pack is refused."""
    pro = {**PAYLOAD, "id": "test.pro", "items": [], "features": ["camera_cockpit", "weather"]}
    assert packs.validate_payload(pro)["features"] == ["camera_cockpit", "weather"]
    with pytest.raises(packs.PackError):
        packs.validate_payload({**PAYLOAD, "items": []})
    # a Pro add-on newer than this installation asks for an update (#218)
    with pytest.raises(packs.PackError) as err:
        packs.validate_payload({**pro, "features": ["some_future_addon"]})
    assert err.value.code == "needs_update"
    assert err.value.detail == "some_future_addon"


def test_studio_key_signs_studio_furniture_only(monkeypatch: pytest.MonkeyPatch) -> None:
    """The Möbel-Studio key may sign "studio.*" furniture packs, never Pro features or other packs."""
    private, keys = _key()
    kid = next(iter(keys))
    monkeypatch.setattr(packs, "STUDIO_KEYS", {kid})
    studio = {**PAYLOAD, "id": "studio.abc123"}
    assert packs.verify_pack(_sign(private, keys, studio), keys)["id"] == "studio.abc123"
    for bad in ({**PAYLOAD, "id": "test.other"}, {**studio, "features": ["camera_cockpit"]}):
        with pytest.raises(packs.PackError) as err:
            packs.verify_pack(_sign(private, keys, bad), keys)
        assert err.value.code == "bad_signature"


def test_a_newer_part_shape_asks_for_an_update() -> None:
    """An unknown value of a newer pack asks for an update (voluptuous and Probatio); other faults stay errors."""
    item = copy.deepcopy(PAYLOAD["items"][0])
    item["parts"][0]["shape"] = "some_future_shape"
    with pytest.raises(packs.PackError) as err:
        packs.validate_payload({**PAYLOAD, "items": [item]})
    assert err.value.code == "needs_update"
    item["parts"][0]["shape"] = "box"
    item["parts"][0]["w"] = "wide"
    with pytest.raises(packs.PackError) as err:
        packs.validate_payload({**PAYLOAD, "items": [item]})
    assert err.value.code == "invalid_content"


def test_fan_blades_spin_and_an_unknown_part_field_asks_for_an_update() -> None:
    """Turning parts (#1084) are known; a part field of a newer pack release asks for an update, not "invalid"."""
    item = copy.deepcopy(PAYLOAD["items"][0])
    item["parts"][0]["spin"] = "y"
    assert packs.validate_payload({**PAYLOAD, "items": [item]})["items"][0]["parts"][0]["spin"] == "y"
    item["parts"][0]["spin"] = "x"
    with pytest.raises(packs.PackError) as err:
        packs.validate_payload({**PAYLOAD, "items": [item]})
    assert err.value.code == "needs_update"
    del item["parts"][0]["spin"]
    item["parts"][0]["some_future_field"] = 1
    with pytest.raises(packs.PackError) as err:
        packs.validate_payload({**PAYLOAD, "items": [item]})
    assert err.value.code == "needs_update"


def test_probatio_marks_an_unknown_value_by_its_code() -> None:
    """Probatio (Home Assistant 2026.9+) words its errors its own way but gives the code "not_in_list"."""
    probatio = SimpleNamespace(errors=[SimpleNamespace(code="not_in_list")])
    assert packs._unknown_value(probatio)  # type: ignore[arg-type]
    assert not packs._unknown_value(vol.MultipleInvalid([vol.Invalid("expected float")]))


def test_a_module_pack_needs_no_furniture_and_its_code_is_served_apart() -> None:
    """A module pack (code the shop delivers) passes without items; the studio key may not sign one."""
    module = {
        **PAYLOAD,
        "id": "mastershort.voice_answers",
        "items": [],
        "module": {"api": 1, "kind": "voice", "code": "export default { api: 1 };"},
    }
    clean = packs.validate_payload(module)
    assert clean["module"]["kind"] == "voice"
    with pytest.raises(packs.PackError) as err:
        packs.validate_payload({**module, "module": {"api": 2, "kind": "voice", "code": "x"}})
    assert err.value.code == "needs_update"
    with pytest.raises(packs.PackError) as err:
        packs.validate_payload({**module, "module": {"api": 1, "kind": "editor", "code": "x"}})
    assert err.value.code == "needs_update"
    # the pack list leaves the code out, the code command returns it
    from custom_components.neonplan3d.websocket import _without_code

    slim = _without_code({**clean, "source": clean})
    assert "code" not in slim["module"] and "code" not in slim["source"]["module"]
    assert slim["module"]["api"] == 1
