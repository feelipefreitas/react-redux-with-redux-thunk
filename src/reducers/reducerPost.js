import { stateBase } from './stateReducer';

export default (state = stateBase, action) => {
    switch(action.type) {
        case 'FETCH_POSTS':
            return {...state, posts: action.payload};
        default:
            return state;
    }
};