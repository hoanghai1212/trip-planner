import create from 'zustand';

export interface LayoutStoreState {
  loginModalOpened: boolean;

  setLoginModalOpened: (loginModalOpened: boolean) => void;

  navbarOpened: boolean;

  setNavbarOpened: (navbarOpened: boolean) => void;
}

export const useLayoutStore = create<LayoutStoreState>((set) => ({
  loginModalOpened: false,

  setLoginModalOpened: (loginModalOpened: boolean) => {
    set({ loginModalOpened });
  },

  navbarOpened: false,

  setNavbarOpened: (navbarOpened) => {
    set({ navbarOpened });
  },
}));
