/**
 * Created by Durgaprasad Budhwani on 12/29/2017.
 */
// @flow
import type { Action, RepositoriesInfo } from '../types';
import { ADD_PACKAGE_RESULT, SEARCH_PACKAGE_RESULT } from '../utils/constants';

const initialReposInfo : RepositoriesInfo = {
  repositories: [],
  currentPage: 0,
  totalPage: 0,
  size: 20,
};

const repositories = (state : RepositoriesInfo = initialReposInfo, action : Action) : RepositoriesInfo => {
  switch (action.type) {
    case SEARCH_PACKAGE_RESULT:
      return action.repositoriesInfo;
    case ADD_PACKAGE_RESULT: {
      const newState = { ...state };
      newState.repositories = [...state.repositories, ...action.repositoriesInfo.repositories];
      newState.currentPage = action.repositoriesInfo.currentPage;
      return newState;
    }
    default:
      return state;
  }
};

export default repositories;
