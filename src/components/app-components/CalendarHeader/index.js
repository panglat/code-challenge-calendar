import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import moment from 'moment';
import { momentObjPropType } from '../../../util/propTypesConstants';

import './styles.scss';

const CalendarHeader = ({
  className,
  monthYear,
  onDeleteAllReminders,
  onMonthYearChanged,
  ...rest
}) => {
  const onPreviousMonth = () => {
    onMonthYearChanged(moment(monthYear).subtract(1, 'months'));
  };

  const onNextMonth = () => {
    onMonthYearChanged(moment(monthYear).add(1, 'months'));
  };

  return (
    <div className={cn('calendar-header', className)} {...rest}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30px"
        height="30px"
        className="calendar-header__left-arrow"
        role="button"
        tabIndex={0}
        onClick={onPreviousMonth}
        onKeyPress={onPreviousMonth}
      >
        <polygon fill="red" points="15,3 27,27 3,27 15,3" />
      </svg>
      <div className="calendar-header__head">
        <h1>{monthYear.format('MMMM, YYYY')}</h1>
        <span
          role="button"
          tabIndex={0}
          onClick={onDeleteAllReminders}
          onKeyPress={onDeleteAllReminders}
        >
          Delete All Reminders
        </span>
      </div>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30px"
        height="30px"
        className="calendar-header__right-arrow"
        role="button"
        tabIndex={0}
        onClick={onNextMonth}
        onKeyPress={onNextMonth}
      >
        <polygon fill="red" points="15,3 27,27 3,27 15,3" />
      </svg>
    </div>
  );
};

CalendarHeader.propTypes = {
  monthYear: momentObjPropType.isRequired,
  onDeleteAllReminders: PropTypes.func,
  onMonthYearChanged: PropTypes.func,
  className: PropTypes.string,
};

CalendarHeader.defaultProps = {
  className: '',
  onDeleteAllReminders: () => {},
  onMonthYearChanged: () => {},
};

export default CalendarHeader;
