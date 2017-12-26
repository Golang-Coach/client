/**
 * Created by Durgaprasad Budhwani on 12/23/2017.
 */
// @flow

import classNames from 'classnames';
import { withStyles } from 'material-ui/styles';
import Tooltip from 'material-ui/Tooltip';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { AVERAGE_STARS, STARS_THRESHOLD } from '../../config/index';
import humanizedNumber from '../../utils/humanizedNumber';
import pluralize from '../../utils/pluralize';

const styles = () => ({
  container: {
    margin: 4,
    marginLeft: 20,
  },
  textOrangeDark: {
    color: '#ce972d',
  },
  textGreyDark: {
    color: '#888',
  },
});

type Props = {
  classes : any,
  count : number
}

class Stars extends PureComponent<Props> {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    count: PropTypes.number.isRequired,
  };

  render() {
    const { classes, count } = this.props;
    return (
      <Tooltip title={`${count} ${pluralize(count, 'star')} on GitHub${
        count > AVERAGE_STARS ? ' (above average)' : ''
        }`}
      >
        <span
          className={classNames({
            [classes.container]: true,
            [classes.textOrangeDark]: count > STARS_THRESHOLD,
            [classes.textGreyDark]: count < STARS_THRESHOLD,
          })}
          aria-label={`${count} ${pluralize(count, 'star')} on GitHub${
            count > AVERAGE_STARS ? ' (above average)' : ''
            }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="13"
            height="12"
            viewBox="0 0 13 12"
          >
            <polygon points="6.285 9.644 10.169 12 9.138 7.561 12.57 4.573 8.051 4.188 6.285 .001 4.519 4.188 0 4.573 3.432 7.561 2.401 12" />
          </svg>
          {' '}
          {humanizedNumber(count)}
        </span>
      </Tooltip>
    );
  }
}

export default withStyles(styles)(Stars);
