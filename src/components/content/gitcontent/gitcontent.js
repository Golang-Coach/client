/**
 * Created by Durgaprasad Budhwani on 1/3/2018.
 */

import Card from 'material-ui/Card';
import React, { PureComponent } from 'react';
import { Route } from 'react-router-dom';
import qs from 'qs';
import Info from './info';
import ReadMe from './readme';

type Props = {}

class GitContent extends PureComponent<Props> {
  render() {
    return (
      <Card className="fullHeight">
        <Route render={({ location }) => {
          const query = qs.parse(location.search);
          if ((query && (query['?p'] || query.p)) || location.pathname) {
            return <ReadMe />;
          }
          return <Info />;
        }}
        />
      </Card>
    );
  }
}

export default GitContent;
