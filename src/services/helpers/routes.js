// src/services/helpers/routes.js

// scenes
import HomeScene from '../../scenes/Home';
import TodosScene from '../../scenes/Todos';
import UsersScene from '../../scenes/Users';

// exporting the app's routes
export default {
  HOME: {
    path: `/`,
    title: 'Home',
    scene: HomeScene,
  },
  TODOS: {
    path: `/todos`,
    title: 'Todos',
    scene: TodosScene,
  },
  USERS: {
    path: `/users`,
    title: 'Users',
    scene: UsersScene,
  },
};
