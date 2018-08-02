import { createStore, combineReducers, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import { History } from 'history';

import * as storage from 'redux-storage';
import createEngine from 'redux-storage-engine-localstorage';
import filter from 'redux-storage-decorator-filter';

import reducers from './reducers';
import middlewares from './middlewares';

const storeConfigure = (history: History) => {
    const reducer = storage.reducer(combineReducers(reducers));
    const router = routerMiddleware(history);

    // bump up storage version if state structure change
    const engine = filter(createEngine('myApp-0.0.1'), [
        'user'
    ]);

    const storeMiddleware = storage.createMiddleware(engine, [], []);

    const createStoreWithMiddleware = applyMiddleware(router, storeMiddleware, ...middlewares)(createStore);

    const store = createStoreWithMiddleware(reducer, {});

    const load = storage.createLoader(engine);
    // will trigger storage load action
    load(store);

    return store;
};

export default storeConfigure;
