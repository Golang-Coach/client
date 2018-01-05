/**
 * Created by Durgaprasad Budhwani on 12/25/2017.
 */
// @flow
import { COMPLETED, INPROGRESS } from '../utils/constants';

export type Operations = {
  searchStatus : INPROGRESS | COMPLETED,
  scrollFetchStatus : INPROGRESS | COMPLETED,
  readMeFetchStatus : INPROGRESS | COMPLETED,
}
