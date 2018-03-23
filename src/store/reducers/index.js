import { combineReducers } from 'redux-immutable';

import movieReducer from './movie';
import favoriteReducer from './favorite';
import movieListReducer from './movieList';
import similarReducer from './similar';
import recommendReducer from './recommend';

export default combineReducers({
  movieList: movieListReducer,
  currentMovie: movieReducer,
  favoriteList: favoriteReducer,
  similar: similarReducer,
  recommend: recommendReducer,
});
