import { combineReducers } from 'redux';
import operations from './operations';
import repositoriesInfo from './repositories-info';
import repository from './repository';

const rootReducer = combineReducers({
  operations,
  repository,
  repositoriesInfo,
});

export default rootReducer;
