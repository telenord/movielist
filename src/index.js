import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App'

import configureStore from './store/store';


const initialState = {};

const store = configureStore(initialState);







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
