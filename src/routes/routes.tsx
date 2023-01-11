/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';


import { Dashboard, ListagemDePessoas } from '../pages';
import { useDrawer } from '../shared/contexts/DrawerContext';

export const App = () => {
  const { handleSetDrawerOptions } = useDrawer();

  useEffect(() => {

    handleSetDrawerOptions([
      {
        path: '/pagina-inicial',
        label: 'Página inicial',
        icon: 'home' 
      },
      {
        path: '/pessoas',
        label: 'Pessoas',
        icon: 'people' 
      }
    ]);

  }, []);
 
  return (
    <Routes>
      <Route path='/pagina-inicial'
        element={(
          <Dashboard />
        )}  
      />
      <Route path='/pessoas'
        element={(
          <ListagemDePessoas />
        )}  
      />
      {/* <Route path='/cidades/detalhe/:id'
        element={(
          <ListagemDeCidades />
        )}  
      /> */}
      <Route path='*' element={<Navigate to='pagina-inicial' />} />
    </Routes>
  );
};
