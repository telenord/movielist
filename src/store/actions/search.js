import * as actionTypes from './actionTypes';
import { fetchMovieListFail, fetchMovieListStart, fetchMovieListSuccess } from './movieList';

export const fetchOnSearchMoviesInit = (name) => {
  return {
    type: actionTypes.API_FETCH_INIT,
    meta: {
      type: 'recommendations',
      url: '/search/movie',
      query: name,
      start: fetchMovieListStart,
      success: fetchMovieListSuccess,
      error: fetchMovieListFail,
    },
    name
  }
};


