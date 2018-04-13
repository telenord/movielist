import { addLocaleData } from 'react-intl';
import en from 'react-intl/locale-data/en';
import ru from 'react-intl/locale-data/ru';


import enTranslates from './translations/en.json';
import ruTranslates from './translations/ru.json';

let currentLang;

const DEFAULT_LOCALE = currentLang || 'ru';

addLocaleData([
  ...en,
  ...ru,
]);

let messages;
switch (DEFAULT_LOCALE) {
  case 'ru':
    messages = ruTranslates;
    break;
  case 'en':
    messages = enTranslates;
    break;
  default:
    messages = ruTranslates;
    break;
}

export default messages;
