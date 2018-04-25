import React, { Component } from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { AppBar, Drawer, FontIcon, IconButton, IconMenu, MenuItem } from 'material-ui';
import { withRouter } from 'react-router';
import { makeSelectFavoriteList } from '../../store/selectors';

class Header extends Component {
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
    const {favoriteList} = this.props;

    let moviesItems = <MenuItem primaryText={'No favorite movies yet'}/>;
    if (favoriteList.size) {
      moviesItems = (favoriteList.map(movie => {
        return <MenuItem key={movie.get('id')} primaryText={movie.get('title')}
                         onClick={() => this.movieClickHandler(movie.get('id'))}/>

      }));
    }
    const navItems = [{
      url: '/',
      title: 'Home'
    },
      {
        url: '/favorite',
        title: 'FavoriteList'
      }
    ];
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

    const renderNavItems = navItems.map((item, i) =>
      <MenuItem key={i} onClick={() => this.navItemClickHandler(item.url)} primaryText={item.title}/>
    );

    return (
      <div>
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
      </div>
    )

  }
}

const mapStateToProps = state => {
  return createStructuredSelector({
    favoriteList: makeSelectFavoriteList(),
  });
};


export default withRouter(connect(mapStateToProps)(Header));

