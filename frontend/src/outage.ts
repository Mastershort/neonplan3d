// A power outage as an entity reports it (#214): shared by the warnings and the time travel's events.

import type { HassEntity } from "./types.ts";

/** UPS and grid states that mean "on battery / no grid" (Network UPS Tools reports "OB", "OB DISCHRG" …). */
const OUTAGE_STATES = new Set(["ob", "on_battery", "onbattery", "on battery", "battery", "outage", "power_outage", "power outage", "offline", "off_grid", "no_grid"]);
/** Binary sensors whose "on" means the power is there (so "off" is the outage). */
const POWER_PRESENT_CLASSES = new Set(["power", "plug", "connectivity", "running"]);

/**
 * Whether an entity reports a power outage: a binary sensor of class power / plug / connectivity / running
 * that is off (no power), any other binary sensor, switch or helper that is on ("outage: on"), a UPS status
 * on battery, or a mains voltage below 100 V. Unavailable or unknown is no outage.
 */
export function isOutage(st: Pick<HassEntity, "entity_id" | "state" | "attributes"> | undefined): boolean {
  if (!st || st.state === "unavailable" || st.state === "unknown") return false;
  const domain = st.entity_id.split(".")[0];
  if (domain === "binary_sensor") return POWER_PRESENT_CLASSES.has(String(st.attributes.device_class)) ? st.state === "off" : st.state === "on";
  if (domain === "input_boolean" || domain === "switch") return st.state === "on";
  const value = Number(st.state);
  if (st.state !== "" && Number.isFinite(value)) return st.attributes.unit_of_measurement === "V" && value < 100;
  const text = String(st.state).toLowerCase().trim();
  return OUTAGE_STATES.has(text) || text.startsWith("ob ");
}

