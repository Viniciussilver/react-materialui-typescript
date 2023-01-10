import { Button } from '@mui/material';
import { useEffect, useMemo, useState } from 'react';
import { Navigate, useSearchParams } from 'react-router-dom';

import { FerramentasDaListagem } from '../../shared/components';
import { LayoutBase } from '../../shared/layout/layoutBase';
import { PessoasService } from '../../shared/services/pessoas';


export const ListagemDePessoas: React.FC = () => {
  const [lastRequest, setLastQuequest] = useState<null | number>(null);
  const [searchParams, setSearchParams] = useSearchParams();

  const busca = useMemo(() => {

    return searchParams.get('search') || ''; 
  }, [searchParams]);



  useEffect(() => {

    const currentyDate = Date.now();

    if(lastRequest !== null && currentyDate - lastRequest < 5000) {
      return;
    }

    setLastQuequest(currentyDate);

    PessoasService.getAll() 
      .then( res => {
  
        if( res instanceof Error) {
          alert(res.message);
          return;
        }
  
        console.log(res);
      });

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [busca]);


  return (
    <LayoutBase 
      title='Listagem de pessoas' 
      barraDeFerramentas={(
        <FerramentasDaListagem
          textoDoBotao='nova'
          mostrarInput
          textoDaBusca={ busca }
          onChange={(e) => setSearchParams({ search: e }, { replace: true })}
        />
      )}
    >
    </LayoutBase>
  );
};