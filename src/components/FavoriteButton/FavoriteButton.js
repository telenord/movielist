import React from 'react';
import { FontIcon, IconButton } from 'material-ui';
import './FavoriteButton.css';

const favoriteIcon = ({className,click, isFavorite }) => (
  <IconButton
    className={className ? className : 'favoriteIcon'}
    tooltip={isFavorite ? 'Remove from favourite' : 'Add to favourite'}
    onClick={click}
    style={{color: '#f44336'}}
  >
    <FontIcon
      style={{color: '#f44336'}}
      className={isFavorite ? 'material-icons icon__favorite' : ' material-icons icon__favorite_border'}
    >
      {isFavorite ? 'favorite' : 'favorite_border'}
    </FontIcon>
  </IconButton>
);


export default favoriteIcon;


