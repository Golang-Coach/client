/**
 * Created by Durgaprasad Budhwani on 12/29/2017.
 */
// @flow
import type { Repository } from '../types';
import { GET_README_CONTENT, GET_README_CONTENT_RESULT } from '../utils/constants';

export const getReadme = (id : string) => ({
  type: GET_README_CONTENT,
  id,
});

export const updateReadMe = (repository : Repository) => ({
  type: GET_README_CONTENT_RESULT,
  repository,
});
