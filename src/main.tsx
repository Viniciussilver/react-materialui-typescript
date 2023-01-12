import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { App } from './routes/routes';
import { MenuLateral } from './shared/components';
import { DrawerProvider } from './shared/contexts/DrawerContext';
import { AppThemeProvider } from './shared/contexts/ThemeContext';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>  
    <AppThemeProvider>
      <DrawerProvider>
        <MenuLateral>
          <App />
        </MenuLateral>
      </DrawerProvider>
    </AppThemeProvider>
  </BrowserRouter>
);
