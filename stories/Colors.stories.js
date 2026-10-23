import tokens from '../dist/tokens.resolved.json';

export default { title: 'Foundations/Colors', parameters: { layout: 'padded' } };

const light = tokens.light;
const cssVar = (key) => `--cds-${key.replace(/\./g, '-')}`;
const swatch = (key) => `
  <div style="display:flex;align-items:center;gap:12px;min-width:0">
    <span style="flex:none;width:40px;height:40px;border-radius:8px;border:1px solid var(--cds-color-border-default);background:var(${cssVar(key)})"></span>
    <span style="min-width:0;font:var(--cds-type-body)"><strong style="font-weight:600">${key.replace('color.', '')}</strong><br><code style="font-size:12px;color:var(--cds-color-text-muted)">${light[key]}</code></span>
  </div>`;
const group = (title, prefix) => {
  const keys = Object.keys(light).filter((k) => k.startsWith(prefix));
  return `<h3 style="font:var(--cds-type-h2);margin:32px 0 12px">${title}</h3>
    <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(240px,1fr));gap:16px">${keys.map(swatch).join('')}</div>`;
};

export const Semantic = {
  render: () =>
    [['Text', 'color.text.'], ['Surfaces', 'color.surface.'], ['Borders', 'color.border.'], ['Interactive', 'color.interactive.'], ['Status', 'color.status.']]
      .map(([t, p]) => group(t, p))
      .join(''),
};

export const Chart = {
  render: () =>
    group('Categorical (use in this order, max 6)', 'color.chart.categorical.') +
    group('Sequential', 'color.chart.sequential.') +
    group('Diverging', 'color.chart.diverging.') +
    group('Priority', 'color.chart.priority.'),
};

export const Primitives = {
  render: () =>
    `<p style="font:var(--cds-type-body);max-width:68ch">Raw palette values. UI code never uses these directly: use the semantic tokens.</p>` +
    ['navy', 'cyan', 'orange', 'green', 'purple', 'grey', 'amber', 'red', 'green-status'].map((n) => group(n, `color.${n}.`)).join(''),
};
