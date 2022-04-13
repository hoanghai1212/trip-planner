import create, { SetState, StateCreator } from 'zustand';
import { persist, PersistOptions } from 'zustand/middleware';

import { UserProfileDto } from '../interfaces/services/IAuthService';

export interface AuthStoreState {
  accessToken?: string;
  userProfile?: UserProfileDto;

  setAuthState?: (state: Partial<Omit<AuthStoreState, 'setAuthState'>>) => void;
}

type MyPersist = (
  config: StateCreator<AuthStoreState>,
  options: PersistOptions<AuthStoreState>
) => StateCreator<AuthStoreState>;

export const useAuthStore = create<AuthStoreState>(
  (persist as MyPersist)(
    (set: SetState<Omit<AuthStoreState, 'setAuthState'>>) => ({
      accessToken: undefined,
      userProfile: undefined,

      setAuthState: (state) => {
        set(state);
      },
    }),
    {
      name: 'auth-store',
    }
  )
);
