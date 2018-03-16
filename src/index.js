import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { Provider } from 'react-redux';

import movieReducer from './store/reducers/movie';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import {watchFetchMovie} from './store/sagas/';

import './index.css';
import App from './App';

const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;

const rootReducer = combineReducers({
  currentMovie: movieReducer,
});


const sagaMiddleware = createSagaMiddleware();

const enhancer = composeEnhancers(
  applyMiddleware(thunk, sagaMiddleware)
);

const store = createStore(rootReducer, enhancer);

sagaMiddleware.run(watchFetchMovie);

const app= (
  <Provider store={store}>
    <BrowserRouter>
        <App />
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
