export default {
  title: 'Components/Card and KPI',
  tags: ['autodocs'],
  parameters: { docs: { description: { component: 'White surface, `radius.md`, `shadow.card`, 24px padding. No accent stripes: use `*-tint` backgrounds or the shadow. A KPI always carries a directional icon, not only a color.' } } },
  argTypes: { value: { control: 'text' }, label: { control: 'text' }, trend: { control: 'select', options: ['success', 'warning', 'danger'] } },
  args: { value: '79%', label: 'Client utilization', trend: 'success' },
  render: ({ value, label, trend }) => {
    const t = { success: '▲ Above target', warning: '▲ Below target', danger: '▼ SLA breach' }[trend];
    return `<div class="card" style="max-width:260px">
      <p class="kpi-value">${value}</p>
      <p class="kpi-label">${label}</p>
      <span class="txt--${trend}">${t}</span>
    </div>`;
  },
};

export const Kpi = {};
export const AtRisk = { args: { value: '62%', label: 'Pioneer capacity', trend: 'warning' } };
