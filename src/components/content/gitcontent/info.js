/**
 * Created by Durgaprasad Budhwani on 12/24/2017.
 */
/* eslint-disable react/no-unescaped-entities */
// @flow
import 'github-markdown-css';
import Avatar from 'material-ui/Avatar';
import Grid from 'material-ui/Grid';
import { withStyles } from 'material-ui/styles';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';

const styles = () => ({
  container: {
    padding: 20,
  },
  row: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: 20,
  },
  coachGreeting: {
    color: '#bbb',
    fontWeight: 300,
    marginTop: 20,
    fontSize: '1rem',
  },
  tagLine: {
    color: '#747474',
    fontWeight: 300,
    fontSize: '1.6em',
    lineHeight: '2.1875rem',
    maxWidth: '25rem',
    marginTop: 20,
  },
  info: {
    color: '#2c2c2c',
    fontWeight: 300,
    fontSize: 17,
    maxWidth: '37.1875rem',
    marginTop: 15,
    lineHeight: '1.6em',
    textAlign: 'left',
  },
  avatar: {
    height: 250,
    width: 250,
  },
});

type Props = {
  classes : any,
}

class Info extends PureComponent<Props> {
  static propTypes = {
    classes: PropTypes.object.isRequired,
  };

  render() {
    const { classes } = this.props;
    return (
      <Grid
        container
        className={classes.container}
        direction="column"
        justify="center"
        alignItems="center"
        spacing={0}
      >
        <div className={classes.row}>
          <Avatar
            alt="Golang Coach"
            src="golang-coach.png"
            className={classes.avatar}
          />
        </div>
        <p className={classes.coachGreeting}>Coach D welcomes you!</p>
        <h2 className={classes.tagLine}>This is an opinionated catalog of open source Golang packages.</h2>
        <p className={classes.info}>Libraries come and go. The ecosystem evolves rapidly, and that's a good thing. But it
           means you can't rely on your bookmarks. Google may not be your best friend either, since
           it focuses on popular results — established solutions that may not be the best fit for your
           project.</p>
        <p className={classes.info}>This website indexes new packages and is updated roughly once per day, by using both
           automated scripts and manual curation. Even if you are implementing your
           own solution for your particular problem, this can be a good place to find interesting code
           to learn from.</p>
        <p className={classes.info}>I hope this catalog is as useful to you as it is to me.</p>
      </Grid>
    );
  }
}

export default withStyles(styles)(Info);

