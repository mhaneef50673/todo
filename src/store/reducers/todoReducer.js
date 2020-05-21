import { ADD_ITEM, PENDING, COMPLETED, TOGGLE_ITEM } from '../../constants';

const initialState = {
  todos: [
    {
      description: 'item 1',
      status: 'completed',
    },
    {
      description: 'item 2',
      status: 'completed',
    }
  ],
}

const todoReducer = (state, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return Object.assign({}, state, {
        todos: [
          ...state.todos,
          {
            text: action.text,
            status: PENDING,
          }
        ],
      });
    case TOGGLE_ITEM:
      return Object.assign({}, state, {
        todos: state.todos.map((todo, index) => {
          if (index === action.index) {
            return Object.assign({}, todo, {
              status: todo.status === PENDING ? COMPLETED : PENDING,
            });
          }
          return todo;
        })
      })
    default:
      return initialState;
  }
}

export default todoReducer;
