"""Standalone schema checks; also runs without a Home Assistant installation via unittest."""

import importlib.util
import json
from pathlib import Path
import unittest

import voluptuous as vol

_spec = importlib.util.spec_from_file_location(
    "rotation_schema", Path(__file__).resolve().parents[1] / "custom_components/neonplan3d/schema.py"
)
schema = importlib.util.module_from_spec(_spec)
_spec.loader.exec_module(schema)

ITEM = {
    "id": "test",
    "type": "led_strip",
    "x": 1,
    "z": 2,
    "rotation": 90,
    "w": 2,
    "d": 0.04,
    "h": 0.02,
    "variant": None,
}


class FurnitureRotationTests(unittest.TestCase):
    def test_old_plans_keep_their_led_pose_and_default_new_axes_to_zero(self):
        saved = schema.FURNITURE_SCHEMA({**ITEM, "tilt": 35, "upright": True})
        self.assertEqual(saved["rotation_x"], 0)
        self.assertEqual(saved["rotation_z"], 0)
        self.assertEqual(saved["tilt"], 35)
        self.assertTrue(saved["upright"])

    def test_all_types_keep_both_axes_through_save_and_restore(self):
        for kind in ("sofa", "led_strip", "lamp_pendant", "pack:test:model"):
            saved = schema.FURNITURE_SCHEMA({**ITEM, "type": kind, "rotation_x": -125.5, "rotation_z": 180})
            restored = schema.FURNITURE_SCHEMA(json.loads(json.dumps(saved)))
            self.assertEqual(restored["rotation_x"], -125.5)
            self.assertEqual(restored["rotation_z"], 180)
            self.assertEqual(restored["rotation"], 90)

    def test_invalid_angles_are_rejected(self):
        for key in ("rotation_x", "rotation_z"):
            for value in (361, -361, float("nan"), float("inf"), "invalid", None):
                with self.subTest(key=key, value=value), self.assertRaises(vol.Invalid):
                    schema.FURNITURE_SCHEMA({**ITEM, key: value})


if __name__ == "__main__":
    unittest.main()
