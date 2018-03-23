import * as actionTypes from '../actions/actionTypes';
import { fromJS } from 'immutable';


const initialState = fromJS({
  similarList: [],
  loading: false,
});

const similarMoviesFetchStart = (state, action) => {
  return state
    .set('loading', true)
};


const similarMoviesFetchSuccess = (state, action) => {
  return state
    .set('loading', false)
    .set('similarList', action.result)
};


const similarReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SIMILAR_MOVIES_FETCH_START:
      return similarMoviesFetchStart(state, action);
    case actionTypes.SIMILAR_MOVIES_FETCH_SUCCESS:
      return similarMoviesFetchSuccess(state, action);
    default:
      return state;
  }
};


export default similarReducer;
