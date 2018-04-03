import React, { Component } from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { makeSelectFavoriteList } from '../../store/selectors';
import MovieList from '../../components/MovieList/MovieList';
import { Col, Grid, Row } from 'react-bootstrap';

class FavoriteList extends Component {

  movieClickHandler = movie => {
    this.props.history.push(`/movie/${movie}`)
  };

  render() {
    const {favoriteList} = this.props;
    return (
      <Grid>
        <Row>
          <Col xs={12}>
            <MovieList
              items={favoriteList.toJS()}
              click={(movieId) => this.movieClickHandler(movieId)}
            />
          </Col>
        </Row>
      </Grid>
    )
  }
}

const mapStateToProps = state => {
  return createStructuredSelector({
    favoriteList: makeSelectFavoriteList(),
  });
};


export default connect(mapStateToProps)(FavoriteList);
