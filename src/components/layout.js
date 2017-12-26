/**
 ** Created by Durgaprasad Budhwani on 12/18/2017.
 * */

import Grid from 'material-ui/Grid';
import { withStyles } from 'material-ui/styles';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';

const styles = () => ({
  container: {
    marginLeft: '20px',
    marginRight: '20px',
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

class Header extends PureComponent<Props> {
  static propTypes = {
    classes: PropTypes.object.isRequired,
  };
  render() {
    const { classes } = this.props;
    return (<Grid className={classes.container} />);
  }
}

export default withStyles(styles)(Header);
