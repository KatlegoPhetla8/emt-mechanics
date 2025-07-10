'use client';

import { ChakraProvider, createSystem, defaultConfig } from '@chakra-ui/react';
import { ColorModeProvider } from './color-mode';
import '@fontsource/league-spartan';

export function Provider(props) {
  const system = createSystem(defaultConfig, {
    theme: {
      tokens: {
        fonts: {
          heading: { value: `"league-spartan", 'verdana'` },
          body: { value: `"league-spartan", 'verdana'` },
        },
        colors: {
          primary: { value: 'rgb(250, 130, 63)' },
          secondary: { value: 'rgb(250, 130, 63)' },
        },
      },
    },
    globalCss: {
      'html, body': {
        color: 'rgb(250, 130, 63)',
        bgColor: 'whiteAlpha.800',
      },
    },
  });
  return (
    <ChakraProvider value={system}>
      <ColorModeProvider {...props} />
    </ChakraProvider>
  );
}
