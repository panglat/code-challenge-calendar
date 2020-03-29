import { v5 as uuidv5 } from 'uuid'; // For version 5
import {
  CREATE_REMINDER,
  FIND_REMINDER,
  UPDATE_REMINDER,
  DELETE_REMINDER,
  DELETE_ALL_REMINDERS,
} from './actionTypes';

const MY_NAMESPACE = 'f14f1110-76d2-4893-83a7-85da08f66a8c';

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
            id: uuidv5('code-challenge-calendar.fake', MY_NAMESPACE),
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
