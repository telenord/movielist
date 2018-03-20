import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { Provider } from 'react-redux';
//import browserHistory from 'react-router/lib/browserHistory';
import movieReducer from './store/reducers/movie';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import {watchFetchMovie} from './store/sagas/';
import './index.css';
import App from './App'

import configureStore from './store/store';


const initialState = {};

const store = configureStore(initialState);

// const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;
//
// const rootReducer = combineReducers({
//   currentMovie: movieReducer,
// });





// const sagaMiddleware = createSagaMiddleware();
//
// const enhancer = composeEnhancers(
//   applyMiddleware(thunk, sagaMiddleware),
//   //TODO redux-localstorage
//   // persistState(/*paths, config*/),
// );
//
//
// const sagaMiddleware = createSagaMiddleware();
// sagaMiddleware.run(watchFetchMovie);

const app= (
  <Provider store={store}>
    <BrowserRouter>
        <App />
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
