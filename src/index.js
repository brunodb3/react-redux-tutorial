// src/index.js

// importing modules
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { combineReducers } from 'redux';
import { ConnectedRouter, routerReducer } from 'react-router-redux';

// custom modules
import App from './App';
import createStore, { history } from './store';

// reducers
import UserReducer, { userSelectors } from 'services/users/reducer.js';
import TodoReducer, { todosSelectors } from 'services/todos/reducer.js';

// stylesheets
import './styles.css';

// combining the reducers into one
export const reducers = combineReducers({
  [userSelectors.key]: UserReducer,
  [todosSelectors.key]: TodoReducer,
  router: routerReducer,
});

// creating the store tree
const store = createStore(reducers);

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('app') // HTML markup found at /public/index.html
);
