export default {
  title: 'Components/Table',
  tags: ['autodocs'],
  parameters: { docs: { description: { component: 'Navy header with white bold text, alternating subtle rows, divider borders. Cell text is 14px: plan column widths and truncation with a tooltip instead of shrinking the font.' } } },
  render: () => `
    <table class="table">
      <thead><tr><th>Program</th><th>Status</th><th>Capacity</th></tr></thead>
      <tbody>
        <tr><td>Fidelity</td><td><span class="txt--success">✓ On track</span></td><td>79%</td></tr>
        <tr><td>Pioneer</td><td><span class="txt--warning">▲ At risk</span></td><td>62%</td></tr>
        <tr><td>Atlas</td><td><span class="txt--danger">! SLA breach</span></td><td>41%</td></tr>
      </tbody>
    </table>`,
};

export const Default = {};
