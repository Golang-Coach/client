/**
 * Created by Durgaprasad Budhwani on 1/4/2018.
 */
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getReadme } from './../../../../actions/readme';
import ReadMe from './readme';
import { INPROGRESS } from '../../../../utils/constants';

type Props = {
  pathname : string,
  getReadme : Function,
}

class ReadMeContainer extends PureComponent<Props> {
  componentDidMount() {
    if (this.props.pathname) {
      this._getReadMe(this.props.pathname);
    }
  }

  componentWillReceiveProps(nextProps : Props) {
    if (nextProps.pathname && this.props.pathname !== nextProps.pathname) {
      this._getReadMe(nextProps.pathname);
    }
  }

  _getReadMe(pathname : string) {
    const packageName = pathname.substr(0, pathname.length - 1);
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
  pathname: state.router.location.pathname,
  repository: state.repository,
  busy: state.operations.readMeFetchStatus === INPROGRESS,
});

const dispatchToProps = dispatch => bindActionCreators({
  getReadme,
}, dispatch);

export default connect(stateToProps, dispatchToProps)(ReadMeContainer);
