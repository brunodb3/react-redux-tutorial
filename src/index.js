// src/js/index.js

// importing modules
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';

// custom modules
import App from './js/App';
import createStore from './js/store';
import { history } from './js/store/createStore';

// creating the store tree
const store = createStore();

// rendering the initial app
render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('app') // HTML markup found at /public/index.html
);
