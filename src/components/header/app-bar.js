/**
 * Created by Durgaprasad Budhwani on 1/1/2018.
 */
// @flow

import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import SearchBar from '../common/search-bar';

type Props = {
  searchPackages : Function,
}

export default class ApplicationBar extends PureComponent<Props> {
  static propTypes = {
    searchPackages: PropTypes.func.isRequired,
  };

  render() {
    const { searchPackages } = this.props;
    return (
      <AppBar
        position="static"
      >
        <Toolbar>
          <SearchBar
            onChange={text => searchPackages(text)}
            onRequestSearch={() => {}}
            style={{
              margin: '0 auto',
              maxWidth: 800,
              flex: 1,
            }}
          />
        </Toolbar>
      </AppBar>
    );
  }
}
