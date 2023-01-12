import { Navigate, useNavigate, useParams } from 'react-router-dom';

import { FerramentasDeDetalhes } from '../../shared/components';
import { LayoutBase } from '../../shared/layout/layoutBase';


export const DetalheDePessoas = () => {
  const navigate = useNavigate();
  const { id } = useParams<'id'>();

  console.log(id);

  const handleSave = () => console.log('save');

  return (
    <LayoutBase title='Detalhe de pessoa' 
      barraDeFerramentas={(
        <FerramentasDeDetalhes 
          textoBotaoNovo='Nova'
          mostrarBotaoSalvarEFechar
          mostrarBotaoNovo={id !== 'nova'}
          mostrarBotaoApagar={id !== 'nova'}

          aoClicarEmApagar={handleSave}
          aoClicarEmSalvar={handleSave}
          aoClicarEmVoltar={() => navigate('/pessoas')}
          aoClicarEmNovo={() => navigate('/pessoas/detalhe/nova')}
          aoClicarEmSalvarEFechar={handleSave}     />
      )}
    >
      <div>ola</div>
    </LayoutBase>
  );
}; 