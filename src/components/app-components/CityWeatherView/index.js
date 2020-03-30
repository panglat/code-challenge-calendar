import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import './styles.scss';

const CityWeatherView = ({ className, city, weather, weatherError }) => {
  return (
    <div className={cn('city-weather-view', className)}>
      {weather && (
        <>
          <p className="city-weather-view__paragraph">
            City:
            <span>{`${weather.city}, ${weather.countryCode}`}</span>
          </p>
          <p className="city-weather-view__paragraph">
            Temperature:
            <span>{`${Math.round(weather.temperatureK - 273.15)} C`}</span>
          </p>
          <p className="city-weather-view__paragraph">
            Weather:
            <span>{`${weather.weatherMain} (${weather.weatherDescription})`}</span>
          </p>
          <img
            src={weather.iconUrl}
            alt={weather.weatherMain}
            className="city-weather-view__image"
          />
        </>
      )}
      {weatherError && (
        <p className="city-weather-view__paragraph">
          Failed to the get the weather information for
          <span>{city}</span>
        </p>
      )}
    </div>
  );
};

CityWeatherView.propTypes = {
  city: PropTypes.string.isRequired,
  className: PropTypes.string,
  weather: PropTypes.shape({
    city: PropTypes.string,
    countryCode: PropTypes.string,
    iconUrl: PropTypes.string,
    temperatureK: PropTypes.number,
    weatherMain: PropTypes.string,
    weatherDescription: PropTypes.string,
  }),
  weatherError: PropTypes.string,
};

CityWeatherView.defaultProps = {
  className: '',
  weather: null,
  weatherError: null,
};

export default CityWeatherView;
