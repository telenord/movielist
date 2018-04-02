import React, { Component } from 'react';


import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { makeSelectFavoriteList } from '../../store/selectors';
import ItemsList from '../../components/ItemsList/ItemsList';
import MovieList from '../../components/MovieList/MovieList';

class FavoriteList extends Component {

  movieClickHandler = movie => {
    this.props.history.push(`/movie/${movie}`)
  };

  render() {
    const {favoriteList} = this.props;
    return (
      <MovieList
        items={favoriteList.toJS()}
        click={(movieId) => this.movieClickHandler(movieId)}
      />
    )
  }
}

const mapStateToProps = state => {
  return createStructuredSelector({
    favoriteList: makeSelectFavoriteList(),
  });
};


export default connect(mapStateToProps)(FavoriteList);
