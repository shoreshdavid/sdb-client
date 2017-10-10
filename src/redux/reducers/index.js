import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import { announcements } from './announcements';
import { articles } from './articles';
import { auth } from './auth';
import { products } from './products';
import { services } from './services';
import { users } from './users';

export const rootReducer = combineReducers({
  form,
  announcements,
  articles,
  auth,
  products,
  services,
  users,
});
