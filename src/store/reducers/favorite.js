import * as actionTypes from '../actions/actionTypes';
import { fromJS, List } from "immutable";

const initialState = fromJS({
  favoriteList: []
});

const movieAddToFavorite = (state, action)=>{
  // return { ...state,
  //   movie: {
  //     ...state.movie,
  //     favorite: true,
  //   },
  //   favoriteList: [...state.favoriteList, action.id ]
  // }
  return state.set(
    'favoriteList', state.favoriteList.favoriteList.push(action.id)
  )
};
const removeMovieFromFavorite = (state, action)=>{
  // return {
  //   ...state,
  //   movie: {
  //     ...state.movie,
  //     favorite: false,
  //   },
  //   favoriteList: state.favoriteList.filter(id=>{
  //     return id !== action.id
  //   }) };
  return state.set(
    'favoriteList', state.favoriteList.delete(action.id)
  )
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.MOVIE_ADD_TO_FAVORITE:
      return movieAddToFavorite(state , action);
    case actionTypes.MOVIE_REMOVE_FROM_FAVORITE:
      return removeMovieFromFavorite(state , action);
    default:
      return state;
  }
};

export default reducer;
