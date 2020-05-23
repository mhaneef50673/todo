import React from 'react';
import { mount } from 'enzyme';
import { mountToJson} from 'enzyme-to-json';
import LoginForm from './index';

describe('LoginForm Component', () => {
  it('should render the component', () => {
    const tree = mount(
      <LoginForm />
    )
    expect(mountToJson(tree)).toMatchSnapshot();
  });
  it('should render the component with error text and isAuthenticating', () => {
    let tree = mount(
      <LoginForm error />
    )
    expect(mountToJson(tree)).toMatchSnapshot();
    tree = mount(
      <LoginForm isAuthenticating />
    )
    expect(mountToJson(tree)).toMatchSnapshot();
  });
});