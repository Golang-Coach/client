/**
 * Created by Durgaprasad Budhwani on 12/24/2017.
 */

import Grid from 'material-ui/Grid';
import { withStyles } from 'material-ui/styles';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';

const styles = () => ({
  container: {},
});

type Props = {
  classes : any
}

class GitContent extends PureComponent<Props, void, void> {
  static propTypes : Props = {
    classes: PropTypes.object.isRequired,
  };

  render() {
    const { classes } = this.props;
    return (
      <Grid {...classes} />
    );
  }
}

export default withStyles(styles)(GitContent);
