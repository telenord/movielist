import React from 'react';
import { Link } from 'react-router-dom';
import { List, ListItem } from 'material-ui';
import FavoriteButton from '../FavoriteButton/FavoriteButton';
import Genres from '../Genres/Genres';
import './MovieList.css';
import { withRouter } from 'react-router';

const MovieList = ({items, onIconClick, withIcon, history}) => {

  const favorIcon = (movie) => (
    <FavoriteButton className="FavoriteButton" isFavorite={movie.isFavorite} click={() => onIconClick(movie)}/>
  );
  let movies = <h3>Movies not found</h3>;
  if (items.length) {
    movies = (items.map(movie => {
      const {id, title, genres} = movie;
      return (
        <ListItem className="MovieListItem" key={id} leftIcon={withIcon ? favorIcon(movie) : null}
                  onClick={() => history.push(`/movie/${id}`)}>
          <Link className="MovieListLink" to={`/movie/${id}`}>{title}</Link>
          {genres && genres.length ? <Genres genres={genres}/> : null}
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

export default withRouter(MovieList);
