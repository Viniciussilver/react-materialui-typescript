import { LinearProgress, Pagination, TableFooter } from '@mui/material';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { FerramentasDaListagem } from '../../shared/components';
import { Environment } from '../../shared/environment';
import { useDebounce } from '../../shared/hooks/useDebounce';
import { LayoutBase } from '../../shared/layout/layoutBase';
import { PessoasService, TListagemPessoa } from '../../shared/services/pessoas';


const initialTotalCount = 0;

export const ListagemDePessoas: React.FC = () => {
  const [rows, setRows] = useState<TListagemPessoa[]>([]);
  const [totalCount, setTotalCount] = useState(initialTotalCount);
  const [isLoading, setIsLoading] = useState(true);

  const [searchParams, setSearchParams] = useSearchParams();

  const { debounce } = useDebounce();

  const busca = useMemo(() => { 
    return searchParams.get('search') || ''; 
  }, [searchParams]);

  const pagina = useMemo(() => { 
    return searchParams.get('page') || '1'; 
  }, [searchParams]);

  useEffect(() => {
    setIsLoading(true);

    debounce(() => {
      PessoasService.getAll(pagina, busca) 
        .then( res => { 
    
          if( res instanceof Error) {
            alert(res.message);
          } else {
            console.log(res);
  
            setRows(res.data);
            setTotalCount(res.totalCount);
          }
        }).finally(() => setIsLoading(false));
    });

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [busca, pagina]);


  return (
    <LayoutBase 
      title='Listagem de pessoas' 
      barraDeFerramentas={(
        <FerramentasDaListagem
          textoDoBotao='nova'
          mostrarInput
          textoDaBusca={ busca }
          onChange={(e) =>setSearchParams({ search: e, page: '1' }, { replace: true })}
        />
      )}
    >

      <TableContainer component={Paper} variant='outlined' sx={{ m: 1, width: 'auto' }}>
        <Table >
          <TableHead>
            <TableRow>
              <TableCell>Ações</TableCell>
              <TableCell>Nome Completo</TableCell>
              <TableCell>Email</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            { rows.map( row => (
              <TableRow key={row.id}>
                <TableCell >Ações</TableCell>
                <TableCell>{row.nomeCompleto}</TableCell>
                <TableCell>{row.email}</TableCell>
              </TableRow>
            ))}
          </TableBody> 

          { !isLoading && totalCount == 0 && (
            <caption style={{ fontWeight: 500 }}>Registro não encontrado</caption>
          )}

          {
            (totalCount > Environment.LIMITE_DE_LINHAS) && (
              <TableRow >
                <TableCell colSpan={3} >
                  <Pagination 
                    page={Number(pagina)}
                    onChange={(_, page) => setSearchParams({ search: busca, page: page.toString() })}
                    count={Math.ceil(totalCount / Environment.LIMITE_DE_LINHAS)} />
                </TableCell>
              </TableRow>
            )}

          <TableFooter>
            { isLoading && (
              <TableRow >
                <TableCell colSpan={3} sx={{ p: 0 }}>
                  <LinearProgress variant='indeterminate'/>
                </TableCell>
              </TableRow>
            )}

          </TableFooter>
        </Table>
      </TableContainer>
    </LayoutBase>
  );
};