const statuses = {
  success: { icon: '✓', label: 'Completed' },
  warning: { icon: '▲', label: 'At risk' },
  danger: { icon: '!', label: 'Critical' },
  info: { icon: 'i', label: 'Selected' },
  neutral: { icon: '—', label: 'No data' },
};

export default {
  title: 'Components/Status chip',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Pill-shaped status label. Always an icon **and** a label. `warning` and `info` use dark text on their fill by design (`on-fill`); white fails there. Use the `txt--*` classes when the status is inline text on white.',
      },
    },
  },
  argTypes: { status: { control: 'select', options: Object.keys(statuses) }, label: { control: 'text' } },
  args: { status: 'success', label: 'Completed' },
  render: ({ status, label }) => `<span class="chip chip--${status}">${statuses[status].icon} ${label}</span>`,
};

export const Playground = {};

export const AllStatuses = {
  render: () =>
    `<div style="display:flex;gap:8px;flex-wrap:wrap">${Object.entries(statuses)
      .map(([s, { icon, label }]) => `<span class="chip chip--${s}">${icon} ${label}</span>`)
      .join('')}</div>`,
};

export const StatusAsText = {
  render: () =>
    `<div style="display:flex;gap:16px;flex-wrap:wrap">
      <span class="txt--success">✓ Above target</span>
      <span class="txt--warning">▲ Below target</span>
      <span class="txt--danger">! SLA breach</span>
      <span class="txt--info">i Selected</span>
    </div>`,
};
