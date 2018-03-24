import React from 'react';
import { GridList, GridTile } from 'material-ui/GridList';
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
    cursor: 'pointer',
  },
  titleStyle: {
    color: 'rgb(0, 188, 212)',

  },
};

const itemsList = (props) => {
  const {items } = props;
  let gridItems = <h3>No Items</h3>;

  if(items.length){
    gridItems=(props.items.map((tile) => (
        <GridTile
          key={tile.id}
          title={tile.title}
          //actionIcon={<IconButton><StarBorder color="rgb(0, 188, 212)"/></IconButton>}
          titleStyle={styles.titleStyle}
          titleBackground="linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
          onClick={()=>props.click(tile.id)}
        >
          <img src={IMAGE_BASE_URL + tile.backdrop_path} alt={tile.title}/>
        </GridTile>
      ))
    )
  }

    return (
      <div style={styles.root}>
        <GridList style={styles.gridList} cols={2.2}>
          {gridItems}
        </GridList>
      </div>
    )

};

export default itemsList;
