/**
 * Created by Durgaprasad Budhwani on 12/18/2017.
 */

/**
 * Created by durgaprasad on 10/13/17.
 */
// @flow

import React from 'react';
import { withStyles } from 'material-ui/styles';
import App from './App';
import './App.css';

const styles = theme => ({
  card: {
    display: 'flex',
    flexDirection: 'column',
    flex: 80,
    margin: 20,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
    color: theme.palette.text.secondary,
  },
  pos: {
    marginBottom: 12,
    color: theme.palette.text.secondary,
  },
});

type Props = {

}

function AppContainer(props: Props) {
  return (
    <App {...props} />
  );
}

export default withStyles(styles)(AppContainer);
