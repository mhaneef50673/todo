import React from 'react';
import PropTypes from 'prop-types';
import AddItemForm from './add-item-form';
import TodoItem from '../../atoms/todo-item';
import Button from '../../atoms/button';
import Modal from '../../atoms/modal';
import './todo-view.css';
import { PENDING, COMPLETED } from '../../../constants';

class TodoView extends React.Component {

  state = {
    showModal: false,
  }

  addItemHandler = () => {
    this.setState({
      showModal: true,
    })
  }

  onSave = itemName => {
    this.props.addTodoItem(itemName);
    this.setState({
      showModal: false,
    });
  }

  modalCloseHandler = () => {
    this.setState({
      showModal: false,
    });
  }

  render() {
    const { list, onTodoItemClickHandler } = this.props;
    const { showModal } = this.state;
    return (
      <React.Fragment>
        <h1> Todo List </h1>
        <div className="todo-view">
          {
            list.map((todo, index) => (
              <TodoItem
                key={index}
                index={index}
                name={todo.name}
                status={todo.status}
                onTodoItemClickHandler={onTodoItemClickHandler}
              />
            ))
          }
        </div>
        <div className="add-item">
          <div className="center">
            <Button buttonText="Add Item" clickHandler={this.addItemHandler} />
          </div>
        </div>
        <div className="modal-container">
          <Modal
            title="Enter item Details"
            isVisible={showModal}
          >
            <AddItemForm onClose={this.modalCloseHandler} onSave={this.onSave} />
          </Modal>
        </div>
      </React.Fragment>
    )
  }
}

TodoView.propTypes = {
  onTodoItemClickHandler: PropTypes.func,
  list: PropTypes.arrayOf(PropTypes.shape({
    description: PropTypes.string,
    status: PropTypes.oneOf([
      PENDING,
      COMPLETED
    ])
  })),
}

export default TodoView;