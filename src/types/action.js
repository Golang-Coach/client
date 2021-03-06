/**
 * Created by Durgaprasad Budhwani on 5/15/2016.
 */
// @flow
import type { Repository } from '../types';
import {
  FETCH_README_CONTENT,
  GET_README_CONTENT,
  SEARCH_PACKAGE,
  SEARCH_PACKAGE_RESULT,
  SEARCH_PACKAGE_START,
  ADD_PACKAGES_START,
  ADD_PACKAGES_COMPLETED,
} from '../utils/constants';

export type Action =
  { type : SEARCH_PACKAGE, query : string }
  | { type : GET_README_CONTENT, id : string }
  | { type : SEARCH_PACKAGE_RESULT, repositories : Array<Repository> }
  | { type : FETCH_README_CONTENT, repository : Repository }
  | { type : SEARCH_PACKAGE_START, status : string }
  | { type : ADD_PACKAGES_START, status : string }
  | { type : ADD_PACKAGES_COMPLETED, status : string };

export type Dispatch = (action : Action | ThunkAction | PromiseAction | Array<Action>) => any;
export type GetState = () => Object;
export type ThunkAction = (dispatch : Dispatch, getState : GetState) => any;
export type PromiseAction = Promise<Action>;
