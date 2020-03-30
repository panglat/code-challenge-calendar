import {
  WEATHER_FETCH_REQUESTED,
  WEATHER_FETCH_SUCCEEDED,
  WEATHER_FETCH_FAILED,
  WEATHER_CLEAR,
} from './actionTypes';

export const requestWeather = (params) => ({
  type: WEATHER_FETCH_REQUESTED,
  payload: { params },
});

export const requestWeatherSuccess = (response) => ({
  type: WEATHER_FETCH_SUCCEEDED,
  payload: { response },
});

export const requestWeatherError = (error) => ({
  type: WEATHER_FETCH_FAILED,
  payload: { error },
});

export const clearWeather = () => ({
  type: WEATHER_CLEAR,
});
