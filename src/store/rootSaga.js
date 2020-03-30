import { all, spawn } from 'redux-saga/effects';
import weatherSagas from '../business/Weather/sagas';

export default function* rootSaga() {
  yield all([weatherSagas].map(spawn));
}
