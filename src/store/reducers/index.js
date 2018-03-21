import { combineReducers } from 'redux-immutable';

import movieReducer from './movie';
import favoriteReducer from './favorite';
import movieListReducer from './movieList';

export default combineReducers({
  movieList: movieListReducer,
  currentMovie: movieReducer,
  favoriteList: favoriteReducer
});
