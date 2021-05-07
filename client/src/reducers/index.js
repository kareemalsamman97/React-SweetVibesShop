import { combineReducers } from 'redux';

import posts from './posts';
import auth from './auth';
import orders from './orders';
import notiys from './notification.js';
export const reducers = combineReducers({ posts, auth , orders , notiys});
