/**
 * Created by Durgaprasad Budhwani on 12/25/2017.
 */
// @flow

import type { RepositoryUser } from './repository-user';

export type Repository = {
  _id : string,
  name : string,
  description : string,
  user : RepositoryUser,
  license : string,
  stars : number,
  readme : string,
  latestRelease : string,
  publishedAt : Date,
  modifiedAt : Date,
  keywords : Array<string>
}
