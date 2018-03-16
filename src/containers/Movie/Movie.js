import React, { Component } from 'react';

import { getUrl, IMAGE_BASE_URL } from '../../shared/moviedb';
import { withRouter } from 'react-router';
import {
  Card, CardActions, CardMedia, CardText, CardTitle, FlatButton, IconButton,
  Snackbar
} from 'material-ui';
import Genres from '../../components/Genres/Genres';
import FontIcon from 'material-ui/FontIcon';
import { connect } from 'react-redux';
import * as actions from '../../store/actions';

class Movie extends Component {
  state = {
    movie:{},
    snackbar: {
      open: false
    },

  };


  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.onMovieInit(id);
    const url = getUrl('/movie/' + id);

    // fetch(url)
    //   .then(res => res.json())
    //   .then(res => {
    //     this.setState({
    //       movie: res
    //     })
    //   })
  }

  handleClick = (id) => {

    this.setState({
      ...this.state,
      snackbar: {
        open: true
      }
    });
    this.props.movie.favorite ? this.props.onRemoveMovieFromFavorite(id) : this.props.onAddMovieToFavorite(id);
    console.log(this.props.movie);
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
    console.log(this.props.movie);
    let genres = null;
    if (this.props.movie && this.props.movie.genres && this.props.movie.genres.length) {
      genres = <Genres genres={this.props.movie.genres}/>
    }
    const iconStyles = {
      marginRight: 24,
      backgroundColor: 'red'
    };
    let favorIcon = (
      <IconButton
        tooltip={this.props.movie.favorite ? 'Remove from favourite' : 'Add to favourite'}
        onClick={() => this.handleClick(this.props.movie.id)}>
        <FontIcon
          className="material-icons"
          style={iconStyles}>
          {this.props.movie.favorite ? 'favorite' : 'favorite_border'}
        </FontIcon>;
      </IconButton>
    );
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
        <CardActions>
          {/*<FlatButton label="Action1" />*/}
          {/*<FlatButton label="Action2" />*/}
        </CardActions>
        <Snackbar
          open={this.state.snackbar.open}
          message={this.props.movie.favorite ?
            `${this.props.movie.title} added to your Favorites` : `${this.props.movie.title} removed from Favorites`}
          autoHideDuration={4000}
          onRequestClose={this.handleRequestClose}
        />
      </Card>
    )
  }
}

const mapStateToProps = state => {
  return {
    movie: state.currentMovie.movie,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onMovieInit: (id) => dispatch(actions.fetchMovieInit(id)),
    onAddMovieToFavorite: (id) => dispatch(actions.addMovieToFavorite(id)),
    onRemoveMovieFromFavorite: (id) => dispatch(actions.removeMovieFromFavorite(id)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Movie));
