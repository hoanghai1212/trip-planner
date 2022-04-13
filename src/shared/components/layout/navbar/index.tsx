import { Button, Navbar, Stack } from '@mantine/core';
import { useLocation, useNavigate } from 'react-router';
import { Dashboard } from 'tabler-icons-react';

import PathnameConst from '@/shared/constants/PathnameConst';

import useLayoutAdapter from '../adapters/useLayoutAdapter';
export default function AppNavBar() {
  const navigate = useNavigate();
  const location = useLocation();
  const { navbarOpened } = useLayoutAdapter();

  return (
    <Navbar p='md' hiddenBreakpoint='sm' hidden={!navbarOpened} width={{ sm: 200, lg: 240 }}>
      <Stack>
        <Button
          leftIcon={<Dashboard />}
          variant={location.pathname.startsWith('/dashboard') ? 'filled' : 'outline'}
          onClick={() => navigate(PathnameConst.dashboard)}
        >
          Dashboard
        </Button>
      </Stack>
    </Navbar>
  );
}
