import PropTypes from 'prop-types';

export const momentObjPropType = PropTypes.shape({
  date: PropTypes.func,
  format: PropTypes.func,
  month: PropTypes.func,
});

export const colorPropType = PropTypes.shape({
  r: PropTypes.string,
  g: PropTypes.string,
  b: PropTypes.string,
  a: PropTypes.string,
});

export const reminderPropType = PropTypes.shape({
  name: PropTypes.string,
  city: PropTypes.string,
  color: colorPropType,
  dateTime: PropTypes.string,
  secondsSinceEpoch: PropTypes.number,
});
