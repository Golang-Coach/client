/**
 * Created by Durgaprasad Budhwani on 1/5/2018.
 */
// @flow
import qs from 'qs';

const getSearchQueryValue = (query : string) => {
  if (query) {
    if (query.startsWith('?')) {
      const newQuery = query.substring(1, query.length);
      const obj = qs.parse(newQuery);
      return obj.search;
    }
  }
  return '';
};

export default getSearchQueryValue;
