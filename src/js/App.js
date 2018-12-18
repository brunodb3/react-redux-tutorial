// src/js/components/App.js

// importing modules
import React from 'react';
import { Route, Switch } from 'react-router';

// custom modules
import NavBar from './components/navbar';
import HomeRoutes from './routes/HomeRoutes';
import ArticleRoutes from './routes/ArticleRoutes';

// creating the component
const App = () => (
  <div>
    <NavBar />
    <Switch>
      {/* Declaring the app's routes */}
      <Route exact path={HomeRoutes.DEFAULT.pathname} component={HomeRoutes.DEFAULT.component} />
      <Route
        exact
        path={ArticleRoutes.DEFAULT.pathname}
        component={ArticleRoutes.DEFAULT.component}
      />
    </Switch>
  </div>
);

// exporting the component
export default App;
