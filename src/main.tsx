import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './routes/routes';
import { DrawerProvider } from './shared/contexts/DrawerContext';
import { AppThemeProvider } from './shared/contexts/ThemeContext';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AppThemeProvider>
      <DrawerProvider>
        <App />
      </DrawerProvider>
    </AppThemeProvider>
  </React.StrictMode>
);
