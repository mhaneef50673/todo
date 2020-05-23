import React from 'react';
import { mount } from 'enzyme';
import { mountToJson } from 'enzyme-to-json';
import { Provider } from 'react-redux';
import Todo from './index';
import { isAuthenticated } from '../../../utils';

jest.mock('../../../utils', () => ({
  isAuthenticated: jest.fn(),
}));

describe('Todo Component', () => {
  beforeEach(() => {
    isAuthenticated.mockImplementation(() => true);
  });

  it('should render the component', () => {
    const tree = mount(
      <Provider store={{
        getState: () => (
          {
            loginReducer: {
              token: 'test',
              error: false,
              isAuthenticating: false,
            },
            todoReducer: {
              todos: [
                {
                  description: 'item 1',
                  status: 'pending',
                },
              ]
            }
          }
        ),
        subscribe: () => { },
        dispatch: () => { },
      }}
      >
        <Todo />
      </Provider>
    )
    expect(mountToJson(tree)).toMatchSnapshot();
  });
});