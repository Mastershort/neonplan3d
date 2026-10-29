"""The locating service: reads the scanners every second, keeps a room tracker per device, learns fingerprints on
the calibration walk and tells the views and the sensors where everyone is. Runs only when switched on."""

from __future__ import annotations

from collections.abc import Callable
from datetime import timedelta
import logging
import re
import time
from typing import Any

from homeassistant.const import EVENT_STATE_CHANGED
from homeassistant.core import Event, EventStateChangedData, HomeAssistant, callback
from homeassistant.helpers import device_registry as dr
from homeassistant.helpers import entity_registry as er
from homeassistant.helpers.dispatcher import async_dispatcher_send
from homeassistant.helpers.event import async_track_time_interval
from homeassistant.helpers.storage import Store

from .engine import AWAY_AFTER, OWN_SHARE, STEP, THING_AWAY_AFTER, Fingerprints, RoomTracker, evidence
from .identity import Identity, ibeacon_key
from .scanners import ScanReader, device_area_id, scanner_list

_LOGGER = logging.getLogger(__name__)

DOMAIN = "neonplan3d"
DATA_LOCATE = f"{DOMAIN}_locate"
SIGNAL_LOCATE = f"{DOMAIN}_locate_state"
SIGNAL_LOCATE_DEVICES = f"{DOMAIN}_locate_devices"
STORAGE_KEY_LOCATE = f"{DOMAIN}.locate"
POLL = timedelta(seconds=1)
CALIBRATE_SECONDS = 90
SAMPLE_EVERY = 2.0
NEARBY_KEEP = 30.0
MAX_SAMPLES_PER_ROOM = 120
PRESENCE_CLASSES = {"motion", "occupancy", "presence"}
# worn on the body: it tells where its person is (a phone may lie somewhere)
WORN = re.compile(r"watch|uhr|band|ring|fit|garmin|wear", re.IGNORECASE)


def worn_by_name(device: dict[str, Any]) -> bool:
    return bool(WORN.search(str(device.get("name") or "")))


def _clean_devices(devices: list[dict[str, Any]]) -> list[dict[str, Any]]:
    out = []
    for d in devices:
        if not isinstance(d, dict) or not d.get("id") or d.get("kind") not in ("irk", "ibeacon", "mac"):
            continue
        out.append(
            {
                "id": str(d["id"])[:40],
                "name": str(d.get("name") or d["id"])[:60],
                "kind": d["kind"],
                "key": str(d.get("key", ""))[:64],
                "person": d.get("person") if isinstance(d.get("person"), str) else None,
                "wearable": d["wearable"] if isinstance(d.get("wearable"), bool) else worn_by_name(d),
                "icon": str(d.get("icon") or "")[:40] or None,
                "notify": d.get("notify") if isinstance(d.get("notify"), str) else None,
            }
        )
    return out


