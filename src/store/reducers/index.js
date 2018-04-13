import { combineReducers } from 'redux-immutable';

import movieReducer from './movie';
import favoriteReducer from './favorite';
import movieListReducer from './movieList';
import similarReducer from './similar';
import recommendReducer from './recommend';
import genresReducer from './genres';
import languageProviderReducer from './locale';

export default combineReducers({
  movieList: movieListReducer,
  currentMovie: movieReducer,
  favoriteList: favoriteReducer,
  similar: similarReducer,
  recommend: recommendReducer,
  genres: genresReducer,
  language: languageProviderReducer
});
