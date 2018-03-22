import {
  applyMiddleware,
  compose,
  createStore,
} from 'redux';
import { fromJS } from 'immutable';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';
import persistState from 'redux-localstorage'
import createSagaMiddleware from 'redux-saga';
import { watchFetchMovie, watchFetchMovieList } from './sagas/';



export default function configureStore(initialState = {}, history) {
  const sagaMiddleware = createSagaMiddleware();

  const enhancers = [
    persistState('favoriteList', {
      key: 'favoriteList', serialize(subset) {
        return JSON.stringify(subset.toJS());
      },
      slicer(paths) {
        return (state) => {
          return state.get(paths);
        }
      },
      deserialize(favoriteList){

        if (favoriteList){
          console.log(favoriteList);
          return fromJS(JSON.parse(favoriteList))
        }
      },
      merge(initialState, favoriteList) {
        console.log('merge',favoriteList);
        if(favoriteList){
          console.log(favoriteList );
          return initialState.set('favoriteList', favoriteList)//.getItem('favoriteList'));
        }
        return initialState;
      }

    })
  ];
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
