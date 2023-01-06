import { Box, Button, Icon, Paper, useTheme } from '@mui/material';

export const FerramentasDeDetalhes: React.FC = () => {
  const theme = useTheme();

  return (
    <Box
      component={Paper}
      height={theme.spacing(5)}
      display='flex'
      alignItems='center'
      marginX={1}
      paddingX={2}
      paddingY={3}
      gap={2}
    >
      <Button color='primary'
        disableElevation
        variant='contained'
        
        startIcon={<Icon>save</Icon>}
      >salvar</Button>


      <Button color='primary'
        disableElevation
        variant='outlined'
        
        startIcon={<Icon>save</Icon>}
      >salvar e voltar</Button>
      <Button color='primary'
        disableElevation
        variant='outlined'
        
        startIcon={<Icon>delete</Icon>}
      >apagar</Button>
      <Button color='primary'
        disableElevation
        variant='outlined'
        
        startIcon={<Icon>add</Icon>}
      >Novo</Button>
      <Button color='primary'
        disableElevation
        variant='outlined'
        
        startIcon={<Icon>arrow_back</Icon>}
      >voltar</Button>
    </Box>
  );
};