import * as actionTypes from './actionTypes';

export const addMovieToFavorite = (id) => {
  return {
    type: actionTypes.MOVIE_ADD_TO_FAVORITE,
    id: id,

  }
};

export const removeMovieFromFavorite = (id) => {
  return {
    type: actionTypes.MOVIE_REMOVE_FROM_FAVORITE,
    id: id
  }
};

export const movieInit = (id) => {
  return {
    type: actionTypes.MOVIE_FETCH_INIT,
  }
};

export const purchaseBurgerSuccess = (id) => {
  return {
    type: actionTypes.MOVIE_ADD_TO_FAVORITE,
    id: id,

  }
};
