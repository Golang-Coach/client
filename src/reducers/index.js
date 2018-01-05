import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import operations from './operations';
import repositoriesInfo from './repositories-info';
import repository from './repository';

const rootReducer = combineReducers({
  operations,
  repository,
  repositoriesInfo,
  router: routerReducer,
});

export default rootReducer;
