import React from 'react';

const BLOCK_NAME = 'todo-view';

const TodoView = () => {
  return(
    <div className={BLOCK_NAME}>
      <span>item 1</span>
      <span>Completed</span>
    </div>
  );
};

export default TodoView;
