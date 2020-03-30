/**
 * @file Manages user requests.
 * @module services/UserService
 */
import OpenWeatherMapAPI, { appid } from '../util/api/OpenWeatherMapAPI';

// eslint-disable-next-line import/prefer-default-export
export const getWeather = async (
  parameters = {
    city: 'mendoza',
  },
) => {
  try {
    const response = await OpenWeatherMapAPI.get('weather', {
      params: {
        q: parameters.city,
        appid,
      },
    });
    return response.data;
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log(err);
    throw err;
  }
};
