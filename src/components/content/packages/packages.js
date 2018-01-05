/**
 * Created by Durgaprasad Budhwani on 1/1/2018.
 */
// @flow
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import type { Repository, RepositoriesInfo } from '../../../types';
import Package from './package';

type Props = {
  repositoriesInfo : RepositoriesInfo,
  search: string,
}

export default class Packages extends PureComponent<Props> {
  static propTypes = {
    repositoriesInfo: PropTypes.object.isRequired,
    search: PropTypes.string.isRequired,
  };

  renderItem(repository : Repository) {
    return (
      <Package
        key={repository._id}
        repository={repository}
        search={this.props.search}
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
