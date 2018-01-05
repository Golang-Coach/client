/**
 * Created by Durgaprasad Budhwani on 12/24/2017.
 */


import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import GitContent from './gitcontent';

type Props = {
}

class GitContentContainer extends PureComponent<Props> {

  render() {
    return (
      <GitContent
        {...this.props}
      />
    );
  }
}

const stateToProps = state => ({
  location: state.router.location,
});

export default connect(stateToProps)(GitContentContainer);
