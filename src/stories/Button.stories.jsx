import React from 'react';
import { Button } from '../components/Button/Button';

/* --------------------------------------------------------------------------
   Inline SVG icons — no icon library dependency
   -------------------------------------------------------------------------- */
const IconArrowRight = () => (
  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M3 8h10M9 4l4 4-4 4" />
  </svg>
);

const IconDownload = () => (
  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M8 3v7M5 7l3 3 3-3" />
    <path d="M3 13h10" />
  </svg>
);

const IconTrash = () => (
  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M3 4h10M6 4V3h4v1M5 4l.667 9h4.666L11 4" />
  </svg>
);

const IconPlus = () => (
  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" aria-hidden="true">
    <path d="M8 3v10M3 8h10" />
  </svg>
);

/* --------------------------------------------------------------------------
   Meta
   -------------------------------------------------------------------------- */
/** @type { import('@storybook/react-vite').Meta<typeof Button> } */
export default {
  title: 'Meridian/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'The foundational interactive element. All visual properties are ' +
          'driven by Meridian design tokens — no hardcoded values. ' +
          'Four variants cover the full hierarchy of actions on any surface.',
      },
    },
  },
  argTypes: {
    children: {
      name: 'children',
      control: 'text',
      description: 'Visible label text (or any React node).',
      table: {
        type: { summary: 'ReactNode' },
        defaultValue: { summary: '—' },
      },
    },
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'ghost', 'danger'],
      description:
        '**primary** — highest hierarchy, filled accent. ' +
        '**secondary** — outlined, supporting action. ' +
        '**ghost** — no fill or border, lowest weight. ' +
        '**danger** — destructive or irreversible actions.',
      table: {
        type: { summary: "'primary' | 'secondary' | 'ghost' | 'danger'" },
        defaultValue: { summary: 'primary' },
      },
    },
    size: {
      control: { type: 'radio' },
      options: ['sm', 'md', 'lg'],
      description:
        'Controls height, padding, and font size. ' +
        '**sm** → 32 px, **md** → 40 px, **lg** → 48 px.',
      table: {
        type: { summary: "'sm' | 'md' | 'lg'" },
        defaultValue: { summary: 'md' },
      },
    },
    disabled: {
      control: 'boolean',
      description:
        'Renders the native `disabled` attribute. Prevents all interaction ' +
        'and applies muted styling via tokens.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    loading: {
      control: 'boolean',
      description:
        'Shows an animated spinner and sets `aria-busy`. The label stays ' +
        'in the DOM (invisible) so the button width is stable.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    iconLeft: {
      control: false,
      description: 'React node rendered before the label. Typically an SVG icon.',
      table: {
        type: { summary: 'ReactNode' },
        defaultValue: { summary: 'undefined' },
      },
    },
    iconRight: {
      control: false,
      description: 'React node rendered after the label. Typically an SVG icon.',
      table: {
        type: { summary: 'ReactNode' },
        defaultValue: { summary: 'undefined' },
      },
    },
    fullWidth: {
      control: 'boolean',
      description: 'Stretches the button to 100 % of its container width.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    type: {
      control: { type: 'select' },
      options: ['button', 'submit', 'reset'],
      description: 'Maps to the native HTML `type` attribute.',
      table: {
        type: { summary: "'button' | 'submit' | 'reset'" },
        defaultValue: { summary: 'button' },
      },
    },
    onClick: {
      action: 'clicked',
      description: 'Callback fired on click (when not disabled or loading).',
      table: {
        type: { summary: '(event: React.MouseEvent) => void' },
        defaultValue: { summary: 'undefined' },
      },
    },
  },
  args: {
    children: 'Button',
    variant: 'primary',
    size: 'md',
    disabled: false,
    loading: false,
    fullWidth: false,
    type: 'button',
  },
};

/* ==========================================================================
   Single-prop stories — one thing changes, everything else is default.
   These become rows in the autodocs Args table.
   ========================================================================== */

export const Primary = {
  args: { variant: 'primary', children: 'Primary' },
};

export const Secondary = {
  args: { variant: 'secondary', children: 'Secondary' },
};

export const Ghost = {
  args: { variant: 'ghost', children: 'Ghost' },
};

export const Danger = {
  args: { variant: 'danger', children: 'Delete item', iconLeft: <IconTrash /> },
};

export const Small = {
  args: { size: 'sm', children: 'Small' },
};

export const Medium = {
  args: { size: 'md', children: 'Medium' },
};

export const Large = {
  args: { size: 'lg', children: 'Large' },
};

export const Disabled = {
  args: { disabled: true, children: 'Disabled' },
  parameters: {
    docs: {
      description: { story: 'All variants share the same disabled token values — muted background and text.' },
    },
  },
};

