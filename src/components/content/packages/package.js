/**
 * Created by Durgaprasad Budhwani on 12/23/2017.
 */
// @flow

import ButtonBase from 'material-ui/ButtonBase';
import grey from 'material-ui/colors/grey';
import { withStyles } from 'material-ui/styles';
import PropTypes from 'prop-types';
import React from 'react';
import Library from './../../common/library';

const styles = theme => ({
  container: {
    // marginTop: 8,
    // marginLeft: 8,
    // marginRight: 8,
    borderBottom: `1px solid ${grey[ 300 ]}`,
    padding: 0,
    backgroundColor: 'white',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: grey[ 50 ],
      border: `1px solid ${theme.palette.primary[ 500 ]}`,
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
        <div className={classes.card}>
          <Library />
        </div>
      </ButtonBase>
    );
  }
}

export default withStyles(styles)(Package);
