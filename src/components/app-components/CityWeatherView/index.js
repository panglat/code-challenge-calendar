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
            <span>{`${weather.name}, ${weather.sys.country}`}</span>
          </p>
          <p className="city-weather-view__paragraph">
            Temperature:
            <span>{`${weather.main.temp - 273.15} C`}</span>
          </p>
          <p className="city-weather-view__paragraph">
            Weather:
            <span>{`${weather.weather[0].main} (${weather.weather[0].description})`}</span>
          </p>
          <img
            src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
            alt={weather.weather[0].main}
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
  weather: PropTypes.node,
  weatherError: PropTypes.node,
};

CityWeatherView.defaultProps = {
  className: '',
  weather: null,
  weatherError: null,
};

export default CityWeatherView;
