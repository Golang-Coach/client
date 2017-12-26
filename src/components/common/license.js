/**
 * Created by Durgaprasad Budhwani on 12/24/2017.
 */
// @flow
import { withStyles } from 'material-ui/styles';
import Tooltip from 'material-ui/Tooltip';
import PropTypes from 'prop-types';
import React from 'react';
import licenseUrl from '../../utils/license';

const styles = () => ({
  container: {},
  license: {
    border: '1px solid black',
    fontSize: 12,
    padding: 2,
    textDecoration: 'none',
  },
});

type Props = {
  classes : any,
  id : string
}

const { PureComponent } = React;

class Package extends PureComponent<Props> {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    id: PropTypes.string.isRequired,
  };

  render() {
    const { classes, id } = this.props;
    return (
      <Tooltip
        title={`Licensed under ${id}\n(click to learn more)`}
      >
        <a
          className={classes.license}
          style={{ maxWidth: 100, verticalAlign: 1 }}
          target="_blank"
          href={licenseUrl(id)}
          aria-label={`Licensed under ${id}\n(click to learn more)`}
        >
          {id}
        </a>
      </Tooltip>
    );
  }
}

export default withStyles(styles)(Package);
