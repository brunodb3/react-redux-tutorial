// src/App.js

// importing modules
import React from 'react';
import { Route, Switch } from 'react-router';

// custom modules
import Routes from 'services/helpers/routes';

// stylesheets
import './styles.css';

// creating the component
const App = () => (
  <div className="app">
    <Switch>
      {/* Declaring the app's routes */}
      <Route exact path={Routes.HOME.path} component={Routes.HOME.scene} />
      <Route exact path={Routes.TODOS.path} component={Routes.TODOS.scene} />
      <Route exact path={Routes.USERS.path} component={Routes.USERS.scene} />
    </Switch>
  </div>
);

// exporting the component
export default App;
