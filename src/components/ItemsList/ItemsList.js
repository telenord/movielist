import React from 'react';
import { GridList, GridTile } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import Spinner from '../Spinner/Spinner';
import { IMAGE_BASE_URL } from '../../shared/moviedb';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    display: 'flex',
    flexWrap: 'nowrap',
    overflowX: 'auto',
  },
  titleStyle: {
    color: 'rgb(0, 188, 212)',
  },
};

const itemsList = (props) => {
  let items = null;
  if (props.loading) {
    return <Spinner/>;
  }

  if(props.items && props.items.length){
    items=(props.items.map((tile) => (
        <GridTile
          key={tile.id}
          title={tile.title}
          //actionIcon={<IconButton><StarBorder color="rgb(0, 188, 212)"/></IconButton>}
          titleStyle={styles.titleStyle}
          titleBackground="linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
        >
          <img src={IMAGE_BASE_URL + tile.backdrop_path}/>
        </GridTile>
      ))
    )
  }

    return (
      <div style={styles.root}>
        <GridList style={styles.gridList} cols={2.2}>
          {items}
        </GridList>
      </div>
    )

};

export default itemsList;
