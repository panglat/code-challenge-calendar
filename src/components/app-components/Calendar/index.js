// @ packages
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import CalendarTable from '../CalendarTable';
import EventModal from '../EventModal';

// @ own
import './styles.scss';

const Calendar = ({ className, ...rest }) => {
  const [showEventModal, setShowEventModal] = useState(false);
  const [selectedDay, setSelectedDay] = useState(null);

  const onEventModalClose = () => {
    setShowEventModal(false);
  };

  const onEventModalSubmit = (values) => {
    console.log(values);
    onEventModalClose();
  };

  const onDayClick = (day) => {
    setSelectedDay(day);
    setShowEventModal(true);
  };

  return (
    <div className={cn('calendar', className)} {...rest}>
      <CalendarTable monthNumber={4} year={2020} onDayClick={onDayClick} />
      {showEventModal && (
        <EventModal
          day={selectedDay}
          onClose={onEventModalClose}
          onSubmit={onEventModalSubmit}
        />
      )}
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
