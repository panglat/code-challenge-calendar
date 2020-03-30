import PropTypes from 'prop-types';

export const momentObjPropType = PropTypes.shape({
  date: PropTypes.func,
  format: PropTypes.func,
  month: PropTypes.func,
});

export const colorPropType = PropTypes.shape({
  r: PropTypes.number,
  g: PropTypes.number,
  b: PropTypes.number,
  a: PropTypes.number,
});

export const reminderPropType = PropTypes.shape({
  name: PropTypes.string,
  city: PropTypes.string,
  color: colorPropType,
  dateTime: PropTypes.string,
  secondsSinceEpoch: PropTypes.number,
});
