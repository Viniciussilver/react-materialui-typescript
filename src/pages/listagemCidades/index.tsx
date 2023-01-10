import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';

import { FerramentasDaListagem } from '../../shared/components';
import { LayoutBase } from '../../shared/layout/layoutBase';


export const ListagemDeCidades: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const busca = useMemo(() => {

    return searchParams.get('search') || ''; 
  }, [searchParams]);


  return (
    <LayoutBase 
      title='Listagem de cidades' 
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