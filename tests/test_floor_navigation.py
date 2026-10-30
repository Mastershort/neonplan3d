"""The navigation field is optional and does not alter physical floor geometry."""
from pathlib import Path
import runpy

import pytest
import voluptuous as vol

FLOOR_SCHEMA = runpy.run_path(
    str(Path(__file__).parents[1] / "custom_components/neonplan3d/schema.py")
)["FLOOR_SCHEMA"]
FLOOR = {
    "id": "raised", "name": "Raised lower floor", "elevation": -1.5,
    "height": 2.5, "cut_height": 1.15, "rooms": [], "openings": [],
    "furniture": [], "placements": [], "background": None,
}


def test_optional_navigation_group_preserves_elevation_and_id():
    assert FLOOR_SCHEMA(FLOOR)["navigation_group"] is None
    grouped = FLOOR_SCHEMA({**FLOOR, "navigation_group": " Lower level "})
    assert grouped["navigation_group"] == "Lower level"
    assert grouped["id"] == "raised" and grouped["elevation"] == -1.5
    assert FLOOR_SCHEMA({**FLOOR, "navigation_group": "  "})["navigation_group"] is None


@pytest.mark.parametrize("value", [False, 42, ["Lower level"], "x" * 101])
def test_invalid_navigation_groups_are_rejected(value):
    with pytest.raises(vol.Invalid):
        FLOOR_SCHEMA({**FLOOR, "navigation_group": value})
