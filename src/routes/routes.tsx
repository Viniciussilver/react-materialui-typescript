import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';


import { useEffect } from 'react';
import { Dashboard } from '../pages';
import { useDrawer } from '../shared/contexts/DrawerContext';
import { MenuLateral } from '../shared/components';

export const App = () => {
  const { handleSetDrawerOptions } = useDrawer();

  useEffect(() => {

    handleSetDrawerOptions([
      {
        path: '/pagina-inicial',
        label: 'Página inicial',
        icon: 'home'
      }
      
    ]);
  }, []);
 
  return (
    <Router>
      <Routes>
        <Route
          path='/pagina-inicial'
          element={
            <MenuLateral>
              <Dashboard />

            </MenuLateral>
          }
        />
        <Route path='*' element={<Navigate to='pagina-inicial' />} />
      </Routes>
    </Router>
  );
};
