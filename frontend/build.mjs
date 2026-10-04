// Builds the two bundles into custom_components/neonplan3d/frontend and checks the size budgets.

import { build, context } from "esbuild";
import { createHash } from "node:crypto";
import { copyFileSync, existsSync, mkdirSync, readFileSync, statSync } from "node:fs";

const out = "../custom_components/neonplan3d/frontend";
const watch = process.argv.includes("--watch");

const common = {
  bundle: true,
  format: "esm",
  // older iPads stay on iOS 15/16: Safari 15 is the oldest with WebGL 2 (three.js needs it); newer syntax such as
  // static class blocks (Safari 16.4) is turned into older code, otherwise the 3D view fails to load there
  target: ["safari15", "chrome94", "firefox93", "edge94"],
  minify: !watch,
  sourcemap: false,
  legalComments: "none",
  logLevel: "info",
};

const viewerConfig = { ...common, entryPoints: ["src/viewer/viewer3d.ts"], outfile: `${out}/neonplan3d-3d.js` };
// the card's visual editor only loads in the dashboard's card dialog
// the language files (lang/*.json) are fetched with a hash of their content, so a new text is never stale
const LANGS = ["fr", "es", "nl", "it"];
const langHash = createHash("sha256")
  .update(LANGS.map((l) => (existsSync(`lang/${l}.json`) ? readFileSync(`lang/${l}.json`) : "")).join("\n"))
  .digest("hex")
  .slice(0, 12);
const cardEditorConfig = { ...common, entryPoints: ["src/card-editor.ts"], outfile: `${out}/neonplan3d-card-editor.js`, define: { __FP3D_LANG_HASH__: JSON.stringify(langHash) } };
// the editor is only needed by admins who open it, so it is a bundle of its own as well
// (it draws furniture previews with the 3D bundle, so it knows that bundle's hash too)
const editorConfig = (viewerHash) => ({
  ...common,
  entryPoints: ["src/components/editor.ts"],
  outfile: `${out}/neonplan3d-editor.js`,
  define: { __FP3D_VIEWER_HASH__: JSON.stringify(viewerHash), __FP3D_LANG_HASH__: JSON.stringify(langHash) },
});
// The main bundle loads the 3D bundle with a hash of its content in the URL, so a new 3D bundle is
// never taken from the browser cache (the integration version only changes after a restart).
// the frontend knows its own version, to notice a backend that still runs an older one
const version = JSON.parse(readFileSync("../custom_components/neonplan3d/manifest.json", "utf8")).version;
const mainConfig = (viewerHash, editorHash, cardEditorHash) => ({
  ...common,
  entryPoints: ["src/main.ts"],
  outfile: `${out}/neonplan3d.js`,
  define: {
    __FP3D_VIEWER_HASH__: JSON.stringify(viewerHash),
    __FP3D_EDITOR_HASH__: JSON.stringify(editorHash),
    __FP3D_CARD_EDITOR_HASH__: JSON.stringify(cardEditorHash),
    __FP3D_VERSION__: JSON.stringify(version),
    __FP3D_LANG_HASH__: JSON.stringify(langHash),
  },
});
const hashOf = (file) => createHash("sha256").update(readFileSync(file)).digest("hex").slice(0, 12);

// Self-hosted fonts (SIL OFL): latin subset of the variable weight axis, shipped with their licences.
const FONTS = [
  ["figtree", "figtree-latin-wght-normal.woff2", "figtree.woff2"],
  ["bricolage-grotesque", "bricolage-grotesque-latin-wght-normal.woff2", "bricolage-grotesque.woff2"],
];
function copyFonts() {
  mkdirSync(`${out}/fonts`, { recursive: true });
  // pictures shown in the app (a preview of a coming Pro add-on)
  mkdirSync(`${out}/images`, { recursive: true });
  copyFileSync("assets/solar-pro.jpg", `${out}/images/solar-pro.jpg`);
  // further languages, fetched by the bundles only when Home Assistant runs in them
  mkdirSync(`${out}/lang`, { recursive: true });
  for (const l of LANGS) if (existsSync(`lang/${l}.json`)) copyFileSync(`lang/${l}.json`, `${out}/lang/${l}.json`);
  for (const [pkg, file, name] of FONTS) {
    const dir = `node_modules/@fontsource-variable/${pkg}`;
    copyFileSync(`${dir}/files/${file}`, `${out}/fonts/${name}`);
    copyFileSync(`${dir}/LICENSE`, `${out}/fonts/${pkg}-LICENSE.txt`);
  }
}

const BUDGET = { "neonplan3d.js": 330 * 1024, "neonplan3d-3d.js": 700 * 1024, "neonplan3d-editor.js": 440 * 1024, "neonplan3d-card-editor.js": 130 * 1024 };

copyFonts();
if (watch) {
  // in watch mode the hash is not tracked; a dev reload fetches the bundle anyway
  for (const c of [viewerConfig, editorConfig("dev"), cardEditorConfig, mainConfig("dev", "dev", "dev")]) await (await context(c)).watch();
} else {
  await build(viewerConfig);
  const editor = editorConfig(hashOf(viewerConfig.outfile));
  await build(editor);
  await build(cardEditorConfig);
  await build(mainConfig(hashOf(viewerConfig.outfile), hashOf(editor.outfile), hashOf(cardEditorConfig.outfile)));
  let over = false;
  for (const [file, limit] of Object.entries(BUDGET)) {
    const size = statSync(`${out}/${file}`).size;
    const ok = size <= limit;
    over ||= !ok;
    console.log(`${ok ? "ok  " : "OVER"} ${file}: ${(size / 1024).toFixed(1)} KB (budget ${limit / 1024} KB)`);
  }
  if (over) process.exit(1);
}
