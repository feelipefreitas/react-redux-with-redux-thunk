import { createStore, applyMiddleware, compose } from 'redux';
import reducers from '../reducers';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

const middleWare = [];

middleWare.push(thunk);

const loggerMiddleWare = createLogger({
    predicate: () => process.env.NODE_ENV === 'development'
});

middleWare.push(loggerMiddleWare);

export const store = createStore(reducers, compose(applyMiddleware(...middleWare)));