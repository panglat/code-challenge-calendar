import { combineReducers } from 'redux';

/* App reducers */
import reminderManager from '../business/ReminderManager/reducer';

export default combineReducers({
  reminderManager,
});
