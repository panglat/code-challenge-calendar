import { v4 as uuidv4 } from 'uuid';
import {
  CREATE_REMINDER,
  FIND_REMINDER,
  UPDATE_REMINDER,
  DELETE_REMINDER,
  DELETE_ALL_REMINDERS,
} from './actionTypes';

const initialState = {
  reminders: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_REMINDER:
      return {
        ...state,
        reminders: [
          ...state.reminders,
          {
            ...action.payload.reminder,
            id: uuidv4(),
          },
        ],
      };

    case FIND_REMINDER:
      return {
        ...state,
        reminders: state.reminders.find((r) => r.id === action.payload.id),
      };

    case UPDATE_REMINDER:
      return {
        ...state,
        reminders: state.reminders.map((r) =>
          r.id === action.payload.id
            ? { ...action.payload.reminder, id: action.payload.id }
            : r,
        ),
      };

    case DELETE_REMINDER:
      return {
        ...state,
        reminders: state.reminders.filter((r) => r.id !== action.payload.id),
      };

    case DELETE_ALL_REMINDERS:
      return {
        ...state,
        reminders: [],
      };

    default:
      return state;
  }
}
