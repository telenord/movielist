import React, { Component } from 'react';
import { getUrl } from '../../shared/moviedb';
import { Link } from 'react-router-dom';
import { FontIcon, IconButton, List, ListItem } from 'material-ui';
//import InfiniteScroll  from 'react-simple-infinite-scroll';

import * as classes  from './MovieList.css';
import * as actions from '../../store/actions';
import { connect } from 'react-redux';
import { makeSelectMovie, makeSelectMoviesList, makeSelectMoviesListWithFavor } from '../../store/selectors';
import { createStructuredSelector } from "reselect";

class MovieList extends Component {

  componentDidMount() {
    this.props.onMovieListInit();
   // this.loadFunc();
  }

  loadFunc(){
    const url = getUrl('/movie/popular', `page=${this.state.page}`);
  };

  handleClick(movie){

    movie.isFavorite ? this.props.onRemoveMovieFromFavorite(movie.id): this.props.onAddMovieToFavorite(movie.id);
    console.log('handleClick', movie);
  }

  render() {
    const { movieList } = this.props;

    let favorIcon =(movie)=> (
      <IconButton
         tooltip={movie.isFavorite ? 'Remove from favourite' : 'Add to favourite'}
        onClick={() => this.handleClick(movie)}
        style={{color:'red'}}
      >
        <FontIcon
          //className="material-icons icon__favorite"
          style={{color:'red'}}
          className={movie.isFavorite ? 'material-icons icon__favorite' : ' material-icons icon__favorite_border'}
           >
          {movie.isFavorite ? 'favorite' : 'favorite_border'}
        </FontIcon>;
      </IconButton>
    );

    let movies = null ;
    if(movieList && movieList.length){

      movies = (movieList.map(m => {
        return (

            <ListItem  key={m.id} leftIcon={favorIcon(m)}>
              <Link className="MovieListLink"  to={`/movie/${m.id}`}> {m.title}</Link>
            </ListItem>

        );
      }));
    }
    return (
      <div>
        <List>
          {/*<InfiniteScroll*/}
            {/*// pageStart={this.state.page}*/}
            {/*// throttle={1000}*/}
            {/*// loadMore={this.loadFunc(this.state.page)}*/}
            {/*// hasMore={ this.state.isNotLastPage }*/}
            {/*// loader={<div className="loader">Loading ...</div>}*/}
          {/*>*/}
            {/*{movieList}*/}
          {/*</InfiniteScroll>*/}
          {/*<InfiniteScroll*/}
            {/*throttle={100}*/}
            {/*threshold={20}*/}
            {/*isLoading={this.state.isLoading}*/}
            {/*hasMore={this.state.isNotLastPage}*/}
            {/*onLoadMore={this.loadFunc}*/}
          {/*>*/}

            {/*{movieList}*/}
          {/*</InfiniteScroll>*/}
          {movies}
        </List>
      </div>
    )
  }
}
const mapStateToProps = state => {
  // return {
  //   movie: state.currentMovie.movie,
  // }
  return createStructuredSelector({
    movieList: makeSelectMoviesListWithFavor(),

    // movieIsFavorite:makeSelectFavorite()
  });
};


const mapDispatchToProps = dispatch => {
  return {
    onMovieListInit: () => dispatch(actions.fetchMovieListInit()),
    onAddMovieToFavorite: (id) => dispatch(actions.addMovieToFavorite(id)),
    onRemoveMovieFromFavorite: (id) => dispatch(actions.removeMovieFromFavorite(id)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieList);
