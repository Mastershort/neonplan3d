"""Websocket commands used by the panel, the card and the editor."""

from __future__ import annotations

from collections.abc import Awaitable, Callable
import json
import time
from typing import Any

from homeassistant.components import websocket_api
from homeassistant.core import HomeAssistant, callback
from homeassistant.helpers.dispatcher import async_dispatcher_connect
from homeassistant.loader import async_get_integration
import voluptuous as vol

from . import license as lic
from .const import DOMAIN, SIGNAL_BUILDING_UPDATED
from .packs import MAX_PACK_SIZE, PackError, parts_of, verify_pack
from .schema import BUILDING_SCHEMA, IMAGE_DATA
from .storage import FloorplanData, complete
from .timetravel import ws_timetravel_history

_IMAGE_ID = vol.All(str, vol.Length(min=1, max=64), vol.Match(r"^[A-Za-z0-9_\-.]+$"))


@callback
def async_register_commands(hass: HomeAssistant) -> None:
    """Register all websocket commands."""
    for command in (
        ws_get_building,
        ws_save_building,
        ws_subscribe_building,
        ws_get_image,
        ws_set_image,
        ws_delete_image,
        ws_history_list,
        ws_history_snapshot,
        ws_history_restore,
        ws_packs_list,
        ws_packs_import,
        ws_packs_remove,
        ws_packs_install,
        ws_license_get,
        ws_license_activate,
        ws_license_remove,
        ws_license_refresh,
        ws_backup_export,
        ws_backup_import,
        ws_timetravel_history,
    ):
        websocket_api.async_register_command(hass, command)


def _data(hass: HomeAssistant, connection: websocket_api.ActiveConnection, msg: dict) -> FloorplanData | None:
    data: FloorplanData | None = hass.data.get(DOMAIN)
    if data is None:
        connection.send_error(msg["id"], "not_loaded", "NeonPlan 3D is not set up")
    return data


@websocket_api.websocket_command({vol.Required("type"): "neonplan3d/building/get"})
@websocket_api.async_response
async def ws_get_building(hass: HomeAssistant, connection: websocket_api.ActiveConnection, msg: dict[str, Any]) -> None:
    """Return the building, its revision and the running integration version.

    The frontend compares the version with its own: after an update the new frontend files are served
    at once, but the backend (and its validation) only changes with a restart.
    """
    if (data := _data(hass, connection, msg)) is None:
        return
    integration = await async_get_integration(hass, DOMAIN)
    connection.send_result(
        msg["id"], {"building": data.building, "revision": data.revision, "version": str(integration.version)}
    )


@websocket_api.websocket_command(
    {
        vol.Required("type"): "neonplan3d/building/save",
        vol.Required("building"): BUILDING_SCHEMA,
    }
)
@websocket_api.require_admin
@websocket_api.async_response
async def ws_save_building(
    hass: HomeAssistant, connection: websocket_api.ActiveConnection, msg: dict[str, Any]
) -> None:
    """Replace the building."""
    if (data := _data(hass, connection, msg)) is None:
        return
    revision = await data.async_save_building(msg["building"])
    connection.send_result(msg["id"], {"revision": revision})


@websocket_api.websocket_command({vol.Required("type"): "neonplan3d/building/subscribe"})
@callback
def ws_subscribe_building(hass: HomeAssistant, connection: websocket_api.ActiveConnection, msg: dict[str, Any]) -> None:
    """Send the new revision whenever the building changes."""

    @callback
    def forward(revision: int) -> None:
        connection.send_message(websocket_api.event_message(msg["id"], {"revision": revision}))

    connection.subscriptions[msg["id"]] = async_dispatcher_connect(hass, SIGNAL_BUILDING_UPDATED, forward)
    connection.send_result(msg["id"])


@websocket_api.websocket_command({vol.Required("type"): "neonplan3d/image/get", vol.Required("image_id"): _IMAGE_ID})
@callback
def ws_get_image(hass: HomeAssistant, connection: websocket_api.ActiveConnection, msg: dict[str, Any]) -> None:
    """Return a background image as data URL."""
    if (data := _data(hass, connection, msg)) is None:
        return
    image = data.get_image(msg["image_id"])
    if image is None:
        connection.send_error(msg["id"], "not_found", "Image not found")
        return
    connection.send_result(msg["id"], {"data": image})


@websocket_api.websocket_command(
    {
        vol.Required("type"): "neonplan3d/image/set",
        vol.Required("image_id"): _IMAGE_ID,
        vol.Required("data"): IMAGE_DATA,
    }
)
@websocket_api.require_admin
@websocket_api.async_response
async def ws_set_image(hass: HomeAssistant, connection: websocket_api.ActiveConnection, msg: dict[str, Any]) -> None:
    """Store a background image."""
    if (data := _data(hass, connection, msg)) is None:
        return
    await data.async_set_image(msg["image_id"], msg["data"])
    connection.send_result(msg["id"])


