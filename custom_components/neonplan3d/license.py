"""Shop connection: a customer key lists the bought packs, fetches them bound to this installation
and keeps them up to date.

The key comes from the customer's account at the shop. Packs fetched this way are signed for this
installation's fingerprint (a hash of Home Assistant's instance id), so a copied file is refused
elsewhere. Everything installed keeps working without the shop: the connection only serves updates
and new purchases, checked once a day.
"""

from __future__ import annotations

import asyncio
from datetime import timedelta
import json
import logging
import re
import time
from typing import Any

import aiohttp
from homeassistant.core import HomeAssistant
from homeassistant.helpers import instance_id
from homeassistant.helpers.aiohttp_client import async_get_clientsession
from homeassistant.loader import async_get_integration

from .const import DOMAIN
from .packs import PackError, fingerprint, parts_of, verify_pack
from .storage import FloorplanData

_LOGGER = logging.getLogger(__name__)

SHOP_API = "https://mastershort.de/wp-json/neonplan/v1"
SHOP_URL = "https://mastershort.de/neonplan3d/"
REFRESH_INTERVAL = timedelta(hours=24)
# the first check after a start waits a random while (5 minutes to 6 hours): many installations restart
# at the same moment after a Home Assistant release, and their checks should not arrive together
FIRST_CHECK_DELAY = (300, 6 * 3600)
# a check this recent makes the next one wait (a restart does not ask the shop again)
MIN_CHECK_AGE = 20 * 3600
KEY_PATTERN = re.compile(r"^NP(-[A-Z0-9]{4}){4}$")
_TIMEOUT = aiohttp.ClientTimeout(total=30)
# HTTP 429 (the shop's host throttles, or our own limiter): wait and try again this often, in seconds
RETRY_WAITS = (5.0, 15.0)
RETRY_AFTER_MAX = 60.0
# a pause between the pack downloads of the daily check, so they never arrive as a burst
PACK_PAUSE = 2.0
_user_agent: str | None = None


class LicenseError(Exception):
    """The shop refused or could not be reached; `code` says why."""

    def __init__(self, code: str, detail: str = "") -> None:
        """Keep the reason."""
        super().__init__(f"{code}: {detail}" if detail else code)
        self.code = code
        self.detail = detail


def normalize_key(key: str) -> str:
    """Upper case, dashes in place: 'np1234abcd...' and 'NP-1234-ABCD-…' both become the canonical form."""
    raw = re.sub(r"[^A-Za-z0-9]", "", key).upper()
    if raw.startswith("NP") and len(raw) == 18:
        raw = "-".join([raw[:2], raw[2:6], raw[6:10], raw[10:14], raw[14:18]])
    if not KEY_PATTERN.match(raw):
        raise LicenseError("invalid_key", "a key looks like NP-XXXX-XXXX-XXXX-XXXX")
    return raw


async def async_instance_fingerprint(hass: HomeAssistant) -> str:
    """This installation's fingerprint: what a bound pack carries."""
    return fingerprint(await instance_id.async_get(hass))


async def _user_agent_of(hass: HomeAssistant) -> str:
    """Our own User-Agent. Home Assistant's default names aiohttp, and the shop's web host answers
    every request with that word in the User-Agent with HTTP 429 before WordPress sees it."""
    global _user_agent
    if _user_agent is None:
        try:
            version = (await async_get_integration(hass, DOMAIN)).version
        except Exception:
            version = None
        _user_agent = f"NeonPlan3D/{version or 'dev'} (Home Assistant; +https://github.com/Mastershort/neonplan3d)"
    return _user_agent


def _retry_wait(res: aiohttp.ClientResponse, attempt: int) -> float | None:
    """How long to wait before trying again after a 429, None when the attempts are used up."""
    if attempt >= len(RETRY_WAITS):
        return None
    wait = RETRY_WAITS[attempt]
    after = res.headers.get("Retry-After")
    if after and after.isdigit():
        wait = max(wait, min(float(after), RETRY_AFTER_MAX))
    return wait


