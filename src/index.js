// src/js/index.js

// importing modules
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

// custom modules
import store from './js/store/index'
import App from './js/components/App'

// rendering the initial app
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app') // HTML markup found at /public/index.html
)