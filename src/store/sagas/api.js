import { select, put } from 'redux-saga/effects';
import { getUrl } from '../../shared/moviedb';
import axios from 'axios/index';

export function* apiFetchSaga(action) {
  const state = yield select();
  const language = state.get('language').get('locale');

  const {url, start, success, error, page, query} = action.meta;
  const params = {language};
  if (page) {
    params.page = page;
  }
  if (query) {
    params.query = query;
  }
  yield put(start());
  try {
    const response = yield axios.get(getUrl(url, params));
    yield put(success(response.data));

  } catch (err) {
    yield put(error(err));
  }
}
