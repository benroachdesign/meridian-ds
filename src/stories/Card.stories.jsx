import React from 'react';
import { Card } from '../components/Card/Card';
import { Badge } from '../components/Badge/Badge';
import { Button } from '../components/Button/Button';

/** @type { import('@storybook/react-vite').Meta<typeof Card> } */
export default {
  title: 'Meridian/Card',
  component: Card,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'A flexible surface container. Composes a header slot, body, and ' +
          'footer slot. Visual properties — padding, shadow, radius — are ' +
          'all driven by design tokens. The `interactive` prop adds a ' +
          'hover-lift effect using motion tokens.',
      },
    },
    layout: 'padded',
  },
  argTypes: {
    children: {
      control: false,
      description: 'Main content rendered in the card body.',
      table: {
        type: { summary: 'ReactNode' },
        defaultValue: { summary: '—' },
      },
    },
    header: {
      control: false,
      description: 'Content rendered in a bordered header above the body.',
      table: {
        type: { summary: 'ReactNode' },
        defaultValue: { summary: 'undefined' },
      },
    },
    footer: {
      control: false,
      description: 'Content rendered in a tinted footer below the body.',
      table: {
        type: { summary: 'ReactNode' },
        defaultValue: { summary: 'undefined' },
      },
    },
    padding: {
      control: { type: 'radio' },
      options: ['sm', 'md', 'lg'],
      description:
        'Applied uniformly to header, body, and footer via a single ' +
        '`--card-padding` custom property. ' +
        '**sm** → 8 px, **md** → 16 px, **lg** → 24 px.',
      table: {
        type: { summary: "'sm' | 'md' | 'lg'" },
        defaultValue: { summary: 'md' },
      },
    },
    shadow: {
      control: { type: 'radio' },
      options: ['none', 'sm', 'md'],
      description:
        'Box shadow depth. When a shadow is applied, the border is made ' +
        'transparent so they do not visually stack.',
      table: {
        type: { summary: "'none' | 'sm' | 'md'" },
        defaultValue: { summary: 'none' },
      },
    },
    radius: {
      control: { type: 'radio' },
      options: ['sm', 'md', 'lg'],
      description:
        '**sm** → `--radius-sm` (4 px), **md** → `--radius-lg` (8 px), ' +
        '**lg** → `--radius-xl` (12 px).',
      table: {
        type: { summary: "'sm' | 'md' | 'lg'" },
        defaultValue: { summary: 'md' },
      },
    },
    interactive: {
      control: 'boolean',
      description:
        'Adds `cursor: pointer` and a hover-lift effect — `translateY(-2px)` ' +
        'plus one shadow-tier step-up — using `--transition-scale` and ' +
        '`--transition-base`. For keyboard accessibility also pass ' +
        '`tabIndex={0}` and `role="button"`, or wrap in an `<a>`.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    onClick: {
      action: 'clicked',
      description: 'Click handler used when `interactive` is true.',
      table: {
        type: { summary: '(e: React.MouseEvent) => void' },
        defaultValue: { summary: 'undefined' },
      },
    },
    className: {
      control: 'text',
      description: 'Additional class names merged onto the root element.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' },
      },
    },
  },
  args: {
    padding: 'md',
    shadow: 'none',
    radius: 'md',
    interactive: false,
  },
};

/* --------------------------------------------------------------------------
   Shared sample content
   -------------------------------------------------------------------------- */
const SampleBody = () => (
  <div style={{ fontFamily: 'var(--font-family-sans)' }}>
    <p style={{
      margin: '0 0 var(--stack-sm)',
      fontSize: 'var(--font-size-sm)',
      color: 'var(--color-text-primary)',
      lineHeight: 'var(--line-height-relaxed)',
    }}>
      This is some card body content. It can contain any elements — text,
      images, lists, or other components.
    </p>
    <p style={{
      margin: 0,
      fontSize: 'var(--font-size-xs)',
      color: 'var(--color-text-secondary)',
    }}>
      Secondary text or metadata sits here.
    </p>
  </div>
);

const SampleHeader = () => (
  <div style={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    fontFamily: 'var(--font-family-sans)',
  }}>
    <span style={{ fontWeight: 'var(--font-weight-semibold)', fontSize: 'var(--font-size-sm)' }}>
      Card title
    </span>
    <Badge variant="info" size="sm">New</Badge>
  </div>
);

const SampleFooter = () => (
  <div style={{ display: 'flex', gap: 'var(--inline-sm)', justifyContent: 'flex-end', fontFamily: 'var(--font-family-sans)' }}>
    <Button variant="ghost" size="sm">Cancel</Button>
    <Button variant="primary" size="sm">Confirm</Button>
  </div>
);