@websocket_api.websocket_command({vol.Required("type"): "neonplan3d/image/delete", vol.Required("image_id"): _IMAGE_ID})
@websocket_api.require_admin
@websocket_api.async_response
async def ws_delete_image(hass: HomeAssistant, connection: websocket_api.ActiveConnection, msg: dict[str, Any]) -> None:
    """Remove a background image."""
    if (data := _data(hass, connection, msg)) is None:
        return
    await data.async_delete_image(msg["image_id"])
    connection.send_result(msg["id"])


@websocket_api.websocket_command({vol.Required("type"): "neonplan3d/history/list"})
@websocket_api.require_admin
@callback
def ws_history_list(hass: HomeAssistant, connection: websocket_api.ActiveConnection, msg: dict[str, Any]) -> None:
    """List the restore points (newest first)."""
    if (data := _data(hass, connection, msg)) is None:
        return
    connection.send_result(msg["id"], {"snapshots": data.history()})


@websocket_api.websocket_command({vol.Required("type"): "neonplan3d/history/snapshot"})
@websocket_api.require_admin
@websocket_api.async_response
async def ws_history_snapshot(
    hass: HomeAssistant, connection: websocket_api.ActiveConnection, msg: dict[str, Any]
) -> None:
    """Keep the current building as a restore point (e.g. before an import)."""
    if (data := _data(hass, connection, msg)) is None:
        return
    await data.async_snapshot()
    connection.send_result(msg["id"])


@websocket_api.websocket_command(
    {vol.Required("type"): "neonplan3d/history/restore", vol.Required("snapshot_id"): _IMAGE_ID}
)
@websocket_api.require_admin
@websocket_api.async_response
async def ws_history_restore(
    hass: HomeAssistant, connection: websocket_api.ActiveConnection, msg: dict[str, Any]
) -> None:
    """Go back to a restore point; the current state becomes a restore point itself."""
    if (data := _data(hass, connection, msg)) is None:
        return
    building = data.snapshot(msg["snapshot_id"])
    if building is None:
        connection.send_error(msg["id"], "not_found", "Restore point not found")
        return
    await data.async_snapshot()
    revision = await data.async_save_building(complete(building))
    connection.send_result(msg["id"], {"revision": revision})


@websocket_api.websocket_command({vol.Required("type"): "neonplan3d/packs/list"})
@callback
def ws_packs_list(hass: HomeAssistant, connection: websocket_api.ActiveConnection, msg: dict[str, Any]) -> None:
    """Return the imported furniture packs (every user needs them to see the furniture)."""
    if (data := _data(hass, connection, msg)) is None:
        return
    connection.send_result(msg["id"], {"packs": data.packs})


@websocket_api.websocket_command(
    {
        vol.Required("type"): "neonplan3d/packs/import",
        vol.Required("pack"): vol.All(str, vol.Length(max=MAX_PACK_SIZE)),
    }
)
@websocket_api.require_admin
@websocket_api.async_response
async def ws_packs_import(hass: HomeAssistant, connection: websocket_api.ActiveConnection, msg: dict[str, Any]) -> None:
    """Check a pack file's signature and content, then keep it."""
    if (data := _data(hass, connection, msg)) is None:
        return
    try:
        payload = verify_pack(msg["pack"], instance=await lic.async_instance_fingerprint(hass))
    except PackError as err:
        connection.send_error(msg["id"], err.code, err.detail or err.code)
        return
    await data.async_add_pack(payload, parts_of(msg["pack"]))
    connection.send_result(
        msg["id"],
        {
            "id": payload["id"],
            "name": payload["name"],
            "publisher": payload["publisher"],
            "licensee": payload["licensee"],
            "items": len(payload["items"]),
        },
    )


@websocket_api.websocket_command(
    {vol.Required("type"): "neonplan3d/packs/remove", vol.Required("pack_id"): vol.All(str, vol.Length(max=64))}
)
@websocket_api.require_admin
@websocket_api.async_response
async def ws_packs_remove(hass: HomeAssistant, connection: websocket_api.ActiveConnection, msg: dict[str, Any]) -> None:
    """Remove an imported pack."""
    if (data := _data(hass, connection, msg)) is None:
        return
    if not await data.async_remove_pack(msg["pack_id"]):
        connection.send_error(msg["id"], "not_found", "Pack not found")
        return
    connection.send_result(msg["id"])


# ---------------------------------------------------------------------------- shop connection


async def _license_call(
    hass: HomeAssistant,
    connection: websocket_api.ActiveConnection,
    msg: dict[str, Any],
    call: Callable[[FloorplanData], Awaitable[dict[str, Any]]],
) -> None:
    """Run a shop call and answer with its status, or with the shop's error code."""
    if (data := _data(hass, connection, msg)) is None:
        return
    try:
        connection.send_result(msg["id"], await call(data))
    except lic.LicenseError as err:
        connection.send_error(msg["id"], err.code, err.detail or err.code)


