import * as actionTypes from './actionTypes';

export const fetchRecommendMoviesInit = (id) => {
  return {
    type: actionTypes.RECOMMEND_MOVIES_FETCH_INIT,
    id
  }
};

export const fetchRecommendMoviesStart = () => {
  return {
    type: actionTypes.RECOMMEND_MOVIES_FETCH_START,
  }
};

export const fetchRecommendMoviesSuccess = (data) => {
  return {
    type: actionTypes.RECOMMEND_MOVIES_FETCH_SUCCESS,
    data
  }
};

export const fetchRecommendMoviesFail = (error) => {
  return {
    type: actionTypes.RECOMMEND_MOVIES_FETCH_FAIL,
    error
  }
};
