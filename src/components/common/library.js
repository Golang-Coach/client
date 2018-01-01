/**
 * Created by Durgaprasad Budhwani on 12/24/2017.
 */
// @flow

import classNames from 'classnames';
import Avatar from 'material-ui/Avatar';
import { withStyles } from 'material-ui/styles';
import PropTypes from 'prop-types';

import React from 'react';
import TimeAgo from 'timeago-react';
import type { Repository } from './../../types';
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
      description: 'Essential cross-platform UI components for React Native.',
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
              /* eslint-disable no-useless-computed-key */
              ['text-grey']: true,
              [classes.timeAgo]: true,
            })}
          >updated </span>
          <TimeAgo
            className={classNames({
              /* eslint-disable no-useless-computed-key */
              ['text-grey']: true,
              [classes.timeAgo]: true,
            })}
            datetime={repository.updatedAt}
          />
          <span className={classNames({
            /* eslint-disable no-useless-computed-key */
            ['text-grey']: true,
            [classes.timeAgo]: true,
          })}
          >by
          </span>
          <Avatar
            alt={repository.user.name}
            src={repository.user.profileUrl}
            className={classes.avatar}
          />
          <span
            className="text-grey"
          >{repository.user.userName}</span>
        </div>
        <div
          className="text-grey"
        >{repository.description}
        </div>
        <div className={classes.marginTop5}>
          <License
            id={repository.license}
          />
          <Stars
            count={repository.stars}
          />
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Package);
