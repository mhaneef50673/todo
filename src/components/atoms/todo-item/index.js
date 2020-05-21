import React, { memo } from 'react';
import PropTypes from 'prop-types';
import {
  PENDING,
  COMPLETED,
} from '../../../constants';
import './todo-item.css';

const BLOCK_NAME = 'todo-item';

const TodoItem = ({name, status, index, onTodoItemClickHandler}) => {
  const clickHandler = () => {
    onTodoItemClickHandler(index);
  };

  return(
    <div className={`${BLOCK_NAME} ${status}`} onClick={clickHandler}>
      <span className="text">{name}</span>
      <span className="text">{status}</span>
    </div>
  );
};

TodoItem.propTypes = {
  name: PropTypes.string,
  status: PropTypes.oneOf([
    PENDING,
    COMPLETED,
  ]),
  index: PropTypes.number,
  onTodoItemClickHandler: PropTypes.func,
};

export default memo(TodoItem);
