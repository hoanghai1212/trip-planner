import { MenuOutlined } from '@ant-design/icons';
import { Drawer, Menu } from 'antd';
import { Header } from 'antd/lib/layout/layout';
import { Fragment, useState } from 'react';
import { useNavigate } from 'react-router';

import Styles from './styles.module.scss';

import LogoSVG from '@/shared/assets/logo.svg';
import NavigationConst, {
  defaultKey,
} from '@/shared/constants/NavigationConst';

export default function AppHeader() {
  const navigate = useNavigate();

  const [visible, setVisible] = useState(false);

  return (
    <Header className={Styles.Header}>
      <img src={LogoSVG} alt='Logo' />
      <MenuOutlined onClick={showDrawer} />
      <Drawer
        className={Styles.Menu}
        width='300px'
        title={
          <Fragment>
            <img src={LogoSVG} alt='Logo' />
            <p className='bold lg'>JOY</p>
          </Fragment>
        }
        closable={false}
        placement='left'
        onClose={onClose}
        visible={visible}
        key='Navigation'
      >
        <Menu defaultSelectedKeys={[defaultKey]} mode='inline'>
          {NavigationConst.map(({ key, title, url }) => (
            <Menu.Item key={key} onClick={() => handleNavItemClick(url)}>
              {title}
            </Menu.Item>
          ))}
        </Menu>
      </Drawer>
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
