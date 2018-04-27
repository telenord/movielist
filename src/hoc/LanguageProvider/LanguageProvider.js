import React from 'react';
import { IntlProvider } from 'react-intl';
import { connect } from 'react-redux';

import {getMessages } from '../../i18n';
import { createStructuredSelector } from 'reselect';
import { makeSelectLocale } from '../../store/selectors/index';

class LanguageProvider extends React.PureComponent {
  render() {
    return (
      <IntlProvider
        locale={this.props.locale}
        key={this.props.locale}
        messages={getMessages(this.props.locale)}
      >
        {React.Children.only(this.props.children)}
      </IntlProvider>
    );
  }
}

const mapStateToProps = state => {
  return createStructuredSelector({
    locale: makeSelectLocale(),
  });
};

export default connect(mapStateToProps)(LanguageProvider);



