import { stateBase } from './stateReducer';

export default (state = stateBase, action) => {
    switch(action.type) {
        case 'FETCH_USERS':
            return {...state, users: action.payload};
        default:
            return state;
    }
};