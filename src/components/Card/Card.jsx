import PropTypes from 'prop-types';
import './Card.css';

/**
 * Meridian Card — a flexible surface container.
 *
 * Renders a header, body, and footer slot. All visual properties (padding,
 * shadow, radius) are controlled by design tokens via modifier classes.
 * Set `interactive` for a hover-lift effect when the card acts as a
 * clickable target; pair with `onClick`, `tabIndex={0}`, and `role="button"`
 * (or wrap in an `<a>`) for full keyboard accessibility.
 */
export function Card({
  children,
  header,
  footer,
  padding = 'md',
  shadow = 'none',
  radius = 'md',
  interactive = false,
  onClick,
  className,
  ...rest
}) {
  const classes = [
    'card',
    `card--padding-${padding}`,
    `card--shadow-${shadow}`,
    `card--radius-${radius}`,
    interactive && 'card--interactive',
    className,
  ].filter(Boolean).join(' ');

  return (
    <div
      className={classes}
      onClick={interactive ? onClick : undefined}
      {...rest}
    >
      {header && (
        <div className="card__header">
          {header}
        </div>
      )}

      <div className="card__body">
        {children}
      </div>

      {footer && (
        <div className="card__footer">
          {footer}
        </div>
      )}
    </div>
  );
}

Card.propTypes = {
  /** Main content rendered in the card body */
  children: PropTypes.node.isRequired,
  /** Optional content rendered in a bordered header above the body */
  header: PropTypes.node,
  /** Optional content rendered in a tinted footer below the body */
  footer: PropTypes.node,
  /** Internal padding applied uniformly to header, body, and footer */
  padding: PropTypes.oneOf(['sm', 'md', 'lg']),
  /** Box shadow depth */
  shadow: PropTypes.oneOf(['none', 'sm', 'md']),
  /** Border radius scale */
  radius: PropTypes.oneOf(['sm', 'md', 'lg']),
  /**
   * Adds a hover-lift effect (translateY + shadow step-up).
   * For clickable cards also pass `onClick`, `tabIndex={0}`, and
   * `role="button"` — or wrap the Card in an `<a>` tag.
   */
  interactive: PropTypes.bool,
  /** Click handler (used when `interactive` is true) */
  onClick: PropTypes.func,
  /** Additional class names merged onto the root element */
  className: PropTypes.string,
};

export default Card;
