import { takeEvery } from 'redux-saga/effects';
import * as actionTypes from '../actions/actionTypes';
import { fetchMovieSaga } from './movie';
import { fetchMovieListSaga, searchMovieListSaga } from './movieList';
import { fetchGenreListSaga } from './genres';
import { fetchSimilarMoviesSaga } from './similar';
import { apiFetchSaga } from './api';
import store from '../store';
//import { fetchRecommendMoviesSaga } from './recommend';


export function* watchFetchMovie() {
  yield takeEvery(actionTypes.MOVIE_FETCH_INIT, fetchMovieSaga);
}

export function* watchFetchMovieList() {
  yield takeEvery(actionTypes.MOVIE_LIST_FETCH_INIT, fetchMovieListSaga);
}

export function* watchFetchSimilarMovies() {
  yield takeEvery(actionTypes.SIMILAR_MOVIES_FETCH_INIT, fetchSimilarMoviesSaga);
}

// export function* watchFetchRecommendMovies() {
//   yield takeEvery(actionTypes.RECOMMEND_MOVIES_FETCH_INIT, fetchRecommendMoviesSaga);
// }

export function* watchFetchGenresList() {
  yield takeEvery(actionTypes.GENRES_FETCH_INIT, fetchGenreListSaga);
}

export function* watchSearchMovieList() {
  yield takeEvery(actionTypes.SEARCH_INIT, searchMovieListSaga);
}

export function* watchApiFetch() {
  yield takeEvery(actionTypes.API_FETCH_INIT, apiFetchSaga);
}
