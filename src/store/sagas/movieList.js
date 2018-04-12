import { put } from 'redux-saga/effects';
import axios from 'axios';

import * as actions from './../actions/index';
import { getUrl } from '../../shared/moviedb';


export function* fetchMovieListSaga(action) {
  console.log(action);
  const url = action ? getUrl('/movie/popular', `page=${action.page}`): getUrl('/movie/popular');

  yield put(actions.fetchMovieListStart());
  try {
    const response = yield axios.get(url);
    yield put(actions.fetchMovieListSuccess(response.data));

  } catch (error) {
    yield put(actions.fetchMovieListFail(error));
  }
}

export function* searchMovieListSaga(action) {
  const url = getUrl('/search/movie', `query=${action.name}` );
  yield put(actions.fetchMovieListStart());
  try {
    const response = yield axios.get(url);
    yield put(actions.fetchMovieListSuccess(response.data));

  } catch (error) {
    yield put(actions.fetchMovieListFail(error));
  }
}


