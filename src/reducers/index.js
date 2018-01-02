import { combineReducers } from 'redux';
import operations from './operations';
import repositories from './repositories-info';
import repository from './repository';

const rootReducer = combineReducers({
  operations,
  repository,
  repositories,
});

export default rootReducer;
