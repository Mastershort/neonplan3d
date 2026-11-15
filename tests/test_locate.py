"""Locating: settings over the websocket, a room sensor per device, presence sensors confirming a room."""

from __future__ import annotations

import time

from homeassistant.core import HomeAssistant
from homeassistant.helpers import area_registry as ar
from homeassistant.helpers import entity_registry as er
from homeassistant.helpers.dispatcher import async_dispatcher_send
from homeassistant.setup import async_setup_component
from pytest_homeassistant_custom_component.common import MockConfigEntry

from custom_components.neonplan3d.const import DOMAIN
from custom_components.neonplan3d.locate.engine import Fingerprints
from custom_components.neonplan3d.locate.service import DATA_LOCATE, SIGNAL_LOCATE, LocateService

ROOMS = [
    {"id": "kitchen", "name": "Kitchen", "floor": "Ground", "area_id": "kitchen"},
    {"id": "hall", "name": "Hall", "floor": "Ground", "area_id": "hall"},
    {"id": "living", "name": "Living", "floor": "Ground", "area_id": None},
]
WATCH = {"id": "irk_watch", "name": "Watch", "kind": "irk", "key": "00112233445566778899aabbccddeeff", "person": None}


async def _setup(hass: HomeAssistant) -> MockConfigEntry:
    await async_setup_component(hass, "http", {})
    entry = MockConfigEntry(domain=DOMAIN, data={})
    entry.add_to_hass(hass)
    assert await hass.config_entries.async_setup(entry.entry_id)
    await hass.async_block_till_done()
    return entry


async def test_config_without_bluetooth(hass: HomeAssistant, hass_ws_client) -> None:
    await _setup(hass)
    client = await hass_ws_client(hass)
    await client.send_json_auto_id({"type": "neonplan3d/locate/config"})
    res = await client.receive_json()
    assert res["success"]
    assert res["result"]["enabled"] is False
    assert res["result"]["bluetooth"] is False
    assert res["result"]["devices"] == []


async def test_a_device_gets_a_room_sensor(hass: HomeAssistant, hass_ws_client, hass_storage) -> None:
    await _setup(hass)
    client = await hass_ws_client(hass)
    await client.send_json_auto_id(
        {
            "type": "neonplan3d/locate/configure",
            "devices": [WATCH],
            "rooms": ROOMS,
            "doors": [["kitchen", "hall"], ["hall", "living"]],
            "scanner_rooms": {"AA:BB:CC:DD:EE:01": "kitchen"},
        }
    )
    res = await client.receive_json()
    assert res["success"], res
    assert [d["id"] for d in res["result"]["devices"]] == ["irk_watch"]
    await hass.async_block_till_done()

    entity_id = er.async_get(hass).async_get_entity_id("sensor", DOMAIN, f"{DOMAIN}_locate_irk_watch")
    assert entity_id is not None
    assert hass.states.get(entity_id).state == "unknown"

    # the service found the watch in the kitchen: the sensor says so
    service: LocateService = hass.data[DATA_LOCATE]
    service.state["irk_watch"] = {
        "room": "kitchen",
        "room_name": "Kitchen",
        "floor": "Ground",
        "area_id": "kitchen",
        "probability": 0.93,
        "since": time.time(),
        "last_seen": time.time(),
    }
    async_dispatcher_send(hass, SIGNAL_LOCATE)
    await hass.async_block_till_done()
    state = hass.states.get(entity_id)
    assert state.state == "Kitchen"
    assert state.attributes["room_id"] == "kitchen"
    assert state.attributes["neonplan_locate"] is True

    # settings and devices are kept (store), the room samples are not part of the reply
    await hass.async_block_till_done()


async def test_admin_only_commands(hass: HomeAssistant, hass_ws_client, hass_read_only_access_token) -> None:
    await _setup(hass)
    client = await hass_ws_client(hass, hass_read_only_access_token)
    await client.send_json_auto_id({"type": "neonplan3d/locate/configure", "enabled": True})
    res = await client.receive_json()
    assert not res["success"]
    assert res["error"]["code"] == "unauthorized"
    # everyone may watch where people are (unless "admins only")
    await client.send_json_auto_id({"type": "neonplan3d/locate/subscribe"})
    res = await client.receive_json()
    assert res["success"]


