import { SystemConfig } from '@chakra-ui/react';

import { colors, semanticColors } from './colors';
import { fonts } from './fonts';
import { global } from './global';

export const themeConfig: SystemConfig = {
  strictTokens: true,
  cssVarsPrefix: 'fin-track',
  globalCss: {
    ...global,
  },
  theme: {
    tokens: {
      ...colors,
      ...fonts,
    },
    semanticTokens: {
      ...semanticColors,
    },
  },
};
