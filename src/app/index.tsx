import { Fragment } from 'react';
import { useRoutes } from 'react-router';

import { routes } from '@/shared/routes';
export default function App() {
  const routing = useRoutes([routes]);

  return <Fragment>{routing}</Fragment>;
}
