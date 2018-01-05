/**
 * Created by Durgaprasad Budhwani on 1/1/2018.
 */
// @flow
import React, { PureComponent } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { searchPackages } from './../../../actions/search';
import getSearchQueryValue from './../../../utils/searchString';
import type { RepositoriesInfo } from '../../../types';
import Packages from './packages';
import { INPROGRESS } from '../../../utils/constants';

type Props = {
  repositoriesInfo : RepositoriesInfo,
  search : string,
  searchPackages: Function,
  busy: boolean
}

class PackagesContainer extends PureComponent<Props> {
  componentDidMount() {
    if (this.props.search) {
      this.props.searchPackages(getSearchQueryValue(this.props.search));
    } else {
      // TODO
      // this.searchPackages('');
    }
  }

  componentWillReceiveProps(nextProps : Props) {
    if (nextProps.search && this.props.search !== nextProps.search) {
      this.props.searchPackages(getSearchQueryValue(nextProps.search));
    }
  }

  render() {
    return (
      <Packages
        {...this.props}
      />
    );
  }
}


const dispatchToProps = dispatch => bindActionCreators({
  searchPackages,
}, dispatch);

const stateToProps = state => ({
  repositoriesInfo: state.repositoriesInfo,
  search: state.router.location.search,
  busy: state.operations.searchStatus === INPROGRESS,
});

export default connect(stateToProps, dispatchToProps)(PackagesContainer);
