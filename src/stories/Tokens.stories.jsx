import React from 'react';

export default {
  title: 'Meridian/Design Tokens',
  parameters: {
    docs: {
      description: {
        component:
          'All Meridian CSS custom properties. Import `src/tokens/index.css` ' +
          '(or individual token files) to consume these in any component.',
      },
    },
  },
};

/* -------------------------------------------------------------------------
   Helpers
   ------------------------------------------------------------------------- */
const Row = ({ children }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
    {children}
  </div>
);

const Label = ({ children }) => (
  <code style={{ fontSize: '12px', color: 'var(--color-text-secondary)', minWidth: '280px' }}>
    {children}
  </code>
);

const Value = ({ children }) => (
  <span style={{ fontSize: '12px', color: 'var(--color-text-placeholder)' }}>
    {children}
  </span>
);

const SectionHeading = ({ children }) => (
  <h3 style={{
    fontSize: 'var(--type-h5-size)',
    fontWeight: 'var(--font-weight-semibold)',
    color: 'var(--color-text-primary)',
    margin: '32px 0 12px',
    paddingBottom: '8px',
    borderBottom: '1px solid var(--color-border-default)',
  }}>
    {children}
  </h3>
);

/* -------------------------------------------------------------------------
   Color Story
   ------------------------------------------------------------------------- */
const neutralScale = [0, 50, 100, 150, 200, 300, 400, 500, 600, 700, 800, 900, 950, 1000];
const accentScale  = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];
const semanticGroups = [
  { label: 'Success', tokens: ['--color-success-light', '--color-success', '--color-success-dark'] },
  { label: 'Warning', tokens: ['--color-warning-light', '--color-warning', '--color-warning-dark'] },
  { label: 'Danger',  tokens: ['--color-danger-light',  '--color-danger',  '--color-danger-dark']  },
  { label: 'Info',    tokens: ['--color-info-light',    '--color-info',    '--color-info-dark']    },
];

const Swatch = ({ token }) => (
  <Row>
    <div style={{
      width: '40px',
      height: '40px',
      borderRadius: 'var(--radius-md)',
      background: `var(${token})`,
      border: '1px solid var(--color-border-default)',
      flexShrink: 0,
    }} />
    <Label>{token}</Label>
  </Row>
);

export const Colors = () => (
  <div style={{ fontFamily: 'var(--font-family-sans)', padding: '24px' }}>
    <h2 style={{ fontSize: 'var(--type-h2-size)', marginBottom: '4px' }}>Color</h2>
    <p style={{ color: 'var(--color-text-secondary)', marginBottom: '0' }}>
      Neutral-first palette. Accent (slate blue) is reserved for interactive affordances only.
    </p>

    <SectionHeading>Neutral Scale</SectionHeading>
    {neutralScale.map(step => (
      <Swatch key={step} token={`--color-neutral-${step}`} />
    ))}

    <SectionHeading>Accent Scale — Sage Green</SectionHeading>
    {accentScale.map(step => (
      <Swatch key={step} token={`--color-accent-${step}`} />
    ))}

    {semanticGroups.map(group => (
      <React.Fragment key={group.label}>
        <SectionHeading>Feedback — {group.label}</SectionHeading>
        {group.tokens.map(t => <Swatch key={t} token={t} />)}
      </React.Fragment>
    ))}

    <SectionHeading>Semantic Aliases</SectionHeading>
    {[
      '--color-surface-base', '--color-surface-subtle', '--color-surface-raised',
      '--color-border-default', '--color-border-strong', '--color-border-focus',
      '--color-text-primary', '--color-text-secondary', '--color-text-placeholder',
      '--color-text-disabled', '--color-text-inverse',
      '--color-interactive', '--color-interactive-hover', '--color-interactive-active',
    ].map(t => <Swatch key={t} token={t} />)}
  </div>
);

/* -------------------------------------------------------------------------
   Typography Story
   ------------------------------------------------------------------------- */
