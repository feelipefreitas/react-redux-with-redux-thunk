import requestCreator from './base';

export const getPosts = async () => {
    return await requestCreator.get('/posts');
};

export const getUsers = async id => {
    return await requestCreator.get(`/users/${ id }`);
};