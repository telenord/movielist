import * as actions from '../actions';
import { put } from 'redux-saga/effects';
import { getUrl } from '../../shared/moviedb';
import axios from 'axios/index';

export function* fetchRecommendMoviesSaga(action) {
  const recommendUrl = getUrl(`/movie/${action.id}/recommendations`);

  yield put(actions.fetchRecommendMoviesStart());

  try {
    const recommendResponse = yield axios.get(recommendUrl);
    yield put(actions.fetchRecommendMoviesSuccess(recommendResponse.data));

  } catch (error) {
    yield put(actions.fetchMovieFail(error));
  }
}
