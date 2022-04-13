import { useEffect } from 'react';

import useAuthAdapter from '../../shared/adapters/useAuthAdapter';

export default function Dashboard() {
  const { accessToken } = useAuthAdapter();

  useEffect(() => {
    if (!accessToken) {
      // TODO: show login modal
    }
  }, []);

  return <div>Dashboard</div>;
}
