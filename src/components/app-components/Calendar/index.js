// @ packages
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import cn from 'classnames';
import moment from 'moment';
import CalendarTable from '../CalendarTable';
import ReminderModal from '../ReminderModal';
import {
  createReminder,
  updateReminder,
  deleteReminder,
} from '../../../business/ReminderManager/actions';
import { getReminders } from '../../../business/ReminderManager/selectors';

// @ own
import './styles.scss';

const Calendar = ({ className, ...rest }) => {
  const [showReminderModal, setShowReminderModal] = useState(false);
  const [selectedReminder, setSelectedReminder] = useState(null);
  const dispatch = useDispatch();

  const reminders = useSelector((state) => getReminders(state));

  const createEmptyReminder = (day) => {
    const now = moment();
    const dateTime = day
      ? day.set({
          hour: now.hour(),
          minute: now.minute(),
          second: 0,
          millisecond: 0,
        })
      : now;

    return {
      ...{},
      city: 'Mendoza',
      color: {
        r: 18,
        g: 115,
        b: 222,
        a: 1,
      },
      dateTime: dateTime.format(),
      name: '',
      secondsSinceEpoch: dateTime.unix(),
    };
  };

  const onReminderModalClose = () => {
    setShowReminderModal(false);
  };

  const onReminderModalDelete = (id) => {
    dispatch(deleteReminder(id));
    onReminderModalClose();
  };

  const onReminderModalSave = (reminder) => {
    dispatch(
      reminder.id
        ? updateReminder(reminder.id, reminder)
        : createReminder(reminder),
    );
    onReminderModalClose();
  };

  const onCreateReminder = (day) => {
    setSelectedReminder(createEmptyReminder(day));
    setShowReminderModal(true);
  };

  const onUpdateReminder = (reminder) => {
    setSelectedReminder(reminder);
    setShowReminderModal(true);
  };

  return (
    <div className={cn('calendar', className)} {...rest}>
      <CalendarTable
        monthNumber={4}
        year={2020}
        onCreateReminder={onCreateReminder}
        onUpdateReminder={onUpdateReminder}
        reminders={reminders}
      />
      {showReminderModal && (
        <ReminderModal
          onClose={onReminderModalClose}
          onDelete={onReminderModalDelete}
          onSave={onReminderModalSave}
          reminder={selectedReminder}
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
