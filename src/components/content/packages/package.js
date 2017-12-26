/**
 * Created by Durgaprasad Budhwani on 12/23/2017.
 */
// @flow

import ButtonBase from 'material-ui/ButtonBase';
import Card from 'material-ui/Card';
import { withStyles } from 'material-ui/styles';
import PropTypes from 'prop-types';
import React from 'react';
import Library from './../../common/library';

const styles = () => ({
  container: {
    marginTop: 8,
    marginLeft: 8,
    marginRight: 8,
    padding: 0,
    cursor: 'pointer',
    '&:hover': {
      boxShadow: '0px 1px 7px 0px rgba(0, 188, 212, 0.2), ' +
      '0px 2px 2px 3px rgba(0, 188, 212, 0.14), ' +
      '0px 3px 1px -7px rgba(0, 188, 212, 0.12)',
    },
  },
  card: {
    padding: 10,
    display: 'flex',
    flexDirection: 'column',
    cursor: 'pointer',
    textAlign: 'left',
    fontSize: 16,
    '&:hover': {
      boxShadow: '0px 1px 10px 0px rgba(0, 188, 212, 0.5), ' +
      '0px 2px 2px 5px rgba(0, 188, 212, 0.14), ' +
      '0px 3px 1px -10px rgba(0, 188, 212, 0.12)',
    },
  },
});

type Props = {
  classes : any
}

const { PureComponent } = React;

class Package extends PureComponent<Props> {
  static propTypes : Props = {
    classes: PropTypes.object.isRequired,
  };

  render() {
    const { classes } = this.props;
    return (
      <ButtonBase
        className={classes.container}
      >
        <Card className={classes.card}>
          <Library />
        </Card>
      </ButtonBase>
    );
  }
}

export default withStyles(styles)(Package);
