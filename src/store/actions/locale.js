import { CHANGE_LOCALE } from './actionTypes';

export function changeLocale(locale) {
  return {
    type: CHANGE_LOCALE,
    locale
  };
}
