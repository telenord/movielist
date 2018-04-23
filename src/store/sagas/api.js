import { select, put } from 'redux-saga/effects';
import { getUrl } from '../../shared/moviedb';
import axios from 'axios/index';

export function* apiFetchSaga(action) {
  const state = yield select();
  const language =  state.get('language').get('locale');

  console.log('saga',   state, language);
  const {url, start, success, error} = action.meta;
  const fullPath = getUrl(url, {language});
  yield put(start());
  try {
    const response = yield axios.get(fullPath);
    yield put(success(response.data));

  } catch (err) {
    yield put(error(err));
  }
}
