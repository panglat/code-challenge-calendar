// @ packages
import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import SimpleModal from '../../base-components/SimpleModal';

// @ own
import './styles.scss';

const EventModal = ({ className, ...rest }) => {
  return (
    <SimpleModal>
      <form className={cn('event-modal', className)} {...rest}>
        <h1>Event</h1>
        <label className="event-modal__label" htmlFor="name">
          Name:
          <input
            className="event-modal__input-text"
            type="text"
            id="name"
            name="name"
          />
        </label>
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
