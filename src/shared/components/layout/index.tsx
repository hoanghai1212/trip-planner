import { AppShell } from '@mantine/core';
import { Fragment } from 'react';
import { Outlet } from 'react-router';

import useLayoutAdapter from './adapters/useLayoutAdapter';
import AppFooter from './footer';
import AppHeader from './header';
import AppNavBar from './navbar';
import LoginModal from '../modal/login-modal';

export default function AppLayout() {
  const { loginModalOpened, closeLoginModal } = useLayoutAdapter();

  return (
    <Fragment>
      <AppShell fixed navbarOffsetBreakpoint='sm' navbar={<AppNavBar />} footer={<AppFooter />} header={<AppHeader />}>
        <Outlet />
      </AppShell>

      {/* Modal Area */}
      <LoginModal opened={loginModalOpened} onClose={closeLoginModal} />
    </Fragment>
  );
}
