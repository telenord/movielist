import * as actionTypes from './actionTypes';

export const fetchRecommendMoviesStart = () => {
  return {
    type: actionTypes.RECOMMEND_MOVIES_FETCH_START,
  }
};

export const fetchRecommendMoviesSuccess = (movie) => {
  return {
    type: actionTypes.RECOMMEND_MOVIES_FETCH_SUCCESS,
    movie : movie
  }
};

export const fetchRecommendMoviesFail = (error) => {
  return {
    type: actionTypes.RECOMMEND_MOVIES_FETCH_FAIL,
    error: error
  }
};
