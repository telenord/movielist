import { createSelector } from 'reselect';
import { makeSelectFavoriteList } from './favoriteList';
import { makeSelectGenresList } from './genres';

export const makeSelectMovies = () => state => state.get('movieList');

export const makeSelectMoviesList = () => createSelector(
  makeSelectMovies(),
  state => state.get('list'),
);
export const makeSelectMoviesListLoading = () => createSelector(
  makeSelectMovies(),
  state => state.get('loading'),
);

export const makeSelectMoviesListWithFavor = () => createSelector(
  makeSelectMoviesList(),
  makeSelectFavoriteList(),
  makeSelectGenresList(),
  (list, favoriteList, genresList) =>
    list.map(movie => {
      movie.genres = genresList.filter(({id}) => {
        return movie.genre_ids.includes(id);
      });
      movie.isFavorite = favoriteList.some(item => item.includes(movie.id));
      return movie;
    })
);


