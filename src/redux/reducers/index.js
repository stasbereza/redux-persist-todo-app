import { combineReducers } from 'redux';
import { i18nState } from 'redux-i18n';
import itemsReducer from './items';

const rootReducer = combineReducers({
  items: itemsReducer,
  i18nState,
});

export default rootReducer;
