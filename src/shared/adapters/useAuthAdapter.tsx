import { showNotification } from '@mantine/notifications';
import { useMemo } from 'react';

import { LoginDto } from '@/shared/interfaces/services/IAuthService';
import { AuthService } from '@/shared/service/AuthService';
import { useAuthStore } from '@/shared/store/useAuthStore';

export default function useAuthAdapter() {
  const { accessToken, userProfile, setAuthState } = useAuthStore();

  const authService = useMemo(() => AuthService.getInstance(), []);

  return {
    authenticated: Boolean(accessToken),

    accessToken,

    userProfile,

    login: async (loginDto: LoginDto) => {
      try {
        const { accessToken } = await authService.login(loginDto);

        setAuthState?.({ accessToken });
      } catch (error) {
        showNotification({
          id: 'login-error',
          title: 'Login Error!!!',
          color: 'red',
          message: JSON.stringify(error),
          autoClose: 2000,
        });
      }
    },

    logout: () => {
      setAuthState?.({ accessToken: undefined, userProfile: undefined });
      localStorage.removeItem('auth-store');
    },

    getProfile: async () => {
      const userProfileDto = await authService.getProfile();

      setAuthState?.({ userProfile: userProfileDto });
    },
  };
}
