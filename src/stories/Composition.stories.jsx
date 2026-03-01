import React, { useState } from 'react';
import { Badge }  from '../components/Badge/Badge';
import { Button } from '../components/Button/Button';
import { Card }   from '../components/Card/Card';
import { Input }  from '../components/Input/Input';

export default {
  title: 'Meridian/Composition',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Real-world compositions using Badge, Button, Card, and Input together. ' +
          'These stories are not wired to Args controls — they show how the ' +
          'components combine using shared design tokens.',
      },
    },
    controls: { disable: true },
  },
};

/* --------------------------------------------------------------------------
   Shared micro-styles (all values from tokens, no raw px/hex)
   -------------------------------------------------------------------------- */
const t = {
  // typography
  headingSm: {
    fontFamily:   'var(--font-family-sans)',
    fontSize:     'var(--type-h5-size)',
    fontWeight:   'var(--font-weight-semibold)',
    lineHeight:   'var(--line-height-snug)',
    color:        'var(--color-text-primary)',
    margin:       0,
  },
  body: {
    fontFamily:   'var(--font-family-sans)',
    fontSize:     'var(--font-size-sm)',
    lineHeight:   'var(--line-height-relaxed)',
    color:        'var(--color-text-secondary)',
    margin:       0,
  },
  label: {
    fontFamily:   'var(--font-family-sans)',
    fontSize:     'var(--font-size-xs)',
    fontWeight:   'var(--font-weight-medium)',
    letterSpacing:'var(--letter-spacing-wide)',
    color:        'var(--color-text-secondary)',
    textTransform:'uppercase',
  },
  // layout helpers
  row: (gap = 'var(--inline-sm)') => ({
    display: 'flex', alignItems: 'center', gap,
  }),
  between: (gap = 'var(--inline-sm)') => ({
    display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap,
  }),
  col: (gap = 'var(--stack-md)') => ({
    display: 'flex', flexDirection: 'column', gap,
  }),
  divider: {
    borderTop:  'var(--border-width-thin) solid var(--color-border-default)',
    margin:     0,
  },
};

/* ==========================================================================
   Story 1 — Invite team member
   Form card: Input fields + Badge status + primary/ghost Button pair.
   ========================================================================== */

/**
 * A form card for inviting a new team member.
 * Shows Card slots, required Input fields, Badge plan status, and
 * a primary/ghost Button pair in the footer.
 */
export const InviteTeamMember = {
  render: () => {
    const [email, setEmail]     = useState('');
    const [name, setName]       = useState('');
    const [sending, setSending] = useState(false);
    const [sent, setSent]       = useState(false);

    const emailError =
      email.length > 0 && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
        ? 'Enter a valid email address.'
        : undefined;

    const canSubmit = email.length > 0 && !emailError && !sending && !sent;

    function handleSend() {
      setSending(true);
      setTimeout(() => { setSending(false); setSent(true); }, 1400);
    }

    return (
      <div style={{ maxWidth: '440px' }}>
        <Card
          shadow="md"
          radius="md"
          header={
            <div style={t.between()}>
              <h2 style={t.headingSm}>Invite team member</h2>
              <Badge variant="info" size="sm" dot>Team plan</Badge>
            </div>
          }
          footer={
            <div style={{ ...t.row('var(--inline-sm)'), justifyContent: 'flex-end' }}>
              <Button variant="ghost" size="sm" disabled={sending || sent}>
                Cancel
              </Button>
              <Button
                variant="primary"
                size="sm"
                disabled={!canSubmit}
                loading={sending}
                onClick={handleSend}
              >
                {sent ? 'Invite sent' : 'Send invite'}
              </Button>
            </div>
          }
        >
          <div style={t.col()}>
            {sent ? (
              <div style={{ ...t.row('var(--inline-sm)'), padding: 'var(--inset-sm)', background: 'var(--color-success-light)', borderRadius: 'var(--radius-md)' }}>
                <Badge variant="success" dot>Invitation sent to {email}</Badge>
              </div>
            ) : (
              <>
                <Input
                  label="Email address"
                  type="email"
                  placeholder="colleague@company.com"
                  required
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  errorMessage={emailError}
                />
                <Input
                  label="Display name"
                  placeholder="Jane Smith"
                  helpText="They can update this after signing in."
                  value={name}
                  onChange={e => setName(e.target.value)}
                />
              </>
            )}
          </div>
        </Card>
      </div>
    );
  },
};

/* ==========================================================================
   Story 2 — API key management
   Read-only Input, status badges, and a contextual danger action.
   ========================================================================== */

/**
 * An API key management panel.
 * Shows a read-only Input with an inline copy Button, a status Badge,
 * and a danger Button for revocation — all inside a Card.
 */
