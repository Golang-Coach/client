/**
 * Created by Durgaprasad Budhwani on 12/29/2017.
 */
// @flow
import type { Action, Repository } from '../types';
import { SEARCH_PACKAGE_RESULT } from '../utils/constants';

const initialRepos : Array<Repository> = [];

const repositories = (state : Array<Repository> = initialRepos, action : Action) : Repository => {
  switch (action.type) {
    case SEARCH_PACKAGE_RESULT:
      return action.repositories;
    default:
      return state;
  }
};

export default repositories;
