"""Start views of the house, a floor and a room (#206, #282)."""

import pytest
import voluptuous as vol

from custom_components.neonplan3d.schema import (
    FURNITURE_SCHEMA,
    HOLOGRAM_SCHEMA,
    OPENING_SCHEMA,
    OUTDOOR_SCHEMA,
    ROOF_SECTION_SCHEMA,
    ROOM_SCHEMA,
    SETTINGS_SCHEMA,
    START_VIEW_SCHEMA,
)

ROOM = {"id": "r1", "name": "Bad", "area_id": None, "points": [[0, 0], [2, 0], [2, 2]], "floor_material": "tiles"}


def test_start_view_keeps_its_target() -> None:
    view = START_VIEW_SCHEMA({"theta": 1, "phi": 0.8, "radius": 9, "target": {"x": 1, "y": 0.5, "z": -2}})
    assert view["target"] == {"x": 1.0, "y": 0.5, "z": -2.0}


def test_start_view_after_several_turns() -> None:
    # a camera turned round twice saves its angle once round (#416)
    view = START_VIEW_SCHEMA({"theta": 13.214, "phi": 0.8, "radius": 9})
    assert -3.15 < view["theta"] < 3.15
    assert abs(view["theta"] - (13.214 - 4 * 3.141592653589793)) < 1e-9


def test_start_view_without_target() -> None:
    assert "target" not in START_VIEW_SCHEMA({"theta": 1, "phi": 0.8, "radius": 9})


def test_room_start_view() -> None:
    assert ROOM_SCHEMA(ROOM)["start_view"] is None
    view = {"theta": 0.5, "phi": 0.9, "radius": 4, "target": {"x": 1, "y": 0.3, "z": 1}}
    room = ROOM_SCHEMA({**ROOM, "start_view": view})
    assert room["start_view"]["radius"] == 4.0


def test_inverted_contact_and_plant_card_offsets() -> None:
    gate = {"id": "o1", "room_id": "r1", "edge": 0, "offset": 1, "type": "garage"}
    gate |= {"width": 2.5, "sill": 0, "height": 2.1}
    assert OPENING_SCHEMA(gate)["contact_invert"] is False
    assert OPENING_SCHEMA({**gate, "contact_invert": True})["contact_invert"] is True
    # window board / sill: automatic unless the plan says otherwise (#655)
    assert OPENING_SCHEMA(gate)["sill_board"] == "auto"
    assert OPENING_SCHEMA({**gate, "sill_board": "inside"})["sill_board"] == "inside"
    with pytest.raises(vol.Invalid):
        OPENING_SCHEMA({**gate, "sill_board": "both"})
    inv = {"id": "f1", "type": "inverter", "x": 0, "z": 0, "rotation": 0, "w": 0.5, "d": 0.2, "h": 0.6, "variant": None}
    assert "plant_right" not in FURNITURE_SCHEMA(inv)
    moved = FURNITURE_SCHEMA({**inv, "plant_right": 1.5, "plant_up": -2})
    assert (moved["plant_right"], moved["plant_up"]) == (1.5, -2.0)


def test_room_ceiling_height() -> None:
    """A room may have a ceiling of its own (#30); none keeps the floor height."""
    assert "ceiling_height" not in ROOM_SCHEMA(ROOM)
    assert ROOM_SCHEMA({**ROOM, "ceiling_height": 2.5})["ceiling_height"] == 2.5
    assert ROOM_SCHEMA({**ROOM, "ceiling_height": None})["ceiling_height"] is None


def test_plant_cards_in_floor_views_are_off_by_default() -> None:
    """The house balance and plant cards in floor views is a switch, off by default (#193)."""
    assert HOLOGRAM_SCHEMA({})["plant_floor"] is False
    assert HOLOGRAM_SCHEMA({"plant_floor": True})["plant_floor"] is True


def test_length_units_follow_home_assistant_unless_set() -> None:
    """Feet and inches are a display setting (#117): None follows Home Assistant, storage stays metric."""
    base = {"wall_exterior": 0.3, "wall_interior": 0.12, "grid": 0.05}
    assert SETTINGS_SCHEMA(base)["units"] is None
    assert SETTINGS_SCHEMA({**base, "units": "imperial"})["units"] == "imperial"
    assert SETTINGS_SCHEMA(base)["person_look"] is None
    assert SETTINGS_SCHEMA({**base, "person_look": "pin"})["person_look"] == "pin"


