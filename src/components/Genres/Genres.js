import React from 'react';

const genres = (props) => {
  const genresList =  props.genres.map(genre => {
    return (<li key={genre.id}>
      <span>{genre.name}</span>
    </li>);
  });

  return (
    <ul className="Genres">
      {genresList}
    </ul>
  )
}

export default genres;
