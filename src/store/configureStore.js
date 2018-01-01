/**
 * Created by Durgaprasad Budhwani on 12/29/2017.
 */
// @flow

import { applyMiddleware, createStore } from 'redux';
// import createLogger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducers';
import rootSaga from '../sagas/index';

//  Returns the store instance
// It can  also take initialState argument when provided
const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  // const logger = createLogger();
  // const middleware = [sagaMiddleware, logger];
  return {
    ...createStore(rootReducer,
      applyMiddleware(sagaMiddleware)),
    runSaga: sagaMiddleware.run(rootSaga),
  };
};

export default configureStore;
