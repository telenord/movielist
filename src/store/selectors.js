import { createSelector } from 'reselect';

const makeSelectCurrentMovie = () => state => state.get('currentMovie');
const makeSelectMovie = () =>createSelector(
  makeSelectCurrentMovie(),
    state => state.get('movie'),
);
//const makeSelectMovie = () => state => state.get('movie');

//
 const makeSelectFavorite = () => state => state.get('favoriteList');
// const makeSelectFavoriteList =() => createSelector(
//   makeSelectFavorite(),
//   state => state.get('favoriteList'),
// );

// const makeSelectFavorite = () =>{
//   state => console.log(state) ;
//
//   return createSelector(
//     makeSelectCurrentMovie(),
//   state => state.get('movie'),
// );
//
// }
const makeSelectMovieIsFavorite = () =>{
  let z = makeSelectFavorite();
  console.log(z());

  return createSelector(
    makeSelectFavorite(),
   // makeSelectFavoriteList(),
    //state => state.set()
  );
};
// makeSelectMovieIsFavorite()


// const makeSelectMovieIsFavorite = () =>{
//   let z = makeSelectFavoriteList();
//   console.log(z());
//
//   return createSelector(
//     makeSelectMovie(),
//    // makeSelectFavoriteList(),
//     //state => state.set()
//   );
// };


export {
  makeSelectMovie,
   makeSelectFavorite,
  // //makeSelectFavoriteList,
  // makeSelectFavoriteList,
  makeSelectMovieIsFavorite
};
