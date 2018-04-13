import { createSelector } from 'reselect';

const makeSelectLanguage = () => state => state.get('language');

const makeSelectLocale = () => createSelector(
  makeSelectLanguage(),
  state =>  state.get('locale')
);

export {
  makeSelectLanguage,
  makeSelectLocale,
};
