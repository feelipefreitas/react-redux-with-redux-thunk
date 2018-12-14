import { getUsers} from '../apis/jsonPlaceholder/requests';

export default id => async dispatch => {
    const response = await getUsers(id);

    dispatch({ type: 'FETCH_USERS', payload: response.data });
};