// @ packages
import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import Calendar from '../app-components/Calendar';

// @ own
import './styles.scss';

function App({ store }) {
  return (
    <Provider store={store}>
      <div className="App">
        <Calendar />
      </div>
    </Provider>
  );
}

App.propTypes = {
  store: PropTypes.shape({}),
};

App.defaultProps = {
  store: null,
};

export default App;