export const Loading = {
  args: { loading: true, children: 'Saving…' },
  parameters: {
    docs: {
      description: {
        story:
          'The spinner replaces the visible content while `aria-busy` is set. ' +
          'The label stays invisible in the DOM to hold the button\'s width.',
      },
    },
  },
};

export const WithIconLeft = {
  args: { children: 'Download', iconLeft: <IconDownload /> },
};

export const WithIconRight = {
  args: { children: 'Continue', iconRight: <IconArrowRight /> },
};

export const WithBothIcons = {
  args: { children: 'New item', iconLeft: <IconPlus />, iconRight: <IconArrowRight /> },
};

export const FullWidth = {
  args: { children: 'Submit form', fullWidth: true },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '400px' }}>
        <Story />
      </div>
    ),
  ],
};

/* ==========================================================================
   Matrix stories — comprehensive grids, not wired to Args controls.
   ========================================================================== */

const grid = {
  display: 'grid',
  alignItems: 'center',
  gap: 'var(--stack-md) var(--inline-lg)',
};

const label = {
  fontSize: 'var(--font-size-xs)',
  fontFamily: 'var(--font-family-sans)',
  fontWeight: 'var(--font-weight-medium)',
  color: 'var(--color-text-secondary)',
  letterSpacing: 'var(--letter-spacing-wide)',
  textTransform: 'uppercase',
};

/**
 * Every variant at every size, in a single grid.
 * Use this story to review the full visual language at a glance.
 */
export const AllVariantsAndSizes = {
  name: 'All Variants × Sizes',
  render: () => (
    <div style={{ fontFamily: 'var(--font-family-sans)', padding: 'var(--inset-lg)' }}>
      <div style={{ ...grid, gridTemplateColumns: '80px repeat(3, auto)' }}>
        {/* Header row */}
        <span />
        {['sm', 'md', 'lg'].map(s => (
          <span key={s} style={{ ...label, textAlign: 'center' }}>{s}</span>
        ))}

        {/* Variant rows */}
        {['primary', 'secondary', 'ghost', 'danger'].map(v => (
          <React.Fragment key={v}>
            <span style={label}>{v}</span>
            {['sm', 'md', 'lg'].map(s => (
              <Button key={s} variant={v} size={s}>
                {v.charAt(0).toUpperCase() + v.slice(1)}
              </Button>
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  ),
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: 'Full matrix of all four variants × three sizes.',
      },
    },
  },
};

/**
 * Every variant in its disabled and loading states.
 */
export const AllStates = {
  name: 'All States',
  render: () => {
    const states = [
      { label: 'Default',  props: {} },
      { label: 'Disabled', props: { disabled: true } },
      { label: 'Loading',  props: { loading: true } },
    ];
    const variants = ['primary', 'secondary', 'ghost', 'danger'];

    return (
      <div style={{ fontFamily: 'var(--font-family-sans)', padding: 'var(--inset-lg)' }}>
        <div style={{ ...grid, gridTemplateColumns: '88px repeat(4, auto)' }}>
          {/* Header */}
          <span />
          {variants.map(v => (
            <span key={v} style={{ ...label, textAlign: 'center' }}>{v}</span>
          ))}

          {/* State rows */}
          {states.map(({ label: stateLabel, props }) => (
            <React.Fragment key={stateLabel}>
              <span style={label}>{stateLabel}</span>
              {variants.map(v => (
                <Button key={v} variant={v} {...props}>
                  {stateLabel}
                </Button>
              ))}
            </React.Fragment>
          ))}
        </div>
      </div>
    );
  },
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: 'Default, disabled, and loading across all four variants.',
      },
    },
  },
};

/**
 * Icon usage patterns.
 */
export const IconPatterns = {
  name: 'Icon Patterns',
  render: () => (
    <div style={{
      fontFamily: 'var(--font-family-sans)',
      padding: 'var(--inset-lg)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--stack-lg)',
    }}>
      {['sm', 'md', 'lg'].map(s => (
        <div key={s} style={{ display: 'flex', alignItems: 'center', gap: 'var(--inline-lg)', flexWrap: 'wrap' }}>
          <span style={{ ...label, width: '24px' }}>{s}</span>
          <Button size={s} iconLeft={<IconDownload />}>Download</Button>
          <Button size={s} iconRight={<IconArrowRight />}>Continue</Button>
          <Button size={s} iconLeft={<IconPlus />} iconRight={<IconArrowRight />}>New item</Button>
          <Button size={s} variant="secondary" iconLeft={<IconDownload />}>Export</Button>
          <Button size={s} variant="ghost" iconLeft={<IconPlus />}>Add</Button>
          <Button size={s} variant="danger" iconLeft={<IconTrash />}>Delete</Button>
        </div>
      ))}
    </div>
  ),
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: 'Icon left, icon right, and both — at all three sizes.',
      },
    },
  },
};
