import * as actionTypes from '../actions/actionTypes';
import { fromJS } from 'immutable';


const initialState = fromJS({
  recommendList: [],
  loading: false,
  error: null
});

const recommendMoviesFetchStart = (state, action) => {
  return state
  .set('loading', true)
  .set('error', null)
};


const recommendMoviesFetchSuccess = (state, action) => {
  return state
  .set('loading', false)
  .set('recommendList', action.payload.results)
};

const recommendMoviesFetchFail = (state, action) => {
  return state
  .set('loading', false)
  .set('error', action.data.error)
};

const recommendReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.RECOMMEND_MOVIES_FETCH_START:
      return recommendMoviesFetchStart(state, action);
    case actionTypes.RECOMMEND_MOVIES_FETCH_SUCCESS:
      return recommendMoviesFetchSuccess(state, action);
    case actionTypes.RECOMMEND_MOVIES_FETCH_FAIL:
      return recommendMoviesFetchFail(state, action);
    default:
      return state;
  }
};


export default recommendReducer;
