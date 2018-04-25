import React, { Component } from 'react';

import { TextField } from 'material-ui';
import * as actions from '../../store/actions';
import { connect } from 'react-redux';
import { makeSelectMoviesListWithFavor } from '../../store/selectors/index';
import { createStructuredSelector } from 'reselect';
import  FlatPagination  from 'material-ui-flat-pagination';
import {
  Grid, Row, Col
} from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';

import Spinner from '../../components/Spinner/Spinner';
import MovieList from '../../components/MovieList/MovieList';

import { makeSelectMoviesListLoading, makeSelectMoviesListPagination } from '../../store/selectors';


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

  handleIconClick(movie, e) {
    e.stopPropagation();
    movie.isFavorite ? this.props.onRemoveMovieFromFavorite(movie) : this.props.onAddMovieToFavorite(movie);
  }

  handlePaginationChange = (e, offset) => {
    this.props.onMovieListInit(offset/20 + 1);
  };

  //TODO : add Autocomplete component

  render() {
    const {movieList, isLoading, pagination} = this.props;
    const {page, total_results} = pagination;

    return (
      <Grid>
        <Row className="show-grid">
          <Col xs={12}>
            <TextField
              value={this.state.value}
              hintText={<FormattedMessage id="home.search.hintText"/>}
              floatingLabelText={<FormattedMessage id="home.search.labelText"/>}
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
                onIconClick={(m, event) => this.handleIconClick(m, event)}/>}
          </Col>
        </Row>

        <Row>
          <Col>
            <FlatPagination
              style={{paddingBottom: '20px'}}
              offset={(page - 1) * 20 > 0 ? (page - 1) * 20 : 0}
              limit={20}
              total={total_results}
              onClick={(event, offset) => this.handlePaginationChange(event, offset)}
            />
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
    pagination: makeSelectMoviesListPagination(),
  });
};

const mapDispatchToProps = dispatch => {
  return {
    onMovieListInit: (page) => dispatch(actions.fetchMovieListInit(page)),
    onGenresListInit: () => dispatch(actions.fetchGenreListInit()),
    onSearchInit: (val) => dispatch(actions.searchMovieListInit(val)),
    onAddMovieToFavorite: (movie) => dispatch(actions.addMovieToFavorite(movie)),
    onRemoveMovieFromFavorite: (movie) => dispatch(actions.removeMovieFromFavorite(movie)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
