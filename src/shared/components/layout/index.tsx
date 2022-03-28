import { Layout } from 'antd';
import { Content } from 'antd/lib/layout/layout';
import { Outlet } from 'react-router';

import AppFooter from './footer';
import AppHeader from './header';

export default function AppLayout() {
  return (
    <Layout>
      <AppHeader />
      <Content>
        <Outlet />
      </Content>
      <AppFooter />
    </Layout>
  );
}
