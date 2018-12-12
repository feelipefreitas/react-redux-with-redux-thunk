import { combineReducers } from "redux";

import reducerPost from './reducerPost';

export default combineReducers({
    posts: reducerPost
});