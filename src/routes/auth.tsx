// import { lazy } from 'react';
import { Outlet } from 'react-router-dom';
import AuthGuard from '../guards/Authguard';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

export const authRoutes = [
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
];