const typeSamples = [
  {
    label:    'Display',
    family:   'var(--type-display-family)',
    size:     'var(--type-display-size)',
    weight:   'var(--type-display-weight)',
    tracking: 'var(--type-display-tracking)',
    text:     'Considered by design.',
  },
  {
    label:    'H1',
    family:   'var(--type-h1-family)',
    size:     'var(--type-h1-size)',
    weight:   'var(--type-h1-weight)',
    tracking: 'var(--type-h1-tracking)',
    text:     'Considered by design.',
  },
  {
    label:    'H2',
    family:   'var(--type-h2-family)',
    size:     'var(--type-h2-size)',
    weight:   'var(--type-h2-weight)',
    tracking: 'var(--type-h2-tracking)',
    text:     'Quiet luxury, precisely made.',
  },
  {
    label:    'H3',
    family:   'var(--type-h3-family)',
    size:     'var(--type-h3-size)',
    weight:   'var(--type-h3-weight)',
    tracking: 'var(--type-h3-tracking)',
    text:     'Every detail earns its place.',
  },
  {
    label:    'H4',
    family:   'var(--type-h4-family)',
    size:     'var(--type-h4-size)',
    weight:   'var(--type-h4-weight)',
    tracking: 'var(--type-h4-tracking)',
    text:     'The craft is in the details.',
  },
  {
    label:    'H5',
    family:   'var(--type-h5-family)',
    size:     'var(--type-h5-size)',
    weight:   'var(--type-h5-weight)',
    tracking: 'var(--type-h5-tracking)',
    text:     'The craft is in the details.',
  },
  {
    label:    'H6',
    family:   'var(--type-h6-family)',
    size:     'var(--type-h6-size)',
    weight:   'var(--type-h6-weight)',
    tracking: 'var(--type-h6-tracking)',
    text:     'The craft is in the details.',
  },
  {
    label:    'Body',
    family:   'var(--font-family-sans)',
    size:     'var(--type-body-size)',
    weight:   'var(--type-body-weight)',
    tracking: 'var(--type-body-tracking)',
    text:     'Good design systems create space for great products to emerge — they establish trust through consistency and free teams to focus on what matters.',
  },
  {
    label:    'Body Small',
    family:   'var(--font-family-sans)',
    size:     'var(--type-body-sm-size)',
    weight:   'var(--type-body-sm-weight)',
    tracking: 'var(--type-body-sm-tracking)',
    text:     'Consistency and trust are the foundation of good design.',
  },
  {
    label:    'Label',
    family:   'var(--font-family-sans)',
    size:     'var(--type-label-size)',
    weight:   'var(--type-label-weight)',
    tracking: 'var(--type-label-tracking)',
    text:     'Supporting information',
  },
  {
    label:    'Caption',
    family:   'var(--font-family-sans)',
    size:     'var(--type-caption-size)',
    weight:   'var(--type-caption-weight)',
    tracking: 'var(--type-caption-tracking)',
    text:     'Last updated 28 Feb 2026',
  },
  {
    label:    'Overline',
    family:   'var(--font-family-sans)',
    size:     'var(--type-overline-size)',
    weight:   'var(--type-overline-weight)',
    tracking: 'var(--type-overline-tracking)',
    text:     'Featured collection',
    transform: 'uppercase',
  },
];

export const Typography = () => (
  <div style={{ fontFamily: 'var(--font-family-sans)', padding: '24px' }}>
    <h2 style={{
      fontFamily: 'var(--font-family-sans)',
      fontSize: 'var(--type-h5-size)',
      fontWeight: 'var(--font-weight-semibold)',
      marginBottom: '4px',
    }}>
      Typography
    </h2>
    <p style={{ color: 'var(--color-text-secondary)', marginBottom: '32px' }}>
      Instrument Serif for display and editorial hierarchy. Inter for UI, body, and functional text.
    </p>

    {typeSamples.map(({ label, family, size, weight, tracking, text, transform }) => (
      <div key={label} style={{
        display: 'grid',
        gridTemplateColumns: '88px 1fr',
        gap: '16px',
        alignItems: 'baseline',
        marginBottom: '20px',
        paddingBottom: '20px',
        borderBottom: '1px solid var(--color-border-default)',
      }}>
        <span style={{
          fontSize: '11px',
          fontFamily: 'var(--font-family-sans)',
          color: 'var(--color-text-placeholder)',
          fontWeight: 500,
          paddingTop: '4px',
        }}>
          {label}
        </span>
        <span style={{
          fontFamily: family,
          fontSize: size,
          fontWeight: weight,
          letterSpacing: tracking,
          textTransform: transform,
          lineHeight: 'var(--line-height-snug)',
          color: 'var(--color-text-primary)',
        }}>
          {text}
        </span>
      </div>
    ))}

    <SectionHeading>Code</SectionHeading>
    <code style={{ fontFamily: 'var(--type-code-family)', fontSize: 'var(--type-code-size)' }}>
      const meridian = &#123; tokens: 'all' &#125;;
    </code>
  </div>
);

/* -------------------------------------------------------------------------
   Spacing Story
   ------------------------------------------------------------------------- */
const spacingScale = [
  ['--space-1',  '4px'],  ['--space-2',  '8px'],  ['--space-3',  '12px'],
  ['--space-4',  '16px'], ['--space-5',  '20px'], ['--space-6',  '24px'],
  ['--space-8',  '32px'], ['--space-10', '40px'], ['--space-12', '48px'],
  ['--space-16', '64px'], ['--space-20', '80px'], ['--space-24', '96px'],
];

const radiusScale = [
  ['--radius-xs', '2px'],  ['--radius-sm', '4px'],  ['--radius-md', '6px'],
  ['--radius-lg', '8px'],  ['--radius-xl', '12px'], ['--radius-2xl', '16px'],
  ['--radius-3xl', '24px'], ['--radius-full', '9999px'],
];

const shadowScale = [
  '--shadow-xs', '--shadow-sm', '--shadow-md',
  '--shadow-lg', '--shadow-xl', '--shadow-2xl',
];

