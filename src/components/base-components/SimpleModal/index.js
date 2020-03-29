import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import './styles.scss';

const SimpleModal = ({ className, children }) => (
  <div className="simple-modal">
    <section className={cn('simple-modal__main', className)}>
      {children}
    </section>
  </div>
);

SimpleModal.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

SimpleModal.defaultProps = {
  className: '',
  children: null,
};

export default SimpleModal;
