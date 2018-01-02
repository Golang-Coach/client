/**
 * Created by Durgaprasad Budhwani on 12/29/2017.
 */
import * as actionTypes from './action';
import * as repositoryTypes from './repository';
import * as userTypes from './repository-user';
import * as operationsTypes from './operations';

export default {
  ...actionTypes,
  ...repositoryTypes,
  ...userTypes,
  ...operationsTypes,
};
