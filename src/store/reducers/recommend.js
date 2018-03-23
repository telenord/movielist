import * as actionTypes from '../actions/actionTypes';
import { fromJS } from 'immutable';


const initialState = fromJS({
  recommendList: [],
  loading: false,
});

const recommendMoviesFetchStart = (state, action) => {
  return state
    .set('loading', true)
};


const recommendMoviesFetchSuccess = (state, action) => {
  return state
    .set('loading', false)
    .set('recommendList', action.result)
};


const recommendReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.RECOMMEND_MOVIES_FETCH_START:
      return recommendMoviesFetchStart(state, action);
    case actionTypes.RECOMMEND_MOVIES_FETCH_SUCCESS:
      return recommendMoviesFetchSuccess(state, action);
    default:
      return state;
  }
};


export default recommendReducer;
