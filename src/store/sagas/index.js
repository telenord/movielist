import { takeEvery } from 'redux-saga/effects';
import * as actionTypes from '../actions/actionTypes';
import { fetchMovieSaga } from './movie';
import { fetchMovieListSaga } from './movieList';



export function* watchFetchMovie() {
  yield takeEvery(actionTypes.MOVIE_FETCH_INIT, fetchMovieSaga);
}

export function* watchFetchMovieList() {
  yield takeEvery(actionTypes.MOVIE_LIST_FETCH_INIT, fetchMovieListSaga);
}
