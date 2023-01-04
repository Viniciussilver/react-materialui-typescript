import { Avatar, Divider, Drawer, Icon, List, ListItemButton, ListItemIcon, ListItemText, useMediaQuery, useTheme } from '@mui/material';
import { Box } from '@mui/system';
import { ReactNode } from 'react';

import Photo from '../../../assets/myPhoto.jpg';
import { useDrawer } from '../../contexts/DrawerContext';
import { useAppTheme } from '../../contexts/ThemeContext';
import { ListLink } from '../ListItem';

type MenuLateralProps = { 
    children: ReactNode;
}

export const MenuLateral: React.FC<MenuLateralProps> = ({children}) => {
  const { toggleDrawerOpen, isDrawerOpen, drawerOptions } = useDrawer();
  const { toggleTheme } = useAppTheme();
  const theme = useTheme();

  const smDown = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <>
      <Drawer open={isDrawerOpen}  variant={smDown ? 'temporary' : 'permanent'} onClose={toggleDrawerOpen}>
        <Box height='100%' width={theme.spacing(28)} display='flex' flexDirection='column'>

          <Box width='100%' height={theme.spacing(20)} display='flex' alignItems='center' justifyContent='center'>
            <Avatar sx={{
              height: theme.spacing(12),
              width: theme.spacing(12)
            }} alt="Remy Sharp" src={Photo} />
          </Box>
          <Divider />

          <Box flex={1}>
            <List>
              {
                drawerOptions.map((item, index) => (
                  <ListLink key={index} to={item.path} icon={item.icon} label={item.label} onClick={smDown ? toggleDrawerOpen : undefined} />

                ))
              }
            </List> 
          </Box>
          <Box>
            <List >
              <ListItemButton
                onClick={toggleTheme}
              >
                <ListItemIcon>
                  <Icon>dark_mode</Icon>
                </ListItemIcon>
                <ListItemText primary="Alterar tema" />
              </ListItemButton>
            </List>
          </Box>
        </Box>

      </Drawer>
      <Box height='100vh' marginLeft={smDown ? 0 : theme.spacing(28)} bgcolor={theme.palette.background.default}>
        {children}
      </Box>
    </>
  );
};