import {
  createContext,
  ReactNode,
  useContext,
  useState,
} from 'react';

type DrawerOptionsTypes = {
  path: string;
  label: string;
  icon: string;
}

type DrawerContextTypes = {
  isDrawerOpen: boolean;
  toggleDrawerOpen: () => void;
  drawerOptions: DrawerOptionsTypes[];
  handleSetDrawerOptions: (options: DrawerOptionsTypes[]) => void;
};

type ProviderType = {
  children: ReactNode;
};

const ThemeContext = createContext({} as DrawerContextTypes);

export const DrawerProvider = ({ children }: ProviderType) => {
  const [drawerOptions, setDrawerOptions] = useState<DrawerOptionsTypes[]>([]);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawerOpen = () =>
    setIsDrawerOpen(open => !open);

  const handleSetDrawerOptions = ( options: DrawerOptionsTypes[]) =>
    setDrawerOptions(options);

  return (
    <ThemeContext.Provider value={{ isDrawerOpen, toggleDrawerOpen, drawerOptions, handleSetDrawerOptions }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useDrawer = () => {
  return useContext(ThemeContext);
};
