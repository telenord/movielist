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
import { makeSelectMovieLoading, makeSelectMovieWithFavor } from '../../store/selectors';
import Spinner from '../../components/Spinner/Spinner';
import {
  Grid, Row, Col
} from 'react-bootstrap/';
import FavoriteButton from '../../components/FavoriteButton/FavoriteButton';

class Movie extends Component {
  state = {
    snackbar: {
      open: false
    },
  };

  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.onMovieInit(id);
  }

  handleClick = (id) => {
    this.setState({
      ...this.state,
      snackbar: {
        open: true
      }
    });
    this.props.movie.isFavorite ? this.props.onRemoveMovieFromFavorite(id) : this.props.onAddMovieToFavorite(id);
  };

  handleRequestClose = () => {
    this.setState({
      ...this.state,
      snackbar: {
        open: false
      }
    });
  };

  render() {
    if (this.props.loading) {
      return <Spinner/>;
    }
    const {isFavorite, tagline, genres, title, backdrop_path, status, overview, id} = this.props.movie;

    if (this.props.movie) {
      return (
        <Grid>
          <Card>
            <Row className="show-grid">
              <Col xs={12} md={6}>
                <CardMedia
                  overlay={<CardTitle title={title} subtitle={tagline}/>}>
                  <img src={IMAGE_BASE_URL + backdrop_path} alt={title}/>
                </CardMedia>
              </Col>
              <Col xs={12} md={6}>
                <CardTitle title={title} subtitle={tagline}/>
                <CardText>
                  <FavoriteButton isFavorite={isFavorite} click={()=>this.handleClick(id)}/>
                  <div>
                    <p><strong> Status: </strong>{status}</p>
                  </div>
                  <div>
                    <Genres genres={genres}/>
                  </div>
                  {overview}
                </CardText>
              </Col>
            </Row>
          </Card>
          <Row></Row>
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
      return null;
    }
  }
}

const mapStateToProps = state => {
  return createStructuredSelector({
    movie: makeSelectMovieWithFavor(),
    loading: makeSelectMovieLoading(),
  });
};


const mapDispatchToProps = dispatch => {
  return {
    onMovieInit: (id) => dispatch(actions.fetchMovieInit(id)),
    onAddMovieToFavorite: (id) => dispatch(actions.addMovieToFavorite(id)),
    onRemoveMovieFromFavorite: (id) => dispatch(actions.removeMovieFromFavorite(id)),
  }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Movie));
