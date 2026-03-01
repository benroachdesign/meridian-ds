import PropTypes from 'prop-types';
import './Button.css';

/**
 * Meridian Button — the primary interactive element.
 *
 * All visual styles are driven by design tokens via CSS custom properties.
 * When `loading` is true the button is disabled, a spinner is shown, and
 * the label remains in the DOM (invisible) so the width stays stable.
 */
export function Button({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
  iconLeft,
  iconRight,
  fullWidth = false,
  type = 'button',
  onClick,
  ...rest
}) {
  const isDisabled = disabled || loading;

  const classes = [
    'btn',
    `btn--${variant}`,
    `btn--${size}`,
    fullWidth    && 'btn--full-width',
    loading      && 'btn--loading',
  ].filter(Boolean).join(' ');

  return (
    <button
      type={type}
      className={classes}
      disabled={isDisabled}
      aria-busy={loading || undefined}
      onClick={onClick}
      {...rest}
    >
      {/* Content layer — hidden when loading; kept in DOM to hold button width */}
      <span className="btn__content">
        {iconLeft && (
          <span className="btn__icon" aria-hidden="true">
            {iconLeft}
          </span>
        )}
        {children}
        {iconRight && (
          <span className="btn__icon" aria-hidden="true">
            {iconRight}
          </span>
        )}
      </span>

      {/* Spinner — rendered on top of the hidden content layer */}
      {loading && (
        <span className="btn__spinner-wrap" aria-hidden="true">
          <span className="btn__spinner" />
        </span>
      )}
    </button>
  );
}

Button.propTypes = {
  /** Visible label text or node */
  children: PropTypes.node.isRequired,
  /** Visual style of the button */
  variant: PropTypes.oneOf(['primary', 'secondary', 'ghost', 'danger']),
  /** Height and padding scale */
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  /** Prevents interaction and applies disabled styling */
  disabled: PropTypes.bool,
  /** Shows a spinner and prevents interaction while an async action runs */
  loading: PropTypes.bool,
  /** Icon element rendered before the label */
  iconLeft: PropTypes.node,
  /** Icon element rendered after the label */
  iconRight: PropTypes.node,
  /** Stretches the button to fill its container */
  fullWidth: PropTypes.bool,
  /** Native HTML button type attribute */
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  /** Click handler */
  onClick: PropTypes.func,
};

export default Button;
