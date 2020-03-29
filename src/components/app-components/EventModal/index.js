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

// @ own
import './styles.scss';

const EventModal = ({ className, day, onClose, onSubmit }) => {
  return (
    <SimpleModal>
      <Formik
        initialValues={{
          eventName: '',
          eventTime: moment().format('HH:MM'),
          eventColor: {
            r: '18',
            g: '115',
            b: '222',
            a: '1',
          },
        }}
        validate={(values) => {
          const errors = {};
          if (!values.eventName) {
            errors.eventName = 'Required';
          }
          if (!values.eventTime) {
            errors.eventTime = 'Required';
          }
          if (!values.eventColor) {
            errors.eventColor = 'Required';
          }
          return errors;
        }}
        onSubmit={(values) => {
          onSubmit(values);
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
            className={cn('event-modal', className)}
            onSubmit={handleSubmit}
          >
            <h1>Event</h1>
            <div className="event-modal__group">
              <label className="event-modal__label" htmlFor="eventName">
                Name:
                <input
                  className="event-modal__input-text"
                  type="text"
                  id="eventName"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.eventName}
                />
              </label>
            </div>
            <div className="event-modal__group">
              <label className="event-modal__label" htmlFor="event-date">
                Date:
                {day.format('MM-DD-YYYY')}
              </label>
            </div>
            <div className="event-modal__group">
              <label className="event-modal__label" htmlFor="event-time">
                Time:
                <TimePicker
                  name="eventTime"
                  id="event-time"
                  disableClock
                  onChange={(value) => {
                    setFieldValue('eventTime', value);
                  }}
                  value={values.eventTime}
                />
              </label>
            </div>
            <div className="event-modal__group">
              <label className="event-modal__label" htmlFor="event-color">
                Color:
                <ColorPicker
                  onChangeComplete={(value) => {
                    setFieldValue('eventColor', value.rgb);
                  }}
                  color={values.eventColor}
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

EventModal.propTypes = {
  className: PropTypes.string,
  day: PropTypes.shape({ format: PropTypes.func }).isRequired,
  onClose: PropTypes.func,
  onSubmit: PropTypes.func,
};

EventModal.defaultProps = {
  className: '',
  onClose: () => {},
  onSubmit: () => {},
};

export default EventModal;
