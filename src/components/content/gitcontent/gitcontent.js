/**
 * Created by Durgaprasad Budhwani on 1/3/2018.
 */

import Card from 'material-ui/Card';
import { Switch, Route } from 'react-router-dom';
import ReadMe from './readme';
import ReadMe1 from './readme1';
import Overlay from './../../common/overlay';
import { withStyles } from 'material-ui/styles';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';

const styles = () => ({
  container: {},
});

type Props = {
  classes : any
}

class GitContent extends PureComponent<Props> {
  static propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  render() {
    return (
      <Card>
        <Switch>
          <Route exact path="/" component={ReadMe1} />
          <Route path="/:repository" component={ReadMe} />
        </Switch>
        <Overlay
          color={'rbga(0,0,0, 0.4)'}
          eventEnable
          visible
        />
      </Card>
    );
  }
}

export default withStyles(styles)(GitContent);
