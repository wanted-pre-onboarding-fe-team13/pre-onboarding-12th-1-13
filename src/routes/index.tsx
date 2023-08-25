import { Navigate, useRoutes } from 'react-router-dom';

import { todoRoutes } from './todo';
import { authRoutes } from './auth';

const Router = () =>
  useRoutes([
    { path: '/', element: <Navigate to="/todo" replace /> },
    ...authRoutes,
    ...todoRoutes,
    { path: '*', element: <Navigate to="/todo" replace /> },
  ]);

export default Router;
