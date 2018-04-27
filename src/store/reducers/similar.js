import * as actionTypes from '../actions/actionTypes';
import { fromJS } from 'immutable';


const initialState = fromJS({
  similarList: [],
  loading: false,
  error: null
});

const similarMoviesFetchStart = (state, action) => {
  return state
  .set('loading', true)
  .set('error', null)
};


const similarMoviesFetchSuccess = (state, action) => {
  console.log(action);
  return state
  .set('loading', false)
  .set('similarList', action.data.results)
};

const similarMoviesFetchFail = (state, action) => {
  return state
  .set('loading', false)
  .set('error', action.data.error)
};

const similarReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SIMILAR_MOVIES_FETCH_START:
      return similarMoviesFetchStart(state, action);
    case actionTypes.SIMILAR_MOVIES_FETCH_SUCCESS:
      return similarMoviesFetchSuccess(state, action);
    case actionTypes.SIMILAR_MOVIES_FETCH_FAIL:
      return similarMoviesFetchFail(state, action);
    default:
      return state;
  }
};


export default similarReducer;
