/**
 * Created by Durgaprasad Budhwani on 12/29/2017.
 */
import { call, put, takeLatest } from 'redux-saga/effects';
import { addPackages, updateSearchPackages } from '../actions/search';
import { GetRepositories } from '../services';

import {
  ADD_PACKAGES,
  ADD_PACKAGES_START,
  ADD_PACKAGES_COMPLETED,
  ADD_PACKAGE_ERROR,
  COMPLETED,
  INPROGRESS,
  SEARCH_PACKAGE,
  SEARCH_PACKAGE_COMPLETED,
  SEARCH_PACKAGE_ERROR,
  SEARCH_PACKAGE_START,
} from '../utils/constants';

function* GetRepositoriesByQuery({ query }) : Generator<any, void, void> {
  yield put({ type: SEARCH_PACKAGE_START, status: INPROGRESS });
  const { error, res } = yield call(GetRepositories, query);
  yield put({ type: SEARCH_PACKAGE_COMPLETED, status: COMPLETED });
  if (res) {
    yield put(updateSearchPackages(res));
  } else {
    yield put({ type: SEARCH_PACKAGE_ERROR, error });
  }
}

function* GetRepositoriesByPagination({ query, page, limit }) : Generator<any, void, void> {
  yield put({ type: ADD_PACKAGES_START, status: INPROGRESS });
  const { error, res } = yield call(GetRepositories, query, page, limit);
  yield put({ type: ADD_PACKAGES_COMPLETED, status: COMPLETED });
  if (res) {
    yield put(addPackages(res));
  } else {
    yield put({ type: ADD_PACKAGE_ERROR, error });
  }
}

export function* watchSearchQuery() {
  yield takeLatest(SEARCH_PACKAGE, GetRepositoriesByQuery);
}

export function* watchSearchListScroll() {
  yield takeLatest(ADD_PACKAGES, GetRepositoriesByPagination);
}
