import React from 'react';
import TodoItem from '../../atoms/todo-item';
import Button from '../../atoms/button';
import './todo-view.css';

class TodoView extends React.Component {

  addItemHandler = () => {
    alert('clicked');
  }

  render() {
    const { list } = this.props;
    return (
      <React.Fragment>
        <h1> Todo List </h1>
        <div className="todo-view">
          {
            list.map(todo => (
              <TodoItem key={todo.description} description={todo.description} status={todo.status} />
            ))
          }
        </div>
        <div className="add-item">
          <div className="center">
            <Button buttonText="Add Item" clickHandler={this.addItemHandler} />
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default TodoView;