import { createSelector } from "reselect";

export const makeSelectSimilarMovies = () => state => state.get('similar');

export const makeSelectSimilarMoviesLoading = () => createSelector(
  makeSelectSimilarMovies(),
  state => state.get('loading'),
);

export const makeSelectSimilarMoviesList = () => createSelector(
  makeSelectSimilarMovies(),
  state => state.get('similarList'),
);
