import * as actionTypes from '../actions/actionTypes';
import { fromJS } from "immutable";

const initialState = fromJS({
  favoriteList: [337167],
});

const movieAddToFavorite = (state, action)=>{

  return state.set(
    'favoriteList', state.get('favoriteList').push(action.id)
  )
};
const removeMovieFromFavorite = (state, action)=>{

  const index = state.get('favoriteList').findIndex((i)=>i===action.id);

  return state.set(
    'favoriteList', state.get('favoriteList').delete(index)
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
