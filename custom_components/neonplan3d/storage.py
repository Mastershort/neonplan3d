"""Persistence for NeonPlan 3D.

The building (rooms, walls, furniture, placements) and the background images live in separate
stores so frequent saves from the editor never rewrite the large image data.

An installation can hold several floor plans (a house, the garage, a holiday flat). The first one,
"main", is the plan every installation had before: it stays in the stores it always had, untouched.
Each further plan has a building and a restore-point store of its own; their list (names, order,
where they stand on the property, the bin) is kept in the plans index. The images are shared.
"""

from __future__ import annotations

import copy
import inspect
import logging
import time
from typing import Any
import uuid

from homeassistant.core import HomeAssistant
from homeassistant.helpers.dispatcher import async_dispatcher_send
from homeassistant.helpers.storage import Store
import voluptuous as vol

from .const import (
    DOMAIN,
    HISTORY_INTERVAL,
    HISTORY_MAX,
    LEGACY_DOMAIN,
    MAIN_PLAN,
    MAX_PLANS,
    PLAN_TRASH_DAYS,
    SIGNAL_BUILDING_UPDATED,
    SIGNAL_PLANS_UPDATED,
    STORAGE_KEY_BUILDING,
    STORAGE_KEY_HISTORY,
    STORAGE_KEY_IMAGES,
    STORAGE_KEY_LICENSE,
    STORAGE_KEY_PACKS,
    STORAGE_KEY_PLANS,
    STORAGE_MINOR_VERSION,
    STORAGE_VERSION,
)
from .packs import module_sha
from .schema import BUILDING_SCHEMA, empty_building, image_ids

_LOGGER = logging.getLogger(__name__)


def complete(building: dict[str, Any]) -> dict[str, Any]:
    """Fill fields added in later versions with their defaults (keeps the building when it is invalid)."""
    try:
        return BUILDING_SCHEMA(building)
    except vol.Invalid as err:
        _LOGGER.warning("Stored building does not validate (%s); loading it unchanged", err)
        return building


class _BuildingStore(Store):
    """Building store with migrations between minor versions."""

    async def _async_migrate_func(self, old_major_version: int, old_minor_version: int, old_data: dict) -> dict:
        # 1 -> 2: newer optional fields (openings, furniture, energy, presence) get their defaults
        if old_minor_version < 2 and old_data.get("building"):
            old_data = {**old_data, "building": complete(old_data["building"])}
        return old_data


_STORE_KEYS = (STORAGE_KEY_BUILDING, STORAGE_KEY_IMAGES, STORAGE_KEY_HISTORY, STORAGE_KEY_PACKS)


async def async_migrate_legacy_stores(hass: HomeAssistant) -> None:
    """A renamed installation keeps its plan: the stores of the earlier name (floorplan_3d.*) are
    copied to the new keys once, before the stores load; existing new stores are left alone."""
    copied = []
    for key in _STORE_KEYS:
        if await Store[dict[str, Any]](hass, STORAGE_VERSION, key).async_load() is not None:
            continue
        old_key = key.replace(f"{DOMAIN}.", f"{LEGACY_DOMAIN}.", 1)
        old_store = (
            _BuildingStore(hass, STORAGE_VERSION, old_key, minor_version=STORAGE_MINOR_VERSION)
            if key == STORAGE_KEY_BUILDING
            else Store[dict[str, Any]](hass, STORAGE_VERSION, old_key)
        )
        data = await old_store.async_load()
        if data is None:
            continue
        await Store[dict[str, Any]](hass, STORAGE_VERSION, key, minor_version=STORAGE_MINOR_VERSION).async_save(data)
        copied.append(key)
    if copied:
        _LOGGER.info("Took over the data of %s: %s", LEGACY_DOMAIN, ", ".join(copied))


# newer Home Assistant turns a store's data into JSON in the event loop unless told otherwise; the background images
# and the restore points can be megabytes, so they are serialised in the executor (older versions always did that)
_OFF_LOOP: dict[str, Any] = {}
if "serialize_in_event_loop" in inspect.signature(Store.__init__).parameters:
    _OFF_LOOP["serialize_in_event_loop"] = False


