import {
  WEATHER_FETCH_REQUESTED,
  WEATHER_FETCH_SUCCEEDED,
  WEATHER_FETCH_FAILED,
  WEATHER_CLEAR,
} from './actionTypes';

const initialState = {
  loading: false,
  error: null,
  weather: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case WEATHER_FETCH_REQUESTED:
      return {
        ...state,
        loading: true,
      };

    case WEATHER_FETCH_SUCCEEDED:
      return {
        ...state,
        loading: false,
        error: null,
        weather: { ...action.payload.response },
      };

    case WEATHER_FETCH_FAILED:
      return {
        ...state,
        loading: false,
        weather: null,
        error: action.payload.error,
      };

    case WEATHER_CLEAR:
      return {
        ...state,
        loading: false,
        error: null,
        weather: null,
      };

    default:
      return state;
  }
}
