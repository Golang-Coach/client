/**
 * Created by Durgaprasad Budhwani on 12/29/2017.
 */
// @flow

import { all, fork } from 'redux-saga/effects';
import searchWatcher from './searchWatcher';

export default function* rootSaga() {
  yield all([
    fork(searchWatcher),
  ]);
}
