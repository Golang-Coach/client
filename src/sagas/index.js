/**
 * Created by Durgaprasad Budhwani on 12/29/2017.
 */
import { all, fork } from 'redux-saga/effects';
import { watchSearchListScroll, watchSearchQuery } from './searchWatcher';

export default function* rootSaga() {
  yield all([
    fork(watchSearchQuery),
    fork(watchSearchListScroll),
  ]);
}
