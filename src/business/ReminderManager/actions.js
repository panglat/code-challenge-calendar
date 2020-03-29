import {
  CREATE_REMINDER,
  FIND_REMINDER,
  UPDATE_REMINDER,
  DELETE_REMINDER,
  DELETE_ALL_REMINDERS,
} from './actionTypes';

export const createReminder = (reminder) => ({
  type: CREATE_REMINDER,
  payload: { reminder },
});

export const findReminder = (id) => ({
  type: FIND_REMINDER,
  payload: { id },
});

export const updateReminder = (id, reminder) => ({
  type: UPDATE_REMINDER,
  payload: { id, reminder },
});

export const deleteReminder = (id) => ({
  type: DELETE_REMINDER,
  payload: { id },
});

export const deleteAllReminders = () => ({
  type: DELETE_ALL_REMINDERS,
});
