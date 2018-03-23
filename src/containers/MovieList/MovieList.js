import React, { Component } from 'react';
import { getUrl } from '../../shared/moviedb';
import { Link } from 'react-router-dom';
import { List, ListItem } from 'material-ui';
//import InfiniteScroll  from 'react-simple-infinite-scroll';

import * as classes from './MovieList.css';
import * as actions from '../../store/actions';
import { connect } from 'react-redux';
import { makeSelectMoviesListWithFavor } from '../../store/selectors';
import { createStructuredSelector } from 'reselect';
import Spinner from '../../components/Spinner/Spinner';
import FavoriteButton from '../../components/FavoriteButton/FavoriteButton';

class MovieList extends Component {

  componentDidMount() {
    this.props.onMovieListInit();
    // this.loadFunc();
  }

  loadFunc() {
    const url = getUrl('/movie/popular', `page=${this.state.page}`);
  };

  handleClick(movie) {
    movie.isFavorite ? this.props.onRemoveMovieFromFavorite(movie.id) : this.props.onAddMovieToFavorite(movie.id);
  }

  render() {
    if(this.props.loading){
      return  <Spinner/>;
    }
    const {movieList} = this.props;

    const favorIcon = (movie) => (
      <FavoriteButton className="FavoriteButton" isFavorite={movie.isFavorite} click={()=>this.handleClick(movie)}/>
    );

    let movies = null;
    if (movieList && movieList.length) {
      movies = (movieList.map(movie => {
        return (
          <ListItem key={movie.id} leftIcon={favorIcon(movie)}>
            <Link className="MovieListLink" to={`/movie/${movie.id}`}>{movie.title}</Link>
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
  return createStructuredSelector({
    movieList: makeSelectMoviesListWithFavor(),
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
