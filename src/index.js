import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App'

import configureStore from './store/store';
//import { saveState } from './store/localStorage';


const initialState = {};

const store = configureStore(initialState);

console.log('store', store.getState());

// store.subscribe(()=>{
//   // console.log(store.getState('favoriteList').get('favoriteList').toJS());
//   favoriteList: saveState(store.getState('favoriteList').get('favoriteList').toJS());
// });


const app= (
  <Provider store={store}>
    <BrowserRouter>
        <App />
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