def test_furniture_block() -> None:
    """Furniture blocks: items with the same group id move together; none by default."""
    item = {"id": "f1", "type": "kitchen", "x": 0, "z": 0, "rotation": 0, "w": 0.6, "d": 0.6, "h": 0.9, "variant": None}
    assert FURNITURE_SCHEMA(item)["group"] is None
    assert FURNITURE_SCHEMA({**item, "group": "block_1"})["group"] == "block_1"


def test_pool_depth_rim_and_port_depth() -> None:
    """A pool's basin depth and rim, and how deep an inlet sits below the water line."""
    from custom_components.neonplan3d.schema import OUTDOOR_SCHEMA, POOL_PORT_SCHEMA

    pool = {"id": "p", "type": "pool", "points": [[0, 0], [8, 0], [8, 4], [0, 4]]}
    assert OUTDOOR_SCHEMA(pool)["depth"] is None
    out = OUTDOOR_SCHEMA({**pool, "depth": 1.5, "rim": 0.2})
    assert (out["depth"], out["rim"]) == (1.5, 0.2)
    assert POOL_PORT_SCHEMA({"id": "i", "kind": "inlet", "x": 1, "z": 0, "depth": 0.3})["depth"] == 0.3


def test_household_fields_are_kept_and_checked() -> None:
    """A waste bin keeps its kind, colours and calendar; a mailbox its door; wrong values are refused."""
    base = {
        "id": "b1",
        "type": "waste_bin",
        "x": 1,
        "z": 1,
        "rotation": 0,
        "w": 0.58,
        "d": 0.73,
        "h": 1.07,
        "variant": None,
    }
    out = FURNITURE_SCHEMA(
        {
            **base,
            "bin_kind": "paper",
            "bin_color": "#1f4fa8",
            "bin_lid": None,
            "bin_source": "calendar.abfall",
            "bin_match": "Papier",
        }
    )
    assert out["bin_kind"] == "paper" and out["bin_source"] == "calendar.abfall"
    assert "bin_kind" not in FURNITURE_SCHEMA(base)
    mail = FURNITURE_SCHEMA({**base, "type": "mailbox", "mailbox_door": "binary_sensor.door"})
    assert mail["mailbox_door"] == "binary_sensor.door"
    extras = FURNITURE_SCHEMA(
        {
            **base,
            "type": "washer",
            "remaining": "sensor.left",
            "service": "binary_sensor.salt",
            "service_min": 5,
            "moisture": None,
            "door_alarm": 3,
        }
    )
    assert (extras["remaining"], extras["service"], extras["service_min"], extras["door_alarm"]) == (
        "sensor.left",
        "binary_sensor.salt",
        5,
        3,
    )
    out_bin = FURNITURE_SCHEMA({**base, "bin_out": "input_boolean.bin_out"})
    assert out_bin["bin_out"] == "input_boolean.bin_out" and "bin_out" not in FURNITURE_SCHEMA(base)
    robot = FURNITURE_SCHEMA({**base, "type": "robot", "service2": "sensor.dock_bag", "service2_min": 0})
    assert (robot["service2"], robot["service2_min"]) == ("sensor.dock_bag", 0)
    bads = ({"bin_kind": "nuclear"}, {"bin_color": "blue"}, {"moisture_min": 150}, {"door_alarm": 0})
    for bad in (*bads, {"service2_min": -1}):
        with pytest.raises(vol.Invalid):
            FURNITURE_SCHEMA({**base, **bad})


def test_household_tag_settings_are_optional() -> None:
    """The bins' tag settings: missing in old plans, kept when set, a day count out of range is refused."""
    base = {"wall_exterior": 0.3, "wall_interior": 0.12, "grid": 0.05}
    assert SETTINGS_SCHEMA({**base, "household": {"bin_from": 14}})["household"] == {"bin_from": 14}
    out = SETTINGS_SCHEMA({**base, "household": {"bin_next_only": True, "bin_days": 2}})["household"]
    assert out["bin_next_only"] is True and out["bin_days"] == 2
    with pytest.raises(vol.Invalid):
        SETTINGS_SCHEMA({**base, "household": {"bin_days": 100}})


