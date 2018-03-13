import React from 'react';
import { Chip } from 'material-ui';

const styles = {
  chip: {
    margin: 4,
  },
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
};

const genres = (props) => {
  const genresList = props.genres.map(genre => {
    return <Chip className="Genre" key={genre.id} style={styles.chip}>{genre.name}</Chip>
  });

  return (
    <div style={styles.wrapper}>
      <strong> Genres: </strong>
      <div className="Genres" style={styles.wrapper}>
      {genresList}
    </div>
    </div>
  )
};

export default genres;
