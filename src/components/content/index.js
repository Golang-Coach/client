/**
 ** Created by Durgaprasad Budhwani on 12/18/2017.
 * */
// @flow

import Grid from 'material-ui/Grid';
import { withStyles } from 'material-ui/styles';
import Card from 'material-ui/Card';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import ReadMe from './gitcontent/readme';
import Package from './packages/package';

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
  },
  gitContent: {
    overflow: 'auto',
    height: 'calc(100vh - 85px)',
    paddingLeft: 10,
  },
});

type Props = {
  classes : any
}

class Content extends PureComponent<Props> {
  static propTypes : Props = {
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
          <Package/>
          <Package/>
          <Package/>
          <Package/>
          <Package/>
          <Package/>
          <Package/>
          <Package/>
          <Package/>
          <Package/>
          <Package/>
          <Package/>
          <Package/>
          <Package/>
          <Package/>
          <Package/>
          <Package/>
        </Grid>
        <Grid
          className={classes.gitContent}
          item
          xs={7}
        >
          <Card>
            <ReadMe />
          </Card>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(Content);
