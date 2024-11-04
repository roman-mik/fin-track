import { SystemConfig } from '@chakra-ui/react';

import { colors, semanticColors } from './colors';
import { fonts } from './fonts';

export const themeConfig: SystemConfig = {
  strictTokens: true,
  cssVarsPrefix: 'fin-track',
  globalCss: {
    'html, body': {
      margin: 0,
      padding: 0,
    },
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
