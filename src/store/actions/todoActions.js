import { createAction } from './index';
import { ADD_ITEM, TOGGLE_ITEM } from '../../constants';

export function toggleTodoStatus(index) {
  return (dispatch) => {
    dispatch(createAction(TOGGLE_ITEM, {
        index,
      })
    )
  }
};

export function addTodoItem(itemName) {
  return (dispatch) => {
    dispatch(createAction(ADD_ITEM, {
        itemName,
      })
    )
  }
}