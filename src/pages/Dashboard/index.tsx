import { FerramentasDaListagem } from '../../shared/components';
import { LayoutBase } from '../../shared/layout/layoutBase';

export const Dashboard = () => {
  return (
    <LayoutBase
      title='Página inicial'
      barraDeFerramentas={
        <FerramentasDaListagem mostrarInput textoDoBotao='ola' />
      }
    >
      <p>teste</p>
    </LayoutBase>
  );
};
