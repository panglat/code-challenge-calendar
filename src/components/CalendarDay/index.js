// @ packages
import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

// @ own
import './styles.scss';

const CalendarDay = ({ className, date, monthNumber, ...rest }) => {
  return (
    <div className={cn('calendar-day', className)} {...rest}>
      <div
        className={cn('calendar-day__day', {
          'calendar-day__day--other-month': date.months() + 1 !== monthNumber,
        })}
      >
        {date.date()}
      </div>
    </div>
  );
};

CalendarDay.propTypes = {
  className: PropTypes.string,
  date: PropTypes.shape({ date: PropTypes.func, months: PropTypes.func })
    .isRequired,
  monthNumber: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])
    .isRequired,
};

CalendarDay.defaultProps = {
  className: '',
};

export default CalendarDay;
