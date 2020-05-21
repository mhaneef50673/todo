import React from 'react';
import TodoView from '../../molecules/todo-view';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  todos: state.todoReducer.todos || [],
});

class Todo extends React.Component {
  render () {
    const { todos } = this.props;
    return (
      <TodoView list={todos} />
    )
  }
};

export default connect(mapStateToProps, {})(Todo);
