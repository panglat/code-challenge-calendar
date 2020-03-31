import React from 'react';
import { render } from '@testing-library/react';

import createSagaMiddleware from 'redux-saga';
import configureStore from '../../store/configureStore';
import App from './index';

const sagaMiddleware = createSagaMiddleware();
const mockStore = configureStore([sagaMiddleware]);

test('renders without crashing', () => {
  render(<App store={mockStore} />);
});
