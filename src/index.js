import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import LanguageProvider from './hoc/LanguageProvider/LanguageProvider'
import './index.css';
import App from './App'

import configureStore from './store/store';

const initialState = {};

const store = configureStore(initialState);

const app = (
  <Provider store={store}>
    <LanguageProvider>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </LanguageProvider>
  </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
