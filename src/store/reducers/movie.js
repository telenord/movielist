import * as actionTypes from '../actions/actionTypes';
import { normalize } from 'normalizr';
import { movieSchema } from '../schemas';
import Immutable, { fromJS } from 'immutable';


const initialState = fromJS({});

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
};

const movieFetchSuccess = (state, action)=> {
  let normalizedOrder = normalize(action, {
    movie: movieSchema
  });
  const movie = {
    ...action.movie,
    //favorite: state.favoriteList.indexOf(action.movie.id) > (-1)
  };

  return state
    .set('movie', action.movie)
};



const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.MOVIE_FETCH_SUCCESS:
      return movieFetchSuccess(state, action);
    // case actionTypes.MOVIE_ADD_TO_FAVORITE:
    //   return movieAddToFavorite(state, action);
    // case actionTypes.MOVIE_REMOVE_FROM_FAVORITE:
    //   return {
    //     ...state,
    //     movie: {
    //       ...state.movie,
    //       favorite: false,
    //     },
    //     favoriteList: state.favoriteList.filter(id=>{
    //       return id !== action.id
    //     }) };

    default:
      return state;
  }
};



export default reducer;
