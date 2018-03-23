import { fromJS } from 'immutable';
import * as actionTypes from '../actions/actionTypes';

const initialState = fromJS({
  genresList: [],
  loading: false,
  error: null
});

const genresFetchStart = (state, action) => {
  return state.set(
    'loading', action.genres
  )
};

const genresFetchSuccess = (state, action) => {
  return state.set(
    'genresList', action.genres
  )
};
const rgenresFetchFail = (state, action) => {
  return state.set(
    'genresList', state.get('genresList')
  )
};

const genresReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GENRES_FETCH_SUCCESS:
      return genresFetchSuccess(state, action);
    case actionTypes.GENRES_FETCH_FAIL:
      return rgenresFetchFail(state, action);
    default:
      return state;
  }
};

export default genresReducer;
