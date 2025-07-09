'use client';

import { ChakraProvider, createSystem, defaultConfig } from '@chakra-ui/react';
import { ColorModeProvider } from './color-mode';
import '@fontsource/league-spartan';

export function Provider(props) {
  const system = createSystem(defaultConfig, {
    theme: {
      tokens: {
        fonts: {
          heading: { value: `"league-spartan", 'verdana` },
          body: { value: `"league-spartan", 'verdana'` },
        },
      },
    },
    globalCss: {
      'html, body': {
        color: '#fa823f',
        bgColor: 'whiteAlpha.800',
        fontFamily: 'verdana',
      },
    },
  });
  return (
    <ChakraProvider value={system}>
      <ColorModeProvider {...props} />
    </ChakraProvider>
  );
}
