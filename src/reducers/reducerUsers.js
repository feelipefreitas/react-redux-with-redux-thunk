import { stateBase } from './stateReducer';

export default (state = stateBase.users, action) => {
    switch(action.type) {
        case 'FETCH_USER':
            return [...state, action.payload];
        default:
            return state;
    }
};