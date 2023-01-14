import { LinearProgress } from '@mui/material';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { FerramentasDeDetalhes } from '../../shared/components';
import { LayoutBase } from '../../shared/layout/layoutBase';
import { PessoasService } from '../../shared/services/pessoas';


export const DetalheDePessoas = () => {
  const navigate = useNavigate();
  const { id } = useParams<'id'>();

  const [ isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState('');

  useEffect(() => {

    if(id !== 'nova') { 
      setIsLoading(true);

      PessoasService.getById(Number(id))
        .then( res => {
          setIsLoading(false);
          
          if( res instanceof Error) {
            alert(res.message);
            navigate('/pessoas');
          } else {
            setName(res.nomeCompleto);
            console.log(res);
          }
        });
    }
  }, [id]);

  const handleSave = () => console.log('save');

  const handleDelete = (id: number) => {

    if(confirm('Realmente deseja apagar? ')) {

      PessoasService.deleteById(id)
        .then( res => {
          if(res instanceof Error) {
            alert(res.message);
          } else {
            alert('Registro apagado com sucesso!');
            navigate('/pessoas');
          }
        });
    }
  };


 

  return (
    <LayoutBase title={ name ? `${name}` : 'Nova pessoa'}
      barraDeFerramentas={(
        <FerramentasDeDetalhes 
          textoBotaoNovo='Nova'
          mostrarBotaoSalvarEFechar
          mostrarBotaoNovo={id !== 'nova'}
          mostrarBotaoApagar={id !== 'nova'}

          aoClicarEmApagar={() => handleDelete(Number(id))}
          aoClicarEmSalvar={handleSave}
          aoClicarEmVoltar={() => navigate('/pessoas')}
          aoClicarEmNovo={() => navigate('/pessoas/detalhe/nova')}
          aoClicarEmSalvarEFechar={handleSave}     />
      )}
    >

      { isLoading && (
        <LinearProgress variant='indeterminate' />
      )}
      <div>ola</div>
    </LayoutBase>
  );
}; 