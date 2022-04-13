import { Burger, Button, Group, Header, Text, useMantineTheme } from '@mantine/core';
import { useNavigate } from 'react-router';

import Styles from './styles.module.scss';

import useAuthAdapter from '@/shared/adapters/useAuthAdapter';
import PathnameConst from '@/shared/constants/PathnameConst';

import useLayoutAdapter from '../adapters/useLayoutAdapter';
import LogoSVG from '../../svg/LogoSVG';

export default function AppHeader() {
  const navigate = useNavigate();
  const theme = useMantineTheme();
  const { navbarOpened, setNavbarOpened, openLoginModal } = useLayoutAdapter();
  const { authenticated, userProfile, logout } = useAuthAdapter();

  return (
    <Header height={80} className={Styles.Header}>
      <Burger
        className={Styles.Burger}
        opened={navbarOpened}
        onClick={() => setNavbarOpened(!navbarOpened)}
        size='sm'
        color={theme.colors.gray[6]}
        mr='xl'
      />

      <LogoSVG className={Styles.Logo} width={40} onClick={() => navigate(PathnameConst.home)} />

      {authenticated ? (
        <Group position='apart'>
          <Group className={Styles.UserProfile} spacing={4}>
            <Text>{userProfile?.email}</Text>
            <Text weight='bold' transform='uppercase'>
              [{userProfile?.role}]
            </Text>
          </Group>
          <Button onClick={logout}>Logout</Button>
        </Group>
      ) : (
        <Button className={Styles.LoginBtn} onClick={openLoginModal}>
          Login
        </Button>
      )}
    </Header>
  );
}
