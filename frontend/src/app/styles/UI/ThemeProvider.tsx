import { ChakraProvider } from '@chakra-ui/react';
import { PropsWithChildren } from 'react';

import themeConfig from '../config/themeConfig';

export const ThemeProvider: React.FC<PropsWithChildren> = ({ children }) => {
  return <ChakraProvider value={themeConfig}>{children}</ChakraProvider>;
};
