import React from 'react';
import { mount } from 'enzyme';
import { mountToJson} from 'enzyme-to-json';
import TodoView from './index';
import { todolist } from './data';

describe('TodoView Component', () => {
  const onTodoItemClickHandler = jest.fn();
  it('should render the component', () => {
    const tree = mount(
      <TodoView list={todolist} onTodoItemClickHandler={onTodoItemClickHandler} />
    )
    expect(mountToJson(tree)).toMatchSnapshot();
  });
});