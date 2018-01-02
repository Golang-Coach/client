/**
 * Created by Durgaprasad Budhwani on 1/1/2018.
 */
// @flow
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import type { Repository } from '../../../types';
import Package from './package';

type Props = {
  repositories : Array<Repository>
}

class Packages extends PureComponent<Props> {
  static propTypes = {
    repositoriesInfo: PropTypes.object.isRequired,
  };

  renderItem(repository : Repository) {
    return (
      <Package
        key={repository._id}
        repository={repository}
      />
    );
  }

  render() {
    const { repositoriesInfo } = this.props;
    return (
      <div>
        {repositoriesInfo && repositoriesInfo.repositories && repositoriesInfo.repositories.map(this.renderItem.bind(this))}
      </div>
    );
  }
}

const stateToProps = state => ({
  repositoriesInfo: state.repositoriesInfo,
});

export default connect(stateToProps)(Packages);
