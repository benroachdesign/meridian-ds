import PropTypes from 'prop-types';
import './Badge.css';

const DismissIcon = () => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 10 10"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinecap="round"
    aria-hidden="true"
  >
    <path d="M2 2l6 6M8 2l-6 6" />
  </svg>
);

/**
 * Meridian Badge — compact status or category label.
 *
 * Optionally shows a coloured dot indicator for at-a-glance status,
 * and/or a dismiss (×) button when `onDismiss` is supplied.
 */
export function Badge({
  children,
  variant = 'neutral',
  size = 'md',
  dot = false,
  onDismiss,
  ...rest
}) {
  const classes = [
    'badge',
    `badge--${variant}`,
    `badge--${size}`,
  ].join(' ');

  return (
    <span className={classes} {...rest}>
      {dot && <span className="badge__dot" aria-hidden="true" />}

      {children}

      {onDismiss && (
        <button
          type="button"
          className="badge__dismiss"
          onClick={onDismiss}
          aria-label="Dismiss"
        >
          <DismissIcon />
        </button>
      )}
    </span>
  );
}

Badge.propTypes = {
  /** Label text or node */
  children: PropTypes.node.isRequired,
  /** Colour and semantic meaning of the badge */
  variant: PropTypes.oneOf(['neutral', 'success', 'warning', 'danger', 'info']),
  /** Height and font-size scale */
  size: PropTypes.oneOf(['sm', 'md']),
  /** Renders a small coloured dot before the label */
  dot: PropTypes.bool,
  /** If provided, renders a dismiss (×) button and calls this on click */
  onDismiss: PropTypes.func,
};

export default Badge;
