/**
 ** Created by Durgaprasad Budhwani on 12/18/2017.
 * */
// @flow

import Grid from 'material-ui/Grid';
import { withStyles } from 'material-ui/styles';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import Package from './packages/package';

const styles = () => ({
  container: {
    marginTop: 10,
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
          item
          xs={5}
        >
          <Package />
          <Package />
          <Package />
          <Package />
          <Package />
          <Package />
          <Package />
          <Package />
          <Package />
          <Package />
        </Grid>
        <Grid
          item
          xs={7}
        >
          <Package />
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(Content);
