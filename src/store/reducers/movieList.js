import * as actionTypes from '../actions/actionTypes';
import { fromJS } from 'immutable';

const initialState = fromJS({
  list: [],
  loading: false,
  page: 1,
  total_pages: 0,
  total_results: 0,
  error: null
});
const movieListFetchInit = (state, action) => {
  return state
  .set('loading', true)
  .set('error', null)
};
const movieListFetchSuccess = (state, action) => {
  return state
  .set('loading', false)
  .set('list', action.data.results)
  .set('page', action.data.page)
  .set('total_pages', action.data.total_pages)
  .set('total_results', action.data.total_results)
};
const movieListFetchFail = (state, action) => {
  return state
  .set('loading', false)
  .set('error', action.data.error)
};
const searchMovieListInit = (state, action) => {
  return state
  .set('loading', true)
  .set('error', null)
};
const movieListReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.MOVIE_LIST_FETCH_INIT:
      return movieListFetchInit(state, action);
    case actionTypes.MOVIE_LIST_FETCH_SUCCESS:
      return movieListFetchSuccess(state, action);
    case actionTypes.MOVIE_LIST_FETCH_FAIL:
      return movieListFetchFail(state, action);
    case actionTypes.SEARCH_INIT:
      return searchMovieListInit(state, action);
    default:
      return state;
  }
};

export default movieListReducer;
