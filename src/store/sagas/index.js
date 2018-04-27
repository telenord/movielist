import { takeEvery } from 'redux-saga/effects';
import * as actionTypes from '../actions/actionTypes';

import { apiFetchSaga } from './api';

export function* watchApiFetch() {
  yield takeEvery(actionTypes.API_FETCH_INIT, apiFetchSaga);
}
