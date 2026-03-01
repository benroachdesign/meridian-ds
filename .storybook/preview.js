import '../src/index.css';

/** @type { import('@storybook/react-vite').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo',
    },
    backgrounds: {
      default: 'surface-base',
      values: [
        { name: 'surface-base',   value: '#ffffff' },
        { name: 'surface-subtle', value: '#f8f8f8' },
        { name: 'dark',           value: '#0d0d0d' },
      ],
    },
  },
};

export default preview;
