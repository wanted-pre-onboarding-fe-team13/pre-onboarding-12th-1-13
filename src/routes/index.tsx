import { useRoutes } from 'react-router-dom';
import { SignIn, SignUp, Todo } from '../pages';
import { todoRoutes } from './todo';

const Router = () =>
  useRoutes([
    { path: '/signin', element: <SignIn /> },
    { path: '/signin', element: <SignUp /> },
    ...todoRoutes,
  ]);

export default Router;
