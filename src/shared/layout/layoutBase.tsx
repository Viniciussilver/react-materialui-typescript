import { Icon, Box, IconButton, Typography, useMediaQuery, useTheme } from '@mui/material';
import { ReactNode } from 'react';

import { useDrawer } from '../../shared/contexts/DrawerContext';



type LayoutProps = {
    children: ReactNode;
    title: string;
    barraDeFerramentas?: ReactNode;
  };

export const LayoutBase: React.FC<LayoutProps> = ({children, title, barraDeFerramentas}) => {
  const { toggleDrawerOpen } = useDrawer();
  
  const theme = useTheme();

  const smDown = useMediaQuery(theme.breakpoints.down('sm'));
  const mdDown = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box height='100%'
      display='flex'
      flexDirection='column'
      gap={1}>
      <Box padding={1}
        display='flex'
        alignItems='center'
        gap={1}
        height={theme.spacing(smDown ? 6 : mdDown ? 8 : 12 )}
      >
        
        {smDown && ( 
          <IconButton onClick={toggleDrawerOpen}>
            <Icon>menu</Icon>
          </IconButton>
        )}

        <Typography variant={smDown ? 'h5' : mdDown ? 'h4' : 'h3'}
          overflow='hidden'
          whiteSpace='nowrap'
          textOverflow='ellipsis'>
          {title}
        </Typography>
      </Box>

      {barraDeFerramentas && (
        <Box>
          {barraDeFerramentas}
        </Box>
      )}

      <Box flex={1}
        overflow='auto'>
        {children}
      </Box>

  

    </Box>
    
  );
};