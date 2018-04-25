import React, { Component } from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { AppBar, Drawer, FontIcon, IconButton, IconMenu, MenuItem } from 'material-ui';
import { withRouter } from 'react-router';
import { makeSelectFavoriteList, makeSelectLocale } from '../../store/selectors';
import { FormattedMessage } from 'react-intl';
import * as actions from '../../store/actions';

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
      title: <FormattedMessage id="menu.home"/>
    },
      {
        url: '/favorite',
        title: <FormattedMessage id="menu.favoriteList"/>
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
          <MenuItem onClick={() => this.props.onChangeLocale('ru')} primaryText={'ru'}/>
          <MenuItem onClick={() => this.props.onChangeLocale('en')} primaryText={'en'}/>
        </Drawer>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return createStructuredSelector({
    favoriteList: makeSelectFavoriteList(),
    locale: makeSelectLocale(),
  });
};

const mapDispatchToProps = dispatch => {
  return {
    onChangeLocale: (locale) => dispatch(actions.changeLocale(locale)),
  }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));

