import { MantineProvider } from '@mantine/core';
import { NotificationsProvider } from '@mantine/notifications';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import '@/shared/scss/main.scss';

import App from './app';

const container = document.getElementById('root');

const root = container && createRoot(container);

root?.render(
  <StrictMode>
    <BrowserRouter>
      <MantineProvider theme={{ colorScheme: 'light' }}>
        <NotificationsProvider>
          <App />
        </NotificationsProvider>
      </MantineProvider>
    </BrowserRouter>
  </StrictMode>
);
