/**
 * Created by Durgaprasad Budhwani on 12/29/2017.
 */
// @flow
import { SEARCH_PACKAGE, SEARCH_PACKAGE_RESULT } from '../utils/constants';
import type { Repository } from '../types';

export const searchPackages = (query : string) => ({
  type: SEARCH_PACKAGE,
  query,
});

export const updateSearchPackages = (repositories: Array<Repository>) => ({
  type: SEARCH_PACKAGE_RESULT,
  repositories,
});
