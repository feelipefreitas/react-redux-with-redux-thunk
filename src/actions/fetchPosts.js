import { getPosts } from '../apis/jsonPlaceholder/requests';

export default () => async dispatch => {
    const response = await getPosts();
    dispatch({ type: 'FETCH_POSTS', payload: response.data });
};