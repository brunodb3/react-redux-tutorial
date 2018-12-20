# React + Redux tutorial

by [@brunodb3](https://github.com/brunodb3)

![React + Redux](https://miro.medium.com/max/1200/0*1p4U99DAhsOHqX-m.jpg)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

The intent of this project is to create a basic React App using Redux, to understand how it works.

### Note

There's some libraries in this project that are either deprecated or outdated. `react-router-redux` is one of them. I chose to use them for learning purposes. In the future, I will create more projects with different libraries.

## Folder Structure

The folder structure of this application was created based on [@alexmngn post on Medium](https://medium.com/@alexmngn/how-to-better-organize-your-react-applications-2fd3ea1920f1).

Example structure:

```
/src
  /components
    /Button
    /Notifications
      /components
        /ButtonDismiss
          /images
          /locales
          /specs
          /index.js
          /styles.scss
      /index.js
      /styles.scss
  /scenes
    /Home
      /components
        /ButtonLike
      /services
        /processData
      /index.js
      /styles.scss
    /Sign
      /components
        /FormField
      /scenes
        /Login
        /Register
          /locales
          /specs
          /index.js
          /styles.scss
  /services
    /api
    /geolocation
    /session
      /actions.js
      /index.js
      /reducer.js
    /users
      /actions.js
      /api.js
      /reducer.js
  index.js
  store.js
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run commit`

Creates a new commit using on Commitizen, to make standard commit messages. Works really well with standard-version (see below - `release` script).

For more information, check the [Commitizen repository](https://github.com/commitizen/cz-cli)

### `npm run release`

Creates a new release, bumping the project version and adding changes to `CHANGELOG.md`, according to commit messages.

For more information, check the [Standard Version repository](https://github.com/conventional-changelog/standard-version)

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## Useful links

I followed mainly one tutorial - [React Redux Tutorial for Begginers by Valentino Gagliardi](https://www.valentinog.com/blog/react-redux-tutorial-beginners/), but there's a few other useful links that helped with the creation of this project, listed below:

- [Thunks in Redux](https://medium.com/fullstack-academy/thunks-in-redux-the-basics-85e538a3fe60)
- [Debug React without leaving VSCode](https://medium.com/@auchenberg/live-edit-and-debug-your-react-apps-directly-from-vs-code-without-leaving-the-editor-3da489ed905f)
- [Material UI - CSS framework for React](https://material-ui.com)
- [Getting Started with Redux by Dan Abramov](https://egghead.io/courses/getting-started-with-redux)
- [Why use super(props) in the constructor method](https://overreacted.io/why-do-we-write-super-props/)
- [JSON Placeholder API - for testing RESTful API calls](https://jsonplaceholder.typicode.com/)
- [React Router Redux - React Routing with Redux states](https://github.com/reactjs/react-router-redux)
- [Fixing an error with React Router - using an older version](https://github.com/ReactTraining/react-router/issues/4477#issuecomment-278116607)
- [Stack Overflow answer about async calls in Redux - using Thunk middleware](https://stackoverflow.com/a/35415559)
- [Make imports look nicer - a few different approaches - this project uses number 5. The Environment](https://gist.github.com/branneman/8048520)

## Screenshots

[![Home](https://i.postimg.cc/KvcwvKVM/image.png)](https://postimg.cc/WtKX54sN)

[![Articles](https://i.postimg.cc/3wjFv10J/image.png)](https://postimg.cc/3yRGMgZP)

[![Users](https://i.postimg.cc/6qCvk5V6/image.png)](https://postimg.cc/ct4CYW5P)
