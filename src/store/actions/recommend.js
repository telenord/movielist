import * as actionTypes from './actionTypes';


export const fetchRecommendMoviesInit = (id) => {
  return {
    type: actionTypes.API_FETCH_INIT,
    meta: {
      type: 'recommendations',
      url: `/movie/${id}/recommendations`,
      start: fetchRecommendMoviesStart,
      success: fetchRecommendMoviesSuccess,
      error: fetchRecommendMoviesFail,
    },
    id
  }
};

export const fetchRecommendMoviesStart = () => {
  return {
    type: actionTypes.RECOMMEND_MOVIES_FETCH_START
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
