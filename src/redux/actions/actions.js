import { v4 } from 'uuid';
import { ADD_ITEM, DELETE_ITEM, ADD_COMMENT, SET_ACTIVE_ITEM } from './types';

export const addItem = text => ({
  type: ADD_ITEM,
  payload: { id: v4(), text, comments: [], isActive: false },
});

export const deleteItem = id => ({
  type: DELETE_ITEM,
  payload: id,
});

export const setActiveItem = id => ({
  type: SET_ACTIVE_ITEM,
  payload: id,
});

export const addComment = text => ({
  type: ADD_COMMENT,
  payload: { id: v4(), text },
});
