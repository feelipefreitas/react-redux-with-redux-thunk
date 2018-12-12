import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { store } from './store';

import PostsList from './components/PostsList';

ReactDOM.render(
    <Provider store={ store }>
        <PostsList />
    </Provider>
, document.querySelector('#root'));