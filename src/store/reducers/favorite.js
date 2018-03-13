import * as actionTypes from '../actions/actionTypes';

const initialState = {
  favoriteList: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.MOVIE_ADD_TO_FAVORITE:
      return { ...state,  favoriteList: [...state.favoriteList, action.id ] };
    case actionTypes.MOVIE_REMOVE_FROM_FAVORITE:
      return { ...state,  favoriteList: state.favoriteList.filter(id=>{
        return id !== action.id
        }) };
    default:
      return state;
  }
};

export default reducer;
