import { createSelector } from "reselect";

export const makeSelectFavorite = () => state => state.get('favoriteList');

export const makeSelectFavoriteList = () => createSelector(
  makeSelectFavorite(),
  state => state.get('favoriteList')
);
