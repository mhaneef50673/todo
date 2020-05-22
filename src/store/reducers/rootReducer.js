import { combineReducers } from 'redux';
import todoReducer from './todoReducer';
import loginReducer from './loginReducer';

const appReducer = combineReducers({
  todoReducer,
  loginReducer,
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
}

export default rootReducer;