/* ==========================================================================
   Single-prop stories
   ========================================================================== */

export const Default = {
  args: {},
  render: (args) => (
    <Card {...args} style={{ maxWidth: '400px' }}>
      <SampleBody />
    </Card>
  ),
};

export const WithHeaderAndFooter = {
  args: { shadow: 'sm' },
  render: (args) => (
    <Card {...args} header={<SampleHeader />} footer={<SampleFooter />} style={{ maxWidth: '400px' }}>
      <SampleBody />
    </Card>
  ),
  parameters: {
    docs: {
      description: { story: 'Header and footer slots are rendered with a dividing border.' },
    },
  },
};

export const Interactive = {
  args: { interactive: true, shadow: 'sm' },
  render: (args) => (
    <Card {...args} style={{ maxWidth: '400px', cursor: 'pointer' }} tabIndex={0} role="button">
      <SampleBody />
    </Card>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Hover to see the lift effect. `tabIndex={0}` and `role="button"` ' +
          'are passed directly so keyboard users can focus and activate the card.',
      },
    },
  },
};

export const ShadowNone = { args: { shadow: 'none' }, render: (args) => <Card {...args} style={{ maxWidth: '360px' }}><SampleBody /></Card> };
export const ShadowSm   = { args: { shadow: 'sm'   }, render: (args) => <Card {...args} style={{ maxWidth: '360px' }}><SampleBody /></Card> };
export const ShadowMd   = { args: { shadow: 'md'   }, render: (args) => <Card {...args} style={{ maxWidth: '360px' }}><SampleBody /></Card> };

export const PaddingSm  = { args: { padding: 'sm' }, render: (args) => <Card {...args} style={{ maxWidth: '360px' }}><SampleBody /></Card> };
export const PaddingLg  = { args: { padding: 'lg' }, render: (args) => <Card {...args} style={{ maxWidth: '360px' }}><SampleBody /></Card> };

export const RadiusSm   = { args: { radius: 'sm', shadow: 'sm' }, render: (args) => <Card {...args} style={{ maxWidth: '360px' }}><SampleBody /></Card> };
export const RadiusLg   = { args: { radius: 'lg', shadow: 'sm' }, render: (args) => <Card {...args} style={{ maxWidth: '360px' }}><SampleBody /></Card> };

/* ==========================================================================
   Matrix stories
   ========================================================================== */

export const AllShadows = {
  name: 'Shadow Scale',
  render: () => (
    <div style={{
      display: 'flex',
      gap: 'var(--inline-2xl)',
      padding: 'var(--inset-2xl)',
      flexWrap: 'wrap',
      background: 'var(--color-surface-subtle)',
      fontFamily: 'var(--font-family-sans)',
    }}>
      {['none', 'sm', 'md'].map(s => (
        <div key={s} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--stack-sm)', alignItems: 'center' }}>
          <Card shadow={s} style={{ width: '180px' }}>
            <p style={{ margin: 0, fontSize: 'var(--font-size-xs)', color: 'var(--color-text-secondary)' }}>shadow</p>
            <p style={{ margin: 0, fontSize: 'var(--font-size-sm)', fontWeight: 'var(--font-weight-medium)' }}>{s}</p>
          </Card>
          <span style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-secondary)' }}>
            --shadow-{s === 'none' ? 'none' : s}
          </span>
        </div>
      ))}
    </div>
  ),
  parameters: { controls: { disable: true } },
};

export const InteractiveGrid = {
  name: 'Interactive Cards',
  render: () => (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 'var(--stack-md)',
      padding: 'var(--inset-lg)',
      maxWidth: '720px',
      fontFamily: 'var(--font-family-sans)',
    }}>
      {[
        { title: 'Analytics',   badge: 'info',    desc: 'Track your metrics in real time.' },
        { title: 'Deployments', badge: 'success', desc: 'Monitor build and release pipelines.' },
        { title: 'Alerts',      badge: 'warning', desc: 'Configure threshold notifications.' },
      ].map(({ title, badge, desc }) => (
        <Card
          key={title}
          interactive
          shadow="sm"
          tabIndex={0}
          role="button"
          header={
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontWeight: 'var(--font-weight-semibold)', fontSize: 'var(--font-size-sm)' }}>{title}</span>
              <Badge variant={badge} size="sm" dot>Active</Badge>
            </div>
          }
        >
          <p style={{ margin: 0, fontSize: 'var(--font-size-xs)', color: 'var(--color-text-secondary)', lineHeight: 'var(--line-height-relaxed)' }}>
            {desc}
          </p>
        </Card>
      ))}
    </div>
  ),
  parameters: {
    controls: { disable: true },
    docs: {
      description: { story: 'Cards with header slots, Badge components, and the interactive lift effect.' },
    },
  },
};
