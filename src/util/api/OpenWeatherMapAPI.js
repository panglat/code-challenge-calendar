import axios from 'axios';

export const appid = '80fe903c6f5e04a104c9ca1a60b94e96';

const OpenWeatherMapAPI = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5/',
});

export default OpenWeatherMapAPI;
