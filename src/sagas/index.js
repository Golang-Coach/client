/**
 * Created by Durgaprasad Budhwani on 12/29/2017.
 */
import { all, fork } from 'redux-saga/effects';
import { watchSearchListScroll, watchSearchQuery } from './searchWatcher';
import watchReadMe from './readmeWatcher';

export default function* rootSaga() {
  yield all([
    fork(watchSearchQuery),
    fork(watchSearchListScroll),
    fork(watchReadMe),
  ]);
}
