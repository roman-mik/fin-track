import { ChakraProvider, createSystem, defineConfig } from '@chakra-ui/react';
import { PropsWithChildren } from 'react';

import { themeConfig } from '../constants/config';

const config = defineConfig(themeConfig);

const system = createSystem(config);

export const ThemeProvider: React.FC<PropsWithChildren> = ({ children }) => {
  return <ChakraProvider value={system}>{children}</ChakraProvider>;
};
