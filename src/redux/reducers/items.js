import {
  ADD_ITEM,
  DELETE_ITEM,
  SET_ACTIVE_ITEM,
  ADD_COMMENT,
} from 'redux/actions/types';

const initialState = [];

export default function itemsReducer(state = initialState, { type, payload }) {
  // console.log(type, payload);
  switch (type) {
    case ADD_ITEM:
      return [...state, payload];
    case DELETE_ITEM:
      return state.filter(item => item.id !== payload);
    case SET_ACTIVE_ITEM:
      return state.map(item => ({
        ...item,
        isActive: item.id === payload,
      }));
    case ADD_COMMENT:
      return state.map(item =>
        item.isActive
          ? {
              ...item,
              comments: [...item.comments, payload],
            }
          : item,
      );
    default:
      return state;
  }
}
