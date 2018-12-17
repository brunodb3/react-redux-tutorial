// src/js/store/index.js

// importing modules
import { createStore } from "redux";

// custom modules
import rootReducer from "../reducers/index";

// creating the redux store, with Redux DevTools extension enabled
// (more at https://github.com/zalmoxisus/redux-devtools-extension)
const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// exporting the store
export default store;