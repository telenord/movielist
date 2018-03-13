import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MovieList from './containers/MovieList/MovieList';
import {  Route, Switch } from 'react-router-dom';
import Movie from './containers/Movie/Movie';
import {deepOrange500} from 'material-ui/styles/colors'
import { MuiThemeProvider, getMuiTheme } from 'material-ui/styles/index';


class App extends Component {
  constructor(properties, context) {
    super(properties, context);
    this.muiTheme = getMuiTheme({
      palette: {
        accent1Color: deepOrange500
      }
      , userAgent: properties.userAgent
    })
  }


  render() {
    return (
      <MuiThemeProvider muiTheme={this.muiTheme}>


      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <Switch>
            <Route path='/' exact component={MovieList} />
            <Route path='/movie/:id' component={Movie} />
        </Switch>


      </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
/*
*
*  <Route to='/404' exact component={PageNotFound} />
          <Route to='/movie/:id' exact component={Movie} />
          <Route to='/' exact component={MovieList} />
          <Redirect from='/*' to='/404' />
          */
