/**
 ** Created by Durgaprasad Budhwani on 12/18/2017.
 * */
// @flow

import Grid from 'material-ui/Grid';
import { withStyles } from 'material-ui/styles';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import GitContent from './gitcontent';
import Packages from './packages';
import Overlay from './../common/overlay';

const styles = () => ({
  container: {
    padding: 10,
    alignSelf: 'center',
  },
  content: {
    zIndex: 2,
    position: 'relative',
    paddingRight: 10,
    paddingLeft: 20,
  },
  padding0: {
    padding: '0 !important',
  },
  packages: {
    overflow: 'auto',
    height: 'calc(100vh - 85px)',
    position: 'relative',
  },
  gitContent: {
    overflow: 'auto',
    height: 'calc(100vh - 85px)',
    paddingLeft: 10,
    position: 'relative',
  },
});

type Props = {
  classes : any
}

class Content extends PureComponent<Props> {
  static propTypes = {
    classes: PropTypes.object.isRequired,
  };

  render() {
    const { classes } = this.props;
    return (
      <Grid
        className={classes.container}
        container
        direction="row"
        spacing={0}
      >
        <Grid
          className={classes.packages}
          item
          xs={5}
        >
          <Packages />
          <Overlay
            color={'rbga(0,0,0, 0.4)'}
            eventEnable
            visible
          />
        </Grid>
        <Grid
          className={classes.gitContent}
          item
          xs={7}
        >
          <GitContent />
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(Content);
