import * as actionTypes from './actionTypes';
import { fetchRecommendMoviesFail, fetchRecommendMoviesStart, fetchRecommendMoviesSuccess } from './recommend';

export const fetchSimilarMoviesInit = (id) => {
  return {
    type: actionTypes.API_FETCH_INIT,
    meta: {
      type: 'similar',
      url: `/movie/${id}/similar`,
      start: fetchSimilarMoviesStart,
      success: fetchSimilarMoviesSuccess,
      error: fetchSimilarMoviesFail,
    },
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
