import { Navigate, RouteObject } from 'react-router';

import MyPlan from '@/app/my-plan';
import Sample from '@/app/sample';

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
      element: <Sample />,
    },

    {
      path: PathnameConst.myPlans,
      element: <MyPlan />,
    },
  ],
};
