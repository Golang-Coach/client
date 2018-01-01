import { combineReducers } from 'redux';
import repository from './repository';
import repositories from './repositories';

const rootReducer = combineReducers({
  repository,
  repositories,
});

export default rootReducer;
