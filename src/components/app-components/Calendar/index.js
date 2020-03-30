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
  deleteAllReminders,
} from '../../../business/ReminderManager/actions';
import { getReminders } from '../../../business/ReminderManager/selectors';
import CalendarHeader from '../CalendarHeader';

// @ own
import './styles.scss';

const Calendar = ({ className, ...rest }) => {
  const getCurrentMonthYear = () => {
    const now = moment();
    return moment(`${now.month() + 1}-${now.year()}`, 'MM-YYYY');
  };

  const [showReminderModal, setShowReminderModal] = useState(false);
  const [selectedReminder, setSelectedReminder] = useState(null);
  const [currentMonthYear, setCurrentMonthYear] = useState(
    getCurrentMonthYear(),
  );
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
      city: '',
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

  const onDeleteAllReminders = () => {
    dispatch(deleteAllReminders());
  };

  return (
    <div className={cn('calendar', className)} {...rest}>
      <CalendarHeader
        monthYear={currentMonthYear}
        onDeleteAllReminders={onDeleteAllReminders}
        onMonthYearChanged={(monthYear) => setCurrentMonthYear(monthYear)}
      />
      <CalendarTable
        monthNumber={currentMonthYear.month() + 1}
        year={currentMonthYear.year()}
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
