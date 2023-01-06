import { Box, Button, Icon, Paper, TextField, useTheme } from '@mui/material';
import { Link } from 'react-router-dom';

type FerramentasDaListagemProps = {
  textoDaBusca?: string;
  mostrarInput?: boolean;
  onChange?: (e: string) => void;
  textoDoBotao?: string;
  mostrarBotao?: boolean;
  onClick?: () => void;
};

export const FerramentasDaListagem: React.FC<FerramentasDaListagemProps> = ({
  mostrarInput = false,
  textoDaBusca = '',
  onChange,
  mostrarBotao = true,
  textoDoBotao = 'Novo',
  onClick,
}) => {
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
      gap={1}
    >
      {mostrarInput && (
        <TextField
          size='small'
          placeholder='Search...'
          value={textoDoBotao}
          onChange={e => onChange?.(e.target.value)}
        />
      )}

      <Box flex={1}
        display='flex'
        justifyContent='flex-end'>
        {mostrarBotao && (
          <Button color='primary'
            disableElevation
            variant='contained'
            onClick={onClick}
            endIcon={<Icon>add</Icon>}
          >
            {textoDoBotao}
          </Button>
        )}
      </Box>

    </Box>
  );
};
