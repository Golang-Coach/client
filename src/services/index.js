/**
 * Created by Durgaprasad Budhwani on 12/29/2017.
 */
import axios from 'axios';

axios.defaults.baseURL = 'https://apigolangcoach.azurewebsites.net/';

// eslint-disable-next-line
export const GetRepositories = async (query : ?string, page: ?number, limit: ?number) => {
  try {
    const { data } = await axios.get('repositories/', { params: { query, page, limit } });
    return { error: null, res: data };
  } catch (error) {
    return { error, res: null };
  }
};

// eslint-disable-next-line
export const GetRepository = async (id : string) => {
  try {
    const { data } = await axios.get(`repositories${id}`);
    return { error: null, res: data };
  } catch (error) {
    return { error, res: null };
  }
};