def _summary(building: dict[str, Any]) -> dict[str, int]:
    floors = building.get("floors", [])
    return {
        "floors": len(floors),
        "rooms": sum(len(f.get("rooms", [])) for f in floors),
        "furniture": sum(len(f.get("furniture", [])) for f in floors),
    }


def _plan_keys(plan_id: str) -> tuple[str, str]:
    """The building and restore-point store of a plan (the main plan keeps the keys it always had)."""
    if plan_id == MAIN_PLAN:
        return STORAGE_KEY_BUILDING, STORAGE_KEY_HISTORY
    return f"{STORAGE_KEY_BUILDING}.{plan_id}", f"{STORAGE_KEY_HISTORY}.{plan_id}"


def _main_entry() -> dict[str, Any]:
    # no name: the frontend shows its own word for it ("Zuhause" / "Home") until the user names it
    return {"id": MAIN_PLAN, "name": None, "icon": None, "site": None, "created": None}


class PlanData:
    """One floor plan: its building, the revision and the restore points."""

    def __init__(self, hass: HomeAssistant, plan_id: str) -> None:
        """Initialise the plan's stores."""
        self.hass = hass
        self.id = plan_id
        building_key, history_key = _plan_keys(plan_id)
        self._building_store = _BuildingStore(hass, STORAGE_VERSION, building_key, minor_version=STORAGE_MINOR_VERSION)
        self._history_store: Store[dict[str, Any]] = Store(hass, STORAGE_VERSION, history_key, **_OFF_LOOP)
        self.building: dict[str, Any] = empty_building()
        self.revision = 0
        self._history: list[dict[str, Any]] = []

    async def async_load(self) -> None:
        """Load the building and its restore points."""
        stored = await self._building_store.async_load()
        if stored:
            self.building = complete(stored.get("building") or empty_building())
            self.revision = int(stored.get("revision", 0))
        history = await self._history_store.async_load()
        self._history = list((history or {}).get("snapshots", []))

    async def async_save_building(self, building: dict[str, Any]) -> int:
        """Store a validated building, bump the revision and notify subscribers.

        The state before the save becomes a restore point when the last one is older than
        HISTORY_INTERVAL, so a long editing session leaves a trail without saving every step.
        """
        last = self._history[-1]["saved_at"] if self._history else 0
        if self.building.get("floors") and time.time() - last > HISTORY_INTERVAL:
            await self.async_snapshot()
        self.building = building
        self.revision += 1
        await self._building_store.async_save({"revision": self.revision, "building": building})
        async_dispatcher_send(self.hass, SIGNAL_BUILDING_UPDATED, self.revision, self.id)
        return self.revision

    async def async_snapshot(self) -> None:
        """Keep the current building as a restore point."""
        self._history.append(
            {
                "id": uuid.uuid4().hex[:12],
                "revision": self.revision,
                "saved_at": time.time(),
                "building": self.building,
            }
        )
        self._history = self._history[-HISTORY_MAX:]
        # copies: the JSON is written in the executor while the loop may change the originals
        await self._history_store.async_save({"snapshots": list(self._history)})

    def history(self) -> list[dict[str, Any]]:
        """Restore points, newest first, without their buildings."""
        return [
            {"id": h["id"], "revision": h["revision"], "saved_at": h["saved_at"], **_summary(h["building"])}
            for h in reversed(self._history)
        ]

    def snapshot(self, snapshot_id: str) -> dict[str, Any] | None:
        """Building of a restore point."""
        return next((h["building"] for h in self._history if h["id"] == snapshot_id), None)

    async def async_remove(self) -> None:
        """Remove the plan's stores (only for a plan whose time in the bin is over)."""
        await self._building_store.async_remove()
        await self._history_store.async_remove()


