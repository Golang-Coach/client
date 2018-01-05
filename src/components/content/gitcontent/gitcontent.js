/**
 * Created by Durgaprasad Budhwani on 1/3/2018.
 */

import Card from 'material-ui/Card';
import React, { PureComponent } from 'react';
import { Route, Switch } from 'react-router-dom';

import Info from './info';
import ReadMe from './readme';

type Props = {
}

class GitContent extends PureComponent<Props> {
  render() {
    return (
      <Card className="fullHeight">
        <Switch>
          <Route
            exact
            path="/"
            component={Info}
          />
          <Route
            path="/:repository"
            component={ReadMe}
          />
        </Switch>
      </Card>
    );
  }
}

export default GitContent;
