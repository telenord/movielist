import * as actionTypes from '../actions/actionTypes';
import { fromJS } from 'immutable';


const initialState = fromJS({
  favoriteList: [],
});

const movieAddToFavorite = (state, action) => {
  const {id, title} = action.movie;

  return state.set(
    'favoriteList', state.get('favoriteList').push(fromJS({id, title}))
  )
};
const removeMovieFromFavorite = (state, action) => {
  const favoriteList = state.get('favoriteList');

  return state.set(
    'favoriteList',
    favoriteList.filterNot(i => i.includes(action.movie.id))
  )
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.MOVIE_ADD_TO_FAVORITE:
      return movieAddToFavorite(state, action);
    case actionTypes.MOVIE_REMOVE_FROM_FAVORITE:
      return removeMovieFromFavorite(state, action);
    default:
      return state;
  }
};

export default reducer;