async def test_presence_sensor_maps_to_the_plan_room(hass: HomeAssistant) -> None:
    await _setup(hass)
    service: LocateService = hass.data[DATA_LOCATE]
    await service.async_configure({"devices": [WATCH], "rooms": ROOMS, "doors": [["kitchen", "hall"]]})
    area = ar.async_get(hass).async_create("Hall")
    entry = er.async_get(hass).async_get_or_create("binary_sensor", "test", "motion_hall")
    er.async_get(hass).async_update_entity(entry.entity_id, area_id=area.id)
    # the plan room is linked by the area id
    service.rooms = [{**r, "area_id": area.id} if r["id"] == "hall" else r for r in ROOMS]
    service._sensor_rooms = {}
    assert service._sensor_room(entry.entity_id) == "hall"
    assert service._sensor_room("binary_sensor.elsewhere") is None


async def test_unload_stops_the_service(hass: HomeAssistant) -> None:
    entry = await _setup(hass)
    assert DATA_LOCATE in hass.data
    assert await hass.config_entries.async_unload(entry.entry_id)
    await hass.async_block_till_done()
    assert DATA_LOCATE not in hass.data


async def test_spoken_answers_come_from_the_service(hass: HomeAssistant) -> None:
    await _setup(hass)
    service: LocateService = hass.data[DATA_LOCATE]
    keys = {**WATCH, "id": "mac_tag", "name": "Keys", "kind": "mac", "key": "C0:11:22:33:44:55"}
    await service.async_configure({"devices": [WATCH, keys], "rooms": ROOMS})
    now = time.time()
    kitchen = {"room": "kitchen", "room_name": "Kitchen", "probability": 0.9}
    service.state["irk_watch"] = {**kitchen, "since": now, "last_seen": now}

    async def ask(text: str) -> dict:
        return await hass.services.async_call(DOMAIN, "ask", {"text": text}, blocking=True, return_response=True)

    res = await ask("Where is my watch?")
    assert res == {"answered": True, "answer": "Watch is in the Kitchen.", "screen_open": False}
    assert (await ask("where are the keys"))["answer"] == "I can't hear Keys right now."
    assert (await ask("who is home"))["answer"] == "At home: Watch (Kitchen)."
    assert (await ask("ring my watch"))["answer"] == "No app to ring is set for Watch."
    # anything else still goes to the screens (none open here)
    assert (await ask("show the kitchen"))["screen_open"] is False


async def test_removing_a_device_removes_its_sensor(hass: HomeAssistant) -> None:
    await _setup(hass)
    service: LocateService = hass.data[DATA_LOCATE]
    await service.async_configure({"devices": [WATCH], "rooms": ROOMS})
    await hass.async_block_till_done()
    registry = er.async_get(hass)
    entity_id = registry.async_get_entity_id("sensor", DOMAIN, f"{DOMAIN}_locate_irk_watch")
    assert entity_id is not None
    await service.async_configure({"devices": []})
    await hass.async_block_till_done()
    assert registry.async_get_entity_id("sensor", DOMAIN, f"{DOMAIN}_locate_irk_watch") is None
    assert hass.states.get(entity_id) is None


async def test_a_device_without_learning_uses_the_others(hass: HomeAssistant) -> None:
    await _setup(hass)
    service: LocateService = hass.data[DATA_LOCATE]
    second = {**WATCH, "id": "irk_second", "name": "Second", "key": "ffeeddccbbaa99887766554433221100"}
    await service.async_configure({"devices": [WATCH, second], "rooms": ROOMS})
    service.fingerprints["irk_watch"] = Fingerprints({"kitchen": [{"s1": -60.0}], "hall": [{"s1": -80.0}]})
    pooled = service.pooled()
    assert pooled.rooms() == ["kitchen", "hall"]
    # an offline scanner keeps its row and room
    await service.async_configure({"scanner_rooms": {"AA:BB:CC:DD:EE:09": "hall"}})
    rows = service.config()["scanners"]
    assert any(r["source"] == "AA:BB:CC:DD:EE:09" and r.get("offline") for r in rows)


