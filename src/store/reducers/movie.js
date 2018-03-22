import * as actionTypes from '../actions/actionTypes';
import { fromJS } from 'immutable';


const initialState = fromJS({
  movie: {},
  loading: false,
});

const movieFetchStart = (state, action) => {
  return state
    .set('loading', true)
};


const movieFetchSuccess = (state, action) => {
  return state
    .set('loading', false)
    .set('movie', action.movie)
};


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.MOVIE_FETCH_START:
      return movieFetchStart(state, action);
    case actionTypes.MOVIE_FETCH_SUCCESS:
      return movieFetchSuccess(state, action);

    default:
      return state;
  }
};


export default reducer;
