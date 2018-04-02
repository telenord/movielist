import { createSelector } from 'reselect';
import { makeSelectFavoriteList } from './favoriteList';

export const makeSelectCurrentMovie = () => state => state.get('currentMovie');

export const makeSelectMovie = () => createSelector(
  makeSelectCurrentMovie(),
  state => state.get('movie'),
);
export const makeSelectMovieLoading = () => createSelector(
  makeSelectCurrentMovie(),
  state => state.get('loading'),
);

export const makeSelectMovieWithFavor = () => createSelector(
  makeSelectFavoriteList(),
  makeSelectMovie(),
  (list, movie) => {
    movie.isFavorite = list.some(item => item.includes(movie.id));
    return movie;
  }
);
