// src/js/components/App.js

// importing modules
import React from 'react';

// custom modules
import List from './List';
import Form from './Form';

// creating the main App component
// TODO: add a routing component/library
const App = () => (
  <div>
    <div>
      <h2>Articles</h2>
      <List />
    </div>
    <div>
      <h2>Add a new article</h2>
      <Form />
    </div>
  </div>
);

// exporting the component
export default App;