@websocket_api.websocket_command({vol.Required("type"): "neonplan3d/license/get"})
@websocket_api.require_admin
@websocket_api.async_response
async def ws_license_get(hass: HomeAssistant, connection: websocket_api.ActiveConnection, msg: dict[str, Any]) -> None:
    """The installation's fingerprint, the key's state and the catalog of bought packs."""
    if (data := _data(hass, connection, msg)) is None:
        return
    connection.send_result(msg["id"], lic.status(data, await lic.async_instance_fingerprint(hass)))


@websocket_api.websocket_command(
    {vol.Required("type"): "neonplan3d/license/activate", vol.Required("key"): vol.All(str, vol.Length(max=40))}
)
@websocket_api.require_admin
@websocket_api.async_response
async def ws_license_activate(
    hass: HomeAssistant, connection: websocket_api.ActiveConnection, msg: dict[str, Any]
) -> None:
    """Bind this installation to a customer key at the shop and keep the key."""
    await _license_call(hass, connection, msg, lambda data: lic.async_activate(hass, data, msg["key"]))


@websocket_api.websocket_command({vol.Required("type"): "neonplan3d/license/remove"})
@websocket_api.require_admin
@websocket_api.async_response
async def ws_license_remove(
    hass: HomeAssistant, connection: websocket_api.ActiveConnection, msg: dict[str, Any]
) -> None:
    """Forget the key (installed packs stay)."""
    await _license_call(hass, connection, msg, lambda data: lic.async_remove(hass, data))


@websocket_api.websocket_command({vol.Required("type"): "neonplan3d/license/refresh"})
@websocket_api.require_admin
@websocket_api.async_response
async def ws_license_refresh(
    hass: HomeAssistant, connection: websocket_api.ActiveConnection, msg: dict[str, Any]
) -> None:
    """Ask the shop again now (new purchases, updates of installed packs)."""
    await _license_call(hass, connection, msg, lambda data: lic.async_refresh(hass, data))


@websocket_api.websocket_command(
    {vol.Required("type"): "neonplan3d/packs/install", vol.Required("pack_id"): vol.All(str, vol.Length(max=64))}
)
@websocket_api.require_admin
@websocket_api.async_response
async def ws_packs_install(
    hass: HomeAssistant, connection: websocket_api.ActiveConnection, msg: dict[str, Any]
) -> None:
    """Fetch a bought pack from the shop, signed for this installation, and keep it."""
    await _license_call(hass, connection, msg, lambda data: lic.async_install(hass, data, msg["pack_id"]))


# ---------------------------------------------------------------------------- backup

BACKUP_FORMAT = "neonplan3d-backup"


@websocket_api.websocket_command({vol.Required("type"): "neonplan3d/backup/export"})
@websocket_api.require_admin
@callback
def ws_backup_export(hass: HomeAssistant, connection: websocket_api.ActiveConnection, msg: dict[str, Any]) -> None:
    """The plan and the packs for a backup file (the frontend adds the images one by one)."""
    if (data := _data(hass, connection, msg)) is None:
        return
    connection.send_result(
        msg["id"], {"format": BACKUP_FORMAT, "version": 1, "building": data.building, "packs": data.packs}
    )


@websocket_api.websocket_command(
    {
        vol.Required("type"): "neonplan3d/backup/import",
        vol.Required("building"): dict,
        vol.Optional("packs", default=[]): [dict],
    }
)
@websocket_api.require_admin
@websocket_api.async_response
async def ws_backup_import(
    hass: HomeAssistant, connection: websocket_api.ActiveConnection, msg: dict[str, Any]
) -> None:
    """Replace the plan and the packs from a backup. Packs are checked again: only ones whose
    signature verifies (and that are not bound to another installation) come back; the rest are
    reported as skipped. The state before becomes a restore point."""
    if (data := _data(hass, connection, msg)) is None:
        return
    try:
        building = BUILDING_SCHEMA(msg["building"])
    except vol.Invalid as err:
        connection.send_error(msg["id"], "invalid_format", str(err))
        return
    instance = await lic.async_instance_fingerprint(hass)
    packs: list[dict[str, Any]] = []
    skipped: list[dict[str, str]] = []
    for entry in msg["packs"]:
        signature = entry.get("signature")
        source = entry.get("source")
        name = str(entry.get("id") or "?")
        if not isinstance(signature, dict) or not isinstance(source, dict):
            skipped.append({"id": name, "reason": "unsigned"})
            continue
        try:
            text = json.dumps({"payload": source, "signature": signature})
            clean = verify_pack(text, instance=instance)
        except (PackError, TypeError, ValueError) as err:
            skipped.append({"id": name, "reason": getattr(err, "code", "bad_signature")})
            continue
        packs.append({**clean, "source": source, "signature": parts_of(text)[1], "imported_at": time.time()})
    revision = await data.async_restore(complete(building), packs)
    connection.send_result(
        msg["id"],
        {
            "revision": revision,
            "building": data.building,
            "packs": len(packs),
            "skipped": skipped,
        },
    )
