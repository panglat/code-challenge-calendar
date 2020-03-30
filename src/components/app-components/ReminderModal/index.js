/* eslint-disable jsx-a11y/label-has-associated-control */
// @ packages
import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import TimePicker from 'react-time-picker';
import moment from 'moment';
import { Formik } from 'formik';
import SimpleModal from '../../base-components/SimpleModal';
import Button from '../../base-components/Button';
import ColorPicker from '../../base-components/ColorPicker';
import { reminderPropType } from '../../../util/propTypesConstants';

// @ own
import './styles.scss';

const ReminderModal = ({ className, reminder, onClose, onSubmit }) => {
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

          onSubmit({
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
              Cancelar
            </Button>
            <Button type="submit" disabled={!isValid}>
              Salvar
            </Button>
          </form>
        )}
      </Formik>
    </SimpleModal>
  );
};

ReminderModal.propTypes = {
  className: PropTypes.string,
  onClose: PropTypes.func,
  onSubmit: PropTypes.func,
  reminder: reminderPropType.isRequired,
};

ReminderModal.defaultProps = {
  className: '',
  onClose: () => {},
  onSubmit: () => {},
};

export default ReminderModal;
