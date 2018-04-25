import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Movie from './containers/Movie/Movie';
import { deepOrange500 } from 'material-ui/styles/colors'
import { MuiThemeProvider, getMuiTheme } from 'material-ui/styles/index';
import PageNotFound from './components/PageNotFound/PageNotFound';
import Redirect from 'react-router-dom/es/Redirect';

import Home from './containers/Home/Home';

import FavoriteList from './containers/FavoriteList/FavoriteList';
import Footer from './components/Footer/Footer';
import Header from './containers/Header/Header';

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
          <Header />
          <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/movie/:id' component={Movie}/>
            <Route path='/favorite' component={FavoriteList}/>
            <Route path='/404' exact component={PageNotFound}/>
            <Redirect from='*' to='/404'/>
          </Switch>
          <Footer />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;


