import { put } from 'redux-saga/effects';
import axios from 'axios';

import * as actions from './../actions/index';
import { getUrl } from '../../shared/moviedb';


export function* fetchMovieSaga(action) {
  const url = getUrl(`/movie/${action.id}`);

  const similarUrl = getUrl(`/movie/${action.id}/similar`);
  const recommendUrl = getUrl(`/movie/${action.id}/recommendations`);


  yield put(actions.fetchMovieStart());

  try {
    const response = yield axios.get(url);
    yield put(actions.fetchMovieSuccess(response.data));

    const similarResponse = yield axios.get(similarUrl);
    const recommendResponse = yield axios.get(recommendUrl);

    yield put(actions.fetchSimilarMoviesSuccess(similarResponse.data));

    yield put(actions.fetchRecommendMoviesSuccess(recommendResponse.data));



  } catch (error) {
    yield put(actions.fetchMovieFail(error));
  }
}
