import * as actionTypes from './actionTypes';


export const fetchGenreListInit = () => {
  return {
    type: actionTypes.GENRES_FETCH_INIT,
  }
};

export const fetchGenreListStart = () => {
  return {
    type: actionTypes.GENRES_FETCH_START,
  }
};

export const fetchGenreListSuccess = (genres) => {
  return {
    type: actionTypes.GENRES_FETCH_SUCCESS,
    genres
  }
};

export const fetchGenreListFail = (error) => {
  return {
    type: actionTypes.GENRES_FETCH_FAIL,
    error
  }
};
