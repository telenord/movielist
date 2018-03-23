import React from 'react';
import { Chip } from 'material-ui';
import * as classes from './Genres.css';

const genres = (props) => {
  let genresList = null;
  if (props.genres && props.genres.length) {
    genresList = props.genres.map(genre => {
      return <Chip className="GenresChip" key={genre.id}>{genre.name}</Chip>
    });
  }
  return (
    <div className="GenresWrapper">
      <strong> Genres: </strong>
      <div className="GenresWrapper">
        {genresList}
      </div>
    </div>
  )
};

export default genres;
