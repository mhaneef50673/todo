import React from 'react';
import { mount } from 'enzyme';
import { mountToJson } from 'enzyme-to-json';
import { Provider } from 'react-redux';
import Login from './index';

describe('Login Component', () => {
  it('should render the component', () => {
    const tree = mount(
      <Provider store={{
        getState: () => (
          {
            loginReducer: {
              token: 'test',
              error: false,
              isAuthenticating: false,
            }
          }
        ),
        subscribe: () => { },
        dispatch: () => { },
      }}
      >
        <Login />
      </Provider>
    )
    expect(mountToJson(tree)).toMatchSnapshot();
  });
});