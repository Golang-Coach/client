/**
 * Created by Durgaprasad Budhwani on 12/29/2017.
 */
// @flow

import { routerMiddleware } from 'react-router-redux';
import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducers';
import rootSaga from '../sagas/index';

//  Returns the store instance
// It can  also take initialState argument when provided
const configureStore = (history : any) => {
  const sagaMiddleware = createSagaMiddleware();
  const routeMiddleware = routerMiddleware(history);
  const logger = createLogger();
  const middleware = [sagaMiddleware, routeMiddleware, logger];
  return {
    ...createStore(rootReducer,
      applyMiddleware(...middleware)),
    runSaga: sagaMiddleware.run(rootSaga),
  };
};

export default configureStore;
