// @ packages
import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import CalendarTable from '../CalendarTable';
import EventModal from '../EventModal';

// @ own
import './styles.scss';

const Calendar = ({ className, ...rest }) => {
  return (
    <div className={cn('calendar', className)} {...rest}>
      <CalendarTable monthNumber={4} year={2020} />
      <EventModal />
    </div>
  );
};

Calendar.propTypes = {
  className: PropTypes.string,
};

Calendar.defaultProps = {
  className: '',
};

export default Calendar;
