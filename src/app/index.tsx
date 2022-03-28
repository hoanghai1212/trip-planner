import { Fragment } from 'react';
import { useRoutes } from 'react-router';

import useCustomAntdTheme from '@/shared/hooks/useCustomAntdTheme';
import { routes } from '@/shared/routes';
export default function App() {
  useCustomAntdTheme();
  const routing = useRoutes([routes]);

  return <Fragment>{routing}</Fragment>;
}
