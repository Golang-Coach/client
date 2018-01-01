/**
 ** Created by Durgaprasad Budhwani on 12/18/2017.
 * */
// @flow

import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { searchPackages } from './../../actions/search';
import AppBar from './app-bar';

const dispatchToProps = dispatch => bindActionCreators({
  searchPackages,
}, dispatch);

type Props = {}

class Header extends PureComponent<Props> {
  render() {
    return (
      <AppBar
        {...this.props}
      />
    );
  }
}

export default connect(null, dispatchToProps)(Header);
