import { put } from 'redux-saga/effects';
import axios from 'axios';

import * as actions from './../actions/index';
import { getUrl } from '../../shared/moviedb';

export function* fetchMovieSaga(action) {
  const url = getUrl(`/movie/${action.id}`);

  yield put(actions.fetchMovieStart());

  yield put(actions.fetchSimilarMoviesInit(action.id));
  yield put(actions.fetchRecommendMoviesInit(action.id));

  try {
    const response = yield axios.get(url);
    yield put(actions.fetchMovieSuccess(response.data));

  } catch (error) {
    yield put(actions.fetchMovieFail(error.response.data));
  }
}

