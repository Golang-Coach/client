/**
 * Created by Durgaprasad Budhwani on 12/29/2017.
 */
// @flow
import { SEARCH_PACKAGE, SEARCH_PACKAGE_RESULT, ADD_PACKAGE_RESULT } from '../utils/constants';
import type { RepositoriesInfo } from '../types';

export const searchPackages = (query : string) => ({
  type: SEARCH_PACKAGE,
  query,
});

export const updateSearchPackages = (repositoriesInfo: RepositoriesInfo) => ({
  type: SEARCH_PACKAGE_RESULT,
  repositoriesInfo,
});

export const addPackages = (repositoriesInfo: RepositoriesInfo) => ({
  type: ADD_PACKAGE_RESULT,
  repositoriesInfo,
});
