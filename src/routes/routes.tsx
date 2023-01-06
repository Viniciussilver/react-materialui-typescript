/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';


import { Dashboard } from '../pages';
import { MenuLateral } from '../shared/components';
import { useDrawer } from '../shared/contexts/DrawerContext';

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
        <Route path='/pagina-inicial'
          element={(
            <MenuLateral>
              <Dashboard />

            </MenuLateral>
          )}  
        />
        
        <Route path='*' element={<Navigate to='pagina-inicial' />} />
      </Routes>
    </Router>
  );
};
