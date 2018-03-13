import * as actionTypes from '../actions/actionTypes';

const initialState = {
  movie:{
    favorite: false,
  },
  favoriteList:[]

};

const movieAddToFavorite = (state, action)=>{
  return { ...state,
    movie: {
  ...state.movie,
      favorite: true,
  },
    favoriteList: [...state.favoriteList, action.id ]
  }
};
const removeMovieFromFavorite = (state, action)=>{
  return {
    ...state,
    movie: {
      ...state.movie,
      favorite: false,
    },
    favoriteList: state.favoriteList.filter(id=>{
      return id !== action.id
    }) };
}


const reducer = (state = initialState, action) => {
  switch (action.type) {
    // case actionTypes.MOVIE_FETCH_INIT: return state;
    case actionTypes.MOVIE_ADD_TO_FAVORITE:
      return movieAddToFavorite(state, action);
    case actionTypes.MOVIE_REMOVE_FROM_FAVORITE:
      return {
        ...state,
        movie: {
          ...state.movie,
          favorite: false,
        },
        favoriteList: state.favoriteList.filter(id=>{
          return id !== action.id
        }) };

    default:
      return state;
  }
};



export default reducer;
