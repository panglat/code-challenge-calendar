/* eslint-disable react/button-has-type */
// @ packages
import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

// @ own
import './styles.scss';

const Button = ({
  buttonStyle,
  className,
  children,
  disabled,
  type,
  ...rest
}) => (
  <button
    className={cn(
      'button',
      {
        [`button--${buttonStyle}`]: buttonStyle,
      },
      className,
    )}
    disabled={disabled}
    type={type}
    {...rest}
  >
    {children}
  </button>
);

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  disabled: PropTypes.bool,
  buttonStyle: PropTypes.oneOf(['primary', 'secondary']),
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
};

Button.defaultProps = {
  className: '',
  children: null,
  disabled: false,
  buttonStyle: 'primary',
  type: 'button',
};

export default Button;
