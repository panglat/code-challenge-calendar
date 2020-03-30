import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

export default function configureStore() {
  const composeEnhancers = composeWithDevTools({
    // Specify name here, actionsBlacklist, actionsCreators and other options if needed
  });

  // mount it on the Store
  const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(sagaMiddleware)),
  );

  // then run the saga
  sagaMiddleware.run(rootSaga);
  return store;
}
