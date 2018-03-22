import { createSelector } from 'reselect';

const makeSelectCurrentMovie = () => state => state.get('currentMovie');

const makeSelectMovie = () => createSelector(
  makeSelectCurrentMovie(),
  state => state.get('movie'),
);

const makeSelectMovieWithFavor = () => createSelector(
  makeSelectFavoriteList(),
  makeSelectMovie(),
  (list, item) => {
    list.map(id => {
      item.isFavorite = id === item.id;
    });
    return item;
  }
);

const makeSelectMovieLoading = () => createSelector(
  makeSelectCurrentMovie(),
  state => state.get('loading'),
);

const makeSelectFavorite = () => state => state.get('favoriteList');

const makeSelectFavoriteList = () => createSelector(
  makeSelectFavorite(),
  state => state.get('favoriteList')
);

const makeSelectMovies = () => state => state.get('movieList');

const makeSelectMoviesList = () => createSelector(
  makeSelectMovies(),
  state => state.get('list'),
);

const makeSelectMoviesListWithFavor = () => createSelector(
  makeSelectMoviesList(),
  makeSelectFavoriteList(),
  (list, favoriteList) => list.map(movie => {
    movie.isFavorite = favoriteList.includes(movie.id);
    return movie;
  })
);


export {
  makeSelectMovie,
  makeSelectMovies,
  makeSelectMoviesList,
  makeSelectMoviesListWithFavor,
  makeSelectMovieWithFavor,
  makeSelectMovieLoading
};