def test_outdoor_area_keeps_its_name_and_area() -> None:
    """An outdoor area acting as a room (#100) keeps its name and Home Assistant area; without them both are None."""
    base = {"id": "g1", "type": "lawn", "points": [[0, 0], [4, 0], [4, 3]]}
    out = OUTDOOR_SCHEMA({**base, "name": "Garten", "area_id": "garden"})
    assert out["name"] == "Garten" and out["area_id"] == "garden"
    plain = OUTDOOR_SCHEMA(base)
    assert plain["name"] is None and plain["area_id"] is None


def test_live_director_is_off_unless_switched_on() -> None:
    """The live director (Kamera-Cockpit): no settings, nothing on; every event is its own switch."""
    base = {"wall_exterior": 0.3, "wall_interior": 0.12, "grid": 0.05}
    assert SETTINGS_SCHEMA(base)["director"] is None
    d = SETTINGS_SCHEMA({**base, "director": {"doorbell": True}})["director"]
    assert d["doorbell"] is True
    assert d["motion"] == "off"
    assert d["appliances"] is False
    assert d["alerts"] is False
    assert d["doorbell_entity"] is None
    full = {
        "doorbell": True,
        "doorbell_entity": "event.ding",
        "doorbell_camera": "camera.door",
        "motion": "person",
        "hold": 45,
    }
    assert SETTINGS_SCHEMA({**base, "director": full})["director"]["hold"] == 45
    with pytest.raises(vol.Invalid):
        SETTINGS_SCHEMA({**base, "director": {"motion": "cats"}})
    with pytest.raises(vol.Invalid):
        SETTINGS_SCHEMA({**base, "director": {"hold": 2}})


def test_sloping_walls_keep_two_heights_per_edge() -> None:
    """A sloping wall (D569): two heights on an edge, or None for a plain one."""
    room = {**ROOM, "wall_slopes": [[1.0, 2.6], None, None]}
    assert ROOM_SCHEMA(room)["wall_slopes"] == [[1.0, 2.6], None, None]
    with pytest.raises(vol.Invalid):
        ROOM_SCHEMA({**ROOM, "wall_slopes": [[1.0]]})


def test_live_director_triggers_and_live_picture() -> None:
    """Own triggers with a camera each (D615) and the live picture switch (D589)."""
    base = {"wall_exterior": 0.3, "wall_interior": 0.12, "grid": 0.05}
    d = SETTINGS_SCHEMA(
        {
            **base,
            "director": {
                "triggers": [{"entity": "cover.garage", "camera": "camera.hof"}, {"entity": "event.klingel_2"}],
                "live": True,
            },
        }
    )["director"]
    assert d["triggers"] == [
        {"entity": "cover.garage", "camera": "camera.hof"},
        {"entity": "event.klingel_2", "camera": None},
    ]
    assert d["live"] is True


def test_access_point_and_water_heater_keep_their_sensors() -> None:
    """An access point keeps its clients sensor, a water heater its temperature sensor (D582)."""
    ap = {"id": "a1", "type": "wifi_ap", "x": 2, "z": 2, "rotation": 0, "w": 0.2, "d": 0.2, "h": 0.04, "variant": None}
    assert FURNITURE_SCHEMA({**ap, "clients": "sensor.ap_clients"})["clients"] == "sensor.ap_clients"
    heater = {**ap, "id": "h1", "type": "water_heater", "variant": "wall", "water_temp": "sensor.boiler_temp"}
    assert FURNITURE_SCHEMA(heater)["water_temp"] == "sensor.boiler_temp"


def test_ceiling_fan_keeps_its_fan() -> None:
    """A ceiling fan with light keeps its fan entity next to its light (D606)."""
    fan = {
        "id": "f1",
        "type": "lamp_fan",
        "x": 2,
        "z": 2,
        "rotation": 0,
        "w": 1.3,
        "d": 1.3,
        "h": 0.45,
        "variant": None,
    }
    out = FURNITURE_SCHEMA({**fan, "entity": "light.decke", "fan": "fan.decke"})
    assert out["fan"] == "fan.decke"
    assert "fan" not in FURNITURE_SCHEMA(fan)


