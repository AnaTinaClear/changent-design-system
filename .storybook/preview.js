// Everything visual comes from the generated tokens (dist/tokens.css) via css/changent-ds.css.
import '../css/changent-ds.css';

const applyTheme = (theme) => {
  document.documentElement.setAttribute('data-theme', theme);
  document.body.style.background = 'var(--cds-color-surface-default)';
  document.body.style.color = 'var(--cds-color-text-primary)';
};

/** @type {import('@storybook/html-vite').Preview} */
export default {
  globalTypes: {
    theme: {
      description: 'Color theme',
      toolbar: { title: 'Theme', icon: 'circlehollow', items: [{ value: 'light', title: 'Light' }, { value: 'dark', title: 'Dark' }], dynamicTitle: true },
    },
  },
  initialGlobals: { theme: 'light' },
  decorators: [
    (story, context) => {
      applyTheme(context.globals.theme);
      return story();
    },
  ],
  parameters: {
    layout: 'padded',
    controls: { expanded: true },
    a11y: { test: 'todo' },
    docs: { toc: true },
  },
};
