import { createSelector } from "reselect";
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
      movie.genres = movie.genre_ids.map(id => {
        if(genresList && genresList.length){
          return genresList.find(genre => {
            return genre.id === id;
          });
        }
        return id;
      });
      movie.isFavorite = favoriteList.includes(movie.id);
      return movie;
    })
);


