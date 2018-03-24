import React, { Component } from 'react';
import { getUrl } from '../../shared/moviedb';
import { Link } from 'react-router-dom';
import { List, ListItem } from 'material-ui';
import * as actions from '../../store/actions';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Spinner from '../../components/Spinner/Spinner';
import FavoriteButton from '../../components/FavoriteButton/FavoriteButton';
import Genres from '../../components/Genres/Genres';
import * as classes from './MovieList.css';

class MovieList extends Component {

  handleClick(movie) {
    movie.isFavorite ? this.props.onRemoveMovieFromFavorite(movie.id) : this.props.onAddMovieToFavorite(movie.id);
  }

  render() {
    const {items} = this.props;
    let movies = null;
    if (this.props.loading) {
      movies = <Spinner/>;
    }
    const favorIcon = (movie) => (
      <FavoriteButton className="FavoriteButton" isFavorite={movie.isFavorite} click={() => this.handleClick(movie)}/>
    );
    if (items && items.length) {
      movies = (items.map(movie => {
        return (
          <ListItem className="MovieListItem" key={movie.id} leftIcon={favorIcon(movie)}>
            <Link className="MovieListLink" to={`/movie/${movie.id}`}>{movie.title}</Link>
            <Genres genres={movie.genres}/>
          </ListItem>
        );
      }));
    }
    return (
      <div>
        <List>
          {movies}
        </List>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAddMovieToFavorite: (id) => dispatch(actions.addMovieToFavorite(id)),
    onRemoveMovieFromFavorite: (id) => dispatch(actions.removeMovieFromFavorite(id)),
  }
};

export default connect(null, mapDispatchToProps)(MovieList);
