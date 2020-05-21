import React from 'react';
import { connect } from 'react-redux';
import TodoView from '../../molecules/todo-view';
import { toggleTodoStatus, addTodoItem } from '../../../store/actions/todoActions';

const mapStateToProps = state => ({
  todos: state.todoReducer.todos || [],
});

class Todo extends React.Component {

  onTodoItemClickHandler = (index) => {
    this.props.toggleTodoStatus(index);
  }

  render () {
    const { todos, addTodoItem } = this.props;
    return (
      <TodoView
        list={todos}
        onTodoItemClickHandler={this.onTodoItemClickHandler}
        addTodoItem={addTodoItem}
      />
    )
  }
};

export default connect(mapStateToProps, { toggleTodoStatus, addTodoItem } )(Todo);
