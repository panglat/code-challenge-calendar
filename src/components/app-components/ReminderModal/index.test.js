import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render, fireEvent, wait } from '@testing-library/react';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';

import moment from 'moment';
import configureStore from '../../../store/configureStore';

import ReminderModal from './index';

const sagaMiddleware = createSagaMiddleware();
const mockStore = configureStore([sagaMiddleware]);

const now = moment();

const emptyReminder = {
  city: '',
  color: { r: 18, g: 115, b: 222, a: 1 },
  dateTime: now.format(),
  name: '',
  secondsSinceEpoch: now.unix(),
};

function renderReminderModal() {
  return render(
    <Provider store={mockStore}>
      <ReminderModal store={mockStore} reminder={emptyReminder} />
    </Provider>,
  );
}

test('renders without crashing', () => {
  renderReminderModal();
});

test('Save button has to be disabled', async () => {
  const { getByLabelText, getByText } = renderReminderModal();
  const nameInput = getByLabelText(/name/i);
  expect(nameInput).toHaveAttribute('type', 'text');
  fireEvent.blur(nameInput);
  const cityInput = getByLabelText(/city/i, {
    selector: 'input',
  });
  fireEvent.blur(cityInput);
  await wait(() => {
    const saveButton = getByText(/save/i);
    expect(saveButton).toHaveAttribute('type', 'submit');
    expect(saveButton).toBeDisabled();
  });
});