export const ApiKeyPanel = {
  render: () => {
    const [copied, setCopied]   = useState(false);
    const [revoking, setRevoking] = useState(false);
    const [revoked, setRevoked] = useState(false);

    function handleCopy() {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }

    function handleRevoke() {
      setRevoking(true);
      setTimeout(() => { setRevoking(false); setRevoked(true); }, 1200);
    }

    const CopyIcon = () => (
      <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="5" width="8" height="8" rx="1.5" />
        <path d="M3 11V3h8" />
      </svg>
    );

    return (
      <div style={{ maxWidth: '480px' }}>
        <Card
          shadow="sm"
          radius="md"
          header={
            <div style={t.between()}>
              <h2 style={t.headingSm}>Production API key</h2>
              <Badge
                variant={revoked ? 'danger' : 'success'}
                dot
                size="sm"
              >
                {revoked ? 'Revoked' : 'Active'}
              </Badge>
            </div>
          }
          footer={
            <div style={t.between('var(--inline-md)')}>
              <span style={t.body}>
                Created 14 Feb 2026 · Used 3 min ago
              </span>
              <Button
                variant="danger"
                size="sm"
                loading={revoking}
                disabled={revoked}
                onClick={handleRevoke}
              >
                {revoked ? 'Revoked' : 'Revoke key'}
              </Button>
            </div>
          }
        >
          <div style={t.col('var(--stack-sm)')}>
            <p style={t.body}>
              Use this key to authenticate requests from your server environment.
              Never expose it in client-side code.
            </p>
            <div style={{ ...t.row('var(--inline-sm)'), alignItems: 'flex-end' }}>
              <div style={{ flex: 1 }}>
                <Input
                  label="Secret key"
                  value={revoked ? '••••••••••••••••••••••' : 'sk_live_4Hx9mK2pQ7rZ1nVwTb8cYd'}
                  readOnly
                  disabled={revoked}
                />
              </div>
              <Button
                variant="secondary"
                size="md"
                iconLeft={<CopyIcon />}
                disabled={revoked}
                onClick={handleCopy}
                style={{ flexShrink: 0, marginBottom: revoked ? 0 : 0 }}
              >
                {copied ? 'Copied!' : 'Copy'}
              </Button>
            </div>
          </div>
        </Card>
      </div>
    );
  },
};

/* ==========================================================================
   Story 3 — Settings panel
   A stack of Cards with different states showing all components at once.
   ========================================================================== */

/**
 * A settings page fragment showing multiple Cards at once.
 * Demonstrates how Badge status labels, Input fields at different states,
 * and Button variants combine at page scale.
 */
export const SettingsPanel = {
  render: () => {
    const [displayName, setDisplayName] = useState('Meridian User');
    const [email, setEmail]             = useState('user@meridian.design');
    const [saving, setSaving]           = useState(false);
    const [saved, setSaved]             = useState(false);

    function handleSave() {
      setSaving(true);
      setTimeout(() => { setSaving(false); setSaved(true); setTimeout(() => setSaved(false), 2500); }, 1200);
    }

    return (
      <div style={{ ...t.col('var(--stack-lg)'), maxWidth: '520px', fontFamily: 'var(--font-family-sans)' }}>

        {/* ---- Profile ---- */}
        <Card
          shadow="sm"
          radius="md"
          header={
            <div style={t.between()}>
              <h2 style={t.headingSm}>Profile</h2>
              {saved && <Badge variant="success" size="sm">Saved</Badge>}
            </div>
          }
          footer={
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <Button
                variant="primary"
                size="sm"
                loading={saving}
                onClick={handleSave}
              >
                Save changes
              </Button>
            </div>
          }
        >
          <div style={t.col()}>
            <Input
              label="Display name"
              value={displayName}
              onChange={e => { setDisplayName(e.target.value); setSaved(false); }}
              required
            />
            <Input
              label="Email address"
              type="email"
              value={email}
              onChange={e => { setEmail(e.target.value); setSaved(false); }}
              helpText="Used for login and notifications."
              required
            />
          </div>
        </Card>

        {/* ---- Plan ---- */}
        <Card shadow="sm" radius="md" header={<h2 style={t.headingSm}>Plan</h2>}>
          <div style={t.col('var(--stack-lg)')}>
            {[
              { name: 'Starter',    price: 'Free',   variant: 'neutral', active: false },
              { name: 'Team',       price: '$29/mo',  variant: 'info',    active: true  },
              { name: 'Enterprise', price: 'Custom',  variant: 'neutral', active: false },
            ].map(({ name, price, variant, active }) => (
              <div key={name} style={{ ...t.between('var(--inline-lg)'), paddingBottom: 'var(--stack-md)', borderBottom: 'var(--border-width-thin) solid var(--color-border-default)' }}>
                <div style={t.col('var(--stack-xs)')}>
                  <div style={t.row('var(--inline-sm)')}>
                    <span style={{ fontSize: 'var(--font-size-sm)', fontWeight: 'var(--font-weight-semibold)' }}>{name}</span>
                    {active && <Badge variant={variant} size="sm" dot>Current</Badge>}
                  </div>
                  <span style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-secondary)' }}>{price}</span>
                </div>
                <Button variant={active ? 'ghost' : 'secondary'} size="sm" disabled={active}>
                  {active ? 'Current plan' : 'Upgrade'}
                </Button>
              </div>
            ))}
          </div>
        </Card>

        {/* ---- Danger zone ---- */}
        <Card radius="md" header={
          <div style={t.row()}>
            <h2 style={{ ...t.headingSm, color: 'var(--color-danger)' }}>Danger zone</h2>
            <Badge variant="danger" size="sm">Irreversible</Badge>
          </div>
        }>
          <div style={t.between('var(--inline-lg)')}>
            <div style={t.col('var(--stack-xs)')}>
              <span style={{ fontSize: 'var(--font-size-sm)', fontWeight: 'var(--font-weight-medium)' }}>Delete account</span>
              <span style={t.body}>Permanently removes your data. Cannot be undone.</span>
            </div>
            <Button variant="danger" size="sm" style={{ flexShrink: 0 }}>Delete account</Button>
          </div>
        </Card>

      </div>
    );
  },
};