async def test_spoken_names_are_matched_tolerantly(hass: HomeAssistant) -> None:
    await _setup(hass)
    service: LocateService = hass.data[DATA_LOCATE]
    hass.states.async_set("person.torsten", "home", {"friendly_name": "Admin", "user_id": "u1"})
    hass.states.async_set("person.frauke", "home", {"friendly_name": "Frauke", "user_id": "u2"})
    devices = [
        {**WATCH, "id": "w1", "name": "Torsten Apple Watch", "person": "person.torsten"},
        {**WATCH, "id": "p1", "name": "Torsten Iphone", "person": "person.torsten", "key": "11" * 16},
        {**WATCH, "id": "p2", "name": "Frauke Iphone", "person": "person.frauke", "key": "22" * 16},
    ]
    await service.async_configure({"devices": devices, "rooms": ROOMS})
    now = time.time()
    service.state["w1"] = {"room": "kitchen", "room_name": "Kitchen", "since": now, "last_seen": now}
    service.state["p1"] = {"room": "hall", "room_name": "Hall", "since": now, "last_seen": now}
    service.state["p2"] = {"room": "living", "room_name": "Living", "since": now, "last_seen": now}
    from custom_components.neonplan3d.locate.answers import async_answer

    async def ask(text: str, user: str | None = None) -> str | None:
        return await async_answer(hass, service, text, "de", user)

    # speech recognition writes "Thorstens" for "Torsten"
    assert await ask("Wo ist Thorstens Apple Watch?") == "Torsten Apple Watch ist im Raum Kitchen."
    # "my iPhone" is the iPhone of the person who asks
    assert await ask("Wo ist mein iPhone?", "u2") == "Frauke Iphone ist im Raum Living."
    assert await ask("Wo ist mein iPhone?", "u1") == "Torsten Iphone ist im Raum Hall."
    # a first name alone means the person: the watch tells where
    assert await ask("Wo ist Torsten?") == "Torsten ist im Raum Kitchen."
    assert await ask("Wo ist Frauke?") == "Frauke Iphone ist im Raum Living."
    assert await ask("Wo ist der Fernseher?") is None


async def test_weak_beacons_show_among_nearby_devices(hass: HomeAssistant) -> None:
    """The Android app sends its iBeacon at the lowest power by default: it is listed although weak, and first."""
    from types import SimpleNamespace

    from custom_components.neonplan3d.locate.scanners import Reading

    await _setup(hass)
    service: LocateService = hass.data[DATA_LOCATE]
    beacon = bytes.fromhex("0215" + "280fa872f5254bccb7b42c2843e023e0" + "0064" + "9c44" + "c5")
    phone = SimpleNamespace(local_name=None, manufacturer_data={0x004C: beacon})
    now = time.time()
    readings = [
        Reading("shelly", "AA:00:00:00:00:01", -60, now, SimpleNamespace(local_name="Lamp", manufacturer_data={})),
        Reading("shelly", "AA:00:00:00:00:02", -82, now, SimpleNamespace(local_name=None, manufacturer_data={})),
        Reading("shelly", "5B:00:00:00:00:03", -84, now, phone),
    ]
    service._reader = SimpleNamespace(read=lambda _hass: readings)
    service._nearby_until = now + 60
    service._tick(None)
    rows = service.watch_nearby()
    service.stop()
    assert [r["address"] for r in rows] == ["5B:00:00:00:00:03", "AA:00:00:00:00:01"]
    assert rows[0]["ibeacon"] == "280fa872f5254bccb7b42c2843e023e000649c44"


