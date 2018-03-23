import * as actions from '../actions';
import { put } from 'redux-saga/effects';
import { getUrl } from '../../shared/moviedb';
import axios from 'axios/index';

export function* fetchGenreListSaga() {
  const url = getUrl('/genre/movie/list');

  yield put(actions.fetchGenreListStart());
  try {
    const response = yield axios.get(url);
    yield put(actions.fetchGenreListSuccess(response.data));

  } catch (error) {
    yield put(actions.fetchGenreListFail(error));
  }
}
