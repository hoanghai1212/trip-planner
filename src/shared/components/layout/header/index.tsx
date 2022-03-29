import { MenuOutlined } from '@ant-design/icons';
import { Drawer, Menu } from 'antd';
import { Grid } from 'antd';
import { Header } from 'antd/lib/layout/layout';
import { Fragment, useCallback, useMemo, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';

import Styles from './styles.module.scss';

import LogoSVG from '@/shared/components/svg/LogoSVG';
import NavigationConst, {
  defaultKey,
} from '@/shared/constants/NavigationConst';
import { classNames } from '@/shared/utils/styleUtils';

const { useBreakpoint } = Grid;

export default function AppHeader() {
  const navigate = useNavigate();
  const location = useLocation();
  const { lg } = useBreakpoint();

  const [visible, setVisible] = useState(false);

  const defaultSelectedKeys = useMemo(() => {
    return location.pathname.replace('/', '') || defaultKey;
  }, [location.pathname]);

  const renderMenuItem = useCallback(
    () =>
      NavigationConst.map(({ key, title, url }) => (
        <Menu.Item key={key} onClick={() => handleNavItemClick(url)}>
          {title}
        </Menu.Item>
      )),
    [NavigationConst]
  );

  return (
    <Header className={classNames(Styles.Header)}>
      <LogoSVG width={40} />

      {!lg ? (
        <Fragment>
          <MenuOutlined onClick={showDrawer} />
          <Drawer
            className={Styles.MenuDrawer}
            width='300px'
            title={
              <Fragment>
                <LogoSVG width={40} />
              </Fragment>
            }
            closable={false}
            placement='left'
            onClose={onClose}
            visible={visible}
            key='Navigation'
          >
            <Menu defaultSelectedKeys={[defaultSelectedKeys]} mode='inline'>
              {renderMenuItem()}
            </Menu>
          </Drawer>
        </Fragment>
      ) : (
        <Menu
          className={Styles.MenuDesktop}
          defaultSelectedKeys={[defaultSelectedKeys]}
          mode='horizontal'
        >
          {renderMenuItem()}
        </Menu>
      )}
    </Header>
  );

  function showDrawer() {
    setVisible(true);
  }

  function onClose() {
    setVisible(false);
  }

  function handleNavItemClick(to: string) {
    navigate(to);
    setVisible(false);
  }
}
