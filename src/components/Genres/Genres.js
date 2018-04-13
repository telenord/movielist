import React from 'react';
import { Chip } from 'material-ui';
import './Genres.css';
import { FormattedMessage } from 'react-intl';

const genres = (props) => {
  let genresList = null;
    if (props.genres && props.genres.length) {
    genresList = props.genres.map(genre => {
      return <Chip className="GenresChip" key={genre.id}>{genre.name}</Chip>
    });
  }
  return (
    <div className="GenresWrapper">
      <strong><FormattedMessage id="movie.genres" />: </strong>
      <div className="GenresWrapper">
        {genresList}
      </div>
    </div>
  )
};

export default genres;
