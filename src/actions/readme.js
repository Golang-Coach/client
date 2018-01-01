/**
 * Created by Durgaprasad Budhwani on 12/29/2017.
 */
// @flow
import { GET_README_CONTENT } from '../utils/constants';

const getReadme = (id : string) => ({
  type: GET_README_CONTENT,
  id,
});

export default getReadme;
