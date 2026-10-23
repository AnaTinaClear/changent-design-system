export default {
  title: 'Components/Input',
  tags: ['autodocs'],
  parameters: { docs: { description: { component: 'Controls use `border.default` (`#808285`, at least 3:1). Always pair with a visible label.' } } },
  argTypes: { label: { control: 'text' }, placeholder: { control: 'text' }, disabled: { control: 'boolean' } },
  args: { label: 'Program name', placeholder: 'Search programs', disabled: false },
  render: ({ label, placeholder, disabled }) =>
    `<div style="max-width:320px;display:flex;flex-direction:column;gap:4px">
      <label for="sb-input" style="font:var(--cds-type-label)">${label}</label>
      <input id="sb-input" class="input" placeholder="${placeholder}"${disabled ? ' disabled' : ''}>
    </div>`,
};

export const Default = {};
export const Disabled = { args: { disabled: true } };
