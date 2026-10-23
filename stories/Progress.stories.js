export default {
  title: 'Components/Progress bar',
  tags: ['autodocs'],
  parameters: { docs: { description: { component: 'Success fill on a divider-grey track, pill radius. Always show the numeric value next to the bar.' } } },
  argTypes: { value: { control: { type: 'range', min: 0, max: 100, step: 1 } } },
  args: { value: 79 },
  render: ({ value }) =>
    `<div style="max-width:320px;display:flex;flex-direction:column;gap:4px">
      <div class="progress" role="progressbar" aria-valuenow="${value}" aria-valuemin="0" aria-valuemax="100" aria-label="Capacity"><span style="width:${value}%"></span></div>
      <span style="font:var(--cds-type-body)">${value}% of capacity</span>
    </div>`,
};

export const Default = {};
