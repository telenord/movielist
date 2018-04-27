import { addLocaleData } from 'react-intl';
import en from 'react-intl/locale-data/en';
import ru from 'react-intl/locale-data/ru';


import enTranslates from './translations/en.json';
import ruTranslates from './translations/ru.json';

addLocaleData([
  ...en,
  ...ru,
]);

export const getMessages=(locale)=>{
  switch (locale) {
    case 'ru':
      return ruTranslates;

    case 'en':
      return enTranslates;

    default:
      return enTranslates;
  }
};
