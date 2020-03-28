// @ packages
import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

// @ own
import './styles.scss';

const CalendarDay = ({ className, date, monthNumber, ...rest }) => {
  return (
    <div className={cn('calendar-day', className)} {...rest}>
      {date.date()}
    </div>
  );
};

CalendarDay.propTypes = {
  className: PropTypes.string,
  date: PropTypes.shape({ date: PropTypes.func }).isRequired,
  monthNumber: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])
    .isRequired,
};

CalendarDay.defaultProps = {
  className: '',
};

export default CalendarDay;
