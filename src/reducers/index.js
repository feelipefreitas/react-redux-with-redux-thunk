import { combineReducers } from "redux";

import reducerPosts from './reducerPosts';
import reducerUsers from './reducerUsers';

export default combineReducers({
    posts: reducerPosts,
    users: reducerUsers
});