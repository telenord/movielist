import * as actionTypes from './actionTypes';


export const fetchMovieListInit = () => {
  return {
    type: actionTypes.MOVIE_LIST_FETCH_INIT,
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
    data : data
  }
};

export const fetchMovieListFail = (error) => {
  return {
    type: actionTypes.MOVIE_LIST_FETCH_FAIL,
    error: error
  }
};

export const searchMovieListInit = (name) => {
  return {
    type: actionTypes.SEARCH_INIT,
    name: name
  }
};
