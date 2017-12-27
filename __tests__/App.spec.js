/**
 * Created by durgaprasad on 10/13/17.
 */
/* global expect,it */
import React from 'react';
import renderer from 'react-test-renderer';
import App from '../src/App';

describe('<App />', () => {
  it('renders app with loading', () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders app without loading', () => {
    const tree = renderer.create(<App />);
    const instance = tree.getInstance();
    instance.setState({ loading: false });
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
