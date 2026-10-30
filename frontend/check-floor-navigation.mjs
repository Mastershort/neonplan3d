// Synthetic split-level regression; no Home Assistant connection or private plans.
// Run after npm run build: CHROME_PATH=/path/to/chromium node check-floor-navigation.mjs
import assert from 'node:assert/strict';
import { createServer } from 'node:http';
import { readFileSync, statSync } from 'node:fs';
import { extname, resolve, sep } from 'node:path';
import puppeteer from 'puppeteer-core';
const root = resolve(import.meta.dirname, '..');
const server = createServer((req, res) => {
  const file = resolve(root, '.' + new URL(req.url, 'http://localhost').pathname);
  try {
    if (!file.startsWith(root + sep) || !statSync(file).isFile()) throw Error('not a file');
    res.setHeader('Content-Type', ({'.html':'text/html','.js':'text/javascript','.json':'application/json','.css':'text/css'})[extname(file)] || 'application/octet-stream');
    res.end(readFileSync(file));
  } catch { res.writeHead(404).end(); }
});
await new Promise(ok => server.listen(0, '127.0.0.1', ok));
let browser;
try {
  browser = await puppeteer.launch({executablePath: process.env.CHROME_PATH, headless: true,
    args: ['--no-sandbox', '--use-angle=swiftshader', '--enable-unsafe-swiftshader']});
  const page = await browser.newPage();
  await page.setViewport({width: 1280, height: 900});
  const errors = [];
  page.on('pageerror', e => errors.push(e.message));
  await page.goto(`http://127.0.0.1:${server.address().port}/preview/index.html?lang=en`, {waitUntil: 'networkidle0'});
  await page.waitForFunction(() => window.fp3dPanel?.data.building);
  await page.evaluate(async () => {
    const building = {version: 1, settings: {wall_exterior: .24, wall_interior: .12, grid: .05}, floors: []};
    for (const [id, name, elevation, group, x] of [
      ['cellar', 'Cellar', -3, 'Lower level', 0], ['raised', 'Raised wing', -1.5, 'Lower level', 5],
      ['main', 'Main floor', 0, null, 0], ['suite', 'Mezzanine', 1.5, 'Upper level', 0], ['upper', 'Upper floor', 3, 'Upper level', 5],
    ]) building.floors.push({id, name, elevation, navigation_group: group, height: 2.5, cut_height: 1.15,
      rooms: [{id: id+'-room', name: name+' room', area_id: null, points: [[x,0],[x+4,0],[x+4,4],[x,4]], floor_material: 'wood'}],
      openings: [], furniture: [], placements: [], outdoor: [], walls: [], background: null, ha_floor: null});
    window.testBuilding = structuredClone(building);
    await window.fp3dPanel.hass.callWS({type: 'neonplan3d/building/save', building});
  });
  await page.waitForFunction(() => window.fp3dPanel.data.building.floors[0].id === 'cellar' && window.fp3dPanel.renderRoot.querySelector('fp3d-view3d')?.viewer?.floors.length === 5);
  const nav = await page.evaluate(() => [...window.fp3dPanel.renderRoot.querySelectorAll('.fp3d-nav .fp3d-chip:not(.fp3d-room-chip):not(.fp3d-nav-toggle)')].map(b => b.textContent.trim()));
  assert.deepEqual(nav, ['All floors', 'Upper level', 'Main floor', 'Lower level']);
  await page.evaluate(() => [...window.fp3dPanel.renderRoot.querySelectorAll('.fp3d-nav .fp3d-chip:not(.fp3d-room-chip):not(.fp3d-nav-toggle)')].find(b => b.textContent.trim() === 'Upper level').click());
  await page.waitForFunction(() => window.fp3dPanel.renderRoot.querySelector('fp3d-view3d').viewer.floorId === 'suite');
  const selected = await page.evaluate(() => {
    const view = window.fp3dPanel.renderRoot.querySelector('fp3d-view3d');
    view.viewer.setFloorStack('single');
    return view.viewer.floors.map(f => [f.floor.id, f.to, f.ty, f.floor.elevation]);
  });
  assert.deepEqual(selected.filter(f => f[1] === 1), [['suite',1,0,1.5], ['upper',1,0,3]]);
  await page.evaluate(() => window.fp3dPanel.renderRoot.querySelector('fp3d-view3d').dispatchEvent(new CustomEvent('room-tap', {detail: {floorId:'upper',roomId:'upper-room'}})));
  assert.deepEqual(await page.evaluate(() => [window.fp3dPanel._floorId, window.fp3dPanel._roomId]), ['upper','upper-room']);
  const thumbs = await page.evaluate(() => window.fp3dPanel.renderRoot.querySelector('fp3d-view3d').viewer.floorThumbnails().map(t => t.floorId));
  assert.deepEqual(thumbs, ['cellar','main','suite']);
  await page.evaluate(() => { window.fp3dPanel._roomId = null; });
  await page.waitForFunction(() => window.fp3dPanel.renderRoot.querySelector('fp3d-view3d')._thumbs.map(t => t.floorId).join(',') === 'cellar,main,suite');
  await page.waitForFunction(() => window.fp3dPanel.renderRoot.querySelector('fp3d-view3d').viewer.floors.every(f => Math.abs(f.y-f.ty)<.001));
  if (process.env.SCREENSHOT) await page.screenshot({path: process.env.SCREENSHOT, fullPage: true});
  // The editor keeps selecting physical floors.
  await page.evaluate(() => window.fp3dPanel.setMode('editor'));
  await page.waitForFunction(() => window.fp3dPanel.renderRoot.querySelector('fp3d-editor')?.renderRoot);
  await page.evaluate(() => { window.fp3dPanel.renderRoot.querySelector('fp3d-editor')._split = true; });
  await page.waitForFunction(() => window.fp3dPanel.renderRoot.querySelector('fp3d-editor')?.renderRoot.querySelector('fp3d-view3d')?.viewer);
  assert.equal(await page.evaluate(() => window.fp3dPanel.renderRoot.querySelector('fp3d-editor').renderRoot.querySelector('fp3d-view3d').groupFloors), false);
  // Fixed dashboard cards keep selecting physical floors too.
  await page.evaluate(() => {
    const panel = window.fp3dPanel;
    const card = document.createElement('neonplan3d-card');
    card.setConfig({type:'custom:neonplan3d-card', floor:'upper', floor_thumbs:false, floor_stack:'single', height:500});
    card.hass = panel.hass;
    panel.remove(); document.body.append(card); window.testCard = card;
  });
  await page.waitForFunction(() => window.testCard.renderRoot.querySelector('fp3d-view3d')?.viewer?.floors.length === 5);
  assert.deepEqual(await page.evaluate(() => window.testCard.renderRoot.querySelector('fp3d-view3d').viewer.floors.filter(f => f.to === 1).map(f => f.floor.id)), ['upper']);
  await page.evaluate(() => window.testCard.setConfig({type:'custom:neonplan3d-card', floor:'upper', floor_thumbs:true, floor_stack:'single', height:500}));
  await page.waitForFunction(() => window.testCard.renderRoot.querySelector('fp3d-view3d').viewer.floors.filter(f => f.to === 1).length === 2);
  assert.deepEqual(await page.evaluate(() => window.testCard.data.building.floors.map(f => [f.id,f.elevation,f.rooms[0].id])), [
    ['cellar',-3,'cellar-room'], ['raised',-1.5,'raised-room'], ['main',0,'main-room'], ['suite',1.5,'suite-room'], ['upper',3,'upper-room']]);
  assert.deepEqual(errors, []);
  console.log('PASS: three group destinations, combined elevations, member room selection, group thumbnails, fixed/switchable cards, unchanged floor and room IDs.');
} finally { await browser?.close(); await new Promise(ok => server.close(ok)); }
