import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import './styles.scss';

const CityWeatherView = ({ className, city, weather, weatherError }) => {
  return (
    <div className={cn('city-weather-view', className)}>
      <h4 className="city-weather-view__header">
        Weather for
        <span>
          &nbsp;
          {city}
        </span>
      </h4>
      {weather && (
        <div className="city-weather-view__row">
          <div className="city-weather-view__icon-column">
            <img
              src={weather.iconUrl}
              alt={weather.weatherMain}
              className="city-weather-view__image"
            />
          </div>
          <div className="city-weather-view__info-column">
            <p className="city-weather-view__paragraph">
              <strong>City:</strong>
              <span>{`${weather.city}, ${weather.countryCode}`}</span>
            </p>
            <p className="city-weather-view__paragraph">
              <strong>Temperature:</strong>
              <span>{`${Math.round(weather.temperatureK - 273.15)} C`}</span>
            </p>
            <p className="city-weather-view__paragraph">
              <strong>Weather:</strong>
              <span>{`${weather.weatherMain} (${weather.weatherDescription})`}</span>
            </p>
          </div>
        </div>
      )}
      {weatherError && (
        <p className="city-weather-view__paragraph">
          Failed to the get the weather information
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
