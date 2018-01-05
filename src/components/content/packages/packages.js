/**
 * Created by Durgaprasad Budhwani on 1/1/2018.
 */
// @flow
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import type { Repository, RepositoriesInfo } from '../../../types';
import Package from './package';
import Overlay from '../../common/overlay';
import Spinner from '../../common/spinner';

type Props = {
  repositoriesInfo : RepositoriesInfo,
  search: string,
  busy: boolean
}

export default class Packages extends PureComponent<Props> {
  static propTypes = {
    repositoriesInfo: PropTypes.object.isRequired,
    search: PropTypes.string.isRequired,
    busy: PropTypes.bool.isRequired,
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
    const { repositoriesInfo, busy } = this.props;
    return (
      <div>
        {repositoriesInfo && repositoriesInfo.repositories && repositoriesInfo.repositories.map(this.renderItem.bind(this))}
        <Overlay
          color={'rbga(0,0,0, 0.4)'}
          eventEnable
          visible={busy}
        >
          <Spinner />
        </Overlay>
      </div>
    );
  }
}
