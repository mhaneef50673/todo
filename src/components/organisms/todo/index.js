import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Button from '../../atoms/button';
import TodoView from '../../molecules/todo-view';
import { toggleTodoStatus, addTodoItem } from '../../../store/actions/todoActions';
import { logout } from '../../../store/actions/loginAction';

const mapStateToProps = state => ({
  todos: state.todoReducer.todos || [],
  token: state.loginReducer.token || '',
});

class Todo extends React.Component {

  onTodoItemClickHandler = (index) => {
    this.props.toggleTodoStatus(index);
  }

  handleLogout = () => {
    this.props.logout();
    this.props.history.push('/login');
  }

  render() {
    const { todos, addTodoItem } = this.props;
    const token = localStorage.getItem('token');
    if (!token) {
      return <Redirect to="/login" />;
    }
    return (
      <React.Fragment>
        <Button buttonText="logout" clickHandler={this.handleLogout} />
        <TodoView
          list={todos}
          onTodoItemClickHandler={this.onTodoItemClickHandler}
          addTodoItem={addTodoItem}
        />
      </React.Fragment>
    )
  }
};

export default connect(mapStateToProps, { toggleTodoStatus, addTodoItem, logout })(Todo);
