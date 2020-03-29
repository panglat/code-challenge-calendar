/* eslint-disable jsx-a11y/label-has-associated-control */
// @ packages
import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import TimePicker from 'react-time-picker';
import moment from 'moment';
import SimpleModal from '../../base-components/SimpleModal';

// @ own
import './styles.scss';

const EventModal = ({ className, ...rest }) => {
  let time = moment().format('HH:MM');

  const onChange = (t) => {
    time = t;
  };

  return (
    <SimpleModal>
      <form className={cn('event-modal', className)} {...rest}>
        <h1>Event</h1>
        <div className="event-modal__group">
          <label className="event-modal__label" htmlFor="event-name">
            Name:
            <input
              className="event-modal__input-text"
              type="text"
              id="event-name"
            />
          </label>
        </div>
        <div className="event-modal__group">
          <label className="event-modal__label" htmlFor="event-time">
            Time:
            <TimePicker
              id="event-time"
              disableClock
              onChange={onChange}
              value={time}
            />
          </label>
        </div>
      </form>
    </SimpleModal>
  );
};

EventModal.propTypes = {
  className: PropTypes.string,
};

EventModal.defaultProps = {
  className: '',
};

export default EventModal;
