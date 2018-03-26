import React from 'react';
import { Link } from 'react-router-dom';
import { List, ListItem } from 'material-ui';
import FavoriteButton from '../FavoriteButton/FavoriteButton';
import Genres from '../Genres/Genres';
import './MovieList.css';

const MovieList = (props) => {
  const {items} = props;
  const favorIcon = (movie) => (
    <FavoriteButton className="FavoriteButton" isFavorite={movie.isFavorite} click={() => props.onIconClick(movie)}/>
  );
  let movies = <h3>Movies not found</h3>;
  if (items.length) {
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
};

export default MovieList;
