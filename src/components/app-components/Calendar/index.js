// @ packages
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import cn from 'classnames';
import CalendarTable from '../CalendarTable';
import ReminderModal from '../ReminderModal';
import { createReminder } from '../../../business/ReminderManager/actions';

// @ own
import './styles.scss';

const Calendar = ({ className, ...rest }) => {
  const [showReminderModal, setShowReminderModal] = useState(false);
  const [selectedDay, setSelectedDay] = useState(null);

  const dispatch = useDispatch();

  const onReminderModalClose = () => {
    setShowReminderModal(false);
  };

  const onReminderModalSubmit = (values) => {
    dispatch(createReminder({ ...values, day: selectedDay }));
    onReminderModalClose();
  };

  const onDayClick = (day) => {
    setSelectedDay(day);
    setShowReminderModal(true);
  };

  return (
    <div className={cn('calendar', className)} {...rest}>
      <CalendarTable monthNumber={4} year={2020} onDayClick={onDayClick} />
      {showReminderModal && (
        <ReminderModal
          day={selectedDay}
          onClose={onReminderModalClose}
          onSubmit={onReminderModalSubmit}
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
