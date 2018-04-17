import * as actionTypes from './actionTypes';
import { getUrl } from '../../shared/moviedb';


export const fetchGenreListInit = () => {
  return {
    type: actionTypes.API_FETCH_INIT,
    meta: {
      type: 'genres',
      url: getUrl('/genre/movie/list'),
      start: fetchGenreListStart,
      success: fetchGenreListSuccess,
      error: fetchGenreListFail,
    }
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
