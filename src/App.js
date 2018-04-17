import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Movie from './containers/Movie/Movie';
import { deepOrange500 } from 'material-ui/styles/colors'
import { MuiThemeProvider, getMuiTheme } from 'material-ui/styles/index';
import PageNotFound from './components/PageNotFound/PageNotFound';
import Redirect from 'react-router-dom/es/Redirect';
import {
  AppBar, Drawer, FontIcon, IconButton, IconMenu,  MenuItem,
} from 'material-ui';
import Home from './containers/Home/Home';
import {
  makeSelectFavoriteList,
} from './store/selectors';
import { createStructuredSelector } from "reselect";

import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import FavoriteList from './containers/FavoriteList/FavoriteList';
import Footer from './components/Footer/Footer';



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
    popoverIsOpen: false,
    drawerIsOpen: false,
  };

  movieClickHandler = movie => {
    this.handlePopoverClose();
    this.props.history.push(`/movie/${movie}`)
  };

  handlePopoverOpen = (event) => {
    event.preventDefault();
    this.setState({
      popoverIsOpen: true,
      anchorEl: event.currentTarget,
    });
  };

  handleDrawerOpen = () => {
    this.setState({
      drawerIsOpen: true,
    });
  };

  handlePopoverClose = () => {
    this.setState({
      popoverIsOpen: false,
    });
  };

  handleDrawerClose = () => {
    this.setState({
      drawerIsOpen: false,
    });
  };

  navItemClickHandler = url => {
    this.handleDrawerClose();
    this.props.history.push(url)
  };

  render() {
    const navItems = [{
      url: '/',
      title: 'Home'
    },
      {
        url: '/favorite',
        title: 'FavoriteList'
      }
    ];
    const renderNavItems = navItems.map((item, i) =>
       <MenuItem key={i} onClick={()=>this.navItemClickHandler(item.url)} primaryText={item.title}/>
    );

    const {favoriteList} = this.props;

    let moviesItems = <MenuItem primaryText={'No favorite movies yet'}/>;
    if (favoriteList.size) {
      moviesItems = (favoriteList.map(movie => {
        return <MenuItem key={movie.get('id')} primaryText={movie.get('title')}
                         onClick={() => this.movieClickHandler(movie.get('id'))}/>

      }));
    }

    const rightMenu = (
      <IconMenu
        iconButtonElement={
          <IconButton>
            <FontIcon
              onClick={this.handlePopoverOpen}
              style={{color: '#f44336'}}
              className={'material-icons icon__favorite mr5'}
            >
              favorite
            </FontIcon>
          </IconButton>
        }
        anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
        targetOrigin={{horizontal: 'left', vertical: 'top'}}
      >{moviesItems}</IconMenu>
    );

    return (
      <MuiThemeProvider muiTheme={this.muiTheme}>
        <div className="App">
          <AppBar
            //title="Menu"
            iconElementRight={rightMenu}
            onLeftIconButtonClick={this.handleDrawerOpen}
          />
          <Drawer
            docked={false}
            open={this.state.drawerIsOpen}
            onRequestChange={this.handleDrawerClose}
          >
            {renderNavItems}
          </Drawer>
          <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/movie/:id' component={Movie}/>
            <Route path='/favorite' component={FavoriteList}/>
            <Route path='/404' exact component={PageNotFound}/>
            <Redirect from='*' to='/404'/>
          </Switch>
          <Footer/>
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


