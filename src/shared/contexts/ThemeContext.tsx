import { ThemeProvider } from '@mui/material';
import {
  createContext,
  ReactNode,
  useContext,
  useMemo,
  useState,
} from 'react';


import { DarkTheme } from '../themes/Dark';
import { LightTheme } from '../themes/Light';

type ThemeType = typeof LightTheme

type ThemeContextTypes = {
  theme: ThemeType;
  toggleTheme: () => void;
};

type ProviderType = {
  children: ReactNode;
};

const ThemeContext = createContext({} as ThemeContextTypes);

export const AppThemeProvider = ({ children }: ProviderType) => {
  const [themeName, setThemeName] = useState<'light' | 'dark'>('light');

  const toggleTheme = () =>
    setThemeName(name => name === 'light' ? 'dark' : 'light');

  const theme = useMemo(() => {
    if (themeName === 'light') return LightTheme;

    return DarkTheme;
  }, [themeName]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useAppTheme = () => {
  return useContext(ThemeContext);
};
