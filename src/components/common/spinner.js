/**
 * Created by Durgaprasad Budhwani on 1/5/2018.
 */
// @flow
import { withStyles } from 'material-ui/styles';
import PropTypes from 'prop-types';
import React from 'react';

const styles = () => ({
  container: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
});

type Props = {
  classes : any
}

const { PureComponent } = React;

class Spinner extends PureComponent<Props> {
  static propTypes : Props = {
    classes: PropTypes.object.isRequired,
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.container}>
        <div className="spinner">
          <div
            className="double-bounce1"
          />
          <div
            className="double-bounce2"
          />
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Spinner);
