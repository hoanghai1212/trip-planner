import { Navigate, RouteObject } from 'react-router';

import Dashboard from '@/app/dashboard';
import Home from '@/app/home';

import AppLayout from '../components/layout';
import PathnameConst from '../constants/PathnameConst';

export const routes: RouteObject = {
  path: '/',
  element: <AppLayout />,
  children: [
    {
      path: '*',
      element: <Navigate to={PathnameConst.home} />,
    },

    {
      path: PathnameConst.home,
      element: <Home />,
    },

    {
      path: PathnameConst.dashboard,
      element: <Dashboard />,
    },
  ],
};
