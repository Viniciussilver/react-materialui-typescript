import { FerramentasDaListagem, FerramentasDeDetalhes } from '../../shared/components';
import { LayoutBase } from '../../shared/layout/layoutBase';

export const Dashboard = () => {
  return (
    <LayoutBase
      title='Página inicial'
      barraDeFerramentas={
        <FerramentasDeDetalhes />
      }
    >
      <p>teste</p>
    </LayoutBase>
  );
};
