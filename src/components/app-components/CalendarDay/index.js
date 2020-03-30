// @ packages
import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

// @ own
import './styles.scss';
import moment from 'moment';
import {
  reminderPropType,
  momentObjPropType,
} from '../../../util/propTypesConstants';
import SummarizedReminder from '../SummarizedReminder';

const CalendarDay = ({
  className,
  day,
  monthNumber,
  onUpdateReminder,
  reminders,
  ...rest
}) => {
  const today00hEpoch = day.unix();
  const today24hEpoch = moment(day).add(moment.duration('23:59:59')).unix();
  const dayReminders = reminders.filter(
    (r) =>
      r.secondsSinceEpoch >= today00hEpoch &&
      r.secondsSinceEpoch <= today24hEpoch,
  );

  const onSummarizedReminderClick = (event, reminder) => {
    event.stopPropagation();
    onUpdateReminder(reminder);
  };

  return (
    <div className={cn('calendar-day', className)} {...rest}>
      <div
        className={cn('calendar-day__day', {
          'calendar-day__day--other-month': day.month() + 1 !== monthNumber,
        })}
      >
        {day.date()}
      </div>
      {dayReminders.map((r) => (
        <SummarizedReminder
          key={r.id}
          reminder={r}
          role="button"
          tabIndex={0}
          onClick={(e) => onSummarizedReminderClick(e, r)}
          onKeyPress={(e) => onSummarizedReminderClick(e, r)}
        />
      ))}
    </div>
  );
};

CalendarDay.propTypes = {
  className: PropTypes.string,
  day: PropTypes.shape(momentObjPropType).isRequired,
  monthNumber: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])
    .isRequired,
  onUpdateReminder: PropTypes.func,
  reminders: PropTypes.arrayOf(reminderPropType).isRequired,
};

CalendarDay.defaultProps = {
  className: '',
  onUpdateReminder: () => {},
};

export default CalendarDay;
