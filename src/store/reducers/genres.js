import { fromJS } from 'immutable';
import * as actionTypes from '../actions/actionTypes';

const initialState = fromJS({
  genresList: [],
  loading: false,
  error: null
});

const genresFetchInit = (state, action) => {
  return state
  .set('loading', true)
  .set('error', null)
};

const genresFetchSuccess = (state, action) => {
  return state
  .set('loading', false)
  .set('genresList', action.genres.genres)
};
const rgenresFetchFail = (state, action) => {
  return state
  .set('loading', false)
  .set('error', action.error)
};

const genresReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GENRES_FETCH_INIT:
      return genresFetchInit(state, action);
    case actionTypes.GENRES_FETCH_SUCCESS:
      return genresFetchSuccess(state, action);
    case actionTypes.GENRES_FETCH_FAIL:
      return rgenresFetchFail(state, action);
    default:
      return state;
  }
};

export default genresReducer;
