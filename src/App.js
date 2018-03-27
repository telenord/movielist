import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Movie from './containers/Movie/Movie';
import { deepOrange500 } from 'material-ui/styles/colors'
import { MuiThemeProvider, getMuiTheme } from 'material-ui/styles/index';
import PageNotFound from './components/PageNotFound/PageNotFound';
import Redirect from 'react-router-dom/es/Redirect';
import { FontIcon, Menu, MenuItem, Popover, RaisedButton, Toolbar, ToolbarGroup } from 'material-ui';
import Home from './containers/Home/Home';
import { Col, Grid, Row } from 'react-bootstrap';
import {
  makeSelectFavoriteList,

} from './store/selectors';
import { createStructuredSelector } from "reselect";

import { connect } from 'react-redux';
import { withRouter } from 'react-router';


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

  state = {
    open: false,
  };

  menuClickHandler = movie => {
    this.handleRequestClose();
    this.props.history.push(`/movie/${movie}`)
  };

  handleClick = (event) => {
    event.preventDefault();
    this.setState({
      open: true,
      anchorEl: event.currentTarget,
    });
  };

  handleRequestClose = () => {
    this.setState({
      open: false,
    });
  };

  render() {
    const {favoriteList} = this.props;
    const moviesItems = (favoriteList.toJS().map(movie=> {
      return <MenuItem key={movie.id} primaryText={movie.title}
                       onClick={() => this.menuClickHandler(movie.id)}/>

    }));
    const btnTitle = (<span className={'d-i-flex'}>
                      <FontIcon
                        style={{color: '#f44336'}}
                        className={'material-icons icon__favorite mr5'}
                      >
                      favorite
                      </FontIcon>
                      Favorite List
                    </span>);
    return (
      <MuiThemeProvider muiTheme={this.muiTheme}>
        <div className="App">
          <Toolbar>
            <Grid className={'d-flex'}>
              <Row>
                <Col xs={12}>
                  <ToolbarGroup>
                    <RaisedButton
                      onClick={this.handleClick}
                      label={btnTitle}
                    />
                    <Popover
                      className={'d-flex'}
                      open={this.state.open}
                      anchorEl={this.state.anchorEl}
                      anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
                      targetOrigin={{horizontal: 'left', vertical: 'top'}}
                      onRequestClose={this.handleRequestClose}
                    >
                      <Menu>
                        {moviesItems}
                      </Menu>
                    </Popover>
                  </ToolbarGroup>
                </Col>
              </Row>
            </Grid>
          </Toolbar>


          <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/movie/:id' component={Movie}/>
            <Route path='/404' exact component={PageNotFound}/>
            <Redirect from='*' to='/404'/>
          </Switch>


        </div>
      </MuiThemeProvider>
    );
  }
}

const mapStateToProps = state => {
  return createStructuredSelector({
    favoriteList: makeSelectFavoriteList(),
  });
};


export default withRouter(connect(mapStateToProps)(App));


