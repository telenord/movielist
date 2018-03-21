import * as actionTypes from './actionTypes';

export const addMovieToFavorite = (id) => {
  return {
    type: actionTypes.MOVIE_ADD_TO_FAVORITE,
    id: id,
  }
};

export const removeMovieFromFavorite = (id) => {
  return {
    type: actionTypes.MOVIE_REMOVE_FROM_FAVORITE,
    id: id
  }
};

export const fetchMovieInit = (id) => {
  return {
    type: actionTypes.MOVIE_FETCH_INIT,
    id : id
  }
};

export const fetchMovieStart = () => {
  return {
    type: actionTypes.MOVIE_FETCH_START,
  }
};

export const fetchMovieSuccess = (movie) => {
  return {
    type: actionTypes.MOVIE_FETCH_SUCCESS,
    movie : movie
  }
};

export const fetchMovieFail = (error) => {
  return {
    type: actionTypes.MOVIE_FETCH_FAIL,
    error: error
  }
};
