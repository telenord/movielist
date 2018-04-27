import React from 'react';
import { FlatButton, IconMenu, MenuItem } from 'material-ui';

const locales = ['en', 'ru'];

const LocaleMenu = ({locale, click})=>{
  const localesList = (locales.map(locale => {
    return <MenuItem key={locale} primaryText={locale.toUpperCase()}
                     onClick={() => click(locale)}/>

  }));
  return(
    <IconMenu
      iconButtonElement={<FlatButton style={{color:'#fff'}} label={locale.toUpperCase()} />}
      anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
      targetOrigin={{horizontal: 'left', vertical: 'top'}}
    >{localesList}</IconMenu>
  )
}


export default LocaleMenu;
