import React, { memo } from 'react';
import PropTypes from 'prop-types';
import {
  PENDING,
  COMPLETED,
} from '../../../constants';
import './todo-item.css';

const BLOCK_NAME = 'todo-item';

const TodoItem = ({description, status}) => {
  return(
    <div className={`${BLOCK_NAME} ${status}`}>
      <span className="text">{description}</span>
      <span className="text">{status}</span>
    </div>
  );
};

TodoItem.propTypes = {
  description: PropTypes.string,
  status: PropTypes.oneOf([
    PENDING,
    COMPLETED,
  ])
};

export default memo(TodoItem);
