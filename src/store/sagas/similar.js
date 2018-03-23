import * as actions from '../actions';
import { put } from 'redux-saga/effects';
import { getUrl } from '../../shared/moviedb';
import axios from 'axios/index';

export function* fetchSimilarMoviesSaga(action) {
  const similarUrl = getUrl(`/movie/${action.id}/similar`);

  yield put(actions.fetchSimilarMoviesStart());

  try {
    const similarResponse = yield axios.get(similarUrl);
    yield put(actions.fetchSimilarMoviesSuccess(similarResponse.data));

  } catch (error) {
    yield put(actions.fetchSimilarMoviesFail(error));
  }
}
