import React, { Component } from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { AppBar, Drawer } from 'material-ui';
import { withRouter } from 'react-router';
import { makeSelectLocale } from '../../store/selectors';

import * as actions from '../../store/actions';
import { setCookie } from '../../helpers/cookies';
import NavItems from '../../components/NavItems/NavItems';
import LocaleMenu from '../../components/LocaleMenu/LocaleMenu';

class Header extends Component {
  state = {
    popoverIsOpen: false,
    drawerIsOpen: false,
  };

  handleDrawerOpen = () => {
    this.setState({
      drawerIsOpen: true,
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

  localeClickHandler = locale => {
    this.props.onChangeLocale(locale);
    setCookie('prefered_language', locale, {expires: 30 * 60 * 1000});
  };

  render() {
    return (
      <div>
        <AppBar
          iconElementRight={<LocaleMenu locale={this.props.locale}
                                        click={(locale) => this.localeClickHandler(locale)}/>}
          onLeftIconButtonClick={this.handleDrawerOpen}
        />
        <Drawer
          docked={false}
          open={this.state.drawerIsOpen}
          onRequestChange={this.handleDrawerClose}
        >
          <NavItems click={(url) => this.navItemClickHandler(url)}/>
        </Drawer>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return createStructuredSelector({
    locale: makeSelectLocale(),
  });
};

const mapDispatchToProps = dispatch => {
  return {
    onChangeLocale: (locale) => dispatch(actions.changeLocale(locale)),
  }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));

