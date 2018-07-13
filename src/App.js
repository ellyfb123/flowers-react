import React from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import {
  ConnectedRouter,
  routerMiddleware
} from 'react-router-redux';

import reducers from "./reducers";
import Router from './components/Router/Router';

const history = createHistory();

const middleware = routerMiddleware(history);

const store = createStore(
  combineReducers({
    ...reducers,
  }),
  applyMiddleware(middleware)
);

const App = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
        <Router />
    </ConnectedRouter>
  </Provider>
);

export default App;