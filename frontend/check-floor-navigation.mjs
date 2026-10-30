// Synthetic split-level regression; never connects to Home Assistant or loads private plans.
// Run after npm run build: CHROME_PATH=/path/to/chromium node check-floor-navigation.mjs
// Optional: EVIDENCE_DIR=/tmp/pr871-evidence saves each viewport and the rendered editor.
import assert from 'node:assert/strict';
import { createServer } from 'node:http';
import { mkdirSync, readFileSync, statSync } from 'node:fs';
import { extname, resolve, sep } from 'node:path';
import puppeteer from 'puppeteer-core';

const root = resolve(import.meta.dirname, '..');
const server = createServer((req, res) => {
  const file = resolve(root, '.' + new URL(req.url, 'http://localhost').pathname);
  try {
    if (!file.startsWith(root + sep) || file.startsWith(resolve(root, 'private') + sep) || !statSync(file).isFile()) throw Error('not a public file');
    res.setHeader('Content-Type', ({'.html':'text/html','.js':'text/javascript','.json':'application/json','.css':'text/css'})[extname(file)] || 'application/octet-stream');
    res.end(readFileSync(file));
  } catch { res.writeHead(404).end(); }
});
await new Promise(ok => server.listen(0, '127.0.0.1', ok));
const origin = `http://127.0.0.1:${server.address().port}`;
if (process.env.EVIDENCE_DIR) mkdirSync(process.env.EVIDENCE_DIR, {recursive:true});
let browser;
try {
  browser = await puppeteer.launch({executablePath: process.env.CHROME_PATH, headless: true,
    args: ['--no-sandbox', '--use-angle=swiftshader', '--enable-unsafe-swiftshader']});
  for (const [name, width, height] of [['desktop',1440,1000], ['phone',390,844], ['wall',1280,800]]) {
    console.log(`Checking ${name} (${width}x${height})`);
    const context = await browser.createBrowserContext();
    const page = await context.newPage();
    page.setDefaultTimeout(30000);
    await page.setViewport({width, height});
    const errors = [];
    page.on('pageerror', e => errors.push(e.message));
    await page.setRequestInterception(true);
    page.on('request', req => {
      if (req.url().startsWith(origin + '/') || /^(data|blob):/.test(req.url())) void req.continue();
      else void req.abort();
    });
    await page.goto(`${origin}/preview/index.html?lang=en&empty`, {waitUntil:'networkidle0'});
    await page.waitForFunction(() => window.fp3dPanel?.data.building);
    await page.evaluate(async () => {
      const panel = window.fp3dPanel;
      const building = {version:1, settings:{wall_exterior:.24, wall_interior:.12, grid:.05}, floors:[]};
      for (const [id, name, elevation, group, x] of [
        ['cellar','Cellar',-3,'Lower level',0], ['raised','Raised wing',-1.5,'Lower level',5],
        ['main','Main floor',0,null,0], ['suite','Mezzanine',1.5,'Upper level',0], ['upper','Upper floor',3,'Upper level',5],
      ]) building.floors.push({id,name,elevation,navigation_group:group,height:2.5,cut_height:1.15,
        rooms:[{id:id+'-room',name:name+' room',area_id:null,points:[[x,0],[x+4,0],[x+4,4],[x,4]],floor_material:'wood'}],
        openings:[],furniture:[],placements:[{entity_id:'light.'+id,x:x+2,z:2}],outdoor:[],walls:[],background:null,ha_floor:null});
      building.floors[3].start_view = {theta:-0.7,phi:0.9,radius:2,target:{x:2,y:1,z:2}};
      for (const floor of building.floors.slice(3)) floor.rooms[0].area_id = 'shared';
      window.testBuilding = structuredClone(building);
      window.serviceCalls = [];
      panel.hass.callService = async (...args) => { window.serviceCalls.push(args); };
      panel.hass.states = Object.fromEntries(building.floors.map(f => ['light.'+f.id,{entity_id:'light.'+f.id,state:'on',attributes:{friendly_name:f.name+' light'}}]));
      panel.hass.states['light.shared'] = {entity_id:'light.shared',state:'on',attributes:{friendly_name:'Shared light'}};
      panel.hass.areas = {shared:{area_id:'shared',name:'Shared area'}}; panel.hass.entities = {'light.shared':{entity_id:'light.shared',area_id:'shared'}}; panel.hass.floors = {};
      await panel.hass.callWS({type:'neonplan3d/building/save',building});
    });
    await page.waitForFunction(() => window.fp3dPanel.renderRoot.querySelector('fp3d-view3d')?.viewer?.floors.length === 5);
    // Click real rendered controls, including pointer hit testing, rather than invoking their handlers.
    const click = async (scope, selector, text) => {
      const handle = await page.evaluateHandle(({scope,selector,text}) => {
        const panel = window.fp3dPanel;
        const root = scope === 'panel' ? panel.renderRoot : panel.renderRoot.querySelector(scope === 'editor' ? 'fp3d-editor' : scope === 'room' ? 'fp3d-room-panel' : 'fp3d-view3d').renderRoot;
        return [...root.querySelectorAll(selector)].find(el => text === undefined || el.textContent.trim() === text);
      }, {scope,selector,text});
      assert.ok(handle.asElement(), `Missing ${scope} ${selector} ${text ?? ''}`);
      await handle.asElement().click(); await handle.dispose();
    };
    const nav = () => page.evaluate(() => [...window.fp3dPanel.renderRoot.querySelectorAll('.fp3d-nav .fp3d-chip:not(.fp3d-room-chip):not(.fp3d-nav-toggle)')].map(b => b.textContent.trim()));
    const snapshot = async suffix => {
      if (process.env.EVIDENCE_DIR) await page.screenshot({path:resolve(process.env.EVIDENCE_DIR,`${name}-${suffix}.png`),fullPage:true});
    };
    assert.deepEqual(await nav(), ['All floors','Upper level','Main floor','Lower level']);
    await page.waitForFunction(() => window.fp3dPanel.renderRoot.querySelector('fp3d-view3d')._thumbs.length === 3);
    assert.deepEqual(await page.evaluate(() => window.fp3dPanel.renderRoot.querySelector('fp3d-view3d')._thumbs.map(t => t.floorId)), ['cellar','main','suite']);
    assert.deepEqual(await page.evaluate(() => [...window.fp3dPanel.renderRoot.querySelector('fp3d-view3d').renderRoot.querySelectorAll('.fp3d-thumb span')].map(el => el.textContent)), ['All floors','Upper level','Main floor','Lower level']);
    assert.deepEqual(await page.evaluate(() => window.fp3dPanel.renderRoot.querySelector('fp3d-view3d').viewer.floors.filter(f => !f.label.hidden).map(f => [f.label.querySelector('b').textContent,f.label.querySelector('span').textContent])), [['Lower level','2 rooms'],['Main floor','1 room'],['Upper level','2 rooms · 1 lights on']]);
    await snapshot('house');
    await click('panel','.fp3d-nav .fp3d-chip','Upper level');
    await page.waitForFunction(() => window.fp3dPanel.renderRoot.querySelector('fp3d-view3d').viewer.floorId === 'suite');
    assert.deepEqual(await page.evaluate(() => [...window.fp3dPanel.renderRoot.querySelectorAll('.fp3d-room-chip')].map(b => b.textContent.trim())), ['Mezzanine room','Upper floor room']);
    assert.deepEqual(await page.evaluate(() => [...window.fp3dPanel.renderRoot.querySelectorAll('.fp3d-nav-floor')].map(b => b.textContent.trim())), ['Mezzanine','Upper floor']);
    for (const mode of ['single','dim','stacked']) {
      const floors = await page.evaluate(mode => {
        const v = window.fp3dPanel.renderRoot.querySelector('fp3d-view3d').viewer;
        v.setFloorStack(mode); return v.floors.map(f => [f.floor.id,f.to,f.ty]);
      }, mode);
      assert.deepEqual(floors.slice(3), [['suite',1,0],['upper',1,0]], `${mode}: both members keep their physical elevation`);
      assert.ok(floors.slice(0,3).every(f => mode === 'single' ? f[1] === 0 : mode === 'stacked' ? f[1] === 1 && f[2] === 0 : f[1] > 0 && f[1] < 1));
    }
    await page.waitForFunction(() => window.fp3dPanel.renderRoot.querySelector('fp3d-view3d').viewer.floors.slice(3).every(f => f.roomPins.every(p => !p.pin.hidden)));
    await page.evaluate(() => {
      const v = window.fp3dPanel.renderRoot.querySelector('fp3d-view3d').viewer;
      v.setDevices(v.devices.map(d => ({...d,pin:true})));
    });
    await page.waitForFunction(() => {
      const v = window.fp3dPanel.renderRoot.querySelector('fp3d-view3d').viewer;
      return v.devices.filter(d => ['suite','upper'].includes(d.floorId)).every(d => !v.devicePins.get(d.id)?.el.hidden);
    });
    assert.deepEqual(await page.evaluate(() => {
      const v = window.fp3dPanel.renderRoot.querySelector('fp3d-view3d').viewer;
      return v.devices.filter(d => ['suite','upper'].includes(d.floorId)).map(d => [d.floorId, v.devicePins.get(d.id)?.el.hidden]);
    }), [['suite',false],['upper',false]]);
    if (name === 'desktop') {
      await page.evaluate(() => {
        const v = window.fp3dPanel.renderRoot.querySelector('fp3d-view3d').viewer;
        v.setPersonLook('pin');
        v.setPersons([{id:'synthetic',name:'Test person',initials:'T',picture:null,floorId:'upper',roomId:'upper-room',x:7,z:2}]);
        window.anchorVisibility = [];
        v.setAnchorCallback((i,x,y,visible) => { window.anchorVisibility[i] = visible; });
        v.setAnchors([{p:[7,3.5,2],n:[0,1,0],floorId:'upper',size:1,roof:false,views:'floor',room:'upper-room'}]);
      });
      await page.waitForFunction(() => window.anchorVisibility[0] === true && !window.fp3dPanel.renderRoot.querySelector('fp3d-view3d').viewer.personPins.get('synthetic').hidden);
    }
    await click('panel','.fp3d-room-chip','Upper floor room');
    await page.waitForFunction(() => window.fp3dPanel._roomId === 'upper-room');
    assert.equal(await page.evaluate(() => window.fp3dPanel._floorId), 'upper');
    if (name === 'phone') await click('room','.fp3d-rp-close');
    else await click('panel','button','Back');
    await page.waitForFunction(() => !window.fp3dPanel._roomId);
    assert.equal(await page.evaluate(() => window.fp3dPanel._floorId), 'upper');
    await click('view','.fp3d-central-btn');
    await page.waitForFunction(() => window.fp3dPanel.renderRoot.querySelector('fp3d-view3d').renderRoot.querySelector('.fp3d-central'));
    assert.deepEqual(await page.evaluate(() => {
      const root = window.fp3dPanel.renderRoot.querySelector('fp3d-view3d').renderRoot;
      return [root.querySelector('.fp3d-central-top b').textContent,root.querySelector('.fp3d-central-row small').textContent];
    }), ['Upper level','3/3']);
    await click('view','.fp3d-central-row button','Off');
    assert.deepEqual(await page.evaluate(() => window.serviceCalls), [['light','turn_off',{entity_id:['light.shared','light.suite','light.upper']}]]);
    await snapshot('group');
    await click('view','.fp3d-central-btn');
    await click('panel','button','Back');
    await page.waitForFunction(() => window.fp3dPanel._floorId === null);
    for (const explode of [false,true]) {
      const offsets = await page.evaluate(explode => {
        const v = window.fp3dPanel.renderRoot.querySelector('fp3d-view3d').viewer;
        v.setExplode(explode); return v.floors.map(f => f.ty);
      }, explode);
      assert.equal(offsets[0],offsets[1]); assert.equal(offsets[3],offsets[4]);
      assert.ok(explode ? offsets[0] < offsets[2] && offsets[2] < offsets[3] : offsets.every(v => v === 0));
    }
    // Native keyboard edits must flow through change -> debounced save -> fetched building.
    await page.evaluate(() => window.fp3dPanel.setMode('editor'));
    await page.waitForFunction(() => window.fp3dPanel.renderRoot.querySelector('fp3d-editor')?.renderRoot.querySelector('input[list="fp3d-navigation-groups"]'));
    assert.deepEqual(await page.evaluate(() => {
      const root = window.fp3dPanel.renderRoot.querySelector('fp3d-editor').renderRoot;
      const input = root.querySelector('input[list="fp3d-navigation-groups"]');
      return [input.maxLength, [...root.querySelectorAll('#fp3d-navigation-groups option')].map(o => o.value), !!root.getElementById(input.getAttribute('aria-describedby'))?.textContent.trim()];
    }), [100,['Lower level','Upper level'],true]);
    const editGroup = async value => {
      const input = await page.evaluateHandle(() => window.fp3dPanel.renderRoot.querySelector('fp3d-editor').renderRoot.querySelector('input[list="fp3d-navigation-groups"]'));
      await input.asElement().click();
      await page.keyboard.down('Control'); await page.keyboard.press('KeyA'); await page.keyboard.up('Control');
      await page.keyboard.press('Backspace');
      if (value) await page.keyboard.type(value);
      await page.keyboard.press('Tab');
      await page.waitForFunction(async value => (await window.fp3dPanel.hass.callWS({type:'neonplan3d/building/get'})).building.floors[0].navigation_group === value, {}, value.trim() || null);
      assert.equal(await page.evaluate(async () => (await window.fp3dPanel.hass.callWS({type:'neonplan3d/building/get'})).building.floors[0].navigation_group), value.trim() || null);
      await input.dispose();
    };
    await editGroup('  Renamed level  ');
    await snapshot('editor');
    await editGroup('');
    if (name === 'desktop') {
      await click('editor','button','3D beside');
      await page.waitForFunction(() => window.fp3dPanel.renderRoot.querySelector('fp3d-editor').renderRoot.querySelector('fp3d-view3d')?.viewer);
      assert.equal(await page.evaluate(() => window.fp3dPanel.renderRoot.querySelector('fp3d-editor').renderRoot.querySelector('fp3d-view3d').groupFloors), false);
    }
    await page.evaluate(() => window.fp3dPanel.setMode('view'));
    await page.waitForFunction(() => !!window.fp3dPanel.renderRoot.querySelector('fp3d-view3d')?.viewer);
    assert.deepEqual(await nav(), ['All floors','Upper level','Main floor','Lower level','Cellar']);
    // A new component fetches the persisted edit; IDs, geometry and elevations are untouched.
    await page.evaluate(() => {
      const panel = window.fp3dPanel, card = document.createElement('neonplan3d-card');
      card.setConfig({type:'custom:neonplan3d-card',floor:'upper',floor_thumbs:false,floor_stack:'single',height:500});
      card.hass = panel.hass; panel.remove(); document.body.append(card); window.testCard = card;
    });
    await page.waitForFunction(() => window.testCard.renderRoot.querySelector('fp3d-view3d')?.viewer?.floors.length === 5);
    assert.deepEqual(await page.evaluate(() => window.testCard.renderRoot.querySelector('fp3d-view3d').viewer.floors.filter(f => f.to === 1).map(f => f.floor.id)), ['upper']);
    assert.equal(await page.evaluate(() => window.testCard.data.building.floors[0].navigation_group), null);
    await page.evaluate(async () => {
      const card = window.testCard;
      card.renderRoot.querySelector('fp3d-view3d').dispatchEvent(new CustomEvent('room-tap',{detail:{floorId:'suite',roomId:'suite-room'}}));
      await card.updateComplete;
      card.renderRoot.querySelector('fp3d-view3d').dispatchEvent(new CustomEvent('floor-tap',{detail:{floorId:'suite'}}));
      await card.updateComplete;
    });
    assert.equal(await page.evaluate(() => window.testCard.renderRoot.querySelector('fp3d-view3d').floorId), 'upper');
    await page.evaluate(() => window.testCard.setConfig({type:'custom:neonplan3d-card',floor:'upper',floor_thumbs:true,floor_stack:'single',height:500}));
    await page.waitForFunction(() => window.testCard.renderRoot.querySelector('fp3d-view3d').viewer.floors.filter(f => f.to === 1).length === 2);
    assert.deepEqual(await page.evaluate(() => window.testCard.data.building.floors.map(f => [f.id,f.elevation,f.rooms[0].id,f.rooms[0].points])), await page.evaluate(() => window.testBuilding.floors.map(f => [f.id,f.elevation,f.rooms[0].id,f.rooms[0].points])));
    await page.evaluate(async () => {
      const card = window.testCard, building = structuredClone(card.data.building);
      for (const floor of building.floors) delete floor.navigation_group;
      await card.hass.callWS({type:'neonplan3d/building/save',building});
      card.setConfig({type:'custom:neonplan3d-card',floor:'upper',floor_thumbs:true,floor_stack:'single',height:500});
    });
    await page.waitForFunction(() => window.testCard.renderRoot.querySelector('fp3d-view3d')._thumbs.length === 5);
    assert.deepEqual(await page.evaluate(() => window.testCard.renderRoot.querySelector('fp3d-view3d').viewer.floors.filter(f => f.to === 1).map(f => f.floor.id)), ['upper']);
    if (name === 'desktop') {
      // Equal elevations and an empty group anchor still produce one selectable destination.
      await page.evaluate(async () => {
        const card = window.testCard, building = structuredClone(window.testBuilding);
        building.floors[3].rooms = [];
        building.floors[4].elevation = building.floors[2].elevation = 1.5;
        await card.hass.callWS({type:'neonplan3d/building/save',building});
        card.setConfig({type:'custom:neonplan3d-card',floor:'suite',floor_thumbs:true,floor_stack:'single',height:500});
      });
      await page.waitForFunction(() => window.testCard.data.building.floors[3].rooms.length === 0 && window.testCard.renderRoot.querySelector('fp3d-view3d')._thumbs.length === 3);
      assert.deepEqual(await page.evaluate(() => window.testCard.renderRoot.querySelector('fp3d-view3d').viewer.floors.filter(f => f.to === 1).map(f => f.floor.id)), ['suite','upper']);
      assert.ok(await page.evaluate(() => window.testCard.renderRoot.querySelector('fp3d-view3d')._thumbs.some(t => t.floorId === 'suite')));
      await page.evaluate(async () => {
        const card = window.testCard, building = structuredClone(card.data.building);
        building.floors = building.floors.filter(f => f.id !== 'suite');
        await card.hass.callWS({type:'neonplan3d/building/save',building});
      });
      await page.waitForFunction(() => window.testCard.renderRoot.querySelector('fp3d-view3d').viewer.floors.length === 4);
      assert.equal(await page.evaluate(() => window.testCard.renderRoot.querySelector('fp3d-view3d').floorId), null);
      await page.waitForFunction(() => window.testCard.renderRoot.querySelector('fp3d-view3d')._thumbs.every(t => t.floorId !== 'suite'));
    }
    assert.deepEqual(errors, [], `${name}: uncaught browser errors`);
    await context.close();
    console.log(`PASS ${name}: keyboard edit/save/readback, group navigation/back, controls, stack/explode modes, fixed/switchable/ungrouped cards.`);
  }
} finally { await browser?.close(); await new Promise(ok => server.close(ok)); }