def test_wall_socket_keeps_its_gangs() -> None:
    """A socket keeps up to four gangs, the same entity on two of them (#593); a fifth is refused."""
    base = {
        "id": "s1",
        "type": "wall_socket",
        "x": 1,
        "z": 0.05,
        "rotation": 0,
        "w": 0.156,
        "d": 0.014,
        "h": 0.085,
        "variant": "outdoor",
    }
    gangs = [{"entity": "switch.relais", "power": "sensor.relais_power"}, {"entity": "switch.relais"}]
    out = FURNITURE_SCHEMA({**base, "gangs": gangs})
    assert out["gangs"] == [
        {"entity": "switch.relais", "power": "sensor.relais_power"},
        {"entity": "switch.relais", "power": None},
    ]
    assert FURNITURE_SCHEMA({**base, "gangs": None})["gangs"] is None
    with pytest.raises(vol.Invalid):
        FURNITURE_SCHEMA({**base, "gangs": [{"entity": None}] * 5})


def test_room_hides_hundreds_of_segment_lights() -> None:
    # Govee2MQTT creates a light per LED strip segment: hiding them all must still save (#645)
    many = [f"light.strip_segment_{i:03d}" for i in range(600)]
    room = ROOM_SCHEMA({**ROOM, "hidden": many, "no_state": many})
    assert len(room["hidden"]) == 600
    area = OUTDOOR_SCHEMA({"id": "o1", "type": "lawn", "points": [[0, 0], [2, 0], [2, 2]], "hidden": many})
    assert len(area["hidden"]) == 600


def test_roof_section_keeps_its_end_shapes() -> None:
    """A hip at one end only (#466): each end may differ from the shape, None = as the shape."""
    sec = {"id": "s", "x0": 0, "z0": 0, "x1": 10, "z1": 8, "eave_a": 3, "eave_b": 3, "base": 3}
    plain = ROOF_SECTION_SCHEMA(sec)
    assert plain["end_u0"] is None and plain["end_u1"] is None
    one = ROOF_SECTION_SCHEMA({**sec, "end_u0": "hip", "end_u1": "gable"})
    assert (one["end_u0"], one["end_u1"]) == ("hip", "gable")
    with pytest.raises(vol.Invalid):
        ROOF_SECTION_SCHEMA({**sec, "end_u0": "pyramid"})


def test_roof_section_keeps_its_turn() -> None:
    """A section turned about a pivot (#634, #724); not turned = None, as every roof drawn so far."""
    sec = {"id": "s", "x0": 0, "z0": 0, "x1": 10, "z1": 8, "eave_a": 3, "eave_b": 3, "base": 3}
    plain = ROOF_SECTION_SCHEMA(sec)
    assert plain["rotation"] is None and plain["pivot"] is None
    turned = ROOF_SECTION_SCHEMA({**sec, "rotation": 30, "pivot": [5, 4]})
    assert (turned["rotation"], turned["pivot"]) == (30, [5, 4])
    with pytest.raises(vol.Invalid):
        ROOF_SECTION_SCHEMA({**sec, "rotation": 400})


def test_module_data_on_furniture_and_areas() -> None:
    """A module keeps its own data on an item of the plan, by its id; anything else is refused."""
    item = {"id": "f1", "type": "radiator", "x": 0, "z": 0, "rotation": 0, "w": 1, "d": 0.1, "h": 0.6, "variant": None}
    assert "mods" not in FURNITURE_SCHEMA(item)
    data = {"mastershort.example": {"source": "ground", "links": {"supply": "sensor.flow"}}}
    assert FURNITURE_SCHEMA({**item, "mods": data})["mods"] == data
    with pytest.raises(vol.Invalid):
        FURNITURE_SCHEMA({**item, "mods": {"mastershort.example": 3}})
    lawn = {"id": "a1", "type": "lawn", "points": [[0, 0], [4, 0], [4, 4]]}
    mods = {"mastershort.example": {"collector": "loop"}}
    assert OUTDOOR_SCHEMA({**lawn, "mods": mods})["mods"] == mods


def test_door_keeps_its_opening_angle() -> None:
    """A door's own opening angle (None = as before: half open without a sensor, fully open with one)."""
    door = {"id": "o1", "room_id": "r1", "edge": 0, "offset": 1, "type": "door", "width": 0.9, "sill": 0, "height": 2.0}
    assert OPENING_SCHEMA(door)["open_angle"] is None
    assert OPENING_SCHEMA({**door, "open_angle": 15})["open_angle"] == 15
    with pytest.raises(vol.Invalid):
        OPENING_SCHEMA({**door, "open_angle": 200})
