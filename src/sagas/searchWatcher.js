/**
 * Created by Durgaprasad Budhwani on 12/29/2017.
 */
// @flow
import { call, put, takeLatest } from 'redux-saga/effects';
import { updateSearchPackages } from '../actions/search';
import { GetRepositoriesByQuery } from '../services';

import { SEARCH_PACKAGE, SEARCH_PACKAGE_ERROR } from '../utils/constants';

function* GetRepositories({ query }) {
  const { error, res } = yield call(GetRepositoriesByQuery, query);
  if (res) {
    yield put(updateSearchPackages(res));
  } else {
    yield put({ type: SEARCH_PACKAGE_ERROR, error });
  }
}

export default function* watchSearchQuery() {
  yield takeLatest(SEARCH_PACKAGE, GetRepositories);
}
