import * as actionTypes from '../actions/actionTypes';
import    { fromJS } from 'immutable';


const initialState = fromJS({
  movie:{},
  loading: false,
});

const movieFetchStart = (state, action)=>{
  return state
    .set('loading', true)
};


const movieFetchSuccess = (state, action)=> {
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
    // case actionTypes.MOVIE_ADD_TO_FAVORITE:
    //   return movieAddToFavorite(state, action);
    // case actionTypes.MOVIE_REMOVE_FROM_FAVORITE:
    //   return {
    //     ...state,
    //     movie: {
    //       ...state.movie,
    //       favorite: false,
    //     },
    //     favoriteList: state.favoriteList.filter(id=>{
    //       return id !== action.id
    //     }) };

    default:
      return state;
  }
};



export default reducer;
