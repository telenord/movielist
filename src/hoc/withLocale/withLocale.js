import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { makeSelectLocale } from '../../store/selectors';

const withLocale =(WrappedComponent) => {
  return class extends Component {
    render() {
      return (
        <WrappedComponent {...this.props}/>
      );
    }
  }
};

const mapStateToProps = state => {
  return createStructuredSelector({
    locale: makeSelectLocale(),
  });
};

export default connect(mapStateToProps)(withLocale);
