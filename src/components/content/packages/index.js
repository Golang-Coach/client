/**
 * Created by Durgaprasad Budhwani on 1/1/2018.
 */
// @flow
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Packages from './packages';
import type { RepositoriesInfo } from '../../../types';

type Props = {
  repositoriesInfo : RepositoriesInfo,
  search: string,
}


class PackagesContainer extends PureComponent<Props> {
  render() {
    return (
      <Packages
        {...this.props}
      />
    );
  }
}

const stateToProps = state => ({
  repositoriesInfo: state.repositoriesInfo,
  search: state.router.location.search,
});

export default connect(stateToProps)(PackagesContainer);
