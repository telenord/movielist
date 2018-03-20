import { takeEvery } from 'redux-saga/effects';
import * as actionTypes from '../actions/actionTypes';
import { fetchMovieSaga } from './movie';



export function* watchFetchMovie() {
  yield takeEvery(actionTypes.MOVIE_FETCH_INIT, fetchMovieSaga);
}
