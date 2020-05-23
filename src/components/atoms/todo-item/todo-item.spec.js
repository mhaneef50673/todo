import React from 'react';
import { mount } from 'enzyme';
import { mountToJson} from 'enzyme-to-json';
import TodoItem from './index';

describe('TodoItem Component', () => {
  const onTodoItemClickHandler = jest.fn();
  it('should render the component', () => {
    let tree = mount(
      <TodoItem
        name="Item 1"
        status="PENDING"
        index={0}
        onTodoItemClickHandler={onTodoItemClickHandler} 
      />
    )
    expect(mountToJson(tree)).toMatchSnapshot();
    tree = mount(
      <TodoItem
        name="Item 1"
        status="COMPLETED"
        index={0}
        onTodoItemClickHandler={onTodoItemClickHandler} 
      />
    )
    expect(mountToJson(tree)).toMatchSnapshot();
  });
  it('should run onTodoItemClickHandler on click', () => {
    const tree = mount(
      <TodoItem
        name="Item 1"
        status="PENDING"
        index={0}
        onTodoItemClickHandler={onTodoItemClickHandler} 
      />
    )
    const div = tree.find('.todo-item');
    div.simulate('click');
    expect(onTodoItemClickHandler).toBeCalled();
  })
});