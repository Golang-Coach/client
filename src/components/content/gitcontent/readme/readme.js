/**
 * Created by Durgaprasad Budhwani on 12/24/2017.
 */
// @flow
/* eslint-disable react/no-danger */
import 'github-markdown-css';
import { withStyles } from 'material-ui/styles';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import type { Repository } from '../../../../types/repository';
import Overlay from '../../../common/overlay';
import Spinner from '../../../common/spinner';
import MetaTags from './../../../common/meta-tags';


const styles = () => ({
  container: {
    padding: 20,
  },
});

type Props = {
  classes : any,
  repository : Repository,
  busy : boolean,
}

class ReadMe extends PureComponent<Props> {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    repository: PropTypes.object.isRequired,
    busy: PropTypes.bool.isRequired,
  };

  render() {
    const { classes, repository, busy } = this.props;
    return (
      <div>
        <MetaTags
          repository={repository}
        />
        <div
          dangerouslySetInnerHTML={{ __html: repository.readme }}
          className={classes.container}
        />
        <Overlay
          color={'rbga(0,0,0, 0.4)'}
          eventEnable
          visible={busy}
        >
          <Spinner />
        </Overlay>
      </div>
    );
  }
}

export default withStyles(styles)(ReadMe);

