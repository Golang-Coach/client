/**
 * Created by Durgaprasad Budhwani on 1/4/2018.
 */
import { call, put, takeLatest } from 'redux-saga/effects';
import { updateReadMe } from '../actions/readme';
import { GetRepository } from '../services';
import {
  COMPLETED,
  GET_README_CONTENT,
  GET_README_CONTENT_COMPLETED,
  GET_README_CONTENT_ERROR,
  GET_README_CONTENT_START,
  INPROGRESS,
} from './../utils/constants';

function* GetReadMe({ id }) {
  yield put({ type: GET_README_CONTENT_START, status: INPROGRESS });
  const { error, res } = yield call(GetRepository, id);
  yield put({ type: GET_README_CONTENT_COMPLETED, status: COMPLETED });
  if (res) {
    yield put(updateReadMe(res));
  } else {
    yield put({ type: GET_README_CONTENT_ERROR, error });
  }
}

export default function* watchReadMe() {
  yield takeLatest(GET_README_CONTENT, GetReadMe);
}
