import '../src/index.css';

/* Inject Google Fonts into the Storybook document head at module load time.
   src/index.css carries the same @import for the React app. */
const GOOGLE_FONTS_URL =
  'https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:wght@400;500;600&display=swap';

if (typeof document !== 'undefined' && !document.getElementById('meridian-fonts')) {
  const link = document.createElement('link');
  link.id   = 'meridian-fonts';
  link.rel  = 'stylesheet';
  link.href = GOOGLE_FONTS_URL;
  document.head.appendChild(link);
}

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
