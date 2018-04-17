import * as actionTypes from './actionTypes';

export const addMovieToFavorite = (movie) => {
  return {
    type: actionTypes.MOVIE_ADD_TO_FAVORITE,
    movie
  }
};

export const removeMovieFromFavorite = (movie) => {
  return {
    type: actionTypes.MOVIE_REMOVE_FROM_FAVORITE,
    movie
  }
};

export const fetchMovieInit = (id) => {
  return {
    type: actionTypes.MOVIE_FETCH_INIT,
    id
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
    movie
  }
};

export const fetchMovieFail = (error) => {
  return {
    type: actionTypes.MOVIE_FETCH_FAIL,
    error
  }
};
