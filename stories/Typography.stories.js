export default { title: 'Foundations/Typography', parameters: { layout: 'padded' } };

const styles = [
  ['kpi', '32 bold', 'Key numbers on KPI cards', '79%'],
  ['h1', '24 bold', 'Page and report titles', 'Client utilization'],
  ['h2', '18 semibold', 'Section headings', 'Program overview'],
  ['title', '16 semibold', 'Visual and chart titles', 'Capacity by program'],
  ['body', '14 regular', 'Content and table cells', 'Fidelity is on track at 79% of capacity.'],
  ['label', '14 semibold', 'Slicer labels, column labels, nav items', 'Program name'],
  ['caption', '12 regular', 'Tooltips, footnotes, legends, axis titles only', 'Source: monthly capacity report'],
];

export const TypeScale = {
  render: () =>
    `<p style="font:var(--cds-type-body);margin:0 0 24px;max-width:68ch">Segoe UI on Windows and in Power BI. Selawik (bundled, metric-compatible) loads on macOS, Linux and Android. 14px is the floor for content; nothing goes below 12px.</p>` +
    styles
      .map(
        ([n, spec, use, sample]) => `
      <div style="display:grid;grid-template-columns:140px 1fr;gap:16px;padding:16px 0;border-bottom:1px solid var(--cds-color-border-divider);align-items:baseline">
        <div style="font:var(--cds-type-caption);color:var(--cds-color-text-muted)"><code>type.${n}</code><br>${spec}</div>
        <div><div style="font:var(--cds-type-${n});color:var(--cds-color-text-primary)">${sample}</div><div style="font:var(--cds-type-caption);color:var(--cds-color-text-muted);margin-top:4px">${use}</div></div>
      </div>`,
      )
      .join(''),
};
