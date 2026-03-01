import { useId } from 'react';
import PropTypes from 'prop-types';
import './Input.css';

const ErrorIcon = () => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 12 12"
    fill="none"
    aria-hidden="true"
  >
    <circle cx="6" cy="6" r="5.25" stroke="currentColor" strokeWidth="1.5" />
    <path d="M6 3.5v3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <circle cx="6" cy="8.5" r="0.75" fill="currentColor" />
  </svg>
);

/**
 * Meridian Input — single-line text field with label, help text, and error state.
 *
 * Automatically associates the `<label>` with the `<input>` via a stable id
 * (React's `useId`). Pass your own `id` to override.
 */
export function Input({
  label,
  placeholder,
  helpText,
  errorMessage,
  disabled = false,
  required = false,
  type = 'text',
  id: idProp,
  value,
  defaultValue,
  onChange,
  name,
  ...rest
}) {
  const generatedId = useId();
  const id = idProp ?? generatedId;
  const helpId = helpText    ? `${id}-help`  : undefined;
  const errorId = errorMessage ? `${id}-error` : undefined;
  const hasError = Boolean(errorMessage);

  const rootClasses = [
    'input-root',
    hasError && 'input-root--error',
  ].filter(Boolean).join(' ');

  return (
    <div className={rootClasses}>
      {label && (
        <label htmlFor={id} className="input-label">
          {label}
          {required && (
            <span className="input-label__required" aria-hidden="true">*</span>
          )}
        </label>
      )}

      <input
        id={id}
        name={name}
        type={type}
        className="input-field"
        placeholder={placeholder}
        disabled={disabled}
        required={required}
        value={value}
        defaultValue={defaultValue}
        onChange={onChange}
        aria-describedby={
          [helpId, errorId].filter(Boolean).join(' ') || undefined
        }
        aria-invalid={hasError || undefined}
        {...rest}
      />

      {/* Error takes precedence over help text */}
      {hasError ? (
        <span id={errorId} className="input-error" role="alert">
          <span className="input-error__icon"><ErrorIcon /></span>
          {errorMessage}
        </span>
      ) : helpText ? (
        <span id={helpId} className="input-help">
          {helpText}
        </span>
      ) : null}
    </div>
  );
}

Input.propTypes = {
  /** Visible label rendered in a `<label>` element above the field */
  label: PropTypes.string,
  /** Placeholder text shown when the field is empty */
  placeholder: PropTypes.string,
  /** Descriptive text shown below the field when there is no error */
  helpText: PropTypes.string,
  /** When non-empty, puts the field in its error state and shows this message */
  errorMessage: PropTypes.string,
  /** Disables the field and prevents interaction */
  disabled: PropTypes.bool,
  /** Marks the field as required; adds a `*` indicator to the label */
  required: PropTypes.bool,
  /** Native HTML `type` attribute */
  type: PropTypes.oneOf(['text', 'email', 'password', 'number', 'search', 'tel', 'url']),
  /** Overrides the auto-generated `id` used to link the label and input */
  id: PropTypes.string,
  /** Controlled value */
  value: PropTypes.string,
  /** Uncontrolled default value */
  defaultValue: PropTypes.string,
  /** Change handler (required when using controlled `value`) */
  onChange: PropTypes.func,
  /** Native `name` attribute */
  name: PropTypes.string,
};

export default Input;
