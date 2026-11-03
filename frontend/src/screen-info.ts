// What a NeonPlan view tells Home Assistant about itself, for the card templates' overview of the open screens: a
// short name of the device it runs on, read from the browser ("Fire HD 10 · Fully Kiosk", "iPad · HA app").

/** Amazon's model codes of the Fire tablets people hang on walls (the user agent names them, not the product). */
const FIRE: [RegExp, string][] = [
  [/KFTRWI|KFTRPWI|KFMAWI|KFSNWI|KFTUWI/, "Fire HD 10"],
  [/KFONWI|KFRAWI|KFRAPWI|KFTBWI|KFDOWI/, "Fire HD 8"],
  [/KFQUWI|KFMUWI|KFKAWI|KFGIWI/, "Fire 7"],
];

/** A short name of the device and the app the page runs in; null when nothing is known. */
export function deviceLabel(ua: string = typeof navigator === "undefined" ? "" : navigator.userAgent): string | null {
  if (!ua) return null;
  const app = /Fully/i.test(ua) ? "Fully Kiosk" : /Home ?Assistant/i.test(ua) ? "HA app" : /Silk\//.test(ua) ? "Silk" : /Edg\//.test(ua) ? "Edge" : /Firefox\//.test(ua) ? "Firefox" : /Chrome\//.test(ua) ? "Chrome" : /Safari\//.test(ua) ? "Safari" : null;
  const fire = FIRE.find(([re]) => re.test(ua))?.[1] ?? (/KF[A-Z]{2,5}WI|Silk\//.test(ua) ? "Fire tablet" : null);
  const model =
    fire ??
    (/iPad/.test(ua)
      ? "iPad"
      : /iPhone/.test(ua)
        ? "iPhone"
        : /Android/.test(ua)
          ? (/Android [\d.]+; ([^;)]+?)(?: Build|\))/.exec(ua)?.[1]?.trim() ?? "Android")
          : /Windows/.test(ua)
            ? "Windows"
            : /Mac OS X/.test(ua)
              ? "Mac"
              : /Linux/.test(ua)
                ? "Linux"
                : null);
  const label = [model, app].filter(Boolean).join(" · ");
  return label ? label.slice(0, 80) : null;
}
