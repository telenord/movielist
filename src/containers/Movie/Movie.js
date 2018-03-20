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
import {
  makeSelectFavorite, makeSelectFavoriteList, makeSelectMovie,
  makeSelectMovieIsFavorite
} from '../../store/selectors';


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
    this.props.movieIsFavorite ? this.props.onRemoveMovieFromFavorite(id) : this.props.onAddMovieToFavorite(id);
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
    if(this.props.movie){
      console.log('props.movieIsFavorite', this.props.movieIsFavorite);
    }

    const iconStyles = {
      marginRight: 24,

    };
    let genres = null;
    let favorIcon =  (
      <IconButton
        tooltip={this.props.movieIsFavorite ? 'Remove from favourite' : 'Add to favourite'}
        style={iconStyles}
        onClick={() => this.handleClick(this.props.movie.id)}>
        <FontIcon
          className= {this.props.movieIsFavorite ? 'material-icons icon__favorite' : 'material-icons icon__favorite_border'}
           style={iconStyles}
        >{this.props.movieIsFavorite ? 'favorite' : 'favorite_border'}
        </FontIcon>;
      </IconButton>
    );

    if (this.props.movie && this.props.movie.genres && this.props.movie.genres.length) {
      genres = <Genres genres={this.props.movie.genres}/>
    }

    if(this.props.movie) {
      return (
        <Card>
          <CardMedia
            overlay={<CardTitle title={this.props.movie.title} subtitle={this.props.movie.tagline}/>}>
            <img src={IMAGE_BASE_URL + this.props.movie.backdrop_path} alt={this.props.movie.title}/>
          </CardMedia>
          <CardTitle title={this.props.movie.title} subtitle={this.props.movie.tagline}/>
          <CardText>
            {favorIcon}
            <div>
              <p><strong> Status: </strong>{this.props.movie.status}</p>
            </div>
            <div>
              {genres}
            </div>
            {this.props.movie.overview}
          </CardText>
          <Snackbar
            open={this.state.snackbar.open}
            message={this.props.movieIsFavorite ?
              `${this.props.movie.title} added to your Favorites` : `${this.props.movie.title} removed from Favorites`}
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
  // return {
  //   movie: state.currentMovie.movie,
  // }
  return createStructuredSelector({
    movie: makeSelectMovie(),
   movieIsFavorite: makeSelectMovieIsFavorite(),
   // movieIsFavorite:makeSelectFavorite()
  });
};



const mapDispatchToProps = dispatch => {
  return {
    onMovieInit: (id) => dispatch(actions.fetchMovieInit(id)),
    onAddMovieToFavorite: (id) => dispatch(actions.addMovieToFavorite(id)),
    onRemoveMovieFromFavorite: (id) => dispatch(actions.removeMovieFromFavorite(id)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Movie));
