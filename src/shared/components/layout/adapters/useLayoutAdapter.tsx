import { useLayoutStore } from '../store/useLayoutStore';

export default function useLayoutAdapter() {
  const { navbarOpened, setNavbarOpened, loginModalOpened, setLoginModalOpened } = useLayoutStore();

  const openLoginModal = () => {
    setLoginModalOpened(true);
  };

  const closeLoginModal = () => {
    setLoginModalOpened(false);
  };

  return {
    navbarOpened,
    setNavbarOpened,
    loginModalOpened,
    openLoginModal,
    closeLoginModal,
  };
}