def test_a_person_is_where_the_surer_device_says() -> None:
    """Watch and phone heard together but in different rooms: the watch wins unless the phone is clearly surer;
    a phone that stayed put while the watch walked on was left lying there."""
    from types import SimpleNamespace

    from custom_components.neonplan3d.locate.answers import person_state

    now = 10_000.0
    watch = {"id": "w", "wearable": True}
    phone = {"id": "p"}

    def state(w_room, w_p, w_since, p_room, p_p, p_since, p_seen=now - 5):
        return SimpleNamespace(
            state={
                "w": {"room": w_room, "probability": w_p, "since": w_since, "last_seen": now - 5},
                "p": {"room": p_room, "probability": p_p, "since": p_since, "last_seen": p_seen},
            }
        )

    # sitting in the kitchen, the living-room plug behind the seat fools the watch: the surer phone wins
    assert (
        person_state(state("living", 0.6, now - 600, "kitchen", 0.85, now - 610), [watch, phone], now)["room"]
        == "kitchen"
    )
    # only a little surer: the watch keeps it
    assert (
        person_state(state("living", 0.7, now - 600, "kitchen", 0.8, now - 610), [watch, phone], now)["room"]
        == "living"
    )
    # the phone has lain in the kitchen for 20 minutes, the watch walked into the living room 2 minutes ago
    assert (
        person_state(state("living", 0.6, now - 120, "kitchen", 0.95, now - 1200), [watch, phone], now)["room"]
        == "living"
    )
    # the watch has lain in the bathroom for an hour, the phone walked into the kitchen a minute ago: taken off
    assert (
        person_state(state("bath", 0.9, now - 3600, "kitchen", 0.5, now - 60), [watch, phone], now)["room"] == "kitchen"
    )
    # just put down five minutes ago: not yet
    assert person_state(state("bath", 0.9, now - 300, "kitchen", 0.5, now - 60), [watch, phone], now)["room"] == "bath"
    # the phone not heard lately: the watch as before
    assert (
        person_state(state("living", 0.6, now - 600, "kitchen", 0.95, now - 610, now - 300), [watch, phone], now)[
            "room"
        ]
        == "living"
    )


async def test_located_answers_fly_the_views_into_the_room(hass: HomeAssistant) -> None:
    from homeassistant.core import callback
    from homeassistant.helpers.dispatcher import async_dispatcher_connect

    from custom_components.neonplan3d.const import SIGNAL_ASK
    from custom_components.neonplan3d.locate.answers import Located
    from custom_components.neonplan3d.voice import show_located

    await _setup(hass)
    service: LocateService = hass.data[DATA_LOCATE]
    sent: list[dict] = []

    @callback
    def collect(msg: dict) -> None:
        sent.append(msg)

    async_dispatcher_connect(hass, SIGNAL_ASK, collect)
    show_located(hass, Located("Torsten is in the Kitchen.", ["kitchen"], True))
    show_located(hass, Located("I can't hear Torsten right now.", [], True))
    # people shown to admins only: the views of others stay where they are (the message says so)
    service.admins_only = True
    show_located(hass, Located("Torsten is in the Kitchen.", ["kitchen"], True))
    show_located(hass, Located("The keys are in the Hall.", ["hall"], False))
    service.fly = False
    show_located(hass, Located("The keys are in the Hall.", ["hall"], False))
    await hass.async_block_till_done()
    assert [(m["show_rooms"], m["admins_only"]) for m in sent] == [
        (["kitchen"], False),
        (["kitchen"], True),
        (["hall"], False),
    ]


