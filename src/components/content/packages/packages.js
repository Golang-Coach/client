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

class Packages extends PureComponent<Props, void, void> {
  static propTypes : Props = {
    repositories: PropTypes.array.isRequired,
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
    const { repositories } = this.props;
    return (
      <div>
        {repositories && repositories.map(this.renderItem.bind(this))}
      </div>
    );
  }
}

const stateToProps = state => ({
  repositories: state.repositories,
});

export default connect(stateToProps)(Packages);
