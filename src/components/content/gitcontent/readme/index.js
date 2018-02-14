/**
 * Created by Durgaprasad Budhwani on 1/4/2018.
 */
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import qs from 'qs';
import { getReadme } from './../../../../actions/readme';
import ReadMe from './readme';
import { INPROGRESS } from '../../../../utils/constants';

type Location = {
  pathname: string;
  search: string;
}

type Props = {
  location : Location,
  getReadme : Function,
}

class ReadMeContainer extends PureComponent<Props> {
  componentDidMount() {
    const query = qs.parse(this.props.location.search);
    if (query['?p'] || query.p) {
      const pathname = query['?p'] || query.p;
      if (pathname.startsWith('/')) {
        this._getReadMe(pathname);
      } else {
        this._getReadMe(`/${pathname}`);
      }
    } else {
      this._getReadMe(this.props.location.pathname);
    }
  }

  componentWillReceiveProps(nextProps : Props) {
    if (nextProps.location.pathname && this.props.location.pathname !== nextProps.location.pathname) {
      this._getReadMe(nextProps.location.pathname);
    }
  }

  _getReadMe(pathname : string) {
    const packageName = pathname.endsWith('/') ? pathname.substr(0, pathname.length - 1) : pathname;
    this.props.getReadme(packageName);
  }

  render() {
    return (
      <ReadMe
        {...this.props}
      />
    );
  }
}

const stateToProps = state => ({
  location: state.router.location,
  repository: state.repository,
  busy: state.operations.readMeFetchStatus === INPROGRESS,
});

const dispatchToProps = dispatch => bindActionCreators({
  getReadme,
}, dispatch);

export default connect(stateToProps, dispatchToProps)(ReadMeContainer);
