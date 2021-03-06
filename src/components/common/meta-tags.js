/**
 * Created by Durgaprasad Budhwani on 12/25/2017.
 */
// @flow
import Helmet from 'react-helmet';
import React from 'react';
import PropTypes from 'prop-types';
import type { Repository } from '../../types';

type Props = {
  repository : Repository
}

const { PureComponent } = React;

export default class MetaTags extends PureComponent<Props> {
  static propTypes = {
    repository: PropTypes.object.isRequired,
  };

  render() {
    const { repository } = this.props;
    return (
      <Helmet>
        <title>{repository.name}</title>
        <meta
          property="og:title"
          content={repository.name}
        />
        <meta
          property="og:description"
          content={repository.description}
        />
        <meta
          property="og:image"
          content={repository.user.profileUrl}
        />
        <meta
          name="twitter:title"
          content={repository.name}
        />
        <meta
          name="twitter:description"
          content={repository.description}
        />
        <meta
          name="twitter:image"
          content={repository.user.profileUrl}
        />
      </Helmet>
    );
  }
}

