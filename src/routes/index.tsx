import { useRoutes } from 'react-router-dom';
import { SignIn, SignUp, Todo } from '../pages';

const Router = () =>
  useRoutes([
    { path: '/todo', element: <Todo /> },
    { path: '/signin', element: <SignIn /> },
    { path: '/signin', element: <SignUp /> },
  ]);

export default Router;
