import * as actionTypes from './actionTypes';

export const fetchSimilarMoviesInit = (id) => {
  return {
    type: actionTypes.SIMILAR_MOVIES_FETCH_INIT,
    id
  }
};

export const fetchSimilarMoviesStart = () => {
  return {
    type: actionTypes.SIMILAR_MOVIES_FETCH_START,
  }
};

export const fetchSimilarMoviesSuccess = (data) => {
  return {
    type: actionTypes.SIMILAR_MOVIES_FETCH_SUCCESS,
    data
  }
};

export const fetchSimilarMoviesFail = (error) => {
  return {
    type: actionTypes.SIMILAR_MOVIES_FETCH_FAIL,
    error
  }
};
