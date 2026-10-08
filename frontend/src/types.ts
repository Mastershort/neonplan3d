// The parts of the Home Assistant frontend object this integration uses.

/** Floor of Home Assistant's floor registry (hass.floors). */
export interface HassFloor {
  floor_id: string;
  name: string;
  level?: number | null;
}

export interface HassArea {
  area_id: string;
  name: string;
  floor_id?: string | null;
}

/** Entry of the entity registry as the frontend sees it (hass.entities). */
export interface HassEntityEntry {
  entity_id: string;
  name?: string | null;
  device_id?: string | null;
  area_id?: string | null;
  hidden?: boolean;
  entity_category?: "config" | "diagnostic" | null;
  /** The integration's key for the entity (e.g. "current_room"). */
  translation_key?: string | null;
  /** Decimals set for a sensor in Home Assistant (null = default). */
  display_precision?: number | null;
}

export interface HassDevice {
  id: string;
  area_id?: string | null;
  name?: string | null;
  name_by_user?: string | null;
}

export interface HassEntity {
  entity_id: string;
  state: string;
  attributes: Record<string, unknown>;
  last_changed?: string;
  last_updated?: string;
}

export interface HassConnection {
  subscribeMessage<T>(callback: (msg: T) => void, msg: Record<string, unknown>): Promise<() => Promise<void>>;
}

export interface HomeAssistant {
  language: string;
  user?: { is_admin: boolean; name: string };
  areas?: Record<string, HassArea>;
  floors?: Record<string, HassFloor>;
  entities?: Record<string, HassEntityEntry>;
  devices?: Record<string, HassDevice>;
  states: Record<string, HassEntity>;
  config?: { unit_system?: { temperature?: string }; latitude?: number; longitude?: number; time_zone?: string };
  connection: HassConnection;
  callWS<T>(msg: Record<string, unknown>): Promise<T>;
  callService(domain: string, service: string, data?: Record<string, unknown>): Promise<unknown>;
}
