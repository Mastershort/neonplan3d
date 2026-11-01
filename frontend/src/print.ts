/**
 * NeonPlan Print (supporter beta): a website that turns an exported plan into 3D-print parts. Supporter-Pass
 * holders unlock it there with their supporter code; NeonPlan only points them to it (the code never goes into
 * the link, it is copied to the clipboard).
 */

export const PRINT_URL = "https://print.mastershort.de/";

/** Set once a supporter has opened the extensions page: the "new" dot on its tab goes away. */
const PRINT_SEEN = "neonplan3d.print_seen";

/** The "new" dot on the extensions tab: supporters only, until they have opened the page once. */
export function printDot(supporter: boolean, seen: boolean): boolean {
  return supporter && !seen;
}

export function printSeen(): boolean {
  try {
    return localStorage.getItem(PRINT_SEEN) === "1";
  } catch {
    // no storage: no dot rather than one that never goes away
    return true;
  }
}

export function markPrintSeen(): void {
  try {
    localStorage.setItem(PRINT_SEEN, "1");
  } catch {
    // no storage: nothing to remember
  }
}

/** Copies a text; without the clipboard API (plain http) through a hidden text field. True when it worked. */
export async function copyText(text: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    // no clipboard API or no permission: the old way below
  }
  try {
    const field = document.createElement("textarea");
    field.value = text;
    field.setAttribute("readonly", "");
    field.style.position = "fixed";
    field.style.opacity = "0";
    document.body.appendChild(field);
    field.select();
    const ok = document.execCommand("copy");
    field.remove();
    return ok;
  } catch {
    return false;
  }
}

export function openPrint(): void {
  window.open(PRINT_URL, "_blank", "noopener");
}