async def test_a_view_asks_locating_first(hass: HomeAssistant, hass_ws_client) -> None:
    """The NeonPlan panel's own microphone gets the locating answer and its rooms (not the modules' guess)."""
    await _setup(hass)
    service: LocateService = hass.data[DATA_LOCATE]
    client = await hass_ws_client(hass)
    await client.send_json_auto_id({"type": "neonplan3d/locate/ask", "text": "Wer ist zu Hause?", "language": "de"})
    assert (await client.receive_json())["result"] is None
    service.devices = [dict(WATCH, name="Torsten Apple Watch")]
    service.rooms = ROOMS
    service.state = {
        "irk_watch": {"room": "kitchen", "room_name": "Kitchen", "probability": 0.9, "last_seen": time.time()}
    }
    await client.send_json_auto_id({"type": "neonplan3d/locate/ask", "text": "Wer ist zu Hause?", "language": "de"})
    res = (await client.receive_json())["result"]
    assert res == {"text": "Zu Hause: Torsten Apple Watch (Kitchen).", "rooms": ["kitchen"], "admins_only": False}
    await client.send_json_auto_id({"type": "neonplan3d/locate/ask", "text": "Zeig die Küche", "language": "de"})
    assert (await client.receive_json())["result"] is None


async def test_people_stay_private_and_phones_ring_for_their_own(hass: HomeAssistant, hass_admin_user) -> None:
    """#1129: with "people to admins only" another user hears nobody's whereabouts; #1130: a phone rings only for
    its own person or an admin, and not twice within the cooldown."""
    from pytest_homeassistant_custom_component.common import MockUser, async_mock_service

    from custom_components.neonplan3d.locate import answers
    from custom_components.neonplan3d.locate.answers import async_locate

    await _setup(hass)
    service: LocateService = hass.data[DATA_LOCATE]
    owner = MockUser().add_to_hass(hass)
    other = MockUser().add_to_hass(hass)
    admin = hass_admin_user
    hass.states.async_set("person.torsten", "home", {"friendly_name": "Torsten", "user_id": owner.id})
    rings = async_mock_service(hass, "notify", "mobile_app_phone")
    phone = {**WATCH, "name": "Phone", "person": "person.torsten", "notify": "notify.mobile_app_phone"}
    service.devices = [phone]
    service.rooms = ROOMS
    kitchen = {"room": "kitchen", "room_name": "Kitchen", "probability": 0.9, "last_seen": time.time()}
    service.state = {"irk_watch": kitchen}
    answers._rung.clear()

    async def say(text: str, user: str | None):
        return await async_locate(hass, service, text, "en", user)

    assert (await say("where is Torsten", other.id)).rooms == ["kitchen"], "not private: everyone may ask"
    service.admins_only = True
    hidden = await say("where is Torsten", other.id)
    assert (hidden.text, hidden.rooms) == ("NeonPlan tells only admins here where people are.", [])
    assert (await say("who is home", other.id)).text == "NeonPlan tells only admins here where people are."
    assert (await say("where is Torsten", admin.id)).rooms == ["kitchen"]
    assert (await say("where is Torsten", None)).rooms == ["kitchen"], "Home Assistant itself (a satellite) may"

    assert (await say("ring the phone", other.id)).text == "You can only ring your own devices."
    await hass.async_block_till_done()
    assert not rings
    assert (await say("ring my phone", owner.id)).text == "Phone is ringing now."
    assert (await say("ring the phone", admin.id)).text == "Phone rang just now."
    await hass.async_block_till_done()
    assert len(rings) == 1
    assert rings[0].context.user_id == owner.id


async def test_a_view_of_another_user_gets_no_admin_only_rooms(
    hass: HomeAssistant, hass_ws_client, hass_read_only_access_token
) -> None:
    """#1129: the rooms of people shown to admins only never reach a view signed in as another user."""
    from custom_components.neonplan3d.const import SIGNAL_ASK

    await _setup(hass)
    client = await hass_ws_client(hass, hass_read_only_access_token)
    await client.send_json_auto_id({"type": "neonplan3d/voice/subscribe"})
    assert (await client.receive_json())["success"]
    common = {"ask_id": "", "text": "", "screen": None, "speak": False}
    async_dispatcher_send(hass, SIGNAL_ASK, {**common, "show_rooms": ["kitchen"], "admins_only": True})
    async_dispatcher_send(hass, SIGNAL_ASK, {**common, "show_rooms": ["hall"], "admins_only": False})
    msg = await client.receive_json()
    assert msg["event"]["show_rooms"] == ["hall"]