async def _post(hass: HomeAssistant, path: str, body: dict[str, Any]) -> Any:
    """One request to the shop; errors become LicenseErrors with the shop's code when it sent one.
    A 429 is retried a few times with a pause (the host throttles bursts from one address)."""
    session = async_get_clientsession(hass)
    headers = {"User-Agent": await _user_agent_of(hass)}
    attempt = 0
    try:
        while True:
            async with session.post(f"{SHOP_API}/{path}", json=body, headers=headers, timeout=_TIMEOUT) as res:
                text = await res.text()
                if res.status == 429:
                    wait = _retry_wait(res, attempt)
                    if wait is not None:
                        _LOGGER.debug("Shop answered 429 for %s, trying again in %.0f s", path, wait)
                        attempt += 1
                        await asyncio.sleep(wait)
                        continue
                    raise LicenseError("rate_limit", "HTTP 429")
                if res.status >= 400:
                    code, detail = "shop_error", f"HTTP {res.status}"
                    try:
                        err = await res.json(content_type=None)
                        if isinstance(err, dict) and isinstance(err.get("code"), str):
                            code = err["code"].removeprefix("ms_np_")
                            detail = str(err.get("message") or detail)
                    except ValueError:
                        pass
                    raise LicenseError(code, detail)
                return text
    except (TimeoutError, aiohttp.ClientError, OSError) as err:
        raise LicenseError("shop_unreachable", str(err)) from err


async def async_fetch_catalog(hass: HomeAssistant, key: str, instance: str) -> dict[str, Any]:
    """The customer's packs (id, name, release, shop page) and name; binds this installation to the key."""
    text = await _post(hass, "catalog", {"key": key, "instance": instance})
    try:
        data = json.loads(text)
    except ValueError as err:
        raise LicenseError("shop_error", "unexpected answer") from err
    if not isinstance(data, dict) or not isinstance(data.get("packs"), list):
        raise LicenseError("shop_error", "unexpected answer")
    packs = []
    for p in data["packs"]:
        if not isinstance(p, dict) or not isinstance(p.get("id"), str):
            continue
        packs.append(
            {
                "id": p["id"][:40],
                "name": str(p.get("name") or p["id"])[:80],
                "release": int(p.get("release") or 1),
                "url": str(p.get("url") or SHOP_URL)[:300],
            }
        )
    return {
        "licensee": str(data.get("licensee") or "")[:80] or None,
        "packs": packs,
        "offers": _offers(data.get("offers")),
        "loyalty": _loyalty(data.get("loyalty")),
    }


def _https(value: Any) -> str | None:
    """A shop link or picture: https only, short."""
    text = str(value or "")
    return text[:300] if text.startswith("https://") else None


def _offers(raw: Any) -> list[dict[str, Any]]:
    """Packs and Pro add-ons the customer does not own yet, as the shop announces them."""
    out: list[dict[str, Any]] = []
    if not isinstance(raw, list):
        return out
    for o in raw[:40]:
        if not isinstance(o, dict) or not isinstance(o.get("id"), str) or not _https(o.get("url")):
            continue
        out.append(
            {
                "id": o["id"][:40],
                "name": str(o.get("name") or o["id"])[:80],
                "teaser": str(o.get("teaser") or "")[:200],
                "image": _https(o.get("image")),
                "url": _https(o.get("url")),
                "kind": o.get("kind") if o.get("kind") in ("pack", "pro", "bundle") else "pack",
                "price": str(o.get("price") or "")[:40],
                "new": bool(o.get("new")),
            }
        )
    return out


def _loyalty(raw: Any) -> dict[str, Any] | None:
    """The customer's loyalty code (a discount on further purchases), if the shop gives one."""
    if not isinstance(raw, dict):
        return None
    code = str(raw.get("code") or "")
    try:
        percent = int(raw.get("percent") or 0)
    except (TypeError, ValueError):
        return None
    if not re.fullmatch(r"[A-Z0-9-]{4,30}", code) or not 0 < percent <= 50:
        return None
    return {"code": code, "percent": percent}


async def async_fetch_pack(hass: HomeAssistant, key: str, instance: str, pack_id: str) -> str:
    """A bought pack, signed for this installation."""
    return await _post(hass, "pack", {"key": key, "instance": instance, "pack": pack_id})


def status(data: FloorplanData, instance: str) -> dict[str, Any]:
    """What the frontend shows: the fingerprint, the connection and the catalog with installed releases."""
    lic = data.license
    installed = {p["id"]: int(p.get("release") or 1) for p in data.packs}
    key = lic.get("key")
    return {
        "instance": instance,
        "active": bool(key),
        "key_hint": f"…{key[-4:]}" if key else None,
        "licensee": lic.get("licensee"),
        "checked_at": lic.get("checked_at"),
        "error": lic.get("error"),
        "shop_url": SHOP_URL,
        "packs": [{**p, "installed": installed.get(p["id"])} for p in lic.get("catalog", [])],
        "offers": lic.get("offers", []) if key else [],
        "loyalty": lic.get("loyalty") if key else None,
        "updates": lic.get("updates", []),
    }


