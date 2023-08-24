import { Navigate, useRoutes } from 'react-router-dom';
import { todoRoutes } from './todo';
import { authRoutes } from './auth';

const Router = () =>
  useRoutes([
    { path: '/', element: <Navigate to="/signin" replace /> },
    ...authRoutes,
    ...todoRoutes,
  ]);

export default Router;
