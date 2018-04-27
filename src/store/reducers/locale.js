import { CHANGE_LOCALE } from '../actions/actionTypes';
import { fromJS } from 'immutable';

const initialState = fromJS({
  locale: 'en',
});

const localeReducer = (state = initialState, action)=> {
  switch (action.type) {
    case CHANGE_LOCALE:
      return state
        .set('locale', action.locale);
    default:
      return state;
  }
};

export default localeReducer;
