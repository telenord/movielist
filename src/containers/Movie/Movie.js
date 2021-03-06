import React, { Component } from 'react';

import { IMAGE_BASE_URL } from '../../shared/moviedb';
import { withRouter } from 'react-router';
import {
  Card, CardMedia, CardText, CardTitle, Snackbar
} from 'material-ui';
import Genres from '../../components/Genres/Genres';
import { connect } from 'react-redux';
import * as actions from '../../store/actions';
import { createStructuredSelector } from "reselect";
import {
  makeSelectMovieLoading, makeSelectMovieWithFavor, makeSelectRecommendMoviesList, makeSelectRecommendMoviesLoading,
  makeSelectSimilarMoviesList,
  makeSelectSimilarMoviesLoading
} from '../../store/selectors/index';
import Spinner from '../../components/Spinner/Spinner';
import {
  Grid, Row, Col
} from 'react-bootstrap';
import FavoriteButton from '../../components/FavoriteButton/FavoriteButton';
import ItemsList from '../../components/ItemsList/ItemsList';

class Movie extends Component {
  state = {
    snackbar: {
      open: false
    },
  };

  componentWillReceiveProps(nextProps) {
    const locationChanged = nextProps.location.pathname !== this.props.location.pathname;
    if (locationChanged) {
      const {params: {id}} = nextProps.match;
      this.props.onMovieInit(id);
    }
  }

  componentDidMount() {
    const {params: {id}} = this.props.match;
    this.props.onMovieInit(id);
  }

  handleClick = (movie) => {
    this.setState({
      snackbar: {
        open: true
      }
    });
    movie.isFavorite ? this.props.onRemoveMovieFromFavorite(movie) : this.props.onAddMovieToFavorite(movie);
  };

  handleRequestClose = () => {
    this.setState({
      snackbar: {
        open: false
      }
    });
  };

  itemsListClickHandler(id) {
    this.props.history.push(`/movie/${id}`)
  }

  render() {
    const {similarList, similarListIsLoading, recommendList, recommendListIsLoading, movie ,isLoading} = this.props;

    if (isLoading) {
      return <Spinner/>;
    }
    if (movie) {
      const {isFavorite, tagline, genres, title, backdrop_path, status, overview, poster_path, vote_average, vote_count, release_date} = movie;
      return (
        <Grid style={{paddingTop: '20px'}}>
          <Card >
            <Row className="show-grid">
              <Col xs={12} md={6}>
                <CardMedia
                  overlay={<CardTitle title={title} subtitle={tagline}/>}>
                  <img src={IMAGE_BASE_URL + `${backdrop_path ? backdrop_path : poster_path}`} alt={title}/>
                </CardMedia>
              </Col>
              <Col xs={12} md={6}>
                <CardTitle title={title} subtitle={tagline}/>
                <CardText>
                  <FavoriteButton isFavorite={isFavorite} click={() => this.handleClick(movie)}/>
                  <div>
                    <p><strong> Status: </strong>{status}</p>
                  </div>
                  <div>
                    <p><strong>Release date: </strong>{release_date}</p>
                  </div>
                  <div>
                    <p><strong> Votes: </strong>{vote_average} / {vote_count}</p>
                  </div>
                  <div>
                    <Genres genres={genres}/>
                  </div>
                  {overview}
                </CardText>
              </Col>
            </Row>
          </Card>
          <Row>
            <Col xs={12}>
              <h2>Similar Movies</h2>
              {similarListIsLoading ? <Spinner/> : <ItemsList
                items={similarList}
                click={(movieId) => this.itemsListClickHandler(movieId)}
              />}
            </Col>
          </Row>
          <Row style={{paddingBottom: '30px'}}>
            <Col xs={12}>
              <h2>Recommend Movies</h2>
              {recommendListIsLoading ? <Spinner/> : <ItemsList
                items={recommendList}
                click={(movieId) => this.itemsListClickHandler(movieId)}
              />}
            </Col>
          </Row>
          <Snackbar
            open={this.state.snackbar.open}
            message={isFavorite ?
              `${title} added to your Favorites` : `${title} removed from Favorites`}
            autoHideDuration={4000}
            onRequestClose={this.handleRequestClose}
          />
        </Grid>
      )
    } else {
      return <h3>Movie not Found</h3>;
    }
  }
}

const mapStateToProps = state => {
  return createStructuredSelector({
    movie: makeSelectMovieWithFavor(state),
    isLoading: makeSelectMovieLoading(state),
    similarList: makeSelectSimilarMoviesList(state),
    similarListIsLoading: makeSelectSimilarMoviesLoading(state),
    recommendList: makeSelectRecommendMoviesList(state),
    recommendListIsLoading: makeSelectRecommendMoviesLoading(state),
  });
};


const mapDispatchToProps = dispatch => {
  return {
    onMovieInit: (id) => dispatch(actions.fetchMovieInit(id)),
    onAddMovieToFavorite: (movie) => dispatch(actions.addMovieToFavorite(movie)),
    onRemoveMovieFromFavorite: (movie) => dispatch(actions.removeMovieFromFavorite(movie)),
  }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Movie));