class LocateService:
    def __init__(self, hass: HomeAssistant) -> None:
        self.hass = hass
        self._store: Store[dict[str, Any]] = Store(hass, 1, STORAGE_KEY_LOCATE)
        self.enabled = False
        self.admins_only = False
        self.fly = True  # spoken questions fly the open views into the room
        self.devices: list[dict[str, Any]] = []
        self.scanner_rooms: dict[str, str] = {}
        self.scanner_names: dict[str, str] = {}  # last known names (a scanner that is offline keeps its row)
        self._pooled: tuple[int, Fingerprints] | None = None
        self.rooms: list[dict[str, Any]] = []  # {id, name, floor, area_id}
        self.doors: list[tuple[str, str]] = []
        self.fingerprints: dict[str, Fingerprints] = {}
        self.state: dict[str, dict[str, Any]] = {}
        self.calibration: dict[str, Any] | None = None
        self.nearby: dict[str, dict[str, Any]] = {}
        self._reader = ScanReader()
        self._identity = Identity([])
        self._trackers: dict[str, RoomTracker] = {}
        self._unsub: Callable[[], None] | None = None
        self._unsub_sensors: Callable[[], None] | None = None
        self._sensor_rooms: dict[str, str | None] = {}
        self._last_step = 0.0
        self._last_sample = 0.0
        self._nearby_until = 0.0

    # ------------------------------------------------------------------ storage

    async def async_load(self) -> None:
        data = await self._store.async_load() or {}
        self.enabled = bool(data.get("enabled"))
        self.admins_only = bool(data.get("admins_only"))
        self.fly = data.get("fly", True) is not False
        self.devices = _clean_devices(data.get("devices") or [])
        self.scanner_rooms = {str(k): str(v) for k, v in (data.get("scanner_rooms") or {}).items()}
        self.scanner_names = {str(k): str(v) for k, v in (data.get("scanner_names") or {}).items()}
        self.rooms = [r for r in data.get("rooms") or [] if isinstance(r, dict) and r.get("id")]
        self.doors = [(str(a), str(b)) for a, b in data.get("doors") or []]
        self.fingerprints = {
            dev: Fingerprints({room: [dict(v) for v in vs] for room, vs in rooms.items()})
            for dev, rooms in (data.get("fingerprints") or {}).items()
        }
        self._rebuild()
        if self.enabled:
            self.start()

    def _data(self) -> dict[str, Any]:
        return {
            "enabled": self.enabled,
            "admins_only": self.admins_only,
            "fly": self.fly,
            "devices": self.devices,
            "scanner_rooms": self.scanner_rooms,
            "scanner_names": self.scanner_names,
            "rooms": self.rooms,
            "doors": [list(d) for d in self.doors],
            "fingerprints": {
                dev: {
                    room: [{s: round(v, 1) for s, v in vec.items()} for vec in vecs]
                    for room, vecs in fp.samples.items()
                }
                for dev, fp in self.fingerprints.items()
            },
        }

    @callback
    def _save(self) -> None:
        self._store.async_delay_save(self._data, 5)

    def _rebuild(self) -> None:
        self._identity = Identity(self.devices)
        self._sensor_rooms = {}
        room_ids = [r["id"] for r in self.rooms]
        self._trackers = {
            d["id"]: RoomTracker(room_ids, self.doors, AWAY_AFTER if d.get("person") else THING_AWAY_AFTER)
            for d in self.devices
        }
        self.state = {k: v for k, v in self.state.items() if k in self._trackers}

    # ------------------------------------------------------------------ config

    async def async_configure(self, changes: dict[str, Any]) -> None:
        if "devices" in changes:
            old = {d["id"] for d in self.devices}
            self.devices = _clean_devices(changes["devices"])
            new = {d["id"] for d in self.devices}
            for gone in old - new:
                self.fingerprints.pop(gone, None)
        if "scanner_rooms" in changes:
            self.scanner_rooms = {str(k): str(v) for k, v in changes["scanner_rooms"].items() if v}
        if "rooms" in changes:
            self.rooms = [
                {
                    "id": str(r["id"]),
                    "name": str(r.get("name") or ""),
                    "floor": r.get("floor"),
                    "area_id": r.get("area_id"),
                }
                for r in changes["rooms"]
                if isinstance(r, dict) and r.get("id")
            ]
        if "doors" in changes:
            self.doors = [(str(a), str(b)) for a, b in changes["doors"]]
        if "admins_only" in changes:
            self.admins_only = bool(changes["admins_only"])
        if "fly" in changes:
            self.fly = bool(changes["fly"])
        self._rebuild()
        if "enabled" in changes:
            self.enabled = bool(changes["enabled"])
            if self.enabled:
                self.start()
            else:
                self.stop()
        self._save()
        async_dispatcher_send(self.hass, SIGNAL_LOCATE_DEVICES)

    def config(self) -> dict[str, Any]:
        """Settings plus what the editor shows: scanners, known IRK devices, samples per device and room."""
        private = []
        devices = dr.async_get(self.hass)
        for entry in self.hass.config_entries.async_entries("private_ble_device"):
            irk = entry.data.get("irk")
            if not isinstance(irk, str):
                continue
            # Home Assistant names these entries after the first address it saw: a name given to the device wins
            own = dr.async_entries_for_config_entry(devices, entry.entry_id)
            named = next((d.name_by_user for d in own if d.name_by_user), None)
            private.append({"title": named or entry.title, "key": irk, "named": bool(named)})
        return {
            "enabled": self.enabled,
            "admins_only": self.admins_only,
            "fly": self.fly,
            "devices": self.devices,
            "scanner_rooms": self.scanner_rooms,
            "scanners": self._scanners(),
            "bluetooth": self._bluetooth(),
            "private_ble": private,
            "samples": {dev: {room: len(v) for room, v in fp.samples.items()} for dev, fp in self.fingerprints.items()},
            "scanner_hints": self.scanner_hints(),
        }

    def scanner_hints(self) -> dict[str, str]:
        """Where each scanner probably stands, from the calibration walk: the room in which it heard the devices
        loudest (it must have heard them in at least half of that room's samples)."""
        per: dict[str, dict[str, list[float]]] = {}
        counts: dict[str, int] = {}
        for fp in self.fingerprints.values():
            for room, vectors in fp.samples.items():
                counts[room] = counts.get(room, 0) + len(vectors)
                for vec in vectors:
                    for scanner, rssi in vec.items():
                        per.setdefault(scanner, {}).setdefault(room, []).append(rssi)
        hints: dict[str, str] = {}
        for scanner, rooms in per.items():
            heard = {r: v for r, v in rooms.items() if len(v) >= counts.get(r, 0) / 2}
            if heard:
                hints[scanner] = max(heard, key=lambda r: sum(heard[r]) / len(heard[r]))
        return hints

    def _scanners(self) -> list[dict[str, Any]]:
        """The scanners Home Assistant has now, plus placed ones that are offline (they keep their room)."""
        live = scanner_list(self.hass) if self._bluetooth() else []
        changed = False
        for s in live:
            if self.scanner_names.get(s["source"]) != s["name"]:
                self.scanner_names[s["source"]] = s["name"]
                changed = True
        if changed:
            self._save()
        seen = {s["source"] for s in live}
        offline = [
            {
                "source": src,
                "name": self.scanner_names.get(src, src),
                "kind": "other",
                "device_id": None,
                "area_id": None,
                "scanning": False,
                "offline": True,
            }
            for src in self.scanner_rooms
            if src not in seen
        ]
        return live + offline

    def pooled(self) -> Fingerprints:
        """Every device's samples together: a device that was never walked with uses what the others learned
        (two watches see the rooms alike). Cached until a sample changes."""
        count = sum(len(v) for fp in self.fingerprints.values() for v in fp.samples.values())
        if self._pooled is None or self._pooled[0] != count:
            merged = Fingerprints()
            for fp in self.fingerprints.values():
                for room, vectors in fp.samples.items():
                    merged.samples.setdefault(room, []).extend(vectors)
            self._pooled = (count, merged)
        return self._pooled[1]

    def _bluetooth(self) -> bool:
        return "bluetooth" in self.hass.config.components

    # ------------------------------------------------------------------ running

    @callback
    def start(self) -> None:
        if self._unsub is None and self._bluetooth():
            self._unsub = async_track_time_interval(self.hass, self._tick, POLL)
            self._unsub_sensors = self.hass.bus.async_listen(EVENT_STATE_CHANGED, self._presence_changed)

    def _sensor_room(self, entity_id: str) -> str | None:
        """The plan room of a presence sensor: its area (or its device's) linked to a room of the plan."""
        if entity_id in self._sensor_rooms:
            return self._sensor_rooms[entity_id]
        room = None
        entry = er.async_get(self.hass).async_get(entity_id)
        area = entry.area_id if entry else None
        if entry and not area and entry.device_id:
            device = dr.async_get(self.hass).async_get(entry.device_id)
            area = device_area_id(self.hass, device) if device else None
        if area:
            room = next((r["id"] for r in self.rooms if r.get("area_id") == area), None)
        self._sensor_rooms[entity_id] = room
        return room

    @callback
    def _presence_changed(self, event: Event[EventStateChangedData]) -> None:
        """A motion/presence sensor turned on: Bluetooth says who, the sensor says when (see RoomTracker.confirm)."""
        entity_id: str = event.data["entity_id"]
        if not entity_id.startswith("binary_sensor."):
            return
        new = event.data.get("new_state")
        old = event.data.get("old_state")
        if new is None or new.state != "on" or (old is not None and old.state == "on"):
            return
        if new.attributes.get("device_class") not in PRESENCE_CLASSES:
            return
        room = self._sensor_room(entity_id)
        if room is None:
            return
        now = time.time()
        # one sensor, one person: the device that finds the room most plausible moves (the others stay)
        for tracker in sorted(self._trackers.values(), key=lambda tr: -tr.belief.get(room, 0.0)):
            if tracker.shown == room:
                return
            if tracker.confirm(room, now):
                self._estimate(now)
                return

    @callback
    def stop(self) -> None:
        if self._unsub is not None:
            self._unsub()
            self._unsub = None
        if self._unsub_sensors is not None:
            self._unsub_sensors()
            self._unsub_sensors = None
        self.state = {}
        self.calibration = None
        async_dispatcher_send(self.hass, SIGNAL_LOCATE)

    @property
    def running(self) -> bool:
        return self._unsub is not None

    @callback
    def watch_nearby(self) -> list[dict[str, Any]]:
        """Strong unknown devices of the last seconds (the editor polls this while the user adds a device)."""
        if not self.running:
            self.start()
        self._nearby_until = time.time() + 60
        now = time.time()
        rows = [dict(v, address=a) for a, v in self.nearby.items() if now - v["t"] < NEARBY_KEEP]
        # beacons first (an Android phone among many strong lamps and plugs), then the strongest
        rows.sort(key=lambda r: (r["ibeacon"] is None, -r["rssi"]))
        return rows[:25]

    @callback
    def _tick(self, _now: Any) -> None:
        try:
            readings = self._reader.read(self.hass)
        except (KeyError, RuntimeError):
            return
        now = time.time()
        watch_nearby = now < self._nearby_until
        for r in readings:
            dev = self._identity.resolve(r.address, r.adv)
            if dev is not None:
                tracker = self._trackers.get(dev)
                if tracker is not None:
                    tracker.add(r.t, r.source, r.rssi)
            elif watch_nearby:
                beacon = ibeacon_key(r.adv)
                # beacons also when weak: the Android app sends at the lowest power unless changed
                if r.rssi <= -75 and beacon is None:
                    continue
                prev = self.nearby.get(r.address)
                if prev is None or now - prev["t"] > 3 or r.rssi > prev["rssi"]:
                    self.nearby[r.address] = {
                        "t": now,
                        "rssi": r.rssi,
                        "name": r.adv.local_name,
                        "ibeacon": beacon,
                        "apple": 0x004C in (r.adv.manufacturer_data or {}),
                        "random": int(r.address[:2], 16) >> 6 == 0b01,
                    }
        if not watch_nearby and self.nearby:
            self.nearby = {}
        if now - self._last_sample >= SAMPLE_EVERY and self.calibration is not None:
            self._last_sample = now
            self._sample(now)
        if now - self._last_step >= STEP:
            self._last_step = now
            self._estimate(now)
        if not self.enabled and self.calibration is None and not watch_nearby:
            self.stop()

    def _sample(self, now: float) -> None:
        cal = self.calibration
        assert cal is not None
        if now > cal["until"]:
            self.calibration = None
            self._save()
            async_dispatcher_send(self.hass, SIGNAL_LOCATE)
            return
        for dev in cal["devices"]:
            tracker = self._trackers.get(dev)
            if tracker is None:
                continue
            vector = tracker.adaptive_window(now)
            if vector:
                fp = self.fingerprints.setdefault(dev, Fingerprints())
                samples = fp.samples.setdefault(cal["room"], [])
                samples.append(vector)
                del samples[:-MAX_SAMPLES_PER_ROOM]
                cal["count"][dev] = cal["count"].get(dev, 0) + 1

    def _estimate(self, now: float) -> None:
        changed = False
        names = {r["id"]: r for r in self.rooms}
        for dev, tracker in self._trackers.items():
            window = tracker.adaptive_window(now)
            own = self.fingerprints.get(dev)
            pooled = self.pooled()
            # its own learning alone only when it covers most rooms (an iPhone in a pocket may have learned few)
            full = own is not None and len(own.rooms()) >= max(2, OWN_SHARE * len(pooled.rooms()))
            learned = own if full else pooled
            est = tracker.step(now, evidence(learned, window, self.scanner_rooms))
            room = names.get(est.room) if est.room else None
            new = {
                "room": est.room,
                "room_name": room["name"] if room else None,
                "floor": room.get("floor") if room else None,
                "area_id": room.get("area_id") if room else None,
                "probability": est.probability,
                "since": est.since,
                "last_seen": est.last_seen,
            }
            old = self.state.get(dev)
            if old is None or old["room"] != new["room"] or abs(old["probability"] - new["probability"]) > 0.1:
                changed = True
            self.state[dev] = new
        if changed:
            async_dispatcher_send(self.hass, SIGNAL_LOCATE)

    # ------------------------------------------------------------------ calibration

    @callback
    def calibrate_start(self, room: str, devices: list[str], seconds: int = CALIBRATE_SECONDS) -> None:
        devices = [d for d in devices if d in self._trackers]
        if not devices:
            raise ValueError("no devices")
        self.start()
        self.calibration = {
            "room": room,
            "devices": devices,
            "until": time.time() + seconds,
            "started": time.time(),
            "count": {},
        }

    @callback
    def calibrate_stop(self) -> None:
        if self.calibration is not None:
            self.calibration = None
            self._save()

    @callback
    def calibrate_clear(self, room: str | None) -> None:
        for fp in self.fingerprints.values():
            if room is None:
                fp.samples.clear()
            else:
                fp.samples.pop(room, None)
        self._save()

    def calibration_status(self) -> dict[str, Any] | None:
        cal = self.calibration
        if cal is None:
            return None
        now = time.time()
        return {"room": cal["room"], "left": max(0, round(cal["until"] - now)), "count": cal["count"]}

    def snapshot(self) -> dict[str, Any]:
        return {
            "running": self.running,
            "devices": [
                {
                    "id": d["id"],
                    "name": d["name"],
                    "person": d["person"],
                    "icon": d["icon"],
                    **self.state.get(d["id"], {}),
                }
                for d in self.devices
            ],
            "calibration": self.calibration_status(),
        }


def quality(samples: dict[str, dict[str, list[dict[str, float]]]]) -> dict[str, Any]:
    """Leave-one-out over the calibration samples: how often a sample's room is found from the others (run it in
    an executor, it is quadratic in the number of samples)."""
    out: dict[str, Any] = {}
    for dev, rooms in samples.items():
        per_room: dict[str, list[int]] = {}
        for room, vectors in rooms.items():
            for i, v in enumerate(vectors):
                others = Fingerprints(
                    {r: [x for j, x in enumerate(vs) if not (r == room and j == i)] for r, vs in rooms.items()}
                )
                scores = others.scores(v)
                hit = bool(scores) and max(scores, key=scores.__getitem__) == room
                counts = per_room.setdefault(room, [0, 0])
                counts[0] += hit
                counts[1] += 1
        total = sum(c[1] for c in per_room.values())
        out[dev] = {
            "overall": round(sum(c[0] for c in per_room.values()) / total, 3) if total else None,
            "rooms": {r: round(c[0] / c[1], 3) for r, c in per_room.items() if c[1]},
        }
    return out
