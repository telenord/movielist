import React, { Component } from 'react';

import { TextField } from 'material-ui';
import * as actions from '../../store/actions';
import { connect } from 'react-redux';
import { makeSelectMoviesListWithFavor } from '../../store/selectors/index';
import { createStructuredSelector } from 'reselect';
import Spinner from '../../components/Spinner/Spinner';

import { makeSelectMoviesListLoading } from '../../store/selectors/movieList';
import MovieList from '../MovieList/MovieList';
import {
  Grid, Row, Col
} from 'react-bootstrap';

class Home extends Component {
  state = {
    value: ''
  };

  componentDidMount() {
    this.props.onMovieListInit();
    this.props.onGenresListInit();
  }

  handleSearch(event) {
    const value = event.target.value;
    this.setState({
      value: value
    });
    this.props.onSearchInit(value);
  }

  handleClick(movie) {
    movie.isFavorite ? this.props.onRemoveMovieFromFavorite(movie.id) : this.props.onAddMovieToFavorite(movie.id);
  }

  render() {
    const {movieList} = this.props;
    let movies = null;
    if (this.props.loading) {
      movies = <Spinner/>;
    }
    if (movieList && movieList.length) {
      movies = <MovieList items={movieList}/>;
    }
    return (
      <Grid>
        <Row className="show-grid">
          <Col xs={12}>
            <TextField
              value={this.state.value}
              hintText="start typing"
              floatingLabelText="Search movie by name"
              onChange={(e) => this.handleSearch(e)}
            />
          </Col>
        </Row>
        <Row className="show-grid">
          <Col xs={12}>
            {movies}
          </Col>
        </Row>
      </Grid>
    )
  }
}

const mapStateToProps = state => {
  return createStructuredSelector({
    loading: makeSelectMoviesListLoading(),
    movieList: makeSelectMoviesListWithFavor(),
  });
};


const mapDispatchToProps = dispatch => {
  return {
    onMovieListInit: () => dispatch(actions.fetchMovieListInit()),
    onGenresListInit: () => dispatch(actions.fetchGenreListInit()),
    onSearchInit: (val) => dispatch(actions.searchMovieListInit(val)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
