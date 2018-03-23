import React, { Component } from 'react';
import './App.css';
import MovieList from './containers/MovieList/MovieList';
import {  Route, Switch } from 'react-router-dom';
import Movie from './containers/Movie/Movie';
import {deepOrange500} from 'material-ui/styles/colors'
import { MuiThemeProvider, getMuiTheme } from 'material-ui/styles/index';
import PageNotFound from './components/PageNotFound/PageNotFound';
import Redirect from 'react-router-dom/es/Redirect';
import { DropDownMenu, FontIcon, MenuItem, RaisedButton, Toolbar, ToolbarGroup } from 'material-ui';


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
  state={
    value: 3
  };
  handleChange = (event, index, value) => this.setState({value});


  render() {
    return (
      <MuiThemeProvider muiTheme={this.muiTheme}>

        <div className="App">
          <Toolbar>
            <ToolbarGroup firstChild={true}>

            </ToolbarGroup>
            <ToolbarGroup>
              <FontIcon
                style={{color: '#f44336'}}
                className={'material-icons icon__favorite'}
              >
                favorite_border
                <DropDownMenu value={this.state.value} onChange={this.handleChange}>
                  <MenuItem value={1} primaryText="All Broadcasts" />
                  <MenuItem value={2} primaryText="All Voice" />
                  <MenuItem value={3} primaryText="All Text" />
                  <MenuItem value={4} primaryText="Complete Voice" />
                  <MenuItem value={5} primaryText="Complete Text" />
                  <MenuItem value={6} primaryText="Active Voice" />
                  <MenuItem value={7} primaryText="Active Text" />
                </DropDownMenu>
              </FontIcon>
              <FontIcon className="muidocs-icon-custom-sort" />


            </ToolbarGroup>
          </Toolbar>

          <Switch>
            <Route path='/' exact component={MovieList}/>
            <Route path='/movie/:id' component={Movie}/>
            <Route path='/404' exact component={PageNotFound}/>
            <Redirect from='*' to='/404'/>
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

          */
