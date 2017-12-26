/**
 ** Created by Durgaprasad Budhwani on 12/18/2017.
 * */
// @flow

import AppBar from 'material-ui/AppBar';
import { withStyles } from 'material-ui/styles';
import Toolbar from 'material-ui/Toolbar';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import SearchBar from '../common/search-bar';

const styles = () => ({
  container: {},
  content: {},
  padding0: {},
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
    return (
      <AppBar
        className={classes.container}
        position="static"
      >
        <Toolbar>
          <SearchBar
            onChange={() => {}}
            onRequestSearch={() => {}}
            style={{
              margin: '0 auto',
              maxWidth: 800,
              flex: 1,
            }}
          />
        </Toolbar>
      </AppBar>
    );
  }
}

export default withStyles(styles)(Header);
