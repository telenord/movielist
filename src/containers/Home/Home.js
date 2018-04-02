import React, { Component } from 'react';

import { AutoComplete, TextField } from 'material-ui';
import * as actions from '../../store/actions';
import { connect } from 'react-redux';
import { makeSelectMoviesListWithFavor } from '../../store/selectors/index';
import { createStructuredSelector } from 'reselect';
import Spinner from '../../components/Spinner/Spinner';

import { makeSelectMoviesListLoading } from '../../store/selectors/movieList';
import MovieList from '../../components/MovieList/MovieList';
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
    const {value} = event.target;
    this.setState({value});
    value === '' ? this.props.onMovieListInit() : this.props.onSearchInit(value);
  }

  handleIconClick(movie) {
    movie.isFavorite ? this.props.onRemoveMovieFromFavorite(movie) : this.props.onAddMovieToFavorite(movie);
  }
  handleNewRequest = () => {
    this.setState({
      value: '',
    });
  };

  render() {
    const {movieList, isLoading} = this.props;
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
            {isLoading ? <Spinner/> :
              <MovieList
                withIcon={true}
                items={movieList}
                onIconClick={(e) => this.handleIconClick(e)}/>}
          </Col>
        </Row>
      </Grid>
    )
  }
}

const mapStateToProps = state => {
  return createStructuredSelector({
    isLoading: makeSelectMoviesListLoading(),
    movieList: makeSelectMoviesListWithFavor(),
  });
};

const mapDispatchToProps = dispatch => {
  return {
    onMovieListInit: () => dispatch(actions.fetchMovieListInit()),
    onGenresListInit: () => dispatch(actions.fetchGenreListInit()),
    onSearchInit: (val) => dispatch(actions.searchMovieListInit(val)),
    onAddMovieToFavorite: (movie) => dispatch(actions.addMovieToFavorite(movie)),
    onRemoveMovieFromFavorite: (movie) => dispatch(actions.removeMovieFromFavorite(movie)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
