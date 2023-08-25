import { Navigate, Outlet, useRoutes } from 'react-router-dom';

import AuthGuard from '../guards/AuthGuard';
import TodoGuard from '../guards/TodoGuard';

import { TodoProvider } from '../context/TodoProvider';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Todo from '../pages/Todo';

const Router = () =>
  useRoutes([
    { path: '/', element: <Navigate to="/todo" replace /> },
    {
      path: '/',
      element: (
        <AuthGuard>
          <Outlet />
        </AuthGuard>
      ),
      children: [
        { path: '/signin', element: <SignIn /> },
        { path: '/signup', element: <SignUp /> },
      ],
    },
    {
      path: '/todo',
      element: (
        <TodoGuard>
          <TodoProvider>
            <Todo />
          </TodoProvider>
        </TodoGuard>
      ),
    },
    { path: '*', element: <Navigate to="/todo" replace /> },
  ]);

export default Router;
