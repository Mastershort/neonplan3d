"""Start views of the house, a floor and a room (#206, #282)."""

from custom_components.neonplan3d.schema import (
    FURNITURE_SCHEMA,
    HOLOGRAM_SCHEMA,
    OPENING_SCHEMA,
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
