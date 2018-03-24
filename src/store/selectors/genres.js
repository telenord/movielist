import { createSelector } from 'reselect';

export const makeSelectGenres = () => state => state.get('genres');

export const makeSelectGenresList = () => createSelector(
  makeSelectGenres(),
  state => state.get('genresList'),
);
export const makeSelectGenresListLoading = () => createSelector(
  makeSelectGenres(),
  state => state.get('loading'),
);

