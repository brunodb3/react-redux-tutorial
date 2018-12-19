// src/js/components/App.js

// importing modules
import React from 'react';
import { Route, Switch } from 'react-router';

// custom modules
import NavBar from './components/navbar';

// routes
import HomeRoutes from './routes/HomeRoutes';
import UserRoutes from './routes/UserRoutes';
import ArticleRoutes from './routes/ArticleRoutes';

// creating the component
const App = () => (
  <div>
    <NavBar />
    <Switch>
      {/* Declaring the app's routes */}
      <Route exact path={UserRoutes.DEFAULT.pathname} component={UserRoutes.DEFAULT.component} />
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
