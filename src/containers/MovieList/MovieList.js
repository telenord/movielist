import React, { Component } from 'react';
import { getUrl } from '../../shared/moviedb';
import { Link } from 'react-router-dom';

class MovieList extends Component{
    state = {
        movieList:[
            {id:1, title: 'name1'},
            {id:2, title: 'name2'},
        ]
    };


    componentDidMount() {
        //this.props.onInitIngerdients();
        const url = getUrl('/movie/popular');
      console.log(this.state.movieList);

      fetch(url)
            .then(res=> res.json())
            .then(res=> {
                console.log(res);
                this.setState({
                  movieList: res.results
                })
            })


    }
    render() {
        return (
            <div>
                <h2>MovieList</h2>
                <ul>
                    {this.state.movieList.map(m=>{
                        return (
                          <li key={m.id}>
                            <Link to={`/movie/${m.id}`}> {m.title}</Link>
                          </li>
                        );
                    })
                    }
                </ul>

            </div>
        )
    }
}

export default MovieList;
