import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import moment from 'moment';
import { reminderPropType } from '../../../util/propTypesConstants';

import './styles.scss';

const SummarizedReminder = ({ className, reminder, ...rest }) => (
  <div
    className={cn('summarized-reminder', className)}
    style={{
      backgroundColor: `rgba(${reminder.color.r}, ${reminder.color.g}, ${reminder.color.b}, ${reminder.color.a})`,
    }}
    {...rest}
  >
    <p className="summarized-reminder__name">{reminder.name}</p>
    <p className="summarized-reminder__time">
      {moment(reminder.dateTime).format('LT')}
    </p>
  </div>
);

SummarizedReminder.propTypes = {
  className: PropTypes.string,
  reminder: reminderPropType.isRequired,
};

SummarizedReminder.defaultProps = {
  className: '',
};

export default SummarizedReminder;
