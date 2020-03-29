// @ packages
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { TwitterPicker } from 'react-color';

// @ own
import './styles.scss';

const ColorPicker = ({ className, color, onChangeComplete, ...rest }) => {
  const [showPicker, setShowPicker] = useState(false);

  const handleClick = () => {
    setShowPicker(!showPicker);
  };

  const handleClose = (value) => {
    setShowPicker(false);
    onChangeComplete(value);
  };

  return (
    <div className={cn('color-picker', className)} {...rest}>
      <div
        className="color-picker__swatch"
        role="button"
        tabIndex={0}
        onClick={handleClick}
        onKeyPress={handleClick}
      >
        <div
          className="color-picker__color"
          style={{
            backgroundColor: `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`,
          }}
        />
      </div>
      {showPicker && (
        <TwitterPicker
          id="event-color"
          name="eventColor"
          onChangeComplete={handleClose}
          color={color}
        />
      )}
    </div>
  );
};

ColorPicker.propTypes = {
  className: PropTypes.string,
  color: PropTypes.shape({
    r: PropTypes.string,
    g: PropTypes.string,
    b: PropTypes.string,
    a: PropTypes.string,
  }).isRequired,
  onChangeComplete: PropTypes.func,
};

ColorPicker.defaultProps = {
  className: '',
  onChangeComplete: () => {},
};

export default ColorPicker;
