import React from 'react';
import { FontIcon } from 'material-ui';
import * as classes from './FavoriteButton.css'

const favoriteIcon = (props) => (
  <span
    className={props.className ? props.className : 'favoriteIcon'}
    tooltip={props.isFavorite ? 'Remove from favourite' : 'Add to favourite'}
    onClick={props.click}
  >
    <FontIcon
      style={{color: '#f44336'}}
      className={props.isFavorite ? 'material-icons icon__favorite' : ' material-icons icon__favorite_border'}
    >
      {props.isFavorite ? 'favorite' : 'favorite_border'}
    </FontIcon>
  </span>
);


export default favoriteIcon;


