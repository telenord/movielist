import * as actionTypes from '../actions/actionTypes';
import { fromJS } from "immutable";

const initialState = fromJS({
  list:[],
  page:0,
  total_pages: 0,
  total_results: 0,
});

const movieListFetchSuccess = (state, action)=> {
  return state
    .set('list', action.data.results)
    .set('page', action.data.page)
    .set('total_pages', action.data.total_pages)
    .set('total_results', action.data.total_results)
};

const movieListReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.MOVIE_LIST_FETCH_SUCCESS:
      return movieListFetchSuccess(state, action);


    default:
      return state;
  }
};



export default movieListReducer;
