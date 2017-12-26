/**
 * Created by Durgaprasad Budhwani on 12/24/2017.
 */
// @flow

import classNames from 'classnames';
import Avatar from 'material-ui/Avatar';
import { withStyles } from 'material-ui/styles';
import PropTypes from 'prop-types';

import React from 'react';
import type { Repository } from './../../type/repository';
import License from './license';
import Stars from './stars';

const styles = theme => ({
  package: {
    display: 'flex',
    alignItems: 'center',
  },
  name: {
    color: theme.palette.primary[ 500 ],
    fontWeight: 'bold',
  },
  avatar: {
    margin: 5,
    width: 25,
    height: 25,
    display: 'flex',
  },
  timeAgo: {
    color: 'grey',
    marginLeft: 5,
  },
  row: {
    display: 'flex',
    justifyContent: 'center',
  },
  marginTop5: {
    margin: 5,
    marginTop: 10,
  },
});

type Props = {
  classes : any,
  repository : Repository
}

const { PureComponent } = React;

class Package extends PureComponent<Props> {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    repository: PropTypes.object.isRequired,
  };

  static defaultProps = {
    repository: {
      name: 'Create React App',
      user: {
        name: 'Durgaprasad Budhwani',
        userName: '@durga',
        profileUrl: 'https://avatars2.githubusercontent.com/u/993962?s=460&v=4',
        updatedAt: 'updated 1 week ago',
      },
      license: 'mit',
      stars: 100,
      description: 'Charged cross-browser and cross-platform scrollable container implementation with no external dependencies but React 0.13+',
    },
  };

  render() {
    const { classes, repository } = this.props;
    return (
      <div>
        <div className={classes.package}>
          <span className={classes.name}>{repository.name}</span>
          <span
            className={classNames({
              ['text-grey']: true,
              [classes.timeAgo]: true,
            })}
          > {repository.user.updatedAt} </span>
          <Avatar
            alt={repository.user.name}
            src={repository.user.profileUrl}
            className={classes.avatar}
          />
          <span className="text-grey">{repository.user.userName}</span>
        </div>
        <div className="text-grey">{repository.description}
        </div>
        <div className={classes.marginTop5}>
          <License id={repository.license} />
          <Stars count={repository.stars} />
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Package);
