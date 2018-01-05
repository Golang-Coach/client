/**
 * Created by Durgaprasad Budhwani on 1/1/2018.
 */
// @flow

import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import SearchBar from '../common/search-bar';
import getSearchQueryValue from './../../utils/searchString';

type Props = {
  push : Function,
  search : string,
}

type State = {
  search: string,
}

export default class ApplicationBar extends PureComponent<Props, State> {
  static propTypes = {
    push: PropTypes.func.isRequired,
    search: PropTypes.string.isRequired,
  };

  state = {
    search: '',
  };

  componentDidMount() {
    const search = getSearchQueryValue(this.props.search);
// eslint-disable-next-line react/no-did-mount-set-state
    this.setState({
      search,
    });
  }

  _onChange(text : string) {
    if (text) {
      this.props.push({
        search: `search=${text}`,
      });
    } else {
      this.props.push({
        search: '',
      });
    }
  }

  render() {
    const search = this.state.search;
    return (
      <AppBar
        position="static"
      >
        <Toolbar>
          <SearchBar
            onChange={this._onChange.bind(this)}
            onRequestSearch={() => {
            }}
            style={{
              margin: '0 auto',
              maxWidth: 800,
              flex: 1,
            }}
            value={search}
          />
        </Toolbar>
      </AppBar>
    );
  }
}
