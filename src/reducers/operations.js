/**
 * Created by Durgaprasad Budhwani on 1/2/2018.
 */
// @flow
import type { Action, Operations } from '../types';
import {
  ADD_PACKAGES_COMPLETED,
  ADD_PACKAGES_START,
  COMPLETED,
  INPROGRESS,
  SEARCH_PACKAGE_COMPLETED,
  SEARCH_PACKAGE_START,
  GET_README_CONTENT_START,
  GET_README_CONTENT_COMPLETED,
} from '../utils/constants';

const initialOperations : Operations = {
  searchStatus: COMPLETED,
  scrollFetchStatus: COMPLETED,
  readMeFetchStatus: INPROGRESS,
};

const operations = (state : Operations = initialOperations, action : Action) : Operations => {
  switch (action.type) {
    case SEARCH_PACKAGE_START:
      return { ...state, searchStatus: INPROGRESS };
    case SEARCH_PACKAGE_COMPLETED:
      return { ...state, searchStatus: COMPLETED };
    case ADD_PACKAGES_START:
      return { ...state, scrollFetchStatus: INPROGRESS };
    case ADD_PACKAGES_COMPLETED:
      return { ...state, scrollFetchStatus: COMPLETED };
    case GET_README_CONTENT_START:
      return { ...state, readMeFetchStatus: INPROGRESS };
    case GET_README_CONTENT_COMPLETED:
      return { ...state, readMeFetchStatus: COMPLETED };
    default:
      return state;
  }
};

export default operations;
