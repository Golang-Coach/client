/**
 * Created by Durgaprasad Budhwani on 1/1/2018.
 */
// @flow
import { withStyles } from 'material-ui/styles';
import PropTypes from 'prop-types';
import React from 'react';

const styles = () => ({
  container: {
    position: 'absolute',
    background: 'transparent',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    height: '100%',
    width: '100%',
    pointerEvents: 'none',
  },
});

type Props = {
  classes : any,
  children : any,
  color : string,
  eventEnable : boolean,
  visible : boolean
}

const { PureComponent } = React;

class Overlay extends PureComponent<Props> {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    color: PropTypes.string.isRequired,
    eventEnable: PropTypes.bool.isRequired,
    visible: PropTypes.bool.isRequired,
  };

  render() {
    const {
      classes,
      children,
      color,
      eventEnable,
      visible,
    } = this.props;

    if (!visible) {
      return null;
    }
    const style = {
      backgroundColor: color,
      pointerEvents: eventEnable ? 'none' : 'auto',
    };
    if (children) {
      return (
        <div
          className={classes.container}
          style={style}
        >{children}
        </div>
      );
    }
    return (
      <div
        className={classes.container}
        style={style}
      />
    );
  }
}

export default withStyles(styles)(Overlay);
