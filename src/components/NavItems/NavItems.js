import React from 'react';
import { FormattedMessage } from 'react-intl';
import { MenuItem } from 'material-ui';

const navItems = [
  {
    url: '/',
    title: <FormattedMessage id="menu.home"/>
  },
  {
    url: '/favorite',
    title: <FormattedMessage id="menu.favoriteList"/>
  }
];

const NavItems = ({click}) => navItems.map((item, i) =>
  <MenuItem key={i} onClick={() => click(item.url)} primaryText={item.title}/>
);

export default NavItems;
