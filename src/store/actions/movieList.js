import * as actionTypes from './actionTypes';


export const fetchMovieListInit = (page) => {
  return {
    type: actionTypes.MOVIE_LIST_FETCH_INIT,
    page
  }
};

export const fetchMovieListStart = () => {
  return {
    type: actionTypes.MOVIE_LIST_FETCH_START,
  }
};

export const fetchMovieListSuccess = (data) => {
  return {
    type: actionTypes.MOVIE_LIST_FETCH_SUCCESS,
    data
  }
};

export const fetchMovieListFail = (error) => {
  return {
    type: actionTypes.MOVIE_LIST_FETCH_FAIL,
    error
  }
};

export const searchMovieListInit = (name) => {
  return {
    type: actionTypes.SEARCH_INIT,
    name
  }
};
