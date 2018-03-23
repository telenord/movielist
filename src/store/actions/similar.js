import * as actionTypes from './actionTypes';

export const fetchSimilarMoviesStart = () => {
  return {
    type: actionTypes.SIMILAR_MOVIES_FETCH_START,
  }
};

export const fetchSimilarMoviesSuccess = (movie) => {
  return {
    type: actionTypes.SIMILAR_MOVIES_FETCH_SUCCESS,
    movie : movie
  }
};

export const fetchSimilarMoviesFail = (error) => {
  return {
    type: actionTypes.SIMILAR_MOVIES_FETCH_FAIL,
    error: error
  }
};
