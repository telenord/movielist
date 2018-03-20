import { combineReducers } from 'redux-immutable';

import movieReducer from './movie';
import favoriteReducer from './favorite';

export default combineReducers({
  currentMovie: movieReducer,
  favoriteList: favoriteReducer
});
