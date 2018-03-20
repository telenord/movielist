import React, { Component } from 'react';
import { getUrl } from '../../shared/moviedb';
import { Link } from 'react-router-dom';
import { FontIcon, IconButton, List, ListItem } from 'material-ui';
//import InfiniteScroll  from 'react-simple-infinite-scroll';

import * as classes  from './MovieList.css';

class MovieList extends Component {
  state = {
    movieList: [
      {id: 1, title: 'name1'},
      {id: 2, title: 'name2'},
    ],
    isLoading:false,
    page:1,
    isNotLastPage: false
  };


  componentDidMount() {
    //this.props.onInitIngerdients();
    const url = getUrl('/movie/popular');

    fetch(url)
      .then(res => res.json())
      .then(res => {
        this.setState({
          movieList: res.results,
          page: ++this.state.page,
          isNotLastPage: this.state.page > 5
        })
      })
   // this.loadFunc();


  }
  loadFunc =()=>{
    const url = getUrl('/movie/popular', `page=${this.state.page}`);
    //const url = getUrl('/movie/popular');

    fetch(url)
      .then(res => res.json())
      .then(res => {

        this.setState({
          movieList: res.results,
          page: ++this.state.page,
          isNotLastPage: this.state.page > 5,
          isLoading: false
        });
        console.log(this.state.page, this.state.isNotLastPage);

      })

  }
  handleClick(e){
    console.log('handleClick', e);
  }

  render() {
    let favorIcon =(id)=> (
      <IconButton
        // tooltip={this.props.movie.favorite ? 'Remove from favourite' : 'Add to favourite'}
        onClick={() => this.handleClick(id)}
        style={{color:'red'}}
      >
        <FontIcon
          className="material-icons icon__favorite"
          style={{color:'red'}}
         // className={this.props.movie.favorite ? 'material-icons icon__favorite' : ' material-icons icon__favorite_border'}
           >
           favorite
        </FontIcon>;
      </IconButton>
    );

    let movieList = null ;
    if(this.state.movieList && this.state.movieList.length){

      movieList = (this.state.movieList.map(m => {
        return (

            <ListItem  key={m.id} leftIcon={favorIcon(m.id)}>
              <Link className="MovieListLink"  to={`/movie/${m.id}`}> {m.title}</Link>
            </ListItem>

        );
      }));
    }
    return (
      <div>
        <List>
          {/*<InfiniteScroll*/}
            {/*// pageStart={this.state.page}*/}
            {/*// throttle={1000}*/}
            {/*// loadMore={this.loadFunc(this.state.page)}*/}
            {/*// hasMore={ this.state.isNotLastPage }*/}
            {/*// loader={<div className="loader">Loading ...</div>}*/}
          {/*>*/}
            {/*{movieList}*/}
          {/*</InfiniteScroll>*/}
          {/*<InfiniteScroll*/}
            {/*throttle={100}*/}
            {/*threshold={20}*/}
            {/*isLoading={this.state.isLoading}*/}
            {/*hasMore={this.state.isNotLastPage}*/}
            {/*onLoadMore={this.loadFunc}*/}
          {/*>*/}

            {/*{movieList}*/}
          {/*</InfiniteScroll>*/}
          {movieList}
        </List>
      </div>
    )
  }
}

export default MovieList;
