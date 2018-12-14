import _ from 'lodash';

import fetchUser from './fetchUser';
import fetchPosts from './fetchPosts';

export default () => async (dispatch, getState) => {
    await dispatch(fetchPosts());
    
    _.chain(getState().posts)
    .map('userId')
    .uniq()
    .forEach(id => dispatch(fetchUser(id)))
    .value();
};