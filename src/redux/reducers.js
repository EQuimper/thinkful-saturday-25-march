import { combineReducers } from 'redux';

import { PostsReducer } from '../modules';

export default combineReducers({
  posts: PostsReducer
});