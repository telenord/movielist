import {
  applyMiddleware,
  compose,
  createStore,
} from 'redux';
import { fromJS } from 'immutable';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';

import createSagaMiddleware from 'redux-saga';
import * as sagas from './sagas';
import { persistLocalStorage } from './localStorage';
import apiMiddleware from './middleware/api';


export default function configureStore(initialState = {}, history) {
  const sagaMiddleware = createSagaMiddleware();

  const enhancers = [
    persistLocalStorage()
  ];
  const middleware = [
    thunk,
    apiMiddleware,
    sagaMiddleware,
    routerMiddleware(history),
  ];

  if (process.env.NODE_ENV === 'development') {
    const devToolsExtension = window.devToolsExtension;
    if (typeof devToolsExtension === 'function') {
      enhancers.push(devToolsExtension());
    }
  }

  const composedEnhancers = compose(
    applyMiddleware(...middleware),
    ...enhancers,
  );

  const store = createStore(
    rootReducer,
    fromJS(initialState),
    composedEnhancers,
  );

  Object.keys(sagas).forEach(sagaName => {

    sagaMiddleware.run(sagas[sagaName]);
  });

  return store;
}
