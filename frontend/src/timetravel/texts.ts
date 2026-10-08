// Time travel: the texts of phases 2 and 3 in German and English. They live in the lazily loaded bundle
// (the main bundle has no room to spare); the other languages come with lang/*.json like every text.

export const TT_DE: Record<string, string> = {
  tt_range_hint: "Zeitraum: 24 Stunden oder mehrere Tage",
  tt_days: "{n} T",
  tt_loading_day: "lade {day} …",
  tt_recorder_days: "Recorder: {n} Tage",
  tt_memory_full: "Speichergrenze erreicht",
  tt_now_reached: "Gegenwart erreicht",
  tt_sheet: "Ereignisse, Zusammenfassungen",
  tt_tab_events: "Ereignisse",
  tt_tab_away: "Weg",
  tt_tab_day: "Tag",
  tt_close: "Schließen",
  tt_f_safety: "Sicherheit",
  tt_f_openings: "Türen & Fenster",
  tt_f_devices: "Geräte",
  tt_f_energy: "Energie",
  tt_follow: "Kamera folgt Ereignissen",
  tt_stop: "Bei wichtigen Ereignissen anhalten",
  tt_no_events: "Keine Ereignisse",
  tt_ev_window: "{name} geöffnet",
  tt_ev_battery_full: "Speicher voll: {name}",
  tt_ev_pv_peak: "Höchste PV-Leistung des Tages",
  tt_away_title: "Während du weg warst",
  tt_away_since: "Seit",
  tt_away_last: "letzter Zeitreise",
  tt_away_quiet: "ruhig {from}–{to}",
  tt_away_none: "Nichts passiert – alles ruhig.",
  tt_away_door: "{name}: {n}× geöffnet",
  tt_away_motion: "Bewegung {name}: {n}×",
  tt_away_light: "{name} brannte {d}",
  tt_away_open: "{name} stand {d} offen",
  tt_day_title: "Tagesübersicht {day}",
  tt_day_light: "Licht",
  tt_day_window: "Fenster",
  tt_day_heat: "Heizen",
  tt_day_temp: "Temp.",
  tt_day_pv: "PV",
  tt_day_import: "Netzbezug",
  tt_day_export: "Einspeisung",
  tt_day_use: "Verbrauch",
  tt_day_self: "Autarkie",
  tt_day_compare: "Mit dem Vortag vergleichen",
  tt_day_before: "Vortag",
  tt_day_none: "Für diesen Tag gibt es noch keine Werte.",
  tt_yesterday: "Gestern um diese Zeit",
};

export const TT_EN: Record<string, string> = {
  tt_range_hint: "Range: 24 hours or several days",
  tt_days: "{n} d",
  tt_loading_day: "loading {day} …",
  tt_recorder_days: "Recorder: {n} days",
  tt_memory_full: "Memory limit reached",
  tt_now_reached: "Present reached",
  tt_sheet: "Events, summaries",
  tt_tab_events: "Events",
  tt_tab_away: "Away",
  tt_tab_day: "Day",
  tt_close: "Close",
  tt_f_safety: "Safety",
  tt_f_openings: "Doors & windows",
  tt_f_devices: "Devices",
  tt_f_energy: "Energy",
  tt_follow: "Camera follows events",
  tt_stop: "Stop at important events",
  tt_no_events: "No events",
  tt_ev_window: "{name} opened",
  tt_ev_battery_full: "Battery full: {name}",
  tt_ev_pv_peak: "Highest solar power of the day",
  tt_away_title: "While you were away",
  tt_away_since: "Since",
  tt_away_last: "last time travel",
  tt_away_quiet: "quiet {from}–{to}",
  tt_away_none: "Nothing happened – all quiet.",
  tt_away_door: "{name}: opened {n}×",
  tt_away_motion: "Motion {name}: {n}×",
  tt_away_light: "{name} was on for {d}",
  tt_away_open: "{name} stood open for {d}",
  tt_day_title: "Day summary {day}",
  tt_day_light: "Light",
  tt_day_window: "Window",
  tt_day_heat: "Heating",
  tt_day_temp: "Temp.",
  tt_day_pv: "Solar",
  tt_day_import: "Grid import",
  tt_day_export: "Export",
  tt_day_use: "Consumption",
  tt_day_self: "Self-sufficiency",
  tt_day_compare: "Compare with the day before",
  tt_day_before: "Day before",
  tt_day_none: "There are no values for this day yet.",
  tt_yesterday: "Yesterday at this time",
};

/**
 * The host's translation first (it knows the 14 further languages from lang/*.json); a key it does not
 * know comes from the tables above.
 */
export function withTexts(t: (key: string, vars?: Record<string, string | number>) => string, language: () => string | undefined) {
  return (key: string, vars: Record<string, string | number> = {}): string => {
    const s = t(key, vars);
    if (s !== key) return s;
    const table = (language() ?? "").startsWith("de") ? TT_DE : TT_EN;
    let out = table[key] ?? TT_EN[key] ?? key;
    for (const [k, v] of Object.entries(vars)) out = out.replace(`{${k}}`, String(v));
    return out;
  };
}
