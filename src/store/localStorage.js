import persistState from 'redux-localstorage';
import { fromJS } from 'immutable';

export const persistLocalStorage = () => (persistState('favoriteList', {
    key: 'favoriteList',
    serialize(subset) {
      return JSON.stringify(subset.toJS());
    },
    slicer(paths) {
      return (state) => {
        return state.get(paths);
      }
    },
    deserialize(favoriteList) {
      if (favoriteList) {
        return fromJS(JSON.parse(favoriteList))
      }
    },
    merge(initialState, favoriteList) {
      if (favoriteList) {
        return initialState.set('favoriteList', favoriteList);
      }
      return initialState;
    }
  })
);
