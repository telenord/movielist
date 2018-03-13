import React, {Component} from 'react';

import { getUrl, IMAGE_BASE_URL } from '../../shared/moviedb';
import { withRouter } from 'react-router';
import { Card, CardActions, CardMedia, CardText, CardTitle, FlatButton } from 'material-ui';
import Genres from '../../components/Genres/Genres';

class Movie extends Component{
state = {
  movie: {
    title: 'asd',
    tagline:'asqwe',
    backdrop_path:'',
    overview:'',
    status:'',
    genres:[],

  }
};


  componentDidMount() {
    const id = this.props.match.params.id;
    console.log(this.props.match);
    const url = getUrl('/movie/'+id);

    fetch(url)
      .then(res=> res.json())
      .then(res=> {
        console.log(res);
        this.setState({
          movie: res
        })
      })


  }
  render() {
    let genres = null;
    if(this.state.movie && this.state.movie.genres && this.state.movie.genres.length){
      genres = <div><strong> Genres: </strong>
          <Genres genres={this.state.movie.genres}/>
        </div>
    }
    return (
      <Card>
        <CardMedia
          overlay={<CardTitle title={this.state.movie.title} subtitle={this.state.movie.tagline} />}>
          <img  src={IMAGE_BASE_URL+this.state.movie.backdrop_path} />

        </CardMedia>
        <CardTitle title={this.state.movie.title} subtitle={this.state.movie.tagline} />
        <CardText>
          <div>
            <p><strong> Status: </strong> {this.state.movie.status}</p>

          </div>
          <div>
            {genres}
          </div>
          {this.state.movie.overview}
        </CardText>
        <CardActions>
          <FlatButton label="Action1" />
          <FlatButton label="Action2" />
        </CardActions>
      </Card>
    )
  }
}

export default withRouter(Movie);
