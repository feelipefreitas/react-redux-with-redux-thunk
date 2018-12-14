import requestCreator from './base';

export const getPosts = async () => {
    return await requestCreator.get('/posts');
};