import { getUsers} from '../apis/jsonPlaceholder/requests';

export default id => async dispatch => {
    const response = await getUsers(id);
    console.log("response", response.data)
    dispatch({ type: 'FETCH_USER', payload: response.data });
};