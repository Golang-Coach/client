/**
 ** Created by Durgaprasad Budhwani on 12/18/2017.
 * */

import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { push } from 'react-router-redux';
import ApplicationBar from './app-bar';

type Props = {
  search: string,
  push: Function
}

class Header extends PureComponent<Props> {
  render() {
    return (
      <ApplicationBar
        {...this.props}
      />
    );
  }
}

const dispatchToProps = dispatch => bindActionCreators({
  push,
}, dispatch);

const stateToProps = state => ({
  search: state.router.location.search,
});

export default connect(stateToProps, dispatchToProps)(Header);
