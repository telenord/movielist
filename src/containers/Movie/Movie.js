import React, { Component } from 'react';

import { IMAGE_BASE_URL } from '../../shared/moviedb';
import { withRouter } from 'react-router';
import {
  Card, CardMedia, CardText, CardTitle, IconButton,  Snackbar
} from 'material-ui';
import Genres from '../../components/Genres/Genres';
import FontIcon from 'material-ui/FontIcon';
import { connect } from 'react-redux';
import * as actions from '../../store/actions';
import { createStructuredSelector } from "reselect";
import { makeSelectMovieLoading, makeSelectMovieWithFavor } from '../../store/selectors';

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
    if(this.props.loading){
      return <a>SPINNER</a>;
    }

    const {isFavorite, tagline, genres, title, backdrop_path, status, overview, id} = this.props.movie;

    const iconStyles = {
      marginRight: 24,
    };

    let genresList = null;
    let favorIcon =  (
      <IconButton
        tooltip={isFavorite ? 'Remove from favourite' : 'Add to favourite'}
        style={iconStyles}
        onClick={() => this.handleClick(id)}>
        <FontIcon
          className= { isFavorite ? 'material-icons icon__favorite' : 'material-icons icon__favorite_border'}
           style={iconStyles}
        >{ isFavorite ? 'favorite' : 'favorite_border'}
        </FontIcon>;
      </IconButton>
    );

    if (this.props.movie && this.props.movie.genres && this.props.movie.genres.length) {
      genresList = <Genres genres={genres}/>
    }

    if(this.props.movie) {
      return (
        <Card>
          <CardMedia
            overlay={<CardTitle title={title} subtitle={tagline}/>}>
            <img src={IMAGE_BASE_URL + backdrop_path} alt={title}/>
          </CardMedia>
          <CardTitle title={title} subtitle={tagline}/>
          <CardText>
            {favorIcon}
            <div>
              <p><strong> Status: </strong>{status}</p>
            </div>
            <div>
              {genresList}
            </div>
            {overview}
          </CardText>
          <Snackbar
            open={this.state.snackbar.open}
            message={isFavorite ?
              `${title} added to your Favorites` : `${title} removed from Favorites`}
            autoHideDuration={4000}
            onRequestClose={this.handleRequestClose}
          />
        </Card>
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
