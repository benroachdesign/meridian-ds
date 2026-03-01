import React, { useState } from 'react';
import { Badge } from '../components/Badge/Badge';

/** @type { import('@storybook/react-vite').Meta<typeof Badge> } */
export default {
  title: 'Meridian/Badge',
  component: Badge,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Compact label for status, category, or count. ' +
          'Optionally includes a coloured dot indicator or a dismiss button.',
      },
    },
  },
  argTypes: {
    children: {
      control: 'text',
      description: 'Label text or node rendered inside the badge.',
      table: {
        type: { summary: 'ReactNode' },
        defaultValue: { summary: '—' },
      },
    },
    variant: {
      control: { type: 'select' },
      options: ['neutral', 'success', 'warning', 'danger', 'info'],
      description:
        'Sets background, text, and border colours from semantic token aliases.',
      table: {
        type: { summary: "'neutral' | 'success' | 'warning' | 'danger' | 'info'" },
        defaultValue: { summary: 'neutral' },
      },
    },
    size: {
      control: { type: 'radio' },
      options: ['sm', 'md'],
      description: '**sm** → 10 px font. **md** → 12 px font.',
      table: {
        type: { summary: "'sm' | 'md'" },
        defaultValue: { summary: 'md' },
      },
    },
    dot: {
      control: 'boolean',
      description:
        'Renders a small filled circle before the label. ' +
        'Colour is the semantic hue of the variant (not `currentColor`), ' +
        'so it reads as a status signal even without colour context.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    onDismiss: {
      action: 'dismissed',
      description:
        'When provided, a dismiss (×) button is rendered. ' +
        'Call this handler to remove the badge from the DOM.',
      table: {
        type: { summary: '() => void' },
        defaultValue: { summary: 'undefined' },
      },
    },
  },
  args: {
    children: 'Badge',
    variant: 'neutral',
    size: 'md',
    dot: false,
  },
};

/* ==========================================================================
   Single-prop stories
   ========================================================================== */

export const Neutral = { args: { variant: 'neutral', children: 'Neutral' } };
export const Success = { args: { variant: 'success', children: 'Success' } };
export const Warning = { args: { variant: 'warning', children: 'Warning' } };
export const Danger  = { args: { variant: 'danger',  children: 'Danger'  } };
export const Info    = { args: { variant: 'info',    children: 'Info'    } };

export const WithDot = {
  args: { dot: true, children: 'Live' },
  parameters: {
    docs: {
      description: { story: 'Dot colour is the semantic hue of the variant.' },
    },
  },
};

export const Dismissible = {
  render: (args) => {
    const [visible, setVisible] = useState(true);
    return visible
      ? <Badge {...args} onDismiss={() => setVisible(false)} />
      : <span style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-secondary)' }}>Badge dismissed.</span>;
  },
  args: { children: 'Dismissible', variant: 'info' },
  parameters: {
    docs: {
      description: { story: 'Click the × to dismiss. State is managed in the story.' },
    },
  },
};

export const Small = { args: { size: 'sm', children: 'Small' } };

/* ==========================================================================
   Matrix stories
   ========================================================================== */

const row = {
  display: 'flex',
  alignItems: 'center',
  gap: 'var(--inline-md)',
  flexWrap: 'wrap',
};

const colLabel = {
  fontSize: 'var(--font-size-xs)',
  fontFamily: 'var(--font-family-sans)',
  color: 'var(--color-text-secondary)',
  minWidth: '64px',
};

const variants = ['neutral', 'success', 'warning', 'danger', 'info'];

export const AllVariants = {
  name: 'All Variants',
  render: () => (
    <div style={{ fontFamily: 'var(--font-family-sans)', padding: 'var(--inset-lg)', display: 'flex', flexDirection: 'column', gap: 'var(--stack-md)' }}>
      {/* Plain */}
      <div style={row}>
        <span style={colLabel}>Plain</span>
        {variants.map(v => (
          <Badge key={v} variant={v}>{v.charAt(0).toUpperCase() + v.slice(1)}</Badge>
        ))}
      </div>

      {/* With dot */}
      <div style={row}>
        <span style={colLabel}>Dot</span>
        {variants.map(v => (
          <Badge key={v} variant={v} dot>{v.charAt(0).toUpperCase() + v.slice(1)}</Badge>
        ))}
      </div>

      {/* Dismissible */}
      <div style={row}>
        <span style={colLabel}>Dismiss</span>
        {variants.map(v => (
          <Badge key={v} variant={v} onDismiss={() => {}}>{v.charAt(0).toUpperCase() + v.slice(1)}</Badge>
        ))}
      </div>

      {/* Both */}
      <div style={row}>
        <span style={colLabel}>Both</span>
        {variants.map(v => (
          <Badge key={v} variant={v} dot onDismiss={() => {}}>{v.charAt(0).toUpperCase() + v.slice(1)}</Badge>
        ))}
      </div>

      {/* sm */}
      <div style={row}>
        <span style={colLabel}>sm</span>
        {variants.map(v => (
          <Badge key={v} variant={v} size="sm" dot>{v.charAt(0).toUpperCase() + v.slice(1)}</Badge>
        ))}
      </div>
    </div>
  ),
  parameters: {
    controls: { disable: true },
    docs: {
      description: { story: 'All variants × plain, dot, dismiss, both, small.' },
    },
  },
};
