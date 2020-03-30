/* eslint-disable jsx-a11y/label-has-associated-control */
// @ packages
import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import TimePicker from 'react-time-picker';
import moment from 'moment';
import { Formik } from 'formik';
import SimpleModal from '../../base-components/SimpleModal';
import Button from '../../base-components/Button';
import ColorPicker from '../../base-components/ColorPicker';
import { reminderPropType } from '../../../util/propTypesConstants';
import { requestWeather } from '../../../business/Weather/actions';
import {
  getWeather as getWeatherSelector,
  getWeatherError as getWeatherErrorSelector,
} from '../../../business/Weather/selectors';
// @ own
import './styles.scss';
import CityWeatherView from '../CityWeatherView';

const ReminderModal = ({ className, reminder, onClose, onDelete, onSave }) => {
  const dispatch = useDispatch();
  const weather = useSelector((state) => getWeatherSelector(state));
  const weatherError = useSelector((state) => getWeatherErrorSelector(state));

  const getWeather = (city) => {
    dispatch(requestWeather({ city }));
  };

  return (
    <SimpleModal>
      <Formik
        initialValues={{
          reminderName: reminder.name,
          reminderTime: moment(reminder.dateTime).format('HH:mm'),
          reminderCity: reminder.city,
          reminderColor: reminder.color,
        }}
        validate={(values) => {
          const errors = {};
          if (!values.reminderName) {
            errors.reminderName = 'Required';
          }
          if (!values.reminderTime) {
            errors.reminderTime = 'Required';
          }
          if (!values.reminderCity) {
            errors.reminderCity = 'Required';
          }
          if (!values.reminderColor) {
            errors.reminderColor = 'Required';
          }
          return errors;
        }}
        onSubmit={(values) => {
          const timeSplitted = values.reminderTime.split(':');
          const dateTime = moment(reminder.dateTime).set({
            hour: timeSplitted[0],
            minute: timeSplitted[1],
            second: 0,
            millisecond: 0,
          });

          onSave({
            ...reminder,
            city: values.reminderCity,
            color: values.reminderColor,
            dateTime: dateTime.format(),
            name: values.reminderName,
            secondsSinceEpoch: dateTime.unix(),
          });
        }}
        validateOnMount
      >
        {({
          values,
          handleChange,
          handleBlur,
          handleSubmit,
          isValid,
          setFieldValue,
        }) => (
          <form
            className={cn('reminder-modal', className)}
            onSubmit={handleSubmit}
          >
            <h1>Reminder</h1>
            <div className="reminder-modal__group">
              <label className="reminder-modal__label" htmlFor="reminderName">
                Name:
                <input
                  className="reminder-modal__input-text"
                  type="text"
                  id="reminderName"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.reminderName}
                  maxLength="30"
                />
              </label>
            </div>
            <div className="reminder-modal__group">
              <label className="reminder-modal__label" htmlFor="reminder-date">
                Date:
                {moment(reminder.dateTime).format('MM-DD-YYYY')}
              </label>
            </div>
            <div className="reminder-modal__group">
              <label className="reminder-modal__label" htmlFor="reminder-time">
                Time:
                <TimePicker
                  name="reminderTime"
                  id="reminder-time"
                  disableClock
                  onChange={(value) => {
                    setFieldValue('reminderTime', value);
                  }}
                  value={values.reminderTime}
                />
              </label>
            </div>
            <div className="reminder-modal__group">
              <label className="reminder-modal__label" htmlFor="reminderCity">
                City:
                <input
                  className="reminder-modal__input-text"
                  type="text"
                  id="reminderCity"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.reminderCity}
                />
              </label>
            </div>
            <Button
              type="button"
              onClick={() => {
                getWeather(values.reminderCity);
              }}
            >
              Weather
            </Button>
            {(weather || weatherError) && (
              <CityWeatherView
                city={values.reminderCity}
                weather={
                  weather
                    ? {
                        city: weather.name,
                        countryCode: weather.sys.country,
                        iconUrl: `http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`,
                        temperatureK: weather.main.temp,
                        weatherMain: weather.weather[0].main,
                        weatherDescription: weather.weather[0].description,
                      }
                    : null
                }
                weatherError={weatherError}
              />
            )}
            <div className="reminder-modal__group">
              <label className="reminder-modal__label" htmlFor="reminder-color">
                Color:
                <ColorPicker
                  onChangeComplete={(value) => {
                    setFieldValue('reminderColor', value.rgb);
                  }}
                  color={values.reminderColor}
                />
              </label>
            </div>
            <Button buttonStyle="secondary" type="button" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit" disabled={!isValid}>
              Save
            </Button>
            {reminder.id && (
              <Button type="button" onClick={() => onDelete(reminder.id)}>
                Delete
              </Button>
            )}
          </form>
        )}
      </Formik>
    </SimpleModal>
  );
};

ReminderModal.propTypes = {
  className: PropTypes.string,
  onClose: PropTypes.func,
  onDelete: PropTypes.func,
  onSave: PropTypes.func,
  reminder: reminderPropType.isRequired,
};

ReminderModal.defaultProps = {
  className: '',
  onClose: () => {},
  onDelete: () => {},
  onSave: () => {},
};

export default ReminderModal;
