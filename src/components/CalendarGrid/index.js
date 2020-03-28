// @ packages
import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import moment from 'moment';

// @ own
import './styles.scss';

const CalendarTable = ({ className, monthNumber, year, ...rest }) => {
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

    return numOfWeeks;
  };

  const renderHeader = () =>
    days.map((day) => <th className="calendar-table__header-cell">{day}</th>);

  buildCalendarDaysArray();

  return (
    <table className={cn('calendar-table', className)} {...rest}>
      <tr className="calendar-table__row">{renderHeader()}</tr>
    </table>
  );
};

CalendarTable.propTypes = {
  className: PropTypes.string,
  monthNumber: PropTypes.oneOf(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12)
    .isRequired,
  year: PropTypes.number.isRequired,
};

CalendarTable.defaultProps = {
  className: '',
};

export default CalendarTable;