async def async_activate(hass: HomeAssistant, data: FloorplanData, key: str) -> dict[str, Any]:
    """Store a key after the shop accepted it for this installation; installs nothing yet."""
    key = normalize_key(key)
    instance = await async_instance_fingerprint(hass)
    catalog = await async_fetch_catalog(hass, key, instance)
    data.license = {
        "key": key,
        "licensee": catalog["licensee"],
        "catalog": catalog["packs"],
        "offers": catalog["offers"],
        "loyalty": catalog["loyalty"],
        "checked_at": time.time(),
        "error": None,
    }
    await data.async_save_license()
    return status(data, instance)


async def async_remove(hass: HomeAssistant, data: FloorplanData) -> dict[str, Any]:
    """Forget the key; installed packs stay."""
    data.license = {
        "key": None,
        "licensee": None,
        "catalog": [],
        "offers": [],
        "loyalty": None,
        "checked_at": None,
        "error": None,
    }
    await data.async_save_license()
    return status(data, await async_instance_fingerprint(hass))


async def async_install(hass: HomeAssistant, data: FloorplanData, pack_id: str) -> dict[str, Any]:
    """Fetch one bought pack from the shop and keep it (also used for updates)."""
    key = data.license.get("key")
    if not key:
        raise LicenseError("no_key")
    instance = await async_instance_fingerprint(hass)
    text = await async_fetch_pack(hass, key, instance, pack_id)
    try:
        payload = verify_pack(text, instance=instance)
    except PackError as err:
        raise LicenseError(err.code, err.detail) from err
    before = next((p for p in data.packs if p["id"] == payload["id"]), None)
    await data.async_add_pack(payload, parts_of(text))
    if before and int(payload.get("release") or 1) > int(before.get("release") or 1):
        # an update: remember what it brought, the extensions page shows it once
        old = {i.get("id") for i in before.get("items", [])}
        added = sum(1 for i in payload["items"] if i.get("id") not in old)
        updates = [u for u in data.license.get("updates", []) if u.get("id") != payload["id"]]
        updates.append(
            {
                "id": payload["id"],
                "name": payload["name"],
                "release": payload["release"],
                "added": added,
                "at": time.time(),
            }
        )
        data.license["updates"] = updates[-10:]
        await data.async_save_license()
    return {
        "id": payload["id"],
        "name": payload["name"],
        "publisher": payload["publisher"],
        "licensee": payload["licensee"],
        "release": payload["release"],
        "items": len(payload["items"]),
    }


async def async_refresh(hass: HomeAssistant, data: FloorplanData, install_updates: bool = True) -> dict[str, Any]:
    """Ask the shop for the catalog again and fetch newer releases of installed packs."""
    key = data.license.get("key")
    instance = await async_instance_fingerprint(hass)
    if not key:
        return status(data, instance)
    try:
        catalog = await async_fetch_catalog(hass, key, instance)
    except LicenseError as err:
        data.license["error"] = err.code
        await data.async_save_license()
        raise
    data.license.update(
        {
            "licensee": catalog["licensee"],
            "catalog": catalog["packs"],
            "offers": catalog["offers"],
            "loyalty": catalog["loyalty"],
            "checked_at": time.time(),
            "error": None,
        }
    )
    if install_updates:
        installed = {p["id"]: int(p.get("release") or 1) for p in data.packs}
        fetched = 0
        for p in catalog["packs"]:
            if p["id"] in installed and p["release"] > installed[p["id"]]:
                try:
                    if fetched:
                        await asyncio.sleep(PACK_PAUSE)
                    fetched += 1
                    await async_install(hass, data, p["id"])
                    _LOGGER.info("Updated pack %s to release %s", p["id"], p["release"])
                except LicenseError as err:
                    _LOGGER.warning("Update of pack %s failed: %s", p["id"], err)
                    data.license["error"] = err.code
    await data.async_save_license()
    return status(data, instance)


async def async_refresh_quietly(hass: HomeAssistant, data: FloorplanData) -> None:
    """The daily check: failures are kept in the status, never raised."""
    if not data.license.get("key"):
        return
    if time.time() - (data.license.get("checked_at") or 0) < MIN_CHECK_AGE:
        return
    try:
        await async_refresh(hass, data)
    except LicenseError as err:
        _LOGGER.debug("Shop check failed: %s", err)
