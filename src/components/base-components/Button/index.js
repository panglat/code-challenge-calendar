/* eslint-disable react/button-has-type */
// @ packages
import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

// @ own
import './styles.scss';

const Button = ({ className, children, style, type, ...rest }) => (
  <button
    className={cn('button', { [`button--${style}`]: style }, className)}
    type={type}
    {...rest}
  >
    {children}
  </button>
);

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  style: PropTypes.oneOf(['primary', 'secondary']),
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
};

Button.defaultProps = {
  className: '',
  children: null,
  style: 'primary',
  type: 'button',
};

export default Button;
