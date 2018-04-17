import { put } from 'redux-saga/effects';
import { getUrl } from '../../shared/moviedb';
import axios from 'axios/index';

export function* apiFetchSaga(action) {

  const {url, start, success, error}  = action.meta;

  yield put(start());
  try {
    const response = yield axios.get(url);
    yield put(success(response.data));

  } catch (err) {
    yield put(error(err));
  }
}
