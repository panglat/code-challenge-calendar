/* eslint-disable no-plusplus */
// @ packages
import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import moment from 'moment';
import CalendarDay from '../CalendarDay';

// @ own
import './styles.scss';

const CalendarTable = ({
  className,
  monthNumber,
  onDayClick,
  year,
  ...rest
}) => {
  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  const buildCalendarDaysArray = () => {
    // get day of the week (sun: 0 ... sat: 6)
    const firstDayOfTheMonth = moment(
      `${monthNumber}-01-${year}`,
      'MM-DD-YYYY',
    );
    const firstWeekdayOfTheMonth = firstDayOfTheMonth.isoWeekday() % 7;
    const firstCalendarDay = moment(firstDayOfTheMonth).subtract(
      firstWeekdayOfTheMonth,
      'days',
    );
    const lastDayOfTheMonth = moment(firstDayOfTheMonth)
      .add(1, 'months')
      .subtract(1, 'days');
    const lastWeekdayOfTheMonth = lastDayOfTheMonth.isoWeekday() % 7;
    const lastCalendarDay = moment(lastDayOfTheMonth).add(
      6 - lastWeekdayOfTheMonth,
      'days',
    );
    const numOfWeeks = moment
      .duration(moment(lastCalendarDay).add(1, 'days').diff(firstCalendarDay))
      .asWeeks();

    const calendar = [];
    const currentDay = moment(firstCalendarDay);
    for (let w = 0; w < numOfWeeks; w++) {
      const week = [];
      for (let d = 0; d < 7; d++) {
        week.push(moment(currentDay));
        currentDay.add(1, 'days');
      }
      calendar.push(week);
    }

    return calendar;
  };

  const renderHeaderRow = () =>
    days.map((day) => (
      <th key={day} className="calendar-table__header-cell">
        {day}
      </th>
    ));

  const calendarArray = buildCalendarDaysArray();

  return (
    <table className={cn('calendar-table', className)} {...rest}>
      <thead className="calendar-table__header">
        <tr className="calendar-table__header-row">{renderHeaderRow()}</tr>
      </thead>
      <tbody className="calendar-table__body">
        {calendarArray.map((week) => (
          <tr key={week[0].format()} className="calendar-table__body-row">
            {week.map((day) => (
              <td
                key={day.format()}
                className="calendar-table__body-table-data"
              >
                <CalendarDay
                  date={day}
                  monthNumber={monthNumber}
                  onClick={() => onDayClick(day)}
                />
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

CalendarTable.propTypes = {
  className: PropTypes.string,
  monthNumber: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])
    .isRequired,
  onDayClick: PropTypes.func,
  year: PropTypes.number.isRequired,
};

CalendarTable.defaultProps = {
  className: '',
  onDayClick: () => {},
};

export default CalendarTable;
