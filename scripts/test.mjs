// Changent Design System — checks. Run after build: `npm run check`
import Ajv from 'ajv';
import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve(import.meta.dirname, '..');
const read = (p) => JSON.parse(fs.readFileSync(path.join(root, p), 'utf8'));
let failures = 0;
const fail = (m) => { failures++; console.log(`  ✗ ${m}`); };
const section = (m) => console.log(`\n${m}`);

// ---------- 1. Power BI theme vs official schema ----------
section('Power BI theme — official JSON schema (microsoft/powerbi-desktop-samples)');
const schema = read('scripts/reportThemeSchema.json');
const theme = read('powerbi/changent-powerbi-theme.json');
const ajv = new Ajv({ allErrors: true, strict: false, validateSchema: false });
const validate = ajv.compile(schema);
if (!validate(theme)) for (const e of validate.errors) fail(`${e.instancePath || '/'} ${e.message} ${JSON.stringify(e.params)}`);
else console.log('  ✓ schema valid');

// ---------- 2. Every visual / card / property exists in the schema ----------
// (the schema accepts unknown keys inside cards, so typos pass validation silently — Power BI then ignores them)
section('Power BI theme — every visualStyles property is a real Power BI property');
const D = schema.definitions, VS = schema.properties.visualStyles.properties;
const res = (x) => { while (x && x.$ref && Object.keys(x).length <= 3) x = D[x.$ref.split('/').pop()]; return x; };
function cardsOf(visual) {
  const out = {};
  const walk = (node) => {
    node = res(node);
    if (!node) return;
    for (const part of node.allOf ?? []) walk(part);
    for (const [card, def] of Object.entries(node.properties ?? {})) {
      const items = res(res(def)?.items);
      out[card] ??= new Set();
      for (const k of Object.keys(items?.properties ?? {})) out[card].add(k);
    }
  };
  walk(VS[visual]?.properties?.['*']);
  return out;
}
let checked = 0;
for (const [visual, presets] of Object.entries(theme.visualStyles)) {
  if (visual === '*') continue;
  if (!VS[visual]) { fail(`unknown visual "${visual}"`); continue; }
  const cards = cardsOf(visual);
  for (const [card, entries] of Object.entries(presets['*'])) {
    if (!cards[card]) { fail(`${visual}.${card}: unknown card`); continue; }
    for (const prop of Object.keys(entries[0])) { checked++; if (!cards[card].has(prop)) fail(`${visual}.${card}.${prop}: unknown property`); }
  }
}
const common = cardsOf('pieChart');
for (const [card, entries] of Object.entries(theme.visualStyles['*']['*'])) {
  for (const prop of Object.keys(entries[0])) { checked++; if (!common[card]?.has(prop)) fail(`*.${card}.${prop}: unknown property`); }
}
if (!failures) console.log(`  ✓ ${checked} properties verified`);

// ---------- 3. Minimum font size (Changent rule: nothing below 12) ----------
section('Typography — no font size below 12');
const sizeKeys = new Set(['fontSize', 'textSize', 'titleFontSize', 'titleSize', 'headerSize']);
const walkSizes = (o, p = '') => {
  if (Array.isArray(o)) return o.forEach((x, i) => walkSizes(x, `${p}[${i}]`));
  if (o && typeof o === 'object') for (const [k, x] of Object.entries(o)) {
    if (sizeKeys.has(k) && typeof x === 'number' && x < 12) fail(`${p}.${k} = ${x}`);
    walkSizes(x, `${p}.${k}`);
  }
};
const before = failures; walkSizes(theme);
if (failures === before) console.log('  ✓ Power BI theme: all sizes ≥ 12');

// ---------- 4. Contrast (WCAG 2.1) ----------
const lum = (h) => { const c = [1, 3, 5].map((i) => parseInt(h.slice(i, i + 2), 16) / 255).map((x) => (x <= 0.03928 ? x / 12.92 : ((x + 0.055) / 1.055) ** 2.4)); return 0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2]; };
const ratio = (a, b) => { const [x, y] = [lum(a), lum(b)].sort((m, n) => n - m); return (x + 0.05) / (y + 0.05); };
const { light, dark } = read('dist/tokens.resolved.json');
const TEXT = 4.5, UI = 3;
const pairs = [
  // [foreground, background, minimum, note]
  ...['surface.default', 'surface.subtle', 'surface.nav', 'surface.accent', 'surface.accent-strong'].flatMap((bg) => [
    ['text.primary', bg, TEXT], ['text.secondary', bg, TEXT], ['text.muted', bg, TEXT], ['text.brand', bg, TEXT],
    ['border.default', bg, UI, 'control boundary (WCAG 1.4.11)'], ['border.focus', bg, UI],
  ]),
  ['border.default', 'surface.canvas', UI], ['text.primary', 'surface.canvas', TEXT],
  ['text.inverse', 'surface.inverse', TEXT],
  ['interactive.on-primary', 'interactive.primary', TEXT], ['interactive.on-secondary', 'interactive.secondary', TEXT],
  ...['success', 'warning', 'danger', 'info', 'neutral'].flatMap((s) => [
    [`status.${s}.text`, 'surface.default', TEXT], [`status.${s}.fill`, 'surface.default', UI, 'indicator fill'],
    [`status.${s}.on-fill`, `status.${s}.fill`, s === 'success' ? UI : TEXT, s === 'success' ? 'large/bold text only' : ''],
    [`status.${s}.text`, `status.${s}.tint`, TEXT],
  ]),
];
// Known, documented exceptions: brand fills that are "fills only" (cyan, amber) and neutral grey as an indicator.
const allowed = new Set(['status.warning.fill|surface.default', 'status.info.fill|surface.default']);
for (const [mode, tokens] of [['light', light], ['dark', { ...light, ...dark }]]) {
  section(`Contrast — ${mode} mode`);
  const start = failures; let n = 0;
  for (const [fg, bg, min, note] of pairs) {
    const a = tokens[`color.${fg}`], b = tokens[`color.${bg}`];
    if (!a || !b) { fail(`missing token ${!a ? fg : bg}`); continue; }
    n++;
    const r = ratio(a.toUpperCase(), b.toUpperCase());
    if (r < min) {
      if (allowed.has(`${fg}|${bg}`)) console.log(`  ~ ${fg} on ${bg}: ${r.toFixed(2)} (documented exception: fill only, always paired with icon + dark text)`);
      else fail(`${fg} ${a} on ${bg} ${b}: ${r.toFixed(2)} < ${min}${note ? ` — ${note}` : ''}`);
    }
  }
  if (failures === start) console.log(`  ✓ ${n} pairs pass`);
}

console.log(failures ? `\n✗ ${failures} failure(s)` : '\n✓ All checks passed');
process.exit(failures ? 1 : 0);
