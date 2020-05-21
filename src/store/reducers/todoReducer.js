import { ADD_ITEM, PENDING, COMPLETED, TOGGLE_ITEM } from '../../constants';

const initialState = {
  todos: [
    {
      name: 'item 1',
      status: 'completed',
    },
    {
      name: 'item 2',
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
            name: action.payload.itemName,
            status: PENDING,
          }
        ],
      });
    case TOGGLE_ITEM:
      return Object.assign({}, state, {
        todos: state.todos.map((todo, index) => {
          if (index === action.payload.index) {
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
