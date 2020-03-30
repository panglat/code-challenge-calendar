import { combineReducers } from 'redux';

/* App reducers */
import reminderManager from '../business/ReminderManager/reducer';
import weather from '../business/Weather/reducer';

export default combineReducers({
  reminderManager,
  weather,
});
