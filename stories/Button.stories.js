export default {
  title: 'Components/Button',
  tags: ['autodocs'],
  parameters: { docs: { description: { component: 'Primary is navy with white text. Secondary is the grey surface with navy text. Disabled text uses `text.disabled` (`#8B8D90`), never `#C0C0C0`. Focus shows a 2px navy ring.' } } },
  argTypes: { variant: { control: 'inline-radio', options: ['primary', 'secondary'] }, label: { control: 'text' }, disabled: { control: 'boolean' } },
  args: { variant: 'primary', label: 'Save report', disabled: false },
  render: ({ variant, label, disabled }) => `<button class="btn btn--${variant}" type="button"${disabled ? ' disabled' : ''}>${label}</button>`,
};

export const Primary = {};
export const Secondary = { args: { variant: 'secondary', label: 'Cancel' } };
export const Disabled = { args: { disabled: true } };
