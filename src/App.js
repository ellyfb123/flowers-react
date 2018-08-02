import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import createHistory from 'history/createHashHistory';

import storeConfigure from './store/index';
import Router from './components/Router/Router';

const history = createHistory();
const store = storeConfigure(history);

const App = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
        <Router />
    </ConnectedRouter>
  </Provider>
);

export default App;