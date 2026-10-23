export default { title: 'Foundations/Spacing, radius, elevation', parameters: { layout: 'padded' } };

const space = [[1, 'Icon-to-label gap'], [2, 'Tight internal padding'], [3, 'Cell padding, small gaps'], [4, 'Default element gap'], [6, 'Card padding, section gaps'], [8, 'Major section separation'], [12, 'Page-level breathing room']];
const radius = [['sm', 'Small controls'], ['md', 'Cards (default)'], ['lg', 'Large containers'], ['pill', 'Chips, progress bars']];

export const Spacing = {
  render: () =>
    space
      .map(
        ([n, use]) => `
    <div style="display:grid;grid-template-columns:160px 1fr;gap:16px;align-items:center;margin-bottom:8px;font:var(--cds-type-body)">
      <code>--cds-space-${n}</code>
      <div style="display:flex;align-items:center;gap:12px"><span style="display:block;height:16px;width:var(--cds-space-${n});background:var(--cds-color-interactive-primary);border-radius:2px"></span><span style="color:var(--cds-color-text-secondary)">${use}</span></div>
    </div>`,
      )
      .join(''),
};

export const RadiusAndElevation = {
  render: () =>
    `<div style="display:flex;flex-wrap:wrap;gap:24px;font:var(--cds-type-body)">` +
    radius
      .map(
        ([n, use]) =>
          `<div><div style="width:120px;height:72px;background:var(--cds-color-surface-raised);border:1px solid var(--cds-color-border-default);border-radius:var(--cds-radius-${n});box-shadow:var(--cds-shadow-card)"></div><code>--cds-radius-${n}</code><div style="color:var(--cds-color-text-muted);font:var(--cds-type-caption)">${use}</div></div>`,
      )
      .join('') +
    `</div>`,
};
