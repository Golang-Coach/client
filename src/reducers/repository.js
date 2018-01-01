/**
 * Created by Durgaprasad Budhwani on 12/29/2017.
 */
// @flow
import type { Action, Repository } from '../types';
import { FETCH_README_CONTENT } from '../utils/constants';

const initialRepository : Repository = {
  name: null,
  description: null,
  user: {},
  license: null,
  stars: null,
  readme: null,
  latestRelease: null,
  publishedAt: null,
  modifiedAt: null,
  keywords: [],
};

const repository = (state : Repository = initialRepository, action : Action) : Repository => {
  switch (action.type) {
    case FETCH_README_CONTENT:
      return action.repository;
    default:
      return state;
  }
};

export default repository;
