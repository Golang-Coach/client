/**
 * Created by Durgaprasad Budhwani on 12/29/2017.
 */
import axios from 'axios';

// eslint-disable-next-line
export const GetRepositories = async (query : ?string, page: ?number, limit: ?number) => {
  try {
    const { data } = await axios.get('packages.json');
    return { error: null, res: data };
  } catch (error) {
    return { error, res: null };
  }
};

// eslint-disable-next-line
export const GetReadMe = (id : string) => axios.get('packages.json');
