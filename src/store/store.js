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
import {watchFetchMovie, watchFetchMovieList} from './sagas/';


export default function configureStore(initialState = {}, history) {
  const sagaMiddleware = createSagaMiddleware();

  const enhancers = [];
  const middleware = [
    thunk,
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
  sagaMiddleware.run(watchFetchMovie);
  sagaMiddleware.run(watchFetchMovieList);

  return store;
}
