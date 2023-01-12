import { Box, Button, Divider, Icon, Paper, Skeleton, Typography, useMediaQuery, useTheme } from '@mui/material';

type FerramentasDeDetalhesProps = {
  textoBotaoNovo?: string;

  mostrarBotaoNovo?: boolean;
  mostrarBotaoVoltar?: boolean;
  mostrarBotaoApagar?: boolean;
  mostrarBotaoSalvar?: boolean;
  mostrarBotaoSalvarEFechar?: boolean;

  mostrarBotaoNovoCarregando?: boolean;
  mostrarBotaoVoltarCarregando?: boolean;
  mostrarBotaoApagarCarregando?: boolean;
  mostrarBotaoSalvarCarregando?: boolean;
  mostrarBotaoSalvarEFecharCarregando?: boolean;

  aoClicarEmNovo?: () => void;
  aoClicarEmVoltar?: () => void;
  aoClicarEmApagar?: () => void;
  aoClicarEmSalvar?: () => void;
  aoClicarEmSalvarEFechar?: () => void;
}

export const FerramentasDeDetalhes: React.FC<FerramentasDeDetalhesProps> = ({
  textoBotaoNovo = 'Novo',
  mostrarBotaoNovo = true,
  mostrarBotaoVoltar = true,
  mostrarBotaoApagar = true,
  mostrarBotaoSalvar = true,
  mostrarBotaoSalvarEFechar = false,

  mostrarBotaoNovoCarregando = false,
  mostrarBotaoVoltarCarregando = false,
  mostrarBotaoApagarCarregando = false,
  mostrarBotaoSalvarCarregando = false,
  mostrarBotaoSalvarEFecharCarregando = false,

  aoClicarEmNovo,
  aoClicarEmVoltar,
  aoClicarEmApagar,
  aoClicarEmSalvar,
  aoClicarEmSalvarEFechar,
}) => {
  const theme = useTheme();

  const smDown = useMediaQuery(theme.breakpoints.down('sm'));
  const mdDown = useMediaQuery(theme.breakpoints.down('md'));


  return (
    <Box
      gap={1}
      marginX={1}
      padding={1}
      paddingX={2}
      display="flex"
      alignItems="center"
      height={theme.spacing(6)}
      component={Paper}
    >
  
      {(mostrarBotaoSalvar && !mostrarBotaoSalvarCarregando) && (
        <Button
          color='primary'
          disableElevation
          variant='contained'
          onClick={aoClicarEmSalvar}
          startIcon={<Icon>save</Icon>}
        ><Typography variant='button'
            whiteSpace='nowrap'
            overflow='hidden'
            textOverflow='ellipsis'>Salvar </Typography></Button>
      )}

      {   mostrarBotaoSalvarCarregando && 
      (
        <Skeleton width={108}
          height={55}/>
      )}

      {(mostrarBotaoSalvarEFechar && !mostrarBotaoSalvarEFecharCarregando && !mdDown) && (
        <Button
          color='primary'
          disableElevation
          variant='outlined'
          onClick={aoClicarEmSalvarEFechar}
          startIcon={<Icon>save</Icon>}
        ><Typography variant='button'
            whiteSpace='nowrap'
            overflow='hidden'
            textOverflow='ellipsis'>Salvar e voltar</Typography></Button>
      )}

      {   mostrarBotaoSalvarEFecharCarregando && !mdDown && 
      (
        <Skeleton width={108}
          height={55}/>
      )}

      {(mostrarBotaoApagar && !mostrarBotaoApagarCarregando) && (
        <Button
          color='primary'
          disableElevation
          variant='outlined'
          onClick={aoClicarEmApagar}
          startIcon={<Icon>delete</Icon>}
        ><Typography variant='button'
            whiteSpace='nowrap'
            overflow='hidden'
            textOverflow='ellipsis'>Apagar</Typography></Button>
      )}

      {   mostrarBotaoApagarCarregando && 
      (
        <Skeleton width={108}
          height={55}/>
      )}

      {(mostrarBotaoNovo && !mostrarBotaoNovoCarregando && !smDown) && (
        <Button
          color='primary'
          disableElevation
          variant='outlined'
          onClick={aoClicarEmNovo}
          startIcon={<Icon>add</Icon>}
        ><Typography variant='button'
            whiteSpace='nowrap'
            overflow='hidden'
            textOverflow='ellipsis'>{textoBotaoNovo}</Typography></Button>
      )}

      {   mostrarBotaoNovoCarregando && !smDown &&
      (
        <Skeleton width={108}
          height={55}/>
      )}

      { mostrarBotaoVoltar && (mostrarBotaoApagar || mostrarBotaoNovo || mostrarBotaoSalvar || mostrarBotaoSalvarEFechar) && (
        <Divider variant='middle'
          orientation='vertical' />

      )}


      {(mostrarBotaoVoltar && !mostrarBotaoVoltarCarregando) && (
        <Button
          color='primary'
          disableElevation
          variant='outlined'
          onClick={aoClicarEmVoltar}
          startIcon={<Icon>arrow_back</Icon>}
        ><Typography variant='button'
            whiteSpace='nowrap'
            overflow='hidden'
            textOverflow='ellipsis'>voltar</Typography></Button>
      )}

      {   mostrarBotaoVoltarCarregando && 
      (
        <Skeleton width={108}
          height={55}/>
      )}



    </Box>
  );
};
