"""Shop connection: key activation, bound pack installs and the daily update check."""

from __future__ import annotations

import base64
import json

from cryptography.hazmat.primitives import serialization
from cryptography.hazmat.primitives.asymmetric.ed25519 import Ed25519PrivateKey
from homeassistant.core import HomeAssistant
from homeassistant.setup import async_setup_component
import pytest
from pytest_homeassistant_custom_component.common import MockConfigEntry
from pytest_homeassistant_custom_component.test_util.aiohttp import AiohttpClientMockResponse

from custom_components.neonplan3d import license as lic
from custom_components.neonplan3d import packs
from custom_components.neonplan3d.const import DOMAIN

PAYLOAD = {
    "format": "fp3dpack",
    "version": 1,
    "id": "shop.living",
    "name": "Wohnzimmer",
    "publisher": "Shop",
    "items": [
        {
            "id": "cube",
            "name": {"de": "Würfel", "en": "Cube"},
            "size": [0.5, 0.5, 0.5],
            "parts": [{"shape": "box", "x": 0, "z": 0, "w": 1, "d": 1, "y": 0, "h": 1, "color": "body"}],
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


def test_keys_are_normalised() -> None:
    assert lic.normalize_key("np-abcd-efgh-2345-6789") == "NP-ABCD-EFGH-2345-6789"
    assert lic.normalize_key(" NPABCDEFGH23456789 ") == "NP-ABCD-EFGH-2345-6789"
    with pytest.raises(lic.LicenseError) as err:
        lic.normalize_key("NP-ABCD")
    assert err.value.code == "invalid_key"


def test_bound_packs_are_only_accepted_by_their_installation() -> None:
    private, keys = _key()
    fp = packs.fingerprint("some-instance-id")
    assert len(fp) == 16
    bound = _sign(private, keys, {**PAYLOAD, "instance": fp, "release": 3})
    assert packs.verify_pack(bound, keys, instance=fp)["release"] == 3
    # no binding check without an instance (tools), refused on another installation
    assert packs.verify_pack(bound, keys)["instance"] == fp
    with pytest.raises(packs.PackError) as err:
        packs.verify_pack(bound, keys, instance=packs.fingerprint("other"))
    assert err.value.code == "wrong_instance"
    # an unbound pack is fine anywhere, and defaults to release 1
    free = packs.verify_pack(_sign(private, keys, PAYLOAD), keys, instance=fp)
    assert free["instance"] is None and free["release"] == 1


async def _setup(hass: HomeAssistant) -> None:
    await async_setup_component(hass, "http", {})
    entry = MockConfigEntry(domain=DOMAIN, data={})
    entry.add_to_hass(hass)
    assert await hass.config_entries.async_setup(entry.entry_id)
    await hass.async_block_till_done()


async def test_activate_install_and_update(hass: HomeAssistant, hass_ws_client, aioclient_mock, monkeypatch) -> None:
    private, keys = _key()
    monkeypatch.setattr(packs, "PACK_PUBLIC_KEYS", keys)
    await _setup(hass)
    client = await hass_ws_client(hass)
    fp = await lic.async_instance_fingerprint(hass)

    catalog = {
        "licensee": "Anna",
        "packs": [{"id": "shop.living", "name": "Wohnzimmer", "release": 1, "url": "https://shop/x"}],
    }
    aioclient_mock.post(f"{lic.SHOP_API}/catalog", json=catalog)
    aioclient_mock.post(
        f"{lic.SHOP_API}/pack", text=_sign(private, keys, {**PAYLOAD, "instance": fp, "licensee": "Anna"})
    )

    await client.send_json_auto_id({"type": "neonplan3d/license/get"})
    before = (await client.receive_json())["result"]
    assert before["instance"] == fp and not before["active"] and before["packs"] == []

    await client.send_json_auto_id({"type": "neonplan3d/license/activate", "key": "np-abcd-efgh-2345-6789"})
    result = await client.receive_json()
    assert result["success"], result
    status = result["result"]
    assert status["active"] and status["licensee"] == "Anna" and status["key_hint"] == "…6789"
    assert status["packs"] == [
        {"id": "shop.living", "name": "Wohnzimmer", "release": 1, "url": "https://shop/x", "installed": None}
    ]
    # an older shop sends no offers and no loyalty code
    assert status["offers"] == [] and status["loyalty"] is None
    sent = aioclient_mock.mock_calls[-1][2]
    # the version goes along, so the shop can ask an old installation to update first
    assert {k: v for k, v in sent.items() if k != "version"} == {"key": "NP-ABCD-EFGH-2345-6789", "instance": fp}
    assert isinstance(sent["version"], str) and sent["version"]

    await client.send_json_auto_id({"type": "neonplan3d/packs/install", "pack_id": "shop.living"})
    result = await client.receive_json()
    assert result["success"], result
    assert result["result"]["licensee"] == "Anna" and result["result"]["release"] == 1
    assert [p["id"] for p in hass.data[DOMAIN].packs] == ["shop.living"]

    # the daily check finds release 2 and installs it; the shop now also announces offers and a code
    aioclient_mock.clear_requests()
    catalog["packs"][0]["release"] = 2
    catalog["offers"] = [
        {
            "id": "kino",
            "name": "Heimkino",
            "teaser": "Lautsprecher",
            "url": "https://shop/kino",
            "kind": "pack",
            "new": True,
        },
        {"id": "bad", "name": "No link", "url": "http://insecure"},
    ]
    catalog["loyalty"] = {"code": "NP-TREUE-AB12CD", "percent": 10}
    aioclient_mock.post(f"{lic.SHOP_API}/catalog", json=catalog)
    aioclient_mock.post(
        f"{lic.SHOP_API}/pack", text=_sign(private, keys, {**PAYLOAD, "instance": fp, "licensee": "Anna", "release": 2})
    )
    # a check from the last 20 hours makes the daily check wait: pretend the last one is old
    hass.data[DOMAIN].license["checked_at"] = 0
    await lic.async_refresh_quietly(hass, hass.data[DOMAIN])
    assert hass.data[DOMAIN].packs[0]["release"] == 2
    await client.send_json_auto_id({"type": "neonplan3d/license/get"})
    status = (await client.receive_json())["result"]
    assert status["packs"][0]["installed"] == 2 and status["error"] is None
    assert [o["id"] for o in status["offers"]] == ["kino"] and status["offers"][0]["new"]
    # the update is remembered for the extensions page
    assert [(u["id"], u["release"]) for u in status["updates"]] == [("shop.living", 2)]
    assert status["offers"][0]["image"] is None and status["offers"][0]["kind"] == "pack"
    assert status["loyalty"] == {"code": "NP-TREUE-AB12CD", "percent": 10}

    # the request carries our own User-Agent (the host blocks aiohttp's default one)
    assert aioclient_mock.mock_calls[-1][3]["User-Agent"].startswith("NeonPlan3D/")

    # the host throttles with a bare 429: the request is repeated after a pause and then goes through
    monkeypatch.setattr(lic, "RETRY_WAITS", (0.0, 0.0))
    aioclient_mock.clear_requests()
    answers = iter([(429, "<html>Too Many Requests</html>"), (200, json.dumps(catalog))])

    async def throttled(method, url, data):
        status, text = next(answers)
        return AiohttpClientMockResponse(method, url, status=status, text=text)

    aioclient_mock.post(f"{lic.SHOP_API}/catalog", side_effect=throttled)
    await client.send_json_auto_id({"type": "neonplan3d/license/refresh"})
    result = await client.receive_json()
    assert result["success"] and result["result"]["licensee"] == "Anna"
    assert aioclient_mock.call_count == 2

    # the shop refuses a key: the error comes through with the shop's code
    aioclient_mock.clear_requests()
    refusal = {"code": "ms_np_activation_limit", "message": "no"}
    aioclient_mock.post(f"{lic.SHOP_API}/catalog", status=403, json=refusal)
    await client.send_json_auto_id({"type": "neonplan3d/license/activate", "key": "NP-ABCD-EFGH-2345-6789"})
    result = await client.receive_json()
    assert not result["success"] and result["error"]["code"] == "activation_limit"

    # forgetting the key keeps the packs and drops offers and code
    await client.send_json_auto_id({"type": "neonplan3d/license/remove"})
    status = (await client.receive_json())["result"]
    assert not status["active"] and len(hass.data[DOMAIN].packs) == 1
    assert status["offers"] == [] and status["loyalty"] is None


async def test_a_pack_bound_elsewhere_is_refused_on_import(hass: HomeAssistant, hass_ws_client, monkeypatch) -> None:
    private, keys = _key()
    monkeypatch.setattr(packs, "PACK_PUBLIC_KEYS", keys)
    await _setup(hass)
    client = await hass_ws_client(hass)
    await client.send_json_auto_id(
        {
            "type": "neonplan3d/packs/import",
            "pack": _sign(private, keys, {**PAYLOAD, "instance": packs.fingerprint("x")}),
        }
    )
    result = await client.receive_json()
    assert not result["success"] and result["error"]["code"] == "wrong_instance"