class FloorplanData:
    """Floor plans, images, packs and the shop connection of one installation."""

    def __init__(self, hass: HomeAssistant) -> None:
        """Initialise the stores."""
        self.hass = hass
        self._image_store: Store[dict[str, Any]] = Store(hass, STORAGE_VERSION, STORAGE_KEY_IMAGES, **_OFF_LOOP)
        self._pack_store: Store[dict[str, Any]] = Store(hass, STORAGE_VERSION, STORAGE_KEY_PACKS)
        self._plans_store: Store[dict[str, Any]] = Store(hass, STORAGE_VERSION, STORAGE_KEY_PLANS)
        self._license_store: Store[dict[str, Any]] = Store(hass, STORAGE_VERSION, STORAGE_KEY_LICENSE)
        self.main = PlanData(hass, MAIN_PLAN)
        # the plans in their order (the main plan first until the user moves it), and the ones in the bin
        self.index: list[dict[str, Any]] = [_main_entry()]
        self.trash: list[dict[str, Any]] = []
        self.plans: dict[str, PlanData] = {MAIN_PLAN: self.main}
        self._trashed: dict[str, PlanData] = {}
        # the plan Live Presence works on (its rooms, doors and scanners)
        self.locate_plan = MAIN_PLAN
        self._images: dict[str, str] = {}
        # imported furniture packs (checked payloads, see packs.py)
        self.packs: list[dict[str, Any]] = []
        # the shop connection (see license.py): key, licensee, catalog of bought packs, last check
        self.license: dict[str, Any] = {"key": None, "licensee": None, "catalog": [], "checked_at": None, "error": None}

    # the main plan, for everything that knows only one (and for older frontends)
    @property
    def building(self) -> dict[str, Any]:
        """The main plan's building."""
        return self.main.building

    @building.setter
    def building(self, building: dict[str, Any]) -> None:
        self.main.building = building

    @property
    def revision(self) -> int:
        """The main plan's revision."""
        return self.main.revision

    async def async_load(self) -> None:
        """Load the stores and drop images no plan refers to any more."""
        await async_migrate_legacy_stores(self.hass)
        await self.main.async_load()
        index = await self._plans_store.async_load()
        if index:
            await self._load_index(index)
        packs = await self._pack_store.async_load()
        self.packs = list((packs or {}).get("packs", []))
        stored_license = await self._license_store.async_load()
        if stored_license:
            self.license = {**self.license, **stored_license}
        images = await self._image_store.async_load()
        self._images = dict((images or {}).get("images", {}))
        used: set[str] = set()
        for plan in [*self.plans.values(), *self._trashed.values()]:
            used |= image_ids(plan.building)
        unused = set(self._images) - used
        if unused:
            _LOGGER.debug("Removing %d unused background images", len(unused))
            for image_id in unused:
                self._images.pop(image_id)
            await self._save_images()

    async def _load_index(self, index: dict[str, Any]) -> None:
        entries = [e for e in index.get("plans", []) if isinstance(e, dict) and isinstance(e.get("id"), str)]
        if not any(e["id"] == MAIN_PLAN for e in entries):
            entries.insert(0, _main_entry())
        self.index = entries
        for entry in entries:
            if entry["id"] != MAIN_PLAN:
                plan = PlanData(self.hass, entry["id"])
                await plan.async_load()
                self.plans[entry["id"]] = plan
        # the bin: a plan stays there PLAN_TRASH_DAYS days, then its stores go
        now = time.time()
        kept: list[dict[str, Any]] = []
        for entry in index.get("trash", []):
            if not isinstance(entry, dict) or not isinstance(entry.get("id"), str) or entry["id"] == MAIN_PLAN:
                continue
            plan = PlanData(self.hass, entry["id"])
            if now - float(entry.get("deleted_at") or now) > PLAN_TRASH_DAYS * 86400:
                _LOGGER.info("Removing the plan %s from the bin", entry["id"])
                await plan.async_remove()
                continue
            await plan.async_load()
            self._trashed[entry["id"]] = plan
            kept.append(entry)
        self.trash = kept
        wanted = index.get("locate_plan")
        self.locate_plan = wanted if isinstance(wanted, str) and wanted in self.plans else MAIN_PLAN
        if len(kept) != len(index.get("trash", [])):
            await self._save_index()

    def plan(self, plan_id: str) -> PlanData | None:
        """A plan by its id (not one in the bin)."""
        return self.plans.get(plan_id)

    def plan_list(self) -> dict[str, Any]:
        """The plans in their order and the bin, each with a summary (no buildings)."""

        def described(entry: dict[str, Any], plan: PlanData) -> dict[str, Any]:
            return {**entry, "revision": plan.revision, **_summary(plan.building)}

        return {
            "plans": [described(e, self.plans[e["id"]]) for e in self.index if e["id"] in self.plans],
            "trash": [described(e, self._trashed[e["id"]]) for e in self.trash if e["id"] in self._trashed],
            "locate_plan": self.locate_plan,
        }

    async def async_create_plan(self, name: str, building: dict[str, Any], icon: str | None = None) -> str:
        """A new plan (empty, a copy of another or an imported one) at the end of the list; returns its id."""
        if len(self.plans) >= MAX_PLANS:
            raise ValueError("too_many_plans")
        plan_id = "p" + uuid.uuid4().hex[:10]
        plan = PlanData(self.hass, plan_id)
        # its own copy: a duplicate must not share lists with the plan it came from
        await plan.async_save_building(copy.deepcopy(building))
        self.plans[plan_id] = plan
        self.index.append({"id": plan_id, "name": name, "icon": icon, "site": None, "created": time.time()})
        await self._save_index()
        return plan_id

    async def async_update_plan(self, plan_id: str, changes: dict[str, Any]) -> bool:
        """Rename a plan, give it an icon or a place on the property."""
        entry = next((e for e in self.index if e["id"] == plan_id), None)
        if entry is None:
            return False
        entry.update({k: v for k, v in changes.items() if k in ("name", "icon", "site")})
        await self._save_index()
        return True

    async def async_order_plans(self, plan_ids: list[str]) -> None:
        """Put the plans in this order (plans not named keep their place at the end)."""
        rank = {pid: i for i, pid in enumerate(plan_ids)}
        self.index.sort(key=lambda e: rank.get(e["id"], len(rank)))
        await self._save_index()

    async def async_delete_plan(self, plan_id: str) -> bool:
        """Move a plan into the bin (the main plan cannot go); it comes back with async_restore_plan."""
        if plan_id == MAIN_PLAN or plan_id not in self.plans:
            return False
        entry = next(e for e in self.index if e["id"] == plan_id)
        self.index = [e for e in self.index if e["id"] != plan_id]
        self.trash.append({**entry, "deleted_at": time.time()})
        self._trashed[plan_id] = self.plans.pop(plan_id)
        if self.locate_plan == plan_id:
            self.locate_plan = MAIN_PLAN
        await self._save_index()
        return True

    async def async_restore_plan(self, plan_id: str) -> bool:
        """Take a plan back out of the bin, at the end of the list."""
        entry = next((e for e in self.trash if e["id"] == plan_id), None)
        if entry is None:
            return False
        self.trash = [e for e in self.trash if e["id"] != plan_id]
        self.index.append({k: v for k, v in entry.items() if k != "deleted_at"})
        self.plans[plan_id] = self._trashed.pop(plan_id)
        await self._save_index()
        return True

    async def async_set_locate_plan(self, plan_id: str) -> bool:
        """Live Presence works on this plan."""
        if plan_id not in self.plans:
            return False
        self.locate_plan = plan_id
        await self._save_index()
        return True

    async def _save_index(self) -> None:
        await self._plans_store.async_save({"plans": self.index, "trash": self.trash, "locate_plan": self.locate_plan})
        async_dispatcher_send(self.hass, SIGNAL_PLANS_UPDATED)

    # the main plan's building and restore points, as before
    async def async_save_building(self, building: dict[str, Any]) -> int:
        """Store the main plan's building."""
        return await self.main.async_save_building(building)

    async def async_snapshot(self) -> None:
        """Keep the main plan's building as a restore point."""
        await self.main.async_snapshot()

    def history(self) -> list[dict[str, Any]]:
        """The main plan's restore points."""
        return self.main.history()

    def snapshot(self, snapshot_id: str) -> dict[str, Any] | None:
        """Building of one of the main plan's restore points."""
        return self.main.snapshot(snapshot_id)

    async def async_add_pack(
        self, payload: dict[str, Any], signed: tuple[dict[str, Any], dict[str, str]] | None = None
    ) -> bool:
        """Keep an imported pack; a newer file of the same pack replaces the old one. The payload as signed
        and the signature stay with it, so a backup can carry the pack and a restore can check it again.

        Module code runs only once an admin has approved it (`approved` holds the approved code's fingerprint).
        New module code for an installed module does not replace the running one: it waits beside it as
        `pending` until an admin approves it. Returns True when the pack waits for an admin's approval."""
        entry: dict[str, Any] = {**payload, "imported_at": time.time()}
        if signed:
            entry["source"], entry["signature"] = signed
        old = next((p for p in self.packs if p["id"] == payload["id"]), None)
        sha = module_sha(entry)
        if sha is not None and old is not None and module_sha(old) is not None:
            if sha == old.get("approved"):
                # the same code again (a re-import, a release with new furniture only): stays approved
                entry["approved"] = sha
            else:
                kept = {k: v for k, v in old.items() if k != "pending"}
                kept["pending"] = entry
                self.packs = [kept if p["id"] == payload["id"] else p for p in self.packs]
                await self._pack_store.async_save({"packs": self.packs})
                return True
        self.packs = [p for p in self.packs if p["id"] != payload["id"]] + [entry]
        await self._pack_store.async_save({"packs": self.packs})
        return sha is not None and entry.get("approved") != sha

    async def async_approve_module(self, pack_id: str, sha: str) -> bool:
        """An admin approved the module code with this fingerprint (the waiting update or the installed code)."""
        pack = next((p for p in self.packs if p["id"] == pack_id), None)
        if pack is None:
            return False
        pending = pack.get("pending")
        if isinstance(pending, dict) and module_sha(pending) == sha:
            approved = {**pending, "approved": sha}
        elif module_sha(pack) == sha:
            approved = {**{k: v for k, v in pack.items() if k != "pending"}, "approved": sha}
            if isinstance(pending, dict):
                approved["pending"] = pending
        else:
            return False
        self.packs = [approved if p["id"] == pack_id else p for p in self.packs]
        await self._pack_store.async_save({"packs": self.packs})
        return True

    @property
    def images(self) -> dict[str, str]:
        """All stored images (id -> data URL)."""
        return dict(self._images)

    async def async_restore_packs(self, packs: list[dict[str, Any]]) -> None:
        """Replace the packs from a backup."""
        self.packs = packs
        await self._pack_store.async_save({"packs": self.packs})

    async def async_restore(self, building: dict[str, Any], packs: list[dict[str, Any]]) -> int:
        """Replace the main plan and the packs from a backup; the state before becomes a restore point."""
        await self.main.async_snapshot()
        await self.async_restore_packs(packs)
        return await self.main.async_save_building(building)

    async def async_save_license(self) -> None:
        """Keep the shop connection."""
        await self._license_store.async_save(self.license)

    async def async_remove_pack(self, pack_id: str) -> bool:
        """Remove a pack (furniture using it stays in the plan as plain boxes)."""
        kept = [p for p in self.packs if p["id"] != pack_id]
        if len(kept) == len(self.packs):
            return False
        self.packs = kept
        await self._pack_store.async_save({"packs": self.packs})
        return True

    def get_image(self, image_id: str) -> str | None:
        """Return an image as data URL."""
        return self._images.get(image_id)

    async def async_set_image(self, image_id: str, data: str) -> None:
        """Store an image."""
        self._images[image_id] = data
        await self._save_images()

    async def async_delete_image(self, image_id: str, plan_id: str = MAIN_PLAN) -> None:
        """Remove an image one plan no longer uses; a copy of the plan (or one in the bin) may still show it."""
        others = [p for pid, p in [*self.plans.items(), *self._trashed.items()] if pid != plan_id]
        if any(image_id in image_ids(p.building) for p in others):
            return
        if self._images.pop(image_id, None) is not None:
            await self._save_images()

    async def _save_images(self) -> None:
        await self._image_store.async_save({"images": dict(self._images)})
