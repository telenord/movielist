import { createSelector } from "reselect";

export const makeSelectRecommendMovies = () => state => state.get('recommend');

export const makeSelectRecommendMoviesLoading = () => createSelector(
  makeSelectRecommendMovies(),
  state => state.get('loading'),
);

export const makeSelectRecommendMoviesList = () => createSelector(
  makeSelectRecommendMovies(),
  state => state.get('recommendList'),
);
