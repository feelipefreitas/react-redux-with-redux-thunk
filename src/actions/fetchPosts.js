export default () => dispatch => {
    dispatch({ type: 'FETCH_POSTS', payload: [] });
};