export const Spacing = () => (
  <div style={{ fontFamily: 'var(--font-family-sans)', padding: '24px' }}>
    <h2 style={{ fontSize: 'var(--type-h2-size)', marginBottom: '4px' }}>Spacing</h2>
    <p style={{ color: 'var(--color-text-secondary)', marginBottom: '32px' }}>
      4-pixel base unit. Semantic aliases (inset, stack, inline, layout) map the raw
      scale to intent.
    </p>

    <SectionHeading>Raw Scale</SectionHeading>
    {spacingScale.map(([token, raw]) => (
      <Row key={token}>
        <div style={{
          width: `var(${token})`,
          height: '20px',
          background: 'var(--color-accent-300)',
          borderRadius: '2px',
          minWidth: '2px',
        }} />
        <Label>{token}</Label>
        <Value>{raw}</Value>
      </Row>
    ))}

    <SectionHeading>Border Radius</SectionHeading>
    {radiusScale.map(([token, raw]) => (
      <Row key={token}>
        <div style={{
          width: '48px',
          height: '48px',
          background: 'var(--color-accent-200)',
          border: '1px solid var(--color-accent-400)',
          borderRadius: `var(${token})`,
          flexShrink: 0,
        }} />
        <Label>{token}</Label>
        <Value>{raw}</Value>
      </Row>
    ))}

    <SectionHeading>Shadows</SectionHeading>
    <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap', marginTop: '12px' }}>
      {shadowScale.map(token => (
        <div key={token} style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '8px',
        }}>
          <div style={{
            width: '80px',
            height: '80px',
            borderRadius: 'var(--radius-lg)',
            background: 'var(--color-surface-base)',
            boxShadow: `var(${token})`,
          }} />
          <code style={{ fontSize: '10px', color: 'var(--color-text-secondary)' }}>{token}</code>
        </div>
      ))}
    </div>
  </div>
);

/* -------------------------------------------------------------------------
   Motion Story
   ------------------------------------------------------------------------- */
export const Motion = () => {
  const [active, setActive] = React.useState({});

  const toggle = (key) => setActive(prev => ({ ...prev, [key]: !prev[key] }));

  const demos = [
    { key: 'fade',    label: 'Fade',    transition: 'opacity var(--transition-fade)',    style: { opacity: active.fade ? 0 : 1 } },
    { key: 'scale',   label: 'Scale',   transition: 'transform var(--transition-scale)', style: { transform: active.scale ? 'scale(0.9)' : 'scale(1)' } },
    { key: 'color',   label: 'Color',   transition: 'background var(--transition-color)', style: { background: active.color ? 'var(--color-accent-500)' : 'var(--color-neutral-200)' } },
    { key: 'slide',   label: 'Slide',   transition: 'transform var(--transition-slide)', style: { transform: active.slide ? 'translateX(24px)' : 'translateX(0)' } },
  ];

  return (
    <div style={{ fontFamily: 'var(--font-family-sans)', padding: '24px' }}>
      <h2 style={{ fontSize: 'var(--type-h2-size)', marginBottom: '4px' }}>Motion</h2>
      <p style={{ color: 'var(--color-text-secondary)', marginBottom: '32px' }}>
        Click each tile to preview the transition. All durations collapse to{' '}
        <code>0ms</code> when <code>prefers-reduced-motion: reduce</code> is set.
      </p>

      <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
        {demos.map(({ key, label, transition, style }) => (
          <div key={key} style={{ textAlign: 'center' }}>
            <button
              onClick={() => toggle(key)}
              style={{
                all: 'unset',
                cursor: 'pointer',
                display: 'block',
                width: '96px',
                height: '96px',
                borderRadius: 'var(--radius-lg)',
                background: 'var(--color-neutral-200)',
                marginBottom: '8px',
                transition,
                ...style,
              }}
            />
            <code style={{ fontSize: '11px', color: 'var(--color-text-secondary)' }}>
              {label}
            </code>
          </div>
        ))}
      </div>

      <SectionHeading>Duration Scale</SectionHeading>
      {[
        ['--duration-75',   '75ms'],
        ['--duration-150',  '150ms'],
        ['--duration-200',  '200ms'],
        ['--duration-300',  '300ms'],
        ['--duration-400',  '400ms'],
        ['--duration-500',  '500ms'],
      ].map(([token, raw]) => (
        <Row key={token}>
          <Label>{token}</Label>
          <Value>{raw}</Value>
        </Row>
      ))}

      <SectionHeading>Easing Functions</SectionHeading>
      {[
        ['--ease-standard',   'cubic-bezier(0.4, 0.0, 0.2, 1.0)'],
        ['--ease-enter',      'cubic-bezier(0.0, 0.0, 0.2, 1.0)'],
        ['--ease-exit',       'cubic-bezier(0.4, 0.0, 1.0, 1.0)'],
        ['--ease-emphasized', 'cubic-bezier(0.2, 0.0, 0.0, 1.0)'],
        ['--ease-spring',     'cubic-bezier(0.34, 1.56, 0.64, 1.0)'],
      ].map(([token, raw]) => (
        <Row key={token}>
          <Label>{token}</Label>
          <Value>{raw}</Value>
        </Row>
      ))}
    </div>
  );
};
